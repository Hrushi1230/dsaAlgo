# Scene 06 — Method 2 Trace (Row & Column Marker Arrays): Framewise Scene Plan
**Question 013: Set Matrix Zeroes (LeetCode 73)**  
**Pattern 01: Arrays & Hashing**  
**Scene Name:** `06-markers-trace`  
**Audio File:** `06-markers-trace.mp3`  
**Total Duration:** 3581 frames @ 30fps (119.380s)  
**Strict Source of Truth:** `questions/01-arrays-hashing/013-set-matrix-zeroes/sync/06-markers-trace.json` & `sync/06-markers-trace.anchors.json`  

---

## 1. Scene Overview & Pedagogical Goal

Scene 06 is the full execution of **Method 2 (Row and Column Marker Arrays)** on the 5×5 Master Matrix.  
It replaces the $O(M \times N)$ full-matrix copy with two 1D rails and demonstrates the **Projection Rails** visual paradigm:

1. **Pass 1 — Discovery Scan ($F329..F1172$):**
   - Two 1D marker arrays (`rowZero` on left, `colZero` on top) initialized to all `False`.
   - Matrix is scanned cell by cell. When an original zero is detected:
     - `(0, 2)`: projects out to mark `rowZero[0] = True` and `colZero[2] = True`.
     - `(2, 0)`: projects out to mark `rowZero[2] = True` and `colZero[0] = True`.
     - `(3, 3)`: projects out to mark `rowZero[3] = True` and `colZero[3] = True`.
   - Discovery concludes with verified locked marker states:
     - `rowZero = [T, F, T, T, F]`
     - `colZero = [T, F, T, T, F]`
2. **Pass 2 — Application / Mutation ($F1519..F3169$):**
   - Information flows **back** into the matrix using the fundamental rule:  
     `matrix[r][c] = 0` if `rowZero[r] == True` or `colZero[c] == True`.
   - **Row 1 (`rowZero[1] == False`):**
     - `(1, 0)`: `colZero[0] == True` $\to 6 \to 0$.
     - `(1, 1)`: `colZero[1] == False` $\to 7$ stays.
     - `(1, 2)`: `colZero[2] == True` $\to 8 \to 0$.
     - `(1, 3)`: `colZero[3] == True` $\to 9 \to 0$.
     - `(1, 4)`: `colZero[4] == False` $\to 10$ stays.
   - **Row 2 (`rowZero[2] == True`):**
     - Whole row rule: `rowZero[2]` is True, so all cells in row 2 become 0 simultaneously.
   - **Row 3 (`rowZero[3] == True`):**
     - Whole row rule: `rowZero[3]` is True, so all cells in row 3 become 0 simultaneously.
   - **Row 4 (`rowZero[4] == False`):**
     - `(4, 0)`: already 0 from col 0.
     - `(4, 1)`: `colZero[1] == False` $\to 22$ stays.
     - `(4, 2)`: `colZero[2] == True` $\to 23 \to 0$.
     - `(4, 3)`: `colZero[3] == True` $\to 24 \to 0$.
     - `(4, 4)`: `colZero[4] == False` $\to 25$ stays.
3. **Summary & Verification ($F3189..F3581$):**
   - Correct result achieved in-place using only $O(M + N)$ auxiliary memory.
   - Direct handoff to Scene 07 (Method 2 Code).

---

## 2. Spatial Composition & Zero-Collision Invariants

- **Canvas Size:** 1920 × 1080.
- **Background:** Full-frame dark green chalkboard (`theme.boardBg` $\approx$ `#18523d`) with subtle chalk dust. **Zero AI-slop dark panels.**
- **Top Header:** $Y: 42..108$ (`fonts.display`, 36px title, category pill `01 · ARRAYS & HASHING`, method badge `METHOD 2 · 1D MARKER ARRAYS TRACE`).
- **Top Status Pill:** $X: 760..1160, Y: 130..190$. Compact `@dsa/kit` `RoughBox` displaying active pass status (`PASS 1: DISCOVERY SCAN` / `PASS 2: APPLY ZEROES`).
- **Center Stage — Matrix & Docked 1D Rails ($X: 715..1205$, $Y: 235..725$):**
  - **Horizontal Midpoint:** $X = 960$ perfectly centers the composite structure.
  - **Master 5×5 Matrix:** $X: 785..1205, Y: 305..725$.
    - Cell size: $76\text{px} \times 76\text{px}$, gap: $10\text{px}$. Total matrix: $420\text{px} \times 420\text{px}$.
  - **`colZero` Rail (Top):** $X: 785..1205, Y: 235..285$.
    - 5 horizontal slots aligned with columns $0..4$, index labels $[0]..[4]$ above.
  - **`rowZero` Rail (Left):** $X: 715..765, Y: 305..725$.
    - 5 vertical slots aligned with rows $0..4$, index labels $[0]..[4]$ to left.
- **Bottom Interaction Zone ($X: 660..1260$, $Y: 760..860$):**
  - Compact `@dsa/kit` `RoughBox` decision cards and active rule chips.
  - Height: $70\text{px} - 90\text{px}$.
- **Bottom Clearance Invariant:**
  - Callouts stop at $Y: 860$. Captions sit at $Y: 960..1040$.
  - Clear vertical buffer: $960 - 860 = 100\text{px}$ ($\ge 60\text{px}$ invariant preserved).
- **Top Clearance Invariant:**
  - Rails start at $Y: 235$, leaving $235 - 190 = 45\text{px}$ clear buffer below status pill, and status pill has $130 - 108 = 22\text{px}$ clear margin below header.

