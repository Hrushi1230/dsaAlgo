# Q15 — Spiral Matrix (LeetCode 54)
# Phase 9 V3 · Scene 09 — Complexity, Common Mistakes & Edge Cases
## AUTHORITATIVE FRAMEWISE SCENE PLAN — LOCKED TO sync/09-complexity-mistakes-edgecases.anchors.json

- **Scene Purpose:** Directly contrast Method 1 vs Method 2 complexity, establish the conceptual leap from explicit boolean grids to 4 implicit boundary pointers, expose the 5 critical production pitfalls (non-square $m \times n$, turn conditions, consume-before-shrink invariant, single-row/col duplicate traps, not stopping early), showcase the 5 canonical edge cases ($1 \times 1$, $1 \times n$, $m \times 1$, wide, tall), and prove value-independence (matrix values can be negative, zero, duplicates because traversal is pure coordinate geometry).
- **Composition Identity:** `015-Scene09-ComplexityMistakes`
- **Total Duration:** 3,175 frames @ 30fps (105.840 seconds) strictly derived from `sync/09-complexity-mistakes-edgecases.json`
- **Component Stack:** `@dsa/kit` (`RoughBox`, `Captions`, `ChalkboardBackground`, `ChalkFilters`)

---

## Spatial Layout & Coordinates (1920 × 1080)
- **Top Header (Y: 28..76):**
  - Left: Pattern badge `01 · ARRAYS & HASHING` (green dot)
  - Center: `Spiral Matrix — Complexity Comparison, Pitfalls & Edge Cases`
  - Right: `#015 MEDIUM`
- **Left Stage (X: 100..980, Y: 110..810):**
  - Width: 880px, Height: 700px.
  - Phase 1 (F0..F828): Method 1 vs Method 2 Side-by-Side Comparison & Representation Leap.
  - Phase 2 (F829..F2422): 5 Critical Interview Pitfalls / Rules of Invariant.
  - Phase 3 (F2423..F3175): 5 Canonical Edge Cases Carousel ($1 \times 1$, $1 \times n$, $m \times 1$, wide, tall).
- **Right Stage (X: 1020..1820, Y: 110..810):**
  - Width: 800px, Height: 700px.
  - Interactive Visual Demonstration corresponding to each left card:
    - Phase 1: Visual comparison of 2D boolean memory matrix ($m \times n$) vs 4 scalar integers (`top, bottom, left, right`).
    - Phase 2: Visual matrix diagrams showing how each mistake manifests (e.g. single-row duplicate trap, premature exit).
    - Phase 3: Matrix Grid Diagrams for $1 \times 1$, $1 \times 5$, $4 \times 1$, $2 \times 6$, and value-independence demo with negative/zero/duplicate numbers.
- **Bottom Stage — Captions (Y: 940..1024):**
  - `Captions` with karaoke highlight in `theme.pivot`. Breathing room above captions: 130px.

---

## Framewise Anchor Manifest (14 Anchors)

### Anchor 01: `S09_COMPARE` (Frames 0..47 / 0.000s..1.560s)
- **ANCHOR:** "Let’s compare both methods."
- **WHAT APPEARS NOW:** Top Header enters; comparison stage scaffold appears with side-by-side card frames.
- **CENTER-STAGE HERO:** Dual Method Comparison Scaffold.
- **CAUSE:** Narration transitions from code to comparison.
- **EFFECT / MOTION:** Side-by-side containers fade in with rough borders.
- **WHAT MUST NOT APPEAR YET:** Specific complexity figures before spoken.
- **COMPREHENSION HOLD:** Frames 48..70 pause in audio.
- **CLEANUP / EXIT:** Keep containers ready for Method 1 and Method 2 data.
- **PERSISTENT STATE:** Comparison scaffold active.

### Anchor 02: `S09_M1` (Frames 71..335 / 2.380s..11.160s)
- **ANCHOR:** "Method One... Direction Simulation with Visited... takes... `O(m × n)` time... and... `O(m × n)` auxiliary space."
- **WHAT APPEARS NOW:** Method 1 card lights up on the left:
  - Title: Method 1 (Direction Simulation + Visited Array)
  - Time Complexity: $O(m \times n)$
  - Auxiliary Space: $O(m \times n)$ (Allocates 2D boolean grid)
  - Right stage displays full $5 \times 6$ visited boolean grid in amber.
