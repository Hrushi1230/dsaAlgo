import json

with open('questions/01-arrays-hashing/014-rotate-image/sync/13-recap.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

words = d.get('words', [])
with open('questions/01-arrays-hashing/014-rotate-image/sync/13-all-words.txt', 'w', encoding='utf-8') as out:
    for i, w in enumerate(words):
        out.write(f"{i:03d} [{w['start_frame']:04d}-{w['end_frame']:04d}] ({w['start_ms']}ms-{w['end_ms']}ms) {w['word']}\n")

print(f"Dumped {len(words)} words to sync/13-all-words.txt")
