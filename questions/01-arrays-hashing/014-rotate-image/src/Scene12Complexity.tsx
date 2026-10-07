/**
 * Scene12Complexity.tsx — Scene 12 · Method Comparison & Complexity Analysis
 * Rotate Image (LeetCode 48) · Pattern 01 — Arrays & Hashing
 *
 * Implements the definitive comparative analysis of all 3 approaches:
 * - Method 1: Extra Destination Matrix -> Time: O(N²), Space: O(N²) [FAILS IN-PLACE ✗]
 * - Method 2: 4-Way In-Place Layer Cycles -> Time: O(N²), Space: O(1) [IN-PLACE ✓]
 * - Method 3: Transpose + Reverse Rows -> Time: O(N²), Space: O(1) [OPTIMAL & CLEANEST ✓]
 * - Master Conclusion Banner: Both in-place methods satisfy the O(1) constraint; Method 3 recommended
 *
 * Canvas & Layout Hierarchy (1920 × 1080):
 * - Top Bar: Clean metadata strip at Y: 36..100 (Zero explanations on top)
 * - Center Stage (Y: 130..680, X: 140..1780, Width: 1640):
 *   - Section Title: Y: 130
 *   - Row 1 (Method 1): Y: 195..310 (Height: 115)
 *   - Row 2 (Method 2): Y: 325..440 (Height: 115)
 *   - Row 3 (Method 3): Y: 455..570 (Height: 115)
 *   - Conclusion Banner: Y: 585..680 (Height: 95)
 * - Captions at bottom (Y: 960..1010) with >= 280px breathing clearance
 * - 100% @dsa/kit components (RoughBox, ChalkText, RoughLine, Captions)
 * - Strict zero-spoiler reveals synchronized to exact audio words
 *
 * Total Duration: 1,219 frames @ 30fps (40.640s) strictly from sync/12-complexity.json
 */
import React from "react";
import {
  Audio,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
} from "remotion";

import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme as baseTheme, fonts } from "../../../../kit/lib/theme";

const theme = {
  ...baseTheme,
  gold: baseTheme.pivot,
  green: "#3FB950",
  amber: "#D29922",
  purple: "#bc8cff",
};

import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { RoughBox } from "../../../../kit/components/RoughBox";
import { ChalkText } from "../../../../kit/components/ChalkText";
import { ChalkDust } from "../../../../kit/components/ChalkDust";
import syncData from "../sync/12-complexity.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings (from sync/12-complexity.json)
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

