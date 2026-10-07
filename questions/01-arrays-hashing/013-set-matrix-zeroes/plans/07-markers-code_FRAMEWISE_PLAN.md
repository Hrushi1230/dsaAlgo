# Scene 07 — Method 2 Code (1D Marker Arrays): Framewise Scene Plan
**Question 013: Set Matrix Zeroes (LeetCode 73)**  
**Pattern 01: Arrays & Hashing**  
**Scene Name:** `07-markers-code`  
**Audio File:** `07-markers-code.mp3`  
**Total Duration:** 2188 frames @ 30fps (72.920s)  
**Strict Source of Truth:** `questions/01-arrays-hashing/013-set-matrix-zeroes/sync/07-markers-code.json` & `sync/07-markers-code.anchors.json`  

---

## 1. Scene Overview & Pedagogical Goal

Scene 07 translates the verified **Method 2 (Row and Column Marker Arrays)** algorithm into production Python code.
It preserves the core course invariant: **Discovery before Mutation** (first remember, then mutate).

1. **Split-Stage Presentation:**
   - **Left Stage:** `ChalkCodeEditorV2` with character-by-character progressive typing synchronized to narration.
   - **Right Stage:** Live Semantic Visualizer showing the 5×5 Matrix and docked 1D rails (`rowZero` and `colZero`).
2. **Pass 1 Implementation:**
   - Storage initialization: `m = len(matrix)`, `n = len(matrix[0])`.
   - Rail allocations: `rowZero = [False] * m`, `colZero = [False] * n`.
   - Cell scanning and marking condition:
     ```python
     for r in range(m):
         for c in range(n):
             if matrix[r][c] == 0:
                 rowZero[r] = True
                 colZero[c] = True
     ```
   - Reinforces the invariant: matrix is **never modified** during discovery.
3. **Pass 2 Implementation:**
   - Guided zeroing loop:
     ```python
     for r in range(m):
         for c in range(n):
             if rowZero[r] or colZero[c]:
                 matrix[r][c] = 0
     ```
4. **Complexity & Optimal Bridge:**
   - Demonstrates that time is $O(M \times N)$ (two linear sweeps).
   - Notes that extra memory is $O(M + N)$ (the two marker arrays).
   - Ends with the provocative insight: *The matrix itself already has $M$ cells on Row 0 and $N$ cells on Column 0!* (Teaser for Method 3 Optimal).

---

## 2. Spatial Composition & Zero-Collision Invariants

- **Canvas Size:** 1920 × 1080.
- **Background:** Full-frame dark green chalkboard (`theme.boardBg` = `#19523C`). **Zero AI-slop dark panels.**
- **Top Header:** $Y: 42..108$ (`fonts.display`, 26px title, category pill `01 · ARRAYS & HASHING`, method badge `METHOD 2 CODE: 1D MARKER ARRAYS (PYTHON)`).
- **Left Stage — Code Editor ($X: 80..1040$, $Y: 140..780$):**
  - Width: 960px, Height: 640px.
  - `ChalkCodeEditorV2` with Caveat / Patrick Hand title bar, 22px code font, 36px line height.
  - Progressive character-by-character reveal tied to word frames.
- **Right Stage — Live Visualizer ($X: 1080..1840$, $Y: 140..780$):**
  - Width: 760px, Height: 640px.
  - Matrix scaled for side-by-side legibility: Cell size: 48px, Gap: 6px. Total matrix: 264px × 264px.
  - `colZero` rail docked on top (5 slots: 48px × 32px).
  - `rowZero` rail docked on left (5 slots: 32px × 48px).
  - Bottom callouts inside visualizer zone ($Y: 620..760$) providing pedagogical context.
- **Bottom Clearance Invariant:**
  - Both stages stop cleanly at $Y: 780$.
  - Bottom Captions sit at $Y: 960..1040$.
  - Net clear vertical space: $960 - 780 = 180\text{px}$ (exceeds the $\ge 140\text{px}$ rule).
- **Zero Collision Guarantee:** Code editor, live visualizer, callout tags, and captions never overlap.

---

## 3. Mandatory Framewise Anchor Plan (26 Anchors)

### Anchor 1: `S07_FIRST` (F0..F15, 16 frames)
- **ANCHOR:** `S07_FIRST` (Word 0, "First,")
- **WHAT APPEARS NOW:**
  - Green chalkboard, top header: `METHOD 2 CODE: 1D MARKER ARRAYS (PYTHON)`.
  - `ChalkCodeEditorV2` window enters on left ($X: 80, Y: 140$).
  - Function signature renders: `def setZeroesMarkers(matrix: list[list[int]]) -> None:`
