import json

with open('questions/01-arrays-hashing/014-rotate-image/sync/07-method2-code.json', 'r') as f:
    d = json.load(f)

print('duration_ms:', d.get('duration_ms'))
words = d.get('words', [])
print('total words:', len(words))

# Search for the phrases in the 30 anchors
manifest = [
    ("S07_N", "store n"),
    ("S07_HALF", "half"),
    ("S07_FIRST", "first is"),
    ("S07_LAST", "last is"),
    ("S07_TOPSIDE", "top side"),
    ("S07_STOP", "stop before last"),
    ("S07_REASON", "same cycle as the first"),
    ("S07_OFFSET", "offset equals"),
    ("S07_FOUR", "four connected coordinates"),
    ("S07_TOP", "Top is"),
    ("S07_RIGHT", "Right is"),
    ("S07_BOTTOM", "Bottom is"),
    ("S07_LEFT", "left is"),
    ("S07_SAVE", "save the top"),
    ("S07_L2T", "left into top"),
    ("S07_B2L", "bottom into left"),
    ("S07_R2B", "right into bottom"),
    ("S07_T2R", "top into right"),
    ("S07_COMPLETE", "completes one four"),
    ("S07_INNERLOOP", "inner loop continues"),
    ("S07_OUTERLOOP", "outer loop moves"),
    ("S07_ODD", "center is never"),
    ("S07_TEMP", "only one temporary"),
    ("S07_SPACE", "extra space is constant"),
    ("S07_WORK", "constant amount of work"),
    ("S07_TIME", "O of n squared"),
    ("S07_O1_REPEAT", "O of one extra space"),
    ("S07_OPTIMAL", "optimal in -place"),
    ("S07_ANOTHER", "another way to"),
    ("S07_SIMPLE", "simpler transformations"),
]

for aid, query in manifest:
    found = []
    q_words = query.lower().split()
    for idx, w in enumerate(words):
        if any(qw in w['word'].lower() for qw in q_words):
            found.append((idx, w['word'], w['start_ms'], round(w['start_ms'] * 30 / 1000)))
    print(f"--- {aid} ('{query}') ---")
    for item in found[:4]:
        print(f"   w[{item[0]}]: {item[1]} @ {item[2]}ms (f{item[3]})")
