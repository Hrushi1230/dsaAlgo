import React, { useMemo } from "react";
import { useCurrentFrame, interpolate, spring, staticFile, Audio, useVideoConfig } from "remotion";
import { theme, fonts } from "../../../../kit/lib/theme";
import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { ChalkDust } from "../../../../kit/components/ChalkDust";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import syncData from "../sync/09-optimal-idea.json";

// Raw master array (12 elements, duplicate 2)
const RAW_ARRAY = [8, 1, 6, 3, 2, 2, 4, 10, 9, 11, -1, 0];

// Unordered HashSet layout coordinates (11 elements, organic non-grid scatter)
// Width: ~1100px, centered on canvas
const HASH_FIELD_NODES = [
  { val: 8,  x: 160, y: 15 },
  { val: -1, x: 400, y: 10 },
  { val: 3,  x: 640, y: 16 },
  { val: 10, x: 880, y: 12 },
  { val: 0,  x: 80,  y: 74 },
  { val: 2,  x: 290, y: 78 },
  { val: 6,  x: 520, y: 70 },
  { val: 11, x: 750, y: 80 },
  { val: 4,  x: 970, y: 72 },
  { val: 9,  x: 210, y: 138 },
  { val: 1,  x: 650, y: 140 },
];

// Number line ordered values (11 unique values)
// -1, 0, 1, 2, 3, 4 (Cluster A: 6 nodes)
// 6 (Cluster B: 1 node)
// 8, 9, 10, 11 (Cluster C: 4 nodes)
// Spread cleanly across 1400px width (x = 260 to 1660)
const NUMBER_LINE_ITEMS = [
  { val: -1, x: 260, cluster: 0 },
  { val: 0,  x: 360, cluster: 0 },
  { val: 1,  x: 460, cluster: 0 },
  { val: 2,  x: 560, cluster: 0 },
  { val: 3,  x: 660, cluster: 0 },
  { val: 4,  x: 760, cluster: 0 },
  // Gap at 5 (x: 860)
  { val: 6,  x: 960, cluster: 1 },
  // Gap at 7 (x: 1060)
  { val: 8,  x: 1160, cluster: 2 },
  { val: 9,  x: 1260, cluster: 2 },
  { val: 10, x: 1360, cluster: 2 },
  { val: 11, x: 1460, cluster: 2 },
];

