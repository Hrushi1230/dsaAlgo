/**
 * Scene09MistakesEdgeCases.tsx — Scene 09 · Common Mistakes & Edge Cases
 * Encode and Decode Strings (LeetCode 271) · Pattern 01 — Arrays & Hashing
 *
 * Implements board-native pitfalls breakdown and comprehensive edge case proofs:
 * - Phase 1 (F0..F409): 3 Critical Implementation Mistakes
 *   - Mistake 1 (F78..F190): Splitting on every '#' naively destroys strings with internal '#'
 *   - Mistake 2 (F190..F260): Assuming length is 1 digit fails for multi-digit lengths ("11#")
 *   - Mistake 3 (F260..F409): Pointer leap invariant: must always set i = end
 * - Phase 2 (F409..F951): 3 Boundary Edge Cases Handled Uniformly
 *   - Edge Case 1 (F457..F556): strs = [] -> encodes to "" -> decodes to []
 *   - Edge Case 2 (F556..F682): strs = [""] -> encodes to "0#" -> decodes to [""]
 *   - Edge Case 3 (F682..F853): strs = ["#"] -> encodes to "1##" -> decodes to ["#"]
 *   - Universal Protocol Settle (F853..F951): Zero special branching required
 *
 * Total Duration: 951 frames @ 30fps (31.7s) strictly from sync/09-mistakes-edge-cases.json
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
import syncData from "../sync/09-mistakes-edge-cases.json";

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

export const Scene09MistakesEdgeCases: React.FC = () => {
  const frame = useCurrentFrame();

  // Camera engine
  const { camScale, camY } = useMemo(() => {
    if (frame < 409) {
      const s = interpolate(frame, [0, 30], [1.008, 1.0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: s, camY: 0 };
    }
    if (frame >= 409 && frame < 853) {
      const s = interpolate(frame, [409, 440], [1.0, 1.006], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const y = interpolate(frame, [409, 440], [0, -6], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: s, camY: y };
    }
    return { camScale: 1.0, camY: 0 };
  }, [frame]);

  // Audio-synchronized beats
  const mistake1Reveal = interpolate(frame, [78, 105], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  const mistake2Reveal = interpolate(frame, [190, 215], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  const mistake3PromptReveal = interpolate(frame, [260, 290], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });
  const mistake3RuleReveal = interpolate(frame, [347, 370], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  // Phase transition (F409): Pitfalls fade out, Edge Cases fade in
  const pitfallsPhaseOpacity = interpolate(frame, [409, 435], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  const edgeCasesPhaseOpacity = interpolate(frame, [415, 445], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  // Edge cases reveal
  const edgeCase1Reveal = interpolate(frame, [457, 485], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  const edgeCase2SetupReveal = interpolate(frame, [556, 585], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });
  const edgeCase2ResultReveal = interpolate(frame, [637, 655], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  const edgeCase3SetupReveal = interpolate(frame, [682, 715], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });
  const edgeCase3ResultReveal = interpolate(frame, [814, 835], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  const universalSummaryReveal = interpolate(frame, [853, 880], [0, 1], {
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

      {/* Chalk dust bursts */}
      {frame >= 347 && frame < 375 && (
        <ChalkDust x={1450} y={450} start={347} color={theme.pivot} count={20} />
      )}
      {frame >= 814 && frame < 845 && (
        <ChalkDust x={1510} y={480} start={814} color={theme.good} count={22} />
      )}
      {frame >= 853 && frame < 885 && (
        <ChalkDust x={960} y={750} start={853} color={theme.good} count={25} />
      )}

      <Audio src={staticFile("audio/017/09-mistakes-edge-cases.mp3")} />

      {/* CAMERA CONTAINER */}
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
          title="COMMON MISTAKES & EDGE CASES"
          badge="3 TRAPS · 3 EDGE CASES"
          badgeColor={theme.warn}
          seed={91}
        />

        {/* =========================================================================
            2. PHASE 1: 3 COMMON PITFALLS (F0 .. F409)
            ========================================================================= */}
        {pitfallsPhaseOpacity > 0 && (
          <div
            style={{
              position: "absolute",
              top: 110,
              left: 70,
              right: 70,
              height: 750,
              opacity: pitfallsPhaseOpacity,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontFamily: fonts.hand,
                fontSize: 34,
                color: theme.pivot,
                fontWeight: 700,
                marginBottom: 16,
                textAlign: "center",
              }}
            >
              Three Critical Pitfalls to Avoid in Coding Interviews
            </div>

            <div
              style={{
                display: "flex",
                gap: 26,
                height: 690,
              }}
            >
              {/* PITFALL 1: DO NOT SPLIT ON EVERY HASH (A002: F78..F190) */}
              <div
                style={{
                  flex: 1,
                  position: "relative",
                  opacity: mistake1Reveal,
                  transform: `translateY(${interpolate(mistake1Reveal, [0, 1], [30, 0])}px)`,
                  padding: "26px 28px 24px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
                  <RoughBox
                    width={576}
                    height={690}
                    stroke={theme.warn}
                    strokeWidth={2}
                    roughness={1.2}
                    seed={92}
                  />
                </div>

                <div style={{ zIndex: 1 }}>
                  <div
                    style={{
                      fontFamily: fonts.hand,
                      fontSize: 28,
                      fontWeight: 700,
                      color: theme.warn,
                      marginBottom: 18,
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <span>✗ Pitfall 1</span>
                    <span style={{ fontSize: 17, color: theme.chalkSub }}>&bull; Naive Split</span>
                  </div>

                  {/* Red Strikethrough Code */}
                  <div
                    style={{
                      padding: "14px 20px",
                      borderRadius: 8,
                      border: "1px dashed rgba(255, 118, 117, 0.5)",
                      backgroundColor: "rgba(255, 118, 117, 0.15)",
                      fontFamily: fonts.mono,
                      fontSize: 22,
                      color: theme.warn,
                      textDecoration: "line-through",
                      textDecorationThickness: 3,
                      marginBottom: 20,
                      fontWeight: 700,
                    }}
                  >
                    s.split("#")
                  </div>

                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 18,
                      color: theme.chalkText,
                      lineHeight: 1.5,
                    }}
                  >
                    If payload contains <span style={{ color: theme.warn, fontWeight: 700 }}>"#"</span> (e.g. <span style={{ color: theme.cyan }}>"a#b"</span>), naive splitting breaks the payload into pieces!
                  </div>

                  <div
                    style={{
                      marginTop: 22,
                      padding: "14px 18px",
                      borderRadius: 8,
                      border: "1px dashed rgba(248, 246, 240, 0.25)",
                      fontFamily: fonts.mono,
                      fontSize: 15,
                      color: theme.chalkSub,
                      lineHeight: 1.5,
                    }}
                  >
                    Rule: <span style={{ color: theme.pivot, fontWeight: 700 }}>'#'</span> only marks the end of the length header &mdash; not string boundaries.
                  </div>
                </div>

                <div
                  style={{
                    padding: "12px 20px",
                    borderRadius: 8,
                    border: `1.5px solid ${theme.good}`,
                    backgroundColor: "rgba(60, 229, 167, 0.14)",
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    color: theme.good,
                    textAlign: "center",
                    fontWeight: 700,
                    zIndex: 1,
                  }}
                >
                  ✓ Use explicit slice arithmetic instead
                </div>
              </div>

              {/* PITFALL 2: MULTI-DIGIT LENGTH (A003: F190..F260) */}
              <div
                style={{
                  flex: 1,
                  position: "relative",
                  opacity: mistake2Reveal,
                  transform: `translateY(${interpolate(mistake2Reveal, [0, 1], [30, 0])}px)`,
                  padding: "26px 28px 24px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
                  <RoughBox
                    width={576}
                    height={690}
                    stroke={theme.warn}
                    strokeWidth={2}
                    roughness={1.2}
                    seed={93}
                  />
                </div>

                <div style={{ zIndex: 1 }}>
                  <div
                    style={{
                      fontFamily: fonts.hand,
                      fontSize: 28,
                      fontWeight: 700,
                      color: theme.warn,
                      marginBottom: 18,
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <span>✗ Pitfall 2</span>
                    <span style={{ fontSize: 17, color: theme.chalkSub }}>&bull; Single-Digit Assumption</span>
                  </div>

                  {/* Red Strikethrough Code */}
                  <div
                    style={{
                      padding: "14px 20px",
                      borderRadius: 8,
                      border: "1px dashed rgba(255, 118, 117, 0.5)",
                      backgroundColor: "rgba(255, 118, 117, 0.15)",
                      fontFamily: fonts.mono,
                      fontSize: 22,
                      color: theme.warn,
                      textDecoration: "line-through",
                      textDecorationThickness: 3,
                      marginBottom: 20,
                      fontWeight: 700,
                    }}
                  >
                    length = int(s[i])
                  </div>

                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 18,
                      color: theme.chalkText,
                      lineHeight: 1.5,
                    }}
                  >
                    String lengths can exceed 9! For example, <span style={{ color: theme.cyan }}>"hello world"</span> has length 11 &rarr; header is <span style={{ color: theme.pivot, fontWeight: 700 }}>"11#"</span>.
                  </div>

                  <div
                    style={{
                      marginTop: 22,
                      padding: "14px 18px",
                      borderRadius: 8,
                      border: "1px dashed rgba(248, 246, 240, 0.25)",
                      fontFamily: fonts.mono,
                      fontSize: 15,
                      color: theme.chalkSub,
                      lineHeight: 1.5,
                    }}
                  >
                    Rule: Scan pointer <span style={{ color: theme.cyan }}>j</span> forward with <span style={{ color: theme.pivot }}>while s[j] != '#'</span> to extract all length digits.
                  </div>
                </div>

                <div
                  style={{
                    padding: "12px 20px",
                    borderRadius: 8,
                    border: `1.5px solid ${theme.good}`,
                    backgroundColor: "rgba(60, 229, 167, 0.14)",
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    color: theme.good,
                    textAlign: "center",
                    fontWeight: 700,
                    zIndex: 1,
                  }}
                >
                  ✓ int(s[i:j]) parses arbitrary integer length
                </div>
              </div>

              {/* PITFALL 3: ALWAYS MOVE i TO END (A004 & A005: F260..F409) */}
              <div
                style={{
                  flex: 1,
                  position: "relative",
                  opacity: mistake3PromptReveal,
                  transform: `translateY(${interpolate(mistake3PromptReveal, [0, 1], [30, 0])}px)`,
                  padding: "26px 28px 24px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
                  <RoughBox
                    width={576}
                    height={690}
                    stroke={mistake3RuleReveal > 0 ? theme.pivot : theme.warn}
                    strokeWidth={2}
                    roughness={1.2}
                    seed={94}
                  />
                </div>

                <div style={{ zIndex: 1 }}>
                  <div
                    style={{
                      fontFamily: fonts.hand,
                      fontSize: 28,
                      fontWeight: 700,
                      color: mistake3RuleReveal > 0 ? theme.pivot : theme.warn,
                      marginBottom: 18,
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <span>{mistake3RuleReveal > 0 ? "★ Vital Invariant" : "⚠ Pitfall 3"}</span>
                    <span style={{ fontSize: 17, color: theme.chalkSub }}>&bull; Pointer Advance</span>
                  </div>

                  {/* Incorrect Jumps Strikethrough */}
                  <div
                    style={{
                      display: "flex",
                      gap: 14,
                      marginBottom: 20,
                    }}
                  >
                    <div
                      style={{
                        padding: "10px 16px",
                        borderRadius: 6,
                        border: "1px dashed rgba(255, 118, 117, 0.5)",
                        backgroundColor: "rgba(255, 118, 117, 0.15)",
                        fontFamily: fonts.mono,
                        fontSize: 18,
                        color: theme.warn,
                        textDecoration: "line-through",
                      }}
                    >
                      i += 1
                    </div>
                    <div
                      style={{
                        padding: "10px 16px",
                        borderRadius: 6,
                        border: "1px dashed rgba(255, 118, 117, 0.5)",
                        backgroundColor: "rgba(255, 118, 117, 0.15)",
                        fontFamily: fonts.mono,
                        fontSize: 18,
                        color: theme.warn,
                        textDecoration: "line-through",
                      }}
                    >
                      i = j + 1
                    </div>
                  </div>

                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 18,
                      color: theme.chalkText,
                      lineHeight: 1.5,
                    }}
                  >
                    Advancing by 1 drops the pointer right into raw payload data! You must leap over the entire extracted string.
                  </div>

                  {/* Correct Rule Reveal (A005) */}
                  <div
                    style={{
                      marginTop: 20,
                      opacity: mistake3RuleReveal,
                      transform: `scale(${interpolate(mistake3RuleReveal, [0, 1], [0.92, 1])})`,
                      padding: "14px 20px",
                      borderRadius: 10,
                      border: `2px solid ${theme.pivot}`,
                      backgroundColor: "rgba(255, 209, 102, 0.18)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <div style={{ fontFamily: fonts.hand, fontSize: 18, color: theme.pivot, fontWeight: 700 }}>
                      MANDATORY POINTER JUMP:
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 34, fontWeight: 700, color: theme.chalkText }}>
                      i = end
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    padding: "12px 20px",
                    borderRadius: 8,
                    border: `1.5px solid ${theme.good}`,
                    backgroundColor: "rgba(60, 229, 167, 0.14)",
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    color: theme.good,
                    textAlign: "center",
                    fontWeight: 700,
                    zIndex: 1,
                  }}
                >
                  ✓ Lands exactly on next record header
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            3. PHASE 2: 3 EDGE CASES & UNIVERSAL PROTOCOL (F409 .. F951)
            ========================================================================= */}
        {edgeCasesPhaseOpacity > 0 && (
          <div
            style={{
              position: "absolute",
              top: 110,
              left: 70,
              right: 70,
              height: 770,
              opacity: edgeCasesPhaseOpacity,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontFamily: fonts.hand,
                fontSize: 34,
                color: theme.cyan,
                fontWeight: 700,
                marginBottom: 20,
                textAlign: "center",
              }}
            >
              Boundary Edge Cases &mdash; Handled Uniformly Without Special Branching
            </div>

            {/* THREE EDGE CASES ROW */}
            <div
              style={{
                display: "flex",
                gap: 26,
                marginBottom: 24,
                height: 380,
              }}
            >
              {/* EDGE CASE 1: EMPTY LIST (A007: F457..F556) */}
              <div
                style={{
                  flex: 1,
                  position: "relative",
                  opacity: edgeCase1Reveal,
                  transform: `translateY(${interpolate(edgeCase1Reveal, [0, 1], [25, 0])}px)`,
                  padding: "24px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
                  <RoughBox
                    width={576}
                    height={380}
                    stroke={theme.good}
                    strokeWidth={2}
                    roughness={1.2}
                    seed={95}
                  />
                </div>

                <div style={{ zIndex: 1 }}>
                  <div
                    style={{
                      fontFamily: fonts.hand,
                      fontSize: 26,
                      fontWeight: 700,
                      color: theme.good,
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 16,
                    }}
                  >
                    <span>1. Empty List</span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 18 }}>strs = []</span>
                  </div>

                  <div style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkText, marginBottom: 10 }}>
                    &bull; Encode: loop runs 0 times &rarr; <span style={{ color: theme.good, fontWeight: 700 }}>""</span>
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkText }}>
                    &bull; Decode: while <span style={{ color: theme.cyan }}>0 &lt; len("")</span> is False &rarr; returns <span style={{ color: theme.good, fontWeight: 700 }}>[]</span>
                  </div>
                </div>

                <div
                  style={{
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: "1px dashed rgba(60, 229, 167, 0.4)",
                    backgroundColor: "rgba(60, 229, 167, 0.12)",
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    color: theme.good,
                    textAlign: "center",
                    fontWeight: 700,
                    zIndex: 1,
                  }}
                >
                  [] &rarr; "" &rarr; [] (Lossless)
                </div>
              </div>

              {/* EDGE CASE 2: ONE EMPTY STRING (A008 & A009: F556..F682) */}
              <div
                style={{
                  flex: 1,
                  position: "relative",
                  opacity: edgeCase2SetupReveal,
                  transform: `translateY(${interpolate(edgeCase2SetupReveal, [0, 1], [25, 0])}px)`,
                  padding: "24px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
                  <RoughBox
                    width={576}
                    height={380}
                    stroke={edgeCase2ResultReveal > 0 ? theme.good : theme.pivot}
                    strokeWidth={2}
                    roughness={1.2}
                    seed={96}
                  />
                </div>

                <div style={{ zIndex: 1 }}>
                  <div
                    style={{
                      fontFamily: fonts.hand,
                      fontSize: 26,
                      fontWeight: 700,
                      color: theme.pivot,
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 16,
                    }}
                  >
                    <span>2. Single Empty String</span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 18 }}>strs = [""]</span>
                  </div>

                  <div style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkText, marginBottom: 10 }}>
                    &bull; Encode: <span style={{ color: theme.cyan }}>len("") == 0</span> &rarr; appends <span style={{ color: theme.pivot, fontWeight: 700 }}>"0#"</span>
                  </div>

                  {edgeCase2ResultReveal > 0 && (
                    <div style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkText }}>
                      &bull; Decode: reads length 0, slice <span style={{ color: theme.cyan }}>s[2:2]</span> yields <span style={{ color: theme.good, fontWeight: 700 }}>""</span> &rarr; returns <span style={{ color: theme.good }}>[""]</span>
                    </div>
                  )}
                </div>

                <div
                  style={{
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: `1px dashed ${edgeCase2ResultReveal > 0 ? "rgba(60, 229, 167, 0.4)" : "rgba(255, 209, 102, 0.4)"}`,
                    backgroundColor: edgeCase2ResultReveal > 0 ? "rgba(60, 229, 167, 0.12)" : "rgba(255, 209, 102, 0.12)",
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    color: edgeCase2ResultReveal > 0 ? theme.good : theme.pivot,
                    textAlign: "center",
                    fontWeight: 700,
                    zIndex: 1,
                  }}
                >
                  [""] &rarr; "0#" &rarr; [""] (Lossless)
                </div>
              </div>

              {/* EDGE CASE 3: STRING CONTAINING ONLY '#' (A010..A012: F682..F853) */}
              <div
                style={{
                  flex: 1,
                  position: "relative",
                  opacity: edgeCase3SetupReveal,
                  transform: `translateY(${interpolate(edgeCase3SetupReveal, [0, 1], [25, 0])}px)`,
                  padding: "24px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
                  <RoughBox
                    width={576}
                    height={380}
                    stroke={edgeCase3ResultReveal > 0 ? theme.good : theme.warn}
                    strokeWidth={2}
                    roughness={1.2}
                    seed={97}
                  />
                </div>

                <div style={{ zIndex: 1 }}>
                  <div
                    style={{
                      fontFamily: fonts.hand,
                      fontSize: 26,
                      fontWeight: 700,
                      color: theme.warn,
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 16,
                    }}
                  >
                    <span>3. Delimiter in Content</span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 18 }}>strs = ["#"]</span>
                  </div>

                  <div style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkText, marginBottom: 10 }}>
                    &bull; Encode: <span style={{ color: theme.cyan }}>len("#") == 1</span> &rarr; appends <span style={{ color: theme.warn, fontWeight: 700 }}>"1##"</span>
                  </div>

                  {edgeCase3ResultReveal > 0 && (
                    <div style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkText }}>
                      &bull; Decode: reads length 1, slice <span style={{ color: theme.cyan }}>s[2:3]</span> yields <span style={{ color: theme.good, fontWeight: 700 }}>"#"</span> &rarr; returns <span style={{ color: theme.good }}>["#"]</span>
                    </div>
                  )}
                </div>

                <div
                  style={{
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: `1px dashed ${edgeCase3ResultReveal > 0 ? "rgba(60, 229, 167, 0.4)" : "rgba(255, 118, 117, 0.4)"}`,
                    backgroundColor: edgeCase3ResultReveal > 0 ? "rgba(60, 229, 167, 0.12)" : "rgba(255, 118, 117, 0.12)",
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    color: edgeCase3ResultReveal > 0 ? theme.good : theme.warn,
                    textAlign: "center",
                    fontWeight: 700,
                    zIndex: 1,
                  }}
                >
                  ["#"] &rarr; "1##" &rarr; ["#"] (Lossless)
                </div>
              </div>
            </div>

            {/* UNIVERSAL PROTOCOL BANNER (A013: F853..F951) */}
            <div
              style={{
                position: "relative",
                opacity: universalSummaryReveal,
                transform: `scale(${interpolate(universalSummaryReveal, [0, 1], [0.95, 1])})`,
                padding: "24px 36px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: 200,
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
                <RoughBox
                  width={1780}
                  height={200}
                  stroke={theme.good}
                  strokeWidth={2}
                  roughness={1.2}
                  seed={98}
                />
              </div>

              <div
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 34,
                  fontWeight: 700,
                  color: theme.good,
                  marginBottom: 10,
                  textAlign: "center",
                  zIndex: 1,
                }}
              >
                ✓ The Same Protocol Handles All Cases Uniformly
              </div>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 18,
                  color: theme.chalkText,
                  textAlign: "center",
                  lineHeight: 1.6,
                  maxWidth: 1400,
                  zIndex: 1,
                }}
              >
                No special-case <span style={{ color: theme.warn }}>if len(strs) == 0</span> branches required. The length-prefix invariant naturally covers empty inputs, empty strings, and delimiter collisions with 100% mathematical fidelity.
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CAPTIONS AT BOTTOM (Y: 960..1040) */}
      <Captions words={captionWords} />
    </div>
  );
};
