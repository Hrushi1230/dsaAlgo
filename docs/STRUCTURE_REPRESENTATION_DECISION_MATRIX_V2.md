# SUPERSEDED — NON-AUTHORITATIVE FOR VISUAL IMPLEMENTATION

Use:
`00_PHASE7_COMPLETE_KIT_DRIVEN_VISUAL_GRAMMAR.md`

and the relevant file under:
`docs/structures/`

The older generic A–N workflow must not control new visual implementation.

---

# Data Structure Representation Decision Matrix V2

## Primary routing table

| Teaching need | Primary representation | Level | Avoid |
|---|---|---:|---|
| Indexed sequence / swap | Fixed Array Track | R1 | Moving slots |
| Numeric magnitude comparison | Array Bars | R3 | Bars for categorical values |
| Numeric adjacency | Number Line Projection | R3 | Implying underlying sorted storage |
| Circular indexing | Circular Sequence | R3 | Circular layout for normal arrays |
| Set membership only | HashSetField | R1 | Bucket slots / scan |
| Hash collisions/probing | Hash Table Buckets | R2 | Abstract Set field |
| Key→value lookup | Map Pair Rows | R1 | Meaningful row order |
| Frequency counting | Frequency Map | R1/R3 | Physical hash slots |
| Grouping by key | Grouping Map | R1/R3 | Flat table when groups matter |
| Row/column problem | Matrix Grid | R1 | Wrapped array |
| Grid BFS/DFS | Grid + Frontier Overlay | R1 + overlay | Drawing all adjacency edges |
| Node-next pointer manipulation | Linked Nodes + Ports | R1/R2 | Generic cards |
| LIFO | Vertical Stack | R1 | Random interior access |
| FIFO | Queue Lane | R1 | Ambiguous front/rear |
| Double-ended access | Deque Lane | R1 | Ordinary queue arrows |
| Hierarchy / binary tree | Tree Node-Link | R1 | Graph-like arbitrary layout |
| BST ordering | BST Layout + bounds | R1 | Applying ordering to non-BST |
| Heap property | Complete Heap Tree | R1 | Sorted-tree implication |
| Heap implementation | Heap Array | R2 | Losing tree mapping |
| Heap representation teaching | Tree + Array synchronized | R1↔R2 | Always showing both |
| General network | Stable Graph | R1 | Fake root/hierarchy |
| Grid-as-graph problem | Grid primary | R1 | Converting to node-link unless needed |
| Disjoint sets | Union-Find Forest | R1/R2 | Generic graph |
| Parent/rank internals | Forest + parent/rank arrays | R2 | Hiding representative |
| Prefix search | Trie | R1 | Ordinary BST |
| Time/range overlap | Shared Interval Axis | R3 | `[l,r]` cards only |
| Recursion | Call Tree | R3 | Calling it a data-tree |
| Backtracking | Choice Tree + active path | R3 | Deleting history silently |
| 1-D DP | DP State Row | R3 | Generic array with no dependencies |
| 2-D DP | DP State Grid | R3 | Prefilled spreadsheet |
| Bitwise operation | Aligned Bit Rows | R3 | Floating bit chips |
| KMP | String rows + alignment + LPS | R3 | Reflowing text |
| Geometry | Coordinate plane / number line | R3 | Generic cards |

---

# Representation levels

```text
R1 CONCEPTUAL ADT
R2 IMPLEMENTATION
R3 ALGORITHM PROJECTION
```

Default to the simplest truthful level.

Do not show implementation detail merely to look technical.

---

# Overlay routing

| Technique | Base structure | Overlay |
|---|---|---|
| Two Pointers | Array/String | two pointer lanes |
| Sliding Window | Array/String | window band + left/right |
| Binary Search | Array / flattened matrix | low/mid/high + active range |
| Dutch National Flag | Array | low/current/high + partition bands |
| BFS | Graph/Grid/Tree | queue + frontier |
| DFS | Graph/Grid/Tree | current path + visited |
| Greedy | problem-specific | chosen / candidate / rejected |
| Sweep Line | Intervals/coordinates | sweep marker + active set/count |
| Dijkstra | Graph | tentative distances + PQ |
| Topological Sort | Graph | indegree + ready queue |
| Backtracking | Choice space | choose/unchoose + active path |