- **CENTER-STAGE HERO:** Code editor entry with blinking cursor on line 2.
- **CAUSE:** Audio signals start of code construction.
- **EFFECT / MOTION:** Window scales in gently (`0.95 -> 1.0`).
- **WHAT MUST NOT APPEAR YET:** Variables `m`, `n`, or marker array allocations.
- **COMPREHENSION HOLD:** Viewer observes the clean editor environment.
- **CLEANUP / EXIT:** Cursor blinks at indent level 1.
- **PERSISTENT STATE:** Editor active on line 2.

---

### Anchor 2: `S07_MN` (F28..F62, 35 frames)
- **ANCHOR:** `S07_MN` (Words 1-4, "store m and n.")
- **WHAT APPEARS NOW:**
  - Line 2 types out: `m = len(matrix)` (F28..F45).
  - Line 3 types out: `n = len(matrix[0])` (F45..F62).
  - Right stage visualizer displays matrix dimension tags: `M = 5 rows`, `N = 5 cols`.
- **CENTER-STAGE HERO:** Lines 2 & 3 in editor; matrix boundary tags.
- **CAUSE:** Recording dimensions for iteration and allocation bounds.
- **EFFECT / MOTION:** Code characters type progressively; dimension brackets pulse on matrix.
- **WHAT MUST NOT APPEAR YET:** Marker array allocation lines.
- **COMPREHENSION HOLD:** Matrix dimensions established.
- **CLEANUP / EXIT:** Lines 2 & 3 complete and settle.
- **PERSISTENT STATE:** `m` and `n` defined; matrix outline visible on right.

---

### Anchor 3: `S07_ROWARR` (F73..F160, 88 frames)
- **ANCHOR:** `S07_ROWARR` (Words 5-12, "Then create rowZero with m false values")
- **WHAT APPEARS NOW:**
  - Line 5 types out: `rowZero = [False] * m` (F73..F160).
  - Right stage: Vertical `rowZero` rail docks on left of matrix ($X: 1100$).
  - 5 slots appear showing `F` (dim chalk) in amber border (`theme.pivot`).
- **CENTER-STAGE HERO:** Line 5 in editor and vertical `rowZero` rail on right.
- **CAUSE:** Allocating row marker array of size $M$.
- **EFFECT / MOTION:** Code types character-by-character; vertical rail slides in with smooth spring.
- **WHAT MUST NOT APPEAR YET:** `colZero` allocation line.
- **COMPREHENSION HOLD:** Visual match between code syntax `[False] * m` and 5 vertical boolean slots.
- **CLEANUP / EXIT:** Line 5 completes.
- **PERSISTENT STATE:** Line 5 active; `rowZero` rail visible on right.

---

### Anchor 4: `S07_COLARR` (F160..F252, 93 frames)
- **ANCHOR:** `S07_COLARR` (Words 13-20, "and create colZero with n false values.")
- **WHAT APPEARS NOW:**
  - Line 6 types out: `colZero = [False] * n` (F160..F252).
  - Right stage: Horizontal `colZero` rail docks above matrix ($Y: 180$).
  - 5 slots appear showing `F` (dim chalk) in teal border (`theme.good`).
- **CENTER-STAGE HERO:** Line 6 in editor and horizontal `colZero` rail on right.
- **CAUSE:** Allocating column marker array of size $N$.
- **EFFECT / MOTION:** Code types character-by-character; horizontal rail slides down into place.
- **WHAT MUST NOT APPEAR YET:** Loops or conditions.
- **COMPREHENSION HOLD:** Both marker arrays are now allocated and initialized to False.
- **CLEANUP / EXIT:** Line 6 completes.
- **PERSISTENT STATE:** Both `rowZero` and `colZero` rails framing the matrix.

---

### Anchor 5: `S07_DISC` (F270..F333, 64 frames)
- **ANCHOR:** `S07_DISC` (Words 21-27, "The first pass is only for discovery.")
- **WHAT APPEARS NOW:**
  - Line 8 comment types out: `# Pass 1: Discovery Scan (Record zeroes)`.
  - Right stage status pill appears: `PASS 1: DISCOVERY (NO MATRIX MUTATION)`.
