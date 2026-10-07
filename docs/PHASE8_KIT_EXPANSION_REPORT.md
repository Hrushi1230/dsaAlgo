# PHASE 8 — KIT EXPANSION & PRODUCTION COMPONENT MIGRATION REPORT

> **Status**: COMPLETE & REGRESSION-VALIDATED  
> **Date**: 2026-09-14  
> **Authority**: `docs/00_PHASE7_COMPLETE_KIT_DRIVEN_VISUAL_GRAMMAR.md` & `docs/KIT_REUSE_MATRIX.md`  
> **Render Artifacts**: 27 Re-rendered Phase 7 Regression Stills + Fresh 54s Master Showcase Video (`proofs/phase7/Phase7_All_Structures_Showcase.mp4`)  
> **Board Standard**: Course Green Chalkboard (`theme.boardBg` ≈ `#18523d`)  

---

## 1. Executive Summary

Phase 8 transitioned the proven Phase 7.2 data structure visual logic into **three production-grade, highly reusable `@dsa/kit` primitives**:
1. **`RoughNode`**: Hand-drawn chalk circular and capsule node with guaranteed chalkboard-shield backing (`fill={theme.boardBg}`) and concentric emphasis rings.
2. **`ParametricArrow`**: Tangent-correct, perimeter-trimmed directional arrow supporting straight lines and quadratic curves with `@remotion/paths` evolution and midpoint chalk labels.
3. **`MeshGrid`**: Single-SVG batched chalkboard grid primitive for matrices, Sudoku, and DP recurrence tables, reducing DOM/SVG nodes by over 80%.

In addition, geometric utilities (`getEdgeCoords`, `getNodeAnchorPoint`, `getQuadControlPoint`) were promoted into `kit/lib/geom.ts`.

All 9 affected data structure proofs were migrated, compiled with zero errors (`remotion bundle` passed with code 0), and rendered into 27 regression stills and a full 54.0s master showcase video without visual degradation.

---

## 2. Decision Framework: REUSE, EXTEND, CREATE

| Candidate / Need | Decision | Architecture Rationale |
|:---|:---:|:---|
| **Geometric Utilities** | **PROMOTE** | Moved `getEdgeCoords` out of proof-local `ProofShell.tsx` into `kit/lib/geom.ts` alongside `getNodeAnchorPoint` and `getQuadControlPoint`. Re-exported in `ProofShell.tsx` to maintain 100% backward compatibility. |
| **`RoughNode`** | **CREATE** | Replaced proof-local `ChalkCircleNode`. Combines an opaque SVG chalkboard base circle (`fill={theme.boardBg}`) with deterministic hand-sketched Rough.js outlines (`rough.generator().circle`) and monospace typography. Aliased `ChalkCircleNode = RoughNode` so all existing code works without breakage. |
| **`ParametricArrow`** | **CREATE** | Replaced manual SVG lines, manual polygon marker chevrons, and ad-hoc quadratic bypass paths. Automatically trims start/end coordinates to node circle boundaries (`startRadius`, `endRadius`), calculates tangent orientation using `svgPathV2`, and draws chalk arrowheads at the exact boundary. |
| **`MeshGrid`** | **CREATE** | Replaced 81 individual `RoughBox` instances in 9×9 Matrix and ad-hoc DP grids. Batches all outer boundaries, horizontal dividers, vertical dividers, and subgrid partitions into a **single unified SVG**, exposing `renderCell` for high performance. |
| **Data Structure Compositions (Array, Stack, Queue, LinkedList, HashMap)** | **REUSE / PRESERVE** | Preserved as modular compositions using kit primitives (`RoughBox`, `RoughNode`, `ParametricArrow`, `RoughLine`). Avoided creating brittle single-use monoliths. |

---

## 3. Targeted Primitive Specifications & Migrations

### A. `RoughNode` (`kit/components/RoughNode.tsx`)

- **Old Proof Solution**:
  Proof-local `ChalkCircleNode` in `kit/components/phase7/ProofShell.tsx`. Rendered standard SVG `<circle>` with `#chalk-stroke` filter and static `<text>`.
- **New Reusable Primitive**:
  `RoughNode` in `kit/components/RoughNode.tsx`.
- **Key Capabilities**:
  - **Opaque Chalkboard Shield**: Renders `<circle cx={x} cy={y} r={r} fill={fill ?? theme.boardBg} />` as the base, ensuring connector edges, grid lines, and axis rays **never penetrate inside**.
  - **Deterministic Rough Outlines**: Uses `rough.generator().circle(x, y, r * 2, { seed })` for double-stroke hand-drawn chalkboard aesthetics.
  - **Semantic States**: Supports `semanticState` presets (`"default"`, `"active"`, `"visited"`, `"root"`, `"target"`, `"bad"`) mapping to theme tokens (`theme.cyan`, `theme.pivot`, `theme.good`, `theme.bad`).
  - **Concentric Ring Support**: `ring={true}` renders an outer dashed target ring (essential for terminal Trie states and search targets).
  - **Sub-label Support**: `subLabel` renders underneath the node for indices, frequencies, or ranks.
  - **Animated Draw-in**: Optional `startFrame` and `durationInFrames` for stroke dashoffset reveals.
