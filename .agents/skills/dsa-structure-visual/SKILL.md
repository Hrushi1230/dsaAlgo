---
name: dsa-structure-visual
description: Selects truthful data-structure representations and overlays for Code With Animation scenes. Use after algorithm/trace verification and before scene layout implementation whenever arrays, sets/maps, grids, lists, stacks, queues, trees, heaps, graphs, tries, intervals, DP, recursion, or bits are visualized.
---

# DSA Structure Visual Grammar V2

## Read first

1. verified trace
2. `docs/00_PHASE7_COMPLETE_KIT_DRIVEN_VISUAL_GRAMMAR.md`
3. `docs/PHASE7_COMPLETION_TRACKER.md`
4. `docs/KIT_REUSE_MATRIX.md`
5. relevant `docs/structures/<structure>.md`
6. Motion Bible V2
7. Morphing Bible V2
8. SVG Animation Bible V2
9. legacy Phase 7 documents only for historical context
10. current local kit audit

---

# Kit-driven construction pipeline

```text
DATA-STRUCTURE SEMANTICS
↓
EXISTING @dsa/kit PRIMITIVES
↓
EXACT COMPOSITION RULES
↓
STRUCTURE-SPECIFIC GEOMETRY
```

The kit is our visual language. We specify how to construct each structure from `@dsa/kit`, not from generic reference images.

---

# Chalkboard background rule

```text
NOT black
NOT charcoal
NOT dark UI cards

YES:
COURSE GREEN CHALKBOARD
theme.boardBg ≈ #18523d
```

- Full frame dark green chalkboard.
- Open composition: chalk primitives drawn directly on the board.
- Subtle rough outlines; very limited translucent/hachure regions.
- No big black/dark panels or containers behind structures.
- No cards-inside-cards or SaaS dashboard styling.

---

# The 10-question structure contract

Every structure document must answer:

```text
1. What semantic objects exist?
2. Which @dsa/kit primitive creates each object?
3. How are they arranged?
4. Which parts stay fixed?
5. Which parts can move?
6. What does color mean?
7. What false meaning must never appear?
8. Which overlays are allowed?
9. How does it scale with data size?
10. Which operations change which visual objects?
```

---

# Critical correctness rules

## Array
slots and indices stay fixed; values move.

## HashSet
do not imply ordering or buckets unless physical hashing is taught.

## HashMap
key/value relation is primary; row order is normally not semantic.

## Matrix / Grid
- Cell positions and coordinate identity are fixed. Values and state may change.
- One continuous 2D coordinate system: cells touch or near-touch (not floating cards).
- Drawn directly on green chalkboard (`theme.boardBg`) without dark container panels.
- Row/col rulers outside the grid via `ChalkText`.
- Grid adjacency is implicit in geometry; never draw all neighbor edges.
- Transient relation lines (`RoughLine` / `EvolvingPath`) drawn only when checking a neighbor.
- BFS/DFS queue or stack visual is a separate side component outside the grid.
- Rotate Image moves values via `BezierFlight`; never spin the entire grid image.

## Linked List
nodes and edges are separate identities; rewiring is explicit.

## Stack
only TOP is directly accessible.

## Queue
FRONT/REAR must be explicit and consistent.

## Tree
hierarchy is structural; no relayout on state change.

## Heap
tree and array are two representations of same structure.

## Graph
freeze layout; avoid false hierarchy.

## Trie
terminal word state is distinct from prefix existence.

## Intervals
use a shared axis when overlap/range is the concept.

## DP
show state dependencies, not a decorative table.

## Recursion
call nodes are execution states, not stored tree nodes.

## Bits
index 0 is rightmost in the standard course bit-row grammar.

---

# Review question

At a paused frame, can the learner identify the structure without title text?

If no, visual grammar is too generic.
