# 14 — Recursion / Backtracking
## GRAMMAR STATUS: COMPLETE

## Core identity

```text
NODE = COMPUTATION / DECISION STATE
NOT STORED DATA
```

Recursion tree is not a Tree data structure.

## Kit mapping

```text
call state node      → compact RoughBox / chalk label
decision edge        → RoughLine / EvolvingPath
active call path     → PathTracer
call stack rail      → RoughBox stack items when useful
choose/unchoose mark → ChalkText / semantic stroke
return value         → ChalkText / CountUp where numeric
```

## Composition

```text
f(4)
├── f(3)
│   ├── f(2)
│   └── ...
└── f(2)
```

Use compact call-state boxes so it remains visually distinct from round Tree DS nodes.

## Adaptive layout

Depth follows recursion depth.
Branching follows decision count.
Keep active path dominant.
Ghost unexplored branches if needed.
Completed branches recede.

## Operations

### CALL
Create/activate child computation state.

### BASE CASE
Mark terminal computation state.

### RETURN
Value/state travels back to parent.

### CHOOSE
Add decision to current partial solution.

### UN-CHOOSE / BACKTRACK
Undo the exact prior decision.
Do not delete unrelated history.

## State colors

```text
active call   → pivot
candidate     → cyan
successful    → good
dead end      → warn
completed     → chalkDim
```

## False semantics

Never:
- present recursion tree as stored data,
- imply sibling calls exist simultaneously in memory unless specifically discussing call graph,
- skip the undo step in backtracking,
- move unrelated states when one call returns.

## Permanent rule

```text
THESE NODES ARE MOMENTS OF COMPUTATION,
NOT STORED TREE NODES.
```
