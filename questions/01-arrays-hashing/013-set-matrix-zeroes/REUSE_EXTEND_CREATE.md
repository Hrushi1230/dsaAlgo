# REUSE / EXTEND / CREATE Implementation Delta
**Question:** 013 · Set Matrix Zeroes (LeetCode 73)  
**Pattern:** 01 · Arrays & Hashing  
**Pipeline Stage:** Stage 2 — Codebase Audit & Setup  
**Audit Basis:** Codebase audit of `@dsa/kit`, `MeshGrid.tsx`, `Proof04Matrix.tsx`, `docs/04_MATRIX_GRID_KIT_VISUAL_GRAMMAR.md`, `ChalkCodeEditorV2.tsx`, `Captions.tsx`, `RoughBox.tsx`

---

## 1. Global Component Delta

### REUSE (Use Unchanged)
| Component / Utility | Source Path | Role in Q013 |
|---|---|---|
| **MeshGrid** | `@dsa/kit/components/MeshGrid` | Core batched SVG matrix grid primitive for $M \times N$ matrix |
| **ChalkboardBackground** | `@dsa/kit/lib/chalk` | Deep chalkboard texture `#19523C` canvas base |
| **ChalkFilters** | `@dsa/kit/lib/chalk` | SVG displacement filters for realistic chalk strokes |
| **theme** | `@dsa/kit/lib/theme` | Course palette tokens (`boardBg`, `chalkText`, `chalkDim`, `pivot`, `good`, `warn`, `cyan`) |
| **fonts** | `@dsa/kit/lib/theme` | Typography families (Outfit, Fira Code, Patrick Hand) |
| **EASE, fadeIn, pop** | `@dsa/kit/lib/anim` | Deterministic frame interpolation curves |
| **RoughBox** | `@dsa/kit/components/RoughBox` | Chalk borders for definition cards, marker chips, and callouts |
| **RoughLine** | `@dsa/kit/components/RoughLine` | Underline emphasis, division lines, and axis markers |
| **ChalkDust** | `@dsa/kit/components/ChalkDust` | Ambient background particle field |
| **Captions** | `@dsa/kit/components/Captions` | Word-level karaoke-synced caption bar at optical bottom ($Y = 980$) |
| **audioSyncV2** | `@dsa/kit/lib/audioSyncV2` | Exact word sync interpretation and anchor resolution |
| **MasterRoadmapV2** | `@dsa/kit/components/MasterRoadmapV2` | Shared 227-question curriculum roadmap for Scene 01 and Scene 10 |
| **ProblemOpenerShell** | `@dsa/kit/components/ProblemOpenerShell` | Pinned problem header card at top of canvas |
| **QuestionCard** | `@dsa/kit/components/QuestionCard` | Problem statement and example breakdown in Scene 02 |
| **ChalkCodeEditorV2** | `@dsa/kit/components/ChalkCodeEditorV2` | Code editor for Better and Optimal Python solutions |

---

## 2. EXTEND (Adapt with Problem-Specific Props)
| Item | Proposed Location | Extension Rationale |
|---|---|---|
| **MeshGrid Cell State Engine** | `src/components/MatrixCellRenderer.tsx` | Wire `MeshGrid.renderCell` to handle 5 distinct cell states: Neutral, Discovered Zero, Active Marker, Sweep Propagation, and Zeroed Result |
| **ChalkCodeEditorV2 Highlighting** | `src/scenes/Scene08OptimalCode.tsx` | Support multi-phase line highlighting for marking, inner-grid pass, row 0 pass, and col 0 pass |
| **Complexity Card** | `src/scenes/Scene09Complexity.tsx` | Comparative 3-tier space chart: $O(M \times N) \rightarrow O(M+N) \rightarrow O(1)$ |

---

## 3. CREATE (Question-Specific Visuals)
| Visual Primitive | Proposed Location | Pedagogical Role |
|---|---|---|
| **AuxiliaryMarkerTracks** | `src/components/AuxiliaryMarkerTracks.tsx` | Horizontal top track (`col[N]`) and vertical left track (`row[M]`) for Approach 2 ($O(M+N)$ extra space) |
| **InPlaceMarkerOverlay** | `src/components/InPlaceMarkerOverlay.tsx` | Visual highlighting of Row 0 and Col 0 as the in-place marker banks, plus external chip for `col0` |
| **ZeroPropagationSweep** | `src/components/ZeroPropagationSweep.tsx` | Laser / chalk wash sweeping across rows and columns to illustrate continuous zeroing |
| **InnerSubgridShield** | `src/components/InnerSubgridShield.tsx` | Visual highlight illustrating why `matrix[1..M-1][1..N-1]` must be modified before Row 0 / Col 0 |

---

## 4. DO NOT TOUCH
- Core `@dsa/kit` foundation styles and shared theme tokens.
- Existing completed questions `001` through `012`.
- Global Remotion configuration outside of registering `SetMatrixZeroesFolder` in `remotion-project/src/Root.tsx`.