- **CENTER-STAGE HERO:** Comment on Line 8 & right stage status pill.
- **CAUSE:** Pedagogical reinforcement of the two-pass architecture.
- **EFFECT / MOTION:** Comment types in cyan (`theme.cyan`); status pill glows gently.
- **WHAT MUST NOT APPEAR YET:** Nested loops.
- **COMPREHENSION HOLD:** Invariant locked: discovery strictly precedes mutation.
- **CLEANUP / EXIT:** Comment settles.
- **PERSISTENT STATE:** Pass 1 section established.

---

### Anchor 6: `S07_EVERY` (F349..F373, 25 frames)
- **ANCHOR:** `S07_EVERY` (Words 28-30, "For every cell,")
- **WHAT APPEARS NOW:**
  - Line 9 types out: `for r in range(m):` (F349..F362).
  - Line 10 types out: `    for c in range(n):` (F362..F373).
- **CENTER-STAGE HERO:** Nested loop statements in editor.
- **CAUSE:** Iterating through every cell of the $M \times N$ matrix.
- **EFFECT / MOTION:** Loops type in with keyword syntax coloring (`theme.accent`).
- **WHAT MUST NOT APPEAR YET:** If condition line.
- **COMPREHENSION HOLD:** Standard grid traversal.
- **CLEANUP / EXIT:** Loops indented properly.
- **PERSISTENT STATE:** Nested loop header active.

---

### Anchor 7: `S07_IF` (F394..F442, 49 frames)
- **ANCHOR:** `S07_IF` (Words 31-34, "if matrix is zero,")
- **WHAT APPEARS NOW:**
  - Line 11 types out: `        if matrix[r][c] == 0:` (F394..F442).
  - Cell $(0, 2)$ on right stage matrix pulses with amber beacon glow (`theme.pivot`).
- **CENTER-STAGE HERO:** Line 11 condition & illuminated zero cell on right.
- **CAUSE:** Detecting original zero condition in current cell.
- **EFFECT / MOTION:** Code types; zero cell border pulses in amber.
- **WHAT MUST NOT APPEAR YET:** Assignment lines.
- **COMPREHENSION HOLD:** Conditional check isolates original zeroes.
- **CLEANUP / EXIT:** Line 11 completes.
- **PERSISTENT STATE:** Condition line active.

---

### Anchor 8: `S07_SETROW` (F467..F510, 44 frames)
- **ANCHOR:** `S07_SETROW` (Words 35-39, "set row zero to true")
- **WHAT APPEARS NOW:**
  - Line 12 types out: `            rowZero[r] = True` (F467..F510).
  - Right stage: Dotted projection ray shoots from cell $(0, 2)$ to `rowZero[0]`, mutating it to `True`!
- **CENTER-STAGE HERO:** Line 12 in editor & `rowZero[0]` slot turning `True`.
- **CAUSE:** Marking the row containing an original zero.
- **EFFECT / MOTION:** Character typing; projection ray draws across row; slot flashes gold.
- **WHAT MUST NOT APPEAR YET:** `colZero` assignment line.
- **COMPREHENSION HOLD:** Direct linkage from code line to marker array mutation.
- **CLEANUP / EXIT:** Slot holds `T`.
- **PERSISTENT STATE:** `rowZero[r] = True` active.

---

### Anchor 9: `S07_SETCOL` (F510..F564, 55 frames)
- **ANCHOR:** `S07_SETCOL` (Words 40-44, "and col zero to true.")
- **WHAT APPEARS NOW:**
  - Line 13 types out: `            colZero[c] = True` (F510..F564).
  - Right stage: Dotted projection ray shoots from cell $(0, 2)$ to `colZero[2]`, mutating it to `True`!
- **CENTER-STAGE HERO:** Line 13 in editor & `colZero[2]` slot turning `True`.
- **CAUSE:** Marking the column containing an original zero.
- **EFFECT / MOTION:** Character typing; vertical projection ray draws; slot flashes teal.
- **WHAT MUST NOT APPEAR YET:** Pass 2 lines.
- **COMPREHENSION HOLD:** Both row and column flags updated for the zero cell.
- **CLEANUP / EXIT:** Lines 12 & 13 complete Pass 1 body.
- **PERSISTENT STATE:** Pass 1 discovery logic complete.

---

