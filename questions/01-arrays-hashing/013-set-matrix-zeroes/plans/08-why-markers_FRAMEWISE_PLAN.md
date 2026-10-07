# Scene 08 — Derive Constant-Space Optimal Storage: Framewise Scene Plan
**Question 013: Set Matrix Zeroes (LeetCode 73)**  
**Pattern 01: Arrays & Hashing**  
**Scene Name:** `08-why-markers`  
**Audio File:** `08-why-markers.mp3`  
**Total Duration:** 3037 frames @ 30fps (101.220s)  
**Strict Source of Truth:** `questions/01-arrays-hashing/013-set-matrix-zeroes/sync/08-why-markers.json` & `sync/08-why-markers.anchors.json`  

---

## 1. Scene Overview & Pedagogical Goal

Scene 08 transitions from Method 2's external 1D marker arrays ($O(M+N)$ extra space) into Method 3's optimal in-place boundary storage ($O(1)$ extra space).

Key Teaching Progression:
1. **Recap External Storage Dimensions**: `rowZero` needs $M$ slots, `colZero` needs $N$ slots.
2. **Matrix Self-Containment**: The matrix already has Column 0 ($M$ cells) and Row 0 ($N$ cells).
3. **Representation Handoff**: Instead of allocating new memory, reuse Col 0 for row markers and Row 0 for column markers.
4. **General Interior Rule**: For an interior zero at $(r, c)$, record marks by setting $matrix[r][0] = 0$ and $matrix[0][c] = 0$.
5. **The Dilemma (Overwriting Real Data)**: Row 0 and Col 0 contain original input numbers! Overwriting them destroys whether they originally had zeroes.
6. **The Corner Collision**: Cell $(0, 0)$ belongs to BOTH Row 0 and Col 0. One cell cannot store two independent boolean states!
7. **The Clean Resolution**: Save two independent boolean variables (`firstRowZero`, `firstColZero`) BEFORE modifying boundary cells. Once saved, boundaries can safely serve as marker memory.

---

## 2. Spatial Composition & Zero-Collision Invariants

- **Canvas Size:** 1920 × 1080.
- **Background:** `theme.boardBg` (`#19523C`) green chalkboard with subtle `ChalkDust`. Zero arbitrary container cards.
- **Top Header ($Y: 42..108$):**
  - Left: `● 01 · ARRAYS & HASHING` pill, `DERIVE OPTIMAL STORAGE: O(1) SPACE` pill.
  - Center: `IN-PLACE BOUNDARY REUSE` (`fonts.display`, 26px, gold/chalk).
  - Right: `LEETCODE 73`.
- **Center Stage — Matrix & Boundaries ($X: 710..1210$, $Y: 210..730$):**
  - Matrix Grid: $5 \times 5$, cell size $76\text{px} \times 76\text{px}$, gap $10\text{px}$. Composite matrix size $420\text{px} \times 420\text{px}$.
  - Centered horizontally: $X = 750..1170$.
  - Docked External Rails (Beats 1–4, Beat 8):
    - Left Rail (`rowZero`): $X: 680..730, Y: 280..700$ (5 vertical slots).
    - Top Rail (`colZero`): $X: 750..1170, Y: 210..260$ (5 horizontal slots).
  - Boundary Role Overlays:
    - Column 0 ($X: 750..826, Y: 280..700$) labeled `ROW MARKERS`.
    - Row 0 ($X: 750..1170, Y: 280..356$) labeled `COLUMN MARKERS`.
  - Corner Intersection: Cell $(0,0)$ at $X: 750, Y: 280$.
- **Boolean Status Badges ($X: 1250..1520$, $Y: 300..500$):**
  - `firstRowZero` indicator badge.
  - `firstColZero` indicator badge.
- **Bottom Callout & Interaction Zone ($X: 600..1320$, $Y: 760..860$):**
  - Compact `RoughBox` callouts with zero collisions.
  - Bottom stage boundary at $Y: 860$, preserving $> 100\text{px}$ clearance above captions at $Y: 960$.

---

## 3. Framewise Anchor Choreography (All 29 Anchors in 9-Field Schema)

