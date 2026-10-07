/**
 * Scene02Understand.tsx — Scene 02 · Question + Understand
 * Next Permutation (LeetCode 31) · Pattern 01 — Arrays & Hashing
 *
 * Implements the complete Question Understanding & Master Array Reveal:
 * - 2,075 frames @ 30fps (69.180s) strictly from sync/02-understand.json
 * - 23 Anchors strictly mapped from sync/02-understand.anchors.json
 * - Continuous frame-0 provenance from Scene 01 (ProblemOpenerShell pinned, center clean)
 * - Array V2 Law: Slots stationary, values drop in, index row fixed
 * - Master Array: [2, 1, 5, 4, 4, 3, 0] revealed value-by-value on spoken words
 * - Word W0068 vs W0069 token identity disambiguation
 * - Zero solution spoilers (no pivot/successor/reversal code)
 * - Transition out: APPROACH 1 · BRUTE FORCE banner, center stage clear for Scene 03
 */
import React, { useMemo } from "react";
import {
  Audio,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme, fonts } from "../../../../kit/lib/theme";
import { EASE } from "../../../../kit/lib/anim";
import { RoughLine } from "../../../../kit/components/RoughLine";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { ProblemOpenerShell } from "../../../../kit/components/ProblemOpenerShell";
import { ArrayTrackV2 } from "../../../../kit/components/array/ArrayTrackV2";
import { ArrayValueV2 } from "../../../../kit/components/array/ArrayValueV2";
import syncData from "../sync/02-understand.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings (from sync/02-understand.json)
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

// Master array target values
const MASTER_VALUES = [2, 1, 5, 4, 4, 3, 0];

// Spoken drop frames for each slot
const DROP_FRAMES = [956, 984, 1016, 1050, 1082, 1113, 1145];

