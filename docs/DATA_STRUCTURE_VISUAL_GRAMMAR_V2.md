# SUPERSEDED — NON-AUTHORITATIVE FOR VISUAL IMPLEMENTATION

Use:
`00_PHASE7_COMPLETE_KIT_DRIVEN_VISUAL_GRAMMAR.md`

and the relevant file under:
`docs/structures/`

The older generic A–N workflow must not control new visual implementation.

---

# Code With Animation — Data Structure Visual Grammar V2
## Foundation V2 · Phase 7

**Scope:** visual identity, geometry, access semantics, operation affordances, and algorithm overlays for the full 227-problem roadmap.

**Master law:**

```text
GEOMETRY tells the learner WHAT the structure is.
COLOR tells the learner WHAT STATE it is in.
MOTION tells the learner WHAT CHANGED.
LABELS tell the learner WHY it matters.
```

If color, motion, or decoration must explain what kind of data structure is on screen, the geometry is too generic.

---

# 1. Global architecture

Every scene should decompose into:

```text
STRUCTURE KERNEL
ALGORITHM OVERLAY
DERIVED STATE
EXPLANATION LAYER
```

Example:

```text
ARRAY KERNEL:
fixed slots + values + indices

OVERLAY:
low / mid / high pointers

DERIVED:
comparison result

EXPLANATION:
"left half cannot contain target"
```

Do not create a special-purpose monolith for every problem.

---

# 2. Global state vocabulary

These states remain consistent across structure families:

```text
NEUTRAL
FOCUS / CURRENT
QUERY
GOOD / CONFIRMED
WARN / REJECTED
VISITED / HISTORY
GHOST / FUTURE
DISABLED
```

State styling uses:
- color,
- outline,
- glyph/label,
- opacity,

not color alone.

Semantic course colors remain owned by the Design Bible/theme.

---

# 3. Layout stability rule

The learner must be able to build spatial memory.

Therefore:
- precompute positions from the complete relevant structure,
- keep entity coordinates stable through state changes,
- reveal/hide without flex reflow,
- do not re-center a graph/tree after each insert unless the lesson is specifically about structural relayout.

A value can move.
Its entire visual universe should not drift around it.

---

# 4. Structure identity vs algorithm technique

These are DATA STRUCTURES / REPRESENTATIONS:

```text
Array / Sequence
Set
Map
Matrix / Grid
Linked List
Stack
Queue / Deque
Tree / BST
Heap
Graph
Union-Find
Trie
Interval Timeline
DP State Space
Recursion / Choice Tree
Bit Row
```

These are primarily TECHNIQUES / OVERLAYS:

```text
Two Pointers
Sliding Window
Binary Search
Greedy
BFS
DFS
Topological Sort
Sweep Line
Dutch National Flag
Kadane
```

Do not invent a generic “Greedy data structure”.

Apply technique overlays onto the correct structure kernel.

---

# 5. ARRAY / SEQUENCE GRAMMAR

## 5.1 Semantic identities

Separate:

```text
SLOT
VALUE
INDEX
POINTER
RANGE
```

A slot is not a value.

Index belongs to the slot, not to the value.

During a swap:
```text
slots stay
values move
indices stay
```

This rule is permanent.

---

## 5.2 Default geometry

Default:
```text
horizontal fixed-slot track
```

Visual signature:
- square / near-square chalk cells,
- explicit stable indices below,
- values centered inside,
- pointer lanes outside cells,
- range bands behind slots.

Do not use floating SaaS cards.

---

## 5.3 Approved array representations

### A. Horizontal Track
Use for:
- traversal
- swaps
- binary search
- two pointers
- prefix/suffix
- most sorting

### B. Vertical Track
Use for:
- side-by-side comparisons,
- code + data layouts,
- vertical pointer lanes,
- constrained width.

### C. Partitioned Array
Use for:
- Dutch National Flag,
- quicksort partitions,
- valid/invalid regions,
- known/unknown regions.

Region bands belong behind slots.

### D. Bars
Use only when numeric MAGNITUDE matters:
- sorting magnitude comparisons,
- histogram,
- water/container geometry.

Do NOT use bars for categorical values like Sort Colors just because it is a sorting problem.

### E. Number Line
Use when numeric adjacency/distance is the concept:
- consecutive runs,
- range reasoning,
- coordinate proximity.

