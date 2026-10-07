/**
 * Scene10Method3Trace.tsx — Scene 10 · Method 3 Full Verified Trace
 * Rotate Image (LeetCode 48) · Pattern 01 — Arrays & Hashing
 *
 * Implements the complete in-place execution of Method 3 on the 5×5 Master Matrix:
 * - Phase 1: Transpose Matrix across Main Diagonal (10 swaps above diagonal where r < c)
 *   - Row 0: (0,1)↔(1,0) [2↔6], (0,2)↔(2,0) [3↔11], (0,3)↔(3,0) [4↔16], (0,4)↔(4,0) [5↔21]
 *   - Row 1: (1,2)↔(2,1) [8↔12], (1,3)↔(3,1) [9↔17], (1,4)↔(4,1) [10↔22]
 *   - Row 2: (2,3)↔(3,2) [14↔18], (2,4)↔(4,2) [15↔23]
 *   - Row 3: (3,4)↔(4,3) [20↔24]
 * - Phase 2: Reverse Every Row Horizontally (Two-Pointer Reversal)
 *   - Row 0: swap(1, 21), swap(6, 16), 11 fixed in middle
 *   - Rows 1, 2, 3, 4: reversed in sequence
 * - Final State: Exactly the 90° Clockwise Rotation verified in-place!
 *
 * Total Duration: 4465 frames @ 30fps (148.840s) strictly from sync/10-method3-trace.json
 */
import React, { useMemo } from "react";
import {
  Audio,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
} from "remotion";

import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme as baseTheme, fonts } from "../../../../kit/lib/theme";

const theme = {
  ...baseTheme,
  gold: baseTheme.pivot,
  bg: baseTheme.boardBg,
  green: "#3FB950",
  amber: "#D29922",
  purple: "#bc8cff",
  fg: baseTheme.chalkText,
  fgMuted: baseTheme.chalkDim,
  chalkSub: baseTheme.chalkDim,
  chalkBorder: baseTheme.cardBorder,
};

import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { RoughBox } from "../../../../kit/components/RoughBox";
import { ChalkDust } from "../../../../kit/components/ChalkDust";
import syncData from "../sync/10-method3-trace.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings (from sync/10-method3-trace.json)
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

// 5x5 Master Matrix Grid Constants
const ROWS = 5;
const COLS = 5;
const CELL_SIZE = 80;
const CELL_GAP = 10;
const GRID_WIDTH = COLS * CELL_SIZE + (COLS - 1) * CELL_GAP; // 440px
const GRID_HEIGHT = ROWS * CELL_SIZE + (ROWS - 1) * CELL_GAP; // 440px

// Initial 5x5 Matrix values (1..25)
const INITIAL_MATRIX = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

