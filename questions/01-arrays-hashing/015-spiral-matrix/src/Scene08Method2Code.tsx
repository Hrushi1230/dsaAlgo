/**
 * Scene08Method2Code.tsx — Scene 08 · Method 2 Optimal Code & Complexity
 * Spiral Matrix (LeetCode 54) · Pattern 01 — Arrays & Hashing
 *
 * Implements Method 2 (Optimal Boundary Traversal) Code Walkthrough & Complexity:
 * - Left Stage (X: 80..1060, Y: 120..810):
 *   - Canonical ChalkCodeEditorV2 with 34 syntax-highlighted Python lines
 *   - Character-by-character typing synchronized to exact audio anchors
 *   - Dynamic active line tracking, syntax coloring, line numbers
 * - Right Stage (X: 1100..1840, Y: 120..810):
 *   - Wrapped with authentic RoughBox chalk borders
 *   - Phase 1 (F0..F687): Initial Boundary Setup + While Invariant
 *   - Phase 2 (F688..F1872): 4-Step Cycle (Consume -> Shrink -> Validate -> Continue)
 *     and Control-Flow Loop-Back Proof (why no check after left += 1)
 *   - Phase 3 (F1873..F3054): Python Reverse Range Gotcha & Mathematical Proof (left - 1, top - 1)
 *   - Phase 4 (F3055..F3655): Time O(m*n) and Auxiliary Space O(1) Complexity
 * - Captions at bottom (Y: 940..1024) with 130px breathing clearance
 *
 * Total Duration: 3,655 frames @ 30fps (121.833s) strictly from sync/08-method2-code.json
 */

import React, { useMemo } from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  Audio,
  staticFile,
} from "remotion";

import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme as baseTheme, fonts } from "../../../../kit/lib/theme";
import { EASE } from "../../../../kit/lib/anim";
import { ChalkCodeEditorV2, ChalkCodeLine } from "../../../../kit/components/ChalkCodeEditorV2";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { RoughBox } from "../../../../kit/components/RoughBox";
import syncData from "../sync/08-method2-code.json";

const theme = {
  ...baseTheme,
  gold: baseTheme.pivot,
  chalkSub: baseTheme.chalkDim,
  chalkBorder: baseTheme.cardBorder,
};

// ---------------------------------------------------------------------------
// Word-level Caption Timings (from sync/08-method2-code.json)
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

