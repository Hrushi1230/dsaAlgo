# Q15 — Spiral Matrix (LeetCode 54)
# Phase 9 V3 · Scene 06 — Method 2 Idea & Core Invariant
## IMPLEMENTATION-READY FRAMEWISE SCENE PLAN

- **Composition ID:** `015-Scene06-Method2Idea`
- **Total Duration:** 1,937 frames (64.560s @ 30fps)
- **Audio File:** `audio/scence06.mp3`
- **Word Timestamps Authority:** `sync/06-method2-idea.json`
- **Anchor Manifest:** `sync/06-method2-idea.anchors.json` (17 locked anchors)

---

## 1. CANVAS ARCHITECTURE & COORDINATE SYSTEM

```text
========================================================================================================
CANVAS: 1920 × 1080 (Coordinate Space) | Render Target: 2K QHD (2560 × 1440) via --scale=1.3333333333333333
========================================================================================================
Y: 28..76     [ CANONICAL TOP HEADER BAR ]
              Left: Topic Badge "01 · ARRAYS & HASHING"
              Center: "Spiral Matrix – Method 2: Boundary Traversal & Core Invariant"
              Right: Question Badge "#015 MEDIUM"
--------------------------------------------------------------------------------------------------------
Y: 150..810   [ CENTER-STAGE HERO ZONE ]
              LEFT STAGE (X: 120, Y: 150, W: 800, H: 660):
                - 5×6 MeshGrid (Master matrix: 1..30)
                - Dynamic 4 Boundary Markers (top, bottom, left, right)
                - Active Sub-Rectangle Golden Bounding Box
                - Animated Direction Arrows (Top → Right → Bottom → Left)
                - Degenerate Row/Column Guard Demonstration
              RIGHT STAGE (X: 980, Y: 150, W: 860, H: 660):
                - F0..F483:    Card 1: Initial 4 Boundaries
                - F484..F1089:  Card 2: The Core Invariant (Inside vs Outside)
                - F1090..F1399: Card 3: 4-Phase Edge Traversal & Boundary Shrink Rule
                - F1400..F1937: Card 4: The Validation Guard Rule (Single Row / Column Trap)
--------------------------------------------------------------------------------------------------------
Y: 960..1020  [ CANONICAL WORD-SYNC CAPTIONS (Centered at Y: 980) ]
========================================================================================================
```

---

## 2. EXACT ANCHOR-BY-ANCHOR CHOREOGRAPHY (9 MANDATORY SECTIONS)

### Anchor 01: `S06_MASTER` (Frames 0..62 / 0.000s..2.080s)
- **ANCHOR:** "For our five by six matrix"
- **WHAT APPEARS NOW:** Clean untouched 5×6 master matrix (30 cells) on the Left Stage.
- **CENTER-STAGE HERO:** 5×6 master matrix grid.
- **CAUSE:** Establishing concrete geometric space.
- **EFFECT / MOTION:** Matrix fades in smoothly with clean chalkboard borders.
- **WHAT MUST NOT APPEAR YET:** Boundary labels, active rectangle box.
- **COMPREHENSION HOLD:** Frames 63..82 brief hold.
- **CLEANUP / EXIT:** Keep matrix visible.
- **PERSISTENT STATE:** 5×6 matrix active.

### Anchor 02: `S06_INIT` (Frames 83..132 / 2.760s..4.440s)
- **ANCHOR:** "the initial boundaries are"
- **WHAT APPEARS NOW:** Right stage displays Card 1: "📐 INITIAL BOUNDARIES SCAFFOLD".
- **CENTER-STAGE HERO:** Boundary scaffold container.
- **CAUSE:** Preparing 4 initial boundary values.
- **EFFECT / MOTION:** Scaffold card appears with 4 empty pointer slots.
- **WHAT MUST NOT APPEAR YET:** Specific numeric boundary values.
- **COMPREHENSION HOLD:** Brief hold before `top=0`.
- **CLEANUP / EXIT:** Prepare `top=0` reveal.
- **PERSISTENT STATE:** Scaffold ready.

