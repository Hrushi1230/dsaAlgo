# 02 — Hash Set
## GRAMMAR STATUS: COMPLETE

## Core identity

```text
UNIQUE MEMBERSHIP
+ NO INDEX SEMANTICS
+ NO MEANINGFUL ORDER
```

The default conceptual view is an open membership field, not a bucket table.

## Kit mapping

```text
set boundary        → RoughCurve / EvolvingPath
member token        → compact round chalk token
member label        → ChalkText
query travel        → BezierFlight or EvolvingPath
hit/miss cue        → ChalkText + semantic stroke/fill
implementation view → legacy HashSetTable only when physical hashing is taught
```

Do not use indexed RoughBox slots as the default Hash Set grammar.

## Composition

```text
      ╭────────────────────────╮
      │   (8)       (3)        │
      │       (6)        (11)  │
      │   (2)          (14)    │
      │        (1)             │
      ╰────────────────────────╯
```

Member placement is intentionally non-tabular.
Do not visually imply sorted order.

## Adaptive sizing

As member count grows:
- member tokens become slightly smaller,
- spacing compresses,
- field boundary expands,
- labels stay readable.

Do not create a hidden grid that implies order.

## Operations

### CONTAINS
Query begins outside the field and resolves to HIT/MISS.

### INSERT
A new member enters only if absent.

### DUPLICATE INSERT
Existing member reacts.
Incoming duplicate retracts/dissipates.
Stored set does not change.

### REMOVE
Member leaves; remaining members may subtly settle without suggesting order.

## State colors

```text
query    → cyan
current  → pivot
hit      → good
miss     → warn
history  → chalkDim
```

## False semantics

Never imply:
- slot number,
- iteration order,
- sorted order,
- array indexing,
- linear scan,
- bucket index,
unless explicitly teaching hash-table implementation.

## Permanent rule

```text
A SET ANSWERS MEMBERSHIP.
POSITION AND ORDER ARE NOT THE SEMANTIC.
```
