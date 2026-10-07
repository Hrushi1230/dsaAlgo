import json
from pathlib import Path

sync_dir = Path("questions/01-arrays-hashing/014-rotate-image/sync")
manifest_path = Path("questions/01-arrays-hashing/014-rotate-image/Q14_PHASE9_REAUDIT_V2/Q14_PHASE9_SYNC_ANCHORS.json")

with open(manifest_path, "r", encoding="utf-8") as f:
    manifest = json.load(f)

for snum in range(1, 14):
    skey = f"S{snum:02d}"
    canon_files = [f for f in sync_dir.glob(f"{snum:02d}-*.json") if not f.name.endswith(".anchors.json")]
    if not canon_files:
        continue
    canon = canon_files[0]
    with open(canon, "r", encoding="utf-8") as f:
        sync_data = json.load(f)
    anchors = manifest["scenes"].get(skey, [])
    sentences = sync_data.get('sentences', [])
    print(f"{skey} ({canon.name}): {len(sync_data['words'])} words, {len(sentences)} sentences, {sync_data['duration_frames']} frames ({sync_data['duration_ms']/1000:.1f}s), {len(anchors)} manifest anchors")
