import React, { useMemo } from "react";
import { getEvolvedPathStyle, getDirectionalPath, clamp01 } from "../lib/svgPathV2";

export interface EvolvingPathProps {
  /** The SVG path 'd' string */
  d: string;
  /** Normalized animation progress [0..1] */
  progress: number;
  /** Stroke color */
  stroke?: string;
  /** Stroke width in pixels */
  strokeWidth?: number;
  /** Fill color (defaults to "none") */
  fill?: string;
  /** Drawing direction: forward or reverse (reversed via reversePath) */
  direction?: "forward" | "reverse";
  /** Stroke linecap */
  linecap?: "butt" | "round" | "square";
  /** Stroke linejoin */
  linejoin?: "miter" | "round" | "bevel";
  /** Optional additional style overrides */
  style?: React.CSSProperties;
  /** Optional className */
  className?: string;
}

/**
 * EvolvingPath — Pure, frame-driven SVG path drawing primitive.
 *
 * Renders an SVG <path> whose stroke evolution is driven by normalized progress (0..1).
 * Uses exact `@remotion/paths` evolvePath mechanics with progress strictly clamped to [0, 1].
 *
 * It does NOT own scene timing or audio knowledge.
 */
export const EvolvingPath: React.FC<EvolvingPathProps> = ({
  d,
  progress,
  stroke = "currentColor",
  strokeWidth = 2,
  fill = "none",
  direction = "forward",
  linecap = "round",
  linejoin = "round",
  style,
  className,
}) => {
  const targetD = useMemo(() => {
    return getDirectionalPath(d, direction);
  }, [d, direction]);

  const evolvedStyle = useMemo(() => {
    const p = clamp01(progress);
    return getEvolvedPathStyle(targetD, p);
  }, [targetD, progress]);

  return (
    <path
      d={targetD}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      strokeLinecap={linecap}
      strokeLinejoin={linejoin}
      className={className}
      style={{
        strokeDasharray: evolvedStyle.strokeDasharray,
        strokeDashoffset: evolvedStyle.strokeDashoffset,
        ...style,
      }}
    />
  );
};
