import json
from pathlib import Path

words_file = Path("questions/01-arrays-hashing/015-spiral-matrix/sync/03-method1-trace.json")
with open(words_file, "r", encoding="utf-8") as f:
    data = json.load(f)

words = data["words"]
fps = data.get("fps", 30)

raw_anchors = [
    ("S03_START", 0, 6, "We start at the top-left cell"),
    ("S03_ONE", 7, 8, "value 1."),
    ("S03_DIR_RIGHT", 9, 13, "Our current direction is right."),
    ("S03_TOP_SPAN", 14, 24, "We move across the complete top row, from 1 through 6."),
    ("S03_AT6_OUT", 25, 36, "At 6, the next position to the right is outside the matrix,"),
    ("S03_TURN_DOWN", 37, 44, "so we turn clockwise, from right to down."),
    ("S03_RIGHT_SPAN", 45, 56, "Now we move down the complete right edge, from 12 through 30."),
    ("S03_AT30_OUT", 57, 66, "At 30, the next downward position is outside the matrix,"),
    ("S03_TURN_LEFT", 67, 73, "so we turn from down to left."),
    ("S03_BOTTOM_SPAN", 74, 84, "Now we move across the bottom edge, from 29 through 25."),
    ("S03_AT25_OUT", 85, 96, "At 25, the next position to the left is outside the matrix,"),
    ("S03_TURN_UP", 97, 103, "so we turn from left to up."),
    ("S03_LEFT_TO7", 104, 115, "Now we move upward along the left edge until we reach 7."),
    ("S03_DIFFERENT", 116, 120, "And here, something different happens."),
    ("S03_7_INSIDE", 121, 129, "The cell above 7 is still inside the matrix,"),
    ("S03_1_VISITED", 130, 138, "but it contains one, and one was already visited."),
    ("S03_NOT_BORDER", 139, 149, "So this time, we are not turning because of the border,"),
    ("S03_VISITED_CAUSE", 150, 159, "we are turning because the next cell is already visited."),
    ("S03_TURN_RIGHT", 160, 166, "We turn clockwise, from up to right."),
    ("S03_INNER_POINT", 167, 178, "This is the important point that lets us enter the inner spiral."),
    ("S03_INNER_TOP", 179, 186, "Now we move right, from 8 through 11."),
    ("S03_11_VIS", 187, 197, "At 11, the next cell is 12. 12 is already visited,"),
    ("S03_TURN_DOWN2", 198, 204, "so we turn from right to down."),
    ("S03_INNER_RIGHT", 205, 210, "Now we move down until 23."),
    ("S03_23_VIS", 211, 222, "At 23, the next cell below is 29. 29 is already visited,"),
    ("S03_TURN_LEFT2", 223, 229, "so we turn from down to left."),
    ("S03_INNER_BOTTOM", 230, 235, "Now we move left until 20."),
    ("S03_20_VIS", 236, 246, "At 20, the next cell is 19. 19 is already visited,"),
    ("S03_TURN_UP2", 247, 253, "so we turn from left to up."),
    ("S03_REACH14", 254, 258, "Moving upward, we reach 14."),
    ("S03_14_VIS", 259, 268, "The cell above 14 is 8. 8 was already visited,"),
    ("S03_TURN_RIGHT2", 269, 275, "so we turn from up to right."),
    ("S03_FINAL_TWO", 276, 285, "Now only the final two cells remain, 15 and 16."),
    ("S03_ANSWER30", 286, 294, "After adding 16, the answer contains exactly 30 values,"),
    ("S03_MATRIX30", 295, 306, "and the matrix contains 5 times 6, which is also 30 cells."),
    ("S03_STOP", 307, 317, "So every cell has been visited exactly once, and we stop."),
    ("S03_LOGIC", 318, 344, "So method 1 always follows the same logic. Process the current cell, inspect the next position, and turn when that next position is outside or already visited."),
    ("S03_CODE_HANDOFF", 345, 352, "Now let's map this exact trace into code.")
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
    "scene": "03-method1-trace",
    "total_frames": data["duration_frames"],
    "duration_ms": data["duration_ms"],
    "fps": fps,
    "anchor_count": len(anchors),
    "anchors": anchors
}

out_path = Path("questions/01-arrays-hashing/015-spiral-matrix/sync/03-method1-trace.anchors.json")
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(out_data, f, indent=2)

print(f"Generated {out_path} successfully with {len(anchors)} anchors and {data['duration_frames']} frames.")
