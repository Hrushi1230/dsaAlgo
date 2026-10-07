# Q13 — Set Matrix Zeroes (LC 73)
# Scene 03 · Method 1 Trace: Full Original Copy
## EXACT AUDIO-SYNCHRONIZED FRAME-WISE PLAN (V2 REAUDITED)

> **Execution Standard:**
> - Strictly deterministic (frame-derived Remotion animation).
> - Course Oxford Chalkboard Green background (`#19523C`), warm antique chalk typography.
> - Kit-driven Matrix/Grid primitives with fixed cell positions.
> - Dual Matrix Spatial Composition: Source Copy (Left) + Working Matrix (Right).
> - Zero collision: Minimum 40px clearance from headers, 140px clearance above captions (Y: 980).

**Audio Duration:** 111.900s (111900 ms)  
**Scene Duration Frames:** 3357 frames  
**FPS:** 30  
**Sync Source Filename:** `sync/03-copy-trace.json`  
**Anchor Count:** 37 / 37  
**Unmatched Anchors:** 0  

---

## 1. Scene Invariant Contract

```text
CANONICAL MASTER TESTCASE:
Input Grid:
[
  [1,  2,  0,  4,  5],
  [6,  7,  8,  9, 10],
  [0, 12, 13, 14, 15],
  [16, 17, 18, 0, 20],
  [21, 22, 23, 24, 25]
]

Original Zeros (Authentic Sources):
- Zero 1: (0, 2)
- Zero 2: (2, 0)
- Zero 3: (3, 3)

FINAL EXPECTED OUTPUT MATRIX:
[
  [0,  0,  0,  0,  0],
  [0,  7,  0,  0, 10],
  [0,  0,  0,  0,  0],
  [0,  0,  0,  0,  0],
  [0, 22,  0,  0, 25]
]

ALGORITHMIC TRUTH CONTRACT:
1. SOURCE COPY is 100% immutable (read-only). Values never change throughout the entire scene.
2. WORKING MATRIX is the only matrix that receives zeroing writes.
3. Every zeroing operation is triggered exclusively by an authentic source zero discovered in the SOURCE COPY.
4. Newly mutated zeros inside WORKING MATRIX never become sources of zeroing.
5. Preserved innocent values: 7, 10, 22, 25 survive untouched.
```

---

## 2. Spatial Composition & Zero-Collision Layout

| Layer / Element | Canvas Coordinates | Dimensions | Clearance / Invariants |
|---|---|---|---|
| **Top Problem Header Bar** | $X: 80\text{px} .. 1840\text{px}$, $Y: 36\text{px} .. 100\text{px}$ | Height: $64\text{px}$ | LeetCode 73 / MEDIUM / Set Matrix Zeroes. Continues course branding. |
| **Method 1 Header Pill** | $X: 710\text{px} .. 1210\text{px}$, $Y: 115\text{px} .. 155\text{px}$ | Width: $500\text{px}$, Height: $40\text{px}$ | `METHOD 1: FULL ORIGINAL COPY (O(M×N) SPACE)`. |
| **Source Copy Matrix (Left)** | $X: 380\text{px} .. 694\text{px}$, $Y: 220\text{px} .. 534\text{px}$ | $314\text{px} \times 314\text{px}$ (5 cells × 58px + 4 gaps × 6px) | Header at $Y: 180$: `SOURCE OF TRUTH (READ-ONLY)`. Cyan border. |
| **Working Matrix (Right)** | $X: 1226\text{px} .. 1540\text{px}$, $Y: 220\text{px} .. 534\text{px}$ | $314\text{px} \times 314\text{px}$ (5 cells × 58px + 4 gaps × 6px) | Header at $Y: 180$: `WORKING MATRIX (MUTABLE)`. Gold/Mint border. |
| **Center Projection Bridge** | $X: 730\text{px} .. 1190\text{px}$, $Y: 250\text{px} .. 500\text{px}$ | Width: $460\text{px}$ | Projects dynamic animated arrow from active source zero to target row/col in working matrix. |
| **Operation Trace Card** | $X: 560\text{px} .. 1360\text{px}$, $Y: 580\text{px} .. 660\text{px}$ | Width: $800\text{px}$, Height: $80\text{px}$ | Displays active algorithmic step: `SOURCE (r, c) -> ZERO ROW r & COL c`. |
| **Memory Cost Callout** | $X: 610\text{px} .. 1310\text{px}$, $Y: 710\text{px} .. 780\text{px}$ | Width: $700\text{px}$, Height: $70\text{px}$ | `O(M × N) SPACE COST: 25 Extra Integers Stored`. $> 180\text{px}$ above captions. |
| **Bottom Captions** | $X: 210\text{px} .. 1710\text{px}$, $Y: 960\text{px} .. 1040\text{px}$ | Centered at $Y: 980\text{px}$ | $> 180\text{px}$ vertical breathing room from all UI cards. ZERO COLLISION. |

---

## 3. Anchor Summary Table