### BEAT 01 — Anchor `S08_RM` [F0..F94)
- **ANCHOR:** `Row 0 needs one marker for every row.` (Words 0..7)
- **WHAT APPEARS NOW:** Left rail `rowZero` appears centered with 5 vertical slots, highlighted in cyan.
- **CENTER-STAGE HERO:** `rowZero` length = $M$.
- **CAUSE:** Narration recaps external row storage requirement.
- **EFFECT / MOTION:** Left rail slots fade in with spring.
- **WHAT MUST NOT APPEAR YET:** Matrix boundaries must not be claimed yet.
- **COMPREHENSION HOLD:** F94..F110.
- **CLEANUP / EXIT:** Keep left rail.
- **PERSISTENT STATE:** External row storage = $M$ slots.

### BEAT 02 — Anchor `S08_M` [F110..F146)
- **ANCHOR:** `That is m cells.` (Words 8..11)
- **WHAT APPEARS NOW:** Chip above left rail: `M MARKER CELLS`.
- **CENTER-STAGE HERO:** $M$-cell row marker storage.
- **CAUSE:** Narration quantifies row storage.
- **EFFECT / MOTION:** Chip pulses gently.
- **WHAT MUST NOT APPEAR YET:** Col 0 reuse not mentioned yet.
- **COMPREHENSION HOLD:** F146..F156.
- **CLEANUP / EXIT:** Keep chip and rail.
- **PERSISTENT STATE:** Row cost = $O(M)$.

### BEAT 03 — Anchor `S08_CN` [F156..F243)
- **ANCHOR:** `colZero needs one marker for every column.` (Words 12..19)
- **WHAT APPEARS NOW:** Top rail `colZero` appears with 5 horizontal slots, highlighted in good green.
- **CENTER-STAGE HERO:** `colZero` length = $N$.
- **CAUSE:** Narration recaps external column storage requirement.
- **EFFECT / MOTION:** Top rail springs into position.
- **WHAT MUST NOT APPEAR YET:** Row 0 reuse not mentioned yet.
- **COMPREHENSION HOLD:** F243..F259.
- **CLEANUP / EXIT:** Keep both rails.
- **PERSISTENT STATE:** External col storage = $N$ slots.

### BEAT 04 — Anchor `S08_N` [F259..F293)
- **ANCHOR:** `That is n cells.` (Words 20..23)
- **WHAT APPEARS NOW:** Chip above top rail: `N MARKER CELLS`. Total memory badge `O(M + N)` visible.
- **CENTER-STAGE HERO:** $N$-cell column marker storage.
- **CAUSE:** Narration quantifies col storage.
- **EFFECT / MOTION:** Combined memory badge highlighted.
- **WHAT MUST NOT APPEAR YET:** Matrix input cells.
- **COMPREHENSION HOLD:** F293..F314.
- **CLEANUP / EXIT:** Prepare matrix entrance.
- **PERSISTENT STATE:** External total = $M + N$ cells.

### BEAT 05 — Anchor `S08_MATRIX` [F314..F391)
- **ANCHOR:** `But our matrix already has something interesting.` (Words 24..30)
- **WHAT APPEARS NOW:** The master $5 \times 5$ matrix appears at center stage with all 25 cells visible.
- **CENTER-STAGE HERO:** Master matrix.
- **CAUSE:** Narration redirects attention to input structure.
- **EFFECT / MOTION:** Rails dim slightly; matrix fades in with chalkboard grid lines.
- **WHAT MUST NOT APPEAR YET:** Do not single out Row 0 or Col 0 yet.
- **COMPREHENSION HOLD:** F391..F405.
- **CLEANUP / EXIT:** Keep matrix hero.
- **PERSISTENT STATE:** Matrix active at center stage.

