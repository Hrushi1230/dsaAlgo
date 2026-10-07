import json

anchors_def = [
    {
        "anchor_id": "S02_GIVEN_MATRIX",
        "name": "Given n x n square matrix",
        "word_start": 0,
        "word_end": 8,
        "phrase": "We are given an n by n square matrix."
    },
    {
        "anchor_id": "S02_5X5_EXAMPLE",
        "name": "5x5 matrix introduction",
        "word_start": 9,
        "word_end": 19,
        "phrase": "For this lesson, we will use our 5 by 5 matrix,"
    },
    {
        "anchor_id": "S02_ZERO_INDEXED",
        "name": "Zero-based row & column indices",
        "word_start": 20,
        "word_end": 29,
        "phrase": "and we will use zero -based row and column indices."
    },
    {
        "anchor_id": "S02_FOUR_CORNERS_HOOK",
        "name": "Watch the four corners hook",
        "word_start": 30,
        "word_end": 35,
        "phrase": "First, just watch the four corners."
    },
    {
        "anchor_id": "S02_CORNER_1_SOURCE",
        "name": "Corner 1 source (0,0)",
        "word_start": 36,
        "word_end": 42,
        "phrase": "One starts at row 0, column 0."
    },
    {
        "anchor_id": "S02_CORNER_1_DEST",
        "name": "Corner 1 dest (0,4)",
        "word_start": 43,
        "word_end": 55,
        "phrase": "After a 90 -degree clockwise rotation, one moves to row 0, column 4."
    },
    {
        "anchor_id": "S02_CORNER_5_CYCLE",
        "name": "Corner 5 (0,4) -> (4,4)",
        "word_start": 56,
        "word_end": 72,
        "phrase": "Now 5 starts at row 0, column 4. After rotation, 5 moves to row 4, column 4."
    },
    {
        "anchor_id": "S02_CORNERS_25_21_CYCLE",
        "name": "Corners 25 and 21 flight",
        "word_start": 73,
        "word_end": 94,
        "phrase": "25 moves from the bottom right to the bottom left. And 21 moves from the bottom left back to the top left."
    },
    {
        "anchor_id": "S02_CORNER_CYCLE_SUMMARY",
        "name": "Corner 4-element cycle closure",
        "word_start": 95,
        "word_end": 103,
        "phrase": "So these four corner values form one rotation cycle,"
    },
    {
        "anchor_id": "S02_GENERAL_RULE_NEED",
        "name": "Need rule for every cell",
        "word_start": 104,
        "word_end": 120,
        "phrase": "but we need a rule that works for every cell in the matrix, not only the corners."
    },
    {
        "anchor_id": "S02_ARBITRARY_RC",
        "name": "Arbitrary (r, c) cell",
        "word_start": 121,
        "word_end": 128,
        "phrase": "Take any value. At row R, column C,"
    },
    {
        "anchor_id": "S02_DERIVE_NEW_ROW",
        "name": "New row becomes old column C",
        "word_start": 129,
        "word_end": 146,
        "phrase": "after a 90 -degree clockwise rotation, its new row becomes the old column. So new row is C,"
    },
    {
        "anchor_id": "S02_DERIVE_NEW_COL",
        "name": "New column becomes n - 1 - r",
        "word_start": 147,
        "word_end": 156,
        "phrase": "and the new column becomes n minus 1 minus R."
    },
    {
        "anchor_id": "S02_GENERAL_MAPPING_FORMULA",
        "name": "General formula (r, c) -> (c, n - 1 - r)",
        "word_start": 157,
        "word_end": 176,
        "phrase": "So our complete coordinate mapping is row R, column C, moves to row C, column n minus 1 minus R."
    },
    {
        "anchor_id": "S02_SPEC_N5_FORMULA",
        "name": "Specialized formula (r, c) -> (c, 4 - r)",
        "word_start": 177,
        "word_end": 201,
        "phrase": "For our 5 by 5 matrix, n minus 1 is 4. So here, row R, column C, moves to row C, column 4 minus R."
    },
    {
        "anchor_id": "S02_VERIFY_INTERIOR_8_SOURCE",
        "name": "Verify 8 at (1, 2)",
        "word_start": 202,
        "word_end": 215,
        "phrase": "Let's verify this. With an interior value, 8 is at row 1, column 2."
    },
    {
        "anchor_id": "S02_VERIFY_INTERIOR_8_DEST",
        "name": "8 calculation & flight to (2, 3)",
        "word_start": 216,
        "word_end": 239,
        "phrase": "Its new row becomes 2, and its new column becomes 4 minus 1, which is 3. So 8 moves to row 2, column 3."
    },
    {
        "anchor_id": "S02_VERIFY_GOOD",
        "name": "Confirmation 'Good.'",
        "word_start": 240,
        "word_end": 240,
        "phrase": "Good."
    },
    {
        "anchor_id": "S02_CENTER_13_SOURCE",
        "name": "Center 13 at (2, 2)",
        "word_start": 241,
        "word_end": 252,
        "phrase": "Now look at the center. 13 is at row 2, column 2."
    },
    {
        "anchor_id": "S02_CENTER_13_CALC",
        "name": "13 calculation: (2, 4 - 2) = (2, 2)",
        "word_start": 253,
        "word_end": 266,
        "phrase": "Its new position becomes row 2, column 4 minus 2, which is also 2."
    },
    {
        "anchor_id": "S02_CENTER_13_FIXED",
        "name": "13 maps back to itself",
        "word_start": 267,
        "word_end": 272,
        "phrase": "So 13 maps back to itself."
    },
    {
        "anchor_id": "S02_ODD_CENTER_INVARIANT",
        "name": "Odd-center invariance principle",
        "word_start": 273,
        "word_end": 286,
        "phrase": "That is why, in an odd -sized matrix, the exact center does not move."
    },
    {
        "anchor_id": "S02_DESTINATION_TRUTH_KNOWN",
        "name": "Destination truth known",
        "word_start": 287,
        "word_end": 293,
        "phrase": "Now we know where every value belongs."
    },
    {
        "anchor_id": "S02_HOW_TO_MOVE_HOOK",
        "name": "Question: How to move them?",
        "word_start": 294,
        "word_end": 303,
        "phrase": "The next question is, how should we actually move them?"
    },
    {
        "anchor_id": "S02_HANDOFF_METHOD1",
        "name": "Handoff to Method 1",
        "word_start": 304,
        "word_end": 310,
        "phrase": "Let's start with the most direct method."
    }
]

with open(r'questions/01-arrays-hashing/014-rotate-image/sync/02-understand.json', 'r', encoding='utf-8') as f:
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
    "scene": "02-understand",
    "question": "014-rotate-image",
    "audio_file": "02-understand.mp3",
    "fps": 30,
    "duration_frames": sync_data['duration_frames'],
    "duration_ms": sync_data['duration_ms'],
    "anchor_count": len(resolved_anchors),
    "anchors": resolved_anchors
}

with open(r'questions/01-arrays-hashing/014-rotate-image/sync/02-understand.anchors.json', 'w', encoding='utf-8') as f:
    json.dump(out_anchors, f, indent=2)

with open(r'questions/01-arrays-hashing/014-rotate-image/Q14_PHASE9_REAUDIT_V2/Scene02_SYNC_RESOLVED.json', 'w', encoding='utf-8') as f:
    json.dump(out_anchors, f, indent=2)

print(f"Generated {len(resolved_anchors)} exact anchors for Scene 02 successfully!")
