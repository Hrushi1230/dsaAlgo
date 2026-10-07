/**
 * Scene07MarkersCode.tsx — Scene 07 · Method 2 Code: 1D Marker Arrays
 * Question 013: Set Matrix Zeroes (LeetCode 73) · Pattern 01 — Arrays & Hashing
 *
 * Strict Compliance:
 * - plans/07-markers-code_FRAMEWISE_PLAN.md (all 26 anchors, 9-field schema)
 * - sync/07-markers-code.anchors.json (exact word-level frame anchors)
 * - Canonical @dsa/kit visual grammar: ChalkCodeEditorV2, RoughBox, ChalkText, Captions.
 * - Split-Stage Layout:
 *   - Left: ChalkCodeEditorV2 (W: 960, H: 640, X: 80, Y: 140..780)
 *   - Right: Live Matrix & Docked Rails Visualizer (W: 760, H: 640, X: 1080, Y: 140..780)
 * - Clearance: Bottom of stages at Y: 780, leaving 180px buffer above captions at Y: 960.
 * - 100% Remotion frame-derived determinism; zero CSS transitions.
 *
 * Duration: 2188 frames @ 30fps (72.920s)
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
import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme, fonts } from "../../../../kit/lib/theme";
import { ChalkCodeEditorV2, ChalkCodeLine } from "../../../../kit/components/ChalkCodeEditorV2";
import { RoughBox } from "../../../../kit/components/RoughBox";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import syncData from "../sync/07-markers-code.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

// Master Matrix Initial Values (5x5)
const ORIGINAL_MATRIX = [
  [1, 2, 0, 4, 5],
  [6, 7, 8, 9, 10],
  [0, 12, 13, 14, 15],
  [16, 17, 18, 0, 20],
  [21, 22, 23, 24, 25],
];

// ---------------------------------------------------------------------------
// Python Code Lines with Exact Reveal Timings (from sync/07-markers-code.anchors.json)
// ---------------------------------------------------------------------------
const CODE_LINES: ChalkCodeLine[] = [
  {
    num: 1,
    text: "def setZeroesMarkers(matrix: list[list[int]]) -> None:",
    indent: 0,
    startFrame: 0,
    endFrame: 15,
    tokens: [
      { text: "def ", color: theme.accent },
      { text: "setZeroesMarkers", color: theme.cyan },
      { text: "(matrix: list[list[int]]) -> None:", color: theme.chalkText },
    ],
  },
  {
    num: 2,
    text: "    m = len(matrix)",
    indent: 1,
    startFrame: 28,
    endFrame: 45,
    tokens: [
      { text: "m", color: theme.good },
      { text: " = ", color: theme.chalkText },
      { text: "len", color: theme.cyan },
      { text: "(matrix)", color: theme.chalkText },
    ],
  },
  {
    num: 3,
    text: "    n = len(matrix[0])",
    indent: 1,
    startFrame: 45,
    endFrame: 62,
    tokens: [
      { text: "n", color: theme.good },
      { text: " = ", color: theme.chalkText },
      { text: "len", color: theme.cyan },
      { text: "(matrix[0])", color: theme.chalkText },
    ],
  },
  {
    num: 4,
    text: "",
    indent: 0,
    startFrame: 73,
    endFrame: 73,
    tokens: [],
  },
  {
    num: 5,
    text: "    rowZero = [False] * m",
    indent: 1,
    startFrame: 73,
    endFrame: 160,
    tokens: [
      { text: "rowZero", color: theme.pivot },
      { text: " = [", color: theme.chalkText },
      { text: "False", color: theme.good },
      { text: "] * ", color: theme.chalkText },
      { text: "m", color: theme.good },
    ],
  },
  {
    num: 6,
    text: "    colZero = [False] * n",
    indent: 1,
    startFrame: 160,
    endFrame: 252,
    tokens: [
      { text: "colZero", color: theme.pivot },
      { text: " = [", color: theme.chalkText },
      { text: "False", color: theme.good },
      { text: "] * ", color: theme.chalkText },
      { text: "n", color: theme.good },
    ],
  },
  {
    num: 7,
    text: "",
    indent: 0,
    startFrame: 270,
    endFrame: 270,
    tokens: [],
  },
  {
    num: 8,
    text: "    # Pass 1: Discovery Scan (Record zeroes)",
    indent: 1,
    startFrame: 270,
    endFrame: 333,
    tokens: [
      { text: "# Pass 1: Discovery Scan (Record zeroes)", color: theme.cyan },
    ],
  },
  {
    num: 9,
    text: "    for r in range(m):",
    indent: 1,
    startFrame: 349,
    endFrame: 362,
    tokens: [
      { text: "for ", color: theme.accent },
      { text: "r", color: theme.good },
      { text: " in ", color: theme.accent },
      { text: "range", color: theme.cyan },
      { text: "(m):", color: theme.chalkText },
    ],
  },
  {
    num: 10,
    text: "        for c in range(n):",
    indent: 2,
    startFrame: 362,
    endFrame: 373,
    tokens: [
      { text: "for ", color: theme.accent },
      { text: "c", color: theme.good },
      { text: " in ", color: theme.accent },
      { text: "range", color: theme.cyan },
      { text: "(n):", color: theme.chalkText },
    ],
  },
  {
    num: 11,
    text: "            if matrix[r][c] == 0:",
    indent: 3,
    startFrame: 394,
    endFrame: 442,
    tokens: [
      { text: "if ", color: theme.accent },
      { text: "matrix[r][c]", color: theme.chalkText },
      { text: " == ", color: theme.accent },
      { text: "0", color: theme.pivot },
      { text: ":", color: theme.chalkText },
    ],
  },
  {
    num: 12,
    text: "                rowZero[r] = True",
    indent: 4,
    startFrame: 467,
    endFrame: 510,
    tokens: [
      { text: "rowZero[r]", color: theme.pivot },
      { text: " = ", color: theme.chalkText },
      { text: "True", color: theme.good },
    ],
  },
  {
    num: 13,
    text: "                colZero[c] = True",
    indent: 4,
    startFrame: 510,
    endFrame: 564,
    tokens: [
      { text: "colZero[c]", color: theme.pivot },
      { text: " = ", color: theme.chalkText },
      { text: "True", color: theme.good },
    ],
  },
  {
    num: 14,
    text: "",
    indent: 0,
    startFrame: 863,
    endFrame: 863,
    tokens: [],
  },
  {
    num: 15,
    text: "    # Pass 2: Guided Mutation (Zero from markers)",
    indent: 1,
    startFrame: 863,
    endFrame: 965,
    tokens: [
      { text: "# Pass 2: Guided Mutation (Zero from markers)", color: theme.good },
    ],
  },
  {
    num: 16,
    text: "    for r in range(m):",
    indent: 1,
    startFrame: 982,
    endFrame: 995,
    tokens: [
      { text: "for ", color: theme.accent },
      { text: "r", color: theme.good },
      { text: " in ", color: theme.accent },
      { text: "range", color: theme.cyan },
      { text: "(m):", color: theme.chalkText },
    ],
  },
  {
    num: 17,
    text: "        for c in range(n):",
    indent: 2,
    startFrame: 995,
    endFrame: 1012,
    tokens: [
      { text: "for ", color: theme.accent },
      { text: "c", color: theme.good },
      { text: " in ", color: theme.accent },
      { text: "range", color: theme.cyan },
      { text: "(n):", color: theme.chalkText },
    ],
  },
  {
    num: 18,
    text: "            if rowZero[r] or colZero[c]:",
    indent: 3,
    startFrame: 1026,
    endFrame: 1113,
    tokens: [
      { text: "if ", color: theme.accent },
      { text: "rowZero[r]", color: theme.pivot },
      { text: " or ", color: theme.accent },
      { text: "colZero[c]", color: theme.good },
      { text: ":", color: theme.chalkText },
    ],
  },
  {
    num: 19,
    text: "                matrix[r][c] = 0",
    indent: 4,
    startFrame: 1195,
    endFrame: 1262,
    tokens: [
      { text: "matrix[r][c]", color: theme.chalkText },
      { text: " = ", color: theme.chalkText },
      { text: "0", color: theme.pivot },
    ],
  },
];

// ---------------------------------------------------------------------------
// Spatial Coordinates for Live Right-Side Visualizer
// ---------------------------------------------------------------------------
const CELL_SIZE = 48;
const GAP = 6;
const PITCH = CELL_SIZE + GAP; // 54px

const MATRIX_X = 1240;
const MATRIX_Y = 260;

const ROW_RAIL_X = 1195;
const ROW_RAIL_Y = 260;
const ROW_SLOT_W = 32;
const ROW_SLOT_H = 48;

const COL_RAIL_X = 1240;
const COL_RAIL_Y = 215;
const COL_SLOT_W = 48;
const COL_SLOT_H = 32;

export const Scene07MarkersCode: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring for code editor
  const editorSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // Rails entrance
  const showRowRail = frame >= 73;
  const showColRail = frame >= 160;

  // Active line calculation for ChalkCodeEditorV2
  const activeLineNums = useMemo(() => {
    if (frame >= 0 && frame < 28) return [1];
    if (frame >= 28 && frame < 45) return [2];
    if (frame >= 45 && frame < 73) return [3];
    if (frame >= 73 && frame < 160) return [5];
    if (frame >= 160 && frame < 270) return [6];
    if (frame >= 270 && frame < 349) return [8];
    if (frame >= 349 && frame < 362) return [9];
    if (frame >= 362 && frame < 394) return [10];
    if (frame >= 394 && frame < 467) return [11];
    if (frame >= 467 && frame < 510) return [12];
    if (frame >= 510 && frame < 585) return [13];
    if (frame >= 585 && frame < 863) return [9, 10, 11, 12, 13];
    if (frame >= 863 && frame < 982) return [15];
    if (frame >= 982 && frame < 995) return [16];
    if (frame >= 995 && frame < 1026) return [17];
    if (frame >= 1026 && frame < 1195) return [18];
    if (frame >= 1195 && frame < 1320) return [19];
    if (frame >= 1320 && frame < 1451) return [8, 9, 10, 11, 12, 13];
    if (frame >= 1451 && frame < 1504) return [15, 16, 17, 18, 19];
    return [];
  }, [frame]);

  // Deterministic Scroll Position for Method 2 Code
  // Smoothly scrolls when Pass 2 types (Lines 15..19) at large 22px mobile font
  const scrollY = useMemo(() => {
    // Pass 1: Lines 1..13 (F0..F863) -> 0
    if (frame < 863) return 0;
    // Pass 2: Lines 15..19 (F863..F1320) -> smoothly scroll down by ~180px
    if (frame < 1320) {
      return interpolate(frame, [863, 940], [0, 180], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    }
    // Full Recap of both passes (F1320..F1504):
    if (frame < 1504) {
      return interpolate(frame, [1320, 1360], [180, 80], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    }
    // Teaser / Outro (F1504+): focus on Step 1 markers or summary
    return 80;
  }, [frame]);

  // Marker states
  const row0True = frame >= 467;
  const col2True = frame >= 510;
  const row2True = frame >= 564;
  const col0True = frame >= 564;
  const row3True = frame >= 564;
  const col3True = frame >= 564;

  const rowZeroState = [row0True, false, row2True, row3True, false];
  const colZeroState = [col0True, false, col2True, col3True, false];

  // Pass 2 cell zeroing
  const pass2Active = frame >= 1195;

  // Teaser highlight for Row 0 and Col 0 (F1953..F2188)
  const isTeaserPhase = frame >= 1953;

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        backgroundColor: theme.boardBg,
        position: "relative",
        overflow: "hidden",
        fontFamily: fonts.sans,
        color: theme.chalkText,
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      {/* ------------------------------------------------------------------- */}
      {/* Top Header Zone (Strictly Y: 42..108)                                */}
      {/* ------------------------------------------------------------------- */}
      <div
        style={{
          position: "absolute",
          top: 42,
          left: 80,
          right: 80,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 40,
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
            METHOD 2 CODE: 1D MARKER ARRAYS (PYTHON)
          </div>
        </div>

        <div
          style={{
            fontFamily: fonts.display,
            fontSize: 26,
            fontWeight: 900,
            color: theme.chalkText,
            letterSpacing: "0.04em",
          }}
        >
          TWO-PASS MARKER IMPLEMENTATION
        </div>

        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 16,
            fontWeight: 700,
            color: theme.chalkDim,
          }}
        >
          LEETCODE 73
        </div>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* MAIN SPLIT STAGE: Left Code Editor & Right Live Visualizer          */}
      {/* Bounds: Y: 115..895 (Height: 780px)                                 */}
      {/* ------------------------------------------------------------------- */}
      <div
        style={{
          position: "absolute",
          top: 115,
          left: 45,
          width: 1830,
          height: 780,
          display: "flex",
          justifyContent: "space-between",
          zIndex: 20,
        }}
      >
        {/* Left Side: Canonical ChalkCodeEditorV2 (W: 1100px, H: 780px) */}
        <div
          style={{
            width: 1100,
            height: 780,
            opacity: editorSpring,
            transform: `scale(${interpolate(editorSpring, [0, 1], [0.96, 1])})`,
          }}
        >
          <ChalkCodeEditorV2
            lines={CODE_LINES}
            activeLineNums={activeLineNums}
            title="set_matrix_zeroes_markers.py"
            language="PYTHON 3.11"
            width={1100}
            height={780}
            fontSize={22}
            lineHeight={38}
            indentWidth={26}
            scrollY={scrollY}
          />
        </div>

        {/* Right Side: Live Matrix & Docked Rails Support (W: 700px, H: 780px) */}
        <div
          style={{
            width: 700,
            height: 780,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Status Badge at Top of Visualizer */}
          <div
            style={{
              padding: "8px 20px",
              borderRadius: 14,
              backgroundColor: "rgba(10, 36, 25, 0.95)",
              border: `1.5px solid ${
                frame < 270
                  ? theme.cyan
                  : frame < 863
                  ? theme.pivot
                  : frame < 1504
                  ? theme.good
                  : isTeaserPhase
                  ? theme.accent
                  : theme.cyan
              }`,
              fontFamily: fonts.mono,
              fontSize: 15,
              fontWeight: 800,
              color:
                frame < 270
                  ? theme.cyan
                  : frame < 863
                  ? theme.pivot
                  : frame < 1504
                  ? theme.good
                  : isTeaserPhase
                  ? theme.accent
                  : theme.cyan,
              marginBottom: 16,
              letterSpacing: "0.04em",
            }}
          >
            {frame < 270
              ? "SETUP: 1D MARKER ARRAYS"
              : frame < 863
              ? "PASS 1: DISCOVERY (RECORD ONLY)"
              : frame < 1320
              ? "PASS 2: GUIDED MUTATION"
              : frame < 1834
              ? "COMPLEXITY ANALYSIS"
              : isTeaserPhase
              ? "✨ LOOK AT MATRIX BOUNDARY!"
              : "OPTIMAL STORAGE INQUIRY"}
          </div>

          {/* Container for Centered Visualizer */}
          <div
            style={{
              position: "relative",
              width: 320,
              height: 320,
              marginTop: 10,
              transform: isTeaserPhase ? "scale(1.08)" : "none",
            }}
          >
            {/* Column Indices & colZero Rail (Top) */}
            {showColRail && (
              <div
                style={{
                  position: "absolute",
                  left: 45,
                  top: 0,
                  display: "flex",
                  gap: GAP,
                  zIndex: 25,
                }}
              >
                {[0, 1, 2, 3, 4].map((c) => {
                  const isMarked = colZeroState[c];
                  return (
                    <div
                      key={`col-rail-${c}`}
                      style={{
                        width: COL_SLOT_W,
                        height: COL_SLOT_H,
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div style={{ position: "absolute", inset: 0 }}>
                        <RoughBox
                          width={COL_SLOT_W}
                          height={COL_SLOT_H}
                          stroke={isMarked ? theme.good : "rgba(248, 246, 240, 0.35)"}
                          strokeWidth={isMarked ? 2.5 : 1.5}
                          seed={500 + c}
                          fill={isMarked ? "rgba(6, 214, 160, 0.2)" : undefined}
                        />
                      </div>
                      <span
                        style={{
                          position: "relative",
                          zIndex: 2,
                          fontFamily: fonts.mono,
                          fontSize: 16,
                          fontWeight: 900,
                          color: isMarked ? theme.good : theme.chalkDim,
                        }}
                      >
                        {isMarked ? "T" : "F"}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Row Indices & rowZero Rail (Left) */}
            {showRowRail && (
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 45,
                  display: "flex",
                  flexDirection: "column",
                  gap: GAP,
                  zIndex: 25,
                }}
              >
                {[0, 1, 2, 3, 4].map((r) => {
                  const isMarked = rowZeroState[r];
                  return (
                    <div
                      key={`row-rail-${r}`}
                      style={{
                        width: ROW_SLOT_W,
                        height: ROW_SLOT_H,
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div style={{ position: "absolute", inset: 0 }}>
                        <RoughBox
                          width={ROW_SLOT_W}
                          height={ROW_SLOT_H}
                          stroke={isMarked ? theme.pivot : "rgba(248, 246, 240, 0.35)"}
                          strokeWidth={isMarked ? 2.5 : 1.5}
                          seed={600 + r}
                          fill={isMarked ? "rgba(255, 209, 102, 0.2)" : undefined}
                        />
                      </div>
                      <span
                        style={{
                          position: "relative",
                          zIndex: 2,
                          fontFamily: fonts.mono,
                          fontSize: 16,
                          fontWeight: 900,
                          color: isMarked ? theme.pivot : theme.chalkDim,
                        }}
                      >
                        {isMarked ? "T" : "F"}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}

            {/* 5x5 Matrix Grid */}
            <div
              style={{
                position: "absolute",
                left: 45,
                top: 45,
                width: 264,
                height: 264,
                display: "grid",
                gridTemplateColumns: `repeat(5, ${CELL_SIZE}px)`,
                gap: GAP,
                zIndex: 20,
              }}
            >
              {ORIGINAL_MATRIX.map((row, r) =>
                row.map((val, c) => {
                  const isOrigZero = val === 0;

                  // Zeroed in Pass 2
                  let currentVal = val;
                  if (pass2Active) {
                    if (r === 0 || r === 2 || r === 3 || c === 0 || c === 2 || c === 3) {
                      currentVal = 0;
                    }
                  }

                  // Spotlight boundary cells during teaser phase (F1953..F2188)
                  const isTeaserRow0 = isTeaserPhase && r === 0;
                  const isTeaserCol0 = isTeaserPhase && c === 0;
                  const isBoundaryTeaser = isTeaserRow0 || isTeaserCol0;

                  const strokeColor = isBoundaryTeaser
                    ? isTeaserRow0
                      ? theme.pivot
                      : theme.good
                    : isOrigZero
                    ? theme.pivot
                    : currentVal === 0 && pass2Active
                    ? theme.good
                    : "rgba(248, 246, 240, 0.3)";

                  const fillColor = isBoundaryTeaser
                    ? isTeaserRow0
                      ? "rgba(255, 209, 102, 0.28)"
                      : "rgba(6, 214, 160, 0.28)"
                    : isOrigZero
                    ? "rgba(255, 209, 102, 0.15)"
                    : currentVal === 0 && pass2Active
                    ? "rgba(6, 214, 160, 0.12)"
                    : undefined;

                  return (
                    <div
                      key={`grid-cell-${r}-${c}`}
                      style={{
                        width: CELL_SIZE,
                        height: CELL_SIZE,
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div style={{ position: "absolute", inset: 0 }}>
                        <RoughBox
                          width={CELL_SIZE}
                          height={CELL_SIZE}
                          stroke={strokeColor}
                          strokeWidth={isBoundaryTeaser ? 3 : isOrigZero ? 2.5 : 1.5}
                          seed={r * 10 + c}
                          fill={fillColor}
                        />
                      </div>
                      <span
                        style={{
                          position: "relative",
                          zIndex: 2,
                          fontFamily: fonts.mono,
                          fontSize: 18,
                          fontWeight: isBoundaryTeaser || isOrigZero ? 900 : 700,
                          color: isBoundaryTeaser
                            ? isTeaserRow0
                              ? theme.pivot
                              : theme.good
                            : isOrigZero
                            ? theme.pivot
                            : currentVal === 0 && pass2Active
                            ? theme.good
                            : theme.chalkText,
                        }}
                      >
                        {currentVal}
                      </span>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Pedagogical Callouts inside Visualizer Column (Y: 420..600) */}
          <div
            style={{
              marginTop: 36,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
            }}
          >
            {/* Lock badge in Pass 1 */}
            {frame >= 651 && frame < 863 && (
              <div
                style={{
                  padding: "10px 24px",
                  borderRadius: 14,
                  backgroundColor: "rgba(255, 107, 107, 0.15)",
                  border: `2px solid ${theme.warn}`,
                  fontFamily: fonts.sans,
                  fontSize: 18,
                  fontWeight: 800,
                  color: theme.chalkText,
                  textAlign: "center",
                }}
              >
                🔒 MATRIX IS IMMUTABLE IN PASS 1
                <div style={{ fontSize: 14, color: theme.chalkDim, marginTop: 4 }}>
                  Only recording info to marker arrays
                </div>
              </div>
            )}

            {/* Invariant badge */}
            {frame >= 1320 && frame < 1504 && (
              <div
                style={{
                  padding: "10px 24px",
                  borderRadius: 14,
                  backgroundColor: "rgba(10, 36, 25, 0.95)",
                  border: `2px solid ${theme.good}`,
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <span style={{ fontSize: 20 }}>⚡</span>
                <span style={{ fontFamily: fonts.mono, fontSize: 17, fontWeight: 800, color: theme.good }}>
                  1️⃣ REMEMBER (Pass 1) ➔ 2️⃣ MUTATE (Pass 2)
                </span>
              </div>
            )}

            {/* Complexity Cards */}
            {frame >= 1504 && frame < 1834 && (
              <div style={{ display: "flex", gap: 16 }}>
                <div
                  style={{
                    padding: "8px 18px",
                    borderRadius: 12,
                    backgroundColor: "rgba(6, 214, 160, 0.16)",
                    border: `1.5px solid ${theme.good}`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: theme.good }}>
                    TIME COMPLEXITY
                  </span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 900, color: theme.good }}>
                    O(M × N)
                  </span>
                </div>

                {frame >= 1617 && (
                  <div
                    style={{
                      padding: "8px 18px",
                      borderRadius: 12,
                      backgroundColor: "rgba(255, 209, 102, 0.16)",
                      border: `1.5px solid ${theme.pivot}`,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: theme.pivot }}>
                      SPACE COMPLEXITY
                    </span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 900, color: theme.pivot }}>
                      O(M + N)
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Question Banner */}
            {frame >= 1834 && frame < 1953 && (
              <div
                style={{
                  padding: "10px 24px",
                  borderRadius: 14,
                  backgroundColor: "rgba(255, 209, 102, 0.16)",
                  border: `2px solid ${theme.pivot}`,
                  fontFamily: fonts.sans,
                  fontSize: 18,
                  fontWeight: 800,
                  color: theme.pivot,
                  textAlign: "center",
                }}
              >
                ❓ Can we remove even these two marker arrays?
              </div>
            )}

            {/* Teaser for Method 3 Optimal */}
            {isTeaserPhase && (
              <div
                style={{
                  padding: "10px 24px",
                  borderRadius: 14,
                  backgroundColor: "rgba(10, 36, 25, 0.95)",
                  border: `2px solid ${theme.accent}`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 900, color: theme.accent }}>
                  💡 ROW 0 & COL 0 ARE ALREADY THERE!
                </div>
                <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkText }}>
                  Row 0 has N slots · Col 0 has M slots ➔ O(1) Space!
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* Audio & Word-Synchronized Captions                                  */}
      {/* ------------------------------------------------------------------- */}
      <Audio src={staticFile("audio/013/07-markers-code.mp3")} />
      <Captions words={captionWords} />
    </div>
  );
};