### BEAT 06 — Anchor `S08_FIRSTCOL` [F405..F505)
- **ANCHOR:** `The first column already has one cell for every row.` (Words 31..40)
- **WHAT APPEARS NOW:** Column 0 cells $(0,0)..(4,0)$ highlighted in bright cyan outline.
- **CENTER-STAGE HERO:** First column ($M$ cells).
- **CAUSE:** Narration observes Col 0 has exactly $M$ cells.
- **EFFECT / MOTION:** Vertical stroke animation outlining Column 0.
- **WHAT MUST NOT APPEAR YET:** First row not highlighted yet.
- **COMPREHENSION HOLD:** F505..F520.
- **CLEANUP / EXIT:** Keep Col 0 highlighted.
- **PERSISTENT STATE:** Column 0 identified as $M$ cells.

### BEAT 07 — Anchor `S08_FIRSTROW` [F520..F648)
- **ANCHOR:** `And the first row already has one cell for every column.` (Words 41..51)
- **WHAT APPEARS NOW:** Row 0 cells $(0,0)..(0,4)$ highlighted in bright gold outline.
- **CENTER-STAGE HERO:** First row ($N$ cells).
- **CAUSE:** Narration observes Row 0 has exactly $N$ cells.
- **EFFECT / MOTION:** Horizontal stroke animation outlining Row 0.
- **WHAT MUST NOT APPEAR YET:** Do not erase external arrays yet.
- **COMPREHENSION HOLD:** F648..F659.
- **CLEANUP / EXIT:** Both boundaries illuminated.
- **PERSISTENT STATE:** Row 0 ($N$ cells) and Col 0 ($M$ cells) highlighted.

### BEAT 08 — Anchor `S08_INSTEAD` [F659..F720)
- **ANCHOR:** `So instead of creating two new arrays,` (Words 52..58)
- **WHAT APPEARS NOW:** External rails pulse and begin ghosting (transparency drops to 0.4); comparison arrows link rails to boundaries.
- **CENTER-STAGE HERO:** External arrays as redundant duplicates.
- **CAUSE:** Narration compares external allocation with matrix borders.
- **EFFECT / MOTION:** Ghosting animation on external rails.
- **WHAT MUST NOT APPEAR YET:** Do not delete rails completely yet.
- **COMPREHENSION HOLD:** F720..F739.
- **CLEANUP / EXIT:** Fade out comparison arrows.
- **PERSISTENT STATE:** Rails identified as redundant.

### BEAT 09 — Anchor `S08_REUSE` [F739..F787)
- **ANCHOR:** `what if we reuse those cells?` (Words 59..64)
- **WHAT APPEARS NOW:** External rails project inwards toward Col 0 and Row 0; callout: `💡 WHAT IF WE REUSE MATRIX BOUNDARIES?`.
- **CENTER-STAGE HERO:** Boundary reuse concept.
- **CAUSE:** Core algorithmic proposal.
- **EFFECT / MOTION:** Converging glow towards matrix borders.
- **WHAT MUST NOT APPEAR YET:** Role labels not locked yet.
- **COMPREHENSION HOLD:** F787..F787.
- **CLEANUP / EXIT:** Dismiss callout.
- **PERSISTENT STATE:** Boundary reuse proposed.

### BEAT 10 — Anchor `S08_FCROLE` [F787..F857)
- **ANCHOR:** `The first column can store row markers.` (Words 65..71)
- **WHAT APPEARS NOW:** Label `ROW MARKERS` docks firmly above Column 0; external `rowZero` rail fades out completely.
- **CENTER-STAGE HERO:** Col 0 as row marker storage.
- **CAUSE:** Narration assigns row marker role to Col 0.
- **EFFECT / MOTION:** Left rail dissolves; Col 0 adopts marker identity.
- **WHAT MUST NOT APPEAR YET:** Top rail not dissolved yet.
- **COMPREHENSION HOLD:** F857..F871.
- **CLEANUP / EXIT:** Left rail gone.
- **PERSISTENT STATE:** Col 0 = row markers.

### BEAT 11 — Anchor `S08_FRROLE` [F871..F931)
- **ANCHOR:** `And the first row can store column markers.` (Words 72..79)
- **WHAT APPEARS NOW:** Label `COLUMN MARKERS` docks to the right of Row 0; external `colZero` rail fades out completely.
- **CENTER-STAGE HERO:** Row 0 as column marker storage.
- **CAUSE:** Narration assigns col marker role to Row 0.
- **EFFECT / MOTION:** Top rail dissolves; Row 0 adopts marker identity.
- **WHAT MUST NOT APPEAR YET:** No zero writes yet.
- **COMPREHENSION HOLD:** F931..F953.
- **CLEANUP / EXIT:** Top rail gone.
- **PERSISTENT STATE:** Row 0 = col markers, Col 0 = row markers.

