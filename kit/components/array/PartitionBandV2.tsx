import React, { useMemo } from "react";
import rough from "roughjs";
import { theme, fonts } from "../../lib/theme";
import { CHALK_FILTER_STRONG_ID } from "../../lib/chalk";

export interface ArrayPartition {
  /** Unique id (auto-generated from indices if omitted) */
  id?: string;
  /** Start slot index (inclusive) */
  startIndex: number;
  /** End slot index (inclusive) */
  endIndex: number;
  /** Label describing the region (e.g. "SORTED (0..i)", "0s (LEFT)", "UNPROCESSED") */
  label?: string;
  /** Theme color for the partition */
  color?: string;
  /** Visual style: "band" (subtle translucent underlay) or "bracket" (chalk range bracket) */
  variant?: "band" | "bracket";
  /** Bracket label placement: "top" or "bottom" (default: "top") */
  bracketPlacement?: "top" | "bottom";
  /** Seed for deterministic rough generation */
  seed?: number;
}

export interface PartitionBandV2Props {
  /** List of partitions */
  partitions: ArrayPartition[];
  /** Width of each slot in pixels */
  slotWidth: number;
  /** Height of each slot in pixels */
  slotHeight: number;
  /** Gap between slots in pixels */
  gap: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * PartitionBandV2 — Semantic range & partition visualizer.
 *
 * Permanent Law: Does not create another row of boxes.
 * Renders a subtle chalk underlay band or range bracket spanning the exact
 * slot interval, directly on the green chalkboard.
 */
export const PartitionBandV2: React.FC<PartitionBandV2Props> = ({
  partitions,
  slotWidth,
  slotHeight,
  gap,
  className,
  style,
}) => {
  if (partitions.length === 0) return null;

  return (
    <div
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        ...style,
      }}
    >
      {partitions.map((part, partIdx) => {
        const leftX = part.startIndex * (slotWidth + gap);
        const rightX = part.endIndex * (slotWidth + gap) + slotWidth;
        const width = rightX - leftX;
        const color = part.color ?? theme.good;
        const isBracket = part.variant === "bracket";
        const partKey = part.id ?? `part-${part.startIndex}-${part.endIndex}-${partIdx}`;

        return (
          <React.Fragment key={partKey}>
            {/* 1. Subtle Translucent Underlay Band */}
            {!isBracket && (
              <div
                style={{
                  position: "absolute",
                  left: leftX - 4,
                  top: -6,
                  width: width + 8,
                  height: slotHeight + 12,
                  borderRadius: 8,
                  border: `2px dashed ${color}`,
                  backgroundColor: `${color}18`,
                  boxSizing: "border-box",
                  zIndex: 1,
                }}
              />
            )}

            {/* 2. Range Bracket Below Slots */}
            {isBracket && (
              <svg
                width={width}
                height={28}
                style={{
                  position: "absolute",
                  left: leftX,
                  top: slotHeight + 6,
                  overflow: "visible",
                  zIndex: 2,
                }}
              >
                <path
                  d={`M 2 4 L 2 16 Q 2 22 8 22 L ${width / 2 - 8} 22 Q ${width / 2} 22 ${width / 2} 26 Q ${width / 2} 22 ${width / 2 + 8} 22 L ${width - 8} 22 Q ${width - 2} 22 ${width - 2} 16 L ${width - 2} 4`}
                  fill="none"
                  stroke={color}
                  strokeWidth={2.5}
                  filter={`url(#${CHALK_FILTER_STRONG_ID})`}
                />
              </svg>
            )}

            {/* 3. Partition Label */}
            {part.label && (
              <div
                style={{
                  position: "absolute",
                  left: leftX + width / 2,
                  top: isBracket ? slotHeight + 36 : -34,
                  transform: "translateX(-50%)",
                  fontFamily: fonts.mono,
                  fontSize: 14,
                  fontWeight: 700,
                  color,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  padding: "2px 8px",
                  borderRadius: 4,
                  backgroundColor: "rgba(24, 82, 61, 0.85)",
                  border: `1px solid ${color}66`,
                  zIndex: 15,
                }}
              >
                {part.label}
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