---

## 3. Mandatory Framewise Anchor Plan (35 Anchors)

### Anchor 1: `S06_CREATE_ARRAYS` (F0..F65, 66 frames)
- **ANCHOR:** `S06_CREATE_ARRAYS` (Words 0-4, "We create two marker arrays.")
- **WHAT APPEARS NOW:**
  - Green chalkboard, top header: `METHOD 2 · MARKER ARRAYS TRACE`.
  - Centered 5×5 Matrix is visible at $X: 785, Y: 305$.
  - Empty `rowZero` rail on left ($X: 715$) and `colZero` rail on top ($Y: 235$) enter with smooth spring.
- **CENTER-STAGE HERO:** Two empty 1D marker rails docking around the centered matrix.
- **CAUSE:** Narration introduces the two marker arrays.
- **EFFECT / MOTION:** Rails slide into position and dock seamlessly.
- **WHAT MUST NOT APPEAR YET:** True/False values, scanning pointer, or spoilers.
- **COMPREHENSION HOLD:** Viewer observes the matrix framed by 1D marker tracks.
- **CLEANUP / EXIT:** Rails lock into docked positions.
- **PERSISTENT STATE:** Matrix and empty rails visible.

---

### Anchor 2: `S06_ROWZERO_DEF` (F73..F154, 82 frames)
- **ANCHOR:** `S06_ROWZERO_DEF` (Words 5-12, "Row 0 has one boolean for every row.")
- **WHAT APPEARS NOW:**
  - `rowZero` rail highlights with amber border (`theme.pivot`).
  - Small chalk label to left of rail: `rowZero [M = 5]`.
  - Row slots $0..4$ flash subtle bracket outlines.
- **CENTER-STAGE HERO:** Vertical `rowZero` rail.
- **CAUSE:** Defining the row marker array.
- **EFFECT / MOTION:** Border glows in amber; slots expand slightly (`1.05x`).
- **WHAT MUST NOT APPEAR YET:** `colZero` definition or values.
- **COMPREHENSION HOLD:** 1 boolean flag corresponding to each row.
- **CLEANUP / EXIT:** Amber glow softens.
- **PERSISTENT STATE:** `rowZero` definition established.

---

### Anchor 3: `S06_COLZERO_DEF` (F166..F241, 76 frames)
- **ANCHOR:** `S06_COLZERO_DEF` (Words 13-20, "Col 0 has one boolean for every column.")
- **WHAT APPEARS NOW:**
  - `colZero` rail highlights with teal border (`theme.good`).
  - Small chalk label above rail: `colZero [N = 5]`.
  - Column slots $0..4$ flash subtle bracket outlines.
- **CENTER-STAGE HERO:** Horizontal `colZero` rail.
- **CAUSE:** Defining the column marker array.
- **EFFECT / MOTION:** Border glows in teal; slots expand slightly (`1.05x`).
- **WHAT MUST NOT APPEAR YET:** Boolean initial values.
- **COMPREHENSION HOLD:** 1 boolean flag corresponding to each column.
- **CLEANUP / EXIT:** Teal glow softens.
- **PERSISTENT STATE:** Both marker rails defined.

---

### Anchor 4: `S06_INIT_FALSE` (F259..F319, 61 frames)
- **ANCHOR:** `S06_INIT_FALSE` (Words 21-24, "Initially, everything is false.")
- **WHAT APPEARS NOW:**
  - All 5 slots in `rowZero` display `F` in muted chalk text.
  - All 5 slots in `colZero` display `F` in muted chalk text.
  - Small status pill below matrix: `Initial State: All markers = False`.
- **CENTER-STAGE HERO:** Marker rails populated with `F`.
- **CAUSE:** Setting baseline algorithm state before matrix scan.
- **EFFECT / MOTION:** `F` characters pop in sequentially with chalk ticks.
- **WHAT MUST NOT APPEAR YET:** Matrix scanning pointer or `T` flags.
- **COMPREHENSION HOLD:** Clean false initial state.
- **CLEANUP / EXIT:** Status pill docks.
- **PERSISTENT STATE:** All 10 marker slots show `F`.

---

### Anchor 5: `S06_SCAN_MATRIX` (F329..F366, 38 frames)
- **ANCHOR:** `S06_SCAN_MATRIX` (Words 25-28, "Now scan the matrix.")
- **WHAT APPEARS NOW:**
  - Top status pill appears: `PASS 1: DISCOVERY SCAN (FIND ORIGINAL ZEROES)`.
  - Cyan scan pointer ring appears at cell $(0, 0)$.
- **CENTER-STAGE HERO:** Cyan scan pointer on matrix.
- **CAUSE:** Commencing Pass 1 traversal.
- **EFFECT / MOTION:** Pointer enters with spring and begins scanning across row 0.
- **WHAT MUST NOT APPEAR YET:** Premature projection rays.
- **COMPREHENSION HOLD:** Matrix traversal begins.
- **CLEANUP / EXIT:** Pointer steps through $(0, 0)$ and $(0, 1)$.
- **PERSISTENT STATE:** Pass 1 active, pointer scanning.

---

### Anchor 6: `S06_Z1_FOUND` (F382..F495, 114 frames)
- **ANCHOR:** `S06_Z1_FOUND` (Words 29-38, "Our first original 0 is at row 0, column 2.")
- **WHAT APPEARS NOW:**
  - Scan pointer locks onto cell $(0, 2)$ containing `0`.
  - Cell $(0, 2)$ flashes bright amber beacon (`theme.pivot`).
  - Chip below matrix: `Found original 0 at (0, 2)`.