### BEAT 12 — Anchor `S08_INTERIOR` [F953..F1052)
- **ANCHOR:** `For an interior zero at row r, column c,` (Words 80..88)
- **WHAT APPEARS NOW:** Symbolic interior cell $(r, c)$ spotlighted at $(3, 3)$ with pulsing pivot gold border.
- **CENTER-STAGE HERO:** Symbolic interior zero at $(r, c)$.
- **CAUSE:** General encoding rule demonstrated.
- **EFFECT / MOTION:** Cell $(3, 3)$ highlights with `matrix[r][c] == 0`.
- **WHAT MUST NOT APPEAR YET:** No rays projected yet.
- **COMPREHENSION HOLD:** F1052..F1067.
- **CLEANUP / EXIT:** Keep interior cell highlighted.
- **PERSISTENT STATE:** Active interior zero $(r, c)$.

### BEAT 13 — Anchor `S08_R0WRITE` [F1067..F1172)
- **ANCHOR:** `we can write zero at matrix[r][0]` (Words 89..95)
- **WHAT APPEARS NOW:** Horizontal dashed projection ray shoots left from $(r,c)$ to $(r,0)$; destination cell $(r,0)$ turns to `0`.
- **CENTER-STAGE HERO:** Boundary cell $matrix[r][0]$.
- **CAUSE:** Marking row zero in boundary memory.
- **EFFECT / MOTION:** Projection beam traces left; cell value changes to `0`.
- **WHAT MUST NOT APPEAR YET:** Column projection ray not drawn yet.
- **COMPREHENSION HOLD:** F1172..F1172.
- **CLEANUP / EXIT:** Dim ray.
- **PERSISTENT STATE:** $matrix[r][0] = 0$.

### BEAT 14 — Anchor `S08_MARKROW` [F1172..F1208)
- **ANCHOR:** `to mark the row,` (Words 96..99)
- **WHAT APPEARS NOW:** Tag attached to $(r, 0)$: `ROW r MUST ZERO`.
- **CENTER-STAGE HERO:** Row marker encoding meaning.
- **CAUSE:** Narration explains semantic role of $matrix[r][0] = 0$.
- **EFFECT / MOTION:** Badge pops in near $(r, 0)$.
- **WHAT MUST NOT APPEAR YET:** Column marker not written yet.
- **COMPREHENSION HOLD:** F1208..F1227.
- **CLEANUP / EXIT:** Fade tag.
- **PERSISTENT STATE:** Row $r$ marked.

### BEAT 15 — Anchor `S08_0CWRITE` [F1227..F1292)
- **ANCHOR:** `and matrix[0][c]` (Words 100..103)
- **WHAT APPEARS NOW:** Vertical dashed projection ray shoots up from $(r,c)$ to $(0,c)$; destination cell $(0,c)$ turns to `0`.
- **CENTER-STAGE HERO:** Boundary cell $matrix[0][c]$.
- **CAUSE:** Marking col zero in boundary memory.
- **EFFECT / MOTION:** Projection beam traces up; cell value changes to `0`.
- **WHAT MUST NOT APPEAR YET:** No mutation of rest of matrix.
- **COMPREHENSION HOLD:** F1292..F1303.
- **CLEANUP / EXIT:** Dim ray.
- **PERSISTENT STATE:** $matrix[0][c] = 0$.

### BEAT 16 — Anchor `S08_MARKCOL` [F1303..F1330)
- **ANCHOR:** `to mark the column.` (Words 104..107)
- **WHAT APPEARS NOW:** Tag attached to $(0, c)$: `COL c MUST ZERO`.
- **CENTER-STAGE HERO:** Column marker encoding meaning.
- **CAUSE:** Narration explains semantic role of $matrix[0][c] = 0$.
- **EFFECT / MOTION:** Badge pops in near $(0, c)$.
- **WHAT MUST NOT APPEAR YET:** Do not claim algorithm is complete.
- **COMPREHENSION HOLD:** F1330..F1349.
- **CLEANUP / EXIT:** Clear rays and tags; reset symbolic cell.
- **PERSISTENT STATE:** Boundary encoding established.

