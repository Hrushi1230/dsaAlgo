# Scene 03 — Method 1 Trace: Extra Destination Matrix
## Framewise Execution Plan

- **Question:** 014 (Rotate Image - LeetCode 48)
- **Scene:** `03-method1-trace`
- **Total Duration:** 4,466 frames (148.880s @ 30 FPS)
- **Audio File:** `public/audio/014/03-method1-trace.mp3`
- **Sync File:** `sync/03-method1-trace.json` (302 words)
- **Anchor File:** `sync/03-method1-trace.anchors.json` (26 anchors)

---

### Layout Geometry & Zero-Collision Law

1. **Top Zone (Y: 36..90):**
   - Clean Scene Edge Header: `01 · ARRAYS & HASHING`, `LEETCODE 48 · MEDIUM`, `METHOD 1: EXTRA DESTINATION MATRIX`.
   - **Zero-Collision Rule (User Mandate):** Top zone contains strictly metadata and title. No explanation cards or callouts are placed in the top zone. All matrix headers have >= 60px vertical clearance.

2. **Center-Stage Hero Entities (Y: 170..590):**
   - **Left Matrix (Source `matrix[5][5]`):**
     - Center X: 460. Box X: 240..680 (width: 440px). Box Y: 170..590.
     - Cell size: 68px, gap: 8px. Grid: 372 × 372px.
     - Row headers: `r=0..4` on left. Column headers: `c=0..4` on top.
   - **Right Matrix (Destination `result[5][5]`):**
     - Center X: 1460. Box X: 1240..1680 (width: 440px). Box Y: 170..590.
     - Cell size: 68px, gap: 8px. Grid: 372 × 372px.
     - Row headers: `r=0..4` on left. Column headers: `c=0..4` on top.
   - **Center Zone (X: 710..1210, Y: 200..560):**
     - Width: 500px.
     - Contains the Formula / Destination Mapping Card:
       `result[c][n - 1 - r] = matrix[r][c]`
       `(r, c) ──► (c, 4 - r)`
     - Dynamic evaluation box showing current active step coordinate substitution.
     - Animated Bezier flight trajectory arcs bridging Source cell to Destination cell.

3. **Bottom Zone (Y: 630..770):**
   - Summary cards, row-to-column completion strips, and Space Complexity Tradeoff card (`O(N^2)` memory warning).
   - Bottom boundary: Y: 770px.
   - Clearance to Captions (Y: 960..980): >= 190px of pristine breathing room.

---

### Framewise Anchor Plans (Anchors 0 to 25)

#### Anchor 0: S03_APPROACH_EXTRA_MATRIX
- **Frame Range:** 0 .. 151 (0.00s .. 5.02s)
- **Spoken Text:** "The easiest approach is create another matrix of the same size."
- **WHAT APPEARS NOW:**
  - Background chalk grid pattern.
  - Top header: `METHOD 1: EXTRA DESTINATION MATRIX` with pill badge `BRUTE FORCE / INTUITIVE`.
  - Left card frame reveals: `SOURCE MATRIX matrix[5][5]` with all 25 values (1 to 25) visible in neutral settled state.
  - Right card frame reveals: `RESULT MATRIX result[5][5]` initialized with empty grid slots (faint dotted cell borders `#234E3D`).
- **CENTER-STAGE HERO:** Dual matrix layout introducing the Source and newly allocated Destination side-by-side.
- **CAUSE:** Method 1 chooses safety by allocating an extra $N \times N$ matrix.
- **EFFECT / MOTION:** Smooth spring fade-and-scale entrance (`spring({ frame, fps: 30, config: { damping: 18 } })`) for both matrix frames.
- **WHAT MUST NOT APPEAR YET:** Flight paths, active formula highlights, row sweep brackets.
- **COMPREHENSION HOLD:** Frames 120 .. 151: Clear visual establishment of two $5 \times 5$ grids.
- **CLEANUP / EXIT:** None. Both matrices persist throughout the entire scene.
- **PERSISTENT STATE:** Source matrix fully populated on left; Result matrix empty on right.

---

