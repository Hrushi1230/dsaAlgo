/**
 * Scene10Recap.tsx — Scene 10 · FINAL RECAP, INVARIANT PATTERN & ROADMAP CONTINUATION
 * Sort Colors (LeetCode 75) · Pattern 01 — Arrays & Hashing
 *
 * Reuses @dsa/kit primitives:
 * - ArrayTrackV2
 * - PointerLaneV2
 * - PartitionBandV2
 * - MasterRoadmapV2
 * - ChalkboardBackground, ChalkFilters
 * - Captions
 *
 * Structure:
 * Act 1 (F0 .. F2354): Dual Approach Architectural Summary
 *   - Sub-phase 1A (F0 .. F731): Approach 1 Counting Sort (3 domain chips, Pass 1 frequencies, Pass 2 in-place rewrite, 2-pass limitation)
 *   - Sub-phase 1B (F731 .. F2354): Approach 2 Dutch National Flag (3 pointers, 4 regions, 3 branch rules, critical unknown caution, champion banner)
 * Act 2 (F2354 .. F3214): Transferable Partition Invariant Strategy
 *   - Heuristic principle: Few categories -> Think invariant partitioning
 *   - 3-Question Framework: Confirmed? Unknown? Boundary guards?
 *   - Anti-pattern vs. Transferable invariant powering Quicksort, QuickSelect, Move Zeroes, 3-Way Partitioning
 * Act 3 (F3214 .. F3642): Authoritative Roadmap Continuation & State Mutation
 *   - MasterRoadmapV2 integration
 *   - Global progress counter rolls 10 -> 11 / 227
 *   - Q011 Sort Colors marked COMPLETED
 *   - Q012 Next Permutation spotlighted as UP NEXT
 */

