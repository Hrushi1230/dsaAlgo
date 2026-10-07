import json

with open("questions/01-arrays-hashing/014-rotate-image/sync/04-method1-code.json") as f:
    sync_data = json.load(f)

words = sync_data["words"]

raw_anchors = [
    {
        "anchor_id": "S04_INIT_RESULT",
        "name": "Store n and allocate result matrix",
        "phrase": "First, store n, the size of the matrix, then create a new n by n result matrix.",
        "word_start_index": 0,
        "word_end_index": 16,
        "start_frame": words[0]["start_frame"],
        "end_frame": words[16]["end_frame"],
        "start_ms": words[0]["start_ms"],
        "end_ms": words[16]["end_ms"],
        "code_lines": [1, 2, 3, 4],
        "active_lines": [3, 4]
    },
    {
        "anchor_id": "S04_NESTED_LOOPS",
        "name": "Nested loops for r and c",
        "phrase": "Now loop through every source row r and every source column c.",
        "word_start_index": 17,
        "word_end_index": 28,
        "start_frame": words[17]["start_frame"],
        "end_frame": words[28]["end_frame"],
        "start_ms": words[17]["start_ms"],
        "end_ms": words[28]["end_ms"],
        "code_lines": [5, 6],
        "active_lines": [5, 6]
    },
    {
        "anchor_id": "S04_MAPPING_ASSIGNMENT",
        "name": "Assign to result[c][n - 1 - r]",
        "phrase": "For the current value, matrix c, write it into results in minus 1 minus r.",
        "word_start_index": 29,
        "word_end_index": 43,
        "start_frame": words[29]["start_frame"],
        "end_frame": words[43]["end_frame"],
        "start_ms": words[29]["start_ms"],
        "end_ms": words[43]["end_ms"],
        "code_lines": [7],
        "active_lines": [7]
    },
    {
        "anchor_id": "S04_PROVEN_MAPPING",
        "name": "Direct implementation of proven coordinate mapping",
        "phrase": "This line directly implements the coordinate mapping we already proved.",
        "word_start_index": 44,
        "word_end_index": 53,
        "start_frame": words[44]["start_frame"],
        "end_frame": words[53]["end_frame"],
        "start_ms": words[44]["start_ms"],
        "end_ms": words[53]["end_ms"],
        "code_lines": [7],
        "active_lines": [7]
    },
    {
        "anchor_id": "S04_ALL_PLACED",
        "name": "Continue until all cells placed",
        "phrase": "We continue until every source cell has been placed.",
        "word_start_index": 54,
        "word_end_index": 62,
        "start_frame": words[54]["start_frame"],
        "end_frame": words[62]["end_frame"],
        "start_ms": words[54]["start_ms"],
        "end_ms": words[62]["end_ms"],
        "code_lines": [5, 6, 7],
        "active_lines": [5, 6, 7]
    },
    {
        "anchor_id": "S04_COPY_BACK",
        "name": "Copy completed result back into matrix",
        "phrase": "Then, copy the completed result back into the original matrix so the final answer is correct.",
        "word_start_index": 63,
        "word_end_index": 78,
        "start_frame": words[63]["start_frame"],
        "end_frame": words[78]["end_frame"],
        "start_ms": words[63]["start_ms"],
        "end_ms": words[78]["end_ms"],
        "code_lines": [9, 10, 11],
        "active_lines": [9, 10, 11]
    },
    {
        "anchor_id": "S04_COMPLEXITY_INTRO",
        "name": "Complexity analysis introduction",
        "phrase": "Now complexity.",
        "word_start_index": 79,
        "word_end_index": 80,
        "start_frame": words[79]["start_frame"],
        "end_frame": words[80]["end_frame"],
        "start_ms": words[79]["start_ms"],
        "end_ms": words[80]["end_ms"],
        "code_lines": [],
        "active_lines": []
    },
    {
        "anchor_id": "S04_TIME_CELLS",
        "name": "Process n times n cells",
        "phrase": "We process n times n cells.",
        "word_start_index": 81,
        "word_end_index": 86,
        "start_frame": words[81]["start_frame"],
        "end_frame": words[86]["end_frame"],
        "start_ms": words[81]["start_ms"],
        "end_ms": words[86]["end_ms"],
        "code_lines": [5, 6],
        "active_lines": [5, 6]
    },
    {
        "anchor_id": "S04_TIME_ON2",
        "name": "Time complexity O(n^2)",
        "phrase": "So the time complexity is O of n squared.",
        "word_start_index": 87,
        "word_end_index": 95,
        "start_frame": words[87]["start_frame"],
        "end_frame": words[95]["end_frame"],
        "start_ms": words[87]["start_ms"],
        "end_ms": words[95]["end_ms"],
        "code_lines": [],
        "active_lines": []
    },
    {
        "anchor_id": "S04_SPACE_CELLS",
        "name": "Result matrix contains n times n cells",
        "phrase": "But the result matrix also contains n times n cells.",
        "word_start_index": 96,
        "word_end_index": 105,
        "start_frame": words[96]["start_frame"],
        "end_frame": words[105]["end_frame"],
        "start_ms": words[96]["start_ms"],
        "end_ms": words[105]["end_ms"],
        "code_lines": [4],
        "active_lines": [4]
    },
    {
        "anchor_id": "S04_SPACE_ON2",
        "name": "Extra space is O(n^2)",
        "phrase": "So the extra space is O of n squared.",
        "word_start_index": 106,
        "word_end_index": 114,
        "start_frame": words[106]["start_frame"],
        "end_frame": words[114]["end_frame"],
        "start_ms": words[106]["start_ms"],
        "end_ms": words[114]["end_ms"],
        "code_lines": [4],
        "active_lines": [4]
    },
    {
        "anchor_id": "S04_IN_PLACE_RULE",
        "name": "Problem asks for in-place rotation",
        "phrase": "And the problem specifically asks for an in -place rotation.",
        "word_start_index": 115,
        "word_end_index": 124,
        "start_frame": words[115]["start_frame"],
        "end_frame": words[124]["end_frame"],
        "start_ms": words[115]["start_ms"],
        "end_ms": words[124]["end_ms"],
        "code_lines": [],
        "active_lines": []
    },
    {
        "anchor_id": "S04_REMOVE_MATRIX",
        "name": "Need to remove that extra matrix",
        "phrase": "So we need to remove that extra matrix.",
        "word_start_index": 125,
        "word_end_index": 132,
        "start_frame": words[125]["start_frame"],
        "end_frame": words[132]["end_frame"],
        "start_ms": words[125]["start_ms"],
        "end_ms": words[132]["end_ms"],
        "code_lines": [],
        "active_lines": []
    }
]

anchors_output = {
    "scene": "04-method1-code",
    "question": "014-rotate-image",
    "audio_file": "04-method1-code.mp3",
    "fps": 30,
    "duration_frames": sync_data["duration_frames"],
    "duration_ms": sync_data["duration_ms"],
    "anchor_count": len(raw_anchors),
    "anchors": raw_anchors
}

out_path = "questions/01-arrays-hashing/014-rotate-image/sync/04-method1-code.anchors.json"
with open(out_path, "w") as f:
    json.dump(anchors_output, f, indent=2)

print(f"Generated {len(raw_anchors)} exact anchors for Scene 04 -> {out_path}")
