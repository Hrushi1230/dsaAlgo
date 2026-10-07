import React, { useMemo } from "react";
import { theme, fonts } from "../../lib/theme";
import { ArraySlotV2, SemanticSlotState } from "./ArraySlotV2";
import { ArrayValueV2 } from "./ArrayValueV2";
import { ArrayIndexRowV2 } from "./ArrayIndexRowV2";
import { PointerLaneV2, ArrayPointer } from "./PointerLaneV2";
import { PartitionBandV2, ArrayPartition } from "./PartitionBandV2";

export interface ArrayElementItem {
  /** The value (string or number) */
  value: string | number;
  /** Semantic state of the slot container */
  slotState?: SemanticSlotState;
  /** Semantic state of the value occupant */
  valueState?: SemanticSlotState;
  /** Custom slot stroke */
  stroke?: string;
  /** Custom slot fill */
  fill?: string;
}

export interface SwapAnimationConfig {
  /** First slot index */
  idxA: number;
  /** Second slot index */
  idxB: number;
  /** Normalized swap progress [0..1] */
  progress: number;
  /** Optional flight arc peak height in pixels (default: -70) */
  arcHeight?: number;
  /** Label on the swap flight curve */
  label?: string;
}

/** Export ArrayPointer and canonical aliases */
export type { ArrayPointer } from "./PointerLaneV2";
export type PointerIndicator = ArrayPointer;
export type ArraySwapConfig = SwapAnimationConfig;

export interface SlotRect {
  index: number;
  x: number;
  y: number;
  width: number;
  height: number;
  centerX: number;
  centerY: number;
}