| Anchor ID | Spoken Phrase | Word ID Span | Frame Range `[start, endExcl)` | Total Frames | Available Pause | Teaching Purpose |
|---|---|---|---|---|---|---|
| `S03_SAFE` | "The safest idea is," | W0000..W0003 | `[0, 62)` | 62 F | 6 F (F62..F68) | Master matrix opens center stage |
| `S03_COPY` | "keep one untouched copy of the original matrix." | W0004..W0011 | `[68, 172)` | 104 F | 22 F (F172..F194) | Master splits into Source Copy (Left) and Working Matrix (Right) |
| `S03_TRUTH` | "Think of it as our source of truth." | W0012..W0019 | `[194, 276)` | 82 F | 18 F (F276..F294) | Left matrix receives 'SOURCE OF TRUTH (READ-ONLY)' title |
| `S03_READ` | "We read zero information only from this original copy," | W0020..W0028 | `[294, 379)` | 85 F | 11 F (F379..F390) | Blue 'READ ONLY' lens illuminates Source Copy |
| `S03_WRITE` | "and we write changes only into the working matrix." | W0029..W0037 | `[390, 484)` | 94 F | 16 F (F484..F500) | Green 'WRITE ONLY' lens illuminates Working Matrix |
| `S03_TRACE` | "Now trace it." | W0038..W0040 | `[500, 529)` | 29 F | 19 F (F529..F548) | Traversal begins; attention locks on Source Copy |
| `S03_Z1` | "In the original copy, our first zero is at row zero, column two." | W0041..W0053 | `[548, 692)` | 144 F | 0 F | Scanner targets (0, 2) in Source Copy |
| `S03_ORIGINAL` | "because this zero belongs to the original input." | W0054..W0061 | `[692, 782)` | 90 F | 31 F (F782..F813) | Source (0, 2) confirmed authentic source |
| `S03_ROW0` | "Zero, row zero in the working matrix," | W0062..W0068 | `[813, 901)` | 88 F | 20 F (F901..F921) | Row 0 of Working Matrix mutates to 0 |
| `S03_COL2` | "then zero, column two." | W0069..W0072 | `[921, 963)` | 42 F | 25 F (F963..F988) | Col 2 of Working Matrix mutates to 0 |
| `S03_WORKING_CHANGES` | "The working matrix changes," | W0073..W0076 | `[988, 1035)` | 47 F | 13 F (F1035..F1048) | Working Matrix shows mutated Row 0 & Col 2 |
| `S03_SOURCE_NOT` | "but the source copy does not." | W0077..W0082 | `[1048, 1102)` | 54 F | 12 F (F1102..F1114) | Source Copy highlighted: values completely untouched |
| `S03_CONTINUE` | "Continue through the original copy." | W0083..W0087 | `[1114, 1166)` | 52 F | 21 F (F1166..F1187) | Scanner advances across row 1 of Source Copy |
| `S03_Z2` | "The next original zero is at row two, column zero." | W0088..W0097 | `[1187, 1295)` | 108 F | 12 F (F1295..F1307) | Scanner targets (2, 0) in Source Copy |
| `S03_ROW2` | "So zero, row two in the working matrix," | W0098..W0105 | `[1307, 1383)` | 76 F | 7 F (F1383..F1390) | Row 2 of Working Matrix mutates to 0 |
| `S03_COL0` | "and zero, column zero." | W0106..W0109 | `[1390, 1442)` | 52 F | 12 F (F1442..F1454) | Col 0 of Working Matrix mutates to 0 |
| `S03_AGAIN` | "Again," | W0110..W0110 | `[1454, 1471)` | 17 F | 39 F (F1471..F1510) | Contrast hold between Source and Working |
| `S03_SOURCE_UNTOUCHED` | "the source copy stays untouched." | W0111..W0115 | `[1510, 1568)` | 58 F | 11 F (F1568..F1579) | Source Copy confirmed 100% immutable |
| `S03_Z3` | "Then we reach the original zero at row three, column three." | W0116..W0126 | `[1579, 1690)` | 111 F | 17 F (F1690..F1707) | Scanner targets (3, 3) in Source Copy |
| `S03_ROW3` | "Zero, row three," | W0127..W0129 | `[1707, 1736)` | 29 F | 11 F (F1736..F1747) | Row 3 of Working Matrix mutates to 0 |
| `S03_COL3` | "and zero, column three" | W0130..W0133 | `[1747, 1792)` | 45 F | 0 F | Col 3 of Working Matrix mutates to 0 |
| `S03_WORKING` | "in the working matrix." | W0134..W0137 | `[1792, 1857)` | 65 F | 20 F (F1857..F1877) | Third zero mutation complete in Working Matrix |
| `S03_ALL3` | "Now all three original zero sources have been processed." | W0138..W0146 | `[1877, 1987)` | 110 F | 15 F (F1987..F2002) | All 3 sources marked complete with green checkmarks |
| `S03_NEVER` | "Notice what we never did." | W0147..W0151 | `[2002, 2045)` | 43 F | 13 F (F2045..F2058) | Curiosity pause on algorithmic correctness |
| `S03_CREATED` | "We never used a zero created inside the working matrix as a new source." | W0152..W0162 | `[2058, 2211)` | 153 F | 29 F (F2211..F2240) | Working mutated zeros highlighted as SAFE (never triggered) |
| `S03_EVERY` | "Every zeroing decision came from the untouched original copy." | W0163..W0171 | `[2240, 2350)` | 110 F | 19 F (F2350..F2369) | Beam arrow highlights flow from Source Copy to Working |
| `S03_NOCHAIN` | "So newly created zeros cannot create a false chain reaction." | W0172..W0181 | `[2369, 2495)` | 126 F | 21 F (F2495..F2516) | Confirmation banner: 'NO FALSE CHAIN REACTION' |
| `S03_RESULT` | "After all three original zeros are processed, the result becomes" | W0182..W0191 | `[2516, 2645)` | 129 F | 0 F | Transition into row-by-row result recitation |
| `S03_R0` | "zero zero zero zero zero" (Row 0) | W0192..W0192 | `[2645, 2710)` | 65 F | 0 F | Row 0 highlighted: [0, 0, 0, 0, 0] |
| `S03_R1` | "zero seven zero zero ten" (Row 1) | W0193..W0194 | `[2710, 2792)` | 82 F | 0 F | Row 1 highlighted: [0, 7, 0, 0, 10] (7 & 10 safe!) |
| `S03_R2` | "zero zero zero zero zero" (Row 2) | W0195..W0195 | `[2792, 2860)` | 68 F | 0 F | Row 2 highlighted: [0, 0, 0, 0, 0] |
| `S03_R3` | "zero zero zero zero zero" (Row 3) | W0196..W0196 | `[2860, 2939)` | 79 F | 0 F | Row 3 highlighted: [0, 0, 0, 0, 0] |
| `S03_R4` | "zero twenty-two zero zero twenty-five." (Row 4) | W0197..W0198 | `[2939, 3077)` | 138 F | 27 F (F3077..F3104) | Row 4 highlighted: [0, 22, 0, 0, 25] (22 & 25 safe!) |
| `S03_WORKS` | "So method one works," | W0199..W0202 | `[3104, 3138)` | 34 F | 12 F (F3138..F3150) | Success banner: 'METHOD 1: CORRECT RESULT' |
| `S03_SAFETY` | "but we paid for that safety" | W0203..W0208 | `[3150, 3197)` | 47 F | 0 F | Cost transition |
| `S03_STORE` | "by storing the whole matrix again." | W0209..W0214 | `[3197, 3285)` | 88 F | 0 F | Memory callout: 'SPACE COMPLEXITY: O(M × N)' |
| `S03_CODE` | "Let's write the idea in code." | W0215..W0220 | `[3285, 3357)` | 72 F | 0 F | Handoff to Scene 04: Python Implementation |

