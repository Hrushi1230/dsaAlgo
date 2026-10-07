import React from "react";
import { RoughBox } from "../RoughBox";
import { theme } from "../../lib/theme";

export type SemanticSlotState =
  | "default"
  | "query"
  | "current"
  | "confirmed"
  | "rejected"
  | "history"
  | "neutral"
  | "active"
  | "sorted"
  | "comparing"
  | "eliminated"
  | "dimmed";

export interface ArraySlotV2Props {
  /** Width of the slot in pixels */
  width: number;
  /** Height of the slot in pixels */
  height: number;
  /** Semantic state determining border and fill */
  semanticState?: SemanticSlotState;
  /** Custom stroke color overriding state preset */
  stroke?: string;
  /** Custom stroke width overriding state preset */
  strokeWidth?: number;
  /** Custom fill color */
  fill?: string;
  /** Seed for deterministic rough generation */
  seed?: number;
  /** Optional nested children (e.g. slot overlays) */
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Resolves colors and stroke width based on semantic state preset
 */
function resolveSlotStyling(
  state: SemanticSlotState = "default",
  stroke?: string,
  strokeWidth?: number,
  fill?: string
): { stroke: string; strokeWidth: number; fill?: string } {
  if (stroke) {
    return {
      stroke,
      strokeWidth: strokeWidth ?? 3,
      fill,
    };
  }

  switch (state) {
    case "query":
      return {
        stroke: theme.cyan,
        strokeWidth: strokeWidth ?? 4,
        fill: fill ?? "rgba(86, 204, 242, 0.12)",
      };
    case "current":
      return {
        stroke: theme.pivot,
        strokeWidth: strokeWidth ?? 4.5,
        fill: fill ?? "rgba(255, 209, 102, 0.18)",
      };
    case "sorted":
    case "confirmed":
      return {
        stroke: theme.good,
        strokeWidth: strokeWidth ?? 4.5,
        fill: fill ?? "rgba(60, 229, 167, 0.20)",
      };
    case "rejected":
      return {
        stroke: theme.bad,
        strokeWidth: strokeWidth ?? 4,
        fill: fill ?? "rgba(235, 87, 87, 0.15)",
      };
    case "history":
      return {
        stroke: theme.chalkDim,
        strokeWidth: strokeWidth ?? 2,
        fill,
      };
    case "neutral":
    case "dimmed":
      return {
        stroke: theme.chalkDim,
        strokeWidth: strokeWidth ?? 2.5,
        fill: fill ?? "rgba(248, 246, 240, 0.04)",
      };
    case "active":
      return {
        stroke: theme.pivot,
        strokeWidth: strokeWidth ?? 4.5,
        fill: fill ?? "rgba(255, 209, 102, 0.18)",
      };
    case "comparing":
      return {
        stroke: theme.cyan,
        strokeWidth: strokeWidth ?? 4,
        fill: fill ?? "rgba(92, 225, 230, 0.12)",
      };
    case "eliminated":
      return {
        stroke: theme.bad,
        strokeWidth: strokeWidth ?? 3.5,
        fill: fill ?? "rgba(235, 87, 87, 0.12)",
      };
    case "default":
    default:
      return {
        stroke: theme.chalkText,
        strokeWidth: strokeWidth ?? 3,
        fill,
      };
  }
}

/**
 * ArraySlotV2 — Fixed chalk slot container for array elements.
 *
 * Permanent Law: The slot stays fixed. Values move into and out of slots,
 * but slot geometry and position never shift during algorithm operations.
 */
export const ArraySlotV2: React.FC<ArraySlotV2Props> = ({
  width,
  height,
  semanticState = "default",
  stroke: propStroke,
  strokeWidth: propStrokeWidth,
  fill: propFill,
  seed = 1,
  children,
  className,
  style,
}) => {
  const styling = resolveSlotStyling(
    semanticState,
    propStroke,
    propStrokeWidth,
    propFill
  );

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width,
        height,
        flexShrink: 0,
        ...style,
      }}
    >
      <RoughBox
        width={width}
        height={height}
        stroke={styling.stroke}
        strokeWidth={styling.strokeWidth}
        fill={styling.fill}
        seed={seed}
      />
      {children && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};
