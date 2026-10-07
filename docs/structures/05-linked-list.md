# 05 — Linked List
## GRAMMAR STATUS: COMPLETE

## Core identity

```text
NODE = VALUE + LINK PORT
RELATION = EXPLICIT EDGE
```

Unlike an Array, position is not the identity.
The link relation is the structure.

## Kit mapping

```text
node shell           → RoughBox
node divider         → RoughLine
value                → ChalkText
next port            → compact chalk mark / small internal area
next edge            → EvolvingPath or RoughLine
edge tracer          → PathTracer when traversing
external pointer     → RoughLine + ChalkText
rewiring             → erase old edge + draw new edge
value/node movement  → BezierFlight only when physically relocating a node is semantically useful
```

## Node composition

Singly linked node:

```text
┌────────────┬─────┐
│   VALUE    │  •  │────→
└────────────┴─────┘
```

The right area is a link port, not another arbitrary value card.

Doubly linked list may use left/right ports:

```text
←────┌─────┬────────┬─────┐────→
     │prev │ value  │next │
     └─────┴────────┴─────┘
```

## Layout

Default singly linked list:
horizontal authored chain.

```text
HEAD
 ↓
[node] → [node] → [node] → ∅
```

Nodes keep stable positions during ordinary traversal.

## Adaptive sizing

Node width follows:
- value content,
- presence of one/two link ports,
- available scene width.

Long lists:
- reduce gaps,
- slightly shrink nodes,
- optionally wrap only if teaching composition supports it,
- never imply array indices.

## External pointers

Pointers such as:

```text
head
prev
curr
fast
slow
dummy
```

live outside nodes.

Use separate pointer lanes to avoid label collisions.

## Operations

### TRAVERSE
Current pointer moves node-to-node.
Active edge may trace.
Past nodes recede.

### INSERT
Show identity and relation change:

```text
A → B

A → X → B
```

Old edge erases.
New edges draw.

### DELETE
Bypass node:

```text
A → X → B
becomes
A ─────→ B
```

Node can then recede/remove.

### REVERSE
Do not flip the whole list.
Reverse one edge at a time as the algorithm causes it.

## State colors

```text
current pointer   → pivot
next/query        → cyan
confirmed link    → good
removed/broken    → warn
history           → chalkDim
```

## False semantics

Never:
- show array indices,
- move every node when a pointer moves,
- treat link edge as decoration,
- morph one node into another,
- hide which pointer owns which relation.

## Permanent rule

```text
NODES STORE VALUES.
EDGES STORE RELATIONSHIPS.
LIST MUTATION MEANS RELATION MUTATION.
```