### BEAT 17 — Anchor `S08_REMOVE` [F1349..F1415)
- **ANCHOR:** `That removes the external marker arrays.` (Words 108..113)
- **WHAT APPEARS NOW:** Badge below matrix: `✨ ZERO EXTERNAL ARRAYS ALLOCATED`.
- **CENTER-STAGE HERO:** Self-contained matrix storage.
- **CAUSE:** Recap memory savings.
- **EFFECT / MOTION:** Badge expands smoothly.
- **WHAT MUST NOT APPEAR YET:** Do not reveal edge-case solution yet.
- **COMPREHENSION HOLD:** F1415..F1433.
- **CLEANUP / EXIT:** Prepare conflict transition.
- **PERSISTENT STATE:** External arrays gone.

### BEAT 18 — Anchor `S08_PROBLEM` [F1433..F1472)
- **ANCHOR:** `But there is one problem.` (Words 114..118)
- **WHAT APPEARS NOW:** Warning badge appears: `⚠️ BUT THERE IS ONE CRITICAL PROBLEM`. Amber border pulses around boundaries.
- **CENTER-STAGE HERO:** Boundary reuse conflict.
- **CAUSE:** Introduce complication.
- **EFFECT / MOTION:** Amber warning aura pulses around Row 0 and Col 0.
- **WHAT MUST NOT APPEAR YET:** Do not spoil the booleans yet.
- **COMPREHENSION HOLD:** F1472..F1480.
- **CLEANUP / EXIT:** Keep warning state.
- **PERSISTENT STATE:** Complication introduced.

### BEAT 19 — Anchor `S08_REALDATA` [F1480..F1573)
- **ANCHOR:** `The first row and first column are still real data.` (Words 119..128)
- **WHAT APPEARS NOW:** Original numbers in Row 0 $[1, 2, 0, 4, 5]$ and Col 0 $[1, 6, 0, 16, 21]$ illuminate with `REAL INPUT DATA` callout.
- **CENTER-STAGE HERO:** Original boundary values.
- **CAUSE:** Narration emphasizes that borders are part of problem input.
- **EFFECT / MOTION:** Boundary numbers glow brightly.
- **WHAT MUST NOT APPEAR YET:** No overwrite yet.
- **COMPREHENSION HOLD:** F1573..F1584.
- **CLEANUP / EXIT:** Keep boundary values prominent.
- **PERSISTENT STATE:** Boundaries recognized as real input data.

### BEAT 20 — Anchor `S08_DESTROY` [F1584..F1813)
- **ANCHOR:** `If we start using them as memory, we may destroy information about whether they originally contained a zero.` (Words 129..146)
- **WHAT APPEARS NOW:** Demonstration overwrite on cell $(0, 3)$: original value `4` turns into `0`, original value turns into ghost with red strike-through, tag: `ORIGINAL VALUE LOST!`. Reverts immediately.
- **CENTER-STAGE HERO:** Lost boundary history risk.
- **CAUSE:** Visualizing catastrophic information loss.
- **EFFECT / MOTION:** Overwrite simulation and immediate reset.
- **WHAT MUST NOT APPEAR YET:** Do not reveal flags before corner analysis.
- **COMPREHENSION HOLD:** F1813..F1829.
- **CLEANUP / EXIT:** Reset cell $(0, 3)$ to original value `4`.
- **PERSISTENT STATE:** Need to preserve original boundary history.

