import json

anchors_def = [
    {
        "anchor_id": "S03_APPROACH_EXTRA_MATRIX",
        "name": "Create another matrix of same size",
        "word_start": 0,
        "word_end": 10,
        "phrase": "The easiest approach is create another matrix of the same size."
    },
    {
        "anchor_id": "S03_ORIGINAL_UNCHANGED",
        "name": "Original matrix unchanged, direct placement",
        "word_start": 11,
        "word_end": 25,
        "phrase": "We keep the original matrix unchanged and place every value directly into its rotated destination."
    },
    {
        "anchor_id": "S03_RECALL_MAPPING",
        "name": "Recall mapping (r, c) -> (c, n - 1 - r)",
        "word_start": 26,
        "word_end": 40,
        "phrase": "We already know the mapping R, C goes to C n minus 1 minus r."
    },
    {
        "anchor_id": "S03_APPLY_IT",
        "name": "Apply mapping to elements",
        "word_start": 41,
        "word_end": 48,
        "phrase": "So now we only need to apply it."
    },
    {
        "anchor_id": "S03_TRACE_1_SOURCE",
        "name": "Value 1 at (0, 0)",
        "word_start": 49,
        "word_end": 57,
        "phrase": "Take 1. 1 is at row 0. Column 0."
    },
    {
        "anchor_id": "S03_TRACE_1_DEST",
        "name": "Value 1 destination (0, 4)",
        "word_start": 58,
        "word_end": 64,
        "phrase": "Its destination is row 0. Column 4."
    },
    {
        "anchor_id": "S03_TRACE_1_PLACE",
        "name": "Place 1 in result matrix",
        "word_start": 65,
        "word_end": 73,
        "phrase": "So we place 1 there in the result matrix."
    },
    {
        "anchor_id": "S03_TRACE_8_SOURCE",
        "name": "Value 8 at (1, 2)",
        "word_start": 74,
        "word_end": 83,
        "phrase": "Now take 8. 8 is at row 1. Column 2."
    },
    {
        "anchor_id": "S03_TRACE_8_DEST",
        "name": "Value 8 destination (2, 3)",
        "word_start": 84,
        "word_end": 90,
        "phrase": "Its destination is row 2. Column 3."
    },
    {
        "anchor_id": "S03_TRACE_8_PLACE",
        "name": "Place 8 in result matrix",
        "word_start": 91,
        "word_end": 94,
        "phrase": "So 8 goes there."
    },
    {
        "anchor_id": "S03_TRACE_13_SOURCE",
        "name": "Value 13 at (2, 2)",
        "word_start": 95,
        "word_end": 103,
        "phrase": "Now 13. 13 is at row 2. Column 2."
    },
    {
        "anchor_id": "S03_TRACE_13_DEST",
        "name": "Value 13 destination still (2, 2)",
        "word_start": 104,
        "word_end": 111,
        "phrase": "Its destination is still row 2. Column 2."
    },
    {
        "anchor_id": "S03_TRACE_13_PLACE",
        "name": "Center stays where it is",
        "word_start": 112,
        "word_end": 118,
        "phrase": "So the center stays where it is."
    },
    {
        "anchor_id": "S03_TRACE_17_SOURCE",
        "name": "Value 17 at (3, 1)",
        "word_start": 119,
        "word_end": 127,
        "phrase": "Now 17. 17 is at row 3. Column 1."
    },
    {
        "anchor_id": "S03_TRACE_17_CALC",
        "name": "Value 17 calc: row 1, col 4 - 3 = 1",
        "word_start": 128,
        "word_end": 142,
        "phrase": "Its new row becomes 1. Its new column becomes 4 minus 3, which is 1."
    },
    {
        "anchor_id": "S03_TRACE_17_PLACE",
        "name": "Place 17 at (1, 1)",
        "word_start": 143,
        "word_end": 150,
        "phrase": "So 17 moves to row 1. Column 1."
    },
    {
        "anchor_id": "S03_WHOLE_IDEA",
        "name": "The whole idea: read, calc, write safely",
        "word_start": 151,
        "word_end": 173,
        "phrase": "That is the whole idea. Read a value. From the source matrix, calculate its destination and write it safely into the result matrix."
    },
    {
        "anchor_id": "S03_ROW0_TO_COL4",
        "name": "Source Row 0 (1..5) -> Last Column",
        "word_start": 174,
        "word_end": 201,
        "phrase": "Now let's complete the full pattern. When we process the first source row, 1, 2, 3, 4, 5. Those values become the last column of the rotated matrix."
    },
    {
        "anchor_id": "S03_ROW1_TO_COL3",
        "name": "Source Row 1 (6..10) -> Column 3",
        "word_start": 202,
        "word_end": 214,
        "phrase": "The second source row, 6, 7, 8, 9, 10 becomes the next column."
    },
    {
        "anchor_id": "S03_ROW2_TO_COL2",
        "name": "Source Row 2 (11..15) -> Column 2",
        "word_start": 215,
        "word_end": 222,
        "phrase": "The middle source row becomes the middle column."
    },
    {
        "anchor_id": "S03_ROW3_TO_COL1",
        "name": "Source Row 3 (16..20) -> Column 1",
        "word_start": 223,
        "word_end": 229,
        "phrase": "Then source row, 3, becomes column 1."
    },
    {
        "anchor_id": "S03_ROW4_TO_COL0",
        "name": "Source Row 4 (21..25) -> Column 0",
        "word_start": 230,
        "word_end": 237,
        "phrase": "And the final source row becomes column 0."
    },
    {
        "anchor_id": "S03_ROTATION_COMPLETE",
        "name": "All processed: correct 90 degree rotation",
        "word_start": 238,
        "word_end": 254,
        "phrase": "Once every source position has been processed, the result matrix is the correct 90 degree clockwise rotation."
    },
    {
        "anchor_id": "S03_WHY_SAFE",
        "name": "Different matrices, never destroy unread value",
        "word_start": 255,
        "word_end": 280,
        "phrase": "And because the source and destination are different matrices, we never destroy a value before using it. That makes this method very easy to reason about."
    },
    {
        "anchor_id": "S03_SPACE_TRADEOFF",
        "name": "One problem: Extra N x N matrix created",
        "word_start": 281,
        "word_end": 293,
        "phrase": "But there is one problem. We created another complete n by n matrix."
    },
    {
        "anchor_id": "S03_CODE_HANDOFF",
        "name": "Translate exact idea into code",
        "word_start": 294,
        "word_end": 301,
        "phrase": "Now let's translate this exact idea into code."
    }
]

