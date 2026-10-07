# 15 — Dynamic Programming
## GRAMMAR STATUS: COMPLETE

## Core identity

```text
DP CELL = SOLVED STATE
DEPENDENCIES EXPLAIN HOW IT WAS PRODUCED
```

## Kit mapping

```text
1D/2D cell         → RoughBox
state value         → ChalkText
dependency edge    → RoughLine / EvolvingPath
current cell       → semantic RoughBox stroke
memo call relation → EvolvingPath
count/value update → CountUp
table trace        → PathTracer only when traversal path is meaningful
```

## 1D composition

```text
i      0   1   2   3   4
      [0] [1] [1] [2] [?]
```

Dependencies may appear temporarily:

```text
dp[i-1] ─┐
         ├→ dp[i]
dp[i-2] ─┘
```

## 2D composition

Use Matrix/Grid grammar:

```text
      j
    0 1 2 3
i 0 [ ][ ][ ][ ]
  1 [ ][ ][ ][ ]
  2 [ ][ ][ ][ ]
```

## Adaptive sizing

Same as Array for 1D and Matrix for 2D.
Do not lock one universal cell size.

## Operations

### READ DEPENDENCIES
Focus only states required for current transition.

### COMPUTE
Show formula/combination.
Current cell still unresolved.

### SETTLE
Write final value into cell.
Cell becomes solved.

### MEMOIZATION
Call state checks cache.
Hit returns stored value.
Miss computes then stores.

### TABULATION
Fill order should be visible only where order matters.

## State colors

```text
dependency/query → cyan
current state    → pivot
solved           → good
invalid option   → warn
old solved       → chalkDim
```

## False semantics

Never:
- show a DP table as meaningless spreadsheet,
- mark cells solved before dependencies are known,
- imply every nearby cell is a dependency,
- confuse recursion call tree with stored DP table.

## Permanent rule

```text
A DP CELL IS A SOLVED STATE.
SHOW WHAT PRODUCED IT.
```
