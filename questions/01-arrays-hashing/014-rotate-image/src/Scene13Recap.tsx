/**
 * Scene13Recap.tsx — Scene 13 · Full Evolution Recap & Master Roadmap Handoff
 * Question 014: Rotate Image (LeetCode 48) · Pattern 01 — Arrays & Hashing
 *
 * Implements the grand conclusion & curriculum roadmap handoff:
 * - Act 1 (F0..F1249): Mathematical coordinate truth & 3 solutions comparison
 * - Act 2 (F1250..F2137): Transferable engineering intuition & mental model tree
 * - Act 3 (F2138..F2803): Master Roadmap handoff (Q14 Complete, 14/227 Progress, Q15 Spiral Matrix Up Next)
 *
 * Canvas & Layout Hierarchy (1920 × 1080):
 * - Top Bar: Clean metadata strip at Y: 30..94 (Acts 1 & 2)
 * - Center Stage (Y: 120..745):
 *   - Act 1: Coordinate mapping formula & 3 comparative solution columns
 *   - Act 2: Mental model hierarchy (Anti-memorization banner, core question, 3 outcome branches, ethos banner)
 *   - Act 3: MasterRoadmapV2 taking full canvas with dynamic camera motion
 * - Captions at bottom (Y: 960..1010) with >= 215px breathing clearance
 * - 100% @dsa/kit components (RoughBox, ChalkText, RoughLine, MasterRoadmapV2, Captions)
 * - Strict zero-spoiler reveals synchronized to exact audio words
 *
 * Total Duration: 2,803 frames @ 30fps (93.440s) strictly from sync/13-recap.json
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
import { theme as baseTheme, fonts } from "../../../../kit/lib/theme";

const theme = {
  ...baseTheme,
  gold: baseTheme.pivot,
  green: "#3FB950",
  amber: "#D29922",
  red: "#F85149",
  cyan: baseTheme.cyan,
  cardBorder: "rgba(255, 255, 255, 0.12)",
};

import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { RoughBox } from "../../../../kit/components/RoughBox";
import { ChalkText } from "../../../../kit/components/ChalkText";
import { RoughLine } from "../../../../kit/components/RoughLine";
import { ChalkDust } from "../../../../kit/components/ChalkDust";
import { MasterRoadmapV2 } from "../../../../kit/components/MasterRoadmapV2";
import syncData from "../sync/13-recap.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings (from sync/13-recap.json)
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => {
  let word = w.word;
  if (word === "13") word = "13,";
  if (word === "14") word = "14,";
  if (word === "227") word = "227.";
  return {
    word,
    start: w.start_ms / 1000,
    end: w.end_ms / 1000,
  };
});

export const Scene13Recap: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // =========================================================================
  // ACT BOUNDARIES
  // =========================================================================
  const isAct1 = frame < 1250;
  const isAct2 = frame >= 1250 && frame < 2138;
  const isAct3 = frame >= 2138;

  // Cross-fade opacity between Acts
  const act1Opacity = interpolate(frame, [1240, 1255], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act2Opacity =
    frame < 1250
      ? 0
      : frame < 2125
      ? interpolate(frame, [1250, 1265], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : interpolate(frame, [2125, 2137], [1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
  const act3Opacity = interpolate(frame, [2138, 2150], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // =========================================================================
  // ACT 1: MICRO-TIMINGS (Mathematical Truth & 3 Solutions)
  // =========================================================================
  const showCoordPrompt = frame >= 50;
  const showCoordSrc = frame >= 205;
  const showCoordDest = frame >= 293;
  const dockCoordTop = frame >= 455;

  const coordBoxY = dockCoordTop
    ? interpolate(frame, [455, 485], [260, 120], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : 260;
  const coordBoxScale = dockCoordTop
    ? interpolate(frame, [455, 485], [1.0, 0.88], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : 1.0;

  // 3 Solutions columns
  const showColumnsFramework = frame >= 455;
  const showMethod1 = frame >= 617;
  const showMethod1Space = frame >= 721;
  const showMethod2 = frame >= 759;
  const showMethod3 = frame >= 963;
  const showMethod3Transpose = frame >= 1132;
  const showMethod3Reverse = frame >= 1180;

  // =========================================================================
  // ACT 2: MICRO-TIMINGS (Engineering Intuition & Mental Model Tree)
  // =========================================================================
  const showTakeawayBanner = frame >= 1250;
  const showAntiMemorize = frame >= 1378;
  const showFirstAsk = frame >= 1564;
  const showBranchCycles = frame >= 1819;
  const showBranchSymmetry = frame >= 1854;
  const showBranchDecomp = frame >= 1888;
  const showEthosBanner = frame >= 1984;

  // =========================================================================
  // ACT 3: ROADMAP & CAMERA ENGINE (F2138..F2803)
  // =========================================================================
  // Completed count odometer rolls strictly at F2468..F2505 ("to 14 out of 227")
  const roadmapCompletedCount =
    frame < 2468
      ? 13
      : Math.min(
          14,
          Math.floor(
            interpolate(frame, [2468, 2505], [13, 14], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })
          )
        );

  const roadmapCompletedNums = useMemo(() => {
    if (frame < 2232) {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    }
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  }, [frame]);

  const roadmapActiveBadgeLabel =
    frame < 2232 ? "NOW ACTIVE ●" : "COMPLETED ✓";

  const roadmapSpotlightRow =
    frame < 2283 ? 14 : frame >= 2559 ? 15 : undefined;

  const roadmapUpNextNum = frame >= 2559 ? 15 : undefined;

  // Camera pan & zoom
  const { camScale, camY, camX } = useMemo(() => {
    if (frame < 2138) {
      return { camScale: 1.0, camY: 0, camX: 0 };
    }
    // F2138..F2282: Zoom in slightly on Row 14
    if (frame < 2283) {
      const p = interpolate(frame, [2138, 2170], [1.0, 1.04], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      const y = interpolate(frame, [2138, 2170], [0, -115], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      return { camScale: p, camY: y, camX: 0 };
    }
    // F2283..F2467: Pan up to progress pill (content moves down, so positive translateY)
    if (frame < 2559) {
      const p = interpolate(frame, [2283, 2330], [1.04, 1.05], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      const y = interpolate(frame, [2283, 2330], [-115, 90], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      return { camScale: p, camY: y, camX: 0 };
    }
    // F2559..F2746: Pan down to spotlight Row 15
    if (frame < 2747) {
      const p = interpolate(frame, [2559, 2600], [1.05, 1.04], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      const y = interpolate(frame, [2559, 2600], [90, -135], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      return { camScale: p, camY: y, camX: 0 };
    }
    // F2747..F2803: Settle back to full overview
    const p = interpolate(frame, [2747, 2785], [1.04, 1.0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    const y = interpolate(frame, [2747, 2785], [-135, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    return { camScale: p, camY: y, camX: 0 };
  }, [frame]);

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        position: "relative",
        backgroundColor: baseTheme.boardBg,
        overflow: "hidden",
        fontFamily: fonts.sans,
      }}
    >
      <ChalkFilters />
      <ChalkboardBackground />

      {/* Synchronized Voiceover Audio */}
      <Audio src={staticFile("audio/014/13-recap.mp3")} />

      {/* ChalkDust Bursts for Key Milestones */}
      <ChalkDust x={960} y={260} count={28} color={theme.cyan} start={205} />
      <ChalkDust x={1200} y={260} count={30} color={theme.gold} start={293} />
      <ChalkDust x={360} y={460} count={26} color={theme.cyan} start={617} />
      <ChalkDust x={960} y={460} count={28} color={theme.gold} start={759} />
      <ChalkDust x={1560} y={460} count={32} color={theme.green} start={963} />
      <ChalkDust x={960} y={150} count={30} color={theme.gold} start={1250} />
      <ChalkDust x={960} y={330} count={28} color={theme.cyan} start={1564} />
      <ChalkDust x={960} y={700} count={34} color={theme.green} start={1984} />
      <ChalkDust x={960} y={540} count={36} color={theme.gold} start={2138} />
      <ChalkDust x={960} y={200} count={40} color={theme.green} start={2468} />
      <ChalkDust x={960} y={600} count={38} color={theme.cyan} start={2559} />

      {/* =================================================================== */}
      {/* 1. TOP METADATA BAR (Active during Acts 1 & 2)                      */}
      {/* =================================================================== */}
      {!isAct3 && (
        <div
          style={{
            position: "absolute",
            top: 36,
            left: 80,
            right: 80,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            opacity: interpolate(frame, [0, 20], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            zIndex: 30,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                padding: "6px 14px",
                borderRadius: 6,
                border: "1.5px solid rgba(255, 255, 255, 0.2)",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                fontFamily: fonts.mono,
                fontSize: 13,
                fontWeight: 700,
                color: baseTheme.chalkDim,
                letterSpacing: "0.08em",
              }}
            >
              QUESTION 014
            </div>

            <span
              style={{
                fontFamily: fonts.sans,
                fontSize: 26,
                fontWeight: 700,
                color: baseTheme.chalkText,
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
                border: `1.5px solid ${theme.gold}`,
                backgroundColor: "rgba(245, 158, 11, 0.06)",
                fontFamily: fonts.mono,
                fontSize: 13,
                fontWeight: 700,
                color: theme.gold,
                letterSpacing: "0.08em",
              }}
            >
              FULL EVOLUTION RECAP
            </div>

            <div
              style={{
                padding: "6px 16px",
                borderRadius: 6,
                border: `1.5px solid ${isAct1 ? theme.cyan : theme.green}`,
                backgroundColor: isAct1 ? "rgba(56, 189, 248, 0.06)" : "rgba(63, 185, 80, 0.06)",
                fontFamily: fonts.mono,
                fontSize: 13,
                fontWeight: 700,
                color: isAct1 ? theme.cyan : theme.green,
                letterSpacing: "0.08em",
              }}
            >
              {isAct1 ? "ACT 1: MATHEMATICAL SYNTHESIS" : "ACT 2: ENGINEERING INTUITION"}
            </div>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* 2. ACT 1: MATHEMATICAL TRUTH & 3 SOLUTIONS COMPARISON               */}
      {/* =================================================================== */}
      {frame < 1260 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: act1Opacity,
            pointerEvents: "none",
          }}
        >
          {/* Coordinate Mapping Formula (Docks smoothly from center to top) */}
          {showCoordPrompt && (
            <div
              style={{
                position: "absolute",
                top: coordBoxY,
                left: 260,
                width: 1400,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transform: `scale(${coordBoxScale})`,
                transformOrigin: "center top",
                zIndex: 25,
              }}
            >
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 14,
                  fontWeight: 800,
                  color: theme.gold,
                  letterSpacing: "0.15em",
                  marginBottom: 10,
                  textTransform: "uppercase",
                }}
              >
                90° Clockwise Rotation Universal Law
              </div>

              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 24,
                  padding: "16px 36px",
                  minHeight: 80,
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
                  <RoughBox
                    width={880}
                    height={80}
                    stroke={theme.cyan}
                    strokeWidth={2}
                    roughness={0.7}
                    seed={141}
                  />
                </div>
                {showCoordSrc && (
                  <div style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", gap: 12 }}>
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 16,
                        color: "rgba(255, 255, 255, 0.7)",
                      }}
                    >
                      Original:
                    </span>
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 32,
                        fontWeight: 800,
                        color: theme.cyan,
                        padding: "4px 14px",
                        borderRadius: 8,
                        backgroundColor: "rgba(77, 208, 225, 0.15)",
                        border: `1.5px solid ${theme.cyan}`,
                      }}
                    >
                      (r, c)
                    </span>
                  </div>
                )}

                {showCoordDest && (
                  <>
                    <span
                      style={{
                        position: "relative",
                        zIndex: 2,
                        fontFamily: fonts.mono,
                        fontSize: 28,
                        fontWeight: 800,
                        color: theme.gold,
                      }}
                    >
                      ──────── moves to ────────▶
                    </span>

                    <div style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", gap: 12 }}>
                      <span
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 16,
                          color: "rgba(255, 255, 255, 0.7)",
                        }}
                      >
                        Destination:
                      </span>
                      <span
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 32,
                          fontWeight: 800,
                          color: theme.gold,
                          padding: "4px 14px",
                          borderRadius: 8,
                          backgroundColor: "rgba(255, 209, 102, 0.18)",
                          border: `1.5px solid ${theme.gold}`,
                        }}
                      >
                        (c, n - 1 - r)
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* 3 Solutions Columns (Y: 225..710) */}
          {showColumnsFramework && (
            <div
              style={{
                position: "absolute",
                top: 225,
                left: 80,
                right: 80,
                height: 485,
                display: "flex",
                justifyContent: "space-between",
                gap: 25,
                zIndex: 20,
              }}
            >
              {/* Column 1: Method 1 (Extra Matrix) */}
              <div
                style={{
                  flex: 1,
                  position: "relative",
                  height: 485,
                  borderRadius: 14,
                  backgroundColor: "rgba(10, 48, 42, 0.92)",
                  border: `1.5px solid ${showMethod1 ? theme.cyan : "rgba(255, 255, 255, 0.15)"}`,
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
                  overflow: "hidden",
                  opacity: showMethod1 ? 1 : 0.25,
                }}
              >
                <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                  <RoughBox
                    width={566}
                    height={485}
                    stroke={showMethod1 ? theme.cyan : "rgba(255, 255, 255, 0.15)"}
                    strokeWidth={1.8}
                    seed={131}
                  />
                </div>

                <div style={{ position: "relative", padding: "24px 22px", height: "100%", boxSizing: "border-box", zIndex: 2, display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      alignSelf: "flex-start",
                      fontFamily: fonts.mono,
                      fontSize: 13,
                      fontWeight: 800,
                      color: theme.cyan,
                      padding: "4px 12px",
                      borderRadius: 6,
                      backgroundColor: "rgba(77, 208, 225, 0.15)",
                      border: `1px solid ${theme.cyan}`,
                      marginBottom: 12,
                    }}
                  >
                    METHOD 1 · SIMULATE
                  </div>

                  <h3
                    style={{
                      margin: "0 0 14px 0",
                      fontSize: 22,
                      fontWeight: 800,
                      color: baseTheme.chalkText,
                      fontFamily: fonts.sans,
                    }}
                  >
                    Direct Destination Mapping
                  </h3>

                  {showMethod1 && (
                    <>
                      <div
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 16,
                          color: theme.cyan,
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          padding: "10px 14px",
                          borderRadius: 8,
                          border: "1px solid rgba(77, 208, 225, 0.3)",
                          marginBottom: 16,
                        }}
                      >
                        aux[c][n - 1 - r] = matrix[r][c]
                      </div>

                      <ul
                        style={{
                          margin: "0 0 20px 0",
                          paddingLeft: 20,
                          fontFamily: fonts.sans,
                          fontSize: 16,
                          color: "rgba(255, 255, 255, 0.82)",
                          lineHeight: 1.6,
                        }}
                      >
                        <li>Allocates fresh N × N matrix buffer</li>
                        <li>Reads sequentially from original grid</li>
                        <li>Copies back to satisfy return contract</li>
                      </ul>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 10,
                          marginTop: "auto",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: fonts.mono,
                            fontSize: 15,
                            color: theme.cyan,
                            fontWeight: 700,
                          }}
                        >
                          Time: O(N²) · Iterates every cell
                        </div>

                        {showMethod1Space && (
                          <div
                            style={{
                              fontFamily: fonts.mono,
                              fontSize: 15,
                              fontWeight: 800,
                              color: theme.amber,
                              padding: "6px 12px",
                              borderRadius: 6,
                              backgroundColor: "rgba(210, 153, 34, 0.18)",
                              border: `1px solid ${theme.amber}`,
                              alignSelf: "flex-start",
                            }}
                          >
                            Space: O(N²) Extra Grid ✗ (Fails In-Place)
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Column 2: Method 2 (4-Way Cycles) */}
              <div
                style={{
                  flex: 1,
                  position: "relative",
                  height: 485,
                  borderRadius: 14,
                  backgroundColor: "rgba(10, 48, 42, 0.92)",
                  border: `1.5px solid ${showMethod2 ? theme.gold : "rgba(255, 255, 255, 0.15)"}`,
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
                  overflow: "hidden",
                  opacity: showMethod2 ? 1 : 0.25,
                }}
              >
                <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                  <RoughBox
                    width={566}
                    height={485}
                    stroke={showMethod2 ? theme.gold : "rgba(255, 255, 255, 0.15)"}
                    strokeWidth={1.8}
                    seed={132}
                  />
                </div>

                <div style={{ position: "relative", padding: "24px 22px", height: "100%", boxSizing: "border-box", zIndex: 2, display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      alignSelf: "flex-start",
                      fontFamily: fonts.mono,
                      fontSize: 13,
                      fontWeight: 800,
                      color: theme.gold,
                      padding: "4px 12px",
                      borderRadius: 6,
                      backgroundColor: "rgba(255, 209, 102, 0.15)",
                      border: `1px solid ${theme.gold}`,
                      marginBottom: 12,
                    }}
                  >
                    METHOD 2 · 4-WAY CYCLES
                  </div>

                  <h3
                    style={{
                      margin: "0 0 14px 0",
                      fontSize: 22,
                      fontWeight: 800,
                      color: baseTheme.chalkText,
                      fontFamily: fonts.sans,
                    }}
                  >
                    In-Place Layer Cycles
                  </h3>

                  {showMethod2 && (
                    <>
                      <div
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 16,
                          color: theme.gold,
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          padding: "10px 14px",
                          borderRadius: 8,
                          border: "1px solid rgba(255, 209, 102, 0.3)",
                          marginBottom: 16,
                        }}
                      >
                        top ──→ right ──→ bottom ──→ left
                      </div>

                      <ul
                        style={{
                          margin: "0 0 20px 0",
                          paddingLeft: 20,
                          fontFamily: fonts.sans,
                          fontSize: 16,
                          color: "rgba(255, 255, 255, 0.82)",
                          lineHeight: 1.6,
                        }}
                      >
                        <li>4-element closed cycle per position</li>
                        <li>Save 1 value with temporary variable</li>
                        <li>Cycle 3 items in reverse, restore saved</li>
                        <li>Process outer layer, then shrink inward</li>
                      </ul>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 10,
                          marginTop: "auto",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: fonts.mono,
                            fontSize: 15,
                            color: theme.gold,
                            fontWeight: 700,
                          }}
                        >
                          Time: O(N²) · Exact N²/4 cycles
                        </div>

                        <div
                          style={{
                            fontFamily: fonts.mono,
                            fontSize: 15,
                            fontWeight: 800,
                            color: theme.green,
                            padding: "6px 12px",
                            borderRadius: 6,
                            backgroundColor: "rgba(63, 185, 80, 0.18)",
                            border: `1px solid ${theme.green}`,
                            alignSelf: "flex-start",
                          }}
                        >
                          Space: O(1) Auxiliary ✓ (Strictly In-Place)
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Column 3: Method 3 (Transpose + Reverse) */}
              <div
                style={{
                  flex: 1,
                  position: "relative",
                  height: 485,
                  borderRadius: 14,
                  backgroundColor: "rgba(10, 48, 42, 0.92)",
                  border: `1.5px solid ${showMethod3 ? theme.green : "rgba(255, 255, 255, 0.15)"}`,
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
                  overflow: "hidden",
                  opacity: showMethod3 ? 1 : 0.25,
                }}
              >
                <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                  <RoughBox
                    width={566}
                    height={485}
                    stroke={showMethod3 ? theme.green : "rgba(255, 255, 255, 0.15)"}
                    strokeWidth={2.2}
                    seed={133}
                  />
                </div>

                <div style={{ position: "relative", padding: "24px 22px", height: "100%", boxSizing: "border-box", zIndex: 2, display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      alignSelf: "flex-start",
                      fontFamily: fonts.mono,
                      fontSize: 13,
                      fontWeight: 800,
                      color: theme.green,
                      padding: "4px 12px",
                      borderRadius: 6,
                      backgroundColor: "rgba(63, 185, 80, 0.18)",
                      border: `1px solid ${theme.green}`,
                      marginBottom: 12,
                    }}
                  >
                    METHOD 3 · DECOMPOSITION
                  </div>

                  <h3
                    style={{
                      margin: "0 0 14px 0",
                      fontSize: 22,
                      fontWeight: 800,
                      color: baseTheme.chalkText,
                      fontFamily: fonts.sans,
                    }}
                  >
                    Transpose + Reverse Rows
                  </h3>

                  {showMethod3 && (
                    <>
                      <div
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 15,
                          color: theme.green,
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          padding: "10px 14px",
                          borderRadius: 8,
                          border: "1px solid rgba(63, 185, 80, 0.3)",
                          marginBottom: 16,
                        }}
                      >
                        Rotate = Transpose ∘ Reverse(Rows)
                      </div>

                      <ul
                        style={{
                          margin: "0 0 20px 0",
                          paddingLeft: 20,
                          fontFamily: fonts.sans,
                          fontSize: 16,
                          color: "rgba(255, 255, 255, 0.82)",
                          lineHeight: 1.6,
                        }}
                      >
                        <li style={{ color: showMethod3Transpose ? theme.green : "inherit" }}>
                          <strong>1. Transpose:</strong> (r, c) ↔ (c, r) across main diagonal
                        </li>
                        <li style={{ color: showMethod3Reverse ? theme.green : "inherit" }}>
                          <strong>2. Reverse Rows:</strong> (c, r) ↔ (c, n - 1 - r) horizontally
                        </li>
                        <li>Two simple loops · Zero coordinate index bugs</li>
                      </ul>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 10,
                          marginTop: "auto",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: fonts.mono,
                            fontSize: 15,
                            color: theme.green,
                            fontWeight: 700,
                          }}
                        >
                          Time: O(N²) · (N²/2) + (N²/2) operations
                        </div>

                        <div
                          style={{
                            fontFamily: fonts.mono,
                            fontSize: 15,
                            fontWeight: 800,
                            color: theme.green,
                            padding: "6px 12px",
                            borderRadius: 6,
                            backgroundColor: "rgba(63, 185, 80, 0.22)",
                            border: `1.5px solid ${theme.green}`,
                            alignSelf: "flex-start",
                          }}
                        >
                          Space: O(1) Auxiliary ✓ (RECOMMENDED & OPTIMAL)
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* =================================================================== */}
      {/* 3. ACT 2: TRANSFERABLE PATTERN & ENGINEERING INTUITION              */}
      {/* =================================================================== */}
      {isAct2 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: act2Opacity,
            pointerEvents: "none",
          }}
        >
          {/* Main Title Banner (Y: 120..185) */}
          {showTakeawayBanner && (
            <div
              style={{
                position: "absolute",
                top: 120,
                left: 200,
                width: 1520,
                height: 65,
                borderRadius: 12,
                backgroundColor: "rgba(10, 48, 42, 0.95)",
                border: `1.5px solid ${theme.gold}`,
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
                overflow: "hidden",
                zIndex: 20,
              }}
            >
              <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                <RoughBox
                  width={1520}
                  height={65}
                  stroke={theme.gold}
                  strokeWidth={1.8}
                  seed={134}
                />
              </div>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  fontFamily: fonts.sans,
                  fontSize: 24,
                  fontWeight: 800,
                  color: theme.gold,
                  letterSpacing: "0.06em",
                  zIndex: 2,
                }}
              >
                THE BIGGER PATTERN · TRANSFERABLE MATRIX ENGINEERING INTUITION
              </div>
            </div>
          )}

          {/* Anti-Memorization Warning (Y: 205..270) */}
          {showAntiMemorize && (
            <div
              style={{
                position: "absolute",
                top: 205,
                left: 300,
                width: 1320,
                height: 65,
                borderRadius: 12,
                backgroundColor: "rgba(35, 15, 10, 0.9)",
                border: `1.5px solid ${theme.amber}`,
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
                overflow: "hidden",
                zIndex: 20,
              }}
            >
              <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                <RoughBox
                  width={1320}
                  height={65}
                  stroke={theme.amber}
                  strokeWidth={1.8}
                  seed={135}
                />
              </div>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 14,
                  height: "100%",
                  fontFamily: fonts.mono,
                  fontSize: 20,
                  fontWeight: 800,
                  color: "#FFA2A2",
                  letterSpacing: "0.04em",
                  zIndex: 2,
                }}
              >
                <span style={{ color: theme.red, fontSize: 24 }}>✗</span>
                WHEN A MATRIX TRANSFORMATION FEELS CONFUSING: DO NOT START BY MEMORIZING CODE LOOPS
              </div>
            </div>
          )}

          {/* Core Foundation Question (Y: 290..375) */}
          {showFirstAsk && (
            <div
              style={{
                position: "absolute",
                top: 290,
                left: 360,
                width: 1200,
                height: 80,
                borderRadius: 12,
                backgroundColor: "rgba(10, 48, 42, 0.95)",
                border: `1.5px solid ${theme.cyan}`,
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
                overflow: "hidden",
                zIndex: 20,
              }}
            >
              <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                <RoughBox
                  width={1200}
                  height={80}
                  stroke={theme.cyan}
                  strokeWidth={2}
                  seed={136}
                />
              </div>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  gap: 4,
                  zIndex: 2,
                }}
              >
                <span
                  style={{
                    fontFamily: fonts.sans,
                    fontSize: 15,
                    fontWeight: 700,
                    color: "rgba(255, 255, 255, 0.7)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Step 1 · Ask The Foundational Question
                </span>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 24,
                    fontWeight: 800,
                    color: theme.cyan,
                  }}
                >
                  "Where should one coordinate move?" ──→ (r, c) ──▶ (r', c')
                </span>
              </div>
            </div>
          )}

          {/* 3 Outcome Branches (Y: 395..645) */}
          <div
            style={{
              position: "absolute",
              top: 395,
              left: 80,
              right: 80,
              height: 245,
              display: "flex",
              justifyContent: "space-between",
              gap: 25,
              zIndex: 20,
            }}
          >
            {/* Branch 1: Cycle */}
            <div
              style={{
                flex: 1,
                position: "relative",
                height: 245,
                borderRadius: 14,
                backgroundColor: "rgba(10, 48, 42, 0.92)",
                border: `1.5px solid ${showBranchCycles ? theme.cyan : "rgba(255, 255, 255, 0.15)"}`,
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
                overflow: "hidden",
                opacity: showBranchCycles ? 1 : 0.15,
              }}
            >
              <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                <RoughBox
                  width={566}
                  height={245}
                  stroke={showBranchCycles ? theme.cyan : "rgba(255, 255, 255, 0.15)"}
                  strokeWidth={1.8}
                  seed={137}
                />
              </div>
              <div style={{ position: "relative", padding: "20px 22px", zIndex: 2 }}>
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 13,
                    fontWeight: 800,
                    color: theme.cyan,
                    marginBottom: 8,
                  }}
                >
                  OUTCOME 1
                </div>
                <h4
                  style={{
                    margin: "0 0 10px 0",
                    fontSize: 22,
                    fontWeight: 800,
                    color: theme.cyan,
                    fontFamily: fonts.sans,
                  }}
                >
                  A Closed Cycle
                </h4>
                <p
                  style={{
                    margin: 0,
                    fontFamily: fonts.sans,
                    fontSize: 16,
                    color: "rgba(255, 255, 255, 0.82)",
                    lineHeight: 1.5,
                  }}
                >
                  Coordinates chain into repeating orbits (4-way, k-way).
                  <br />
                  <span style={{ color: theme.cyan, fontFamily: fonts.mono, fontSize: 14 }}>
                    → Solve via 1 temporary variable & in-place cycle swaps.
                  </span>
                </p>
              </div>
            </div>

            {/* Branch 2: Symmetry */}
            <div
              style={{
                flex: 1,
                position: "relative",
                height: 245,
                borderRadius: 14,
                backgroundColor: "rgba(10, 48, 42, 0.92)",
                border: `1.5px solid ${showBranchSymmetry ? theme.gold : "rgba(255, 255, 255, 0.15)"}`,
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
                overflow: "hidden",
                opacity: showBranchSymmetry ? 1 : 0.15,
              }}
            >
              <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                <RoughBox
                  width={566}
                  height={245}
                  stroke={showBranchSymmetry ? theme.gold : "rgba(255, 255, 255, 0.15)"}
                  strokeWidth={1.8}
                  seed={138}
                />
              </div>
              <div style={{ position: "relative", padding: "20px 22px", zIndex: 2 }}>
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 13,
                    fontWeight: 800,
                    color: theme.gold,
                    marginBottom: 8,
                  }}
                >
                  OUTCOME 2
                </div>
                <h4
                  style={{
                    margin: "0 0 10px 0",
                    fontSize: 22,
                    fontWeight: 800,
                    color: theme.gold,
                    fontFamily: fonts.sans,
                  }}
                >
                  A Geometric Symmetry
                </h4>
                <p
                  style={{
                    margin: 0,
                    fontFamily: fonts.sans,
                    fontSize: 16,
                    color: "rgba(255, 255, 255, 0.82)",
                    lineHeight: 1.5,
                  }}
                >
                  Indices reflect across diagonals or geometric axes.
                  <br />
                  <span style={{ color: theme.gold, fontFamily: fonts.mono, fontSize: 14 }}>
                    → Solve via Transpose, Horizontal flip, or Vertical flip.
                  </span>
                </p>
              </div>
            </div>

            {/* Branch 3: Decomposition */}
            <div
              style={{
                flex: 1,
                position: "relative",
                height: 245,
                borderRadius: 14,
                backgroundColor: "rgba(10, 48, 42, 0.92)",
                border: `1.5px solid ${showBranchDecomp ? theme.green : "rgba(255, 255, 255, 0.15)"}`,
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
                overflow: "hidden",
                opacity: showBranchDecomp ? 1 : 0.15,
              }}
            >
              <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                <RoughBox
                  width={566}
                  height={245}
                  stroke={showBranchDecomp ? theme.green : "rgba(255, 255, 255, 0.15)"}
                  strokeWidth={2}
                  seed={139}
                />
              </div>
              <div style={{ position: "relative", padding: "20px 22px", zIndex: 2 }}>
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 13,
                    fontWeight: 800,
                    color: theme.green,
                    marginBottom: 8,
                  }}
                >
                  OUTCOME 3
                </div>
                <h4
                  style={{
                    margin: "0 0 10px 0",
                    fontSize: 22,
                    fontWeight: 800,
                    color: theme.green,
                    fontFamily: fonts.sans,
                  }}
                >
                  Simpler Transformations
                </h4>
                <p
                  style={{
                    margin: 0,
                    fontFamily: fonts.sans,
                    fontSize: 16,
                    color: "rgba(255, 255, 255, 0.82)",
                    lineHeight: 1.5,
                  }}
                >
                  Complex coordinate motion factors into elementary steps.
                  <br />
                  <span style={{ color: theme.green, fontFamily: fonts.mono, fontSize: 14 }}>
                    → Solve by chaining two clean, independent transformations.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Core Ethos Banner (Y: 665..735) */}
          {showEthosBanner && (
            <div
              style={{
                position: "absolute",
                top: 665,
                left: 260,
                width: 1400,
                height: 70,
                borderRadius: 12,
                backgroundColor: "rgba(10, 48, 42, 0.95)",
                border: `1.5px solid ${theme.green}`,
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
                overflow: "hidden",
                zIndex: 20,
              }}
            >
              <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                <RoughBox
                  width={1400}
                  height={70}
                  stroke={theme.green}
                  strokeWidth={2}
                  seed={140}
                />
              </div>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 16,
                  height: "100%",
                  fontFamily: fonts.sans,
                  fontSize: 22,
                  fontWeight: 800,
                  color: theme.green,
                  letterSpacing: "0.05em",
                  zIndex: 2,
                }}
              >
                <span style={{ fontSize: 26 }}>✓</span>
                CODE COMES NATURALLY FROM GEOMETRIC LOGIC · ZERO GUESSWORK
              </div>
            </div>
          )}
        </div>
      )}

      {/* =================================================================== */}
      {/* 4. ACT 3: MASTER ROADMAP CURRICULUM HANDOFF (F2138..F2803)           */}
      {/* =================================================================== */}
      {isAct3 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: act3Opacity,
            zIndex: 10,
          }}
        >
          <MasterRoadmapV2
            completedCount={roadmapCompletedCount}
            completedGlobalNums={roadmapCompletedNums}
            activeGlobalNum={14}
            upNextGlobalNum={roadmapUpNextNum}
            spotlightRow={roadmapSpotlightRow}
            activeBadgeLabel={roadmapActiveBadgeLabel}
            activePatternId={1}
            scale={camScale}
            translateY={camY}
            translateX={camX}
          />
        </div>
      )}

      {/* =================================================================== */}
      {/* 5. CAPTIONS (Bottom anchored at Y: 960..1010, > 215px clearance)    */}
      {/* =================================================================== */}
      <Captions words={captionWords} bottom={36} />
    </div>
  );
};
