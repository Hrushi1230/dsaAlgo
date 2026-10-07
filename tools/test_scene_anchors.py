import json
import re
from pathlib import Path
from difflib import SequenceMatcher

NUMBER_MAP = {
    "zero": "0", "one": "1", "two": "2", "three": "3", "four": "4",
    "five": "5", "six": "6", "seven": "7", "eight": "8", "nine": "9",
    "ten": "10", "eleven": "11", "twelve": "12", "thirteen": "13",
    "fourteen": "14", "fifteen": "15", "sixteen": "16", "seventeen": "17",
    "eighteen": "18", "nineteen": "19", "twenty": "20", "twenty-one": "21",
    "twenty-five": "25", "twenty-seven": "27", "forty-eight": "48", "ninety": "90",
    "lead": "leetcode", "zeros": "zeroes", "n-1": "n minus 1",
}

def clean_word(w: str) -> str:
    w = w.lower().strip()
    w = re.sub(r"[^\w\d]", "", w)
    return NUMBER_MAP.get(w, w)

def tokenize(text: str) -> list[str]:
    tokens = []
    # Replace symbols like n-1-r, O(n^2), 90°
    text = text.replace("90°", "90 degree").replace("n-1-r", "n minus 1 minus r").replace("O(1)", "o of 1")
    for raw in text.split():
        cw = clean_word(raw)
        if cw:
            tokens.append(cw)
    return tokens

def find_best_span(words: list[dict], phrase: str, min_start: int) -> tuple[int, int, float]:
    p_tokens = tokenize(phrase)
    if not p_tokens:
        return -1, -1, 0.0

    w_tokens = [clean_word(w["word"]) for w in words]
    m = len(p_tokens)
    n = len(w_tokens)

    best_s, best_e = -1, -1
    best_score = 0.0

    # Search window sizes from max(1, m - 2) to m + 5
    for s in range(min_start, n):
        for length in range(max(1, m - 2), min(m + 6, n - s + 1)):
            sub = w_tokens[s:s+length]
            sm = SequenceMatcher(None, p_tokens, sub)
            score = sm.ratio()
            # Also reward matching the first and last token
            if sub and p_tokens:
                if sub[0] == p_tokens[0]:
                    score += 0.15
                if sub[-1] == p_tokens[-1]:
                    score += 0.1
            if score > best_score:
                best_score = score
                best_s = s
                best_e = s + length - 1

    return best_s, best_e, best_score

def test_scene(scene_num: int):
    manifest_path = Path("questions/01-arrays-hashing/014-rotate-image/Q14_PHASE9_REAUDIT_V2/Q14_PHASE9_SYNC_ANCHORS.json")
    with open(manifest_path, "r", encoding="utf-8") as f:
        manifest = json.load(f)

    skey = f"S{scene_num:02d}"
    anchors = manifest["scenes"].get(skey, [])

    sync_dir = Path("questions/01-arrays-hashing/014-rotate-image/sync")
    canon_files = [f for f in sync_dir.glob(f"{scene_num:02d}-*.json") if not f.name.endswith(".anchors.json")]
    canon = canon_files[0]
    with open(canon, "r", encoding="utf-8") as f:
        sync_data = json.load(f)

    words = sync_data["words"]
    print(f"\n===============================")
    print(f"Testing {skey} ({canon.name}) — {len(words)} words, {len(anchors)} anchors")
    print(f"===============================")

    curr_idx = 0
    for a in anchors:
        aid = a["id"]
        phrase = a["phrase"]
        s, e, score = find_best_span(words, phrase, curr_idx)
        if s != -1 and score >= 0.55:
            matched_phrase = " ".join(w["word"] for w in words[s:e+1])
            s_frame = words[s]["start_frame"]
            e_frame = words[e]["end_frame"]
            print(f"[{aid}] score={score:.2f} | W{s:04d}-W{e:04d} (F{s_frame}-F{e_frame}) | '{matched_phrase}'")
            curr_idx = max(curr_idx, s + 1)
        else:
            print(f"[{aid}] NOT FOUND (best score={score:.2f}) | phrase='{phrase}'")

import sys
if __name__ == "__main__":
    snum = int(sys.argv[1]) if len(sys.argv) > 1 else 1
    test_scene(snum)
