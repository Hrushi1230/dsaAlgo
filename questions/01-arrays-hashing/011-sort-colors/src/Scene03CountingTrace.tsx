/**
 * Scene03CountingTrace.tsx — Scene 03 · APPROACH 1: COUNTING TRACE
 * Sort Colors (LeetCode 75) · Pattern 01 — Arrays & Hashing
 *
 * Fully Audio-Synchronized Word-Wise Visual Animation:
 * - Direct visual continuity from Scene 02 (identical 10-slot Array V2 layout)
 * - 10-slot master input: [2, 1, 2, 0, 2, 1, 0, 1, 0, 2]
 * - Read-only orientation sweep
 * - 3 category counter cards: count[0], count[1], count[2]
 * - Pass 1 (Counting): Exact 10-step scan with animated chalk links
 * - Pass 2 (Rewrite): In-place overwrite of the 10 slots
 * - High color weight, bold contrast, zero guessing
 */

import React, { useMemo } from "react";
import {
  Audio,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { ChalkboardBackground, ChalkFilters, CHALK_FILTER_ID } from "../../../../kit/lib/chalk";
import { theme, fonts } from "../../../../kit/lib/theme";
import { ArrayTrackV2, ArrayValueV2, ArrayPartition, SemanticSlotState, RoughCurve, RoughBox } from "../../../../kit/components";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import syncData from "../sync/03-counting-trace.json";
import anchorsData from "../sync/03-counting-trace.anchors.json";

// Word-level caption timings
const captionWords: CaptionWord[] = (syncData.words || [])
  .map((w: any) => ({
    word: w.word,
    start: w.start_ms / 1000,
    end: w.end_ms / 1000,
  }))
  .filter((w) => w.word !== "");

// Raw input
const MASTER_INPUT = [2, 1, 2, 0, 2, 1, 0, 1, 0, 2];

// Geometry Constants (100% matched with Scene 02)
const CANVAS_WIDTH = 1920;
const CANVAS_HEIGHT = 1080;
const SLOT_WIDTH = 104;
const SLOT_HEIGHT = 100;
const SLOT_GAP = 14;
const NUM_SLOTS = 10;
const TOTAL_TRACK_WIDTH = NUM_SLOTS * SLOT_WIDTH + (NUM_SLOTS - 1) * SLOT_GAP; // 1166px
const TRACK_START_X = (CANVAS_WIDTH - TOTAL_TRACK_WIDTH) / 2; // 377px

const EASE = (t: number) =>
  t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

// Helper to look up anchor timing safely
const getAnchor = (id: string) => {
  const found = anchorsData.anchors.find((a: any) => a.id === id);
  if (!found) throw new Error(`Missing required anchor: ${id}`);
  return found;
};

export const Scene03CountingTrace: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Anchors
  const aStart = useMemo(() => getAnchor("S03_START"), []);
  const aCounting = useMemo(() => getAnchor("S03_COUNTING"), []);
  const aArray = useMemo(() => getAnchor("S03_ARRAY"), []);
  
  // Read pass anchors
  const readAnchors = useMemo(() => [
    getAnchor("S03_R0"), getAnchor("S03_R1"), getAnchor("S03_R2"), getAnchor("S03_R3"),
    getAnchor("S03_R4"), getAnchor("S03_R5"), getAnchor("S03_R6"), getAnchor("S03_R7"),
    getAnchor("S03_R8"), getAnchor("S03_R9")
  ], []);

  // Counters intro anchors
  const aNoMove = useMemo(() => getAnchor("S03_NO_MOVE"), []);
  const aFirstCount = useMemo(() => getAnchor("S03_FIRST_COUNT"), []);
  const aHow0 = useMemo(() => getAnchor("S03_HOW_MANY_0"), []);
  const aHow1 = useMemo(() => getAnchor("S03_HOW_MANY_1"), []);
  const aHow2 = useMemo(() => getAnchor("S03_HOW_MANY_2"), []);
  const aCountsZero = useMemo(() => getAnchor("S03_COUNTS_ZERO"), []);

  // Scan pass anchors
  const scanAnchors = useMemo(() => [
    { val: getAnchor("S03_SCAN0_VAL"), inc: getAnchor("S03_SCAN0_INC"), idx: 0, v: 2, c0: 0, c1: 0, c2: 1 },
    { val: getAnchor("S03_SCAN1_VAL"), inc: getAnchor("S03_SCAN1_INC"), idx: 1, v: 1, c0: 0, c1: 1, c2: 1 },
    { val: getAnchor("S03_SCAN2_VAL"), inc: getAnchor("S03_SCAN2_INC"), idx: 2, v: 2, c0: 0, c1: 1, c2: 2 },
    { val: getAnchor("S03_SCAN3_VAL"), inc: getAnchor("S03_SCAN3_INC"), idx: 3, v: 0, c0: 1, c1: 1, c2: 2 },
    { val: getAnchor("S03_SCAN4_VAL"), inc: getAnchor("S03_SCAN4_INC"), idx: 4, v: 2, c0: 1, c1: 1, c2: 3 },
    { val: getAnchor("S03_SCAN5_VAL"), inc: getAnchor("S03_SCAN5_INC"), idx: 5, v: 1, c0: 1, c1: 2, c2: 3 },
    { val: getAnchor("S03_SCAN6_VAL"), inc: getAnchor("S03_SCAN6_INC"), idx: 6, v: 0, c0: 2, c1: 2, c2: 3 },
    { val: getAnchor("S03_SCAN7_VAL"), inc: getAnchor("S03_SCAN7_INC"), idx: 7, v: 1, c0: 2, c1: 3, c2: 3 },
    { val: getAnchor("S03_SCAN8_VAL"), inc: getAnchor("S03_SCAN8_INC"), idx: 8, v: 0, c0: 3, c1: 3, c2: 3 },
    { val: getAnchor("S03_SCAN9_VAL"), inc: getAnchor("S03_SCAN9_INC"), idx: 9, v: 2, c0: 3, c1: 3, c2: 4 },
  ], []);

  // Final count confirmation
  const aFinalCounts = useMemo(() => getAnchor("S03_FINAL_COUNTS"), []);
  const aFinal0 = useMemo(() => getAnchor("S03_FINAL_0"), []);
  const aFinal1 = useMemo(() => getAnchor("S03_FINAL_1"), []);
  const aFinal2 = useMemo(() => getAnchor("S03_FINAL_2"), []);

  // Rewrite anchors
  const aRewrite = useMemo(() => getAnchor("S03_REWRITE"), []);
  const aSameArray = useMemo(() => getAnchor("S03_SAME_ARRAY"), []);
  const aWrite0 = useMemo(() => getAnchor("S03_WRITE_0"), []);
  const aWrite1 = useMemo(() => getAnchor("S03_WRITE_1"), []);
  const aWrite2 = useMemo(() => getAnchor("S03_WRITE_2"), []);

  // Output read anchors
  const aResult = useMemo(() => getAnchor("S03_RESULT"), []);
  const outAnchors = useMemo(() => [
    getAnchor("S03_OUT0A"), getAnchor("S03_OUT0B"), getAnchor("S03_OUT0C"),
    getAnchor("S03_OUT1A"), getAnchor("S03_OUT1B"), getAnchor("S03_OUT1C"),
    getAnchor("S03_OUT2A"), getAnchor("S03_OUT2B"), getAnchor("S03_OUT2C"), getAnchor("S03_OUT2D")
  ], []);

  const aSorted = useMemo(() => getAnchor("S03_SORTED"), []);
  const aSimple = useMemo(() => getAnchor("S03_SIMPLE"), []);
  const aTakeaway = useMemo(() => getAnchor("S03_COUNT_THEN_REWRITE"), []);

  // Current counts derivation
  const currentCounts = useMemo(() => {
    if (frame < aCountsZero.startFrame) {
      return { c0: 0, c1: 0, c2: 0, activeCat: -1 };
    }
    for (let i = scanAnchors.length - 1; i >= 0; i--) {
      const s = scanAnchors[i];
      if (frame >= s.inc.startFrame) {
        return { c0: s.c0, c1: s.c1, c2: s.c2, activeCat: s.v };
      }
    }
    return { c0: 0, c1: 0, c2: 0, activeCat: -1 };
  }, [frame, aCountsZero.startFrame, scanAnchors]);

  // Read pass active index (Act 1)
  const activeReadIdx = useMemo(() => {
    if (frame < readAnchors[0].startFrame || frame > readAnchors[9].endFrameExclusive) {
      return -1;
    }
    for (let i = 0; i < 10; i++) {
      const a = readAnchors[i];
      if (frame >= a.startFrame && frame < a.endFrameExclusive) {
        return i;
      }
    }
    return -1;
  }, [frame, readAnchors]);

  // Scan pass active index (Act 3)
  const activeScanStep = useMemo(() => {
    if (frame < scanAnchors[0].val.startFrame || frame > scanAnchors[9].inc.endFrameExclusive) {
      return null;
    }
    for (let i = 0; i < 10; i++) {
      const s = scanAnchors[i];
      if (frame >= s.val.startFrame && frame < s.inc.endFrameExclusive) {
        const isIncrementing = frame >= s.inc.startFrame;
        return { ...s, stepIndex: i, isIncrementing };
      }
    }
    return null;
  }, [frame, scanAnchors]);

  // Output read active index (Act 6)
  const activeOutIdx = useMemo(() => {
    if (frame < outAnchors[0].startFrame || frame > outAnchors[9].endFrameExclusive) {
      return -1;
    }
    for (let i = 0; i < 10; i++) {
      const a = outAnchors[i];
      if (frame >= a.startFrame && frame < a.endFrameExclusive) {
        return i;
      }
    }
    return -1;
  }, [frame, outAnchors]);

  // Rewrite state derivation: which slots have been rewritten to sorted values?
  const arrayState = useMemo(() => {
    const arr = [...MASTER_INPUT];
    if (frame >= aWrite0.startFrame) {
      arr[0] = 0;
      arr[1] = 0;
      arr[2] = 0;
    }
    if (frame >= aWrite1.startFrame) {
      arr[3] = 1;
      arr[4] = 1;
      arr[5] = 1;
    }
    if (frame >= aWrite2.startFrame) {
      arr[6] = 2;
      arr[7] = 2;
      arr[8] = 2;
      arr[9] = 2;
    }
    return arr;
  }, [frame, aWrite0.startFrame, aWrite1.startFrame, aWrite2.startFrame]);

  // Vertical placement of array track
  // In Act 1-2, sits comfortably at Y: 320.
  // When counters appear in Act 2-5, transitions to Y: 240.
  const arrayTrackY = useMemo(() => {
    if (frame < aFirstCount.startFrame) return 320;
    if (frame < aFirstCount.startFrame + 30) {
      return interpolate(frame, [aFirstCount.startFrame, aFirstCount.startFrame + 30], [320, 240], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
    }
    return 240;
  }, [frame, aFirstCount.startFrame]);

  // Counter visibility and opacity
  const countersOpacity = useMemo(() => {
    if (frame < aFirstCount.startFrame) return 0;
    return interpolate(frame, [aFirstCount.startFrame, aFirstCount.startFrame + 20], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
  }, [frame, aFirstCount.startFrame]);

  // Color theme helpers
  const getValueTheme = (val: number) => {
    if (val === 0) return { label: "0", color: theme.warn, bg: "rgba(255, 118, 117, 0.16)", border: theme.warn };
    if (val === 1) return { label: "1", color: theme.chalkText, bg: "rgba(248, 246, 240, 0.10)", border: "rgba(248, 246, 240, 0.85)" };
    return { label: "2", color: theme.cyan, bg: "rgba(92, 225, 230, 0.16)", border: theme.cyan };
  };

  const elements = useMemo(() => {
    return arrayState.map((val, idx) => {
      const displayVal = val;

      const isRewritten =
        (frame >= aWrite0.startFrame && idx <= 2) ||
        (frame >= aWrite1.startFrame && idx >= 3 && idx <= 5) ||
        (frame >= aWrite2.startFrame && idx >= 6);
      const isSlotActive = (activeScanStep?.idx === idx) || (activeReadIdx === idx) || (activeOutIdx === idx);

      let slotState: SemanticSlotState = "neutral";
      if (isSlotActive) slotState = "active";
      else if (isRewritten) slotState = "sorted";

      const stroke = isSlotActive
        ? theme.pivot
        : isRewritten
        ? val === 0
          ? theme.warn
          : val === 1
          ? "rgba(248, 246, 240, 0.85)"
          : theme.cyan
        : val === 0
        ? "rgba(255, 118, 117, 0.65)"
        : val === 1
        ? "rgba(248, 246, 240, 0.65)"
        : "rgba(92, 225, 230, 0.65)";

      const fill = isSlotActive
        ? "rgba(255, 209, 102, 0.22)"
        : val === 0
        ? "rgba(255, 118, 117, 0.16)"
        : val === 1
        ? "rgba(248, 246, 240, 0.10)"
        : "rgba(92, 225, 230, 0.16)";

      return {
        value: displayVal,
        slotState,
        valueState: isRewritten ? ("sorted" as SemanticSlotState) : undefined,
        stroke,
        fill,
      };
    });
  }, [arrayState, frame, aWrite0.startFrame, aWrite1.startFrame, aWrite2.startFrame, activeScanStep, activeReadIdx, activeOutIdx]);

  const pointers = useMemo(() => {
    const list = [];
    if (activeScanStep) {
      list.push({
        id: "scan",
        label: "i",
        index: activeScanStep.idx,
        color: theme.pivot,
      });
    } else if (activeReadIdx >= 0) {
      list.push({
        id: "read",
        label: "scan",
        index: activeReadIdx,
        color: theme.chalkDim,
      });
    } else if (activeOutIdx >= 0) {
      list.push({
        id: "write",
        label: "write",
        index: activeOutIdx,
        color: theme.good,
      });
    }
    return list;
  }, [activeScanStep, activeReadIdx, activeOutIdx]);

  const partitions = useMemo(() => {
    if (frame < aRewrite.startFrame) return undefined;
    const list: ArrayPartition[] = [];
    if (frame >= aWrite0.startFrame) {
      list.push({
        startIndex: 0,
        endIndex: 2,
        label: "0s (count[0] = 3)",
        color: theme.warn,
        bracketPlacement: "top",
      });
    }
    if (frame >= aWrite1.startFrame) {
      list.push({
        startIndex: 3,
        endIndex: 5,
        label: "1s (count[1] = 3)",
        color: theme.chalkText,
        bracketPlacement: "top",
      });
    }
    if (frame >= aWrite2.startFrame) {
      list.push({
        startIndex: 6,
        endIndex: 9,
        label: "2s (count[2] = 4)",
        color: theme.cyan,
        bracketPlacement: "top",
      });
    }
    return list.length > 0 ? list : undefined;
  }, [frame, aRewrite.startFrame, aWrite0.startFrame, aWrite1.startFrame, aWrite2.startFrame]);

  // Dynamic Chalk Scan Connection Curve (Pass 1 beam from slot down to counter card)
  const scanCurvePoints = useMemo<[number, number][] | null>(() => {
    if (!activeScanStep) return null;
    const slotCenterX = TRACK_START_X + activeScanStep.idx * (SLOT_WIDTH + SLOT_GAP) + SLOT_WIDTH / 2;
    // Card 0: 665, Card 1: 945, Card 2: 1225
    const cardTopCenters = [665, 945, 1225];
    const targetCardX = cardTopCenters[activeScanStep.v];
    const targetCardY = 520 + 55;

    // Offset start from bottom corner toward target to prevent colliding with pointer i
    const curveStartX = targetCardX >= slotCenterX ? slotCenterX + 32 : slotCenterX - 32;
    const curveStartY = arrayTrackY + 74 + SLOT_HEIGHT + 2;

    const dx = targetCardX - curveStartX;
    const dy = targetCardY - curveStartY;

    const p1: [number, number] = [curveStartX + dx * 0.25, curveStartY + dy * 0.45 + 15];
    const p2: [number, number] = [curveStartX + dx * 0.75, targetCardY - 20];

    return [
      [curveStartX, curveStartY],
      p1,
      p2,
      [targetCardX, targetCardY],
    ];
  }, [activeScanStep, arrayTrackY]);

  const scanCurveColor = useMemo(() => {
    if (!activeScanStep) return theme.pivot;
    if (activeScanStep.v === 0) return theme.warn;
    if (activeScanStep.v === 1) return theme.chalkText;
    return theme.cyan;
  }, [activeScanStep]);

  return (
    <div
      style={{
        width: CANVAS_WIDTH,
        height: CANVAS_HEIGHT,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#103426",
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      {/* Audio Element */}
      <Audio src={staticFile("audio/011/03-counting-trace.mp3")} />

      {/* ============================================================ */}
      {/* 1. TOP HEADER ZONE */}
      {/* ============================================================ */}
      <div
        style={{
          position: "absolute",
          top: 45,
          left: TRACK_START_X,
          width: TOTAL_TRACK_WIDTH,
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
              background: "rgba(0,0,0,0.45)",
              border: "1.5px solid rgba(255,253,247,0.4)",
              fontFamily: "var(--font-mono, monospace)",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: "#FFFDF7",
            }}
          >
            QUESTION 011 · SORT COLORS
          </div>
          {frame >= 88 && (
            <div
              style={{
                padding: "6px 16px",
                borderRadius: 6,
                background: "rgba(255, 209, 102, 0.2)",
                border: "2px solid #FFD166",
                fontFamily: "var(--font-mono, monospace)",
                fontSize: 14,
                fontWeight: 800,
                letterSpacing: "0.1em",
                color: "#FFD166",
              }}
            >
              APPROACH 1 · COUNTING SORT
            </div>
          )}
        </div>

        {frame >= aFirstCount.startFrame && (
          <div
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: 13,
              fontWeight: 700,
              color: frame < aRewrite.startFrame ? "#FFD166" : "#6EE7B7",
              letterSpacing: "0.06em",
              padding: "4px 12px",
              borderRadius: 4,
              background: frame < aRewrite.startFrame ? "rgba(255, 209, 102, 0.15)" : "rgba(110, 231, 183, 0.15)",
              border: frame < aRewrite.startFrame ? "1px solid #FFD166" : "1px solid #6EE7B7",
            }}
          >
            {frame < aRewrite.startFrame ? "PASS 1: FREQUENCY COUNT" : "PASS 2: IN-PLACE REWRITE"}
          </div>
        )}
      </div>

      {/* ============================================================ */}
      {/* 0. CENTER-STAGE HERO INTRO CARD (F0 .. F88)                 */}
      {/* F0..F63: "Let's start with the simpler approach,"           */}
      {/* F63..F75: "counting." -> Giant golden COUNTING hero pop     */}
      {/* F75..F88: Smooth glide-up docking into top-center header    */}
      {/* ============================================================ */}
      {frame < 88 && (
        <div
          style={{
            position: "absolute",
            top: interpolate(frame, [72, 88], [400, 45], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE }),
            left: interpolate(frame, [72, 88], [(CANVAS_WIDTH - 660) / 2, TRACK_START_X + 280], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE }),
            width: interpolate(frame, [72, 88], [660, 260], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE }),
            transform: `scale(${
              frame < aCounting.startFrame
                ? interpolate(frame, [0, 24], [0.92, 1.0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE })
                : interpolate(frame, [aCounting.startFrame, aCounting.startFrame + 8], [0.94, 1.06], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
            })`,
            padding: interpolate(frame, [72, 88], [28, 6], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
            borderRadius: interpolate(frame, [72, 88], [18, 6], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
            background: frame >= aCounting.startFrame ? "linear-gradient(180deg, #184e38 0%, #0c2b1f 100%)" : "rgba(0,0,0,0.55)",
            border: frame >= aCounting.startFrame ? "3px solid #FFD166" : "2px solid rgba(255,253,247,0.35)",
            boxShadow: frame >= aCounting.startFrame ? "0 0 40px rgba(255, 209, 102, 0.4), 0 12px 36px rgba(0,0,0,0.7)" : "0 10px 30px rgba(0,0,0,0.5)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 30,
          }}
        >
          {frame < 72 ? (
            <>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 14,
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  color: theme.pivot,
                  marginBottom: 8,
                  textTransform: "uppercase",
                }}
              >
                APPROACH 1 · THE INTUITIVE BASELINE
              </div>

              {frame < aCounting.startFrame ? (
                <div
                  style={{
                    fontFamily: fonts.display,
                    fontSize: 32,
                    fontWeight: 800,
                    color: theme.chalkText,
                    textAlign: "center",
                    textShadow: "0 2px 10px rgba(0,0,0,0.8)",
                  }}
                >
                  Let's start with the simpler approach...
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <div
                    style={{
                      fontFamily: fonts.display,
                      fontSize: 60,
                      fontWeight: 900,
                      color: theme.pivot,
                      letterSpacing: "0.06em",
                      textShadow: "0 0 35px rgba(255, 209, 102, 0.8), 0 4px 14px rgba(0,0,0,0.9)",
                    }}
                  >
                    COUNTING
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 14,
                      color: theme.good,
                      letterSpacing: "0.08em",
                      fontWeight: 700,
                    }}
                  >
                    FREQUENCY COUNT &rarr; IN-PLACE OVERWRITE
                  </div>
                </div>
              )}
            </>
          ) : (
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 13,
                fontWeight: 800,
                color: theme.pivot,
                letterSpacing: "0.08em",
                textAlign: "center",
              }}
            >
              APPROACH 1 · COUNTING SORT
            </div>
          )}
        </div>
      )}

      {/* ============================================================ */}
      {/* 2. ARRAY TRACK V2 (Reveals on spoken word "array" at F101)   */}
      {/* ============================================================ */}
      {frame >= 101 && (
        <div
          style={{
            position: "absolute",
            top: arrayTrackY,
            left: TRACK_START_X,
            width: TOTAL_TRACK_WIDTH,
            opacity: interpolate(frame, [101, 109], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: EASE,
            }),
            transform: `scale(${interpolate(frame, [101, 114], [0.96, 1.0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: EASE,
            })})`,
            zIndex: 10,
          }}
        >
        {/* Track Label */}
        <div
          style={{
            marginBottom: frame >= aRewrite.startFrame ? 38 : 12,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: "0.12em",
              color: "#6EE7B7",
              textShadow: "0 0 10px rgba(110,231,183,0.4)",
            }}
          >
            INPUT ARRAY &nbsp;
            <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,253,247,0.7)" }}>
              nums [10 elements]
            </span>
          </div>

          {frame >= aNoMove.startFrame && frame < aFirstCount.startFrame && (
            <div
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: 12,
                fontWeight: 700,
                color: "#FFD166",
                letterSpacing: "0.08em",
                background: "rgba(255, 209, 102, 0.15)",
                padding: "3px 10px",
                borderRadius: 4,
                border: "1px solid #FFD166",
              }}
            >
              DON'T MOVE YET · SCAN FIRST
            </div>
          )}

          {frame >= aRewrite.startFrame && (
            <div
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: 12,
                fontWeight: 700,
                color: "#FFD166",
                letterSpacing: "0.08em",
                background: "rgba(255, 209, 102, 0.15)",
                padding: "3px 10px",
                borderRadius: 4,
                border: "1px solid #FFD166",
              }}
            >
              IN-PLACE REWRITE IN PROGRESS
            </div>
          )}
        </div>

        {/* ArrayTrackV2 System */}
        <ArrayTrackV2
          elements={elements}
          slotWidth={SLOT_WIDTH}
          slotHeight={SLOT_HEIGHT}
          gap={SLOT_GAP}
          showIndices={frame < aRewrite.startFrame}
          indexPlacement="top"
          pointers={pointers}
          pointerPlacement="bottom"
          partitions={partitions}
          renderValue={(item, rect) => {
            if (item.value === "" || item.value === undefined) return null;
            const valNum = Number(item.value);
            const color = valNum === 0 ? theme.warn : valNum === 1 ? theme.chalkText : theme.cyan;
            const isSlotActive = (activeScanStep?.idx === rect.index) || (activeReadIdx === rect.index) || (activeOutIdx === rect.index);
            const scale = isSlotActive ? 1.12 : 1.0;

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
      )}

      {/* Dynamic Chalk Scan Connection Curve (Pass 1) */}
      {scanCurvePoints && activeScanStep && (
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 12 }}>
          <RoughCurve
            points={scanCurvePoints}
            width={CANVAS_WIDTH}
            height={CANVAS_HEIGHT}
            startFrame={activeScanStep.val.startFrame}
            durationInFrames={18}
            stroke={scanCurveColor}
            strokeWidth={3.5}
            seed={activeScanStep.idx * 17 + 1}
          />
        </div>
      )}

      {/* ============================================================ */}
      {/* 3. THREE CHALK COUNTER CARDS (Pass 1 Core Visualization) */}
      {/* ============================================================ */}
      {frame >= aFirstCount.startFrame && (
        <div
          style={{
            position: "absolute",
            top: 520,
            left: (CANVAS_WIDTH - 840) / 2, // 540px
            width: 840,
            opacity: countersOpacity,
            zIndex: 15,
          }}
        >
          {/* Counters Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: 14,
                fontWeight: 800,
                letterSpacing: "0.12em",
                color: "#FFD166",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              FREQUENCY COUNTERS
              <span style={{ fontSize: 12, fontWeight: 500, color: "rgba(255,253,247,0.6)" }}>
                [count0, count1, count2] · Extra Space: O(1)
              </span>
            </div>

            {frame >= aCountsZero.startFrame && (
              <div
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#6EE7B7",
                }}
              >
                INITIALIZED AT ZERO
              </div>
            )}
          </div>

          {/* 3 Counter Cards (Built with authentic @dsa/kit RoughBox) */}
          <div style={{ display: "flex", gap: 30, justifyContent: "center" }}>
            {[
              { cat: 0, label: "ZEROES [0]", count: currentCounts.c0, color: theme.warn, revealFrame: aHow0.startFrame, target: 3, seed: 101 },
              { cat: 1, label: "ONES [1]", count: currentCounts.c1, color: theme.chalkText, revealFrame: aHow1.startFrame, target: 3, seed: 102 },
              { cat: 2, label: "TWOS [2]", count: currentCounts.c2, color: theme.cyan, revealFrame: aHow2.startFrame, target: 4, seed: 103 },
            ].map((c) => {
              const isCardRevealed = frame >= c.revealFrame;
              if (!isCardRevealed) {
                return (
                  <div
                    key={c.cat}
                    style={{
                      width: 260,
                      height: 154,
                      visibility: "hidden",
                    }}
                  />
                );
              }

              const isCatActive =
                activeScanStep?.isIncrementing && activeScanStep?.v === c.cat;
              const isConfirmed =
                (frame >= aFinal0.startFrame && c.cat === 0) ||
                (frame >= aFinal1.startFrame && c.cat === 1) ||
                (frame >= aFinal2.startFrame && c.cat === 2);

              const bumpScale = isCatActive ? 1.08 : 1.0;

              const cardStroke = isCatActive
                ? theme.pivot
                : isConfirmed
                ? theme.good
                : c.color;

              return (
                <div
                  key={c.cat}
                  style={{
                    position: "relative",
                    width: 260,
                    height: 154,
                    transform: `scale(${bumpScale})`,
                    transformOrigin: "center center",
                  }}
                >
                  {/* Authentic Kit RoughBox Frame */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      pointerEvents: "none",
                      background: "rgba(10, 28, 20, 0.85)",
                      borderRadius: 10,
                      overflow: "hidden",
                    }}
                  >
                    <RoughBox
                      width={260}
                      height={154}
                      startFrame={c.revealFrame}
                      durationInFrames={18}
                      stroke={cardStroke}
                      strokeWidth={isCatActive ? 3.5 : 2.5}
                      fill={isCatActive ? "rgba(255, 209, 102, 0.12)" : `${c.color}15`}
                      seed={c.seed}
                    />
                  </div>

                  {/* Card Content */}
                  <div
                    style={{
                      position: "relative",
                      zIndex: 2,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                      padding: "16px 20px",
                    }}
                  >
                    {/* Category Header */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 14,
                          fontWeight: 800,
                          color: c.color,
                          letterSpacing: "0.08em",
                          filter: `url(#${CHALK_FILTER_ID})`,
                        }}
                      >
                        {c.label}
                      </div>
                      <div
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 11,
                          fontWeight: 700,
                          padding: "2px 8px",
                          borderRadius: 4,
                          background: `${c.color}25`,
                          color: c.color,
                          border: `1px solid ${c.color}66`,
                        }}
                      >
                        VAL: {c.cat}
                      </div>
                    </div>

                    {/* Big Count Number */}
                    <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                      <span
                        style={{
                          fontFamily: fonts.display,
                          fontSize: 56,
                          fontWeight: 900,
                          color: isCatActive ? theme.pivot : isConfirmed ? theme.good : theme.chalkText,
                          filter: `url(#${CHALK_FILTER_ID})`,
                        }}
                      >
                        {frame < aCountsZero.startFrame ? "—" : c.count}
                      </span>
                      <span
                        style={{
                          fontFamily: fonts.hand,
                          fontSize: 18,
                          color: theme.chalkDim,
                        }}
                      >
                        items counted
                      </span>
                    </div>

                    {/* Target Range hint */}
                    <div
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 11,
                        fontWeight: 700,
                        color: isConfirmed ? theme.good : theme.chalkDim,
                        letterSpacing: "0.06em",
                      }}
                    >
                      {frame < aRewrite.startFrame
                        ? `CATEGORY ${c.cat} TALLY`
                        : c.cat === 0
                        ? `WRITES TO INDICES [0..2]`
                        : c.cat === 1
                        ? `WRITES TO INDICES [3..5]`
                        : `WRITES TO INDICES [6..9]`}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 4. PASS 2 REWRITE EXPLANATION & SUMMARY CARDS (Y: 690 .. 830) */}
      {/* ============================================================ */}
      {/* ============================================================ */}
      {/* 4. PASS 2 REWRITE EXPLANATION & SUMMARY CARDS (Y: 700 .. 772) */}
      {/* ============================================================ */}
      {frame >= aRewrite.startFrame && (
        <div
          style={{
            position: "absolute",
            top: 700,
            left: TRACK_START_X,
            width: TOTAL_TRACK_WIDTH,
            height: 72,
            zIndex: 18,
          }}
        >
          {/* Authentic Kit RoughBox Frame */}
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "rgba(10, 28, 20, 0.88)", borderRadius: 10, overflow: "hidden" }}>
            <RoughBox
              width={TOTAL_TRACK_WIDTH}
              height={72}
              startFrame={aRewrite.startFrame}
              durationInFrames={18}
              stroke={frame >= aSorted.startFrame ? theme.good : theme.pivot}
              strokeWidth={2.5}
              seed={88}
            />
          </div>

          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 24px",
              height: "100%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  padding: "4px 12px",
                  borderRadius: 4,
                  background: "rgba(255, 209, 102, 0.2)",
                  border: `1px solid ${theme.pivot}`,
                  fontFamily: fonts.mono,
                  fontSize: 13,
                  fontWeight: 800,
                  color: theme.pivot,
                  letterSpacing: "0.08em",
                }}
              >
                PASS 2
              </div>
              <div>
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    fontWeight: 800,
                    color: theme.pivot,
                    letterSpacing: "0.08em",
                    filter: `url(#${CHALK_FILTER_ID})`,
                  }}
                >
                  SEQUENTIAL REWRITE OF SAME ARRAY
                </div>
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 13,
                    fontWeight: 600,
                    color: "rgba(255,253,247,0.8)",
                    marginTop: 3,
                  }}
                >
                  Write 3 zeroes [0..2] &rarr; Write 3 ones [3..5] &rarr; Write 4 twos [6..9]
                </div>
              </div>
            </div>

            <div
              style={{
                padding: "6px 14px",
                borderRadius: 4,
                background: frame >= aSorted.startFrame ? "rgba(110, 231, 183, 0.2)" : "rgba(255, 209, 102, 0.15)",
                border: `1.5px solid ${frame >= aSorted.startFrame ? theme.good : theme.pivot}`,
                fontFamily: fonts.mono,
                fontSize: 13,
                fontWeight: 800,
                color: frame >= aSorted.startFrame ? theme.good : theme.pivot,
                letterSpacing: "0.06em",
              }}
            >
              {frame >= aSorted.startFrame ? "✓ SORTED IN-PLACE" : "REWRITING IN-PLACE"}
            </div>
          </div>
        </div>
      )}

      {/* Final Takeaway Banner (F2776 .. F2857) */}
      {frame >= aSimple.startFrame && (
        <div
          style={{
            position: "absolute",
            top: 790,
            left: (CANVAS_WIDTH - 640) / 2,
            width: 640,
            height: 52,
            zIndex: 25,
          }}
        >
          {/* Authentic Kit RoughBox Frame */}
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "rgba(10, 28, 20, 0.92)", borderRadius: 10, overflow: "hidden" }}>
            <RoughBox
              width={640}
              height={52}
              startFrame={aSimple.startFrame}
              durationInFrames={18}
              stroke={theme.good}
              strokeWidth={2.5}
              fill="rgba(110, 231, 183, 0.1)"
              seed={99}
            />
          </div>

          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 16,
              height: "100%",
              padding: "0 20px",
            }}
          >
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 15,
                fontWeight: 900,
                letterSpacing: "0.1em",
                color: theme.chalkText,
              }}
            >
              THE CORE IDEA:
            </span>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 15,
                fontWeight: 800,
                letterSpacing: "0.08em",
                color: theme.pivot,
              }}
            >
              1. FIRST COUNT
            </span>
            <span style={{ color: "rgba(255,253,247,0.5)" }}>&rarr;</span>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 15,
                fontWeight: 800,
                letterSpacing: "0.08em",
                color: theme.good,
              }}
            >
              2. THEN REWRITE
            </span>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 5. CAPTIONS ZONE */}
      {/* ============================================================ */}
      <Captions words={captionWords} />
    </div>
  );
};