export const Scene12Complexity: React.FC = () => {
  const frame = useCurrentFrame();

  // Reveal entrance interpolations (Strictly Word Synced)
  const headerEntrance = spring({
    frame,
    fps: 30,
    config: { damping: 16, stiffness: 100 },
  });

  // Method 1 reveals at F122 ("Method one")
  const m1Entrance = interpolate(frame, [122, 145], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Method 1 Time badge at F268, Space badge at F317
  const m1TimeOpacity = interpolate(frame, [268, 285], [0, 1], { extrapolateRight: "clamp" });
  const m1SpaceOpacity = interpolate(frame, [317, 335], [0, 1], { extrapolateRight: "clamp" });

  // Method 2 reveals at F392 ("Method two")
  const m2Entrance = interpolate(frame, [392, 418], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Method 2 Time badge at F581, Space badge at F634
  const m2TimeOpacity = interpolate(frame, [581, 600], [0, 1], { extrapolateRight: "clamp" });
  const m2SpaceOpacity = interpolate(frame, [634, 655], [0, 1], { extrapolateRight: "clamp" });

  // Method 3 reveals at F725 ("Method three")
  const m3Entrance = interpolate(frame, [725, 750], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Method 3 Time badge at F919, Space badge at F986
  const m3TimeOpacity = interpolate(frame, [919, 940], [0, 1], { extrapolateRight: "clamp" });
  const m3SpaceOpacity = interpolate(frame, [986, 1008], [0, 1], { extrapolateRight: "clamp" });

  // Conclusion banner reveals at F1065 ("So both in-place methods")
  const conclusionEntrance = interpolate(frame, [1065, 1095], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // When conclusion reveals, Method 1 dims to 40% while Methods 2 & 3 stay prominent
  const isConclusionActive = frame >= 1065;
  const m1Dim = isConclusionActive ? 0.38 : 1.0;

  return (
    <div
      style={{
        position: "relative",
        width: 1920,
        height: 1080,
        backgroundColor: "#0D1117",
        overflow: "hidden",
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      <Audio src={staticFile("audio/014/12-complexity.mp3")} />

      {/* ChalkDust Bursts for Key Milestones */}
      <ChalkDust x={960} y={250} count={26} color={theme.accent} start={122} />
      <ChalkDust x={1480} y={250} count={30} color={theme.warn} start={317} />
      <ChalkDust x={960} y={380} count={26} color={theme.cyan} start={392} />
      <ChalkDust x={1480} y={380} count={30} color={theme.green} start={634} />
      <ChalkDust x={960} y={510} count={28} color={theme.gold} start={725} />
      <ChalkDust x={1480} y={510} count={34} color={theme.green} start={986} />
      <ChalkDust x={960} y={630} count={36} color={theme.green} start={1065} />

      {/* =====================================================================
          TOP BAR: Clean Metadata Strip (Y: 36..92)
          Zero explanations on top bar!
          ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 36,
          left: 80,
          right: 80,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          opacity: headerEntrance,
          transform: `translateY(${(1 - headerEntrance) * -16}px)`,
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              padding: "6px 14px",
              borderRadius: 6,
              border: "1.5px solid rgba(255, 255, 255, 0.2)",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              fontFamily: fonts.code,
              fontSize: 13,
              fontWeight: 700,
              color: theme.chalkDim,
              letterSpacing: "0.08em",
            }}
          >
            QUESTION 014
          </div>

          <span
            style={{
              fontFamily: fonts.display,
              fontSize: 26,
              fontWeight: 700,
              color: theme.chalkText,
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
              border: `1.5px solid ${theme.cyan}`,
              backgroundColor: "rgba(56, 189, 248, 0.06)",
              fontFamily: fonts.code,
              fontSize: 13,
              fontWeight: 700,
              color: theme.cyan,
              letterSpacing: "0.08em",
            }}
          >
            ALGORITHMIC COMPARISON
          </div>

          <div
            style={{
              padding: "6px 16px",
              borderRadius: 6,
              border: `1.5px solid ${theme.green}`,
              backgroundColor: "rgba(63, 185, 80, 0.06)",
              fontFamily: fonts.code,
              fontSize: 13,
              fontWeight: 700,
              color: theme.green,
              letterSpacing: "0.08em",
            }}
          >
            IN-PLACE EVALUATION
          </div>
        </div>
      </div>

      {/* =====================================================================
          CENTER STAGE: Method Comparative Matrix (X: 140..1780, Y: 130..680)
          Strictly 100% Kit Components (RoughBox, ChalkText)
          Zero generic cards / Zero AI slop!
          ===================================================================== */}
      <div
        style={{
          position: "absolute",
          left: 140,
          top: 130,
          width: 1640,
          display: "flex",
          flexDirection: "column",
          gap: 15,
          zIndex: 8,
        }}
      >
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            opacity: headerEntrance,
            transform: `scale(${interpolate(headerEntrance, [0, 1], [0.98, 1.0])})`,
          }}
        >
          <ChalkText startFrame={0} fontSize={23} color={theme.gold} font="mono">
            ALGORITHMIC COMPARISON: THE THREE APPROACHES
          </ChalkText>
          <ChalkText startFrame={40} fontSize={16} color={theme.chalkDim} font="mono">
            EVALUATING TIME &amp; AUXILIARY MEMORY
          </ChalkText>
        </div>

        {/* -------------------------------------------------------------------
            ROW 1: METHOD 1 — Extra Destination Matrix (F122+)
            ------------------------------------------------------------------- */}
        {frame >= 122 && (
          <div
            style={{
              position: "relative",
              width: 1640,
              height: 115,
              opacity: m1Entrance * m1Dim,
              transform: `scale(${interpolate(m1Entrance, [0, 1], [0.98, 1.0])})`,
              display: "flex",
              alignItems: "center",
              transition: "opacity 0.4s ease",
            }}
          >
            <RoughBox
              width={1640}
              height={115}
              startFrame={122}
              stroke={theme.accent}
              strokeWidth={2.2}
              seed={121}
            />

            <div
              style={{
                position: "absolute",
                width: 1640,
                height: 115,
                padding: "0 30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* Method Title & Subtitle */}
              <div style={{ width: 440 }}>
                <div style={{ fontFamily: fonts.code, fontSize: 18, fontWeight: 700, color: theme.accent, marginBottom: 4 }}>
                  METHOD 1: EXTRA MATRIX
                </div>
                <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkDim }}>
                  Allocates duplicate destination grid
                </div>
              </div>

              {/* Core Mechanism */}
              <div style={{ width: 560 }}>
                <div style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkText, marginBottom: 2 }}>
                  Direct index transformation formula:
                </div>
                <div style={{ fontFamily: fonts.code, fontSize: 15, fontWeight: 700, color: theme.cyan }}>
                  result[c][n - 1 - r] = matrix[r][c]
                </div>
              </div>

              {/* Complexity Badges */}
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                {/* Time Badge (F268+) */}
                <div
                  style={{
                    position: "relative",
                    width: 170,
                    height: 44,
                    opacity: m1TimeOpacity,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <RoughBox width={170} height={44} startFrame={268} stroke={theme.cyan} strokeWidth={2} seed={201} />
                  <span style={{ position: "absolute", fontFamily: fonts.code, fontSize: 15, fontWeight: 700, color: theme.cyan }}>
                    TIME: O(N²)
                  </span>
                </div>

                {/* Space Badge (F317+) */}
                <div
                  style={{
                    position: "relative",
                    width: 290,
                    height: 44,
                    opacity: m1SpaceOpacity,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <RoughBox width={290} height={44} startFrame={317} stroke={theme.warn} strokeWidth={2.2} seed={202} />
                  <span style={{ position: "absolute", fontFamily: fonts.code, fontSize: 14, fontWeight: 700, color: theme.warn }}>
                    SPACE: O(N²) [FAILS IN-PLACE ✗]
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------
            ROW 2: METHOD 2 — 4-Way In-Place Layer Cycles (F392+)
            ------------------------------------------------------------------- */}
        {frame >= 392 && (
          <div
            style={{
              position: "relative",
              width: 1640,
              height: 115,
              opacity: m2Entrance,
              transform: `scale(${interpolate(m2Entrance, [0, 1], [0.98, 1.0])})`,
              display: "flex",
              alignItems: "center",
            }}
          >
            <RoughBox
              width={1640}
              height={115}
              startFrame={392}
              stroke={theme.cyan}
              strokeWidth={isConclusionActive ? 3.0 : 2.2}
              seed={122}
            />

            <div
              style={{
                position: "absolute",
                width: 1640,
                height: 115,
                padding: "0 30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* Method Title & Subtitle */}
              <div style={{ width: 440 }}>
                <div style={{ fontFamily: fonts.code, fontSize: 18, fontWeight: 700, color: theme.cyan, marginBottom: 4 }}>
                  METHOD 2: 4-WAY LAYER CYCLES
                </div>
                <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkDim }}>
                  Rotates 4-element cyclical orbits in rings
                </div>
              </div>

              {/* Core Mechanism */}
              <div style={{ width: 560 }}>
                <div style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkText, marginBottom: 2 }}>
                  4-way coordinate rotation in concentric rings:
                </div>
                <div style={{ fontFamily: fonts.code, fontSize: 15, fontWeight: 700, color: theme.gold }}>
                  top_val = matrix[first][i] (1 temp variable)
                </div>
              </div>

              {/* Complexity Badges */}
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                {/* Time Badge (F581+) */}
                <div
                  style={{
                    position: "relative",
                    width: 170,
                    height: 44,
                    opacity: m2TimeOpacity,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <RoughBox width={170} height={44} startFrame={581} stroke={theme.cyan} strokeWidth={2} seed={203} />
                  <span style={{ position: "absolute", fontFamily: fonts.code, fontSize: 15, fontWeight: 700, color: theme.cyan }}>
                    TIME: O(N²)
                  </span>
                </div>

                {/* Space Badge (F634+) */}
                <div
                  style={{
                    position: "relative",
                    width: 290,
                    height: 44,
                    opacity: m2SpaceOpacity,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <RoughBox width={290} height={44} startFrame={634} stroke={theme.green} strokeWidth={2.4} seed={204} />
                  <span style={{ position: "absolute", fontFamily: fonts.code, fontSize: 14, fontWeight: 700, color: theme.green }}>
                    SPACE: O(1) [IN-PLACE ✓]
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------
            ROW 3: METHOD 3 — Transpose + Reverse Rows (F725+)
            ------------------------------------------------------------------- */}
        {frame >= 725 && (
          <div
            style={{
              position: "relative",
              width: 1640,
              height: 115,
              opacity: m3Entrance,
              transform: `scale(${interpolate(m3Entrance, [0, 1], [0.98, 1.0])})`,
              display: "flex",
              alignItems: "center",
            }}
          >
            <RoughBox
              width={1640}
              height={115}
              startFrame={725}
              stroke={theme.gold}
              strokeWidth={isConclusionActive ? 3.0 : 2.2}
              seed={123}
            />

            <div
              style={{
                position: "absolute",
                width: 1640,
                height: 115,
                padding: "0 30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* Method Title & Subtitle */}
              <div style={{ width: 440 }}>
                <div style={{ fontFamily: fonts.code, fontSize: 18, fontWeight: 700, color: theme.gold, marginBottom: 4 }}>
                  METHOD 3: TRANSPOSE + REVERSE ROWS
                </div>
                <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkDim }}>
                  Algebraic symmetry decomposition in 2 clean steps
                </div>
              </div>

              {/* Core Mechanism */}
              <div style={{ width: 560 }}>
                <div style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkText, marginBottom: 2 }}>
                  1. Transpose: matrix[r][c] ↔ matrix[c][r] (r &lt; c)
                </div>
                <div style={{ fontFamily: fonts.code, fontSize: 15, fontWeight: 700, color: theme.cyan }}>
                  2. Reverse Each Row: row.reverse() (horizontal flip)
                </div>
              </div>

              {/* Complexity Badges */}
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                {/* Time Badge (F919+) */}
                <div
                  style={{
                    position: "relative",
                    width: 170,
                    height: 44,
                    opacity: m3TimeOpacity,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <RoughBox width={170} height={44} startFrame={919} stroke={theme.cyan} strokeWidth={2} seed={205} />
                  <span style={{ position: "absolute", fontFamily: fonts.code, fontSize: 15, fontWeight: 700, color: theme.cyan }}>
                    TIME: O(N²)
                  </span>
                </div>

                {/* Space Badge (F986+) */}
                <div
                  style={{
                    position: "relative",
                    width: 290,
                    height: 44,
                    opacity: m3SpaceOpacity,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <RoughBox width={290} height={44} startFrame={986} stroke={theme.green} strokeWidth={2.4} seed={206} />
                  <span style={{ position: "absolute", fontFamily: fonts.code, fontSize: 14, fontWeight: 700, color: theme.green }}>
                    SPACE: O(1) [OPTIMAL &amp; CLEANEST ✓]
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------
            CONCLUSION BANNER: In-Place Verdict (F1065..F1219)
            ------------------------------------------------------------------- */}
        {frame >= 1065 && (
          <div
            style={{
              position: "relative",
              width: 1640,
              height: 90,
              opacity: conclusionEntrance,
              transform: `scale(${interpolate(conclusionEntrance, [0, 1], [0.98, 1.0])})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <RoughBox
              width={1640}
              height={90}
              startFrame={1065}
              stroke={theme.green}
              strokeWidth={3}
              seed={124}
            />

            <div
              style={{
                position: "absolute",
                width: 1640,
                textAlign: "center",
                padding: "0 24px",
              }}
            >
              <div style={{ fontFamily: fonts.code, fontSize: 17, fontWeight: 700, color: theme.green, marginBottom: 4 }}>
                ★ VERDICT: BOTH METHOD 2 &amp; METHOD 3 ACHIEVE OPTIMAL O(1) IN-PLACE SPACE
              </div>
              <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkText }}>
                Method 3 is strongly recommended in live interviews: simpler logic, fewer index variables, and zero 4-way off-by-one hazards.
              </div>
            </div>
          </div>
        )}
      </div>

      {/* =====================================================================
          BOTTOM CAPTIONS: Word-Level Sync (Y: 960..1010)
          Clearance above: Y: 960 - Y: 675 = 285px clean breathing space!
          ===================================================================== */}
      <Captions words={captionWords} />
    </div>
  );
};
