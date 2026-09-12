/**
 * Shared motion language for S6 (and reusable elsewhere).
 *
 * One set of spring configs + transition/curve helpers so every act moves with
 * consistent weight. All pure & frame-driven (never CSS transitions — Remotion
 * renders those wrong). No Math.random()/Date.now() anywhere: determinism is
 * required for frame-accurate renders, so any "jitter" is seeded by index.
 */
import { interpolate } from "remotion";
import { EASE } from "./anim";

/** Spring configs, tuned per role. Pass to `spring({ frame, fps, config })`. */
export const SPRING = {
  /** Soft settle for entrances (floors, cards, rooms). */
  enter: { damping: 16, mass: 0.9, stiffness: 120 },
  /** Playful pop for small objects (coins, checkmarks, stamps). */
  pop: { damping: 11, mass: 0.7, stiffness: 170 },
  /** Heavy, dramatic (CEO, hero O(n), champion cards). */
  hero: { damping: 14, mass: 1.2, stiffness: 90 },
  /** Snappy for UI-ish fills. */
  snap: { damping: 20, mass: 0.6, stiffness: 200 },
} as const;

/** Deterministic pseudo-jitter in [-1, 1], seeded by an integer. */
export const jitter = (seed: number): number => {
  const s = Math.sin(seed * 12.9898) * 43758.5453;
  return (s - Math.floor(s)) * 2 - 1;
};

/**
 * Standard act-boundary choreography.
 * Outgoing acts recede (up + back + fade); incoming acts rise in.
 * Returns a style-ish object of {opacity, translateY, scale}.
 */
export const recedeOut = (
  frame: number,
  start: number,
  dur = 24,
): { opacity: number; translateY: number; scale: number } => {
  const p = interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });
  return { opacity: 1 - p, translateY: -40 * p, scale: 1 - 0.03 * p };
};

export const riseIn = (
  frame: number,
  start: number,
  dur = 24,
): { opacity: number; translateY: number } => {
  const p = interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });
  return { opacity: p, translateY: 30 * (1 - p) };
};

/** Quadratic bezier point at t (0..1) with a single control point. */
export const quadBezier = (
  from: { x: number; y: number },
  ctrl: { x: number; y: number },
  to: { x: number; y: number },
  t: number,
): { x: number; y: number } => {
  const u = 1 - t;
  return {
    x: u * u * from.x + 2 * u * t * ctrl.x + t * t * to.x,
    y: u * u * from.y + 2 * u * t * ctrl.y + t * t * to.y,
  };
};

/**
 * Arc flight from `from` to `to`, lifted by `peak` at the midpoint.
 * Returns position + a subtle scale/tilt for "lift and land" feel.
 */
export const arcFlight = (
  from: { x: number; y: number },
  to: { x: number; y: number },
  peak: number,
  t: number,
): { x: number; y: number; scale: number; rot: number } => {
  const ctrl = { x: (from.x + to.x) / 2, y: Math.min(from.y, to.y) - peak };
  const pos = quadBezier(from, ctrl, to, t);
  const scale = 1 + 0.15 * Math.sin(t * Math.PI);
  const rot = (to.x - from.x) * 0.01 * Math.sin(t * Math.PI);
  return { ...pos, scale, rot };
};