### Anchor 10: `S07_IMPORTANT` (F585..F625, 41 frames)
- **ANCHOR:** `S07_IMPORTANT` (Words 45-48, "Notice the important part.")
- **WHAT APPEARS NOW:**
  - Pass 1 code block (lines 9-13) highlights with a soft golden chalk bracket.
  - Callout badge pops in: `⚠️ CRITICAL INVARIANT`.
- **CENTER-STAGE HERO:** Highlighted Pass 1 loop block.
- **CAUSE:** Directing viewer focus to algorithm invariant.
- **EFFECT / MOTION:** Code editor bracket draws with `RoughBox` chalk outline.
- **WHAT MUST NOT APPEAR YET:** Pass 2 code.
- **COMPREHENSION HOLD:** Viewer primes for crucial insight.
- **CLEANUP / EXIT:** Bracket remains softly visible.
- **PERSISTENT STATE:** Invariant focus established.

---

### Anchor 11: `S07_NOTCHANGE` (F651..F760, 110 frames)
- **ANCHOR:** `S07_NOTCHANGE` (Words 49-57, "During this pass, we are not changing the matrix.")
- **WHAT APPEARS NOW:**
  - Stamp appears on right stage matrix: `🔒 MATRIX IMMUTABLE IN PASS 1`.
  - Matrix border glows in steady green, proving zero cells have changed value.
- **CENTER-STAGE HERO:** Unmutated 5×5 Matrix on right stage.
- **CAUSE:** Proving that original data is preserved to prevent false zero spreading.
- **EFFECT / MOTION:** Lock stamp appears with subtle spring; matrix cells remain crisp.
- **WHAT MUST NOT APPEAR YET:** Pass 2 code.
- **COMPREHENSION HOLD:** Deep comprehension: changing matrix now would corrupt subsequent checks.
- **CLEANUP / EXIT:** Lock stamp holds.
- **PERSISTENT STATE:** Matrix confirmed untouched.

---

### Anchor 12: `S07_RECORD` (F770..F839, 70 frames)
- **ANCHOR:** `S07_RECORD` (Words 58-62, "We are only recording information.")
- **WHAT APPEARS NOW:**
  - Both marker rails (`rowZero` and `colZero`) glow with synchronized pulse.
  - Callout chip below matrix: `📝 Recording to auxiliary rails: O(M + N)`.
- **CENTER-STAGE HERO:** Glowing marker rails on right stage.
- **CAUSE:** Clarifying that all discovery data goes into external rails.
- **EFFECT / MOTION:** Rails pulse in amber and teal; callout enters with spring.
- **WHAT MUST NOT APPEAR YET:** Pass 2 code.
- **COMPREHENSION HOLD:** Information capture is complete.
- **CLEANUP / EXIT:** Lock stamp fades at F850 to prepare for Pass 2.
- **PERSISTENT STATE:** Discovery phase finalized.

---

### Anchor 13: `S07_AFTER` (F863..F965, 103 frames)
- **ANCHOR:** `S07_AFTER` (Words 63-70, "After discovery is complete, start the second pass.")
- **WHAT APPEARS NOW:**
  - Blank line 14, then Line 15 comment types out: `# Pass 2: Guided Mutation (Zero from markers)` (F863..F965).
  - Right stage status pill updates: `PASS 2: GUIDED MUTATION`.
- **CENTER-STAGE HERO:** Line 15 comment in editor.
- **CAUSE:** Transitioning to matrix modification phase.
- **EFFECT / MOTION:** Comment types in seafoam green (`theme.good`); status pill switches color.
- **WHAT MUST NOT APPEAR YET:** Pass 2 nested loops.
- **COMPREHENSION HOLD:** Stage set for zero propagation.
- **CLEANUP / EXIT:** Comment settles.
- **PERSISTENT STATE:** Pass 2 section active.

---

### Anchor 14: `S07_EVERYCELL` (F982..F1012, 31 frames)
- **ANCHOR:** `S07_EVERYCELL` (Words 71-73, "For every cell,")
- **WHAT APPEARS NOW:**
  - Line 16 types out: `for r in range(m):` (F982..F995).
  - Line 17 types out: `    for c in range(n):` (F995..F1012).
- **CENTER-STAGE HERO:** Pass 2 nested loop headers.
- **CAUSE:** Second full sweep over the grid.
- **EFFECT / MOTION:** Loops type progressively.
- **WHAT MUST NOT APPEAR YET:** OR condition line.
- **COMPREHENSION HOLD:** Traversing grid again, this time to apply zeroes.
- **CLEANUP / EXIT:** Indentation positioned for condition.
- **PERSISTENT STATE:** Pass 2 loop shell active.