- **CENTER-STAGE HERO:** Method 1 Complexity Profile.
- **CAUSE:** Narrator reviews Method 1 costs.
- **EFFECT / MOTION:** Card fills with Method 1 badges; right side illustrates the visited grid memory footprint.
- **WHAT MUST NOT APPEAR YET:** Method 2 card values.
- **COMPREHENSION HOLD:** Frames 336..355 pause in audio.
- **CLEANUP / EXIT:** Keep Method 1 card active.
- **PERSISTENT STATE:** Method 1 documented.

### Anchor 03: `S09_M2` (Frames 356..625 / 11.880s..20.840s)
- **ANCHOR:** "Method Two... Shrinking Boundaries... also takes... `O(m × n)` time... but only... `O(1)` auxiliary space."
- **WHAT APPEARS NOW:** Method 2 card lights up on the right:
  - Title: Method 2 (Shrinking Boundary Traversal)
  - Time Complexity: $O(m \times n)$
  - Auxiliary Space: $O(1)$ 🏆 OPTIMAL
  - Right stage highlights 4 scalar variables: `top, bottom, left, right`.
- **CENTER-STAGE HERO:** Method 2 Complexity Profile & $O(1)$ trophy.
- **CAUSE:** Narrator contrasts Method 2 costs.
- **EFFECT / MOTION:** Emerald badge $O(1)$ glows; comparison highlights the zero auxiliary memory advantage.
- **WHAT MUST NOT APPEAR YET:** Representation explanation.
- **COMPREHENSION HOLD:** Frames 626..647 pause in audio.
- **CLEANUP / EXIT:** Maintain both cards for representation synthesis.
- **PERSISTENT STATE:** Both methods compared side-by-side.

### Anchor 04: `S09_REP` (Frames 648..817 / 21.600s..27.220s)
- **ANCHOR:** "The improvement is... how we represent the remaining work."
- **WHAT APPEARS NOW:** Synthesis Banner appears connecting both cards:
  - Method 1: Tracks remaining work with an **Explicit $m \times n$ Boolean Grid**.
  - Method 2: Tracks remaining work with **4 Implicit Boundary Integers**.
  - "The time is identical. The representation is what makes space $O(1)$!"
- **CENTER-STAGE HERO:** Representation Leap Banner.
- **CAUSE:** Explaining the foundational computer science insight.
- **EFFECT / MOTION:** Glowing horizontal link between the memory structures.
- **WHAT MUST NOT APPEAR YET:** Common mistakes.
- **COMPREHENSION HOLD:** Frames 818..828 hold on insight.
- **CLEANUP / EXIT:** Smooth transition to Mistakes Phase.
- **PERSISTENT STATE:** Asymptotic comparison complete.

### Anchor 05: `S09_MISTAKES` (Frames 829..896 / 27.620s..29.880s)
- **ANCHOR:** "Now remember these important mistakes."
- **WHAT APPEARS NOW:** Stage transitions to "5 CRITICAL PITFALLS" mode with warning header and clean list container.
- **CENTER-STAGE HERO:** Pitfalls Header & Container.
- **CAUSE:** Narrator introduces common mistakes.
- **EFFECT / MOTION:** Warning icon with rough box container scales in.
- **WHAT MUST NOT APPEAR YET:** Specific mistakes before spoken.
- **COMPREHENSION HOLD:** Frames 897..915 pause in audio.
- **CLEANUP / EXIT:** Keep container active for mistake items.
- **PERSISTENT STATE:** Mistakes phase active.

### Anchor 06: `S09_RECT` (Frames 916..1121 / 30.520s..37.380s)
- **ANCHOR:** "do not assume the matrix is square. It is `m` by `n`. Rows and columns can be different."
- **WHAT APPEARS NOW:** Mistake 1 reveals:
  - ❌ Pitfall 1: Assuming matrix is square ($n \times n$).
  - ✓ Truth: Rectangular matrices ($m \times n$, where $m \ne n$) are standard.
  - Right stage shows a $3 \times 6$ wide matrix and a $6 \times 3$ tall matrix side by side.
- **CENTER-STAGE HERO:** Rectangular Matrix Reality Check.
- **CAUSE:** Spoken warning about non-square inputs.
- **EFFECT / MOTION:** Red "not square" cross; mini matrix diagrams illustrate dimension asymmetry.
- **WHAT MUST NOT APPEAR YET:** Turn conditions.
- **COMPREHENSION HOLD:** Frames 1122..1134 hold on mistake 1.
- **CLEANUP / EXIT:** Keep item 1 in list.
- **PERSISTENT STATE:** Rectangular requirement established.

