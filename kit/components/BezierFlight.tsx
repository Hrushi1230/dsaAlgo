import { useCurrentFrame } from "remotion";
import { arcFlight } from "../lib/motion";
import { tween } from "../lib/anim";

/**
 * Flies its children along an eased arc from `from` to `to`, lifted by `peak`.
 * Optionally renders a fading motion trail (ghost copies lagging behind).
 * Position is absolute within the parent's coordinate space.
 */
export const BezierFlight: React.FC<{
  from: { x: number; y: number };
  to: { x: number; y: number };
  peak: number;
  start: number;
  dur: number;
  /** Trail color; omit for no trail. */
  trail?: string;
  children: React.ReactNode;
}> = ({ from, to, peak, start, dur, trail, children }) => {
  const frame = useCurrentFrame();
  const t = tween(frame, start, dur, 0, 1);

  const ghosts = trail ? [0.18, 0.12, 0.06] : [];
  const trailLag = [0.06, 0.12, 0.18];

  return (
    <>
      {ghosts.map((op, i) => {
        const gt = Math.max(0, t - trailLag[i]);
        const g = arcFlight(from, to, peak, gt);
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: g.x,
              top: g.y,
              transform: `translate(-50%, -50%) scale(${g.scale})`,
              opacity: op,
              color: trail,
              pointerEvents: "none",
            }}
          >
            {children}
          </div>
        );
      })}
      {(() => {
        const p = arcFlight(from, to, peak, t);
        return (
          <div
            style={{
              position: "absolute",
              left: p.x,
              top: p.y,
              transform: `translate(-50%, -50%) scale(${p.scale}) rotate(${p.rot}deg)`,
            }}
          >
            {children}
          </div>
        );
      })()}
    </>
  );
};