Do not imply the underlying set/array is sorted if this is only a conceptual projection.

### F. Circular Sequence
Use only for genuinely circular problems:
- circular array,
- House Robber II conceptual cycle,
- ring buffer.

Do not make ordinary arrays circular for novelty.

---

## 5.4 String sequence subtype

A string is normally:
```text
sequence slots
+
character/grapheme values
```

String-specific additions:
- pattern row beneath text,
- prefix-function/LPS row,
- matched-prefix band,
- skip/fallback relation.

Do not split Unicode text by visual code units unless the actual problem assumes ASCII/lowercase chars.

---

# 6. HASH SET GRAMMAR

## 6.1 Default LeetCode representation

For ordinary membership problems use:

```text
HashSetField
```

not a physical bucket table.

Visual signature:
- loose/open hand-drawn set boundary,
- unique value chips,
- no stable left→right ordering implication,
- no slot numbers,
- direct query portal/beam,
- explicit HIT / MISS.

Set item geometry should differ from array slots:
compact round/pebble-like chalk members are preferred.

---

## 6.2 Core semantics

```text
membership
uniqueness
insert-if-absent
already-present
remove
```

A duplicate insertion:
```text
does NOT create second stored identity
does NOT merge/fuse into stored member
```

Use Phase 5 CLONE/PROJECT + reject.

---

## 6.3 Physical hash table representation

Use buckets/slots only when teaching:
- hash function,
- collision,
- chaining,
- probing,
- load factor,
- table implementation.

Then slot index becomes semantically real.

The current legacy `HashSetTable` is therefore:
```text
IMPLEMENTATION VIEW / LEGACY SPECIAL CASE
```
not the default conceptual Set grammar.

---

# 7. HASH MAP / FREQUENCY / GROUPING GRAMMAR

HashMap needs multiple conceptual representations.

## A. Key → Value Map

Use for:
- Two Sum complement→index,
- cache lookup,
- old node→clone node.

Visual:
```text
KEY    →    VALUE
```

Keys and values must be visually distinct.

Rows do NOT imply iteration order unless the algorithm depends on order.

---

## B. Frequency Map

Use for:
- Top K Frequent,
- anagram counts,
- sliding-window counts.

Visual signature:
```text
key chip
count value / tally
```

Count updates after the causal occurrence.

Do not use hash buckets.

---

## C. Grouping Map

Use for:
- Group Anagrams,
- category→list.

Visual:
```text
group key
↓
member lane
```

Members belonging to a key should visibly collect under that key.

---

## D. Physical Hash Table

Only when actual bucket/collision mechanics matter.

The legacy `HashMapTable` is not the universal map visual.

---

# 8. MATRIX / GRID GRAMMAR

## 8.1 Identity

```text
CELL = (row, column)
```

Row/column coordinates remain stable.

No insertion/reflow.

---

## 8.2 Geometry

Use a true 2-D grid:
- shared borders or tightly packed cells,
- optional row/column labels,
- fixed cell centers.

Do not represent a matrix as a wrapped 1-D card list when row/column relations matter.

---

## 8.3 Approved overlays

```text
current cell
row marker
column marker
submatrix / layer boundary
visited
frontier
path
source
destination
```

Grid adjacency is normally IMPLICIT.

Do not draw four graph edges around every cell unless edge topology itself is being taught.

---

## 8.4 Matrix transformation rules

Transpose / rotate:
- cells preserve identity,
- cell values MOVE to mapped coordinates,
- grid scaffold remains stable or explicitly handoffs.

Spiral:
- active layer boundary shrinks,
- current traversal path highlights,
- unvisited region remains neutral.

Set Matrix Zeroes:
- row/column marker semantics must be visible,
- do not instantly zero full rows before marker cause is established.

---

# 9. LINKED LIST GRAMMAR

## 9.1 Node visual signature

A linked-list node is NOT a generic card.

Use a two-part node:

```text
┌──────────┬──────┐
│  VALUE   │ NEXT │──→
└──────────┴──────┘
```

For doubly linked lists:

```text
← PREV │ VALUE │ NEXT →
```

Ports are real semantic anchors.

---

## 9.2 Separate identities

