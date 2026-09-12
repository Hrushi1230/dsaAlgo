import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { evolvePath } from "@remotion/paths";
import { SVG_PATHS } from "../utils/svgPaths";
import { INTRO_CONSTANTS } from "../types";

/**
 * WithGesture Component (F180–F299)
 * Single continuous hand-drawn connector gesture drawing WITH (F180-F197),
 * followed by clean typographic WITH overlay (F198-F207), settling into the locked identity.
 */
export const WithGesture: React.FC = () => {
  const frame = useCurrentFrame();

  if (frame < 180 || frame > 299) {
    return null;
  }

  // F180-F197: Hand-drawn continuous gesture draw progress (0 -> 1)
  const gestureDrawProg = interpolate(frame, [180, 197], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // F198-F207: Clean typographic WITH opacity (25% -> 100%)
  const cleanWithOpacity = interpolate(frame, [198, 204], [0.25, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // F204-F207: Rough gesture fades out (100% -> 0%)
  const roughGestureOpacity = interpolate(frame, [203, 207], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 15fps line-boil contour boil for hand-drawn gesture
  const boilIndex = Math.floor(frame / 2) % 4;
  const currentUnderline = SVG_PATHS.UNDERLINE[boilIndex];
  const gestureEvolved = evolvePath(gestureDrawProg, currentUnderline);

  // Hand-drawn cursive-like path for 'WITH'
  // Center roughly at x=960, y=445
  const cursiveWithPath =
    "M895 448 C902 432 910 458 916 450 C924 430 932 460 940 445 C948 440 952 458 958 445 C965 432 972 458 978 446 C986 438 998 442 1010 445 C1018 440 1024 452 1028 446";
  const cursiveEvolved = evolvePath(gestureDrawProg, cursiveWithPath);

  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      {/* Hand-Drawn Rough WITH Gesture (F180-F207) */}
      {frame <= 207 && roughGestureOpacity > 0 && (
        <svg
          viewBox="0 0 1920 1080"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1920,
            height: 1080,
            opacity: roughGestureOpacity,
          }}
        >
          {/* Subtle writing guide */}
          <path
            d="M870 458 C910 456 970 457 1045 456"
            fill="none"
            stroke={INTRO_CONSTANTS.COLORS.BLUE_PENCIL_LIGHT}
            strokeWidth="2"
            strokeDasharray={gestureEvolved.strokeDasharray}
            strokeDashoffset={gestureEvolved.strokeDashoffset}
          />
          {/* Continuous connector stroke */}
          <path
            d={cursiveWithPath}
            fill="none"
            stroke={INTRO_CONSTANTS.COLORS.BLUE_PENCIL}
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={cursiveEvolved.strokeDasharray}
            strokeDashoffset={cursiveEvolved.strokeDashoffset}
          />
        </svg>
      )}

      {/* Clean Typographic WITH (F198+) */}
      {frame >= 198 && (
        <div
          style={{
            position: "absolute",
            left: 890,
            top: 418,
            width: 140,
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: cleanWithOpacity,
          }}
        >
          <span
            style={{
              fontFamily: "Inter, -apple-system, sans-serif",
              fontSize: 34,
              fontWeight: 700,
              color: INTRO_CONSTANTS.COLORS.INDIGO_CLEAN,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            WITH
          </span>
        </div>
      )}
    </AbsoluteFill>
  );
};
