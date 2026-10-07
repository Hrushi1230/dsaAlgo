/**
 * Scene05WhyVisitedUnnecessary.tsx — Scene 05 · Why Visited Memory Is Unnecessary
 * Spiral Matrix (LeetCode 54) · Pattern 01 — Arrays & Hashing
 *
 * Implements the core geometric discovery of Method 2:
 * - 100% Kit Components: MeshGrid, RoughBox, Captions, ChalkboardBackground, ChalkFilters
 * - Total Duration: 1,362 frames @ 30fps (45.400s) strictly from sync/05-why-visited-unnecessary.json
 * - All 16 Anchors mapped from sync/05-why-visited-unnecessary.anchors.json
 * - Visual Highlights:
 *   - Outer 18 cells dim after Loop 1 traversal
 *   - Remaining 3x4 inner core illuminated with golden RoughBox
 *   - 4 Boundary Pointers (top=1, bottom=3, left=1, right=4) appear strictly on spoken cues
 *   - Memory compression diagram: 30 booleans (O(mn)) replaced by 4 integers (O(1) Space)
 *   - Zero-Collision compliant vertical distribution
 */

import React, { useMemo } from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Audio,
  staticFile,
} from "remotion";

import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme as baseTheme, fonts } from "../../../../kit/lib/theme";
import { EASE } from "../../../../kit/lib/anim";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { MeshGrid } from "../../../../kit/components/MeshGrid";
import { RoughBox } from "../../../../kit/components/RoughBox";
import syncData from "../sync/05-why-visited-unnecessary.json";

const theme = {
  ...baseTheme,
  gold: baseTheme.pivot,
  chalkSub: baseTheme.chalkDim,
  chalkBorder: baseTheme.cardBorder,
};

// ---------------------------------------------------------------------------
// 5x6 Master Matrix Values
// ---------------------------------------------------------------------------
const MATRIX_VALUES = [
  [ 1,  2,  3,  4,  5,  6],
  [ 7,  8,  9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
];

// Caption normalization
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => {
  let word = w.word;
  if (word === "1") word = "1";
  if (word === "2.") word = "2.";
  if (word.toLowerCase() === "method") word = "Method";
  if (word.toLowerCase() === "om") word = "O(m";
  return {
    word,
    start: w.start_ms / 1000,
    end: w.end_ms / 1000,
  };
});

