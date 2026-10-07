/**
 * Scene08Method3Intuition.tsx — Scene 08 · Method 2 Is Optimal ──► Derive Simpler Transformation View
 * Rotate Image (LeetCode 48) · Pattern 01 — Arrays & Hashing
 *
 * Implements the conceptual bridge from Method 2 to Method 3:
 * - Phase 1 (F0..F827):
 *   - Establishes Method 2 is already asymptotically optimal: O(N²) time · O(1) space
 *   - Visualizes the 7-variable indexing burden: first, last, offset, top, right, bottom, left
 *   - Demonstrates interview mix-up cognitive burden with amber warning cues
 * - Phase 2 (F828..F1529):
 *   - Returns to first principles: Source (r, c) ──► Destination (c, n - 1 - r)
 *   - Poses the central question: Can we reach that destination using two simpler transformations?
 * - Phase 3 (F1530..F1662):
 *   - Affirms "Yes" and reveals two-step mathematical decomposition:
 *     1. Swap rows & columns (Transpose): (r, c) ──► (c, r)
 *     2. Flip horizontal direction (Reverse rows): (c, r) ──► (c, n - 1 - r)
 *   - Hands off cleanly to Method 3 Trace (Scene 09)
 *
 * Total Duration: 1,662 frames @ 30fps (55.400s) strictly from sync/08-why-method2-complex.json
 */
import React, { useMemo } from "react";
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
  bg: baseTheme.boardBg,
  chalkSub: baseTheme.chalkDim,
  chalkBorder: baseTheme.cardBorder,
};
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { RoughBox } from "../../../../kit/components/RoughBox";
import { ChalkDust } from "../../../../kit/components/ChalkDust";
import syncData from "../sync/08-why-method2-complex.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings (from sync/08-why-method2-complex.json)
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

// ---------------------------------------------------------------------------
// 7 Variable Boxes Definitions (Strictly Word Synced)
// ---------------------------------------------------------------------------
const SEVEN_INDICES = [
  { name: "first", role: "layer index", frame: 437, color: theme.cyan },
  { name: "last", role: "n - 1 - layer", frame: 463, color: theme.cyan },
  { name: "offset", role: "i - first", frame: 488, color: theme.gold },
  { name: "top", role: "first, i", frame: 513, color: theme.gold },
  { name: "right", role: "i, last", frame: 535, color: theme.cyan },
  { name: "bottom", role: "last, last-off", frame: 564, color: "#c4b5fd" },
  { name: "left", role: "last-off, first", frame: 589, color: "#fdba74" },
];

