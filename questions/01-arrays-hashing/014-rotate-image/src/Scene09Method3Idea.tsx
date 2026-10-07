/**
 * Scene09Method3Idea.tsx — Scene 09 · Method 3 Idea & Algebraic Proof
 * Rotate Image (LeetCode 48) · Pattern 01 — Arrays & Hashing
 *
 * Implements the mathematical proof decomposing 90° clockwise rotation:
 * - Left Center-Stage: 5×5 Master Matrix illustrating:
 *   - Cell (r, c) = (1, 2) [value 8]
 *   - Step 1: Transpose reflects across main diagonal to (2, 1)
 *   - Step 2: Reverse row 2 flips column 1 to column 3 -> (2, 3)
 *   - Direct 90° rotation also lands at (2, 3) [Visual Proof!]
 * - Right Center-Stage: Algebraic Proof & Individual Tokens (NO AI-slop cards):
 *   - Target formula: (r, c) ──► (c, n - 1 - r)
 *   - Step 1: Transpose: (r, c) ──► (c, r) [Row c is matched! ✓]
 *   - Step 2: Reverse Row: (c, r) ──► (c, n - 1 - r) [Col n-1-r is matched! ✓]
 *   - Unified Chain: (r, c) ──► (c, r) ──► (c, n - 1 - r) ≡ 90° Clockwise Rotation
 *   - Action Plan & Handoff to Scene 10 Full Matrix Trace
 *
 * Total Duration: 2325 frames @ 30fps (77.500s) strictly from sync/09-method3-idea.json
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
import syncData from "../sync/09-method3-idea.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings (from sync/09-method3-idea.json)
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

// 5x5 Master Matrix Grid Constants
const ROWS = 5;
const COLS = 5;
const CELL_SIZE = 64;
const CELL_GAP = 8;
const GRID_WIDTH = COLS * CELL_SIZE + (COLS - 1) * CELL_GAP; // 352px
const GRID_HEIGHT = ROWS * CELL_SIZE + (ROWS - 1) * CELL_GAP; // 352px

// Initial 5x5 Matrix values (1..25)
const INITIAL_MATRIX = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

export const Scene09Method3Idea: React.FC = () => {
  const frame = useCurrentFrame();

  // -------------------------------------------------------------------------
  // Word & Anchor-Driven Timings (from sync/09-method3-idea.json)
  // -------------------------------------------------------------------------
  const isTargetFormula = frame >= 157;
  const isCoordBreakdown = frame >= 262;
  const isSplitProposal = frame >= 511;
  const isTransposeStep = frame >= 738;
  const isRowMatchSpoken = frame >= 1009;
  const isColPendingSpoken = frame >= 1087;
  const isReverseRowStep = frame >= 1175;
  const isColMatchedSpoken = frame >= 1315;
  const isUnifiedProofSpoken = frame >= 1421;
  const isProofComplete = frame >= 1759;
  const isPlanSpoken = frame >= 1965;
  const isHandoffSpoken = frame >= 2180;

  // Spring animations for clean entrance
  const entranceSpring = spring({
    frame,
    fps: 30,
    config: { damping: 18, stiffness: 90 },
  });

  const matrixSpring = spring({
    frame: Math.max(0, frame - 30),
    fps: 30,
    config: { damping: 18, stiffness: 85 },
  });

  const targetSpring = spring({
    frame: Math.max(0, frame - 157),
    fps: 30,
    config: { damping: 18, stiffness: 85 },
  });

  const splitSpring = spring({
    frame: Math.max(0, frame - 511),
    fps: 30,
    config: { damping: 18, stiffness: 85 },
  });

  const transposeSpring = spring({
    frame: Math.max(0, frame - 738),
    fps: 30,
    config: { damping: 18, stiffness: 85 },
  });

  const reverseSpring = spring({
    frame: Math.max(0, frame - 1175),
    fps: 30,
    config: { damping: 18, stiffness: 85 },
  });

  const proofSpring = spring({
    frame: Math.max(0, frame - 1421),
    fps: 30,
    config: { damping: 18, stiffness: 85 },
  });

  const planSpring = spring({
    frame: Math.max(0, frame - 1965),
    fps: 30,
    config: { damping: 18, stiffness: 85 },
  });

  const handoffSpring = spring({
    frame: Math.max(0, frame - 2180),
    fps: 30,
    config: { damping: 18, stiffness: 85 },
  });

  // Cell position tracker for hero value 8 (starts at r=1, c=2)
  // After Transpose: moves to (2, 1)
  // After Reverse Row: moves to (2, 3)
  const isVal8Transposed = frame >= 738;
  const isVal8Reversed = frame >= 1175;

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

      <Audio src={staticFile("audio/014/09-method3-idea.mp3")} />

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
            METHOD 3: TRANSPOSE + REVERSE ROW
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
            ALGEBRAIC PROOF
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* 2. CENTER-STAGE HERO ZONE (Y: 135..755)                             */}
      {/* ------------------------------------------------------------------- */}

      {/* LEFT COLUMN: 5x5 MASTER MATRIX & CELL TRANSFORMATION TRACKER (X: 90..530) */}
      <div
        style={{
          position: "absolute",
          top: 135,
          left: 90,
          width: 440,
          height: 600,
          opacity: matrixSpring,
          transform: `scale(${0.95 + 0.05 * matrixSpring})`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, width: 440, height: 600, pointerEvents: "none" }}>
          <RoughBox width={440} height={600} stroke={theme.chalkBorder} seed={91} strokeWidth={1.6} />
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            height: "100%",
            padding: "16px 14px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
        {/* Matrix Header Banner */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 16,
            gap: 4,
          }}
        >
          <div
            style={{
              fontFamily: fonts.code,
              fontSize: 14,
              fontWeight: 800,
              color: theme.fg,
              letterSpacing: "0.08em",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span>MASTER MATRIX (5×5)</span>
            {isTransposeStep && (
              <span
                style={{
                  fontSize: 11,
                  padding: "2px 8px",
                  borderRadius: 4,
                  backgroundColor: "rgba(245, 158, 11, 0.15)",
                  color: theme.gold,
                  border: `1px solid ${theme.gold}`,
                }}
              >
                DIAGONAL FIXED
              </span>
            )}
          </div>
          <div
            style={{
              fontFamily: fonts.code,
              fontSize: 12,
              color: theme.fgMuted,
            }}
          >
            Tracking cell at (r=1, c=2) · value 8
          </div>
        </div>

        {/* Matrix Column Index Headers */}
        <div
          style={{
            display: "flex",
            marginLeft: 32, // space for row headers
            gap: CELL_GAP,
            marginBottom: 6,
          }}
        >
          {Array.from({ length: COLS }).map((_, c) => (
            <div
              key={c}
              style={{
                width: CELL_SIZE,
                textAlign: "center",
                fontFamily: fonts.code,
                fontSize: 12,
                fontWeight: 700,
                color:
                  c === 2 && !isVal8Transposed
                    ? theme.cyan
                    : c === 1 && isVal8Transposed && !isVal8Reversed
                    ? theme.cyan
                    : c === 3 && isVal8Reversed
                    ? theme.green
                    : theme.fgMuted,
              }}
            >
              c{c}
            </div>
          ))}
        </div>

        {/* Matrix Grid with Row Headers */}
        <div style={{ display: "flex", gap: 8 }}>
          {/* Row Index Headers */}
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
                  fontSize: 12,
                  fontWeight: 700,
                  color:
                    r === 1 && !isVal8Transposed
                      ? theme.cyan
                      : r === 2 && isVal8Transposed
                      ? isVal8Reversed
                        ? theme.green
                        : theme.cyan
                      : theme.fgMuted,
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
            {INITIAL_MATRIX.map((row, r) =>
              row.map((val, c) => {
                const isMainDiagonal = r === c;

                // Check cell states for value 8 tracking
                const isInitial8 = r === 1 && c === 2;
                const isTransposed8 = r === 2 && c === 1;
                const isReversed8 = r === 2 && c === 3;

                let cellVal = val;
                let isCurrentHero = false;
                let cellBorder = "rgba(255, 255, 255, 0.12)";
                let cellBg = "rgba(255, 255, 255, 0.02)";
                let cellColor: string = theme.fgMuted;

                if (isInitial8 && !isVal8Transposed) {
                  isCurrentHero = true;
                  cellBorder = theme.cyan;
                  cellBg = "rgba(56, 189, 248, 0.2)";
                  cellColor = theme.cyan;
                } else if (isTransposed8 && isVal8Transposed && !isVal8Reversed) {
                  isCurrentHero = true;
                  cellVal = 8;
                  cellBorder = theme.cyan;
                  cellBg = "rgba(56, 189, 248, 0.25)";
                  cellColor = theme.cyan;
                } else if (isReversed8 && isVal8Reversed) {
                  isCurrentHero = true;
                  cellVal = 8;
                  cellBorder = theme.green;
                  cellBg = "rgba(63, 185, 80, 0.25)";
                  cellColor = theme.green;
                } else if (isMainDiagonal && isTransposeStep) {
                  cellBorder = "rgba(245, 158, 11, 0.4)";
                  cellBg = "rgba(245, 158, 11, 0.04)";
                  cellColor = theme.gold;
                }

                return (
                  <div
                    key={`${r}-${c}`}
                    style={{
                      width: CELL_SIZE,
                      height: CELL_SIZE,
                      borderRadius: 6,
                      border: `1.5px solid ${cellBorder}`,
                      backgroundColor: cellBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: fonts.code,
                      fontSize: isCurrentHero ? 19 : 14,
                      fontWeight: isCurrentHero ? 900 : isMainDiagonal ? 700 : 500,
                      color: cellColor,
                      boxShadow: isCurrentHero
                        ? `0 0 16px ${cellBorder}66`
                        : "none",
                      transition: "none",
                    }}
                  >
                    {cellVal}
                  </div>
                );
              }),
            )}
          </div>
        </div>

        {/* Matrix State Legend Token */}
        <div
          style={{
            marginTop: 18,
            display: "flex",
            flexDirection: "column",
            gap: 6,
            width: "100%",
          }}
        >
          <div
            style={{
              padding: "6px 12px",
              borderRadius: 6,
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              fontFamily: fonts.code,
              fontSize: 12,
              fontWeight: 700,
              color: theme.fg,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>HERO ELEMENT:</span>
            <span style={{ color: theme.cyan }}>value 8</span>
          </div>

          <div
            style={{
              padding: "6px 12px",
              borderRadius: 6,
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              fontFamily: fonts.code,
              fontSize: 12,
              fontWeight: 700,
              color: theme.fg,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>COORDINATE PATH:</span>
            <span
              style={{
                color: isVal8Reversed
                  ? theme.green
                  : isVal8Transposed
                  ? theme.cyan
                  : theme.gold,
              }}
            >
              (1,2) ──► (2,1) ──► (2,3)
            </span>
          </div>
        </div>
        </div>
      </div>

      {/* RIGHT COLUMN: ALGEBRAIC DERIVATION & INDIVIDUAL STEP TOKENS (X: 560..1840) */}
      <div
        style={{
          position: "absolute",
          top: 135,
          left: 560,
          right: 80,
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        {/* ROW 1: DIRECT CLOCKWISE GOAL (F157+) */}
        {isTargetFormula && (
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 66,
              opacity: targetSpring,
              transform: `scale(${0.96 + 0.04 * targetSpring})`,
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 66, pointerEvents: "none" }}>
              <RoughBox width={1280} height={66} stroke={theme.gold} seed={92} strokeWidth={1.6} />
            </div>
            <ChalkDust start={157} x={640} y={33} count={14} color={theme.gold} />

            <div
              style={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 22px",
                width: "100%",
                height: "100%",
                boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 13,
                    fontWeight: 800,
                    color: theme.gold,
                    letterSpacing: "0.08em",
                  }}
                >
                  TARGET DESTINATION:
                </span>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    fontFamily: fonts.code,
                    fontSize: 20,
                    fontWeight: 800,
                  }}
                >
                  <span style={{ color: theme.cyan }}>( r , c )</span>
                  <span style={{ color: theme.gold }}>────────►</span>
                  <span style={{ color: theme.gold }}>( c , n - 1 - r )</span>
                </div>
              </div>

              {/* Target Breakdown Pills */}
              {isCoordBreakdown && (
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    opacity: interpolate(frame, [262, 285], [0, 1], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                    }),
                  }}
                >
                  <div
                    style={{
                      padding: "4px 12px",
                      borderRadius: 4,
                      border: `1px solid ${theme.cyan}`,
                      backgroundColor: "rgba(56, 189, 248, 0.1)",
                      fontFamily: fonts.code,
                      fontSize: 12,
                      fontWeight: 700,
                      color: theme.cyan,
                    }}
                  >
                    TARGET ROW: <span style={{ fontSize: 14 }}>c</span>
                  </div>
                  <div
                    style={{
                      padding: "4px 12px",
                      borderRadius: 4,
                      border: `1px solid ${theme.amber}`,
                      backgroundColor: "rgba(210, 153, 34, 0.1)",
                      fontFamily: fonts.code,
                      fontSize: 12,
                      fontWeight: 700,
                      color: theme.amber,
                    }}
                  >
                    TARGET COL: <span style={{ fontSize: 14 }}>n - 1 - r</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ROW 2: DECOMPOSITION STRATEGY QUESTION (F511+) */}
        {isSplitProposal && (
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 52,
              opacity: splitSpring,
              transform: `translateY(${(1 - splitSpring) * 10}px)`,
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 52, pointerEvents: "none" }}>
              <RoughBox width={1280} height={52} stroke={theme.purple} seed={93} strokeWidth={1.5} />
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 22px",
                width: "100%",
                height: "100%",
                boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 12,
                    fontWeight: 800,
                    color: theme.purple,
                    letterSpacing: "0.08em",
                  }}
                >
                  QUESTION:
                </span>
                <span
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 19,
                    color: theme.fg,
                  }}
                >
                  Can we reach (c, n - 1 - r) using TWO simple elementary operations?
                </span>
              </div>

              <div
                style={{
                  fontFamily: fonts.code,
                  fontSize: 12,
                  fontWeight: 700,
                  color: theme.gold,
                }}
              >
                1. TRANSPOSE ──► 2. REVERSE ROW
              </div>
            </div>
          </div>
        )}

        {/* ROW 3: STEP 1 — TRANSPOSE MATRIX (F738+) */}
        {isTransposeStep && (
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 74,
              opacity: transposeSpring,
              transform: `scale(${0.97 + 0.03 * transposeSpring})`,
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 74, pointerEvents: "none" }}>
              <RoughBox width={1280} height={74} stroke={theme.cyan} seed={94} strokeWidth={1.6} />
            </div>
            <ChalkDust start={738} x={640} y={37} count={16} color={theme.cyan} />

            <div
              style={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 22px",
                width: "100%",
                height: "100%",
                boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div
                  style={{
                    padding: "4px 10px",
                    borderRadius: 4,
                    backgroundColor: theme.cyan,
                    color: "#000",
                    fontFamily: fonts.code,
                    fontSize: 12,
                    fontWeight: 900,
                  }}
                >
                  STEP 1
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span
                    style={{
                      fontFamily: fonts.code,
                      fontSize: 12,
                      fontWeight: 800,
                      color: theme.cyan,
                    }}
                  >
                    TRANSPOSE (SWAP ROWS & COLS ACROSS DIAGONAL)
                  </span>
                  <span
                    style={{
                      fontFamily: fonts.code,
                      fontSize: 18,
                      fontWeight: 800,
                      color: theme.fg,
                    }}
                  >
                    ( r , c ) ────► ( c , r )
                  </span>
                </div>
              </div>

              <div style={{ display: "flex", gap: 10 }}>
                {isRowMatchSpoken && (
                  <div
                    style={{
                      padding: "4px 12px",
                      borderRadius: 6,
                      backgroundColor: "rgba(63, 185, 80, 0.15)",
                      border: `1.5px solid ${theme.green}`,
                      fontFamily: fonts.code,
                      fontSize: 12,
                      fontWeight: 700,
                      color: theme.green,
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span>✓</span>
                    <span>
                      ROW MATCHED: Current row is{" "}
                      <span style={{ textDecoration: "underline" }}>c</span>!
                    </span>
                  </div>
                )}

                {isColPendingSpoken && (
                  <div
                    style={{
                      padding: "4px 12px",
                      borderRadius: 6,
                      backgroundColor: "rgba(210, 153, 34, 0.15)",
                      border: `1.5px solid ${theme.amber}`,
                      fontFamily: fonts.code,
                      fontSize: 12,
                      fontWeight: 700,
                      color: theme.amber,
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span>⚠</span>
                    <span>Col is r (Needs n - 1 - r)</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ROW 4: STEP 2 — REVERSE EVERY ROW (F1175+) */}
        {isReverseRowStep && (
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 74,
              opacity: reverseSpring,
              transform: `scale(${0.97 + 0.03 * reverseSpring})`,
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 74, pointerEvents: "none" }}>
              <RoughBox width={1280} height={74} stroke={theme.purple} seed={95} strokeWidth={1.6} />
            </div>
            <ChalkDust start={1175} x={640} y={37} count={16} color={theme.purple} />

            <div
              style={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 22px",
                width: "100%",
                height: "100%",
                boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div
                  style={{
                    padding: "4px 10px",
                    borderRadius: 4,
                    backgroundColor: theme.purple,
                    color: "#000",
                    fontFamily: fonts.code,
                    fontSize: 12,
                    fontWeight: 900,
                  }}
                >
                  STEP 2
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span
                    style={{
                      fontFamily: fonts.code,
                      fontSize: 12,
                      fontWeight: 800,
                      color: theme.purple,
                    }}
                  >
                    REVERSE EVERY ROW (HORIZONTAL 1D FLIP)
                  </span>
                  <span
                    style={{
                      fontFamily: fonts.code,
                      fontSize: 18,
                      fontWeight: 800,
                      color: theme.fg,
                    }}
                  >
                    In row c: col r ────► col ( n - 1 - r )
                  </span>
                </div>
              </div>

              <div style={{ display: "flex", gap: 10 }}>
                <div
                  style={{
                    padding: "4px 12px",
                    borderRadius: 6,
                    backgroundColor: "rgba(63, 185, 80, 0.1)",
                    border: `1px solid ${theme.green}`,
                    fontFamily: fonts.code,
                    fontSize: 12,
                    fontWeight: 700,
                    color: theme.green,
                  }}
                >
                  <span>✓ Still in row c</span>
                </div>

                {isColMatchedSpoken && (
                  <div
                    style={{
                      padding: "4px 12px",
                      borderRadius: 6,
                      backgroundColor: "rgba(63, 185, 80, 0.15)",
                      border: `1.5px solid ${theme.green}`,
                      fontFamily: fonts.code,
                      fontSize: 12,
                      fontWeight: 700,
                      color: theme.green,
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span>✓</span>
                    <span>
                      COL MATCHED: Index r flips to{" "}
                      <span style={{ textDecoration: "underline" }}>n - 1 - r</span>!
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ROW 5: UNIFIED ALGEBRAIC EQUIVALENCE CHAIN (F1421+) */}
        {isUnifiedProofSpoken && (
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 76,
              opacity: proofSpring,
              transform: `translateY(${(1 - proofSpring) * 10}px)`,
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 76, pointerEvents: "none" }}>
              <RoughBox width={1280} height={76} stroke={theme.gold} seed={96} strokeWidth={1.8} />
            </div>
            <ChalkDust start={1421} x={640} y={38} count={18} color={theme.gold} />
            <ChalkDust start={1759} x={1100} y={38} count={20} color={theme.green} />

            <div
              style={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 22px",
                width: "100%",
                height: "100%",
                boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 20,
                    fontWeight: 800,
                    color: theme.fg,
                  }}
                >
                  ( r , c )
                </span>

                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 12,
                    fontWeight: 700,
                    color: theme.cyan,
                  }}
                >
                  ──[ Transpose ]──►
                </span>

                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 20,
                    fontWeight: 800,
                    color: theme.cyan,
                  }}
                >
                  ( c , r )
                </span>

                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 12,
                    fontWeight: 700,
                    color: theme.purple,
                  }}
                >
                  ──[ Reverse Row ]──►
                </span>

                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 20,
                    fontWeight: 800,
                    color: theme.gold,
                  }}
                >
                  ( c , n - 1 - r )
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    paddingLeft: 16,
                    borderLeft: "2px solid rgba(255, 255, 255, 0.15)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: fonts.code,
                      fontSize: 22,
                      fontWeight: 900,
                      color: theme.gold,
                    }}
                  >
                    ≡
                  </span>
                  <span
                    style={{
                      fontFamily: fonts.code,
                      fontSize: 13,
                      fontWeight: 800,
                      color: theme.gold,
                      letterSpacing: "0.05em",
                    }}
                  >
                    DIRECT 90° ROTATION
                  </span>
                </div>

                {isProofComplete && (
                  <div
                    style={{
                      fontFamily: fonts.code,
                      fontSize: 11,
                      fontWeight: 800,
                      color: theme.green,
                      letterSpacing: "0.08em",
                      padding: "4px 10px",
                      borderRadius: 16,
                      backgroundColor: "rgba(63, 185, 80, 0.15)",
                      border: `1px solid ${theme.green}`,
                      whiteSpace: "nowrap",
                    }}
                  >
                    EXACT MATCH (Q.E.D.) ✓
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ROW 6: ACTION PLAN & SCENE 10 HANDOFF (F1965+) */}
        {isPlanSpoken && (
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 64,
              opacity: planSpring,
              transform: `translateY(${(1 - planSpring) * 10}px)`,
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 64, pointerEvents: "none" }}>
              <RoughBox
                width={1280}
                height={64}
                stroke={isHandoffSpoken ? theme.green : theme.chalkBorder}
                seed={97}
                strokeWidth={1.6}
              />
            </div>
            <ChalkDust start={2180} x={1100} y={32} count={20} color={theme.green} />

            <div
              style={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 22px",
                width: "100%",
                height: "100%",
                boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 13,
                    fontWeight: 800,
                    color: theme.fgMuted,
                    letterSpacing: "0.08em",
                  }}
                >
                  ACTION PLAN:
                </span>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "4px 12px",
                    borderRadius: 6,
                    backgroundColor: "rgba(56, 189, 248, 0.08)",
                    border: `1.5px solid ${theme.cyan}`,
                    fontFamily: fonts.code,
                    fontSize: 13,
                    fontWeight: 700,
                    color: theme.fg,
                  }}
                >
                  <span
                    style={{
                      backgroundColor: theme.cyan,
                      color: "#000",
                      padding: "1px 6px",
                      borderRadius: 3,
                      fontSize: 11,
                      fontWeight: 900,
                    }}
                  >
                    1
                  </span>
                  <span>
                    Transpose: <span style={{ color: theme.cyan }}>swap(r, c) for r &lt; c</span>
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "4px 12px",
                    borderRadius: 6,
                    backgroundColor: "rgba(188, 140, 255, 0.08)",
                    border: `1.5px solid ${theme.purple}`,
                    fontFamily: fonts.code,
                    fontSize: 13,
                    fontWeight: 700,
                    color: theme.fg,
                  }}
                >
                  <span
                    style={{
                      backgroundColor: theme.purple,
                      color: "#000",
                      padding: "1px 6px",
                      borderRadius: 3,
                      fontSize: 11,
                      fontWeight: 900,
                    }}
                  >
                    2
                  </span>
                  <span>
                    Reverse Rows: <span style={{ color: theme.purple }}>reverse(matrix[r])</span>
                  </span>
                </div>
              </div>

              {isHandoffSpoken && (
                <div
                  style={{
                    padding: "6px 16px",
                    borderRadius: 6,
                    backgroundColor: "rgba(63, 185, 80, 0.15)",
                    border: `1.5px solid ${theme.green}`,
                    fontFamily: fonts.code,
                    fontSize: 12,
                    fontWeight: 800,
                    color: theme.green,
                    letterSpacing: "0.06em",
                    opacity: handoffSpring,
                    transform: `scale(${0.96 + 0.04 * handoffSpring})`,
                  }}
                >
                  NEXT: FULL MATRIX 5×5 TRACE ──►
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* 3. BOTTOM CAPTIONS (Y: 960..1010) — > 200px PRISTINE BREATHING ROOM */}
      {/* ------------------------------------------------------------------- */}
      <Captions words={captionWords} />
    </div>
  );
};
