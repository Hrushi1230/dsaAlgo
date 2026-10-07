import json

with open("questions/01-arrays-hashing/013-set-matrix-zeroes/sync/03-copy-trace.json") as f:
    data = json.load(f)

words = data["words"]
print(f"Total words: {len(words)}")
for i, w in enumerate(words):
    print(f"W{i:04d}: {w['word']} ({w['start_frame']}..{w['end_frame']}) [{w['start_ms']}..{w['end_ms']}]")
