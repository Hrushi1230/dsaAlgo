/**
 * Scene07HashSetCode.tsx — Scene 07 · HashSet Code Walkthrough
 * First Missing Positive (LeetCode 41) · Pattern 01 — Arrays & Hashing
 * 
 * Frame Duration: 1193 frames @ 30fps (39.77s) strictly from sync/07-hashset-code.json
 */

import React, { useMemo } from "react";
import { Audio, staticFile, useCurrentFrame } from "remotion";
import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme } from "../../../../kit/lib/theme";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { BoardHeaderMobile } from "./BoardHeaderMobile";
import { ChalkBoardNativeCode } from "../../../../kit/components/ChalkBoardNativeCode";
import { ChalkReasoningPanel } from "../../../../kit/components/ChalkReasoningPanel";
import syncData from "../sync/07-hashset-code.json";

export const SCENE07_TOTAL_FRAMES = 1193;

const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

const HASHSET_CODE = [
  "def firstMissingPositive(nums: List[int]) -> int:",
  "    seen = set()",
  "    for x in nums:",
  "        seen.add(x)",
  "",
  "    candidate = 1",
  "    while candidate in seen:",
  "        candidate += 1",
  "",
  "    return candidate",
];

export const Scene07HashSetCode: React.FC = () => {
  const frame = useCurrentFrame();

  const { highlightedLine, maxVisibleLine, actionTitle, actionDetails, tone } = useMemo(() => {
    if (frame < 173) {
      return {
        highlightedLine: 2,
        maxVisibleLine: 2,
        actionTitle: "INITIALIZE HASH SET",
        actionDetails: "seen = set(): Creates an empty hash table for O(1) membership queries.",
        tone: "good" as const,
      };
    }
    if (frame < 386) {
      return {
        highlightedLine: 4,
        maxVisibleLine: 4,
        actionTitle: "POPULATE ALL ELEMENTS",
        actionDetails: "for x in nums: seen.add(x). Collects all elements in O(N) time. Duplicates automatically merge.",
        tone: "neutral" as const,
      };
    }
    if (frame < 550) {
      return {
        highlightedLine: 6,
        maxVisibleLine: 6,
        actionTitle: "START AT MINIMUM POSITIVE",
        actionDetails: "candidate = 1: The smallest possible answer in the positive integers (1, 2, 3...).",
        tone: "good" as const,
      };
    }
    if (frame < 793) {
      return {
        highlightedLine: 7,
        maxVisibleLine: 8,
        actionTitle: "O(1) WHILE LOOP ADVANCE",
        actionDetails: "while candidate in seen: candidate += 1. Fast O(1) hash table lookup skips present integers.",
        tone: "good" as const,
      };
    }
    if (frame < 971) {
      return {
        highlightedLine: 10,
        maxVisibleLine: 10,
        actionTitle: "RETURN FIRST ABSENT GAP",
        actionDetails: "return candidate: Loop terminates as soon as a candidate is NOT found in seen.",
        tone: "good" as const,
      };
    }
    if (frame < 1084) {
      return {
        highlightedLine: undefined,
        maxVisibleLine: 10,
        actionTitle: "LINEAR TIME ACHIEVED",
        actionDetails: "Time: O(N) total construction + lookups. Rescanning eliminated!",
        tone: "good" as const,
      };
    }
    return {
      highlightedLine: undefined,
      maxVisibleLine: 10,
      actionTitle: "SPACE BOTTLENECK PREVIEW",
      actionDetails: "Space: O(N) auxiliary space. But the interview asks for O(1) extra space!",
      tone: "warn" as const,
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

      <Audio src={staticFile("audio/018/scence07.mp3")} />

      {/* Header */}
      <BoardHeaderMobile
        stepBadge="SCENE 07"
        stepTitle="HASHSET IMPLEMENTATION"
        algorithmName="O(N) Time · O(N) Space Solution"
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
            lines={HASHSET_CODE}
            highlightLine={highlightedLine}
            maxVisibleLine={maxVisibleLine}
            title="python3 · hashset_solution.py"
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
            title="EXECUTION ANNOTATION"
            currentAction={actionTitle}
            details={actionDetails}
            ruleKey="Build set once with O(N) pass, then probe candidate in set in O(1)"
            tone={tone}
          />
        </div>
      </div>

      {/* Caption Safe Zone */}
      <Captions words={captionWords} />
    </div>
  );
};
