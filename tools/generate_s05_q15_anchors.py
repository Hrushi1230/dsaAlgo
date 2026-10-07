import json
from pathlib import Path

words_file = Path("questions/01-arrays-hashing/015-spiral-matrix/sync/05-why-visited-unnecessary.json")
with open(words_file, "r", encoding="utf-8") as f:
    data = json.load(f)

words = data["words"]
fps = data.get("fps", 30)

raw_anchors = [
    ("S05_CORRECT", 0, 3, "Method 1 is correct"),
    ("S05_TIME", 4, 10, "and already takes O m times n time."),
    ("S05_EXTRA", 11, 18, "The extra cost comes from the visited matrix."),
    ("S05_LOOK", 19, 23, "Now look at our matrix."),
    ("S05_AFTER_OUTER", 24, 31, "After the full outer layer has been processed,"),
    ("S05_SEE", 32, 34, "see what remains."),
    ("S05_RECT", 35, 39, "It is still one rectangle."),
    ("S05_BETTER", 40, 45, "That gives us a better idea."),
    ("S05_INSTEAD", 46, 51, "Instead of remembering every processed cell,"),
    ("S05_REMEMBER_RECT", 52, 60, "we can simply remember which rectangle is still unprocessed."),
    ("S05_FOUR", 61, 67, "And one rectangle needs only four boundaries."),
    ("S05_TOP", 68, 68, "Top,"),
    ("S05_BOTTOM", 69, 69, "bottom,"),
    ("S05_LEFT_RIGHT", 70, 72, "left and right."),
    ("S05_REPLACE", 73, 83, "So we can replace an entire visited matrix with four integers."),
    ("S05_METHOD2", 84, 88, "That gives us Method 2.")
]

anchors = []
for aid, s_idx, e_idx, phrase in raw_anchors:
    s_word = words[s_idx]
    e_word = words[e_idx]
    anchors.append({
        "id": aid,
        "phrase": phrase,
        "start_word_idx": s_idx,
        "end_word_idx": e_idx,
        "start_frame": s_word["start_frame"],
        "end_frame": e_word["end_frame"],
        "start_ms": s_word["start_ms"],
        "end_ms": e_word["end_ms"]
    })

out_data = {
    "scene": "05-why-visited-unnecessary",
    "total_frames": data["duration_frames"],
    "duration_ms": data["duration_ms"],
    "fps": fps,
    "anchor_count": len(anchors),
    "anchors": anchors
}

out_path = Path("questions/01-arrays-hashing/015-spiral-matrix/sync/05-why-visited-unnecessary.anchors.json")
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(out_data, f, indent=2)

print(f"Generated {out_path} successfully with {len(anchors)} anchors and {data['duration_frames']} frames.")
