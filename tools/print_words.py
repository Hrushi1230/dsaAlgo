import json
import sys
from pathlib import Path

scene_num = int(sys.argv[1]) if len(sys.argv) > 1 else 10
start_w = int(sys.argv[2]) if len(sys.argv) > 2 else 0
end_w = int(sys.argv[3]) if len(sys.argv) > 3 else 50

sync_dir = Path("questions/01-arrays-hashing/014-rotate-image/sync")
canon_files = [f for f in sync_dir.glob(f"{scene_num:02d}-*.json") if not f.name.endswith(".anchors.json")]
canon = canon_files[0]

with open(canon, "r", encoding="utf-8") as f:
    d = json.load(f)

words = d["words"]
for idx in range(max(0, start_w), min(len(words), end_w)):
    w = words[idx]
    print(f"W{idx:04d} [F{w['start_frame']:04d}-F{w['end_frame']:04d}] ({w['start_ms']}-{w['end_ms']}ms) {w['word']}")
