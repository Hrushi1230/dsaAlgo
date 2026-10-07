import json
import sys
from pathlib import Path

scene_num = int(sys.argv[1]) if len(sys.argv) > 1 else 1
sync_dir = Path("questions/01-arrays-hashing/014-rotate-image/sync")
canon_files = [f for f in sync_dir.glob(f"{scene_num:02d}-*.json") if not f.name.endswith(".anchors.json")]
canon = canon_files[0]

with open(canon, "r", encoding="utf-8") as f:
    d = json.load(f)

print(f"\n--- Sentences for Scene {scene_num:02d} ({canon.name}) ---")
for i, s in enumerate(d.get("sentences", [])):
    print(f"[{i:02d}] F{s['start_frame']:04d}-F{s['end_frame']:04d} ({s['word_count']} words): {s['text']}")
