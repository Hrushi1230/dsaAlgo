/**
 * Scene06DnfIdea.tsx — Scene 06 · THE DUTCH NATIONAL FLAG IDEA
 * Sort Colors (LeetCode 75) · Pattern 01 — Arrays & Hashing
 *
 * PEDAGOGICAL ARCHITECTURE & SUB-STAGE BREAKDOWN:
 * - Sub-stage 1 (F0 .. F227): Pointer Roles Introduction (low, mid, high)
 * - Sub-stage 2 (F227 .. F1458): The Four Invariant Regions (4 Partition Boxes + Unified Strip + Rhythmic Recap)
 * - Sub-stage 3 (F1458 .. F2489): The 3 Action Rules (Case 0, Case 1, Case 2 with Directional Arcs & Swaps)
 * - Sub-stage 4 (F2489 .. F3080): The Golden Climax Rule — Why Mid Does NOT Move on 2! (Attention Banner, Frozen Mid Lock, Why? Challenge, Origin Trajectory, 3-Way Branching Possibility Tree)
 * - Sub-stage 5 (F3080 .. F3592): Convergence & Region Shrinking Synthesis (3 Invariant Pillars, Contracting Unknown Window, Termination Condition mid > high, Victory Card)
 *
 * ZERO-COLLISION & SPATIAL INVARIANTS (Rule 16 Compliant):
 * - Canvas: 1920 × 1080 (Oxford Chalkboard Green #19523C)
 * - Top Bar: Y: 30 .. 76
 * - Zone A: Array Track Hero: Y: 130 .. 380 (10 slots, 1244px wide, left: 338px, marginBottom: 46px on header)
 * - Zone B: Dynamic Pedagogical Cards: Y: 410 .. 720 (Strictly 30px-50px gap below track, 1244px wide, left: 338px)
 * - Bottom Third Breathing Room: Y: 720 .. 980 (260px void)
 * - Captions: Y: 980 .. 1040
 * - Determinism: 100% derived from useCurrentFrame(), zero CSS transitions or keyframes.
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
  SemanticSlotState,
  RoughBox,
  RoughCurve,
} from "../../../../kit/components";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import syncData from "../sync/06-dnf-idea.json";
import anchorsData from "../sync/06-dnf-idea.anchors.json";

// Word-level caption timings from verified JSON
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

// Canvas & Array Geometry Constants (10 slots = 1244px width)
const CANVAS_WIDTH = 1920;
const CANVAS_HEIGHT = 1080;
const SLOT_WIDTH = 110;
const SLOT_HEIGHT = 100;
const SLOT_GAP = 16;
const ARRAY_TRACK_WIDTH = 10 * SLOT_WIDTH + 9 * SLOT_GAP; // 1244px
const ARRAY_TRACK_LEFT = Math.round((CANVAS_WIDTH - ARRAY_TRACK_WIDTH) / 2); // 338px

// Master Testcase Array (n = 10)
const MASTER_VALUES = [2, 1, 2, 0, 2, 1, 0, 1, 0, 2];

export const Scene06DnfIdea: React.FC = () => {
  const frame = useCurrentFrame();

  // ============================================================
  // 1. ANCHOR RETRIEVAL (All 52 Verified Anchors)
  // ============================================================
  const aStart = useMemo(() => getAnchor("S06_START"), []);
  const aPointers = useMemo(() => getAnchor("S06_THREE_POINTERS"), []);
  const aLow = useMemo(() => getAnchor("S06_LOW"), []);
  const aMid = useMemo(() => getAnchor("S06_MID"), []);
  const aHigh = useMemo(() => getAnchor("S06_HIGH"), []);
  const aFourRegions = useMemo(() => getAnchor("S06_FOUR_REGIONS"), []);
  const aReg0 = useMemo(() => getAnchor("S06_REG0_TITLE"), []);
  const aReg0Range = useMemo(() => getAnchor("S06_REG0_RANGE"), []);
  const aReg0Content = useMemo(() => getAnchor("S06_REG0_CONTENT"), []);
  const aReg1 = useMemo(() => getAnchor("S06_REG1_TITLE"), []);
  const aReg1Range = useMemo(() => getAnchor("S06_REG1_RANGE"), []);
  const aReg1Content = useMemo(() => getAnchor("S06_REG1_CONTENT"), []);
  const aRegU = useMemo(() => getAnchor("S06_REGU_TITLE"), []);
  const aRegURange = useMemo(() => getAnchor("S06_REGU_RANGE"), []);
  const aRegUContent = useMemo(() => getAnchor("S06_REGU_CONTENT"), []);
  const aRegUExplain = useMemo(() => getAnchor("S06_REGU_EXPLAIN"), []);
  const aReg2 = useMemo(() => getAnchor("S06_REG2_TITLE"), []);
  const aReg2Range = useMemo(() => getAnchor("S06_REG2_RANGE"), []);
  const aReg2Content = useMemo(() => getAnchor("S06_REG2_CONTENT"), []);
  const aDividedRecap = useMemo(() => getAnchor("S06_DIVIDED_RECAP"), []);
  const aRecap0 = useMemo(() => getAnchor("S06_RECAP_0"), []);
  const aRecap1 = useMemo(() => getAnchor("S06_RECAP_1"), []);
  const aRecapU = useMemo(() => getAnchor("S06_RECAP_U"), []);
  const aRecap2 = useMemo(() => getAnchor("S06_RECAP_2"), []);
  const aJobSimple = useMemo(() => getAnchor("S06_JOB_SIMPLE"), []);
  const aInspectMid = useMemo(() => getAnchor("S06_INSPECT_MID"), []);
  const aCase0If = useMemo(() => getAnchor("S06_CASE0_IF"), []);
  const aCase0Why = useMemo(() => getAnchor("S06_CASE0_WHY"), []);
  const aCase0Swap = useMemo(() => getAnchor("S06_CASE0_SWAP"), []);
  const aCase0LowInc = useMemo(() => getAnchor("S06_CASE0_LOW_INC"), []);
  const aCase0MidInc = useMemo(() => getAnchor("S06_CASE0_MID_INC"), []);
  const aCase1If = useMemo(() => getAnchor("S06_CASE1_IF"), []);
  const aCase1Why = useMemo(() => getAnchor("S06_CASE1_WHY"), []);
  const aCase1NoSwap = useMemo(() => getAnchor("S06_CASE1_NO_SWAP"), []);
  const aCase1MidInc = useMemo(() => getAnchor("S06_CASE1_MID_INC"), []);
  const aCase2If = useMemo(() => getAnchor("S06_CASE2_IF"), []);
  const aCase2Why = useMemo(() => getAnchor("S06_CASE2_WHY"), []);
  const aCase2Swap = useMemo(() => getAnchor("S06_CASE2_SWAP"), []);
  const aCase2HighDec = useMemo(() => getAnchor("S06_CASE2_HIGH_DEC"), []);
  const aImpRule = useMemo(() => getAnchor("S06_IMPORTANT_RULE"), []);
  const aMidNoMove = useMemo(() => getAnchor("S06_MID_DOES_NOT_MOVE"), []);
  const aWhy = useMemo(() => getAnchor("S06_WHY_QUESTION"), []);
  const aWhyAns = useMemo(() => getAnchor("S06_WHY_ANSWER_COMING"), []);
  const aDoNotKnow = useMemo(() => getAnchor("S06_DO_NOT_KNOW_YET"), []);
  const aWhether012 = useMemo(() => getAnchor("S06_WHETHER_0_1_2"), []);
  const aMustInspect = useMemo(() => getAnchor("S06_MUST_INSPECT"), []);
  const aCompleteIdea = useMemo(() => getAnchor("S06_COMPLETE_IDEA"), []);
  const aRoleLow = useMemo(() => getAnchor("S06_ROLE_LOW"), []);
  const aRoleMid = useMemo(() => getAnchor("S06_ROLE_MID"), []);
  const aRoleHigh = useMemo(() => getAnchor("S06_ROLE_HIGH"), []);
  const aUnknownShrinks = useMemo(() => getAnchor("S06_UNKNOWN_SHRINKS"), []);
  const aUntilNothing = useMemo(() => getAnchor("S06_UNTIL_NOTHING_LEFT"), []);

  // ============================================================
  // 2. SUB-STAGE DERIVATION
  // ============================================================
  // Sub-stage 1: F0 .. F227
  // Sub-stage 2: F227 .. F1458
  // Sub-stage 3: F1458 .. F2489
  // Sub-stage 4: F2489 .. F3080
  // Sub-stage 5: F3080 .. F3592
  const subStage = useMemo(() => {
    if (frame < aFourRegions.startFrame) return 1;
    if (frame < aJobSimple.startFrame) return 2;
    if (frame < aImpRule.startFrame) return 3;
    if (frame < aCompleteIdea.startFrame) return 4;
    return 5;
  }, [frame, aFourRegions.startFrame, aJobSimple.startFrame, aImpRule.startFrame, aCompleteIdea.startFrame]);

  // Pointer visibility gates
  const showLow = frame >= aLow.startFrame;
  const showMid = frame >= aMid.startFrame;
  const showHigh = frame >= aHigh.startFrame;

  // ============================================================
  // 3. DYNAMIC POINTER INDICES & POSITIONS
  // ============================================================
  const { lowIdx, midIdx, highIdx } = useMemo(() => {
    // Default initial pointer stations
    let l = 0;
    let m = 0;
    let h = 9;

    if (subStage === 3) {
      // Sub-stage 3: The 3 Action Rules demonstration
      if (frame >= aCase0LowInc.startFrame) {
        l = interpolate(
          frame,
          [aCase0LowInc.startFrame, aCase0LowInc.endFrame],
          [0, 1],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE }
        );
      }
      if (frame >= aCase0MidInc.startFrame && frame < aCase1MidInc.startFrame) {
        m = interpolate(
          frame,
          [aCase0MidInc.startFrame, aCase0MidInc.endFrame],
          [0, 1],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE }
        );
      } else if (frame >= aCase1MidInc.startFrame) {
        m = interpolate(
          frame,
          [aCase1MidInc.startFrame, aCase1MidInc.endFrame],
          [1, 2],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE }
        );
      }
      if (frame >= aCase2HighDec.startFrame) {
        h = interpolate(
          frame,
          [aCase2HighDec.startFrame, aCase2HighDec.endFrame],
          [9, 8],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE }
        );
      }
    } else if (subStage === 4) {
      // Sub-stage 4: Golden Rule Spotlight — mid is held firmly at index 2, low=1, high=8
      l = 1;
      m = 2;
      h = 8;
    } else if (subStage === 5) {
      // Sub-stage 5: Convergence animation
      if (frame >= aUnknownShrinks.startFrame) {
        l = interpolate(
          frame,
          [aUnknownShrinks.startFrame, aUntilNothing.startFrame],
          [1, 4],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE }
        );
        m = interpolate(
          frame,
          [aUnknownShrinks.startFrame, aUntilNothing.startFrame],
          [2, 5],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE }
        );
        h = interpolate(
          frame,
          [aUnknownShrinks.startFrame, aUntilNothing.startFrame],
          [8, 4],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE }
        );
      } else {
        l = 1;
        m = 2;
        h = 8;
      }
    }

    return { lowIdx: l, midIdx: m, highIdx: h };
  }, [
    subStage,
    frame,
    aCase0LowInc.startFrame,
    aCase0LowInc.endFrame,
    aCase0MidInc.startFrame,
    aCase0MidInc.endFrame,
    aCase1MidInc.startFrame,
    aCase1MidInc.endFrame,
    aCase2HighDec.startFrame,
    aCase2HighDec.endFrame,
    aUnknownShrinks.startFrame,
    aUntilNothing.startFrame,
  ]);

  // Pointer list with strict multi-lane staggering (Rule 16: Zero Collision)
  const pointers: ArrayPointer[] = useMemo(() => {
    const list: ArrayPointer[] = [];
    if (showLow) {
      list.push({
        id: "low",
        label: "low",
        index: Math.round(lowIdx),
        color: theme.warn, // Coral Red
        lane: 0,
        arrowLength: 34,
      });
    }
    if (showMid) {
      list.push({
        id: "mid",
        label: "mid",
        index: Math.round(midIdx),
        color: theme.pivot, // Sunburst Gold
        lane: 1, // Staggered lane 1 avoids collision with low at index 0!
        arrowLength: 34,
      });
    }
    if (showHigh) {
      list.push({
        id: "high",
        label: "high",
        index: Math.round(highIdx),
        color: theme.cyan, // Ice Cyan
        lane: 0,
        arrowLength: 34,
      });
    }
    return list;
  }, [showLow, showMid, showHigh, lowIdx, midIdx, highIdx]);

  // ============================================================
  // 4. TOP PARTITIONS ON ARRAY TRACK
  // ============================================================
  const partitions: ArrayPartition[] = useMemo(() => {
    if (frame < aFourRegions.startFrame) return [];
    const list: ArrayPartition[] = [];
    const l = Math.round(lowIdx);
    const m = Math.round(midIdx);
    const h = Math.round(highIdx);

    // Region 0: [0 .. low - 1] -> Confirmed 0s
    if (l > 0) {
      list.push({
        id: "reg-0s",
        startIndex: 0,
        endIndex: l - 1,
        label: "0s ONLY [0..low-1]",
        color: theme.warn,
        variant: "band",
      });
    }

    // Region 1: [low .. mid - 1] -> Confirmed 1s
    if (m > l) {
      list.push({
        id: "reg-1s",
        startIndex: l,
        endIndex: m - 1,
        label: "1s ONLY [low..mid-1]",
        color: theme.chalkText,
        variant: "band",
      });
    }

    // Region U: [mid .. high] -> UNKNOWN
    if (frame >= aRegU.startFrame && h >= m) {
      list.push({
        id: "reg-unknown",
        startIndex: m,
        endIndex: h,
        label: "UNKNOWN [mid..high]",
        color: theme.pivot,
        variant: "band",
      });
    }

    // Region 2: [high + 1 .. 9] -> Confirmed 2s
    if (h < 9) {
      list.push({
        id: "reg-2s",
        startIndex: h + 1,
        endIndex: 9,
        label: "2s ONLY [high+1..n-1]",
        color: theme.cyan,
        variant: "band",
      });
    }

    return list;
  }, [frame, aFourRegions.startFrame, aRegU.startFrame, lowIdx, midIdx, highIdx]);

  // ============================================================
  // 5. IN-FLIGHT SWAP ANIMATION CONFIG (Deterministic Swap Arcs)
  // ============================================================
  const swapConfig = useMemo(() => {
    // Case 0 Swap (F1712 .. F1777)
    if (frame >= aCase0Swap.startFrame && frame <= aCase0Swap.endFrameExclusive) {
      const progress = interpolate(
        frame,
        [aCase0Swap.startFrame, aCase0Swap.endFrame],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE }
      );
      return {
        idxA: 0,
        idxB: 0,
        progress,
        arcHeight: -60,
        label: "swap(nums[mid], nums[low])",
      };
    }
    // Case 2 Swap (F2308 .. F2387)
    if (frame >= aCase2Swap.startFrame && frame <= aCase2Swap.endFrameExclusive) {
      const progress = interpolate(
        frame,
        [aCase2Swap.startFrame, aCase2Swap.endFrame],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE }
      );
      return {
        idxA: Math.round(midIdx),
        idxB: Math.round(highIdx),
        progress,
        arcHeight: -80,
        label: "swap(nums[mid], nums[high])",
      };
    }
    return undefined;
  }, [frame, aCase0Swap, aCase2Swap, midIdx, highIdx]);

  // Array Elements formatting
  const elements = useMemo(() => {
    return MASTER_VALUES.map((val, idx) => {
      const isInspected = subStage >= 3 && subStage <= 4 && idx === Math.round(midIdx);
      const isSpotlightLocked = subStage === 4 && idx === Math.round(midIdx);

      let slotState: SemanticSlotState = "default";
      if (isSpotlightLocked) {
        slotState = "confirmed";
      } else if (isInspected) {
        slotState = "current";
      }

      return {
        value: val,
        slotState,
      };
    });
  }, [subStage, midIdx]);

  // Status badge text in Top Header
  const headerStatusText = useMemo(() => {
    if (subStage === 1) return "STAGE 1 · POINTER ROLES INTRODUCTION";
    if (subStage === 2) return "STAGE 2 · THE FOUR INVARIANT REGIONS";
    if (subStage === 3) return "STAGE 3 · THREE DECISION BRANCHES (ON nums[mid])";
    if (subStage === 4) return "STAGE 4 · ⚠️ GOLDEN RULE: MID DOES NOT MOVE ON 2";
    return "STAGE 5 · CONVERGENCE & TERMINATION";
  }, [subStage]);

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

      {/* Audio Element with verified sync file */}
      <Audio src={staticFile("audio/011/06-dnf-idea.mp3")} />

      {/* ============================================================ */}
      {/* 1. TOP HEADER ZONE (Y: 30 .. 76)                             */}
      {/* ============================================================ */}
      <div
        style={{
          position: "absolute",
          top: 32,
          left: ARRAY_TRACK_LEFT,
          width: ARRAY_TRACK_WIDTH,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              padding: "6px 16px",
              borderRadius: 6,
              background: "rgba(0,0,0,0.5)",
              border: `1.5px solid ${theme.chalkDim}`,
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
              padding: "6px 16px",
              borderRadius: 6,
              background: "rgba(255, 209, 102, 0.15)",
              border: `2px solid ${theme.pivot}`,
              fontFamily: fonts.mono,
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.08em",
              color: theme.pivot,
            }}
          >
            APPROACH 2 · THE THREE-POINTER (DNF) IDEA
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
      {/* 2. ZONE A: ARRAY TRACK HERO (Y: 130 .. 380)                  */}
      {/* ============================================================ */}
      <div
        style={{
          position: "absolute",
          top: 105,
          left: ARRAY_TRACK_LEFT,
          width: ARRAY_TRACK_WIDTH,
          zIndex: 10,
        }}
      >
        {/* Track Title Header with strict marginBottom: 46px (Rule 16) */}
        <div
          style={{
            marginBottom: 46,
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
              gap: 10,
            }}
          >
            <span>nums [10 elements] · In-Place Traversal</span>
            <span style={{ fontSize: 12, color: theme.chalkDim, fontWeight: 500 }}>
              (Master Testcase: [2, 1, 2, 0, 2, 1, 0, 1, 0, 2])
            </span>
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

            const isInspectedSlot = subStage >= 3 && subStage <= 4 && rect.index === Math.round(midIdx);
            const scale = isInspectedSlot ? 1.15 : 1.0;

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
      {/* 3. ZONE B: CENTER-STAGE DYNAMIC PEDAGOGICAL CARDS (Y: 410..720) */}
      {/* Strictly starts at Y: 410 to guarantee zero collision with pointers */}
      {/* ============================================================ */}
      <div
        style={{
          position: "absolute",
          top: 430,
          left: ARRAY_TRACK_LEFT,
          width: ARRAY_TRACK_WIDTH,
          height: 310,
          zIndex: 15,
        }}
      >
        {/* ------------------------------------------------------------ */}
        {/* SUB-STAGE 1: POINTER ROLES INTRODUCTION (F0 .. F227)        */}
        {/* ------------------------------------------------------------ */}
        {subStage === 1 && (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontFamily: fonts.hand, fontSize: 24, fontWeight: 700, color: theme.chalkText }}>
                Three Coordinating Pointers to Partition the Array in a Single Traversal
              </div>
              <div style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.pivot }}>
                ONE PASS INVARIANT DESIGN
              </div>
            </div>

            <div style={{ display: "flex", gap: 16, flex: 1 }}>
              {/* Column 1: low */}
              <div
                style={{
                  flex: 1,
                  padding: "16px 20px",
                  borderRadius: 12,
                  background: "rgba(0,0,0,0.35)",
                  border: showLow ? `2.5px solid ${theme.warn}` : `1.5px solid ${theme.chalkDim}`,
                  boxShadow: showLow ? "0 0 20px rgba(255,118,117,0.3)" : "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 900, color: theme.warn }}>
                      low (Index 0)
                    </span>
                    <span style={{ fontSize: 18 }}>🛡️</span>
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkText, marginTop: 8, fontWeight: 700 }}>
                    Boundary for Confirmed 0s
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkDim, marginTop: 6, lineHeight: "18px" }}>
                    Everything strictly to the left of <code>low</code> is guaranteed to be a sorted <code>0</code>.
                  </div>
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.warn, background: "rgba(255,118,117,0.1)", padding: "4px 8px", borderRadius: 4 }}>
                  INVARIANT: [0 .. low - 1] = 0s
                </div>
              </div>

              {/* Column 2: mid */}
              <div
                style={{
                  flex: 1,
                  padding: "16px 20px",
                  borderRadius: 12,
                  background: "rgba(0,0,0,0.35)",
                  border: showMid ? `2.5px solid ${theme.pivot}` : `1.5px solid ${theme.chalkDim}`,
                  boxShadow: showMid ? "0 0 20px rgba(255,209,102,0.3)" : "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 900, color: theme.pivot }}>
                      mid (Index 0)
                    </span>
                    <span style={{ fontSize: 18 }}>🔍</span>
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkText, marginTop: 8, fontWeight: 700 }}>
                    Active Discovery Scanner
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkDim, marginTop: 6, lineHeight: "18px" }}>
                    Examines every unclassified item one-by-one and decides its destination.
                  </div>
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.pivot, background: "rgba(255,209,102,0.1)", padding: "4px 8px", borderRadius: 4 }}>
                  INSPECTOR: evaluates nums[mid]
                </div>
              </div>

              {/* Column 3: high */}
              <div
                style={{
                  flex: 1,
                  padding: "16px 20px",
                  borderRadius: 12,
                  background: "rgba(0,0,0,0.35)",
                  border: showHigh ? `2.5px solid ${theme.cyan}` : `1.5px solid ${theme.chalkDim}`,
                  boxShadow: showHigh ? "0 0 20px rgba(92,225,230,0.3)" : "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 900, color: theme.cyan }}>
                      high (Index 9)
                    </span>
                    <span style={{ fontSize: 18 }}>🛡️</span>
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkText, marginTop: 8, fontWeight: 700 }}>
                    Boundary for Confirmed 2s
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkDim, marginTop: 6, lineHeight: "18px" }}>
                    Everything strictly to the right of <code>high</code> is guaranteed to be a sorted <code>2</code>.
                  </div>
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.cyan, background: "rgba(92,225,230,0.1)", padding: "4px 8px", borderRadius: 4 }}>
                  INVARIANT: [high + 1 .. n - 1] = 2s
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------ */}
        {/* SUB-STAGE 2: THE FOUR INVARIANT REGIONS (F227 .. F1458)     */}
        {/* ------------------------------------------------------------ */}
        {subStage === 2 && (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {/* Header & Mode Switch */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontFamily: fonts.hand, fontSize: 24, fontWeight: 700, color: theme.chalkText }}>
                {frame < aDividedRecap.startFrame
                  ? "The 4 Invariant Regions Created by the Three Pointers"
                  : "Grand 4-Region Unified Invariant Model"}
              </div>
              <div style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.pivot }}>
                MATHEMATICALLY EXHAUSTIVE PARTITION
              </div>
            </div>

            {/* 4 Partition Boxes View (F227 .. F1205) */}
            {frame < aDividedRecap.startFrame ? (
              <div style={{ display: "flex", gap: 14, flex: 1 }}>
                {/* Region 0 Box */}
                <div
                  style={{
                    flex: 1,
                    padding: "14px 16px",
                    borderRadius: 12,
                    background: "rgba(0,0,0,0.4)",
                    border: frame >= aReg0.startFrame ? `2.5px solid ${theme.warn}` : `1.5px solid ${theme.chalkDim}`,
                    boxShadow: frame >= aReg0.startFrame ? "0 0 16px rgba(255,118,117,0.35)" : "none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: theme.warn }}>
                      REGION 0
                    </div>
                    {frame >= aReg0Range.startFrame && (
                      <div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, color: theme.chalkText, marginTop: 6 }}>
                        [0 .. low - 1]
                      </div>
                    )}
                    {frame >= aReg0Content.startFrame && (
                      <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.warn, marginTop: 6, fontWeight: 700 }}>
                        ✔ CONFIRMED 0s ONLY
                      </div>
                    )}
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 12, color: theme.chalkDim, lineHeight: "16px" }}>
                    Strict left flank containing sorted zeroes.
                  </div>
                </div>

                {/* Region 1 Box */}
                <div
                  style={{
                    flex: 1,
                    padding: "14px 16px",
                    borderRadius: 12,
                    background: "rgba(0,0,0,0.4)",
                    border: frame >= aReg1.startFrame ? `2.5px solid ${theme.chalkText}` : `1.5px solid ${theme.chalkDim}`,
                    boxShadow: frame >= aReg1.startFrame ? "0 0 16px rgba(248,246,240,0.35)" : "none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: theme.chalkText }}>
                      REGION 1
                    </div>
                    {frame >= aReg1Range.startFrame && (
                      <div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, color: theme.chalkText, marginTop: 6 }}>
                        [low .. mid - 1]
                      </div>
                    )}
                    {frame >= aReg1Content.startFrame && (
                      <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText, marginTop: 6, fontWeight: 700 }}>
                        ✔ CONFIRMED 1s ONLY
                      </div>
                    )}
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 12, color: theme.chalkDim, lineHeight: "16px" }}>
                    Middle buffer containing sorted ones.
                  </div>
                </div>

                {/* Region U Box */}
                <div
                  style={{
                    flex: 1.25,
                    padding: "14px 16px",
                    borderRadius: 12,
                    background: "rgba(0,0,0,0.4)",
                    border: frame >= aRegU.startFrame ? `2.5px dashed ${theme.pivot}` : `1.5px dashed ${theme.chalkDim}`,
                    boxShadow: frame >= aRegU.startFrame ? "0 0 18px rgba(255,209,102,0.35)" : "none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: theme.pivot }}>
                      REGION U (UNKNOWN)
                    </div>
                    {frame >= aRegURange.startFrame && (
                      <div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, color: theme.pivot, marginTop: 6 }}>
                        [mid .. high]
                      </div>
                    )}
                    {frame >= aRegUContent.startFrame && (
                      <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.pivot, marginTop: 6, fontWeight: 700 }}>
                        ❓ UNPROCESSED RAW VALUES
                      </div>
                    )}
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 12, color: theme.chalkDim, lineHeight: "16px" }}>
                    {frame >= aRegUExplain.startFrame
                      ? "Contains uninspected elements that could be 0, 1, or 2."
                      : "The active exploration window."}
                  </div>
                </div>

                {/* Region 2 Box */}
                <div
                  style={{
                    flex: 1,
                    padding: "14px 16px",
                    borderRadius: 12,
                    background: "rgba(0,0,0,0.4)",
                    border: frame >= aReg2.startFrame ? `2.5px solid ${theme.cyan}` : `1.5px solid ${theme.chalkDim}`,
                    boxShadow: frame >= aReg2.startFrame ? "0 0 16px rgba(92,225,230,0.35)" : "none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: theme.cyan }}>
                      REGION 2
                    </div>
                    {frame >= aReg2Range.startFrame && (
                      <div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, color: theme.chalkText, marginTop: 6 }}>
                        [high + 1 .. n - 1]
                      </div>
                    )}
                    {frame >= aReg2Content.startFrame && (
                      <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.cyan, marginTop: 6, fontWeight: 700 }}>
                        ✔ CONFIRMED 2s ONLY
                      </div>
                    )}
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 12, color: theme.chalkDim, lineHeight: "16px" }}>
                    Strict right flank containing sorted twos.
                  </div>
                </div>
              </div>
            ) : (
              /* Grand Unified Invariant Strip with Rhythmic Recap Pulses (F1205 .. F1458) */
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  flex: 1,
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    height: 100,
                    borderRadius: 14,
                    overflow: "hidden",
                    border: `2px solid ${theme.cardBorder}`,
                    background: "rgba(0,0,0,0.5)",
                  }}
                >
                  {/* Strip 0 */}
                  <div
                    style={{
                      flex: 1,
                      background: frame >= aRecap0.startFrame && frame < aRecap1.startFrame ? "rgba(255,118,117,0.3)" : "rgba(255,118,117,0.15)",
                      borderRight: `2px solid ${theme.warn}`,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      transform: frame >= aRecap0.startFrame && frame < aRecap1.startFrame ? "scale(1.03)" : "scale(1)",
                    }}
                  >
                    <div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 900, color: theme.warn }}>
                      0s ONLY
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.chalkText, marginTop: 4 }}>
                      [0 .. low - 1]
                    </div>
                  </div>

                  {/* Strip 1 */}
                  <div
                    style={{
                      flex: 1,
                      background: frame >= aRecap1.startFrame && frame < aRecapU.startFrame ? "rgba(248,246,240,0.3)" : "rgba(248,246,240,0.12)",
                      borderRight: `2px solid ${theme.chalkText}`,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      transform: frame >= aRecap1.startFrame && frame < aRecapU.startFrame ? "scale(1.03)" : "scale(1)",
                    }}
                  >
                    <div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 900, color: theme.chalkText }}>
                      1s ONLY
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.chalkText, marginTop: 4 }}>
                      [low .. mid - 1]
                    </div>
                  </div>

                  {/* Strip U */}
                  <div
                    style={{
                      flex: 1.4,
                      background: frame >= aRecapU.startFrame && frame < aRecap2.startFrame ? "rgba(255,209,102,0.3)" : "rgba(255,209,102,0.15)",
                      borderRight: `2px solid ${theme.cyan}`,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      transform: frame >= aRecapU.startFrame && frame < aRecap2.startFrame ? "scale(1.03)" : "scale(1)",
                    }}
                  >
                    <div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 900, color: theme.pivot }}>
                      UNKNOWN (?)
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.pivot, marginTop: 4 }}>
                      [mid .. high]
                    </div>
                  </div>

                  {/* Strip 2 */}
                  <div
                    style={{
                      flex: 1,
                      background: frame >= aRecap2.startFrame ? "rgba(92,225,230,0.3)" : "rgba(92,225,230,0.15)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      transform: frame >= aRecap2.startFrame ? "scale(1.03)" : "scale(1)",
                    }}
                  >
                    <div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 900, color: theme.cyan }}>
                      2s ONLY
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.cyan, marginTop: 4 }}>
                      [high + 1 .. n - 1]
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    padding: "10px 16px",
                    borderRadius: 8,
                    background: "rgba(0,0,0,0.35)",
                    border: `1px solid ${theme.cardBorder}`,
                    fontFamily: fonts.mono,
                    fontSize: 13,
                    color: theme.chalkText,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>Every array index belongs to exactly ONE of these four zones at all times.</span>
                  <span style={{ color: theme.good, fontWeight: 700 }}>ZERO AMBIGUITY ✓</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------ */}
        {/* SUB-STAGE 3: THE 3 ACTION RULES (F1458 .. F2489)            */}
        {/* ------------------------------------------------------------ */}
        {subStage === 3 && (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontFamily: fonts.hand, fontSize: 24, fontWeight: 700, color: theme.chalkText }}>
                The Three Action Rules Driven Solely by <code>nums[mid]</code>
              </div>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 12,
                  color: theme.pivot,
                  padding: "4px 10px",
                  borderRadius: 4,
                  background: "rgba(255,209,102,0.15)",
                  border: `1px solid ${theme.pivot}`,
                }}
              >
                CURRENT PROBE: nums[mid]
              </div>
            </div>

            <div style={{ display: "flex", gap: 16, flex: 1 }}>
              {/* Case 0 Card */}
              <div
                style={{
                  flex: 1,
                  padding: "14px 18px",
                  borderRadius: 12,
                  background: "rgba(0,0,0,0.45)",
                  border:
                    frame >= aCase0If.startFrame && frame < aCase1If.startFrame
                      ? `3px solid ${theme.warn}`
                      : `1.5px solid ${theme.chalkDim}`,
                  boxShadow:
                    frame >= aCase0If.startFrame && frame < aCase1If.startFrame
                      ? "0 0 24px rgba(255,118,117,0.45)"
                      : "none",
                  transform:
                    frame >= aCase0If.startFrame && frame < aCase1If.startFrame ? "scale(1.02)" : "scale(1)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: theme.warn }}>
                    CASE 0: nums[mid] == 0
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText, marginTop: 6 }}>
                    Zero belongs on the left flank!
                  </div>
                  {frame >= aCase0Why.startFrame && (
                    <div style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.warn, marginTop: 4 }}>
                      ⬅ TARGET: Region 0 [0..low-1]
                    </div>
                  )}
                </div>

                <div
                  style={{
                    padding: "10px 12px",
                    borderRadius: 6,
                    background: "rgba(0,0,0,0.5)",
                    fontFamily: fonts.mono,
                    fontSize: 12,
                    lineHeight: "20px",
                    color: theme.chalkText,
                  }}
                >
                  <div style={{ color: frame >= aCase0Swap.startFrame ? theme.warn : theme.chalkDim, fontWeight: 700 }}>
                    1. swap(nums[mid], nums[low])
                  </div>
                  <div style={{ color: frame >= aCase0LowInc.startFrame ? theme.warn : theme.chalkDim, fontWeight: 700 }}>
                    2. low++ (expands 0s region)
                  </div>
                  <div style={{ color: frame >= aCase0MidInc.startFrame ? theme.pivot : theme.chalkDim, fontWeight: 700 }}>
                    3. mid++ (scans next unknown)
                  </div>
                </div>
              </div>

              {/* Case 1 Card */}
              <div
                style={{
                  flex: 1,
                  padding: "14px 18px",
                  borderRadius: 12,
                  background: "rgba(0,0,0,0.45)",
                  border:
                    frame >= aCase1If.startFrame && frame < aCase2If.startFrame
                      ? `3px solid ${theme.chalkText}`
                      : `1.5px solid ${theme.chalkDim}`,
                  boxShadow:
                    frame >= aCase1If.startFrame && frame < aCase2If.startFrame
                      ? "0 0 24px rgba(248,246,240,0.45)"
                      : "none",
                  transform:
                    frame >= aCase1If.startFrame && frame < aCase2If.startFrame ? "scale(1.02)" : "scale(1)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: theme.chalkText }}>
                    CASE 1: nums[mid] == 1
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText, marginTop: 6 }}>
                    One already belongs in the middle!
                  </div>
                  {frame >= aCase1Why.startFrame && (
                    <div style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.good, marginTop: 4 }}>
                      ✔ NATURAL FIT: Region 1 [low..mid-1]
                    </div>
                  )}
                </div>

                <div
                  style={{
                    padding: "10px 12px",
                    borderRadius: 6,
                    background: "rgba(0,0,0,0.5)",
                    fontFamily: fonts.mono,
                    fontSize: 12,
                    lineHeight: "20px",
                    color: theme.chalkText,
                  }}
                >
                  <div style={{ color: frame >= aCase1NoSwap.startFrame ? theme.good : theme.chalkDim, fontWeight: 900 }}>
                    1. NO SWAP NEEDED ❌
                  </div>
                  <div style={{ color: frame >= aCase1MidInc.startFrame ? theme.pivot : theme.chalkDim, fontWeight: 700 }}>
                    2. mid++ (expands 1s region)
                  </div>
                  <div style={{ color: theme.chalkDim, fontStyle: "italic" }}>
                    &nbsp;
                  </div>
                </div>
              </div>

              {/* Case 2 Card */}
              <div
                style={{
                  flex: 1,
                  padding: "14px 18px",
                  borderRadius: 12,
                  background: "rgba(0,0,0,0.45)",
                  border:
                    frame >= aCase2If.startFrame
                      ? `3px solid ${theme.cyan}`
                      : `1.5px solid ${theme.chalkDim}`,
                  boxShadow:
                    frame >= aCase2If.startFrame
                      ? "0 0 24px rgba(92,225,230,0.45)"
                      : "none",
                  transform:
                    frame >= aCase2If.startFrame ? "scale(1.02)" : "scale(1)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: theme.cyan }}>
                    CASE 2: nums[mid] == 2
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText, marginTop: 6 }}>
                    Two belongs on the right flank!
                  </div>
                  {frame >= aCase2Why.startFrame && (
                    <div style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.cyan, marginTop: 4 }}>
                      ➡ TARGET: Region 2 [high+1..n-1]
                    </div>
                  )}
                </div>

                <div
                  style={{
                    padding: "10px 12px",
                    borderRadius: 6,
                    background: "rgba(0,0,0,0.5)",
                    fontFamily: fonts.mono,
                    fontSize: 12,
                    lineHeight: "20px",
                    color: theme.chalkText,
                  }}
                >
                  <div style={{ color: frame >= aCase2Swap.startFrame ? theme.cyan : theme.chalkDim, fontWeight: 700 }}>
                    1. swap(nums[mid], nums[high])
                  </div>
                  <div style={{ color: frame >= aCase2HighDec.startFrame ? theme.cyan : theme.chalkDim, fontWeight: 700 }}>
                    2. high-- (expands 2s region)
                  </div>
                  <div style={{ color: theme.pivot, fontWeight: 900, letterSpacing: "0.04em" }}>
                    3. ⚠️ MID DOES NOT MOVE!
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------ */}
        {/* SUB-STAGE 4: THE GOLDEN CLIMAX RULE (F2489 .. F3080)        */}
        {/* ------------------------------------------------------------ */}
        {subStage === 4 && (
          <div
            style={{
              width: "100%",
              height: "100%",
              padding: "16px 24px",
              borderRadius: 14,
              background: "linear-gradient(180deg, rgba(16, 52, 38, 0.95) 0%, rgba(6, 24, 17, 0.95) 100%)",
              border: `3px solid ${theme.pivot}`,
              boxShadow: "0 0 32px rgba(255,209,102,0.45)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Spotlight Banner Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 24 }}>⚠️</span>
                <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 900, color: theme.pivot }}>
                  THE GOLDEN INVARIANT RULE: WHY MID DOES NOT ADVANCE ON 2
                </span>
              </div>
              <div
                style={{
                  padding: "4px 12px",
                  borderRadius: 6,
                  background: "rgba(255,209,102,0.2)",
                  border: `1px solid ${theme.pivot}`,
                  fontFamily: fonts.mono,
                  fontSize: 12,
                  fontWeight: 800,
                  color: theme.pivot,
                }}
              >
                CRITICAL INTERVIEW INSIGHT
              </div>
            </div>

            {/* Core Mystery and Anatomical Trajectory */}
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
              {/* Question Mark Box / Freeze Status */}
              <div
                style={{
                  width: 140,
                  height: 120,
                  borderRadius: 10,
                  background: "rgba(0,0,0,0.5)",
                  border: `2px dashed ${frame >= aWhy.startFrame ? theme.pivot : theme.warn}`,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span style={{ fontFamily: fonts.mono, fontSize: 36, fontWeight: 900, color: theme.pivot }}>
                  {frame >= aWhy.startFrame ? "WHY?" : "🔒"}
                </span>
                <span style={{ fontFamily: fonts.mono, fontSize: 10, color: theme.chalkText, marginTop: 4, textAlign: "center" }}>
                  {frame >= aMidNoMove.startFrame ? "MID FROZEN AT INDEX" : "INSPECTING..."}
                </span>
              </div>

              {/* Trajectory & Explanation Text */}
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: fonts.sans, fontSize: 15, lineHeight: "24px", color: theme.chalkText }}>
                  {frame >= aWhyAns.startFrame ? (
                    <span>
                      The new value that just arrived at <code>nums[mid]</code> was swapped from{" "}
                      <code style={{ color: theme.cyan }}>high</code> — which was located completely inside the{" "}
                      <span style={{ color: theme.pivot, fontWeight: 900 }}>UNKNOWN REGION [mid .. high]</span>!
                    </span>
                  ) : (
                    <span>
                      In Case 0 and Case 1, <code>mid</code> increments immediately. But in Case 2, advancing{" "}
                      <code>mid</code> would corrupt the entire sort!
                    </span>
                  )}
                </div>

                {/* 3 Possibility Bubbles (Anchor 45: F2866 .. F3015) */}
                {frame >= aWhether012.startFrame && (
                  <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
                    <div
                      style={{
                        flex: 1,
                        padding: "6px 10px",
                        borderRadius: 6,
                        background: "rgba(255,118,117,0.15)",
                        border: `1.5px solid ${theme.warn}`,
                        fontFamily: fonts.mono,
                        fontSize: 12,
                        color: theme.warn,
                      }}
                    >
                      Could be 0? ➔ Needs to go LEFT!
                    </div>
                    <div
                      style={{
                        flex: 1,
                        padding: "6px 10px",
                        borderRadius: 6,
                        background: "rgba(248,246,240,0.15)",
                        border: `1.5px solid ${theme.chalkText}`,
                        fontFamily: fonts.mono,
                        fontSize: 12,
                        color: theme.chalkText,
                      }}
                    >
                      Could be 1? ➔ Belongs in MIDDLE!
                    </div>
                    <div
                      style={{
                        flex: 1,
                        padding: "6px 10px",
                        borderRadius: 6,
                        background: "rgba(92,225,230,0.15)",
                        border: `1.5px solid ${theme.cyan}`,
                        fontFamily: fonts.mono,
                        fontSize: 12,
                        color: theme.cyan,
                      }}
                    >
                      Could be 2? ➔ Needs to go RIGHT again!
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Resolution Footer */}
            <div
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                background: "rgba(0,0,0,0.4)",
                border: `1px solid ${frame >= aMustInspect.startFrame ? theme.good : theme.cardBorder}`,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkText }}>
                {frame >= aMustInspect.startFrame ? (
                  <span style={{ color: theme.good, fontWeight: 800 }}>
                    ✔ BY KEEPING MID AT THE SAME POSITION, THE NEXT LOOP ITERATION AUTOMATICALLY CLASSIFIES IT!
                  </span>
                ) : (
                  <span>We do not know the arriving value yet. Therefore, it MUST be inspected first.</span>
                )}
              </div>
              <div style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.good, fontWeight: 700 }}>
                100% CORRECT
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------ */}
        {/* SUB-STAGE 5: CONVERGENCE & REGION SHRINKING (F3080 .. F3592) */}
        {/* ------------------------------------------------------------ */}
        {subStage === 5 && (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontFamily: fonts.hand, fontSize: 24, fontWeight: 700, color: theme.chalkText }}>
                Dutch National Flag: The Complete 1-Pass Convergence Architecture
              </div>
              <div style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.good }}>
                OPTIMAL O(N) TIME · O(1) SPACE
              </div>
            </div>

            {/* 3 Invariant Pillar Cards (F3080 .. F3371) */}
            {frame < aUntilNothing.startFrame ? (
              <div style={{ display: "flex", gap: 16, flex: 1 }}>
                {/* Pillar 1: low */}
                <div
                  style={{
                    flex: 1,
                    padding: "16px 18px",
                    borderRadius: 12,
                    background: "rgba(0,0,0,0.4)",
                    border: `2px solid ${theme.warn}`,
                    boxShadow: "0 0 16px rgba(255,118,117,0.25)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 900, color: theme.warn }}>
                      LOW · GUARDIAN OF 0s
                    </div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText, marginTop: 8, lineHeight: "18px" }}>
                      Maintains invariant: everything behind <code>low</code> is strictly a sorted <code>0</code>.
                    </div>
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.warn }}>
                    INVARIANT: [0 .. low - 1] = 0
                  </div>
                </div>

                {/* Pillar 2: mid */}
                <div
                  style={{
                    flex: 1,
                    padding: "16px 18px",
                    borderRadius: 12,
                    background: "rgba(0,0,0,0.4)",
                    border: `2px solid ${theme.pivot}`,
                    boxShadow: "0 0 16px rgba(255,209,102,0.25)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 900, color: theme.pivot }}>
                      MID · ACTIVE SCANNER
                    </div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText, marginTop: 8, lineHeight: "18px" }}>
                      Scans through the unknown window, driving all swaps and routing.
                    </div>
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.pivot }}>
                    INVARIANT: [low .. mid - 1] = 1
                  </div>
                </div>

                {/* Pillar 3: high */}
                <div
                  style={{
                    flex: 1,
                    padding: "16px 18px",
                    borderRadius: 12,
                    background: "rgba(0,0,0,0.4)",
                    border: `2px solid ${theme.cyan}`,
                    boxShadow: "0 0 16px rgba(92,225,230,0.25)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 900, color: theme.cyan }}>
                      HIGH · GUARDIAN OF 2s
                    </div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText, marginTop: 8, lineHeight: "18px" }}>
                      Maintains invariant: everything ahead of <code>high</code> is strictly a sorted <code>2</code>.
                    </div>
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.cyan }}>
                    INVARIANT: [high + 1 .. n - 1] = 2
                  </div>
                </div>
              </div>
            ) : (
              /* Grand Termination & 1-Pass Victory Card (Anchor 52: F3506 .. F3592) */
              <div
                style={{
                  flex: 1,
                  padding: "20px 28px",
                  borderRadius: 14,
                  background: "linear-gradient(180deg, rgba(16, 52, 38, 0.95) 0%, rgba(6, 24, 17, 0.95) 100%)",
                  border: `3px solid ${theme.good}`,
                  boxShadow: "0 0 32px rgba(60, 229, 167, 0.45)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span style={{ fontSize: 28 }}>🎯</span>
                    <div>
                      <div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 900, color: theme.good }}>
                        TERMINATION LAW: mid &gt; high
                      </div>
                      <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkText, marginTop: 4 }}>
                        The unknown region shrinks on every step until its size is 0.
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "6px 16px",
                      borderRadius: 6,
                      background: "rgba(60,229,167,0.2)",
                      border: `1.5px solid ${theme.good}`,
                      fontFamily: fonts.mono,
                      fontSize: 13,
                      fontWeight: 800,
                      color: theme.good,
                    }}
                  >
                    ARRAY FULLY SORTED
                  </div>
                </div>

                {/* 3 Region Invariant Guarantees at Termination */}
                <div style={{ display: "flex", gap: 16, margin: "8px 0" }}>
                  <div
                    style={{
                      flex: 1,
                      padding: "10px 14px",
                      borderRadius: 8,
                      background: "rgba(0,0,0,0.35)",
                      border: "1px solid rgba(255,118,117,0.4)",
                    }}
                  >
                    <div style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.warn, fontWeight: 700 }}>
                      REGION 0s
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.chalkText, marginTop: 4 }}>
                      Indices [0 .. {Math.max(0, Math.round(lowIdx - 1))}]
                    </div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 11, color: theme.chalkDim, marginTop: 2 }}>
                      Guaranteed all 0s
                    </div>
                  </div>

                  <div
                    style={{
                      flex: 1,
                      padding: "10px 14px",
                      borderRadius: 8,
                      background: "rgba(0,0,0,0.35)",
                      border: "1px solid rgba(255,209,102,0.4)",
                    }}
                  >
                    <div style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.pivot, fontWeight: 700 }}>
                      REGION 1s
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.chalkText, marginTop: 4 }}>
                      Indices [{Math.round(lowIdx)} .. {Math.round(midIdx - 1)}]
                    </div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 11, color: theme.chalkDim, marginTop: 2 }}>
                      Guaranteed all 1s
                    </div>
                  </div>

                  <div
                    style={{
                      flex: 1,
                      padding: "10px 14px",
                      borderRadius: 8,
                      background: "rgba(0,0,0,0.35)",
                      border: "1px solid rgba(92,225,230,0.4)",
                    }}
                  >
                    <div style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.cyan, fontWeight: 700 }}>
                      REGION 2s
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.chalkText, marginTop: 4 }}>
                      Indices [{Math.min(9, Math.round(highIdx + 1))} .. 9]
                    </div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 11, color: theme.chalkDim, marginTop: 2 }}>
                      Guaranteed all 2s
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    padding: "12px 20px",
                    borderRadius: 8,
                    background: "rgba(0,0,0,0.5)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.chalkText }}>
                    [0 .. low-1: <span style={{ color: theme.warn, fontWeight: 700 }}>0s</span>] · [low .. mid-1:{" "}
                    <span style={{ color: theme.chalkText, fontWeight: 700 }}>1s</span>] · [high+1 .. n-1:{" "}
                    <span style={{ color: theme.cyan, fontWeight: 700 }}>2s</span>]
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.pivot, fontWeight: 800 }}>
                    NEXT: SCENE 07 · FULL STEP-BY-STEP DNF TRACE ➔
                  </div>
                </div>
              </div>
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