---

### Anchor 15: `S07_CHECKROW` (F1026..F1058, 33 frames)
- **ANCHOR:** `S07_CHECKROW` (Words 74-77, "check its row marker")
- **WHAT APPEARS NOW:**
  - Line 18 begins typing: `        if rowZero[r]` (F1026..F1058).
  - Current row slot in `rowZero` flashes cyan on right stage.
- **CENTER-STAGE HERO:** Line 18 first operand & active row slot.
- **CAUSE:** Evaluating row marker condition.
- **EFFECT / MOTION:** Characters type; row slot outlines in cyan.
- **WHAT MUST NOT APPEAR YET:** `or colZero[c]`.
- **COMPREHENSION HOLD:** Checking if row contained any original zero.
- **CLEANUP / EXIT:** Code pauses before `or`.
- **PERSISTENT STATE:** First half of condition visible.

---

### Anchor 16: `S07_CHECKCOL` (F1058..F1113, 56 frames)
- **ANCHOR:** `S07_CHECKCOL` (Words 78-81, "and its column marker.")
- **WHAT APPEARS NOW:**
  - Line 18 finishes typing: ` or colZero[c]:` (F1058..F1113).
  - Current column slot in `colZero` flashes cyan on right stage.
- **CENTER-STAGE HERO:** Complete Line 18 condition.
- **CAUSE:** Evaluating column marker condition.
- **EFFECT / MOTION:** `or colZero[c]:` types out; column slot outlines in cyan.
- **WHAT MUST NOT APPEAR YET:** Zero assignment line.
- **COMPREHENSION HOLD:** Complete disjunction: either row OR column is marked.
- **CLEANUP / EXIT:** Line 18 completes and glows in cyan.
- **PERSISTENT STATE:** Line 18 fully rendered.

---

### Anchor 17: `S07_EITHER` (F1130..F1174, 45 frames)
- **ANCHOR:** `S07_EITHER` (Words 82-86, "If either one is true,")
- **WHAT APPEARS NOW:**
  - Line 18 condition highlights with bright glow.
  - Micro-callout below code: `True if rowZero[r] == True OR colZero[c] == True`.
- **CENTER-STAGE HERO:** Highlighted Line 18 boolean expression.
- **CAUSE:** Audio explains the OR logic.
- **EFFECT / MOTION:** Condition pulses with seafoam glow (`theme.good`).
- **WHAT MUST NOT APPEAR YET:** Matrix cell mutation.
- **COMPREHENSION HOLD:** Clear understanding that a single True flag triggers zeroing.
- **CLEANUP / EXIT:** Callout holds.
- **PERSISTENT STATE:** Condition verified.

---

### Anchor 18: `S07_SETZERO` (F1195..F1262, 68 frames)
- **ANCHOR:** `S07_SETZERO` (Words 87-92, "set that matrix cell to zero.")
- **WHAT APPEARS NOW:**
  - Line 19 types out: `            matrix[r][c] = 0` (F1195..F1262).
  - Right stage matrix cells flash and mutate to `0` in emerald green (`theme.good`).
- **CENTER-STAGE HERO:** Line 19 assignment in editor & matrix cell zeroing on right.
- **CAUSE:** Executing the mutation statement.
- **EFFECT / MOTION:** Line 19 types; matrix cells transition to `0` with chalk flash.
- **WHAT MUST NOT APPEAR YET:** Final summary cards.
- **COMPREHENSION HOLD:** Cell in-place mutation demonstrated.
- **CLEANUP / EXIT:** Line 19 complete.
- **PERSISTENT STATE:** Full Python solution visible in editor.

---

### Anchor 19: `S07_ALL` (F1277..F1302, 26 frames)
- **ANCHOR:** `S07_ALL` (Words 93-95, "That is all.")
- **WHAT APPEARS NOW:**
  - Editor border glows in steady emerald (`theme.good`).
  - Small green checkmark badge appears on top-right of editor: `✓ METHOD 2 COMPLETE`.