#### Anchor 1: S03_ORIGINAL_UNCHANGED
- **Frame Range:** 167 .. 372 (5.58s .. 12.40s)
- **Spoken Text:** "We keep the original matrix unchanged and place every value directly into its rotated destination."
- **WHAT APPEARS NOW:**
  - Status tag under Source matrix: `READ ONLY · PRESERVED` (cyan `#4CC9F0`).
  - Status tag under Result matrix: `WRITE TARGET · DIRECT PLACEMENT` (emerald `#52B788`).
  - Subtle pulsing glow around the Result matrix border indicating it is ready to receive values.
- **CENTER-STAGE HERO:** Visual contract between Source (untouched) and Destination (written).
- **CAUSE:** Explaining the fundamental safety guarantee of this approach.
- **EFFECT / MOTION:** Status tags slide up smoothly; subtle pulse on Result matrix.
- **WHAT MUST NOT APPEAR YET:** Numerical element flight.
- **COMPREHENSION HOLD:** Frames 330 .. 372: Audience digests that no overwrites or race conditions can happen.
- **CLEANUP / EXIT:** Transition into formula recall.
- **PERSISTENT STATE:** Both matrices labeled with read/write roles.

---

#### Anchor 2: S03_RECALL_MAPPING
- **Frame Range:** 397 .. 589 (13.24s .. 19.64s)
- **Spoken Text:** "We already know the mapping R, C goes to C n minus 1 minus r."
- **WHAT APPEARS NOW:**
  - Center Zone Card appears at X: 730..1190, Y: 220..380.
  - Title: `ROTATION MAPPING (FROM SCENE 02)`
  - Formula: `(r, c) ──► (c, n - 1 - r)`
  - Concrete formula for $n=5$: `(r, c) ──► (c, 4 - r)`.
- **CENTER-STAGE HERO:** Center mapping card connecting Left and Right grids.
- **CAUSE:** Recalling the geometric invariant proven in Scene 02.
- **EFFECT / MOTION:** Center card scales in with spring; gold accent `#FFD166` on `(c, 4 - r)`.
- **WHAT MUST NOT APPEAR YET:** Specific individual element movement.
- **COMPREHENSION HOLD:** Frames 540 .. 589: Formula clearly readable.
- **CLEANUP / EXIT:** Center card remains anchored to explain upcoming traces.
- **PERSISTENT STATE:** Center mapping card visible.

---

#### Anchor 3: S03_APPLY_IT
- **Frame Range:** 605 .. 671 (20.16s .. 22.38s)
- **Spoken Text:** "So now we only need to apply it."
- **WHAT APPEARS NOW:**
  - Active step indicator card below formula: `TRACE SAMPLE CELLS`.
  - Arrow markers animate between the formula and the Source grid.
- **CENTER-STAGE HERO:** Preparation for the first concrete sample trace.
- **CAUSE:** Transitioning from algebraic theory to step-by-step trace.
- **EFFECT / MOTION:** Step indicator lights up with emerald glow.
- **WHAT MUST NOT APPEAR YET:** Value 1 moving before narration mentions it.
- **COMPREHENSION HOLD:** Frames 645 .. 671: Ready for value 1.
- **CLEANUP / EXIT:** Step indicator focuses on value 1.
- **PERSISTENT STATE:** Matrices and formula ready for tracing.

---

#### Anchor 4: S03_TRACE_1_SOURCE
- **Frame Range:** 676 .. 804 (22.52s .. 26.80s)
- **Spoken Text:** "Take 1. 1 is at row 0. Column 0."
- **WHAT APPEARS NOW:**
  - Source cell `(0, 0)` containing `1` highlights with vibrant gold border `#FFD166` and glowing background `#3E3214`.
  - Coordinate label pops above cell `(0, 0)`: `(r=0, c=0)`.
  - Dynamic mapping formula in center card evaluates:
    `r = 0, c = 0`
- **CENTER-STAGE HERO:** Value `1` at `(0, 0)` in the Source matrix.
- **CAUSE:** Selecting the top-left corner element as the first trace example.
- **EFFECT / MOTION:** Scale pulse (1.0 -> 1.15 -> 1.0) on cell `(0, 0)`; gold bracket lights up.
- **WHAT MUST NOT APPEAR YET:** Destination placement in Result matrix.
- **COMPREHENSION HOLD:** Frames 760 .. 804: Clear focus on `1` at `(0, 0)`.
- **CLEANUP / EXIT:** Coordinate label smoothly stays during destination calculation.
- **PERSISTENT STATE:** Value `1` highlighted at `(0, 0)`.

---

