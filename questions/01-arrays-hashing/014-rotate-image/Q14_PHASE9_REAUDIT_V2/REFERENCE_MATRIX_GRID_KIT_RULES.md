# Phase 7 — Kit-Driven Data Structure Visual Grammar
## Code With Animation

This is the new Phase 7 construction rule.

We are NOT using generic reference-image layouts as the main authority.

Instead, every data structure must be defined through:

```text
DATA-STRUCTURE SEMANTICS
↓
EXISTING @dsa/kit PRIMITIVES
↓
EXACT COMPOSITION RULES
↓
STRUCTURE-SPECIFIC GEOMETRY
```

---

# 1. Course background

Use only the course green chalkboard:

```text
theme.boardBg
≈ #18523d
```

Do NOT add:
- black cards,
- charcoal UI panels,
- glossy dashboards,
- glassmorphism,
- neon UI,
- large dark containers over the board.

Preferred look:

```text
green board
+ open composition
+ chalk primitives directly on board
+ subtle hachure / chalk states
```

---

# 2. Reuse the kit

Prefer existing primitives whenever they truthfully express the structure:

```text
RoughBox
RoughLine
RoughCurve
EvolvingPath
PathTracer
BezierFlight
ChalkText
CountUp
```

Important:

```text
REUSE PRIMITIVE
!=
REUSE STRUCTURE SHAPE
```

Examples:

```text
Array slot        → RoughBox
Stack item        → RoughBox
DP cell           → RoughBox
HashMap key/value → RoughBox

Tree node         → round node
Graph node        → round/compact node
HashSet member    → round/pebble token
Interval          → axis segment/bar
Bit               → compact aligned bit cell
```

The low-level kit can be generic.
The high-level structure grammar must not be generic.

---

# 3. Every structure doc must answer

```text
1. What semantic objects exist?
2. Which @dsa/kit primitive creates each object?
3. How are they arranged?
4. Which parts stay fixed?
5. Which parts can move?
6. What does color mean?
7. What false meaning must never appear?
8. Which overlays are allowed?
9. How does it scale with data size?
10. Which operations change which visual objects?
```

---

# 4. Adaptive layout rule

Do not lock arbitrary pixel dimensions.

Structure geometry depends on:
- data size,
- available scene area,
- content length,
- active teaching state,
- camera framing.

Use:

```text
content-driven sizing
+
stable semantic alignment
```

Do not copy literal dimensions from a reference image.

---

# 5. Semantic colors

Use course theme tokens:

```text
normal / neutral   → theme.chalkText
query / info       → theme.cyan
current / focus    → theme.pivot
confirmed / good   → theme.good
reject / blocked   → theme.warn
history / visited  → theme.chalkDim
important region   → theme.highlight / subtle hachure
```

Color communicates state, not decoration.

---

# 6. Static truth before motion

First create a correct paused frame.

Then apply:

```text
Motion Bible V2
Morphing Bible V2
SVG Animation Bible V2
```

A structure must still be understandable when paused.
