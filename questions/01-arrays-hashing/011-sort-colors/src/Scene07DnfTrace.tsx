/**
 * Scene07DnfTrace.tsx — Scene 07 · FULL 10-STEP DUTCH NATIONAL FLAG TRACE
 * Sort Colors (LeetCode 75) · Pattern 01 — Arrays & Hashing
 *
 * FULL 10-STEP EXECUTION ON MASTER INPUT: [2, 1, 2, 0, 2, 1, 0, 1, 0, 2]
 * All 86 semantic anchors mapped 1:1 with 07-dnf-trace.anchors.json (7,188 frames @ 30 FPS).
 *
 * RULE 16 ZERO-COLLISION & CENTER-STAGE SPATIAL ARCHITECTURE:
 * - Canvas: 1920 × 1080 (Oxford Chalkboard Green #19523C)
 * - Top Header: Y: 28 .. 90
 * - Zone A (Array Track Hero): Y: 105 .. 380 (10 slots, 1244px wide, centered at left: 338px)
 *   - Header marginBottom: 46px clears top partition tags (top: -34px)
 *   - Pointer Lane 0: low & high (Y: 270 .. 345)
 *   - Pointer Lane 1: mid (Y: 345 .. 379, clearance of 34px below Lane 0)
 *   - PartitionBandV2 variant="band" (dashed underlay container, zero collision with bottom indices)
 * - Zone B (Dynamic Pedagogical Cards): Y: 430 .. 740
 *   - Strictly starts at Y: 430px (51px clean chalkboard breathing room below pointer mid)
 * - Zone C (Bottom Captions): Y: 980 .. 1040 (240px breathing room below Zone B cards)
 * - Remotion Determinism: 100% derived from useCurrentFrame(), zero CSS transitions or keyframes.
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
import {
  ArrayTrackV2,
  ArrayValueV2,
  ArrayPartition,
  ArrayPointer,
  SwapAnimationConfig,
  SemanticSlotState,
  RoughBox,
} from "../../../../kit/components";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import syncData from "../sync/07-dnf-trace.json";
import anchorsData from "../sync/07-dnf-trace.anchors.json";

// Word-level caption timings from verified sync JSON
const captionWords: CaptionWord[] = (syncData.words || [])
  .map((w: any) => ({
    word: w.word,
    start: w.start_ms / 1000,
    end: w.end_ms / 1000,
  }))
  .filter((w) => w.word !== "");

// Helper to look up anchor timing safely
const getAnchor = (id: string) => {
  const found = anchorsData.anchors.find((a: any) => a.id === id);
  if (!found) throw new Error(`Missing required anchor: ${id}`);
  return found;
};

// Canvas & Array Geometry Constants (10 slots = 1244px width)
const CANVAS_WIDTH = 1920;
const CANVAS_HEIGHT = 1080;
const SLOT_WIDTH = 110;
const SLOT_HEIGHT = 100;
const SLOT_GAP = 16;
const ARRAY_TRACK_WIDTH = 10 * SLOT_WIDTH + 9 * SLOT_GAP; // 1244px
const ARRAY_TRACK_LEFT = Math.round((CANVAS_WIDTH - ARRAY_TRACK_WIDTH) / 2); // 338px

// Vertical Stage Distribution Constants (Balanced Center-Stage & Zero Collision)
const ARRAY_TRACK_TOP = 250;
const ARRAY_HEADER_MARGIN_BOTTOM = 92;
const CARD_TOP = 650;
const CARD_HEIGHT = 150;

// Master Testcase Array (n = 10)
const INITIAL_ARRAY = [2, 1, 2, 0, 2, 1, 0, 1, 0, 2];

// Exact word ranges from 07-dnf-trace.json for input value read-aloud sweep (frames 140..398)
const READ_SLOT_RANGES = [
  { idx: 0, start: 140, nextStart: 160 },
  { idx: 1, start: 160, nextStart: 181 },
  { idx: 2, start: 181, nextStart: 211 },
  { idx: 3, start: 211, nextStart: 238 },
  { idx: 4, start: 238, nextStart: 266 },
  { idx: 5, start: 266, nextStart: 290 },
  { idx: 6, start: 290, nextStart: 316 },
  { idx: 7, start: 316, nextStart: 340 },
  { idx: 8, start: 340, nextStart: 369 },
  { idx: 9, start: 369, nextStart: 398 },
];

export const Scene07DnfTrace: React.FC = () => {
  const frame = useCurrentFrame();

  // ============================================================
  // 1. KEY ANCHOR LANDMARKS (From verified anchors JSON)
  // ============================================================
  // Setup & Intro
  const aIntroRun = useMemo(() => getAnchor("S07_INTRO_RUN"), []);
  const aIntroMaster = useMemo(() => getAnchor("S07_INTRO_MASTER"), []);
  const aArrayVals = useMemo(() => getAnchor("S07_ARRAY_VALS"), []);
  const aStartLow = useMemo(() => getAnchor("S07_START_LOW"), []);
  const aStartMid = useMemo(() => getAnchor("S07_START_MID"), []);
  const aStartHigh = useMemo(() => getAnchor("S07_START_HIGH"), []);
  const aEntireUnknown = useMemo(() => getAnchor("S07_ENTIRE_UNKNOWN"), []);
  const aLetsBegin = useMemo(() => getAnchor("S07_LETS_BEGIN"), []);

  // Step 1: mid=0, val=2 -> swap(0, 9), high 9->8, mid stays 0
  const aSt1Start = useMemo(() => getAnchor("S07_ST1_MID_VAL"), []);
  const aSt1Swap = useMemo(() => getAnchor("S07_ST1_SWAP_DECISION"), []);
  const aSt1BothTwo = useMemo(() => getAnchor("S07_ST1_BOTH_TWO"), []);
  const aSt1HighDec = useMemo(() => getAnchor("S07_ST1_HIGH_DECREMENT"), []);
  const aSt1MidStays = useMemo(() => getAnchor("S07_ST1_MID_STAYS"), []);

  // Step 2: mid=0, val=2 -> swap(0, 8), high 8->7, mid stays 0
  const aSt2Start = useMemo(() => getAnchor("S07_ST2_INSPECT_SAME"), []);
  const aSt2Swap = useMemo(() => getAnchor("S07_ST2_SWAP_TWO_ZERO"), []);
  const aSt2ArrayBecomes = useMemo(() => getAnchor("S07_ST2_ARRAY_BECOMES"), []);
  const aSt2HighDec = useMemo(() => getAnchor("S07_ST2_HIGH_DECREMENT"), []);
  const aSt2MidStays = useMemo(() => getAnchor("S07_ST2_MID_STAYS"), []);

  // Step 3: mid=0, val=0 -> self-swap(0, 0), low 0->1, mid 0->1
  const aSt3Start = useMemo(() => getAnchor("S07_ST3_MID_IS_ZERO"), []);
  const aSt3SelfSwap = useMemo(() => getAnchor("S07_ST3_SELF_SWAP"), []);
  const aSt3LowInc = useMemo(() => getAnchor("S07_ST3_LOW_MOVES"), []);
  const aSt3MidInc = useMemo(() => getAnchor("S07_ST3_MID_MOVES"), []);

  // Step 4: mid=1, val=1 -> no swap, mid 1->2
  const aSt4Start = useMemo(() => getAnchor("S07_ST4_MID_POINTS_ONE"), []);
  const aSt4NoSwap = useMemo(() => getAnchor("S07_ST4_NO_SWAP"), []);
  const aSt4MidInc = useMemo(() => getAnchor("S07_ST4_MID_MOVES_TWO"), []);

  // Step 5: mid=2, val=2 -> swap(2, 7), high 7->6, mid stays 2
  const aSt5Start = useMemo(() => getAnchor("S07_ST5_MID_POINTS_TWO"), []);
  const aSt5Swap = useMemo(() => getAnchor("S07_ST5_SWAP_THEM"), []);
  const aSt5ArrayBecomes = useMemo(() => getAnchor("S07_ST5_ARRAY_BECOMES"), []);
  const aSt5HighDec = useMemo(() => getAnchor("S07_ST5_HIGH_DECREMENT"), []);
  const aSt5MidStays = useMemo(() => getAnchor("S07_ST5_MID_STAYS"), []);

  // Step 6: mid=2, val=1 -> no swap, mid 2->3
  const aSt6Start = useMemo(() => getAnchor("S07_ST6_VAL_FROM_RIGHT"), []);
  const aSt6NoSwap = useMemo(() => getAnchor("S07_ST6_NO_SWAP"), []);
  const aSt6MidInc = useMemo(() => getAnchor("S07_ST6_MID_MOVES_THREE"), []);

  // Step 7: mid=3, val=0 -> swap(3, 1), low 1->2, mid 3->4
  const aSt7Start = useMemo(() => getAnchor("S07_ST7_MID_POINTS_ZERO"), []);
  const aSt7Swap = useMemo(() => getAnchor("S07_ST7_SWAP_THREE_ONE"), []);
  const aSt7ArrayBecomes = useMemo(() => getAnchor("S07_ST7_ARRAY_BECOMES"), []);
  const aSt7LowInc = useMemo(() => getAnchor("S07_ST7_LOW_MOVES_TWO"), []);
  const aSt7MidInc = useMemo(() => getAnchor("S07_ST7_MID_MOVES_FOUR"), []);

  // Step 8: mid=4, val=2 -> swap(4, 6), high 6->5, mid stays 4
  const aSt8Start = useMemo(() => getAnchor("S07_ST8_AT_INDEX_FOUR"), []);
  const aSt8Swap = useMemo(() => getAnchor("S07_ST8_SWAP_THEM"), []);
  const aSt8ArrayBecomes = useMemo(() => getAnchor("S07_ST8_ARRAY_BECOMES"), []);
  const aSt8HighDec = useMemo(() => getAnchor("S07_ST8_HIGH_DECREMENT"), []);
  const aSt8MidStays = useMemo(() => getAnchor("S07_ST8_MID_STAYS"), []);

  // Step 9: mid=4, val=0 -> swap(4, 2), low 2->3, mid 4->5
  const aSt9Start = useMemo(() => getAnchor("S07_ST9_LOOK_CAREFULLY"), []);
  const aSt9NewValZero = useMemo(() => getAnchor("S07_ST9_NEW_VAL_ZERO"), []);
  const aSt9WhyNotMove = useMemo(() => getAnchor("S07_ST9_WHY_NOT_MOVE"), []);
  const aSt9Swap = useMemo(() => getAnchor("S07_ST9_SWAP_FOUR_TWO"), []);
  const aSt9ArrayBecomes = useMemo(() => getAnchor("S07_ST9_ARRAY_BECOMES"), []);
  const aSt9LowInc = useMemo(() => getAnchor("S07_ST9_LOW_MOVES_THREE"), []);
  const aSt9MidInc = useMemo(() => getAnchor("S07_ST9_MID_MOVES_FIVE"), []);

  // Step 10: mid=5, val=1 -> no swap, mid 5->6, high=5
  const aSt10Start = useMemo(() => getAnchor("S07_ST10_MID_POINTS_ONE"), []);
  const aSt10MoveMid = useMemo(() => getAnchor("S07_ST10_MOVE_MID_FORWARD"), []);
  const aSt10MidSix = useMemo(() => getAnchor("S07_ST10_MID_BECOMES_SIX"), []);
  const aSt10HighFive = useMemo(() => getAnchor("S07_ST10_HIGH_IS_FIVE"), []);

  // Termination & Recap
  const aTermCrossed = useMemo(() => getAnchor("S07_TERM_CROSSED"), []);
  const aTermEmpty = useMemo(() => getAnchor("S07_TERM_EMPTY"), []);
  const aTermClassified = useMemo(() => getAnchor("S07_TERM_CLASSIFIED"), []);
  const aFinalArrayVals = useMemo(() => getAnchor("S07_FINAL_ARRAY_VALS"), []);
  const aFinalDone = useMemo(() => getAnchor("S07_FINAL_DONE"), []);
  const aRecapPattern = useMemo(() => getAnchor("S07_RECAP_PATTERN"), []);
  const aRecapZeroLeft = useMemo(() => getAnchor("S07_RECAP_ZERO_LEFT"), []);
  const aRecapOneMiddle = useMemo(() => getAnchor("S07_RECAP_ONE_MIDDLE"), []);
  const aRecapTwoRight = useMemo(() => getAnchor("S07_RECAP_TWO_RIGHT"), []);
  const aRecapMidStays = useMemo(() => getAnchor("S07_RECAP_MID_STAYS_RULE"), []);

  // ============================================================
  // 2. DETERMINISTIC STATE INTERPOLATION ACROSS ALL 10 STEPS
  // ============================================================
  // Pointer 'low'
  let lowIdx = 0;
  if (frame >= aSt9LowInc.startFrame) {
    lowIdx = interpolate(frame, [aSt9LowInc.startFrame, aSt9LowInc.endFrame], [2, 3], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  } else if (frame >= aSt7LowInc.startFrame) {
    lowIdx = interpolate(frame, [aSt7LowInc.startFrame, aSt7LowInc.endFrame], [1, 2], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  } else if (frame >= aSt3LowInc.startFrame) {
    lowIdx = interpolate(frame, [aSt3LowInc.startFrame, aSt3LowInc.endFrame], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  }

  // Pointer 'mid'
  let midIdx = 0;
  if (frame >= aSt10MidSix.startFrame) {
    midIdx = interpolate(frame, [aSt10MidSix.startFrame, aSt10MidSix.endFrame], [5, 6], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  } else if (frame >= aSt9MidInc.startFrame) {
    midIdx = interpolate(frame, [aSt9MidInc.startFrame, aSt9MidInc.endFrame], [4, 5], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  } else if (frame >= aSt7MidInc.startFrame) {
    midIdx = interpolate(frame, [aSt7MidInc.startFrame, aSt7MidInc.endFrame], [3, 4], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  } else if (frame >= aSt6MidInc.startFrame) {
    midIdx = interpolate(frame, [aSt6MidInc.startFrame, aSt6MidInc.endFrame], [2, 3], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  } else if (frame >= aSt4MidInc.startFrame) {
    midIdx = interpolate(frame, [aSt4MidInc.startFrame, aSt4MidInc.endFrame], [1, 2], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  } else if (frame >= aSt3MidInc.startFrame) {
    midIdx = interpolate(frame, [aSt3MidInc.startFrame, aSt3MidInc.endFrame], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  }

  // Pointer 'high'
  let highIdx = 9;
  if (frame >= aSt8HighDec.startFrame) {
    highIdx = interpolate(frame, [aSt8HighDec.startFrame, aSt8HighDec.endFrame], [6, 5], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  } else if (frame >= aSt5HighDec.startFrame) {
    highIdx = interpolate(frame, [aSt5HighDec.startFrame, aSt5HighDec.endFrame], [7, 6], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  } else if (frame >= aSt2HighDec.startFrame) {
    highIdx = interpolate(frame, [aSt2HighDec.startFrame, aSt2HighDec.endFrame], [8, 7], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  } else if (frame >= aSt1HighDec.startFrame) {
    highIdx = interpolate(frame, [aSt1HighDec.startFrame, aSt1HighDec.endFrame], [9, 8], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  }

  // Current Array Values (Piecewise State based on verified trace steps)
  const currentArrayValues = useMemo(() => {
    // Step 9 swap: [0,0,0,1,1,1,2,2,2,2]
    if (frame >= aSt9Swap.endFrame) {
      return [0, 0, 0, 1, 1, 1, 2, 2, 2, 2];
    }
    // Step 8 swap: [0,0,1,1,0,1,2,2,2,2]
    if (frame >= aSt8Swap.endFrame) {
      return [0, 0, 1, 1, 0, 1, 2, 2, 2, 2];
    }
    // Step 7 swap: [0,0,1,1,2,1,0,2,2,2]
    if (frame >= aSt7Swap.endFrame) {
      return [0, 0, 1, 1, 2, 1, 0, 2, 2, 2];
    }
    // Step 5 swap: [0,1,1,0,2,1,0,2,2,2]
    if (frame >= aSt5Swap.endFrame) {
      return [0, 1, 1, 0, 2, 1, 0, 2, 2, 2];
    }
    // Step 2 swap: [0,1,2,0,2,1,0,1,2,2]
    if (frame >= aSt2Swap.endFrame) {
      return [0, 1, 2, 0, 2, 1, 0, 1, 2, 2];
    }
    // Initial: [2,1,2,0,2,1,0,1,0,2]
    return [2, 1, 2, 0, 2, 1, 0, 1, 0, 2];
  }, [
    frame,
    aSt2Swap.endFrame,
    aSt5Swap.endFrame,
    aSt7Swap.endFrame,
    aSt8Swap.endFrame,
    aSt9Swap.endFrame,
  ]);

  // Current Active Step (1..10 or 0 for Intro, 11 for Term/Recap)
  const currentStep = useMemo(() => {
    if (frame >= aTermCrossed.startFrame) return 11;
    if (frame >= aSt10Start.startFrame) return 10;
    if (frame >= aSt9Start.startFrame) return 9;
    if (frame >= aSt8Start.startFrame) return 8;
    if (frame >= aSt7Start.startFrame) return 7;
    if (frame >= aSt6Start.startFrame) return 6;
    if (frame >= aSt5Start.startFrame) return 5;
    if (frame >= aSt4Start.startFrame) return 4;
    if (frame >= aSt3Start.startFrame) return 3;
    if (frame >= aSt2Start.startFrame) return 2;
    if (frame >= aSt1Start.startFrame) return 1;
    return 0;
  }, [
    frame,
    aSt1Start.startFrame,
    aSt2Start.startFrame,
    aSt3Start.startFrame,
    aSt4Start.startFrame,
    aSt5Start.startFrame,
    aSt6Start.startFrame,
    aSt7Start.startFrame,
    aSt8Start.startFrame,
    aSt9Start.startFrame,
    aSt10Start.startFrame,
    aTermCrossed.startFrame,
  ]);

  // Pointers visibility
  const showLow = frame >= aStartLow.startFrame;
  const showMid = frame >= aStartMid.startFrame;
  const showHigh = frame >= aStartHigh.startFrame;

  // Active Swap Configuration
  let swapConfig: SwapAnimationConfig | undefined = undefined;
  if (frame >= aSt2Swap.startFrame && frame <= aSt2Swap.endFrame) {
    const progress = interpolate(frame, [aSt2Swap.startFrame, aSt2Swap.endFrame], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    swapConfig = { idxA: 0, idxB: 8, progress, arcHeight: -75, label: "swap(0, 8)" };
  } else if (frame >= aSt5Swap.startFrame && frame <= aSt5Swap.endFrame) {
    const progress = interpolate(frame, [aSt5Swap.startFrame, aSt5Swap.endFrame], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    swapConfig = { idxA: 2, idxB: 7, progress, arcHeight: -75, label: "swap(2, 7)" };
  } else if (frame >= aSt7Swap.startFrame && frame <= aSt7Swap.endFrame) {
    const progress = interpolate(frame, [aSt7Swap.startFrame, aSt7Swap.endFrame], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    swapConfig = { idxA: 3, idxB: 1, progress, arcHeight: -75, label: "swap(3, 1)" };
  } else if (frame >= aSt8Swap.startFrame && frame <= aSt8Swap.endFrame) {
    const progress = interpolate(frame, [aSt8Swap.startFrame, aSt8Swap.endFrame], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    swapConfig = { idxA: 4, idxB: 6, progress, arcHeight: -75, label: "swap(4, 6)" };
  } else if (frame >= aSt9Swap.startFrame && frame <= aSt9Swap.endFrame) {
    const progress = interpolate(frame, [aSt9Swap.startFrame, aSt9Swap.endFrame], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    swapConfig = { idxA: 4, idxB: 2, progress, arcHeight: -75, label: "swap(4, 2)" };
  }

  // Pointer definitions with strict lane separation (Rule 16)
  const pointers: ArrayPointer[] = [];
  if (showLow) {
    pointers.push({
      id: "ptr-low",
      index: lowIdx,
      label: "low",
      color: theme.warn,
      lane: 0,
    });
  }
  if (showMid) {
    pointers.push({
      id: "ptr-mid",
      index: midIdx,
      label: "mid",
      color: theme.pivot,
      lane: 1, // 34px below Lane 0
    });
  }
  if (showHigh) {
    pointers.push({
      id: "ptr-high",
      index: highIdx,
      label: "high",
      color: theme.cyan,
      lane: 0,
    });
  }

  // Partition Bands (variant: "band" guarantees zero bottom collision with indices)
  const partitions: ArrayPartition[] = [];
  const roundedLow = Math.round(lowIdx);
  const roundedMid = Math.round(midIdx);
  const roundedHigh = Math.round(highIdx);

  if (frame >= aEntireUnknown.startFrame) {
    // 0s Region: [0 .. low-1]
    if (roundedLow - 1 >= 0) {
      const isSingle = roundedLow - 1 === 0;
      partitions.push({
        id: "part-0s",
        startIndex: 0,
        endIndex: roundedLow - 1,
        label: isSingle ? "0s" : `0s [0..${roundedLow - 1}]`,
        color: theme.warn,
        variant: "band",
      });
    }

    // 1s Region: [low .. mid-1]
    if (roundedMid - 1 >= roundedLow) {
      const isSingle = roundedMid - 1 === roundedLow;
      partitions.push({
        id: "part-1s",
        startIndex: roundedLow,
        endIndex: roundedMid - 1,
        label: isSingle ? "1s" : `1s [${roundedLow}..${roundedMid - 1}]`,
        color: theme.chalkText,
        variant: "band",
      });
    }

    // Unknown Region: [mid .. high]
    if (roundedHigh >= roundedMid) {
      const isSingle = roundedHigh === roundedMid;
      partitions.push({
        id: "part-unknown",
        startIndex: roundedMid,
        endIndex: roundedHigh,
        label: isSingle ? `UNKNOWN [${roundedMid}]` : "UNKNOWN [mid..high]",
        color: theme.pivot,
        variant: "band",
      });
    }

    // 2s Region: [high+1 .. n-1]
    if (roundedHigh + 1 <= 9) {
      const isSingle = roundedHigh + 1 === 9;
      partitions.push({
        id: "part-2s",
        startIndex: roundedHigh + 1,
        endIndex: 9,
        label: isSingle ? "2s" : `2s [${roundedHigh + 1}..9]`,
        color: theme.cyan,
        variant: "band",
      });
    }
  }

  // Anchor 2: "On our master example," (F69 .. F111)
  const isMasterSpoken = frame >= aIntroMaster.startFrame && frame < aIntroMaster.endFrameExclusive;

  // Anchor 3: "our array is 2, 1, 2, 0, 2, 1, 0, 1, 0, 2." (F111 .. F398)
  const activeReadIdx = useMemo(() => {
    if (frame < 140 || frame >= 398) return -1;
    for (const r of READ_SLOT_RANGES) {
      if (frame >= r.start && frame < r.nextStart) {
        return r.idx;
      }
    }
    return -1;
  }, [frame]);

  // Build Array Elements
  const elements = currentArrayValues.map((val, idx) => {
    let slotState: SemanticSlotState = "default";
    const inspectedIdx = Math.round(midIdx);

    // Active inspected slot receives highlight
    if (currentStep >= 1 && currentStep <= 10 && idx === inspectedIdx) {
      slotState = "current";
    } else if (isMasterSpoken) {
      // During "On our master example," (F69..F111), all 10 slots of master testcase highlight
      slotState = "current";
    } else if (currentStep === 0 && idx === activeReadIdx) {
      // During read-aloud sweep (F140..F398), spoken slot highlights
      slotState = "current";
    }

    return {
      value: val,
      slotState,
    };
  });

  // Header Stage Tag
  let headerStatusText = "STEP-BY-STEP TRACE";
  if (currentStep === 0) {
    if (isMasterSpoken) headerStatusText = "MASTER TESTCASE";
    else if (activeReadIdx >= 0 || (frame >= 111 && frame < 140)) headerStatusText = "ARRAY VALUES";
    else headerStatusText = "TRACE INITIALIZATION";
  } else if (currentStep >= 1 && currentStep <= 10) {
    headerStatusText = `STEP ${currentStep} OF 10`;
  } else {
    headerStatusText = "ALGORITHM TERMINATED";
  }

  return (
    <div
      style={{
        position: "relative",
        width: CANVAS_WIDTH,
        height: CANVAS_HEIGHT,
        overflow: "hidden",
        backgroundColor: theme.boardBg,
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      {/* Synchronized Audio Track */}
      <Audio src={staticFile("audio/011/07-dnf-trace.mp3")} />

      {/* ============================================================ */}
      {/* 1. TOP HEADER (Y: 28 .. 90)                                  */}
      {/* ============================================================ */}
      <div
        style={{
          position: "absolute",
          top: 30,
          left: 40,
          right: 40,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 20,
        }}
      >
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 13,
              fontWeight: 800,
              color: theme.chalkText,
              letterSpacing: "0.08em",
              padding: "4px 12px",
              borderRadius: 4,
              background: "rgba(0, 0, 0, 0.4)",
              border: `1px solid ${theme.cardBorder}`,
            }}
          >
            QUESTION 011 · SORT COLORS
          </div>

          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 13,
              fontWeight: 800,
              color: theme.pivot,
              letterSpacing: "0.08em",
              padding: "4px 12px",
              borderRadius: 4,
              background: "rgba(255, 209, 102, 0.1)",
              border: `1px solid ${theme.pivot}`,
            }}
          >
            APPROACH 2 · THE THREE-POINTER (DNF) TRACE
          </div>
        </div>

        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 12,
            fontWeight: 800,
            color: theme.good,
            letterSpacing: "0.08em",
            padding: "4px 12px",
            borderRadius: 4,
            background: "rgba(60, 229, 167, 0.1)",
            border: `1px solid ${theme.good}`,
          }}
        >
          {headerStatusText}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. ZONE A: ARRAY TRACK HERO (Centered in Upper-Middle Canvas) */}
      {/* Lowered to Y: 250 to balance canvas & eliminate bottom void  */}
      {/* ============================================================ */}
      <div
        style={{
          position: "absolute",
          top: ARRAY_TRACK_TOP,
          left: ARRAY_TRACK_LEFT,
          width: ARRAY_TRACK_WIDTH,
          zIndex: 10,
        }}
      >
        {/* Track Title Header with strict marginBottom to clear overhead swap arcs */}
        <div
          style={{
            marginBottom: ARRAY_HEADER_MARGIN_BOTTOM,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 14,
              fontWeight: 800,
              color: theme.good,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span>nums [10 elements] · In-Place Traversal</span>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: isMasterSpoken ? "3px 12px" : "2px 8px",
                borderRadius: 6,
                background: isMasterSpoken ? "rgba(255, 209, 102, 0.22)" : "rgba(255, 255, 255, 0.04)",
                border: isMasterSpoken ? `1.5px solid ${theme.pivot}` : `1px solid ${theme.cardBorder}`,
                boxShadow: isMasterSpoken ? "0 0 18px rgba(255, 209, 102, 0.5)" : "none",
                transform: isMasterSpoken ? "scale(1.05)" : "scale(1.0)",
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  color: isMasterSpoken ? theme.pivot : theme.chalkDim,
                  letterSpacing: "0.04em",
                }}
              >
                MASTER TESTCASE:
              </span>
              <span
                style={{
                  fontSize: 12,
                  fontFamily: fonts.mono,
                  fontWeight: isMasterSpoken ? 900 : 600,
                  color: isMasterSpoken ? "#FFFFFF" : theme.chalkDim,
                }}
              >
                [2, 1, 2, 0, 2, 1, 0, 1, 0, 2]
              </span>
            </div>
          </div>

          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 12,
              fontWeight: 700,
              color: theme.pivot,
            }}
          >
            {showLow && showMid && showHigh
              ? `POINTERS ACTIVE: low=${Math.round(lowIdx)} · mid=${Math.round(midIdx)} · high=${Math.round(highIdx)}`
              : isMasterSpoken
              ? "🎯 MASTER TESTCASE LOCKED (10 ELEMENTS)"
              : activeReadIdx >= 0
              ? `READING ARRAY: nums[${activeReadIdx}] = ${currentArrayValues[activeReadIdx]}`
              : frame >= 111 && frame < 140
              ? "READING MASTER ARRAY..."
              : "INITIALIZING POINTERS..."}
          </div>
        </div>

        {/* ArrayTrackV2 Component */}
        <ArrayTrackV2
          elements={elements}
          slotWidth={SLOT_WIDTH}
          slotHeight={SLOT_HEIGHT}
          gap={SLOT_GAP}
          showIndices={true}
          indexPlacement="bottom"
          pointers={pointers}
          pointerPlacement="bottom"
          partitions={partitions}
          swap={swapConfig}
          renderValue={(item, rect) => {
            const valNum = Number(item.value);
            const isZero = valNum === 0;
            const isOne = valNum === 1;
            const isTwo = valNum === 2;

            let color: string = theme.chalkText;
            if (isZero) color = theme.warn;
            else if (isOne) color = theme.chalkText;
            else if (isTwo) color = theme.cyan;

            const isInspectedSlot = currentStep >= 1 && currentStep <= 10 && rect.index === Math.round(midIdx);
            const isReadingSlot = currentStep === 0 && rect.index === activeReadIdx;
            const isMasterSlot = currentStep === 0 && isMasterSpoken;
            const scale = isInspectedSlot || isReadingSlot || isMasterSlot ? 1.2 : 1.0;

            return (
              <ArrayValueV2
                key={`val-${rect.index}`}
                value={item.value}
                x={rect.centerX}
                y={rect.centerY}
                fontSize={44}
                color={color}
                scale={scale}
              />
            );
          }}
        />
      </div>

      {/* ============================================================ */}
      {/* 3. ZONE B: CENTER-STAGE DYNAMIC PEDAGOGICAL CARDS (Y: 650..800) */}
      {/* Compact 150px card framed by @dsa/kit RoughBox with zero overlap */}
      {/* ============================================================ */}
      <div
        style={{
          position: "absolute",
          top: CARD_TOP,
          left: ARRAY_TRACK_LEFT,
          width: ARRAY_TRACK_WIDTH,
          height: CARD_HEIGHT,
          zIndex: 15,
        }}
      >
        {/* ------------------------------------------------------------ */}
        {/* SETUP PHASE: (F0 .. F706)                                    */}
        {/* ------------------------------------------------------------ */}
        {currentStep === 0 && (
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              borderRadius: 10,
              background: "rgba(0, 0, 0, 0.45)",
              overflow: "hidden",
            }}
          >
            {/* Authentic Kit RoughBox Frame */}
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
              <RoughBox
                width={ARRAY_TRACK_WIDTH}
                height={CARD_HEIGHT}
                stroke={theme.cardBorder}
                seed={101}
                strokeWidth={2}
              />
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                height: "100%",
                padding: "10px 18px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontFamily: fonts.hand, fontSize: 20, fontWeight: 700, color: theme.chalkText }}>
                  Dutch National Flag · 3-Pointer Partition Setup
                </div>
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 11,
                    color: theme.good,
                    fontWeight: 700,
                    padding: "2px 8px",
                    borderRadius: 4,
                    background: "rgba(60, 229, 167, 0.12)",
                    border: `1px solid ${theme.good}`,
                  }}
                >
                  10 ITERATIONS · SINGLE PASS
                </div>
              </div>

              <div style={{ display: "flex", gap: 12 }}>
                <div
                  style={{
                    flex: 1,
                    padding: "6px 12px",
                    borderRadius: 6,
                    background: "rgba(255, 118, 117, 0.1)",
                    border: `1px solid ${theme.warn}`,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.warn }}>
                    LOW = 0
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 11, color: theme.chalkText }}>
                    0s Boundary: items before low are strictly 0.
                  </div>
                </div>

                <div
                  style={{
                    flex: 1,
                    padding: "6px 12px",
                    borderRadius: 6,
                    background: "rgba(255, 209, 102, 0.1)",
                    border: `1px solid ${theme.pivot}`,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.pivot }}>
                    MID = 0
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 11, color: theme.chalkText }}>
                    Active Scanner: inspects unknown items [mid..high].
                  </div>
                </div>

                <div
                  style={{
                    flex: 1,
                    padding: "6px 12px",
                    borderRadius: 6,
                    background: "rgba(92, 225, 230, 0.1)",
                    border: `1px solid ${theme.cyan}`,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.cyan }}>
                    HIGH = 9
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 11, color: theme.chalkText }}>
                    2s Boundary: items after high are strictly 2.
                  </div>
                </div>
              </div>

              <div
                style={{
                  padding: "4px 12px",
                  borderRadius: 6,
                  background: "rgba(0, 0, 0, 0.35)",
                  border: `1px dashed ${theme.pivot}`,
                  fontFamily: fonts.mono,
                  fontSize: 11,
                  color: theme.pivot,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>UNKNOWN REGION: [mid .. high] = [0 .. 9] · 10 elements unclassified</span>
                <span style={{ fontWeight: 800, color: theme.good }}>READY TO BEGIN ➔</span>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------ */}
        {/* ITERATIONS 1 THROUGH 10: STEP-BY-STEP PEDAGOGICAL CARDS      */}
        {/* ------------------------------------------------------------ */}
        {currentStep >= 1 && currentStep <= 10 && (
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              borderRadius: 10,
              background: "rgba(0, 0, 0, 0.5)",
              boxShadow: currentStep === 9 ? "0 0 24px rgba(60, 229, 167, 0.35)" : "none",
              overflow: "hidden",
            }}
          >
            {/* Authentic Kit RoughBox Frame */}
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
              <RoughBox
                width={ARRAY_TRACK_WIDTH}
                height={CARD_HEIGHT}
                stroke={currentStep === 9 ? theme.good : theme.cardBorder}
                seed={120 + currentStep}
                strokeWidth={currentStep === 9 ? 2.8 : 1.8}
              />
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                height: "100%",
                padding: "10px 18px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Top Row: Step Title & Highlight Badge */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 18 }}>
                    {currentStep === 9 ? "🌟" : "⚡"}
                  </span>
                  <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: theme.chalkText }}>
                    STEP {currentStep} OF 10 · {
                      currentStep === 1 ? "nums[0] == 2 ➔ SWAP WITH HIGH (2 <-> 2)" :
                      currentStep === 2 ? "nums[0] == 2 ➔ SWAP WITH HIGH (2 <-> 0)" :
                      currentStep === 3 ? "nums[0] == 0 ➔ SELF-SWAP (0 <-> 0)" :
                      currentStep === 4 ? "nums[1] == 1 ➔ IN MIDDLE (NO SWAP)" :
                      currentStep === 5 ? "nums[2] == 2 ➔ SWAP WITH HIGH (2 <-> 1)" :
                      currentStep === 6 ? "nums[2] == 1 ➔ INCOMING 1 (NO SWAP)" :
                      currentStep === 7 ? "nums[3] == 0 ➔ SWAP WITH LOW (0 <-> 1)" :
                      currentStep === 8 ? "nums[4] == 2 ➔ SWAP WITH HIGH (2 <-> 0)" :
                      currentStep === 9 ? "CLIMAX: nums[4] == 0 ➔ SWAP WITH LOW (0 <-> 1)" :
                      "FINAL: nums[5] == 1 ➔ IN MIDDLE (NO SWAP)"
                    }
                  </div>
                </div>

                <div
                  style={{
                    padding: "2px 8px",
                    borderRadius: 4,
                    background: currentStep === 9 ? "rgba(60,229,167,0.2)" : "rgba(255,209,102,0.15)",
                    border: `1px solid ${currentStep === 9 ? theme.good : theme.pivot}`,
                    fontFamily: fonts.mono,
                    fontSize: 10,
                    fontWeight: 800,
                    color: currentStep === 9 ? theme.good : theme.pivot,
                  }}
                >
                  {currentStep === 9 ? "GOLDEN RULE CLIMAX" : `ITERATION ${currentStep}`}
                </div>
              </div>

              {/* Middle Row: Sleek Unified 4-Segment Invariant Status Strip */}
              <div
                style={{
                  display: "flex",
                  height: 38,
                  borderRadius: 6,
                  border: `1px solid ${theme.cardBorder}`,
                  background: "rgba(0, 0, 0, 0.4)",
                  overflow: "hidden",
                }}
              >
                {/* Region 0s */}
                <div
                  style={{
                    flex: 1,
                    padding: "4px 10px",
                    borderRight: "1px solid rgba(255,118,117,0.3)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "rgba(255,118,117,0.08)",
                  }}
                >
                  <span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, color: theme.warn }}>
                    0s [0..low-1]
                  </span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: theme.chalkText }}>
                    {roundedLow === 0 ? "Empty" : `[0 .. ${roundedLow - 1}] (${roundedLow})`}
                  </span>
                </div>

                {/* Region 1s */}
                <div
                  style={{
                    flex: 1,
                    padding: "4px 10px",
                    borderRight: "1px solid rgba(248,246,240,0.25)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "rgba(248,246,240,0.06)",
                  }}
                >
                  <span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, color: theme.chalkText }}>
                    1s [low..mid-1]
                  </span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: theme.chalkText }}>
                    {roundedMid <= roundedLow ? "Empty" : `[${roundedLow} .. ${roundedMid - 1}] (${roundedMid - roundedLow})`}
                  </span>
                </div>

                {/* Unknown Region */}
                <div
                  style={{
                    flex: 1.15,
                    padding: "4px 10px",
                    borderRight: "1px solid rgba(255,209,102,0.3)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "rgba(255,209,102,0.08)",
                  }}
                >
                  <span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, color: theme.pivot }}>
                    UNKNOWN [mid..high]
                  </span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: theme.pivot }}>
                    {roundedHigh < roundedMid
                      ? "Empty (0 left)"
                      : `[${roundedMid} .. ${roundedHigh}] (${roundedHigh - roundedMid + 1} left)`}
                  </span>
                </div>

                {/* Region 2s */}
                <div
                  style={{
                    flex: 1,
                    padding: "4px 10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "rgba(92,225,230,0.08)",
                  }}
                >
                  <span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, color: theme.cyan }}>
                    2s [high+1..9]
                  </span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: theme.cyan }}>
                    {roundedHigh === 9 ? "Empty" : `[${roundedHigh + 1} .. 9] (${9 - roundedHigh})`}
                  </span>
                </div>
              </div>

              {/* Bottom Row: Compact Action Strip */}
              <div
                style={{
                  padding: "5px 12px",
                  borderRadius: 6,
                  background: "rgba(0,0,0,0.45)",
                  border: `1px solid ${theme.cardBorder}`,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.chalkText }}>
                  {currentStep === 1 ? (
                    <span>Action: <code>swap(nums[0], nums[9])</code> ➔ <code>high--</code> (9 to 8) · <strong>mid stays at 0</strong></span>
                  ) : currentStep === 2 ? (
                    <span>Action: <code>swap(nums[0], nums[8])</code> ➔ <code>high--</code> (8 to 7) · <strong>mid stays at 0</strong></span>
                  ) : currentStep === 3 ? (
                    <span>Action: <code>self-swap(nums[0], nums[0])</code> ➔ <code>low++</code> (0 to 1), <code>mid++</code> (0 to 1)</span>
                  ) : currentStep === 4 ? (
                    <span>Action: <strong>NO SWAP</strong> ➔ <code>mid++</code> (1 to 2)</span>
                  ) : currentStep === 5 ? (
                    <span>Action: <code>swap(nums[2], nums[7])</code> ➔ <code>high--</code> (7 to 6) · <strong>mid stays at 2</strong></span>
                  ) : currentStep === 6 ? (
                    <span>Action: <strong>NO SWAP</strong> (Inspect incoming 1) ➔ <code>mid++</code> (2 to 3)</span>
                  ) : currentStep === 7 ? (
                    <span>Action: <code>swap(nums[3], nums[1])</code> ➔ <code>low++</code> (1 to 2), <code>mid++</code> (3 to 4)</span>
                  ) : currentStep === 8 ? (
                    <span>Action: <code>swap(nums[4], nums[6])</code> ➔ <code>high--</code> (6 to 5) · <strong>mid stays at 4</strong></span>
                  ) : currentStep === 9 ? (
                    <span style={{ color: theme.good, fontWeight: 800 }}>
                      Action: <code>swap(nums[4], nums[2])</code> ➔ <code>low++</code> (2 to 3), <code>mid++</code> (4 to 5) · 0 sorted!
                    </span>
                  ) : (
                    <span>Action: <strong>NO SWAP</strong> ➔ <code>mid++</code> (5 to 6) ➔ mid &gt; high TERMINATION!</span>
                  )}
                </div>

                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 11,
                    color: currentStep === 9 ? theme.good : theme.good,
                    fontWeight: 800,
                  }}
                >
                  {currentStep === 9 ? "🌟 MID FROZEN ROUTED 0 LEFT!" : "✔ 100% IN-PLACE"}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------ */}
        {/* TERMINATION & RECAP: (F6249 .. F7188)                         */}
        {/* ------------------------------------------------------------ */}
        {currentStep === 11 && (
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              borderRadius: 10,
              background: "rgba(0, 0, 0, 0.55)",
              overflow: "hidden",
            }}
          >
            {/* Grand Termination Victory Card (F6249 .. F6819) */}
            {frame < aRecapPattern.startFrame ? (
              <>
                <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                  <RoughBox
                    width={ARRAY_TRACK_WIDTH}
                    height={CARD_HEIGHT}
                    stroke={theme.good}
                    seed={888}
                    strokeWidth={2.5}
                  />
                </div>

                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    height: "100%",
                    padding: "10px 18px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: 20 }}>🎯</span>
                      <div>
                        <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: theme.good }}>
                          TERMINATION LAW: mid &gt; high (6 &gt; 5)
                        </div>
                        <div style={{ fontFamily: fonts.sans, fontSize: 11, color: theme.chalkText }}>
                          Unknown region size = 0. All 10 elements are 100% classified!
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        padding: "2px 8px",
                        borderRadius: 4,
                        background: "rgba(60,229,167,0.2)",
                        border: `1px solid ${theme.good}`,
                        fontFamily: fonts.mono,
                        fontSize: 11,
                        fontWeight: 800,
                        color: theme.good,
                      }}
                    >
                      ARRAY FULLY SORTED
                    </div>
                  </div>

                  {/* 3 Region Invariant Guarantees at Termination */}
                  <div style={{ display: "flex", gap: 12 }}>
                    <div
                      style={{
                        flex: 1,
                        padding: "6px 10px",
                        borderRadius: 6,
                        background: "rgba(0,0,0,0.35)",
                        border: "1px solid rgba(255,118,117,0.4)",
                      }}
                    >
                      <div style={{ fontFamily: fonts.mono, fontSize: 10, color: theme.warn, fontWeight: 700 }}>
                        REGION 0s
                      </div>
                      <div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: theme.chalkText, marginTop: 1 }}>
                        Indices [0 .. 2] ➔ [0, 0, 0]
                      </div>
                    </div>

                    <div
                      style={{
                        flex: 1,
                        padding: "6px 10px",
                        borderRadius: 6,
                        background: "rgba(0,0,0,0.35)",
                        border: "1px solid rgba(255,209,102,0.4)",
                      }}
                    >
                      <div style={{ fontFamily: fonts.mono, fontSize: 10, color: theme.pivot, fontWeight: 700 }}>
                        REGION 1s
                      </div>
                      <div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: theme.chalkText, marginTop: 1 }}>
                        Indices [3 .. 5] ➔ [1, 1, 1]
                      </div>
                    </div>

                    <div
                      style={{
                        flex: 1,
                        padding: "6px 10px",
                        borderRadius: 6,
                        background: "rgba(0,0,0,0.35)",
                        border: "1px solid rgba(92,225,230,0.4)",
                      }}
                    >
                      <div style={{ fontFamily: fonts.mono, fontSize: 10, color: theme.cyan, fontWeight: 700 }}>
                        REGION 2s
                      </div>
                      <div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: theme.chalkText, marginTop: 1 }}>
                        Indices [6 .. 9] ➔ [2, 2, 2, 2]
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "5px 12px",
                      borderRadius: 6,
                      background: "rgba(0,0,0,0.5)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.chalkText }}>
                      [0..2: <span style={{ color: theme.warn, fontWeight: 700 }}>0,0,0</span>] · [3..5:{" "}
                      <span style={{ color: theme.chalkText, fontWeight: 700 }}>1,1,1</span>] · [6..9:{" "}
                      <span style={{ color: theme.cyan, fontWeight: 700 }}>2,2,2,2</span>]
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.good, fontWeight: 800 }}>
                      ✔ 100% SORTED IN A SINGLE PASS
                    </div>
                  </div>
                </div>
              </>
            ) : (
              /* Core DNF Invariant Rules Recap (F6819 .. F7188) */
              <>
                <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                  <RoughBox
                    width={ARRAY_TRACK_WIDTH}
                    height={CARD_HEIGHT}
                    stroke={theme.cardBorder}
                    seed={777}
                    strokeWidth={2}
                  />
                </div>

                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    height: "100%",
                    padding: "10px 18px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontFamily: fonts.hand, fontSize: 20, fontWeight: 700, color: theme.chalkText }}>
                      The 3 Core DNF Invariant Rules
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 10, color: theme.pivot }}>
                      DUTCH NATIONAL FLAG RECAP
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 10 }}>
                    {/* Pillar 1: 0 goes left */}
                    <div
                      style={{
                        flex: 1,
                        padding: "6px 10px",
                        borderRadius: 6,
                        background: "rgba(0,0,0,0.35)",
                        border: `1.5px solid ${theme.warn}`,
                      }}
                    >
                      <div style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 900, color: theme.warn }}>
                        1. 0 GOES LEFT
                      </div>
                      <div style={{ fontFamily: fonts.sans, fontSize: 10, color: theme.chalkText, marginTop: 2, lineHeight: "14px" }}>
                        <code>swap(low, mid)</code><br />
                        <code>low++, mid++</code>
                      </div>
                    </div>

                    {/* Pillar 2: 1 stays in middle */}
                    <div
                      style={{
                        flex: 1,
                        padding: "6px 10px",
                        borderRadius: 6,
                        background: "rgba(0,0,0,0.35)",
                        border: `1.5px solid ${theme.chalkLine}`,
                      }}
                    >
                      <div style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 900, color: theme.chalkText }}>
                        2. 1 STAYS MIDDLE
                      </div>
                      <div style={{ fontFamily: fonts.sans, fontSize: 10, color: theme.chalkText, marginTop: 2, lineHeight: "14px" }}>
                        <strong>NO SWAP</strong><br />
                        <code>mid++</code>
                      </div>
                    </div>

                    {/* Pillar 3: 2 goes right */}
                    <div
                      style={{
                        flex: 1,
                        padding: "6px 10px",
                        borderRadius: 6,
                        background: "rgba(0,0,0,0.35)",
                        border: `1.5px solid ${theme.cyan}`,
                      }}
                    >
                      <div style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 900, color: theme.cyan }}>
                        3. 2 GOES RIGHT
                      </div>
                      <div style={{ fontFamily: fonts.sans, fontSize: 10, color: theme.chalkText, marginTop: 2, lineHeight: "14px" }}>
                        <code>swap(mid, high)</code><br />
                        <code>high--</code> (mid stays!)
                      </div>
                    </div>
                  </div>

                  {/* Golden Caveat Footer & Next Teaser */}
                  <div
                    style={{
                      padding: "5px 12px",
                      borderRadius: 6,
                      background: "rgba(255,209,102,0.1)",
                      border: `1px solid ${theme.pivot}`,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.pivot }}>
                      ⚠️ <strong>CRITICAL:</strong> On 2, <code>mid</code> STAYS until incoming value is checked!
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 10, color: theme.good, fontWeight: 800 }}>
                      NEXT: SCENE 08 · DNF CODE IMPLEMENTATION ➔
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* ============================================================ */}
      {/* 4. BOTTOM CAPTIONS ZONE (Y: 980 .. 1040)                     */}
      {/* ============================================================ */}
      <Captions words={captionWords} />
    </div>
  );
};
