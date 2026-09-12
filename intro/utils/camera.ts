import { Easing, interpolate } from "remotion";
import { CameraState } from "../types";

/**
 * 1-Shot Continuous Camera Rig
 * Strictly interpolates scale, X, Y, and rotation according to Section 4 of the production plan.
 * Uses cubic-bezier(0.16, 1, 0.3, 1) easing. Never springs. Clamped on all segments.
 */

const CAMERA_KEYFRAMES = [
  { frame: 0, scale: 1.0, x: 0, y: 0, rotation: 0 },
  { frame: 23, scale: 1.0, x: 0, y: 0, rotation: 0 },
  { frame: 35, scale: 1.028, x: 12, y: -8, rotation: -0.18 },
  { frame: 51, scale: 1.018, x: 6, y: -6, rotation: -0.08 },
  { frame: 83, scale: 1.05, x: 0, y: 8, rotation: 0 },
  { frame: 103, scale: 1.07, x: 18, y: 2, rotation: 0 },
  { frame: 115, scale: 1.06, x: 0, y: 0, rotation: 0 },
  { frame: 149, scale: 1.0, x: 0, y: -8, rotation: 0 },
  { frame: 167, scale: 1.045, x: 0, y: -8, rotation: 0 },
  { frame: 207, scale: 1.03, x: 0, y: 0, rotation: 0 },
  { frame: 245, scale: 0.97, x: 0, y: 6, rotation: 0 },
  { frame: 269, scale: 1.0, x: 0, y: 0, rotation: 0 },
  { frame: 299, scale: 1.0, x: 0, y: 0, rotation: 0 },
];

const smoothEasing = Easing.bezier(0.16, 1, 0.3, 1);

export function getCameraState(frame: number): CameraState {
  // Find surrounding keyframes
  let prev = CAMERA_KEYFRAMES[0];
  let next = CAMERA_KEYFRAMES[CAMERA_KEYFRAMES.length - 1];

  for (let i = 0; i < CAMERA_KEYFRAMES.length - 1; i++) {
    if (frame >= CAMERA_KEYFRAMES[i].frame && frame <= CAMERA_KEYFRAMES[i + 1].frame) {
      prev = CAMERA_KEYFRAMES[i];
      next = CAMERA_KEYFRAMES[i + 1];
      break;
    }
  }

  if (prev.frame === next.frame) {
    return {
      scale: prev.scale,
      x: prev.x,
      y: prev.y,
      rotation: prev.rotation,
    };
  }

  const scale = interpolate(frame, [prev.frame, next.frame], [prev.scale, next.scale], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: smoothEasing,
  });

  const x = interpolate(frame, [prev.frame, next.frame], [prev.x, next.x], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: smoothEasing,
  });

  const y = interpolate(frame, [prev.frame, next.frame], [prev.y, next.y], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: smoothEasing,
  });

  const rotation = interpolate(
    frame,
    [prev.frame, next.frame],
    [prev.rotation, next.rotation],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: smoothEasing,
    }
  );

  return { scale, x, y, rotation };
}