### BEAT 21 — Anchor `S08_CORNER` [F1829..F2011)
- **ANCHOR:** `And the corner cell matrix[0][0] belongs to both boundaries.` (Words 147..157)
- **WHAT APPEARS NOW:** Spotlight zooms onto cell $(0, 0)$: Row 0 horizontal bar and Col 0 vertical bar intersect right on $(0, 0)$. Two directional arrows point into $(0, 0)$.
- **CENTER-STAGE HERO:** Corner cell $matrix[0][0]$.
- **CAUSE:** Dual ownership collision.
- **EFFECT / MOTION:** Intersecting crosshair beams meet at $(0, 0)$.
- **WHAT MUST NOT APPEAR YET:** Do not assign either flag to $(0,0)$.
- **COMPREHENSION HOLD:** F2011..F2030.
- **CLEANUP / EXIT:** Maintain focus on $(0, 0)$.
- **PERSISTENT STATE:** Corner cell is shared by both boundaries.

### BEAT 22 — Anchor `S08_ONECELL` [F2030..F2272)
- **ANCHOR:** `Once we reuse that boundary storage, one cell cannot independently preserve both original boundary facts.` (Words 158..172)
- **WHAT APPEARS NOW:** Split callout flanking $(0,0)$: `Row 0 had zero?` (Top) vs `Col 0 had zero?` (Left). Tag: `1 CELL CANNOT STORE 2 FACTS!`.
- **CENTER-STAGE HERO:** Information pigeonhole conflict.
- **CAUSE:** Proving mathematical insufficiency of single corner cell.
- **EFFECT / MOTION:** Two question icons pulse around $(0, 0)$.
- **WHAT MUST NOT APPEAR YET:** Do not show boolean variables yet.
- **COMPREHENSION HOLD:** F2272..F2290.
- **CLEANUP / EXIT:** Fade question icons.
- **PERSISTENT STATE:** Two separate facts required.

### BEAT 23 — Anchor `S08_BEFORE` [F2290..F2435)
- **ANCHOR:** `So before we reuse the boundaries, we save those two facts separately.` (Words 173..184)
- **WHAT APPEARS NOW:** Two boolean placeholder boxes slide in to the right of the matrix: `[ ? ] firstRowZero` and `[ ? ] firstColZero`.
- **CENTER-STAGE HERO:** Two separate boolean facts.
- **CAUSE:** Strategic solution: externalize only $2$ booleans ($O(1)$ extra space).
- **EFFECT / MOTION:** Clean spring entrance for two flag containers.
- **WHAT MUST NOT APPEAR YET:** Values `True`/`False` not assigned yet.
- **COMPREHENSION HOLD:** F2435..F2435.
- **CLEANUP / EXIT:** Keep flag containers.
- **PERSISTENT STATE:** Two boolean slots initialized.

### BEAT 24 — Anchor `S08_QROW` [F2435..F2531)
- **ANCHOR:** `Did the original first row contain a zero?` (Words 185..192)
- **WHAT APPEARS NOW:** Golden scan beam traverses Row 0 $[1, 2, 0, 4, 5]$; halts at cell $(0, 2)$ where `val == 0`.
- **CENTER-STAGE HERO:** Row 0 zero discovery question.
- **CAUSE:** Evaluating original row 0 state.
- **EFFECT / MOTION:** Scan beam sweeps left-to-right, stops and rings $(0, 2)$ in gold.
- **WHAT MUST NOT APPEAR YET:** Do not evaluate Col 0 yet.
- **COMPREHENSION HOLD:** F2531..F2553.
- **CLEANUP / EXIT:** Keep cell $(0, 2)$ highlighted.
- **PERSISTENT STATE:** Row 0 zero found.

### BEAT 25 — Anchor `S08_FRFLAG` [F2553..F2614)
- **ANCHOR:** `Store that in firstRowZero.` (Words 193..198)
- **WHAT APPEARS NOW:** Connection ray links $(0, 2)$ to top flag container; `firstRowZero` updates to `True` (or checked).
- **CENTER-STAGE HERO:** `firstRowZero` flag.
- **CAUSE:** Locking row 0 history.
- **EFFECT / MOTION:** Ray draws to badge; badge glows good green with `firstRowZero = True`.
- **WHAT MUST NOT APPEAR YET:** `firstColZero` still pending.
- **COMPREHENSION HOLD:** F2614..F2631.
- **CLEANUP / EXIT:** Clear ray.
- **PERSISTENT STATE:** `firstRowZero = True` locked.

