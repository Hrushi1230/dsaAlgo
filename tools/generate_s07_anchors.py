import json

with open("questions/01-arrays-hashing/013-set-matrix-zeroes/sync/07-markers-code.json") as f:
    sync_data = json.load(f)

words = sync_data["words"]

raw_anchors = [
    ("S07_FIRST", 0, 0, "First,", "Empty Method2 code focus"),
    ("S07_MN", 1, 4, "store m and n.", "m = len(matrix), n = len(matrix[0])"),
    ("S07_ROWARR", 5, 12, "Then create rowZero with m false values", "rowZero = [False] * m"),
    ("S07_COLARR", 13, 20, "and create colZero with n false values.", "colZero = [False] * n"),
    ("S07_DISC", 21, 27, "The first pass is only for discovery.", "Pass 1 invariant"),
    ("S07_EVERY", 28, 30, "For every cell,", "Nested loops r and c"),
    ("S07_IF", 31, 34, "if matrix is zero,", "if matrix[r][c] == 0:"),
    ("S07_SETROW", 35, 39, "set row zero to true", "rowZero[r] = True"),
    ("S07_SETCOL", 40, 44, "and col zero to true.", "colZero[c] = True"),
    ("S07_IMPORTANT", 45, 48, "Notice the important part.", "Discovery focus"),
    ("S07_NOTCHANGE", 49, 57, "During this pass, we are not changing the matrix.", "Matrix untouched in Pass 1"),
    ("S07_RECORD", 58, 62, "We are only recording information.", "Recording to rails"),
    ("S07_AFTER", 63, 70, "After discovery is complete, start the second pass.", "Pass 2 start"),
    ("S07_EVERYCELL", 71, 73, "For every cell,", "Nested loops r and c in Pass 2"),
    ("S07_CHECKROW", 74, 77, "check its row marker", "rowZero[r]"),
    ("S07_CHECKCOL", 78, 81, "and its column marker.", "colZero[c]"),
    ("S07_EITHER", 82, 86, "If either one is true,", "if rowZero[r] or colZero[c]:"),
    ("S07_SETZERO", 87, 92, "set that matrix cell to zero.", "matrix[r][c] = 0"),
    ("S07_ALL", 93, 95, "That is all.", "Complete Method 2 implementation"),
    ("S07_FIRSTREM", 96, 103, "The code directly follows the invariant: First, remember,", "Invariant part 1: remember"),
    ("S07_THENMUT", 104, 105, "then mutate.", "Invariant part 2: mutate"),
    ("S07_TIME", 106, 116, "The time is already linear in the number of matrix cells,", "Time complexity: O(M x N)"),
    ("S07_MEMORY", 117, 130, "but the extra memory is still proportional to the number of rows plus columns.", "Space complexity: O(M + N)"),
    ("S07_REMOVE", 131, 138, "Can we remove even those two marker arrays?", "Provocative question leading to optimal"),
    ("S07_LOOK", 139, 144, "Look carefully at the matrix itself.", "Inspection of matrix row 0 & col 0"),
    ("S07_STORAGE", 145, 153, "It already contains storage in exactly those two dimensions.", "Matrix already has M and N cells on boundary"),
]

anchors_obj = {}
for aid, s_idx, e_idx, phrase, note in raw_anchors:
    s_word = words[s_idx]
    e_word = words[e_idx]
    anchors_obj[aid] = {
        "start_word_id": f"W{s_idx:04d}",
        "end_word_id": f"W{e_idx:04d}",
        "phrase": phrase,
        "start_ms": s_word["start_ms"],
        "end_ms": e_word["end_ms"],
        "start_seconds": round(s_word["start_ms"] / 1000.0, 3),
        "end_seconds": round(e_word["end_ms"] / 1000.0, 3),
        "start_frame": s_word["start_frame"],
        "end_frame": e_word["end_frame"],
        "duration_frames": e_word["end_frame"] - s_word["start_frame"] + 1,
        "note": note,
    }

out_path = "questions/01-arrays-hashing/013-set-matrix-zeroes/sync/07-markers-code.anchors.json"
with open(out_path, "w") as f:
    json.dump(anchors_obj, f, indent=2)

print(f"Generated {len(anchors_obj)} anchors to {out_path}")
