# Q16 — Kit / Visual Source Decisions V3

## Authority

Actual current repository source was inspected before this plan was rebuilt.

## REUSE — verified real kit files

```text
kit/components/array/ArrayTrackV2.tsx
kit/components/array/ArraySlotV2.tsx
kit/components/array/ArrayValueV2.tsx
kit/components/array/ArrayIndexRowV2.tsx
kit/components/array/PointerLaneV2.tsx
kit/components/array/PartitionBandV2.tsx
kit/components/ChalkCodeEditorV2.tsx
kit/components/MasterRoadmapV2.tsx
kit/components/RoughCurve.tsx
kit/components/RoughLine.tsx
kit/components/RoughBox.tsx
kit/components/CountUp.tsx
kit/components/Captions.tsx
kit/components/BezierFlight.tsx
kit/components/SceneEdgeTitle.tsx
kit/components/SceneLabelStrip.tsx
kit/lib/theme.ts
kit/lib/anim.ts
kit/lib/motion.ts
```

## DO NOT USE AS-IS

### `HashMapTable.tsx`
The verified current component hard-codes index semantics (`KEY (num)` / `VAL (index)` and `idx ...`). Q16 needs `PREFIX SUM → FREQUENCY`. Using it unchanged would teach false semantics.

### `MiniGraph.tsx`
The supplied graph is sorting-specific and centered on `O(n log n)`. It is forbidden for Q16 complexity.

## CREATE AT KIT LEVEL

### `FrequencyMapTableV2`
Create a reusable kit-level frequency-map representation only because repository audit found no semantically correct existing frequency-map component.

Semantic contract:
```text
KEY = prefix sum
VALUE = frequency of EARLIER prefix positions
row order is not semantic
query highlights exact key
hit/miss is explicit
frequency update happens only after narration authorizes insert/update
```

It must be built in the course chalkboard language from verified kit primitives, not as a scene-local SaaS table.

### `ComplexityGrowthGraphV2`
Create a reusable kit-level mathematical growth graph because the current `MiniGraph` is not generic enough.

It must use verified chalk primitives (`RoughLine`, `RoughCurve`, `ChalkText`) and theme tokens. Required growth classes for Q16:
```text
O(1)   flat
O(n)   linear
O(n²)  quadratic
```
Curves are mathematical growth classes, not benchmark measurements. No invented operation numbers.

## Spatial / collision law

```text
Canvas               1920 × 1080 authoring space
Top metadata/title    Y 28–210
Teaching framing      Y 210–280
Hero stage            Y 300–780
Feedback/callout      Y 790–940 only when needed
Captions              Y 960–1040
```

Default composition:
```text
ONE center-stage hero
+ at most ONE direct support object
+ captions
```

When a truthful algorithm state requires both array and map:
```text
left / center-left  = ArrayTrackV2
right / center-right = FrequencyMapTableV2
minimum clear gutter = 64px
no object crosses the center gutter
no floating card overlays either structure
```

Array collision requirements:
- Fixed slots and fixed indices.
- Pointer lanes remain outside slot/index geometry.
- Any callout below `ArrayTrackV2` starts only after pointer/index clearance.
- Partition/range bands never cover values or captions.

## No-freeze rule
There is no decorative idle freeze. A stable hold is allowed only when exact final audio contains a real comprehension pause or the narration is actively explaining the current static state. Phase 9 never invents hold duration.

## No-spoiler rule
Future answer, future map frequency, future code line, future curve, next roadmap state, and final result remain absent until their exact narration anchor.
