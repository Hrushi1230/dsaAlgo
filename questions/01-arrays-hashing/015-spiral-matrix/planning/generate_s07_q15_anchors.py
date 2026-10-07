import json
import os
import re

def normalize(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9]', '', text)
    return text

def main():
    sync_path = r"c:\Users\hrkes\Desktop\DsaAlgo\questions\01-arrays-hashing\015-spiral-matrix\sync\07-method2-trace.json"
    anchors_v3_path = r"c:\Users\hrkes\Desktop\DsaAlgo\questions\01-arrays-hashing\015-spiral-matrix\Q15_PHASE9_STUDENT_OPTIMIZED_V3\Q15_PHASE9_SYNC_ANCHORS_V3.json"
    out_anchors_path = r"c:\Users\hrkes\Desktop\DsaAlgo\questions\01-arrays-hashing\015-spiral-matrix\sync\07-method2-trace.anchors.json"

    with open(sync_path, "r", encoding="utf-8") as f:
        sync_data = json.load(f)

    with open(anchors_v3_path, "r", encoding="utf-8") as f:
        anchors_v3_data = json.load(f)

    s07_manifest = anchors_v3_data["scenes"]["S07"]
    words = sync_data["words"]

    print(f"Total words in S07 audio: {len(words)}, Duration frames: {sync_data['duration_frames']}")

    matched_anchors = []
    word_idx = 0

    for item in s07_manifest:
        anchor_id = item["id"]
        phrase = item["phrase"]
        # Replace = with equals, replace numbers if needed
        phrase_clean = phrase.replace("=", " equals ").replace("`", "").replace(".", "").strip()
        phrase_words = [w for w in re.findall(r'[a-zA-Z0-9]+', phrase_clean)]
        if not phrase_words:
            continue
        first_word_norm = normalize(phrase_words[0])

        found_start = -1
        for i in range(word_idx, len(words)):
            w_norm = normalize(words[i]["word"])
            if w_norm == first_word_norm or first_word_norm in w_norm or w_norm in first_word_norm:
                match_count = 1
                for k in range(1, min(len(phrase_words), len(words) - i)):
                    pw_norm = normalize(phrase_words[k])
                    ww_norm = normalize(words[i+k]["word"])
                    if pw_norm == ww_norm or pw_norm in ww_norm or ww_norm in pw_norm:
                        match_count += 1
                if match_count >= min(2, len(phrase_words)):
                    found_start = i
                    break

        if found_start != -1:
            start_word = words[found_start]
            end_word_idx = min(found_start + len(phrase_words) - 1, len(words) - 1)
            end_word = words[end_word_idx]
            matched_anchors.append({
                "id": anchor_id,
                "phrase": phrase,
                "start_word": start_word["word"],
                "start_ms": start_word["start_ms"],
                "start_frame": start_word["start_frame"],
                "end_word": end_word["word"],
                "end_ms": end_word["end_ms"],
                "end_frame": end_word["end_frame"]
            })
            word_idx = found_start + 1
            print(f"Matched {anchor_id:18}: '{phrase[:32]:32}' -> Frame {start_word['start_frame']:4} to {end_word['end_frame']:4} ({start_word['start_ms']:5}ms..{end_word['end_ms']:5}ms)")
        else:
            print(f"FAILED TO MATCH: {anchor_id:18}: '{phrase[:32]:32}' (first word '{first_word_norm}')")

    out_obj = {
        "scene": "07-method2-trace",
        "audio_file": sync_data.get("audio_file", "07-method2-trace.mp3"),
        "duration_ms": sync_data["duration_ms"],
        "duration_frames": sync_data["duration_frames"],
        "fps": sync_data["fps"],
        "anchors": matched_anchors
    }

    with open(out_anchors_path, "w", encoding="utf-8") as f:
        json.dump(out_obj, f, indent=2)

    print(f"\nSaved {len(matched_anchors)} of {len(s07_manifest)} anchors to {out_anchors_path}")

if __name__ == "__main__":
    main()
