# Scene 02 · Critical Frame QA Checklist
**Question:** 013 · Set Matrix Zeroes (LeetCode 73)  
**Scene:** `02-understand`  
**Audio:** `audio/scence-02.mp3` / `audio/013/02-understand.mp3` (76.280s, 2288 frames @ 30fps)  
**Anchor Source:** `sync/02-understand.anchors.json`  

---

## 1. Frame-Specific Visual Checkpoints

Use this checklist during Antigravity rendering and QA review. Every listed frame has been verified against the rendered stills:

| Checkpoint ID | Anchor | Exact Review Frame | Spoken Narration Anchor | Expected Visual & Semantic State | Status |
|---|---|---|---|---|---|
| **QA-01** | `S02_MATRIX` | **Frame 25** | "given a matrix" | Single empty 5×5 grid shell entrance settle; quiet grid lines, no numbers yet. Centered at X: 754, Y: 240. | `[x] PASS` |
| **QA-02** | `S02_RULE0` | **Frame 100** | "contains zero" | One symbolic zero in sample cell (1,2) receives amber pivot focus; rule illustration starts. | `[x] PASS` |
| **QA-03** | `S02_RULEC` | **Frame 200** | "and its complete column" | Symbolic row and column crosshairs beam sweep in cyan (#5CE1E6) across Row 1 and Col 2. | `[x] PASS` |
| **QA-04** | `S02_MASTER` | **Frame 360** | "use this matrix" | Real 5×5 master input matrix populated on chalkboard: `[[1,2,0,4,5], [6,7,8,9,10], [0,12,13,14,15], [16,17,18,0,20], [21,22,23,24,25]]`. | `[x] PASS` |
| **QA-05** | `S02_INDEX` | **Frame 460** | "zero-based row and column indices" | Coordinate rulers `[0..4]` at top (columns) and left (rows) completely drawn in clean cyan chalk monospace. | `[x] PASS` |
| **QA-06** | `S02_FIRSTROW` | **Frame 630** | "One is in the first row" | Original zero at `(0,2)` highlighted with gold glow; side card identifies `📍 Zero 1: Cell (0, 2)`. | `[x] PASS` |
| **QA-07** | `S02_FIRSTCOL` | **Frame 690** | "one is in the first column" | Original zero at `(2,0)` highlighted with gold glow; side card identifies `📍 Zero 2: Cell (2, 0)`. | `[x] PASS` |
| **QA-08** | `S02_INTERIOR` | **Frame 750** | "and one is inside" | Original zero at `(3,3)` highlighted with gold glow; all 3 original zeros marked with subtle amber dots. | `[x] PASS` |
| **QA-09** | `S02_IMMEDIATE` | **Frame 1000** | "why not immediately make..." | Naive in-place write demonstration: Row 0 and Col 2 turn to coral red zero (0) immediately. | `[x] PASS` |
| **QA-10** | `S02_PROBLEM_IS` | **Frame 1100** | "The problem is" | Warning banner `⚠️ IN-PLACE MUTATION DANGER: Writes Create New Zeros!` appears at Y: 132. | `[x] PASS` |
| **QA-11** | `S02_CREATED` | **Frame 1170** | "those writes create new zeros" | Cell `(1,2)` highlighted with dashed red border; side card explains: was 8, now mutated to 0 (synthetic zero). | `[x] PASS` |
| **QA-12** | `S02_MISTAKE` | **Frame 1360** | "treat it like an original zero" | Scanner hits cell `(1,2)` and turns red; side card flags `❌ MISCLASSIFIED AS SOURCE!`. | `[x] PASS` |
| **QA-13** | `S02_ANOTHER_ROW` | **Frame 1460** | "Then we zero another row" | False cascade 1: Row 1 erroneously wiped to zero! Valid numbers 6, 7, 9, 10 destroyed. | `[x] PASS` |
| **QA-14** | `S02_NEVER` | **Frame 1580** | "never supposed to change" | Innocent destroyed values (7, 10, 25) marked with red dashed borders & strikethroughs; `💥 WRONG ANSWER PROVEN!`. | `[x] PASS` |
| **QA-15** | `S02_NEED_RULE` | **Frame 1680** | "need one important rule" | Erase wipe: matrix cleanly restored to untouched master input state; false cascade cleared. | `[x] PASS` |
| **QA-16** | `S02_RULE` | **Frame 1800** | "must never become new sources" | Chalk rule banner below grid: `⭐ CORE INVARIANT: Created Zeros (Mutations) ≠ Original Zeros (Sources)`. | `[x] PASS` |
| **QA-17** | `S02_BEFORE` | **Frame 2150** | "before our mutations can destroy it" | Cyan protective shield around matrix: `🔒 LOCKED: ORIGINAL SOURCE STATE PRESERVED`. | `[x] PASS` |
| **QA-18** | `S02_SAFEST` | **Frame 2260** | "safest possible method" | Method 1 teaser pill docked cleanly below Core Invariant: `➡️ UP NEXT: METHOD 1 — FULL ORIGINAL COPY · O(M × N) Space`. | `[x] PASS` |

---

## 2. Invariant & Anti-Regression Verification

- [x] **Exact Master Matrix:** Matrix contains exactly `[[1,2,0,4,5], [6,7,8,9,10], [0,12,13,14,15], [16,17,18,0,20], [21,22,23,24,25]]` during master reveal.
- [x] **Fixed Geometry:** Grid cells do not move, resize or rearrange across the entire scene; only values, highlights, and borders mutate.
- [x] **Zero-Collision Clearance:** Top header clearance >= 40px; coordinate ticks have >= 20px clearance; bottom banners have >= 50px clearance from grid and >= 140px clearance from bottom captions.
- [x] **Concrete Naive Cascade:** Demonstrates the exact failure where `(0,2)` zeroes column 2 -> cell `(1,2)` turns to 0 -> scanner visits `(1,2)` -> wipes Row 1 -> destroys legitimate non-zeros 7 & 10, then cascades into Col 4 destroying 25.
- [x] **Clean Wipe Restoration:** Matrix fully restores to pristine original master before Core Invariant teaching.
- [x] **No Method 1/2/3 Spoilers:** No copy matrix grid, marker arrays, or state variables appear in Scene 02.
- [x] **Deterministic Animation:** All motion uses Remotion's `interpolate`, `spring`, and `useCurrentFrame()`. Zero CSS `@keyframes` or `Math.random()`.
- [x] **Caption Punctuation & Sync:** Audio subtitles consume `sync/02-understand.json` word timestamps cleanly.
- [x] **Duration Exactness:** Exactly 2288 frames rendered @ 30fps.
