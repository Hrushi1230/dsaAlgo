/**
 * Scene02Understand.tsx — Scene 02 · Understand the Problem + The Dangerous Naive Idea
 * Set Matrix Zeroes (LeetCode 73) · Pattern 01 — Arrays & Hashing
 *
 * Implements the complete Problem Definition and Naive In-Place Trap:
 * - Master 5×5 Grid geometry fixed center stage (X: 754, Y: 240, 412×412px)
 * - 0-based coordinate rulers [0..4] around grid (Top col rulers & Left row rulers)
 * - Exact master input: [[1,2,0,4,5], [6,7,8,9,10], [0,12,13,14,15], [16,17,18,0,20], [21,22,23,24,25]]
 * - Symbolic rule demo (F52..F323) -> Master input reveal (F324..F418)
 * - Three original zero callouts: (0,2), (2,0), (3,3) (F535..F804)
 * - Naive in-place write demo: Row 0 & Col 2 zeroed -> synthetic zero created at (1,2) (F971..F1217)
 * - Traversal misclassification -> False cascade wiping Row 1 & Col 4 (F1218..F1549)
 * - Destruction of innocent cells (7, 10, 25) proven (F1550..F1624)
 * - Chalk eraser wipe restoring pristine master matrix (F1625..F1728)
 * - Core Invariant banner: Created Zeros ≠ Original Sources (F1729..F1921)
 * - Original zeros protected & Method 1 teaser handoff (F1922..F2288)
 *
 * Total Duration: 2288 frames @ 30fps (76.280s) strictly from sync/02-understand.json
 */
import React, { useMemo } from "react";
import {
  Audio,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
} from "remotion";

import { ChalkboardBackground, ChalkFilters, CHALK_FILTER_ID } from "../../../../kit/lib/chalk";
import { theme, fonts } from "../../../../kit/lib/theme";
import { EASE } from "../../../../kit/lib/anim";
import { ChalkDust } from "../../../../kit/components/ChalkDust";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import syncData from "../sync/02-understand.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings (from sync/02-understand.json)
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => {
  let word = w.word;
  if (word.toLowerCase() === "zeros.") word = "zeroes.";
  if (word.toLowerCase() === "zeros,") word = "zeroes,";
  if (word.toLowerCase() === "zeros") word = "zeroes";
  return {
    word,
    start: w.start_ms / 1000,
    end: w.end_ms / 1000,
  };
});

// ---------------------------------------------------------------------------
// Canonical Grid Geometry & Master Testcase
// ---------------------------------------------------------------------------
const ROWS = 5;
const COLS = 5;
const CELL_SIZE = 76;
const CELL_GAP = 8;
const PITCH = CELL_SIZE + CELL_GAP; // 84px
const GRID_WIDTH = COLS * CELL_SIZE + (COLS - 1) * CELL_GAP; // 412px
const GRID_HEIGHT = ROWS * CELL_SIZE + (ROWS - 1) * CELL_GAP; // 412px
const GRID_LEFT = (1920 - GRID_WIDTH) / 2; // 754px
const GRID_TOP = 240; // Y: 240..652

const MASTER_GRID = [
  [1, 2, 0, 4, 5],
  [6, 7, 8, 9, 10],
  [0, 12, 13, 14, 15],
  [16, 17, 18, 0, 20],
  [21, 22, 23, 24, 25],
];

interface CellVisual {
  val: number | string | null;
  textColor: string;
  borderColor: string;
  bgColor: string;
  isDashed?: boolean;
  isStrikethrough?: boolean;
  glowColor?: string;
  isOriginalDot?: boolean;
}