### Anchor 03: `S06_TOP0` (Frames 133..173 / 4.440s..5.780s)
- **ANCHOR:** "`top = 0`"
- **WHAT APPEARS NOW:** `top = 0` appears in Card 1 and on Left Stage above row 0.
- **CENTER-STAGE HERO:** `top = 0` pointer marker.
- **CAUSE:** Spoken word `top = 0`.
- **EFFECT / MOTION:** Cyan badge `top = 0 ↓` drops above row 0.
- **WHAT MUST NOT APPEAR YET:** Bottom, left, right values.
- **COMPREHENSION HOLD:** Frames 174..180 brief hold.
- **CLEANUP / EXIT:** Keep `top = 0`.
- **PERSISTENT STATE:** `top = 0` locked.

### Anchor 04: `S06_BOTTOM4` (Frames 181..220 / 6.020s..7.340s)
- **ANCHOR:** "`bottom = 4`"
- **WHAT APPEARS NOW:** `bottom = 4` appears in Card 1 and on Left Stage below row 4.
- **CENTER-STAGE HERO:** `bottom = 4` pointer marker.
- **CAUSE:** Spoken word `bottom = 4`.
- **EFFECT / MOTION:** Cyan badge `↑ bottom = 4` slides up below row 4.
- **WHAT MUST NOT APPEAR YET:** Left, right values.
- **COMPREHENSION HOLD:** Frames 221..224 hold.
- **CLEANUP / EXIT:** Keep `bottom = 4`.
- **PERSISTENT STATE:** `top = 0`, `bottom = 4` locked.

### Anchor 05: `S06_LEFT0` (Frames 225..259 / 7.500s..8.620s)
- **ANCHOR:** "`left = 0`"
- **WHAT APPEARS NOW:** `left = 0` appears in Card 1 and on Left Stage to the left of col 0.
- **CENTER-STAGE HERO:** `left = 0` pointer marker.
- **CAUSE:** Spoken word `left = 0`.
- **EFFECT / MOTION:** Cyan badge `left = 0 →` slides into position.
- **WHAT MUST NOT APPEAR YET:** Right value.
- **COMPREHENSION HOLD:** Frames 260..279 hold.
- **CLEANUP / EXIT:** Keep `left = 0`.
- **PERSISTENT STATE:** `top = 0`, `bottom = 4`, `left = 0` locked.

### Anchor 06: `S06_RIGHT5` (Frames 280..323 / 9.340s..10.780s)
- **ANCHOR:** "`right = 5`."
- **WHAT APPEARS NOW:** `right = 5` appears in Card 1 and on Left Stage to the right of col 5.
- **CENTER-STAGE HERO:** `right = 5` pointer marker.
- **CAUSE:** Spoken word `right = 5`.
- **EFFECT / MOTION:** Cyan badge `← right = 5` slides in. All 4 boundary markers now active!
- **WHAT MUST NOT APPEAR YET:** Invariant description.
- **COMPREHENSION HOLD:** Frames 324..346 hold on complete 4-boundary configuration.
- **CLEANUP / EXIT:** Keep all 4 markers visible.
- **PERSISTENT STATE:** 4 initial boundaries active (`top=0`, `bottom=4`, `left=0`, `right=5`).

### Anchor 07: `S06_ACTIVE_RECT` (Frames 347..458 / 11.580s..15.260s)
- **ANCHOR:** "These four boundaries describe... the active rectangle."
- **WHAT APPEARS NOW:** Golden `RoughBox` chalk frame draws around the entire matrix (`top..bottom`, `left..right`).
- **CENTER-STAGE HERO:** The active rectangle bounding box.
- **CAUSE:** Defining the geometric entity defined by the 4 scalars.
- **EFFECT / MOTION:** Golden frame animates around all 30 cells.
- **WHAT MUST NOT APPEAR YET:** Invariant rules.
- **COMPREHENSION HOLD:** Frames 459..483 hold on active rectangle concept.
- **CLEANUP / EXIT:** Transition to Invariant Card on Right Stage.
- **PERSISTENT STATE:** Active rectangle highlighted.

### Anchor 08: `S06_INVARIANT` (Frames 484..574 / 16.140s..19.120s)
- **ANCHOR:** "And we maintain one important invariant."
- **WHAT APPEARS NOW:** Right stage transitions to Card 2: "🛡️ THE CORE INVARIANT".
- **CENTER-STAGE HERO:** The Invariant Principle header.
- **CAUSE:** Formal declaration of algorithm correctness invariant.
- **EFFECT / MOTION:** Card 2 appears with golden rough border and shield icon.
- **WHAT MUST NOT APPEAR YET:** Inside/Outside breakdown before spoken.
- **COMPREHENSION HOLD:** Frames 575..593 hold.
- **CLEANUP / EXIT:** Prepare outside condition.
- **PERSISTENT STATE:** Invariant Card active.

