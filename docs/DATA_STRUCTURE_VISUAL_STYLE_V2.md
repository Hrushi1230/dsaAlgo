# Code With Animation — Data Structure Visual Style V2
## Visual Grammar and Representations Across 13 Data Structure Families

**Project:** Code With Animation — Long-form DSA  
**Phase:** Foundation V2 — Phase 2  
**Status:** Canonical Visual Grammar Specification  

> **Implementation Note:** Phase 2 defines the authoritative visual grammar, geometries, and semantic rules for all 13 data structure families. Full low-level primitive component libraries are implemented progressively in their respective roadmap phases (e.g. Array V2 primitives in Phase 9, Tree kit in Tree phase). Do not build unused kits ahead of roadmap arrival.

---

# 1. Array Visual Family

Arrays are not restricted to one generic row of boxes. We define six first-class semantic representations:

### 1.1 Horizontal Array Track
* **Geometry:** `[2] [0] [2] [1] [1] [0]` in fixed-width slots (typically 120px × 130px, gap: 24px).
* **Usage:** Pointer movements, swaps, two-pointer traversals, prefix/suffix products, binary search.
* **Rules:** Cards must have predefined absolute slot coordinates so cards never jump horizontally when adjacent cards appear.

### 1.2 Vertical / Top-to-Bottom Track
* **Geometry:** Vertical stack of indexed rows `0: [2]`, `1: [0]`, `2: [2]`, `3: [1]`.
* **Usage:** When side-by-side explanation or code editor sits beside the array, when horizontal space is limited, or when the array conceptually behaves like an index-accessible stack.
* **Rules:** Index on left (`fonts.mono`), card in center, annotation/label on right.

### 1.3 Partitioned Array Track
* **Geometry:** Continuous array with regional background bands underneath:
  ```text
  | CONFIRMED 0 | CONFIRMED 1 | UNKNOWN | CONFIRMED 2 |
  ```
* **Usage:** Dutch National Flag algorithm (Sort Colors), 3-way partitioning, QuickSort partitions.
* **Rules:** Partition boundary bands appear ONLY after the algorithm has derived them in narration.

### 1.4 Array Bars
* **Geometry:** Vertical bars whose height or color indicates partition/group.
* **Usage:** Categorical clustering, histogram visual reasoning (Trapping Rain Water, Largest Rectangle).
* **Rules:** Do not imply numeric magnitude if values are purely categorical colors (e.g. 0, 1, 2 in Sort Colors).

### 1.5 Number Line
* **Geometry:** Continuous horizontal axis with tick marks and highlighted active elements.
* **Usage:** Numeric adjacency and distance reasoning (e.g. Longest Consecutive Sequence).
* **Rules:** Use only when consecutive numeric proximity is the core algorithmic concept. Never use merely because elements are integers.

### 1.6 Circular Array / Ring
* **Geometry:** Radial arrangement of slots connected in a loop.
* **Usage:** Genuinely circular buffers, circular queues, rotate array problems.
* **Rules:** Forbidden for standard linear traversals.

---

# 2. Hash Visual Family (Set & Map)

“Hash” does not mean “always draw a table”.

### 2.1 HashSet Field
* **Geometry:** Unordered field of floating elements with subtle glowing outlines.
* **Usage:** O(1) membership testing, existence queries, duplicate removal, predecessor checks (Longest Consecutive Sequence).
* **Actions:** Lookup pulse (`theme.cyan`), hit confirmation (`theme.good`), miss reaction (`theme.warn`).

### 2.2 HashSet Table
* **Geometry:** Explicit indexed bucket rows (`kit/components/HashSetTable.tsx`).
* **Usage:** When bucket indices or hash collision mechanics are pedagogically intentional.

### 2.3 HashMap Table
* **Geometry:** Key → Value two-column chalkboard table (`kit/components/HashMapTable.tsx`).
* **Usage:** Complement lookup (Two Sum), index caching, prefix sum frequency.

### 2.4 Frequency Map
* **Geometry:** Key chip with animated count accumulator.
* **Usage:** Character counting (Anagrams), element frequency (Top K Frequent). Emphasizes count increment rather than index lookup.

