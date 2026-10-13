/**
 * Scene04BruteCode.tsx — Scene 04 · Brute Force Code Walkthrough
 * First Missing Positive (LeetCode 41) · Pattern 01 — Arrays & Hashing
 * 
 * Frame Duration: 1489 frames @ 30fps (49.63s) strictly from sync/04-brute-code.json
 */

import React, { useMemo } from "react";
import { Audio, staticFile, useCurrentFrame } from "remotion";
import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme } from "../../../../kit/lib/theme";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { BoardHeaderMobile } from "./BoardHeaderMobile";
import { ChalkBoardNativeCode } from "../../../../kit/components/ChalkBoardNativeCode";
import { ChalkReasoningPanel } from "../../../../kit/components/ChalkReasoningPanel";
import syncData from "../sync/04-brute-code.json";

export const SCENE04_TOTAL_FRAMES = 1489;

const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

const BRUTE_CODE = [
  "def firstMissingPositive(nums: List[int]) -> int:",
  "    candidate = 1",
  "    while True:",
  "        found = False",
  "        for x in nums:",
  "            if x == candidate:",
  "                found = True",
  "                break",
  "        if not found:",
  "            return candidate",
  "        candidate += 1",
];

export const Scene04BruteCode: React.FC = () => {
  const frame = useCurrentFrame();

  // Highlight line & reasoning state
  const { highlightedLine, maxVisibleLine, actionTitle, actionDetails, tone } = useMemo(() => {
    if (frame < 221) {
      return {
        highlightedLine: 2,
        maxVisibleLine: 2,
        actionTitle: "INITIALIZE CANDIDATE",
        actionDetails: "candidate = 1: Smallest positive integer search begins at 1.",
        tone: "good" as const,
      };
    }
    if (frame < 371) {
      return {
        highlightedLine: 3,
        maxVisibleLine: 3,
        actionTitle: "OUTER TESTING LOOP",
        actionDetails: "while True: Sequentially tests candidates 1, 2, 3... until missing gap discovered.",
        tone: "neutral" as const,
      };
    }
    if (frame < 627) {
      return {
        highlightedLine: 4,
        maxVisibleLine: 4,
        actionTitle: "RESET FOUND FLAG",
        actionDetails: "found = False: Clean slate for each candidate. Prior probe results do not bleed.",
        tone: "neutral" as const,
      };
    }
    if (frame < 737) {
      return {
        highlightedLine: 5,
        maxVisibleLine: 5,
        actionTitle: "INNER LINEAR SCAN",
        actionDetails: "for x in nums: Sequential scan across all N elements.",
        tone: "neutral" as const,
      };
    }
    if (frame < 978) {
      return {
        highlightedLine: 7,
        maxVisibleLine: 8,
        actionTitle: "MATCH & EARLY EXIT",
        actionDetails: "if x == candidate: found = True; break. Stop inner scan immediately on discovery.",
        tone: "good" as const,
      };
    }
    if (frame < 1231) {
      return {
        highlightedLine: 10,
        maxVisibleLine: 10,
        actionTitle: "FIRST MISSING GAP DETECTED",
        actionDetails: "if not found: return candidate. The first absent positive integer is the answer!",
        tone: "good" as const,
      };
    }
    if (frame < 1388) {
      return {
        highlightedLine: 11,
        maxVisibleLine: 11,
        actionTitle: "INCREMENT CANDIDATE",
        actionDetails: "candidate += 1: Found in nums; move to the next integer in sequence.",
        tone: "neutral" as const,
      };
    }
    return {
      highlightedLine: undefined,
      maxVisibleLine: 11,
      actionTitle: "COMPLEXITY BOTTLENECK",
      actionDetails: "Time: O(N²) worst-case due to repeated scans · Space: O(1). We need O(N) runtime!",
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

      <Audio src={staticFile("audio/018/scence04.mp3")} />

      {/* Header */}
      <BoardHeaderMobile
        stepBadge="SCENE 04"
        stepTitle="BRUTE FORCE IMPLEMENTATION"
        algorithmName="Sequential Candidate Probe"
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
            lines={BRUTE_CODE}
            highlightLine={highlightedLine}
            maxVisibleLine={maxVisibleLine}
            title="python3 · brute_force.py"
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
            title="LOGIC ANNOTATION"
            currentAction={actionTitle}
            details={actionDetails}
            ruleKey="Outer candidate probe 1,2.. coupled with inner linear scan"
            tone={tone}
          />
        </div>
      </div>

      {/* Caption Safe Zone */}
      <Captions words={captionWords} />
    </div>
  );
};