#### Anchor 5: S03_TRACE_1_DEST
- **Frame Range:** 804 .. 920 (26.80s .. 30.66s)
- **Spoken Text:** "Its destination is row 0. Column 4."
- **WHAT APPEARS NOW:**
  - Center card calculation expands:
    `new_row = c = 0`
    `new_col = 4 - r = 4 - 0 = 4`
    `Destination: (0, 4)`
  - In Result matrix, cell `(0, 4)` lights up with a pulsing dashed cyan target box `#4CC9F0` and coordinate tag `(0, 4)`.
  - Curved dashed trajectory arc draws from Source `(0, 0)` to Result `(0, 4)`.
- **CENTER-STAGE HERO:** Target cell `(0, 4)` in Result matrix and the bridging trajectory.
- **CAUSE:** Computing $(c, 4 - r)$ for $(0, 0)$.
- **EFFECT / MOTION:** SVG path animation draws the connecting arc across the center zone.
- **WHAT MUST NOT APPEAR YET:** Value `1` landed in Result cell before placement cue.
- **COMPREHENSION HOLD:** Frames 880 .. 920: Arc connects `(0, 0)` to `(0, 4)`.
- **CLEANUP / EXIT:** Arc prepares for flying element flight.
- **PERSISTENT STATE:** Arc visible, Source `(0, 0)` active, Result `(0, 4)` target active.

---

#### Anchor 6: S03_TRACE_1_PLACE
- **Frame Range:** 931 .. 996 (31.04s .. 33.20s)
- **Spoken Text:** "So we place 1 there in the result matrix."
- **WHAT APPEARS NOW:**
  - A cloned flying tile of `1` smoothly glides along the trajectory arc from Source `(0, 0)` to Result `(0, 4)`.
  - On arrival at frame 965:
    - Result cell `(0, 4)` lights up solid with emerald background `#1B4D3E` and white text `1`.
    - Particle celebration / ripple ring expands from Result `(0, 4)`.
- **CENTER-STAGE HERO:** Element `1` landing in Result `(0, 4)`.
- **CAUSE:** Writing `result[0][4] = matrix[0][0]`.
- **EFFECT / MOTION:** Deterministic bezier interpolation (`t` from 0 to 1 over frames 931..965); arrival ripple.
- **WHAT MUST NOT APPEAR YET:** Trace of value 8.
- **COMPREHENSION HOLD:** Frames 970 .. 996: `result[0][4] = 1` permanently visible.
- **CLEANUP / EXIT:** Flight tile and arc fade out; Result `(0, 4)` stays filled.
- **PERSISTENT STATE:** `result[0][4]` contains `1`.

---

#### Anchor 7: S03_TRACE_8_SOURCE
- **Frame Range:** 1011 .. 1126 (33.70s .. 37.54s)
- **Spoken Text:** "Now take 8. 8 is at row 1. Column 2."
- **WHAT APPEARS NOW:**
  - Source cell `(1, 2)` containing `8` highlights with gold border `#FFD166`.
  - Tag above cell: `(r=1, c=2)`.
  - Center card updates: `Active: 8 at (1, 2)`.
- **CENTER-STAGE HERO:** Value `8` at `(1, 2)` in Source matrix.
- **CAUSE:** Tracing an interior element to show general validity beyond corners.
- **EFFECT / MOTION:** Scale pulse on cell `(1, 2)`.
- **WHAT MUST NOT APPEAR YET:** Destination target `(2, 3)`.
- **COMPREHENSION HOLD:** Frames 1090 .. 1126: Position of `8` established.
- **CLEANUP / EXIT:** Ready for destination calculation.
- **PERSISTENT STATE:** `result[0][4]=1` filled; Source `(1, 2)` active.

---

#### Anchor 8: S03_TRACE_8_DEST
- **Frame Range:** 1137 .. 1240 (37.90s .. 41.32s)
- **Spoken Text:** "Its destination is row 2. Column 3."
- **WHAT APPEARS NOW:**
  - Center card calculation:
    `new_row = c = 2`
    `new_col = 4 - r = 4 - 1 = 3`
    `Destination: (2, 3)`
  - Result cell `(2, 3)` illuminates with dashed target box `#4CC9F0`.
  - Trajectory arc draws from Source `(1, 2)` to Result `(2, 3)`.