import React, { useMemo } from "react";
import {
  Audio,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { MasterRoadmapV2 } from "../../../../kit/components/MasterRoadmapV2";
import { ArrayTrackV2, ArrayElementItem } from "../../../../kit/components/array/ArrayTrackV2";
import { ArrayPointer } from "../../../../kit/components/array/PointerLaneV2";
import { ArrayPartition } from "../../../../kit/components/array/PartitionBandV2";
import { theme, fonts } from "../../../../kit/lib/theme";
import syncData from "../sync/10-recap.json";
import anchorsData from "../sync/10-recap.anchors.json";

// Word-level caption timings
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

// Colors for values 0, 1, 2
const toColorItem = (val: number, isHighlighted?: boolean): ArrayElementItem => {
  let stroke = "#60A5FA";
  let fill = "rgba(96, 165, 250, 0.22)";
  if (val === 0) {
    stroke = "#E05252";
    fill = "rgba(224, 82, 82, 0.22)";
  } else if (val === 1) {
    stroke = "rgba(255, 253, 247, 0.85)";
    fill = "rgba(255, 253, 247, 0.12)";
  }

  if (isHighlighted) {
    fill = "rgba(255, 209, 102, 0.35)";
    stroke = "#FFD166";
  }

  return {
    value: val,
    stroke,
    fill,
  };
};

export const Scene10Recap: React.FC = () => {
  const frame = useCurrentFrame();

  // Anchors from 10-recap.anchors.json
  const aRecapIntro = useMemo(() => getAnchor("S10_RECAP_INTRO"), []);
  const aCountingStart = useMemo(() => getAnchor("S10_COUNTING_START"), []);
  const aCountingWhy = useMemo(() => getAnchor("S10_COUNTING_WHY"), []);
  const aCountingHow = useMemo(() => getAnchor("S10_COUNTING_HOW"), []);
  const aCountingComplexity = useMemo(() => getAnchor("S10_COUNTING_COMPLEXITY"), []);
  const aCountingTwoPasses = useMemo(() => getAnchor("S10_COUNTING_TWO_PASSES"), []);
  const aDnfImproved = useMemo(() => getAnchor("S10_DNF_IMPROVED"), []);
  const aDnfPointers = useMemo(() => getAnchor("S10_DNF_POINTERS"), []);
  const aDnfFourRegions = useMemo(() => getAnchor("S10_DNF_FOUR_REGIONS"), []);
  const aRule0 = useMemo(() => getAnchor("S10_RULE_0"), []);
  const aRule1 = useMemo(() => getAnchor("S10_RULE_1"), []);
  const aRule2 = useMemo(() => getAnchor("S10_RULE_2"), []);
  const aRule2Why = useMemo(() => getAnchor("S10_RULE_2_WHY"), []);
  const aDnfOnePass = useMemo(() => getAnchor("S10_DNF_ONE_PASS"), []);
  const aBiggerLesson = useMemo(() => getAnchor("S10_BIGGER_LESSON"), []);
  const aPartitionThink = useMemo(() => getAnchor("S10_PARTITION_THINK"), []);
  const aAskYourself = useMemo(() => getAnchor("S10_ASK_YOURSELF"), []);
  const aNotJustMemorizing = useMemo(() => getAnchor("S10_NOT_JUST_MEMORIZING"), []);
  const aLearningInvariant = useMemo(() => getAnchor("S10_LEARNING_INVARIANT"), []);
  const aSortColorsComplete = useMemo(() => getAnchor("S10_SORT_COLORS_COMPLETE"), []);
  const aRoadmapContinue = useMemo(() => getAnchor("S10_ROADMAP_CONTINUE"), []);

  // Section Boundaries:
  // Act 1: F0 .. F2354 (Dual Approach Summary)
  //   - Sub-phase 1A: F0 .. F731 (Counting Sort)
  //   - Sub-phase 1B: F731 .. F2354 (Dutch National Flag)
  // Act 2: F2354 .. F3214 (Transferable Invariant Strategy)
  // Act 3: F3214 .. F3642 (Master Roadmap Continuation)
  const isAct1 = frame < aBiggerLesson.startFrame;
  const isAct1A = isAct1 && frame < aDnfImproved.startFrame;
  const isAct1B = isAct1 && frame >= aDnfImproved.startFrame;
  const isAct2 = frame >= aBiggerLesson.startFrame && frame < aSortColorsComplete.startFrame;
  const isAct3 = frame >= aSortColorsComplete.startFrame;

  // -------------------------------------------------------------
  // Sub-phase 1A: Counting Sort In-Place Rewrite Simulation
  // Original array: [2, 0, 2, 1, 1, 0, 2, 1, 0, 2] (3 zeros, 3 ones, 4 twos)
  // Sorted array:   [0, 0, 0, 1, 1, 1, 2, 2, 2, 2]
  // -------------------------------------------------------------
  const countingOriginal = useMemo(() => [2, 0, 2, 1, 1, 0, 2, 1, 0, 2], []);
  const countingSorted = useMemo(() => [0, 0, 0, 1, 1, 1, 2, 2, 2, 2], []);

  // Compute dynamic array state for counting rewrite
  const countingArrayElements: ArrayElementItem[] = useMemo(() => {
    if (frame < aCountingHow.startFrame + 40) {
      return countingOriginal.map((v) => toColorItem(v));
    }
    // Between F410 and F480, overwrite slots sequentially from index 0 to 9
    const rewrittenCount = Math.min(
      10,
      Math.max(
        0,
        Math.floor(
          interpolate(frame, [aCountingHow.startFrame + 40, aCountingHow.endFrame], [0, 10], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })
        )
      )
    );

    return countingOriginal.map((origVal, idx) => {
      const isRewritten = idx < rewrittenCount;
      const isCurrentlyWriting = idx === rewrittenCount - 1;
      const val = isRewritten ? countingSorted[idx] : origVal;
      return toColorItem(val, isCurrentlyWriting);
    });
  }, [frame, aCountingHow, countingOriginal, countingSorted]);

  // -------------------------------------------------------------
  // Sub-phase 1B: Dutch National Flag Visual State
  // -------------------------------------------------------------
  const dnfArray = useMemo(() => [2, 1, 2, 0, 2, 1, 0, 1, 0, 2], []);
  const dnfElements: ArrayElementItem[] = useMemo(() => {
    return dnfArray.map((v) => toColorItem(v));
  }, [dnfArray]);

  // DNF Pointers (low, mid, high)
  const dnfPointers: ArrayPointer[] = useMemo(() => {
    if (!isAct1B || frame < aDnfPointers.startFrame + 30) return [];
    const list: ArrayPointer[] = [];

    // low drops at F935
    if (frame >= aDnfPointers.startFrame + 50) {
      list.push({
        id: "ptr-low",
        label: "low",
        index: 0,
        lane: 0,
        color: "#EF4444",
      });
    }

    // mid drops at F958 (lane 1 to stagger above low at index 0)
    if (frame >= aDnfPointers.startFrame + 73) {
      list.push({
        id: "ptr-mid",
        label: "mid",
        index: 0,
        lane: 1,
        color: "#F59E0B",
      });
    }

    // high drops at F988
    if (frame >= aDnfPointers.startFrame + 103) {
      list.push({
        id: "ptr-high",
        label: "high",
        index: 9,
        lane: 0,
        color: "#60A5FA",
      });
    }

    return list;
  }, [isAct1B, frame, aDnfPointers]);

  // DNF Partitions (0s, 1s, UNKNOWN, 2s)
  const dnfPartitions: ArrayPartition[] = useMemo(() => {
    if (!isAct1B || frame < aDnfFourRegions.startFrame + 30) return [];
    const parts: ArrayPartition[] = [];

    // Region 1: 0s [0..low-1] (illustrated as [0..0] for visual anchor)
    if (frame >= aDnfFourRegions.startFrame + 70) {
      parts.push({
        id: "part-0",
        startIndex: 0,
        endIndex: 0,
        label: "0s (RED)",
        color: "#EF4444",
        variant: "bracket",
      });
    }

    // Region 2: 1s [low..mid-1] (illustrated as [1..2])
    if (frame >= aDnfFourRegions.startFrame + 115) {
      parts.push({
        id: "part-1",
        startIndex: 1,
        endIndex: 2,
        label: "1s (WHITE)",
        color: "rgba(255, 253, 247, 0.9)",
        variant: "bracket",
      });
    }

    // Region 3: UNKNOWN [mid..high] (illustrated as [3..7])
    if (frame >= aDnfFourRegions.startFrame + 155) {
      parts.push({
        id: "part-unk",
        startIndex: 3,
        endIndex: 7,
        label: "UNKNOWN [mid..high]",
        color: frame >= aRule2Why.startFrame && frame < aDnfOnePass.startFrame ? "#FFD166" : "#F59E0B",
        variant: "bracket",
      });
    }

    // Region 4: 2s [high+1..n-1] (illustrated as [8..9])
    if (frame >= aDnfFourRegions.startFrame + 205) {
      parts.push({
        id: "part-2",
        startIndex: 8,
        endIndex: 9,
        label: "2s (BLUE)",
        color: "#60A5FA",
        variant: "bracket",
      });
    }

    return parts;
  }, [isAct1B, frame, aDnfFourRegions, aRule2Why, aDnfOnePass]);

  // -------------------------------------------------------------
  // Act 3: Master Roadmap State Mutation
  // Global counter 10 -> 11 at F3330..F3365 on "Question 11, done."
  // Row 011 -> COMPLETED
  // Row 012 -> UP NEXT at F3565 on "Next permutation."
  // -------------------------------------------------------------
  const isQuestion11Done = frame >= 3330;
  const isRow012UpNext = frame >= 3565;

  const completedCount = useMemo(() => {
    if (!isAct3) return 10;
    if (frame < 3330) return 10;
    return Math.min(
      11,
      Math.round(
        interpolate(frame, [3330, 3365], [10, 11], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      )
    );
  }, [isAct3, frame]);

  const completedGlobalNums = useMemo(() => {
    if (!isQuestion11Done) {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  }, [isQuestion11Done]);

  const activeGlobalNum = isRow012UpNext ? 12 : 11;
  const spotlightRow = isRow012UpNext ? 12 : 11;
  const activeBadgeLabel = isRow012UpNext
    ? "UP NEXT"
    : isQuestion11Done
    ? "COMPLETED"
    : "NOW ACTIVE";

  // Roadmap entrance fade
  const roadmapOpacity = isAct3
    ? interpolate(frame, [aSortColorsComplete.startFrame, aSortColorsComplete.startFrame + 30], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : 0;

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#103426",
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      {/* Synchronized Voiceover Audio */}
      <Audio src={staticFile("audio/011/10-recap.mp3")} />

      {/* ============================================================ */}
      {/* 1. TOP HEADER (ACTS 1 & 2 ONLY - ACT 3 USES ROADMAP HEADER)  */}
      {/* ============================================================ */}
      {!isAct3 && (
        <div
          style={{
            position: "absolute",
            top: 26,
            left: 80,
            right: 80,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 20,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                padding: "6px 14px",
                borderRadius: 6,
                background: "rgba(0,0,0,0.45)",
                border: "1.5px solid rgba(255,253,247,0.4)",
                fontFamily: "var(--font-mono, monospace)",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#FFFDF7",
              }}
            >
              QUESTION 011 · SORT COLORS
            </div>
            <div
              style={{
                padding: "6px 14px",
                borderRadius: 6,
                background: isAct2
                  ? "rgba(110, 231, 183, 0.18)"
                  : "rgba(255, 209, 102, 0.18)",
                border: `2px solid ${isAct2 ? "#6EE7B7" : "#FFD166"}`,
                fontFamily: "var(--font-mono, monospace)",
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: "0.08em",
                color: isAct2 ? "#6EE7B7" : "#FFD166",
              }}
            >
              {isAct1
                ? "PART 1 · DUAL APPROACH SUMMARY"
                : "PART 2 · THE PARTITION INVARIANT STRATEGY"}
            </div>
          </div>

          <div
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: 13,
              fontWeight: 800,
              color: isAct2 ? "#6EE7B7" : "#FFD166",
              letterSpacing: "0.08em",
            }}
          >
            ARRAYS & HASHING · MEDIUM
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 2. ACT 1 · SUB-PHASE 1A: APPROACH 1 (COUNTING SORT)          */}
      {/* ============================================================ */}
      {isAct1A && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: frame > aCountingTwoPasses.endFrame - 15
              ? interpolate(frame, [aCountingTwoPasses.endFrame - 15, aCountingTwoPasses.endFrameExclusive], [1, 0], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                })
              : 1,
            zIndex: 10,
          }}
        >
          {/* Introductory chalk hero (F0 .. F82) */}
          {frame < aCountingStart.startFrame && (
            <div
              style={{
                position: "absolute",
                top: 260,
                left: 0,
                right: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: interpolate(frame, [0, 30], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
              }}
            >
              <div
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 64,
                  fontWeight: 900,
                  color: "#FFFDF7",
                  textAlign: "center",
                  letterSpacing: "1px",
                  marginBottom: 16,
                  textShadow: "0 4px 20px rgba(0,0,0,0.6)",
                }}
              >
                Sort Colors: Dual Approach Synthesis
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: 20,
                  color: "#6EE7B7",
                  letterSpacing: "0.06em",
                }}
              >
                From 2-Pass Counting Sort to 1-Pass Dutch National Flag
              </div>
            </div>
          )}

          {/* Approach 1 Section Header */}
          {frame >= aCountingStart.startFrame && (
            <div
              style={{
                position: "absolute",
                top: 96,
                left: 120,
                right: 120,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: interpolate(frame, [aCountingStart.startFrame, aCountingStart.startFrame + 20], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: 24,
                  fontWeight: 900,
                  color: "#FFD166",
                  letterSpacing: "0.08em",
                  marginBottom: 6,
                }}
              >
                APPROACH 1 · TWO-PASS COUNTING SORT
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: 14,
                  color: "rgba(255, 253, 247, 0.75)",
                }}
              >
                PASS 1: COUNT OCCURRENCES → PASS 2: SEQUENTIAL IN-PLACE OVERWRITE
              </div>
            </div>
          )}

          {/* Domain Chips: K = 3 values (F130 .. F337) */}
          {frame >= aCountingWhy.startFrame && (
            <div
              style={{
                position: "absolute",
                top: 175,
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 20,
                opacity: interpolate(frame, [aCountingWhy.startFrame, aCountingWhy.startFrame + 20], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "rgba(255, 253, 247, 0.8)",
                  padding: "4px 10px",
                  borderRadius: 4,
                  background: "rgba(0,0,0,0.3)",
                }}
              >
                RESTRICTED DOMAIN (K = 3):
              </div>
              <div
                style={{
                  padding: "6px 18px",
                  borderRadius: 8,
                  background: "rgba(224, 82, 82, 0.2)",
                  border: "2px solid #E05252",
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: 15,
                  fontWeight: 800,
                  color: "#FF8080",
                  opacity: frame >= aCountingWhy.startFrame + 10 ? 1 : 0,
                }}
              >
                0 · RED
              </div>
              <div
                style={{
                  padding: "6px 18px",
                  borderRadius: 8,
                  background: "rgba(255, 253, 247, 0.15)",
                  border: "2px solid rgba(255, 253, 247, 0.8)",
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: 15,
                  fontWeight: 800,
                  color: "#FFFDF7",
                  opacity: frame >= aCountingWhy.startFrame + 70 ? 1 : 0,
                }}
              >
                1 · WHITE
              </div>
              <div
                style={{
                  padding: "6px 18px",
                  borderRadius: 8,
                  background: "rgba(96, 165, 250, 0.2)",
                  border: "2px solid #60A5FA",
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: 15,
                  fontWeight: 800,
                  color: "#93C5FD",
                  opacity: frame >= aCountingWhy.startFrame + 130 ? 1 : 0,
                }}
              >
                2 · BLUE
              </div>
            </div>
          )}

          {/* Pass 1 Frequency Counters (F337 .. F505) */}
          {frame >= aCountingHow.startFrame && (
            <div
              style={{
                position: "absolute",
                top: 245,
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "center",
                gap: 28,
                opacity: interpolate(frame, [aCountingHow.startFrame, aCountingHow.startFrame + 20], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 20px",
                  borderRadius: 8,
                  background: "rgba(0,0,0,0.35)",
                  border: "1.5px solid #E05252",
                }}
              >
                <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 13, color: "rgba(255,253,247,0.7)" }}>
                  count[0]:
                </span>
                <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 20, fontWeight: 900, color: "#FF8080" }}>
                  3
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 20px",
                  borderRadius: 8,
                  background: "rgba(0,0,0,0.35)",
                  border: "1.5px solid rgba(255,253,247,0.7)",
                }}
              >
                <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 13, color: "rgba(255,253,247,0.7)" }}>
                  count[1]:
                </span>
                <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 20, fontWeight: 900, color: "#FFFDF7" }}>
                  3
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 20px",
                  borderRadius: 8,
                  background: "rgba(0,0,0,0.35)",
                  border: "1.5px solid #60A5FA",
                }}
              >
                <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 13, color: "rgba(255,253,247,0.7)" }}>
                  count[2]:
                </span>
                <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 20, fontWeight: 900, color: "#93C5FD" }}>
                  4
                </span>
              </div>
            </div>
          )}

          {/* Pass 2 Array In-Place Rewrite visual with ArrayTrackV2 */}
          {frame >= aCountingHow.startFrame && (
            <div
              style={{
                position: "absolute",
                top: 340,
                left: 0,
                right: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#FFD166",
                  marginBottom: 14,
                  letterSpacing: "0.06em",
                }}
              >
                PASS 2 · IN-PLACE ARRAY REWRITE (REWRITING SLOTS 0..9)
              </div>
              <ArrayTrackV2
                elements={countingArrayElements}
                slotWidth={84}
                slotHeight={76}
                gap={14}
                showIndices={true}
                indexPlacement="top"
                indexFormat="[i]"
              />
            </div>
          )}

          {/* Counting Sort Complexity Strip (F505 .. F667) */}
          {frame >= aCountingComplexity.startFrame && (
            <div
              style={{
                position: "absolute",
                top: 510,
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "center",
                gap: 36,
                opacity: interpolate(frame, [aCountingComplexity.startFrame, aCountingComplexity.startFrame + 25], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
              }}
            >
              <div
                style={{
                  padding: "10px 24px",
                  borderRadius: 8,
                  background: "rgba(16, 185, 129, 0.15)",
                  border: "2px solid #10B981",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 14, color: "#FFFDF7" }}>TIME COMPLEXITY:</span>
                <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 20, fontWeight: 900, color: "#6EE7B7" }}>O(N)</span>
              </div>

              <div
                style={{
                  padding: "10px 24px",
                  borderRadius: 8,
                  background: "rgba(16, 185, 129, 0.15)",
                  border: "2px solid #10B981",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 14, color: "#FFFDF7" }}>EXTRA SPACE:</span>
                <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 20, fontWeight: 900, color: "#6EE7B7" }}>O(1)</span>
              </div>
            </div>
          )}

          {/* 2-Pass Limitation Alert (F667 .. F731) */}
          {frame >= aCountingTwoPasses.startFrame && (
            <div
              style={{
                position: "absolute",
                top: 595,
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "center",
                opacity: interpolate(frame, [aCountingTwoPasses.startFrame, aCountingTwoPasses.startFrame + 20], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
              }}
            >
              <div
                style={{
                  padding: "12px 28px",
                  borderRadius: 10,
                  background: "rgba(245, 158, 11, 0.16)",
                  border: "2px solid #F59E0B",
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: 14,
                  fontWeight: 800,
                  color: "#FDE68A",
                  letterSpacing: "0.06em",
                  boxShadow: "0 4px 20px rgba(245, 158, 11, 0.2)",
                }}
              >
                ⚠️ LIMITATION: REQUIRES 2 FULL PASSES (Pass 1 counts frequencies · Pass 2 rewrites array)
              </div>
            </div>
          )}
        </div>
      )}

      {/* ============================================================ */}
      {/* 3. ACT 1 · SUB-PHASE 1B: APPROACH 2 (DUTCH NATIONAL FLAG)    */}
      {/* ============================================================ */}
      {isAct1B && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: frame > aDnfOnePass.endFrame - 15
              ? interpolate(frame, [aDnfOnePass.endFrame - 15, aDnfOnePass.endFrameExclusive], [1, 0], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                })
              : interpolate(frame, [aDnfImproved.startFrame, aDnfImproved.startFrame + 25], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
            zIndex: 10,
          }}
        >
          {/* Approach 2 Section Header */}
          <div
            style={{
              position: "absolute",
              top: 80,
              left: 120,
              right: 120,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: 24,
                fontWeight: 900,
                color: "#6EE7B7",
                letterSpacing: "0.08em",
                marginBottom: 6,
              }}
            >
              APPROACH 2 · DUTCH NATIONAL FLAG (ONE-PASS OPTIMAL)
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: 14,
                color: "rgba(255, 253, 247, 0.75)",
              }}
            >
              3 POINTERS · 4 DYNAMIC PARTITIONS · INVARIANT-MAINTAINED BOUNDARIES
            </div>
          </div>

          {/* ArrayTrackV2 with Top Pointers & Bottom Partition Bands */}
          <div
            style={{
              position: "absolute",
              top: 140,
              left: 0,
              right: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ArrayTrackV2
              elements={dnfElements}
              slotWidth={84}
              slotHeight={76}
              gap={14}
              showIndices={false}
              pointers={dnfPointers}
              pointerPlacement="top"
              partitions={dnfPartitions}
            />
          </div>

          {/* Three Branch Rule Cards (Y: 460) */}
          <div
            style={{
              position: "absolute",
              top: 460,
              left: 140,
              right: 140,
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 24,
            }}
          >
            {/* Rule 0 Card */}
            <div
              style={{
                padding: "16px 20px",
                borderRadius: 10,
                background: "rgba(12, 22, 18, 0.85)",
                border: "2px solid #E05252",
                boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                opacity: frame >= aRule0.startFrame
                  ? interpolate(frame, [aRule0.startFrame, aRule0.startFrame + 20], [0, 1], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                    })
                  : 0,
              }}
            >
              <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 16, fontWeight: 900, color: "#FF8080", marginBottom: 8 }}>
                RULE 0: nums[mid] == 0
              </div>
              <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 13, color: "#FFFDF7", lineHeight: 1.4, marginBottom: 8 }}>
                swap(nums[low], nums[mid])
              </div>
              <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 12, color: "#6EE7B7" }}>
                low++, mid++ (0 confirmed in red zone)
              </div>
            </div>

            {/* Rule 1 Card */}
            <div
              style={{
                padding: "16px 20px",
                borderRadius: 10,
                background: "rgba(12, 22, 18, 0.85)",
                border: "2px solid rgba(255, 253, 247, 0.7)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                opacity: frame >= aRule1.startFrame
                  ? interpolate(frame, [aRule1.startFrame, aRule1.startFrame + 20], [0, 1], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                    })
                  : 0,
              }}
            >
              <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 16, fontWeight: 900, color: "#FFFDF7", marginBottom: 8 }}>
                RULE 1: nums[mid] == 1
              </div>
              <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 13, color: "#FFFDF7", lineHeight: 1.4, marginBottom: 8 }}>
                ZERO SWAPS NEEDED
              </div>
              <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 12, color: "#6EE7B7" }}>
                mid++ (1 already belongs in middle)
              </div>
            </div>

            {/* Rule 2 Card */}
            <div
              style={{
                padding: "16px 20px",
                borderRadius: 10,
                background: "rgba(12, 22, 18, 0.85)",
                border: "2px solid #60A5FA",
                boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                opacity: frame >= aRule2.startFrame
                  ? interpolate(frame, [aRule2.startFrame, aRule2.startFrame + 20], [0, 1], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                    })
                  : 0,
              }}
            >
              <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 16, fontWeight: 900, color: "#93C5FD", marginBottom: 8 }}>
                RULE 2: nums[mid] == 2
              </div>
              <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 13, color: "#FFFDF7", lineHeight: 1.4, marginBottom: 8 }}>
                swap(nums[mid], nums[high])
              </div>
              <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 12, color: "#FFD166", fontWeight: 700 }}>
                high--, MID STAYS! 🔒
              </div>
            </div>
          </div>

          {/* Rule 2 Caution Callout: Unknown Origin (F1914 .. F2104) */}
          {frame >= aRule2Why.startFrame && frame < aDnfOnePass.startFrame && (
            <div
              style={{
                position: "absolute",
                top: 610,
                left: 140,
                right: 140,
                display: "flex",
                justifyContent: "center",
                opacity: interpolate(frame, [aRule2Why.startFrame, aRule2Why.startFrame + 20], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
              }}
            >
              <div
                style={{
                  padding: "12px 28px",
                  borderRadius: 10,
                  background: "rgba(255, 209, 102, 0.16)",
                  border: "2px solid #FFD166",
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: 14,
                  fontWeight: 800,
                  color: "#FFE29A",
                  letterSpacing: "0.04em",
                  textAlign: "center",
                }}
              >
                ⚠️ CRITICAL INVARIANT: The element swapped from high came from UNKNOWN region — mid must inspect it before moving!
              </div>
            </div>
          )}

          {/* DNF Champion Banner (F2104 .. F2354) */}
          {frame >= aDnfOnePass.startFrame && (
            <div
              style={{
                position: "absolute",
                top: 610,
                left: 140,
                right: 140,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: interpolate(frame, [aDnfOnePass.startFrame, aDnfOnePass.startFrame + 25], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 32,
                  padding: "14px 36px",
                  borderRadius: 12,
                  background: "rgba(16, 185, 129, 0.18)",
                  border: "2.5px solid #10B981",
                  boxShadow: "0 8px 32px rgba(16, 185, 129, 0.25)",
                }}
              >
                <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 16, color: "#FFFDF7" }}>
                  TIME: <strong style={{ color: "#6EE7B7", fontSize: 20 }}>O(N)</strong>
                </div>
                <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 16, color: "#FFFDF7" }}>
                  SPACE: <strong style={{ color: "#6EE7B7", fontSize: 20 }}>O(1)</strong>
                </div>
                <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 16, color: "#FFFDF7" }}>
                  PASSES: <strong style={{ color: "#FFD166", fontSize: 20 }}>1 SINGLE PASS</strong>
                </div>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#6EE7B7",
                  marginTop: 10,
                  letterSpacing: "0.08em",
                }}
              >
                OPTIMAL IN-PLACE PARTITIONING · ZERO WASTED COMPARISONS
              </div>
            </div>
          )}
        </div>
      )}

      {/* ============================================================ */}
      {/* 4. ACT 2: TRANSFERABLE PARTITION INVARIANT STRATEGY           */}
      {/* ============================================================ */}
      {isAct2 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: frame > aSortColorsComplete.startFrame - 15
              ? interpolate(frame, [aSortColorsComplete.startFrame - 15, aSortColorsComplete.startFrame], [1, 0], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                })
              : interpolate(frame, [aBiggerLesson.startFrame, aBiggerLesson.startFrame + 25], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
            zIndex: 10,
          }}
        >
          {/* Act 2 Title */}
          <div
            style={{
              position: "absolute",
              top: 96,
              left: 120,
              right: 120,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: 24,
                fontWeight: 900,
                color: "#6EE7B7",
                letterSpacing: "0.08em",
                marginBottom: 6,
              }}
            >
              THE BIGGER LESSON · INVARIANT-BASED PARTITIONING
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: 14,
                color: "rgba(255, 253, 247, 0.75)",
              }}
            >
              A UNIVERSAL MENTAL MODEL ACROSS ALGORITHMIC INTERVIEWS
            </div>
          </div>

          {/* Heuristic Principle Banner (F2453 .. F2645) */}
          <div
            style={{
              position: "absolute",
              top: 175,
              left: 120,
              right: 120,
              display: "flex",
              justifyContent: "center",
              opacity: frame >= aPartitionThink.startFrame
                ? interpolate(frame, [aPartitionThink.startFrame, aPartitionThink.startFrame + 20], [0, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  })
                : 0,
            }}
          >
            <div
              style={{
                padding: "12px 32px",
                borderRadius: 10,
                background: "rgba(255, 209, 102, 0.15)",
                border: "2px solid #FFD166",
                fontFamily: "var(--font-mono, monospace)",
                fontSize: 16,
                fontWeight: 900,
                color: "#FFE29A",
                letterSpacing: "0.08em",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              WHEN DATA HAS K FEW DISTINCT CATEGORIES → THINK INVARIANT PARTITIONING
            </div>
          </div>

          {/* Three Invariant Question Panels (F2645 .. F2912) */}
          <div
            style={{
              position: "absolute",
              top: 265,
              left: 100,
              right: 100,
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 28,
            }}
          >
            {/* Question 1: What is Confirmed? */}
            <div
              style={{
                padding: "24px 24px",
                borderRadius: 12,
                background: "rgba(12, 22, 18, 0.88)",
                border: "2.5px solid #10B981",
                boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
                opacity: frame >= aAskYourself.startFrame + 10
                  ? interpolate(frame, [aAskYourself.startFrame + 10, aAskYourself.startFrame + 35], [0, 1], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                    })
                  : 0,
              }}
            >
              <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 13, fontWeight: 700, color: "#6EE7B7", marginBottom: 6 }}>
                QUESTION 1
              </div>
              <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 18, fontWeight: 900, color: "#FFFDF7", marginBottom: 12 }}>
                WHAT IS CONFIRMED?
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 13, color: "rgba(255,253,247,0.85)", lineHeight: 1.4 }}>
                  • Sorted regions that have already been settled and locked
                </div>
                <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 13, color: "rgba(255,253,247,0.85)", lineHeight: 1.4 }}>
                  • Confirmed zones strictly never regress during iteration
                </div>
              </div>
            </div>

            {/* Question 2: What is Unknown? */}
            <div
              style={{
                padding: "24px 24px",
                borderRadius: 12,
                background: "rgba(12, 22, 18, 0.88)",
                border: "2.5px solid #F59E0B",
                boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
                opacity: frame >= aAskYourself.startFrame + 80
                  ? interpolate(frame, [aAskYourself.startFrame + 80, aAskYourself.startFrame + 105], [0, 1], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                    })
                  : 0,
              }}
            >
              <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 13, fontWeight: 700, color: "#FDE68A", marginBottom: 6 }}>
                QUESTION 2
              </div>
              <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 18, fontWeight: 900, color: "#FFFDF7", marginBottom: 12 }}>
                WHAT IS UNKNOWN?
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 13, color: "rgba(255,253,247,0.85)", lineHeight: 1.4 }}>
                  • The active interval [mid .. high] holding unprocessed items
                </div>
                <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 13, color: "rgba(255,253,247,0.85)", lineHeight: 1.4 }}>
                  • Every algorithmic step must strictly shrink this unknown zone
                </div>
              </div>
            </div>

            {/* Question 3: Which Pointers Guard? */}
            <div
              style={{
                padding: "24px 24px",
                borderRadius: 12,
                background: "rgba(12, 22, 18, 0.88)",
                border: "2.5px solid #38BDF8",
                boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
                opacity: frame >= aAskYourself.startFrame + 150
                  ? interpolate(frame, [aAskYourself.startFrame + 150, aAskYourself.startFrame + 175], [0, 1], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                    })
                  : 0,
              }}
            >
              <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 13, fontWeight: 700, color: "#BAE6FD", marginBottom: 6 }}>
                QUESTION 3
              </div>
              <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 18, fontWeight: 900, color: "#FFFDF7", marginBottom: 12 }}>
                WHICH POINTERS GUARD?
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 13, color: "rgba(255,253,247,0.85)", lineHeight: 1.4 }}>
                  • Pointers mark exact fences separating adjacent regions
                </div>
                <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 13, color: "rgba(255,253,247,0.85)", lineHeight: 1.4 }}>
                  • Invariant remains true before and after each loop iteration
                </div>
              </div>
            </div>
          </div>

          {/* Anti-pattern vs. Transferable Mastery Strip (F2912 .. F3214) */}
          <div
            style={{
              position: "absolute",
              top: 525,
              left: 100,
              right: 100,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {frame < aLearningInvariant.startFrame && frame >= aNotJustMemorizing.startFrame && (
              <div
                style={{
                  padding: "12px 32px",
                  borderRadius: 10,
                  background: "rgba(239, 68, 68, 0.16)",
                  border: "2px solid #EF4444",
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: 15,
                  fontWeight: 800,
                  color: "#FCA5A5",
                  letterSpacing: "0.06em",
                  opacity: interpolate(frame, [aNotJustMemorizing.startFrame, aNotJustMemorizing.startFrame + 20], [0, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  }),
                }}
              >
                ❌ AVOID: Memorizing ad-hoc pointer recipes and arbitrary swaps
              </div>
            )}

            {frame >= aLearningInvariant.startFrame && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  opacity: interpolate(frame, [aLearningInvariant.startFrame, aLearningInvariant.startFrame + 25], [0, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  }),
                }}
              >
                <div
                  style={{
                    padding: "10px 28px",
                    borderRadius: 8,
                    background: "rgba(255, 209, 102, 0.15)",
                    border: "2px solid #FFD166",
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: 15,
                    fontWeight: 900,
                    color: "#FFE29A",
                    letterSpacing: "0.08em",
                    marginBottom: 14,
                  }}
                >
                  ✅ MASTER: ONE INVARIANT FOUNDATION POWERS ADVANCED ALGORITHMS
                </div>

                <div style={{ display: "flex", gap: 16 }}>
                  <div
                    style={{
                      padding: "8px 18px",
                      borderRadius: 6,
                      background: "rgba(16, 185, 129, 0.2)",
                      border: "1.5px solid #10B981",
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: 13,
                      fontWeight: 800,
                      color: "#6EE7B7",
                    }}
                  >
                    QUICKSORT (Lomuto & Hoare)
                  </div>
                  <div
                    style={{
                      padding: "8px 18px",
                      borderRadius: 6,
                      background: "rgba(16, 185, 129, 0.2)",
                      border: "1.5px solid #10B981",
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: 13,
                      fontWeight: 800,
                      color: "#6EE7B7",
                    }}
                  >
                    QUICKSELECT (Kth Element)
                  </div>
                  <div
                    style={{
                      padding: "8px 18px",
                      borderRadius: 6,
                      background: "rgba(16, 185, 129, 0.2)",
                      border: "1.5px solid #10B981",
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: 13,
                      fontWeight: 800,
                      color: "#6EE7B7",
                    }}
                  >
                    MOVE ZEROES (2-Way Partition)
                  </div>
                  <div
                    style={{
                      padding: "8px 18px",
                      borderRadius: 6,
                      background: "rgba(16, 185, 129, 0.2)",
                      border: "1.5px solid #10B981",
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: 13,
                      fontWeight: 800,
                      color: "#6EE7B7",
                    }}
                  >
                    DUTCH FLAG (3-Way Partition)
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 5. ACT 3: MASTER ROADMAP MUTATION & CONTINUATION             */}
      {/* ============================================================ */}
      {isAct3 && (
        <MasterRoadmapV2
          completedCount={completedCount}
          completedGlobalNums={completedGlobalNums}
          activeGlobalNum={activeGlobalNum}
          upNextGlobalNum={12}
          activePatternId={1}
          spotlightRow={spotlightRow}
          activeBadgeLabel={activeBadgeLabel}
          opacity={roadmapOpacity}
        />
      )}

      {/* ============================================================ */}
      {/* 6. BOTTOM CAPTIONS (ALWAYS ON TOP, CLEARS ALL STAGE ELEMENTS) */}
      {/* ============================================================ */}
      <Captions words={captionWords} />
    </div>
  );
};
