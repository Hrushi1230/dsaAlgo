/**
 * Scene08OptimalCode.tsx — Scene 08 · Method 2: Optimal Code Implementation
 * Next Permutation (LeetCode 31) · Pattern 01 — Arrays & Hashing
 *
 * Exact Audio-Synchronized Frame-Wise Implementation:
 * - 3,014 frames @ 30fps (100.480s) strictly from sync/08-optimal-code.json
 * - 28 Semantic Anchors strictly mapped from sync/08-optimal-code.anchors.json
 * - Oxford chalkboard visual style (matching s03_f1250.png):
 *   * Translucent chalkboard washes (never pitch-black)
 *   * RoughBox chalk outlines with dynamic seeds
 *   * RoughLine chalk dividers
 *   * Caveat cursive titles (fonts.display)
 *   * Tracked-out monospace eyebrows (fonts.mono)
 * - ChalkCodeEditorV2 production code editor with progressive typing
 * - Zero premature spoilers: future lines remain 100% hidden until spoken
 * - Dynamic Docking: Center hero mode (width: 1060px) alternates with split docked mode (code 860px + proof 820px)
 * - ArrayTrackV2 for array representations and pointer proofs
 * - Word-level karaoke captions strictly anchored at Y: 980
 * - Edge case fidelity: demonstrates [5, 4, 3, 2, 1] skipping swap and reversing in-place
 * - 3 Core Algorithmic Invariants synthesis at the end
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
import { ChalkCodeEditorV2, ChalkCodeLine } from "../../../../kit/components/ChalkCodeEditorV2";
import { ArrayTrackV2, ArrayElementItem } from "../../../../kit/components/array/ArrayTrackV2";
import syncData from "../sync/08-optimal-code.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings (from sync/08-optimal-code.json)
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

export const Scene08OptimalCode: React.FC = () => {
  const frame = useCurrentFrame();

  // =========================================================================
  // CAMERA ENGINE (Subtle pan/zoom matching pedagogical beats)
  // =========================================================================
  const { camScale, camY }: { camScale: number; camY: number } = useMemo(() => {
    if (frame >= 310 && frame < 682) {
      const s = interpolate(frame, [310, 350], [1.0, 1.015], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: s, camY: -2 };
    }
    if (frame >= 1958 && frame < 2566) {
      const s = interpolate(frame, [1958, 2000], [1.0, 1.02], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: s, camY: -3 };
    }
    return { camScale: 1.0, camY: 0 };
  }, [frame]);

  // =========================================================================
  // DOCKED VS CENTER HERO MODE
  // =========================================================================
  // Docked when semantic proof is displayed on the right: F263..F2566
  // Center hero when typing lines 1..2 (F0..F263) and 3 Invariants (F2566..F3014)
  const isDocked = frame >= 263 && frame < 2566;
  const isPhilosophyMode = frame >= 2566;

  const editorWidth = isDocked ? 860 : 1060;
  const editorLeft = isDocked ? 95 : 430;

  // =========================================================================
  // CODE EDITOR LINES (15 Lines with Progressive Typewriter Typing)
  // =========================================================================
  const codeLines: ChalkCodeLine[] = useMemo(() => {
    return [
      {
        num: 1,
        text: "n = len(nums)",
        startFrame: 86,
        endFrame: 150,
        tokens: [
          { text: "n", color: theme.good },
          { text: " = ", color: theme.chalkDim },
          { text: "len", color: theme.pivot },
          { text: "(nums)", color: theme.chalkText },
        ],
      },
      {
        num: 2,
        text: "i = n - 2",
        startFrame: 174,
        endFrame: 240,
        tokens: [
          { text: "i", color: theme.good },
          { text: " = ", color: theme.chalkDim },
          { text: "n", color: theme.chalkText },
          { text: " - ", color: theme.chalkDim },
          { text: "2", color: theme.pivot },
        ],
      },
      {
        num: 3,
        text: "while i >= 0 and nums[i] >= nums[i + 1]:",
        startFrame: 310,
        endFrame: 430,
        tokens: [
          { text: "while ", color: theme.pivot },
          { text: "i", color: theme.good },
          { text: " >= ", color: theme.chalkDim },
          { text: "0", color: theme.pivot },
          { text: " and ", color: theme.pivot },
          { text: "nums[i]", color: theme.chalkText },
          { text: " >= ", color: theme.chalkDim },
          { text: "nums[i + 1]:", color: theme.chalkText },
        ],
      },
      {
        num: 4,
        text: "    i -= 1",
        startFrame: 430,
        endFrame: 480,
        tokens: [
          { text: "    i", color: theme.good },
          { text: " -= ", color: theme.chalkDim },
          { text: "1", color: theme.pivot },
        ],
      },
      {
        num: 5,
        text: "if i >= 0:",
        startFrame: 682,
        endFrame: 760,
        tokens: [
          { text: "if ", color: theme.good },
          { text: "i", color: theme.good },
          { text: " >= ", color: theme.chalkDim },
          { text: "0:", color: theme.pivot },
        ],
      },
      {
        num: 6,
        text: "    j = n - 1",
        startFrame: 837,
        endFrame: 885,
        tokens: [
          { text: "    j", color: theme.good },
          { text: " = ", color: theme.chalkDim },
          { text: "n", color: theme.chalkText },
          { text: " - ", color: theme.chalkDim },
          { text: "1", color: theme.pivot },
        ],
      },
      {
        num: 7,
        text: "    while nums[j] <= nums[i]:",
        startFrame: 959,
        endFrame: 1040,
        tokens: [
          { text: "    while ", color: theme.pivot },
          { text: "nums[j]", color: theme.chalkText },
          { text: " <= ", color: theme.chalkDim },
          { text: "nums[i]:", color: theme.pivot },
        ],
      },
      {
        num: 8,
        text: "        j -= 1",
        startFrame: 1040,
        endFrame: 1080,
        tokens: [
          { text: "        j", color: theme.good },
          { text: " -= ", color: theme.chalkDim },
          { text: "1", color: theme.pivot },
        ],
      },
      {
        num: 9,
        text: "    nums[i], nums[j] = nums[j], nums[i]",
        startFrame: 1294,
        endFrame: 1370,
        tokens: [
          { text: "    nums[i], nums[j]", color: theme.pivot },
          { text: " = ", color: theme.chalkDim },
          { text: "nums[j], nums[i]", color: theme.good },
        ],
      },
      {
        num: 10,
        text: "left = i + 1",
        startFrame: 1406,
        endFrame: 1470,
        tokens: [
          { text: "left", color: theme.good },
          { text: " = ", color: theme.chalkDim },
          { text: "i", color: theme.pivot },
          { text: " + ", color: theme.chalkDim },
          { text: "1", color: theme.good },
        ],
      },
      {
        num: 11,
        text: "right = n - 1",
        startFrame: 1506,
        endFrame: 1550,
        tokens: [
          { text: "right", color: theme.good },
          { text: " = ", color: theme.chalkDim },
          { text: "n", color: theme.chalkText },
          { text: " - ", color: theme.chalkDim },
          { text: "1", color: theme.pivot },
        ],
      },
      {
        num: 12,
        text: "while left < right:",
        startFrame: 1573,
        endFrame: 1630,
        tokens: [
          { text: "while ", color: theme.pivot },
          { text: "left", color: theme.good },
          { text: " < ", color: theme.chalkDim },
          { text: "right:", color: theme.good },
        ],
      },
      {
        num: 13,
        text: "    nums[left], nums[right] = nums[right], nums[left]",
        startFrame: 1651,
        endFrame: 1720,
        tokens: [
          { text: "    nums[left], nums[right]", color: theme.pivot },
          { text: " = ", color: theme.chalkDim },
          { text: "nums[right], nums[left]", color: theme.good },
        ],
      },
      {
        num: 14,
        text: "    left += 1",
        startFrame: 1757,
        endFrame: 1790,
        tokens: [
          { text: "    left", color: theme.good },
          { text: " += ", color: theme.chalkDim },
          { text: "1", color: theme.pivot },
        ],
      },
      {
        num: 15,
        text: "    right -= 1",
        startFrame: 1803,
        endFrame: 1840,
        tokens: [
          { text: "    right", color: theme.good },
          { text: " -= ", color: theme.chalkDim },
          { text: "1", color: theme.pivot },
        ],
      },
    ];
  }, []);

  // Determine active line number(s) based on current frame
  const activeLineNums = useMemo(() => {
    if (frame < 86) return [];
    if (frame < 174) return [1];
    if (frame < 263) return [2];
    if (frame < 430) return [3];
    if (frame < 509) return [4];
    if (frame < 682) return [3, 4];
    if (frame < 837) return [5];
    if (frame < 959) return [6];
    if (frame < 1040) return [7];
    if (frame < 1098) return [8];
    if (frame < 1294) return [7, 8];
    if (frame < 1406) return [9];
    if (frame < 1506) return [10];
    if (frame < 1573) return [11];
    if (frame < 1651) return [12];
    if (frame < 1757) return [13];
    if (frame < 1803) return [14];
    if (frame < 1873) return [15];
    if (frame >= 2070 && frame < 2155) return [5]; // skipping block highlight
    return [];
  }, [frame]);

  // Dynamic Subtitle / Step Indicator
  const subtitleText = useMemo(() => {
    if (frame < 263) return "INITIALIZE DIMENSIONS & SCAN POINTER";
    if (frame < 682) return "STEP 1: SCAN RIGHT-TO-LEFT FOR PIVOT";
    if (frame < 1406) return "STEP 2: FIND SUCCESSOR & SWAP";
    if (frame < 1958) return "STEP 3: TWO-POINTER IN-PLACE REVERSAL";
    if (frame < 2566) return "EDGE CASE: NO PIVOT · WHOLE-ARRAY WRAPAROUND";
    return "ALGORITHMIC ESSENCE: 3 LOGICAL INVARIANTS";
  }, [frame]);

  // =========================================================================
  // PROOF DATA: Array Track V2 States for Right Proof Card
  // =========================================================================
  // Master trace array for Step 1..Step 3: [2, 1, 5, 4, 4, 3, 0]
  // Edge case array for No Pivot: [5, 4, 3, 2, 1]
  const isEdgeCase = frame >= 1958 && frame < 2566;

  const proofElements: ArrayElementItem[] = useMemo(() => {
    if (isEdgeCase) {
      if (frame >= 2249) {
        // Reversed array [1, 2, 3, 4, 5]
        return [
          { value: 1, semanticState: "correct" },
          { value: 2, semanticState: "correct" },
          { value: 3, semanticState: "correct" },
          { value: 4, semanticState: "correct" },
          { value: 5, semanticState: "correct" },
        ];
      }
      // Original descending edge case [5, 4, 3, 2, 1]
      return [
        { value: 5, semanticState: "wrong" },
        { value: 4, semanticState: "wrong" },
        { value: 3, semanticState: "wrong" },
        { value: 2, semanticState: "wrong" },
        { value: 1, semanticState: "wrong" },
      ];
    }

    // Step 1..3 standard trace array
    if (frame >= 1873) {
      // Post-reversal: [2, 3, 0, 1, 4, 4, 5]
      return [
        { value: 2, semanticState: "normal" },
        { value: 3, semanticState: "pivot" },
        { value: 0, semanticState: "correct" },
        { value: 1, semanticState: "correct" },
        { value: 4, semanticState: "correct" },
        { value: 4, semanticState: "correct" },
        { value: 5, semanticState: "correct" },
      ];
    }
    if (frame >= 1294) {
      // Post-swap: [2, 3, 5, 4, 4, 1, 0]
      return [
        { value: 2, semanticState: "normal" },
        { value: 3, semanticState: "pivot" },
        { value: 5, semanticState: "current" },
        { value: 4, semanticState: "current" },
        { value: 4, semanticState: "current" },
        { value: 1, semanticState: "current" },
        { value: 0, semanticState: "current" },
      ];
    }
    // Pre-swap: [2, 1, 5, 4, 4, 3, 0]
    return [
      { value: 2, semanticState: "normal" },
      { value: 1, semanticState: frame >= 682 ? "pivot" : "normal" },
      { value: 5, semanticState: frame >= 682 ? "current" : "normal" },
      { value: 4, semanticState: frame >= 682 ? "current" : "normal" },
      { value: 4, semanticState: frame >= 682 ? "current" : "normal" },
      { value: 3, semanticState: frame >= 1098 ? "correct" : "normal" },
      { value: 0, semanticState: "normal" },
    ];
  }, [frame, isEdgeCase]);

  // Right Proof Pointers
  const proofPointers = useMemo(() => {
    if (isEdgeCase) {
      if (frame >= 2249) {
        return [
          { id: "ptr-edge-left", index: 0, label: "left", color: theme.good },
          { id: "ptr-edge-right", index: 4, label: "right", color: theme.pivot },
        ];
      }
      if (frame >= 2155) {
        return [{ id: "ptr-edge-left-0", index: 0, label: "left=0", color: theme.good }];
      }
      // i = -1 (outside bounds, display at slot 0 with negative badge)
      return [{ id: "ptr-edge-i-neg1", index: 0, label: "i = -1", color: theme.bad }];
    }

    // Step 3 pointers
    if (frame >= 1406 && frame < 1958) {
      return [
        { id: "ptr-s3-left", index: 2, label: "left", color: theme.good },
        { id: "ptr-s3-right", index: 6, label: "right", color: theme.pivot },
      ];
    }
    // Step 2 pointers
    if (frame >= 837 && frame < 1406) {
      return [
        { id: "ptr-s2-pivot", index: 1, label: "i (pivot)", color: theme.pivot },
        { id: "ptr-s2-j", index: frame >= 1098 ? 5 : 6, label: "j", color: theme.good },
      ];
    }
    // Step 1 pointers
    if (frame >= 263 && frame < 837) {
      const iPos = frame >= 682 ? 1 : frame >= 509 ? 2 : 4;
      return [
        { id: "ptr-s1-i", index: iPos, label: "i", color: theme.pivot },
        { id: "ptr-s1-i-plus-1", index: iPos + 1, label: "i+1", color: theme.cyan },
      ];
    }
    return [];
  }, [frame, isEdgeCase]);

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
      <Audio src={staticFile("audio/012/08-optimal-code.mp3")} />

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
          transformOrigin: "center 400px",
        }}
      >
        {/* ================================================================= */}
        {/* 1. TOP HEADER & METADATA BAR (Y: 30..80)                          */}
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
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.4)",
              letterSpacing: "0.04em",
            }}
          >
            Next Permutation
          </div>

          {/* Right Phase Badge */}
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 13,
              fontWeight: 800,
              color: theme.pivot,
              padding: "6px 16px",
              borderRadius: 6,
              border: `1.5px solid ${theme.pivot}`,
              backgroundColor: "rgba(255, 209, 102, 0.12)",
              letterSpacing: "0.08em",
            }}
          >
            APPROACH 2 · OPTIMAL CODE
          </div>
        </div>

        {/* Dynamic Subtitle Eyebrow (Y: 92) */}
        <div
          style={{
            position: "absolute",
            top: 92,
            left: 80,
            fontFamily: fonts.mono,
            fontSize: 14,
            fontWeight: 800,
            color: isPhilosophyMode ? theme.good : theme.pivot,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {subtitleText}
        </div>

        {/* Subtle Horizontal Divider */}
        <div
          style={{
            position: "absolute",
            top: 118,
            left: 80,
            right: 80,
            height: 1,
            backgroundColor: "rgba(255, 255, 255, 0.12)",
          }}
        />

        {/* ================================================================= */}
        {/* 2. CENTER STAGE (Y: 140 .. 760)                                   */}
        {/* ================================================================= */}

        {/* ----------------------------------------------------------------- */}
        {/* VIEW A: CODE & DOCKED PROOFS (F0 .. F2566)                        */}
        {/* ----------------------------------------------------------------- */}
        {!isPhilosophyMode && (
          <div
            style={{
              position: "absolute",
              top: 145,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
              gap: 30,
            }}
          >
            {/* LEFT: ChalkCodeEditorV2 (width: editorWidth, height: 615px) */}
            <div
              style={{
                width: editorWidth,
                height: 615,
                transition: "width 0.3s ease",
              }}
            >
              <ChalkCodeEditorV2
                lines={codeLines}
                activeLineNums={activeLineNums}
                title="solution.py"
                language="PYTHON 3.11"
                width={editorWidth}
                height={615}
                fontSize={16}
                lineHeight={34}
                style={{
                  backgroundColor: "rgba(10, 48, 42, 0.72)",
                  backdropFilter: "blur(6px)",
                  boxShadow: "0 14px 40px rgba(0, 0, 0, 0.45)",
                }}
              />
            </div>

            {/* RIGHT: Docked Semantic Proof Card (F263..F2566) */}
            {isDocked && (
              <div style={{ width: 820, height: 615 }}>
                <RoughCard
                  width={820}
                  height={615}
                  stroke={theme.chalkText}
                  seed={28}
                  bg="rgba(10, 48, 42, 0.68)"
                >
                  <div style={{ padding: "24px 28px", display: "flex", flexDirection: "column", height: "100%", boxSizing: "border-box" }}>
                    {/* Proof Header */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                      <span
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 13,
                          fontWeight: 800,
                          color: isEdgeCase ? theme.bad : theme.good,
                          padding: "4px 12px",
                          borderRadius: 4,
                          backgroundColor: isEdgeCase ? "rgba(255, 107, 107, 0.15)" : "rgba(60, 229, 167, 0.15)",
                          border: `1px solid ${isEdgeCase ? theme.bad : theme.good}`,
                        }}
                      >
                        {isEdgeCase ? "EDGE CASE EXECUTION" : "SEMANTIC CODE PROOF"}
                      </span>
                      <span
                        style={{
                          fontFamily: fonts.display,
                          fontSize: 26,
                          color: theme.chalkText,
                        }}
                      >
                        {isEdgeCase
                          ? "Strictly Descending: No Pivot"
                          : frame < 682
                          ? "Step 1: Finding Pivot i"
                          : frame < 1406
                          ? "Step 2: Finding Successor j"
                          : "Step 3: Two-Pointer Reversal"}
                      </span>
                    </div>

                    <ChalkDivider width={760} seed={12} stroke="rgba(255, 255, 255, 0.2)" />

                    {/* Proof Array Track V2 */}
                    <div style={{ margin: "20px 0 16px 0", display: "flex", justifyContent: "center" }}>
                      <ArrayTrackV2
                        elements={proofElements}
                        slotWidth={isEdgeCase ? 110 : 88}
                        slotHeight={78}
                        gap={12}
                        maxWidth={760}
                        showIndices={true}
                        indexPlacement="top"
                        pointers={proofPointers}
                        pointerPlacement="bottom"
                      />
                    </div>

                    {/* Dynamic Explanation Content based on Frame Phase */}
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 14 }}>
                      {/* Step 1: Scan Condition Explanation (F263..F509) */}
                      {frame >= 263 && frame < 509 && (
                        <div
                          style={{
                            padding: "16px 20px",
                            borderRadius: 10,
                            backgroundColor: "rgba(255, 209, 102, 0.1)",
                            border: `1.5px solid ${theme.pivot}`,
                            fontFamily: fonts.sans,
                            fontSize: 16,
                            lineHeight: 1.5,
                          }}
                        >
                          <div style={{ fontFamily: fonts.mono, fontWeight: 800, color: theme.pivot, marginBottom: 6 }}>
                            WHILE: nums[i] &gt;= nums[i + 1]
                          </div>
                          <div>
                            As long as elements are non-increasing (descending slope), no larger permutation can be formed here.
                            Move <code style={{ color: theme.pivot }}>i</code> left until finding the first dip: <code style={{ color: theme.good }}>nums[i] &lt; nums[i + 1]</code>!
                          </div>
                        </div>
                      )}

                      {/* Step 1: Dual Loop Exit Proof (F509..F682) */}
                      {frame >= 509 && frame < 682 && (
                        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                          <div
                            style={{
                              padding: "12px 18px",
                              borderRadius: 8,
                              backgroundColor: "rgba(60, 229, 167, 0.12)",
                              border: `1.5px solid ${theme.good}`,
                              fontSize: 15,
                            }}
                          >
                            <span style={{ fontFamily: fonts.mono, fontWeight: 800, color: theme.good }}>CASE A · PIVOT FOUND (i ≥ 0):</span>
                            <div style={{ marginTop: 4 }}>
                              Dip detected at index 1 (<code style={{ color: theme.pivot }}>1 &lt; 5</code>). Proceed to find successor and swap!
                            </div>
                          </div>
                          <div
                            style={{
                              padding: "12px 18px",
                              borderRadius: 8,
                              backgroundColor: "rgba(255, 209, 102, 0.12)",
                              border: `1.5px solid ${theme.pivot}`,
                              fontSize: 15,
                            }}
                          >
                            <span style={{ fontFamily: fonts.mono, fontWeight: 800, color: theme.pivot }}>CASE B · NO PIVOT (i = -1):</span>
                            <div style={{ marginTop: 4 }}>
                              Array is purely descending. The loop exited because <code style={{ color: theme.bad }}>i &lt; 0</code>.
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 2: Successor Search & Guarantee (F682..F1406) */}
                      {frame >= 682 && frame < 1406 && (
                        <div
                          style={{
                            padding: "16px 20px",
                            borderRadius: 10,
                            backgroundColor: "rgba(60, 229, 167, 0.1)",
                            border: `1.5px solid ${theme.good}`,
                            fontSize: 16,
                            lineHeight: 1.5,
                          }}
                        >
                          <div style={{ fontFamily: fonts.mono, fontWeight: 800, color: theme.good, marginBottom: 6 }}>
                            GUARANTEED MINIMAL SUCCESSOR
                          </div>
                          <div>
                            Scanning from the right, the very first element strictly greater than <code style={{ color: theme.pivot }}>nums[1] = 1</code> is <code style={{ color: theme.good }}>nums[5] = 3</code>.
                            Swapping them ensures the prefix becomes minimally larger (<code style={{ color: theme.pivot }}>2,1... ➔ 2,3...</code>).
                          </div>
                        </div>
                      )}

                      {/* Step 3: Two-Pointer Reversal Proof (F1406..F1958) */}
                      {frame >= 1406 && frame < 1958 && (
                        <div
                          style={{
                            padding: "16px 20px",
                            borderRadius: 10,
                            backgroundColor: "rgba(103, 232, 249, 0.1)",
                            border: `1.5px solid ${theme.cyan}`,
                            fontSize: 16,
                            lineHeight: 1.5,
                          }}
                        >
                          <div style={{ fontFamily: fonts.mono, fontWeight: 800, color: theme.cyan, marginBottom: 6 }}>
                            O(K) TWO-POINTER IN-PLACE REVERSAL
                          </div>
                          <div>
                            Because the suffix was guaranteed to remain in descending order, reversing <code style={{ color: theme.cyan }}>[left..right]</code> in-place transforms it into ascending order in <code style={{ color: theme.good }}>O(K)</code> time without sorting!
                          </div>
                        </div>
                      )}

                      {/* Edge Case: No Pivot / Whole Array (F1958..F2566) */}
                      {isEdgeCase && (
                        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                          <div
                            style={{
                              padding: "14px 18px",
                              borderRadius: 8,
                              backgroundColor: "rgba(255, 107, 107, 0.12)",
                              border: `1.5px solid ${theme.bad}`,
                              fontSize: 15,
                            }}
                          >
                            <span style={{ fontFamily: fonts.mono, fontWeight: 800, color: theme.bad }}>i = -1 (NO PIVOT FOUND):</span>
                            <div style={{ marginTop: 4 }}>
                              Entire array was strictly descending. The <code style={{ color: theme.pivot }}>if i &gt;= 0:</code> block is skipped entirely!
                            </div>
                          </div>
                          <div
                            style={{
                              padding: "14px 18px",
                              borderRadius: 8,
                              backgroundColor: "rgba(60, 229, 167, 0.15)",
                              border: `1.5px solid ${theme.good}`,
                              fontSize: 15,
                            }}
                          >
                            <span style={{ fontFamily: fonts.mono, fontWeight: 800, color: theme.good }}>left = (-1) + 1 = 0:</span>
                            <div style={{ marginTop: 4 }}>
                              The exact same reverse loop runs with <code style={{ color: theme.good }}>left = 0</code> and <code style={{ color: theme.pivot }}>right = n - 1</code>, reversing the entire array to <code style={{ color: theme.good }}>[1, 2, 3, 4, 5]</code>!
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </RoughCard>
              </div>
            )}
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* VIEW B: 3 LOGICAL INVARIANTS SYNTHESIS (F2566 .. F3014)           */}
        {/* ----------------------------------------------------------------- */}
        {isPhilosophyMode && (
          <div
            style={{
              position: "absolute",
              top: 150,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <RoughCard
              width={1200}
              height={580}
              stroke={theme.good}
              seed={77}
              bg="rgba(14, 46, 38, 0.76)"
            >
              <div style={{ padding: "30px 40px", display: "flex", flexDirection: "column", height: "100%", boxSizing: "border-box" }}>
                {/* Card Title */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 13,
                        fontWeight: 800,
                        color: theme.good,
                        padding: "4px 14px",
                        borderRadius: 4,
                        backgroundColor: "rgba(60, 229, 167, 0.2)",
                        border: `1.5px solid ${theme.good}`,
                      }}
                    >
                      LOGICAL REASONING
                    </span>
                    <span
                      style={{
                        fontFamily: fonts.display,
                        fontSize: 34,
                        color: theme.chalkText,
                      }}
                    >
                      Why This Works: 3 Logical Invariants
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 13,
                      fontWeight: 800,
                      color: theme.pivot,
                      padding: "6px 16px",
                      borderRadius: 20,
                      backgroundColor: "rgba(255, 209, 102, 0.15)",
                      border: `1px solid ${theme.pivot}`,
                    }}
                  >
                    NEVER MEMORIZE · DERIVE
                  </span>
                </div>

                <ChalkDivider width={1120} seed={18} stroke={theme.good} />

                {/* 3 Core Invariant Cards */}
                <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 24 }}>
                  {/* Invariant 1 (F2678..F3014) */}
                  <div
                    style={{
                      padding: "18px 24px",
                      borderRadius: 12,
                      backgroundColor: "rgba(255, 209, 102, 0.12)",
                      border: `2px solid ${theme.pivot}`,
                      display: "flex",
                      alignItems: "center",
                      gap: 20,
                      boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        backgroundColor: theme.pivot,
                        color: "#0a2419",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: fonts.mono,
                        fontSize: 22,
                        fontWeight: 900,
                        flexShrink: 0,
                      }}
                    >
                      1
                    </div>
                    <div>
                      <div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 800, color: theme.pivot, marginBottom: 4 }}>
                        FIND THE RIGHTMOST PLACE THAT CAN INCREASE
                      </div>
                      <div style={{ fontSize: 16, color: "rgba(255, 255, 255, 0.9)" }}>
                        Scan from the right to find the first index <code style={{ color: theme.pivot }}>i</code> where <code style={{ color: theme.good }}>nums[i] &lt; nums[i + 1]</code> (the pivot). Everything to its right is maximal.
                      </div>
                    </div>
                  </div>

                  {/* Invariant 2 (F2884..F3014) */}
                  <div
                    style={{
                      padding: "18px 24px",
                      borderRadius: 12,
                      backgroundColor: frame >= 2884 ? "rgba(103, 232, 249, 0.12)" : "rgba(255, 255, 255, 0.04)",
                      border: `2px solid ${frame >= 2884 ? theme.cyan : "rgba(255, 255, 255, 0.15)"}`,
                      display: "flex",
                      alignItems: "center",
                      gap: 20,
                      opacity: frame >= 2884 ? 1 : 0.4,
                      transition: "opacity 0.3s ease",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        backgroundColor: frame >= 2884 ? theme.cyan : "rgba(255, 255, 255, 0.2)",
                        color: "#0a2419",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: fonts.mono,
                        fontSize: 22,
                        fontWeight: 900,
                        flexShrink: 0,
                      }}
                    >
                      2
                    </div>
                    <div>
                      <div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 800, color: theme.cyan, marginBottom: 4 }}>
                        MAKE THE SMALLEST POSSIBLE INCREASE
                      </div>
                      <div style={{ fontSize: 16, color: "rgba(255, 255, 255, 0.9)" }}>
                        Swap the pivot with the smallest value strictly larger than it in the descending suffix (<code style={{ color: theme.good }}>nums[j] &gt; nums[i]</code>).
                      </div>
                    </div>
                  </div>

                  {/* Invariant 3 (F2959..F3014) */}
                  <div
                    style={{
                      padding: "18px 24px",
                      borderRadius: 12,
                      backgroundColor: frame >= 2959 ? "rgba(60, 229, 167, 0.14)" : "rgba(255, 255, 255, 0.04)",
                      border: `2px solid ${frame >= 2959 ? theme.good : "rgba(255, 255, 255, 0.15)"}`,
                      display: "flex",
                      alignItems: "center",
                      gap: 20,
                      opacity: frame >= 2959 ? 1 : 0.4,
                      transition: "opacity 0.3s ease",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        backgroundColor: frame >= 2959 ? theme.good : "rgba(255, 255, 255, 0.2)",
                        color: "#0a2419",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: fonts.mono,
                        fontSize: 22,
                        fontWeight: 900,
                        flexShrink: 0,
                      }}
                    >
                      3
                    </div>
                    <div>
                      <div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 800, color: theme.good, marginBottom: 4 }}>
                        MINIMIZE THE SUFFIX
                      </div>
                      <div style={{ fontSize: 16, color: "rgba(255, 255, 255, 0.9)" }}>
                        Reverse the suffix in-place in <code style={{ color: theme.good }}>O(K)</code> time to turn it from descending (maximal) into ascending (minimal).
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RoughCard>
          </div>
        )}
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* 3. BOTTOM CAPTIONS (Strictly anchored at Y: 980)                    */}
      {/* ------------------------------------------------------------------- */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 980,
          display: "flex",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <Captions words={captionWords} />
      </div>
    </div>
  );
};
