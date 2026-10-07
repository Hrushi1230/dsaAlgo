import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring, Audio, staticFile } from "remotion";
import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme as baseTheme, fonts } from "../../../../kit/lib/theme";
import { RoughBox } from "../../../../kit/components/RoughBox";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";

// Import word-level sync JSON for Scene 06
import syncData from "../sync/06-method2-idea.json";

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

export const Scene06Method2Idea: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Master 5x6 Matrix Data (fixed coordinates & values)
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
  const rulerWidth = 70;

  // Exact anchor frame gates from sync/06-method2-idea.anchors.json
  const showScaffold = frame >= 83;          // S06_INIT
  const showTop0 = frame >= 133;             // S06_TOP0
  const showBottom4 = frame >= 181;          // S06_BOTTOM4
  const showLeft0 = frame >= 225;            // S06_LEFT0
  const showRight5 = frame >= 280;           // S06_RIGHT5
  const showActiveRect = frame >= 347;       // S06_ACTIVE_RECT
  const showInvariant = frame >= 484;        // S06_INVARIANT
  const showOutside = frame >= 594;          // S06_OUTSIDE
  const showInside = frame >= 764;           // S06_INSIDE
  const showPeel = frame >= 1090;            // S06_PEEL
  const showEdgeOrder = frame >= 1147;       // S06_EDGE_ORDER
  const showShrink = frame >= 1269;          // S06_SHRINK
  const showRule = frame >= 1400;            // S06_RULE
  const showValidate = frame >= 1471;        // S06_VALIDATE
  const showSingle = frame >= 1693;          // S06_SINGLE
  const showTraceBridge = frame >= 1858;      // S06_TRACE

  const topSpring = spring({ frame: frame - 133, fps, config: { damping: 14, stiffness: 120 } });
  const bottomSpring = spring({ frame: frame - 181, fps, config: { damping: 14, stiffness: 120 } });
  const leftSpring = spring({ frame: frame - 225, fps, config: { damping: 14, stiffness: 120 } });
  const rightSpring = spring({ frame: frame - 280, fps, config: { damping: 14, stiffness: 120 } });

  // Active edge timing during F1147..F1268
  const isTopEdgeActive = frame >= 1147 && frame < 1175;
  const isRightEdgeActive = frame >= 1175 && frame < 1205;
  const isBottomEdgeActive = frame >= 1205 && frame < 1235;
  const isLeftEdgeActive = frame >= 1235 && frame < 1269;

  // Spring animation for active rectangle box
  const rectSpring = spring({
    frame: frame - 347,
    fps,
    config: { damping: 14, stiffness: 100 },
  });

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
          Spiral Matrix — <span style={{ color: theme.cyan }}>Method 2: Boundary Traversal & Core Invariant</span>
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
          LEFT STAGE: MASTER MATRIX WITH BOUNDARIES & INVARIANT (X: 120, Y: 175)
         ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 175,
          left: 120,
          width: 780,
          height: 670,
          zIndex: 10,
        }}
      >
        {/* Upper Zone: 5x6 Matrix with Rulers */}
        <div style={{ position: "relative", marginTop: 24 }}>
          {/* Column Header Rulers */}
          <div
            style={{
              display: "flex",
              marginLeft: rulerWidth,
              marginBottom: 6,
            }}
          >
            {Array.from({ length: numCols }).map((_, c) => {
              const isColActive =
                (isRightEdgeActive && c === 5) || (isLeftEdgeActive && c === 0);
              return (
                <div
                  key={`col-${c}`}
                  style={{
                    width: cellWidth,
                    textAlign: "center",
                    fontFamily: fonts.mono,
                    fontSize: 14,
                    fontWeight: 700,
                    color: isColActive ? theme.gold : theme.cyan,
                    opacity: 0.9,
                    transition: "color 0.2s ease",
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
              const isRowActive =
                (isTopEdgeActive && r === 0) || (isBottomEdgeActive && r === 4);
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
                      color: isRowActive ? theme.gold : theme.cyan,
                      opacity: 0.9,
                      lineHeight: 1.1,
                    }}
                  >
                    <div>row</div>
                    <div>[{r}]</div>
                  </div>

                  {/* Cells in Row */}
                  <div style={{ display: "flex" }}>
                    {row.map((val, c) => {
                      const isOuter = r === 0 || r === 4 || c === 0 || c === 5;
                      const isInner = !isOuter;

                      // Edge highlight during F1147..F1268
                      const isEdgeHighlighted =
                        (isTopEdgeActive && r === 0) ||
                        (isRightEdgeActive && c === 5) ||
                        (isBottomEdgeActive && r === 4) ||
                        (isLeftEdgeActive && c === 0);

                      // Background color styling
                      let cellBg = "transparent";
                      let cellBorder: string = "rgba(248, 246, 240, 0.25)";
                      let textColor: string = theme.chalkText;
                      let textWeight = 600;

                      if (isEdgeHighlighted) {
                        cellBg = "rgba(255, 230, 109, 0.25)";
                        cellBorder = theme.gold;
                        textColor = theme.gold;
                        textWeight = 800;
                      } else if (showInside && isInner && frame < 1090) {
                        cellBg = "rgba(255, 230, 109, 0.15)";
                        textColor = theme.gold;
                      } else if (showOutside && isOuter && frame < 1090) {
                        cellBg = "rgba(60, 229, 167, 0.12)";
                        textColor = theme.emerald;
                      }

                      return (
                        <div
                          key={`cell-${r}-${c}`}
                          style={{
                            width: cellWidth,
                            height: cellHeight,
                            border: `1.5px solid ${cellBorder}`,
                            backgroundColor: cellBg,
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

                          {/* Outside Processed Checkmark indicator during F594..F1089 */}
                          {showOutside && isOuter && frame < 1090 && (
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

          {/* ACTIVE RECTANGLE GOLDEN BORDER (F347..F1089) */}
          {showActiveRect && frame < 1090 && (
            <div
              style={{
                position: "absolute",
                top: 30,
                left: rulerWidth - 4,
                width: numCols * cellWidth + 8,
                height: numRows * cellHeight + 8,
                pointerEvents: "none",
                zIndex: 15,
                opacity: rectSpring,
                transform: `scale(${interpolate(rectSpring, [0, 1], [0.96, 1])})`,
              }}
            >
              <RoughBox
                width={numCols * cellWidth + 8}
                height={numRows * cellHeight + 8}
                stroke={theme.gold}
                strokeWidth={3}
                seed={601}
              />
            </div>
          )}

          {/* DYNAMIC BOUNDARY POINTER MARKERS (Cyan Badges) */}
          {/* TOP POINTER */}
          {showTop0 && (
            <div
              style={{
                position: "absolute",
                top: -38,
                left: rulerWidth + (numCols * cellWidth) / 2 - 58,
                padding: "4px 14px",
                borderRadius: 6,
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
              top = 0 ↓
            </div>
          )}

          {/* BOTTOM POINTER */}
          {showBottom4 && (
            <div
              style={{
                position: "absolute",
                top: 32 + numRows * cellHeight + 10,
                left: rulerWidth + (numCols * cellWidth) / 2 - 68,
                padding: "4px 14px",
                borderRadius: 6,
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
              ↑ bottom = 4
            </div>
          )}

          {/* LEFT POINTER */}
          {showLeft0 && (
            <div
              style={{
                position: "absolute",
                top: 32 + (numRows * cellHeight) / 2 - 16,
                left: -102,
                padding: "4px 12px",
                borderRadius: 6,
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
              left=0 →
            </div>
          )}

          {/* RIGHT POINTER */}
          {showRight5 && (
            <div
              style={{
                position: "absolute",
                top: 32 + (numRows * cellHeight) / 2 - 16,
                left: rulerWidth + numCols * cellWidth + 12,
                padding: "4px 12px",
                borderRadius: 6,
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
              ← right=5
            </div>
          )}

          {/* SHRINK CONTRACTION ARROWS (F1269..F1399) */}
          {showShrink && frame < 1400 && (
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 35 }}>
              <div
                style={{
                  position: "absolute",
                  top: 40,
                  left: rulerWidth + (numCols * cellWidth) / 2 - 70,
                  padding: "3px 10px",
                  border: `1px solid ${theme.warn}`,
                  borderRadius: 4,
                  fontFamily: fonts.mono,
                  fontSize: 12,
                  color: theme.warn,
                  fontWeight: 800,
                }}
              >
                top++ (moves down ⬇)
              </div>

              <div
                style={{
                  position: "absolute",
                  top: 32 + 4 * cellHeight - 30,
                  left: rulerWidth + (numCols * cellWidth) / 2 - 75,
                  padding: "3px 10px",
                  border: `1px solid ${theme.warn}`,
                  borderRadius: 4,
                  fontFamily: fonts.mono,
                  fontSize: 12,
                  color: theme.warn,
                  fontWeight: 800,
                }}
              >
                bottom-- (moves up ⬆)
              </div>

              <div
                style={{
                  position: "absolute",
                  top: 32 + 2 * cellHeight + 10,
                  left: rulerWidth + 10,
                  padding: "3px 10px",
                  border: `1px solid ${theme.warn}`,
                  borderRadius: 4,
                  fontFamily: fonts.mono,
                  fontSize: 12,
                  color: theme.warn,
                  fontWeight: 800,
                }}
              >
                left++ ➡
              </div>

              <div
                style={{
                  position: "absolute",
                  top: 32 + 2 * cellHeight + 10,
                  left: rulerWidth + 5 * cellWidth - 110,
                  padding: "3px 10px",
                  border: `1px solid ${theme.warn}`,
                  borderRadius: 4,
                  fontFamily: fonts.mono,
                  fontSize: 12,
                  color: theme.warn,
                  fontWeight: 800,
                }}
              >
                ⬅ right--
              </div>
            </div>
          )}
        </div>

        {/* Lower Zone: Active Subgrid Invariant Monitor Card */}
        <div
          style={{
            position: "absolute",
            top: 475,
            left: 0,
            width: 780,
            height: 195,
            zIndex: 10,
          }}
        >
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <RoughBox
              width={780}
              height={195}
              stroke={frame < 484 ? theme.cyan : (frame < 1090 ? theme.gold : (frame < 1400 ? theme.emerald : theme.warn))}
              strokeWidth={2.4}
              seed={610}
            />
          </div>
          <div style={{ position: "relative", zIndex: 2, padding: "20px 24px" }}>
            {frame < 484 && (
              <div>
                <div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.cyan, letterSpacing: 1.5, marginBottom: 6 }}>
                  📐 BOUNDARY MATRIX COORDINATES
                </div>
                <div style={{ fontFamily: fonts.display, fontSize: 20, fontWeight: 700, color: theme.chalkText, lineHeight: 1.3 }}>
                  Active Domain: [top: 0 .. bottom: 4] × [left: 0 .. right: 5]
                </div>
                <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkDim, marginTop: 8 }}>
                  Initial grid spans all 30 cells (5 rows × 6 cols). 4 scalar variables enclose the active space.
                </div>
              </div>
            )}

            {frame >= 484 && frame < 1090 && (
              <div>
                <div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.gold, letterSpacing: 1.5, marginBottom: 6 }}>
                  🛡️ CORE INVARIANT: CLEAN RECTANGULAR BOUNDARY
                </div>
                <div style={{ fontFamily: fonts.display, fontSize: 20, fontWeight: 700, color: theme.chalkText, lineHeight: 1.3 }}>
                  Outside = Processed Once • Inside = Still Untouched
                </div>
                <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.cyan, marginTop: 8 }}>
                  Zero boolean visited array required! The active boundary alone defines the entire remaining subgrid.
                </div>
              </div>
            )}

            {frame >= 1090 && frame < 1400 && (
              <div>
                <div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.emerald, letterSpacing: 1.5, marginBottom: 6 }}>
                  🔄 4-PHASE CLOCKWISE CONTRACTION
                </div>
                <div style={{ fontFamily: fonts.display, fontSize: 20, fontWeight: 700, color: theme.chalkText, lineHeight: 1.3 }}>
                  Top row ➔ Right col ➔ Bottom row ➔ Left col
                </div>
                <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.good, marginTop: 8 }}>
                  Each edge traversal shrinks one boundary inward: top++, right--, bottom--, left++
                </div>
              </div>
            )}

            {frame >= 1400 && (
              <div>
                <div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.warn, letterSpacing: 1.5, marginBottom: 6 }}>
                  ⚠️ TERMINATION & BOUNDARY GUARDS
                </div>
                <div style={{ fontFamily: fonts.display, fontSize: 20, fontWeight: 700, color: theme.chalkText, lineHeight: 1.3 }}>
                  Valid Rectangle Invariant: top &lt;= bottom AND left &lt;= right
                </div>
                <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.warn, marginTop: 8 }}>
                  When pointers cross, all cells are visited and loop cleanly terminates without duplicate traversal!
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* =====================================================================
          RIGHT STAGE: DYNAMIC PEDAGOGICAL CARDS (X: 980, Y: 175, W: 860, H: 670)
         ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 175,
          left: 980,
          width: 860,
          height: 670,
          zIndex: 15,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* CARD 1: INITIAL BOUNDARIES & ACTIVE RECTANGLE (F0..F483) */}
        {frame < 484 && (
          <div
            style={{
              position: "relative",
              width: 860,
              height: 670,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
              <RoughBox width={860} height={670} stroke={theme.cyan} strokeWidth={2.5} seed={602} />
            </div>
            <div style={{ position: "relative", zIndex: 2, padding: "28px 32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: 22 }}>📐</span>
                <span style={{ fontFamily: fonts.sans, fontSize: 15, fontWeight: 800, color: theme.cyan, letterSpacing: 1.5 }}>
                  INITIAL BOUNDARY INITIALIZATION
                </span>
              </div>

              <div style={{ fontFamily: fonts.display, fontSize: 24, fontWeight: 700, color: theme.chalkText, lineHeight: 1.35, marginBottom: 20 }}>
                "For our 5 × 6 matrix, the initial boundaries encompass the entire grid."
              </div>

              {/* 4 Boundary Tiles */}
              {showScaffold && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14, marginBottom: 24 }}>
                  {/* Top */}
                  {showTop0 ? (
                    <div
                      style={{
                        padding: "14px 18px",
                        borderRadius: 8,
                        border: `1.5px solid ${theme.cyan}`,
                        transform: `scale(${interpolate(topSpring, [0, 1], [0.88, 1])})`,
                        opacity: topSpring,
                        boxShadow: "0 0 16px rgba(92, 225, 230, 0.3)",
                      }}
                    >
                      <div style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 800, color: theme.cyan }}>
                        top = 0
                      </div>
                      <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText, opacity: 0.9, marginTop: 4 }}>
                        First row of active rectangle
                      </div>
                    </div>
                  ) : (
                    <div
                      style={{
                        padding: "14px 18px",
                        borderRadius: 8,
                        border: `1.5px dashed rgba(248, 246, 240, 0.2)`,
                        opacity: 0.5,
                      }}
                    >
                      <div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, color: theme.chalkDim }}>
                        top = ...
                      </div>
                      <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkDim, opacity: 0.7, marginTop: 4 }}>
                        Awaiting spoken cue...
                      </div>
                    </div>
                  )}

                  {/* Bottom */}
                  {showBottom4 ? (
                    <div
                      style={{
                        padding: "14px 18px",
                        borderRadius: 8,
                        border: `1.5px solid ${theme.cyan}`,
                        transform: `scale(${interpolate(bottomSpring, [0, 1], [0.88, 1])})`,
                        opacity: bottomSpring,
                        boxShadow: "0 0 16px rgba(92, 225, 230, 0.3)",
                      }}
                    >
                      <div style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 800, color: theme.cyan }}>
                        bottom = 4 (m - 1)
                      </div>
                      <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText, opacity: 0.9, marginTop: 4 }}>
                        Last row of active rectangle
                      </div>
                    </div>
                  ) : (
                    <div
                      style={{
                        padding: "14px 18px",
                        borderRadius: 8,
                        border: `1.5px dashed rgba(248, 246, 240, 0.2)`,
                        opacity: 0.5,
                      }}
                    >
                      <div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, color: theme.chalkDim }}>
                        bottom = ...
                      </div>
                      <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkDim, opacity: 0.7, marginTop: 4 }}>
                        Awaiting spoken cue...
                      </div>
                    </div>
                  )}

                  {/* Left */}
                  {showLeft0 ? (
                    <div
                      style={{
                        padding: "14px 18px",
                        borderRadius: 8,
                        border: `1.5px solid ${theme.cyan}`,
                        transform: `scale(${interpolate(leftSpring, [0, 1], [0.88, 1])})`,
                        opacity: leftSpring,
                        boxShadow: "0 0 16px rgba(92, 225, 230, 0.3)",
                      }}
                    >
                      <div style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 800, color: theme.cyan }}>
                        left = 0
                      </div>
                      <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText, opacity: 0.9, marginTop: 4 }}>
                        First column of active rectangle
                      </div>
                    </div>
                  ) : (
                    <div
                      style={{
                        padding: "14px 18px",
                        borderRadius: 8,
                        border: `1.5px dashed rgba(248, 246, 240, 0.2)`,
                        opacity: 0.5,
                      }}
                    >
                      <div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, color: theme.chalkDim }}>
                        left = ...
                      </div>
                      <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkDim, opacity: 0.7, marginTop: 4 }}>
                        Awaiting spoken cue...
                      </div>
                    </div>
                  )}

                  {/* Right */}
                  {showRight5 ? (
                    <div
                      style={{
                        padding: "14px 18px",
                        borderRadius: 8,
                        border: `1.5px solid ${theme.cyan}`,
                        transform: `scale(${interpolate(rightSpring, [0, 1], [0.88, 1])})`,
                        opacity: rightSpring,
                        boxShadow: "0 0 16px rgba(92, 225, 230, 0.3)",
                      }}
                    >
                      <div style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 800, color: theme.cyan }}>
                        right = 5 (n - 1)
                      </div>
                      <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText, opacity: 0.9, marginTop: 4 }}>
                        Last column of active rectangle
                      </div>
                    </div>
                  ) : (
                    <div
                      style={{
                        padding: "14px 18px",
                        borderRadius: 8,
                        border: `1.5px dashed rgba(248, 246, 240, 0.2)`,
                        opacity: 0.5,
                      }}
                    >
                      <div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, color: theme.chalkDim }}>
                        right = ...
                      </div>
                      <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkDim, opacity: 0.7, marginTop: 4 }}>
                        Awaiting spoken cue...
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Active Rectangle Definition */}
              {showActiveRect && (
                <div
                  style={{
                    padding: "16px 20px",
                    border: `1.5px dashed ${theme.gold}`,
                    borderRadius: 8,
                  }}
                >
                  <div style={{ fontFamily: fonts.sans, fontSize: 15, fontWeight: 700, color: theme.gold }}>
                    ✨ ACTIVE RECTANGLE DEFINITION
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkText, marginTop: 6, lineHeight: 1.45 }}>
                    Together, these 4 scalar variables bound the exact rectangular domain of cells that still remain to be processed!
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* CARD 2: THE CORE INVARIANT (F484..F1089) */}
        {showInvariant && frame < 1090 && (
          <div
            style={{
              position: "relative",
              width: 860,
              height: 670,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
              <RoughBox width={860} height={670} stroke={theme.gold} strokeWidth={2.5} seed={603} />
            </div>
            <div style={{ position: "relative", zIndex: 2, padding: "28px 32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: 22 }}>🛡️</span>
                <span style={{ fontFamily: fonts.sans, fontSize: 15, fontWeight: 800, color: theme.gold, letterSpacing: 1.5 }}>
                  THE ALGORITHM'S CORE INVARIANT
                </span>
              </div>

              <div style={{ fontFamily: fonts.display, fontSize: 24, fontWeight: 700, color: theme.chalkText, lineHeight: 1.35, marginBottom: 20 }}>
                "We maintain one strict invariant at every iteration:"
              </div>

              {/* Outside Invariant Tile */}
              {showOutside && (
                <div
                  style={{
                    padding: "16px 20px",
                    borderRadius: 8,
                    border: `1.5px solid ${theme.good}`,
                    marginBottom: 16,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <span style={{ fontSize: 16, color: theme.good }}>1.</span>
                    <span style={{ fontFamily: fonts.sans, fontSize: 15, fontWeight: 800, color: theme.good }}>
                      OUTSIDE THE ACTIVE RECTANGLE
                    </span>
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkText, lineHeight: 1.45 }}>
                    Everything outside has <strong>already been processed exactly once</strong>. It is completely safe from re-traversal!
                  </div>
                </div>
              )}

              {/* Inside Invariant Tile */}
              {showInside && (
                <div
                  style={{
                    padding: "16px 20px",
                    borderRadius: 8,
                    border: `1.5px solid ${theme.gold}`,
                    marginBottom: 16,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <span style={{ fontSize: 16, color: theme.gold }}>2.</span>
                    <span style={{ fontFamily: fonts.sans, fontSize: 15, fontWeight: 800, color: theme.gold }}>
                      INSIDE THE ACTIVE RECTANGLE
                    </span>
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkText, lineHeight: 1.45 }}>
                    Everything inside is <strong>still completely unprocessed</strong>. We never have to check if an inside cell was visited!
                  </div>
                </div>
              )}

              {/* Punchline */}
              {showInside && (
                <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkText, opacity: 0.9, lineHeight: 1.5, marginTop: 8 }}>
                  👉 Because the boundary between 'done' and 'todo' is always a clean rectangle, <strong>zero extra memory</strong> is needed!
                </div>
              )}
            </div>
          </div>
        )}

        {/* CARD 3: 4-PHASE EDGE ORDER & BOUNDARY SHRINK (F1090..F1399) */}
        {showPeel && frame < 1400 && (
          <div
            style={{
              position: "relative",
              width: 860,
              height: 670,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
              <RoughBox width={860} height={670} stroke={theme.emerald} strokeWidth={2.5} seed={604} />
            </div>
            <div style={{ position: "relative", zIndex: 2, padding: "28px 32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <span style={{ fontSize: 22 }}>🔄</span>
                <span style={{ fontFamily: fonts.sans, fontSize: 15, fontWeight: 800, color: theme.emerald, letterSpacing: 1.5 }}>
                  4-PHASE EDGE TRAVERSAL & SHRINK RULE
                </span>
              </div>

              <div style={{ fontFamily: fonts.display, fontSize: 22, fontWeight: 700, color: theme.chalkText, lineHeight: 1.35, marginBottom: 16 }}>
                "We peel complete edges in clockwise sequence, then shrink inward:"
              </div>

              {/* 4 Phases List */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
                {/* 1. Top Edge */}
                <div
                  style={{
                    padding: "10px 16px",
                    borderRadius: 6,
                    border: `1.5px solid ${isTopEdgeActive ? theme.cyan : "rgba(248, 246, 240, 0.2)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ fontFamily: fonts.sans, fontSize: 14, fontWeight: 700, color: theme.chalkText }}>
                    1. <span style={{ color: theme.cyan }}>TOP EDGE:</span> Traverse row <code style={{ color: theme.cyan }}>top</code> from <code style={{ color: theme.cyan }}>left</code> to <code style={{ color: theme.cyan }}>right</code>
                  </div>
                  {showShrink && (
                    <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.gold }}>
                      top++ ⬇
                    </div>
                  )}
                </div>

                {/* 2. Right Edge */}
                <div
                  style={{
                    padding: "10px 16px",
                    borderRadius: 6,
                    border: `1.5px solid ${isRightEdgeActive ? theme.gold : "rgba(248, 246, 240, 0.2)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ fontFamily: fonts.sans, fontSize: 14, fontWeight: 700, color: theme.chalkText }}>
                    2. <span style={{ color: theme.gold }}>RIGHT EDGE:</span> Traverse col <code style={{ color: theme.gold }}>right</code> from <code style={{ color: theme.gold }}>top</code> to <code style={{ color: theme.gold }}>bottom</code>
                  </div>
                  {showShrink && (
                    <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.gold }}>
                      right-- ⬅
                    </div>
                  )}
                </div>

                {/* 3. Bottom Edge */}
                <div
                  style={{
                    padding: "10px 16px",
                    borderRadius: 6,
                    border: `1.5px solid ${isBottomEdgeActive ? theme.purple : "rgba(248, 246, 240, 0.2)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ fontFamily: fonts.sans, fontSize: 14, fontWeight: 700, color: theme.chalkText }}>
                    3. <span style={{ color: theme.purple }}>BOTTOM EDGE:</span> Traverse row <code style={{ color: theme.purple }}>bottom</code> from <code style={{ color: theme.purple }}>right</code> to <code style={{ color: theme.purple }}>left</code>
                  </div>
                  {showShrink && (
                    <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.gold }}>
                      bottom-- ⬆
                    </div>
                  )}
                </div>

                {/* 4. Left Edge */}
                <div
                  style={{
                    padding: "10px 16px",
                    borderRadius: 6,
                    border: `1.5px solid ${isLeftEdgeActive ? theme.emerald : "rgba(248, 246, 240, 0.2)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ fontFamily: fonts.sans, fontSize: 14, fontWeight: 700, color: theme.chalkText }}>
                    4. <span style={{ color: theme.emerald }}>LEFT EDGE:</span> Traverse col <code style={{ color: theme.emerald }}>left</code> from <code style={{ color: theme.emerald }}>bottom</code> to <code style={{ color: theme.emerald }}>top</code>
                  </div>
                  {showShrink && (
                    <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.gold }}>
                      left++ ➡
                    </div>
                  )}
                </div>
              </div>

              {/* Shrink Mechanism Explanation */}
              {showShrink && (
                <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkText, opacity: 0.9, lineHeight: 1.45 }}>
                  • Consuming an entire outer line effectively removes it from future iterations, shrinking the problem rectangle!
                </div>
              )}
            </div>
          </div>
        )}

        {/* CARD 4: THE CRITICAL VALIDATION GUARD RULE (F1400..F1937) */}
        {showRule && (
          <div
            style={{
              position: "relative",
              width: 860,
              height: 670,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
              <RoughBox width={860} height={670} stroke={theme.warn} strokeWidth={2.5} seed={605} />
            </div>
            <div style={{ position: "relative", zIndex: 2, padding: "28px 32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <span style={{ fontSize: 22 }}>⚠️</span>
                <span style={{ fontFamily: fonts.sans, fontSize: 15, fontWeight: 800, color: theme.warn, letterSpacing: 1.5 }}>
                  THE CRITICAL VALIDATION RULE
                </span>
              </div>

              <div style={{ fontFamily: fonts.display, fontSize: 22, fontWeight: 700, color: theme.chalkText, lineHeight: 1.35, marginBottom: 14 }}>
                "After shrinking, we must ensure the active rectangle still exists!"
              </div>

              {/* Invariant Check Formula Pills */}
              {showValidate && (
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 14 }}>
                  {/* Guard 1 */}
                  <div
                    style={{
                      padding: "10px 16px",
                      borderRadius: 8,
                      border: `1.5px solid ${theme.cyan}`,
                    }}
                  >
                    <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 800, color: theme.cyan }}>
                      if top &lt;= bottom:
                    </div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText, opacity: 0.9, marginTop: 2 }}>
                      Required before traversing the <strong>bottom edge</strong>! (Top may have crossed bottom)
                    </div>
                  </div>

                  {/* Guard 2 */}
                  <div
                    style={{
                      padding: "10px 16px",
                      borderRadius: 8,
                      border: `1.5px solid ${theme.good}`,
                    }}
                  >
                    <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 800, color: theme.good }}>
                      if left &lt;= right:
                    </div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText, opacity: 0.9, marginTop: 2 }}>
                      Required before traversing the <strong>left edge</strong>! (Right may have crossed left)
                    </div>
                  </div>
                </div>
              )}

              {/* Degenerate Case Explanation with Mini Diagram */}
              {showSingle && (
                <div
                  style={{
                    padding: "12px 16px",
                    border: `1.5px dashed ${theme.warn}`,
                    borderRadius: 8,
                    marginBottom: 12,
                  }}
                >
                  <div style={{ fontFamily: fonts.sans, fontSize: 13, fontWeight: 800, color: theme.warn, marginBottom: 4 }}>
                    WHY THIS IS MANDATORY (SINGLE ROW / COL TRAP):
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText, lineHeight: 1.4 }}>
                    When only 1 row remains, top edge consumes it and increments `top`. If we do not guard with `top &lt;= bottom`, the bottom edge would traverse that same row backward!
                  </div>

                  {/* Mini visual diagram */}
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
                    <div style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.cyan, fontWeight: 700 }}>Row (1×4):</div>
                    {["A", "B", "C", "D"].map((cell, idx) => (
                      <div
                        key={idx}
                        style={{
                          width: 32,
                          height: 26,
                          border: `1.5px solid ${theme.cyan}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: fonts.mono,
                          fontSize: 12,
                          fontWeight: 700,
                          color: theme.chalkText,
                        }}
                      >
                        {cell}
                      </div>
                    ))}
                    <div style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.warn, marginLeft: 10, fontWeight: 700 }}>
                      top &gt; bottom ➔ Bottom loop skipped! 🛡️
                    </div>
                  </div>
                </div>
              )}

              {/* Bridge to Scene 07 */}
              {showTraceBridge && (
                <div
                  style={{
                    padding: "10px 16px",
                    border: `2px solid ${theme.gold}`,
                    borderRadius: 8,
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontFamily: fonts.sans, fontSize: 14, fontWeight: 800, color: theme.gold }}>
                    🚀 READY FOR FULL METHOD 2 SIMULATION ➔ SCENE 07
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* =====================================================================
          AUDIO & WORD-SYNC CAPTIONS (Bottom Y: 980)
         ===================================================================== */}
      <Audio src={staticFile("audio/015/scence06.mp3")} />
      <Captions words={captionWords} />
    </div>
  );
};
