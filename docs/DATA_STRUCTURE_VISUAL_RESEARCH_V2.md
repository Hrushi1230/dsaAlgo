# SUPERSEDED — NON-AUTHORITATIVE FOR VISUAL IMPLEMENTATION

Use:
`00_PHASE7_COMPLETE_KIT_DRIVEN_VISUAL_GRAMMAR.md`

and the relevant file under:
`docs/structures/`

The older generic A–N workflow must not control new visual implementation.

---

# Foundation V2 — Phase 7 Research Basis
# Data Structure Visual Grammar V2

**Project:** Code With Animation — long-form DSA course  
**Phase:** 07  
**Purpose:** Define truthful, structure-specific visual languages before the shared-kit refactor and before Q11 Sort Colors.

This document separates:
1. evidence from the current Code With Animation roadmap/repository,
2. established external visualization conventions,
3. Phase 7 course-specific design decisions.

---

# A. Current project facts that constrain Phase 7

## A1. The roadmap is fixed at 227 problems / 19 patterns

The current roadmap includes:

```text
01 Arrays & Hashing
02 Two Pointers
03 Sliding Window
04 Stack
05 Binary Search
06 Linked List
07 Trees
08 Tries
09 Heap / Priority Queue
10 Intervals
11 Greedy
12 Backtracking
13 Graphs
14 Advanced Graphs
15 1-D Dynamic Programming
16 2-D Dynamic Programming
17 Bit Manipulation
18 Math & Geometry
19 String Algorithms
```

Phase 7 must cover the visual needs of this actual roadmap, not a generic CS syllabus.

The next problem remains:

```text
Q11 Sort Colors · LC75
Dutch National Flag / 3-way partition
```

But Phase 7 must NOT start implementing Sort Colors.

---

## A2. Phase 2 already created a first visual-style document

`docs/DATA_STRUCTURE_VISUAL_STYLE_V2.md` already exists from Phase 2.

It was an architectural first pass.

Phase 7 must:
- inspect it,
- preserve correct decisions,
- deepen semantics,
- resolve ambiguity,
- make it canonical enough for Phase 8 implementation.

Do NOT blindly create a conflicting second visual system.

---

## A3. Existing concrete components are array/hash-heavy

Current/legacy shared components include:
- `ArrayProblemOpener`
- `HashSetTable`
- `HashMapTable`
- `RoughLine`
- `RoughCurve`
- `RoughBox`
- `BezierFlight`
- exact SVG V2 primitives from Phase 6

Current `HashSetTable` and `HashMapTable` visually resemble implementation tables.

That is useful only when physical table/bucket structure is relevant.

It is potentially misleading for ordinary LeetCode use where the teaching concept is simply:
- membership,
- key → value,
- frequency,
- grouping.

Phase 7 must distinguish conceptual ADT views from implementation views.

---

# B. External visualization research

## B1. VisuAlgo uses structure-specific visual modes

VisuAlgo does NOT force one visual renderer on all structures.

Examples verified:
- Linked List / Stack / Queue / Deque share related but distinct operation semantics.
- Binary Heap can switch between complete-tree and compact-array representations.
- Bitmask uses aligned rows for bit indices, value bits, mask bits, and result.
- Recursion/DP is represented as recursion tree/DAG, with repeated subproblems visually distinguishable.
- Union-Find is represented as a forest; root represents the disjoint set, and parent-array representation also matters.
- Hash Tables distinguish separate chaining and open addressing.
- Graphs explicitly represent directed/undirected and weighted/unweighted edge semantics.

Phase 7 adopts the principle:
**visual geometry should expose the defining semantics of the structure.**

It does not copy VisuAlgo styling.

---

## B2. Heap benefits from synchronized representations

VisuAlgo explicitly supports both:
- complete binary tree view,
- compact array view,

because those are two real representations of the same heap structure.

Phase 7 adopts:
```text
heap tree
↔
heap array
```
as an approved REPRESENTATION_HANDOFF / synchronized dual view when pedagogically useful.

Do not show both views permanently if one is sufficient.

---

## B3. Hash ADT and hash-table implementation are different teaching levels

Hash-table visualization research/tools commonly show:
- bucket/index mapping,
- separate chaining,
- open addressing/probing.

Those details are correct when teaching hashing implementation.

But interview problems such as Two Sum, Contains Duplicate, Longest Consecutive generally rely on an abstract Set/Map operation.

Phase 7 therefore creates two distinct visual levels:

```text
Conceptual HashSet / HashMap
Physical Hash Table
```

Physical slots must not appear unless they matter.

---

## B4. Recursion tree and DP DAG are not ordinary tree data structures

VisuAlgo's recursion visualization distinguishes:
- call tree,
- repeated subproblems,
- DP DAG.

This supports a critical Phase 7 rule:

```text
Tree data structure node
!=
Recursive call-state node
!=
DP state
```

They may all be drawn with node-link geometry, but their visual grammar and labels must remain distinct.

---

## B5. Bit representation benefits from aligned rows

VisuAlgo bitmask view uses:
- indices,
- source bits,
- mask,
- result,

with bit index 0 on the right.

Phase 7 adopts this because it reflects the actual bit operation and prevents ambiguous left/right indexing.

---

## B6. Algorithm-visualization research favors learner engagement

Hundhausen, Douglas, and Stasko's meta-study of algorithm visualization studies found that **how learners engage with a visualization** mattered more than what the visualization merely displayed.

Course implication:
our visual grammar must support:
- prediction,
- trace,
- explanation,
- stable state inspection,

not just cinematic watching.

Therefore structures must remain readable when paused.

---

## B7. Graph readability research matters

Research on node-link graph aesthetics reports that path continuity and edge crossings strongly affect comprehension.

Course implication:
- precompute/freeze node positions,
- minimize avoidable edge crossings,
- keep important paths continuous,
- never relayout a graph merely because node state changed.

Motion shows state.
Layout expresses topology.

---

# C. Phase 7 architecture conclusion

A scalable course needs four layers:

```text
STRUCTURE KERNEL
    what exists and where

ALGORITHM OVERLAY
    pointers, window, frontier, bounds, active state

DERIVED STATE
    count, distance, frequency, dp value, answer

EXPLANATION LAYER
    labels, formula, invariant, why
```

Do not bake all four into one mega-component.

Example:

```text
ArrayTrack
+
PointerLane
+
PartitionBand
+
Counter
```

is better architecture than:

```text
SortColorsVisualizer
```

because the primitives transfer to future problems.

---

# D. The three representation levels

Every structure scene must declare one primary representation level.

## R1 — CONCEPTUAL ADT

Teach the operation/mental model.

Examples:
- Set membership
- Map key→value
- Stack top
- Queue front/rear
- Graph frontier

## R2 — IMPLEMENTATION

Teach storage representation.

Examples:
- hash buckets
- heap array indices
- linked node memory links
- adjacency list
- parent array for Union-Find

## R3 — ALGORITHM PROJECTION

A derived teaching representation.

Examples:
- array as number line for consecutive values
- bars for meaningful numeric magnitude
- interval timeline
- recursion tree
- DP dependency grid

Never mix R1/R2/R3 without an explicit representation handoff.
