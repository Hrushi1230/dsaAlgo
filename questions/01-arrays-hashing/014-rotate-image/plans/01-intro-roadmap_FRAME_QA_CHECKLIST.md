# Scene 01 · Critical Frame QA Checklist
**Question:** 014 · Rotate Image (LeetCode 48)  
**Scene:** `01-intro-roadmap`  
**Audio:** `audio/01-intro-roadmap.mp3` (29.500s, 885 frames @ 30fps)  
**Anchor Source:** `sync/01-intro-roadmap.anchors.json`  

---

## 1. Frame-Specific Visual Checkpoints

Use this checklist during Antigravity rendering and QA review. Every listed frame has been derived from the exact audio-sync timestamps:

| Checkpoint ID | Anchor | Exact Review Frame | Spoken Narration Anchor | Expected Visual & Semantic State | Status |
|---|---|---|---|---|---|
| **QA-01** | `S01_WELCOME` | **Frame 0** | Start of scene | Exact Q13 final roadmap state: `13 / 227 COMPLETE`, Pattern 01 `ACTIVE`, Q013 `COMPLETE` (green checkmark ✓), Q014 `UP NEXT` (gold ▶), right rail thumb resting at `014`. Zero flickers. | `[x] PASS` |
| **QA-02** | `S01_WELCOME` | **Frame 50** | "Code with Animation." | Full roadmap shell settled at scale 1.000; ambient chalk dust visible; captions displaying. | `[x] PASS` |
| **QA-03** | `S01_PATTERN` | **Frame 140** | "arrays and hashing" | Top header `DSA PATTERN ROADMAP` bright white with rough chalk underline 100% drawn; sidebar Pattern 01 highlighted. | `[x] PASS` |
| **QA-04** | `S01_PATTERN` | **Frame 215** | (Pause hold) | Extended hold during 1200ms silence; full roadmap identity clear; no premature row mutations. | `[x] PASS` |
| **QA-05** | `S01_Q13` | **Frame 245** | "Question 13," | Spotlight focus shifts to Row Q013; peripheral rows dimmed to 0.40; Row Q013 spotlight active. | `[x] PASS` |
| **QA-06** | `S01_SET_MATRIX_ZEROES` | **Frame 295** | "matrix zeros" | Title `Set Matrix Zeroes` and `LC 73 · Medium` bright chalk text inside Row Q013. | `[x] PASS` |
| **QA-07** | `S01_COMPLETE` | **Frame 335** | "complete." | Existing checkmark (`✓`) confirms with green chalk redraw pulse; **global counter remains strictly 13/227**. | `[x] PASS` |
| **QA-08** | `S01_PROGRESS` | **Frame 450** | "13 out of 227." | Focus beam highlights top navigation `13 / 227 PROBLEMS` pill; strictly locked at 13/227; zero counter roll. | `[x] PASS` |
| **QA-09** | `S01_NEXT` | **Frame 550** | "And next we have" | Spotlight smoothly glides down from Row Q013 to Row Q014; **STILL tagged as `UP NEXT` [▶]**! | `[x] PASS` |
| **QA-10** | `S01_Q14` | **Frame 590** | "question 14," | **CANONICAL ACTIVATION**: Row Q014 badge pops into solid `NOW ACTIVE` [●]; border turns active cyan/seafoam; counter stays `13 / 227`. | `[x] PASS` |
| **QA-11** | `S01_TITLE` | **Frame 640** | "rotate image," | Title `Rotate Image` hero chalk text reveals with cyan rough underline completely drawn underneath. | `[x] PASS` |
| **QA-12** | `S01_LC` | **Frame 690** | "48," | `LeetCode 48` metadata pill docked beside title with crisp chalk dust puff. | `[x] PASS` |
| **QA-13** | `S01_MEDIUM` | **Frame 738** | "medium." | `MEDIUM` badge illuminated in warm amber sheen (`#F59E0B`). Complete Row Q014 header is fully confirmed. | `[x] PASS` |
| **QA-14** | `S01_ABOUT` | **Frame 780** | "This problem is about" | Roadmap surroundings (sidebar, progress rail, inactive rows) fade down to opacity 0.25; header begins upward elevation. | `[x] PASS` |
| **QA-15** | `S01_SQUARE` | **Frame 860** | "square matrix." | **CANONICAL HANDOFF SETTLED**: Roadmap gone; `ProblemOpenerShell` header locked at top (Y: 60–120); abstract cyan square outline with 90° clockwise arc; center stage (Y: 220–760) completely empty for Scene 02. | `[x] PASS` |

---

## 2. Invariant & Anti-Regression Verification

- [x] **Frame 0 Provenance:** Frame 0 visually matches the final settled frame of Q13 Scene 13 (`13 / 227 COMPLETE`, Q013 COMPLETE, Q014 UP NEXT, rail thumb at 014).
- [x] **Counter Invariance:** `13 / 227 COMPLETE` never advances to 14 in this scene (Q014 is NOT yet solved).
- [x] **Pattern Local Counter:** Pattern 01 reads `13 / 18 COMPLETED` throughout.
- [x] **Progress Rail Fixed Thumb:** Active indicator thumb on right rail remains at `014` throughout; it does NOT animate 013 → 014 again.
- [x] **Delayed Activation:** Row Q014 remains strictly `UP NEXT` until Frame 574 ("question 14,"); zero premature activations.
- [x] **No Spoiler Matrix:** The concrete 5×5 matrix `[[1,2,3,4,5], ...]` does NOT appear anywhere in Scene 01.
- [x] **No Solution Hints:** No Method 1, Method 2, or Method 3 visuals appear.
- [x] **No Generic SaaS UI:** No dashboard cards, modal dialogs, or foreign layout grids.
- [x] **Single Sync Authority:** Animation timings, semantic anchors, and captions all consume `sync/01-intro-roadmap.json`.
- [x] **Duration Exactness:** Exactly 885 frames rendered; no extra black frames or cut-offs.
