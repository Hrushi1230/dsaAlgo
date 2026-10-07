import React from "react";
import { theme, fonts } from "../../lib/theme";
import { ParametricArrow } from "../ParametricArrow";

export interface ArrayPointer {
  /** Unique identifier */
  id: string;
  /** Spoken / display label (e.g. "low", "mid", "high", "i", "j", "slow", "fast") */
  label: string;
  /** Target slot index it currently points to */
  index: number;
  /** Color overriding role */
  color?: string;
  /** Vertical lane for collision staggering (0 = closest, 1 = further, 2 = outermost) */
  lane?: number;
  /** Optional custom stem length in pixels */
  arrowLength?: number;
}

export interface PointerLaneV2Props {
  /** List of active pointers */
  pointers: ArrayPointer[];
  /** Total number of slots */
  count: number;
  /** Width of each slot in pixels */
  slotWidth: number;
  /** Gap between slots in pixels */
  gap: number;
  /** Placement relative to track: "bottom" (pointing up) or "top" (pointing down) */
  placement?: "bottom" | "top";
  /** Base stem length in pixels (default: 36) */
  baseArrowLength?: number;
  /** Distance between vertical lanes in pixels (default: 34) */
  laneHeight?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Resolves standard pointer color by role name if color not provided
 */
function resolvePointerColor(label: string, color?: string): string {
  if (color) return color;

  const lower = label.toLowerCase();
  if (lower.includes("low") || lower.includes("left") || lower === "i" || lower.includes("slow")) {
    return theme.cyan;
  }
  if (lower.includes("mid") || lower.includes("pivot") || lower.includes("write")) {
    return theme.pivot;
  }
  if (lower.includes("high") || lower.includes("right") || lower === "j" || lower.includes("fast")) {
    return theme.good;
  }
  if (lower.includes("warn") || lower.includes("target")) {
    return theme.warn;
  }
  return theme.chalkText;
}

/**
 * PointerLaneV2 — Multi-lane, collision-aware pointer system.
 *
 * Permanent Law: Pointers live strictly outside the array track.
 * Moving a pointer never shifts slot geometry. Multiple pointers at the
 * same index are vertically staggered across distinct lanes.
 */
export const PointerLaneV2: React.FC<PointerLaneV2Props> = ({
  pointers,
  count,
  slotWidth,
  gap,
  placement = "bottom",
  baseArrowLength = 34,
  laneHeight = 32,
  className,
  style,
}) => {
  if (pointers.length === 0) return null;

  const isBottom = placement === "bottom";
  const maxLane = Math.max(0, ...pointers.map((p) => p.lane ?? 0));
  const totalContainerHeight = baseArrowLength + (maxLane + 1) * laneHeight + 10;

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: count * slotWidth + (count - 1) * gap,
        height: totalContainerHeight,
        userSelect: "none",
        pointerEvents: "none",
        ...style,
      }}
    >
      <svg
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0, overflow: "visible" }}
      >
        {pointers.map((ptr) => {
          const lane = ptr.lane ?? 0;
          const color = resolvePointerColor(ptr.label, ptr.color);
          const slotCenterX = ptr.index * (slotWidth + gap) + slotWidth / 2;

          if (isBottom) {
            // Placement: BOTTOM -> Arrow points UPwards into bottom of slot
            const targetY = 2; // At top of container (closest to slot)
            const stemLength = baseArrowLength + lane * laneHeight;
            const originY = targetY + stemLength;

            return (
              <g key={ptr.id}>
                {/* Upward pointing arrow */}
                <ParametricArrow
                  x1={slotCenterX}
                  y1={originY}
                  x2={slotCenterX}
                  y2={targetY}
                  stroke={color}
                  strokeWidth={3}
                  headLength={14}
                  headAngleDeg={24}
                  headStyle="filled"
                />
                {/* Pointer Label Badge */}
                <rect
                  x={slotCenterX - 36}
                  y={originY + 4}
                  width={72}
                  height={24}
                  rx={5}
                  fill={theme.boardBg}
                  stroke={color}
                  strokeWidth={1.5}
                />
                <text
                  x={slotCenterX}
                  y={originY + 21}
                  textAnchor="middle"
                  fontFamily={fonts.mono}
                  fontSize={15}
                  fontWeight={700}
                  fill={color}
                >
                  {ptr.label}
                </text>
              </g>
            );
          } else {
            // Placement: TOP -> Arrow points DOWNwards into top of slot
            const targetY = totalContainerHeight - 2; // At bottom of container (closest to slot)
            const stemLength = baseArrowLength + lane * laneHeight;
            const originY = targetY - stemLength;

            return (
              <g key={ptr.id}>
                {/* Downward pointing arrow */}
                <ParametricArrow
                  x1={slotCenterX}
                  y1={originY}
                  x2={slotCenterX}
                  y2={targetY}
                  stroke={color}
                  strokeWidth={3}
                  headLength={14}
                  headAngleDeg={24}
                  headStyle="filled"
                />
                {/* Pointer Label Badge */}
                <rect
                  x={slotCenterX - 36}
                  y={originY - 26}
                  width={72}
                  height={24}
                  rx={5}
                  fill={theme.boardBg}
                  stroke={color}
                  strokeWidth={1.5}
                />
                <text
                  x={slotCenterX}
                  y={originY - 9}
                  textAnchor="middle"
                  fontFamily={fonts.mono}
                  fontSize={15}
                  fontWeight={700}
                  fill={color}
                >
                  {ptr.label}
                </text>
              </g>
            );
          }
        })}
      </svg>
    </div>
  );
};
