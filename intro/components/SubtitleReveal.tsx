import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { INTRO_CONSTANTS } from "../types";

/**
 * SubtitleReveal Component (F246–F299)
 * Left-to-right mask reveal of "VISUAL LEARNING · PATTERN BY PATTERN" at baseline y=708.
 * Pure clipping mask progression across F246-F257, followed by absolute brand hold (ma).
 */
export const SubtitleReveal: React.FC = () => {
  const frame = useCurrentFrame();

  if (frame < 246 || frame > 299) {
    return null;
  }

  // F246-F257: Mask reveal progress (0 -> 1)
  const revealProgress = interpolate(frame, [246, 257], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Reveal width across the subtitle span (from 0% to 100%)
  const clipPercentage = revealProgress * 100;

  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <div
        style={{
          position: "absolute",
          top: 680,
          left: 0,
          width: 1920,
          height: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          clipPath: `polygon(0 0, ${clipPercentage}% 0, ${clipPercentage}% 100%, 0 100%)`,
        }}
      >
        <span
          style={{
            fontFamily: "Inter, -apple-system, sans-serif",
            fontSize: 20,
            fontWeight: 700,
            color: INTRO_CONSTANTS.COLORS.INDIGO_CLEAN,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
          }}
        >
          VISUAL LEARNING · PATTERN BY PATTERN
        </span>
      </div>
    </AbsoluteFill>
  );
};
