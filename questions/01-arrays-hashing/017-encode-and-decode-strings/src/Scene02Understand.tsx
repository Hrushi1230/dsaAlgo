/**
 * Scene02Understand.tsx — Scene 02 · Understand the Problem + Delimiter Failure
 * Encode and Decode Strings (LeetCode 271) · Pattern 01 — Arrays & Hashing
 *
 * Board-Native Architecture (per Q016 Gold Standard):
 * - ZERO dark cards, ZERO opaque dashboard containers.
 * - Upper-stage: Master input list in transparent chalk slots.
 * - Mid-stage: Candidate List A vs Candidate List B in rough chalk outlines.
 * - Convergence: "a # b # c" collision proof in rough warning chalk box.
 * - Lower-stage: Dual takeaway panels (Ambiguity dilemma + Explicit boundary requirement).
 * - Total Duration: 1224 frames @ 30fps (40.8s) strictly from sync/02-understand.json
 */

import React, { useMemo } from "react";
import {
  Audio,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme, fonts } from "../../../../kit/lib/theme";
import { EASE } from "../../../../kit/lib/anim";
import { ChalkDust } from "../../../../kit/components/ChalkDust";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { RoughBox } from "../../../../kit/components/RoughBox";
import { RoughLine } from "../../../../kit/components/RoughLine";
import { BoardHeader } from "./BoardHeader";
import syncData from "../sync/02-understand.json";

const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