with open(r'questions/01-arrays-hashing/014-rotate-image/sync/03-method1-trace.json', 'r', encoding='utf-8') as f:
    sync_data = json.load(f)

words = sync_data['words']

resolved_anchors = []
for a in anchors_def:
    ws = a['word_start']
    we = a['word_end']
    w_start_obj = words[ws]
    w_end_obj = words[we]
    
    start_frame = w_start_obj['start_frame']
    end_frame = w_end_obj['end_frame']
    
    resolved_anchors.append({
        "anchor_id": a['anchor_id'],
        "name": a['name'],
        "phrase": a['phrase'],
        "word_start_index": ws,
        "word_end_index": we,
        "start_ms": w_start_obj['start_ms'],
        "end_ms": w_end_obj['end_ms'],
        "start_frame": start_frame,
        "end_frame": end_frame,
        "start_seconds": round(w_start_obj['start_ms'] / 1000.0, 3),
        "end_seconds": round(w_end_obj['end_ms'] / 1000.0, 3)
    })

out_anchors = {
    "scene": "03-method1-trace",
    "question": "014-rotate-image",
    "audio_file": "03-method1-trace.mp3",
    "fps": 30,
    "duration_frames": sync_data['duration_frames'],
    "duration_ms": sync_data['duration_ms'],
    "anchor_count": len(resolved_anchors),
    "anchors": resolved_anchors
}

with open(r'questions/01-arrays-hashing/014-rotate-image/sync/03-method1-trace.anchors.json', 'w', encoding='utf-8') as f:
    json.dump(out_anchors, f, indent=2)

with open(r'questions/01-arrays-hashing/014-rotate-image/Q14_PHASE9_REAUDIT_V2/Scene03_SYNC_RESOLVED.json', 'w', encoding='utf-8') as f:
    json.dump(out_anchors, f, indent=2)

print(f"Generated {len(resolved_anchors)} exact anchors for Scene 03 successfully!")
