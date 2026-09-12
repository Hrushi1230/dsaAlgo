"""
audio-to-json.py — Convert your voice recordings to word-level JSON

Uses OpenAI Whisper (medium model) to transcribe audio and extract
word-by-word timestamps with frame numbers for Remotion sync.

Usage:
    # Single file
    python tools/audio-to-json.py path/to/audio/04-trace.mp3

    # All files in a directory
    python tools/audio-to-json.py path/to/audio/

Output:
    Creates a .json file next to each .mp3 (or in ../sync/ if in a question folder)
    with word timestamps, sentence groupings, and detected pauses.
"""

import sys
import os
import json
import whisper
from pathlib import Path

FPS = 30  # Remotion default


def ms_to_frame(ms: float) -> int:
    """Convert milliseconds to frame number at 30fps."""
    return round((ms / 1000) * FPS)


def detect_sentences(words: list[dict]) -> list[dict]:
    """Group words into sentences based on punctuation and pauses."""
    sentences = []
    current_words = []

    for word in words:
        current_words.append(word)
        text = word["word"].strip()

        # End sentence on period, question mark, exclamation
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

    # Remaining words as final sentence
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
    """Detect natural pauses between words (gaps > min_pause_ms)."""
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


_MODEL = None


def get_model():
    global _MODEL
    if _MODEL is None:
        print("Loading Whisper medium model...")
        _MODEL = whisper.load_model("medium")
    return _MODEL


def transcribe_audio(audio_path: str) -> dict:
    """Transcribe audio file to word-level JSON with frame numbers."""
    model = get_model()

    print(f"Transcribing: {audio_path}")
    result = model.transcribe(audio_path, word_timestamps=True)

    # Extract word-level data
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

    # Calculate total duration
    if words:
        total_duration_ms = words[-1]["end_ms"]
    else:
        total_duration_ms = 0

    # Build output
    output = {
        "audio_file": os.path.basename(audio_path),
        "duration_ms": total_duration_ms,
        "duration_frames": ms_to_frame(total_duration_ms),
        "fps": FPS,
        "word_count": len(words),
        "words": words,
        "sentences": detect_sentences(words),
        "pauses": detect_pauses(words),
    }

    return output


def process_file(audio_path: str) -> None:
    """Process a single audio file and save JSON output."""
    path = Path(audio_path)

    if not path.exists():
        print(f"ERROR: File not found: {audio_path}")
        sys.exit(1)

    if path.suffix.lower() not in (".mp3", ".wav", ".m4a", ".ogg", ".flac"):
        print(f"SKIP: Not an audio file: {audio_path}")
        return

    result = transcribe_audio(str(path))

    # Determine output path
    # If audio is in a questions/*/audio/ folder, output to questions/*/sync/
    parent = path.parent
    if parent.name == "audio":
        sync_dir = parent.parent / "sync"
        sync_dir.mkdir(exist_ok=True)
        output_path = sync_dir / f"{path.stem}.json"
    else:
        output_path = path.with_suffix(".json")

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(result, f, indent=2, ensure_ascii=False)

    print(f"DONE: {output_path}")
    print(f"  Words: {result['word_count']}")
    print(f"  Sentences: {len(result['sentences'])}")
    print(f"  Pauses: {len(result['pauses'])}")
    print(f"  Duration: {result['duration_ms']}ms ({result['duration_frames']} frames)")


def main():
    if len(sys.argv) < 2:
        print("Usage:")
        print("  python tools/audio-to-json.py path/to/audio.mp3")
        print("  python tools/audio-to-json.py path/to/audio/")
        sys.exit(1)

    target = Path(sys.argv[1])

    if target.is_file():
        process_file(str(target))
    elif target.is_dir():
        audio_files = sorted(
            p for p in target.iterdir()
            if p.suffix.lower() in (".mp3", ".wav", ".m4a", ".ogg", ".flac")
        )
        if not audio_files:
            print(f"No audio files found in {target}")
            sys.exit(1)
        print(f"Processing {len(audio_files)} audio files...")
        for audio_file in audio_files:
            process_file(str(audio_file))
    else:
        print(f"ERROR: Path not found: {target}")
        sys.exit(1)


if __name__ == "__main__":
    main()
