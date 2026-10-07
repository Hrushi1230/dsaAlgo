# Code With Animation — SVG Animation Bible V2
## Foundation V2 · Phase 6

**Scope:** path drawing, erasing, tracing, arrowheads, compound SVGs, path metrics, and SVG relationship animation.

**Core law:**
SVG animation must communicate relation/state, not decorate empty space.

---

# 1. Semantic SVG action vocabulary

Every animated SVG path must be classified as one of:

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

`S8` delegates semantic permission to Phase 5 `T3 TRUE_PATH_MORPH`.

Do not invent a custom mechanism before classifying the action.

---

# 2. S0 — STATIC

The SVG is present but not animated.

Use when:
- line is structural background
- animation would add no teaching value
- learner needs a stable coordinate/reference system

Static is valid.

---

# 3. S1 — DRAW_NEW

Meaning:
A new semantic relation/boundary/annotation becomes true or visible.

Canonical order:

```text
cause established
→ source focus
→ path draws in authored direction
→ target reaction
→ hold
```

Technical default:
```text
clamped progress 0→1
→ evolvePath(progress, d)
```

Do not use arbitrary opacity fade if direction matters.

---

# 4. S2 — ERASE_OLD

Meaning:
An old semantic relation ceases to be valid.

Canonical order:

```text
reason established
→ relation marked old/invalid
→ path retracts/erases
→ new relation may draw
```

Erase direction must be explicit in the plan.

Examples:
```text
target→source retract
source→target wipe
```

Do not let implementation accidentally choose direction.

If the authored path direction is wrong:
use `reversePath()` or an equivalent explicit reversed path.

Do not use negative evolve progress as a shortcut.

---

# 5. S3 — REDRAW_CONFIRM

Meaning:
The relation already existed; redrawing it is a teaching confirmation.

Use rarely.

Example:
after explaining a cycle, retrace exactly the cycle once.

Rules:
- relation identity does not change
- no new state should be implied
- redraw should be shorter/lighter than first introduction unless the narration explicitly re-teaches it

---

# 6. S4 — TRACE_PATH

Meaning:
A visual trace progresses through a relation while the relation itself may already exist.

Examples:
- runner moving through a consecutive chain
- scan marker over a conceptual route
- traversal pulse across a tree edge

Correct technique:
```text
path stays stable
+
tip/tracer position = getPointAtLength()
+
orientation if needed = getTangentAtLength()
```

Do not redraw the entire relation every time a runner traverses it.

---

# 7. S5 — MOVE_ALONG_PATH

Meaning:
An object is physically/semantically traveling along a known SVG route.

Different from TRACE_PATH:
- TRACE_PATH can be a marker/probe
- MOVE_ALONG_PATH transfers a semantic object

If route geometry is a true SVG path and the object must exactly follow it:
use exact path sampling.

If a BezierFlight/arc movement already correctly represents the transfer:
keep using BezierFlight.

Do not replace working object-motion primitives merely because SVG path sampling exists.

---

# 8. S6 — HIGHLIGHT_SEGMENT

Meaning:
Only part of an existing path becomes important.

Examples:
- active subrange of a route
- one graph edge among many
- one branch in recursion tree

Preferred:
- duplicate/overlay path with active segment styling
- exact segment progress derived from path length

Do not mutate the base relation identity.

---

# 9. S7 — COMPOUND_SEQUENCE

Meaning:
An SVG object has multiple semantic strokes/subpaths.

Examples:
- arrow = shaft + arrowhead
- bracket = vertical stem + caps
- icon = several independent strokes
- graph path = multiple meaningful edges

Rule:
If stroke order teaches meaning, animate strokes explicitly.

Do not put one global dash offset on a complex SVG and assume pedagogical order.

---

# 10. S8 — MORPH_SAME_PATH

Meaning:
Same semantic path continuously changes geometry.

Allowed only if Phase 5 T3 passes:
- same semantic entity
- 1→1
- same topology/route class
- valid intermediate geometry
- stable intended endpoints

Phase 6 only supplies SVG mechanics.
Phase 5 owns permission.

---

# 11. Exact path metrics rule

V2 production path reveal must use exact geometry.

Canonical source:

```text
getLength(d)
```

Forbidden in new V2 primitives:

```text
magic length 100
width * 1.2
euclidean length * 1.6
point-distance estimate * 1.3
```

Those existing patterns are V1 migration debt.

---

# 12. Progress rule

All production SVG progress values are:

```text
0 <= progress <= 1
```

Before `evolvePath()`:

