# REUSE / EXTEND / CREATE Implementation Delta
**Question:** 012 · Next Permutation (LeetCode 31)  
**Scenes:** `01-intro-roadmap` & `02-understand`  
**Pipeline Stage:** Stage 14/16 — Planning & Antigravity Implementation  
**Audit Basis:** Codebase audit of `@dsa/kit`, `MasterRoadmapV2.tsx`, `ProblemOpenerShell.tsx`, `ArrayTrackV2.tsx`, `ArrayValueV2.tsx`, `RoughLine.tsx`, `RoughBox.tsx`  

---

## 1. Scene 01 (`01-intro-roadmap`) Delta

### REUSE (Use Unchanged)
| Component / Utility | Source Path | Role in Scene 01 |
|---|---|---|
| **ChalkboardBackground** | `@dsa/kit/lib/chalk` | Deep chalkboard texture `#18523d` canvas base |
| **ChalkFilters** | `@dsa/kit/lib/chalk` | SVG displacement filters for realistic chalk strokes |
| **theme** | `@dsa/kit/lib/theme` | Course palette tokens (`boardBg`, `chalkText`, `chalkDim`, `pivot`, `good`, `warn`, `cyan`) |
| **fonts** | `@dsa/kit/lib/theme` | Typography families (Outfit, Fira Code, Patrick Hand) |
| **EASE, fadeIn, pop** | `@dsa/kit/lib/anim` | Deterministic frame interpolation curves |
| **RoughBox** | `@dsa/kit/components/RoughBox` | Chalk borders for metadata badges and focus outlines |
| **RoughLine** | `@dsa/kit/components/RoughLine` | Underline emphasis under `DSA PATTERN ROADMAP` and `Next Permutation` |
| **ChalkDust** | `@dsa/kit/components/ChalkDust` | Subtle ambient background particle field |
| **Captions** | `@dsa/kit/components/Captions` | Word-level karaoke-synced caption bar at optical bottom (`Y: 960..1040`) |
| **audioSyncV2** | `@dsa/kit/lib/audioSyncV2` | Exact word sync interpretation and anchor resolution |
| **MasterRoadmapV2** | `@dsa/kit/components/MasterRoadmapV2` | Authoritative Master Roadmap component implementing the exact 3-column layout |
| **ProblemOpenerShell** | `@dsa/kit/components/ProblemOpenerShell` | Target component for Beat L (`S01_UNDERSTAND`) representation handoff |
| **PATTERNS_DATA** | `@dsa/kit/lib/roadmapData` | Authoritative 227-problem / 19-pattern curriculum dataset |

### EXTEND (Minimal Extension)
| Item | Proposed Location | Extension Rationale |
|---|---|---|
| **`MasterRoadmapV2` Props Rig** | `src/Scene01Intro.tsx` | Wire roadmap props to exact Q12 sync anchors |
| **Representation Handoff Interpolator** | `src/Scene01Intro.tsx` | Smoothly glide Row Q012 header into top `ProblemOpenerShell` header position |

### CREATE (Scene 01 Specific Assets)
- `sync/01-intro-roadmap.anchors.json`
- `plans/01-intro-roadmap_FRAMEWISE_PLAN.md`
- `plans/01-intro-roadmap_FRAME_QA_CHECKLIST.md`
- `src/Scene01Intro.tsx`

---

## 2. Scene 02 (`02-understand`) Delta

### REUSE (Use Unchanged)
| Component / Utility | Source Path | Role in Scene 02 |
|---|---|---|
| **ProblemOpenerShell** | `@dsa/kit/components/ProblemOpenerShell` | Pinned at top of canvas (`Y: 28..124`) for visual continuity from Scene 01 |
| **ArrayTrackV2** | `@dsa/kit/components/array/ArrayTrackV2` | Fixed 7-slot array track (`width: 98px`, `gap: 16px`, indices `0..6`) |
| **ArrayValueV2** | `@dsa/kit/components/array/ArrayValueV2` | Rendered values dropping into slots on exact word cues |
| **ChalkboardBackground** | `@dsa/kit/lib/chalk` | Deep chalkboard texture `#18523d` canvas base |
| **ChalkFilters** | `@dsa/kit/lib/chalk` | SVG displacement filters for realistic chalk strokes |
| **theme** | `@dsa/kit/lib/theme` | Course palette tokens (`boardBg`, `chalkText`, `chalkDim`, `pivot`, `good`, `warn`, `cyan`) |
| **fonts** | `@dsa/kit/lib/theme` | Typography families (`sans`, `mono`, `hand`, `display`) |
| **RoughBox** | `@dsa/kit/components/RoughBox` | Hand-drawn chalk borders for formula and definition cards |
| **RoughLine** | `@dsa/kit/components/RoughLine` | Axis arrows, underlines, and strikethroughs |
| **ChalkDust** | `@dsa/kit/components/ChalkDust` | Subtle ambient background particle field |
| **Captions** | `@dsa/kit/components/Captions` | Karaoke caption bar anchored at bottom |

