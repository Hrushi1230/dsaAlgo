/**
 * Scene06Method2Trace.tsx — Scene 06 · Method 2 Trace: Concentric Rings & In-Place 4-Way Swaps
 * Rotate Image (LeetCode 48) · Pattern 01 — Arrays & Hashing
 *
 * Implements the complete in-place execution of Method 2 on the 5×5 Master Matrix:
 * - Center Stage: 5×5 Master Matrix centered at X: 764, Y: 195 (392×392px)
 *   - Wrapped with authentic RoughBox chalk border
 * - Left Stage (X: 80..670, Y: 195..510):
 *   - Wrapped with RoughBox chalk borders
 *   - STRICT ZERO-SPOILER PROGRESSIVE REVEALS:
 *     - F604..F1258: Shows the 4 Connected Positions (1, 5, 25, 21) & Clockwise Targets (NO formulas spoiled)
 *     - F1259..F1480: Direct overwrite hazard warning (destroying 5)
 *     - F1481+: Step 0 unlocks (top_val = matrix[top][left+i])
 *     - F1612+: Step 1 unlocks (matrix[top][left+i] = matrix[bot-i][left])
 *     - F1750+: Step 2 unlocks (matrix[bot-i][left] = matrix[bot][right-i])
 *     - F1886+: Step 3 unlocks (matrix[bot][right-i] = matrix[top+i][right])
 *     - F2024+: Step 4 unlocks (matrix[top+i][right] = top_val)
 *     - F2186+: Cycle 1 verified; formulas stay visible & step-highlight for all subsequent cycles
 *   - Auxiliary Memory box: top_val = matrix[...] (O(1) memory) with RoughBox
 * - Right Stage (X: 1210..1840, Y: 195..510):
 *   - Wrapped with RoughBox chalk borders
 *   - Concentric Rings hierarchy & progress tracker (Layer 0, Layer 1, Center)
 *     - Progressive reveal of layers: Layer 0 (F211+), Layer 1 (F424+), Layer 2 (F525+)
 *   - Ring coordinate bounds (top, bottom, left, right)
 * - Bottom Zone (Y: 675..770):
 *   - Core pattern invariant banner with RoughBox (F6944+)
 * - ChalkDust bursts on milestone transitions
 * - Captions at bottom (Y: 960..1010) with >= 190px breathing clearance
 *
 * Total Duration: 7,386 frames @ 30fps (246.200s) strictly from sync/06-method2-trace.json
 */
import React from "react";
import {
  Audio,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
} from "remotion";

import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme as baseTheme, fonts } from "../../../../kit/lib/theme";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { RoughBox } from "../../../../kit/components/RoughBox";
import { ChalkDust } from "../../../../kit/components/ChalkDust";
import syncData from "../sync/06-method2-trace.json";

const theme = {
  ...baseTheme,
  gold: baseTheme.pivot,
  bg: baseTheme.boardBg,
  chalkSub: baseTheme.chalkDim,
  chalkBorder: baseTheme.cardBorder,
};

// ---------------------------------------------------------------------------
// Word-level Caption Timings (from sync/06-method2-trace.json)
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

// ---------------------------------------------------------------------------
// Matrix Grid Constants (Centered on Stage)
// ---------------------------------------------------------------------------
const ROWS = 5;
const COLS = 5;
const CELL_SIZE = 72;
const CELL_GAP = 8;
const PITCH = CELL_SIZE + CELL_GAP; // 80px
const GRID_WIDTH = COLS * CELL_SIZE + (COLS - 1) * CELL_GAP; // 392px
const GRID_HEIGHT = ROWS * CELL_SIZE + (ROWS - 1) * CELL_GAP; // 392px

const MATRIX_X = (1920 - GRID_WIDTH) / 2; // 764px
const MATRIX_Y = 195; // Y: 195..587 (Grid bottom at 625)

