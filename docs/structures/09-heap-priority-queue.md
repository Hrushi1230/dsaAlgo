# 09 — Heap / Priority Queue
## GRAMMAR STATUS: COMPLETE

## Core identity

```text
COMPLETE TREE SHAPE
+ PARENT/CHILD PRIORITY INVARIANT
```

A Heap is not globally sorted.

## Kit mapping

```text
tree node           → round chalk node
tree edge           → RoughLine / EvolvingPath
array slot          → RoughBox
tree-array mapping  → RoughLine / ChalkText
swap/move           → BezierFlight
current/index labels→ ChalkText
```

## Default composition

Use dual representation when useful:

```text
TREE VIEW                 ARRAY VIEW

      (2)                 [2][5][3][9][8]
     /   \
   (5)   (3)
  / \
(9) (8)
```

The array view is not mandatory in every scene, but is important when teaching implementation/index relations.

## Adaptive layout

Tree side:
same hierarchy rules as Tree.

Array side:
same stable slot rules as Array.

Use split-screen/open-board composition, not dark side panels.

## Operations

### INSERT + BUBBLE UP
New value enters last position.
Compare with parent.
Swap values while invariant requires it.

### EXTRACT ROOT
Root value exits.
Last value projects to root.
Heapify-down comparisons follow.

### HEAPIFY DOWN
Show chosen child comparison.
Only actual swap path should be bright.

## State colors

```text
current node/index → pivot
candidate child    → cyan
valid/invariant    → good
violating relation → warn
history            → chalkDim
```

## False semantics

Never:
- draw heap as sorted tree,
- suggest inorder traversal is sorted,
- detach array mapping from tree index semantics,
- move structural slots rather than values during heap swaps.

## Permanent rule

```text
HEAP PRESERVES A LOCAL PARENT-CHILD PRIORITY RULE,
NOT GLOBAL SORT ORDER.
```
