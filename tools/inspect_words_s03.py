import json
from pathlib import Path

words_file = Path("questions/01-arrays-hashing/015-spiral-matrix/sync/03-method1-trace.json")
with open(words_file, "r", encoding="utf-8") as f:
    data = json.load(f)

words = data["words"]
print(f"Total words: {len(words)}")

full_text = " ".join([f"{i}:{w['word']}" for i, w in enumerate(words)])
with open("tools/s03_words_numbered.txt", "w", encoding="utf-8") as f:
    f.write(full_text)

print("Saved tools/s03_words_numbered.txt")
