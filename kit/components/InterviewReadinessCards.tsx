import React from "react";
import { interpolate } from "remotion";
import { theme, fonts } from "../lib/theme";
import { EASE } from "../lib/anim";
import { RoughBox } from "./RoughBox";
import { RoughLine } from "./RoughLine";

export interface InterviewReadinessCardsProps {
  /** Current frame in composition */
  frame: number;
}

const FAANG_COMPANIES = [
  { name: "Meta", freq: "Tier-1 High" },
  { name: "Google", freq: "Tier-1 High" },
  { name: "Amazon", freq: "High Freq" },
  { name: "Microsoft", freq: "High Freq" },
  { name: "Apple", freq: "Core" },
  { name: "Netflix", freq: "Core" },
];

export const InterviewReadinessCards: React.FC<InterviewReadinessCardsProps> = ({ frame }) => {
  // Active window: F370 -> F605
  if (frame < 370 || frame >= 605) return null;

  // Entry animation (F370..F395)
  const enterOpacity = interpolate(frame, [370, 395], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });
  const enterY = interpolate(frame, [370, 395], [24, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  // Exit animation (F585..F605)
  const exitOpacity = interpolate(frame, [585, 605], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });
  const exitScale = interpolate(frame, [585, 605], [1, 0.96], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  const totalOpacity = Math.min(enterOpacity, exitOpacity);
  const totalScale = exitScale;

  // Audio Sync Phases:
  // F370..F474: "built for serious interview preparation" (overview)
  // F474..F506: "from fundamentals" (Tier 1 focus)
  // F506..F585: "to FAANG level problem solving" (Tier 2 FAANG focus)
  const isFundamentalsActive = frame >= 474 && frame < 506;
  const isFaangActive = frame >= 506;

  // Dynamic Card Scales
  const tier1Scale = isFundamentalsActive ? 1.02 : 1.0;
  const tier2Scale = isFaangActive ? 1.025 : 1.0;

  // Pipeline bridge fill progress (0 at F474 -> 1 at F530)
  const bridgeProgress = interpolate(frame, [474, 530], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: `translate(-50%, calc(-50% + ${enterY}px)) scale(${totalScale})`,
        width: 1380,
        height: 640,
        zIndex: 25,
        opacity: totalOpacity,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      {/* =================================================================== */}
      {/* 1. TOP HEADER & FAANG TECH COMPANY STRIP (With Chalk Outline)       */}
      {/* =================================================================== */}
      <div
        style={{
          position: "relative",
          width: 1380,
          height: 86,
          borderRadius: 14,
          background: "rgba(10, 24, 18, 0.88)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 28px",
          boxShadow: isFaangActive
            ? "0 0 30px rgba(255, 209, 102, 0.35)"
            : "0 0 20px rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* Authentic Kit Chalk Box Frame */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <RoughBox
            width={1380}
            height={86}
            startFrame={370}
            durationInFrames={18}
            stroke={isFaangActive ? theme.pivot : "rgba(255, 209, 102, 0.5)"}
            strokeWidth={2.5}
            seed={17}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 3, zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 11,
                padding: "2px 8px",
                borderRadius: 4,
                background: "rgba(255, 209, 102, 0.2)",
                border: `1px solid ${theme.pivot}`,
                color: theme.pivot,
                fontWeight: 800,
                letterSpacing: "0.08em",
              }}
            >
              INTERVIEW READINESS ARCHITECTURE
            </span>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 12,
                color: theme.chalkDim,
                letterSpacing: "0.05em",
              }}
            >
              227 CURATED PATTERN CHALLENGES
            </span>
          </div>

          <span
            style={{
              fontFamily: fonts.hand,
              fontSize: 26,
              color: theme.chalkText,
              fontWeight: "bold",
              letterSpacing: "0.04em",
            }}
          >
            Built for Serious Tech Interview Preparation
          </span>
        </div>

        {/* Company Target Badges */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, zIndex: 2 }}>
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 11,
              color: theme.chalkDim,
              marginRight: 4,
              fontWeight: 700,
            }}
          >
            BENCHMARKS:
          </span>
          {FAANG_COMPANIES.map((c) => (
            <div
              key={c.name}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "4px 10px",
                borderRadius: 6,
                background: isFaangActive ? "rgba(255, 209, 102, 0.18)" : "rgba(255, 255, 255, 0.06)",
                border: isFaangActive
                  ? `1px solid ${theme.pivot}`
                  : "1px solid rgba(232, 228, 213, 0.16)",
                color: isFaangActive ? theme.pivot : theme.chalkText,
                fontFamily: fonts.mono,
                fontSize: 12,
                fontWeight: 700,
                boxShadow: isFaangActive ? "0 0 10px rgba(255, 209, 102, 0.25)" : "none",
              }}
            >
              {c.name}
            </div>
          ))}
        </div>
      </div>

      {/* =================================================================== */}
      {/* 2. THE TWO PROGRESSION CARDS (Chalk Boxes from Kit)                  */}
      {/* =================================================================== */}
      <div style={{ display: "flex", gap: 24, height: 440 }}>
        {/* ================================================================= */}
        {/* CARD 1: CORE FUNDAMENTALS (Emerald Chalk Box)                     */}
        {/* ================================================================= */}
        <div
          style={{
            position: "relative",
            flex: 1,
            width: 678,
            height: 440,
            borderRadius: 16,
            background: isFundamentalsActive
              ? "rgba(10, 36, 24, 0.92)"
              : "rgba(10, 24, 18, 0.82)",
            padding: "24px 28px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: isFundamentalsActive
              ? "0 0 35px rgba(60, 229, 167, 0.4)"
              : "0 0 16px rgba(0, 0, 0, 0.4)",
            transform: `scale(${tier1Scale})`,
            backdropFilter: "blur(8px)",
          }}
        >
          {/* Authentic Kit Chalk Box Frame */}
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <RoughBox
              width={678}
              height={440}
              startFrame={375}
              durationInFrames={18}
              stroke={isFundamentalsActive ? theme.good : "rgba(60, 229, 167, 0.45)"}
              strokeWidth={isFundamentalsActive ? 3.5 : 2}
              seed={42}
            />
          </div>

          <div style={{ zIndex: 2 }}>
            {/* Top Tier Label */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 11,
                  padding: "3px 8px",
                  borderRadius: 4,
                  background: "rgba(60, 229, 167, 0.2)",
                  border: `1px solid ${theme.good}`,
                  color: theme.good,
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                }}
              >
                TIER 1 · FOUNDATIONS
              </span>

              {isFundamentalsActive && (
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 10,
                    padding: "2px 6px",
                    borderRadius: 4,
                    background: theme.good,
                    color: theme.boardBg,
                    fontWeight: 800,
                  }}
                >
                  ACTIVE FOCUS
                </span>
              )}
            </div>

            {/* Title */}
            <div style={{ marginTop: 12 }}>
              <div
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 28,
                  fontWeight: "bold",
                  color: theme.chalkText,
                }}
              >
                Core Data Structure Primitives
              </div>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 13,
                  color: theme.good,
                  marginTop: 4,
                  fontWeight: 600,
                }}
              >
                Lookup Tables · Buckets · Invariant Base Cases
              </div>
            </div>

            {/* Included Problems with Kit Chalk Rows */}
            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 14px",
                  borderRadius: 8,
                  background: "rgba(60, 229, 167, 0.08)",
                  border: "1px solid rgba(60, 229, 167, 0.25)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: theme.good, fontWeight: "bold" }}>✓</span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkText, fontWeight: 700 }}>
                    001 Contains Duplicate
                  </span>
                </div>
                <span style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.cyan }}>
                  Hash Set O(N)
                </span>
              </div>

              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 14px",
                  borderRadius: 8,
                  background: "rgba(60, 229, 167, 0.08)",
                  border: "1px solid rgba(60, 229, 167, 0.25)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: theme.good, fontWeight: "bold" }}>✓</span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkText, fontWeight: 700 }}>
                    002 Valid Anagram
                  </span>
                </div>
                <span style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.cyan }}>
                  26-Bucket Array O(N)
                </span>
              </div>

              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 14px",
                  borderRadius: 8,
                  background: "rgba(60, 229, 167, 0.08)",
                  border: "1px solid rgba(60, 229, 167, 0.25)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: theme.good, fontWeight: "bold" }}>✓</span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkText, fontWeight: 700 }}>
                    003 Two Sum
                  </span>
                </div>
                <span style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.cyan }}>
                  Complement Map O(N)
                </span>
              </div>
            </div>
          </div>

          {/* Footer Metric with Kit RoughLine Divider */}
          <div style={{ position: "relative", zIndex: 2 }}>
            <div style={{ marginBottom: 12 }}>
              <RoughLine
                shape={{ kind: "line", x1: 0, y1: 0, x2: 620, y2: 0 }}
                width={622}
                height={4}
                startFrame={380}
                durationInFrames={15}
                stroke="rgba(60, 229, 167, 0.3)"
                strokeWidth={1.5}
                seed={301}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.good, fontWeight: 700 }}>
                10 / 10 FOUNDATIONS COMPLETED
              </span>
              <span style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.chalkDim }}>
                Course Benchmark 100% Solid
              </span>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* CARD 2: FAANG & COMPETITIVE BENCHMARKS (Golden Chalk Box)         */}
        {/* ================================================================= */}
        <div
          style={{
            position: "relative",
            flex: 1,
            width: 678,
            height: 440,
            borderRadius: 16,
            background: isFaangActive
              ? "rgba(34, 30, 10, 0.94)"
              : "rgba(10, 24, 18, 0.82)",
            padding: "24px 28px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: isFaangActive
              ? "0 0 40px rgba(255, 209, 102, 0.45)"
              : "0 0 16px rgba(0, 0, 0, 0.4)",
            transform: `scale(${tier2Scale})`,
            backdropFilter: "blur(8px)",
          }}
        >
          {/* Authentic Kit Chalk Box Frame */}
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <RoughBox
              width={678}
              height={440}
              startFrame={380}
              durationInFrames={18}
              stroke={isFaangActive ? theme.pivot : "rgba(255, 209, 102, 0.45)"}
              strokeWidth={isFaangActive ? 3.5 : 2}
              seed={88}
            />
          </div>

          <div style={{ zIndex: 2 }}>
            {/* Top Tier Label */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 11,
                  padding: "3px 8px",
                  borderRadius: 4,
                  background: "rgba(255, 209, 102, 0.22)",
                  border: `1px solid ${theme.pivot}`,
                  color: theme.pivot,
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                }}
              >
                TIER 2 · FAANG BENCHMARKS
              </span>

              {isFaangActive && (
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 10,
                    padding: "2px 6px",
                    borderRadius: 4,
                    background: theme.pivot,
                    color: theme.boardBg,
                    fontWeight: 800,
                  }}
                >
                  TARGET BENCHMARK
                </span>
              )}
            </div>

            {/* Title */}
            <div style={{ marginTop: 12 }}>
              <div
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 28,
                  fontWeight: "bold",
                  color: theme.chalkText,
                }}
              >
                Competitive Problem Solving
              </div>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 13,
                  color: theme.pivot,
                  marginTop: 4,
                  fontWeight: 600,
                }}
              >
                Three-Way Partition · In-Place Zero-Allocation · Hard Invariants
              </div>
            </div>

            {/* Spotlight Target Problem with Kit Chalk Box */}
            <div
              style={{
                position: "relative",
                marginTop: 18,
                padding: "16px",
                borderRadius: 10,
                background: "rgba(255, 209, 102, 0.12)",
                boxShadow: "0 0 16px rgba(255, 209, 102, 0.25)",
              }}
            >
              {/* Inner Chalk Outline for Target Problem */}
              <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                <RoughBox
                  width={622}
                  height={136}
                  startFrame={390}
                  durationInFrames={16}
                  stroke={theme.pivot}
                  strokeWidth={2}
                  seed={111}
                />
              </div>

              <div style={{ position: "relative", zIndex: 2 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 14,
                        color: theme.pivot,
                        fontWeight: 800,
                      }}
                    >
                      011 Sort Colors
                    </span>
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 11,
                        padding: "1px 6px",
                        borderRadius: 4,
                        background: "rgba(255, 209, 102, 0.25)",
                        color: theme.pivot,
                        fontWeight: 700,
                      }}
                    >
                      LC 75 MEDIUM
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 11,
                      color: theme.cyan,
                      fontWeight: 700,
                    }}
                  >
                    DUTCH NATIONAL FLAG
                  </span>
                </div>

                {/* Invariant Rule Breakdown */}
                <div
                  style={{
                    marginTop: 10,
                    padding: "8px 10px",
                    borderRadius: 6,
                    background: "rgba(0, 0, 0, 0.4)",
                    border: "1px solid rgba(255, 209, 102, 0.25)",
                    fontFamily: fonts.mono,
                    fontSize: 12,
                    color: theme.chalkText,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>[0 .. low-1] = 0</span>
                  <span style={{ color: theme.chalkDim }}>|</span>
                  <span>[low .. mid-1] = 1</span>
                  <span style={{ color: theme.chalkDim }}>|</span>
                  <span>[high+1 .. N-1] = 2</span>
                </div>

                {/* Strict Interview Constraints */}
                <div
                  style={{
                    marginTop: 10,
                    display: "flex",
                    gap: 12,
                    fontFamily: fonts.mono,
                    fontSize: 11,
                    color: theme.chalkDim,
                  }}
                >
                  <span>⚡ Single Pass O(N)</span>
                  <span>⚡ In-Place O(1) Space</span>
                  <span>⚡ Zero Built-in Sort</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Metric with Kit RoughLine Divider */}
          <div style={{ position: "relative", zIndex: 2 }}>
            <div style={{ marginBottom: 12 }}>
              <RoughLine
                shape={{ kind: "line", x1: 0, y1: 0, x2: 620, y2: 0 }}
                width={622}
                height={4}
                startFrame={385}
                durationInFrames={15}
                stroke="rgba(255, 209, 102, 0.3)"
                strokeWidth={1.5}
                seed={505}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.pivot, fontWeight: 700 }}>
                HIGH FREQUENCY INTERVIEW QUESTION
              </span>
              <span style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.chalkDim }}>
                Meta · Amazon · Microsoft
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 3. BOTTOM PROGRESSION BRIDGE (Chalk Box & Rough Arrow from Kit)     */}
      {/* =================================================================== */}
      <div
        style={{
          position: "relative",
          width: 1380,
          height: 54,
          borderRadius: 10,
          background: "rgba(10, 24, 18, 0.88)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          backdropFilter: "blur(6px)",
        }}
      >
        {/* Kit Chalk Box Frame */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <RoughBox
            width={1380}
            height={54}
            startFrame={385}
            durationInFrames={16}
            stroke="rgba(232, 228, 213, 0.3)"
            strokeWidth={1.8}
            seed={99}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14, zIndex: 2 }}>
          <span style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.good, fontWeight: 700 }}>
            FOUNDATIONS (001–010)
          </span>

          {/* Kit RoughLine Arrow */}
          <div style={{ width: 90, height: 20, display: "flex", alignItems: "center" }}>
            <RoughLine
              shape={{ kind: "arrow", x1: 5, y1: 10, x2: 80, y2: 10 }}
              width={90}
              height={20}
              startFrame={474}
              durationInFrames={24}
              stroke={isFaangActive ? theme.pivot : theme.good}
              strokeWidth={2.2}
              seed={55}
            />
          </div>

          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 12,
              color: isFaangActive ? theme.pivot : theme.chalkDim,
              fontWeight: 700,
            }}
          >
            FAANG LEVEL (011 SORT COLORS)
          </span>
        </div>

        {/* Dynamic visual progress bar */}
        <div
          style={{
            width: 380,
            height: 8,
            borderRadius: 4,
            background: "rgba(255, 255, 255, 0.08)",
            overflow: "hidden",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: `${Math.round(bridgeProgress * 100)}%`,
              background: `linear-gradient(90deg, ${theme.good} 0%, ${theme.pivot} 100%)`,
              boxShadow: "0 0 10px rgba(255, 209, 102, 0.5)",
            }}
          />
        </div>
      </div>
    </div>
  );
};