---

## 4. Framewise Anchor Choreography (All 37 Anchors)

### Beat 01 · Initial Hold: "The safest idea is"
- **FRAME RANGE:** `[0, 68)` (`[0, 62)` spoken, `[62, 68)` 6F pause)
- **ANCHOR:** `S03_SAFE`
- **WHAT APPEARS NOW:** Master 5×5 matrix rests center stage ($X: 754, Y: 240$) with untouched numbers.
- **CENTER-STAGE HERO:** Master matrix.
- **CAUSE:** Narration introduces Method 1.
- **EFFECT / MOTION:** Matrix enters settled; Method 1 header pill fades in at $Y: 115$.
- **WHAT MUST NOT APPEAR YET:** Dual side-by-side matrices (waits for Beat 02).
- **COMPREHENSION HOLD:** `F62..F67` (6 frames).
- **CLEANUP / EXIT:** Prepares for cloning animation.
- **PERSISTENT STATE:** Master matrix.

### Beat 02 · Cloning: "keep one untouched copy of the original matrix."
- **FRAME RANGE:** `[68, 194)` (`[68, 172)` spoken, `[172, 194)` 22F pause)
- **ANCHOR:** `S03_COPY`
- **WHAT APPEARS NOW:** Master matrix splits smoothly into two matrices side by side:
  - Left Matrix: `SOURCE COPY` glides to $X: 380, Y: 220$
  - Right Matrix: `WORKING MATRIX` glides to $X: 1226, Y: 220$
- **CENTER-STAGE HERO:** Semantic cloning animation.
- **CAUSE:** Explicit narration mandate to duplicate the matrix.
- **EFFECT / MOTION:** Smooth spring interpolation (`F68..F115`) moving left from 754 to 380, and right from 754 to 1226.
- **WHAT MUST NOT APPEAR YET:** Mutations to either matrix.
- **COMPREHENSION HOLD:** `F172..F193` (22 frames, 730ms pause).
- **CLEANUP / EXIT:** Dual matrices locked in position.
- **PERSISTENT STATE:** Dual matrices (Source Copy & Working Matrix).

### Beat 03 · Source of Truth: "Think of it as our source of truth."
- **FRAME RANGE:** `[194, 294)` (`[194, 276)` spoken, `[276, 294)` 18F pause)
- **ANCHOR:** `S03_TRUTH`
- **WHAT APPEARS NOW:** Header above left matrix lights up: `SOURCE OF TRUTH (READ ONLY)` in cyan.
- **CENTER-STAGE HERO:** Source Copy.
- **CAUSE:** Establishing the authoritative reference contract.
- **EFFECT / MOTION:** Cyan border glow on Source Copy.
- **WHAT MUST NOT APPEAR YET:** Scanner movement.
- **COMPREHENSION HOLD:** `F276..F293` (18 frames).
- **CLEANUP / EXIT:** Header stays pinned.
- **PERSISTENT STATE:** Source Copy marked as truth source.

### Beat 04 · Read Contract: "We read zero information only from this original copy,"
- **FRAME RANGE:** `[294, 390)` (`[294, 379)` spoken, `[379, 390)` 11F pause)
- **ANCHOR:** `S03_READ`
- **WHAT APPEARS NOW:** A pulsing cyan eye icon / `READ ONLY` badge appears over Source Copy.
- **CENTER-STAGE HERO:** Source Copy read permission.
- **CAUSE:** Narration defines read-only role.
- **EFFECT / MOTION:** Subtle lens wash across Source Copy.
- **WHAT MUST NOT APPEAR YET:** Working matrix changes.
- **COMPREHENSION HOLD:** `F379..F389` (11 frames).
- **CLEANUP / EXIT:** Retains read lens.
- **PERSISTENT STATE:** Source Copy = Read.

### Beat 05 · Write Contract: "and we write changes only into the working matrix."
- **FRAME RANGE:** `[390, 500)` (`[390, 484)` spoken, `[484, 500)` 16F pause)
- **ANCHOR:** `S03_WRITE`
- **WHAT APPEARS NOW:** Header above right matrix lights up: `WORKING MATRIX (MUTABLE)` with pencil icon / `WRITE ONLY` badge in gold.
- **CENTER-STAGE HERO:** Working Matrix write role.
- **CAUSE:** Narration defines mutation role.
- **EFFECT / MOTION:** Gold border glow on Working Matrix.
- **WHAT MUST NOT APPEAR YET:** Zeroing execution.
- **COMPREHENSION HOLD:** `F484..F499` (16 frames).
- **CLEANUP / EXIT:** Both matrix roles established.
- **PERSISTENT STATE:** Roles locked: Left = Source Read, Right = Working Write.

### Beat 06 · Trace Transition: "Now trace it."
- **FRAME RANGE:** `[500, 548)` (`[500, 529)` spoken, `[529, 548)` 19F pause)
- **ANCHOR:** `S03_TRACE`
- **WHAT APPEARS NOW:** Scanner reticle appears over the top-left of Source Copy.
- **CENTER-STAGE HERO:** Scanner cursor ready to scan Source Copy.
- **CAUSE:** Algorithmic walkthrough commences.
- **EFFECT / MOTION:** Scanner reticle enters at Source Copy cell `(0, 0)`.
- **WHAT MUST NOT APPEAR YET:** Zeroing action.
- **COMPREHENSION HOLD:** `F529..F547` (19 frames).
- **CLEANUP / EXIT:** Scanner ready to advance.
- **PERSISTENT STATE:** Traversal active.

