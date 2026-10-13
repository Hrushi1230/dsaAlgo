/**
 * Scene02Understand.tsx — Scene 02 · Understand the Question + Brute Force Idea
 * First Missing Positive (LeetCode 41) · Pattern 01 — Arrays & Hashing
 * 
 * Frame Duration: 1585 frames @ 30fps (52.83s) strictly from sync/02-understand.json
 * 
 * Mobile-First Board-Native Layout:
 * - Direct Chalkboard Green background (#19523C)
 * - Zero dark card wrappers (no rgba(10, 35, 25, ...))
 * - Two semantic columns divided by a vertical chalk line
 * - Progressive word-gated reveals matching exact audio anchors (zero spoilers)
 */

import React, { useMemo } from "react";
import { Audio, staticFile, useCurrentFrame } from "remotion";
import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme, fonts, typographyMobile } from "../../../../kit/lib/theme";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { ArrayTrackV2 } from "../../../../kit/components";
import { RoughLine } from "../../../../kit/components/RoughLine";
import { BoardHeaderMobile } from "./BoardHeaderMobile";
import syncData from "../sync/02-understand.json";

export const SCENE02_TOTAL_FRAMES = 1585;

const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

export const Scene02Understand: React.FC = () => {
  const frame = useCurrentFrame();

  // Word arrival frame for each of the 8 array elements:
  // F170: "3," | F190: "4," | F214: "-1," | F253: "1," | F269: "1," | F287: "10," | F303: "0," | F325: "2."
  const SLOT_ARRIVE_FRAMES = useMemo(() => [170, 190, 214, 253, 269, 287, 303, 325], []);

  // Negative and zero highlighted as ineligible answers at Frame 473
  const isNegativeZeroHighlighted = frame >= 473 && frame < 782;
  // Goal appears at Frame 361
  const isGoalVisible = frame >= 361;
  // Constraints appear at Frame 605
  const isConstraintsVisible = frame >= 605;
  // Candidate progression begins at Frame 782
  const isCandidateIdeaVisible = frame >= 782;

  // Active candidate: 1 at 890, 2 at 1042, 3 at 1118
  const candidateVal = useMemo(() => {
    if (frame >= 1118) return 3;
    if (frame >= 1042) return 2;
    if (frame >= 890) return 1;
    return null;
  }, [frame]);

  // Master input elements with slot-by-slot audio synchronized population
  const elements = useMemo(() => {
    const raw = [3, 4, -1, 1, 1, 10, 0, 2];
    return raw.map((val, idx) => {
      const arriveFrame = SLOT_ARRIVE_FRAMES[idx];
      // Element not spoken yet: empty slot shell
      if (frame < arriveFrame) {
        return {
          value: "",
          slotState: "default" as const,
        };
      }

      // Freshly written pop animation (first 16 frames after spoken)
      const isFreshWrite = frame >= arriveFrame && frame < arriveFrame + 16;
      if (isFreshWrite) {
        return {
          value: val,
          slotState: "current" as const,
          valueState: "current" as const,
          stroke: theme.pivot,
          fill: "rgba(255, 209, 102, 0.28)",
        };
      }

      // Explicit bright highlight for negative and zero when spoken (no dimming)
      const isWarnSlot = isNegativeZeroHighlighted && val <= 0;
      if (isWarnSlot) {
        return {
          value: val,
          slotState: "rejected" as const,
          valueState: "rejected" as const,
          stroke: theme.warn,
          fill: "rgba(255, 107, 107, 0.25)",
        };
      }

      // Bright green highlight when candidate matches
      const isMatch = candidateVal !== null && val === candidateVal;
      if (isMatch) {
        return {
          value: val,
          slotState: "confirmed" as const,
          valueState: "confirmed" as const,
          stroke: theme.good,
          fill: "rgba(60, 229, 167, 0.28)",
        };
      }

      return {
        value: val,
        slotState: "default" as const,
        valueState: "default" as const,
      };
    });
  }, [frame, SLOT_ARRIVE_FRAMES, isNegativeZeroHighlighted, candidateVal]);

  const arrayTrackHeader = useMemo(() => {
    if (frame < 170) return "UNSORTED ARRAY TRACK (8 FIXED SLOTS)";
    if (frame < 325) {
      const count = SLOT_ARRIVE_FRAMES.filter((f) => frame >= f).length;
      return `WRITING INPUT · nums (${count} / 8 VALUES SPOKEN)`;
    }
    return "INPUT ARRAY · nums = [3, 4, -1, 1, 1, 10, 0, 2] (N = 8)";
  }, [frame, SLOT_ARRIVE_FRAMES]);

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

      <Audio src={staticFile("audio/018/scence02.mp3")} />

      {/* Header */}
      <BoardHeaderMobile
        stepBadge="SCENE 02"
        stepTitle="UNDERSTAND THE QUESTION"
        algorithmName="Brute Force Formulation"
        difficulty="HARD"
      />

      {/* Center Array Track (Y: 175 to 380) */}
      <div
        style={{
          position: "absolute",
          top: 175,
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
            marginBottom: 16,
            letterSpacing: 2,
          }}
        >
          {arrayTrackHeader}
        </div>

        <ArrayTrackV2
          elements={elements}
          slotWidth={120}
          slotHeight={100}
          gap={22}
          showIndices
        />
      </div>

      {/* Board-Native Split Content Columns (Y: 460 to 880) — Zero Dark Cards */}
      <div
        style={{
          position: "absolute",
          top: 460,
          left: 100,
          right: 100,
          display: "flex",
          gap: 48,
          alignItems: "flex-start",
        }}
      >
        {/* Left Column: Objective & Constraints (width: 820px) */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 20,
            opacity: isGoalVisible ? 1 : 0,
          }}
        >
          {/* Header with yellow hand underline */}
          <div style={{ position: "relative", marginBottom: 6 }}>
            <span
              style={{
                fontFamily: fonts.hand,
                fontSize: 42,
                fontWeight: 800,
                color: theme.pivot,
                letterSpacing: "0.02em",
              }}
            >
              1 · Goal & Constraints
            </span>
            <div style={{ position: "absolute", left: 0, top: 46, pointerEvents: "none" }}>
              <RoughLine
                shape={{ kind: "line", x1: 0, y1: 4, x2: 360, y2: 6 }}
                width={380}
                height={16}
                stroke={theme.pivot}
                strokeWidth={3}
              />
            </div>
          </div>

          {/* Deductive points */}
          <div style={{ display: "flex", flexDirection: "column", gap: 18, marginTop: 12 }}>
            {/* Step ①: Core Goal */}
            {isGoalVisible && (
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    border: `2.5px solid ${theme.cyan}`,
                    color: theme.cyan,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: 800,
                    fontSize: 24,
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  1
                </div>
                <div
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 34,
                    fontWeight: 700,
                    color: theme.chalkBright,
                    lineHeight: 1.35,
                  }}
                >
                  Find the <span style={{ color: theme.good, fontWeight: 800 }}>smallest positive integer</span> missing from <span style={{ fontFamily: "monospace", color: theme.pivot }}>nums</span>.
                </div>
              </div>
            )}

            {/* Step ②: Positive integers definition */}
            {isNegativeZeroHighlighted && (
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    border: `2.5px solid ${theme.warn}`,
                    color: theme.warn,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: 800,
                    fontSize: 24,
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  2
                </div>
                <div
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 32,
                    fontWeight: 600,
                    color: theme.chalkBright,
                    lineHeight: 1.35,
                  }}
                >
                  <span style={{ color: theme.warn, fontWeight: 800 }}>Positive starts at 1:</span> Zero and negatives (<span style={{ fontFamily: "monospace", color: theme.warn }}>≤ 0</span>) can never be missing answers.
                </div>
              </div>
            )}

            {/* Step ③: Target Complexity */}
            {isConstraintsVisible && (
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    border: `2.5px solid ${theme.good}`,
                    color: theme.good,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: 800,
                    fontSize: 24,
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  3
                </div>
                <div
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 32,
                    fontWeight: 600,
                    color: theme.chalkBright,
                    lineHeight: 1.35,
                  }}
                >
                  <span style={{ color: theme.good, fontWeight: 800 }}>Target:</span> <span style={{ color: theme.pivot, fontWeight: 700 }}>O(N)</span> runtime with strictly <span style={{ color: theme.good, fontWeight: 800 }}>O(1)</span> auxiliary space.
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

        {/* Right Column: Brute Force Search Logic */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 20,
            opacity: isCandidateIdeaVisible ? 1 : 0,
          }}
        >
          {/* Header with yellow hand underline */}
          <div style={{ position: "relative", marginBottom: 6 }}>
            <span
              style={{
                fontFamily: fonts.hand,
                fontSize: 42,
                fontWeight: 800,
                color: theme.pivot,
                letterSpacing: "0.02em",
              }}
            >
              2 · Brute Force Baseline
            </span>
            <div style={{ position: "absolute", left: 0, top: 46, pointerEvents: "none" }}>
              <RoughLine
                shape={{ kind: "line", x1: 0, y1: 4, x2: 400, y2: 6 }}
                width={420}
                height={16}
                stroke={theme.pivot}
                strokeWidth={3}
              />
            </div>
          </div>

          {/* Deductive points */}
          <div style={{ display: "flex", flexDirection: "column", gap: 18, marginTop: 12 }}>
            {/* Step ①: Probe candidates sequentially */}
            {isCandidateIdeaVisible && (
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    border: `2.5px solid ${theme.cyan}`,
                    color: theme.cyan,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: 800,
                    fontSize: 24,
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  1
                </div>
                <div
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 34,
                    fontWeight: 700,
                    color: theme.chalkBright,
                    lineHeight: 1.35,
                  }}
                >
                  Probe candidates sequentially: <span style={{ color: theme.pivot, fontWeight: 800 }}>1, 2, 3, 4, 5 …</span>
                </div>
              </div>
            )}

            {/* Step ②: Current candidate probe live status */}
            {candidateVal !== null && (
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    border: `2.5px solid ${theme.pivot}`,
                    color: theme.pivot,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: 800,
                    fontSize: 24,
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  2
                </div>
                <div
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 32,
                    fontWeight: 600,
                    color: theme.chalkBright,
                    lineHeight: 1.35,
                  }}
                >
                  Checking candidate <span style={{ color: theme.pivot, fontWeight: 800 }}>{candidateVal}</span>: Scan entire array for presence.
                  {candidateVal === 1 && (
                    <span style={{ color: theme.good, display: "block", fontSize: 28, marginTop: 4 }}>
                      → Found at index 3 & 4! Next candidate.
                    </span>
                  )}
                  {candidateVal === 2 && (
                    <span style={{ color: theme.good, display: "block", fontSize: 28, marginTop: 4 }}>
                      → Found at index 7! Next candidate.
                    </span>
                  )}
                  {candidateVal === 3 && (
                    <span style={{ color: theme.good, display: "block", fontSize: 28, marginTop: 4 }}>
                      → Found at index 0! Next candidate.
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Step ③: Principle */}
            {frame >= 1250 && (
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    border: `2.5px solid ${theme.good}`,
                    color: theme.good,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: 800,
                    fontSize: 24,
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  3
                </div>
                <div
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 32,
                    fontWeight: 700,
                    color: theme.good,
                    lineHeight: 1.35,
                  }}
                >
                  Guaranteed Principle: The first positive integer absent from nums is our answer!
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
