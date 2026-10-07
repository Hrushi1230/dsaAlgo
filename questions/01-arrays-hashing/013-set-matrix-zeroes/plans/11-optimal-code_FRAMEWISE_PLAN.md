# Scene 11 — Method 3 Code (Optimal In-Place Markers): Framewise Scene Plan
**Question 013: Set Matrix Zeroes (LeetCode 73)**  
**Pattern 01: Arrays & Hashing**  
**Scene Name:** `11-optimal-code`  
**Audio File:** `scence-11.mp3` (`11-optimal-code.mp3`)  
**Total Duration:** 3241 frames @ 30fps (108.020s)  
**Strict Source of Truth:** `questions/01-arrays-hashing/013-set-matrix-zeroes/sync/11-optimal-code.json` & `sync/11-optimal-code.anchors.json`  

---

## 1. Scene Overview & Pedagogical Goal

Scene 11 translates the verified **Method 3 (In-Place Boundary Markers)** algorithm into production Python code.
It demonstrates that we can achieve **O(1) extra space** by utilizing the matrix's own Row 0 and Col 0 as marker storage, while strictly obeying the four-phase ordering invariant:

1. **Phase 1: Save Boundary State (Lines 5–16)**
   - Initialize `firstRowZero = False` and `firstColZero = False`.
   - Scan Row 0: `if matrix[0][c] == 0: firstRowZero = True`.
   - Scan Col 0: `if matrix[r][0] == 0: firstColZero = True`.
   - Protects boundary history before it is repurposed as marker storage.

2. **Phase 2: Mark Interior Zeros in Boundary (Lines 18–23)**
   - Nested loops starting strictly from row 1 and column 1:
     `for r in range(1, m): for c in range(1, n):`
   - If interior cell `matrix[r][c] == 0`:
     `matrix[r][0] = 0` (marks row $r$)
     `matrix[0][c] = 0` (marks column $c$)
   - Row 0 and Col 0 are now active in-place marker arrays!

3. **Phase 3: Apply Markers to Interior Cells (Lines 25–29)**
   - Nested loops again starting strictly from row 1 and column 1:
     `for r in range(1, m): for c in range(1, n):`
   - If row marker or column marker is zero:
     `if matrix[r][0] == 0 or matrix[0][c] == 0: matrix[r][c] = 0`.
   - Interior is now fully zeroed and finalized!

4. **Phase 4: Finalize Boundary (Lines 31–37)**
   - If `firstRowZero`: set all cells in Row 0 to 0.
   - If `firstColZero`: set all cells in Col 0 to 0.
   - Preserves marker data until interior was done; then safely resolves boundary.

5. **Order Invariant Masterclass (Lines 38–43)**
   - Reviews the 4-step pipeline: **SAVE -> MARK -> APPLY -> FINALIZE**.
   - Proves why changing the order (e.g. finalizing boundary before applying markers) would destroy marker information and corrupt the entire matrix.

---

## 2. Spatial Composition & Zero-Collision Invariants

- **Canvas Size:** 1920 × 1080.
- **Background:** Full-frame dark green chalkboard (`theme.boardBg` = `#19523C`). Zero AI-slop dark panels.
- **Top Header:** $Y: 42..108$ (`fonts.display`, 26px title, category pill `01 · ARRAYS & HASHING`, method badge `METHOD 3 CODE: IN-PLACE BOUNDARY MARKERS (PYTHON)`).
- **Left Stage — Code Editor ($X: 60..1020$, $Y: 130..770$):**
  - Width: 960px, Height: 640px.
  - `ChalkCodeEditorV2` with Caveat / Patrick Hand title bar, 20px code font, 32px line height.
  - Progressive character-by-character reveal tied to exact word frames from sync.
- **Right Stage — Live Visualizer ($X: 1060..1860$, $Y: 130..770$):**
  - Width: 800px, Height: 640px.
  - 5×5 Matrix scaled for clear side-by-side legibility: Cell size: 48px, Gap: 6px. Total matrix: 264px × 264px.
  - Top/Side indicator panels: `firstRowZero` and `firstColZero` boolean status cards.
  - Ray animations linking code assignments (`matrix[r][0]=0`, `matrix[0][c]=0`) directly to matrix cells.
  - Order recap badges and danger callout cards inside visualizer zone ($Y: 560..760$).
- **Bottom Clearance Invariant:**
  - Both stages stop cleanly at $Y: 770$.
  - Bottom Captions sit at $Y: 960..1040$.
  - Net clear vertical space: $960 - 770 = 190\text{px}$ (exceeds the $\ge 140\text{px}$ rule).
- **Zero Collision Guarantee:** Code editor, live matrix, boolean badges, callout cards, and captions never overlap.

---

## 3. Mandatory Framewise Anchor Plan (43 Anchors)

### Anchor 1: `S11_OPEN` (F0..F81, 81 frames)
- **ANCHOR:** `S11_OPEN` (Words W0000..W0006, "Now let's write the optimal solution carefully.")
- **WHAT APPEARS NOW:**
  - Green chalkboard, top header: METHOD 3 CODE: IN-PLACE BOUNDARY MARKERS (PYTHON). ChalkCodeEditorV2 window enters on left (X: 60, Y: 130). Function signature: def setZeroes(matrix: list[list[int]]) -> None:.
