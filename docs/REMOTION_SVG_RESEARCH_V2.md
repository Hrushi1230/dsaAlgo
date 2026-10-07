# Foundation V2 — Phase 6 Research Basis
# SVG Animation in Remotion + Current @dsa/kit Audit

**Project:** Code With Animation — Long-form DSA  
**Phase:** 06  
**Scope:** SVG drawing, erasing, path metrics, path-following markers, arrowheads, compound paths, dashed semantics, and deterministic chalk-path rendering.

This document separates:
1. official Remotion capabilities,
2. verified current project behavior,
3. Code With Animation SVG design decisions.

A course-specific design rule must never be presented as a Remotion framework rule.

---

# A. Runtime/version boundary

The repository was verified after Phase 5 as:

```text
remotion            4.0.507
@remotion/paths     4.0.507
```

Current online official Remotion Agent Skills/docs may be newer.

## Rule

Antigravity must inspect the installed local APIs before implementation.

Do NOT:
- upgrade Remotion
- upgrade @remotion/paths
- copy v5-only behavior into the v4 project

A concrete compatibility example from current official docs:

`getPointAtLength()` and `getTangentAtLength()` changed out-of-range behavior in Remotion 5.0.
In Remotion 4.0 they return the endpoint/end tangent for lengths past the path.
Therefore V2 always clamps requested path length into `[0, getLength(path)]` and never relies on out-of-range behavior.

---

# B. Official Remotion research

## B1. `evolvePath(progress, path)`

Official Remotion docs:
- part of `@remotion/paths`
- animates a valid SVG path from invisible (`progress=0`) to fully drawn (`progress=1`)
- returns:
  - `strokeDasharray`
  - `strokeDashoffset`
- values outside 0..1 have special behavior: above 1 begins devolving from the start; below 0 evolves from the end

### Course rule

For normal production DRAW/ERASE operations:
```text
ALWAYS clamp progress to 0..1 before evolvePath()
```

Do not use accidental negative/>1 behavior for semantic animation.

---

## B2. `getLength(path)`

Official docs:
- returns exact SVG path length
- throws on malformed path data

### Course rule

No new V2 path-draw primitive may use:
- guessed line length
- magic dash length
- width-based approximation
- hard-coded `100`

Exact path length is the source of truth.

---

## B3. `getPointAtLength(path, length)`

Official docs:
- returns an `{x, y}` point on a path
- length should be between 0 and total path length

### Course use

This is the correct primitive for:
- a probe moving along a drawn relation
- a tracer dot
- a current draw-tip marker
- labeling the active location on a route

Clamp length first.

---

## B4. `getTangentAtLength(path, length)`

Official docs:
- returns tangent `{x, y}` at a point on a path

### Course use

This is the correct primitive for:
- orienting a moving arrowhead
- orienting a tracer marker
- rotating a small direction glyph along a curve

Angle:
```text
atan2(tangent.y, tangent.x)
```

Do not estimate direction from arbitrary control points if exact path tangent is available.

---

## B5. `reversePath(path)`

Official `@remotion/paths` exposes path reversal.

### Course use

Drawing direction is semantic.

If a relation must visually draw:
```text
B → A
```
but the authored SVG path runs:
```text
A → B
```
reverse the path instead of trying to fake direction with negative progress.

---

## B6. `getSubpaths(path)`

Official `@remotion/paths` exposes compound SVG subpaths.

### Course rule

If subpaths represent independent semantic strokes:
- split them
- control their order explicitly

Do not treat a compound icon/diagram as one opaque draw animation if the order matters pedagogically.

---

## B7. `interpolatePath()`

Already governed by Phase 5 Morphing Bible.

Phase 6 does NOT redefine morph semantics.

Use `interpolatePath()` only through the Phase 5 TRUE_PATH_MORPH contract.

---

# C. Official Remotion Agent Skill guidance

Current official Remotion markup guidance still requires:
- `useCurrentFrame()` / explicit frame-driven animation
- `interpolate()`
- clamp when bounded behavior is required
- no CSS `transition`
- no CSS `animation`
- no Tailwind animation classes for rendered motion

### Phase 6 consequence

SVG progress is derived from:
```text
exact audio anchor
→ explicit frame range
→ interpolate()
→ clamped scalar progress
→ SVG primitive
```

No browser-clock SVG animation.
No SMIL animation.
No CSS keyframe animation.

---

# D. Verified current @dsa/kit technical debt

The following uploaded/shared components prove current SVG behavior.

## D1. `RoughLine.tsx`

Current implementation:
- Rough.js deterministic seed
- manual `strokeDasharray`
- approximate `estimateLen()`
- line length multiplied by `1.6 + 40`
- arrowhead uses a fixed dash length `60`
- main shaft uses 70% of duration
- head uses final 30%

### Finding

The semantic sequencing is useful:
```text
shaft first
→ arrowhead last
```

The dash-length approximation is V1 technical debt.

---

## D2. `RoughCurve.tsx`

Current implementation:
- Rough.js deterministic seed
- estimates total length by point-to-point distances
- multiplies by `1.3 + 50`

### Finding

This is not exact path length because Rough.js generates the final SVG path after bowing/roughness.

V2 should use exact generated path `d` length when migrated.

---

## D3. `RoughBox.tsx`

Current implementation:
- deterministic Rough.js rectangle
- uses `Math.max(width, height) * 1.2` as stroke dash length
- fill/fill-like paths are opacity animated

### Finding

The outline estimate is not exact.

Also:
stroke draw and fill reveal are different semantic operations and should remain distinct.

---

## D4. `ChalkIcons.tsx`

Current implementation:
- parent `<svg>` receives:
  - `strokeDasharray: 100`
  - `strokeDashoffset`
- icons contain mixed:
  - `<path>`
  - `<line>`
  - `<circle>`
  - filled dots
  - intentionally dashed elements

### Finding

One global magic dash length cannot correctly represent every child geometry.

Filled primitives also do not obey stroke evolution semantics.

This is Phase 8 migration debt after Phase 6 establishes the canonical SVG primitives.

---

## D5. `SvgMorph.tsx`

Phase 5 already reclassified this as:
```text
low-level SAME-identity geometry interpolation
```

Do not turn it into a universal SVG animation component.

---

## D6. `BezierFlight.tsx`

This moves an object through 2D space using the course motion system.

It is NOT SVG path drawing.

Phase 6 must preserve the distinction:

```text
DRAW a relation
!=
MOVE an object
```

---

# E. Architectural conclusion

Do NOT mass-refactor every SVG/rough component in Phase 6.

Phase 6 should:

1. define the canonical SVG animation contract;
2. add exact low-level V2 path helpers/primitives;
3. prove them;
4. audit existing V1 components;
5. leave broad component migration to Phase 8.

This keeps:
```text
Phase 6 = mechanics + contract
Phase 8 = shared-kit migration/refactor
```