- **CENTER-STAGE HERO:** Cell $(0, 2)$ in centered matrix.
- **CAUSE:** First original zero encountered.
- **EFFECT / MOTION:** Cell pulses with radial energy ripple; pointer rings expand.
- **WHAT MUST NOT APPEAR YET:** Marker updates to True.
- **COMPREHENSION HOLD:** Clear identification of zero at $(0, 2)$.
- **CLEANUP / EXIT:** Pointer locks on cell.
- **PERSISTENT STATE:** Cell $(0, 2)$ highlighted as active source.

---

### Anchor 7: `S06_Z1_MARK_ROW0` (F503..F570, 68 frames)
- **ANCHOR:** `S06_Z1_MARK_ROW0` (Words 39-43, "So mark row 0, true,")
- **WHAT APPEARS NOW:**
  - Horizontal dotted chalk ray (`RoughLine`) shoots left from cell $(0, 2)$ to `rowZero[0]`.
  - `rowZero[0]` slot stamps: `F ➔ T` (True) with golden flash.
- **CENTER-STAGE HERO:** Leftward ray and `rowZero[0]` turning `T`.
- **CAUSE:** Recording row 0 zero presence.
- **EFFECT / MOTION:** Ray draws leftward; slot scales (`1.15x`) and stamps `T`.
- **WHAT MUST NOT APPEAR YET:** Column 2 marker update.
- **COMPREHENSION HOLD:** `rowZero[0]` is now locked to `True`.
- **CLEANUP / EXIT:** Ray fades; slot holds in bright gold.
- **PERSISTENT STATE:** `rowZero[0] = True`.

---

### Anchor 8: `S06_Z1_MARK_COL2` (F587..F639, 53 frames)
- **ANCHOR:** `S06_Z1_MARK_COL2` (Words 44-47, "and column 2, true.")
- **WHAT APPEARS NOW:**
  - Vertical dotted chalk ray (`RoughLine`) shoots upward from cell $(0, 2)$ to `colZero[2]`.
  - `colZero[2]` slot stamps: `F ➔ T` (True) with teal flash (`theme.good`).
- **CENTER-STAGE HERO:** Upward ray and `colZero[2]` turning `T`.
- **CAUSE:** Recording column 2 zero presence.
- **EFFECT / MOTION:** Ray draws upward; slot scales (`1.15x`) and stamps `T`.
- **WHAT MUST NOT APPEAR YET:** Next zero scan.
- **COMPREHENSION HOLD:** Cell $(0, 2)$ has marked both row 0 and column 2.
- **CLEANUP / EXIT:** Ray fades; both markers shine.
- **PERSISTENT STATE:** `rowZero[0] = True`, `colZero[2] = True`.

---

### Anchor 9: `S06_Z2_FOUND` (F658..F760, 103 frames)
- **ANCHOR:** `S06_Z2_FOUND` (Words 48-57, "The next original 0 is at row 2, column 0.")
- **WHAT APPEARS NOW:**
  - Pointer scans through row 1 and arrives at cell $(2, 0)$ containing `0`.
  - Cell $(2, 0)$ flashes bright amber beacon.
  - Chip below matrix updates: `Found original 0 at (2, 0)`.
- **CENTER-STAGE HERO:** Cell $(2, 0)$ in centered matrix.
- **CAUSE:** Second original zero encountered.
- **EFFECT / MOTION:** Cell pulses with golden halo; pointer locks.
- **WHAT MUST NOT APPEAR YET:** Marker updates to True.
- **COMPREHENSION HOLD:** Clear identification of zero at $(2, 0)$.
- **CLEANUP / EXIT:** Pointer settles.
- **PERSISTENT STATE:** Cell $(2, 0)$ highlighted as active source.

---

### Anchor 10: `S06_Z2_MARK_ROW2` (F774..F822, 49 frames)
- **ANCHOR:** `S06_Z2_MARK_ROW2` (Words 58-61, "So row 2, true,")
- **WHAT APPEARS NOW:**
  - Horizontal dotted chalk ray shoots left from cell $(2, 0)$ to `rowZero[2]`.
  - `rowZero[2]` slot stamps: `F ➔ T` (True) with golden flash.
- **CENTER-STAGE HERO:** Leftward ray and `rowZero[2]` turning `T`.
- **CAUSE:** Recording row 2 zero presence.
- **EFFECT / MOTION:** Short direct projection ray; slot stamps `T`.
- **WHAT MUST NOT APPEAR YET:** Column 0 marker update.
- **COMPREHENSION HOLD:** `rowZero[2]` is now `True`.
- **CLEANUP / EXIT:** Ray fades; slot holds in gold.
- **PERSISTENT STATE:** `rowZero[2] = True`.

---

### Anchor 11: `S06_Z2_MARK_COL0` (F836..F872, 37 frames)
- **ANCHOR:** `S06_Z2_MARK_COL0` (Words 62-64, "column 0, true.")
- **WHAT APPEARS NOW:**
  - Vertical dotted chalk ray shoots upward from cell $(2, 0)$ to `colZero[0]`.
  - `colZero[0]` slot stamps: `F ➔ T` (True) with teal flash.
- **CENTER-STAGE HERO:** Upward ray and `colZero[0]` turning `T`.
- **CAUSE:** Recording column 0 zero presence.
- **EFFECT / MOTION:** Ray draws upward along column 0; slot stamps `T`.
- **WHAT MUST NOT APPEAR YET:** Interior zero scan.
- **COMPREHENSION HOLD:** Cell $(2, 0)$ has marked row 2 and column 0.
- **CLEANUP / EXIT:** Ray fades; both markers shine.
- **PERSISTENT STATE:** `rowZero[0]=T, rowZero[2]=T, colZero[0]=T, colZero[2]=T`.