### Anchor 07: `S09_TURN` (Frames 1135..1420 / 37.820s..47.340s)
- **ANCHOR:** "in Method One... do not turn only at the border. You must turn when the next cell is... outside... or already visited."
- **WHAT APPEARS NOW:** Mistake 2 reveals:
  - ❌ Pitfall 2: Turning only at matrix boundaries.
  - ✓ Truth: In Method 1, turn when candidate cell is **out-of-bounds OR already visited**.
  - Right stage displays simulation probe hitting visited cell `6` and correctly turning down.
- **CENTER-STAGE HERO:** Double Turn Guard (Boundary + Visited).
- **CAUSE:** Explaining Method 1 turn trigger.
- **EFFECT / MOTION:** Dotted ray turns clockwise upon encountering visited cell.
- **WHAT MUST NOT APPEAR YET:** Boundary consume order.
- **COMPREHENSION HOLD:** Frames 1421..1449 pause in audio.
- **CLEANUP / EXIT:** Keep item 2.
- **PERSISTENT STATE:** Turn conditions verified.

### Anchor 08: `S09_CONSUME_FIRST` (Frames 1450..1730 / 48.320s..57.680s)
- **ANCHOR:** "in the boundary method... consume an edge first... then shrink its boundary. Do not shrink before processing it."
- **WHAT APPEARS NOW:** Mistake 3 reveals:
  - ❌ Pitfall 3: Shrinking a boundary before processing its row/column.
  - ✓ Truth: Invariant sequence must strictly be **CONSUME FIRST ➔ THEN SHRINK**.
  - Right stage illustrates: If `top` is incremented before traversing row 0, row 0 is permanently skipped!
- **CENTER-STAGE HERO:** Consume-Before-Shrink Invariant.
- **CAUSE:** Explaining pointer update ordering.
- **EFFECT / MOTION:** Timeline diagram highlights order: 1. Loop over row `top` ➔ 2. `top += 1`.
- **WHAT MUST NOT APPEAR YET:** Post-shrink validation.
- **COMPREHENSION HOLD:** Frames 1731..1730 hold.
- **CLEANUP / EXIT:** Keep item 3.
- **PERSISTENT STATE:** Update order locked.

### Anchor 09: `S09_VALIDATE` (Frames 1731..1915 / 57.700s..63.820s)
- **ANCHOR:** "after shrinking... validate the remaining rectangle... before processing another edge."
- **WHAT APPEARS NOW:** Mistake 4 reveals:
  - ❌ Pitfall 4: Processing all 4 edges blindly without inner re-validation.
  - ✓ Truth: Check `top <= bottom` and `left <= right` after top and bottom shrinks!
  - Right stage highlights the break guards `if top > bottom: break` in golden warning chalk.
- **CENTER-STAGE HERO:** Intermediate Validation Guard.
- **CAUSE:** Explaining why inner break guards exist.
- **EFFECT / MOTION:** Break guard badges flash warning border.
- **WHAT MUST NOT APPEAR YET:** Single-row duplicate breakdown.
- **COMPREHENSION HOLD:** Frames 1916..1932 pause in audio.
- **CLEANUP / EXIT:** Keep item 4.
- **PERSISTENT STATE:** Inner validation requirement clear.

### Anchor 10: `S09_DUPLICATE` (Frames 1933..2114 / 64.440s..70.460s)
- **ANCHOR:** "single-row and single-column cases... can create duplicate values."
- **WHAT APPEARS NOW:** Mistake 4 Demonstration Card:
  - Example: Matrix $1 \times 3$: `[[1, 2, 3]]`.
  - Top edge traverses: `1, 2, 3`. `top` becomes 1 (`top > bottom`).
  - Without guard, Bottom edge would traverse row 0 in reverse: `3, 2, 1`!
  - Result with missing guard: `[1, 2, 3, 3, 2, 1]` ❌ (FATAL DUPLICATE BUG).
- **CENTER-STAGE HERO:** Single-Row Duplicate Demonstration.
- **CAUSE:** Demonstrating the concrete consequence of missing inner checks.
- **EFFECT / MOTION:** Red duplicate badges pop over `3, 2, 1`.
- **WHAT MUST NOT APPEAR YET:** Don't stop rule.
- **COMPREHENSION HOLD:** Frames 2115..2140 hold on duplicate bug.
- **CLEANUP / EXIT:** Dim duplicate example.
- **PERSISTENT STATE:** Fatal duplicate bug understood.

