# Q15 — Spiral Matrix (LeetCode 54)
# Phase 9 V3 · Scene 04 — Method 1 Code & Complexity
## AUTHORITATIVE FRAMEWISE SCENE PLAN — LOCKED TO sync/04-method1-code.anchors.json

- **Scene Purpose:** Walk through Method 1 (Visited Matrix Simulation) Python code, clarify the critical final-cell break guard, and analyze $O(m \times n)$ time and $O(m \times n)$ space complexity, leading directly to the question of whether visited memory can be eliminated.
- **Composition Identity:** `015-Scene04-Method1Code`
- **Total Duration:** 3,094 frames @ 30fps (103.120 seconds) strictly derived from `sync/04-method1-code.json`
- **Component Stack:** `@dsa/kit` (`ChalkCodeEditorV2`, `RoughBox`, `Captions`, `ChalkboardBackground`, `ChalkFilters`, `ChalkDust`)

---

## Spatial Layout & Coordinates (1920 × 1080)
- **Top Header (Y: 28..76):**
  - Left: Pattern badge `01 · ARRAYS & HASHING` (green dot)
  - Center: `Spiral Matrix — Method 1 Code & Complexity`
  - Right: `#015 MEDIUM`
- **Left Stage — Code Editor (X: 80..1060, Y: 120..790):**
  - Width: 980px, Height: 670px.
  - Canonical `ChalkCodeEditorV2` with 25 lines of Python code progressively typed from F0 to F2364.
  - Active line highlighting, cursor blinking, syntax highlighting using channel colors (`cyan`, `accent`, `gold`, `good`, `warn`).
- **Right Stage — Semantic Context & Cards (X: 1100..1840, Y: 120..790):**
  - Width: 740px, Height: 670px.
  - Phase 1 (F0..F670): Matrix Dimensions $m, n$, Directions Vector Table `(dr, dc)`, Visited Array Memory Contract.
  - Phase 2 (F671..F1725): Total Iterations Counter ($m \times n = 30$), Final-Cell Guard breakdown (`len(answer) == m * n: break`) showing why probing past cell 30 would crash.
  - Phase 3 (F1726..F2364): Boundary & Visited formula breakdown with turn modulo `(direction + 1) % 4`.
  - Phase 4 (F2375..F3094): Time Complexity $O(m \times n)$ (Optimal) vs Space Complexity $O(m \times n)$ (Auxiliary Matrix), followed by the pivotal hook for Method 2.
- **Bottom Stage — Captions (Y: 940..1024):**
  - `Captions` with karaoke highlight in `theme.pivot`. Breathing room above captions: 150px.

---

## Framewise Anchor Manifest (23 Anchors)

### Anchor 01: `S04_INTRO` (Frames 0..16 / 0.000s..0.520s)
- **ANCHOR:** "First,"
- **WHAT APPEARS NOW:** Top Header and `ChalkCodeEditorV2` window frame enter with subtle chalk fade. Function signature typed: `def spiralOrderVisited(matrix: list[list[int]]) -> list[int]:`.
- **CENTER-STAGE HERO:** Code Editor container.
- **CAUSE:** Narration begins code walkthrough.
- **EFFECT / MOTION:** Code window fades in; signature types smoothly.
- **WHAT MUST NOT APPEAR YET:** Inner function body lines, directions array, visited matrix.
- **COMPREHENSION HOLD:** Frames 17..28 hold on function signature.
- **CLEANUP / EXIT:** Keep signature visible.
- **PERSISTENT STATE:** Code editor active on screen.

### Anchor 02: `S04_DIMS` (Frames 29..90 / 0.980s..3.000s)
- **ANCHOR:** "we store the number of rows and columns."
- **WHAT APPEARS NOW:** Lines 2 & 3 typed character-by-character:
  - `m = len(matrix)`
  - `n = len(matrix[0])`
  - Right stage displays Dimensions Card: $m = 5$ (rows), $n = 6$ (columns), total cells $= 30$.