- **CENTER-STAGE HERO:** Formula application for interior cell `(1, 2) -> (2, 3)`.
- **CAUSE:** Applying formula: $r=1, c=2 \implies (2, 4 - 1) = (2, 3)$.
- **EFFECT / MOTION:** SVG trajectory line drawn across center zone.
- **WHAT MUST NOT APPEAR YET:** Value `8` settled in Result before narration cue.
- **COMPREHENSION HOLD:** Frames 1200 .. 1240: Clear connection shown.
- **CLEANUP / EXIT:** Flight transition.
- **PERSISTENT STATE:** Arc from `(1, 2)` to `(2, 3)` active.

---

#### Anchor 9: S03_TRACE_8_PLACE
- **Frame Range:** 1250 .. 1283 (41.66s .. 42.78s)
- **Spoken Text:** "So 8 goes there."
- **WHAT APPEARS NOW:**
  - Flying tile `8` glides smoothly into Result `(2, 3)`.
  - Result cell `(2, 3)` locks in with settled emerald state and value `8`.
- **CENTER-STAGE HERO:** Value `8` landing at `(2, 3)`.
- **CAUSE:** Writing `result[2][3] = matrix[1][2]`.
- **EFFECT / MOTION:** Fast crisp bezier flight and settle pop.
- **WHAT MUST NOT APPEAR YET:** Value 13 trace.
- **COMPREHENSION HOLD:** Frames 1270 .. 1283: `8` securely placed.
- **CLEANUP / EXIT:** Arc fades out.
- **PERSISTENT STATE:** `result[0][4]=1` and `result[2][3]=8` both locked in.

---

#### Anchor 10: S03_TRACE_13_SOURCE
- **Frame Range:** 1294 .. 1428 (43.12s .. 47.60s)
- **Spoken Text:** "Now 13. 13 is at row 2. Column 2."
- **WHAT APPEARS NOW:**
  - Source cell `(2, 2)` containing `13` illuminates with gold border and center badge `CENTER / FIXED POINT`.
  - Center card: `Active: 13 at (2, 2)`.
- **CENTER-STAGE HERO:** Center element `13` at `(2, 2)`.
- **CAUSE:** Demonstrating the special fixed point invariant.
- **EFFECT / MOTION:** Gold border glow and coordinate tag pop.
- **WHAT MUST NOT APPEAR YET:** Destination reveal.
- **COMPREHENSION HOLD:** Frames 1380 .. 1428: Focus on the center cell.
- **CLEANUP / EXIT:** Ready for destination calculation.
- **PERSISTENT STATE:** Source `(2, 2)` highlighted.

---

#### Anchor 11: S03_TRACE_13_DEST
- **Frame Range:** 1441 .. 1561 (48.02s .. 52.04s)
- **Spoken Text:** "Its destination is still row 2. Column 2."
- **WHAT APPEARS NOW:**
  - Center card calculation:
    `new_row = c = 2`
    `new_col = 4 - r = 4 - 2 = 2`
    `Destination: (2, 2) [UNCHANGED]`
  - Result cell `(2, 2)` lights up with dashed target box.
  - Horizontal trajectory arc connects Source `(2, 2)` to Result `(2, 2)`.
- **CENTER-STAGE HERO:** Algebraic proof that $(2, 2) \to (2, 2)$.
- **CAUSE:** $r=2, c=2 \implies (2, 4-2) = (2, 2)$.
- **EFFECT / MOTION:** Center card formula values highlight in gold `#FFD166`.
- **WHAT MUST NOT APPEAR YET:** Center placement complete.
- **COMPREHENSION HOLD:** Frames 1510 .. 1561: Visual symmetry confirmed.
- **CLEANUP / EXIT:** Flight transition.
- **PERSISTENT STATE:** Arc connecting centers visible.

---

#### Anchor 12: S03_TRACE_13_PLACE
- **Frame Range:** 1573 .. 1622 (52.44s .. 54.08s)
- **Spoken Text:** "So the center stays where it is."
- **WHAT APPEARS NOW:**
  - Flying tile `13` glides into Result `(2, 2)`.
  - Result `(2, 2)` locks in with settled emerald state and value `13`.
  - Small badge appears on Result center: `FIXED POINT`.
