# Codebase Audit — Q14: Rotate Image (LeetCode 48)

## 1. Context & Scope
- **Course**: Code With Animation — Long-Form DSA Course
- **Pattern**: 01 — Arrays & Hashing
- **Question**: 014 — Rotate Image (LC 48, Medium)
- **Visual Subject**: Rotating an $N \times N$ 2D matrix $90^\circ$ clockwise strictly in place ($O(1)$ extra memory).
- **Pedagogical Progression**:
  - **Method 1 (Extra Storage / Baseline)**: Reading from source at $(r, c)$ and writing directly to destination $(c, n - 1 - r)$ in an auxiliary $N \times N$ matrix. Highlights the core coordinate mapping while showing why $O(N^2)$ space fails the in-place constraint.
  - **Method 2 (4-Way Cyclic Layer Swap)**: Concentric onion-layer peeling from outside in ($\lfloor N/2 \rfloor$ layers). Swapping 4 values simultaneously in a cycle using a single temporary variable `temp`, achieving $O(1)$ extra space but requiring non-trivial coordinate arithmetic.
  - **Method 3 (Decomposition: Transpose + Horizontal Reverse)**: Transforming the problem into two canonical geometric operations:
    1. **Transpose** across the main diagonal: $(r, c) \leftrightarrow (c, r)$ for all $r < c$.
    2. **Horizontal Row Reversal**: Reversing each row $(c, r) \to (c, n - 1 - r)$ via two-pointer row swaps.
    Achieves identical $O(N^2)$ time and $O(1)$ extra space with minimal, bug-resistant code.
  - **Master Testcase**: $5 \times 5$ square matrix ($N = 5$) with cell values $1 \dots 25$.

---

## 2. Codebase Audit Classification

### REUSE (Use Directly Without Modification)
- **`@dsa/kit/components/MeshGrid`**: Single-SVG high-performance grid primitive (`kit/components/MeshGrid.tsx`). Renders outer borders, internal dividers, row/column index coordinate rulers (`showColRulers`, `showRowRulers`, `colLabels`, `rowLabels`), and per-cell custom renderers (`renderCell`).
- **`@dsa/kit/components/SceneTitleCard` & `SceneEdgeTitle`**: Authoritative blackboard title bumpers and corner pattern banners (`01 · ARRAYS & HASHING`, Q014).
- **`@dsa/kit/components/QuestionCard`**: Problem statement card, constraints, and matrix input/output preview in Scene 02.
- **`@dsa/kit/components/Captions`**: Deterministic word-level frame-synced caption component anchored at $Y = 980$.
- **`@dsa/kit/components/ChalkDust` & `ChalkText`**: Authentic chalkboard texture dust particles and handwriting typography.
- **`@dsa/kit/components/RoughBox` & `RoughLine`**: Hand-drawn sketchy accent boxes, status badges, and chalk divider lines.
- **`@dsa/kit/components/ChalkCodeEditorV2`**: Syntax-highlighted code editor for Method 1, Method 2, and Method 3 Python implementations with dynamic active-line glow.
- **`@dsa/kit/components/MasterRoadmapV2`**: Curriculum roadmap for Scene 01 activation ($13 \to 14$) and Scene 13 completion ($14 \to 15$ Spiral Matrix).
- **`@dsa/kit/helpers/audioSync` & `audioSyncV2`**: Word-level timing anchor parser (`parseAudioSync`).
- **`@dsa/kit/lib/anim` & `motion`**: Deterministic frame-derived springs (`spring`), interpolation curves (`interpolate`), and easing curves.
- **`@dsa/kit/lib/theme` & `fonts`**: Authoritative chalkboard palette tokens (`boardBg: #19523C`, `chalkText: #F8F6F0`, `pivot: #FFD166`, `good: #3CE5A7`, `warn: #FF7675`, `cyan: #5CE1E6`, `purple: #D8B4E2`).

### EXTEND (Adapt Existing Patterns with Problem-Specific Props)
- **`MeshGrid` Cell State Orchestration**:
  - Implement dynamic cell states tailored to 2D rotation:
    - **Neutral / Intact**: Default cell with white chalk value.
    - **Active 4-Way Cycle Group**: 4 cells highlighted in distinct chalk colors (Top: Cyan, Right: Purple, Bottom: Amber, Left: Rose) with cyclic directional arrows connecting them.
    - **Diagonal Reflection Pair**: Two cells $(r, c)$ and $(c, r)$ linked across the main diagonal dashed axis during transpose.
    - **Horizontal Row Swap Pair**: Two cells $(r, c)$ and $(r, n - 1 - c)$ pulsing in sync during row reversal.
    - **Permanent Diagonal**: Cells along the main diagonal $(i, i)$ maintaining position with a soft golden glow.
- **`ChalkCodeEditorV2` Highlighting Profiles**:
  - Profiles for:
    1. Method 1: Matrix allocation and coordinate assignment `result[c][n - 1 - r] = matrix[r][c]`.
    2. Method 2: Layer loop, offset calculation, and 4-way assignment block.
    3. Method 3: Nested transpose loop (`r in range(n)`, `c in range(r + 1, n)`) and row reversal loop.

### CREATE (Question-Specific Visual Primitives)
- **`CyclicFourWayArcOverlay`** (Scene 06 / Method 2):
  - Curved SVG chalkboard arcs connecting 4 cells in a clockwise loop (`top` $\to$ `right` $\to$ `bottom` $\to$ `left` $\to$ `top`) with animated arrowheads and temporary cache badge `temp`.
- **`DiagonalAxisDashedLine`** (Scene 09, 10 / Method 3):
  - A diagonal rough chalk dashed line running from $(0,0)$ to $(n-1, n-1)$ at $45^\circ$, visually establishing the mirror symmetry of matrix transposition.
- **`TransformationEquationCard`** (Scene 02, 09, 13):
  - Chalkboard badge displaying coordinate transformation proofs:
    - $(r, c) \to (c, n - 1 - r)$
    - $(r, c) \xrightarrow{\text{Transpose}} (c, r) \xrightarrow{\text{Reverse Row}} (c, n - 1 - r)$.

### DO NOT TOUCH
- Existing Question 001–013 implementations in `questions/`.
- Shared core `@dsa/kit` components without explicit backward-compatible extension.