---

### Anchor 12: `S06_Z3_FOUND` (F872..F1018, 147 frames)
- **ANCHOR:** `S06_Z3_FOUND` (Words 65-75, "Then we reach the interior 0 at row 3, column 3.")
- **WHAT APPEARS NOW:**
  - Pointer advances across matrix and locks onto interior cell $(3, 3)$ containing `0`.
  - Cell $(3, 3)$ pulses with amber beacon glow.
  - Chip below matrix: `Found interior original 0 at (3, 3)`.
- **CENTER-STAGE HERO:** Cell $(3, 3)$ in centered matrix.
- **CAUSE:** Third and final original zero reached.
- **EFFECT / MOTION:** Deep radial energy ripple around cell $(3, 3)$.
- **WHAT MUST NOT APPEAR YET:** Marker updates to True.
- **COMPREHENSION HOLD:** Confirming interior zero location.
- **CLEANUP / EXIT:** Pointer locks on cell.
- **PERSISTENT STATE:** Cell $(3, 3)$ highlighted as active source.

---

### Anchor 13: `S06_Z3_MARK_ROW3` (F1025..F1076, 52 frames)
- **ANCHOR:** `S06_Z3_MARK_ROW3` (Words 76-79, "Mark row 3, true,")
- **WHAT APPEARS NOW:**
  - Horizontal dotted chalk ray shoots left from cell $(3, 3)$ to `rowZero[3]`.
  - `rowZero[3]` slot stamps: `F ➔ T` (True) with golden flash.
- **CENTER-STAGE HERO:** Leftward ray and `rowZero[3]` turning `T`.
- **CAUSE:** Recording row 3 zero presence.
- **EFFECT / MOTION:** Ray draws across row 3; slot stamps `T`.
- **WHAT MUST NOT APPEAR YET:** Column 3 marker update.
- **COMPREHENSION HOLD:** `rowZero[3]` is now `True`.
- **CLEANUP / EXIT:** Ray fades; slot holds in gold.
- **PERSISTENT STATE:** `rowZero[3] = True`.

---

### Anchor 14: `S06_Z3_MARK_COL3` (F1090..F1126, 37 frames)
- **ANCHOR:** `S06_Z3_MARK_COL3` (Words 80-82, "column 3, true.")
- **WHAT APPEARS NOW:**
  - Vertical dotted chalk ray shoots upward from cell $(3, 3)$ to `colZero[3]`.
  - `colZero[3]` slot stamps: `F ➔ T` (True) with teal flash.
- **CENTER-STAGE HERO:** Upward ray and `colZero[3]` turning `T`.
- **CAUSE:** Recording column 3 zero presence.
- **EFFECT / MOTION:** Ray draws up column 3; slot stamps `T`.
- **WHAT MUST NOT APPEAR YET:** Pass 2 application.
- **COMPREHENSION HOLD:** All 3 original zeroes have projected their coordinates.
- **CLEANUP / EXIT:** Ray fades; both markers shine.
- **PERSISTENT STATE:** `rowZero[3] = True`, `colZero[3] = True`.

---

### Anchor 15: `S06_DISCOVERY_DONE` (F1143..F1172, 30 frames)
- **ANCHOR:** `S06_DISCOVERY_DONE` (Words 83-85, "Discovery is finished.")
- **WHAT APPEARS NOW:**
  - Scan pointer gently dissolves.
  - Top status pill updates: `PASS 1 FINISHED: 3 ZEROES DISCOVERED`.
  - Green checkmark pops up below matrix.
- **CENTER-STAGE HERO:** Framed matrix with complete marker states.
- **CAUSE:** Pass 1 matrix traversal ends.
- **EFFECT / MOTION:** Pointer exits; matrix takes a calm comprehension hold.
- **WHAT MUST NOT APPEAR YET:** Premature cell zeroing.
- **COMPREHENSION HOLD:** Discovery completed non-destructively.
- **CLEANUP / EXIT:** Scan overlays cleared.
- **PERSISTENT STATE:** Locked marker rails ready for readout.

---

### Anchor 16: `S06_ROW_MARKERS_STATE` (F1191..F1332, 142 frames)
- **ANCHOR:** `S06_ROW_MARKERS_STATE` (Words 86-94, "Our row markers are true, false, true, true, false.")
- **WHAT APPEARS NOW:**
  - Vertical golden highlight sweeps down `rowZero` rail:
    - Slot 0: `T` (glows)
    - Slot 1: `F` (muted)
    - Slot 2: `T` (glows)
    - Slot 3: `T` (glows)
    - Slot 4: `F` (muted)
  - Chip below matrix: `rowZero = [True, False, True, True, False]`.
- **CENTER-STAGE HERO:** `rowZero` vertical rail.
- **CAUSE:** Spoken verification of row marker states.
- **EFFECT / MOTION:** Sequential pulse down the 5 slots synchronized with the words.
- **WHAT MUST NOT APPEAR YET:** Column sweep.
- **COMPREHENSION HOLD:** Rows 0, 2, 3 require complete zeroing.
- **CLEANUP / EXIT:** Sweep settles into steady golden glow on True slots.
- **PERSISTENT STATE:** `rowZero` state verified.

---