- **CENTER-STAGE HERO:** Code editor entry with blinking cursor on line 2.
- **CAUSE:** Audio signals start of optimal in-place code construction.
- **EFFECT / MOTION:** Editor window scales in gently (0.95 -> 1.0, spring).
- **WHAT MUST NOT APPEAR YET:** Dimensions m, n, booleans, or loops.
- **COMPREHENSION HOLD:** Viewer absorbs the clean editor canvas and method badge.
- **CLEANUP / EXIT:** Cursor blinks at line 2.
- **PERSISTENT STATE:** Editor active at line 2; right stage ready.

---

### Anchor 2: `S11_M` (F101..F194, 93 frames)
- **ANCHOR:** `S11_M` (Words W0007..W0014, "First, store the number of rows in M")
- **WHAT APPEARS NOW:**
  - Line 2 types out: m = len(matrix). Right stage displays matrix dimension pill M = 5 rows.
- **CENTER-STAGE HERO:** Line 2 in editor; matrix height indicator.
- **CAUSE:** Recording row count for matrix bounds.
- **EFFECT / MOTION:** Code characters type progressively; row bracket pulses.
- **WHAT MUST NOT APPEAR YET:** Column dimension n or flag booleans.
- **COMPREHENSION HOLD:** Row count established.
- **CLEANUP / EXIT:** Cursor advances to line 3.
- **PERSISTENT STATE:** m = len(matrix) settled.

---

### Anchor 3: `S11_N` (F194..F266, 72 frames)
- **ANCHOR:** `S11_N` (Words W0015..W0021, "and the number of columns in N.")
- **WHAT APPEARS NOW:**
  - Line 3 types out: n = len(matrix[0]). Right stage displays matrix dimension pill N = 5 cols.
- **CENTER-STAGE HERO:** Line 3 in editor; matrix width indicator.
- **CAUSE:** Recording column count for bounds.
- **EFFECT / MOTION:** Code characters type progressively; column bracket pulses.
- **WHAT MUST NOT APPEAR YET:** Boolean flags firstRowZero / firstColZero.
- **COMPREHENSION HOLD:** Matrix dimensions (5x5) established.
- **CLEANUP / EXIT:** Cursor advances to line 5.
- **PERSISTENT STATE:** m and n defined; matrix bounds active.

---

### Anchor 4: `S11_TWO` (F277..F325, 48 frames)
- **ANCHOR:** `S11_TWO` (Words W0022..W0024, "Create two booleans.")
- **WHAT APPEARS NOW:**
  - Line 5 comment / header: # Boundary state booleans. Right stage shows two uninitialized flag cards firstRowZero & firstColZero.
- **CENTER-STAGE HERO:** Flag declaration concept in editor and visualizer.
- **CAUSE:** Need independent variables to decouple Row 0 and Col 0 collision at (0,0).
- **EFFECT / MOTION:** Flag cards slide into right stage panel.
- **WHAT MUST NOT APPEAR YET:** Initial values of flags or loops.
- **COMPREHENSION HOLD:** Viewer understands two dedicated variables are required.
- **CLEANUP / EXIT:** Cursor readies line 6.
- **PERSISTENT STATE:** Two flag placeholders ready on right.

---

### Anchor 5: `S11_FRFALSE` (F344..F417, 73 frames)
- **ANCHOR:** `S11_FRFALSE` (Words W0025..W0030, "First, row 0 starts as false.")
- **WHAT APPEARS NOW:**
  - Line 6 types out: firstRowZero = False. Right stage firstRowZero card lights with False (neutral slate).
- **CENTER-STAGE HERO:** firstRowZero initialized in editor and right stage.
- **CAUSE:** Optimistic initialization: assume row 0 has no zeros until proven otherwise.
- **EFFECT / MOTION:** Code types in; flag card border pulses slate.
- **WHAT MUST NOT APPEAR YET:** firstColZero assignment.
- **COMPREHENSION HOLD:** Viewer registers firstRowZero = False.
- **CLEANUP / EXIT:** Cursor readies line 7.
- **PERSISTENT STATE:** firstRowZero = False visible in editor & card.

---

### Anchor 6: `S11_FCFALSE` (F438..F494, 56 frames)
- **ANCHOR:** `S11_FCFALSE` (Words W0031..W0036, "First call 0 starts as false.")
- **WHAT APPEARS NOW:**
  - Line 7 types out: firstColZero = False. Right stage firstColZero card lights with False (neutral slate).
- **CENTER-STAGE HERO:** firstColZero initialized in editor and right stage.
- **CAUSE:** Optimistic initialization: assume col 0 has no zeros until proven otherwise.
- **EFFECT / MOTION:** Code types in; flag card border pulses slate.
- **WHAT MUST NOT APPEAR YET:** Boundary scanning loops.
- **COMPREHENSION HOLD:** Both flags initialized to False.
- **CLEANUP / EXIT:** Cursor readies boundary save block.
- **PERSISTENT STATE:** Both booleans initialized.

---

### Anchor 7: `S11_BEFORE` (F518..F664, 146 frames)
- **ANCHOR:** `S11_BEFORE` (Words W0037..W0048, "Before we use the boundary as marker memory, save its original state.")
- **WHAT APPEARS NOW:**
  - Line 9 comment: # 1. Save boundary history before overwriting. Right visualizer highlights Row 0 and Col 0 with amber halo.
- **CENTER-STAGE HERO:** Boundary protection callout and comment.
- **CAUSE:** Using boundary as marker storage destroys its original zero status unless saved first.
- **EFFECT / MOTION:** Amber halo draws around Row 0 and Col 0.
- **WHAT MUST NOT APPEAR YET:** Boundary scanning code lines.
- **COMPREHENSION HOLD:** Viewer registers the crucial invariance: Save before Overwrite.
- **CLEANUP / EXIT:** Halo settles into inspection glow.
- **PERSISTENT STATE:** Boundary highlighted.

