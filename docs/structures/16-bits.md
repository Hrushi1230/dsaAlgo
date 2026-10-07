# 16 — Bits / Bitmask
## GRAMMAR STATUS: COMPLETE

## Core identity

```text
ALIGNED BIT POSITIONS
COLUMN-WISE OPERATIONS
INDEX 0 ON THE RIGHT
```

## Kit mapping

```text
bit cell / bit char  → compact RoughBox or ChalkText cell
bit index            → ChalkText
row separator        → RoughLine
active column        → subtle highlight / RoughBox outline
shift motion         → bounded translation / BezierFlight only if individual bit travel is useful
operation label      → ChalkText
```

## Composition

```text
INDEX    7 6 5 4 3 2 1 0
VALUE    0 0 1 0 1 1 0 1
MASK     0 0 0 0 1 0 0 0
         ---------------
RESULT   0 0 1 0 0 1 0 1
```

Rows align by bit column.

## Adaptive sizing

For 8/16/32-bit displays:
- reduce horizontal cell width,
- label only necessary high bits when scene allows,
- never break column alignment.

## Operations

### AND / OR / XOR
Focus one or more aligned columns.

### SET BIT
Show mask and resulting target bit.

### CLEAR BIT
Show complement mask only when relevant.

### SHIFT
Move bit pattern while retaining positional frame.
Show entering zeros/sign behavior only if language/operation semantics require it.

## State colors

```text
active bit/column → pivot
mask/query        → cyan
result/confirmed  → good
cleared/rejected  → warn
history           → chalkDim
```

## False semantics

Never:
- reverse bit-index convention between scenes,
- misalign operands/results,
- use decimal-space positions as bit-space positions,
- make every bit a large generic card.

## Permanent rule

```text
BIT POSITIONS ALIGN VERTICALLY.
THE OPERATION HAPPENS COLUMN BY COLUMN.
```