- **CENTER-STAGE HERO:** Dimension variables $m$ and $n$.
- **CAUSE:** Narrator introduces dimensions extraction.
- **EFFECT / MOTION:** Progressive token reveal in editor; dimension card renders with `RoughBox`.
- **WHAT MUST NOT APPEAR YET:** Directions table, visited allocation.
- **COMPREHENSION HOLD:** Frames 91..102 pause in narration.
- **CLEANUP / EXIT:** Lines 2 & 3 remain active; right card updates in next beat.
- **PERSISTENT STATE:** Dimensions $m$ and $n$ defined in scope.

### Anchor 03: `S04_DIRS` (Frames 103..219 / 3.440s..7.300s)
- **ANCHOR:** "Then we keep the four directions in clockwise order."
- **WHAT APPEARS NOW:** Line 4 typed: `directions = [`. Right card reveals 4-directional compass scaffold.
- **CENTER-STAGE HERO:** Directions list declaration.
- **CAUSE:** Narrator introduces direction vector list.
- **EFFECT / MOTION:** Progressive typing of list opening.
- **WHAT MUST NOT APPEAR YET:** Individual tuples before they are spoken.
- **COMPREHENSION HOLD:** Frames 220..237 hold on direction list header.
- **CLEANUP / EXIT:** Keep list open for tuple insertion.
- **PERSISTENT STATE:** `directions = [` open in editor.

### Anchor 04: `S04_DIR_WORDS` (Frames 238..326 / 7.920s..10.880s)
- **ANCHOR:** "Right, down, left, and up."
- **WHAT APPEARS NOW:** Lines 5–8 typed with corresponding vector tags:
  - `(0, 1),   # 0: right` (F238..F260)
  - `(1, 0),   # 1: down` (F261..F288)
  - `(0, -1),  # 2: left` (F289..F310)
  - `(-1, 0),  # 3: up` (F311..F326)
  - Line 9: `]` closing bracket.
  - Right card lights up each direction vector in synchrony.
- **CENTER-STAGE HERO:** 4 direction vector tuples.
- **CAUSE:** Spoken direction names.
- **EFFECT / MOTION:** Each tuple appears as its word is spoken.
- **WHAT MUST NOT APPEAR YET:** Visited array allocation.
- **COMPREHENSION HOLD:** Frames 327..346 hold on complete directions table.
- **CLEANUP / EXIT:** Collapse direction highlight.
- **PERSISTENT STATE:** 4-vector lookup array complete.

### Anchor 05: `S04_VISITED` (Frames 347..489 / 11.560s..16.300s)
- **ANCHOR:** "We also create a visited matrix with the same dimensions as the input."
- **WHAT APPEARS NOW:** Line 10 typed: `visited = [[False] * n for _ in range(m)]`. Line 11 typed: `answer = []`. Right card displays $5 \times 6$ grid of `False` boolean flags in amber/gold.
- **CENTER-STAGE HERO:** Visited matrix initialization.
- **CAUSE:** Allocating visited tracking structure.
- **EFFECT / MOTION:** Typing of list comprehension; 2D boolean preview visualizes auxiliary memory footprint.
- **WHAT MUST NOT APPEAR YET:** Starting coordinates $r, c$.
- **COMPREHENSION HOLD:** Frames 490..506 hold on memory allocation.
- **CLEANUP / EXIT:** Keep visited state visible.
- **PERSISTENT STATE:** `visited` 2D array and `answer` list initialized.

### Anchor 06: `S04_START_STATE` (Frames 507..656 / 16.900s..21.880s)
- **ANCHOR:** "Our row and column start at zero. And direction zero means right."
- **WHAT APPEARS NOW:** Line 12 typed: `r, c, direction = 0, 0, 0`. Right card highlights cell $(0, 0)$ and indicates `direction = 0 → (dr=0, dc=+1)`.
- **CENTER-STAGE HERO:** Initial pointer state $(r=0, c=0, \text{dir}=0)$.
- **CAUSE:** Setting simulation starting state.
- **EFFECT / MOTION:** Typing of multi-variable initialization; pointer badge lights up.
- **WHAT MUST NOT APPEAR YET:** For loop structure.
- **COMPREHENSION HOLD:** Frames 657..670 hold on starting state.
- **CLEANUP / EXIT:** Transition right stage to Loop Card.
- **PERSISTENT STATE:** Pointers $r=0, c=0, \text{dir}=0$ primed.

