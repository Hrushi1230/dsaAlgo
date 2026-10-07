# Scene 11 Framewise Plan: Method 3 Implementation & Code (LeetCode 48)
## 014-rotate-image · Scene 11 (`11-method3-code`)

- **Audio File:** `public/audio/014/11-method3-code.mp3`
- **Total Duration:** 3,026 frames (100.860s @ 30 FPS)
- **Sync Authority:** `questions/01-arrays-hashing/014-rotate-image/sync/11-method3-code.json` (197 words)
- **Authoritative Visual Plan:** `questions/01-arrays-hashing/014-rotate-image/Q14_PHASE9_REAUDIT_V2/11_SCENE11_METHOD3_CODE_WORD_BASED_VISUAL_PLAN.md`
- **Visual Aesthetic:** Chalk blackboard (`#0D1117`), 100% `@dsa/kit` components, zero cards, zero AI-slop containers, spoiler-free line typing, zero vertical collisions (> 280px clearance above captions).

---

### Mandatory Kit & Architectural Specifications

All UI elements MUST be implemented strictly using canonical `@dsa/kit` components:
1. **Blackboard Environment:** `ChalkboardBackground`, `ChalkFilters` from `kit/lib/chalk`.
2. **Palette & Theme:** `theme` from `kit/lib/theme` (`theme.chalkText`, `theme.cyan`, `theme.accent`, `theme.pivot`, `theme.warn`, `theme.good`, `theme.cardBg`).
3. **Typography:** `fonts` from `kit/lib/theme` (`fonts.code`, `fonts.editorial`, `fonts.body`).
4. **Code Editor:** `ChalkCodeEditorV2` from `kit/components/ChalkCodeEditorV2` (X: 70..1020, Y: 140..740, width: 950, height: 600, `scrollY: 0`).
5. **Support Matrix Cells & Visual Boundaries:** `RoughBox` from `kit/components/RoughBox` (deterministic `seed`, `strokeWidth: 2.5`).
6. **Text & Token Labels:** `ChalkText` from `kit/components/ChalkText` (`font="mono"` or `"hand"`).
7. **Connecting Lines & Arrows:** `RoughLine` from `kit/components/RoughLine` (shape kind `line` / `arrow`).
8. **Captions:** `Captions` from `kit/components/Captions` (Y: 960..1010, words from `syncData.words`).

**Language Selection:** **Python** (strictly matching Scene 04, Scene 07, and `11_SCENE11_METHOD3_CODE_WORD_BASED_VISUAL_PLAN.md`).

#### The Exact Code Typed (11 Python Lines):
```python
class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        n = len(matrix)
        
        # Step 1: Transpose matrix
        for r in range(n):
            for c in range(r + 1, n):
                matrix[r][c], matrix[c][r] = matrix[c][r], matrix[r][c]
                
        # Step 2: Reverse each row
        for row in matrix:
            row.reverse()
```

---

### Spatial Distribution & Canvas Budget (1920 × 1080)

```text
+-----------------------------------------------------------------------------------+
| Top Bar (Y: 36..100): Minimal Metadata Strip (ChalkText / theme.cyan)              |
|   - Left: "QUESTION 014: ROTATE IMAGE"                                            |
|   - Center: "METHOD 3: TRANSPOSE + REVERSE ROWS"                                  |
|   - Right: "O(1) SPACE OPTIMAL"                                                   |
+-----------------------------------------------------------------------------------+
| Stage Left (X: 70..1020, Y: 140..740):                                            |
|   - Hero Code Editor: ChalkCodeEditorV2 (Width: 950, Height: 600)                  |
|   - Python syntax highlighting, typewriter character reveal, active line glow      |
+-----------------------------------------------------------------------------------+
| Stage Right (X: 1080..1850, Y: 140..740):                                         |
|   - Phases 1-4 (F0..F2004): Support Matrix Visualizer                             |
|     - Built with 16 RoughBox cells (4x4 matrix), ChalkText values & coordinates   |
|     - Upper triangle (r < c) highlight vs diagonal (r == c) boundary              |
|     - Live Double-Swap Undo demonstration (F673..F1258) using RoughLine arcs       |
|     - Row reversal visual demonstration (F1624..F2004)                            |
|   - Phase 5 (F2005..F3026): Complexity & Derivation Visualizer                    |
|     - Transpose work token: n(n - 1)/2 swaps = O(N²)                              |
|     - Row reverse work token: n * (n / 2) swaps = O(N²)                           |
|     - Summation token: O(N²) + O(N²) = O(N²) total time                           |
|     - Space token: In-place pointer swaps = O(1) auxiliary memory                 |
+-----------------------------------------------------------------------------------+
| Bottom Zone (Y: 960..1010): Word-level Captions (Kit Captions component)          |
|   - > 220px to 280px clean breathing clearance between Y: 740 and Y: 960          |
+-----------------------------------------------------------------------------------+
```