---

### Anchor 8: `S11_SCANROW` (F673..F705, 32 frames)
- **ANCHOR:** `S11_SCANROW` (Words W0049..W0052, "Scan the first row.")
- **WHAT APPEARS NOW:**
  - Line 10 types out: for c in range(n):. Gold scan beam sweeps horizontally across Row 0 (cells 0,0 to 0,4).
- **CENTER-STAGE HERO:** Row 0 loop header in editor; scan beam on Row 0.
- **CAUSE:** Checking every cell in Row 0 for zeros.
- **EFFECT / MOTION:** Code types; scan beam moves smoothly across Row 0 cells.
- **WHAT MUST NOT APPEAR YET:** Condition body if matrix[0][c] == 0:.
- **COMPREHENSION HOLD:** Scan beam focuses on Row 0.
- **CLEANUP / EXIT:** Cursor indents to line 11.
- **PERSISTENT STATE:** Row 0 loop active.

---

### Anchor 9: `S11_IFROW` (F720..F774, 54 frames)
- **ANCHOR:** `S11_IFROW` (Words W0053..W0057, "If any cell is 0,")
- **WHAT APPEARS NOW:**
  - Line 11 types out: if matrix[0][c] == 0:. Scan beam halts at cell (0,2) which holds 0.
- **CENTER-STAGE HERO:** Conditional check in editor; zero found at (0,2).
- **CAUSE:** Cell (0,2) is originally zero in the master testcase.
- **EFFECT / MOTION:** Code types; cell (0,2) pulses gold glow.
- **WHAT MUST NOT APPEAR YET:** Setting firstRowZero = True.
- **COMPREHENSION HOLD:** Viewer sees zero discovered at index 2.
- **CLEANUP / EXIT:** Cursor indents to line 12.
- **PERSISTENT STATE:** Zero at (0,2) locked in beam.

---

### Anchor 10: `S11_SETFR` (F782..F845, 63 frames)
- **ANCHOR:** `S11_SETFR` (Words W0058..W0063, "set first row 0 to true.")
- **WHAT APPEARS NOW:**
  - Line 12 types out: firstRowZero = True. Right stage flag card flips to True with glowing green border.
- **CENTER-STAGE HERO:** firstRowZero = True assignment and flag card transition.
- **CAUSE:** Zero found at (0,2) requires entire Row 0 to zero out eventually.
- **EFFECT / MOTION:** Code types; flag card flips with 3D spring, turns green.
- **WHAT MUST NOT APPEAR YET:** Column scanning loop.
- **COMPREHENSION HOLD:** Viewer sees firstRowZero successfully protected as True.
- **CLEANUP / EXIT:** Row 0 scan concludes.
- **PERSISTENT STATE:** firstRowZero = True locked.

---

### Anchor 11: `S11_SCANCOL` (F845..F902, 57 frames)
- **ANCHOR:** `S11_SCANCOL` (Words W0064..W0068, "Then scan the first column.")
- **WHAT APPEARS NOW:**
  - Line 14 types out: for r in range(m):. Gold scan beam sweeps vertically down Col 0 (cells 0,0 to 4,0).
- **CENTER-STAGE HERO:** Col 0 loop header in editor; vertical scan beam on Col 0.
- **CAUSE:** Checking every cell in Col 0 for zeros.
- **EFFECT / MOTION:** Code types; beam sweeps vertically down Col 0.
- **WHAT MUST NOT APPEAR YET:** Col 0 zero check body.
- **COMPREHENSION HOLD:** Scan beam focuses on Col 0.
- **CLEANUP / EXIT:** Cursor indents to line 15.
- **PERSISTENT STATE:** Col 0 loop active.

---

### Anchor 12: `S11_IFCOL` (F917..F957, 40 frames)
- **ANCHOR:** `S11_IFCOL` (Words W0069..W0073, "If any cell is 0,")
- **WHAT APPEARS NOW:**
  - Line 15 types out: if matrix[r][0] == 0:. Scan beam halts at cell (2,0) which holds 0.
- **CENTER-STAGE HERO:** Conditional check in editor; zero found at (2,0).
- **CAUSE:** Cell (2,0) is originally zero in the master testcase.
- **EFFECT / MOTION:** Code types; cell (2,0) pulses gold glow.
- **WHAT MUST NOT APPEAR YET:** Setting firstColZero = True.
- **COMPREHENSION HOLD:** Viewer sees zero discovered at row index 2.
- **CLEANUP / EXIT:** Cursor indents to line 16.
- **PERSISTENT STATE:** Zero at (2,0) locked in beam.

---

### Anchor 13: `S11_SETFC` (F967..F1023, 56 frames)
- **ANCHOR:** `S11_SETFC` (Words W0074..W0079, "set first call 0 to true.")
- **WHAT APPEARS NOW:**
  - Line 16 types out: firstColZero = True. Right stage flag card flips to True with glowing green border.
- **CENTER-STAGE HERO:** firstColZero = True assignment and flag card transition.
- **CAUSE:** Zero found at (2,0) requires entire Col 0 to zero out eventually.
- **EFFECT / MOTION:** Code types; flag card flips with 3D spring, turns green.
- **WHAT MUST NOT APPEAR YET:** Interior discovery scan loops.
- **COMPREHENSION HOLD:** Viewer sees firstColZero successfully protected as True.
- **CLEANUP / EXIT:** Col 0 scan concludes.
- **PERSISTENT STATE:** firstColZero = True locked.

---

