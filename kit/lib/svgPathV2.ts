import {
  evolvePath,
  getLength,
  getPointAtLength,
  getTangentAtLength,
  reversePath,
  getSubpaths,
} from "@remotion/paths";

/**
 * Foundation V2 — SVG Path Animation Utilities (Phase 6)
 *
 * Provides exact, deterministic, frame-driven SVG path mechanics built on
 * top of Remotion 4.0.507 `@remotion/paths`.
 *
 * Rules:
 * 1. Progress is always clamped to [0, 1] before calling evolvePath.
 * 2. Path lengths are always exact (getLength), never guessed or hard-coded.
 * 3. Direction is handled explicitly via reversePath, not negative progress hacks.
 * 4. Point and tangent queries clamp distance to [0, length].
 */

/**
 * Clamp a scalar progress value strictly to [0, 1].
 */
export function clamp01(val: number): number {
  if (Number.isNaN(val)) return 0;
  return Math.max(0, Math.min(1, val));
}

/**
 * Get exact path metrics for an SVG path 'd' string.
 * Fails fast with clear diagnostic info if path syntax is invalid.
 */
export function getExactPathMetrics(d: string): { length: number } {
  try {
    const len = getLength(d);
    return { length: len };
  } catch (err) {
    const snippet = d.length > 60 ? `${d.slice(0, 57)}...` : d;
    throw new Error(
      `[svgPathV2] getLength failed on path d="${snippet}": ${
        err instanceof Error ? err.message : String(err)
      }`
    );
  }
}

/**
 * Get exact 2D point (x, y) along path 'd' at normalized progress [0, 1].
 */
export function getPathPointAtProgress(
  d: string,
  progress: number
): { x: number; y: number } {
  const clamped = clamp01(progress);
  const { length } = getExactPathMetrics(d);
  const distance = clamped * length;
  const point = getPointAtLength(d, distance);
  return point ?? { x: 0, y: 0 };
}

/**
 * Get exact normalized tangent vector (x, y) and rotation angle in degrees
 * and radians along path 'd' at normalized progress [0, 1].
 */
export function getPathTangentAtProgress(
  d: string,
  progress: number
): {
  x: number;
  y: number;
  angleDeg: number;
  angleRad: number;
} {
  const clamped = clamp01(progress);
  const { length } = getExactPathMetrics(d);
  const distance = clamped * length;
  const tangent = getTangentAtLength(d, distance);
  const tx = tangent?.x ?? 1;
  const ty = tangent?.y ?? 0;
  const angleRad = Math.atan2(ty, tx);
  const angleDeg = (angleRad * 180) / Math.PI;

  return {
    x: tx,
    y: ty,
    angleDeg,
    angleRad,
  };
}

/**
 * Compute the exact CSS strokeDasharray and strokeDashoffset style
 * for drawing in an SVG path from 0 (hidden) to 1 (fully drawn).
 * Clamps progress to [0, 1] to prevent Remotion evolvePath out-of-range artifacts.
 */
export function getEvolvedPathStyle(
  d: string,
  progress: number
): {
  strokeDasharray: string | number;
  strokeDashoffset: string | number;
} {
  const clamped = clamp01(progress);
  return evolvePath(clamped, d);
}

/**
 * Explicitly return either the authored path or the reversed path.
 * Avoids faking reverse drawing via negative evolve progress.
 */
export function getDirectionalPath(
  d: string,
  direction: "forward" | "reverse" | "authored" | "reversed" = "forward"
): string {
  if (direction === "reverse" || direction === "reversed") {
    return reversePath(d);
  }
  return d;
}

/**
 * Break a compound SVG path 'd' string into its component subpaths.
 */
export function getSubpathList(d: string): string[] {
  try {
    return getSubpaths(d);
  } catch (err) {
    const snippet = d.length > 60 ? `${d.slice(0, 57)}...` : d;
    throw new Error(
      `[svgPathV2] getSubpaths failed on path d="${snippet}": ${
        err instanceof Error ? err.message : String(err)
      }`
    );
  }
}
