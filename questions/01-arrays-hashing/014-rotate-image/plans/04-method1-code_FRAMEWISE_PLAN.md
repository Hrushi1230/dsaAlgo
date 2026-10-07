# Scene 04 — Method 1 Code Walkthrough: Extra Destination Matrix
## Framewise Execution Plan

- **Question:** 014 (Rotate Image - LeetCode 48)
- **Scene:** `04-method1-code`
- **Total Duration:** 1,937 frames (64.560s @ 30 FPS)
- **Audio File:** `public/audio/014/04-method1-code.mp3`
- **Sync File:** `sync/04-method1-code.json` (133 words)
- **Anchor File:** `sync/04-method1-code.anchors.json` (13 anchors)

---

### Layout Geometry & Zero-Collision Law

1. **Top Zone (Y: 36..105):**
   - Clean Scene Header Bar: `01 · ARRAYS & HASHING`, `LEETCODE 48 · MEDIUM`, `METHOD 1: CODE IMPLEMENTATION`.
   - **Zero-Collision Rule (User Mandate):** Top zone contains strictly metadata and title. No explanation cards or callouts are placed in the top zone. All matrix headers have >= 60px vertical clearance.

2. **Center-Stage Code Editor (Left Region: X: 80..1060, Y: 150..730):**
   - `ChalkCodeEditorV2` from `@dsa/kit`.
   - Width: 980px, Height: 580px.
   - Clean dark chalkboard container (`rgba(17, 37, 29, 0.95)`), 2px border, syntax highlighted Python code lines.
   - Active execution pointers, highlight glow, and progressive line reveals tied to exact audio anchors.

3. **Center-Stage Execution & Complexity Cards (Right Region: X: 1100..1840, Y: 150..730):**
   - Width: 740px.
   - **Card 1 (Y: 150..370): Memory Contract & Formula Visualizer**:
     - Visualizes `matrix[r][c] ──► result[c][n - 1 - r]`.
     - Visualizes the copy-back step: `matrix[:] = result`.
   - **Card 2 (Y: 390..730): Complexity & Interview Verdict**:
     - Time Complexity: $O(N^2)$ (process $N \times N$ cells).
     - Space Complexity: $O(N^2)$ (allocates $N \times N$ auxiliary cells).
     - Alert: **Fails In-Place Constraint!**
     - Next Teaser: *How to do it with O(1) extra space?*

4. **Captions Zone (Y: 960..1010):**
   - Bottom: 38px.
   - Clearance to upper cards (stopping at Y: 730): **230px of clean, collision-free breathing space**.

---

### Python Code Lines Definition (11 Lines Total)

```python
1: class Solution:
2:     def rotate(self, matrix: List[List[int]]) -> None:
3:         n = len(matrix)
4:         result = [[0] * n for _ in range(n)]
5:         
6:         for r in range(n):
7:             for c in range(n):
8:                 result[c][n - 1 - r] = matrix[r][c]
9:                 
10:        for r in range(n):
11:            for c in range(n):
12:                matrix[r][c] = result[r][c]
```

---

### Framewise Anchor Plans (Anchors 0 to 12)

#### Anchor 0: S04_INIT_RESULT
- **Frame Range:** 0 .. 244 (0.00s .. 8.14s)
- **Spoken Text:** "First, store n, the size of the matrix, then create a new n by n result matrix."
- **WHAT APPEARS NOW:**
  - Header bar with `METHOD 1: CODE IMPLEMENTATION` pill badge.
  - `ChalkCodeEditorV2` animates in at X: 80, Y: 150.
  - Lines 1..4 revealed progressively:
    - Line 3: `n = len(matrix)`
    - Line 4: `result = [[0] * n for _ in range(n)]`
  - Right Side: Allocation Visualizer shows a small $5 \times 5$ memory block labeled `result[n][n] (Allocated in RAM)`.
- **CENTER-STAGE HERO:** Code lines 3 & 4 highlighted with active cyan indicator.
- **CAUSE:** Capturing dimension $n$ and creating a separate memory buffer.
- **EFFECT / MOTION:** Smooth scale-in of editor; line highlight pulse on lines 3 & 4.
- **WHAT MUST NOT APPEAR YET:** Loop constructs (lines 6..8).
- **COMPREHENSION HOLD:** Frames 180 .. 244: Viewer sees the initial allocation clearly.
- **CLEANUP / EXIT:** Highlights transition into nested loops.
- **PERSISTENT STATE:** Editor initialized; lines 1..4 visible.