### Anchor 14: `S11_PROTECTED` (F1040..F1099, 59 frames)
- **ANCHOR:** `S11_PROTECTED` (Words W0080..W0085, "Now the boundary history is protected.")
- **WHAT APPEARS NOW:**
  - Right stage displays dual green shield badge: BOUNDARY HISTORY PROTECTED. Both flags glow bright green.
- **CENTER-STAGE HERO:** Dual protected flags and safe boundary status.
- **CAUSE:** Both Row 0 and Col 0 original zero states are safely memorized in booleans.
- **EFFECT / MOTION:** Shield badge springs in with celebratory checkmark.
- **WHAT MUST NOT APPEAR YET:** Interior scanning loops.
- **COMPREHENSION HOLD:** Viewer absorbs the peace of mind: boundary can now be repurposed as marker storage safely!
- **CLEANUP / EXIT:** Shield badge dissolves into compact status pill.
- **PERSISTENT STATE:** Safe boundary state established.

---

### Anchor 15: `S11_NEXT` (F1118..F1173, 55 frames)
- **ANCHOR:** `S11_NEXT` (Words W0086..W0090, "Next scan only the interior.")
- **WHAT APPEARS NOW:**
  - Line 18 comment: # 2. Mark interior zeros in boundary. Right visualizer dims Row 0 & Col 0, highlights 4x4 inner matrix.
- **CENTER-STAGE HERO:** Interior scanning transition in editor and visualizer.
- **CAUSE:** Next pass scans only interior cells to write boundary markers.
- **EFFECT / MOTION:** Inner 4x4 box highlights with cyan dashed frame.
- **WHAT MUST NOT APPEAR YET:** Loop headers range(1, m).
- **COMPREHENSION HOLD:** Viewer sees attention shift strictly to the interior.
- **CLEANUP / EXIT:** Cursor readies line 19.
- **PERSISTENT STATE:** Interior 4x4 focused.

---

### Anchor 16: `S11_ROWS1` (F1193..F1227, 34 frames)
- **ANCHOR:** `S11_ROWS1` (Words W0091..W0094, "Start rows from 1")
- **WHAT APPEARS NOW:**
  - Line 19 types out: for r in range(1, m):. Notice badge highlights 1 in range(1, m).
- **CENTER-STAGE HERO:** range(1, m) in editor; Row 0 excluded badge.
- **CAUSE:** Row 0 is marker memory, so scanning must begin at row 1.
- **EFFECT / MOTION:** Code types; index 1 pulses with cyan underline.
- **WHAT MUST NOT APPEAR YET:** Inner column loop.
- **COMPREHENSION HOLD:** Crucial distinction: NOT range(m), but range(1, m).
- **CLEANUP / EXIT:** Cursor indents to line 20.
- **PERSISTENT STATE:** Outer loop index starts at 1.

---

### Anchor 17: `S11_COLS1` (F1227..F1286, 59 frames)
- **ANCHOR:** `S11_COLS1` (Words W0095..W0098, "and columns from 1.")
- **WHAT APPEARS NOW:**
  - Line 20 types out: for c in range(1, n):. Notice badge highlights 1 in range(1, n).
- **CENTER-STAGE HERO:** range(1, n) in editor; Col 0 excluded badge.
- **CAUSE:** Col 0 is marker memory, so scanning must begin at column 1.
- **EFFECT / MOTION:** Code types; index 1 pulses with gold underline.
- **WHAT MUST NOT APPEAR YET:** Zero check condition.
- **COMPREHENSION HOLD:** Both loops strictly bounded to range(1,...).
- **CLEANUP / EXIT:** Cursor indents to line 21.
- **PERSISTENT STATE:** Nested interior loops established.

---

### Anchor 18: `S11_WHENZERO` (F1301..F1367, 66 frames)
- **ANCHOR:** `S11_WHENZERO` (Words W0099..W0103, "Whenever matrix base is 0,")
- **WHAT APPEARS NOW:**
  - Line 21 types out: if matrix[r][c] == 0:. Matrix visualizer jumps to interior zero at cell (3,3).
- **CENTER-STAGE HERO:** Condition if matrix[r][c] == 0: and cell (3,3) in matrix.
- **CAUSE:** Master testcase has interior zero at cell (3,3) (value 0 originally).
- **EFFECT / MOTION:** Code types; cell (3,3) pulses gold with radar ripple.
- **WHAT MUST NOT APPEAR YET:** Marker projection assignments.
- **COMPREHENSION HOLD:** Viewer sees active interior cell (3,3) triggers condition.
- **CLEANUP / EXIT:** Cursor indents to line 22.
- **PERSISTENT STATE:** Cell (3,3) active.

---

### Anchor 19: `S11_WRITEROW` (F1380..F1451, 71 frames)
- **ANCHOR:** `S11_WRITEROW` (Words W0104..W0108, "write 0 into matrix 0.")
- **WHAT APPEARS NOW:**
  - Line 22 types out: matrix[r][0] = 0. Cyan ray shoots horizontally from (3,3) to (3,0).
- **CENTER-STAGE HERO:** matrix[r][0] = 0 assignment; cyan marker ray.
- **CAUSE:** Marking row 3 as needing zeroing.
- **EFFECT / MOTION:** Code types; cell (3,0) flips from 16 to 0 with cyan marker badge.
- **WHAT MUST NOT APPEAR YET:** Column marker assignment matrix[0][c] = 0.
- **COMPREHENSION HOLD:** Viewer sees row marker written at (3,0).
- **CLEANUP / EXIT:** Ray fades; cell (3,0) stays marked.
- **PERSISTENT STATE:** matrix[3][0] = 0.

