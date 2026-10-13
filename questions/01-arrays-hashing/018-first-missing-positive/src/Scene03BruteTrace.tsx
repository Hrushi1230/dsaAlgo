/**
 * Scene03BruteTrace.tsx — Scene 03 · Full Brute Force Trace
 * First Missing Positive (LeetCode 41) · Pattern 01 — Arrays & Hashing
 * 
 * Frame Duration: 2514 frames @ 30fps (83.8s) strictly from sync/03-brute-trace.json
 */

import React, { useMemo } from "react";
import { Audio, staticFile, useCurrentFrame } from "remotion";
import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme, typographyMobile } from "../../../../kit/lib/theme";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { ArrayTrackV2 } from "../../../../kit/components";
import { BoardHeaderMobile } from "./BoardHeaderMobile";
import { ChalkVariablesPanel } from "../../../../kit/components/ChalkVariablesPanel";
import { ChalkReasoningPanel } from "../../../../kit/components/ChalkReasoningPanel";
import syncData from "../sync/03-brute-trace.json";

export const SCENE03_TOTAL_FRAMES = 2514;

const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

export const Scene03BruteTrace: React.FC = () => {
  const frame = useCurrentFrame();

  // Master array
  const rawNums = useMemo(() => [3, 4, -1, 1, 1, 10, 0, 2], []);

  // Compute active state based on frame
  const {
    candidate,
    activeIdx,
    isMatch,
    confirmedCandidates,
    comparisonsCount,
    reasoningHeader,
    reasoningDetails,
    isFinalReturn,
  } = useMemo(() => {
    let cand = 1;
    let idx = -1;
    let match = false;
    let confirmed: number[] = [];
    let comps = 0;
    let header = "INITIALIZING BRUTE FORCE";
    let details = "Starting candidate search sequentially from 1.";
    let finalReturn = false;

    if (frame < 65) {
      return {
        candidate: 1,
        activeIdx: -1,
        isMatch: false,
        confirmedCandidates: [],
        comparisonsCount: 0,
        reasoningHeader: "SOURCE ARRAY READY",
        reasoningDetails: "nums stays unchanged during lookups.",
        isFinalReturn: false,
      };
    }

    // Candidate 1 (F65 - F522)
    if (frame < 522) {
      cand = 1;
      if (frame < 179) {
        idx = 0; comps = 0; header = "PROBING CANDIDATE 1"; details = "Start linear scan at index 0.";
      } else if (frame < 223) {
        idx = 0; comps = 1; header = "CHECK idx=0"; details = "nums[0] = 3 ≠ 1 (mismatch, advance i)";
      } else if (frame < 270) {
        idx = 1; comps = 2; header = "CHECK idx=1"; details = "nums[1] = 4 ≠ 1 (mismatch, advance i)";
      } else if (frame < 331) {
        idx = 2; comps = 3; header = "CHECK idx=2"; details = "nums[2] = -1 ≠ 1 (mismatch, advance i)";
      } else if (frame < 419) {
        idx = 3; comps = 4; match = true; header = "MATCH FOUND!"; details = "nums[3] = 1 == candidate 1! Break inner loop.";
      } else {
        idx = 3; comps = 4; match = true; confirmed = [1]; header = "CONFIRMED: 1 PRESENT"; details = "Candidate 1 exists in nums. Advance candidate to 2.";
      }
    }
    // Candidate 2 (F522 - F1098)
    else if (frame < 1098) {
      cand = 2;
      confirmed = [1];
      if (frame < 628) {
        idx = 0; comps = 4; header = "PROBING CANDIDATE 2"; details = "Reset scan to index 0 for candidate 2.";
      } else if (frame < 667) {
        idx = 0; comps = 5; header = "CHECK idx=0"; details = "nums[0] = 3 ≠ 2";
      } else if (frame < 708) {
        idx = 1; comps = 6; header = "CHECK idx=1"; details = "nums[1] = 4 ≠ 2";
      } else if (frame < 754) {
        idx = 2; comps = 7; header = "CHECK idx=2"; details = "nums[2] = -1 ≠ 2";
      } else if (frame < 802) {
        idx = 3; comps = 8; header = "CHECK idx=3"; details = "nums[3] = 1 ≠ 2";
      } else if (frame < 848) {
        idx = 4; comps = 9; header = "CHECK idx=4"; details = "nums[4] = 1 ≠ 2";
      } else if (frame < 917) {
        idx = 5; comps = 10; header = "CHECK idx=5"; details = "nums[5] = 10 ≠ 2";
      } else if (frame < 968) {
        idx = 6; comps = 11; header = "CHECK idx=6"; details = "nums[6] = 0 ≠ 2";
      } else if (frame < 1052) {
        idx = 7; comps = 12; match = true; header = "MATCH AT LAST INDEX!"; details = "nums[7] = 2 == candidate 2!";
      } else {
        idx = 7; comps = 12; match = true; confirmed = [1, 2]; header = "CONFIRMED: 2 PRESENT"; details = "Candidate 2 exists. Advance candidate to 3.";
      }
    }
    // Candidate 3 (F1098 - F1270)
    else if (frame < 1270) {
      cand = 3;
      confirmed = [1, 2];
      if (frame < 1156) {
        idx = 0; comps = 12; header = "PROBING CANDIDATE 3"; details = "Reset scan to index 0.";
      } else if (frame < 1238) {
        idx = 0; comps = 13; match = true; header = "IMMEDIATE MATCH!"; details = "nums[0] = 3 == candidate 3!";
      } else {
        idx = 0; comps = 13; match = true; confirmed = [1, 2, 3]; header = "CONFIRMED: 3 PRESENT"; details = "Found in 1 comparison! Advance candidate to 4.";
      }
    }
    // Candidate 4 (F1270 - F1487)
    else if (frame < 1487) {
      cand = 4;
      confirmed = [1, 2, 3];
      if (frame < 1312) {
        idx = 0; comps = 13; header = "PROBING CANDIDATE 4"; details = "Reset scan to index 0.";
      } else if (frame < 1402) {
        idx = 0; comps = 14; header = "CHECK idx=0"; details = "nums[0] = 3 ≠ 4";
      } else {
        idx = 1; comps = 15; match = true; confirmed = [1, 2, 3, 4]; header = "MATCH FOUND!"; details = "nums[1] = 4 == candidate 4! Advance candidate to 5.";
      }
    }
    // Candidate 5 (F1487 - F2514)
    else {
      cand = 5;
      confirmed = [1, 2, 3, 4];
      if (frame < 1523) {
        idx = 0; comps = 15; header = "PROBING CANDIDATE 5"; details = "Start full array scan.";
      } else if (frame < 1575) {
        idx = 0; comps = 15; header = "SCANNING FOR 5"; details = "Search from index 0 again.";
      } else if (frame < 1633) {
        idx = 0; comps = 16; header = "CHECK idx=0"; details = "nums[0] = 3 ≠ 5";
      } else if (frame < 1679) {
        idx = 1; comps = 17; header = "CHECK idx=1"; details = "nums[1] = 4 ≠ 5";
      } else if (frame < 1692) {
        idx = 2; comps = 18; header = "CHECK idx=2"; details = "nums[2] = -1 ≠ 5";
      } else if (frame < 1793) {
        idx = 3; comps = 19; header = "CHECK idx=3"; details = "nums[3] = 1 ≠ 5";
      } else if (frame < 1855) {
        idx = 4; comps = 20; header = "CHECK idx=4"; details = "nums[4] = 1 ≠ 5";
      } else if (frame < 1914) {
        idx = 5; comps = 21; header = "CHECK idx=5"; details = "nums[5] = 10 ≠ 5";
      } else if (frame < 1974) {
        idx = 6; comps = 22; header = "CHECK idx=6"; details = "nums[6] = 0 ≠ 5";
      } else if (frame < 2034) {
        idx = 7; comps = 23; header = "CHECK idx=7"; details = "nums[7] = 2 ≠ 5";
      } else if (frame < 2207) {
        idx = -1; comps = 23; header = "EXHAUSTED WITHOUT MATCH"; details = "Scanned all 8 slots. 5 is NOT in nums!";
      } else if (frame < 2338) {
        idx = -1; comps = 23; finalReturn = true; header = "RESULT: 5 IS FIRST MISSING POSITIVE!"; details = "1, 2, 3, 4 were present. 5 is the answer! Return 5.";
      } else {
        idx = -1; comps = 23; finalReturn = true; header = "INEFFICIENCY OF BRUTE FORCE"; details = "23 total comparisons! Repeated scans over identical slots → O(N²).";
      }
    }

    return {
      candidate: cand,
      activeIdx: idx,
      isMatch: match,
      confirmedCandidates: confirmed,
      comparisonsCount: comps,
      reasoningHeader: header,
      reasoningDetails: details,
      isFinalReturn: finalReturn,
    };
  }, [frame]);

  // Array elements
  const elements = useMemo(() => {
    return rawNums.map((val, idx) => {
      const isCur = idx === activeIdx;
      const isConfirmed = confirmedCandidates.includes(val);

      return {
        value: val,
        slotState: isCur
          ? isMatch
            ? ("confirmed" as const)
            : ("current" as const)
          : isConfirmed
          ? ("confirmed" as const)
          : ("default" as const),
        fill: isCur
          ? isMatch
            ? "rgba(60, 229, 167, 0.32)"
            : "rgba(255, 209, 102, 0.28)"
          : isConfirmed
          ? "rgba(60, 229, 167, 0.16)"
          : undefined,
        stroke: isCur
          ? isMatch
            ? theme.good
            : theme.pivot
          : isConfirmed
          ? theme.good
          : undefined,
      };
    });
  }, [rawNums, activeIdx, isMatch, confirmedCandidates]);

  // Variables panel rows
  const variables = useMemo(() => {
    return [
      {
        name: "candidate",
        value: isFinalReturn ? "5 (ANSWER)" : candidate,
        status: isFinalReturn ? ("good" as const) : ("pivot" as const),
      },
      {
        name: "i (pointer)",
        value: activeIdx >= 0 ? activeIdx : "-",
        status: activeIdx >= 0 ? ("pivot" as const) : ("neutral" as const),
      },
      {
        name: "nums[i]",
        value: activeIdx >= 0 ? rawNums[activeIdx] : "-",
        status: isMatch ? ("good" as const) : ("neutral" as const),
      },
      {
        name: "Comparisons",
        value: `${comparisonsCount} / 23`,
        status: comparisonsCount > 15 ? ("warn" as const) : ("neutral" as const),
      },
      {
        name: "Confirmed",
        value: confirmedCandidates.length > 0 ? `[${confirmedCandidates.join(", ")}]` : "[]",
        status: "good" as const,
      },
    ];
  }, [candidate, activeIdx, rawNums, isMatch, comparisonsCount, confirmedCandidates, isFinalReturn]);

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

      <Audio src={staticFile("audio/018/scence03.mp3")} />

      {/* Header */}
      <BoardHeaderMobile
        stepBadge="SCENE 03"
        stepTitle="BRUTE FORCE TRACE (23 CHECKS)"
        algorithmName="Sequential Candidate Linear Scan"
        difficulty="HARD"
      />

      {/* Center Array Track */}
      <div
        style={{
          position: "absolute",
          top: 185,
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
          INPUT ARRAY · nums = [3, 4, -1, 1, 1, 10, 0, 2]
        </div>

        <ArrayTrackV2
          elements={elements}
          pointers={
            activeIdx >= 0
              ? [
                  {
                    id: "p-i",
                    index: activeIdx,
                    label: `i = ${activeIdx}`,
                    color: isMatch ? theme.good : theme.pivot,
                  },
                ]
              : []
          }
          slotWidth={120}
          slotHeight={100}
          gap={22}
          showIndices
        />
      </div>

      {/* Panels Side by Side (Y: 480 to 860) */}
      <div
        style={{
          position: "absolute",
          top: 480,
          left: 100,
          right: 100,
          display: "flex",
          gap: 36,
          alignItems: "stretch",
        }}
      >
        {/* Left: State Variables */}
        <ChalkVariablesPanel
          title="EXECUTION STATE"
          variables={variables}
          width={560}
        />

        {/* Vertical Divider */}
        <div
          style={{
            width: 2.5,
            backgroundColor: "rgba(232, 228, 213, 0.35)",
            alignSelf: "stretch",
          }}
        />

        {/* Right: Reasoning & Action Box */}
        <div style={{ flex: 1 }}>
          <ChalkReasoningPanel
            title="STEP LOGIC & INEFFICIENCY CALLOUT"
            currentAction={reasoningHeader}
            details={reasoningDetails}
            ruleKey={
              isFinalReturn
                ? "First missing candidate = 5 (Returned in 23 comparisons)"
                : "Inner loop: Linear scan array for candidate until match or end"
            }
            tone={isFinalReturn ? "good" : isMatch ? "good" : "neutral"}
          />
        </div>
      </div>

      {/* Caption Safe Zone */}
      <Captions words={captionWords} />
    </div>
  );
};
