/**
 * Scene10Recap.tsx — Scene 10 · Full Journey Recap, Transferable Pattern & Master Roadmap
 * Next Permutation (LeetCode 31) · Pattern 01 — Arrays & Hashing
 *
 * Authentic Oxford Chalkboard Aesthetic (matching Scene 03 & s03_f1250.png):
 * - Exactly 2,753 frames @ 30 FPS (91.760s) strictly driven by sync/10-recap.json
 * - 27 Anchors mapped from sync/10-recap.anchors.json
 * - Identical top course header strip with handwritten cursive "Next Permutation"
 * - Translucent chalkboard card surfaces (rgba green/gold/mint/maroon washes, NO pitch-black blocks)
 * - Pure @dsa/kit visual grammar: RoughCard (RoughBox), ChalkDivider (RoughLine), ArrayTrackV2, MasterRoadmapV2
 * - Block 1 (F0..F506): Approach 1 Brute Force Recap (GENERATE -> SORT -> FIND -> NEXT, N! Factorial Rejection)
 * - Block 2 (F506..F1531): Approach 2 Optimal In-Place Recap (Master Array [2,1,5,4,4,3,0], Suffix, Pivot, Swap, Reverse, O(N)/O(1))
 * - Block 3 (F1531..F2279): Transferable Mental Model (Golden Triad: Rightmost -> Smallest -> Minimize)
 * - Block 4 (F2279..F2753): Authoritative Master Roadmap UI (Q12 COMPLETE ✓, 11/227 -> 12/227, Rail moves to Q13 Set Matrix Zeroes UP NEXT ▶)
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
import { MasterRoadmapV2 } from "../../../../kit/components/MasterRoadmapV2";
import { ArrayTrackV2, ArrayElementItem, PointerIndicator } from "../../../../kit/components/array/ArrayTrackV2";
import { ChalkDust } from "../../../../kit/components/ChalkDust";
import syncData from "../sync/10-recap.json";
import anchorsData from "../sync/10-recap.anchors.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings (from sync/10-recap.json)
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
  bg = "rgba(10, 48, 42, 0.72)",
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

export const Scene10Recap: React.FC = () => {
  const frame = useCurrentFrame();

  // =========================================================================
  // CAMERA ENGINE (Subtle pan/zoom matching pedagogical beats)
  // =========================================================================
  const { camScale, camY }: { camScale: number; camY: number } = useMemo(() => {
    // Zoom slightly during Optimal Swap & Suffix Reversal (F956..F1371)
    if (frame >= 956 && frame < 1371) {
      const s = interpolate(frame, [956, 1020], [1.0, 1.018], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: s, camY: -2 };
    }
    // Zoom during Transferable Pattern Triad (F1846..F2279)
    if (frame >= 1846 && frame < 2279) {
      const s = interpolate(frame, [1846, 1910], [1.0, 1.015], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: s, camY: -2 };
    }
    // Zoom during Roadmap Completion Mutation & Q13 handover (F2353..F2753)
    if (frame >= 2353 && frame < 2753) {
      const s = interpolate(frame, [2353, 2410], [1.0, 1.012], {
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
  // Block 1: F0 .. F506   -> Brute Force Recap (Flow chain & N! explosion rejection)
  // Block 2: F506 .. F1531 -> Optimal Solution Recap (Master Array, Suffix, Pivot, Swap, Reverse, Complexity)
  // Block 3: F1531 .. F2279 -> Transferable Mental Model (Golden Triad)
  // Block 4: F2279 .. F2753 -> Master Roadmap UI (Q12 Complete, 12/227, Q13 Up Next)
  const blockIndex = useMemo(() => {
    if (frame < 506) return 1;
    if (frame < 1531) return 2;
    if (frame < 2279) return 3;
    return 4;
  }, [frame]);

  // =========================================================================
  // DYNAMIC HEADER EYEBROW
  // =========================================================================
  const eyebrowText = useMemo(() => {
    if (frame < 506) {
      return "APPROACH 1 RECAP · BRUTE FORCE COMBINATORIAL SEARCH";
    }
    if (frame < 1531) {
      return "APPROACH 2 RECAP · OPTIMAL IN-PLACE TRANSFORMATION";
    }
    if (frame < 2279) {
      return "THE BIGGER LESSON · TRANSFERABLE MENTAL MODEL";
    }
    return "ROADMAP PROGRESSION · ARRAYS & HASHING CURRICULUM";
  }, [frame]);

  // =========================================================================
  // BLOCK 2: OPTIMAL MASTER ARRAY SIMULATION
  // Master Testcase: [2, 1, 5, 4, 4, 3, 0]
  // - Pivot: index 1 (value 1)
  // - Suffix: indices 2..6 [5, 4, 4, 3, 0]
  // - Successor: index 5 (value 3)
  // - Post-Swap: [2, 3, 5, 4, 4, 1, 0] (F980..F1139)
  // - Post-Reverse: [2, 3, 0, 1, 4, 4, 5] (F1150..F1531)
  // =========================================================================
  const { arrayElements, arrayPointers } = useMemo(() => {
    // Initial master array
    let currentValues = [2, 1, 5, 4, 4, 3, 0];

    // Check swap transition (F980..F1139)
    if (frame >= 1020 && frame < 1180) {
      // Swapped: index 1 and index 5 exchanged
      currentValues = [2, 3, 5, 4, 4, 1, 0];
    } else if (frame >= 1180) {
      // Reversed suffix: indices 2..6 reversed from [5, 4, 4, 1, 0] to [0, 1, 4, 4, 5]
      currentValues = [2, 3, 0, 1, 4, 4, 5];
    }

    const elements: ArrayElementItem[] = currentValues.map((val, idx) => {
      let bg: string = "rgba(0, 0, 0, 0.28)";
      let border: string = "rgba(255, 255, 255, 0.22)";
      let textCol: string = theme.chalkText;

      // Suffix highlight (indices 2..6) during S10_SUFFIX (F659..F956)
      if (frame >= 659 && idx >= 2 && frame < 1180) {
        bg = "rgba(78, 205, 196, 0.16)";
        border = theme.cyan;
      }

      // Pivot highlight at index 1 (F782..F1180)
      if (frame >= 782 && idx === 1 && frame < 1180) {
        bg = "rgba(255, 209, 102, 0.25)";
        border = theme.pivot;
        textCol = theme.pivot;
      }

      // Successor highlight at index 5 (F956..F1180)
      if (frame >= 956 && idx === 5 && frame < 1180) {
        bg = "rgba(78, 205, 196, 0.28)";
        border = theme.cyan;
        textCol = theme.cyan;
      }

      // Post-reversal completed aura (F1180..F1531)
      if (frame >= 1180) {
        if (idx === 1) {
          bg = "rgba(255, 209, 102, 0.22)";
          border = theme.pivot;
          textCol = theme.pivot;
        } else if (idx >= 2) {
          bg = "rgba(60, 229, 167, 0.18)";
          border = theme.good;
          textCol = theme.good;
        }
      }

      return {
        value: val,
        fill: bg,
        stroke: border,
        textColor: textCol,
      };
    });

    const pointers: PointerIndicator[] = [];

    // Pivot pointer i at index 1 (F782..F1180)
    if (frame >= 782 && frame < 1180) {
      pointers.push({
        id: "ptr-pivot",
        index: 1,
        label: "i (pivot = 1)",
        color: theme.pivot,
      });
    }

    // Successor pointer j at index 5 (F956..F1180)
    if (frame >= 956 && frame < 1180) {
      pointers.push({
        id: "ptr-succ",
        index: 5,
        label: "j (succ = 3)",
        color: theme.cyan,
      });
    }

    // Reverse pointers (L at 2, R at 6) during S10_REVERSE (F1139..F1240)
    if (frame >= 1139 && frame < 1240) {
      pointers.push({
        id: "ptr-rev-l",
        index: 2,
        label: "L (reverse)",
        color: theme.good,
      });
      pointers.push({
        id: "ptr-rev-r",
        index: 6,
        label: "R (reverse)",
        color: theme.good,
      });
    }

    return { arrayElements: elements, arrayPointers: pointers };
  }, [frame]);

  // =========================================================================
  // BLOCK 4: ROADMAP PROGRESSION MUTATION (F2279..F2753)
  // - Before F2353: completedCount = 11, completedGlobalNums = [1..11], activeGlobalNum = 12
  // - At F2353: Q12 marked COMPLETE ✓, completedCount flips to 12, completedGlobalNums = [1..12]
  // - At F2635: Rail moves down to Row 13 (Set Matrix Zeroes), upNextGlobalNum = 13, spotlightRow = 13
  // =========================================================================
  const isQ12Complete = frame >= 2353;
  const isQ13Spotlight = frame >= 2635;

  const roadmapCompletedCount = isQ12Complete ? 12 : 11;
  const roadmapCompletedNums = useMemo(() => {
    if (isQ12Complete) {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    }
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  }, [isQ12Complete]);

  const roadmapActiveNum = isQ12Complete ? -1 : 12;
  const roadmapUpNextNum = isQ13Spotlight ? 13 : undefined;
  const roadmapSpotlightRow = isQ13Spotlight ? 13 : isQ12Complete ? 12 : 12;
  const roadmapActiveBadgeLabel = isQ12Complete ? "COMPLETE ✓" : "NOW ACTIVE";

  return (
    <div
      style={{
        position: "relative",
        width: 1920,
        height: 1080,
        overflow: "hidden",
        backgroundColor: theme.boardBg,
        color: theme.chalkText,
        fontFamily: fonts.sans,
      }}
    >
      {/* 1. Global Chalkboard Texture & SVG Shading Filters */}
      <ChalkboardBackground />
      <ChalkFilters />

      {/* Synchronized Studio Voiceover Track */}
      <Audio src={staticFile("audio/012/10-recap.mp3")} />

      {/* Main Scalable Camera Rig */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${camScale}) translateY(${camY}px)`,
          transformOrigin: "960px 480px",
          transition: "transform 0.1s ease-out",
        }}
      >
        {/* ================================================================= */}
        {/* TOP COURSE HEADER STRIP (Y: 28..78px) — Blocks 1, 2, 3 only      */}
        {/* (Block 4 Roadmap renders its own authoritative header)            */}
        {/* ================================================================= */}
        {blockIndex < 4 && (
          <div
            style={{
              position: "absolute",
              top: 28,
              left: 80,
              right: 80,
              height: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
              paddingBottom: 10,
              zIndex: 10,
            }}
          >
            {/* Left: Pattern Tag */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  color: theme.pivot,
                  backgroundColor: "rgba(255, 209, 102, 0.12)",
                  padding: "4px 12px",
                  borderRadius: 6,
                  border: `1px solid ${theme.pivot}`,
                }}
              >
                01 · ARRAYS & HASHING · LC 31
              </span>
              <span
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 26,
                  fontWeight: 700,
                  color: theme.chalkText,
                  letterSpacing: "0.04em",
                }}
              >
                Next Permutation
              </span>
            </div>

            {/* Right: Dynamic Eyebrow Indicator */}
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 13,
                fontWeight: 700,
                color: theme.cyan,
                letterSpacing: "0.08em",
              }}
            >
              {eyebrowText}
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* 2. CENTER STAGE (Y: 145..760px) — Exactly 615px Height Budget    */}
        {/* Leaves >= 220px pristine chalkboard buffer above Y: 980 captions  */}
        {/* ================================================================= */}

        {/* ----------------------------------------------------------------- */}
        {/* BLOCK 1 (F0 .. F506): APPROACH 1 BRUTE FORCE RECAP                */}
        {/* ----------------------------------------------------------------- */}
        {blockIndex === 1 && (
          <div
            style={{
              position: "absolute",
              top: 155,
              left: 240,
              width: 1440,
              height: 540,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <RoughCard
              width={1440}
              height={540}
              stroke={frame < 377 ? theme.pivot : theme.bad}
              strokeWidth={2.5}
              seed={101}
              bg="rgba(10, 48, 42, 0.76)"
            >
              <div style={{ padding: "26px 36px", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.pivot, letterSpacing: "0.1em" }}>
                      APPROACH 1 RETROSPECTIVE
                    </span>
                    <div style={{ fontFamily: fonts.display, fontSize: 32, color: theme.chalkText, marginTop: 4 }}>
                      Brute Force: Full Permutation Enumeration
                    </div>
                  </div>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 13,
                      fontWeight: 700,
                      color: frame < 377 ? theme.pivot : theme.bad,
                      padding: "4px 14px",
                      borderRadius: 6,
                      backgroundColor: frame < 377 ? "rgba(255, 209, 102, 0.15)" : "rgba(255, 107, 107, 0.18)",
                      border: `1px solid ${frame < 377 ? theme.pivot : theme.bad}`,
                    }}
                  >
                    {frame < 377 ? "CONCEPTUAL PIPELINE" : "REJECTED (N! EXPLOSION)"}
                  </span>
                </div>

                <ChalkDivider width={1368} seed={102} />

                {/* 4-Step Chain Flow */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 20,
                    marginTop: 28,
                    marginBottom: 20,
                  }}
                >
                  {/* Step 1: Generate */}
                  <div
                    style={{
                      padding: "20px 18px",
                      borderRadius: 10,
                      backgroundColor: frame >= 157 ? "rgba(0, 0, 0, 0.35)" : "rgba(0, 0, 0, 0.15)",
                      border: `1.5px solid ${frame >= 157 ? theme.pivot : "rgba(255, 255, 255, 0.12)"}`,
                      opacity: frame >= 157 ? 1.0 : 0.4,
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                      position: "relative",
                    }}
                  >
                    <div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: theme.pivot }}>
                      STEP 1
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.chalkText }}>
                      GENERATE ALL N!
                    </div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkDim, lineHeight: 1.4 }}>
                      Recursively construct all N! possible permutations of the input array.
                    </div>
                    <div style={{ marginTop: "auto", fontFamily: fonts.mono, fontSize: 12, color: theme.bad }}>
                      Complexity: O(N · N!)
                    </div>
                  </div>

                  {/* Step 2: Sort */}
                  <div
                    style={{
                      padding: "20px 18px",
                      borderRadius: 10,
                      backgroundColor: frame >= 238 ? "rgba(0, 0, 0, 0.35)" : "rgba(0, 0, 0, 0.15)",
                      border: `1.5px solid ${frame >= 238 ? theme.cyan : "rgba(255, 255, 255, 0.12)"}`,
                      opacity: frame >= 238 ? 1.0 : 0.4,
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                      position: "relative",
                    }}
                  >
                    <div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: theme.cyan }}>
                      STEP 2
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.chalkText }}>
                      SORT SEQUENCES
                    </div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkDim, lineHeight: 1.4 }}>
                      Sort permutations lexicographically in ascending dictionary order.
                    </div>
                    <div style={{ marginTop: "auto", fontFamily: fonts.mono, fontSize: 12, color: theme.bad }}>
                      Sort Cost: O(N! log(N!))
                    </div>
                  </div>

                  {/* Step 3: Find Current */}
                  <div
                    style={{
                      padding: "20px 18px",
                      borderRadius: 10,
                      backgroundColor: frame >= 280 ? "rgba(0, 0, 0, 0.35)" : "rgba(0, 0, 0, 0.15)",
                      border: `1.5px solid ${frame >= 280 ? theme.pivot : "rgba(255, 255, 255, 0.12)"}`,
                      opacity: frame >= 280 ? 1.0 : 0.4,
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                      position: "relative",
                    }}
                  >
                    <div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: theme.pivot }}>
                      STEP 3
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.chalkText }}>
                      FIND CURRENT
                    </div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkDim, lineHeight: 1.4 }}>
                      Scan the sorted candidate list to find index k matching current array.
                    </div>
                    <div style={{ marginTop: "auto", fontFamily: fonts.mono, fontSize: 12, color: theme.chalkDim }}>
                      Lookup: O(N · N!)
                    </div>
                  </div>

                  {/* Step 4: Take Next */}
                  <div
                    style={{
                      padding: "20px 18px",
                      borderRadius: 10,
                      backgroundColor: frame >= 316 ? "rgba(0, 0, 0, 0.35)" : "rgba(0, 0, 0, 0.15)",
                      border: `1.5px solid ${frame >= 316 ? theme.good : "rgba(255, 255, 255, 0.12)"}`,
                      opacity: frame >= 316 ? 1.0 : 0.4,
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                      position: "relative",
                    }}
                  >
                    <div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: theme.good }}>
                      STEP 4
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.chalkText }}>
                      TAKE NEXT
                    </div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkDim, lineHeight: 1.4 }}>
                      Return list[k+1] as the answer, or wrap around to list[0] if at the end.
                    </div>
                    <div style={{ marginTop: "auto", fontFamily: fonts.mono, fontSize: 12, color: theme.good }}>
                      Extract: O(N)
                    </div>
                  </div>
                </div>

                {/* Factorial Explosion Warning Banner (F377..F506) */}
                {frame >= 377 && (
                  <div
                    style={{
                      marginTop: "auto",
                      padding: "16px 24px",
                      borderRadius: 10,
                      backgroundColor: "rgba(255, 107, 107, 0.15)",
                      border: `1.5px dashed ${theme.bad}`,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      opacity: interpolate(frame, [377, 410], [0, 1], {
                        extrapolateLeft: "clamp",
                        extrapolateRight: "clamp",
                      }),
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <span style={{ fontFamily: fonts.mono, fontSize: 24, color: theme.bad }}>✕</span>
                      <div>
                        <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.bad }}>
                          CRITICAL BOTTLENECK: FACTORIAL SCALING EXPLOSION
                        </div>
                        <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkText, marginTop: 2 }}>
                          For N = 15, N! exceeds 1.3 Trillion candidates. Allocating and sorting requires gigabytes of RAM and hours of CPU time!
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        padding: "6px 16px",
                        borderRadius: 6,
                        backgroundColor: "rgba(255, 107, 107, 0.25)",
                        border: `1px solid ${theme.bad}`,
                        fontFamily: fonts.mono,
                        fontSize: 13,
                        fontWeight: 800,
                        color: theme.bad,
                        letterSpacing: "0.05em",
                      }}
                    >
                      UNVIABLE IN INTERVIEWS
                    </div>
                  </div>
                )}
              </div>
            </RoughCard>
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* BLOCK 2 (F506 .. F1531): APPROACH 2 OPTIMAL IN-PLACE RECAP       */}
        {/* ----------------------------------------------------------------- */}
        {blockIndex === 2 && (
          <div
            style={{
              position: "absolute",
              top: 150,
              left: 220,
              width: 1480,
              height: 550,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <RoughCard
              width={1480}
              height={550}
              stroke={theme.good}
              strokeWidth={2.5}
              seed={201}
              bg="rgba(10, 48, 42, 0.76)"
            >
              <div style={{ padding: "24px 36px", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.good, letterSpacing: "0.1em" }}>
                      APPROACH 2 · THE OPTIMAL IN-PLACE ALGORITHM
                    </span>
                    <div style={{ fontFamily: fonts.display, fontSize: 30, color: theme.chalkText, marginTop: 2 }}>
                      {frame < 659
                        ? "Inspect Structure of Master Array: [2, 1, 5, 4, 4, 3, 0]"
                        : frame < 782
                        ? "Step 1: Identify Longest Non-Increasing Suffix [5, 4, 4, 3, 0]"
                        : frame < 956
                        ? "Step 2: Locate Pivot i = 1 (First Drop from the Right)"
                        : frame < 1139
                        ? "Step 3: Swap Pivot nums[1]=1 with Smallest Greater nums[5]=3"
                        : "Step 4: Reverse Suffix to Ascending Order [0, 1, 4, 4, 5]"}
                    </div>
                  </div>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 13,
                      fontWeight: 700,
                      color: theme.good,
                      padding: "4px 14px",
                      borderRadius: 6,
                      backgroundColor: "rgba(60, 229, 167, 0.15)",
                      border: `1px solid ${theme.good}`,
                    }}
                  >
                    IN-PLACE · O(N) TIME · O(1) SPACE
                  </span>
                </div>

                <ChalkDivider width={1408} seed={202} />

                {/* ArrayTrackV2 Master Testcase Display */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 18,
                    marginBottom: 10,
                  }}
                >
                  <ArrayTrackV2
                    elements={arrayElements}
                    slotWidth={120}
                    slotHeight={82}
                    gap={18}
                    maxWidth={1200}
                    showIndices={true}
                    indexPlacement="top"
                    pointers={arrayPointers}
                    pointerPlacement="bottom"
                  />
                </div>

                {/* Pedagogical Step Walkthrough Cards */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 16,
                    marginTop: 18,
                  }}
                >
                  {/* Step 1 Badge */}
                  <div
                    style={{
                      padding: "12px 14px",
                      borderRadius: 8,
                      backgroundColor: frame >= 659 ? "rgba(78, 205, 196, 0.15)" : "rgba(0, 0, 0, 0.2)",
                      border: `1.5px solid ${frame >= 659 ? theme.cyan : "rgba(255, 255, 255, 0.12)"}`,
                      opacity: frame >= 659 ? 1.0 : 0.45,
                    }}
                  >
                    <div style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, color: theme.cyan }}>
                      STEP 1 · SCAN SUFFIX
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkText, marginTop: 4 }}>
                      Longest non-increasing: <span style={{ color: theme.cyan }}>[5, 4, 4, 3, 0]</span>
                    </div>
                  </div>

                  {/* Step 2 Badge */}
                  <div
                    style={{
                      padding: "12px 14px",
                      borderRadius: 8,
                      backgroundColor: frame >= 782 ? "rgba(255, 209, 102, 0.15)" : "rgba(0, 0, 0, 0.2)",
                      border: `1.5px solid ${frame >= 782 ? theme.pivot : "rgba(255, 255, 255, 0.12)"}`,
                      opacity: frame >= 782 ? 1.0 : 0.45,
                    }}
                  >
                    <div style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, color: theme.pivot }}>
                      STEP 2 · FIND PIVOT
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkText, marginTop: 4 }}>
                      First drop: <span style={{ color: theme.pivot }}>i = 1 (val = 1)</span>
                    </div>
                  </div>

                  {/* Step 3 Badge */}
                  <div
                    style={{
                      padding: "12px 14px",
                      borderRadius: 8,
                      backgroundColor: frame >= 956 ? "rgba(78, 205, 196, 0.15)" : "rgba(0, 0, 0, 0.2)",
                      border: `1.5px solid ${frame >= 956 ? theme.cyan : "rgba(255, 255, 255, 0.12)"}`,
                      opacity: frame >= 956 ? 1.0 : 0.45,
                    }}
                  >
                    <div style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, color: theme.cyan }}>
                      STEP 3 · SWAP SUCCESSOR
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkText, marginTop: 4 }}>
                      Swap: <span style={{ color: theme.cyan }}>nums[1] ↔ nums[5]</span>
                    </div>
                  </div>

                  {/* Step 4 Badge */}
                  <div
                    style={{
                      padding: "12px 14px",
                      borderRadius: 8,
                      backgroundColor: frame >= 1139 ? "rgba(60, 229, 167, 0.15)" : "rgba(0, 0, 0, 0.2)",
                      border: `1.5px solid ${frame >= 1139 ? theme.good : "rgba(255, 255, 255, 0.12)"}`,
                      opacity: frame >= 1139 ? 1.0 : 0.45,
                    }}
                  >
                    <div style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, color: theme.good }}>
                      STEP 4 · REVERSE SUFFIX
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkText, marginTop: 4 }}>
                      Invert to ascending: <span style={{ color: theme.good }}>[0, 1, 4, 4, 5]</span>
                    </div>
                  </div>
                </div>

                {/* Dual Complexity Confirmation Badges (F1371..F1531) */}
                {frame >= 1371 && (
                  <div
                    style={{
                      marginTop: "auto",
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 20,
                      opacity: interpolate(frame, [1371, 1400], [0, 1], {
                        extrapolateLeft: "clamp",
                        extrapolateRight: "clamp",
                      }),
                    }}
                  >
                    {/* Time Badge */}
                    <div
                      style={{
                        padding: "12px 20px",
                        borderRadius: 8,
                        backgroundColor: "rgba(60, 229, 167, 0.15)",
                        border: `1.5px solid ${theme.good}`,
                        display: "flex",
                        alignItems: "center",
                        gap: 14,
                      }}
                    >
                      <span style={{ fontFamily: fonts.mono, fontSize: 22, color: theme.good }}>✓</span>
                      <div>
                        <div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.good }}>
                          TIME COMPLEXITY: O(N) LINEAR
                        </div>
                        <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkDim, marginTop: 2 }}>
                          At most 3 linear passes (pivot scan + successor scan + suffix reverse) ≤ 3N operations.
                        </div>
                      </div>
                    </div>

                    {/* Space Badge */}
                    <div
                      style={{
                        padding: "12px 20px",
                        borderRadius: 8,
                        backgroundColor: frame >= 1443 ? "rgba(78, 205, 196, 0.15)" : "rgba(0, 0, 0, 0.2)",
                        border: `1.5px solid ${frame >= 1443 ? theme.cyan : "rgba(255, 255, 255, 0.12)"}`,
                        display: "flex",
                        alignItems: "center",
                        gap: 14,
                        opacity: frame >= 1443 ? 1 : 0.3,
                      }}
                    >
                      <span style={{ fontFamily: fonts.mono, fontSize: 22, color: theme.cyan }}>✓</span>
                      <div>
                        <div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.cyan }}>
                          AUXILIARY SPACE: O(1) IN-PLACE
                        </div>
                        <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkDim, marginTop: 2 }}>
                          No auxiliary arrays, sets, or recursive call stacks. Zero extra memory allocated.
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </RoughCard>
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* BLOCK 3 (F1531 .. F2279): TRANSFERABLE MENTAL MODEL (GOLDEN TRIAD)*/}
        {/* ----------------------------------------------------------------- */}
        {blockIndex === 3 && (
          <div
            style={{
              position: "absolute",
              top: 150,
              left: 220,
              width: 1480,
              height: 550,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <RoughCard
              width={1480}
              height={550}
              stroke={theme.pivot}
              strokeWidth={2.5}
              seed={301}
              bg="rgba(10, 48, 42, 0.78)"
            >
              <div style={{ padding: "26px 36px", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.pivot, letterSpacing: "0.1em" }}>
                      TRANSFERABLE INTERVIEW PRINCIPLE
                    </span>
                    <div style={{ fontFamily: fonts.display, fontSize: 32, color: theme.chalkText, marginTop: 2 }}>
                      The Golden Triad of Lexicographical Transitions
                    </div>
                  </div>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 13,
                      fontWeight: 700,
                      color: theme.pivot,
                      padding: "4px 14px",
                      borderRadius: 6,
                      backgroundColor: "rgba(255, 209, 102, 0.15)",
                      border: `1px solid ${theme.pivot}`,
                    }}
                  >
                    UNIVERSAL ALGORITHM PATTERN
                  </span>
                </div>

                <ChalkDivider width={1408} seed={302} />

                {/* Problem Trigger & Anti-Pattern Row (F1605..F1846) */}
                <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 20, marginTop: 16 }}>
                  {/* Pattern Trigger (F1605) */}
                  <div
                    style={{
                      padding: "14px 18px",
                      borderRadius: 8,
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      border: `1.5px solid ${theme.cyan}`,
                      opacity: frame >= 1605 ? 1.0 : 0.3,
                    }}
                  >
                    <div style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, color: theme.cyan }}>
                      PROBLEM PATTERN TRIGGER
                    </div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 15, color: theme.chalkText, marginTop: 4 }}>
                      "Find the next / previous lexicographical sequence or permutation."
                    </div>
                  </div>

                  {/* Anti-Pattern Warning (F1712) */}
                  <div
                    style={{
                      padding: "14px 18px",
                      borderRadius: 8,
                      backgroundColor: frame >= 1712 ? "rgba(255, 107, 107, 0.15)" : "rgba(0, 0, 0, 0.15)",
                      border: `1.5px solid ${frame >= 1712 ? theme.bad : "rgba(255, 255, 255, 0.12)"}`,
                      opacity: frame >= 1712 ? 1.0 : 0.3,
                    }}
                  >
                    <div style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, color: theme.bad }}>
                      ✕ CARDINAL ANTI-PATTERN
                    </div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 15, color: theme.bad, marginTop: 4, fontWeight: 600 }}>
                      DO NOT generate all candidates first. Reject enumeration!
                    </div>
                  </div>
                </div>

                {/* The Golden Triad: 3 Core Invariants (F1846..F2165) */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 18,
                    marginTop: 18,
                  }}
                >
                  {/* Rule 1: Rightmost Valid Increase */}
                  <div
                    style={{
                      padding: "18px 20px",
                      borderRadius: 10,
                      backgroundColor: frame >= 1846 ? "rgba(255, 209, 102, 0.15)" : "rgba(0, 0, 0, 0.2)",
                      border: `1.5px solid ${frame >= 1846 ? theme.pivot : "rgba(255, 255, 255, 0.12)"}`,
                      opacity: frame >= 1846 ? 1.0 : 0.3,
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: theme.pivot }}>
                        RULE 1 · PIVOT
                      </span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.pivot }}>①</span>
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.chalkText }}>
                      RIGHTMOST INCREASE
                    </div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkDim, lineHeight: 1.4 }}>
                      Find the rightmost position where an increase is possible. Keeps the identical prefix as long as humanly possible.
                    </div>
                  </div>

                  {/* Rule 2: Smallest Valid Increase */}
                  <div
                    style={{
                      padding: "18px 20px",
                      borderRadius: 10,
                      backgroundColor: frame >= 1983 ? "rgba(78, 205, 196, 0.15)" : "rgba(0, 0, 0, 0.2)",
                      border: `1.5px solid ${frame >= 1983 ? theme.cyan : "rgba(255, 255, 255, 0.12)"}`,
                      opacity: frame >= 1983 ? 1.0 : 0.3,
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: theme.cyan }}>
                        RULE 2 · SUCCESSOR
                      </span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.cyan }}>②</span>
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.chalkText }}>
                      SMALLEST INCREASE
                    </div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkDim, lineHeight: 1.4 }}>
                      Swap pivot with the smallest strictly greater suffix element. Produces the minimal jump to the immediate next successor.
                    </div>
                  </div>

                  {/* Rule 3: Minimize Suffix */}
                  <div
                    style={{
                      padding: "18px 20px",
                      borderRadius: 10,
                      backgroundColor: frame >= 2056 ? "rgba(60, 229, 167, 0.15)" : "rgba(0, 0, 0, 0.2)",
                      border: `1.5px solid ${frame >= 2056 ? theme.good : "rgba(255, 255, 255, 0.12)"}`,
                      opacity: frame >= 2056 ? 1.0 : 0.3,
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: theme.good }}>
                        RULE 3 · MINIMIZE
                      </span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.good }}>③</span>
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.chalkText }}>
                      MINIMIZE SUFFIX
                    </div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkDim, lineHeight: 1.4 }}>
                      Reverse the remaining suffix into ascending order so that tail values contribute the smallest magnitude possible.
                    </div>
                  </div>
                </div>

                {/* Synthesis Mastery Strip (F2165..F2279) */}
                {frame >= 2165 && (
                  <div
                    style={{
                      marginTop: "auto",
                      padding: "14px 24px",
                      borderRadius: 8,
                      backgroundColor: "rgba(255, 209, 102, 0.15)",
                      border: `1.5px solid ${theme.pivot}`,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      opacity: interpolate(frame, [2165, 2200], [0, 1], {
                        extrapolateLeft: "clamp",
                        extrapolateRight: "clamp",
                      }),
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span style={{ fontFamily: fonts.mono, fontSize: 20, color: theme.pivot }}>★</span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.pivot }}>
                        POWERS MULTIPLE LEETCODE PROBLEMS:
                      </span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkText }}>
                        LC 31 (Next Permutation) · LC 556 (Next Greater Element III) · LC 1053 (Prev Permutation) · LC 60
                      </span>
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: theme.good }}>
                      REASONING MASTERED ✓
                    </div>
                  </div>
                )}
              </div>
            </RoughCard>
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* BLOCK 4 (F2279 .. F2753): AUTHORITATIVE MASTER ROADMAP UI         */}
        {/* ----------------------------------------------------------------- */}
        {blockIndex === 4 && (
          <>
            <MasterRoadmapV2
              completedCount={roadmapCompletedCount}
              completedGlobalNums={roadmapCompletedNums}
              activeGlobalNum={roadmapActiveNum}
              upNextGlobalNum={roadmapUpNextNum}
              activePatternId={1}
              spotlightRow={roadmapSpotlightRow}
              activeBadgeLabel={roadmapActiveBadgeLabel}
              opacity={1}
            />

            {/* Celebratory ChalkDust burst on Row 12 completion (F2353..F2410) */}
            {frame >= 2353 && frame <= 2410 && (
              <ChalkDust
                x={1080}
                y={640}
                start={2353}
                color={theme.good}
                count={20}
                radius={80}
                seed={401}
              />
            )}

            {/* Q13 Title Spotlight Glow on Row 13 (F2701..F2753) */}
            {frame >= 2701 && (
              <div
                style={{
                  position: "absolute",
                  left: 420,
                  top: 698,
                  width: 1340,
                  height: 36,
                  borderRadius: 8,
                  border: `2px solid ${theme.pivot}`,
                  boxShadow: "0 0 20px rgba(255, 209, 102, 0.45)",
                  pointerEvents: "none",
                  zIndex: 20,
                }}
              />
            )}
          </>
        )}

        {/* ================================================================= */}
        {/* 3. BOTTOM CAPTIONS (Strictly anchored at Y: 980px)                */}
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
            zIndex: 100,
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