---

### Framewise Anchor Choreography (All 24 Anchors)

```text
=====================================================================================
ANCHOR 01: S11_START
=====================================================================================
EXACT SYNC RANGE: F0000 – F0130 (0.000s – 4.333s · Words 0..7)
SPOKEN TEXT: "Now let's translate that proof directly into code."
KIT COMPONENTS:
  - ChalkCodeEditorV2 (X: 70, Y: 140, width: 950, height: 600, scrollY: 0)
  - ChalkText (Top bar metadata)
  - Captions (Bottom captions at Y: 960..1010)
WHAT APPEARS NOW:
  - Top Bar metadata strip draws on: "METHOD 3: OPTIMAL IMPLEMENTATION"
  - ChalkCodeEditorV2 enters smoothly with scale: 0.98 -> 1.0, opacity: 0 -> 1.
  - Editor title: "rotate_image.py", language: "python".
  - Code lines 1 and 2 reveal:
    Line 1: "class Solution:"
    Line 2: "    def rotate(self, matrix: List[List[int]]) -> None:"
CENTER-STAGE HERO: ChalkCodeEditorV2 initialization on left stage.
CAUSE: Narration introduces translating the mathematical proof directly into code.
EFFECT / MOTION: Clean typewriter character reveal of lines 1 and 2.
WHAT MUST NOT APPEAR YET: Variable n, transpose loops, swap body, reverse loops, complexity tokens.
COMPREHENSION HOLD: F125 – F130 (natural pause before "First").
CLEANUP / EXIT: None. Persistent editor foundation.
PERSISTENT STATE: Solution class and method signature active.

=====================================================================================
ANCHOR 02: S11_N
=====================================================================================
EXACT SYNC RANGE: F0131 – F0183 (4.360s – 6.100s · Words 8..10)
SPOKEN TEXT: "First, store n,"
KIT COMPONENTS:
  - ChalkCodeEditorV2 (Line 3 character typing)
  - Captions
WHAT APPEARS NOW:
  - Line 3 types character-by-character:
    "        n = len(matrix)"
  - Active line indicator targets Line 3.
CENTER-STAGE HERO: Line 3 variable n initialization.
CAUSE: Narration commands storing the matrix dimension n.
EFFECT / MOTION: Character-by-character reveal of `n = len(matrix)` from F131 to F176.
WHAT MUST NOT APPEAR YET: Transpose loops, diagonal lines, support matrix.
COMPREHENSION HOLD: F177 – F183.
CLEANUP / EXIT: Cursor advances to Line 4.
PERSISTENT STATE: Variable n defined.

=====================================================================================
ANCHOR 03: S11_TRANS
=====================================================================================
EXACT SYNC RANGE: F0184 – F0246 (6.140s – 8.200s · Words 11..14)
SPOKEN TEXT: "then transpose the matrix."
KIT COMPONENTS:
  - ChalkCodeEditorV2 (Line 4 comment)
  - RoughBox (Matrix grid boundary on right stage, 16 cells)
  - ChalkText (Matrix cell coordinates & values)
  - RoughLine (Main diagonal separator)
WHAT APPEARS NOW:
  - Line 4 types comment: "        # Step 1: Transpose matrix" in theme.accent.
  - Right stage: 4x4 Support Matrix framework begins to sketch with RoughBox cells (X: 1160, Y: 180, cell size: 76px, gap: 10px).
  - RoughLine sketches the main diagonal from top-left (0,0) to bottom-right (3,3) in theme.pivot.
CENTER-STAGE HERO: Transpose phase setup and support matrix emergence.
CAUSE: Spoken transition to the transpose operation.
EFFECT / MOTION: Code comment reveals on left; hand-drawn 4x4 matrix grid outlines on right.
WHAT MUST NOT APPEAR YET: For loops, loop indices r and c, double-swap warning.
COMPREHENSION HOLD: F237 – F246.
CLEANUP / EXIT: Matrix grid settles into resting state.
PERSISTENT STATE: Step 1 initialized; support matrix visible on right.

=====================================================================================
ANCHOR 04: S11_R
=====================================================================================
EXACT SYNC RANGE: F0247 – F0309 (8.240s – 10.300s · Words 15..18)
SPOKEN TEXT: "For each row, r,"
KIT COMPONENTS:
  - ChalkCodeEditorV2 (Line 5 reveal)
  - RoughBox (Row highlight on matrix)
  - ChalkText (Pointer label 'r')
WHAT APPEARS NOW:
  - Line 5 reveals: "        for r in range(n):"
  - Matrix on right shows row pointer label `r` at row 0 (Y: 180) via ChalkText in theme.cyan.
  - Active line indicator moves to Line 5.
CENTER-STAGE HERO: Outer transpose loop header `for r in range(n):`.
CAUSE: Narration begins iterating over rows.
EFFECT / MOTION: Line 5 types on; row 0 bracket illuminates.
WHAT MUST NOT APPEAR YET: Inner loop line, column c bounds.
COMPREHENSION HOLD: F297 – F309.
CLEANUP / EXIT: Pointer r remains anchored to active row.
PERSISTENT STATE: Outer loop r established.

=====================================================================================
ANCHOR 05: S11_DO_NOT_START_ZERO
=====================================================================================
EXACT SYNC RANGE: F0310 – F0423 (10.340s – 14.100s · Words 19..26)
SPOKEN TEXT: "we do not start column c from 0."
KIT COMPONENTS:
  - RoughBox (Red strike / warning outline on column 0 cells)
  - ChalkText (Question mark / warning marker 'c ≠ 0' in theme.warn)
WHAT APPEARS NOW:
  - On the support matrix, cell (r, 0) flashes with an amber/red warning border using RoughBox (stroke: theme.warn).
  - Standalone label appears above col 0: "c ≠ 0" via ChalkText.
  - Code editor holds cursor at indentation for inner loop without typing yet.
CENTER-STAGE HERO: Visual warning on column 0 forbidding `c = 0`.
CAUSE: Narration explicitly emphasizes NOT starting column c from 0.
EFFECT / MOTION: Pulsing amber outline on column 0; code holds.
WHAT MUST NOT APPEAR YET: Line 6 code text, r + 1 token.
COMPREHENSION HOLD: F410 – F423.
CLEANUP / EXIT: Warning outline softens.
PERSISTENT STATE: Viewer understands column 0 is forbidden for inner loop.

=====================================================================================
ANCHOR 06: S11_C_STARTS_R_PLUS_1
=====================================================================================
EXACT SYNC RANGE: F0424 – F0529 (14.120s – 17.633s · Words 27..33)
SPOKEN TEXT: "Instead, c starts from r plus 1."
KIT COMPONENTS:
  - ChalkCodeEditorV2 (Line 6 reveal with hot token)
  - ChalkText ('c = r + 1' label on matrix)
  - RoughBox (Highlight on cell (r, r + 1))
WHAT APPEARS NOW:
  - Line 6 types on: "            for c in range(r + 1, n):"
  - Token `r + 1` highlighted with glowing cyan pill in ChalkCodeEditorV2.
  - Support matrix highlights starting cell (0, 1) in theme.cyan with RoughBox.
CENTER-STAGE HERO: Inner loop header and critical bound `range(r + 1, n)`.
CAUSE: Spoken rule that column c starts strictly at `r + 1`.
EFFECT / MOTION: Character typewriter on Line 6; cell (0, 1) activates on right.
WHAT MUST NOT APPEAR YET: Double swap explanation, swap assignment lines.
COMPREHENSION HOLD: F515 – F529.
CLEANUP / EXIT: r + 1 highlight remains prominent.
PERSISTENT STATE: Loop bounds `c in range(r + 1, n)` established.

=====================================================================================
ANCHOR 07: S11_WHY_ABOVE_DIAGONAL
=====================================================================================
EXACT SYNC RANGE: F0530 – F0672 (17.660s – 22.400s · Words 34..44)
SPOKEN TEXT: "Why? Because we only need one side of the main diagonal."
KIT COMPONENTS:
  - RoughBox (Upper triangle cells shaded in theme.cyan, lower triangle dimmed)
  - RoughLine (Main diagonal line emphasized in theme.pivot)
  - ChalkText ("Strictly Above Diagonal: r < c")
WHAT APPEARS NOW:
  - The 6 cells strictly above the main diagonal ((0,1), (0,2), (0,3), (1,2), (1,3), (2,3)) illuminate with cyan RoughBox borders.
  - Cells on the diagonal (r == c) and below the diagonal (r > c) dim to 25% opacity.
  - Standalone label at Y: 560: "Active Swap Region: r < c" via ChalkText.
CENTER-STAGE HERO: Upper triangle visual partition proving one side of diagonal.
CAUSE: Narration explains why c starts at r + 1 (only one side needed).
EFFECT / MOTION: Smooth opacity shift: upper triangle illuminates, rest dims.
WHAT MUST NOT APPEAR YET: Swap lines, double-swap failure sequence.
COMPREHENSION HOLD: F641 – F672.
CLEANUP / EXIT: Partition remains active.
PERSISTENT STATE: Above-diagonal region established as the only cells visited.

=====================================================================================
ANCHOR 08: S11_SUPPOSE_SWAPPED_01_10
=====================================================================================
EXACT SYNC RANGE: F0673 – F0864 (22.440s – 28.800s · Words 45..56)
SPOKEN TEXT: "Suppose we swapped row 0, column 1 with row 1, column 0."
KIT COMPONENTS:
  - RoughBox (Cells (0,1) and (1,0))
  - ChalkText (Value '2' in (0,1) and Value '5' in (1,0))
  - RoughLine (Arc connecting (0,1) and (1,0) in theme.cyan)
WHAT APPEARS NOW:
  - Focus locks onto symmetric pair: Cell (0,1) with value "2" and Cell (1,0) with value "5".
  - RoughLine sketches a curved swap arc between (0,1) and (1,0).
  - Values exchange positions: "2" moves to (1,0), "5" moves to (0,1).
  - Standalone status text: "First Swap: (0,1) ↔ (1,0) [Done on Row 0]".
CENTER-STAGE HERO: First legitimate swap between (0,1) and (1,0).
CAUSE: Hypothetical walkthrough illustrating what happens if c started from 0.
EFFECT / MOTION: Values lift and exchange along RoughLine arc.
WHAT MUST NOT APPEAR YET: Second swap, undo warning badge.
COMPREHENSION HOLD: F852 – F864.
CLEANUP / EXIT: Pair remains in swapped state.
PERSISTENT STATE: (0,1) now holds 5; (1,0) now holds 2.

=====================================================================================
ANCHOR 09: S11_REACHED_AGAIN_SWAP_BACK
=====================================================================================
EXACT SYNC RANGE: F0865 – F1035 (28.840s – 34.500s · Words 57..68)
SPOKEN TEXT: "If we later reached row 1, column 0, and swap them again,"
KIT COMPONENTS:
  - RoughBox (Red/amber outline on cell (1,0))
  - ChalkText ("Row 1 Reached: (1,0)")
  - RoughLine (Reverse arc in theme.warn)
WHAT APPEARS NOW:
  - Matrix pointer r moves to Row 1.
  - If c started at 0, inner loop encounters cell (1,0) again!
  - RoughBox outlines cell (1,0) in flashing theme.warn.
  - Reverse swap arc sketches between (1,0) and (0,1) in amber/red.
CENTER-STAGE HERO: Dangerous duplicate visit at cell (1,0).
CAUSE: Demonstrating the fatal flaw of all-pairs iteration when r = 1, c = 0.
EFFECT / MOTION: Reverse arc draws; second swap begins execution.
WHAT MUST NOT APPEAR YET: Permanent undo conclusion, swap code.
COMPREHENSION HOLD: F1023 – F1035.
CLEANUP / EXIT: Reverse swap completes.
PERSISTENT STATE: Second swap has just occurred.

=====================================================================================
ANCHOR 10: S11_UNDO_OWN_WORK
=====================================================================================
EXACT SYNC RANGE: F1036 – F1113 (34.540s – 37.100s · Words 69..74)
SPOKEN TEXT: "we would undo our own work."
KIT COMPONENTS:
  - RoughBox (Warning token container: stroke=theme.warn)
  - ChalkText ("UNDO! Matrix Reverts to Original!")
  - RoughLine (Red X strike over duplicate swap)
WHAT APPEARS NOW:
  - Values return to original positions: "2" back in (0,1), "5" back in (1,0)!
  - Red X strike drawn over the reverse swap using RoughLine.
  - Standalone Warning Box (RoughBox with stroke: theme.warn):
    "PITFALL: Double Swap Reverts State (Net 0 Progress)"
CENTER-STAGE HERO: The Undo Pitfall revealed — matrix reverted to original state!
CAUSE: Spoken explanation that two swaps on the same pair undo each other.
EFFECT / MOTION: Strikethrough animates; values settle back into initial cells.
WHAT MUST NOT APPEAR YET: Solution code lines 7–8.
COMPREHENSION HOLD: F1102 – F1113.
CLEANUP / EXIT: Warning highlights persist briefly then fade.
PERSISTENT STATE: Clear proof that visiting both sides cancels out progress.

=====================================================================================
ANCHOR 11: S11_PROCESSED_EXACTLY_ONCE
=====================================================================================
EXACT SYNC RANGE: F1114 – F1258 (37.140s – 41.933s · Words 75..82)
SPOKEN TEXT: "So each pair must be processed exactly once."
KIT COMPONENTS:
  - RoughBox (Rule token outline in theme.good)
  - ChalkText ("INVARIANT: Exactly 1 Swap Per Symmetric Pair")
WHAT APPEARS NOW:
  - Red warning clears cleanly.
  - Emerald green rule badge appears using RoughBox (stroke: theme.good):
    "INVARIANT: Each Pair (r,c) Swapped Exactly Once (r < c)"
  - Matrix restores to upper-triangle focus only.
CENTER-STAGE HERO: Golden invariant rule: exactly one swap per symmetric pair.
CAUSE: Narration states the core algorithmic requirement.
EFFECT / MOTION: Green rule badge scales in with gentle spring; upper triangle glows.
WHAT MUST NOT APPEAR YET: Swap code lines.
COMPREHENSION HOLD: F1239 – F1258.
CLEANUP / EXIT: Invariant badge settles.
PERSISTENT STATE: Invariant locked: only cells with r < c may be processed.

=====================================================================================
ANCHOR 12: S11_COLUMN_BEGINS_R_PLUS_1
=====================================================================================
EXACT SYNC RANGE: F1259 – F1398 (41.960s – 46.600s · Words 83..94)
SPOKEN TEXT: "That is why for row r, column begins at r plus 1."
KIT COMPONENTS:
  - ChalkCodeEditorV2 (Line 6 cyan focus)
  - ChalkText ("c = r + 1 ensures r < c always")
WHAT APPEARS NOW:
  - Attention refocuses on Line 6 in ChalkCodeEditorV2:
    `for c in range(r + 1, n):`
  - Hot line tag: "CRITICAL BOUND" appears in theme.cyan.
  - Support matrix confirms: starting at r + 1 guarantees r < c for every iteration.
CENTER-STAGE HERO: Line 6 in editor re-validated with full conceptual backing.
CAUSE: Narration connects the invariant directly back to the code line.
EFFECT / MOTION: Glow pulse on Line 6 in code editor.
WHAT MUST NOT APPEAR YET: Line 7 swap body.
COMPREHENSION HOLD: F1388 – F1398.
CLEANUP / EXIT: Hot tag fades; cursor moves to Line 7.
PERSISTENT STATE: Code bound justified.

=====================================================================================
ANCHOR 13: S11_SWAP_MATRIX_WITH_MATRIX
=====================================================================================
EXACT SYNC RANGE: F1399 – F1572 (46.640s – 52.400s · Words 95..102)
SPOKEN TEXT: "For each such pair, swap matrix with matrix."
KIT COMPONENTS:
  - ChalkCodeEditorV2 (Line 7 typing)
  - RoughBox (Symmetric pair cells)
  - RoughLine (Swap arc on matrix)
WHAT APPEARS NOW:
  - Line 7 types on smoothly character-by-character:
    "                matrix[r][c], matrix[c][r] = matrix[c][r], matrix[r][c]"
  - On the support matrix, a real swap executes: values in (0,1) and (1,0) swap permanently.
CENTER-STAGE HERO: Line 7 pythonic tuple swap and matching matrix animation.
CAUSE: Narration dictates the swap statement.
EFFECT / MOTION: Line 7 characters type from F1399 to F1534; values exchange smoothly.
WHAT MUST NOT APPEAR YET: Reverse row code lines, complexity derivation.
COMPREHENSION HOLD: F1535 – F1572.
CLEANUP / EXIT: Swap values land in new positions.
PERSISTENT STATE: Transpose swap body implemented and verified.

=====================================================================================
ANCHOR 14: S11_LOOPS_FINISH_TRANSPOSED
=====================================================================================
EXACT SYNC RANGE: F1573 – F1686 (52.420s – 56.200s · Words 103..110)
SPOKEN TEXT: "When those loops finish, the matrix is transposed."
KIT COMPONENTS:
  - RoughBox (All matrix cells in transposed configuration)
  - ChalkText ("Step 1 Complete: Matrix Transposed (Rows ↔ Columns)")
WHAT APPEARS NOW:
  - Support matrix displays all elements in fully transposed state.
  - Step 1 Status Pill appears below matrix:
    "Step 1: Transpose Complete ✓ [matrix[r][c] == matrix[c][r]]"
  - Code editor lines 4–7 dim slightly to 60% opacity.
CENTER-STAGE HERO: Fully transposed support matrix confirming Step 1 completion.
CAUSE: Narration concludes the transpose loop execution.
EFFECT / MOTION: Green checkmark appears; matrix reflects along main diagonal.
WHAT MUST NOT APPEAR YET: Step 2 reverse code lines.
COMPREHENSION HOLD: F1673 – F1686.
CLEANUP / EXIT: Transpose state holds.
PERSISTENT STATE: Matrix is transposed; Step 1 complete.

=====================================================================================
ANCHOR 15: S11_SECOND_STEP_SMALL
=====================================================================================
EXACT SYNC RANGE: F1687 – F1790 (56.240s – 59.667s · Words 111..117)
SPOKEN TEXT: "Then the second step is very small."
KIT COMPONENTS:
  - ChalkCodeEditorV2 (Cursor position at Line 8)
  - ChalkText ("Step 2: Reverse Rows")
WHAT APPEARS NOW:
  - Cursor in ChalkCodeEditorV2 drops down two lines to Line 9.
  - Line 9 types comment: "        # Step 2: Reverse each row" in theme.accent.
  - Attention shifts to horizontal row reflections.
CENTER-STAGE HERO: Step 2 header in code editor.
CAUSE: Narration introduces the second, very concise step.
EFFECT / MOTION: Smooth cursor transition; Step 2 comment appears.
WHAT MUST NOT APPEAR YET: Row loop line, row.reverse() line.
COMPREHENSION HOLD: F1781 – F1790.
CLEANUP / EXIT: None.
PERSISTENT STATE: Step 2 active in code editor.

=====================================================================================
ANCHOR 16: S11_FOR_EVERY_ROW
=====================================================================================
EXACT SYNC RANGE: F1791 – F1836 (59.700s – 61.200s · Words 118..120)
SPOKEN TEXT: "For every row,"
KIT COMPONENTS:
  - ChalkCodeEditorV2 (Line 10 typing)
  - RoughBox (Row bracket highlighting Row 0 on matrix)
WHAT APPEARS NOW:
  - Line 10 types on:
    "        for row in matrix:"
  - Support matrix on right highlights Row 0 with horizontal RoughBox bracket.
CENTER-STAGE HERO: Line 10 row iteration loop header.
CAUSE: Narration iterates over every row of the matrix.
EFFECT / MOTION: Character typewriter on Line 10; horizontal row highlight on matrix.
WHAT MUST NOT APPEAR YET: Line 11 `row.reverse()`.
COMPREHENSION HOLD: F1819 – F1836.
CLEANUP / EXIT: Row bracket remains active.
PERSISTENT STATE: Row loop active.

=====================================================================================
ANCHOR 17: S11_REVERSE_THAT_ROW
=====================================================================================
EXACT SYNC RANGE: F1837 – F1873 (61.220s – 62.433s · Words 121..123)
SPOKEN TEXT: "reverse that row."
KIT COMPONENTS:
  - ChalkCodeEditorV2 (Line 11 typing)
  - RoughBox (Row cells)
  - ChalkText (Reversed row values)
WHAT APPEARS NOW:
  - Line 11 types on:
    "            row.reverse()"
  - On the support matrix, Row 0 values horizontally flip (two-pointer reversal).
CENTER-STAGE HERO: Line 11 `row.reverse()` execution.
CAUSE: Narration reverses the row.
EFFECT / MOTION: Line 11 typed; row elements swap horizontally.
WHAT MUST NOT APPEAR YET: Complexity visualizer.
COMPREHENSION HOLD: F1860 – F1873.
CLEANUP / EXIT: Reversal completes on matrix.
PERSISTENT STATE: Row reversal encoded and visually demonstrated.

=====================================================================================
ANCHOR 18: S11_COMPLETE_SOLUTION
=====================================================================================
EXACT SYNC RANGE: F1874 – F2004 (62.480s – 66.800s · Words 124..132)
SPOKEN TEXT: "That is the complete solution. Transpose, then reverse rows."
KIT COMPONENTS:
  - ChalkCodeEditorV2 (All 11 lines fully visible with syntax highlighting)
  - RoughBox (Matrix grid in final rotated state)
  - ChalkText ("Rotate Image Complete: 90° Clockwise ✓")
WHAT APPEARS NOW:
  - Full code editor lights up with all 11 lines intact:
    - Step 1: Transpose block
    - Step 2: Reverse rows block
  - Support matrix demonstrates all 4 rows reversed -> MATCHES EXACT 90° ROTATION!
  - Summary token at Y: 580:
    "Optimal Pipeline: 1. Transpose Matrix  ➔  2. Reverse Each Row"
CENTER-STAGE HERO: Complete Python solution and perfectly rotated target matrix.
CAUSE: Narration confirms the full solution is finished and summarizes pipeline.
EFFECT / MOTION: Golden highlight across the two code blocks; final matrix sparkles.
WHAT MUST NOT APPEAR YET: Complexity derivation equations.
COMPREHENSION HOLD: F1987 – F2004.
CLEANUP / EXIT: Support matrix fades gracefully to prepare for complexity derivation.
PERSISTENT STATE: Full code implemented and proven.

=====================================================================================
ANCHOR 19: S11_COMPLEXITY_INTRO
=====================================================================================
EXACT SYNC RANGE: F2005 – F2062 (66.840s – 68.733s · Words 133..134)
SPOKEN TEXT: "Now, complexity."
KIT COMPONENTS:
  - ChalkText ("COMPLEXITY ANALYSIS")
  - RoughLine (Dividing axis for complexity panel)
WHAT APPEARS NOW:
  - Code Editor on left compacts slightly (opacity: 0.7) to shift attention right.
  - Right stage transitions to Complexity Breakdown:
    Header: "ALGORITHMIC COMPLEXITY" via ChalkText in theme.accent.
CENTER-STAGE HERO: Transition to complexity derivation stage.
CAUSE: Narration opens complexity analysis.
EFFECT / MOTION: Smooth opacity shift; header draws on.
WHAT MUST NOT APPEAR YET: Specific Big-O values until spoken.
COMPREHENSION HOLD: F2044 – F2062.
CLEANUP / EXIT: Previous matrix visuals cleared.
PERSISTENT STATE: Complexity stage initialized.

=====================================================================================
ANCHOR 20: S11_TRANSPOSE_TIME
=====================================================================================
EXACT SYNC RANGE: F2063 – F2294 (68.780s – 76.467s · Words 135..152)
SPOKEN TEXT: "The transpose processes roughly half of the n by n matrix. That is still O of n squared."
KIT COMPONENTS:
  - RoughBox (Transpose complexity token border)
  - ChalkText (Math formula & Big-O notation)
WHAT APPEARS NOW:
  - Transpose Time Token appears on right (X: 1120, Y: 220):
    - Title: "Step 1: Transpose Work" via ChalkText in theme.cyan
    - Cells visited: "n(n - 1) / 2 cells = (N² - N) / 2 swaps"
    - Result: "Time: O(N²)" in bold cyan
CENTER-STAGE HERO: Transpose time derivation token.
CAUSE: Narration explains transpose visits half the matrix, which is O(N²).
EFFECT / MOTION: RoughBox outlines token; ChalkText types mathematical proof.
WHAT MUST NOT APPEAR YET: Reverse row time token, total time token, space token.
COMPREHENSION HOLD: F2276 – F2294.
CLEANUP / EXIT: Token settles into place.
PERSISTENT STATE: Transpose time locked at O(N²).

=====================================================================================
ANCHOR 21: S11_REVERSE_TIME
=====================================================================================
EXACT SYNC RANGE: F2295 – F2443 (76.500s – 81.433s · Words 153..161)
SPOKEN TEXT: "Reversing all rows also processes n squared values overall."
KIT COMPONENTS:
  - RoughBox (Reverse rows complexity token border)
  - ChalkText (Math formula & Big-O notation)
WHAT APPEARS NOW:
  - Reverse Rows Time Token appears below transpose token (X: 1120, Y: 360):
    - Title: "Step 2: Reverse Rows Work" via ChalkText in theme.accent
    - Elements processed: "n rows × (n / 2) swaps per row = N² / 2 operations"
    - Result: "Time: O(N²)" in bold accent
CENTER-STAGE HERO: Row reversal time derivation token.
CAUSE: Narration details work done during row reversals.
EFFECT / MOTION: RoughBox outlines token; formula writes on.
WHAT MUST NOT APPEAR YET: Total time badge, space token.
COMPREHENSION HOLD: F2435 – F2443.
CLEANUP / EXIT: Both individual time components visible.
PERSISTENT STATE: Both sub-operations proven to be O(N²).

=====================================================================================
ANCHOR 22: S11_TOTAL_TIME
=====================================================================================
EXACT SYNC RANGE: F2444 – F2593 (81.460s – 86.433s · Words 162..171)
SPOKEN TEXT: "So together, the total time remains O of n squared."
KIT COMPONENTS:
  - RoughBox (Total time banner border: stroke=theme.accent, strokeWidth=3)
  - ChalkText ("TOTAL TIME: O(N²) + O(N²) = O(N²)")
WHAT APPEARS NOW:
  - Total Time Master Token appears below individual steps (X: 1120, Y: 500):
    - Summation: "Total Time = O(N²/2) + O(N²/2) = O(N²)"
    - Prominent Badge: "TIME COMPLEXITY: O(N²)" in glowing theme.accent.
CENTER-STAGE HERO: Total time complexity synthesis $O(N^2)$.
CAUSE: Narration adds sequential stages to obtain overall O(N²) time.
EFFECT / MOTION: Accent glow pulse on total time banner; sequential addition emphasized.
WHAT MUST NOT APPEAR YET: Space complexity token.
COMPREHENSION HOLD: F2580 – F2593.
CLEANUP / EXIT: Banner locks into place.
PERSISTENT STATE: Total time complexity locked at O(N²).

=====================================================================================
ANCHOR 23: S11_EXTRA_SPACE_O1
=====================================================================================
EXACT SYNC RANGE: F2594 – F2881 (86.460s – 96.033s · Words 172..187)
SPOKEN TEXT: "And because both transformations happen inside the original matrix, the extra space is O of 1."
KIT COMPONENTS:
  - RoughBox (Space complexity token border: stroke=theme.good, strokeWidth=3)
  - ChalkText ("AUXILIARY SPACE: O(1) IN-PLACE")
WHAT APPEARS NOW:
  - Space Complexity Master Token appears (X: 1120, Y: 620):
    - Description: "Both transpose and row reversal mutate input matrix in-place."
    - Auxiliary storage: "Temporary swap variables only: O(1) extra memory."
    - Prominent Badge: "EXTRA SPACE: O(1) [OPTIMAL]" in glowing emerald theme.good.
CENTER-STAGE HERO: Space complexity token: $O(1)$ In-Place.
CAUSE: Narration explains in-place mutations require zero extra matrices.
EFFECT / MOTION: Emerald green RoughBox outlines space badge; glow animation.
WHAT MUST NOT APPEAR YET: Final summary banner.
COMPREHENSION HOLD: F2858 – F2881.
CLEANUP / EXIT: Time and Space tokens both shine together on right stage.
PERSISTENT STATE: Optimal O(N²) Time, O(1) Space confirmed.

=====================================================================================
ANCHOR 24: S11_FINAL_SUMMARY
=====================================================================================
EXACT SYNC RANGE: F2882 – F3026 (96.060s – 100.860s · Words 188..196)
SPOKEN TEXT: "This gives us a clean, optimal, in -place solution."
KIT COMPONENTS:
  - RoughBox (Final celebration seal border: stroke=theme.pivot)
  - ChalkText ("OPTIMAL IN-PLACE SOLUTION VERIFIED ✓")
  - Captions
WHAT APPEARS NOW:
  - Full scene harmony:
    - Left Stage: Pristine 11-line Python code with syntax highlighting
    - Right Stage: Time O(N²) + Space O(1) badges
    - Bottom Right: Final Seal: "METHOD 3: 100% IN-PLACE OPTIMAL ✓"
CENTER-STAGE HERO: Complete optimal solution victory hold.
CAUSE: Spoken conclusion praising the clean, in-place optimal solution.
EFFECT / MOTION: Golden glow pulse across both panels; smooth comprehension hold to F3026.
WHAT MUST NOT APPEAR YET: Next scene elements (Scene 12 mistakes/edge cases).
COMPREHENSION HOLD: F2981 – F3026 (pristine ending hold).
CLEANUP / EXIT: Scene settles cleanly before transition out.
PERSISTENT STATE: Scene 11 complete and ready for handoff to Scene 12.
=====================================================================================
```

