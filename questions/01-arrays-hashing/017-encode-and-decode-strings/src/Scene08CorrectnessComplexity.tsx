/**
 * Scene08CorrectnessComplexity.tsx — Scene 08 · Correctness & Complexity Derivation
 * Encode and Decode Strings (LeetCode 271) · Pattern 01 — Arrays & Hashing
 *
 * Implements board-native invariant proof & linear complexity derivation:
 * - Phase 1 (F0..F208): Why does this work?
 *   - The Delimiter Invariant: payload does not decide its own boundary
 *   - Visual inspection of payload '#' vs header '#' on testcase chunk "3#a#b"
 *   - Stored length is the sole boundary authority
 * - Phase 2 (F208..F474): Parameter Definitions
 *   - C = total payload characters
 *   - N = number of strings
 * - Phase 3 (F474..F751): Encode Work & Time Complexity: O(C + N)
 * - Phase 4 (F751..F1003): Decode Work & Time Complexity: O(C + N) single forward pass
 * - Phase 5 (F1003..F1153): Constructed Output Space: O(C + N)
 *
 * Total Duration: 1153 frames @ 30fps (38.42s) strictly from sync/08-correctness-complexity.json
 */

import React, { useMemo } from "react";
import {
  Audio,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme as baseTheme, fonts } from "../../../../kit/lib/theme";
import { EASE } from "../../../../kit/lib/anim";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { ChalkDust } from "../../../../kit/components/ChalkDust";
import { RoughBox } from "../../../../kit/components/RoughBox";
import { BoardHeader } from "./BoardHeader";
import syncData from "../sync/08-correctness-complexity.json";

const theme = {
  ...baseTheme,
  gold: baseTheme.pivot,
  chalkSub: baseTheme.chalkDim,
  chalkBorder: baseTheme.cardBorder,
};

// Caption words strictly from sync JSON
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

