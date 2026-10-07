/**
 * Scene05WhyCounting.tsx — Scene 05 · WHY COUNTING IS NOT THE FINAL APPROACH
 * Sort Colors (LeetCode 75) · Pattern 01 — Arrays & Hashing
 *
 * PEDAGOGICAL DERIVATION CHOREOGRAPHY:
 * - Phase 1 (F0..F305): Validate Approach 1 (O(N) Time ✓, O(1) Space ✓, "So what is missing?")
 * - Phase 2 (F305..F478): LeetCode Follow-up challenge reveals ("ONLY ONE PASS?") -> 2-Pass Mismatch
 * - Phase 3 (F478..F1022): Dual-Pass Audit: Array is still unarranged after Pass 1!
 * - Phase 4 (F1022..F1395): Root Cause Diagnosis: NOT Time Complexity -> Decoupled Architecture
 * - Phase 5 (F1395..F2173): Reasoning Mode: Centered Raw Array -> 3-Way Directional Placement (0s Left, 1s Middle, 2s Right)
 * - Phase 6 (F2173..F2287): Gateway Handoff: The Three-Pointer Algorithm (Dutch National Flag)
 *
 * ALL KIT COMPONENTS: RoughBox, RoughCurve, ArrayTrackV2, ChalkboardBackground, ChalkFilters
 * ZERO GUESSING: 28 semantic anchors, 2,287 frames @ 30 FPS.
 * FULL COMPLIANCE: Morphing Bible V2, Motion Bible V2, Center-Stage Spacing, No Card-Array Overlaps.
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
  ArrayPartition,
  SemanticSlotState,
  RoughBox,
  RoughCurve,
} from "../../../../kit/components";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import syncData from "../sync/05-why-counting.json";
import anchorsData from "../sync/05-why-counting.anchors.json";

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

// Geometry Constants
const CANVAS_WIDTH = 1920;
const CANVAS_HEIGHT = 1080;
const RAW_VALUES = [2, 0, 2, 1, 1, 0, 2, 0, 1, 2];
const SORTED_VALUES = [0, 0, 0, 1, 1, 1, 2, 2, 2, 2];
const ARRAY_TRACK_WIDTH = 1244; // 10 slots * 110 + 9 gaps * 16 = 1244px
const ARRAY_TRACK_LEFT = Math.round((CANVAS_WIDTH - ARRAY_TRACK_WIDTH) / 2); // 338px

export const Scene05WhyCounting: React.FC = () => {
  const frame = useCurrentFrame();

  // Anchors from verified sync
  const aStart = useMemo(() => getAnchor("S05_START"), []);
  const aLinearTime = useMemo(() => getAnchor("S05_LINEAR_TIME"), []);
  const aConstSpace = useMemo(() => getAnchor("S05_CONSTANT_SPACE"), []);
  const aWhatsMissing = useMemo(() => getAnchor("S05_WHATS_MISSING"), []);
  const aFollowUp = useMemo(() => getAnchor("S05_FOLLOWUP_ONE_PASS"), []);
  const aTwoPasses = useMemo(() => getAnchor("S05_NEEDS_TWO_PASSES"), []);
  const aPass1Freq = useMemo(() => getAnchor("S05_PASS1_FREQUENCIES"), []);
  const aHow0 = useMemo(() => getAnchor("S05_HOW_0"), []);
  const aHow1 = useMemo(() => getAnchor("S05_HOW_1"), []);
  const aHow2 = useMemo(() => getAnchor("S05_HOW_2"), []);
  const aNotArranged = useMemo(() => getAnchor("S05_NOT_ARRANGED_YET"), []);
  const aNeedAnother = useMemo(() => getAnchor("S05_NEED_ANOTHER_PASS"), []);
  const aRewrite = useMemo(() => getAnchor("S05_REWRITE_ARRAY"), []);
  const aUsingCounts = useMemo(() => getAnchor("S05_USING_COUNTS"), []);
  const aNotTime = useMemo(() => getAnchor("S05_NOT_TIME_COMPLEXITY"), []);
  const aOnGood = useMemo(() => getAnchor("S05_ON_IS_GOOD"), []);
  const aLimitation = useMemo(() => getAnchor("S05_THE_LIMITATION"), []);
  const aCollectInfo = useMemo(() => getAnchor("S05_FIRST_COLLECT"), []);
  const aLaterPlace = useMemo(() => getAnchor("S05_LATER_PLACE"), []);
  const aThink = useMemo(() => getAnchor("S05_THINK_ABOUT_THIS"), []);
  const aClassifyMoment = useMemo(() => getAnchor("S05_CLASSIFY_MOMENT"), []);
  const aZeroLeft = useMemo(() => getAnchor("S05_ZERO_LEFT"), []);
  const aTwoRight = useMemo(() => getAnchor("S05_TWO_RIGHT"), []);
  const aOneMiddle = useMemo(() => getAnchor("S05_ONE_MIDDLE"), []);
  const aIfCanDo = useMemo(() => getAnchor("S05_IF_WE_CAN_DO_THAT"), []);
  const aNoCountPhase = useMemo(() => getAnchor("S05_NO_COUNTING_PHASE"), []);
  const aNoRewritePhase = useMemo(() => getAnchor("S05_NO_REWRITE_PHASE"), []);
  const aThreePointer = useMemo(() => getAnchor("S05_THREE_POINTER_BEGINS"), []);

  // 1. Scene State Modes
  const isReasoningMode = frame >= aThink.startFrame; // F1395+
  const isRawArray =
    (frame >= aPass1Freq.startFrame && frame < aRewrite.startFrame) ||
    isReasoningMode;

  const currentValues = isRawArray ? RAW_VALUES : SORTED_VALUES;

  // 2. Dynamic Array Track Placement (Spacious, Vertical Center Harmony)
  // Phases 1-4: docked at Y: 130
  // Phase 5 (Reasoning Mode): moves smoothly to Y: 190
  const trackTop = useMemo(() => {
    if (!isReasoningMode) return 130;
    return interpolate(frame, [aThink.startFrame, aThink.startFrame + 25], [130, 190], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
  }, [isReasoningMode, frame, aThink.startFrame]);

  // 3. Dynamic Slot Elements & Highlights (Morphing Bible T0/T1/T5)
  const elements = useMemo(() => {
    return currentValues.map((val, idx) => {
      const isZero = val === 0;
      const isOne = val === 1;
      const isTwo = val === 2;

      let slotState: SemanticSlotState = "neutral";
      let valColor: string = theme.chalkText;

      if (!isReasoningMode) {
        if (!isRawArray) {
          // Phase 1 & Phase 2: Sorted Result
          slotState = "sorted";
          if (isZero) valColor = "#FF7675";
          else if (isOne) valColor = theme.chalkText;
          else valColor = theme.cyan;
        } else {
          // Phase 3: Raw Unarranged Array & Pass 1 Scanning Highlights
          const isScanningZeroes = frame >= aHow0.startFrame && frame < aHow1.startFrame && isZero;
          const isScanningOnes = frame >= aHow1.startFrame && frame < aHow2.startFrame && isOne;
          const isScanningTwos = frame >= aHow2.startFrame && frame < aNotArranged.startFrame && isTwo;
          const isArrayUnarrangedAlert = frame >= aNotArranged.startFrame && frame < aNeedAnother.startFrame;

          if (isScanningZeroes) {
            slotState = "active";
            valColor = "#FF7675";
          } else if (isScanningOnes) {
            slotState = "comparing";
            valColor = theme.chalkText;
          } else if (isScanningTwos) {
            slotState = "sorted";
            valColor = theme.cyan;
          } else if (isArrayUnarrangedAlert) {
            slotState = "active";
            valColor = "#FF7675";
          }
        }
      } else {
        // Phase 5: Reasoning Mode (3-Way Classification Targets)
        const isClassifyLeft = frame >= aZeroLeft.startFrame && isZero;
        const isClassifyRight = frame >= aTwoRight.startFrame && isTwo;
        const isClassifyMiddle = frame >= aOneMiddle.startFrame && isOne;
        const isInspected = frame >= aClassifyMoment.startFrame && frame < aZeroLeft.startFrame && idx === 1;

        if (isClassifyLeft) {
          slotState = "sorted";
          valColor = "#FF7675";
        } else if (isClassifyRight) {
          slotState = "comparing";
          valColor = theme.cyan;
        } else if (isClassifyMiddle) {
          slotState = "active";
          valColor = theme.pivot;
        } else if (isInspected) {
          slotState = "active";
          valColor = theme.pivot;
        }
      }

      return {
        value: val,
        slotState,
        stroke: valColor !== theme.chalkText ? valColor : undefined,
      };
    });
  }, [
    currentValues,
    isReasoningMode,
    isRawArray,
    frame,
    aHow0.startFrame,
    aHow1.startFrame,
    aHow2.startFrame,
    aNotArranged.startFrame,
    aNeedAnother.startFrame,
    aClassifyMoment.startFrame,
    aZeroLeft.startFrame,
    aTwoRight.startFrame,
    aOneMiddle.startFrame,
  ]);

  // Array Pointers
  const pointers = useMemo(() => {
    if (frame >= aThreePointer.startFrame) {
      return [
        { id: "p1", label: "P1 (LEFT)", index: 0, color: "#FF7675" },
        { id: "p2", label: "P2 (MID)", index: 4, color: theme.pivot },
        { id: "p3", label: "P3 (RIGHT)", index: 9, color: theme.cyan },
      ];
    }
    if (isReasoningMode && frame >= aClassifyMoment.startFrame && frame < aZeroLeft.startFrame) {
      return [
        {
          id: "inspect",
          label: "x (INSPECT)",
          index: 1,
          color: theme.pivot,
        },
      ];
    }
    return undefined;
  }, [
    frame,
    aThreePointer.startFrame,
    isReasoningMode,
    aClassifyMoment.startFrame,
    aZeroLeft.startFrame,
  ]);

  // Array Partitions (Clearance above array track)
  const partitions = useMemo<ArrayPartition[] | undefined>(() => {
    if (isReasoningMode && frame >= aZeroLeft.startFrame) {
      const list: ArrayPartition[] = [];
      list.push({
        startIndex: 0,
        endIndex: 2,
        label: "0s -> LEFT",
        color: "#FF7675",
        bracketPlacement: "top",
      });
      if (frame >= aOneMiddle.startFrame) {
        list.push({
          startIndex: 3,
          endIndex: 5,
          label: "1s -> MIDDLE",
          color: theme.chalkText,
          bracketPlacement: "top",
        });
      }
      if (frame >= aTwoRight.startFrame) {
        list.push({
          startIndex: 6,
          endIndex: 9,
          label: "2s -> RIGHT",
          color: theme.cyan,
          bracketPlacement: "top",
        });
      }
      return list;
    }
    if (!isRawArray && frame < aThink.startFrame) {
      return [
        { startIndex: 0, endIndex: 2, label: "0s (3)", color: "#FF7675", bracketPlacement: "top" },
        { startIndex: 3, endIndex: 5, label: "1s (3)", color: theme.chalkText, bracketPlacement: "top" },
        { startIndex: 6, endIndex: 9, label: "2s (4)", color: theme.cyan, bracketPlacement: "top" },
      ];
    }
    return undefined;
  }, [
    isReasoningMode,
    frame,
    aZeroLeft.startFrame,
    aOneMiddle.startFrame,
    aTwoRight.startFrame,
    isRawArray,
    aThink.startFrame,
  ]);

  // Dynamic animated frequency counter tallies
  const count0Val = useMemo(() => {
    if (frame < aHow0.startFrame) return "…";
    const prog = interpolate(frame, [aHow0.startFrame, aHow0.startFrame + 18], [1, 3], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    return Math.floor(prog).toString();
  }, [frame, aHow0.startFrame]);

  const count1Val = useMemo(() => {
    if (frame < aHow1.startFrame) return "…";
    const prog = interpolate(frame, [aHow1.startFrame, aHow1.startFrame + 18], [1, 3], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    return Math.floor(prog).toString();
  }, [frame, aHow1.startFrame]);

  const count2Val = useMemo(() => {
    if (frame < aHow2.startFrame) return "…";
    const prog = interpolate(frame, [aHow2.startFrame, aHow2.startFrame + 22], [1, 4], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    return Math.floor(prog).toString();
  }, [frame, aHow2.startFrame]);

  return (
    <div
      style={{
        width: CANVAS_WIDTH,
        height: CANVAS_HEIGHT,
        position: "relative",
        overflow: "hidden",
        backgroundColor: theme.boardBg,
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      {/* Synchronized Audio */}
      <Audio src={staticFile("audio/011/05-why-counting.mp3")} />

      {/* ============================================================ */}
      {/* 1. PERSISTENT TOP NAVIGATION BAR                             */}
      {/* ============================================================ */}
      <div
        style={{
          position: "absolute",
          top: 36,
          left: 60,
          right: 60,
          height: 38,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* Question Badge */}
          <div style={{ position: "relative", width: 220, height: 38 }}>
            <div style={{ position: "absolute", inset: 0 }}>
              <RoughBox width={220} height={38} stroke="#6EE7B7" seed={51} strokeWidth={1.8} />
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
                color: "#6EE7B7",
              }}
            >
              QUESTION 011 · SORT COLORS
            </div>
          </div>

          {/* Section Badge */}
          <div style={{ position: "relative", width: 340, height: 38 }}>
            <div style={{ position: "absolute", inset: 0 }}>
              <RoughBox
                width={340}
                height={38}
                stroke={frame >= aThreePointer.startFrame ? "#6EE7B7" : theme.pivot}
                seed={52}
                strokeWidth={2}
              />
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
                color: frame >= aThreePointer.startFrame ? "#6EE7B7" : theme.pivot,
              }}
            >
              {frame >= aThreePointer.startFrame
                ? "APPROACH 2 · THREE-POINTER MOTIVATION"
                : "APPROACH 1 AUDIT → THE ONE-PASS CHALLENGE"}
            </div>
          </div>
        </div>

        {/* Complexity Pills strictly revealed on spoken words */}
        <div style={{ display: "flex", gap: 14 }}>
          {frame >= aLinearTime.startFrame && (
            <div style={{ position: "relative", width: 140, height: 36 }}>
              <div style={{ position: "absolute", inset: 0 }}>
                <RoughBox width={140} height={36} stroke="#6EE7B7" seed={53} strokeWidth={1.8} />
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
                  fontSize: 12,
                  fontWeight: 800,
                  color: "#6EE7B7",
                }}
              >
                TIME: O(N) ✓
              </div>
            </div>
          )}

          {frame >= aConstSpace.startFrame && (
            <div style={{ position: "relative", width: 140, height: 36 }}>
              <div style={{ position: "absolute", inset: 0 }}>
                <RoughBox width={140} height={36} stroke="#6EE7B7" seed={54} strokeWidth={1.8} />
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
                  fontSize: 12,
                  fontWeight: 800,
                  color: "#6EE7B7",
                }}
              >
                SPACE: O(1) ✓
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. DYNAMIC ARRAY TRACK HERO (CENTER-STAGE ALIGNED)           */}
      {/* ============================================================ */}
      <div
        style={{
          position: "absolute",
          top: trackTop,
          left: ARRAY_TRACK_LEFT,
          width: ARRAY_TRACK_WIDTH,
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Track Title Callout */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 44, // Generous breathing room above top partition badges
          }}
        >
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 13,
              fontWeight: 800,
              color: isReasoningMode ? theme.pivot : isRawArray ? "#FF7675" : "#6EE7B7",
              letterSpacing: "0.08em",
            }}
          >
            {isReasoningMode
              ? "MASTER INPUT ARRAY · CAN WE CLASSIFY AND PLACE IN A SINGLE PASS?"
              : isRawArray
              ? "INPUT ARRAY · nums [ORIGINAL UNSORTED ORDER]"
              : "SORTED ARRAY RESULT · nums [APPROACH 1 FINAL OUTPUT]"}
          </div>

          {/* Pass 1 Alert Banner */}
          {frame >= aNotArranged.startFrame && frame < aNeedAnother.startFrame && (
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 11,
                fontWeight: 800,
                color: "#FF7675",
                background: "rgba(255, 118, 117, 0.15)",
                border: "1px solid #FF7675",
                padding: "3px 10px",
                borderRadius: 4,
                letterSpacing: "0.05em",
              }}
            >
              ⚠ ARRAY STATUS: REMAINS COMPLETELY UNARRANGED AFTER PASS 1
            </div>
          )}
        </div>

        {/* The Authentic Kit Array Track */}
        <ArrayTrackV2
          elements={elements}
          slotWidth={110}
          slotHeight={100}
          gap={16}
          showIndices={true}
          indexPlacement="bottom"
          indexFormat="idx [i]"
          pointers={pointers}
          partitions={partitions}
        />
      </div>

      {/* ============================================================ */}
      {/* 3. DYNAMIC CENTER CARD STAGE (ZERO OVERLAPS · SPACIOUS)      */}
      {/* ============================================================ */}

      {/* ------------------------------------------------------------ */}
      {/* SUB-STAGE 1 & 2: APPROACH 1 AUDIT & FOLLOW-UP (F0..F478)     */}
      {/* ------------------------------------------------------------ */}
      {!isReasoningMode && frame < aPass1Freq.startFrame && (
        <div
          style={{
            position: "absolute",
            top: 400, // Safe 70px clearance below array indices (Y: 330)
            left: ARRAY_TRACK_LEFT,
            width: ARRAY_TRACK_WIDTH,
            display: "flex",
            flexDirection: "column",
            gap: 24,
            zIndex: 10,
          }}
        >
          {/* 1. Evaluation Card */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 190,
              opacity: frame >= aWhatsMissing.startFrame ? 0.35 : 1,
            }}
          >
            <div style={{ position: "absolute", inset: 0 }}>
              <RoughBox width={ARRAY_TRACK_WIDTH} height={190} stroke={theme.chalkText} seed={111} strokeWidth={2} />
            </div>
            <div
              style={{
                position: "relative",
                zIndex: 2,
                padding: "24px 32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, color: theme.pivot }}>
                  APPROACH 1 · COUNTING SORT STRENGTHS
                </span>
                <span style={{ fontFamily: fonts.mono, fontSize: 12, color: "#6EE7B7" }}>
                  VALID & ASYMPTOTICALLY EFFICIENT ✓
                </span>
              </div>

              <div style={{ display: "flex", gap: 24, marginTop: 12 }}>
                <div
                  style={{
                    flex: 1,
                    padding: "14px 20px",
                    borderRadius: 8,
                    background: "rgba(248, 246, 240, 0.06)",
                    border: "1px solid rgba(248, 246, 240, 0.2)",
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: "#6EE7B7" }}>
                    1. LINEAR TIME: O(N)
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.chalkDim, marginTop: 4 }}>
                    One pass to count frequencies + one pass to rewrite elements. Total operations = 2N ∈ O(N).
                  </div>
                </div>

                <div
                  style={{
                    flex: 1,
                    padding: "14px 20px",
                    borderRadius: 8,
                    background: "rgba(248, 246, 240, 0.06)",
                    border: "1px solid rgba(248, 246, 240, 0.2)",
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: "#6EE7B7" }}>
                    2. CONSTANT EXTRA SPACE: O(1)
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.chalkDim, marginTop: 4 }}>
                    Requires only 3 scalar integer variables (count0, count1, count2). Memory does not scale with N.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. LeetCode Official Follow-up Card */}
          {frame >= aFollowUp.startFrame && (
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 120,
              }}
            >
              <div style={{ position: "absolute", inset: 0 }}>
                <RoughBox width={ARRAY_TRACK_WIDTH} height={120} stroke={theme.pivot} seed={112} strokeWidth={2.5} />
              </div>
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  padding: "18px 32px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 12,
                    fontWeight: 800,
                    color: "rgba(248, 246, 240, 0.6)",
                    letterSpacing: "0.1em",
                  }}
                >
                  LEETCODE 75 OFFICIAL FOLLOW-UP CHALLENGE
                </div>
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 20,
                    fontWeight: 900,
                    color: theme.pivot,
                    letterSpacing: "0.04em",
                    marginTop: 6,
                  }}
                >
                  "COULD YOU SOLVE IT USING ONLY ONE PASS?"
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ------------------------------------------------------------ */}
      {/* SUB-STAGE 3: DUAL-PASS FLAW & ARRAY UNARRANGED (F478..F1022) */}
      {/* ------------------------------------------------------------ */}
      {!isReasoningMode && frame >= aPass1Freq.startFrame && frame < aNotTime.startFrame && (
        <div
          style={{
            position: "absolute",
            top: 390, // Safe 60px clearance below array indices
            left: ARRAY_TRACK_LEFT,
            width: ARRAY_TRACK_WIDTH,
            display: "flex",
            gap: 32, // Bounded exactly to 1244px: 606 + 32 + 606 = 1244
            zIndex: 10,
          }}
        >
          {/* Card 1: Pass 1 Analysis */}
          <div style={{ width: 606, position: "relative", height: 290 }}>
            <div style={{ position: "absolute", inset: 0 }}>
              <RoughBox width={606} height={290} stroke="#FF7675" seed={221} strokeWidth={2} />
            </div>
            <div
              style={{
                position: "relative",
                zIndex: 2,
                padding: "22px 26px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                boxSizing: "border-box",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: "#FF7675" }}>
                    PASS 1: COUNT FREQUENCIES ONLY
                  </span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 11, color: "rgba(248, 246, 240, 0.5)" }}>
                    READ PASS
                  </span>
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.chalkDim, marginTop: 8 }}>
                  Scans all N elements, but only computes frequency totals. Not a single element moves in the array!
                </div>
              </div>

              {/* 3 Frequency Tallies with dynamic animated increments */}
              <div style={{ display: "flex", gap: 12, marginTop: 14 }}>
                <div
                  style={{
                    flex: 1,
                    padding: "10px 14px",
                    borderRadius: 6,
                    background: "rgba(255, 118, 117, 0.15)",
                    border: "1px solid #FF7675",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 11, color: "#FF7675" }}>count0</div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 26, fontWeight: 900, color: theme.chalkText }}>
                    {count0Val}
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 10, color: "rgba(248, 246, 240, 0.5)" }}>ZEROES</div>
                </div>

                <div
                  style={{
                    flex: 1,
                    padding: "10px 14px",
                    borderRadius: 6,
                    background: "rgba(248, 246, 240, 0.1)",
                    border: "1px solid rgba(248, 246, 240, 0.4)",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.chalkText }}>count1</div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 26, fontWeight: 900, color: theme.chalkText }}>
                    {count1Val}
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 10, color: "rgba(248, 246, 240, 0.5)" }}>ONES</div>
                </div>

                <div
                  style={{
                    flex: 1,
                    padding: "10px 14px",
                    borderRadius: 6,
                    background: "rgba(92, 225, 230, 0.15)",
                    border: "1px solid #5CE1E6",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.cyan }}>count2</div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 26, fontWeight: 900, color: theme.chalkText }}>
                    {count2Val}
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 10, color: "rgba(248, 246, 240, 0.5)" }}>TWOS</div>
                </div>
              </div>

              {/* Flaw takeaway */}
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 11,
                  fontWeight: 800,
                  color: "#FF7675",
                  marginTop: 10,
                }}
              >
                ⚠ RESULT: ARRAY IS STILL 100% UNARRANGED!
              </div>
            </div>
          </div>

          {/* Card 2: Pass 2 Rewrite Necessity */}
          <div
            style={{
              width: 606,
              position: "relative",
              height: 290,
              opacity: frame >= aNeedAnother.startFrame ? 1 : 0.4,
            }}
          >
            <div style={{ position: "absolute", inset: 0 }}>
              <RoughBox
                width={606}
                height={290}
                stroke={frame >= aNeedAnother.startFrame ? "#6EE7B7" : theme.chalkText}
                seed={222}
                strokeWidth={2}
              />
            </div>
            <div
              style={{
                position: "relative",
                zIndex: 2,
                padding: "22px 26px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                boxSizing: "border-box",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 14,
                      fontWeight: 800,
                      color: frame >= aNeedAnother.startFrame ? "#6EE7B7" : theme.chalkDim,
                    }}
                  >
                    PASS 2: REWRITE ENTIRE ARRAY
                  </span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 11, color: "rgba(248, 246, 240, 0.5)" }}>
                    WRITE PASS
                  </span>
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.chalkDim, marginTop: 8 }}>
                  Because Pass 1 moved nothing, we are forced to execute a SECOND full sweep over the array to overwrite
                  each slot using the counts.
                </div>
              </div>

              {/* Overwrite sequence callout */}
              <div
                style={{
                  padding: "14px 18px",
                  borderRadius: 6,
                  background: "rgba(110, 231, 183, 0.08)",
                  border: "1px solid rgba(110, 231, 183, 0.3)",
                  marginTop: 14,
                }}
              >
                <div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: "#6EE7B7" }}>
                  SEQUENTIAL IN-PLACE REWRITE:
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.chalkText, marginTop: 4 }}>
                  • Write 0 into slots 0..2 (3 times)
                  <br />
                  • Write 1 into slots 3..5 (3 times)
                  <br />• Write 2 into slots 6..9 (4 times)
                </div>
              </div>

              {/* Bottom takeaway */}
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 11,
                  fontWeight: 800,
                  color: theme.pivot,
                  marginTop: 10,
                }}
              >
                TWO INDEPENDENT PASSES REQUIRED TO COMPLETE THE SORT
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------ */}
      {/* SUB-STAGE 4: ROOT CAUSE DIAGNOSIS (F1022..F1395)             */}
      {/* ------------------------------------------------------------ */}
      {!isReasoningMode && frame >= aNotTime.startFrame && (
        <div
          style={{
            position: "absolute",
            top: 390,
            left: ARRAY_TRACK_LEFT,
            width: ARRAY_TRACK_WIDTH,
            display: "flex",
            flexDirection: "column",
            gap: 20,
            zIndex: 10,
          }}
        >
          {/* Card 1: Clarification - Not Time Complexity */}
          <div style={{ position: "relative", width: "100%", height: 110 }}>
            <div style={{ position: "absolute", inset: 0 }}>
              <RoughBox width={ARRAY_TRACK_WIDTH} height={110} stroke="#6EE7B7" seed={331} strokeWidth={2} />
            </div>
            <div
              style={{
                position: "relative",
                zIndex: 2,
                padding: "16px 28px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100%",
                boxSizing: "border-box",
              }}
            >
              <div>
                <div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, color: "#6EE7B7" }}>
                  TIME COMPLEXITY IS NOT THE BOTTLENECK!
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.chalkDim, marginTop: 4 }}>
                  2 passes of length N means 2N operations. In asymptotic Big-O analysis, O(2N) = O(N).
                </div>
              </div>

              <div
                style={{
                  padding: "8px 16px",
                  borderRadius: 6,
                  background: "rgba(110, 231, 183, 0.15)",
                  border: "1px solid #6EE7B7",
                  fontFamily: fonts.mono,
                  fontSize: 13,
                  fontWeight: 800,
                  color: "#6EE7B7",
                }}
              >
                O(N) IS ALREADY OPTIMAL ✓
              </div>
            </div>
          </div>

          {/* Card 2: True Architectural Limitation */}
          {frame >= aLimitation.startFrame && (
            <div style={{ position: "relative", width: "100%", minHeight: 180 }}>
              <div style={{ position: "absolute", inset: 0 }}>
                <RoughBox width={ARRAY_TRACK_WIDTH} height={180} stroke={theme.pivot} seed={332} strokeWidth={2.5} />
              </div>
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  padding: "22px 32px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  boxSizing: "border-box",
                }}
              >
                <div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, color: theme.pivot }}>
                    THE REAL FLAW: DECOUPLED STAGES
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.chalkDim, marginTop: 6 }}>
                    Counting sort separates the algorithm into two completely decoupled stages:
                  </div>
                </div>

                {/* Staged Flow Visualization */}
                <div style={{ display: "flex", gap: 16, alignItems: "center", margin: "10px 0" }}>
                  <div
                    style={{
                      flex: 1,
                      padding: "10px 16px",
                      borderRadius: 6,
                      background: frame >= aCollectInfo.startFrame ? "rgba(255, 118, 117, 0.15)" : "transparent",
                      border: `1.5px solid ${frame >= aCollectInfo.startFrame ? "#FF7675" : "rgba(248, 246, 240, 0.2)"}`,
                      fontFamily: fonts.mono,
                      fontSize: 12,
                      fontWeight: 800,
                      color: frame >= aCollectInfo.startFrame ? "#FF7675" : theme.chalkDim,
                      textAlign: "center",
                    }}
                  >
                    1. FIRST: COLLECT INFORMATION
                    <div style={{ fontSize: 10, fontWeight: 400, marginTop: 2, color: theme.chalkDim }}>
                      Scan all elements without moving anything
                    </div>
                  </div>

                  <div style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.pivot, fontWeight: 900 }}>
                    ➔
                  </div>

                  <div
                    style={{
                      flex: 1,
                      padding: "10px 16px",
                      borderRadius: 6,
                      background: frame >= aLaterPlace.startFrame ? "rgba(110, 231, 183, 0.15)" : "transparent",
                      border: `1.5px solid ${frame >= aLaterPlace.startFrame ? "#6EE7B7" : "rgba(248, 246, 240, 0.2)"}`,
                      fontFamily: fonts.mono,
                      fontSize: 12,
                      fontWeight: 800,
                      color: frame >= aLaterPlace.startFrame ? "#6EE7B7" : theme.chalkDim,
                      textAlign: "center",
                    }}
                  >
                    2. LATER: PLACE VALUES
                    <div style={{ fontSize: 10, fontWeight: 400, marginTop: 2, color: theme.chalkDim }}>
                      Second sweep overwriting entire array
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 12,
                    fontWeight: 700,
                    color: "rgba(248, 246, 240, 0.7)",
                  }}
                >
                  KEY QUESTION: Why inspect an element without placing it where it belongs?
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ------------------------------------------------------------ */}
      {/* SUB-STAGE 5: REASONING MODE & 3-WAY PARTITION (F1395..F2173) */}
      {/* ------------------------------------------------------------ */}
      {isReasoningMode && frame < aThreePointer.startFrame && (
        <div
          style={{
            position: "absolute",
            top: 480, // Generous 50px clearance below centered array
            left: ARRAY_TRACK_LEFT,
            width: ARRAY_TRACK_WIDTH,
            display: "flex",
            flexDirection: "column",
            gap: 20,
            zIndex: 10,
          }}
        >
          {/* Central Question / Hypothesis Banner */}
          <div style={{ position: "relative", width: "100%", height: 64 }}>
            <div style={{ position: "absolute", inset: 0 }}>
              <RoughBox width={ARRAY_TRACK_WIDTH} height={64} stroke={theme.pivot} seed={441} strokeWidth={2.5} />
            </div>
            <div
              style={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontFamily: fonts.mono,
                fontSize: 16,
                fontWeight: 900,
                color: theme.pivot,
                letterSpacing: "0.06em",
              }}
            >
              CAN WE CLASSIFY EACH VALUE AT THE SAME MOMENT WE INSPECT IT?
            </div>
          </div>

          {/* 3-Way Target Zones (Exact width match: 390 * 3 + 37 * 2 = 1244) */}
          <div style={{ display: "flex", gap: 37, width: "100%" }}>
            {/* Left Zone: 0s */}
            <div
              style={{
                width: 390,
                position: "relative",
                height: 165,
                opacity: frame >= aZeroLeft.startFrame ? 1 : 0.35,
              }}
            >
              <div style={{ position: "absolute", inset: 0 }}>
                <RoughBox width={390} height={165} stroke="#FF7675" seed={442} strokeWidth={2} />
              </div>
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  padding: "16px 20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: "#FF7675" }}>
                    ⬅ LEFT TARGET
                  </span>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 10,
                      color: "#FF7675",
                      background: "rgba(255, 118, 117, 0.15)",
                      padding: "2px 6px",
                      borderRadius: 4,
                    }}
                  >
                    VALUE = 0
                  </span>
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 900, color: theme.chalkText }}>
                  0s MOVE TO LEFT
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.chalkDim }}>
                  Every time we encounter a 0, route it directly to the front boundary of the array.
                </div>
              </div>
            </div>

            {/* Middle Zone: 1s */}
            <div
              style={{
                width: 390,
                position: "relative",
                height: 165,
                opacity: frame >= aOneMiddle.startFrame ? 1 : 0.35,
              }}
            >
              <div style={{ position: "absolute", inset: 0 }}>
                <RoughBox width={390} height={165} stroke={theme.chalkText} seed={443} strokeWidth={2} />
              </div>
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  padding: "16px 20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.chalkText }}>
                    ⬌ MIDDLE ZONE
                  </span>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 10,
                      color: theme.chalkText,
                      background: "rgba(248, 246, 240, 0.15)",
                      padding: "2px 6px",
                      borderRadius: 4,
                    }}
                  >
                    VALUE = 1
                  </span>
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 900, color: theme.chalkText }}>
                  1s STAY IN MIDDLE
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.chalkDim }}>
                  1s naturally belong between 0s and 2s. No long movement required — let them sit in center.
                </div>
              </div>
            </div>

            {/* Right Zone: 2s */}
            <div
              style={{
                width: 390,
                position: "relative",
                height: 165,
                opacity: frame >= aTwoRight.startFrame ? 1 : 0.35,
              }}
            >
              <div style={{ position: "absolute", inset: 0 }}>
                <RoughBox width={390} height={165} stroke={theme.cyan} seed={444} strokeWidth={2} />
              </div>
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  padding: "16px 20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.cyan }}>
                    RIGHT TARGET ➡
                  </span>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 10,
                      color: theme.cyan,
                      background: "rgba(92, 225, 230, 0.15)",
                      padding: "2px 6px",
                      borderRadius: 4,
                    }}
                  >
                    VALUE = 2
                  </span>
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 900, color: theme.chalkText }}>
                  2s MOVE TO RIGHT
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.chalkDim }}>
                  Every time we encounter a 2, route it directly to the rear boundary of the array.
                </div>
              </div>
            </div>
          </div>

          {/* Synthesis & Elimination Strikes */}
          {frame >= aIfCanDo.startFrame && (
            <div style={{ position: "relative", width: "100%", height: 95 }}>
              <div style={{ position: "absolute", inset: 0 }}>
                <RoughBox width={ARRAY_TRACK_WIDTH} height={95} stroke="#6EE7B7" seed={445} strokeWidth={2} />
              </div>
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  padding: "14px 28px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "100%",
                  boxSizing: "border-box",
                }}
              >
                <div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: "#6EE7B7" }}>
                    IF WE CLASSIFY IN-PLACE DURING THE INSPECTION:
                  </div>
                  <div style={{ display: "flex", gap: 20, marginTop: 6, alignItems: "center" }}>
                    {/* Crossed-out counting */}
                    <div
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 12,
                        color: frame >= aNoCountPhase.startFrame ? "#FF7675" : theme.chalkText,
                        textDecoration: frame >= aNoCountPhase.startFrame ? "line-through" : "none",
                        opacity: frame >= aNoCountPhase.startFrame ? 0.75 : 1,
                      }}
                    >
                      ❌ NO SEPARATE COUNTING PASS
                    </div>
                    <span style={{ color: "rgba(248, 246, 240, 0.3)" }}>•</span>
                    {/* Crossed-out rewrite */}
                    <div
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 12,
                        color: frame >= aNoRewritePhase.startFrame ? "#FF7675" : theme.chalkText,
                        textDecoration: frame >= aNoRewritePhase.startFrame ? "line-through" : "none",
                        opacity: frame >= aNoRewritePhase.startFrame ? 0.75 : 1,
                      }}
                    >
                      ❌ NO SEPARATE REWRITE PASS
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    padding: "8px 18px",
                    borderRadius: 6,
                    background: "rgba(110, 231, 183, 0.2)",
                    border: "1.5px solid #6EE7B7",
                    fontFamily: fonts.mono,
                    fontSize: 13,
                    fontWeight: 900,
                    color: "#6EE7B7",
                  }}
                >
                  TRUE 1-PASS IN-PLACE SORTING ✓
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ------------------------------------------------------------ */}
      {/* SUB-STAGE 6: GRAND HANDOFF TO THREE-POINTER (F2173..F2287)   */}
      {/* ------------------------------------------------------------ */}
      {frame >= aThreePointer.startFrame && (
        <div
          style={{
            position: "absolute",
            top: 490, // Safe 45px clearance below array pointers (P1, P2, P3)
            left: ARRAY_TRACK_LEFT,
            width: ARRAY_TRACK_WIDTH,
            height: 230,
            zIndex: 30,
          }}
        >
          <div style={{ position: "absolute", inset: 0 }}>
            <RoughBox width={ARRAY_TRACK_WIDTH} height={230} stroke={theme.pivot} seed={999} strokeWidth={3} />
          </div>
          <div
            style={{
              position: "relative",
              zIndex: 2,
              padding: "26px 36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              boxSizing: "border-box",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.pivot }}>
                NEXT: ALGORITHM 2 ARCHITECTURE
              </span>
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 11,
                  fontWeight: 800,
                  backgroundColor: "rgba(110, 231, 183, 0.2)",
                  color: "#6EE7B7",
                  padding: "3px 10px",
                  borderRadius: 4,
                  border: "1px solid #6EE7B7",
                }}
              >
                ONE-PASS OPTIMAL
              </span>
            </div>

            <div>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 26,
                  fontWeight: 900,
                  color: theme.chalkText,
                  letterSpacing: "0.04em",
                }}
              >
                THE THREE-POINTER ALGORITHM (DUTCH NATIONAL FLAG)
              </div>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 13,
                  color: theme.chalkDim,
                  marginTop: 8,
                }}
              >
                3 pointers coordinate on the array to partition 0s, 1s, and 2s in a single pass without extra memory.
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: 14,
                borderTop: "1px dashed rgba(248, 246, 240, 0.2)",
              }}
            >
              <div style={{ display: "flex", gap: 20, fontFamily: fonts.mono, fontSize: 11, fontWeight: 800 }}>
                <span style={{ color: "#FF7675" }}>P1: BOUNDARY FOR 0s</span>
                <span style={{ color: theme.pivot }}>P2: ACTIVE SCANNER</span>
                <span style={{ color: theme.cyan }}>P3: BOUNDARY FOR 2s</span>
              </div>
              <div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: "#6EE7B7" }}>
                SCENE 06 COMING UP ➔
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 4. PERMANENT CAPTIONS AT BOTTOM                              */}
      {/* ============================================================ */}
      <Captions words={captionWords} />
    </div>
  );
};
