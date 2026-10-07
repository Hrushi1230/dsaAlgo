import json

with open('questions/01-arrays-hashing/014-rotate-image/sync/08-why-method2-complex.json', 'r') as f:
    d = json.load(f)

words = d.get('words', [])
with open('questions/01-arrays-hashing/014-rotate-image/sync/08-all-words.txt', 'w') as out:
    for i, w in enumerate(words):
        out.write(f'{i:03d}: {w["word"]:18s} [{w["start_ms"]:6d}..{w["end_ms"]:6d}] (f{round(w["start_ms"]*30/1000):4d}..f{round(w["end_ms"]*30/1000):4d})\n')

print(f"Total words: {len(words)}, duration_ms: {d.get('duration_ms')}, total_frames: {round(d.get('duration_ms')*30/1000)}")
