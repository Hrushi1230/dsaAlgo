import React from "react";
import { AbsoluteFill, Easing, Img, interpolate, useCurrentFrame } from "remotion";
import vermilionCelPaint from "../assets/intro-japanese/06-paint/26-vermilion-cel-paint.webp";
import vermilionEdgeMask from "../assets/intro-japanese/06-paint/27-vermilion-edge-mask.webp";
import { INTRO_CONSTANTS } from "../types";

/**
 * CelPaintMatte Component (F208–F299)
 * Vermilion gouache cel paint sweeps left->right across y=535 (F212-F225).
 * The ANIMATION title visibility is strictly clipped to the paint coverage via maskLeadingX.
 * Zero independent title fade.
 * F226-F231: Paint separates into 3 streak layers drifting 6-16px while title remains locked.
 */
export const CelPaintMatte: React.FC = () => {
  const frame = useCurrentFrame();

  if (frame < 208 || frame > 299) {
    return null;
  }

  // F212-F226: Paint sweep progress (0 -> 1) strictly coupled with text reveal per Section 10 & 18
  const sweepProgress = interpolate(frame, [212, 226], [0, 1], {
    easing: Easing.bezier(0.3, 0.1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Leading edge X: travels across the ANIMATION title area (at F220 ≈ 978px, revealing "ANIMAT..." with 'I-O-N' masked)
  const maskLeadingX = interpolate(sweepProgress, [0, 1], [460, 1370]);

  // F212-F226: Vermilion paint container translation X
  const paintContainerX = interpolate(sweepProgress, [0, 1], [-580, 180]);

  // F226-F231: Paint separation into 3 subtle streak drifts
  const streakDrift1 = interpolate(frame, [226, 231], [0, 6], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const streakDrift2 = interpolate(frame, [226, 231], [0, 11], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const streakDrift3 = interpolate(frame, [226, 231], [0, 16], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Paint body opacity (visible from F212 onward)
  const paintOpacity = interpolate(frame, [211, 212], [0, 0.94], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      {/* 26 Vermilion Cel Paint Sweep Layer (F212+) */}
      {frame >= 212 && (
        <div
          style={{
            position: "absolute",
            top: 460,
            left: paintContainerX,
            width: 1600,
            height: 180,
            opacity: paintOpacity,
            overflow: "visible",
          }}
        >
          {/* Main paint body */}
          <Img
            src={vermilionCelPaint}
            alt="Vermilion cel paint"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 1600,
              height: 180,
              objectFit: "cover",
              mixBlendMode: "multiply",
              opacity: 0.88,
            }}
          />

          {/* F226+: Drift Streak 1 */}
          {frame >= 226 && (
            <Img
              src={vermilionCelPaint}
              alt="Vermilion streak 1"
              style={{
                position: "absolute",
                top: -4,
                left: streakDrift1,
                width: 1600,
                height: 180,
                objectFit: "cover",
                mixBlendMode: "multiply",
                opacity: 0.28,
              }}
            />
          )}

          {/* F226+: Drift Streak 2 */}
          {frame >= 226 && (
            <Img
              src={vermilionCelPaint}
              alt="Vermilion streak 2"
              style={{
                position: "absolute",
                top: 6,
                left: -streakDrift2,
                width: 1600,
                height: 180,
                objectFit: "cover",
                mixBlendMode: "multiply",
                opacity: 0.22,
              }}
            />
          )}

          {/* F226+: Drift Streak 3 */}
          {frame >= 226 && (
            <Img
              src={vermilionCelPaint}
              alt="Vermilion streak 3"
              style={{
                position: "absolute",
                top: 12,
                left: streakDrift3,
                width: 1600,
                height: 180,
                objectFit: "cover",
                mixBlendMode: "multiply",
                opacity: 0.18,
              }}
            />
          )}
        </div>
      )}

      {/* 27 Vermilion Edge Mask (rides exactly at the leading edge during F212-F225) */}
      {frame >= 212 && frame <= 225 && (
        <div
          style={{
            position: "absolute",
            top: 450,
            left: maskLeadingX - 60,
            width: 120,
            height: 200,
            opacity: 0.85,
          }}
        >
          <Img
            src={vermilionEdgeMask}
            alt="Vermilion edge mask"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              mixBlendMode: "multiply",
            }}
          />
        </div>
      )}

      {/* Hero Title: ANIMATION
          STRICT COMPOSITING: reveal is clipped strictly to maskLeadingX */}
      {frame >= 212 && (
        <div
          style={{
            position: "absolute",
            top: 470,
            left: 0,
            width: 1920,
            height: 150,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            clipPath: `polygon(0 0, ${maskLeadingX}px 0, ${maskLeadingX}px 100%, 0 100%)`,
          }}
        >
          <span
            style={{
              fontFamily: "Inter, -apple-system, sans-serif",
              fontSize: 108,
              fontWeight: 900,
              color: INTRO_CONSTANTS.COLORS.INDIGO_DEEP,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              textShadow: "0 2px 8px rgba(38, 54, 74, 0.15)",
            }}
          >
            ANIMATION
          </span>
        </div>
      )}
    </AbsoluteFill>
  );
};
