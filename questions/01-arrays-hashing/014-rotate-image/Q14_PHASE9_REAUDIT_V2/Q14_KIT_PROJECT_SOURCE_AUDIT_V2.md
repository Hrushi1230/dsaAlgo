# Q14 — KIT / PROJECT SOURCE AUDIT V2

## Matrix/Grid

Authoritative supplied grammar explicitly states for Rotate Image:

```text
CELL POSITION stays fixed
VALUE moves
(r,c) → (c,n-1-r)
```

Verified mapping:

```text
cell            RoughBox
row/column text ChalkText
current         theme.pivot
query           theme.cyan
confirmed       theme.good
blocked         theme.warn + second cue
value movement  BezierFlight
```

Thin wrappers such as `MatrixGrid` are allowed later, but the actual API must be read from the repo.

## Actual component checks

### RoughBox.tsx
Verified props include:
`width`, `height`, optional `startFrame`, `durationInFrames`, `stroke`, `fill`, `seed`, `strokeWidth`.

### ChalkText.tsx
Verified:
`startFrame`, optional `charFrames`, font settings, cursor, style.

Default `charFrames` exists, so sync-critical writing must override it from exact sync timing.

### BezierFlight.tsx
Verified:
`from`, `to`, `peak`, `start`, `dur`, optional `trail`, `children`.

Valid for Rotate Image value movement.

Coordinates must come from reusable matrix geometry.

### RoughLine / RoughCurve
Verified low-level relation/drawing primitives.
Default draw durations exist and are not audio authority.

### Captions.tsx
Consumes exact `{word,start,end}` sync data.

### MiniGraph.tsx
Verified to be sort-specific:
`sortType = heap | quick | merge`.

Therefore:
```text
DO NOT use MiniGraph as Q14 generic complexity graph.
```

Use an actual generic graph if present in repo, otherwise extend/create a reusable kit-level graph from RoughLine/RoughCurve.

### audioSync.ts
Verified:
- FPS 30;
- `Math.round` for start/end frame conversion;
- prefix + occurrence lookup.

Project V2 roadmap already flags repeated-word ambiguity.

Q14 uses stable beat IDs + one-time phrase resolution to remove runtime text-guessing.

## Still unresolved

```text
MatrixGrid wrapper API
roadmap component API
production code-editor API
generic complexity graph API
```

Implementation must inspect repo. No props may be invented.
