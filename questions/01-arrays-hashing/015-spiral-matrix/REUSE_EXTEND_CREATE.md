# Component Reuse, Extension, and Creation Delta — Q15 Spiral Matrix

## 1. REUSE (Available & Direct)
| Component / Helper | Source Path | Role in Q15 |
|:---|:---|:---|
| `MeshGrid` | `@dsa/kit/components/MeshGrid.tsx` | Master $5 \times 6$ (and edge cases $1 \times 4$, $4 \times 1$) 2D matrix container with row/column coordinate rulers |
| `SceneTitleCard` | `@dsa/kit/components/SceneTitleCard.tsx` | Major bumper transitions between problem stages |
| `SceneEdgeTitle` | `@dsa/kit/components/SceneEdgeTitle.tsx` | Header bar showing question number, title, and topic banner |
| `QuestionCard` | `@dsa/kit/components/QuestionCard.tsx` | LeetCode 54 problem statement and constraints card |
| `ChalkCodeEditorV2` | `@dsa/kit/components/ChalkCodeEditorV2.tsx` | Syntax-highlighted Python code walkthroughs |
| `MasterRoadmapV2` | `@dsa/kit/components/MasterRoadmapV2.tsx` | Full 227-question curriculum visual for Scene 01 and Scene 13 |
| `Captions` | `@dsa/kit/components/Captions.tsx` | Deterministic frame-synced caption display |
| `ChalkDust` | `@dsa/kit/components/ChalkDust.tsx` | Blackboard dust and chalk texture |
| `RoughBox` | `@dsa/kit/components/RoughBox.tsx` | Hand-drawn callouts, formula boxes, and stat cards |
| `RoughLine` | `@dsa/kit/components/RoughLine.tsx` | Chalk underline accents and divider rules |
| `theme` & `fonts` | `@dsa/kit/lib/theme.ts` | Canonical color palette & typography tokens |

---

## 2. EXTEND (Enhance with Problem-Specific Props / Local Wrappers)
| Target Component | Required Extension | Rationale |
|:---|:---|:---|
| `MeshGrid` cell renderer | Dynamic visited order stamp, scanning path glow, and active sweep highlight | Shows exact trajectory of the spiral path as values are harvested |
| `ArrayTrackV2` | Animated append effect from 2D cell to 1D output collector array | Illustrates the flattening of the 2D matrix into a 1D sequence |
| `ChalkCodeEditorV2` | Active boundary variable HUD (`top`, `bottom`, `left`, `right`) updating alongside code lines | Connects loop line execution with state variables |

---

## 3. CREATE (Question-Local Primitives)
| New Component | File Location | Purpose |
|:---|:---|:---|
| `SpiralBoundaryPointers` | `questions/.../015-spiral-matrix/src/components/SpiralBoundaryPointers.tsx` | 4 perimeter bracket pointers (`top`, `bottom`, `left`, `right`) that slide inward as layers finish |
| `DirectionCycleCompass` | `questions/.../015-spiral-matrix/src/components/DirectionCycleCompass.tsx` | HUD badge indicating current traversal phase ($\text{Right} \to \text{Down} \to \text{Left} \to \text{Up}$) |
| `DuplicateTrapCallout` | `questions/.../015-spiral-matrix/src/components/DuplicateTrapCallout.tsx` | Visual demonstration card of the single-row/col boundary crossover bug |

---

## 4. DO NOT TOUCH
- Any code inside `questions/001-contains-duplicate` through `questions/014-rotate-image`.
- Shared primitives in `@dsa/kit` unless backward compatibility is completely preserved.
