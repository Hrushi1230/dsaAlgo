import React from "react";
import { theme, fonts } from "../../lib/theme";

export interface ArrayIndexRowV2Props {
  /** Total number of array slots */
  count: number;
  /** Width of each slot in pixels */
  slotWidth: number;
  /** Gap between slots in pixels */
  gap: number;
  /** Format of index display: "idx [i]" | "[i]" | "i" */
  format?: "idx [i]" | "[i]" | "i";
  /** Mapping of slot index to custom highlight color or theme token */
  highlightedIndices?: Record<number, string>;
  /** Default color for unhighlighted indices */
  defaultColor?: string;
  /** Font size in pixels */
  fontSize?: number;
  /** Font weight */
  fontWeight?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * ArrayIndexRowV2 — Stable index numbering row aligned with slot centers.
 *
 * Permanent Law: Indices belong to slots, not values. Indices NEVER move
 * during swap, write, or partition operations.
 */
export const ArrayIndexRowV2: React.FC<ArrayIndexRowV2Props> = ({
  count,
  slotWidth,
  gap,
  format = "idx [i]",
  highlightedIndices = {},
  defaultColor = theme.chalkDim,
  fontSize = 22,
  fontWeight = 600,
  className,
  style,
}) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        gap,
        userSelect: "none",
        pointerEvents: "none",
        ...style,
      }}
    >
      {Array.from({ length: count }).map((_, i) => {
        const highlightColor = highlightedIndices[i];
        const isHighlighted = highlightColor !== undefined;
        const color = highlightColor ?? defaultColor;

        const label =
          format === "idx [i]"
            ? `idx [${i}]`
            : format === "[i]"
            ? `[${i}]`
            : `${i}`;

        return (
          <div
            key={i}
            style={{
              width: slotWidth,
              textAlign: "center",
              fontFamily: fonts.mono,
              fontSize,
              fontWeight: isHighlighted ? 700 : fontWeight,
              color,
              letterSpacing: "0.5px",
              flexShrink: 0,
            }}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
};
