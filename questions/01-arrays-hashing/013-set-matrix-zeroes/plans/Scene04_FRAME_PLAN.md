# Scene 04 — Method 1 Code: Framewise Scene Plan
**Question 013: Set Matrix Zeroes (LeetCode 73)**  
**Pattern 01: Arrays & Hashing**  
**Scene Name:** `04-copy-code`  
**Audio File:** `04-copy-code.mp3`  
**Total Duration:** 1981 frames @ 30fps (66.020s)  
**Strict Source of Truth:** `questions/01-arrays-hashing/013-set-matrix-zeroes/sync/04-copy-code.json` & `sync/04-copy-code.anchors.json`  

---

## 1. Scene Overview & Pedagogical Goal

Scene 04 translates the dual-matrix concept from Scene 03 into exact Python code.
It demonstrates:
1. Creating an untouched deep copy: `original = [row[:] for row in matrix]`.
2. Storing dimensions: `m = len(matrix)`, `n = len(matrix[0])`.
3. Scanning the copy: `for r in range(m): for c in range(n):`.
4. Triggering row and column zeroing in the working matrix: `matrix[r][j] = 0` and `matrix[i][c] = 0`.
5. Proving why this code is 100% sound: Discovery source never mutates, eliminating false chain reactions.
6. Critiquing space waste: Copying 25 values ($O(M \times N)$) when only zero coordinates matter, setting up the Method 2 hook.

---

## 2. Spatial Composition & Zero-Collision Invariants

- **Canvas Size:** 1920 × 1080.
- **Top Header:** $Y: 42..108$ (`fonts.display`, 44px title, category pill, method badge).
- **Center Stage:**
  - **Code Editor Card (Left/Center, $X: 100..1120$, $Y: 140..780$):**
    - Width: 1020px, Height: 640px.
    - Clean dark slate chalk-bordered panel (`background: rgba(14, 26, 20, 0.88)`).
    - Code lines reveal progressively with line-by-line chalk highlight ribbons.
  - **Supporting Context Panel (Right, $X: 1160..1820$, $Y: 140..780$):**
    - Width: 660px, Height: 640px.
    - $F0..F550$: Read-Only clone reminder & Dimension cards ($m=5, n=5$).
    - $F553..F950$: Dual-action callouts (Row sweep + Column sweep mechanics).
    - $F976..F1410$: Soundness Guarantee card ("Read Original → Write Working", "No False Chain").
    - $F1420..F1981$: Auxiliary Space Breakdown ($O(M \times N)$ memory cost card + Question Hook).
- **Bottom Clearance:**
  - Panels end at $Y: 780$.
  - Bottom Captions sit at $Y: 980$.
  - Net clear vertical space: $980 - 780 = 200\text{px}$ (well above the required $\ge 140\text{px}$).

---

## 3. Framewise Anchor Choreography (19 Anchors)

### Anchor 1: `S04_FIRST` (F0..F31, 32 frames)
- **ANCHOR:** `S04_FIRST` (Word 0, "First,")
- **WHAT APPEARS NOW:**
  - Blackboard background, dust particles.
  - Header: "01 · ARRAYS & HASHING", "SET MATRIX ZEROES", "METHOD 1 · PYTHON IMPLEMENTATION".
  - Code Editor window fades in ($X: 100, Y: 140$). Line 1 appears: `def setZeroesCopy(matrix):`.
- **CENTER-STAGE HERO:** Code window header & function signature.
- **CAUSE:** Beginning code construction.
- **EFFECT / MOTION:** Code box springs in with subtle chalk drop-shadow.
- **WHAT MUST NOT APPEAR YET:** Loop bodies, space complexity cards.
- **COMPREHENSION HOLD:** Clean opening layout.
- **CLEANUP / EXIT:** Smooth transition into copy creation.
- **PERSISTENT STATE:** Code editor frame active.

---

### Anchor 2: `S04_COPY` (F32..F96, 65 frames)
- **ANCHOR:** `S04_COPY` (Words 1-7, "make a full copy of the matrix.")
- **WHAT APPEARS NOW:**
  - Code Line 2 appears: `    original = [row[:] for row in matrix]`.
  - Right panel shows Mini-Matrix illustration with label "ORIGINAL COPY (CLONE)".
- **CENTER-STAGE HERO:** Line 2 with glowing cyan highlight ribbon.
- **CAUSE:** Spoken instruction to clone the matrix.
- **EFFECT / MOTION:** Typewriter character reveal on line 2, mini matrix slides in from right ($X: 1300$).
- **WHAT MUST NOT APPEAR YET:** Dimension variables, scan loops.
- **COMPREHENSION HOLD:** Visualizing list comprehension `row[:]` creating independent rows.
- **CLEANUP / EXIT:** Keep mini-matrix visible.
- **PERSISTENT STATE:** Lines 1-2 visible in editor.