### Anchor 17: `S06_COL_MARKERS_STATE` (F1352..F1496, 145 frames)
- **ANCHOR:** `S06_COL_MARKERS_STATE` (Words 95-104, "And our column markers are true, false, true, true, false.")
- **WHAT APPEARS NOW:**
  - Horizontal teal highlight sweeps across `colZero` rail:
    - Slot 0: `T` (glows)
    - Slot 1: `F` (muted)
    - Slot 2: `T` (glows)
    - Slot 3: `T` (glows)
    - Slot 4: `F` (muted)
  - Chip below matrix: `colZero = [True, False, True, True, False]`.
- **CENTER-STAGE HERO:** `colZero` horizontal rail.
- **CAUSE:** Spoken verification of column marker states.
- **EFFECT / MOTION:** Sequential pulse across the 5 slots synchronized with the words.
- **WHAT MUST NOT APPEAR YET:** Pass 2 mutation.
- **COMPREHENSION HOLD:** Columns 0, 2, 3 require complete zeroing.
- **CLEANUP / EXIT:** Sweep settles into steady teal glow on True slots.
- **PERSISTENT STATE:** Both marker rails verified.

---

### Anchor 18: `S06_FLOW_BACK` (F1519..F1608, 90 frames)
- **ANCHOR:** `S06_FLOW_BACK` (Words 105-112, "Now the information flows back into the matrix.")
- **WHAT APPEARS NOW:**
  - Top status pill updates: `PASS 2: APPLY ZEROES TO MATRIX`.
  - Directional chalk arrows on marker slots reverse direction, pointing inward toward the matrix.
  - Active Rule chip below matrix: `Rule: matrix[r][c] = 0 if rowZero[r] or colZero[c] == True`.
- **CENTER-STAGE HERO:** Centered matrix with inward projection arrows.
- **CAUSE:** Commencing Pass 2 modification phase.
- **EFFECT / MOTION:** Inward arrows illuminate; rule chip pops in with spring.
- **WHAT MUST NOT APPEAR YET:** Individual cell modifications.
- **COMPREHENSION HOLD:** Visual paradigm shift: markers now drive matrix changes.
- **CLEANUP / EXIT:** Arrows settle into ambient guidance lines.
- **PERSISTENT STATE:** Pass 2 active with rule displayed.

---

### Anchor 19: `S06_ROW1_CHECK` (F1625..F1805, 181 frames)
- **ANCHOR:** `S06_ROW1_CHECK` (Words 113-127, "Take row 1. Its row marker is false, so row 1 is not completely 0.")
- **WHAT APPEARS NOW:**
  - Row 1 in matrix is framed with a subtle cyan bracket.
  - `rowZero[1]` slot highlights with an amber badge: `rowZero[1] == False`.
  - Chip below matrix: `Row 1 marker is False ➔ row is not fully zeroed; check columns individually`.
- **CENTER-STAGE HERO:** Row 1 in centered matrix and `rowZero[1]`.
- **CAUSE:** Evaluating row condition on row 1.
- **EFFECT / MOTION:** Row 1 highlights gently; pointer focuses on cell $(1, 0)$.
- **WHAT MUST NOT APPEAR YET:** Column cell updates until spoken.
- **COMPREHENSION HOLD:** Since row marker is False, each cell depends solely on its column marker.
- **CLEANUP / EXIT:** Bracket stays active across row 1.
- **PERSISTENT STATE:** Row 1 in active inspection.

---

### Anchor 20: `S06_ROW1_COL0` (F1820..F1936, 117 frames)
- **ANCHOR:** `S06_ROW1_COL0` (Words 128-138, "But column 0 is marked, so the first cell becomes 0.")
- **WHAT APPEARS NOW:**
  - Vertical teal ray extends from `colZero[0] == True` down into cell $(1, 0)$.
  - Value in cell $(1, 0)$ mutates: `6 ➔ 0` with a teal flash.
  - Chip updates: `colZero[0] == True ➔ cell (1, 0) becomes 0`.
- **CENTER-STAGE HERO:** Cell $(1, 0)$ mutating from 6 to 0.
- **CAUSE:** Column 0 marker is True.
- **EFFECT / MOTION:** Number 6 scales down, dissolves; `0` stamps in with green chalk glow.
- **WHAT MUST NOT APPEAR YET:** Cell $(1, 1)$ inspection.
- **COMPREHENSION HOLD:** Cell $(1, 0)$ is correctly zeroed by column marker.
- **CLEANUP / EXIT:** Glow settles to chalk white `0`.
- **PERSISTENT STATE:** Cell $(1, 0) = 0$.

---

### Anchor 21: `S06_ROW1_COL1` (F1949..F2036, 88 frames)
- **ANCHOR:** `S06_ROW1_COL1` (Words 139-146, "Column 1 is not marked, so 7 stays.")
- **WHAT APPEARS NOW:**
  - Pointer moves to cell $(1, 1)$ containing `7`.
  - `colZero[1]` shows `False` (muted).
  - Cell $(1, 1)$ flashes soft green shield badge: `7 STAYS`.
- **CENTER-STAGE HERO:** Cell $(1, 1)$ preserving value 7.
- **CAUSE:** Both `rowZero[1] == False` and `colZero[1] == False`.
- **EFFECT / MOTION:** Cell value 7 receives soft green checkmark ring.
- **WHAT MUST NOT APPEAR YET:** Cell $(1, 2)$ inspection.
- **COMPREHENSION HOLD:** Unmarked row and unmarked column leave value untouched.
- **CLEANUP / EXIT:** Shield ring fades; 7 remains untouched.
- **PERSISTENT STATE:** Cell $(1, 1) = 7$ preserved.

---

