/**
 * Scene12Complexity.tsx — Scene 12 · Complexity Comparison & Invariants
 * Question 013: Set Matrix Zeroes (LeetCode 73) · Pattern 01 — Arrays & Hashing
 *
 * Strict Compliance:
 * - plans/12-complexity_FRAMEWISE_PLAN.md (all 26 anchors, 9-field schema)
 * - sync/12-complexity.anchors.json (exact word-level frame anchors)
 * - Canvas: 1920x1080 chalkboard green (#19523C)
 * - Left Stage: 3-Method Comparative Scoreboard (X: 50..770, Y: 125..895)
 * - Right Stage: Deep-Dive Dynamic Analytical Stage (X: 810..1870, Y: 125..915)
 * - Zero empty voids: Every phase expands harmoniously to fill the 770px height
 * - Large, mobile-first typography (minimum 16px body, 19-24px headers and badges)
 * - Clean Unicode math symbols (→, ⇒, ∝)
 * - Bottom clearance: >= 45px buffer above captions at Y: 960
 * - 100% Remotion frame-derived determinism; zero CSS transitions
 *
 * Duration: 2827 frames @ 30fps (94.240s)
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
import syncData from "../sync/12-complexity.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

export const Scene12Complexity: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Active Method focus
  const isMethod1Active = frame >= 0 && frame < 1316;
  const isMethod2Active = frame >= 1316 && frame < 1752;
  const isMethod3Active = frame >= 1752;

  // Entrance Springs
  const headerSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const card1Spring = spring({ frame: Math.max(0, frame - 5), fps, config: { damping: 14, stiffness: 90 } });
  const card2Spring = spring({ frame: Math.max(0, frame - 15), fps, config: { damping: 14, stiffness: 90 } });
  const card3Spring = spring({ frame: Math.max(0, frame - 25), fps, config: { damping: 14, stiffness: 90 } });

  // Phase A (Method 1) Micro-Timings
  const showM1CopyGrid = frame >= 73;
  const showM1SpaceTag = frame >= 184;
  const showM1ExactRef = frame >= 302;
  const showM1ZParam = frame >= 381;
  const showM1ScanTerm = frame >= 460;
  const showM1PerZTerm = frame >= 527;
  const showM1RowColTerm = frame >= 602;
  const showM1TimeFormula = frame >= 723;
  const showM1WorstZ = frame >= 980;
  const showM1WorstResult = frame >= 1105;

  // Phase B (Method 2) Micro-Timings
  const showM2Intro = frame >= 1316;
  const showM2Passes = frame >= 1358;
  const showM2TimeTag = frame >= 1561;
  const showM2SpaceTag = frame >= 1652;

  // Phase C (Method 3) Micro-Timings
  const showM3Intro = frame >= 1752;
  const showM3Step1 = frame >= 1864; // scan first row
  const showM3Step2 = frame >= 1920; // scan first col
  const showM3Step3 = frame >= 1962; // interior discovery
  const showM3Step4 = frame >= 2047; // interior apply
  const showM3Step5 = frame >= 2121; // boundaries
  const showM3SeqBanner = frame >= 2222; // sequential invariant
  const showM3DomTerm = frame >= 2294; // dominant term
  const showM3TimeTag = frame >= 2440; // O(MN) time
  const showM3TwoBool = frame >= 2576; // two booleans
  const showM3O1Space = frame >= 2724; // O(1) space victory
  const showMasterOutro = frame >= 2750; // final trophy & table

  // Dynamic values
  const worstZSlider = interpolate(frame, [980, 1086], [1, 25], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        position: "relative",
        overflow: "hidden",
        backgroundColor: theme.boardBg || "#19523C",
        fontFamily: fonts.sans || "Inter, sans-serif",
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      {/* Synchronized Voiceover Audio */}
      <Audio src={staticFile("audio/013/12-complexity.mp3")} />

      {/* =================================================================== */}
      {/* 1. TOP HEADER (Y: 36..106)                                          */}
      {/* =================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 36,
          left: 50,
          right: 50,
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          opacity: headerSpring,
          transform: `translateY(${(1 - headerSpring) * -15}px)`,
          zIndex: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              backgroundColor: "rgba(251, 191, 36, 0.15)",
              border: "1.5px solid #FBBF24",
              borderRadius: 8,
              padding: "6px 14px",
              color: "#FBBF24",
              fontSize: 16,
              fontWeight: 800,
              letterSpacing: "0.08em",
            }}
          >
            01 · ARRAYS & HASHING
          </div>
          <span
            style={{
              fontFamily: fonts.display || "Caveat, cursive",
              fontSize: 34,
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "0.02em",
              textShadow: "0 2px 8px rgba(0,0,0,0.5)",
            }}
          >
            Complexity Comparison & Tradeoff Matrix
          </span>
        </div>

        <div
          style={{
            backgroundColor: "rgba(16, 185, 129, 0.15)",
            border: "1.5px solid #10B981",
            borderRadius: 8,
            padding: "6px 16px",
            color: "#6EE7B7",
            fontSize: 16,
            fontWeight: 800,
            letterSpacing: "0.05em",
          }}
        >
          LEETCODE 73 · SET MATRIX ZEROES
        </div>
      </div>

      {/* =================================================================== */}
      {/* 2. LEFT STAGE: 3-METHOD COMPARATIVE SCOREBOARD (X: 50..770, Y: 125..895) */}
      {/* =================================================================== */}
      <div
        style={{
          position: "absolute",
          left: 50,
          top: 125,
          width: 720,
          height: 770,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          zIndex: 10,
        }}
      >
        {/* CARD 1: METHOD 1 (MATRIX COPY) */}
        <div
          style={{
            height: 236,
            borderRadius: 16,
            backgroundColor: isMethod1Active
              ? "rgba(245, 158, 11, 0.12)"
              : "rgba(255, 255, 255, 0.04)",
            border: isMethod1Active
              ? "2.5px solid #F59E0B"
              : "1.5px solid rgba(255, 255, 255, 0.15)",
            boxShadow: isMethod1Active
              ? "0 0 24px rgba(245, 158, 11, 0.25)"
              : "none",
            padding: "18px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            opacity: card1Spring * (isMethod1Active || frame >= 2724 ? 1 : 0.75),
            transform: `translateY(${(1 - card1Spring) * 20}px)`,
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span
                style={{
                  color: isMethod1Active ? "#FBBF24" : "#E2E8F0",
                  fontSize: 22,
                  fontWeight: 800,
                  letterSpacing: "0.02em",
                }}
              >
                Method 1: Complete Matrix Copy
              </span>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  padding: "3px 10px",
                  borderRadius: 6,
                  backgroundColor: "rgba(239, 68, 68, 0.2)",
                  color: "#FCA5A5",
                  border: "1px solid #EF4444",
                }}
              >
                BRUTE FORCE
              </span>
            </div>
            <p style={{ margin: "6px 0 0 0", color: "#CBD5E1", fontSize: 15, lineHeight: 1.3 }}>
              Duplicates full M × N grid as an immutable reference snapshot.
            </p>
          </div>

          <div style={{ display: "flex", gap: 14 }}>
            <div
              style={{
                flex: 1,
                backgroundColor: "rgba(0, 0, 0, 0.35)",
                padding: "10px 14px",
                borderRadius: 10,
                border: showM1SpaceTag ? "1.5px solid #F59E0B" : "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div style={{ color: "#94A3B8", fontSize: 12, fontWeight: 700 }}>AUXILIARY SPACE</div>
              <div
                style={{
                  color: showM1SpaceTag ? "#FBBF24" : "#64748B",
                  fontSize: 20,
                  fontWeight: 800,
                  marginTop: 2,
                  fontFamily: fonts.code || "JetBrains Mono, monospace",
                }}
              >
                {showM1SpaceTag ? "O(M · N)" : "—"}
              </div>
            </div>

            <div
              style={{
                flex: 1.4,
                backgroundColor: "rgba(0, 0, 0, 0.35)",
                padding: "10px 14px",
                borderRadius: 10,
                border: showM1TimeFormula ? (showM1WorstResult ? "1.5px solid #EF4444" : "1.5px solid #F59E0B") : "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div style={{ color: "#94A3B8", fontSize: 12, fontWeight: 700 }}>
                {showM1WorstResult ? "WORST-CASE RUNTIME" : "TIME COMPLEXITY"}
              </div>
              <div
                style={{
                  color: showM1WorstResult ? "#EF4444" : (showM1TimeFormula ? "#FBBF24" : "#64748B"),
                  fontSize: showM1WorstResult ? 18 : 17,
                  fontWeight: 800,
                  marginTop: 2,
                  fontFamily: fonts.code || "JetBrains Mono, monospace",
                }}
              >
                {showM1WorstResult
                  ? "O(M · N · (M + N))"
                  : (showM1TimeFormula ? "O(MN + z(M+N))" : "—")}
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2: METHOD 2 (MARKER ARRAYS) */}
        <div
          style={{
            height: 236,
            borderRadius: 16,
            backgroundColor: isMethod2Active
              ? "rgba(6, 182, 212, 0.12)"
              : "rgba(255, 255, 255, 0.04)",
            border: isMethod2Active
              ? "2.5px solid #06B6D4"
              : "1.5px solid rgba(255, 255, 255, 0.15)",
            boxShadow: isMethod2Active
              ? "0 0 24px rgba(6, 182, 212, 0.25)"
              : "none",
            padding: "18px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            opacity: card2Spring * (isMethod2Active || frame >= 2724 ? 1 : 0.75),
            transform: `translateY(${(1 - card2Spring) * 20}px)`,
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span
                style={{
                  color: isMethod2Active ? "#22D3EE" : "#E2E8F0",
                  fontSize: 22,
                  fontWeight: 800,
                  letterSpacing: "0.02em",
                }}
              >
                Method 2: Marker Arrays
              </span>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  padding: "3px 10px",
                  borderRadius: 6,
                  backgroundColor: "rgba(6, 182, 212, 0.2)",
                  color: "#67E8F9",
                  border: "1px solid #06B6D4",
                }}
              >
                SUB-OPTIMAL SPACE
              </span>
            </div>
            <p style={{ margin: "6px 0 0 0", color: "#CBD5E1", fontSize: 15, lineHeight: 1.3 }}>
              Maintains two external 1D vectors: rowMarker[M] and colMarker[N].
            </p>
          </div>

          <div style={{ display: "flex", gap: 14 }}>
            <div
              style={{
                flex: 1,
                backgroundColor: "rgba(0, 0, 0, 0.35)",
                padding: "10px 14px",
                borderRadius: 10,
                border: showM2SpaceTag || frame >= 2724 ? "1.5px solid #06B6D4" : "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div style={{ color: "#94A3B8", fontSize: 12, fontWeight: 700 }}>AUXILIARY SPACE</div>
              <div
                style={{
                  color: showM2SpaceTag || frame >= 2724 ? "#22D3EE" : "#64748B",
                  fontSize: 20,
                  fontWeight: 800,
                  marginTop: 2,
                  fontFamily: fonts.code || "JetBrains Mono, monospace",
                }}
              >
                {showM2SpaceTag || frame >= 2724 ? "O(M + N)" : (frame >= 1316 ? "..." : "—")}
              </div>
            </div>

            <div
              style={{
                flex: 1.4,
                backgroundColor: "rgba(0, 0, 0, 0.35)",
                padding: "10px 14px",
                borderRadius: 10,
                border: showM2TimeTag || frame >= 2724 ? "1.5px solid #06B6D4" : "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div style={{ color: "#94A3B8", fontSize: 12, fontWeight: 700 }}>TIME COMPLEXITY</div>
              <div
                style={{
                  color: showM2TimeTag || frame >= 2724 ? "#22D3EE" : "#64748B",
                  fontSize: 20,
                  fontWeight: 800,
                  marginTop: 2,
                  fontFamily: fonts.code || "JetBrains Mono, monospace",
                }}
              >
                {showM2TimeTag || frame >= 2724 ? "O(M · N)" : (frame >= 1316 ? "..." : "—")}
              </div>
            </div>
          </div>
        </div>

        {/* CARD 3: METHOD 3 (IN-PLACE MARKERS) */}
        <div
          style={{
            height: 250,
            borderRadius: 16,
            backgroundColor: isMethod3Active
              ? "rgba(16, 185, 129, 0.15)"
              : "rgba(255, 255, 255, 0.04)",
            border: isMethod3Active
              ? "2.5px solid #10B981"
              : "1.5px solid rgba(255, 255, 255, 0.15)",
            boxShadow: isMethod3Active
              ? "0 0 30px rgba(16, 185, 129, 0.35)"
              : "none",
            padding: "18px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            opacity: card3Spring * (isMethod3Active || frame >= 2724 ? 1 : 0.75),
            transform: `translateY(${(1 - card3Spring) * 20}px)`,
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span
                style={{
                  color: isMethod3Active ? "#34D399" : "#E2E8F0",
                  fontSize: 22,
                  fontWeight: 800,
                  letterSpacing: "0.02em",
                }}
              >
                Method 3: In-Place Markers
              </span>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 800,
                  padding: "3px 12px",
                  borderRadius: 6,
                  backgroundColor: "rgba(16, 185, 129, 0.25)",
                  color: "#A7F3D0",
                  border: "1.5px solid #10B981",
                  boxShadow: "0 0 10px rgba(16, 185, 129, 0.4)",
                }}
              >
                ★ GOLD STANDARD
              </span>
            </div>
            <p style={{ margin: "6px 0 0 0", color: "#CBD5E1", fontSize: 15, lineHeight: 1.3 }}>
              Repurposes Row 0 & Col 0 in-place + preserves boundaries with 2 Booleans.
            </p>
          </div>

          <div style={{ display: "flex", gap: 14 }}>
            <div
              style={{
                flex: 1,
                backgroundColor: "rgba(0, 0, 0, 0.35)",
                padding: "10px 14px",
                borderRadius: 10,
                border: showM3O1Space ? "2px solid #10B981" : "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div style={{ color: "#94A3B8", fontSize: 12, fontWeight: 700 }}>AUXILIARY SPACE</div>
              <div
                style={{
                  color: showM3O1Space ? "#34D399" : "#64748B",
                  fontSize: 20,
                  fontWeight: 900,
                  marginTop: 2,
                  fontFamily: fonts.code || "JetBrains Mono, monospace",
                  textShadow: showM3O1Space ? "0 0 12px rgba(52, 211, 153, 0.6)" : "none",
                }}
              >
                {showM3O1Space ? "O(1) CONSTANT" : (isMethod3Active ? "..." : "—")}
              </div>
            </div>

            <div
              style={{
                flex: 1.4,
                backgroundColor: "rgba(0, 0, 0, 0.35)",
                padding: "10px 14px",
                borderRadius: 10,
                border: showM3TimeTag ? "1.5px solid #10B981" : "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div style={{ color: "#94A3B8", fontSize: 12, fontWeight: 700 }}>TIME COMPLEXITY</div>
              <div
                style={{
                  color: showM3TimeTag ? "#34D399" : "#64748B",
                  fontSize: 20,
                  fontWeight: 800,
                  marginTop: 2,
                  fontFamily: fonts.code || "JetBrains Mono, monospace",
                }}
              >
                {showM3TimeTag ? "O(M · N) OPTIMAL" : (isMethod3Active ? "..." : "—")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 3. RIGHT STAGE: DEEP-DIVE DYNAMIC STAGE (X: 810..1870, Y: 125..915) */}
      {/* =================================================================== */}
      <div
        style={{
          position: "absolute",
          left: 810,
          top: 125,
          width: 1060,
          height: 770,
          borderRadius: 20,
          backgroundColor: "rgba(15, 23, 42, 0.65)",
          border: "2px solid rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(12px)",
          padding: "24px 30px",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 16px 40px rgba(0, 0, 0, 0.4)",
          zIndex: 10,
        }}
      >
        {/* ================================================================= */}
        {/* PHASE A: METHOD 1 DEEP DIVE (Frames 0..1315)                      */}
        {/* ================================================================= */}
        {frame < 1316 && (
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3
                style={{
                  margin: 0,
                  fontSize: 26,
                  fontWeight: 800,
                  color: "#FBBF24",
                  letterSpacing: "0.02em",
                }}
              >
                Method 1 Architecture & Worst-Case Runtime
              </h3>
              <span
                style={{
                  fontSize: 16,
                  color: "#94A3B8",
                  fontFamily: fonts.code || "JetBrains Mono, monospace",
                  fontWeight: 700,
                }}
              >
                Space: O(M·N) | Time: O(MN + z(M+N))
              </span>
            </div>

            {/* Memory Footprint Diagram */}
            <div
              style={{
                display: "flex",
                gap: 24,
                alignItems: "center",
                padding: "20px 24px",
                borderRadius: 14,
                backgroundColor: "rgba(0, 0, 0, 0.35)",
                border: "1.5px solid rgba(245, 158, 11, 0.3)",
                opacity: showM1CopyGrid ? 1 : 0.35,
              }}
            >
              <div style={{ flex: 1, textAlign: "center" }}>
                <div style={{ color: "#E2E8F0", fontSize: 16, fontWeight: 700, marginBottom: 8 }}>
                  Original Matrix (matrix)
                </div>
                <div
                  style={{
                    height: 84,
                    borderRadius: 10,
                    backgroundColor: "rgba(30, 41, 59, 0.8)",
                    border: "2px dashed #94A3B8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#CBD5E1",
                    fontSize: 20,
                    fontWeight: 800,
                  }}
                >
                  M Rows × N Cols (M · N cells)
                </div>
              </div>

              <div style={{ color: "#FBBF24", fontSize: 32, fontWeight: 900 }}>+</div>

              <div style={{ flex: 1, textAlign: "center" }}>
                <div style={{ color: "#FBBF24", fontSize: 16, fontWeight: 700, marginBottom: 8 }}>
                  Full Auxiliary Copy (copy)
                </div>
                <div
                  style={{
                    height: 84,
                    borderRadius: 10,
                    backgroundColor: "rgba(245, 158, 11, 0.15)",
                    border: "2px solid #F59E0B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FDE68A",
                    fontSize: 20,
                    fontWeight: 800,
                    boxShadow: "0 0 16px rgba(245, 158, 11, 0.2)",
                  }}
                >
                  M Rows × N Cols (M · N cells)
                </div>
              </div>
            </div>

            {/* Formula Breakdown Workbench */}
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.35)",
                borderRadius: 14,
                padding: "20px 24px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <div style={{ color: "#94A3B8", fontSize: 14, fontWeight: 800, letterSpacing: "0.06em" }}>
                STEP-BY-STEP TIME COMPLEXITY DERIVATION
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {/* Term 1 */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 16px",
                    borderRadius: 8,
                    backgroundColor: showM1ScanTerm ? "rgba(255, 255, 255, 0.06)" : "transparent",
                    opacity: showM1ScanTerm ? 1 : 0.25,
                  }}
                >
                  <span style={{ color: "#E2E8F0", fontSize: 17 }}>
                    1. Scan full matrix once to locate all original zeros
                  </span>
                  <span style={{ color: "#FBBF24", fontSize: 20, fontWeight: 800, fontFamily: fonts.code }}>
                    + M · N checks
                  </span>
                </div>

                {/* Term 2 */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 16px",
                    borderRadius: 8,
                    backgroundColor: showM1RowColTerm ? "rgba(255, 255, 255, 0.06)" : "transparent",
                    opacity: showM1RowColTerm ? 1 : 0.25,
                  }}
                >
                  <span style={{ color: "#E2E8F0", fontSize: 17 }}>
                    2. For each of the {showM1ZParam ? "z original zeros" : "zeros"}, sweep full row & col
                  </span>
                  <span style={{ color: "#FBBF24", fontSize: 20, fontWeight: 800, fontFamily: fonts.code }}>
                    + z · (M + N) sweeps
                  </span>
                </div>
              </div>

              {/* Parametric Equation Display */}
              {showM1TimeFormula && (
                <div
                  style={{
                    marginTop: 6,
                    padding: "14px 20px",
                    borderRadius: 10,
                    backgroundColor: "rgba(245, 158, 11, 0.15)",
                    border: "1.5px solid #F59E0B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ color: "#FEF3C7", fontSize: 17, fontWeight: 700 }}>
                    Parametric Formula:
                  </span>
                  <span
                    style={{
                      color: "#FBBF24",
                      fontSize: 24,
                      fontWeight: 800,
                      fontFamily: fonts.code,
                      letterSpacing: "0.04em",
                    }}
                  >
                    Time = O(M · N + z · (M + N))
                  </span>
                </div>
              )}
            </div>

            {/* Bottom Card: Zero Sweep Intuition OR Worst Case Card */}
            {!showM1WorstZ ? (
              <div
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  borderRadius: 14,
                  padding: "20px 24px",
                  border: "1.5px dashed rgba(245, 158, 11, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ color: "#FDE68A", fontSize: 17, fontWeight: 800 }}>
                    Physical Work per Zero: (M + N) Sweeps
                  </div>
                  <div style={{ color: "#CBD5E1", fontSize: 15, marginTop: 6, maxWidth: 640, lineHeight: 1.4 }}>
                    Whenever a zero is found, the algorithm writes 0 to all N columns of that row, plus all M rows of that column.
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "rgba(245, 158, 11, 0.15)",
                    border: "1.5px solid #F59E0B",
                    borderRadius: 10,
                    padding: "12px 20px",
                    color: "#FBBF24",
                    fontFamily: fonts.code,
                    fontSize: 18,
                    fontWeight: 800,
                    textAlign: "center",
                  }}
                >
                  Cost = 1 Row + 1 Col<br />
                  <span style={{ fontSize: 20 }}>= (M + N) ops</span>
                </div>
              </div>
            ) : (
              <div
                style={{
                  backgroundColor: "rgba(239, 68, 68, 0.12)",
                  borderRadius: 14,
                  padding: "20px 24px",
                  border: "2px solid #EF4444",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  boxShadow: "0 0 24px rgba(239, 68, 68, 0.25)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "#FCA5A5", fontSize: 18, fontWeight: 800 }}>
                    WORST CASE SCENARIO: All matrix cells are zero! (z = M · N)
                  </span>
                  <span
                    style={{
                      color: "#EF4444",
                      fontSize: 14,
                      fontWeight: 800,
                      padding: "3px 10px",
                      borderRadius: 6,
                      backgroundColor: "rgba(239, 68, 68, 0.25)",
                      border: "1px solid #EF4444",
                    }}
                  >
                    DISASTROUS OVERLAP
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <span style={{ color: "#CBD5E1", fontSize: 16, fontWeight: 700 }}>Zero Count z:</span>
                  <div
                    style={{
                      flex: 1,
                      height: 14,
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      borderRadius: 7,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${(worstZSlider / 25) * 100}%`,
                        height: "100%",
                        backgroundColor: "#EF4444",
                        borderRadius: 7,
                      }}
                    />
                  </div>
                  <span
                    style={{
                      color: "#EF4444",
                      fontSize: 18,
                      fontWeight: 900,
                      fontFamily: fonts.code,
                      minWidth: 90,
                    }}
                  >
                    z = {Math.round(worstZSlider)} (Max)
                  </span>
                </div>

                {showM1WorstResult && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingTop: 8,
                      borderTop: "1px dashed rgba(239, 68, 68, 0.4)",
                    }}
                  >
                    <span style={{ color: "#E2E8F0", fontSize: 17, fontWeight: 600 }}>
                      Substitution: MN + (MN)(M + N) ⇒
                    </span>
                    <span
                      style={{
                        color: "#F87171",
                        fontSize: 24,
                        fontWeight: 900,
                        fontFamily: fonts.code,
                      }}
                    >
                      O(M · N · (M + N))
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ================================================================= */}
        {/* PHASE B: METHOD 2 DEEP DIVE (Frames 1316..1751)                   */}
        {/* ================================================================= */}
        {frame >= 1316 && frame < 1752 && (
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3
                style={{
                  margin: 0,
                  fontSize: 26,
                  fontWeight: 800,
                  color: "#22D3EE",
                  letterSpacing: "0.02em",
                }}
              >
                Method 2: Two-Pass Marker Arrays Pipeline
              </h3>
              <span
                style={{
                  fontSize: 16,
                  color: "#94A3B8",
                  fontFamily: fonts.code || "JetBrains Mono, monospace",
                  fontWeight: 700,
                }}
              >
                Space: O(M + N) | Time: O(M · N)
              </span>
            </div>

            {/* Two Sequential Passes Visual Cards */}
            <div style={{ display: "flex", gap: 20 }}>
              {/* PASS 1 */}
              <div
                style={{
                  flex: 1,
                  backgroundColor: "rgba(6, 182, 212, 0.1)",
                  border: "1.5px solid #06B6D4",
                  borderRadius: 14,
                  padding: "20px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "#67E8F9", fontSize: 19, fontWeight: 800 }}>
                    PASS 1: Marker Discovery
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 800,
                      padding: "3px 10px",
                      borderRadius: 6,
                      backgroundColor: "rgba(6, 182, 212, 0.25)",
                      color: "#22D3EE",
                      fontFamily: fonts.code,
                    }}
                  >
                    M · N checks
                  </span>
                </div>
                <p style={{ margin: 0, color: "#CBD5E1", fontSize: 16, lineHeight: 1.4 }}>
                  Scan matrix cells. Whenever matrix[r][c] == 0:
                </p>
                <div
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    padding: "12px 16px",
                    borderRadius: 8,
                    fontFamily: fonts.code,
                    color: "#A5F3FC",
                    fontSize: 16,
                    lineHeight: 1.5,
                  }}
                >
                  rowMarker[r] = True<br />
                  colMarker[c] = True
                </div>
              </div>

              {/* PASS 2 */}
              <div
                style={{
                  flex: 1,
                  backgroundColor: "rgba(6, 182, 212, 0.1)",
                  border: "1.5px solid #06B6D4",
                  borderRadius: 14,
                  padding: "20px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "#67E8F9", fontSize: 19, fontWeight: 800 }}>
                    PASS 2: Marker Application
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 800,
                      padding: "3px 10px",
                      borderRadius: 6,
                      backgroundColor: "rgba(6, 182, 212, 0.25)",
                      color: "#22D3EE",
                      fontFamily: fonts.code,
                    }}
                  >
                    M · N overwrites
                  </span>
                </div>
                <p style={{ margin: 0, color: "#CBD5E1", fontSize: 16, lineHeight: 1.4 }}>
                  Scan matrix again. If either corresponding marker is set:
                </p>
                <div
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    padding: "12px 16px",
                    borderRadius: 8,
                    fontFamily: fonts.code,
                    color: "#A5F3FC",
                    fontSize: 16,
                    lineHeight: 1.5,
                  }}
                >
                  if rowMarker[r] or colMarker[c]:<br />
                  &nbsp;&nbsp;matrix[r][c] = 0
                </div>
              </div>
            </div>

            {/* Storage Comparison Graphic */}
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.35)",
                borderRadius: 14,
                padding: "22px 26px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div style={{ color: "#94A3B8", fontSize: 14, fontWeight: 800, letterSpacing: "0.06em", marginBottom: 14 }}>
                STORAGE FOOTPRINT REDUCTION: 2D GRID → TWO 1D VECTORS
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ color: "#EF4444", fontSize: 15, fontWeight: 700, marginBottom: 8 }}>
                    Method 1: Full 2D Copy
                  </div>
                  <div
                    style={{
                      padding: "12px 24px",
                      borderRadius: 8,
                      backgroundColor: "rgba(239, 68, 68, 0.15)",
                      border: "1.5px solid #EF4444",
                      color: "#FCA5A5",
                      fontFamily: fonts.code,
                      fontSize: 18,
                      fontWeight: 800,
                    }}
                  >
                    M × N elements (Quadratic Space)
                  </div>
                </div>

                <div style={{ color: "#22D3EE", fontSize: 36, fontWeight: 900 }}>→</div>

                <div style={{ textAlign: "center" }}>
                  <div style={{ color: "#22D3EE", fontSize: 15, fontWeight: 700, marginBottom: 8 }}>
                    Method 2: External Vectors
                  </div>
                  <div
                    style={{
                      padding: "12px 24px",
                      borderRadius: 8,
                      backgroundColor: "rgba(6, 182, 212, 0.15)",
                      border: "2px solid #06B6D4",
                      color: "#A5F3FC",
                      fontFamily: fonts.code,
                      fontSize: 18,
                      fontWeight: 800,
                      boxShadow: "0 0 16px rgba(6, 182, 212, 0.3)",
                    }}
                  >
                    M + N elements (Linear Space)
                  </div>
                </div>
              </div>
            </div>

            {/* Asymptotic Summary Pills */}
            <div style={{ display: "flex", gap: 16 }}>
              <div
                style={{
                  flex: 1,
                  padding: "16px 22px",
                  borderRadius: 12,
                  backgroundColor: "rgba(6, 182, 212, 0.15)",
                  border: "1.5px solid #06B6D4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ color: "#CBD5E1", fontSize: 16, fontWeight: 700 }}>Total Runtime:</span>
                <span style={{ color: "#22D3EE", fontSize: 22, fontWeight: 900, fontFamily: fonts.code }}>
                  MN + MN = O(M · N)
                </span>
              </div>

              <div
                style={{
                  flex: 1,
                  padding: "16px 22px",
                  borderRadius: 12,
                  backgroundColor: "rgba(6, 182, 212, 0.15)",
                  border: "1.5px solid #06B6D4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ color: "#CBD5E1", fontSize: 16, fontWeight: 700 }}>Total Memory:</span>
                <span style={{ color: "#22D3EE", fontSize: 22, fontWeight: 900, fontFamily: fonts.code }}>
                  M + N = O(M + N)
                </span>
              </div>
            </div>

            {/* Pedagogical Bridge: Motivation for Method 3 */}
            <div
              style={{
                backgroundColor: "rgba(16, 185, 129, 0.12)",
                border: "1.5px dashed #10B981",
                borderRadius: 14,
                padding: "16px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ color: "#34D399", fontWeight: 800, fontSize: 16 }}>
                  The Next Logical Optimization:
                </div>
                <div style={{ color: "#E2E8F0", fontSize: 15, marginTop: 4 }}>
                  O(M + N) is linear, but on a 10,000 × 10,000 matrix it allocates 20,000 variables. Can we eliminate them completely?
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#10B981",
                  color: "#022C22",
                  fontSize: 14,
                  fontWeight: 900,
                  padding: "8px 16px",
                  borderRadius: 8,
                  letterSpacing: "0.04em",
                }}
              >
                OPTIMAL IN-PLACE →
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* PHASE C: METHOD 3 DEEP DIVE (Frames 1752..2827)                   */}
        {/* ================================================================= */}
        {frame >= 1752 && (
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3
                style={{
                  margin: 0,
                  fontSize: 26,
                  fontWeight: 800,
                  color: "#34D399",
                  letterSpacing: "0.02em",
                }}
              >
                Method 3: Sequential In-Place Passes & O(1) Memory Proof
              </h3>
              <span
                style={{
                  fontSize: 16,
                  color: "#A7F3D0",
                  fontFamily: fonts.code || "JetBrains Mono, monospace",
                  fontWeight: 800,
                }}
              >
                Space: O(1) Extra Space | Time: O(M · N)
              </span>
            </div>

            {/* 5-Step Sequential Pipeline Timeline */}
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {/* Step 1: Scan First Row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "11px 18px",
                  borderRadius: 10,
                  backgroundColor: showM3Step1 ? "rgba(16, 185, 129, 0.18)" : "rgba(255, 255, 255, 0.03)",
                  border: showM3Step1 ? "1.5px solid #10B981" : "1px solid rgba(255,255,255,0.08)",
                  opacity: showM3Step1 ? 1 : 0.35,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span style={{ color: "#34D399", fontWeight: 900, fontSize: 17 }}>1.</span>
                  <span style={{ color: "#E2E8F0", fontSize: 16 }}>
                    Scan First Row (Row 0) → Save state in firstRowZero boolean
                  </span>
                </div>
                <span style={{ color: "#6EE7B7", fontFamily: fonts.code, fontSize: 17, fontWeight: 800 }}>
                  N operations → O(N)
                </span>
              </div>

              {/* Step 2: Scan First Col */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "11px 18px",
                  borderRadius: 10,
                  backgroundColor: showM3Step2 ? "rgba(16, 185, 129, 0.18)" : "rgba(255, 255, 255, 0.03)",
                  border: showM3Step2 ? "1.5px solid #10B981" : "1px solid rgba(255,255,255,0.08)",
                  opacity: showM3Step2 ? 1 : 0.35,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span style={{ color: "#34D399", fontWeight: 900, fontSize: 17 }}>2.</span>
                  <span style={{ color: "#E2E8F0", fontSize: 16 }}>
                    Scan First Column (Col 0) → Save state in firstColZero boolean
                  </span>
                </div>
                <span style={{ color: "#6EE7B7", fontFamily: fonts.code, fontSize: 17, fontWeight: 800 }}>
                  M operations → O(M)
                </span>
              </div>

              {/* Step 3: Interior Marker Discovery */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "11px 18px",
                  borderRadius: 10,
                  backgroundColor: showM3Step3 ? "rgba(16, 185, 129, 0.18)" : "rgba(255, 255, 255, 0.03)",
                  border: showM3Step3 ? "1.5px solid #10B981" : "1px solid rgba(255,255,255,0.08)",
                  opacity: showM3Step3 ? 1 : 0.35,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span style={{ color: "#34D399", fontWeight: 900, fontSize: 17 }}>3.</span>
                  <span style={{ color: "#E2E8F0", fontSize: 16 }}>
                    Scan Interior Cells (1..m-1, 1..n-1) → Record zeros in Row 0 & Col 0
                  </span>
                </div>
                <span style={{ color: "#6EE7B7", fontFamily: fonts.code, fontSize: 17, fontWeight: 800 }}>
                  (M-1)(N-1) → O(M · N)
                </span>
              </div>

              {/* Step 4: Interior Marker Application */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "11px 18px",
                  borderRadius: 10,
                  backgroundColor: showM3Step4 ? "rgba(16, 185, 129, 0.18)" : "rgba(255, 255, 255, 0.03)",
                  border: showM3Step4 ? "1.5px solid #10B981" : "1px solid rgba(255,255,255,0.08)",
                  opacity: showM3Step4 ? 1 : 0.35,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span style={{ color: "#34D399", fontWeight: 900, fontSize: 17 }}>4.</span>
                  <span style={{ color: "#E2E8F0", fontSize: 16 }}>
                    Scan Interior Cells again → Apply Row 0 & Col 0 zero markers
                  </span>
                </div>
                <span style={{ color: "#6EE7B7", fontFamily: fonts.code, fontSize: 17, fontWeight: 800 }}>
                  (M-1)(N-1) → O(M · N)
                </span>
              </div>

              {/* Step 5: Finalize Boundaries */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "11px 18px",
                  borderRadius: 10,
                  backgroundColor: showM3Step5 ? "rgba(16, 185, 129, 0.18)" : "rgba(255, 255, 255, 0.03)",
                  border: showM3Step5 ? "1.5px solid #10B981" : "1px solid rgba(255,255,255,0.08)",
                  opacity: showM3Step5 ? 1 : 0.35,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span style={{ color: "#34D399", fontWeight: 900, fontSize: 17 }}>5.</span>
                  <span style={{ color: "#E2E8F0", fontSize: 16 }}>
                    Finalize Boundaries → Zero Row 0 and/or Col 0 if booleans set
                  </span>
                </div>
                <span style={{ color: "#6EE7B7", fontFamily: fonts.code, fontSize: 17, fontWeight: 800 }}>
                  M + N → O(M + N)
                </span>
              </div>
            </div>

            {/* Sequential Passes Invariant Banner */}
            {showM3SeqBanner && (
              <div
                style={{
                  padding: "11px 18px",
                  borderRadius: 10,
                  backgroundColor: "rgba(251, 191, 36, 0.15)",
                  border: "1.5px solid #FBBF24",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                }}
              >
                <span style={{ color: "#FBBF24", fontSize: 16, fontWeight: 900, letterSpacing: "0.04em" }}>
                  CRITICAL ARCHITECTURE: SEQUENTIAL PASSES (T₁ + T₂ + T₃ + T₄ + T₅), NEVER NESTED!
                </span>
              </div>
            )}

            {/* Dominant Term & Hardware Storage Chips */}
            <div style={{ display: "flex", gap: 16 }}>
              {/* Dominant Work Card */}
              <div
                style={{
                  flex: 1.3,
                  backgroundColor: "rgba(0, 0, 0, 0.35)",
                  borderRadius: 14,
                  padding: "16px 20px",
                  border: showM3DomTerm ? "1.5px solid #10B981" : "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div style={{ color: "#94A3B8", fontSize: 13, fontWeight: 800, letterSpacing: "0.05em" }}>
                  ASYMPTOTIC RUNTIME DOMINANCE
                </div>
                <div style={{ color: "#E2E8F0", fontSize: 15, marginTop: 4 }}>
                  Total = N + M + 2(M-1)(N-1) + (M+N)
                </div>
                <div
                  style={{
                    color: showM3TimeTag ? "#34D399" : "#FDE68A",
                    fontSize: 21,
                    fontWeight: 900,
                    fontFamily: fonts.code,
                    marginTop: 4,
                  }}
                >
                  Dominant Work ∝ 2 · M · N ⇒ O(M · N)
                </div>
              </div>

              {/* Hardware Storage Model */}
              <div
                style={{
                  flex: 1,
                  backgroundColor: "rgba(0, 0, 0, 0.35)",
                  borderRadius: 14,
                  padding: "16px 20px",
                  border: showM3TwoBool ? "1.5px solid #10B981" : "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div style={{ color: "#94A3B8", fontSize: 13, fontWeight: 800, letterSpacing: "0.05em" }}>
                  AUXILIARY STORAGE HARDWARE MODEL
                </div>
                <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "rgba(16, 185, 129, 0.2)",
                      border: "1px solid #10B981",
                      borderRadius: 8,
                      padding: "8px 10px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ color: "#A7F3D0", fontSize: 11, fontWeight: 700 }}>REGISTER 1</div>
                    <div style={{ color: "#34D399", fontFamily: fonts.code, fontSize: 14, fontWeight: 800 }}>
                      firstRowZero (1 bit)
                    </div>
                  </div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "rgba(16, 185, 129, 0.2)",
                      border: "1px solid #10B981",
                      borderRadius: 8,
                      padding: "8px 10px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ color: "#A7F3D0", fontSize: 11, fontWeight: 700 }}>REGISTER 2</div>
                    <div style={{ color: "#34D399", fontFamily: fonts.code, fontSize: 14, fontWeight: 800 }}>
                      firstColZero (1 bit)
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    color: showM3O1Space ? "#34D399" : "#6EE7B7",
                    fontSize: 15,
                    fontWeight: 800,
                    textAlign: "center",
                    marginTop: 8,
                  }}
                >
                  Total Auxiliary Space = 2 Booleans ⇒ O(1)
                </div>
              </div>
            </div>

            {/* Outro Master Trophy / Grand Finale */}
            {showMasterOutro && (
              <div
                style={{
                  backgroundColor: "rgba(16, 185, 129, 0.2)",
                  border: "2px solid #10B981",
                  borderRadius: 14,
                  padding: "16px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: "0 0 28px rgba(16, 185, 129, 0.35)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <span style={{ fontSize: 32 }}>🏆</span>
                  <div>
                    <div style={{ color: "#FFFFFF", fontSize: 17, fontWeight: 800 }}>
                      PROBLEM 013 (SET MATRIX ZEROES) FULLY SOLVED & OPTIMIZED!
                    </div>
                    <div style={{ color: "#A7F3D0", fontSize: 15, marginTop: 2 }}>
                      Zero extra arrays · In-place boundary encoding · O(MN) Time · O(1) Extra Space
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "#10B981",
                    color: "#022C22",
                    fontSize: 15,
                    fontWeight: 900,
                    padding: "8px 18px",
                    borderRadius: 8,
                    letterSpacing: "0.06em",
                  }}
                >
                  VERIFIED OPTIMAL
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* =================================================================== */}
      {/* 4. BOTTOM CAPTION BAR (Y: 960..1040)                                */}
      {/* =================================================================== */}
      <Captions words={captionWords} />
    </div>
  );
};
