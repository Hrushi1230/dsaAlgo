# SUPERSEDED — NON-AUTHORITATIVE FOR VISUAL IMPLEMENTATION

Use:
`00_PHASE7_COMPLETE_KIT_DRIVEN_VISUAL_GRAMMAR.md`

and the relevant file under:
`docs/structures/`

The older generic A–N workflow must not control new visual implementation.

---

# Roadmap → Visual Grammar Coverage V2
## 227-problem production map

This matrix is based on the current 19-pattern roadmap.

| Pattern | Primary structure grammar | Common secondary grammar / overlay |
|---|---|---|
| 01 Arrays & Hashing | Array, HashSet, HashMap, Matrix | partition bands, frequency/grouping, string sequence |
| 02 Two Pointers | Array / String | opposite/same-direction pointer lanes |
| 03 Sliding Window | Array / String | window band, HashMap/HashSet, Deque |
| 04 Stack | Stack | monotonic invariant, Array/String source |
| 05 Binary Search | Array / Matrix | low-mid-high, active range, predicate result |
| 06 Linked List | Linked List | fast/slow, dummy pointer, HashMap for clone/cache |
| 07 Trees | Tree / BST | recursion path, Queue for BFS |
| 08 Tries | Trie | Grid for Word Search II, DFS branch overlay |
| 09 Heap / Priority Queue | Heap tree / Heap array / PQ ADT | synchronized dual representation, Queue |
| 10 Intervals | Interval Axis | sorting order, Sweep Line, Heap |
| 11 Greedy | problem-specific underlying structure | chosen/candidate/rejected overlay |
| 12 Backtracking | Choice Tree / Recursion | Grid, String, path state |
| 13 Graphs | Graph / Grid / Union-Find | Queue, Stack, components, topology |
| 14 Advanced Graphs | Graph | Heap/PQ, Union-Find, distance/relaxation |
| 15 1-D DP | DP Row / Recursion DAG | Array/String source, dependency arrows |
| 16 2-D DP | DP Grid | Grid, two-string axes, recursion/memo handoff |
| 17 Bit Manipulation | Bit Rows | Array source, masks, carries |
| 18 Math & Geometry | truthful projection per problem | number line, coordinate plane, digit row, Map |
| 19 String Algorithms | String Sequence | KMP alignment/LPS, hash window, frequency |

---

# High-ROI build order after Phase 7

Based on roadmap distribution and near-term use:

```text
1. Array / Sequence
2. HashSet / HashMap
3. Matrix / Grid
4. Stack / Queue / Deque
5. Linked List
6. Tree / BST
7. Heap
8. Graph / Union-Find
9. Trie
10. Intervals
11. DP / Recursion
12. Bits / advanced string projections
```

This is a planning priority, not permission to build everything in Phase 7.

Phase 8 owns shared-kit refactor.
Phase 9 owns native Array V2 primitives.
