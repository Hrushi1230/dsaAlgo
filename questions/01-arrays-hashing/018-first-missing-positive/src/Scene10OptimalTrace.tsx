/**
 * Scene10OptimalTrace.tsx — Scene 10 · Master Optimal Cycle Sort Trace
 * First Missing Positive (LeetCode 41) · Pattern 01 — Arrays & Hashing
 * 
 * Frame Duration: 4087 frames @ 30fps (136.23s) strictly from sync/10-optimal-trace.json
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
import syncData from "../sync/10-optimal-trace.json";

export const SCENE10_TOTAL_FRAMES = 4087;

const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

export const Scene10OptimalTrace: React.FC = () => {
  const frame = useCurrentFrame();

  // Compute exact array state & pointer metrics across all 52 anchors
  const {
    arrayState,
    pointerIdx,
    targetIdx,
    isSwapping,
    phase,
    swapCount,
    actionHeader,
    actionDetails,
    tone,
    isFinalReturn,
  } = useMemo(() => {
    // PASS 1: CYCLE SORT SWAPS (F0 - F3194)
    if (frame < 3194) {
      // i = 0 (F0 - F776)
      if (frame < 776) {
        if (frame < 388) {
          return {
            arrayState: [3, 4, -1, 1, 1, 10, 0, 2],
            pointerIdx: 0,
            targetIdx: 2,
            isSwapping: false,
            phase: "PASS 1: CYCLE SORT",
            swapCount: 0,
            actionHeader: "EXAMINE nums[0] = 3",
            actionDetails: "3 belongs at index 3 - 1 = 2 (currently holds -1).",
            tone: "neutral" as const,
            isFinalReturn: false,
          };
        }
        if (frame < 426) {
          return {
            arrayState: [-1, 4, 3, 1, 1, 10, 0, 2],
            pointerIdx: 0,
            targetIdx: 2,
            isSwapping: true,
            phase: "PASS 1: CYCLE SORT",
            swapCount: 1,
            actionHeader: "SWAP 1: nums[0] ↔ nums[2]",
            actionDetails: "3 moves to home at index 2. Arriving value is -1.",
            tone: "good" as const,
            isFinalReturn: false,
          };
        }
        return {
          arrayState: [-1, 4, 3, 1, 1, 10, 0, 2],
          pointerIdx: 0,
          targetIdx: -1,
          isSwapping: false,
          phase: "PASS 1: CYCLE SORT",
          swapCount: 1,
          actionHeader: "RE-CHECK nums[0] = -1",
          actionDetails: "-1 is out of range [1..8]. Cannot be placed. Stop and advance i.",
          tone: "neutral" as const,
          isFinalReturn: false,
        };
      }

      // i = 1 (F776 - F1592)
      if (frame < 1592) {
        if (frame < 980) {
          return {
            arrayState: [-1, 4, 3, 1, 1, 10, 0, 2],
            pointerIdx: 1,
            targetIdx: 3,
            isSwapping: false,
            phase: "PASS 1: CYCLE SORT",
            swapCount: 1,
            actionHeader: "EXAMINE nums[1] = 4",
            actionDetails: "4 belongs at index 4 - 1 = 3 (currently holds 1).",
            tone: "neutral" as const,
            isFinalReturn: false,
          };
        }
        if (frame < 1009) {
          return {
            arrayState: [-1, 1, 3, 4, 1, 10, 0, 2],
            pointerIdx: 1,
            targetIdx: 3,
            isSwapping: true,
            phase: "PASS 1: CYCLE SORT",
            swapCount: 2,
            actionHeader: "SWAP 2: nums[1] ↔ nums[3]",
            actionDetails: "4 reaches home at index 3. Arriving value is 1.",
            tone: "good" as const,
            isFinalReturn: false,
          };
        }
        if (frame < 1379) {
          return {
            arrayState: [-1, 1, 3, 4, 1, 10, 0, 2],
            pointerIdx: 1,
            targetIdx: 0,
            isSwapping: false,
            phase: "PASS 1: CYCLE SORT",
            swapCount: 2,
            actionHeader: "STAY AT i=1: RE-CHECK nums[1] = 1",
            actionDetails: "1 belongs at index 1 - 1 = 0 (currently holds -1).",
            tone: "neutral" as const,
            isFinalReturn: false,
          };
        }
        if (frame < 1412) {
          return {
            arrayState: [1, -1, 3, 4, 1, 10, 0, 2],
            pointerIdx: 1,
            targetIdx: 0,
            isSwapping: true,
            phase: "PASS 1: CYCLE SORT",
            swapCount: 3,
            actionHeader: "SWAP 3: nums[1] ↔ nums[0]",
            actionDetails: "1 reaches home at index 0. Arriving value is -1.",
            tone: "good" as const,
            isFinalReturn: false,
          };
        }
        return {
          arrayState: [1, -1, 3, 4, 1, 10, 0, 2],
          pointerIdx: 1,
          targetIdx: -1,
          isSwapping: false,
          phase: "PASS 1: CYCLE SORT",
          swapCount: 3,
          actionHeader: "RE-CHECK nums[1] = -1",
          actionDetails: "-1 ≤ 0. Out of range. Stop while loop at i=1.",
          tone: "neutral" as const,
          isFinalReturn: false,
        };
      }

      // i = 2 (F1592 - F1720)
      if (frame < 1720) {
        return {
          arrayState: [1, -1, 3, 4, 1, 10, 0, 2],
          pointerIdx: 2,
          targetIdx: 2,
          isSwapping: false,
          phase: "PASS 1: CYCLE SORT",
          swapCount: 3,
          actionHeader: "EXAMINE nums[2] = 3",
          actionDetails: "3 is already in its correct home! No swap needed.",
          tone: "good" as const,
          isFinalReturn: false,
        };
      }

      // i = 3 (F1720 - F1883)
      if (frame < 1883) {
        return {
          arrayState: [1, -1, 3, 4, 1, 10, 0, 2],
          pointerIdx: 3,
          targetIdx: 3,
          isSwapping: false,
          phase: "PASS 1: CYCLE SORT",
          swapCount: 3,
          actionHeader: "EXAMINE nums[3] = 4",
          actionDetails: "4 is already in its correct home! No swap needed.",
          tone: "good" as const,
          isFinalReturn: false,
        };
      }

      // i = 4 (F1883 - F2161)
      if (frame < 2161) {
        return {
          arrayState: [1, -1, 3, 4, 1, 10, 0, 2],
          pointerIdx: 4,
          targetIdx: 0,
          isSwapping: false,
          phase: "PASS 1: CYCLE SORT",
          swapCount: 3,
          actionHeader: "DUPLICATE GUARD TRIGGERED",
          actionDetails: "nums[4] = 1 belongs at index 0. But index 0 ALREADY contains 1! Do NOT swap.",
          tone: "warn" as const,
          isFinalReturn: false,
        };
      }

      // i = 5 (F2161 - F2312)
      if (frame < 2312) {
        return {
          arrayState: [1, -1, 3, 4, 1, 10, 0, 2],
          pointerIdx: 5,
          targetIdx: -1,
          isSwapping: false,
          phase: "PASS 1: CYCLE SORT",
          swapCount: 3,
          actionHeader: "OUT OF BOUNDS: nums[5] = 10",
          actionDetails: "10 > 8 (cannot fit in array slots). Skip without swapping.",
          tone: "neutral" as const,
          isFinalReturn: false,
        };
      }

      // i = 6 (F2312 - F2464)
      if (frame < 2464) {
        return {
          arrayState: [1, -1, 3, 4, 1, 10, 0, 2],
          pointerIdx: 6,
          targetIdx: -1,
          isSwapping: false,
          phase: "PASS 1: CYCLE SORT",
          swapCount: 3,
          actionHeader: "NON-POSITIVE: nums[6] = 0",
          actionDetails: "0 is not positive. Has no home slot. Skip.",
          tone: "neutral" as const,
          isFinalReturn: false,
        };
      }

      // i = 7 (F2464 - F2978)
      if (frame < 2978) {
        if (frame < 2659) {
          return {
            arrayState: [1, -1, 3, 4, 1, 10, 0, 2],
            pointerIdx: 7,
            targetIdx: 1,
            isSwapping: false,
            phase: "PASS 1: CYCLE SORT",
            swapCount: 3,
            actionHeader: "EXAMINE nums[7] = 2",
            actionDetails: "2 belongs at index 2 - 1 = 1 (currently holds -1).",
            tone: "neutral" as const,
            isFinalReturn: false,
          };
        }
        if (frame < 2686) {
          return {
            arrayState: [1, 2, 3, 4, 1, 10, 0, -1],
            pointerIdx: 7,
            targetIdx: 1,
            isSwapping: true,
            phase: "PASS 1: CYCLE SORT",
            swapCount: 4,
            actionHeader: "SWAP 4: nums[7] ↔ nums[1]",
            actionDetails: "2 reaches home at index 1. Arriving value is -1.",
            tone: "good" as const,
            isFinalReturn: false,
          };
        }
        return {
          arrayState: [1, 2, 3, 4, 1, 10, 0, -1],
          pointerIdx: 7,
          targetIdx: -1,
          isSwapping: false,
          phase: "PASS 1: CYCLE SORT",
          swapCount: 4,
          actionHeader: "RE-CHECK nums[7] = -1",
          actionDetails: "-1 cannot be placed. All 8 slots processed! Placement complete.",
          tone: "good" as const,
          isFinalReturn: false,
        };
      }

      // Summary before pass 2 (F2978 - F3194)
      return {
        arrayState: [1, 2, 3, 4, 1, 10, 0, -1],
        pointerIdx: -1,
        targetIdx: -1,
        isSwapping: false,
        phase: "PLACEMENT SUMMARY",
        swapCount: 4,
        actionHeader: "ARRAY REORGANIZED",
        actionDetails: "nums = [1, 2, 3, 4, 1, 10, 0, -1]. Values 1..4 in place! Ready for second pass.",
        tone: "good" as const,
        isFinalReturn: false,
      };
    }

    // PASS 2: LINEAR SCAN FOR FIRST GAP (F3194 - F4087)
    const pass2State = [1, 2, 3, 4, 1, 10, 0, -1];
    if (frame < 3429) {
      return {
        arrayState: pass2State,
        pointerIdx: 0,
        targetIdx: -1,
        isSwapping: false,
        phase: "PASS 2: VERIFICATION SCAN",
        swapCount: 4,
        actionHeader: "CHECK index 0",
        actionDetails: "Expected: 0 + 1 = 1. Present: 1. MATCH ✓",
        tone: "good" as const,
        isFinalReturn: false,
      };
    }
    if (frame < 3542) {
      return {
        arrayState: pass2State,
        pointerIdx: 1,
        targetIdx: -1,
        isSwapping: false,
        phase: "PASS 2: VERIFICATION SCAN",
        swapCount: 4,
        actionHeader: "CHECK index 1",
        actionDetails: "Expected: 1 + 1 = 2. Present: 2. MATCH ✓",
        tone: "good" as const,
        isFinalReturn: false,
      };
    }
    if (frame < 3655) {
      return {
        arrayState: pass2State,
        pointerIdx: 2,
        targetIdx: -1,
        isSwapping: false,
        phase: "PASS 2: VERIFICATION SCAN",
        swapCount: 4,
        actionHeader: "CHECK index 2",
        actionDetails: "Expected: 2 + 1 = 3. Present: 3. MATCH ✓",
        tone: "good" as const,
        isFinalReturn: false,
      };
    }
    if (frame < 3768) {
      return {
        arrayState: pass2State,
        pointerIdx: 3,
        targetIdx: -1,
        isSwapping: false,
        phase: "PASS 2: VERIFICATION SCAN",
        swapCount: 4,
        actionHeader: "CHECK index 3",
        actionDetails: "Expected: 3 + 1 = 4. Present: 4. MATCH ✓",
        tone: "good" as const,
        isFinalReturn: false,
      };
    }
    if (frame < 3959) {
      return {
        arrayState: pass2State,
        pointerIdx: 4,
        targetIdx: -1,
        isSwapping: false,
        phase: "PASS 2: VERIFICATION SCAN",
        swapCount: 4,
        actionHeader: "FIRST MISMATCH DETECTED!",
        actionDetails: "Index 4 expected 4 + 1 = 5, but contains 1! Gap discovered!",
        tone: "warn" as const,
        isFinalReturn: false,
      };
    }
    return {
      arrayState: pass2State,
      pointerIdx: 4,
      targetIdx: -1,
      isSwapping: false,
      phase: "FINAL RESULT",
      swapCount: 4,
      actionHeader: "FIRST MISSING POSITIVE = 5",
      actionDetails: "Indices 0..3 have 1..4. Index 4 misses 5. Return 5!",
      tone: "good" as const,
      isFinalReturn: true,
    };
  }, [frame]);

  // Array elements
  const elements = useMemo(() => {
    return arrayState.map((val, idx) => {
      const isCur = idx === pointerIdx;
      const isTarget = idx === targetIdx;
      const isInHome = val === idx + 1 && idx < 4;

      return {
        value: val,
        slotState: isCur
          ? isFinalReturn
            ? ("confirmed" as const)
            : ("current" as const)
          : isTarget
          ? ("query" as const)
          : isInHome
          ? ("confirmed" as const)
          : ("default" as const),
        valueState: isCur
          ? isFinalReturn
            ? ("confirmed" as const)
            : ("current" as const)
          : isTarget
          ? ("query" as const)
          : isInHome
          ? ("confirmed" as const)
          : ("default" as const),
        fill: isCur
          ? isFinalReturn
            ? "rgba(60, 229, 167, 0.35)"
            : "rgba(255, 209, 102, 0.28)"
          : isTarget
          ? "rgba(92, 225, 230, 0.22)"
          : isInHome
          ? "rgba(60, 229, 167, 0.16)"
          : undefined,
        stroke: isCur
          ? isFinalReturn
            ? theme.good
            : theme.pivot
          : isTarget
          ? theme.cyan
          : isInHome
          ? theme.good
          : undefined,
      };
    });
  }, [arrayState, pointerIdx, targetIdx, isFinalReturn]);

  // Variables panel
  const variables = useMemo(() => {
    const curVal = pointerIdx >= 0 ? arrayState[pointerIdx] : "-";
    return [
      { name: "Phase", value: phase, status: isFinalReturn ? ("good" as const) : ("pivot" as const) },
      { name: "i (pointer)", value: pointerIdx >= 0 ? pointerIdx : "-", status: "neutral" as const },
      { name: "nums[i]", value: curVal, status: isSwapping ? ("pivot" as const) : ("neutral" as const) },
      { name: "Target Index", value: targetIdx >= 0 ? targetIdx : "-", status: targetIdx >= 0 ? ("pivot" as const) : ("neutral" as const) },
      { name: "Swaps Performed", value: `${swapCount} / 4`, status: swapCount > 0 ? ("good" as const) : ("neutral" as const) },
    ];
  }, [phase, pointerIdx, arrayState, isSwapping, targetIdx, swapCount, isFinalReturn]);

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

      <Audio src={staticFile("audio/018/scence10.mp3")} />

      {/* Header */}
      <BoardHeaderMobile
        stepBadge="SCENE 10"
        stepTitle="OPTIMAL CYCLE SORT TRACE"
        algorithmName="In-Place 4-Swap Execution & Linear Verification"
        difficulty="HARD"
      />

      {/* Top: Array Track with Dynamic Mutations */}
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
            marginBottom: 12,
            letterSpacing: 2,
          }}
        >
          {phase === "PASS 2: VERIFICATION SCAN" || phase === "FINAL RESULT"
            ? "REORGANIZED ARRAY · nums = [1, 2, 3, 4, 1, 10, 0, -1]"
            : "ACTIVE MUTATING ARRAY TRACK · N = 8"}
        </div>

        <ArrayTrackV2
          elements={elements}
          pointers={[
            ...(pointerIdx >= 0
              ? [
                  {
                    id: "p-i",
                    index: pointerIdx,
                    label: isFinalReturn ? "ANS = 5" : `i = ${pointerIdx}`,
                    color: isFinalReturn ? theme.good : theme.pivot,
                  },
                ]
              : []),
            ...(targetIdx >= 0 && targetIdx !== pointerIdx
              ? [
                  {
                    id: "p-target",
                    index: targetIdx,
                    label: `home = ${targetIdx}`,
                    color: theme.cyan,
                  },
                ]
              : []),
          ]}
          slotWidth={120}
          slotHeight={95}
          gap={22}
          showIndices
        />
      </div>

      {/* Bottom Area: State Variables + Reasoning Panel (Y: 440 to 860) */}
      <div
        style={{
          position: "absolute",
          top: 440,
          left: 100,
          right: 100,
          display: "flex",
          gap: 36,
          alignItems: "stretch",
        }}
      >
        {/* Left: State Variables Panel */}
        <ChalkVariablesPanel
          title="TRACE EXECUTION STATE"
          variables={variables}
          width={540}
        />

        {/* Vertical Divider */}
        <div
          style={{
            width: 2.5,
            backgroundColor: "rgba(232, 228, 213, 0.35)",
            alignSelf: "stretch",
          }}
        />

        {/* Right: Reasoning Panel */}
        <div style={{ flex: 1.2 }}>
          <ChalkReasoningPanel
            title="ALGORITHM CAUSALITY"
            currentAction={actionHeader}
            details={actionDetails}
            ruleKey={
              isFinalReturn
                ? "First missing positive = 5 (Discovered in O(N) time with O(1) space!)"
                : phase.includes("PASS 2")
                ? "Scan left-to-right: First index i where nums[i] != i + 1 returns i + 1"
                : "While 1 <= nums[i] <= N and nums[i] != nums[nums[i]-1]: swap into home"
            }
            tone={tone}
          />
        </div>
      </div>

      {/* Caption Safe Zone */}
      <Captions words={captionWords} />
    </div>
  );
};
