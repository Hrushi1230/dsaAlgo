/**
 * Scene05WhyBrute.tsx — Scene 05 · Why Brute Force Fails → Derive Better Direction
 * Next Permutation (LeetCode 31) · Pattern 01 — Arrays & Hashing
 *
 * Authentic Oxford Chalkboard Aesthetic (matching Scene 03):
 * - 2,268 frames @ 30fps (75.600s) strictly from sync/05-why-brute.json
 * - 20 Anchors mapped from sync/05-why-brute.anchors.json
 * - Identical top course header strip with handwritten cursive "Next Permutation"
 * - Rich translucent chalkboard card surfaces (rgba green/gold/mint/maroon washes, NO pitch-black blocks)
 * - Beautiful Caveat cursive headings & golden monospace category eyebrows
 * - Pure @dsa/kit visual grammar: RoughCard (RoughBox), ChalkDivider (RoughLine), ArrayTrackV2
 * - Phase 1 (F0..F971): Factorial explosion proof (n! growth table + RAM allocation violation)
 * - Phase 2 (F971..F1765): First principles: What "next" means (smallest change + rightmost position)
 * - Phase 3 (F1765..F2268): The first optimal clue (right-to-left scan direction + search criterion)
 * - Zero collision spatial layout with balanced center vertical distribution (Y: 130..760)
 * - Word-level karaoke captions anchored strictly at Y: 980
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
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { ArrayTrackV2, ArrayElementItem } from "../../../../kit/components/array/ArrayTrackV2";
import syncData from "../sync/05-why-brute.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings (from sync/05-why-brute.json)
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

/**
 * Authentic RoughCard wrapper matching Scene 03:
 * Translucent chalkboard wash background, hand-drawn RoughBox SVG chalk outline,
 * subtle drop shadow, and crisp chalk children content.
 */
