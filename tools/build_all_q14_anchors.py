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
    "twenty-two": "22", "twenty-five": "25", "twenty-seven": "27", "forty-eight": "48",
    "ninety": "90", "lead": "leetcode", "zeros": "zeroes",
}

def clean_word(w: str) -> str:
    w = w.lower().strip()
    w = re.sub(r"[^\w\d]", "", w)
    return NUMBER_MAP.get(w, w)

def tokenize(text: str) -> list[str]:
    text = text.replace("90°", "90 degree").replace("n-1-r", "n minus 1 minus r").replace("O(n^2)", "o of n squared")
    text = text.replace("O(1)", "o of 1").replace("n-1", "n minus 1")
    tokens = []
    for raw in text.split():
        cw = clean_word(raw)
        if cw:
            tokens.append(cw)
    return tokens

SCENE_SPECS = [
    (1, "01-intro-roadmap.json", "01_SCENE01_ROADMAP_WORD_BASED_VISUAL_PLAN.md"),
    (2, "02-understand.json", "02_SCENE02_MAPPING_WORD_BASED_VISUAL_PLAN.md"),
    (3, "03-method1-trace.json", "03_SCENE03_METHOD1_TRACE_WORD_BASED_VISUAL_PLAN.md"),
    (4, "04-method1-code.json", "04_SCENE04_METHOD1_CODE_WORD_BASED_VISUAL_PLAN.md"),
    (5, "05-why-extra-space.json", "05_SCENE05_DERIVE_CYCLES_WORD_BASED_VISUAL_PLAN.md"),
    (6, "06-method2-trace.json", "06_SCENE06_METHOD2_TRACE_WORD_BASED_VISUAL_PLAN.md"),
    (7, "07-method2-code.json", "07_SCENE07_METHOD2_CODE_WORD_BASED_VISUAL_PLAN.md"),
    (8, "08-why-method2-complex.json", "08_SCENE08_DERIVE_METHOD3_WORD_BASED_VISUAL_PLAN.md"),
    (9, "09-method3-idea.json", "09_SCENE09_METHOD3_PROOF_WORD_BASED_VISUAL_PLAN.md"),
    (10, "10-method3-trace.json", "10_SCENE10_METHOD3_TRACE_WORD_BASED_VISUAL_PLAN.md"),
    (11, "11-method3-code.json", "11_SCENE11_METHOD3_CODE_WORD_BASED_VISUAL_PLAN.md"),
    (12, "12-complexity.json", "12_SCENE12_COMPLEXITY_MISTAKES_EDGECASES_WORD_BASED_VISUAL_PLAN.md"),
    (13, "13-recap.json", "13_SCENE13_RECAP_ROADMAP_WORD_BASED_VISUAL_PLAN.md"),
]

def parse_plan_manifest(plan_path: Path) -> list[tuple[str, str, str]]:
    """Returns [(aid, phrase, note), ...] from Section 7 table of plan."""
    if not plan_path.exists():
        return []
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

