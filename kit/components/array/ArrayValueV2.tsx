import React from "react";
import { theme, fonts } from "../../lib/theme";
import { SemanticSlotState } from "./ArraySlotV2";

export interface ArrayValueV2Props {
  /** The value to display (number, string, or ReactNode) */
  value: string | number | React.ReactNode;
  /** Current X coordinate (slot center X or custom flight X) */
  x: number;
  /** Current Y coordinate (slot center Y or custom flight Y) */
  y: number;
  /** Font size in pixels */
  fontSize?: number;
  /** Text color overriding semantic state */
  color?: string;
  /** Font weight */
  fontWeight?: number | string;
  /** Semantic state determining value color */
  semanticState?: SemanticSlotState;
  /** Scale factor (e.g. for pop animations during write/swap) */
  scale?: number;
  /** Opacity factor */
  opacity?: number;
  /** Whether the value is currently in flight during a swap */
  isInFlight?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Resolves text color based on semantic value state
 */
function resolveValueColor(
  state: SemanticSlotState = "default",
  color?: string
): string {
  if (color) return color;

  switch (state) {
    case "query":
    case "comparing":
      return theme.cyan;
    case "current":
    case "active":
      return theme.pivot;
    case "confirmed":
    case "sorted":
      return theme.good;
    case "rejected":
    case "eliminated":
      return theme.bad;
    case "history":
    case "neutral":
    case "dimmed":
      return theme.chalkDim;
    case "default":
    default:
      return theme.chalkText;
  }
}

/**
 * ArrayValueV2 — The decoupled, mutable occupant of an array slot.
 *
 * Permanent Law: Values move; slots remain stationary.
 * ArrayValueV2 renders cleanly inside a slot or in parabolic flight overhead
 * during swap operations without altering slot coordinates.
 */
export const ArrayValueV2: React.FC<ArrayValueV2Props> = ({
  value,
  x,
  y,
  fontSize = 44,
  color: propColor,
  fontWeight = 700,
  semanticState = "default",
  scale = 1,
  opacity = 1,
  isInFlight = false,
  className,
  style,
}) => {
  const textColor = resolveValueColor(semanticState, propColor);

  return (
    <div
      className={className}
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: `translate(-50%, -50%) scale(${scale})`,
        fontFamily: fonts.mono,
        fontSize,
        fontWeight,
        color: textColor,
        userSelect: "none",
        pointerEvents: "none",
        zIndex: isInFlight ? 20 : 10,
        filter: isInFlight ? `drop-shadow(0 4px 12px ${textColor}66)` : undefined,
        opacity,
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {value}
    </div>
  );
};
