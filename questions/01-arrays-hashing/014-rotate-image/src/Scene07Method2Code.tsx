/**
 * Scene07Method2Code.tsx — Scene 07 · Method 2 Code: Layer-by-Layer In-Place Implementation
 * Rotate Image (LeetCode 48) · Pattern 01 — Arrays & Hashing
 *
 * Implements Method 2 Python Code Walkthrough with Direct Live Support Matrix:
 * - Left Stage (X: 70..1010, Y: 135..780, Width: 940):
 *   - Canonical ChalkCodeEditorV2 with 13 syntax-highlighted Python lines
 *   - Character reveal timings strictly synchronized to exact spoken words
 *   - Zero spoilers: future lines remain hidden until reached by narration
 *   - Dynamic active line tracking and hot line highlighting
 * - Right Stage (X: 1070..1850, Y: 135..780, Width: 780):
 *   - Direct Support Hero: 5×5 Master Matrix with cell values & row/col coordinates
 *   - Live Loop & Index Indicators: first, last, i, offset
 *   - Individual Temp Storage Box: top_val = matrix[first][i] at Y: 650 (O(1) memory)
 *   - Complexity Pills: O(1) Extra Space & O(N²) Time (appear strictly when spoken at F3588+)
 *   - Transition Hook to Method 3 at F4489+
 * - Top Bar: Clean metadata strip at Y: 36..105 (Zero explanations on top)
 * - Captions at bottom (Y: 960..1010) with >= 180px breathing clearance
 *
 * Total Duration: 4,700 frames @ 30fps (156.660s) strictly from sync/07-method2-code.json
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
  chalkSub: baseTheme.chalkDim,
  chalkBorder: baseTheme.cardBorder,
};
import { EASE } from "../../../../kit/lib/anim";
import { ChalkCodeEditorV2, ChalkCodeLine } from "../../../../kit/components/ChalkCodeEditorV2";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { RoughBox } from "../../../../kit/components/RoughBox";
import { ChalkText } from "../../../../kit/components/ChalkText";
import { ChalkDust } from "../../../../kit/components/ChalkDust";
import syncData from "../sync/07-method2-code.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings (from sync/07-method2-code.json)
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

// ---------------------------------------------------------------------------
// Code Lines Definition with Character Reveal Frames (Strictly Word Synced)
// ---------------------------------------------------------------------------
const CODE_LINES: ChalkCodeLine[] = [
  {
    num: 1,
    text: "class Solution:",
    indent: 0,
    startFrame: 0,
    endFrame: 10,
    tokens: [
      { text: "class ", color: theme.accent },
      { text: "Solution", color: theme.cyan },
      { text: ":", color: theme.chalkText },
    ],
  },
  {
    num: 2,
    text: "    def rotate(self, matrix: list[list[int]]) -> None:",
    indent: 1,
    startFrame: 0,
    endFrame: 10,
    tokens: [
      { text: "def ", color: theme.accent },
      { text: "rotate", color: theme.cyan },
      { text: "(self, matrix: list[list[int]]) -> ", color: theme.chalkText },
      { text: "None", color: theme.gold },
      { text: ":", color: theme.chalkText },
    ],
  },
  {
    num: 3,
    text: "        n = len(matrix)",
    indent: 2,
    startFrame: 0,
    endFrame: 58,
    tokens: [
      { text: "n", color: theme.cyan },
      { text: " = ", color: theme.chalkText },
      { text: "len", color: theme.accent },
      { text: "(matrix)", color: theme.chalkText },
    ],
  },
  {
    num: 4,
    text: "        for layer in range(n // 2):",
    indent: 2,
    startFrame: 75,
    endFrame: 344,
    tokens: [
      { text: "for ", color: theme.accent },
      { text: "layer", color: theme.gold },
      { text: " in ", color: theme.accent },
      { text: "range", color: theme.accent },
      { text: "(n // ", color: theme.chalkText },
      { text: "2", color: theme.gold },
      { text: "):", color: theme.chalkText },
    ],
  },
  {
    num: 5,
    text: "            first = layer",
    indent: 3,
    startFrame: 407,
    endFrame: 491,
    tokens: [
      { text: "first", color: theme.cyan },
      { text: " = ", color: theme.chalkText },
      { text: "layer", color: theme.gold },
    ],
  },
  {
    num: 6,
    text: "            last = n - 1 - layer",
    indent: 3,
    startFrame: 517,
    endFrame: 618,
    tokens: [
      { text: "last", color: theme.cyan },
      { text: " = n - ", color: theme.chalkText },
      { text: "1", color: theme.gold },
      { text: " - ", color: theme.chalkText },
      { text: "layer", color: theme.gold },
    ],
  },
  {
    num: 7,
    text: "            for i in range(first, last):",
    indent: 3,
    startFrame: 985,
    endFrame: 1277,
    tokens: [
      { text: "for ", color: theme.accent },
      { text: "i", color: theme.gold },
      { text: " in ", color: theme.accent },
      { text: "range", color: theme.accent },
      { text: "(", color: theme.chalkText },
      { text: "first", color: theme.cyan },
      { text: ", ", color: theme.chalkText },
      { text: "last", color: theme.cyan },
      { text: "):", color: theme.chalkText },
    ],
  },
  {
    num: 8,
    text: "                offset = i - first",
    indent: 4,
    startFrame: 1588,
    endFrame: 1751,
    tokens: [
      { text: "offset", color: theme.gold },
      { text: " = ", color: theme.chalkText },
      { text: "i", color: theme.gold },
      { text: " - ", color: theme.chalkText },
      { text: "first", color: theme.cyan },
    ],
  },
  {
    num: 9,
    text: "                top = matrix[first][i]",
    indent: 4,
    startFrame: 2564,
    endFrame: 2620,
    tokens: [
      { text: "top", color: theme.cyan },
      { text: " = matrix[", color: theme.chalkText },
      { text: "first", color: theme.cyan },
      { text: "][", color: theme.chalkText },
      { text: "i", color: theme.gold },
      { text: "]", color: theme.chalkText },
    ],
  },
  {
    num: 10,
    text: "                matrix[first][i] = matrix[last - offset][first]",
    indent: 4,
    startFrame: 2640,
    endFrame: 2701,
    tokens: [
      { text: "matrix[first][i]", color: theme.gold },
      { text: " = matrix[", color: theme.chalkText },
      { text: "last - offset", color: theme.cyan },
      { text: "][", color: theme.chalkText },
      { text: "first", color: theme.cyan },
      { text: "]", color: theme.chalkText },
    ],
  },
  {
    num: 11,
    text: "                matrix[last - offset][first] = matrix[last][last - offset]",
    indent: 4,
    startFrame: 2713,
    endFrame: 2748,
    tokens: [
      { text: "matrix[last - offset][first]", color: theme.cyan },
      { text: " = matrix[", color: theme.chalkText },
      { text: "last", color: theme.gold },
      { text: "][", color: theme.chalkText },
      { text: "last - offset", color: theme.gold },
      { text: "]", color: theme.chalkText },
    ],
  },
  {
    num: 12,
    text: "                matrix[last][last - offset] = matrix[i][last]",
    indent: 4,
    startFrame: 2758,
    endFrame: 2791,
    tokens: [
      { text: "matrix[last][last - offset]", color: theme.gold },
      { text: " = matrix[", color: theme.chalkText },
      { text: "i", color: theme.cyan },
      { text: "][", color: theme.chalkText },
      { text: "last", color: theme.cyan },
      { text: "]", color: theme.chalkText },
    ],
  },
  {
    num: 13,
    text: "                matrix[i][last] = top",
    indent: 4,
    startFrame: 2800,
    endFrame: 2881,
    tokens: [
      { text: "matrix[i][last]", color: theme.cyan },
      { text: " = ", color: theme.chalkText },
      { text: "top", color: theme.gold },
    ],
  },
];

// ---------------------------------------------------------------------------
// Matrix Grid Constants
// ---------------------------------------------------------------------------
const ROWS = 5;
const COLS = 5;
const CELL_SIZE = 66;
const CELL_GAP = 8;
const GRID_WIDTH = COLS * CELL_SIZE + (COLS - 1) * CELL_GAP; // 362px
const GRID_HEIGHT = ROWS * CELL_SIZE + (ROWS - 1) * CELL_GAP; // 362px

const MATRIX_X = 1270;
const MATRIX_Y = 195;

const INITIAL_MATRIX = [
  [ 1,  2,  3,  4,  5],
  [ 6,  7,  8,  9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

export const Scene07Method2Code: React.FC = () => {
  const frame = useCurrentFrame();

  // Entrance spring animations
  const editorEntrance = spring({
    frame,
    fps: 30,
    config: { damping: 18, stiffness: 80 },
  });

  const matrixEntrance = spring({
    frame: Math.max(0, frame - 15),
    fps: 30,
    config: { damping: 18, stiffness: 80 },
  });

  // Dynamic active line numbers for ChalkCodeEditorV2
  const activeLineNums = useMemo(() => {
    if (frame < 75) return [3];
    if (frame < 407) return [4];
    if (frame < 517) return [5];
    if (frame < 985) return [6];
    if (frame < 1588) return [7];
    if (frame < 2564) return [8];
    if (frame < 2640) return [9];
    if (frame < 2713) return [10];
    if (frame < 2758) return [11];
    if (frame < 2800) return [12];
    if (frame < 2988) return [13];
    if (frame < 3178) return [7]; // inner loop continuation
    if (frame < 3294) return [4]; // outer loop moves inward
    if (frame >= 3588 && frame < 3841) return [9]; // single temp space
    if (frame >= 3853 && frame < 4331) return [4, 7]; // nested loop complexity
    return [];
  }, [frame]);

  const hotLineNum = useMemo(() => {
    if (frame >= 2564 && frame < 2640) return 9; // save top
    if (frame >= 2640 && frame < 2713) return 10;
    if (frame >= 2713 && frame < 2758) return 11;
    if (frame >= 2758 && frame < 2800) return 12;
    if (frame >= 2800 && frame < 2988) return 13;
    if (frame >= 3588 && frame < 3841) return 9; // O(1) space offender/temp
    return undefined;
  }, [frame]);

  const hotLineTag = useMemo(() => {
    if (frame >= 2564 && frame < 2988) return "4-WAY SWAP";
    if (frame >= 3588 && frame < 3841) return "O(1) TEMP";
    return undefined;
  }, [frame]);

  // Live algorithmic state on matrix
  // Layer: 0 until F3178, then layer 1 at F3178..F3293
  const activeLayer = frame >= 3178 && frame < 3294 ? 1 : 0;
  const isDemonstratingInnerBounds = frame >= 866 && frame < 985;
  const displayLayer = isDemonstratingInnerBounds ? 1 : activeLayer;
  const displayFirst = displayLayer;
  const displayLast = 5 - 1 - displayLayer; // 4 for layer 0, 3 for layer 1

  // Active top index i (ranges from first to last - 1)
  // At B08..B20, i = 1 (outer cycle 2: [0,1], [1,4], [4,3], [3,0])
  // At B21 (F3008..F3160), i advances to 2 or 3
  const activeI = useMemo(() => {
    if (frame >= 3008 && frame < 3178) return 2; // demonstrating continuation
    if (frame >= 985 && frame < 1588) return 1;
    if (frame >= 1588 && frame < 3008) return 1;
    return 0;
  }, [frame]);

  const activeOffset = activeI - displayFirst; // 1 - 0 = 1

  // Four coordinates for the active cycle
  // top = [displayFirst, activeI] = [0, 1]
  // right = [activeI, displayLast] = [1, 4]
  // bottom = [displayLast, displayLast - activeOffset] = [4, 3]
  // left = [displayLast - activeOffset, displayFirst] = [3, 0]
  const topCoord = [displayFirst, activeI];
  const rightCoord = [activeI, displayLast];
  const bottomCoord = [displayLast, displayLast - activeOffset];
  const leftCoord = [displayLast - activeOffset, displayFirst];

  // Cell values live mutation during 4-way swap (F2564..F2987)
  const currentMatrix = useMemo(() => {
    // Clone initial matrix
    const mat = INITIAL_MATRIX.map((row) => [...row]);
    // During 4-way swap at i=1:
    // Original values: top=2, right=10, bottom=24, left=16
    // F2640..: left into top -> mat[0][1] = 16
    if (frame >= 2670) {
      mat[topCoord[0]][topCoord[1]] = 16;
    }
    // F2713..: bottom into left -> mat[3][0] = 24
    if (frame >= 2730) {
      mat[leftCoord[0]][leftCoord[1]] = 24;
    }
    // F2758..: right into bottom -> mat[4][3] = 10
    if (frame >= 2775) {
      mat[bottomCoord[0]][bottomCoord[1]] = 10;
    }
    // F2800..: temp into right -> mat[1][4] = 2
    if (frame >= 2840) {
      mat[rightCoord[0]][rightCoord[1]] = 2;
    }
    return mat;
  }, [frame, topCoord, rightCoord, bottomCoord, leftCoord]);

  // Is cycle confirmed flash (F2907..F2987)
  const isCycleComplete = frame >= 2907 && frame < 2988;

  // Center cell focus (F3294..F3562)
  const isCenterFocus = frame >= 3294 && frame < 3562;

  // Complexity states
  const showSpacePill = frame >= 3754;
  const showTimePill = frame >= 4124;
  const showOptimalVerdict = frame >= 4331;
  const showMethod3Teaser = frame >= 4489;

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

      <Audio src={staticFile("audio/014/07-method2-code.mp3")} />

      {/* =====================================================================
          TOP BAR: Clean Metadata Strip (Y: 36..105) · Zero Explanations
          ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 36,
          left: 70,
          right: 70,
          height: 52,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: `1.5px solid ${theme.chalkLine}`,
          paddingBottom: 10,
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span
            style={{
              fontFamily: fonts.code,
              fontSize: 13,
              fontWeight: 700,
              color: theme.chalkSub,
              letterSpacing: 1.5,
            }}
          >
            01 · ARRAYS & HASHING
          </span>
          <span
            style={{
              padding: "5px 12px",
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
            ROTATE IMAGE (LEETCODE 48)
          </span>
        </div>

        <span
          style={{
            padding: "5px 14px",
            borderRadius: 6,
            backgroundColor: "rgba(35, 14, 18, 0.8)",
            border: `1px solid ${showOptimalVerdict ? theme.good : theme.cyan}`,
            fontFamily: fonts.code,
            fontSize: 13,
            fontWeight: 700,
            color: showOptimalVerdict ? theme.good : theme.cyan,
            letterSpacing: 1,
          }}
        >
          {showOptimalVerdict
            ? "OPTIMAL IN-PLACE SOLUTION · O(1) SPACE"
            : isCenterFocus
            ? "CENTER CELL PROOF: ODD N × N FIXED"
            : frame >= 2564 && frame < 3000
            ? "IN-PLACE 4-WAY VALUE EXCHANGE"
            : frame >= 985
            ? "LAYER ITERATION: TOP SIDE [first, last)"
            : "METHOD 2 · LAYER-BY-LAYER CODE"}
        </span>
      </div>

      {/* =====================================================================
          LEFT STAGE: Canonical ChalkCodeEditorV2 (X: 70..1010, Y: 135..780)
          Width: 940, Height: 645
          ===================================================================== */}
      <div
        style={{
          position: "absolute",
          left: 70,
          top: 135,
          width: 940,
          height: 645,
          opacity: editorEntrance,
          transform: `scale(${interpolate(editorEntrance, [0, 1], [0.97, 1.0])})`,
          zIndex: 8,
        }}
      >
        <ChalkCodeEditorV2
          lines={CODE_LINES}
          activeLineNums={activeLineNums}
          hotLineNum={hotLineNum}
          hotLineTag={hotLineTag}
          title="solution_method2.py"
          language="PYTHON 3.11"
          fontSize={15.5}
          lineHeight={30}
          indentWidth={22}
          width={940}
          height={645}
          scrollY={0}
        />
      </div>

      {/* =====================================================================
          RIGHT STAGE: Live Direct Support Matrix & Variables (X: 1070..1850)
          No Artificial Cards! Clean Hand-Drawn Chalkboard Visual Elements.
          ===================================================================== */}
      <div
        style={{
          position: "absolute",
          left: 1070,
          top: 135,
          width: 780,
          height: 645,
          opacity: matrixEntrance,
          transform: `scale(${interpolate(matrixEntrance, [0, 1], [0.97, 1.0])})`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 8,
        }}
      >
        {/* Upper Card: Live Support Matrix */}
        <div
          style={{
            width: 780,
            height: 480,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "16px 20px",
            boxSizing: "border-box",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, width: 780, height: 480, pointerEvents: "none" }}>
            <RoughBox
              width={780}
              height={480}
              stroke={theme.chalkBorder}
              seed={71}
              strokeWidth={1.6}
            />
          </div>

          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            {/* Support Matrix Header Strip */}
            <div
              style={{
                width: 520,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <span
              style={{
                fontFamily: fonts.code,
                fontSize: 16,
                fontWeight: 700,
                color: theme.chalkText,
                whiteSpace: "nowrap",
              }}
            >
              matrix[5][5]
            </span>
            <span
              style={{
                fontSize: 11,
                fontFamily: fonts.code,
                padding: "2px 7px",
                borderRadius: 4,
                backgroundColor: "rgba(76, 201, 240, 0.15)",
                color: theme.cyan,
                fontWeight: 700,
                whiteSpace: "nowrap",
              }}
            >
              {frame >= 3178 && frame < 3294
                ? "LAYER 1 (INNER 3×3)"
                : isCenterFocus
                ? "CENTER [2, 2] UNTOUCHED"
                : "LAYER 0 (OUTER 5×5)"}
            </span>
          </div>

          {/* Pointer status values */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, whiteSpace: "nowrap" }}>
            {frame >= 407 && (
              <span style={{ fontFamily: fonts.code, fontSize: 13, color: theme.cyan }}>
                first=<strong style={{ color: theme.gold }}>{displayFirst}</strong>
              </span>
            )}
            {frame >= 517 && (
              <span style={{ fontFamily: fonts.code, fontSize: 13, color: theme.cyan }}>
                last=<strong style={{ color: theme.gold }}>{displayLast}</strong>
              </span>
            )}
            {frame >= 985 && (
              <span style={{ fontFamily: fonts.code, fontSize: 13, color: theme.cyan }}>
                i=<strong style={{ color: theme.gold }}>{activeI}</strong>
              </span>
            )}
            {frame >= 1588 && (
              <span style={{ fontFamily: fonts.code, fontSize: 13, color: theme.gold }}>
                offset=<strong>{activeOffset}</strong>
              </span>
            )}
          </div>
        </div>

        {/* Column Headers (c=0..4) */}
        <div style={{ display: "flex", marginLeft: 44, marginBottom: 6, gap: CELL_GAP }}>
          {[0, 1, 2, 3, 4].map((c) => {
            const isFirstCol = frame >= 407 && c === displayFirst;
            const isLastCol = frame >= 517 && c === displayLast;
            const isICol = frame >= 985 && c === activeI;
            return (
              <div
                key={`s07-col-${c}`}
                style={{
                  width: CELL_SIZE,
                  textAlign: "center",
                  fontFamily: fonts.code,
                  fontSize: 13,
                  fontWeight: 700,
                  color: isICol
                    ? theme.gold
                    : isFirstCol || isLastCol
                    ? theme.cyan
                    : theme.chalkSub,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span>c={c}</span>
                {isICol && frame >= 985 && (
                  <span style={{ fontSize: 10, color: theme.gold, lineHeight: 1 }}>▼ i</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Matrix Grid Container with Row Headers */}
        <div style={{ display: "flex", alignItems: "flex-start", position: "relative" }}>
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
            {[0, 1, 2, 3, 4].map((r) => {
              const isFirstRow = frame >= 407 && r === displayFirst;
              const isLastRow = frame >= 517 && r === displayLast;
              return (
                <div
                  key={`s07-row-${r}`}
                  style={{
                    height: CELL_SIZE,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    fontFamily: fonts.code,
                    fontSize: 13,
                    fontWeight: 700,
                    color: isFirstRow || isLastRow ? theme.cyan : theme.chalkSub,
                    width: 34,
                  }}
                >
                  r={r}
                </div>
              );
            })}
          </div>

          {/* 5x5 Grid Cells */}
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
              row.map((_, c) => {
                const val = currentMatrix[r][c];

                // Coordinate matching
                const isTopCell = r === topCoord[0] && c === topCoord[1];
                const isRightCell = r === rightCoord[0] && c === rightCoord[1];
                const isBottomCell = r === bottomCoord[0] && c === bottomCoord[1];
                const isLeftCell = r === leftCoord[0] && c === leftCoord[1];

                const is4WayCell =
                  frame >= 1920 && (isTopCell || isRightCell || isBottomCell || isLeftCell);

                // Stop before last indicator on [0, 4]
                const isStopExcludedCell =
                  frame >= 1298 && frame < 1588 && r === 0 && c === 4;

                // Center cell [2, 2]
                const isCenterCell = r === 2 && c === 2;

                // Border ring coloring
                const isOuterBorder = r === 0 || r === 4 || c === 0 || c === 4;
                const isInnerBorder =
                  !isOuterBorder && (r === 1 || r === 3 || c === 1 || c === 3);

                // Background & border styling based on active algorithm phase
                let cellBg = "rgba(17, 37, 29, 0.7)";
                let cellBorder = `1.5px solid ${theme.chalkLine}`;
                let numColor: string = theme.chalkText;

                if (isCycleComplete && is4WayCell) {
                  cellBg = "rgba(82, 183, 136, 0.35)";
                  cellBorder = `2px solid ${theme.good}`;
                  numColor = theme.good;
                } else if (isTopCell && frame >= 2109) {
                  cellBg = "rgba(255, 209, 102, 0.25)";
                  cellBorder = `2px solid ${theme.gold}`;
                  numColor = theme.gold;
                } else if (isRightCell && frame >= 2174) {
                  cellBg = "rgba(76, 201, 240, 0.25)";
                  cellBorder = `2px solid ${theme.cyan}`;
                  numColor = theme.cyan;
                } else if (isBottomCell && frame >= 2239) {
                  cellBg = "rgba(167, 139, 250, 0.25)";
                  cellBorder = `2px solid #a78bfa`;
                  numColor = "#c4b5fd";
                } else if (isLeftCell && frame >= 2335) {
                  cellBg = "rgba(251, 146, 60, 0.25)";
                  cellBorder = `2px solid #fb923c`;
                  numColor = "#fdba74";
                } else if (is4WayCell && frame >= 1920) {
                  cellBorder = `2px dashed ${theme.cyan}`;
                  cellBg = "rgba(76, 201, 240, 0.12)";
                } else if (isStopExcludedCell) {
                  cellBg = "rgba(239, 71, 111, 0.2)";
                  cellBorder = `2px dashed ${theme.warn}`;
                  numColor = theme.warn;
                } else if (isCenterCell && isCenterFocus) {
                  cellBg = "rgba(255, 209, 102, 0.3)";
                  cellBorder = `2px solid ${theme.gold}`;
                  numColor = theme.gold;
                } else if (frame >= 75 && frame < 407 && isOuterBorder) {
                  cellBg = "rgba(255, 209, 102, 0.08)";
                } else if (frame >= 3178 && frame < 3294 && isInnerBorder) {
                  cellBg = "rgba(76, 201, 240, 0.12)";
                  cellBorder = `1.5px solid ${theme.cyan}`;
                }

                // Cell label tag
                let tagText: string | null = null;
                if (isTopCell && frame >= 2109 && frame < 2907) tagText = "top";
                if (isRightCell && frame >= 2174 && frame < 2907) tagText = "right";
                if (isBottomCell && frame >= 2239 && frame < 2907) tagText = "bottom";
                if (isLeftCell && frame >= 2335 && frame < 2907) tagText = "left";
                if (isStopExcludedCell) tagText = "CYCLE 1";

                return (
                  <div
                    key={`s07-cell-${r}-${c}`}
                    style={{
                      width: CELL_SIZE,
                      height: CELL_SIZE,
                      borderRadius: 8,
                      backgroundColor: cellBg,
                      border: cellBorder,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      transition: "all 0.15s ease",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: fonts.hand,
                        fontSize: 26,
                        fontWeight: 700,
                        color: numColor,
                      }}
                    >
                      {val}
                    </span>

                    {tagText && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: 2,
                          fontSize: 9,
                          fontFamily: fonts.code,
                          fontWeight: 700,
                          color: numColor,
                          letterSpacing: 0.5,
                        }}
                      >
                        {tagText}
                      </span>
                    )}
                  </div>
                );
              })
            )}
          </div>
          </div>
        </div>
      </div>

        {/* ===================================================================
            LOWER RIGHT ZONE: Variable Inspector / Temp Box / Complexity
            Y: 620..765 (RoughBox framed chalkboard container)
            =================================================================== */}
        <div
          style={{
            marginTop: 16,
            width: 780,
            height: 145,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, width: 780, height: 145, pointerEvents: "none" }}>
            <RoughBox
              width={780}
              height={145}
              stroke={
                showMethod3Teaser
                  ? theme.cyan
                  : showOptimalVerdict
                  ? theme.good
                  : showSpacePill
                  ? theme.gold
                  : theme.chalkBorder
              }
              seed={72}
              strokeWidth={1.6}
            />
          </div>

          {/* ChalkDust Bursts for Key Milestones */}
          <ChalkDust start={2587} x={660} y={72} count={12} color={theme.gold} />
          <ChalkDust start={2907} x={390} y={72} count={16} color={theme.good} />
          <ChalkDust start={3754} x={200} y={72} count={14} color={theme.good} />
          <ChalkDust start={4124} x={580} y={72} count={14} color={theme.gold} />
          <ChalkDust start={4365} x={390} y={72} count={20} color={theme.good} />
          <ChalkDust start={4495} x={390} y={72} count={18} color={theme.cyan} />

          <div
            style={{
              position: "relative",
              zIndex: 2,
              width: "100%",
              height: "100%",
              padding: "12px 24px",
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Active 4-Way Formula Tracker & Temp Box (F2109..F2987) */}
            {frame >= 2109 && frame < 2988 ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  gap: 16,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <div style={{ fontFamily: fonts.code, fontSize: 12, color: theme.chalkSub, letterSpacing: 1 }}>
                    4-WAY ROTATION CYCLE COORDINATES (i = {activeI}):
                  </div>
                  <div style={{ fontFamily: fonts.code, fontSize: 14, color: theme.chalkText, display: "flex", gap: 14 }}>
                    <span>top: <strong style={{ color: theme.gold }}>(0, {activeI})</strong></span>
                    <span>right: <strong style={{ color: theme.cyan }}>({activeI}, 4)</strong></span>
                    <span>bottom: <strong style={{ color: "#c4b5fd" }}>(4, {4 - activeOffset})</strong></span>
                    <span>left: <strong style={{ color: "#fdba74" }}>({4 - activeOffset}, 0)</strong></span>
                  </div>
                  {isCycleComplete && (
                    <div style={{ fontFamily: fonts.hand, fontSize: 16, color: theme.good }}>
                      ✓ 4-Way In-Place Swap Successfully Completed!
                    </div>
                  )}
                </div>

                {/* Dedicated Scalar Temp Box */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 4,
                    borderLeft: `1.5px solid ${theme.chalkLine}`,
                    paddingLeft: 20,
                    minWidth: 160,
                  }}
                >
                  <div style={{ fontFamily: fonts.code, fontSize: 11, color: theme.chalkSub, letterSpacing: 1 }}>
                    RAM VARIABLE:
                  </div>
                  <div
                    style={{
                      padding: "6px 14px",
                      borderRadius: 6,
                      border: `1.5px solid ${frame >= 2564 ? theme.gold : theme.chalkLine}`,
                      backgroundColor: frame >= 2564 ? "rgba(255, 209, 102, 0.15)" : "transparent",
                      fontFamily: fonts.code,
                      fontSize: 14,
                      fontWeight: 700,
                      color: frame >= 2564 ? theme.gold : theme.chalkSub,
                      whiteSpace: "nowrap",
                    }}
                  >
                    top = {frame >= 2564 ? "2" : "null"}
                  </div>
                  <div style={{ fontFamily: fonts.code, fontSize: 10, color: theme.good }}>
                    O(1) MEMORY ONLY
                  </div>
                </div>
              </div>
            ) : frame >= 2988 && frame < 3588 ? (
              /* Loop Progression Status */
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  <span style={{ fontFamily: fonts.code, fontSize: 11, color: theme.cyan, letterSpacing: 1 }}>
                    LOOP CONTROL & LAYER CONVERGENCE
                  </span>
                  <span style={{ fontFamily: fonts.hand, fontSize: 20, color: theme.chalkText }}>
                    {frame >= 3294
                      ? "Odd N×N matrix: center cell (2, 2) has no 4-way partner & stays in place"
                      : frame >= 3178
                      ? "Outer loop increments (layer = 1) ──► move inward to 3×3 inner ring"
                      : "Inner loop continues across top edge (first to last - 1) for all 4-way cycles"}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 13,
                    fontWeight: 700,
                    color: frame >= 3294 ? theme.gold : theme.cyan,
                    border: `1px solid ${frame >= 3294 ? theme.gold : theme.cyan}`,
                    padding: "6px 12px",
                    borderRadius: 6,
                    whiteSpace: "nowrap",
                  }}
                >
                  {frame >= 3294 ? "CENTER FIXED" : frame >= 3178 ? "NEXT LAYER" : "CYCLE REPEAT"}
                </span>
              </div>
            ) : showMethod3Teaser ? (
              /* Method 3 Teaser Hook (F4489..F4700) */
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  <span
                    style={{
                      fontFamily: fonts.code,
                      fontSize: 12,
                      fontWeight: 700,
                      color: theme.cyan,
                      letterSpacing: 1.2,
                    }}
                  >
                    CAN WE ROTATE WITH SIMPLER, CLEANER STEPS?
                  </span>
                  <span style={{ fontFamily: fonts.hand, fontSize: 22, color: theme.chalkText }}>
                    Next Method: Transpose along diagonal + Horizontal Reflection
                  </span>
                </div>

                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 15,
                    fontWeight: 700,
                    color: theme.gold,
                    border: `1.5px solid ${theme.gold}`,
                    backgroundColor: "rgba(255, 209, 102, 0.12)",
                    padding: "8px 16px",
                    borderRadius: 6,
                    whiteSpace: "nowrap",
                  }}
                >
                  METHOD 3 ──►
                </span>
              </div>
            ) : showSpacePill ? (
              /* Complexity Pills (F3588..F4488) */
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  gap: 20,
                }}
              >
                {/* Extra Space Pill */}
                <div
                  style={{
                    flex: 1,
                    padding: "8px 16px",
                    borderRadius: 8,
                    border: `1.5px solid ${theme.good}`,
                    backgroundColor: "rgba(82, 183, 136, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ fontFamily: fonts.code, fontSize: 11, color: theme.chalkSub }}>
                      AUXILIARY SPACE
                    </span>
                    <span style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkText }}>
                      1 scalar variable in RAM
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: fonts.code,
                      fontSize: 22,
                      fontWeight: 700,
                      color: theme.good,
                    }}
                  >
                    O(1)
                  </span>
                </div>

                {/* Time Complexity Pill */}
                {showTimePill ? (
                  <div
                    style={{
                      flex: 1,
                      padding: "8px 16px",
                      borderRadius: 8,
                      border: `1.5px solid ${theme.gold}`,
                      backgroundColor: "rgba(255, 209, 102, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ fontFamily: fonts.code, fontSize: 11, color: theme.chalkSub }}>
                        TIME COMPLEXITY
                      </span>
                      <span style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkText }}>
                        N² cells touched once
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: fonts.code,
                        fontSize: 22,
                        fontWeight: 700,
                        color: theme.gold,
                      }}
                    >
                      O(N²)
                    </span>
                  </div>
                ) : (
                  <div
                    style={{
                      flex: 1,
                      padding: "8px 16px",
                      borderRadius: 8,
                      border: `1.5px dashed ${theme.chalkLine}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: fonts.code,
                      fontSize: 13,
                      color: theme.chalkSub,
                    }}
                  >
                    Analyzing time complexity...
                  </div>
                )}
              </div>
            ) : frame >= 1588 ? (
              /* Offset calculation (F1588..F2108) */
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <span style={{ fontFamily: fonts.code, fontSize: 11, color: theme.gold, letterSpacing: 1 }}>
                    RELATIVE DISPLACEMENT
                  </span>
                  <span style={{ fontFamily: fonts.hand, fontSize: 20, color: theme.chalkText }}>
                    offset = i - first = {activeI} - {displayFirst} = <strong>{activeOffset}</strong> (distance from layer corner)
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 13,
                    color: theme.cyan,
                    border: `1px solid ${theme.cyan}`,
                    padding: "4px 10px",
                    borderRadius: 6,
                  }}
                >
                  STEPPING OFFSET
                </span>
              </div>
            ) : frame >= 985 ? (
              /* Inner loop setup (F985..F1587) */
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <span style={{ fontFamily: fonts.code, fontSize: 11, color: theme.gold, letterSpacing: 1 }}>
                    INNER LOOP · TOP EDGE TRAVERSAL
                  </span>
                  <span style={{ fontFamily: fonts.hand, fontSize: 20, color: theme.chalkText }}>
                    i in range(first, last) = range({displayFirst}, {displayLast}) · Excludes corner ({displayLast})
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 13,
                    color: theme.warn,
                    border: `1px solid ${theme.warn}`,
                    padding: "4px 10px",
                    borderRadius: 6,
                  }}
                >
                  LAST CORNER EXCLUDED
                </span>
              </div>
            ) : frame >= 75 ? (
              /* Outer loop setup (F75..F984) */
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <span style={{ fontFamily: fonts.code, fontSize: 11, color: theme.cyan, letterSpacing: 1 }}>
                    OUTER LOOP · CONCENTRIC LAYERS
                  </span>
                  <span style={{ fontFamily: fonts.hand, fontSize: 20, color: theme.chalkText }}>
                    layer in range(n // 2) = range(5 // 2) = range(2) ──► 2 outer concentric rings
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 13,
                    color: theme.cyan,
                    border: `1px solid ${theme.cyan}`,
                    padding: "4px 10px",
                    borderRadius: 6,
                  }}
                >
                  2 CONCENTRIC RINGS
                </span>
              </div>
            ) : (
              /* Frame 0..74: Initial state - ZERO SPOILERS */
              <div
                style={{
                  fontFamily: fonts.code,
                  fontSize: 14,
                  color: theme.chalkSub,
                  textAlign: "center",
                  letterSpacing: 1,
                }}
              >
                METHOD 2 IMPLEMENTATION · IN-PLACE 4-WAY ROTATION SETUP
              </div>
            )}
          </div>
        </div>
      </div>

      {/* =====================================================================
          CAPTIONS: Bottom Zone (Y: 960..1010) · Clear Breathing Room >= 180px
          ===================================================================== */}
      <Captions words={captionWords} />
    </div>
  );
};