---

### Anchor 3: `S04_NEVER_MOD` (F97..F183, 87 frames)
- **ANCHOR:** `S04_NEVER_MOD` (Words 8-13, "This copy will never be modified.")
- **WHAT APPEARS NOW:**
  - Golden padlock badge on the mini-matrix: "READ-ONLY SOURCE OF TRUTH".
  - Subtle red strike-through icon over any write attempts to `original`.
- **CENTER-STAGE HERO:** Golden padlock badge and line 2 annotation.
- **CAUSE:** Emphasizing immutability of the discovery copy.
- **EFFECT / MOTION:** Padlock stamp scales in with elastic bounce (`scale: 1.15 -> 1.0`).
- **WHAT MUST NOT APPEAR YET:** Dimension extraction.
- **COMPREHENSION HOLD:** Viewer registers that `original` is purely a reference snapshot.
- **CLEANUP / EXIT:** Padlock docks cleanly in top right of mini-matrix.
- **PERSISTENT STATE:** Code lines 1-2, read-only clone badge.

---

### Anchor 4: `S04_DIMS` (F184..F320, 137 frames)
- **ANCHOR:** `S04_DIMS` (Words 14-24, "Then store the number of rows and the number of columns.")
- **WHAT APPEARS NOW:**
  - Code Lines 4 & 5 appear:
    - `    m = len(matrix)`
    - `    n = len(matrix[0])`
  - Dimensions tag card in right panel: `m = 5 rows`, `n = 5 cols`.
- **CENTER-STAGE HERO:** Lines 4 and 5 highlighted in soft accent green.
- **CAUSE:** Establishing loop boundaries.
- **EFFECT / MOTION:** Lines 4 and 5 slide down and highlight; dimension badges glow.
- **WHAT MUST NOT APPEAR YET:** Nested for loops.
- **COMPREHENSION HOLD:** Clearly defined boundaries $m$ and $n$.
- **CLEANUP / EXIT:** Dimension badges settle into header info.
- **PERSISTENT STATE:** Lines 1, 2, 4, 5 visible.

---

### Anchor 5: `S04_SCAN_COPY` (F321..F421, 101 frames)
- **ANCHOR:** `S04_SCAN_COPY` (Words 25-32, "Now scan every cell in the original copy.")
- **WHAT APPEARS NOW:**
  - Code Lines 7 & 8 appear:
    - `    for r in range(m):`
    - `        for c in range(n):`
  - Scanning reticle icon appears over mini-matrix scanning through cells $(r, c)$.
- **CENTER-STAGE HERO:** Nested `for` loop headers.
- **CAUSE:** Systematic traversal across $m \times n$ cells.
- **EFFECT / MOTION:** Yellow highlight bracket groups lines 7 & 8; reticle sweeps diagonally.
- **WHAT MUST NOT APPEAR YET:** Zero checking condition.
- **COMPREHENSION HOLD:** Understanding $O(M \times N)$ total iterations.
- **CLEANUP / EXIT:** Reticle pulses softly.
- **PERSISTENT STATE:** Lines 1..8 visible.

---

### Anchor 6: `S04_NONZERO` (F422..F552, 131 frames)
- **ANCHOR:** `S04_NONZERO` (Words 33-42, "If the original cell is not zero, we do nothing.")
- **WHAT APPEARS NOW:**
  - Right panel callout: "original[r][c] != 0 → NO-OP / CONTINUE".
  - Non-zero cells in mini-matrix (e.g. 7, 10, 22) dim slightly, showing no modification triggered.
- **CENTER-STAGE HERO:** Right panel decision callout card.
- **CAUSE:** Explaining the negative branch (pass).
- **EFFECT / MOTION:** Dimming animation on non-zero numbers, checkmark on skip.
- **WHAT MUST NOT APPEAR YET:** Zero assignment statements.
- **COMPREHENSION HOLD:** Reinforcing that non-zero entries never cause changes.
- **CLEANUP / EXIT:** No-op card fades out.
- **PERSISTENT STATE:** Lines 1..8 visible.

---

### Anchor 7: `S04_IS_ZERO` (F553..F642, 90 frames)
- **ANCHOR:** `S04_IS_ZERO` (Words 43-49, "But when the original cell is zero,")
- **WHAT APPEARS NOW:**
  - Code Line 9 appears: `            if original[r][c] == 0:`.
  - Amber glow around line 9; red dot targets $(r, c)$ in mini-matrix.
