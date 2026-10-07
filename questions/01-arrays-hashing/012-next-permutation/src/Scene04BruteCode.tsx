/**
 * Scene04BruteCode.tsx — Scene 04 · Method 1: Brute Force Code
 * Next Permutation (LeetCode 31) · Pattern 01 — Arrays & Hashing
 *
 * Exact Audio-Synchronized Frame-Wise Implementation:
 * - 2,114 frames @ 30fps (70.460s) strictly from sync/04-brute-code.json
 * - 16 Anchors mapped from sync/04-brute-code.anchors.json
 * - ChalkCodeEditorV2 canonical production code editor with character-by-character typing
 * - Zero premature spoilers: Line 9 holds at `next_idx = (idx + 1` on S04_NEXT_INDEX; modulo appends on S04_MODULO
 * - Zero complexity leaks: no O(N!) or factorial curves (strictly reserved for Scene 05)
 * - Dynamic docking: Center hero mode (width: 1040px) alternates with split docked mode (code 880px + proof 820px)
 * - Pure chalk rough borders (RoughBox, RoughLine) + rich dark chalkboard surfaces
 * - ArrayTrackV2 for array representations and in-place slot overwrite proof
 * - Word-level karaoke captions strictly anchored at Y: 980
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
import syncData from "../sync/04-brute-code.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings (from sync/04-brute-code.json)
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

/**
 * Authentic RoughCard wrapper: combines dark translucent chalkboard background,
 * subtle drop shadow, hand-drawn RoughBox SVG chalk outline on border, and crisp children content.
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
  strokeWidth = 2,
  seed = 1,
  bg = "rgba(10, 36, 25, 0.95)",
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
        boxShadow: "0 12px 36px rgba(0, 0, 0, 0.65)",
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

export const Scene04BruteCode: React.FC = () => {
  const frame = useCurrentFrame();

  // =========================================================================
  // CAMERA ENGINE (Subtle pan/zoom matching pedagogical beats)
  // =========================================================================
  const { camScale, camY }: { camScale: number; camY: number } = useMemo(() => {
    // Subtle punch-in during active code typing beats
    if (frame >= 154 && frame < 406) {
      const s = interpolate(frame, [154, 185], [1.0, 1.015], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: s, camY: -2 };
    }
    if (frame >= 861 && frame < 1257) {
      const s = interpolate(frame, [861, 900], [1.0, 1.02], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: s, camY: -3 };
    }
    if (frame >= 1891 && frame < 2083) {
      const s = interpolate(frame, [1891, 1940], [1.0, 1.025], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: s, camY: -4 };
    }
    return { camScale: 1.0, camY: 0 };
  }, [frame]);

  // =========================================================================
  // DOCKED VS CENTER HERO MODE
  // =========================================================================
  // Docked when semantic proof is displayed on the right:
  // F154..F406 (Import & Duplicate proof)
  // F406..F492 (Unique set proof)
  // F492..F638 (Sort proof)
  // F638..F800 (Current form proof)
  // F800..F861 (Find position proof)
  // F861..F1013 (Next index candidate proof)
  // F1013..F1257 (Modulo wrap proof)
  // F1257..F1435 (In-place copy proof)
  const isDocked = frame >= 154 && frame < 1435;

  const editorWidth = isDocked ? 900 : 1060;
  const editorLeft = isDocked ? 80 : 430;

  // =========================================================================
  // CODE EDITOR LINES (Live progressive typing)
  // =========================================================================
  // Handling Line 9:
  // F861..F1013: "next_idx = (idx + 1" (types F929..F985)
  // F1013..F1257: ") % len(ordered)" appends (types F1107..F1200)
  const codeLines: ChalkCodeLine[] = useMemo(() => {
    const isModuloPhase = frame >= 1107;

    // Line 9 progressive handling
    const line9Text = !isModuloPhase
      ? "    next_idx = (idx + 1"
      : "    next_idx = (idx + 1) % len(ordered)";
    const line9Start = !isModuloPhase ? 929 : 1003;
    const line9End = !isModuloPhase ? 985 : 1200;

    const line9Tokens = !isModuloPhase
      ? [
          { text: "    next_idx", color: theme.good },
          { text: " = ", color: theme.chalkDim },
          { text: "(", color: theme.chalkDim },
          { text: "idx", color: theme.pivot },
          { text: " + ", color: theme.chalkDim },
          { text: "1", color: theme.good },
        ]
      : [
          { text: "    next_idx", color: theme.good },
          { text: " = ", color: theme.chalkDim },
          { text: "(", color: theme.chalkDim },
          { text: "idx", color: theme.pivot },
          { text: " + ", color: theme.chalkDim },
          { text: "1", color: theme.good },
          { text: ")", color: theme.chalkDim },
          { text: " % ", color: theme.warn },
          { text: "len", color: theme.cyan },
          { text: "(", color: theme.chalkText },
          { text: "ordered", color: theme.chalkText },
          { text: ")", color: theme.chalkText },
        ];

    return [
      {
        num: 1,
        text: "from itertools import permutations",
        indent: 0,
        startFrame: 0,
        endFrame: 15,
        tokens: [
          { text: "from ", color: "#93C5FD" },
          { text: "itertools ", color: theme.chalkText },
          { text: "import ", color: "#93C5FD" },
          { text: "permutations", color: theme.cyan },
        ],
      },
      {
        num: 2,
        text: "",
        indent: 0,
        startFrame: 0,
        endFrame: 0,
        tokens: [],
      },
      {
        num: 3,
        text: "def nextPermutationBrute(nums):",
        indent: 0,
        startFrame: 0,
        endFrame: 20,
        tokens: [
          { text: "def ", color: "#93C5FD" },
          { text: "nextPermutationBrute", color: theme.good },
          { text: "(", color: theme.chalkText },
          { text: "nums", color: theme.pivot },
          { text: "):", color: theme.chalkText },
        ],
      },
      {
        num: 4,
        text: "    all_perms = permutations(nums)",
        indent: 1,
        startFrame: 185,
        endFrame: 270,
        tokens: [
          { text: "    all_perms", color: theme.chalkText },
          { text: " = ", color: theme.chalkDim },
          { text: "permutations", color: theme.cyan },
          { text: "(", color: theme.chalkText },
          { text: "nums", color: theme.pivot },
          { text: ")", color: theme.chalkText },
        ],
      },
      {
        num: 5,
        text: "    unique_perms = set(all_perms)",
        indent: 1,
        startFrame: 415,
        endFrame: 465,
        tokens: [
          { text: "    unique_perms", color: theme.chalkText },
          { text: " = ", color: theme.chalkDim },
          { text: "set", color: theme.good },
          { text: "(", color: theme.chalkText },
          { text: "all_perms", color: theme.chalkText },
          { text: ")", color: theme.chalkText },
        ],
      },
      {
        num: 6,
        text: "    ordered = sorted(unique_perms)",
        indent: 1,
        startFrame: 523,
        endFrame: 610,
        tokens: [
          { text: "    ordered", color: theme.chalkText },
          { text: " = ", color: theme.chalkDim },
          { text: "sorted", color: theme.good },
          { text: "(", color: theme.chalkText },
          { text: "unique_perms", color: theme.chalkText },
          { text: ")", color: theme.chalkText },
        ],
      },
      {
        num: 7,
        text: "    current = tuple(nums)",
        indent: 1,
        startFrame: 651,
        endFrame: 775,
        tokens: [
          { text: "    current", color: theme.pivot },
          { text: " = ", color: theme.chalkDim },
          { text: "tuple", color: theme.cyan },
          { text: "(", color: theme.chalkText },
          { text: "nums", color: theme.pivot },
          { text: ")", color: theme.chalkText },
        ],
      },
      {
        num: 8,
        text: "    idx = ordered.index(current)",
        indent: 1,
        startFrame: 805,
        endFrame: 842,
        tokens: [
          { text: "    idx", color: theme.pivot },
          { text: " = ", color: theme.chalkDim },
          { text: "ordered", color: theme.chalkText },
          { text: ".index", color: theme.good },
          { text: "(", color: theme.chalkText },
          { text: "current", color: theme.pivot },
          { text: ")", color: theme.chalkText },
        ],
      },
      {
        num: 9,
        text: line9Text,
        indent: 1,
        startFrame: line9Start,
        endFrame: line9End,
        tokens: line9Tokens,
      },
      {
        num: 10,
        text: "    nums[:] = ordered[next_idx]",
        indent: 1,
        startFrame: 1289,
        endFrame: 1390,
        tokens: [
          { text: "    nums[:]", color: theme.pivot },
          { text: " = ", color: theme.chalkDim },
          { text: "ordered", color: theme.chalkText },
          { text: "[", color: theme.chalkDim },
          { text: "next_idx", color: theme.good },
          { text: "]", color: theme.chalkDim },
        ],
      },
    ];
  }, [frame]);

  // Active highlighted lines
  const activeLineNums = useMemo(() => {
    if (frame < 75) return [3];
    if (frame < 154) return [3];
    if (frame < 280) return [4];
    if (frame < 406) return [4];
    if (frame < 492) return [5];
    if (frame < 638) return [6];
    if (frame < 800) return [7];
    if (frame < 861) return [8];
    if (frame < 1013) return [9];
    if (frame < 1257) return [9];
    if (frame < 1435) return [10];
    if (frame >= 1435 && frame < 1528) return [4, 5, 6, 7, 8, 9, 10]; // All active lines in harmony
    // Step-by-step summary highlight
    if (frame >= 1528 && frame < 1597) return [4]; // "Generate all possibilities"
    if (frame >= 1597 && frame < 1634) return [5, 6]; // "sort them"
    if (frame >= 1634 && frame < 1687) return [7, 8]; // "search for the current one"
    if (frame >= 1687 && frame < 1744) return [9, 10]; // "and select the next"
    return [];
  }, [frame]);

  // Dynamic header topic subtitle
  const headerTopic = useMemo(() => {
    if (frame < 154) return "METHOD 1 · LIVE CODE CONSTRUCTION & PEDAGOGY";
    if (frame < 406) return "STEP 1: GENERATE ALL COMBINATIONS";
    if (frame < 492) return "STEP 2: DEDUPLICATION WITH SET()";
    if (frame < 638) return "STEP 3: LEXICOGRAPHICAL SORTING";
    if (frame < 800) return "STEP 4: COMPARABLE TUPLE REPRESENTATION";
    if (frame < 861) return "STEP 5: LINEAR SEARCH & INDEX LOOKUP";
    if (frame < 1013) return "STEP 6: IMMEDIATE SUCCESSOR CANDIDATE (+1)";
    if (frame < 1257) return "STEP 7: CIRCULAR MODULO WRAPAROUND";
    if (frame < 1435) return "STEP 8: IN-PLACE SLICE OVERWRITE";
    if (frame < 1744) return "4-STEP BRUTE FORCE PIPELINE REVIEW";
    if (frame < 1891) return "PEDAGOGICAL ASSESSMENT: TINY INPUTS";
    return "LIMITATION: THE SCALABILITY BOTTLENECK";
  }, [frame]);

  // Proof card type on right stage
  const proofType = useMemo(() => {
    if (frame >= 154 && frame < 280) return "IMPORT_GENERATE";
    if (frame >= 280 && frame < 406) return "DUPLICATE_REASON";
    if (frame >= 406 && frame < 492) return "UNIQUE_SET";
    if (frame >= 492 && frame < 638) return "SORT_ORDERED";
    if (frame >= 638 && frame < 800) return "CURRENT_TUPLE";
    if (frame >= 800 && frame < 861) return "FIND_INDEX";
    if (frame >= 861 && frame < 1013) return "NEXT_INDEX";
    if (frame >= 1013 && frame < 1257) return "MODULO_WRAP";
    if (frame >= 1257 && frame < 1435) return "COPY_BACK";
    return null;
  }, [frame]);

  // Sample array items for ArrayTrackV2
  const inputElements: ArrayElementItem[] = useMemo(() => [
    { value: 1, label: "idx [0]", state: "normal" },
    { value: 3, label: "idx [1]", state: "focus" },
    { value: 2, label: "idx [2]", state: "normal" },
  ], []);

  const mutatedElements: ArrayElementItem[] = useMemo(() => [
    { value: 2, label: "idx [0]", state: "good" },
    { value: 1, label: "idx [1]", state: "good" },
    { value: 3, label: "idx [2]", state: "good" },
  ], []);

  return (
    <div
      style={{
        position: "relative",
        width: 1920,
        height: 1080,
        backgroundColor: theme.boardBg,
        overflow: "hidden",
        fontFamily: fonts.sans,
        color: theme.chalkText,
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      {/* Background Audio */}
      <Audio src={staticFile("audio/012/04-brute-code.mp3")} />

      {/* =================================================================== */}
      {/* CAMERA TRANSFORM CONTAINER                                         */}
      {/* =================================================================== */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${camScale}) translateY(${camY}px)`,
          transformOrigin: "center center",
        }}
      >
        {/* ================================================================= */}
        {/* ZONE A: TOP FIXED HEADER STRIP (Y: 36..80)                        */}
        {/* ================================================================= */}
        <div
          style={{
            position: "absolute",
            top: 36,
            left: 70,
            right: 70,
            height: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(248, 246, 240, 0.15)",
            paddingBottom: 8,
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 13,
                fontWeight: 700,
                color: theme.cyan,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              01 · ARRAYS & HASHING
            </span>
            <span style={{ color: "rgba(248, 246, 240, 0.3)" }}>/</span>
            <span
              style={{
                fontFamily: fonts.display,
                fontSize: 20,
                fontWeight: 800,
                color: theme.chalkText,
                letterSpacing: "0.05em",
              }}
            >
              #012 · Next Permutation (LC 31)
            </span>
          </div>

          {/* Right approach badge with RoughCard */}
          <RoughCard
            width={260}
            height={36}
            stroke={theme.pivot}
            strokeWidth={1.8}
            seed={11}
            bg="rgba(251, 191, 36, 0.12)"
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  backgroundColor: theme.pivot,
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 12,
                  fontWeight: 800,
                  color: theme.pivot,
                  letterSpacing: "0.12em",
                }}
              >
                APPROACH 1 · BRUTE FORCE
              </span>
            </div>
          </RoughCard>
        </div>

        {/* Dynamic Subtitle Topic (Y: 96..130) */}
        <div
          style={{
            position: "absolute",
            top: 96,
            left: 70,
            display: "flex",
            alignItems: "center",
            gap: 12,
            zIndex: 10,
          }}
        >
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 13,
              fontWeight: 800,
              color: theme.good,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            {headerTopic}
          </span>
          <span style={{ color: "rgba(248, 246, 240, 0.25)" }}>—</span>
          <span
            style={{
              fontFamily: fonts.sans,
              fontSize: 14,
              color: theme.chalkDim,
              fontStyle: "italic",
            }}
          >
            {isDocked ? "Code Construction + Semantic Memory Proof" : "Full Code Overview"}
          </span>
        </div>

        {/* ================================================================= */}
        {/* ZONE C: MAIN HERO STAGE (Y: 155..780)                             */}
        {/* ================================================================= */}
        {/* 1. CODE EDITOR CONTAINER */}
        <div
          style={{
            position: "absolute",
            top: 155,
            left: editorLeft,
            width: editorWidth,
            height: 615,
            transition: "all 0.4s ease-out",
            opacity: frame >= 1891 ? 0.35 : 1, // Dim code when bottleneck card takes over
            transform: frame >= 1891 ? "scale(0.96)" : "scale(1)",
            zIndex: 5,
          }}
        >
          <ChalkCodeEditorV2
            title="next_permutation_brute.py"
            language="PYTHON 3.11"
            lines={codeLines}
            activeLineNums={activeLineNums}
            fontSize={16}
            lineHeight={32}
            width="100%"
            height="100%"
          />
        </div>

        {/* 2. DOCKED RIGHT STAGE: SEMANTIC PROOF CARDS (X: 1015, Y: 155, Width: 835) */}
        {isDocked && proofType && (
          <div
            style={{
              position: "absolute",
              top: 155,
              left: 1015,
              width: 835,
              height: 615,
              zIndex: 6,
            }}
          >
            {/* --------------------------------------------------------------- */}
            {/* PROOF 1: IMPORT & GENERATE (F154..F280)                         */}
            {/* --------------------------------------------------------------- */}
            {proofType === "IMPORT_GENERATE" && (
              <RoughCard
                width={835}
                height={615}
                stroke={theme.cyan}
                strokeWidth={2}
                seed={101}
                bg="rgba(8, 30, 22, 0.94)"
              >
                <div style={{ padding: "28px 32px", display: "flex", flexDirection: "column", gap: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: fonts.display, fontSize: 20, fontWeight: 800, color: theme.cyan }}>
                      1. GENERATE ALL PERMUTATIONS
                    </span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkDim }}>
                      itertools.permutations(nums)
                    </span>
                  </div>
                  <ChalkDivider width={770} stroke="rgba(103, 232, 249, 0.35)" seed={11} />

                  <span style={{ fontSize: 15, color: theme.chalkText }}>
                    Input Array:
                  </span>
                  <div style={{ transform: "scale(0.9)", transformOrigin: "top left" }}>
                    <ArrayTrackV2 elements={inputElements} slotWidth={75} slotHeight={75} gap={12} showIndices />
                  </div>

                  <span style={{ fontSize: 15, color: theme.chalkText, marginTop: 10 }}>
                    Generated Permutation Stream (N! arrangements):
                  </span>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    {["(1, 2, 3)", "(1, 3, 2)", "(2, 1, 3)", "(2, 3, 1)", "(3, 1, 2)", "(3, 2, 1)"].map((p, i) => (
                      <div
                        key={i}
                        style={{
                          padding: "10px 16px",
                          backgroundColor: "rgba(10, 42, 30, 0.8)",
                          border: "1px solid rgba(103, 232, 249, 0.3)",
                          borderRadius: 8,
                          fontFamily: fonts.mono,
                          fontSize: 16,
                          fontWeight: 700,
                          color: theme.chalkText,
                        }}
                      >
                        <span style={{ color: theme.cyan, marginRight: 8 }}>#{i + 1}:</span> {p}
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      marginTop: 12,
                      padding: "12px 18px",
                      backgroundColor: "rgba(103, 232, 249, 0.08)",
                      borderLeft: `4px solid ${theme.cyan}`,
                      borderRadius: 6,
                      fontSize: 14,
                      color: theme.chalkDim,
                    }}
                  >
                    💡 Yields all possible element orderings as immutable tuples.
                  </div>
                </div>
              </RoughCard>
            )}

            {/* --------------------------------------------------------------- */}
            {/* PROOF 2: DUPLICATE REASON (F280..F406)                          */}
            {/* --------------------------------------------------------------- */}
            {proofType === "DUPLICATE_REASON" && (
              <RoughCard
                width={835}
                height={615}
                stroke={theme.warn}
                strokeWidth={2.2}
                seed={102}
                bg="rgba(30, 10, 14, 0.94)"
              >
                <div style={{ padding: "28px 32px", display: "flex", flexDirection: "column", gap: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: fonts.display, fontSize: 20, fontWeight: 800, color: theme.warn }}>
                      ⚠️ THE DUPLICATE VALUE HAZARD
                    </span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.warn }}>
                      duplicate values → duplicate tuples
                    </span>
                  </div>
                  <ChalkDivider width={770} stroke="rgba(248, 113, 113, 0.35)" seed={12} />

                  <span style={{ fontSize: 15, color: theme.chalkText }}>
                    Consider input with repeated elements: <code style={{ color: theme.pivot }}>nums = [1, 1, 2]</code>
                  </span>

                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <div
                      style={{
                        padding: "16px 20px",
                        backgroundColor: "rgba(45, 15, 18, 0.8)",
                        border: "1px dashed rgba(248, 113, 113, 0.5)",
                        borderRadius: 10,
                      }}
                    >
                      <div style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.chalkText, marginBottom: 8 }}>
                        Index permutation 0: <span style={{ color: theme.cyan }}>1a</span>, <span style={{ color: theme.pivot }}>1b</span>, 2 ──► evaluates to: <b style={{ color: theme.warn }}>(1, 1, 2)</b>
                      </div>
                      <div style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.chalkText }}>
                        Index permutation 1: <span style={{ color: theme.pivot }}>1b</span>, <span style={{ color: theme.cyan }}>1a</span>, 2 ──► evaluates to: <b style={{ color: theme.warn }}>(1, 1, 2)</b>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "18px 22px",
                      backgroundColor: "rgba(248, 113, 113, 0.12)",
                      borderLeft: `5px solid ${theme.warn}`,
                      borderRadius: 8,
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    <span style={{ fontFamily: fonts.display, fontSize: 17, fontWeight: 800, color: theme.warn }}>
                      WHY IS THIS DANGEROUS?
                    </span>
                    <span style={{ fontSize: 14, color: theme.chalkText, lineHeight: 1.5 }}>
                      If duplicate tuples exist in our list, finding the "current" index becomes ambiguous, and stepping +1 could land on the <i>same identical permutation</i> rather than the next lexicographical one!
                    </span>
                  </div>
                </div>
              </RoughCard>
            )}

            {/* --------------------------------------------------------------- */}
            {/* PROOF 3: UNIQUE SET (F406..F492)                                */}
            {/* --------------------------------------------------------------- */}
            {proofType === "UNIQUE_SET" && (
              <RoughCard
                width={835}
                height={615}
                stroke={theme.good}
                strokeWidth={2}
                seed={103}
                bg="rgba(8, 34, 22, 0.94)"
              >
                <div style={{ padding: "28px 32px", display: "flex", flexDirection: "column", gap: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: fonts.display, fontSize: 20, fontWeight: 800, color: theme.good }}>
                      2. KEEP ONLY UNIQUE ARRANGEMENTS
                    </span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.good }}>
                      unique_perms = set(all_perms)
                    </span>
                  </div>
                  <ChalkDivider width={770} stroke="rgba(52, 211, 153, 0.35)" seed={13} />

                  <span style={{ fontSize: 15, color: theme.chalkText }}>
                    Hash Set Deduplication in Python:
                  </span>

                  <div
                    style={{
                      padding: "24px 28px",
                      backgroundColor: "rgba(10, 40, 26, 0.9)",
                      border: "2px solid rgba(52, 211, 153, 0.4)",
                      borderRadius: 12,
                      display: "flex",
                      flexDirection: "column",
                      gap: 16,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span style={{ fontSize: 28 }}>🧹</span>
                      <div>
                        <div style={{ fontFamily: fonts.display, fontSize: 18, fontWeight: 800, color: theme.good }}>
                          Automatic Hash Collapse
                        </div>
                        <div style={{ fontSize: 14, color: theme.chalkDim }}>
                          Python set() hashes tuple values, collapsing all identical copies into exactly one unique entry.
                        </div>
                      </div>
                    </div>

                    <div style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkText, backgroundColor: "rgba(0,0,0,0.3)", padding: "12px 18px", borderRadius: 8 }}>
                      unique_perms = &#123; (1, 1, 2), (1, 2, 1), (2, 1, 1) &#125;
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "14px 20px",
                      backgroundColor: "rgba(52, 211, 153, 0.1)",
                      borderLeft: `4px solid ${theme.good}`,
                      borderRadius: 6,
                      fontSize: 14,
                      color: theme.chalkText,
                    }}
                  >
                    ✔ <b>DEDUPLICATION GUARANTEE:</b> Every remaining arrangement is strictly distinct!
                  </div>
                </div>
              </RoughCard>
            )}

            {/* --------------------------------------------------------------- */}
            {/* PROOF 4: SORTED ORDERED (F492..F638)                            */}
            {/* --------------------------------------------------------------- */}
            {proofType === "SORT_ORDERED" && (
              <RoughCard
                width={835}
                height={615}
                stroke={theme.pivot}
                strokeWidth={2}
                seed={104}
                bg="rgba(26, 22, 10, 0.94)"
              >
                <div style={{ padding: "26px 30px", display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: fonts.display, fontSize: 20, fontWeight: 800, color: theme.pivot }}>
                      3. SORT LEXICOGRAPHICALLY
                    </span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.pivot }}>
                      ordered = sorted(unique_perms)
                    </span>
                  </div>
                  <ChalkDivider width={770} stroke="rgba(251, 191, 36, 0.35)" seed={14} />

                  <span style={{ fontSize: 14, color: theme.chalkText }}>
                    Strict Dictionary Sequence (Sorted Ascending):
                  </span>

                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { idx: 0, val: "(1, 2, 3)", note: "Smallest (First)" },
                      { idx: 1, val: "(1, 3, 2)", note: "Current arrangement" },
                      { idx: 2, val: "(2, 1, 3)", note: "Immediate successor (+1)" },
                      { idx: 3, val: "(2, 3, 1)", note: "" },
                      { idx: 4, val: "(3, 1, 2)", note: "" },
                      { idx: 5, val: "(3, 2, 1)", note: "Largest (Last)" },
                    ].map((row) => (
                      <div
                        key={row.idx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "8px 18px",
                          backgroundColor: row.idx === 1 ? "rgba(103, 232, 249, 0.18)" : "rgba(15, 35, 25, 0.6)",
                          border: row.idx === 1 ? `1.5px solid ${theme.cyan}` : "1px solid rgba(251, 191, 36, 0.2)",
                          borderRadius: 8,
                          fontFamily: fonts.mono,
                          fontSize: 15,
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                          <span style={{ color: theme.pivot, fontWeight: 800 }}>ordered[{row.idx}]:</span>
                          <span style={{ fontWeight: 700, color: theme.chalkText }}>{row.val}</span>
                        </div>
                        {row.note && (
                          <span style={{ fontSize: 12, color: row.idx === 1 ? theme.cyan : theme.chalkDim, fontStyle: "italic" }}>
                            {row.note}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      padding: "12px 18px",
                      backgroundColor: "rgba(251, 191, 36, 0.1)",
                      borderLeft: `4px solid ${theme.pivot}`,
                      borderRadius: 6,
                      fontSize: 13,
                      color: theme.chalkText,
                    }}
                  >
                    📖 Python sorts tuples element-by-element, identical to alphabetical dictionary lookup.
                  </div>
                </div>
              </RoughCard>
            )}

            {/* --------------------------------------------------------------- */}
            {/* PROOF 5: CURRENT TUPLE (F638..F800)                             */}
            {/* --------------------------------------------------------------- */}
            {proofType === "CURRENT_TUPLE" && (
              <RoughCard
                width={835}
                height={615}
                stroke={theme.cyan}
                strokeWidth={2}
                seed={105}
                bg="rgba(8, 30, 26, 0.94)"
              >
                <div style={{ padding: "28px 32px", display: "flex", flexDirection: "column", gap: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: fonts.display, fontSize: 20, fontWeight: 800, color: theme.cyan }}>
                      4. CONVERT ARRAY TO TUPLE
                    </span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.cyan }}>
                      current = tuple(nums)
                    </span>
                  </div>
                  <ChalkDivider width={770} stroke="rgba(103, 232, 249, 0.35)" seed={15} />

                  <span style={{ fontSize: 15, color: theme.chalkText }}>
                    Type Conversion Representation Handoff:
                  </span>

                  <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "center", marginTop: 10 }}>
                    <div style={{ padding: "16px 28px", backgroundColor: "rgba(10, 36, 26, 0.8)", borderRadius: 10, border: "1px solid rgba(248, 246, 240, 0.2)" }}>
                      <span style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.pivot }}>
                        Input List: nums = [1, 3, 2] (Mutable)
                      </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: 10, color: theme.cyan }}>
                      <span style={{ fontSize: 24 }}>▼</span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700 }}>tuple(nums)</span>
                    </div>

                    <div style={{ padding: "16px 28px", backgroundColor: "rgba(8, 48, 36, 0.9)", borderRadius: 10, border: `2px solid ${theme.cyan}` }}>
                      <span style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 800, color: theme.cyan }}>
                        current = (1, 3, 2) (Immutable Tuple)
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      marginTop: 15,
                      padding: "16px 22px",
                      backgroundColor: "rgba(103, 232, 249, 0.1)",
                      borderLeft: `4px solid ${theme.cyan}`,
                      borderRadius: 6,
                      fontSize: 14,
                      color: theme.chalkText,
                      lineHeight: 1.5,
                    }}
                  >
                    💡 <b>Why convert?</b> Elements inside <code>ordered</code> are tuples from <code>permutations()</code>. Converting <code>nums</code> to a tuple ensures exact equality during lookup.
                  </div>
                </div>
              </RoughCard>
            )}

            {/* --------------------------------------------------------------- */}
            {/* PROOF 6: FIND INDEX (F800..F861)                                */}
            {/* --------------------------------------------------------------- */}
            {proofType === "FIND_INDEX" && (
              <RoughCard
                width={835}
                height={615}
                stroke={theme.pivot}
                strokeWidth={2}
                seed={106}
                bg="rgba(24, 20, 10, 0.94)"
              >
                <div style={{ padding: "28px 32px", display: "flex", flexDirection: "column", gap: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: fonts.display, fontSize: 20, fontWeight: 800, color: theme.pivot }}>
                      5. LOCATE CURRENT POSITION
                    </span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.pivot }}>
                      idx = ordered.index(current)
                    </span>
                  </div>
                  <ChalkDivider width={770} stroke="rgba(251, 191, 36, 0.35)" seed={16} />

                  <span style={{ fontSize: 15, color: theme.chalkText }}>
                    Linear Scan Lookup:
                  </span>

                  <div style={{ padding: "24px", backgroundColor: "rgba(12, 40, 30, 0.85)", borderRadius: 12, border: `2px solid ${theme.pivot}` }}>
                    <div style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.chalkText, marginBottom: 14 }}>
                      Target: <span style={{ color: theme.cyan }}>(1, 3, 2)</span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <span style={{ fontSize: 28 }}>🎯</span>
                      <div>
                        <div style={{ fontFamily: fonts.display, fontSize: 20, fontWeight: 800, color: theme.pivot }}>
                          MATCH FOUND AT INDEX: idx = 1
                        </div>
                        <div style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.chalkDim, marginTop: 4 }}>
                          ordered[1] == (1, 3, 2) ──► True
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "16px 20px",
                      backgroundColor: "rgba(251, 191, 36, 0.1)",
                      borderLeft: `4px solid ${theme.pivot}`,
                      borderRadius: 6,
                      fontSize: 14,
                      color: theme.chalkText,
                    }}
                  >
                    🔍 <code>.index()</code> scans through <code>ordered</code> from left to right and returns the first matching index.
                  </div>
                </div>
              </RoughCard>
            )}

            {/* --------------------------------------------------------------- */}
            {/* PROOF 7: NEXT INDEX (F861..F1013)                               */}
            {/* --------------------------------------------------------------- */}
            {proofType === "NEXT_INDEX" && (
              <RoughCard
                width={835}
                height={615}
                stroke={theme.good}
                strokeWidth={2}
                seed={107}
                bg="rgba(8, 32, 22, 0.94)"
              >
                <div style={{ padding: "28px 32px", display: "flex", flexDirection: "column", gap: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: fonts.display, fontSize: 20, fontWeight: 800, color: theme.good }}>
                      6. IMMEDIATE NEXT CANDIDATE: (+1)
                    </span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.good }}>
                      next_idx = (idx + 1 ...
                    </span>
                  </div>
                  <ChalkDivider width={770} stroke="rgba(52, 211, 153, 0.35)" seed={17} />

                  <span style={{ fontSize: 15, color: theme.chalkText }}>
                    Sequential Successor Step:
                  </span>

                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div style={{ padding: "18px 24px", backgroundColor: "rgba(103, 232, 249, 0.1)", border: `1.5px solid ${theme.cyan}`, borderRadius: 10 }}>
                      <div style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.cyan }}>CURRENT ARRANGEMENT:</div>
                      <div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, color: theme.chalkText }}>
                        ordered[1] = (1, 3, 2)  (idx = 1)
                      </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <span style={{ fontSize: 24, color: theme.good }}>⬇ +1 STEP</span>
                    </div>

                    <div style={{ padding: "18px 24px", backgroundColor: "rgba(52, 211, 153, 0.15)", border: `2px solid ${theme.good}`, borderRadius: 10 }}>
                      <div style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.good }}>NEXT CANDIDATE:</div>
                      <div style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 800, color: theme.good }}>
                        ordered[2] = (2, 1, 3)  (next_idx = 2)
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "16px 20px",
                      backgroundColor: "rgba(52, 211, 153, 0.08)",
                      borderLeft: `4px solid ${theme.good}`,
                      borderRadius: 6,
                      fontSize: 14,
                      color: theme.chalkText,
                    }}
                  >
                    ✨ Under normal circumstances, the next lexicographical permutation is strictly at <code>idx + 1</code>.
                  </div>
                </div>
              </RoughCard>
            )}

            {/* --------------------------------------------------------------- */}
            {/* PROOF 8: MODULO WRAP (F1013..F1257)                             */}
            {/* --------------------------------------------------------------- */}
            {proofType === "MODULO_WRAP" && (
              <RoughCard
                width={835}
                height={615}
                stroke={theme.warn}
                strokeWidth={2.2}
                seed={108}
                bg="rgba(30, 15, 18, 0.94)"
              >
                <div style={{ padding: "26px 30px", display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: fonts.display, fontSize: 20, fontWeight: 800, color: theme.warn }}>
                      7. HANDLE LAST PERMUTATION: MODULO (%)
                    </span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.warn }}>
                      % len(ordered)
                    </span>
                  </div>
                  <ChalkDivider width={770} stroke="rgba(248, 113, 113, 0.35)" seed={18} />

                  <span style={{ fontSize: 15, color: theme.chalkText }}>
                    Edge Case: What if current is already the LARGEST permutation?
                  </span>

                  <div
                    style={{
                      padding: "20px 24px",
                      backgroundColor: "rgba(45, 18, 22, 0.85)",
                      border: "2px solid rgba(248, 113, 113, 0.4)",
                      borderRadius: 12,
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                    }}
                  >
                    <div style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkText }}>
                      Current is last: <b style={{ color: theme.warn }}>ordered[5] = (3, 2, 1)</b>
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 800, color: theme.warn }}>
                      next_idx = (5 + 1) % 6 = 6 % 6 = 0
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.good }}>
                      ──► Wraps around to ordered[0] = (1, 2, 3) (Smallest)!
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "16px 22px",
                      backgroundColor: "rgba(248, 113, 113, 0.12)",
                      borderLeft: `5px solid ${theme.warn}`,
                      borderRadius: 8,
                      fontSize: 14,
                      color: theme.chalkText,
                      lineHeight: 1.5,
                    }}
                  >
                    🔄 <b>Circular Guarantee:</b> The modulo operator gracefully avoids <code>IndexError</code> and perfectly enforces the problem specification: <i>if no greater permutation exists, rearrange to the lowest possible order</i>.
                  </div>
                </div>
              </RoughCard>
            )}

            {/* --------------------------------------------------------------- */}
            {/* PROOF 9: IN-PLACE COPY BACK (F1257..F1435)                      */}
            {/* --------------------------------------------------------------- */}
            {proofType === "COPY_BACK" && (
              <RoughCard
                width={835}
                height={615}
                stroke={theme.good}
                strokeWidth={2}
                seed={109}
                bg="rgba(8, 35, 24, 0.94)"
              >
                <div style={{ padding: "26px 30px", display: "flex", flexDirection: "column", gap: 18 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: fonts.display, fontSize: 20, fontWeight: 800, color: theme.good }}>
                      8. IN-PLACE OVERWRITE: nums[:] = ...
                    </span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.good }}>
                      nums[:] = ordered[next_idx]
                    </span>
                  </div>
                  <ChalkDivider width={770} stroke="rgba(52, 211, 153, 0.35)" seed={19} />

                  <span style={{ fontSize: 15, color: theme.chalkText }}>
                    Slice Assignment Modifies Original Memory:
                  </span>

                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div>
                      <span style={{ fontSize: 13, color: theme.chalkDim }}>Original List Memory:</span>
                      <div style={{ transform: "scale(0.85)", transformOrigin: "top left", marginTop: 4 }}>
                        <ArrayTrackV2 elements={mutatedElements} slotWidth={75} slotHeight={75} gap={12} showIndices />
                      </div>
                    </div>

                    <div
                      style={{
                        padding: "16px 20px",
                        backgroundColor: "rgba(52, 211, 153, 0.12)",
                        border: `1.5px solid ${theme.good}`,
                        borderRadius: 10,
                      }}
                    >
                      <div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: theme.good, marginBottom: 6 }}>
                        ✔ IN-PLACE MUTATION VERIFIED
                      </div>
                      <div style={{ fontSize: 13, color: theme.chalkText, lineHeight: 1.5 }}>
                        Using <code>nums[:] = ...</code> alters the existing list contents in-place without reassigning the variable reference, satisfying the LeetCode constraint: <i>"Do not allocate extra memory for another array"</i>.
                      </div>
                    </div>
                  </div>
                </div>
              </RoughCard>
            )}
          </div>
        )}

        {/* ================================================================= */}
        {/* CENTER OVERLAY: 4-STEP PIPELINE REVIEW (F1435..F1744)             */}
        {/* ================================================================= */}
        {frame >= 1435 && frame < 1744 && (
          <div
            style={{
              position: "absolute",
              top: 780,
              left: 70,
              right: 70,
              height: 140,
              zIndex: 12,
            }}
          >
            <RoughCard
              width={1780}
              height={140}
              stroke={theme.cyan}
              strokeWidth={2}
              seed={201}
              bg="rgba(8, 28, 20, 0.96)"
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  padding: "0 30px",
                }}
              >
                {[
                  {
                    step: "1. GENERATE",
                    desc: "permutations(nums)",
                    active: frame >= 1528 && frame < 1597,
                    color: theme.cyan,
                  },
                  {
                    step: "2. SORT",
                    desc: "sorted(set(...))",
                    active: frame >= 1597 && frame < 1634,
                    color: theme.good,
                  },
                  {
                    step: "3. SEARCH",
                    desc: "ordered.index(current)",
                    active: frame >= 1634 && frame < 1687,
                    color: theme.pivot,
                  },
                  {
                    step: "4. SELECT NEXT",
                    desc: "(idx + 1) % len",
                    active: frame >= 1687 && frame < 1744,
                    color: "#A78BFA",
                  },
                ].map((node, idx) => (
                  <React.Fragment key={idx}>
                    <div
                      style={{
                        padding: "12px 24px",
                        backgroundColor: node.active ? "rgba(255, 255, 255, 0.15)" : "rgba(0,0,0,0.35)",
                        border: `2px solid ${node.active ? node.color : "rgba(248, 246, 240, 0.2)"}`,
                        borderRadius: 10,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 4,
                        boxShadow: node.active ? `0 0 20px ${node.color}40` : "none",
                        transform: node.active ? "scale(1.08)" : "scale(1)",
                        transition: "all 0.25s ease",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: fonts.display,
                          fontSize: 16,
                          fontWeight: 800,
                          color: node.active ? node.color : theme.chalkText,
                        }}
                      >
                        {node.step}
                      </span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkDim }}>
                        {node.desc}
                      </span>
                    </div>

                    {idx < 3 && (
                      <div style={{ width: 44, height: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <RoughLine
                          width={44}
                          height={20}
                          shape={{ kind: "arrow", x1: 2, y1: 10, x2: 40, y2: 10 }}
                          stroke={theme.chalkDim}
                          strokeWidth={2.5}
                          seed={idx + 50}
                        />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </RoughCard>
          </div>
        )}

        {/* ================================================================= */}
        {/* CENTER OVERLAY: PEDAGOGICAL ASSESSMENT (F1744..F1891)             */}
        {/* ================================================================= */}
        {frame >= 1744 && frame < 1891 && (
          <div
            style={{
              position: "absolute",
              top: 790,
              left: 430,
              width: 1060,
              height: 120,
              zIndex: 12,
            }}
          >
            <RoughCard
              width={1060}
              height={120}
              stroke={theme.good}
              strokeWidth={2}
              seed={202}
              bg="rgba(8, 36, 22, 0.96)"
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 24,
                  padding: "0 30px",
                }}
              >
                <span style={{ fontSize: 36 }}>✓</span>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <span style={{ fontFamily: fonts.display, fontSize: 18, fontWeight: 800, color: theme.good }}>
                    PEDAGOGICAL VALUE: 100% INTUITIVE FOR SMALL N
                  </span>
                  <span style={{ fontSize: 14, color: theme.chalkText }}>
                    For tiny inputs like <code>N = 3</code> (only 6 arrangements), this brute-force logic provides perfect conceptual clarity.
                  </span>
                </div>
              </div>
            </RoughCard>
          </div>
        )}

        {/* ================================================================= */}
        {/* CENTER OVERLAY: SCALABILITY BOTTLENECK CARD (F1891..F2083)         */}
        {/* ================================================================= */}
        {frame >= 1891 && frame < 2083 && (
          <div
            style={{
              position: "absolute",
              top: 240,
              left: 360,
              width: 1200,
              height: 480,
              zIndex: 20,
            }}
          >
            <RoughCard
              width={1200}
              height={480}
              stroke={theme.warn}
              strokeWidth={2.8}
              seed={203}
              bg="rgba(35, 10, 14, 0.97)"
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "48px 56px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 24,
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: 48 }}>⚠️</span>
                <span
                  style={{
                    fontFamily: fonts.display,
                    fontSize: 32,
                    fontWeight: 900,
                    color: theme.warn,
                    letterSpacing: "0.06em",
                  }}
                >
                  THE SCALABILITY BOTTLENECK
                </span>

                <div style={{ maxWidth: 850, fontSize: 20, color: theme.chalkText, lineHeight: 1.6 }}>
                  "As a real-world solution, this approach becomes <b style={{ color: theme.warn }}>expensive very quickly</b>."
                </div>

                <div
                  style={{
                    padding: "16px 32px",
                    backgroundColor: "rgba(248, 113, 113, 0.15)",
                    border: `2px dashed ${theme.warn}`,
                    borderRadius: 12,
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    color: theme.chalkText,
                  }}
                >
                  Generates <b>EVERY single permutation</b> in memory just to locate <b>ONE adjacent arrangement</b>!
                </div>
              </div>
            </RoughCard>
          </div>
        )}

        {/* ================================================================= */}
        {/* CENTER OVERLAY: SCENE 05 HANDOFF CARD (F2083..F2114)              */}
        {/* ================================================================= */}
        {frame >= 2083 && (
          <div
            style={{
              position: "absolute",
              top: 280,
              left: 460,
              width: 1000,
              height: 400,
              zIndex: 25,
            }}
          >
            <RoughCard
              width={1000}
              height={400}
              stroke={theme.pivot}
              strokeWidth={2.8}
              seed={204}
              bg="rgba(26, 20, 8, 0.97)"
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "40px 48px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 20,
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 15,
                    fontWeight: 800,
                    color: theme.pivot,
                    letterSpacing: "0.15em",
                  }}
                >
                  NEXT UP ──► SCENE 05
                </span>

                <span
                  style={{
                    fontFamily: fonts.display,
                    fontSize: 34,
                    fontWeight: 900,
                    color: theme.chalkText,
                  }}
                >
                  "Now let's see why."
                </span>

                <span style={{ fontSize: 18, color: theme.chalkDim, maxWidth: 700 }}>
                  How fast does permutation growth actually explode? Let's analyze the mathematical cost.
                </span>
              </div>
            </RoughCard>
          </div>
        )}

        {/* ================================================================= */}
        {/* ZONE D: TEACHING STATUS BADGE (F0..F154)                           */}
        {/* ================================================================= */}
        {frame < 154 && (
          <div
            style={{
              position: "absolute",
              top: 795,
              left: 430,
              width: 1060,
              height: 80,
              zIndex: 10,
            }}
          >
            <RoughCard
              width={1060}
              height={80}
              stroke={theme.pivot}
              strokeWidth={1.8}
              seed={205}
              bg="rgba(24, 20, 8, 0.92)"
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 16,
                  padding: "0 24px",
                }}
              >
                <span style={{ fontSize: 24 }}>💡</span>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 14,
                    fontWeight: 700,
                    color: theme.pivot,
                    letterSpacing: "0.08em",
                  }}
                >
                  TEACHING IMPLEMENTATION: WE WRITE THIS ONLY TO UNDERSTAND ITS COMPUTATIONAL COST
                </span>
              </div>
            </RoughCard>
          </div>
        )}
      </div>

      {/* =================================================================== */}
      {/* ZONE E: WORD-LEVEL KARAOKE CAPTIONS (Y: 960..1040)                  */}
      {/* =================================================================== */}
      <div
        style={{
          position: "absolute",
          bottom: 30,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          zIndex: 50,
        }}
      >
        <Captions words={captionWords} />
      </div>
    </div>
  );
};
