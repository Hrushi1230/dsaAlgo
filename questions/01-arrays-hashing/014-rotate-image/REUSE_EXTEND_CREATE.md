# Component Reuse, Extension, and Creation Delta — Q14 Rotate Image

## 1. REUSE (Available & Direct)
| Component / Helper | Source Path | Role in Q14 |
|:---|:---|:---|
| `MeshGrid` | `@dsa/kit/components/MeshGrid.tsx` | Master $5 \times 5$ matrix grid container with row/column coordinate rulers |
| `SceneTitleCard` | `@dsa/kit/components/SceneTitleCard.tsx` | Major bumper transitions between methods |
| `SceneEdgeTitle` | `@dsa/kit/components/SceneEdgeTitle.tsx` | Header bar showing question number, title, and topic banner |
| `QuestionCard` | `@dsa/kit/components/QuestionCard.tsx` | LeetCode 48 problem statement and constraints card |
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
| `MeshGrid` cell renderer | Add 4-way group coloring, diagonal reflection partner links, and horizontal swap indicators | Enables smooth visual tracking of value exchanges without redrawing the grid skeleton |
| `ChalkCodeEditorV2` | Add multi-line highlight ranges and parameter substitution for Python nested loops | Clarifies exact lines executing during each phase of Transpose and Row Reversal |
| Complexity Summary Card | Side-by-side comparison of 3 approaches: Extra Matrix ($O(N^2)$ space), Cyclic Layer ($O(1)$ space, complex index math), Transpose + Reverse ($O(1)$ space, elegant) | Solidifies the algorithmic progression in Scene 12 |

---

## 3. CREATE (Question-Local Primitives)
| New Component | File Location | Purpose |
|:---|:---|:---|
| `CyclicLayerArrows` | `questions/.../014-rotate-image/src/components/CyclicLayerArrows.tsx` | Renders 4 animated curved chalk arrows connecting a 4-way cycle of cells during Method 2 |
| `DiagonalAxis` | `questions/.../014-rotate-image/src/components/DiagonalAxis.tsx` | 45-degree dashed chalk line highlighting the main diagonal axis of reflection during Transpose |
| `CoordinateFormulaPlaque` | `questions/.../014-rotate-image/src/components/CoordinateFormulaPlaque.tsx` | Displays and highlights coordinate mapping formulas: $(r, c) \to (c, n - 1 - r)$ |

---

## 4. DO NOT TOUCH
- Any code inside `questions/001-contains-duplicate` through `questions/013-set-matrix-zeroes`.
- Shared primitives in `@dsa/kit` unless backward compatibility is completely preserved.
