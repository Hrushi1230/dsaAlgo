/**
 * Scene09OptimalIdea.tsx — Scene 09 · Optimal Cycle Sort & Home Mapping Idea
 * First Missing Positive (LeetCode 41) · Pattern 01 — Arrays & Hashing
 * 
 * Frame Duration: 2489 frames @ 30fps (82.97s) strictly from sync/09-optimal-idea.json
 * 
 * Mobile-First Board-Native Layout:
 * - Direct Chalkboard Green background (#19523C)
 * - Zero dark card wrappers (no rgba(10, 35, 25, ...))
 * - Direct chalkboard typography with RoughLine underlines & vertical chalk dividers
 * - Progressive word-gated reveals matching exact audio anchors (zero spoilers)
 */

import React, { useMemo } from "react";
import { Audio, staticFile, useCurrentFrame } from "remotion";
import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme, fonts, typographyMobile } from "../../../../kit/lib/theme";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { ArrayTrackV2 } from "../../../../kit/components";
import { SemanticSlotState } from "../../../../kit/components/array/ArraySlotV2";
import { RoughLine } from "../../../../kit/components/RoughLine";
import { BoardHeaderMobile } from "./BoardHeaderMobile";
import syncData from "../sync/09-optimal-idea.json";

export const SCENE09_TOTAL_FRAMES = 2489;

const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

