# 04 — Matrix / Grid
## GRAMMAR STATUS: COMPLETE

## Core identity

```text
ONE CONTINUOUS 2-D COORDINATE SYSTEM
ROW + COLUMN + CELL (r,c)
```

## Kit mapping

```text
cell                   → RoughBox
value                  → ChalkText
row/column labels      → ChalkText
active relation        → RoughLine / EvolvingPath
continuous trace       → PathTracer
value movement         → BezierFlight
counter                → CountUp
subgrid/region border  → RoughLine
```

## Composition

```text
          COL
         0   1   2   3
ROW  0  [ ][ ][ ][ ]
     1  [ ][ ][ ][ ]
     2  [ ][ ][ ][ ]
     3  [ ][ ][ ][ ]
```

Cells touch or nearly touch so the matrix reads as one structure.

No dark panel behind it.

## Adaptive sizing

Cell size derives from:
- rows,
- columns,
- available width,
- available height.

Small matrix → larger cells.
Large matrix → smaller cells.

## State overlays

```text
current     → pivot
query       → cyan
visited     → chalkDim
confirmed   → good
blocked     → warn + secondary cue
```

## Adjacency

Do not draw every grid edge.
Spatial adjacency is already encoded.
Show only active neighbor relation when useful.

## Specialized uses

### BFS/DFS
Grid stays fixed.
Queue/Stack is a separate supporting visual.

### Spiral Matrix
Add active perimeter + direction trace.

### Rotate Image
Cells stay fixed.
Values move to new coordinates.

### Set Matrix Zeroes
Mark row/column first; zero values only when algorithm phase causes it.

### Sudoku
Use stronger subgrid boundaries every third row/column.

### Islands
Use cell states; do not turn cells into graph nodes.

## False semantics

Never:
- reflow cells during traversal,
- move coordinates,
- draw all adjacency edges,
- use bar heights for ordinary cells,
- make each cell a floating UI card,
- put black panels behind the grid.

## Permanent rule

```text
CELL POSITIONS ARE FIXED.
ROW AND COLUMN DEFINE IDENTITY.
VALUES AND STATE MAY CHANGE.
```
