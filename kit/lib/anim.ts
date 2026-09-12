/**
 * Reusable frame-driven animation helpers.
 * Everything is derived from the current frame (never CSS transitions, which
 * Remotion renders incorrectly). Easing follows design-motion-principles:
 * ease-in-out, nothing linear.
 */
import { interpolate, Easing } from "remotion";

/** Standard ease for movement — smooth in/out. */
const baseEase = Easing.bezier(0.16, 1, 0.3, 1);
export const EASE = Object.assign(baseEase, {
  outQuad: Easing.out(Easing.quad),
  outCubic: Easing.out(Easing.cubic),
  outBack: Easing.out(Easing.back(1.5)),
  inOutCubic: Easing.inOut(Easing.cubic),
});

/**
 * Fade/intro a value from 0→1 over [start, start+dur] frames.
 */
export const fadeIn = (frame: number, start: number, dur: number): number =>
  interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

/**
 * Animate between two numbers over a frame window, with easing and clamping.
 */
export const tween = (
  frame: number,
  start: number,
  dur: number,
  from: number,
  to: number,
): number =>
  interpolate(frame, [start, start + dur], [from, to], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

/**
 * A brief "pop" scale (e.g. 0.9 → 1.05 → 1) for emphasis, centered at `start`.
 * Supports optional peak or overshoot parameter (e.g. 1.08 or 0.08).
 */
export const pop = (
  frame: number,
  start: number,
  dur: number,
  peak: number = 1.06,
): number => {
  const peakVal = peak > 1 ? peak : 1 + peak;
  const baseVal = 1 - (peakVal - 1) * 1.5;
  return interpolate(
    frame,
    [start, start + dur * 0.5, start + dur],
    [Math.min(0.95, baseVal), peakVal, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    },
  );
};

/**
 * Chalk-write reveal progress 0→1 (use as a clip/width fraction).
 */
export const writeProgress = (
  frame: number,
  start: number,
  dur: number,
): number => fadeIn(frame, start, dur);
