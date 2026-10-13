"""
build_all_q16_anchors.py — Resolves all semantic anchors from Q16_PHASE9_SEMANTIC_ANCHORS_9SCENE.json
against exact word-level Whisper transcriptions for Question 16.
Outputs canonical *.anchors.json in questions/01-arrays-hashing/016-subarray-sum-equals-k/sync/
"""

import json
import re
from pathlib import Path

def get_clean_tokens(text: str) -> list[str]:
    text = text.lower()
    compounds = {
        "twenty-one": "21", "twenty-two": "22", "twenty-three": "23",
        "twenty-four": "24", "twenty-five": "25", "twenty-six": "26",
        "twenty-seven": "27", "twenty-eight": "28", "twenty-nine": "29",
        "two hundred twenty-seven": "227", "200 27": "227",
        "o(n^2)": "o of n squared", "o(1)": "o of 1", "o(n)": "o of n",
        "o of n^2": "o of n squared", "o of n": "o of n", "o of 1": "o of 1",
        "zeros": "zeroes", "zero": "0", "one": "1", "two": "2",
        "three": "3", "four": "4", "five": "5", "six": "6", "seven": "7", "eight": "8",
        "nine": "9", "ten": "10", "eleven": "11", "twelve": "12", "thirteen": "13",
        "fourteen": "14", "fifteen": "15", "sixteen": "16", "seventeen": "17",
        "eighteen": "18", "nineteen": "19", "twenty": "20",
        "k": "k", "n": "n", "nums": "nums",
    }
    for k, v in compounds.items():
        text = text.replace(k, v)
    tokens = []
    for raw in text.split():
        c = re.sub(r"[^\w\d]", "", raw)
        if c:
            tokens.append(c)
    return tokens

def find_subsequence(w_tokens: list[str], p_tokens: list[str], start_idx: int) -> tuple[int, int] | None:
    if not p_tokens:
        return None
    m = len(p_tokens)
    # 1. Exact match
    for i in range(start_idx, len(w_tokens) - m + 1):
        if w_tokens[i:i+m] == p_tokens:
            return i, i + m - 1
            
    # 2. Window match with high overlap
    for i in range(start_idx, len(w_tokens)):
        if w_tokens[i] == p_tokens[0]:
            for j in range(i, min(i + m + 6, len(w_tokens))):
                sub = w_tokens[i:j+1]
                matched = sum(1 for pt in p_tokens if pt in sub)
                if matched >= max(1, int(m * 0.7)):
                    return i, j

    # 3. Fuzzy search for best matching start
    if m >= 2:
        for i in range(start_idx, len(w_tokens) - m + 1):
            sub = w_tokens[i:i+m]
            matches = sum(1 for a, b in zip(sub, p_tokens) if a == b)
            if matches >= max(2, int(m * 0.6)):
                return i, i + m - 1

    # 4. Single token match
    if m == 1:
        for i in range(start_idx, len(w_tokens)):
            if w_tokens[i] == p_tokens[0]:
                return i, i

    return None

SCENE_FILE_MAP = {
    "01": "01-roadmap.json",
    "02": "02-understand.json",
    "03": "03-method1-trace.json",
    "04": "04-method1-code.json",
    "05": "05-optimal-idea.json",
    "06": "06-method2-trace.json",
    "07": "07-method2-code.json",
    "08": "08-compare-mistakes-edgecases.json",
    "09": "09-recap.json",
}

def main():
    sync_dir = Path("questions/01-arrays-hashing/016-subarray-sum-equals-k/sync")
    manifest_path = Path("questions/01-arrays-hashing/016-subarray-sum-equals-k/planning/Q16_PHASE9_SEMANTIC_ANCHORS_9SCENE.json")
    
    with open(manifest_path, "r", encoding="utf-8") as f:
        manifest = json.load(f)

    total_anchors = 0
    total_resolved = 0
    total_unmatched = 0

    for skey, json_name in SCENE_FILE_MAP.items():
        anchors_list = manifest["scenes"].get(skey, [])
        canon_path = sync_dir / json_name
        if not canon_path.exists():
            print(f"Warning: {canon_path} does not exist.")
            continue

        with open(canon_path, "r", encoding="utf-8") as f:
            sync_data = json.load(f)

        words = sync_data["words"]
        w_tokens = [get_clean_tokens(w["word"])[0] if get_clean_tokens(w["word"]) else "" for w in words]

        resolved_anchors = {}
        resolved_list = []
        last_idx = 0
        unmatched = []

        for a in anchors_list:
            aid = a["id"]
            phrase = a["phrase"]
            p_tokens = get_clean_tokens(phrase)

            res = find_subsequence(w_tokens, p_tokens, last_idx)
            if res is None and last_idx > 0:
                res = find_subsequence(w_tokens, p_tokens, max(0, last_idx - 3))

            if res is not None:
                s, e = res
                last_idx = max(last_idx, s + 1)
                s_word = words[s]
                e_word = words[e]
                actual_text = " ".join(w["word"] for w in words[s:e+1])

                record = {
                    "anchor_id": aid,
                    "start_word_id": f"W{s:04d}",
                    "end_word_id": f"W{e:04d}",
                    "word_start_index": s,
                    "word_end_index": e,
                    "phrase": actual_text,
                    "plan_phrase": phrase,
                    "start_ms": s_word["start_ms"],
                    "end_ms": e_word["end_ms"],
                    "start_seconds": round(s_word["start_ms"] / 1000.0, 3),
                    "end_seconds": round(e_word["end_ms"] / 1000.0, 3),
                    "start_frame": s_word["start_frame"],
                    "end_frame": e_word["end_frame"],
                    "end_frame_exclusive": e_word["end_frame"] + 1,
                    "edge": "start",
                }
                resolved_anchors[aid] = record
                resolved_list.append(record)
            else:
                unmatched.append((aid, phrase))

        total_anchors += len(anchors_list)
        total_resolved += len(resolved_list)
        total_unmatched += len(unmatched)

        # Write output anchor files
        out_name = json_name.replace(".json", ".anchors.json")
        out_path = sync_dir / out_name
        output_payload = {
            "scene": skey,
            "audio_file": sync_data.get("audio_file", ""),
            "duration_frames": sync_data.get("duration_frames", 0),
            "duration_ms": sync_data.get("duration_ms", 0),
            "fps": sync_data.get("fps", 30),
            "anchor_count": len(resolved_list),
            "anchors": resolved_anchors,
            "anchor_list": resolved_list,
        }
        with open(out_path, "w", encoding="utf-8") as f:
            json.dump(output_payload, f, indent=2, ensure_ascii=False)

        # Also write short stem alias (e.g. scence01.anchors.json)
        stem_path = sync_dir / f"scence{skey}.anchors.json"
        with open(stem_path, "w", encoding="utf-8") as f:
            json.dump(output_payload, f, indent=2, ensure_ascii=False)

        print(f"[Scene {skey}] Resolved {len(resolved_list)} / {len(anchors_list)} anchors (Unmatched: {len(unmatched)}) -> {out_name}")
        if unmatched:
            for aid, ph in unmatched:
                print(f"   MISS: {aid} -> '{ph}'")

    print(f"\n==========================================")
    print(f"Total Anchors: {total_anchors}")
    print(f"Total Resolved: {total_resolved} ({total_resolved/total_anchors*100:.1f}%)")
    print(f"Total Unmatched: {total_unmatched}")
    print(f"==========================================")

if __name__ == "__main__":
    main()