export const Scene08Method3Intuition: React.FC = () => {
  const frame = useCurrentFrame();

  // Phase entrance springs
  const phase1Entrance = spring({
    frame,
    fps: 30,
    config: { damping: 18, stiffness: 80 },
  });

  const phase2Entrance = spring({
    frame: Math.max(0, frame - 828),
    fps: 30,
    config: { damping: 18, stiffness: 80 },
  });

  // State flags based on exact spoken frames
  const isPhase2 = frame >= 828;
  const isReadabilitySpoken = frame >= 225;
  const isMixupWarning = frame >= 622 && frame < 828;
  const isDestFormulaSpoken = frame >= 1054;
  const isQuestionSpoken = frame >= 1273;
  const isDecomposeYes = frame >= 1530;
  const isMethod3Handoff = frame >= 1570;

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        backgroundColor: theme.bg,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      <Audio src={staticFile("audio/014/08-why-method2-complex.mp3")} />

      {/* =====================================================================
          TOP BAR: Clean Metadata Strip (Y: 36..105) · Zero Explanations
          ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 36,
          left: 70,
          right: 70,
          height: 52,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: `1.5px solid ${theme.chalkLine}`,
          paddingBottom: 10,
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span
            style={{
              fontFamily: fonts.code,
              fontSize: 13,
              fontWeight: 700,
              color: theme.chalkSub,
              letterSpacing: 1.5,
            }}
          >
            01 · ARRAYS & HASHING
          </span>
          <span
            style={{
              padding: "5px 12px",
              borderRadius: 6,
              backgroundColor: "rgba(25, 59, 45, 0.8)",
              border: `1px solid ${theme.gold}`,
              fontFamily: fonts.code,
              fontSize: 13,
              fontWeight: 700,
              color: theme.gold,
              letterSpacing: 1.2,
            }}
          >
            ROTATE IMAGE (LEETCODE 48)
          </span>
        </div>

        <span
          style={{
            padding: "5px 14px",
            borderRadius: 6,
            backgroundColor: "rgba(35, 14, 18, 0.8)",
            border: `1px solid ${isMethod3Handoff ? theme.good : theme.cyan}`,
            fontFamily: fonts.code,
            fontSize: 13,
            fontWeight: 700,
            color: isMethod3Handoff ? theme.good : theme.cyan,
            letterSpacing: 1,
          }}
        >
          {isMethod3Handoff
            ? "METHOD 3 HANDOFF: TRANSPOSE + ROW REVERSAL"
            : isPhase2
            ? "COORDINATE DECOMPOSITION: 2 ELEMENTARY STEPS"
            : isMixupWarning
            ? "HUMAN IMPLEMENTATION BURDEN: 7 RELATED INDICES"
            : "METHOD 2 IS OPTIMAL · DERIVING METHOD 3"}
        </span>
      </div>

      {/* =====================================================================
          CENTER STAGE HERO: Y: 160..740 (Height: 580px)
          No Artificial Cards! Pure Chalkboard Visual Geometry.
          ===================================================================== */}
      {!isPhase2 ? (
        /* -------------------------------------------------------------------
           PHASE 1: Method 2 Optimal Asymptotics & The 7-Index Burden (F0..F827)
           ------------------------------------------------------------------- */
        <div
          style={{
            position: "absolute",
            top: 175,
            left: 140,
            right: 140,
            height: 540,
            opacity: phase1Entrance,
            transform: `scale(${interpolate(phase1Entrance, [0, 1], [0.96, 1.0])})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 28,
            zIndex: 8,
          }}
        >
          {/* Method 2 Asymptotic Confirmation Badge */}
          <div
            style={{
              position: "relative",
              width: 620,
              height: 84,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, width: 620, height: 84, pointerEvents: "none" }}>
              <RoughBox width={620} height={84} stroke={theme.good} seed={81} strokeWidth={1.8} />
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                height: "100%",
                padding: "0 28px",
                boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 12,
                    fontWeight: 700,
                    color: theme.chalkSub,
                    letterSpacing: 1.5,
                  }}
                >
                  METHOD 2 ASYMPTOTIC STATUS
                </span>
                <span
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 24,
                    fontWeight: 700,
                    color: theme.good,
                  }}
                >
                  Already Optimal in Time & Extra Space
                </span>
              </div>

              <div style={{ width: 1.5, height: 42, backgroundColor: theme.chalkLine }} />

              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ fontFamily: fonts.code, fontSize: 11, color: theme.chalkSub }}>
                    TIME
                  </span>
                  <span style={{ fontFamily: fonts.code, fontSize: 22, fontWeight: 700, color: theme.gold }}>
                    O(N²)
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ fontFamily: fonts.code, fontSize: 11, color: theme.chalkSub }}>
                    EXTRA SPACE
                  </span>
                  <span style={{ fontFamily: fonts.code, fontSize: 22, fontWeight: 700, color: theme.good }}>
                    O(1)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Readability & Cognitive Burden Headline */}
          {isReadabilitySpoken && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                marginTop: 6,
              }}
            >
              <span
                style={{
                  fontFamily: fonts.code,
                  fontSize: 14,
                  fontWeight: 700,
                  color: isMixupWarning ? theme.warn : theme.cyan,
                  letterSpacing: 1.5,
                }}
              >
                {isMixupWarning
                  ? "COGNITIVE BURDEN: 7 INTERDEPENDENT INDICES UNDER INTERVIEW PRESSURE"
                  : "THE REAL CHALLENGE: READABILITY & IMPLEMENTATION COMPLEXITY"}
              </span>
              <span style={{ fontFamily: fonts.hand, fontSize: 20, color: theme.chalkText }}>
                A single 4-way cycle requires managing 7 tightly coupled index expressions:
              </span>
            </div>
          )}

          {/* Horizontal Sequence of the 7 Variable Boxes */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              marginTop: 10,
              minHeight: 110,
            }}
          >
            {SEVEN_INDICES.map((item, idx) => {
              const isVisible = frame >= item.frame;
              if (!isVisible) return null;

              return (
                <div
                  key={`s08-idx-${item.name}`}
                  style={{
                    width: 116,
                    height: 94,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: `scale(${interpolate(
                      Math.min(15, frame - item.frame),
                      [0, 15],
                      [0.85, 1.0],
                      { extrapolateRight: "clamp" }
                    )})`,
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, width: 116, height: 94, pointerEvents: "none" }}>
                    <RoughBox
                      width={116}
                      height={94}
                      stroke={isMixupWarning ? theme.warn : item.color}
                      seed={82 + idx}
                      strokeWidth={1.5}
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
                      gap: 5,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 18,
                        fontWeight: 800,
                        color: isMixupWarning ? theme.warn : item.color,
                        letterSpacing: 0.5,
                      }}
                    >
                      {item.name}
                    </span>
                    <span
                      style={{
                        fontFamily: fonts.code,
                        fontSize: 10.5,
                        color: theme.chalkSub,
                        textAlign: "center",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.role}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mix-up Warning Banner */}
          {isMixupWarning && (
            <div
              style={{
                position: "relative",
                width: 720,
                height: 48,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, width: 720, height: 48, pointerEvents: "none" }}>
                <RoughBox width={720} height={48} stroke={theme.warn} seed={89} strokeWidth={1.6} />
              </div>
              <ChalkDust start={622} x={360} y={24} count={16} color={theme.warn} />

              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  width: "100%",
                  height: "100%",
                }}
              >
                <span style={{ fontSize: 16 }}>⚠️</span>
                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 13,
                    fontWeight: 700,
                    color: theme.warn,
                    letterSpacing: 0.8,
                  }}
                >
                  CORRECT MATHEMATICALLY · HIGH ERROR RISK IN LIVE INTERVIEW SESSIONS
                </span>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* -------------------------------------------------------------------
           PHASE 2: Mathematical Blueprint Return & Two-Step Decomposition
           ------------------------------------------------------------------- */
        <div
          style={{
            position: "absolute",
            top: 175,
            left: 120,
            right: 120,
            height: 540,
            opacity: phase2Entrance,
            transform: `scale(${interpolate(phase2Entrance, [0, 1], [0.96, 1.0])})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
            zIndex: 8,
          }}
        >
          {/* Blueprint Title */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <span
              style={{
                fontFamily: fonts.code,
                fontSize: 12,
                fontWeight: 700,
                color: theme.cyan,
                letterSpacing: 1.5,
              }}
            >
              RETURN TO MATHEMATICAL FIRST PRINCIPLES
            </span>
            <span
              style={{
                fontFamily: fonts.hand,
                fontSize: 22,
                color: theme.chalkText,
              }}
            >
              Rotate 90° Clockwise Direct Coordinate Transformation:
            </span>
          </div>

          {/* Coordinate Formula: Source ──► Destination */}
          <div
            style={{
              position: "relative",
              width: 720,
              height: 110,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, width: 720, height: 110, pointerEvents: "none" }}>
              <RoughBox width={720} height={110} stroke={theme.chalkBorder} seed={91} strokeWidth={1.6} />
            </div>

            <ChalkDust start={1054} x={560} y={55} count={16} color={theme.gold} />

            <div
              style={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 36,
                width: "100%",
                height: "100%",
              }}
            >
              {/* Source Coordinate */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <span style={{ fontFamily: fonts.code, fontSize: 11, color: theme.chalkSub }}>
                  SOURCE CELL
                </span>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 52,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, width: 120, height: 52, pointerEvents: "none" }}>
                    <RoughBox width={120} height={52} stroke={theme.cyan} seed={92} strokeWidth={1.4} />
                  </div>
                  <span
                    style={{
                      position: "relative",
                      zIndex: 2,
                      fontFamily: fonts.code,
                      fontSize: 20,
                      fontWeight: 700,
                      color: theme.cyan,
                    }}
                  >
                    (r, c)
                  </span>
                </div>
              </div>

              {/* Transition Arrow */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <span style={{ fontFamily: fonts.code, fontSize: 10, color: theme.gold }}>
                  90° CLOCKWISE
                </span>
                <span style={{ fontFamily: fonts.code, fontSize: 24, color: theme.gold }}>
                  ────────►
                </span>
              </div>

              {/* Destination Coordinate (Appears F1054) */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <span style={{ fontFamily: fonts.code, fontSize: 11, color: theme.chalkSub }}>
                  FINAL DESTINATION
                </span>
                <div
                  style={{
                    position: "relative",
                    width: 220,
                    height: 52,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, width: 220, height: 52, pointerEvents: "none" }}>
                    <RoughBox
                      width={220}
                      height={52}
                      stroke={isDestFormulaSpoken ? theme.gold : theme.chalkLine}
                      seed={93}
                      strokeWidth={1.5}
                    />
                  </div>
                  <span
                    style={{
                      position: "relative",
                      zIndex: 2,
                      fontFamily: fonts.code,
                      fontSize: 20,
                      fontWeight: 700,
                      color: isDestFormulaSpoken ? theme.gold : theme.chalkSub,
                    }}
                  >
                    {isDestFormulaSpoken ? "(c, n - 1 - r)" : "???"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Question: Can we split this into two simpler steps? (F1273+) */}
          {isQuestionSpoken && (
            <div
              style={{
                position: "relative",
                width: 860,
                height: 52,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, width: 860, height: 52, pointerEvents: "none" }}>
                <RoughBox width={860} height={52} stroke={theme.cyan} seed={94} strokeWidth={1.5} />
              </div>
              <ChalkDust start={1273} x={430} y={26} count={14} color={theme.cyan} />

              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 14,
                  width: "100%",
                  height: "100%",
                }}
              >
                <span style={{ fontSize: 18 }}>❓</span>
                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 14,
                    fontWeight: 700,
                    color: theme.cyan,
                    letterSpacing: 0.8,
                  }}
                >
                  CAN WE REACH (c, n - 1 - r) USING TWO ELEMENTARY TRANSFORMATIONS?
                </span>
              </div>
            </div>
          )}

          {/* The Answer & 2-Stage Decomposition (F1530+) */}
          {isDecomposeYes && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 24,
                width: "100%",
              }}
            >
              <ChalkDust start={1530} x={480} y={50} count={20} color={theme.gold} />

              {/* Step 1: Transpose */}
              <div
                style={{
                  position: "relative",
                  width: 440,
                  height: 100,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, width: 440, height: 100, pointerEvents: "none" }}>
                  <RoughBox width={440} height={100} stroke={theme.gold} seed={95} strokeWidth={1.6} />
                </div>

                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 8,
                    width: "100%",
                    height: "100%",
                    padding: "0 22px",
                    boxSizing: "border-box",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span
                      style={{
                        fontFamily: fonts.code,
                        fontSize: 12,
                        fontWeight: 800,
                        color: theme.gold,
                        letterSpacing: 1,
                      }}
                    >
                      STEP 1 · TRANSPOSE
                    </span>
                    <span
                      style={{
                        fontSize: 10,
                        fontFamily: fonts.code,
                        padding: "2px 8px",
                        borderRadius: 4,
                        backgroundColor: "rgba(255, 209, 102, 0.2)",
                        color: theme.gold,
                        fontWeight: 700,
                      }}
                    >
                      SWAP ROWS & COLS
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.code,
                      fontSize: 18,
                      fontWeight: 700,
                      color: theme.chalkText,
                    }}
                  >
                    (r, c) ──► <span style={{ color: theme.gold }}>(c, r)</span>
                  </div>
                </div>
              </div>

              {/* Step 2: Row Reversal */}
              <div
                style={{
                  position: "relative",
                  width: 440,
                  height: 100,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, width: 440, height: 100, pointerEvents: "none" }}>
                  <RoughBox width={440} height={100} stroke={theme.good} seed={96} strokeWidth={1.6} />
                </div>

                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 8,
                    width: "100%",
                    height: "100%",
                    padding: "0 22px",
                    boxSizing: "border-box",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span
                      style={{
                        fontFamily: fonts.code,
                        fontSize: 12,
                        fontWeight: 800,
                        color: theme.good,
                        letterSpacing: 1,
                      }}
                    >
                      STEP 2 · HORIZONTAL REVERSAL
                    </span>
                    <span
                      style={{
                        fontSize: 10,
                        fontFamily: fonts.code,
                        padding: "2px 8px",
                        borderRadius: 4,
                        backgroundColor: "rgba(82, 183, 136, 0.2)",
                        color: theme.good,
                        fontWeight: 700,
                      }}
                    >
                      REVERSE EACH ROW
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.code,
                      fontSize: 18,
                      fontWeight: 700,
                      color: theme.chalkText,
                    }}
                  >
                    (c, r) ──► <span style={{ color: theme.good }}>(c, n - 1 - r)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Method 3 Handoff Banner (F1570+) */}
          {isMethod3Handoff && (
            <div
              style={{
                position: "relative",
                width: 580,
                height: 52,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, width: 580, height: 52, pointerEvents: "none" }}>
                <RoughBox width={580} height={52} stroke={theme.good} seed={97} strokeWidth={1.8} />
              </div>
              <ChalkDust start={1570} x={290} y={26} count={20} color={theme.good} />

              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 16,
                  width: "100%",
                  height: "100%",
                }}
              >
                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 15,
                    fontWeight: 800,
                    color: theme.good,
                    letterSpacing: 1.2,
                  }}
                >
                  METHOD 3: TRANSPOSE + ROW REVERSAL
                </span>
                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 12,
                    fontWeight: 700,
                    color: theme.gold,
                    padding: "2px 8px",
                    borderRadius: 4,
                    backgroundColor: "rgba(255, 209, 102, 0.2)",
                  }}
                >
                  UP NEXT ──►
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* =====================================================================
          CAPTIONS: Bottom Zone (Y: 960..1010) · Clear Breathing Room >= 240px
          ===================================================================== */}
      <Captions words={captionWords} />
    </div>
  );
};
