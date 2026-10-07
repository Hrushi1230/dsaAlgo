import json

with open('questions/01-arrays-hashing/014-rotate-image/sync/10-method3-trace.json') as f:
    data = json.load(f)

words = data.get('words', [])
with open('questions/01-arrays-hashing/014-rotate-image/sync/10-all-words.txt', 'w') as out:
    for i, w in enumerate(words):
        out.write(f"{i:03d} [{w['start_frame']:04d}-{w['end_frame']:04d}] ({w['start_ms']}ms-{w['end_ms']}ms) {w['word']}\n")

print(f"Dumped {len(words)} words to 10-all-words.txt")
