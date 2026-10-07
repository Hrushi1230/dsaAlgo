---
name: dsa-morph-design
description: Decides whether a DSA visual transformation should move, resize, path-morph, clone/project, merge, split, erase/draw, representation-handoff, or replace. Use after verified trace, exact audio sync, Motion Bible, and current visual-state design exist.
---

# DSA Morph Design V2

## Required sources

1. verified trace
2. exact audio sync + semantic anchors
3. `docs/MOTION_BIBLE_V2.md`
4. `docs/MORPHING_BIBLE_V2.md`
5. relevant Data Structure Visual Style
6. current local kit source
7. installed official Remotion skills/docs for API correctness

Never choose morph semantics from an animation API.

---

# First task: identity contract

Before implementation write:

```text
SOURCE
TARGET
SOURCE SEMANTIC ID
TARGET SEMANTIC ID
IDENTITY RELATION
CARDINALITY
SOURCE PERSISTS
```

Then choose one:

```text
T0 STATE_CHANGE
T1 MOVE / RELAYOUT
T2 RESIZE / DEFORM
T3 TRUE_PATH_MORPH
T4 DRAW_NEW / ERASE_OLD
T5 CLONE / PROJECT
T6 MERGE / REDUCE
T7 SPLIT / BRANCH
T8 REPRESENTATION_HANDOFF
T9 REPLACE / CUT
```

---

# `SvgMorph` rule

`SvgMorph` is low-level geometry only.

Use it only for:
```text
identity relation = SAME
cardinality = 1→1
shape deformation communicates continuity
```

Do not use it to decide that two things are “the same”.

---

# Path morph review

Render:
```text
0%
25%
50%
75%
100%
```

Reject if:
- route/topology class changes across an obstacle (e.g. upper route → lower route around obstacle)
- intermediate geometry crosses a forbidden region or obstacle at any progress value
- any intermediate geometry is semantically invalid
- midpoint self-crosses confusingly or forms knots
- correspondence is unclear
- subpaths visually swap roles
- source/target endpoints are wrong or unstable
- state color changes before semantic decision

---

# Reordering rule

Same DSA entities in new positions:
MOVE.

Never path-morph array cards because their order changed.

---

# Copy rule

If source remains logically present:
CLONE / PROJECT.

Never move the only original representation away.

---

# Merge / split rule

Cardinality changes are semantic events.

Do not hide them inside `interpolatePath()`.

Use staged choreography from Morphing Bible + Motion Bible.

---

# Planning output

Each significant transformation must include:

```text
MORPH ID:
AUDIO ANCHOR:
TRACE STEP:
SOURCE:
TARGET:
IDENTITY RELATION:
CARDINALITY:
SOURCE PERSISTS:
TRANSITION CLASS:
MECHANIC:
MIDPOINT QA:
REUSE / EXTEND / CREATE:
```

---

# Review

Ask:
“Can the learner point to what happened to the old object?”

If no, the transformation fails.