### EXTEND (Minimal Extension)
| Item | Proposed Location | Extension Rationale |
|---|---|---|
| **Stage & Camera Rig** | `src/Scene02Understand.tsx` | Four distinct stage containers with camera zoom/pan interpolation matching pedagogical anchors: Stage 1 (Permutation definition), Stage 2 (Lexicographical ordering), Stage 3 (Master array assembly), Stage 4 (Edge cases & complexity bridge) |
| **Array Value Drop Orchestrator** | `src/Scene02Understand.tsx` | Custom `renderValue` callback feeding `ArrayValueV2` with pop and drop physics timed to discrete token IDs `W0059..W0075` |

### CREATE (Scene 02 Specific Assets)
- `sync/02-understand.anchors.json`: 23 semantic anchors across 2,075 frames
- `SYNC_AUDIT_SCENE02.md`: Word-level sync mapping and duplicate word disambiguation
- `plans/02-understand_FRAMEWISE_PLAN.md`: Full 19-field framewise specification
- `plans/02-understand_FRAME_QA_CHECKLIST.md`: 24 visual checkpoints & 9 invariants
- `src/Scene02Understand.tsx`: Remotion implementation composition

---

## 3. Scene 03 (`03-brute-trace`) Delta

### REUSE (Use Unchanged)
| Component / Utility | Source Path | Role in Scene 03 |
|---|---|---|
| **ProblemOpenerShell** | `@dsa/kit/components/ProblemOpenerShell` | Pinned header (`Y: 28..124`) with `APPROACH 1 · BRUTE FORCE` |
| **ArrayTrackV2** | `@dsa/kit/components/array/ArrayTrackV2` | Fixed 3-slot array track (`width: 96px`, `gap: 16px`, indices `0..2`) |
| **ArrayValueV2** | `@dsa/kit/components/array/ArrayValueV2` | Rendered values (`1`, `2`, `3`) dropping into slots on exact cues |
| **ChalkboardBackground** | `@dsa/kit/lib/chalk` | Deep chalkboard texture `#18523d` canvas base |
| **ChalkFilters** | `@dsa/kit/lib/chalk` | SVG displacement filters for realistic chalk strokes |
| **theme** | `@dsa/kit/lib/theme` | Course palette tokens (`boardBg`, `chalkText`, `chalkDim`, `pivot`, `good`, `warn`, `cyan`) |
| **fonts** | `@dsa/kit/lib/theme` | Typography families (`sans`, `mono`, `hand`, `display`) |
| **RoughBox** | `@dsa/kit/components/RoughBox` | Chalk borders for pipeline nodes and definition cards |
| **RoughLine** | `@dsa/kit/components/RoughLine` | Connectors, underlines, and strikethroughs |
| **ChalkDust** | `@dsa/kit/components/ChalkDust` | Subtle ambient background particle field |
| **Captions** | `@dsa/kit/components/Captions` | Karaoke caption bar anchored at bottom |

### EXTEND (Minimal Extension)
| Item | Proposed Location | Extension Rationale |
|---|---|---|
| **Permutation Sequence Rail Rig** | `src/Scene03BruteTrace.tsx` | Compact vertical sequence layout displaying active hero row strongly (`[1, 3, 2]` CURRENT in cyan, `[2, 1, 3]` NEXT in gold) while inactive rows dim |
| **Wraparound Curved Arrow Rig** | `src/Scene03BruteTrace.tsx` | Bezier curve looping from LAST permutation `[3, 2, 1]` back to FIRST `[1, 2, 3]` without teaching reversal code |

### CREATE (Scene 03 Specific Assets)
- `sync/03-brute-trace.anchors.json`: 28 semantic anchors across 2,275 frames
- `SYNC_AUDIT_SCENE03.md`: 155-word sync audit and ordered token disambiguation
- `plans/03-brute-trace_FRAMEWISE_PLAN.md`: Full 19-field framewise choreography
- `plans/03-brute-trace_FRAME_QA_CHECKLIST.md`: 28 visual checkpoints & 13 invariants
- `src/Scene03BruteTrace.tsx`: Remotion composition implementation

---

## 4. DO NOT TOUCH (Forbidden to Alter)
1. **`kit/` Shared Libraries:** Core `@dsa/kit` components are immutable.
2. **Q010 / Q011 Reference Sources:** Past problem implementations remain untouched.
3. **Array V2 Law:** Slots remain fixed; values enter into slots; index row never shifts horizontally.
4. **Single Sync Authority:** All timings must derive from `sync/03-brute-trace.json`.
5. **No Complexity Spoilers:** Do NOT introduce `n!` or `O(N! · N)` formula before Scene 05.


