import React, { useMemo } from "react";
import {
  AbsoluteFill,
  Audio,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { fonts, theme } from "../../../../kit/lib/theme";
import { ArraySlotV2 } from "../../../../kit/components/array/ArraySlotV2";
import syncData from "../sync/03-trace-brute.json";

// =============================================================================
// CONSTANTS & GEOMETRY
// =============================================================================
const RAW_ARRAY = [8, 1, 6, 3, 2, 2, 4, 10, 9, 11, -1, 0];
const ARRAY_LEN = 12;

// Optical Layout Constants (1920x1080)
const SLOT_WIDTH = 92;
const SLOT_HEIGHT = 108;
const SLOT_GAP = 16;
const TOTAL_ARRAY_WIDTH = ARRAY_LEN * SLOT_WIDTH + (ARRAY_LEN - 1) * SLOT_GAP; // 1280px
const ARRAY_X_START = (1920 - TOTAL_ARRAY_WIDTH) / 2; // 320px
const ARRAY_Y = 350; // top: 350, bottom: 458, center: 404

// Helper for slot center coordinates
const slotCenterX = (i: number) => ARRAY_X_START + i * (SLOT_WIDTH + SLOT_GAP) + SLOT_WIDTH / 2;

// Sequence Ribbon Geometry
const RIBBON_NODE_W = 86;
const RIBBON_NODE_H = 94;
const RIBBON_GAP = 18;
const RIBBON_Y = 635; // center: 635

// Captions data
const captionWords: CaptionWord[] = syncData.words.map((w) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

// Motion Helpers
const clampInterpolate = (
  f: number,
  input: number[],
  output: number[]
) =>
  interpolate(f, input, output, {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

const fadeIn = (f: number, start: number, duration = 15) =>
  clampInterpolate(f, [start, start + duration], [0, 1]);

const pop = (f: number, trigger: number, duration = 16, peakScale = 1.22) => {
  if (f < trigger) return 1.0;
  if (f > trigger + duration) return 1.0;
  const half = duration / 2;
  if (f <= trigger + half) {
    return clampInterpolate(f, [trigger, trigger + half], [1.0, peakScale]);
  }
  return clampInterpolate(f, [trigger + half, trigger + duration], [peakScale, 1.0]);
};

// =============================================================================
// SCENE 03 COMPONENT
// =============================================================================
export const Scene03TraceBrute: React.FC = () => {
  const frame = useCurrentFrame();

  // ===========================================================================
  // ACT 0: INTRO & EXPLAIN BRUTE RULE (F0–F286)
  // ===========================================================================
  const isPointerPreview = frame >= 50 && frame < 103;
  const isPossibleStartLabel = frame >= 103 && frame < 275;
  const isSearchSameLoop = frame >= 114 && frame < 275;
  const isAttemptTicksVisible = frame >= 225 && frame < 3250;

  // Initial pointer x interpolation across slots during preview
  const previewPointerSlot = clampInterpolate(frame, [50, 100], [0, 11]);

  // ===========================================================================
  // ACT FLAGS
  // ===========================================================================
  const isAct1 = frame >= 287 && frame < 648;
  const isAct2 = frame >= 648 && frame < 921;
  const isAct3 = frame >= 921 && frame < 1059;
  const isAct4 = frame >= 1059 && frame < 1250;
  const isAct5 = frame >= 1250 && frame < 1498;
  const isAct6 = frame >= 1498 && frame < 1765;
  const isAct7 = frame >= 1765 && frame < 1895;
  const isAct8 = frame >= 1895 && frame < 2087;
  const isAct9 = frame >= 2087 && frame < 2320;
  const isAct10 = frame >= 2320 && frame < 2426;
  const isAct11 = frame >= 2426 && frame < 2875;
  const isAct12 = frame >= 2875 && frame < 3278;

  // ACT 13: REPEATED-SEARCH INEFFICIENCY FINALE (F3278–F3521)
  const isAct13 = frame >= 3278 && frame < 3522;
  const isFinalBestCapsule = frame >= 3278 && frame < 3522;
  const isCorrectCheck = frame >= 3335 && frame < 3420;
  const isResidueReplay = frame >= 3374 && frame < 3505;
  const isSameArrayBracket = frame >= 3445 && frame < 3522;
  const isRepeatedSearchLabel = frame >= 3477 && frame < 3522;

  // ACT 14: CODE HANDOFF (F3522–F3592)
  const isAct14 = frame >= 3522;
  const codeEditorRise = clampInterpolate(frame, [3542, 3570], [200, 0]);
  const codeEditorOpacity = clampInterpolate(frame, [3542, 3565], [0, 1]);
  const isCursorBlinking = Math.floor(frame / 15) % 2 === 0;

  // ===========================================================================
  // ACTIVE START INDEX & POINTER POSITION
  // ===========================================================================
  const currentStartSlot = useMemo(() => {
    if (frame < 287) return 0;
    if (frame < 648) return 0; // 8
    if (frame < 921) return 1; // 1
    if (frame < 1059) return 2; // 6
    if (frame < 1250) return 3; // 3
    if (frame < 1498) return 4; // first 2
    if (frame < 1765) return 5; // second 2
    if (frame < 1895) return 6; // 4
    if (frame < 2087) return 7; // 10
    if (frame < 2320) return 8; // 9
    if (frame < 2426) return 9; // 11
    if (frame < 2875) return 10; // -1
    if (frame < 3250) return 11; // 0
    return -1;
  }, [frame]);

  const pointerX = useMemo(() => {
    if (isPointerPreview) {
      const s = Math.floor(previewPointerSlot);
      const frac = previewPointerSlot - s;
      const nextS = Math.min(11, s + 1);
      return slotCenterX(s) + (slotCenterX(nextS) - slotCenterX(s)) * frac;
    }
    if (currentStartSlot >= 0) {
      return slotCenterX(currentStartSlot);
    }
    return slotCenterX(0);
  }, [isPointerPreview, previewPointerSlot, currentStartSlot]);

  // ===========================================================================
  // TARGET QUERY ORB STATE (NEED X)
  // ===========================================================================
  const targetOrbState = useMemo(() => {
    if (frame < 185) return null;
    if (frame < 287) return { text: "NEXT = ?", color: theme.chalkText };

    // Act 1 (Start 8)
    if (frame >= 326 && frame < 394) return { text: "NEED 9", color: theme.pivot };
    if (frame >= 394 && frame < 464) return { text: "NEED 10", color: theme.pivot };
    if (frame >= 464 && frame < 528) return { text: "NEED 11", color: theme.pivot };
    if (frame >= 528 && frame < 599) return { text: "NEED 12", color: theme.warn };

    // Act 2 (Start 1)
    if (frame >= 686 && frame < 735) return { text: "NEED 2", color: theme.pivot };
    if (frame >= 735 && frame < 769) return { text: "NEED 3", color: theme.pivot };
    if (frame >= 769 && frame < 825) return { text: "NEED 4", color: theme.pivot };
    if (frame >= 825 && frame < 875) return { text: "NEED 5", color: theme.warn };

    // Act 3 (Start 6)
    if (frame >= 962 && frame < 1037) return { text: "NEED 7", color: theme.warn };

    // Act 4 (Start 3)
    if (frame >= 1098 && frame < 1157) return { text: "NEED 4", color: theme.pivot };
    if (frame >= 1157 && frame < 1217) return { text: "NEED 5", color: theme.warn };

    // Act 5 (First 2)
    if (frame >= 1300 && frame < 1353) return { text: "NEED 3", color: theme.pivot };
    if (frame >= 1353 && frame < 1406) return { text: "NEED 4", color: theme.pivot };
    if (frame >= 1406 && frame < 1451) return { text: "NEED 5", color: theme.warn };

    // Act 6 (Second 2)
    if (frame >= 1585 && frame < 1622) return { text: "NEED 3", color: theme.pivot };
    if (frame >= 1622 && frame < 1653) return { text: "NEED 4", color: theme.pivot };
    if (frame >= 1653 && frame < 1691) return { text: "NEED 5", color: theme.warn };

    // Act 7 (Start 4)
    if (frame >= 1813 && frame < 1867) return { text: "NEED 5", color: theme.warn };

    // Act 8 (Start 10)
    if (frame >= 1944 && frame < 1994) return { text: "NEED 11", color: theme.pivot };
    if (frame >= 1994 && frame < 2053) return { text: "NEED 12", color: theme.warn };

    // Act 9 (Start 9)
    if (frame >= 2126 && frame < 2179) return { text: "NEED 10", color: theme.pivot };
    if (frame >= 2179 && frame < 2237) return { text: "NEED 11", color: theme.pivot };
    if (frame >= 2237 && frame < 2288) return { text: "NEED 12", color: theme.warn };

    // Act 10 (Start 11)
    if (frame >= 2347 && frame < 2389) return { text: "NEED 12", color: theme.warn };

    // Act 11 (Start -1)
    if (frame >= 2467 && frame < 2521) return { text: "NEED 0", color: theme.pivot };
    if (frame >= 2521 && frame < 2579) return { text: "NEED 1", color: theme.pivot };
    if (frame >= 2579 && frame < 2636) return { text: "NEED 2", color: theme.pivot };
    if (frame >= 2636 && frame < 2693) return { text: "NEED 3", color: theme.pivot };
    if (frame >= 2693 && frame < 2748) return { text: "NEED 4", color: theme.pivot };
    if (frame >= 2748 && frame < 2806) return { text: "NEED 5", color: theme.warn };

    // Act 12 (Start 0)
    if (frame >= 2937 && frame < 2997) return { text: "NEED 1", color: theme.pivot };
    if (frame >= 2997 && frame < 3043) return { text: "NEED 2", color: theme.pivot };
    if (frame >= 3043 && frame < 3103) return { text: "NEED 3", color: theme.pivot };
    if (frame >= 3103 && frame < 3159) return { text: "NEED 4", color: theme.pivot };
    if (frame >= 3159 && frame < 3226) return { text: "NEED 5", color: theme.warn };

    return null;
  }, [frame]);

  // ===========================================================================
  // SEARCH BEAM (CHALK COMET) ACTIVE PROGRESSION
  // ===========================================================================
  const activeBeam = useMemo(() => {
    const queries = [
      // Act 1
      { startF: 326, endF: 364, targetSlot: 8 },
      { startF: 394, endF: 430, targetSlot: 7 },
      { startF: 464, endF: 504, targetSlot: 9 },
      { startF: 528, endF: 560, targetSlot: 12, isMiss: true },
      // Act 2
      { startF: 686, endF: 712, targetSlot: 4 },
      { startF: 735, endF: 758, targetSlot: 3 },
      { startF: 769, endF: 803, targetSlot: 6 },
      { startF: 825, endF: 855, targetSlot: 12, isMiss: true },
      // Act 3
      { startF: 962, endF: 1000, targetSlot: 12, isMiss: true },
      // Act 4
      { startF: 1098, endF: 1132, targetSlot: 6 },
      { startF: 1157, endF: 1195, targetSlot: 12, isMiss: true },
      // Act 5
      { startF: 1300, endF: 1330, targetSlot: 3 },
      { startF: 1353, endF: 1385, targetSlot: 6 },
      { startF: 1406, endF: 1440, targetSlot: 12, isMiss: true },
      // Act 6
      { startF: 1585, endF: 1605, targetSlot: 3 },
      { startF: 1622, endF: 1637, targetSlot: 6 },
      { startF: 1653, endF: 1680, targetSlot: 12, isMiss: true },
      // Act 7
      { startF: 1813, endF: 1845, targetSlot: 12, isMiss: true },
      // Act 8
      { startF: 1944, endF: 1975, targetSlot: 9 },
      { startF: 1994, endF: 2028, targetSlot: 12, isMiss: true },
      // Act 9
      { startF: 2126, endF: 2155, targetSlot: 7 },
      { startF: 2179, endF: 2212, targetSlot: 9 },
      { startF: 2237, endF: 2268, targetSlot: 12, isMiss: true },
      // Act 10
      { startF: 2347, endF: 2375, targetSlot: 12, isMiss: true },
      // Act 11
      { startF: 2467, endF: 2503, targetSlot: 11 },
      { startF: 2521, endF: 2551, targetSlot: 1 },
      { startF: 2579, endF: 2608, targetSlot: 4 },
      { startF: 2636, endF: 2663, targetSlot: 3 },
      { startF: 2693, endF: 2722, targetSlot: 6 },
      { startF: 2748, endF: 2778, targetSlot: 12, isMiss: true },
      // Act 12
      { startF: 2937, endF: 2965, targetSlot: 1 },
      { startF: 2997, endF: 3028, targetSlot: 4 },
      { startF: 3043, endF: 3075, targetSlot: 3 },
      { startF: 3103, endF: 3135, targetSlot: 6 },
      { startF: 3159, endF: 3195, targetSlot: 12, isMiss: true },
    ];

    const current = queries.find((q) => frame >= q.startF && frame <= q.endF + 10);
    if (!current) return null;

    const targetX = current.isMiss
      ? ARRAY_X_START + TOTAL_ARRAY_WIDTH + 20
      : slotCenterX(current.targetSlot);
    const progress = clampInterpolate(frame, [current.startF, current.endF], [0, 1]);
    const cometX = ARRAY_X_START + (targetX - ARRAY_X_START) * progress;

    return {
      cometX,
      color: current.isMiss ? theme.warn : theme.cyan,
    };
  }, [frame]);

  // ===========================================================================
  // STATE STRIP VALUES (CURRENT LENGTH & BEST)
  // ===========================================================================
  const currentLength = useMemo(() => {
    if (frame < 287) return 0;
    // Act 1: 8->9->10->11
    if (frame < 364) return 1;
    if (frame < 430) return 2;
    if (frame < 504) return 3;
    if (frame < 648) return 4;
    // Act 2: 1->2->3->4
    if (frame < 712) return 1;
    if (frame < 758) return 2;
    if (frame < 803) return 3;
    if (frame < 921) return 4;
    // Act 3: 6
    if (frame < 1059) return 1;
    // Act 4: 3->4
    if (frame < 1128) return 1;
    if (frame < 1250) return 2;
    // Act 5: 2->3->4
    if (frame < 1328) return 1;
    if (frame < 1381) return 2;
    if (frame < 1498) return 3;
    // Act 6: 2->3->4
    if (frame < 1600) return 1;
    if (frame < 1630) return 2;
    if (frame < 1765) return 3;
    // Act 7: 4
    if (frame < 1895) return 1;
    // Act 8: 10->11
    if (frame < 1974) return 1;
    if (frame < 2087) return 2;
    // Act 9: 9->10->11
    if (frame < 2153) return 1;
    if (frame < 2209) return 2;
    if (frame < 2320) return 3;
    // Act 10: 11
    if (frame < 2426) return 1;
    // Act 11: -1->0->1->2->3->4
    if (frame < 2503) return 1;
    if (frame < 2551) return 2;
    if (frame < 2608) return 3;
    if (frame < 2663) return 4;
    if (frame < 2722) return 5;
    if (frame < 2875) return 6;
    // Act 12: 0->1->2->3->4
    if (frame < 2956) return 1;
    if (frame < 3026) return 2;
    if (frame < 3079) return 3;
    if (frame < 3134) return 4;
    if (frame < 3250) return 5;
    return 6;
  }, [frame]);

  const bestLength = useMemo(() => {
    if (frame < 610) return 0;
    if (frame < 2840) return 4;
    return 6;
  }, [frame]);

  const isNewBestPulse = frame >= 2832 && frame < 2865;
  const bestPulseScale = isNewBestPulse ? pop(frame, 2832, 20, 1.35) : 1.0;

  // ===========================================================================
  // ACTIVE SEQUENCE RIBBON NODES & CONNECTORS
  // ===========================================================================
  const activeRibbon = useMemo(() => {
    if (frame < 287 || frame >= 3278) return null;

    let nodes: number[] = [];
    let missValue: number | null = null;
    let isDuplicateWorkSplit = false;

    if (isAct1) {
      nodes = [8];
      if (frame >= 364) nodes.push(9);
      if (frame >= 430) nodes.push(10);
      if (frame >= 504) nodes.push(11);
      if (frame >= 560) missValue = 12;
    } else if (isAct2) {
      nodes = [1];
      if (frame >= 712) nodes.push(2);
      if (frame >= 758) nodes.push(3);
      if (frame >= 803) nodes.push(4);
      if (frame >= 851) missValue = 5;
    } else if (isAct3) {
      nodes = [6];
      if (frame >= 997) missValue = 7;
    } else if (isAct4) {
      nodes = [3];
      if (frame >= 1128) nodes.push(4);
      if (frame >= 1191) missValue = 5;
    } else if (isAct5) {
      nodes = [2];
      if (frame >= 1328) nodes.push(3);
      if (frame >= 1381) nodes.push(4);
      if (frame >= 1435) missValue = 5;
    } else if (isAct6) {
      nodes = [2];
      if (frame >= 1600) nodes.push(3);
      if (frame >= 1630) nodes.push(4);
      if (frame >= 1666) missValue = 5;
      if (frame >= 1725 && frame < 1756) isDuplicateWorkSplit = true;
    } else if (isAct7) {
      nodes = [4];
      if (frame >= 1843) missValue = 5;
    } else if (isAct8) {
      nodes = [10];
      if (frame >= 1974) nodes.push(11);
      if (frame >= 2025) missValue = 12;
    } else if (isAct9) {
      nodes = [9];
      if (frame >= 2153) nodes.push(10);
      if (frame >= 2209) nodes.push(11);
      if (frame >= 2263) missValue = 12;
    } else if (isAct10) {
      nodes = [11];
      if (frame >= 2369) missValue = 12;
    } else if (isAct11) {
      nodes = [-1];
      if (frame >= 2503) nodes.push(0);
      if (frame >= 2551) nodes.push(1);
      if (frame >= 2608) nodes.push(2);
      if (frame >= 2663) nodes.push(3);
      if (frame >= 2722) nodes.push(4);
      if (frame >= 2774) missValue = 5;
    } else if (isAct12) {
      nodes = [0];
      if (frame >= 2956) nodes.push(1);
      if (frame >= 3026) nodes.push(2);
      if (frame >= 3079) nodes.push(3);
      if (frame >= 3134) nodes.push(4);
      if (frame >= 3191) missValue = 5;
    }

    return {
      nodes,
      missValue,
      isDuplicateWorkSplit,
    };
  }, [
    frame,
    isAct1,
    isAct2,
    isAct3,
    isAct4,
    isAct5,
    isAct6,
    isAct7,
    isAct8,
    isAct9,
    isAct10,
    isAct11,
    isAct12,
  ]);

  // Purple ghost trace for duplicate comparison (persists during Act 5 fade & Act 6)
  const isPurpleGhostVisible = frame >= 1486 && frame < 1765;
  const isGhostSplit = frame >= 1725 && frame < 1756;

  // Raw array container scale for Act 14 code handoff
  const rawArrayScale = isAct14
    ? clampInterpolate(frame, [3522, 3550], [1.0, 0.78])
    : 1.0;
  const rawArrayTranslateY = isAct14
    ? clampInterpolate(frame, [3522, 3550], [0, -120])
    : 0;
  const rawArrayTranslateX = isAct14
    ? clampInterpolate(frame, [3522, 3550], [0, -140])
    : 0;
  const rawArrayOpacity = isAct14
    ? clampInterpolate(frame, [3545, 3578], [1.0, 0.12])
    : 1.0;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: theme.boardBg,
        overflow: "hidden",
        fontFamily: fonts.sans,
      }}
    >
      {/* ------------------------------------------------------------------- */}
      {/* Audio Track                                                         */}
      {/* ------------------------------------------------------------------- */}
      <Sequence name="audio">
        <Audio src={staticFile("audio/010/03-trace-brute.mp3")} />
      </Sequence>

      {/* ------------------------------------------------------------------- */}
      {/* Chalk Filters & Chalkboard Base Texture                             */}
      {/* ------------------------------------------------------------------- */}
      <ChalkFilters />
      <ChalkboardBackground />

      {/* =================================================================== */}
      {/* TOP HEADER PILL: BRUTE FORCE · TRACE                                */}
      {/* =================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 28,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: 10,
          border: `1.5px solid ${theme.pivot}`,
          borderRadius: 20,
          padding: "5px 18px",
          backgroundColor: "rgba(16, 50, 37, 0.88)",
          boxShadow: "0 0 12px rgba(255, 209, 102, 0.25)",
          zIndex: 100,
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: theme.pivot,
            boxShadow: `0 0 8px ${theme.pivot}`,
          }}
        />
        <span
          style={{
            fontFamily: fonts.mono,
            fontSize: 14,
            fontWeight: "bold",
            color: theme.pivot,
            letterSpacing: 2.5,
          }}
        >
          BRUTE FORCE · TRACE
        </span>
      </div>

      {/* =================================================================== */}
      {/* TARGET QUERY ORB (NEED X) at Top Center                             */}
      {/* =================================================================== */}
      {targetOrbState && (
        <div
          style={{
            position: "absolute",
            top: 155,
            left: "50%",
            transform: "translateX(-50%)",
            width: 320,
            height: 64,
            borderRadius: 32,
            backgroundColor: "rgba(16, 50, 37, 0.95)",
            border: `2px solid ${targetOrbState.color}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: `0 0 18px ${targetOrbState.color}40`,
            zIndex: 80,
            opacity: fadeIn(frame, 185, 12),
          }}
        >
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 26,
              fontWeight: "bold",
              color: targetOrbState.color,
              letterSpacing: 2,
            }}
          >
            {targetOrbState.text}
          </span>
        </div>
      )}

      {/* =================================================================== */}
      {/* 12 ATTEMPT TICKS ABOVE INPUT CARDS                                  */}
      {/* =================================================================== */}
      {isAttemptTicksVisible && (
        <div
          style={{
            position: "absolute",
            top: 295,
            left: ARRAY_X_START,
            width: TOTAL_ARRAY_WIDTH,
            display: "flex",
            justifyContent: "space-between",
            pointerEvents: "none",
            zIndex: 80,
          }}
        >
          {RAW_ARRAY.map((val, idx) => {
            const isCompleted = idx < currentStartSlot;
            const isCurrent = idx === currentStartSlot;
            return (
              <div
                key={`tick-${idx}`}
                style={{
                  width: SLOT_WIDTH,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: isCurrent
                      ? theme.pivot
                      : isCompleted
                      ? theme.good
                      : "rgba(248, 246, 240, 0.2)",
                    boxShadow: isCurrent ? `0 0 10px ${theme.pivot}` : "none",
                  }}
                />
              </div>
            );
          })}
        </div>
      )}

      {/* =================================================================== */}
      {/* GOLDEN START POINTER                                                */}
      {/* =================================================================== */}
      {currentStartSlot >= 0 && frame < 3250 && (
        <div
          style={{
            position: "absolute",
            left: pointerX,
            top: 310,
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            zIndex: 90,
          }}
        >
          {isPossibleStartLabel && (
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 13,
                fontWeight: "bold",
                color: theme.pivot,
                backgroundColor: "rgba(255, 209, 102, 0.2)",
                padding: "2px 8px",
                borderRadius: 4,
                border: `1px solid ${theme.pivot}`,
                marginBottom: 2,
              }}
            >
              POSSIBLE START
            </div>
          )}

          {/* Act 5/6 Index Specifiers */}
          {isAct5 && (
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 13,
                fontWeight: "bold",
                color: theme.pivot,
                backgroundColor: "rgba(255, 209, 102, 0.2)",
                padding: "2px 8px",
                borderRadius: 4,
                border: `1px solid ${theme.pivot}`,
              }}
            >
              FIRST 2 (i=4)
            </div>
          )}
          {isAct6 && (
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 13,
                fontWeight: "bold",
                color: theme.purple,
                backgroundColor: "rgba(216, 180, 226, 0.2)",
                padding: "2px 8px",
                borderRadius: 4,
                border: `1px solid ${theme.purple}`,
              }}
            >
              SECOND 2 (i=5)
            </div>
          )}

          {/* Downward Pointer Arrow */}
          <svg width={24} height={26} viewBox="0 0 24 26">
            <path
              d="M 12 2 L 12 20 M 6 14 L 12 20 L 18 14"
              stroke={isAct6 ? theme.purple : theme.pivot}
              strokeWidth={3}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}

      {/* =================================================================== */}
      {/* RAW UNSORTED ARRAY (PHYSICALLY FIXED AT OPTICAL HERO CENTER)         */}
      {/* =================================================================== */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1920,
          height: 1080,
          pointerEvents: "none",
          zIndex: 60,
          transform: `translate(${rawArrayTranslateX}px, ${rawArrayTranslateY}px) scale(${rawArrayScale})`,
          opacity: rawArrayOpacity,
        }}
      >
        {/* nums = label */}
        <div
          style={{
            position: "absolute",
            left: ARRAY_X_START - 100,
            top: ARRAY_Y + 36,
            fontFamily: fonts.mono,
            fontSize: 26,
            color: theme.pivot,
            fontWeight: "bold",
          }}
        >
          nums =
        </div>

        {/* 12 Array Card Slots */}
        {RAW_ARRAY.map((val, i) => {
          const isCurrentStart = i === currentStartSlot;
          const isSlotFoundMint =
            (isAct1 && ((val === 9 && frame >= 364) || (val === 10 && frame >= 430) || (val === 11 && frame >= 504))) ||
            (isAct2 && ((val === 2 && i === 4 && frame >= 712) || (val === 3 && frame >= 758) || (val === 4 && frame >= 803))) ||
            (isAct4 && val === 4 && frame >= 1128) ||
            (isAct5 && ((val === 3 && frame >= 1328) || (val === 4 && frame >= 1381))) ||
            (isAct6 && ((val === 3 && frame >= 1600) || (val === 4 && frame >= 1630))) ||
            (isAct8 && val === 11 && frame >= 1974) ||
            (isAct9 && ((val === 10 && frame >= 2153) || (val === 11 && frame >= 2209))) ||
            (isAct11 && ((val === 0 && frame >= 2503) || (val === 1 && frame >= 2551) || (val === 2 && i === 4 && frame >= 2608) || (val === 3 && frame >= 2663) || (val === 4 && frame >= 2722))) ||
            (isAct12 && ((val === 1 && frame >= 2956) || (val === 2 && i === 4 && frame >= 3026) || (val === 3 && frame >= 3079) || (val === 4 && frame >= 3134)));

          const cardBorderColor = isCurrentStart
            ? isAct6
              ? theme.purple
              : theme.pivot
            : isSlotFoundMint
            ? theme.good
            : theme.cyan;

          const cardBorderWidth = isCurrentStart || isSlotFoundMint ? 3 : 2;

          return (
            <div
              key={`raw-slot-${i}`}
              style={{
                position: "absolute",
                left: ARRAY_X_START + i * (SLOT_WIDTH + SLOT_GAP),
                top: ARRAY_Y,
                width: SLOT_WIDTH,
                height: SLOT_HEIGHT,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "6px 0 8px",
                zIndex: isCurrentStart || isSlotFoundMint ? 25 : 10,
              }}
            >
              {/* V2 Rough Chalk Slot Shell */}
              <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                <ArraySlotV2
                  width={SLOT_WIDTH}
                  height={SLOT_HEIGHT}
                  stroke={cardBorderColor}
                  strokeWidth={cardBorderWidth}
                  fill={theme.boardBg}
                  semanticState={isCurrentStart ? "active" : isSlotFoundMint ? "sorted" : "default"}
                  seed={i + 1}
                />
              </div>

              {/* Index marker */}
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 13,
                  fontWeight: "bold",
                  color: isCurrentStart ? theme.pivot : "rgba(255, 209, 102, 0.5)",
                  zIndex: 2,
                }}
              >
                [{i}]
              </span>

              {/* Slot Value */}
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 44,
                  fontWeight: "bold",
                  color: isSlotFoundMint
                    ? theme.good
                    : isCurrentStart
                    ? (isAct6 ? theme.purple : theme.pivot)
                    : theme.chalkText,
                  zIndex: 2,
                }}
              >
                {val}
              </span>

              {/* Base chalk notch */}
              <div
                style={{
                  width: 30,
                  height: 3,
                  borderRadius: 2,
                  backgroundColor: isSlotFoundMint ? theme.good : "rgba(248, 246, 240, 0.35)",
                  zIndex: 2,
                }}
              />
            </div>
          );
        })}

        {/* SEARCH SAME ARRAY cyan loop (Act 0) */}
        {isSearchSameLoop && (
          <div
            style={{
              position: "absolute",
              left: ARRAY_X_START,
              top: ARRAY_Y + SLOT_HEIGHT + 14,
              width: TOTAL_ARRAY_WIDTH,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
            }}
          >
            <svg width={TOTAL_ARRAY_WIDTH} height={24}>
              <path
                d={`M 10 4 Q ${TOTAL_ARRAY_WIDTH / 2} 24 ${TOTAL_ARRAY_WIDTH - 10} 4`}
                stroke={theme.cyan}
                strokeWidth={2.5}
                strokeDasharray="8 6"
                fill="none"
              />
            </svg>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 14,
                color: theme.cyan,
                fontWeight: "bold",
                letterSpacing: 2,
              }}
            >
              SEARCH SAME ARRAY
            </span>
          </div>
        )}

        {/* Duplicate 2 Connecting Bracket (Act 6) */}
        {isAct6 && (
          <div style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 1080 }}>
            <svg width={1920} height={1080}>
              <path
                d={`M ${slotCenterX(4)} ${ARRAY_Y - 8} Q ${(slotCenterX(4) + slotCenterX(5)) / 2} ${ARRAY_Y - 36} ${slotCenterX(5)} ${ARRAY_Y - 8}`}
                stroke={theme.purple}
                strokeWidth={2.5}
                fill="none"
              />
            </svg>
          </div>
        )}
      </div>

      {/* =================================================================== */}
      {/* SEARCH BEAM & CHALK COMET                                           */}
      {/* =================================================================== */}
      {activeBeam && (
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 1080,
            pointerEvents: "none",
            zIndex: 75,
          }}
        >
          {/* Scan path line */}
          <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
            <line
              x1={ARRAY_X_START}
              y1={ARRAY_Y + SLOT_HEIGHT + 24}
              x2={activeBeam.cometX}
              y2={ARRAY_Y + SLOT_HEIGHT + 24}
              stroke={activeBeam.color}
              strokeWidth={3}
              strokeDasharray="6 4"
            />
            {/* Comet Head */}
            <circle
              cx={activeBeam.cometX}
              cy={ARRAY_Y + SLOT_HEIGHT + 24}
              r={7}
              fill={activeBeam.color}
            />
            <circle
              cx={activeBeam.cometX}
              cy={ARRAY_Y + SLOT_HEIGHT + 24}
              r={14}
              stroke={activeBeam.color}
              strokeWidth={2}
              fill="none"
              opacity={0.6}
            />
          </svg>
        </div>
      )}

      {/* =================================================================== */}
      {/* PURPLE GHOST MEMORY TRACE (Act 5 & 6)                               */}
      {/* =================================================================== */}
      {isPurpleGhostVisible && (
        <div
          style={{
            position: "absolute",
            left: 0,
            top: isGhostSplit ? RIBBON_Y + 24 : RIBBON_Y,
            width: 1920,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: RIBBON_GAP,
            pointerEvents: "none",
            zIndex: 65,
            opacity: isGhostSplit ? 0.85 : 0.22,
          }}
        >
          {[2, 3, 4].map((v) => (
            <div
              key={`ghost-${v}`}
              style={{
                width: RIBBON_NODE_W,
                height: RIBBON_NODE_H,
                border: `2px dashed ${theme.purple}`,
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: fonts.mono,
                fontSize: 38,
                fontWeight: "bold",
                color: theme.purple,
                backgroundColor: "rgba(216, 180, 226, 0.08)",
              }}
            >
              {v}
            </div>
          ))}
          {/* Ghost Miss 5 */}
          <div
            style={{
              width: RIBBON_NODE_W,
              height: RIBBON_NODE_H,
              border: `2px dashed ${theme.warn}`,
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: fonts.mono,
              fontSize: 32,
              color: theme.warn,
              backgroundColor: "rgba(255, 118, 117, 0.08)",
            }}
          >
            ×5
          </div>
        </div>
      )}

      {/* DUPLICATE WORK HERO MOMENT (Act 6 F1725..1756)                      */}
      {isGhostSplit && (
        <div
          style={{
            position: "absolute",
            top: RIBBON_Y - 80,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            zIndex: 100,
          }}
        >
          <div
            style={{
              fontFamily: fonts.hand,
              fontSize: 36,
              color: theme.pivot,
              fontWeight: "bold",
              letterSpacing: 2,
              backgroundColor: "rgba(16, 50, 37, 0.95)",
              border: `2px solid ${theme.pivot}`,
              padding: "4px 24px",
              borderRadius: 8,
              boxShadow: "0 0 20px rgba(255, 209, 102, 0.5)",
            }}
          >
            SAME WORK ×2
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* ACTIVE SEQUENCE RIBBON                                              */}
      {/* =================================================================== */}
      {activeRibbon && (
        <div
          style={{
            position: "absolute",
            left: 0,
            top: activeRibbon.isDuplicateWorkSplit ? RIBBON_Y - 24 : RIBBON_Y,
            width: 1920,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: RIBBON_GAP,
            zIndex: 70,
          }}
        >
          {activeRibbon.nodes.map((val, idx) => (
            <React.Fragment key={`ribbon-node-${val}-${idx}`}>
              {idx > 0 && (
                <svg width={RIBBON_GAP} height={20}>
                  <path
                    d={`M 0 10 L ${RIBBON_GAP} 10`}
                    stroke={theme.good}
                    strokeWidth={3}
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              )}
              <div
                style={{
                  width: RIBBON_NODE_W,
                  height: RIBBON_NODE_H,
                  borderRadius: 12,
                  backgroundColor: "rgba(16, 50, 37, 0.98)",
                  border: `2.5px solid ${theme.good}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: fonts.mono,
                  fontSize: 40,
                  fontWeight: "bold",
                  color: theme.good,
                  boxShadow: "0 0 16px rgba(60, 229, 167, 0.45)",
                }}
              >
                {val}
              </div>
            </React.Fragment>
          ))}

          {/* Missing Ghost Node at end of ribbon */}
          {activeRibbon.missValue !== null && (
            <React.Fragment>
              <svg width={RIBBON_GAP} height={20}>
                <line
                  x1={0}
                  y1={10}
                  x2={RIBBON_GAP}
                  y2={10}
                  stroke={theme.warn}
                  strokeWidth={2.5}
                  strokeDasharray="4 4"
                />
              </svg>
              <div
                style={{
                  width: RIBBON_NODE_W,
                  height: RIBBON_NODE_H,
                  borderRadius: 12,
                  backgroundColor: "rgba(30, 20, 25, 0.9)",
                  border: `2px dashed ${theme.warn}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: fonts.mono,
                  fontSize: 34,
                  fontWeight: "bold",
                  color: theme.warn,
                  position: "relative",
                }}
              >
                <span>{activeRibbon.missValue}</span>
                {/* Red X over miss */}
                <svg
                  width={RIBBON_NODE_W}
                  height={RIBBON_NODE_H}
                  style={{ position: "absolute", left: 0, top: 0 }}
                >
                  <line x1={15} y1={15} x2={RIBBON_NODE_W - 15} y2={RIBBON_NODE_H - 15} stroke={theme.warn} strokeWidth={3} />
                  <line x1={RIBBON_NODE_W - 15} y1={15} x2={15} y2={RIBBON_NODE_H - 15} stroke={theme.warn} strokeWidth={3} />
                </svg>
              </div>
            </React.Fragment>
          )}
        </div>
      )}

      {/* =================================================================== */}
      {/* STATE STRIP: CURRENT LENGTH & BEST                                  */}
      {/* =================================================================== */}
      {frame >= 287 && frame < 3278 && (
        <div
          style={{
            position: "absolute",
            top: 780,
            left: "50%",
            transform: "translateX(-50%)",
            width: 720,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "rgba(16, 50, 37, 0.92)",
            border: `1.5px solid rgba(248, 246, 240, 0.3)`,
            borderRadius: 14,
            padding: "12px 32px",
            zIndex: 95,
          }}
        >
          {/* Current Length */}
          <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 16,
                color: theme.chalkText,
                letterSpacing: 1.5,
              }}
            >
              CURRENT LENGTH:
            </span>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 32,
                fontWeight: "bold",
                color: theme.pivot,
              }}
            >
              {currentLength}
            </span>
          </div>

          {/* Best Length */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 10,
              transform: `scale(${bestPulseScale})`,
            }}
          >
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 16,
                color: theme.chalkText,
                letterSpacing: 1.5,
              }}
            >
              BEST:
            </span>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 32,
                fontWeight: "bold",
                color: bestLength >= 6 ? theme.good : theme.pivot,
              }}
            >
              {bestLength}
            </span>
            {isNewBestPulse && (
              <span
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 20,
                  color: theme.good,
                  fontWeight: "bold",
                  marginLeft: 6,
                }}
              >
                NEW BEST!
              </span>
            )}
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* ACT 13: REPEATED-SEARCH INEFFICIENCY FINALE (F3278–F3521)           */}
      {/* =================================================================== */}
      {isAct13 && (
        <div style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 1080, pointerEvents: "none", zIndex: 110 }}>
          {/* FINAL BEST = 6 Capsule */}
          {isFinalBestCapsule && (
            <div
              style={{
                position: "absolute",
                top: 760,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                alignItems: "center",
                gap: 16,
                backgroundColor: "rgba(16, 50, 37, 0.98)",
                border: `2px solid ${theme.good}`,
                borderRadius: 14,
                padding: "10px 32px",
                boxShadow: "0 0 24px rgba(60, 229, 167, 0.4)",
              }}
            >
              <span style={{ fontFamily: fonts.mono, fontSize: 24, color: theme.chalkText, letterSpacing: 2 }}>
                FINAL BEST =
              </span>
              <span style={{ fontFamily: fonts.mono, fontSize: 44, fontWeight: "bold", color: theme.good }}>
                6
              </span>
              {isCorrectCheck && (
                <span style={{ fontFamily: fonts.mono, fontSize: 22, color: theme.good, fontWeight: "bold" }}>
                  ✓ CORRECT
                </span>
              )}
            </div>
          )}

          {/* Repeated Search Trails Residue Replay */}
          {isResidueReplay && (
            <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((sIdx) => (
                <line
                  key={`residue-trail-${sIdx}`}
                  x1={ARRAY_X_START}
                  y1={ARRAY_Y + SLOT_HEIGHT + 16 + sIdx * 6}
                  x2={ARRAY_X_START + TOTAL_ARRAY_WIDTH}
                  y2={ARRAY_Y + SLOT_HEIGHT + 16 + sIdx * 6}
                  stroke={sIdx % 2 === 0 ? theme.cyan : theme.pivot}
                  strokeWidth={2}
                  strokeDasharray="8 6"
                  opacity={0.22}
                />
              ))}
            </svg>
          )}

          {/* SAME ARRAY bracket under raw array */}
          {isSameArrayBracket && (
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: ARRAY_Y + SLOT_HEIGHT + 30,
                transform: "translateX(-50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span style={{ fontFamily: fonts.hand, fontSize: 34, color: theme.pivot, fontWeight: "bold", letterSpacing: 2 }}>
                SAME ARRAY
              </span>
              <span style={{ fontSize: 28, color: theme.warn }}>↻ ↻ ↻</span>
            </div>
          )}

          {/* REPEATED SEARCH Warning Badge */}
          {isRepeatedSearchLabel && (
            <div
              style={{
                position: "absolute",
                top: 240,
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "rgba(30, 20, 25, 0.95)",
                border: `2px solid ${theme.warn}`,
                borderRadius: 8,
                padding: "8px 24px",
                fontFamily: fonts.mono,
                fontSize: 26,
                fontWeight: "bold",
                color: theme.warn,
                letterSpacing: 2,
                boxShadow: "0 0 20px rgba(255, 118, 117, 0.45)",
              }}
            >
              REPEATED SEARCH ON EVERY STEP
            </div>
          )}
        </div>
      )}

      {/* =================================================================== */}
      {/* ACT 14: CODE EDITOR HANDOFF (F3522–F3592)                           */}
      {/* =================================================================== */}
      {isAct14 && (
        <div
          style={{
            position: "absolute",
            top: 280 + codeEditorRise,
            left: "50%",
            transform: "translateX(-50%)",
            width: 1000,
            height: 520,
            backgroundColor: "rgba(10, 32, 24, 0.96)",
            border: `2px solid ${theme.chalkLine}`,
            borderRadius: 14,
            opacity: codeEditorOpacity,
            padding: "24px 32px",
            boxShadow: "0 16px 48px rgba(0,0,0,0.7)",
            zIndex: 120,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Editor Title Bar */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, borderBottom: `1px solid rgba(248, 246, 240, 0.2)`, paddingBottom: 12 }}>
            <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: theme.warn }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: theme.pivot }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: theme.good }} />
            <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkDim, marginLeft: 16 }}>
              longest_consecutive_brute.py
            </span>
          </div>

          {/* Editor Body with Blinking Cursor */}
          <div style={{ flex: 1, paddingTop: 24, display: "flex", alignItems: "flex-start", gap: 12 }}>
            <span style={{ fontFamily: fonts.mono, fontSize: 22, color: theme.chalkDim }}>1</span>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontFamily: fonts.mono, fontSize: 24, color: theme.chalkText }}>
                def longestConsecutive(nums):
              </span>
              <span
                style={{
                  display: "inline-block",
                  width: 3,
                  height: 28,
                  backgroundColor: isCursorBlinking ? theme.pivot : "transparent",
                  marginLeft: 4,
                }}
              />
            </div>
          </div>

          {/* Bottom Editor Status */}
          <div style={{ borderTop: `1px solid rgba(248, 246, 240, 0.15)`, paddingTop: 10, display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.pivot }}>
              CODE EDITOR READY → SCENE 04
            </span>
            <span style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.chalkDim }}>
              Python 3 · UTF-8
            </span>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* KARAOKE CAPTIONS (Bottom Safe Zone: y: 960..1040)                   */}
      {/* =================================================================== */}
      <Captions words={captionWords} bottom={38} fontSize={38} maxWidth={1500} />
    </AbsoluteFill>
  );
};
