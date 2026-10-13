"""
generate_all_q16_framewise_plans.py — Synthesizes word-based visual plans and exact Whisper sync
into authoritative *_FRAMEWISE_PLAN.md files for Question 16 (Subarray Sum Equals K).
"""

import json
from pathlib import Path

BASE_DIR = Path("questions/01-arrays-hashing/016-subarray-sum-equals-k")
PLANS_DIR = BASE_DIR / "plans"
SYNC_DIR = BASE_DIR / "sync"

SCENE_SPECS = {
    4: {
        "slug": "04-method1-code",
        "title": "Method 1 Code & Complexity",
        "beat_type": "CODE WALKTHROUGH & COMPLEXITY ANALYSIS",
        "pedagogy": [
            "1. Present clean Python implementation of Method 1 (Running Sum Enumeration).",
            "2. Typewriter line reveal aligned with spoken explanation: ans=0, outer loop start, inner loop end, running_sum += nums[end], if check, return ans.",
            "3. Derive time complexity mathematically: n + (n-1) + ... + 1 = n(n+1)/2 = O(n^2).",
            "4. Display quadratic growth curve using ComplexityGrowthGraphV2.",
            "5. Analyze auxiliary space: O(1) in-place scalar accumulator variables."
        ],
        "data_structure": "ChalkCodeEditorV2 (Python), ComplexityGrowthGraphV2 (O(n^2) quadratic curve)",
        "components": {
            "reuse": ["ChalkCodeEditorV2", "RoughBox", "RoughLine", "theme", "fonts", "Captions"],
            "extend": ["ComplexityGrowthGraphV2 props for O(n^2)"],
            "create": ["Scene04Method1Code.tsx"]
        }
    },
    5: {
        "slug": "05-optimal-idea",
        "title": "Optimal Method 2 Idea — Prefix Math & Frequency Map",
        "beat_type": "ALGORITHM INTUITION & PREFIX DERIVATION",
        "pedagogy": [
            "1. Address root cause of O(n^2): recomputing overlapping prefix sums.",
            "2. Derive prefix equation: subarray_sum(i..j) = prefix[j] - prefix[i-1] = k.",
            "3. Rearrange mathematically: prefix[i-1] = prefix[j] - k.",
            "4. Establish needed value formula: needed = current_prefix - k.",
            "5. Explain why a HashSet is insufficient and FrequencyMap is mandatory: duplicate earlier prefix sums occur when zeros or sum-canceling negatives exist.",
            "6. Explain base case: prefix=0 with frequency=1 represents subarrays starting at index 0."
        ],
        "data_structure": "Prefix Sum Diagram, Mathematical Chalk Formula Cards, FrequencyMapTableV2 Preview",
        "components": {
            "reuse": ["RoughBox", "RoughLine", "RoughCurve", "theme", "fonts", "Captions"],
            "extend": ["FrequencyMapTableV2 preview"],
            "create": ["Scene05OptimalIdea.tsx"]
        }
    },
    6: {
        "slug": "06-method2-trace",
        "title": "Method 2 Full Trace — Prefix Sum & Frequency Map",
        "beat_type": "COMPLETE OPTIMAL EXECUTION TRACE",
        "pedagogy": [
            "1. Complete step-by-step trace of Method 2 on nums = [1, -1, 2, 1, 0, -2, 3] with k = 3.",
            "2. Initial state: map = {0: 1}, prefix = 0, ans = 0.",
            "3. Step i=0 (val 1): prefix=1, needed=-2, map[-2] absent, ans=0, insert map[1]=1.",
            "4. Step i=1 (val -1): prefix=0, needed=-3, map[-3] absent, ans=0, update map[0]=2.",
            "5. Step i=2 (val 2): prefix=2, needed=-1, map[-1] absent, ans=0, insert map[2]=1.",
            "6. Step i=3 (val 1): prefix=3, needed=0, map[0]=2 -> MATCH! ans += 2 -> ans=2, insert map[3]=1.",
            "7. Step i=4 (val 0): prefix=3, needed=0, map[0]=2 -> MATCH! ans += 2 -> ans=4, update map[3]=2.",
            "8. Step i=5 (val -2): prefix=1, needed=-2, map[-2] absent, ans=4, update map[1]=2.",
            "9. Step i=6 (val 3): prefix=4, needed=1, map[1]=2 -> MATCH! ans += 2 -> ans=6, insert map[4]=1.",
            "10. Final answer strictly verified as 6."
        ],
        "data_structure": "ArrayTrackV2 (left), FrequencyMapTableV2 (right), Accumulator Gauges",
        "components": {
            "reuse": ["ArrayTrackV2", "ArraySlotV2", "PointerLaneV2", "theme", "fonts", "Captions"],
            "extend": ["FrequencyMapTableV2 live query states (scanning, found, not_found, increment)"],
            "create": ["Scene06Method2Trace.tsx"]
        }
    },
    7: {
        "slug": "07-method2-code",
        "title": "Method 2 Code & Complexity",
        "beat_type": "OPTIMAL CODE WALKTHROUGH & LINEAR COMPLEXITY",
        "pedagogy": [
            "1. Present clean Python implementation of Method 2 using HashMap / collections.defaultdict.",
            "2. Walk through critical initialization: counts = {0: 1}, prefix = 0, ans = 0.",
            "3. Explain single loop: for x in nums -> prefix += x -> needed = prefix - k -> ans += counts.get(needed, 0) -> counts[prefix] = counts.get(prefix, 0) + 1.",
            "4. Emphasize lookup occurs BEFORE updating current prefix count.",
            "5. Derive O(n) linear time complexity with single pass and O(1) average hash table operations.",
            "6. Derive O(n) auxiliary space complexity for at most n+1 distinct prefix sums.",
            "7. Display linear curve using ComplexityGrowthGraphV2."
        ],
        "data_structure": "ChalkCodeEditorV2, ComplexityGrowthGraphV2 (O(n) linear curve)",
        "components": {
            "reuse": ["ChalkCodeEditorV2", "RoughBox", "RoughLine", "theme", "fonts", "Captions"],
            "extend": ["ComplexityGrowthGraphV2 props for O(n) linear"],
            "create": ["Scene07Method2Code.tsx"]
        }
    },
    8: {
        "slug": "08-compare-mistakes-edgecases",
        "title": "Comparison, Pitfalls & Edge Cases",
        "beat_type": "INTERVIEW READINESS & SYNTHESIS",
        "pedagogy": [
            "1. Side-by-side comparison table: Method 1 (O(n^2) time, O(1) space) vs Method 2 (O(n) time, O(n) space).",
            "2. Highlight #1 most common interview mistake: forgetting counts[0] = 1 (fails on subarrays starting at index 0).",
            "3. Highlight #2 mistake: updating counts[prefix] BEFORE checking needed (can falsely match empty or self-subarrays when k=0).",
            "4. Address edge cases: all zeros array, negative k, single element array.",
            "5. Confirm interview decision rule: always default to Method 2 in production."
        ],
        "data_structure": "Chalkboard Comparison Matrix, Warning Callout Banners",
        "components": {
            "reuse": ["RoughBox", "RoughLine", "theme", "fonts", "Captions", "InterviewReadinessCards"],
            "extend": ["Comparison table styling"],
            "create": ["Scene08CompareMistakesEdgeCases.tsx"]
        }
    },
    9: {
        "slug": "09-recap",
        "title": "Recap, Pattern Transfer & Roadmap Progression",
        "beat_type": "RECAP & CURRICULUM ADVANCEMENT",
        "pedagogy": [
            "1. Rapid 3-beat recap of core pattern: Running Prefix + Frequency Map.",
            "2. Formulate transferable pattern rule: Whenever problem asks for contiguous subarray sum = k (or divisible by k), think Prefix Sum + Hash Map.",
            "3. Resume Master Roadmap: Row 016 (Subarray Sum Equals K) locks COMPLETE with green checkmark.",
            "4. Global progress advances from 15/227 to 16/227 (+1 increment roll).",
            "5. Row 017 activates as UP NEXT with gold pill indicator."
        ],
        "data_structure": "MasterRoadmapV2, Progress Counter, Pattern Transfer Card",
        "components": {
            "reuse": ["MasterRoadmapV2", "RoughBox", "theme", "fonts", "Captions", "CountUp"],
            "extend": ["MasterRoadmapV2 props for 16/227 complete"],
            "create": ["Scene09RecapRoadmap.tsx"]
        }
    }
}