### Anchor 07: `S04_LOOP` (Frames 671..865 / 22.360s..28.820s)
- **ANCHOR:** "The loop allows exactly m times n visits, one for every matrix cell."
- **WHAT APPEARS NOW:** Line 13 typed: `for _ in range(m * n):`. Right card displays Loop Counter Card: "Total Iterations = $5 \times 6 = 30$".
- **CENTER-STAGE HERO:** Loop bound `range(m * n)`.
- **CAUSE:** Explaining exact iteration count.
- **EFFECT / MOTION:** Editor types loop header; right card highlights iteration budget.
- **WHAT MUST NOT APPEAR YET:** Loop body processing.
- **COMPREHENSION HOLD:** Frames 866..879 hold on loop header.
- **CLEANUP / EXIT:** Indent editor cursor for loop body.
- **PERSISTENT STATE:** Iteration loop established.

### Anchor 08: `S04_PROCESS` (Frames 880..1027 / 29.340s..34.220s)
- **ANCHOR:** "For the current cell, we add its value to the answer and mark it visited."
- **WHAT APPEARS NOW:** Lines 14 & 15 typed:
  - `answer.append(matrix[r][c])`
  - `visited[r][c] = True`
  - Right card displays: "1. Append to Answer" + "2. Set visited[r][c] = True".
- **CENTER-STAGE HERO:** Cell collection and visitation marking.
- **CAUSE:** Visiting cell body logic.
- **EFFECT / MOTION:** Tokens typed; green checks appear on right card.
- **WHAT MUST NOT APPEAR YET:** The final-cell guard.
- **COMPREHENSION HOLD:** Frames 1028..1050 hold on cell processing lines.
- **CLEANUP / EXIT:** Dim lines 14 & 15 slightly.
- **PERSISTENT STATE:** Value recorded and cell marked.

### Anchor 09: `S04_IMPORTANT_CHECK` (Frames 1051..1120 / 35.020s..37.340s)
- **ANCHOR:** "Then there is one small but important check."
- **WHAT APPEARS NOW:** Line 16 begins typing: `if len(answer) == m * n:`. Amber/warn badge pulses on right stage: "⚠️ CRITICAL GUARD".
- **CENTER-STAGE HERO:** Guard statement introduction.
- **CAUSE:** Warning of subtle boundary bug.
- **EFFECT / MOTION:** Attention shifts to line 16 with pulsing border.
- **WHAT MUST NOT APPEAR YET:** Break statement before spoken.
- **COMPREHENSION HOLD:** Frames 1121..1143 hold on guard question.
- **CLEANUP / EXIT:** Prepare break statement.
- **PERSISTENT STATE:** Guard condition highlighted.

### Anchor 10: `S04_ALL_VALUES` (Frames 1144..1334 / 38.120s..44.460s)
- **ANCHOR:** "If the answer already contains all m times n values, we stop immediately."
- **WHAT APPEARS NOW:** Line 17 typed: `    break`. Right card displays: "Collected $30/30 \rightarrow$ Terminate Immediately".
- **CENTER-STAGE HERO:** Early break on completion.
- **CAUSE:** Explaining completion trigger.
- **EFFECT / MOTION:** `break` types in keyword purple/accent color; right card shows green checkmark.
- **WHAT MUST NOT APPEAR YET:** Explanation of "Why?".
- **COMPREHENSION HOLD:** Frames 1335..1358 hold on break statement.
- **CLEANUP / EXIT:** Maintain focus on break statement.
- **PERSISTENT STATE:** Guard and break active.

