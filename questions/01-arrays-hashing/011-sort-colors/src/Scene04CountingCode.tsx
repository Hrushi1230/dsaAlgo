/**
 * Scene04CountingCode.tsx — Scene 04 · APPROACH 1: COUNTING CODE
 * Sort Colors (LeetCode 75) · Pattern 01 — Arrays & Hashing
 *
 * PEDAGOGICAL DYNAMIC DOCKING CHOREOGRAPHY:
 * 1. CODE IDEA SPOKEN -> Terminal owns center stage, line types character-by-character.
 * 2. NOW TEACH EFFECT -> Terminal docks left, visual cards/array take center stage showing direct mutation.
 * 3. CAUSE / EFFECT COUPLING -> Learner visually understands what the code statement actually does in memory.
 * 4. EFFECT FINISHED -> Visual structure docks, Terminal returns to center stage to introduce the next statement.
 * 5. ALL KIT COMPONENTS -> RoughBox, ChalkCodeEditorV2, ArrayTrackV2, ChalkboardBackground, ChalkFilters.
 * 6. ZERO GUESSING -> Timing derived strictly from 04-counting-code.anchors.json (43 anchors, 2,113 frames).
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
  ArrayElementItem,
  RoughBox,
} from "../../../../kit/components";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import syncData from "../sync/04-counting-code.json";
import anchorsData from "../sync/04-counting-code.anchors.json";

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

export const Scene04CountingCode: React.FC = () => {
  const frame = useCurrentFrame();

  // All 43 Anchors exactly derived from sync
  const aStart = useMemo(() => getAnchor("S04_START"), []);
  const aThree = useMemo(() => getAnchor("S04_THREE_COUNTERS"), []);
  const aC0 = useMemo(() => getAnchor("S04_COUNT0_NAME"), []);
  const aC1 = useMemo(() => getAnchor("S04_COUNT1_NAME"), []);
  const aC2 = useMemo(() => getAnchor("S04_COUNT2_NAME"), []);
  const aInit = useMemo(() => getAnchor("S04_INIT"), []);
  const aAllZero = useMemo(() => getAnchor("S04_ALL_ZERO"), []);
  const aScanOnce = useMemo(() => getAnchor("S04_SCAN_ONCE"), []);
  const aIf0 = useMemo(() => getAnchor("S04_IF_ZERO"), []);
  const aInc0 = useMemo(() => getAnchor("S04_INC_ZERO"), []);
  const aIf1 = useMemo(() => getAnchor("S04_IF_ONE"), []);
  const aInc1 = useMemo(() => getAnchor("S04_INC_ONE"), []);
  const aElse = useMemo(() => getAnchor("S04_ELSE"), []);
  const aMust2 = useMemo(() => getAnchor("S04_MUST_TWO"), []);
  const aInc2 = useMemo(() => getAnchor("S04_INC_TWO"), []);
  const aPass1Done = useMemo(() => getAnchor("S04_FIRST_PASS_DONE"), []);
  const aKnowCounts = useMemo(() => getAnchor("S04_KNOW_COUNTS"), []);
  const aKnow0 = useMemo(() => getAnchor("S04_KNOW_0"), []);
  const aKnow1 = useMemo(() => getAnchor("S04_KNOW_1"), []);
  const aKnow2 = useMemo(() => getAnchor("S04_KNOW_2"), []);
  const aRewrite = useMemo(() => getAnchor("S04_REWRITE"), []);
  const aIdx0 = useMemo(() => getAnchor("S04_INDEX_ZERO"), []);
  const aFirst = useMemo(() => getAnchor("S04_FIRST"), []);
  const aWrite0 = useMemo(() => getAnchor("S04_WRITE_ZERO"), []);
  const aC0Times = useMemo(() => getAnchor("S04_COUNT0_TIMES"), []);
  const aThen = useMemo(() => getAnchor("S04_THEN"), []);
  const aWrite1 = useMemo(() => getAnchor("S04_WRITE_ONE"), []);
  const aC1Times = useMemo(() => getAnchor("S04_COUNT1_TIMES"), []);
  const aFinally = useMemo(() => getAnchor("S04_FINALLY"), []);
  const aWrite2 = useMemo(() => getAnchor("S04_WRITE_TWO"), []);
  const aC2Times = useMemo(() => getAnchor("S04_COUNT2_TIMES"), []);
  const aSorted = useMemo(() => getAnchor("S04_SORTED_RESULT"), []);
  const aEx = useMemo(() => getAnchor("S04_EXAMPLE"), []);
  const aExC0 = useMemo(() => getAnchor("S04_EX_C0"), []);
  const aExC1 = useMemo(() => getAnchor("S04_EX_C1"), []);
  const aExC2 = useMemo(() => getAnchor("S04_EX_C2"), []);
  const aSoWrite = useMemo(() => getAnchor("S04_SO_WRITE"), []);
  const aThreeZeroes = useMemo(() => getAnchor("S04_THREE_ZEROES"), []);
  const aThreeOnes = useMemo(() => getAnchor("S04_THREE_ONES"), []);
  const aFourTwos = useMemo(() => getAnchor("S04_FOUR_TWOS"), []);
  const aSimple = useMemo(() => getAnchor("S04_SIMPLE"), []);
  const aCountPass = useMemo(() => getAnchor("S04_COUNT_PASS"), []);
  const aRewritePass = useMemo(() => getAnchor("S04_REWRITE_PASS"), []);

  // 1. Determine active lines in code editor
  const activeLineNums = useMemo(() => {
    if (frame < aThree.startFrame) return [1];
    if (frame < aC0.startFrame) return [2];
    if (frame < aC1.startFrame) return [3];
    if (frame < aC2.startFrame) return [4];
    if (frame < aInit.startFrame) return [5];
    if (frame < aScanOnce.startFrame) return [3, 4, 5]; // "all three are 0"
    if (frame < aIf0.startFrame) return [7]; // "for x in nums:"
    if (frame < aInc0.startFrame) return [8]; // "if x == 0:"
    if (frame < aIf1.startFrame) return [9]; // "count0 += 1"
    if (frame < aInc1.startFrame) return [10]; // "elif x == 1:"
    if (frame < aElse.startFrame) return [11]; // "count1 += 1"
    if (frame < aInc2.startFrame) return [12]; // "else:"
    if (frame < aPass1Done.startFrame) return [13]; // "count2 += 1"
    if (frame < aRewrite.startFrame) return [7, 8, 9, 10, 11, 12, 13]; // Pass 1 summary
    if (frame < aIdx0.startFrame) return [15]; // "# Pass 2: Overwrite array in-place"
    if (frame < aFirst.startFrame) return [16]; // "i = 0"
    if (frame < aWrite0.startFrame) return [17]; // "for _ in range(count0):"
    if (frame < aC0Times.startFrame) return [18]; // "nums[i] = 0"
    if (frame < aThen.startFrame) return [19]; // "i += 1"
    if (frame < aWrite1.startFrame) return [20]; // "for _ in range(count1):"
    if (frame < aC1Times.startFrame) return [21]; // "nums[i] = 1"
    if (frame < aFinally.startFrame) return [22]; // "i += 1"
    if (frame < aWrite2.startFrame) return [23]; // "for _ in range(count2):"
    if (frame < aC2Times.startFrame) return [24]; // "nums[i] = 2"
    if (frame < aSorted.startFrame) return [25]; // "i += 1"
    if (frame < aSimple.startFrame) return []; // Visual hero takes stage
    if (frame < aCountPass.startFrame) return []; // Code returns center, full view
    if (frame < aRewritePass.startFrame) return [2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13]; // Pass 1 bracket
    return [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]; // Pass 2 bracket
  }, [
    frame,
    aThree.startFrame,
    aC0.startFrame,
    aC1.startFrame,
    aC2.startFrame,
    aInit.startFrame,
    aScanOnce.startFrame,
    aIf0.startFrame,
    aInc0.startFrame,
    aIf1.startFrame,
    aInc1.startFrame,
    aElse.startFrame,
    aInc2.startFrame,
    aPass1Done.startFrame,
    aRewrite.startFrame,
    aIdx0.startFrame,
    aFirst.startFrame,
    aWrite0.startFrame,
    aC0Times.startFrame,
    aThen.startFrame,
    aWrite1.startFrame,
    aC1Times.startFrame,
    aFinally.startFrame,
    aWrite2.startFrame,
    aC2Times.startFrame,
    aSorted.startFrame,
    aSimple.startFrame,
    aCountPass.startFrame,
    aRewritePass.startFrame,
  ]);

  // 2. Syntax-highlighted code lines with exact start/end typing frames
  const editorLines: ChalkCodeLine[] = useMemo(() => [
    {
      num: 1,
      text: "def sortColors(nums: list[int]) -> None:",
      indent: 0,
      startFrame: 15,
      endFrame: 55,
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
      text: "    # Pass 1: Count 0s, 1s, and 2s",
      indent: 1,
      startFrame: aThree.startFrame,
      endFrame: aThree.startFrame + 30,
      tokens: [
        { text: "    # Pass 1: Count 0s, 1s, and 2s", color: "rgba(248, 246, 240, 0.55)" },
      ],
    },
    {
      num: 3,
      text: "    count0 = 0",
      indent: 1,
      startFrame: aC0.startFrame,
      endFrame: aC0.endFrame,
      tokens: [
        { text: "    count0", color: "#FF7675" },
        { text: " = ", color: theme.chalkText },
        { text: "0", color: theme.pivot },
      ],
    },
    {
      num: 4,
      text: "    count1 = 0",
      indent: 1,
      startFrame: aC1.startFrame,
      endFrame: aC1.endFrame,
      tokens: [
        { text: "    count1", color: theme.chalkText },
        { text: " = ", color: theme.chalkText },
        { text: "0", color: theme.pivot },
      ],
    },
    {
      num: 5,
      text: "    count2 = 0",
      indent: 1,
      startFrame: aC2.startFrame,
      endFrame: aC2.endFrame,
      tokens: [
        { text: "    count2", color: theme.cyan },
        { text: " = ", color: theme.chalkText },
        { text: "0", color: theme.pivot },
      ],
    },
    { num: 6, text: "", indent: 1, startFrame: aC2.endFrame + 1, endFrame: aC2.endFrame + 1 },
    {
      num: 7,
      text: "    for x in nums:",
      indent: 1,
      startFrame: aScanOnce.startFrame,
      endFrame: aScanOnce.startFrame + 40,
      tokens: [
        { text: "    for ", color: "#93C5FD" },
        { text: "x", color: theme.pivot },
        { text: " in ", color: "#93C5FD" },
        { text: "nums", color: theme.chalkText },
        { text: ":", color: theme.chalkText },
      ],
    },
    {
      num: 8,
      text: "        if x == 0:",
      indent: 2,
      startFrame: aIf0.startFrame,
      endFrame: aIf0.endFrame,
      tokens: [
        { text: "        if ", color: "#93C5FD" },
        { text: "x == ", color: theme.chalkText },
        { text: "0", color: "#FF7675" },
        { text: ":", color: theme.chalkText },
      ],
    },
    {
      num: 9,
      text: "            count0 += 1",
      indent: 3,
      startFrame: aInc0.startFrame,
      endFrame: aInc0.endFrame,
      tokens: [
        { text: "            count0", color: "#FF7675" },
        { text: " += ", color: theme.chalkText },
        { text: "1", color: theme.pivot },
      ],
    },
    {
      num: 10,
      text: "        elif x == 1:",
      indent: 2,
      startFrame: aIf1.startFrame,
      endFrame: aIf1.endFrame,
      tokens: [
        { text: "        elif ", color: "#93C5FD" },
        { text: "x == ", color: theme.chalkText },
        { text: "1", color: theme.chalkText },
        { text: ":", color: theme.chalkText },
      ],
    },
    {
      num: 11,
      text: "            count1 += 1",
      indent: 3,
      startFrame: aInc1.startFrame,
      endFrame: aInc1.endFrame,
      tokens: [
        { text: "            count1", color: theme.chalkText },
        { text: " += ", color: theme.chalkText },
        { text: "1", color: theme.pivot },
      ],
    },
    {
      num: 12,
      text: "        else:",
      indent: 2,
      startFrame: aElse.startFrame,
      endFrame: aElse.endFrame,
      tokens: [
        { text: "        else", color: "#93C5FD" },
        { text: ":", color: theme.chalkText },
      ],
    },
    {
      num: 13,
      text: "            count2 += 1",
      indent: 3,
      startFrame: aInc2.startFrame,
      endFrame: aInc2.endFrame,
      tokens: [
        { text: "            count2", color: theme.cyan },
        { text: " += ", color: theme.chalkText },
        { text: "1", color: theme.pivot },
      ],
    },
    { num: 14, text: "", indent: 1, startFrame: aPass1Done.startFrame, endFrame: aPass1Done.startFrame },
    {
      num: 15,
      text: "    # Pass 2: Overwrite array in-place",
      indent: 1,
      startFrame: aRewrite.startFrame,
      endFrame: aRewrite.endFrame,
      tokens: [
        { text: "    # Pass 2: Overwrite array in-place", color: "rgba(248, 246, 240, 0.55)" },
      ],
    },
    {
      num: 16,
      text: "    i = 0",
      indent: 1,
      startFrame: aIdx0.startFrame,
      endFrame: aIdx0.endFrame,
      tokens: [
        { text: "    i", color: theme.pivot },
        { text: " = ", color: theme.chalkText },
        { text: "0", color: theme.pivot },
      ],
    },
    {
      num: 17,
      text: "    for _ in range(count0):",
      indent: 1,
      startFrame: aFirst.startFrame,
      endFrame: aFirst.endFrame,
      tokens: [
        { text: "    for ", color: "#93C5FD" },
        { text: "_", color: theme.chalkText },
        { text: " in ", color: "#93C5FD" },
        { text: "range", color: "#6EE7B7" },
        { text: "(", color: theme.chalkText },
        { text: "count0", color: "#FF7675" },
        { text: "):", color: theme.chalkText },
      ],
    },
    {
      num: 18,
      text: "        nums[i] = 0",
      indent: 2,
      startFrame: aWrite0.startFrame,
      endFrame: aWrite0.endFrame,
      tokens: [
        { text: "        nums[", color: theme.chalkText },
        { text: "i", color: theme.pivot },
        { text: "] = ", color: theme.chalkText },
        { text: "0", color: "#FF7675" },
      ],
    },
    {
      num: 19,
      text: "        i += 1",
      indent: 2,
      startFrame: aC0Times.startFrame,
      endFrame: aC0Times.endFrame,
      tokens: [
        { text: "        i", color: theme.pivot },
        { text: " += ", color: theme.chalkText },
        { text: "1", color: theme.pivot },
      ],
    },
    {
      num: 20,
      text: "    for _ in range(count1):",
      indent: 1,
      startFrame: aThen.startFrame,
      endFrame: aThen.endFrame,
      tokens: [
        { text: "    for ", color: "#93C5FD" },
        { text: "_", color: theme.chalkText },
        { text: " in ", color: "#93C5FD" },
        { text: "range", color: "#6EE7B7" },
        { text: "(", color: theme.chalkText },
        { text: "count1", color: theme.chalkText },
        { text: "):", color: theme.chalkText },
      ],
    },
    {
      num: 21,
      text: "        nums[i] = 1",
      indent: 2,
      startFrame: aWrite1.startFrame,
      endFrame: aWrite1.endFrame,
      tokens: [
        { text: "        nums[", color: theme.chalkText },
        { text: "i", color: theme.pivot },
        { text: "] = ", color: theme.chalkText },
        { text: "1", color: theme.chalkText },
      ],
    },
    {
      num: 22,
      text: "        i += 1",
      indent: 2,
      startFrame: aC1Times.startFrame,
      endFrame: aC1Times.endFrame,
      tokens: [
        { text: "        i", color: theme.pivot },
        { text: " += ", color: theme.chalkText },
        { text: "1", color: theme.pivot },
      ],
    },
    {
      num: 23,
      text: "    for _ in range(count2):",
      indent: 1,
      startFrame: aFinally.startFrame,
      endFrame: aFinally.endFrame,
      tokens: [
        { text: "    for ", color: "#93C5FD" },
        { text: "_", color: theme.chalkText },
        { text: " in ", color: "#93C5FD" },
        { text: "range", color: "#6EE7B7" },
        { text: "(", color: theme.chalkText },
        { text: "count2", color: theme.cyan },
        { text: "):", color: theme.chalkText },
      ],
    },
    {
      num: 24,
      text: "        nums[i] = 2",
      indent: 2,
      startFrame: aWrite2.startFrame,
      endFrame: aWrite2.endFrame,
      tokens: [
        { text: "        nums[", color: theme.chalkText },
        { text: "i", color: theme.pivot },
        { text: "] = ", color: theme.chalkText },
        { text: "2", color: theme.cyan },
      ],
    },
    {
      num: 25,
      text: "        i += 1",
      indent: 2,
      startFrame: aC2Times.startFrame,
      endFrame: aC2Times.endFrame,
      tokens: [
        { text: "        i", color: theme.pivot },
        { text: " += ", color: theme.chalkText },
        { text: "1", color: theme.pivot },
      ],
    },
  ], [
    aThree.startFrame,
    aC0.startFrame,
    aC0.endFrame,
    aC1.startFrame,
    aC1.endFrame,
    aC2.startFrame,
    aC2.endFrame,
    aScanOnce.startFrame,
    aIf0.startFrame,
    aIf0.endFrame,
    aInc0.startFrame,
    aInc0.endFrame,
    aIf1.startFrame,
    aIf1.endFrame,
    aInc1.startFrame,
    aInc1.endFrame,
    aElse.startFrame,
    aElse.endFrame,
    aInc2.startFrame,
    aInc2.endFrame,
    aPass1Done.startFrame,
    aRewrite.startFrame,
    aRewrite.endFrame,
    aIdx0.startFrame,
    aIdx0.endFrame,
    aFirst.startFrame,
    aFirst.endFrame,
    aWrite0.startFrame,
    aWrite0.endFrame,
    aC0Times.startFrame,
    aC0Times.endFrame,
    aThen.startFrame,
    aThen.endFrame,
    aWrite1.startFrame,
    aWrite1.endFrame,
    aC1Times.startFrame,
    aC1Times.endFrame,
    aFinally.startFrame,
    aFinally.endFrame,
    aWrite2.startFrame,
    aWrite2.endFrame,
    aC2Times.startFrame,
    aC2Times.endFrame,
  ]);

  // 3. Dynamic Docking & Geometry Interpolation for Terminal
  const isIntroCenter = frame < aInit.startFrame; // F0..F282
  const isConclusionCenter = frame >= aSimple.startFrame; // F1948..F2113
  const isSortedHero = frame >= aSorted.startFrame && frame < aSimple.startFrame; // F1508..F1948

  const terminalGeom = useMemo(() => {
    if (isIntroCenter) {
      return { left: 440, top: 120, width: 1040, height: 740, scale: 1.0, opacity: 1.0 };
    }
    if (frame < aScanOnce.startFrame) {
      // Transition from Center to Docked Left (F282..F311)
      const left = interpolate(frame, [aInit.startFrame, aInit.startFrame + 25], [440, 80], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const width = interpolate(frame, [aInit.startFrame, aInit.startFrame + 25], [1040, 820], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const scale = interpolate(frame, [aInit.startFrame, aInit.startFrame + 25], [1.0, 0.95], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { left, top: 110, width, height: 780, scale, opacity: 1.0 };
    }
    if (isSortedHero) {
      // Terminal fades to 0 completely so sorted array owns full center stage
      const opacity = interpolate(frame, [aSorted.startFrame, aSorted.startFrame + 15], [1.0, 0.0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { left: 80, top: 110, width: 820, height: 780, scale: 0.92, opacity };
    }
    if (isConclusionCenter) {
      // Terminal expands back to center stage proudly!
      const left = interpolate(frame, [aSimple.startFrame, aSimple.startFrame + 25], [80, 420], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const width = interpolate(frame, [aSimple.startFrame, aSimple.startFrame + 25], [820, 1080], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const scale = interpolate(frame, [aSimple.startFrame, aSimple.startFrame + 25], [0.92, 1.0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const opacity = interpolate(frame, [aSimple.startFrame, aSimple.startFrame + 15], [0.0, 1.0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { left, top: 95, width, height: 735, scale, opacity };
    }
    // Default docked left during Pass 1 scan and Pass 2 rewrite
    return { left: 80, top: 110, width: 820, height: 780, scale: 0.95, opacity: 1.0 };
  }, [
    frame,
    isIntroCenter,
    isConclusionCenter,
    isSortedHero,
    aInit.startFrame,
    aScanOnce.startFrame,
    aSorted.startFrame,
    aSimple.startFrame,
  ]);

  // 4. Dynamic Visual Stage Opacity and Geometry
  const visualOpacity = useMemo(() => {
    if (frame < aInit.startFrame) return 0;
    if (frame < aInit.startFrame + 20) {
      return interpolate(frame, [aInit.startFrame, aInit.startFrame + 20], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
    }
    if (frame >= aSimple.startFrame) {
      return interpolate(frame, [aSimple.startFrame, aSimple.startFrame + 15], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
    }
    return 1;
  }, [frame, aInit.startFrame, aSimple.startFrame]);

  // Visual Stage Coordinates
  const visualGeom = useMemo(() => {
    if (isSortedHero) {
      // Shifts to Center Stage for the sorted array hero view
      const left = interpolate(frame, [aSorted.startFrame, aSorted.startFrame + 25], [940, 260], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const width = interpolate(frame, [aSorted.startFrame, aSorted.startFrame + 25], [900, 1400], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { left, top: 110, width, height: 800 };
    }
    return { left: 940, top: 110, width: 900, height: 800 };
  }, [frame, isSortedHero, aSorted.startFrame]);

  // 5. Reactive Counter Values & Animations
  const count0Pulse = frame >= aInc0.startFrame && frame <= aInc0.endFrame + 10;
  const count1Pulse = frame >= aInc1.startFrame && frame <= aInc1.endFrame + 10;
  const count2Pulse = frame >= aInc2.startFrame && frame <= aInc2.endFrame + 10;

  const count0Val = useMemo(() => {
    if (frame < aInc0.startFrame) return 0;
    if (frame < aPass1Done.startFrame) return 1;
    return 3; // Final verified count
  }, [frame, aInc0.startFrame, aPass1Done.startFrame]);

  const count1Val = useMemo(() => {
    if (frame < aInc1.startFrame) return 0;
    if (frame < aPass1Done.startFrame) return 1;
    return 3; // Final verified count
  }, [frame, aInc1.startFrame, aPass1Done.startFrame]);

  const count2Val = useMemo(() => {
    if (frame < aInc2.startFrame) return 0;
    if (frame < aPass1Done.startFrame) return 1;
    return 4; // Final verified count
  }, [frame, aInc2.startFrame, aPass1Done.startFrame]);

  // 6. Rewrite Array Track Elements and Pointer i
  const isRewritePhase = frame >= aRewrite.startFrame;

  // Track the index of pointer `i` during Pass 2
  const pointerIIndex = useMemo(() => {
    if (frame < aIdx0.startFrame) return -1;
    if (frame < aWrite0.startFrame) return 0;
    if (frame < aWrite0.startFrame + 15) return 0;
    if (frame < aC0Times.startFrame) return 1;
    if (frame < aThen.startFrame) return 2;
    if (frame < aWrite1.startFrame) return 3;
    if (frame < aWrite1.startFrame + 15) return 3;
    if (frame < aC1Times.startFrame) return 4;
    if (frame < aFinally.startFrame) return 5;
    if (frame < aWrite2.startFrame) return 6;
    if (frame < aWrite2.startFrame + 15) return 6;
    if (frame < aC2Times.startFrame) return 7;
    if (frame < aSorted.startFrame) return 8;
    return 9;
  }, [
    frame,
    aIdx0.startFrame,
    aWrite0.startFrame,
    aC0Times.startFrame,
    aThen.startFrame,
    aWrite1.startFrame,
    aC1Times.startFrame,
    aFinally.startFrame,
    aWrite2.startFrame,
    aC2Times.startFrame,
    aSorted.startFrame,
  ]);

  // Dynamic Array Elements for Rewrite / Master Verification
  const rewriteElements = useMemo<ArrayElementItem[]>(() => {
    // Master testcase values: [2, 0, 2, 1, 1, 0, 2, 0, 1, 2] -> sorted [0,0,0,1,1,1,2,2,2,2]
    const initialValues = [2, 0, 2, 1, 1, 0, 2, 0, 1, 2];
    const sortedValues = [0, 0, 0, 1, 1, 1, 2, 2, 2, 2];

    if (!isRewritePhase) {
      // In Pass 1: Display initial input array with scanning highlight
      return initialValues.map((val, idx) => {
        let isScanActive = false;
        if (frame >= aIf0.startFrame && frame <= aInc0.endFrame + 10 && idx === 1) isScanActive = true;
        if (frame >= aIf1.startFrame && frame <= aInc1.endFrame + 10 && idx === 3) isScanActive = true;
        if (frame >= aElse.startFrame && frame <= aInc2.endFrame + 10 && idx === 0) isScanActive = true;

        return {
          value: val,
          slotState: isScanActive ? "active" : "neutral",
          valueState: isScanActive ? "active" : "neutral",
        };
      });
    }

    // In Pass 2: Show progressive overwriting
    return sortedValues.map((targetVal, idx) => {
      let isWritten = false;
      if (idx === 0 && frame >= aWrite0.startFrame) isWritten = true;
      if (idx === 1 && frame >= aWrite0.startFrame + 18) isWritten = true;
      if (idx === 2 && frame >= aC0Times.startFrame) isWritten = true;
      if (idx === 3 && frame >= aWrite1.startFrame) isWritten = true;
      if (idx === 4 && frame >= aWrite1.startFrame + 18) isWritten = true;
      if (idx === 5 && frame >= aC1Times.startFrame) isWritten = true;
      if (idx === 6 && frame >= aWrite2.startFrame) isWritten = true;
      if (idx === 7 && frame >= aWrite2.startFrame + 15) isWritten = true;
      if (idx === 8 && frame >= aC2Times.startFrame) isWritten = true;
      if (idx === 9 && frame >= aC2Times.startFrame + 15) isWritten = true;

      const currentVal = isWritten ? targetVal : initialValues[idx];

      // Partition colors
      let valColor: string = theme.chalkDim;
      if (isWritten) {
        if (targetVal === 0) valColor = "#FF7675";
        else if (targetVal === 1) valColor = theme.chalkText;
        else valColor = theme.cyan;
      }

      const isCurrentTarget = idx === pointerIIndex && frame < aSorted.startFrame;

      return {
        value: currentVal,
        slotState: isWritten ? "sorted" : isCurrentTarget ? "active" : "neutral",
        valueState: isWritten ? "sorted" : isCurrentTarget ? "active" : "dimmed",
        stroke: isCurrentTarget ? theme.pivot : isWritten ? valColor : undefined,
      };
    });
  }, [
    isRewritePhase,
    frame,
    aIf0.startFrame,
    aInc0.endFrame,
    aIf1.startFrame,
    aInc1.endFrame,
    aElse.startFrame,
    aInc2.endFrame,
    aWrite0.startFrame,
    aC0Times.startFrame,
    aWrite1.startFrame,
    aC1Times.startFrame,
    aWrite2.startFrame,
    aC2Times.startFrame,
    aSorted.startFrame,
    pointerIIndex,
  ]);

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

      {/* Audio Element */}
      <Audio src={staticFile("audio/011/04-counting-code.mp3")} />

      {/* ============================================================ */}
      {/* 1. TOP HEADER                                                */}
      {/* ============================================================ */}
      <div
        style={{
          position: "absolute",
          top: 36,
          left: 80,
          width: 1760,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* Question Badge */}
          <div style={{ position: "relative", width: 250, height: 38 }}>
            <div style={{ position: "absolute", inset: 0 }}>
              <RoughBox width={250} height={38} stroke="rgba(248, 246, 240, 0.4)" seed={11} strokeWidth={2} />
            </div>
            <div
              style={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                fontFamily: fonts.mono,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: theme.chalkText,
              }}
            >
              QUESTION 011 · SORT COLORS
            </div>
          </div>

          {/* Approach Badge */}
          <div style={{ position: "relative", width: 330, height: 38 }}>
            <div style={{ position: "absolute", inset: 0 }}>
              <RoughBox width={330} height={38} stroke={theme.pivot} seed={12} strokeWidth={2} />
            </div>
            <div
              style={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                fontFamily: fonts.mono,
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: "0.08em",
                color: theme.pivot,
              }}
            >
              APPROACH 1 · COUNTING SORT (PYTHON)
            </div>
          </div>
        </div>

        {/* Phase Indicator */}
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 13,
            fontWeight: 800,
            color: frame < aRewrite.startFrame ? theme.pivot : "#6EE7B7",
            letterSpacing: "0.08em",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: frame < aRewrite.startFrame ? theme.pivot : "#6EE7B7",
            }}
          />
          {frame < aRewrite.startFrame
            ? "PHASE 1: COUNT FREQUENCIES (O(N))"
            : frame < aSimple.startFrame
            ? "PHASE 2: IN-PLACE REWRITE (O(N))"
            : "COMPLETE ALGORITHM ARCHITECTURE"}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. DYNAMIC TERMINAL / CODE STAGE                             */}
      {/* ============================================================ */}
      {terminalGeom.opacity > 0 && (
        <div
          style={{
            position: "absolute",
            top: terminalGeom.top,
            left: terminalGeom.left,
            width: terminalGeom.width,
            height: terminalGeom.height,
            transform: `scale(${terminalGeom.scale})`,
            opacity: terminalGeom.opacity,
            transformOrigin: "center center",
            zIndex: 10,
            transition: "none",
          }}
        >
          <ChalkCodeEditorV2
            title="solution_counting.py"
            language="PYTHON 3.11"
            width={terminalGeom.width}
            height={terminalGeom.height}
            fontSize={13.5}
            lineHeight={25.5}
            lines={editorLines}
            activeLineNums={activeLineNums}
          />
        </div>
      )}

      {/* ============================================================ */}
      {/* 3. DYNAMIC VISUAL STAGE: COUNTERS + ARRAY TRACK              */}
      {/* ============================================================ */}
      {visualOpacity > 0 && (
        <div
          style={{
            position: "absolute",
            top: visualGeom.top,
            left: visualGeom.left,
            width: visualGeom.width,
            height: visualGeom.height,
            opacity: visualOpacity,
            display: "flex",
            flexDirection: "column",
            gap: 20,
            zIndex: 10,
          }}
        >
          {/* 3A. THREE FREQUENCY COUNTER CARDS */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 4px",
              }}
            >
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 13,
                  fontWeight: 800,
                  color: theme.chalkText,
                  letterSpacing: "0.08em",
                }}
              >
                FREQUENCY COUNTER STATE IN MEMORY
              </span>
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 12,
                  color: frame < aPass1Done.startFrame ? theme.pivot : "#6EE7B7",
                }}
              >
                {frame < aPass1Done.startFrame ? "SCANNING ARRAY..." : "TALLIES LOCKED (TOTAL = 10)"}
              </span>
            </div>

            <div style={{ display: "flex", gap: 16 }}>
              {/* Counter 0 Card */}
              <div
                style={{
                  flex: 1,
                  position: "relative",
                  height: 135,
                  transform: count0Pulse ? "scale(1.06)" : "scale(1.0)",
                  transition: "transform 0.15s ease",
                }}
              >
                <div style={{ position: "absolute", inset: 0 }}>
                  <RoughBox
                    width={isSortedHero ? 440 : 288}
                    height={135}
                    stroke="#FF7675"
                    seed={101}
                    strokeWidth={count0Pulse ? 3.5 : 2}
                  />
                </div>
                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    padding: "14px 18px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: "#FF7675" }}>
                      count0
                    </span>
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 11,
                        padding: "2px 8px",
                        borderRadius: 4,
                        background: "rgba(255, 118, 117, 0.15)",
                        color: "#FF7675",
                      }}
                    >
                      COLOR 0
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 42,
                      fontWeight: 900,
                      color: theme.chalkText,
                      lineHeight: 1,
                    }}
                  >
                    {count0Val}
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 11, color: "rgba(248, 246, 240, 0.6)" }}>
                    {frame < aPass1Done.startFrame ? "tallies zeroes" : "writes 3 zeroes"}
                  </div>
                </div>
              </div>

              {/* Counter 1 Card */}
              <div
                style={{
                  flex: 1,
                  position: "relative",
                  height: 135,
                  transform: count1Pulse ? "scale(1.06)" : "scale(1.0)",
                  transition: "transform 0.15s ease",
                }}
              >
                <div style={{ position: "absolute", inset: 0 }}>
                  <RoughBox
                    width={isSortedHero ? 440 : 288}
                    height={135}
                    stroke={theme.chalkText}
                    seed={102}
                    strokeWidth={count1Pulse ? 3.5 : 2}
                  />
                </div>
                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    padding: "14px 18px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.chalkText }}>
                      count1
                    </span>
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 11,
                        padding: "2px 8px",
                        borderRadius: 4,
                        background: "rgba(248, 246, 240, 0.15)",
                        color: theme.chalkText,
                      }}
                    >
                      COLOR 1
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 42,
                      fontWeight: 900,
                      color: theme.chalkText,
                      lineHeight: 1,
                    }}
                  >
                    {count1Val}
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 11, color: "rgba(248, 246, 240, 0.6)" }}>
                    {frame < aPass1Done.startFrame ? "tallies ones" : "writes 3 ones"}
                  </div>
                </div>
              </div>

              {/* Counter 2 Card */}
              <div
                style={{
                  flex: 1,
                  position: "relative",
                  height: 135,
                  transform: count2Pulse ? "scale(1.06)" : "scale(1.0)",
                  transition: "transform 0.15s ease",
                }}
              >
                <div style={{ position: "absolute", inset: 0 }}>
                  <RoughBox
                    width={isSortedHero ? 440 : 288}
                    height={135}
                    stroke={theme.cyan}
                    seed={103}
                    strokeWidth={count2Pulse ? 3.5 : 2}
                  />
                </div>
                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    padding: "14px 18px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.cyan }}>
                      count2
                    </span>
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 11,
                        padding: "2px 8px",
                        borderRadius: 4,
                        background: "rgba(92, 225, 230, 0.15)",
                        color: theme.cyan,
                      }}
                    >
                      COLOR 2
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 42,
                      fontWeight: 900,
                      color: theme.chalkText,
                      lineHeight: 1,
                    }}
                  >
                    {count2Val}
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 11, color: "rgba(248, 246, 240, 0.6)" }}>
                    {frame < aPass1Done.startFrame ? "tallies twos" : "writes 4 twos"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3B. ARRAY TRACK CONTAINER (SCANNING OR REWRITING) */}
          <div
            style={{
              position: "relative",
              width: "100%",
              minHeight: 265,
              padding: "20px 24px",
              boxSizing: "border-box",
            }}
          >
            <div style={{ position: "absolute", inset: 0 }}>
              <RoughBox
                width={isSortedHero ? 1390 : 890}
                height={265}
                stroke={isSortedHero ? theme.pivot : "rgba(248, 246, 240, 0.35)"}
                seed={201}
                strokeWidth={isSortedHero ? 2.5 : 2}
              />
            </div>

            <div style={{ position: "relative", zIndex: 2 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: isSortedHero ? 28 : 14,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 14,
                      fontWeight: 800,
                      color: theme.pivot,
                      letterSpacing: "0.08em",
                    }}
                  >
                    {!isRewritePhase ? "PASS 1: SCANNING nums ARRAY" : "PASS 2: IN-PLACE ARRAY REWRITE"}
                  </span>
                  {pointerIIndex >= 0 && frame < aSorted.startFrame && (
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 11,
                        padding: "2px 8px",
                        borderRadius: 4,
                        backgroundColor: "rgba(255, 209, 102, 0.2)",
                        color: theme.pivot,
                        border: `1px solid ${theme.pivot}`,
                      }}
                    >
                      WRITE POINTER: i = {pointerIIndex}
                    </span>
                  )}
                </div>

                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 12,
                    fontWeight: 700,
                    color: isSortedHero ? "#6EE7B7" : "rgba(248, 246, 240, 0.6)",
                  }}
                >
                  {isSortedHero ? "FULL ARRAY SORTED IN-PLACE" : "nums LENGTH: N = 10"}
                </div>
              </div>

              {/* Array Track Component */}
              <div style={{ display: "flex", justifyContent: "center", marginTop: isSortedHero ? 16 : 6 }}>
                <ArrayTrackV2
                  elements={rewriteElements}
                  slotWidth={isSortedHero ? 104 : 70}
                  slotHeight={isSortedHero ? 76 : 62}
                  gap={isSortedHero ? 12 : 8}
                  showIndices={true}
                  indexPlacement="bottom"
                  pointers={
                    pointerIIndex >= 0 && frame < aSorted.startFrame
                      ? [
                          {
                            id: "ptr-i",
                            label: "i",
                            index: pointerIIndex,
                            color: theme.pivot,
                          },
                        ]
                      : []
                  }
                  partitions={
                    isSortedHero
                      ? [
                          { startIndex: 0, endIndex: 2, label: "0s (count0 = 3)", color: "#FF7675" },
                          { startIndex: 3, endIndex: 5, label: "1s (count1 = 3)", color: theme.chalkText },
                          { startIndex: 6, endIndex: 9, label: "2s (count2 = 4)", color: theme.cyan },
                        ]
                      : undefined
                  }
                />
              </div>
            </div>
          </div>

          {/* 3C. MASTER TESTCASE ALIGNMENT / CAUSE-EFFECT CALLOUT */}
          {frame >= aEx.startFrame && frame < aSimple.startFrame && (
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 130,
                boxSizing: "border-box",
              }}
            >
              <div style={{ position: "absolute", inset: 0 }}>
                <RoughBox
                  width={isSortedHero ? 1390 : 890}
                  height={130}
                  stroke={theme.good}
                  seed={301}
                  strokeWidth={2}
                />
              </div>
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  padding: "14px 24px",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: fonts.mono, fontSize: 12, color: "rgba(248, 246, 240, 0.6)" }}>
                    FIRST SEGMENT
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 900, color: "#FF7675" }}>
                    count0 = 3 → 3 ZEROES
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.chalkDim }}>
                    nums[0..2] = [0, 0, 0]
                  </div>
                </div>

                <div style={{ width: 2, height: 50, backgroundColor: "rgba(248, 246, 240, 0.2)" }} />

                <div style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: fonts.mono, fontSize: 12, color: "rgba(248, 246, 240, 0.6)" }}>
                    SECOND SEGMENT
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 900, color: theme.chalkText }}>
                    count1 = 3 → 3 ONES
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.chalkDim }}>
                    nums[3..5] = [1, 1, 1]
                  </div>
                </div>

                <div style={{ width: 2, height: 50, backgroundColor: "rgba(248, 246, 240, 0.2)" }} />

                <div style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: fonts.mono, fontSize: 12, color: "rgba(248, 246, 240, 0.6)" }}>
                    THIRD SEGMENT
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 900, color: theme.cyan }}>
                    count2 = 4 → 4 TWOS
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.chalkDim }}>
                    nums[6..9] = [2, 2, 2, 2]
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ============================================================ */}
      {/* 4. TAKEAWAY BANNER (CONCLUSION F1948..F2113)                 */}
      {/* ============================================================ */}
      {frame >= aSimple.startFrame && (
        <div
          style={{
            position: "absolute",
            top: 845,
            left: 360,
            width: 1200,
            height: 64,
            zIndex: 30,
          }}
        >
          <div style={{ position: "absolute", inset: 0 }}>
            <RoughBox width={1200} height={64} stroke="#6EE7B7" seed={888} strokeWidth={2.5} />
          </div>
          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
              padding: "0 28px",
            }}
          >
            <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.chalkText }}>
              COUNTING SORT TAKEAWAY:
            </div>
            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
              <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.pivot }}>
                PASS 1: COUNT FREQUENCIES (O(N))
              </span>
              <span style={{ color: "rgba(248, 246, 240, 0.4)", fontSize: 16 }}>➔</span>
              <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: "#6EE7B7" }}>
                PASS 2: REWRITE SLOTS (O(N))
              </span>
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 12,
                  fontWeight: 800,
                  backgroundColor: "rgba(110, 231, 183, 0.2)",
                  color: "#6EE7B7",
                  padding: "4px 10px",
                  borderRadius: 6,
                  border: "1px solid #6EE7B7",
                }}
              >
                TIME: O(N) · SPACE: O(1)
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 5. CAPTIONS ZONE                                             */}
      {/* ============================================================ */}
      <Captions words={captionWords} bottom={40} />
    </div>
  );
};
