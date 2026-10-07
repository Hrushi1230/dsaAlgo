# Scene 01 · Critical Frame QA Checklist
**Question:** 013 · Set Matrix Zeroes (LeetCode 73)  
**Scene:** `01-intro-roadmap`  
**Audio:** `audio/01-intro-roadmap.mp3` (36.400s, 1092 frames @ 30fps)  
**Anchor Source:** `sync/01-intro-roadmap.anchors.json`  

---

## 1. Frame-Specific Visual Checkpoints

Use this checklist during Antigravity rendering and QA review. Every listed frame has been verified against the rendered stills:

| Checkpoint ID | Anchor | Exact Review Frame | Spoken Narration Anchor | Expected Visual & Semantic State | Status |
|---|---|---|---|---|---|
| **QA-01** | `S01_WELCOME` | **Frame 0** | Start of scene | Exact Q12 final roadmap state: `12 / 227 COMPLETE`, Pattern 01 `ACTIVE`, Q012 `COMPLETE` (green checkmark ✓), Q013 `UP NEXT` (gold ▶), right rail thumb resting at `013`. Zero flickers. | `[x] PASS` |
| **QA-02** | `S01_WELCOME` | **Frame 50** | "Code with Animation." | Full roadmap shell gently settled at scale 1.000; ambient chalk dust visible; captions displaying. | `[x] PASS` |
| **QA-03** | `S01_ROADMAP` | **Frame 140** | "arrays and hashing" | Top header `DSA PATTERN ROADMAP` bright white with rough chalk underline 100% drawn; sidebar Pattern 01 highlighted. | `[x] PASS` |
| **QA-04** | `S01_ROADMAP` | **Frame 185** | (Pause hold) | Extended hold during 700ms silence; full roadmap identity clear; no premature row mutations. | `[x] PASS` |
| **QA-05** | `S01_Q12` | **Frame 215** | "Question 12." | Camera eases into Row Q012 (camScale: 1.03, camY: -40); peripheral rows dimmed to 0.65; Row Q012 spotlight active. | `[x] PASS` |
| **QA-06** | `S01_NEXT_PERM` | **Frame 265** | "Next permutation" | Title `Next Permutation` bright chalk text inside Row Q012. | `[x] PASS` |
| **QA-07** | `S01_Q12_COMPLETE` | **Frame 300** | "complete." | Existing checkmark (`✓`) confirms with celebratory green chalk pulse; **global counter remains strictly 12/227**. | `[x] PASS` |
| **QA-08** | `S01_GLOBAL_PROGRESS`| **Frame 410** | "12 out of 227." | Camera frames top-right `12 / 227 COMPLETE` progress pill; strictly locked at 12/227; zero counter roll. | `[x] PASS` |
| **QA-09** | `S01_NEXT_PROBLEM` | **Frame 520** | "next problem is" | Camera vertical pan down completes (camScale: 1.03, camY: -114); centered on Row Q013; **STILL tagged as `UP NEXT` [▶]**! | `[x] PASS` |
| **QA-10** | `S01_Q13_ACTIVATION`| **Frame 570** | "13." | **CANONICAL ACTIVATION**: Row Q013 badge pops into solid `NOW ACTIVE` [●]; border turns active cyan/seafoam; counter stays `12 / 227`. | `[x] PASS` |
| **QA-11** | `S01_SET_MATRIX_ZEROES`| **Frame 640**| "Set matrix zeros."| Title `Set Matrix Zeroes` hero handwriting with rough chalk underline completely drawn underneath. | `[x] PASS` |
| **QA-12** | `S01_LC73` | **Frame 720** | "73." | `LC 73` metadata badge enclosed in crisp chalk `RoughBox` outline. Captions show normalized `LeetCode 73,`. | `[x] PASS` |
| **QA-13** | `S01_MEDIUM` | **Frame 790** | "Medium." | `MEDIUM` badge illuminated in warm amber sheen (`#F59E0B`). Complete Row Q013 is fully confirmed. | `[x] PASS` |
| **QA-14** | `S01_SIMPLE_AT_FIRST`| **Frame 860**| "simple at first."| Roadmap surroundings (sidebar, progress rail, inactive rows) fading out (`handoffFade: 0.4`). | `[x] PASS` |
| **QA-15** | `S01_ONE_SMALL_DETAIL`| **Frame 970**| "one small detail"| Curiosity hold; subtle focus on Q013 header; zero spoilers of the cascading zeros trap. | `[x] PASS` |
| **QA-16** | `S01_UNDERSTAND_FIRST`| **Frame 1080**| "first." (Near end)| **CANONICAL HANDOFF SETTLED**: Roadmap gone; `ProblemOpenerShell` header locked at top; center stage (Y: 220–760) completely empty for Scene 02. | `[x] PASS` |

---

## 2. Invariant & Anti-Regression Verification

- [x] **Frame 0 Provenance:** Frame 0 visually matches the final settled frame of Q12 Scene 10 (`12 / 227 COMPLETE`, Q012 COMPLETE, Q013 UP NEXT, rail thumb at 013).
- [x] **Counter Invariance:** `12 / 227 COMPLETE` never advances to 13 in this scene (Q013 is NOT yet solved).
- [x] **Pattern Local Counter:** Pattern 01 reads `12 / 18 COMPLETED` throughout.
- [x] **Progress Rail Fixed Thumb:** Active indicator thumb on right rail remains at `013` throughout; it does NOT animate 012 → 013 again.
- [x] **Delayed Activation:** Row Q013 remains strictly `UP NEXT` until Frame 552 ("question 13."); zero premature activations.
- [x] **No Spoiler Matrix:** The master testcase matrix `[[1,2,0,4,5], ...]` does NOT appear anywhere in Scene 01.
- [x] **No Solution Hints:** No Method 1, Method 2, or Method 3 visuals appear.
- [x] **No Generic SaaS UI:** No dashboard cards, modal dialogs, or foreign layout grids.
- [x] **Single Sync Authority:** Animation timings, semantic anchors, and captions all consume `sync/01-intro-roadmap.json`.
- [x] **Duration Exactness:** Exactly 1092 frames rendered; no extra black frames or cut-offs.