### Anchor 11: `S04_WHY` (Frames 1359..1375 / 45.300s..45.840s)
- **ANCHOR:** "Why?"
- **WHAT APPEARS NOW:** Question badge appears on right stage: "❓ WHY IS THIS GUARD ESSENTIAL?".
- **CENTER-STAGE HERO:** Pedagogical interrogation.
- **CAUSE:** Engaging student curiosity.
- **EFFECT / MOTION:** Question text pops in with spring bounce.
- **WHAT MUST NOT APPEAR YET:** Explanation of no unvisited neighbors.
- **COMPREHENSION HOLD:** Frames 1376..1377 brief hold.
- **CLEANUP / EXIT:** Animate into explanation.
- **PERSISTENT STATE:** Question posed.

### Anchor 12: `S04_NO_NEXT` (Frames 1378..1557 / 45.920s..51.900s)
- **ANCHOR:** "Because after the final valid cell, there is no next unvisited cell to move to."
- **WHAT APPEARS NOW:** Right stage visual diagram: At the 30th cell (cell 16 in matrix), all 4 surrounding neighbors are visited or out-of-bounds! No valid unvisited cell exists.
- **CENTER-STAGE HERO:** Final-cell trapped state.
- **CAUSE:** Explaining physical topological termination.
- **EFFECT / MOTION:** Diagram illustrates cell 16 surrounded by red crosses on all 4 sides.
- **WHAT MUST NOT APPEAR YET:** Next move calculation code.
- **COMPREHENSION HOLD:** Frames 1558..1568 hold on trapped diagram.
- **CLEANUP / EXIT:** Show consequence of missing check.
- **PERSISTENT STATE:** Trapped final-cell understood.

### Anchor 13: `S04_WITHOUT` (Frames 1569..1703 / 52.300s..56.760s)
- **ANCHOR:** "Without this check, we would unnecessarily try to calculate another move."
- **WHAT APPEARS NOW:** Right stage flashes a red warning cross: "Without break: executes next-move calculation on dead end → spurious turn!".
- **CENTER-STAGE HERO:** Prevented redundant calculation.
- **CAUSE:** Highlighting clean algorithmic exit.
- **EFFECT / MOTION:** Warning shake animation on red alert box.
- **WHAT MUST NOT APPEAR YET:** Normal move calculation lines.
- **COMPREHENSION HOLD:** Frames 1704..1725 hold on clean exit rationale.
- **CLEANUP / EXIT:** Transition right stage to Movement Card.
- **PERSISTENT STATE:** Rationale established.

### Anchor 14: `S04_NEXTCALC` (Frames 1726..1895 / 57.540s..63.160s)
- **ANCHOR:** "Otherwise, we calculate the next row and column using the current direction."
- **WHAT APPEARS NOW:** Lines 18 & 19 typed:
  - `dr, dc = directions[direction]`
  - `nr, nc = r + dr, c + dc`
  - Right card displays: "Probe Next Position: $(nr, nc) = (r + dr, c + dc)$".
- **CENTER-STAGE HERO:** Next position probe calculation.
- **CAUSE:** Moving from current cell to next.
- **EFFECT / MOTION:** Code lines type; formula badge appears on right.
- **WHAT MUST NOT APPEAR YET:** Boundary collision if condition.
- **COMPREHENSION HOLD:** Frames 1896..1919 hold on probe formula.
- **CLEANUP / EXIT:** Prepare boundary condition line.
- **PERSISTENT STATE:** Candidate $(nr, nc)$ calculated.

### Anchor 15: `S04_IFCOND` (Frames 1920..2070 / 64.000s..69.000s)
- **ANCHOR:** "If that next position is outside the matrix or already visited,"
- **WHAT APPEARS NOW:** Line 20 typed with hot line highlight:
  - `if nr < 0 or nr >= m or nc < 0 or nc >= n or visited[nr][nc]:`
  - Right card breaks down the 5 conditions (4 out-of-bounds + 1 visited).
- **CENTER-STAGE HERO:** Turn condition (Boundary OR Visited).
- **CAUSE:** Detecting collision.
- **EFFECT / MOTION:** Hot line highlight glows amber; 5 sub-predicates bulleted on right.
- **WHAT MUST NOT APPEAR YET:** Direction rotation line.
- **COMPREHENSION HOLD:** Frames 2071..2089 hold on turn condition.
- **CLEANUP / EXIT:** Indent for turn block.
- **PERSISTENT STATE:** Collision detector active.