export const Scene09OptimalIdea: React.FC = () => {
  const frame = useCurrentFrame();

  const isBoundRevealed = frame >= 381;
  const isHomeRuleRevealed = frame >= 664;
  const isSwapRuleRevealed = frame >= 1145;
  const isDupGuardRevealed = frame >= 1589;
  const isIgnoredValsRevealed = frame >= 1852;
  const isSecondPassRevealed = frame >= 2102;

  // Master array showing home indices
  const elements = useMemo(() => {
    const raw = [3, 4, -1, 1, 1, 10, 0, 2];
    return raw.map((val, idx) => {
      let slotState: SemanticSlotState = "default";
      let annotation = `home: ${idx + 1}`;

      const inRange = val >= 1 && val <= 8;
      if (isHomeRuleRevealed) {
        if (inRange) {
          slotState = "confirmed";
          annotation = `belongs @ [${val - 1}]`;
        } else {
          slotState = "rejected";
          annotation = "out of range";
        }
      }

      return {
        value: val,
        slotState,
        valueState: isHomeRuleRevealed ? (inRange ? ("confirmed" as const) : ("rejected" as const)) : ("default" as const),
        annotation,
        fill: isHomeRuleRevealed
          ? inRange
            ? "rgba(60, 229, 167, 0.22)"
            : "rgba(255, 107, 107, 0.22)"
          : undefined,
        stroke: isHomeRuleRevealed ? (inRange ? theme.good : theme.warn) : undefined,
      };
    });
  }, [isHomeRuleRevealed]);

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        backgroundColor: theme.boardBg,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      <Audio src={staticFile("audio/018/scence09.mp3")} />

      {/* Header */}
      <BoardHeaderMobile
        stepBadge="SCENE 09"
        stepTitle="OPTIMAL CYCLE SORT INTUITION"
        algorithmName="In-Place Hashing & Pigeonhole Bound"
        difficulty="HARD"
      />

      {/* Top: Array Track with Target Home Annotations (Y: 165 to 370) */}
      <div
        style={{
          position: "absolute",
          top: 165,
          left: 100,
          right: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            ...typographyMobile.mono,
            color: theme.chalkDim,
            marginBottom: 12,
            letterSpacing: 2,
          }}
        >
          TARGET MAPPING: value x belongs at index (x - 1)
        </div>

        <ArrayTrackV2
          elements={elements}
          slotWidth={120}
          slotHeight={95}
          gap={22}
          showIndices
        />
      </div>

      {/* Board-Native Split Content Columns (Y: 410 to 880) — Zero Dark Cards */}
      <div
        style={{
          position: "absolute",
          top: 410,
          left: 100,
          right: 100,
          display: "flex",
          gap: 48,
          alignItems: "flex-start",
        }}
      >
        {/* Left Column: Pigeonhole Bound & Target Equation */}
        <div
          style={{
            flex: 1.05,
            display: "flex",
            flexDirection: "column",
            gap: 16,
            opacity: isBoundRevealed ? 1 : 0,
          }}
        >
          {/* Header with yellow hand underline */}
          <div style={{ position: "relative", marginBottom: 6 }}>
            <span
              style={{
                fontFamily: fonts.hand,
                fontSize: 40,
                fontWeight: 800,
                color: theme.pivot,
                letterSpacing: "0.02em",
              }}
            >
              1 · Pigeonhole Bound & Home Equation
            </span>
            <div style={{ position: "absolute", left: 0, top: 44, pointerEvents: "none" }}>
              <RoughLine
                shape={{ kind: "line", x1: 0, y1: 4, x2: 480, y2: 6 }}
                width={500}
                height={16}
                stroke={theme.pivot}
                strokeWidth={3}
              />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 8 }}>
            {/* Step ①: Pigeonhole Bound */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  border: `2px solid ${theme.cyan}`,
                  color: theme.cyan,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: 800,
                  fontSize: 22,
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                1
              </div>
              <div style={{ fontFamily: fonts.hand, fontSize: 32, fontWeight: 700, color: theme.chalkBright, lineHeight: 1.35 }}>
                For array size <span style={{ color: theme.pivot }}>N = 8</span>: Answer is <span style={{ color: theme.good, fontWeight: 800 }}>GUARANTEED in [1 .. N+1] = [1 .. 9]</span>!
              </div>
            </div>

            {/* Step ②: Home Equation */}
            {isHomeRuleRevealed && (
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: `2px solid ${theme.good}`,
                    color: theme.good,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: 800,
                    fontSize: 22,
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  2
                </div>
                <div style={{ fontFamily: fonts.hand, fontSize: 31, fontWeight: 700, color: theme.chalkBright, lineHeight: 1.35 }}>
                  Home Rule: Value <span style={{ color: theme.pivot }}>x</span> belongs at <span style={{ color: theme.good, fontWeight: 800 }}>index x - 1</span>:
                  <div style={{ fontSize: 27, color: theme.chalkDim, marginTop: 4, fontFamily: '"SFMono-Regular", Consolas, monospace' }}>
                    1 → idx 0 · 2 → idx 1 · ... · 8 → idx 7
                  </div>
                </div>
              </div>
            )}

            {/* Step ③: Ignore Out-of-Range */}
            {isIgnoredValsRevealed && (
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: `2px solid ${theme.warn}`,
                    color: theme.warn,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: 800,
                    fontSize: 22,
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  3
                </div>
                <div style={{ fontFamily: fonts.hand, fontSize: 30, fontWeight: 600, color: theme.warn, lineHeight: 1.35 }}>
                  Values ≤ 0 or &gt; N cannot fit in [0..N-1]. Leave them alone; they cannot be in our target home slots!
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Vertical Chalk Divider */}
        <div
          style={{
            width: 2.5,
            minHeight: 380,
            backgroundColor: "rgba(232, 228, 213, 0.35)",
            alignSelf: "stretch",
          }}
        />

        {/* Right Column: Cyclic Swap Engine & Termination Guard */}
        <div
          style={{
            flex: 1.15,
            display: "flex",
            flexDirection: "column",
            gap: 16,
            opacity: isSwapRuleRevealed ? 1 : 0,
          }}
        >
          {/* Header with yellow hand underline */}
          <div style={{ position: "relative", marginBottom: 6 }}>
            <span
              style={{
                fontFamily: fonts.hand,
                fontSize: 40,
                fontWeight: 800,
                color: theme.pivot,
                letterSpacing: "0.02em",
              }}
            >
              2 · Cycle Sort Swapping Rules
            </span>
            <div style={{ position: "absolute", left: 0, top: 44, pointerEvents: "none" }}>
              <RoughLine
                shape={{ kind: "line", x1: 0, y1: 4, x2: 440, y2: 6 }}
                width={460}
                height={16}
                stroke={theme.pivot}
                strokeWidth={3}
              />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 8 }}>
            {/* Step ①: While-swap condition */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  border: `2px solid ${theme.cyan}`,
                  color: theme.cyan,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: 800,
                  fontSize: 22,
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                1
              </div>
              <div style={{ fontFamily: fonts.hand, fontSize: 31, fontWeight: 700, color: theme.chalkBright, lineHeight: 1.35 }}>
                While-Swap Rule: While <span style={{ fontFamily: "monospace", color: theme.pivot }}>1 ≤ nums[i] ≤ N</span> and <span style={{ fontFamily: "monospace", color: theme.good }}>nums[i] ≠ nums[nums[i]-1]</span>: swap to home!
              </div>
            </div>

            {/* Step ②: Duplicate Guard */}
            {isDupGuardRevealed && (
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: `2px solid ${theme.warn}`,
                    color: theme.warn,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: 800,
                    fontSize: 22,
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  2
                </div>
                <div style={{ fontFamily: fonts.hand, fontSize: 30, fontWeight: 700, color: theme.warn, lineHeight: 1.35 }}>
                  Duplicate Guard: If destination <span style={{ fontFamily: "monospace", color: theme.pivot }}>nums[nums[i]-1]</span> already holds the number, STOP to avoid infinite loops!
                </div>
              </div>
            )}

            {/* Step ③: Final Pass Scan */}
            {isSecondPassRevealed && (
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: `2px solid ${theme.good}`,
                    color: theme.good,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: 800,
                    fontSize: 22,
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  3
                </div>
                <div style={{ fontFamily: fonts.hand, fontSize: 31, fontWeight: 800, color: theme.good, lineHeight: 1.35 }}>
                  Pass 2 Detection: First slot where <span style={{ fontFamily: "monospace" }}>nums[i] ≠ i + 1</span> immediately returns <span style={{ color: theme.pivot }}>i + 1</span>!
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Caption Safe Zone */}
      <Captions words={captionWords} />
    </div>
  );
};