export const Scene02Understand: React.FC = () => {
  const frame = useCurrentFrame();

  // Master strings reveals (F0–F306)
  const masterHeaderOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const str0Reveal = interpolate(frame, [86, 102], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const str1Reveal = interpolate(frame, [127, 143], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const str2Reveal = interpolate(frame, [173, 189], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const str3Reveal = interpolate(frame, [215, 231], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });

  // Naive hypothesis reveal (F306–F423)
  const hypothesisReveal = interpolate(frame, [306, 328], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });

  // Collision demonstration (F423–F908)
  const comparisonContainerReveal = interpolate(frame, [423, 445], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const candidateAReveal = interpolate(frame, [561, 585], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const candidateBReveal = interpolate(frame, [675, 700], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const convergenceArrowsProgress = interpolate(frame, [736, 765], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const collisionOutputReveal = interpolate(frame, [822, 845], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });

  // Decoder boundary dilemma (F908–F1070)
  const dilemmaReveal = interpolate(frame, [908, 930], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const itCannotReveal = interpolate(frame, [1016, 1032], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });

  // Hypothesis strike-through & takeaway (F1070–F1224)
  const strikeProgress = interpolate(frame, [1070, 1095], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const takeawayReveal = interpolate(frame, [1148, 1170], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        position: "relative",
        backgroundColor: theme.boardBg,
        overflow: "hidden",
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      {/* Chalk bursts on critical reveals */}
      {frame >= 1016 && frame < 1045 && (
        <ChalkDust x={960} y={630} start={1016} color={theme.warn} count={16} />
      )}
      {frame >= 1148 && frame < 1180 && (
        <ChalkDust x={1400} y={790} start={1148} color={theme.good} count={20} />
      )}

      <Audio src={staticFile("audio/017/02-understand.mp3")} />

      {/* =====================================================================
          1. HEADER (Y: 32 .. 80) — Board-Native
          ===================================================================== */}
      <BoardHeader
        title="UNDERSTAND THE PROBLEM"
        badge="DELIMITER AMBIGUITY"
        badgeColor={theme.warn}
        seed={17}
      />

      {/* =====================================================================
          2. MASTER INPUT STRINGS (Y: 110 .. 220) — Direct Chalk Slots
          ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 105,
          left: 100,
          right: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          opacity: masterHeaderOpacity,
        }}
      >
        <div
          style={{
            fontFamily: fonts.hand,
            fontSize: 20,
            color: "rgba(255,255,255,0.7)",
            marginBottom: 8,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <span>Example Input List:</span>
          <span style={{ color: theme.cyan, fontFamily: fonts.mono, fontSize: 18, fontWeight: 700 }}>
            strs: List[str]
          </span>
          <span style={{ color: theme.pivot, fontFamily: fonts.mono, fontSize: 17 }}>(4 elements)</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* Slot 0: "a#b" */}
          <div
            style={{
              opacity: str0Reveal,
              transform: `scale(${interpolate(str0Reveal, [0, 1], [0.85, 1])})`,
              padding: "8px 22px",
              border: `2px solid ${theme.cyan}`,
              borderRadius: 6,
              fontFamily: fonts.mono,
              fontSize: 24,
              color: theme.cyan,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>[0]</span>
            <span>"a</span>
            <span
              style={{
                color: theme.warn,
                fontWeight: 700,
                border: `1.5px solid ${theme.warn}`,
                padding: "0 6px",
                borderRadius: 4,
              }}
            >
              #
            </span>
            <span>b"</span>
          </div>

          {/* Slot 1: "" (empty) */}
          <div
            style={{
              opacity: str1Reveal,
              transform: `scale(${interpolate(str1Reveal, [0, 1], [0.85, 1])})`,
              padding: "8px 22px",
              border: `2px solid ${theme.cyan}`,
              borderRadius: 6,
              fontFamily: fonts.mono,
              fontSize: 24,
              color: theme.cyan,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>[1]</span>
            <span>""</span>
            <span style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", fontStyle: "italic" }}>(empty)</span>
          </div>

          {/* Slot 2: "hello world" */}
          <div
            style={{
              opacity: str2Reveal,
              transform: `scale(${interpolate(str2Reveal, [0, 1], [0.85, 1])})`,
              padding: "8px 22px",
              border: `2px solid ${theme.cyan}`,
              borderRadius: 6,
              fontFamily: fonts.mono,
              fontSize: 24,
              color: theme.cyan,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>[2]</span>
            <span>"hello world"</span>
          </div>

          {/* Slot 3: "42" */}
          <div
            style={{
              opacity: str3Reveal,
              transform: `scale(${interpolate(str3Reveal, [0, 1], [0.85, 1])})`,
              padding: "8px 22px",
              border: `2px solid ${theme.cyan}`,
              borderRadius: 6,
              fontFamily: fonts.mono,
              fontSize: 24,
              color: theme.cyan,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>[3]</span>
            <span>"42"</span>
          </div>
        </div>
      </div>

      {/* =====================================================================
          3. NAIVE HYPOTHESIS BANNER (Y: 235 .. 285)
          ===================================================================== */}
      {hypothesisReveal > 0 && (
        <div
          style={{
            position: "absolute",
            top: 235,
            left: 0,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            opacity: hypothesisReveal,
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "6px 28px",
              fontFamily: fonts.hand,
              fontSize: 22,
              color: strikeProgress > 0 ? "rgba(255,255,255,0.4)" : theme.pivot,
            }}
          >
            <span style={{ fontWeight: 700 }}>Naive Hypothesis:</span>
            <span>Join elements using single delimiter</span>
            <span
              style={{
                fontFamily: fonts.mono,
                fontWeight: 800,
                fontSize: 24,
                color: strikeProgress > 0 ? theme.warn : theme.accent,
                border: `2px solid ${strikeProgress > 0 ? theme.warn : theme.accent}`,
                padding: "0 10px",
                borderRadius: 4,
              }}
            >
              '#'
            </span>

            {/* Dynamic strike-through line */}
            {strikeProgress > 0 && (
              <svg
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none",
                }}
              >
                <line
                  x1="2%"
                  y1="50%"
                  x2={`${interpolate(strikeProgress, [0, 1], [2, 98])}%`}
                  y2="50%"
                  stroke={theme.warn}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
        </div>
      )}

      {/* =====================================================================
          4. THE COLLISION COMPARISON (Y: 310 .. 680) — Board-Native
          ===================================================================== */}
      {comparisonContainerReveal > 0 && (
        <div
          style={{
            position: "absolute",
            top: 300,
            left: 0,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: comparisonContainerReveal,
          }}
        >
          <div
            style={{
              fontFamily: fonts.hand,
              fontSize: 23,
              color: theme.chalkText,
              marginBottom: 16,
              letterSpacing: 1,
            }}
          >
            Suppose Two Completely Different Inputs:
          </div>

          {/* TWO CANDIDATE LISTS */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 120,
              width: 1400,
            }}
          >
            {/* CANDIDATE A: ["a#b", "c"] */}
            <div
              style={{
                opacity: candidateAReveal,
                transform: `translateY(${interpolate(candidateAReveal, [0, 1], [15, 0])}px)`,
                width: 520,
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "16px 20px",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0 }}>
                <RoughBox width={520} height={120} stroke={theme.cyan} strokeWidth={2} roughness={1.2} seed={21} />
              </div>
              <div
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 19,
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: 12,
                  zIndex: 1,
                }}
              >
                Input List A &bull; <span style={{ color: theme.cyan, fontWeight: 700 }}>2 Elements</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16, zIndex: 1 }}>
                <div
                  style={{
                    padding: "6px 16px",
                    border: `1.5px solid ${theme.cyan}`,
                    borderRadius: 6,
                    fontFamily: fonts.mono,
                    fontSize: 24,
                    color: theme.cyan,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span>"a</span>
                  <span style={{ color: theme.warn, fontWeight: 800, padding: "0 2px" }}>#</span>
                  <span>b"</span>
                  <span style={{ fontSize: 13, color: theme.warn, marginLeft: 8 }}>(payload)</span>
                </div>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 24 }}>,</span>
                <div
                  style={{
                    padding: "6px 16px",
                    border: `1.5px solid ${theme.cyan}`,
                    borderRadius: 6,
                    fontFamily: fonts.mono,
                    fontSize: 24,
                    color: theme.cyan,
                  }}
                >
                  "c"
                </div>
              </div>
            </div>

            {/* CANDIDATE B: ["a", "b", "c"] */}
            <div
              style={{
                opacity: candidateBReveal,
                transform: `translateY(${interpolate(candidateBReveal, [0, 1], [15, 0])}px)`,
                width: 520,
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "16px 20px",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0 }}>
                <RoughBox width={520} height={120} stroke={theme.pivot} strokeWidth={2} roughness={1.2} seed={22} />
              </div>
              <div
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 19,
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: 12,
                  zIndex: 1,
                }}
              >
                Input List B &bull; <span style={{ color: theme.pivot, fontWeight: 700 }}>3 Elements</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 14, zIndex: 1 }}>
                <div
                  style={{
                    padding: "6px 16px",
                    border: `1.5px solid ${theme.pivot}`,
                    borderRadius: 6,
                    fontFamily: fonts.mono,
                    fontSize: 24,
                    color: theme.pivot,
                  }}
                >
                  "a"
                </div>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 24 }}>,</span>
                <div
                  style={{
                    padding: "6px 16px",
                    border: `1.5px solid ${theme.pivot}`,
                    borderRadius: 6,
                    fontFamily: fonts.mono,
                    fontSize: 24,
                    color: theme.pivot,
                  }}
                >
                  "b"
                </div>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 24 }}>,</span>
                <div
                  style={{
                    padding: "6px 16px",
                    border: `1.5px solid ${theme.pivot}`,
                    borderRadius: 6,
                    fontFamily: fonts.mono,
                    fontSize: 24,
                    color: theme.pivot,
                  }}
                >
                  "c"
                </div>
              </div>
            </div>
          </div>

          {/* CONVERGENCE ARROWS */}
          <div
            style={{
              width: 1400,
              height: 56,
              position: "relative",
              opacity: convergenceArrowsProgress,
              marginTop: 10,
            }}
          >
            <svg width="100%" height="100%" viewBox="0 0 1400 56">
              <path
                d="M 440 6 Q 560 50 670 50"
                fill="none"
                stroke={theme.cyan}
                strokeWidth="2.8"
                strokeDasharray="6 4"
              />
              <polygon points="672,45 684,50 672,55" fill={theme.cyan} />

              <path
                d="M 960 6 Q 840 50 730 50"
                fill="none"
                stroke={theme.pivot}
                strokeWidth="2.8"
                strokeDasharray="6 4"
              />
              <polygon points="728,45 716,50 728,55" fill={theme.pivot} />
            </svg>
          </div>

          {/* RESULTING IDENTICAL ENCODED STRING */}
          {collisionOutputReveal > 0 && (
            <div
              style={{
                opacity: collisionOutputReveal,
                transform: `scale(${interpolate(collisionOutputReveal, [0, 1], [0.94, 1])})`,
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "16px 48px",
                width: 660,
                marginTop: 6,
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0 }}>
                <RoughBox width={660} height={100} stroke={theme.warn} strokeWidth={2.4} roughness={1.3} seed={23} />
              </div>

              <div
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 18,
                  color: theme.warn,
                  fontWeight: 700,
                  letterSpacing: 2,
                  marginBottom: 6,
                  textTransform: "uppercase",
                  zIndex: 1,
                }}
              >
                Both produce the IDENTICAL Joined String:
              </div>

              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 38,
                  color: theme.chalkText,
                  fontWeight: 800,
                  letterSpacing: 6,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  zIndex: 1,
                }}
              >
                <span>a</span>
                <span
                  style={{
                    color: dilemmaReveal > 0 ? theme.warn : theme.accent,
                    border: dilemmaReveal > 0 ? `2px solid ${theme.warn}` : "none",
                    padding: "0 6px",
                    borderRadius: 4,
                  }}
                >
                  #
                </span>
                <span>b</span>
                <span
                  style={{
                    color: dilemmaReveal > 0 ? theme.warn : theme.accent,
                    border: dilemmaReveal > 0 ? `2px solid ${theme.warn}` : "none",
                    padding: "0 6px",
                    borderRadius: 4,
                  }}
                >
                  #
                </span>
                <span>c</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* =====================================================================
          5. LOWER BOARD: RESOLUTION & TAKEAWAYS (Y: 710 .. 880)
          ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 710,
          left: 100,
          right: 100,
          height: 180,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
        }}
      >
        {/* Left Takeaway: Decoder Dilemma */}
        {dilemmaReveal > 0 && (
          <div
            style={{
              opacity: dilemmaReveal,
              position: "relative",
              padding: "18px 28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0 }}>
              <RoughBox width={800} height={140} stroke={theme.warn} strokeWidth={2} roughness={1.2} seed={24} />
            </div>
            <div
              style={{
                fontFamily: fonts.hand,
                fontSize: 24,
                color: theme.warn,
                fontWeight: 700,
                marginBottom: 8,
                zIndex: 1,
              }}
            >
              Boundary Ambiguity: Which '#' is delimiter vs payload data?
            </div>
            {itCannotReveal > 0 && (
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 22,
                  color: theme.warn,
                  fontWeight: 900,
                  letterSpacing: 1,
                  zIndex: 1,
                }}
              >
                ✕ IT CANNOT. INFORMATION IS LOST.
              </div>
            )}
          </div>
        )}

        {/* Right Takeaway: Solution Requirement */}
        {takeawayReveal > 0 && (
          <div
            style={{
              opacity: takeawayReveal,
              position: "relative",
              padding: "18px 28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0 }}>
              <RoughBox width={800} height={140} stroke={theme.good} strokeWidth={2.4} roughness={1.2} seed={25} />
            </div>
            <div
              style={{
                fontFamily: fonts.hand,
                fontSize: 24,
                color: theme.good,
                fontWeight: 800,
                marginBottom: 6,
                zIndex: 1,
              }}
            >
              ✓ SOLUTION REQUIREMENT:
            </div>
            <div
              style={{
                fontFamily: fonts.display,
                fontSize: 24,
                color: theme.chalkText,
                lineHeight: 1.3,
                zIndex: 1,
              }}
            >
              We must encode explicit length metadata before every string!
            </div>
          </div>
        )}
      </div>

      {/* FIXED WORD-SYNC CAPTIONS SAFE ZONE (Y: 960..1040) */}
      <Captions words={captionWords} />
    </div>
  );
};