- **CENTER-STAGE HERO:** Line 9 conditional check.
- **CAUSE:** Detection of an original zero.
- **EFFECT / MOTION:** Line 9 illuminates with chalk amber ribbon.
- **WHAT MUST NOT APPEAR YET:** Inner row/col zeroing loops.
- **COMPREHENSION HOLD:** Crucial check: checks `original[r][c]`, NOT `matrix[r][c]`.
- **CLEANUP / EXIT:** Maintains active glow.
- **PERSISTENT STATE:** Lines 1..9 visible.

---

### Anchor 8: `S04_ZERO_ROW` (F643..F753, 111 frames)
- **ANCHOR:** `S04_ZERO_ROW` (Words 50-58, "we zero the corresponding row in the working matrix.")
- **WHAT APPEARS NOW:**
  - Code Lines 10 & 11 appear:
    - `                for j in range(n):`
    - `                    matrix[r][j] = 0`
  - Horizontal blue arrow sweeps across row $r$ in right panel visual.
- **CENTER-STAGE HERO:** Lines 10-11, showing write to `matrix[r][j]`.
- **CAUSE:** Zeroing row $r$ of the working matrix.
- **EFFECT / MOTION:** Horizontal sweep animation across row $r$ with chalk particle trail.
- **WHAT MUST NOT APPEAR YET:** Column zeroing loop.
- **COMPREHENSION HOLD:** Noting target is `matrix` (working), not `original`.
- **CLEANUP / EXIT:** Horizontal arrow settles into a permanent blue line.
- **PERSISTENT STATE:** Lines 1..11 visible.

---

### Anchor 9: `S04_ZERO_COL` (F754..F862, 109 frames)
- **ANCHOR:** `S04_ZERO_COL` (Words 59-68, "Then we zero the corresponding column in the working matrix.")
- **WHAT APPEARS NOW:**
  - Code Lines 13 & 14 appear:
    - `                for i in range(m):`
    - `                    matrix[i][c] = 0`
  - Vertical purple arrow sweeps down column $c$ in right panel visual.
- **CENTER-STAGE HERO:** Lines 13-14, showing write to `matrix[i][c]`.
- **CAUSE:** Zeroing column $c$ of the working matrix.
- **EFFECT / MOTION:** Vertical sweep animation intersecting row $r$ into a crosshair.
- **WHAT MUST NOT APPEAR YET:** Full algorithm summary banner.
- **COMPREHENSION HOLD:** Crosshair visual confirms full row $r$ and col $c$ zeroed.
- **CLEANUP / EXIT:** Crosshair glow gently pulses.
- **PERSISTENT STATE:** Full code (lines 1..14) completely assembled.

---

### Anchor 10: `S04_COMPLETE_IDEA` (F863..F975, 113 frames)
- **ANCHOR:** `S04_COMPLETE_IDEA` (Words 69-73, "That is the complete idea.")
- **WHAT APPEARS NOW:**
  - Code Editor border glows softly in chalk cyan.
  - "COMPLETE IMPLEMENTATION" badge appears above editor.
- **CENTER-STAGE HERO:** Complete, elegant 14-line Python function.
- **CAUSE:** Concluding the code walk-through.
- **EFFECT / MOTION:** Entire code box breathes gently (`scale: 1.0 -> 1.02 -> 1.0`).
- **WHAT MUST NOT APPEAR YET:** Space critique card.
- **COMPREHENSION HOLD:** Clean view of the entire working function.
- **CLEANUP / EXIT:** Right side mini-matrix transitions to architectural rule cards.
- **PERSISTENT STATE:** Complete code visible.

---

### Anchor 11: `S04_READ_WRITE` (F976..F1089, 114 frames)
- **ANCHOR:** `S04_READ_WRITE` (Words 74-82, "Read from the copy, write into the real matrix.")
- **WHAT APPEARS NOW:**
  - Architectural Rule Card in right panel:
    - Top Box: `READ ONLY ← original` (Cyan)
    - Downward Arrow: `DECISION`
    - Bottom Box: `WRITE TARGET → matrix` (Green)
- **CENTER-STAGE HERO:** Two-tone architectural flow diagram.
- **CAUSE:** Stating the core separation of concerns.
- **EFFECT / MOTION:** Arrow animates downwards with energy pulse.
- **WHAT MUST NOT APPEAR YET:** Complexity calculations.
- **COMPREHENSION HOLD:** Crystal clear understanding of asymmetric read vs write.
- **CLEANUP / EXIT:** Diagram docks into right panel.
- **PERSISTENT STATE:** Code on left, architectural rule card on right.