// ---------------------------------------------------------------------------
// Code Lines Definition with Exact Typing Windows
// ---------------------------------------------------------------------------
const CODE_LINES: ChalkCodeLine[] = [
  {
    num: 1,
    text: "def spiralOrder(matrix: list[list[int]]) -> list[int]:",
    indent: 0,
    startFrame: 0,
    endFrame: 40,
    tokens: [
      { text: "def ", color: theme.accent },
      { text: "spiralOrder", color: theme.cyan },
      { text: "(matrix: list[list[int]]) -> list[int]:", color: theme.chalkText },
    ],
  },
  {
    num: 2,
    text: "    m, n = len(matrix), len(matrix[0])",
    indent: 1,
    startFrame: 0,
    endFrame: 70,
    tokens: [
      { text: "m, n", color: theme.cyan },
      { text: " = ", color: theme.chalkText },
      { text: "len", color: theme.accent },
      { text: "(matrix), ", color: theme.chalkText },
      { text: "len", color: theme.accent },
      { text: "(matrix[0])", color: theme.chalkText },
    ],
  },
  {
    num: 3,
    text: "    top, bottom = 0, m - 1",
    indent: 1,
    startFrame: 91,
    endFrame: 180,
    tokens: [
      { text: "top, bottom", color: theme.gold },
      { text: " = ", color: theme.chalkText },
      { text: "0, m - 1", color: theme.gold },
    ],
  },
  {
    num: 4,
    text: "    left, right = 0, n - 1",
    indent: 1,
    startFrame: 181,
    endFrame: 282,
    tokens: [
      { text: "left, right", color: theme.gold },
      { text: " = ", color: theme.chalkText },
      { text: "0, n - 1", color: theme.gold },
    ],
  },
  {
    num: 5,
    text: "    answer = []",
    indent: 1,
    startFrame: 283,
    endFrame: 320,
    tokens: [
      { text: "answer", color: theme.emerald },
      { text: " = []", color: theme.chalkText },
    ],
  },
  {
    num: 6,
    text: "",
    indent: 1,
    startFrame: 320,
    endFrame: 320,
    tokens: [],
  },
  {
    num: 7,
    text: "    while top <= bottom and left <= right:",
    indent: 1,
    startFrame: 295,
    endFrame: 665,
    tokens: [
      { text: "while ", color: theme.accent },
      { text: "top <= bottom", color: theme.gold },
      { text: " and ", color: theme.accent },
      { text: "left <= right", color: theme.gold },
      { text: ":", color: theme.chalkText },
    ],
  },
  {
    num: 8,
    text: "        # 1. Traverse top row: left -> right",
    indent: 2,
    startFrame: 815,
    endFrame: 870,
    tokens: [{ text: "# 1. Traverse top row: left -> right", color: theme.chalkSub }],
  },
  {
    num: 9,
    text: "        for col in range(left, right + 1):",
    indent: 2,
    startFrame: 871,
    endFrame: 930,
    tokens: [
      { text: "for ", color: theme.accent },
      { text: "col", color: theme.cyan },
      { text: " in ", color: theme.accent },
      { text: "range", color: theme.accent },
      { text: "(left, right + 1):", color: theme.chalkText },
    ],
  },
  {
    num: 10,
    text: "            answer.append(matrix[top][col])",
    indent: 3,
    startFrame: 931,
    endFrame: 970,
    tokens: [
      { text: "answer.append", color: theme.emerald },
      { text: "(matrix[top][col])", color: theme.chalkText },
    ],
  },
  {
    num: 11,
    text: "        top += 1",
    indent: 2,
    startFrame: 971,
    endFrame: 1010,
    tokens: [
      { text: "top", color: theme.gold },
      { text: " += 1", color: theme.warn },
    ],
  },
  {
    num: 12,
    text: "        if top > bottom:",
    indent: 2,
    startFrame: 1011,
    endFrame: 1060,
    tokens: [
      { text: "if ", color: theme.accent },
      { text: "top > bottom", color: theme.warn },
      { text: ":", color: theme.chalkText },
    ],
  },
  {
    num: 13,
    text: "            break",
    indent: 3,
    startFrame: 1061,
    endFrame: 1085,
    tokens: [{ text: "break", color: theme.accent }],
  },
  {
    num: 14,
    text: "",
    indent: 2,
    startFrame: 1085,
    endFrame: 1085,
    tokens: [],
  },
  {
    num: 15,
    text: "        # 2. Traverse right col: top -> bottom",
    indent: 2,
    startFrame: 1116,
    endFrame: 1145,
    tokens: [{ text: "# 2. Traverse right col: top -> bottom", color: theme.chalkSub }],
  },
  {
    num: 16,
    text: "        for row in range(top, bottom + 1):",
    indent: 2,
    startFrame: 1146,
    endFrame: 1175,
    tokens: [
      { text: "for ", color: theme.accent },
      { text: "row", color: theme.cyan },
      { text: " in ", color: theme.accent },
      { text: "range", color: theme.accent },
      { text: "(top, bottom + 1):", color: theme.chalkText },
    ],
  },
  {
    num: 17,
    text: "            answer.append(matrix[row][right])",
    indent: 3,
    startFrame: 1176,
    endFrame: 1195,
    tokens: [
      { text: "answer.append", color: theme.emerald },
      { text: "(matrix[row][right])", color: theme.chalkText },
    ],
  },
  {
    num: 18,
    text: "        right -= 1",
    indent: 2,
    startFrame: 1196,
    endFrame: 1210,
    tokens: [
      { text: "right", color: theme.gold },
      { text: " -= 1", color: theme.warn },
    ],
  },
  {
    num: 19,
    text: "        if left > right:",
    indent: 2,
    startFrame: 1211,
    endFrame: 1222,
    tokens: [
      { text: "if ", color: theme.accent },
      { text: "left > right", color: theme.warn },
      { text: ":", color: theme.chalkText },
    ],
  },
  {
    num: 20,
    text: "            break",
    indent: 3,
    startFrame: 1223,
    endFrame: 1229,
    tokens: [{ text: "break", color: theme.accent }],
  },
  {
    num: 21,
    text: "",
    indent: 2,
    startFrame: 1229,
    endFrame: 1229,
    tokens: [],
  },
  {
    num: 22,
    text: "        # 3. Traverse bottom row: right -> left",
    indent: 2,
    startFrame: 1251,
    endFrame: 1275,
    tokens: [{ text: "# 3. Traverse bottom row: right -> left", color: theme.chalkSub }],
  },
  {
    num: 23,
    text: "        for col in range(right, left - 1, -1):",
    indent: 2,
    startFrame: 1276,
    endFrame: 1315,
    tokens: [
      { text: "for ", color: theme.accent },
      { text: "col", color: theme.cyan },
      { text: " in ", color: theme.accent },
      { text: "range", color: theme.accent },
      { text: "(right, left - 1, -1):", color: theme.gold },
    ],
  },
  {
    num: 24,
    text: "            answer.append(matrix[bottom][col])",
    indent: 3,
    startFrame: 1316,
    endFrame: 1330,
    tokens: [
      { text: "answer.append", color: theme.emerald },
      { text: "(matrix[bottom][col])", color: theme.chalkText },
    ],
  },
  {
    num: 25,
    text: "        bottom -= 1",
    indent: 2,
    startFrame: 1331,
    endFrame: 1340,
    tokens: [
      { text: "bottom", color: theme.gold },
      { text: " -= 1", color: theme.warn },
    ],
  },
  {
    num: 26,
    text: "        if top > bottom:",
    indent: 2,
    startFrame: 1341,
    endFrame: 1345,
    tokens: [
      { text: "if ", color: theme.accent },
      { text: "top > bottom", color: theme.warn },
      { text: ":", color: theme.chalkText },
    ],
  },
  {
    num: 27,
    text: "            break",
    indent: 3,
    startFrame: 1346,
    endFrame: 1347,
    tokens: [{ text: "break", color: theme.accent }],
  },
  {
    num: 28,
    text: "",
    indent: 2,
    startFrame: 1347,
    endFrame: 1347,
    tokens: [],
  },
  {
    num: 29,
    text: "        # 4. Traverse left col: bottom -> top",
    indent: 2,
    startFrame: 1365,
    endFrame: 1390,
    tokens: [{ text: "# 4. Traverse left col: bottom -> top", color: theme.chalkSub }],
  },
  {
    num: 30,
    text: "        for row in range(bottom, top - 1, -1):",
    indent: 2,
    startFrame: 1391,
    endFrame: 1440,
    tokens: [
      { text: "for ", color: theme.accent },
      { text: "row", color: theme.cyan },
      { text: " in ", color: theme.accent },
      { text: "range", color: theme.accent },
      { text: "(bottom, top - 1, -1):", color: theme.gold },
    ],
  },
  {
    num: 31,
    text: "            answer.append(matrix[row][left])",
    indent: 3,
    startFrame: 1441,
    endFrame: 1460,
    tokens: [
      { text: "answer.append", color: theme.emerald },
      { text: "(matrix[row][left])", color: theme.chalkText },
    ],
  },
  {
    num: 32,
    text: "        left += 1",
    indent: 2,
    startFrame: 1461,
    endFrame: 1477,
    tokens: [
      { text: "left", color: theme.gold },
      { text: " += 1", color: theme.warn },
    ],
  },
  {
    num: 33,
    text: "",
    indent: 1,
    startFrame: 1477,
    endFrame: 1477,
    tokens: [],
  },
  {
    num: 34,
    text: "    return answer",
    indent: 1,
    startFrame: 1480,
    endFrame: 1510,
    tokens: [
      { text: "return ", color: theme.accent },
      { text: "answer", color: theme.emerald },
    ],
  },
];