### Anchor 22: `S06_ROW1_COL2` (F2055..F2160, 106 frames)
- **ANCHOR:** `S06_ROW1_COL2` (Words 147-154, "Column 2 is marked, so 8 becomes 0.")
- **WHAT APPEARS NOW:**
  - Vertical teal ray extends from `colZero[2] == True` down into cell $(1, 2)$.
  - Value in cell $(1, 2)$ mutates: `8 ➔ 0` with a teal flash.
- **CENTER-STAGE HERO:** Cell $(1, 2)$ mutating from 8 to 0.
- **CAUSE:** Column 2 marker is True.
- **EFFECT / MOTION:** Number 8 dissolves; `0` stamps in with green glow.
- **WHAT MUST NOT APPEAR YET:** Cell $(1, 3)$ inspection.
- **COMPREHENSION HOLD:** Cell $(1, 2)$ is zeroed by column marker.
- **CLEANUP / EXIT:** Glow settles to white `0`.
- **PERSISTENT STATE:** Cell $(1, 2) = 0$.

---

### Anchor 23: `S06_ROW1_COL3` (F2175..F2266, 92 frames)
- **ANCHOR:** `S06_ROW1_COL3` (Words 155-162, "Column 3 is marked, so 9 becomes 0.")
- **WHAT APPEARS NOW:**
  - Vertical teal ray extends from `colZero[3] == True` down into cell $(1, 3)$.
  - Value in cell $(1, 3)$ mutates: `9 ➔ 0` with a teal flash.
- **CENTER-STAGE HERO:** Cell $(1, 3)$ mutating from 9 to 0.
- **CAUSE:** Column 3 marker is True.
- **EFFECT / MOTION:** Number 9 dissolves; `0` stamps in with green glow.
- **WHAT MUST NOT APPEAR YET:** Cell $(1, 4)$ inspection.
- **COMPREHENSION HOLD:** Cell $(1, 3)$ is zeroed by column marker.
- **CLEANUP / EXIT:** Glow settles to white `0`.
- **PERSISTENT STATE:** Cell $(1, 3) = 0$.

---

### Anchor 24: `S06_ROW1_COL4` (F2281..F2360, 80 frames)
- **ANCHOR:** `S06_ROW1_COL4` (Words 163-170, "Column 4 is not marked, so 10 stays.")
- **WHAT APPEARS NOW:**
  - Pointer moves to cell $(1, 4)$ containing `10`.
  - `colZero[4]` shows `False` (muted).
  - Cell $(1, 4)$ flashes soft green shield badge: `10 STAYS`.
- **CENTER-STAGE HERO:** Cell $(1, 4)$ preserving value 10.
- **CAUSE:** Both row 1 and column 4 markers are False.
- **EFFECT / MOTION:** Shield badge pulses; 10 remains untouched.
- **WHAT MUST NOT APPEAR YET:** Row 2 whole-row zeroing.
- **COMPREHENSION HOLD:** Row 1 complete: `[0, 7, 0, 0, 10]`.
- **CLEANUP / EXIT:** Row 1 inspection bracket clears.
- **PERSISTENT STATE:** Row 1 finalized.

---

### Anchor 25: `S06_ROW2_ALL_ZERO` (F2372..F2624, 253 frames)
- **ANCHOR:** `S06_ROW2_ALL_ZERO` (Words 171-190, "Now row 2, its row marker is true. That one fact is enough. Every cell in row 2 becomes 0.")
- **WHAT APPEARS NOW:**
  - `rowZero[2]` slot flashes intensely in Sunburst Gold (`theme.pivot`).
  - A sweeping horizontal golden wave sweeps across all 5 cells of Row 2 ($X: 785..1205$).
  - All non-zero cells in Row 2 mutate simultaneously: `[0, 12, 13, 14, 15] ➔ [0, 0, 0, 0, 0]`.
  - Chip below matrix: `⚡ rowZero[2] == True ➔ ENTIRE ROW 2 ZEROES SIMULTANEOUSLY!`.
- **CENTER-STAGE HERO:** Entire Row 2 mutating simultaneously to 0.
- **CAUSE:** `rowZero[2]` is True; individual column checks are unnecessary.
- **EFFECT / MOTION:** Fast horizontal wave sweeps left-to-right; all numbers dissolve into `0` with emerald particle sparks.
- **WHAT MUST NOT APPEAR YET:** Row 3 zeroing.
- **COMPREHENSION HOLD:** Dramatic acceleration: 1 fact zeroes all 5 cells.
- **CLEANUP / EXIT:** Row 2 settles into clean zeroes.
- **PERSISTENT STATE:** Row 2 completely zeroed.

---

### Anchor 26: `S06_ROW3_ALL_ZERO` (F2639..F2762, 124 frames)
- **ANCHOR:** `S06_ROW3_ALL_ZERO` (Words 191-202, "The same happens to row 3. Its row marker is also true.")
- **WHAT APPEARS NOW:**
  - `rowZero[3]` slot flashes in Sunburst Gold.
  - A sweeping horizontal golden wave sweeps across all 5 cells of Row 3.
  - All non-zero cells in Row 3 mutate simultaneously: `[16, 17, 18, 0, 20] ➔ [0, 0, 0, 0, 0]`.
  - Chip updates: `⚡ rowZero[3] == True ➔ ENTIRE ROW 3 ZEROES!`.
- **CENTER-STAGE HERO:** Entire Row 3 mutating simultaneously to 0.
- **CAUSE:** `rowZero[3]` is True.
- **EFFECT / MOTION:** Horizontal wave sweeps left-to-right; numbers turn to `0`.
- **WHAT MUST NOT APPEAR YET:** Row 4 inspection.
- **COMPREHENSION HOLD:** Two full rows zeroed instantly by their row markers.
- **CLEANUP / EXIT:** Row 3 settles into clean zeroes.
- **PERSISTENT STATE:** Rows 2 and 3 completely zeroed.

