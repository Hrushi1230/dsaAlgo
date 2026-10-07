"""
retranscribe_s10.py — Transcribes Scene 10 audio completely with word timestamps
"""
import whisper
import json
from pathlib import Path

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

def main():
    audio_path = Path("questions/01-arrays-hashing/013-set-matrix-zeroes/audio/scence-10.mp3")
    print(f"Loading Whisper medium model to transcribe {audio_path}...")
    model = whisper.load_model("medium")
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
    print(f"Total words: {len(words)}, duration: {total_duration_ms}ms ({total_duration_ms/1000:.2f}s)")
    print("Last 10 words:", [w["word"] for w in words[-10:]])

    output_data = {
        "audio_file": "10-optimal-trace.mp3",
        "duration_ms": total_duration_ms,
        "duration_frames": ms_to_frame(total_duration_ms),
        "fps": FPS,
        "word_count": len(words),
        "words": words,
        "sentences": detect_sentences(words),
        "pauses": detect_pauses(words),
    }

    sync_path1 = Path("questions/01-arrays-hashing/013-set-matrix-zeroes/sync/10-optimal-trace.json")
    sync_path2 = Path("questions/01-arrays-hashing/013-set-matrix-zeroes/sync/scence-10.json")

    with open(sync_path1, "w", encoding="utf-8") as f:
        json.dump(output_data, f, indent=2, ensure_ascii=False)
    with open(sync_path2, "w", encoding="utf-8") as f:
        json.dump(output_data, f, indent=2, ensure_ascii=False)

    print("Wrote complete sync to", sync_path1, "and", sync_path2)

if __name__ == "__main__":
    main()
