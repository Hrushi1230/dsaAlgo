/**
 * Scene03CopyTrace.tsx — Scene 03 · Method 1 Trace: Full Original Copy
 * Set Matrix Zeroes (LeetCode 73) · Pattern 01 — Arrays & Hashing
 *
 * Implements the complete Method 1 Dual-Matrix Trace:
 * - Master 5×5 Matrix begins center stage, splits into Source Copy (Left) and Working Matrix (Right)
 * - Source Copy (X: 380, Y: 220, 314×314px) is strictly immutable (Read-Only Source of Truth)
 * - Working Matrix (X: 1226, Y: 220, 314×314px) is the mutable target
 * - Sequential source-zero triggers:
 *     1. Source (0, 2) -> Working Row 0 = 0 & Working Col 2 = 0 (F548..F988)
 *     2. Source (2, 0) -> Working Row 2 = 0 & Working Col 0 = 0 (F1187..F1454)
 *     3. Source (3, 3) -> Working Row 3 = 0 & Working Col 3 = 0 (F1579..F1877)
 * - Contrast checks: Source Copy cell (1, 2) remains original 8 throughout!
 * - Verification that working zeros never became secondary sources (no false chain reaction)
 * - Row-by-row final result recitation: [0,0,0,0,0], [0,7,0,0,10], [0,0,0,0,0], [0,0,0,0,0], [0,22,0,0,25]
 * - Space complexity tradeoff: O(M × N) Auxiliary Space
 * - Handoff to Scene 04 (Method 1 Code)
 *
 * Total Duration: 3357 frames @ 30fps (111.900s) strictly from sync/03-copy-trace.json
 */
import React, { useMemo } from "react";
import {
  Audio,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
} from "remotion";

import { ChalkboardBackground, ChalkFilters, CHALK_FILTER_ID } from "../../../../kit/lib/chalk";
import { theme, fonts } from "../../../../kit/lib/theme";
import { EASE } from "../../../../kit/lib/anim";
import { ChalkDust } from "../../../../kit/components/ChalkDust";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import syncData from "../sync/03-copy-trace.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings & Whisper Normalization
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => {
  let word = w.word;
  // Format numeric row recitations for clean reading
  if (word === "00000") word = "[0, 0, 0, 0, 0]";
  else if (word === "0700") word = "[0, 7, 0, 0,";
  else if (word === "10") word = "10]";
  else if (word === "02200") word = "[0, 22, 0, 0,";
  else if (word === "25.") word = "25]";
  else if (word.toLowerCase() === "zeros.") word = "zeroes.";
  else if (word.toLowerCase() === "zeros,") word = "zeroes,";
  else if (word.toLowerCase() === "zeros") word = "zeroes";

  return {
    word,
    start: w.start_ms / 1000,
    end: w.end_ms / 1000,
  };
});

// ---------------------------------------------------------------------------
// Canonical Geometry & Master Matrix
// ---------------------------------------------------------------------------
const ROWS = 5;
const COLS = 5;
const CELL_SIZE = 58;
const CELL_GAP = 6;
const PITCH = CELL_SIZE + CELL_GAP; // 64px
const MATRIX_WIDTH = COLS * CELL_SIZE + (COLS - 1) * CELL_GAP; // 314px
const MATRIX_HEIGHT = ROWS * CELL_SIZE + (ROWS - 1) * CELL_GAP; // 314px

// Single matrix center X initially: 803px
const INITIAL_CENTER_X = (1920 - MATRIX_WIDTH) / 2; // 803px
const INITIAL_CENTER_Y = 220;

// Dual matrix positions after split:
const LEFT_MATRIX_X = 380; // Source Copy
const RIGHT_MATRIX_X = 1226; // Working Matrix
const MATRICES_Y = 220;

const MASTER_GRID = [
  [1, 2, 0, 4, 5],
  [6, 7, 8, 9, 10],
  [0, 12, 13, 14, 15],
  [16, 17, 18, 0, 20],
  [21, 22, 23, 24, 25],
];

