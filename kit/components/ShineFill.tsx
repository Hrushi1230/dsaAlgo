import { useCurrentFrame, interpolate } from "remotion";
import { EASE } from "../lib/anim";

/**
 * A bar that fills left→right with a light "shine" sweeping across it as it
 * fills. Sells the "filling with energy" feel for stat/convergence bars.
 */
export const ShineFill: React.FC<{
  width: number;
  height: number;
  /** Target fill fraction 0..1. */
  fillPct: number;
  fillColor: string;
  start: number;
  dur?: number;
  trackColor?: string;
  radius?: number;
  /** Optional CSS background for the fill (e.g. a gradient). Overrides fillColor. */
  fillBackground?: string;
  /** Override the internal useCurrentFrame (useful for clock-warped compositions). */
  frame?: number;
}> = ({
  width,
  height,
  fillPct,
  fillColor,
  start,
  dur = 15,
  trackColor = "rgba(255,255,255,0.06)",
  radius = 4,
  fillBackground,
  frame: propFrame,
}) => {
  const rawFrame = useCurrentFrame();
  const frame = propFrame ?? rawFrame;
  const progress = interpolate(frame, [start, start + dur], [0, fillPct], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });
  // Shine travels across the currently-filled region during the fill window.
  const shine = interpolate(frame, [start, start + dur], [-0.3, 1.1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });
  const filledW = width * progress;
  const shineX = filledW * shine;
  const shining = frame >= start && frame <= start + dur + 2;

  return (
    <div
      style={{
        width,
        height,
        background: trackColor,
        borderRadius: radius,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          width: filledW,
          height: "100%",
          background: fillBackground ?? fillColor,
          borderRadius: radius,
          position: "relative",
        }}
      />
      {shining && filledW > 4 && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: shineX - 20,
            width: 40,
            height: "100%",
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)",
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
};
