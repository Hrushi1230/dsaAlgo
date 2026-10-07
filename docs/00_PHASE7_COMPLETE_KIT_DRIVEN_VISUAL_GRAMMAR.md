# PHASE 7 — COMPLETE KIT-DRIVEN DATA STRUCTURE VISUAL GRAMMAR
## Code With Animation / Long-form DSA Course

This package defines the complete Phase 7 visual grammar for all major data-structure families used by the course.

The earlier "copy a reference image" workflow is no longer the primary authority.

The authoritative construction model is:

```text
DATA-STRUCTURE SEMANTICS
→ EXISTING @dsa/kit PRIMITIVES
→ STRUCTURE-SPECIFIC COMPOSITION
→ ADAPTIVE LAYOUT
→ SEMANTIC STATE COLORS
→ MOTION / MORPH / SVG RULES
```

---

# 1. Course visual world

Use the course green chalkboard directly:

```text
theme.boardBg
≈ #18523d
```

Do not add black or charcoal UI panels over the board.

Preferred visual character:

```text
green chalkboard
+ warm chalk text
+ hand-drawn rough geometry
+ open composition
+ subtle chalk hachure
+ semantic color
+ strong negative space
```

Forbidden default styling:

```text
black dashboard panels
generic SaaS cards
glassmorphism
neon UI
3D chrome
random gradients
large dark containers
decorative card grids
```

---

# 2. Shared semantic palette

Use repository tokens, not ad-hoc hardcoded colors:

```text
neutral / base       → theme.chalkText
query / information  → theme.cyan
current / focus      → theme.pivot
confirmed / correct  → theme.good
reject / blocked     → theme.warn
history / visited    → theme.chalkDim
important region     → theme.highlight
```

Color communicates state, not decoration.

---

# 3. Existing kit first

Prefer the existing kit whenever it truthfully expresses the geometry:

```text
RoughBox
RoughLine
RoughCurve
EvolvingPath
PathTracer
BezierFlight
ChalkText
CountUp
ShineFill
ChalkDust
Shatter
SvgMorph
```

Rule:

```text
REUSE PRIMITIVE
!=
REUSE STRUCTURE SHAPE
```

The primitive can repeat.
The semantic composition must not become generic.

---

# 4. Adaptive sizing

No document in this package defines one universal pixel size.

Dimensions depend on:

```text
data count
content length
scene aspect
available width/height
camera framing
active teaching state
```

Use content-driven sizing while preserving semantic alignment.

Examples:

```text
small array  → larger slots
large array  → smaller slots
small tree   → wider node spacing
large tree   → tighter level spacing
long queue   → compact items
large matrix → smaller cells
```

---

# 5. Static truth before motion

A paused frame must already communicate:

```text
what structure this is
what the entities are
what relations exist
what stays fixed
what may change
what is current
what operation is happening
```

Only after static grammar is correct:

```text
Motion Bible V2
Morphing Bible V2
SVG Animation Bible V2
```

control animation.

---

# 6. Universal structure questions

Every structure implementation must answer:

```text
1. What semantic objects exist?
2. Which kit primitive creates each object?
3. How are objects arranged?
4. Which geometry is stable?
5. Which state may change?
6. What does color mean?
7. What relation lines are meaningful?
8. What overlays are allowed?
9. How does it scale with data size?
10. Which operation changes which visual objects?
11. What false semantics must be avoided?
```

---

# 7. Phase 7 completion state

All 18 structure-family grammar documents are present in this package.

```text
01 Array / Sequence
02 Hash Set
03 Hash Map / Frequency
04 Matrix / Grid
05 Linked List
06 Stack
07 Queue / Deque
08 Tree / BST
09 Heap / Priority Queue
10 Graph
11 Union-Find
12 Trie
13 Intervals
14 Recursion / Backtracking
15 Dynamic Programming
16 Bits
17 Advanced String Algorithms
18 Math / Geometry
```

Phase 7 here means visual-grammar architecture is documented.

It does NOT mean production components for all structures have been implemented.
