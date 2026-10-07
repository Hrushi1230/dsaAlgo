import React, { useMemo } from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { interpolatePath } from "@remotion/paths";
import { CHALK_FILTER_STRONG_ID } from "../lib/chalk";
import { EASE } from "../lib/anim";
import { theme } from "../lib/theme";

/**
 * SvgMorph — Low-level SVG path geometry primitive for @dsa/kit.
 *
 * Uses @remotion/paths `interpolatePath()` to smoothly interpolate
 * between two SVG path "d" strings. All motion is a pure function of
 * useCurrentFrame() — deterministic, seek-safe, no CSS transitions.
 *
 * CANONICAL SEMANTIC RULE (docs/MORPHING_BIBLE_V2.md):
 * SvgMorph is a GEOMETRY primitive, NOT an identity resolver.
 * Use ONLY for Transition Class T3 (TRUE_PATH_MORPH) where:
 *   - Identity relation is SAME (same continuous entity / relation)
 *   - Cardinality is strictly 1→1
 *   - Endpoints remain semantically aligned throughout the morph
 *
 * DO NOT USE FOR:
 *   - Array elements reordering (Use T1 MOVE / Relayout)
 *   - Cloning or projecting into sets (Use T5 CLONE / PROJECT)
 *   - Representation handoffs like trace-to-code (Use T8 HANDOFF)
 *   - Unrelated visual state replacements (Use T9 REPLACE)
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
  stroke = theme.chalkText,
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
