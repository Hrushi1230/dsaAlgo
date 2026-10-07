import json
from pathlib import Path

words_file = Path("questions/01-arrays-hashing/015-spiral-matrix/sync/01-roadmap.json")
with open(words_file, "r", encoding="utf-8") as f:
    data = json.load(f)

words = data["words"]

anchors = [
    {
        "id": "S01_WELCOME",
        "phrase": "Welcome back to Code with Animation.",
        "start_word_idx": 0,
        "end_word_idx": 5,
        "start_frame": words[0]["start_frame"],
        "end_frame": words[5]["end_frame"],
        "start_ms": words[0]["start_ms"],
        "end_ms": words[5]["end_ms"],
    },
    {
        "id": "S01_Q14",
        "phrase": "Question 14,",
        "start_word_idx": 6,
        "end_word_idx": 7,
        "start_frame": words[6]["start_frame"],
        "end_frame": words[7]["end_frame"],
        "start_ms": words[6]["start_ms"],
        "end_ms": words[7]["end_ms"],
    },
    {
        "id": "S01_ROTATE",
        "phrase": "rotate image",
        "start_word_idx": 8,
        "end_word_idx": 9,
        "start_frame": words[8]["start_frame"],
        "end_frame": words[9]["end_frame"],
        "start_ms": words[8]["start_ms"],
        "end_ms": words[9]["end_ms"],
    },
    {
        "id": "S01_COMPLETE",
        "phrase": "is complete.",
        "start_word_idx": 10,
        "end_word_idx": 11,
        "start_frame": words[10]["start_frame"],
        "end_frame": words[11]["end_frame"],
        "start_ms": words[10]["start_ms"],
        "end_ms": words[11]["end_ms"],
    },
    {
        "id": "S01_PROGRESS",
        "phrase": "Our progress is now 14 out of 227.",
        "start_word_idx": 12,
        "end_word_idx": 19,
        "start_frame": words[12]["start_frame"],
        "end_frame": words[19]["end_frame"],
        "start_ms": words[12]["start_ms"],
        "end_ms": words[19]["end_ms"],
    },
    {
        "id": "S01_Q15",
        "phrase": "And next, we have question 15,",
        "start_word_idx": 20,
        "end_word_idx": 25,
        "start_frame": words[20]["start_frame"],
        "end_frame": words[25]["end_frame"],
        "start_ms": words[20]["start_ms"],
        "end_ms": words[25]["end_ms"],
    },
    {
        "id": "S01_TITLE",
        "phrase": "spiral matrix.",
        "start_word_idx": 26,
        "end_word_idx": 27,
        "start_frame": words[26]["start_frame"],
        "end_frame": words[27]["end_frame"],
        "start_ms": words[26]["start_ms"],
        "end_ms": words[27]["end_ms"],
    },
    {
        "id": "S01_LC",
        "phrase": "Lead code 54,",
        "start_word_idx": 28,
        "end_word_idx": 30,
        "start_frame": words[28]["start_frame"],
        "end_frame": words[30]["end_frame"],
        "start_ms": words[28]["start_ms"],
        "end_ms": words[30]["end_ms"],
    },
    {
        "id": "S01_MEDIUM",
        "phrase": "medium.",
        "start_word_idx": 31,
        "end_word_idx": 31,
        "start_frame": words[31]["start_frame"],
        "end_frame": words[31]["end_frame"],
        "start_ms": words[31]["start_ms"],
        "end_ms": words[31]["end_ms"],
    },
    {
        "id": "S01_FIXED",
        "phrase": "This time, we are not changing the matrix.",
        "start_word_idx": 32,
        "end_word_idx": 39,
        "start_frame": words[32]["start_frame"],
        "end_frame": words[39]["end_frame"],
        "start_ms": words[32]["start_ms"],
        "end_ms": words[39]["end_ms"],
    },
    {
        "id": "S01_READ",
        "phrase": "We only need to read its values",
        "start_word_idx": 40,
        "end_word_idx": 46,
        "start_frame": words[40]["start_frame"],
        "end_frame": words[46]["end_frame"],
        "start_ms": words[40]["start_ms"],
        "end_ms": words[46]["end_ms"],
    },
    {
        "id": "S01_SPIRAL",
        "phrase": "in spiral order.",
        "start_word_idx": 47,
        "end_word_idx": 49,
        "start_frame": words[47]["start_frame"],
        "end_frame": words[49]["end_frame"],
        "start_ms": words[47]["start_ms"],
        "end_ms": words[49]["end_ms"],
    },
    {
        "id": "S01_UNDERSTAND",
        "phrase": "Let's understand it.",
        "start_word_idx": 50,
        "end_word_idx": 52,
        "start_frame": words[50]["start_frame"],
        "end_frame": words[52]["end_frame"],
        "start_ms": words[50]["start_ms"],
        "end_ms": words[52]["end_ms"],
    }
]

out = {
    "scene": "01-roadmap",
    "total_frames": data["duration_frames"],
    "duration_ms": data["duration_ms"],
    "fps": 30,
    "anchor_count": len(anchors),
    "anchors": anchors
}

out_path = Path("questions/01-arrays-hashing/015-spiral-matrix/sync/01-roadmap.anchors.json")
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(out, f, indent=2, ensure_ascii=False)

print("Generated sync/01-roadmap.anchors.json successfully:")
for a in anchors:
    print(f"  {a['id']}: F{a['start_frame']}..F{a['end_frame']} | \"{a['phrase']}\"")
