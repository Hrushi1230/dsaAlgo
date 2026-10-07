import React, { useMemo } from "react";
import {
  Audio,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { fonts, theme } from "../../../../kit/lib/theme";
import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { ChalkDust } from "../../../../kit/components/ChalkDust";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { RoughLine } from "../../../../kit/components/RoughLine";
import { RoughBox } from "../../../../kit/components/RoughBox";
import { RoughCurve } from "../../../../kit/components/RoughCurve";
import { CountUp } from "../../../../kit/components/CountUp";
import { EASE, pop, fadeIn } from "../../../../kit/lib/anim";
import { PATTERNS_DATA } from "./roadmapData";
import syncData from "../sync/13-recap.json";

// =============================================================================
// DATA & TIMINGS
// =============================================================================

// Mini unordered HashSet layout for recap
const MINI_HASH_FIELD = [
  { val: 8,  x: 70,  y: 15 },
  { val: -1, x: 190, y: 12 },
  { val: 3,  x: 310, y: 16 },
  { val: 0,  x: 35,  y: 65 },
  { val: 2,  x: 135, y: 68 },
  { val: 6,  x: 245, y: 62 },
  { val: 4,  x: 350, y: 64 },
  { val: 10, x: 90,  y: 115 },
  { val: 1,  x: 210, y: 118 },
  { val: 9,  x: 315, y: 114 },
  { val: 11, x: 160, y: 165 },
];

export const Scene13Recap: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ----------------------------------------------------
  // Audio & Captions Sync
  // ----------------------------------------------------
  const captionWords = useMemo<CaptionWord[]>(() => {
    return (syncData.words || []).map((w) => ({
      word: w.word,
      start: w.start_ms / 1000,
      end: w.end_ms / 1000,
    }));
  }, []);

  // ----------------------------------------------------
  // Dynamic Top Badge Info
  // ----------------------------------------------------
  const badgeInfo = useMemo(() => {
    if (frame < 140) {
      return { text: "RECAP · THREE APPROACHES", color: theme.pivot };
    }
    if (frame < 397) {
      return { text: "1. BRUTE FORCE · O(n³)", color: theme.warn };
    }
    if (frame < 557) {
      return { text: "2. SORT + SCAN · O(n log n)", color: theme.better };
    }
    if (frame < 1000) {
      return { text: "3. OPTIMAL · THE x - 1 RULE", color: theme.good };
    }
    if (frame < 1436) {
      return { text: "TRANSFERABLE HEURISTIC", color: theme.cyan };
    }
    if (frame < 1659) {
      return { text: "ROADMAP · QUESTION 10 COMPLETE", color: theme.good };
    }
    return { text: "ROADMAP · QUESTION 11 UP NEXT", color: theme.pivot };
  }, [frame]);

  // ===========================================================================
  // ACT 0: LESSON COMPLETE → THREE-APPROACH JOURNEY SHELL (F0 – F140)
  // ===========================================================================
  const act0TitleProg = interpolate(frame, [40, 84], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act0DoneCheckProg = interpolate(frame, [84, 104], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act0RailProg = interpolate(frame, [115, 140], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ===========================================================================
  // ACT 1: BRUTE FORCE RECAP (F160 – F377)
  // ===========================================================================
  const act1Active = frame >= 140 && frame < 397;
  const bruteStartMarkers = interpolate(frame, [189, 238], [0, 5], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const bruteScanProgress = interpolate(frame, [238, 289], [0, 4], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const bruteBigOProg = interpolate(frame, [346, 377], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Small cubic curve for brute stop
  const bruteCubicPoints: [number, number][] = useMemo(() => [
    [0, 100],
    [30, 95],
    [60, 75],
    [90, 40],
    [110, 10],
  ], []);

  // ===========================================================================
  // ACT 2: BETTER / SORT + SCAN RECAP (F397 – F542)
  // ===========================================================================
  const act2Active = frame >= 397 && frame < 557;
  const sortLatticeProg = interpolate(frame, [422, 451], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const sortScanBeadProg = interpolate(frame, [451, 485], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const sortBigOProg = interpolate(frame, [494, 530], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Small n log n curve for sort stop
  const sortNlognPoints: [number, number][] = useMemo(() => [
    [0, 100],
    [35, 80],
    [70, 55],
    [105, 30],
  ], []);

  // ===========================================================================
  // ACT 3 & 4: OPTIMAL HASHSET & THE RULE: x - 1 EXISTS? (F557 – F1000)
  // ===========================================================================
  const act3Active = frame >= 557 && frame < 1000;
  const hashFieldSettleProg = interpolate(frame, [580, 615], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const candidateXProg = interpolate(frame, [635, 680], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Rule Build: x - 1 ? (F716..F758)
  const queryBuildProg = interpolate(frame, [716, 750], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // YES branch: Skip (F775..F851)
  const yesBranchProg = interpolate(frame, [775, 810], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const skipFoldProg = interpolate(frame, [811, 840], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // NO branch: Start & Walk (F874..F978)
  const noBranchProg = interpolate(frame, [874, 905], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const startPadProg = interpolate(frame, [912, 939], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const walkForwardProg = interpolate(frame, [939, 978], [0, 2], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ===========================================================================
  // ACT 5: COMPLEXITY & TRANSFERABLE HEURISTIC (F1000 – F1435)
  // ===========================================================================
  const act5Active = frame >= 1000 && frame < 1436;
  const act5TimeProg = interpolate(frame, [1033, 1065], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act5SpaceProg = interpolate(frame, [1084, 1120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transferable heuristic: Unsorted array -> Fast Membership -> Real Start
  const unsortedArrayProg = interpolate(frame, [1159, 1195], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fastMembershipProg = interpolate(frame, [1284, 1315], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const realStartProg = interpolate(frame, [1340, 1380], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Morph to Roadmap: F1403..F1436
  const roadmapFadeInProg = interpolate(frame, [1403, 1436], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  // ===========================================================================
  // ACT 6 & 7: MASTER ROADMAP UI (F1436 – F1832)
  // ===========================================================================
  const isRoadmapVisible = frame >= 1410;

  // Question 10 completion exact trigger on "Complete." (F1488)
  const isQ010Completed = frame >= 1488;
  const q010CheckDraw = interpolate(frame, [1488, 1506], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });
  const q010CompletePulse = isQ010Completed ? pop(frame, 1488, 22, 1.15) : 1.0;

  // Global Progress Counter: 9 -> 10 rolls exactly at F1579..F1598
  const isCounterFlippedGlobal = frame >= 1579;
  const globalProgressValue = useMemo(() => {
    if (frame < 1579) return 9;
    return interpolate(frame, [1579, 1598], [9, 10], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  }, [frame]);
  const globalPulse = isCounterFlippedGlobal ? pop(frame, 1579, 22, 1.25) : 1.0;

  // Pattern Counter: 9 -> 10 rolls at F1579
  const patternCountVal = isCounterFlippedGlobal ? 10 : 9;

  // Stay inside Arrays & Hashing spotlight: F1659..F1747
  const isPatternHighlight = frame >= 1659;

  // Smooth scroll up by 66px when continuing to question 11 (F1747..F1785)
  const roadmapListScrollProg = interpolate(frame, [1747, 1785], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });
  const roadmapListTranslateY = -roadmapListScrollProg * 66;

  // Right Rail: glides 010 -> 011 at F1769..F1795
  const railMarkerPos = useMemo(() => {
    if (frame < 1769) return 102; // Problem 010 rail position
    return interpolate(frame, [1769, 1795], [102, 116], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
  }, [frame]);

  // Question 11 UP NEXT activation: F1794..F1832
  const isQ011Activating = frame >= 1794;
  const q011Pulse = isQ011Activating ? pop(frame, 1794, 18, 1.05) : 1.0;

  // ===========================================================================
  // RENDER
  // ===========================================================================
  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        backgroundColor: theme.boardBg,
        position: "relative",
        overflow: "hidden",
        color: theme.chalkText,
        fontFamily: fonts.hand,
      }}
    >
      {/* Sound narration */}
      <Audio src={staticFile("audio/010/13-recap.mp3")} />

      {/* Chalkboard textures base */}
      <ChalkboardBackground />
      <ChalkFilters />

      {/* ===================================================================== */}
      {/* RECAP PHASE (F0 – F1435)                                             */}
      {/* ===================================================================== */}
      {frame < 1445 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 1 - roadmapFadeInProg,
            pointerEvents: "none",
            zIndex: 10,
          }}
        >
          {/* Top Pill Badge */}
          <div
            style={{
              position: "absolute",
              top: 32,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "8px 26px",
              borderRadius: 24,
              background: "rgba(0, 0, 0, 0.35)",
              border: `1.5px solid ${badgeInfo.color}`,
              boxShadow: `0 0 16px ${badgeInfo.color}33`,
              zIndex: 40,
            }}
          >
            <span style={{ fontSize: 18, color: badgeInfo.color }}>✦</span>
            <span
              style={{
                fontFamily: fonts.sans,
                fontSize: 19,
                fontWeight: 700,
                letterSpacing: "0.14em",
                color: badgeInfo.color,
                textTransform: "uppercase",
              }}
            >
              {badgeInfo.text}
            </span>
          </div>

          {/* Act 0 Header: Longest Consecutive Sequence is done. (F0..F140) */}
          <div
            style={{
              position: "absolute",
              top: 120,
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div
              style={{
                fontSize: 52,
                fontWeight: 700,
                color: theme.chalkText,
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <span>Longest Consecutive Sequence</span>
              {act0DoneCheckProg > 0 && (
                <span
                  style={{
                    color: theme.good,
                    fontSize: 48,
                    textShadow: `0 0 18px ${theme.good}`,
                  }}
                >
                  ✓
                </span>
              )}
            </div>

            {/* Three Stops Journey Rail */}
            {act0RailProg > 0 && (
              <div
                style={{
                  marginTop: 18,
                  display: "flex",
                  alignItems: "center",
                  gap: 32,
                }}
              >
                {/* Stop 1: Brute */}
                <div
                  style={{
                    padding: "8px 22px",
                    borderRadius: 16,
                    background:
                      frame >= 160 && frame < 397
                        ? "rgba(255, 118, 117, 0.2)"
                        : "rgba(255, 255, 255, 0.05)",
                    border: `1.5px solid ${
                      frame >= 160 && frame < 397 ? theme.warn : "rgba(255,255,255,0.2)"
                    }`,
                    color: frame >= 160 ? theme.warn : theme.chalkDim,
                    fontFamily: fonts.mono,
                    fontSize: 22,
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                  }}
                >
                  1. BRUTE {frame >= 346 ? "· O(n³)" : ""}
                </div>

                <span style={{ color: theme.chalkDim, fontSize: 24 }}>──►</span>

                {/* Stop 2: Better */}
                <div
                  style={{
                    padding: "8px 22px",
                    borderRadius: 16,
                    background:
                      frame >= 397 && frame < 557
                        ? "rgba(255, 169, 77, 0.2)"
                        : "rgba(255, 255, 255, 0.05)",
                    border: `1.5px solid ${
                      frame >= 397 && frame < 557 ? theme.better : "rgba(255,255,255,0.2)"
                    }`,
                    color: frame >= 397 ? theme.better : theme.chalkDim,
                    fontFamily: fonts.mono,
                    fontSize: 22,
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                  }}
                >
                  2. SORT + SCAN {frame >= 494 ? "· O(n log n)" : ""}
                </div>

                <span style={{ color: theme.chalkDim, fontSize: 24 }}>──►</span>

                {/* Stop 3: Optimal */}
                <div
                  style={{
                    padding: "8px 22px",
                    borderRadius: 16,
                    background:
                      frame >= 557
                        ? "rgba(60, 229, 167, 0.2)"
                        : "rgba(255, 255, 255, 0.05)",
                    border: `1.5px solid ${
                      frame >= 557 ? theme.good : "rgba(255,255,255,0.2)"
                    }`,
                    color: frame >= 557 ? theme.good : theme.chalkDim,
                    fontFamily: fonts.mono,
                    fontSize: 22,
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                  }}
                >
                  3. HASHSET + STARTS {frame >= 1033 ? "· expected O(n)" : ""}
                </div>
              </div>
            )}
          </div>

          {/* ACT 1: BRUTE FORCE DETAIL STAGE (F160..F397) */}
          {act1Active && (
            <div
              style={{
                position: "absolute",
                top: 310,
                left: "50%",
                transform: "translateX(-50%)",
                width: 1040,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 28,
              }}
            >
              <div style={{ fontSize: 36, color: theme.warn }}>
                Brute Force · Start from every number & repeatedly search list
              </div>

              {/* Mini array with multiple start arrows and repeated scan overlays */}
              <div style={{ display: "flex", gap: 18 }}>
                {[8, 1, 6, 3, 2, 4].map((num, i) => {
                  const hasStartMarker = bruteStartMarkers >= i;
                  return (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <div
                        style={{
                          width: 80,
                          height: 86,
                          borderRadius: 14,
                          background: "rgba(255, 118, 117, 0.12)",
                          border: `1.5px solid ${theme.warn}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: fonts.mono,
                          fontSize: 34,
                          color: theme.chalkText,
                        }}
                      >
                        {num}
                      </div>
                      {hasStartMarker && (
                        <span style={{ color: theme.warn, fontSize: 20 }}>▲ start</span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Scan residue label & Big-O */}
              <div style={{ display: "flex", alignItems: "center", gap: 36, marginTop: 10 }}>
                <span style={{ fontSize: 30, color: theme.chalkDim }}>
                  Repeated scan trails: worst case
                </span>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 48,
                    fontWeight: 800,
                    color: theme.warn,
                  }}
                >
                  {bruteBigOProg > 0 ? "O(n³)" : "..."}
                </span>
              </div>
            </div>
          )}

          {/* ACT 2: BETTER / SORT + SCAN DETAIL STAGE (F397..F557) */}
          {act2Active && (
            <div
              style={{
                position: "absolute",
                top: 310,
                left: "50%",
                transform: "translateX(-50%)",
                width: 1040,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 28,
              }}
            >
              <div style={{ fontSize: 36, color: theme.better }}>
                Better · Sort once to order, then scan adjacent neighbors
              </div>

              {/* Sorted array preview */}
              <div style={{ display: "flex", gap: 18 }}>
                {[1, 2, 3, 4, 6, 8].map((num, i) => (
                  <div
                    key={i}
                    style={{
                      width: 80,
                      height: 86,
                      borderRadius: 14,
                      background: "rgba(255, 169, 77, 0.14)",
                      border: `1.5px solid ${theme.better}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: fonts.mono,
                      fontSize: 34,
                      color: theme.better,
                    }}
                  >
                    {num}
                  </div>
                ))}
              </div>

              {/* Scan bead & Big-O */}
              <div style={{ display: "flex", alignItems: "center", gap: 36, marginTop: 10 }}>
                <span style={{ fontSize: 30, color: theme.chalkDim }}>
                  Ordering lattice overhead:
                </span>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 48,
                    fontWeight: 800,
                    color: theme.better,
                  }}
                >
                  {sortBigOProg > 0 ? "O(n log n)" : "..."}
                </span>
              </div>
            </div>
          )}

          {/* ACT 3 & 4: OPTIMAL HASHSET + THE RULE: x - 1 EXISTS? (F557..F1000) */}
          {act3Active && (
            <div
              style={{
                position: "absolute",
                top: 290,
                left: "50%",
                transform: "translateX(-50%)",
                width: 1240,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 22,
              }}
            >
              <div style={{ fontSize: 42, color: theme.good, fontWeight: 700 }}>
                The One Rule That Matters Most: Predecessor Gate
              </div>

              {/* Hero Predecessor Gate Diagram */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 32,
                  padding: "24px 48px",
                  borderRadius: 24,
                  background: "rgba(0, 0, 0, 0.45)",
                  border: `2px solid ${theme.good}`,
                  boxShadow: `0 0 28px ${theme.good}33`,
                }}
              >
                {/* Predecessor Query Socket */}
                <div
                  style={{
                    padding: "16px 28px",
                    borderRadius: 16,
                    background: "rgba(92, 225, 230, 0.12)",
                    border: `2px solid ${theme.cyan}`,
                    fontFamily: fonts.mono,
                    fontSize: 38,
                    color: theme.cyan,
                    fontWeight: 800,
                  }}
                >
                  [x - 1 in set?]
                </div>

                <span style={{ fontSize: 36, color: theme.pivot }}>◄──</span>

                {/* Candidate x */}
                <div
                  style={{
                    padding: "16px 36px",
                    borderRadius: 16,
                    background: "rgba(60, 229, 167, 0.16)",
                    border: `2px solid ${theme.good}`,
                    fontFamily: fonts.mono,
                    fontSize: 42,
                    color: theme.good,
                    fontWeight: 800,
                  }}
                >
                  x
                </div>
              </div>

              {/* Two Branch Morph States */}
              <div style={{ display: "flex", gap: 64, marginTop: 14 }}>
                {/* Branch 1: YES -> SKIP */}
                <div
                  style={{
                    padding: "16px 32px",
                    borderRadius: 16,
                    background:
                      yesBranchProg > 0
                        ? "rgba(216, 180, 226, 0.15)"
                        : "rgba(255,255,255,0.04)",
                    border: `1.5px solid ${yesBranchProg > 0 ? theme.purple : theme.chalkDim}`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                    opacity: yesBranchProg > 0 ? 1 : 0.4,
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 26, color: theme.cyan }}>
                    IF YES: x - 1 exists
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 32,
                      fontWeight: 800,
                      color: theme.purple,
                    }}
                  >
                    → NOT A START (SKIP IT)
                  </div>
                </div>

                {/* Branch 2: NO -> START + WALK */}
                <div
                  style={{
                    padding: "16px 32px",
                    borderRadius: 16,
                    background:
                      noBranchProg > 0
                        ? "rgba(60, 229, 167, 0.18)"
                        : "rgba(255,255,255,0.04)",
                    border: `1.5px solid ${noBranchProg > 0 ? theme.good : theme.chalkDim}`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                    opacity: noBranchProg > 0 ? 1 : 0.4,
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 26, color: theme.pivot }}>
                    IF NO: x - 1 absent
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 32,
                      fontWeight: 800,
                      color: theme.good,
                    }}
                  >
                    → START RUN & WALK FORWARD
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ACT 5: TRANSFERABLE HEURISTIC (F1000..F1435) */}
          {act5Active && (
            <div
              style={{
                position: "absolute",
                top: 290,
                left: "50%",
                transform: "translateX(-50%)",
                width: 1280,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 24,
              }}
            >
              {/* Formal Time & Space */}
              <div style={{ display: "flex", gap: 36 }}>
                <div
                  style={{
                    padding: "12px 28px",
                    borderRadius: 16,
                    background: "rgba(60, 229, 167, 0.12)",
                    border: `1.5px solid ${theme.good}`,
                    fontSize: 26,
                    fontFamily: fonts.mono,
                    color: theme.good,
                  }}
                >
                  EXPECTED TIME: {act5TimeProg > 0 ? "O(n)" : "..."}
                </div>
                <div
                  style={{
                    padding: "12px 28px",
                    borderRadius: 16,
                    background: "rgba(216, 180, 226, 0.12)",
                    border: `1.5px solid ${theme.purple}`,
                    fontSize: 26,
                    fontFamily: fonts.mono,
                    color: theme.purple,
                  }}
                >
                  EXTRA SPACE: {act5SpaceProg > 0 ? "O(n) (Hash Set)" : "..."}
                </div>
              </div>

              {/* Transferable Mental Model Callout */}
              <div
                style={{
                  marginTop: 18,
                  padding: "24px 52px",
                  borderRadius: 24,
                  background: "rgba(0, 0, 0, 0.45)",
                  border: `2px solid ${theme.cyan}`,
                  boxShadow: `0 0 24px ${theme.cyan}33`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <div style={{ fontSize: 32, color: theme.chalkDim, letterSpacing: "0.08em" }}>
                  WHEN UNSORTED ARRAY ASKS ABOUT CONSECUTIVE VALUES:
                </div>
                <div
                  style={{
                    fontSize: 44,
                    fontWeight: 800,
                    color: theme.pivot,
                    display: "flex",
                    gap: 20,
                    alignItems: "center",
                  }}
                >
                  <span>1. FAST MEMBERSHIP (SET)</span>
                  <span style={{ color: theme.cyan }}>→</span>
                  <span style={{ color: theme.good }}>2. FIND REAL START (x - 1)</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ===================================================================== */}
      {/* MASTER ROADMAP UI (F1436 – F1832)                                    */}
      {/* ===================================================================== */}
      {isRoadmapVisible && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: roadmapFadeInProg,
            pointerEvents: "none",
            zIndex: 30,
          }}
        >
          {/* ----------------------------------------------------------------- */}
          {/* PERSISTENT STICKY TOP BAR (x: 56, top: 28, width: 1808, height: 76)*/}
          {/* ----------------------------------------------------------------- */}
          <div
            style={{
              position: "absolute",
              left: 56,
              top: 28,
              width: 1808,
              height: 76,
              backgroundColor: "rgba(25, 82, 60, 0.94)",
              borderBottom: "2px solid rgba(232, 228, 213, 0.35)",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 28px",
              zIndex: 50,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.35)",
            }}
          >
            {/* Brand Left */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 34,
                  color: theme.chalkText,
                  fontWeight: "bold",
                  letterSpacing: 1.5,
                }}
              >
                CODE WITH ANIMATION
              </span>
            </div>

            {/* Center Title */}
            <div style={{ textAlign: "center" }}>
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 22,
                  letterSpacing: 3,
                  color: theme.chalkText,
                  fontWeight: "bold",
                }}
              >
                DSA PATTERN ROADMAP
              </span>
            </div>

            {/* Right Course Progress: rolls 9 -> 10 at F1579 */}
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 16,
                  color: theme.chalkDim,
                  letterSpacing: 1.2,
                }}
              >
                227 PROBLEMS · 19 PATTERNS
              </span>

              {/* Course Complete Badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "5px 14px",
                  borderRadius: 16,
                  border: `1.5px solid ${theme.good}`,
                  backgroundColor: "rgba(60, 229, 167, 0.16)",
                  boxShadow: isCounterFlippedGlobal ? `0 0 20px ${theme.good}` : "none",
                  transform: `scale(${globalPulse})`,
                }}
              >
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 18,
                    color: theme.good,
                    fontWeight: "bold",
                  }}
                >
                  {Math.round(globalProgressValue)} / 227 COMPLETE
                </span>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------------------- */}
          {/* PERSISTENT LEFT PATTERN NAVIGATOR (x: 54, top: 126, w: 260, h: 750)*/}
          {/* ----------------------------------------------------------------- */}
          <div
            style={{
              position: "absolute",
              left: 54,
              top: 126,
              width: 260,
              height: 750,
              backgroundColor: "rgba(25, 82, 60, 0.55)",
              borderRight: "2px solid rgba(232, 228, 213, 0.25)",
              borderRadius: 8,
              padding: "12px 14px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              gap: 3,
              zIndex: 35,
            }}
          >
            <div
              style={{
                fontSize: 15,
                color: isPatternHighlight ? theme.pivot : theme.chalkDim,
                letterSpacing: 1.5,
                marginBottom: 6,
                fontFamily: fonts.mono,
                fontWeight: "bold",
              }}
            >
              19 COURSE PATTERNS
            </div>

            {PATTERNS_DATA.map((pat) => {
              const isPattern01 = pat.id === 1;

              return (
                <div
                  key={pat.numStr}
                  style={{
                    height: 33,
                    display: "flex",
                    alignItems: "center",
                    padding: "0 8px",
                    borderRadius: 6,
                    backgroundColor: isPattern01
                      ? "rgba(255, 209, 102, 0.18)"
                      : "transparent",
                    border: isPattern01
                      ? `1.5px solid ${theme.pivot}`
                      : "1px solid transparent",
                    gap: 10,
                    whiteSpace: "nowrap",
                    transform: isPattern01 && isPatternHighlight ? "scale(1.02)" : "scale(1.0)",
                    transformOrigin: "left center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 15,
                      color: isPattern01 ? theme.pivot : theme.chalkDim,
                      fontWeight: "bold",
                    }}
                  >
                    {pat.numStr}
                  </span>
                  <span
                    style={{
                      fontSize: 17,
                      color: isPattern01 ? theme.chalkText : theme.chalkDim,
                      fontWeight: isPattern01 ? "bold" : "normal",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {pat.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* ----------------------------------------------------------------- */}
          {/* MAIN ROADMAP VIEWPORT (x: 338, top: 126, width: 1450, h: 750)     */}
          {/* ----------------------------------------------------------------- */}
          <div
            style={{
              position: "absolute",
              left: 338,
              top: 126,
              width: 1450,
              height: 750,
              overflow: "hidden",
              zIndex: 20,
            }}
          >
            {/* STICKY PATTERN 01 HEADER (H: 88px) */}
            <div
              style={{
                position: "absolute",
                left: 20,
                top: 0,
                width: 1410,
                height: 88,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: isPatternHighlight
                  ? "rgba(255, 209, 102, 0.18)"
                  : "rgba(25, 82, 60, 0.95)",
                borderRadius: 10,
                border: isPatternHighlight
                  ? `2px solid ${theme.pivot}`
                  : "2px solid rgba(232, 228, 213, 0.35)",
                padding: "0 28px",
                boxShadow: isPatternHighlight
                  ? "0 0 25px rgba(255, 209, 102, 0.3)"
                  : "0 3px 12px rgba(0,0,0,0.25)",
                zIndex: 30,
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 28,
                    color: theme.pivot,
                    fontWeight: "bold",
                  }}
                >
                  PATTERN 01
                </span>
                <span style={{ fontSize: 34, fontWeight: "bold", color: theme.chalkText }}>
                  Arrays & Hashing
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                <span style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.chalkDim }}>
                  18 PROBLEMS
                </span>
                <span style={{ color: "rgba(232, 228, 213, 0.35)", fontSize: 18 }}>·</span>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 18,
                    color: theme.good,
                    fontWeight: "bold",
                  }}
                >
                  {patternCountVal} / 18 COMPLETED
                </span>
              </div>
            </div>

            {/* STACKED PROBLEM ROWS */}
            <div
              style={{
                position: "absolute",
                left: 20,
                top: 96,
                width: 1410,
                height: 654,
                overflow: "hidden",
                zIndex: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  transform: `translateY(${roadmapListTranslateY}px)`,
                }}
              >
                {PATTERNS_DATA[0].problems.slice(0, 11).map((prob) => {
                  const isProb010 = prob.globalNum === 10;
                  const isProb011 = prob.globalNum === 11;
                  const isCompleted = prob.globalNum <= 9 || (isProb010 && isQ010Completed);
                  const isNowActive = isProb010 && !isQ010Completed;
                  const isUpNext = isProb011 && isQ011Activating;

                  // Problem 011 fade-in during scroll
                  const q011Opacity = isProb011
                    ? interpolate(frame, [1747, 1785], [0.35, 1.0], {
                        extrapolateLeft: "clamp",
                        extrapolateRight: "clamp",
                      })
                    : 1.0;

                  return (
                    <div
                      key={prob.globalNum}
                      style={{
                        height: 58,
                        backgroundColor: isNowActive
                          ? "rgba(255, 209, 102, 0.16)"
                          : isUpNext
                          ? "rgba(255, 209, 102, 0.22)"
                          : isCompleted
                          ? "rgba(60, 229, 167, 0.1)"
                          : theme.cardBg,
                        borderRadius: 8,
                        border: `1.5px solid ${
                          isNowActive || isUpNext
                            ? theme.pivot
                            : isCompleted
                            ? "rgba(60, 229, 167, 0.35)"
                            : "rgba(232, 228, 213, 0.18)"
                        }`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0 20px",
                        boxShadow:
                          isNowActive || isUpNext
                            ? "0 0 20px rgba(255, 209, 102, 0.4)"
                            : "none",
                        transform: isProb010
                          ? `scale(${q010CompletePulse})`
                          : isProb011 && isUpNext
                          ? `scale(${q011Pulse})`
                          : "none",
                        opacity: q011Opacity,
                        position: "relative",
                      }}
                    >
                      {/* Left Number & Title */}
                      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                        {/* Status Dot */}
                        <div
                          style={{
                            width: 28,
                            height: 28,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: isCompleted
                              ? theme.good
                              : isNowActive || isUpNext
                              ? theme.pivot
                              : "rgba(248, 246, 240, 0.1)",
                            color: isCompleted
                              ? theme.boardBg
                              : isNowActive || isUpNext
                              ? theme.boardBg
                              : theme.chalkDim,
                            fontFamily: fonts.mono,
                            fontWeight: "bold",
                            fontSize: 15,
                          }}
                        >
                          {isCompleted ? (
                            isProb010 ? (
                              <svg width={20} height={20} viewBox="0 0 20 20" style={{ overflow: "visible" }}>
                                <path
                                  d="M4 10.5 L8 14.5 L16 6.5"
                                  fill="none"
                                  stroke={theme.boardBg}
                                  strokeWidth={2.8}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeDasharray={20}
                                  strokeDashoffset={20 * (1 - q010CheckDraw)}
                                />
                              </svg>
                            ) : (
                              "✓"
                            )
                          ) : isNowActive ? (
                            "●"
                          ) : isUpNext ? (
                            "▶"
                          ) : (
                            "○"
                          )}
                        </div>

                        <span
                          style={{
                            fontFamily: fonts.mono,
                            fontSize: 16,
                            color: isNowActive || isUpNext ? theme.pivot : theme.chalkDim,
                            fontWeight: isNowActive || isUpNext ? "bold" : "normal",
                          }}
                        >
                          {String(prob.globalNum).padStart(3, "0")}
                        </span>

                        <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                          <span
                            style={{
                              fontSize: 22,
                              color: isCompleted || isNowActive || isUpNext ? theme.chalkText : theme.chalkDim,
                              fontWeight: isNowActive || isUpNext ? "bold" : "normal",
                            }}
                          >
                            {prob.title}
                          </span>
                          {isProb011 && (
                            <span
                              style={{
                                fontFamily: fonts.mono,
                                fontSize: 15,
                                color: isUpNext ? theme.cyan : theme.chalkDim,
                                opacity: isUpNext ? 0.95 : 0.6,
                              }}
                            >
                              · Dutch National Flag
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Right Metadata */}
                      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                        <span
                          style={{
                            fontFamily: fonts.mono,
                            fontSize: 14,
                            color: theme.chalkDim,
                          }}
                        >
                          LC {prob.lcNumber}
                        </span>

                        <span
                          style={{
                            fontFamily: fonts.mono,
                            fontSize: 14,
                            fontWeight: "bold",
                            color:
                              prob.difficulty === "Easy"
                                ? theme.good
                                : prob.difficulty === "Medium"
                                ? theme.pivot
                                : theme.warn,
                          }}
                        >
                          {prob.difficulty}
                        </span>

                        {/* Status Label Badge */}
                        {isNowActive && (
                          <div
                            style={{
                              padding: "2px 10px",
                              borderRadius: 12,
                              background: theme.pivot,
                              color: theme.boardBg,
                              fontFamily: fonts.mono,
                              fontWeight: "bold",
                              fontSize: 13,
                            }}
                          >
                            NOW ACTIVE
                          </div>
                        )}
                        {isProb010 && isQ010Completed && (
                          <div
                            style={{
                              padding: "2px 10px",
                              borderRadius: 12,
                              background: theme.good,
                              color: theme.boardBg,
                              fontFamily: fonts.mono,
                              fontWeight: "bold",
                              fontSize: 13,
                            }}
                          >
                            COMPLETE
                          </div>
                        )}
                        {isUpNext && (
                          <div
                            style={{
                              padding: "2px 10px",
                              borderRadius: 12,
                              background: theme.pivot,
                              color: theme.boardBg,
                              fontFamily: fonts.mono,
                              fontWeight: "bold",
                              fontSize: 13,
                              boxShadow: `0 0 14px ${theme.pivot}`,
                            }}
                          >
                            UP NEXT
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------------------- */}
          {/* RIGHT GLOBAL PROGRESS RAIL (x: 1815, top: 140, w: 30, h: 720)      */}
          {/* ----------------------------------------------------------------- */}
          <div
            style={{
              position: "absolute",
              left: 1815,
              top: 140,
              width: 30,
              height: 720,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              zIndex: 35,
            }}
          >
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 13,
                color: theme.chalkDim,
                fontWeight: "bold",
              }}
            >
              001
            </span>

            {/* Vertical Meter Rail */}
            <div
              style={{
                position: "relative",
                width: 4,
                height: 640,
                backgroundColor: "rgba(232, 228, 213, 0.2)",
                borderRadius: 2,
              }}
            >
              {/* Active Indicator Thumb (glides from 010 to 011 at F1769–F1795) */}
              <div
                style={{
                  position: "absolute",
                  left: -4,
                  top: `${railMarkerPos}px`,
                  width: 12,
                  height: 38,
                  backgroundColor: theme.pivot,
                  borderRadius: 4,
                  boxShadow: "0 0 12px rgba(255, 209, 102, 0.6)",
                }}
              />
            </div>

            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 13,
                color: theme.chalkDim,
                fontWeight: "bold",
              }}
            >
              227
            </span>
          </div>
        </div>
      )}

      {/* CAPTIONS SAFE ZONE (Y: 960..1040) */}
      <Captions words={captionWords} bottom={38} fontSize={38} />
    </div>
  );
};
