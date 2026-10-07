# 06 — Stack
## GRAMMAR STATUS: COMPLETE

## Core identity

```text
VERTICAL LIFO
TOP-ONLY ACCESS
```

## Kit mapping

```text
item          → RoughBox
stack boundary→ RoughLine / RoughCurve
top pointer   → RoughLine + ChalkText
item label    → ChalkText
push/pop path → BezierFlight
count         → CountUp
```

## Composition

```text
          TOP
           ↓
       ┌────────┐
       │   9    │
       ├────────┤
       │   6    │
       ├────────┤
       │   4    │
       └────────┘
```

Use an open-top chalk container/guide so it reads as a Stack, not a vertical Array.

## Adaptive sizing

As depth increases:
- compress item height,
- keep TOP clear,
- do not scroll unless scene explicitly teaches long history,
- keep newest/top item most legible.

## Operations

### PUSH
New item enters only at TOP.

### POP
Top item exits.
Next item becomes TOP.

### PEEK
Highlight top item without moving it.

### MONOTONIC STACK
Add a small invariant label such as:
```text
decreasing ↓
```
Only when algorithmically relevant.

## State colors

```text
top/current → pivot
query       → cyan
accepted    → good
popped      → warn/recede
history     → chalkDim
```

## False semantics

Never:
- remove a middle item directly,
- show enqueue/dequeue gates,
- make the stack horizontal by default,
- imply indices are the structure's meaning.

## Permanent rule

```text
ONLY TOP CAN ENTER OR LEAVE.
```