---

### Anchor 20: `S11_MARKSROW` (F1472..F1502, 30 frames)
- **ANCHOR:** `S11_MARKSROW` (Words W0109..W0112, "That marks the row.")
- **WHAT APPEARS NOW:**
  - Right stage displays callout pill at row 3: ROW 3 MARKED FOR ZEROING. Col 0 slot at row 3 glows cyan.
- **CENTER-STAGE HERO:** Row marker explanation and slot (3,0).
- **CAUSE:** Explaining the physical meaning of matrix[r][0] = 0.
- **EFFECT / MOTION:** Callout pill slides out from cell (3,0).
- **WHAT MUST NOT APPEAR YET:** matrix[0][c] = 0 assignment.
- **COMPREHENSION HOLD:** Viewer connects code syntax matrix[r][0] = 0 to its semantic role.
- **CLEANUP / EXIT:** Callout docks into status rail.
- **PERSISTENT STATE:** Row 3 flagged in Col 0.

---

### Anchor 21: `S11_WRITECOL` (F1523..F1600, 77 frames)
- **ANCHOR:** `S11_WRITECOL` (Words W0113..W0119, "Then write 0 into matrix 0. See,")
- **WHAT APPEARS NOW:**
  - Line 23 types out: matrix[0][c] = 0. Gold ray shoots vertically from (3,3) to (0,3).
- **CENTER-STAGE HERO:** matrix[0][c] = 0 assignment; gold marker ray.
- **CAUSE:** Marking column 3 as needing zeroing.
- **EFFECT / MOTION:** Code types; cell (0,3) flips from 4 to 0 with gold marker badge.
- **WHAT MUST NOT APPEAR YET:** Completed discovery pass summary.
- **COMPREHENSION HOLD:** Viewer sees column marker written at (0,3).
- **CLEANUP / EXIT:** Ray fades; cell (0,3) stays marked.
- **PERSISTENT STATE:** matrix[0][3] = 0.

---

### Anchor 22: `S11_MARKSCOL` (F1613..F1646, 33 frames)
- **ANCHOR:** `S11_MARKSCOL` (Words W0120..W0123, "that marks the column.")
- **WHAT APPEARS NOW:**
  - Right stage displays callout pill at col 3: COL 3 MARKED FOR ZEROING. Row 0 slot at col 3 glows gold.
- **CENTER-STAGE HERO:** Column marker explanation and slot (0,3).
- **CAUSE:** Explaining the physical meaning of matrix[0][c] = 0.
- **EFFECT / MOTION:** Callout pill drops down from cell (0,3).
- **WHAT MUST NOT APPEAR YET:** Pass 2 completion summary.
- **COMPREHENSION HOLD:** Viewer connects code syntax matrix[0][c] = 0 to its semantic role.
- **CLEANUP / EXIT:** Callout docks into status rail.
- **PERSISTENT STATE:** Col 3 flagged in Row 0.

---

### Anchor 23: `S11_AFTERPASS` (F1646..F1805, 159 frames)
- **ANCHOR:** `S11_AFTERPASS` (Words W0124..W0136, "After this pass, the first row and first column are our marker arrays.")
- **WHAT APPEARS NOW:**
  - Right visualizer shows Row 0 and Col 0 glowing as dedicated marker arrays. Legend: Col 0 = Row Markers, Row 0 = Col Markers.
- **CENTER-STAGE HERO:** Boundary marker arrays established.
- **CAUSE:** Interior discovery pass complete. Markers are stored in place with O(1) extra space.
- **EFFECT / MOTION:** Glow lines outline Row 0 & Col 0 with dual colored labels.
- **WHAT MUST NOT APPEAR YET:** Application pass loops.
- **COMPREHENSION HOLD:** Viewer realizes: boundary now carries all marker information without allocating arrays!
- **CLEANUP / EXIT:** Glow settles into persistent markers.
- **PERSISTENT STATE:** Boundary markers active.

---

### Anchor 24: `S11_APPLY` (F1816..F1850, 34 frames)
- **ANCHOR:** `S11_APPLY` (Words W0137..W0140, "Now apply the markers.")
- **WHAT APPEARS NOW:**
  - Line 25 comment: # 3. Apply markers to interior cells. Inward arrows appear along Row 0 and Col 0 pointing inward.
- **CENTER-STAGE HERO:** Application pass section header and inward arrows.
- **CAUSE:** Now we mutate interior cells using the boundary markers.
- **EFFECT / MOTION:** Inward projection arrows pulse inward from markers.
- **WHAT MUST NOT APPEAR YET:** Application nested loops.
- **COMPREHENSION HOLD:** Transition from discovery to mutation.
- **CLEANUP / EXIT:** Cursor readies line 26.
- **PERSISTENT STATE:** Inward apply mode active.

---

### Anchor 25: `S11_AGAIN` (F1863..F1922, 59 frames)
- **ANCHOR:** `S11_AGAIN` (Words W0141..W0145, "Again, scan only the interior.")
- **WHAT APPEARS NOW:**
  - Lines 26-27 type out: for r in range(1, m): and for c in range(1, n):. Interior 4x4 box highlights again.
- **CENTER-STAGE HERO:** Nested range(1, ...) loops in editor.
- **CAUSE:** Must mutate interior FIRST before touching the boundary markers.
- **EFFECT / MOTION:** Code lines type in; interior 4x4 grid flashes cyan.
- **WHAT MUST NOT APPEAR YET:** OR condition.
- **COMPREHENSION HOLD:** Viewer sees same range(1, m) and range(1, n) bounds reused.
- **CLEANUP / EXIT:** Cursor indents to line 28.
- **PERSISTENT STATE:** Application loop headers active.

