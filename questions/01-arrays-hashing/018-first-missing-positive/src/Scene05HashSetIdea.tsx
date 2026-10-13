/**
 * Scene05HashSetIdea.tsx — Scene 05 · HashSet Intuition & Duplicate Collapse
 * First Missing Positive (LeetCode 41) · Pattern 01 — Arrays & Hashing
 * 
 * Frame Duration: 1464 frames @ 30fps (48.80s) strictly from sync/05-hashset-idea.json
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
import { SemanticSlotState } from "../../../../kit/components/array/ArraySlotV2";
import { RoughLine } from "../../../../kit/components/RoughLine";
import { BoardHeaderMobile } from "./BoardHeaderMobile";
import syncData from "../sync/05-hashset-idea.json";

export const SCENE05_TOTAL_FRAMES = 1464;

const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

export const Scene05HashSetIdea: React.FC = () => {
  const frame = useCurrentFrame();

  // Timing triggers strictly from speech
  const isHashSetRevealed = frame >= 565;
  const isDuplicateHighlighted = frame >= 769;
  const isComparisonRevealed = frame >= 909;

  // Master array elements
  const elements = useMemo(() => {
    const raw = [3, 4, -1, 1, 1, 10, 0, 2];
    return raw.map((val, idx) => {
      let slotState: SemanticSlotState = "default";
      let annotation = undefined;

      if (isDuplicateHighlighted && (idx === 3 || idx === 4)) {
        slotState = idx === 3 ? "confirmed" : "rejected";
        annotation = idx === 3 ? "kept (set key)" : "duplicate (merged)";
      }

      const isFirstOne = idx === 3 && isDuplicateHighlighted;
      const isSecondOne = idx === 4 && isDuplicateHighlighted;

      return {
        value: val,
        slotState,
        valueState: isFirstOne ? ("confirmed" as const) : isSecondOne ? ("rejected" as const) : ("default" as const),
        annotation,
        fill: isFirstOne
          ? "rgba(60, 229, 167, 0.28)"
          : isSecondOne
          ? "rgba(255, 107, 107, 0.25)"
          : undefined,
        stroke: isFirstOne ? theme.good : isSecondOne ? theme.warn : undefined,
      };
    });
  }, [isDuplicateHighlighted]);

  // Set entries (collapsed unique items)
  const setEntries = useMemo(() => [-1, 0, 1, 2, 3, 4, 10], []);

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

      <Audio src={staticFile("audio/018/scence05.mp3")} />

      {/* Header */}
      <BoardHeaderMobile
        stepBadge="SCENE 05"
        stepTitle="HASHSET INTUITION"
        algorithmName="O(1) Membership Lookup"
        difficulty="HARD"
      />

      {/* Top: Source Array Track (Y: 175 to 370) */}
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
            marginBottom: 14,
            letterSpacing: 2,
          }}
        >
          INPUT ARRAY · nums = [3, 4, -1, 1, 1, 10, 0, 2] (contains duplicate 1)
        </div>

        <ArrayTrackV2
          elements={elements}
          slotWidth={120}
          slotHeight={95}
          gap={22}
          showIndices
        />
      </div>

      {/* Board-Native Split Content Columns (Y: 450 to 880) — Zero Dark Cards */}
      <div
        style={{
          position: "absolute",
          top: 450,
          left: 100,
          right: 100,
          display: "flex",
          gap: 48,
          alignItems: "flex-start",
        }}
      >
        {/* Left Column: HashSet Container & Chips */}
        <div
          style={{
            flex: 1.1,
            display: "flex",
            flexDirection: "column",
            gap: 18,
            opacity: isHashSetRevealed ? 1 : 0,
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
              1 · Hash Table: num_set = set(nums)
            </span>
            <div style={{ position: "absolute", left: 0, top: 46, pointerEvents: "none" }}>
              <RoughLine
                shape={{ kind: "line", x1: 0, y1: 4, x2: 440, y2: 6 }}
                width={460}
                height={16}
                stroke={theme.pivot}
                strokeWidth={3}
              />
            </div>
          </div>

          {/* Set chips rendered directly on chalkboard */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <span style={{ fontFamily: fonts.hand, fontSize: 32, fontWeight: 700, color: theme.chalkDim }}>
                Unique Keys:
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {setEntries.map((val) => {
                  const isDupOne = val === 1 && isDuplicateHighlighted;
                  return (
                    <div
                      key={val}
                      style={{
                        fontFamily: '"SFMono-Regular", Consolas, monospace',
                        fontSize: 28,
                        fontWeight: 800,
                        padding: "6px 16px",
                        borderRadius: 8,
                        border: `2px solid ${isDupOne ? theme.pivot : theme.good}`,
                        color: isDupOne ? theme.pivot : theme.good,
                      }}
                    >
                      {val}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Deductive points */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 10 }}>
              {isDuplicateHighlighted && (
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
                    Duplicate <span style={{ color: theme.pivot }}>1</span> collapses: Stores exactly <span style={{ color: theme.good }}>7 unique keys</span>.
                  </div>
                </div>
              )}

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
                <div style={{ fontFamily: fonts.hand, fontSize: 32, fontWeight: 700, color: theme.chalkBright, lineHeight: 1.35 }}>
                  Lookup Acceleration: Answers <span style={{ color: theme.good }}>“Is candidate present?”</span> in <span style={{ color: theme.pivot, fontWeight: 800 }}>O(1)</span> expected time!
                </div>
              </div>
            </div>
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

        {/* Right Column: Performance Tradeoff */}
        <div
          style={{
            flex: 0.9,
            display: "flex",
            flexDirection: "column",
            gap: 18,
            opacity: isComparisonRevealed ? 1 : 0,
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
              2 · Complexity Tradeoff
            </span>
            <div style={{ position: "absolute", left: 0, top: 46, pointerEvents: "none" }}>
              <RoughLine
                shape={{ kind: "line", x1: 0, y1: 4, x2: 380, y2: 6 }}
                width={400}
                height={16}
                stroke={theme.pivot}
                strokeWidth={3}
              />
            </div>
          </div>

          {/* Points */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 10 }}>
            {/* Brute Force comparison */}
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
                1
              </div>
              <div style={{ fontFamily: fonts.hand, fontSize: 32, fontWeight: 600, color: theme.chalkBright, lineHeight: 1.35 }}>
                <span style={{ color: theme.warn, fontWeight: 800 }}>Brute Force:</span> Repeated scans → <strong style={{ color: theme.warn }}>O(N²) Time</strong>, O(1) Space.
              </div>
            </div>

            {/* HashSet comparison */}
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
              <div style={{ fontFamily: fonts.hand, fontSize: 32, fontWeight: 600, color: theme.chalkBright, lineHeight: 1.35 }}>
                <span style={{ color: theme.good, fontWeight: 800 }}>HashSet Approach:</span> O(1) check → <strong style={{ color: theme.good }}>O(N) Time</strong>, <strong style={{ color: theme.warn }}>O(N) Space</strong>.
              </div>
            </div>

            {/* Key takeaway */}
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
                3
              </div>
              <div style={{ fontFamily: fonts.hand, fontSize: 32, fontWeight: 700, color: theme.chalkBright, lineHeight: 1.35 }}>
                Tradeoff: Linear runtime achieved, but auxiliary hash set costs <span style={{ color: theme.warn }}>O(N) extra memory</span>.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Caption Safe Zone */}
      <Captions words={captionWords} />
    </div>
  );
};
