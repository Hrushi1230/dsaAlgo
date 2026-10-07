# Scene 02 · Critical Frame QA Checklist
**Question:** 012 · Next Permutation (LeetCode 31)  
**Scene:** `02-understand`  
**Audio:** `remotion-project/public/audio/012/02-understand.mp3` (69.180s, 2,075 frames @ 30fps)  
**Anchor Source:** `sync/02-understand.anchors.json`  

---

## 1. Frame-Specific Visual Checkpoints

Use this checklist during Antigravity rendering and QA review. Every listed frame must match the expected visual state exactly:

| Checkpoint ID | Anchor | Review Frame | Spoken Narration Anchor | Expected Visual & Semantic State | Status |
|---|---|---|---|---|---|
| **QA-01** | `S02_NUMBERS` | **Frame 0** | Start of scene | ProblemOpenerShell header pinned at top; center stage clean and empty. Exact continuity from Scene 01 F766. | `[x] PASS` |
| **QA-02** | `S02_NUMBERS` | **Frame 40** | "some numbers" | 4 neutral position markers `[ · ] [ · ] [ · ] [ · ]` visible at center stage. No concrete numbers yet. | `[x] PASS` |
| **QA-03** | `S02_DIFFERENT_ORDERS` | **Frame 120** | "different possible orders" | Reordering demonstration: tokens rearrange conceptually showing permutations of same items. | `[x] PASS` |
| **QA-04** | `S02_PERMUTATION` | **Frame 265** | "called a permutation." | Formal definition banner `EACH DIFFERENT ORDER ──► PERMUTATION` with gold underline and cyan glow. | `[x] PASS` |
| **QA-05** | `S02_LEX_ORDER` | **Frame 480** | "lexicographical order." | Horizontal ordering axis draws: `SMALLER (A..Z) ────────► LARGER`. | `[x] PASS` |
| **QA-06** | `S02_NOT_ANY_BIGGER` | **Frame 600** | "not to find any bigger" | Far-right jump struck with red warning chalk `✖` ("NOT JUST ANY BIGGER ARRANGEMENT"). | `[x] PASS` |
| **QA-07** | `S02_VERY_NEXT` | **Frame 690** | "the very next one," | Focus collapses to adjacent step: `CURRENT ──► NEXT` (immediate successor, +1 step). | `[x] PASS` |
| **QA-08** | `S02_SMALLEST_GREATER` | **Frame 780** | "still greater than the current" | Formula card: `NEXT = min { P \| P > CURRENT }` completely assembled in word lockstep. | `[x] PASS` |
| **QA-09** | `S02_MASTER_INTRO` | **Frame 920** | "our master array is" | Empty 7-slot ArrayTrackV2 materializes with index row `0 1 2 3 4 5 6`. All slots empty. | `[x] PASS` |
| **QA-10** | `S02_M0` | **Frame 970** | "2," | Value `2` drops into slot 0. Slots 1..6 remain blank. | `[x] PASS` |
| **QA-11** | `S02_M1` | **Frame 1000** | "1," | Value `1` drops into slot 1. Slots 2..6 blank. | `[x] PASS` |
| **QA-12** | `S02_M2` | **Frame 1030** | "5," | Value `5` drops into slot 2. Slots 3..6 blank. | `[x] PASS` |
| **QA-13** | `S02_M3` | **Frame 1060** | "4," (first token) | First value `4` drops into slot 3. Slot 4 is STILL empty. | `[x] PASS` |
| **QA-14** | `S02_M4` | **Frame 1090** | "4," (second token) | Second value `4` drops into slot 4. Adjacent duplicate `[4, 4]` visible. | `[x] PASS` |
| **QA-15** | `S02_M5` | **Frame 1130** | "3," | Value `3` drops into slot 5. Slot 6 is STILL empty. | `[x] PASS` |
| **QA-16** | `S02_M6` | **Frame 1160** | "0." | Final value `0` drops into slot 6. Master array `[2, 1, 5, 4, 4, 3, 0]` is 100% complete! | `[x] PASS` |
| **QA-17** | `S02_TRANSFORM_SAME` | **Frame 1220** | "this same array" | Enclosing boundary wraps around track: `THIS SAME ARRAY · MUTATE IN PLACE`. | `[x] PASS` |
| **QA-18** | `S02_NEXT_PERM` | **Frame 1290** | "into its next permutation." | Arrow points to destination placeholder `NEXT [ ? ]`. Final answer hidden. | `[x] PASS` |
| **QA-19** | `S02_IN_PLACE` | **Frame 1380** | "in place." | Stamp badge: `CONSTRAINT: IN-PLACE MUTATION · O(1) EXTRA MEMORY`. | `[x] PASS` |
| **QA-20** | `S02_NO_GREATER` | **Frame 1475** | "does not exist," | Edge condition banner: `IF NO GREATER PERMUTATION EXISTS (DESCENDING ORDER)`. | `[x] PASS` |
| **QA-21** | `S02_SMALLEST_WRAP` | **Frame 1550** | "smallest possible arrangement." | Sweeping circular wraparound loop arrow: `LAST ──► SMALLEST POSSIBLE (ASCENDING)`. | `[x] PASS` |
| **QA-22** | `S02_REAL_QUESTION` | **Frame 1670** | "So the real question is," | Camera pushes in on master array; spotlight glows; `THE REAL QUESTION` badge. | `[x] PASS` |
| **QA-23** | `S02_WITHOUT_ALL` | **Frame 1860** | "generating every permutation?" | Factorial explosion warning `GENERATE ALL 7! = 5,040 PERMUTATIONS?` struck with red `✖`. | `[x] PASS` |
| **QA-24** | `S02_OBVIOUS` | **Frame 2065** | "the obvious approach." | Method card `APPROACH 1 · BRUTE FORCE` active; master array cleared; stage ready for Scene 03. | `[x] PASS` |

---

## 2. Invariant & Anti-Regression Verification

- [x] **Frame 0 Provenance:** Frame 0 visually matches the final settled frame of Scene 01 (ProblemOpenerShell pinned at top, center stage clean).
- [x] **Sequential Value Reveal:** Array values `[2, 1, 5, 4, 4, 3, 0]` reveal one by one on exact spoken cues. Zero premature values.
- [x] **Ordered Duplicate Disambiguation:** Word `W0068` populates slot 3; word `W0069` populates slot 4. Disambiguated by sequential token ID, never string search.
- [x] **Array V2 Law:** Slots remain fixed in position; values enter into slots; index row `0..6` never shifts or animates horizontally.
- [x] **No Solution Spoilers:** No pivot detection, no successor search, no suffix reversal, and no final answer array shown in Scene 02.
- [x] **No Invention of Concrete Edge Array:** Edge condition taught conceptually without inventing an unscripted `[3, 2, 1]` array.
- [x] **Zero-Collision Rule:** Array track top margin >= 44px; bottom clearance to callout boxes >= 50px; indices row untouched.
- [x] **Single Sync Authority:** Animation timings and captions consume `sync/02-understand.json`.
- [x] **Duration Exactness:** Exactly 2,075 frames rendered (matching 69,180 ms @ 30 FPS).