```text
progress = clamp01(progress)
```

Reason:
official `evolvePath()` has special semantics outside 0..1.

Course code must never accidentally trigger those semantics.

---

# 13. Direction rule

Every directional path has:

```text
semantic source
semantic target
authored path start
authored path end
draw direction
erase direction
```

If source/target direction differs from authored `d` direction:
reverse the path explicitly.

Do not “fix” direction with negative progress.

---

# 14. Arrow taxonomy

There are TWO different arrow behaviors.

## A. RELATION ARROW

Meaning:
“this relation points from A to B”.

Behavior:
```text
shaft draws
→ shaft reaches target
→ arrowhead appears/draws
```

Arrowhead should not float halfway along the relation.

Current RoughLine's semantic split (shaft first, head last) is valid and should be preserved conceptually.

---

## B. TRACER ARROW

Meaning:
“current motion/probe direction along this route”.

Behavior:
```text
tip position follows getPointAtLength()
tip angle follows getTangentAtLength()
```

This arrowhead may move with the trace.

Never confuse RELATION ARROW with TRACER ARROW.

---

# 15. Path-tip math

For path `d`:

```text
L = getLength(d)
distance = clamp01(progress) * L
point = getPointAtLength(d, distance)
tangent = getTangentAtLength(d, distance)
angle = atan2(tangent.y, tangent.x)
```

Even though installed Remotion 4.0 returns end information for over-range queries:
V2 clamps distance anyway.

This keeps behavior explicit and future-safe.

---

# 16. Node-edge termination

When an edge connects visual nodes:

Preferred endpoint:
```text
node boundary anchor
```

not:
```text
node center hidden underneath the node
```

Reason:
- clearer geometry
- reliable arrowhead placement
- no overdraw dependency
- future graph/tree layouts remain stable

If current data-structure component cannot yet supply boundary anchors:
record it as Phase 7/8 implementation work.

Do not fake it with random offsets.

---

# 17. Layering contract

Default SVG relation stack:

```text
L0 background/grid
L1 inactive/ghost relations
L2 active base relation
L3 highlight/traced segment
L4 moving tracer / arrow tip
L5 nodes/cards
L6 node labels/state badges
```

Exceptions require a semantic reason.

A path should normally pass behind a node, while labels remain above it.

---

# 18. Draw speed and physical length

Audio anchors decide TOTAL frame window.

Within a multi-path semantic sequence:

## simultaneous relations
Use same normalized progress when relations become true together.

## one continuous hand-drawn route
Allocate subpath time proportionally to exact path length.

This gives approximately stable virtual drawing speed across segments.

Do not allocate equal frames to a 40px tick and a 600px curve if they are meant to be one continuous stroke.

---

# 19. Compound paths

Before animating a compound `d`:

Ask:
```text
Are these subpaths one semantic stroke,
or several semantic strokes?
```

If several:
use `getSubpaths()` or author separate paths and animate order explicitly.

Examples:
- icon eyelet + hook body = separate teaching strokes only if sequence matters
- two graph edges = separate relations
- decorative rough double stroke = may animate together as one visual relation

Semantic structure wins over source-file convenience.

---

# 20. Rough.js contract

Rough.js is allowed because it preserves the chalkboard identity.

Requirements:
- fixed deterministic seed
- generated path data memoized
- no per-frame regeneration
- exact generated `path.d` metrics for V2 draw mechanics

Do not estimate length from original shape dimensions after Rough.js has changed the geometry.

---

# 21. Rough double-stroke behavior

Rough.js can output multiple visual paths for one semantic stroke.

Default:
```text
all visual companion strokes represent ONE semantic relation
```

They may evolve together using their own exact lengths.

Do not interpret rough companion strokes as multiple algorithmic edges.

Optional micro-stagger may only be added later if:
- deterministic
- visually reviewed
- does not change semantic timing

Do not invent stagger in Phase 6 proof unless needed.

---

# 22. Fill vs stroke

Stroke reveal and fill reveal are different.

## Stroke
Use exact path evolution.

## Fill / hachure / solid area
Use:
- state reveal
- opacity
- mask
- explicit hachure stroke sequence if it is pedagogically relevant

Do not apply stroke-dash mechanics to solid fills.

Example:
RoughBox:
```text
outline draws
→ fill/state appears
```

---

# 23. Dashed semantic paths

A dashed line may mean:
- hypothetical
- future
- inactive
- ghost relation

`evolvePath()` itself uses stroke-dash properties for reveal.

Therefore:
do NOT overwrite a semantic dash pattern on the same visible path.