---

#### Anchor 1: S04_NESTED_LOOPS
- **Frame Range:** 260 .. 403 (8.68s .. 13.42s)
- **Spoken Text:** "Now loop through every source row r and every source column c."
- **WHAT APPEARS NOW:**
  - Code lines 6 & 7 revealed:
    - Line 6: `for r in range(n):`
    - Line 7: `    for c in range(n):`
  - Right card updates: Loop counters `r: 0 ➔ n-1`, `c: 0 ➔ n-1` indicating full $N^2$ traversal.
- **CENTER-STAGE HERO:** Nested `for` loop lines 6 & 7.
- **CAUSE:** Iterating over every position in the $N \times N$ grid.
- **EFFECT / MOTION:** Gold glow `#FFD166` on `range(n)`.
- **WHAT MUST NOT APPEAR YET:** The assignment line inside the loop.
- **COMPREHENSION HOLD:** Frames 350 .. 403: Loop bounds understood.
- **CLEANUP / EXIT:** Transition to inner assignment.
- **PERSISTENT STATE:** Lines 1..7 visible in editor.

---

#### Anchor 2: S04_MAPPING_ASSIGNMENT
- **Frame Range:** 415 .. 623 (13.82s .. 20.78s)
- **Spoken Text:** "For the current value, matrix c, write it into results in minus 1 minus r."
- **WHAT APPEARS NOW:**
  - Code line 8 revealed with prominent syntax highlight:
    - Line 8: `        result[c][n - 1 - r] = matrix[r][c]`
  - Right Card highlights:
    - Source: `matrix[r][c]`
    - Destination: `result[c][n - 1 - r]`
- **CENTER-STAGE HERO:** The core assignment on Line 8.
- **CAUSE:** Applying the exact algebraic rotation formula derived in Scene 02.
- **EFFECT / MOTION:** Typewriter reveal with emerald border glow on Line 8.
- **WHAT MUST NOT APPEAR YET:** Copy-back loop.
- **COMPREHENSION HOLD:** Frames 540 .. 623: Clear recognition of `(r, c) -> (c, n - 1 - r)`.
- **CLEANUP / EXIT:** Line 8 remains highlighted for validation.
- **PERSISTENT STATE:** Line 8 active.

---

#### Anchor 3: S04_PROVEN_MAPPING
- **Frame Range:** 638 .. 812 (21.28s .. 27.06s)
- **Spoken Text:** "This line directly implements the coordinate mapping we already proved."
- **WHAT APPEARS NOW:**
  - Callout badge pops next to Line 8: `✓ PROVEN IN SCENE 02`.
  - Right card displays formula badge: `(r, c) ──► (c, 4 - r) for n = 5`.
- **CENTER-STAGE HERO:** Proof connection between theory and code.
- **CAUSE:** Validating mathematical correctness.
- **EFFECT / MOTION:** Subtle pulse on the proven badge.
- **WHAT MUST NOT APPEAR YET:** Copy-back logic.
- **COMPREHENSION HOLD:** Frames 740 .. 812: Bridge to Scene 02 complete.
- **CLEANUP / EXIT:** Callout badge softens.
- **PERSISTENT STATE:** Line 8 verified.

---

#### Anchor 4: S04_ALL_PLACED
- **Frame Range:** 812 .. 943 (27.06s .. 31.44s)
- **Spoken Text:** "We continue until every source cell has been placed."
- **WHAT APPEARS NOW:**
  - Right card visualizer: All 25 cells in `result` grid light up green `[100% FILLED]`.
  - Progress bar in visualizer fills from 0% to 100%.
- **CENTER-STAGE HERO:** Completed `result` grid in memory.
- **CAUSE:** Completion of the double loop.
- **EFFECT / MOTION:** Progress bar smooth sweep across 812..900.
- **WHAT MUST NOT APPEAR YET:** Copy-back lines.
- **COMPREHENSION HOLD:** Frames 890 .. 943: All elements in result.
- **CLEANUP / EXIT:** Visualizer prepares for copy-back.
- **PERSISTENT STATE:** `result` is fully rotated.

---