def generate_plan(scene_num: int):
    spec = SCENE_SPECS[scene_num]
    slug = spec["slug"]
    sync_file = SYNC_DIR / f"scence{scene_num:02d}.json"
    
    with open(sync_file, "r", encoding="utf-8") as f:
        sync_data = json.load(f)
        
    duration_frames = sync_data["duration_frames"]
    duration_ms = sync_data["duration_ms"]
    sentences = sync_data.get("sentences", [])
    
    lines = []
    lines.append(f"# Q16 — Subarray Sum Equals K (LC 560)")
    lines.append(f"# Scene {scene_num:02d} · {spec['title']}")
    lines.append(f"## EXACT AUDIO-SYNCHRONIZED FRAME-WISE PLAN\n")
    lines.append(f"**Course:** Code With Animation  ")
    lines.append(f"**Roadmap:** 227 Problems · 19 Patterns  ")
    lines.append(f"**Pattern:** 01 · Arrays & Hashing  ")
    lines.append(f"**Problem:** #016 Subarray Sum Equals K · LC 560 · Medium  ")
    lines.append(f"**Audio File:** `questions/01-arrays-hashing/016-subarray-sum-equals-k/audio/scence{scene_num:02d}.mp3` (`remotion-project/public/audio/016/{slug}.mp3`)  ")
    lines.append(f"**Exact Sync File:** `questions/01-arrays-hashing/016-subarray-sum-equals-k/sync/scence{scene_num:02d}.json`  ")
    lines.append(f"**FPS:** 30  ")
    lines.append(f"**Audio Duration:** {duration_ms/1000.0:.3f}s ({duration_ms:,} ms)  ")
    lines.append(f"**Exact Total Frames:** {duration_frames} frames ({duration_ms/1000.0:.3f} seconds @ 30fps)  ")
    lines.append(f"**Spoken Sentence Count:** {len(sentences)} beats\n")
    lines.append("---\n")
    
    lines.append("## 1. Mandatory Scene Contract\n")
    lines.append("```text")
    lines.append(f"SCENE: {slug}")
    lines.append("QUESTION: 016 · Subarray Sum Equals K (LeetCode 560)")
    lines.append(f"BEAT TYPE: {spec['beat_type']}")
    lines.append(f"AUDIO FILE: audio/016/{slug}.mp3")
    lines.append(f"SYNC FILE: sync/scence{scene_num:02d}.json")
    lines.append("FPS: 30")
    lines.append(f"TOTAL FRAMES: {duration_frames}")
    lines.append("PEDAGOGICAL GOAL:")
    for goal in spec["pedagogy"]:
        lines.append(f"  {goal}")
    lines.append("TRACE STEP IDS: N/A")
    lines.append(f"DATA STRUCTURE: {spec['data_structure']}")
    lines.append("")
    lines.append("REUSE:")
    for r in spec["components"]["reuse"]:
        lines.append(f"- {r}")
    lines.append("")
    lines.append("EXTEND:")
    for e in spec["components"]["extend"]:
        lines.append(f"- {e}")
    lines.append("")
    lines.append("CREATE:")
    for c in spec["components"]["create"]:
        lines.append(f"- {c}")
    lines.append("")
    lines.append("DO NOT TOUCH:")
    lines.append("- @dsa/kit core foundations")
    lines.append("- Prior questions regression assets")
    lines.append("```\n")
    lines.append("---\n")
    
    lines.append("## 2. Optical Canvas Layout (1920 × 1080)\n")
    lines.append("```text")
    lines.append("+-----------------------------------------------------------------------------+")
    lines.append(f"| TOP HEADER: Y: 30–80  \"Q16 · {spec['title'].upper()}\"")
    lines.append("| SUB-TAG:    Y: 90–140 State / Condition Badges                              |")
    lines.append("+-----------------------------------------------------------------------------+")
    lines.append("| CENTER STAGE: Y: 220–780                                                    |")
    lines.append("|                                                                             |")
    lines.append(f"|  Hero visual elements dedicated to {spec['title']}:                         |")
    lines.append(f"|  {spec['data_structure'][:68]} |")
    lines.append("|                                                                             |")
    lines.append("+-----------------------------------------------------------------------------+")
    lines.append("| CAPTIONS ZONE: Y: 960–1040 (Word-level synchronized subtitles)              |")
    lines.append("+-----------------------------------------------------------------------------+")
    lines.append("```\n")
    lines.append("---\n")
    
    lines.append("## 3. Framewise Beat Choreography\n")
    
    for i, sent in enumerate(sentences):
        b_num = i + 1
        sf = sent["start_frame"]
        ef = sent["end_frame"]
        text = sent["text"]
        
        # Calculate hold/pause to next sentence
        pause_info = ""
        if i + 1 < len(sentences):
            next_sf = sentences[i+1]["start_frame"]
            if next_sf > ef + 2:
                pause_info = f", pause to F{next_sf-1}"
        else:
            if duration_frames > ef:
                pause_info = f", settle to F{duration_frames}"
                
        lines.append(f"### BEAT {b_num:02d} (Frames {sf} – {ef})")
        lines.append(f"- **ANCHOR:** `\"{text}\"` (F{sf} – F{ef}{pause_info})")
        lines.append(f"- **WHAT APPEARS NOW:** Stage visual responds to spoken cue: `{text[:60]}...`")
        lines.append(f"- **CENTER-STAGE HERO:** {spec['title']} Beat {b_num}")
        lines.append(f"- **CAUSE:** Audio reaches anchor frame {sf}.")
        lines.append(f"- **EFFECT / MOTION:** Visual state updates smoothly with chalk stroke and opacity easing.")
        lines.append(f"- **WHAT MUST NOT APPEAR YET:** Subsequent algorithm states beyond frame {ef}.")
        lines.append(f"- **COMPREHENSION HOLD:** Respects natural audio cadence at frame {ef}.")
        lines.append(f"- **CLEANUP / EXIT:** Stable state persists into Beat {b_num+1}.")
        lines.append(f"- **PERSISTENT STATE:** Current verified state locked.\n")
        lines.append("---\n")
        
    out_path = PLANS_DIR / f"{slug}_FRAMEWISE_PLAN.md"
    with open(out_path, "w", encoding="utf-8") as out:
        out.write("\n".join(lines))
    print(f"Generated {out_path} ({len(sentences)} beats, {duration_frames} frames)")

def main():
    for s in [4, 5, 6, 7, 8, 9]:
        generate_plan(s)

if __name__ == "__main__":
    main()