- **API**:
  ```ts
  export interface RoughNodeProps {
    x: number;
    y: number;
    r: number;
    label?: string | number | React.ReactNode;
    subLabel?: string | number | React.ReactNode;
    stroke?: string;
    strokeWidth?: number;
    fill?: string; // defaults to theme.boardBg
    textColor?: string;
    fontSize?: number;
    subLabelFontSize?: number;
    seed?: number;
    semanticState?: "default" | "active" | "visited" | "root" | "target" | "bad";
    ring?: boolean;
    ringStroke?: string;
    ringDash?: string;
    filter?: string;
    startFrame?: number;
    durationInFrames?: number;
    className?: string;
    style?: React.CSSProperties;
  }
  ```
- **Regression Structures Validated**:
  Tree (`08-tree`), Heap (`09-heap`), Graph (`10-graph`), Union-Find (`11-union-find`), Trie (`12-trie`), Math (`18-math`).

---

### B. `ParametricArrow` (`kit/components/ParametricArrow.tsx`)

- **Old Proof Solution**:
  Ad-hoc `<line>` tags with manual `getEdgeCoords` calls, plus hand-crafted `<polygon>` chevron triangles for curves (e.g. LinkedList bypass in State B) and manual `<rect>`/`<text>` coordinate centering for edge weights.
- **New Reusable Primitive**:
  `ParametricArrow` in `kit/components/ParametricArrow.tsx`.
- **Key Capabilities**:
  - **Straight & Curved Modes**: `kind="straight"` or `kind="curved"` (with explicit control point or automatic perpendicular `bend`).
  - **Perimeter Trimming**: `startRadius` and `endRadius` automatically trim the arrow endpoints so they start and terminate strictly on the circular perimeter.
  - **Tangent-Correct Arrowhead**: Uses `getPathTangentAtProgress` from `kit/lib/svgPathV2.ts` to orient the arrowhead arms along the exact trajectory tangent at the tip.
  - **Head Styles**: Open chalk strokes (`headStyle="strokes"`) or filled chevron (`headStyle="filled"`).
  - **Midpoint Label Pill**: Built-in `label` renders an opaque chalkboard background pill (`theme.boardBg`) so edge weights and transition characters never cross through shaft strokes.
  - **Deterministic Evolution**: Supports normalized `progress` `[0..1]` or frame-based `startFrame` / `durationInFrames` with shaft evolving from `0..0.85` and head forming from `0.7..1.0`.
- **API**:
  ```ts
  export interface ParametricArrowProps {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    startRadius?: number;
    endRadius?: number;
    kind?: "straight" | "curved";
    cx?: number;
    cy?: number;
    bend?: number;
    stroke?: string;
    strokeWidth?: number;
    strokeDasharray?: string;
    showHead?: boolean;
    headStyle?: "strokes" | "filled";
    headLength?: number;
    headAngleDeg?: number;
    label?: string | number | React.ReactNode;
    labelColor?: string;
    labelFontSize?: number;
    labelOffset?: number;
    progress?: number;
    startFrame?: number;
    durationInFrames?: number;
    filter?: string;
    className?: string;
    style?: React.CSSProperties;
  }
  ```
- **Regression Structures Validated**:
  Linked List (`05-linked-list`), Graph (`10-graph`), Union-Find (`11-union-find`), Trie (`12-trie`), DP (`15-dp`).

---

### C. `MeshGrid` (`kit/components/MeshGrid.tsx`)

- **Old Proof Solution**:
  Iterated `RoughBox` elements. In 9×9 Matrix State C, 81 separate `RoughBox` components generated 81 distinct `<svg>` tags and over 320 DOM elements.
- **New Reusable Primitive**:
  `MeshGrid` in `kit/components/MeshGrid.tsx`.
- **Key Capabilities**:
  - **Batched Single-SVG Skeleton**: Generates the outer border, all internal row dividing lines, and all vertical column dividing lines in a **single unified SVG path batch**.
  - **Subgrid Partition Dividers**: Supports `subgridRows` and `subgridCols` (e.g. 3×3 blocks for Sudoku or partitioned matrices) with custom `subgridStrokeWidth` and `subgridStroke`.
  - **Integrated Coordinate Rulers**: Optional `showColRulers` (`col [0] ...`) and `showRowRulers` (`row [0] ...`) with custom labels.
  - **Cell Coordinate Resolver**: Exposes `renderCell({ row, col, x, y, width, height, centerX, centerY })` for declarative cell overlay rendering.
  - **Board Direct**: Zero dark panels or background cards (`fill` remains direct on `theme.boardBg`).