### Beat 07 · Zero 1 Encounter: "In the original copy, our first zero is at row zero, column two."
- **FRAME RANGE:** `[548, 692)` (`[548, 692)` spoken, 0F pause)
- **ANCHOR:** `S03_Z1`
- **WHAT APPEARS NOW:** Scanner moves to `(0, 2)` in Source Copy. Cell `(0, 2)` glows brightly in Sunburst Gold (`#FFD166`). Operation card updates: `SOURCE ZERO FOUND: (0, 2)`.
- **CENTER-STAGE HERO:** Source Copy cell `(0, 2)`.
- **CAUSE:** First original zero encountered during row-major scan.
- **EFFECT / MOTION:** Scanner reticle snaps to `(0, 2)` with attention spring (`F548..F580`).
- **WHAT MUST NOT APPEAR YET:** Working matrix zeroing.
- **COMPREHENSION HOLD:** 0F (flows into Beat 08).
- **CLEANUP / EXIT:** Holds focus on `(0, 2)`.
- **PERSISTENT STATE:** Source `(0, 2)` identified.

### Beat 08 · Authenticity Confirmed: "because this zero belongs to the original input."
- **FRAME RANGE:** `[692, 813)` (`[692, 782)` spoken, `[782, 813)` 31F pause)
- **ANCHOR:** `S03_ORIGINAL`
- **WHAT APPEARS NOW:** Green verified checkmark badge appears over `(0, 2)`: `AUTHENTIC SOURCE ZERO`.
- **CENTER-STAGE HERO:** Authenticity verification of `(0, 2)`.
- **CAUSE:** Distinguishing authentic source from synthetic mutation.
- **EFFECT / MOTION:** Gold projection arrow begins drawing from Source `(0, 2)` toward Working Matrix.
- **WHAT MUST NOT APPEAR YET:** Working row/col write.
- **COMPREHENSION HOLD:** `F782..F812` (31 frames, 1.03s pause).
- **CLEANUP / EXIT:** Projection arrow connects to Working Matrix.
- **PERSISTENT STATE:** Projection line active.

### Beat 09 · Zero Row 0: "Zero, row zero in the working matrix,"
- **FRAME RANGE:** `[813, 921)` (`[813, 901)` spoken, `[901, 921)` 20F pause)
- **ANCHOR:** `S03_ROW0`
- **WHAT APPEARS NOW:** Row 0 of Working Matrix is zeroed out: cells `(0, 0), (0, 1), (0, 3), (0, 4)` mutate to `0` in Seafoam Mint (`#3CE5A7`).
- **CENTER-STAGE HERO:** Working Matrix Row 0 zeroing.
- **CAUSE:** First consequence of source zero `(0, 2)`.
- **EFFECT / MOTION:** Seafoam wipe sweeps across Working Row 0 with subtle chalk dust.
- **WHAT MUST NOT APPEAR YET:** Col 2 zeroing.
- **COMPREHENSION HOLD:** `F901..F920` (20 frames).
- **CLEANUP / EXIT:** Row 0 holds zeroed state.
- **PERSISTENT STATE:** Working Row 0 = 0.

### Beat 10 · Zero Col 2: "then zero, column two."
- **FRAME RANGE:** `[921, 988)` (`[921, 963)` spoken, `[963, 988)` 25F pause)
- **ANCHOR:** `S03_COL2`
- **WHAT APPEARS NOW:** Col 2 of Working Matrix is zeroed out: cells `(1, 2), (2, 2), (3, 2), (4, 2)` mutate to `0` in Seafoam Mint.
- **CENTER-STAGE HERO:** Working Matrix Col 2 zeroing.
- **CAUSE:** Second consequence of source zero `(0, 2)`.
- **EFFECT / MOTION:** Seafoam wipe sweeps down Working Col 2.
- **WHAT MUST NOT APPEAR YET:** Second zero scan.
- **COMPREHENSION HOLD:** `F963..F987` (25 frames).
- **CLEANUP / EXIT:** Working matrix holds Row 0 & Col 2 zeroed.
- **PERSISTENT STATE:** Working Row 0 = 0, Col 2 = 0.

### Beat 11 · Working Mutated: "The working matrix changes,"
- **FRAME RANGE:** `[988, 1048)` (`[988, 1035)` spoken, `[1035, 1048)` 13F pause)
- **ANCHOR:** `S03_WORKING_CHANGES`
- **WHAT APPEARS NOW:** Working Matrix highlights the freshly mutated cells.
- **CENTER-STAGE HERO:** Working Matrix state.
- **CAUSE:** Visual contrast between mutable working copy and immutable source.
- **EFFECT / MOTION:** Pulse highlight on Working Matrix.
- **WHAT MUST NOT APPEAR YET:** Source mutation.
- **COMPREHENSION HOLD:** `F1035..F1047` (13 frames).
- **CLEANUP / EXIT:** Focus shifts to Source Copy.
- **PERSISTENT STATE:** Working matrix holds mutated state.

### Beat 12 · Source Untouched: "but the source copy does not."
- **FRAME RANGE:** `[1048, 1114)` (`[1048, 1102)` spoken, `[1102, 1114)` 12F pause)
- **ANCHOR:** `S03_SOURCE_NOT`
- **WHAT APPEARS NOW:** Source Copy glows in protective cyan. Number `8` at `(1, 2)` is prominently confirmed UNTOUCHED!
- **CENTER-STAGE HERO:** Source Copy cell `(1, 2) = 8`.
- **CAUSE:** Proving that the working mutation did not contaminate the source.
- **EFFECT / MOTION:** Protective green badge over Source `(1, 2)`: `STILL 8 (UNTOUCHED)`.
- **WHAT MUST NOT APPEAR YET:** Scanner moving to Zero 2.
- **COMPREHENSION HOLD:** `F1102..F1113` (12 frames).
- **CLEANUP / EXIT:** Badge fades smoothly.
- **PERSISTENT STATE:** Source Copy proven uncorrupted.

### Beat 13 · Traversal Continues: "Continue through the original copy."
- **FRAME RANGE:** `[1114, 1187)` (`[1114, 1166)` spoken, `[1166, 1187)` 21F pause)
- **ANCHOR:** `S03_CONTINUE`
- **WHAT APPEARS NOW:** Scanner reticle resumes scanning through Row 1 of Source Copy.
- **CENTER-STAGE HERO:** Scanner traversal in Source Copy.
- **CAUSE:** Progressing through the matrix.
- **EFFECT / MOTION:** Scanner glides through Row 1 cells `(1, 0) -> (1, 4)`.
- **WHAT MUST NOT APPEAR YET:** Zero 2 trigger.
- **COMPREHENSION HOLD:** `F1166..F1186` (21 frames).
- **CLEANUP / EXIT:** Reticle arrives at Row 2.
- **PERSISTENT STATE:** Row 1 scan complete.

