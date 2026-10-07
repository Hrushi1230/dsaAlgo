# PHASE 9 — ARRAY V2 PRIMITIVE SYSTEM

> **Status**: COMPLETE & VERIFIED  
> **Date**: 2026-09-14  
> **Authority**: `docs/00_PHASE7_COMPLETE_KIT_DRIVEN_VISUAL_GRAMMAR.md` & `docs/structures/01-array-sequence.md`  
> **Render Artifacts**: 6 Rendered PNG Stills + Standalone 12s MP4 Video in `proofs/phase9-array/`  
> **Board Standard**: Course Green Chalkboard (`theme.boardBg` ≈ `#18523d`)  

---

## 1. Executive Summary

Phase 9 establishes the production-grade **Array V2 primitive system** (`@dsa/kit`) for long-form Code With Animation DSA productions.

Built strictly upon the locked visual grammar:
```text
FIXED SLOT TRACK
+ STABLE INDICES
+ MUTABLE VALUES
+ POINTER LANES
+ OPTIONAL REGION BANDS
```
Permanent Law:
```text
SLOTS STAY FIXED.
VALUES MOVE.
INDICES NEVER MOVE.
```

The system completely eliminates the antipattern of coupling value identity to slot geometry. It provides decoupled slot shells (`ArraySlotV2`), value occupants (`ArrayValueV2`), slot-anchored index rows (`ArrayIndexRowV2`), multi-lane collision-staggered pointers (`PointerLaneV2`), semantic range underlays (`PartitionBandV2`), and an adaptive layout engine (`ArrayTrackV2`).

All 7 mandatory array operations (Read, Write, Swap, Pointer Move, Range Shrink/Expand, Partition Updates, Dense Arrays) were implemented, bundled without errors, and verified via 6 full-resolution 1080p stills and a 12.0s MP4 video render in `proofs/phase9-array/`.

---

## 2. Decision Framework: REUSE / EXTEND / CREATE

| Component | Decision | Rationale |
|:---|:---:|:---|
| **`ArraySlotV2`** | **CREATE / REUSE** | Reuses generic `RoughBox` internally. Encapsulates fixed dimensions, deterministic seeds, and semantic slot stroke/fill states (`default`, `query`, `current`, `confirmed`, `rejected`, `history`). |
| **`ArrayValueV2`** | **CREATE** | Strictly decouples the value from the slot container. Enables resting, in-place pop updates, independent semantic coloring, and parabolic flight paths during swaps. |
| **`ArrayIndexRowV2`** | **CREATE** | Strictly anchors indices to slot positions (`idx [i]`, `[i]`, or `i`). Indices **never** move with values during swaps. Supports custom highlighting. |
| **`PointerLaneV2`** | **CREATE / REUSE** | Reuses `ParametricArrow` for pointer stems. Places pointers strictly outside the array track (top or bottom). Implements vertical lane staggering to resolve collision when multiple pointers target the same index. |
| **`PartitionBandV2`** | **CREATE** | Visualizes contiguous semantic ranges (e.g. Dutch National Flag partitions, sliding windows). Renders subtle chalk underlays or brackets directly on chalkboard green without creating second rows of cards. |
| **`ArrayTrackV2`** | **CREATE** | Unified layout orchestrator. Derives adaptive slot dimensions and font sizes based on item count and container constraints. Exposes `getSlotRect(i)` coordinates. |

---

## 3. Component Architecture & APIs

### A. `ArraySlotV2` (`kit/components/array/ArraySlotV2.tsx`)
Provides fixed-geometry chalkboard slot shells.
```ts
export type SemanticSlotState =
  | "default"
  | "query"
  | "current"
  | "confirmed"
  | "rejected"
  | "history";

export interface ArraySlotV2Props {
  width: number;
  height: number;
  semanticState?: SemanticSlotState;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
  seed?: number;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
```

### B. `ArrayValueV2` (`kit/components/array/ArrayValueV2.tsx`)
Renders the value occupant. Positioned absolutely by coordinate so it can animate freely without distorting slot geometry.
```ts
export interface ArrayValueV2Props {
  value: string | number | React.ReactNode;
  x: number;
  y: number;
  fontSize?: number;
  color?: string;
  fontWeight?: number | string;
  semanticState?: SemanticSlotState;
  scale?: number;
  opacity?: number;
  isInFlight?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
```

### C. `ArrayIndexRowV2` (`kit/components/array/ArrayIndexRowV2.tsx`)
Slot-anchored index numbering row.
```ts
export interface ArrayIndexRowV2Props {
  count: number;
  slotWidth: number;
  gap: number;
  format?: "idx [i]" | "[i]" | "i";
  highlightedIndices?: Record<number, string>;
  defaultColor?: string;
  fontSize?: number;
  fontWeight?: number | string;
  className?: string;
  style?: React.CSSProperties;
}
```

### D. `PointerLaneV2` (`kit/components/array/PointerLaneV2.tsx`)
External multi-lane pointer system with collision awareness.
```ts
export interface ArrayPointer {
  id: string;
  label: string;
  index: number;
  color?: string;
  lane?: number; // 0 = closest to track, 1 = staggered lane
  arrowLength?: number;
}

export interface PointerLaneV2Props {
  pointers: ArrayPointer[];
  count: number;
  slotWidth: number;
  gap: number;
  placement?: "bottom" | "top";
  baseArrowLength?: number;
  laneHeight?: number;
  className?: string;
  style?: React.CSSProperties;
}
```

