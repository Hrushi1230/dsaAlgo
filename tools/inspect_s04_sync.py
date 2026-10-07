import json

with open("questions/01-arrays-hashing/013-set-matrix-zeroes/sync/04-copy-code.json") as f:
    d = json.load(f)

print(f"Total words: {len(d['words'])}, duration: {d['duration_ms']}ms, frames: {d['duration_frames']}")
for i, w in enumerate(d["words"]):
    print(f"{i:03d} [{w['start_frame']:04d}-{w['end_frame']:04d}]: {w['word']}")
