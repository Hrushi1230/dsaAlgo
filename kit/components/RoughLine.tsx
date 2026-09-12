import { useMemo } from "react";
import { useCurrentFrame, interpolate } from "remotion";
import rough from "roughjs";
import { theme } from "../lib/theme";
import { CHALK_FILTER_STRONG_ID } from "../lib/chalk";
import { EASE } from "../lib/anim";

type Shape =
  | { kind: "line"; x1: number; y1: number; x2: number; y2: number }
  | { kind: "arrow"; x1: number; y1: number; x2: number; y2: number }
  | { kind: "circle"; cx: number; cy: number; rx: number; ry: number };

/**
 * Hand-drawn chalk line / arrow / ellipse via Rough.js, drawn-on with
 * stroke-dashoffset so it looks sketched in real time. Deterministic (seed).
 */
export const RoughLine: React.FC<{
  shape: Shape;
  width: number;
  height: number;
  startFrame?: number;
  durationInFrames?: number;
  stroke?: string;
  strokeWidth?: number;
  seed?: number;
}> = ({
  shape,
  width,
  height,
  startFrame = 0,
  durationInFrames = 18,
  stroke = theme.chalkText,
  strokeWidth = 3,
  seed = 1,
}) => {
    const frame = useCurrentFrame();

    const { mainPaths, headPaths } = useMemo(() => {
      const gen = rough.generator();
      const opts = { roughness: 1.4, bowing: 1.5, stroke, strokeWidth, seed };
      let main;
      let head: ReturnType<typeof gen.toPaths> = [];
      if (shape.kind === "circle") {
        main = gen.toPaths(gen.ellipse(shape.cx, shape.cy, shape.rx * 2, shape.ry * 2, opts));
      } else {
        main = gen.toPaths(gen.line(shape.x1, shape.y1, shape.x2, shape.y2, opts));
        if (shape.kind === "arrow") {
          // Arrow head: two short strokes at the end point.
          const angle = Math.atan2(shape.y2 - shape.y1, shape.x2 - shape.x1);
          const len = 22;
          const a1 = angle + Math.PI - 0.5;
          const a2 = angle + Math.PI + 0.5;
          const h1 = gen.line(
            shape.x2,
            shape.y2,
            shape.x2 + Math.cos(a1) * len,
            shape.y2 + Math.sin(a1) * len,
            opts,
          );
          const h2 = gen.line(
            shape.x2,
            shape.y2,
            shape.x2 + Math.cos(a2) * len,
            shape.y2 + Math.sin(a2) * len,
            opts,
          );
          head = [...gen.toPaths(h1), ...gen.toPaths(h2)];
        }
      }
      return { mainPaths: main, headPaths: head };
    }, [shape, stroke, strokeWidth, seed]);

    // Main line draws first (0–70% of duration), head draws last (70–100%).
    const p = interpolate(frame, [startFrame, startFrame + durationInFrames], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
    const mainP = interpolate(p, [0, 0.7], [0, 1], { extrapolateRight: "clamp" });
    const headP = interpolate(p, [0.7, 1], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });

    const len = estimateLen(shape);

    return (
      <svg
        width={width}
        height={height}
        style={{ filter: `url(#${CHALK_FILTER_STRONG_ID})`, overflow: "visible" }}
      >
        {mainPaths.map((pa, i) => (
          <path
            key={`m${i}`}
            d={pa.d}
            stroke={pa.stroke}
            strokeWidth={pa.strokeWidth}
            fill="none"
            strokeLinecap="round"
            style={{ strokeDasharray: len, strokeDashoffset: len * (1 - mainP) }}
          />
        ))}
        {headPaths.map((pa, i) => (
          <path
            key={`h${i}`}
            d={pa.d}
            stroke={pa.stroke}
            strokeWidth={pa.strokeWidth}
            fill="none"
            strokeLinecap="round"
            style={{ strokeDasharray: 60, strokeDashoffset: 60 * (1 - headP) }}
          />
        ))}
      </svg>
    );
  };

function estimateLen(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * (3 * (shape.rx + shape.ry) - Math.sqrt((3 * shape.rx + shape.ry) * (shape.rx + 3 * shape.ry)));
  }
  const dx = shape.x2 - shape.x1;
  const dy = shape.y2 - shape.y1;
  return Math.sqrt(dx * dx + dy * dy) * 1.6 + 40;
}