---

### Anchor 26: `S11_FOREACH` (F1936..F1959, 23 frames)
- **ANCHOR:** `S11_FOREACH` (Words W0146..W0148, "For each cell,")
- **WHAT APPEARS NOW:**
  - Scanner cursor highlights interior cells one-by-one. Pauses on cell (1,2) (affected by col marker at (0,2)).
- **CENTER-STAGE HERO:** Current cell cursor on interior cell.
- **CAUSE:** Evaluating each interior cell against row and column markers.
- **EFFECT / MOTION:** Target reticle lands on cell (1,2).
- **WHAT MUST NOT APPEAR YET:** Condition syntax.
- **COMPREHENSION HOLD:** Viewer focuses on single cell evaluation.
- **CLEANUP / EXIT:** Cursor stays on cell.
- **PERSISTENT STATE:** Cell (1,2) in focus.

---

### Anchor 27: `S11_ROWCOND` (F1984..F2047, 63 frames)
- **ANCHOR:** `S11_ROWCOND` (Words W0149..W0153, "if matrix 0 is 0")
- **WHAT APPEARS NOW:**
  - Line 28 types first part: if matrix[r][0] == 0. Cyan inquiry line links cell to its row marker at (r, 0).
- **CENTER-STAGE HERO:** Row marker check condition in editor; horizontal check ray.
- **CAUSE:** Checking if this cell's row was marked.
- **EFFECT / MOTION:** Code types; cyan ray points to Col 0.
- **WHAT MUST NOT APPEAR YET:** or matrix[0][c] == 0.
- **COMPREHENSION HOLD:** Viewer sees row marker lookup.
- **CLEANUP / EXIT:** Line extends with OR operator.
- **PERSISTENT STATE:** Row condition registered.

---

### Anchor 28: `S11_ORCOL` (F2047..F2117, 70 frames)
- **ANCHOR:** `S11_ORCOL` (Words W0154..W0158, "or matrix 0 is 0,")
- **WHAT APPEARS NOW:**
  - Line 28 completes: or matrix[0][c] == 0:. Gold inquiry line links cell to its column marker at (0, c).
- **CENTER-STAGE HERO:** Complete OR condition in editor; vertical check ray.
- **CAUSE:** Checking if this cell's column was marked.
- **EFFECT / MOTION:** Code types; gold ray points to Row 0.
- **WHAT MUST NOT APPEAR YET:** Assignment matrix[r][c] = 0.
- **COMPREHENSION HOLD:** Viewer sees complete disjunction: either row marker OR column marker is zero.
- **CLEANUP / EXIT:** Cursor indents to line 29.
- **PERSISTENT STATE:** Full if condition active.

---

### Anchor 29: `S11_SETCELL` (F2134..F2200, 66 frames)
- **ANCHOR:** `S11_SETCELL` (Words W0159..W0163, "set matrix C to 0.")
- **WHAT APPEARS NOW:**
  - Line 29 types out: matrix[r][c] = 0. All marked interior cells flip to 0 with gold/cyan ink bloom.
- **CENTER-STAGE HERO:** matrix[r][c] = 0 in editor; interior cells morphing to 0.
- **CAUSE:** Applying marker rules zeroing out rows 2, 3 and cols 2, 3 in the interior.
- **EFFECT / MOTION:** Code types; interior values 8, 9, 12, 13, 14, 15, 18, 20, 23, 24 flip to 0.
- **WHAT MUST NOT APPEAR YET:** Boundary finalization blocks.
- **COMPREHENSION HOLD:** Viewer sees interior completely and accurately zeroed.
- **CLEANUP / EXIT:** Ink bloom settles.
- **PERSISTENT STATE:** Interior zeroing complete.

---

### Anchor 30: `S11_INTERIORFINAL` (F2219..F2291, 72 frames)
- **ANCHOR:** `S11_INTERIORFINAL` (Words W0164..W0170, "At this point, the interior is final.")
- **WHAT APPEARS NOW:**
  - Right stage displays green badge: INTERIOR FINALIZED. The 4x4 interior is locked and safe.
- **CENTER-STAGE HERO:** Completed interior status badge.
- **CAUSE:** All interior zeroing is finished. Boundary markers have done their job for the interior.
- **EFFECT / MOTION:** Badge scales in with green border glow.
- **WHAT MUST NOT APPEAR YET:** Boundary zeroing loops.
- **COMPREHENSION HOLD:** Viewer sees interior task is 100% complete.
- **CLEANUP / EXIT:** Badge docks to side.
- **PERSISTENT STATE:** Interior safe.

---

### Anchor 31: `S11_BOUNDONLY` (F2309..F2350, 41 frames)
- **ANCHOR:** `S11_BOUNDONLY` (Words W0171..W0174, "Only the boundary remains.")
- **WHAT APPEARS NOW:**
  - Row 0 and Col 0 highlight in amber pulse. Visual reminder: boundary cells still hold markers, not final values.
- **CENTER-STAGE HERO:** Row 0 and Col 0 highlight.
- **CAUSE:** Only step left is to set Row 0 and Col 0 to zero if their boolean flags were True.
- **EFFECT / MOTION:** Row 0 and Col 0 flash amber.
- **WHAT MUST NOT APPEAR YET:** if firstRowZero: code.
- **COMPREHENSION HOLD:** Viewer anticipates boundary resolution.
- **CLEANUP / EXIT:** Cursor readies line 31.
- **PERSISTENT STATE:** Boundary pending finalization.