---

### Anchor 27: `S06_ROW4_CHECK` (F2783..F2930, 148 frames)
- **ANCHOR:** `S06_ROW4_CHECK` (Words 203-214, "Finally, row 4 is not marked. So only the marked columns change.")
- **WHAT APPEARS NOW:**
  - Row 4 in matrix is framed with cyan bracket.
  - `rowZero[4]` highlights with amber badge: `rowZero[4] == False`.
  - Chip below matrix: `Row 4 marker is False ➔ only cells with marked columns change`.
- **CENTER-STAGE HERO:** Row 4 in centered matrix.
- **CAUSE:** Evaluating row condition on row 4.
- **EFFECT / MOTION:** Row 4 bracket illuminates; pointer positions at cell $(4, 0)$.
- **WHAT MUST NOT APPEAR YET:** Individual cell values until spoken.
- **COMPREHENSION HOLD:** Cells in Row 4 depend strictly on their column flags.
- **CLEANUP / EXIT:** Prepares for cell-by-cell walkthrough of Row 4.
- **PERSISTENT STATE:** Row 4 in active inspection.

---

### Anchor 28: `S06_ROW4_22_STAYS` (F2942..F2986, 45 frames)
- **ANCHOR:** `S06_ROW4_22_STAYS` (Words 215-216, "22 survives.")
- **WHAT APPEARS NOW:**
  - Pointer focuses on cell $(4, 1)$ containing `22`.
  - Cell $(4, 1)$ flashes soft green shield badge: `22 SURVIVES`.
- **CENTER-STAGE HERO:** Cell $(4, 1)$ preserving 22.
- **CAUSE:** `colZero[1] == False`.
- **EFFECT / MOTION:** Shield badge pulses; 22 remains untouched.
- **WHAT MUST NOT APPEAR YET:** Cell $(4, 2)$ mutation.
- **COMPREHENSION HOLD:** Value 22 is preserved.
- **CLEANUP / EXIT:** Shield fades.
- **PERSISTENT STATE:** Cell $(4, 1) = 22$.

---

### Anchor 29: `S06_ROW4_23_ZERO` (F3005..F3052, 48 frames)
- **ANCHOR:** `S06_ROW4_23_ZERO` (Words 217-219, "23 becomes 0.")
- **WHAT APPEARS NOW:**
  - Vertical teal ray extends from `colZero[2] == True` down into cell $(4, 2)$.
  - Value in cell $(4, 2)$ mutates: `23 ➔ 0` with a teal flash.
- **CENTER-STAGE HERO:** Cell $(4, 2)$ mutating from 23 to 0.
- **CAUSE:** Column 2 marker is True.
- **EFFECT / MOTION:** Number 23 dissolves; `0` stamps in.
- **WHAT MUST NOT APPEAR YET:** Cell $(4, 3)$ mutation.
- **COMPREHENSION HOLD:** 23 replaced by 0.
- **CLEANUP / EXIT:** Glow settles to white `0`.
- **PERSISTENT STATE:** Cell $(4, 2) = 0$.

---

### Anchor 30: `S06_ROW4_24_ZERO` (F3068..F3117, 50 frames)
- **ANCHOR:** `S06_ROW4_24_ZERO` (Words 220-222, "24 becomes 0.")
- **WHAT APPEARS NOW:**
  - Vertical teal ray extends from `colZero[3] == True` down into cell $(4, 3)$.
  - Value in cell $(4, 3)$ mutates: `24 ➔ 0` with a teal flash.
- **CENTER-STAGE HERO:** Cell $(4, 3)$ mutating from 24 to 0.
- **CAUSE:** Column 3 marker is True.
- **EFFECT / MOTION:** Number 24 dissolves; `0` stamps in.
- **WHAT MUST NOT APPEAR YET:** Cell $(4, 4)$ inspection.
- **COMPREHENSION HOLD:** 24 replaced by 0.
- **CLEANUP / EXIT:** Glow settles to white `0`.
- **PERSISTENT STATE:** Cell $(4, 3) = 0$.

---

### Anchor 31: `S06_ROW4_25_STAYS` (F3132..F3169, 38 frames)
- **ANCHOR:** `S06_ROW4_25_STAYS` (Words 223-224, "25 survives.")
- **WHAT APPEARS NOW:**
  - Pointer moves to cell $(4, 4)$ containing `25`.
  - Cell $(4, 4)$ flashes soft green shield badge: `25 SURVIVES`.
- **CENTER-STAGE HERO:** Cell $(4, 4)$ preserving 25.
- **CAUSE:** `colZero[4] == False`.
- **EFFECT / MOTION:** Shield badge pulses; 25 remains untouched.
- **WHAT MUST NOT APPEAR YET:** Final summary card.
- **COMPREHENSION HOLD:** Matrix traversal completely finished.
- **CLEANUP / EXIT:** Row 4 bracket clears; all rays clear.
- **PERSISTENT STATE:** Matrix fully transformed to final correct answer.

---

### Anchor 32: `S06_SAME_ANSWER` (F3189..F3258, 70 frames)
- **ANCHOR:** `S06_SAME_ANSWER` (Words 225-231, "And we reach the same correct answer.")
- **WHAT APPEARS NOW:**
  - Entire centered matrix illuminates in celebratory emerald chalk glow (`theme.good`).
  - Top status pill updates: `✅ CORRECT RESULT VERIFIED`.
  - Chip below matrix: `Target Matrix Reached Successfully!`.
