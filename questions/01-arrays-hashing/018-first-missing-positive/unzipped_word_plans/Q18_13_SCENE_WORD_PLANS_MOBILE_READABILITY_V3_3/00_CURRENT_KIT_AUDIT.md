# Q18 — Current Kit API Audit for Antigravity

**Repository:** `Hrushi1230/dsaAlgo`, default branch `main`. Verified through GitHub during current plan generation. Each exact SHA describes the source actually examined. Recheck after source revisions.

| Kit path | Verified SHA | Role | Correctness restriction |
|---|---|---|---|
| `kit/components/array/ArrayTrackV2.tsx` | `7a79fd740c5e00dae26644357e18fc5f8b4fbf62` | fixed indexed array slots, `elements`, `pointers`, `swap{idxA,idxB,progress}`, widths/gaps | slot and index never move; only values swap |
| `kit/components/array/PointerLaneV2.tsx` | `84ebf3e0994d409766de351033727268c29c9e67` | `pointers:[{id,label,index,color?,lane?}]`, `placement` | arrow outside slots, at actual narrated index |
| `kit/components/array/PartitionBandV2.tsx` | `ef473b8be815ddbb2ed846e059f61e6fc10bf775` | only if true contiguous range semantics | do not invent algorithm partition |
| `kit/components/ChalkText.tsx` | `0b95e838f1fd47543395a9585e6e94f57d566679` | direct chalk text, `font:"hand"/"mono"` | `startFrame` is required and must be resolved from exact sync |
| `kit/components/RoughLine.tsx` | `7bd1c4f791be7a4dd83471f82658d99876f28550` | chalk compare arrow/underline | `shape` union with line/arrow/circle; no fabricated relation |
| `kit/components/RoughBox.tsx` | `4ce0e829e76898f12b103b9ad1f5644ff31eee80` | transparent chalk focus | omit `fill` for board-native look |
| `kit/components/RoughCurve.tsx` | `24ab932fbce4fbd3d4c3d85a34178566b83a8bb5` | unordered HashSet boundary/meaningful math curve | `points:[x,y][]`, no fixed frame duration |
| `kit/components/HashSetTable.tsx` | `e4f8c8223ca16d0e50e6fc04e81da2479e00d2e8` | currently legacy indexed bucket UI | DO NOT USE unchanged for conceptual set; dark table and false ordering |
| `kit/components/ChalkCodeEditorV2.tsx` | `0c96d4ba9a7383c991ed2760f535b23c314bcc24` | source code line props exist | DO NOT USE unchanged: dark IDE UI; use `ChalkText` for board-native code |
| `kit/components/MasterRoadmapV2.tsx` | `4ef966c5bad59f0b028f02ed73222b5727eb908e` | full 1920×1080 roadmap in Scene01/13 | do not nest inside UI panel |
| `kit/components/SceneEdgeTitle.tsx` | `9469cf12921bcce06f541c188a1db14c48ff8cb8` | small top edge label if needed | not over hero |
| `kit/components/Captions.tsx` | `2306c638f1dd9ccfce23df93538266577254d5c2` | exact word captions after MP3 | no invented words/timings |
| `kit/components/BezierFlight.tsx` | `0a85851855498081419278ab29537d9e8a98741d` | source-to-target move only if needed | prefer native `ArrayTrackV2.swap` for swaps |
| `kit/components/CountUp.tsx` | `45eb43def07039542cd4287cf3af6d938d58dd7d` | numeric counts if actually narrated | frame steps from real sync only |
| `kit/lib/theme.ts` | `dbbff9927cbdca7b4f911ed033673acc51e61403` | theme tokens, fonts | no raw new palette |

## Data-structure visual authority

- `docs/00_PHASE7_COMPLETE_KIT_DRIVEN_VISUAL_GRAMMAR.md`: semantic structure → kit primitives → authored geometry. Green chalkboard, no dark cards.
- `docs/structures/01-array-sequence.md`: fixed slots and indices; only values move; pointers live outside.
- `docs/structures/02-hash-set.md`: unordered unique membership. Never show physical bucket index, sorted order or pretend traversal order is HashSet internal order.
- `docs/DESIGN_BIBLE_V2.md`, `docs/MOTION_BIBLE_V2.md`, `docs/MORPHING_BIBLE_V2.md`, `docs/SVG_ANIMATION_BIBLE_V2.md`: current canonical design/motion rules.
- The old `docs/DATA_STRUCTURE_VISUAL_GRAMMAR_V2.md` explicitly announces it is **superseded**. Do not route new implementation decisions through that legacy document.
- Bundled `dsa-scene-planning_SKILL_V3_2_BOARD_NATIVE.md` controls all pre-audio semantics and the strict non-roadmap no-black-card rule.

**Component choice:** REUSE existing atomic kit primitives. The unordered set is question-local orchestration of `ChalkText` + round chalk member outlines and `RoughCurve` field. The code visual uses real `ChalkText` in monospace directly on green; no shared extension is approved or requested. If real renderer capability is inadequate, stop and audit rather than improvise.
