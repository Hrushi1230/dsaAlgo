import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";
import { ChalkboardBackground, ChalkFilters, CHALK_FILTER_ID, CHALK_FILTER_STRONG_ID } from "../lib/chalk";
import { theme, fonts } from "../lib/theme";
import { ChalkIcon, IconType } from "./ChalkIcons";
import { ChalkDust } from "./ChalkDust";

export interface TestCardProps {
  sceneNumber: string;
  title: string;
  subtext: string;
  category?: string;
  iconType?: IconType;
  accentColor?: string;
}

/**
 * VARIANT 1: Organic Hand-Sketched Blackboard (Tactile Chalk Slate)
 */
export const SceneTitleCardVariant1: React.FC<TestCardProps> = ({
  sceneNumber = "SCENE 01",
  title = "THE REAL-WORLD HOOK",
  subtext = "Checking 1,000 User IDs: Why O(n²) Fails in Production",
  category = "ACT 1 · THE REAL-WORLD FAILURE",
  iconType = "hook",
  accentColor = theme.pivot,
}) => {
  const frame = useCurrentFrame();

  const cardScale = spring({
    frame,
    fps: 30,
    config: { damping: 14, stiffness: 140 },
  });

  const bracketProgress = interpolate(frame, [0, 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const dividerWidth = interpolate(frame, [6, 20], [0, 880], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: theme.boardBg }}>
      <ChalkboardBackground />
      <ChalkFilters />

      {/* Particle Chalk Bursts */}
      <ChalkDust x={380} y={320} start={0} count={16} radius={110} color={accentColor} seed={101} />
      <ChalkDust x={1540} y={760} start={0} count={16} radius={110} color={accentColor} seed={102} />

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Main Organic Slate Card */}
        <div
          style={{
            position: "relative",
            width: 1320,
            padding: "46px 60px",
            borderRadius: 22,
            backgroundColor: "rgba(10, 30, 20, 0.88)",
            border: `2px solid ${accentColor}44`,
            boxShadow: `0 30px 80px rgba(0, 0, 0, 0.65), 0 0 50px ${accentColor}22`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            transform: `scale(${cardScale})`,
            boxSizing: "border-box",
          }}
        >
          {/* Hand-drawn Corner Brackets SVG */}
          <svg
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              filter: `url(#${CHALK_FILTER_STRONG_ID})`,
              overflow: "visible",
            }}
          >
            {/* Top-Left */}
            <path
              d="M 32 64 L 32 32 L 64 32"
              fill="none"
              stroke={accentColor}
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="96"
              strokeDashoffset={96 * (1 - bracketProgress)}
            />
            {/* Top-Right */}
            <path
              d="M 1256 32 L 1288 32 L 1288 64"
              fill="none"
              stroke={accentColor}
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="96"
              strokeDashoffset={96 * (1 - bracketProgress)}
            />
            {/* Bottom-Left */}
            <path
              d="M 32 320 L 32 352 L 64 352"
              fill="none"
              stroke={accentColor}
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="96"
              strokeDashoffset={96 * (1 - bracketProgress)}
            />
            {/* Bottom-Right */}
            <path
              d="M 1256 352 L 1288 352 L 1288 320"
              fill="none"
              stroke={accentColor}
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="96"
              strokeDashoffset={96 * (1 - bracketProgress)}
            />
          </svg>

          {/* Inner Dashed Chalk Guideline Frame */}
          <div
            style={{
              position: "absolute",
              inset: 14,
              borderRadius: 14,
              border: "1.5px dashed rgba(248, 246, 240, 0.15)",
              pointerEvents: "none",
            }}
          />

          {/* Top Bar: Scene Pill + Category Tag */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, zIndex: 2 }}>
            {/* Scene Badge with Real SVG Icon */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 22px",
                borderRadius: 12,
                backgroundColor: `${accentColor}18`,
                border: `2px solid ${accentColor}`,
                color: accentColor,
                fontFamily: fonts.mono,
                fontSize: 20,
                fontWeight: 800,
                letterSpacing: 2,
                filter: `url(#${CHALK_FILTER_ID})`,
              }}
            >
              <ChalkIcon type={iconType} size={26} color={accentColor} strokeWidth={3} animatedProgress={bracketProgress} />
              <span>{sceneNumber.toUpperCase()}</span>
            </div>

            {/* Category Description Tag */}
            <div
              style={{
                padding: "8px 22px",
                borderRadius: 12,
                backgroundColor: "rgba(248, 246, 240, 0.06)",
                border: "1.5px solid rgba(248, 246, 240, 0.22)",
                color: theme.chalkText,
                fontFamily: fonts.mono,
                fontSize: 17,
                fontWeight: 700,
                letterSpacing: 1.8,
              }}
            >
              {category}
            </div>
          </div>

          {/* Hero Handwritten Chalkboard Title */}
          <div style={{ textAlign: "center", zIndex: 2, marginTop: 4 }}>
            <span
              style={{
                fontFamily: fonts.hand,
                fontSize: 66,
                fontWeight: 700,
                color: theme.chalkText,
                letterSpacing: 1,
                filter: `url(#${CHALK_FILTER_ID})`,
                textShadow: `0 0 24px ${accentColor}77, 0 4px 14px rgba(0,0,0,0.85)`,
              }}
            >
              {title}
            </span>
          </div>

          {/* Organic Hand-Drawn Chalk Scratch Line */}
          <div
            style={{
              width: dividerWidth,
              height: 3,
              background: `linear-gradient(90deg, transparent 0%, ${accentColor} 50%, transparent 100%)`,
              borderRadius: 2,
              filter: `url(#${CHALK_FILTER_ID})`,
              zIndex: 2,
            }}
          />

          {/* Subtext Pill with Key Concept */}
          <div
            style={{
              zIndex: 2,
              padding: "12px 36px",
              borderRadius: 14,
              backgroundColor: "rgba(248, 246, 240, 0.06)",
              border: "1.5px solid rgba(248, 246, 240, 0.16)",
              textAlign: "center",
              maxWidth: 1100,
            }}
          >
            <span
              style={{
                fontFamily: fonts.hand,
                fontSize: 32,
                color: theme.chalkText,
                filter: `url(#${CHALK_FILTER_ID})`,
              }}
            >
              &ldquo;{subtext}&rdquo;
            </span>
          </div>

          {/* Bottom Step Indicator Dots */}
          <div style={{ display: "flex", gap: 10, marginTop: 2, zIndex: 2 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: accentColor }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(248, 246, 240, 0.25)" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(248, 246, 240, 0.25)" }} />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

