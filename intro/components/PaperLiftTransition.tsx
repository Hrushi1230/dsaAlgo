import React from "react";
import { AbsoluteFill, Easing, Img, interpolate, useCurrentFrame } from "remotion";
import paperSheetEdge from "../assets/intro-japanese/08-transition/31-paper-sheet-edge.webp";
import { INTRO_CONSTANTS } from "../types";

interface PaperLiftTransitionProps {
  children: React.ReactNode;
}

/**
 * PaperLiftTransition Component (F286–F299)
 * Rebuilt strictly to Section 1 (F290, F295), Section 14 & Section 18 of Change Bible:
 *   - Zero black bands, zero dark slit masks.
 *   - F286–F289: Blue pencil production line (#5B78A7, 2.5px) expands horizontally from center.
 *   - F289–F291: Line thickens into paper torn edge texture boundary.
 *   - F292–F299: Entire paper sheet lifts upward (translateY 0 -> -1080px) via Easing.bezier(0.16, 1, 0.3, 1),
 *     revealing the lesson chalkboard waiting underneath.
 */
export const PaperLiftTransition: React.FC<PaperLiftTransitionProps> = ({ children }) => {
  const frame = useCurrentFrame();

  // F286-F291: Blue pencil line horizontal expansion (0 -> 1920)
  const cutLineWidth = interpolate(
    frame,
    [286, 289, 291],
    [0, 1540, 1920],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // F292-F299: Exact frame-by-frame paper lift values from Section 14 (at F295 = -560px, 52% lifted)
  const sheetLiftY = interpolate(
    frame,
    [292, 293, 294, 295, 296, 297, 298, 299],
    [0, -160, -340, -560, -760, -910, -1040, -1080],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  if (frame >= 299) {
    // Intro sheet is fully lifted away
    return null;
  }

  return (
    <AbsoluteFill
      style={{
        transform: `translate3d(0, ${sheetLiftY}px, 0)`,
        overflow: "hidden",
      }}
    >
      {/* Paper World and Animated Intro Graphics */}
      {children}

      {/* F286-F291: Blue-Pencil Production Line across the lower guide */}
      {frame >= 286 && frame <= 291 && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: (1920 - cutLineWidth) / 2,
            width: cutLineWidth,
            height: 3,
            backgroundColor: INTRO_CONSTANTS.COLORS.BLUE_PENCIL,
            opacity: 0.85,
            pointerEvents: "none",
          }}
        />
      )}

      {/* 31 Paper Sheet Edge Texture (Rides the bottom boundary as sheet lifts F291-F299) */}
      {frame >= 291 && (
        <div
          style={{
            position: "absolute",
            bottom: -15,
            left: 0,
            width: 1920,
            height: 60,
            pointerEvents: "none",
          }}
        >
          <Img
            src={paperSheetEdge}
            alt="Paper sheet torn edge"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              mixBlendMode: "multiply",
              opacity: 0.95,
            }}
          />
        </div>
      )}
    </AbsoluteFill>
  );
};