export const Scene09OptimalIdea: React.FC = () => {
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
  // Top Badge Info by Act
  // ----------------------------------------------------
  const topBadgeInfo = useMemo(() => {
    if (frame < 308) {
      return { text: "PREDECESSOR GATE · CANDIDATE 9", color: theme.pivot, icon: "🔍" };
    }
    if (frame < 603) {
      return { text: "PREDECESSOR GATE · CANDIDATES 10 & 11", color: theme.better, icon: "⚡" };
    }
    if (frame < 811) {
      return { text: "TRUE START DISCOVERY · CANDIDATE 8", color: theme.good, icon: "💡" };
    }
    if (frame < 1228) {
      return { text: "GENERAL RULE · THE x - 1 PRINCIPLE", color: theme.cyan, icon: "📐" };
    }
    if (frame < 1559) {
      return { text: "BUILDING HASH SET · UNIQUE & O(1) LOOKUP", color: theme.purple, icon: "🟣" };
    }
    if (frame < 1927) {
      return { text: "VISUAL AID · HASH SET IS NOT SORTED", color: theme.warn, icon: "⚠" };
    }
    return { text: "OPTIMAL · READY FOR FULL TRACE", color: theme.good, icon: "🚀" };
  }, [frame]);

  // =========================================================================
  // ACT 0: F0–F307 — Candidate 9: Predecessor Exists → Sequence Middle
  // =========================================================================
  // Scene 08 START? handoff morph into candidate 9 (F0..F22)
  const act0CandidateAppear = interpolate(frame, [0, 22], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Predecessor socket 8? appears (F38..F64)
  const act0QueryLineProgress = interpolate(frame, [38, 64], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Predecessor 8 confirmed YES (F77..F92)
  const act0ConfirmedYes = interpolate(frame, [77, 92], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // 9 start stem crossed out (F112..F158)
  const act0NotStartStrike = interpolate(frame, [124, 142], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Conceptual lane 8 - 9 - 10 - 11 draws (F173..F292)
  const act0LaneProgress = interpolate(frame, [173, 235], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Runner moving right from 9 (F215..F274)
  const act0RunnerProgress = interpolate(frame, [215, 274], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Middle label brace (F274..F292)
  const act0MiddleBrace = interpolate(frame, [274, 292], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // =========================================================================
  // ACT 1: F308–F602 — Candidates 10 & 11 (Faster Repetitions)
  // =========================================================================
  // Candidate 10: F308..F475
  const act1Candidate10Fade = interpolate(frame, [308, 328], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act1Query10Line = interpolate(frame, [353, 383], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act1Confirmed10Yes = interpolate(frame, [391, 409], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act1Skip10Progress = interpolate(frame, [421, 450], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Candidate 11: F476..F602
  const act1Candidate11Fade = interpolate(frame, [476, 495], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act1Query11Line = interpolate(frame, [507, 535], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act1Confirmed11Yes = interpolate(frame, [546, 564], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act1Skip11Progress = interpolate(frame, [573, 592], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // =========================================================================
  // ACT 2: F603–F810 — Candidate 8: Missing Predecessor Creates the Start
  // =========================================================================
  const act2Candidate8Fade = interpolate(frame, [603, 628], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act2Query7Line = interpolate(frame, [639, 675], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act2Confirmed7No = interpolate(frame, [681, 697], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Hollow socket retracts and morphs into launch pad (F712..F746)
  const act2StartPadMorph = interpolate(frame, [712, 746], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // =========================================================================
  // ACT 3: F811–F1227 — General x - 1 Rule
  // =========================================================================
  // Symbolic x appears (F811..F841)
  const act3SymbolicFade = interpolate(frame, [811, 841], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Query line and x - 1 socket type out (F847..F891)
  const act3SymbolicQueryProgress = interpolate(frame, [847, 891], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Branch A: x - 1 exists -> SKIP (F910..F986)
  const act3BranchAActive = frame >= 910 && frame < 996;
  const act3BranchAFade = interpolate(frame, [910, 935], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Branch B: x - 1 absent -> TRUE START (F996..F1133)
  const act3BranchBActive = frame >= 996;
  const act3BranchBFade = interpolate(frame, [996, 1030], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act3StartPadGlow = interpolate(frame, [1063, 1106], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Forward walk rail from valid start (F1133..F1210)
  const act3ForwardRail = interpolate(frame, [1173, 1196], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Summary rule card in top right (visible F1117..F1550)
  const act3SummaryCardFade = interpolate(frame, [1117, 1140, 1530, 1550], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Fade out Gate Hero for Acts 4-6 (F1215..F1240)
  const gateHeroFadeOut = interpolate(frame, [1215, 1238], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // =========================================================================
  // ACT 4: F1228–F1534 — Build HashSet + Duplicate 2 Merges + O(1) Lookup
  // =========================================================================
  // Raw input array appears (F1228..F1260)
  const act4RawRowFade = interpolate(frame, [1228, 1250, 1340, 1365], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Chalk Hash Field container appears (F1248..F1275)
  const act4HashFieldFade = interpolate(frame, [1248, 1275], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Node flight progress (F1275..F1310)
  const act4FlightProgress = interpolate(frame, [1275, 1310], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Duplicate 2 merge animation (F1309..F1340)
  const act4Dup2Merge = interpolate(frame, [1309, 1334], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Query 9 pulse into HashSet (F1372..F1438)
  const act4Query9Pulse = interpolate(frame, [1372, 1405, 1435], [0, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act4Query9Found = interpolate(frame, [1395, 1420, 1445, 1465], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transition Hash Field to top teaching layer for Act 5 (F1462..F1520)
  const act4HashFieldY = interpolate(frame, [1462, 1515], [360, 180], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // =========================================================================
  // ACT 5: F1559–F1926 — Number Line for Teaching vs Unordered HashSet
  // =========================================================================
  // Bottom Number Line reveals (F1559..F1639)
  const act5NumberLineFade = interpolate(frame, [1559, 1620], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Clones drop to number line (F1639..F1718)
  const act5ClonesDropProgress = interpolate(frame, [1639, 1700], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // "VISUAL ONLY" bracket accent (F1733..F1802)
  const act5VisualOnlyAccent = interpolate(frame, [1733, 1765], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // "A hash set is not sorted" strike on temporary SORTED label (F1834..F1904)
  const act5NotSortedStrike = interpolate(frame, [1856, 1885], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act5SortedLabelFade = interpolate(frame, [1834, 1856, 1904, 1920], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // =========================================================================
  // ACT 6: F1927–F2006 — Handoff to Scene 10 Full Trace
  // =========================================================================
  const act6PointerDrop = interpolate(frame, [1927, 1960], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Quick preview sweep of number-line nodes (F1957..F1992)
  const act6PreviewSweep = interpolate(frame, [1957, 1990], [0, 11], {
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
      {/* Chalkboard filter primitives & background from kit */}
      <ChalkFilters />
      <ChalkboardBackground />

      {/* Audio Voiceover Track */}
      <Audio src={staticFile("audio/010/09-optimal-idea.mp3")} />

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
        LC128 · OPTIMAL DISCOVERY
      </div>

      {/* Top-Right Summary Card of the x - 1 Rule (F1117..F1550) */}
      {act3SummaryCardFade > 0 && (
        <div
          style={{
            position: "absolute",
            right: 65,
            top: 85,
            padding: "12px 22px",
            borderRadius: 14,
            backgroundColor: "rgba(10, 36, 25, 0.95)",
            border: `2px solid ${theme.good}`,
            boxShadow: `0 8px 24px rgba(0, 0, 0, 0.4), 0 0 16px rgba(60, 229, 167, 0.25)`,
            display: "flex",
            flexDirection: "column",
            gap: 6,
            opacity: act3SummaryCardFade,
            zIndex: 40,
          }}
        >
          <div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: theme.chalkDim }}>
            CORE DISCOVERY
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.warn, fontWeight: 700 }}>
              x - 1 in set:
            </span>
            <span style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.chalkText }}>
              SKIP (middle)
            </span>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.good, fontWeight: 700 }}>
              x - 1 not in set:
            </span>
            <span style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.good, fontWeight: 800 }}>
              TRUE START ✓
            </span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ACTS 0..3: THE PREDECESSOR GATE HERO STAGE (F0..F1230)                     */}
      {/* ========================================================================= */}
      {frame < 1240 && gateHeroFadeOut > 0 && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 290,
            height: 480,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: gateHeroFadeOut,
            zIndex: 25,
          }}
        >
          {/* Subtitle / Stage Context */}
          <div
            style={{
              fontFamily: fonts.hand,
              fontSize: 32,
              color: theme.chalkDim,
              marginBottom: 35,
            }}
          >
            {frame < 308
              ? "Testing candidate value 9: Does its predecessor exist?"
              : frame < 476
              ? "Testing candidate value 10: Does its predecessor exist?"
              : frame < 603
              ? "Testing candidate value 11: Does its predecessor exist?"
              : frame < 811
              ? "Testing candidate value 8: What happens when predecessor is missing?"
              : "Generalizing the rule for any value x"}
          </div>

          {/* Core Predecessor Gate Layout */}
          <div
            style={{
              position: "relative",
              width: 920,
              height: 180,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* 1. Predecessor Socket (Left: x ≈ 180) */}
            <div
              style={{
                position: "absolute",
                left: 170,
                top: 25,
                width: 130,
                height: 130,
                borderRadius: "50%",
                backgroundColor: "rgba(10, 36, 25, 0.95)",
                border: `3px ${
                  frame < 681 || (frame >= 811 && !act3BranchBActive)
                    ? "solid"
                    : "dashed"
                } ${
                  frame < 603 && (act0ConfirmedYes > 0 || act1Confirmed10Yes > 0 || act1Confirmed11Yes > 0)
                    ? theme.good
                    : frame >= 681 && frame < 811
                    ? theme.warn
                    : act3BranchBActive
                    ? theme.warn
                    : theme.cyan
                }`,
                boxShadow: `0 6px 20px rgba(0,0,0,0.4), 0 0 18px ${
                  frame < 603 && (act0ConfirmedYes > 0 || act1Confirmed10Yes > 0 || act1Confirmed11Yes > 0)
                    ? "rgba(60, 229, 167, 0.3)"
                    : "rgba(92, 225, 230, 0.2)"
                }`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transform: frame >= 712 && frame < 811 ? `translateX(${-25 * act2StartPadMorph}px)` : "none",
              }}
            >
              <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkDim }}>
                PREDECESSOR
              </span>
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 42,
                  fontWeight: "bold",
                  color: frame < 603 && (act0ConfirmedYes > 0 || act1Confirmed10Yes > 0 || act1Confirmed11Yes > 0)
                    ? theme.good
                    : frame >= 681 && frame < 811
                    ? theme.warn
                    : theme.chalkText,
                }}
              >
                {frame < 308
                  ? act0ConfirmedYes > 0 ? "8" : "8 ?"
                  : frame < 476
                  ? act1Confirmed10Yes > 0 ? "9" : "9 ?"
                  : frame < 603
                  ? act1Confirmed11Yes > 0 ? "10" : "10 ?"
                  : frame < 811
                  ? frame >= 681 ? "—" : "7 ?"
                  : act3BranchBActive ? "—" : "x - 1"}
              </span>
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 12,
                  fontWeight: 700,
                  color: frame < 603 && (act0ConfirmedYes > 0 || act1Confirmed10Yes > 0 || act1Confirmed11Yes > 0)
                    ? theme.good
                    : frame >= 681 && frame < 811
                    ? theme.warn
                    : act3BranchBActive
                    ? theme.warn
                    : theme.cyan,
                }}
              >
                {frame < 603 && (act0ConfirmedYes > 0 || act1Confirmed10Yes > 0 || act1Confirmed11Yes > 0)
                  ? "EXISTS ✓"
                  : frame >= 681 && frame < 811
                  ? "ABSENT ✗"
                  : act3BranchBActive
                  ? "ABSENT ✗"
                  : "EXISTS ?"}
              </span>
            </div>

            {/* 2. Query Connecting Arrow (from Candidate Leftward to Predecessor) */}
            <svg
              width={260}
              height={60}
              style={{
                position: "absolute",
                left: 330,
                top: 60,
                overflow: "visible",
                zIndex: 5,
              }}
            >
              {/* Leftward Query Path */}
              <line
                x1={240}
                y1={30}
                x2={10}
                y2={30}
                stroke={
                  frame >= 681 && frame < 811
                    ? theme.warn
                    : frame < 603 && (act0ConfirmedYes > 0 || act1Confirmed10Yes > 0 || act1Confirmed11Yes > 0)
                    ? theme.good
                    : theme.cyan
                }
                strokeWidth={3.5}
                strokeDasharray="6,6"
              />
              <polygon
                points="10,30 22,23 22,37"
                fill={
                  frame >= 681 && frame < 811
                    ? theme.warn
                    : frame < 603 && (act0ConfirmedYes > 0 || act1Confirmed10Yes > 0 || act1Confirmed11Yes > 0)
                    ? theme.good
                    : theme.cyan
                }
              />
              <text
                x={125}
                y={18}
                textAnchor="middle"
                fill={theme.pivot}
                fontSize={13}
                fontFamily={fonts.mono}
                fontWeight="bold"
              >
                CHECK LEFT
              </text>
            </svg>

            {/* 3. Candidate Node (Center-Right: x ≈ 620) */}
            <div
              style={{
                position: "absolute",
                left: 600,
                top: 15,
                width: 170,
                height: 150,
                borderRadius: 22,
                backgroundColor: "rgba(255, 209, 102, 0.16)",
                border: `3px solid ${theme.pivot}`,
                boxShadow: `0 0 25px rgba(255, 209, 102, 0.4)`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
              }}
            >
              <span style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.pivot }}>
                CANDIDATE
              </span>
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 56,
                  fontWeight: 800,
                  color: theme.chalkText,
                }}
              >
                {frame < 308 ? "9" : frame < 476 ? "10" : frame < 603 ? "11" : frame < 811 ? "8" : "x"}
              </span>

              {/* Status Tag beneath Candidate */}
              <div
                style={{
                  marginTop: 4,
                  padding: "2px 10px",
                  borderRadius: 6,
                  backgroundColor: frame >= 712 && frame < 811
                    ? "rgba(60, 229, 167, 0.25)"
                    : act3BranchBActive
                    ? "rgba(60, 229, 167, 0.25)"
                    : "rgba(255, 118, 117, 0.25)",
                  fontFamily: fonts.mono,
                  fontSize: 12,
                  fontWeight: 800,
                  color: frame >= 712 && frame < 811
                    ? theme.good
                    : act3BranchBActive
                    ? theme.good
                    : theme.warn,
                }}
              >
                {frame < 124
                  ? "TESTING"
                  : frame < 603
                  ? "NOT A START"
                  : frame < 712
                  ? "TESTING"
                  : frame < 811
                  ? "TRUE START ✓"
                  : act3BranchBActive
                  ? "TRUE START ✓"
                  : "SKIP ✗"}
              </div>
            </div>
          </div>

          {/* Act 0: Conceptual Sequence Lane 8 - 9 - 10 - 11 (F173..F292) */}
          {frame >= 173 && frame < 308 && (
            <div
              style={{
                marginTop: 35,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: act0LaneProgress,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "12px 32px",
                  borderRadius: 18,
                  backgroundColor: "rgba(10, 36, 25, 0.95)",
                  border: `2px solid ${theme.cyan}`,
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.5)",
                }}
              >
                {[8, 9, 10, 11].map((n, i) => (
                  <React.Fragment key={n}>
                    <div
                      style={{
                        width: 70,
                        height: 70,
                        borderRadius: 14,
                        backgroundColor: n === 9
                          ? "rgba(255, 209, 102, 0.25)"
                          : "rgba(248, 246, 240, 0.08)",
                        border: `2px solid ${n === 9 ? theme.pivot : theme.cardBorder}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: fonts.mono,
                        fontSize: 28,
                        fontWeight: "bold",
                        color: n === 9 ? theme.pivot : theme.chalkText,
                        boxShadow: n === 9 ? `0 0 15px ${theme.pivot}` : "none",
                      }}
                    >
                      {n}
                    </div>
                    {i < 3 && (
                      <span style={{ fontSize: 24, color: theme.cyan, fontWeight: "bold" }}>
                        →
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Middle Label & Consequence */}
              <div
                style={{
                  marginTop: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  opacity: act0MiddleBrace,
                }}
              >
                <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.warn }}>
                  ⚠ ENTERING FROM THE MIDDLE:
                </span>
                <span style={{ fontFamily: fonts.hand, fontSize: 24, color: theme.chalkText }}>
                  8 already precedes 9, so starting at 9 is redundant!
                </span>
              </div>
            </div>
          )}

          {/* Act 2: Start Launch Pad Morph for 8 (F712..F810) */}
          {frame >= 712 && frame < 811 && (
            <div
              style={{
                marginTop: 25,
                padding: "12px 38px",
                borderRadius: 16,
                backgroundColor: "rgba(60, 229, 167, 0.2)",
                border: `2.5px solid ${theme.good}`,
                boxShadow: `0 0 25px rgba(60, 229, 167, 0.4)`,
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <span style={{ fontSize: 28, color: theme.good, fontWeight: "bold" }}>🚀 TRUE START:</span>
              <span style={{ fontFamily: fonts.hand, fontSize: 26, color: theme.chalkText }}>
                Since 7 does NOT exist in the array, 8 is the genuine beginning of the sequence!
              </span>
            </div>
          )}

          {/* Act 3: Symbolic Branch Explanations & Forward Rail (F811..F1210) */}
          {frame >= 811 && (
            <div
              style={{
                marginTop: 30,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
              }}
            >
              {/* Branch Decision Cards */}
              <div style={{ display: "flex", gap: 32 }}>
                {/* Branch A: Exists -> SKIP */}
                <div
                  style={{
                    width: 380,
                    padding: "14px 22px",
                    borderRadius: 16,
                    backgroundColor: act3BranchAActive ? "rgba(255, 118, 117, 0.22)" : "rgba(10, 36, 25, 0.8)",
                    border: `2px solid ${act3BranchAActive ? theme.warn : "rgba(248, 246, 240, 0.15)"}`,
                    opacity: act3BranchAActive ? 1 : 0.45,
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.warn }}>
                    IF (x - 1) IN SET:
                  </span>
                  <span style={{ fontFamily: fonts.hand, fontSize: 22, color: theme.chalkText }}>
                    Skip x. Someone else will start earlier.
                  </span>
                </div>

                {/* Branch B: Absent -> TRUE START */}
                <div
                  style={{
                    width: 380,
                    padding: "14px 22px",
                    borderRadius: 16,
                    backgroundColor: act3BranchBActive ? "rgba(60, 229, 167, 0.25)" : "rgba(10, 36, 25, 0.8)",
                    border: `2.5px solid ${act3BranchBActive ? theme.good : "rgba(248, 246, 240, 0.15)"}`,
                    boxShadow: act3BranchBActive ? `0 0 25px rgba(60, 229, 167, 0.35)` : "none",
                    opacity: act3BranchBActive ? 1 : 0.45,
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 800, color: theme.good }}>
                    IF (x - 1) NOT IN SET:
                  </span>
                  <span style={{ fontFamily: fonts.hand, fontSize: 22, color: theme.chalkText }}>
                    This is a true sequence start! Launch walk forward.
                  </span>
                </div>
              </div>

              {/* Forward Walk Rail from Valid Start (F1173..F1210) */}
              {frame >= 1173 && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "10px 28px",
                    borderRadius: 14,
                    backgroundColor: "rgba(60, 229, 167, 0.15)",
                    border: `1.5px solid ${theme.good}`,
                    opacity: act3ForwardRail,
                  }}
                >
                  <span style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.good, fontWeight: 800 }}>
                    ONLY THEN:
                  </span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.chalkText }}>
                    while (current + 1) in set: current += 1
                  </span>
                  <span style={{ color: theme.good, fontSize: 22 }}>→ → →</span>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* ACT 4: RAW INPUT ROW BEZIER FLIGHT INTO HASH SET (F1228..F1365)           */}
      {/* ========================================================================= */}
      {frame >= 1228 && frame < 1370 && act4RawRowFade > 0 && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 240,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: act4RawRowFade,
            zIndex: 35,
          }}
        >
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 15,
              fontWeight: 700,
              color: theme.chalkDim,
              marginBottom: 12,
            }}
          >
            MASTER INPUT ARRAY · nums
          </div>
          <div style={{ display: "flex", gap: 14 }}>
            {RAW_ARRAY.map((v, i) => {
              const isSecondTwo = i === 5 && v === 2;
              return (
                <div
                  key={i}
                  style={{
                    width: 76,
                    height: 76,
                    borderRadius: 14,
                    backgroundColor: isSecondTwo ? "rgba(216, 180, 226, 0.3)" : theme.cardBg,
                    border: `2px solid ${isSecondTwo ? theme.purple : theme.cardBorder}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: fonts.mono,
                    fontSize: 32,
                    fontWeight: "bold",
                    color: isSecondTwo ? theme.purple : theme.cardText,
                    boxShadow: "0 4px 14px rgba(0,0,0,0.3)",
                  }}
                >
                  {v}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ACTS 4..6: CHALK HASH FIELD (UNORDERED SET) (F1248..F2006)                */}
      {/* ========================================================================= */}
      {frame >= 1248 && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: act4HashFieldY,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: act4HashFieldFade,
            zIndex: 30,
          }}
        >
          {/* Chalk Hash Field Enclosure */}
          <div
            style={{
              width: 1160,
              height: 270,
              padding: "16px 28px",
              borderRadius: 24,
              backgroundColor: "rgba(10, 36, 25, 0.94)",
              border: `2.5px solid ${theme.purple}`,
              boxShadow: `0 10px 35px rgba(0, 0, 0, 0.5), 0 0 25px rgba(216, 180, 226, 0.25)`,
              position: "relative",
            }}
          >
            {/* Header / Unordered Badge */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ fontSize: 20 }}>🟣</span>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 20,
                    fontWeight: 800,
                    color: theme.purple,
                    letterSpacing: 2,
                  }}
                >
                  HASH SET · UNORDERED
                </span>
                <span style={{ fontFamily: fonts.hand, fontSize: 18, color: theme.chalkDim }}>
                  (nums_set = set(nums))
                </span>
              </div>

              {/* Deduplication & Fast Lookup badges */}
              <div style={{ display: "flex", gap: 12 }}>
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 13,
                    color: theme.purple,
                    fontWeight: 700,
                    backgroundColor: "rgba(216, 180, 226, 0.15)",
                    padding: "4px 12px",
                    borderRadius: 8,
                    border: `1px solid ${theme.purple}`,
                  }}
                >
                  11 UNIQUE VALUES (DUP 2 DEDUPLICATED)
                </div>
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 13,
                    color: theme.good,
                    fontWeight: 700,
                    backgroundColor: "rgba(60, 229, 167, 0.15)",
                    padding: "4px 12px",
                    borderRadius: 8,
                    border: `1px solid ${theme.good}`,
                  }}
                >
                  O(1) AVERAGE LOOKUP
                </div>
              </div>
            </div>

            {/* Temporary SORTED Strike for Act 5 (F1834..F1920) */}
            {act5SortedLabelFade > 0 && (
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 20,
                  pointerEvents: "none",
                  opacity: act5SortedLabelFade,
                }}
              >
                <div
                  style={{
                    position: "relative",
                    padding: "8px 36px",
                    borderRadius: 16,
                    backgroundColor: "rgba(10, 36, 25, 0.98)",
                    border: `2px solid ${theme.warn}`,
                    boxShadow: "0 0 30px rgba(0, 0, 0, 0.8)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 34,
                      fontWeight: 900,
                      color: theme.chalkDim,
                      letterSpacing: 4,
                    }}
                  >
                    SORTED
                  </span>
                  {/* Red Strike Line */}
                  {act5NotSortedStrike > 0 && (
                    <div
                      style={{
                        position: "absolute",
                        left: -10,
                        top: "50%",
                        height: 5,
                        backgroundColor: theme.warn,
                        boxShadow: `0 0 14px ${theme.warn}`,
                        width: `${act5NotSortedStrike * 110}%`,
                        transform: "rotate(-6deg)",
                      }}
                    />
                  )}
                </div>
              </div>
            )}

            {/* Unordered Pebble Nodes scattered organically inside */}
            <div style={{ position: "relative", width: "100%", height: 215 }}>
              {HASH_FIELD_NODES.map((node, i) => {
                const isMatched9 = node.val === 9 && act4Query9Found > 0;
                return (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      left: node.x,
                      top: node.y,
                      width: 64,
                      height: 64,
                      borderRadius: 16,
                      backgroundColor: isMatched9
                        ? "rgba(60, 229, 167, 0.3)"
                        : "rgba(248, 246, 240, 0.08)",
                      border: `2px solid ${isMatched9 ? theme.good : theme.cardBorder}`,
                      boxShadow: isMatched9 ? `0 0 25px ${theme.good}` : "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: isMatched9 ? "scale(1.15)" : "scale(1)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 30,
                        fontWeight: "bold",
                        color: isMatched9 ? theme.good : theme.cardText,
                      }}
                    >
                      {node.val}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ACT 5 & 6: CONCEPTUAL NUMBER LINE (VISUAL ONLY) (F1559..F2006)            */}
      {/* ========================================================================= */}
      {frame >= 1559 && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 550,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: act5NumberLineFade,
            zIndex: 35,
          }}
        >
          {/* Subtitle / Visual Only Disclaimer Badge */}
          <div
            style={{
              padding: "6px 22px",
              borderRadius: 14,
              backgroundColor: "rgba(10, 36, 25, 0.92)",
              border: `1.5px solid ${act5VisualOnlyAccent > 0 ? theme.pivot : theme.cyan}`,
              boxShadow: act5VisualOnlyAccent > 0 ? `0 0 20px rgba(255, 209, 102, 0.35)` : "none",
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 20,
            }}
          >
            <span style={{ fontSize: 16 }}>✏️</span>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 15,
                fontWeight: 800,
                color: act5VisualOnlyAccent > 0 ? theme.pivot : theme.cyan,
                letterSpacing: 1.5,
              }}
            >
              VISUAL NUMBER LINE · TEACHING AID ONLY
            </span>
          </div>

          {/* Number Line Canvas */}
          <div style={{ position: "relative", width: 1540, height: 160 }}>
            {/* Continuous Number-Line Rail */}
            <div
              style={{
                position: "absolute",
                left: 210,
                right: 30,
                top: 60,
                height: 4,
                backgroundColor: theme.chalkDim,
                borderRadius: 2,
              }}
            />

            {/* Cluster Connecting Bars highlighting the 3 sequence groups */}
            {/* Cluster A: -1 to 4 */}
            <div
              style={{
                position: "absolute",
                left: 260,
                width: 500,
                top: 58,
                height: 8,
                backgroundColor: theme.good,
                boxShadow: `0 0 14px ${theme.good}`,
                borderRadius: 4,
                opacity: 0.8,
              }}
            />
            {/* Cluster C: 8 to 11 */}
            <div
              style={{
                position: "absolute",
                left: 1160,
                width: 300,
                top: 58,
                height: 8,
                backgroundColor: theme.better,
                boxShadow: `0 0 14px ${theme.better}`,
                borderRadius: 4,
                opacity: 0.8,
              }}
            />

            {/* Cloned Value Nodes on Number Line */}
            {NUMBER_LINE_ITEMS.map((item, idx) => {
              const isSwept = frame >= 1957 && idx <= act6PreviewSweep;
              return (
                <div
                  key={idx}
                  style={{
                    position: "absolute",
                    left: item.x - 38,
                    top: 20,
                    width: 76,
                    height: 84,
                    borderRadius: 16,
                    backgroundColor: isSwept
                      ? "rgba(255, 209, 102, 0.3)"
                      : "rgba(10, 36, 25, 0.95)",
                    border: `2px solid ${
                      isSwept
                        ? theme.pivot
                        : item.cluster === 0
                        ? theme.good
                        : item.cluster === 1
                        ? theme.purple
                        : theme.better
                    }`,
                    boxShadow: isSwept ? `0 0 20px ${theme.pivot}` : "0 4px 14px rgba(0,0,0,0.4)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 5,
                  }}
                >
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 34,
                      fontWeight: "bold",
                      color: isSwept ? theme.pivot : theme.chalkText,
                    }}
                  >
                    {item.val}
                  </span>
                </div>
              );
            })}

            {/* Act 6: Trace Cursor Poised at Left Edge (F1927..F2006) */}
            {frame >= 1927 && (
              <div
                style={{
                  position: "absolute",
                  left: 190,
                  top: 15,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  opacity: act6PointerDrop,
                  transform: `translateY(${interpolate(act6PointerDrop, [0, 1], [-20, 0])}px)`,
                  zIndex: 20,
                }}
              >
                <span style={{ fontSize: 32, color: theme.pivot }}>▼</span>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 14,
                    fontWeight: 800,
                    color: theme.pivot,
                    letterSpacing: 1,
                    backgroundColor: "rgba(10, 36, 25, 0.9)",
                    padding: "2px 8px",
                    borderRadius: 6,
                    border: `1px solid ${theme.pivot}`,
                  }}
                >
                  READY
                </span>
              </div>
            )}
          </div>

          {/* Bottom Clarification Note */}
          <div
            style={{
              marginTop: 10,
              fontFamily: fonts.hand,
              fontSize: 22,
              color: theme.chalkDim,
            }}
          >
            The values are grouped visually into 3 sequence islands: [-1..4], [6], and [8..11]
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* CAPTIONS SAFE ZONE (Y: 960..1040)                                         */}
      {/* ========================================================================= */}
      <Captions words={captionWords} bottom={38} fontSize={38} />
    </div>
  );
};