### Beat 14 · Zero 2 Encounter: "The next original zero is at row two, column zero."
- **FRAME RANGE:** `[1187, 1307)` (`[1187, 1295)` spoken, `[1295, 1307)` 12F pause)
- **ANCHOR:** `S03_Z2`
- **WHAT APPEARS NOW:** Scanner reticle locks onto `(2, 0)` in Source Copy. Cell `(2, 0)` glows in Sunburst Gold. Operation card updates: `SOURCE ZERO FOUND: (2, 0)`.
- **CENTER-STAGE HERO:** Source Copy cell `(2, 0)`.
- **CAUSE:** Second authentic source zero found.
- **EFFECT / MOTION:** Reticle locks on `(2, 0)` with spring; projection arrow draws to Working Matrix.
- **WHAT MUST NOT APPEAR YET:** Row 2 write.
- **COMPREHENSION HOLD:** `F1295..F1306` (12 frames).
- **CLEANUP / EXIT:** Projection connects.
- **PERSISTENT STATE:** Source `(2, 0)` active.

### Beat 15 · Zero Row 2: "So zero, row two in the working matrix,"
- **FRAME RANGE:** `[1307, 1390)` (`[1307, 1383)` spoken, `[1383, 1390)` 7F pause)
- **ANCHOR:** `S03_ROW2`
- **WHAT APPEARS NOW:** Row 2 of Working Matrix is zeroed out: cells `(2, 1), (2, 3), (2, 4)` mutate to `0` in Seafoam Mint.
- **CENTER-STAGE HERO:** Working Matrix Row 2 zeroing.
- **CAUSE:** First consequence of source zero `(2, 0)`.
- **EFFECT / MOTION:** Mint wipe across Working Row 2.
- **WHAT MUST NOT APPEAR YET:** Col 0 write.
- **COMPREHENSION HOLD:** `F1383..F1389` (7 frames).
- **CLEANUP / EXIT:** Row 2 zeroes locked.
- **PERSISTENT STATE:** Working Row 2 = 0.

### Beat 16 · Zero Col 0: "and zero, column zero."
- **FRAME RANGE:** `[1390, 1454)` (`[1390, 1442)` spoken, `[1442, 1454)` 12F pause)
- **ANCHOR:** `S03_COL0`
- **WHAT APPEARS NOW:** Col 0 of Working Matrix is zeroed out: cells `(1, 0), (3, 0), (4, 0)` mutate to `0` in Seafoam Mint.
- **CENTER-STAGE HERO:** Working Matrix Col 0 zeroing.
- **CAUSE:** Second consequence of source zero `(2, 0)`.
- **EFFECT / MOTION:** Mint wipe down Working Col 0.
- **WHAT MUST NOT APPEAR YET:** Third zero.
- **COMPREHENSION HOLD:** `F1442..F1453` (12 frames).
- **CLEANUP / EXIT:** Col 0 zeroes locked.
- **PERSISTENT STATE:** Working Col 0 = 0.

### Beat 17 · Contrast Hold: "Again,"
- **FRAME RANGE:** `[1454, 1510)` (`[1454, 1471)` spoken, `[1471, 1510)` 39F pause)
- **ANCHOR:** `S03_AGAIN`
- **WHAT APPEARS NOW:** Side-by-side hold showing Source Copy intact while Working Matrix accumulates correct zeroes.
- **CENTER-STAGE HERO:** Dual matrix side-by-side contrast.
- **CAUSE:** Teacher underscores the structural separation.
- **EFFECT / MOTION:** Gentle ambient glow on both matrix headers.
- **WHAT MUST NOT APPEAR YET:** Third zero.
- **COMPREHENSION HOLD:** `F1471..F1509` (39 frames, 1.3s pause).
- **CLEANUP / EXIT:** Holds comparison.
- **PERSISTENT STATE:** Dual matrices aligned.

### Beat 18 · Source Untouched Re-affirmation: "the source copy stays untouched."
- **FRAME RANGE:** `[1510, 1579)` (`[1510, 1568)` spoken, `[1568, 1579)` 11F pause)
- **ANCHOR:** `S03_SOURCE_UNTOUCHED`
- **WHAT APPEARS NOW:** Source Copy borders pulse in cyan; all 25 numbers in Source Copy remain 100% original.
- **CENTER-STAGE HERO:** Source Copy immutability.
- **CAUSE:** Constant reinforcement of the Core Invariant.
- **EFFECT / MOTION:** Cyan sheen passes across Source Copy.
- **WHAT MUST NOT APPEAR YET:** Third zero.
- **COMPREHENSION HOLD:** `F1568..F1578` (11 frames).
- **CLEANUP / EXIT:** Sheen settles.
- **PERSISTENT STATE:** Source Copy verified clean.

### Beat 19 · Zero 3 Encounter: "Then we reach the original zero at row three, column three."
- **FRAME RANGE:** `[1579, 1707)` (`[1579, 1690)` spoken, `[1690, 1707)` 17F pause)
- **ANCHOR:** `S03_Z3`
- **WHAT APPEARS NOW:** Scanner reticle locks onto `(3, 3)` in Source Copy. Cell `(3, 3)` glows in Sunburst Gold. Operation card updates: `SOURCE ZERO FOUND: (3, 3)`.
- **CENTER-STAGE HERO:** Source Copy cell `(3, 3)`.
- **CAUSE:** Third authentic source zero found.
- **EFFECT / MOTION:** Reticle locks on `(3, 3)`; projection arrow draws to Working Matrix.
- **WHAT MUST NOT APPEAR YET:** Row 3 write.
- **COMPREHENSION HOLD:** `F1690..F1706` (17 frames).
- **CLEANUP / EXIT:** Projection connects.
- **PERSISTENT STATE:** Source `(3, 3)` active.

