import React, { useMemo } from "react";
import { useCurrentFrame, interpolate, spring, staticFile, Audio, useVideoConfig } from "remotion";
import { theme, fonts } from "../../../../kit/lib/theme";
import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { ChalkDust } from "../../../../kit/components/ChalkDust";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import syncData from "../sync/08-why-better.json";

// Raw master array & sorted unique values
// Raw: [8, 1, 6, 3, 2, 2, 4, 10, 9, 11, -1, 0]
// Sorted (Scene 07 ending): [-1, 0, 1, 2, 2, 3, 4, 6, 8, 9, 10, 11] (12 elements)
const SORTED_ARRAY = [-1, 0, 1, 2, 2, 3, 4, 6, 8, 9, 10, 11];

// HashSet unordered unique values (11 elements, deduplicated 2)
const HASHSET_VALUES = [8, -1, 3, 10, 0, 2, 6, 11, 4, 9, 1];

// Sequence Island values for Acts 7-8: -1, 0, 1, 2, 3, 4 (length 6)
const ISLAND_VALUES = [-1, 0, 1, 2, 3, 4];

// Layout constants for 12-element sorted row (optical center 1080p canvas)
const CARD_WIDTH = 92;
const CARD_HEIGHT = 108;
const CARD_GAP = 16;
const TOTAL_ROW_WIDTH = 12 * CARD_WIDTH + 11 * CARD_GAP; // 1280px
const ROW_START_X = (1920 - TOTAL_ROW_WIDTH) / 2; // 320px
const BASE_Y = 360;