- **CENTER-STAGE HERO:** Complete, formatted Python solution in `ChalkCodeEditorV2`.
- **CAUSE:** Solution implementation is complete.
- **EFFECT / MOTION:** Gentle pulse across entire editor container.
- **WHAT MUST NOT APPEAR YET:** Complexity discussion cards.
- **COMPREHENSION HOLD:** Clean, elegant implementation visible in its entirety.
- **CLEANUP / EXIT:** Badge settles.
- **PERSISTENT STATE:** Finished code editor.

---

### Anchor 20: `S07_FIRSTREM` (F1320..F1438, 119 frames)
- **ANCHOR:** `S07_FIRSTREM` (Words 96-103, "The code directly follows the invariant: First, remember,")
- **WHAT APPEARS NOW:**
  - Pass 1 block (lines 8-13) highlights with golden bracket: `1️⃣ REMEMBER (Pass 1)`.
  - Right stage highlights `rowZero` and `colZero` storage rails.
- **CENTER-STAGE HERO:** Pass 1 code block in editor.
- **CAUSE:** Reviewing the foundational two-phase invariant.
- **EFFECT / MOTION:** Golden bracket animates around Pass 1 lines.
- **WHAT MUST NOT APPEAR YET:** Pass 2 bracket.
- **COMPREHENSION HOLD:** Discovery is purely non-destructive recording.
- **CLEANUP / EXIT:** Bracket holds softly.
- **PERSISTENT STATE:** Pass 1 highlighted.

---

### Anchor 21: `S07_THENMUT` (F1451..F1492, 42 frames)
- **ANCHOR:** `S07_THENMUT` (Words 104-105, "then mutate.")
- **WHAT APPEARS NOW:**
  - Pass 2 block (lines 15-19) highlights with teal bracket: `2️⃣ MUTATE (Pass 2)`.
  - Right stage highlights matrix cells updating.
- **CENTER-STAGE HERO:** Dual bracket visualization on editor.
- **CAUSE:** Concluding the two-phase invariant explanation.
- **EFFECT / MOTION:** Teal bracket animates around Pass 2 lines.
- **WHAT MUST NOT APPEAR YET:** Complexity comparison card.
- **COMPREHENSION HOLD:** Complete mental model: Remember $\to$ Mutate.
- **CLEANUP / EXIT:** Brackets fade into subtle margin lines.
- **PERSISTENT STATE:** Invariant fully demonstrated.

---

### Anchor 22: `S07_TIME` (F1504..F1612, 109 frames)
- **ANCHOR:** `S07_TIME` (Words 106-116, "The time is already linear in the number of matrix cells,")
- **WHAT APPEARS NOW:**
  - Complexity pill appears below editor ($X: 80..520, Y: 800..860$):
    - `⏱️ TIME COMPLEXITY: O(M × N)`
    - `Two full matrix sweeps: M×N + M×N = 2·MN`
- **CENTER-STAGE HERO:** Time complexity card below editor.
- **CAUSE:** Explaining runtime cost.
- **EFFECT / MOTION:** Card slides in with smooth spring, colored in emerald (`theme.good`).
- **WHAT MUST NOT APPEAR YET:** Space complexity card.
- **COMPREHENSION HOLD:** Time complexity is already optimal ($O(M \times N)$).
- **CLEANUP / EXIT:** Card holds.
- **PERSISTENT STATE:** Time complexity card visible.

---

### Anchor 23: `S07_MEMORY` (F1617..F1796, 180 frames)
- **ANCHOR:** `S07_MEMORY` (Words 117-130, "but the extra memory is still proportional to the number of rows plus columns.")
- **WHAT APPEARS NOW:**
  - Space complexity card appears next to time card ($X: 560..1040, Y: 800..860$):
    - `💾 SPACE COMPLEXITY: O(M + N)`
    - `rowZero [M] + colZero [N] = M + N booleans`
    - Amber/coral warning border (`theme.pivot`).
- **CENTER-STAGE HERO:** Space complexity card & external marker rails.
- **CAUSE:** Identifying the remaining memory footprint of Method 2.
- **EFFECT / MOTION:** Card pops in with spring; marker rails pulse in amber.
- **WHAT MUST NOT APPEAR YET:** Question teaser.
- **COMPREHENSION HOLD:** While $O(M+N)$ is much better than $O(MN)$, it is still auxiliary memory.
- **CLEANUP / EXIT:** Both complexity cards hold side-by-side.
- **PERSISTENT STATE:** Time $O(MN)$ and Space $O(M+N)$ established.

---

