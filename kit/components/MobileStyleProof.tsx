import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { ChalkboardBackground, ChalkFilters } from "../lib/chalk";
import { theme, fonts, typographyMobile } from "../lib/theme";
import { RoughLine } from "./RoughLine";
import { ChalkBoardNativeCode } from "./ChalkBoardNativeCode";
import { ChalkVariablesPanel } from "./ChalkVariablesPanel";
import { ChalkReasoningPanel } from "./ChalkReasoningPanel";
import { ArrayTrackV2 } from "./array/ArrayTrackV2";

/**
 * MobileStyleTraceProofView — Replicates REF_MOBILE_STYLE_TRACE_FRAME.png
 */
export const MobileStyleTraceProofView: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: theme.boardBg, overflow: "hidden" }}>
      <ChalkboardBackground />
      <ChalkFilters />

      {/* 1. TOP HEADER (Y: 50 - 180) */}
      <div
        style={{
          position: "absolute",
          top: 45,
          left: 60,
          right: 60,
          display: "flex",
          alignItems: "center",
          gap: 36,
        }}
      >
        {/* Left Hero Title */}
        <div style={{ position: "relative", display: "inline-block", flexShrink: 0 }}>
          <span
            style={{
              fontFamily: fonts.hand,
              fontSize: 68,
              fontWeight: 800,
              color: theme.chalkText,
              letterSpacing: "0.02em",
            }}
          >
            First Missing{" "}
            <span style={{ color: theme.pivot }}>Positive</span>
          </span>
          <div style={{ position: "absolute", left: 0, bottom: -10, pointerEvents: "none" }}>
            <RoughLine
              shape={{ kind: "line", x1: 0, y1: 4, x2: 520, y2: 6 }}
              width={540}
              height={14}
              stroke={theme.pivot}
              strokeWidth={3.5}
            />
          </div>
        </div>

        {/* Vertical Divider */}
        <div style={{ height: 75, width: 2.5, backgroundColor: "rgba(232, 228, 213, 0.45)", flexShrink: 0 }} />

        {/* Right Problem Subheader */}
        <div
          style={{
            ...typographyMobile.problemText,
            color: theme.chalkText,
            lineHeight: 1.25,
          }}
        >
          Given an unsorted integer array nums,{" "}
          <br />
          find the{" "}
          <span style={{ color: theme.pivot, fontWeight: 800 }}>
            smallest missing positive integer
          </span>
          .
        </div>
      </div>

      {/* 2. THREE-COLUMN SECTION (Y: 220 - 820) */}
      <div
        style={{
          position: "absolute",
          top: 220,
          left: 60,
          right: 60,
          bottom: 240,
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        {/* Left Column: Variables Panel */}
        <div style={{ width: 260, flexShrink: 0 }}>
          <ChalkVariablesPanel
            title="Variables"
            items={[
              { label: "i", value: 6, valueColor: theme.pivot },
              { label: "n", value: 7, valueColor: theme.cyan },
              { label: "nums[i]", value: 3, valueColor: theme.pivot },
              { label: "target", value: 3, valueColor: theme.cyan },
            ]}
          />
        </div>

        {/* Column Divider 1 */}
        <div
          style={{
            width: 2,
            height: 520,
            backgroundColor: "rgba(232, 228, 213, 0.35)",
            margin: "0 36px 0 20px",
            flexShrink: 0,
          }}
        />

        {/* Center Column: Array Stage + Pointers */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 30,
          }}
        >
          {/* 7-Slot Array Track */}
          <ArrayTrackV2
            elements={[
              { value: 1, slotState: "default" },
              { value: -1, slotState: "default" },
              { value: 2, slotState: "default" },
              { value: 1, slotState: "default" },
              { value: 0, slotState: "default" },
              { value: -2, slotState: "default" },
              {
                value: 3,
                slotState: "current",
                fill: "rgba(255, 209, 102, 0.4)", // RoughBox hachure fill
                stroke: theme.pivot,
              },
            ]}
            slotWidth={105}
            slotHeight={105}
            gap={16}
            showIndices={true}
            indexPlacement="top"
            indexFormat="idx [i]"
          />

          {/* Chained Pointers Below Active Slot (idx 6) */}
          <div
            style={{
              marginTop: 18,
              marginLeft: 440, // Aligned with slot 6 center
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
            }}
          >
            {/* Up arrow */}
            <span style={{ color: theme.pivot, fontSize: 32, fontWeight: 800 }}>↑</span>

            {/* i = 6 badge */}
            <div
              style={{
                padding: "4px 18px",
                borderRadius: 8,
                border: `2px solid ${theme.pivot}`,
                fontFamily: fonts.hand,
                fontSize: 28,
                fontWeight: 700,
                color: theme.pivot,
                backgroundColor: "rgba(255, 209, 102, 0.08)",
              }}
            >
              i = 6
            </div>

            {/* Down arrow */}
            <span style={{ color: theme.cyan, fontSize: 28, fontWeight: 800 }}>↓</span>

            {/* target = nums[i] = 3 badge */}
            <div
              style={{
                padding: "6px 20px",
                borderRadius: 8,
                border: `2px solid ${theme.cyan}`,
                fontFamily: fonts.hand,
                fontSize: 24,
                fontWeight: 700,
                color: theme.cyan,
                textAlign: "center",
                lineHeight: 1.25,
                backgroundColor: "rgba(92, 225, 230, 0.08)",
              }}
            >
              target = nums[i]
              <br />= 3
            </div>
          </div>
        </div>

        {/* Column Divider 2 */}
        <div
          style={{
            width: 2,
            height: 520,
            backgroundColor: "rgba(232, 228, 213, 0.35)",
            margin: "0 36px",
            flexShrink: 0,
          }}
        />

        {/* Right Column: Reasoning Panel */}
        <div style={{ width: 420, flexShrink: 0 }}>
          <ChalkReasoningPanel
            title="Reasoning"
            steps={[
              {
                stepNumber: 1,
                content: [
                  {
                    segments: [
                      { text: "candidate = nums[i]" },
                      { text: "= 3", color: theme.pivot, bold: true },
                    ],
                  },
                ],
              },
              {
                stepNumber: 2,
                content: [
                  {
                    segments: [
                      { text: "Is " },
                      { text: "1 \u2264 3 \u2264 n?", color: theme.pivot, bold: true },
                    ],
                  },
                  {
                    segments: [
                      { text: "1 \u2264 3 \u2264 7 \u2192 " },
                      { text: "YES", color: theme.good, bold: true },
                    ],
                  },
                ],
              },
              {
                stepNumber: 3,
                content: [
                  {
                    segments: [
                      { text: "Correct index for " },
                      { text: "3", color: theme.pivot, bold: true },
                    ],
                  },
                  {
                    segments: [
                      { text: "is (3 - 1) = " },
                      { text: "2", color: theme.pivot, bold: true },
                    ],
                  },
                ],
              },
            ]}
          />
        </div>
      </div>

      {/* 3. BOTTOM TAKEAWAY BANNER (Y: 870 - 930) */}
      <div
        style={{
          position: "absolute",
          bottom: 125,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ position: "relative", display: "inline-block" }}>
          <span
            style={{
              ...typographyMobile.takeaway,
              color: theme.chalkText,
              letterSpacing: "0.02em",
            }}
          >
            So the answer (first missing positive) is{" "}
            <span style={{ color: theme.pivot }}>6</span>.
          </span>
          <div style={{ position: "absolute", left: -20, right: -20, bottom: -12, pointerEvents: "none" }}>
            <RoughLine
              shape={{ kind: "line", x1: 0, y1: 4, x2: 820, y2: 6 }}
              width={840}
              height={14}
              stroke={theme.good}
              strokeWidth={4.5}
            />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

/**
 * MobileStyleCodeProofView — Replicates REF_MOBILE_STYLE_CODE_FRAME.png
 */
export const MobileStyleCodeProofView: React.FC = () => {
  const sampleCode = `class Solution {
  public int firstMissingPositive(int[] nums) {
    int n = nums.length;
    for (int i = 0; i < n; i++) {
      while (nums[i] > 0 && nums[i] <= n &&
             nums[nums[i] - 1] != nums[i]) {
        int correctIdx = nums[i] - 1;
        int temp = nums[i];
        nums[i] = nums[correctIdx];
        nums[correctIdx] = temp;
      }
    }
    for (int i = 0; i < n; i++) {
      if (nums[i] != i + 1) return i + 1;
    }
    return n + 1;
  }
}`;

  return (
    <AbsoluteFill style={{ backgroundColor: theme.boardBg, overflow: "hidden" }}>
      <ChalkboardBackground />
      <ChalkFilters />

      {/* 1. TOP HEADER (Y: 40 - 170) */}
      <div style={{ position: "absolute", top: 40, left: 60, right: 60 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ position: "relative", display: "inline-block" }}>
            <span
              style={{
                fontFamily: fonts.hand,
                fontSize: 48,
                fontWeight: 800,
                color: theme.chalkText,
                letterSpacing: "0.02em",
              }}
            >
              <span style={{ color: theme.pivot }}>PROBLEM</span> — FIRST MISSING POSITIVE
            </span>
            <div style={{ position: "absolute", left: 0, bottom: -6, pointerEvents: "none" }}>
              <RoughLine
                shape={{ kind: "line", x1: 0, y1: 4, x2: 700, y2: 6 }}
                width={720}
                height={12}
                stroke={theme.chalkLine}
                strokeWidth={2.5}
              />
            </div>
          </div>

          {/* Capsule Pill Badge: LEETCODE 41 */}
          <div
            style={{
              padding: "6px 24px",
              borderRadius: 24,
              border: `2.5px solid ${theme.cyan}`,
              fontFamily: fonts.hand,
              fontSize: 28,
              fontWeight: 800,
              color: theme.chalkText,
              letterSpacing: "0.04em",
              backgroundColor: "rgba(92, 225, 230, 0.08)",
            }}
          >
            LEETCODE 41
          </div>
        </div>

        {/* Subtitle */}
        <div
          style={{
            marginTop: 18,
            fontFamily: fonts.hand,
            fontSize: 32,
            color: theme.chalkText,
            lineHeight: 1.3,
          }}
        >
          Given an integer array nums, return the{" "}
          <span style={{ color: theme.pivot, fontWeight: 700 }}>
            smallest positive integer
          </span>{" "}
          that does not appear in the array.
        </div>
      </div>

      {/* 2. TWO-COLUMN CODE & EXPLANATION SECTION (Y: 200 - 920) */}
      <div
        style={{
          position: "absolute",
          top: 205,
          left: 60,
          right: 60,
          bottom: 80,
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        {/* Left Column: Board-Native Monospace Code */}
        <div style={{ width: 1040, flexShrink: 0 }}>
          <ChalkBoardNativeCode
            code={sampleCode}
            activeLine={4}
            fontSize={31}
            lineHeight={39}
          />
        </div>

        {/* Vertical Divider */}
        <div
          style={{
            width: 2,
            height: 680,
            backgroundColor: "rgba(232, 228, 213, 0.35)",
            margin: "0 36px",
            flexShrink: 0,
          }}
        />

        {/* Right Column: Why this line matters? */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {/* Title */}
          <div style={{ position: "relative", marginBottom: 24, display: "inline-block" }}>
            <span
              style={{
                fontFamily: fonts.hand,
                fontSize: 44,
                fontWeight: 700,
                color: theme.pivot,
              }}
            >
              Why this line matters?
            </span>
            <div style={{ position: "absolute", left: 0, bottom: -6, pointerEvents: "none" }}>
              <RoughLine
                shape={{ kind: "line", x1: 0, y1: 4, x2: 440, y2: 6 }}
                width={460}
                height={12}
                stroke={theme.pivot}
                strokeWidth={3}
              />
            </div>
          </div>

          {/* Bullets */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 28 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span style={{ color: theme.pivot, fontSize: 24, marginTop: 4 }}>●</span>
              <span style={{ fontFamily: fonts.hand, fontSize: 30, color: theme.chalkText, lineHeight: 1.3 }}>
                We iterate through each index and place every valid number in its correct position{" "}
                <span style={{ color: theme.pivot, fontWeight: 700 }}>
                  (value x → index x - 1)
                </span>
                .
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span style={{ color: theme.pivot, fontSize: 24, marginTop: 4 }}>●</span>
              <span style={{ fontFamily: fonts.hand, fontSize: 30, color: theme.chalkText, lineHeight: 1.3 }}>
                After this loop, if a number k is present in the array, it will be at index k - 1{" "}
                <span style={{ color: theme.pivot, fontWeight: 700 }}>(when 1 ≤ k ≤ n)</span>.
              </span>
            </div>
          </div>

          {/* Example Progress Sub-Box */}
          <div style={{ position: "relative", marginBottom: 16 }}>
            <span style={{ fontFamily: fonts.hand, fontSize: 34, fontWeight: 700, color: theme.pivot }}>
              Example Progress
            </span>
            <div style={{ position: "absolute", left: 0, bottom: -4, pointerEvents: "none" }}>
              <RoughLine
                shape={{ kind: "line", x1: 0, y1: 4, x2: 240, y2: 6 }}
                width={260}
                height={10}
                stroke={theme.pivot}
                strokeWidth={2.5}
              />
            </div>
          </div>

          {/* Mini Array Visual */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingLeft: 10 }}>
            {/* nums = [ 3 | 4 | -1 | 1 ] */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ fontFamily: fonts.mono, fontSize: 26, color: theme.chalkText }}>nums =</span>
              <ArrayTrackV2
                elements={[3, 4, -1, 1]}
                slotWidth={68}
                slotHeight={68}
                gap={10}
                showIndices={false}
              />
            </div>

            {/* Down arrow */}
            <div style={{ paddingLeft: 180, color: theme.chalkText, fontSize: 26 }}>↓</div>

            {/* after placement -> [ 1 | -1 | 3 | 4 ] */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ fontFamily: fonts.mono, fontSize: 24, color: theme.chalkText }}>after placement →</span>
              <ArrayTrackV2
                elements={[
                  { value: 1, slotState: "confirmed", fill: "rgba(60, 229, 167, 0.35)", stroke: theme.good },
                  -1,
                  3,
                  4,
                ]}
                slotWidth={68}
                slotHeight={68}
                gap={10}
                showIndices={false}
              />
            </div>
          </div>

          {/* Summary notes */}
          <div style={{ marginTop: 22, fontFamily: fonts.hand, fontSize: 32, lineHeight: 1.35 }}>
            <div style={{ color: theme.chalkText }}>
              First index i where nums[i] != i + 1 is 1.
            </div>
            <div style={{ color: theme.chalkText, fontWeight: 700 }}>
              So, <span style={{ color: theme.pivot }}>answer = 2</span>.
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

/**
 * Combined 2-frame Proof for Remotion studio & still validation
 */
export const MobileStyleProof: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={30}>
        <MobileStyleTraceProofView />
      </Sequence>
      <Sequence from={30} durationInFrames={30}>
        <MobileStyleCodeProofView />
      </Sequence>
    </AbsoluteFill>
  );
};
