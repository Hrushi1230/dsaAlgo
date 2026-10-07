import json

with open('questions/01-arrays-hashing/014-rotate-image/sync/08-why-method2-complex.json', 'r') as f:
    d = json.load(f)

words = d['words']

beats = [
    ("B01", "S08_OPTIMAL", 0, 14, "Method 2 is already optimal, so not looking for better time complexity"),
    ("B02", "S08_READABILITY", 15, 27, "The issue now is readability. Four-way cycle needs several related indices"),
    ("B03", "S08_INDICES", 28, 34, "First, last, offset, top, right, bottom, left (7 indices reveal)"),
    ("B04", "S08_MIXUP", 35, 52, "Logic correct, but easy to mix up, especially in an interview"),
    ("B05", "S08_RETURN_MAP", 53, 65, "Instead of inventing another movement rule, return to coordinate mapping"),
    ("B06", "S08_DEST_FORMULA", 66, 78, "Already proved destination is (c, n - 1 - r)"),
    ("B07", "S08_TWO_STEPS_Q", 79, 90, "Can we reach destination using two simpler transformations?"),
    ("B08", "S08_YES_DECOMPOSE", 91, 91, "Yes! (Two-step decomposition reveal)"),
    ("B09", "S08_METHOD3_HANDOFF", 92, 97, "And that gives us Method 3"),
]

for b_id, aid, s_idx, e_idx, desc in beats:
    sw = words[s_idx]
    ew = words[e_idx]
    sf = round(sw['start_ms'] * 30 / 1000)
    ef = round(ew['end_ms'] * 30 / 1000)
    print(f"{b_id:4s} | {aid:18s} | f{sf:4d}..f{ef:4d} ({ef-sf:3d}f) | w[{s_idx:02d}..{e_idx:02d}]: '{sw['word']}'..'{ew['word']}' | {desc}")