---

### Anchor 12: `S04_DISCOVERY_STABLE` (F1090..F1182, 93 frames)
- **ANCHOR:** `S04_DISCOVERY_STABLE` (Words 83-88, "Because the discovery source never changes.")
- **WHAT APPEARS NOW:**
  - Anchor tag on `original`: "DISCOVERY SOURCE: STATIC & IMMUTABLE".
  - Shield icon protects `original`.
- **CENTER-STAGE HERO:** Invariance shield on `original`.
- **CAUSE:** Reinforcing why no contamination occurs.
- **EFFECT / MOTION:** Shield shines with specular reflection sweep.
- **WHAT MUST NOT APPEAR YET:** False chain reaction callout.
- **COMPREHENSION HOLD:** Static input guarantees deterministic discovery.
- **CLEANUP / EXIT:** Shield rests beside `original` variable.
- **PERSISTENT STATE:** Shield active.

---

### Anchor 13: `S04_NO_FALSE_CHAIN` (F1183..F1344, 162 frames)
- **ANCHOR:** `S04_NO_FALSE_CHAIN` (Words 89-99, "A zero created by us cannot create a false chain reaction.")
- **WHAT APPEARS NOW:**
  - Prominent verification badge: "CHAIN REACTION PREVENTED".
  - Crossed-out runaway domino icon.
- **CENTER-STAGE HERO:** Chain reaction prevention banner.
- **CAUSE:** Proving algorithmic bug freedom.
- **EFFECT / MOTION:** Red prohibition stamp `⊘` stamps over runaway propagation arrows.
- **WHAT MUST NOT APPEAR YET:** Space cost analysis.
- **COMPREHENSION HOLD:** Direct contrast with naive in-place zeroing from Scene 02.
- **CLEANUP / EXIT:** Banner remains highlighted.
- **PERSISTENT STATE:** Prevention badge confirmed.

---

### Anchor 14: `S04_EASY_TRUST` (F1345..F1419, 75 frames)
- **ANCHOR:** `S04_EASY_TRUST` (Words 100-105, "The code is easy to trust.")
- **WHAT APPEARS NOW:**
  - Green verification seal: "CORRECTNESS: 100% PROVEN".
  - Sparkle particles around code editor.
- **CENTER-STAGE HERO:** Green trust seal.
- **CAUSE:** Validating logical correctness.
- **EFFECT / MOTION:** Seal stamps down with sound and particle burst.
- **WHAT MUST NOT APPEAR YET:** Space cost breakdown.
- **COMPREHENSION HOLD:** Method 1 is correct, but...
- **CLEANUP / EXIT:** Trust seal smoothly fades into card border.
- **PERSISTENT STATE:** Code editor in settled state.

---

### Anchor 15: `S04_COST_LARGE` (F1420..F1567, 148 frames)
- **ANCHOR:** `S04_COST_LARGE` (Words 106-117, "But the cost is much larger than the information we actually need.")
- **WHAT APPEARS NOW:**
  - Right panel transforms into "SPACE COMPLEXITY BREAKDOWN".
  - Warning amber badge: `Auxiliary Space: O(M × N)`.
  - Red exclamation indicator next to `original = [row[:] for row in matrix]`.
- **CENTER-STAGE HERO:** Auxiliary Space warning card.
- **CAUSE:** Transitioning from correctness to complexity critique.
- **EFFECT / MOTION:** Right panel slides leftwards slightly, amber border illuminates.
- **WHAT MUST NOT APPEAR YET:** Irrelevant values breakdown.
- **COMPREHENSION HOLD:** Recognizing that allocating another full matrix is wasteful.
- **CLEANUP / EXIT:** Space card remains hero.
- **PERSISTENT STATE:** Space complexity card active.

---

### Anchor 16: `S04_COPIED_EVERY` (F1568..F1630, 63 frames)
- **ANCHOR:** `S04_COPIED_EVERY` (Words 118-121, "We copied every value.")
- **WHAT APPEARS NOW:**
  - Graphic of full 5×5 grid (25 cells) glowing in amber: "25 CELLS STORED".
  - Memory meter showing full buffer usage.
- **CENTER-STAGE HERO:** 25-cell memory meter.
- **CAUSE:** Visualizing excessive allocation.
- **EFFECT / MOTION:** All 25 cells flash simultaneously with memory usage counter ticking up.
- **WHAT MUST NOT APPEAR YET:** Filtering out non-zeroes.
- **COMPREHENSION HOLD:** Visualizing 100% data duplication.
- **CLEANUP / EXIT:** Cells stay dimly lit.
- **PERSISTENT STATE:** 25-cell counter visible.

