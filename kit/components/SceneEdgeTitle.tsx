import React from "react";
import { useCurrentFrame, interpolate, spring } from "remotion";
import { theme, fonts } from "../lib/theme";
import { CHALK_FILTER_ID } from "../lib/chalk";

export interface SceneEdgeTitleProps {
  /** Main scene / beat headline */
  title: string;
  /** Optional explanatory subtitle */
  subtitle?: string;
  /** Optional category or chapter marker, e.g. "ACT 2 · THE COMPLICATION" */
  category?: string;
  /** Accent color for category pill or highlight */
  accentColor?: string;
  /** Text alignment */
  align?: "left" | "center";
  /** Top vertical offset (default 44px) */
  top?: number;
  /** Start frame for entrance animation */
  startFrame?: number;
  /** Show subtle chalk underline */
  underline?: boolean;
  /** Optional style override */
  style?: React.CSSProperties;
}

/**
 * SceneEdgeTitle — In-scene Top Edge Title (Foundation V2).
 *
 * Writes a scene title at the top of the board while keeping the primary algorithm
 * visual object visible in the optical center. Ensures pedagogical continuity.
 */
export const SceneEdgeTitle: React.FC<SceneEdgeTitleProps> = ({
  title,
  subtitle,
  category,
  accentColor = theme.pivot,
  align = "left",
  top = 44,
  startFrame = 0,
  underline = true,
  style,
}) => {
  const frame = useCurrentFrame();
  const relFrame = Math.max(0, frame - startFrame);

  const titleSpring = spring({
    frame: relFrame,
    fps: 30,
    config: { damping: 14, stiffness: 160 },
  });

  const isCenter = align === "center";

  return (
    <div
      style={{
        position: "absolute",
        top,
        left: isCenter ? 0 : 80,
        right: isCenter ? 0 : "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: isCenter ? "center" : "flex-start",
        zIndex: 50,
        pointerEvents: "none",
        opacity: interpolate(titleSpring, [0, 1], [0, 1]),
        transform: `translateY(${interpolate(titleSpring, [0, 1], [-18, 0])}px)`,
        ...style,
      }}
    >
      {/* Category Marker */}
      {category && (
        <span
          style={{
            fontFamily: fonts.mono,
            fontSize: 18,
            fontWeight: 800,
            letterSpacing: "1.5px",
            color: accentColor,
            marginBottom: 4,
          }}
        >
          {category.toUpperCase()}
        </span>
      )}

      {/* Main Title */}
      <h2
        style={{
          margin: 0,
          fontFamily: fonts.hand,
          fontSize: 48,
          fontWeight: "bold",
          color: theme.chalkText,
          filter: `url(#${CHALK_FILTER_ID})`,
          textShadow: `0 0 12px rgba(248, 246, 240, 0.2), 0 2px 4px rgba(0,0,0,0.6)`,
          lineHeight: 1.15,
        }}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <span
          style={{
            marginTop: 4,
            fontFamily: fonts.hand,
            fontSize: 28,
            color: theme.chalkDim,
            lineHeight: 1.2,
          }}
        >
          {subtitle}
        </span>
      )}

      {/* Subtle Chalk Underline */}
      {underline && (
        <div
          style={{
            marginTop: 8,
            width: isCenter ? 320 : 260,
            height: 2,
            backgroundColor: accentColor,
            opacity: 0.6,
            borderRadius: 1,
          }}
        />
      )}
    </div>
  );
};
