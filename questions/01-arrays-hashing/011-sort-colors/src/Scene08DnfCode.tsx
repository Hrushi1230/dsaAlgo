/**
 * Scene08DnfCode.tsx — Scene 08 · DUTCH NATIONAL FLAG CODE IMPLEMENTATION
 * Sort Colors (LeetCode 75) · Pattern 01 — Arrays & Hashing
 *
 * DYNAMIC REPRESENTATION HANDOFF CHOREOGRAPHY:
 * 1. CODE IDEA SPOKEN -> Code editor owns center stage, statement types character-by-character.
 * 2. ACTION LINE FINISHES -> Code editor reduces / docks, Array takes center stage.
 * 3. NOW TEACH EFFECT -> Array executes direct physical cause-and-effect mutation:
 *    - Values swap in mid-air: swap(nums[mid], nums[high])
 *    - high moves left: high -= 1
 *    - mid does NOT move: mid stays firmly locked!
 *    - Spotlight callout card explains: "Incoming value from high is unknown! Must inspect first."
 * 4. EFFECT FINISHED -> Array reduces, Code returns to center stage.
 * 5. ALL KIT COMPONENTS -> ChalkCodeEditorV2, ArrayTrackV2, RoughBox, ChalkboardBackground, ChalkFilters.
 * 6. ZERO GUESSING -> Exact timing from 08-dnf-code.anchors.json (32 anchors, 2,893 frames @ 30 FPS).
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
  ChalkCodeEditorV2,
  ChalkCodeLine,
  ArrayTrackV2,
  ArrayValueV2,
  ArrayPointer,
  ArrayPartition,
  SwapAnimationConfig,
  RoughBox,
} from "../../../../kit/components";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import syncData from "../sync/08-dnf-code.json";
import anchorsData from "../sync/08-dnf-code.anchors.json";

// Word-level caption timings
const captionWords: CaptionWord[] = (syncData.words || [])
  .map((w: any) => ({
    word: w.word,
    start: w.start_ms / 1000,
    end: w.end_ms / 1000,
  }))
  .filter((w) => w.word !== "");

const EASE = (t: number) =>
  t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

// Helper to look up anchor timing safely
const getAnchor = (id: string) => {
  const found = anchorsData.anchors.find((a: any) => a.id === id);
  if (!found) throw new Error(`Missing required anchor: ${id}`);
  return found;
};

export const Scene08DnfCode: React.FC = () => {
  const frame = useCurrentFrame();

  // ============================================================
  // 1. ANCHOR LANDMARKS (32 exact anchors from 08-dnf-code.anchors.json)
  // ============================================================
  const aStart = useMemo(() => getAnchor("S08_START_IDEA"), []);
  const aThreePointers = useMemo(() => getAnchor("S08_THREE_POINTERS"), []);
  const aInitLow = useMemo(() => getAnchor("S08_INIT_LOW"), []);
  const aInitMid = useMemo(() => getAnchor("S08_INIT_MID"), []);
  const aInitHigh = useMemo(() => getAnchor("S08_INIT_HIGH"), []);
  const aWhileLoop = useMemo(() => getAnchor("S08_WHILE_LOOP"), []);
  const aCheckMid = useMemo(() => getAnchor("S08_CHECK_MID"), []);

  // Branch 0: nums[mid] == 0
  const aBranch0If = useMemo(() => getAnchor("S08_BRANCH0_IF"), []);
  const aBranch0Swap = useMemo(() => getAnchor("S08_BRANCH0_SWAP"), []);
  const aBranch0LowInc = useMemo(() => getAnchor("S08_BRANCH0_LOW_INC"), []);
  const aBranch0MidInc = useMemo(() => getAnchor("S08_BRANCH0_MID_INC"), []);

  // Branch 1: nums[mid] == 1
  const aBranch1If = useMemo(() => getAnchor("S08_BRANCH1_IF"), []);
  const aBranch1Nothing = useMemo(() => getAnchor("S08_BRANCH1_NOTHING_SWAP"), []);
  const aBranch1Middle = useMemo(() => getAnchor("S08_BRANCH1_MIDDLE_REGION"), []);
  const aBranch1MidInc = useMemo(() => getAnchor("S08_BRANCH1_MID_INC"), []);

  // Branch 2: nums[mid] == 2 & "Why mid stays"
  const aBranch2Else = useMemo(() => getAnchor("S08_BRANCH2_ELSE"), []);
  const aBranch2Swap = useMemo(() => getAnchor("S08_BRANCH2_SWAP"), []);
  const aBranch2HighDec = useMemo(() => getAnchor("S08_BRANCH2_HIGH_DEC"), []);
  const aBranch2Notice = useMemo(() => getAnchor("S08_BRANCH2_NOTICE"), []);
  const aBranch2Missing = useMemo(() => getAnchor("S08_BRANCH2_INTENTIONALLY_MISSING"), []);
  const aBranch2Why = useMemo(() => getAnchor("S08_BRANCH2_WHY"), []);
  const aBranch2Unknown = useMemo(() => getAnchor("S08_BRANCH2_UNKNOWN_VAL"), []);
  const aBranch2Inspect = useMemo(() => getAnchor("S08_BRANCH2_INSPECT_FIRST"), []);

  // Termination & Recap
  const aLoopEnd = useMemo(() => getAnchor("S08_LOOP_UNTIL_CROSSED"), []);
  const aUnknownEmpty = useMemo(() => getAnchor("S08_UNKNOWN_EMPTY"), []);
  const aPartitioned = useMemo(() => getAnchor("S08_PARTITIONED"), []);
  const aRecap = useMemo(() => getAnchor("S08_RECAP_SIMPLE"), []);
  const aRecapZero = useMemo(() => getAnchor("S08_RECAP_ZERO_LEFT"), []);
  const aRecapOne = useMemo(() => getAnchor("S08_RECAP_ONE_MIDDLE"), []);
  const aRecapTwo = useMemo(() => getAnchor("S08_RECAP_TWO_RIGHT"), []);
  const aRecapGuarantees = useMemo(() => getAnchor("S08_RECAP_GUARANTEES"), []);

  // ============================================================
  // 2. ACTIVE HIGHLIGHTED CODE LINES
  // ============================================================
  const activeLineNumbers = useMemo(() => {
    if (frame < aThreePointers.startFrame) return [1];
    if (frame < aInitMid.startFrame) return [2];
    if (frame < aInitHigh.startFrame) return [3];
    if (frame < aWhileLoop.startFrame) return [4];
    if (frame < aCheckMid.startFrame) return [6];
    if (frame < aBranch0If.startFrame) return [6];
    if (frame < aBranch0Swap.startFrame) return [7];
    if (frame < aBranch0LowInc.startFrame) return [8];
    if (frame < aBranch0MidInc.startFrame) return [9];
    if (frame < aBranch1If.startFrame) return [10];
    if (frame < aBranch1MidInc.startFrame) return [12];
    if (frame < aBranch2Else.startFrame) return [13];
    if (frame < aBranch2Swap.startFrame) return [15];
    if (frame < aBranch2HighDec.startFrame) return [16];
    if (frame < aBranch2Notice.startFrame) return [17];
    if (frame < aLoopEnd.startFrame) return [18]; // Highlight comment: mid does not advance!
    if (frame < aRecap.startFrame) return [6]; // while mid <= high terminates
    return [7, 8, 9, 10, 12, 13, 15, 16, 17]; // Complete 3-branch overview
  }, [
    frame,
    aThreePointers.startFrame,
    aInitMid.startFrame,
    aInitHigh.startFrame,
    aWhileLoop.startFrame,
    aCheckMid.startFrame,
    aBranch0If.startFrame,
    aBranch0Swap.startFrame,
    aBranch0LowInc.startFrame,
    aBranch0MidInc.startFrame,
    aBranch1If.startFrame,
    aBranch1MidInc.startFrame,
    aBranch2Else.startFrame,
    aBranch2Swap.startFrame,
    aBranch2HighDec.startFrame,
    aBranch2Notice.startFrame,
    aLoopEnd.startFrame,
    aRecap.startFrame,
  ]);

  const isWhySpotlight = frame >= aBranch2Notice.startFrame && frame < aLoopEnd.startFrame;

  // ============================================================
  // 3. PROGRESSIVE CODE LINE TYPING DEFINITIONS
  // ============================================================
  const editorLines: ChalkCodeLine[] = useMemo(
    () => [
      {
        num: 1,
        text: "def sortColors(nums: list[int]) -> None:",
        indent: 0,
        startFrame: 10,
        endFrame: 65,
        tokens: [
          { text: "def ", color: "#93C5FD" },
          { text: "sortColors", color: "#FDE047" },
          { text: "(nums: ", color: theme.chalkText },
          { text: "list", color: "#6EE7B7" },
          { text: "[", color: theme.chalkText },
          { text: "int", color: "#6EE7B7" },
          { text: "]) -> ", color: theme.chalkText },
          { text: "None", color: "#6EE7B7" },
          { text: ":", color: theme.chalkText },
        ],
      },
      {
        num: 2,
        text: "    low = 0",
        indent: 1,
        startFrame: aInitLow.startFrame,
        endFrame: aInitLow.endFrame,
        tokens: [
          { text: "    low", color: theme.warn },
          { text: " = ", color: theme.chalkText },
          { text: "0", color: theme.pivot },
        ],
      },
      {
        num: 3,
        text: "    mid = 0",
        indent: 1,
        startFrame: aInitMid.startFrame,
        endFrame: aInitMid.endFrame,
        tokens: [
          { text: "    mid", color: theme.pivot },
          { text: " = ", color: theme.chalkText },
          { text: "0", color: theme.pivot },
        ],
      },
      {
        num: 4,
        text: "    high = len(nums) - 1",
        indent: 1,
        startFrame: aInitHigh.startFrame,
        endFrame: aInitHigh.endFrame,
        tokens: [
          { text: "    high", color: theme.cyan },
          { text: " = ", color: theme.chalkText },
          { text: "len", color: "#6EE7B7" },
          { text: "(nums) - ", color: theme.chalkText },
          { text: "1", color: theme.pivot },
        ],
      },
      {
        num: 5,
        text: "",
        indent: 1,
        startFrame: aInitHigh.endFrame + 1,
        endFrame: aInitHigh.endFrame + 1,
      },
      {
        num: 6,
        text: "    while mid <= high:",
        indent: 1,
        startFrame: aWhileLoop.startFrame,
        endFrame: aWhileLoop.endFrame,
        tokens: [
          { text: "    while ", color: "#93C5FD" },
          { text: "mid", color: theme.pivot },
          { text: " <= ", color: theme.chalkText },
          { text: "high", color: theme.cyan },
          { text: ":", color: theme.chalkText },
        ],
      },
      {
        num: 7,
        text: "        if nums[mid] == 0:",
        indent: 2,
        startFrame: aBranch0If.startFrame,
        endFrame: aBranch0If.endFrame,
        tokens: [
          { text: "        if ", color: "#93C5FD" },
          { text: "nums[", color: theme.chalkText },
          { text: "mid", color: theme.pivot },
          { text: "] == ", color: theme.chalkText },
          { text: "0", color: theme.warn },
          { text: ":", color: theme.chalkText },
        ],
      },
      {
        num: 8,
        text: "            nums[low], nums[mid] = nums[mid], nums[low]",
        indent: 3,
        startFrame: aBranch0Swap.startFrame,
        endFrame: aBranch0Swap.endFrame,
        tokens: [
          { text: "            nums[", color: theme.chalkText },
          { text: "low", color: theme.warn },
          { text: "], nums[", color: theme.chalkText },
          { text: "mid", color: theme.pivot },
          { text: "] = nums[", color: theme.chalkText },
          { text: "mid", color: theme.pivot },
          { text: "], nums[", color: theme.chalkText },
          { text: "low", color: theme.warn },
          { text: "]", color: theme.chalkText },
        ],
      },
      {
        num: 9,
        text: "            low += 1",
        indent: 3,
        startFrame: aBranch0LowInc.startFrame,
        endFrame: aBranch0LowInc.endFrame,
        tokens: [
          { text: "            low", color: theme.warn },
          { text: " += ", color: theme.chalkText },
          { text: "1", color: theme.pivot },
        ],
      },
      {
        num: 10,
        text: "            mid += 1",
        indent: 3,
        startFrame: aBranch0MidInc.startFrame,
        endFrame: aBranch0MidInc.endFrame,
        tokens: [
          { text: "            mid", color: theme.pivot },
          { text: " += ", color: theme.chalkText },
          { text: "1", color: theme.pivot },
        ],
      },
      {
        num: 11,
        text: "",
        indent: 2,
        startFrame: aBranch0MidInc.endFrame + 1,
        endFrame: aBranch0MidInc.endFrame + 1,
      },
      {
        num: 12,
        text: "        elif nums[mid] == 1:",
        indent: 2,
        startFrame: aBranch1If.startFrame,
        endFrame: aBranch1If.endFrame,
        tokens: [
          { text: "        elif ", color: "#93C5FD" },
          { text: "nums[", color: theme.chalkText },
          { text: "mid", color: theme.pivot },
          { text: "] == ", color: theme.chalkText },
          { text: "1", color: theme.chalkText },
          { text: ":", color: theme.chalkText },
        ],
      },
      {
        num: 13,
        text: "            mid += 1",
        indent: 3,
        startFrame: aBranch1MidInc.startFrame,
        endFrame: aBranch1MidInc.endFrame,
        tokens: [
          { text: "            mid", color: theme.pivot },
          { text: " += ", color: theme.chalkText },
          { text: "1", color: theme.pivot },
        ],
      },
      {
        num: 14,
        text: "",
        indent: 2,
        startFrame: aBranch1MidInc.endFrame + 1,
        endFrame: aBranch1MidInc.endFrame + 1,
      },
      {
        num: 15,
        text: "        else:",
        indent: 2,
        startFrame: aBranch2Else.startFrame,
        endFrame: aBranch2Else.endFrame,
        tokens: [
          { text: "        else:", color: "#93C5FD" },
        ],
      },
      {
        num: 16,
        text: "            nums[mid], nums[high] = nums[high], nums[mid]",
        indent: 3,
        startFrame: aBranch2Swap.startFrame,
        endFrame: aBranch2Swap.endFrame,
        tokens: [
          { text: "            nums[", color: theme.chalkText },
          { text: "mid", color: theme.pivot },
          { text: "], nums[", color: theme.chalkText },
          { text: "high", color: theme.cyan },
          { text: "] = nums[", color: theme.chalkText },
          { text: "high", color: theme.cyan },
          { text: "], nums[", color: theme.chalkText },
          { text: "mid", color: theme.pivot },
          { text: "]", color: theme.chalkText },
        ],
      },
      {
        num: 17,
        text: "            high -= 1",
        indent: 3,
        startFrame: aBranch2HighDec.startFrame,
        endFrame: aBranch2HighDec.endFrame,
        tokens: [
          { text: "            high", color: theme.cyan },
          { text: " -= ", color: theme.chalkText },
          { text: "1", color: theme.pivot },
        ],
      },
      {
        num: 18,
        text: "            # NOTE: mid does NOT advance here!",
        indent: 3,
        startFrame: aBranch2Notice.startFrame,
        endFrame: aBranch2Notice.endFrame,
        tokens: [
          { text: "            # NOTE: mid does NOT advance here!", color: theme.warn },
        ],
      },
    ],
    [
      aInitLow.startFrame,
      aInitLow.endFrame,
      aInitMid.startFrame,
      aInitMid.endFrame,
      aInitHigh.startFrame,
      aInitHigh.endFrame,
      aWhileLoop.startFrame,
      aWhileLoop.endFrame,
      aBranch0If.startFrame,
      aBranch0If.endFrame,
      aBranch0Swap.startFrame,
      aBranch0Swap.endFrame,
      aBranch0LowInc.startFrame,
      aBranch0LowInc.endFrame,
      aBranch0MidInc.startFrame,
      aBranch0MidInc.endFrame,
      aBranch1If.startFrame,
      aBranch1If.endFrame,
      aBranch1MidInc.startFrame,
      aBranch1MidInc.endFrame,
      aBranch2Else.startFrame,
      aBranch2Else.endFrame,
      aBranch2Swap.startFrame,
      aBranch2Swap.endFrame,
      aBranch2HighDec.startFrame,
      aBranch2HighDec.endFrame,
      aBranch2Notice.startFrame,
      aBranch2Notice.endFrame,
    ]
  );

  // ============================================================
  // 4. DYNAMIC SPATIAL TRANSITIONS: CODE CENTER vs ARRAY EFFECT
  // ============================================================
  const isBranch0Effect = frame >= aBranch0LowInc.startFrame && frame < aBranch1If.startFrame;
  const isBranch1Effect = frame >= aBranch1Nothing.startFrame && frame < aBranch2Else.startFrame;
  const isBranch2HeroEffect = frame >= aBranch2HighDec.startFrame && frame < aLoopEnd.startFrame;

  // Code Editor dynamic geometry interpolation
  const codeGeom = useMemo(() => {
    // 1. Branch 2 HERO EFFECT: Code reduces to give Array full center stage!
    if (isBranch2HeroEffect) {
      const enterProgress = interpolate(
        frame,
        [aBranch2HighDec.startFrame, aBranch2HighDec.startFrame + 20],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE }
      );
      const exitProgress = interpolate(
        frame,
        [aBranch2Inspect.endFrame, aLoopEnd.startFrame],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE }
      );

      // Interpolate between Center and Docked Left
      const t = enterProgress * (1 - exitProgress);
      const left = interpolate(t, [0, 1], [440, 70]);
      const top = interpolate(t, [0, 1], [110, 110]);
      const width = interpolate(t, [0, 1], [1040, 740]);
      const scale = interpolate(t, [0, 1], [1.0, 0.9]);
      const opacity = interpolate(t, [0, 1], [1.0, 0.75]);

      return { left, top, width, height: 750, scale, opacity };
    }

    // 2. Branch 0 Effect: Code gently shifts left to share stage with mini array
    if (isBranch0Effect) {
      const enter = interpolate(
        frame,
        [aBranch0LowInc.startFrame, aBranch0LowInc.startFrame + 18],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE }
      );
      const exit = interpolate(
        frame,
        [aBranch0MidInc.endFrame, aBranch1If.startFrame],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE }
      );
      const t = enter * (1 - exit);
      return {
        left: interpolate(t, [0, 1], [440, 80]),
        top: 110,
        width: interpolate(t, [0, 1], [1040, 820]),
        height: 750,
        scale: interpolate(t, [0, 1], [1.0, 0.94]),
        opacity: 1.0,
      };
    }

    // 3. Branch 1 Effect: Code gently shifts left to share stage with mini array
    if (isBranch1Effect) {
      const enter = interpolate(
        frame,
        [aBranch1Nothing.startFrame, aBranch1Nothing.startFrame + 18],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE }
      );
      const exit = interpolate(
        frame,
        [aBranch1MidInc.endFrame, aBranch2Else.startFrame],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE }
      );
      const t = enter * (1 - exit);
      return {
        left: interpolate(t, [0, 1], [440, 80]),
        top: 110,
        width: interpolate(t, [0, 1], [1040, 820]),
        height: 750,
        scale: interpolate(t, [0, 1], [1.0, 0.94]),
        opacity: 1.0,
      };
    }

    // 4. Final Recap (F2278..F2893): Code takes grand center stage
    if (frame >= aRecap.startFrame) {
      const enter = interpolate(
        frame,
        [aRecap.startFrame, aRecap.startFrame + 25],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE }
      );
      return {
        left: interpolate(enter, [0, 1], [300, 120]),
        top: 105,
        width: 1060,
        height: 755,
        scale: 1.0,
        opacity: 1.0,
      };
    }

    // Default: Code owns center stage!
    return { left: 440, top: 110, width: 1040, height: 750, scale: 1.0, opacity: 1.0 };
  }, [
    frame,
    isBranch2HeroEffect,
    isBranch0Effect,
    isBranch1Effect,
    aBranch2HighDec.startFrame,
    aBranch2Inspect.endFrame,
    aLoopEnd.startFrame,
    aBranch0LowInc.startFrame,
    aBranch0MidInc.endFrame,
    aBranch1If.startFrame,
    aBranch1Nothing.startFrame,
    aBranch1MidInc.endFrame,
    aBranch2Else.startFrame,
    aRecap.startFrame,
  ]);

  // ============================================================
  // 5. ARRAY EFFECT HERO STATE (Values, Swaps, Pointers)
  // ============================================================
  const isArrayActive = isBranch0Effect || isBranch1Effect || isBranch2HeroEffect;

  // Array container opacity & scale interpolation
  const arrayDisplay = useMemo(() => {
    if (!isArrayActive) return { opacity: 0, scale: 0.9, pointerEvents: "none" as const };

    if (isBranch2HeroEffect) {
      const enter = interpolate(
        frame,
        [aBranch2HighDec.startFrame, aBranch2HighDec.startFrame + 20],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE }
      );
      const exit = interpolate(
        frame,
        [aBranch2Inspect.endFrame, aLoopEnd.startFrame],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE }
      );
      const t = enter * (1 - exit);
      return { opacity: t, scale: interpolate(t, [0, 1], [0.92, 1.0]), pointerEvents: "auto" as const };
    }

    if (isBranch0Effect) {
      const enter = interpolate(
        frame,
        [aBranch0LowInc.startFrame, aBranch0LowInc.startFrame + 18],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE }
      );
      const exit = interpolate(
        frame,
        [aBranch0MidInc.endFrame, aBranch1If.startFrame],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE }
      );
      const t = enter * (1 - exit);
      return { opacity: t, scale: interpolate(t, [0, 1], [0.94, 1.0]), pointerEvents: "auto" as const };
    }

    if (isBranch1Effect) {
      const enter = interpolate(
        frame,
        [aBranch1Nothing.startFrame, aBranch1Nothing.startFrame + 18],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE }
      );
      const exit = interpolate(
        frame,
        [aBranch1MidInc.endFrame, aBranch2Else.startFrame],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE }
      );
      const t = enter * (1 - exit);
      return { opacity: t, scale: interpolate(t, [0, 1], [0.94, 1.0]), pointerEvents: "auto" as const };
    }

    return { opacity: 0, scale: 0.9, pointerEvents: "none" as const };
  }, [
    frame,
    isArrayActive,
    isBranch2HeroEffect,
    isBranch0Effect,
    isBranch1Effect,
    aBranch2HighDec.startFrame,
    aBranch2Inspect.endFrame,
    aLoopEnd.startFrame,
    aBranch0LowInc.startFrame,
    aBranch0MidInc.endFrame,
    aBranch1If.startFrame,
    aBranch1Nothing.startFrame,
    aBranch1MidInc.endFrame,
    aBranch2Else.startFrame,
  ]);

  // Branch 2 Hero Demonstration Array Values & Swaps
  const isBranch2Swapped = frame >= aBranch2HighDec.startFrame + 25;
  const branch2ArrayValues = useMemo(() => {
    if (isBranch2HeroEffect) {
      // Before swap finishes: slot 2 has 2, slot 4 has 0
      // After swap: slot 2 has 0 (incoming unknown!), slot 4 has 2
      return isBranch2Swapped ? [0, 1, 0, 1, 2, 2] : [0, 1, 2, 1, 0, 2];
    }
    if (isBranch0Effect) {
      return [0, 0, 1, 2, 2, 1];
    }
    return [0, 0, 1, 1, 2, 2];
  }, [isBranch2HeroEffect, isBranch2Swapped, isBranch0Effect]);

  // Swap animation config for in-flight swap arc
  let swapConfig: SwapAnimationConfig | undefined = undefined;
  if (isBranch2HeroEffect && frame >= aBranch2HighDec.startFrame && frame < aBranch2HighDec.startFrame + 25) {
    const swapProgress = interpolate(
      frame,
      [aBranch2HighDec.startFrame, aBranch2HighDec.startFrame + 25],
      [0, 1],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE }
    );
    swapConfig = {
      idxA: 2,
      idxB: 4,
      progress: swapProgress,
      arcHeight: -75,
      label: "swap(nums[mid], nums[high])",
    };
  }

  // Pointer position interpolations
  const highPointerIdx = useMemo(() => {
    if (!isBranch2HeroEffect) return 4;
    // "then move high one step left" -> moves from index 4 to index 3
    if (frame < aBranch2HighDec.startFrame + 25) return 4;
    return interpolate(
      frame,
      [aBranch2HighDec.startFrame + 25, aBranch2HighDec.startFrame + 55],
      [4, 3],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE }
    );
  }, [frame, isBranch2HeroEffect, aBranch2HighDec.startFrame]);

  // Pointers for visual stage
  const pointers: ArrayPointer[] = useMemo(() => {
    if (isBranch2HeroEffect) {
      return [
        { id: "ptr-mid", index: 2, label: "mid (STAYS!)", color: theme.pivot, lane: 1 },
        { id: "ptr-high", index: highPointerIdx, label: "high (← -1)", color: theme.cyan, lane: 0 },
      ];
    }
    if (isBranch0Effect) {
      const lowPos = interpolate(
        frame,
        [aBranch0LowInc.startFrame, aBranch0LowInc.startFrame + 25],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE }
      );
      const midPos = interpolate(
        frame,
        [aBranch0MidInc.startFrame, aBranch0MidInc.startFrame + 25],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE }
      );
      return [
        { id: "ptr-low", index: lowPos, label: "low (+1)", color: theme.warn, lane: 0 },
        { id: "ptr-mid", index: midPos, label: "mid (+1)", color: theme.pivot, lane: 1 },
      ];
    }
    if (isBranch1Effect) {
      const midPos = interpolate(
        frame,
        [aBranch1MidInc.startFrame, aBranch1MidInc.startFrame + 25],
        [2, 3],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE }
      );
      return [
        { id: "ptr-mid", index: midPos, label: "mid (+1)", color: theme.pivot, lane: 1 },
      ];
    }
    return [];
  }, [
    isBranch2HeroEffect,
    highPointerIdx,
    isBranch0Effect,
    isBranch1Effect,
    frame,
    aBranch0LowInc.startFrame,
    aBranch0MidInc.startFrame,
    aBranch1MidInc.startFrame,
  ]);

  // Elements mapping for ArrayTrackV2
  const arrayElements = useMemo(() => {
    return branch2ArrayValues.map((val, idx) => {
      let slotState: "default" | "current" | "confirmed" = "default";
      if (isBranch2HeroEffect) {
        if (idx === 2) slotState = "current"; // mid is highlighted
        else if (idx === Math.round(highPointerIdx)) slotState = "current";
      } else if (isBranch0Effect) {
        if (idx === 0 || idx === 1) slotState = "confirmed";
      } else if (isBranch1Effect) {
        if (idx === 2 || idx === 3) slotState = "current";
      }
      return { value: val, slotState };
    });
  }, [branch2ArrayValues, isBranch2HeroEffect, highPointerIdx, isBranch0Effect, isBranch1Effect]);

  // ============================================================
  // 6. RENDER
  // ============================================================
  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        position: "relative",
        overflow: "hidden",
        backgroundColor: theme.boardBg,
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      {/* Synchronized Audio Track */}
      <Audio src={staticFile("audio/011/08-dnf-code.mp3")} />

      {/* ============================================================ */}
      {/* 1. TOP STATUS HEADER (Y: 28 .. 85)                           */}
      {/* ============================================================ */}
      <div
        style={{
          position: "absolute",
          top: 26,
          left: 80,
          right: 80,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 30,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              padding: "6px 14px",
              borderRadius: 6,
              background: "rgba(0,0,0,0.45)",
              border: `1.5px solid ${theme.cardBorder}`,
              fontFamily: fonts.mono,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: theme.chalkText,
            }}
          >
            QUESTION 011 · SORT COLORS
          </div>

          <div
            style={{
              padding: "6px 14px",
              borderRadius: 6,
              background: "rgba(60, 229, 167, 0.15)",
              border: `2px solid ${theme.good}`,
              fontFamily: fonts.mono,
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.08em",
              color: theme.good,
            }}
          >
            DUTCH NATIONAL FLAG · PYTHON 3
          </div>
        </div>

        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 13,
            fontWeight: 800,
            color: theme.pivot,
            letterSpacing: "0.08em",
            padding: "6px 14px",
            borderRadius: 6,
            background: "rgba(0,0,0,0.45)",
            border: `1px solid ${theme.cardBorder}`,
          }}
        >
          {isBranch2HeroEffect
            ? "⚡ TEACHING EFFECT: nums[mid] == 2 (MID DOES NOT MOVE!)"
            : isBranch0Effect
            ? "⚡ TEACHING EFFECT: nums[mid] == 0 (SWAP LOW/MID, BOTH++)"
            : isBranch1Effect
            ? "⚡ TEACHING EFFECT: nums[mid] == 1 (IN MIDDLE, MID++)"
            : frame >= aRecap.startFrame
            ? "✔ FULL CODE SUMMARY · 3 CONDITIONS · O(N) TIME · O(1) SPACE"
            : "ONE-PASS · IN-PLACE · O(N) TIME · O(1) SPACE"}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. DYNAMIC CODE EDITOR STAGE (Interpolated Center <-> Docked) */}
      {/* ============================================================ */}
      <div
        style={{
          position: "absolute",
          left: codeGeom.left,
          top: codeGeom.top,
          width: codeGeom.width,
          height: codeGeom.height,
          transform: `scale(${codeGeom.scale})`,
          transformOrigin: "top left",
          opacity: codeGeom.opacity,
          zIndex: 15,
        }}
      >
        <ChalkCodeEditorV2
          title="solution_dnf.py"
          language="PYTHON 3.11"
          width={codeGeom.width}
          height={codeGeom.height}
          fontSize={14}
          lineHeight={30}
          lines={editorLines}
          activeLineNums={activeLineNumbers}
          hotLineNum={isWhySpotlight ? 18 : undefined}
          hotLineTag={isWhySpotlight ? "CRITICAL: NO MID++" : undefined}
        />
      </div>

      {/* ============================================================ */}
      {/* 3. DYNAMIC ARRAY EFFECT STAGE (Takes Center/Right During Effect) */}
      {/* ============================================================ */}
      {isArrayActive && (
        <div
          style={{
            position: "absolute",
            left: 880,
            top: 130,
            width: 960,
            opacity: arrayDisplay.opacity,
            transform: `scale(${arrayDisplay.scale})`,
            transformOrigin: "top left",
            pointerEvents: arrayDisplay.pointerEvents,
            zIndex: 20,
            display: "flex",
            flexDirection: "column",
            gap: 26,
          }}
        >
          {/* Header Card for Effect Demonstration */}
          <div
            style={{
              padding: "10px 16px",
              borderRadius: 8,
              background: "rgba(0, 0, 0, 0.55)",
              border: `1.5px solid ${isBranch2HeroEffect ? theme.pivot : theme.good}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 900, color: theme.chalkText }}>
              {isBranch2HeroEffect
                ? "BRANCH 2 VISUAL EXECUTION · nums[mid] == 2"
                : isBranch0Effect
                ? "BRANCH 0 VISUAL EXECUTION · nums[mid] == 0"
                : "BRANCH 1 VISUAL EXECUTION · nums[mid] == 1"}
            </div>
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 11,
                fontWeight: 800,
                color: isBranch2HeroEffect ? theme.pivot : theme.good,
                padding: "2px 8px",
                borderRadius: 4,
                background: isBranch2HeroEffect ? "rgba(255, 209, 102, 0.15)" : "rgba(60, 229, 167, 0.15)",
              }}
            >
              {isBranch2HeroEffect ? "MUTATION IN PROGRESS" : "DIRECT MEMORY EFFECT"}
            </div>
          </div>

          {/* ArrayTrackV2 Container */}
          <div style={{ position: "relative", width: "100%", padding: "10px 0" }}>
            <ArrayTrackV2
              elements={arrayElements}
              slotWidth={105}
              slotHeight={95}
              gap={14}
              showIndices={true}
              indexPlacement="bottom"
              pointers={pointers}
              pointerPlacement="bottom"
              swap={swapConfig}
              renderValue={(item, rect) => {
                const valNum = Number(item.value);
                let color: string = theme.chalkText;
                if (valNum === 0) color = theme.warn;
                else if (valNum === 1) color = theme.chalkText;
                else if (valNum === 2) color = theme.cyan;

                // Emphasize mid slot during Branch 2
                const isMidSlot = isBranch2HeroEffect && rect.index === 2;
                return (
                  <ArrayValueV2
                    key={`val-${rect.index}`}
                    value={item.value}
                    x={rect.centerX}
                    y={rect.centerY}
                    fontSize={42}
                    color={color}
                    scale={isMidSlot ? 1.2 : 1.0}
                  />
                );
              }}
            />
          </div>

          {/* Hero Callout Card: Why Mid Stays & Memory Consequence */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 220,
              marginTop: 10,
              borderRadius: 10,
              background: "rgba(10, 22, 18, 0.9)",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
              <RoughBox
                width={960}
                height={220}
                stroke={isBranch2HeroEffect ? theme.pivot : theme.cardBorder}
                seed={isBranch2HeroEffect ? 999 : 333}
                strokeWidth={isBranch2HeroEffect ? 2.5 : 1.5}
              />
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                padding: "16px 22px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {isBranch2HeroEffect ? (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: theme.pivot }}>
                      ⚡ CRITICAL INVARIANT: WHY mid DOES NOT ADVANCE!
                    </div>
                    <div
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 11,
                        color: theme.warn,
                        fontWeight: 800,
                        padding: "2px 8px",
                        borderRadius: 4,
                        background: "rgba(255, 118, 117, 0.15)",
                        border: `1px solid ${theme.warn}`,
                      }}
                    >
                      MISSING LINE IS INTENTIONAL
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 14 }}>
                    <div
                      style={{
                        flex: 1,
                        padding: "8px 12px",
                        borderRadius: 6,
                        background: "rgba(0,0,0,0.45)",
                        border: "1px solid rgba(255, 209, 102, 0.3)",
                      }}
                    >
                      <div style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.pivot, fontWeight: 800 }}>
                        1. UNKNOWN VALUE ARRIVED AT mid
                      </div>
                      <div style={{ fontFamily: fonts.sans, fontSize: 12, color: theme.chalkText, marginTop: 4 }}>
                        The element that arrived at <span style={{ color: theme.pivot, fontWeight: 700 }}>mid</span> came
                        from <span style={{ color: theme.cyan, fontWeight: 700 }}>high</span>. It was never inspected! It
                        could be 0, 1, or 2.
                      </div>
                    </div>

                    <div
                      style={{
                        flex: 1,
                        padding: "8px 12px",
                        borderRadius: 6,
                        background: "rgba(0,0,0,0.45)",
                        border: "1px solid rgba(60, 229, 167, 0.3)",
                      }}
                    >
                      <div style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.good, fontWeight: 800 }}>
                        2. MUST RE-INSPECT ON NEXT ITERATION
                      </div>
                      <div style={{ fontFamily: fonts.sans, fontSize: 12, color: theme.chalkText, marginTop: 4 }}>
                        If <span style={{ color: theme.pivot, fontWeight: 700 }}>mid</span> had moved forward, this new
                        uninspected value would be skipped and trapped in the middle region!
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "6px 12px",
                      borderRadius: 6,
                      background: "rgba(255, 209, 102, 0.12)",
                      border: `1px dashed ${theme.pivot}`,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontFamily: fonts.mono,
                      fontSize: 11,
                      color: theme.chalkText,
                    }}
                  >
                    <span>
                      RULE: <span style={{ color: theme.cyan, fontWeight: 800 }}>high -= 1</span> decrements the 2s
                      boundary, but <span style={{ color: theme.pivot, fontWeight: 800 }}>mid</span> STAYS to inspect.
                    </span>
                    <span style={{ color: theme.good, fontWeight: 900 }}>✔ INVARIANT PRESERVED</span>
                  </div>
                </>
              ) : isBranch0Effect ? (
                <>
                  <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: theme.warn }}>
                    BRANCH 0 CAUSE &amp; EFFECT: nums[mid] == 0
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText, lineHeight: 1.5 }}>
                    Zero strictly belongs to the left region. We swap <span style={{ color: theme.warn }}>nums[low]</span>{" "}
                    with <span style={{ color: theme.pivot }}>nums[mid]</span>. Since the swapped value is known to be 0, both{" "}
                    <span style={{ color: theme.warn, fontWeight: 700 }}>low</span> and{" "}
                    <span style={{ color: theme.pivot, fontWeight: 700 }}>mid</span> advance forward!
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.good, fontWeight: 800 }}>
                    ➔ low += 1 (0s region grows) · mid += 1 (scanner advances)
                  </div>
                </>
              ) : (
                <>
                  <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: theme.chalkText }}>
                    BRANCH 1 CAUSE &amp; EFFECT: nums[mid] == 1
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText, lineHeight: 1.5 }}>
                    One is already in its correct middle region between{" "}
                    <span style={{ color: theme.warn }}>low</span> and{" "}
                    <span style={{ color: theme.pivot }}>mid</span>. There is nothing to swap! We simply advance{" "}
                    <span style={{ color: theme.pivot, fontWeight: 700 }}>mid</span> forward.
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.good, fontWeight: 800 }}>
                    ➔ No swap needed · mid += 1 (1s middle region grows naturally)
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 4. RECAP INVARIANT & GUARANTEE CARD (F2278..F2893)           */}
      {/* Displays side-by-side with full code editor at finale        */}
      {/* ============================================================ */}
      {frame >= aRecap.startFrame && (
        <div
          style={{
            position: "absolute",
            left: 1220,
            top: 105,
            width: 620,
            height: 755,
            borderRadius: 12,
            background: "rgba(10, 22, 18, 0.88)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
            overflow: "hidden",
            zIndex: 20,
          }}
        >
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <RoughBox width={620} height={755} stroke={theme.good} seed={777} strokeWidth={2} />
          </div>

          <div
            style={{
              position: "relative",
              zIndex: 2,
              padding: "20px 24px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: theme.good }}>
                DUTCH NATIONAL FLAG · SUMMARY
              </div>
              <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText, marginTop: 4 }}>
                Three simple conditions guarantee complete sorting in a single pass.
              </div>
            </div>

            {/* 3 Pillars */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div
                style={{
                  padding: "10px 14px",
                  borderRadius: 6,
                  background: "rgba(255, 118, 117, 0.12)",
                  border: `1.5px solid ${theme.warn}`,
                }}
              >
                <div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, color: theme.warn }}>
                  1. ZERO GOES TO THE LEFT
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.chalkText, marginTop: 2 }}>
                  nums[mid] == 0 ➔ swap(low, mid), low++, mid++
                </div>
              </div>

              <div
                style={{
                  padding: "10px 14px",
                  borderRadius: 6,
                  background: "rgba(248, 246, 240, 0.1)",
                  border: `1.5px solid ${theme.chalkText}`,
                }}
              >
                <div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, color: theme.chalkText }}>
                  2. ONE STAYS IN THE MIDDLE
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.chalkText, marginTop: 2 }}>
                  nums[mid] == 1 ➔ No swap, mid++
                </div>
              </div>

              <div
                style={{
                  padding: "10px 14px",
                  borderRadius: 6,
                  background: "rgba(92, 225, 230, 0.12)",
                  border: `1.5px solid ${theme.cyan}`,
                }}
              >
                <div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, color: theme.cyan }}>
                  3. TWO GOES TO THE RIGHT
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.chalkText, marginTop: 2 }}>
                  nums[mid] == 2 ➔ swap(mid, high), high--, MID STAYS!
                </div>
              </div>
            </div>

            {/* Invariant Guarantees */}
            <div
              style={{
                padding: "12px 14px",
                borderRadius: 8,
                background: "rgba(0,0,0,0.5)",
                border: "1px solid rgba(255, 209, 102, 0.3)",
              }}
            >
              <div style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, color: theme.pivot }}>
                CORE INVARIANT GUARANTEE AT EVERY STEP:
              </div>
              <div style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.chalkText, marginTop: 4, lineHeight: 1.5 }}>
                • [0 .. low-1] = strictly 0s<br />
                • [low .. mid-1] = strictly 1s<br />
                • [mid .. high] = unknown region (shrinks every step)<br />
                • [high+1 .. n-1] = strictly 2s
              </div>
            </div>

            {/* Complexity Badge */}
            <div
              style={{
                padding: "8px 14px",
                borderRadius: 6,
                background: "rgba(60, 229, 167, 0.15)",
                border: `1.5px solid ${theme.good}`,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: fonts.mono,
                fontSize: 12,
                fontWeight: 800,
                color: theme.good,
              }}
            >
              <span>TIME: O(N) SINGLE PASS</span>
              <span>SPACE: O(1) IN-PLACE</span>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 5. BOTTOM CAPTIONS (Synced Word-by-Word)                     */}
      {/* ============================================================ */}
      <div
        style={{
          position: "absolute",
          bottom: 24,
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
