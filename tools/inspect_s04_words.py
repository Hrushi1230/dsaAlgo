import json

with open("questions/01-arrays-hashing/014-rotate-image/sync/04-method1-code.json") as f:
    d = json.load(f)

words = d["words"]
print(f"Total words: {len(words)}")
sentence = []
for i, w in enumerate(words):
    sentence.append(w["word"])
    if w["word"].endswith(".") or w["word"].endswith("?") or i == len(words) - 1:
        start_f = words[i - len(sentence) + 1]["start_frame"]
        end_f = w["end_frame"]
        start_ms = words[i - len(sentence) + 1]["start_ms"]
        end_ms = w["end_ms"]
        print(f"[{i - len(sentence) + 1:3d}..{i:3d}] {start_f:4d}..{end_f:4d} ({start_ms/1000:6.2f}s..{end_ms/1000:6.2f}s): {' '.join(sentence)}")
        sentence = []