### Beat 20 · Zero Row 3: "Zero, row three,"
- **FRAME RANGE:** `[1707, 1747)` (`[1707, 1736)` spoken, `[1736, 1747)` 11F pause)
- **ANCHOR:** `S03_ROW3`
- **WHAT APPEARS NOW:** Row 3 of Working Matrix is zeroed out: cells `(3, 1), (3, 2), (3, 4)` mutate to `0` in Seafoam Mint.
- **CENTER-STAGE HERO:** Working Matrix Row 3 zeroing.
- **CAUSE:** First consequence of source zero `(3, 3)`.
- **EFFECT / MOTION:** Mint wipe across Working Row 3.
- **WHAT MUST NOT APPEAR YET:** Col 3 write.
- **COMPREHENSION HOLD:** `F1736..F1746` (11 frames).
- **CLEANUP / EXIT:** Row 3 zeroes locked.
- **PERSISTENT STATE:** Working Row 3 = 0.

### Beat 21 · Zero Col 3: "and zero, column three"
- **FRAME RANGE:** `[1747, 1792)` (`[1747, 1792)` spoken, 0F pause)
- **ANCHOR:** `S03_COL3`
- **WHAT APPEARS NOW:** Col 3 of Working Matrix is zeroed out: cells `(1, 3), (2, 3), (4, 3)` mutate to `0` in Seafoam Mint.
- **CENTER-STAGE HERO:** Working Matrix Col 3 zeroing.
- **CAUSE:** Second consequence of source zero `(3, 3)`.
- **EFFECT / MOTION:** Mint wipe down Working Col 3.
- **WHAT MUST NOT APPEAR YET:** Final results card.
- **COMPREHENSION HOLD:** 0F (flows into Beat 22).
- **CLEANUP / EXIT:** Working Col 3 zeroes locked.
- **PERSISTENT STATE:** Working Col 3 = 0.

### Beat 22 · In the Working Matrix: "in the working matrix."
- **FRAME RANGE:** `[1792, 1877)` (`[1792, 1857)` spoken, `[1857, 1877)` 20F pause)
- **ANCHOR:** `S03_WORKING`
- **WHAT APPEARS NOW:** All writes to Working Matrix are completed! Working Matrix settles with all mutations locked.
- **CENTER-STAGE HERO:** Completed Working Matrix.
- **CAUSE:** Conclusion of the mutation phase.
- **EFFECT / MOTION:** Soft green pulse across Working Matrix.
- **WHAT MUST NOT APPEAR YET:** Final row recitation.
- **COMPREHENSION HOLD:** `F1857..F1876` (20 frames).
- **CLEANUP / EXIT:** Retains completed working matrix.
- **PERSISTENT STATE:** Working Matrix mutations finalized.

### Beat 23 · All 3 Processed: "Now all three original zero sources have been processed."
- **FRAME RANGE:** `[1877, 2002)` (`[1877, 1987)` spoken, `[1987, 2002)` 15F pause)
- **ANCHOR:** `S03_ALL3`
- **WHAT APPEARS NOW:** Checkmark icons (`✓`) illuminate over all three source zeros in Source Copy: `(0, 2) ✓`, `(2, 0) ✓`, `(3, 3) ✓`.
- **CENTER-STAGE HERO:** All 3 source zeros confirmed processed.
- **CAUSE:** Complete traversal of original zero set.
- **EFFECT / MOTION:** Checkmarks pop on each source zero (`F1877..F1920`).
- **WHAT MUST NOT APPEAR YET:** Invariant recap.
- **COMPREHENSION HOLD:** `F1987..F2001` (15 frames).
- **CLEANUP / EXIT:** Checkmarks settle into quiet badges.
- **PERSISTENT STATE:** Sources 100% processed.

### Beat 24 · Invariant Focus: "Notice what we never did."
- **FRAME RANGE:** `[2002, 2058)` (`[2002, 2045)` spoken, `[2045, 2058)` 13F pause)
- **ANCHOR:** `S03_NEVER`
- **WHAT APPEARS NOW:** Spotlight narrows to the working matrix. A golden question banner appears: `HOW WAS THE TRAP PREVENTED?`.
- **CENTER-STAGE HERO:** Invariant analysis.
- **CAUSE:** Pedagogical reflection on why Method 1 succeeded.
- **EFFECT / MOTION:** Ambient dimming of non-working elements.
- **WHAT MUST NOT APPEAR YET:** Invariant text statement.
- **COMPREHENSION HOLD:** `F2045..F2057` (13 frames).
- **CLEANUP / EXIT:** Focus holds.
- **PERSISTENT STATE:** Invariant attention primed.

### Beat 25 · No Working Zeros Used: "We never used a zero created inside the working matrix as a new source."
- **FRAME RANGE:** `[2058, 2240)` (`[2058, 2211)` spoken, `[2211, 2240)` 29F pause)
- **ANCHOR:** `S03_CREATED`
- **WHAT APPEARS NOW:** A green shield outline encases the working matrix mutations. Label: `CREATED ZEROS = PASSIVE OUTPUT ONLY (NEVER SOURCES)`.
- **CENTER-STAGE HERO:** Shielded working zeros.
- **CAUSE:** Proof of why no cascading corruption occurred.
- **EFFECT / MOTION:** Green protective wash over mutated cells in Working Matrix (`F2058..F2100`).
- **WHAT MUST NOT APPEAR YET:** Decision flow.
- **COMPREHENSION HOLD:** `F2211..F2239` (29 frames, 960ms pause).
- **CLEANUP / EXIT:** Label settles.
- **PERSISTENT STATE:** Working zero passivity proven.

### Beat 26 · Original Source Origin: "Every zeroing decision came from the untouched original copy."
- **FRAME RANGE:** `[2240, 2369)` (`[2240, 2350)` spoken, `[2350, 2369)` 19F pause)
- **ANCHOR:** `S03_EVERY`
- **WHAT APPEARS NOW:** A radiant cyan beam connects Source Copy to Working Matrix: `ALL DECISIONS ORIGINATE FROM TRUTH LENS`.
- **CENTER-STAGE HERO:** Unidirectional data flow from Source to Working.
- **CAUSE:** Re-affirming the architectural separation.
- **EFFECT / MOTION:** Animated flow particles travel along the bridge from left to right (`F2240..F2280`).
- **WHAT MUST NOT APPEAR YET:** Chain reaction banner.
- **COMPREHENSION HOLD:** `F2350..F2368` (19 frames).
- **CLEANUP / EXIT:** Bridge settles.
- **PERSISTENT STATE:** Unidirectional causality established.

