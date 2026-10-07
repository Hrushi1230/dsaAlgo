import json

with open("questions/01-arrays-hashing/013-set-matrix-zeroes/sync/07-markers-code.json") as f:
    d = json.load(f)

words = d["words"]
print(f"Total words: {len(words)}")
for i, w in enumerate(words):
    print(f"{i:03d}: {w['word']} (F{w['start_frame']}..F{w['end_frame']})")
