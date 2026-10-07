import json

with open('questions/01-arrays-hashing/014-rotate-image/sync/07-method2-code.json', 'r') as f:
    d = json.load(f)

words = d['words']

# Mapping the 30 beats from the plan:
beats = [
    ("B01", "S07_N", 0, 2, "store n"),
    ("B02", "S07_HALF", 3, 27, "process only half the number of layers (outer loop)"),
    ("B03", "S07_FIRST", 28, 35, "first is the layer index"),
    ("B04", "S07_LAST", 36, 43, "and last is n minus 1 minus layer"),
    ("B05", "S07_OUTER_EX", 44, 68, "outermost layer example first=0, last=n-1, next layer moves inward"),
    ("B06", "S07_TOPSIDE", 69, 88, "inside current layer move across top edge, start at first stop before last"),
    ("B07", "S07_STOP_WHY", 89, 108, "stop before last because final belongs to first cycle"),
    ("B08", "S07_OFFSET", 109, 134, "calculate offset = i - first (tells how far moved)"),
    ("B09", "S07_FOUR", 135, 146, "identify four connected coordinates"),
    ("B10", "S07_TOP", 147, 150, "Top is first, i"),
    ("B11", "S07_RIGHT", 151, 154, "Right is i, last"),
    ("B12", "S07_BOTTOM", 155, 160, "Bottom is last, last - offset"),
    ("B13", "S07_LEFT", 161, 167, "Left is last - offset, first"),
    ("B14", "S07_TRACE_INTRO", 168, 175, "Now perform the same movement we traced visually"),
    ("B15", "S07_SAVE", 176, 180, "First save the top value"),
    ("B16", "S07_L2T", 181, 185, "Then left goes into top"),
    ("B17", "S07_B2L", 186, 189, "bottom goes into left"),
    ("B18", "S07_R2B", 190, 193, "right goes into bottom"),
    ("B19", "S07_T2R", 194, 200, "and the saved top goes into right"),
    ("B20", "S07_COMPLETE", 201, 206, "One four-way cycle is complete"),
    ("B21", "S07_INNERLOOP", 207, 216, "The inner loop continues until the entire layer is finished"),
    ("B22", "S07_OUTERLOOP", 217, 224, "Then the outer loop moves one layer inward"),
    ("B23", "S07_ODD", 225, 244, "For an odd-sized matrix, center is never selected, stays untouched"),
    ("B24", "S07_TEMP", 245, 254, "uses only one temporary value for each cycle"),
    ("B25", "S07_SPACE", 255, 262, "So extra space is O of 1"),
    ("B26", "S07_WORK", 263, 281, "matrix contains N-squared positions with constant work for each"),
    ("B27", "S07_TIME", 282, 290, "total time is O of N-squared"),
    ("B28", "S07_O1_REPEAT", 291, 296, "and extra space O of 1"),
    ("B29", "S07_OPTIMAL", 297, 307, "method 2 already gives us an optimal in-place solution"),
    ("B30", "S07_TRANSITION", 308, 321, "another way to express rotation using much simpler transformations"),
]

for b_id, aid, s_idx, e_idx, desc in beats:
    s_word = words[s_idx]
    e_word = words[e_idx]
    s_f = round(s_word['start_ms'] * 30 / 1000)
    e_f = round(e_word['end_ms'] * 30 / 1000)
    print(f"{b_id:4s} | {aid:15s} | f{s_f:4d}..f{e_f:4d} ({e_f-s_f:3d}f) | w[{s_idx:03d}..{e_idx:03d}]: '{s_word['word']}'..'{e_word['word']}' | {desc}")