### Anchor 11: `S09_DONT_STOP` (Frames 2141..2423 / 71.360s..80.760s)
- **ANCHOR:** "do not stop just because... only one row... or one column... is left. Those cells are still valid work."
- **WHAT APPEARS NOW:** Mistake 5 reveals:
  - ❌ Pitfall 5: Stopping loop when $top == bottom$ or $left == right$.
  - ✓ Truth: When $top == bottom$, there is still **exactly 1 row** left to collect!
  - Invariant is `< =` (less than OR EQUAL TO), not `<`!
- **CENTER-STAGE HERO:** Less-Than-Or-Equal Invariant Rule.
- **CAUSE:** Explaining the `< =` vs `<` off-by-one trap.
- **EFFECT / MOTION:** `<=` symbol scales up in bright gold with checkmark.
- **WHAT MUST NOT APPEAR YET:** Edge cases carousel.
- **COMPREHENSION HOLD:** Frames 2424..2422 hold.
- **CLEANUP / EXIT:** Transition to Edge Cases Carousel.
- **PERSISTENT STATE:** All 5 pitfalls resolved.

### Anchor 12: `S09_CASES` (Frames 2423..2720 / 80.760s..90.680s)
- **ANCHOR:** "a one by one matrix... a single row... a single column... wide matrices... and tall matrices."
- **WHAT APPEARS NOW:** Stage transitions to "5 CANONICAL EDGE CASES":
  - 1. $1 \times 1$: Single cell `[[42]]`
  - 2. $1 \times 4$: Single row `[[1, 2, 3, 4]]`
  - 3. $4 \times 1$: Single col `[[1], [2], [3], [4]]`
  - 4. $2 \times 5$: Wide matrix (2 rows, 5 cols)
  - 5. $5 \times 2$: Tall matrix (5 rows, 2 cols)
  All 5 mini matrices render cleanly side-by-side with verified green checkmarks!
- **CENTER-STAGE HERO:** 5 Edge Case Geometry Cards.
- **CAUSE:** Spoken canonical edge case enumeration.
- **EFFECT / MOTION:** Each mini matrix illuminates on its spoken word.
- **WHAT MUST NOT APPEAR YET:** Value independence proof.
- **COMPREHENSION HOLD:** Frames 2721..2744 pause in audio.
- **CLEANUP / EXIT:** Keep edge case strip.
- **PERSISTENT STATE:** All geometric variations verified.

### Anchor 13: `S09_VALUES` (Frames 2745..2935 / 91.500s..97.820s)
- **ANCHOR:** "Duplicate values... negative values... and zeros... also change nothing."
- **WHAT APPEARS NOW:** Value-Independence Demonstration Matrix:
  - Matrix containing: `-5, 0, 0, 7, -5, 0, 99, -1, 0`.
  - Badges light up: `Negative: -5, -1`, `Zeros: 0`, `Duplicates: -5, 0`.
- **CENTER-STAGE HERO:** Value-Independence Matrix.
- **CAUSE:** Addressing questions about cell value edge cases.
- **EFFECT / MOTION:** Special values highlight in cyan, amber, and purple.
- **WHAT MUST NOT APPEAR YET:** Final conclusion punchline.
- **COMPREHENSION HOLD:** Frames 2936..2934 hold.
- **CLEANUP / EXIT:** Transition to final punchline.
- **PERSISTENT STATE:** Values do not affect algorithm.

### Anchor 14: `S09_POSITIONS` (Frames 2935..3175 / 97.820s..105.840s)
- **ANCHOR:** "Because our traversal depends on... positions... not on the values stored there."
- **WHAT APPEARS NOW:** Golden Punchline Banner:
  - 🌟 **GEOMETRIC INVARIANT LAW: POSITION > VALUE**
  - "The spiral traversal is pure coordinate geometry. What matters is $(r, c)$ coordinates and perimeter bounds, never the data values inside."
  - Complete mastery seal lights up in emerald!
- **CENTER-STAGE HERO:** Geometric Invariant Seal: POSITION > VALUE.
- **CAUSE:** Final pedagogical principle of matrix algorithms.
- **EFFECT / MOTION:** Master seal scales in with golden star glow.
- **WHAT MUST NOT APPEAR YET:** Scene 10 recap.
- **COMPREHENSION HOLD:** Frames 3140..3175 hold until final frame.
- **CLEANUP / EXIT:** Smooth fade out at F3175.
- **PERSISTENT STATE:** Scene 09 complete.