### E. `PartitionBandV2` (`kit/components/array/PartitionBandV2.tsx`)
Semantic range underlays and brackets directly on the board.
```ts
export interface ArrayPartition {
  id: string;
  startIndex: number;
  endIndex: number;
  label?: string;
  color?: string;
  variant?: "band" | "bracket";
  seed?: number;
}

export interface PartitionBandV2Props {
  partitions: ArrayPartition[];
  slotWidth: number;
  slotHeight: number;
  gap: number;
  className?: string;
  style?: React.CSSProperties;
}
```

### F. `ArrayTrackV2` (`kit/components/array/ArrayTrackV2.tsx`)
Layout and animation orchestrator.
```ts
export interface ArrayTrackV2Props {
  elements: (string | number | ArrayElementItem)[];
  slotWidth?: number;
  slotHeight?: number;
  gap?: number;
  maxWidth?: number;
  showIndices?: boolean;
  indexPlacement?: "top" | "bottom";
  indexFormat?: "idx [i]" | "[i]" | "i";
  highlightedIndices?: Record<number, string>;
  pointers?: ArrayPointer[];
  pointerPlacement?: "bottom" | "top";
  partitions?: ArrayPartition[];
  swap?: SwapAnimationConfig;
  renderValue?: (item: ArrayElementItem, rect: SlotRect) => React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
```

---

## 4. Adaptive Sizing & Layout Rules

`ArrayTrackV2` dynamically derives geometry and typography based on item count:

| Element Count Range | Category | Slot Width | Slot Height | Gap | Value Font | Index Font | Visual Character |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---|
| **1 – 6 items** | Small / Opener | `140px` | `120px` | `20px` | `52px` | `24px` | Bold, heroic chalkboard slots for openers and simple testcases. |
| **7 – 10 items** | Normal | `110px` | `100px` | `16px` | `40px` | `20px` | Balanced standard teaching size with multi-lane pointers. |
| **11 – 16 items** | Dense | `78px` | `80px` | `10px` | `30px` | `16px` | High information density without text clipping or crowding. |
| **17 – 24 items** | Ultra-Dense | `54px` | `64px` | `6px` | `22px` | `14px` | Compact registers, abbreviated index format `[i]`. |

---

## 5. Operations Proved & Render Artifacts

All proof states were rendered via `tools/render_phase9_array.js` to `proofs/phase9-array/`:

| Proof State | Frame | Output Still | Operation & Mechanics Proven |
|:---|:---:|:---|:---|
| **`A_CORE`** | 30 | `proofs/phase9-array/A_CORE.png` | Standard fixed slot track (`140×120px`), top index numbering row, crisp monospace values `[2, 0, 2, 1, 1, 0]`, bottom pointer `i`. |
| **`B_READ_WRITE`** | 90 | `proofs/phase9-array/B_READ_WRITE.png` | Read focus on idx 2 (`theme.cyan`), in-place write on idx 4 (`theme.pivot`). Supports negative values (`-42`, `-5`) and duplicates cleanly. |
| **`C_SWAP`** | 150 | `proofs/phase9-array/C_SWAP.png` | Parabolic value flight: Values fly along overhead parabolic curve ($h = -75\text{px}$) with motion blur/shadow; slot shells and index numbers remain **100% frozen**. |
| **`D_POINTERS`** | 210 | `proofs/phase9-array/D_POINTERS.png` | Multi-lane pointer staggering: `low` (lane 0) and `mid` (lane 1) both point to index 2 simultaneously without visual collision. |
| **`E_PARTITION`** | 270 | `proofs/phase9-array/E_PARTITION.png` | Dutch National Flag partitions: Confirmed 0s (`theme.good`), Confirmed 1s (`theme.pivot`), Unknown Search Region `[mid..high]` (`theme.warn`), Confirmed 2s (`theme.cyan`) directly on chalkboard. |
| **`F_DENSE`** | 330 | `proofs/phase9-array/F_DENSE.png` | Dual density stress test: 16-element dense array (`78×80px`) with large numbers (`1024`, `999`, `-99`) + 20-element compact array (`54×64px`) with `[i]` index formatting. |

**Standalone Video Deliverable**:
- `proofs/phase9-array/ArraySystemProof.mp4` (12.0s, 360 frames, 1080p 30fps, 1.21 MB).

---

## 6. Migration Notes for Future Problems (e.g. Sort Colors #011)

When authoring future array problem scenes:
1. Replace bespoke slot loops with `<ArrayTrackV2 elements={...} />`.
2. For swap animations, supply `swap={{ idxA, idxB, progress }}` directly to `ArrayTrackV2`. Never translate slot shells.
3. For Dutch National Flag or two-pointer partitions, pass `partitions={[...]}` and `pointers={[...]}`.
4. If coordinates are needed for custom flight or callouts, use `getSlotRect(i)`.

---

## 7. Pipeline Boundary Check & Stop Condition

Per `.agents/AGENTS.md`:
- **Phase 9 is COMPLETE and FULLY VERIFIED.**
- **Phase 10** is NOT started.
- **Question #011 (Sort Colors)** is NOT started.
- **Q1–Q10 production lessons** in `questions/01-arrays-hashing/` remain completely untouched.

**Phase 9 is ready for review and sign-off.**
