# 04 — Matrix / Grid
## KIT-DRIVEN STRUCTURE GRAMMAR

This document defines how Matrix / Grid must be constructed using the existing course kit.

---

# 1. Core identity

A Matrix / Grid is:

```text
ONE CONTINUOUS 2-D COORDINATE SYSTEM
```

Core semantics:

```text
ROW
+
COLUMN
+
CELL (r,c)
```

It must not look like a random collection of cards.

---

# 2. Background

Use:

```text
theme.boardBg
≈ #18523d
```

Full frame.

Do not place a black/dark panel behind the matrix.

The grid should feel drawn directly on the green chalkboard.

---

# 3. Main grid construction

Use:

```text
RoughBox
```

for each cell.

But every cell must belong visually to ONE grid.

Example:

```text
          COL
         0   1   2   3

ROW  0  [ ][ ][ ][ ]
     1  [ ][ ][ ][ ]
     2  [ ][ ][ ][ ]
     3  [ ][ ][ ][ ]
```

Cell rules:
- same geometry within one matrix,
- same roughness,
- same base stroke,
- no individual drop shadows,
- no SaaS-card styling,
- cells touch or nearly touch,
- entire matrix reads as one structure.

---

# 4. Adaptive cell sizing

Do not hardcode a single cell dimension.

Compute from:

```text
rows
columns
availableWidth
availableHeight
```

Conceptually:

```text
cellSize =
min(
  availableWidth / columns,
  availableHeight / rows
)
```

Then clamp for readability if needed.

Examples:

```text
3×3   → larger cells
5×5   → medium cells
9×12  → smaller cells
```

The grammar remains unchanged.

---

# 5. Cell anatomy

Basic cell:

```text
RoughBox
+
value
```

Optional coordinate label only when coordinate reasoning matters:

```text
┌───────┐
│   7   │
│ (2,1) │
└───────┘
```

Do not always print coordinates inside cells.

---

# 6. Row / column labels

Use:

```text
ChalkText
```

outside the grid.

Top:

```text
0  1  2  3
```

Left:

```text
0
1
2
3
```

This teaches:

```text
coordinate belongs to geometry
value belongs to cell content
```

---

# 7. Current cell

Current state:

```text
theme.pivot
```

Use:
- stronger RoughBox stroke,
- optional subtle hachure,
- optional tiny focus outline.

Do not move or resize the cell dramatically.

The coordinate stays fixed.

---

# 8. Query / neighbor cell

Use:

```text
theme.cyan
```

For a temporary relation:

```text
current → checked neighbor
```

Use:

```text
RoughLine
```

or:

```text
EvolvingPath
```

only when the relation helps the explanation.

---

# 9. Visited / history

Use:

```text
theme.chalkDim
```

or subtle hachure.

Visited cells should recede rather than compete with current state.

---

# 10. Confirmed / solution

Use:

```text
theme.good
```

for:
- final path,
- confirmed cell,
- accepted region,
- completed component.

Do not overuse it.

---

# 11. Blocked / invalid

Use:

```text
theme.warn
```

plus a second visual cue:
- X,
- slash,
- blocked hachure.

Never rely on color alone.

---

# 12. Adjacency rule

Do NOT draw all neighbor edges.

Grid adjacency is already encoded by spatial geometry.

Wrong:

```text
[][][][]
|||||||
[][][][]
```

Only show temporary relation when needed:

```text
current (2,2)
→ checking (2,3)
```

using `RoughLine` or `EvolvingPath`.

---

# 13. BFS / DFS grid mode

Grid stays the base structure.

Allowed overlays:

```text
CURRENT
FRONTIER
VISITED
SOURCE
TARGET
```

Use:

```text
RoughBox   → cell state
ChalkText  → labels
RoughLine / EvolvingPath → active relation only
```

Queue / Stack should remain separate support visuals.

Architecture:

```text
GRID KERNEL
+
QUEUE / STACK SUPPORT VISUAL
```

