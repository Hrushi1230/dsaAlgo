# Scene 01 · Critical Frame QA Checklist
**Question:** 011 · Sort Colors (LeetCode 75)  
**Scene:** `01-intro-roadmap`  
**Audio:** `audio/01-intro-roadmap.mp3` (40.780s, 1,223 frames @ 30fps)  
**Anchor Source:** `sync/01-intro-roadmap.anchors.json`  

---

## 1. Frame-Specific Visual Checkpoints

Use this checklist during Antigravity rendering and QA review. Every listed frame must match the expected visual state exactly.

| Checkpoint ID | Anchor | Exact Review Frame | Spoken Narration Anchor | Expected Visual & Semantic State | Status |
|---|---|---|---|---|---|
| **QA-01** | `S01_WELCOME` | **Frame 0** | Start of scene | Exact Q10 Scene 13 final roadmap state: `10 / 227 COMPLETE`, Pattern 01 `ACTIVE`, Q010 `COMPLETE`, Q011 `UP NEXT`, right rail thumb at `011`. Zero flickers. | `[ ] PENDING` |
| **QA-02** | `S01_WELCOME` | **Frame 50** | "Code with Animation." | Full roadmap shell gently breathing/settled; ambient chalk dust visible; captions displaying. | `[ ] PENDING` |
| **QA-03** | `S01_ROADMAP` | **Frame 150** | "DSA pattern roadmap," | Top header `DSA PATTERN ROADMAP` bright white with gold chalk underline (`RoughLine`) drawing underneath. | `[ ] PENDING` |
| **QA-04** | `S01_227` | **Frame 240** | "Two hundred twenty-seven" | `227 PROBLEMS` top-right badge pulses with scale pop; rail bottom label `227` illuminated. Rail thumb stays at 011. | `[ ] PENDING` |
| **QA-05** | `S01_19_PATTERNS` | **Frame 340** | "nineteen important patterns" | Shimmer sweep passes down left sidebar; all 19 patterns legible; Pattern 01 remains only `ACTIVE` pattern. | `[ ] PENDING` |
| **QA-06** | `S01_INTERVIEW_PREP` | **Frame 420** | "serious interview preparation," | Whole-curriculum wide view (scale 0.995); NO generic popup cards or panels. | `[ ] PENDING` |
| **QA-07** | `S01_FUNDAMENTALS` | **Frame 490** | "fundamentals" | Focus at top of rail `001` and completed foundational rows 001–003; rail thumb stays at 011. | `[ ] PENDING` |
| **QA-08** | `S01_FAANG` | **Frame 540** | "FAANG-level" | Temporary chalk journey tracer (`S4 TRACE_PATH`) traveling along progress rail toward `227`. Permanent thumb at `011` does not move. | `[ ] PENDING` |
| **QA-09** | `S01_RIGHT_NOW` | **Frame 620** | "Right now," | Camera zooming into Pattern 01 region (`scale: 0.995 -> 1.025`); journey tracer has vanished completely. | `[ ] PENDING` |
| **QA-10** | `S01_ARRAYS_HASHING` | **Frame 680** | "arrays and hashing." | Dual pivot highlight: sidebar badge `01 Arrays & Hashing` and main area header `PATTERN 01 · Arrays & Hashing` underlined; counter reads `10 / 18 COMPLETED`. | `[ ] PENDING` |
| **QA-11** | `S01_Q10` | **Frame 760** | "Question 10." | Row 010 highlighted in spotlight; row number `010` mono white. | `[ ] PENDING` |
| **QA-12** | `S01_Q10_TITLE` | **Frame 820** | "consecutive sequence" | Title `Longest Consecutive Sequence` bright chalk text. | `[ ] PENDING` |
| **QA-13** | `S01_Q10_COMPLETE` | **Frame 880** | "complete." | Existing checkmark (`✓`) confirms with redraw stroke (`S3 REDRAW_CONFIRM`); `COMPLETE` badge green pulse; **global counter remains strictly 10/227**. | `[ ] PENDING` |
| **QA-14** | `S01_NEXT_PROBLEM` | **Frame 980** | (Pause P08 hold) | Camera centered on Row 011; **Row 011 is STILL `UP NEXT`** (`▶`); quiet dramatic anticipation hold. | `[ ] PENDING` |
| **QA-15** | `S01_Q11` | **Frame 1040** | "Question 11." | **CANONICAL ACTIVATION**: Row 011 icon is solid gold disc `●`; badge reads `NOW ACTIVE`; rough border full pivot gold; global counter remains `10 / 227`. | `[ ] PENDING` |
| **QA-16** | `S01_SORT_COLORS` | **Frame 1070** | "Sort colors." | Title `Sort Colors` hero white with gold chalk underline; subtitle `· Dutch National Flag` visible; center stage clean and empty. | `[ ] PENDING` |
| **QA-17** | `S01_LC75` | **Frame 1120** | "LeetCode 75," | `LC 75` metadata enclosed in delicate chalk `RoughBox` outline. | `[ ] PENDING` |
| **QA-18** | `S01_MEDIUM` | **Frame 1170** | "Medium." | `MEDIUM` badge illuminated in warm amber sheen (`theme.pivot`). | `[ ] PENDING` |
| **QA-19** | `S01_CONTINUE` | **Frame 1210** | "Let's" | Roadmap surroundings fading out (`opacity: 1 -> 0`); Q011 header elements gliding smoothly toward Y: 120. | `[ ] PENDING` |
| **QA-20** | `S01_CONTINUE` | **Frame 1223** | "continue." (End Frame) | **CANONICAL HANDOFF SETTLED**: Roadmap gone; clean chalkboard; `ProblemOpenerShell` title locked at top; center stage empty for Scene 02. | `[ ] PENDING` |

---

## 2. Invariant & Anti-Regression Verification

- [ ] **Frame 0 Provenance:** Frame 0 visually matches the final settled frame of Q10 Scene 13.
- [ ] **Counter Invariance:** `10 / 227 COMPLETE` never advances to 11 in this scene.
- [ ] **Pattern Local Counter:** Pattern 01 reads `10 / 18 COMPLETED` throughout.
- [ ] **Progress Rail Fixed Thumb:** Active indicator thumb on right rail remains at `011` from Frame 0 to Frame 1201; it does NOT animate 010 → 011 again.
- [ ] **No Spoiler Array:** The master testcase array `[2, 1, 2, 0, 2, 1, 0, 1, 0, 2]` does NOT appear anywhere in Scene 01.
- [ ] **No Solution Hints:** No red/white/blue color swatches, no Counting counters, and no DNF low/mid/high pointers appear.
- [ ] **No Generic SaaS UI:** No dashboard cards, modal dialogs, or foreign layout grids.
- [ ] **Single Sync Authority:** Animation timings, semantic anchors, and captions all consume `sync/01-intro-roadmap.json`.
- [ ] **Duration Exactness:** Exactly 1,223 frames rendered; no extra black frames or cut-offs.