export const Scene10Method3Trace: React.FC = () => {
  const frame = useCurrentFrame();

  // -------------------------------------------------------------------------
  // Word & Anchor-Driven Timings (from sync/10-method3-trace.json)
  // -------------------------------------------------------------------------
  // Phase 1: Transpose Setup
  const isDiagonalSpoken = frame >= 556;
  const isOneSideSpoken = frame >= 813;

  // Row 0 Swaps:
  const isRow0Active = frame >= 1046;
  const isSwap0_1 = frame >= 1090; // 2 ↔ 6 (F1078..F1112)
  const isSwap0_2 = frame >= 1174; // 3 ↔ 11 (F1161..F1190)
  const isSwap0_3 = frame >= 1255; // 4 ↔ 16 (F1241..F1270)
  const isSwap0_4 = frame >= 1338; // 5 ↔ 21 (F1320..F1350)
  const isRow0TransposeDone = frame >= 1421;

  // Row 1 Swaps:
  const isRow1Active = frame >= 1667;
  const isSwap1_2 = frame >= 1712; // 8 ↔ 12 (F1691..F1737)
  const isSwap1_3 = frame >= 1795; // 9 ↔ 17 (F1772..F1813)
  const isSwap1_4 = frame >= 1879; // 10 ↔ 22 (F1850..F1897)
  const isRow1TransposeDone = frame >= 1897;

  // Row 2 & 3 Swaps:
  const isRow2Active = frame >= 2119;
  const isSwap2_3 = frame >= 2174; // 14 ↔ 18 (F2144..F2192)
  const isSwap2_4 = frame >= 2263; // 15 ↔ 23 (F2230..F2280)
  const isRow2TransposeDone = frame >= 2280;

  // Row 3 Swap:
  const isSwap3_4 = frame >= 2617; // 20 ↔ 24 (F2590..F2655)
  const isTransposeDone = frame >= 2737;

  // Phase 2: Row Reversals
  const isPhase2Intro = frame >= 3078; // "Reverse. Every row."
  const isRow0RevSwap1 = frame >= 3339; // 1 ↔ 21 (F3315..F3368)
  const isRow0RevSwap2 = frame >= 3442; // 6 ↔ 16 (F3409..F3475)
  const isRow0RevDone = frame >= 3475;

  const isRow1RevDone = frame >= 3637; // Row 1 reversed
  const isRow2RevDone = frame >= 3669; // Row 2 reversed
  const isRow3RevDone = frame >= 3703; // Row 3 reversed
  const isRow4RevDone = frame >= 3751; // Row 4 reversed
  const isAllRowsRevDone = frame >= 3784;

  const isFinalVerified = frame >= 3942;
  const isComplexityPills = frame >= 4141;

  // Calculate dynamic matrix cells
  const currentMatrix = useMemo(() => {
    // Clone initial
    const m = INITIAL_MATRIX.map((row) => [...row]);

    // Apply transpose swaps
    if (isSwap0_1) { const tmp = m[0][1]; m[0][1] = m[1][0]; m[1][0] = tmp; }
    if (isSwap0_2) { const tmp = m[0][2]; m[0][2] = m[2][0]; m[2][0] = tmp; }
    if (isSwap0_3) { const tmp = m[0][3]; m[0][3] = m[3][0]; m[3][0] = tmp; }
    if (isSwap0_4) { const tmp = m[0][4]; m[0][4] = m[4][0]; m[4][0] = tmp; }

    if (isSwap1_2) { const tmp = m[1][2]; m[1][2] = m[2][1]; m[2][1] = tmp; }
    if (isSwap1_3) { const tmp = m[1][3]; m[1][3] = m[3][1]; m[3][1] = tmp; }
    if (isSwap1_4) { const tmp = m[1][4]; m[1][4] = m[4][1]; m[4][1] = tmp; }

    if (isSwap2_3) { const tmp = m[2][3]; m[2][3] = m[3][2]; m[3][2] = tmp; }
    if (isSwap2_4) { const tmp = m[2][4]; m[2][4] = m[4][2]; m[4][2] = tmp; }

    if (isSwap3_4) { const tmp = m[3][4]; m[3][4] = m[4][3]; m[4][3] = tmp; }

    // Apply row 0 partial or full reversal
    if (isRow0RevSwap1) { const tmp = m[0][0]; m[0][0] = m[0][4]; m[0][4] = tmp; }
    if (isRow0RevSwap2) { const tmp = m[0][1]; m[0][1] = m[0][3]; m[0][3] = tmp; }

    // Apply remaining rows full reversal
    if (isRow1RevDone) { m[1].reverse(); }
    if (isRow2RevDone) { m[2].reverse(); }
    if (isRow3RevDone) { m[3].reverse(); }
    if (isRow4RevDone) { m[4].reverse(); }

    return m;
  }, [
    isSwap0_1, isSwap0_2, isSwap0_3, isSwap0_4,
    isSwap1_2, isSwap1_3, isSwap1_4,
    isSwap2_3, isSwap2_4,
    isSwap3_4,
    isRow0RevSwap1, isRow0RevSwap2,
    isRow1RevDone, isRow2RevDone, isRow3RevDone, isRow4RevDone,
  ]);

  // Active swap pair for live visual highlight
  const activeSwap = useMemo(() => {
    if (!isTransposeDone) {
      if (frame >= 1046 && frame < 1120) return { r1: 0, c1: 1, r2: 1, c2: 0, name: "2 ↔ 6" };
      if (frame >= 1120 && frame < 1200) return { r1: 0, c1: 2, r2: 2, c2: 0, name: "3 ↔ 11" };
      if (frame >= 1200 && frame < 1283) return { r1: 0, c1: 3, r2: 3, c2: 0, name: "4 ↔ 16" };
      if (frame >= 1283 && frame < 1370) return { r1: 0, c1: 4, r2: 4, c2: 0, name: "5 ↔ 21" };

      if (frame >= 1667 && frame < 1750) return { r1: 1, c1: 2, r2: 2, c2: 1, name: "8 ↔ 12" };
      if (frame >= 1750 && frame < 1826) return { r1: 1, c1: 3, r2: 3, c2: 1, name: "9 ↔ 17" };
      if (frame >= 1826 && frame < 1928) return { r1: 1, c1: 4, r2: 4, c2: 1, name: "10 ↔ 22" };

      if (frame >= 2119 && frame < 2204) return { r1: 2, c1: 3, r2: 3, c2: 2, name: "14 ↔ 18" };
      if (frame >= 2204 && frame < 2299) return { r1: 2, c1: 4, r2: 4, c2: 2, name: "15 ↔ 23" };

      if (frame >= 2530 && frame < 2690) return { r1: 3, c1: 4, r2: 4, c2: 3, name: "20 ↔ 24" };
    } else if (isPhase2Intro && !isAllRowsRevDone) {
      if (frame >= 3274 && frame < 3388) return { r1: 0, c1: 0, r2: 0, c2: 4, name: "1 ↔ 21 (Row 0)" };
      if (frame >= 3388 && frame < 3536) return { r1: 0, c1: 1, r2: 0, c2: 3, name: "6 ↔ 16 (Row 0)" };
    }
    return null;
  }, [frame, isTransposeDone, isPhase2Intro, isAllRowsRevDone]);

  // Entrance spring
  const entranceSpring = spring({
    frame,
    fps: 30,
    config: { damping: 18, stiffness: 90 },
  });

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        backgroundColor: theme.bg,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      <Audio src={staticFile("audio/014/10-method3-trace.mp3")} />

      {/* ChalkDust Bursts for Milestone Moments */}
      <ChalkDust x={355} y={420} count={24} color={theme.gold} start={556} />
      <ChalkDust x={355} y={350} count={26} color={theme.cyan} start={1090} />
      <ChalkDust x={355} y={230} count={28} color={theme.green} start={1421} />
      <ChalkDust x={355} y={420} count={32} color={theme.purple} start={2737} />
      <ChalkDust x={1240} y={200} count={26} color={theme.purple} start={3078} />
      <ChalkDust x={355} y={230} count={30} color={theme.green} start={3475} />
      <ChalkDust x={355} y={420} count={36} color={theme.green} start={3784} />
      <ChalkDust x={1240} y={580} count={38} color={theme.green} start={3942} />
      <ChalkDust x={1240} y={630} count={30} color={theme.gold} start={4141} />

      {/* ------------------------------------------------------------------- */}
      {/* 1. TOP METADATA BAR (Y: 36..92) — NO EXPLANATION TEXT HERE           */}
      {/* ------------------------------------------------------------------- */}
      <div
        style={{
          position: "absolute",
          top: 36,
          left: 80,
          right: 80,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          opacity: entranceSpring,
          transform: `translateY(${(1 - entranceSpring) * -16}px)`,
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              padding: "6px 14px",
              borderRadius: 6,
              border: "1.5px solid rgba(255, 255, 255, 0.2)",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              fontFamily: fonts.code,
              fontSize: 13,
              fontWeight: 700,
              color: theme.fgMuted,
              letterSpacing: "0.08em",
            }}
          >
            QUESTION 014
          </div>

          <span
            style={{
              fontFamily: fonts.display,
              fontSize: 26,
              fontWeight: 700,
              color: theme.fg,
              letterSpacing: "0.04em",
            }}
          >
            Rotate Image · LeetCode 48
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              padding: "6px 16px",
              borderRadius: 6,
              border: `1.5px solid ${theme.cyan}`,
              backgroundColor: "rgba(56, 189, 248, 0.06)",
              fontFamily: fonts.code,
              fontSize: 13,
              fontWeight: 700,
              color: theme.cyan,
              letterSpacing: "0.08em",
            }}
          >
            METHOD 3: FULL VERIFIED TRACE
          </div>

          <div
            style={{
              padding: "6px 16px",
              borderRadius: 6,
              border: `1.5px solid ${theme.gold}`,
              backgroundColor: "rgba(245, 158, 11, 0.06)",
              fontFamily: fonts.code,
              fontSize: 13,
              fontWeight: 700,
              color: theme.gold,
              letterSpacing: "0.08em",
            }}
          >
            5×5 MASTER TESTCASE
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* 2. CENTER-STAGE HERO ZONE (Y: 135..740)                             */}
      {/* ------------------------------------------------------------------- */}

      {/* LEFT: 5×5 MASTER MATRIX (X: 100..620) */}
      <div
        style={{
          position: "absolute",
          top: 135,
          left: 100,
          width: 510,
          height: 590,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 16,
          boxSizing: "border-box",
        }}
      >
        {/* Hand-drawn chalk container border */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 510,
            height: 590,
            pointerEvents: "none",
          }}
        >
          <RoughBox
            width={510}
            height={590}
            stroke={
              isAllRowsRevDone
                ? theme.green
                : isTransposeDone
                ? theme.purple
                : theme.chalkBorder
            }
            strokeWidth={1.5}
            roughness={0.7}
            seed={101}
          />
        </div>

        {/* Matrix Title & Status Pill */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: 14,
            paddingLeft: 42,
            paddingRight: 10,
          }}
        >
          <div
            style={{
              fontFamily: fonts.code,
              fontSize: 15,
              fontWeight: 800,
              color: theme.fg,
              letterSpacing: "0.06em",
            }}
          >
            MASTER MATRIX (5×5)
          </div>

          {/* Matrix Phase Tag */}
          <div
            style={{
              padding: "3px 10px",
              borderRadius: 4,
              backgroundColor: isAllRowsRevDone
                ? "rgba(63, 185, 80, 0.15)"
                : isTransposeDone
                ? "rgba(188, 140, 255, 0.15)"
                : isDiagonalSpoken
                ? "rgba(245, 158, 11, 0.15)"
                : "rgba(255, 255, 255, 0.06)",
              border: `1px solid ${
                isAllRowsRevDone
                  ? theme.green
                  : isTransposeDone
                  ? theme.purple
                  : isDiagonalSpoken
                  ? theme.gold
                  : "rgba(255, 255, 255, 0.2)"
              }`,
              fontFamily: fonts.code,
              fontSize: 12,
              fontWeight: 800,
              color: isAllRowsRevDone
                ? theme.green
                : isTransposeDone
                ? theme.purple
                : isDiagonalSpoken
                ? theme.gold
                : theme.fgMuted,
            }}
          >
            {isAllRowsRevDone
              ? "ROTATED 90° CLOCKWISE"
              : isTransposeDone
              ? "TRANSPOSE COMPLETE"
              : isDiagonalSpoken
              ? "MAIN DIAGONAL LOCKED"
              : "INITIAL STATE"}
          </div>
        </div>

        {/* Column Headers */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            marginLeft: 42, // space for row headers
            gap: CELL_GAP,
            marginBottom: 8,
          }}
        >
          {Array.from({ length: COLS }).map((_, c) => (
            <div
              key={c}
              style={{
                width: CELL_SIZE,
                textAlign: "center",
                fontFamily: fonts.code,
                fontSize: 13,
                fontWeight: 700,
                color: theme.fgMuted,
              }}
            >
              c{c}
            </div>
          ))}
        </div>

        {/* Matrix Grid with Row Headers */}
        <div style={{ position: "relative", zIndex: 2, display: "flex", gap: 10 }}>
          {/* Row Headers */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: CELL_GAP,
              justifyContent: "space-around",
            }}
          >
            {Array.from({ length: ROWS }).map((_, r) => (
              <div
                key={r}
                style={{
                  height: CELL_SIZE,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  fontFamily: fonts.code,
                  fontSize: 13,
                  fontWeight: 700,
                  color: theme.fgMuted,
                }}
              >
                r{r}
              </div>
            ))}
          </div>

          {/* 5x5 Cells Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${COLS}, ${CELL_SIZE}px)`,
              gridTemplateRows: `repeat(${ROWS}, ${CELL_SIZE}px)`,
              gap: CELL_GAP,
              position: "relative",
            }}
          >
            {currentMatrix.map((row, r) =>
              row.map((val, c) => {
                const isMainDiagonal = r === c;
                const isAboveDiagonal = r < c;

                // Active swap check
                const isActiveSwap1 =
                  activeSwap && activeSwap.r1 === r && activeSwap.c1 === c;
                const isActiveSwap2 =
                  activeSwap && activeSwap.r2 === r && activeSwap.c2 === c;
                const isActiveSwap = isActiveSwap1 || isActiveSwap2;

                // Base styling
                let cellBorder = "rgba(255, 255, 255, 0.12)";
                let cellBg = "rgba(255, 255, 255, 0.02)";
                let cellColor: string = theme.fg;

                if (isActiveSwap) {
                  cellBorder = theme.cyan;
                  cellBg = "rgba(56, 189, 248, 0.3)";
                  cellColor = "#FFF";
                } else if (isAllRowsRevDone) {
                  cellBorder = theme.green;
                  cellBg = "rgba(63, 185, 80, 0.08)";
                  cellColor = theme.green;
                } else if (isMainDiagonal && isDiagonalSpoken) {
                  cellBorder = "rgba(245, 158, 11, 0.6)";
                  cellBg = "rgba(245, 158, 11, 0.06)";
                  cellColor = theme.gold;
                } else if (isAboveDiagonal && isOneSideSpoken && !isTransposeDone) {
                  cellBorder = "rgba(56, 189, 248, 0.25)";
                  cellBg = "rgba(56, 189, 248, 0.03)";
                }

                return (
                  <div
                    key={`${r}-${c}`}
                    style={{
                      width: CELL_SIZE,
                      height: CELL_SIZE,
                      borderRadius: 8,
                      border: `1.5px solid ${cellBorder}`,
                      backgroundColor: cellBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: fonts.code,
                      fontSize: isActiveSwap ? 22 : 18,
                      fontWeight: isActiveSwap
                        ? 900
                        : isMainDiagonal
                        ? 800
                        : 600,
                      color: cellColor,
                      boxShadow: isActiveSwap
                        ? `0 0 20px ${theme.cyan}88`
                        : "none",
                    }}
                  >
                    {val}
                  </div>
                );
              }),
            )}
          </div>
        </div>

        {/* Matrix Footer Tracker */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            marginTop: 14,
            width: "100%",
            paddingLeft: 42,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: fonts.code,
              fontSize: 12,
              color: theme.fgMuted,
            }}
          >
            {isAllRowsRevDone
              ? "All 25 elements rotated into correct clockwise positions"
              : isTransposeDone
              ? "All 10 transpose swaps completed above diagonal"
              : activeSwap
              ? `Currently swapping: ${activeSwap.name}`
              : "Matrix in-situ: zero auxiliary memory allocated"}
          </div>
        </div>
      </div>

      {/* RIGHT: OPERATION HUD, ACTIVE STEP & TRACE INSPECTION (X: 650..1840) */}
      <div
        style={{
          position: "absolute",
          top: 135,
          left: 650,
          right: 80,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {/* SECTION 1: ACTIVE PHASE BANNER */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 20px",
            minHeight: 52,
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
          >
            <RoughBox
              width={1190}
              height={52}
              stroke={isPhase2Intro ? theme.purple : theme.cyan}
              strokeWidth={1.5}
              roughness={0.7}
              seed={102}
            />
          </div>

          <div style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", gap: 14 }}>
            <span
              style={{
                backgroundColor: isPhase2Intro ? theme.purple : theme.cyan,
                color: "#000",
                padding: "3px 10px",
                borderRadius: 4,
                fontFamily: fonts.code,
                fontSize: 12,
                fontWeight: 900,
                letterSpacing: "0.08em",
              }}
            >
              {isPhase2Intro ? "PHASE 2" : "PHASE 1"}
            </span>

            <span
              style={{
                fontFamily: fonts.code,
                fontSize: 16,
                fontWeight: 800,
                color: theme.fg,
              }}
            >
              {isPhase2Intro
                ? "REVERSE EVERY ROW (TWO-POINTER IN-PLACE FLIP)"
                : "TRANSPOSE MATRIX (SWAP SYMMETRIC PAIRS WHERE r < c)"}
            </span>
          </div>

          <div
            style={{
              position: "relative",
              zIndex: 2,
              fontFamily: fonts.code,
              fontSize: 13,
              fontWeight: 700,
              color: isPhase2Intro ? theme.purple : theme.cyan,
            }}
          >
            {isAllRowsRevDone
              ? "PHASE 2 COMPLETE ✓"
              : isTransposeDone
              ? "PHASE 1 COMPLETE ✓"
              : activeSwap
              ? `ACTIVE: ${activeSwap.name}`
              : "INSPECTION"}
          </div>
        </div>

        {/* SECTION 2: LIVE ACTION & SWAP DETAILS (PHASE 1) */}
        {!isTransposeDone && (
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              padding: "16px 20px",
              minHeight: 220,
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
              }}
            >
              <RoughBox
                width={1190}
                height={230}
                stroke={theme.gold}
                strokeWidth={1.5}
                roughness={0.7}
                seed={103}
              />
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: fonts.code,
                  fontSize: 13,
                  fontWeight: 800,
                  color: theme.gold,
                  letterSpacing: "0.06em",
                }}
              >
                STAGE 1 SWAP SEQUENCING (10 PAIRS ABOVE DIAGONAL):
              </span>

              {isDiagonalSpoken && (
                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 12,
                    color: theme.gold,
                  }}
                >
                  Diagonal cells (r == c) untouched
                </span>
              )}
            </div>

            {/* Swap Progress Tokens by Row (Zero-spoiler appearance) */}
            <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", gap: 8 }}>
              {/* Row 0 Swaps (Revealed when row 0 begins at F1046) */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "6px 12px",
                  borderRadius: 6,
                  backgroundColor: isRow0TransposeDone
                    ? "rgba(63, 185, 80, 0.08)"
                    : "rgba(255, 255, 255, 0.03)",
                  border: isRow0TransposeDone
                    ? `1px solid ${theme.green}`
                    : "1px solid rgba(255, 255, 255, 0.08)",
                  opacity: isRow0Active ? 1 : 0.4,
                }}
              >
                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 12,
                    fontWeight: 800,
                    color: isRow0TransposeDone ? theme.green : theme.fgMuted,
                    width: 60,
                  }}
                >
                  ROW 0:
                </span>
                {isRow0Active ? (
                  <>
                    <span
                      style={{
                        fontFamily: fonts.code,
                        fontSize: 13,
                        color: isSwap0_1 ? theme.cyan : theme.fgMuted,
                      }}
                    >
                      (0,1)↔(1,0) [2↔6]
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.2)" }}>•</span>
                    <span
                      style={{
                        fontFamily: fonts.code,
                        fontSize: 13,
                        color: isSwap0_2 ? theme.cyan : theme.fgMuted,
                      }}
                    >
                      (0,2)↔(2,0) [3↔11]
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.2)" }}>•</span>
                    <span
                      style={{
                        fontFamily: fonts.code,
                        fontSize: 13,
                        color: isSwap0_3 ? theme.cyan : theme.fgMuted,
                      }}
                    >
                      (0,3)↔(3,0) [4↔16]
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.2)" }}>•</span>
                    <span
                      style={{
                        fontFamily: fonts.code,
                        fontSize: 13,
                        color: isSwap0_4 ? theme.cyan : theme.fgMuted,
                      }}
                    >
                      (0,4)↔(4,0) [5↔21]
                    </span>
                  </>
                ) : (
                  <span style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkSub }}>
                    Ready to scan columns above main diagonal...
                  </span>
                )}
                {isRow0TransposeDone && (
                  <span
                    style={{
                      marginLeft: "auto",
                      fontFamily: fonts.code,
                      fontSize: 12,
                      fontWeight: 700,
                      color: theme.green,
                    }}
                  >
                    ✓ 4/4 Done
                  </span>
                )}
              </div>

              {/* Row 1 Swaps (Revealed when row 1 begins at F1667) */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "6px 12px",
                  borderRadius: 6,
                  backgroundColor: isRow1TransposeDone
                    ? "rgba(63, 185, 80, 0.08)"
                    : "rgba(255, 255, 255, 0.03)",
                  border: isRow1TransposeDone
                    ? `1px solid ${theme.green}`
                    : "1px solid rgba(255, 255, 255, 0.08)",
                  opacity: isRow1Active ? 1 : 0.4,
                }}
              >
                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 12,
                    fontWeight: 800,
                    color: isRow1TransposeDone ? theme.green : theme.fgMuted,
                    width: 60,
                  }}
                >
                  ROW 1:
                </span>
                {isRow1Active ? (
                  <>
                    <span
                      style={{
                        fontFamily: fonts.code,
                        fontSize: 12,
                        color: theme.gold,
                      }}
                    >
                      [7 on diag]
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.2)" }}>•</span>
                    <span
                      style={{
                        fontFamily: fonts.code,
                        fontSize: 13,
                        color: isSwap1_2 ? theme.cyan : theme.fgMuted,
                      }}
                    >
                      (1,2)↔(2,1) [8↔12]
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.2)" }}>•</span>
                    <span
                      style={{
                        fontFamily: fonts.code,
                        fontSize: 13,
                        color: isSwap1_3 ? theme.cyan : theme.fgMuted,
                      }}
                    >
                      (1,3)↔(3,1) [9↔17]
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.2)" }}>•</span>
                    <span
                      style={{
                        fontFamily: fonts.code,
                        fontSize: 13,
                        color: isSwap1_4 ? theme.cyan : theme.fgMuted,
                      }}
                    >
                      (1,4)↔(4,1) [10↔22]
                    </span>
                  </>
                ) : (
                  <span style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkSub }}>
                    Pending Row 0 completion...
                  </span>
                )}
                {isRow1TransposeDone && (
                  <span
                    style={{
                      marginLeft: "auto",
                      fontFamily: fonts.code,
                      fontSize: 12,
                      fontWeight: 700,
                      color: theme.green,
                    }}
                  >
                    ✓ 3/3 Done
                  </span>
                )}
              </div>

              {/* Row 2 & 3 Swaps (Revealed when row 2 begins at F2119) */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "6px 12px",
                  borderRadius: 6,
                  backgroundColor: isTransposeDone
                    ? "rgba(63, 185, 80, 0.08)"
                    : "rgba(255, 255, 255, 0.03)",
                  border: isTransposeDone
                    ? `1px solid ${theme.green}`
                    : "1px solid rgba(255, 255, 255, 0.08)",
                  opacity: isRow2Active ? 1 : 0.4,
                }}
              >
                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 12,
                    fontWeight: 800,
                    color: isTransposeDone ? theme.green : theme.fgMuted,
                    width: 60,
                  }}
                >
                  ROWS 2-3:
                </span>
                {isRow2Active ? (
                  <>
                    <span
                      style={{
                        fontFamily: fonts.code,
                        fontSize: 13,
                        color: isSwap2_3 ? theme.cyan : theme.fgMuted,
                      }}
                    >
                      (2,3)↔(3,2) [14↔18]
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.2)" }}>•</span>
                    <span
                      style={{
                        fontFamily: fonts.code,
                        fontSize: 13,
                        color: isSwap2_4 ? theme.cyan : theme.fgMuted,
                      }}
                    >
                      (2,4)↔(4,2) [15↔23]
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.2)" }}>•</span>
                    <span
                      style={{
                        fontFamily: fonts.code,
                        fontSize: 13,
                        color: isSwap3_4 ? theme.cyan : theme.fgMuted,
                      }}
                    >
                      (3,4)↔(4,3) [20↔24]
                    </span>
                  </>
                ) : (
                  <span style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkSub }}>
                    Pending previous rows completion...
                  </span>
                )}
                {isTransposeDone && (
                  <span
                    style={{
                      marginLeft: "auto",
                      fontFamily: fonts.code,
                      fontSize: 12,
                      fontWeight: 700,
                      color: theme.green,
                    }}
                  >
                    ✓ 3/3 Done
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TRANSPOSE COMPLETE TRANSITION CARD (F2737..F3078) */}
        {isTransposeDone && !isPhase2Intro && (
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              padding: "18px 24px",
              minHeight: 180,
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
              }}
            >
              <RoughBox
                width={1190}
                height={180}
                stroke={theme.purple}
                strokeWidth={1.5}
                roughness={0.7}
                seed={106}
              />
            </div>

            <div style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 20, color: theme.purple }}>✓</span>
              <span
                style={{
                  fontFamily: fonts.code,
                  fontSize: 16,
                  fontWeight: 800,
                  color: theme.purple,
                  letterSpacing: "0.06em",
                }}
              >
                STEP 1: TRANSPOSE MATRIX COMPLETED ACROSS MAIN DIAGONAL
              </span>
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                fontFamily: fonts.code,
                fontSize: 14,
                color: theme.fg,
                lineHeight: 1.6,
              }}
            >
              Every element <span style={{ color: theme.cyan }}>(r, c)</span> has moved to symmetric coordinate{" "}
              <span style={{ color: theme.gold }}>(c, r)</span>.
              <br />
              <span style={{ color: theme.amber }}>Notice:</span> The original columns have become rows. But this is not yet the clockwise rotation!
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginTop: 4,
                fontFamily: fonts.code,
                fontSize: 13,
                fontWeight: 700,
                color: theme.purple,
              }}
            >
              <span>NEXT STEP ──►</span>
              <span style={{ color: "#FFF" }}>Reverse each row horizontally to reach clockwise target!</span>
            </div>
          </div>
        )}

        {/* SECTION 3: PHASE 2 (ROW REVERSALS) HUD */}
        {isPhase2Intro && (
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              padding: "16px 20px",
              minHeight: 220,
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
              }}
            >
              <RoughBox
                width={1190}
                height={220}
                stroke={theme.purple}
                strokeWidth={1.5}
                roughness={0.7}
                seed={104}
              />
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: fonts.code,
                  fontSize: 13,
                  fontWeight: 800,
                  color: theme.purple,
                  letterSpacing: "0.06em",
                }}
              >
                HORIZONTAL ROW REVERSAL (left &lt; right):
              </span>
              <span
                style={{
                  fontFamily: fonts.code,
                  fontSize: 12,
                  color: theme.fgMuted,
                }}
              >
                Two pointers per row: swap(row[left], row[right])
              </span>
            </div>

            {/* Row Reversals Progress (Zero spoilers) */}
            <div style={{ position: "relative", zIndex: 2, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {/* Row 0 Reversal Breakdown */}
              <div
                style={{
                  padding: "8px 12px",
                  borderRadius: 6,
                  backgroundColor: isRow0RevDone
                    ? "rgba(63, 185, 80, 0.1)"
                    : "rgba(188, 140, 255, 0.08)",
                  border: `1px solid ${isRow0RevDone ? theme.green : theme.purple}`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span
                    style={{
                      fontFamily: fonts.code,
                      fontSize: 13,
                      fontWeight: 800,
                      color: isRow0RevDone ? theme.green : theme.purple,
                    }}
                  >
                    Row 0:
                  </span>
                  <span
                    style={{
                      fontFamily: fonts.code,
                      fontSize: 11,
                      color: theme.fgMuted,
                    }}
                  >
                    {isRow0RevDone ? "COMPLETE ✓" : "SWAPPING 1↔21, 6↔16"}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 13,
                    color: isRow0RevDone ? theme.green : theme.chalkText,
                  }}
                >
                  {isRow0RevDone
                    ? "[1, 6, 11, 16, 21] ──► [21, 16, 11, 6, 1]"
                    : "[1, 6, 11, 16, 21] (reversing...)"}
                </div>
              </div>

              {/* Row 1 Reversal */}
              <div
                style={{
                  padding: "8px 12px",
                  borderRadius: 6,
                  backgroundColor: isRow1RevDone
                    ? "rgba(63, 185, 80, 0.1)"
                    : "rgba(255, 255, 255, 0.03)",
                  border: `1px solid ${isRow1RevDone ? theme.green : "rgba(255,255,255,0.1)"}`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span
                    style={{
                      fontFamily: fonts.code,
                      fontSize: 13,
                      fontWeight: 800,
                      color: isRow1RevDone ? theme.green : theme.chalkDim,
                    }}
                  >
                    Row 1:
                  </span>
                  <span style={{ fontFamily: fonts.code, fontSize: 11, color: theme.chalkDim }}>
                    {isRow1RevDone ? "COMPLETE ✓" : "PENDING"}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 13,
                    color: isRow1RevDone ? theme.green : theme.chalkDim,
                  }}
                >
                  {isRow1RevDone
                    ? "[2, 7, 12, 17, 22] ──► [22, 17, 12, 7, 2]"
                    : "[2, 7, 12, 17, 22] (pending reversal)"}
                </div>
              </div>

              {/* Row 2 Reversal */}
              <div
                style={{
                  padding: "8px 12px",
                  borderRadius: 6,
                  backgroundColor: isRow2RevDone
                    ? "rgba(63, 185, 80, 0.1)"
                    : "rgba(255, 255, 255, 0.03)",
                  border: `1px solid ${isRow2RevDone ? theme.green : "rgba(255,255,255,0.1)"}`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span
                    style={{
                      fontFamily: fonts.code,
                      fontSize: 13,
                      fontWeight: 800,
                      color: isRow2RevDone ? theme.green : theme.chalkDim,
                    }}
                  >
                    Row 2:
                  </span>
                  <span style={{ fontFamily: fonts.code, fontSize: 11, color: theme.chalkDim }}>
                    {isRow2RevDone ? "COMPLETE ✓" : "PENDING"}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 13,
                    color: isRow2RevDone ? theme.green : theme.chalkDim,
                  }}
                >
                  {isRow2RevDone
                    ? "[3, 8, 13, 18, 23] ──► [23, 18, 13, 8, 3]"
                    : "[3, 8, 13, 18, 23] (pending reversal)"}
                </div>
              </div>

              {/* Rows 3 & 4 Reversal */}
              <div
                style={{
                  padding: "8px 12px",
                  borderRadius: 6,
                  backgroundColor: isAllRowsRevDone
                    ? "rgba(63, 185, 80, 0.1)"
                    : "rgba(255, 255, 255, 0.03)",
                  border: `1px solid ${isAllRowsRevDone ? theme.green : "rgba(255,255,255,0.1)"}`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span
                    style={{
                      fontFamily: fonts.code,
                      fontSize: 13,
                      fontWeight: 800,
                      color: isAllRowsRevDone ? theme.green : theme.chalkDim,
                    }}
                  >
                    Rows 3 & 4:
                  </span>
                  <span style={{ fontFamily: fonts.code, fontSize: 11, color: theme.chalkDim }}>
                    {isAllRowsRevDone ? "COMPLETE ✓" : "PENDING"}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 13,
                    color: isAllRowsRevDone ? theme.green : theme.chalkDim,
                  }}
                >
                  {isAllRowsRevDone
                    ? "R3: [24,19,14,9,4] · R4: [25,20,15,10,5]"
                    : "Rows 3 & 4 (pending reversal)"}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 4: FINAL ROTATION VERIFICATION & COMPLEXITY PILLS */}
        {isFinalVerified && (
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              padding: "16px 20px",
              minHeight: 110,
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
              }}
            >
              <RoughBox
                width={1190}
                height={110}
                stroke={theme.green}
                strokeWidth={1.5}
                roughness={0.7}
                seed={105}
              />
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 20, color: theme.green }}>✓</span>
                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 16,
                    fontWeight: 800,
                    color: theme.green,
                    letterSpacing: "0.06em",
                  }}
                >
                  90° CLOCKWISE ROTATION VERIFIED & COMPLETE
                </span>
              </div>

              <div
                style={{
                  fontFamily: fonts.code,
                  fontSize: 12,
                  fontWeight: 800,
                  color: theme.gold,
                  padding: "3px 10px",
                  borderRadius: 4,
                  backgroundColor: "rgba(245, 158, 11, 0.15)",
                  border: `1px solid ${theme.gold}`,
                }}
              >
                ZERO EXTRA ARRAYS
              </div>
            </div>

            {/* Complexity Badges (Zero spoilers) */}
            {isComplexityPills && (
              <div style={{ position: "relative", zIndex: 2, display: "flex", gap: 14 }}>
                <div
                  style={{
                    padding: "8px 16px",
                    borderRadius: 6,
                    backgroundColor: "rgba(56, 189, 248, 0.1)",
                    border: `1.5px solid ${theme.cyan}`,
                    fontFamily: fonts.code,
                    fontSize: 13,
                    fontWeight: 700,
                    color: theme.chalkText,
                  }}
                >
                  TIME COMPLEXITY:{" "}
                  <span style={{ color: theme.cyan, fontSize: 16, fontWeight: 900 }}>
                    O(N²)
                  </span>{" "}
                  (N²/2 transpose + N²/2 reversal)
                </div>

                <div
                  style={{
                    padding: "8px 16px",
                    borderRadius: 6,
                    backgroundColor: "rgba(63, 185, 80, 0.1)",
                    border: `1.5px solid ${theme.green}`,
                    fontFamily: fonts.code,
                    fontSize: 13,
                    fontWeight: 700,
                    color: theme.chalkText,
                  }}
                >
                  SPACE COMPLEXITY:{" "}
                  <span style={{ color: theme.green, fontSize: 16, fontWeight: 900 }}>
                    O(1)
                  </span>{" "}
                  (100% In-Place)
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* 3. BOTTOM CAPTIONS (Y: 960..1010) — > 240px PRISTINE BREATHING ROOM */}
      {/* ------------------------------------------------------------------- */}
      <Captions words={captionWords} />
    </div>
  );
};