```text
NODE
VALUE
NEXT EDGE
EXTERNAL POINTER
```

`curr`, `prev`, `fast`, `slow`, `dummy` are overlays/pointers, not part of node geometry.

---

## 9.3 Rewiring law

For insertion/deletion/reversal:
- old edges erase,
- pointer/node move if needed,
- new edges draw.

Do not morph one old relation into different endpoints.

Phase 5/6 rules govern relation identity.

---

## 9.4 Stable layout

Reserve node positions for the relevant segment.

Do not auto-flex the row when a node is temporarily removed.

For cycle problems:
use a stable cycle layout from the beginning of the cycle-focused scene.

---

# 10. STACK GRAMMAR

## 10.1 Visual signature

```text
vertical open-top container
horizontal slabs/items
TOP label / gate
```

The geometry itself must say LIFO.

---

## 10.2 Access law

Only the top is directly accessible.

Operations:

```text
PUSH → enters at TOP
POP  → leaves from TOP
PEEK → focuses TOP
```

Do not animate an interior item leaving directly.

---

## 10.3 Monotonic stack

Show stored:
```text
index
value
```
when index is algorithmically required.

Monotonic relation can be annotated beside stack:
```text
decreasing ↓
```
but should not become decorative graphing.

---

# 11. QUEUE / DEQUE GRAMMAR

## 11.1 Queue signature

```text
horizontal lane
FRONT gate on one side
REAR gate on the other
```

Default flow:
```text
REAR → ... → FRONT exit
```

or the opposite, but the course must choose one convention and keep it consistent.

Recommended:
```text
FRONT = left
REAR = right
enqueue at right
dequeue at left
```

---

## 11.2 Deque

Both ends are explicit:
```text
FRONT ↔ [ items ] ↔ BACK
```

Operation arrows must name the end:
- push_front
- push_back
- pop_front
- pop_back.

---

## 11.3 BFS queue

Queue contents are the frontier order.

Do not turn queue order into a graph layout.

Graph/grid nodes remain in their own stable positions.

---

# 12. TREE / BST GRAMMAR

## 12.1 Tree identity

A tree is:
```text
hierarchical node-link structure
```

Visual:
- root at top,
- depth grows downward,
- parent-child edges,
- stable level spacing.

---

## 12.2 Node geometry

Preferred:
- circular or compact rounded chalk node,
- distinct from array slot and linked-list node,
- explicit child ports/edge anchors where implementation permits.

---

## 12.3 Stable coordinate law

For traces:
precompute the tree layout.

Node state changes must not trigger full relayout.

If insert/delete structurally changes layout:
use an explicit structural transition, not incidental browser flex behavior.

---

## 12.4 BST semantics

Only in BST-specific scenes may spatial left/right imply:
```text
left subtree < node < right subtree
```

Do not imply BST ordering in an arbitrary binary tree.

---

## 12.5 Traversal overlays

DFS:
```text
current path
visited/history
return path
```

BFS:
```text
level band
queue
current frontier
```

Do not color entire future solution paths early.

---

# 13. HEAP / PRIORITY QUEUE GRAMMAR

Heap has two truthful representations.

## A. Complete Tree

Shows:
- parent-child priority relation,
- bubble-up/down,
- root priority.

## B. Compact Array

Shows:
- index arithmetic,
- physical implementation,
- swaps.

Approved dual view:
```text
tree node i ↔ array slot i
```

Use only when correspondence teaches something.

---

## 13.1 Heap property

For min-heap:
parent ≤ children.

For max-heap:
parent ≥ children.

Color should show violations/active comparison, not merely depth.

---

## 13.2 Priority Queue ADT

If the lesson only needs “extract minimum repeatedly,” a compact priority container may be enough.

Do not always expose heap internals when the algorithm treats PriorityQueue as an ADT.

---

# 14. GRAPH GRAMMAR

## 14.1 No fake hierarchy

A general graph is a network.

Do not arrange it like a tree unless:
- it really is a tree,
- the algorithm creates a BFS/DFS tree and that tree is explicitly shown as a derived overlay.

---

## 14.2 Stable positions

Node coordinates are frozen for the trace.

State updates:
- frontier,
- visited,
- current,
- distance,
- parent,
- component,

must not cause layout movement.

---

## 14.3 Readability