def align_scene(scene_num: int, canonical_json: str, plan_file: str):
    plan_path = Path("questions/01-arrays-hashing/014-rotate-image/Q14_PHASE9_REAUDIT_V2") / plan_file
    sync_path = Path("questions/01-arrays-hashing/014-rotate-image/sync") / canonical_json

    plan_anchors = parse_plan_manifest(plan_path)
    with open(sync_path, "r", encoding="utf-8") as f:
        sync_data = json.load(f)

    words = sync_data["words"]
    w_tokens = [clean_word(w["word"]) for w in words]
    n_words = len(words)

    resolved_anchors = {}
    resolved_list = []
    last_end_idx = 0

    print(f"\n--- Aligning Scene {scene_num:02d} ({canonical_json}) ---")
    print(f"Total words: {n_words}, Total plan anchors: {len(plan_anchors)}")

    for aid, phrase, note in plan_anchors:
        p_tokens = tokenize(phrase)
        if not p_tokens:
            continue

        m = len(p_tokens)
        best_s, best_e = -1, -1
        best_score = 0.0

        # Search window from last_end_idx to end
        for s in range(last_end_idx, n_words):
            for length in range(max(1, m - 3), min(m + 8, n_words - s + 1)):
                sub = w_tokens[s:s+length]
                sm = SequenceMatcher(None, p_tokens, sub)
                score = sm.ratio()
                if sub and p_tokens:
                    if sub[0] == p_tokens[0]:
                        score += 0.2
                    if sub[-1] == p_tokens[-1]:
                        score += 0.1
                if score > best_score:
                    best_score = score
                    best_s = s
                    best_e = s + length - 1

        # Fallback search from earlier if missed due to overlap
        if best_score < 0.45 and last_end_idx > 0:
            for s in range(max(0, last_end_idx - 5), n_words):
                for length in range(max(1, m - 3), min(m + 8, n_words - s + 1)):
                    sub = w_tokens[s:s+length]
                    sm = SequenceMatcher(None, p_tokens, sub)
                    score = sm.ratio()
                    if sub and p_tokens:
                        if sub[0] == p_tokens[0]:
                            score += 0.2
                        if sub[-1] == p_tokens[-1]:
                            score += 0.1
                    if score > best_score:
                        best_score = score
                        best_s = s
                        best_e = s + length - 1

        if best_s != -1 and best_score >= 0.45:
            last_end_idx = max(last_end_idx, best_s + 1)
            s_word = words[best_s]
            e_word = words[best_e]
            actual_phrase = " ".join(w["word"] for w in words[best_s:best_e+1])

            anchor_record = {
                "start_word_id": f"W{best_s:04d}",
                "end_word_id": f"W{best_e:04d}",
                "phrase": actual_phrase,
                "plan_phrase": phrase,
                "start_ms": s_word["start_ms"],
                "end_ms": e_word["end_ms"],
                "start_seconds": round(s_word["start_ms"] / 1000.0, 3),
                "end_seconds": round(e_word["end_ms"] / 1000.0, 3),
                "start_frame": s_word["start_frame"],
                "end_frame": e_word["end_frame"],
                "edge": "start",
                "note": note,
            }
            resolved_anchors[aid] = anchor_record

            resolved_list.append({
                "anchor_id": aid,
                "phrase": actual_phrase,
                "plan_phrase": phrase,
                "word_start_index": best_s,
                "word_end_index": best_e,
                "start_seconds": round(s_word["start_ms"] / 1000.0, 3),
                "end_seconds": round(e_word["end_ms"] / 1000.0, 3),
                "start_frame": s_word["start_frame"],
                "end_frame_exclusive": e_word["end_frame"] + 1,
                "note": note,
            })
        else:
            print(f"  [OMITTED DRAFT ANCHOR] {aid}: '{phrase}' (not recorded in audio)")

    print(f"  -> Resolved {len(resolved_list)} active anchors for Scene {scene_num:02d}")

    # Write files
    sync_dir = Path("questions/01-arrays-hashing/014-rotate-image/sync")
    output_anchors = {
        "version": 2,
        "scene": Path(canonical_json).stem,
        "audio_file": sync_data.get("audio_file", canonical_json.replace(".json", ".mp3")),
        "duration_ms": sync_data["duration_ms"],
        "duration_frames": sync_data["duration_frames"],
        "fps": sync_data.get("fps", 30),
        "anchor_count": len(resolved_anchors),
        "anchors": resolved_anchors,
    }

    # 1. canonical .anchors.json
    c_stem = Path(canonical_json).stem
    with open(sync_dir / f"{c_stem}.anchors.json", "w", encoding="utf-8") as f:
        json.dump(output_anchors, f, indent=2, ensure_ascii=False)

    # 2. stem .anchors.json
    with open(sync_dir / f"scence{scene_num:02d}.anchors.json", "w", encoding="utf-8") as f:
        json.dump(output_anchors, f, indent=2, ensure_ascii=False)
    with open(sync_dir / f"scence-{scene_num:02d}.anchors.json", "w", encoding="utf-8") as f:
        json.dump(output_anchors, f, indent=2, ensure_ascii=False)

    # 3. SceneXX_SYNC_RESOLVED.json
    resolved_path = Path("questions/01-arrays-hashing/014-rotate-image/Q14_PHASE9_REAUDIT_V2") / f"Scene{scene_num:02d}_SYNC_RESOLVED.json"
    with open(resolved_path, "w", encoding="utf-8") as f:
        json.dump({
            "scene": f"S{scene_num:02d}",
            "audio_file": output_anchors["audio_file"],
            "fps": output_anchors["fps"],
            "duration_frames": output_anchors["duration_frames"],
            "duration_ms": output_anchors["duration_ms"],
            "anchor_count": len(resolved_list),
            "anchors": resolved_list
        }, f, indent=2, ensure_ascii=False)

def main():
    for num, canonical_json, plan_file in SCENE_SPECS:
        align_scene(num, canonical_json, plan_file)

if __name__ == "__main__":
    main()
