# Phase 7 — Reference-Driven Data Structure Visual Bible V2
## Code With Animation

This document is the authoritative Phase 7 workflow.

The earlier generic “design all structures from text at once” approach is superseded.

---

# 1. Mandatory workflow

```text
ONE STRUCTURE
→ ONE REFERENCE IMAGE
→ USER REVIEW
→ REVISE UNTIL APPROVED
→ LOCK STRUCTURE MD
→ ONLY THEN MOVE TO NEXT STRUCTURE
```

Antigravity must not invent the visual composition of an unapproved structure.

---

# 2. Shared course world

All long-form DSA visuals use the same course identity:

```text
dark green chalkboard
warm chalk text
rough hand-drawn geometry
cyan = query / information
yellow = current / focus
green = confirmed / correct
coral/red = reject / wrong / miss
subtle chalk-dim history
no dark UI panels unrelated to the board
no SaaS dashboard language
no glassmorphism
no neon
no generic card-grid design
```

Technical colors come from the current repository theme:

```text
theme.boardBg
theme.chalkText
theme.cyan
theme.pivot
theme.good
theme.warn
theme.highlight
theme.chalkDim
```

The reference image controls:
- composition
- structure geometry
- visual hierarchy
- density
- semantic use of color
- chalk character

The live theme controls exact production color values.

---

# 3. Reuse the kit without making everything look the same

Core reusable primitives:

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

Reuse is encouraged when the primitive is semantically correct.

But:

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

HashSet member    → round/pebble token
Tree node         → round node
Graph node        → round/compact node
Interval          → line/bar on axis
Bit               → compact aligned bit cell
```

RoughBox is a generic chalk container primitive, not the universal visual language.

---

# 4. Common reference-sheet shell

Reference sheets may share the same editorial rhythm:

```text
TOP-LEFT
structure title
one-line meaning

TOP-RIGHT
family
representation
level
key semantic
false semantic avoided

CENTER
large structure-specific hero

SIDE
properties / special behavior

BOTTOM
3 important operations

FOOTER
one permanent visual rule
+ representative problem usage
```

Only the page shell repeats.

The hero geometry must be structure-specific.

---

# 5. Adaptive sizing

No structure doc should lock arbitrary dimensions.

Sizing depends on:
- item count
- content length
- scene framing
- available space
- representation type

Rule:

```text
CONTENT-DRIVEN SIZE
+
STABLE SEMANTIC ALIGNMENT
```

Not:

```text
fixed width because reference image used one
```

The reference controls proportions and hierarchy, not literal pixel dimensions.

---

# 6. Approval states

Every structure has one status:

```text
LOCKED
CURRENT REFERENCE
PENDING REFERENCE
REJECTED / REDESIGN
```

Only LOCKED structures may become production grammar.

---

# 7. Current status

```text
01 Array / Sequence          LOCKED
02 Hash Set                  CURRENT REFERENCE
03 Hash Map / Frequency      CURRENT REFERENCE
04 Matrix / Grid             PENDING REFERENCE
05 Linked List               PENDING REFERENCE
06 Stack                     PENDING REFERENCE
07 Queue / Deque             PENDING REFERENCE
08 Tree / BST                PENDING REFERENCE
09 Heap / Priority Queue     PENDING REFERENCE
10 Graph                     PENDING REFERENCE
11 Union-Find                PENDING REFERENCE
12 Trie                      PENDING REFERENCE
13 Intervals                 PENDING REFERENCE
14 Recursion / Backtracking  PENDING REFERENCE
15 Dynamic Programming       PENDING REFERENCE
16 Bits                      PENDING REFERENCE
17 String Algorithms         PENDING REFERENCE
18 Math / Geometry           PENDING REFERENCE
```

No structure is promoted to LOCKED without explicit user approval.

---

# 8. Static grammar before motion

Reference approval is for static structure language first.

After the static grammar is locked:

```text
Motion Bible V2
→ controls motion

Morphing Bible V2
→ controls identity transformations

SVG Animation Bible V2
→ controls relation/path animation
```

Do not use motion to hide weak static structure design.

---

# 9. Paused-frame test

A locked reference must remain understandable when paused.

The learner should be able to answer:

```text
What structure is this?
What entities exist?
What relation exists?
What is current?
What is stable?
What operation is being shown?
What false interpretation is intentionally avoided?
```

If not, redesign before implementation.
