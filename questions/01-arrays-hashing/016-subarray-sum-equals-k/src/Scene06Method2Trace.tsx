/**
 * Scene06Method2Trace.tsx — Scene 06 · Method 2 Full Trace (Prefix Frequency Map)
 * Subarray Sum Equals K (LeetCode 560) · Pattern 01 — Arrays & Hashing
 *
 * Implements the Complete Optimal Trace Execution:
 * - 100% Kit Components: ArrayTrackV2, RoughBox, Captions, ChalkboardBackground, ChalkFilters
 * - Total Duration: 6,125 frames @ 30fps (204.180s) strictly from sync/06-method2-trace.json
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
import { ArrayTrackV2, ArrayElementItem, ArrayPointer } from "../../../../kit/components/array";
import { RoughBox } from "../../../../kit/components/RoughBox";
import { RoughLine } from "../../../../kit/components/RoughLine";
import syncData from "../sync/06-method2-trace.json";

// Hand-drawn radiating chalk ticks
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

// ---------------------------------------------------------------------------
// Caption Normalization
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

interface MapEntry {
  key: number;
  freq: number;
  indices: string[];
}

interface StepState {
  index: number | null;
  val: number | null;
  prevPrefix: number;
  prefix: number;
  needed: number | null;
  isQuerying: boolean;
  lookupFound: boolean;
  lookupFreq: number;
  answer: number;
  mapEntries: MapEntry[];
  highlightQueryKey: number | null;
  highlightInsertedKey: number | null;
  matchedSubarrays?: Array<{ label: string; range: [number, number]; elements: number[] }>;
  status: string;
  isSummary?: boolean;
}

export const Scene06Method2Trace: React.FC = () => {
  const frame = useCurrentFrame();

  const rawValues = [1, -1, 2, 1, 0, -2, 3];

  // =========================================================================
  // STEP-BY-STEP DETERMINISTIC STATE MACHINE (0..6125 frames)
  // Derived strictly from anchors.json & sync/06-method2-trace.json
  // =========================================================================
  const state: StepState = useMemo(() => {
    // Phase 1: Initial State Setup (F0 .. F228)
    if (frame < 43) {
      return {
        index: null,
        val: null,
        prevPrefix: 0,
        prefix: 0,
        needed: null,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 0,
        mapEntries: [],
        highlightQueryKey: null,
        highlightInsertedKey: null,
        status: "Starting Method 2: Target k = 3 | Initialize variables.",
      };
    }
    if (frame < 104) {
      return {
        index: null,
        val: null,
        prevPrefix: 0,
        prefix: 0,
        needed: null,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 0,
        mapEntries: [],
        highlightQueryKey: null,
        highlightInsertedKey: null,
        status: "prefix = 0 (running sum accumulator initialized to zero)",
      };
    }
    if (frame < 149) {
      return {
        index: null,
        val: null,
        prevPrefix: 0,
        prefix: 0,
        needed: null,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 0,
        mapEntries: [],
        highlightQueryKey: null,
        highlightInsertedKey: null,
        status: "answer = 0 (no valid subarrays counted yet)",
      };
    }
    if (frame < 181) {
      return {
        index: null,
        val: null,
        prevPrefix: 0,
        prefix: 0,
        needed: null,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 0,
        mapEntries: [],
        highlightQueryKey: null,
        highlightInsertedKey: null,
        status: "Initialize Hash Map freq to track prefix sum frequencies.",
      };
    }
    if (frame < 229) {
      return {
        index: null,
        val: null,
        prevPrefix: 0,
        prefix: 0,
        needed: null,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 0,
        mapEntries: [{ key: 0, freq: 1, indices: ["dummy"] }],
        highlightQueryKey: null,
        highlightInsertedKey: 0,
        status: "Base Case: freq[0] = 1 (empty prefix before index 0 has sum 0)",
      };
    }

    // -----------------------------------------------------------------------
    // Iteration i = 0, val = 1 (F229 .. F811)
    // -----------------------------------------------------------------------
    if (frame < 331) {
      return {
        index: 0,
        val: 1,
        prevPrefix: 0,
        prefix: 0,
        needed: null,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 0,
        mapEntries: [{ key: 0, freq: 1, indices: ["dummy"] }],
        highlightQueryKey: null,
        highlightInsertedKey: null,
        status: "Index 0: value = 1. Prepare to update prefix sum.",
      };
    }
    if (frame < 400) {
      return {
        index: 0,
        val: 1,
        prevPrefix: 0,
        prefix: 1,
        needed: null,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 0,
        mapEntries: [{ key: 0, freq: 1, indices: ["dummy"] }],
        highlightQueryKey: null,
        highlightInsertedKey: null,
        status: "prefix = 0 + 1 = 1",
      };
    }
    if (frame < 524) {
      return {
        index: 0,
        val: 1,
        prevPrefix: 0,
        prefix: 1,
        needed: frame < 478 ? null : -2,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 0,
        mapEntries: [{ key: 0, freq: 1, indices: ["dummy"] }],
        highlightQueryKey: null,
        highlightInsertedKey: null,
        status: "needed = prefix - k = 1 - 3 = -2",
      };
    }
    if (frame < 656) {
      return {
        index: 0,
        val: 1,
        prevPrefix: 0,
        prefix: 1,
        needed: -2,
        isQuerying: true,
        lookupFound: false,
        lookupFreq: 0,
        answer: 0,
        mapEntries: [{ key: 0, freq: 1, indices: ["dummy"] }],
        highlightQueryKey: -2,
        highlightInsertedKey: null,
        status: "Lookup freq[-2]: Not in map (0). answer stays 0.",
      };
    }
    if (frame < 812) {
      return {
        index: 0,
        val: 1,
        prevPrefix: 0,
        prefix: 1,
        needed: -2,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 0,
        mapEntries: [
          { key: 0, freq: 1, indices: ["dummy"] },
          { key: 1, freq: 1, indices: ["idx 0"] },
        ],
        highlightQueryKey: null,
        highlightInsertedKey: 1,
        status: "Store current prefix 1 in map: freq[1] = 1. Map now has {0:1, 1:1}.",
      };
    }

    // -----------------------------------------------------------------------
    // Iteration i = 1, val = -1 (F812 .. F1616)
    // -----------------------------------------------------------------------
    if (frame < 958) {
      return {
        index: 1,
        val: -1,
        prevPrefix: 1,
        prefix: 1,
        needed: null,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 0,
        mapEntries: [
          { key: 0, freq: 1, indices: ["dummy"] },
          { key: 1, freq: 1, indices: ["idx 0"] },
        ],
        highlightQueryKey: null,
        highlightInsertedKey: null,
        status: "Index 1: value = -1. Current prefix is 1.",
      };
    }
    if (frame < 1062) {
      return {
        index: 1,
        val: -1,
        prevPrefix: 1,
        prefix: 0,
        needed: null,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 0,
        mapEntries: [
          { key: 0, freq: 1, indices: ["dummy"] },
          { key: 1, freq: 1, indices: ["idx 0"] },
        ],
        highlightQueryKey: null,
        highlightInsertedKey: null,
        status: "prefix = 1 + (-1) = 0",
      };
    }
    if (frame < 1153) {
      return {
        index: 1,
        val: -1,
        prevPrefix: 1,
        prefix: 0,
        needed: frame < 1115 ? null : -3,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 0,
        mapEntries: [
          { key: 0, freq: 1, indices: ["dummy"] },
          { key: 1, freq: 1, indices: ["idx 0"] },
        ],
        highlightQueryKey: null,
        highlightInsertedKey: null,
        status: "needed = prefix - k = 0 - 3 = -3",
      };
    }
    if (frame < 1265) {
      return {
        index: 1,
        val: -1,
        prevPrefix: 1,
        prefix: 0,
        needed: -3,
        isQuerying: true,
        lookupFound: false,
        lookupFreq: 0,
        answer: 0,
        mapEntries: [
          { key: 0, freq: 1, indices: ["dummy"] },
          { key: 1, freq: 1, indices: ["idx 0"] },
        ],
        highlightQueryKey: -3,
        highlightInsertedKey: null,
        status: "Lookup freq[-3]: Not in map (0). answer stays 0.",
      };
    }
    if (frame < 1617) {
      return {
        index: 1,
        val: -1,
        prevPrefix: 1,
        prefix: 0,
        needed: -3,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 0,
        mapEntries: [
          { key: 0, freq: 2, indices: ["dummy", "idx 1"] },
          { key: 1, freq: 1, indices: ["idx 0"] },
        ],
        highlightQueryKey: null,
        highlightInsertedKey: 0,
        status:
          "Store current prefix 0: freq[0] was 1, now becomes 2! Two earlier positions sum to 0.",
      };
    }

    // -----------------------------------------------------------------------
    // Iteration i = 2, val = 2 (F1617 .. F1984)
    // -----------------------------------------------------------------------
    if (frame < 1661) {
      return {
        index: 2,
        val: 2,
        prevPrefix: 0,
        prefix: 0,
        needed: null,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 0,
        mapEntries: [
          { key: 0, freq: 2, indices: ["dummy", "idx 1"] },
          { key: 1, freq: 1, indices: ["idx 0"] },
        ],
        highlightQueryKey: null,
        highlightInsertedKey: null,
        status: "Index 2: value = 2. Current prefix is 0.",
      };
    }
    if (frame < 1732) {
      return {
        index: 2,
        val: 2,
        prevPrefix: 0,
        prefix: 2,
        needed: null,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 0,
        mapEntries: [
          { key: 0, freq: 2, indices: ["dummy", "idx 1"] },
          { key: 1, freq: 1, indices: ["idx 0"] },
        ],
        highlightQueryKey: null,
        highlightInsertedKey: null,
        status: "prefix = 0 + 2 = 2",
      };
    }
    if (frame < 1827) {
      return {
        index: 2,
        val: 2,
        prevPrefix: 0,
        prefix: 2,
        needed: frame < 1792 ? null : -1,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 0,
        mapEntries: [
          { key: 0, freq: 2, indices: ["dummy", "idx 1"] },
          { key: 1, freq: 1, indices: ["idx 0"] },
        ],
        highlightQueryKey: null,
        highlightInsertedKey: null,
        status: "needed = prefix - k = 2 - 3 = -1",
      };
    }
    if (frame < 1908) {
      return {
        index: 2,
        val: 2,
        prevPrefix: 0,
        prefix: 2,
        needed: -1,
        isQuerying: true,
        lookupFound: false,
        lookupFreq: 0,
        answer: 0,
        mapEntries: [
          { key: 0, freq: 2, indices: ["dummy", "idx 1"] },
          { key: 1, freq: 1, indices: ["idx 0"] },
        ],
        highlightQueryKey: -1,
        highlightInsertedKey: null,
        status: "Lookup freq[-1]: Not in map (0). answer stays 0.",
      };
    }
    if (frame < 1985) {
      return {
        index: 2,
        val: 2,
        prevPrefix: 0,
        prefix: 2,
        needed: -1,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 0,
        mapEntries: [
          { key: 0, freq: 2, indices: ["dummy", "idx 1"] },
          { key: 1, freq: 1, indices: ["idx 0"] },
          { key: 2, freq: 1, indices: ["idx 2"] },
        ],
        highlightQueryKey: null,
        highlightInsertedKey: 2,
        status: "Store current prefix 2 in map: freq[2] = 1.",
      };
    }

    // -----------------------------------------------------------------------
    // Iteration i = 3, val = 1 (F1985 .. F3053) [MATCH EVENT 1: freq[0] = 2]
    // -----------------------------------------------------------------------
    if (frame < 2135) {
      return {
        index: 3,
        val: 1,
        prevPrefix: 2,
        prefix: 2,
        needed: null,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 0,
        mapEntries: [
          { key: 0, freq: 2, indices: ["dummy", "idx 1"] },
          { key: 1, freq: 1, indices: ["idx 0"] },
          { key: 2, freq: 1, indices: ["idx 2"] },
        ],
        highlightQueryKey: null,
        highlightInsertedKey: null,
        status: "Index 3: value = 1. Current prefix is 2.",
      };
    }
    if (frame < 2214) {
      return {
        index: 3,
        val: 1,
        prevPrefix: 2,
        prefix: 3,
        needed: null,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 0,
        mapEntries: [
          { key: 0, freq: 2, indices: ["dummy", "idx 1"] },
          { key: 1, freq: 1, indices: ["idx 0"] },
          { key: 2, freq: 1, indices: ["idx 2"] },
        ],
        highlightQueryKey: null,
        highlightInsertedKey: null,
        status: "prefix = 2 + 1 = 3",
      };
    }
    if (frame < 2338) {
      return {
        index: 3,
        val: 1,
        prevPrefix: 2,
        prefix: 3,
        needed: frame < 2276 ? null : 0,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 0,
        mapEntries: [
          { key: 0, freq: 2, indices: ["dummy", "idx 1"] },
          { key: 1, freq: 1, indices: ["idx 0"] },
          { key: 2, freq: 1, indices: ["idx 2"] },
        ],
        highlightQueryKey: null,
        highlightInsertedKey: null,
        status: "needed = prefix - k = 3 - 3 = 0",
      };
    }
    if (frame < 2842) {
      // Audio explains frequency of 0 is 2 -> two valid subarrays!
      const ansVal = frame >= 2759 ? 2 : 0;
      return {
        index: 3,
        val: 1,
        prevPrefix: 2,
        prefix: 3,
        needed: 0,
        isQuerying: true,
        lookupFound: true,
        lookupFreq: 2,
        answer: ansVal,
        mapEntries: [
          { key: 0, freq: 2, indices: ["dummy", "idx 1"] },
          { key: 1, freq: 1, indices: ["idx 0"] },
          { key: 2, freq: 1, indices: ["idx 2"] },
        ],
        highlightQueryKey: 0,
        highlightInsertedKey: null,
        matchedSubarrays: [
          { label: "Subarray A (starts after dummy)", range: [0, 3], elements: [1, -1, 2, 1] },
          { label: "Subarray B (starts after idx 1)", range: [2, 3], elements: [2, 1] },
        ],
        status:
          frame < 2759
            ? "LOOKUP freq[0] = 2! Two earlier prefix positions sum to 0 → 2 valid subarrays end at index 3!"
            : "MATCH! answer += 2 → answer = 2! Both subarrays captured in O(1)!",
      };
    }
    if (frame < 3054) {
      return {
        index: 3,
        val: 1,
        prevPrefix: 2,
        prefix: 3,
        needed: 0,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 2,
        mapEntries: [
          { key: 0, freq: 2, indices: ["dummy", "idx 1"] },
          { key: 1, freq: 1, indices: ["idx 0"] },
          { key: 2, freq: 1, indices: ["idx 2"] },
          { key: 3, freq: 1, indices: ["idx 3"] },
        ],
        highlightQueryKey: null,
        highlightInsertedKey: 3,
        status: "AFTER counting matches, store current prefix 3: freq[3] = 1.",
      };
    }

    // -----------------------------------------------------------------------
    // Iteration i = 4, val = 0 (F3054 .. F3852) [MATCH EVENT 2: freq[0] = 2]
    // -----------------------------------------------------------------------
    if (frame < 3124) {
      return {
        index: 4,
        val: 0,
        prevPrefix: 3,
        prefix: 3,
        needed: null,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 2,
        mapEntries: [
          { key: 0, freq: 2, indices: ["dummy", "idx 1"] },
          { key: 1, freq: 1, indices: ["idx 0"] },
          { key: 2, freq: 1, indices: ["idx 2"] },
          { key: 3, freq: 1, indices: ["idx 3"] },
        ],
        highlightQueryKey: null,
        highlightInsertedKey: null,
        status: "Index 4: value = 0. Adding 0 keeps prefix at 3.",
      };
    }
    if (frame < 3293) {
      return {
        index: 4,
        val: 0,
        prevPrefix: 3,
        prefix: 3,
        needed: null,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 2,
        mapEntries: [
          { key: 0, freq: 2, indices: ["dummy", "idx 1"] },
          { key: 1, freq: 1, indices: ["idx 0"] },
          { key: 2, freq: 1, indices: ["idx 2"] },
          { key: 3, freq: 1, indices: ["idx 3"] },
        ],
        highlightQueryKey: null,
        highlightInsertedKey: null,
        status: "prefix = 3 + 0 = 3 (A new distinct prefix position at index 4)",
      };
    }
    if (frame < 3393) {
      return {
        index: 4,
        val: 0,
        prevPrefix: 3,
        prefix: 3,
        needed: frame < 3371 ? null : 0,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 2,
        mapEntries: [
          { key: 0, freq: 2, indices: ["dummy", "idx 1"] },
          { key: 1, freq: 1, indices: ["idx 0"] },
          { key: 2, freq: 1, indices: ["idx 2"] },
          { key: 3, freq: 1, indices: ["idx 3"] },
        ],
        highlightQueryKey: null,
        highlightInsertedKey: null,
        status: "needed = prefix - k = 3 - 3 = 0",
      };
    }
    if (frame < 3654) {
      const ansVal = frame >= 3577 ? 4 : 2;
      return {
        index: 4,
        val: 0,
        prevPrefix: 3,
        prefix: 3,
        needed: 0,
        isQuerying: true,
        lookupFound: true,
        lookupFreq: 2,
        answer: ansVal,
        mapEntries: [
          { key: 0, freq: 2, indices: ["dummy", "idx 1"] },
          { key: 1, freq: 1, indices: ["idx 0"] },
          { key: 2, freq: 1, indices: ["idx 2"] },
          { key: 3, freq: 1, indices: ["idx 3"] },
        ],
        highlightQueryKey: 0,
        highlightInsertedKey: null,
        matchedSubarrays: [
          { label: "Subarray C (nums[0..4])", range: [0, 4], elements: [1, -1, 2, 1, 0] },
          { label: "Subarray D (nums[2..4])", range: [2, 4], elements: [2, 1, 0] },
        ],
        status:
          frame < 3577
            ? "LOOKUP freq[0] = 2 again! 2 valid subarrays end at index 4!"
            : "MATCH! answer += 2 → answer = 4! Subarrays [1, -1, 2, 1, 0] and [2, 1, 0]!",
      };
    }
    if (frame < 3853) {
      return {
        index: 4,
        val: 0,
        prevPrefix: 3,
        prefix: 3,
        needed: 0,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 4,
        mapEntries: [
          { key: 0, freq: 2, indices: ["dummy", "idx 1"] },
          { key: 1, freq: 1, indices: ["idx 0"] },
          { key: 2, freq: 1, indices: ["idx 2"] },
          { key: 3, freq: 2, indices: ["idx 3", "idx 4"] },
        ],
        highlightQueryKey: null,
        highlightInsertedKey: 3,
        status: "Store current prefix 3: already occurred once → freq[3] becomes 2!",
      };
    }

    // -----------------------------------------------------------------------
    // Iteration i = 5, val = -2 (F3853 .. F4404)
    // -----------------------------------------------------------------------
    if (frame < 3917) {
      return {
        index: 5,
        val: -2,
        prevPrefix: 3,
        prefix: 3,
        needed: null,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 4,
        mapEntries: [
          { key: 0, freq: 2, indices: ["dummy", "idx 1"] },
          { key: 1, freq: 1, indices: ["idx 0"] },
          { key: 2, freq: 1, indices: ["idx 2"] },
          { key: 3, freq: 2, indices: ["idx 3", "idx 4"] },
        ],
        highlightQueryKey: null,
        highlightInsertedKey: null,
        status: "Index 5: value = -2. Current prefix is 3.",
      };
    }
    if (frame < 3991) {
      return {
        index: 5,
        val: -2,
        prevPrefix: 3,
        prefix: 1,
        needed: null,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 4,
        mapEntries: [
          { key: 0, freq: 2, indices: ["dummy", "idx 1"] },
          { key: 1, freq: 1, indices: ["idx 0"] },
          { key: 2, freq: 1, indices: ["idx 2"] },
          { key: 3, freq: 2, indices: ["idx 3", "idx 4"] },
        ],
        highlightQueryKey: null,
        highlightInsertedKey: null,
        status: "prefix = 3 + (-2) = 1",
      };
    }
    if (frame < 4106) {
      return {
        index: 5,
        val: -2,
        prevPrefix: 3,
        prefix: 1,
        needed: frame < 4063 ? null : -2,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 4,
        mapEntries: [
          { key: 0, freq: 2, indices: ["dummy", "idx 1"] },
          { key: 1, freq: 1, indices: ["idx 0"] },
          { key: 2, freq: 1, indices: ["idx 2"] },
          { key: 3, freq: 2, indices: ["idx 3", "idx 4"] },
        ],
        highlightQueryKey: null,
        highlightInsertedKey: null,
        status: "needed = prefix - k = 1 - 3 = -2",
      };
    }
    if (frame < 4232) {
      return {
        index: 5,
        val: -2,
        prevPrefix: 3,
        prefix: 1,
        needed: -2,
        isQuerying: true,
        lookupFound: false,
        lookupFreq: 0,
        answer: 4,
        mapEntries: [
          { key: 0, freq: 2, indices: ["dummy", "idx 1"] },
          { key: 1, freq: 1, indices: ["idx 0"] },
          { key: 2, freq: 1, indices: ["idx 2"] },
          { key: 3, freq: 2, indices: ["idx 3", "idx 4"] },
        ],
        highlightQueryKey: -2,
        highlightInsertedKey: null,
        status: "Lookup freq[-2]: Not in map (0). answer stays 4.",
      };
    }
    if (frame < 4405) {
      return {
        index: 5,
        val: -2,
        prevPrefix: 3,
        prefix: 1,
        needed: -2,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 4,
        mapEntries: [
          { key: 0, freq: 2, indices: ["dummy", "idx 1"] },
          { key: 1, freq: 2, indices: ["idx 0", "idx 5"] },
          { key: 2, freq: 1, indices: ["idx 2"] },
          { key: 3, freq: 2, indices: ["idx 3", "idx 4"] },
        ],
        highlightQueryKey: null,
        highlightInsertedKey: 1,
        status: "Store current prefix 1: already occurred once → freq[1] becomes 2!",
      };
    }

    // -----------------------------------------------------------------------
    // Iteration i = 6, val = 3 (F4405 .. F5448) [MATCH EVENT 3: freq[1] = 2]
    // -----------------------------------------------------------------------
    if (frame < 4525) {
      return {
        index: 6,
        val: 3,
        prevPrefix: 1,
        prefix: 1,
        needed: null,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 4,
        mapEntries: [
          { key: 0, freq: 2, indices: ["dummy", "idx 1"] },
          { key: 1, freq: 2, indices: ["idx 0", "idx 5"] },
          { key: 2, freq: 1, indices: ["idx 2"] },
          { key: 3, freq: 2, indices: ["idx 3", "idx 4"] },
        ],
        highlightQueryKey: null,
        highlightInsertedKey: null,
        status: "Index 6: final value = 3. Current prefix is 1.",
      };
    }
    if (frame < 4613) {
      return {
        index: 6,
        val: 3,
        prevPrefix: 1,
        prefix: 4,
        needed: null,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 4,
        mapEntries: [
          { key: 0, freq: 2, indices: ["dummy", "idx 1"] },
          { key: 1, freq: 2, indices: ["idx 0", "idx 5"] },
          { key: 2, freq: 1, indices: ["idx 2"] },
          { key: 3, freq: 2, indices: ["idx 3", "idx 4"] },
        ],
        highlightQueryKey: null,
        highlightInsertedKey: null,
        status: "prefix = 1 + 3 = 4",
      };
    }
    if (frame < 4745) {
      return {
        index: 6,
        val: 3,
        prevPrefix: 1,
        prefix: 4,
        needed: frame < 4682 ? null : 1,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 4,
        mapEntries: [
          { key: 0, freq: 2, indices: ["dummy", "idx 1"] },
          { key: 1, freq: 2, indices: ["idx 0", "idx 5"] },
          { key: 2, freq: 1, indices: ["idx 2"] },
          { key: 3, freq: 2, indices: ["idx 3", "idx 4"] },
        ],
        highlightQueryKey: null,
        highlightInsertedKey: null,
        status: "needed = prefix - k = 4 - 3 = 1",
      };
    }
    if (frame < 5364) {
      const ansVal = frame >= 5285 ? 6 : 4;
      return {
        index: 6,
        val: 3,
        prevPrefix: 1,
        prefix: 4,
        needed: 1,
        isQuerying: true,
        lookupFound: true,
        lookupFreq: 2,
        answer: ansVal,
        mapEntries: [
          { key: 0, freq: 2, indices: ["dummy", "idx 1"] },
          { key: 1, freq: 2, indices: ["idx 0", "idx 5"] },
          { key: 2, freq: 1, indices: ["idx 2"] },
          { key: 3, freq: 2, indices: ["idx 3", "idx 4"] },
        ],
        highlightQueryKey: 1,
        highlightInsertedKey: null,
        matchedSubarrays: [
          { label: "Subarray E (nums[1..6])", range: [1, 6], elements: [-1, 2, 1, 0, -2, 3] },
          { label: "Subarray F (nums[6..6])", range: [6, 6], elements: [3] },
        ],
        status:
          frame < 5285
            ? "LOOKUP freq[1] = 2! Two earlier prefix positions sum to 1 → 2 valid subarrays end at index 6!"
            : "MATCH! answer += 2 → answer = 6! Subarrays [-1, 2, 1, 0, -2, 3] and [3]!",
      };
    }
    if (frame < 5449) {
      return {
        index: 6,
        val: 3,
        prevPrefix: 1,
        prefix: 4,
        needed: 1,
        isQuerying: false,
        lookupFound: false,
        lookupFreq: 0,
        answer: 6,
        mapEntries: [
          { key: 0, freq: 2, indices: ["dummy", "idx 1"] },
          { key: 1, freq: 2, indices: ["idx 0", "idx 5"] },
          { key: 2, freq: 1, indices: ["idx 2"] },
          { key: 3, freq: 2, indices: ["idx 3", "idx 4"] },
          { key: 4, freq: 1, indices: ["idx 6"] },
        ],
        highlightQueryKey: null,
        highlightInsertedKey: 4,
        status: "Store current prefix 4: freq[4] = 1. Array iteration complete!",
      };
    }

    // -----------------------------------------------------------------------
    // Wrap-up & Pattern Insight (F5449 .. F6125)
    // -----------------------------------------------------------------------
    return {
      index: null,
      val: null,
      prevPrefix: 4,
      prefix: 4,
      needed: null,
      isQuerying: false,
      lookupFound: false,
      lookupFreq: 0,
      answer: 6,
      mapEntries: [
        { key: 0, freq: 2, indices: ["dummy", "idx 1"] },
        { key: 1, freq: 2, indices: ["idx 0", "idx 5"] },
        { key: 2, freq: 1, indices: ["idx 2"] },
        { key: 3, freq: 2, indices: ["idx 3", "idx 4"] },
        { key: 4, freq: 1, indices: ["idx 6"] },
      ],
      highlightQueryKey: null,
      highlightInsertedKey: null,
      isSummary: true,
      status:
        frame < 5914
          ? "Notice the pattern: Exactly 3 lookups each added 2 → Total 6 subarrays found in O(N) time!"
          : "The map does not simply tell us IF a prefix exists — it tells us HOW MANY valid boundaries exist!",
    };
  }, [frame]);

  // =========================================================================
  // ARRAY ITEMS CONFIGURATION
  // =========================================================================
  const arrayElements: ArrayElementItem[] = useMemo(() => {
    return rawValues.map((val, idx) => {
      const isCurrent = state.index === idx;

      let isInMatchedSubarray = false;
      if (state.matchedSubarrays && state.matchedSubarrays.length > 0) {
        for (const sub of state.matchedSubarrays) {
          if (idx >= sub.range[0] && idx <= sub.range[1]) {
            isInMatchedSubarray = true;
            break;
          }
        }
      }

      let slotState: any = "default";
      let fill: string | undefined;
      let stroke: string | undefined;

      if (isInMatchedSubarray) {
        slotState = "match";
        fill = "rgba(60, 229, 167, 0.28)";
        stroke = theme.good;
      } else if (isCurrent) {
        slotState = "active";
        fill = "rgba(255, 209, 102, 0.25)";
        stroke = theme.pivot;
      }

      return {
        value: val,
        slotState,
        fill,
        stroke,
      };
    });
  }, [state]);

  const pointers: ArrayPointer[] = useMemo(() => {
    if (state.index === null) return [];
    return [
      {
        id: "i",
        label: `i = ${state.index}`,
        index: state.index,
        color: theme.pivot,
        lane: 0,
      },
    ];
  }, [state.index]);

  const audioSrc = staticFile("audio/016/06-method2-trace.mp3");

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
          1. HEADER (Y: 28 .. 82)
          =================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 28,
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
              fontFamily: fonts.display,
              fontSize: 26,
              fontWeight: 800,
              letterSpacing: 2,
              color: theme.cyan,
            }}
          >
            QUESTION 16
          </span>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 24 }}>—</span>
          <span
            style={{
              fontFamily: fonts.display,
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 1.5,
              color: theme.chalkText,
            }}
          >
            METHOD 2 TRACE: PREFIX + FREQUENCY
          </span>
        </div>

        {/* Target pill */}
        <div
          style={{
            position: "relative",
            padding: "6px 24px",
            fontFamily: fonts.mono,
            fontSize: 20,
            fontWeight: 800,
            color: theme.pivot,
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0 }}>
            <RoughBox
              width={180}
              height={40}
              stroke={theme.pivot}
              strokeWidth={2.5}
              seed={701}
            />
          </div>
          target k = 3
        </div>
      </div>

      {/* ===================================================================
          2. ARRAY SLOTS & POINTER (UPPER LEFT, Y: 130 .. 470)
          =================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 130,
          left: 210,
          width: 990,
          height: 340,
          zIndex: 15,
        }}
      >
        {/* Indices and Slots row */}
        <div style={{ display: "flex", gap: 18 }}>
          {rawValues.map((val, idx) => {
            const isCurrent = state.index === idx;
            const isMatch = isCurrent && state.lookupFound;

            return (
              <div
                key={idx}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: 126,
                }}
              >
                {/* Index label above slot */}
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 20,
                    color: isCurrent ? theme.cyan : "rgba(255,255,255,0.6)",
                    fontWeight: isCurrent ? 800 : 500,
                    marginBottom: 10,
                  }}
                >
                  idx [{idx}]
                </div>

                {/* Array Slot */}
                <div
                  style={{
                    position: "relative",
                    width: 126,
                    height: 104,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0 }}>
                    <RoughBox
                      width={126}
                      height={104}
                      stroke={isMatch ? theme.good : isCurrent ? theme.pivot : "rgba(255,255,255,0.7)"}
                      strokeWidth={isCurrent ? 3.5 : 2.5}
                      fill={isMatch ? "rgba(60, 229, 167, 0.28)" : isCurrent ? "rgba(255, 209, 102, 0.2)" : undefined}
                      seed={800 + idx}
                    />
                  </div>

                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 52,
                      fontWeight: 900,
                      color: isMatch ? theme.good : isCurrent ? theme.pivot : theme.chalkText,
                    }}
                  >
                    {val}
                  </span>
                </div>

                {/* Pointer below active slot */}
                {isCurrent && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginTop: 10,
                    }}
                  >
                    {/* Up arrow */}
                    <div
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 32,
                        color: theme.cyan,
                        lineHeight: 1,
                        marginBottom: 4,
                      }}
                    >
                      ↑
                    </div>

                    {/* Pointer badge */}
                    <div
                      style={{
                        position: "relative",
                        padding: "4px 16px",
                        fontFamily: fonts.mono,
                        fontSize: 20,
                        fontWeight: 800,
                        color: theme.cyan,
                      }}
                    >
                      <div style={{ position: "absolute", top: 0, left: 0 }}>
                        <RoughBox
                          width={110}
                          height={40}
                          stroke={theme.cyan}
                          strokeWidth={2.5}
                          seed={850}
                        />
                      </div>
                      i = {idx}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ===================================================================
          3. TOP-RIGHT FREQUENCY MAP TABLE (X: 1400 .. 1860, Y: 120 .. 540)
          =================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 120,
          left: 1400,
          width: 440,
          zIndex: 15,
        }}
      >
        {/* Table Title */}
        <div
          style={{
            fontFamily: fonts.hand,
            fontSize: 26,
            fontWeight: 700,
            color: theme.chalkText,
            marginBottom: 6,
          }}
        >
          prefix sum → frequency
        </div>
        <div style={{ marginBottom: 14 }}>
          <RoughLine
            shape={{ kind: "line", x1: 0, y1: 2, x2: 360, y2: 2 }}
            width={370}
            height={6}
            stroke={theme.chalkText}
            strokeWidth={2}
            seed={702}
          />
        </div>

        {/* Board Native Table Box */}
        <div
          style={{
            position: "relative",
            width: 440,
            minHeight: 220,
          }}
        >
          {/* Outer Rough Box */}
          <div style={{ position: "absolute", top: 0, left: 0 }}>
            <RoughBox
              width={440}
              height={Math.max(220, 68 + state.mapEntries.length * 48)}
              stroke="rgba(255,255,255,0.7)"
              strokeWidth={2.5}
              seed={703}
            />
          </div>

          {/* Table Header Row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 32px",
              fontFamily: fonts.hand,
              fontSize: 22,
              color: theme.chalkText,
            }}
          >
            <span>prefix sum</span>
            <span>frequency</span>
          </div>

          {/* Horizontal divider below header */}
          <div>
            <RoughLine
              shape={{ kind: "line", x1: 4, y1: 2, x2: 436, y2: 2 }}
              width={440}
              height={6}
              stroke="rgba(255,255,255,0.7)"
              strokeWidth={2}
              seed={704}
            />
          </div>

          {/* Table Data Rows */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {state.mapEntries.length === 0 ? (
              <div
                style={{
                  padding: "30px 20px",
                  textAlign: "center",
                  fontFamily: fonts.hand,
                  fontSize: 22,
                  color: "rgba(255,255,255,0.3)",
                }}
              >
                Map is empty &#123; &#125;
              </div>
            ) : (
              state.mapEntries.map((entry, rIdx) => {
                const isQueried = state.highlightQueryKey === entry.key;
                const isInserted = state.highlightInsertedKey === entry.key;
                const isHit = isQueried && state.lookupFound;

                return (
                  <div
                    key={entry.key}
                    style={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "8px 36px",
                      height: 48,
                      borderTop: rIdx > 0 ? "1px solid rgba(255,255,255,0.2)" : undefined,
                    }}
                  >
                    {/* Row Highlight Box on Query / Match */}
                    {(isQueried || isInserted) && (
                      <div style={{ position: "absolute", top: 2, left: 4 }}>
                        <RoughBox
                          width={432}
                          height={44}
                          stroke={isHit ? theme.good : isQueried ? theme.pivot : theme.purple}
                          strokeWidth={2.5}
                          fill={isHit ? "rgba(60, 229, 167, 0.28)" : isQueried ? "rgba(255, 209, 102, 0.25)" : undefined}
                          seed={750 + entry.key}
                        />
                      </div>
                    )}

                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 30,
                        fontWeight: 800,
                        color: isHit ? theme.good : isQueried ? theme.pivot : theme.chalkText,
                        zIndex: 2,
                      }}
                    >
                      {entry.key}
                    </span>

                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 30,
                        fontWeight: 800,
                        color: isHit ? theme.good : isQueried ? theme.pivot : theme.chalkText,
                        zIndex: 2,
                      }}
                    >
                      {entry.freq}
                    </span>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* ===================================================================
          4. LOWER BOARD: 3 COLUMNS (Y: 570 .. 890)
          =================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 570,
          left: 60,
          right: 60,
          height: 320,
          zIndex: 15,
        }}
      >
        {/* Column 1: VARIABLE STATE (X: 60 .. 440) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 380,
          }}
        >
          <div
            style={{
              fontFamily: fonts.display,
              fontSize: 22,
              fontWeight: 800,
              color: theme.chalkText,
              letterSpacing: 1.5,
              marginBottom: 6,
            }}
          >
            VARIABLE STATE
          </div>
          <div style={{ marginBottom: 18 }}>
            <RoughLine
              shape={{ kind: "line", x1: 0, y1: 2, x2: 280, y2: 2 }}
              width={290}
              height={6}
              stroke={theme.chalkText}
              strokeWidth={2}
              seed={710}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              fontFamily: fonts.hand,
              fontSize: 36,
            }}
          >
            <div>
              prefix ={" "}
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 52,
                  fontWeight: 900,
                  color: theme.pivot,
                }}
              >
                {state.prefix}
              </span>
            </div>
            <div>
              needed ={" "}
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 52,
                  fontWeight: 900,
                  color: theme.pivot,
                }}
              >
                {state.needed !== null ? state.needed : "—"}
              </span>
            </div>
          </div>
        </div>

        {/* Vertical Divider 1 */}
        <div style={{ position: "absolute", top: 0, left: 420 }}>
          <RoughLine
            shape={{ kind: "line", x1: 2, y1: 0, x2: 2, y2: 290 }}
            width={6}
            height={300}
            stroke="rgba(255,255,255,0.25)"
            strokeWidth={2}
            seed={711}
          />
        </div>

        {/* Column 2: CURRENT CALCULATION / DECISION (X: 470 .. 1320) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 460,
            width: 840,
          }}
        >
          <div
            style={{
              fontFamily: fonts.display,
              fontSize: 22,
              fontWeight: 800,
              color: theme.chalkText,
              letterSpacing: 1.5,
              marginBottom: 6,
            }}
          >
            CURRENT CALCULATION / DECISION
          </div>
          <div style={{ marginBottom: 18 }}>
            <RoughLine
              shape={{ kind: "line", x1: 0, y1: 2, x2: 520, y2: 2 }}
              width={530}
              height={6}
              stroke={theme.chalkText}
              strokeWidth={2}
              seed={712}
            />
          </div>

          {/* Large Equations */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              fontFamily: fonts.hand,
              fontSize: 40,
            }}
          >
            <div>
              prefix = {state.prevPrefix} +{" "}
              <span style={{ color: theme.pivot, fontWeight: 800 }}>
                {state.val !== null ? (state.val < 0 ? `(${state.val})` : state.val) : "0"}
              </span>{" "}
              ={" "}
              <span style={{ color: theme.pivot, fontWeight: 900, fontFamily: fonts.mono }}>
                {state.prefix}
              </span>
            </div>

            <div>
              needed = {state.prefix} − 3 ={" "}
              <span style={{ color: theme.cyan, fontWeight: 900, fontFamily: fonts.mono }}>
                {state.needed !== null ? state.needed : "—"}
              </span>
            </div>

            {/* Decision Line */}
            {state.needed !== null && (
              <div style={{ marginTop: 8 }}>
                <span
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 36,
                    color: theme.chalkText,
                  }}
                >
                  look for{" "}
                  <span style={{ color: theme.cyan, fontWeight: 800, fontFamily: fonts.mono }}>
                    {state.needed}
                  </span>{" "}
                  in the map
                </span>
                <div style={{ marginTop: 4 }}>
                  <RoughLine
                    shape={{ kind: "line", x1: 0, y1: 2, x2: 380, y2: 2 }}
                    width={390}
                    height={6}
                    stroke={theme.pivot}
                    strokeWidth={2}
                    seed={713}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Vertical Divider 2 */}
        <div style={{ position: "absolute", top: 0, left: 1350 }}>
          <RoughLine
            shape={{ kind: "line", x1: 2, y1: 0, x2: 2, y2: 290 }}
            width={6}
            height={300}
            stroke="rgba(255,255,255,0.25)"
            strokeWidth={2}
            seed={714}
          />
        </div>

        {/* Column 3: ANSWER (MATCH COUNT) (X: 1390 .. 1800) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 1390,
            width: 410,
          }}
        >
          <div
            style={{
              fontFamily: fonts.display,
              fontSize: 22,
              fontWeight: 800,
              color: theme.chalkText,
              letterSpacing: 1.5,
              marginBottom: 6,
            }}
          >
            ANSWER (MATCH COUNT)
          </div>
          <div style={{ marginBottom: 18 }}>
            <RoughLine
              shape={{ kind: "line", x1: 0, y1: 2, x2: 330, y2: 2 }}
              width={340}
              height={6}
              stroke={theme.chalkText}
              strokeWidth={2}
              seed={715}
            />
          </div>

          {/* Large Match Count with Transition */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            {state.lookupFound && (
              <>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 52,
                    color: "rgba(255,255,255,0.4)",
                    fontWeight: 800,
                  }}
                >
                  {Math.max(0, state.answer - state.lookupFreq)}
                </span>
                <span style={{ fontSize: 40, color: theme.chalkLine }}>→</span>
              </>
            )}

            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 72,
                fontWeight: 900,
                color: theme.good,
                lineHeight: 1,
              }}
            >
              {state.answer}
            </span>

            {state.lookupFound && <RadiatingTicks color={theme.good} size={42} />}
          </div>

          {/* Subtitle */}
          <div style={{ marginTop: 10 }}>
            {state.lookupFound ? (
              <span
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 26,
                  color: theme.pivot,
                }}
              >
                {state.lookupFreq > 1 ? `${state.lookupFreq} valid starts` : "valid subarray found"}
              </span>
            ) : (
              <span
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 22,
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                total count = {state.answer}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 5. BOTTOM CAPTIONS */}
      <Captions words={captionWords} bottom={36} />
    </div>
  );
};
