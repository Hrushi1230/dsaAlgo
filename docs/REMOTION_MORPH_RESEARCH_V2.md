# Foundation V2 — Phase 5 Research Basis
# Morphing in Remotion + Current @dsa/kit Audit

**Project:** Code With Animation — Long-form DSA  
**Phase:** 05  
**Purpose:** Define when semantic continuity should use morphing, movement, cloning, merge/split choreography, or replacement.

This document deliberately separates:
1. verified Remotion capabilities,
2. verified current project capabilities,
3. Code With Animation semantic rules.

A course-specific rule is NOT presented as an official Remotion rule.

---

# A. Source hierarchy

Use sources in this order:

1. current local DsaAlgo repository after Phases 1–4
2. installed Remotion 4.0.507 APIs and installed official Remotion skills
3. current official Remotion docs / official Remotion skills for research
4. prior approved scene plans
5. older uploaded component snapshots only as historical evidence

Do not overwrite newer local changes with an older uploaded file.

---

# B. Verified current Remotion / project versions

From the completed Phase 4 verification:

```text
remotion                     4.0.507
@remotion/cli               4.0.507
@remotion/paths             4.0.507
@remotion/transitions       4.0.507
installed official skills   4.0.507
```

Current online official Remotion Agent Skills are newer (`4.0.523` at research time).

## Phase 5 rule

Do NOT upgrade Remotion or skills during this phase.

Use installed `4.0.507` as runtime truth.
Use newer official docs only to understand current concepts, then verify any API against the installed project before adopting it.

---

# C. Official Remotion capability research

## C1. `interpolatePath()`

Official Remotion docs state that:

```text
@remotion/paths interpolatePath(value, firstPath, secondPath)
```

interpolates between two valid SVG path strings.

Verified behavior:
- `value = 0` returns the first path
- `value = 1` returns the second path
- intermediate values return interpolated geometry
- values outside 0..1 are also interpolated/extrapolated
- current implementation parses and reduces path instructions, then interpolates instructions

### Course implication

For course morphs:
- drive `value` from an explicitly clamped Remotion `interpolate()`
- do not let normal production morph progress overshoot 0..1
- `interpolatePath()` solves GEOMETRY interpolation, not SEMANTIC identity

---

## C2. `normalizePath()`

Official docs:
- converts relative coordinates to absolute coordinates
- throws for malformed path data

### Important limitation

Normalization does not prove that two paths SHOULD morph.

It is a syntax/coordinate normalization tool, not a semantic compatibility validator.

---

## C3. `getSubpaths()`

Official docs:
- returns individual SVG subpaths
- each `M`/`m` begins a new subpath
- relative `m` is converted to `M`

### Course use

Before a production path morph, we may inspect subpaths as a preflight signal.

Project rule:
if source and target have different conceptual subpath correspondence, reject automatic path morph unless manually mapped and visually reviewed.

This is our stricter course rule, not a documented Remotion limitation.

---

## C4. `getBoundingBox()`, `translatePath()`, `scalePath()`

Official `@remotion/paths` exposes utilities for:
- bounding boxes
- path translation
- path scaling

### Course use

These can help place two versions of the SAME semantic path in a compatible coordinate system.

Do not use geometric alignment as justification for morphing unrelated things.

---

## C5. `evolvePath()`

Official docs:
- animates an SVG path from invisible to full length
- returns `strokeDasharray` and `strokeDashoffset`

This is a DRAW/ERASE concept, not a shape-morph concept.

### Course implication

If a relation is NEW:
prefer DRAW_NEW / ERASE_OLD rather than morphing an unrelated prior relation into it.

Detailed SVG drawing implementation remains Phase 6.

---

## C6. Current official Remotion skills

Current official Remotion Agent Skills state:
- rendered animation should remain frame-driven
- `useCurrentFrame()` + `interpolate()` are the standard explicit timing model
- CSS transition / CSS animation are not the rendered-motion model
- official skills include `remotion-best-practices`, `remotion-markup`, `remotion-docs`, etc.

### Phase 5 consequence

Morph progress remains:
```text
exact audio anchor
→ explicit frame range
→ interpolate()
→ geometry/position/opacity
```