Prefer:
- low edge crossings,
- clear path continuity,
- stable weight labels,
- consistent arrow direction.

If an important path has unavoidable crossings:
use highlight hierarchy rather than relayout mid-trace.

---

## 14.4 Edge semantics

Distinguish:
```text
undirected
directed
weighted
selected/MST
rejected
relaxed
```

Direction/weight should be visible without relying solely on color.

---

## 14.5 Algorithm overlays

BFS:
```text
queue + frontier rings
```

DFS:
```text
active recursion/path
```

Dijkstra:
```text
distance label
priority queue
settled vs tentative
```

Topological:
```text
in-degree / ready queue
```

Do not bake these into the base GraphNode component.

---

# 15. UNION-FIND GRAMMAR

Union-Find is related to graph problems but has its own structure.

Default:
```text
forest of rooted trees
```

Each root = representative.

Optional synchronized implementation view:
```text
parent[] array
rank[] / size[]
```

---

## 15.1 Find

Highlight:
```text
node → parent → ... → root
```

## 15.2 Path compression

This is genuine structural rewiring:
old parent edges erase,
new direct parent edges draw.

Do not merely recolor the same forest.

## 15.3 Union

Only representatives connect.

Show rank/size comparison before the root link changes.

---

# 16. TRIE GRAMMAR

Trie is a prefix tree, not a generic binary tree.

Preferred visual signature:
- compact root,
- edges labeled by characters,
- nodes represent prefix states,
- terminal/end-of-word marker is explicit.

A terminal marker must be visually distinct from “node exists”.

---

## 16.1 Search

Highlight the character path in order.

Prefix found:
path exists.

Word found:
path exists + terminal marker.

These are different outcomes.

---

## 16.2 Wildcard

For `.`, branch expansion is a real search branch.

Do not animate it as one deterministic character edge.

---

## 16.3 Bitwise Trie

Use binary edge labels:
```text
0
1
```
and make the opposite-bit choice explicit for XOR maximization.

---

# 17. INTERVAL GRAMMAR

Intervals are best represented spatially.

Default:
```text
shared horizontal number/time axis
interval bars/segments on separate lanes
```

Endpoint labels are explicit.

---

## 17.1 Overlap

Overlap is visible geometrically.

Do not rely only on:
```text
[1,3], [2,6]
```
cards if spatial overlap is the concept.

---

## 17.2 Merge

Two source intervals stay readable until merged result is established.

Then Phase 5 T6 MERGE applies.

---

## 17.3 Sweep-line

Events appear on shared axis.

Current sweep position is a vertical marker.

Active count/state is derived, not an interval itself.

---

# 18. RECURSION / BACKTRACKING GRAMMAR

This is a CALL/CHOICE state space, not a stored tree.

Node represents:
```text
function call / decision state
```

not a data-tree node.

---

## 18.1 Recursion tree

Show:
- call arguments/state,
- active call path,
- base case,
- return value,
- completed calls.

Optional side rail:
```text
call stack
```

when stack behavior matters.

---

## 18.2 Backtracking

Canonical visual cycle:

```text
CHOOSE
→ DESCEND
→ RESULT / INVALID
→ UN-CHOOSE
→ RETURN
```

Backtracking does not delete history from reality.

History can dim/retract while current path remains clear.

---

# 19. DP GRAMMAR

DP visual grammar is about STATE + DEPENDENCY.

Not “show a spreadsheet”.

---

## 19.1 1-D DP

Use:
```text
indexed state row
```

Each cell should be able to show:
- state index,
- value,
- computed/uncomputed,
- current dependencies.

---

## 19.2 2-D DP

Use:
```text
state grid
```

Rows/columns must be semantically named:
- string prefixes,
- grid coordinates,
- capacities,
- indices.

---

## 19.3 Dependency rule

For current state:
- highlight only dependencies relevant now,
- draw provenance arrows,
- compute,
- settle current state,
- then dim old dependency emphasis.

Do not show every dependency arrow across the entire table simultaneously.

---

## 19.4 Recursion → memo → tabulation

These are explicit representation handoffs.

Repeated recursion states:
```text
many occurrences
→ one memo/DP state
```

Phase 5 MERGE/REPRESENTATION rules apply.

---

# 20. BIT GRAMMAR

Default conceptual layout:

