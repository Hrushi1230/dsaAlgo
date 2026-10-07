import json

with open('questions/01-arrays-hashing/014-rotate-image/sync/06-method2-trace.anchors.json', encoding='utf-8') as f:
    d = json.load(f)

for k, v in d['anchors'].items():
    print(f"{k:20s}: [{v['start_frame']:4d}..{v['end_frame']:4d}] {v['phrase']}")
