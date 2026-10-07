/**
 * Scene13Recap.tsx — Scene 13 · Full Evolution Recap & Master Roadmap Handoff
 * Question 013: Set Matrix Zeroes (LeetCode 73) · Pattern 01 — Arrays & Hashing
 *
 * Strict Compliance:
 * - plans/13-recap_FRAMEWISE_PLAN.md (all 32 anchors, 9-field schema)
 * - sync/13-recap.anchors.json (exact word-level frame anchors)
 * - Canvas: 1920x1080 chalkboard green (#19523C)
 * - Phase 1 (F0..F450): Method 1 (Preserve Everything with Full Copy)
 * - Phase 2 (F450..F1060): Method 2 (Compress into rowZero & colZero Vectors)
 * - Phase 3 (F1060..F1930): Method 3 (Reuse Matrix Perimeter as Marker Memory + 2 Booleans)
 * - Phase 4 (F1930..F2239): Final Asymptotics O(MN) / O(1) & Problem Completion Stamp
 * - Phase 5 (F2240..F2760): Master Course Roadmap (13/227 Completed, Row 14 Rotate Image Up Next)
 * - Zero empty voids: Stages fill Y: 115..855 with balanced vertical distribution
 * - Clean Unicode math symbols (→, ⇒, ×, ·, +)
 * - Bottom clearance: >= 140px buffer above captions (captions at bottom=36, Y: 1000..1044)
 * - 100% Remotion frame-derived determinism; zero CSS transitions
 *
 * Total Duration: 2760 frames @ 30fps (92.000s)
 */
import React from "react";
import {
  Audio,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme, fonts } from "../../../../kit/lib/theme";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { MasterRoadmapV2 } from "../../../../kit/components/MasterRoadmapV2";
import { ChalkDust } from "../../../../kit/components/ChalkDust";
import { RoughBox } from "../../../../kit/components/RoughBox";
import syncData from "../sync/13-recap.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings (normalized from sync/13-recap.json)
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => {
  let word = w.word;
  if (word.toLowerCase() === "call") {
    word = "col";
  } else if (word.toLowerCase() === "call.") {
    word = "col.";
  } else if (word.toLowerCase() === "zeros") {
    word = "Zeroes";
  } else if (word.toLowerCase() === "zeros.") {
    word = "Zeroes.";
  } else if (word === "13,") {
    word = "13,";
  } else if (word === "14.") {
    word = "14.";
  } else if (word === "227.") {
    word = "227.";
  }
  return {
    word,
    start: w.start_ms / 1000,
    end: w.end_ms / 1000,
  };
});

