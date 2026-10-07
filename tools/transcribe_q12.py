"""
transcribe_q12.py — Batch transcribes Question 12 audio files to word-level JSON
Produces both scence-XX.json and canonical XX-semantic-name.json
"""

import os
import json
import shutil
from pathlib import Path
import whisper

FPS = 30

def ms_to_frame(ms: float) -> int:
    return round((ms / 1000) * FPS)

def detect_sentences(words: list[dict]) -> list[dict]:
    sentences = []
    current_words = []

    for word in words:
        current_words.append(word)
        text = word["word"].strip()

        if text.endswith((".", "?", "!", "...")):
            sentence_text = " ".join(w["word"].strip() for w in current_words)
            sentences.append({
                "text": sentence_text,
                "start_ms": current_words[0]["start_ms"],
                "end_ms": current_words[-1]["end_ms"],
                "start_frame": current_words[0]["start_frame"],
                "end_frame": current_words[-1]["end_frame"],
                "word_count": len(current_words),
            })
            current_words = []

    if current_words:
        sentence_text = " ".join(w["word"].strip() for w in current_words)
        sentences.append({
            "text": sentence_text,
            "start_ms": current_words[0]["start_ms"],
            "end_ms": current_words[-1]["end_ms"],
            "start_frame": current_words[0]["start_frame"],
            "end_frame": current_words[-1]["end_frame"],
            "word_count": len(current_words),
        })

    return sentences

def detect_pauses(words: list[dict], min_pause_ms: int = 300) -> list[dict]:
    pauses = []
    for i in range(1, len(words)):
        gap_ms = words[i]["start_ms"] - words[i - 1]["end_ms"]
        if gap_ms >= min_pause_ms:
            pauses.append({
                "after_word": words[i - 1]["word"].strip(),
                "before_word": words[i]["word"].strip(),
                "start_ms": words[i - 1]["end_ms"],
                "end_ms": words[i]["start_ms"],
                "duration_ms": round(gap_ms),
                "start_frame": words[i - 1]["end_frame"],
                "end_frame": words[i]["start_frame"],
                "duration_frames": words[i]["start_frame"] - words[i - 1]["end_frame"],
            })
    return pauses

SCENE_MAP = [
    ("scence-01.mp3", "01-intro-roadmap.json"),
    ("scence-02.mp3", "02-understand.json"),
    ("scence-03.mp3", "03-brute-trace.json"),
    ("scence-04.mp3", "04-brute-code.json"),
    ("scence-05.mp3", "05-why-brute.json"),
    ("scence-06.mp3", "06-optimal-idea.json"),
    ("scence-07.mp3", "07-optimal-trace.json"),
    ("scence-08.mp3", "08-optimal-code.json"),
    ("scence-09.mp3", "09-complexity.json"),
    ("scence-10.mp3", "10-recap.json"),
]

def main():
    audio_dir = Path("questions/01-arrays-hashing/012-next-permutation/audio")
    sync_dir = Path("questions/01-arrays-hashing/012-next-permutation/sync")
    sync_dir.mkdir(exist_ok=True)

    print("Loading Whisper medium model...")
    model = whisper.load_model("medium")

    for mp3_name, canonical_json_name in SCENE_MAP:
        audio_path = audio_dir / mp3_name
        stem_json_path = sync_dir / f"{Path(mp3_name).stem}.json"
        canonical_json_path = sync_dir / canonical_json_name

        # If already transcribed (e.g. scence-01), just make sure canonical copy exists
        if stem_json_path.exists() and not canonical_json_path.exists():
            print(f"Copying existing {stem_json_path} -> {canonical_json_path}")
            with open(stem_json_path, "r", encoding="utf-8") as f:
                data = json.load(f)
            data["audio_file"] = canonical_json_name.replace(".json", ".mp3")
            with open(canonical_json_path, "w", encoding="utf-8") as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
            continue
        elif stem_json_path.exists() and canonical_json_path.exists():
            print(f"Skipping already completed {mp3_name}")
            continue

        print(f"\n--- Transcribing {mp3_name} ---")
        result = model.transcribe(str(audio_path), word_timestamps=True)

        words = []
        for segment in result["segments"]:
            for word_data in segment.get("words", []):
                start_ms = round(word_data["start"] * 1000)
                end_ms = round(word_data["end"] * 1000)
                words.append({
                    "word": word_data["word"].strip(),
                    "start_ms": start_ms,
                    "end_ms": end_ms,
                    "start_frame": ms_to_frame(start_ms),
                    "end_frame": ms_to_frame(end_ms),
                })

        total_duration_ms = words[-1]["end_ms"] if words else 0

        # Save stem output (e.g. scence-02.json)
        output_stem = {
            "audio_file": mp3_name,
            "duration_ms": total_duration_ms,
            "duration_frames": ms_to_frame(total_duration_ms),
            "fps": FPS,
            "word_count": len(words),
            "words": words,
            "sentences": detect_sentences(words),
            "pauses": detect_pauses(words),
        }
        with open(stem_json_path, "w", encoding="utf-8") as f:
            json.dump(output_stem, f, indent=2, ensure_ascii=False)

        # Save canonical output (e.g. 02-understand.json)
        output_canonical = dict(output_stem)
        output_canonical["audio_file"] = canonical_json_name.replace(".json", ".mp3")
        with open(canonical_json_path, "w", encoding="utf-8") as f:
            json.dump(output_canonical, f, indent=2, ensure_ascii=False)

        print(f"DONE: {canonical_json_name} ({len(words)} words, {output_canonical['duration_frames']} frames)")

    print("\nAll transcriptions completed successfully!")

if __name__ == "__main__":
    main()
