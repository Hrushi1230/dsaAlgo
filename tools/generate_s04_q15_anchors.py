import json
from pathlib import Path

words_file = Path("questions/01-arrays-hashing/015-spiral-matrix/sync/04-method1-code.json")
with open(words_file, "r", encoding="utf-8") as f:
    data = json.load(f)

words = data["words"]
fps = data.get("fps", 30)

raw_anchors = [
    ("S04_INTRO", 0, 0, "First,"),
    ("S04_DIMS", 1, 8, "we store the number of rows and columns."),
    ("S04_DIRS", 9, 17, "Then we keep the four directions in clockwise order."),
    ("S04_DIR_WORDS", 18, 22, "Right, down, left, and up."),
    ("S04_VISITED", 23, 35, "We also create a visited matrix with the same dimensions as the input."),
    ("S04_START_STATE", 36, 47, "Our row and column start at zero. And direction zero means right."),
    ("S04_LOOP", 48, 60, "The loop allows exactly m times n visits, one for every matrix cell."),
    ("S04_PROCESS", 61, 75, "For the current cell, we add its value to the answer and mark it visited."),
    ("S04_IMPORTANT_CHECK", 76, 83, "Then there is one small but important check."),
    ("S04_ALL_VALUES", 84, 96, "If the answer already contains all m times n values, we stop immediately."),
    ("S04_WHY", 97, 97, "Why?"),
    ("S04_NO_NEXT", 98, 112, "Because after the final valid cell, there is no next unvisited cell to move to."),
    ("S04_WITHOUT", 113, 123, "Without this check, we would unnecessarily try to calculate another move."),
    ("S04_NEXTCALC", 124, 135, "Otherwise, we calculate the next row and column using the current direction."),
    ("S04_IFCOND", 136, 146, "If that next position is outside the matrix or already visited,"),
    ("S04_ROTATE", 147, 151, "we rotate the direction once"),
    ("S04_RECALC", 152, 157, "and calculate the next position again."),
    ("S04_MOVE", 158, 161, "Then we move there."),
    ("S04_MATCH", 162, 169, "That is exactly the rule. We just traced."),
    ("S04_TIME", 170, 184, "Every cell enters the answer once. So the time complexity is O m times n."),
    ("S04_SPACE", 185, 203, "But the visited matrix also stores m times n states. So the auxiliary space is O m times n."),
    ("S04_TIME_OPTIMAL", 204, 212, "The time is already optimal for reading every cell."),
    ("S04_QUESTION", 213, 224, "But now the question is, do we really need this visited matrix?")
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
    "scene": "04-method1-code",
    "total_frames": data["duration_frames"],
    "duration_ms": data["duration_ms"],
    "fps": fps,
    "anchor_count": len(anchors),
    "anchors": anchors
}

out_path = Path("questions/01-arrays-hashing/015-spiral-matrix/sync/04-method1-code.anchors.json")
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(out_data, f, indent=2)

print(f"Generated {out_path} successfully with {len(anchors)} anchors and {data['duration_frames']} frames.")