export interface ArrayTrackV2Props {
  /** Array elements: simple primitives or element objects */
  elements: (string | number | ArrayElementItem)[];
  /** Custom slot width (if omitted, adaptively computed) */
  slotWidth?: number;
  /** Custom slot height (if omitted, adaptively computed) */
  slotHeight?: number;
  /** Custom gap between slots (if omitted, adaptively computed) */
  gap?: number;
  /** Maximum container width constraint (default: 1400) */
  maxWidth?: number;
  /** Whether to show the index row */
  showIndices?: boolean;
  /** Index row placement: "top" or "bottom" (default: "top") */
  indexPlacement?: "top" | "bottom";
  /** Format of index row */
  indexFormat?: "idx [i]" | "[i]" | "i";
  /** Mapping of highlighted indices */
  highlightedIndices?: Record<number, string>;
  /** Active pointers */
  pointers?: ArrayPointer[];
  /** Pointer lane placement: "bottom" or "top" (default: "bottom") */
  pointerPlacement?: "bottom" | "top";
  /** Active partition bands / ranges */
  partitions?: ArrayPartition[];
  /** Optional in-flight swap animation */
  swap?: SwapAnimationConfig;
  /** Render prop for custom value presentation if needed */
  renderValue?: (item: ArrayElementItem, rect: SlotRect) => React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Derives adaptive slot dimensions and typography from item count
 */
function getAdaptiveDimensions(
  count: number,
  maxWidth: number,
  customW?: number,
  customH?: number,
  customGap?: number
): { slotWidth: number; slotHeight: number; gap: number; fontSize: number; indexFontSize: number } {
  let dim = { slotWidth: 140, slotHeight: 120, gap: 20, fontSize: 52, indexFontSize: 24 };

  if (customW && customH) {
    const gap = customGap ?? 16;
    const fontSize = Math.min(52, Math.max(20, Math.floor(customH * 0.45)));
    dim = { slotWidth: customW, slotHeight: customH, gap, fontSize, indexFontSize: 20 };
  } else if (count <= 6) {
    dim = { slotWidth: 140, slotHeight: 120, gap: 20, fontSize: 52, indexFontSize: 24 };
  } else if (count <= 10) {
    dim = { slotWidth: 110, slotHeight: 100, gap: 16, fontSize: 40, indexFontSize: 20 };
  } else if (count <= 16) {
    dim = { slotWidth: 78, slotHeight: 80, gap: 10, fontSize: 30, indexFontSize: 16 };
  } else {
    // Ultra dense: 17+ elements
    const available = Math.max(200, maxWidth - 100);
    const computedW = Math.max(36, Math.floor(available / count) - 6);
    dim = { slotWidth: computedW, slotHeight: 64, gap: 6, fontSize: 22, indexFontSize: 14 };
  }

  // Container constraint wins: If total visual width exceeds maxWidth, scale down
  const totalWidth = count * dim.slotWidth + Math.max(0, count - 1) * dim.gap;
  if (totalWidth > maxWidth && count > 0) {
    const scale = maxWidth / totalWidth;
    return {
      slotWidth: Math.max(20, Math.floor(dim.slotWidth * scale)),
      slotHeight: Math.max(28, Math.floor(dim.slotHeight * scale)),
      gap: Math.max(2, Math.floor(dim.gap * scale)),
      fontSize: Math.max(12, Math.floor(dim.fontSize * scale)),
      indexFontSize: Math.max(10, Math.floor(dim.indexFontSize * scale)),
    };
  }

  return dim;
}

/**
 * ArrayTrackV2 — Production Array Layout & Coordinate Orchestrator.
 *
 * Permanent Laws:
 * 1. SLOTS STAY FIXED.
 * 2. VALUES MOVE.
 * 3. INDICES NEVER MOVE.
 *
 * Orchestrates fixed slots, decoupled values, index rows, multi-lane pointers,
 * and semantic partition bands directly on the course green chalkboard.
 */
export const ArrayTrackV2: React.FC<ArrayTrackV2Props> = ({
  elements,
  slotWidth: propW,
  slotHeight: propH,
  gap: propGap,
  maxWidth = 1400,
  showIndices = true,
  indexPlacement = "top",
  indexFormat = "idx [i]",
  highlightedIndices: propHighlightedIndices = {},
  pointers = [],
  pointerPlacement = "bottom",
  partitions = [],
  swap,
  renderValue,
  className,
  style,
}) => {
  const count = elements.length;

  const { slotWidth, slotHeight, gap, fontSize, indexFontSize } = useMemo(() => {
    return getAdaptiveDimensions(count, maxWidth, propW, propH, propGap);
  }, [count, maxWidth, propW, propH, propGap]);

  // Normalized element objects
  const normalizedElements = useMemo<ArrayElementItem[]>(() => {
    return elements.map((el) => {
      if (typeof el === "object" && el !== null && "value" in el) {
        return el as ArrayElementItem;
      }
      return { value: el as string | number };
    });
  }, [elements]);

  // Precompute slot rect coordinates
  const slotRects = useMemo<SlotRect[]>(() => {
    return Array.from({ length: count }).map((_, i) => {
      const x = i * (slotWidth + gap);
      const y = 0;
      return {
        index: i,
        x,
        y,
        width: slotWidth,
        height: slotHeight,
        centerX: x + slotWidth / 2,
        centerY: y + slotHeight / 2,
      };
    });
  }, [count, slotWidth, slotHeight, gap]);

  // Merge swap highlights into indices and slots
  const effectiveHighlightedIndices = useMemo(() => {
    const map = { ...propHighlightedIndices };
    if (swap) {
      map[swap.idxA] = theme.pivot;
      map[swap.idxB] = theme.pivot;
    }
    return map;
  }, [propHighlightedIndices, swap]);

  const totalTrackWidth = count * slotWidth + (count - 1) * gap;

  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        userSelect: "none",
        ...style,
      }}
    >
      {/* 1. TOP POINTERS (if placed top) */}
      {pointers.length > 0 && pointerPlacement === "top" && (
        <div style={{ marginBottom: 12 }}>
          <PointerLaneV2
            pointers={pointers}
            count={count}
            slotWidth={slotWidth}
            gap={gap}
            placement="top"
          />
        </div>
      )}

      {/* 2. TOP INDEX ROW */}
      {showIndices && indexPlacement === "top" && (
        <div style={{ marginBottom: 14 }}>
          <ArrayIndexRowV2
            count={count}
            slotWidth={slotWidth}
            gap={gap}
            format={indexFormat}
            highlightedIndices={effectiveHighlightedIndices}
            fontSize={indexFontSize}
          />
        </div>
      )}

      {/* 3. MAIN TRACK STAGE (SLOTS + PARTITION BANDS + VALUES) */}
      <div
        style={{
          position: "relative",
          width: totalTrackWidth,
          height: slotHeight,
        }}
      >
        {/* Layer A: Semantic Partition Bands Underlay */}
        <PartitionBandV2
          partitions={partitions}
          slotWidth={slotWidth}
          slotHeight={slotHeight}
          gap={gap}
        />

        {/* Layer B: Fixed Slot Shells (100% stationary) */}
        <div style={{ display: "flex", gap, position: "absolute", inset: 0 }}>
          {normalizedElements.map((el, i) => {
            const isSwapSlot = swap && (i === swap.idxA || i === swap.idxB);
            const slotState = isSwapSlot ? "current" : el.slotState ?? "default";

            return (
              <ArraySlotV2
                key={i}
                width={slotWidth}
                height={slotHeight}
                semanticState={slotState}
                stroke={el.stroke}
                fill={el.fill}
                seed={i + 1}
              />
            );
          })}
        </div>

        {/* Layer C: Swap Flight Indicator Arc Overhead (if swap active) */}
        {swap && (
          <div
            style={{
              position: "absolute",
              top: -80,
              left: Math.min(slotRects[swap.idxA].centerX, slotRects[swap.idxB].centerX),
              width: Math.abs(slotRects[swap.idxB].centerX - slotRects[swap.idxA].centerX),
              height: 80,
              pointerEvents: "none",
            }}
          >
            <svg
              width="100%"
              height="100%"
              style={{ overflow: "visible" }}
            >
              <path
                d={`M 0 70 Q ${
                  Math.abs(slotRects[swap.idxB].centerX - slotRects[swap.idxA].centerX) / 2
                } -10 ${Math.abs(slotRects[swap.idxB].centerX - slotRects[swap.idxA].centerX)} 70`}
                fill="none"
                stroke={theme.pivot}
                strokeWidth={3.5}
                strokeDasharray="8 6"
              />
              {swap.label && (
                <text
                  x={Math.abs(slotRects[swap.idxB].centerX - slotRects[swap.idxA].centerX) / 2}
                  y={-2}
                  textAnchor="middle"
                  fontFamily={fonts.mono}
                  fontSize={18}
                  fontWeight={700}
                  fill={theme.pivot}
                >
                  {swap.label}
                </text>
              )}
            </svg>
          </div>
        )}

        {/* Layer D: Decoupled Values */}
        {normalizedElements.map((el, i) => {
          const rect = slotRects[i];

          // Handle swap flight trajectory for idxA and idxB
          if (swap && (i === swap.idxA || i === swap.idxB)) {
            const isA = i === swap.idxA;
            const fromRect = isA ? slotRects[swap.idxA] : slotRects[swap.idxB];
            const toRect = isA ? slotRects[swap.idxB] : slotRects[swap.idxA];
            const p = swap.progress;
            const arcH = swap.arcHeight ?? -70;

            // Parabolic flight coordinates
            const currentX = fromRect.centerX + (toRect.centerX - fromRect.centerX) * p;
            // Arc formula: 4 * h * p * (1 - p) creates a smooth peak at p=0.5
            const currentY = fromRect.centerY + arcH * (4 * p * (1 - p));

            return (
              <ArrayValueV2
                key={`val-${i}`}
                value={el.value}
                x={currentX}
                y={currentY}
                fontSize={fontSize}
                semanticState="current"
                isInFlight={p > 0.05 && p < 0.95}
                scale={1 + 0.15 * Math.sin(p * Math.PI)}
              />
            );
          }

          // Custom value renderer if supplied
          if (renderValue) {
            return (
              <React.Fragment key={`val-${i}`}>
                {renderValue(el, rect)}
              </React.Fragment>
            );
          }

          // Standard resting value
          return (
            <ArrayValueV2
              key={`val-${i}`}
              value={el.value}
              x={rect.centerX}
              y={rect.centerY}
              fontSize={fontSize}
              semanticState={el.valueState ?? "default"}
            />
          );
        })}
      </div>

      {/* 4. BOTTOM INDEX ROW */}
      {showIndices && indexPlacement === "bottom" && (
        <div style={{ marginTop: 14 }}>
          <ArrayIndexRowV2
            count={count}
            slotWidth={slotWidth}
            gap={gap}
            format={indexFormat}
            highlightedIndices={effectiveHighlightedIndices}
            fontSize={indexFontSize}
          />
        </div>
      )}

      {/* 5. BOTTOM POINTERS (if placed bottom) */}
      {pointers.length > 0 && pointerPlacement === "bottom" && (
        <div style={{ marginTop: 14 }}>
          <PointerLaneV2
            pointers={pointers}
            count={count}
            slotWidth={slotWidth}
            gap={gap}
            placement="bottom"
          />
        </div>
      )}
    </div>
  );
};
