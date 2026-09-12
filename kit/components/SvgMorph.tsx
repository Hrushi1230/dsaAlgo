import React, { useMemo } from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { interpolatePath } from "@remotion/paths";
import { CHALK_FILTER_STRONG_ID } from "../lib/chalk";
import { EASE } from "../lib/anim";

/**
 * SvgMorph — Smooth SVG path morphing component for @dsa/kit.
 *
 * Uses @remotion/paths `interpolatePath()` to smoothly transition
 * between two SVG path shapes. All motion is a pure function of
 * useCurrentFrame() — no CSS animations, no state.
 *
 * Usage examples:
 * - Scene 02: Frequency bars morph into HashMap key-value rows
 * - Scene 09: Sorted array cards morph back to unsorted positions
 * - Scene 06/10: Complexity curve shape transitions
 */
export const SvgMorph: React.FC<{
  /** SVG path "d" string for the source shape */
  fromPath: string;
  /** SVG path "d" string for the target shape */
  toPath: string;
  /** Frame when morphing begins (local to parent Sequence) */
  startFrame?: number;
  /** Number of frames to complete the morph */
  durationInFrames?: number;
  /** Stroke color from theme */
  stroke?: string;
  /** Stroke width */
  strokeWidth?: number;
  /** Optional fill color */
  fill?: string;
  /** SVG viewBox width */
  width: number;
  /** SVG viewBox height */
  height: number;
  /** Apply chalk texture filter */
  chalkFilter?: boolean;
}> = ({
  fromPath,
  toPath,
  startFrame = 0,
  durationInFrames = 30,
  stroke = "#F8F6F0",
  strokeWidth = 3,
  fill = "none",
  width,
  height,
  chalkFilter = true,
}) => {
  const frame = useCurrentFrame();

  const progress = interpolate(
    frame,
    [startFrame, startFrame + durationInFrames],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE }
  );

  const morphedPath = useMemo(() => {
    try {
      return interpolatePath(progress, fromPath, toPath);
    } catch {
      return progress < 0.5 ? fromPath : toPath;
    }
  }, [progress, fromPath, toPath]);

  return (
    <svg
      width={width}
      height={height}
      style={{
        overflow: "visible",
        ...(chalkFilter
          ? { filter: `url(#${CHALK_FILTER_STRONG_ID})` }
          : {}),
      }}
    >
      <path
        d={morphedPath}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
