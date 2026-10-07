import json
import re
from pathlib import Path

# Word normalization helpers
NUMBER_WORDS = {
    "zero": "0", "one": "1", "two": "2", "three": "3", "four": "4",
    "five": "5", "six": "6", "seven": "7", "eight": "8", "nine": "9",
    "ten": "10", "eleven": "11", "twelve": "12", "thirteen": "13",
    "fourteen": "14", "fifteen": "15", "sixteen": "16", "seventeen": "17",
    "eighteen": "18", "nineteen": "19", "twenty": "20", "twenty-one": "21",
    "twenty-five": "25", "twenty-seven": "27", "forty-eight": "48", "ninety": "90",
    "1st": "first", "2nd": "second", "3rd": "third", "4th": "fourth",
}

def normalize_token(w: str) -> str:
    w = w.lower().strip()
    w = re.sub(r"[^\w\d]", "", w)
    return NUMBER_WORDS.get(w, w)

def extract_notes_from_plan(plan_path: Path) -> dict[str, str]:
    notes = {}
    if not plan_path.exists():
        return notes
    content = plan_path.read_text(encoding="utf-8")
    # Match markdown table rows: | `S01_WELCOME` | `Welcome back...` | Permanent roadmap UI. |
    pattern = r"\|\s*`([A-Z0-9_]+)`\s*\|\s*`?([^`|]+)`?\s*\|\s*([^|]+)\s*\|"
    for match in re.finditer(pattern, content):
        aid, phrase, purpose = match.groups()
        notes[aid.strip()] = purpose.strip()
    return notes