### Anchor 16: `S04_ROTATE` (Frames 2090..2141 / 69.660s..71.360s)
- **ANCHOR:** "we rotate the direction once"
- **WHAT APPEARS NOW:** Line 21 typed: `    direction = (direction + 1) % 4`. Right card highlights modulo 4 clock: $0 \rightarrow 1 \rightarrow 2 \rightarrow 3 \rightarrow 0$.
- **CENTER-STAGE HERO:** Clockwise rotation formula `(direction + 1) % 4`.
- **CAUSE:** Clockwise direction update.
- **EFFECT / MOTION:** Token typing; rotation icon spins 90 degrees.
- **WHAT MUST NOT APPEAR YET:** Recalculation lines.
- **COMPREHENSION HOLD:** Frames 2142..2152 brief hold on rotation.
- **CLEANUP / EXIT:** Prepare recalculation lines.
- **PERSISTENT STATE:** Direction index incremented modulo 4.

### Anchor 17: `S04_RECALC` (Frames 2153..2225 / 71.780s..74.160s)
- **ANCHOR:** "and calculate the next position again."
- **WHAT APPEARS NOW:** Lines 22 & 23 typed:
  - `    dr, dc = directions[direction]`
  - `    nr, nc = r + dr, c + dc`
  - Right card updates: "New $(nr, nc)$ along turned direction".
- **CENTER-STAGE HERO:** Recalculation after turn.
- **CAUSE:** Taking step along new orientation.
- **EFFECT / MOTION:** Code lines type; probe vector updates direction on right card.
- **WHAT MUST NOT APPEAR YET:** Actual position assignment.
- **COMPREHENSION HOLD:** Frames 2226..2234 brief hold.
- **CLEANUP / EXIT:** Prepare final step update.
- **PERSISTENT STATE:** Valid $(nr, nc)$ acquired.

### Anchor 18: `S04_MOVE` (Frames 2235..2276 / 74.500s..75.860s)
- **ANCHOR:** "Then we move there."
- **WHAT APPEARS NOW:** Line 24 typed: `r, c = nr, nc`. Line 25 typed: `return answer`. Right card displays: "Step executed: $(r, c) \leftarrow (nr, nc)$".
- **CENTER-STAGE HERO:** State update $(r, c)$.
- **CAUSE:** Completing one spiral step.
- **EFFECT / MOTION:** Pointer moves into position; function return typed.
- **WHAT MUST NOT APPEAR YET:** Complexity analysis card.
- **COMPREHENSION HOLD:** Frames 2277..2289 hold on complete code.
- **CLEANUP / EXIT:** Transition right stage to Complexity Analysis Card.
- **PERSISTENT STATE:** Python implementation 100% complete and visible.

### Anchor 19: `S04_MATCH` (Frames 2290..2364 / 76.320s..78.800s)
- **ANCHOR:** "That is exactly the rule. We just traced."
- **WHAT APPEARS NOW:** Overall code editor is softly highlighted with a subtle green border glow (`theme.good`). Badge appears: "Trace ↔ Code 100% Match".
- **CENTER-STAGE HERO:** Trace-to-Code equivalence.
- **CAUSE:** Validating code against verified dry run.
- **EFFECT / MOTION:** Green glow pulse; reassurance badge appears.
- **WHAT MUST NOT APPEAR YET:** Complexity equations.
- **COMPREHENSION HOLD:** Frames 2365..2374 hold on synthesis.
- **CLEANUP / EXIT:** Clear badge; open Complexity Analysis card on right stage.
- **PERSISTENT STATE:** Code validated.