- **CENTER-STAGE HERO:** Result center cell `(2, 2)` filled with `13`.
- **CAUSE:** Geometric center invariance under 90-degree rotation.
- **EFFECT / MOTION:** Settle pop and subtle radial ring.
- **WHAT MUST NOT APPEAR YET:** Value 17 trace.
- **COMPREHENSION HOLD:** Frames 1600 .. 1622: Center fixed point firmly established.
- **CLEANUP / EXIT:** Arc fades out.
- **PERSISTENT STATE:** Result has `1`, `8`, `13` placed.

---

#### Anchor 13: S03_TRACE_17_SOURCE
- **Frame Range:** 1627 .. 1781 (54.22s .. 59.36s)
- **Spoken Text:** "Now 17. 17 is at row 3. Column 1."
- **WHAT APPEARS NOW:**
  - Source cell `(3, 1)` containing `17` illuminates with gold border.
  - Tag above cell: `(r=3, c=1)`.
  - Center card: `Active: 17 at (3, 1)`.
- **CENTER-STAGE HERO:** Value `17` at lower quadrant `(3, 1)`.
- **CAUSE:** Tracing a bottom-half non-trivial cell.
- **EFFECT / MOTION:** Scale pulse on cell `(3, 1)`.
- **WHAT MUST NOT APPEAR YET:** Calculation result.
- **COMPREHENSION HOLD:** Frames 1730 .. 1781: Focus on `17`.
- **CLEANUP / EXIT:** Ready for arithmetic breakdown.
- **PERSISTENT STATE:** Source `(3, 1)` active.

---

#### Anchor 14: S03_TRACE_17_CALC
- **Frame Range:** 1792 .. 1991 (59.74s .. 66.38s)
- **Spoken Text:** "Its new row becomes 1. Its new column becomes 4 minus 3, which is 1."
- **WHAT APPEARS NOW:**
  - Center card step-by-step arithmetic breakdown:
    - Step 1: `new_row = c = 1` (glows cyan `#4CC9F0`)
    - Step 2: `new_col = 4 - r = 4 - 3 = 1` (glows gold `#FFD166`)
    - Final: `Destination: (1, 1)`
  - Result cell `(1, 1)` highlights with pulsing cyan target box.
  - Trajectory arc draws from Source `(3, 1)` up and across to Result `(1, 1)`.
- **CENTER-STAGE HERO:** Arithmetic calculation and trajectory arc for `(3, 1) -> (1, 1)`.
- **CAUSE:** Proving the formula handles arbitrary indices correctly.
- **EFFECT / MOTION:** Two-step number substitution in center card.
- **WHAT MUST NOT APPEAR YET:** Value 17 landed in Result.
- **COMPREHENSION HOLD:** Frames 1940 .. 1991: Audience follows $4 - 3 = 1$.
- **CLEANUP / EXIT:** Flight transition.
- **PERSISTENT STATE:** Arc from `(3, 1)` to `(1, 1)` ready.

---

#### Anchor 15: S03_TRACE_17_PLACE
- **Frame Range:** 2012 .. 2119 (67.08s .. 70.64s)
- **Spoken Text:** "So 17 moves to row 1. Column 1."
- **WHAT APPEARS NOW:**
  - Flying tile `17` moves along the arc and locks into Result `(1, 1)`.
  - Result cell `(1, 1)` illuminates emerald with value `17`.
- **CENTER-STAGE HERO:** Value `17` landing at Result `(1, 1)`.
- **CAUSE:** Writing `result[1][1] = matrix[3][1]`.
- **EFFECT / MOTION:** Bezier flight and emerald ripple.
- **WHAT MUST NOT APPEAR YET:** Full sweep explanation.
- **COMPREHENSION HOLD:** Frames 2070 .. 2119: Result has 4 representative sample elements placed.
- **CLEANUP / EXIT:** Arc fades out.
- **PERSISTENT STATE:** Result has `1`, `8`, `13`, `17` placed.

---

#### Anchor 16: S03_WHOLE_IDEA
- **Frame Range:** 2134 .. 2428 (71.12s .. 80.94s)
- **Spoken Text:** "That is the whole idea. Read a value. From the source matrix, calculate its destination and write it safely into the result matrix."
- **WHAT APPEARS NOW:**
  - Center card transforms into 3-step pipeline flow:
    `[ 1. READ ]  ──►  [ 2. CALCULATE ]  ──►  [ 3. WRITE ]`
    `matrix[r][c]       (c, 4 - r)            result[c][4-r]`
  - Synchronized micro-pulses along the 3 pipeline stages.
