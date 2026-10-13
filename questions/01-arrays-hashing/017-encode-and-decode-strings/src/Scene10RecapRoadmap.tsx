/**
 * Scene10RecapRoadmap.tsx — Scene 10 · Minimal Recap & Roadmap Advancement
 * Encode and Decode Strings (LeetCode 271) · Pattern 01 — Arrays & Hashing
 *
 * Implements board-native recap & curriculum advancement to Q18:
 * - Phase 1 (F0..F757): Universal Protocol & Reusable Pattern Takeaway
 *   - The length-prefix record format: length + '#' + payload
 *   - Core architectural principle: store explicit boundary information
 *   - Question 17: COMPLETE badge
 * - Phase 2 (F757..F1119): Master Roadmap V2 Curriculum Advancement
 *   - Q17 officially marked complete
 *   - Global progress counter advances: 16 -> 17 / 227 COMPLETE
 *   - Q18 activated as UP NEXT: First Missing Positive (LC 41 · Hard)
 *
 * Total Duration: 1119 frames @ 30fps (37.3s) strictly from sync/10-recap-roadmap.json
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
import { MasterRoadmapV2 } from "../../../../kit/components/MasterRoadmapV2";
import syncData from "../sync/10-recap-roadmap.json";

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

export const Scene10RecapRoadmap: React.FC = () => {
  const frame = useCurrentFrame();

  // Camera engine
  const { camScale, camX, camY } = useMemo(() => {
    // Phase 1 (F0..F757): Neutral framing for board recap
    if (frame < 757) {
      const s = interpolate(frame, [0, 25], [1.008, 1.0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: s, camX: 0, camY: 0 };
    }

    // Phase 2 (F757..F991): Camera pans to course progress counter (17/227)
    if (frame >= 757 && frame < 991) {
      const scale = interpolate(frame, [757, 795], [1.0, 1.02], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const y = interpolate(frame, [757, 795], [0, -70], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: scale, camX: 0, camY: y };
    }

    // Phase 3 (F991..F1119): Camera pans down to Row 018 (First Missing Positive)
    const scale = interpolate(frame, [991, 1025], [1.02, 1.03], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
    const y = interpolate(frame, [991, 1025], [-70, -130], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
    return { camScale: scale, camX: 0, camY: y };
  }, [frame]);

  // Phase visibility & cross-fade
  const recapOpacity = useMemo(() => {
    if (frame < 757) return 1;
    return interpolate(frame, [757, 785], [1, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
  }, [frame]);

  const roadmapOpacity = useMemo(() => {
    if (frame < 765) return 0;
    return interpolate(frame, [765, 795], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
  }, [frame]);

  // Phase 1 reveals
  const formatFormulaReveal = interpolate(frame, [83, 115], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  const decoderReadLengthReveal = interpolate(frame, [174, 195], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  const decoderConsumePayloadReveal = interpolate(frame, [232, 260], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  const takeawayConditionReveal = interpolate(frame, [343, 375], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  const takeawayPrincipleReveal = interpolate(frame, [523, 555], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  const q17CompleteBadgeReveal = interpolate(frame, [757, 775], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  // Completed global numbers list
  const completedNums = useMemo(() => {
    if (frame < 842) {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    }
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  }, [frame]);

  const completedCount = frame >= 842 ? 17 : 16;
  const isQ18UpNext = frame >= 991;

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
      {frame >= 523 && frame < 555 && (
        <ChalkDust x={960} y={620} start={523} color={theme.pivot} count={24} />
      )}
      {frame >= 757 && frame < 785 && (
        <ChalkDust x={960} y={780} start={757} color={theme.good} count={26} />
      )}
      {frame >= 842 && frame < 875 && (
        <ChalkDust x={960} y={200} start={842} color={theme.good} count={28} />
      )}
      {frame >= 1020 && frame < 1050 && (
        <ChalkDust x={1100} y={750} start={1020} color={theme.pivot} count={22} />
      )}

      <Audio src={staticFile("audio/017/10-recap-roadmap.mp3")} />

      {/* CAMERA TRANSFORM CONTAINER */}
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          transform: `scale(${camScale}) translate(${camX}px, ${camY}px)`,
          transformOrigin: "center center",
        }}
      >
        {/* ================================================================= */}
        {/* PHASE 1: BOARD-NATIVE RECAP (F0 .. F757)                          */}
        {/* ================================================================= */}
        {recapOpacity > 0 && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: recapOpacity,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* CANONICAL BOARD HEADER */}
            <BoardHeader
              title="UNIVERSAL RECAP & CORE TAKEAWAY"
              badge="LENGTH-PREFIX PROTOCOL"
              badgeColor={theme.pivot}
              seed={101}
            />

            {/* RECAP CONTENT STAGE (Y: 120 .. 860) */}
            <div
              style={{
                position: "absolute",
                top: 120,
                left: 160,
                right: 160,
                height: 740,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* FORMAT FORMULA HERO CARD (F83..F343) */}
              <div
                style={{
                  width: 1300,
                  height: 240,
                  position: "relative",
                  padding: "24px 44px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  opacity: formatFormulaReveal,
                  transform: `scale(${interpolate(formatFormulaReveal, [0, 1], [0.94, 1])})`,
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
                  <RoughBox
                    width={1300}
                    height={240}
                    stroke={theme.cyan}
                    strokeWidth={2}
                    roughness={1.2}
                    seed={102}
                  />
                </div>

                <div
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 24,
                    color: theme.chalkSub,
                    zIndex: 1,
                  }}
                >
                  The Universal Framing Protocol
                </div>

                {/* Three Record Tokens */}
                <div style={{ display: "flex", alignItems: "center", gap: 24, zIndex: 1 }}>
                  {/* Length Token */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      border: `2px solid ${decoderReadLengthReveal > 0 ? theme.pivot : theme.cyan}`,
                      backgroundColor: decoderReadLengthReveal > 0 ? "rgba(255, 209, 102, 0.2)" : "rgba(92, 225, 230, 0.12)",
                      borderRadius: 12,
                      padding: "14px 32px",
                      boxShadow: decoderReadLengthReveal > 0 ? "0 0 24px rgba(255, 209, 102, 0.3)" : "none",
                    }}
                  >
                    <span style={{ fontFamily: fonts.mono, fontSize: 34, fontWeight: 700, color: decoderReadLengthReveal > 0 ? theme.pivot : theme.cyan }}>
                      length
                    </span>
                    <span style={{ fontFamily: fonts.hand, fontSize: 16, color: theme.chalkSub, marginTop: 4 }}>
                      Byte Count
                    </span>
                  </div>

                  <span style={{ fontFamily: fonts.mono, fontSize: 40, color: theme.chalkSub }}>+</span>

                  {/* Delimiter Token */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      border: `2px solid ${theme.pivot}`,
                      backgroundColor: "rgba(255, 209, 102, 0.12)",
                      borderRadius: 12,
                      padding: "14px 28px",
                    }}
                  >
                    <span style={{ fontFamily: fonts.mono, fontSize: 34, fontWeight: 700, color: theme.pivot }}>
                      '#'
                    </span>
                    <span style={{ fontFamily: fonts.hand, fontSize: 16, color: theme.chalkSub, marginTop: 4 }}>
                      Header End
                    </span>
                  </div>

                  <span style={{ fontFamily: fonts.mono, fontSize: 40, color: theme.chalkSub }}>+</span>

                  {/* Payload Token */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      border: `2px solid ${decoderConsumePayloadReveal > 0 ? theme.good : "rgba(248, 246, 240, 0.3)"}`,
                      backgroundColor: decoderConsumePayloadReveal > 0 ? "rgba(60, 229, 167, 0.18)" : "transparent",
                      borderRadius: 12,
                      padding: "14px 40px",
                      boxShadow: decoderConsumePayloadReveal > 0 ? "0 0 24px rgba(60, 229, 167, 0.3)" : "none",
                    }}
                  >
                    <span style={{ fontFamily: fonts.mono, fontSize: 34, fontWeight: 700, color: decoderConsumePayloadReveal > 0 ? theme.good : theme.chalkText }}>
                      payload
                    </span>
                    <span style={{ fontFamily: fonts.hand, fontSize: 16, color: theme.chalkSub, marginTop: 4 }}>
                      Raw String Content
                    </span>
                  </div>
                </div>

                {/* Decoder Action Footnote */}
                <div
                  style={{
                    display: "flex",
                    gap: 36,
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    color: theme.chalkText,
                    zIndex: 1,
                  }}
                >
                  <span style={{ color: decoderReadLengthReveal > 0 ? theme.pivot : theme.chalkSub }}>
                    1. Decoder reads length header
                  </span>
                  <span style={{ color: decoderConsumePayloadReveal > 0 ? theme.good : theme.chalkSub }}>
                    2. Consumes exactly that many characters
                  </span>
                  <span style={{ color: theme.chalkSub }}>
                    3. Jumps directly to next record
                  </span>
                </div>
              </div>

              {/* REUSABLE PATTERN TAKEAWAY CARD (F343..F633) */}
              <div
                style={{
                  width: 1300,
                  height: 280,
                  position: "relative",
                  padding: "26px 44px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  opacity: takeawayConditionReveal,
                  transform: `scale(${interpolate(takeawayConditionReveal, [0, 1], [0.94, 1])})`,
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
                  <RoughBox
                    width={1300}
                    height={280}
                    stroke={takeawayPrincipleReveal > 0 ? theme.pivot : "rgba(248, 246, 240, 0.3)"}
                    strokeWidth={2}
                    roughness={1.2}
                    seed={103}
                  />
                </div>

                <div
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 24,
                    color: theme.cyan,
                    zIndex: 1,
                  }}
                >
                  Transferable Engineering Insight
                </div>

                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 18,
                    color: theme.chalkText,
                    textAlign: "center",
                    lineHeight: 1.5,
                    zIndex: 1,
                  }}
                >
                  When payload strings can contain any delimiter character (including '#' itself):
                </div>

                <div
                  style={{
                    opacity: takeawayPrincipleReveal,
                    transform: `scale(${interpolate(takeawayPrincipleReveal, [0, 1], [0.9, 1])})`,
                    padding: "16px 44px",
                    borderRadius: 12,
                    border: `2.5px solid ${theme.pivot}`,
                    backgroundColor: "rgba(255, 209, 102, 0.15)",
                    fontFamily: fonts.hand,
                    fontSize: 38,
                    fontWeight: 700,
                    color: theme.pivot,
                    letterSpacing: 1.5,
                    textAlign: "center",
                    textShadow: "0 0 16px rgba(255, 209, 102, 0.3)",
                    zIndex: 1,
                  }}
                >
                  STORE EXPLICIT BOUNDARY INFORMATION
                </div>

                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    color: theme.chalkSub,
                    textAlign: "center",
                    zIndex: 1,
                  }}
                >
                  Length-prefixing transforms ambiguous parsing into deterministic, linear O(1) jump arithmetic.
                </div>
              </div>

              {/* Q17 COMPLETE BADGE (F633..F793) */}
              <div style={{ height: 60, display: "flex", alignItems: "center" }}>
                {frame >= 633 && (
                  <div
                    style={{
                      opacity: q17CompleteBadgeReveal,
                      transform: `scale(${interpolate(q17CompleteBadgeReveal, [0, 1], [0.85, 1])})`,
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      padding: "12px 36px",
                      borderRadius: 12,
                      border: `2px solid ${theme.good}`,
                      backgroundColor: "rgba(60, 229, 167, 0.16)",
                      color: theme.good,
                      fontFamily: fonts.mono,
                      fontSize: 22,
                      fontWeight: 700,
                      boxShadow: "0 0 24px rgba(60, 229, 167, 0.3)",
                    }}
                  >
                    <span>✓ QUESTION 017 · ENCODE AND DECODE STRINGS COMPLETE</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* PHASE 2: FULL-SCREEN MASTER ROADMAP (F757 .. F1119)               */}
        {/* ================================================================= */}
        {roadmapOpacity > 0 && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: roadmapOpacity,
              pointerEvents: "none",
            }}
          >
            <MasterRoadmapV2
              completedCount={completedCount}
              completedGlobalNums={completedNums}
              activeGlobalNum={isQ18UpNext ? undefined : 17}
              upNextGlobalNum={isQ18UpNext ? 18 : undefined}
              activeBadgeLabel={isQ18UpNext ? undefined : "COMPLETE"}
              spotlightRow={isQ18UpNext ? 18 : 17}
            />
          </div>
        )}
      </div>

      {/* CAPTIONS AT BOTTOM (Y: 960..1040) */}
      <Captions words={captionWords} />
    </div>
  );
};