/**
 * VARIANT 2: Architectural Precision Blackboard (Drafting Lecture Board)
 */
export const SceneTitleCardVariant2: React.FC<TestCardProps> = ({
  sceneNumber = "SCENE 01",
  title = "THE REAL-WORLD HOOK",
  subtext = "Checking 1,000 User IDs: Why O(n²) Fails in Production",
  category = "ACT 1 · THE REAL-WORLD FAILURE",
  iconType = "hook",
  accentColor = theme.pivot,
}) => {
  const frame = useCurrentFrame();

  const cardScale = spring({
    frame,
    fps: 30,
    config: { damping: 16, stiffness: 180 },
  });

  const animProgress = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: theme.boardBg }}>
      <ChalkboardBackground />
      <ChalkFilters />

      {/* Subtle Blueprint Grid Pattern Wash */}
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

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Main Architectural Card */}
        <div
          style={{
            position: "relative",
            width: 1340,
            padding: "44px 54px",
            backgroundColor: "rgba(6, 22, 16, 0.94)",
            border: `1.5px solid ${accentColor}66`,
            borderRadius: 8,
            boxShadow: `0 35px 90px rgba(0, 0, 0, 0.75), 0 0 40px ${accentColor}18`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 18,
            transform: `scale(${cardScale})`,
            boxSizing: "border-box",
          }}
        >
          {/* Architectural Drafting Crosshairs at 4 Corners */}
          <div style={{ position: "absolute", top: -10, left: -10, color: accentColor, fontFamily: fonts.mono, fontSize: 20 }}>+</div>
          <div style={{ position: "absolute", top: -10, right: -10, color: accentColor, fontFamily: fonts.mono, fontSize: 20 }}>+</div>
          <div style={{ position: "absolute", bottom: -10, left: -10, color: accentColor, fontFamily: fonts.mono, fontSize: 20 }}>+</div>
          <div style={{ position: "absolute", bottom: -10, right: -10, color: accentColor, fontFamily: fonts.mono, fontSize: 20 }}>+</div>

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
            {/* Scene ID & Live Status */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "4px 14px",
                  borderRadius: 4,
                  backgroundColor: `${accentColor}20`,
                  border: `1px solid ${accentColor}`,
                  color: accentColor,
                  fontFamily: fonts.mono,
                  fontSize: 16,
                  fontWeight: 800,
                  letterSpacing: 2,
                }}
              >
                <ChalkIcon type={iconType} size={18} color={accentColor} strokeWidth={2.5} animatedProgress={animProgress} />
                <span>{sceneNumber}</span>
              </div>
              <span style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.chalkDim, letterSpacing: 1.5 }}>
                // {category}
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
              DSA · PATTERN 01 · LC #1
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
            <div style={{ flex: 1, height: 1, backgroundColor: `${accentColor}44` }} />
            <div style={{ textAlign: "center" }}>
              <span
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 68,
                  fontWeight: 700,
                  color: theme.chalkText,
                  letterSpacing: 1.5,
                  textShadow: `0 0 30px ${accentColor}66, 0 2px 10px rgba(0,0,0,0.9)`,
                }}
              >
                {title}
              </span>
            </div>
            <div style={{ flex: 1, height: 1, backgroundColor: `${accentColor}44` }} />
          </div>

          {/* Linear Gradient Divider with Centered Diamond Accent Node */}
          <div style={{ display: "flex", alignItems: "center", width: "70%", gap: 12 }}>
            <div style={{ flex: 1, height: 1.5, background: `linear-gradient(90deg, transparent, ${accentColor})` }} />
            <div
              style={{
                width: 10,
                height: 10,
                transform: "rotate(45deg)",
                border: `1.5px solid ${accentColor}`,
                backgroundColor: `${accentColor}44`,
              }}
            />
            <div style={{ flex: 1, height: 1.5, background: `linear-gradient(90deg, ${accentColor}, transparent)` }} />
          </div>

          {/* Subtext Card with Left Accent Bar */}
          <div
            style={{
              width: "88%",
              padding: "14px 28px",
              backgroundColor: "rgba(248, 246, 240, 0.04)",
              borderLeft: `4px solid ${accentColor}`,
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
        </div>
      </div>
    </AbsoluteFill>
  );
};