- **CENTER-STAGE HERO:** Algorithmic pipeline card in Center Zone.
- **CAUSE:** Summarizing the universal loop body logic before executing full rows.
- **EFFECT / MOTION:** Staggered sequence fade-in of the 3 pipeline blocks.
- **WHAT MUST NOT APPEAR YET:** Full row-by-row sweeps.
- **COMPREHENSION HOLD:** Frames 2360 .. 2428: Clarity on the 3 fundamental operations.
- **CLEANUP / EXIT:** Pipeline card transitions to Row Sweep Tracker at frame 2440.
- **PERSISTENT STATE:** All 4 sampled cells remain placed in Result matrix.

---

#### Anchor 17: S03_ROW0_TO_COL4
- **Frame Range:** 2455 .. 2871 (81.82s .. 95.70s)
- **Spoken Text:** "Now let's complete the full pattern. When we process the first source row, 1, 2, 3, 4, 5. Those values become the last column of the rotated matrix."
- **WHAT APPEARS NOW:**
  - Source Matrix: Entire Row 0 (`[1, 2, 3, 4, 5]`) highlights in vivid electric cyan bracket `#4CC9F0`.
  - Tag above Row 0: `SOURCE ROW 0`.
  - In Center Zone: Directional arrow with label: `Row 0 ──► Column 4`.
  - Result Matrix: Column 4 (`c=4`) lights up with cyan bracket.
  - Values `2, 3, 4, 5` glide sequentially across to fill `result[1][4]=2`, `result[2][4]=3`, `result[3][4]=4`, `result[4][4]=5` (joining `1` already at `[0][4]`).
- **CENTER-STAGE HERO:** Complete mapping of Row 0 to Column 4.
- **CAUSE:** Demonstrating row-to-column structural transposition with reversal.
- **EFFECT / MOTION:** Staggered cascading flight of values 2, 3, 4, 5; column 4 illuminates emerald.
- **WHAT MUST NOT APPEAR YET:** Row 1 animation.
- **COMPREHENSION HOLD:** Frames 2800 .. 2871: Entire Column 4 `[1, 2, 3, 4, 5]` visibly filled top-to-bottom.
- **CLEANUP / EXIT:** Row 0 highlight softens.
- **PERSISTENT STATE:** Result Column 4 is 100% complete.

---

#### Anchor 18: S03_ROW1_TO_COL3
- **Frame Range:** 2887 .. 3107 (96.22s .. 103.56s)
- **Spoken Text:** "The second source row, 6, 7, 8, 9, 10 becomes the next column."
- **WHAT APPEARS NOW:**
  - Source Matrix: Row 1 (`[6, 7, 8, 9, 10]`) highlights in gold bracket `#FFD166`.
  - Center label: `Row 1 ──► Column 3`.
  - Result Matrix: Column 3 (`c=3`) lights up with gold bracket.
  - Cascading flight fills `result[0..4][3] = [6, 7, 8, 9, 10]` top-to-bottom.
- **CENTER-STAGE HERO:** Row 1 transforming into Column 3.
- **CAUSE:** Advancing the outer loop `r=1`.
- **EFFECT / MOTION:** Fluid staggered flight into Column 3.
- **WHAT MUST NOT APPEAR YET:** Row 2 animation.
- **COMPREHENSION HOLD:** Frames 3060 .. 3107: Column 3 fully populated.
- **CLEANUP / EXIT:** Row 1 highlight softens.
- **PERSISTENT STATE:** Result Columns 4 and 3 are 100% complete.

---

#### Anchor 19: S03_ROW2_TO_COL2
- **Frame Range:** 3123 .. 3204 (104.10s .. 106.80s)
- **Spoken Text:** "The middle source row becomes the middle column."
- **WHAT APPEARS NOW:**
  - Source Matrix: Row 2 (`[11, 12, 13, 14, 15]`) highlights.
  - Center label: `Row 2 ──► Column 2 (Middle)`.
  - Result Matrix: Column 2 (`c=2`) lights up.
  - Cascading flight fills `result[0..4][2] = [11, 12, 13, 14, 15]` top-to-bottom (center 13 merges cleanly).