export const Scene08WhyBetter: React.FC = () => {
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
  // Top Badge Text & Theme by Act
  // ----------------------------------------------------
  const topBadgeInfo = useMemo(() => {
    if (frame < 125) {
      return { text: "BETTER APPROACH · SCAN VERIFICATION", color: theme.better, icon: "⚡" };
    }
    if (frame < 301) {
      return { text: "HIDDEN COST · THE SORTING TAX", color: theme.warn, icon: "⚠" };
    }
    if (frame < 491) {
      return { text: "COMPLEXITY MISMATCH · TARGET O(n)", color: theme.warn, icon: "⏱" };
    }
    if (frame < 588) {
      return { text: "DISCOVERY · WHAT DID SORTING BUY US?", color: theme.pivot, icon: "💡" };
    }
    if (frame < 729) {
      return { text: "THE CORE NEED · DOES NEXT VALUE EXIST?", color: theme.cyan, icon: "🔍" };
    }
    if (frame < 895) {
      return { text: "QUESTIONING FULL ORDER · DO WE NEED SORTING?", color: theme.warn, icon: "✂" };
    }
    if (frame < 1024) {
      return { text: "HASH SET · FAST EXISTENCE CHECKS", color: theme.purple, icon: "⚡" };
    }
    if (frame < 1305) {
      return { text: "ONE DANGER · REPEATED WALKS", color: theme.warn, icon: "⚠" };
    }
    return { text: "THE REAL QUESTION · WHERE DOES IT BEGIN?", color: theme.pivot, icon: "❓" };
  }, [frame]);

  // =========================================================================
  // ACT 0: F0–F124 — "This solution is correct. The scan itself is O of n."
  // =========================================================================
  // Code fade out from Scene 07 continuity
  const act0CodeFade = interpolate(frame, [0, 32], [0.85, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act0CodeScale = interpolate(frame, [0, 32], [1, 0.85], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // F29: Spoken "correct" -> checkmark appears
  const act0CheckProgress = interpolate(frame, [28, 42], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // F53..F80: Scan bead travels left -> right over sorted rail
  const act0BeadProgress = interpolate(frame, [53, 80], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act0BeadX = ROW_START_X + act0BeadProgress * (TOTAL_ROW_WIDTH - CARD_WIDTH / 2);

  // F88..F112: "O of n." text reveal
  const act0ScanOProgress = interpolate(frame, [88, 112], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Scan linear curve drawing on small graph
  const act0GraphProgress = interpolate(frame, [88, 112], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // =========================================================================
  // ACT 1: F125–F300 — "But before scanning, we sorted the array. Sorting costs O of n log n."
  // =========================================================================
  // Rail lifts upward ~50px
  const act1RailLift = interpolate(frame, [125, 152], [0, -50], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Faint ordering layers appear (F152..F173)
  const act1LatticeFade = interpolate(frame, [152, 173, 219, 235], [0, 0.45, 0.45, 0.9], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // F173..F204: Cards detach slightly and criss-cross sorting flight
  const act1SortFlightProgress = interpolate(frame, [173, 192, 204], [0, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // F240..F291: "O of n log n" text reveal
  const act1NlogNProgress = interpolate(frame, [240, 274], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // =========================================================================
  // ACT 2: F301–F490 — "So overall, O of n log n. The question asks for O of n."
  // =========================================================================
  // Target O(n) reveal: F414..F476
  const act2TargetProgress = interpolate(frame, [414, 464], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Overshoot warning: F476..F491
  const act2WarnProgress = interpolate(frame, [476, 491], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Act 0-2 Complexity Container fade out during Act 3 (F491..F520)
  const complexityPanelFade = interpolate(frame, [491, 517], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // =========================================================================
  // ACT 3: F491–F587 — "Now think about what we actually needed from sorting."
  // =========================================================================
  // Rail returns to center
  const act3RailCenter = interpolate(frame, [491, 517], [-50, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Dim all cards except 8 and 9
  const act3CardsDim = interpolate(frame, [517, 545], [1, 0.12], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Arrow socket between 8 and 9
  const act3SocketProgress = interpolate(frame, [524, 550], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // =========================================================================
  // ACT 4: F588–F728 — "We only wanted to know, does the next value exist?"
  // =========================================================================
  // Isolated x and x+1 appear at optical center
  const act4IsolateFade = interpolate(frame, [588, 615], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Gate appearance between x and x+1 (F652..F685)
  const act4GateProgress = interpolate(frame, [652, 680], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // =========================================================================
  // ACT 5: F729–F894 — "Do we really need to arrange every number just for that? No."
  // =========================================================================
  // 7 symbolic values reappear on rigid ordered slots
  const act5NotchedFade = interpolate(frame, [729, 755], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Values lift / detach from rigid ordered baseline (F777..F834)
  const act5FloatLift = interpolate(frame, [777, 824], [0, -18], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Strike-through line on "TOTAL ORDER" at F856..F869 ("No.")
  const act5StrikeProgress = interpolate(frame, [856, 869], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Dissolve ordered grid (F869..F895)
  const act5DissolveGrid = interpolate(frame, [869, 894], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // =========================================================================
  // ACT 6: F895–F1023 — "A hash set can answer existence checks quickly on average."
  // =========================================================================
  // Unordered HashSet container appears
  const act6HashSetFade = interpolate(frame, [895, 915], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Move HashSet upward in Act 7
  const act6HashSetY = interpolate(frame, [1024, 1060], [280, 155], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act6HashSetOpacity = interpolate(frame, [1024, 1060], [1, 0.75], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Query 1: 8 checks 8+1 = 9 (F914..F955)
  const act6Query1Progress = interpolate(frame, [914, 945], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Found match 9 pulse (F955..F983) - only active during Act 6
  const act6Query1Found = frame < 1024
    ? interpolate(frame, [955, 980], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
    : 0;

  // Query 2: 4 checks 4+1 = 5 (F983..F1010)
  const act6Query2Progress = interpolate(frame, [983, 1005], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // =========================================================================
  // ACT 7: F1024–F1304 — "But there is still one danger. If we start walking..."
  // =========================================================================
  // Sequence Island container appears at bottom center (y: 540..680)
  const act7IslandFade = interpolate(frame, [1060, 1090], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Launch dots appear over all 6 nodes (F1111..F1150)
  const act7LaunchDotsFade = interpolate(frame, [1111, 1145], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Walk 1 from -1 (idx 0 to 5, length 6) (F1182..F1205)
  const act7Walk1Progress = interpolate(frame, [1182, 1205], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Walk 2 from 0 (idx 1 to 5, length 5) (F1194..F1225)
  const act7Walk2Progress = interpolate(frame, [1194, 1225], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Walk 3 from 1 (idx 2 to 5, length 4) (F1216..F1250)
  const act7Walk3Progress = interpolate(frame, [1216, 1250], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Walk 4 from 2 (idx 3 to 5, length 3) (F1246..F1275)
  const act7Walk4Progress = interpolate(frame, [1246, 1275], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Combined stack callout banner (F1250..F1315)
  const act7RedundantCallout = interpolate(frame, [1250, 1268], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // =========================================================================
  // ACT 8: F1305–F1481 — "So the real question is, how do we know where..."
  // =========================================================================
  // Walk ribbons retract (F1305..F1335)
  const act8RetractProgress = interpolate(frame, [1305, 1335], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 6 question marks appear above all 6 launch points (F1325..F1355)
  const act8QuestionMarksFade = interpolate(frame, [1325, 1355], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Dim the 6 question marks as the central mystery card appears (F1372..F1410)
  const act8MarksDim = interpolate(frame, [1372, 1400], [1, 0.35], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Central floating "START ?" card appears (F1380..F1420)
  const act8StartCardProgress = spring({
    frame: frame - 1380,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  // Vertical connection arrow from HashSet to START ? (F1435..F1465)
  const act8VerticalArrowProgress = interpolate(frame, [1435, 1465], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        backgroundColor: theme.boardBg,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Chalkboard filter primitives & dust grain background from kit */}
      <ChalkFilters />
      <ChalkboardBackground />

      {/* Audio Voiceover Track */}
      <Audio src={staticFile("audio/010/08-why-better.mp3")} />

      {/* ========================================================================= */}
      {/* TOP HEADER & BADGES (Y: 28..70)                                           */}
      {/* ========================================================================= */}
      <div
        style={{
          position: "absolute",
          top: 28,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "8px 26px",
            borderRadius: 20,
            backgroundColor: "rgba(10, 36, 25, 0.92)",
            border: `1.5px solid ${topBadgeInfo.color}`,
            boxShadow: `0 4px 20px rgba(0, 0, 0, 0.4), 0 0 15px ${topBadgeInfo.color}33`,
          }}
        >
          <span style={{ fontSize: 18 }}>{topBadgeInfo.icon}</span>
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 15,
              fontWeight: 800,
              color: topBadgeInfo.color,
              letterSpacing: 2,
            }}
          >
            {topBadgeInfo.text}
          </span>
          <span style={{ color: theme.chalkDim, fontSize: 13 }}>|</span>
          <span
            style={{
              fontFamily: fonts.hand,
              fontSize: 20,
              color: theme.chalkText,
              letterSpacing: 0.5,
            }}
          >
            Longest Consecutive Sequence
          </span>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 34,
          right: 65,
          fontFamily: fonts.mono,
          fontSize: 14,
          color: theme.chalkDim,
          letterSpacing: 1.2,
          zIndex: 40,
        }}
      >
        LC128 · WHY-NOT DISCOVERY
      </div>

      {/* ========================================================================= */}
      {/* ACT 0: CONTINUITY CODE RECEDING (F0..F35)                                 */}
      {/* ========================================================================= */}
      {act0CodeFade > 0 && (
        <div
          style={{
            position: "absolute",
            left: 70,
            top: 240,
            width: 380,
            padding: "16px 20px",
            borderRadius: 14,
            backgroundColor: "rgba(10, 36, 25, 0.85)",
            border: "1px solid rgba(248, 246, 240, 0.15)",
            opacity: act0CodeFade,
            transform: `scale(${act0CodeScale})`,
            zIndex: 10,
            fontFamily: fonts.mono,
            fontSize: 14,
            color: theme.chalkDim,
            lineHeight: 1.6,
          }}
        >
          <div style={{ color: theme.better, fontWeight: 700, marginBottom: 8 }}>
            # Scene 07: Python Linear Scan
          </div>
          <div>nums.sort()</div>
          <div>for i in range(1, len(nums)):</div>
          <div style={{ paddingLeft: 16 }}>if nums[i] == nums[i-1]: continue</div>
          <div style={{ paddingLeft: 16 }}>elif nums[i] == nums[i-1] + 1:</div>
          <div style={{ paddingLeft: 32 }}>curr += 1</div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ACTS 0..3: SORTED ARRAY BAR & SORTING TAX (F0..F587)                      */}
      {/* ========================================================================= */}
      {frame < 588 && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: BASE_Y + (frame < 491 ? act1RailLift : act3RailCenter),
            height: 280,
            zIndex: 20,
          }}
        >
          {/* Rail Header / Status */}
          <div
            style={{
              position: "absolute",
              left: ROW_START_X,
              top: -45,
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 18,
                fontWeight: 700,
                color: theme.better,
                letterSpacing: 1,
              }}
            >
              SORTED ARRAY (Scene 07 Result)
            </span>
            <span
              style={{
                fontFamily: fonts.hand,
                fontSize: 22,
                color: theme.chalkDim,
              }}
            >
              nums.sort() · 12 elements
            </span>

            {/* F29: "This solution is correct." green checkmark */}
            {act0CheckProgress > 0 && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "4px 14px",
                  borderRadius: 12,
                  backgroundColor: "rgba(60, 229, 167, 0.15)",
                  border: `1.5px solid ${theme.good}`,
                  opacity: act0CheckProgress,
                  transform: `scale(${interpolate(act0CheckProgress, [0, 1], [0.8, 1])})`,
                }}
              >
                <span style={{ color: theme.good, fontSize: 18, fontWeight: "bold" }}>✓</span>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 14,
                    fontWeight: 700,
                    color: theme.good,
                    letterSpacing: 1,
                  }}
                >
                  CORRECT SOLUTION
                </span>
              </div>
            )}
          </div>

          {/* 12 Array Cards */}
          <div
            style={{
              position: "absolute",
              left: ROW_START_X,
              top: 0,
              display: "flex",
              gap: CARD_GAP,
            }}
          >
            {SORTED_ARRAY.map((val, idx) => {
              // Dimming in Act 3 except values 8 and 9 (indices 8 and 9 in sorted array)
              const isFocalTrio = val === 8 || val === 9;
              const cardOpacity = frame >= 517 ? (isFocalTrio ? 1 : act3CardsDim) : 1;
              const isDuplicate = idx === 4 && val === 2;

              // Sorting criss-cross displacement in Act 1 (F173..F204)
              const waveOffset = Math.sin(idx * 1.2 + frame * 0.2) * 22 * act1SortFlightProgress;

              return (
                <div
                  key={idx}
                  style={{
                    width: CARD_WIDTH,
                    height: CARD_HEIGHT,
                    borderRadius: 14,
                    backgroundColor: isFocalTrio && frame >= 517
                      ? "rgba(255, 209, 102, 0.22)"
                      : theme.cardBg,
                    border: `2px solid ${
                      isFocalTrio && frame >= 517
                        ? theme.pivot
                        : isDuplicate
                        ? theme.purple
                        : theme.cardBorder
                    }`,
                    boxShadow: isFocalTrio && frame >= 517
                      ? `0 0 20px rgba(255, 209, 102, 0.4)`
                      : "0 6px 16px rgba(0, 0, 0, 0.3)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: cardOpacity,
                    transform: `translateY(${waveOffset}px)`,
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 38,
                      fontWeight: "bold",
                      color: isFocalTrio && frame >= 517
                        ? theme.pivot
                        : isDuplicate
                        ? theme.purple
                        : theme.cardText,
                    }}
                  >
                    {val}
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      bottom: 6,
                      fontFamily: fonts.mono,
                      fontSize: 12,
                      color: theme.chalkDim,
                    }}
                  >
                    [{idx}]
                  </span>
                </div>
              );
            })}
          </div>

          {/* Act 0: Forward Scan Mint Trail and Bead (F53..F80) */}
          {frame >= 53 && frame < 152 && (
            <>
              {/* Mint trail under cards */}
              <div
                style={{
                  position: "absolute",
                  left: ROW_START_X,
                  top: CARD_HEIGHT + 8,
                  width: act0BeadX - ROW_START_X,
                  height: 4,
                  backgroundColor: theme.good,
                  boxShadow: `0 0 12px ${theme.good}`,
                  borderRadius: 2,
                }}
              />
              {/* Scan Bead */}
              <div
                style={{
                  position: "absolute",
                  left: act0BeadX - 10,
                  top: CARD_HEIGHT + 2,
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  backgroundColor: theme.good,
                  boxShadow: `0 0 18px ${theme.good}, 0 0 30px #ffffff`,
                  zIndex: 25,
                }}
              />
            </>
          )}

          {/* Act 1: The Hidden Sorting Tax Lattice Beneath the Rail (F152..F300) */}
          {act1LatticeFade > 0 && (
            <div
              style={{
                position: "absolute",
                left: ROW_START_X,
                top: CARD_HEIGHT + 28,
                width: TOTAL_ROW_WIDTH,
                opacity: act1LatticeFade,
              }}
            >
              {/* Criss-cross SVG lattice paths representing sorting comparisons */}
              <svg width={TOTAL_ROW_WIDTH} height={120} style={{ overflow: "visible" }}>
                {/* Horizontal work stages */}
                <line x1={0} y1={25} x2={TOTAL_ROW_WIDTH} y2={25} stroke={theme.chalkDim} strokeDasharray="6,6" strokeWidth={1.5} />
                <line x1={0} y1={65} x2={TOTAL_ROW_WIDTH} y2={65} stroke={theme.chalkDim} strokeDasharray="6,6" strokeWidth={1.5} />
                <line x1={0} y1={105} x2={TOTAL_ROW_WIDTH} y2={105} stroke={theme.chalkDim} strokeDasharray="6,6" strokeWidth={1.5} />

                {/* Criss-cross lattice branches between cards */}
                {Array.from({ length: 11 }).map((_, i) => {
                  const x1 = i * (CARD_WIDTH + CARD_GAP) + CARD_WIDTH / 2;
                  const x2 = (i + 1) * (CARD_WIDTH + CARD_GAP) + CARD_WIDTH / 2;
                  return (
                    <g key={i}>
                      <line x1={x1} y1={0} x2={x2} y2={65} stroke={theme.better} strokeWidth={1.2} opacity={0.45} />
                      <line x1={x2} y1={0} x2={x1} y2={65} stroke={theme.cyan} strokeWidth={1.2} opacity={0.45} />
                      <line x1={(x1 + x2) / 2} y1={65} x2={(x1 + x2) / 2} y2={105} stroke={theme.pivot} strokeWidth={1.5} opacity={0.6} />
                    </g>
                  );
                })}
              </svg>

              {/* Lattice Labels & Cost Breakdown */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 10,
                  padding: "8px 24px",
                  borderRadius: 12,
                  backgroundColor: "rgba(10, 36, 25, 0.9)",
                  border: `1.5px solid ${theme.better}`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.better }}>
                    HIDDEN SORTING TAX:
                  </span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.chalkText }}>
                    log₂ n divide stages × n merge work per stage = n log n
                  </span>
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 800, color: theme.warn }}>
                  O(n log n)
                </div>
              </div>
            </div>
          )}

          {/* Act 3: Glowing Socket between 8 and 9 */}
          {frame >= 517 && act3SocketProgress > 0 && (
            <div
              style={{
                position: "absolute",
                left: ROW_START_X + 8 * (CARD_WIDTH + CARD_GAP) + CARD_WIDTH,
                top: CARD_HEIGHT / 2 - 18,
                width: CARD_GAP,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: act3SocketProgress,
              }}
            >
              <span style={{ fontSize: 24, color: theme.pivot, fontWeight: "bold" }}>→</span>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* ACTS 0..2: COMPLEXITY PANEL & GRAPH (F88..F491)                           */}
      {/* ========================================================================= */}
      {frame >= 88 && frame < 520 && complexityPanelFade > 0 && (
        <div
          style={{
            position: "absolute",
            left: 280,
            right: 280,
            top: 615,
            height: 280,
            borderRadius: 18,
            backgroundColor: "rgba(10, 36, 25, 0.94)",
            border: `2px solid ${frame >= 301 ? theme.better : theme.good}`,
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            padding: "20px 32px",
            display: "flex",
            justifyContent: "space-between",
            opacity: complexityPanelFade,
            zIndex: 30,
          }}
        >
          {/* Left Column: Mathematical Breakdown */}
          <div style={{ flex: 1.25, display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 16,
                fontWeight: 700,
                color: theme.chalkDim,
                letterSpacing: 1.5,
              }}
            >
              COMPLEXITY BREAKDOWN · STEP-BY-STEP
            </div>

            {/* Step 1: Scan Cost O(n) */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                opacity: act0ScanOProgress,
              }}
            >
              <div
                style={{
                  width: 200,
                  fontFamily: fonts.mono,
                  fontSize: 28,
                  fontWeight: 800,
                  color: theme.good,
                  whiteSpace: "nowrap",
                }}
              >
                O(n)
              </div>
              <div style={{ fontFamily: fonts.hand, fontSize: 24, color: theme.chalkText }}>
                Single forward scan over elements (O(n) linear pass)
              </div>
            </div>

            {/* Step 2: Sorting Cost O(n log n) */}
            {frame >= 219 && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  opacity: act1NlogNProgress,
                }}
              >
                <div
                  style={{
                    width: 200,
                    fontFamily: fonts.mono,
                    fontSize: 28,
                    fontWeight: 800,
                    color: theme.better,
                    whiteSpace: "nowrap",
                  }}
                >
                  O(n log n)
                </div>
                <div style={{ fontFamily: fonts.hand, fontSize: 24, color: theme.chalkText }}>
                  Pre-processing sort required before scan can run
                </div>
              </div>
            )}

            {/* Step 3: Overall Combined Formula (Act 2: F301..F490) */}
            {frame >= 301 && (
              <div
                style={{
                  marginTop: 6,
                  paddingTop: 12,
                  borderTop: "1.5px solid rgba(248, 246, 240, 0.2)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <span style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.chalkDim }}>
                    TOTAL:
                  </span>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 32,
                      fontWeight: 800,
                      color: theme.better,
                      textShadow: `0 0 14px ${theme.better}66`,
                    }}
                  >
                    O(n log n) + O(n) = O(n log n)
                  </span>
                </div>

                {/* Target mismatch finish lines (F414..F490) */}
                {frame >= 414 && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 20,
                      marginTop: 4,
                      opacity: act2TargetProgress,
                    }}
                  >
                    <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.good, fontWeight: 700 }}>
                      REQUIRED:
                    </span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 26, fontWeight: 800, color: theme.good }}>
                      O(n)
                    </span>
                    {act2WarnProgress > 0 && (
                      <div
                        style={{
                          padding: "4px 14px",
                          borderRadius: 8,
                          backgroundColor: "rgba(255, 118, 117, 0.2)",
                          border: `1.5px solid ${theme.warn}`,
                          fontFamily: fonts.mono,
                          fontSize: 14,
                          fontWeight: 700,
                          color: theme.warn,
                          opacity: act2WarnProgress,
                        }}
                      >
                        ⚠ TOO SLOW · MISSES THE O(n) CONSTRAINT
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Mini Graph & Illustrative CountUp Scale */}
          <div
            style={{
              flex: 0.85,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderLeft: "1.5px solid rgba(248, 246, 240, 0.15)",
              paddingLeft: 24,
            }}
          >
            {/* SVG Graph Canvas */}
            <div style={{ position: "relative", width: 280, height: 130 }}>
              <svg width={280} height={130} style={{ overflow: "visible" }}>
                {/* Axes */}
                <line x1={20} y1={115} x2={260} y2={115} stroke={theme.chalkDim} strokeWidth={2} />
                <line x1={20} y1={115} x2={20} y2={15} stroke={theme.chalkDim} strokeWidth={2} />
                <text x={265} y={120} fill={theme.chalkDim} fontSize={12} fontFamily={fonts.mono}>n</text>
                <text x={10} y={12} fill={theme.chalkDim} fontSize={12} fontFamily={fonts.mono}>ops</text>

                {/* Scan Linear Curve (draws F88..F112) */}
                {act0GraphProgress > 0 && (
                  <path
                    d="M 20 115 L 250 55"
                    stroke={theme.good}
                    strokeWidth={3}
                    fill="none"
                    strokeDasharray={240}
                    strokeDashoffset={240 * (1 - act0GraphProgress)}
                  />
                )}

                {/* Sort O(n log n) Curve (draws F240..F274) */}
                {frame >= 240 && (
                  <path
                    d="M 20 115 Q 120 85 250 20"
                    stroke={theme.better}
                    strokeWidth={3.5}
                    fill="none"
                    strokeDasharray={260}
                    strokeDashoffset={260 * (1 - act1NlogNProgress)}
                  />
                )}
              </svg>

              {/* Curve Legend */}
              <div
                style={{
                  display: "flex",
                  gap: 18,
                  fontSize: 12,
                  fontFamily: fonts.mono,
                  marginTop: 4,
                  justifyContent: "center",
                }}
              >
                <span style={{ color: theme.good }}>— Scan O(n)</span>
                {frame >= 240 && <span style={{ color: theme.better }}>— Sort O(n log n)</span>}
              </div>
            </div>

            {/* Illustrative CountUp Scale (n = 1024) */}
            {frame >= 240 && (
              <div
                style={{
                  marginTop: 10,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "6px 14px",
                  borderRadius: 10,
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  border: "1px solid rgba(248, 246, 240, 0.15)",
                }}
              >
                <div style={{ fontFamily: fonts.hand, fontSize: 14, color: theme.chalkDim }}>
                  For n = 1,024 elements:
                </div>
                <div style={{ display: "flex", gap: 14, alignItems: "center", marginTop: 2 }}>
                  <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.good }}>
                    Scan: 1,024 ops
                  </span>
                  <span style={{ color: theme.chalkDim }}>vs</span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: theme.better }}>
                    Sort ≈ 10,240 ops
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ACT 4: THE EXISTENCE QUESTION GATE (F588..F728)                            */}
      {/* ========================================================================= */}
      {frame >= 588 && frame < 729 && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 360,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: act4IsolateFade,
            zIndex: 25,
          }}
        >
          <div
            style={{
              fontFamily: fonts.hand,
              fontSize: 34,
              color: theme.chalkDim,
              marginBottom: 35,
            }}
          >
            What was the ONLY thing we needed from the sorted order?
          </div>

          {/* The Existence Gate: x ──► [ EXISTS? ] ──► x + 1 */}
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {/* Card x (Value 8) */}
            <div
              style={{
                width: 170,
                height: 130,
                borderRadius: 20,
                backgroundColor: "rgba(255, 209, 102, 0.16)",
                border: `3px solid ${theme.pivot}`,
                boxShadow: `0 0 25px rgba(255, 209, 102, 0.4)`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <span style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.pivot }}>current value</span>
              <span style={{ fontFamily: fonts.mono, fontSize: 52, fontWeight: 800, color: theme.chalkText }}>
                x
              </span>
            </div>

            {/* Left Connecting Line */}
            <div style={{ width: 70, height: 4, backgroundColor: theme.pivot, borderRadius: 2 }} />

            {/* Central Existence Gate */}
            <div
              style={{
                padding: "20px 42px",
                borderRadius: 24,
                backgroundColor: "rgba(10, 36, 25, 0.95)",
                border: `3px solid ${theme.cyan}`,
                boxShadow: `0 0 35px rgba(92, 225, 230, 0.35)`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                transform: `scale(${interpolate(act4GateProgress, [0, 1], [0.85, 1])})`,
              }}
            >
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 15,
                  fontWeight: 800,
                  color: theme.cyan,
                  letterSpacing: 2,
                }}
              >
                CORE QUERY
              </span>
              <span
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 46,
                  fontWeight: "bold",
                  color: theme.chalkText,
                  textShadow: `0 0 15px ${theme.cyan}`,
                }}
              >
                {frame >= 685 ? "DOES x + 1 EXIST?" : "x + 1 in array?"}
              </span>
            </div>

            {/* Right Connecting Line */}
            <div style={{ width: 70, height: 4, backgroundColor: theme.cyan, borderRadius: 2 }} />

            {/* Card x + 1 (Target Bubble) */}
            <div
              style={{
                width: 170,
                height: 130,
                borderRadius: 20,
                backgroundColor: "rgba(92, 225, 230, 0.14)",
                border: `3px dashed ${theme.cyan}`,
                boxShadow: `0 0 25px rgba(92, 225, 230, 0.3)`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <span style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.cyan }}>next value</span>
              <span style={{ fontFamily: fonts.mono, fontSize: 48, fontWeight: 800, color: theme.chalkText, whiteSpace: "nowrap" }}>
                x + 1
              </span>
            </div>
          </div>

          <div
            style={{
              marginTop: 40,
              fontFamily: fonts.mono,
              fontSize: 22,
              color: theme.good,
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            We only need to answer: is x + 1 present anywhere?
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ACT 5: DO WE NEED TO ARRANGE EVERYTHING? NO! (F729..F894)                 */}
      {/* ========================================================================= */}
      {frame >= 729 && frame < 895 && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 330,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: act5NotchedFade,
            zIndex: 25,
          }}
        >
          {/* Question Title */}
          <div
            style={{
              position: "relative",
              fontFamily: fonts.hand,
              fontSize: 38,
              color: theme.chalkText,
              marginBottom: 40,
            }}
          >
            Do we really need to arrange EVERY number just for that?
            {/* Act 5: Decisive strike through question at F856 ("No.") */}
            {act5StrikeProgress > 0 && (
              <div
                style={{
                  position: "absolute",
                  left: -20,
                  right: -20,
                  top: "50%",
                  height: 6,
                  backgroundColor: theme.warn,
                  boxShadow: `0 0 15px ${theme.warn}`,
                  transform: "rotate(-2deg)",
                  transformOrigin: "left center",
                  width: `${act5StrikeProgress * 105}%`,
                }}
              />
            )}
          </div>

          {/* 7 Symbolic Values sitting on rigid ordered notches */}
          <div style={{ position: "relative", display: "flex", gap: 24 }}>
            {[-1, 0, 1, 2, 3, 4, 8].map((val, i) => (
              <div
                key={i}
                style={{
                  width: 100,
                  height: 110,
                  borderRadius: 16,
                  backgroundColor: theme.cardBg,
                  border: `2px solid ${theme.cardBorder}`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: `translateY(${act5FloatLift}px) rotate(${(i - 3) * 1.5 * (act5FloatLift / -18)}deg)`,
                  transition: "none",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
                }}
              >
                <span style={{ fontFamily: fonts.mono, fontSize: 44, fontWeight: "bold", color: theme.cardText }}>
                  {val}
                </span>
                <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkDim, marginTop: 4 }}>
                  slot {i}
                </span>
              </div>
            ))}
          </div>

          {/* Rigid Ordered Baseline (Dissolves after F869) */}
          <div
            style={{
              width: 860,
              height: 4,
              backgroundColor: theme.warn,
              marginTop: 18,
              opacity: act5DissolveGrid,
              boxShadow: `0 0 12px ${theme.warn}`,
            }}
          />

          {/* Decisive Verdict Box at F856 ("No.") */}
          {frame >= 856 && (
            <div
              style={{
                marginTop: 35,
                padding: "12px 38px",
                borderRadius: 16,
                backgroundColor: "rgba(255, 118, 117, 0.2)",
                border: `2.5px solid ${theme.warn}`,
                boxShadow: `0 0 25px rgba(255, 118, 117, 0.4)`,
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <span style={{ fontSize: 32, color: theme.warn, fontWeight: "bold" }}>✗ NO!</span>
              <span style={{ fontFamily: fonts.hand, fontSize: 28, color: theme.chalkText }}>
                Full sorting is total overkill. We only care about set membership!
              </span>
            </div>
          )}

          {/* Burst of ChalkDust on strike */}
          <ChalkDust x={1380} y={42} start={862} color={theme.warn} count={16} radius={70} />
        </div>
      )}

      {/* ========================================================================= */}
      {/* ACT 6: HASHSET FAST EXISTENCE LOOKUP (F895..F1023)                        */}
      {/* ========================================================================= */}
      {frame >= 895 && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: act6HashSetY,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: frame < 1024 ? act6HashSetFade : act6HashSetOpacity,
            zIndex: 25,
          }}
        >
          {/* HashSet Enclosure Card */}
          <div
            style={{
              width: 1120,
              padding: "18px 28px",
              borderRadius: 22,
              backgroundColor: "rgba(10, 36, 25, 0.92)",
              border: `2.5px solid ${theme.purple}`,
              boxShadow: `0 10px 35px rgba(0, 0, 0, 0.5), 0 0 25px rgba(216, 180, 226, 0.25)`,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ fontSize: 22 }}>🟣</span>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 22,
                    fontWeight: 800,
                    color: theme.purple,
                    letterSpacing: 2,
                  }}
                >
                  HASH SET (nums_set = set(nums))
                </span>
              </div>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 14,
                  color: theme.good,
                  fontWeight: 700,
                  backgroundColor: "rgba(60, 229, 167, 0.15)",
                  padding: "4px 12px",
                  borderRadius: 8,
                }}
              >
                O(1) AVERAGE LOOKUP
              </div>
            </div>

            {/* Unordered Pool of 11 Values (deliberately scrambled, deduplicated) */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                justifyContent: "center",
                padding: "6px 0",
              }}
            >
              {HASHSET_VALUES.map((v, i) => {
                const isMatched9 = v === 9 && act6Query1Found > 0;
                return (
                  <div
                    key={i}
                    style={{
                      width: 76,
                      height: 76,
                      borderRadius: 14,
                      backgroundColor: isMatched9
                        ? "rgba(60, 229, 167, 0.28)"
                        : "rgba(248, 246, 240, 0.08)",
                      border: `2px solid ${isMatched9 ? theme.good : theme.cardBorder}`,
                      boxShadow: isMatched9 ? `0 0 25px ${theme.good}` : "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: isMatched9 ? "scale(1.18)" : "scale(1)",
                      transition: "none",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 32,
                        fontWeight: "bold",
                        color: isMatched9 ? theme.good : theme.cardText,
                      }}
                    >
                      {v}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Act 6: Direct Existence Queries (F914..F1023) */}
          {frame >= 914 && frame < 1024 && (
            <div
              style={{
                marginTop: 24,
                display: "flex",
                gap: 40,
                alignItems: "center",
              }}
            >
              {/* Query 1: 8 checks 9 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "10px 24px",
                  borderRadius: 14,
                  backgroundColor: "rgba(60, 229, 167, 0.15)",
                  border: `2px solid ${theme.good}`,
                  opacity: act6Query1Progress,
                }}
              >
                <span style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.chalkText }}>
                  8 checks: <strong style={{ color: theme.pivot }}>9 in set?</strong>
                </span>
                <span style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 800, color: theme.good }}>
                  → YES ✓ (O(1))
                </span>
              </div>

              {/* Query 2: 4 checks 5 */}
              {frame >= 983 && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "10px 24px",
                    borderRadius: 14,
                    backgroundColor: "rgba(255, 118, 117, 0.15)",
                    border: `2px solid ${theme.warn}`,
                    opacity: act6Query2Progress,
                  }}
                >
                  <span style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.chalkText }}>
                    4 checks: <strong style={{ color: theme.warn }}>5 in set?</strong>
                  </span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 800, color: theme.warn }}>
                    → NO ✗ (O(1))
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* ACTS 7 & 8: SEQUENCE ISLAND & REPEATED WALKS DANGER (F1024..F1481)         */}
      {/* ========================================================================= */}
      {frame >= 1060 && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 530,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: act7IslandFade,
            zIndex: 30,
          }}
        >
          {/* Island Stage Subtitle (Hidden during Act 8 to let START? shine) */}
          {frame < 1372 && (
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 15,
                fontWeight: 700,
                color: theme.chalkDim,
                letterSpacing: 1.5,
                marginBottom: 24,
              }}
            >
              CONCEPTUAL VALUE CHAIN · CONSECUTIVE SEQUENCE ISLAND
            </div>
          )}

          {/* The Sequence Island Nodes: -1 — 0 — 1 — 2 — 3 — 4 */}
          <div style={{ position: "relative", width: 960, height: 140 }}>
            {/* Horizontal Rail connecting nodes */}
            <div
              style={{
                position: "absolute",
                left: 60,
                right: 60,
                top: 50,
                height: 4,
                backgroundColor: theme.chalkDim,
                borderRadius: 2,
              }}
            />

            {/* 6 Island Nodes */}
            {ISLAND_VALUES.map((val, idx) => {
              const nodeX = 60 + idx * 168; // 6 nodes spaced 168px across 960px
              return (
                <div
                  key={idx}
                  style={{
                    position: "absolute",
                    left: nodeX - 45,
                    top: 5,
                    width: 90,
                    height: 90,
                    borderRadius: "50%",
                    backgroundColor: "rgba(10, 36, 25, 0.95)",
                    border: `2.5px solid ${theme.chalkLine}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.4)",
                    zIndex: 2,
                  }}
                >
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 36,
                      fontWeight: "bold",
                      color: theme.chalkText,
                    }}
                  >
                    {val}
                  </span>

                  {/* Act 7: Launch Dots above every node (F1111..F1305) */}
                  {frame >= 1111 && frame < 1325 && (
                    <div
                      style={{
                        position: "absolute",
                        top: -30,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        opacity: act7LaunchDotsFade,
                      }}
                    >
                      <div
                        style={{
                          width: 14,
                          height: 14,
                          borderRadius: "50%",
                          backgroundColor: theme.pivot,
                          boxShadow: `0 0 10px ${theme.pivot}`,
                        }}
                      />
                      <span style={{ fontSize: 10, color: theme.pivot, fontFamily: fonts.mono, fontWeight: 700 }}>
                        START?
                      </span>
                    </div>
                  )}

                  {/* Act 8: Six Identical Question Marks (F1325..F1481) */}
                  {frame >= 1325 && (
                    <div
                      style={{
                        position: "absolute",
                        top: -42,
                        fontFamily: fonts.hand,
                        fontSize: 34,
                        fontWeight: "bold",
                        color: theme.pivot,
                        opacity: act8QuestionMarksFade * (frame >= 1372 ? act8MarksDim : 1),
                        textShadow: `0 0 12px ${theme.pivot}`,
                      }}
                    >
                      ?
                    </div>
                  )}
                </div>
              );
            })}

            {/* Act 7: 4 Overlapping Walk Arches Over the Island (F1182..F1335) */}
            {frame >= 1182 && (
              <svg
                width={960}
                height={160}
                style={{
                  position: "absolute",
                  left: 0,
                  top: -60,
                  pointerEvents: "none",
                  overflow: "visible",
                  zIndex: 3,
                }}
              >
                {/* Arch 1: from -1 (x=60) to 4 (x=900), apex y=-35 in Mint */}
                {act7Walk1Progress > 0 && (
                  <path
                    d="M 60 45 Q 480 -35 900 45"
                    stroke={theme.good}
                    strokeWidth={5}
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray={920}
                    strokeDashoffset={920 * (1 - act7Walk1Progress * (frame >= 1305 ? act8RetractProgress : 1))}
                    opacity={0.9}
                  />
                )}

                {/* Arch 2: from 0 (x=228) to 4 (x=900), apex y=-10 in Purple */}
                {act7Walk2Progress > 0 && (
                  <path
                    d="M 228 45 Q 564 -10 900 45"
                    stroke={theme.purple}
                    strokeWidth={4.5}
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray={750}
                    strokeDashoffset={750 * (1 - act7Walk2Progress * (frame >= 1305 ? act8RetractProgress : 1))}
                    opacity={0.9}
                  />
                )}

                {/* Arch 3: from 1 (x=396) to 4 (x=900), apex y=15 in Cyan */}
                {act7Walk3Progress > 0 && (
                  <path
                    d="M 396 45 Q 648 15 900 45"
                    stroke={theme.cyan}
                    strokeWidth={4}
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray={580}
                    strokeDashoffset={580 * (1 - act7Walk3Progress * (frame >= 1305 ? act8RetractProgress : 1))}
                    opacity={0.9}
                  />
                )}

                {/* Arch 4: from 2 (x=564) to 4 (x=900), apex y=35 in Better Amber */}
                {act7Walk4Progress > 0 && (
                  <path
                    d="M 564 45 Q 732 35 900 45"
                    stroke={theme.better}
                    strokeWidth={3.5}
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray={400}
                    strokeDashoffset={400 * (1 - act7Walk4Progress * (frame >= 1305 ? act8RetractProgress : 1))}
                    opacity={0.9}
                  />
                )}
              </svg>
            )}
          </div>

          {/* Act 7: Redundant Sequence Walk Callout Banner (F1250..F1315) */}
          {frame >= 1250 && frame < 1315 && (
            <div
              style={{
                marginTop: 24,
                padding: "12px 34px",
                borderRadius: 16,
                backgroundColor: "rgba(255, 118, 117, 0.22)",
                border: `2px solid ${theme.warn}`,
                boxShadow: `0 0 25px rgba(255, 118, 117, 0.4)`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                opacity: act7RedundantCallout,
              }}
            >
              <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 800, color: theme.warn, letterSpacing: 1 }}>
                ⚠ MASSIVE REDUNDANCY DETECTED!
              </span>
              <span style={{ fontFamily: fonts.hand, fontSize: 24, color: theme.chalkText }}>
                Same sequence island walked 4 separate times! (6 + 5 + 4 + 3 = 18 duplicate checks!)
              </span>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* ACT 8: FLOATING CENTRAL "START ?" MYSTERY CARD (F1380..F1481)              */}
      {/* ========================================================================= */}
      {frame >= 1380 && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 360,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 35,
          }}
        >
          {/* Top connection from HashSet down to START ? */}
          {frame >= 1435 && (
            <div
              style={{
                width: 2,
                height: 40 * act8VerticalArrowProgress,
                backgroundColor: theme.pivot,
                boxShadow: `0 0 10px ${theme.pivot}`,
                marginBottom: 6,
              }}
            />
          )}

          {/* Central Mystery Card */}
          <div
            style={{
              padding: "16px 48px",
              borderRadius: 22,
              backgroundColor: "rgba(10, 36, 25, 0.96)",
              border: `3px solid ${theme.pivot}`,
              boxShadow: `0 0 35px rgba(255, 209, 102, 0.5)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              transform: `scale(${act8StartCardProgress})`,
            }}
          >
            <span
              style={{
                fontFamily: fonts.hand,
                fontSize: 52,
                fontWeight: 900,
                color: theme.pivot,
                letterSpacing: 2,
                textShadow: `0 0 20px ${theme.pivot}`,
              }}
            >
              START ?
            </span>
            <span style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.chalkDim }}>
              How do we know where a sequence actually begins?
            </span>
          </div>

          {/* Bottom connection from START ? down to Sequence Island */}
          {frame >= 1435 && (
            <div
              style={{
                width: 2,
                height: 45 * act8VerticalArrowProgress,
                backgroundColor: theme.pivot,
                boxShadow: `0 0 10px ${theme.pivot}`,
                marginTop: 6,
              }}
            />
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* CAPTIONS SAFE ZONE (Y: 960..1040)                                         */}
      {/* ========================================================================= */}
      <Captions words={captionWords} bottom={38} fontSize={38} />
    </div>
  );
};
