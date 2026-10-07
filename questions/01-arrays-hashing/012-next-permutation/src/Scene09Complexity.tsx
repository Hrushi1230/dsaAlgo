/**
 * Scene09Complexity.tsx — Scene 09 · Complexity, Common Mistakes & Edge Cases
 * Next Permutation (LeetCode 31) · Pattern 01 — Arrays & Hashing
 *
 * Authentic Oxford Chalkboard Aesthetic (matching Scene 03 & s03_f1250.png):
 * - Exactly 4,156 frames @ 30 FPS (138.520s) strictly from sync/09-complexity.json
 * - 35 Anchors mapped from sync/09-complexity.anchors.json
 * - Identical top course header strip with handwritten cursive "Next Permutation"
 * - Translucent chalkboard card surfaces (rgba green/gold/mint/maroon washes, NO pitch-black blocks)
 * - Pure @dsa/kit visual grammar: RoughCard (RoughBox), ChalkDivider (RoughLine), ArrayTrackV2
 * - Block 1 (F0..F1128): Additive Time Complexity (N + N + N <= 3N -> O(N)) & In-Place Space (O(1))
 * - Block 2 (F1128..F1747): Combinatorial Scale & Brute Force Contrast (N! permutations vs In-Place)
 * - Block 3 (F1747..F2922): 4 Common Mistakes sequential spotlight (Strict Pivot, Strict Successor, Minimal Increase, Reverse from i+1)
 * - Block 4 (F2922..F4156): 4 Edge Cases Array V2 demos ([3,2,1] Wraparound, [1,2,3] Increasing, Single Element, Duplicates) & Grand Certification
 * - Zero collision spatial layout with balanced center vertical distribution (Y: 145..760)
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
import { ArrayTrackV2, ArrayElementItem, PointerIndicator } from "../../../../kit/components/array/ArrayTrackV2";
import syncData from "../sync/09-complexity.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings (from sync/09-complexity.json)
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

/**
 * Authentic RoughCard with translucent chalkboard wash
 * Strictly adheres to s03_f1250.png visual standard
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
  bg = "rgba(10, 48, 42, 0.68)",
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
  width = 750,
  stroke = "rgba(255, 255, 255, 0.22)",
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

export const Scene09Complexity: React.FC = () => {
  const frame = useCurrentFrame();

  // =========================================================================
  // CAMERA ENGINE (Subtle pan/zoom matching pedagogical beats)
  // =========================================================================
  const { camScale, camY }: { camScale: number; camY: number } = useMemo(() => {
    // Zoom slightly during Additive Formula (F680..F926)
    if (frame >= 680 && frame < 926) {
      const s = interpolate(frame, [680, 750], [1.0, 1.018], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: s, camY: -2 };
    }
    // Zoom during Brute Force Factorial explosion (F1193..F1521)
    if (frame >= 1193 && frame < 1521) {
      const s = interpolate(frame, [1193, 1260], [1.0, 1.02], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: s, camY: -3 };
    }
    // Zoom during Edge Case 1 Wraparound (F2922..F3401)
    if (frame >= 2922 && frame < 3401) {
      const s = interpolate(frame, [2922, 2980], [1.0, 1.015], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: s, camY: -2 };
    }
    return { camScale: 1.0, camY: 0 };
  }, [frame]);

  // =========================================================================
  // ACTIVE PEDAGOGICAL BLOCK
  // =========================================================================
  // Block 1: F0 .. F1128   -> Complexity Breakdown (3 Passes, O(N), O(1))
  // Block 2: F1128 .. F1747 -> Brute Force Contrast (N! Factorial Scale)
  // Block 3: F1747 .. F2922 -> 4 Common Mistakes
  // Block 4: F2922 .. F4156 -> 4 Edge Cases & Synthesis
  const blockIndex = useMemo(() => {
    if (frame < 1128) return 1;
    if (frame < 1747) return 2;
    if (frame < 2922) return 3;
    return 4;
  }, [frame]);

  // =========================================================================
  // DYNAMIC HEADER EYEBROW
  // =========================================================================
  const eyebrowText = useMemo(() => {
    if (frame < 1128) {
      return "COMPLEXITY ANALYSIS · 3 SEQUENTIAL LINEAR PASSES";
    }
    if (frame < 1747) {
      return "METHOD CONTRAST · FACTORIAL BRUTE FORCE VS IN-PLACE OPTIMAL";
    }
    if (frame < 2922) {
      if (frame < 2192) return "PITFALL 1 · STRICT PIVOT INEQUALITY (nums[i] < nums[i+1])";
      if (frame < 2440) return "PITFALL 2 · STRICT SUCCESSOR INEQUALITY (nums[j] > nums[i])";
      if (frame < 2759) return "PITFALL 3 · MINIMAL SUCCESSOR & WHY SCAN FROM RIGHT";
      return "PITFALL 4 · REVERSAL RANGE OFF-BY-ONE (reverse from i+1)";
    }
    if (frame < 3401) return "EDGE CASE 1 · FULLY DECREASING ARRAY [3, 2, 1] (WRAPAROUND)";
    if (frame < 3745) return "EDGE CASE 2 · ALREADY INCREASING ARRAY [1, 2, 3]";
    if (frame < 3857) return "EDGE CASE 3 · SINGLE-ELEMENT ARRAY [7]";
    return "EDGE CASE 4 · DUPLICATES & INVARIANT COMPLETENESS";
  }, [frame]);

  // =========================================================================
  // BLOCK 4: EDGE CASE ARRAYS (Using ArrayTrackV2)
  // =========================================================================
  const edgeElements: ArrayElementItem[] = useMemo(() => {
    // Edge Case 1: [3, 2, 1] -> reverses to [1, 2, 3] at F3279
    if (frame >= 2922 && frame < 3401) {
      if (frame >= 3279) {
        return [
          { value: 1, semanticState: "correct" },
          { value: 2, semanticState: "correct" },
          { value: 3, semanticState: "correct" },
        ];
      }
      return [
        { value: 3, semanticState: frame >= 3209 ? "current" : "pivot" },
        { value: 2, semanticState: "normal" },
        { value: 1, semanticState: frame >= 3209 ? "current" : "normal" },
      ];
    }
    // Edge Case 2: [1, 2, 3] -> swaps 2 and 3 -> [1, 3, 2] at F3594
    if (frame >= 3401 && frame < 3745) {
      if (frame >= 3650) {
        return [
          { value: 1, semanticState: "normal" },
          { value: 3, semanticState: "pivot" },
          { value: 2, semanticState: "correct" },
        ];
      }
      return [
        { value: 1, semanticState: "normal" },
        { value: 2, semanticState: frame >= 3594 ? "pivot" : "normal" },
        { value: 3, semanticState: frame >= 3594 ? "correct" : "normal" },
      ];
    }
    // Edge Case 3: [7]
    if (frame >= 3745 && frame < 3857) {
      return [{ value: 7, semanticState: "correct" }];
    }
    // Edge Case 4: Duplicates [2, 3, 3, 1]
    if (frame >= 3857) {
      return [
        { value: 2, semanticState: "pivot" },
        { value: 3, semanticState: "normal" },
        { value: 3, semanticState: "correct" },
        { value: 1, semanticState: "normal" },
      ];
    }
    return [];
  }, [frame]);

  const edgePointers: PointerIndicator[] = useMemo(() => {
    // Edge Case 1: [3, 2, 1]
    if (frame >= 2922 && frame < 3401) {
      if (frame >= 3279) {
        // Reversal completed: clear pointers so array [1, 2, 3] shines cleanly
        return [];
      }
      if (frame >= 3209) {
        return [
          { id: "ptr-ec1-left", index: 0, label: "left", color: theme.good },
          { id: "ptr-ec1-right", index: 2, label: "right", color: theme.pivot },
        ];
      }
      if (frame >= 3083) {
        return [{ id: "ptr-ec1-i-neg1", index: -1, label: "i = -1", color: theme.bad }];
      }
      return [{ id: "ptr-ec1-i", index: 0, label: "i", color: theme.pivot }];
    }
    // Edge Case 2: [1, 2, 3]
    if (frame >= 3401 && frame < 3745) {
      if (frame >= 3594) {
        return [
          { id: "ptr-ec2-i", index: 1, label: "i=1", color: theme.pivot },
          { id: "ptr-ec2-j", index: 2, label: "j=2", color: theme.cyan },
        ];
      }
      return [{ id: "ptr-ec2-i", index: 1, label: "i", color: theme.pivot }];
    }
    // Edge Case 3: [7]
    if (frame >= 3745 && frame < 3857) {
      return [{ id: "ptr-ec3-n1", index: 0, label: "n=1", color: theme.good }];
    }
    // Edge Case 4: [2, 3, 3, 1]
    if (frame >= 3857) {
      return [
        { id: "ptr-ec4-i", index: 0, label: "i", color: theme.pivot },
        { id: "ptr-ec4-j", index: 2, label: "j", color: theme.cyan },
      ];
    }
    return [];
  }, [frame]);

  return (
    <div
      style={{
        position: "relative",
        width: 1920,
        height: 1080,
        overflow: "hidden",
        backgroundColor: theme.boardBg,
        fontFamily: fonts.sans,
        color: theme.chalkText,
      }}
    >
      {/* ------------------------------------------------------------------- */}
      {/* AUDIO TRACK                                                         */}
      {/* ------------------------------------------------------------------- */}
      <Audio src={staticFile("audio/012/09-complexity.mp3")} />

      {/* ------------------------------------------------------------------- */}
      {/* SVG CHALKBOARD TEXTURE & SHADER FILTERS                              */}
      {/* ------------------------------------------------------------------- */}
      <ChalkboardBackground />
      <ChalkFilters />

      {/* ------------------------------------------------------------------- */}
      {/* MAIN STAGE WITH DYNAMIC CAMERA SCALE & TRANSLATION                  */}
      {/* ------------------------------------------------------------------- */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${camScale}) translateY(${camY}px)`,
          transformOrigin: "center 420px",
        }}
      >
        {/* ================================================================= */}
        {/* 1. TOP HEADER & METADATA BAR (Y: 28..78)                          */}
        {/* ================================================================= */}
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 80,
            right: 80,
            height: 50,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left Metadata Badges */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 13,
                fontWeight: 700,
                color: "rgba(255, 255, 255, 0.8)",
                padding: "6px 14px",
                borderRadius: 6,
                border: "1px solid rgba(255, 255, 255, 0.2)",
                backgroundColor: "rgba(10, 48, 42, 0.5)",
                letterSpacing: "0.08em",
              }}
            >
              01 · ARRAYS & HASHING · LC 31
            </div>
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 13,
                fontWeight: 700,
                color: theme.good,
                padding: "6px 12px",
                borderRadius: 6,
                border: `1px solid ${theme.good}`,
                backgroundColor: "rgba(60, 229, 167, 0.12)",
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
              fontSize: 38,
              fontWeight: 700,
              color: theme.chalkText,
              letterSpacing: "0.02em",
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            Next Permutation
          </div>

          {/* Right Phase Badge */}
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 13,
              fontWeight: 700,
              color: theme.pivot,
              padding: "6px 14px",
              borderRadius: 6,
              border: `1px solid ${theme.pivot}`,
              backgroundColor: "rgba(255, 217, 61, 0.12)",
              letterSpacing: "0.08em",
            }}
          >
            [ COMPLEXITY & INVARIANTS ]
          </div>
        </div>

        {/* ================================================================= */}
        {/* 2. SUBTITLE / BREADCRUMB STRIP (Y: 95..125)                       */}
        {/* ================================================================= */}
        <div
          style={{
            position: "absolute",
            top: 92,
            left: 80,
            right: 80,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 14,
              fontWeight: 700,
              color: theme.good,
              letterSpacing: "0.06em",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ color: theme.chalkDim }}>▶</span>
            <span>{eyebrowText}</span>
          </div>
        </div>

        {/* ================================================================= */}
        {/* 3. CENTER STAGE (Y: 145 .. 760px · Height: 615px)                 */}
        {/* ================================================================= */}

        {/* ----------------------------------------------------------------- */}
        {/* BLOCK 1: TIME & SPACE COMPLEXITY BREAKDOWN (F0 .. F1128)          */}
        {/* ----------------------------------------------------------------- */}
        {blockIndex === 1 && (
          <div
            style={{
              position: "absolute",
              top: 145,
              left: 100,
              right: 100,
              height: 615,
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {/* Top Row: 3 Sequential Pass Cards */}
            <div style={{ display: "flex", justifyContent: "space-between", gap: 20, height: 260 }}>
              {/* Pass 1 Card */}
              <div style={{ flex: 1 }}>
                <RoughCard
                  width={545}
                  height={260}
                  seed={11}
                  stroke={frame >= 83 ? theme.pivot : "rgba(255, 255, 255, 0.3)"}
                  bg={frame >= 83 ? "rgba(10, 48, 42, 0.76)" : "rgba(10, 48, 42, 0.55)"}
                >
                  <div style={{ padding: "20px 24px", boxSizing: "border-box" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.pivot }}>
                        PASS 1 · PIVOT SCAN
                      </span>
                      {frame >= 185 && (
                        <span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: theme.good, padding: "2px 8px", borderRadius: 4, backgroundColor: "rgba(60, 229, 167, 0.15)", border: `1px solid ${theme.good}` }}>
                          COST: ≤ N
                        </span>
                      )}
                    </div>
                    <div style={{ fontFamily: fonts.display, fontSize: 24, color: theme.chalkText, marginTop: 8 }}>
                      Scan Right to Left for Dip
                    </div>
                    <ChalkDivider width={495} seed={21} />
                    <div style={{ fontFamily: fonts.sans, fontSize: 15, color: theme.chalkDim, lineHeight: 1.5, marginTop: 10 }}>
                      Moves from index <code style={{ color: theme.pivot }}>n - 2</code> down towards <code style={{ color: theme.pivot }}>0</code> looking for <code style={{ color: theme.good }}>nums[i] &lt; nums[i+1]</code>.
                    </div>
                    {frame >= 185 && (
                      <div style={{ marginTop: 14, padding: "8px 12px", borderRadius: 6, backgroundColor: "rgba(255, 217, 61, 0.12)", border: "1px dashed rgba(255, 217, 61, 0.4)", fontFamily: fonts.mono, fontSize: 13, color: theme.pivot }}>
                        Worst case: Inspects whole array (≤ N ops)
                      </div>
                    )}
                  </div>
                </RoughCard>
              </div>

              {/* Pass 2 Card */}
              <div style={{ flex: 1 }}>
                <RoughCard
                  width={545}
                  height={260}
                  seed={22}
                  stroke={frame >= 307 ? theme.cyan : "rgba(255, 255, 255, 0.3)"}
                  bg={frame >= 307 ? "rgba(10, 48, 42, 0.76)" : "rgba(10, 48, 42, 0.55)"}
                >
                  <div style={{ padding: "20px 24px", boxSizing: "border-box" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.cyan }}>
                        PASS 2 · SUCCESSOR SCAN
                      </span>
                      {frame >= 307 && (
                        <span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: theme.good, padding: "2px 8px", borderRadius: 4, backgroundColor: "rgba(60, 229, 167, 0.15)", border: `1px solid ${theme.good}` }}>
                          COST: ≤ N
                        </span>
                      )}
                    </div>
                    <div style={{ fontFamily: fonts.display, fontSize: 24, color: theme.chalkText, marginTop: 8 }}>
                      Scan Right to Left for Successor
                    </div>
                    <ChalkDivider width={495} seed={32} />
                    <div style={{ fontFamily: fonts.sans, fontSize: 15, color: theme.chalkDim, lineHeight: 1.5, marginTop: 10 }}>
                      Moves from index <code style={{ color: theme.cyan }}>n - 1</code> down to <code style={{ color: theme.cyan }}>i + 1</code> looking for <code style={{ color: theme.good }}>nums[j] &gt; nums[i]</code>.
                    </div>
                    {frame >= 307 && (
                      <div style={{ marginTop: 14, padding: "8px 12px", borderRadius: 6, backgroundColor: "rgba(78, 205, 196, 0.12)", border: "1px dashed rgba(78, 205, 196, 0.4)", fontFamily: fonts.mono, fontSize: 13, color: theme.cyan }}>
                        Worst case: Inspects suffix (≤ N ops)
                      </div>
                    )}
                  </div>
                </RoughCard>
              </div>

              {/* Pass 3 Card */}
              <div style={{ flex: 1 }}>
                <RoughCard
                  width={545}
                  height={260}
                  seed={33}
                  stroke={frame >= 528 ? theme.good : "rgba(255, 255, 255, 0.3)"}
                  bg={frame >= 528 ? "rgba(10, 48, 42, 0.76)" : "rgba(10, 48, 42, 0.55)"}
                >
                  <div style={{ padding: "20px 24px", boxSizing: "border-box" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.good }}>
                        PASS 3 · SUFFIX REVERSE
                      </span>
                      {frame >= 528 && (
                        <span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: theme.good, padding: "2px 8px", borderRadius: 4, backgroundColor: "rgba(60, 229, 167, 0.15)", border: `1px solid ${theme.good}` }}>
                          COST: ≤ N/2 SWAPS
                        </span>
                      )}
                    </div>
                    <div style={{ fontFamily: fonts.display, fontSize: 24, color: theme.chalkText, marginTop: 8 }}>
                      Two-Pointer In-Place Reversal
                    </div>
                    <ChalkDivider width={495} seed={43} />
                    <div style={{ fontFamily: fonts.sans, fontSize: 15, color: theme.chalkDim, lineHeight: 1.5, marginTop: 10 }}>
                      Left & right pointers converge inwards, swapping elements until they meet.
                    </div>
                    {frame >= 528 && (
                      <div style={{ marginTop: 14, padding: "8px 12px", borderRadius: 6, backgroundColor: "rgba(60, 229, 167, 0.12)", border: "1px dashed rgba(60, 229, 167, 0.4)", fontFamily: fonts.mono, fontSize: 13, color: theme.good }}>
                        Touches each suffix element at most once (≤ N ops)
                      </div>
                    )}
                  </div>
                </RoughCard>
              </div>
            </div>

            {/* Bottom Section: Additive Math Formula & Big-O Badges */}
            <div style={{ height: 335 }}>
              <RoughCard
                width={1720}
                height={335}
                seed={44}
                stroke={frame >= 805 ? theme.good : theme.chalkText}
                bg="rgba(10, 48, 42, 0.74)"
              >
                <div style={{ padding: "24px 36px", display: "flex", flexDirection: "column", height: "100%", boxSizing: "border-box", justifyContent: "space-between" }}>
                  {/* Upper Row: Additive Equation & Separate Passes Proof */}
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                        <span style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, color: theme.pivot }}>
                          SEQUENTIAL LOOP REASONING:
                        </span>
                        <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkText }}>
                          Pass 1 + Pass 2 + Pass 3
                        </span>
                      </div>
                      {frame >= 750 && (
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ fontFamily: fonts.mono, fontSize: 14, textDecoration: "line-through", color: theme.bad, opacity: 0.8 }}>
                            O(N × N × N)
                          </span>
                          <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: theme.good, padding: "3px 10px", borderRadius: 4, backgroundColor: "rgba(60, 229, 167, 0.15)", border: `1px solid ${theme.good}` }}>
                            ✓ SEPARATE PASSES: ADDITIVE, NOT MULTIPLICATIVE
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Prominent Formula Strip */}
                    <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 24, padding: "14px 20px", borderRadius: 8, backgroundColor: "rgba(0, 0, 0, 0.25)", border: "1px solid rgba(255, 255, 255, 0.12)" }}>
                      <span style={{ fontFamily: fonts.display, fontSize: 28, color: theme.chalkText }}>
                        Total Operations:
                      </span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 24, fontWeight: 800, color: theme.cyan }}>
                        T(N) ≤ N (pivot) + N (successor) + N (reverse) ≤ 3N
                      </span>
                      {frame >= 805 && (
                        <span style={{ fontFamily: fonts.mono, fontSize: 26, fontWeight: 900, color: theme.good, marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}>
                          <span>→</span>
                          <span style={{ padding: "4px 16px", borderRadius: 6, backgroundColor: "rgba(60, 229, 167, 0.2)", border: `2px solid ${theme.good}`, color: theme.good }}>
                            O(N)
                          </span>
                        </span>
                      )}
                    </div>
                  </div>

                  <ChalkDivider width={1648} seed={54} />

                  {/* Lower Row: Time Badge, Variables Chips & Space Badge */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {/* Time Complexity Stamp */}
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <div style={{ padding: "10px 22px", borderRadius: 8, backgroundColor: frame >= 805 ? "rgba(60, 229, 167, 0.18)" : "rgba(255, 255, 255, 0.05)", border: `2px solid ${frame >= 805 ? theme.good : "rgba(255, 255, 255, 0.2)"}` }}>
                        <div style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, color: theme.chalkDim, letterSpacing: "0.08em" }}>
                          TIME COMPLEXITY
                        </div>
                        <div style={{ fontFamily: fonts.mono, fontSize: 26, fontWeight: 900, color: frame >= 805 ? theme.good : theme.chalkText }}>
                          O(N) LINEAR
                        </div>
                      </div>
                    </div>

                    {/* Memory Variable Chips (F926..F1128) */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                      <span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: theme.chalkDim }}>
                        INDEX VARIABLES IN MEMORY (SCALAR REUSE):
                      </span>
                      <div style={{ display: "flex", gap: 10 }}>
                        {["n", "i", "j", "left", "right"].map((varName, vIdx) => (
                          <div
                            key={varName}
                            style={{
                              fontFamily: fonts.mono,
                              fontSize: 14,
                              fontWeight: 800,
                              color: frame >= 926 ? theme.pivot : theme.chalkDim,
                              padding: "4px 14px",
                              borderRadius: 6,
                              backgroundColor: frame >= 926 ? "rgba(255, 217, 61, 0.15)" : "rgba(255, 255, 255, 0.05)",
                              border: `1px solid ${frame >= 926 ? theme.pivot : "rgba(255, 255, 255, 0.15)"}`,
                            }}
                          >
                            {varName}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Space Complexity Stamp (F1012..F1128) */}
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <div style={{ padding: "10px 22px", borderRadius: 8, backgroundColor: frame >= 1012 ? "rgba(78, 205, 196, 0.18)" : "rgba(255, 255, 255, 0.05)", border: `2px solid ${frame >= 1012 ? theme.cyan : "rgba(255, 255, 255, 0.2)"}` }}>
                        <div style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, color: theme.chalkDim, letterSpacing: "0.08em" }}>
                          AUXILIARY SPACE
                        </div>
                        <div style={{ fontFamily: fonts.mono, fontSize: 26, fontWeight: 900, color: frame >= 1012 ? theme.cyan : theme.chalkText }}>
                          O(1) IN-PLACE
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </RoughCard>
            </div>
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* BLOCK 2: METHOD CONTRAST: BRUTE FORCE VS OPTIMAL (F1128..F1747)   */}
        {/* ----------------------------------------------------------------- */}
        {blockIndex === 2 && (
          <div
            style={{
              position: "absolute",
              top: 145,
              left: 100,
              right: 100,
              height: 615,
              display: "flex",
              justifyContent: "space-between",
              gap: 24,
            }}
          >
            {/* LEFT: Brute Force Penalty Arena */}
            <div style={{ flex: 1 }}>
              <RoughCard
                width={840}
                height={615}
                seed={61}
                stroke={theme.bad}
                bg="rgba(48, 16, 22, 0.72)"
              >
                <div style={{ padding: "26px 32px", display: "flex", flexDirection: "column", height: "100%", boxSizing: "border-box", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.bad, padding: "4px 12px", borderRadius: 4, backgroundColor: "rgba(255, 107, 107, 0.15)", border: `1px solid ${theme.bad}` }}>
                        APPROACH 1 · BRUTE FORCE
                      </span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 900, color: theme.bad }}>
                        O(N! × N) EXPONENTIAL
                      </span>
                    </div>

                    <div style={{ fontFamily: fonts.display, fontSize: 32, color: theme.chalkText, marginTop: 12 }}>
                      Combinatorial Factorial Explosion
                    </div>

                    <ChalkDivider width={775} seed={71} stroke="rgba(255, 107, 107, 0.3)" />

                    {/* Permutation Growth Scale */}
                    <div style={{ marginTop: 16 }}>
                      <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkDim, marginBottom: 8 }}>
                        CANDIDATE COUNT (N DISTINCT VALUES):
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                        <div style={{ padding: "10px 14px", borderRadius: 6, backgroundColor: "rgba(0, 0, 0, 0.3)", border: "1px solid rgba(255, 107, 107, 0.2)" }}>
                          <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkDim }}>N = 3: </span>
                          <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.chalkText }}>3! = 6</span>
                        </div>
                        <div style={{ padding: "10px 14px", borderRadius: 6, backgroundColor: "rgba(0, 0, 0, 0.3)", border: "1px solid rgba(255, 107, 107, 0.2)" }}>
                          <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkDim }}>N = 5: </span>
                          <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.pivot }}>5! = 120</span>
                        </div>
                        <div style={{ padding: "10px 14px", borderRadius: 6, backgroundColor: "rgba(0, 0, 0, 0.3)", border: "1px solid rgba(255, 107, 107, 0.3)" }}>
                          <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkDim }}>N = 10: </span>
                          <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 800, color: theme.bad }}>3,628,800</span>
                        </div>
                        <div style={{ padding: "10px 14px", borderRadius: 6, backgroundColor: "rgba(0, 0, 0, 0.3)", border: "1px solid rgba(255, 107, 107, 0.4)" }}>
                          <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkDim }}>N = 15: </span>
                          <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 900, color: theme.bad }}>1.3 × 10¹² !</span>
                        </div>
                      </div>
                    </div>

                    {/* Step-by-Step Penalty Breakdowns */}
                    <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 12 }}>
                      <div style={{ padding: "10px 14px", borderRadius: 6, backgroundColor: "rgba(255, 107, 107, 0.12)", border: "1px dashed rgba(255, 107, 107, 0.4)" }}>
                        <div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.bad }}>
                          1. GENERATION & STORAGE OVERHEAD:
                        </div>
                        <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkDim, marginTop: 4 }}>
                          Requires generating and storing all <code style={{ color: theme.bad }}>N!</code> permutations in RAM. Memory allocation fails even for modest array sizes.
                        </div>
                      </div>

                      {frame >= 1521 && (
                        <div style={{ padding: "10px 14px", borderRadius: 6, backgroundColor: "rgba(255, 107, 107, 0.15)", border: "1px dashed rgba(255, 107, 107, 0.5)" }}>
                          <div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.bad }}>
                            2. LEXICOGRAPHICAL SORTING PENALTY:
                          </div>
                          <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkDim, marginTop: 4 }}>
                            Sorting <code style={{ color: theme.bad }}>N!</code> permutations adds <code style={{ color: theme.bad }}>O(N! · log(N!) · N)</code> operations! Totally unviable.
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div style={{ padding: "10px 14px", borderRadius: 6, backgroundColor: "rgba(0, 0, 0, 0.35)", textAlign: "center", fontFamily: fonts.mono, fontSize: 13, color: theme.bad }}>
                    ✕ CANNOT SCALE TO LEETCODE CONSTRAINTS (N ≤ 100)
                  </div>
                </div>
              </RoughCard>
            </div>

            {/* RIGHT: Optimal Method Triumph */}
            <div style={{ flex: 1 }}>
              <RoughCard
                width={840}
                height={615}
                seed={62}
                stroke={theme.good}
                bg="rgba(10, 48, 42, 0.78)"
              >
                <div style={{ padding: "26px 32px", display: "flex", flexDirection: "column", height: "100%", boxSizing: "border-box", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.good, padding: "4px 12px", borderRadius: 4, backgroundColor: "rgba(60, 229, 167, 0.15)", border: `1px solid ${theme.good}` }}>
                        APPROACH 2 · OPTIMAL METHOD
                      </span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 900, color: theme.good }}>
                        O(N) TIME · O(1) SPACE
                      </span>
                    </div>

                    <div style={{ fontFamily: fonts.display, fontSize: 32, color: theme.chalkText, marginTop: 12 }}>
                      Direct In-Place Transformation
                    </div>

                    <ChalkDivider width={775} seed={72} stroke="rgba(60, 229, 167, 0.3)" />

                    {/* Core Virtues List */}
                    <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 14 }}>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "12px 16px", borderRadius: 8, backgroundColor: "rgba(60, 229, 167, 0.08)", border: "1px solid rgba(60, 229, 167, 0.2)" }}>
                        <span style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.good }}>✓</span>
                        <div>
                          <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.good }}>
                            ZERO CANDIDATE GENERATION:
                          </div>
                          <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkDim, marginTop: 2 }}>
                            Never builds permutation trees or auxiliary lists. Works directly on the input <code style={{ color: theme.good }}>nums</code> array in memory.
                          </div>
                        </div>
                      </div>

                      <div style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "12px 16px", borderRadius: 8, backgroundColor: "rgba(60, 229, 167, 0.08)", border: "1px solid rgba(60, 229, 167, 0.2)" }}>
                        <span style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.good }}>✓</span>
                        <div>
                          <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.good }}>
                            SURGICAL IN-PLACE MUTATION:
                          </div>
                          <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkDim, marginTop: 2 }}>
                            Only 1 element swap + 1 suffix two-pointer reversal. At most <code style={{ color: theme.good }}>1.5N</code> total array accesses.
                          </div>
                        </div>
                      </div>

                      <div style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "12px 16px", borderRadius: 8, backgroundColor: "rgba(60, 229, 167, 0.08)", border: "1px solid rgba(60, 229, 167, 0.2)" }}>
                        <span style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.good }}>✓</span>
                        <div>
                          <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.good }}>
                            INSTANTANEOUS SCALABILITY:
                          </div>
                          <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkDim, marginTop: 2 }}>
                            Executes in less than a millisecond for <code style={{ color: theme.good }}>N = 100</code> (and scales seamlessly up to <code style={{ color: theme.good }}>N = 100,000</code>).
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ padding: "10px 14px", borderRadius: 6, backgroundColor: "rgba(60, 229, 167, 0.15)", textAlign: "center", fontFamily: fonts.mono, fontSize: 13, color: theme.good, border: `1px solid ${theme.good}` }}>
                    ★ OPTIMAL PRODUCTION STANDARD: 100% IN-PLACE
                  </div>
                </div>
              </RoughCard>
            </div>
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* BLOCK 3: 4 COMMON MISTAKES TO AVOID (F1747..F2922)                */}
        {/* ----------------------------------------------------------------- */}
        {blockIndex === 3 && (
          <div
            style={{
              position: "absolute",
              top: 145,
              left: 100,
              right: 100,
              height: 615,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {/* Mistake Navigation Banner */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, height: 60 }}>
              {[
                { title: "1. STRICT PIVOT", active: frame >= 1830 && frame < 2192 },
                { title: "2. STRICT SUCCESSOR", active: frame >= 2192 && frame < 2440 },
                { title: "3. MINIMAL INCREASE", active: frame >= 2440 && frame < 2759 },
                { title: "4. REVERSE FROM i+1", active: frame >= 2759 },
              ].map((tab, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "10px 16px",
                    borderRadius: 8,
                    backgroundColor: tab.active ? "rgba(255, 217, 61, 0.18)" : "rgba(10, 48, 42, 0.5)",
                    border: `1px solid ${tab.active ? theme.pivot : "rgba(255, 255, 255, 0.15)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: fonts.mono,
                    fontSize: 13,
                    fontWeight: tab.active ? 900 : 600,
                    color: tab.active ? theme.pivot : theme.chalkDim,
                  }}
                >
                  {tab.title}
                </div>
              ))}
            </div>

            {/* Mistake Spotlight Card */}
            <div style={{ flex: 1 }}>
              <RoughCard
                width={1720}
                height={535}
                seed={81}
                stroke={theme.pivot}
                bg="rgba(10, 48, 42, 0.76)"
              >
                <div style={{ padding: "28px 40px", display: "flex", flexDirection: "column", height: "100%", boxSizing: "border-box", justifyContent: "space-between" }}>
                  {/* Mistake 1: Strict Pivot Inequality (F1830..F2192) */}
                  {frame < 2192 && (
                    <>
                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.pivot }}>
                            PITFALL 1 · NON-STRICT PIVOT INEQUALITY
                          </span>
                          <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: theme.bad, padding: "2px 10px", borderRadius: 4, backgroundColor: "rgba(255, 107, 107, 0.15)", border: `1px solid ${theme.bad}` }}>
                            EQUAL VALUES DO NOT QUALIFY
                          </span>
                        </div>
                        <div style={{ fontFamily: fonts.display, fontSize: 32, color: theme.chalkText, marginTop: 10 }}>
                          Pivot requires a strict increase: <span style={{ color: theme.good }}>nums[i] &lt; nums[i + 1]</span>
                        </div>
                        <ChalkDivider width={1640} seed={91} />

                        {/* Dual Code Box Contrast */}
                        <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                          {/* Wrong implementation */}
                          <div style={{ padding: "20px 24px", borderRadius: 8, backgroundColor: "rgba(255, 107, 107, 0.1)", border: "1px solid rgba(255, 107, 107, 0.3)" }}>
                            <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.bad, marginBottom: 8 }}>
                              ✕ WRONG (NON-STRICT):
                            </div>
                            <div style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.chalkText, backgroundColor: "rgba(0, 0, 0, 0.3)", padding: "12px 16px", borderRadius: 6 }}>
                              while i &gt;= 0 and nums[i] &gt; nums[i + 1]:
                            </div>
                            <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkDim, marginTop: 12 }}>
                              If loop uses strict <code style={{ color: theme.bad }}>&gt;</code> to advance left, it stops at duplicates (<code style={{ color: theme.bad }}>4 == 4</code>) and falsely flags a flat plateau as a pivot!
                            </div>
                          </div>

                          {/* Correct implementation */}
                          <div style={{ padding: "20px 24px", borderRadius: 8, backgroundColor: "rgba(60, 229, 167, 0.1)", border: "1px solid rgba(60, 229, 167, 0.3)" }}>
                            <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.good, marginBottom: 8 }}>
                              ✓ CORRECT (STRICT DIP REQUIREMENT):
                            </div>
                            <div style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.good, backgroundColor: "rgba(0, 0, 0, 0.3)", padding: "12px 16px", borderRadius: 6 }}>
                              while i &gt;= 0 and nums[i] &gt;= nums[i + 1]:
                            </div>
                            <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkDim, marginTop: 12 }}>
                              Loop advances left past non-increasing elements (including equals). It ONLY stops when <code style={{ color: theme.good }}>nums[i] &lt; nums[i + 1]</code> (a strict dip).
                            </div>
                          </div>
                        </div>

                        {/* Concrete Plateau Demo */}
                        {frame >= 2108 && (
                          <div style={{ marginTop: 20, padding: "14px 20px", borderRadius: 8, backgroundColor: "rgba(255, 217, 61, 0.12)", border: "1px dashed rgba(255, 217, 61, 0.4)", display: "flex", alignItems: "center", gap: 16 }}>
                            <span style={{ fontFamily: fonts.mono, fontSize: 20, color: theme.pivot }}>⚠</span>
                            <span style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.chalkText }}>
                              Plateau Example: Array <code style={{ color: theme.pivot }}>[... 4, 4 ...]</code>. Here <code style={{ color: theme.bad }}>4 &lt; 4 is FALSE</code>. A flat plateau cannot advance a permutation! Pointer <code style={{ color: theme.pivot }}>i</code> must continue moving left.
                            </span>
                          </div>
                        )}
                      </div>
                    </>
                  )}

                  {/* Mistake 2: Strict Successor Inequality (F2192..F2440) */}
                  {frame >= 2192 && frame < 2440 && (
                    <>
                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.cyan }}>
                            PITFALL 2 · NON-STRICT SUCCESSOR INEQUALITY
                          </span>
                          <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: theme.bad, padding: "2px 10px", borderRadius: 4, backgroundColor: "rgba(255, 107, 107, 0.15)", border: `1px solid ${theme.bad}` }}>
                            EQUAL IS NOT ENOUGH
                          </span>
                        </div>
                        <div style={{ fontFamily: fonts.display, fontSize: 32, color: theme.chalkText, marginTop: 10 }}>
                          Successor requires strict superiority: <span style={{ color: theme.cyan }}>nums[j] &gt; nums[i]</span>
                        </div>
                        <ChalkDivider width={1640} seed={92} />

                        <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                          <div style={{ padding: "20px 24px", borderRadius: 8, backgroundColor: "rgba(255, 107, 107, 0.1)", border: "1px solid rgba(255, 107, 107, 0.3)" }}>
                            <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.bad, marginBottom: 8 }}>
                              ✕ WRONG (PERMISSIVE EQUALITY):
                            </div>
                            <div style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.chalkText, backgroundColor: "rgba(0, 0, 0, 0.3)", padding: "12px 16px", borderRadius: 6 }}>
                              while nums[j] &lt; nums[i]: j -= 1
                            </div>
                            <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkDim, marginTop: 12 }}>
                              If loop stops when <code style={{ color: theme.bad }}>nums[j] == nums[i]</code>, swapping them produces an identical prefix! Permutation does not advance at all.
                            </div>
                          </div>

                          <div style={{ padding: "20px 24px", borderRadius: 8, backgroundColor: "rgba(78, 205, 196, 0.1)", border: "1px solid rgba(78, 205, 196, 0.3)" }}>
                            <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.cyan, marginBottom: 8 }}>
                              ✓ CORRECT (STRICTLY GREATER):
                            </div>
                            <div style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.cyan, backgroundColor: "rgba(0, 0, 0, 0.3)", padding: "12px 16px", borderRadius: 6 }}>
                              while nums[j] &lt;= nums[i]: j -= 1
                            </div>
                            <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkDim, marginTop: 12 }}>
                              Loop continues past equal and smaller elements. It ONLY halts at an element strictly greater than <code style={{ color: theme.cyan }}>nums[i]</code>.
                            </div>
                          </div>
                        </div>

                        {frame >= 2363 && (
                          <div style={{ marginTop: 20, padding: "14px 20px", borderRadius: 8, backgroundColor: "rgba(255, 107, 107, 0.15)", border: "1px dashed rgba(255, 107, 107, 0.5)", display: "flex", alignItems: "center", gap: 16 }}>
                            <span style={{ fontFamily: fonts.mono, fontSize: 20, color: theme.bad }}>✕</span>
                            <span style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.chalkText }}>
                              Mathematical Proof: Swapping <code style={{ color: theme.pivot }}>nums[i]</code> with an identical value <code style={{ color: theme.cyan }}>nums[j] == nums[i]</code> yields zero change at index i, breaking the next permutation invariant.
                            </span>
                          </div>
                        )}
                      </div>
                    </>
                  )}

                  {/* Mistake 3: Arbitrary Greater Value vs Minimal Increase (F2440..F2759) */}
                  {frame >= 2440 && frame < 2759 && (
                    <>
                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.pivot }}>
                            PITFALL 3 · ARBITRARY GREATER VALUE SELECTION
                          </span>
                          <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: theme.good, padding: "2px 10px", borderRadius: 4, backgroundColor: "rgba(60, 229, 167, 0.15)", border: `1px solid ${theme.good}` }}>
                            SMALLEST POSSIBLE INCREASE
                          </span>
                        </div>
                        <div style={{ fontFamily: fonts.display, fontSize: 32, color: theme.chalkText, marginTop: 10 }}>
                          We need the smallest strictly greater value to make the minimal jump
                        </div>
                        <ChalkDivider width={1640} seed={93} />

                        <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 24 }}>
                          {/* Flaw explanation */}
                          <div style={{ padding: "18px 22px", borderRadius: 8, backgroundColor: "rgba(0, 0, 0, 0.3)", border: "1px solid rgba(255, 255, 255, 0.15)" }}>
                            <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.pivot }}>
                              EXAMPLE: PIVOT IS 1, SUFFIX IS [5, 4, 3, 2]
                            </div>
                            <div style={{ fontFamily: fonts.sans, fontSize: 15, color: theme.chalkText, lineHeight: 1.6, marginTop: 10 }}>
                              Every element in the suffix <code style={{ color: theme.pivot }}>{`{5, 4, 3, 2}`}</code> is strictly greater than 1! If we carelessly picked <code style={{ color: theme.bad }}>5</code>, the array prefix would jump from 1 to 5, skipping millions of smaller permutations starting with 2, 3, and 4!
                            </div>
                            <div style={{ marginTop: 14, fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: theme.good }}>
                              True immediate successor: 2 (the smallest value strictly &gt; 1).
                            </div>
                          </div>

                          {/* Why right scan works */}
                          <div style={{ padding: "18px 22px", borderRadius: 8, backgroundColor: "rgba(60, 229, 167, 0.12)", border: "1px solid rgba(60, 229, 167, 0.3)" }}>
                            <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.good }}>
                              WHY SCANNING FROM THE RIGHT GUARANTEES SUCCESS:
                            </div>
                            <div style={{ fontFamily: fonts.sans, fontSize: 15, color: theme.chalkDim, lineHeight: 1.6, marginTop: 10 }}>
                              The suffix is strictly non-increasing (descending). When scanned from right to left, elements are inspected in <strong style={{ color: theme.good }}>ascending order</strong>!
                            </div>
                            <div style={{ marginTop: 14, padding: "8px 12px", borderRadius: 6, backgroundColor: "rgba(60, 229, 167, 0.2)", fontFamily: fonts.mono, fontSize: 13, color: theme.good, fontWeight: 800 }}>
                              ★ The VERY FIRST element &gt; nums[i] encountered is guaranteed to be the smallest!
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Mistake 4: Reversal Starting Boundary (F2759..F2922) */}
                  {frame >= 2759 && (
                    <>
                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.bad }}>
                            PITFALL 4 · REVERSAL RANGE OFF-BY-ONE
                          </span>
                          <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: theme.bad, padding: "2px 10px", borderRadius: 4, backgroundColor: "rgba(255, 107, 107, 0.15)", border: `1px solid ${theme.bad}` }}>
                            DO NOT REVERSE FROM i
                          </span>
                        </div>
                        <div style={{ fontFamily: fonts.display, fontSize: 32, color: theme.chalkText, marginTop: 10 }}>
                          After swap, reverse strictly from <span style={{ color: theme.good }}>i + 1</span> to <span style={{ color: theme.good }}>n - 1</span>
                        </div>
                        <ChalkDivider width={1640} seed={94} />

                        <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                          <div style={{ padding: "20px 24px", borderRadius: 8, backgroundColor: "rgba(255, 107, 107, 0.12)", border: "1px solid rgba(255, 107, 107, 0.4)" }}>
                            <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.bad, marginBottom: 8 }}>
                              ✕ CATASTROPHIC BUG:
                            </div>
                            <div style={{ fontFamily: fonts.mono, fontSize: 20, color: theme.bad, backgroundColor: "rgba(0, 0, 0, 0.3)", padding: "12px 16px", borderRadius: 6, textDecoration: "line-through" }}>
                              reverse(nums, i, n - 1)
                            </div>
                            <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkDim, marginTop: 12 }}>
                              Reversing from <code style={{ color: theme.bad }}>i</code> takes the freshly swapped pivot that was just placed into index <code style={{ color: theme.bad }}>i</code> and sends it flying to the end of the array! Prefix is ruined.
                            </div>
                          </div>

                          <div style={{ padding: "20px 24px", borderRadius: 8, backgroundColor: "rgba(60, 229, 167, 0.12)", border: "1px solid rgba(60, 229, 167, 0.4)" }}>
                            <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.good, marginBottom: 8 }}>
                              ✓ CORRECT BOUNDARY:
                            </div>
                            <div style={{ fontFamily: fonts.mono, fontSize: 20, color: theme.good, backgroundColor: "rgba(0, 0, 0, 0.3)", padding: "12px 16px", borderRadius: 6 }}>
                              reverse(nums, i + 1, n - 1)
                            </div>
                            <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkDim, marginTop: 12 }}>
                              Leaves index <code style={{ color: theme.good }}>i</code> untouched with its brand-new successor value. Only reverses the descending suffix <code style={{ color: theme.good }}>[i+1 .. n-1]</code> into ascending order.
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Bottom defensive reminder */}
                  <div style={{ padding: "10px 16px", borderRadius: 6, backgroundColor: "rgba(0, 0, 0, 0.25)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkDim }}>
                      INSPECTION CRITERIA:
                    </span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: theme.good }}>
                      STRICT LESS-THAN PIVOT · STRICT GREATER-THAN SUCCESSOR · RIGHT-SCAN · i+1 REVERSE BOUND
                    </span>
                  </div>
                </div>
              </RoughCard>
            </div>
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* BLOCK 4: 4 EDGE CASES & SYNTHESIS (F2922..F4156)                  */}
        {/* ----------------------------------------------------------------- */}
        {blockIndex === 4 && (
          <div
            style={{
              position: "absolute",
              top: 145,
              left: 100,
              right: 100,
              height: 615,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {/* Edge Case Demonstration Card */}
            <div style={{ flex: 1 }}>
              <RoughCard
                width={1720}
                height={615}
                seed={101}
                stroke={frame >= 4049 ? theme.good : theme.chalkText}
                bg="rgba(10, 48, 42, 0.76)"
              >
                <div style={{ padding: "26px 36px", display: "flex", flexDirection: "column", height: "100%", boxSizing: "border-box", justifyContent: "space-between" }}>
                  {/* Top Edge Case Description */}
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.pivot }}>
                        {frame < 3401
                          ? "EDGE CASE 1 · FULLY DECREASING ARRAY (NO PIVOT)"
                          : frame < 3745
                          ? "EDGE CASE 2 · ALREADY INCREASING ARRAY"
                          : frame < 3857
                          ? "EDGE CASE 3 · SINGLE-ELEMENT ARRAY"
                          : "EDGE CASE 4 · DUPLICATE VALUES & SYNTHESIS"}
                      </span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: theme.good, padding: "2px 10px", borderRadius: 4, backgroundColor: "rgba(60, 229, 167, 0.15)", border: `1px solid ${theme.good}` }}>
                        {frame < 3401
                          ? "WRAPAROUND TO SMALLEST"
                          : frame < 3745
                          ? "IMMEDIATE RIGHT PIVOT"
                          : frame < 3857
                          ? "ZERO MUTATIONS NEEDED"
                          : "ZERO SPECIAL BRANCHES"}
                      </span>
                    </div>

                    <div style={{ fontFamily: fonts.display, fontSize: 30, color: theme.chalkText, marginTop: 8 }}>
                      {frame < 3401
                        ? "Input: [3, 2, 1] → Lexicographically Maximal → Wraps around to [1, 2, 3]"
                        : frame < 3745
                        ? "Input: [1, 2, 3] → Pivot at index 1 → Swaps 2 and 3 to yield [1, 3, 2]"
                        : frame < 3857
                        ? "Input: [ 7 ] → Length 1 → No pivot, no swap, unchanged"
                        : "Input with duplicates: [2, 3, 3, 1] → Strict comparisons handle duplicates naturally"}
                    </div>

                    <ChalkDivider width={1640} seed={111} />

                    {/* ArrayTrackV2 Visualization */}
                    <div style={{ margin: "24px 0 16px 0", display: "flex", justifyContent: "center" }}>
                      <ArrayTrackV2
                        elements={edgeElements}
                        slotWidth={frame >= 3745 && frame < 3857 ? 160 : 130}
                        slotHeight={90}
                        gap={18}
                        maxWidth={1000}
                        showIndices={true}
                        indexPlacement="top"
                        pointers={edgePointers}
                        pointerPlacement="bottom"
                      />
                    </div>

                    {/* Execution Details per Edge Case */}
                    <div style={{ marginTop: 18, display: "flex", justifyContent: "center" }}>
                      {frame < 3401 && (
                        <div style={{ width: 1100, padding: "14px 20px", borderRadius: 8, backgroundColor: "rgba(0, 0, 0, 0.3)", border: "1px solid rgba(255, 255, 255, 0.15)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div>
                            <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkDim }}>STEP 1 PIVOT SEARCH:</div>
                            <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.bad }}>i terminates at -1 (No dip found)</div>
                          </div>
                          <div>
                            <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkDim }}>STEP 2 SUCCESSOR SWAP:</div>
                            <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.chalkDim }}>if i &gt;= 0: SKIPPED completely</div>
                          </div>
                          <div>
                            <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkDim }}>STEP 3 REVERSAL:</div>
                            <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.good }}>reverse(nums, 0, 2) → [1, 2, 3] ✓</div>
                          </div>
                        </div>
                      )}

                      {frame >= 3401 && frame < 3745 && (
                        <div style={{ width: 1100, padding: "14px 20px", borderRadius: 8, backgroundColor: "rgba(0, 0, 0, 0.3)", border: "1px solid rgba(255, 255, 255, 0.15)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div>
                            <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkDim }}>PIVOT AT INDEX n-2:</div>
                            <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.good }}>nums[1]=2 &lt; nums[2]=3 (stops on 1st step)</div>
                          </div>
                          <div>
                            <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkDim }}>SUCCESSOR AT INDEX n-1:</div>
                            <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.cyan }}>nums[2]=3 &gt; 2 (stops immediately)</div>
                          </div>
                          <div>
                            <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkDim }}>SUFFIX REVERSAL:</div>
                            <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.pivot }}>Suffix length is 0 (instant noop)</div>
                          </div>
                        </div>
                      )}

                      {frame >= 3745 && frame < 3857 && (
                        <div style={{ width: 1100, padding: "14px 20px", borderRadius: 8, backgroundColor: "rgba(0, 0, 0, 0.3)", border: "1px solid rgba(255, 255, 255, 0.15)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div>
                            <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkDim }}>ARRAY LENGTH:</div>
                            <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.good }}>n = 1</div>
                          </div>
                          <div>
                            <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkDim }}>INITIAL PIVOT INDEX:</div>
                            <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.pivot }}>i = n - 2 = -1</div>
                          </div>
                          <div>
                            <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkDim }}>ZERO MODIFICATIONS:</div>
                            <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.good }}>reverse(nums, 0, 0) finishes cleanly</div>
                          </div>
                        </div>
                      )}

                      {frame >= 3857 && (
                        <div style={{ width: 1100, padding: "14px 20px", borderRadius: 8, backgroundColor: "rgba(0, 0, 0, 0.3)", border: "1px solid rgba(255, 255, 255, 0.15)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div>
                            <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkDim }}>STRICT PIVOT INEQUALITY:</div>
                            <div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: theme.good }}>nums[i] &lt; nums[i+1] ignores duplicates</div>
                          </div>
                          <div>
                            <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkDim }}>STRICT SUCCESSOR INEQUALITY:</div>
                            <div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: theme.cyan }}>nums[j] &gt; nums[i] ignores equal values</div>
                          </div>
                          <div>
                            <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkDim }}>SPECIAL BRANCHES:</div>
                            <div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, color: theme.pivot }}>ZERO SPECIAL CASES NEEDED</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom Grand Certification Seal (F4049..F4156) */}
                  <div
                    style={{
                      padding: "14px 24px",
                      borderRadius: 8,
                      backgroundColor: frame >= 4049 ? "rgba(60, 229, 167, 0.16)" : "rgba(0, 0, 0, 0.25)",
                      border: `1px solid ${frame >= 4049 ? theme.good : "rgba(255, 255, 255, 0.15)"}`,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span style={{ fontFamily: fonts.mono, fontSize: 20, color: theme.good }}>★</span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.good }}>
                        LEETCODE 31 CERTIFIED OPTIMAL SOLUTION:
                      </span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.chalkText }}>
                        O(N) Time · O(1) Auxiliary Space · 100% In-Place · Zero Special Cases
                      </span>
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: theme.pivot }}>
                      ALL ALGORITHM INVARIANTS VERIFIED
                    </div>
                  </div>
                </div>
              </RoughCard>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* 4. BOTTOM CAPTIONS (Strictly anchored at Y: 980px)                */}
        {/* ================================================================= */}
        <div
          style={{
            position: "absolute",
            top: 980,
            left: 100,
            right: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pointerEvents: "none",
          }}
        >
          <Captions
            words={captionWords}
            fontSize={28}
          />
        </div>
      </div>
    </div>
  );
};
