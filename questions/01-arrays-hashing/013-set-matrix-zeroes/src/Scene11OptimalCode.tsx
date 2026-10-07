/**
 * Scene11OptimalCode.tsx — Scene 11 · Method 3 Code: In-Place Boundary Markers
 * Question 013: Set Matrix Zeroes (LeetCode 73) · Pattern 01 — Arrays & Hashing
 *
 * Strict Compliance:
 * - Large, bold, mobile-first legibility (18px code font, 30px line height, 54px matrix cells)
 * - Deterministic vertical auto-scrolling keeping active lines centered
 * - Split-Stage Layout extended to Y: 885, eliminating wasted void:
 *   - Left: ChalkCodeEditorV2 (W: 1040, H: 755, X: 60, Y: 130..885)
 *   - Right: Live Matrix & Pipeline Visualizer (W: 740, H: 755, X: 1120, Y: 130..885)
 * - Clearance: Bottom of stages at Y: 885, leaving 75px buffer above captions at Y: 960.
 * - 100% Remotion frame-derived determinism; zero CSS transitions.
 *
 * Duration: 3241 frames @ 30fps (108.020s)
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
import syncData from "../sync/11-optimal-code.json";

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
// Python Code Lines with Exact Reveal Timings (from sync/11-optimal-code.anchors.json)
// ---------------------------------------------------------------------------
const CODE_LINES: ChalkCodeLine[] = [
  {
    num: 1,
    text: "def setZeroes(matrix: list[list[int]]) -> None:",
    indent: 0,
    startFrame: 0,
    endFrame: 81,
    tokens: [
      { text: "def ", color: theme.accent },
      { text: "setZeroes", color: theme.cyan },
      { text: "(matrix: list[list[int]]) -> None:", color: theme.chalkText },
    ],
  },
  {
    num: 2,
    text: "    m = len(matrix)",
    indent: 1,
    startFrame: 101,
    endFrame: 194,
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
    startFrame: 194,
    endFrame: 266,
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
    startFrame: 277,
    endFrame: 277,
    tokens: [],
  },
  {
    num: 5,
    text: "    # Boundary state booleans",
    indent: 1,
    startFrame: 277,
    endFrame: 325,
    tokens: [
      { text: "# Boundary state booleans", color: theme.chalkDim },
    ],
  },
  {
    num: 6,
    text: "    firstRowZero = False",
    indent: 1,
    startFrame: 344,
    endFrame: 417,
    tokens: [
      { text: "firstRowZero", color: theme.pivot },
      { text: " = ", color: theme.chalkText },
      { text: "False", color: theme.warn },
    ],
  },
  {
    num: 7,
    text: "    firstColZero = False",
    indent: 1,
    startFrame: 438,
    endFrame: 494,
    tokens: [
      { text: "firstColZero", color: theme.pivot },
      { text: " = ", color: theme.chalkText },
      { text: "False", color: theme.warn },
    ],
  },
  {
    num: 8,
    text: "",
    indent: 0,
    startFrame: 518,
    endFrame: 518,
    tokens: [],
  },
  {
    num: 9,
    text: "    # 1. Save boundary state",
    indent: 1,
    startFrame: 518,
    endFrame: 664,
    tokens: [
      { text: "# 1. Save boundary state", color: theme.cyan },
    ],
  },
  {
    num: 10,
    text: "    for c in range(n):",
    indent: 1,
    startFrame: 673,
    endFrame: 705,
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
    text: "        if matrix[0][c] == 0:",
    indent: 2,
    startFrame: 720,
    endFrame: 774,
    tokens: [
      { text: "if ", color: theme.accent },
      { text: "matrix[0][c]", color: theme.chalkText },
      { text: " == ", color: theme.accent },
      { text: "0", color: theme.pivot },
      { text: ":", color: theme.chalkText },
    ],
  },
  {
    num: 12,
    text: "            firstRowZero = True",
    indent: 3,
    startFrame: 782,
    endFrame: 845,
    tokens: [
      { text: "firstRowZero", color: theme.pivot },
      { text: " = ", color: theme.chalkText },
      { text: "True", color: theme.good },
    ],
  },
  {
    num: 13,
    text: "",
    indent: 0,
    startFrame: 845,
    endFrame: 845,
    tokens: [],
  },
  {
    num: 14,
    text: "    for r in range(m):",
    indent: 1,
    startFrame: 845,
    endFrame: 902,
    tokens: [
      { text: "for ", color: theme.accent },
      { text: "r", color: theme.good },
      { text: " in ", color: theme.accent },
      { text: "range", color: theme.cyan },
      { text: "(m):", color: theme.chalkText },
    ],
  },
  {
    num: 15,
    text: "        if matrix[r][0] == 0:",
    indent: 2,
    startFrame: 917,
    endFrame: 957,
    tokens: [
      { text: "if ", color: theme.accent },
      { text: "matrix[r][0]", color: theme.chalkText },
      { text: " == ", color: theme.accent },
      { text: "0", color: theme.pivot },
      { text: ":", color: theme.chalkText },
    ],
  },
  {
    num: 16,
    text: "            firstColZero = True",
    indent: 3,
    startFrame: 967,
    endFrame: 1023,
    tokens: [
      { text: "firstColZero", color: theme.pivot },
      { text: " = ", color: theme.chalkText },
      { text: "True", color: theme.good },
    ],
  },
  {
    num: 17,
    text: "",
    indent: 0,
    startFrame: 1118,
    endFrame: 1118,
    tokens: [],
  },
  {
    num: 18,
    text: "    # 2. Mark interior in boundary",
    indent: 1,
    startFrame: 1118,
    endFrame: 1173,
    tokens: [
      { text: "# 2. Mark interior in boundary", color: theme.cyan },
    ],
  },
  {
    num: 19,
    text: "    for r in range(1, m):",
    indent: 1,
    startFrame: 1193,
    endFrame: 1227,
    tokens: [
      { text: "for ", color: theme.accent },
      { text: "r", color: theme.good },
      { text: " in ", color: theme.accent },
      { text: "range", color: theme.cyan },
      { text: "(", color: theme.chalkText },
      { text: "1", color: theme.pivot },
      { text: ", m):", color: theme.chalkText },
    ],
  },
  {
    num: 20,
    text: "        for c in range(1, n):",
    indent: 2,
    startFrame: 1227,
    endFrame: 1286,
    tokens: [
      { text: "for ", color: theme.accent },
      { text: "c", color: theme.good },
      { text: " in ", color: theme.accent },
      { text: "range", color: theme.cyan },
      { text: "(", color: theme.chalkText },
      { text: "1", color: theme.pivot },
      { text: ", n):", color: theme.chalkText },
    ],
  },
  {
    num: 21,
    text: "            if matrix[r][c] == 0:",
    indent: 3,
    startFrame: 1301,
    endFrame: 1367,
    tokens: [
      { text: "if ", color: theme.accent },
      { text: "matrix[r][c]", color: theme.chalkText },
      { text: " == ", color: theme.accent },
      { text: "0", color: theme.pivot },
      { text: ":", color: theme.chalkText },
    ],
  },
  {
    num: 22,
    text: "                matrix[r][0] = 0",
    indent: 4,
    startFrame: 1380,
    endFrame: 1451,
    tokens: [
      { text: "matrix[r][0]", color: theme.cyan },
      { text: " = ", color: theme.chalkText },
      { text: "0", color: theme.pivot },
    ],
  },
  {
    num: 23,
    text: "                matrix[0][c] = 0",
    indent: 4,
    startFrame: 1523,
    endFrame: 1600,
    tokens: [
      { text: "matrix[0][c]", color: theme.pivot },
      { text: " = ", color: theme.chalkText },
      { text: "0", color: theme.pivot },
    ],
  },
  {
    num: 24,
    text: "",
    indent: 0,
    startFrame: 1816,
    endFrame: 1816,
    tokens: [],
  },
  {
    num: 25,
    text: "    # 3. Apply markers to interior",
    indent: 1,
    startFrame: 1816,
    endFrame: 1850,
    tokens: [
      { text: "# 3. Apply markers to interior", color: theme.good },
    ],
  },
  {
    num: 26,
    text: "    for r in range(1, m):",
    indent: 1,
    startFrame: 1863,
    endFrame: 1922,
    tokens: [
      { text: "for ", color: theme.accent },
      { text: "r", color: theme.good },
      { text: " in ", color: theme.accent },
      { text: "range", color: theme.cyan },
      { text: "(1, m):", color: theme.chalkText },
    ],
  },
  {
    num: 27,
    text: "        for c in range(1, n):",
    indent: 2,
    startFrame: 1863,
    endFrame: 1922,
    tokens: [
      { text: "for ", color: theme.accent },
      { text: "c", color: theme.good },
      { text: " in ", color: theme.accent },
      { text: "range", color: theme.cyan },
      { text: "(1, n):", color: theme.chalkText },
    ],
  },
  {
    num: 28,
    text: "            if matrix[r][0] == 0 or matrix[0][c] == 0:",
    indent: 3,
    startFrame: 1984,
    endFrame: 2117,
    tokens: [
      { text: "if ", color: theme.accent },
      { text: "matrix[r][0]", color: theme.cyan },
      { text: " == 0 ", color: theme.chalkText },
      { text: "or ", color: theme.accent },
      { text: "matrix[0][c]", color: theme.pivot },
      { text: " == 0:", color: theme.chalkText },
    ],
  },
  {
    num: 29,
    text: "                matrix[r][c] = 0",
    indent: 4,
    startFrame: 2134,
    endFrame: 2200,
    tokens: [
      { text: "matrix[r][c]", color: theme.good },
      { text: " = ", color: theme.chalkText },
      { text: "0", color: theme.pivot },
    ],
  },
  {
    num: 30,
    text: "",
    indent: 0,
    startFrame: 2309,
    endFrame: 2309,
    tokens: [],
  },
  {
    num: 31,
    text: "    # 4. Finalize boundary",
    indent: 1,
    startFrame: 2309,
    endFrame: 2350,
    tokens: [
      { text: "# 4. Finalize boundary", color: theme.accent },
    ],
  },
  {
    num: 32,
    text: "    if firstRowZero:",
    indent: 1,
    startFrame: 2368,
    endFrame: 2416,
    tokens: [
      { text: "if ", color: theme.accent },
      { text: "firstRowZero", color: theme.pivot },
      { text: ":", color: theme.chalkText },
    ],
  },
  {
    num: 33,
    text: "        for c in range(n):",
    indent: 2,
    startFrame: 2429,
    endFrame: 2509,
    tokens: [
      { text: "for ", color: theme.accent },
      { text: "c", color: theme.good },
      { text: " in ", color: theme.accent },
      { text: "range", color: theme.cyan },
      { text: "(n):", color: theme.chalkText },
    ],
  },
  {
    num: 34,
    text: "            matrix[0][c] = 0",
    indent: 3,
    startFrame: 2429,
    endFrame: 2509,
    tokens: [
      { text: "matrix[0][c]", color: theme.good },
      { text: " = ", color: theme.chalkText },
      { text: "0", color: theme.pivot },
    ],
  },
  {
    num: 35,
    text: "    if firstColZero:",
    indent: 1,
    startFrame: 2509,
    endFrame: 2572,
    tokens: [
      { text: "if ", color: theme.accent },
      { text: "firstColZero", color: theme.pivot },
      { text: ":", color: theme.chalkText },
    ],
  },
  {
    num: 36,
    text: "        for r in range(m):",
    indent: 2,
    startFrame: 2584,
    endFrame: 2647,
    tokens: [
      { text: "for ", color: theme.accent },
      { text: "r", color: theme.good },
      { text: " in ", color: theme.accent },
      { text: "range", color: theme.cyan },
      { text: "(m):", color: theme.chalkText },
    ],
  },
  {
    num: 37,
    text: "            matrix[r][0] = 0",
    indent: 3,
    startFrame: 2584,
    endFrame: 2647,
    tokens: [
      { text: "matrix[r][0]", color: theme.good },
      { text: " = ", color: theme.chalkText },
      { text: "0", color: theme.pivot },
    ],
  },
];

export const Scene11OptimalCode: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // -------------------------------------------------------------------------
  // Deterministic Scroll Position Calculation
  // Keeps active code lines comfortably centered in the large 780px editor
  // -------------------------------------------------------------------------
  const scrollY = useMemo(() => {
    // During Outro Recap (F2762..F3073)
    if (frame >= 2800 && frame < 2848) {
      // Step 1: Save History (Lines 5..16) -> Scroll to top
      return interpolate(frame, [2800, 2815], [560, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    }
    if (frame >= 2874 && frame < 2906) {
      // Step 2: Mark Interior (Lines 18..23)
      return interpolate(frame, [2874, 2885], [0, 260], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    }
    if (frame >= 2935 && frame < 2974) {
      // Step 3: Apply Markers (Lines 25..29)
      return interpolate(frame, [2935, 2948], [260, 560], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    }
    if (frame >= 2991 && frame < 3073) {
      // Step 4: Finalize Boundary (Lines 31..37) -> Full view of lines 31..37
      return interpolate(frame, [2991, 3005], [560, 880], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    }
    if (frame >= 3073) {
      // Order Warning on Line 31 (centered view of Step 4)
      return 800;
    }

    // Standard progressive typing scroll
    // Lines 1..16 (F0..F1118): all fit easily in viewport without scroll
    if (frame < 1118) return 0;

    // Step 2 (F1118..F1816): smoothly scroll down to focus lines 18..23
    if (frame < 1816) {
      return interpolate(frame, [1118, 1180], [0, 260], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    }

    // Step 3 (F1816..F2309): smoothly scroll down to focus lines 25..29
    if (frame < 2309) {
      return interpolate(frame, [1816, 1870], [260, 560], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    }

    // Step 4 (F2309..F2762):
    // Lines 31..34 type during F2309..F2509 (scroll to 740)
    // Lines 35..37 type during F2509..F2647 (scroll to 880 to fully show line 37)
    if (frame < 2509) {
      return interpolate(frame, [2309, 2360], [560, 740], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    }
    return interpolate(frame, [2509, 2560], [740, 880], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  }, [frame]);

  // -------------------------------------------------------------------------
  // Dynamic Active Lines Calculation
  // -------------------------------------------------------------------------
  const activeLineNums = useMemo(() => {
    // During Outro order recap (F2762..F3038)
    if (frame >= 2800 && frame < 2848) {
      // Step 1: Save Boundary
      return [5, 6, 7, 9, 10, 11, 12, 14, 15, 16];
    }
    if (frame >= 2874 && frame < 2906) {
      // Step 2: Mark Interior
      return [18, 19, 20, 21, 22, 23];
    }
    if (frame >= 2935 && frame < 2974) {
      // Step 3: Apply Markers
      return [25, 26, 27, 28, 29];
    }
    if (frame >= 2991 && frame < 3038) {
      // Step 4: Finalize Boundary
      return [31, 32, 33, 34, 35, 36, 37];
    }
    if (frame >= 2666 && frame < 2762) {
      // Complete solution celebration
      return [31, 32, 33, 34, 35, 36, 37];
    }

    // Standard progressive typing line highlighting
    const active = CODE_LINES.find(
      (l) => frame >= l.startFrame && frame <= l.endFrame + 15 && l.text !== ""
    );
    return active ? [active.num] : [];
  }, [frame]);

  // -------------------------------------------------------------------------
  // Hot Line Highlight
  // -------------------------------------------------------------------------
  const hotLineNum = useMemo(() => {
    if (frame >= 1193 && frame <= 1286) return 19; // range(1, m) crucial boundary exclusion
    if (frame >= 3073 && frame <= 3241) return 31; // order change danger
    return undefined;
  }, [frame]);

  const hotLineTag = useMemo(() => {
    if (frame >= 1193 && frame <= 1286) return "START AT 1 (EXCLUDE BOUNDARY)";
    if (frame >= 3073 && frame <= 3241) return "ORDER MATTERS!";
    return "KEY STEP";
  }, [frame]);

  // -------------------------------------------------------------------------
  // Algorithm State Computation (100% Deterministic & Pure)
  // -------------------------------------------------------------------------
  // Flag states
  const firstRowZero = frame >= 782; // Discovered zero at (0, 2)
  const firstColZero = frame >= 967; // Discovered zero at (2, 0)
  const flagsVisible = frame >= 277;

  // Scan beams during Step 1
  const isRowScanning = frame >= 673 && frame < 845;
  const isColScanning = frame >= 845 && frame < 1040;
  const isProtectedPhase = frame >= 1040 && frame < 1118;

  // Interior marking states (Step 2)
  const isInteriorScanPhase = frame >= 1118 && frame < 1816;
  const isZero33Discovered = frame >= 1301;
  const isRowMarkedAt30 = frame >= 1420; // matrix[3][0] = 0
  const isColMarkedAt03 = frame >= 1560; // matrix[0][3] = 0
  const isMarkersLockedPhase = frame >= 1646 && frame < 1816;

  // Marker application states (Step 3)
  const isApplyPhase = frame >= 1816 && frame < 2309;
  const isInteriorZeroed = frame >= 2134; // matrix[r][c] = 0 applied
  const isInteriorFinalized = frame >= 2219 && frame < 2309;

  // Boundary finalization states (Step 4)
  const isBoundaryOnlyRemaining = frame >= 2309 && frame < 2368;
  const isRow0Finalized = frame >= 2470;
  const isCol0Finalized = frame >= 2610;

  // Outro phases
  const isSolvedComplete = frame >= 2666 && frame < 2762;
  const isOrderRecap = frame >= 2762 && frame < 3073;
  const isOrderWarning = frame >= 3073;

  // Cell values matrix
  const matrixValues = useMemo(() => {
    // Clone original
    const mat = ORIGINAL_MATRIX.map((row) => [...row]);

    // 1. Marker writes at Step 2
    if (isRowMarkedAt30) {
      mat[3][0] = 0; // 16 -> 0
    }
    if (isColMarkedAt03) {
      mat[0][3] = 0; // 4 -> 0
    }

    // 2. Interior mutation at Step 3 (F2134 onwards)
    if (isInteriorZeroed) {
      // Row 2 interior (marked by (2,0)==0)
      mat[2][1] = 0;
      mat[2][2] = 0;
      mat[2][3] = 0;
      mat[2][4] = 0;

      // Row 3 interior (marked by (3,0)==0)
      mat[3][1] = 0;
      mat[3][2] = 0;
      mat[3][3] = 0;
      mat[3][4] = 0;

      // Col 2 interior (marked by (0,2)==0)
      mat[1][2] = 0;
      mat[4][2] = 0;

      // Col 3 interior (marked by (0,3)==0)
      mat[1][3] = 0;
      mat[4][3] = 0;
    }

    // 3. Boundary finalization at Step 4
    if (isRow0Finalized) {
      for (let c = 0; c < 5; c++) mat[0][c] = 0;
    }
    if (isCol0Finalized) {
      for (let r = 0; r < 5; r++) mat[r][0] = 0;
    }

    return mat;
  }, [isRowMarkedAt30, isColMarkedAt03, isInteriorZeroed, isRow0Finalized, isCol0Finalized]);

  // Phase Title text for Right Stage
  const phaseTitle = useMemo(() => {
    if (frame < 518) return "SETUP & DIMENSIONS";
    if (frame < 1118) return "STEP 1: SAVE BOUNDARY STATE";
    if (frame < 1816) return "STEP 2: MARK INTERIOR IN BOUNDARY";
    if (frame < 2309) return "STEP 3: APPLY MARKERS TO INTERIOR";
    if (frame < 2666) return "STEP 4: FINALIZE BOUNDARY";
    if (frame < 2762) return "COMPLETE OPTIMAL SOLUTION";
    if (frame < 3073) return "FOUR-STEP ORDER INVARIANT";
    return "CAUTION: ORDER DEPENDENCE";
  }, [frame]);

  const phaseColor = useMemo(() => {
    if (frame < 518) return theme.cyan;
    if (frame < 1118) return theme.pivot;
    if (frame < 1816) return theme.cyan;
    if (frame < 2309) return theme.good;
    if (frame < 2666) return theme.accent;
    if (frame < 2762) return theme.good;
    if (frame < 3073) return theme.cyan;
    return theme.warn;
  }, [frame]);

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

      {/* Audio Playback */}
      <Audio src={staticFile("audio/013/scence-11.mp3")} />

      {/* ----------------------------------------------------------------- */}
      {/* Top Header Bar (Y: 42..108)                                        */}
      {/* ----------------------------------------------------------------- */}
      <div
        style={{
          position: "absolute",
          top: 42,
          left: 60,
          right: 60,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              padding: "6px 18px",
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
              padding: "6px 18px",
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
            METHOD 3 CODE: IN-PLACE BOUNDARY MARKERS (PYTHON)
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
              padding: "4px 14px",
              borderRadius: 14,
              backgroundColor: "rgba(6, 214, 160, 0.15)",
              color: theme.good,
              fontFamily: fonts.mono,
              fontSize: 14,
              fontWeight: 800,
            }}
          >
            OPTIMAL O(1) SPACE
          </span>
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* ----------------------------------------------------------------- */}
      {/* Main Split-Stage Area (Y: 115..895, Total Height: 780px)          */}
      {/* Left Stage: ChalkCodeEditorV2 (W: 1140, H: 780, X: 45)            */}
      {/* Right Stage: Live Matrix & Pipeline Visualizer (W: 660, H: 780, X: 1215) */}
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
          alignItems: "stretch",
          zIndex: 10,
        }}
      >
        {/* Left Side: Canonical ChalkCodeEditorV2 with Large 22px Code & Smooth Auto-Scroll */}
        <div style={{ width: 1140, height: 780 }}>
          <ChalkCodeEditorV2
            lines={CODE_LINES}
            activeLineNums={activeLineNums}
            hotLineNum={hotLineNum}
            hotLineTag={hotLineTag}
            title="set_matrix_zeroes_optimal.py"
            language="PYTHON 3.11"
            width={1140}
            height={780}
            fontSize={22}
            lineHeight={38}
            indentWidth={32}
            scrollY={scrollY}
          />
        </div>

        {/* Right Side: Live Matrix Proof & Pedagogical Visualizer (W: 660, H: 780) */}
        <div
          style={{
            width: 660,
            height: 780,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 12,
            position: "relative",
          }}
        >
          {/* Phase Badge */}
          <div
            style={{
              padding: "6px 20px",
              borderRadius: 14,
              backgroundColor: "rgba(10, 36, 25, 0.95)",
              border: `2px solid ${phaseColor}`,
              fontFamily: fonts.mono,
              fontSize: 14,
              fontWeight: 800,
              color: phaseColor,
              letterSpacing: "0.05em",
              boxShadow: `0 0 20px ${phaseColor}44`,
            }}
          >
            {phaseTitle}
          </div>

          {/* Indicators Row: Dimension pills & Boolean Flags */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              minHeight: 40,
            }}
          >
            {/* Dimension Pills */}
            <div
              style={{
                padding: "5px 12px",
                borderRadius: 10,
                backgroundColor: "rgba(248, 246, 240, 0.08)",
                border: "1px solid rgba(248, 246, 240, 0.25)",
                fontFamily: fonts.mono,
                fontSize: 13,
                fontWeight: 700,
                color: theme.chalkText,
              }}
            >
              M = 5 rows · N = 5 cols
            </div>

            {/* Boolean Flags Panel */}
            {flagsVisible && (
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                {/* firstRowZero */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "5px 12px",
                    borderRadius: 10,
                    backgroundColor: firstRowZero
                      ? "rgba(6, 214, 160, 0.2)"
                      : "rgba(248, 246, 240, 0.06)",
                    border: `1.5px solid ${firstRowZero ? theme.good : "rgba(248, 246, 240, 0.3)"}`,
                    boxShadow: firstRowZero ? `0 0 16px ${theme.good}66` : "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 12,
                      fontWeight: 700,
                      color: theme.chalkDim,
                    }}
                  >
                    firstRowZero:
                  </span>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 13,
                      fontWeight: 900,
                      color: firstRowZero ? theme.good : theme.warn,
                    }}
                  >
                    {firstRowZero ? "True" : "False"}
                  </span>
                  {firstRowZero && <span style={{ fontSize: 13, color: theme.good }}>✓</span>}
                </div>

                {/* firstColZero */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "5px 12px",
                    borderRadius: 10,
                    backgroundColor: firstColZero
                      ? "rgba(6, 214, 160, 0.2)"
                      : "rgba(248, 246, 240, 0.06)",
                    border: `1.5px solid ${firstColZero ? theme.good : "rgba(248, 246, 240, 0.3)"}`,
                    boxShadow: firstColZero ? `0 0 16px ${theme.good}66` : "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 12,
                      fontWeight: 700,
                      color: theme.chalkDim,
                    }}
                  >
                    firstColZero:
                  </span>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 13,
                      fontWeight: 900,
                      color: firstColZero ? theme.good : theme.warn,
                    }}
                  >
                    {firstColZero ? "True" : "False"}
                  </span>
                  {firstColZero && <span style={{ fontSize: 13, color: theme.good }}>✓</span>}
                </div>
              </div>
            )}
          </div>

          {/* Matrix Visualizer Area (Large 56px Cells) */}
          <div
            style={{
              position: "relative",
              width: 360,
              height: 350,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 2,
            }}
          >
            {/* Column Indices Header */}
            <div
              style={{
                display: "flex",
                gap: 7,
                marginLeft: 32, // Offset for row index label
                marginBottom: 6,
              }}
            >
              {[0, 1, 2, 3, 4].map((c) => (
                <div
                  key={`col-idx-${c}`}
                  style={{
                    width: 56,
                    textAlign: "center",
                    fontFamily: fonts.mono,
                    fontSize: 14,
                    fontWeight: 700,
                    color: c === 0 ? theme.pivot : theme.chalkDim,
                  }}
                >
                  c{c}
                </div>
              ))}
            </div>

            {/* Matrix 5 Rows with Row Indices */}
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {[0, 1, 2, 3, 4].map((r) => (
                <div key={`row-${r}`} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  {/* Row index label */}
                  <span
                    style={{
                      width: 25,
                      textAlign: "right",
                      fontFamily: fonts.mono,
                      fontSize: 14,
                      fontWeight: 700,
                      color: r === 0 ? theme.cyan : theme.chalkDim,
                    }}
                  >
                    r{r}
                  </span>

                  {/* 5 Cells in this row */}
                  {[0, 1, 2, 3, 4].map((c) => {
                    const val = matrixValues[r][c];
                    const isBoundary = r === 0 || c === 0;

                    // Highlighting states
                    const isRowScanningNow = isRowScanning && r === 0;
                    const isColScanningNow = isColScanning && c === 0;
                    const isZeroFoundNow = (isRowScanning && r === 0 && c === 2) || (isColScanning && r === 2 && c === 0);
                    const isMarkerTarget = (isRowMarkedAt30 && r === 3 && c === 0) || (isColMarkedAt03 && r === 0 && c === 3);
                    const isInteriorZeroHighlight = isInteriorZeroed && !isBoundary && val === 0;

                    // Stroke and Fill computation
                    let strokeColor = "rgba(248, 246, 240, 0.35)";
                    let fillColor: string | undefined = undefined;
                    let textColor: string = theme.chalkText;

                    if (isZeroFoundNow) {
                      strokeColor = theme.pivot;
                      fillColor = "rgba(255, 209, 102, 0.35)";
                      textColor = theme.pivot;
                    } else if (isRowScanningNow) {
                      strokeColor = theme.pivot;
                      fillColor = "rgba(255, 209, 102, 0.15)";
                    } else if (isColScanningNow) {
                      strokeColor = theme.cyan;
                      fillColor = "rgba(110, 231, 183, 0.15)";
                    } else if (isMarkerTarget) {
                      strokeColor = theme.good;
                      fillColor = "rgba(6, 214, 160, 0.28)";
                      textColor = theme.good;
                    } else if (isMarkersLockedPhase && isBoundary) {
                      strokeColor = r === 0 ? theme.pivot : theme.cyan;
                      fillColor = r === 0 ? "rgba(255, 209, 102, 0.18)" : "rgba(110, 231, 183, 0.18)";
                    } else if (isInteriorZeroHighlight) {
                      strokeColor = theme.good;
                      fillColor = "rgba(6, 214, 160, 0.22)";
                      textColor = theme.good;
                    } else if (isSolvedComplete) {
                      strokeColor = val === 0 ? theme.good : "rgba(248, 246, 240, 0.4)";
                      fillColor = val === 0 ? "rgba(6, 214, 160, 0.2)" : undefined;
                      textColor = val === 0 ? theme.good : theme.chalkText;
                    }

                    return (
                      <div
                        key={`cell-${r}-${c}`}
                        style={{
                          width: 56,
                          height: 56,
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {/* RoughBox container strictly inset 0 to guarantee perfect centering */}
                        <div style={{ position: "absolute", inset: 0 }}>
                          <RoughBox
                            width={56}
                            height={56}
                            stroke={strokeColor}
                            strokeWidth={isZeroFoundNow || isMarkerTarget ? 2.5 : 1.5}
                            seed={500 + r * 5 + c}
                            fill={fillColor}
                          />
                        </div>

                        {/* Cell Value strictly centered with large 21px font */}
                        <span
                          style={{
                            position: "relative",
                            zIndex: 2,
                            fontFamily: fonts.mono,
                            fontSize: 21,
                            fontWeight: isBoundary || val === 0 ? 900 : 700,
                            color: textColor,
                          }}
                        >
                          {val}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Inner 4x4 Bracket Label during Phase 2 */}
            {isInteriorScanPhase && (
              <div
                style={{
                  position: "absolute",
                  bottom: -26,
                  fontFamily: fonts.mono,
                  fontSize: 13,
                  fontWeight: 800,
                  color: theme.cyan,
                  letterSpacing: "0.04em",
                }}
              >
                INNER 4×4: range(1, m) × range(1, n)
              </div>
            )}
          </div>

          {/* Dynamic Pedagogical Callouts & Outro Cards (Y: 480..780) */}
          <div
            style={{
              width: "100%",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Step 1 Scan Info (F0..F1040) */}
            {frame < 1040 && (
              <div
                style={{
                  padding: "12px 20px",
                  borderRadius: 14,
                  backgroundColor: "rgba(10, 36, 25, 0.95)",
                  border: `1.5px solid rgba(248, 246, 240, 0.25)`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  alignItems: "center",
                  width: "92%",
                }}
              >
                <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: theme.good }}>
                  STEP 1: SCAN ORIGINAL BOUNDARIES
                </div>
                <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText, textAlign: "center" }}>
                  Row 0 & Col 0 are inspected to record whether they originally had any 0.
                </div>
              </div>
            )}

            {/* Step 1 Protection Shield (F1040..F1118) */}
            {isProtectedPhase && (
              <div
                style={{
                  padding: "14px 24px",
                  borderRadius: 16,
                  backgroundColor: "rgba(6, 214, 160, 0.16)",
                  border: `2px solid ${theme.good}`,
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  boxShadow: `0 0 24px ${theme.good}55`,
                }}
              >
                <span style={{ fontSize: 32 }}>🛡️</span>
                <div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 900, color: theme.good }}>
                    BOUNDARY HISTORY PROTECTED
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText, marginTop: 2 }}>
                    Row 0 & Col 0 original zero states safely preserved in boolean flags!
                  </div>
                </div>
              </div>
            )}

            {/* Step 2 In-Place Marker Writes (F1118..F1646) */}
            {isInteriorScanPhase && !isMarkersLockedPhase && (
              <div
                style={{
                  padding: "12px 20px",
                  borderRadius: 14,
                  backgroundColor: "rgba(10, 36, 25, 0.95)",
                  border: `1.5px solid ${theme.cyan}`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  alignItems: "center",
                  width: "92%",
                  boxShadow: `0 0 20px ${theme.cyan}33`,
                }}
              >
                <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: theme.cyan }}>
                  STEP 2: IN-PLACE MARKER WRITES
                </div>
                <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText, textAlign: "center" }}>
                  Scan inner grid (r ≥ 1, c ≥ 1). When cell is 0:
                </div>
                <div style={{ display: "flex", gap: 10, marginTop: 2 }}>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 12,
                      fontWeight: 700,
                      color: isRowMarkedAt30 ? theme.good : theme.chalkDim,
                      backgroundColor: isRowMarkedAt30 ? "rgba(6, 214, 160, 0.16)" : "transparent",
                      padding: "4px 8px",
                      borderRadius: 8,
                      border: `1px solid ${isRowMarkedAt30 ? theme.good : "rgba(248, 246, 240, 0.2)"}`,
                    }}
                  >
                    Row 3 mark → (3,0) {isRowMarkedAt30 ? "✓" : ""}
                  </span>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 12,
                      fontWeight: 700,
                      color: isColMarkedAt03 ? theme.cyan : theme.chalkDim,
                      backgroundColor: isColMarkedAt03 ? "rgba(110, 231, 183, 0.16)" : "transparent",
                      padding: "4px 8px",
                      borderRadius: 8,
                      border: `1px solid ${isColMarkedAt03 ? theme.cyan : "rgba(248, 246, 240, 0.2)"}`,
                    }}
                  >
                    Col 3 mark → (0,3) {isColMarkedAt03 ? "✓" : ""}
                  </span>
                </div>
              </div>
            )}

            {/* Step 2 Marker Locked Info (F1646..F1816) */}
            {isMarkersLockedPhase && (
              <div
                style={{
                  padding: "12px 24px",
                  borderRadius: 16,
                  backgroundColor: "rgba(10, 36, 25, 0.95)",
                  border: `2px solid ${theme.cyan}`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  alignItems: "center",
                  boxShadow: `0 0 20px ${theme.cyan}44`,
                }}
              >
                <div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, color: theme.cyan }}>
                  BOUNDARY IS NOW IN-PLACE MARKER MEMORY
                </div>
                <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkDim }}>
                  Col 0 stores row markers · Row 0 stores column markers (O(1) extra space)
                </div>
              </div>
            )}

            {/* Step 3 Apply Markers Info (F1816..F2219) */}
            {isApplyPhase && !isInteriorFinalized && (
              <div
                style={{
                  padding: "12px 20px",
                  borderRadius: 14,
                  backgroundColor: "rgba(10, 36, 25, 0.95)",
                  border: `1.5px solid ${theme.pivot}`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  alignItems: "center",
                  width: "92%",
                  boxShadow: `0 0 20px ${theme.pivot}33`,
                }}
              >
                <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: theme.pivot }}>
                  STEP 3: SPREAD ZEROES TO INTERIOR
                </div>
                <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText, textAlign: "center" }}>
                  For inner cells: if matrix[r][0] == 0 or matrix[0][c] == 0:
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.pivot, marginTop: 2 }}>
                  → matrix[r][c] = 0
                </div>
              </div>
            )}

            {/* Step 3 Interior Finalized Badge (F2219..F2309) */}
            {isInteriorFinalized && (
              <div
                style={{
                  padding: "12px 24px",
                  borderRadius: 16,
                  backgroundColor: "rgba(6, 214, 160, 0.16)",
                  border: `2px solid ${theme.good}`,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  boxShadow: `0 0 20px ${theme.good}44`,
                }}
              >
                <span style={{ fontSize: 24, color: theme.good }}>✓</span>
                <span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.good }}>
                  INTERIOR FINALIZED · ONLY BOUNDARY REMAINS
                </span>
              </div>
            )}

            {/* Step 4 Boundary Finalization (F2309..F2666) */}
            {frame >= 2309 && frame < 2666 && (
              <div
                style={{
                  padding: "12px 20px",
                  borderRadius: 14,
                  backgroundColor: "rgba(10, 36, 25, 0.95)",
                  border: `1.5px solid ${theme.accent}`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  alignItems: "center",
                  width: "92%",
                  boxShadow: `0 0 20px ${theme.accent}33`,
                }}
              >
                <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: theme.accent }}>
                  STEP 4: FINALIZE ROW 0 & COL 0
                </div>
                <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText, textAlign: "center" }}>
                  Using the boolean flags saved in Step 1:
                </div>
                <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 12,
                      fontWeight: 700,
                      color: isRow0Finalized ? theme.good : theme.chalkDim,
                      backgroundColor: isRow0Finalized ? "rgba(6, 214, 160, 0.16)" : "transparent",
                      padding: "3px 8px",
                      borderRadius: 6,
                      border: `1px solid ${isRow0Finalized ? theme.good : "rgba(248, 246, 240, 0.2)"}`,
                    }}
                  >
                    firstRowZero ({firstRowZero ? "True" : "False"}) {isRow0Finalized ? "✓" : ""}
                  </span>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 12,
                      fontWeight: 700,
                      color: isCol0Finalized ? theme.good : theme.chalkDim,
                      backgroundColor: isCol0Finalized ? "rgba(6, 214, 160, 0.16)" : "transparent",
                      padding: "3px 8px",
                      borderRadius: 6,
                      border: `1px solid ${isCol0Finalized ? theme.good : "rgba(248, 246, 240, 0.2)"}`,
                    }}
                  >
                    firstColZero ({firstColZero ? "True" : "False"}) {isCol0Finalized ? "✓" : ""}
                  </span>
                </div>
              </div>
            )}

            {/* Complete Solution Badge (F2666..F2762) */}
            {isSolvedComplete && (
              <div
                style={{
                  padding: "14px 24px",
                  borderRadius: 16,
                  backgroundColor: "rgba(6, 214, 160, 0.18)",
                  border: `2px solid ${theme.good}`,
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  boxShadow: `0 0 24px ${theme.good}55`,
                }}
              >
                <span style={{ fontSize: 30 }}>🎉</span>
                <div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 900, color: theme.good }}>
                    MATRIX ZEROING COMPLETE!
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkText, marginTop: 2 }}>
                    Time: O(M × N) · Space: O(1) in-place
                  </div>
                </div>
              </div>
            )}

            {/* Outro: Four-Step Order Pipeline (F2762..F3072) */}
            {isOrderRecap && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  alignItems: "center",
                  width: "95%",
                }}
              >
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 14,
                    fontWeight: 800,
                    color: theme.pivot,
                    letterSpacing: "0.06em",
                  }}
                >
                  CRITICAL ALGORITHM PIPELINE ORDER:
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 10,
                    width: "100%",
                  }}
                >
                  {[
                    { num: 1, label: "SAVE HISTORY", active: frame >= 2800 && frame < 2848, color: theme.good },
                    { num: 2, label: "MARK INTERIOR", active: frame >= 2874 && frame < 2906, color: theme.cyan },
                    { num: 3, label: "APPLY MARKERS", active: frame >= 2935 && frame < 2974, color: theme.pivot },
                    { num: 4, label: "FINALIZE BOUNDARY", active: frame >= 2991 && frame < 3038, color: theme.accent },
                  ].map((step) => (
                    <div
                      key={step.num}
                      style={{
                        padding: "10px 8px",
                        borderRadius: 12,
                        backgroundColor: step.active ? `${step.color}33` : "rgba(10, 36, 25, 0.95)",
                        border: `1.5px solid ${step.active ? step.color : "rgba(248, 246, 240, 0.2)"}`,
                        textAlign: "center",
                        transform: step.active ? "scale(1.05)" : "scale(1)",
                        boxShadow: step.active ? `0 0 20px ${step.color}66` : "none",
                      }}
                    >
                      <div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, color: step.color }}>
                        STEP {step.num}
                      </div>
                      <div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: theme.chalkText, marginTop: 2 }}>
                        {step.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Outro: Danger / Order Violation Warning (F3073..F3241) */}
            {isOrderWarning && (
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: 16,
                  backgroundColor: "rgba(255, 107, 107, 0.18)",
                  border: `2px solid ${theme.warn}`,
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  width: "95%",
                  boxShadow: `0 0 28px ${theme.warn}55`,
                }}
              >
                <span style={{ fontSize: 34 }}>⚠️</span>
                <div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: theme.warn }}>
                    ORDER VIOLATION = CORRUPTION!
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 12, color: theme.chalkText, marginTop: 3 }}>
                    Finalizing boundary too early destroys marker signals before interior can read them!
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* Bottom Captions (Y: 960..1040)                                     */}
      {/* ----------------------------------------------------------------- */}
      <Captions words={captionWords} />
    </div>
  );
};
