# 018 · First Missing Positive (LeetCode 41)

> **Pattern 01:** Arrays & Hashing (Problem 18 of 18 — Capstone Problem)  
> **Difficulty:** Hard  
> **Core Technique:** In-Place Cyclic Placement / Cycle Sort / Index as Hash Key ($O(N)$ Time, $O(1)$ Extra Auxiliary Space)  
> **Master Testcase:** `nums = [3, 4, -1, 1, 1, 10, 0, 2]` ($N = 8 \implies \text{Result} = 5$)  
> **Teaching Structure:** 13-Scene Board-Native Mobile-First Curriculum  

---

## 🚦 Production Pipeline Status

| Stage | Milestone | Artifacts | Status |
|:---|:---|:---|:---:|
| **Stage 1** | Roadmap Lock | `docs/dsa.md`, `kit/lib/roadmapData.ts`, `AGENTS.md` | ✅ **LOCKED** (Q018 · LC 41 · Hard) |
| **Stage 2** | Codebase Audit & Scaffolding | `00_CURRENT_KIT_AUDIT.md`, `REUSE_EXTEND_CREATE.md` | ✅ **COMPLETE** |
| **Stage 3** | Problem Research & Analysis | `05_VERIFIED_TRACES.md`, `06_TEACHING_ARCHITECTURE.md` | ✅ **COMPLETE** |
| **Stage 4** | Approach Lock | Brute Repeated Search $\to$ HashSet $\to$ Cyclic In-Place Placement | ✅ **LOCKED** |
| **Stage 5** | Master Testcase Selection | `[3, 4, -1, 1, 1, 10, 0, 2]` ($N = 8$, Target $5$) | ✅ **LOCKED** |
| **Stage 6** | Actual Dry Run | Complete traces for all three approaches | ✅ **COMPLETE** |
| **Stage 7** | Independent Recheck | 4 implementations matched over 57,986 test cases | ✅ **VERIFIED (MATCH)** |
| **Stage 8** | Verified Trace Lock | 23 Brute checks, 8 HashSet inserts + 5 probes, 4 in-place swaps | ✅ **LOCKED** |
| **Stage 9** | Semantic Word Plans | 13 detailed word-driven semantic scene plans | ✅ **COMPLETE** (`unzipped_word_plans/`) |
| **Stage 10** | ElevenLabs Narration | 13-Scene senior teacher narration script | ✅ **LOCKED** (`Q18_First_Missing_Positive_Final_ElevenLabs_Narration.md`) |
| **Stage 11** | Mobile Readability Spec | YouTube mobile-first typography and board contrast guidelines | ✅ **LOCKED** (`00_MOBILE_READABILITY_KIT_CHANGE_REQUEST.md`) |
| **Stage 12** | Voiceover Audio Generation | Scene voiceovers (`audio/scence01.mp3` .. `scence13.mp3`, `public/audio/018/`) | ✅ **COMPLETE** (13 MP3s) |
| **Stage 13** | Word-Level Sync Extraction | Whisper word timestamp JSONs (`sync/01-roadmap.json` .. `13-recap-roadmap.json`) | ✅ **COMPLETE** (13 Sync files) |
| **Stage 14** | Framewise Scene Planning | Framewise timing plans (`plans/Scene01..13_FRAMEWISE_PLAN.md`) | ✅ **COMPLETE** (22,338 scene frames) |
| **Stage 15** | Antigravity Implementation Delta | Code handoff & kit verified mappings (`REUSE_EXTEND_CREATE.md`) | ✅ **COMPLETE** |
| **Stage 16** | Remotion Implementation | `src/` scene components & compositions (`Scene01` .. `Scene13`, `MainVideo.tsx`) | ✅ **COMPLETE** (Bundled & Tested) |
| **Stage 17** | Critical-Frame QA | Still review across all 13 scenes & mobile readability compliance | ✅ **COMPLETE (13/13 STILLS PASS)** |
| **Stage 18** | Final QA & 2K Render | Master 2K video export (`--scale=1.3333333333333333`) | ✅ **COMPLETE (99.3 MB, 23,418 frames)** |
| **Stage 19** | YouTube SEO Package | `youtube_seo.md` | ✅ **COMPLETE** |
| **Stage 20** | Roadmap Update | Arrays & Hashing pattern complete! | ✅ **COMPLETE (Pattern 01 Done, Pattern 02 Active)** |

---

## 🎬 13-Scene Production Breakdown

| Scene | Type | Title | Key Teaching Focus |
|:---:|:---:|:---|:---|
| **01** | Roadmap | Roadmap Resume + Q18 Activation | Progress 17/227 $\to$ Activate Q18 First Missing Positive (Arrays & Hashing finale) |
| **02** | Concept | Understand the Question + Brute Force Idea | Master input `[3, 4, -1, 1, 1, 10, 0, 2]`, constraints, searching candidate $1, 2, \dots$ |
| **03** | Trace | Full Brute Force Trace | 23 comparisons: $1$ found, $2$ found, $3$ found, $4$ found, $5$ not found $\to 5$ |
| **04** | Code | Brute Force Code Walkthrough | Python outer candidate loop, inner search loop, break on match |
| **05** | Bridge | Limitation + HashSet Idea | Repeated scans cost $O(N^2) \to$ replace with $O(1)$ HashSet lookups |
| **06** | Trace | Full HashSet Trace | 8 inserts (7 distinct, 1 duplicate ignored) + 5 candidate probes $\to 5$ |
| **07** | Code | HashSet Code Walkthrough | Python set creation, membership while loop, return first missing |
| **08** | Bridge | Limitation Bridge | HashSet takes $O(N)$ extra space; why allocate extra memory when array has $N$ slots? |
| **09** | Concept | Optimal Idea & In-Place Invariant | Mapping $X \in [1, N]$ to index $X - 1$; duplicate guard `nums[i] != nums[nums[i]-1]` |
| **10** | Trace | Full In-Place Placement Trace | 4 swaps (index 0↔2, 1↔3, 1↔0, 7↔1), duplicate 1 at index 4 stopped $\to$ scan finds gap at index 4 $\to 5$ |
| **11** | Code | Optimal In-Place Code Walkthrough | While loop swap condition, why `i` isn't incremented on swap, final linear scan |
| **12** | Analysis | Complexity Proof + Traps | Why while loop is strictly $O(N)$ ($\le N$ swaps), space $O(1)$, infinite loop trap |
| **13** | Roadmap | Pattern 01 Capstone Celebration + Next Up | 18/18 Arrays & Hashing complete! Next: Pattern 02 Two Pointers (Valid Palindrome) |
