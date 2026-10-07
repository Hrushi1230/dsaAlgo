import { useMemo } from "react";
import { useCurrentFrame, interpolate } from "remotion";
import rough from "roughjs";
import { theme } from "../lib/theme";
import { CHALK_FILTER_STRONG_ID } from "../lib/chalk";
import { EASE } from "../lib/anim";

/**
 * A hand-drawn (sketchy) rectangle in chalk, drawn with Rough.js.
 *
 * Rough.js produces irregular, hand-drawn-style paths; with a fixed `seed` the
 * output is deterministic, which Remotion requires for frame-accurate renders.
 * The stroke "draws on" via stroke-dashoffset so it looks like a chalk outline
 * being sketched.
 */
export const RoughBox: React.FC<{
  width: number;
  height: number;
  /** Frame writing begins (local). */
  startFrame?: number;
  durationInFrames?: number;
  stroke?: string;
  /** Optional chalk fill (hachure) color. */
  fill?: string;
  seed?: number;
  strokeWidth?: number;
  /** Roughness factor (default: 1.6) */
  roughness?: number;
}> = ({
  width,
  height,
  startFrame = 0,
  durationInFrames = 18,
  stroke = theme.chalkText,
  fill,
  seed = 1,
  strokeWidth = 3,
}) => {
  const frame = useCurrentFrame();

  // Generate the rough rectangle once (deterministic via seed).
  // Options MUST be passed per-shape: via generator config, strokeWidth is
  // ignored and defaults to 1px (verified), which the chalk filter erases.
  const paths = useMemo(() => {
    const gen = rough.generator();
    const drawable = gen.rectangle(
      strokeWidth,
      strokeWidth,
      width - strokeWidth * 2,
      height - strokeWidth * 2,
      {
        roughness: 1.6,
        bowing: 1.2,
        stroke,
        strokeWidth,
        fill,
        fillStyle: "hachure",
        hachureGap: 8,
        seed,
      },
    );
    return gen.toPaths(drawable);
  }, [width, height, stroke, fill, seed, strokeWidth]);

  const progress = interpolate(
    frame,
    [startFrame, startFrame + durationInFrames],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE },
  );

  return (
    <svg
      width={width}
      height={height}
      style={{ filter: `url(#${CHALK_FILTER_STRONG_ID})`, overflow: "visible" }}
    >
      {paths.map((p, i) => {
        const isStroke = p.stroke !== "none" && p.stroke !== undefined;
        // Each subpath in Rough.js is a single line or arc segment.
        // Using a moderate dash length (max 600) prevents excessive offset.
        const segLen = Math.max(width, height) * 1.2;
        return (
          <path
            key={i}
            d={p.d}
            stroke={p.stroke}
            strokeWidth={p.strokeWidth}
            fill={p.fill ?? "none"}
            strokeLinecap="round"
            style={
              isStroke
                ? {
                    strokeDasharray: segLen,
                    strokeDashoffset: segLen * (1 - progress),
                    opacity: interpolate(progress, [0, 0.15], [0, 1], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                    }),
                  }
                : { opacity: progress }
            }
          />
        );
      })}
    </svg>
  );
};
