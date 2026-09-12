import React, { useMemo } from "react";
import { useCurrentFrame, interpolate } from "remotion";
import rough from "roughjs";
import { theme } from "../lib/theme";
import { CHALK_FILTER_STRONG_ID } from "../lib/chalk";
import { EASE } from "../lib/anim";

export const RoughCurve: React.FC<{
  points: [number, number][];
  width: number;
  height: number;
  startFrame?: number;
  durationInFrames?: number;
  stroke?: string;
  strokeWidth?: number;
  seed?: number;
}> = ({
  points,
  width,
  height,
  startFrame = 0,
  durationInFrames = 30,
  stroke = theme.good,
  strokeWidth = 4,
  seed = 1,
}) => {
  const frame = useCurrentFrame();

  const paths = useMemo(() => {
    if (points.length < 2) return [];
    const gen = rough.generator();
    const opts = { roughness: 1.2, bowing: 1.0, stroke, strokeWidth, seed };
    const curveShape = gen.curve(points, opts);
    return gen.toPaths(curveShape);
  }, [points, stroke, strokeWidth, seed]);

  // Total progression of the curve drawing
  const p = interpolate(frame, [startFrame, startFrame + durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  // Estimate total length of the curve by summing point-to-point distances
  const len = useMemo(() => {
    let total = 0;
    for (let i = 1; i < points.length; i++) {
      const dx = points[i][0] - points[i - 1][0];
      const dy = points[i][1] - points[i - 1][1];
      total += Math.sqrt(dx * dx + dy * dy);
    }
    // Multiply by roughly 1.3 to account for bowing and roughness
    return total * 1.3 + 50; 
  }, [points]);

  return (
    <svg
      width={width}
      height={height}
      style={{ filter: `url(#${CHALK_FILTER_STRONG_ID})`, overflow: "visible" }}
    >
      {paths.map((pa, i) => (
        <path
          key={`curve_${i}`}
          d={pa.d}
          stroke={pa.stroke}
          strokeWidth={pa.strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ strokeDasharray: len, strokeDashoffset: len * (1 - p) }}
        />
      ))}
    </svg>
  );
};
