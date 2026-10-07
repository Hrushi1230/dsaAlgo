import React from "react";
import { theme, fonts } from "../lib/theme";
import { PATTERNS_DATA, ProblemRowData, PatternSectionData } from "../lib/roadmapData";

export interface MasterRoadmapV2Props {
  /** Completed problems count across whole course (e.g. 10 in S01, 11 in S10) */
  completedCount?: number;
  /** Set of completed global problem numbers (default: [1..10]) */
  completedGlobalNums?: number[];
  /** Currently active problem global number (default: 11) */
  activeGlobalNum?: number;
  /** Problem designated as 'UP NEXT' (default: 12 when 11 is active, or undefined) */
  upNextGlobalNum?: number;
  /** Currently selected pattern id (default: 1 for Arrays & Hashing) */
  activePatternId?: number;
  /** Optional spotlight problem row number for targeted glow/focus */
  spotlightRow?: number;
  /** Label on the active problem status badge (default: "NOW ACTIVE") */
  activeBadgeLabel?: string;
  /** Whether to show header underline */
  showHeaderUnderline?: boolean;
  /** Camera / container zoom scale factor (default: 1) */
  scale?: number;
  /** Camera / container Y translation in pixels (default: 0) */
  translateY?: number;
  /** Camera / container X translation in pixels (default: 0) */
  translateX?: number;
  /** Overall container opacity (default: 1) */
  opacity?: number;
  /** Fade out surrounding UI for representation handoff (0..1) */
  handoffFade?: number;
  /** Optional custom title override for the active problem */
  activeSubtitle?: string;
  /** FAANG interview readiness phase ("none" | "intro" | "fundamentals" | "faang") */
  faangPhase?: "none" | "intro" | "fundamentals" | "faang";
  /** Normalized progress within the active FAANG phase [0..1] */
  faangProgress?: number;
  /** Active company badges for problem row(s), e.g. ["Meta", "Amazon", "Microsoft"] */
  activeCompanyTags?: string[];
  /** Whether to show company tags (default: faangPhase === "faang") */
  showCompanyTags?: boolean;
  /** Whether to highlight all 19 course patterns in the sidebar */
  highlightAllPatterns?: boolean;
  /** Normalized dim amount for half-fading the roadmap (0..1) */
  dimAmount?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * MasterRoadmapV2 — Authoritative Course Progress & Curriculum Hub.
 *
 * Rules:
 * 1. Scene01 and Scene10 reuse the exact SAME layout, typography, and structure.
 * 2. Immutable 19 Course Patterns sidebar.
 * 3. Immutable 001..227 vertical progress rail.
 * 4. Pattern 01 (Arrays & Hashing) authoritative 18-problem curriculum.
 * 5. State mutations (10/227 -> 11/227, Q011 Complete, Q012 Up Next) driven purely by props.
 */
export const MasterRoadmapV2: React.FC<MasterRoadmapV2Props> = ({
  completedCount = 10,
  completedGlobalNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  activeGlobalNum = 11,
  upNextGlobalNum,
  activePatternId = 1,
  spotlightRow,
  activeBadgeLabel = "NOW ACTIVE",
  showHeaderUnderline = false,
  scale = 1,
  translateY = 0,
  translateX = 0,
  opacity = 1,
  handoffFade = 0,
  activeSubtitle,
  faangPhase = "none",
  faangProgress = 1,
  activeCompanyTags,
  showCompanyTags,
  highlightAllPatterns = false,
  dimAmount = 0,
  className,
  style,
}) => {
  const pattern01 = PATTERNS_DATA.find((p) => p.id === activePatternId) || PATTERNS_DATA[0];
  const completedSet = new Set(completedGlobalNums);
  const patternCompletedCount = pattern01.problems.filter((p) => completedSet.has(p.globalNum)).length;

  const surroundingsOpacity = Math.max(0, 1 - handoffFade);
  const shouldShowCompanyTags = showCompanyTags !== undefined ? showCompanyTags : faangPhase === "faang";

  return (
    <div
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        width: 1920,
        height: 1080,
        overflow: "hidden",
        opacity,
        userSelect: "none",
        ...style,
      }}
    >
      {/* Scalable & Pannable Master Camera Rig */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transformOrigin: "960px 480px",
          transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
          opacity: 1 - dimAmount * 0.72,
        }}
      >
        {/* Dimming vignette overlay when roadmap is half-faded */}
        {dimAmount > 0 && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: `rgba(6, 16, 12, ${dimAmount * 0.6})`,
              zIndex: 12,
              pointerEvents: "none",
            }}
          />
        )}
        {/* ================================================================= */}
        {/* 1. TOP HEADER BAR                                                 */}
        {/* ================================================================= */}
        <div
          style={{
            position: "absolute",
            top: 26,
            left: 80,
            right: 80,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            opacity: surroundingsOpacity,
            zIndex: 20,
          }}
        >
          {/* Top-Left: Channel Series Marker */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 14,
                letterSpacing: "0.14em",
                color: theme.cyan,
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              CODE WITH ANIMATION
            </span>
            <span style={{ color: theme.chalkDim, fontSize: 16 }}>•</span>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 14,
                letterSpacing: "0.10em",
                color: theme.chalkDim,
                fontWeight: 600,
              }}
            >
              MASTER DSA COURSE
            </span>
          </div>

          {/* Top-Center: Canonical Roadmap Title */}
          <div style={{ position: "relative" }}>
            <span
              style={{
                fontFamily: fonts.hand,
                fontSize: 34,
                fontWeight: "bold",
                color: theme.chalkText,
                letterSpacing: "0.06em",
              }}
            >
              DSA PATTERN ROADMAP
            </span>
            {showHeaderUnderline && (
              <div
                style={{
                  position: "absolute",
                  bottom: -4,
                  left: 0,
                  width: "100%",
                  height: 3,
                  backgroundColor: theme.pivot,
                  borderRadius: 2,
                }}
              />
            )}
          </div>

          {/* Top-Right: Course Scope & Global Progress Counter */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                padding: "4px 12px",
                borderRadius: 8,
                background: "rgba(255, 209, 102, 0.12)",
                border: `1px solid ${theme.pivot}`,
                fontFamily: fonts.mono,
                fontSize: 13,
                fontWeight: 800,
                color: theme.pivot,
                letterSpacing: "0.05em",
              }}
            >
              227 PROBLEMS
            </div>

            <div
              style={{
                padding: "4px 14px",
                borderRadius: 8,
                background: "rgba(60, 229, 167, 0.14)",
                border: `1px solid ${theme.good}`,
                fontFamily: fonts.mono,
                fontSize: 13,
                fontWeight: 800,
                color: theme.good,
                letterSpacing: "0.05em",
              }}
            >
              {completedCount} / 227 COMPLETED
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* 2. LEFT SIDEBAR: 19 COURSE PATTERNS LIST (W: 280, X: 80, Y: 110) */}
        {/* ================================================================= */}
        <div
          style={{
            position: "absolute",
            left: 80,
            top: 110,
            width: 280,
            height: 860,
            display: "flex",
            flexDirection: "column",
            opacity: surroundingsOpacity,
            borderRight: "1px solid rgba(232, 228, 213, 0.12)",
            paddingRight: 20,
            zIndex: 10,
          }}
        >
          {/* Sidebar Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 12,
              paddingBottom: 8,
              borderBottom: highlightAllPatterns
                ? `1px solid ${theme.pivot}`
                : "1px solid rgba(232, 228, 213, 0.12)",
            }}
          >
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 13,
                letterSpacing: "0.12em",
                color: theme.pivot,
                fontWeight: 800,
                textShadow: highlightAllPatterns ? "0 0 10px rgba(255, 209, 102, 0.6)" : "none",
              }}
            >
              19 COURSE PATTERNS
            </span>
            {highlightAllPatterns && (
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 10,
                  padding: "1px 6px",
                  borderRadius: 4,
                  background: "rgba(255, 209, 102, 0.22)",
                  border: `1px solid ${theme.pivot}`,
                  color: theme.pivot,
                  fontWeight: 800,
                }}
              >
                CURRICULUM
              </span>
            )}
          </div>

          {/* 19 Patterns List */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              overflowY: "hidden",
            }}
          >
            {PATTERNS_DATA.map((pat) => {
              const isActive = pat.id === activePatternId;
              const isGlowing = highlightAllPatterns;

              let patBg = "transparent";
              let patBorder = "1px solid transparent";
              let patShadow = "none";
              let numColor: string = theme.chalkDim;
              let nameColor: string = theme.chalkDim;
              let nameWeight = "normal";

              if (isActive) {
                patBg = "rgba(255, 209, 102, 0.18)";
                patBorder = `1px solid ${theme.pivot}`;
                patShadow = "0 0 10px rgba(255, 209, 102, 0.3)";
                numColor = theme.pivot;
                nameColor = theme.chalkText;
                nameWeight = "bold";
              } else if (isGlowing) {
                patBg = "rgba(255, 209, 102, 0.08)";
                patBorder = "1px solid rgba(255, 209, 102, 0.32)";
                patShadow = "0 0 6px rgba(255, 209, 102, 0.16)";
                numColor = theme.pivot;
                nameColor = theme.chalkText;
                nameWeight = "600";
              }

              return (
                <div
                  key={pat.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "5px 10px",
                    borderRadius: 6,
                    background: patBg,
                    border: patBorder,
                    boxShadow: patShadow,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 12,
                        color: numColor,
                        fontWeight: 700,
                      }}
                    >
                      {pat.numStr}
                    </span>
                    <span
                      style={{
                        fontFamily: fonts.hand,
                        fontSize: 16,
                        color: nameColor,
                        fontWeight: nameWeight,
                      }}
                    >
                      {pat.name}
                    </span>
                  </div>

                  {isActive && (
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 10,
                        padding: "1px 5px",
                        borderRadius: 4,
                        background: theme.pivot,
                        color: theme.boardBg,
                        fontWeight: 800,
                      }}
                    >
                      ACTIVE
                    </span>
                  )}
                  {!isActive && isGlowing && (
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 9,
                        padding: "1px 4px",
                        borderRadius: 3,
                        background: "rgba(255, 209, 102, 0.15)",
                        color: theme.pivot,
                        fontWeight: 700,
                      }}
                    >
                      PATTERN
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ================================================================= */}
        {/* 3. RIGHT GLOBAL PROGRESS RAIL (X: 1815, Y: 140, W: 30, H: 720)   */}
        {/* ================================================================= */}
        <div
          style={{
            position: "absolute",
            left: 1815,
            top: 140,
            width: 30,
            height: 720,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            opacity: surroundingsOpacity,
            zIndex: 15,
          }}
        >
          {/* Top Label 001 */}
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 13,
              color: theme.chalkDim,
              fontWeight: 700,
            }}
          >
            001
          </span>

          {/* Vertical Track */}
          <div
            style={{
              position: "relative",
              width: 4,
              height: 640,
              backgroundColor: "rgba(232, 228, 213, 0.2)",
              borderRadius: 2,
            }}
          >
            {/* Active Position Thumb Indicator */}
            <div
              style={{
                position: "absolute",
                left: -4,
                top: Math.floor((activeGlobalNum / 227) * 600),
                width: 12,
                height: 36,
                backgroundColor: theme.pivot,
                borderRadius: 4,
                boxShadow: `0 0 12px ${theme.pivot}`,
                zIndex: 3,
              }}
            />
          </div>

          {/* Bottom Label 227 */}
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 13,
              color: theme.chalkDim,
              fontWeight: 700,
            }}
          >
            227
          </span>
        </div>

        {/* ================================================================= */}
        {/* 4. PATTERN 01 HEADER & IMMUTABLE PROBLEM ROWS                     */}
        {/* ================================================================= */}
        {/* FAANG INTERVIEW READINESS ARCHITECTURE HUD */}
        {faangPhase && faangPhase !== "none" && dimAmount === 0 && (
          <div
            style={{
              position: "absolute",
              left: 420,
              top: 96,
              width: 1340,
              padding: "10px 20px",
              borderRadius: 10,
              background: "linear-gradient(90deg, rgba(12, 22, 18, 0.96) 0%, rgba(16, 52, 38, 0.94) 100%)",
              border: `1.5px solid ${faangPhase === "faang" ? theme.pivot : theme.cyan}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: `0 8px 24px rgba(0,0,0,0.5), 0 0 20px ${
                faangPhase === "faang" ? "rgba(255, 209, 102, 0.3)" : "rgba(110, 231, 183, 0.25)"
              }`,
              zIndex: 30,
              opacity: Math.min(1, faangProgress * 1.5),
            }}
          >
            {/* Left: Label & Milestone */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 12,
                  fontWeight: 900,
                  letterSpacing: "0.12em",
                  color: faangPhase === "faang" ? theme.pivot : theme.cyan,
                  background:
                    faangPhase === "faang" ? "rgba(255, 209, 102, 0.18)" : "rgba(110, 231, 183, 0.18)",
                  padding: "4px 10px",
                  borderRadius: 6,
                  border: `1px solid ${faangPhase === "faang" ? theme.pivot : theme.cyan}`,
                }}
              >
                INTERVIEW READINESS ARCHITECTURE
              </span>
              <span
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 18,
                  fontWeight: "bold",
                  color: theme.chalkText,
                  letterSpacing: "0.04em",
                }}
              >
                {faangPhase === "fundamentals"
                  ? "Level 1: Core Foundations & Data Structure Primitives"
                  : faangPhase === "faang"
                  ? "Level 2: FAANG Tier-1 Benchmarks (LeetCode High-Frequency)"
                  : "Curated 227 Problems for Serious Tech Interviews"}
              </span>
            </div>

            {/* Right: Company Pills */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {[
                { name: "Meta", color: "#60A5FA", bg: "rgba(96, 165, 250, 0.15)" },
                { name: "Google", color: "#FFD166", bg: "rgba(255, 209, 102, 0.15)" },
                { name: "Amazon", color: "#FBBF24", bg: "rgba(245, 158, 11, 0.15)" },
                { name: "Microsoft", color: "#6EE7B7", bg: "rgba(52, 211, 153, 0.15)" },
                { name: "Apple", color: "#FFFDF7", bg: "rgba(255, 253, 247, 0.12)" },
                { name: "Netflix", color: "#F87171", bg: "rgba(239, 68, 68, 0.15)" },
              ].map((c) => (
                <span
                  key={c.name}
                  style={{
                    padding: "3px 9px",
                    borderRadius: 6,
                    background: c.bg,
                    border: `1px solid ${c.color}`,
                    color: c.color,
                    fontFamily: fonts.mono,
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "0.04em",
                  }}
                >
                  {c.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Pattern Header */}
        <div
          style={{
            position: "absolute",
            left: 420,
            top: 110,
            width: 1340,
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(232, 228, 213, 0.12)",
            paddingBottom: 10,
            opacity: surroundingsOpacity,
            zIndex: 10,
          }}
        >
          <div style={{ position: "relative" }}>
            <span
              style={{
                fontFamily: fonts.hand,
                fontSize: 24,
                fontWeight: "bold",
                color: theme.chalkText,
                letterSpacing: "0.06em",
              }}
            >
              PATTERN 01 · Arrays & Hashing
            </span>
          </div>

          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 14,
              color: theme.cyan,
              letterSpacing: "0.08em",
              fontWeight: 700,
            }}
          >
            {patternCompletedCount} / 18 COMPLETED
          </span>
        </div>

        {/* Problem Rows (001 to 018) */}
        <div
          style={{
            position: "absolute",
            left: 420,
            top: 170,
            width: 1340,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            zIndex: 10,
          }}
        >
          {pattern01.problems.map((prob) => {
            const isCompleted = completedSet.has(prob.globalNum);
            const isActive = prob.globalNum === activeGlobalNum;
            const isUpNext = prob.globalNum === upNextGlobalNum;
            const isSpotlight = prob.globalNum === spotlightRow;
            const isFoundationHighlight = faangPhase === "fundamentals" && prob.globalNum <= 3;
            const isFaangPeakHighlight = faangPhase === "faang" && prob.globalNum === 11;

            // Row Opacity logic
            let rowOpacity = 0.55;
            if (isActive || isSpotlight || isFoundationHighlight || isFaangPeakHighlight) rowOpacity = 1.0;
            else if (isUpNext) rowOpacity = 0.9;
            else if (isCompleted) rowOpacity = 0.75;

            // If handoffFade active and not the hero active row, fade out
            if (handoffFade > 0 && !isActive) {
              rowOpacity = Math.max(0, rowOpacity * (1 - handoffFade));
            }

            let rowBg = "rgba(0, 0, 0, 0.14)";
            let rowBorder = "1px solid rgba(232, 228, 213, 0.08)";
            let rowShadow = "none";

            if (isFaangPeakHighlight) {
              rowBg = "rgba(255, 209, 102, 0.22)";
              rowBorder = `2px solid ${theme.pivot}`;
              rowShadow = `0 0 20px rgba(255, 209, 102, 0.45)`;
            } else if (isFoundationHighlight) {
              rowBg = "rgba(60, 229, 167, 0.18)";
              rowBorder = `1.5px solid ${theme.good}`;
              rowShadow = `0 0 14px rgba(60, 229, 167, 0.3)`;
            } else if (isActive) {
              rowBg = "rgba(255, 209, 102, 0.16)";
              rowBorder = `1.5px solid ${theme.pivot}`;
              rowShadow = `0 0 16px rgba(255, 209, 102, 0.35)`;
            } else if (isUpNext) {
              rowBg = "rgba(96, 165, 250, 0.16)";
              rowBorder = "1.5px solid #60A5FA";
              rowShadow = "0 0 14px rgba(96, 165, 250, 0.3)";
            } else if (isSpotlight) {
              rowBg = "rgba(255, 255, 255, 0.10)";
              rowBorder = `1px solid ${theme.pivot}`;
            }

            return (
              <div
                key={prob.globalNum}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "6px 16px",
                  height: 36,
                  borderRadius: 8,
                  background: rowBg,
                  border: rowBorder,
                  boxShadow: rowShadow,
                  opacity: rowOpacity,
                }}
              >
                {/* Left: Status Icon, Number, Title */}
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  {/* Status Icon */}
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 800,
                      color: isCompleted
                        ? theme.good
                        : isActive
                        ? theme.pivot
                        : isUpNext
                        ? "#60A5FA"
                        : theme.chalkDim,
                      border: `1px solid ${
                        isCompleted
                          ? theme.good
                          : isActive
                          ? theme.pivot
                          : isUpNext
                          ? "#60A5FA"
                          : "rgba(232, 228, 213, 0.3)"
                      }`,
                    }}
                  >
                    {isCompleted ? "✓" : isActive ? "●" : isUpNext ? "▶" : "○"}
                  </div>

                  {/* Problem Number */}
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 14,
                      color: isActive ? theme.pivot : isUpNext ? "#93C5FD" : theme.chalkDim,
                      fontWeight: isActive || isUpNext ? 800 : 500,
                    }}
                  >
                    {String(prob.globalNum).padStart(3, "0")}
                  </span>

                  {/* Problem Title */}
                  <span
                    style={{
                      fontSize: 18,
                      fontFamily: fonts.hand,
                      color: isActive
                        ? theme.chalkText
                        : isCompleted
                        ? theme.chalkText
                        : isUpNext
                        ? "#FFFDF7"
                        : theme.chalkDim,
                      fontWeight: isActive || isCompleted || isUpNext ? "bold" : "normal",
                    }}
                  >
                    {prob.title}
                  </span>

                  {/* Active Subtitle if provided */}
                  {isActive && activeSubtitle && (
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 14,
                        color: theme.cyan,
                        fontWeight: 600,
                        marginLeft: 4,
                      }}
                    >
                      {activeSubtitle}
                    </span>
                  )}
                </div>

                {/* Right: LC Number, Difficulty, Status Badge */}
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  {/* Foundation Tier Tag */}
                  {isFoundationHighlight && (
                    <span
                      style={{
                        padding: "2px 7px",
                        borderRadius: 4,
                        background: "rgba(60, 229, 167, 0.2)",
                        border: `1px solid ${theme.good}`,
                        color: theme.good,
                        fontFamily: fonts.mono,
                        fontSize: 10,
                        fontWeight: 800,
                        letterSpacing: "0.05em",
                      }}
                    >
                      FOUNDATION
                    </span>
                  )}

                  {/* FAANG High-Frequency Target Company Tags */}
                  {shouldShowCompanyTags && activeCompanyTags && activeCompanyTags.length > 0 && prob.globalNum === 11 && (
                    <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
                      {activeCompanyTags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            padding: "2px 7px",
                            borderRadius: 4,
                            background: "rgba(255, 209, 102, 0.18)",
                            border: `1px solid ${theme.pivot}`,
                            color: theme.pivot,
                            fontFamily: fonts.mono,
                            fontSize: 10,
                            fontWeight: 800,
                            letterSpacing: "0.04em",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 13,
                      color: theme.chalkDim,
                    }}
                  >
                    LC {prob.lcNumber}
                  </span>

                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 13,
                      fontWeight: "bold",
                      color:
                        prob.difficulty === "Easy"
                          ? theme.good
                          : prob.difficulty === "Medium"
                          ? theme.pivot
                          : theme.warn,
                    }}
                  >
                    {prob.difficulty}
                  </span>

                  {/* Badges */}
                  {isCompleted && (
                    <div
                      style={{
                        padding: "2px 8px",
                        borderRadius: 10,
                        background: "rgba(60, 229, 167, 0.16)",
                        border: "1px solid rgba(60, 229, 167, 0.5)",
                        color: theme.good,
                        fontFamily: fonts.mono,
                        fontWeight: 800,
                        fontSize: 11,
                      }}
                    >
                      COMPLETE
                    </div>
                  )}

                  {isActive && !isCompleted && (
                    <div
                      style={{
                        padding: "3px 12px",
                        borderRadius: 12,
                        background: theme.pivot,
                        color: theme.boardBg,
                        border: `1px solid ${theme.pivot}`,
                        fontFamily: fonts.mono,
                        fontWeight: 800,
                        fontSize: 12,
                        letterSpacing: "0.06em",
                        boxShadow: `0 0 14px ${theme.pivot}`,
                      }}
                    >
                      {activeBadgeLabel}
                    </div>
                  )}

                  {isUpNext && !isActive && (
                    <div
                      style={{
                        padding: "3px 10px",
                        borderRadius: 10,
                        background: "rgba(96, 165, 250, 0.2)",
                        color: "#93C5FD",
                        border: "1px solid #60A5FA",
                        fontFamily: fonts.mono,
                        fontWeight: 800,
                        fontSize: 11,
                        letterSpacing: "0.06em",
                      }}
                    >
                      UP NEXT
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