#### Anchor 5: S04_COPY_BACK
- **Frame Range:** 958 .. 1183 (31.92s .. 39.42s)
- **Spoken Text:** "Then, copy the completed result back into the original matrix so the final answer is correct."
- **WHAT APPEARS NOW:**
  - Code lines 10..12 revealed:
    - Line 10: `for r in range(n):`
    - Line 11: `    for c in range(n):`
    - Line 12: `        matrix[r][c] = result[r][c]`
  - LeetCode contract badge: `MUTATE MATRIX IN-PLACE · VOID RETURN`.
  - Right visualizer shows data copying back from `result` into `matrix`.
- **CENTER-STAGE HERO:** Copy-back loop (Lines 10..12).
- **CAUSE:** LeetCode's `rotate()` function returns `None` and checks `matrix` directly.
- **EFFECT / MOTION:** Directional arrow from `result` back into `matrix`.
- **WHAT MUST NOT APPEAR YET:** Complexity card.
- **COMPREHENSION HOLD:** Frames 1110 .. 1183: Audience understands why the copy-back is required.
- **CLEANUP / EXIT:** Code lines settle; prepare for complexity breakdown.
- **PERSISTENT STATE:** Complete code editor with all 12 lines visible.

---

#### Anchor 6: S04_COMPLEXITY_INTRO
- **Frame Range:** 1198 .. 1222 (39.92s .. 40.74s)
- **Spoken Text:** "Now complexity."
- **WHAT APPEARS NOW:**
  - Right side shifts to **Complexity Card**:
    `COMPLEXITY ANALYSIS`
- **CENTER-STAGE HERO:** Complexity card header entrance.
- **CAUSE:** Transitioning to algorithmic evaluation.
- **EFFECT / MOTION:** Card entrance spring.
- **WHAT MUST NOT APPEAR YET:** Time/space values before spoken.
- **COMPREHENSION HOLD:** Frames 1210 .. 1222: Ready for time analysis.
- **CLEANUP / EXIT:** Card header active.
- **PERSISTENT STATE:** Complexity card visible.

---

#### Anchor 7: S04_TIME_CELLS
- **Frame Range:** 1240 .. 1302 (41.32s .. 43.40s)
- **Spoken Text:** "We process n times n cells."
- **WHAT APPEARS NOW:**
  - Highlight pulses on loops: Lines 6 & 7, then 10 & 11.
  - Complexity Card shows:
    `Operations: n × n = n² writes + n² copies`
- **CENTER-STAGE HERO:** Operation count breakdown.
- **CAUSE:** Every cell visited a constant number of times.
- **EFFECT / MOTION:** Counter lights up `n × n`.
- **WHAT MUST NOT APPEAR YET:** Final Big-O value.
- **COMPREHENSION HOLD:** Frames 1280 .. 1302: Total cell count clear.
- **CLEANUP / EXIT:** Ready for Big-O notation.
- **PERSISTENT STATE:** Operations row visible.

---

#### Anchor 8: S04_TIME_ON2
- **Frame Range:** 1317 .. 1414 (43.90s .. 47.12s)
- **Spoken Text:** "So the time complexity is O of n squared."
- **WHAT APPEARS NOW:**
  - Time Complexity Badge expands in emerald green `#52B788`:
    `TIME COMPLEXITY: O(N²)`
    `Subtext: Optimal — Every cell must be moved at least once.`
- **CENTER-STAGE HERO:** Time Complexity Badge.
- **CAUSE:** $2N^2 = O(N^2)$.
- **EFFECT / MOTION:** Scale pop with emerald glow.
- **WHAT MUST NOT APPEAR YET:** Space complexity value.
- **COMPREHENSION HOLD:** Frames 1370 .. 1414: Time complexity accepted as optimal.
- **CLEANUP / EXIT:** Time badge settles.
- **PERSISTENT STATE:** Time complexity badge permanently visible.

---

#### Anchor 9: S04_SPACE_CELLS
- **Frame Range:** 1428 .. 1546 (47.60s .. 51.52s)
- **Spoken Text:** "But the result matrix also contains n times n cells."
- **WHAT APPEARS NOW:**
  - Code Line 4 (`result = [[0] * n ...]`) flashes in gold/amber.
  - Memory indicator in card: `Auxiliary Storage: N × N array allocated`.
