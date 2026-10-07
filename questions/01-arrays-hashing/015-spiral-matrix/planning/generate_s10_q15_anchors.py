import json
import os

sync_file = r"C:\Users\hrkes\Desktop\DsaAlgo\questions\01-arrays-hashing\015-spiral-matrix\sync\10-recap-roadmap.json"
out_file = r"C:\Users\hrkes\Desktop\DsaAlgo\questions\01-arrays-hashing\015-spiral-matrix\sync\10-recap-roadmap.anchors.json"

with open(sync_file, "r", encoding="utf-8") as f:
    data = json.load(f)

words = data.get("words", [])
fps = data.get("fps", 30)

print(f"Total words: {len(words)}, Duration frames: {data.get('duration_frames')}, Duration ms: {data.get('duration_ms')}")

anchors = {
    "total_frames": data.get("duration_frames", 682),
    "total_ms": data.get("duration_ms", 22720),
    "fps": fps,
    "anchors": [
        {
            "id": "S10_Q15_ANNOUNCE",
            "start_frame": 0,
            "end_frame": 49,
            "words": "Question 15."
        },
        {
            "id": "S10_Q15_COMPLETE",
            "start_frame": 60,
            "end_frame": 127,
            "words": "Spiral matrix is complete."
        },
        {
            "id": "S10_PROGRESS_BEFORE",
            "start_frame": 143,
            "end_frame": 296,
            "words": "Our progress moves from 14 out of 227"
        },
        {
            "id": "S10_PROGRESS_AFTER",
            "start_frame": 296,
            "end_frame": 442,
            "words": "to 15 out of 227."
        },
        {
            "id": "S10_NEXT_ANNOUNCE",
            "start_frame": 462,
            "end_frame": 533,
            "words": "And next question 16."
        },
        {
            "id": "S10_NEXT_PROBLEM",
            "start_frame": 553,
            "end_frame": 616,
            "words": "Subarray sum equals k."
        },
        {
            "id": "S10_UP_NEXT_LOCK",
            "start_frame": 647,
            "end_frame": 682,
            "words": "That is up next."
        }
    ]
}

with open(out_file, "w", encoding="utf-8") as f:
    json.dump(anchors, f, indent=2)

print(f"Saved anchors to {out_file}")
