/**
 * SceneTitleCard.tsx — Architectural Precision Blackboard Transition Bumper
 *
 * State-of-the-art transition card with:
 *   - Precision laser-chalk framing and crosshairs (+)
 *   - 100% handcrafted vector SVG chalk icons (no emojis)
 *   - Blueprint drafting grid background watermark
 *   - Intelligent scene keyword mapping & color taxonomy
 *   - High-contrast technical metadata bar in monospace
 *   - Pure Remotion spring physics & clamped animations
 */
import React from "react";
import {
  AbsoluteFill,
  Audio,
  Sequence,
  useCurrentFrame,
  interpolate,
  spring,
  staticFile,
} from "remotion";

import { ChalkboardBackground, ChalkFilters, CHALK_FILTER_ID } from "../lib/chalk";
import { theme, fonts } from "../lib/theme";
import { ChalkIcon, IconType } from "./ChalkIcons";

export interface SceneTitleCardProps {
  sceneNumber: string; // e.g. "SCENE 01", "SCENE 04"
  title: string;
  subtext?: string;
  category?: string;  // e.g. "THE HOOK", "BRUTE FORCE", "OPTIMAL TECHNIQUE"
  pattern?: string;   // e.g. "ARRAYS & HASHING"
  leetcodeNumber?: number | string;
  icon?: string;      // custom icon override if needed
  accentColor?: string;
  startFrame?: number;
  playAudio?: boolean;
  sfxSrc?: string;
}

