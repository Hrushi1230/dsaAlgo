# Phase 10: Automated QA / Validation V2 System Report

## 1. Executive Summary

Phase 10 installs the authoritative, multi-layered Automated QA and Validation System for Foundation V2 of the **Code With Animation** long-form DSA course.

The primary objective of this validation system is to catch production errors—including non-deterministic animations, audio sync drift, invalid scene boundaries, out-of-bounds pointers, malformed SVG geometry, broken partition spans, and theme violations—**before** rendering or reviewing compositions.

The system provides:
1. **`npm run validate:v2`**: High-speed preflight validation (~0.06 seconds), ideal for git hooks, IDE integration, and pre-render checks.
2. **`npm run validate:v2:full`**: Preflight suite plus automated headless Remotion still renders of representative proof compositions (~28 seconds).
3. **Intentional Failure Harness**: A negative test suite demonstrating that invalid inputs (e.g. boundary violations, duplicate word IDs, NaN geometry) are loudly rejected with informative error diagnostics.

---

## 2. Validator Architecture & Coverage

The validation suite is organized modularly under `tools/qa/` and orchestrated via `tools/validate-v2.mjs`:

| Validator | Module File | Description & Invariants Verified |
| :--- | :--- | :--- |
| **A. Audio Sync Integrity** | `tools/qa/validator-audio-sync.mjs` | `fps > 0`, `duration_frames > 0`, monotonic timestamps (`start_ms`, `start_frame`), valid intervals (`end >= start`), unique word IDs (`W0000`, `W0001`, ...), word bounds $\le$ duration. |
| **B. Semantic Anchors & Boundaries** | `tools/qa/validator-scene-boundaries.mjs` | Resolves anchor definitions against sync; asserts $0 \le \text{frame} < \text{durationFrames}$; rejects ambiguous string matching; ensures scene duration $> 0$ and no NaN/Infinity frames. |
| **C. Remotion Determinism Scanner** | `tools/qa/validator-determinism.mjs` | Scans V2 code for forbidden non-deterministic constructs: `Math.random()`, `Date.now()`, `performance.now()`, `crypto.randomUUID()`, CSS timeline `@keyframes`, `setInterval()`, `setTimeout()`. Ignores comments. |
| **D. SVG / Path Geometry Safety** | `tools/qa/validator-geometry.mjs` | Mathematically tests `getEdgeCoords`, `getNodeAnchorPoint`, `getQuadControlPoint`, `svgPathV2` (`clamp01`, `getLength`, `getPointAtLength`, `getTangentAtLength`, `evolvePath`), and `MeshGrid`. Asserts finite non-NaN coordinates, positive path lengths, and perimeter trimming. |
| **E. Array V2 Structural Invariants** | `tools/qa/validator-array-invariants.mjs` | Programmatically proves the 3 Permanent Laws across 4, 8, 15, and 20 elements: (1) **Slots Stay Fixed**, (2) **Values Move** (parabolic apex & landing), (3) **Indices Never Move**. |
| **F. Multi-Lane Pointer System** | `tools/qa/validator-pointer-lanes.mjs` | Validates single & multi-pointer setups, top & bottom placements, slot clearance, distinct vertical lane staggering on identical indices, and strict target index validation ($0 \le \text{index} < \text{count}$). |
| **G. Partition Bounds & Disjoint Intervals** | `tools/qa/validator-partition-bounds.mjs` | Validates $0 \le \text{startIndex} \le \text{endIndex} < \text{count}$. Tests sub-arrays, adjacent regions, full spans, shrinking/expanding ranges, and 4-way Dutch National Flag (DNF) sets. Detects accidental overlapping ranges. |
| **H. Adaptive Layout Safety** | `tools/qa/validator-adaptive-layout.mjs` | Evaluates `ArrayTrackV2` layout from 1 to 24 elements across container widths (1400px down to 800px). Asserts total width $\le$ `maxWidth`, `slotWidth > 0`, `slotHeight > 0`, `gap >= 0`, `fontSize > 0`, and container constraint supremacy. |
| **I. Course Theme Rules** | `tools/qa/validator-theme-rules.mjs` | Scans V2 kit and proof components for forbidden pitch-black (`#000000`, `black`) or charcoal surfaces on structural panels. Enforces board authority `theme.boardBg` (`#18523d`). |
| **J. Intentional Failure Harness** | `tools/qa/validator-intentional-failures.mjs` | Executes controlled negative tests to verify that malformed fixtures correctly fail with expected diagnostic messages. |
| **K. Proof Smoke Renders** | `tools/qa/validator-smoke-renders.mjs` | Headless Remotion still render harness testing 6 representative compositions in `--full` mode. Verifies non-empty PNG output. |

---

## 3. CLI Commands & Execution Modes

### 3.1 Fast Preflight (`validate:v2`)
```bash
npm run validate:v2
```
- **Scope**: Validators A through I + Intentional Failure Harness (10 checks).
- **Execution Time**: ~0.06 seconds.
- **Render Overhead**: 0 seconds (pure AST, mathematical, and algorithmic validation).
- **Exit Code**: `0` on success, `1` on any failure.

### 3.2 Full Regression Suite (`validate:v2:full`)
```bash
npm run validate:v2:full
```
- **Scope**: All 10 preflight checks + Validator K headless Remotion still renders of 6 core proof compositions:
  1. `Phase7Proof-01-Array` (frame 45) -> `proofs/smoke/Smoke_01_Array.png`
  2. `Phase7Proof-04-Matrix` (frame 45) -> `proofs/smoke/Smoke_04_Matrix.png`
  3. `Phase7Proof-05-LinkedList` (frame 45) -> `proofs/smoke/Smoke_05_LinkedList.png`
  4. `Phase7Proof-08-Tree` (frame 45) -> `proofs/smoke/Smoke_08_Tree.png`
  5. `Phase7Proof-10-Graph` (frame 45) -> `proofs/smoke/Smoke_10_Graph.png`
  6. `FoundationV2-Phase9-ArraySystem` (frame 30) -> `proofs/smoke/Smoke_ArraySystem.png`
