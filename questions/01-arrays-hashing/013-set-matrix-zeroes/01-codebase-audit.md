# Codebase Audit — Q13: Set Matrix Zeroes (LeetCode 73)

## 1. Context & Scope
- **Course**: Code With Animation — Long-Form DSA Course
- **Pattern**: 01 — Arrays & Hashing
- **Question**: 013 — Set Matrix Zeroes (LC 73, Medium)
- **Visual Subject**: In-place 2D matrix transformation where encountering a `0` mandates zeroing its entire row and column.
- **Pedagogical Progression**:
  - **Approach 1 (Brute Force / Naive)**: Traversing cells and setting entire row/col to dummy markers (e.g. `-1` or special sentinel) or using an $O(M \times N)$ copy matrix so new zeroes don't trigger cascading fake zeroes.
  - **Approach 2 (Better — Auxiliary Markers)**: Allocating two 1D tracking arrays (`row[M]` and `col[N]`) taking $O(M + N)$ extra memory.
  - **Approach 3 (Optimal — In-Place Markers)**: Repurposing the matrix's own 0th row (`matrix[0][..]`) and 0th column (`matrix[..][0]`) as in-place markers with an auxiliary scalar `col0` flag to resolve the `(0,0)` cell collision, achieving $O(1)$ extra space.
  - **Critical Invariant / Trap**: Processing the inner matrix `(1..M-1, 1..N-1)` backwards or forwards before zeroing row 0 and col 0 to prevent corrupting marker state.

---

## 2. Codebase Audit Classification

### REUSE (Use Directly Without Modification)
- **`@dsa/kit/components/MeshGrid`**: High-performance, single-SVG batched chalkboard grid primitive (`kit/components/MeshGrid.tsx`). Provides outer rough borders, internal grid dividers, coordinate rulers (`showColRulers`, `showRowRulers`, `colLabels`, `rowLabels`), and per-cell rendering via `renderCell({ row, col, x, y, width, height })`.
- **`@dsa/kit/components/SceneTitleCard` & `SceneEdgeTitle`**: Standard scene titles, pattern badge (`01 · ARRAYS & HASHING`), and question numbering badges across all scenes.
- **`@dsa/kit/components/QuestionCard`**: Problem statement, constraints, matrix input/output examples in Scene 02.
- **`@dsa/kit/components/Captions`**: Deterministic word-level frame-synced Indian English subtitle renderer anchored at $Y = 980$.
- **`@dsa/kit/components/ChalkDust` & `ChalkText`**: Deep chalkboard texture dust particles and authentic handwriting typography.
- **`@dsa/kit/components/RoughBox` & `RoughLine`**: Hand-drawn sketchy accent boxes, status callouts, and marker brackets.
- **`@dsa/kit/components/ChalkCodeEditorV2`**: Syntax-highlighted code editor for Better ($O(M+N)$) and Optimal in-place ($O(1)$) Python code with active line highlighting.
- **`@dsa/kit/components/MasterRoadmapV2`**: Shared 227-question curriculum roadmap for Scene 01 activation and Scene 10 completion.
- **`@dsa/kit/helpers/audioSync` & `audioSyncV2`**: Word-level timing anchor parser (`parseAudioSync`).
- **`@dsa/kit/helpers/anim` & `motion`**: Deterministic frame-derived springs, smoothstep easings, and interpolation curves.
- **`@dsa/kit/lib/theme` & `fonts`**: Authoritative chalkboard palette tokens (`boardBg: #19523C`, `chalkText: #F8F6F0`, `pivot: #FFD166`, `good: #3CE5A7`, `warn: #FF7675`, `cyan: #5CE1E6`, `purple: #D8B4E2`).

### EXTEND (Adapt Existing Patterns with Problem-Specific Props)
- **`MeshGrid` Cell State Orchestration**:
  - Wire `renderCell` to a discrete matrix cell state machine:
    - **Neutral / Intact**: Default cell with white chalk value.
    - **Original Zero Target**: Highlighted in `theme.warn` (`#FF7675`) with pulse or focus ring.
    - **In-Place Marker Active**: Golden amber (`theme.pivot` / `#FFD166`) fill/stroke along 0th row or 0th col.
    - **Zero Propagation Wave**: Animated horizontal/vertical sweep line (`theme.cyan`) passing through the row/col.
    - **Zeroed Result Cell**: Fresh chalk zero in `theme.good` (`#3CE5A7`).