const INITIAL_MATRIX = [
  [ 1,  2,  3,  4,  5],
  [ 6,  7,  8,  9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

export const Scene06Method2Trace: React.FC = () => {
  const frame = useCurrentFrame();

  // Entrance springs
  const matrixEntrance = spring({
    frame,
    fps: 30,
    config: { damping: 18, stiffness: 80 },
  });

  const rightCardEntrance = spring({
    frame: Math.max(0, frame - 121),
    fps: 30,
    config: { damping: 18, stiffness: 80 },
  });

  const leftCardEntrance = spring({
    frame: Math.max(0, frame - 604),
    fps: 30,
    config: { damping: 18, stiffness: 80 },
  });

  const bottomCardEntrance = spring({
    frame: Math.max(0, frame - 6944),
    fps: 30,
    config: { damping: 18, stiffness: 80 },
  });

  // -------------------------------------------------------------------------
  // State Derivations across the 7,386 frames
  // -------------------------------------------------------------------------

  // Current Active Layer: 0 (outer), 1 (inner), or 2 (center)
  const isInnerLayer = frame >= 4902 && frame < 6359;
  const isCenterFocus = frame >= 6359 && frame < 6669;
  const isFullComplete = frame >= 6669;

  // Active Cycle in Outer Layer:
  const outerC1Active = frame >= 604 && frame < 2397;
  const outerC2Active = frame >= 2397 && frame < 3251;
  const outerC3Active = frame >= 3251 && frame < 3908;
  const outerC4Active = frame >= 3908 && frame < 4499;
  const outerDone = frame >= 4499;

  // Active Cycle in Inner Layer:
  const innerC1Active = frame >= 4902 && frame < 5672;
  const innerC2Active = frame >= 5672 && frame < 6275;
  const innerDone = frame >= 6275;

  // Dynamic values in matrix cells based on rotation completion milestones
  const getCellValue = (r: number, c: number) => {
    // Center cell (2, 2) is always 13
    if (r === 2 && c === 2) return 13;

    // OUTER LAYER - Cycle 1 (Corners: F2186+)
    if (frame >= 2186) {
      if (r === 0 && c === 0) return 21;
      if (r === 0 && c === 4) return 1;
      if (r === 4 && c === 4) return 5;
      if (r === 4 && c === 0) return 25;
    }

    // OUTER LAYER - Cycle 2 (Offset 1: F3172+)
    if (frame >= 3172) {
      if (r === 0 && c === 1) return 16;
      if (r === 1 && c === 4) return 2;
      if (r === 4 && c === 3) return 10;
      if (r === 3 && c === 0) return 24;
    }

    // OUTER LAYER - Cycle 3 (Offset 2: F3824+)
    if (frame >= 3824) {
      if (r === 0 && c === 2) return 11;
      if (r === 2 && c === 4) return 3;
      if (r === 4 && c === 2) return 15;
      if (r === 2 && c === 0) return 23;
    }

    // OUTER LAYER - Cycle 4 (Offset 3: F4477+)
    if (frame >= 4477) {
      if (r === 0 && c === 3) return 6;
      if (r === 3 && c === 4) return 4;
      if (r === 4 && c === 1) return 20;
      if (r === 1 && c === 0) return 22;
    }

    // INNER LAYER - Cycle 1 (Corners: F5585+)
    if (frame >= 5585) {
      if (r === 1 && c === 1) return 17;
      if (r === 1 && c === 3) return 7;
      if (r === 3 && c === 3) return 9;
      if (r === 3 && c === 1) return 19;
    }

    // INNER LAYER - Cycle 2 (Offset 1: F6244+)
    if (frame >= 6244) {
      if (r === 1 && c === 2) return 12;
      if (r === 2 && c === 3) return 8;
      if (r === 3 && c === 2) return 14;
      if (r === 2 && c === 1) return 18;
    }

    return INITIAL_MATRIX[r][c];
  };

  // Cell Highlight Styling
  const getCellHighlight = (r: number, c: number) => {
    const isCenter = r === 2 && c === 2;
    const isOuter = r === 0 || r === 4 || c === 0 || c === 4;
    const isInner = !isOuter && !isCenter;

    // Full Complete: All cells glow green in victory
    if (isFullComplete) {
      return { border: theme.good, bg: "rgba(82, 183, 136, 0.28)", glow: `0 0 18px ${theme.good}` };
    }

    // Center Focus (F6359..F6668)
    if (isCenterFocus) {
      if (isCenter) {
        return { border: theme.gold, bg: "rgba(255, 209, 102, 0.35)", glow: `0 0 24px ${theme.gold}` };
      }
      return { border: theme.good, bg: "rgba(82, 183, 136, 0.18)", glow: "none" };
    }

    // Layer Breakdown Introduction (F211..F603)
    if (frame >= 211 && frame < 604) {
      if (frame >= 525 && isCenter) {
        return { border: theme.gold, bg: "rgba(255, 209, 102, 0.3)", glow: `0 0 20px ${theme.gold}` };
      }
      if (frame >= 424 && isInner) {
        return { border: theme.gold, bg: "rgba(255, 209, 102, 0.2)", glow: `0 0 16px ${theme.gold}` };
      }
      if (frame >= 211 && isOuter) {
        return { border: theme.cyan, bg: "rgba(76, 201, 240, 0.2)", glow: `0 0 16px ${theme.cyan}` };
      }
    }

    // OUTER LAYER CYCLES (F604..F4901)
    if (frame >= 604 && frame < 4902) {
      const isC1Corner = (r === 0 && c === 0) || (r === 0 && c === 4) || (r === 4 && c === 4) || (r === 4 && c === 0);
      const isC2Cell = (r === 0 && c === 1) || (r === 1 && c === 4) || (r === 4 && c === 3) || (r === 3 && c === 0);
      const isC3Cell = (r === 0 && c === 2) || (r === 2 && c === 4) || (r === 4 && c === 2) || (r === 2 && c === 0);
      const isC4Cell = (r === 0 && c === 3) || (r === 3 && c === 4) || (r === 4 && c === 1) || (r === 1 && c === 0);

      if (outerDone && isOuter) {
        return { border: theme.good, bg: "rgba(82, 183, 136, 0.25)", glow: `0 0 16px ${theme.good}` };
      }

      // Check current active cycle
      if (outerC1Active && isC1Corner) {
        if (frame >= 1259 && frame < 1481 && r === 0 && c === 4) {
          return { border: theme.bad, bg: "rgba(230, 57, 70, 0.35)", glow: `0 0 24px ${theme.bad}` };
        }
        if (frame >= 2186) {
          return { border: theme.good, bg: "rgba(82, 183, 136, 0.28)", glow: `0 0 18px ${theme.good}` };
        }
        return { border: theme.cyan, bg: "rgba(76, 201, 240, 0.25)", glow: `0 0 18px ${theme.cyan}` };
      }

      if (outerC2Active && isC2Cell) {
        return { border: theme.cyan, bg: "rgba(76, 201, 240, 0.25)", glow: `0 0 18px ${theme.cyan}` };
      }
      if (outerC3Active && isC3Cell) {
        return { border: theme.cyan, bg: "rgba(76, 201, 240, 0.25)", glow: `0 0 18px ${theme.cyan}` };
      }
      if (outerC4Active && isC4Cell) {
        return { border: theme.cyan, bg: "rgba(76, 201, 240, 0.25)", glow: `0 0 18px ${theme.cyan}` };
      }

      // Previously completed cells in outer ring
      if (frame >= 2186 && isC1Corner) return { border: theme.good, bg: "rgba(82, 183, 136, 0.2)", glow: "none" };
      if (frame >= 3172 && isC2Cell) return { border: theme.good, bg: "rgba(82, 183, 136, 0.2)", glow: "none" };
      if (frame >= 3824 && isC3Cell) return { border: theme.good, bg: "rgba(82, 183, 136, 0.2)", glow: "none" };
      if (frame >= 4477 && isC4Cell) return { border: theme.good, bg: "rgba(82, 183, 136, 0.2)", glow: "none" };
    }

    // INNER LAYER CYCLES (F4902..F6358)
    if (frame >= 4902 && frame < 6359) {
      const isInnerCorner = (r === 1 && c === 1) || (r === 1 && c === 3) || (r === 3 && c === 3) || (r === 3 && c === 1);
      const isInnerMid = (r === 1 && c === 2) || (r === 2 && c === 3) || (r === 3 && c === 2) || (r === 2 && c === 1);

      if (isOuter) {
        return { border: theme.good, bg: "rgba(82, 183, 136, 0.12)", glow: "none" };
      }

      if (innerDone && isInner) {
        return { border: theme.good, bg: "rgba(82, 183, 136, 0.28)", glow: `0 0 18px ${theme.good}` };
      }

      if (innerC1Active && isInnerCorner) {
        if (frame >= 5585) {
          return { border: theme.good, bg: "rgba(82, 183, 136, 0.28)", glow: `0 0 18px ${theme.good}` };
        }
        return { border: theme.cyan, bg: "rgba(76, 201, 240, 0.25)", glow: `0 0 18px ${theme.cyan}` };
      }

      if (innerC2Active && isInnerMid) {
        if (frame >= 6244) {
          return { border: theme.good, bg: "rgba(82, 183, 136, 0.28)", glow: `0 0 18px ${theme.good}` };
        }
        return { border: theme.cyan, bg: "rgba(76, 201, 240, 0.25)", glow: `0 0 18px ${theme.cyan}` };
      }

      if (frame >= 5585 && isInnerCorner) return { border: theme.good, bg: "rgba(82, 183, 136, 0.2)", glow: "none" };
    }

    return null;
  };

  // Active top_val memory variable
  const getTopValDisplay = () => {
    if (frame >= 1481 && frame < 2186) return "1";
    if (frame >= 2713 && frame < 3172) return "2";
    if (frame >= 3485 && frame < 3824) return "3";
    if (frame >= 4167 && frame < 4477) return "4";
    if (frame >= 5252 && frame < 5585) return "7";
    if (frame >= 5927 && frame < 6244) return "8";
    return null;
  };

  const topVal = getTopValDisplay();

  // Phase check for Cycle 1 Left Card (Strict Zero-Spoiler)
  const isC1Intro = frame >= 604 && frame < 1259;
  const isC1Hazard = frame >= 1259 && frame < 1481;
  const isFormulasActive = frame >= 1481;

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        position: "relative",
        overflow: "hidden",
        backgroundColor: theme.bg,
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      {/* Voiceover Audio */}
      <Audio src={staticFile("audio/014/06-method2-trace.mp3")} />

      {/* ChalkDust Burst Accents */}
      <ChalkDust x={1450} y={230} start={211} color={theme.cyan} count={16} radius={60} seed={31} />
      <ChalkDust x={1450} y={280} start={424} color={theme.gold} count={16} radius={60} seed={32} />
      <ChalkDust x={1450} y={330} start={525} color={theme.good} count={16} radius={60} seed={33} />
      <ChalkDust x={MATRIX_X + 4 * PITCH + 36} y={MATRIX_Y + 36} start={1259} color={theme.bad} count={22} radius={65} seed={34} />
      <ChalkDust x={375} y={300} start={1481} color={theme.gold} count={18} radius={60} seed={35} />
      <ChalkDust x={MATRIX_X + 196} y={MATRIX_Y + 196} start={2186} color={theme.good} count={24} radius={75} seed={36} />
      <ChalkDust x={MATRIX_X + 196} y={MATRIX_Y + 196} start={4499} color={theme.good} count={26} radius={80} seed={37} />
      <ChalkDust x={MATRIX_X + 196} y={MATRIX_Y + 196} start={6275} color={theme.good} count={26} radius={80} seed={38} />
      <ChalkDust x={MATRIX_X + 2 * PITCH + 36} y={MATRIX_Y + 2 * PITCH + 36} start={6359} color={theme.gold} count={20} radius={65} seed={39} />
      <ChalkDust x={960} y={400} start={6669} color={theme.good} count={32} radius={95} seed={40} />
      <ChalkDust x={960} y={720} start={6944} color={theme.good} count={24} radius={70} seed={41} />

      {/* =====================================================================
          TOP ZONE: METADATA BADGES ONLY (Y: 36..105)
          ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 36,
          left: 80,
          right: 80,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 5,
        }}
      >
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <span
            style={{
              padding: "6px 14px",
              borderRadius: 6,
              backgroundColor: "rgba(25, 59, 45, 0.8)",
              border: `1px solid ${theme.cyan}`,
              fontFamily: fonts.code,
              fontSize: 13,
              fontWeight: 700,
              color: theme.cyan,
              letterSpacing: 1.2,
            }}
          >
            01 · ARRAYS &amp; HASHING
          </span>
          <span
            style={{
              padding: "6px 14px",
              borderRadius: 6,
              backgroundColor: "rgba(25, 59, 45, 0.8)",
              border: `1px solid ${theme.gold}`,
              fontFamily: fonts.code,
              fontSize: 13,
              fontWeight: 700,
              color: theme.gold,
              letterSpacing: 1.2,
            }}
          >
            LEETCODE 48 · METHOD 2 TRACE
          </span>
        </div>

        <span
          style={{
            padding: "6px 16px",
            borderRadius: 6,
            backgroundColor: "rgba(35, 14, 18, 0.8)",
            border: `1px solid ${isFullComplete ? theme.good : theme.cyan}`,
            fontFamily: fonts.code,
            fontSize: 13,
            fontWeight: 700,
            color: isFullComplete ? theme.good : theme.cyan,
            letterSpacing: 1,
          }}
        >
          {isFullComplete
            ? "ROTATION 100% COMPLETE · O(1) SPACE"
            : isInnerLayer
            ? "LAYER 1: INNER 3×3 BORDER"
            : isCenterFocus
            ? "LAYER 2: CENTER 1×1 CORE (FIXED)"
            : "LAYER 0: OUTER 5×5 BORDER"}
        </span>
      </div>

      {/* =====================================================================
          CENTER-STAGE HERO: 5x5 MASTER MATRIX (X: 764, Y: 195, 392×392px)
          ===================================================================== */}
      <div
        style={{
          position: "absolute",
          left: MATRIX_X,
          top: MATRIX_Y,
          opacity: matrixEntrance,
          transform: `scale(${interpolate(matrixEntrance, [0, 1], [0.94, 1.0])})`,
          zIndex: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Matrix Header / Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: GRID_WIDTH,
            marginBottom: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <span
              style={{
                fontFamily: fonts.code,
                fontSize: 18,
                fontWeight: 700,
                color: theme.chalkText,
              }}
            >
              matrix[5][5]
            </span>
            <span
              style={{
                fontSize: 10,
                fontFamily: fonts.code,
                padding: "2px 6px",
                borderRadius: 4,
                backgroundColor: "rgba(76, 201, 240, 0.2)",
                color: theme.cyan,
                fontWeight: 700,
              }}
            >
              IN-PLACE BUFFER
            </span>
          </div>

          <span
            style={{
              fontSize: 10,
              fontFamily: fonts.code,
              fontWeight: 700,
              padding: "2px 8px",
              borderRadius: 4,
              backgroundColor: isFullComplete ? "rgba(82, 183, 136, 0.2)" : "rgba(255, 209, 102, 0.15)",
              color: isFullComplete ? theme.good : theme.gold,
              border: `1px solid ${isFullComplete ? theme.good : theme.gold}`,
            }}
          >
            {isFullComplete
              ? "ALL RINGS ROTATED"
              : isCenterFocus
              ? "CENTER CORE 1×1"
              : isInnerLayer
              ? "RING 1 OF 2 ACTIVE"
              : "RING 0 OF 2 ACTIVE"}
          </span>
        </div>

        {/* Column Headers (c=0..4) */}
        <div style={{ display: "flex", marginLeft: 36, marginBottom: 6, gap: CELL_GAP }}>
          {[0, 1, 2, 3, 4].map((c) => (
            <div
              key={`s06-c-head-${c}`}
              style={{
                width: CELL_SIZE,
                textAlign: "center",
                fontFamily: fonts.code,
                fontSize: 13,
                fontWeight: 700,
                color: theme.chalkSub,
              }}
            >
              c={c}
            </div>
          ))}
        </div>

        {/* Matrix Grid Container with Row Headers */}
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          {/* Row Headers (r=0..4) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: CELL_GAP,
              marginRight: 10,
              justifyContent: "space-around",
            }}
          >
            {[0, 1, 2, 3, 4].map((r) => (
              <div
                key={`s06-r-head-${r}`}
                style={{
                  height: CELL_SIZE,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  fontFamily: fonts.code,
                  fontSize: 13,
                  fontWeight: 700,
                  color: theme.chalkSub,
                  width: 26,
                }}
              >
                r={r}
              </div>
            ))}
          </div>

          {/* 5x5 Cells Grid with RoughBox */}
          <div
            style={{
              position: "relative",
              width: GRID_WIDTH,
              height: GRID_HEIGHT,
              backgroundColor: "rgba(17, 37, 29, 0.8)",
              borderRadius: 10,
              padding: 2,
            }}
          >
            {/* RoughBox Outline on Matrix */}
            <div style={{ position: "absolute", top: -2, left: -2, width: GRID_WIDTH + 4, height: GRID_HEIGHT + 4, pointerEvents: "none", zIndex: 1 }}>
              <RoughBox
                width={GRID_WIDTH + 4}
                height={GRID_HEIGHT + 4}
                stroke={isFullComplete ? theme.good : theme.chalkLine}
                strokeWidth={isFullComplete ? 2.5 : 1.8}
                seed={61}
              />
            </div>

            {INITIAL_MATRIX.map((row, r) =>
              row.map((_, c) => {
                const hl = getCellHighlight(r, c);
                const displayVal = getCellValue(r, c);
                const isCenter = r === 2 && c === 2;

                return (
                  <div
                    key={`s06-cell-${r}-${c}`}
                    style={{
                      position: "absolute",
                      left: c * PITCH,
                      top: r * PITCH,
                      width: CELL_SIZE,
                      height: CELL_SIZE,
                      borderRadius: 8,
                      backgroundColor: hl ? hl.bg : "rgba(25, 59, 45, 0.35)",
                      border: `2px solid ${hl ? hl.border : theme.chalkLine}`,
                      boxShadow: hl ? hl.glow : "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "none",
                      zIndex: 3,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: fonts.code,
                        fontSize: 30,
                        fontWeight: 700,
                        color: hl ? hl.border : theme.chalkText,
                      }}
                    >
                      {displayVal}
                    </span>

                    {isCenter && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: 2,
                          right: 4,
                          fontSize: 9,
                          fontFamily: fonts.code,
                          color: theme.gold,
                          opacity: 0.85,
                        }}
                      >
                        MID
                      </span>
                    )}
                  </div>
                );
              })
            )}

            {/* Outer Perimeter Cycle Track (when Cycle 1 is active) */}
            {frame >= 1006 && frame < 4499 && (
              <svg
                style={{
                  position: "absolute",
                  left: -12,
                  top: -12,
                  width: GRID_WIDTH + 24,
                  height: GRID_HEIGHT + 24,
                  pointerEvents: "none",
                  zIndex: 2,
                }}
              >
                <defs>
                  <marker
                    id="s06-arrowhead"
                    markerWidth="8"
                    markerHeight="6"
                    refX="7"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 8 3, 0 6" fill={theme.gold} />
                  </marker>
                </defs>

                <rect
                  x={4}
                  y={4}
                  width={GRID_WIDTH + 16}
                  height={GRID_HEIGHT + 16}
                  rx={12}
                  fill="none"
                  stroke={theme.cyan}
                  strokeWidth={2}
                  strokeDasharray="6 4"
                  opacity={0.65}
                />

                <path
                  d={`M ${48} ${2} L ${GRID_WIDTH - 24} ${2}`}
                  stroke={theme.gold}
                  strokeWidth={2.5}
                  markerEnd="url(#s06-arrowhead)"
                />
                <path
                  d={`M ${GRID_WIDTH + 22} ${48} L ${GRID_WIDTH + 22} ${GRID_HEIGHT - 24}`}
                  stroke={theme.gold}
                  strokeWidth={2.5}
                  markerEnd="url(#s06-arrowhead)"
                />
                <path
                  d={`M ${GRID_WIDTH - 24} ${GRID_HEIGHT + 22} L ${48} ${GRID_HEIGHT + 22}`}
                  stroke={theme.gold}
                  strokeWidth={2.5}
                  markerEnd="url(#s06-arrowhead)"
                />
                <path
                  d={`M ${2} ${GRID_HEIGHT - 24} L ${2} ${48}`}
                  stroke={theme.gold}
                  strokeWidth={2.5}
                  markerEnd="url(#s06-arrowhead)"
                />
              </svg>
            )}

            {/* Inner Ring Perimeter Cycle Track (when Inner Ring is active) */}
            {frame >= 4902 && frame < 6275 && (
              <svg
                style={{
                  position: "absolute",
                  left: PITCH - 8,
                  top: PITCH - 8,
                  width: 3 * PITCH + 16,
                  height: 3 * PITCH + 16,
                  pointerEvents: "none",
                  zIndex: 2,
                }}
              >
                <rect
                  x={4}
                  y={4}
                  width={3 * PITCH + 8}
                  height={3 * PITCH + 8}
                  rx={8}
                  fill="none"
                  stroke={theme.gold}
                  strokeWidth={2}
                  strokeDasharray="4 4"
                  opacity={0.7}
                />
              </svg>
            )}
          </div>
        </div>

        {/* Matrix Bottom Caption */}
        {frame < 6944 && (
          <div
            style={{
              marginTop: 8,
              marginLeft: 36,
              fontSize: 13,
              fontFamily: fonts.code,
              color: isFullComplete ? theme.good : theme.chalkSub,
              fontWeight: isFullComplete ? 700 : 400,
              letterSpacing: 0.5,
            }}
          >
            {isFullComplete
              ? "✓ In-Place Rotation Complete without auxiliary matrix"
              : isCenterFocus
              ? "Center element (2,2) remains invariant"
              : isInnerLayer
              ? "Rotating inner 3×3 concentric ring"
              : "Rotating outer 5×5 concentric ring"}
          </div>
        )}
      </div>

      {/* =====================================================================
          LEFT STAGE: ACTIVE CYCLE & STEP TRACKER (X: 80..670, Y: 195..510)
          ===================================================================== */}
      {frame >= 604 && (
        <div
          style={{
            position: "absolute",
            left: 80,
            top: 195,
            width: 590,
            opacity: leftCardEntrance,
            transform: `scale(${interpolate(leftCardEntrance, [0, 1], [0.95, 1.0])})`,
            display: "flex",
            flexDirection: "column",
            gap: 14,
            zIndex: 6,
          }}
        >
          {/* Main Cycle Execution Card with RoughBox */}
          <div
            style={{
              position: "relative",
              width: 590,
              minHeight: 235,
              backgroundColor: "rgba(17, 37, 29, 0.94)",
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, width: 590, height: "100%", pointerEvents: "none" }}>
              <RoughBox
                width={590}
                height={235}
                stroke={isFullComplete ? theme.good : theme.cyan}
                strokeWidth={2}
                seed={62}
              />
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                padding: "16px 22px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 15,
                    fontWeight: 700,
                    letterSpacing: 1.2,
                    color: isFullComplete ? theme.good : theme.cyan,
                  }}
                >
                  {isFullComplete
                    ? "✓ ALL CYCLES VERIFIED"
                    : isCenterFocus
                    ? "CENTER ELEMENT PROPERTY"
                    : isInnerLayer
                    ? `INNER RING · CYCLE ${innerC1Active ? "1 OF 2" : "2 OF 2"}`
                    : `OUTER RING · CYCLE ${
                        outerC1Active ? "1 OF 4" : outerC2Active ? "2 OF 4" : outerC3Active ? "3 OF 4" : "4 OF 4"
                      }`}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: fonts.code,
                    padding: "3px 8px",
                    borderRadius: 4,
                    backgroundColor: "rgba(76, 201, 240, 0.15)",
                    color: theme.cyan,
                    fontWeight: 700,
                  }}
                >
                  {isInnerLayer ? "i = 0..1" : isCenterFocus ? "1×1 CORE" : "i = 0..3"}
                </span>
              </div>

              {/* ANTI-SPOILER STAGES:
                  Phase 1: F604..F1258: 4 Connected Positions & Clockwise Targets
                  Phase 2: F1259..F1480: Direct Overwrite Hazard Warning
                  Phase 3: F1481+: Step-by-step Formulas Unlocked */}
              {isC1Intro && (
                <div style={{ display: "flex", flexDirection: "column", gap: 7, fontSize: 13, fontFamily: fonts.code }}>
                  <div style={{ color: theme.chalkSub, fontSize: 12 }}>
                    Cycle 1 Initial Corner Values:
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 8px", backgroundColor: "rgba(25, 59, 45, 0.6)", borderRadius: 6 }}>
                    <span style={{ color: theme.gold, fontWeight: 700 }}>• Top: matrix[0][0] = 1</span>
                    <span style={{ color: theme.cyan }}>──► Target: Right (0, 4)</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 8px", backgroundColor: "rgba(25, 59, 45, 0.6)", borderRadius: 6 }}>
                    <span style={{ color: theme.gold, fontWeight: 700 }}>• Right: matrix[0][4] = 5</span>
                    <span style={{ color: theme.cyan }}>──► Target: Bottom (4, 4)</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 8px", backgroundColor: "rgba(25, 59, 45, 0.6)", borderRadius: 6 }}>
                    <span style={{ color: theme.gold, fontWeight: 700 }}>• Bottom: matrix[4][4] = 25</span>
                    <span style={{ color: theme.cyan }}>──► Target: Left (4, 0)</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 8px", backgroundColor: "rgba(25, 59, 45, 0.6)", borderRadius: 6 }}>
                    <span style={{ color: theme.gold, fontWeight: 700 }}>• Left: matrix[4][0] = 21</span>
                    <span style={{ color: theme.cyan }}>──► Target: Top (0, 0)</span>
                  </div>
                </div>
              )}

              {isC1Hazard && (
                <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: "8px 12px", backgroundColor: "rgba(45, 18, 22, 0.75)", border: `1.5px solid ${theme.bad}`, borderRadius: 8 }}>
                  <span style={{ fontFamily: fonts.code, fontSize: 13, fontWeight: 700, color: theme.bad }}>
                    ⚠️ DIRECT OVERWRITE HAZARD
                  </span>
                  <span style={{ fontSize: 13, color: theme.chalkText, lineHeight: 1.35 }}>
                    Cannot write Top directly into Right first, because that immediately destroys the old value <code>5</code>.
                  </span>
                  <span style={{ fontSize: 12, fontFamily: fonts.code, color: theme.gold }}>
                    Solution: Save Top into temporary storage variable first.
                  </span>
                </div>
              )}

              {isFormulasActive && (
                <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 13, fontFamily: fonts.code }}>
                  {/* Step 0: Unlocked at F1481 */}
                  <div
                    style={{
                      padding: "6px 10px",
                      borderRadius: 6,
                      backgroundColor: topVal ? "rgba(255, 209, 102, 0.2)" : "transparent",
                      border: `1px solid ${topVal ? theme.gold : theme.chalkLine}`,
                      boxShadow: topVal ? `0 0 10px ${theme.gold}` : "none",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ color: theme.gold, fontWeight: 700 }}>0. Save Top Value:</span>
                    <span style={{ color: theme.chalkText }}>top_val = matrix[top][left + i]</span>
                  </div>

                  {/* Step 1: Unlocked at F1612 */}
                  <div
                    style={{
                      padding: "6px 10px",
                      borderRadius: 6,
                      backgroundColor:
                        (frame >= 1612 && frame < 1750) ||
                        (frame >= 2792 && frame < 2871) ||
                        (frame >= 3559 && frame < 3602) ||
                        (frame >= 4245 && frame < 4283) ||
                        (frame >= 5347 && frame < 5384) ||
                        (frame >= 6010 && frame < 6046)
                          ? "rgba(76, 201, 240, 0.2)"
                          : "transparent",
                      border: `1px solid ${
                        (frame >= 1612 && frame < 1750) ||
                        (frame >= 2792 && frame < 2871) ||
                        (frame >= 3559 && frame < 3602) ||
                        (frame >= 4245 && frame < 4283) ||
                        (frame >= 5347 && frame < 5384) ||
                        (frame >= 6010 && frame < 6046)
                          ? theme.cyan
                          : theme.chalkLine
                      }`,
                      display: "flex",
                      justifyContent: "space-between",
                      opacity: frame >= 1612 ? 1 : 0.45,
                    }}
                  >
                    <span style={{ color: theme.cyan, fontWeight: 700 }}>1. Bottom-Left ➔ Top:</span>
                    <span style={{ color: theme.chalkText }}>
                      {frame >= 1612 ? "matrix[top][left+i] = matrix[bot-i][left]" : "Waiting..."}
                    </span>
                  </div>

                  {/* Step 2: Unlocked at F1750 */}
                  <div
                    style={{
                      padding: "6px 10px",
                      borderRadius: 6,
                      backgroundColor:
                        (frame >= 1750 && frame < 1886) ||
                        (frame >= 2871 && frame < 2985) ||
                        (frame >= 3602 && frame < 3668) ||
                        (frame >= 4283 && frame < 4354) ||
                        (frame >= 5384 && frame < 5454) ||
                        (frame >= 6046 && frame < 6114)
                          ? "rgba(76, 201, 240, 0.2)"
                          : "transparent",
                      border: `1px solid ${
                        (frame >= 1750 && frame < 1886) ||
                        (frame >= 2871 && frame < 2985) ||
                        (frame >= 3602 && frame < 3668) ||
                        (frame >= 4283 && frame < 4354) ||
                        (frame >= 5384 && frame < 5454) ||
                        (frame >= 6046 && frame < 6114)
                          ? theme.cyan
                          : theme.chalkLine
                      }`,
                      display: "flex",
                      justifyContent: "space-between",
                      opacity: frame >= 1750 ? 1 : 0.45,
                    }}
                  >
                    <span style={{ color: theme.cyan, fontWeight: 700 }}>2. Bottom-Right ➔ Left:</span>
                    <span style={{ color: theme.chalkText }}>
                      {frame >= 1750 ? "matrix[bot-i][left] = matrix[bot][right-i]" : "Waiting..."}
                    </span>
                  </div>

                  {/* Step 3: Unlocked at F1886 */}
                  <div
                    style={{
                      padding: "6px 10px",
                      borderRadius: 6,
                      backgroundColor:
                        (frame >= 1886 && frame < 2024) ||
                        (frame >= 2985 && frame < 3091) ||
                        (frame >= 3668 && frame < 3746) ||
                        (frame >= 4354 && frame < 4421) ||
                        (frame >= 5454 && frame < 5524) ||
                        (frame >= 6114 && frame < 6185)
                          ? "rgba(76, 201, 240, 0.2)"
                          : "transparent",
                      border: `1px solid ${
                        (frame >= 1886 && frame < 2024) ||
                        (frame >= 2985 && frame < 3091) ||
                        (frame >= 3668 && frame < 3746) ||
                        (frame >= 4354 && frame < 4421) ||
                        (frame >= 5454 && frame < 5524) ||
                        (frame >= 6114 && frame < 6185)
                          ? theme.cyan
                          : theme.chalkLine
                      }`,
                      display: "flex",
                      justifyContent: "space-between",
                      opacity: frame >= 1886 ? 1 : 0.45,
                    }}
                  >
                    <span style={{ color: theme.cyan, fontWeight: 700 }}>3. Top-Right ➔ Bottom:</span>
                    <span style={{ color: theme.chalkText }}>
                      {frame >= 1886 ? "matrix[bot][right-i] = matrix[top+i][right]" : "Waiting..."}
                    </span>
                  </div>

                  {/* Step 4: Unlocked at F2024 */}
                  <div
                    style={{
                      padding: "6px 10px",
                      borderRadius: 6,
                      backgroundColor:
                        (frame >= 2024 && frame < 2186) ||
                        (frame >= 3091 && frame < 3172) ||
                        (frame >= 3746 && frame < 3824) ||
                        (frame >= 4421 && frame < 4477) ||
                        (frame >= 5524 && frame < 5585) ||
                        (frame >= 6185 && frame < 6244)
                          ? "rgba(255, 209, 102, 0.2)"
                          : "transparent",
                      border: `1px solid ${
                        (frame >= 2024 && frame < 2186) ||
                        (frame >= 3091 && frame < 3172) ||
                        (frame >= 3746 && frame < 3824) ||
                        (frame >= 4421 && frame < 4477) ||
                        (frame >= 5524 && frame < 5585) ||
                        (frame >= 6185 && frame < 6244)
                          ? theme.gold
                          : theme.chalkLine
                      }`,
                      boxShadow:
                        (frame >= 2024 && frame < 2186) ||
                        (frame >= 3091 && frame < 3172) ||
                        (frame >= 3746 && frame < 3824) ||
                        (frame >= 4421 && frame < 4477) ||
                        (frame >= 5524 && frame < 5585) ||
                        (frame >= 6185 && frame < 6244)
                          ? `0 0 10px ${theme.gold}`
                          : "none",
                      display: "flex",
                      justifyContent: "space-between",
                      opacity: frame >= 2024 ? 1 : 0.45,
                    }}
                  >
                    <span style={{ color: theme.gold, fontWeight: 700 }}>4. Saved Top ➔ Right:</span>
                    <span style={{ color: theme.chalkText }}>
                      {frame >= 2024 ? "matrix[top+i][right] = top_val" : "Waiting..."}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Auxiliary Memory Box (O(1) space) with RoughBox */}
          <div
            style={{
              position: "relative",
              width: 590,
              height: 52,
              backgroundColor: "rgba(17, 37, 29, 0.94)",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, width: 590, height: 52, pointerEvents: "none" }}>
              <RoughBox
                width={590}
                height={52}
                stroke={topVal ? theme.gold : theme.chalkLine}
                strokeWidth={1.5}
                seed={63}
              />
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                padding: "10px 18px",
                height: "100%",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkSub }}>
                  RAM Auxiliary Storage:
                </span>
                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 15,
                    fontWeight: 700,
                    color: topVal ? theme.gold : theme.chalkSub,
                  }}
                >
                  {topVal ? `top_val = ${topVal}` : "top_val = null"}
                </span>
              </div>
              <span
                style={{
                  fontFamily: fonts.code,
                  fontSize: 12,
                  fontWeight: 700,
                  color: theme.good,
                }}
              >
                O(1) MEMORY ONLY
              </span>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          RIGHT STAGE: CONCENTRIC RINGS HIERARCHY (X: 1210..1840, Y: 195..510)
          ===================================================================== */}
      {frame >= 121 && (
        <div
          style={{
            position: "absolute",
            left: 1210,
            top: 195,
            width: 630,
            opacity: rightCardEntrance,
            transform: `scale(${interpolate(rightCardEntrance, [0, 1], [0.95, 1.0])})`,
            display: "flex",
            flexDirection: "column",
            gap: 14,
            zIndex: 6,
          }}
        >
          {/* Layer Hierarchy Overview Card with RoughBox */}
          <div
            style={{
              position: "relative",
              width: 630,
              minHeight: 235,
              backgroundColor: "rgba(17, 37, 29, 0.94)",
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, width: 630, height: "100%", pointerEvents: "none" }}>
              <RoughBox
                width={630}
                height={235}
                stroke={theme.cyan}
                strokeWidth={2}
                seed={64}
              />
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                padding: "16px 22px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 15,
                    fontWeight: 700,
                    letterSpacing: 1.2,
                    color: theme.cyan,
                  }}
                >
                  CONCENTRIC RINGS HIERARCHY
                </span>
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: fonts.code,
                    padding: "3px 8px",
                    borderRadius: 4,
                    backgroundColor: "rgba(76, 201, 240, 0.15)",
                    color: theme.cyan,
                    fontWeight: 700,
                  }}
                >
                  5×5 MATRIX · 2 RINGS + CORE
                </span>
              </div>

              {/* Layer 0: Outer 5x5 (Unlocks at F211) */}
              <div
                style={{
                  backgroundColor: outerDone
                    ? "rgba(82, 183, 136, 0.15)"
                    : frame >= 604
                    ? "rgba(76, 201, 240, 0.12)"
                    : frame >= 211
                    ? "rgba(76, 201, 240, 0.08)"
                    : "rgba(25, 59, 45, 0.25)",
                  border: `1.5px solid ${outerDone ? theme.good : frame >= 211 ? theme.cyan : theme.chalkLine}`,
                  borderRadius: 8,
                  padding: "8px 12px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  opacity: frame >= 211 ? 1 : 0.45,
                }}
              >
                <div>
                  <div style={{ fontFamily: fonts.code, fontSize: 13, fontWeight: 700, color: outerDone ? theme.good : theme.chalkText }}>
                    Layer 0: Outer 5×5 Border
                  </div>
                  <div style={{ fontSize: 11, color: theme.chalkSub, fontFamily: fonts.code }}>
                    {frame >= 211
                      ? "bounds: top=0, bot=4, left=0, right=4 · 16 cells (4 cycles)"
                      : "Scanning outer boundary..."}
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 11,
                    fontWeight: 700,
                    color: outerDone ? theme.good : frame >= 211 ? theme.cyan : theme.chalkSub,
                  }}
                >
                  {outerDone
                    ? "COMPLETE ✓"
                    : outerC4Active
                    ? "CYCLE 4/4"
                    : outerC3Active
                    ? "CYCLE 3/4"
                    : outerC2Active
                    ? "CYCLE 2/4"
                    : frame >= 604
                    ? "CYCLE 1/4"
                    : frame >= 211
                    ? "FIRST LAYER"
                    : "PENDING"}
                </span>
              </div>

              {/* Layer 1: Inner 3x3 (Unlocks at F424) */}
              <div
                style={{
                  backgroundColor: innerDone
                    ? "rgba(82, 183, 136, 0.15)"
                    : isInnerLayer
                    ? "rgba(255, 209, 102, 0.12)"
                    : frame >= 424
                    ? "rgba(255, 209, 102, 0.08)"
                    : "rgba(25, 59, 45, 0.25)",
                  border: `1.5px solid ${innerDone ? theme.good : isInnerLayer || frame >= 424 ? theme.gold : theme.chalkLine}`,
                  borderRadius: 8,
                  padding: "8px 12px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  opacity: frame >= 424 ? 1 : 0.45,
                }}
              >
                <div>
                  <div style={{ fontFamily: fonts.code, fontSize: 13, fontWeight: 700, color: innerDone ? theme.good : theme.chalkText }}>
                    Layer 1: Inner 3×3 Border
                  </div>
                  <div style={{ fontSize: 11, color: theme.chalkSub, fontFamily: fonts.code }}>
                    {frame >= 424
                      ? "bounds: top=1, bot=3, left=1, right=3 · 8 cells (2 cycles)"
                      : "Scanning inner boundary..."}
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 11,
                    fontWeight: 700,
                    color: innerDone ? theme.good : isInnerLayer || frame >= 424 ? theme.gold : theme.chalkSub,
                  }}
                >
                  {innerDone
                    ? "COMPLETE ✓"
                    : isInnerLayer
                    ? (innerC1Active ? "CYCLE 1/2" : "CYCLE 2/2")
                    : frame >= 424
                    ? "SECOND LAYER"
                    : "PENDING"}
                </span>
              </div>

              {/* Layer 2: Center Core (Unlocks at F525) */}
              <div
                style={{
                  backgroundColor: isCenterFocus || isFullComplete
                    ? "rgba(82, 183, 136, 0.15)"
                    : frame >= 525
                    ? "rgba(25, 59, 45, 0.5)"
                    : "rgba(25, 59, 45, 0.25)",
                  border: `1.5px solid ${isCenterFocus || isFullComplete ? theme.good : frame >= 525 ? theme.gold : theme.chalkLine}`,
                  borderRadius: 8,
                  padding: "8px 12px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  opacity: frame >= 525 ? 1 : 0.45,
                }}
              >
                <div>
                  <div style={{ fontFamily: fonts.code, fontSize: 13, fontWeight: 700, color: theme.chalkText }}>
                    Layer 2: Center Core (1×1)
                  </div>
                  <div style={{ fontSize: 11, color: theme.chalkSub, fontFamily: fonts.code }}>
                    {frame >= 525
                      ? "slot: (2, 2) = 13 · 1 cell · 0 cycles needed"
                      : "Evaluating matrix center..."}
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 11,
                    fontWeight: 700,
                    color: isCenterFocus || isFullComplete ? theme.good : frame >= 525 ? theme.gold : theme.chalkSub,
                  }}
                >
                  {isCenterFocus || isFullComplete ? "INVARIANT ✓" : frame >= 525 ? "LEFT ALONE" : "PENDING"}
                </span>
              </div>
            </div>
          </div>

          {/* Total Cells Rotated Counter with RoughBox */}
          <div
            style={{
              position: "relative",
              width: 630,
              height: 52,
              backgroundColor: "rgba(17, 37, 29, 0.94)",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, width: 630, height: 52, pointerEvents: "none" }}>
              <RoughBox
                width={630}
                height={52}
                stroke={isFullComplete ? theme.good : theme.chalkLine}
                strokeWidth={1.5}
                seed={65}
              />
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                padding: "10px 18px",
                height: "100%",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkSub }}>
                Total Cells Locked:
              </span>
              <span
                style={{
                  fontFamily: fonts.code,
                  fontSize: 15,
                  fontWeight: 700,
                  color: isFullComplete ? theme.good : theme.cyan,
                }}
              >
                {isFullComplete
                  ? "25 / 25 CELLS ROTATED"
                  : innerDone
                  ? "24 / 25 CELLS LOCKED"
                  : outerDone
                  ? "16 / 25 CELLS LOCKED"
                  : outerC3Active
                  ? "8 / 25 CELLS LOCKED"
                  : outerC2Active
                  ? "4 / 25 CELLS LOCKED"
                  : "0 / 25 CELLS LOCKED"}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          BOTTOM ZONE: KEY ALGORITHM TAKEAWAYS & CODE HANDOFF (Y: 675..770)
          Clearance to Captions (Y: 960): 190px
          ===================================================================== */}
      {frame >= 6944 && (
        <div
          style={{
            position: "absolute",
            left: 360,
            top: 675,
            width: 1200,
            height: 95,
            opacity: bottomCardEntrance,
            transform: `translateY(${interpolate(bottomCardEntrance, [0, 1], [15, 0])}px)`,
            backgroundColor: "rgba(17, 37, 29, 0.94)",
            borderRadius: 14,
            overflow: "hidden",
            zIndex: 10,
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, width: 1200, height: 95, pointerEvents: "none" }}>
            <RoughBox
              width={1200}
              height={95}
              stroke={theme.good}
              strokeWidth={2}
              seed={66}
            />
          </div>

          <div
            style={{
              position: "relative",
              zIndex: 2,
              padding: "14px 26px",
              height: "100%",
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span
                style={{
                  fontFamily: fonts.code,
                  fontSize: 16,
                  fontWeight: 700,
                  color: theme.good,
                  letterSpacing: 1,
                }}
              >
                CORE PATTERN: 1 CYCLE ➔ 1 RING ➔ MOVE INWARD
              </span>
              <span style={{ fontSize: 14, color: theme.chalkText, lineHeight: 1.35 }}>
                Finish each 4-position cycle safely using <code>top_val</code>, sweep the layer, then shrink bounds: <code>left++, right--, top++, bottom--</code>.
              </span>
            </div>

            <div
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                backgroundColor: "rgba(82, 183, 136, 0.15)",
                border: `1.5px solid ${theme.good}`,
                fontFamily: fonts.code,
                fontSize: 14,
                fontWeight: 700,
                color: theme.good,
                whiteSpace: "nowrap",
              }}
            >
              {frame >= 7259 ? "NEXT: SCENE 07 CODE ➔" : "TIME: O(N²) · SPACE: O(1)"}
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          CAPTIONS (Y: 960..1010, bottom: 38px, strictly >= 190px below cards)
          ===================================================================== */}
      <Captions words={captionWords} />
    </div>
  );
};
