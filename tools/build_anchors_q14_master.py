import json
import re
from pathlib import Path

def get_clean_tokens(text: str) -> list[str]:
    # Replace numbers, compound numbers, and normalize
    text = text.lower()
    compounds = {
        "twenty-one": "21", "twenty-two": "22", "twenty-three": "23",
        "twenty-four": "24", "twenty-five": "25", "twenty-six": "26",
        "twenty-seven": "27", "twenty-eight": "28", "twenty-nine": "29",
        "forty-eight": "48", "ninety-degree": "90 degree", "90-degree": "90 degree",
        "90°": "90 degree", "n-1-r": "n minus 1 minus r", "n-1": "n minus 1",
        "o(n^2)": "o of n squared", "o(1)": "o of 1", "o of n^2": "o of n squared",
        "zeros": "zeroes", "lead": "leetcode", "zero": "0", "one": "1", "two": "2",
        "three": "3", "four": "4", "five": "5", "six": "6", "seven": "7", "eight": "8",
        "nine": "9", "ten": "10", "eleven": "11", "twelve": "12", "thirteen": "13",
        "fourteen": "14", "fifteen": "15", "sixteen": "16", "seventeen": "17",
        "eighteen": "18", "nineteen": "19", "twenty": "20", "ninety": "90",
        "200 27": "227", "two hundred twenty-seven": "227",
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
    # 2. Key tokens match (first and last match, and intermediate matches > 60%)
    if m >= 2:
        for i in range(start_idx, len(w_tokens)):
            if w_tokens[i] == p_tokens[0]:
                for j in range(i + 1, min(i + m + 5, len(w_tokens))):
                    if w_tokens[j] == p_tokens[-1]:
                        # count matches
                        sub = w_tokens[i:j+1]
                        matched = sum(1 for pt in p_tokens if pt in sub)
                        if matched >= max(2, int(m * 0.6)):
                            return i, j
    # 3. Best single distinctive token or pair
    if m == 1:
        for i in range(start_idx, len(w_tokens)):
            if w_tokens[i] == p_tokens[0]:
                return i, i
    return None

def main():
    sync_dir = Path("questions/01-arrays-hashing/014-rotate-image/sync")
    manifest_path = Path("questions/01-arrays-hashing/014-rotate-image/Q14_PHASE9_REAUDIT_V2/Q14_PHASE9_SYNC_ANCHORS.json")
    with open(manifest_path, "r", encoding="utf-8") as f:
        manifest = json.load(f)

    for scene_num in range(1, 14):
        skey = f"S{scene_num:02d}"
        anchors_list = manifest["scenes"].get(skey, [])
        canon_files = [f for f in sync_dir.glob(f"{scene_num:02d}-*.json") if not f.name.endswith(".anchors.json")]
        if not canon_files:
            continue
        canon = canon_files[0]
        with open(canon, "r", encoding="utf-8") as f:
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
                res = find_subsequence(w_tokens, p_tokens, max(0, last_idx - 5))

            if res is not None:
                s, e = res
                last_idx = max(last_idx, s + 1)
                s_word = words[s]
                e_word = words[e]
                actual_text = " ".join(w["word"] for w in words[s:e+1])

                record = {
                    "start_word_id": f"W{s:04d}",
                    "end_word_id": f"W{e:04d}",
                    "phrase": actual_text,
                    "plan_phrase": phrase,
                    "start_ms": s_word["start_ms"],
                    "end_ms": e_word["end_ms"],
                    "start_seconds": round(s_word["start_ms"] / 1000.0, 3),
                    "end_seconds": round(e_word["end_ms"] / 1000.0, 3),
                    "start_frame": s_word["start_frame"],
                    "end_frame": e_word["end_frame"],
                    "edge": "start",
                    "note": phrase
                }
                resolved_anchors[aid] = record
                resolved_list.append({
                    "anchor_id": aid,
                    "phrase": actual_text,
                    "plan_phrase": phrase,
                    "word_start_index": s,
                    "word_end_index": e,
                    "start_seconds": round(s_word["start_ms"] / 1000.0, 3),
                    "end_seconds": round(e_word["end_ms"] / 1000.0, 3),
                    "start_frame": s_word["start_frame"],
                    "end_frame_exclusive": e_word["end_frame"] + 1,
                    "note": phrase
                })
            else:
                unmatched.append((aid, phrase))

        print(f"[{skey}] Resolved {len(resolved_list)} / {len(anchors_list)} anchors (Unmatched: {len(unmatched)})")
        if unmatched:
            for aid, ph in unmatched:
                print(f"   MISS: {aid} -> '{ph}'")

if __name__ == "__main__":
    main()