export const Scene08Method2Code: React.FC = () => {
  const frame = useCurrentFrame();
  const fps = 30;

  // Active line highlight mapping
  const activeLine = useMemo(() => {
    if (frame < 91) return 1;
    if (frame < 181) return 3;
    if (frame < 283) return 4;
    if (frame < 295) return 5;
    if (frame < 688) return 7;
    if (frame < 971) return 9;
    if (frame < 1011) return 11;
    if (frame < 1086) return 12;
    if (frame < 1196) return 16;
    if (frame < 1211) return 18;
    if (frame < 1230) return 19;
    if (frame < 1331) return 23;
    if (frame < 1341) return 25;
    if (frame < 1348) return 26;
    if (frame < 1461) return 30;
    if (frame < 1495) return 32;
    if (frame >= 1495 && frame < 1873) return 7; // while loop re-check focus
    if (frame >= 2114 && frame < 2349) return 23; // bottom reverse range
    if (frame >= 2349 && frame < 2850) return 30; // left reverse range
    return undefined;
  }, [frame]);

  // Phase tracking
  const isPhase1 = frame < 688;
  const isPhase2 = frame >= 688 && frame < 1873;
  const isPhase3 = frame >= 1873 && frame < 3055;
  const isPhase4 = frame >= 3055;

  return (
    <div
      style={{
        position: "relative",
        width: 1920,
        height: 1080,
        overflow: "hidden",
        backgroundColor: theme.boardBg,
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      {/* =====================================================================
          TOP HEADER: Course Pattern & Problem Title (Y: 28..76)
         ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 28,
          left: 80,
          right: 80,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(248, 246, 240, 0.15)",
          paddingBottom: 8,
          zIndex: 20,
        }}
      >
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: "1.5px",
            color: theme.chalkText,
          }}
        >
          <span style={{ color: theme.emerald }}>●</span> 01 · ARRAYS & HASHING
        </div>

        <div
          style={{
            fontFamily: fonts.display,
            fontSize: 28,
            fontWeight: 700,
            color: theme.chalkText,
            letterSpacing: "0.5px",
          }}
        >
          Spiral Matrix — <span style={{ color: theme.cyan }}>Method 2: Clean Shrinking-Boundary Code</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 14,
              color: "rgba(248, 246, 240, 0.6)",
              fontWeight: 700,
            }}
          >
            #015
          </span>
          <div
            style={{
              padding: "4px 10px",
              borderRadius: 6,
              backgroundColor: "rgba(255, 230, 109, 0.15)",
              border: `1px solid ${theme.gold}`,
              fontFamily: fonts.mono,
              fontSize: 12,
              fontWeight: 800,
              color: theme.gold,
              letterSpacing: "1px",
            }}
          >
            MEDIUM
          </div>
        </div>
      </div>

      {/* =====================================================================
          LEFT STAGE: CHALK CODE EDITOR V2 (X: 80, Y: 95, W: 980, H: 740)
         ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 95,
          left: 80,
          width: 980,
          height: 740,
          zIndex: 10,
        }}
      >
        <ChalkCodeEditorV2
          lines={CODE_LINES}
          title="spiral_matrix_boundary.py"
          language="python"
          activeLineNums={activeLine !== undefined ? [activeLine] : []}
          width={980}
          height={740}
          fontSize={12.5}
          lineHeight={15}
          scrollY={0}
        />
      </div>

      {/* =====================================================================
          RIGHT STAGE: PEDAGOGICAL CONTEXT CARDS (X: 1100, Y: 95, W: 740)
         ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 95,
          left: 1100,
          width: 740,
          height: 740,
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {/* PHASE 1: INITIAL BOUNDARIES & WHILE INVARIANT (F0..F687) */}
        {isPhase1 && (
          <>
            <div style={{ position: "relative", width: 740, minHeight: 180 }}>
              <RoughBox width={740} height={180} stroke={theme.cyan} strokeWidth={2} seed={801} />
              <div style={{ position: "absolute", inset: 0, padding: "20px 24px" }}>
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 14,
                    fontWeight: 800,
                    color: theme.cyan,
                    letterSpacing: 1.5,
                    marginBottom: 12,
                  }}
                >
                  📐 4 BOUNDARY INITIALIZATION
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div
                    style={{
                      padding: "10px 14px",
                      borderRadius: 6,
                      backgroundColor: "rgba(92, 225, 230, 0.08)",
                      border: `1.5px solid ${theme.cyan}`,
                      fontFamily: fonts.mono,
                      fontSize: 16,
                      fontWeight: 700,
                      color: theme.cyan,
                    }}
                  >
                    top = 0 &nbsp; (first row)
                  </div>
                  <div
                    style={{
                      padding: "10px 14px",
                      borderRadius: 6,
                      backgroundColor: "rgba(92, 225, 230, 0.08)",
                      border: `1.5px solid ${theme.cyan}`,
                      fontFamily: fonts.mono,
                      fontSize: 16,
                      fontWeight: 700,
                      color: theme.cyan,
                    }}
                  >
                    bottom = m - 1 &nbsp; (last row)
                  </div>
                  <div
                    style={{
                      padding: "10px 14px",
                      borderRadius: 6,
                      backgroundColor: "rgba(92, 225, 230, 0.08)",
                      border: `1.5px solid ${theme.cyan}`,
                      fontFamily: fonts.mono,
                      fontSize: 16,
                      fontWeight: 700,
                      color: theme.cyan,
                    }}
                  >
                    left = 0 &nbsp; (first col)
                  </div>
                  <div
                    style={{
                      padding: "10px 14px",
                      borderRadius: 6,
                      backgroundColor: "rgba(92, 225, 230, 0.08)",
                      border: `1.5px solid ${theme.cyan}`,
                      fontFamily: fonts.mono,
                      fontSize: 16,
                      fontWeight: 700,
                      color: theme.cyan,
                    }}
                  >
                    right = n - 1 &nbsp; (last col)
                  </div>
                </div>
              </div>
            </div>

            {/* Invariant Banner */}
            {frame >= 295 && (
              <div style={{ position: "relative", width: 740, minHeight: 220 }}>
                <RoughBox width={740} height={220} stroke={theme.gold} strokeWidth={2.5} seed={802} />
                <div style={{ position: "absolute", inset: 0, padding: "20px 24px" }}>
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 14,
                      fontWeight: 800,
                      color: theme.gold,
                      letterSpacing: 1.5,
                      marginBottom: 12,
                    }}
                  >
                    ⚡ CORE INVARIANT: RECTANGLE EXISTENCE
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 22,
                      fontWeight: 800,
                      color: theme.chalkText,
                      marginBottom: 14,
                      letterSpacing: 1,
                    }}
                  >
                    while <span style={{ color: theme.gold }}>top &lt;= bottom</span> and{" "}
                    <span style={{ color: theme.cyan }}>left &lt;= right</span>:
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                      fontFamily: fonts.sans,
                      fontSize: 15,
                      color: theme.chalkText,
                    }}
                  >
                    <div>
                      • <strong style={{ color: theme.gold }}>top &lt;= bottom:</strong> At least 1 valid row
                      remains to traverse.
                    </div>
                    <div>
                      • <strong style={{ color: theme.cyan }}>left &lt;= right:</strong> At least 1 valid column
                      remains to traverse.
                    </div>
                    <div>
                      • Loop continues as long as a 2D or 1D active rectangular subgrid exists!
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* PHASE 2: 4-STEP CYCLE & LOOP-BACK PROOF (F688..F1872) */}
        {isPhase2 && (
          <>
            {/* 4-Step Systematic Cycle Card */}
            <div style={{ position: "relative", width: 740, minHeight: 240 }}>
              <RoughBox width={740} height={240} stroke={theme.cyan} strokeWidth={2} seed={803} />
              <div style={{ position: "absolute", inset: 0, padding: "18px 24px" }}>
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 14,
                    fontWeight: 800,
                    color: theme.cyan,
                    letterSpacing: 1.5,
                    marginBottom: 14,
                  }}
                >
                  🔄 THE 4-STEP SYSTEMATIC EDGE PARADIGM
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div
                    style={{
                      padding: "10px 14px",
                      borderRadius: 6,
                      backgroundColor: "rgba(92, 225, 230, 0.08)",
                      border: `1.5px solid ${theme.cyan}`,
                      fontFamily: fonts.mono,
                      fontSize: 14,
                    }}
                  >
                    <div style={{ color: theme.gold, fontWeight: 800 }}>1. CONSUME</div>
                    <div style={{ color: theme.chalkText, fontSize: 13, marginTop: 4 }}>
                      Traverse perimeter row/col and append cells to answer.
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "10px 14px",
                      borderRadius: 6,
                      backgroundColor: "rgba(255, 230, 109, 0.08)",
                      border: `1.5px solid ${theme.gold}`,
                      fontFamily: fonts.mono,
                      fontSize: 14,
                    }}
                  >
                    <div style={{ color: theme.gold, fontWeight: 800 }}>2. SHRINK</div>
                    <div style={{ color: theme.chalkText, fontSize: 13, marginTop: 4 }}>
                      Contract boundary pointer: <code style={{ color: theme.cyan }}>top++ / right-- / bottom-- / left++</code>
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "10px 14px",
                      borderRadius: 6,
                      backgroundColor: "rgba(255, 107, 107, 0.08)",
                      border: `1.5px solid ${theme.warn}`,
                      fontFamily: fonts.mono,
                      fontSize: 14,
                    }}
                  >
                    <div style={{ color: theme.warn, fontWeight: 800 }}>3. VALIDATE</div>
                    <div style={{ color: theme.chalkText, fontSize: 13, marginTop: 4 }}>
                      Check if rectangle collapsed: <code style={{ color: theme.warn }}>break</code> if guard violated.
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "10px 14px",
                      borderRadius: 6,
                      backgroundColor: "rgba(60, 229, 167, 0.08)",
                      border: `1.5px solid ${theme.emerald}`,
                      fontFamily: fonts.mono,
                      fontSize: 14,
                    }}
                  >
                    <div style={{ color: theme.emerald, fontWeight: 800 }}>4. CONTINUE</div>
                    <div style={{ color: theme.chalkText, fontSize: 13, marginTop: 4 }}>
                      Proceed to next edge clockwise or start next round.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Loop-Back Control Flow Proof Card (F1365..F1872) */}
            {frame >= 1365 && (
              <div style={{ position: "relative", width: 740, minHeight: 250 }}>
                <RoughBox width={740} height={250} stroke={theme.gold} strokeWidth={2.5} seed={804} />
                <div style={{ position: "absolute", inset: 0, padding: "20px 24px" }}>
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 14,
                      fontWeight: 800,
                      color: theme.gold,
                      letterSpacing: 1.5,
                      marginBottom: 10,
                    }}
                  >
                    💡 WHY NO CHECK AFTER LEFT EDGE?
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.sans,
                      fontSize: 16,
                      fontWeight: 700,
                      color: theme.chalkText,
                      marginBottom: 12,
                    }}
                  >
                    After <code style={{ color: theme.cyan }}>left += 1</code>, execution loops back to the main{" "}
                    <code style={{ color: theme.gold }}>while</code> header!
                  </div>

                  <div
                    style={{
                      backgroundColor: theme.cardBg,
                      border: "1.5px dashed rgba(255, 230, 109, 0.5)",
                      borderRadius: 8,
                      padding: "12px 16px",
                      fontFamily: fonts.mono,
                      fontSize: 15,
                      color: theme.chalkText,
                      lineHeight: 1.6,
                    }}
                  >
                    <div style={{ color: theme.emerald }}>
                      ✓ Row Guard: <span style={{ color: theme.chalkText }}>top &lt;= bottom</span> rechecked immediately
                    </div>
                    <div style={{ color: theme.emerald }}>
                      ✓ Col Guard: <span style={{ color: theme.chalkText }}>left &lt;= right</span> rechecked immediately
                    </div>
                    <div style={{ color: theme.gold, marginTop: 4, fontSize: 14 }}>
                      ➔ A 4th inner check would be 100% redundant with the main while condition!
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* PHASE 3: PYTHON REVERSE RANGE GOTCHA (F1873..F3054) */}
        {isPhase3 && (
          <>
            <div style={{ position: "relative", width: 740, minHeight: 260 }}>
              <RoughBox width={740} height={260} stroke={theme.warn} strokeWidth={2.5} seed={805} />
              <div style={{ position: "absolute", inset: 0, padding: "20px 24px" }}>
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 14,
                    fontWeight: 800,
                    color: theme.warn,
                    letterSpacing: 1.5,
                    marginBottom: 10,
                  }}
                >
                  ⚠️ PYTHON REVERSE RANGE: EXCLUSIVE STOP RULE
                </div>

                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 20,
                    fontWeight: 800,
                    color: theme.chalkText,
                    marginBottom: 14,
                  }}
                >
                  range(<span style={{ color: theme.cyan }}>start</span>,{" "}
                  <span style={{ color: theme.warn }}>stop</span>,{" "}
                  <span style={{ color: theme.gold }}>step = -1</span>)
                </div>

                <div
                  style={{
                    backgroundColor: "rgba(255, 107, 107, 0.1)",
                    border: `1.5px solid ${theme.warn}`,
                    borderRadius: 6,
                    padding: "10px 14px",
                    fontFamily: fonts.sans,
                    fontSize: 15,
                    color: theme.chalkText,
                    marginBottom: 12,
                  }}
                >
                  Python <strong>NEVER includes</strong> the <code style={{ color: theme.warn }}>stop</code> value!
                  It stops one step BEFORE it.
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 15,
                      color: frame >= 2114 ? theme.gold : theme.chalkSub,
                    }}
                  >
                    <strong>Bottom Row:</strong>{" "}
                    {frame >= 2114 ? (
                      <code>
                        range(right, <span style={{ color: theme.warn, fontWeight: 800 }}>left - 1</span>, -1)
                      </code>
                    ) : (
                      <code style={{ opacity: 0.5 }}>range(right, ?, -1)</code>
                    )}
                    <span style={{ color: theme.emerald, marginLeft: 12 }}>
                      {frame >= 2588 && "➔ includes cell at left ✓"}
                    </span>
                  </div>

                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 15,
                      color: frame >= 2349 ? theme.gold : theme.chalkSub,
                    }}
                  >
                    <strong>Left Col:</strong>{" "}
                    {frame >= 2349 ? (
                      <code>
                        range(bottom, <span style={{ color: theme.warn, fontWeight: 800 }}>top - 1</span>, -1)
                      </code>
                    ) : (
                      <code style={{ opacity: 0.5 }}>range(bottom, ?, -1)</code>
                    )}
                    <span style={{ color: theme.emerald, marginLeft: 12 }}>
                      {frame >= 2738 && "➔ includes cell at top ✓"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Safeguard Shield Badges (F2822..F3054) */}
            {frame >= 2822 && (
              <div style={{ position: "relative", width: 740, minHeight: 180 }}>
                <RoughBox width={740} height={180} stroke={theme.emerald} strokeWidth={2} seed={806} />
                <div style={{ position: "absolute", inset: 0, padding: "18px 24px" }}>
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 14,
                      fontWeight: 800,
                      color: theme.emerald,
                      letterSpacing: 1.5,
                      marginBottom: 12,
                    }}
                  >
                    🛡️ DUAL CODE SAFEGUARDS
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                    <div
                      style={{
                        padding: "12px 14px",
                        borderRadius: 6,
                        backgroundColor: "rgba(60, 229, 167, 0.08)",
                        border: `1.5px solid ${theme.emerald}`,
                        fontFamily: fonts.sans,
                        fontSize: 14,
                        color: theme.chalkText,
                      }}
                    >
                      <strong style={{ color: theme.emerald }}>🛡️ Guard Checks:</strong>
                      <div style={{ marginTop: 4 }}>
                        Prevents duplicate traversal of already-visited cells in collapsed 1-row/1-col subgrids.
                      </div>
                    </div>

                    <div
                      style={{
                        padding: "12px 14px",
                        borderRadius: 6,
                        backgroundColor: "rgba(60, 229, 167, 0.08)",
                        border: `1.5px solid ${theme.emerald}`,
                        fontFamily: fonts.sans,
                        fontSize: 14,
                        color: theme.chalkText,
                      }}
                    >
                      <strong style={{ color: theme.emerald }}>🛡️ Reverse Ranges:</strong>
                      <div style={{ marginTop: 4 }}>
                        <code>left - 1</code> and <code>top - 1</code> guarantee zero off-by-one errors on corners.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* PHASE 4: COMPLEXITY ANALYSIS (F3055..F3655) */}
        {isPhase4 && (
          <div style={{ position: "relative", width: 740, minHeight: 460 }}>
            <RoughBox width={740} height={460} stroke={theme.gold} strokeWidth={3} seed={807} />
            <div style={{ position: "absolute", inset: 0, padding: "24px 28px" }}>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 14,
                  fontWeight: 800,
                  color: theme.gold,
                  letterSpacing: 1.5,
                  marginBottom: 18,
                }}
              >
                📊 ASYMPTOTIC COMPLEXITY ANALYSIS
              </div>

              {/* Time Complexity */}
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: 8,
                  backgroundColor: "rgba(255, 230, 109, 0.08)",
                  border: `1.5px solid ${theme.gold}`,
                  marginBottom: 16,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 800, color: theme.gold }}>
                    TIME COMPLEXITY
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 24,
                      fontWeight: 900,
                      color: theme.gold,
                      backgroundColor: "rgba(255, 230, 109, 0.15)",
                      padding: "4px 12px",
                      borderRadius: 6,
                    }}
                  >
                    O(m × n)
                  </div>
                </div>
                <div style={{ fontFamily: fonts.sans, fontSize: 15, color: theme.chalkText, marginTop: 8 }}>
                  Every matrix cell is appended exactly once. Across all rounds, exactly m × n = 30 iterations
                  occur. This is mathematically optimal since every element must be returned.
                </div>
              </div>

              {/* Space Complexity */}
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: 8,
                  backgroundColor: "rgba(60, 229, 167, 0.08)",
                  border: `1.5px solid ${theme.emerald}`,
                  marginBottom: 16,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 800, color: theme.emerald }}>
                    AUXILIARY SPACE
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 24,
                      fontWeight: 900,
                      color: theme.emerald,
                      backgroundColor: "rgba(60, 229, 167, 0.15)",
                      padding: "4px 12px",
                      borderRadius: 6,
                    }}
                  >
                    O(1)
                  </div>
                </div>
                <div style={{ fontFamily: fonts.sans, fontSize: 15, color: theme.chalkText, marginTop: 8 }}>
                  Apart from the output list (which is required by the problem return signature), we only store 4
                  scalar integer pointers: <code style={{ color: theme.cyan }}>top, bottom, left, right</code>. Zero
                  extra memory allocated!
                </div>
              </div>

              {/* Method Comparison Stamp */}
              <div
                style={{
                  padding: "12px 18px",
                  borderRadius: 8,
                  backgroundColor: theme.cardBg,
                  border: `1px solid rgba(248, 246, 240, 0.2)`,
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  fontFamily: fonts.mono,
                  fontSize: 14,
                }}
              >
                <div>
                  <span style={{ color: theme.chalkSub }}>Method 1:</span>{" "}
                  <span style={{ color: theme.warn }}>O(m × n) Space</span>
                </div>
                <div style={{ color: theme.gold, fontSize: 18 }}>➔</div>
                <div>
                  <span style={{ color: theme.chalkSub }}>Method 2:</span>{" "}
                  <span style={{ color: theme.emerald, fontWeight: 800 }}>O(1) Auxiliary Space 🏆</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* =====================================================================
          AUDIO & AUTHENTIC WORD-SYNC CAPTIONS (Y: 940..1024)
         ===================================================================== */}
      <Audio src={staticFile("audio/015/scence08.mp3")} />
      <Captions words={captionWords} />
    </div>
  );
};
