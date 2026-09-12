import React from "react";
import { AbsoluteFill } from "remotion";
import { INTRO_CONSTANTS } from "../types";

/**
 * LessonUnderlay Component
 * The authentic chalkboard layer permanently fixed underneath the Japanese paper sheet.
 * Perfectly revealed as the washi production sheet lifts away during F292-F299.
 * No black frames, no jump cut.
 */
export const LessonUnderlay: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: INTRO_CONSTANTS.COLORS.CHALKBOARD_BG,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Subtle Chalkboard Slate Texture Grid */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1920,
          height: 1080,
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 70%),
            linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 60px 60px, 60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Chalkboard Slate Dust Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1920,
          height: 1080,
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.5) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Top Pedagogical Badge Ready for Lesson Hook */}
      <div
        style={{
          position: "absolute",
          top: 36,
          padding: "6px 20px",
          borderRadius: 20,
          border: "1.5px solid rgba(255, 255, 255, 0.18)",
          backgroundColor: "rgba(255, 255, 255, 0.04)",
          color: "#E6EDF3",
          fontFamily: "JetBrains Mono, Menlo, monospace",
          fontSize: 16,
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        CODE WITH ANIMATION · DSA
      </div>
    </AbsoluteFill>
  );
};
