import React, { useMemo } from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring, Audio, staticFile } from "remotion";
import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme as baseTheme, fonts } from "../../../../kit/lib/theme";
import { RoughBox } from "../../../../kit/components/RoughBox";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";

// Import word-level sync JSON for Scene 07
import syncData from "../sync/07-method2-trace.json";

const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

const theme = {
  ...baseTheme,
  gold: baseTheme.pivot,
  chalkSub: baseTheme.chalkDim,
  chalkBorder: baseTheme.cardBorder,
};

export const Scene07Method2Trace: React.FC = () => {
  const frame = useCurrentFrame();
  const fps = 30;

  // Master 5x6 Matrix Data
  const matrix = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
  ];

  const numRows = 5;
  const numCols = 6;
  const cellWidth = 92;
  const cellHeight = 72;
  const rulerWidth = 75;

  // Boundary state evolution strictly locked to audio timestamps
  // Top: starts 0, moves to 1 at F513, to 2 at F2449, to 3 at F4391
  const top = frame < 513 ? 0 : frame < 2449 ? 1 : frame < 4391 ? 2 : 3;

  // Bottom: starts 4, moves to 3 at F1153, to 2 at F3025
  const bottom = frame < 1153 ? 4 : frame < 3025 ? 3 : 2;

  // Left: starts 0, moves to 1 at F1812, to 2 at F3718
  const left = frame < 1812 ? 0 : frame < 3718 ? 1 : 2;

  // Right: starts 5, moves to 4 at F735, to 3 at F2841
  const right = frame < 735 ? 5 : frame < 2841 ? 4 : 3;

  // Check if rectangle is collapsed
  const isCollapsed = top > bottom || left > right;

  // Progressive cell addition to answer list
  const processedCells = useMemo(() => {
    const list: number[] = [];

    // Round 1: Top edge (1..6) - F294..F406
    if (frame >= 300) list.push(1);
    if (frame >= 320) list.push(2);
    if (frame >= 340) list.push(3);
    if (frame >= 360) list.push(4);
    if (frame >= 380) list.push(5);
    if (frame >= 397) list.push(6);

    // Round 1: Right edge (12, 18, 24, 30) - F697..F734
    if (frame >= 705) list.push(12);
    if (frame >= 715) list.push(18);
    if (frame >= 725) list.push(24);
    if (frame >= 734) list.push(30);

    // Round 1: Bottom edge (29, 28, 27, 26, 25) - F1129..F1152
    if (frame >= 1133) list.push(29);
    if (frame >= 1138) list.push(28);
    if (frame >= 1143) list.push(27);
    if (frame >= 1148) list.push(26);
    if (frame >= 1152) list.push(25);

    // Round 1: Left edge (19, 13, 7) - F1585..F1714
    if (frame >= 1620) list.push(19);
    if (frame >= 1660) list.push(13);
    if (frame >= 1700) list.push(7);

    // Round 2: Top edge (8, 9, 10, 11) - F2241..F2448
    if (frame >= 2290) list.push(8);
    if (frame >= 2340) list.push(9);
    if (frame >= 2390) list.push(10);
    if (frame >= 2430) list.push(11);

    // Round 2: Right edge (17, 23) - F2720..F2840
    if (frame >= 2760) list.push(17);
    if (frame >= 2820) list.push(23);

    // Round 2: Bottom edge (22, 21, 20) - F2994..F3024
    if (frame >= 3000) list.push(22);
    if (frame >= 3012) list.push(21);
    if (frame >= 3024) list.push(20);

    // Round 2: Left edge (14) - F3546..F3685
    if (frame >= 3600) list.push(14);

    // Round 3: Top edge (15, 16) - F4244..F4358
    if (frame >= 4290) list.push(15);
    if (frame >= 4340) list.push(16);

    return list;
  }, [frame]);

  const processedSet = useMemo(() => new Set(processedCells), [processedCells]);

  // Current active edge description
  const currentPhase = useMemo(() => {
    if (frame < 294) return { title: "Initialization", desc: "Setting boundaries to full matrix", color: theme.cyan };
    if (frame < 513) return { title: "Round 1 — Top Edge", desc: "Traversing row top (0) from left (0) to right (5)", color: theme.cyan };
    if (frame < 735) return { title: "Round 1 — Right Edge", desc: "Traversing col right (5) from top (1) to bottom (4)", color: theme.gold };
    if (frame < 1153) return { title: "Round 1 — Bottom Edge", desc: "Traversing row bottom (4) from right (4) to left (0)", color: theme.purple };
    if (frame < 1812) return { title: "Round 1 — Left Edge", desc: "Traversing col left (0) from bottom (3) to top (1)", color: theme.emerald };
    if (frame < 2052) return { title: "Round 1 Complete", desc: "Outer perimeter processed! Active box shrinks to 3×4", color: theme.good };
    if (frame < 2449) return { title: "Round 2 — Top Edge", desc: "Traversing row top (1) from left (1) to right (4)", color: theme.cyan };
    if (frame < 2841) return { title: "Round 2 — Right Edge", desc: "Traversing col right (4) from top (2) to bottom (3)", color: theme.gold };
    if (frame < 3025) return { title: "Round 2 — Bottom Edge", desc: "Traversing row bottom (3) from right (3) to left (1)", color: theme.purple };
    if (frame < 3718) return { title: "Round 2 — Left Edge", desc: "Traversing col left (1) for single remaining cell (14)", color: theme.emerald };
    if (frame < 4244) return { title: "Degenerate Case", desc: "1 row remains (15, 16). top == bottom == 2", color: theme.warn };
    if (frame < 4391) return { title: "Round 3 — Final Top Edge", desc: "Traversing row 2 from left (2) to right (3)", color: theme.cyan };
    return { title: "Simulation Complete", desc: "top (3) > bottom (2) ➔ Invariant terminates loop! All 30 cells collected", color: theme.good };
  }, [frame]);

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
          <span style={{ color: theme.emerald }}>●</span> 01 · ARRAYS & HASHING
        </div>

        {/* Center: Problem Title */}
        <div
          style={{
            fontFamily: fonts.display,
            fontSize: 28,
            fontWeight: 700,
            color: theme.chalkText,
            letterSpacing: "0.5px",
          }}
        >
          Spiral Matrix — <span style={{ color: theme.cyan }}>Method 2: Full Shrinking Boundary Simulation</span>
        </div>

        {/* Right: LeetCode Difficulty Badge */}
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
          LEFT STAGE: MASTER MATRIX WITH SHRINKING BOUNDARIES (X: 110, Y: 130)
         ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 130,
          left: 110,
          width: 780,
          height: 650,
          zIndex: 10,
        }}
      >
        {/* Column Header Rulers */}
        <div
          style={{
            display: "flex",
            marginLeft: rulerWidth,
            marginBottom: 6,
          }}
        >
          {Array.from({ length: numCols }).map((_, c) => {
            const isColInActive = !isCollapsed && c >= left && c <= right;
            return (
              <div
                key={`col-${c}`}
                style={{
                  width: cellWidth,
                  textAlign: "center",
                  fontFamily: fonts.mono,
                  fontSize: 14,
                  fontWeight: 700,
                  color: isColInActive ? theme.gold : theme.cyan,
                  opacity: isColInActive ? 1 : 0.45,
                }}
              >
                col [{c}]
              </div>
            );
          })}
        </div>

        {/* Rows with Row Rulers and Cells */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {matrix.map((row, r) => {
            const isRowInActive = !isCollapsed && r >= top && r <= bottom;
            return (
              <div key={`row-${r}`} style={{ display: "flex", alignItems: "center" }}>
                {/* Row Label */}
                <div
                  style={{
                    width: rulerWidth,
                    textAlign: "right",
                    paddingRight: 14,
                    fontFamily: fonts.mono,
                    fontSize: 14,
                    fontWeight: 700,
                    color: isRowInActive ? theme.gold : theme.cyan,
                    opacity: isRowInActive ? 1 : 0.45,
                    lineHeight: 1.1,
                  }}
                >
                  <div>row</div>
                  <div>[{r}]</div>
                </div>

                {/* Cells in Row */}
                <div style={{ display: "flex" }}>
                  {row.map((val, c) => {
                    const isProcessed = processedSet.has(val);
                    const isJustAdded = processedCells[processedCells.length - 1] === val;
                    const isInActiveBox = !isCollapsed && r >= top && r <= bottom && c >= left && c <= right;

                    let cellBg = "transparent";
                    let cellBorder: string = "rgba(248, 246, 240, 0.25)";
                    let textColor: string = theme.chalkText;
                    let textWeight = 600;
                    let cellOpacity = 1;

                    if (isJustAdded) {
                      cellBg = "rgba(255, 230, 109, 0.35)";
                      cellBorder = theme.gold;
                      textColor = theme.gold;
                      textWeight = 900;
                    } else if (isProcessed) {
                      cellBg = "rgba(60, 229, 167, 0.08)";
                      cellBorder = "rgba(60, 229, 167, 0.25)";
                      textColor = theme.emerald;
                      cellOpacity = 0.5;
                    } else if (isInActiveBox) {
                      cellBg = "rgba(255, 255, 255, 0.04)";
                      textColor = theme.chalkText;
                      textWeight = 700;
                    }

                    return (
                      <div
                        key={`cell-${r}-${c}`}
                        style={{
                          width: cellWidth,
                          height: cellHeight,
                          border: `1.5px solid ${cellBorder}`,
                          backgroundColor: cellBg,
                          opacity: cellOpacity,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: fonts.mono,
                          fontSize: 22,
                          fontWeight: textWeight,
                          color: textColor,
                          position: "relative",
                          transition: "all 0.15s ease",
                        }}
                      >
                        {val}

                        {/* Processed Checkmark */}
                        {isProcessed && (
                          <div
                            style={{
                              position: "absolute",
                              top: 4,
                              right: 6,
                              fontSize: 10,
                              color: theme.good,
                            }}
                          >
                            ✓
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* ACTIVE RECTANGLE GOLDEN BORDER (Tracks [top..bottom][left..right]) */}
        {!isCollapsed && (
          <div
            style={{
              position: "absolute",
              top: 32 + top * cellHeight - 3,
              left: rulerWidth + left * cellWidth - 3,
              width: (right - left + 1) * cellWidth + 6,
              height: (bottom - top + 1) * cellHeight + 6,
              pointerEvents: "none",
              zIndex: 15,
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <RoughBox
              width={(right - left + 1) * cellWidth + 6}
              height={(bottom - top + 1) * cellHeight + 6}
              stroke={theme.gold}
              strokeWidth={3}
              seed={701}
            />
          </div>
        )}

        {/* DYNAMIC SHRINKING BOUNDARY MARKERS (Always outside grid to ensure zero collision) */}
        {!isCollapsed && (
          <>
            {/* TOP POINTER: Sits cleanly ABOVE column header rulers */}
            <div
              style={{
                position: "absolute",
                top: -46,
                left: rulerWidth + left * cellWidth + ((right - left + 1) * cellWidth) / 2 - 58,
                padding: "4px 14px",
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
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              top = {top} ↓
            </div>

            {/* BOTTOM POINTER: Sits cleanly BELOW matrix cells */}
            <div
              style={{
                position: "absolute",
                top: 32 + numRows * cellHeight + 14,
                left: rulerWidth + left * cellWidth + ((right - left + 1) * cellWidth) / 2 - 68,
                padding: "4px 14px",
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
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              ↑ bottom = {bottom}
            </div>

            {/* LEFT POINTER: Sits cleanly LEFT of row rulers */}
            <div
              style={{
                position: "absolute",
                top: 32 + top * cellHeight + ((bottom - top + 1) * cellHeight) / 2 - 16,
                left: -102,
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
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              left={left} →
            </div>

            {/* RIGHT POINTER: Sits cleanly RIGHT of col 5 */}
            <div
              style={{
                position: "absolute",
                top: 32 + top * cellHeight + ((bottom - top + 1) * cellHeight) / 2 - 16,
                left: rulerWidth + numCols * cellWidth + 12,
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
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              ← right={right}
            </div>
          </>
        )}
      </div>

      {/* =====================================================================
          RIGHT STAGE: SIMULATION MONITOR & RESULT STREAM (X: 960, Y: 130)
         ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 130,
          left: 960,
          width: 880,
          height: 670,
          zIndex: 15,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {/* CARD 1: CURRENT ACTIVE BOUNDARIES MONITOR (H: 150) */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 150,
            backgroundColor: theme.cardBg,
            borderRadius: 10,
            padding: "18px 24px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <RoughBox width={880} height={150} stroke={theme.cyan} strokeWidth={2.2} seed={702} />
          <div style={{ position: "absolute", top: 20, left: 30, right: 30 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
              <div style={{ fontFamily: fonts.sans, fontSize: 13, fontWeight: 800, color: theme.cyan, letterSpacing: 1.5 }}>
                📐 BOUNDARY POINTER STATE
              </div>
              <div style={{ fontFamily: fonts.mono, fontSize: 13, color: isCollapsed ? theme.warn : theme.good, fontWeight: 700 }}>
                {isCollapsed ? "ACTIVE REGION: COLLAPSED (STOP)" : `ACTIVE SUBGRID: ${Math.max(0, bottom - top + 1)} rows × ${Math.max(0, right - left + 1)} cols`}
              </div>
            </div>

            {/* 4 Boundary Badges */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
              <div style={{ padding: "8px 12px", backgroundColor: "rgba(92, 225, 230, 0.15)", border: `1.5px solid ${theme.cyan}`, borderRadius: 6, textAlign: "center" }}>
                <div style={{ fontFamily: fonts.mono, fontSize: 12, color: "rgba(248, 246, 240, 0.6)" }}>TOP ROW</div>
                <div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 800, color: theme.cyan }}>top = {top}</div>
              </div>

              <div style={{ padding: "8px 12px", backgroundColor: "rgba(92, 225, 230, 0.15)", border: `1.5px solid ${theme.cyan}`, borderRadius: 6, textAlign: "center" }}>
                <div style={{ fontFamily: fonts.mono, fontSize: 12, color: "rgba(248, 246, 240, 0.6)" }}>BOTTOM ROW</div>
                <div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 800, color: theme.cyan }}>bottom = {bottom}</div>
              </div>

              <div style={{ padding: "8px 12px", backgroundColor: "rgba(92, 225, 230, 0.15)", border: `1.5px solid ${theme.cyan}`, borderRadius: 6, textAlign: "center" }}>
                <div style={{ fontFamily: fonts.mono, fontSize: 12, color: "rgba(248, 246, 240, 0.6)" }}>LEFT COL</div>
                <div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 800, color: theme.cyan }}>left = {left}</div>
              </div>

              <div style={{ padding: "8px 12px", backgroundColor: "rgba(92, 225, 230, 0.15)", border: `1.5px solid ${theme.cyan}`, borderRadius: 6, textAlign: "center" }}>
                <div style={{ fontFamily: fonts.mono, fontSize: 12, color: "rgba(248, 246, 240, 0.6)" }}>RIGHT COL</div>
                <div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 800, color: theme.cyan }}>right = {right}</div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2: CURRENT PHASE & SWEEP STATUS (H: 150) */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 150,
            backgroundColor: theme.cardBg,
            borderRadius: 10,
            padding: "18px 24px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <RoughBox width={880} height={150} stroke={currentPhase.color} strokeWidth={2.2} seed={703} />
          <div style={{ position: "absolute", top: 22, left: 30, right: 30 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <span style={{ fontSize: 16 }}>⚡</span>
              <span style={{ fontFamily: fonts.sans, fontSize: 13, fontWeight: 800, color: currentPhase.color, letterSpacing: 1.5 }}>
                {currentPhase.title.toUpperCase()}
              </span>
            </div>
            <div style={{ fontFamily: fonts.display, fontSize: 22, fontWeight: 700, color: theme.chalkText, lineHeight: 1.35, marginBottom: 8 }}>
              {currentPhase.desc}
            </div>
            <div style={{ display: "flex", gap: 20 }}>
              <div style={{ fontFamily: fonts.mono, fontSize: 13, color: top <= bottom ? theme.good : theme.warn, fontWeight: 700 }}>
                • Row Guard: {top <= bottom ? `top(${top}) <= bottom(${bottom}) ✓ VALID` : `top(${top}) > bottom(${bottom}) ✕ COLLAPSED`}
              </div>
              <div style={{ fontFamily: fonts.mono, fontSize: 13, color: left <= right ? theme.good : theme.warn, fontWeight: 700 }}>
                • Col Guard: {left <= right ? `left(${left}) <= right(${right}) ✓ VALID` : `left(${left}) > right(${right}) ✕ COLLAPSED`}
              </div>
            </div>
          </div>
        </div>

        {/* CARD 3: COLLECTED ANSWER LIST (O(m × n) OUTPUT ARRAY) (H: 330) */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 330,
            backgroundColor: theme.cardBg,
            borderRadius: 10,
            padding: "20px 26px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <RoughBox width={880} height={330} stroke={theme.gold} strokeWidth={2.4} seed={704} />
          <div style={{ position: "absolute", top: 26, left: 32, right: 32 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 18 }}>📋</span>
                <span style={{ fontFamily: fonts.sans, fontSize: 14, fontWeight: 800, color: theme.gold, letterSpacing: 1.5 }}>
                  COLLECTED RESULT ARRAY (answer)
                </span>
              </div>
              <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: processedCells.length === 30 ? theme.good : theme.cyan }}>
                [{processedCells.length} / 30 cells]
              </div>
            </div>

            {/* Collected Cells Grid Flow */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                maxHeight: 220,
                alignContent: "flex-start",
              }}
            >
              {processedCells.map((val, idx) => {
                const isLatest = idx === processedCells.length - 1;
                return (
                  <div
                    key={`ans-${val}`}
                    style={{
                      width: 44,
                      height: 38,
                      borderRadius: 6,
                      backgroundColor: isLatest ? "rgba(255, 230, 109, 0.35)" : "rgba(60, 229, 167, 0.15)",
                      border: `1.5px solid ${isLatest ? theme.gold : theme.good}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: fonts.mono,
                      fontSize: 16,
                      fontWeight: 800,
                      color: isLatest ? theme.gold : theme.good,
                      boxShadow: isLatest ? "0 0 12px rgba(255, 230, 109, 0.6)" : "none",
                      transition: "all 0.15s ease",
                    }}
                  >
                    {val}
                  </div>
                );
              })}
            </div>

            {/* Final Completion Summary Banner */}
            {processedCells.length === 30 && (
              <div
                style={{
                  marginTop: 14,
                  padding: "8px 14px",
                  borderRadius: 6,
                  backgroundColor: "rgba(60, 229, 167, 0.2)",
                  border: `1.5px solid ${theme.good}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ fontFamily: fonts.sans, fontSize: 13, fontWeight: 800, color: theme.good }}>
                  🎉 PERFECT SPIRAL COMPLETE: All 30 values collected without extra memory!
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.chalkText }}>
                  Auxiliary Space: O(1)
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* =====================================================================
          AUDIO & WORD-SYNC CAPTIONS (Bottom Y: 980)
         ===================================================================== */}
      <Audio src={staticFile("audio/015/scence07.mp3")} />
      <Captions words={captionWords} />
    </div>
  );
};