export const Scene05WhyVisitedUnnecessary: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Grid dimensions
  const rows = 5;
  const cols = 6;
  const cellWidth = 104;
  const cellHeight = 82;
  const rulerWidth = 80;

  // Grid position: X: 120, Y: 150
  const gridLeft = 120;
  const gridTop = 150;

  // Outer cell check (18 cells)
  const isOuterCell = (r: number, c: number) => {
    return r === 0 || r === 4 || c === 0 || c === 5;
  };

  // Timing states from anchors
  const isOuterDimmed = frame >= 369;       // S05_AFTER_OUTER
  const isInnerGlow = frame >= 476;         // S05_SEE
  const isRectOutline = frame >= 519;       // S05_RECT
  const isBoundaryConcept = frame >= 926;   // S05_FOUR
  const showTop = frame >= 1018;            // S05_TOP
  const showBottom = frame >= 1039;         // S05_BOTTOM
  const showLeftRight = frame >= 1064;      // S05_LEFT_RIGHT
  const isReplacePhase = frame >= 1118;     // S05_REPLACE
  const isMethod2Phase = frame >= 1319;     // S05_METHOD2

  const topSpring = spring({ frame: frame - 1018, fps, config: { damping: 14, stiffness: 120 } });
  const bottomSpring = spring({ frame: frame - 1039, fps, config: { damping: 14, stiffness: 120 } });
  const leftRightSpring = spring({ frame: frame - 1064, fps, config: { damping: 14, stiffness: 120 } });

  return (
    <div
      style={{
        position: "relative",
        width: 1920,
        height: 1080,
        backgroundColor: theme.chalkboard,
        overflow: "hidden",
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      {/* =====================================================================
          CANONICAL TOP HEADER BAR (Y: 28..76)
         ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 28,
          left: 80,
          right: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: `1.5px solid rgba(248, 246, 240, 0.2)`,
          paddingBottom: 12,
          zIndex: 20,
        }}
      >
        {/* Left: Pattern Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "4px 12px",
            borderRadius: 6,
            backgroundColor: "rgba(60, 229, 167, 0.12)",
            border: `1px solid rgba(60, 229, 167, 0.35)`,
            fontFamily: fonts.mono,
            fontSize: 13,
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
            fontSize: 38,
            fontWeight: 700,
            color: theme.chalkText,
            letterSpacing: "0.5px",
            textShadow: "0 0 16px rgba(248, 246, 240, 0.3)",
          }}
        >
          Spiral Matrix — Why Visited Memory Is Unnecessary
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
            #015
          </span>
          <span
            style={{
              padding: "4px 12px",
              borderRadius: 6,
              backgroundColor: "rgba(255, 209, 102, 0.15)",
              border: `1px solid ${theme.pivot}`,
              color: theme.pivot,
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: "1.5px",
            }}
          >
            MEDIUM
          </span>
        </div>
      </div>

      {/* =====================================================================
          CENTER-LEFT STAGE: 5x6 MATRIX GRID (X: 120, Y: 150)
         ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: gridTop,
          left: gridLeft,
          zIndex: 10,
        }}
      >
        <MeshGrid
          rows={rows}
          cols={cols}
          cellWidth={cellWidth}
          cellHeight={cellHeight}
          stroke={theme.chalkText}
          strokeWidth={2.5}
          outerStrokeWidth={3.5}
          showColRulers={true}
          showRowRulers={true}
          rulerColor={theme.cyan}
          renderCell={({ row, col }) => {
            const val = MATRIX_VALUES[row][col];
            const isOuter = isOuterCell(row, col);

            let cellColor: string = theme.chalkText;
            let bgColor = "transparent";
            let opacity = 1;

            if (isOuter && isOuterDimmed) {
              opacity = 0.32;
              bgColor = "rgba(60, 229, 167, 0.08)";
              cellColor = theme.chalkDim;
            } else if (!isOuter && isInnerGlow) {
              bgColor = "rgba(255, 209, 102, 0.15)";
              cellColor = theme.gold;
            }

            return (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: bgColor,
                  borderRadius: 4,
                  position: "relative",
                  opacity,
                  transition: "opacity 0.2s ease",
                }}
              >
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 32,
                    fontWeight: 700,
                    color: cellColor,
                  }}
                >
                  {val}
                </span>

                {/* Outer visited checkmark */}
                {isOuter && isOuterDimmed && (
                  <span
                    style={{
                      position: "absolute",
                      top: 4,
                      right: 6,
                      fontSize: 12,
                      color: theme.good,
                    }}
                  >
                    ✓
                  </span>
                )}
              </div>
            );
          }}
        />

        {/* Golden RoughBox around inner 3x4 rectangle (rows 1..3, cols 1..4) */}
        {isRectOutline && (
          <div
            style={{
              position: "absolute",
              top: 36 + 1 * cellHeight,
              left: rulerWidth + 1 * cellWidth,
              width: 4 * cellWidth,
              height: 3 * cellHeight,
              pointerEvents: "none",
              zIndex: 25,
            }}
          >
            <RoughBox
              width={4 * cellWidth}
              height={3 * cellHeight}
              stroke={theme.gold}
              strokeWidth={3.5}
              seed={501}
            />
          </div>
        )}

        {/* ===================================================================
            FOUR BOUNDARY BRACKETS & LABELS (Anchors S05_TOP .. S05_LEFT_RIGHT)
           =================================================================== */}

        {/* TOP BOUNDARY (Above row 1, col 1..4) */}
        {showTop && (
          <div
            style={{
              position: "absolute",
              top: 36 + 1 * cellHeight - 34,
              left: rulerWidth + 1 * cellWidth + (4 * cellWidth) / 2 - 58,
              padding: "4px 14px",
              borderRadius: 6,
              backgroundColor: theme.cardBg,
              border: `1.5px solid ${theme.cyan}`,
              fontFamily: fonts.mono,
              fontSize: 15,
              fontWeight: 800,
              color: theme.cyan,
              letterSpacing: 1,
              zIndex: 30,
              boxShadow: "0 0 16px rgba(92, 225, 230, 0.4)",
            }}
          >
            top = 1 ↓
          </div>
        )}

        {/* BOTTOM BOUNDARY (Below row 3, col 1..4) */}
        {showBottom && (
          <div
            style={{
              position: "absolute",
              top: 36 + 4 * cellHeight + 6,
              left: rulerWidth + 1 * cellWidth + (4 * cellWidth) / 2 - 68,
              padding: "4px 14px",
              borderRadius: 6,
              backgroundColor: theme.cardBg,
              border: `1.5px solid ${theme.cyan}`,
              fontFamily: fonts.mono,
              fontSize: 15,
              fontWeight: 800,
              color: theme.cyan,
              letterSpacing: 1,
              zIndex: 30,
              boxShadow: "0 0 16px rgba(92, 225, 230, 0.4)",
            }}
          >
            ↑ bottom = 3
          </div>
        )}

        {/* LEFT BOUNDARY (Left of col 1, row 1..3) */}
        {showLeftRight && (
          <div
            style={{
              position: "absolute",
              top: 36 + 1 * cellHeight + (3 * cellHeight) / 2 - 16,
              left: rulerWidth + 1 * cellWidth - 92,
              padding: "4px 12px",
              borderRadius: 6,
              backgroundColor: theme.cardBg,
              border: `1.5px solid ${theme.cyan}`,
              fontFamily: fonts.mono,
              fontSize: 14,
              fontWeight: 800,
              color: theme.cyan,
              letterSpacing: 1,
              zIndex: 30,
              boxShadow: "0 0 16px rgba(92, 225, 230, 0.4)",
            }}
          >
            left=1 →
          </div>
        )}

        {/* RIGHT BOUNDARY (Right of col 4, row 1..3) */}
        {showLeftRight && (
          <div
            style={{
              position: "absolute",
              top: 36 + 1 * cellHeight + (3 * cellHeight) / 2 - 16,
              left: rulerWidth + 5 * cellWidth + 8,
              padding: "4px 12px",
              borderRadius: 6,
              backgroundColor: theme.cardBg,
              border: `1.5px solid ${theme.cyan}`,
              fontFamily: fonts.mono,
              fontSize: 14,
              fontWeight: 800,
              color: theme.cyan,
              letterSpacing: 1,
              zIndex: 30,
              boxShadow: "0 0 16px rgba(92, 225, 230, 0.4)",
            }}
          >
            ← right=4
          </div>
        )}
      </div>

      {/* =====================================================================
          LOWER-LEFT STAGE: SUBGRID INVARIANT MONITOR CARD (X: 120, Y: 620, W: 780, H: 175)
         ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 620,
          left: 120,
          width: 780,
          height: 175,
          zIndex: 10,
        }}
      >
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <RoughBox
            width={780}
            height={175}
            stroke={frame < 369 ? theme.chalkBorder : (frame < 1118 ? theme.gold : theme.good)}
            strokeWidth={2.2}
            seed={510}
          />
        </div>
        <div style={{ position: "relative", zIndex: 2, padding: "18px 24px" }}>
          {frame < 369 && (
            <div>
              <div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.cyan, letterSpacing: 1.5, marginBottom: 6 }}>
                METHOD 1 STATE TRACKING: 2D BOOLEAN ARRAY
              </div>
              <div style={{ fontFamily: fonts.display, fontSize: 20, fontWeight: 700, color: theme.chalkText, lineHeight: 1.3 }}>
                A boolean matrix <code style={{ color: theme.warn }}>visited[5][6]</code> tracks every single cell.
              </div>
              <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkDim, marginTop: 8 }}>
                Total 30 flags allocated • O(m × n) auxiliary memory cost
              </div>
            </div>
          )}

          {frame >= 369 && frame < 1118 && (
            <div>
              <div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.gold, letterSpacing: 1.5, marginBottom: 6 }}>
                GEOMETRIC INVARIANT: THE REMAINING UNVISITED CORE
              </div>
              <div style={{ fontFamily: fonts.display, fontSize: 20, fontWeight: 700, color: theme.chalkText, lineHeight: 1.3 }}>
                The unvisited cells ALWAYS form a single, contiguous rectangular subgrid!
              </div>
              <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.cyan, marginTop: 8 }}>
                Remaining: rows [1..3] × cols [1..4] = 12 cells (never fragmented into islands)
              </div>
            </div>
          )}

          {frame >= 1118 && (
            <div>
              <div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.good, letterSpacing: 1.5, marginBottom: 6 }}>
                METHOD 2 LEAP: 4 SCALAR BOUNDARIES REPLACE 2D MATRIX
              </div>
              <div style={{ fontFamily: fonts.display, fontSize: 20, fontWeight: 700, color: theme.chalkText, lineHeight: 1.3 }}>
                Representing the subgrid with <code style={{ color: theme.cyan }}>top, bottom, left, right</code> needs only 4 integers!
              </div>
              <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.good, marginTop: 8 }}>
                Auxiliary Space drops from O(m × n) to O(1) • 100% In-Place State
              </div>
            </div>
          )}
        </div>
      </div>

      {/* =====================================================================
          RIGHT STAGE: DYNAMIC INSIGHT CARDS (X: 980, Y: 150, W: 860, H: 660)
         ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 150,
          left: 980,
          width: 860,
          height: 660,
          zIndex: 15,
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
      >
        {/* CARD 1: METHOD 1 RECAP & EFFICIENCY VERDICT (F0..F368) */}
        {frame < 369 && (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 28,
            }}
          >
            <div
              style={{
                position: "relative",
                width: 860,
                height: 180,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                <RoughBox width={860} height={180} stroke={theme.good} strokeWidth={2.4} seed={502} />
              </div>
              <div style={{ position: "relative", zIndex: 2, padding: "20px 28px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: fonts.sans, fontSize: 14, fontWeight: 800, color: theme.good, letterSpacing: 1.5 }}>
                    ✅ METHOD 1 IS FULLY CORRECT
                  </span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.good, border: `1px solid ${theme.good}`, padding: "2px 8px", borderRadius: 4 }}>
                    PASSES ALL TESTS
                  </span>
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 32, fontWeight: 800, color: theme.good, margin: "6px 0" }}>
                  Time: O(m × n) — OPTIMAL
                </div>
                <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkText, opacity: 0.9 }}>
                  Since every cell in the matrix must be returned in the output list, touching all m × n cells is asymptotically optimal.
                </div>
              </div>
            </div>

            {/* Space Complexity Bottleneck */}
            {frame >= 203 && (
              <div
                style={{
                  position: "relative",
                  width: 860,
                  height: 220,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                  <RoughBox width={860} height={220} stroke={theme.warn} strokeWidth={2.4} seed={503} />
                </div>
                <div style={{ position: "relative", zIndex: 2, padding: "20px 28px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: fonts.sans, fontSize: 14, fontWeight: 800, color: theme.warn, letterSpacing: 1.5 }}>
                      ⚠️ THE EXTRA COST: VISITED MATRIX
                    </span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.warn, border: `1px solid ${theme.warn}`, padding: "2px 8px", borderRadius: 4 }}>
                      O(m × n) AUXILIARY SPACE
                    </span>
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 32, fontWeight: 800, color: theme.warn, margin: "6px 0" }}>
                    Space: O(m × n) Extra Allocation
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkText, opacity: 0.9 }}>
                    A full 2D boolean array of dimensions m × n (30 booleans here) is allocated just to remember whether a cell was already visited.
                  </div>
                  <div style={{ marginTop: 8, fontFamily: fonts.sans, fontSize: 13, color: theme.gold, fontWeight: 700 }}>
                    👉 Can we eliminate this entire boolean matrix?
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* CARD 2: THE GEOMETRIC RECTANGLE DISCOVERY (F369..F1117) */}
        {frame >= 369 && !isReplacePhase && (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 32,
            }}
          >
            <div
              style={{
                position: "relative",
                width: 860,
                height: 180,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                <RoughBox width={860} height={180} stroke={theme.gold} strokeWidth={2.4} seed={504} />
              </div>
              <div style={{ position: "relative", zIndex: 2, padding: "20px 28px" }}>
                <div style={{ fontFamily: fonts.sans, fontSize: 14, fontWeight: 800, color: theme.gold, letterSpacing: 1.5, marginBottom: 6 }}>
                  🔍 CORE GEOMETRIC OBSERVATION
                </div>
                <div style={{ fontFamily: fonts.display, fontSize: 24, fontWeight: 700, color: theme.chalkText, lineHeight: 1.35 }}>
                  "After processing the complete outer layer...
                  <br />
                  <span style={{ color: theme.gold }}>what remains is STILL a single rectangle!</span>"
                </div>
                <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.cyan, marginTop: 8 }}>
                  Original: 5 rows × 6 cols (30 cells) ➔ Remaining: 3 rows × 4 cols (12 cells)
                </div>
              </div>
            </div>

            {/* Lower Card: Paradigm Shift (F596..F925) */}
            {frame >= 596 && frame < 926 && (
              <div
                style={{
                  position: "relative",
                  width: 860,
                  height: 410,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                  <RoughBox width={860} height={410} stroke={theme.good} strokeWidth={2.4} seed={505} />
                </div>
                <div style={{ position: "relative", zIndex: 2, padding: "24px 28px" }}>
                  <div style={{ fontFamily: fonts.sans, fontSize: 14, fontWeight: 800, color: theme.good, letterSpacing: 1.5, marginBottom: 12 }}>
                    💡 THE ARCHITECTURAL SHIFT
                  </div>

                  <div style={{ fontFamily: fonts.display, fontSize: 22, fontWeight: 700, color: theme.chalkText, lineHeight: 1.4, marginBottom: 16 }}>
                    Instead of remembering every processed cell individually...
                    <br />
                    <span style={{ color: theme.good }}>we only need to track the active unprocessed rectangle!</span>
                  </div>

                  <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                    <div style={{ flex: 1, padding: "14px", border: `1.5px solid ${theme.warn}`, borderRadius: 8, textAlign: "center" }}>
                      <div style={{ fontFamily: fonts.sans, fontSize: 12, fontWeight: 800, color: theme.warn }}>METHOD 1 MEMORY</div>
                      <div style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.chalkText, margin: "4px 0" }}>visited[m][n]</div>
                      <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.warn }}>30 Booleans = O(m × n) ❌</div>
                    </div>

                    <div style={{ fontSize: 24, color: theme.good }}>➔</div>

                    <div style={{ flex: 1, padding: "14px", border: `1.5px solid ${theme.good}`, borderRadius: 8, textAlign: "center" }}>
                      <div style={{ fontFamily: fonts.sans, fontSize: 12, fontWeight: 800, color: theme.good }}>METHOD 2 GOAL</div>
                      <div style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.good, fontWeight: 800, margin: "4px 0" }}>4 Boundaries</div>
                      <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.good }}>4 Integers = O(1) SPACE! ✅</div>
                    </div>
                  </div>

                  <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText, opacity: 0.85, marginTop: 16, lineHeight: 1.4 }}>
                    • The unvisited cells never break into scattered islands. They always form a clean, connected rectangular subgrid!
                  </div>
                </div>
              </div>
            )}

            {/* Lower Card: Four Boundaries Concept (F926..F1117) */}
            {isBoundaryConcept && (
              <div
                style={{
                  position: "relative",
                  width: 860,
                  height: 410,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                  <RoughBox width={860} height={410} stroke={theme.cyan} strokeWidth={2.4} seed={507} />
                </div>
                <div style={{ position: "relative", zIndex: 2, padding: "24px 28px" }}>
                  <div style={{ fontFamily: fonts.sans, fontSize: 14, fontWeight: 800, color: theme.cyan, letterSpacing: 1.5, marginBottom: 12 }}>
                    📐 A RECTANGLE NEEDS ONLY 4 BOUNDARIES
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, marginBottom: 16 }}>
                    {/* top */}
                    {showTop ? (
                      <div
                        style={{
                          padding: "12px 16px",
                          borderRadius: 8,
                          border: `1.5px solid ${theme.cyan}`,
                          transform: `scale(${interpolate(topSpring, [0, 1], [0.85, 1])})`,
                          opacity: topSpring,
                          boxShadow: "0 0 16px rgba(92, 225, 230, 0.3)",
                        }}
                      >
                        <div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 800, color: theme.cyan }}>top = 1</div>
                        <div style={{ fontFamily: fonts.sans, fontSize: 12, color: theme.chalkText, opacity: 0.9 }}>First unprocessed row</div>
                      </div>
                    ) : (
                      <div
                        style={{
                          padding: "12px 16px",
                          borderRadius: 8,
                          border: `1.5px dashed rgba(248, 246, 240, 0.2)`,
                          opacity: 0.5,
                        }}
                      >
                        <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.chalkDim }}>top = ...</div>
                        <div style={{ fontFamily: fonts.sans, fontSize: 12, color: theme.chalkDim }}>Awaiting cue</div>
                      </div>
                    )}

                    {/* bottom */}
                    {showBottom ? (
                      <div
                        style={{
                          padding: "12px 16px",
                          borderRadius: 8,
                          border: `1.5px solid ${theme.cyan}`,
                          transform: `scale(${interpolate(bottomSpring, [0, 1], [0.85, 1])})`,
                          opacity: bottomSpring,
                          boxShadow: "0 0 16px rgba(92, 225, 230, 0.3)",
                        }}
                      >
                        <div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 800, color: theme.cyan }}>bottom = 3</div>
                        <div style={{ fontFamily: fonts.sans, fontSize: 12, color: theme.chalkText, opacity: 0.9 }}>Last unprocessed row</div>
                      </div>
                    ) : (
                      <div
                        style={{
                          padding: "12px 16px",
                          borderRadius: 8,
                          border: `1.5px dashed rgba(248, 246, 240, 0.2)`,
                          opacity: 0.5,
                        }}
                      >
                        <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.chalkDim }}>bottom = ...</div>
                        <div style={{ fontFamily: fonts.sans, fontSize: 12, color: theme.chalkDim }}>Awaiting cue</div>
                      </div>
                    )}

                    {/* left */}
                    {showLeftRight ? (
                      <div
                        style={{
                          padding: "12px 16px",
                          borderRadius: 8,
                          border: `1.5px solid ${theme.cyan}`,
                          transform: `scale(${interpolate(leftRightSpring, [0, 1], [0.85, 1])})`,
                          opacity: leftRightSpring,
                          boxShadow: "0 0 16px rgba(92, 225, 230, 0.3)",
                        }}
                      >
                        <div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 800, color: theme.cyan }}>left = 1</div>
                        <div style={{ fontFamily: fonts.sans, fontSize: 12, color: theme.chalkText, opacity: 0.9 }}>First unprocessed col</div>
                      </div>
                    ) : (
                      <div
                        style={{
                          padding: "12px 16px",
                          borderRadius: 8,
                          border: `1.5px dashed rgba(248, 246, 240, 0.2)`,
                          opacity: 0.5,
                        }}
                      >
                        <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.chalkDim }}>left = ...</div>
                        <div style={{ fontFamily: fonts.sans, fontSize: 12, color: theme.chalkDim }}>Awaiting cue</div>
                      </div>
                    )}

                    {/* right */}
                    {showLeftRight ? (
                      <div
                        style={{
                          padding: "12px 16px",
                          borderRadius: 8,
                          border: `1.5px solid ${theme.cyan}`,
                          transform: `scale(${interpolate(leftRightSpring, [0, 1], [0.85, 1])})`,
                          opacity: leftRightSpring,
                          boxShadow: "0 0 16px rgba(92, 225, 230, 0.3)",
                        }}
                      >
                        <div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 800, color: theme.cyan }}>right = 4</div>
                        <div style={{ fontFamily: fonts.sans, fontSize: 12, color: theme.chalkText, opacity: 0.9 }}>Last unprocessed col</div>
                      </div>
                    ) : (
                      <div
                        style={{
                          padding: "12px 16px",
                          borderRadius: 8,
                          border: `1.5px dashed rgba(248, 246, 240, 0.2)`,
                          opacity: 0.5,
                        }}
                      >
                        <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.chalkDim }}>right = ...</div>
                        <div style={{ fontFamily: fonts.sans, fontSize: 12, color: theme.chalkDim }}>Awaiting cue</div>
                      </div>
                    )}
                  </div>

                  <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkText, lineHeight: 1.5 }}>
                    • Instead of tracking all 30 cells individually, we can represent the <em>entire remaining problem</em> using just these <strong>4 integers</strong>!
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* CARD 3: THE MEMORY COMPRESSION & METHOD 2 DECLARATION (F1118+) */}
        {isReplacePhase && (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 28,
            }}
          >
            {/* Memory Transformation Card */}
            <div
              style={{
                position: "relative",
                width: 860,
                height: 360,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                <RoughBox width={860} height={360} stroke={theme.good} strokeWidth={2.4} seed={506} />
              </div>
              <div style={{ position: "relative", zIndex: 2, padding: "26px 28px" }}>
                <div style={{ fontFamily: fonts.sans, fontSize: 14, fontWeight: 800, color: theme.good, letterSpacing: 1.5, marginBottom: 14 }}>
                  ⚡ REPRESENTATION COMPRESSION: O(m × n) ➔ O(1)
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 50px 1fr", alignItems: "center", gap: 14, marginBottom: 18 }}>
                  {/* Left: Visited Matrix Rejection */}
                  <div
                    style={{
                      padding: "16px",
                      border: `1.5px solid ${theme.warn}`,
                      borderRadius: 8,
                      textAlign: "center",
                      position: "relative",
                    }}
                  >
                    <div style={{ fontFamily: fonts.sans, fontSize: 13, fontWeight: 800, color: theme.warn }}>
                      METHOD 1
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.chalkText, margin: "6px 0" }}>
                      visited[5][6]
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.warn, fontWeight: 700 }}>
                      30 Booleans = O(m × n)
                    </div>
                    {/* Red Strikethrough Line */}
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: 10,
                        right: 10,
                        height: 3,
                        backgroundColor: theme.warn,
                        transform: "rotate(-12deg)",
                      }}
                    />
                  </div>

                  {/* Center arrow */}
                  <div style={{ textAlign: "center", fontSize: 28, color: theme.gold }}>➔</div>

                  {/* Right: 4 Boundary Variables */}
                  <div
                    style={{
                      padding: "16px",
                      border: `2px solid ${theme.good}`,
                      borderRadius: 8,
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontFamily: fonts.sans, fontSize: 13, fontWeight: 800, color: theme.good }}>
                      METHOD 2
                    </div>
                    <div style={{ fontFamily: fonts.code, fontSize: 16, color: theme.chalkText, margin: "6px 0" }}>
                      top, bottom, left, right
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.good, fontWeight: 800 }}>
                      4 Integers = O(1) SPACE! 🎉
                    </div>
                  </div>
                </div>

                <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkText, lineHeight: 1.5 }}>
                  • We replace an entire 2D allocation with 4 simple scalar integer pointers.
                  <br />
                  • As each boundary edge is traversed, we simply shrink that boundary inward!
                </div>
              </div>
            </div>

            {/* Method 2 Declaration Card (F1319+) */}
            {isMethod2Phase && (
              <div
                style={{
                  position: "relative",
                  width: 860,
                  height: 220,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  boxShadow: "0 0 32px rgba(255, 209, 102, 0.35)",
                }}
              >
                <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                  <RoughBox width={860} height={220} stroke={theme.gold} strokeWidth={3} seed={507} />
                </div>
                <div style={{ position: "relative", zIndex: 2, padding: "20px 28px", textAlign: "center" }}>
                  <div style={{ fontFamily: fonts.sans, fontSize: 14, fontWeight: 800, color: theme.gold, letterSpacing: 2, marginBottom: 8 }}>
                    🌟 WELCOME TO THE OPTIMAL APPROACH
                  </div>
                  <div style={{ fontFamily: fonts.display, fontSize: 32, fontWeight: 800, color: theme.chalkText, marginBottom: 8 }}>
                    Method 2 — Shrinking Boundary Pointers
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 16, color: theme.cyan, fontWeight: 600 }}>
                    O(m × n) Optimal Time • <span style={{ color: theme.good, fontWeight: 800 }}>O(1) Auxiliary Space</span> • No Extra Memory
                  </div>
                  <div style={{ marginTop: 12, fontFamily: fonts.code, fontSize: 14, color: theme.gold }}>
                    👉 Up Next: The Invariants of the 4 Boundaries & Full Simulation Trace
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Audio */}
      <Audio src={staticFile("audio/015/scence05.mp3")} />

      {/* Captions */}
      <Captions words={captionWords} />
    </div>
  );
};