### Beat 27 · No Chain Reaction: "So newly created zeros cannot create a false chain reaction."
- **FRAME RANGE:** `[2369, 2516)` (`[2369, 2495)` spoken, `[2495, 2516)` 21F pause)
- **ANCHOR:** `S03_NOCHAIN`
- **WHAT APPEARS NOW:** A bold green banner appears at $Y: 600$:
  `✅ ZERO CASCADE PREVENTED: False Chain Reactions Are Impossible With An Immutable Source`.
- **CENTER-STAGE HERO:** Verification banner.
- **CAUSE:** Mathematical proof of correctness.
- **EFFECT / MOTION:** Banner expands with pop spring (`F2369..F2410`).
- **WHAT MUST NOT APPEAR YET:** Row-by-row recitation.
- **COMPREHENSION HOLD:** `F2495..F2515` (21 frames, 700ms pause).
- **CLEANUP / EXIT:** Banner stays visible.
- **PERSISTENT STATE:** Correctness locked.

### Beat 28 · Result Transition: "After all three original zeros are processed, the result becomes"
- **FRAME RANGE:** `[2516, 2645)` (`[2516, 2645)` spoken, 0F pause)
- **ANCHOR:** `S03_RESULT`
- **WHAT APPEARS NOW:** Source Copy dims slightly to 0.7 opacity; Working Matrix takes full center-stage prominence as the verified output.
- **CENTER-STAGE HERO:** Working Matrix as final result.
- **CAUSE:** Preparing for the row-by-row verification.
- **EFFECT / MOTION:** Working Matrix borders brighten in mint; row highlight bar appears over Row 0.
- **WHAT MUST NOT APPEAR YET:** Subsequent row highlights.
- **COMPREHENSION HOLD:** 0F (flows into Beat 29).
- **CLEANUP / EXIT:** Ready for Row 0.
- **PERSISTENT STATE:** Result verification active.

### Beat 29 · Row 0 Recitation: "zero zero zero zero zero"
- **FRAME RANGE:** `[2645, 2710)` (`[2645, 2710)` spoken, 0F pause)
- **ANCHOR:** `S03_R0`
- **WHAT APPEARS NOW:** Row 0 of Working Matrix illuminates in bright white/mint: `[0, 0, 0, 0, 0]`.
- **CENTER-STAGE HERO:** Working Matrix Row 0.
- **CAUSE:** Voice recitation of row 0.
- **EFFECT / MOTION:** Green highlight box frames Row 0.
- **WHAT MUST NOT APPEAR YET:** Row 1 highlight.
- **COMPREHENSION HOLD:** 0F (flows into Row 1).
- **CLEANUP / EXIT:** Highlights advance.
- **PERSISTENT STATE:** Row 0 verified.

### Beat 30 · Row 1 Recitation: "zero seven zero zero ten"
- **FRAME RANGE:** `[2710, 2792)` (`[2710, 2792)` spoken, 0F pause)
- **ANCHOR:** `S03_R1`
- **WHAT APPEARS NOW:** Row 1 of Working Matrix illuminates: `[0, 7, 0, 0, 10]`. Numbers `7` and `10` glow brightly in gold: `PRESERVED!`.
- **CENTER-STAGE HERO:** Working Matrix Row 1 (7 and 10 preserved).
- **CAUSE:** Voice recitation of row 1 proving non-zeros survived.
- **EFFECT / MOTION:** Highlight shifts from Row 0 to Row 1; gold tags pulse on 7 and 10.
- **WHAT MUST NOT APPEAR YET:** Row 2.
- **COMPREHENSION HOLD:** 0F (flows into Row 2).
- **CLEANUP / EXIT:** Advances to Row 2.
- **PERSISTENT STATE:** Row 1 verified (innocents safe).

### Beat 31 · Row 2 Recitation: "zero zero zero zero zero"
- **FRAME RANGE:** `[2792, 2860)` (`[2792, 2860)` spoken, 0F pause)
- **ANCHOR:** `S03_R2`
- **WHAT APPEARS NOW:** Row 2 of Working Matrix illuminates: `[0, 0, 0, 0, 0]`.
- **CENTER-STAGE HERO:** Working Matrix Row 2.
- **CAUSE:** Voice recitation of row 2.
- **EFFECT / MOTION:** Highlight shifts to Row 2.
- **WHAT MUST NOT APPEAR YET:** Row 3.
- **COMPREHENSION HOLD:** 0F (flows into Row 3).
- **CLEANUP / EXIT:** Advances to Row 3.
- **PERSISTENT STATE:** Row 2 verified.

### Beat 32 · Row 3 Recitation: "zero zero zero zero zero"
- **FRAME RANGE:** `[2860, 2939)` (`[2860, 2939)` spoken, 0F pause)
- **ANCHOR:** `S03_R3`
- **WHAT APPEARS NOW:** Row 3 of Working Matrix illuminates: `[0, 0, 0, 0, 0]`.
- **CENTER-STAGE HERO:** Working Matrix Row 3.
- **CAUSE:** Voice recitation of row 3.
- **EFFECT / MOTION:** Highlight shifts to Row 3.
- **WHAT MUST NOT APPEAR YET:** Row 4.
- **COMPREHENSION HOLD:** 0F (flows into Row 4).
- **CLEANUP / EXIT:** Advances to Row 4.
- **PERSISTENT STATE:** Row 3 verified.

### Beat 33 · Row 4 Recitation: "zero twenty-two zero zero twenty-five."
- **FRAME RANGE:** `[2939, 3104)` (`[2939, 3077)` spoken, `[3077, 3104)` 27F pause)
- **ANCHOR:** `S03_R4`
- **WHAT APPEARS NOW:** Row 4 of Working Matrix illuminates: `[0, 22, 0, 0, 25]`. Numbers `22` and `25` glow in gold: `PRESERVED!`.
- **CENTER-STAGE HERO:** Working Matrix Row 4 (22 and 25 preserved).
- **CAUSE:** Voice recitation of row 4 completing the matrix verification.
- **EFFECT / MOTION:** Highlight shifts to Row 4; gold tags on 22 and 25. Complete matrix confirmed.
- **WHAT MUST NOT APPEAR YET:** Complexity banner.
- **COMPREHENSION HOLD:** `F3077..F3103` (27 frames, 900ms pause).
- **CLEANUP / EXIT:** Complete matrix verified.
- **PERSISTENT STATE:** All 5 rows verified correct.

