import React, { useMemo } from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { theme, fonts } from "../lib/theme";
import { EASE } from "../lib/anim";
import { getEdgeCoords, getNodeAnchorPoint, getQuadControlPoint } from "../lib/geom";
import {
  clamp01,
  getEvolvedPathStyle,
  getPathPointAtProgress,
  getPathTangentAtProgress,
} from "../lib/svgPathV2";

export interface ParametricArrowProps {
  /** Start X coordinate (node center or anchor) */
  x1: number;
  /** Start Y coordinate */
  y1: number;
  /** End X coordinate (node center or anchor) */
  x2: number;
  /** End Y coordinate */
  y2: number;
  /** Radius of start node (arrow starts at circle perimeter, default 0) */
  startRadius?: number;
  /** Radius of end node (arrow terminates at circle perimeter, default 0) */
  endRadius?: number;
  /** Straight line vs quadratic curved path */
  kind?: "straight" | "curved";
  /** Optional explicit quadratic control point X */
  cx?: number;
  /** Optional explicit quadratic control point Y */
  cy?: number;
  /** Perpendicular curvature offset in pixels (+ curves right, - curves left) */
  bend?: number;
  /** Arrow stroke color */
  stroke?: string;
  /** Stroke width in pixels */
  strokeWidth?: number;
  /** Optional dasharray (e.g. "8,6" for bypassed pointers or virtual edges) */
  strokeDasharray?: string;
  /** Whether to render the arrowhead at the end (default true) */
  showHead?: boolean;
  /** Arrowhead style: open chalk strokes or solid filled chevron */
  headStyle?: "strokes" | "filled";
  /** Arrowhead barb length in pixels (default 18) */
  headLength?: number;
  /** Arrowhead spread half-angle in degrees (default 26) */
  headAngleDeg?: number;
  /** Optional label along arrow (e.g. edge weight, pointer name, char) */
  label?: string | number | React.ReactNode;
  /** Color of label text */
  labelColor?: string;
  /** Font size of label text */
  labelFontSize?: number;
  /** Additional vertical/perpendicular offset for label */
  labelOffset?: number;
  /** Explicit draw progress [0..1] */
  progress?: number;
  /** Optional frame when drawing begins */
  startFrame?: number;
  /** Optional animation duration in frames */
  durationInFrames?: number;
  /** SVG filter for chalk texture */
  filter?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * ParametricArrow — Production-ready directional arrow primitive.
 *
 * Designed for Linked Lists, Graphs, Trees, Heaps, Union-Find, and Tries.
 * Features:
 * - Automatic node perimeter trimming (zero line penetration inside nodes).
 * - Tangent-correct arrowhead orientation for straight and curved paths.
 * - Exact @remotion/paths evolution with deterministic draw progress.
 * - Monospace/chalk midpoint label pill with opaque chalkboard background.
 */
export const ParametricArrow: React.FC<ParametricArrowProps> = ({
  x1,
  y1,
  x2,
  y2,
  startRadius = 0,
  endRadius = 0,
  kind = "straight",
  cx: propCx,
  cy: propCy,
  bend = 0,
  stroke = theme.chalkText,
  strokeWidth = 3,
  strokeDasharray,
  showHead = true,
  headStyle = "strokes",
  headLength = 18,
  headAngleDeg = 26,
  label,
  labelColor = theme.cyan,
  labelFontSize = 18,
  labelOffset = 0,
  progress: propProgress,
  startFrame,
  durationInFrames,
  filter = "url(#chalk-stroke)",
  style,
}) => {
  const frame = useCurrentFrame();

  // 1. Resolve normalized animation progress [0..1]
  const progress = useMemo(() => {
    if (propProgress !== undefined) {
      return clamp01(propProgress);
    }
    if (startFrame !== undefined && durationInFrames !== undefined) {
      return interpolate(frame, [startFrame, startFrame + durationInFrames], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
    }
    return 1;
  }, [propProgress, startFrame, durationInFrames, frame]);

  // 2. Compute trimmed path geometry
  const { pathD, trimmedP1, trimmedP2 } = useMemo(() => {
    if (kind === "straight" && bend === 0 && propCx === undefined) {
      // Straight vector
      const coords = getEdgeCoords(x1, y1, x2, y2, startRadius, endRadius);
      const p1 = { x: coords.x1, y: coords.y1 };
      const p2 = { x: coords.x2, y: coords.y2 };
      const d = `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y}`;
      return { pathD: d, trimmedP1: p1, trimmedP2: p2 };
    }

    // Curved vector
    const ctrl =
      propCx !== undefined && propCy !== undefined
        ? { x: propCx, y: propCy }
        : getQuadControlPoint(x1, y1, x2, y2, bend);

    // Initial tangent leaves P1 towards ctrl; final tangent arrives at P2 from ctrl
    const p1 =
      startRadius > 0
        ? getNodeAnchorPoint(x1, y1, startRadius, ctrl.x, ctrl.y)
        : { x: x1, y: y1 };

    const p2 =
      endRadius > 0
        ? getNodeAnchorPoint(x2, y2, endRadius, ctrl.x, ctrl.y)
        : { x: x2, y: y2 };

    const d = `M ${p1.x} ${p1.y} Q ${ctrl.x} ${ctrl.y} ${p2.x} ${p2.y}`;
    return { pathD: d, trimmedP1: p1, trimmedP2: p2 };
  }, [kind, x1, y1, x2, y2, startRadius, endRadius, propCx, propCy, bend]);

  // 3. Compute evolved path stroke styles (shaft evolution)
  const shaftProgress = interpolate(progress, [0, 0.85], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const evolvedStyle = useMemo(() => {
    return getEvolvedPathStyle(pathD, shaftProgress);
  }, [pathD, shaftProgress]);

  // 4. Compute tangent and position at the current arrow tip
  const tipInfo = useMemo(() => {
    // Tangent at progress 1.0 (or shaftProgress if animated)
    const p = shaftProgress;
    const pt = getPathPointAtProgress(pathD, p);
    const tangent = getPathTangentAtProgress(pathD, p);
    return {
      x: pt.x,
      y: pt.y,
      angleRad: tangent.angleRad,
    };
  }, [pathD, shaftProgress]);

  // 5. Compute arrowhead geometry
  const headElements = useMemo(() => {
    if (!showHead) return null;

    const headProgress = interpolate(progress, [0.7, 1.0], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });

    if (headProgress <= 0) return null;

    const theta = tipInfo.angleRad;
    const alpha = (headAngleDeg * Math.PI) / 180;
    const a1 = theta + Math.PI - alpha;
    const a2 = theta + Math.PI + alpha;

    const leftX = tipInfo.x + Math.cos(a1) * headLength;
    const leftY = tipInfo.y + Math.sin(a1) * headLength;
    const rightX = tipInfo.x + Math.cos(a2) * headLength;
    const rightY = tipInfo.y + Math.sin(a2) * headLength;

    if (headStyle === "filled") {
      return (
        <polygon
          points={`${tipInfo.x},${tipInfo.y} ${leftX},${leftY} ${rightX},${rightY}`}
          fill={stroke}
          opacity={headProgress}
          filter={filter}
        />
      );
    }

    // Default open chalk strokes
    const headPathD = `M ${leftX} ${leftY} L ${tipInfo.x} ${tipInfo.y} L ${rightX} ${rightY}`;
    return (
      <path
        d={headPathD}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity={headProgress}
        filter={filter}
      />
    );
  }, [showHead, progress, tipInfo, headAngleDeg, headLength, headStyle, stroke, strokeWidth, filter]);

  // 6. Compute midpoint for optional label
  const labelElement = useMemo(() => {
    if (!label) return null;
    const midPoint = getPathPointAtProgress(pathD, 0.5);
    const textStr = String(label);
    const pillWidth = Math.max(30, textStr.length * (labelFontSize * 0.65) + 16);
    const pillHeight = labelFontSize + 10;

    return (
      <g
        transform={`translate(${midPoint.x}, ${midPoint.y + labelOffset})`}
        style={{ opacity: progress }}
      >
        <rect
          x={-pillWidth / 2}
          y={-pillHeight / 2}
          width={pillWidth}
          height={pillHeight}
          rx={6}
          fill={theme.boardBg}
        />
        <text
          x={0}
          y={labelFontSize * 0.35}
          textAnchor="middle"
          fontFamily={fonts.mono}
          fontSize={labelFontSize}
          fontWeight={700}
          fill={labelColor}
          style={{ userSelect: "none" }}
        >
          {label}
        </text>
      </g>
    );
  }, [label, pathD, labelOffset, progress, labelFontSize, labelColor]);

  return (
    <g style={style}>
      {/* Arrow shaft */}
      <path
        d={pathD}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={strokeDasharray ?? evolvedStyle.strokeDasharray}
        style={{
          strokeDashoffset: strokeDasharray ? undefined : evolvedStyle.strokeDashoffset,
          opacity: progress > 0 ? 1 : 0,
        }}
        fill="none"
        filter={filter}
      />

      {/* Tangent-correct arrowhead */}
      {headElements}

      {/* Midpoint label */}
      {labelElement}
    </g>
  );
};