- **CENTER-STAGE HERO:** Code line 4 memory allocation.
- **CAUSE:** Scrutinizing the extra memory footprint.
- **EFFECT / MOTION:** Line 4 highlight with amber warning box.
- **WHAT MUST NOT APPEAR YET:** Space Big-O badge.
- **COMPREHENSION HOLD:** Frames 1490 .. 1546: Memory cost highlighted.
- **CLEANUP / EXIT:** Ready for space Big-O.
- **PERSISTENT STATE:** Line 4 highlighted as memory offender.

---

#### Anchor 10: S04_SPACE_ON2
- **Frame Range:** 1559 .. 1655 (51.96s .. 55.16s)
- **Spoken Text:** "So the extra space is O of n squared."
- **WHAT APPEARS NOW:**
  - Space Complexity Badge appears in ruby red `#E63946`:
    `SPACE COMPLEXITY: O(N²)`
    `Subtext: NOT OPTIMAL — Extra full grid in memory.`
- **CENTER-STAGE HERO:** Ruby red Space Complexity Badge.
- **CAUSE:** Storing $N \times N$ duplicate elements.
- **EFFECT / MOTION:** Scale pop with red warning glow.
- **WHAT MUST NOT APPEAR YET:** LeetCode penalty alert.
- **COMPREHENSION HOLD:** Frames 1610 .. 1655: $O(N^2)$ space clearly identified as problem.
- **CLEANUP / EXIT:** Transition to problem constraint check.
- **PERSISTENT STATE:** Time $O(N^2)$ (Green) and Space $O(N^2)$ (Red) both visible.

---

#### Anchor 11: S04_IN_PLACE_RULE
- **Frame Range:** 1655 .. 1801 (55.16s .. 60.04s)
- **Spoken Text:** "And the problem specifically asks for an in -place rotation."
- **WHAT APPEARS NOW:**
  - Interview Constraint Warning Banner slides down:
    `⚠️ LEETCODE 48 CONSTRAINT VIOLATION`
    `"You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation."`
- **CENTER-STAGE HERO:** LeetCode constraint violation callout.
- **CAUSE:** Direct quotation from the official problem description.
- **EFFECT / MOTION:** Pulsing red border and exclamation warning icon.
- **WHAT MUST NOT APPEAR YET:** Method 2 teaser.
- **COMPREHENSION HOLD:** Frames 1740 .. 1801: Complete agreement that Method 1 cannot pass an interview.
- **CLEANUP / EXIT:** Prepares transition to next method.
- **PERSISTENT STATE:** Constraint violation banner visible.

---

#### Anchor 12: S04_REMOVE_MATRIX
- **Frame Range:** 1825 .. 1937 (60.84s .. 64.56s)
- **Spoken Text:** "So we need to remove that extra matrix."
- **WHAT APPEARS NOW:**
  - A red diagonal strikethrough animates over Line 4 (`result = [[0] * n ...]`).
  - Next Bridge Callout in Center/Right:
    `UP NEXT: METHOD 2 ──► FOUR-WAY IN-PLACE SWAP`
    `Goal: Rotate in cycles with O(1) Auxiliary Space!`
- **CENTER-STAGE HERO:** Strikethrough on Line 4 and Method 2 bridge banner.
- **CAUSE:** Final conclusion of Method 1 walkthrough.
- **EFFECT / MOTION:** SVG line draws strikethrough over Line 4; bridge card glows cyan.
- **WHAT MUST NOT APPEAR YET:** Scene 05 visuals.
- **COMPREHENSION HOLD:** Frames 1890 .. 1937: Scene ends cleanly on the hook for Method 2.
- **CLEANUP / EXIT:** Scene ends at frame 1937.
- **PERSISTENT STATE:** Final complete scene state.

---

### Invariant Checks & Zero-Collision Assurance

1. **Zero Collision Layout:**
   - Top Bar: Y: 36..105 (strictly clean metadata).
   - Code Editor: X: 80..1060 (width: 980px), Y: 150..730.
   - Right Visualizer / Complexity: X: 1100..1840 (width: 740px), Y: 150..730.
   - Gap between editor and right cards: 40px.
   - Gap below cards to captions: $960 - 730 = 230\text{px}$.
   - Captions: Y: 960..1010.
2. **Determinism:**
   - Pure frame-driven Remotion React without `Math.random()` or CSS keyframes.
3. **Course Continuity:**
   - Font family: `JetBrains Mono` for code, `Outfit/Inter` for labels.
   - Uses `@dsa/kit`'s `ChalkCodeEditorV2` with standard color tokens.
