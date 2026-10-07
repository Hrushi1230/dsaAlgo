/**
 * Scene04CopyCode.tsx — Scene 04 · Method 1 Code: Full Original Copy
 * Question 013: Set Matrix Zeroes (LeetCode 73) · Pattern 01 — Arrays & Hashing
 *
 * Strict Compliance:
 * - 04_SCENE04_METHOD1_CODE_WORD_BASED_VISUAL_PLAN.md (all 21 beats)
 * - 04_SCENE04_SECOND_INDEPENDENT_AUDIT_V2.md (PASS invariants)
 * - sync/04-copy-code.anchors.json (exact word-level frame anchors)
 * - Mobile-first legibility: Large boxes, high contrast, 22px code font, 64px matrix cells.
 * - Uses canonical @dsa/kit primitives: ChalkCodeEditorV2, RoughBox, ChalkText.
 * - Zero CSS transitions/animations; 100% Remotion frame-derived determinism.
 *
 * Duration: 1981 frames @ 30fps (66.020s)
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
import { ChalkCodeEditorV2, ChalkCodeLine } from "../../../../kit/components/ChalkCodeEditorV2";
import { RoughBox } from "../../../../kit/components/RoughBox";
import { ChalkText } from "../../../../kit/components/ChalkText";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import syncData from "../sync/04-copy-code.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

// ---------------------------------------------------------------------------
// Master Matrix Definition
// ---------------------------------------------------------------------------
const MASTER_MATRIX = [
  [1, 2, 0, 4, 5],
  [6, 7, 8, 9, 10],
  [0, 12, 13, 14, 15],
  [16, 17, 18, 0, 20],
  [21, 22, 23, 24, 25],
];

// Original zero coordinates
const ORIGINAL_ZEROES = [
  { r: 0, c: 2 },
  { r: 2, c: 0 },
  { r: 3, c: 3 },
];

// ---------------------------------------------------------------------------
// Exact Code Lines with Character Reveal Frames (from sync/04-copy-code.anchors.json)
// ---------------------------------------------------------------------------
const CODE_LINES: ChalkCodeLine[] = [
  {
    num: 1,
    text: "def setZeroesCopy(matrix: list[list[int]]) -> None:",
    indent: 0,
    startFrame: 0,
    endFrame: 16,
    tokens: [
      { text: "def ", color: theme.accent },
      { text: "setZeroesCopy", color: theme.cyan },
      { text: "(matrix: list[list[int]]) -> None:", color: theme.chalkText },
    ],
  },
  {
    num: 2,
    text: "    original = [row[:] for row in matrix]",
    indent: 1,
    startFrame: 32,
    endFrame: 83,
    tokens: [
      { text: "original", color: theme.pivot },
      { text: " = [", color: theme.chalkText },
      { text: "row[:]", color: theme.good },
      { text: " for ", color: theme.accent },
      { text: "row", color: theme.chalkText },
      { text: " in ", color: theme.accent },
      { text: "matrix", color: theme.chalkText },
      { text: "]", color: theme.chalkText },
    ],
  },
  {
    num: 3,
    text: "",
    indent: 0,
    startFrame: 184,
    endFrame: 184,
    tokens: [],
  },
  {
    num: 4,
    text: "    m = len(matrix)",
    indent: 1,
    startFrame: 184,
    endFrame: 233,
    tokens: [
      { text: "m", color: theme.good },
      { text: " = ", color: theme.chalkText },
      { text: "len", color: theme.cyan },
      { text: "(matrix)", color: theme.chalkText },
    ],
  },
  {
    num: 5,
    text: "    n = len(matrix[0])",
    indent: 1,
    startFrame: 233,
    endFrame: 294,
    tokens: [
      { text: "n", color: theme.good },
      { text: " = ", color: theme.chalkText },
      { text: "len", color: theme.cyan },
      { text: "(matrix[0])", color: theme.chalkText },
    ],
  },
  {
    num: 6,
    text: "",
    indent: 0,
    startFrame: 321,
    endFrame: 321,
    tokens: [],
  },
  {
    num: 7,
    text: "    for r in range(m):",
    indent: 1,
    startFrame: 321,
    endFrame: 360,
    tokens: [
      { text: "for ", color: theme.accent },
      { text: "r", color: theme.good },
      { text: " in ", color: theme.accent },
      { text: "range", color: theme.cyan },
      { text: "(m):", color: theme.chalkText },
    ],
  },
  {
    num: 8,
    text: "        for c in range(n):",
    indent: 2,
    startFrame: 360,
    endFrame: 403,
    tokens: [
      { text: "for ", color: theme.accent },
      { text: "c", color: theme.good },
      { text: " in ", color: theme.accent },
      { text: "range", color: theme.cyan },
      { text: "(n):", color: theme.chalkText },
    ],
  },
  {
    num: 9,
    text: "            if original[r][c] == 0:",
    indent: 3,
    startFrame: 553,
    endFrame: 626,
    tokens: [
      { text: "if ", color: theme.accent },
      { text: "original[r][c]", color: theme.pivot },
      { text: " == ", color: theme.chalkText },
      { text: "0", color: theme.warn },
      { text: ":", color: theme.chalkText },
    ],
  },
  {
    num: 10,
    text: "                for j in range(n):",
    indent: 4,
    startFrame: 643,
    endFrame: 690,
    tokens: [
      { text: "for ", color: theme.accent },
      { text: "j", color: theme.good },
      { text: " in ", color: theme.accent },
      { text: "range", color: theme.cyan },
      { text: "(n):", color: theme.chalkText },
    ],
  },
  {
    num: 11,
    text: "                    matrix[r][j] = 0",
    indent: 5,
    startFrame: 690,
    endFrame: 740,
    tokens: [
      { text: "matrix[r][j]", color: theme.good },
      { text: " = ", color: theme.chalkText },
      { text: "0", color: theme.warn },
    ],
  },
  {
    num: 12,
    text: "",
    indent: 0,
    startFrame: 754,
    endFrame: 754,
    tokens: [],
  },
  {
    num: 13,
    text: "                for i in range(m):",
    indent: 4,
    startFrame: 754,
    endFrame: 805,
    tokens: [
      { text: "for ", color: theme.accent },
      { text: "i", color: theme.good },
      { text: " in ", color: theme.accent },
      { text: "range", color: theme.cyan },
      { text: "(m):", color: theme.chalkText },
    ],
  },
  {
    num: 14,
    text: "                    matrix[i][c] = 0",
    indent: 5,
    startFrame: 805,
    endFrame: 863,
    tokens: [
      { text: "matrix[i][c]", color: theme.good },
      { text: " = ", color: theme.chalkText },
      { text: "0", color: theme.warn },
    ],
  },
];

export const Scene04CopyCode: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // -------------------------------------------------------------------------
  // Dynamic Active Line Highlighting (Choreographed to narration beats)
  // -------------------------------------------------------------------------
  const activeLineNums = useMemo(() => {
    if (frame >= 0 && frame < 32) return [1];
    if (frame >= 32 && frame < 184) return [2];
    if (frame >= 184 && frame < 233) return [4];
    if (frame >= 233 && frame < 321) return [5];
    if (frame >= 321 && frame < 360) return [7];
    if (frame >= 360 && frame < 422) return [8];
    if (frame >= 422 && frame < 553) return [7, 8]; // Querying original cell
    if (frame >= 553 && frame < 643) return [9]; // if original[r][c] == 0:
    if (frame >= 643 && frame < 754) return [10, 11]; // Row zeroing loop
    if (frame >= 754 && frame < 863) return [13, 14]; // Column zeroing loop
    if (frame >= 863 && frame < 976) return [1, 2, 4, 5, 7, 8, 9, 10, 11, 13, 14]; // Full code settled
    if (frame >= 976 && frame < 1079) return [2, 9]; // Read from copy tokens
    if (frame >= 1079 && frame < 1183) return [11, 14]; // Write into real matrix
    if (frame >= 1183 && frame < 1420) return [2, 9, 11, 14]; // Invariance: Read original -> Write matrix
    if (frame >= 1420 && frame < 1756) return [2]; // Full copy line cost critique
    return [];
  }, [frame]);

  // Hot Line: Highlight Line 2 in warning red during space critique
  const hotLineNum = frame >= 1420 && frame < 1756 ? 2 : undefined;

  // -------------------------------------------------------------------------
  // Deterministic Scroll Position for Method 1 Code
  // Keeps active code lines comfortably in view at large 23px mobile font
  // -------------------------------------------------------------------------
  const scrollY = useMemo(() => {
    if (frame < 643) return 0;
    // When row/column zeroing loops type (Lines 10..14, F643..F863)
    if (frame < 976) {
      return interpolate(frame, [643, 720], [0, 80], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    }
    // When critiquing Line 2 bottleneck at F1420..F1756, scroll back to 0
    if (frame >= 1420) {
      return interpolate(frame, [1420, 1450], [80, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    }
    return 0;
  }, [frame]);

  // -------------------------------------------------------------------------
  // Split Screen vs Full Center Stage Transition (Beats 20-21: F1789..F1981)
  // -------------------------------------------------------------------------
  const isQuestionPhase = frame >= 1789;
  const splitFadeOut = interpolate(frame, [1789, 1820], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const questionFadeIn = interpolate(frame, [1820, 1860], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const questionScale = spring({
    frame: Math.max(0, frame - 1820),
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  // -------------------------------------------------------------------------
  // Right Side Matrix Lifecycle & Semantic Progression
  // -------------------------------------------------------------------------
  // Matrix enters after Line 2 finishes typing (F83+)
  const matrixVisible = frame >= 83;
  const matrixOpacity = interpolate(frame, [83, 110], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const matrixScale = spring({
    frame: Math.max(0, frame - 83),
    fps,
    config: { damping: 14, stiffness: 130 },
  });

  // Working matrix zeroing state for Row 0 and Col 2
  const isRow0Zeroed = frame >= 690;
  const isCol2Zeroed = frame >= 805;

  // Scan traversal state (F321..F552)
  const isScanning = frame >= 321 && frame < 553;
  const scannedCell = useMemo(() => {
    if (frame >= 422 && frame < 553) return { r: 0, c: 1 }; // Non-zero cell query
    if (frame >= 321 && frame < 422) return { r: 0, c: 0 };
    return null;
  }, [frame]);

  // Zero detection at (0, 2)
  const isZeroDetected = frame >= 553 && frame < 643;

  // Memory overhead critique: Fade 22 non-zero numbers to 15% opacity (F1631..F1755)
  const isIrrelevantFade = frame >= 1631 && frame < 1789;
  const irrelevantOpacity = interpolate(frame, [1631, 1660], [1, 0.15], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        position: "relative",
        backgroundColor: theme.boardBg,
        overflow: "hidden",
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      {/* ----------------------------------------------------------------- */}
      {/* Top Navigation Header (Strictly Y: 42..108)                         */}
      {/* ----------------------------------------------------------------- */}
      <div
        style={{
          position: "absolute",
          top: 42,
          left: 80,
          right: 80,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              padding: "6px 16px",
              borderRadius: 20,
              backgroundColor: "rgba(6, 214, 160, 0.14)",
              border: `1.5px solid ${theme.good}`,
              color: theme.good,
              fontFamily: fonts.mono,
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: "0.06em",
            }}
          >
            ● 01 · ARRAYS & HASHING
          </div>
          <div
            style={{
              padding: "6px 16px",
              borderRadius: 20,
              backgroundColor: "rgba(255, 209, 102, 0.12)",
              border: `1.5px solid ${theme.pivot}`,
              color: theme.pivot,
              fontFamily: fonts.mono,
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: "0.06em",
            }}
          >
            METHOD 1 CODE: FULL ORIGINAL COPY (PYTHON)
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 16,
              fontWeight: 700,
              color: theme.chalkDim,
            }}
          >
            LEETCODE 73
          </span>
          <span
            style={{
              padding: "4px 12px",
              borderRadius: 14,
              backgroundColor: "rgba(255, 209, 102, 0.15)",
              color: theme.pivot,
              fontFamily: fonts.mono,
              fontSize: 14,
              fontWeight: 800,
            }}
          >
            MEDIUM
          </span>
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* Main Split-Stage Area (Y: 115..895, Total Height: 780px)          */}
      {/* Left: Big Code Editor (X: 45, W: 1100, H: 780)                    */}
      {/* Right: Live Semantic Matrix & Callouts (X: 1175, W: 700, H: 780) */}
      {/* ----------------------------------------------------------------- */}
      <div
        style={{
          position: "absolute",
          top: 115,
          left: 45,
          width: 1830,
          height: 780,
          display: "flex",
          justifyContent: "space-between",
          opacity: splitFadeOut,
          pointerEvents: isQuestionPhase ? "none" : "auto",
        }}
      >
        {/* Left Side: Canonical ChalkCodeEditorV2 (Big Bold Mobile Legible) */}
        <div style={{ width: 1100, height: 780 }}>
          <ChalkCodeEditorV2
            lines={CODE_LINES}
            activeLineNums={activeLineNums}
            hotLineNum={hotLineNum}
            hotLineTag="O(M×N) SPACE BOTTLENECK"
            title="set_matrix_zeroes_copy.py"
            language="PYTHON 3.11"
            width={1100}
            height={780}
            fontSize={23}
            lineHeight={40}
            indentWidth={28}
            scrollY={scrollY}
          />
        </div>

        {/* Right Side: Live Matrix Proof & Pedagogical Callouts */}
        <div
          style={{
            width: 700,
            height: 780,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 20,
          }}
        >
          {matrixVisible && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: matrixOpacity,
                transform: `scale(${matrixScale})`,
                transformOrigin: "top center",
              }}
            >
              {/* Matrix Top Tag & Dimension n = 5 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: 352,
                  marginBottom: 8,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    color: theme.pivot,
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    fontWeight: 800,
                  }}
                >
                  <span>🔒</span>
                  <span>
                    {frame >= 643 && frame < 976
                      ? "WORKING MATRIX (matrix)"
                      : "READ-ONLY COPY (original)"}
                  </span>
                </div>

                {frame >= 233 && (
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 15,
                      fontWeight: 800,
                      color: theme.good,
                      backgroundColor: "rgba(6, 214, 160, 0.15)",
                      padding: "2px 8px",
                      borderRadius: 6,
                      border: `1px solid ${theme.good}`,
                    }}
                  >
                    n = 5 cols
                  </div>
                )}
              </div>

              {/* 5x5 Big Matrix Grid with row dimension m = 5 on the left */}
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                {frame >= 184 && (
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 15,
                      fontWeight: 800,
                      color: theme.good,
                      backgroundColor: "rgba(6, 214, 160, 0.15)",
                      padding: "4px 8px",
                      borderRadius: 6,
                      border: `1px solid ${theme.good}`,
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                      height: 120,
                      textAlign: "center",
                    }}
                  >
                    m = 5 rows
                  </div>
                )}

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 64px)",
                    gap: 8,
                    padding: 10,
                    borderRadius: 14,
                    backgroundColor: "rgba(10, 36, 25, 0.92)",
                    border: `2px solid ${
                      hotLineNum ? theme.warn : "rgba(248, 246, 240, 0.3)"
                    }`,
                    boxShadow: hotLineNum
                      ? `0 0 24px rgba(255, 107, 107, 0.35)`
                      : "0 12px 28px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {MASTER_MATRIX.map((row, r) =>
                    row.map((val, c) => {
                      // Determine cell display value based on mutation state
                      let displayVal = val;
                      let isMutatedZero = false;
                      if (frame >= 643 && frame < 976) {
                        // Working matrix view showing row/col zeroing
                        if (isRow0Zeroed && r === 0) {
                          displayVal = 0;
                          isMutatedZero = val !== 0;
                        }
                        if (isCol2Zeroed && c === 2) {
                          displayVal = 0;
                          isMutatedZero = val !== 0;
                        }
                      }

                      // Highlight states
                      const isOriginalZero = val === 0;
                      const isCurrentScan =
                        isScanning && scannedCell?.r === r && scannedCell?.c === c;
                      const isTargetZero = isZeroDetected && r === 0 && c === 2;

                      // Irrelevant numbers fade to 15% opacity during space critique
                      const cellOpacity =
                        isIrrelevantFade && !isOriginalZero ? irrelevantOpacity : 1;

                      return (
                        <div
                          key={`${r}-${c}`}
                          style={{
                            width: 64,
                            height: 64,
                            borderRadius: 10,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: isTargetZero
                              ? "rgba(255, 209, 102, 0.35)"
                              : isMutatedZero
                              ? "rgba(6, 214, 160, 0.28)"
                              : isCurrentScan
                              ? "rgba(76, 201, 240, 0.25)"
                              : isOriginalZero
                              ? "rgba(255, 209, 102, 0.2)"
                              : "rgba(255, 255, 255, 0.05)",
                            border: isTargetZero
                              ? `3px solid ${theme.pivot}`
                              : isMutatedZero
                              ? `2.5px solid ${theme.good}`
                              : isCurrentScan
                              ? `2.5px solid ${theme.cyan}`
                              : isOriginalZero
                              ? `2px solid ${theme.pivot}`
                              : "1.5px solid rgba(248, 246, 240, 0.2)",
                            boxShadow: isTargetZero
                              ? `0 0 18px ${theme.pivot}`
                              : isMutatedZero
                              ? `0 0 14px ${theme.good}`
                              : isCurrentScan
                              ? `0 0 12px ${theme.cyan}`
                              : "none",
                            opacity: cellOpacity,
                          }}
                        >
                          <span
                            style={{
                              fontFamily: fonts.mono,
                              fontSize: 26,
                              fontWeight: 900,
                              color: isTargetZero
                                ? theme.pivot
                                : isMutatedZero
                                ? theme.good
                                : isCurrentScan
                                ? theme.cyan
                                : isOriginalZero
                                ? theme.pivot
                                : theme.chalkText,
                            }}
                          >
                            {displayVal}
                          </span>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Dynamic Pedagogical Callout Card (Mobile-First Big Bold Text) */}
          <div
            style={{
              width: "100%",
              minHeight: 180,
              borderRadius: 16,
              backgroundColor: "rgba(10, 36, 25, 0.95)",
              border: `2px solid ${
                hotLineNum ? theme.warn : "rgba(248, 246, 240, 0.25)"
              }`,
              padding: "18px 24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
            }}
          >
            {/* Beat 01..03: Full Copy & Read-Only Invariant */}
            {frame < 321 && (
              <div>
                <div
                  style={{
                    color: theme.pivot,
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    marginBottom: 6,
                  }}
                >
                  METHOD 1 PRINCIPLE · STEP 1
                </div>
                <div
                  style={{
                    color: theme.chalkText,
                    fontFamily: fonts.sans,
                    fontSize: 24,
                    fontWeight: 700,
                    lineHeight: 1.3,
                  }}
                >
                  Create an exact duplicate of the matrix.
                </div>
                <div
                  style={{
                    marginTop: 8,
                    color: "rgba(255, 253, 247, 0.88)",
                    fontFamily: fonts.sans,
                    fontSize: 19,
                    lineHeight: 1.4,
                  }}
                >
                  This copy serves as the immutable ground truth for zero discovery. It will
                  <span style={{ color: theme.pivot, fontWeight: 800 }}> never be modified</span>.
                </div>
              </div>
            )}

            {/* Beat 06..08: Non-Zero Scan Query */}
            {frame >= 321 && frame < 553 && (
              <div>
                <div
                  style={{
                    color: theme.cyan,
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    marginBottom: 6,
                  }}
                >
                  TRAVERSAL QUERY · CELL (0, 1)
                </div>
                <div
                  style={{
                    color: theme.chalkText,
                    fontFamily: fonts.sans,
                    fontSize: 23,
                    fontWeight: 700,
                    lineHeight: 1.3,
                  }}
                >
                  original[0][1] = 2{" "}
                  <span style={{ color: theme.warn }}>(NOT ZERO)</span>
                </div>
                <div
                  style={{
                    marginTop: 8,
                    color: theme.good,
                    fontFamily: fonts.mono,
                    fontSize: 20,
                    fontWeight: 800,
                  }}
                >
                  ➔ ACTION: DO NOTHING (Working matrix remains untouched)
                </div>
              </div>
            )}

            {/* Beat 09: Zero Detected at (0, 2) */}
            {frame >= 553 && frame < 643 && (
              <div>
                <div
                  style={{
                    color: theme.pivot,
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    marginBottom: 6,
                  }}
                >
                  ORIGINAL ZERO DETECTED!
                </div>
                <div
                  style={{
                    color: theme.chalkText,
                    fontFamily: fonts.sans,
                    fontSize: 24,
                    fontWeight: 700,
                    lineHeight: 1.3,
                  }}
                >
                  original[0][2] == 0 evaluates <span style={{ color: theme.good }}>TRUE</span>
                </div>
                <div
                  style={{
                    marginTop: 8,
                    color: "rgba(255, 253, 247, 0.88)",
                    fontFamily: fonts.sans,
                    fontSize: 19,
                  }}
                >
                  Triggers row 0 and column 2 erasure in working matrix.
                </div>
              </div>
            )}

            {/* Beat 10..11: Row and Column Zeroing in Matrix */}
            {frame >= 643 && frame < 863 && (
              <div>
                <div
                  style={{
                    color: theme.good,
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    marginBottom: 6,
                  }}
                >
                  WORKING MATRIX MUTATION
                </div>
                <div
                  style={{
                    color: theme.chalkText,
                    fontFamily: fonts.sans,
                    fontSize: 22,
                    fontWeight: 700,
                    lineHeight: 1.3,
                  }}
                >
                  {frame < 754 ? (
                    <span>
                      Zeroing entire Row 0: <code style={{ color: theme.good }}>matrix[0][j] = 0</code>
                    </span>
                  ) : (
                    <span>
                      Zeroing entire Column 2: <code style={{ color: theme.good }}>matrix[i][2] = 0</code>
                    </span>
                  )}
                </div>
                <div
                  style={{
                    marginTop: 8,
                    color: theme.pivot,
                    fontFamily: fonts.mono,
                    fontSize: 18,
                    fontWeight: 800,
                  }}
                >
                  ✓ Notice: original copy remains 100% UNTOUCHED!
                </div>
              </div>
            )}

            {/* Beat 12..16: Sound Correctness & No Chain Reactions */}
            {frame >= 863 && frame < 1420 && (
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 6,
                  }}
                >
                  <span
                    style={{
                      color: theme.good,
                      fontFamily: fonts.mono,
                      fontSize: 16,
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                    }}
                  >
                    THE SOURCE INVARIANCE LAW
                  </span>
                  <span
                    style={{
                      padding: "2px 8px",
                      borderRadius: 6,
                      backgroundColor: "rgba(6, 214, 160, 0.2)",
                      color: theme.good,
                      fontFamily: fonts.mono,
                      fontSize: 13,
                      fontWeight: 800,
                    }}
                  >
                    {frame >= 1345 ? "✓ 100% CORRECT & SIMPLE" : "100% SOUND"}
                  </span>
                </div>
                <div
                  style={{
                    color: theme.chalkText,
                    fontFamily: fonts.sans,
                    fontSize: 22,
                    fontWeight: 700,
                    lineHeight: 1.3,
                  }}
                >
                  Read from the copy ➔ Write into the real matrix.
                </div>
                <div
                  style={{
                    marginTop: 8,
                    color: "rgba(255, 253, 247, 0.88)",
                    fontFamily: fonts.sans,
                    fontSize: 18,
                    lineHeight: 1.4,
                  }}
                >
                  Because discovery reads only the immutable copy, newly written zeroes can never
                  cause a false chain reaction.
                </div>
              </div>
            )}

            {/* Beat 17..19: Space Overhead Critique */}
            {frame >= 1420 && (
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 6,
                  }}
                >
                  <span
                    style={{
                      color: theme.warn,
                      fontFamily: fonts.mono,
                      fontSize: 16,
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                    }}
                  >
                    SPACE COMPLEXITY BOTTLENECK
                  </span>
                  <span
                    style={{
                      padding: "2px 8px",
                      borderRadius: 6,
                      backgroundColor: "rgba(255, 107, 107, 0.2)",
                      color: theme.warn,
                      fontFamily: fonts.mono,
                      fontSize: 14,
                      fontWeight: 800,
                    }}
                  >
                    O(M × N) AUXILIARY SPACE
                  </span>
                </div>
                <div
                  style={{
                    color: theme.chalkText,
                    fontFamily: fonts.sans,
                    fontSize: 22,
                    fontWeight: 700,
                    lineHeight: 1.3,
                  }}
                >
                  We duplicated all 25 numbers in memory!
                </div>
                <div
                  style={{
                    marginTop: 8,
                    color: theme.pivot,
                    fontFamily: fonts.sans,
                    fontSize: 18,
                    fontWeight: 700,
                    lineHeight: 1.4,
                  }}
                >
                  Yet 22 out of 25 values (88%) are NEVER USED after detection. Only the 3 zero
                  coordinates actually drove mutations!
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* Full Center-Stage Hero: The Big Question Card (Beats 20-21: F1789+) */}
      {/* ----------------------------------------------------------------- */}
      {isQuestionPhase && (
        <div
          style={{
            position: "absolute",
            top: 200,
            left: 200,
            width: 1520,
            height: 480,
            opacity: questionFadeIn,
            transform: `scale(${questionScale})`,
            transformOrigin: "center center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 30,
          }}
        >
          {/* RoughBox Chalk Outline around Hero Card */}
          <div style={{ position: "absolute", top: 0, left: 0 }}>
            <RoughBox
              width={1520}
              height={480}
              startFrame={1820}
              durationInFrames={20}
              stroke={theme.pivot}
              strokeWidth={4}
            />
          </div>

          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "30px 40px",
              textAlign: "center",
            }}
          >
            {/* Header Tag */}
            <div
              style={{
                padding: "8px 24px",
                borderRadius: 24,
                backgroundColor: "rgba(255, 209, 102, 0.15)",
                border: `1.5px solid ${theme.pivot}`,
                color: theme.pivot,
                fontFamily: fonts.mono,
                fontSize: 18,
                fontWeight: 800,
                letterSpacing: "0.08em",
                marginBottom: 24,
              }}
            >
              CRITICAL MEMORY QUESTION
            </div>

            {/* Massive Chalk Question */}
            <div style={{ marginBottom: 28 }}>
              <ChalkText
                startFrame={1872}
                charFrames={1.0}
                fontSize={46}
                color={theme.chalkText}
              >
                What information do we truly need to remember?
              </ChalkText>
            </div>

            {/* Quiet Support: The 3 Zero Locations */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                marginBottom: 28,
              }}
            >
              <span
                style={{
                  fontFamily: fonts.sans,
                  fontSize: 22,
                  color: theme.chalkDim,
                }}
              >
                All that mattered from the 25 values were:
              </span>
              {ORIGINAL_ZEROES.map((z, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "8px 18px",
                    borderRadius: 12,
                    backgroundColor: "rgba(255, 209, 102, 0.2)",
                    border: `2px solid ${theme.pivot}`,
                    fontFamily: fonts.mono,
                    fontSize: 22,
                    fontWeight: 900,
                    color: theme.pivot,
                  }}
                >
                  Row {z.r}, Col {z.c} = 0
                </div>
              ))}
            </div>

            {/* Forward-Looking Pedagogical Subtitle */}
            <div
              style={{
                fontFamily: fonts.sans,
                fontSize: 22,
                color: theme.chalkText,
                maxWidth: 1100,
                lineHeight: 1.4,
              }}
            >
              Instead of copying the full matrix, can we record just the rows and columns that need
              zeroing?
            </div>

            <div
              style={{
                marginTop: 20,
                fontFamily: fonts.mono,
                fontSize: 16,
                fontWeight: 800,
                color: theme.good,
                letterSpacing: "0.05em",
              }}
            >
              ➔ NEXT: METHOD 2 — ROW & COLUMN MARKER ARRAYS (O(M + N) SPACE)
            </div>
          </div>
        </div>
      )}

      {/* ----------------------------------------------------------------- */}
      {/* Narration Audio Track & Synchronized Bottom Captions              */}
      {/* ----------------------------------------------------------------- */}
      <Audio src={staticFile("audio/013/04-copy-code.mp3")} />
      <Captions words={captionWords} />
    </div>
  );
};
