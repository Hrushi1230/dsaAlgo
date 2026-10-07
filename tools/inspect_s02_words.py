import json

with open(r'questions/01-arrays-hashing/014-rotate-image/sync/02-understand.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

words = d['words']
print(f"Total words: {len(words)}")
print(f"Total frames: {d['duration_frames']}")

# Print in chunks of sentences or lines
curr_line = []
start_f = 0
for i, w in enumerate(words):
    if not curr_line:
        start_f = w['start_frame']
    curr_line.append(f"{w['word']}({i})")
    if w['word'].endswith(('.', '?', '!', '...', ':', ',')) or (i + 1 < len(words) and words[i+1]['start_frame'] - w['end_frame'] > 20):
        print(f"[{start_f:4d}..{w['end_frame']:4d}] {' '.join(curr_line)}")
        curr_line = []

if curr_line:
    print(f"[{start_f:4d}..{words[-1]['end_frame']:4d}] {' '.join(curr_line)}")
