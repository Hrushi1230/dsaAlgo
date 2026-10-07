# Code With Animation — Morphing Bible V2
## Foundation V2 · Phase 5

**Scope:** Long-form DSA course  
**Core principle:** Morphing is allowed only when it preserves or clarifies semantic identity.

---

# 1. Master law

Before any morph, answer:

```text
WHAT is this object?
WHAT will it become?
IS it still the same semantic entity?
DOES the source still exist afterward?
HOW MANY source identities map to HOW MANY target identities?
```

If these questions are not answered, do not morph.

---

# 2. Morphing is not the default

Use the simplest truthful transition.

Priority:

```text
1. HOLD / STATE CHANGE
2. MOVE / RELAYOUT
3. DRAW / ERASE RELATION
4. CLONE / PROJECT
5. REPRESENTATION HANDOFF
6. TRUE GEOMETRY MORPH
7. MERGE / SPLIT choreography
```

A path morph is not “more premium” than a move.

Premium means:
the learner always understands what stayed the same and what changed.

---

# 3. Identity relation vocabulary

Every transformation is classified as one of:

## SAME

Same semantic entity before and after.

Examples:
- same array value moves to another slot
- same pointer moves to another index
- same graph edge bends because layout moved
- same active range changes width

Allowed:
MOVE, RELAYOUT, RESIZE, DEFORM, PATH_MORPH where appropriate.

---

## COPY

Target is a second representation while source remains.

Examples:
- input array value projected into a HashSet
- value cloned to a conceptual number line
- array cell projected into a tree view while array stays visible

Allowed:
CLONE / PROJECT.

Do not consume the source.

---

## DERIVED

Target is calculated from source, not the same identity.

Examples:
- frequency count derived from repeated values
- prefix sum derived from array prefix
- DP value derived from subproblems

Allowed:
source relation → new result reveal.

Do not directly morph the source into the derived value unless the teaching model explicitly states replacement.

---

## MERGED

Multiple source identities create one result identity.

Examples:
- interval A + interval B → merged interval
- repeated recursive states → one memo state
- several frequencies → one aggregate statistic

Allowed:
MERGE choreography.

Do not pretend one source was always the target.

---

## SPLIT

One source produces multiple result identities.

Examples:
- range partitions into two/three regions
- branch creates two recursive choices

Allowed:
SPLIT choreography.

Do not path-morph one thing into multiple unrelated things.

---

## REPLACED

Source state ends and a new unrelated semantic object takes its place.

Examples:
- problem opener → trace scene
- old explanation label → unrelated next concept

Allowed:
recede/reveal, erase/draw, scene transition.

No morph.

---

## REPRESENTATION

Same concept is being shown in a different visual language.

Examples:
- heap array → heap tree
- adjacency list → graph drawing
- trace concepts → code guide lines
- integer → bit row

Allowed:
REPRESENTATION HANDOFF only with explicit correspondence.

This is not automatically a true SVG path morph.

---

# 4. Cardinality law

Record:

```text
1 → 1
1 → many
many → 1
many → many
```

## 1 → 1

Potentially eligible for:
- move
- resize
- path morph
- representation handoff

Still requires semantic identity check.

## 1 → many

Use SPLIT / PROJECT.

## many → 1

Use MERGE / REDUCE.

## many → many

Usually:
- relayout
- mapping
- staged representation handoff

Never blindly path-morph the whole group.

---

# 5. Source persistence law

Ask:

```text
Does source remain logically present after target appears?
```

## YES

Use:
```text
CLONE / PROJECT
```

Example:
input array stays while HashSet is built.

## NO

A shared-element move/handoff may be valid.

Example:
a card transfers from staging tray into a stack.

## DERIVED TARGET

Source can remain or recede after causal relation is shown.

Do not silently destroy it.

---

# 6. The transition classes

## T0 — STATE_CHANGE

Same geometry; meaning changes.

Examples:
- neutral → current
- unknown → hit
- unvisited → visited

Technique:
color / outline / opacity / label.

No morph needed.

---

## T1 — MOVE / RELAYOUT

Same entity, new position.

Examples:
- array reorder
- pointer movement
- matrix rotation cell movement
- heap node relayout

Technique:
existing tween / BezierFlight / explicit coordinates.

The shape itself normally stays unchanged.

---

## T2 — RESIZE / DEFORM

Same entity, same semantic role, geometry changes.

Examples:
- active window expands
- range bracket shrinks
- same region band grows

Technique:
interpolate numeric geometry.

Prefer direct geometry interpolation over SVG path morph if simpler.

---

## T3 — TRUE_PATH_MORPH

Same semantic path/shape identity, 1→1.

A true path morph requires:
- same semantic entity
- 1→1
- same route/topology class
- all intermediate geometry remains semantically valid
- no forbidden-region crossing
- no self-crossing / knots
- stable intended endpoints

If source and target routes lie on different sides of a fixed obstacle,
do NOT interpolate directly.
Use T4 ERASE_OLD / DRAW_NEW or an explicit reroute handoff.

