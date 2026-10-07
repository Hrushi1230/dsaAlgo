# Scene 01 · Critical Frame QA Checklist
**Question:** 012 · Next Permutation (LeetCode 31)  
**Scene:** `01-intro-roadmap`  
**Audio:** `audio/01-intro-roadmap.mp3` (25.560s, 767 frames @ 30fps)  
**Anchor Source:** `sync/01-intro-roadmap.anchors.json`  

---

## 1. Frame-Specific Visual Checkpoints

Use this checklist during Antigravity rendering and QA review. Every listed frame must match the expected visual state exactly:

| Checkpoint ID | Anchor | Exact Review Frame | Spoken Narration Anchor | Expected Visual & Semantic State | Status |
|---|---|---|---|---|---|
| **QA-01** | `S01_WELCOME` | **Frame 0** | Start of scene | Exact Q11 Scene 10 final roadmap state: `11 / 227 COMPLETE`, Pattern 01 `ACTIVE`, Q011 `COMPLETE` (green checkmark ✓), Q012 `UP NEXT` (gold ▶), right rail thumb resting at `012`. Zero flickers. | `[x] PASS` |
| **QA-02** | `S01_WELCOME` | **Frame 50** | "Code with Animation." | Full roadmap shell gently breathing/settled at scale 1.000; ambient chalk dust visible; captions displaying. | `[x] PASS` |
| **QA-03** | `S01_ROADMAP` | **Frame 142** | "DSA pattern roadmap." | Top header `DSA PATTERN ROADMAP` bright white with rough chalk underline (`RoughLine`) 100% drawn underneath. | `[x] PASS` |
| **QA-04** | `S01_ROADMAP` | **Frame 185** | (Pause P02 hold) | Extended hold during 980ms silence; full roadmap identity clear; no premature row mutations. | `[x] PASS` |
| **QA-05** | `S01_Q11` | **Frame 215** | "Question 11," | Camera eases into Row Q011 (camScale: 1.03, camY: -40); peripheral rows dimmed to 0.55; Row Q011 spotlight active. | `[x] PASS` |
| **QA-06** | `S01_SORT_COLORS` | **Frame 260** | "sort colors," | Title `Sort Colors` bright chalk text with amber sheen inside Row Q011. | `[x] PASS` |
| **QA-07** | `S01_Q11_COMPLETE` | **Frame 292** | "complete." | Existing checkmark (`✓`) confirms with celebratory green chalk pulse; **global counter remains strictly 11/227**. | `[x] PASS` |
| **QA-08** | `S01_NEXT_PROBLEM` | **Frame 375** | "next problem." | Camera vertical pan down 74px completes (camScale: 1.05, camY: -114); centered on Row Q012. | `[x] PASS` |
| **QA-09** | `S01_NEXT_PROBLEM` | **Frame 395** | (Pause P06 hold) | **CRITICAL ANTICIPATION HOLD**: Row Q012 is centered and spotlighted, but **STILL tagged as `UP NEXT` [▶]**! | `[x] PASS` |
| **QA-10** | `S01_Q12` | **Frame 432** | "12," | **CANONICAL ACTIVATION**: Row Q012 badge pops into solid `NOW ACTIVE` [●]; border turns active cyan/emerald; counter stays `11 / 227`. | `[x] PASS` |
| **QA-11** | `S01_NEXT_PERMUTATION` | **Frame 496** | "permutation," | Title `Next Permutation` hero text with rough chalk underline completely drawn underneath. | `[x] PASS` |
| **QA-12** | `S01_LC31` | **Frame 545** | "31," | `LC 31` metadata badge enclosed in crisp chalk `RoughBox` outline. Captions show normalized `LeetCode 31,`. | `[x] PASS` |
| **QA-13** | `S01_MEDIUM` | **Frame 586** | "medium." | `MEDIUM` badge illuminated in warm amber sheen (`#F59E0B`). Complete Row Q012 is fully confirmed. | `[x] PASS` |
| **QA-14** | `S01_ARRAYS_HASHING` | **Frame 655** | "arrays and hashing." | Camera smoothly zooms back out to 1.000 (camY: 0); Pattern 01 section header & sidebar badge illuminated. | `[x] PASS` |
| **QA-15** | `S01_UNDERSTAND` | **Frame 725** | "understand" | Representation Handoff: Master Roadmap surroundings (sidebar, progress rail, inactive rows) fading out (`opacity: 1 -> 0`). | `[x] PASS` |
| **QA-16** | `S01_UNDERSTAND` | **Frame 766** | "first." (Final Frame) | **CANONICAL HANDOFF SETTLED**: Roadmap gone; `ProblemOpenerShell` header locked at top; center stage (Y: 220–760) completely empty for Scene 02. | `[x] PASS` |

---

## 2. Invariant & Anti-Regression Verification

- [x] **Frame 0 Provenance:** Frame 0 visually matches the final settled frame of Q11 Scene 10 (`11 / 227 COMPLETE`, Q011 COMPLETE, Q012 UP NEXT, rail thumb at 012).
- [x] **Counter Invariance:** `11 / 227 COMPLETE` never advances to 12 in this scene (Q012 is NOT yet solved).
- [x] **Pattern Local Counter:** Pattern 01 reads `11 / 18 COMPLETED` throughout.
- [x] **Progress Rail Fixed Thumb:** Active indicator thumb on right rail remains at `012` throughout; it does NOT animate 011 → 012 again.
- [x] **Delayed Activation:** Row Q012 remains strictly `UP NEXT` until Frame 409 ("Question twelve"); zero premature activations.
- [x] **No Spoiler Array:** The master testcase array `[2, 1, 5, 4, 4, 3, 0]` does NOT appear anywhere in Scene 01.
- [x] **No Solution Hints:** No pivot pointers, no successor pointers, and no reversal brackets appear.
- [x] **No Generic SaaS UI:** No dashboard cards, modal dialogs, or foreign layout grids.
- [x] **Single Sync Authority:** Animation timings, semantic anchors, and captions all consume `sync/01-intro-roadmap.json`.
- [x] **Duration Exactness:** Exactly 767 frames rendered; no extra black frames or cut-offs.
