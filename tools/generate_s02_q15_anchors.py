import json
from pathlib import Path

words_file = Path("questions/01-arrays-hashing/015-spiral-matrix/sync/02-understand.json")
with open(words_file, "r", encoding="utf-8") as f:
    data = json.load(f)

words = data["words"]

anchors = [
    {
        "id": "S02_MN",
        "phrase": "We are given an m by n matrix, here.",
        "start_word_idx": 0,
        "end_word_idx": 8,
        "start_frame": words[0]["start_frame"],
        "end_frame": words[8]["end_frame"],
        "start_ms": words[0]["start_ms"],
        "end_ms": words[8]["end_ms"],
    },
    {
        "id": "S02_M_ROWS",
        "phrase": "m is the number of rows",
        "start_word_idx": 9,
        "end_word_idx": 14,
        "start_frame": words[9]["start_frame"],
        "end_frame": words[14]["end_frame"],
        "start_ms": words[9]["start_ms"],
        "end_ms": words[14]["end_ms"],
    },
    {
        "id": "S02_N_COLS",
        "phrase": "and n is the number of columns.",
        "start_word_idx": 15,
        "end_word_idx": 21,
        "start_frame": words[15]["start_frame"],
        "end_frame": words[21]["end_frame"],
        "start_ms": words[15]["start_ms"],
        "end_ms": words[21]["end_ms"],
    },
    {
        "id": "S02_RECT",
        "phrase": "So the matrix does not have to be square.",
        "start_word_idx": 22,
        "end_word_idx": 30,
        "start_frame": words[22]["start_frame"],
        "end_frame": words[30]["end_frame"],
        "start_ms": words[22]["start_ms"],
        "end_ms": words[30]["end_ms"],
    },
    {
        "id": "S02_MASTER",
        "phrase": "For this lesson, we will use this 5 by 6 matrix.",
        "start_word_idx": 31,
        "end_word_idx": 41,
        "start_frame": words[31]["start_frame"],
        "end_frame": words[41]["end_frame"],
        "start_ms": words[31]["start_ms"],
        "end_ms": words[41]["end_ms"],
    },
    {
        "id": "S02_OUTPUT_CONTRACT",
        "phrase": "Our job is to return all m times n values, in one list, following spiral order.",
        "start_word_idx": 42,
        "end_word_idx": 57,
        "start_frame": words[42]["start_frame"],
        "end_frame": words[57]["end_frame"],
        "start_ms": words[42]["start_ms"],
        "end_ms": words[57]["end_ms"],
    },
    {
        "id": "S02_DIR_SEQUENCE",
        "phrase": "That order moves right, down, left, up and then repeats.",
        "start_word_idx": 58,
        "end_word_idx": 67,
        "start_frame": words[58]["start_frame"],
        "end_frame": words[67]["end_frame"],
        "start_ms": words[58]["start_ms"],
        "end_ms": words[67]["end_ms"],
    },
    {
        "id": "S02_TURN_Q",
        "phrase": "But the real question is, when should we turn?",
        "start_word_idx": 68,
        "end_word_idx": 76,
        "start_frame": words[68]["start_frame"],
        "end_frame": words[76]["end_frame"],
        "start_ms": words[68]["start_ms"],
        "end_ms": words[76]["end_ms"],
    },
    {
        "id": "S02_MOVING_RIGHT",
        "phrase": "Suppose we are moving right.",
        "start_word_idx": 77,
        "end_word_idx": 81,
        "start_frame": words[77]["start_frame"],
        "end_frame": words[81]["end_frame"],
        "start_ms": words[77]["start_ms"],
        "end_ms": words[81]["end_ms"],
    },
    {
        "id": "S02_OUTSIDE",
        "phrase": "If the next position goes outside the matrix,",
        "start_word_idx": 82,
        "end_word_idx": 89,
        "start_frame": words[82]["start_frame"],
        "end_frame": words[89]["end_frame"],
        "start_ms": words[82]["start_ms"],
        "end_ms": words[89]["end_ms"],
    },
    {
        "id": "S02_TURN_OUT",
        "phrase": "we obviously need to turn.",
        "start_word_idx": 90,
        "end_word_idx": 94,
        "start_frame": words[90]["start_frame"],
        "end_frame": words[94]["end_frame"],
        "start_ms": words[90]["start_ms"],
        "end_ms": words[94]["end_ms"],
    },
    {
        "id": "S02_OUTER_DONE",
        "phrase": "But after completing the outer part,",
        "start_word_idx": 95,
        "end_word_idx": 100,
        "start_frame": words[95]["start_frame"],
        "end_frame": words[100]["end_frame"],
        "start_ms": words[95]["start_ms"],
        "end_ms": words[100]["end_ms"],
    },
    {
        "id": "S02_INSIDE",
        "phrase": "the next position may still be inside the matrix,",
        "start_word_idx": 101,
        "end_word_idx": 109,
        "start_frame": words[101]["start_frame"],
        "end_frame": words[109]["end_frame"],
        "start_ms": words[101]["start_ms"],
        "end_ms": words[109]["end_ms"],
    },
    {
        "id": "S02_ALREADY_VISITED",
        "phrase": "and already visited.",
        "start_word_idx": 110,
        "end_word_idx": 112,
        "start_frame": words[110]["start_frame"],
        "end_frame": words[112]["end_frame"],
        "start_ms": words[110]["start_ms"],
        "end_ms": words[112]["end_ms"],
    },
    {
        "id": "S02_METHOD1_RULE",
        "phrase": "So method 1 uses one simple rule. Turn when the next position is outside the matrix, or already visited.",
        "start_word_idx": 113,
        "end_word_idx": 131,
        "start_frame": words[113]["start_frame"],
        "end_frame": words[131]["end_frame"],
        "start_ms": words[113]["start_ms"],
        "end_ms": words[131]["end_ms"],
    },
    {
        "id": "S02_STATE",
        "phrase": "To do that, we keep the current position, the current direction and a visited matrix.",
        "start_word_idx": 132,
        "end_word_idx": 146,
        "start_frame": words[132]["start_frame"],
        "end_frame": words[146]["end_frame"],
        "start_ms": words[132]["start_ms"],
        "end_ms": words[146]["end_ms"],
    },
    {
        "id": "S02_TRACE",
        "phrase": "Now let's trace it properly.",
        "start_word_idx": 147,
        "end_word_idx": 151,
        "start_frame": words[147]["start_frame"],
        "end_frame": words[151]["end_frame"],
        "start_ms": words[147]["start_ms"],
        "end_ms": words[151]["end_ms"],
    }
]

out = {
    "scene": "02-understand",
    "total_frames": data["duration_frames"],
    "duration_ms": data["duration_ms"],
    "fps": 30,
    "anchor_count": len(anchors),
    "anchors": anchors
}

out_path = Path("questions/01-arrays-hashing/015-spiral-matrix/sync/02-understand.anchors.json")
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(out, f, indent=2, ensure_ascii=False)

print("Generated sync/02-understand.anchors.json successfully:")
for a in anchors:
    print(f"  {a['id']}: F{a['start_frame']}..F{a['end_frame']} | \"{a['phrase']}\"")