Examples:
- same graph edge reroutes as node layout changes (staying in the same topological route class)
- same decision-gate stem bends after state resolution
- same outline deforms while preserving what it represents

Technique:
`SvgMorph` / `interpolatePath()`.

Required:
- exact source semantic ID
- exact target semantic ID
- identity relation = SAME
- same route/topology class
- all intermediate geometry remains semantically valid
- zero obstacle/forbidden-region intersection across all progress values (0% to 100%)
- manually reviewed path correspondence
- progress clamped 0..1

### Forbidden Negative Anti-Pattern: Obstacle Bisection
```text
upper route around obstacle → lower route around obstacle

CLASSIFICATION:
NOT T3 TRUE_PATH_MORPH

Reason:
Route/topology class changes and linear interpolation passes directly through the forbidden obstacle region.

Correct class:
T4 ERASE_OLD / DRAW_NEW or explicit semantic reroute handoff.
```

---

## T4 — DRAW_NEW / ERASE_OLD

Relations are different identities.

Examples:
- linked-list old edge removed; two new edges inserted
- new graph connection becomes valid
- predecessor query disappears; unrelated START relation appears

Technique:
RoughLine/RoughCurve now.
Exact SVG evolve/erase behavior is Phase 6.

---

## T5 — CLONE / PROJECT

Source persists; target is another representation.

Examples:
- array value → HashSet member
- HashSet value → conceptual number-line clone
- value → tree node while source view remains

Technique:
- source stays
- clone/echo is created
- clone travels
- destination accepts
- source remains stable

Use BezierFlight when travel is meaningful.

---

## T6 — MERGE / REDUCE

many → 1.

Canonical order:

```text
sources stay individually readable
→ causal relation appears
→ sources converge toward result region
→ result identity becomes explicit
→ source representations recede
→ result settles
```

Do not use `interpolatePath()` as a shortcut for many→1 identity.

---

## T7 — SPLIT / BRANCH

1 → many.

Canonical order:

```text
source focus
→ split reason
→ child/region origins appear
→ child identities separate
→ source becomes parent/history if needed
```

Do not make one SVG path magically become unrelated multiple objects.

---

## T8 — REPRESENTATION_HANDOFF

Same concept, new visual language.

Canonical order:

```text
source concept focused
→ mapping cue
→ target representation begins
→ one-to-one correspondences become visible
→ target stabilizes
→ source optionally recedes
```

If source remains pedagogically useful, keep it.

A handoff may contain:
- movement
- resize
- straightening
- fading
- labels

It is NOT automatically a literal shape morph.

---

## T9 — REPLACE / CUT

Different semantic objects.

Canonical order:
```text
source completes
→ hold
→ recede/erase
→ new object reveals
```

No morph.

---

# 7. True SVG path morph preflight

Before `SvgMorph`:

## Semantic preflight

- [ ] Same semantic entity?
- [ ] 1→1?
- [ ] Source does not need to persist as separate identity?
- [ ] Shape deformation itself helps understanding?

If any answer is no:
choose another transition class.

## Geometry preflight

- [ ] both paths valid SVG paths
- [ ] progress clamped 0..1
- [ ] same route/topology class (e.g. both remain on same side of any obstacle)
- [ ] all intermediate geometry remains semantically valid
- [ ] no forbidden-region or obstacle intersection across 0..1
- [ ] intended subpaths correspond
- [ ] same coordinate/viewBox strategy is understood
- [ ] no unexpected self-crossing at 25%, 50%, 75%
- [ ] source frame and target frame exactly match expected endpoints

For production morphs, render:
```text
0%
25%
50%
75%
100%
```

A technically valid path can still be visually misleading.

---

# 8. Text rule

Do not morph normal teaching text glyphs.

For changing text inside a persistent container:
- rewrite
- crossfade
- type/change characters
- replace after a hold

Example:
```text
query bubble remains
"-2 ?" → "NO"
```

The bubble may persist.
The text is content, not path identity.

---

# 9. Color rule during morphs

Color semantics follow state, not geometry progress.

Do not mix:
```text
50% green because geometry is 50% complete
```

unless the algorithmic state itself is in transition.

Default:
- geometry may morph
- state color changes at the semantic decision anchor

---

# 10. Array rules

## Reordering / sorting

Same values:
```text
MOVE / SWAP
```

Never shape-morph cards into their new order.

## Sort Colors

Future rule:
- values/cards preserve identity
- regions expand/shrink
- pointers move
- swaps exchange values
- category color is state/identity styling

Do not morph 0/1/2 cards into each other.

## Prefix/suffix representations

If source array remains:
use PROJECT / DERIVED.

If source is intentionally replaced:
use REPRESENTATION HANDOFF with correspondence.

---

# 11. HashSet / HashMap rules

## Building a set/map from input

Input remains conceptually available.

Default:
```text
CLONE / PROJECT
```

## Duplicate insertion

Existing stored member remains unchanged.