Do not embed queue semantics inside cells.

---

# 14. PathTracer use

Use `PathTracer` only when the algorithm has a meaningful continuous path.

Good use:
- spiral traversal,
- final solved route,
- path reconstruction.

Do not use it for every local neighbor check.

---

# 15. Spiral Matrix

Keep the matrix fixed.

Add:

```text
active perimeter
current cell
traversal direction
```

Example:

```text
┌─────────────┐
│ → → → → ↓   │
│ ↑       ↓   │
│ ↑ ← ← ← ↓   │
└─────────────┘
```

Use:
- RoughLine,
- RoughBox,
- PathTracer if useful.

Do not rotate or reflow the matrix.

---

# 16. Rotate Image

Cell coordinates are stable positions.

Values move between cells.

Rule:

```text
CELL POSITION stays fixed
VALUE moves
```

For 90° rotation:

```text
(r,c)
→
(c,n-1-r)
```

Use `BezierFlight` when a curved transfer helps teach movement.

Do not animate the whole grid as a decorative spinning picture unless the lesson explicitly needs a geometric preview.

---

# 17. Set Matrix Zeroes

First pass:
- detect zero,
- mark its row,
- mark its column.

Use:
- RoughLine,
- subtle region band,
- row/column hachure.

Only during the later update phase should affected cells become zero.

Do not reveal all resulting zeroes immediately on first discovery.

---

# 18. Sudoku

Use same grid kernel.

Add stronger boundaries every third row/column.

Use `RoughLine`.

Do not place dark panels around each 3×3 group.

The green board remains visible.

---

# 19. Island / Number of Islands

Use cell state to communicate:

```text
water
land
current
visited
confirmed component
```

Do not convert the grid into graph nodes.

The grid geometry already encodes topology.

Temporary relation lines are allowed only for active teaching moments.

---

# 20. Kit mapping

```text
MATRIX CELL
→ RoughBox

ROW/COLUMN LABEL
→ ChalkText

CURRENT / QUERY OUTLINE
→ RoughBox with semantic stroke

ROW/COLUMN REGION
→ subtle RoughBox hachure / region fill

ACTIVE NEIGHBOR RELATION
→ RoughLine / EvolvingPath

CONTINUOUS TRACE
→ PathTracer

VALUE MOVEMENT
→ BezierFlight

COUNTER
→ CountUp

ANNOTATION
→ ChalkText
```

---

# 21. Layer system

Recommended layers:

```text
L0 board
L1 grid base cells
L2 region / visited state
L3 current/query outline
L4 transient relation/path
L5 values
L6 row/column labels
L7 explanatory annotation
```

Values stay above fills.

Transient lines must not cover important text.

---

# 22. Thin wrappers allowed later

Do not create giant UI components like:

```text
MatrixCard
GridDashboard
DarkGridContainer
```

Allowed future semantic wrappers:

```text
GridCell
MatrixGrid
GridCoordinateLabels
GridStateOverlay
```

They should compose existing kit primitives internally.

---

# 23. False semantics to avoid

Never:

```text
move cells because traversal changes
reflow the grid
draw every adjacency edge
use bars for matrix cells
show each cell as an independent floating card
use black/dark panels behind the grid
use random colors per state
hide coordinates when coordinates are the lesson
show the final result before the algorithm causes it
```

---

# 24. Permanent visual rule

```text
CELL POSITIONS ARE FIXED.
ROW AND COLUMN DEFINE IDENTITY.
VALUES AND STATE MAY CHANGE.
```

---

# 25. Final visual combination

```text
BOARD
→ theme.boardBg

NORMAL GRID
→ theme.chalkText

CURRENT
→ theme.pivot

QUERY / FRONTIER
→ theme.cyan

CONFIRMED
→ theme.good

BLOCKED / REJECT
→ theme.warn

VISITED / HISTORY
→ theme.chalkDim

IMPORTANT REGION
→ theme.highlight / subtle hachure
```

No extra black surface.
No generic dark cards.
