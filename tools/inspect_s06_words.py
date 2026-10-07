import json

with open(r'questions/01-arrays-hashing/014-rotate-image/sync/06-method2-trace.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

words = d['words']
duration_frames = d.get('duration_frames', int(d.get('duration_seconds', 0) * 30))
print(f"Total words: {len(words)}")
print(f"Total frames: {duration_frames}")

curr_line = []
start_f = 0
for i, w in enumerate(words):
    if not curr_line:
        start_f = w.get('start_frame', int(w['start_ms'] * 30 / 1000))
    end_f = w.get('end_frame', int(w['end_ms'] * 30 / 1000))
    curr_line.append(f"{w['word']}({i})")
    next_start = words[i+1].get('start_frame', int(words[i+1]['start_ms'] * 30 / 1000)) if i + 1 < len(words) else end_f
    if w['word'].endswith(('.', '?', '!', '...', ':', ',')) or (i + 1 < len(words) and next_start - end_f > 18):
        print(f"[{start_f:4d}..{end_f:4d}] {' '.join(curr_line)}")
        curr_line = []

if curr_line:
    print(f"[{start_f:4d}..{end_f:4d}] {' '.join(curr_line)}")