### Anchor 09: `S06_OUTSIDE` (Frames 594..764 / 19.800s..25.480s)
- **ANCHOR:** "Everything outside the active rectangle... has already been processed exactly once."
- **WHAT APPEARS NOW:** Left stage shows an animated schematic of outer layer being outside active box, with checkmarks. Right stage displays: "1. OUTSIDE: Processed exactly once (Safe from reprocessing)".
- **CENTER-STAGE HERO:** The processed outer territory.
- **CAUSE:** Spoken explanation of the outside region.
- **EFFECT / MOTION:** Outside boundary region glows softly with green checkmarks.
- **WHAT MUST NOT APPEAR YET:** Inside region explanation.
- **COMPREHENSION HOLD:** Frames 765..763 hold.
- **CLEANUP / EXIT:** Prepare inside condition.
- **PERSISTENT STATE:** Outside invariant established.

### Anchor 10: `S06_INSIDE` (Frames 764..922 / 25.480s..30.740s)
- **ANCHOR:** "Everything inside the active rectangle... is still unprocessed."
- **WHAT APPEARS NOW:** Inside region glows bright gold. Right stage displays: "2. INSIDE: Still unprocessed (Waiting for traversal)".
- **CENTER-STAGE HERO:** The unprocessed inner core.
- **CAUSE:** Spoken explanation of the inside region.
- **EFFECT / MOTION:** Golden glow on all cells inside active box.
- **WHAT MUST NOT APPEAR YET:** Edge order sequence.
- **COMPREHENSION HOLD:** Frames 923..1089 hold on the complete duality (Outside = Done, Inside = Todo).
- **CLEANUP / EXIT:** Transition Right Stage to Card 3.
- **PERSISTENT STATE:** Core invariant fully articulated.

### Anchor 11: `S06_PEEL` (Frames 1090..1138 / 36.340s..37.920s)
- **ANCHOR:** "we peel complete edges."
- **WHAT APPEARS NOW:** Right Stage displays Card 3: "🔄 4-PHASE EDGE TRAVERSAL".
- **CENTER-STAGE HERO:** Edge peeling strategy.
- **CAUSE:** Transitioning from cell-by-cell stepping to whole-edge sweeps.
- **EFFECT / MOTION:** Card 3 animates in with 4 edge slots.
- **WHAT MUST NOT APPEAR YET:** Edge order sequence before spoken.
- **COMPREHENSION HOLD:** Frames 1139..1146 brief hold.
- **CLEANUP / EXIT:** Prepare edge order sequence.
- **PERSISTENT STATE:** Edge peeling card active.

### Anchor 12: `S06_EDGE_ORDER` (Frames 1147..1252 / 38.240s..41.740s)
- **ANCHOR:** "Top edge... right edge... bottom edge... left edge."
- **WHAT APPEARS NOW:** 4 sequential visual sweeps on matrix:
  1. Top Edge: Row `top` from `left` to `right` (Cyan arrow →)
  2. Right Edge: Col `right` from `top` to `bottom` (Gold arrow ↓)
  3. Bottom Edge: Row `bottom` from `right` to `left` (Purple arrow ←)
  4. Left Edge: Col `left` from `bottom` to `top` (Emerald arrow ↑)
- **CENTER-STAGE HERO:** The 4-step clockwise traversal cycle.
- **CAUSE:** Spoken clockwise edge order.
- **EFFECT / MOTION:** Directed neon chalk arrows sweep sequentially along the 4 perimeters.
- **WHAT MUST NOT APPEAR YET:** Shrink rule equations.
- **COMPREHENSION HOLD:** Frames 1253..1268 hold on 4 edges.
- **CLEANUP / EXIT:** Prepare boundary shrink equations.
- **PERSISTENT STATE:** 4-phase sequence demonstrated.

### Anchor 13: `S06_SHRINK` (Frames 1269..1376 / 42.300s..45.860s)
- **ANCHOR:** "After consuming an edge... we move that boundary inward."
- **WHAT APPEARS NOW:** In Card 3, the 4 boundary updates appear with shrink arrows:
  - Top consumed ➔ `top++` (moves down)
  - Right consumed ➔ `right--` (moves left)
  - Bottom consumed ➔ `bottom--` (moves up)
  - Left consumed ➔ `left++` (moves right)
