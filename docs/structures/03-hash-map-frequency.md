# 03 — Hash Map / Frequency / Grouping
## GRAMMAR STATUS: COMPLETE

## Core identity

```text
KEY → VALUE
```

The relation is the primary semantic.

## Kit mapping

```text
key container      → RoughBox
value container    → RoughBox
mapping connector  → RoughLine / EvolvingPath
labels             → ChalkText
count change       → CountUp
query transfer     → BezierFlight when useful
group expansion    → RoughBox composition
```

Reuse RoughBox, but do not make the map look like an Array.
Its identity comes from paired key/value units and explicit relation.

## Base composition

```text
[ key ]  →  [ value ]
[ key ]  →  [ value ]
[ key ]  →  [ value ]
```

No numeric slot indices by default.

## Adaptive sizing

Key/value boxes size from content.
Grouped values may be wider.
Frequency values may be compact.
Rows align within the scene but row order is not semantic.

## Variants

### Key → Value
```text
"apple" → 3
"mango" → 5
```

### Frequency
```text
2 → 4
5 → 2
```

### Complement / Index
```text
7 → 0
2 → 1
```

### Grouping
```text
"aet" → ["eat","tea","ate"]
```

## Operations

### LOOKUP
Key focuses → connector activates → value responds.

### INSERT
New mapping appears and settles.

### UPDATE
Key stays stable.
Value changes.

### MISSING KEY
No mapping responds.
Miss state appears.

## Representation levels

R1 conceptual:
```text
key → value
```

R2 implementation:
buckets/collisions/chaining only when explicitly taught.

R3 algorithm projection:
frequency/complement/grouping.

## False semantics

Never imply:
- row order is the main meaning,
- key is an array index by default,
- map is sorted,
- every lookup scans rows,
- bucket indices are always visible.

## Permanent rule

```text
THE KEY–VALUE RELATIONSHIP IS PRIMARY.
ROW POSITION IS NOT.
```