### Beat 34 · Method 1 Works: "So method one works,"
- **FRAME RANGE:** `[3104, 3150)` (`[3104, 3138)` spoken, `[3138, 3150)` 12F pause)
- **ANCHOR:** `S03_WORKS`
- **WHAT APPEARS NOW:** Celebratory green badge pops up: `⭐ METHOD 1: FULLY CORRECT ALGORITHM`.
- **CENTER-STAGE HERO:** Method 1 success confirmation.
- **CAUSE:** Algorithm has passed the complete trace test.
- **EFFECT / MOTION:** Green badge scales in with subtle chalk dust.
- **WHAT MUST NOT APPEAR YET:** Memory tradeoff.
- **COMPREHENSION HOLD:** `F3138..F3149` (12 frames).
- **CLEANUP / EXIT:** Prepares for tradeoff discussion.
- **PERSISTENT STATE:** Correctness celebrated.

### Beat 35 · The Memory Price: "but we paid for that safety"
- **FRAME RANGE:** `[3150, 3197)` (`[3150, 3197)` spoken, 0F pause)
- **ANCHOR:** `S03_SAFETY`
- **WHAT APPEARS NOW:** Focus shifts back to the Source Copy with an amber warning outline.
- **CENTER-STAGE HERO:** Space cost transition.
- **CAUSE:** Introducing the engineering drawback of Method 1.
- **EFFECT / MOTION:** Amber warning outline encircles Source Copy.
- **WHAT MUST NOT APPEAR YET:** Complexity formula.
- **COMPREHENSION HOLD:** 0F (flows into Beat 36).
- **CLEANUP / EXIT:** Ready for space cost callout.
- **PERSISTENT STATE:** Cost focus active.

### Beat 36 · Auxiliary Storage Cost: "by storing the whole matrix again."
- **FRAME RANGE:** `[3197, 3285)` (`[3197, 3285)` spoken, 0F pause)
- **ANCHOR:** `S03_STORE`
- **WHAT APPEARS NOW:** Memory cost banner docks below dual matrices ($Y: 710$):
  `📦 AUXILIARY SPACE: O(M × N) — 25 Extra Integers Allocated in Memory`.
- **CENTER-STAGE HERO:** Space complexity cost callout.
- **CAUSE:** Quantifying the memory penalty of full cloning.
- **EFFECT / MOTION:** Banner slides up with orange/amber chalk border (`#FFA94D`).
- **WHAT MUST NOT APPEAR YET:** Code handoff.
- **COMPREHENSION HOLD:** 0F (flows into Beat 37).
- **CLEANUP / EXIT:** Banner settles.
- **PERSISTENT STATE:** Space cost documented.

### Beat 37 · Code Handoff: "Let's write the idea in code."
- **FRAME RANGE:** `[3285, 3357)` (`[3285, 3357)` spoken, 0F pause, scene completes at F3357)
- **ANCHOR:** `S03_CODE`
- **WHAT APPEARS NOW:** Code handoff teaser card animates into view ($Y: 795$):
  `➡️ UP NEXT: SCENE 04 — METHOD 1 IMPLEMENTATION & CODE WALKTHROUGH`.
- **CENTER-STAGE HERO:** Code handoff.
- **CAUSE:** Transitioning to Python implementation.
- **EFFECT / MOTION:** Teaser card slides into position; scene finishes on settled, crisp chalkboard state at frame 3357.
- **WHAT MUST NOT APPEAR YET:** Python code editor (belongs to Scene 04).
- **COMPREHENSION HOLD:** 0F (scene concludes cleanly at F3357).
- **CLEANUP / EXIT:** Clean handoff into Scene 04.
- **PERSISTENT STATE:** Method 1 trace complete, verified, ready for code.

---

## 5. Critical Verification Frames for QA

1. **Frame 30 (1.000s):** Initial master matrix hold before cloning.
2. **Frame 120 (4.000s):** Dual matrices settled side by side (Source Copy left, Working Matrix right).
3. **Frame 250 (8.333s):** Source of Truth title active above left matrix.
4. **Frame 450 (15.000s):** Read vs Write roles established on both matrices.
5. **Frame 600 (20.000s):** Scanner locks onto `(0, 2)` in Source Copy.
6. **Frame 850 (28.333s):** Row 0 of Working Matrix zeroes out in Seafoam Mint.
7. **Frame 945 (31.500s):** Col 2 of Working Matrix zeroes out; `(0, 2)` effect complete.
8. **Frame 1080 (36.000s):** Source Copy confirmed untouched (cell `(1, 2)` is still 8!).
9. **Frame 1250 (41.667s):** Scanner locks onto `(2, 0)` in Source Copy.
10. **Frame 1350 (45.000s):** Row 2 of Working Matrix zeroes out.
11. **Frame 1420 (47.333s):** Col 0 of Working Matrix zeroes out; `(2, 0)` effect complete.
12. **Frame 1640 (54.667s):** Scanner locks onto `(3, 3)` in Source Copy.
13. **Frame 1720 (57.333s):** Row 3 of Working Matrix zeroes out.
14. **Frame 1770 (59.000s):** Col 3 of Working Matrix zeroes out; all 3 sources executed.
15. **Frame 1920 (64.000s):** All 3 original sources marked with checkmarks.
16. **Frame 2150 (71.667s):** Shielded working zeros; proof of no synthetic source triggering.
17. **Frame 2450 (81.667s):** 'ZERO CASCADE PREVENTED' banner.
18. **Frame 2750 (91.667s):** Row 1 recitation: cells 7 and 10 glowing gold (PRESERVED!).
19. **Frame 3020 (100.667s):** Row 4 recitation: cells 22 and 25 glowing gold (PRESERVED!).
20. **Frame 3120 (104.000s):** Celebratory 'METHOD 1: FULLY CORRECT' badge.
21. **Frame 3250 (108.333s):** Space complexity card: $O(M \times N)$ Auxiliary Space.
22. **Frame 3330 (111.000s):** Code handoff card: 'UP NEXT: SCENE 04 — METHOD 1 CODE'.
