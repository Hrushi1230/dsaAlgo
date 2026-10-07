import json
import re
from pathlib import Path
from difflib import SequenceMatcher

NUMBER_MAP = {
    "zero": "0", "one": "1", "two": "2", "three": "3", "four": "4",
    "five": "5", "six": "6", "seven": "7", "eight": "8", "nine": "9",
    "ten": "10", "eleven": "11", "twelve": "12", "thirteen": "13",
    "fourteen": "14", "fifteen": "15", "sixteen": "16", "seventeen": "17",
    "eighteen": "18", "nineteen": "19", "twenty": "20", "ninety": "90",
}

COMPOUNDS = {
    "twenty-one": "21", "twenty-two": "22", "twenty-three": "23",
    "twenty-four": "24", "twenty-five": "25", "twenty-six": "26",
    "twenty-seven": "27", "twenty-eight": "28", "twenty-nine": "29",
    "forty-eight": "48", "ninety-degree": "90 degree", "90-degree": "90 degree",
    "90°": "90 degree", "n-1-r": "n minus 1 minus r", "n-1": "n minus 1",
    "o(n^2)": "o of n squared", "o(1)": "o of 1", "o of n^2": "o of n squared",
    "zeros": "zeroes", "lead": "leetcode",
}

def normalize_text(text: str) -> list[str]:
    text = text.lower()
    for k, v in COMPOUNDS.items():
        text = text.replace(k, v)
    tokens = []
    for raw in text.split():
        cleaned = re.sub(r"[^\w\d]", "", raw)
        if not cleaned:
            continue
        cleaned = NUMBER_MAP.get(cleaned, cleaned)
        tokens.append(cleaned)
    return tokens

def parse_plan_manifest(plan_path: Path):
    content = plan_path.read_text(encoding="utf-8")
    pattern = r"\|\s*`([A-Z0-9_]+)`\s*\|\s*`?([^`|]+)`?\s*\|\s*([^|]+)\s*\|"
    results = []
    for match in re.finditer(pattern, content):
        aid, phrase, purpose = match.groups()
        aid = aid.strip()
        if aid.startswith("Anchor") or aid == "Anchor ID":
            continue
        results.append((aid, phrase.strip(), purpose.strip()))
    return results

def test_s10():
    plan_path = Path("questions/01-arrays-hashing/014-rotate-image/Q14_PHASE9_REAUDIT_V2/10_SCENE10_METHOD3_TRACE_WORD_BASED_VISUAL_PLAN.md")
    sync_path = Path("questions/01-arrays-hashing/014-rotate-image/sync/10-method3-trace.json")
    with open(sync_path, "r", encoding="utf-8") as f:
        sync_data = json.load(f)

    words = sync_data["words"]
    w_tokens = [normalize_text(w["word"])[0] if normalize_text(w["word"]) else "" for w in words]
    plan_anchors = parse_plan_manifest(plan_path)

    print(f"Total plan anchors: {len(plan_anchors)}, Total words: {len(words)}")
    last_idx = 0
    matched = 0

    for aid, phrase, purpose in plan_anchors:
        p_tokens = normalize_text(phrase)
        m = len(p_tokens)
        best_s, best_e, best_score = -1, -1, 0.0

        for s in range(last_idx, len(w_tokens)):
            for length in range(max(1, m - 2), min(m + 5, len(w_tokens) - s + 1)):
                sub = w_tokens[s:s+length]
                sm = SequenceMatcher(None, p_tokens, sub)
                score = sm.ratio()
                if sub and p_tokens and sub[0] == p_tokens[0]:
                    score += 0.2
                if score > best_score:
                    best_score = score
                    best_s, best_e = s, s + length - 1

        if best_score >= 0.5:
            last_idx = best_s + 1
            actual = " ".join(w["word"] for w in words[best_s:best_e+1])
            s_frame = words[best_s]["start_frame"]
            e_frame = words[best_e]["end_frame"]
            matched += 1
            print(f"[{aid}] score={best_score:.2f} | W{best_s:04d}-W{best_e:04d} (F{s_frame}-F{e_frame}) | '{actual}'")
        else:
            print(f"[{aid}] MISSED (score={best_score:.2f}) | '{phrase}'")

    print(f"\nMatched: {matched}/{len(plan_anchors)}")

if __name__ == "__main__":
    test_s10()
