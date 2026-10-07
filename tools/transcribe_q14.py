"""
transcribe_q14.py — Batch transcribes Question 14 (Rotate Image) audio files to word-level JSON
Produces both scence-XX.json and canonical XX-semantic-name.json
Also copies MP3s to remotion-project/public/audio/014/
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
    (1, "01-intro-roadmap.json", ["01-roadmap.json"]),
    (2, "02-understand.json", ["02-mapping.json"]),
    (3, "03-method1-trace.json", []),
    (4, "04-method1-code.json", []),
    (5, "05-why-extra-space.json", ["05-derive-cycles.json", "05-why-inplace-harder.json"]),
    (6, "06-method2-trace.json", []),
    (7, "07-method2-code.json", []),
    (8, "08-why-method2-complex.json", ["08-derive-method3.json"]),
    (9, "09-method3-idea.json", ["09-method3-proof.json"]),
    (10, "10-method3-trace.json", []),
    (11, "11-method3-code.json", []),
    (12, "12-complexity.json", []),
    (13, "13-recap.json", []),
]

def find_audio_file(audio_dir: Path, idx: int) -> Path | None:
    patterns = [
        f"scence{idx:02d}.mp3",
        f"scence-{idx:02d}.mp3",
        f"scene{idx:02d}.mp3",
        f"scene-{idx:02d}.mp3",
    ]
    for p in patterns:
        f = audio_dir / p
        if f.exists():
            return f
    return None

def main():
    audio_dir = Path("questions/01-arrays-hashing/014-rotate-image/audio")
    sync_dir = Path("questions/01-arrays-hashing/014-rotate-image/sync")
    public_audio_dir = Path("remotion-project/public/audio/014")
    
    sync_dir.mkdir(parents=True, exist_ok=True)
    public_audio_dir.mkdir(parents=True, exist_ok=True)

    print("Copying audio files to remotion-project/public/audio/014/...")
    for idx, canonical_json_name, _ in SCENE_MAP:
        src_path = find_audio_file(audio_dir, idx)
        if src_path and src_path.exists():
            canonical_mp3_name = canonical_json_name.replace(".json", ".mp3")
            for dest_name in [f"scence{idx:02d}.mp3", f"scence-{idx:02d}.mp3", canonical_mp3_name]:
                dest = public_audio_dir / dest_name
                shutil.copy2(src_path, dest)

    print("Loading Whisper medium model (cuda)...")
    model = whisper.load_model("medium", device="cuda")

    for idx, canonical_json_name, aliases in SCENE_MAP:
        audio_path = find_audio_file(audio_dir, idx)
        if not audio_path or not audio_path.exists():
            print(f"Notice: Audio for scene {idx:02d} not found in {audio_dir}, skipping.")
            continue

        canonical_json_path = sync_dir / canonical_json_name
        stem1 = sync_dir / f"scence{idx:02d}.json"
        stem2 = sync_dir / f"scence-{idx:02d}.json"

        if canonical_json_path.exists() and stem1.exists() and stem2.exists():
            print(f"Skipping already completed scene {idx:02d}")
            continue

        print(f"\n--- Transcribing {audio_path.name} -> {canonical_json_name} ---")
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
        canonical_mp3_name = canonical_json_name.replace(".json", ".mp3")

        output_data = {
            "audio_file": canonical_mp3_name,
            "duration_ms": total_duration_ms,
            "duration_frames": ms_to_frame(total_duration_ms),
            "fps": FPS,
            "word_count": len(words),
            "words": words,
            "sentences": detect_sentences(words),
            "pauses": detect_pauses(words),
        }

        # Write canonical
        with open(canonical_json_path, "w", encoding="utf-8") as f:
            json.dump(output_data, f, indent=2, ensure_ascii=False)

        # Write stem names
        with open(stem1, "w", encoding="utf-8") as f:
            json.dump(output_data, f, indent=2, ensure_ascii=False)
        with open(stem2, "w", encoding="utf-8") as f:
            json.dump(output_data, f, indent=2, ensure_ascii=False)

        # Write aliases
        for alias in aliases:
            with open(sync_dir / alias, "w", encoding="utf-8") as f:
                json.dump(output_data, f, indent=2, ensure_ascii=False)

        print(f"DONE: {canonical_json_name} ({len(words)} words, {output_data['duration_frames']} frames, {total_duration_ms / 1000:.2f}s)")

    print("\nQ14 transcription pass complete.")

if __name__ == "__main__":
    main()
