# 01 — Array / Sequence
## GRAMMAR STATUS: COMPLETE / LOCKED

## Core identity

```text
FIXED SLOT TRACK
+ STABLE INDICES
+ MUTABLE VALUES
+ POINTERS OUTSIDE
+ OPTIONAL REGION BANDS
```

The slot is stable.
The value is the mutable occupant.
The index belongs to the slot.

## Kit mapping

```text
slot                 → RoughBox
value                → ChalkText
index                → ChalkText
pointer stem         → RoughLine
pointer label        → ChalkText
region band          → subtle RoughBox / hachure
value transfer       → BezierFlight
continuous traversal → PathTracer only when meaningful
```

## Default composition

```text
index       0    1    2    3    4    5
          [ 2 ][ 0 ][ 2 ][ 1 ][ 1 ][ 0 ]
```

No dark container behind the track.

## Adaptive sizing

Slot size depends on item count and available width.
Within one array scene:
- slots keep consistent geometry,
- index alignment remains stable,
- values do not force slot reflow.

## Pointer lane

Pointers live outside the slots:

```text
low
 ↓
[ ][ ][ ][ ][ ]
          ↑
          i
                    ↑
                  high
```

Moving a pointer never moves a slot.

## Region grammar

For partition/range problems, draw a subtle chalk band behind or below the slot range.

Do not create a second row of generic cards.

## Operations

### READ
Focus one slot/value relation.

### WRITE
Slot stays fixed.
Value changes.

### SWAP
Two values move.
Slots and indices remain fixed.

### RANGE
Only the active region becomes semantically emphasized.

## State colors

```text
neutral  → chalkText
query    → cyan
current  → pivot
done     → good
invalid  → warn
history  → chalkDim
```

## False semantics

Never:
- move index labels with values,
- change slot geometry during a swap,
- turn every array into bar heights,
- use a number line unless numeric adjacency matters,
- use circular layout unless the problem is genuinely circular.

## Permanent rule

```text
SLOTS STAY FIXED.
VALUES MOVE.
INDICES NEVER MOVE.
```
