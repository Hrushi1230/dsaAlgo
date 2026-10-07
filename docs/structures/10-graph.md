# 10 — Graph
## GRAMMAR STATUS: COMPLETE

## Core identity

```text
NODES + EDGES
NO DEFAULT ROOT
NO DEFAULT HIERARCHY
```

Connectivity is semantic.
Node position is layout.

## Kit mapping

```text
node              → round/compact chalk node
undirected edge   → RoughLine
directed edge     → EvolvingPath + arrow head
weighted edge     → edge + ChalkText label
active path       → PathTracer
node movement     → avoided during algorithm trace
frontier/visited  → semantic node states
```

## Composition

Use authored stable coordinates:

```text
   (A)────(B)
   / \      |
 (C)  \    (D)
  |    \
 (E)───(F)
```

Avoid tree-like vertical hierarchy unless graph itself is a tree/DAG layout for a specific reason.

## Adaptive layout

For larger graph:
- reduce node size slightly,
- preserve readable edge separation,
- minimize crossings,
- freeze coordinates once teaching begins.

Do not dynamically relayout because visited/current state changes.

## Operations / algorithm overlays

### BFS
Current node, frontier, visited.
Queue shown separately if needed.

### DFS
Active recursion path, visited.
Stack/call support shown separately if needed.

### SHORTEST PATH / RELAX
Edge weight and tentative distance states.
Only current relax edge gets strong emphasis.

### TOPOLOGICAL / DAG
Hierarchy may be used if DAG direction benefits from it, but label the representation intent.

## State colors

```text
current node      → pivot
frontier/query    → cyan
visited/confirmed → good or chalkDim depending lesson
rejected edge     → warn
history           → chalkDim
```

## False semantics

Never:
- make every graph a tree,
- move nodes during traversal,
- imply visual distance equals edge weight,
- imply screen left/right means graph order,
- draw every possible relationship beyond actual edges.

## Permanent rule

```text
GRAPH POSITION IS LAYOUT.
CONNECTIVITY IS MEANING.
```