Approved strategies:
1. reveal the dashed visible path through an animated mask;
2. author segment-by-segment reveal;
3. use an overlaid reveal path if semantics remain truthful.

Phase 6 proof must include at least one semantic dashed-path solution.

---

# 24. Masks and clipping

Use SVG masks/clipping only when they solve a real SVG problem such as:
- revealing a dashed semantic path
- limiting highlight to part of a relation
- keeping path out of a reserved visual region

Do not use masks as decorative effects.

Mask animation must still be frame-driven.

---

# 25. Erase-old / draw-new relation change

For relation identity changes:

```text
old relation resolves as obsolete
→ erase old
→ optional micro hold
→ draw new
→ target/new state reacts
```

Do not crossfade old and new edges if that makes both appear valid simultaneously.

Phase 5 T4 semantics remain authoritative.

---

# 26. Graph / tree edge rule

## same endpoints, layout changes
Potential:
```text
T3/S8 same-path morph
```
only if Phase 5 preflight passes.

## endpoint changes
```text
S2 ERASE_OLD
→ S1 DRAW_NEW
```

Never morph an edge into a new semantic relationship merely because both are curves.

---

# 27. Pointer/brace/bracket rule

Pointers and braces should not all use the same SVG animation.

## pointer relation
directional; use shaft + head semantics.

## bracket/range
boundary semantics; normally draw its structural strokes in logical order.

## underline
attention semantic; fast S1 draw.

## strike-through
rejection semantic; draw only after reject decision.

---

# 28. Icon animation rule

Icon stroke animation is optional.

If animated:
- split stroke paths from fills
- use exact lengths per stroke
- animate stroke order only if meaningful
- reveal filled dots after associated stroke

Do not apply one parent `strokeDasharray=100` to mixed icon geometry in V2.

Existing ChalkIcons implementation is Phase 8 migration debt.

---

# 29. No-SVG-animation cases

Do NOT animate SVG merely because it exists.

Keep static when:
- path is background scaffolding
- narration is about value state, not the relation
- repeated edge animation would become noise
- learner already understands the relation

---

# 30. Audio integration

Every semantic SVG action must map to an exact sync anchor.

Scene plan example:

```text
SVG ACTION ID: PRED-QUERY-LINE
CLASS: S1 DRAW_NEW
TRACE: OPT-010
AUDIO ANCHOR: predecessor-query-start
START FRAME: 814
END FRAME: 832
PATH ID: pred-query
DIRECTION: candidate → predecessor
TARGET REACTION: frame 833+
```

No “draw around here”.

---

# 31. SVG Action Contract

For every important animated SVG:

```text
SVG ACTION ID:
SEMANTIC ROLE:
SVG CLASS:
PATH ID:
SOURCE:
TARGET:
AUTHORED DIRECTION:
VISIBLE DIRECTION:
AUDIO ANCHOR:
TRACE STEP:
START FRAME:
END FRAME:
DRAW / ERASE / TRACE:
PROGRESS SOURCE:
PATH LENGTH SOURCE:
ARROW TYPE:
LAYER:
REUSE / EXTEND / CREATE:
```

For S8 also include Phase 5 Morph Contract.

---

# 32. Anti-patterns

Never:

- hard-code dash length in new V2 path primitives
- estimate Rough.js generated path length from original dimensions
- use negative progress as a direction hack
- use progress >1 accidentally
- animate a compound SVG as one blob when stroke order matters
- use one global dash offset for mixed path/circle/fill icons
- redraw stable relations for every traversal
- let arrowhead appear before shaft reaches target
- put relation above node labels without semantic reason
- use CSS/SMIL SVG animation
- morph a new relation instead of erase/draw
- consume audio time with decorative SVG writing
- create path motion without trace/audio causality

---

# 33. QA questions

For every SVG animation:

1. What semantic relation/state does this SVG represent?
2. Which S0–S8 class is it?
3. Is exact path length used?
4. Is progress clamped?
5. Is direction explicit?
6. If directional, where are source and target?
7. Is this relation new, old, traced, or merely highlighted?
8. Does arrow behavior match relation-arrow vs tracer-arrow semantics?
9. Are compound strokes sequenced intentionally?
10. Are fills separated from stroke drawing?
11. If dashed, is semantic dash preserved?
12. Does the path stay on the correct layer?
13. Does it begin only after the exact audio/trace cause?
14. Does target state react only after path arrival when causally required?
15. Would leaving the SVG static teach better?

If #15 is yes, remove the animation.
