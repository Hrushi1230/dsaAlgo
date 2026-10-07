/**
 * Scene03Method1Trace.tsx — Scene 03 · Method 1 Full Simulation Trace
 * Spiral Matrix (LeetCode 54) · Pattern 01 — Arrays & Hashing
 *
 * Implements the verified Method 1 simulation on the 5x6 master testcase:
 * - 100% Kit Components: MeshGrid, RoughBox, Captions, ChalkboardBackground, ChalkFilters
 * - Total Duration: 5,124 frames @ 30fps (170.800s) strictly from sync/03-method1-trace.json
 * - All 38 Anchors mapped from sync/03-method1-trace.anchors.json
 * - Zero-Collision compliant vertical distribution
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
import { EASE } from "../../../../kit/lib/anim";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { MeshGrid } from "../../../../kit/components/MeshGrid";
import { RoughBox } from "../../../../kit/components/RoughBox";
import syncData from "../sync/03-method1-trace.json";

// ---------------------------------------------------------------------------
// 5x6 Master Testcase Values
// ---------------------------------------------------------------------------
const MATRIX_VALUES = [
  [ 1,  2,  3,  4,  5,  6],
  [ 7,  8,  9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
];

// Ordered sequence of all 30 cells in spiral order: [val, r, c, visitFrame]
interface CellStep {
  val: number;
  r: number;
  c: number;
  frame: number;
}

const SPIRAL_STEPS: CellStep[] = [
  // Top Row (Sweep 1: Right)
  { val: 1,  r: 0, c: 0, frame: 78 },
  { val: 2,  r: 0, c: 1, frame: 242 },
  { val: 3,  r: 0, c: 2, frame: 270 },
  { val: 4,  r: 0, c: 3, frame: 297 },
  { val: 5,  r: 0, c: 4, frame: 324 },
  { val: 6,  r: 0, c: 5, frame: 352 },
  // Right Column (Sweep 2: Down)
  { val: 12, r: 1, c: 5, frame: 654 },
  { val: 18, r: 2, c: 5, frame: 700 },
  { val: 24, r: 3, c: 5, frame: 745 },
  { val: 30, r: 4, c: 5, frame: 790 },
  // Bottom Row (Sweep 3: Left)
  { val: 29, r: 4, c: 4, frame: 1091 },
  { val: 28, r: 4, c: 3, frame: 1130 },
  { val: 27, r: 4, c: 2, frame: 1169 },
  { val: 26, r: 4, c: 1, frame: 1208 },
  { val: 25, r: 4, c: 0, frame: 1247 },
  // Left Column (Sweep 4: Up)
  { val: 19, r: 3, c: 0, frame: 1524 },
  { val: 13, r: 2, c: 0, frame: 1596 },
  { val: 7,  r: 1, c: 0, frame: 1669 },
  // Inner Top (Sweep 5: Right)
  { val: 8,  r: 1, c: 1, frame: 2572 },
  { val: 9,  r: 1, c: 2, frame: 2604 },
  { val: 10, r: 1, c: 3, frame: 2636 },
  { val: 11, r: 1, c: 4, frame: 2669 },
  // Inner Right (Sweep 6: Down)
  { val: 17, r: 2, c: 4, frame: 2954 },
  { val: 23, r: 3, c: 4, frame: 3022 },
  // Inner Bottom (Sweep 7: Left)
  { val: 22, r: 3, c: 3, frame: 3336 },
  { val: 21, r: 3, c: 2, frame: 3370 },
  { val: 20, r: 3, c: 1, frame: 3403 },
  // Inner Left (Sweep 8: Up)
  { val: 14, r: 2, c: 1, frame: 3667 },
  // Innermost Sweep (Sweep 9: Right)
  { val: 15, r: 2, c: 2, frame: 3965 },
  { val: 16, r: 2, c: 3, frame: 4035 },
];

// Caption normalization
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => {
  let word = w.word;
  if (word === "1.") word = "1.";
  if (word === "6.") word = "6.";
  if (word === "30.") word = "30.";
  if (word === "25.") word = "25.";
  if (word === "7.") word = "7.";
  if (word === "11.") word = "11.";
  if (word === "23.") word = "23.";
  if (word === "20.") word = "20.";
  if (word === "14.") word = "14.";
  if (word === "16.") word = "16.";
  if (word.toLowerCase() === "method") word = "Method";
  return {
    word,
    start: w.start_ms / 1000,
    end: w.end_ms / 1000,
  };
});

export const Scene03Method1Trace: React.FC = () => {
  const frame = useCurrentFrame();

  // Grid dimensions
  const rows = 5;
  const cols = 6;
  const cellWidth = 104;
  const cellHeight = 82;
  const gridWidth = cols * cellWidth;   // 624px
  const gridHeight = rows * cellHeight; // 410px

  const rulerWidth = 80;
  const gridLeft = 120;
  const gridTop = 130; // Left stage layout (X: 120..824, Y: 130..540)

  // Calculate current cell index based on frame
  const currentStepIdx = useMemo(() => {
    let idx = 0;
    for (let i = 0; i < SPIRAL_STEPS.length; i++) {
      if (frame >= SPIRAL_STEPS[i].frame) {
        idx = i;
      } else {
        break;
      }
    }
    return idx;
  }, [frame]);

  const currentStep = SPIRAL_STEPS[currentStepIdx];

  // Accumulated answers list
  const accumulatedValues = useMemo(() => {
    return SPIRAL_STEPS.slice(0, currentStepIdx + 1).map((s) => s.val);
  }, [currentStepIdx]);

  // Current direction: 0: R, 1: D, 2: L, 3: U
  const currentDir = useMemo(() => {
    if (frame < 524) return 0;   // R
    if (frame < 965) return 1;   // D
    if (frame < 1432) return 2;  // L
    if (frame < 2285) return 3;  // U
    if (frame < 2844) return 0;  // R
    if (frame < 3217) return 1;  // D
    if (frame < 3572) return 2;  // L
    if (frame < 3877) return 3;  // U
    return 0;                    // R
  }, [frame]);

  // Out of bounds ghost cells
  const isAt6Out = frame >= 367 && frame < 524;
  const isAt30Out = frame >= 799 && frame < 965;
  const isAt25Out = frame >= 1265 && frame < 1432;

  // Visited collisions
  const isCell1Warning = frame >= 1917 && frame < 2285;
  const isCell12Warning = frame >= 2694 && frame < 2844;
  const isCell29Warning = frame >= 3041 && frame < 3217;
  const isCell19Warning = frame >= 3418 && frame < 3572;
  const isCell8Warning = frame >= 3743 && frame < 3877;

  // Probes inside matrix
  const isProbeUpAt7 = frame >= 1796 && frame < 2285;
  const isProbeRightAt11 = frame >= 2694 && frame < 2844;
  const isProbeDownAt23 = frame >= 3041 && frame < 3217;
  const isProbeLeftAt20 = frame >= 3418 && frame < 3572;
  const isProbeUpAt14 = frame >= 3743 && frame < 3877;

  // Completed all 30 cells
  const isCompletedAll = frame >= 4127;
  const isSummaryPhase = frame >= 4613 && frame < 5041;
  const isHandoffPhase = frame >= 5041;

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
      <ChalkboardBackground />
      <ChalkFilters />

      {/* Audio VO */}
      <Audio src={staticFile("audio/015/scence03.mp3")} />

      {/* =====================================================================
          TOP HEADER BAR (Course Branding & Continuity: Y: 28..80)
         ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 26,
          left: 64,
          right: 64,
          height: 52,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 30,
        }}
      >
        {/* Left: Pattern Tag */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "5px 16px",
            borderRadius: 8,
            border: `1.5px solid ${theme.cardBorder}`,
            backgroundColor: "rgba(248, 246, 240, 0.05)",
            fontFamily: fonts.mono,
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "1.5px",
            color: theme.chalkText,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: theme.good,
              boxShadow: `0 0 8px ${theme.good}`,
            }}
          />
          01 · ARRAYS & HASHING
        </div>

        {/* Center: Problem Title */}
        <div
          style={{
            fontFamily: fonts.display,
            fontSize: 40,
            fontWeight: 700,
            color: theme.chalkText,
            letterSpacing: "0.5px",
            textShadow: "0 0 16px rgba(248, 246, 240, 0.3)",
          }}
        >
          Spiral Matrix — Method 1 Full Trace
        </div>

        {/* Right: LeetCode Number & Difficulty */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            fontFamily: fonts.mono,
          }}
        >
          <span
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: theme.chalkDim,
              letterSpacing: "1px",
            }}
          >
            #015
          </span>
          <span
            style={{
              padding: "4px 12px",
              borderRadius: 6,
              backgroundColor: "rgba(255, 209, 102, 0.15)",
              border: `1px solid ${theme.pivot}`,
              color: theme.pivot,
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: "1.5px",
            }}
          >
            MEDIUM
          </span>
        </div>
      </div>

      {/* =====================================================================
          RIGHT STAGE: METHOD 1 NAVIGATION & DECISION CONSOLE (X: 970, Y: 124, W: 890, H: 500)
          Zero-Void Law & Kit-First: Replaces cramped corner box with a spacious,
          animated navigation console with RoughBox, live turn engine, and harvest bar.
         ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 124,
          left: 970,
          width: 890,
          height: 500,
          backgroundColor: theme.cardBg,
          borderRadius: 14,
          zIndex: 25,
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <RoughBox
            width={890}
            height={500}
            startFrame={0}
            stroke={
              isAt6Out || isAt30Out || isAt25Out || isCell1Warning || isCell12Warning || isCell29Warning || isCell19Warning || isCell8Warning
                ? theme.warn
                : isCompletedAll
                ? theme.good
                : theme.pivot
            }
            strokeWidth={2.4}
            seed={302}
          />
        </div>

        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            padding: "24px 28px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: 2,
          }}
        >
          {/* Header */}
          <div>
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 20,
                fontWeight: 800,
                letterSpacing: 2,
                color: theme.pivot,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span style={{ fontSize: 24 }}>🧭</span>
              <span>METHOD 1 SIMULATION CONSOLE</span>
            </div>
            <div style={{ fontFamily: fonts.sans, fontSize: 15, color: theme.chalkDim, marginTop: 4 }}>
              Step-by-step traversal · Boundary inspection · Visited collision check
            </div>
          </div>

          {/* Top Status Row: Current Position & Harvest Counter */}
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 16 }}>
            {/* Current Position Hero */}
            <div
              style={{
                padding: "12px 18px",
                borderRadius: 10,
                backgroundColor: "rgba(255, 209, 102, 0.12)",
                border: `1.5px solid ${theme.pivot}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.pivot, fontWeight: 700 }}>
                  CURRENT CELL
                </div>
                <div style={{ fontFamily: fonts.code, fontSize: 16, color: theme.chalkText, marginTop: 2 }}>
                  row: {currentStep.r}, col: {currentStep.c}
                </div>
              </div>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 32,
                  fontWeight: 900,
                  color: theme.pivot,
                  textShadow: `0 0 12px rgba(255, 209, 102, 0.5)`,
                }}
              >
                {currentStep.val}
              </div>
            </div>

            {/* Harvest Progress */}
            <div
              style={{
                padding: "12px 18px",
                borderRadius: 10,
                backgroundColor: "rgba(60, 229, 167, 0.1)",
                border: `1.5px solid ${theme.good}`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.good, fontWeight: 700 }}>
                  CELLS HARVESTED
                </span>
                <span style={{ fontFamily: fonts.code, fontSize: 16, color: theme.good, fontWeight: 800 }}>
                  {accumulatedValues.length} / 30
                </span>
              </div>
              <div
                style={{
                  width: "100%",
                  height: 8,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: 4,
                  overflow: "hidden",
                  marginTop: 6,
                }}
              >
                <div
                  style={{
                    width: `${(accumulatedValues.length / 30) * 100}%`,
                    height: "100%",
                    backgroundColor: theme.good,
                    boxShadow: `0 0 8px ${theme.good}`,
                    borderRadius: 4,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Middle Row: The 4 Orthogonal Directions (Interactive, Spacious & Animated) */}
          <div>
            <div style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.chalkDim, letterSpacing: 1.5, marginBottom: 8 }}>
              CYCLE STATE:
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 12,
              }}
            >
              {/* RIGHT */}
              <div
                style={{
                  padding: "10px 12px",
                  borderRadius: 8,
                  backgroundColor: currentDir === 0 ? "rgba(92, 225, 230, 0.22)" : "rgba(255, 255, 255, 0.03)",
                  border: `1.5px solid ${currentDir === 0 ? theme.cyan : "rgba(248, 246, 240, 0.15)"}`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: `scale(${currentDir === 0 ? 1.04 : 1.0})`,
                  boxShadow: currentDir === 0 ? `0 0 16px rgba(92, 225, 230, 0.35)` : "none",
                }}
              >
                <span style={{ fontSize: 26, color: currentDir === 0 ? theme.cyan : theme.chalkDim }}>→</span>
                <span style={{ fontFamily: fonts.sans, fontSize: 15, fontWeight: 800, color: currentDir === 0 ? theme.chalkText : theme.chalkDim, marginTop: 2 }}>
                  RIGHT
                </span>
                <span style={{ fontFamily: fonts.code, fontSize: 11, color: currentDir === 0 ? theme.cyan : "rgba(248, 246, 240, 0.3)", marginTop: 2 }}>
                  dr=0, dc=+1
                </span>
              </div>

              {/* DOWN */}
              <div
                style={{
                  padding: "10px 12px",
                  borderRadius: 8,
                  backgroundColor: currentDir === 1 ? "rgba(255, 209, 102, 0.22)" : "rgba(255, 255, 255, 0.03)",
                  border: `1.5px solid ${currentDir === 1 ? theme.pivot : "rgba(248, 246, 240, 0.15)"}`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: `scale(${currentDir === 1 ? 1.04 : 1.0})`,
                  boxShadow: currentDir === 1 ? `0 0 16px rgba(255, 209, 102, 0.35)` : "none",
                }}
              >
                <span style={{ fontSize: 26, color: currentDir === 1 ? theme.pivot : theme.chalkDim }}>↓</span>
                <span style={{ fontFamily: fonts.sans, fontSize: 15, fontWeight: 800, color: currentDir === 1 ? theme.chalkText : theme.chalkDim, marginTop: 2 }}>
                  DOWN
                </span>
                <span style={{ fontFamily: fonts.code, fontSize: 11, color: currentDir === 1 ? theme.pivot : "rgba(248, 246, 240, 0.3)", marginTop: 2 }}>
                  dr=+1, dc=0
                </span>
              </div>

              {/* LEFT */}
              <div
                style={{
                  padding: "10px 12px",
                  borderRadius: 8,
                  backgroundColor: currentDir === 2 ? "rgba(60, 229, 167, 0.22)" : "rgba(255, 255, 255, 0.03)",
                  border: `1.5px solid ${currentDir === 2 ? theme.good : "rgba(248, 246, 240, 0.15)"}`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: `scale(${currentDir === 2 ? 1.04 : 1.0})`,
                  boxShadow: currentDir === 2 ? `0 0 16px rgba(60, 229, 167, 0.35)` : "none",
                }}
              >
                <span style={{ fontSize: 26, color: currentDir === 2 ? theme.good : theme.chalkDim }}>←</span>
                <span style={{ fontFamily: fonts.sans, fontSize: 15, fontWeight: 800, color: currentDir === 2 ? theme.chalkText : theme.chalkDim, marginTop: 2 }}>
                  LEFT
                </span>
                <span style={{ fontFamily: fonts.code, fontSize: 11, color: currentDir === 2 ? theme.good : "rgba(248, 246, 240, 0.3)", marginTop: 2 }}>
                  dr=0, dc=-1
                </span>
              </div>

              {/* UP */}
              <div
                style={{
                  padding: "10px 12px",
                  borderRadius: 8,
                  backgroundColor: currentDir === 3 ? "rgba(216, 180, 226, 0.22)" : "rgba(255, 255, 255, 0.03)",
                  border: `1.5px solid ${currentDir === 3 ? theme.purple : "rgba(248, 246, 240, 0.15)"}`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: `scale(${currentDir === 3 ? 1.04 : 1.0})`,
                  boxShadow: currentDir === 3 ? `0 0 16px rgba(216, 180, 226, 0.35)` : "none",
                }}
              >
                <span style={{ fontSize: 26, color: currentDir === 3 ? theme.purple : theme.chalkDim }}>↑</span>
                <span style={{ fontFamily: fonts.sans, fontSize: 15, fontWeight: 800, color: currentDir === 3 ? theme.chalkText : theme.chalkDim, marginTop: 2 }}>
                  UP
                </span>
                <span style={{ fontFamily: fonts.code, fontSize: 11, color: currentDir === 3 ? theme.purple : "rgba(248, 246, 240, 0.3)", marginTop: 2 }}>
                  dr=-1, dc=0
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Row: Live Turn Decision Engine */}
          <div
            style={{
              padding: "14px 20px",
              borderRadius: 10,
              backgroundColor:
                isAt6Out || isAt30Out || isAt25Out || isCell1Warning || isCell12Warning || isCell29Warning || isCell19Warning || isCell8Warning
                  ? "rgba(255, 118, 117, 0.22)"
                  : isCompletedAll
                  ? "rgba(60, 229, 167, 0.2)"
                  : "rgba(255, 255, 255, 0.04)",
              border: `1.5px solid ${
                isAt6Out || isAt30Out || isAt25Out || isCell1Warning || isCell12Warning || isCell29Warning || isCell19Warning || isCell8Warning
                  ? theme.warn
                  : isCompletedAll
                  ? theme.good
                  : "rgba(248, 246, 240, 0.15)"
              }`,
              boxShadow:
                isAt6Out || isAt30Out || isAt25Out || isCell1Warning || isCell12Warning || isCell29Warning || isCell19Warning || isCell8Warning
                  ? `0 0 16px rgba(255, 118, 117, 0.35)`
                  : "none",
            }}
          >
            <div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: theme.chalkDim, letterSpacing: 1.5, marginBottom: 4 }}>
              TURN DECISION ENGINE:
            </div>
            <div
              style={{
                fontFamily: fonts.sans,
                fontSize: 16,
                fontWeight: 800,
                color:
                  isAt6Out || isAt30Out || isAt25Out || isCell1Warning || isCell12Warning || isCell29Warning || isCell19Warning || isCell8Warning
                    ? theme.warn
                    : isCompletedAll
                    ? theme.good
                    : theme.chalkText,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              {isAt6Out && <span>❌ NEXT COL c=6 IS OUTSIDE MATRIX ➔ TURN 90° (RIGHT ➔ DOWN)</span>}
              {isAt30Out && <span>❌ NEXT ROW r=5 IS OUTSIDE MATRIX ➔ TURN 90° (DOWN ➔ LEFT)</span>}
              {isAt25Out && <span>❌ NEXT COL c=-1 IS OUTSIDE MATRIX ➔ TURN 90° (LEFT ➔ UP)</span>}
              {isCell1Warning && <span>⚠️ NEXT CELL (0, 0) IS ALREADY VISITED ➔ TURN 90° (UP ➔ RIGHT)</span>}
              {isCell12Warning && <span>⚠️ NEXT CELL (1, 5)=12 ALREADY VISITED ➔ TURN 90° (RIGHT ➔ DOWN)</span>}
              {isCell29Warning && <span>⚠️ NEXT CELL (4, 4)=29 ALREADY VISITED ➔ TURN 90° (DOWN ➔ LEFT)</span>}
              {isCell19Warning && <span>⚠️ NEXT CELL (3, 0)=19 ALREADY VISITED ➔ TURN 90° (LEFT ➔ UP)</span>}
              {isCell8Warning && <span>⚠️ NEXT CELL (1, 1)=8 ALREADY VISITED ➔ TURN 90° (UP ➔ RIGHT)</span>}
              {isCompletedAll && !isSummaryPhase && !isHandoffPhase && (
                <span>🎉 ALL 30 CELLS VISITED! TERMINATION CONDITION MET (m × n = 30)</span>
              )}
              {isSummaryPhase && (
                <span>⚡ INVARIANT: VISIT CELL ➔ PROBE NEXT ➔ TURN IF OUTSIDE OR VISITED ➔ ADVANCE</span>
              )}
              {isHandoffPhase && (
                <span>🚀 READY FOR SCENE 04: METHOD 1 COMPLETE CODE IMPLEMENTATION</span>
              )}
              {!isAt6Out &&
                !isAt30Out &&
                !isAt25Out &&
                !isCell1Warning &&
                !isCell12Warning &&
                !isCell29Warning &&
                !isCell19Warning &&
                !isCell8Warning &&
                !isCompletedAll && (
                  <span style={{ color: theme.good }}>
                    🟢 IN-BOUNDS & UNVISITED: Path clear ➔ Advancing straight along current direction
                  </span>
                )}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================================
          CENTER STAGE 5x6 MESHGRID CONTAINER (X: 568, Y: 136)
         ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: gridTop,
          left: gridLeft,
          zIndex: 10,
        }}
      >
        <MeshGrid
          rows={rows}
          cols={cols}
          cellWidth={cellWidth}
          cellHeight={cellHeight}
          stroke={theme.chalkText}
          strokeWidth={2.5}
          outerStrokeWidth={3.5}
          showColRulers={true}
          showRowRulers={true}
          rulerColor={theme.cyan}
          renderCell={({ row, col }) => {
            const val = MATRIX_VALUES[row][col];

            // Is this cell the active current position?
            const isCurrent = currentStep.r === row && currentStep.c === col;

            // Is this cell already visited in the spiral?
            const isVisited = accumulatedValues.includes(val);

            // Warning highlights on visited probe collisions
            const isWarning =
              (val === 1 && isCell1Warning) ||
              (val === 12 && isCell12Warning) ||
              (val === 29 && isCell29Warning) ||
              (val === 19 && isCell19Warning) ||
              (val === 8 && isCell8Warning);

            let cellColor: string = theme.chalkText;
            let bgColor = "transparent";
            let borderColor = "transparent";

            if (isCompletedAll) {
              cellColor = theme.good;
              bgColor = "rgba(60, 229, 167, 0.16)";
              borderColor = "rgba(60, 229, 167, 0.4)";
            } else if (isCurrent) {
              cellColor = theme.pivot;
              bgColor = "rgba(255, 209, 102, 0.28)";
              borderColor = theme.pivot;
            } else if (isWarning) {
              cellColor = theme.warn;
              bgColor = "rgba(255, 118, 117, 0.32)";
              borderColor = theme.warn;
            } else if (isVisited) {
              cellColor = "rgba(60, 229, 167, 0.75)";
              bgColor = "rgba(60, 229, 167, 0.12)";
              borderColor = "rgba(60, 229, 167, 0.25)";
            }

            return (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: bgColor,
                  border: borderColor !== "transparent" ? `2px solid ${borderColor}` : "none",
                  borderRadius: 4,
                  position: "relative",
                  boxShadow: isCurrent ? "0 0 16px rgba(255, 209, 102, 0.35)" : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 32,
                    fontWeight: 700,
                    color: cellColor,
                  }}
                >
                  {val}
                </span>

                {/* Sub-label for (r, c) on current cell */}
                {isCurrent && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: 4,
                      fontFamily: fonts.code,
                      fontSize: 10,
                      fontWeight: 700,
                      color: theme.pivot,
                    }}
                  >
                    r:{row}, c:{col}
                  </span>
                )}

                {/* Warning icon on visited candidate */}
                {isWarning && (
                  <span style={{ position: "absolute", top: 4, right: 4, fontSize: 13 }}>⚠️</span>
                )}

                {/* Visited checkmark */}
                {isVisited && !isCurrent && !isWarning && (
                  <span style={{ position: "absolute", top: 4, right: 4, fontSize: 12, color: theme.good }}>✓</span>
                )}
              </div>
            );
          }}
        />

        {/* Turn 1 Probe: Ghost Cell at Column 6 (Right of col 5) */}
        {isAt6Out && (
          <div
            style={{
              position: "absolute",
              top: 36,
              left: rulerWidth + 6 * cellWidth + 12,
              width: cellWidth - 4,
              height: cellHeight,
              border: `2px dashed ${theme.warn}`,
              borderRadius: 6,
              backgroundColor: "rgba(255, 118, 117, 0.16)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 30,
              boxShadow: "0 0 16px rgba(255, 118, 117, 0.4)",
            }}
          >
            <span style={{ fontSize: 20 }}>❌</span>
            <span style={{ fontFamily: fonts.code, fontSize: 12, fontWeight: 700, color: theme.warn }}>
              c=6 ≥ n
            </span>
            <span style={{ fontFamily: fonts.sans, fontSize: 10, fontWeight: 800, color: theme.warn, letterSpacing: 1 }}>
              OUT OF BOUNDS
            </span>
          </div>
        )}

        {/* Turn 2 Probe: Ghost Cell below Row 4 at col 5 */}
        {isAt30Out && (
          <div
            style={{
              position: "absolute",
              top: 36 + 5 * cellHeight + 6,
              left: rulerWidth + 5 * cellWidth,
              width: cellWidth,
              height: cellHeight - 10,
              border: `2px dashed ${theme.warn}`,
              borderRadius: 6,
              backgroundColor: "rgba(255, 118, 117, 0.16)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 30,
              boxShadow: "0 0 16px rgba(255, 118, 117, 0.4)",
            }}
          >
            <span style={{ fontSize: 20 }}>❌</span>
            <span style={{ fontFamily: fonts.code, fontSize: 12, fontWeight: 700, color: theme.warn }}>
              r=5 ≥ m
            </span>
            <span style={{ fontFamily: fonts.sans, fontSize: 10, fontWeight: 800, color: theme.warn, letterSpacing: 1 }}>
              OUT OF BOUNDS
            </span>
          </div>
        )}

        {/* Turn 3 Probe: Ghost Cell at Column -1 (Left of col 0, row 4) */}
        {isAt25Out && (
          <div
            style={{
              position: "absolute",
              top: 36 + 4 * cellHeight,
              left: -cellWidth - 14,
              width: cellWidth - 4,
              height: cellHeight,
              border: `2px dashed ${theme.warn}`,
              borderRadius: 6,
              backgroundColor: "rgba(255, 118, 117, 0.16)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 30,
              boxShadow: "0 0 16px rgba(255, 118, 117, 0.4)",
            }}
          >
            <span style={{ fontSize: 20 }}>❌</span>
            <span style={{ fontFamily: fonts.code, fontSize: 12, fontWeight: 700, color: theme.warn }}>
              c=-1 &lt; 0
            </span>
            <span style={{ fontFamily: fonts.sans, fontSize: 10, fontWeight: 800, color: theme.warn, letterSpacing: 1 }}>
              OUT OF BOUNDS
            </span>
          </div>
        )}

        {/* Turn 4 Probe: Arrow at (1, 0)=7 pointing Up to (0, 0)=1 */}
        {isProbeUpAt7 && (
          <div
            style={{
              position: "absolute",
              top: 36 + cellHeight + cellHeight / 2 - 20,
              left: rulerWidth + cellWidth / 2 - 14,
              width: 28,
              height: 28,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
              zIndex: 30,
            }}
          >
            <span style={{ fontSize: 32, color: isCell1Warning ? theme.warn : theme.good, transform: "rotate(-90deg)" }}>
              ➔
            </span>
          </div>
        )}

        {/* Turn 5 Probe: Arrow at (1, 4)=11 pointing Right to (1, 5)=12 */}
        {isProbeRightAt11 && (
          <div
            style={{
              position: "absolute",
              top: 36 + cellHeight + cellHeight / 2 - 14,
              left: rulerWidth + 4 * cellWidth + cellWidth / 2 - 14,
              width: 28,
              height: 28,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
              zIndex: 30,
            }}
          >
            <span style={{ fontSize: 30, color: theme.warn }}>➔</span>
          </div>
        )}

        {/* Turn 6 Probe: Arrow at (3, 4)=23 pointing Down to (4, 4)=29 */}
        {isProbeDownAt23 && (
          <div
            style={{
              position: "absolute",
              top: 36 + 3 * cellHeight + cellHeight / 2 - 14,
              left: rulerWidth + 4 * cellWidth + cellWidth / 2 - 14,
              width: 28,
              height: 28,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
              zIndex: 30,
            }}
          >
            <span style={{ fontSize: 30, color: theme.warn, transform: "rotate(90deg)" }}>➔</span>
          </div>
        )}

        {/* Turn 7 Probe: Arrow at (3, 1)=20 pointing Left to (3, 0)=19 */}
        {isProbeLeftAt20 && (
          <div
            style={{
              position: "absolute",
              top: 36 + 3 * cellHeight + cellHeight / 2 - 14,
              left: rulerWidth + cellWidth + cellWidth / 2 - 14,
              width: 28,
              height: 28,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
              zIndex: 30,
            }}
          >
            <span style={{ fontSize: 30, color: theme.warn, transform: "rotate(180deg)" }}>➔</span>
          </div>
        )}

        {/* Turn 8 Probe: Arrow at (2, 1)=14 pointing Up to (1, 1)=8 */}
        {isProbeUpAt14 && (
          <div
            style={{
              position: "absolute",
              top: 36 + 2 * cellHeight + cellHeight / 2 - 20,
              left: rulerWidth + cellWidth + cellWidth / 2 - 14,
              width: 28,
              height: 28,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
              zIndex: 30,
            }}
          >
            <span style={{ fontSize: 32, color: theme.warn, transform: "rotate(-90deg)" }}>➔</span>
          </div>
        )}
      </div>

      {/* =====================================================================
          BOTTOM SECTION: FULL-WIDTH 1D ANSWER ARRAY (X: 120, Y: 670, W: 1740, H: 76)
          Zero-Void Law & Kit-First: Full 1740px wide chalkboard answer collector with
          RoughBox chalk outline, live value slots, and zero-collision vertical clearance.
         ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 670,
          left: 120,
          width: 1740,
          height: 76,
          backgroundColor: theme.cardBg,
          borderRadius: 12,
          zIndex: 25,
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <RoughBox width={1740} height={76} startFrame={0} stroke={theme.good} strokeWidth={2.4} seed={330} />
        </div>

        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            gap: 20,
            zIndex: 2,
          }}
        >
          {/* Label */}
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 18,
              fontWeight: 800,
              color: theme.good,
              letterSpacing: 1.5,
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span>📥</span>
            <span>ANSWER ARRAY [{accumulatedValues.length}/30]:</span>
          </div>

          {/* 30 Value Slots (Progressive Fill, Zero Spoilers) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              flex: 1,
              overflowX: "hidden",
            }}
          >
            {Array.from({ length: 30 }).map((_, i) => {
              const val = accumulatedValues[i];
              const isLatest = i === accumulatedValues.length - 1;
              const isFilled = i < accumulatedValues.length;

              if (isFilled) {
                return (
                  <div
                    key={i}
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 16,
                      fontWeight: 700,
                      color: isLatest ? theme.pivot : theme.chalkText,
                      backgroundColor: isLatest ? "rgba(255, 209, 102, 0.25)" : "rgba(60, 229, 167, 0.12)",
                      border: `1.5px solid ${isLatest ? theme.pivot : "rgba(60, 229, 167, 0.4)"}`,
                      padding: "4px 8px",
                      borderRadius: 6,
                      minWidth: 38,
                      textAlign: "center",
                      boxShadow: isLatest ? `0 0 12px rgba(255, 209, 102, 0.4)` : "none",
                      transform: isLatest ? "scale(1.08)" : "scale(1.0)",
                    }}
                  >
                    {val}
                  </div>
                );
              }

              return (
                <div
                  key={i}
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 13,
                    color: "rgba(248, 246, 240, 0.15)",
                    border: `1px dashed rgba(248, 246, 240, 0.12)`,
                    padding: "4px 8px",
                    borderRadius: 6,
                    minWidth: 38,
                    textAlign: "center",
                  }}
                >
                  ·
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Captions */}
      <Captions words={captionWords} />
    </div>
  );
};
