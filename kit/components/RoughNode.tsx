import React, { useMemo } from "react";
import { useCurrentFrame, interpolate } from "remotion";
import rough from "roughjs";
import { theme, fonts } from "../lib/theme";
import { CHALK_FILTER_STRONG_ID } from "../lib/chalk";
import { EASE } from "../lib/anim";

export type SemanticNodeState =
  | "default"
  | "active"
  | "visited"
  | "root"
  | "target"
  | "bad";

export interface RoughNodeProps {
  /** Center X coordinate in pixels */
  x: number;
  /** Center Y coordinate in pixels */
  y: number;
  /** Radius in pixels */
  r: number;
  /** Primary label displayed inside node */
  label?: string | number | React.ReactNode;
  /** Optional secondary label displayed beneath node (e.g. index, frequency, or rank) */
  subLabel?: string | number | React.ReactNode;
  /** Primary stroke color */
  stroke?: string;
  /** Primary stroke width */
  strokeWidth?: number;
  /** Fill color for node interior. Defaults to theme.boardBg (opaque chalkboard shield) */
  fill?: string;
  /** Label text color */
  textColor?: string;
  /** Font size in pixels for primary label */
  fontSize?: number;
  /** Font size in pixels for subLabel */
  subLabelFontSize?: number;
  /** Seed for deterministic rough generation */
  seed?: number;
  /** Semantic state preset that configures colors unless explicitly overridden */
  semanticState?: SemanticNodeState;
  /** Whether to render an outer concentric emphasis ring (e.g. for terminal Trie or search targets) */
  ring?: boolean;
  /** Stroke color for outer concentric ring */
  ringStroke?: string;
  /** Stroke dasharray for outer ring */
  ringDash?: string;
  /** Filter id or url for chalk roughness. Defaults to chalk-stroke */
  filter?: string;
  /** Frame when node begins drawing on */
  startFrame?: number;
  /** Duration of draw-in animation */
  durationInFrames?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Resolves color styling based on semantic state preset
 */
function resolveSemanticColors(
  state?: SemanticNodeState,
  stroke?: string,
  textColor?: string
): { stroke: string; textColor: string; ringColor: string } {
  if (stroke) {
    return {
      stroke,
      textColor: textColor ?? stroke,
      ringColor: stroke,
    };
  }

  switch (state) {
    case "active":
      return {
        stroke: theme.pivot,
        textColor: textColor ?? theme.pivot,
        ringColor: theme.pivot,
      };
    case "visited":
      return {
        stroke: theme.cyan,
        textColor: textColor ?? theme.cyan,
        ringColor: theme.cyan,
      };
    case "root":
    case "target":
      return {
        stroke: theme.good,
        textColor: textColor ?? theme.good,
        ringColor: theme.good,
      };
    case "bad":
      return {
        stroke: theme.bad,
        textColor: textColor ?? theme.bad,
        ringColor: theme.bad,
      };
    case "default":
    default:
      return {
        stroke: theme.chalkText,
        textColor: textColor ?? theme.chalkText,
        ringColor: theme.good,
      };
  }
}

/**
 * RoughNode — Native hand-drawn chalk circular node primitive.
 *
 * Designed for Tree, Graph, Heap, Union-Find, and Trie visualizations.
 * Guarantees zero line penetration by rendering an opaque chalkboard background
 * shield (theme.boardBg) behind deterministic hand-sketched Rough.js outlines.
 */
export const RoughNode: React.FC<RoughNodeProps> = ({
  x,
  y,
  r,
  label,
  subLabel,
  stroke: propStroke,
  strokeWidth = 3,
  fill = theme.boardBg,
  textColor: propTextColor,
  fontSize = 26,
  subLabelFontSize = 16,
  seed = 1,
  semanticState = "default",
  ring = false,
  ringStroke: propRingStroke,
  ringDash = "4,4",
  filter = "url(#chalk-stroke)",
  startFrame,
  durationInFrames,
  style,
}) => {
  const frame = useCurrentFrame();

  const colors = resolveSemanticColors(semanticState, propStroke, propTextColor);
  const ringColor = propRingStroke ?? colors.ringColor;

  // Optional animated draw-in
  const hasAnimation = startFrame !== undefined && durationInFrames !== undefined;
  const progress = hasAnimation
    ? interpolate(frame, [startFrame, startFrame + durationInFrames], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      })
    : 1;

  // Generate deterministic hand-drawn rough circle paths
  const roughPaths = useMemo(() => {
    const gen = rough.generator();
    const drawable = gen.circle(x, y, r * 2, {
      roughness: 1.2,
      bowing: 1.0,
      stroke: colors.stroke,
      strokeWidth,
      seed,
    });
    return gen.toPaths(drawable);
  }, [x, y, r, colors.stroke, strokeWidth, seed]);

  const circ = 2 * Math.PI * r;

  return (
    <g style={{ opacity: progress, ...style }}>
      {/* 1. OPAQUE CHALBOARD SHIELD: guarantees incoming lines never bleed inside */}
      <circle
        cx={x}
        cy={y}
        r={r}
        fill={fill}
        style={{ pointerEvents: "none" }}
      />

      {/* 2. DETERMINISTIC ROUGH CHALK OUTLINES */}
      {roughPaths.map((p, idx) => (
        <path
          key={idx}
          d={p.d}
          stroke={p.stroke}
          strokeWidth={p.strokeWidth}
          fill="none"
          strokeLinecap="round"
          filter={filter}
          style={
            hasAnimation
              ? {
                  strokeDasharray: circ * 1.5,
                  strokeDashoffset: circ * 1.5 * (1 - progress),
                }
              : undefined
          }
        />
      ))}

      {/* 3. OPTIONAL CONCENTRIC OUTER RING (e.g. Trie terminal or target) */}
      {ring && (
        <circle
          cx={x}
          cy={y}
          r={r + 8}
          fill="none"
          stroke={ringColor}
          strokeWidth={2.5}
          strokeDasharray={ringDash}
          filter={filter}
          style={{
            opacity: progress,
          }}
        />
      )}

      {/* 4. PRIMARY MONOSPACE / CHALK TEXT LABEL */}
      {label !== undefined && label !== null && (
        <text
          x={x}
          y={y + fontSize * 0.35}
          textAnchor="middle"
          fontFamily={fonts.mono}
          fontSize={fontSize}
          fontWeight={700}
          fill={colors.textColor}
          style={{ userSelect: "none" }}
        >
          {label}
        </text>
      )}

      {/* 5. OPTIONAL SUB-LABEL (placed below node) */}
      {subLabel !== undefined && subLabel !== null && (
        <text
          x={x}
          y={y + r + subLabelFontSize * 1.3}
          textAnchor="middle"
          fontFamily={fonts.mono}
          fontSize={subLabelFontSize}
          fontWeight={600}
          fill={theme.chalkDim}
          style={{ userSelect: "none" }}
        >
          {subLabel}
        </text>
      )}
    </g>
  );
};
