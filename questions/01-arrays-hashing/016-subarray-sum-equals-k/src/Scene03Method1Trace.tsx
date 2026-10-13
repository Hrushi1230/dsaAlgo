/**
 * Scene03Method1Trace.tsx — Scene 03 · Method 1 Full Trace (Running Sum Enumeration)
 * Subarray Sum Equals K (LeetCode 560) · Pattern 01 — Arrays & Hashing
 *
 * Implements the Complete Brute-Force Trace:
 * - 100% Kit Components: ArrayTrackV2, RoughBox, Captions, ChalkboardBackground, ChalkFilters
 * - Total Duration: 7,627 frames @ 30fps (254.240s) strictly from sync/03-method1-trace.json
 * - Visual language strictly adheres to @dsa/kit design tokens
 * - Full step-by-step state machine with zero guessed frame values
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
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { RoughBox } from "../../../../kit/components/RoughBox";
import { RoughLine } from "../../../../kit/components/RoughLine";
import { ArrayTrackV2, ArrayElementItem, ArrayPointer } from "../../../../kit/components/array";
import syncData from "../sync/03-method1-trace.json";

// ---------------------------------------------------------------------------
// Caption Normalization
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

interface StepState {
  start: number;
  end: number | null;
  val: number | null;
  prevSum: number;
  sum: number;
  isMatch: boolean;
  matchNum?: number;
  answer: number;
  status: string;
  isReset?: boolean;
}

const RadiatingTicks: React.FC<{ color?: string; size?: number }> = ({
  color = theme.good,
  size = 36,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    style={{ overflow: "visible", flexShrink: 0, marginLeft: 6 }}
  >
    <line x1="8" y1="8" x2="22" y2="4" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <line x1="10" y1="18" x2="26" y2="18" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <line x1="8" y1="28" x2="22" y2="32" stroke={color} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const Scene03Method1Trace: React.FC = () => {
  const frame = useCurrentFrame();

  // =========================================================================
  // MASTER ARRAY ELEMENTS CONFIGURATION
  // nums = [1, -1, 2, 1, 0, -2, 3]
  // =========================================================================
  const rawValues = [1, -1, 2, 1, 0, -2, 3];

  // =========================================================================
  // EXACT STEP-BY-STEP TRACE STATE MACHINE
  // Strictly verified against audio sync word timestamps
  // =========================================================================
  const currentStep: StepState = useMemo(() => {
    // Phase 1: Intro Setup (F0..F218)
    if (frame < 218) {
      return {
        start: 0,
        end: null,
        val: null,
        prevSum: 0,
        sum: 0,
        isMatch: false,
        answer: 0,
        status: "Initialize outer loop: start = 0, runningSum = 0, answer = 0",
        isReset: true,
      };
    }

    // Phase 2: Outer loop start = 0 (F218..F1943)
    if (frame < 403) {
      return {
        start: 0,
        end: 0,
        val: 1,
        prevSum: 0,
        sum: 1,
        isMatch: false,
        answer: 0,
        status: "nums[0] = 1 | runningSum = 0 + 1 = 1 | sum ≠ 3 (No match)",
      };
    }
    if (frame < 650) {
      return {
        start: 0,
        end: 1,
        val: -1,
        prevSum: 1,
        sum: 0,
        isMatch: false,
        answer: 0,
        status: "nums[1] = -1 | runningSum = 1 + (-1) = 0 | sum ≠ 3 (No match)",
      };
    }
    if (frame < 833) {
      return {
        start: 0,
        end: 2,
        val: 2,
        prevSum: 0,
        sum: 2,
        isMatch: false,
        answer: 0,
        status: "nums[2] = 2 | runningSum = 0 + 2 = 2 | sum ≠ 3 (No match)",
      };
    }
    if (frame < 1085) {
      return {
        start: 0,
        end: 3,
        val: 1,
        prevSum: 2,
        sum: 3,
        isMatch: true,
        matchNum: 1,
        answer: frame < 1036 ? 0 : 1,
        status: "nums[3] = 1 | runningSum = 2 + 1 = 3 == k | ✔ MATCH #1 found: [1, -1, 2, 1]",
      };
    }
    if (frame < 1351) {
      return {
        start: 0,
        end: 4,
        val: 0,
        prevSum: 3,
        sum: 3,
        isMatch: true,
        matchNum: 2,
        answer: frame < 1300 ? 1 : 2,
        status: "nums[4] = 0 | runningSum = 3 + 0 = 3 == k | ✔ MATCH #2 found: [1, -1, 2, 1, 0]",
      };
    }
    if (frame < 1561) {
      return {
        start: 0,
        end: 5,
        val: -2,
        prevSum: 3,
        sum: 1,
        isMatch: false,
        answer: 2,
        status: "nums[5] = -2 | runningSum = 3 + (-2) = 1 | sum ≠ 3 (No match)",
      };
    }
    if (frame < 1750) {
      return {
        start: 0,
        end: 6,
        val: 3,
        prevSum: 1,
        sum: 4,
        isMatch: false,
        answer: 2,
        status: "nums[6] = 3 | runningSum = 1 + 3 = 4 | sum ≠ 3 (No match)",
      };
    }
    if (frame < 1943) {
      return {
        start: 0,
        end: 6,
        val: null,
        prevSum: 1,
        sum: 4,
        isMatch: false,
        answer: 2,
        status: "start = 0 completed! Found 2 valid subarrays. Total matches: 2",
      };
    }

    // Phase 3: Outer loop start = 1 (F1943..F3125)
    if (frame < 2066) {
      return {
        start: 1,
        end: null,
        val: null,
        prevSum: 0,
        sum: 0,
        isMatch: false,
        answer: 2,
        status: "Advance start to index 1. Reset runningSum = 0.",
        isReset: true,
      };
    }
    if (frame < 2259) {
      return {
        start: 1,
        end: 1,
        val: -1,
        prevSum: 0,
        sum: -1,
        isMatch: false,
        answer: 2,
        status: "nums[1] = -1 | runningSum = 0 + (-1) = -1 | sum ≠ 3 (No match)",
      };
    }
    if (frame < 2428) {
      return {
        start: 1,
        end: 2,
        val: 2,
        prevSum: -1,
        sum: 1,
        isMatch: false,
        answer: 2,
        status: "nums[2] = 2 | runningSum = -1 + 2 = 1 | sum ≠ 3 (No match)",
      };
    }
    if (frame < 2564) {
      return {
        start: 1,
        end: 3,
        val: 1,
        prevSum: 1,
        sum: 2,
        isMatch: false,
        answer: 2,
        status: "nums[3] = 1 | runningSum = 1 + 1 = 2 | sum ≠ 3 (No match)",
      };
    }
    if (frame < 2705) {
      return {
        start: 1,
        end: 4,
        val: 0,
        prevSum: 2,
        sum: 2,
        isMatch: false,
        answer: 2,
        status: "nums[4] = 0 | runningSum = 2 + 0 = 2 | sum ≠ 3 (No match)",
      };
    }
    if (frame < 2869) {
      return {
        start: 1,
        end: 5,
        val: -2,
        prevSum: 2,
        sum: 0,
        isMatch: false,
        answer: 2,
        status: "nums[5] = -2 | runningSum = 2 + (-2) = 0 | sum ≠ 3 (No match)",
      };
    }
    if (frame < 3093) {
      return {
        start: 1,
        end: 6,
        val: 3,
        prevSum: 0,
        sum: 3,
        isMatch: true,
        matchNum: 3,
        answer: frame < 3041 ? 2 : 3,
        status: "nums[6] = 3 | runningSum = 0 + 3 = 3 == k | ✔ MATCH #3 found: [-1, 2, 1, 0, -2, 3]",
      };
    }
    if (frame < 3125) {
      return {
        start: 1,
        end: 6,
        val: null,
        prevSum: 0,
        sum: 3,
        isMatch: false,
        answer: 3,
        status: "start = 1 completed! Found 1 valid subarray. Total matches: 3",
      };
    }

    // Phase 4: Outer loop start = 2 (F3125..F4199)
    if (frame < 3242) {
      return {
        start: 2,
        end: null,
        val: null,
        prevSum: 0,
        sum: 0,
        isMatch: false,
        answer: 3,
        status: "Advance start to index 2. Reset runningSum = 0.",
        isReset: true,
      };
    }
    if (frame < 3396) {
      return {
        start: 2,
        end: 2,
        val: 2,
        prevSum: 0,
        sum: 2,
        isMatch: false,
        answer: 3,
        status: "nums[2] = 2 | runningSum = 0 + 2 = 2 | sum ≠ 3 (No match)",
      };
    }
    if (frame < 3595) {
      return {
        start: 2,
        end: 3,
        val: 1,
        prevSum: 2,
        sum: 3,
        isMatch: true,
        matchNum: 4,
        answer: frame < 3561 ? 3 : 4,
        status: "nums[3] = 1 | runningSum = 2 + 1 = 3 == k | ✔ MATCH #4 found: [2, 1]",
      };
    }
    if (frame < 3827) {
      return {
        start: 2,
        end: 4,
        val: 0,
        prevSum: 3,
        sum: 3,
        isMatch: true,
        matchNum: 5,
        answer: frame < 3784 ? 4 : 5,
        status: "nums[4] = 0 | runningSum = 3 + 0 = 3 == k | ✔ MATCH #5 found: [2, 1, 0]",
      };
    }
    if (frame < 4033) {
      return {
        start: 2,
        end: 5,
        val: -2,
        prevSum: 3,
        sum: 1,
        isMatch: false,
        answer: 5,
        status: "nums[5] = -2 | runningSum = 3 + (-2) = 1 | sum ≠ 3 (No match)",
      };
    }
    if (frame < 4159) {
      return {
        start: 2,
        end: 6,
        val: 3,
        prevSum: 1,
        sum: 4,
        isMatch: false,
        answer: 5,
        status: "nums[6] = 3 | runningSum = 1 + 3 = 4 | sum ≠ 3 (No match)",
      };
    }
    if (frame < 4199) {
      return {
        start: 2,
        end: 6,
        val: null,
        prevSum: 1,
        sum: 4,
        isMatch: false,
        answer: 5,
        status: "start = 2 completed! Found 2 valid subarrays. Total matches: 5",
      };
    }

    // Phase 5: Outer loop start = 3 (F4199..F5021)
    if (frame < 4304) {
      return {
        start: 3,
        end: null,
        val: null,
        prevSum: 0,
        sum: 0,
        isMatch: false,
        answer: 5,
        status: "Advance start to index 3. Reset runningSum = 0.",
        isReset: true,
      };
    }
    if (frame < 4474) {
      return {
        start: 3,
        end: 3,
        val: 1,
        prevSum: 0,
        sum: 1,
        isMatch: false,
        answer: 5,
        status: "nums[3] = 1 | runningSum = 0 + 1 = 1 | sum ≠ 3 (No match)",
      };
    }
    if (frame < 4608) {
      return {
        start: 3,
        end: 4,
        val: 0,
        prevSum: 1,
        sum: 1,
        isMatch: false,
        answer: 5,
        status: "nums[4] = 0 | runningSum = 1 + 0 = 1 | sum ≠ 3 (No match)",
      };
    }
    if (frame < 4789) {
      return {
        start: 3,
        end: 5,
        val: -2,
        prevSum: 1,
        sum: -1,
        isMatch: false,
        answer: 5,
        status: "nums[5] = -2 | runningSum = 1 + (-2) = -1 | sum ≠ 3 (No match)",
      };
    }
    if (frame < 4970) {
      return {
        start: 3,
        end: 6,
        val: 3,
        prevSum: -1,
        sum: 2,
        isMatch: false,
        answer: 5,
        status: "nums[6] = 3 | runningSum = -1 + 3 = 2 | sum ≠ 3 (No match)",
      };
    }
    if (frame < 5021) {
      return {
        start: 3,
        end: 6,
        val: null,
        prevSum: -1,
        sum: 2,
        isMatch: false,
        answer: 5,
        status: "start = 3 completed! No matches found.",
      };
    }

    // Phase 6: Outer loop start = 4 (F5021..F5629)
    if (frame < 5108) {
      return {
        start: 4,
        end: null,
        val: null,
        prevSum: 0,
        sum: 0,
        isMatch: false,
        answer: 5,
        status: "Advance start to index 4. Reset runningSum = 0.",
        isReset: true,
      };
    }
    if (frame < 5237) {
      return {
        start: 4,
        end: 4,
        val: 0,
        prevSum: 0,
        sum: 0,
        isMatch: false,
        answer: 5,
        status: "nums[4] = 0 | runningSum = 0 + 0 = 0 | sum ≠ 3 (No match)",
      };
    }
    if (frame < 5435) {
      return {
        start: 4,
        end: 5,
        val: -2,
        prevSum: 0,
        sum: -2,
        isMatch: false,
        answer: 5,
        status: "nums[5] = -2 | runningSum = 0 + (-2) = -2 | sum ≠ 3 (No match)",
      };
    }
    if (frame < 5584) {
      return {
        start: 4,
        end: 6,
        val: 3,
        prevSum: -2,
        sum: 1,
        isMatch: false,
        answer: 5,
        status: "nums[6] = 3 | runningSum = -2 + 3 = 1 | sum ≠ 3 (No match)",
      };
    }
    if (frame < 5629) {
      return {
        start: 4,
        end: 6,
        val: null,
        prevSum: -2,
        sum: 1,
        isMatch: false,
        answer: 5,
        status: "start = 4 completed! No matches found.",
      };
    }

    // Phase 7: Outer loop start = 5 (F5629..F6109)
    if (frame < 5743) {
      return {
        start: 5,
        end: null,
        val: null,
        prevSum: 0,
        sum: 0,
        isMatch: false,
        answer: 5,
        status: "Advance start to index 5. Reset runningSum = 0.",
        isReset: true,
      };
    }
    if (frame < 5921) {
      return {
        start: 5,
        end: 5,
        val: -2,
        prevSum: 0,
        sum: -2,
        isMatch: false,
        answer: 5,
        status: "nums[5] = -2 | runningSum = 0 + (-2) = -2 | sum ≠ 3 (No match)",
      };
    }
    if (frame < 6080) {
      return {
        start: 5,
        end: 6,
        val: 3,
        prevSum: -2,
        sum: 1,
        isMatch: false,
        answer: 5,
        status: "nums[6] = 3 | runningSum = -2 + 3 = 1 | sum ≠ 3 (No match)",
      };
    }
    if (frame < 6109) {
      return {
        start: 5,
        end: 6,
        val: null,
        prevSum: -2,
        sum: 1,
        isMatch: false,
        answer: 5,
        status: "start = 5 completed! No matches found.",
      };
    }

    // Phase 8: Outer loop start = 6 (F6109..F6442)
    if (frame < 6241) {
      return {
        start: 6,
        end: null,
        val: null,
        prevSum: 0,
        sum: 0,
        isMatch: false,
        answer: 5,
        status: "Advance start to index 6. Reset runningSum = 0.",
        isReset: true,
      };
    }
    if (frame < 6442) {
      return {
        start: 6,
        end: 6,
        val: 3,
        prevSum: 0,
        sum: 3,
        isMatch: true,
        matchNum: 6,
        answer: frame < 6379 ? 5 : 6,
        status: "nums[6] = 3 | runningSum = 0 + 3 = 3 == k | ✔ MATCH #6 found: [3]",
      };
    }

    // Phase 9: All Starts Processed & Overlapping Analysis (F6442..F7627)
    return {
      start: 6,
      end: 6,
      val: 3,
      prevSum: 0,
      sum: 3,
      isMatch: false,
      answer: 6,
      status: frame < 6682
        ? "All starting positions processed! Final Answer: 6 matches."
        : frame < 7546
        ? "The Overlapping Work Problem: Repeatedly computing sums for identical subarrays!"
        : "Next: Translating Method 1 into Python / Java / C++ code.",
    };
  }, [frame]);

  // =========================================================================
  // ARRAY VISUAL STYLING
  // =========================================================================
  const arrayElements: ArrayElementItem[] = useMemo(() => {
    return rawValues.map((val, idx) => {
      // In active window [start..end]
      const isInWindow =
        currentStep.end !== null &&
        idx >= currentStep.start &&
        idx <= currentStep.end;

      const isCurrentEnd = currentStep.end === idx;
      const isCurrentStart = currentStep.start === idx;

      let slotState: any = "default";
      let fill: string | undefined = "transparent";
      let stroke: string | undefined = "rgba(255, 255, 255, 0.85)";

      if (currentStep.isMatch && isInWindow) {
        slotState = "match";
        fill = "rgba(60, 229, 167, 0.16)";
        stroke = theme.good;
      } else if (isCurrentEnd) {
        slotState = "active";
        fill = "rgba(255, 209, 102, 0.14)";
        stroke = theme.pivot;
      } else if (isInWindow) {
        slotState = "comparing";
        fill = "rgba(255, 209, 102, 0.05)";
        stroke = "rgba(255, 209, 102, 0.6)";
      } else if (isCurrentStart) {
        stroke = theme.cyan;
      }

      return {
        value: val,
        slotState,
        fill,
        stroke,
      };
    });
  }, [currentStep]);

  // Pointers for start and end
  const pointers: ArrayPointer[] = useMemo(() => {
    if (frame >= 6682) {
      // During overlap analysis card, hide pointer lane
      return [];
    }

    const res: ArrayPointer[] = [];

    // start pointer
    res.push({
      id: "start",
      label: `start = ${currentStep.start}`,
      index: currentStep.start,
      color: theme.cyan,
      lane: 0,
    });

    // end pointer
    if (currentStep.end !== null) {
      const isOverlap = currentStep.start === currentStep.end;
      res.push({
        id: "end",
        label: `end = ${currentStep.end}`,
        index: currentStep.end,
        color: currentStep.isMatch ? theme.good : theme.pivot,
        lane: isOverlap ? 1 : 0,
      });
    }

    return res;
  }, [currentStep, frame]);

  // Audio source
  const audioSrc = staticFile("audio/016/03-method1-trace.mp3");

  // Overlap analysis breakdown visible during F6682..F7546
  const isOverlapPhase = frame >= 6682 && frame < 7546;
  const isNextCodePhase = frame >= 7546;

  // List of discovered matches
  const matchBadges = [
    { num: 1, range: "[0..3]", sub: "[1, -1, 2, 1]", showAt: 1009 },
    { num: 2, range: "[0..4]", sub: "[1, -1, 2, 1, 0]", showAt: 1267 },
    { num: 3, range: "[1..6]", sub: "[-1, 2, 1, 0, -2, 3]", showAt: 3015 },
    { num: 4, range: "[2..3]", sub: "[2, 1]", showAt: 3514 },
    { num: 5, range: "[2..4]", sub: "[2, 1, 0]", showAt: 3748 },
    { num: 6, range: "[6..6]", sub: "[3]", showAt: 6352 },
  ];

  return (
    <div
      style={{
        position: "relative",
        width: 1920,
        height: 1080,
        overflow: "hidden",
        backgroundColor: theme.boardBg,
        fontFamily: fonts.hand,
        color: theme.chalkText,
      }}
    >
      <ChalkFilters />
      <ChalkboardBackground />

      <Audio src={audioSrc} />

      {/* ===================================================================
          1. HEADER (Y: 36 .. 90)
          =================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 36,
          left: 60,
          right: 60,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span
            style={{
              fontFamily: fonts.hand,
              fontSize: 30,
              fontWeight: "bold",
              letterSpacing: 2,
              color: theme.cyan,
            }}
          >
            QUESTION 16
          </span>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 26 }}>—</span>
          <span
            style={{
              fontFamily: fonts.hand,
              fontSize: 26,
              fontWeight: "bold",
              letterSpacing: 1.5,
              color: theme.chalkText,
            }}
          >
            METHOD 1 TRACE: RUNNING SUM ENUMERATION
          </span>
        </div>

        {/* Target Badge */}
        <div
          style={{
            position: "relative",
            width: 210,
            height: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0 }}>
            <RoughBox
              width={210}
              height={48}
              stroke={theme.pivot}
              strokeWidth={2}
              fill="transparent"
            />
          </div>
          <span
            style={{
              position: "relative",
              zIndex: 2,
              fontFamily: fonts.hand,
              fontSize: 24,
              fontWeight: "bold",
              color: theme.pivot,
              whiteSpace: "nowrap",
            }}
          >
            target k = 3
          </span>
        </div>
      </div>

      {/* ===================================================================
          2. MASTER ARRAY TRACK (Y: 170 .. 420)
          =================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 170,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity: isOverlapPhase || isNextCodePhase ? 0.35 : 1,
          transition: "opacity 0.3s ease",
          zIndex: 5,
        }}
      >
        <ArrayTrackV2
          elements={arrayElements}
          pointers={pointers}
          slotWidth={130}
          slotHeight={104}
          gap={16}
          showIndices={true}
          indexPlacement="top"
          indexFormat="idx [i]"
        />
      </div>

      {/* ===================================================================
          3. CENTER WORKSPACE: 3-COLUMN BOARD-NATIVE SLATE (Y: 540 .. 900)
          =================================================================== */}
      {!isOverlapPhase && !isNextCodePhase && (
        <div
          style={{
            position: "absolute",
            top: 540,
            left: 80,
            right: 80,
            display: "grid",
            gridTemplateColumns: "360px 40px 880px 40px 360px",
            alignItems: "start",
            zIndex: 10,
          }}
        >
          {/* Column 1: VARIABLE STATE */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div>
              <span
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 32,
                  fontWeight: "bold",
                  color: theme.chalkText,
                  letterSpacing: 1,
                }}
              >
                VARIABLE STATE
              </span>
              <div style={{ marginTop: 2 }}>
                <RoughLine
                  shape={{ kind: "line", x1: 0, y1: 0, x2: 240, y2: 0 }}
                  width={260}
                  height={6}
                  stroke="rgba(255, 255, 255, 0.4)"
                  strokeWidth={2}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
              <div style={{ fontFamily: fonts.hand, fontSize: 44, color: theme.chalkText }}>
                start = <span style={{ color: theme.pivot, fontWeight: "bold" }}>{currentStep.start}</span>
              </div>
              <div style={{ fontFamily: fonts.hand, fontSize: 44, color: theme.chalkText }}>
                end = <span style={{ color: theme.pivot, fontWeight: "bold" }}>{currentStep.end !== null ? currentStep.end : "—"}</span>
              </div>
              <div style={{ fontFamily: fonts.hand, fontSize: 44, color: theme.chalkText }}>
                runningSum ={" "}
                <span style={{ color: theme.pivot, fontWeight: "bold" }}>
                  {currentStep.isReset ? 0 : currentStep.prevSum}
                </span>
              </div>
            </div>
          </div>

          {/* Divider 1 */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <RoughLine
              shape={{ kind: "line", x1: 0, y1: 0, x2: 0, y2: 260 }}
              width={20}
              height={280}
              stroke="rgba(255, 255, 255, 0.25)"
              strokeWidth={2}
            />
          </div>

          {/* Column 2: CURRENT CALCULATION / DECISION */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div>
              <span
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 32,
                  fontWeight: "bold",
                  color: theme.chalkText,
                  letterSpacing: 1,
                }}
              >
                CURRENT CALCULATION / DECISION
              </span>
              <div style={{ marginTop: 2 }}>
                <RoughLine
                  shape={{ kind: "line", x1: 0, y1: 0, x2: 440, y2: 0 }}
                  width={460}
                  height={6}
                  stroke="rgba(255, 255, 255, 0.4)"
                  strokeWidth={2}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 18, marginTop: 12 }}>
              <div style={{ fontFamily: fonts.hand, fontSize: 52, color: theme.chalkText }}>
                runningSum ={" "}
                <span style={{ color: theme.cyan, fontWeight: "bold" }}>{currentStep.prevSum}</span>
                {" + "}
                <span style={{ color: theme.pivot, fontWeight: "bold" }}>
                  {currentStep.val !== null ? currentStep.val : 0}
                </span>
                {" = "}
                <span
                  style={{
                    color: currentStep.isMatch ? theme.good : theme.cyan,
                    fontWeight: "bold",
                  }}
                >
                  {currentStep.sum}
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <span
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 56,
                    fontWeight: "bold",
                    color: currentStep.isMatch ? theme.good : theme.cyan,
                  }}
                >
                  {currentStep.sum} == k
                </span>
                <span style={{ fontSize: 44, color: "rgba(255, 255, 255, 0.5)" }}>→</span>
                {currentStep.isMatch ? (
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
                    <span
                      style={{
                        fontFamily: fonts.hand,
                        fontSize: 64,
                        fontWeight: 900,
                        color: theme.good,
                        letterSpacing: 2,
                      }}
                    >
                      YES
                    </span>
                    <RadiatingTicks color={theme.good} size={36} />
                  </div>
                ) : (
                  <span style={{ fontFamily: fonts.hand, fontSize: 52, fontWeight: "bold", color: theme.warn }}>
                    NO
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Divider 2 */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <RoughLine
              shape={{ kind: "line", x1: 0, y1: 0, x2: 0, y2: 260 }}
              width={20}
              height={280}
              stroke="rgba(255, 255, 255, 0.25)"
              strokeWidth={2}
            />
          </div>

          {/* Column 3: ANSWER (MATCH COUNT) */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div>
              <span
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 32,
                  fontWeight: "bold",
                  color: theme.chalkText,
                  letterSpacing: 1,
                }}
              >
                ANSWER (MATCH COUNT)
              </span>
              <div style={{ marginTop: 2 }}>
                <RoughLine
                  shape={{ kind: "line", x1: 0, y1: 0, x2: 280, y2: 0 }}
                  width={300}
                  height={6}
                  stroke="rgba(255, 255, 255, 0.4)"
                  strokeWidth={2}
                />
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 18 }}>
              {currentStep.isMatch ? (
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <span style={{ fontFamily: fonts.hand, fontSize: 64, color: "rgba(255, 255, 255, 0.4)" }}>
                    {Math.max(0, (currentStep.matchNum ?? currentStep.answer) - 1)}
                  </span>
                  <span style={{ fontSize: 44, color: "rgba(255, 255, 255, 0.5)" }}>→</span>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontFamily: fonts.hand, fontSize: 84, fontWeight: 900, color: theme.good }}>
                      {currentStep.matchNum ?? currentStep.answer}
                    </span>
                    <RadiatingTicks color={theme.good} size={40} />
                  </div>
                </div>
              ) : (
                <span style={{ fontFamily: fonts.hand, fontSize: 84, fontWeight: 900, color: theme.good }}>
                  {currentStep.answer}
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================
          4. OVERLAPPING WORK ANALYSIS (F6682 .. F7546) — BOARD NATIVE
          =================================================================== */}
      {isOverlapPhase && (
        <div
          style={{
            position: "absolute",
            top: 480,
            left: 100,
            right: 100,
            zIndex: 20,
          }}
        >
          <div
            style={{
              fontFamily: fonts.hand,
              fontSize: 36,
              fontWeight: "bold",
              color: theme.warn,
              letterSpacing: 2,
              marginBottom: 24,
              textAlign: "center",
            }}
          >
            THE OVERLAPPING WORK PROBLEM — WHY METHOD 1 IS O(N²)
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 24,
              marginBottom: 28,
            }}
          >
            <div style={{ position: "relative", height: 180, padding: "16px 20px" }}>
              <div style={{ position: "absolute", top: 0, left: 0 }}>
                <RoughBox
                  width={520}
                  height={180}
                  stroke={theme.cyan}
                  strokeWidth={2}
                  fill="transparent"
                />
              </div>
              <div style={{ position: "relative", zIndex: 2 }}>
                <div
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 28,
                    fontWeight: "bold",
                    color: theme.cyan,
                    marginBottom: 6,
                  }}
                >
                  Outer start = 0
                </div>
                <div style={{ fontFamily: fonts.hand, fontSize: 22, color: theme.chalkText, lineHeight: 1.45 }}>
                  Computes running sums for:
                  <div style={{ color: theme.pivot, marginTop: 4 }}>
                    [1] → [1, -1] → [1, -1, 2] → [1, -1, 2, 1] ...
                  </div>
                </div>
              </div>
            </div>

            <div style={{ position: "relative", height: 180, padding: "16px 20px" }}>
              <div style={{ position: "absolute", top: 0, left: 0 }}>
                <RoughBox
                  width={520}
                  height={180}
                  stroke={theme.warn}
                  strokeWidth={2}
                  fill="transparent"
                />
              </div>
              <div style={{ position: "relative", zIndex: 2 }}>
                <div
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 28,
                    fontWeight: "bold",
                    color: theme.warn,
                    marginBottom: 6,
                  }}
                >
                  Outer start = 1
                </div>
                <div style={{ fontFamily: fonts.hand, fontSize: 22, color: theme.chalkText, lineHeight: 1.45 }}>
                  Discards everything & recalculates:
                  <div style={{ color: theme.pivot, marginTop: 4 }}>
                    [-1] → [-1, 2] → [-1, 2, 1] ...
                  </div>
                  <span style={{ fontSize: 18, color: theme.warn }}>
                    (Repeats identical inner sub-ranges!)
                  </span>
                </div>
              </div>
            </div>

            <div style={{ position: "relative", height: 180, padding: "16px 20px" }}>
              <div style={{ position: "absolute", top: 0, left: 0 }}>
                <RoughBox
                  width={520}
                  height={180}
                  stroke={theme.warn}
                  strokeWidth={2}
                  fill="transparent"
                />
              </div>
              <div style={{ position: "relative", zIndex: 2 }}>
                <div
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 28,
                    fontWeight: "bold",
                    color: theme.warn,
                    marginBottom: 6,
                  }}
                >
                  Outer start = 2
                </div>
                <div style={{ fontFamily: fonts.hand, fontSize: 22, color: theme.chalkText, lineHeight: 1.45 }}>
                  Again recalculates from scratch:
                  <div style={{ color: theme.pivot, marginTop: 4 }}>
                    [2] → [2, 1] → [2, 1, 0] ...
                  </div>
                  <span style={{ fontSize: 18, color: theme.warn }}>
                    (Recomputes sums we already visited!)
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", padding: "14px 32px" }}>
              <div style={{ position: "absolute", top: 0, left: 0 }}>
                <RoughBox
                  width={940}
                  height={60}
                  stroke={theme.warn}
                  strokeWidth={2}
                  fill="transparent"
                />
              </div>
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  fontFamily: fonts.hand,
                  fontSize: 24,
                  fontWeight: "bold",
                  color: theme.chalkText,
                  textAlign: "center",
                }}
              >
                Total Subarrays Checked: N × (N + 1) / 2 = 28 checks → Repeated Work = O(N²) Time
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================
          5. NEXT STEP: CODE TRANSITION (F7546 .. F7627) — BOARD NATIVE
          =================================================================== */}
      {isNextCodePhase && (
        <div
          style={{
            position: "absolute",
            top: 480,
            left: 360,
            width: 1200,
            display: "flex",
            justifyContent: "center",
            zIndex: 20,
          }}
        >
          <div style={{ position: "relative", padding: "36px 48px", textAlign: "center" }}>
            <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)" }}>
              <RoughBox
                width={1000}
                height={180}
                stroke={theme.cyan}
                strokeWidth={2.5}
                fill="transparent"
              />
            </div>
            <div style={{ position: "relative", zIndex: 2 }}>
              <div
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 36,
                  fontWeight: 800,
                  color: theme.cyan,
                  letterSpacing: 2,
                  marginBottom: 16,
                }}
              >
                NEXT UP: METHOD 1 CODE IMPLEMENTATION
              </div>
              <div
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 26,
                  color: theme.chalkText,
                  lineHeight: 1.6,
                }}
              >
                Now let us write this exact double-loop method in code and verify its time and space complexity.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================
          6. CAPTIONS (Y: 960 .. 1040)
          =================================================================== */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          zIndex: 30,
        }}
      >
        <Captions words={captionWords} />
      </div>
    </div>
  );
};