export const Scene03CopyTrace: React.FC = () => {
  const frame = useCurrentFrame();

  // =========================================================================
  // 1. Matrix Splitting / Cloning Animation (Beat 02: F68..F194)
  // =========================================================================
  const isSplitStarted = frame >= 68;
  const splitProgress = interpolate(frame, [68, 115], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  const sourceMatrixX = interpolate(splitProgress, [0, 1], [INITIAL_CENTER_X, LEFT_MATRIX_X]);
  const workingMatrixX = interpolate(splitProgress, [0, 1], [INITIAL_CENTER_X, RIGHT_MATRIX_X]);
  const workingMatrixOpacity = interpolate(frame, [68, 90], [0.3, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // =========================================================================
  // 2. Active Operation / Source Tracking
  // =========================================================================
  // Active Source Zero:
  // 1: (0, 2) during F548..F988
  // 2: (2, 0) during F1187..F1454
  // 3: (3, 3) during F1579..F1877
  const activeSource = useMemo(() => {
    if (frame >= 548 && frame < 988) return { r: 0, c: 2, id: 1 };
    if (frame >= 1187 && frame < 1454) return { r: 2, c: 0, id: 2 };
    if (frame >= 1579 && frame < 1877) return { r: 3, c: 3, id: 3 };
    return null;
  }, [frame]);

  // Working Matrix Mutated Rows & Cols (Cumulative progression):
  const isRow0Zeroed = frame >= 813;
  const isCol2Zeroed = frame >= 921;
  const isRow2Zeroed = frame >= 1307;
  const isCol0Zeroed = frame >= 1390;
  const isRow3Zeroed = frame >= 1707;
  const isCol3Zeroed = frame >= 1747;

  // Active highlighted row during final row recitation (Beats 29..33: F2645..F3104)
  const activeRecitationRow = useMemo(() => {
    if (frame >= 2645 && frame < 2710) return 0;
    if (frame >= 2710 && frame < 2792) return 1;
    if (frame >= 2792 && frame < 2860) return 2;
    if (frame >= 2860 && frame < 2939) return 3;
    if (frame >= 2939 && frame < 3104) return 4;
    return null;
  }, [frame]);

  // =========================================================================
  // 3. Status Banners & Callouts
  // =========================================================================
  // Beat 27: Zero Cascade Prevented Banner (F2369..F2516)
  const showCascadePrevented = frame >= 2369 && frame < 2516;
  const cascadeSpring = spring({
    frame: Math.max(0, frame - 2369),
    fps: 30,
    config: { damping: 14, stiffness: 180 },
  });

  // Beat 34: Method 1 Works Banner (F3104..F3197)
  const showWorksBanner = frame >= 3104 && frame < 3197;
  const worksSpring = spring({
    frame: Math.max(0, frame - 3104),
    fps: 30,
    config: { damping: 14, stiffness: 180 },
  });

  // Beat 36: Space Complexity Banner (F3197..F3285)
  const showSpaceCostBanner = frame >= 3197 && frame < 3285;
  const spaceCostSpring = spring({
    frame: Math.max(0, frame - 3197),
    fps: 30,
    config: { damping: 14, stiffness: 180 },
  });

  // Beat 37: Code Handoff Banner (F3285..F3357)
  const showCodeHandoff = frame >= 3285;
  const codeHandoffSpring = spring({
    frame: Math.max(0, frame - 3285),
    fps: 30,
    config: { damping: 14, stiffness: 180 },
  });

  // Projection Arrow animation between matrices
  const isArrowVisible = activeSource !== null && frame >= (activeSource.id === 1 ? 692 : activeSource.id === 2 ? 1250 : 1640);

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
      <Audio src={staticFile("audio/013/03-copy-trace.mp3")} />

      {/* Chalk Dust Bursts on Working Zeroings */}
      {frame >= 813 && frame <= 845 && (
        <ChalkDust x={RIGHT_MATRIX_X + MATRIX_WIDTH / 2} y={MATRICES_Y + CELL_SIZE / 2} start={813} color={theme.good} count={16} radius={50} />
      )}
      {frame >= 1307 && frame <= 1340 && (
        <ChalkDust x={RIGHT_MATRIX_X + MATRIX_WIDTH / 2} y={MATRICES_Y + 2 * PITCH + CELL_SIZE / 2} start={1307} color={theme.good} count={16} radius={50} />
      )}
      {frame >= 1707 && frame <= 1740 && (
        <ChalkDust x={RIGHT_MATRIX_X + MATRIX_WIDTH / 2} y={MATRICES_Y + 3 * PITCH + CELL_SIZE / 2} start={1707} color={theme.good} count={16} radius={50} />
      )}

      {/* Top Problem Header Bar */}
      <div
        style={{
          position: "absolute",
          top: 36,
          left: 80,
          right: 80,
          height: 64,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        {/* Left: Pattern Tag */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "6px 18px",
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
            fontSize: 46,
            fontWeight: 700,
            color: theme.chalkText,
            letterSpacing: "0.5px",
            filter: `url(#${CHALK_FILTER_ID})`,
            textShadow: "0 0 20px rgba(248, 246, 240, 0.25), 0 2px 4px rgba(0,0,0,0.5)",
            transform: "rotate(-0.5deg)",
          }}
        >
          Set Matrix Zeroes
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
            LEETCODE 73
          </span>
          <span
            style={{
              padding: "4px 14px",
              borderRadius: 6,
              backgroundColor: "rgba(255, 169, 77, 0.14)",
              border: `1.5px solid ${theme.better}`,
              color: theme.better,
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: "1px",
            }}
          >
            MEDIUM
          </span>
        </div>
      </div>

      {/* Method 1 Header Pill (Y: 114) */}
      <div
        style={{
          position: "absolute",
          top: 114,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 12,
        }}
      >
        <div
          style={{
            padding: "5px 24px",
            borderRadius: 18,
            backgroundColor: "rgba(92, 225, 230, 0.10)",
            border: `1.5px solid ${theme.cyan}`,
            color: theme.cyan,
            fontFamily: fonts.mono,
            fontSize: 17,
            fontWeight: 700,
            letterSpacing: "1px",
            boxShadow: "0 0 14px rgba(92, 225, 230, 0.2)",
          }}
        >
          METHOD 1: FULL ORIGINAL COPY TRACE
        </div>
      </div>

      {/* =================================================================== */}
      {/* LEFT MATRIX: SOURCE COPY (IMMUTABLE REFERENCE)                      */}
      {/* =================================================================== */}
      <div
        style={{
          position: "absolute",
          left: sourceMatrixX,
          top: MATRICES_Y,
          width: MATRIX_WIDTH,
          height: MATRIX_HEIGHT,
          zIndex: 20,
        }}
      >
        {/* Source Matrix Header (F194 onwards) */}
        {frame >= 194 && (
          <div
            style={{
              position: "absolute",
              top: -46,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              fontFamily: fonts.mono,
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: "0.5px",
              color: theme.cyan,
            }}
          >
            <span style={{ fontSize: 16 }}>👁️</span>
            <span>SOURCE COPY (READ ONLY)</span>
          </div>
        )}

        {/* Column Rulers (Top) */}
        {Array.from({ length: COLS }).map((_, c) => (
          <div
            key={`src-col-${c}`}
            style={{
              position: "absolute",
              top: -24,
              left: c * PITCH,
              width: CELL_SIZE,
              textAlign: "center",
              fontFamily: fonts.mono,
              fontSize: 14,
              fontWeight: 700,
              color: activeSource && activeSource.c === c ? theme.pivot : theme.cyan,
            }}
          >
            [{c}]
          </div>
        ))}

        {/* Row Rulers (Left) */}
        {Array.from({ length: ROWS }).map((_, r) => (
          <div
            key={`src-row-${r}`}
            style={{
              position: "absolute",
              left: -32,
              top: r * PITCH + (CELL_SIZE - 20) / 2,
              width: 24,
              textAlign: "right",
              fontFamily: fonts.mono,
              fontSize: 14,
              fontWeight: 700,
              color: activeSource && activeSource.r === r ? theme.pivot : theme.cyan,
            }}
          >
            [{r}]
          </div>
        ))}

        {/* Source Matrix Cells (100% Immutable values from MASTER_GRID) */}
        {Array.from({ length: ROWS }).map((_, r) =>
          Array.from({ length: COLS }).map((_, c) => {
            const cellLeft = c * PITCH;
            const cellTop = r * PITCH;
            const val = MASTER_GRID[r][c];
            const isOrigZero = (r === 0 && c === 2) || (r === 2 && c === 0) || (r === 3 && c === 3);
            const isCurrentActive = activeSource && activeSource.r === r && activeSource.c === c;
            const isProcessed =
              frame >= 1877 && isOrigZero ||
              (frame >= 988 && r === 0 && c === 2) ||
              (frame >= 1454 && r === 2 && c === 0) ||
              (frame >= 1857 && r === 3 && c === 3);

            return (
              <div
                key={`src-cell-${r}-${c}`}
                style={{
                  position: "absolute",
                  left: cellLeft,
                  top: cellTop,
                  width: CELL_SIZE,
                  height: CELL_SIZE,
                  borderRadius: 8,
                  backgroundColor: isCurrentActive
                    ? "rgba(255, 209, 102, 0.25)"
                    : isOrigZero
                    ? "rgba(255, 209, 102, 0.12)"
                    : "rgba(248, 246, 240, 0.04)",
                  border: `1.5px solid ${
                    isCurrentActive
                      ? theme.pivot
                      : isOrigZero
                      ? "rgba(255, 209, 102, 0.7)"
                      : "rgba(92, 225, 230, 0.4)"
                  }`,
                  boxShadow: isCurrentActive ? `0 0 16px ${theme.pivot}` : undefined,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxSizing: "border-box",
                  filter: `url(#${CHALK_FILTER_ID})`,
                }}
              >
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 26,
                    fontWeight: 800,
                    color: isOrigZero ? theme.pivot : theme.chalkText,
                  }}
                >
                  {val}
                </span>

                {/* Checked Badge when processed */}
                {isProcessed && (
                  <div
                    style={{
                      position: "absolute",
                      top: 2,
                      right: 4,
                      fontSize: 10,
                      color: theme.good,
                      fontWeight: 800,
                    }}
                  >
                    ✓
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* =================================================================== */}
      {/* CENTER PROJECTION BRIDGE & DATA FLOW ARROW                         */}
      {/* =================================================================== */}
      {isSplitStarted && (
        <div
          style={{
            position: "absolute",
            left: sourceMatrixX + MATRIX_WIDTH,
            right: 1920 - workingMatrixX,
            top: MATRICES_Y + 120,
            height: 80,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            zIndex: 22,
          }}
        >
          {isArrowVisible && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
              }}
            >
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: "1px",
                  color: theme.pivot,
                  backgroundColor: "rgba(20, 20, 20, 0.7)",
                  padding: "2px 10px",
                  borderRadius: 4,
                  border: `1px solid ${theme.pivot}`,
                }}
              >
                READ SOURCE ({activeSource?.r}, {activeSource?.c}) ──► ZERO ROW {activeSource?.r} & COL {activeSource?.c}
              </span>
              <div
                style={{
                  width: 280,
                  height: 3,
                  background: `linear-gradient(90deg, ${theme.pivot}, ${theme.good})`,
                  boxShadow: `0 0 10px ${theme.pivot}`,
                  borderRadius: 2,
                }}
              />
            </div>
          )}

          {/* Persistent Flow Label after F2240 */}
          {frame >= 2240 && !isArrowVisible && (
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 14,
                fontWeight: 800,
                letterSpacing: "1px",
                color: theme.good,
                backgroundColor: "rgba(60, 229, 167, 0.10)",
                border: `1px solid ${theme.good}`,
                padding: "4px 16px",
                borderRadius: 6,
              }}
            >
              SOURCE TRUTH ══════► WORKING TARGET
            </div>
          )}
        </div>
      )}

      {/* =================================================================== */}
      {/* RIGHT MATRIX: WORKING MATRIX (MUTABLE TARGET)                       */}
      {/* =================================================================== */}
      {isSplitStarted && (
        <div
          style={{
            position: "absolute",
            left: workingMatrixX,
            top: MATRICES_Y,
            width: MATRIX_WIDTH,
            height: MATRIX_HEIGHT,
            opacity: workingMatrixOpacity,
            zIndex: 20,
          }}
        >
          {/* Working Matrix Header */}
          {frame >= 194 && (
            <div
              style={{
                position: "absolute",
                top: -46,
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
                fontFamily: fonts.mono,
                fontSize: 15,
                fontWeight: 800,
                letterSpacing: "0.5px",
                color: theme.good,
              }}
            >
              <span style={{ fontSize: 16 }}>✏️</span>
              <span>WORKING MATRIX (MUTABLE)</span>
            </div>
          )}

          {/* Column Rulers (Top) */}
          {Array.from({ length: COLS }).map((_, c) => (
          <div
            key={`wrk-col-${c}`}
            style={{
              position: "absolute",
              top: -24,
              left: c * PITCH,
              width: CELL_SIZE,
              textAlign: "center",
              fontFamily: fonts.mono,
              fontSize: 14,
              fontWeight: 700,
              color:
                (isCol2Zeroed && c === 2) || (isCol0Zeroed && c === 0) || (isCol3Zeroed && c === 3)
                  ? theme.good
                  : theme.chalkDim,
            }}
          >
            [{c}]
          </div>
        ))}

        {/* Row Rulers (Left) */}
        {Array.from({ length: ROWS }).map((_, r) => (
          <div
            key={`wrk-row-${r}`}
            style={{
              position: "absolute",
              left: -32,
              top: r * PITCH + (CELL_SIZE - 20) / 2,
              width: 24,
              textAlign: "right",
              fontFamily: fonts.mono,
              fontSize: 14,
              fontWeight: 700,
              color:
                (isRow0Zeroed && r === 0) || (isRow2Zeroed && r === 2) || (isRow3Zeroed && r === 3)
                  ? theme.good
                  : theme.chalkDim,
            }}
          >
            [{r}]
          </div>
        ))}

        {/* Working Matrix Cells */}
        {Array.from({ length: ROWS }).map((_, r) =>
          Array.from({ length: COLS }).map((_, c) => {
            const cellLeft = c * PITCH;
            const cellTop = r * PITCH;
            const originalVal = MASTER_GRID[r][c];

            // Evaluate if this working cell has been zeroed by any executed source:
            const isZeroed =
              (isRow0Zeroed && r === 0) ||
              (isCol2Zeroed && c === 2) ||
              (isRow2Zeroed && r === 2) ||
              (isCol0Zeroed && c === 0) ||
              (isRow3Zeroed && r === 3) ||
              (isCol3Zeroed && c === 3);

            const displayVal = isZeroed ? 0 : originalVal;

            // Highlight preserved non-zero values during recitation:
            const isPreservedHero =
              (r === 1 && c === 1 && activeRecitationRow === 1) ||
              (r === 1 && c === 4 && activeRecitationRow === 1) ||
              (r === 4 && c === 1 && activeRecitationRow === 4) ||
              (r === 4 && c === 4 && activeRecitationRow === 4);

            const isRowHighlighted = activeRecitationRow === r;

            return (
              <div
                key={`wrk-cell-${r}-${c}`}
                style={{
                  position: "absolute",
                  left: cellLeft,
                  top: cellTop,
                  width: CELL_SIZE,
                  height: CELL_SIZE,
                  borderRadius: 8,
                  backgroundColor: isPreservedHero
                    ? "rgba(255, 209, 102, 0.28)"
                    : isRowHighlighted
                    ? "rgba(60, 229, 167, 0.18)"
                    : isZeroed
                    ? "rgba(60, 229, 167, 0.12)"
                    : "rgba(248, 246, 240, 0.04)",
                  border: `1.5px solid ${
                    isPreservedHero
                      ? theme.pivot
                      : isRowHighlighted || isZeroed
                      ? theme.good
                      : "rgba(232, 228, 213, 0.4)"
                  }`,
                  boxShadow: isPreservedHero ? `0 0 16px ${theme.pivot}` : undefined,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxSizing: "border-box",
                  filter: `url(#${CHALK_FILTER_ID})`,
                }}
              >
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 26,
                    fontWeight: 800,
                    color: isPreservedHero
                      ? theme.pivot
                      : isZeroed
                      ? theme.good
                      : theme.chalkText,
                  }}
                >
                  {displayVal}
                </span>

                {/* Preserved Tag */}
                {isPreservedHero && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: -18,
                      fontSize: 9,
                      fontFamily: fonts.mono,
                      fontWeight: 800,
                      color: theme.pivot,
                      backgroundColor: "rgba(20, 20, 20, 0.8)",
                      padding: "1px 4px",
                      borderRadius: 3,
                      whiteSpace: "nowrap",
                      zIndex: 30,
                    }}
                  >
                    SAFE ✓
                  </div>
                )}
              </div>
            );
          })
        )}
        </div>
      )}

      {/* =================================================================== */}
      {/* OPERATION TRACE CARD (Y: 570..640)                                   */}
      {/* =================================================================== */}
      {activeSource !== null && (
        <div
          style={{
            position: "absolute",
            top: 575,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            pointerEvents: "none",
            zIndex: 30,
          }}
        >
          <div
            style={{
              padding: "10px 32px",
              borderRadius: 12,
              backgroundColor: "rgba(20, 20, 20, 0.85)",
              border: `1.5px solid ${theme.pivot}`,
              color: theme.chalkText,
              fontFamily: fonts.mono,
              fontSize: 18,
              fontWeight: 700,
              boxShadow: "0 0 20px rgba(0,0,0,0.6)",
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <span style={{ color: theme.pivot, fontWeight: 800 }}>
              STEP {activeSource.id} OF 3:
            </span>
            <span>
              Source Zero at <strong>({activeSource.r}, {activeSource.c})</strong> ──► Zero Row {activeSource.r} & Col {activeSource.c} in Working Matrix
            </span>
          </div>
        </div>
      )}

      {/* Beat 27: Zero Cascade Prevented Banner (F2369..F2516) */}
      {showCascadePrevented && (
        <div
          style={{
            position: "absolute",
            top: 580,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            pointerEvents: "none",
            opacity: interpolate(cascadeSpring, [0, 1], [0, 1]),
            transform: `scale(${interpolate(cascadeSpring, [0, 1], [0.95, 1])})`,
            zIndex: 35,
          }}
        >
          <div
            style={{
              padding: "12px 36px",
              borderRadius: 14,
              backgroundColor: "rgba(60, 229, 167, 0.12)",
              border: `2px solid ${theme.good}`,
              color: theme.good,
              fontFamily: fonts.hand,
              fontSize: 26,
              fontWeight: 800,
              boxShadow: "0 0 24px rgba(60, 229, 167, 0.3)",
            }}
          >
            ✅ ZERO CASCADE PREVENTED: False Chain Reactions Impossible With An Immutable Source
          </div>
        </div>
      )}

      {/* Beat 34: Method 1 Works Banner (F3104..F3197) */}
      {showWorksBanner && (
        <div
          style={{
            position: "absolute",
            top: 580,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            pointerEvents: "none",
            opacity: interpolate(worksSpring, [0, 1], [0, 1]),
            transform: `scale(${interpolate(worksSpring, [0, 1], [0.95, 1])})`,
            zIndex: 35,
          }}
        >
          <div
            style={{
              padding: "12px 36px",
              borderRadius: 14,
              backgroundColor: "rgba(255, 209, 102, 0.14)",
              border: `2px solid ${theme.pivot}`,
              color: theme.chalkText,
              fontFamily: fonts.hand,
              fontSize: 26,
              fontWeight: 800,
              boxShadow: "0 0 24px rgba(255, 209, 102, 0.3)",
            }}
          >
            ⭐ <strong style={{ color: theme.pivot }}>METHOD 1 VERIFIED:</strong> Accurate Result With Zero Over-Zeroing
          </div>
        </div>
      )}

      {/* Beat 36: Space Complexity Banner (F3197..F3285) */}
      {showSpaceCostBanner && (
        <div
          style={{
            position: "absolute",
            top: 700,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            pointerEvents: "none",
            opacity: interpolate(spaceCostSpring, [0, 1], [0, 1]),
            transform: `translateY(${interpolate(spaceCostSpring, [0, 1], [15, 0])}px)`,
            zIndex: 35,
          }}
        >
          <div
            style={{
              padding: "12px 36px",
              borderRadius: 12,
              backgroundColor: "rgba(255, 169, 77, 0.14)",
              border: `2px solid ${theme.better}`,
              color: theme.chalkText,
              fontFamily: fonts.mono,
              fontSize: 21,
              fontWeight: 700,
              boxShadow: "0 0 20px rgba(255, 169, 77, 0.25)",
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <span style={{ fontSize: 26 }}>📦</span>
            <span>
              <strong style={{ color: theme.better }}>AUXILIARY SPACE: O(M × N)</strong> — Storing 25 Extra Integers in Memory
            </span>
          </div>
        </div>
      )}

      {/* Beat 37: Code Handoff Banner (F3285..F3357) */}
      {showCodeHandoff && (
        <div
          style={{
            position: "absolute",
            top: 785,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            pointerEvents: "none",
            opacity: interpolate(codeHandoffSpring, [0, 1], [0, 1]),
            transform: `translateY(${interpolate(codeHandoffSpring, [0, 1], [20, 0])}px)`,
            zIndex: 36,
          }}
        >
          <div
            style={{
              padding: "10px 32px",
              borderRadius: 12,
              backgroundColor: "rgba(92, 225, 230, 0.12)",
              border: `1.5px solid ${theme.cyan}`,
              color: theme.cyan,
              fontFamily: fonts.mono,
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "1px",
              boxShadow: "0 0 20px rgba(92, 225, 230, 0.25)",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span>➡️ UP NEXT: SCENE 04 — METHOD 1 IMPLEMENTATION & CODE WALKTHROUGH</span>
          </div>
        </div>
      )}

      {/* Bottom Subtitle Captions */}
      <Captions words={captionWords} bottom={38} fontSize={38} />
    </div>
  );
};
