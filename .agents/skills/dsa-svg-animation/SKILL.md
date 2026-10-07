---
name: dsa-svg-animation
description: Designs and verifies SVG path drawing, erasing, tracing, arrowheads, exact path metrics, compound stroke order, dashed-path reveals, and path-following markers for Code With Animation. Use after verified trace, exact audio sync, Motion Bible, Morphing Bible, and visual layout exist.
---

# DSA SVG Animation V2

## Required source order

1. verified algorithm trace
2. exact audio sync / semantic anchors
3. Motion Bible V2
4. Morphing Bible V2
5. SVG Animation Bible V2
6. current data-structure visual grammar
7. current local kit source
8. installed official Remotion docs/skills for API correctness

Do not choose SVG effects before semantic meaning.

---

# First classify the SVG action

Use exactly one primary class:

```text
S0 STATIC
S1 DRAW_NEW
S2 ERASE_OLD
S3 REDRAW_CONFIRM
S4 TRACE_PATH
S5 MOVE_ALONG_PATH
S6 HIGHLIGHT_SEGMENT
S7 COMPOUND_SEQUENCE
S8 MORPH_SAME_PATH
```

S8 requires Phase 5 T3 approval.

---

# Exact-path rule

New V2 path mechanics use:
```text
getLength()
evolvePath()
getPointAtLength()
getTangentAtLength()
reversePath()
getSubpaths()
```
as appropriate.

Never add a magic dash length to a new V2 primitive.

---

# Progress rule

Clamp to:
```text
0..1
```

before `evolvePath()`.

Do not use negative/>1 evolve semantics as an implementation trick.

---

# Direction rule

For directional relation:
record:
```text
source
target
authored direction
visible draw direction
erase direction
```

Reverse path explicitly when needed.

---

# Arrow rule

Choose:
```text
RELATION ARROW
or
TRACER ARROW
```

Relation arrow:
shaft → head.

Tracer arrow:
point + tangent along path.

---

# Rough.js rule

Keep deterministic seed.

When migrated to V2:
use exact generated `d` lengths.

Do not derive dash length from original width/height/point distances.

---

# Planning output

Each non-trivial SVG action must include:

```text
SVG ACTION ID:
SEMANTIC ROLE:
SVG CLASS:
PATH ID:
SOURCE:
TARGET:
AUDIO ANCHOR:
TRACE STEP:
START FRAME:
END FRAME:
DIRECTION:
PATH LENGTH SOURCE:
ARROW TYPE:
LAYER:
MECHANIC:
REUSE / EXTEND / CREATE:
```

---

# Review

Reject if:
- relation animates before cause
- magic dash length is used
- direction is implicit
- target reacts too early
- compound stroke order is accidental
- dashed semantics are destroyed by reveal mechanics
- fill is treated like a stroke
- stable edge is redrawn during every traversal
- SVG animation exists only to fill empty time
