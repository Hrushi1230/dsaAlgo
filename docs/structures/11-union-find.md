# 11 — Union-Find / Disjoint Set
## GRAMMAR STATUS: COMPLETE

## Core identity

```text
FOREST OF ROOTED TREES
ROOT = REPRESENTATIVE
```

## Kit mapping

```text
element node       → round chalk node
parent edge        → RoughLine / EvolvingPath
representative ring→ rough circle / accent stroke
parent array       → RoughBox slots
rewire             → erase old edge + draw new edge
find trace         → PathTracer
```

## Composition

Conceptual forest:

```text
      (1)              (5)
     /   \              |
   (2)   (3)           (6)
          |
         (4)
```

Root/representative gets a subtle ring/crown marker.

Optional implementation row:

```text
index   1 2 3 4 5 6
parent  1 1 1 3 5 5
```

Use only when parent-array representation matters.

## Operations

### FIND
Trace element → parent → root.

### UNION
Compare representatives.
Attach one root to another according to chosen rule.

### PATH COMPRESSION
After root is known, rewire visited nodes directly to representative.

### UNION BY RANK/SIZE
Rank/size appears as small metadata only when algorithm uses it.

## State colors

```text
query element    → cyan
current path     → pivot
representative   → good
old parent edge  → warn/recede
history          → chalkDim
```

## False semantics

Never:
- union arbitrary interior nodes without representative logic,
- imply forest node x-position is meaningful,
- hide path compression rewiring,
- make representative merely a label unrelated to root identity.

## Permanent rule

```text
EACH TREE IS ONE SET.
THE ROOT IS ITS REPRESENTATIVE.
```
