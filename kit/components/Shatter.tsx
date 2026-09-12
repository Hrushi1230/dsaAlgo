import { useCurrentFrame, interpolate } from "remotion";
import { jitter } from "../lib/motion";
import { theme } from "../lib/theme";

/**
 * A horizontal line that shatters into gravity-driven fragments after
 * `breakFrame`. Before the break it shows as a solid dashed line; after, each
 * segment falls, drifts, rotates, and fades — the "something broke" moment.
 */
export const Shatter: React.FC<{
  /** Total line length (px). */
  width: number;
  breakFrame: number;
  color?: string;
  segments?: number;
  /** Gravity in px/frame². */
  gravity?: number;
}> = ({ width, breakFrame, color = theme.good, segments = 6, gravity = 0.28 }) => {
  const frame = useCurrentFrame();
  const segW = width / segments;
  const broken = frame >= breakFrame;
  const tau = frame - breakFrame;

  return (
    <div style={{ position: "relative", width, height: 4 }}>
      {Array.from({ length: segments }).map((_, i) => {
        const baseX = i * segW;
        let dy = 0;
        let dx = 0;
        let rot = 0;
        let opacity = 1;
        if (broken) {
          dy = 0.5 * gravity * tau * tau;
          dx = jitter(i * 5 + 1) * tau * 1.2;
          rot = jitter(i * 9 + 3) * tau * 3;
          opacity = interpolate(tau, [0, 26], [1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
        }
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: baseX + dx,
              top: dy,
              width: segW * 0.8,
              height: 4,
              background: color,
              borderRadius: 2,
              opacity,
              transform: `rotate(${rot}deg)`,
            }}
          />
        );
      })}
    </div>
  );
};