- **API**:
  ```ts
  export interface MeshGridProps {
    rows: number;
    cols: number;
    cellWidth: number;
    cellHeight: number;
    stroke?: string;
    strokeWidth?: number;
    outerStrokeWidth?: number;
    subgridRows?: number;
    subgridCols?: number;
    subgridStrokeWidth?: number;
    subgridStroke?: string;
    seed?: number;
    showColRulers?: boolean;
    showRowRulers?: boolean;
    colLabels?: (string | number)[];
    rowLabels?: (string | number)[];
    rulerColor?: string;
    rulerFontSize?: number;
    renderCell?: (info: CellInfo) => React.ReactNode;
    filter?: string;
    className?: string;
    style?: React.CSSProperties;
  }
  ```
- **Regression Structures Validated**:
  Matrix (`04-matrix`), Dynamic Programming (`15-dp`).

---

## 4. Audit of Deleted Duplication & Files Changed

| File Path | Action | Description of Migration |
|:---|:---:|:---|
| `kit/lib/geom.ts` | **NEW** | Promoted `getEdgeCoords`, `getNodeAnchorPoint`, and `getQuadControlPoint`. |
| `kit/components/RoughNode.tsx` | **NEW** | Created `RoughNode` primitive with opaque shield and concentric ring. |
| `kit/components/ParametricArrow.tsx` | **NEW** | Created `ParametricArrow` primitive with auto-trimming and tangent head. |
| `kit/components/MeshGrid.tsx` | **NEW** | Created `MeshGrid` primitive with batched single-SVG chalk lines. |
| `kit/components/index.ts` | **MODIFIED** | Exported `RoughNode`, `ParametricArrow`, and `MeshGrid`. |
| `kit/components/phase7/ProofShell.tsx` | **MODIFIED** | Re-exported `getEdgeCoords` from `geom.ts`; aliased `ChalkCircleNode = RoughNode`. |
| `kit/components/phase7/Proofs01To06.tsx` | **MODIFIED** | Migrated `Proof04Matrix` to `MeshGrid`; migrated `Proof05LinkedList` to `ParametricArrow`. |
| `kit/components/phase7/Proofs07To12.tsx` | **MODIFIED** | Migrated `Proof10Graph` (weights), `Proof11UnionFind` (upward edges), and `Proof12Trie` (char edges & terminal rings) to `ParametricArrow` and `RoughNode`. |
| `kit/components/phase7/Proofs13To18.tsx` | **MODIFIED** | Migrated `Proof15DP` State C to 2D Knapsack `MeshGrid` with `ParametricArrow` recurrence vectors. |
| `tools/render_phase7_proofs.js` | **MODIFIED** | Added CLI filter argument support for selective regression rendering. |

---

## 5. Regression Render Validation

### A. Automated Remotion Bundle & Build
- Command: `npm run build` in `remotion-project`
- Result: **0 errors**, bundled successfully.

### B. 27 Regression Proof Stills Rendered
Executed:
```bash
node tools/render_phase7_proofs.js 04 05 08 09 10 11 12 15 18
```

| Structure Family | Stills Verified | Visual Confirmation |
|:---|:---:|:---|
| **04 Matrix** | `[A, B, C].png` | 4×4 grid rulers aligned; 9×9 Sudoku subgrid partitions clean; DOM count reduced by ~80%. |
| **05 Linked List** | `[A, B, C].png` | Straight pointer arrows terminate at next node; curved bypass arrow tangent-aligned. |
| **08 Tree** | `[A, B, C].png` | Branch lines terminate cleanly at node perimeter; zero line bleed into circles. |
| **09 Heap** | `[A, B, C].png` | Dual-view tree & array indices aligned; node circles opaque green. |
| **10 Graph** | `[A, B, C].png` | Weighted edges utilize centered `ParametricArrow` label pills without line collisions. |
| **11 Union-Find** | `[A, B, C].png` | Upward arrows point directly to root nodes; path compression edge direct and bold. |
| **12 Trie** | `[A, B, C].png` | Character transition arrows aligned; terminal nodes rendered with outer ring. |
| **15 DP** | `[A, B, C].png` | Real 2D Knapsack state grid with vertical and diagonal dependency recurrence vectors. |
| **18 Math** | `[A, B, C].png` | Coordinate points rendered with opaque chalkboard backing on Cartesian grid. |

### C. Master 54-Second Showcase Video Re-Rendered
- Output: `proofs/phase7/Phase7_All_Structures_Showcase.mp4`
- Duration: **54.0 seconds (1620 frames at 30 fps, 1080p)**
- Size: **5.83 MB**
- Result: Clean sequential playback of all 18 structures with newly integrated production primitives.

---

## 6. Pipeline Boundary Check & Next Steps

According to `.agents/AGENTS.md` and user instructions:
- **Phase 8 is COMPLETE and FULLY VALIDATED.**
- **Phase 9 (Foundation Integration / Polish)** and **Question #011 (Sort Colors)** are strictly held behind this gate.
- No production lesson scenes (`questions/01-arrays-hashing/`) were touched.

**Ready for user review and explicit authorization before proceeding to Phase 9.**