- **`ChalkCodeEditorV2` Line Highlighting**:
  - Provide distinct highlight configs for:
    1. Scan & mark pass (`matrix[i][0] = 0`, `matrix[0][j] = 0`, `col0 = 0`).
    2. Inner subgrid update (`for i in range(1, m): for j in range(1, n): ...`).
    3. Row 0 update (`if matrix[0][0] == 0: ...`).
    4. Col 0 update (`if col0 == 0: ...`).
- **Complexity Card / Comparison Visual**:
  - Compare Space Complexity progression:
    - Brute Force: $O(M \times N)$
    - Better: $O(M + N)$
    - Optimal: $O(1)$

### CREATE (Question-Specific Visuals)
- **`AuxiliaryMarkerTracks`** (Scene 04 / Better Approach):
  - A horizontal marker track (`col[N]`) floating directly above the grid and a vertical marker track (`row[M]`) floating to the left, visually demonstrating the $O(M + N)$ extra memory requirement.
- **`InPlaceMarkerOverlay`** (Scenes 06, 07 / Optimal Idea & Trace):
  - A subtle tinted chalk bracket highlighting the 0th row and 0th column as the "Embedded Marker Bank".
  - Dedicated floating badge for the `col0` scalar variable at top-left $(X_{offset}, Y_{offset})$ to explain why `matrix[0][0]` alone is insufficient (the collision of `row[0]` and `col[0]`).
- **`ZeroPropagationSweep`** (Scenes 03, 07):
  - Beam / laser sweep effect along row and column lines illustrating the ripple zeroing effect without abrupt jumps.

### DO NOT TOUCH
- Core `@dsa/kit` foundation styling and design tokens.
- Existing completed questions `001` through `012`.
- Global Remotion configuration outside of registering `SetMatrixZeroesFolder` in `remotion-project/src/Root.tsx`.

---

## 3. Visual Grammar & Semantic Palette
Per `docs/04_MATRIX_GRID_KIT_VISUAL_GRAMMAR.md`:
- **Canvas Base**: Oxford Chalkboard Green (`#19523C`) — no dark floating cards or SaaS dashboard panels.
- **Grid Geometry**: Batched SVG `MeshGrid` with cell roughness `1.0 - 1.2`.
- **Row & Column Rulers**: Chalk monospace numbers outside the grid (`rulerColor: theme.cyan`).
- **Original Zero (`0`)**: Coral Terracotta (`theme.warn` / `#FF7675`).
- **Active Scanner Cell `(i, j)`**: Sunburst Gold (`theme.pivot` / `#FFD166`) border with subtle fill wash.
- **In-Place Markers (`matrix[0][j]`, `matrix[i][0]`)**: Sunburst Gold (`theme.pivot` / `#FFD166`).
- **`col0` Variable Badge**: Powdery Lilac / Ice Cyan badge (`#5CE1E6` / `#D8B4E2`).
- **Propagated Zeroes**: Seafoam Mint (`theme.good` / `#3CE5A7`) or clean chalk white (`#F8F6F0`).
- **Inner Subgrid Zone**: Visual protection boundary around `(1..M-1, 1..N-1)`.

---

## 4. Verification & Spatial Clearance Invariants
- **Center-Stage Vertical Distribution**: Hero matrix is centered vertically ($Y: 140$ to $Y: 740$), leaving $\ge 240\text{px}$ clearance above bottom captions ($Y: 980$).
- **Ruler & Marker Clearance**: Top column ruler and floating marker strip must have at least $32\text{px}$ clearance from scene title headers.
- **`col0` Badge Positioning**: Placed at the top-left intersection with explicit $24\text{px}$ margin from cell `(0,0)` to avoid overlapping coordinate `[0]` rulers.
- **Zero-Collision Rule**: Text labels, pointer chips, and sweep lines must never clip into matrix cell borders or index rulers.