### Anchor 20: `S04_TIME` (Frames 2375..2558 / 79.160s..85.280s)
- **ANCHOR:** "Every cell enters the answer once. So the time complexity is O m times n."
- **WHAT APPEARS NOW:** Complexity Card on right stage reveals Time Complexity section:
  - Header: `⏱️ TIME COMPLEXITY`
  - Formula: `O(m × n)` in large 36px font, color `theme.good`.
  - Rationale: "Exactly $m \times n$ loop iterations. Each iteration performs $O(1)$ lookups, appending, and boundary checks."
- **CENTER-STAGE HERO:** $O(m \times n)$ Time Complexity.
- **CAUSE:** Spoken time analysis.
- **EFFECT / MOTION:** Time badge enters with spring animation; green checkmark sparkles.
- **WHAT MUST NOT APPEAR YET:** Space complexity values.
- **COMPREHENSION HOLD:** Frames 2559..2577 hold on time complexity.
- **CLEANUP / EXIT:** Keep Time Complexity visible; open Space section below.
- **PERSISTENT STATE:** Time complexity $O(m \times n)$ documented.

### Anchor 21: `S04_SPACE` (Frames 2578..2814 / 85.940s..93.800s)
- **ANCHOR:** "But the visited matrix also stores m times n states. So the auxiliary space is O m times n."
- **WHAT APPEARS NOW:** Complexity Card reveals Space Complexity section:
  - Header: `💾 AUXILIARY SPACE`
  - Formula: `O(m × n)` in large 36px font, color `theme.warn` (amber/orange).
  - Rationale: "Allocates $m \times n$ 2D boolean array `visited` to track visited coordinates."
  - Output space noted: "Excluding output array, auxiliary space is $O(m \times n)$."
- **CENTER-STAGE HERO:** $O(m \times n)$ Auxiliary Space footprint.
- **CAUSE:** Spoken space analysis.
- **EFFECT / MOTION:** Space badge enters with amber border; warning icon highlights auxiliary overhead.
- **WHAT MUST NOT APPEAR YET:** Method 2 question prompt.
- **COMPREHENSION HOLD:** Frames 2815..2831 hold on space complexity.
- **CLEANUP / EXIT:** Keep both Time and Space visible.
- **PERSISTENT STATE:** Both complexities established.

### Anchor 22: `S04_TIME_OPTIMAL` (Frames 2832..2934 / 94.400s..97.800s)
- **ANCHOR:** "The time is already optimal for reading every cell."
- **WHAT APPEARS NOW:** Time Complexity badge gets an "OPTIMAL" tag (`theme.good`). "Since every cell must be read, $\Omega(m \times n)$ is a lower bound."
- **CENTER-STAGE HERO:** Time optimality confirmation.
- **CAUSE:** Highlighting that time cannot be asymptotically improved.
- **EFFECT / MOTION:** Green badge glows; reassuring confirmation.
- **WHAT MUST NOT APPEAR YET:** The final question callout.
- **COMPREHENSION HOLD:** Frames 2935..2952 hold on optimal time.
- **CLEANUP / EXIT:** Shift attention to the space limitation.
- **PERSISTENT STATE:** Time optimality locked.

### Anchor 23: `S04_QUESTION` (Frames 2953..3094 / 98.420s..103.120s)
- **ANCHOR:** "But now the question is, do we really need this visited matrix?"
- **WHAT APPEARS NOW:** Prominent Question Callout card expands across right stage:
  - Pulsing amber/cyan RoughBox:
  - Text: *"Can we traverse the spiral in $O(1)$ auxiliary space without allocating ANY visited matrix?"*
  - Forward pointer: "👉 UP NEXT: METHOD 2 — BOUNDARY SHRINKING".
- **CENTER-STAGE HERO:** The $O(1)$ space challenge / Method 2 hook.
- **CAUSE:** Closing question connecting Scene 04 to Scene 05 and Method 2.
- **EFFECT / MOTION:** Callout badge expands with spring easing; subtle attention glow.
- **WHAT MUST NOT APPEAR YET:** Scene 05 contents.
- **COMPREHENSION HOLD:** Final hold from Frame 3076 to 3094.
- **CLEANUP / EXIT:** Clean freeze on full resolution ready for Scene 05.
- **PERSISTENT STATE:** Scene 04 concludes cleanly.