- **CENTER-STAGE HERO:** Fully mutated, correct 5×5 Matrix at center stage.
- **CAUSE:** Algorithm has completed and verified against ground truth.
- **EFFECT / MOTION:** Matrix pulses with expanding radial green ring.
- **WHAT MUST NOT APPEAR YET:** Space breakdown details.
- **COMPREHENSION HOLD:** Result matches Method 1 output exactly.
- **CLEANUP / EXIT:** Glow softens to crisp chalk borders.
- **PERSISTENT STATE:** Solved matrix visible.

---

### Anchor 33: `S06_NOT_WHOLE_MATRIX` (F3277..F3364, 88 frames)
- **ANCHOR:** `S06_NOT_WHOLE_MATRIX` (Words 232-240, "This time, we did not preserve the whole matrix.")
- **WHAT APPEARS NOW:**
  - Compact `RoughBox` callout appears below matrix ($X: 680..1240, Y: 760..840$):
    - `❌ NO full matrix clone required! (Saved allocating 25 integers)`.
  - Red crosshair `⊘` flashes over the ghost matrix memory tag.
- **CENTER-STAGE HERO:** Centered matrix with memory rejection callout below.
- **CAUSE:** Highlighting the avoided memory overhead.
- **EFFECT / MOTION:** Callout enters with spring; ghost tag dissolves.
- **WHAT MUST NOT APPEAR YET:** Handoff button.
- **COMPREHENSION HOLD:** Zero duplicate matrix allocation was performed.
- **CLEANUP / EXIT:** Callout prepares for positive efficiency contrast.
- **PERSISTENT STATE:** Callout visible below matrix.

---

### Anchor 34: `S06_ONLY_MATTERS` (F3374..F3482, 109 frames)
- **ANCHOR:** `S06_ONLY_MATTERS` (Words 241-247, "We preserved only the information that matters.")
- **WHAT APPEARS NOW:**
  - Both docked rails (`rowZero` on left, `colZero` on top) pulse with bright cyan energy.
  - Callout below matrix transforms into space efficiency trophy pill ($X: 680..1240, Y: 760..840$):
    - `✨ Stored only M + N = 10 Booleans! Space Complexity: O(M + N)`.
- **CENTER-STAGE HERO:** Two docked marker rails and efficiency trophy pill.
- **CAUSE:** Reaffirming the fundamental pedagogical breakthrough of Method 2.
- **EFFECT / MOTION:** Rails glow in alternating amber and teal; trophy pill shines.
- **WHAT MUST NOT APPEAR YET:** Code handoff banner.
- **COMPREHENSION HOLD:** Total auxiliary memory is linear ($O(M+N)$), not quadratic.
- **CLEANUP / EXIT:** Glow settles into steady neon chalk lines.
- **PERSISTENT STATE:** Confirmed $O(M+N)$ proof.

---

### Anchor 35: `S06_CODE_HANDOFF` (F3502..F3581, 80 frames)
- **ANCHOR:** `S06_CODE_HANDOFF` (Words 248-254, "Now let's convert this idea into code.")
- **WHAT APPEARS NOW:**
  - Bottom-center handoff banner appears ($X: 720..1200, Y: 765..835$):
    - `💻 UP NEXT: SCENE 07 — METHOD 2 PYTHON & JAVA IMPLEMENTATION`.
- **CENTER-STAGE HERO:** Handoff transition banner.
- **CAUSE:** Audio bridges to coding phase.
- **EFFECT / MOTION:** Banner glides up with spring (`Y: 790 -> 765`), glowing in cyan.
- **WHAT MUST NOT APPEAR YET:** Code editor assets.
- **COMPREHENSION HOLD:** Direct bridge into Scene 07.
- **CLEANUP / EXIT:** Holds gracefully to F3581.
- **PERSISTENT STATE:** Clean final frame.

---

## 4. Zero-Collision Checklist

- [x] **Centered Hero:** Master 5×5 Matrix is horizontally centered ($X: 785..1205$, midpoint $X = 1000$).
- [x] **Docked Rails:** `rowZero` sits at $X: 715..765$ (left), `colZero` sits at $Y: 235..285$ (top). Composite width: $490\text{px}$, exactly centered at $X = 960$.
- [x] **No AI-Slop Cards:** Zero 1180px dark dashboard panels. Green chalkboard is open and unobstructed.
- [x] **Top Status Pill:** Sits at $X: 760..1160, Y: 130..190$, leaving clear margins above rails.
- [x] **Bottom Interaction Zone:** All callouts, chips, and stamps sit at $Y: 760..860$, leaving $> 100\text{px}$ clear buffer above captions at $Y: 960$.
- [x] **Zero Spoilers:** Visual elements and cell mutations occur strictly when triggered by their spoken words.
- [x] **100% Remotion Determinism:** Zero CSS transitions, 100% frame-derived spring/interpolate mathematics.

---

## 5. REUSE / EXTEND / CREATE

- **REUSE:**
  - `ChalkboardBackground`, `ChalkDust` from `kit/lib/chalk`.
  - `RoughBox`, `ChalkText` from `kit/components`.
  - `Captions` from `kit/components/Captions`.
  - `theme`, `fonts` from `kit/lib/theme`.
- **CREATE / REFINE:**
  - `Scene06MarkersTrace.tsx`: Updated Remotion component with centered matrix, docked rails, dynamic projection rays, in-place cell mutations, and zero right-panel clutter.
