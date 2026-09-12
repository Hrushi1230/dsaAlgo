import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { CHALK_FILTER_ID } from "../lib/chalk";
import { SPRING, jitter } from "../lib/motion";
import { theme } from "../lib/theme";

/**
 * A short-lived burst of chalk specks that fling outward and fade.
 * One `start` frame drives everything; fully deterministic (seeded jitter).
 * Use as a single texture accent on hero moments (never more than one per beat).
 */
export const ChalkDust: React.FC<{
  /** Center in the parent's coordinate space. */
  x: number;
  y: number;
  start: number;
  color?: string;
  /** Number of specks. */
  count?: number;
  /** How far specks travel (px). */
  radius?: number;
  /** Lifetime in frames. */
  life?: number;
  seed?: number;
}> = ({
  x,
  y,
  start,
  color = theme.chalkText,
  count = 12,
  radius = 60,
  life = 18,
  seed = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const local = frame - start;
  if (local < 0 || local > life + 4) return null;

  const fly = spring({ frame: local, fps, config: SPRING.pop });
  const fade = interpolate(local, [0, life], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ position: "absolute", left: x, top: y, pointerEvents: "none" }}>
      {Array.from({ length: count }).map((_, i) => {
        const angle = (i / count) * Math.PI * 2 + jitter(seed + i) * 0.4;
        const dist = fly * radius * (0.7 + 0.3 * (jitter(seed + i * 3) + 1) * 0.5);
        const size = 2 + (jitter(seed + i * 7) + 1) * 1.5;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: Math.cos(angle) * dist,
              top: Math.sin(angle) * dist,
              width: size,
              height: size,
              borderRadius: "50%",
              background: color,
              opacity: fade,
              filter: `url(#${CHALK_FILTER_ID})`,
            }}
          />
        );
      })}
    </div>
  );
};