export const Scene02Understand: React.FC = () => {
  const frame = useCurrentFrame();

  // =========================================================================
  // 1. Grid Shell Entrance Animation (F0..F24)
  // =========================================================================
  const gridEntranceScale = interpolate(frame, [0, 24], [0.96, 1.0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });
  const gridEntranceOpacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  // =========================================================================
  // 2. Coordinate Rulers Reveal (Beat 07: F419..F470)
  // =========================================================================
  const rulersOpacity = interpolate(frame, [419, 460], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  // =========================================================================
  // 3. Status Banners Control
  // =========================================================================
  // Beat 12 (F805..F916): Naive Idea Proposal Chip
  const showNaiveProposal = frame >= 805 && frame < 971;
  const naiveProposalSpring = spring({
    frame: Math.max(0, frame - 805),
    fps: 30,
    config: { damping: 14, stiffness: 180 },
  });

  // Beat 15..17 (F1089..F1330): Danger Banner
  const showDangerBanner = frame >= 1089 && frame < 1330;
  const dangerBannerSpring = spring({
    frame: Math.max(0, frame - 1089),
    fps: 30,
    config: { damping: 14, stiffness: 180 },
  });

  // Beat 18..21 (F1330..F1624): Misclassification / Cascade Warning
  const showCascadeWarning = frame >= 1330 && frame < 1625;
  const cascadeWarningSpring = spring({
    frame: Math.max(0, frame - 1330),
    fps: 30,
    config: { damping: 14, stiffness: 180 },
  });

  // =========================================================================
  // 4. Scanner Reticle Position (Beats 13, 17, 18: F917..F1427)
  // =========================================================================
  const isScannerActive = (frame >= 917 && frame < 1089) || (frame >= 1218 && frame < 1428);
  const scannerPos = useMemo(() => {
    if (frame < 1218) {
      return {
        x: GRID_LEFT + 2 * PITCH + CELL_SIZE / 2,
        y: GRID_TOP + 0 * PITCH + CELL_SIZE / 2,
        color: theme.pivot,
      };
    }
    const travel = interpolate(frame, [1218, 1260], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
    return {
      x: GRID_LEFT + 2 * PITCH + CELL_SIZE / 2,
      y: GRID_TOP + (0 + travel * 1) * PITCH + CELL_SIZE / 2,
      color: frame >= 1330 ? theme.bad : theme.pivot,
    };
  }, [frame]);

  // =========================================================================
  // 5. Side Callout Cards (Zero Collisions, docked cleanly to the right)
  // =========================================================================
  // Beats 09..11 Hero Callouts (F608..F804)
  const showZero1Tag = frame >= 608 && frame < 668;
  const showZero2Tag = frame >= 668 && frame < 725;
  const showZero3Tag = frame >= 725 && frame < 805;

  // Beat 16..18: Synthetic Zero Callout (F1137..F1428)
  const showFakeZeroCard = frame >= 1137 && frame < 1428;
  const fakeZeroSpring = spring({
    frame: Math.max(0, frame - 1137),
    fps: 30,
    config: { damping: 14, stiffness: 180 },
  });

  // Beat 21: Innocent Cells Destroyed Card (F1550..F1625)
  const showDestroyedCard = frame >= 1550 && frame < 1625;
  const destroyedSpring = spring({
    frame: Math.max(0, frame - 1550),
    fps: 30,
    config: { damping: 14, stiffness: 180 },
  });

  // =========================================================================
  // 6. Eraser Wipe Progress (Beat 22: F1625..F1728)
  // =========================================================================
  const isWiping = frame >= 1625 && frame < 1675;
  const wipeProgress = interpolate(frame, [1625, 1665], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });
  const wipeX = GRID_LEFT - 20 + wipeProgress * (GRID_WIDTH + 40);

  // =========================================================================
  // 7. Core Invariant Banner (Beat 23..26: F1729..F2288)
  // =========================================================================
  const showInvariant = frame >= 1729;
  const invariantSpring = spring({
    frame: Math.max(0, frame - 1729),
    fps: 30,
    config: { damping: 15, stiffness: 150 },
  });

  // =========================================================================
  // 8. Protective Boundary Shield (Beat 25: F2080..F2288)
  // =========================================================================
  const showShield = frame >= 2080;
  const shieldProgress = interpolate(frame, [2080, 2120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  // =========================================================================
  // 9. Method 1 Handoff Teaser (Beat 26: F2206..F2288)
  // =========================================================================
  const showMethod1Teaser = frame >= 2206;
  const method1Spring = spring({
    frame: Math.max(0, frame - 2206),
    fps: 30,
    config: { damping: 14, stiffness: 160 },
  });

  // =========================================================================
  // 10. Matrix Cell Visual State Machine
  // =========================================================================
  const getCellVisual = (r: number, c: number): CellVisual => {
    // -----------------------------------------------------------------------
    // PHASE 1: Symbolic Rule Demonstration (F0..F323)
    // -----------------------------------------------------------------------
    if (frame < 52) {
      return {
        val: null,
        textColor: theme.chalkText,
        borderColor: "rgba(232, 228, 213, 0.45)",
        bgColor: "rgba(248, 246, 240, 0.04)",
      };
    }

    if (frame >= 52 && frame < 324) {
      const isSymbolicZero = r === 1 && c === 2;
      const isInRow1 = r === 1;
      const isInCol2 = c === 2;

      if (frame < 152) {
        if (isSymbolicZero) {
          return {
            val: 0,
            textColor: theme.pivot,
            borderColor: theme.pivot,
            bgColor: "rgba(255, 209, 102, 0.16)",
            glowColor: "rgba(255, 209, 102, 0.6)",
            isOriginalDot: true,
          };
        }
        return {
          val: null,
          textColor: theme.chalkText,
          borderColor: "rgba(232, 228, 213, 0.45)",
          bgColor: "rgba(248, 246, 240, 0.04)",
        };
      }

      if (frame < 182) {
        if (isSymbolicZero) {
          return {
            val: 0,
            textColor: theme.pivot,
            borderColor: theme.pivot,
            bgColor: "rgba(255, 209, 102, 0.22)",
            glowColor: "rgba(255, 209, 102, 0.6)",
            isOriginalDot: true,
          };
        }
        if (isInRow1) {
          return {
            val: null,
            textColor: theme.cyan,
            borderColor: "rgba(92, 225, 230, 0.7)",
            bgColor: "rgba(92, 225, 230, 0.18)",
          };
        }
        return {
          val: null,
          textColor: theme.chalkText,
          borderColor: "rgba(232, 228, 213, 0.45)",
          bgColor: "rgba(248, 246, 240, 0.04)",
        };
      }

      if (frame < 252) {
        if (isSymbolicZero) {
          return {
            val: 0,
            textColor: theme.pivot,
            borderColor: theme.pivot,
            bgColor: "rgba(255, 209, 102, 0.28)",
            glowColor: "rgba(255, 209, 102, 0.7)",
            isOriginalDot: true,
          };
        }
        if (isInRow1 || isInCol2) {
          return {
            val: null,
            textColor: theme.cyan,
            borderColor: "rgba(92, 225, 230, 0.7)",
            bgColor: "rgba(92, 225, 230, 0.18)",
          };
        }
        return {
          val: null,
          textColor: theme.chalkText,
          borderColor: "rgba(232, 228, 213, 0.45)",
          bgColor: "rgba(248, 246, 240, 0.04)",
        };
      }

      // Beat 05 (F252..F323): Mint zeros across Row 1 & Col 2
      if (isInRow1 || isInCol2) {
        return {
          val: 0,
          textColor: isSymbolicZero ? theme.pivot : theme.good,
          borderColor: isSymbolicZero ? theme.pivot : theme.good,
          bgColor: isSymbolicZero ? "rgba(255, 209, 102, 0.2)" : "rgba(60, 229, 167, 0.16)",
          isOriginalDot: isSymbolicZero,
        };
      }
      return {
        val: null,
        textColor: theme.chalkText,
        borderColor: "rgba(232, 228, 213, 0.45)",
        bgColor: "rgba(248, 246, 240, 0.04)",
      };
    }

    // -----------------------------------------------------------------------
    // PHASE 2 & 3: Master Input Matrix (F324..F970)
    // -----------------------------------------------------------------------
    const origVal = MASTER_GRID[r][c];
    const isOriginalZero = (r === 0 && c === 2) || (r === 2 && c === 0) || (r === 3 && c === 3);

    if (frame < 971) {
      if (frame < 535) {
        return {
          val: origVal,
          textColor: theme.chalkText,
          borderColor: "rgba(232, 228, 213, 0.45)",
          bgColor: "rgba(248, 246, 240, 0.04)",
        };
      }

      if (frame < 608) {
        if (isOriginalZero) {
          return {
            val: 0,
            textColor: theme.pivot,
            borderColor: theme.pivot,
            bgColor: "rgba(255, 209, 102, 0.14)",
            glowColor: "rgba(255, 209, 102, 0.5)",
            isOriginalDot: true,
          };
        }
        return {
          val: origVal,
          textColor: theme.chalkText,
          borderColor: "rgba(232, 228, 213, 0.45)",
          bgColor: "rgba(248, 246, 240, 0.04)",
        };
      }

      // Beats 09..11: Individual Hero Zero Callouts
      if (frame < 668) {
        if (r === 0 && c === 2) {
          return {
            val: 0,
            textColor: theme.pivot,
            borderColor: theme.pivot,
            bgColor: "rgba(255, 209, 102, 0.24)",
            glowColor: "rgba(255, 209, 102, 0.8)",
            isOriginalDot: true,
          };
        }
        if (isOriginalZero) {
          return {
            val: 0,
            textColor: theme.pivot,
            borderColor: "rgba(255, 209, 102, 0.6)",
            bgColor: "rgba(255, 209, 102, 0.1)",
            isOriginalDot: true,
          };
        }
        return {
          val: origVal,
          textColor: theme.chalkText,
          borderColor: "rgba(232, 228, 213, 0.45)",
          bgColor: "rgba(248, 246, 240, 0.04)",
        };
      }

      if (frame < 725) {
        if (r === 2 && c === 0) {
          return {
            val: 0,
            textColor: theme.pivot,
            borderColor: theme.pivot,
            bgColor: "rgba(255, 209, 102, 0.24)",
            glowColor: "rgba(255, 209, 102, 0.8)",
            isOriginalDot: true,
          };
        }
        if (isOriginalZero) {
          return {
            val: 0,
            textColor: theme.pivot,
            borderColor: "rgba(255, 209, 102, 0.6)",
            bgColor: "rgba(255, 209, 102, 0.1)",
            isOriginalDot: true,
          };
        }
        return {
          val: origVal,
          textColor: theme.chalkText,
          borderColor: "rgba(232, 228, 213, 0.45)",
          bgColor: "rgba(248, 246, 240, 0.04)",
        };
      }

      if (frame < 805) {
        if (r === 3 && c === 3) {
          return {
            val: 0,
            textColor: theme.pivot,
            borderColor: theme.pivot,
            bgColor: "rgba(255, 209, 102, 0.24)",
            glowColor: "rgba(255, 209, 102, 0.8)",
            isOriginalDot: true,
          };
        }
        if (isOriginalZero) {
          return {
            val: 0,
            textColor: theme.pivot,
            borderColor: "rgba(255, 209, 102, 0.6)",
            bgColor: "rgba(255, 209, 102, 0.1)",
            isOriginalDot: true,
          };
        }
        return {
          val: origVal,
          textColor: theme.chalkText,
          borderColor: "rgba(232, 228, 213, 0.45)",
          bgColor: "rgba(248, 246, 240, 0.04)",
        };
      }

      // Beats 12 & 13 (F805..F970): Retain original markers
      if (r === 0 && c === 2 && frame >= 917) {
        return {
          val: 0,
          textColor: theme.pivot,
          borderColor: theme.pivot,
          bgColor: "rgba(255, 209, 102, 0.28)",
          glowColor: "rgba(255, 209, 102, 0.8)",
          isOriginalDot: true,
        };
      }
      if (isOriginalZero) {
        return {
          val: 0,
          textColor: theme.pivot,
          borderColor: theme.pivot,
          bgColor: "rgba(255, 209, 102, 0.14)",
          isOriginalDot: true,
        };
      }
      return {
        val: origVal,
        textColor: theme.chalkText,
        borderColor: "rgba(232, 228, 213, 0.45)",
        bgColor: "rgba(248, 246, 240, 0.04)",
      };
    }

    // -----------------------------------------------------------------------
    // PHASE 4: Naive In-Place Mutation & Cascade Disaster (F971..F1624)
    // -----------------------------------------------------------------------
    if (frame < 1625) {
      if (r === 0 && c === 2) {
        return {
          val: 0,
          textColor: theme.pivot,
          borderColor: theme.pivot,
          bgColor: "rgba(255, 209, 102, 0.25)",
          isOriginalDot: true,
        };
      }

      const inRow0 = r === 0;
      const inCol2 = c === 2;
      const inRow1Corrupted = frame >= 1428 && r === 1;
      const inCol4Corrupted = frame >= 1489 && c === 4 && r >= 1;

      // Cell (1, 2) — THE CRITICAL FAKE ZERO (was 8)
      if (r === 1 && c === 2) {
        if (frame >= 1330) {
          return {
            val: 0,
            textColor: theme.bad,
            borderColor: theme.bad,
            bgColor: "rgba(235, 87, 87, 0.25)",
            glowColor: "rgba(235, 87, 87, 0.8)",
          };
        }
        return {
          val: 0,
          textColor: theme.warn,
          borderColor: theme.warn,
          bgColor: "rgba(255, 118, 117, 0.25)",
          glowColor: "rgba(255, 118, 117, 0.7)",
          isDashed: true,
        };
      }

      // Highlight innocent destroyed cells in Beat 21 (F1550..F1624)
      const isDestroyedInnocent =
        (r === 1 && c === 1) || (r === 1 && c === 4) || (r === 4 && c === 4);

      if (frame >= 1550 && isDestroyedInnocent) {
        return {
          val: 0,
          textColor: theme.bad,
          borderColor: theme.bad,
          bgColor: "rgba(235, 87, 87, 0.22)",
          isDashed: true,
          isStrikethrough: true,
        };
      }

      // Mutated in Row 0 or Col 2
      if (inRow0 || inCol2) {
        return {
          val: 0,
          textColor: theme.warn,
          borderColor: theme.warn,
          bgColor: "rgba(255, 118, 117, 0.16)",
          isOriginalDot: isOriginalZero,
        };
      }

      // Mutated in Row 1 (False cascade 1)
      if (inRow1Corrupted) {
        return {
          val: 0,
          textColor: theme.bad,
          borderColor: theme.bad,
          bgColor: "rgba(235, 87, 87, 0.18)",
        };
      }

      // Mutated in Col 4 (False cascade 2)
      if (inCol4Corrupted) {
        return {
          val: 0,
          textColor: theme.bad,
          borderColor: theme.bad,
          bgColor: "rgba(235, 87, 87, 0.18)",
        };
      }

      if (isOriginalZero) {
        return {
          val: 0,
          textColor: theme.pivot,
          borderColor: theme.pivot,
          bgColor: "rgba(255, 209, 102, 0.12)",
          isOriginalDot: true,
        };
      }
      return {
        val: origVal,
        textColor: theme.chalkText,
        borderColor: "rgba(232, 228, 213, 0.45)",
        bgColor: "rgba(248, 246, 240, 0.04)",
      };
    }

    // -----------------------------------------------------------------------
    // PHASE 5: Eraser Wipe & Restored Pristine Master Grid (F1625..F2288)
    // -----------------------------------------------------------------------
    const cellLeft = GRID_LEFT + c * PITCH;
    if (frame >= 1625 && frame < 1675 && cellLeft > wipeX) {
      const inRow0 = r === 0;
      const inCol2 = c === 2;
      const inRow1 = r === 1;
      if (inRow0 || inCol2 || inRow1) {
        return {
          val: 0,
          textColor: theme.bad,
          borderColor: theme.bad,
          bgColor: "rgba(235, 87, 87, 0.18)",
        };
      }
    }

    if (isOriginalZero) {
      const isHalosActive = frame >= 1922;
      return {
        val: 0,
        textColor: theme.pivot,
        borderColor: theme.pivot,
        bgColor: isHalosActive ? "rgba(255, 209, 102, 0.22)" : "rgba(255, 209, 102, 0.12)",
        glowColor: isHalosActive ? "rgba(255, 209, 102, 0.6)" : undefined,
        isOriginalDot: true,
      };
    }

    return {
      val: origVal,
      textColor: theme.chalkText,
      borderColor: "rgba(232, 228, 213, 0.45)",
      bgColor: "rgba(248, 246, 240, 0.04)",
    };
  };

  return (
    <div
      style={{
        position: "relative",
        width: 1920,
        height: 1080,
        overflow: "hidden",
        backgroundColor: theme.boardBg,
        fontFamily: fonts.hand,
        color: theme.chalkText,
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      {/* Audio VO */}
      <Audio src={staticFile("audio/013/02-understand.mp3")} />

      {/* Chalk Dust Bursts */}
      {frame >= 971 && frame <= 1005 && (
        <ChalkDust x={GRID_LEFT + 2 * PITCH + CELL_SIZE / 2} y={GRID_TOP + 1 * PITCH + CELL_SIZE / 2} start={971} color={theme.warn} count={16} radius={55} />
      )}
      {frame >= 1428 && frame <= 1460 && (
        <ChalkDust x={GRID_LEFT + 2 * PITCH} y={GRID_TOP + 1 * PITCH + CELL_SIZE / 2} start={1428} color={theme.bad} count={18} radius={65} />
      )}
      {frame >= 1625 && frame <= 1665 && (
        <ChalkDust x={960} y={GRID_TOP + GRID_HEIGHT / 2} start={1625} color={theme.chalkText} count={24} radius={120} />
      )}

      {/* Top Problem Header Bar (Continuity with Scene 01) */}
      <div
        style={{
          position: "absolute",
          top: 36,
          left: 80,
          right: 80,
          height: 64,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        {/* Left: Pattern Tag */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "6px 18px",
            borderRadius: 8,
            border: `1.5px solid ${theme.cardBorder}`,
            backgroundColor: "rgba(248, 246, 240, 0.05)",
            fontFamily: fonts.mono,
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "1.5px",
            color: theme.chalkText,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: theme.good,
              boxShadow: `0 0 8px ${theme.good}`,
            }}
          />
          01 · ARRAYS & HASHING
        </div>

        {/* Center: Problem Title */}
        <div
          style={{
            fontFamily: fonts.display,
            fontSize: 46,
            fontWeight: 700,
            color: theme.chalkText,
            letterSpacing: "0.5px",
            filter: `url(#${CHALK_FILTER_ID})`,
            textShadow: "0 0 20px rgba(248, 246, 240, 0.25), 0 2px 4px rgba(0,0,0,0.5)",
            transform: "rotate(-0.5deg)",
          }}
        >
          Set Matrix Zeroes
        </div>

        {/* Right: LeetCode Number & Difficulty */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            fontFamily: fonts.mono,
          }}
        >
          <span
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: theme.chalkDim,
              letterSpacing: "1px",
            }}
          >
            LEETCODE 73
          </span>
          <span
            style={{
              padding: "4px 14px",
              borderRadius: 6,
              backgroundColor: "rgba(255, 169, 77, 0.14)",
              border: `1.5px solid ${theme.better}`,
              color: theme.better,
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: "1px",
            }}
          >
            MEDIUM
          </span>
        </div>
      </div>

      {/* Status / Warning Banners (Y: 130..170, centered horizontally) */}
      {showNaiveProposal && (
        <div
          style={{
            position: "absolute",
            top: 132,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            pointerEvents: "none",
            opacity: interpolate(naiveProposalSpring, [0, 1], [0, 1]),
            transform: `scale(${interpolate(naiveProposalSpring, [0, 1], [0.95, 1])})`,
            zIndex: 15,
          }}
        >
          <div
            style={{
              padding: "6px 28px",
              borderRadius: 20,
              backgroundColor: "rgba(255, 209, 102, 0.12)",
              border: `1.5px solid ${theme.pivot}`,
              color: theme.pivot,
              fontFamily: fonts.hand,
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "0.5px",
              boxShadow: "0 0 16px rgba(255, 209, 102, 0.2)",
            }}
          >
            💡 Intuitive Idea: Immediately Zero Out Row & Column In-Place?
          </div>
        </div>
      )}

      {showDangerBanner && (
        <div
          style={{
            position: "absolute",
            top: 132,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            pointerEvents: "none",
            opacity: interpolate(dangerBannerSpring, [0, 1], [0, 1]),
            transform: `scale(${interpolate(dangerBannerSpring, [0, 1], [0.95, 1])})`,
            zIndex: 15,
          }}
        >
          <div
            style={{
              padding: "6px 28px",
              borderRadius: 20,
              backgroundColor: "rgba(255, 118, 117, 0.15)",
              border: `1.5px solid ${theme.warn}`,
              color: theme.warn,
              fontFamily: fonts.hand,
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "0.5px",
              boxShadow: "0 0 16px rgba(255, 118, 117, 0.3)",
            }}
          >
            ⚠️ IN-PLACE MUTATION DANGER: Writes Create New Zeros!
          </div>
        </div>
      )}

      {showCascadeWarning && (
        <div
          style={{
            position: "absolute",
            top: 132,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            pointerEvents: "none",
            opacity: interpolate(cascadeWarningSpring, [0, 1], [0, 1]),
            transform: `scale(${interpolate(cascadeWarningSpring, [0, 1], [0.95, 1])})`,
            zIndex: 15,
          }}
        >
          <div
            style={{
              padding: "6px 28px",
              borderRadius: 20,
              backgroundColor: "rgba(235, 87, 87, 0.18)",
              border: `1.5px solid ${theme.bad}`,
              color: theme.bad,
              fontFamily: fonts.hand,
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "0.5px",
              boxShadow: "0 0 20px rgba(235, 87, 87, 0.4)",
            }}
          >
            ❌ CASCADING CORRUPTION: Innocent Numbers Erroneously Destroyed!
          </div>
        </div>
      )}

      {/* Side Docked Callout Cards (Zero Collision with Grid) */}
      {/* 1. Zero Callout Card (Beats 09..11) */}
      {(showZero1Tag || showZero2Tag || showZero3Tag) && (
        <div
          style={{
            position: "absolute",
            left: GRID_LEFT + GRID_WIDTH + 32,
            top: GRID_TOP + 40,
            width: 280,
            padding: "12px 18px",
            borderRadius: 10,
            backgroundColor: "rgba(255, 209, 102, 0.10)",
            border: `1.5px solid ${theme.pivot}`,
            boxShadow: "0 0 16px rgba(255, 209, 102, 0.2)",
            zIndex: 30,
          }}
        >
          <div style={{ fontFamily: fonts.hand, fontSize: 20, fontWeight: 700, color: theme.pivot }}>
            {showZero1Tag && "📍 Zero 1: Cell (0, 2)"}
            {showZero2Tag && "📍 Zero 2: Cell (2, 0)"}
            {showZero3Tag && "📍 Zero 3: Cell (3, 3)"}
          </div>
          <div style={{ fontFamily: fonts.hand, fontSize: 16, color: theme.chalkText, marginTop: 4 }}>
            {showZero1Tag && "Located in the first row (row 0)."}
            {showZero2Tag && "Located in the first column (col 0)."}
            {showZero3Tag && "Located in the interior body."}
          </div>
        </div>
      )}

      {/* 2. Synthetic Zero Callout Card (Beats 16..18: F1137..F1428) */}
      {showFakeZeroCard && (
        <div
          style={{
            position: "absolute",
            left: GRID_LEFT + GRID_WIDTH + 32,
            top: GRID_TOP + 60,
            width: 320,
            padding: "14px 20px",
            borderRadius: 12,
            backgroundColor: frame >= 1330 ? "rgba(235, 87, 87, 0.16)" : "rgba(255, 118, 117, 0.14)",
            border: `2px solid ${frame >= 1330 ? theme.bad : theme.warn}`,
            boxShadow: `0 0 20px ${frame >= 1330 ? "rgba(235, 87, 87, 0.3)" : "rgba(255, 118, 117, 0.25)"}`,
            opacity: interpolate(fakeZeroSpring, [0, 1], [0, 1]),
            transform: `translateX(${interpolate(fakeZeroSpring, [0, 1], [20, 0])}px)`,
            zIndex: 30,
          }}
        >
          <div style={{ fontFamily: fonts.hand, fontSize: 22, fontWeight: 700, color: frame >= 1330 ? theme.bad : theme.warn }}>
            {frame >= 1330 ? "❌ MISCLASSIFIED AS SOURCE!" : "⚠️ SYNTHETIC ZERO DETECTED"}
          </div>
          <div style={{ fontFamily: fonts.hand, fontSize: 17, color: theme.chalkText, marginTop: 6, lineHeight: 1.4 }}>
            <strong>Cell (1, 2)</strong> was originally <strong>8</strong>.<br />
            Because Col 2 was zeroed, it is now <strong>0</strong>.<br />
            {frame >= 1330 ? (
              <span style={{ color: theme.bad, fontWeight: 700 }}>
                Scan encounters 0 and thinks it must zero Row 1!
              </span>
            ) : (
              <span style={{ color: theme.chalkDim }}>
                Will the scanner know this wasn't an original zero?
              </span>
            )}
          </div>
        </div>
      )}

      {/* 3. Innocent Destroyed Callout Card (Beat 21: F1550..F1625) */}
      {showDestroyedCard && (
        <div
          style={{
            position: "absolute",
            left: GRID_LEFT + GRID_WIDTH + 32,
            top: GRID_TOP + 40,
            width: 340,
            padding: "16px 22px",
            borderRadius: 12,
            backgroundColor: "rgba(235, 87, 87, 0.18)",
            border: `2px solid ${theme.bad}`,
            boxShadow: "0 0 24px rgba(235, 87, 87, 0.35)",
            opacity: interpolate(destroyedSpring, [0, 1], [0, 1]),
            transform: `translateX(${interpolate(destroyedSpring, [0, 1], [20, 0])}px)`,
            zIndex: 30,
          }}
        >
          <div style={{ fontFamily: fonts.hand, fontSize: 22, fontWeight: 800, color: theme.bad }}>
            💥 WRONG ANSWER PROVEN!
          </div>
          <div style={{ fontFamily: fonts.hand, fontSize: 17, color: theme.chalkText, marginTop: 8, lineHeight: 1.4 }}>
            Innocent values destroyed:<br />
            • <strong>(1, 1) = 7</strong> (No original 0 in Row 1!)<br />
            • <strong>(1, 4) = 10</strong> (No original 0 in Row 1!)<br />
            • <strong>(4, 4) = 25</strong> (Overwritten by cascade!)<br />
            <span style={{ color: theme.warn, fontWeight: 700 }}>
              The naive in-place write destroys data irreversibly!
            </span>
          </div>
        </div>
      )}

      {/* Center Stage Container with Entrance Physics */}
      <div
        style={{
          position: "absolute",
          left: GRID_LEFT,
          top: GRID_TOP,
          width: GRID_WIDTH,
          height: GRID_HEIGHT,
          transform: `scale(${gridEntranceScale})`,
          opacity: gridEntranceOpacity,
        }}
      >
        {/* Column Rulers (Top, Y: -42) */}
        {Array.from({ length: COLS }).map((_, c) => {
          const colX = c * PITCH;
          const isColActive =
            (frame >= 608 && frame < 668 && c === 2) ||
            (frame >= 668 && frame < 725 && c === 0) ||
            (frame >= 725 && frame < 805 && c === 3) ||
            (frame >= 971 && frame < 1089 && c === 2) ||
            (frame >= 1489 && frame < 1550 && c === 4);

          return (
            <div
              key={`col-${c}`}
              style={{
                position: "absolute",
                top: -42,
                left: colX,
                width: CELL_SIZE,
                textAlign: "center",
                fontFamily: fonts.mono,
                fontSize: 20,
                fontWeight: 700,
                color: isColActive ? theme.pivot : theme.cyan,
                opacity: rulersOpacity,
                transition: "color 0.2s ease",
              }}
            >
              [{c}]
            </div>
          );
        })}

        {/* Row Rulers (Left, X: -52) */}
        {Array.from({ length: ROWS }).map((_, r) => {
          const rowY = r * PITCH;
          const isRowActive =
            (frame >= 608 && frame < 668 && r === 0) ||
            (frame >= 668 && frame < 725 && r === 2) ||
            (frame >= 725 && frame < 805 && r === 3) ||
            (frame >= 971 && frame < 1089 && r === 0) ||
            (frame >= 1428 && frame < 1489 && r === 1);

          return (
            <div
              key={`row-${r}`}
              style={{
                position: "absolute",
                left: -52,
                top: rowY + (CELL_SIZE - 24) / 2,
                width: 40,
                textAlign: "right",
                fontFamily: fonts.mono,
                fontSize: 20,
                fontWeight: 700,
                color: isRowActive ? theme.pivot : theme.cyan,
                opacity: rulersOpacity,
                transition: "color 0.2s ease",
              }}
            >
              [{r}]
            </div>
          );
        })}

        {/* 5×5 Matrix Cells */}
        {Array.from({ length: ROWS }).map((_, r) =>
          Array.from({ length: COLS }).map((_, c) => {
            const cellLeft = c * PITCH;
            const cellTop = r * PITCH;
            const state = getCellVisual(r, c);

            return (
              <div
                key={`cell-${r}-${c}`}
                style={{
                  position: "absolute",
                  left: cellLeft,
                  top: cellTop,
                  width: CELL_SIZE,
                  height: CELL_SIZE,
                  borderRadius: 10,
                  backgroundColor: state.bgColor,
                  border: `2px ${state.isDashed ? "dashed" : "solid"} ${state.borderColor}`,
                  boxShadow: state.glowColor ? `0 0 18px ${state.glowColor}` : undefined,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  boxSizing: "border-box",
                  filter: `url(#${CHALK_FILTER_ID})`,
                }}
              >
                {/* Number inside cell */}
                {state.val !== null && (
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 32,
                      fontWeight: 800,
                      color: state.textColor,
                      letterSpacing: "0.5px",
                      position: "relative",
                    }}
                  >
                    {state.val}
                    {/* Strikethrough for destroyed non-zero */}
                    {state.isStrikethrough && (
                      <span
                        style={{
                          position: "absolute",
                          left: -8,
                          right: -8,
                          top: "50%",
                          height: 3,
                          backgroundColor: theme.bad,
                          transform: "rotate(-25deg)",
                          borderRadius: 2,
                        }}
                      />
                    )}
                  </span>
                )}

                {/* Subtle Amber Dot for Original Source Zeros */}
                {state.isOriginalDot && (
                  <div
                    style={{
                      position: "absolute",
                      top: 6,
                      right: 6,
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      backgroundColor: theme.pivot,
                      boxShadow: `0 0 6px ${theme.pivot}`,
                    }}
                  />
                )}
              </div>
            );
          })
        )}

        {/* Protective Cyan Barrier / Boundary Shield (Beat 25: F2080..F2288) */}
        {showShield && (
          <div
            style={{
              position: "absolute",
              left: -12,
              top: -12,
              width: GRID_WIDTH + 24,
              height: GRID_HEIGHT + 24,
              borderRadius: 16,
              border: `2px solid ${theme.cyan}`,
              backgroundColor: "rgba(92, 225, 230, 0.04)",
              boxShadow: "0 0 25px rgba(92, 225, 230, 0.35)",
              opacity: shieldProgress,
              pointerEvents: "none",
              zIndex: 25,
            }}
          >
            {/* Corner Locks */}
            <div
              style={{
                position: "absolute",
                top: 8,
                right: 12,
                fontFamily: fonts.mono,
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "1px",
                color: theme.cyan,
                backgroundColor: "rgba(25, 82, 60, 0.9)",
                padding: "2px 8px",
                borderRadius: 4,
                border: `1px solid ${theme.cyan}`,
              }}
            >
              🔒 LOCKED: ORIGINAL SOURCE STATE PRESERVED
            </div>
          </div>
        )}
      </div>

      {/* Scanner Reticle (Beats 13, 17, 18) */}
      {isScannerActive && (
        <div
          style={{
            position: "absolute",
            left: scannerPos.x - CELL_SIZE / 2 - 6,
            top: scannerPos.y - CELL_SIZE / 2 - 6,
            width: CELL_SIZE + 12,
            height: CELL_SIZE + 12,
            pointerEvents: "none",
            zIndex: 30,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 14,
              height: 14,
              borderTop: `3px solid ${scannerPos.color}`,
              borderLeft: `3px solid ${scannerPos.color}`,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 14,
              height: 14,
              borderTop: `3px solid ${scannerPos.color}`,
              borderRight: `3px solid ${scannerPos.color}`,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: 14,
              height: 14,
              borderBottom: `3px solid ${scannerPos.color}`,
              borderLeft: `3px solid ${scannerPos.color}`,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: 14,
              height: 14,
              borderBottom: `3px solid ${scannerPos.color}`,
              borderRight: `3px solid ${scannerPos.color}`,
            }}
          />
        </div>
      )}

      {/* Chalk Eraser Wiper Line (Beat 22: F1625..F1670) */}
      {isWiping && (
        <div
          style={{
            position: "absolute",
            left: wipeX,
            top: GRID_TOP - 30,
            width: 8,
            height: GRID_HEIGHT + 60,
            backgroundColor: "rgba(248, 246, 240, 0.75)",
            boxShadow: "0 0 20px rgba(248, 246, 240, 0.9)",
            borderRadius: 4,
            pointerEvents: "none",
            zIndex: 40,
          }}
        />
      )}

      {/* Core Invariant Banner (Beat 23..26: F1729..F2288) */}
      {showInvariant && (
        <div
          style={{
            position: "absolute",
            top: 712,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            pointerEvents: "none",
            opacity: interpolate(invariantSpring, [0, 1], [0, 1]),
            transform: `scale(${interpolate(invariantSpring, [0, 1], [0.94, 1])})`,
            zIndex: 35,
          }}
        >
          <div
            style={{
              padding: "12px 36px",
              borderRadius: 14,
              backgroundColor: "rgba(248, 246, 240, 0.08)",
              border: `2px solid ${theme.pivot}`,
              color: theme.chalkText,
              fontFamily: fonts.hand,
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "0.5px",
              boxShadow: "0 0 24px rgba(255, 209, 102, 0.25)",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span style={{ fontSize: 32 }}>⭐</span>
            <span>
              <strong style={{ color: theme.pivot }}>CORE INVARIANT:</strong> Created Zeros (Mutations) ≠ Original Zeros (Sources)
            </span>
          </div>
        </div>
      )}

      {/* Method 1 Teaser Card (Beat 26: F2206..F2288) */}
      {showMethod1Teaser && (
        <div
          style={{
            position: "absolute",
            top: 792,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            pointerEvents: "none",
            opacity: interpolate(method1Spring, [0, 1], [0, 1]),
            transform: `translateY(${interpolate(method1Spring, [0, 1], [20, 0])}px)`,
            zIndex: 36,
          }}
        >
          <div
            style={{
              padding: "10px 32px",
              borderRadius: 12,
              backgroundColor: "rgba(60, 229, 167, 0.12)",
              border: `1.5px solid ${theme.good}`,
              color: theme.good,
              fontFamily: fonts.mono,
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "1px",
              boxShadow: "0 0 20px rgba(60, 229, 167, 0.25)",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span>➡️ UP NEXT: METHOD 1 — FULL ORIGINAL COPY</span>
            <span style={{ color: theme.chalkDim, fontSize: 16 }}>•</span>
            <span style={{ color: theme.chalkText, fontSize: 18 }}>O(M × N) Space</span>
          </div>
        </div>
      )}

      {/* Bottom Subtitle Captions */}
      <Captions words={captionWords} bottom={38} fontSize={38} />
    </div>
  );
};