export const Scene13Recap: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Phase Boundaries
  const isPhase1 = frame >= 0 && frame < 450;
  const isPhase2 = frame >= 450 && frame < 1060;
  const isPhase3 = frame >= 1060 && frame < 1930;
  const isPhase4 = frame >= 1930 && frame < 2240;
  const isPhase5 = frame >= 2240; // Master Roadmap Stage

  // Method highlight index for Left Scaffold
  const activeMethodIdx = isPhase1 ? 1 : isPhase2 ? 2 : 3;

  // Springs
  const headerSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const card1Spring = spring({ frame: Math.max(0, frame - 5), fps, config: { damping: 14, stiffness: 90 } });
  const card2Spring = spring({ frame: Math.max(0, frame - 15), fps, config: { damping: 14, stiffness: 90 } });
  const card3Spring = spring({ frame: Math.max(0, frame - 25), fps, config: { damping: 14, stiffness: 90 } });

  // Phase 1 Micro-Timings
  const showM1FullCopy = frame >= 155;
  const showM1NoCorrupt = frame >= 223;
  const showM1Correct = frame >= 335;
  const showM1Expensive = frame >= 367;

  // Phase 2 Micro-Timings
  const showM2Question = frame >= 550;
  const showM2Rows = frame >= 632;
  const showM2Cols = frame >= 662;
  const showM2Contain = frame >= 705;
  const showM2Compress = frame >= 775;
  const showM2RowZero = frame >= 845;
  const showM2ColZero = frame >= 886;
  const showM2Space = frame >= 940;

  // Phase 3 Micro-Timings
  const showM3Obs = frame >= 1073;
  const showM3CellRow = frame >= 1147;
  const showM3CellCol = frame >= 1303;
  const showM3Reuse = frame >= 1442;
  const showM3Destroy = frame >= 1613;
  const showM3Saved = frame >= 1710;
  const showM3FR = frame >= 1774;
  const showM3FC = frame >= 1807;
  const showM3Memory = frame >= 1862;

  // Phase 4 Micro-Timings
  const showP4CompTitle = frame >= 1943;
  const showP4TimeSpace = frame >= 2033;
  const showP4Complete = frame >= 2157;

  // Phase 5 Master Roadmap Dynamic Properties
  const roadmapCompletedCount =
    frame < 2313
      ? 12
      : Math.min(13, Math.floor(interpolate(frame, [2313, 2350], [12, 13], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })));

  const roadmapCompletedNums =
    frame < 2240
      ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  const roadmapActiveNum = frame < 2570 ? 13 : 14;
  const roadmapUpNextNum = frame >= 2570 ? 14 : undefined;
  const roadmapSpotlightRow = frame < 2570 ? 13 : 14;
  const roadmapActiveBadgeLabel =
    frame < 2240 ? "NOW ACTIVE" : frame < 2570 ? "COMPLETED ✓" : "UP NEXT ▶";

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        position: "relative",
        backgroundColor: theme.boardBg,
        overflow: "hidden",
        fontFamily: fonts.sans,
      }}
    >
      <ChalkFilters />
      <ChalkboardBackground />

      {/* Synchronized Voiceover Audio */}
      <Audio src={staticFile("audio/013/13-recap.mp3")} />

      {/* =================================================================== */}
      {/* 1. TOP HEADER (Visible during Phases 1-4, Y: 30..94)                 */}
      {/* =================================================================== */}
      {!isPhase5 && (
        <div
          style={{
            position: "absolute",
            top: 30,
            left: 50,
            right: 50,
            height: 64,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 28px",
            borderRadius: 14,
            backgroundColor: "rgba(10, 48, 42, 0.88)",
            border: `1.5px solid ${theme.cardBorder}`,
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
            zIndex: 30,
            opacity: headerSpring,
            transform: `translateY(${interpolate(headerSpring, [0, 1], [-20, 0])}px)`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 13,
                fontWeight: 800,
                color: theme.pivot,
                letterSpacing: "0.12em",
                padding: "4px 12px",
                borderRadius: 6,
                backgroundColor: "rgba(255, 209, 102, 0.15)",
                border: `1px solid ${theme.pivot}`,
              }}
            >
              01 · ARRAYS & HASHING
            </span>
            <span
              style={{
                fontFamily: fonts.sans,
                fontSize: 21,
                fontWeight: 800,
                color: theme.chalkText,
                letterSpacing: "0.04em",
              }}
            >
              SET MATRIX ZEROES · FULL EVOLUTION RECAP
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 13,
                fontWeight: 700,
                color: isPhase4 ? theme.good : theme.cyan,
                padding: "4px 14px",
                borderRadius: 6,
                backgroundColor: isPhase4 ? "rgba(60, 229, 167, 0.15)" : "rgba(92, 225, 230, 0.12)",
                border: `1px solid ${isPhase4 ? theme.good : theme.cyan}`,
              }}
            >
              {isPhase4 ? "MILESTONE 13 / 227 SOLVED ✓" : "LEETCODE 73 · SYNTHESIS"}
            </span>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* 2. RECAP STAGES (Phases 1-4, Y: 110..850, Height: 740px)             */}
      {/* =================================================================== */}
      {!isPhase5 && (
        <div
          style={{
            position: "absolute",
            top: 110,
            left: 50,
            right: 50,
            height: 740,
            display: "flex",
            gap: 28,
            zIndex: 20,
          }}
        >
          {/* --------------------------------------------------------------- */}
          {/* LEFT STAGE (X: 50..820, W: 770px): 3-Method Evolution Ladder    */}
          {/* --------------------------------------------------------------- */}
          <div
            style={{
              width: 750,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Header Title Card */}
            <div
              style={{
                padding: "14px 22px",
                borderRadius: 12,
                backgroundColor: "rgba(10, 48, 42, 0.8)",
                border: `1.5px solid ${theme.cardBorder}`,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 18 }}>🪜</span>
                <span
                  style={{
                    fontFamily: fonts.sans,
                    fontSize: 18,
                    fontWeight: 800,
                    color: theme.chalkText,
                    letterSpacing: "0.06em",
                  }}
                >
                  THE 3-METHOD PROGRESSION
                </span>
              </div>
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 12,
                  fontWeight: 700,
                  color: theme.pivot,
                }}
              >
                PRESERVE → COMPRESS → REUSE
              </span>
            </div>

            {/* Card 1: Method 1 (Preserve Everything) */}
            <div
              style={{
                padding: "18px 22px",
                borderRadius: 14,
                backgroundColor: activeMethodIdx === 1 ? "rgba(245, 158, 11, 0.16)" : "rgba(10, 48, 42, 0.55)",
                border: `2px solid ${activeMethodIdx === 1 ? "#F59E0B" : "rgba(255, 255, 255, 0.12)"}`,
                boxShadow: activeMethodIdx === 1 ? "0 0 20px rgba(245, 158, 11, 0.35)" : "none",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                opacity: card1Spring,
                transform: `scale(${activeMethodIdx === 1 ? 1.02 : 0.98})`,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 12,
                    fontWeight: 800,
                    color: activeMethodIdx === 1 ? "#F59E0B" : theme.chalkDim,
                    letterSpacing: "0.08em",
                  }}
                >
                  STEP 1 · BRUTE FORCE
                </span>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 12,
                    fontWeight: 800,
                    padding: "2px 8px",
                    borderRadius: 4,
                    backgroundColor: "rgba(235, 87, 87, 0.2)",
                    color: "#EB5757",
                    border: "1px solid rgba(235, 87, 87, 0.4)",
                  }}
                >
                  O(M × N) SPACE
                </span>
              </div>
              <div style={{ fontFamily: fonts.sans, fontSize: 19, fontWeight: 800, color: theme.chalkText }}>
                Method 1: Preserve Everything
              </div>
              <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkDim, lineHeight: 1.4 }}>
                Keep an immutable duplicate clone of the entire matrix. Mutation on working matrix cannot corrupt ground truth, but wastes full grid memory.
              </div>
            </div>

            {/* Card 2: Method 2 (Compress to Vectors) */}
            <div
              style={{
                padding: "18px 22px",
                borderRadius: 14,
                backgroundColor: activeMethodIdx === 2 ? "rgba(78, 205, 196, 0.16)" : "rgba(10, 48, 42, 0.55)",
                border: `2px solid ${activeMethodIdx === 2 ? "#4ECDC4" : "rgba(255, 255, 255, 0.12)"}`,
                boxShadow: activeMethodIdx === 2 ? "0 0 20px rgba(78, 205, 196, 0.35)" : "none",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                opacity: card2Spring,
                transform: `scale(${activeMethodIdx === 2 ? 1.02 : 0.98})`,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 12,
                    fontWeight: 800,
                    color: activeMethodIdx === 2 ? "#4ECDC4" : theme.chalkDim,
                    letterSpacing: "0.08em",
                  }}
                >
                  STEP 2 · BETTER QUESTION
                </span>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 12,
                    fontWeight: 800,
                    padding: "2px 8px",
                    borderRadius: 4,
                    backgroundColor: "rgba(92, 225, 230, 0.2)",
                    color: theme.cyan,
                    border: `1px solid ${theme.cyan}`,
                  }}
                >
                  O(M + N) SPACE
                </span>
              </div>
              <div style={{ fontFamily: fonts.sans, fontSize: 19, fontWeight: 800, color: theme.chalkText }}>
                Method 2: Compress Information
              </div>
              <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkDim, lineHeight: 1.4 }}>
                Ask what information actually survives: only which rows and cols had original zeroes. Compress full 2D grid into two 1D marker arrays: rowZero & colZero.
              </div>
            </div>

            {/* Card 3: Method 3 (In-Place Memory) */}
            <div
              style={{
                padding: "18px 22px",
                borderRadius: 14,
                backgroundColor: activeMethodIdx === 3 ? "rgba(60, 229, 167, 0.18)" : "rgba(10, 48, 42, 0.55)",
                border: `2px solid ${activeMethodIdx === 3 ? theme.good : "rgba(255, 255, 255, 0.12)"}`,
                boxShadow: activeMethodIdx === 3 ? "0 0 24px rgba(60, 229, 167, 0.4)" : "none",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                opacity: card3Spring,
                transform: `scale(${activeMethodIdx === 3 ? 1.02 : 0.98})`,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 12,
                    fontWeight: 800,
                    color: activeMethodIdx === 3 ? theme.good : theme.chalkDim,
                    letterSpacing: "0.08em",
                  }}
                >
                  STEP 3 · GOLD STANDARD OPTIMAL
                </span>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 12,
                    fontWeight: 800,
                    padding: "2px 8px",
                    borderRadius: 4,
                    backgroundColor: "rgba(60, 229, 167, 0.2)",
                    color: theme.good,
                    border: `1px solid ${theme.good}`,
                  }}
                >
                  O(1) EXTRA SPACE 🏆
                </span>
              </div>
              <div style={{ fontFamily: fonts.sans, fontSize: 19, fontWeight: 800, color: theme.chalkText }}>
                Method 3: Reuse Input Storage
              </div>
              <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkDim, lineHeight: 1.4 }}>
                Row 0 has N cells, Col 0 has M cells. Embed markers directly into perimeter. Save 2 boolean registers (firstRowZero, firstColZero) to avoid overwriting boundaries!
              </div>
            </div>
          </div>

          {/* --------------------------------------------------------------- */}
          {/* RIGHT STAGE (X: 830..1870): Deep-Dive Dynamic Board             */}
          {/* --------------------------------------------------------------- */}
          <div
            style={{
              flex: 1,
              height: "100%",
              borderRadius: 14,
              backgroundColor: "rgba(10, 48, 42, 0.72)",
              border: `1.5px solid ${theme.cardBorder}`,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
              padding: "22px 26px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
          >
            {/* ------------------------------------------------------------- */}
            {/* PHASE 1: METHOD 1 COMPLETE COPY                               */}
            {/* ------------------------------------------------------------- */}
            {isPhase1 && (
              <>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: "#F59E0B" }}>
                      APPROACH 1 ARCHITECTURE
                    </div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 24, fontWeight: 800, color: theme.chalkText }}>
                      Complete Matrix Duplication Strategy
                    </div>
                  </div>
                  {showM1Correct && (
                    <span
                      style={{
                        padding: "6px 16px",
                        borderRadius: 6,
                        backgroundColor: "rgba(60, 229, 167, 0.2)",
                        color: theme.good,
                        border: `1.5px solid ${theme.good}`,
                        fontFamily: fonts.mono,
                        fontSize: 13,
                        fontWeight: 800,
                      }}
                    >
                      LOGICALLY SOUND: 100% CORRECT ✓
                    </span>
                  )}
                </div>

                {/* Dual Matrix View */}
                <div style={{ display: "flex", gap: 36, alignItems: "center", justifyContent: "center" }}>
                  {/* Working Matrix */}
                  <div
                    style={{
                      padding: "16px 22px",
                      borderRadius: 12,
                      backgroundColor: "rgba(0, 0, 0, 0.25)",
                      border: "1.5px solid rgba(255, 255, 255, 0.15)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: theme.chalkText }}>
                      Working Matrix (M × N)
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 48px)", gap: 6 }}>
                      {["0", "1", "2", "3", "0", "5", "1", "3", "1"].map((val, idx) => (
                        <div
                          key={idx}
                          style={{
                            width: 48,
                            height: 48,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: val === "0" ? "rgba(255, 209, 102, 0.25)" : "rgba(255, 255, 255, 0.06)",
                            border: `1px solid ${val === "0" ? theme.pivot : "rgba(255, 255, 255, 0.2)"}`,
                            borderRadius: 6,
                            fontFamily: fonts.mono,
                            fontSize: 19,
                            fontWeight: 700,
                            color: val === "0" ? theme.pivot : theme.chalkText,
                          }}
                        >
                          {val}
                        </div>
                      ))}
                    </div>
                    <span style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.chalkDim }}>
                      Target of in-place writes
                    </span>
                  </div>

                  {/* Flow Arrow */}
                  {showM1NoCorrupt && (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 28, color: theme.good }}>⟵</span>
                      <span
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 11,
                          fontWeight: 800,
                          color: theme.good,
                          textAlign: "center",
                          maxWidth: 110,
                        }}
                      >
                        READ SOURCE NO CORRUPTION
                      </span>
                    </div>
                  )}

                  {/* Clone Matrix */}
                  <div
                    style={{
                      padding: "16px 22px",
                      borderRadius: 12,
                      backgroundColor: "rgba(92, 225, 230, 0.12)",
                      border: `1.5px solid ${theme.cyan}`,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: theme.cyan }}>
                      Clone Matrix (M × N Copy)
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 48px)", gap: 6 }}>
                      {["0", "1", "2", "3", "0", "5", "1", "3", "1"].map((val, idx) => (
                        <div
                          key={idx}
                          style={{
                            width: 48,
                            height: 48,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "rgba(92, 225, 230, 0.15)",
                            border: `1px solid ${theme.cyan}`,
                            borderRadius: 6,
                            fontFamily: fonts.mono,
                            fontSize: 19,
                            fontWeight: 700,
                            color: theme.cyan,
                          }}
                        >
                          {val}
                        </div>
                      ))}
                    </div>
                    <span style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.cyan }}>
                      Immutable Source of Truth
                    </span>
                  </div>
                </div>

                {/* Shield & Invariant Confirmation */}
                <div
                  style={{
                    padding: "16px 20px",
                    borderRadius: 10,
                    backgroundColor: "rgba(60, 229, 167, 0.12)",
                    border: `1.5px solid ${theme.good}`,
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <span style={{ fontSize: 28 }}>🛡️</span>
                  <div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.good }}>
                      INVARIANT PRESERVED: ZERO VALUE CONTAMINATION
                    </div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkText }}>
                      Reads check only the clone matrix, ensuring original zeroes are never conflated with new zeros written during the scan.
                    </div>
                  </div>
                </div>

                {/* Expensive Memory Warning */}
                {showM1Expensive && (
                  <div
                    style={{
                      padding: "16px 20px",
                      borderRadius: 10,
                      backgroundColor: "rgba(235, 87, 87, 0.15)",
                      border: "2px solid #EB5757",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span style={{ fontSize: 26 }}>⚠️</span>
                      <div>
                        <div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, color: "#EB5757" }}>
                          MEMORY BOTTLENECK: O(M × N) AUXILIARY SPACE
                        </div>
                        <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText }}>
                          Allocating a full duplicate grid duplicates 1,000,000 elements for a 1000 × 1000 matrix. Highly suboptimal.
                        </div>
                      </div>
                    </div>
                    <span
                      style={{
                        padding: "6px 14px",
                        borderRadius: 6,
                        backgroundColor: "#EB5757",
                        color: "#FFFFFF",
                        fontFamily: fonts.mono,
                        fontSize: 13,
                        fontWeight: 800,
                      }}
                    >
                      EXPENSIVE
                    </span>
                  </div>
                )}
              </>
            )}

            {/* ------------------------------------------------------------- */}
            {/* PHASE 2: METHOD 2 COMPRESS TO VECTORS                         */}
            {/* ------------------------------------------------------------- */}
            {isPhase2 && (
              <>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: "#4ECDC4" }}>
                      APPROACH 2 ARCHITECTURE
                    </div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 24, fontWeight: 800, color: theme.chalkText }}>
                      Information Compression: 2D Grid → 1D Vectors
                    </div>
                  </div>
                  <span
                    style={{
                      padding: "6px 16px",
                      borderRadius: 6,
                      backgroundColor: "rgba(92, 225, 230, 0.2)",
                      color: theme.cyan,
                      border: `1.5px solid ${theme.cyan}`,
                      fontFamily: fonts.mono,
                      fontSize: 13,
                      fontWeight: 800,
                    }}
                  >
                    SPACE: O(M + N)
                  </span>
                </div>

                {/* Inquiry Banner */}
                <div
                  style={{
                    padding: "14px 20px",
                    borderRadius: 10,
                    backgroundColor: "rgba(255, 209, 102, 0.15)",
                    border: `1.5px solid ${theme.pivot}`,
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  <span style={{ fontSize: 24 }}>💡</span>
                  <div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.pivot }}>
                      THE ESSENTIAL QUESTION: WHAT INFORMATION ACTUALLY MATTERS?
                    </div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText }}>
                      We only need two binary coordinate questions: Did row i have an original zero? Did col j have an original zero?
                    </div>
                  </div>
                </div>

                {/* Matrix with Projections + 1D Vectors */}
                <div style={{ display: "flex", gap: 32, alignItems: "center", justifyContent: "center" }}>
                  {/* Visual 3x4 Matrix with Projection Highlights */}
                  <div
                    style={{
                      padding: "14px 18px",
                      borderRadius: 10,
                      backgroundColor: "rgba(0, 0, 0, 0.25)",
                      border: "1.5px solid rgba(255, 255, 255, 0.15)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: theme.chalkDim }}>
                      Original Zero at (1, 1) Triggers Projections
                    </span>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 40px)", gap: 5 }}>
                      {[
                        { val: "1", zero: false, r: 0, c: 0 },
                        { val: "2", zero: false, r: 0, c: 1 },
                        { val: "3", zero: false, r: 0, c: 2 },
                        { val: "4", zero: false, r: 0, c: 3 },
                        { val: "5", zero: false, r: 1, c: 0 },
                        { val: "0", zero: true, r: 1, c: 1 },
                        { val: "7", zero: false, r: 1, c: 2 },
                        { val: "8", zero: false, r: 1, c: 3 },
                        { val: "9", zero: false, r: 2, c: 0 },
                        { val: "1", zero: false, r: 2, c: 1 },
                        { val: "2", zero: false, r: 2, c: 2 },
                        { val: "3", zero: false, r: 2, c: 3 },
                      ].map((cell, idx) => {
                        const isZeroTarget = cell.zero;
                        const isRowProj = showM2Rows && cell.r === 1;
                        const isColProj = showM2Cols && cell.c === 1;
                        return (
                          <div
                            key={idx}
                            style={{
                              width: 40,
                              height: 40,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              backgroundColor: isZeroTarget
                                ? "rgba(255, 209, 102, 0.35)"
                                : isRowProj || isColProj
                                ? "rgba(92, 225, 230, 0.2)"
                                : "rgba(255, 255, 255, 0.05)",
                              border: `1px solid ${
                                isZeroTarget
                                  ? theme.pivot
                                  : isRowProj || isColProj
                                  ? theme.cyan
                                  : "rgba(255, 255, 255, 0.15)"
                              }`,
                              borderRadius: 5,
                              fontFamily: fonts.mono,
                              fontSize: 16,
                              fontWeight: isZeroTarget ? 800 : 600,
                              color: isZeroTarget
                                ? theme.pivot
                                : isRowProj || isColProj
                                ? theme.cyan
                                : theme.chalkText,
                            }}
                          >
                            {cell.val}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <span style={{ fontSize: 26, color: theme.good }}>⟹</span>

                  {/* Vectors Display */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {/* rowZero Vector */}
                    <div
                      style={{
                        padding: "12px 18px",
                        borderRadius: 10,
                        backgroundColor: showM2RowZero ? "rgba(92, 225, 230, 0.18)" : "rgba(0,0,0,0.2)",
                        border: `1.5px solid ${showM2RowZero ? theme.cyan : "rgba(255,255,255,0.15)"}`,
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                      }}
                    >
                      <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.cyan }}>
                        rowZero: boolean[M]
                      </span>
                      <div style={{ display: "flex", gap: 6 }}>
                        {["[0]: F", "[1]: TRUE", "[2]: F"].map((r, i) => (
                          <span
                            key={i}
                            style={{
                              padding: "4px 8px",
                              borderRadius: 4,
                              backgroundColor: i === 1 ? "rgba(255, 209, 102, 0.3)" : "rgba(255,255,255,0.08)",
                              color: i === 1 ? theme.pivot : theme.chalkText,
                              fontFamily: fonts.mono,
                              fontSize: 12,
                              fontWeight: i === 1 ? 800 : 500,
                              border: `1px solid ${i === 1 ? theme.pivot : "rgba(255,255,255,0.1)"}`,
                            }}
                          >
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* colZero Vector */}
                    <div
                      style={{
                        padding: "12px 18px",
                        borderRadius: 10,
                        backgroundColor: showM2ColZero ? "rgba(60, 229, 167, 0.18)" : "rgba(0,0,0,0.2)",
                        border: `1.5px solid ${showM2ColZero ? theme.good : "rgba(255,255,255,0.15)"}`,
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                      }}
                    >
                      <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.good }}>
                        colZero: boolean[N]
                      </span>
                      <div style={{ display: "flex", gap: 6 }}>
                        {["[0]: F", "[1]: TRUE", "[2]: F", "[3]: F"].map((c, i) => (
                          <span
                            key={i}
                            style={{
                              padding: "4px 8px",
                              borderRadius: 4,
                              backgroundColor: i === 1 ? "rgba(255, 209, 102, 0.3)" : "rgba(255,255,255,0.08)",
                              color: i === 1 ? theme.pivot : theme.chalkText,
                              fontFamily: fonts.mono,
                              fontSize: 12,
                              fontWeight: i === 1 ? 800 : 500,
                              border: `1px solid ${i === 1 ? theme.pivot : "rgba(255,255,255,0.1)"}`,
                            }}
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Space Reduction Meter */}
                {showM2Space && (
                  <div
                    style={{
                      padding: "16px 22px",
                      borderRadius: 12,
                      backgroundColor: "rgba(60, 229, 167, 0.12)",
                      border: `1.5px solid ${theme.good}`,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, color: theme.good }}>
                        SPACE REDUCTION ACHIEVED: O(M × N) → O(M + N)
                      </div>
                      <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText }}>
                        For 1000 × 1000: Memory drops from 1,000,000 cells to just 2,000 boolean flags! (99.8% reduction)
                      </div>
                    </div>
                    <div
                      style={{
                        padding: "8px 18px",
                        borderRadius: 8,
                        backgroundColor: theme.good,
                        color: "#0A302A",
                        fontFamily: fonts.mono,
                        fontSize: 14,
                        fontWeight: 900,
                      }}
                    >
                      500× SMALLER MEMORY
                    </div>
                  </div>
                )}
              </>
            )}

            {/* ------------------------------------------------------------- */}
            {/* PHASE 3: METHOD 3 REUSE INPUT STORAGE                         */}
            {/* ------------------------------------------------------------- */}
            {isPhase3 && (
              <>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.pivot }}>
                      OPTIMAL IN-PLACE PARADIGM
                    </div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 24, fontWeight: 800, color: theme.chalkText }}>
                      Reusing First Row & Column as Marker Memory
                    </div>
                  </div>
                  <span
                    style={{
                      padding: "6px 16px",
                      borderRadius: 6,
                      backgroundColor: "rgba(255, 209, 102, 0.2)",
                      color: theme.pivot,
                      border: `1.5px solid ${theme.pivot}`,
                      fontFamily: fonts.mono,
                      fontSize: 13,
                      fontWeight: 800,
                    }}
                  >
                    O(1) EXTRA SPACE 🏆
                  </span>
                </div>

                {/* Top Geometric Match Banner */}
                <div
                  style={{
                    padding: "12px 20px",
                    borderRadius: 10,
                    backgroundColor: "rgba(255, 209, 102, 0.12)",
                    border: `1px solid ${theme.pivot}`,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <span style={{ fontSize: 20 }}>📐</span>
                  <span style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText }}>
                    <strong>Key Geometric Discovery:</strong> The matrix already contains 1 cell for every row in Col 0 (size M) and 1 cell for every col in Row 0 (size N).
                  </span>
                </div>

                {/* The Geometric Match: 1 Cell per Row & Col */}
                <div style={{ display: "flex", gap: 32, alignItems: "center", justifyContent: "center" }}>
                  {/* Matrix with Perimeter Highlight */}
                  <div
                    style={{
                      padding: "16px 22px",
                      borderRadius: 12,
                      backgroundColor: "rgba(0, 0, 0, 0.25)",
                      border: `2px solid ${showM3Memory ? theme.pivot : "rgba(255, 255, 255, 0.15)"}`,
                      boxShadow: showM3Memory ? "0 0 25px rgba(255, 209, 102, 0.35)" : "none",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: theme.pivot }}>
                      Matrix Perimeter = Embedded Marker Arrays
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 52px)", gap: 6 }}>
                      {[
                        { val: "0", isRow0: true, isCol0: true },
                        { val: "0", isRow0: true, isCol0: false },
                        { val: "3", isRow0: true, isCol0: false },
                        { val: "0", isRow0: true, isCol0: false },
                        { val: "0", isRow0: false, isCol0: true },
                        { val: "5", isRow0: false, isCol0: false },
                        { val: "2", isRow0: false, isCol0: false },
                        { val: "1", isRow0: false, isCol0: false },
                        { val: "1", isRow0: false, isCol0: true },
                        { val: "3", isRow0: false, isCol0: false },
                        { val: "4", isRow0: false, isCol0: false },
                        { val: "2", isRow0: false, isCol0: false },
                      ].map((c, i) => {
                        const isPerimeter = c.isRow0 || c.isCol0;
                        const isOverlap = c.isRow0 && c.isCol0;
                        return (
                          <div
                            key={i}
                            style={{
                              width: 52,
                              height: 52,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              backgroundColor: isOverlap
                                ? "rgba(239, 71, 111, 0.35)"
                                : c.isRow0
                                ? "rgba(60, 229, 167, 0.25)"
                                : c.isCol0
                                ? "rgba(92, 225, 230, 0.25)"
                                : "rgba(255, 255, 255, 0.05)",
                              border: `1.5px solid ${
                                isOverlap
                                  ? "#EF476F"
                                  : c.isRow0
                                  ? theme.good
                                  : c.isCol0
                                  ? theme.cyan
                                  : "rgba(255, 255, 255, 0.15)"
                              }`,
                              borderRadius: 6,
                              fontFamily: fonts.mono,
                              fontSize: 18,
                              fontWeight: isPerimeter ? 800 : 500,
                              color: isOverlap
                                ? "#EF476F"
                                : c.isRow0
                                ? theme.good
                                : c.isCol0
                                ? theme.cyan
                                : theme.chalkText,
                            }}
                          >
                            {c.val}
                          </div>
                        );
                      })}
                    </div>
                    <span style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.chalkDim }}>
                      Row 0 (Green) = Col Markers | Col 0 (Cyan) = Row Markers | (0,0) (Red) = Overlap
                    </span>
                  </div>

                  {/* Two Registers + Storage Convergence */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <div
                      style={{
                        padding: "12px 18px",
                        borderRadius: 10,
                        backgroundColor: showM3FR ? "rgba(60, 229, 167, 0.18)" : "rgba(0,0,0,0.2)",
                        border: `1.5px solid ${showM3FR ? theme.good : "rgba(255,255,255,0.15)"}`,
                      }}
                    >
                      <div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: theme.good }}>
                        REGISTER 1 (1 bit flag)
                      </div>
                      <div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: theme.chalkText }}>
                        firstRowZero: boolean
                      </div>
                    </div>

                    <div
                      style={{
                        padding: "12px 18px",
                        borderRadius: 10,
                        backgroundColor: showM3FC ? "rgba(92, 225, 230, 0.18)" : "rgba(0,0,0,0.2)",
                        border: `1.5px solid ${showM3FC ? theme.cyan : "rgba(255,255,255,0.15)"}`,
                      }}
                    >
                      <div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: theme.cyan }}>
                        REGISTER 2 (1 bit flag)
                      </div>
                      <div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: theme.chalkText }}>
                        firstColZero: boolean
                      </div>
                    </div>

                    <div
                      style={{
                        padding: "10px 16px",
                        borderRadius: 8,
                        backgroundColor: "rgba(255, 209, 102, 0.15)",
                        border: `1px solid ${theme.pivot}`,
                        fontFamily: fonts.mono,
                        fontSize: 12,
                        fontWeight: 700,
                        color: theme.pivot,
                        textAlign: "center",
                      }}
                    >
                      new boolean[] ❌ → REUSED STORAGE ✓
                    </div>
                  </div>
                </div>

                {/* Overwrite Risk & Safety Card */}
                <div
                  style={{
                    padding: "14px 18px",
                    borderRadius: 10,
                    backgroundColor: showM3Saved ? "rgba(60, 229, 167, 0.12)" : "rgba(239, 71, 111, 0.15)",
                    border: `1.5px solid ${showM3Saved ? theme.good : "#EF476F"}`,
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  <span style={{ fontSize: 24 }}>{showM3Saved ? "🛡️" : "⚠️"}</span>
                  <div>
                    <div
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 13,
                        fontWeight: 800,
                        color: showM3Saved ? theme.good : "#EF476F",
                      }}
                    >
                      {showM3Saved
                        ? "COLLISION SOLVED: BOUNDARIES PRE-SCANNED INTO TWO REGISTERS"
                        : "REUSE HAZARD: OVERWRITING FIRST ROW/COL DESTROYS ORIGINAL BOUNDARY STATE"}
                    </div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText }}>
                      By saving firstRowZero and firstColZero before touching cell (0,0), the matrix safely becomes its own memory!
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* ------------------------------------------------------------- */}
            {/* PHASE 4: FINAL COMPLEXITY & PROBLEM COMPLETE                  */}
            {/* ------------------------------------------------------------- */}
            {isPhase4 && (
              <>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.pivot }}>
                      VERIFIED BENCHMARK
                    </div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 24, fontWeight: 800, color: theme.chalkText }}>
                      Final Algorithmic Efficiency & Scorecard
                    </div>
                  </div>
                  <span
                    style={{
                      padding: "6px 16px",
                      borderRadius: 6,
                      backgroundColor: "rgba(60, 229, 167, 0.2)",
                      color: theme.good,
                      border: `1.5px solid ${theme.good}`,
                      fontFamily: fonts.mono,
                      fontSize: 13,
                      fontWeight: 800,
                    }}
                  >
                    OPTIMAL GRADE ✓
                  </span>
                </div>

                {/* 3-Method Asymptotic Scorecard Table */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
                    gap: 8,
                    padding: "14px 18px",
                    borderRadius: 12,
                    backgroundColor: "rgba(0, 0, 0, 0.25)",
                    border: "1.5px solid rgba(255, 255, 255, 0.15)",
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: theme.chalkDim }}>
                    METHOD
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: theme.chalkDim }}>
                    TIME (AVG)
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: theme.chalkDim }}>
                    TIME (WORST)
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: theme.chalkDim }}>
                    EXTRA SPACE
                  </div>

                  <div style={{ fontFamily: fonts.sans, fontSize: 13, fontWeight: 700, color: theme.chalkText }}>
                    Method 1: Matrix Copy
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, color: "#FFA94D" }}>O(MN + z(M+N))</div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, color: "#EB5757" }}>O(MN · (M+N))</div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, color: "#EB5757" }}>O(MN) [Heavy]</div>

                  <div style={{ fontFamily: fonts.sans, fontSize: 13, fontWeight: 700, color: theme.chalkText }}>
                    Method 2: Marker Arrays
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.cyan }}>O(MN)</div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.cyan }}>O(MN)</div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.cyan }}>O(M + N) [Linear]</div>

                  <div style={{ fontFamily: fonts.sans, fontSize: 13, fontWeight: 800, color: theme.good }}>
                    Method 3: In-Place Markers
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.good }}>O(MN)</div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.good }}>O(MN)</div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.good }}>
                    O(1) [Optimal 🏆]
                  </div>
                </div>

                {/* Big Metric Badges */}
                <div style={{ display: "flex", gap: 28, justifyContent: "center" }}>
                  <div
                    style={{
                      flex: 1,
                      padding: "20px 28px",
                      borderRadius: 14,
                      backgroundColor: "rgba(255, 209, 102, 0.15)",
                      border: `2px solid ${theme.pivot}`,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.pivot }}>
                      FINAL TIME COMPLEXITY
                    </span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 40, fontWeight: 900, color: theme.pivot }}>
                      O(M × N)
                    </span>
                    <span style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText }}>
                      Constant sequential scans bounded by cell count
                    </span>
                  </div>

                  <div
                    style={{
                      flex: 1,
                      padding: "20px 28px",
                      borderRadius: 14,
                      backgroundColor: "rgba(60, 229, 167, 0.18)",
                      border: `2px solid ${theme.good}`,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.good }}>
                      EXTRA AUXILIARY SPACE
                    </span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 40, fontWeight: 900, color: theme.good }}>
                      O(1)
                    </span>
                    <span style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText }}>
                      Strictly 2 boolean registers + loop counters
                    </span>
                  </div>
                </div>

                {/* Final Completion Stamp */}
                {showP4Complete && (
                  <div
                    style={{
                      padding: "16px 22px",
                      borderRadius: 14,
                      backgroundColor: "rgba(60, 229, 167, 0.22)",
                      border: `2px solid ${theme.good}`,
                      boxShadow: "0 0 30px rgba(60, 229, 167, 0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span style={{ fontSize: 32 }}>🏆</span>
                      <div>
                        <div style={{ fontFamily: fonts.mono, fontSize: 17, fontWeight: 900, color: theme.good }}>
                          QUESTION 013: SET MATRIX ZEROES COMPLETED
                        </div>
                        <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText }}>
                          Ground truth verified · 3-pass in-place architecture mastered · Zero collision
                        </div>
                      </div>
                    </div>
                    <span
                      style={{
                        padding: "6px 18px",
                        borderRadius: 8,
                        backgroundColor: theme.good,
                        color: "#0A302A",
                        fontFamily: fonts.mono,
                        fontSize: 14,
                        fontWeight: 900,
                      }}
                    >
                      SOLVED ✓
                    </span>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* 3. PHASE 5: MASTER ROADMAP UI (F2240..F2760)                        */}
      {/* =================================================================== */}
      {isPhase5 && (
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

          {/* Celebratory ChalkDust burst on Row 13 completion (F2245..F2295) */}
          {frame >= 2245 && frame <= 2295 && (
            <ChalkDust
              x={1080}
              y={700}
              start={2245}
              color={theme.good}
              count={24}
              radius={80}
              seed={501}
            />
          )}

          {/* Spotlight border on Row 14 (Rotate Image) at F2570+ */}
          {frame >= 2570 && (
            <div
              style={{
                position: "absolute",
                left: 420,
                top: 742,
                width: 1340,
                height: 40,
                borderRadius: 8,
                border: `2px solid ${theme.pivot}`,
                boxShadow: "0 0 24px rgba(255, 209, 102, 0.55)",
                pointerEvents: "none",
                zIndex: 20,
              }}
            />
          )}
        </>
      )}

      {/* =================================================================== */}
      {/* 4. BOTTOM CAPTIONS (Direct root placement, bottom: 36)              */}
      {/* =================================================================== */}
      <Captions words={captionWords} bottom={36} fontSize={30} />
    </div>
  );
};