SCENE_CONFIG = [
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

def find_phrase_in_words(words: list[dict], phrase: str, start_search_idx: int) -> tuple[int, int] | None:
    phrase_tokens = [normalize_token(t) for t in phrase.split() if normalize_token(t)]
    if not phrase_tokens:
        return None

    word_tokens = [normalize_token(w["word"]) for w in words]
    m = len(phrase_tokens)

    # 1. Exact token match
    for i in range(start_search_idx, len(word_tokens) - m + 1):
        if word_tokens[i:i+m] == phrase_tokens:
            return i, i + m - 1

    # 2. Fuzzy subsequence match within a window of m + 4 words
    best_match = None
    best_score = 0
    for i in range(start_search_idx, len(word_tokens)):
        for window in range(m, min(m + 5, len(word_tokens) - i + 1)):
            sub_words = word_tokens[i:i+window]
            # Count common tokens
            matched = sum(1 for pt in phrase_tokens if pt in sub_words)
            score = matched / len(phrase_tokens)
            if score > 0.75 and score > best_score:
                best_score = score
                best_match = (i, i + window - 1)
                if score == 1.0:
                    return best_match

    if best_match and best_score >= 0.75:
        return best_match

    # 3. First token match fallback if phrase is short or distinctive
    for i in range(start_search_idx, len(word_tokens)):
        if word_tokens[i] == phrase_tokens[0]:
            # Check how many follow
            matched = 1
            for k in range(1, min(m, len(word_tokens) - i)):
                if word_tokens[i + k] == phrase_tokens[k]:
                    matched += 1
            if matched >= max(1, m // 2):
                return i, i + max(0, matched - 1)

    return None

def resolve_scene(scene_num: int, canonical_json_name: str, plan_filename: str, manifest: dict):
    scene_key = f"S{scene_num:02d}"
    anchors_list = manifest["scenes"].get(scene_key, [])
    if not anchors_list:
        print(f"[{scene_key}] No anchors defined in manifest.")
        return False

    sync_path = Path("questions/01-arrays-hashing/014-rotate-image/sync") / canonical_json_name
    if not sync_path.exists():
        print(f"[{scene_key}] Sync JSON {sync_path} not found.")
        return False

    with open(sync_path, "r", encoding="utf-8") as f:
        sync_data = json.load(f)

    words = sync_data["words"]
    plan_path = Path("questions/01-arrays-hashing/014-rotate-image/Q14_PHASE9_REAUDIT_V2") / plan_filename
    notes = extract_notes_from_plan(plan_path)

    anchors_obj = {}
    resolved_list = []
    current_search_idx = 0

    unmatched = []

    for item in anchors_list:
        aid = item["id"]
        phrase = item["phrase"]
        match = find_phrase_in_words(words, phrase, current_search_idx)
        if match is None:
            # Try searching from last anchor start in case of slight overlap
            match = find_phrase_in_words(words, phrase, max(0, current_search_idx - 3))

        if match is None:
            unmatched.append((aid, phrase))
            continue

        s_idx, e_idx = match
        current_search_idx = max(current_search_idx, s_idx + 1)

        s_word = words[s_idx]
        e_word = words[e_idx]
        note = notes.get(aid, phrase)

        anchor_record = {
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
            "note": note,
        }
        anchors_obj[aid] = anchor_record

        resolved_list.append({
            "anchor_id": aid,
            "phrase": phrase,
            "word_start_index": s_idx,
            "word_end_index": e_idx,
            "start_seconds": round(s_word["start_ms"] / 1000.0, 3),
            "end_seconds": round(e_word["end_ms"] / 1000.0, 3),
            "start_frame": s_word["start_frame"],
            "end_frame_exclusive": e_word["end_frame"] + 1,
            "note": note,
        })

    if unmatched:
        print(f"[{scene_key}] ERROR: {len(unmatched)} UNMATCHED ANCHORS:")
        for aid, phrase in unmatched:
            print(f"  - {aid}: '{phrase}'")
        return False

    # Output .anchors.json
    output_anchors = {
        "version": 2,
        "scene": Path(canonical_json_name).stem,
        "audio_file": sync_data.get("audio_file", canonical_json_name.replace(".json", ".mp3")),
        "duration_ms": sync_data["duration_ms"],
        "duration_frames": sync_data["duration_frames"],
        "fps": sync_data.get("fps", 30),
        "anchor_count": len(anchors_obj),
        "anchors": anchors_obj,
    }

    sync_dir = Path("questions/01-arrays-hashing/014-rotate-image/sync")
    # Save canonical anchors
    canonical_stem = Path(canonical_json_name).stem
    with open(sync_dir / f"{canonical_stem}.anchors.json", "w", encoding="utf-8") as f:
        json.dump(output_anchors, f, indent=2, ensure_ascii=False)

    # Save stem anchors
    with open(sync_dir / f"scence{scene_num:02d}.anchors.json", "w", encoding="utf-8") as f:
        json.dump(output_anchors, f, indent=2, ensure_ascii=False)
    with open(sync_dir / f"scence-{scene_num:02d}.anchors.json", "w", encoding="utf-8") as f:
        json.dump(output_anchors, f, indent=2, ensure_ascii=False)

    # Output SceneXX_SYNC_RESOLVED.json into Q14_PHASE9_REAUDIT_V2
    resolved_path = Path("questions/01-arrays-hashing/014-rotate-image/Q14_PHASE9_REAUDIT_V2") / f"Scene{scene_num:02d}_SYNC_RESOLVED.json"
    with open(resolved_path, "w", encoding="utf-8") as f:
        json.dump({
            "scene": scene_key,
            "audio_file": output_anchors["audio_file"],
            "fps": output_anchors["fps"],
            "duration_frames": output_anchors["duration_frames"],
            "duration_ms": output_anchors["duration_ms"],
            "anchor_count": len(resolved_list),
            "anchors": resolved_list
        }, f, indent=2, ensure_ascii=False)

    print(f"[{scene_key}] SUCCESS: All {len(resolved_list)} anchors resolved with 0 unmatched.")
    return True

def main():
    manifest_path = Path("questions/01-arrays-hashing/014-rotate-image/Q14_PHASE9_REAUDIT_V2/Q14_PHASE9_SYNC_ANCHORS.json")
    with open(manifest_path, "r", encoding="utf-8") as f:
        manifest = json.load(f)

    for num, canonical_json, plan_file in SCENE_CONFIG:
        resolve_scene(num, canonical_json, plan_file, manifest)

if __name__ == "__main__":
    main()