- **Execution Time**: ~27.95 seconds.
- **Output Target**: `proofs/smoke/` (~4.3 MB per 1080p still).
- **Exit Code**: `0` on success, `1` on any failure.

---

## 4. Example Output

### 4.1 Fast Preflight PASS Output
```text
> dsaalgo@1.0.0 validate:v2
> node tools/validate-v2.mjs

================================================================
   FOUNDATION V2 AUTOMATED QA & VALIDATION SUITE
   Mode: FAST PREFLIGHT
================================================================

  [PASS] audio sync
  [PASS] scene / frame boundaries
  [PASS] deterministic render scan
  [PASS] SVG geometry
  [PASS] Array slot invariants
  [PASS] Pointer lanes
  [PASS] Partition bounds
  [PASS] adaptive layout
  [PASS] course theme rules
  [PASS] intentional failure harness
  [SKIP] proof smoke renders (run 'npm run validate:v2:full' to execute)

================================================================
SUMMARY: 10 / 10 checks passed in 0.06s
RESULT: ALL QA CHECKS PASSED
================================================================
```

### 4.2 Full Regression PASS Output
```text
> dsaalgo@1.0.0 validate:v2:full
> node tools/validate-v2.mjs --full

================================================================
   FOUNDATION V2 AUTOMATED QA & VALIDATION SUITE
   Mode: FULL (Preflight + Proof Smoke Renders)
================================================================

  [PASS] audio sync
  [PASS] scene / frame boundaries
  [PASS] deterministic render scan
  [PASS] SVG geometry
  [PASS] Array slot invariants
  [PASS] Pointer lanes
  [PASS] Partition bounds
  [PASS] adaptive layout
  [PASS] course theme rules
  [PASS] intentional failure harness

  Running headless proof smoke renders (6 compositions)...
  [PASS] proof smoke renders

================================================================
SUMMARY: 11 / 11 checks passed in 27.95s
RESULT: ALL QA CHECKS PASSED
================================================================
```

---

## 5. Intentional Failure Negative Test Harness

A validator that only passes good input is not fully proven. The intentional failure harness (`tools/qa/validator-intentional-failures.mjs`) feeds 8 deliberately invalid inputs to the validators and verifies that each is caught and rejected for the exact required reason:

| # | Test Scenario | Malformed Input | Expected Failure Reason | Test Status |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **Anchor Frame at Limit** | `resolvedFrame = 100` with `duration_frames = 100` | Rejected: frame must satisfy $0 \le \text{frame} < \text{durationFrames}$ (valid: 0..99). | **PROVEN CAUGHT** |
| 2 | **Duplicate Word ID** | Two words with ID `"W0001"` in same sync data | Rejected: duplicate word ID detected. | **PROVEN CAUGHT** |
| 3 | **Negative Pointer Index** | `pointer.index = -1` in array of size 8 | Rejected: index out of bounds ($< 0$). | **PROVEN CAUGHT** |
| 4 | **Pointer Index == Count** | `pointer.index = 8` in array of size 8 | Rejected: index out of bounds ($\ge \text{count}$). | **PROVEN CAUGHT** |
| 5 | **Partition End Beyond Array** | `endIndex = 8` in array of size 6 | Rejected: partition interval extends past array bounds. | **PROVEN CAUGHT** |
| 6 | **NaN in Geometry Coordinates** | `getEdgeCoords(100, NaN, 200, 200)` | Rejected: non-finite input detected. | **PROVEN CAUGHT** |
| 7 | **MeshGrid Zero Dimensions** | `rows = 0` in `validateMeshGridConfig` | Rejected: rows must be positive integer. | **PROVEN CAUGHT** |
| 8 | **Non-Deterministic Render Code** | Scoped fixture containing `const val = Math.random();` | Rejected: forbidden `Math.random()` construct detected. | **PROVEN CAUGHT** |

---

## 6. Files Covered & Known Exclusions

### 6.1 Scanned and Verified Directories
- `kit/components/` (all primitives: Array, RoughNode, ParametricArrow, MeshGrid, etc.)
- `kit/lib/` (geometry math, audioSyncV2, svgPathV2, theme, chalk filters)
- `remotion-project/src/Root.tsx` (composition registration)
- `questions/*/sync/*.json` (production audio sync files)
- `proofs/smoke/` (smoke render output)

### 6.2 Explicit Exclusions & Boundaries
- **Legacy Question Scenes**: Lesson scenes for Q1–Q10 (`questions/01-arrays-hashing/`) are **NOT** modified or refactored.
- **Documentation Comments**: Comments describing determinism (e.g. `// No Math.random allowed`) are ignored by the code scanner.
- **Future Questions**: Sort Colors (LC 75) and Q10 migration remain unstarted, respecting pipeline boundaries.

---

## 7. Verification Confirmation

- Fast preflight command: `npm run validate:v2` -> **PASS** (10/10 checks, 0.06s).
- Full regression command: `npm run validate:v2:full` -> **PASS** (11/11 checks, 27.95s, 6 smoke stills generated).
- Intentional failure harness: 8/8 negative tests successfully caught.
- Production boundary: 0 lesson scenes modified.