### Anchor 24: `S07_REMOVE` (F1834..F1933, 100 frames)
- **ANCHOR:** `S07_REMOVE` (Words 131-138, "Can we remove even those two marker arrays?")
- **WHAT APPEARS NOW:**
  - Both marker rails on right stage flicker with question marks `?`.
  - Callout banner pops in at center-bottom:
    - `❓ Can we achieve O(1) Auxiliary Space? Remove external arrays?`
- **CENTER-STAGE HERO:** Flickering marker rails on right stage.
- **CAUSE:** Posing the breakthrough question leading to the Optimal Solution.
- **EFFECT / MOTION:** Question banner glides up with spring (`scale: 0.95 -> 1.0`).
- **WHAT MUST NOT APPEAR YET:** Matrix row 0 / col 0 highlight.
- **COMPREHENSION HOLD:** Audience contemplates if extra arrays can be eliminated.
- **CLEANUP / EXIT:** Banner holds for impact.
- **PERSISTENT STATE:** Open inquiry active.

---

### Anchor 25: `S07_LOOK` (F1953..F2029, 77 frames)
- **ANCHOR:** `S07_LOOK` (Words 139-144, "Look carefully at the matrix itself.")
- **WHAT APPEARS NOW:**
  - Camera/focus shifts dramatically to the 5×5 Matrix on the right stage.
  - External marker rails fade slightly into dim background.
- **CENTER-STAGE HERO:** The 5×5 Matrix itself.
- **CAUSE:** Directing eyes to internal matrix structure.
- **EFFECT / MOTION:** Matrix scales up slightly (`1.06x`) with golden chalk halo.
- **WHAT MUST NOT APPEAR YET:** Boundary row/col highlight.
- **COMPREHENSION HOLD:** Viewer inspects the matrix grid.
- **CLEANUP / EXIT:** Focus locked onto matrix.
- **PERSISTENT STATE:** Matrix halo active.

---

### Anchor 26: `S07_STORAGE` (F2056..F2188, 133 frames)
- **ANCHOR:** `S07_STORAGE` (Words 145-153, "It already contains storage in exactly those two dimensions.")
- **WHAT APPEARS NOW:**
  - Row 0 of the matrix lights up in bright gold (`theme.pivot`): `ROW 0: M cells!`.
  - Column 0 of the matrix lights up in bright teal (`theme.good`): `COL 0: N cells!`.
  - Teaser pill below matrix:
    - `💡 USE ROW 0 & COL 0 AS IN-PLACE MARKERS! ➔ O(1) SPACE!`
- **CENTER-STAGE HERO:** Row 0 and Column 0 illuminated on the matrix boundary.
- **CAUSE:** The grand conceptual reveal teasing Method 3 (Optimal).
- **EFFECT / MOTION:** Boundary cells pulse with neon chalk glow; teaser pill glides up to F2188.
- **WHAT MUST NOT APPEAR YET:** Method 3 implementation.
- **COMPREHENSION HOLD:** Mind-blown moment: we don't need external arrays because the first row and first column can store the flags!
- **CLEANUP / EXIT:** Holds gracefully to final frame F2188.
- **PERSISTENT STATE:** Perfect cliffhanger handoff to Scene 08 / 09.

---

## 4. Zero-Collision Checklist

- [x] **Split Stage Balance:** Left stage ($W: 960$) and Right stage ($W: 760$) are cleanly separated by a 40px gutter ($X: 1040..1080$).
- [x] **Clearance Invariant:** Both stages terminate at $Y: 780$, leaving $180\text{px}$ clear buffer above captions at $Y: 960$.
- [x] **Zero Spoilers:** Code lines type strictly character-by-character on their spoken frames. No future lines appear.
- [x] **100% Remotion Determinism:** Zero CSS transitions, 100% frame-derived spring/interpolate mathematics.

---

## 5. REUSE / EXTEND / CREATE

- **REUSE:**
  - `ChalkCodeEditorV2` from `kit/components/ChalkCodeEditorV2`.
  - `RoughBox`, `ChalkText` from `kit/components`.
  - `Captions` from `kit/components/Captions`.
  - `ChalkboardBackground`, `ChalkFilters` from `kit/lib/chalk`.
  - `theme`, `fonts` from `kit/lib/theme`.
- **CREATE:**
  - `plans/07-markers-code_FRAMEWISE_PLAN.md`: Approved framewise plan.
  - `src/Scene07MarkersCode.tsx`: Complete Remotion component for Scene 07.
