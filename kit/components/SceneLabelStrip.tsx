import React from "react";
import { useCurrentFrame, interpolate, spring } from "remotion";
import { theme, fonts } from "../lib/theme";
import { CHALK_FILTER_ID } from "../lib/chalk";

export interface SceneLabelStripProps {
  /** Main phase / beat label, e.g. "BRUTE FORCE", "OPTIMAL TRACE", "COMPLEXITY" */
  label: string;
  /** Optional step or act tag, e.g. "STEP 01", "ACT 2" */
  step?: string;
  /** Accent color type or hex: "pivot" | "good" | "warn" | "cyan" | "better" */
  accentColor?: "pivot" | "good" | "warn" | "cyan" | "better" | string;
  /** Position anchor on the 1080p canvas */
  position?: "top-left" | "top-center" | "top-right";
  /** Frame when label reveals */
  startFrame?: number;
  /** Optional custom styling */
  style?: React.CSSProperties;
}

/**
 * SceneLabelStrip — Lightweight Chalk Scene Label (Foundation V2).
 *
 * Used during intra-question transitions to signal algorithm phases without
 * blanking the screen with a full-screen bumper card. Preserves visual continuity.
 */
export const SceneLabelStrip: React.FC<SceneLabelStripProps> = ({
  label,
  step,
  accentColor = "pivot",
  position = "top-left",
  startFrame = 0,
  style,
}) => {
  const frame = useCurrentFrame();
  const relFrame = Math.max(0, frame - startFrame);

  const entranceSpring = spring({
    frame: relFrame,
    fps: 30,
    config: { damping: 14, stiffness: 170 },
  });

  // Resolve accent color
  const resolvedAccent = (() => {
    switch (accentColor) {
      case "pivot":
        return theme.pivot;
      case "good":
        return theme.good;
      case "warn":
        return theme.warn;
      case "cyan":
        return theme.cyan;
      case "better":
        return theme.better;
      default:
        return accentColor;
    }
  })();

  // Positioning styles
  const positionStyles: React.CSSProperties = (() => {
    switch (position) {
      case "top-center":
        return {
          top: 36,
          left: "50%",
          transform: `translateX(-50%) translateY(${interpolate(entranceSpring, [0, 1], [-20, 0])}px) scale(${interpolate(entranceSpring, [0, 1], [0.92, 1])})`,
        };
      case "top-right":
        return {
          top: 36,
          right: 54,
          transform: `translateY(${interpolate(entranceSpring, [0, 1], [-20, 0])}px) scale(${interpolate(entranceSpring, [0, 1], [0.92, 1])})`,
        };
      case "top-left":
      default:
        return {
          top: 36,
          left: 54,
          transform: `translateY(${interpolate(entranceSpring, [0, 1], [-20, 0])}px) scale(${interpolate(entranceSpring, [0, 1], [0.92, 1])})`,
        };
    }
  })();

  return (
    <div
      style={{
        position: "absolute",
        zIndex: 100,
        opacity: interpolate(entranceSpring, [0, 1], [0, 1]),
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        padding: "8px 20px",
        borderRadius: 10,
        backgroundColor: "rgba(18, 40, 30, 0.9)",
        border: `2px solid ${resolvedAccent}`,
        boxShadow: `0 4px 20px rgba(0, 0, 0, 0.4), 0 0 14px ${resolvedAccent}33`,
        pointerEvents: "none",
        ...positionStyles,
        ...style,
      }}
    >
      {/* Optional Step Pill */}
      {step && (
        <span
          style={{
            fontFamily: fonts.mono,
            fontSize: 16,
            fontWeight: 800,
            letterSpacing: "1.2px",
            color: resolvedAccent,
            padding: "2px 8px",
            borderRadius: 4,
            backgroundColor: `${resolvedAccent}1A`,
          }}
        >
          {step}
        </span>
      )}

      {/* Main Label */}
      <span
        style={{
          fontFamily: fonts.mono,
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: "1.5px",
          color: theme.chalkText,
          filter: `url(#${CHALK_FILTER_ID})`,
        }}
      >
        {label}
      </span>
    </div>
  );
};
