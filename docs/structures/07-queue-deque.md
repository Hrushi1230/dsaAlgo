# 07 — Queue / Deque
## GRAMMAR STATUS: COMPLETE

## Core identity

Queue:

```text
FIFO
REAR ENTERS
FRONT LEAVES
```

Deque:

```text
BOTH ENDS ARE ACTIVE
```

## Kit mapping

```text
item            → RoughBox
lane guide      → RoughLine
front/rear gate → RoughLine + ChalkText
movement        → BezierFlight or bounded x-translation
labels          → ChalkText
count           → CountUp
```

## Queue composition

Use horizontal flow lane:

```text
FRONT                               REAR
  ↓                                   ↓
[ 4 ]  [ 8 ]  [ 11 ]  [ 15 ]
```

Canonical direction:

```text
dequeue from LEFT / FRONT
enqueue at RIGHT / REAR
```

Keep this direction consistent course-wide.

## Deque composition

```text
FRONT ⇄ [ ][ ][ ][ ] ⇄ BACK
```

Both gates become first-class.

## Adaptive sizing

Long queue:
- reduce gap and item width,
- preserve front/rear labels,
- keep flow direction obvious.

## Operations

### ENQUEUE
New item enters at REAR.

### DEQUEUE
Front item leaves.

### PEEK FRONT
Highlight only.

### DEQUE PUSH/POP
Clearly indicate which end is active.

## State colors

```text
active gate    → pivot
incoming/query → cyan
confirmed      → good
leaving        → warn
history        → chalkDim
```

## False semantics

Never:
- confuse with Stack,
- allow arbitrary middle removal,
- swap front/rear orientation across scenes without explicit reason,
- imply numeric indices are the main semantics.

## Permanent rule

```text
QUEUE ORDER IS DEFINED BY ITS GATES:
REAR ENTERS, FRONT LEAVES.
```