- **CENTER-STAGE HERO:** Middle row becoming middle column.
- **CAUSE:** Advancing outer loop `r=2`.
- **EFFECT / MOTION:** Rapid smooth cascade into Column 2.
- **WHAT MUST NOT APPEAR YET:** Row 3 animation.
- **COMPREHENSION HOLD:** Frames 3180 .. 3204: Column 2 complete.
- **CLEANUP / EXIT:** Row 2 highlight softens.
- **PERSISTENT STATE:** Result Columns 4, 3, 2 are 100% complete.

---

#### Anchor 20: S03_ROW3_TO_COL1
- **Frame Range:** 3220 .. 3321 (107.34s .. 110.70s)
- **Spoken Text:** "Then source row, 3, becomes column 1."
- **WHAT APPEARS NOW:**
  - Source Matrix: Row 3 (`[16, 17, 18, 19, 20]`) highlights.
  - Center label: `Row 3 ──► Column 1`.
  - Result Matrix: Column 1 (`c=1`) lights up.
  - Cascading flight fills `result[0..4][1] = [16, 17, 18, 19, 20]`.
- **CENTER-STAGE HERO:** Row 3 becoming Column 1.
- **CAUSE:** Advancing outer loop `r=3`.
- **EFFECT / MOTION:** Smooth cascade into Column 1.
- **WHAT MUST NOT APPEAR YET:** Row 4 animation.
- **COMPREHENSION HOLD:** Frames 3290 .. 3321: Column 1 complete.
- **CLEANUP / EXIT:** Row 3 highlight softens.
- **PERSISTENT STATE:** Result Columns 4, 3, 2, 1 are complete.

---

#### Anchor 21: S03_ROW4_TO_COL0
- **Frame Range:** 3321 .. 3450 (110.70s .. 115.00s)
- **Spoken Text:** "And the final source row becomes column 0."
- **WHAT APPEARS NOW:**
  - Source Matrix: Row 4 (`[21, 22, 23, 24, 25]`) highlights in vibrant violet/cyan.
  - Center label: `Row 4 ──► Column 0`.
  - Result Matrix: Column 0 (`c=0`) lights up.
  - Cascading flight fills `result[0..4][0] = [21, 22, 23, 24, 25]`.
- **CENTER-STAGE HERO:** Final row transforming into Column 0.
- **CAUSE:** Completing the final row `r=4`.
- **EFFECT / MOTION:** Final cascade fills the last empty column in the Result matrix.
- **WHAT MUST NOT APPEAR YET:** Full matrix rotation celebration before placement completes.
- **COMPREHENSION HOLD:** Frames 3410 .. 3450: All 25 cells of Result matrix are now 100% filled!
- **CLEANUP / EXIT:** Row brackets fade.
- **PERSISTENT STATE:** Result matrix is fully populated with all 25 rotated values.

---

#### Anchor 22: S03_ROTATION_COMPLETE
- **Frame Range:** 3461 .. 3730 (115.38s .. 124.32s)
- **Spoken Text:** "Once every source position has been processed, the result matrix is the correct 90 degree clockwise rotation."
- **WHAT APPEARS NOW:**
  - Result Matrix card perimeter illuminates in celebratory emerald shimmer `#52B788`.
  - Header badge above Result matrix: `90° CLOCKWISE ROTATION VERIFIED ✓`.
  - Center card displays comparative check:
    - Top row of Result: `[21, 16, 11, 6, 1]`
    - Right col of Result: `[1, 2, 3, 4, 5]`
- **CENTER-STAGE HERO:** Completed, verified Result Matrix.
- **CAUSE:** Validation of the complete $5 \times 5$ output.
- **EFFECT / MOTION:** Synchronized emerald pulse across all 25 cells of Result matrix.
- **WHAT MUST NOT APPEAR YET:** Space complexity warning card.
- **COMPREHENSION HOLD:** Frames 3650 .. 3730: Audience verifies correctness against problem statement.
- **CLEANUP / EXIT:** Celebratory shimmer settles into clean emerald state.
- **PERSISTENT STATE:** Validated result matrix displayed prominently.

---

#### Anchor 23: S03_WHY_SAFE
- **Frame Range:** 3752 .. 4123 (125.08s .. 137.42s)
- **Spoken Text:** "And because the source and destination are different matrices, we never destroy a value before using it. That makes this method very easy to reason about."
- **WHAT APPEARS NOW:**
  - Bottom Zone Card appears (X: 360..1560, Y: 630..755):
    - Title: `WHY THIS APPROACH IS SAFE & SIMPLE`
    - Two comparison callouts side-by-side:
      1. `INDEPENDENT STORAGE`: Source and Result reside in separate memory spaces.
      2. `ZERO OVERWRITE RISK`: No read-after-write conflicts or value destruction.
