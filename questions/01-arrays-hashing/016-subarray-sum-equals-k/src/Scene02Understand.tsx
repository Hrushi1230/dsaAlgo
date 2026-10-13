/**
 * Scene02Understand.tsx — Scene 02 · Understand the Question & Method 1 Idea
 * Subarray Sum Equals K (LeetCode 560) · Pattern 01 — Arrays & Hashing
 *
 * Board-Native Architecture (per ANTIGRAVITY_Q16_BOARD_NATIVE_REWORK.md):
 * - ZERO dark cards, ZERO opaque dashboard containers.
 * - Upper-middle: Large board-native ArrayTrackV2 ([1, -1, 2, 1, 0, -2, 3]).
 * - Semantics: [2, 1] bracketed with sum = 3; [3] single element highlighted.
 * - Lower board:
 *     Left: GOAL -> "count all contiguous, non-empty subarrays whose sum = 3"
 *     Vertical rough separator line
 *     Right: IMPORTANT NOTE -> "negative numbers allowed -> cannot stop early: [4, -1] -> 3"
 * - Method 1 Idea (F2368+): start/end pointers, lower-left variable state, decision, 4-step workflow.
 *
 * Duration: 3,423 frames @ 30fps (114.100s) strictly from sync/02-understand.json
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
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { RoughLine } from "../../../../kit/components/RoughLine";
import { ArrayTrackV2, ArrayElementItem, ArrayPointer } from "../../../../kit/components/array";
import syncData from "../sync/02-understand.json";

// ---------------------------------------------------------------------------
// Caption Normalization
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

export const Scene02Understand: React.FC = () => {
  const frame = useCurrentFrame();

  // =========================================================================
  // MASTER ARRAY ELEMENTS CONFIGURATION
  // nums = [1, -1, 2, 1, 0, -2, 3]
  // =========================================================================
  const rawValues = [1, -1, 2, 1, 0, -2, 3];

  const arrayElements: ArrayElementItem[] = useMemo(() => {
    return rawValues.map((val, idx) => {
      // Beat 04 (F716..F902): Highlight [2, 1] at indices 2 and 3
      const isEx1Match = frame >= 716 && frame < 903 && (idx === 2 || idx === 3);

      // Beat 05 (F903..F1118): Highlight [3] at index 6
      const isEx2Match = frame >= 903 && frame < 1119 && idx === 6;

      // Beat 07 (F1119..F2222): Highlight negative numbers -1 and -2
      const isNegativeHighlight = frame >= 1119 && frame < 2222 && val < 0;

      // Method 1 Loop Highlight (F2368..F3075): Active start/end window
      const isMethod1Active = frame >= 2368 && frame < 3075;
      const m1Start = 0;
      const m1End = frame < 2592 ? 0 : 3;
      const isM1Window = isMethod1Active && idx >= m1Start && idx <= m1End;

      let stroke = "rgba(255, 255, 255, 0.85)";
      let fill: string | undefined = undefined;

      if (isEx1Match) {
        stroke = theme.pivot;
        fill = "rgba(255, 209, 102, 0.12)";
      } else if (isEx2Match) {
        stroke = theme.cyan;
        fill = "rgba(92, 225, 230, 0.16)";
      } else if (isNegativeHighlight) {
        stroke = theme.warn;
        fill = "rgba(255, 118, 117, 0.14)";
      } else if (isM1Window) {
        stroke = theme.pivot;
        fill = "rgba(255, 209, 102, 0.14)";
      }

      return {
        value: val,
        stroke,
        fill,
      };
    });
  }, [frame]);

  // Method 1 Pointers (Beats 16–20: F2368..F3075)
  const pointers: ArrayPointer[] = useMemo(() => {
    if (frame < 2368) return [];

    const list: ArrayPointer[] = [
      {
        id: "ptr-start",
        index: 0,
        label: "start",
        color: theme.cyan,
        lane: 0,
      },
    ];

    if (frame >= 2480) {
      const endIdx = frame < 2592 ? 1 : 3;
      list.push({
        id: "ptr-end",
        index: endIdx,
        label: "end",
        color: theme.pivot,
        lane: 1,
      });
    }

    return list;
  }, [frame]);

  const isMethod1Phase = frame >= 2368;

  return (
    <div
      style={{
        position: "relative",
        width: 1920,
        height: 1080,
        overflow: "hidden",
        backgroundColor: "#19523C",
        fontFamily: fonts.hand,
        color: theme.chalkText,
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      {/* Audio VO */}
      <Audio src={staticFile("audio/016/scence02.mp3")} />

      {/* =====================================================================
          1. TOP HEADER ZONE (Y: 36–100) — Direct Chalkboard Typography
         ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 36,
          left: 100,
          right: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span
            style={{
              fontFamily: fonts.sans,
              fontSize: 28,
              fontWeight: 800,
              color: theme.cyan,
              letterSpacing: 2,
            }}
          >
            QUESTION 16
          </span>
          <span style={{ fontSize: 28, color: theme.chalkDim }}>—</span>
          <span
            style={{
              fontFamily: fonts.hand,
              fontSize: 34,
              fontWeight: "bold",
              color: theme.chalkText,
              letterSpacing: 1,
            }}
          >
            UNDERSTAND THE QUESTION
          </span>
        </div>

        {/* Target Badge (Direct Rough Chalk Outline Pill) */}
        <div
          style={{
            padding: "6px 24px",
            borderRadius: 16,
            border: `2px solid ${theme.pivot}`,
            fontFamily: fonts.hand,
            fontSize: 26,
            fontWeight: "bold",
            color: theme.pivot,
            letterSpacing: 1,
          }}
        >
          target k = 3
        </div>
      </div>

      {/* =====================================================================
          2. PRIMARY HERO: MASTER ARRAY TRACK (Y: 180–430)
         ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 180,
          left: 0,
          width: 1920,
          display: "flex",
          justifyContent: "center",
          zIndex: 20,
        }}
      >
        <ArrayTrackV2
          elements={arrayElements}
          slotWidth={120}
          slotHeight={110}
          gap={20}
          pointers={pointers}
          indexPlacement="top"
          indexFormat="idx [i]"
        />
      </div>

      {/* Semantic Annotation 1: [2, 1] bracket & downward callout (F716..F902) */}
      {frame >= 716 && frame < 903 && (
        <div
          style={{
            position: "absolute",
            top: 370,
            left: 775,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            zIndex: 25,
            opacity: interpolate(frame, [716, 735], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <div style={{ fontSize: 32, color: theme.pivot, lineHeight: 1 }}>↓</div>
          <div
            style={{
              fontFamily: fonts.hand,
              fontSize: 32,
              fontWeight: "bold",
              color: theme.pivot,
            }}
          >
            sum = 3
          </div>
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 24,
              fontWeight: "bold",
              color: theme.pivot,
            }}
          >
            [2, 1]
          </div>
        </div>
      )}

      {/* Semantic Annotation 2: [3] upward arrow & single-element callout (F903..F1118) */}
      {frame >= 903 && frame < 1119 && (
        <div
          style={{
            position: "absolute",
            top: 360,
            left: 1335,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            zIndex: 25,
            opacity: interpolate(frame, [903, 920], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <div style={{ fontSize: 32, color: theme.cyan, lineHeight: 1 }}>↑</div>
          <div
            style={{
              fontFamily: fonts.hand,
              fontSize: 28,
              fontWeight: "bold",
              color: theme.cyan,
            }}
          >
            single element also counts
          </div>
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 24,
              fontWeight: "bold",
              color: theme.cyan,
            }}
          >
            [3] → 3
          </div>
        </div>
      )}

      {/* =====================================================================
          3. LOWER BOARD ZONE (Y: 560–920) — 100% BOARD-NATIVE
         ===================================================================== */}
      {!isMethod1Phase ? (
        <div
          style={{
            position: "absolute",
            top: 540,
            left: 100,
            right: 100,
            display: "grid",
            gridTemplateColumns: "1fr 40px 1fr",
            zIndex: 15,
          }}
        >
          {/* Left Column: GOAL */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "inline-block" }}>
              <span
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 34,
                  fontWeight: "bold",
                  color: theme.chalkText,
                  letterSpacing: 2,
                }}
              >
                GOAL
              </span>
              <div style={{ marginTop: 4 }}>
                <RoughLine
                  shape={{ kind: "line", x1: 0, y1: 0, x2: 90, y2: 0 }}
                  width={100}
                  height={8}
                  stroke={theme.chalkText}
                  strokeWidth={2.5}
                />
              </div>
            </div>

            <div
              style={{
                fontFamily: fonts.hand,
                fontSize: 42,
                lineHeight: 1.35,
                color: theme.chalkText,
                marginTop: 8,
              }}
            >
              count all contiguous, non-empty
              <br />
              subarrays whose{" "}
              <span style={{ color: theme.good, fontWeight: "bold", textDecoration: "underline" }}>
                sum = 3
              </span>
            </div>

            {/* Misconception Cross-Out (F319..F493) */}
            {frame >= 319 && frame < 716 && (
              <div
                style={{
                  display: "flex",
                  gap: 20,
                  marginTop: 16,
                  opacity: interpolate(frame, [319, 340], [0, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  }),
                }}
              >
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 20,
                    color: theme.warn,
                    textDecoration: "line-through",
                  }}
                >
                  ✕ NOT only 1 subarray
                </span>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 20,
                    color: theme.warn,
                    textDecoration: "line-through",
                  }}
                >
                  ✕ NOT longest subarray
                </span>
              </div>
            )}
          </div>

          {/* Center Vertical Chalk Divider */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <RoughLine
              shape={{ kind: "line", x1: 0, y1: 0, x2: 0, y2: 300 }}
              width={20}
              height={320}
              stroke="rgba(255, 255, 255, 0.25)"
              strokeWidth={2}
            />
          </div>

          {/* Right Column: IMPORTANT NOTE (Negative Numbers & Sliding Window Trap) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              opacity: frame >= 1119 ? 1 : 0.15,
            }}
          >
            <div style={{ display: "inline-block" }}>
              <span
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 34,
                  fontWeight: "bold",
                  color: theme.pivot,
                  letterSpacing: 2,
                }}
              >
                IMPORTANT NOTE
              </span>
              <div style={{ marginTop: 4 }}>
                <RoughLine
                  shape={{ kind: "line", x1: 0, y1: 0, x2: 240, y2: 0 }}
                  width={260}
                  height={8}
                  stroke={theme.pivot}
                  strokeWidth={2.5}
                />
              </div>
            </div>

            <div
              style={{
                fontFamily: fonts.hand,
                fontSize: 38,
                lineHeight: 1.35,
                color: theme.pivot,
                marginTop: 8,
              }}
            >
              negative numbers allowed →
              <br />
              <span style={{ color: theme.chalkText }}>cannot stop early</span>
            </div>

            {/* Counterexample Demonstration [4, -1] -> 3 */}
            {frame >= 1400 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  marginTop: 10,
                  opacity: interpolate(frame, [1400, 1430], [0, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  }),
                }}
              >
                <div style={{ fontFamily: fonts.mono, fontSize: 30, color: theme.cyan, fontWeight: "bold" }}>
                  [4, -1] → sum = 3
                </div>
                <div style={{ fontFamily: fonts.hand, fontSize: 24, color: theme.warn }}>
                  • At 4: sum = 4 &gt; 3 (sliding window would shrink & discard!)
                </div>
                <div style={{ fontFamily: fonts.hand, fontSize: 24, color: theme.good }}>
                  • At -1: 4 + (-1) = 3 (valid match was actually reached!)
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* ===================================================================
           4. METHOD 1 IDEA SETUP (F2368..F3423) — 100% BOARD-NATIVE
           =================================================================== */
        <div
          style={{
            position: "absolute",
            top: 550,
            left: 100,
            right: 100,
            display: "grid",
            gridTemplateColumns: "360px 40px 440px 40px 1fr",
            alignItems: "start",
            zIndex: 15,
          }}
        >
          {/* Column 1: VARIABLE STATE */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div>
              <span style={{ fontFamily: fonts.hand, fontSize: 30, fontWeight: "bold", color: theme.chalkText }}>
                VARIABLE STATE
              </span>
              <div style={{ marginTop: 2 }}>
                <RoughLine
                  shape={{ kind: "line", x1: 0, y1: 0, x2: 180, y2: 0 }}
                  width={200}
                  height={6}
                  stroke={theme.chalkText}
                  strokeWidth={2}
                />
              </div>
            </div>

            <div style={{ fontFamily: fonts.hand, fontSize: 36, color: theme.chalkText, marginTop: 8 }}>
              start = <span style={{ color: theme.cyan, fontWeight: "bold" }}>0</span>
            </div>
            <div style={{ fontFamily: fonts.hand, fontSize: 36, color: theme.chalkText }}>
              end = <span style={{ color: theme.pivot, fontWeight: "bold" }}>{frame < 2592 ? "0" : "3"}</span>
            </div>
            <div style={{ fontFamily: fonts.hand, fontSize: 36, color: theme.chalkText }}>
              runningSum ={" "}
              <span style={{ color: theme.good, fontWeight: "bold" }}>{frame < 2592 ? "1" : "3"}</span>
            </div>
          </div>

          {/* Divider 1 */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <RoughLine
              shape={{ kind: "line", x1: 0, y1: 0, x2: 0, y2: 240 }}
              width={20}
              height={260}
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth={2}
            />
          </div>

          {/* Column 2: CURRENT CALCULATION & DECISION */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div>
              <span style={{ fontFamily: fonts.hand, fontSize: 30, fontWeight: "bold", color: theme.pivot }}>
                DECISION
              </span>
              <div style={{ marginTop: 2 }}>
                <RoughLine
                  shape={{ kind: "line", x1: 0, y1: 0, x2: 120, y2: 0 }}
                  width={140}
                  height={6}
                  stroke={theme.pivot}
                  strokeWidth={2}
                />
              </div>
            </div>

            <div style={{ fontFamily: fonts.mono, fontSize: 34, color: theme.chalkText, marginTop: 8 }}>
              runningSum = 1 + (-1) + 2 + 1 ={" "}
              <span style={{ color: theme.good, fontWeight: "bold" }}>3</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 8 }}>
              <span style={{ fontFamily: fonts.mono, fontSize: 40, fontWeight: "bold", color: theme.good }}>
                3 == k
              </span>
              <span style={{ fontSize: 36 }}>→</span>
              <span
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 48,
                  fontWeight: 900,
                  color: theme.good,
                  letterSpacing: 2,
                }}
              >
                YES! ✓
              </span>
            </div>
          </div>

          {/* Divider 2 */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <RoughLine
              shape={{ kind: "line", x1: 0, y1: 0, x2: 0, y2: 240 }}
              width={20}
              height={260}
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth={2}
            />
          </div>

          {/* Column 3: THE 4-STEP WORKFLOW */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div>
              <span style={{ fontFamily: fonts.hand, fontSize: 30, fontWeight: "bold", color: theme.cyan }}>
                METHOD 1 WORKFLOW
              </span>
              <div style={{ marginTop: 2 }}>
                <RoughLine
                  shape={{ kind: "line", x1: 0, y1: 0, x2: 240, y2: 0 }}
                  width={260}
                  height={6}
                  stroke={theme.cyan}
                  strokeWidth={2}
                />
              </div>
            </div>

            <div style={{ fontFamily: fonts.hand, fontSize: 28, color: theme.chalkText, marginTop: 6 }}>
              <strong style={{ color: theme.cyan }}>1.</strong> Fix start pointer (0 .. N-1)
            </div>
            <div style={{ fontFamily: fonts.hand, fontSize: 28, color: theme.chalkText }}>
              <strong style={{ color: theme.pivot }}>2.</strong> Extend end pointer (start .. N-1)
            </div>
            <div style={{ fontFamily: fonts.hand, fontSize: 28, color: theme.chalkText }}>
              <strong style={{ color: theme.good }}>3.</strong> Accumulate running sum
            </div>
            <div style={{ fontFamily: fonts.hand, fontSize: 28, color: theme.chalkText }}>
              <strong style={{ color: theme.purple }}>4.</strong> If sum == k: increment count!
            </div>
          </div>
        </div>
      )}

      {/* Word-Synchronized Captions in Safe Zone (Y: 960–1040) */}
      <Captions words={captionWords} bottom={36} />
    </div>
  );
};