---

### Anchor 32: `S11_IFFR` (F2368..F2416, 48 frames)
- **ANCHOR:** `S11_IFFR` (Words W0175..W0180, "If first row 0 is true,")
- **WHAT APPEARS NOW:**
  - Line 31 types out: if firstRowZero:. Flag card firstRowZero (True) pulses with green beam to line 31.
- **CENTER-STAGE HERO:** if firstRowZero: in editor; flag card connection.
- **CAUSE:** Checking the boolean flag saved at the very start of the function.
- **EFFECT / MOTION:** Code types; green connector line links card to editor.
- **WHAT MUST NOT APPEAR YET:** Row 0 zeroing loop.
- **COMPREHENSION HOLD:** Viewer sees original history recovered from boolean.
- **CLEANUP / EXIT:** Cursor indents to line 32.
- **PERSISTENT STATE:** firstRowZero branch open.

---

### Anchor 33: `S11_ZEROROW` (F2429..F2509, 80 frames)
- **ANCHOR:** `S11_ZEROROW` (Words W0181..W0186, "0 every cell in row 0.")
- **WHAT APPEARS NOW:**
  - Lines 32-33 type out: for c in range(n): and matrix[0][c] = 0. All 5 cells in Row 0 flip to 0.
- **CENTER-STAGE HERO:** Row 0 zeroing loop and Row 0 cell transformations.
- **CAUSE:** firstRowZero was True, so all cells in Row 0 must become zero.
- **EFFECT / MOTION:** Code types; Row 0 cells (1, 2, 0, 4, 5) turn into 0s with green wipe.
- **WHAT MUST NOT APPEAR YET:** Col 0 finalization branch.
- **COMPREHENSION HOLD:** Viewer sees Row 0 fully resolved.
- **CLEANUP / EXIT:** Row 0 settles.
- **PERSISTENT STATE:** Row 0 is all zeros.

---

### Anchor 34: `S11_IFFC` (F2509..F2572, 63 frames)
- **ANCHOR:** `S11_IFFC` (Words W0187..W0193, "And if first call 0 is true,")
- **WHAT APPEARS NOW:**
  - Line 35 types out: if firstColZero:. Flag card firstColZero (True) pulses with green beam to line 35.
- **CENTER-STAGE HERO:** if firstColZero: in editor; flag card connection.
- **CAUSE:** Checking second boolean flag saved at the start.
- **EFFECT / MOTION:** Code types; green connector line links card to editor.
- **WHAT MUST NOT APPEAR YET:** Col 0 zeroing loop.
- **COMPREHENSION HOLD:** Viewer sees column history recovered from boolean.
- **CLEANUP / EXIT:** Cursor indents to line 36.
- **PERSISTENT STATE:** firstColZero branch open.

---

### Anchor 35: `S11_ZEROCOL` (F2584..F2647, 63 frames)
- **ANCHOR:** `S11_ZEROCOL` (Words W0194..W0199, "0 every cell in column 0.")
- **WHAT APPEARS NOW:**
  - Lines 36-37 type out: for r in range(m): and matrix[r][0] = 0. All 5 cells in Col 0 flip to 0.
- **CENTER-STAGE HERO:** Col 0 zeroing loop and Col 0 cell transformations.
- **CAUSE:** firstColZero was True, so all cells in Col 0 must become zero.
- **EFFECT / MOTION:** Code types; Col 0 cells turn into 0s with green wipe.
- **WHAT MUST NOT APPEAR YET:** Completion summary.
- **COMPREHENSION HOLD:** Viewer sees Col 0 fully resolved.
- **CLEANUP / EXIT:** Matrix transformation complete.
- **PERSISTENT STATE:** Matrix is 100% correctly solved.

---

### Anchor 36: `S11_COMPLETE` (F2666..F2737, 71 frames)
- **ANCHOR:** `S11_COMPLETE` (Words W0200..W0205, "That is the complete optimal solution.")
- **WHAT APPEARS NOW:**
  - ChalkCodeEditorV2 highlights entire function with glowing cyan border. Right stage shows solved matrix with golden frame.
- **CENTER-STAGE HERO:** Complete Python implementation and final solved matrix.
- **CAUSE:** Optimal in-place algorithm is fully constructed and visually proven.
- **EFFECT / MOTION:** Code editor glows; matrix pulses with triumph aura.
- **WHAT MUST NOT APPEAR YET:** Order summary cards.
- **COMPREHENSION HOLD:** Viewer admires the complete, elegant 37-line Python code.
- **CLEANUP / EXIT:** Glow settles.
- **PERSISTENT STATE:** Full code displayed.

---

### Anchor 37: `S11_ORDER` (F2762..F2786, 24 frames)
- **ANCHOR:** `S11_ORDER` (Words W0206..W0208, "Notice the order.")
- **WHAT APPEARS NOW:**
  - Four numbered pipeline badges appear over editor: [1. SAVE] [2. MARK] [3. APPLY] [4. FINALIZE].
- **CENTER-STAGE HERO:** Four-step pipeline badges.
- **CAUSE:** Emphasizing that algorithm correctness depends strictly on this specific sequence.
- **EFFECT / MOTION:** Four badges pop in sequentially with spring bounce.
- **WHAT MUST NOT APPEAR YET:** Step 1 deep-dive highlight.
- **COMPREHENSION HOLD:** Viewer sees the 4-phase architecture clearly.
- **CLEANUP / EXIT:** Badges remain as navigation markers.
- **PERSISTENT STATE:** 4-phase pipeline visible.

---