export const Scene02Understand: React.FC = () => {
  const frame = useCurrentFrame();

  // =========================================================================
  // CAMERA ENGINE (Subtle pan/zoom strictly matching framewise plan)
  // =========================================================================
  const { camScale, camY }: { camScale: number; camY: number } = useMemo(() => {
    // F0..F1636: Default camera 1.00
    if (frame < 1636) {
      return { camScale: 1.0, camY: 0 };
    }
    // Beat 21 (F1636..F1715): Subtle punch-in (1.00 -> 1.03, camY 0 -> -15) for "So the real question is"
    if (frame >= 1636 && frame < 1715) {
      const scale = interpolate(frame, [1636, 1670], [1.0, 1.03], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const y = interpolate(frame, [1636, 1670], [0, -15], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: scale, camY: y };
    }
    // Beat 22 (F1715..F2005): Maintain 1.03 camera
    if (frame >= 1715 && frame < 2005) {
      return { camScale: 1.03, camY: -15 };
    }
    // Beat 23 (F2005..F2075): Settle back to 1.00 for Approach 1 handoff
    const scale = interpolate(frame, [2005, 2040], [1.03, 1.0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
    const y = interpolate(frame, [2005, 2040], [-15, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
    return { camScale: scale, camY: y };
  }, [frame]);

  // =========================================================================
  // SECTION VISIBILITY INTERVALS
  // =========================================================================
  // Stage 1: Idea of Permutation (Beats 01–03: F0..F310)
  const showStage1 = frame >= 0 && frame < 310;
  // Stage 2: Lexicographical Ordering & "Next" Definition (Beats 04–07: F310..F847)
  const showStage2 = frame >= 310 && frame < 847;
  // Stage 3: Master Array Active (Beats 08–22: F847..F2005)
  const showMasterArray = frame >= 847 && frame < 2005;
  // Stage 4: Approach 1 Brute Force Handoff (Beat 23: F2005..F2075)
  const showApproach1 = frame >= 2005;

  // Array elements configuration based on spoken drop frames
  const arrayElements = useMemo(() => {
    return MASTER_VALUES.map((val, idx) => {
      const dropF = DROP_FRAMES[idx];
      const isPopulated = frame >= dropF;
      return {
        value: isPopulated ? val : "",
        slotState: isPopulated ? ("confirmed" as const) : ("default" as const),
      };
    });
  }, [frame]);

  return (
    <div
      style={{
        position: "relative",
        width: 1920,
        height: 1080,
        overflow: "hidden",
        backgroundColor: theme.boardBg,
        fontFamily: fonts.hand,
        color: theme.chalkText,
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      {/* Audio VO */}
      <Audio src={staticFile("audio/012/02-understand.mp3")} />

      {/* Camera wrapper */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${camScale}) translateY(${camY}px)`,
          transformOrigin: "center center",
        }}
      >
        {/* ===================================================================== */}
        {/* TOP HEADER: Pinned ProblemOpenerShell (Frame 0 Continuity)            */}
        {/* ===================================================================== */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <ProblemOpenerShell
            pattern="01 · ARRAYS & HASHING"
            leetcodeNumber={31}
            difficulty="MEDIUM"
            title="Next Permutation"
            startFrame={-60}
            showBackground={false}
          />
        </div>

        {/* ===================================================================== */}
        {/* STAGE 1: THE IDEA OF PERMUTATION (Beats 01–03: F0..F310)              */}
        {/* ===================================================================== */}
        {showStage1 && (
          <div
            style={{
              position: "absolute",
              top: 240,
              left: 200,
              width: 1520,
              opacity: interpolate(frame, [0, 20, 290, 310], [0, 1, 1, 0], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Section Tag */}
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 22,
                color: theme.pivot,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              UNDERSTAND THE PROBLEM · THE CONCEPT
            </div>

            <div
              style={{
                fontFamily: fonts.display,
                fontSize: 54,
                fontWeight: 800,
                color: theme.chalkText,
                marginBottom: 36,
              }}
            >
              What is a Permutation?
            </div>

            {/* Beat 01 (F0..F80): Neutral items in a sequence */}
            {frame < 80 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: 30,
                }}
              >
                <div style={{ display: "flex", gap: 32, marginBottom: 24 }}>
                  {[0, 1, 2, 3].map((i) => {
                    const delay = i * 8;
                    const tokenOpacity = interpolate(frame, [delay, delay + 12], [0, 1], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                    });
                    const tokenScale = interpolate(frame, [delay, delay + 12], [0.85, 1], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                      easing: EASE,
                    });
                    return (
                      <div
                        key={i}
                        style={{
                          width: 80,
                          height: 80,
                          borderRadius: "50%",
                          border: `2.5px dashed ${theme.chalkDim}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: fonts.mono,
                          fontSize: 28,
                          color: theme.chalkDim,
                          opacity: tokenOpacity,
                          transform: `scale(${tokenScale})`,
                        }}
                      >
                        ·
                      </div>
                    );
                  })}
                </div>
                <div
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 28,
                    color: theme.chalkDim,
                  }}
                >
                  Suppose we have some items in a sequence...
                </div>
              </div>
            )}

            {/* Beat 02 (F80..F192): Different possible orders */}
            {frame >= 80 && frame < 192 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: 20,
                  opacity: interpolate(frame, [80, 95], [0, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  }),
                }}
              >
                <div style={{ display: "flex", gap: 36, marginBottom: 30 }}>
                  {[
                    { label: "Order 1", items: ["A", "B", "C"], start: 80 },
                    { label: "Order 2", items: ["B", "C", "A"], start: 115 },
                    { label: "Order 3", items: ["C", "A", "B"], start: 145 },
                  ].map((ord, idx) => {
                    const isVisible = frame >= ord.start;
                    const popScale = isVisible
                      ? interpolate(frame, [ord.start, ord.start + 12], [0.85, 1.0], {
                          extrapolateLeft: "clamp",
                          extrapolateRight: "clamp",
                          easing: EASE,
                        })
                      : 0.85;
                    const ordOpacity = isVisible
                      ? interpolate(frame, [ord.start, ord.start + 10], [0, 1], {
                          extrapolateLeft: "clamp",
                          extrapolateRight: "clamp",
                        })
                      : 0;
                    return (
                      <div
                        key={idx}
                        style={{
                          width: 260,
                          padding: "16px 20px",
                          borderRadius: 14,
                          border: `2px solid ${idx === 1 ? theme.cyan : theme.chalkDim}`,
                          backgroundColor: "rgba(10, 30, 22, 0.6)",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          opacity: ordOpacity,
                          transform: `scale(${popScale})`,
                        }}
                      >
                        <div
                          style={{
                            fontFamily: fonts.mono,
                            fontSize: 18,
                            color: theme.pivot,
                            marginBottom: 8,
                          }}
                        >
                          {ord.label}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            gap: 12,
                            fontFamily: fonts.mono,
                            fontSize: 32,
                            fontWeight: 700,
                            color: theme.chalkText,
                          }}
                        >
                          {ord.items.map((it, k) => (
                            <span
                              key={k}
                              style={{
                                padding: "4px 10px",
                                borderRadius: 6,
                                backgroundColor: "rgba(255,255,255,0.08)",
                              }}
                            >
                              {it}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 22,
                    color: theme.cyan,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  SAME UNDERLYING ITEMS · DIFFERENT ARRANGEMENT
                </div>
              </div>
            )}

            {/* Beat 03 (F192..F310): Definition of Permutation */}
            {frame >= 192 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: 20,
                  opacity: interpolate(frame, [192, 215], [0, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  }),
                }}
              >
                <div
                  style={{
                    position: "relative",
                    padding: "24px 44px",
                    borderRadius: 16,
                    border: `2.5px solid ${theme.cyan}`,
                    backgroundColor: "rgba(8, 32, 24, 0.75)",
                    display: "flex",
                    alignItems: "center",
                    gap: 28,
                    marginBottom: 20,
                  }}
                >
                  <div
                    style={{
                      fontFamily: fonts.display,
                      fontSize: 40,
                      color: theme.chalkText,
                      fontWeight: 700,
                    }}
                  >
                    Each Different Order
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 40,
                      color: theme.pivot,
                    }}
                  >
                    ──►
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.display,
                      fontSize: 50,
                      fontWeight: 900,
                      color: theme.cyan,
                      letterSpacing: "0.08em",
                    }}
                  >
                    PERMUTATION
                  </div>
                  {/* Underline drawn on "permutation" (F261..F283) */}
                  {frame >= 261 && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: 10,
                        right: 44,
                        width: 290,
                        height: 20,
                      }}
                    >
                      <RoughLine
                        shape={{ kind: "line", x1: 0, y1: 10, x2: 290, y2: 10 }}
                        width={290}
                        height={20}
                        startFrame={261}
                        durationInFrames={19}
                        stroke={theme.pivot}
                        strokeWidth={3}
                      />
                    </div>
                  )}
                </div>

                <div
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 26,
                    color: theme.chalkDim,
                  }}
                >
                  A permutation is a complete ordered arrangement of all elements.
                </div>
              </div>
            )}
          </div>
        )}

        {/* ===================================================================== */}
        {/* STAGE 2: LEXICOGRAPHICAL ORDER & "NEXT" DEFINITION (Beats 04–07)      */}
        {/* ===================================================================== */}
        {showStage2 && (
          <div
            style={{
              position: "absolute",
              top: 240,
              left: 160,
              width: 1600,
              opacity: interpolate(frame, [310, 330, 825, 847], [0, 1, 1, 0], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Header Tag */}
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 22,
                color: theme.pivot,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              ORDERING PERMUTATIONS · DICTIONARY ORDER
            </div>

            <div
              style={{
                fontFamily: fonts.display,
                fontSize: 50,
                fontWeight: 800,
                color: theme.chalkText,
                marginBottom: 36,
              }}
            >
              Lexicographical (Dictionary) Order
            </div>

            {/* Ordering Axis (Beats 04–06) */}
            <div
              style={{
                position: "relative",
                width: 1300,
                height: 180,
                marginTop: 10,
              }}
            >
              {/* Horizontal line */}
              <div
                style={{
                  position: "absolute",
                  top: 70,
                  left: 60,
                  width: 1180,
                  height: 4,
                  backgroundColor: "rgba(255,255,255,0.25)",
                }}
              />

              {/* Drawn colored axis */}
              <svg
                width="1300"
                height="180"
                style={{ position: "absolute", inset: 0, overflow: "visible" }}
              >
                <defs>
                  <marker
                    id="arrowhead-gold"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3.5, 0 7" fill={theme.pivot} />
                  </marker>
                </defs>
                <line
                  x1="60"
                  y1="70"
                  x2={interpolate(frame, [360, 477], [60, 1220], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  })}
                  y2="70"
                  stroke={theme.pivot}
                  strokeWidth={3.5}
                  markerEnd="url(#arrowhead-gold)"
                />
              </svg>

              {/* Left Label: SMALLER */}
              <div
                style={{
                  position: "absolute",
                  top: 20,
                  left: 40,
                  fontFamily: fonts.mono,
                  fontSize: 20,
                  color: theme.cyan,
                  letterSpacing: "0.1em",
                }}
              >
                ◄ SMALLER (e.g. 123)
              </div>

              {/* Right Label: LARGER */}
              <div
                style={{
                  position: "absolute",
                  top: 20,
                  right: 40,
                  fontFamily: fonts.mono,
                  fontSize: 20,
                  color: theme.pivot,
                  letterSpacing: "0.1em",
                }}
              >
                LARGER (e.g. 321) ►
              </div>

              {/* Beat 05 (F554..F658): Far-right jump crossed out */}
              {frame >= 554 && frame < 658 && (
                <div
                  style={{
                    position: "absolute",
                    top: 115,
                    right: 60,
                    padding: "8px 18px",
                    borderRadius: 10,
                    border: `2px solid ${theme.bad}`,
                    backgroundColor: "rgba(50, 10, 10, 0.85)",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    opacity: interpolate(frame, [554, 575], [0, 1], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                    }),
                  }}
                >
                  <span style={{ fontSize: 28, color: theme.bad, fontWeight: 900 }}>✖</span>
                  <div style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.bad }}>
                    NOT ANY BIGGER PERMUTATION
                  </div>
                </div>
              )}

              {/* Beat 06 (F658..F713): Tight adjacent step CURRENT -> NEXT */}
              {frame >= 658 && (
                <div
                  style={{
                    position: "absolute",
                    top: 20,
                    left: 480,
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                    opacity: interpolate(frame, [658, 675], [0, 1], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                    }),
                  }}
                >
                  <div
                    style={{
                      padding: "10px 22px",
                      borderRadius: 10,
                      border: `2px solid ${theme.cyan}`,
                      backgroundColor: "rgba(10, 30, 24, 0.8)",
                      fontFamily: fonts.mono,
                      fontSize: 20,
                      fontWeight: 700,
                      color: theme.cyan,
                    }}
                  >
                    CURRENT
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 28,
                      fontWeight: 900,
                      color: theme.good,
                    }}
                  >
                    ──►
                  </div>
                  <div
                    style={{
                      padding: "10px 22px",
                      borderRadius: 10,
                      border: `2px solid ${theme.good}`,
                      backgroundColor: "rgba(10, 45, 20, 0.85)",
                      fontFamily: fonts.mono,
                      fontSize: 20,
                      fontWeight: 800,
                      color: theme.good,
                    }}
                  >
                    VERY NEXT (+1)
                  </div>
                </div>
              )}
            </div>

            {/* Beat 07 (F713..F847): Exact Mathematical Definition of NEXT */}
            {frame >= 713 && (
              <div
                style={{
                  position: "relative",
                  marginTop: 30,
                  padding: "24px 48px",
                  borderRadius: 16,
                  border: `2.5px solid ${theme.cyan}`,
                  backgroundColor: "rgba(8, 30, 24, 0.85)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  opacity: interpolate(frame, [713, 735], [0, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  }),
                }}
              >
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 20,
                    color: theme.pivot,
                    letterSpacing: "0.15em",
                    marginBottom: 10,
                  }}
                >
                  FORMAL SPECIFICATION
                </div>
                <div
                  style={{
                    fontFamily: fonts.display,
                    fontSize: 42,
                    fontWeight: 800,
                    color: theme.chalkText,
                    display: "flex",
                    gap: 14,
                    alignItems: "center",
                  }}
                >
                  <span>NEXT</span>
                  <span style={{ color: theme.pivot }}>=</span>
                  <span style={{ color: theme.cyan }}>SMALLEST PERMUTATION</span>
                  <span style={{ color: theme.pivot }}>&gt;</span>
                  <span>CURRENT</span>
                </div>
                <div
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 24,
                    color: theme.chalkDim,
                    marginTop: 8,
                  }}
                >
                  The smallest possible increase in dictionary order.
                </div>
              </div>
            )}
          </div>
        )}

        {/* ===================================================================== */}
        {/* STAGE 3: MASTER ARRAY ACTIVE (Beats 08–22: F847..F2005)               */}
        {/* ===================================================================== */}
        {showMasterArray && (
          <div
            style={{
              position: "absolute",
              top: 250,
              left: 200,
              width: 1520,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              opacity: interpolate(frame, [847, 875, 1990, 2005], [0, 1, 1, 0], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            {/* Beat 21/22 Question Banner or Standard Master Track Title */}
            {frame >= 1636 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginBottom: 30,
                  opacity: interpolate(frame, [1636, 1660], [0, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  }),
                }}
              >
                <div
                  style={{
                    padding: "6px 20px",
                    borderRadius: 20,
                    backgroundColor: "rgba(245, 158, 11, 0.2)",
                    border: `2px solid ${theme.pivot}`,
                    fontFamily: fonts.mono,
                    fontSize: 18,
                    fontWeight: 700,
                    color: theme.pivot,
                    letterSpacing: "0.2em",
                    marginBottom: 10,
                  }}
                >
                  THE REAL QUESTION
                </div>
                <div
                  style={{
                    fontFamily: fonts.display,
                    fontSize: 44,
                    fontWeight: 800,
                    color: theme.chalkText,
                    textAlign: "center",
                  }}
                >
                  How to find the next arrangement without generating all 7! permutations?
                </div>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 36,
                }}
              >
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 22,
                    fontWeight: 700,
                    color: theme.pivot,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  MASTER ARRAY · nums
                </div>
                <div
                  style={{
                    padding: "4px 12px",
                    borderRadius: 12,
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: `1.5px solid ${theme.chalkDim}`,
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    color: theme.chalkDim,
                  }}
                >
                  length: 7
                </div>
              </div>
            )}

            {/* ArrayTrackV2: Master 7-slot array */}
            <div style={{ position: "relative", marginBottom: 36 }}>
              {/* Beat 16 (F1187..F1256): Identity wrapper badge */}
              {frame >= 1187 && frame < 1256 && (
                <div
                  style={{
                    position: "absolute",
                    top: -46,
                    left: "50%",
                    transform: "translateX(-50%)",
                    padding: "4px 18px",
                    borderRadius: 12,
                    border: `1.5px solid ${theme.cyan}`,
                    backgroundColor: "rgba(8, 30, 24, 0.9)",
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    fontWeight: 700,
                    color: theme.cyan,
                    letterSpacing: "0.1em",
                    whiteSpace: "nowrap",
                    opacity: interpolate(frame, [1187, 1205], [0, 1], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                    }),
                  }}
                >
                  MUTATE THIS SAME ARRAY (NO DUPLICATE COPY)
                </div>
              )}

              <ArrayTrackV2
                elements={arrayElements}
                slotWidth={110}
                slotHeight={100}
                gap={16}
                maxWidth={1200}
                showIndices={true}
                indexPlacement="bottom"
                indexFormat="idx [i]"
                renderValue={(item, rect) => {
                  if (item.value === "") return null;
                  const idx = rect.index;
                  const dropF = DROP_FRAMES[idx];
                  const dropProgress = interpolate(frame, [dropF, dropF + 8], [0, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                    easing: EASE,
                  });
                  const valY = rect.centerY - (1 - dropProgress) * 28;
                  const valOpacity = dropProgress;
                  const valScale = interpolate(dropProgress, [0, 0.7, 1], [0.8, 1.18, 1.0]);

                  return (
                    <ArrayValueV2
                      value={item.value}
                      x={rect.centerX}
                      y={valY}
                      fontSize={48}
                      scale={valScale}
                      opacity={valOpacity}
                    />
                  );
                }}
              />
            </div>

            {/* Beat 17 (F1256..F1331): Destination marker NEXT [ ? ] */}
            {frame >= 1256 && frame < 1331 && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginTop: 10,
                  opacity: interpolate(frame, [1256, 1275], [0, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  }),
                }}
              >
                <div style={{ fontFamily: fonts.mono, fontSize: 26, color: theme.pivot }}>
                  TRANSFORM INTO NEXT ──►
                </div>
                <div
                  style={{
                    padding: "8px 20px",
                    borderRadius: 12,
                    border: `2px dashed ${theme.cyan}`,
                    backgroundColor: "rgba(10, 30, 24, 0.7)",
                    fontFamily: fonts.mono,
                    fontSize: 26,
                    fontWeight: 700,
                    color: theme.cyan,
                  }}
                >
                  [ ? , ? , ? , ? , ? , ? , ? ]
                </div>
              </div>
            )}

            {/* Beat 18 (F1331..F1413): IN-PLACE constraint stamp */}
            {frame >= 1331 && frame < 1413 && (
              <div
                style={{
                  marginTop: 16,
                  padding: "12px 28px",
                  borderRadius: 14,
                  border: `2.5px solid ${theme.cyan}`,
                  backgroundColor: "rgba(8, 30, 24, 0.9)",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  opacity: interpolate(frame, [1331, 1345], [0, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  }),
                  transform: `scale(${interpolate(frame, [1331, 1345], [0.92, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                    easing: EASE,
                  })})`,
                }}
              >
                <span style={{ fontSize: 24, color: theme.cyan, fontWeight: 900 }}>⚡</span>
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 22,
                    fontWeight: 700,
                    color: theme.cyan,
                    letterSpacing: "0.1em",
                  }}
                >
                  CONSTRAINT: IN-PLACE MUTATION · O(1) EXTRA SPACE
                </div>
              </div>
            )}

            {/* Beat 19 & 20 (F1413..F1636): Edge Condition & Wraparound */}
            {frame >= 1413 && frame < 1636 && (
              <div
                style={{
                  marginTop: 10,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  opacity: interpolate(frame, [1413, 1435], [0, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  }),
                }}
              >
                <div
                  style={{
                    padding: "10px 24px",
                    borderRadius: 12,
                    border: `2px solid ${theme.pivot}`,
                    backgroundColor: "rgba(35, 25, 10, 0.85)",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 12,
                  }}
                >
                  <span style={{ color: theme.pivot, fontSize: 20 }}>⚠</span>
                  <div style={{ fontFamily: fonts.mono, fontSize: 20, color: theme.pivot }}>
                    IF NO GREATER PERMUTATION EXISTS (e.g. DESCENDING ORDER)
                  </div>
                </div>

                {/* Beat 20 (F1506..F1636): Wraparound rule */}
                {frame >= 1506 && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      padding: "8px 22px",
                      borderRadius: 12,
                      border: `2px solid ${theme.good}`,
                      backgroundColor: "rgba(10, 40, 20, 0.85)",
                      opacity: interpolate(frame, [1506, 1525], [0, 1], {
                        extrapolateLeft: "clamp",
                        extrapolateRight: "clamp",
                      }),
                    }}
                  >
                    <span style={{ color: theme.good, fontSize: 22, fontWeight: 900 }}>↺</span>
                    <div
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 20,
                        fontWeight: 700,
                        color: theme.good,
                      }}
                    >
                      WRAPAROUND: RESTART AT SMALLEST (SORTED ASCENDING)
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Beat 22 (F1715..F2005): Factorial Explosion Warning */}
            {frame >= 1715 && frame < 2005 && (
              <div
                style={{
                  marginTop: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  padding: "12px 28px",
                  borderRadius: 14,
                  border: `2.5px solid ${theme.bad}`,
                  backgroundColor: "rgba(45, 10, 10, 0.85)",
                  opacity: interpolate(frame, [1715, 1740], [0, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  }),
                }}
              >
                <span style={{ fontSize: 32, color: theme.bad, fontWeight: 900 }}>✖</span>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 22,
                      fontWeight: 800,
                      color: theme.bad,
                    }}
                  >
                    GENERATE ALL 7! = 5,040 PERMUTATIONS?
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.hand,
                      fontSize: 20,
                      color: theme.chalkDim,
                    }}
                  >
                    O(N! · N) complexity is far too expensive!
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ===================================================================== */}
        {/* STAGE 4: APPROACH 1 BRUTE FORCE HANDOFF (Beat 23: F2005..F2075)       */}
        {/* ===================================================================== */}
        {showApproach1 && (
          <div
            style={{
              position: "absolute",
              top: 320,
              left: 200,
              width: 1520,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              opacity: interpolate(frame, [2005, 2030], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            {/* Approach Pill */}
            <div
              style={{
                padding: "8px 24px",
                borderRadius: 24,
                border: `2px solid ${theme.pivot}`,
                backgroundColor: "rgba(245, 158, 11, 0.15)",
                fontFamily: fonts.mono,
                fontSize: 20,
                fontWeight: 700,
                color: theme.pivot,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              METHOD SELECTION
            </div>

            {/* Approach Title Card */}
            <div
              style={{
                padding: "32px 64px",
                borderRadius: 20,
                border: `3px solid ${theme.pivot}`,
                backgroundColor: "rgba(10, 32, 24, 0.95)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0 16px 40px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div
                style={{
                  fontFamily: fonts.display,
                  fontSize: 60,
                  fontWeight: 900,
                  color: theme.chalkText,
                  letterSpacing: "0.04em",
                  marginBottom: 12,
                }}
              >
                APPROACH 1 · BRUTE FORCE
              </div>

              <div
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 28,
                  color: theme.chalkDim,
                  marginBottom: 20,
                }}
              >
                Generate all permutations and find the immediate successor.
              </div>

              {/* Complexity Preview Badges */}
              <div style={{ display: "flex", gap: 20 }}>
                <div
                  style={{
                    padding: "6px 16px",
                    borderRadius: 8,
                    backgroundColor: "rgba(239, 68, 68, 0.2)",
                    border: `1.5px solid ${theme.bad}`,
                    fontFamily: fonts.mono,
                    fontSize: 18,
                    color: theme.bad,
                    fontWeight: 700,
                  }}
                >
                  Time: O(N! · N)
                </div>
                <div
                  style={{
                    padding: "6px 16px",
                    borderRadius: 8,
                    backgroundColor: "rgba(245, 158, 11, 0.2)",
                    border: `1.5px solid ${theme.pivot}`,
                    fontFamily: fonts.mono,
                    fontSize: 18,
                    color: theme.pivot,
                    fontWeight: 700,
                  }}
                >
                  Space: O(N!)
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom captions */}
      <Captions words={captionWords} bottom={38} fontSize={38} />
    </div>
  );
};
