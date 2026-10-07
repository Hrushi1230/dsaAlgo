/**
 * Scene03BruteTrace.tsx — Scene 03 · Method 1: Brute Force Trace
 * Next Permutation (LeetCode 31) · Pattern 01 — Arrays & Hashing
 *
 * Implements the complete Method 1 Visual Trace:
 * - 2,275 frames @ 30fps (75.840s) strictly from sync/03-brute-trace.json
 * - 28 Anchors strictly mapped from sync/03-brute-trace.anchors.json
 * - Compact authoritative top header strip at Y: 36..80 (zero header overlap)
 * - Mathematical equilateral vertical centering across all 5 stages (zero bottom void)
 * - Array V2 Law: stationary slots, moving values, fixed indices
 * - Pure chalk rough borders (RoughBox, RoughLine, RoughCurve) + rich dark translucent chalkboard surfaces
 * - 4-Step Pipeline: GENERATE ──► ORDER ──► FIND ──► TAKE NEXT with RoughBox cards & RoughLine arrows
 * - Tiny Example [1, 2, 3] with enlarged ArrayTrackV2 & RoughBox info card
 * - All 6 permutations in 2-column x 3-row grid with RoughBox borders, large 36px digits, and status badges
 * - Persistent dynamic status card in Stage 3 eliminating dead void at F1150
 * - Spotlight on CURRENT [1, 3, 2] (cyan) and NEXT [2, 1, 3] (gold) with immediate successor proof
 * - Wraparound loop: LAST [3, 2, 1] -> FIRST [1, 2, 3] with RoughCurve chalk bezier loop
 * - Qualitative growth escalation with RoughBox danger card (zero n! formula spoilers)
 * - Empty code surface shell ready for Scene 04 handoff
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
import { RoughBox } from "../../../../kit/components/RoughBox";
import { RoughLine } from "../../../../kit/components/RoughLine";
import { RoughCurve } from "../../../../kit/components/RoughCurve";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { ArrayTrackV2 } from "../../../../kit/components/array/ArrayTrackV2";
import syncData from "../sync/03-brute-trace.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings (from sync/03-brute-trace.json)
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

// The 6 lexicographical permutations of [1, 2, 3]
const PERMUTATIONS = [
  { id: "P0", num: "#1", values: [1, 2, 3], frame: 823, seed: 11 },
  { id: "P1", num: "#2", values: [1, 3, 2], frame: 852, seed: 12 },
  { id: "P2", num: "#3", values: [2, 1, 3], frame: 889, seed: 13 },
  { id: "P3", num: "#4", values: [2, 3, 1], frame: 938, seed: 14 },
  { id: "P4", num: "#5", values: [3, 1, 2], frame: 986, seed: 15 },
  { id: "P5", num: "#6", values: [3, 2, 1], frame: 1036, seed: 16 },
];

export const Scene03BruteTrace: React.FC = () => {
  const frame = useCurrentFrame();

  // =========================================================================
  // CAMERA ENGINE (Subtle pan/zoom matching pedagogical anchors)
  // =========================================================================
  const { camScale, camY }: { camScale: number; camY: number } = useMemo(() => {
    if (frame < 495) return { camScale: 1.0, camY: 0 };
    if (frame >= 495 && frame < 823) {
      const s = interpolate(frame, [495, 530], [1.0, 1.02], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: s, camY: -4 };
    }
    if (frame >= 823 && frame < 1313) {
      if (frame >= 1102) {
        const s = interpolate(frame, [1102, 1140], [1.0, 1.025], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: EASE,
        });
        return { camScale: s, camY: -5 };
      }
      return { camScale: 1.0, camY: 0 };
    }
    if (frame >= 1313 && frame < 1874) return { camScale: 1.0, camY: 0 };
    if (frame >= 1874 && frame < 2088) {
      const s = interpolate(frame, [1874, 1920], [1.0, 1.02], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: s, camY: -4 };
    }
    return { camScale: 1.0, camY: 0 };
  }, [frame]);

  // Stage visibility windows
  const showStage1 = frame < 495;
  const showStage2 = frame >= 495 && frame < 823;
  const showStage3 = frame >= 823 && frame < 1313;
  const showStage4 = frame >= 1313 && frame < 1874;
  const showStage5 = frame >= 1874;

  // Tiny array elements [1, 2, 3] dropping in at frames 663, 692, 717
  const tinyElements = useMemo(() => {
    return [1, 2, 3].map((val, idx) => {
      let isPopulated = false;
      if (idx === 0 && frame >= 663) isPopulated = true;
      if (idx === 1 && frame >= 692) isPopulated = true;
      if (idx === 2 && frame >= 717) isPopulated = true;
      return {
        value: isPopulated ? val : "",
        slotState: isPopulated ? ("confirmed" as const) : ("default" as const),
      };
    });
  }, [frame]);

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        position: "relative",
        overflow: "hidden",
        backgroundColor: theme.boardBg,
        fontFamily: fonts.sans,
      }}
    >
      {/* Background Chalkboard & Ambient Atmosphere */}
      <ChalkboardBackground />
      <ChalkFilters />

      {/* Audio Track */}
      <Audio src={staticFile("audio/012/03-brute-trace.mp3")} />

      {/* ===================================================================== */}
      {/* TOP HEADER BAR: Compact, Authoritative Course Header Strip (Y: 36..80)*/}
      {/* ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 36,
          left: 80,
          right: 80,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 50,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              padding: "6px 16px",
              borderRadius: 6,
              border: `1.5px solid ${theme.cardBorder}`,
              backgroundColor: "rgba(248, 246, 240, 0.05)",
              fontFamily: fonts.mono,
              fontSize: 14,
              fontWeight: 700,
              color: theme.chalkText,
              letterSpacing: "0.08em",
            }}
          >
            01 · ARRAYS & HASHING · LC 31
          </div>
          <div
            style={{
              padding: "6px 14px",
              borderRadius: 6,
              border: `1.5px solid ${theme.better}`,
              backgroundColor: "rgba(110, 231, 183, 0.1)",
              fontFamily: fonts.mono,
              fontSize: 13,
              fontWeight: 800,
              color: theme.better,
              letterSpacing: "0.08em",
            }}
          >
            MEDIUM
          </div>
        </div>

        <div
          style={{
            fontFamily: fonts.display,
            fontSize: 28,
            fontWeight: 700,
            color: theme.chalkText,
            letterSpacing: "0.04em",
          }}
        >
          Next Permutation
        </div>

        <div
          style={{
            padding: "6px 16px",
            borderRadius: 6,
            border: `2px solid ${theme.pivot}`,
            backgroundColor: "rgba(255, 209, 102, 0.15)",
            fontFamily: fonts.mono,
            fontSize: 14,
            fontWeight: 800,
            color: theme.pivot,
            letterSpacing: "0.08em",
          }}
        >
          APPROACH 1 · BRUTE FORCE
        </div>
      </div>

      {/* ===================================================================== */}
      {/* MAIN CAMERA RIG & CENTER STAGE CONTENT ZONE                           */}
      {/* Mathematically centered between Top Header (Y: 80) and Captions (Y: 960)*/}
      {/* ===================================================================== */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${camScale}) translateY(${camY}px)`,
          transformOrigin: "960px 490px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* ===================================================================== */}
        {/* STAGE 1: 4-STEP BRUTE FORCE PIPELINE (Beats 01–05, F0..F495)          */}
        {/* Mathematically centered: top: 265, height: 510px, bottom clearance: 185px */}
        {/* ===================================================================== */}
        {showStage1 && (
          <div
            style={{
              position: "absolute",
              top: 265,
              width: 1620,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              opacity: interpolate(frame, [465, 495], [1, 0], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            {/* Approach Subtitle */}
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 17,
                fontWeight: 700,
                color: theme.pivot,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              APPROACH 1 · BRUTE FORCE CONCEPT
            </div>

            <div
              style={{
                fontFamily: fonts.display,
                fontSize: 50,
                fontWeight: 800,
                color: theme.chalkText,
                marginBottom: 32,
              }}
            >
              The Simplest Idea
            </div>

            {/* 4 Pipeline Nodes with RoughBox Chalk Borders */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 18,
                width: 1560,
              }}
            >
              {/* Step 1: GENERATE (W0004..W0010, F71) */}
              {frame >= 71 ? (
                <div
                  style={{
                    position: "relative",
                    width: 340,
                    height: 290,
                    borderRadius: 14,
                    backgroundColor: "rgba(10, 42, 36, 0.92)",
                    boxShadow: "0 14px 34px rgba(0,0,0,0.4)",
                    opacity: interpolate(frame, [71, 95], [0, 1], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                    }),
                    transform: `scale(${interpolate(frame, [71, 95], [0.92, 1], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                      easing: EASE,
                    })})`,
                  }}
                >
                  <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                    <RoughBox
                      width={340}
                      height={290}
                      stroke={theme.cyan}
                      strokeWidth={3}
                      seed={1}
                      startFrame={71}
                      durationInFrames={18}
                    />
                  </div>
                  <div
                    style={{
                      position: "relative",
                      zIndex: 2,
                      padding: "26px 22px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      height: "100%",
                      boxSizing: "border-box",
                    }}
                  >
                    <div
                      style={{
                        padding: "5px 16px",
                        borderRadius: 6,
                        backgroundColor: "rgba(92, 225, 230, 0.2)",
                        border: `1.5px solid ${theme.cyan}`,
                        fontFamily: fonts.mono,
                        fontSize: 14,
                        fontWeight: 800,
                        color: theme.cyan,
                        marginBottom: 14,
                      }}
                    >
                      STEP 1
                    </div>
                    <div
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 26,
                        fontWeight: 900,
                        color: theme.chalkText,
                        marginBottom: 12,
                      }}
                    >
                      GENERATE
                    </div>
                    <div
                      style={{
                        fontFamily: fonts.hand,
                        fontSize: 23,
                        color: theme.chalkText,
                        lineHeight: 1.38,
                      }}
                    >
                      Generate every possible permutation
                    </div>
                    <div
                      style={{
                        marginTop: "auto",
                        fontFamily: fonts.mono,
                        fontSize: 14,
                        color: theme.cyan,
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                      }}
                    >
                      All Arrangements
                    </div>
                  </div>
                </div>
              ) : (
                <div style={{ width: 340, height: 290 }} />
              )}

              {/* Arrow 1 -> 2 */}
              <div style={{ width: 44, height: 30, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {frame >= 186 && (
                  <RoughLine
                    shape={{ kind: "arrow", x1: 0, y1: 15, x2: 40, y2: 15 }}
                    width={44}
                    height={30}
                    stroke={theme.pivot}
                    strokeWidth={3.5}
                    seed={2}
                    startFrame={186}
                  />
                )}
              </div>

              {/* Step 2: ORDER (W0011..W0022, F186) */}
              {frame >= 186 ? (
                <div
                  style={{
                    position: "relative",
                    width: 340,
                    height: 290,
                    borderRadius: 14,
                    backgroundColor: "rgba(42, 38, 12, 0.92)",
                    boxShadow: "0 14px 34px rgba(0,0,0,0.4)",
                    opacity: interpolate(frame, [186, 210], [0, 1], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                    }),
                    transform: `scale(${interpolate(frame, [186, 210], [0.92, 1], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                      easing: EASE,
                    })})`,
                  }}
                >
                  <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                    <RoughBox
                      width={340}
                      height={290}
                      stroke={theme.pivot}
                      strokeWidth={3}
                      seed={3}
                      startFrame={186}
                      durationInFrames={18}
                    />
                  </div>
                  <div
                    style={{
                      position: "relative",
                      zIndex: 2,
                      padding: "26px 22px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      height: "100%",
                      boxSizing: "border-box",
                    }}
                  >
                    <div
                      style={{
                        padding: "5px 16px",
                        borderRadius: 6,
                        backgroundColor: "rgba(255, 209, 102, 0.2)",
                        border: `1.5px solid ${theme.pivot}`,
                        fontFamily: fonts.mono,
                        fontSize: 14,
                        fontWeight: 800,
                        color: theme.pivot,
                        marginBottom: 14,
                      }}
                    >
                      STEP 2
                    </div>
                    <div
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 26,
                        fontWeight: 900,
                        color: theme.chalkText,
                        marginBottom: 12,
                      }}
                    >
                      ORDER
                    </div>
                    <div
                      style={{
                        fontFamily: fonts.hand,
                        fontSize: 23,
                        color: theme.chalkText,
                        lineHeight: 1.38,
                      }}
                    >
                      Arrange all in lexicographical order
                    </div>
                    <div
                      style={{
                        marginTop: "auto",
                        fontFamily: fonts.mono,
                        fontSize: 14,
                        color: theme.pivot,
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                      }}
                    >
                      Dictionary Order
                    </div>
                  </div>
                </div>
              ) : (
                <div style={{ width: 340, height: 290 }} />
              )}

              {/* Arrow 2 -> 3 */}
              <div style={{ width: 44, height: 30, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {frame >= 298 && (
                  <RoughLine
                    shape={{ kind: "arrow", x1: 0, y1: 15, x2: 40, y2: 15 }}
                    width={44}
                    height={30}
                    stroke={theme.pivot}
                    strokeWidth={3.5}
                    seed={4}
                    startFrame={298}
                  />
                )}
              </div>

              {/* Step 3: FIND (W0023..W0034, F298) */}
              {frame >= 298 ? (
                <div
                  style={{
                    position: "relative",
                    width: 340,
                    height: 290,
                    borderRadius: 14,
                    backgroundColor: "rgba(10, 42, 36, 0.92)",
                    boxShadow: "0 14px 34px rgba(0,0,0,0.4)",
                    opacity: interpolate(frame, [298, 320], [0, 1], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                    }),
                    transform: `scale(${interpolate(frame, [298, 320], [0.92, 1], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                      easing: EASE,
                    })})`,
                  }}
                >
                  <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                    <RoughBox
                      width={340}
                      height={290}
                      stroke={theme.cyan}
                      strokeWidth={3}
                      seed={5}
                      startFrame={298}
                      durationInFrames={18}
                    />
                  </div>
                  <div
                    style={{
                      position: "relative",
                      zIndex: 2,
                      padding: "26px 22px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      height: "100%",
                      boxSizing: "border-box",
                    }}
                  >
                    <div
                      style={{
                        padding: "5px 16px",
                        borderRadius: 6,
                        backgroundColor: "rgba(92, 225, 230, 0.2)",
                        border: `1.5px solid ${theme.cyan}`,
                        fontFamily: fonts.mono,
                        fontSize: 14,
                        fontWeight: 800,
                        color: theme.cyan,
                        marginBottom: 14,
                      }}
                    >
                      STEP 3
                    </div>
                    <div
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 26,
                        fontWeight: 900,
                        color: theme.chalkText,
                        marginBottom: 12,
                      }}
                    >
                      FIND
                    </div>
                    <div
                      style={{
                        fontFamily: fonts.hand,
                        fontSize: 23,
                        color: theme.chalkText,
                        lineHeight: 1.38,
                      }}
                    >
                      Find our current permutation in list
                    </div>
                    <div
                      style={{
                        marginTop: "auto",
                        fontFamily: fonts.mono,
                        fontSize: 14,
                        color: theme.cyan,
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                      }}
                    >
                      Locate Target
                    </div>
                  </div>
                </div>
              ) : (
                <div style={{ width: 340, height: 290 }} />
              )}

              {/* Arrow 3 -> 4 */}
              <div style={{ width: 44, height: 30, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {frame >= 403 && (
                  <RoughLine
                    shape={{ kind: "arrow", x1: 0, y1: 15, x2: 40, y2: 15 }}
                    width={44}
                    height={30}
                    stroke={theme.good}
                    strokeWidth={3.5}
                    seed={6}
                    startFrame={403}
                  />
                )}
              </div>

              {/* Step 4: TAKE NEXT (W0035..W0043, F403) */}
              {frame >= 403 ? (
                <div
                  style={{
                    position: "relative",
                    width: 340,
                    height: 290,
                    borderRadius: 14,
                    backgroundColor: "rgba(10, 42, 24, 0.92)",
                    boxShadow: "0 14px 34px rgba(0,0,0,0.4)",
                    opacity: interpolate(frame, [403, 425], [0, 1], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                    }),
                    transform: `scale(${interpolate(frame, [403, 425], [0.92, 1], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                      easing: EASE,
                    })})`,
                  }}
                >
                  <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                    <RoughBox
                      width={340}
                      height={290}
                      stroke={theme.good}
                      strokeWidth={3.5}
                      seed={7}
                      startFrame={403}
                      durationInFrames={18}
                    />
                  </div>
                  <div
                    style={{
                      position: "relative",
                      zIndex: 2,
                      padding: "26px 22px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      height: "100%",
                      boxSizing: "border-box",
                    }}
                  >
                    <div
                      style={{
                        padding: "5px 16px",
                        borderRadius: 6,
                        backgroundColor: "rgba(60, 229, 167, 0.2)",
                        border: `1.5px solid ${theme.good}`,
                        fontFamily: fonts.mono,
                        fontSize: 14,
                        fontWeight: 800,
                        color: theme.good,
                        marginBottom: 14,
                      }}
                    >
                      STEP 4
                    </div>
                    <div
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 26,
                        fontWeight: 900,
                        color: theme.chalkText,
                        marginBottom: 12,
                      }}
                    >
                      TAKE NEXT
                    </div>
                    <div
                      style={{
                        fontFamily: fonts.hand,
                        fontSize: 23,
                        color: theme.chalkText,
                        lineHeight: 1.38,
                      }}
                    >
                      Take the one immediately after it
                    </div>
                    <div
                      style={{
                        marginTop: "auto",
                        fontFamily: fonts.mono,
                        fontSize: 14,
                        color: theme.good,
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                      }}
                    >
                      Successor (+1)
                    </div>
                  </div>
                </div>
              ) : (
                <div style={{ width: 340, height: 290 }} />
              )}
            </div>

            {/* Bottom Key Takeaway Card */}
            {frame >= 403 && (
              <div
                style={{
                  position: "relative",
                  width: 1200,
                  height: 84,
                  marginTop: 32,
                  borderRadius: 14,
                  backgroundColor: "rgba(20, 26, 22, 0.88)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
                  opacity: interpolate(frame, [403, 425], [0, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  }),
                }}
              >
                <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                  <RoughBox
                    width={1200}
                    height={84}
                    stroke={theme.cardBorder}
                    seed={8}
                    startFrame={403}
                  />
                </div>
                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    gap: 16,
                  }}
                >
                  <span style={{ fontSize: 26, color: theme.pivot }}>💡</span>
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 19,
                      fontWeight: 700,
                      color: theme.chalkText,
                      letterSpacing: "0.04em",
                    }}
                  >
                    SYSTEMATIC 4-STEP SEARCH OVER ALL ORDERED ARRANGEMENTS
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ===================================================================== */}
        {/* STAGE 2: TINY EXAMPLE [1, 2, 3] SETUP (Beats 06–10, F495..F823)        */}
        {/* Mathematically centered: top: 252, height: 535px, bottom clearance: 173px */}
        {/* ===================================================================== */}
        {showStage2 && (
          <div
            style={{
              position: "absolute",
              top: 252,
              width: 1400,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              opacity: interpolate(frame, [495, 520, 795, 823], [0, 1, 1, 0], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 17,
                fontWeight: 700,
                color: theme.pivot,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              TINY EXAMPLE · 3 ELEMENTS
            </div>

            <div
              style={{
                fontFamily: fonts.display,
                fontSize: 52,
                fontWeight: 800,
                color: theme.chalkText,
                marginBottom: 32,
              }}
            >
              Suppose we have [ 1, 2, 3 ]
            </div>

            {/* 3-Slot ArrayTrackV2 with prominent, substantial slots */}
            <div style={{ marginTop: 4, marginBottom: 34 }}>
              <ArrayTrackV2
                elements={tinyElements}
                slotWidth={160}
                slotHeight={160}
                gap={32}
                indexPlacement="bottom"
                showIndices={true}
              />
            </div>

            {/* Explanatory Card with RoughBox */}
            <div
              style={{
                position: "relative",
                width: 1100,
                height: 170,
                borderRadius: 16,
                backgroundColor: "rgba(10, 42, 38, 0.88)",
                boxShadow: "0 14px 36px rgba(0,0,0,0.4)",
              }}
            >
              <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                <RoughBox
                  width={1100}
                  height={170}
                  stroke={theme.cyan}
                  strokeWidth={3}
                  seed={12}
                  startFrame={495}
                />
              </div>
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  padding: "20px 36px",
                  textAlign: "center",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 20,
                    fontWeight: 800,
                    color: theme.cyan,
                    letterSpacing: "0.1em",
                    marginBottom: 10,
                  }}
                >
                  3 UNIQUE ELEMENTS ──► 6 TOTAL PERMUTATIONS
                </div>
                <div
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 28,
                    color: theme.chalkText,
                    marginBottom: 8,
                  }}
                >
                  For an array this small, this idea is easy to understand.
                </div>
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    color: theme.chalkDim,
                  }}
                >
                  Its permutations can be arranged in strict dictionary order.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================================================================== */}
        {/* STAGE 3: ALL 6 PERMUTATIONS SEQUENCE & ADJACENCY (Beats 11–18)        */}
        {/* Mathematically centered: top: 196, height: 648px, top clearance: 116px, */}
        {/* bottom clearance above captions: 116px. ZERO DEAD VOID!              */}
        {/* ===================================================================== */}
        {showStage3 && (
          <div
            style={{
              position: "absolute",
              top: 196,
              width: 1500,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              opacity: interpolate(frame, [823, 840, 1290, 1313], [0, 1, 1, 0], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 17,
                fontWeight: 700,
                color: theme.pivot,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              ALL 6 PERMUTATIONS IN DICTIONARY ORDER
            </div>

            <div
              style={{
                fontFamily: fonts.display,
                fontSize: 48,
                fontWeight: 800,
                color: theme.chalkText,
                marginBottom: 24,
              }}
            >
              Lexicographical Arrangement of [ 1, 2, 3 ]
            </div>

            {/* Sequence Table (2 Columns x 3 Rows, 650px wide x 124px tall) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                columnGap: 50,
                rowGap: 24,
                width: 1350,
              }}
            >
              {PERMUTATIONS.map((p, idx) => {
                const isRevealed = frame >= p.frame;
                if (!isRevealed) {
                  return (
                    <div
                      key={p.id}
                      style={{
                        height: 124,
                        borderRadius: 14,
                        border: "2px dashed rgba(255,255,255,0.12)",
                        backgroundColor: "rgba(255,255,255,0.02)",
                      }}
                    />
                  );
                }

                // Spotlight states
                const isCurrent = idx === 1 && frame >= 1102; // [1, 3, 2]
                const isNext = idx === 2 && frame >= 1204; // [2, 1, 3]
                const isDimmed =
                  (frame >= 1102 && !isCurrent && !isNext) ||
                  (frame >= 1204 && !isCurrent && !isNext);

                const strokeColor = isCurrent
                  ? theme.cyan
                  : isNext
                  ? theme.pivot
                  : idx === 5
                  ? theme.bad
                  : theme.chalkDim;

                const bgColor = isCurrent
                  ? "rgba(10, 48, 42, 0.95)"
                  : isNext
                  ? "rgba(48, 42, 10, 0.95)"
                  : "rgba(18, 24, 21, 0.88)";

                const cardOpacity = isDimmed ? 0.35 : 1.0;

                const popScale = interpolate(frame, [p.frame, p.frame + 12], [0.9, 1.0], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: EASE,
                });

                return (
                  <div
                    key={p.id}
                    style={{
                      position: "relative",
                      width: 650,
                      height: 124,
                      borderRadius: 14,
                      backgroundColor: bgColor,
                      boxShadow: isCurrent || isNext ? "0 12px 34px rgba(0,0,0,0.45)" : undefined,
                      opacity: cardOpacity,
                      transform: `scale(${popScale})`,
                    }}
                  >
                    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                      <RoughBox
                        width={650}
                        height={124}
                        stroke={strokeColor}
                        strokeWidth={isCurrent || isNext ? 3.5 : 2.5}
                        seed={p.seed}
                        startFrame={p.frame}
                        durationInFrames={12}
                      />
                    </div>
                    <div
                      style={{
                        position: "relative",
                        zIndex: 2,
                        width: "100%",
                        height: "100%",
                        padding: "0 34px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        boxSizing: "border-box",
                      }}
                    >
                      {/* Left: Row Number */}
                      <div
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 26,
                          fontWeight: 800,
                          color: isCurrent
                            ? theme.cyan
                            : isNext
                            ? theme.pivot
                            : theme.chalkDim,
                        }}
                      >
                        {p.num}
                      </div>

                      {/* Center: Large Crisp Array Digits */}
                      <div
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 36,
                          fontWeight: 900,
                          letterSpacing: "0.18em",
                          color: isCurrent
                            ? theme.cyan
                            : isNext
                            ? theme.pivot
                            : theme.chalkText,
                        }}
                      >
                        [ {p.values.join(" , ")} ]
                      </div>

                      {/* Right: Badges */}
                      <div style={{ width: 160, display: "flex", justifyContent: "flex-end" }}>
                        {isCurrent && (
                          <div
                            style={{
                              padding: "7px 18px",
                              borderRadius: 6,
                              backgroundColor: "rgba(92, 225, 230, 0.25)",
                              border: `1.5px solid ${theme.cyan}`,
                              color: theme.cyan,
                              fontFamily: fonts.mono,
                              fontSize: 15,
                              fontWeight: 900,
                              letterSpacing: "0.06em",
                            }}
                          >
                            ◀ CURRENT
                          </div>
                        )}

                        {isNext && (
                          <div
                            style={{
                              padding: "7px 18px",
                              borderRadius: 6,
                              backgroundColor: "rgba(255, 209, 102, 0.25)",
                              border: `1.5px solid ${theme.pivot}`,
                              color: theme.pivot,
                              fontFamily: fonts.mono,
                              fontSize: 15,
                              fontWeight: 900,
                              letterSpacing: "0.06em",
                            }}
                          >
                            ◀ NEXT (+1)
                          </div>
                        )}

                        {idx === 5 && !isNext && (
                          <div
                            style={{
                              padding: "7px 16px",
                              borderRadius: 6,
                              border: `1.5px solid ${theme.bad}`,
                              color: theme.bad,
                              fontFamily: fonts.mono,
                              fontSize: 14,
                              fontWeight: 800,
                            }}
                          >
                            LAST
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Persistent Dynamic Pedagogical Status Card (F823..F1313) */}
            {/* Actively answers voiceover in real-time, eliminating dead void at F1150 */}
            <div
              style={{
                position: "relative",
                width: 1160,
                height: 96,
                marginTop: 28,
                borderRadius: 14,
                backgroundColor:
                  frame >= 1204
                    ? "rgba(10, 44, 28, 0.92)"
                    : frame >= 1102
                    ? "rgba(10, 42, 48, 0.92)"
                    : "rgba(20, 26, 24, 0.88)",
                boxShadow: "0 14px 40px rgba(0,0,0,0.45)",
                opacity: interpolate(frame, [823, 845], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
              }}
            >
              <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                <RoughBox
                  width={1160}
                  height={96}
                  stroke={
                    frame >= 1204
                      ? theme.good
                      : frame >= 1102
                      ? theme.cyan
                      : theme.cardBorder
                  }
                  strokeWidth={3.5}
                  seed={frame >= 1204 ? 77 : frame >= 1102 ? 88 : 99}
                  startFrame={frame >= 1204 ? 1204 : frame >= 1102 ? 1102 : 823}
                />
              </div>
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  gap: 18,
                }}
              >
                {frame >= 1204 ? (
                  <>
                    <span style={{ fontSize: 30, color: theme.good, fontWeight: 900 }}>✔</span>
                    <div
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 22,
                        fontWeight: 800,
                        color: theme.chalkText,
                      }}
                    >
                      NEXT OF <span style={{ color: theme.cyan }}>[1, 3, 2]</span> IS{" "}
                      <span style={{ color: theme.pivot }}>[2, 1, 3]</span> (IMMEDIATE +1 SUCCESSOR)
                    </div>
                  </>
                ) : frame >= 1102 ? (
                  <>
                    <span style={{ fontSize: 26, color: theme.cyan }}>🔍</span>
                    <div
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 21,
                        fontWeight: 800,
                        color: theme.chalkText,
                      }}
                    >
                      CURRENT INPUT: <span style={{ color: theme.cyan }}>[1, 3, 2]</span> ──► LOCATING IMMEDIATE NEXT (+1) ARRANGEMENT
                    </div>
                  </>
                ) : (
                  <>
                    <span style={{ fontSize: 24, color: theme.pivot }}>📖</span>
                    <div
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 19,
                        fontWeight: 700,
                        color: theme.chalkText,
                        letterSpacing: "0.04em",
                      }}
                    >
                      ALL 6 UNIQUE PERMUTATIONS SORTED IN STRICT DICTIONARY ORDER
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ===================================================================== */}
        {/* STAGE 4: PIPELINE RECAP & WRAPAROUND (Beats 19–25, F1313..F1874)      */}
        {/* Mathematically centered: top: 260, bottom clearance: 180..210px       */}
        {/* ===================================================================== */}
        {showStage4 && (
          <div
            style={{
              position: "absolute",
              top: frame < 1594 ? 260 : 280,
              width: 1580,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              opacity: interpolate(frame, [1313, 1335, 1850, 1874], [0, 1, 1, 0], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            {/* Beat 19 (F1313..F1594): Definition Summary & 4-Step Highlight */}
            {frame < 1594 && (
              <>
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 17,
                    fontWeight: 700,
                    color: theme.pivot,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    marginBottom: 10,
                  }}
                >
                  THE BRUTE FORCE DEFINITION IS CLEAR
                </div>

                <div
                  style={{
                    fontFamily: fonts.display,
                    fontSize: 48,
                    fontWeight: 800,
                    color: theme.chalkText,
                    marginBottom: 32,
                  }}
                >
                  Four-Step Systematic Method
                </div>

                {/* 4-Step Recap Pipeline with Dynamic Highlights */}
                <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
                  {/* Node 1: GENERATE (Active F1377..F1433) */}
                  <div
                    style={{
                      position: "relative",
                      width: 340,
                      height: 270,
                      borderRadius: 14,
                      backgroundColor: frame >= 1377 && frame < 1433 ? "rgba(10, 48, 42, 0.95)" : "rgba(20, 24, 22, 0.85)",
                    }}
                  >
                    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                      <RoughBox
                        width={340}
                        height={270}
                        stroke={frame >= 1377 && frame < 1433 ? theme.cyan : "rgba(255,255,255,0.25)"}
                        strokeWidth={frame >= 1377 && frame < 1433 ? 3.5 : 2}
                        seed={21}
                      />
                    </div>
                    <div
                      style={{
                        position: "relative",
                        zIndex: 2,
                        padding: "24px 20px",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "100%",
                        boxSizing: "border-box",
                      }}
                    >
                      <div style={{ fontFamily: fonts.mono, fontSize: 24, fontWeight: 900, color: theme.cyan }}>
                        1. GENERATE
                      </div>
                      <div style={{ fontFamily: fonts.hand, fontSize: 22, color: theme.chalkDim, marginTop: 14 }}>
                        Generate all possible permutations
                      </div>
                      <div
                        style={{
                          marginTop: "auto",
                          padding: "5px 14px",
                          borderRadius: 6,
                          backgroundColor: frame >= 1377 && frame < 1433 ? "rgba(92, 225, 230, 0.2)" : "transparent",
                          color: frame >= 1377 && frame < 1433 ? theme.cyan : "transparent",
                          fontFamily: fonts.mono,
                          fontSize: 13,
                          fontWeight: 700,
                        }}
                      >
                        ACTIVE STEP
                      </div>
                    </div>
                  </div>

                  <span style={{ fontSize: 26, color: theme.pivot }}>──►</span>

                  {/* Node 2: ORDER (Active F1433..F1483) */}
                  <div
                    style={{
                      position: "relative",
                      width: 340,
                      height: 270,
                      borderRadius: 14,
                      backgroundColor: frame >= 1433 && frame < 1483 ? "rgba(48, 42, 10, 0.95)" : "rgba(20, 24, 22, 0.85)",
                    }}
                  >
                    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                      <RoughBox
                        width={340}
                        height={270}
                        stroke={frame >= 1433 && frame < 1483 ? theme.pivot : "rgba(255,255,255,0.25)"}
                        strokeWidth={frame >= 1433 && frame < 1483 ? 3.5 : 2}
                        seed={22}
                      />
                    </div>
                    <div
                      style={{
                        position: "relative",
                        zIndex: 2,
                        padding: "24px 20px",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "100%",
                        boxSizing: "border-box",
                      }}
                    >
                      <div style={{ fontFamily: fonts.mono, fontSize: 24, fontWeight: 900, color: theme.pivot }}>
                        2. ORDER
                      </div>
                      <div style={{ fontFamily: fonts.hand, fontSize: 22, color: theme.chalkDim, marginTop: 14 }}>
                        Sort all in lexicographical order
                      </div>
                      <div
                        style={{
                          marginTop: "auto",
                          padding: "5px 14px",
                          borderRadius: 6,
                          backgroundColor: frame >= 1433 && frame < 1483 ? "rgba(255, 209, 102, 0.2)" : "transparent",
                          color: frame >= 1433 && frame < 1483 ? theme.pivot : "transparent",
                          fontFamily: fonts.mono,
                          fontSize: 13,
                          fontWeight: 700,
                        }}
                      >
                        ACTIVE STEP
                      </div>
                    </div>
                  </div>

                  <span style={{ fontSize: 26, color: theme.pivot }}>──►</span>

                  {/* Node 3: FIND (Active F1483..F1543) */}
                  <div
                    style={{
                      position: "relative",
                      width: 340,
                      height: 270,
                      borderRadius: 14,
                      backgroundColor: frame >= 1483 && frame < 1543 ? "rgba(10, 48, 42, 0.95)" : "rgba(20, 24, 22, 0.85)",
                    }}
                  >
                    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                      <RoughBox
                        width={340}
                        height={270}
                        stroke={frame >= 1483 && frame < 1543 ? theme.cyan : "rgba(255,255,255,0.25)"}
                        strokeWidth={frame >= 1483 && frame < 1543 ? 3.5 : 2}
                        seed={23}
                      />
                    </div>
                    <div
                      style={{
                        position: "relative",
                        zIndex: 2,
                        padding: "24px 20px",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "100%",
                        boxSizing: "border-box",
                      }}
                    >
                      <div style={{ fontFamily: fonts.mono, fontSize: 24, fontWeight: 900, color: theme.cyan }}>
                        3. FIND
                      </div>
                      <div style={{ fontFamily: fonts.hand, fontSize: 22, color: theme.chalkDim, marginTop: 14 }}>
                        Find current permutation in list
                      </div>
                      <div
                        style={{
                          marginTop: "auto",
                          padding: "5px 14px",
                          borderRadius: 6,
                          backgroundColor: frame >= 1483 && frame < 1543 ? "rgba(92, 225, 230, 0.2)" : "transparent",
                          color: frame >= 1483 && frame < 1543 ? theme.cyan : "transparent",
                          fontFamily: fonts.mono,
                          fontSize: 13,
                          fontWeight: 700,
                        }}
                      >
                        ACTIVE STEP
                      </div>
                    </div>
                  </div>

                  <span style={{ fontSize: 26, color: theme.good }}>──►</span>

                  {/* Node 4: NEXT (Active F1543..F1594) */}
                  <div
                    style={{
                      position: "relative",
                      width: 340,
                      height: 270,
                      borderRadius: 14,
                      backgroundColor: frame >= 1543 ? "rgba(10, 48, 28, 0.95)" : "rgba(20, 24, 22, 0.85)",
                    }}
                  >
                    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                      <RoughBox
                        width={340}
                        height={270}
                        stroke={frame >= 1543 ? theme.good : "rgba(255,255,255,0.25)"}
                        strokeWidth={frame >= 1543 ? 3.5 : 2}
                        seed={24}
                      />
                    </div>
                    <div
                      style={{
                        position: "relative",
                        zIndex: 2,
                        padding: "24px 20px",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "100%",
                        boxSizing: "border-box",
                      }}
                    >
                      <div style={{ fontFamily: fonts.mono, fontSize: 24, fontWeight: 900, color: theme.good }}>
                        4. NEXT (+1)
                      </div>
                      <div style={{ fontFamily: fonts.hand, fontSize: 22, color: theme.chalkDim, marginTop: 14 }}>
                        Move one step forward in list
                      </div>
                      <div
                        style={{
                          marginTop: "auto",
                          padding: "5px 14px",
                          borderRadius: 6,
                          backgroundColor: frame >= 1543 ? "rgba(60, 229, 167, 0.2)" : "transparent",
                          color: frame >= 1543 ? theme.good : "transparent",
                          fontFamily: fonts.mono,
                          fontSize: 13,
                          fontWeight: 700,
                        }}
                      >
                        ACTIVE STEP
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Summary Card */}
                <div
                  style={{
                    position: "relative",
                    width: 1160,
                    height: 84,
                    marginTop: 32,
                    borderRadius: 14,
                    backgroundColor: "rgba(20, 26, 22, 0.88)",
                  }}
                >
                  <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                    <RoughBox
                      width={1160}
                      height={84}
                      stroke={theme.cardBorder}
                      seed={25}
                    />
                  </div>
                  <div
                    style={{
                      position: "relative",
                      zIndex: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                      gap: 16,
                    }}
                  >
                    <span style={{ fontSize: 26, color: theme.pivot }}>📌</span>
                    <div style={{ fontFamily: fonts.mono, fontSize: 19, fontWeight: 700, color: theme.chalkText }}>
                      GENERATE ──► ORDER ──► FIND ──► TAKE NEXT
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Beat 24 (F1594..F1874): Wraparound Loop */}
            {frame >= 1594 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  opacity: interpolate(frame, [1594, 1620], [0, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  }),
                }}
              >
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 17,
                    fontWeight: 700,
                    color: theme.warn,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    marginBottom: 10,
                  }}
                >
                  EDGE CONDITION · WRAPAROUND RULE
                </div>

                <div
                  style={{
                    fontFamily: fonts.display,
                    fontSize: 50,
                    fontWeight: 800,
                    color: theme.chalkText,
                    marginBottom: 34,
                  }}
                >
                  If Already at the Last Permutation...
                </div>

                {/* Wraparound loop between LAST [3, 2, 1] and FIRST [1, 2, 3] */}
                <div
                  style={{
                    position: "relative",
                    width: 1240,
                    height: 200,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {/* Left: FIRST [1, 2, 3] */}
                  <div
                    style={{
                      position: "relative",
                      width: 480,
                      height: 180,
                      borderRadius: 16,
                      backgroundColor: "rgba(10, 48, 28, 0.92)",
                      boxShadow: "0 14px 36px rgba(0,0,0,0.4)",
                    }}
                  >
                    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                      <RoughBox
                        width={480}
                        height={180}
                        stroke={theme.good}
                        strokeWidth={3.5}
                        seed={31}
                        startFrame={1594}
                      />
                    </div>
                    <div
                      style={{
                        position: "relative",
                        zIndex: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                      }}
                    >
                      <span style={{ fontFamily: fonts.mono, fontSize: 17, color: theme.good, fontWeight: 800, letterSpacing: "0.08em" }}>
                        FIRST (SMALLEST)
                      </span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 40, fontWeight: 900, color: theme.chalkText, marginTop: 8 }}>
                        [ 1 , 2 , 3 ]
                      </span>
                    </div>
                  </div>

                  {/* Connecting Curved Chalk Arrow (Right to Left loop) */}
                  <div
                    style={{
                      position: "absolute",
                      left: 430,
                      top: 25,
                      width: 380,
                      height: 150,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <RoughCurve
                      points={[
                        [350, 40],
                        [260, 95],
                        [120, 95],
                        [20, 40],
                      ]}
                      width={380}
                      height={130}
                      stroke={theme.warn}
                      strokeWidth={3.5}
                      seed={33}
                      startFrame={1594}
                    />
                    <div
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 16,
                        fontWeight: 800,
                        color: theme.warn,
                        marginTop: 6,
                        letterSpacing: "0.06em",
                      }}
                    >
                      ↺ WRAP AROUND TO FIRST
                    </div>
                  </div>

                  {/* Right: LAST [3, 2, 1] */}
                  <div
                    style={{
                      position: "relative",
                      width: 480,
                      height: 180,
                      borderRadius: 16,
                      backgroundColor: "rgba(48, 26, 12, 0.92)",
                      boxShadow: "0 14px 36px rgba(0,0,0,0.4)",
                    }}
                  >
                    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                      <RoughBox
                        width={480}
                        height={180}
                        stroke={theme.warn}
                        strokeWidth={3.5}
                        seed={32}
                        startFrame={1594}
                      />
                    </div>
                    <div
                      style={{
                        position: "relative",
                        zIndex: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                      }}
                    >
                      <span style={{ fontFamily: fonts.mono, fontSize: 17, color: theme.warn, fontWeight: 800, letterSpacing: "0.08em" }}>
                        LAST (LARGEST)
                      </span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 40, fontWeight: 900, color: theme.chalkText, marginTop: 8 }}>
                        [ 3 , 2 , 1 ]
                      </span>
                    </div>
                  </div>
                </div>

                {/* Beat 25 (F1803..F1874): Logical Correctness Stamp */}
                {frame >= 1803 && (
                  <div
                    style={{
                      position: "relative",
                      width: 1120,
                      height: 88,
                      marginTop: 34,
                      borderRadius: 14,
                      backgroundColor: "rgba(10, 44, 24, 0.92)",
                      boxShadow: "0 14px 36px rgba(0,0,0,0.4)",
                      opacity: interpolate(frame, [1803, 1825], [0, 1], {
                        extrapolateLeft: "clamp",
                        extrapolateRight: "clamp",
                      }),
                      transform: `scale(${interpolate(frame, [1803, 1825], [0.92, 1], {
                        extrapolateLeft: "clamp",
                        extrapolateRight: "clamp",
                        easing: EASE,
                      })})`,
                    }}
                  >
                    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                      <RoughBox
                        width={1120}
                        height={88}
                        stroke={theme.good}
                        strokeWidth={3.5}
                        seed={35}
                        startFrame={1803}
                      />
                    </div>
                    <div
                      style={{
                        position: "relative",
                        zIndex: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        gap: 16,
                      }}
                    >
                      <span style={{ fontSize: 28, color: theme.good, fontWeight: 900 }}>✔</span>
                      <div style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 800, color: theme.chalkText }}>
                        THIS WORKS LOGICALLY · FULLY MEETS PROBLEM SPECIFICATION
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ===================================================================== */}
        {/* STAGE 5: PROBLEM TENSION & CODE HANDOFF (Beats 26–28, F1874..F2275)   */}
        {/* Mathematically centered: top: 250..270, bottom clearance: 170..190px   */}
        {/* ===================================================================== */}
        {showStage5 && (
          <div
            style={{
              position: "absolute",
              top: frame < 2088 ? 270 : 248,
              width: 1500,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              opacity: interpolate(frame, [1874, 1895], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            {/* Beat 26 & 27: Serious Problem Tension + Qualitative Growth (F1874..F2088) */}
            {frame < 2088 && (
              <>
                <div
                  style={{
                    padding: "8px 26px",
                    borderRadius: 20,
                    border: `2px solid ${theme.bad}`,
                    backgroundColor: "rgba(50, 15, 15, 0.88)",
                    fontFamily: fonts.mono,
                    fontSize: 17,
                    fontWeight: 800,
                    color: theme.bad,
                    marginBottom: 14,
                  }}
                >
                  ⚠ BUT THERE IS A SERIOUS PROBLEM
                </div>

                <div
                  style={{
                    fontFamily: fonts.display,
                    fontSize: 52,
                    fontWeight: 800,
                    color: theme.chalkText,
                    marginBottom: 32,
                  }}
                >
                  Permutation Count Grows Extremely Fast
                </div>

                {/* Qualitative Branching / Explosion Visualization Card with RoughBox */}
                <div
                  style={{
                    position: "relative",
                    width: 1160,
                    height: 380,
                    borderRadius: 16,
                    backgroundColor: "rgba(42, 14, 14, 0.92)",
                    boxShadow: "0 18px 46px rgba(0,0,0,0.55)",
                  }}
                >
                  <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                    <RoughBox
                      width={1160}
                      height={380}
                      stroke={theme.bad}
                      strokeWidth={3.5}
                      seed={41}
                      startFrame={1874}
                    />
                  </div>
                  <div
                    style={{
                      position: "relative",
                      zIndex: 2,
                      padding: "36px 48px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                      boxSizing: "border-box",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 23,
                        fontWeight: 900,
                        color: theme.bad,
                        letterSpacing: "0.15em",
                        marginBottom: 16,
                      }}
                    >
                      COMBINATORIAL EXPLOSION
                    </div>

                    <div
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 26,
                        color: theme.chalkText,
                        lineHeight: 1.85,
                        marginBottom: 16,
                      }}
                    >
                      <div>3 elements = <span style={{ color: theme.good, fontWeight: 800 }}>6</span> permutations</div>
                      <div>7 elements = <span style={{ color: theme.warn, fontWeight: 800 }}>5,040</span> permutations</div>
                      <div>10 elements = <span style={{ color: theme.bad, fontWeight: 800 }}>3,628,800+</span> permutations!</div>
                    </div>

                    <div
                      style={{
                        fontFamily: fonts.hand,
                        fontSize: 25,
                        color: theme.chalkDim,
                        marginBottom: 18,
                      }}
                    >
                      Generating and sorting all arrangements is far too slow for larger arrays.
                    </div>

                    <div
                      style={{
                        padding: "7px 24px",
                        borderRadius: 8,
                        backgroundColor: "rgba(255, 118, 117, 0.15)",
                        border: `1.5px solid ${theme.bad}`,
                        fontFamily: fonts.mono,
                        fontSize: 15,
                        fontWeight: 800,
                        color: theme.bad,
                        letterSpacing: "0.08em",
                      }}
                    >
                      UNACCEPTABLE FOR LARGER ARRAYS
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Beat 28 (F2088..F2275): Handoff to Empty Code Surface */}
            {frame >= 2088 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  opacity: interpolate(frame, [2088, 2110], [0, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  }),
                }}
              >
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 17,
                    fontWeight: 700,
                    color: theme.pivot,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    marginBottom: 10,
                  }}
                >
                  NEXT UP · METHOD 1 IMPLEMENTATION
                </div>

                <div
                  style={{
                    fontFamily: fonts.display,
                    fontSize: 48,
                    fontWeight: 800,
                    color: theme.chalkText,
                    marginBottom: 28,
                  }}
                >
                  Let's Inspect What the Brute-Force Code Does
                </div>

                {/* Empty Code Surface Container Shell (Ready for Scene 04 typing) */}
                <div
                  style={{
                    width: 1300,
                    height: 440,
                    borderRadius: 16,
                    border: `2px solid rgba(255, 255, 255, 0.25)`,
                    backgroundColor: "rgba(12, 18, 16, 0.96)",
                    boxShadow: "0 22px 55px rgba(0, 0, 0, 0.55)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Code Window Header Bar */}
                  <div
                    style={{
                      height: 48,
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      padding: "0 20px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", gap: 9 }}>
                      <div style={{ width: 13, height: 13, borderRadius: "50%", backgroundColor: "#FF5F56" }} />
                      <div style={{ width: 13, height: 13, borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
                      <div style={{ width: 13, height: 13, borderRadius: "50%", backgroundColor: "#27C93F" }} />
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkDim, fontWeight: 700 }}>
                      solution_brute_force.py
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.pivot, fontWeight: 800 }}>
                      SCENE 04 READY
                    </div>
                  </div>

                  {/* Empty Interior with Blinking Cursor */}
                  <div
                    style={{
                      padding: "32px 42px",
                      display: "flex",
                      gap: 26,
                      fontFamily: fonts.mono,
                      fontSize: 19,
                      lineHeight: 1.85,
                      color: theme.chalkDim,
                    }}
                  >
                    {/* Line numbers 1 to 6 */}
                    <div style={{ userSelect: "none", opacity: 0.4, textAlign: "right" }}>
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                      <div>4</div>
                      <div>5</div>
                      <div>6</div>
                    </div>

                    {/* Placeholder comment & blinking cursor */}
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span style={{ color: "rgba(255, 255, 255, 0.35)", fontStyle: "italic" }}>
                        # Brute-force permutation generation implementation...
                      </span>
                      {/* Blinking cursor at line 1/ready position */}
                      <span
                        style={{
                          display: "inline-block",
                          width: 11,
                          height: 24,
                          backgroundColor: theme.cyan,
                          marginLeft: 8,
                          opacity: Math.floor(frame / 15) % 2 === 0 ? 1 : 0,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ===================================================================== */}
      {/* WORD-LEVEL KARAOKE CAPTIONS (Optical bottom: Y: 960..1020)            */}
      {/* ===================================================================== */}
      <Captions words={captionWords} />
    </div>
  );
};