### Anchor 38: `S11_SAVE` (F2800..F2848, 48 frames)
- **ANCHOR:** `S11_SAVE` (Words W0209..W0211, "Save boundary history.")
- **WHAT APPEARS NOW:**
  - Step 1 badge [1. SAVE BOUNDARY] expands and glows green. Lines 5-16 in editor highlighted with green bracket.
- **CENTER-STAGE HERO:** Step 1 highlight in code and pipeline.
- **CAUSE:** Recapping phase 1.
- **EFFECT / MOTION:** Bracket draws around lines 5-16; Step 1 card pulses.
- **WHAT MUST NOT APPEAR YET:** Step 2 highlight.
- **COMPREHENSION HOLD:** Viewer focuses on boundary saving phase.
- **CLEANUP / EXIT:** Step 1 reduces to compact badge.
- **PERSISTENT STATE:** Step 1 acknowledged.

---

### Anchor 39: `S11_MARK` (F2874..F2906, 32 frames)
- **ANCHOR:** `S11_MARK` (Words W0212..W0214, "Mark the interior.")
- **WHAT APPEARS NOW:**
  - Step 2 badge [2. MARK INTERIOR] expands and glows cyan. Lines 18-23 in editor highlighted with cyan bracket.
- **CENTER-STAGE HERO:** Step 2 highlight in code and pipeline.
- **CAUSE:** Recapping phase 2.
- **EFFECT / MOTION:** Bracket draws around lines 18-23; Step 2 card pulses.
- **WHAT MUST NOT APPEAR YET:** Step 3 highlight.
- **COMPREHENSION HOLD:** Viewer focuses on marker discovery phase.
- **CLEANUP / EXIT:** Step 2 reduces to compact badge.
- **PERSISTENT STATE:** Step 2 acknowledged.

---

### Anchor 40: `S11_APPLYORD` (F2935..F2974, 39 frames)
- **ANCHOR:** `S11_APPLYORD` (Words W0215..W0217, "Apply those markers.")
- **WHAT APPEARS NOW:**
  - Step 3 badge [3. APPLY MARKERS] expands and glows gold. Lines 25-29 in editor highlighted with gold bracket.
- **CENTER-STAGE HERO:** Step 3 highlight in code and pipeline.
- **CAUSE:** Recapping phase 3.
- **EFFECT / MOTION:** Bracket draws around lines 25-29; Step 3 card pulses.
- **WHAT MUST NOT APPEAR YET:** Step 4 highlight.
- **COMPREHENSION HOLD:** Viewer focuses on marker application phase.
- **CLEANUP / EXIT:** Step 3 reduces to compact badge.
- **PERSISTENT STATE:** Step 3 acknowledged.

---

### Anchor 41: `S11_FINALORD` (F2991..F3038, 47 frames)
- **ANCHOR:** `S11_FINALORD` (Words W0218..W0221, "Then finalize the boundary.")
- **WHAT APPEARS NOW:**
  - Step 4 badge [4. FINALIZE BOUNDARY] expands and glows purple. Lines 31-37 in editor highlighted with purple bracket.
- **CENTER-STAGE HERO:** Step 4 highlight in code and pipeline.
- **CAUSE:** Recapping phase 4.
- **EFFECT / MOTION:** Bracket draws around lines 31-37; Step 4 card pulses.
- **WHAT MUST NOT APPEAR YET:** Careless order warning.
- **COMPREHENSION HOLD:** Viewer focuses on boundary finalization phase.
- **CLEANUP / EXIT:** Step 4 reduces to compact badge.
- **PERSISTENT STATE:** All 4 steps recapped.

---

### Anchor 42: `S11_CARELESS` (F3073..F3141, 68 frames)
- **ANCHOR:** `S11_CARELESS` (Words W0222..W0227, "If we change that order carelessly,")
- **WHAT APPEARS NOW:**
  - Warning flash card appears on right stage: WARNING: ORDER DEPENDENCE. Arrow shows what happens if Step 4 ran before Step 3.
- **CENTER-STAGE HERO:** Order warning card and danger indicator.
- **CAUSE:** If boundary is zeroed before applying markers, boundary becomes all zeros prematurely!
- **EFFECT / MOTION:** Red-amber warning banner slides in with caution triangle.
- **WHAT MUST NOT APPEAR YET:** Destroy marker consequence detail.
- **COMPREHENSION HOLD:** Viewer registers the high danger of incorrect loop ordering.
- **CLEANUP / EXIT:** Banner pulses.
- **PERSISTENT STATE:** Caution mode active.

---

### Anchor 43: `S11_DESTROY` (F3155..F3241, 86 frames)
- **ANCHOR:** `S11_DESTROY` (Words W0228..W0234, "we can destroy our own marker information.")
- **WHAT APPEARS NOW:**
  - Conceptual demo shows boundary zeros overwriting markers, causing catastrophic full-matrix zeroing. Red strike-through: MARKERS DESTROYED. Transition to celebration badge: O(1) SPACE PRESERVED.
- **CENTER-STAGE HERO:** Destruction visual demo and final mastery badge.
- **CAUSE:** Explaining the catastrophic failure mode and why the 4-step sequence is an absolute necessity.
- **EFFECT / MOTION:** Red smoke/strike on corrupted cells dissolves into solid green mastery badge.
- **WHAT MUST NOT APPEAR YET:** Nothing further.
- **COMPREHENSION HOLD:** Viewer has complete, rock-solid intuition for the optimal in-place algorithm.
- **CLEANUP / EXIT:** Scene settles into final master view.
- **PERSISTENT STATE:** Optimal code mastered.

---