---

### Critical Review Frame Manifest

| Frame | Label | Visual State to Inspect |
|---|---|---|
| `F0060` | ENTRY | Top bar metadata, editor entering on left, blank code area |
| `F0150` | FIRST LINE | Line 3 `n = len(matrix)` typing in editor |
| `F0280` | LOOP SCAFFOLD | Line 5 `for r in range(n):` typed; support matrix on right |
| `F0480` | CRITICAL BOUND | Line 6 `for c in range(r + 1, n):` with `r + 1` highlighted in cyan |
| `F0750` | FIRST SWAP DEMO | Right stage: (0,1) ↔ (1,0) swap arc executing |
| `F0950` | DUPLICATE HAZARD | Right stage: row 1 reaches (1,0) again; warning indicator |
| `F1080` | UNDO PITFALL | Right stage: state reverts to original; red UNDO warning |
| `F1200` | INVARIANT RULE | Right stage: green rule badge "Each Pair Swapped Exactly Once" |
| `F1450` | SWAP BODY | Line 7 `matrix[r][c], matrix[c][r] = ...` typing in editor |
| `F1620` | TRANSPOSE COMPLETE | Step 1 transpose block complete; support matrix transposed |
| `F1850` | ROW REVERSAL | Line 11 `row.reverse()` typing; row flip on right |
| `F1980` | FULL CODE STATE | All 11 Python lines visible in editor; matrix rotated 90° |
| `F2180` | TRANSPOSE TIME | Transpose time derivation token $O(N^2)$ on right |
| `F2380` | REVERSE TIME | Reverse rows time derivation token $O(N^2)$ on right |
| `F2520` | TOTAL TIME | Total time summation badge $O(N^2)$ in cyan/accent |
| `F2720` | SPACE O(1) | Space complexity badge $O(1)$ in glowing emerald green |
| `F2980` | FINAL HERO STATE | Full harmonious display: Code + Complexity + Final Seal |
| `F3020` | EXIT HOLD | Settle frame before cut to Scene 12; zero collisions |

---

### Invariant Checks & Verification Gates

1. **Total Duration:** Exactly 3,026 frames @ 30 FPS (100.860s), matching `sync/11-method3-code.json`.
2. **Language Invariant:** 100% Python syntax, matching Scene 04 and Scene 07.
3. **Kit Component Purity:** 100% `@dsa/kit` components (`ChalkCodeEditorV2`, `RoughBox`, `ChalkText`, `RoughLine`, `Captions`, `theme`, `fonts`). ZERO ad-hoc HTML container cards.
4. **Spatial Clearance:** Code editor height = 600px (Y: 140..740). Bottom captions at Y: 960..1010. Breathing clearance = 220px to 280px (> 200px invariant).
5. **Spoiler-Free Typing:** Every code line and complexity badge appears strictly at its spoken audio anchor.
6. **No-Guess Sync:** All 24 anchors derived directly from word start/end timestamps in `sync/11-method3-code.json`.
