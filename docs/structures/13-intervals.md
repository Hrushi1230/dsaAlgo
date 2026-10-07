# 13 — Intervals
## GRAMMAR STATUS: COMPLETE

## Core identity

```text
RANGE ON A SHARED AXIS
```

Intervals are spatial segments, not generic cards.

## Kit mapping

```text
axis              → RoughLine
ticks/labels      → ChalkText / short RoughLine ticks
interval segment  → RoughLine with thicker chalk stroke
endpoint marker   → small rough circle/tick
overlap hachure   → ShineFill / subtle region fill
sweep line        → RoughLine
merge motion      → SVG/line expansion, not card morph
```

## Composition

```text
0---1---2---3---4---5---6---7---8

    [──────────]
         A

          [────────────]
               B
```

Intervals share one coordinate axis.

## Adaptive sizing

Axis scales to active endpoint range.
Label only important ticks if dense.
Multiple intervals may stack vertically.

## Operations

### OVERLAP
Highlight spatial intersection.

### MERGE
Two intervals reduce into one segment spanning the union.

### INSERT INTERVAL
New interval enters axis, compares/merges as needed.

### SWEEP LINE
Vertical/current marker moves along shared axis.
Active set appears separately if needed.

## State colors

```text
current interval → pivot
candidate        → cyan
merged/accepted  → good
non-overlap/rej  → warn/dim
history          → chalkDim
```

## False semantics

Never:
- show intervals as unrelated cards only,
- hide the shared axis when spatial relation matters,
- let visual spacing disagree with endpoint meaning,
- use bar height to encode interval value.

## Permanent rule

```text
INTERVALS ARE RANGES ON THE SAME AXIS.
OVERLAP SHOULD BE VISIBLE, NOT INFERRED FROM CARDS.
```