```text
INDEX:  ... 3 2 1 0
VALUE:  ... 1 0 1 1
MASK :  ... 0 1 0 0
RESULT: ... 1 1 1 1
```

Index 0 is rightmost.

---

## 20.1 Bit operation

Align source/mask/result vertically by bit position.

Current bit column gets focus.

Do not make bits float independently.

---

## 20.2 Shifts

Show bit-row translation AND clarify introduced zero/sign behavior as required by the language/problem.

Do not imply arithmetic meaning without explaining signedness where relevant.

---

## 20.3 XOR cancellation

When teaching:
```text
a XOR a = 0
```
use aligned bitwise rows or repeated-value pairing.

Do not rely on magical disappearance.

---

# 21. STRING-ALGORITHM GRAMMAR

String remains a sequence, but advanced algorithms need overlays.

## KMP
Use:
```text
text row
pattern row
alignment offset
LPS/prefix row
matched prefix band
fallback pointer
```

Do not redraw the string for every fallback.

## Rabin-Karp
Use:
```text
window band
hash value
pattern hash
```
and verify equality before declaring match if collision discussion matters.

---

# 22. MATH / GEOMETRY VISUALS

There is no single “Math data structure”.

Choose the truthful representation:
- number line,
- digit row,
- coordinate plane,
- cycle/state graph,
- sieve grid,
- map of points.

Do not invent a reusable generic math card as a substitute for geometry.

---

# 23. Representation selection rule

Before implementation answer:

```text
STRUCTURE:
PRIMARY REPRESENTATION:
REPRESENTATION LEVEL: R1 / R2 / R3
WHY THIS REPRESENTATION:
WHAT IT MUST NOT IMPLY:
ALGORITHM OVERLAYS:
DERIVED STATE:
```

Example:

```text
STRUCTURE: HashSet
PRIMARY: HashSetField
LEVEL: R1 conceptual ADT
WHY: lesson needs membership only
MUST NOT IMPLY: bucket order / linear scan / sorted order
OVERLAY: query beam + HIT/MISS
DERIVED: set size
```

---

# 24. Spatial-semantic anti-patterns

Never:

- move array slots during a swap
- imply HashSet order
- display bucket slots for every Set problem
- display map row order as meaningful without reason
- pop a non-top stack element
- dequeue from rear in ordinary Queue grammar
- move graph nodes because they became visited
- imply BST ordering on arbitrary binary tree
- treat recursion call tree as stored tree data
- morph interval sources into one before merge cause
- prefill DP tables
- show bit index 0 on inconsistent sides
- use bar height when numeric magnitude is irrelevant
- draw every grid adjacency edge
- use the same rounded card shape for every structure
- use color as the only difference between structure types

---

# 25. Pause-frame test

A paused frame must answer:

```text
What structure is this?
What entities exist?
Which entity is current?
What relations exist?
What has already been processed?
What can happen next?
```

If the learner needs motion to understand the static frame, the grammar is too weak.

---

# 26. Accessibility/readability

- Never rely on red/green alone.
- Use state labels, outline style, glyphs, and opacity.
- Values and indices must remain legible at final 2560×1440 render scale and authored 1920×1080 coordinate space.
- Graph edge labels must not collide with nodes.
- Small metadata must not become the only carrier of algorithm state.

---

# 27. Visual Grammar Contract for scene plans

Every scene using a non-trivial structure must declare:

```text
STRUCTURE ID:
STRUCTURE FAMILY:
REPRESENTATION:
REPRESENTATION LEVEL:
ENTITY TYPES:
RELATION TYPES:
STABLE GEOMETRY:
ALGORITHM OVERLAYS:
DERIVED STATE:
ACCESS RULES:
FALSE SEMANTICS TO AVOID:
REUSE / EXTEND / CREATE:
```

Example:

```text
STRUCTURE ID: sort-colors-main
FAMILY: Array
REPRESENTATION: Partitioned horizontal track
LEVEL: R1 + R3
ENTITIES: slots, values, indices
RELATIONS: value occupies slot
STABLE GEOMETRY: 6 fixed slots
OVERLAYS: low/current/high pointers, 3 partition bands
DERIVED: partition invariant labels
ACCESS: random access
FALSE SEMANTICS: bars/magnitude; moving slots
```
