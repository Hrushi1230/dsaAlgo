/**
 * Scene11Method3Code.tsx — Scene 11 · Method 3 Code: In-Place Transpose & Reverse
 * Rotate Image (LeetCode 48) · Pattern 01 — Arrays & Hashing
 *
 * Implements the complete Python implementation of Method 3:
 * - Left Stage (X: 70..1020, Y: 135..740, Width: 950):
 *   - Canonical ChalkCodeEditorV2 with 11 syntax-highlighted Python lines
 *   - Character reveal timings strictly synchronized to exact spoken words
 *   - Zero spoilers: future lines remain hidden until reached by narration
 *   - Dynamic active line tracking and hot line highlighting (c = r + 1)
 *   - scrollY={0} ensuring all lines fit comfortably without scrolling
 * - Right Stage (X: 1070..1850, Y: 135..740, Width: 780):
 *   - Phase 1-4 (F0..F2004): 4×4 Support Matrix Visualizer
 *     - Built with RoughBox cells, ChalkText coordinates and cell values
 *     - RoughLine main diagonal divider in theme.pivot
 *     - Upper triangle (r < c) region illumination vs lower triangle dimming
 *     - Live Double-Swap Undo Demonstration (F673..F1258): (0,1) ↔ (1,0) swap, then row 1 duplicate visit
 *     - Pitfall warning pill (theme.warn) and Invariant rule pill (theme.good)
 *     - Live row reversal demonstration (F1791..F2004) confirming 90° clockwise rotation
 *   - Phase 5 (F2005..F3026): Algorithmic Complexity Breakdown
 *     - Step 1 Transpose Work: n(n - 1)/2 swaps = O(N²) (RoughBox + ChalkText)
 *     - Step 2 Reverse Rows Work: n × (n / 2) swaps = O(N²) (RoughBox + ChalkText)
 *     - Total Time Complexity: O(N²) + O(N²) = O(N²) (RoughBox + ChalkText)
 *     - Auxiliary Space Complexity: O(1) in-place memory (RoughBox + ChalkText)
 *     - Final Optimal Solution Seal (F2882..F3026)
 * - Top Bar: Clean metadata strip at Y: 36..100 (Zero explanations on top)
 * - Captions at bottom (Y: 960..1010) with >= 220px breathing clearance
 *
 * Total Duration: 3,026 frames @ 30fps (100.860s) strictly from sync/11-method3-code.json
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
  green: "#3FB950",
  amber: "#D29922",
  purple: "#bc8cff",
};

import { EASE } from "../../../../kit/lib/anim";
import { ChalkCodeEditorV2, ChalkCodeLine } from "../../../../kit/components/ChalkCodeEditorV2";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { RoughBox } from "../../../../kit/components/RoughBox";
import { ChalkText } from "../../../../kit/components/ChalkText";
import { RoughLine } from "../../../../kit/components/RoughLine";
import { ChalkDust } from "../../../../kit/components/ChalkDust";
import syncData from "../sync/11-method3-code.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings (from sync/11-method3-code.json)
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

// ---------------------------------------------------------------------------
// Method 3 Python Code Lines Definition (Strictly Word Synced)
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
    startFrame: 131,
    endFrame: 176,
    tokens: [
      { text: "n", color: theme.cyan },
      { text: " = ", color: theme.chalkText },
      { text: "len", color: theme.accent },
      { text: "(matrix)", color: theme.chalkText },
    ],
  },
  {
    num: 4,
    text: "        # Step 1: Transpose matrix",
    indent: 2,
    startFrame: 184,
    endFrame: 236,
    tokens: [
      { text: "# Step 1: Transpose matrix", color: theme.chalkDim },
    ],
  },
  {
    num: 5,
    text: "        for r in range(n):",
    indent: 2,
    startFrame: 247,
    endFrame: 296,
    tokens: [
      { text: "for ", color: theme.accent },
      { text: "r", color: theme.gold },
      { text: " in ", color: theme.accent },
      { text: "range", color: theme.cyan },
      { text: "(n):", color: theme.chalkText },
    ],
  },
  {
    num: 6,
    text: "            for c in range(r + 1, n):",
    indent: 3,
    startFrame: 424,
    endFrame: 514,
    tokens: [
      { text: "for ", color: theme.accent },
      { text: "c", color: theme.cyan },
      { text: " in ", color: theme.accent },
      { text: "range", color: theme.cyan },
      { text: "(", color: theme.chalkText },
      { text: "r + 1", color: theme.gold },
      { text: ", n):", color: theme.chalkText },
    ],
  },
  {
    num: 7,
    text: "                matrix[r][c], matrix[c][r] = matrix[c][r], matrix[r][c]",
    indent: 4,
    startFrame: 1399,
    endFrame: 1534,
    tokens: [
      { text: "matrix", color: theme.chalkText },
      { text: "[r][c]", color: theme.cyan },
      { text: ", ", color: theme.chalkText },
      { text: "matrix", color: theme.chalkText },
      { text: "[c][r]", color: theme.gold },
      { text: " = ", color: theme.accent },
      { text: "matrix", color: theme.chalkText },
      { text: "[c][r]", color: theme.gold },
      { text: ", ", color: theme.chalkText },
      { text: "matrix", color: theme.chalkText },
      { text: "[r][c]", color: theme.cyan },
    ],
  },
  {
    num: 8,
    text: "        # Step 2: Reverse each row",
    indent: 2,
    startFrame: 1687,
    endFrame: 1780,
    tokens: [
      { text: "# Step 2: Reverse each row", color: theme.chalkDim },
    ],
  },
  {
    num: 9,
    text: "        for row in matrix:",
    indent: 2,
    startFrame: 1791,
    endFrame: 1818,
    tokens: [
      { text: "for ", color: theme.accent },
      { text: "row", color: theme.gold },
      { text: " in ", color: theme.accent },
      { text: "matrix:", color: theme.chalkText },
    ],
  },
  {
    num: 10,
    text: "            row.reverse()",
    indent: 3,
    startFrame: 1837,
    endFrame: 1859,
    tokens: [
      { text: "row", color: theme.gold },
      { text: ".", color: theme.chalkText },
      { text: "reverse", color: theme.cyan },
      { text: "()", color: theme.chalkText },
    ],
  },
];

// Initial 4x4 test matrix values
const INITIAL_MATRIX = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

export const Scene11Method3Code: React.FC = () => {
  const frame = useCurrentFrame();

  // Entrance springs
  const editorEntrance = spring({
    frame,
    fps: 30,
    config: { damping: 16, stiffness: 100 },
  });

  const visualEntrance = spring({
    frame: frame - 180,
    fps: 30,
    config: { damping: 16, stiffness: 100 },
  });

  // Dynamic active line numbers for ChalkCodeEditorV2
  const activeLineNums = useMemo(() => {
    if (frame < 131) return [1, 2];
    if (frame < 184) return [3];
    if (frame < 247) return [4];
    if (frame < 424) return [5];
    if (frame < 1399) return [6];
    if (frame < 1687) return [7];
    if (frame < 1791) return [8];
    if (frame < 1837) return [9];
    if (frame < 2005) return [10];
    return []; // Complexity phase
  }, [frame]);

  // Hot line indicator for c = r + 1
  const isHotLine6 = (frame >= 424 && frame < 673) || (frame >= 1259 && frame < 1399);
  const hotLineNum = isHotLine6 ? 6 : undefined;
  const hotLineTag = isHotLine6 ? "CRITICAL BOUND" : undefined;

  // Grid sizing
  const CELL_SIZE = 64;
  const CELL_GAP = 10;
  const GRID_SIZE = 4 * CELL_SIZE + 3 * CELL_GAP; // 286px

  // Compute live matrix state based on frame
  // Double-swap demo: F673..F864 (swap 0,1 with 1,0), F865..F1035 (swap back / reached again), F1036..F1113 (reverts)
  // Real swap: F1399..F1686
  // Transposed complete: F1573+
  // Reverse rows: F1837+
  const matrixState = useMemo(() => {
    // Deep clone
    const m = INITIAL_MATRIX.map((row) => [...row]);

    if (frame >= 1837) {
      // Fully rotated 90° clockwise
      return [
        [13, 9, 5, 1],
        [14, 10, 6, 2],
        [15, 11, 7, 3],
        [16, 12, 8, 4],
      ];
    }

    if (frame >= 1573) {
      // Fully transposed
      return [
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],
        [4, 8, 12, 16],
      ];
    }

    if (frame >= 1399) {
      // Transpose swap of (0,1) and (1,0) in progress or done
      const p = interpolate(frame, [1399, 1480], [0, 1], { extrapolateRight: "clamp" });
      if (p >= 1) {
        m[0][1] = 5;
        m[1][0] = 2;
      }
      return m;
    }

    // Double-swap undo demo
    if (frame >= 673 && frame < 1114) {
      if (frame >= 1036) {
        // Reverts to original (undo)
        return INITIAL_MATRIX.map((row) => [...row]);
      }
      if (frame >= 865) {
        // Second swap back in progress
        return INITIAL_MATRIX.map((row) => [...row]);
      }
      // First swap in demo: (0,1) with (1,0)
      m[0][1] = 5;
      m[1][0] = 2;
      return m;
    }

    return m;
  }, [frame]);

  // Phase visibility flags
  const showMatrixStage = frame < 2005;
  const showComplexityStage = frame >= 2005;

  return (
    <div
      style={{
        position: "relative",
        width: 1920,
        height: 1080,
        backgroundColor: "#0D1117",
        overflow: "hidden",
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      <Audio src={staticFile("audio/014/11-method3-code.mp3")} />

      {/* ChalkDust Bursts for Key Milestones */}
      <ChalkDust x={545} y={437} count={24} color={theme.cyan} start={184} />
      <ChalkDust x={545} y={437} count={26} color={theme.gold} start={424} />
      <ChalkDust x={1460} y={480} count={30} color={theme.warn} start={673} />
      <ChalkDust x={1460} y={480} count={28} color={theme.green} start={1114} />
      <ChalkDust x={545} y={437} count={32} color={theme.cyan} start={1399} />
      <ChalkDust x={1460} y={480} count={26} color={theme.gold} start={1791} />
      <ChalkDust x={1460} y={150} count={30} color={theme.gold} start={2005} />
      <ChalkDust x={1460} y={450} count={34} color={theme.gold} start={2444} />
      <ChalkDust x={1460} y={550} count={36} color={theme.green} start={2594} />
      <ChalkDust x={1460} y={650} count={38} color={theme.green} start={2882} />

      {/* =====================================================================
          TOP BAR: Clean Metadata Strip (Y: 36..92)
          Zero explanations on top bar!
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
          opacity: editorEntrance,
          transform: `translateY(${(1 - editorEntrance) * -16}px)`,
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
              color: theme.chalkDim,
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
              color: theme.chalkText,
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
            METHOD 3: CODE IMPLEMENTATION
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
            PYTHON 3.11
          </div>
        </div>
      </div>

      {/* =====================================================================
          LEFT STAGE: Canonical ChalkCodeEditorV2 (X: 70..1020, Y: 135..740)
          Height: 605px, scrollY: 0
          ===================================================================== */}
      <div
        style={{
          position: "absolute",
          left: 70,
          top: 135,
          width: 950,
          height: 605,
          opacity: interpolate(editorEntrance, [0, 1], [0, showComplexityStage ? 0.72 : 1]),
          transform: `scale(${interpolate(editorEntrance, [0, 1], [0.97, 1.0])})`,
          transition: "opacity 0.3s ease",
          zIndex: 8,
        }}
      >
        <ChalkCodeEditorV2
          lines={CODE_LINES}
          activeLineNums={activeLineNums}
          hotLineNum={hotLineNum}
          hotLineTag={hotLineTag}
          title="rotate_image_optimal.py"
          language="PYTHON 3.11"
          fontSize={15}
          lineHeight={32}
          indentWidth={22}
          width={950}
          height={605}
          scrollY={0}
        />
      </div>

      {/* =====================================================================
          RIGHT STAGE: Live Visual Stage (X: 1070..1850, Y: 135..740)
          Two seamless phases: Support Matrix (F0..F2004) -> Complexity (F2005..F3026)
          Strictly 100% @dsa/kit primitives: RoughBox, ChalkText, RoughLine
          Zero cards / Zero AI slop!
          ===================================================================== */}
      {showMatrixStage && (
        <div
          style={{
            position: "absolute",
            left: 1070,
            top: 135,
            width: 780,
            height: 605,
            opacity: visualEntrance,
            transform: `scale(${interpolate(visualEntrance, [0, 1], [0.97, 1.0])})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 8,
          }}
        >
          {/* Section Header */}
          <div style={{ marginBottom: 16 }}>
            <ChalkText startFrame={184} fontSize={22} color={theme.gold} font="mono">
              DIRECT SUPPORT MATRIX (4×4)
            </ChalkText>
          </div>

          {/* Matrix Column Headers */}
          <div
            style={{
              display: "flex",
              gap: CELL_GAP,
              marginLeft: 44,
              marginBottom: 6,
            }}
          >
            {[0, 1, 2, 3].map((c) => {
              const isColWarn = frame >= 310 && frame < 424 && c === 0;
              return (
                <div
                  key={c}
                  style={{
                    width: CELL_SIZE,
                    textAlign: "center",
                    fontFamily: fonts.code,
                    fontSize: 13,
                    color: isColWarn ? theme.warn : theme.chalkDim,
                  }}
                >
                  c={c}
                  {isColWarn && (
                    <span style={{ display: "block", color: theme.warn, fontSize: 11, fontWeight: 700 }}>
                      c ≠ 0
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Matrix Grid Container with Row Headers */}
          <div style={{ display: "flex", alignItems: "flex-start", position: "relative" }}>
            {/* Row Headers */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: CELL_GAP,
                marginRight: 10,
                justifyContent: "space-around",
              }}
            >
              {[0, 1, 2, 3].map((r) => {
                const isRRow = (frame >= 247 && r === 0) || (frame >= 865 && frame < 1114 && r === 1);
                return (
                  <div
                    key={r}
                    style={{
                      height: CELL_SIZE,
                      display: "flex",
                      alignItems: "center",
                      fontFamily: fonts.code,
                      fontSize: 13,
                      color: isRRow ? theme.cyan : theme.chalkDim,
                    }}
                  >
                    r={r}
                  </div>
                );
              })}
            </div>

            {/* 4x4 Grid Cells */}
            <div
              style={{
                position: "relative",
                width: GRID_SIZE,
                height: GRID_SIZE,
                display: "grid",
                gridTemplateColumns: `repeat(4, ${CELL_SIZE}px)`,
                gap: `${CELL_GAP}px`,
              }}
            >
              {[0, 1, 2, 3].map((r) =>
                [0, 1, 2, 3].map((c) => {
                  const val = matrixState[r][c];
                  const isDiag = r === c;
                  const isAbove = r < c;
                  const isBelow = r > c;

                  // Highlighting conditions
                  const isUpperTriangleLit = frame >= 530 && isAbove;
                  const isDimmed = frame >= 530 && (isDiag || isBelow);

                  // Double swap demo highlights
                  const isPair01 = (r === 0 && c === 1) || (r === 1 && c === 0);
                  const isDemoSwapActive = frame >= 673 && frame < 1259 && isPair01;
                  const isDuplicateHazard = frame >= 865 && frame < 1036 && r === 1 && c === 0;

                  // Active swap in Step 1
                  const isLiveSwap = frame >= 1399 && frame < 1687 && isPair01;

                  let cellStroke: string = isDiag ? theme.gold : theme.cardBorder;
                  if (isUpperTriangleLit) cellStroke = theme.cyan;
                  if (isDemoSwapActive) cellStroke = theme.cyan;
                  if (isDuplicateHazard) cellStroke = theme.warn;
                  if (isLiveSwap) cellStroke = theme.green;

                  return (
                    <div
                      key={`${r}-${c}`}
                      style={{
                        position: "relative",
                        width: CELL_SIZE,
                        height: CELL_SIZE,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: isDimmed ? 0.35 : 1,
                      }}
                    >
                      <RoughBox
                        width={CELL_SIZE}
                        height={CELL_SIZE}
                        stroke={cellStroke}
                        strokeWidth={isDemoSwapActive || isLiveSwap ? 3 : 2}
                        seed={r * 10 + c + 1}
                      />
                      <span
                        style={{
                          position: "absolute",
                          fontFamily: fonts.code,
                          fontSize: 18,
                          fontWeight: 700,
                          color: isDemoSwapActive || isLiveSwap ? theme.cyan : theme.chalkText,
                        }}
                      >
                        {val}
                      </span>
                    </div>
                  );
                })
              )}

              {/* Main Diagonal Divider Line */}
              {frame >= 184 && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: GRID_SIZE,
                    height: GRID_SIZE,
                    pointerEvents: "none",
                  }}
                >
                  <RoughLine
                    shape={{
                      kind: "line",
                      x1: 4,
                      y1: 4,
                      x2: GRID_SIZE - 4,
                      y2: GRID_SIZE - 4,
                    }}
                    width={GRID_SIZE}
                    height={GRID_SIZE}
                    stroke={theme.gold}
                    strokeWidth={2.5}
                    seed={88}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Dynamic Explanatory Badges & Invariant Rules (Direct RoughBox + ChalkText) */}
          <div style={{ marginTop: 26, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            {/* Double-Swap Warning (F673..F1113) */}
            {frame >= 673 && frame < 1114 && (
              <div style={{ position: "relative", width: 620, height: 76, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <RoughBox
                  width={620}
                  height={76}
                  startFrame={673}
                  stroke={theme.warn}
                  strokeWidth={2.5}
                  seed={23}
                />
                <div style={{ position: "absolute", textAlign: "center", padding: "0 16px" }}>
                  <div style={{ fontFamily: fonts.code, fontSize: 15, fontWeight: 700, color: theme.warn, marginBottom: 4 }}>
                    {frame >= 1036
                      ? "UNDO! Swapping (1,0) Reverts Matrix to Original!"
                      : "PITFALL: If c started at 0, (0,1) ↔ (1,0) swaps TWICE!"}
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkDim }}>
                    {frame >= 1036
                      ? "Net Result: 0 Progress (Self-Cancelling Mutation)"
                      : "Row 0 swaps (0,1) with (1,0). Row 1 swaps them back."}
                  </div>
                </div>
              </div>
            )}

            {/* Invariant Rule Pill (F1114..F1398) */}
            {frame >= 1114 && frame < 1399 && (
              <div style={{ position: "relative", width: 620, height: 76, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <RoughBox
                  width={620}
                  height={76}
                  startFrame={1114}
                  stroke={theme.green}
                  strokeWidth={2.5}
                  seed={45}
                />
                <div style={{ position: "absolute", textAlign: "center", padding: "0 16px" }}>
                  <div style={{ fontFamily: fonts.code, fontSize: 16, fontWeight: 700, color: theme.green, marginBottom: 4 }}>
                    INVARIANT: Each Symmetric Pair Swapped ONCE
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText }}>
                    Starting at c = r + 1 restricts visits strictly to r &lt; c (Above Diagonal)
                  </div>
                </div>
              </div>
            )}

            {/* Step 1 Transpose Confirmation (F1573..F1790) */}
            {frame >= 1573 && frame < 1791 && (
              <div style={{ position: "relative", width: 560, height: 60, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <RoughBox
                  width={560}
                  height={60}
                  startFrame={1573}
                  stroke={theme.cyan}
                  strokeWidth={2.2}
                  seed={56}
                />
                <div style={{ position: "absolute", textAlign: "center" }}>
                  <span style={{ fontFamily: fonts.code, fontSize: 15, fontWeight: 700, color: theme.cyan }}>
                    Step 1 Complete: Matrix Transposed (Rows ↔ Cols) ✓
                  </span>
                </div>
              </div>
            )}

            {/* Full Method 3 Pipeline Confirmation (F1791..F2004) */}
            {frame >= 1791 && (
              <div style={{ position: "relative", width: 620, height: 76, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <RoughBox
                  width={620}
                  height={76}
                  startFrame={1791}
                  stroke={theme.gold}
                  strokeWidth={2.5}
                  seed={77}
                />
                <div style={{ position: "absolute", textAlign: "center", padding: "0 16px" }}>
                  <div style={{ fontFamily: fonts.code, fontSize: 15, fontWeight: 700, color: theme.gold, marginBottom: 4 }}>
                    OPTIMAL PIPELINE VERIFIED (90° CLOCKWISE)
                  </div>
                  <div style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkText }}>
                    1. Transpose Matrix (r &lt; c)  ➔  2. Reverse Each Row
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =====================================================================
          PHASE 5: Algorithmic Complexity Derivation (F2005..F3026)
          Strictly 100% Kit Primitives: RoughBox, ChalkText
          Derives Transpose Time + Reverse Time = Total Time & O(1) Space
          Zero cards / Zero AI slop!
          ===================================================================== */}
      {showComplexityStage && (
        <div
          style={{
            position: "absolute",
            left: 1070,
            top: 135,
            width: 780,
            height: 605,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 8,
          }}
        >
          {/* Header */}
          <div>
            <ChalkText startFrame={2005} fontSize={24} color={theme.gold} font="mono">
              ALGORITHMIC COMPLEXITY ANALYSIS
            </ChalkText>
          </div>

          {/* Token 1: Transpose Work (F2063+) */}
          <div
            style={{
              position: "relative",
              width: 720,
              height: 95,
              opacity: interpolate(frame, [2063, 2085], [0, 1], { extrapolateRight: "clamp" }),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <RoughBox
              width={720}
              height={95}
              startFrame={2063}
              stroke={theme.cyan}
              strokeWidth={2.5}
              seed={101}
            />
            <div style={{ position: "absolute", width: "100%", padding: "0 28px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontFamily: fonts.code, fontSize: 16, fontWeight: 700, color: theme.cyan, marginBottom: 4 }}>
                  Step 1: Transpose Matrix
                </div>
                <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkDim }}>
                  Visits upper triangle: n(n - 1) / 2 swaps ≈ N² / 2
                </div>
              </div>
              <div style={{ fontFamily: fonts.code, fontSize: 22, fontWeight: 700, color: theme.cyan }}>
                O(N²)
              </div>
            </div>
          </div>

          {/* Token 2: Reverse Rows Work (F2295+) */}
          <div
            style={{
              position: "relative",
              width: 720,
              height: 95,
              opacity: interpolate(frame, [2295, 2320], [0, 1], { extrapolateRight: "clamp" }),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <RoughBox
              width={720}
              height={95}
              startFrame={2295}
              stroke={theme.accent}
              strokeWidth={2.5}
              seed={102}
            />
            <div style={{ position: "absolute", width: "100%", padding: "0 28px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontFamily: fonts.code, fontSize: 16, fontWeight: 700, color: theme.accent, marginBottom: 4 }}>
                  Step 2: Reverse Each Row
                </div>
                <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkDim }}>
                  n rows × (n / 2) two-pointer swaps = N² / 2
                </div>
              </div>
              <div style={{ fontFamily: fonts.code, fontSize: 22, fontWeight: 700, color: theme.accent }}>
                O(N²)
              </div>
            </div>
          </div>

          {/* Token 3: Total Time Complexity (F2444+) */}
          <div
            style={{
              position: "relative",
              width: 720,
              height: 95,
              opacity: interpolate(frame, [2444, 2470], [0, 1], { extrapolateRight: "clamp" }),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <RoughBox
              width={720}
              height={95}
              startFrame={2444}
              stroke={theme.gold}
              strokeWidth={3}
              seed={103}
            />
            <div style={{ position: "absolute", width: "100%", padding: "0 28px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontFamily: fonts.code, fontSize: 17, fontWeight: 700, color: theme.gold, marginBottom: 4 }}>
                  TOTAL TIME COMPLEXITY
                </div>
                <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkText }}>
                  O(N² / 2) + O(N² / 2) = O(N²) overall
                </div>
              </div>
              <div style={{ fontFamily: fonts.code, fontSize: 26, fontWeight: 700, color: theme.gold }}>
                O(N²)
              </div>
            </div>
          </div>

          {/* Token 4: Auxiliary Space (F2594+) */}
          <div
            style={{
              position: "relative",
              width: 720,
              height: 95,
              opacity: interpolate(frame, [2594, 2620], [0, 1], { extrapolateRight: "clamp" }),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <RoughBox
              width={720}
              height={95}
              startFrame={2594}
              stroke={theme.green}
              strokeWidth={3}
              seed={104}
            />
            <div style={{ position: "absolute", width: "100%", padding: "0 28px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontFamily: fonts.code, fontSize: 17, fontWeight: 700, color: theme.green, marginBottom: 4 }}>
                  AUXILIARY SPACE COMPLEXITY
                </div>
                <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkText }}>
                  100% In-Place: Zero auxiliary matrices allocated
                </div>
              </div>
              <div style={{ fontFamily: fonts.code, fontSize: 26, fontWeight: 700, color: theme.green }}>
                O(1)
              </div>
            </div>
          </div>

          {/* Final Seal (F2882..F3026) */}
          <div
            style={{
              opacity: interpolate(frame, [2882, 2915], [0, 1], { extrapolateRight: "clamp" }),
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <ChalkText startFrame={2882} fontSize={17} color={theme.green} font="mono">
              ★ OPTIMAL IN-PLACE SOLUTION CONFIRMED
            </ChalkText>
          </div>
        </div>
      )}

      {/* =====================================================================
          BOTTOM CAPTIONS: Word-Level Sync (Y: 960..1010)
          Clearance above: Y: 960 - Y: 740 = 220px to 280px clean space!
          ===================================================================== */}
      <Captions words={captionWords} />
    </div>
  );
};