### BEAT 26 — Anchor `S08_QCOL` [F2631..F2732)
- **ANCHOR:** `Did the original first column contain a zero?` (Words 199..206)
- **WHAT APPEARS NOW:** Cyan scan beam traverses Column 0 $[1, 6, 0, 16, 21]$; halts at cell $(2, 0)$ where `val == 0`.
- **CENTER-STAGE HERO:** Col 0 zero discovery question.
- **CAUSE:** Evaluating original col 0 state.
- **EFFECT / MOTION:** Scan beam sweeps top-to-bottom, stops and rings $(2, 0)$ in cyan.
- **WHAT MUST NOT APPEAR YET:** Do not modify any cells.
- **COMPREHENSION HOLD:** F2732..F2762.
- **CLEANUP / EXIT:** Keep cell $(2, 0)$ highlighted.
- **PERSISTENT STATE:** Col 0 zero found.

### BEAT 27 — Anchor `S08_FCFLAG` [F2762..F2834)
- **ANCHOR:** `Store that in firstColZero.` (Words 207..212)
- **WHAT APPEARS NOW:** Connection ray links $(2, 0)$ to bottom flag container; `firstColZero` updates to `True`.
- **CENTER-STAGE HERO:** `firstColZero` flag.
- **CAUSE:** Locking col 0 history.
- **EFFECT / MOTION:** Ray draws to badge; badge glows good green with `firstColZero = True`.
- **WHAT MUST NOT APPEAR YET:** No premature full trace.
- **COMPREHENSION HOLD:** F2834..F2848.
- **CLEANUP / EXIT:** Clear ray.
- **PERSISTENT STATE:** Both `firstRowZero` and `firstColZero` locked.

### BEAT 28 — Anchor `S08_SAFE` [F2848..F2912)
- **ANCHOR:** `Now the boundary history is safe.` (Words 213..218)
- **WHAT APPEARS NOW:** Green shield icon and callout: `🛡️ BOUNDARY HISTORY PRESERVED SAFELY`. Both flags pulse with confirmed status.
- **CENTER-STAGE HERO:** Two preserved flags.
- **CAUSE:** Conflict successfully mitigated.
- **EFFECT / MOTION:** Shield badge pops up; matrix boundary glows with confidence.
- **WHAT MUST NOT APPEAR YET:** Do not start pass 2.
- **COMPREHENSION HOLD:** F2912..F2940.
- **CLEANUP / EXIT:** Dismiss shield.
- **PERSISTENT STATE:** Safety established.

### BEAT 29 — Anchor `S08_MEMORY` [F2940..F3037)
- **ANCHOR:** `And the matrix can become its own marker memory.` (Words 219..227)
- **WHAT APPEARS NOW:** Final grand summary:
  - Matrix Col 0 boldly branded: `ROW MARKERS (M slots)`.
  - Matrix Row 0 boldly branded: `COLUMN MARKERS (N slots)`.
  - Two flags locked: `firstRowZero` & `firstColZero`.
  - Bottom Master Pill: `TOTAL EXTRA SPACE: O(1) CONSTANT MEMORY!`.
- **CENTER-STAGE HERO:** Self-contained in-place matrix memory model.
- **CAUSE:** Climax of derivation.
- **EFFECT / MOTION:** Full harmonious glow across matrix borders and flags.
- **WHAT MUST NOT APPEAR YET:** Execution of trace (Scene 10 owns exact trace).
- **COMPREHENSION HOLD:** F3010..F3037.
- **CLEANUP / EXIT:** Hold final verified frame to end.
- **PERSISTENT STATE:** Optimal storage architecture derived and ready for Scene 09 & 10.

---

## 4. Verification & QA Checklist
- [x] Total frames match sync exactly: 3037 frames @ 30fps.
- [x] All 29 anchors documented with complete 9-field schema.
- [x] Zero collisions: elements stay within $Y: 140..860$, leaving $> 100\text{px}$ buffer above captions ($Y: 960$).
- [x] No spoilers: flags, role transfers, and overwrites appear strictly when narrated.
- [x] Kit-only styling: `theme.boardBg`, `RoughBox`, `ChalkText`, `Captions`.