- **CENTER-STAGE HERO:** Safety explanation card in Bottom Zone.
- **CAUSE:** Explaining why beginner solutions gravitate to this approach.
- **EFFECT / MOTION:** Smooth slide-up entrance from Y: 660 to Y: 630.
- **WHAT MUST NOT APPEAR YET:** The LeetCode constraint violation warning.
- **COMPREHENSION HOLD:** Frames 4050 .. 4123: Clear understanding of safety rationale.
- **CLEANUP / EXIT:** Card contents transition to the space tradeoff problem.
- **PERSISTENT STATE:** Bottom card active.

---

#### Anchor 24: S03_SPACE_TRADEOFF
- **Frame Range:** 4137 .. 4325 (137.90s .. 144.18s)
- **Spoken Text:** "But there is one problem. We created another complete n by n matrix."
- **WHAT APPEARS NOW:**
  - Bottom Zone Card transitions into **Warning / Tradeoff Mode** with ruby red border `#E63946` and dark ruby background:
    - Warning Badge: `SPACE COMPLEXITY DRAWBACK`
    - Formula: `O(N²) EXTRA MEMORY ALLOCATED`
    - Callout: `Allocated 25 extra integer slots (or N × N for general input)`.
    - Interview constraint alert: `Does NOT satisfy in-place O(1) extra memory requirement!`.
- **CENTER-STAGE HERO:** Warning card highlighting the $O(N^2)$ space penalty.
- **CAUSE:** Setting up the core interview tension: Method 1 works, but uses too much memory.
- **EFFECT / MOTION:** Color shift from emerald/cyan to ruby warning glow; warning icon pulse.
- **WHAT MUST NOT APPEAR YET:** Code editor transition.
- **COMPREHENSION HOLD:** Frames 4270 .. 4325: Viewers clearly understand why we cannot stop at Method 1.
- **CLEANUP / EXIT:** Prepares handoff to code implementation.
- **PERSISTENT STATE:** Warning card firmly visible.

---

#### Anchor 25: S03_CODE_HANDOFF
- **Frame Range:** 4342 .. 4466 (144.74s .. 148.88s)
- **Spoken Text:** "Now let's translate this exact idea into code."
- **WHAT APPEARS NOW:**
  - Handoff Banner in Center Zone:
    `UP NEXT: METHOD 1 CODE IMPLEMENTATION ──►`
    `Two nested loops: for r in 0..n: for c in 0..n`
  - Dual matrices smoothly scale down slightly (0.95) and dim to prepare for Scene 04 Code Walkthrough.
- **CENTER-STAGE HERO:** Code handoff preview banner.
- **CAUSE:** Seamless narrative bridge to Scene 04.
- **EFFECT / MOTION:** Gentle forward zoom and glow on handoff banner.
- **WHAT MUST NOT APPEAR YET:** Scene 04 editor code lines.
- **COMPREHENSION HOLD:** Frames 4420 .. 4466: Clean completion of Scene 03.
- **CLEANUP / EXIT:** Scene ends at frame 4466.
- **PERSISTENT STATE:** Complete scene visual state ready for scene cut.

---

### Invariant Checks & Verification Guarantee

1. **Zero Collision Check:**
   - Top Header: Y: 36..80.
   - Matrices: Y: 170..590 (Gap between header and matrix: 90px!).
   - Center Card: X: 710..1210 (Gap to left matrix: 30px, gap to right matrix: 30px).
   - Bottom Card: Y: 630..755 (Gap to matrices: 40px!).
   - Captions: Y: 960..1010 (Gap to bottom card: 205px!).
   - **Result:** ZERO COLLISIONS across all 1920 × 1080 coordinates.

2. **Odd-Matrix Invariant:**
   - Center element `13` at `(2, 2)` maps strictly to `(2, 2)`.

3. **Course Visual Consistency:**
   - Fonts: JetBrains Mono for code/coordinates, Outfit/Inter for display labels.
   - Theme tokens: `@dsa/kit` theme (`#11251D`, `#193B2D`, `#2E5E4E`, `#F2F4F3`, `#FFD166`, `#4CC9F0`, `#52B788`, `#E63946`).
