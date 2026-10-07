import json
from pathlib import Path

sync_file = Path("questions/01-arrays-hashing/014-rotate-image/sync/01-intro-roadmap.json")
with open(sync_file, "r", encoding="utf-8") as f:
    sync_data = json.load(f)

words = sync_data["words"]

# Exact beat definition for Scene 01
beats = [
    ("S01_WELCOME", 0, 5, "Welcome back to Code with Animation.", "Resume exact course shell from Q13 final roadmap (13/227 COMPLETE, Q013 COMPLETE, Q014 UP NEXT, rail thumb at 014)"),
    ("S01_PATTERN", 6, 13, "We are continuing our arrays and hashing roadmap.", "Focus active pattern identity Arrays & Hashing in sidebar; other chrome recedes"),
    ("S01_Q13", 14, 15, "Question 13,", "Spotlight Q013 item in Master Roadmap"),
    ("S01_SET_MATRIX_ZEROES", 16, 18, "set matrix zeros", "Confirm Set Matrix Zeroes row identity"),
    ("S01_COMPLETE", 19, 20, "is complete.", "Q013 COMPLETE marker verified; green checkmark glow; 0 counter mutation"),
    ("S01_PROGRESS", 21, 28, "Our progress is now 13 out of 227.", "Direct attention to global progress counter pill (13 / 227); stable hold"),
    ("S01_NEXT", 29, 32, "And next we have", "Anticipation hold; rail spotlight transfers from Q013 to Q014 row"),
    ("S01_Q14", 33, 34, "question 14,", "Activate Q014 row: UP NEXT gold pill mutates to NOW ACTIVE badge; rail thumb locks on 014"),
    ("S01_TITLE", 35, 36, "rotate image,", "Reveal problem title ROTATE IMAGE with chalk underline; spotlight glows cyan"),
    ("S01_LC", 37, 39, "lead code 48,", "Illuminate LeetCode 48 badge beside title"),
    ("S01_MEDIUM", 40, 40, "medium.", "Illuminate Medium difficulty pill (amber/gold)"),
    ("S01_ABOUT", 41, 44, "This problem is about", "Surrounding roadmap begins gentle fade (opacity 1.0 -> 0.4); center prepares for concept"),
    ("S01_SQUARE", 45, 48, "rotating a square matrix.", "Header docks into ProblemOpenerShell; center stage clear and ready for Scene 02 master matrix"),
]

anchors_obj = {}
resolved_list = []

for aid, s_idx, e_idx, phrase, purpose in beats:
    s_word = words[s_idx]
    e_word = words[e_idx]
    rec = {
        "start_word_id": f"W{s_idx:04d}",
        "end_word_id": f"W{e_idx:04d}",
        "phrase": phrase,
        "start_ms": s_word["start_ms"],
        "end_ms": e_word["end_ms"],
        "start_seconds": round(s_word["start_ms"] / 1000.0, 3),
        "end_seconds": round(e_word["end_ms"] / 1000.0, 3),
        "start_frame": s_word["start_frame"],
        "end_frame": e_word["end_frame"],
        "edge": "start",
        "note": purpose
    }
    anchors_obj[aid] = rec
    resolved_list.append({
        "anchor_id": aid,
        "phrase": phrase,
        "word_start_index": s_idx,
        "word_end_index": e_idx,
        "start_seconds": round(s_word["start_ms"] / 1000.0, 3),
        "end_seconds": round(e_word["end_ms"] / 1000.0, 3),
        "start_frame": s_word["start_frame"],
        "end_frame_exclusive": e_word["end_frame"] + 1,
        "note": purpose
    })

out_anchors = {
    "version": 2,
    "scene": "01-intro-roadmap",
    "audio_file": "01-intro-roadmap.mp3",
    "duration_ms": sync_data["duration_ms"],
    "duration_frames": sync_data["duration_frames"],
    "fps": 30,
    "anchor_count": len(anchors_obj),
    "anchors": anchors_obj
}

sync_dir = Path("questions/01-arrays-hashing/014-rotate-image/sync")
with open(sync_dir / "01-intro-roadmap.anchors.json", "w", encoding="utf-8") as f:
    json.dump(out_anchors, f, indent=2, ensure_ascii=False)
with open(sync_dir / "01-roadmap.anchors.json", "w", encoding="utf-8") as f:
    json.dump(out_anchors, f, indent=2, ensure_ascii=False)
with open(sync_dir / "scence01.anchors.json", "w", encoding="utf-8") as f:
    json.dump(out_anchors, f, indent=2, ensure_ascii=False)
with open(sync_dir / "scence-01.anchors.json", "w", encoding="utf-8") as f:
    json.dump(out_anchors, f, indent=2, ensure_ascii=False)

resolved_path = Path("questions/01-arrays-hashing/014-rotate-image/Q14_PHASE9_REAUDIT_V2/Scene01_SYNC_RESOLVED.json")
with open(resolved_path, "w", encoding="utf-8") as f:
    json.dump({
        "scene": "S01",
        "audio_file": "01-intro-roadmap.mp3",
        "fps": 30,
        "duration_frames": sync_data["duration_frames"],
        "duration_ms": sync_data["duration_ms"],
        "anchor_count": len(resolved_list),
        "anchors": resolved_list
    }, f, indent=2, ensure_ascii=False)

print(f"Successfully generated Scene 01 anchors ({len(resolved_list)} anchors, 0 unmatched)")
