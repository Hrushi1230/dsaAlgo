# Codebase Audit — Q15: Spiral Matrix (LeetCode 54)

## 1. Context & Scope
- **Course**: Code With Animation — Long-Form DSA Course
- **Pattern**: 01 — Arrays & Hashing
- **Question**: 015 — Spiral Matrix (LC 54, Medium)
- **Visual Subject**: Traversing an $M \times N$ 2D matrix in spiral order (clockwise: Right $\to$ Down $\to$ Left $\to$ Up) using 4 shrinking boundary pointers (`top`, `bottom`, `left`, `right`) strictly in $O(1)$ auxiliary space.
- **Pedagogical Progression**:
  - **The Real-World Hook & Naive Simulation**:
    - Understanding why simple nested loops fail for spiral paths.
    - Method 1 (Simulation with Visited Matrix / Hash Set): Moving right until hitting a wall or visited cell, turning $90^\circ$ clockwise. Reveals $O(M \times N)$ extra memory overhead and clumsy turn checks.
  - **Optimal Method (4-Boundary Pointer Shrink)**:
    - Defining 4 bounding planes: `top = 0`, `bottom = m - 1`, `left = 0`, `right = n - 1`.
    - Executing the 4-phase traversal cycle:
      1. Traverse Right along `top` from `left` to `right`, then increment `top++`.
      2. Traverse Down along `right` from `top` to `bottom`, then decrement `right--`.
      3. Boundary Check (`top <= bottom`): Traverse Left along `bottom` from `right` down to `left`, then decrement `bottom--`.
      4. Boundary Check (`left <= right`): Traverse Up along `left` from `bottom` up to `top`, then increment `left++`.
    - Termination condition: `top > bottom` or `left > right`.
    - **The Sacred Single-Row / Single-Column Duplicate Trap**: Demonstrating visually why checking `top <= bottom` and `left <= right` inside the loop is essential for non-square matrices (e.g. $3 \times 4$, $1 \times 4$, $4 \times 1$).
  - **Master Testcase**:
    - Primary: $5 \times 6$ rectangular matrix ($M = 5, N = 6$) with cell values $1 \dots 30$ (peels from $5 \times 6 \to 3 \times 4 \to 1 \times 2$ single row, proving both rectangular non-square behavior and inner single-row termination).
    - Edge Cases: $1 \times 4$ single row, $4 \times 1$ single column, $1 \times 1$ single cell, $3 \times 4$ and $3 \times 3$ odd square.

---

## 2. Codebase Audit Classification

### REUSE (Use Directly Without Modification)
- **`@dsa/kit/components/MeshGrid`**: Single-SVG high-performance 2D grid primitive (`kit/components/MeshGrid.tsx`). Renders outer borders, internal dividers, row/column index coordinate rulers (`showColRulers`, `showRowRulers`), and per-cell custom renderers (`renderCell`).
- **`@dsa/kit/components/SceneTitleCard` & `SceneEdgeTitle`**: Authoritative chalkboard title bumpers and top edge pattern banners (`01 · ARRAYS & HASHING`, Q015).
- **`@dsa/kit/components/QuestionCard`**: Problem statement card, constraints, and matrix input/output preview.
- **`@dsa/kit/components/Captions`**: Deterministic word-level frame-synced caption component anchored at $Y = 980$.
- **`@dsa/kit/components/ChalkDust` & `ChalkText`**: Authentic chalkboard texture dust particles and handwriting typography.
- **`@dsa/kit/components/RoughBox` & `RoughLine`**: Hand-drawn sketchy accent boxes, status badges, and chalk divider lines.
- **`@dsa/kit/components/ChalkCodeEditorV2`**: Syntax-highlighted code editor for Python implementation with active-line highlight and variable HUD.
- **`@dsa/kit/components/MasterRoadmapV2`**: Curriculum roadmap for Scene 01 activation ($14 \to 15$) and Scene 13 completion ($15 \to 16$ Subarray Sum Equals K).
- **`@dsa/kit/helpers/audioSync` & `audioSyncV2`**: Word-level timing anchor parser (`parseAudioSync`).
- **`@dsa/kit/lib/anim` & `motion`**: Deterministic frame-derived springs (`spring`), interpolation curves (`interpolate`), and easing curves.
- **`@dsa/kit/lib/theme` & `fonts`**: Authoritative chalkboard palette tokens (`boardBg: #19523C`, `chalkText: #F8F6F0`, `pivot: #FFD166`, `good: #3CE5A7`, `warn: #FF7675`, `cyan: #5CE1E6`, `purple: #D8B4E2`).

### EXTEND (Adapt Existing Patterns with Problem-Specific Props)
- **`MeshGrid` Cell State Orchestration**:
  - Implement dynamic cell states tailored to spiral traversal:
    - **Neutral / Unvisited**: Default cell with faint chalk value.
    - **Active Scanning Head**: Currently visited cell with high-intensity glowing cursor and direction arrow.
    - **Traversed / Visited**: Marked with vibrant chalk highlight (e.g. mint green `#3CE5A7`) and sequential sequence index badge ($1, 2, 3 \dots$).
    - **Active Traversal Row/Col Segment**: Soft glow across the entire segment currently being swept.
- **`ArrayTrackV2` as Output Collector**:
  - Horizontal output sequence track placed below or beside the grid, dynamically receiving visited values as they are collected from the matrix.
- **`ChalkCodeEditorV2` Highlighting Profiles**:
  - Profiles for:
    1. Boundary initialization (`top = 0, bottom = m - 1, left = 0, right = n - 1`).
    2. While loop condition `while left <= right and top <= bottom:`.
    3. Step 1: Right sweep + `top += 1`.
    4. Step 2: Down sweep + `right -= 1`.
    5. Step 3: `if top <= bottom:` check + Left sweep + `bottom -= 1`.
    6. Step 4: `if left <= right:` check + Up sweep + `left += 1`.

### CREATE (Question-Specific Visual Primitives)
- **`SpiralBoundaryPointers`**:
  - 4 distinct animated chalk boundary markers/rulers:
    - `top` pointer (moving downward $\downarrow$)
    - `bottom` pointer (moving upward $\uparrow$)
    - `left` pointer (moving rightward $\rightarrow$)
    - `right` pointer (moving leftward $\leftarrow$)
  - Features labeled arrows and highlighted boundary wall brackets that clamp inward as boundaries shrink.
- **`DirectionCycleCompass`**:
  - Chalkboard HUD compass showing the 4-phase cyclic state machine:
    - $\text{RIGHT} \to \text{DOWN} \to \text{LEFT} \to \text{UP} \to \text{RIGHT}$
    - Highlights the current active direction with an animated glowing neon arrow.
- **`DuplicateTrapCallout`**:
  - Specialized warning callout card highlighting the single-row/single-col crossing boundary scenario where without `if top <= bottom` or `if left <= right`, duplicate elements would be re-traversed in reverse.

### DO NOT TOUCH
- Existing Question 001–014 implementations in `questions/`.
- Shared core `@dsa/kit` components without explicit backward-compatible extension.