const RoughCard: React.FC<{
  width: number;
  height: number;
  stroke?: string;
  strokeWidth?: number;
  seed?: number;
  bg?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}> = ({
  width,
  height,
  stroke = theme.chalkText,
  strokeWidth = 2.5,
  seed = 1,
  bg = "rgba(18, 46, 36, 0.62)",
  style,
  children,
}) => {
  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        borderRadius: 14,
        backgroundColor: bg,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
        overflow: "hidden",
        ...style,
      }}
    >
      {/* Hand-drawn chalk border via RoughBox */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <RoughBox
          width={width}
          height={height}
          stroke={stroke}
          strokeWidth={strokeWidth}
          seed={seed}
        />
      </div>

      {/* Children content on top */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
};

/**
 * Authentic RoughLine chalk divider
 */
const ChalkDivider: React.FC<{
  width?: number;
  stroke?: string;
  strokeWidth?: number;
  seed?: number;
}> = ({
  width = 770,
  stroke = "rgba(255, 255, 255, 0.25)",
  strokeWidth = 2,
  seed = 1,
}) => (
  <div style={{ width, height: 10, margin: "2px 0" }}>
    <RoughLine
      width={width}
      height={10}
      shape={{ kind: "line", x1: 0, y1: 5, x2: width, y2: 5 }}
      stroke={stroke}
      strokeWidth={strokeWidth}
      seed={seed}
    />
  </div>
);

export const Scene05WhyBrute: React.FC = () => {
  const frame = useCurrentFrame();

  // =========================================================================
  // CAMERA ENGINE
  // =========================================================================
  const { camScale, camY }: { camScale: number; camY: number } = useMemo(() => {
    // Subtle punch-in during intense mathematical proof moments
    if (frame >= 358 && frame < 727) {
      const p = interpolate(frame, [358, 390], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: 1 + 0.02 * p, camY: -6 * p };
    }
    if (frame >= 1386 && frame < 1765) {
      const p = interpolate(frame, [1386, 1420], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: 1 + 0.025 * p, camY: -8 * p };
    }
    return { camScale: 1, camY: 0 };
  }, [frame]);

  // =========================================================================
  // MASTER ARRAY ELEMENTS FOR PHASES 2 & 3: [1, 3, 2]
  // =========================================================================
  const masterArrayElements: ArrayElementItem[] = useMemo(() => {
    return [
      {
        value: 1,
        slotState: frame >= 1386 && frame < 1561 ? "rejected" : frame >= 1057 && frame < 1135 ? "query" : "default",
        valueState: frame >= 1386 && frame < 1561 ? "rejected" : frame >= 1057 && frame < 1135 ? "query" : "default",
      },
      {
        value: 3,
        slotState: frame >= 1925 && frame < 2167 ? "query" : frame >= 1057 && frame < 1135 ? "query" : "default",
        valueState: frame >= 1925 && frame < 2167 ? "query" : frame >= 1057 && frame < 1135 ? "query" : "default",
      },
      {
        value: 2,
        slotState: frame >= 1856 && frame < 1925 ? "current" : frame >= 1561 && frame < 1765 ? "confirmed" : frame >= 1057 && frame < 1135 ? "query" : "default",
        valueState: frame >= 1856 && frame < 1925 ? "current" : frame >= 1561 && frame < 1765 ? "confirmed" : frame >= 1057 && frame < 1135 ? "query" : "default",
      },
    ];
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
      {/* Authentic Chalkboard Background & Atmosphere */}
      <ChalkboardBackground />
      <ChalkFilters />

      {/* Voiceover Track */}
      <Audio src={staticFile("audio/012/05-why-brute.mp3")} />

      {/* ===================================================================== */}
      {/* TOP HEADER BAR: Compact, Authoritative Course Header Strip (Y: 36..80)*/}
      {/* Exactly matching Scene 03's Header Layout                             */}
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
              border: `1.5px solid ${theme.good}`,
              backgroundColor: "rgba(60, 229, 167, 0.1)",
              fontFamily: fonts.mono,
              fontSize: 13,
              fontWeight: 800,
              color: theme.good,
              letterSpacing: "0.08em",
            }}
          >
            MEDIUM
          </div>
        </div>

        {/* Center Handwritten Title */}
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

        {/* Right Status Badge */}
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
          WHY BRUTE FORCE FAILS
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
          transformOrigin: "960px 480px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* ================================================================= */}
        {/* PHASE 1 (F0..F971): FACTORIAL GROWTH & SPACE VIOLATION            */}
        {/* ================================================================= */}
        {frame < 971 && (
          <div
            style={{
              position: "absolute",
              top: 130,
              width: 1720,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              zIndex: 5,
            }}
          >
            {/* Monospace Eyebrow */}
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 16,
                fontWeight: 700,
                color: theme.pivot,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                marginBottom: 6,
              }}
            >
              LIMITATION 1 · THE COMBINATORIAL CEILING
            </div>

            {/* Handwritten Caveat Heading */}
            <div
              style={{
                fontFamily: fonts.display,
                fontSize: 48,
                fontWeight: 800,
                color: theme.chalkText,
                marginBottom: 20,
              }}
            >
              Why Generating Every Permutation Fails
            </div>

            {/* TOP ROW: TWO DOCKED CARDS */}
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: frame >= 473 ? "space-between" : "center",
                gap: 24,
              }}
            >
              {/* LEFT CARD: FACTORIAL GROWTH EXPLOSION */}
              <RoughCard
                width={frame >= 473 ? 840 : 1040}
                height={470}
                stroke={theme.cyan}
                strokeWidth={2.5}
                seed={501}
                bg="rgba(10, 48, 42, 0.65)"
                style={{
                  transition: "all 0.4s ease-out",
                }}
              >
                <div style={{ padding: "20px 28px", display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: fonts.display, fontSize: 26, fontWeight: 700, color: theme.cyan }}>
                      1. Combinatorial Factorial Explosion
                    </span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkDim }}>
                      N distinct elements
                    </span>
                  </div>
                  <ChalkDivider width={frame >= 473 ? 780 : 980} stroke="rgba(92, 225, 230, 0.3)" seed={101} />

                  {/* Formula Reveal (F103+) */}
                  <div
                    style={{
                      padding: "10px 18px",
                      backgroundColor: "rgba(92, 225, 230, 0.08)",
                      borderRadius: 10,
                      border: `1.5px solid ${frame >= 103 ? theme.cyan : "rgba(92, 225, 230, 0.2)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <span style={{ fontSize: 13, color: theme.chalkDim, display: "block", marginBottom: 2 }}>
                        Total Permutations Formula:
                      </span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 900, color: theme.chalkText }}>
                        Total Arrangements ={" "}
                        <span style={{ color: frame >= 103 ? theme.pivot : theme.chalkDim }}>
                          {frame >= 103 ? "N! (N Factorial)" : "N ..."}
                        </span>
                      </span>
                    </div>
                    {frame >= 103 && (
                      <span style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.pivot, fontWeight: 700 }}>
                        N × (N-1) × ... × 1
                      </span>
                    )}
                  </div>

                  {/* Comparison Table */}
                  <span style={{ fontSize: 13, color: theme.chalkDim, marginTop: 2 }}>
                    Input Size vs. Generated Permutations:
                  </span>

                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {/* Row 1: N = 3 (Concrete testcase, F242+) */}
                    <div
                      style={{
                        padding: "8px 16px",
                        backgroundColor: frame >= 242 ? "rgba(60, 229, 167, 0.15)" : "rgba(248, 246, 240, 0.03)",
                        border: `1.5px solid ${frame >= 242 ? theme.good : "rgba(248, 246, 240, 0.1)"}`,
                        borderRadius: 8,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        opacity: frame >= 242 ? 1 : 0.4,
                      }}
                    >
                      <span style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: theme.chalkText }}>
                        N = 3 values
                      </span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 800, color: theme.good }}>
                        3! = 6 permutations
                      </span>
                      <span style={{ fontSize: 13, color: theme.good, fontWeight: 700 }}>✓ Instant / Trivial</span>
                    </div>

                    {/* Row 2: N = 5 (F358+) */}
                    <div
                      style={{
                        padding: "8px 16px",
                        backgroundColor: frame >= 358 ? "rgba(255, 209, 102, 0.15)" : "rgba(248, 246, 240, 0.03)",
                        border: `1.5px solid ${frame >= 358 ? theme.pivot : "rgba(248, 246, 240, 0.1)"}`,
                        borderRadius: 8,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        opacity: frame >= 358 ? 1 : 0.3,
                      }}
                    >
                      <span style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: theme.chalkText }}>
                        N = 5 values
                      </span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 800, color: theme.pivot }}>
                        5! = 120 permutations
                      </span>
                      <span style={{ fontSize: 13, color: theme.chalkDim }}>Moderate</span>
                    </div>

                    {/* Row 3: N = 10 (F358+) */}
                    <div
                      style={{
                        padding: "8px 16px",
                        backgroundColor: frame >= 358 ? "rgba(255, 118, 117, 0.12)" : "rgba(248, 246, 240, 0.03)",
                        border: `1.5px solid ${frame >= 358 ? theme.warn : "rgba(248, 246, 240, 0.1)"}`,
                        borderRadius: 8,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        opacity: frame >= 358 ? 1 : 0.25,
                      }}
                    >
                      <span style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: theme.chalkText }}>
                        N = 10 values
                      </span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 800, color: theme.warn }}>
                        10! = 3,628,800 (~3.6 Million)
                      </span>
                      <span style={{ fontSize: 13, color: theme.warn, fontWeight: 700 }}>⚠ Massive Spike!</span>
                    </div>

                    {/* Row 4: N = 20 (F410+) */}
                    <div
                      style={{
                        padding: "8px 16px",
                        backgroundColor: frame >= 410 ? "rgba(235, 87, 87, 0.18)" : "rgba(248, 246, 240, 0.03)",
                        border: `1.5px solid ${frame >= 410 ? theme.bad : "rgba(248, 246, 240, 0.1)"}`,
                        borderRadius: 8,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        opacity: frame >= 410 ? 1 : 0.2,
                      }}
                    >
                      <span style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: theme.chalkText }}>
                        N = 20 values
                      </span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 800, color: theme.bad }}>
                        20! ≈ 2.43 × 10¹⁸
                      </span>
                      <span style={{ fontSize: 13, color: theme.bad, fontWeight: 700 }}>⛔ Impossible (Years)</span>
                    </div>
                  </div>

                  {/* Micro note */}
                  <div
                    style={{
                      marginTop: 4,
                      fontSize: 12.5,
                      color: theme.chalkDim,
                      lineHeight: 1.4,
                    }}
                  >
                    💡 <b>Fact:</b> Factorial curves grow faster than exponential (2ⁿ) or polynomial (Nᵏ) curves.
                  </div>
                </div>
              </RoughCard>

              {/* RIGHT CARD: MEMORY BURDEN & LEETCODE VIOLATION (F473+) */}
              {frame >= 473 && (
                <RoughCard
                  width={840}
                  height={470}
                  stroke={frame >= 612 ? theme.bad : theme.warn}
                  strokeWidth={2.5}
                  seed={502}
                  bg="rgba(48, 16, 20, 0.65)"
                >
                  <div style={{ padding: "20px 28px", display: "flex", flexDirection: "column", gap: 10 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ fontFamily: fonts.display, fontSize: 26, fontWeight: 700, color: theme.warn }}>
                        2. Memory Saturation & Space Breach
                      </span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.warn, fontWeight: 700 }}>
                        Auxiliary Space
                      </span>
                    </div>
                    <ChalkDivider width={780} stroke="rgba(255, 118, 117, 0.35)" seed={102} />

                    <span style={{ fontSize: 13, color: theme.chalkText }}>
                      Storing Generated Permutations in Heap:
                    </span>

                    {/* Simulated Memory Heap Fill */}
                    <div
                      style={{
                        padding: "12px 18px",
                        backgroundColor: "rgba(248, 246, 240, 0.04)",
                        border: "1.5px solid rgba(255, 118, 117, 0.4)",
                        borderRadius: 10,
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                        <span style={{ fontFamily: fonts.mono, color: theme.chalkText }}>
                          all_perms = list(permutations(nums))
                        </span>
                        <span style={{ fontFamily: fonts.mono, fontWeight: 800, color: theme.warn }}>
                          Size: N! × N words
                        </span>
                      </div>

                      {/* Progress Bar of Memory */}
                      <div
                        style={{
                          width: "100%",
                          height: 16,
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderRadius: 8,
                          overflow: "hidden",
                          border: "1px solid rgba(255, 118, 117, 0.3)",
                        }}
                      >
                        <div
                          style={{
                            width: `${Math.min(100, Math.floor(interpolate(frame, [473, 560], [15, 95], { extrapolateRight: "clamp" })))}%`,
                            height: "100%",
                            background: "linear-gradient(90deg, #FFA94D, #EB5757)",
                            transition: "width 0.1s linear",
                          }}
                        />
                      </div>

                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: theme.chalkDim }}>
                        <span>Heap Usage for N=10: ~150 MB</span>
                        <span style={{ color: theme.bad, fontWeight: 700 }}>For N=15: Out of Memory (OOM)!</span>
                      </div>
                    </div>

                    {/* Red Constraint Violation Stamp (F612+) */}
                    {frame >= 612 && (
                      <div
                        style={{
                          marginTop: 4,
                          padding: "14px 20px",
                          backgroundColor: "rgba(235, 87, 87, 0.2)",
                          border: `2px solid ${theme.bad}`,
                          borderRadius: 12,
                          display: "flex",
                          flexDirection: "column",
                          gap: 6,
                          transform: `scale(${interpolate(frame, [612, 630], [1.08, 1.0], { extrapolateRight: "clamp" })})`,
                          boxShadow: "0 0 25px rgba(235, 87, 87, 0.35)",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span style={{ fontSize: 20 }}>❌</span>
                          <span
                            style={{
                              fontFamily: fonts.mono,
                              fontSize: 15,
                              fontWeight: 900,
                              color: theme.bad,
                              letterSpacing: "0.06em",
                            }}
                          >
                            CONSTRAINT VIOLATION: O(1) EXTRA SPACE
                          </span>
                        </div>
                        <div style={{ fontSize: 13, color: theme.chalkText, lineHeight: 1.4 }}>
                          LeetCode 31 states: <i>"You must not allocate extra memory for another array. You must do this by modifying the input array in-place with O(1) extra memory."</i>
                        </div>
                        <div style={{ fontFamily: fonts.mono, fontSize: 12.5, color: theme.warn, fontWeight: 700 }}>
                          Brute Force Space: O(N! · N) ──► FAILS CONSTRAINT!
                        </div>
                      </div>
                    )}
                  </div>
                </RoughCard>
              )}
            </div>

            {/* BOTTOM ROW: WASTE CONTRAST BANNER (F727..F971) */}
            {frame >= 727 && (
              <div style={{ marginTop: 18, width: 1720, display: "flex", justifyContent: "center" }}>
                <RoughCard
                  width={1720}
                  height={94}
                  stroke={theme.pivot}
                  strokeWidth={3}
                  seed={503}
                  bg="rgba(48, 38, 12, 0.68)"
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      padding: "0 36px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                      <span style={{ fontSize: 32 }}>⚖️</span>
                      <div>
                        <div style={{ fontFamily: fonts.display, fontSize: 22, fontWeight: 700, color: theme.pivot }}>
                          The Structural Waste Contrast
                        </div>
                        <div style={{ fontSize: 14, color: theme.chalkText }}>
                          Generating and sorting <b>ALL N! arrangements</b> in memory just to step <b>+1 forward</b> is doing far too much work!
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        padding: "8px 18px",
                        backgroundColor: "rgba(255, 209, 102, 0.15)",
                        border: `1.5px solid ${theme.pivot}`,
                        borderRadius: 8,
                        fontFamily: fonts.mono,
                        fontSize: 13,
                        fontWeight: 800,
                        color: theme.pivot,
                        letterSpacing: "0.06em",
                      }}
                    >
                      ABANDON BRUTE FORCE
                    </div>
                  </div>
                </RoughCard>
              </div>
            )}
          </div>
        )}

        {/* ================================================================= */}
        {/* PHASE 2 & 3 (F971..F2268): FIRST PRINCIPLES & THE FIRST CLUE      */}
        {/* ================================================================= */}
        {frame >= 971 && (
          <div
            style={{
              position: "absolute",
              top: 168,
              width: 1720,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              zIndex: 5,
            }}
          >
            {/* Monospace Eyebrow */}
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 16,
                fontWeight: 700,
                color: frame < 1765 ? theme.pivot : theme.good,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                marginBottom: 6,
              }}
            >
              {frame < 1765 ? "FIRST PRINCIPLES · BEYOND BRUTE FORCE" : "OPTIMAL STRATEGY · THE FIRST DISCOVERY"}
            </div>

            {/* Handwritten Caveat Heading */}
            <div
              style={{
                fontFamily: fonts.display,
                fontSize: 48,
                fontWeight: 800,
                color: theme.chalkText,
                marginBottom: 16,
              }}
            >
              {frame < 1765 ? 'What Does "Next" Truly Mean?' : "Scan From Right to Left"}
            </div>

            {/* MASTER ARRAY CONTAINER */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkDim }}>
                  CURRENT ARRANGEMENT:
                </span>
                <span style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 800, color: theme.cyan }}>
                  nums = [ 1 , 3 , 2 ]
                </span>
                {frame >= 1057 && frame < 1135 && (
                  <span
                    style={{
                      padding: "4px 12px",
                      backgroundColor: "rgba(92, 225, 230, 0.15)",
                      border: `1.5px solid ${theme.cyan}`,
                      borderRadius: 6,
                      fontSize: 13,
                      fontFamily: fonts.mono,
                      fontWeight: 700,
                      color: theme.cyan,
                    }}
                  >
                    ✨ Use its intrinsic structure!
                  </span>
                )}
              </div>

              {/* Master ArrayTrackV2 */}
              <div style={{ marginTop: 2 }}>
                <ArrayTrackV2
                  elements={masterArrayElements}
                  slotWidth={130}
                  slotHeight={110}
                  gap={18}
                  showIndices
                />
              </div>

              {/* Right-to-Left Scan Arrow (F1856..F2167) */}
              {frame >= 1856 && frame < 2167 && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginTop: 6,
                    padding: "8px 24px",
                    backgroundColor: "rgba(92, 225, 230, 0.12)",
                    borderRadius: 20,
                    border: `1.5px dashed ${theme.cyan}`,
                  }}
                >
                  <RoughLine
                    width={40}
                    height={16}
                    shape={{ kind: "arrow", x1: 38, y1: 8, x2: 2, y2: 8 }}
                    stroke={theme.cyan}
                    strokeWidth={3}
                    seed={88}
                  />
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 14,
                      fontWeight: 800,
                      color: theme.cyan,
                      letterSpacing: "0.08em",
                    }}
                  >
                    DISCOVERY DIRECTION: SCAN FROM RIGHT TO LEFT
                  </span>
                </div>
              )}
            </div>

            {/* PHASE 2 MIDDLE: WHAT DOES "NEXT" MEAN? (F1135..F1765) */}
            {frame >= 1135 && frame < 1765 && (
              <div style={{ marginTop: 22, width: 1330, display: "flex", flexDirection: "column", gap: 16 }}>
                {/* Dual Criterion Cards matching Scene 03's grid aesthetic */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, width: "100%" }}>
                  {/* Criterion 1 (F1220+) */}
                  <RoughCard
                    width={650}
                    height={124}
                    stroke={frame >= 1220 ? theme.pivot : theme.chalkDim}
                    strokeWidth={frame >= 1220 ? 3 : 2}
                    seed={504}
                    bg={frame >= 1220 ? "rgba(48, 42, 10, 0.72)" : "rgba(18, 38, 30, 0.58)"}
                    style={{ opacity: frame >= 1220 ? 1 : 0.4 }}
                  >
                    <div
                      style={{
                        padding: "0 28px",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                        <div
                          style={{
                            fontFamily: fonts.mono,
                            fontSize: 26,
                            fontWeight: 800,
                            color: theme.pivot,
                          }}
                        >
                          #1
                        </div>
                        <div>
                          <div style={{ fontFamily: fonts.display, fontSize: 25, fontWeight: 700, color: theme.chalkText }}>
                            The Smallest Possible Change
                          </div>
                          <div style={{ fontSize: 13.5, color: theme.chalkDim, marginTop: 2 }}>
                            Minimize the numerical distance (Δ) from current value.
                          </div>
                        </div>
                      </div>

                      {/* Right Badge */}
                      <div
                        style={{
                          padding: "6px 14px",
                          borderRadius: 6,
                          backgroundColor: "rgba(255, 209, 102, 0.2)",
                          border: `1.5px solid ${theme.pivot}`,
                          color: theme.pivot,
                          fontFamily: fonts.mono,
                          fontSize: 13,
                          fontWeight: 800,
                          letterSpacing: "0.06em",
                          flexShrink: 0,
                        }}
                      >
                        MINIMIZE Δ
                      </div>
                    </div>
                  </RoughCard>

                  {/* Criterion 2 (F1308+) */}
                  <RoughCard
                    width={650}
                    height={124}
                    stroke={frame >= 1308 ? theme.good : theme.chalkDim}
                    strokeWidth={frame >= 1308 ? 3 : 2}
                    seed={505}
                    bg={frame >= 1308 ? "rgba(10, 48, 36, 0.72)" : "rgba(18, 38, 30, 0.58)"}
                    style={{ opacity: frame >= 1308 ? 1 : 0.4 }}
                  >
                    <div
                      style={{
                        padding: "0 28px",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                        <div
                          style={{
                            fontFamily: fonts.mono,
                            fontSize: 26,
                            fontWeight: 800,
                            color: theme.good,
                          }}
                        >
                          #2
                        </div>
                        <div>
                          <div style={{ fontFamily: fonts.display, fontSize: 25, fontWeight: 700, color: theme.chalkText }}>
                            Makes Array Strictly Larger
                          </div>
                          <div style={{ fontSize: 13.5, color: theme.chalkDim, marginTop: 2 }}>
                            New arrangement must be lexicographically greater.
                          </div>
                        </div>
                      </div>

                      {/* Right Badge */}
                      <div
                        style={{
                          padding: "6px 14px",
                          borderRadius: 6,
                          backgroundColor: "rgba(60, 229, 167, 0.2)",
                          border: `1.5px solid ${theme.good}`,
                          color: theme.good,
                          fontFamily: fonts.mono,
                          fontSize: 13,
                          fontWeight: 800,
                          letterSpacing: "0.06em",
                          flexShrink: 0,
                        }}
                      >
                        NEXT &gt; CURRENT
                      </div>
                    </div>
                  </RoughCard>
                </div>

                {/* POSITIONAL WEIGHT COMPARISON (F1386..F1765) */}
                {frame >= 1386 && (
                  <div style={{ width: "100%" }}>
                    <RoughCard
                      width={1324}
                      height={96}
                      stroke={frame >= 1561 ? theme.pivot : theme.warn}
                      strokeWidth={3}
                      seed={506}
                      bg={frame >= 1561 ? "rgba(48, 42, 10, 0.72)" : "rgba(48, 16, 20, 0.72)"}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          padding: "0 32px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                          <span style={{ fontSize: 28 }}>{frame >= 1561 ? "⭐" : "⚠️"}</span>
                          <div>
                            <div
                              style={{
                                fontFamily: fonts.display,
                                fontSize: 23,
                                fontWeight: 700,
                                color: frame >= 1561 ? theme.pivot : theme.warn,
                              }}
                            >
                              {frame >= 1561 ? "The Golden Deduction" : "Position Hazard: Hundreds Place Leap"}
                            </div>
                            <div style={{ fontSize: 13.5, color: theme.chalkText }}>
                              {frame >= 1561 ? (
                                <span>
                                  To make the <b>smallest possible increase</b>, we must alter digits <b>as far to the right as possible</b>!
                                </span>
                              ) : (
                                <span>
                                  Changing the left digit creates an <b>unnecessarily large leap (+180)</b>, skipping smaller valid permutations!
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div
                          style={{
                            padding: "8px 18px",
                            borderRadius: 8,
                            backgroundColor: frame >= 1561 ? "rgba(255, 209, 102, 0.2)" : "rgba(255, 118, 117, 0.2)",
                            border: `1.5px solid ${frame >= 1561 ? theme.pivot : theme.warn}`,
                            fontFamily: fonts.mono,
                            fontSize: 13,
                            fontWeight: 800,
                            color: frame >= 1561 ? theme.pivot : theme.warn,
                            letterSpacing: "0.06em",
                            flexShrink: 0,
                          }}
                        >
                          {frame >= 1561 ? "ALTER FAR RIGHT" : "LEFT IS TOO LARGE"}
                        </div>
                      </div>
                    </RoughCard>
                  </div>
                )}
              </div>
            )}

            {/* PHASE 3: THE SEARCH CRITERION & FIRST CLUE (F1765..F2167) */}
            {frame >= 1765 && frame < 2167 && (
              <div style={{ marginTop: 22, width: 1330, display: "flex", flexDirection: "column", gap: 16 }}>
                {/* Clue Nodes in Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, width: "100%" }}>
                  <RoughCard
                    width={650}
                    height={120}
                    stroke={theme.cyan}
                    strokeWidth={2.5}
                    seed={508}
                    bg="rgba(10, 48, 42, 0.68)"
                  >
                    <div
                      style={{
                        padding: "0 26px",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.cyan, fontWeight: 800, letterSpacing: "0.06em" }}>
                          1. WHERE DO WE LOOK?
                        </div>
                        <div style={{ fontFamily: fonts.display, fontSize: 22, fontWeight: 700, color: theme.chalkText, marginTop: 2 }}>
                          Inspect From Array Right End
                        </div>
                        <div style={{ fontSize: 13, color: theme.chalkDim }}>
                          Scan right-to-left towards the start of the array.
                        </div>
                      </div>

                      <div
                        style={{
                          padding: "6px 14px",
                          borderRadius: 6,
                          backgroundColor: "rgba(92, 225, 230, 0.2)",
                          border: `1.5px solid ${theme.cyan}`,
                          color: theme.cyan,
                          fontFamily: fonts.mono,
                          fontSize: 13,
                          fontWeight: 800,
                          letterSpacing: "0.06em",
                          flexShrink: 0,
                        }}
                      >
                        REVERSE SCAN
                      </div>
                    </div>
                  </RoughCard>

                  <RoughCard
                    width={650}
                    height={120}
                    stroke={theme.good}
                    strokeWidth={2.5}
                    seed={509}
                    bg="rgba(10, 48, 36, 0.68)"
                  >
                    <div
                      style={{
                        padding: "0 26px",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.good, fontWeight: 800, letterSpacing: "0.06em" }}>
                          2. WHAT ARE WE HUNTING FOR?
                        </div>
                        <div style={{ fontFamily: fonts.display, fontSize: 22, fontWeight: 700, color: theme.chalkText, marginTop: 2 }}>
                          The First Increasing Step
                        </div>
                        <div style={{ fontSize: 13, color: theme.chalkDim }}>
                          First index where a larger swap is still possible!
                        </div>
                      </div>

                      <div
                        style={{
                          padding: "6px 14px",
                          borderRadius: 6,
                          backgroundColor: "rgba(60, 229, 167, 0.2)",
                          border: `1.5px solid ${theme.good}`,
                          color: theme.good,
                          fontFamily: fonts.mono,
                          fontSize: 13,
                          fontWeight: 800,
                          letterSpacing: "0.06em",
                          flexShrink: 0,
                        }}
                      >
                        FIND PIVOT
                      </div>
                    </div>
                  </RoughCard>
                </div>

                {/* Key Insight Card */}
                <RoughCard
                  width={1324}
                  height={76}
                  stroke={theme.good}
                  strokeWidth={2.5}
                  seed={510}
                  bg="rgba(10, 48, 36, 0.7)"
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      padding: "0 28px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span style={{ fontSize: 24 }}>💡</span>
                      <span style={{ fontSize: 14.5, color: theme.chalkText }}>
                        <b>Core Realization:</b> Any suffix that is already decreasing cannot be made larger without altering the digit immediately before it.
                      </span>
                    </div>

                    <div
                      style={{
                        padding: "5px 14px",
                        borderRadius: 6,
                        backgroundColor: "rgba(60, 229, 167, 0.18)",
                        border: `1.5px solid ${theme.good}`,
                        color: theme.good,
                        fontFamily: fonts.mono,
                        fontSize: 12.5,
                        fontWeight: 800,
                        letterSpacing: "0.06em",
                        flexShrink: 0,
                      }}
                    >
                      FOUNDATION
                    </div>
                  </div>
                </RoughCard>
              </div>
            )}

            {/* PHASE 3 HANDOFF: SCENE 06 HANDOFF CARD (F2167..F2268) */}
            {frame >= 2167 && (
              <div style={{ marginTop: 24, width: 1100 }}>
                <RoughCard
                  width={1100}
                  height={250}
                  stroke={theme.pivot}
                  strokeWidth={3}
                  seed={507}
                  bg="rgba(48, 38, 12, 0.75)"
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      padding: "32px 40px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 14,
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 14,
                        fontWeight: 800,
                        color: theme.pivot,
                        letterSpacing: "0.14em",
                      }}
                    >
                      NEXT UP ──► SCENE 06
                    </span>

                    <span
                      style={{
                        fontFamily: fonts.display,
                        fontSize: 38,
                        fontWeight: 800,
                        color: theme.chalkText,
                      }}
                    >
                      The Optimal 3-Step Algorithm
                    </span>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                        fontFamily: fonts.mono,
                        fontSize: 15,
                        color: theme.chalkDim,
                      }}
                    >
                      <span style={{ color: theme.cyan, fontWeight: 700 }}>1. Find Pivot</span>
                      <span>──►</span>
                      <span style={{ color: theme.good, fontWeight: 700 }}>2. Find Successor</span>
                      <span>──►</span>
                      <span style={{ color: theme.pivot, fontWeight: 700 }}>3. Reverse Suffix</span>
                    </div>

                    <span style={{ fontSize: 14, color: theme.chalkDim, fontStyle: "italic" }}>
                      "Now we can build the optimal idea carefully."
                    </span>
                  </div>
                </RoughCard>
              </div>
            )}
          </div>
        )}

        {/* ===================================================================== */}
        {/* CAPTIONS CONTAINER (Karaoke Word Highlight, Y: 980)                    */}
        {/* ===================================================================== */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            zIndex: 60,
            pointerEvents: "none",
          }}
        >
          <Captions
            words={captionWords}
            fontSize={30}
          />
        </div>
      </div>
    </div>
  );
};