export const Scene08CorrectnessComplexity: React.FC = () => {
  const frame = useCurrentFrame();

  // Camera engine
  const { camScale, camY } = useMemo(() => {
    if (frame < 208) {
      const s = interpolate(frame, [0, 24], [1.008, 1.0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: s, camY: 0 };
    }
    if (frame >= 208 && frame < 751) {
      const s = interpolate(frame, [208, 240], [1.0, 1.006], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const y = interpolate(frame, [208, 240], [0, -6], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: s, camY: y };
    }
    return { camScale: 1.0, camY: 0 };
  }, [frame]);

  // Audio-synchronized beats
  const beat1Reveal = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  const beat2PayloadReveal = interpolate(frame, [46, 75], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  const beat3LengthAuthorityReveal = interpolate(frame, [154, 175], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  // Phase transition (F208): Fade out correctness hero, reveal complexity stage
  const correctnessPhaseOpacity = interpolate(frame, [208, 235], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  const complexityPhaseOpacity = interpolate(frame, [215, 245], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  // Parameter definitions
  const cDefReveal = interpolate(frame, [271, 300], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  const nDefReveal = interpolate(frame, [359, 390], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  // Encode time
  const encodeWorkReveal = interpolate(frame, [474, 510], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  const encodeTimePromptReveal = interpolate(frame, [613, 635], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  const encodeTimeBadgeReveal = interpolate(frame, [670, 695], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  // Decode time
  const decodeWorkReveal = interpolate(frame, [751, 785], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  const decodeTimePromptReveal = interpolate(frame, [901, 920], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  const decodeTimeBadgeReveal = interpolate(frame, [939, 965], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  // Output space
  const spaceWorkReveal = interpolate(frame, [1003, 1030], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  const spaceBadgeReveal = interpolate(frame, [1076, 1100], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

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

      {/* Chalk dust burst on key mathematical milestones */}
      {frame >= 154 && frame < 185 && (
        <ChalkDust x={960} y={380} start={154} color={theme.pivot} count={22} />
      )}
      {frame >= 670 && frame < 700 && (
        <ChalkDust x={410} y={720} start={670} color={theme.good} count={24} />
      )}
      {frame >= 939 && frame < 970 && (
        <ChalkDust x={960} y={720} start={939} color={theme.good} count={24} />
      )}
      {frame >= 1076 && frame < 1110 && (
        <ChalkDust x={1510} y={720} start={1076} color={theme.good} count={24} />
      )}

      <Audio src={staticFile("audio/017/08-correctness-complexity.mp3")} />

      {/* CAMERA TRANSFORM CONTAINER */}
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          transform: `scale(${camScale}) translateY(${camY}px)`,
          transformOrigin: "center center",
        }}
      >
        {/* =========================================================================
            1. CANONICAL BOARD HEADER
            ========================================================================= */}
        <BoardHeader
          title="CORRECTNESS & COMPLEXITY DERIVATION"
          badge="LINEAR WORK INVARIANT"
          badgeColor={theme.pivot}
          seed={81}
        />

        {/* =========================================================================
            2. PHASE 1: THE DELIMITER INVARIANT (F0 .. F208)
            ========================================================================= */}
        {correctnessPhaseOpacity > 0 && (
          <div
            style={{
              position: "absolute",
              top: 110,
              left: 90,
              right: 90,
              height: 770,
              opacity: correctnessPhaseOpacity,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* HERO QUESTION (A001: "Why does this work?") */}
            <div
              style={{
                opacity: beat1Reveal,
                transform: `scale(${interpolate(beat1Reveal, [0, 1], [0.94, 1])})`,
                fontFamily: fonts.hand,
                fontSize: 46,
                fontWeight: 700,
                color: theme.pivot,
                marginTop: 18,
                marginBottom: 24,
                textShadow: "0 0 16px rgba(255, 209, 102, 0.25)",
              }}
            >
              Why does this protocol work losslessly?
            </div>

            {/* VISUAL TESTCASE HERO: "3#a#b" in RoughBox outline */}
            <div
              style={{
                position: "relative",
                width: 1200,
                height: 480,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "26px 40px",
                marginBottom: 24,
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
                <RoughBox
                  width={1200}
                  height={480}
                  stroke={theme.cyan}
                  strokeWidth={2}
                  roughness={1.2}
                  seed={82}
                />
              </div>

              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 18,
                  color: theme.chalkSub,
                  marginBottom: 22,
                  zIndex: 1,
                }}
              >
                Inspection Case: Encoded record for string <span style={{ color: theme.cyan, fontWeight: 700 }}>"a#b"</span>
              </div>

              {/* Character Tape */}
              <div style={{ display: "flex", gap: 16, marginBottom: 28, zIndex: 1 }}>
                {[
                  { idx: 0, ch: "3", role: "HEADER LENGTH", color: theme.pivot, isHeader: true },
                  { idx: 1, ch: "#", role: "DELIMITER", color: theme.pivot, isHeader: true },
                  { idx: 2, ch: "a", role: "PAYLOAD [0]", color: theme.chalkText, isHeader: false },
                  { idx: 3, ch: "#", role: "PAYLOAD [1]", color: theme.warn, isHeader: false, isInternalHash: true },
                  { idx: 4, ch: "b", role: "PAYLOAD [2]", color: theme.chalkText, isHeader: false },
                ].map((item) => {
                  const isHighlightInternal = item.isInternalHash && beat2PayloadReveal > 0;
                  const isHighlightHeader = item.isHeader && beat3LengthAuthorityReveal > 0;

                  return (
                    <div
                      key={item.idx}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: 130,
                      }}
                    >
                      {/* Character Box */}
                      <div
                        style={{
                          width: 110,
                          height: 110,
                          borderRadius: 12,
                          border: `2px solid ${
                            isHighlightInternal
                              ? theme.warn
                              : isHighlightHeader
                              ? theme.pivot
                              : "rgba(248, 246, 240, 0.3)"
                          }`,
                          backgroundColor: isHighlightInternal
                            ? "rgba(255, 118, 117, 0.2)"
                            : isHighlightHeader
                            ? "rgba(255, 209, 102, 0.18)"
                            : "transparent",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: fonts.mono,
                          fontSize: 48,
                          fontWeight: 700,
                          color: item.color,
                        }}
                      >
                        {item.ch}
                      </div>

                      {/* Index Label */}
                      <div
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 16,
                          color: theme.chalkSub,
                          marginTop: 8,
                        }}
                      >
                        idx [{item.idx}]
                      </div>

                      {/* Role Label */}
                      <div
                        style={{
                          fontFamily: fonts.hand,
                          fontSize: 15,
                          color: item.color,
                          marginTop: 4,
                          textAlign: "center",
                          fontWeight: 600,
                        }}
                      >
                        {item.role}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Explanatory Callouts */}
              <div
                style={{
                  display: "flex",
                  gap: 32,
                  width: "100%",
                  marginTop: 8,
                  borderTop: "1px dashed rgba(248, 246, 240, 0.18)",
                  paddingTop: 20,
                  zIndex: 1,
                }}
              >
                {/* Delimiter Denied (A002) */}
                <div
                  style={{
                    flex: 1,
                    opacity: beat2PayloadReveal,
                    transform: `translateY(${interpolate(beat2PayloadReveal, [0, 1], [15, 0])}px)`,
                    padding: "16px 22px",
                    borderRadius: 10,
                    border: `1.5px solid ${theme.warn}`,
                    backgroundColor: "rgba(255, 118, 117, 0.12)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: fonts.hand,
                      fontSize: 20,
                      fontWeight: 700,
                      color: theme.warn,
                      marginBottom: 6,
                    }}
                  >
                    ✗ Delimiter Authority Denied:
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 15,
                      color: theme.chalkText,
                      lineHeight: 1.5,
                    }}
                  >
                    Index [3] <span style={{ color: theme.warn, fontWeight: 700 }}>'#'</span> is payload data. The decoder does NOT scan for delimiters inside payload!
                  </div>
                </div>

                {/* Stored Length Authority (A003) */}
                <div
                  style={{
                    flex: 1,
                    opacity: beat3LengthAuthorityReveal,
                    transform: `translateY(${interpolate(beat3LengthAuthorityReveal, [0, 1], [15, 0])}px)`,
                    padding: "16px 22px",
                    borderRadius: 10,
                    border: `1.5px solid ${theme.pivot}`,
                    backgroundColor: "rgba(255, 209, 102, 0.12)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: fonts.hand,
                      fontSize: 20,
                      fontWeight: 700,
                      color: theme.pivot,
                      marginBottom: 6,
                    }}
                  >
                    ✓ Stored Length Dictates Boundary:
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 15,
                      color: theme.chalkText,
                      lineHeight: 1.5,
                    }}
                  >
                    Header length <span style={{ color: theme.pivot, fontWeight: 700 }}>3</span> commands: read exactly 3 characters from start: <span style={{ color: theme.good, fontWeight: 700 }}>[2 : 5)</span>.
                  </div>
                </div>
              </div>
            </div>

            {/* Core Invariant Banner */}
            <div
              style={{
                opacity: beat3LengthAuthorityReveal,
                fontFamily: fonts.hand,
                fontSize: 28,
                color: theme.good,
                letterSpacing: 1,
                textAlign: "center",
              }}
            >
              Invariant: Payload content never decides slice boundaries &mdash; only the explicit metadata does.
            </div>
          </div>
        )}

        {/* =========================================================================
            3. PHASE 2: COMPLEXITY DERIVATION (F208 .. F1153)
            ========================================================================= */}
        {complexityPhaseOpacity > 0 && (
          <div
            style={{
              position: "absolute",
              top: 110,
              left: 70,
              right: 70,
              height: 770,
              opacity: complexityPhaseOpacity,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* PARAMETER DEFINITIONS ROW (F271..F474) */}
            <div
              style={{
                display: "flex",
                gap: 28,
                marginBottom: 20,
              }}
            >
              {/* Definition C */}
              <div
                style={{
                  flex: 1,
                  position: "relative",
                  opacity: cDefReveal,
                  transform: `translateY(${interpolate(cDefReveal, [0, 1], [18, 0])}px)`,
                  padding: "16px 26px",
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  height: 115,
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
                  <RoughBox
                    width={876}
                    height={115}
                    stroke={theme.cyan}
                    strokeWidth={1.8}
                    roughness={1.1}
                    seed={83}
                  />
                </div>

                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 52,
                    fontWeight: 700,
                    color: theme.cyan,
                    width: 60,
                    textAlign: "center",
                    zIndex: 1,
                  }}
                >
                  C
                </div>
                <div style={{ zIndex: 1 }}>
                  <div
                    style={{
                      fontFamily: fonts.hand,
                      fontSize: 24,
                      fontWeight: 700,
                      color: theme.chalkText,
                    }}
                  >
                    Total Payload Characters
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 16,
                      color: theme.chalkSub,
                      marginTop: 2,
                    }}
                  >
                    C = &sum; len(s) across all input strings &mdash; the actual raw content size
                  </div>
                </div>
              </div>

              {/* Definition N */}
              <div
                style={{
                  flex: 1,
                  position: "relative",
                  opacity: nDefReveal,
                  transform: `translateY(${interpolate(nDefReveal, [0, 1], [18, 0])}px)`,
                  padding: "16px 26px",
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  height: 115,
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
                  <RoughBox
                    width={876}
                    height={115}
                    stroke={theme.pivot}
                    strokeWidth={1.8}
                    roughness={1.1}
                    seed={84}
                  />
                </div>

                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 52,
                    fontWeight: 700,
                    color: theme.pivot,
                    width: 60,
                    textAlign: "center",
                    zIndex: 1,
                  }}
                >
                  N
                </div>
                <div style={{ zIndex: 1 }}>
                  <div
                    style={{
                      fontFamily: fonts.hand,
                      fontSize: 24,
                      fontWeight: 700,
                      color: theme.chalkText,
                    }}
                  >
                    Number of Strings
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 16,
                      color: theme.chalkSub,
                      marginTop: 2,
                    }}
                  >
                    N = len(strs) &mdash; dictates count of headers, delimiters, and list elements
                  </div>
                </div>
              </div>
            </div>

            {/* THREE OPERATION CARDS: ENCODE, DECODE, SPACE */}
            <div
              style={{
                display: "flex",
                gap: 24,
                flex: 1,
              }}
            >
              {/* CARD 1: ENCODE TIME COMPLEXITY (F474..F751) */}
              <div
                style={{
                  flex: 1,
                  position: "relative",
                  opacity: encodeWorkReveal,
                  transform: `translateY(${interpolate(encodeWorkReveal, [0, 1], [25, 0])}px)`,
                  padding: "24px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
                  <RoughBox
                    width={576}
                    height={490}
                    stroke={encodeTimeBadgeReveal > 0 ? theme.good : theme.pivot}
                    strokeWidth={2}
                    roughness={1.2}
                    seed={85}
                  />
                </div>

                <div style={{ zIndex: 1 }}>
                  <div
                    style={{
                      fontFamily: fonts.hand,
                      fontSize: 28,
                      fontWeight: 700,
                      color: theme.pivot,
                      marginBottom: 16,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>1. Encoding Work</span>
                    <span
                      style={{
                        fontSize: 15,
                        fontFamily: fonts.mono,
                        color: theme.chalkSub,
                      }}
                    >
                      encode(strs)
                    </span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <div style={{ display: "flex", gap: 12 }}>
                      <span style={{ color: theme.pivot, fontWeight: 700 }}>&bull;</span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkText, lineHeight: 1.4 }}>
                        Iterates over <span style={{ color: theme.pivot, fontWeight: 700 }}>N</span> strings: builds length headers &amp; <span style={{ color: theme.pivot }}>'#'</span> delimiters &rarr; <span style={{ color: theme.cyan }}>O(N)</span>
                      </span>
                    </div>

                    <div style={{ display: "flex", gap: 12 }}>
                      <span style={{ color: theme.pivot, fontWeight: 700 }}>&bull;</span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkText, lineHeight: 1.4 }}>
                        Copies all characters into parts accumulator &rarr; <span style={{ color: theme.cyan }}>O(C)</span>
                      </span>
                    </div>

                    <div style={{ display: "flex", gap: 12 }}>
                      <span style={{ color: theme.pivot, fontWeight: 700 }}>&bull;</span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkText, lineHeight: 1.4 }}>
                        Final <span style={{ color: theme.good }}>"".join(parts)</span> allocates the serialized stream &rarr; <span style={{ color: theme.cyan }}>O(C + N)</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Encode Badge Result */}
                <div
                  style={{
                    marginTop: 20,
                    paddingTop: 16,
                    borderTop: "1px dashed rgba(248, 246, 240, 0.18)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      fontFamily: fonts.hand,
                      fontSize: 18,
                      color: theme.chalkSub,
                      opacity: encodeTimePromptReveal,
                      marginBottom: 6,
                    }}
                  >
                    TIME COMPLEXITY:
                  </div>
                  <div
                    style={{
                      opacity: encodeTimeBadgeReveal,
                      transform: `scale(${interpolate(encodeTimeBadgeReveal, [0, 1], [0.85, 1])})`,
                      padding: "8px 26px",
                      borderRadius: 10,
                      border: `2px solid ${theme.good}`,
                      backgroundColor: "rgba(60, 229, 167, 0.16)",
                      fontFamily: fonts.mono,
                      fontSize: 34,
                      fontWeight: 700,
                      color: theme.good,
                    }}
                  >
                    O(C + N)
                  </div>
                </div>
              </div>

              {/* CARD 2: DECODE TIME COMPLEXITY (F751..F1003) */}
              <div
                style={{
                  flex: 1,
                  position: "relative",
                  opacity: decodeWorkReveal,
                  transform: `translateY(${interpolate(decodeWorkReveal, [0, 1], [25, 0])}px)`,
                  padding: "24px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
                  <RoughBox
                    width={576}
                    height={490}
                    stroke={decodeTimeBadgeReveal > 0 ? theme.good : theme.cyan}
                    strokeWidth={2}
                    roughness={1.2}
                    seed={86}
                  />
                </div>

                <div style={{ zIndex: 1 }}>
                  <div
                    style={{
                      fontFamily: fonts.hand,
                      fontSize: 28,
                      fontWeight: 700,
                      color: theme.cyan,
                      marginBottom: 16,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>2. Decoding Work</span>
                    <span
                      style={{
                        fontSize: 15,
                        fontFamily: fonts.mono,
                        color: theme.chalkSub,
                      }}
                    >
                      decode(s)
                    </span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <div style={{ display: "flex", gap: 12 }}>
                      <span style={{ color: theme.cyan, fontWeight: 700 }}>&bull;</span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkText, lineHeight: 1.4 }}>
                        Single linear forward pass: pointer <span style={{ color: theme.cyan }}>i</span> advances from 0 to len(s) with <span style={{ color: theme.good }}>zero backtracking</span>
                      </span>
                    </div>

                    <div style={{ display: "flex", gap: 12 }}>
                      <span style={{ color: theme.cyan, fontWeight: 700 }}>&bull;</span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkText, lineHeight: 1.4 }}>
                        Parses <span style={{ color: theme.pivot, fontWeight: 700 }}>N</span> headers &amp; delimiters &rarr; <span style={{ color: theme.cyan }}>O(N)</span>
                      </span>
                    </div>

                    <div style={{ display: "flex", gap: 12 }}>
                      <span style={{ color: theme.cyan, fontWeight: 700 }}>&bull;</span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkText, lineHeight: 1.4 }}>
                        Extracts slices totaling <span style={{ color: theme.cyan, fontWeight: 700 }}>C</span> characters into res &rarr; <span style={{ color: theme.cyan }}>O(C)</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decode Badge Result */}
                <div
                  style={{
                    marginTop: 20,
                    paddingTop: 16,
                    borderTop: "1px dashed rgba(248, 246, 240, 0.18)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      fontFamily: fonts.hand,
                      fontSize: 18,
                      color: theme.chalkSub,
                      opacity: decodeTimePromptReveal,
                      marginBottom: 6,
                    }}
                  >
                    TIME COMPLEXITY:
                  </div>
                  <div
                    style={{
                      opacity: decodeTimeBadgeReveal,
                      transform: `scale(${interpolate(decodeTimeBadgeReveal, [0, 1], [0.85, 1])})`,
                      padding: "8px 26px",
                      borderRadius: 10,
                      border: `2px solid ${theme.good}`,
                      backgroundColor: "rgba(60, 229, 167, 0.16)",
                      fontFamily: fonts.mono,
                      fontSize: 34,
                      fontWeight: 700,
                      color: theme.good,
                    }}
                  >
                    O(C + N)
                  </div>
                </div>
              </div>

              {/* CARD 3: SPACE COMPLEXITY (F1003..F1153) */}
              <div
                style={{
                  flex: 1,
                  position: "relative",
                  opacity: spaceWorkReveal,
                  transform: `translateY(${interpolate(spaceWorkReveal, [0, 1], [25, 0])}px)`,
                  padding: "24px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
                  <RoughBox
                    width={576}
                    height={490}
                    stroke={spaceBadgeReveal > 0 ? theme.good : "rgba(248, 246, 240, 0.3)"}
                    strokeWidth={2}
                    roughness={1.2}
                    seed={87}
                  />
                </div>

                <div style={{ zIndex: 1 }}>
                  <div
                    style={{
                      fontFamily: fonts.hand,
                      fontSize: 28,
                      fontWeight: 700,
                      color: theme.good,
                      marginBottom: 16,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>3. Output Space</span>
                    <span
                      style={{
                        fontSize: 15,
                        fontFamily: fonts.mono,
                        color: theme.chalkSub,
                      }}
                    >
                      Constructed Results
                    </span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <div style={{ display: "flex", gap: 12 }}>
                      <span style={{ color: theme.good, fontWeight: 700 }}>&bull;</span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkText, lineHeight: 1.4 }}>
                        Encoder builds serialized output string containing <span style={{ color: theme.cyan }}>C</span> characters + <span style={{ color: theme.pivot }}>O(N)</span> header metadata
                      </span>
                    </div>

                    <div style={{ display: "flex", gap: 12 }}>
                      <span style={{ color: theme.good, fontWeight: 700 }}>&bull;</span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkText, lineHeight: 1.4 }}>
                        Decoder returns reconstructed list holding <span style={{ color: theme.pivot }}>N</span> strings with <span style={{ color: theme.cyan }}>C</span> total characters
                      </span>
                    </div>

                    <div style={{ display: "flex", gap: 12 }}>
                      <span style={{ color: theme.good, fontWeight: 700 }}>&bull;</span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkText, lineHeight: 1.4 }}>
                        Auxiliary pointers <span style={{ color: theme.cyan }}>i, j, length, start, end</span> require only <span style={{ color: theme.good }}>O(1)</span> extra space
                      </span>
                    </div>
                  </div>
                </div>

                {/* Space Badge Result */}
                <div
                  style={{
                    marginTop: 20,
                    paddingTop: 16,
                    borderTop: "1px dashed rgba(248, 246, 240, 0.18)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      fontFamily: fonts.hand,
                      fontSize: 18,
                      color: theme.chalkSub,
                      marginBottom: 6,
                    }}
                  >
                    OUTPUT STORAGE:
                  </div>
                  <div
                    style={{
                      opacity: spaceBadgeReveal,
                      transform: `scale(${interpolate(spaceBadgeReveal, [0, 1], [0.85, 1])})`,
                      padding: "8px 26px",
                      borderRadius: 10,
                      border: `2px solid ${theme.good}`,
                      backgroundColor: "rgba(60, 229, 167, 0.16)",
                      fontFamily: fonts.mono,
                      fontSize: 34,
                      fontWeight: 700,
                      color: theme.good,
                    }}
                  >
                    O(C + N)
                  </div>
                </div>
              </div>
            </div>

            {/* SUMMARY TICKER AT BOTTOM (F1100..F1153) */}
            {spaceBadgeReveal > 0 && (
              <div
                style={{
                  marginTop: 18,
                  padding: "10px 24px",
                  borderRadius: 10,
                  border: "1px dashed rgba(60, 229, 167, 0.4)",
                  backgroundColor: "rgba(60, 229, 167, 0.08)",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  fontFamily: fonts.hand,
                  fontSize: 22,
                  color: theme.chalkText,
                }}
              >
                <span>&bull; Encode Time: <strong style={{ color: theme.good, fontFamily: fonts.mono }}>O(C + N)</strong></span>
                <span>&bull; Decode Time: <strong style={{ color: theme.good, fontFamily: fonts.mono }}>O(C + N)</strong></span>
                <span>&bull; Output Space: <strong style={{ color: theme.good, fontFamily: fonts.mono }}>O(C + N)</strong></span>
                <span style={{ color: theme.pivot, fontWeight: 700 }}>&bull; Mathematically Optimal Linear Bound</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* CAPTIONS AT BOTTOM (Y: 960..1040) */}
      <Captions words={captionWords} />
    </div>
  );
};
