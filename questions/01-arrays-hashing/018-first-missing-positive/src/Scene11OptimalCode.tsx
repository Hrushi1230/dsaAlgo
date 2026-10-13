/**
 * Scene11OptimalCode.tsx — Scene 11 · Optimal Cycle Sort Code Walkthrough
 * First Missing Positive (LeetCode 41) · Pattern 01 — Arrays & Hashing
 * 
 * Frame Duration: 1800 frames @ 30fps (60.00s) strictly from sync/11-optimal-code.json
 */

import React, { useMemo } from "react";
import { Audio, staticFile, useCurrentFrame } from "remotion";
import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme } from "../../../../kit/lib/theme";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { BoardHeaderMobile } from "./BoardHeaderMobile";
import { ChalkBoardNativeCode } from "../../../../kit/components/ChalkBoardNativeCode";
import { ChalkReasoningPanel } from "../../../../kit/components/ChalkReasoningPanel";
import syncData from "../sync/11-optimal-code.json";

export const SCENE11_TOTAL_FRAMES = 1800;

const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

const OPTIMAL_CODE = [
  "def firstMissingPositive(nums: List[int]) -> int:",
  "    n = len(nums)",
  "",
  "    for i in range(n):",
  "        while 1 <= nums[i] <= n and nums[i] != nums[nums[i] - 1]:",
  "            home = nums[i] - 1",
  "            nums[i], nums[home] = nums[home], nums[i]",
  "",
  "    for i in range(n):",
  "        if nums[i] != i + 1:",
  "            return i + 1",
  "",
  "    return n + 1",
];

export const Scene11OptimalCode: React.FC = () => {
  const frame = useCurrentFrame();

  const { highlightedLine, maxVisibleLine, actionTitle, actionDetails, tone } = useMemo(() => {
    if (frame < 245) {
      return {
        highlightedLine: 2,
        maxVisibleLine: 2,
        actionTitle: "STORE ARRAY LENGTH",
        actionDetails: "n = len(nums): Bounds valid targets strictly to [1 .. n].",
        tone: "good" as const,
      };
    }
    if (frame < 323) {
      return {
        highlightedLine: 4,
        maxVisibleLine: 4,
        actionTitle: "OUTER PASS ACROSS SLOTS",
        actionDetails: "for i in range(n): Iterates every index of the array.",
        tone: "neutral" as const,
      };
    }
    if (frame < 843) {
      return {
        highlightedLine: 5,
        maxVisibleLine: 5,
        actionTitle: "WHILE LOOP + RANGE GUARD",
        actionDetails: "while loop re-checks incoming values! 1 <= nums[i] <= n ensures home is a valid index.",
        tone: "good" as const,
      };
    }
    if (frame < 1147) {
      return {
        highlightedLine: 5,
        maxVisibleLine: 5,
        actionTitle: "DUPLICATE GUARD",
        actionDetails: "nums[i] != nums[nums[i] - 1]: Halts immediately if home already holds the value. Prevents infinite loops!",
        tone: "warn" as const,
      };
    }
    if (frame < 1283) {
      return {
        highlightedLine: 7,
        maxVisibleLine: 7,
        actionTitle: "IN-PLACE CYCLE SWAP",
        actionDetails: "home = nums[i] - 1; swap nums[i] with nums[home]. Puts current number in its permanent slot.",
        tone: "good" as const,
      };
    }
    if (frame < 1597) {
      return {
        highlightedLine: 11,
        maxVisibleLine: 11,
        actionTitle: "PASS 2: FIND FIRST GAP",
        actionDetails: "if nums[i] != i + 1: return i + 1. The first mismatch marks the smallest missing positive integer!",
        tone: "good" as const,
      };
    }
    if (frame < 1720) {
      return {
        highlightedLine: 13,
        maxVisibleLine: 13,
        actionTitle: "PERFECT ARRAY FALLBACK",
        actionDetails: "return n + 1: If 1..n all match in slots 0..n-1, the missing number is n + 1.",
        tone: "good" as const,
      };
    }
    return {
      highlightedLine: undefined,
      maxVisibleLine: 13,
      actionTitle: "HARD CONSTRAINT FULFILLED",
      actionDetails: "Time: O(N) · Space: O(1) auxiliary. Zero extra allocations! Pure in-place mastery.",
      tone: "good" as const,
    };
  }, [frame]);

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

      <Audio src={staticFile("audio/018/scence11.mp3")} />

      {/* Header */}
      <BoardHeaderMobile
        stepBadge="SCENE 11"
        stepTitle="OPTIMAL CYCLE SORT CODE"
        algorithmName="In-Place Array Hashing Implementation"
        difficulty="HARD"
      />

      {/* Main Layout: Code left, Reasoning panel right (Y: 180 to 860) */}
      <div
        style={{
          position: "absolute",
          top: 180,
          left: 100,
          right: 100,
          display: "flex",
          gap: 40,
          alignItems: "stretch",
        }}
      >
        {/* Left: Chalk Code */}
        <div style={{ flex: 1.25 }}>
          <ChalkBoardNativeCode
            lines={OPTIMAL_CODE}
            highlightLine={highlightedLine}
            maxVisibleLine={maxVisibleLine}
            title="python3 · cycle_sort_optimal.py"
          />
        </div>

        {/* Vertical Divider */}
        <div
          style={{
            width: 2.5,
            minHeight: 500,
            backgroundColor: "rgba(232, 228, 213, 0.35)",
            alignSelf: "stretch",
          }}
        />

        {/* Right: Reasoning Panel */}
        <div style={{ flex: 1, marginTop: 10 }}>
          <ChalkReasoningPanel
            title="ALGORITHM LOGIC"
            currentAction={actionTitle}
            details={actionDetails}
            ruleKey="while 1 <= nums[i] <= n and nums[i] != nums[nums[i]-1]: swap to home"
            tone={tone}
          />
        </div>
      </div>

      {/* Caption Safe Zone */}
      <Captions words={captionWords} />
    </div>
  );
};