Incoming duplicate:
```text
arrives / queries
→ existing member reacts
→ "already exists"
→ incoming echo retracts / dissipates
```

Do not visually fuse identities as if stored data changed.

## Frequency map

Count is DERIVED from occurrences.

Show causal contributions before final count settles.

---

# 12. Linked-list rules

## Node move
MOVE.

## Insert between A and B

Do NOT morph edge A→B into two edges.

Use:
```text
erase/retract A→B
→ insert node X
→ draw A→X
→ draw X→B
```

## Remove node

Show edge ownership changes explicitly.

No disappearing node before relation changes.

---

# 13. Tree / heap rules

## Array heap → tree heap

Values can be the same semantic entities.

If both views remain:
PROJECT.

If array view is replaced:
REPRESENTATION HANDOFF.

Parent-child edges are new relations:
DRAW_NEW.

## Tree rotation

Nodes remain nodes:
MOVE / RELAYOUT.

Edges change identity:
ERASE_OLD / DRAW_NEW.

Do not path-morph old parent-child relation into a different relation unless the edge semantic identity truly persists.

---

# 14. Graph rules

## Node relayout

Nodes:
MOVE.

Same edge between same endpoints:
path reroute may use TRUE_PATH_MORPH.

Different endpoint:
new edge identity.
ERASE/DRAW.

## Adjacency list → graph

REPRESENTATION HANDOFF.

Every node/edge mapping must be visible or inferable.

---

# 15. Interval rules

## Two overlapping intervals → merged interval

This is:
```text
many → 1
DERIVED/MERGED
```

Use MERGE choreography.

Do not path-morph one interval and silently swallow the other.

---

# 16. DP / recursion rules

Repeated recursion nodes may represent the SAME subproblem occurrence-wise but become ONE memo state.

That is:
```text
many visual occurrences
→ one memo identity
```

Use MERGE/REDUCE with provenance.

Do not make the whole recursion tree liquefy into a table.

A few representative correspondence paths are better.

---

# 17. Bit rules

Integer → bit row:
REPRESENTATION HANDOFF.

If integer remains visible:
PROJECT.

Bit changes:
STATE_CHANGE per bit.

Do not glyph-morph decimal characters into binary characters.

---

# 18. Complexity graph rule

Different complexity classes are different concepts/curves.

Default:
draw/crossfade separate curves.

Do not morph O(n²) into O(n log n) unless the lesson specifically teaches a parameterized family where one mathematical object is changing.

---

# 19. Morph timing

Timing still comes from:

```text
exact audio
→ semantic anchor
→ Motion Bible cause/reaction/hold
→ morph window
```

Morphing cannot begin before its cause.

A morph is part of the Motion Bible's MOVE/MUTATION stage.

---

# 20. Morph density

Only one primary identity transformation at a time.

If:
- three cards move
- one edge morphs
- labels rewrite
- container changes shape

all simultaneously,
the learner cannot track identity.

Stage the events.

---

# 21. Morph Contract required in scene plans

For every non-trivial transformation:

```text
MORPH ID:
SOURCE:
TARGET:
SOURCE SEMANTIC ID:
TARGET SEMANTIC ID:
IDENTITY RELATION:
CARDINALITY:
SOURCE PERSISTS:
TRANSITION CLASS:
WHY THIS CLASS:
AUDIO ANCHOR:
TRACE STEP:
MECHANIC:
FORBIDDEN ALTERNATIVE:
```

Example:

```text
MORPH ID: SET-BUILD-2
SOURCE: input card value 2
TARGET: set member value 2
SOURCE SEMANTIC ID: input[4]
TARGET SEMANTIC ID: set:value:2
IDENTITY RELATION: COPY / DERIVED REPRESENTATION
CARDINALITY: 1→1
SOURCE PERSISTS: YES
TRANSITION CLASS: T5 CLONE / PROJECT
WHY: set construction does not consume input
MECHANIC: clone + BezierFlight
FORBIDDEN: moving original card out of the array
```

---

# 22. Anti-slop rules

Never:

- morph because “it looks premium”
- liquid-morph whole scenes
- morph unrelated icons
- morph text into shapes
- consume a source that logically still exists
- fuse duplicates as if set membership mutates the stored value
- morph one old edge into two new edges
- use shape morph for array reorder
- hide many→one semantics inside one SVG interpolation
- morph complexity classes just for visual flair
- skip the identity contract
- let Antigravity invent entity identity

---

# 23. QA questions

For every transformation:

1. Is source and target identity explicitly named?
2. Same, copy, derived, merge, split, representation, or replacement?
3. What is cardinality?
4. Does source persist?
5. Could MOVE communicate this more truthfully?
6. Could DRAW/ERASE communicate relation changes more truthfully?
7. If true path morph: is the path the SAME semantic object?
8. Does midpoint geometry remain readable?
9. Does state color remain semantically correct?
10. Is the learner able to point to “where the old thing went”?

If question 10 cannot be answered, redesign the transition.
