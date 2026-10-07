import React, { useMemo } from "react";
import {
  getExactPathMetrics,
  getPathPointAtProgress,
  getPathTangentAtProgress,
  clamp01,
} from "../lib/svgPathV2";

export interface PathTracerTelemetry {
  point: { x: number; y: number };
  tangent: { x: number; y: number; angleDeg: number; angleRad: number };
  length: number;
  progress: number;
}

export interface PathTracerProps {
  /** SVG path 'd' string */
  d: string;
  /** Normalized progress along the path [0..1] */
  progress: number;
  /** Whether to orient/rotate the child with the path's tangent vector (default: true) */
  rotateWithTangent?: boolean;
  /** Additional fixed rotation offset in degrees (default: 0) */
  baseRotation?: number;
  /** Render inside an SVG <g> (default: true). If false, renders an HTML <div> */
  asSvgGroup?: boolean;
  /** Optional style override */
  style?: React.CSSProperties;
  /** Optional className */
  className?: string;
  /** Content to render at the sampled position; can be a ReactNode or render function */
  children?: React.ReactNode | ((telemetry: PathTracerTelemetry) => React.ReactNode);
}

/**
 * PathTracer — Places and orients an element or marker along an SVG path.
 *
 * Uses exact @remotion/paths math:
 * - getLength
 * - getPointAtLength
 * - getTangentAtLength
 *
 * All queries are strictly clamped to [0, 1] progress.
 * Does NOT own scene or audio timing.
 */
export const PathTracer: React.FC<PathTracerProps> = ({
  d,
  progress,
  rotateWithTangent = true,
  baseRotation = 0,
  asSvgGroup = true,
  style,
  className,
  children,
}) => {
  const telemetry = useMemo((): PathTracerTelemetry => {
    const clamped = clamp01(progress);
    const metrics = getExactPathMetrics(d);
    const point = getPathPointAtProgress(d, clamped);
    const tangent = getPathTangentAtProgress(d, clamped);

    return {
      point,
      tangent,
      length: metrics.length,
      progress: clamped,
    };
  }, [d, progress]);

  const rotation = rotateWithTangent
    ? telemetry.tangent.angleDeg + baseRotation
    : baseRotation;

  const content =
    typeof children === "function" ? children(telemetry) : children;

  if (asSvgGroup) {
    return (
      <g
        transform={`translate(${telemetry.point.x}, ${telemetry.point.y}) rotate(${rotation})`}
        className={className}
        style={style}
      >
        {content}
      </g>
    );
  }

  return (
    <div
      className={className}
      style={{
        position: "absolute",
        left: telemetry.point.x,
        top: telemetry.point.y,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        transformOrigin: "center center",
        ...style,
      }}
    >
      {content}
    </div>
  );
};