export const SceneTitleCard: React.FC<SceneTitleCardProps> = ({
  sceneNumber,
  title,
  subtext,
  category,
  pattern = "ARRAYS & HASHING",
  leetcodeNumber = 1,
  icon,
  accentColor,
  startFrame = 0,
  playAudio = true,
  sfxSrc = "audio/sfx/chalk-tap.mp3",
}) => {
  const frame = useCurrentFrame();
  const localFrame = Math.max(0, frame - startFrame);

  // Auto-derive theme color, category label, and SVG icon type based on scene number / title
  let color = accentColor || theme.pivot;
  let iconType: IconType = "sparkle";
  let catLabel = category || "";

  const lowerTitle = title.toLowerCase();
  const lowerNum = sceneNumber.toLowerCase();

  if (lowerTitle.includes("hook") || lowerNum.includes("01")) {
    color = accentColor || theme.pivot;
    iconType = "hook";
    catLabel = catLabel || "ACT 1 · THE REAL-WORLD FAILURE";
  } else if (
    lowerTitle.includes("cold open") ||
    lowerTitle.includes("recall") ||
    lowerNum.includes("02")
  ) {
    color = accentColor || theme.cyan;
    iconType = "recall";
    catLabel = catLabel || "ACT 2 · SPACED REPETITION RECALL";
  } else if (
    lowerTitle.includes("predict") ||
    lowerTitle.includes("challenge") ||
    lowerNum.includes("03")
  ) {
    color = accentColor || theme.pivot;
    iconType = "predict";
    catLabel = catLabel || "ACT 3 · ACTIVE RECALL CHALLENGE";
  } else if (
    lowerTitle.includes("trace-brute") ||
    lowerTitle.includes("trace brute") ||
    lowerNum.includes("04")
  ) {
    color = accentColor || theme.warn;
    iconType = "brute";
    catLabel = catLabel || "APPROACH 1 · BRUTE FORCE EXPLORATION";
  } else if (
    lowerTitle.includes("code-brute") ||
    lowerTitle.includes("code brute") ||
    lowerNum.includes("05")
  ) {
    color = accentColor || theme.warn;
    iconType = "code";
    catLabel = catLabel || "APPROACH 1 · BRUTE FORCE IMPLEMENTATION";
  } else if (
    lowerTitle.includes("why-not") ||
    lowerTitle.includes("why not") ||
    lowerNum.includes("06")
  ) {
    color = accentColor || theme.warn;
    iconType = "whynot";
    catLabel = catLabel || "APPROACH 1 · COMPLEXITY & BOTTLENECK";
  } else if (
    lowerTitle.includes("trace-optimal") ||
    lowerTitle.includes("trace optimal") ||
    lowerNum.includes("07")
  ) {
    color = accentColor || theme.good;
    iconType = "optimal";
    catLabel = catLabel || "APPROACH 2 · OPTIMAL TECHNIQUE";
  } else if (
    lowerTitle.includes("code-optimal") ||
    lowerTitle.includes("code optimal") ||
    lowerNum.includes("08")
  ) {
    color = accentColor || theme.good;
    iconType = "code";
    catLabel = catLabel || "APPROACH 2 · OPTIMAL IMPLEMENTATION";
  } else if (
    lowerTitle.includes("misconception") ||
    lowerTitle.includes("trap") ||
    lowerNum.includes("09")
  ) {
    color = accentColor || theme.purple;
    iconType = "misconception";
    catLabel = catLabel || "DEEP DIVE · COMMON TRAPS & TRADEOFFS";
  } else if (
    lowerTitle.includes("complexity") ||
    lowerTitle.includes("roadmap") ||
    lowerNum.includes("10")
  ) {
    color = accentColor || theme.good;
    iconType = "complexity";
    catLabel = catLabel || "GRAND FINALE · MASTERY & ROADMAP";
  }

  // Pure Remotion Animations (Zero CSS transitions / keyframes)
  const cardScale = spring({
    frame: localFrame,
    fps: 30,
    config: { damping: 16, stiffness: 180 },
  });

  const cardOpacity = interpolate(localFrame, [0, 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const animProgress = interpolate(localFrame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: theme.boardBg }}>
      {/* Background & Chalk Textures */}
      <Sequence name="bg" from={0}>
        <ChalkboardBackground />
        <ChalkFilters />
      </Sequence>

      {/* Transition Bumper SFX (Chalk tap / tactile click, no whoosh) */}
      {playAudio && (
        <Sequence name="audio-sfx" from={startFrame}>
          <Audio src={staticFile(sfxSrc)} volume={0.2} />
        </Sequence>
      )}

      {/* Subtle Blueprint Grid Pattern Wash */}
      <Sequence name="grid-wash" from={0}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(to right, rgba(248, 246, 240, 0.025) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(248, 246, 240, 0.025) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />
      </Sequence>

      {/* Centered Main Architectural Title Card */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: cardOpacity,
        }}
      >
        <div
          style={{
            position: "relative",
            width: 1340,
            padding: "44px 54px",
            backgroundColor: "rgba(6, 22, 16, 0.94)",
            border: `1.5px solid ${color}66`,
            borderRadius: 8,
            boxShadow: `0 35px 90px rgba(0, 0, 0, 0.75), 0 0 40px ${color}18`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 18,
            transform: `scale(${cardScale})`,
            boxSizing: "border-box",
          }}
        >
          {/* Architectural Drafting Crosshairs at 4 Corners */}
          <div
            style={{
              position: "absolute",
              top: -10,
              left: -10,
              color: color,
              fontFamily: fonts.mono,
              fontSize: 20,
              lineHeight: 1,
            }}
          >
            +
          </div>
          <div
            style={{
              position: "absolute",
              top: -10,
              right: -10,
              color: color,
              fontFamily: fonts.mono,
              fontSize: 20,
              lineHeight: 1,
            }}
          >
            +
          </div>
          <div
            style={{
              position: "absolute",
              bottom: -10,
              left: -10,
              color: color,
              fontFamily: fonts.mono,
              fontSize: 20,
              lineHeight: 1,
            }}
          >
            +
          </div>
          <div
            style={{
              position: "absolute",
              bottom: -10,
              right: -10,
              color: color,
              fontFamily: fonts.mono,
              fontSize: 20,
              lineHeight: 1,
            }}
          >
            +
          </div>

          {/* Top Technical Metadata Bar */}
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(248, 246, 240, 0.12)",
              paddingBottom: 14,
            }}
          >
            {/* Scene ID with Handcrafted SVG Icon */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "4px 14px",
                  borderRadius: 4,
                  backgroundColor: `${color}20`,
                  border: `1px solid ${color}`,
                  color: color,
                  fontFamily: fonts.mono,
                  fontSize: 16,
                  fontWeight: 800,
                  letterSpacing: 2,
                }}
              >
                <ChalkIcon
                  type={iconType}
                  size={18}
                  color={color}
                  strokeWidth={2.5}
                  animatedProgress={animProgress}
                />
                <span>{sceneNumber.toUpperCase()}</span>
              </div>
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 15,
                  color: theme.chalkDim,
                  letterSpacing: 1.5,
                }}
              >
                // {catLabel}
              </span>
            </div>

            {/* Pattern System Tag */}
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 14,
                fontWeight: 700,
                color: theme.chalkDim,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              DSA · {pattern} · LC #{leetcodeNumber}
            </div>
          </div>

          {/* Hero Title Section with Editorial Flanking Lines */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 24,
              width: "100%",
              marginTop: 4,
            }}
          >
            <div style={{ flex: 1, height: 1, backgroundColor: `${color}44` }} />
            <div style={{ textAlign: "center" }}>
              <span
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 68,
                  fontWeight: 700,
                  color: theme.chalkText,
                  letterSpacing: 1.5,
                  filter: `url(#${CHALK_FILTER_ID})`,
                  textShadow: `0 0 30px ${color}66, 0 2px 10px rgba(0,0,0,0.9)`,
                }}
              >
                {title}
              </span>
            </div>
            <div style={{ flex: 1, height: 1, backgroundColor: `${color}44` }} />
          </div>

          {/* Linear Gradient Divider with Centered Diamond Accent Node */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "70%",
              gap: 12,
            }}
          >
            <div
              style={{
                flex: 1,
                height: 1.5,
                background: `linear-gradient(90deg, transparent, ${color})`,
              }}
            />
            <div
              style={{
                width: 10,
                height: 10,
                transform: "rotate(45deg)",
                border: `1.5px solid ${color}`,
                backgroundColor: `${color}44`,
              }}
            />
            <div
              style={{
                flex: 1,
                height: 1.5,
                background: `linear-gradient(90deg, ${color}, transparent)`,
              }}
            />
          </div>

          {/* Subtext Card with Left Accent Bar */}
          {subtext && (
            <div
              style={{
                width: "88%",
                padding: "14px 28px",
                backgroundColor: "rgba(248, 246, 240, 0.04)",
                borderLeft: `4px solid ${color}`,
                borderTop: "1px solid rgba(248, 246, 240, 0.08)",
                borderRight: "1px solid rgba(248, 246, 240, 0.08)",
                borderBottom: "1px solid rgba(248, 246, 240, 0.08)",
                borderRadius: "0 6px 6px 0",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 22,
                  color: theme.chalkText,
                  letterSpacing: 0.8,
                }}
              >
                {subtext}
              </span>
            </div>
          )}
        </div>
      </div>
    </AbsoluteFill>
  );
};