- **CENTER-STAGE HERO:** Inward boundary contraction.
- **CAUSE:** Shrink rule after each edge traversal.
- **EFFECT / MOTION:** Contraction arrows pulse inward from the 4 outer edges.
- **WHAT MUST NOT APPEAR YET:** Validation rule.
- **COMPREHENSION HOLD:** Frames 1377..1399 hold.
- **CLEANUP / EXIT:** Transition Right Stage to Card 4.
- **PERSISTENT STATE:** Shrink rules locked.

### Anchor 14: `S06_RULE` (Frames 1400..1450 / 46.660s..48.320s)
- **ANCHOR:** "But there is one important rule."
- **WHAT APPEARS NOW:** Right Stage displays Card 4: "⚠️ THE CRITICAL VALIDATION RULE".
- **CENTER-STAGE HERO:** The validation alert banner.
- **CAUSE:** Highlighting the #1 trap in Spiral Matrix implementations.
- **EFFECT / MOTION:** Warning icon with orange chalk glow appears.
- **WHAT MUST NOT APPEAR YET:** Specific collapsed state formulas.
- **COMPREHENSION HOLD:** Frames 1451..1470 brief hold.
- **CLEANUP / EXIT:** Prepare validation check details.
- **PERSISTENT STATE:** Validation card active.

### Anchor 15: `S06_VALIDATE` (Frames 1471..1625 / 49.040s..54.180s)
- **ANCHOR:** "After shrinking... we must make sure... the active rectangle still exists."
- **WHAT APPEARS NOW:** Display validation invariant formulas:
  - Before bottom traversal: `if (top <= bottom)`
  - Before left traversal: `if (left <= right)`
  - If collapsed (`top > bottom` or `left > right`), STOP further sweeps!
- **CENTER-STAGE HERO:** Guard conditions (`top <= bottom` and `left <= right`).
- **CAUSE:** Preventing traversal of already-peeled lines.
- **EFFECT / MOTION:** Guard code pills light up in bright green with shield icons.
- **WHAT MUST NOT APPEAR YET:** Single row/col animation.
- **COMPREHENSION HOLD:** Frames 1626..1692 hold.
- **CLEANUP / EXIT:** Prepare degenerate example.
- **PERSISTENT STATE:** Guard conditions visible.

### Anchor 16: `S06_SINGLE` (Frames 1693..1832 / 56.440s..61.060s)
- **ANCHOR:** "one row... or one column... is left."
- **WHAT APPEARS NOW:** Left Stage demonstrates degenerate cases:
  - Case A: Single row matrix (1 × N). Top sweep consumes it ➔ `top++` causes `top > bottom`. Without guard, bottom sweep would traverse that same row backward!
  - Case B: Single column matrix (M × 1). Right sweep consumes it ➔ `right--` causes `left > right`. Without guard, left sweep would traverse that same col upward!
- **CENTER-STAGE HERO:** Single row / single column degenerate sub-matrices.
- **CAUSE:** Visualizing why the guard conditions are mandatory.
- **EFFECT / MOTION:** Red "DUPLICATE PREVENTED" badge pops over bottom/left sweep paths.
- **WHAT MUST NOT APPEAR YET:** Transition to Scene 07 trace.
- **COMPREHENSION HOLD:** Frames 1833..1857 hold.
- **CLEANUP / EXIT:** Transition to trace bridge.
- **PERSISTENT STATE:** Validation rule fully proven.

### Anchor 17: `S06_TRACE` (Frames 1858..1937 / 61.920s..64.560s)
- **ANCHOR:** "Now let’s trace the full boundary method."
- **WHAT APPEARS NOW:** Center banner: "READY FOR FULL METHOD 2 SIMULATION ➔ SCENE 07". Matrix resets to pristine initial state with `top=0, bottom=4, left=0, right=5`.
- **CENTER-STAGE HERO:** Clean reset for Method 2 simulation trace.
- **CAUSE:** Natural bridge to Scene 07 trace.
- **EFFECT / MOTION:** Gold glow sweep across the board, setting up the complete 30-step boundary simulation.
- **WHAT MUST NOT APPEAR YET:** Scene 07 simulation steps.
- **COMPREHENSION HOLD:** Frames 1910..1937 final hold.
- **CLEANUP / EXIT:** Scene ends smoothly.
- **PERSISTENT STATE:** Pristine state ready for Scene 07.