### 2.5 Grouping Map
* **Geometry:** Signature key pill with expanding container holding grouped elements.
* **Usage:** Group Anagrams (e.g. `"1a1b1t" → ["bat"]`, `"1a1e1t" → ["eat", "tea", "ate"]`).

---

# 3. Matrix Visual Family

* **Representations:** `MatrixGrid`, `SudokuGrid`, `LayeredMatrix`, `TransposeMatrix`, `BoundaryMatrix`.
* **Geometry:** Stable 2D grid with coordinate labels (Row `r`, Col `c`).
* **Usage:** 2D arrays, Set Matrix Zeroes, Rotate Image, Spiral Matrix, Valid Sudoku (3×3 sub-box chalk borders).
* **Rules:** Traversal must highlight current cell, active row band, and active column band cleanly without shifting the grid.

---

# 4. Linked List Visual Family

* **Representations:** `LinkedNode`, `NextEdge`, `NullNode`, `ListPointer`.
* **Geometry:** Rectangular or oval node with body value, split pointer chamber, and directional chalk arrow.
* **Actions:** Detaching edge, attaching edge, temporary pointer save, `null` terminator.
* **CRITICAL RULE:** Linked list elements NEVER swap slots like arrays. Transitions must show explicit pointer redirection.

---

# 5. Stack Visual Family

* **Geometry:** Vertical container open at the top:
  ```text
  [ TOP ]
  | [ 3 ] |
  | [ 2 ] |
  | [ 1 ] |
  +-------+
  ```
* **Actions:** Push drops from above, pop rises and fades out, monotonic discard shows crossed-out elements cleanly removing.

---

# 6. Queue / Deque Visual Family

* **Geometry:** Horizontal directional channel:
  ```text
  FRONT → [ A ] [ B ] [ C ] ← REAR
  ```
* **Actions:** Enqueue from rear, dequeue from front. For Deque, both ends highlight with directional entry/exit paths.

---

# 7. Tree Visual Family

* **Geometry:** Rooted hierarchical node-edge topology (levels 0, 1, 2...).
* **Actions:** Traversal pulse along branches, active node highlight, subtree focus dimming other nodes, BFS level scan bands.
* **Rules:** Stable node coordinates. Tree nodes never jitter when subtrees expand.

---

# 8. Heap Visual Family

* **Geometry:** Dual view when pedagogically necessary:
  ```text
  Complete Binary Tree (Visual Logic)
  ↕
  Flattened Array (Physical Storage: 2i + 1, 2i + 2)
  ```
* **Actions:** Sift-up and sift-down simultaneously show tree node swap and array slot swap.

---

# 9. Graph Visual Family

* **Geometry:** Force-directed or fixed chalk node-edge network on Center Stage.
* **Actions:** Source node pulse, edge exploration ray, frontier expansion, visited state color transition (`theme.good`).
* **Rules:** Graph topology owns the entire center stage. Supporting queues/stacks sit in an auxiliary side column.

---

# 10. Trie Visual Family

* **Geometry:** Rooted character-branching tree.
* **Actions:** Root node, character labeled edges, active prefix path highlight, terminal end-of-word marker (`*` or filled dot).

---

# 11. Interval Visual Family

* **Geometry:** Horizontal axis with rounded horizontal range bars `[start, end]`.
* **Actions:** Overlap detection, gap confirmation, range merging into a unified bar.

---

# 12. Dynamic Programming (DP) Visual Family

* **Progression:** Never start with a finished table!
  1. Recurrence decision question
  2. Dependency tree / overlapping subproblem DAG
  3. Memo array (1D rail) or 2D grid
* **Actions:** Arrows from dependent cells pointing to the cell currently being computed.

---

# 13. Bit Manipulation Visual Family

* **Geometry:** Fixed-width 8-bit, 16-bit, or 32-bit register lanes.
* **Actions:** Bitwise mask overlay, shift animations (left `<<`, right `>>`), XOR difference highlight, carry propagation.