---

### Anchor 17: `S04_IRRELEVANT` (F1631..F1788, 158 frames)
- **ANCHOR:** `S04_IRRELEVANT` (Words 122-132, "Even though most of those values are irrelevant to the decision.")
- **WHAT APPEARS NOW:**
  - 22 non-zero cells (1, 2, 3, 4, 5, 7, 8, etc.) grey out and show "IRRELEVANT".
  - Only the 3 original zero cells remain highlighted: "ONLY 3 CELLS MATTERED!".
  - Ratio callout: `3 / 25 cells useful (12%)`.
- **CENTER-STAGE HERO:** Contrast between 3 useful cells and 22 wasted cells.
- **CAUSE:** Demonstrating 88% wasted memory storage.
- **EFFECT / MOTION:** 22 cells fade out to 25% opacity; 3 zeros pulse with white rings.
- **WHAT MUST NOT APPEAR YET:** Method 2 row/column marker hint.
- **COMPREHENSION HOLD:** Deep realization: why keep the numbers when we only need the coordinates?
- **CLEANUP / EXIT:** Focus tightens on the coordinate requirement.
- **PERSISTENT STATE:** Ratio callout visible.

---

### Anchor 18: `S04_BETTER_Q` (F1789..F1871, 83 frames)
- **ANCHOR:** `S04_BETTER_Q` (Words 133-138, "So let's ask a better question.")
- **WHAT APPEARS NOW:**
  - Pedagogical bridge banner: "CRITICAL OPTIMIZATION QUESTION".
  - Question mark icon animates in.
- **CENTER-STAGE HERO:** Question banner across right panel.
- **CAUSE:** Directing learner attention to the fundamental requirement.
- **EFFECT / MOTION:** Question banner expands with smooth chalk outline reveal.
- **WHAT MUST NOT APPEAR YET:** Exact answer (Scene 05 will reveal row/col markers).
- **COMPREHENSION HOLD:** Preparing learner for conceptual leap.
- **CLEANUP / EXIT:** Leads directly into the hook question.
- **PERSISTENT STATE:** Question banner active.

---

### Anchor 19: `S04_WHAT_INFO` (F1872..F1981, 110 frames)
- **ANCHOR:** `S04_WHAT_INFO` (Words 139-146, "What information do we truly need to remember?")
- **WHAT APPEARS NOW:**
  - Bold callout card:
    - `"WHAT DO WE TRULY NEED TO REMEMBER?"`
    - Subtitle: `Do we need the numbers? Or just row & column flags?`
    - Arrow pointing forward to Method 2.
- **CENTER-STAGE HERO:** Bold reflection callout card.
- **CAUSE:** Climax of Scene 04, hook for Scene 05.
- **EFFECT / MOTION:** Card scales up (`scale: 1.05`), text glows in warm gold (`#facc15`).
- **WHAT MUST NOT APPEAR YET:** Method 2 code or marker array implementations.
- **COMPREHENSION HOLD:** Lasting pause allowing the question to resonate before Scene 05.
- **CLEANUP / EXIT:** Holds gracefully until F1981.
- **PERSISTENT STATE:** Complete scene state preserved until end frame.

---

## 4. Zero-Collision Checklist

- [x] Code editor ($X: 100, Y: 140, W: 1020, H: 640$) stays completely left of center.
- [x] Context panel ($X: 1160, Y: 140, W: 660, H: 640$) stays completely right of center ($40\text{px}$ central gap).
- [x] Bottom edges of both panels stop at $Y: 780$, leaving $200\text{px}$ clear buffer above captions at $Y: 980$.
- [x] Top header sits at $Y: 42..108$, leaving $32\text{px}$ buffer above panels.
- [x] No text overlaps, no random number generators, 100% deterministic frame derivation.

---

## 5. REUSE / EXTEND / CREATE

- **REUSE:**
  - `ChalkboardBackground`, `ChalkFilters`, `CHALK_FILTER_ID` from `kit/lib/chalk`.
  - `Captions` from `kit/components/Captions`.
  - `ChalkDust` from `kit/components/ChalkDust`.
  - `theme`, `fonts` from `kit/lib/theme`.
  - `EASE` from `kit/lib/anim`.
- **CREATE:**
  - `Scene04CopyCode.tsx`: Remotion composition for Scene 04 with deterministic code reveals, line highlights, right-side architectural cards, memory efficiency charts, and hook callout.