No browser-driven morph animation.

---

# D. Verified current @dsa/kit morph / continuity capabilities

## D1. `SvgMorph`

Current project has an `SvgMorph` low-level component built around:

```text
useCurrentFrame()
interpolate()
@remotion/paths interpolatePath()
```

This proves SVG path interpolation already exists in the kit.

### Important Phase 5 finding

`SvgMorph` is a GEOMETRY primitive.

It currently cannot answer:
- Are these the same semantic entity?
- Does the source persist?
- Is this 1→1, 1→many, or many→1?
- Is a copy being created?
- Is a representation merely being replaced?

Those decisions must come from the Morphing Bible / scene plan.

---

## D2. `BezierFlight`

Current project has `BezierFlight`:
- exact frame-driven progress
- `tween()`
- `arcFlight()`
- source and destination coordinates
- optional trail

This is already the correct family for:
- same-object transfer
- clone/projection transfer
- insertion/query travel

Do not replace movement with SVG morph just because both are visually smooth.

---

## D3. `motion.ts`

Current motion helpers already include:

```text
quadBezier()
arcFlight()
recedeOut()
riseIn()
```

Therefore Phase 5 does not need a new movement engine.

---

## D4. Rough path primitives

Current project has:
- `RoughLine`
- `RoughCurve`
- `RoughBox`

They use deterministic Rough.js paths and draw-on behavior.

Their current path-length estimation is not being redesigned in Phase 5.
Exact SVG draw length / evolve-path decisions remain Phase 6.

---

# E. Audit of existing scene-plan morph language

Existing plans contain valuable ideas, but some use the word “morph” too broadly.

These cases must be corrected by the new semantic rules.

## E1. Array → HashSet

Existing plan language:
```text
raw array
→ values fly into hash field
```

Correct semantic question:
Does the input array cease to exist?

Usually, no.

For set construction:
```text
source value remains input
+
a derived/copy representation enters the set
```

Therefore default treatment:
**CLONE / PROJECT**, not move-away consumption.

---

## E2. Duplicate `2` “merges” into existing set value

A HashSet duplicate does NOT mean two value identities become one physical value.

Correct semantic treatment:
```text
existing set member remains stable
incoming duplicate reaches/checks it
“already exists” resolves
incoming duplicate echo compresses/retracts/dissipates
```

Do not visually imply that the stored value itself was changed by fusion.

---

## E3. Sorted array → original order

Same values, different positions.

Correct:
**MOVE / RELAYOUT**

Not:
SVG shape morph.

Cards keep identity while positions change.

---

## E4. Target bubble text changes

Example:
```text
NEXT = 0
```

The bubble/container can persist.

Its text content should normally:
- replace
- crossfade
- rewrite

Do not morph text glyphs as arbitrary SVG paths.

---

## E5. Query line → START gate

This can only be a true path morph if the plan explicitly defines ONE persistent semantic object, for example:

```text
DecisionGate:
query state
→ resolved-start state
```

If they are separate relations:
```text
erase query relation
→ draw START relation
```

Do not infer identity just to get a premium visual.

---

## E6. potential START stem → SKIP rail

Allowed only if both are visual states of one persistent gate object.

If not explicitly modeled that way:
erase/retract the stem and draw the skip rail.

---

## E7. Trace geometry → code-guide lines

This is not literal object identity.

It is a pedagogical **REPRESENTATION HANDOFF**.

Allowed only if:
- every visual concept maps one-to-one to an implementation concept
- mapping is shown clearly
- no algorithm state is changed by the transition

Example:
```text
predecessor check → code guide 1
valid-start gate  → code guide 2
forward walk      → code guide 3
```

This can visually straighten/relayout as a semantic bridge.

It must not imply that a HashSet physically “turns into Python code”.

---

# F. Research conclusion

The project already has enough low-level tools.

Phase 5 should NOT build a flashy general morph engine.

The real missing layer is:

```text
SEMANTIC IDENTITY CONTRACT
→ choose transition class
→ choose existing motion/path primitive
→ exact-audio timing
→ visual proof
```

That is the purpose of `MORPHING_BIBLE_V2.md`.
