/**
 * Scene08LimitationBridge.tsx — Scene 08 · The Space Limitation Bridge
 * First Missing Positive (LeetCode 41) · Pattern 01 — Arrays & Hashing
 * 
 * Frame Duration: 1085 frames @ 30fps (36.17s) strictly from sync/08-limitation-bridge.json
 * 
 * Mobile-First Board-Native Layout:
 * - Direct Chalkboard Green background (#19523C)
 * - Zero dark card wrappers (no rgba(10, 35, 25, ...))
 * - Direct chalkboard typography with RoughLine underlines & vertical chalk dividers
 * - Progressive word-gated reveals matching exact audio anchors (zero spoilers)
 */

import React from "react";
import { Audio, staticFile, useCurrentFrame } from "remotion";
import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme, fonts, typographyMobile } from "../../../../kit/lib/theme";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { RoughLine } from "../../../../kit/components/RoughLine";
import { BoardHeaderMobile } from "./BoardHeaderMobile";
import syncData from "../sync/08-limitation-bridge.json";

export const SCENE08_TOTAL_FRAMES = 1085;

const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

export const Scene08LimitationBridge: React.FC = () => {
  const frame = useCurrentFrame();

  const isSpaceWallTriggered = frame >= 181;
  const isCannotCarrySet = frame >= 401;
  const isInPlaceQuestionRevealed = frame >= 664;
  const isYesBreakthrough = frame >= 913;
  const isBoundTeaser = frame >= 958;

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

      <Audio src={staticFile("audio/018/scence08.mp3")} />

      {/* Header */}
      <BoardHeaderMobile
        stepBadge="SCENE 08"
        stepTitle="THE SPACE CONSTRAINT WALL"
        algorithmName="From O(N) Space to O(1) In-Place"
        difficulty="HARD"
      />

      {/* Main Board Content (Y: 175 to 880) — Zero Dark Cards */}
      <div
        style={{
          position: "absolute",
          top: 175,
          left: 100,
          right: 100,
          display: "flex",
          flexDirection: "column",
          gap: 36,
        }}
      >
        {/* Top: Requirement vs HashSet Conflict */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
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
              1 · Constraint Conflict: O(N) Memory Disqualified
            </span>
            <div style={{ position: "absolute", left: 0, top: 46, pointerEvents: "none" }}>
              <RoughLine
                shape={{ kind: "line", x1: 0, y1: 4, x2: 600, y2: 6 }}
                width={620}
                height={16}
                stroke={theme.pivot}
                strokeWidth={3}
              />
            </div>
          </div>

          <div style={{ display: "flex", gap: 48, alignItems: "center", marginTop: 8 }}>
            {/* Requirement */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 14, flex: 1 }}>
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
                ✓
              </div>
              <div style={{ fontFamily: fonts.hand, fontSize: 32, fontWeight: 700, color: theme.chalkBright }}>
                <span style={{ color: theme.accent }}>LeetCode 41 Hard Rule:</span> Time <strong style={{ color: theme.good }}>O(N)</strong> · Space <strong style={{ color: theme.good }}>O(1) Auxiliary</strong>
              </div>
            </div>

            {/* Vertical Divider */}
            <div
              style={{
                width: 2.5,
                height: 50,
                backgroundColor: "rgba(232, 228, 213, 0.35)",
              }}
            />

            {/* HashSet result */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 14, flex: 1 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  border: `2px solid ${isSpaceWallTriggered ? theme.warn : theme.pivot}`,
                  color: isSpaceWallTriggered ? theme.warn : theme.pivot,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: 800,
                  fontSize: 22,
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                {isSpaceWallTriggered ? "✗" : "!"}
              </div>
              <div style={{ fontFamily: fonts.hand, fontSize: 32, fontWeight: 700, color: theme.chalkBright }}>
                <span style={{ color: theme.pivot }}>HashSet Approach:</span> Time <strong style={{ color: theme.good }}>O(N) ✓</strong> · Space{" "}
                <strong style={{ color: isSpaceWallTriggered ? theme.warn : theme.chalkBright }}>
                  {isSpaceWallTriggered ? "O(N) ✗ (DISQUALIFIED!)" : "O(N)"}
                </strong>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div
          style={{
            height: 2,
            backgroundColor: "rgba(232, 228, 213, 0.25)",
            width: "100%",
            opacity: isCannotCarrySet ? 1 : 0,
          }}
        />

        {/* Bottom Split: Dilemma vs In-Place Breakthrough */}
        <div style={{ display: "flex", gap: 48, alignItems: "flex-start" }}>
          {/* Left Column: Core Dilemma */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 18,
              opacity: isCannotCarrySet ? 1 : 0,
            }}
          >
            {/* Header with yellow hand underline */}
            <div style={{ position: "relative", marginBottom: 6 }}>
              <span
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 40,
                  fontWeight: 800,
                  color: theme.warn,
                  letterSpacing: "0.02em",
                }}
              >
                2 · The Core Dilemma
              </span>
              <div style={{ position: "absolute", left: 0, top: 44, pointerEvents: "none" }}>
                <RoughLine
                  shape={{ kind: "line", x1: 0, y1: 4, x2: 360, y2: 6 }}
                  width={380}
                  height={16}
                  stroke={theme.warn}
                  strokeWidth={3}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 10 }}>
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
                <div style={{ fontFamily: fonts.hand, fontSize: 32, fontWeight: 700, color: theme.chalkBright, lineHeight: 1.35 }}>
                  We cannot allocate any auxiliary hash set or buffer in heap memory.
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: `2px solid ${theme.pivot}`,
                    color: theme.pivot,
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
                <div style={{ fontFamily: fonts.hand, fontSize: 30, fontWeight: 600, color: theme.chalkText, lineHeight: 1.35 }}>
                  Yet, to find the missing integer, we must still record which positive numbers exist.
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div
            style={{
              width: 2.5,
              minHeight: 280,
              backgroundColor: "rgba(232, 228, 213, 0.35)",
              alignSelf: "stretch",
              opacity: isInPlaceQuestionRevealed ? 1 : 0,
            }}
          />

          {/* Right Column: In-Place Breakthrough */}
          <div
            style={{
              flex: 1.2,
              display: "flex",
              flexDirection: "column",
              gap: 18,
              opacity: isInPlaceQuestionRevealed ? 1 : 0,
            }}
          >
            {/* Header with yellow hand underline */}
            <div style={{ position: "relative", marginBottom: 6 }}>
              <span
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 40,
                  fontWeight: 800,
                  color: isYesBreakthrough ? theme.good : theme.pivot,
                  letterSpacing: "0.02em",
                }}
              >
                3 · The In-Place Breakthrough
              </span>
              <div style={{ position: "absolute", left: 0, top: 44, pointerEvents: "none" }}>
                <RoughLine
                  shape={{ kind: "line", x1: 0, y1: 4, x2: 440, y2: 6 }}
                  width={460}
                  height={16}
                  stroke={isYesBreakthrough ? theme.good : theme.pivot}
                  strokeWidth={3}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 10 }}>
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
                  The Big Question: Can the array slots <span style={{ color: theme.pivot, fontFamily: "monospace" }}>nums[0..N-1]</span> serve as their own hash table?
                </div>
              </div>

              {isYesBreakthrough && (
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
                  <div style={{ fontFamily: fonts.hand, fontSize: 32, fontWeight: 800, color: theme.good, lineHeight: 1.35 }}>
                    YES! Use the input array in-place without allocating any extra memory!
                  </div>
                </div>
              )}

              {isBoundTeaser && (
                <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      border: `2px solid ${theme.accent}`,
                      color: theme.accent,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontWeight: 800,
                      fontSize: 22,
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    ★
                  </div>
                  <div style={{ fontFamily: fonts.hand, fontSize: 30, fontWeight: 700, color: theme.accent, lineHeight: 1.35 }}>
                    Next Key Discovery: The Pigeonhole Bound that guarantees answer is in [1 .. N+1].
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Caption Safe Zone */}
      <Captions words={captionWords} />
    </div>
  );
};
