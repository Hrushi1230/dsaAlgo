/**
 * Shared timing helpers for all DSA videos. All durations in frames @ FPS.
 * Per-video segment lengths (SEGMENT_SECONDS etc.) live in each video's own
 * `src/lib/timing.ts`, which re-exports these and adds its measured audio lengths.
 */

export const FPS = 30;

export const sec = (s: number): number => Math.round(s * FPS);

export const BRAND_INTRO_FRAMES = sec(3);
export const INTRO_FRAMES = sec(3);
export const TRANSITION_FRAMES = sec(2);
export const NUM_TRANSITIONS = 5;

/** Standard durations for common beats (frames). */
export const BEAT = {
  /** A single element move (ease in/out). */
  move: sec(0.5),
  /** A hold after a meaningful change, so the eye catches up. */
  hold: sec(0.7),
  /** A quick pop/scale for emphasis. */
  pop: sec(0.27),
  /** Chalk-write reveal of a short word/title. */
  write: sec(0.6),
};
