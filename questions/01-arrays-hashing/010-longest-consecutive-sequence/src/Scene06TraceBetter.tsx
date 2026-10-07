import React, { useMemo } from "react";
import { useCurrentFrame, interpolate, staticFile, Audio } from "remotion";
import { theme, fonts } from "../../../../kit/lib/theme";
import { ArraySlotV2 } from "../../../../kit/components/array/ArraySlotV2";
import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import syncData from "../sync/06-trace-better.json";

// ============================================================================
// CONSTANTS & OPTICAL GEOMETRY (1920 x 1080)
// ============================================================================
const RAW_ARRAY = [8, 1, 6, 3, 2, 2, 4, 10, 9, 11, -1, 0];
const SORTED_ARRAY = [-1, 0, 1, 2, 2, 3, 4, 6, 8, 9, 10, 11];

// Mapping between raw indices and sorted indices:
// raw[0] = 8 -> sorted[8]
// raw[1] = 1 -> sorted[2]
// raw[2] = 6 -> sorted[7]
// raw[3] = 3 -> sorted[5]
// raw[4] = 2 (first) -> sorted[3]
// raw[5] = 2 (second) -> sorted[4]
// raw[6] = 4 -> sorted[6]
// raw[7] = 10 -> sorted[10]
// raw[8] = 9 -> sorted[9]
// raw[9] = 11 -> sorted[11]
// raw[10] = -1 -> sorted[0]
// raw[11] = 0 -> sorted[1]
const RAW_TO_SORTED = [8, 2, 7, 5, 3, 4, 6, 10, 9, 11, 0, 1];
const SORTED_TO_RAW = [10, 11, 1, 4, 5, 3, 6, 2, 0, 8, 7, 9];

const CARD_WIDTH = 96;
const CARD_HEIGHT = 118;
const CARD_GAP = 18;
const TOTAL_ROW_WIDTH = 12 * CARD_WIDTH + 11 * CARD_GAP; // 1350px
const ROW_START_X = Math.round((1920 - TOTAL_ROW_WIDTH) / 2); // 285px
const BASE_Y = 220; // Optical card top baseline (cards occupy Y: 220..338)
const RAIL_Y = 380; // Living Array Bar centerline

// Helper for slot positions
const getSlotX = (index: number) => ROW_START_X + index * (CARD_WIDTH + CARD_GAP);
const getSlotCenterX = (index: number) => getSlotX(index) + CARD_WIDTH / 2;

// Reverse flight schedules in Act 0 (spoken raw order: 8, 1, 6, 3, 2, 2, 4, 10, 9, 11, -1, 0)
const REVERSE_FLIGHTS = [
  { rawIdx: 0, start: 38, end: 62, peak: 45 },   // val 8
  { rawIdx: 1, start: 43, end: 68, peak: 35 },   // val 1
  { rawIdx: 2, start: 64, end: 88, peak: 48 },   // val 6
  { rawIdx: 3, start: 82, end: 106, peak: 32 },  // val 3
  { rawIdx: 4, start: 95, end: 118, peak: 26 },  // val 2 (first)
  { rawIdx: 5, start: 113, end: 136, peak: 26 }, // val 2 (second)
  { rawIdx: 6, start: 122, end: 146, peak: 32 }, // val 4
  { rawIdx: 7, start: 141, end: 165, peak: 42 }, // val 10
  { rawIdx: 8, start: 156, end: 180, peak: 36 }, // val 9
  { rawIdx: 9, start: 171, end: 195, peak: 42 }, // val 11
  { rawIdx: 10, start: 191, end: 215, peak: 60 },// val -1
  { rawIdx: 11, start: 209, end: 230, peak: 55 },// val 0
];

// Forward flight schedules in Act 1 (spoken sorted order: -1, 0, 1, 2, 2, 3, 4, 6, 8, 9, 10, 11)
const FORWARD_FLIGHTS = [
  { sortedIdx: 0, start: 268, end: 292, peak: 58 }, // val -1
  { sortedIdx: 1, start: 289, end: 313, peak: 52 }, // val 0
  { sortedIdx: 2, start: 313, end: 335, peak: 35 }, // val 1
  { sortedIdx: 3, start: 328, end: 351, peak: 28 }, // val 2 (first)
  { sortedIdx: 4, start: 351, end: 372, peak: 28 }, // val 2 (second)
  { sortedIdx: 5, start: 370, end: 392, peak: 34 }, // val 3
  { sortedIdx: 6, start: 389, end: 412, peak: 34 }, // val 4
  { sortedIdx: 7, start: 410, end: 433, peak: 46 }, // val 6
  { sortedIdx: 8, start: 433, end: 455, peak: 44 }, // val 8
  { sortedIdx: 9, start: 449, end: 472, peak: 38 }, // val 9
  { sortedIdx: 10, start: 472, end: 494, peak: 44 },// val 10
  { sortedIdx: 11, start: 491, end: 512, peak: 44 },// val 11
];

export const Scene06TraceBetter: React.FC = () => {
  const frame = useCurrentFrame();

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
  // Top Badge Text Evolution
  // ----------------------------------------------------
  const topBadgeText = useMemo(() => {
    if (frame < 242) return "SAME VALUES · RAW INPUT REWIND";
    if (frame < 527) return "BETTER APPROACH · SORTED ARRAY BAR";
    if (frame < 1021) return "TRACE · CONSECUTIVE RUN 1 (-1 → 2)";
    if (frame < 1370) return "TRACE · DUPLICATE HANDLING (2 == 2)";
    if (frame < 1699) return "TRACE · RUN EXTENDS (2 → 4, BEST = 6)";
    if (frame < 2120) return "TRACE · GAP FRACTURES (MISSING 5 & 7)";
    if (frame < 2463) return "TRACE · FINAL RUN (8 → 11, BEST = 6)";
    if (frame < 2834) return "THE THREE SCAN RULES · EXTEND / IGNORE / RESET";
    return "CODE HANDOFF · PREPARING SCAN IMPLEMENTATION";
  }, [frame]);

  // ----------------------------------------------------
  // Physical Card Positions & Interpolation (Acts 0 & 1)
  // ----------------------------------------------------
  const cardStates = useMemo(() => {
    return RAW_ARRAY.map((val, rawIdx) => {
      const sortedIdx = RAW_TO_SORTED[rawIdx];
      const sortedX = getSlotX(sortedIdx);
      const rawX = getSlotX(rawIdx);

      let currentX = sortedX;
      let currentY = BASE_Y;
      let isSortedIndexMode = frame < 40 || frame >= 490;

      if (frame < 23) {
        // Frame 0..23: Start at sorted slot
        currentX = sortedX;
        currentY = BASE_Y;
      } else if (frame < 38) {
        // Frame 23..38: Cards lift slightly in anticipation
        const lift = interpolate(frame, [23, 38], [0, 12], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        currentX = sortedX;
        currentY = BASE_Y - lift;
      } else if (frame < 242) {
        // Act 0: Reverse flights to raw slots
        const flight = REVERSE_FLIGHTS.find((f) => f.rawIdx === rawIdx)!;
        if (frame < flight.start) {
          currentX = sortedX;
          currentY = BASE_Y - 12;
        } else if (frame <= flight.end) {
          const t = interpolate(frame, [flight.start, flight.end], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          currentX = interpolate(t, [0, 1], [sortedX, rawX]);
          const arc = Math.sin(Math.PI * t) * flight.peak;
          currentY = BASE_Y - 12 - arc;
        } else {
          // Settled at raw slot
          const settleDown = interpolate(frame, [flight.end, flight.end + 6], [12, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          currentX = rawX;
          currentY = BASE_Y - settleDown;
        }
        isSortedIndexMode = false;
      } else if (frame < 527) {
        // Act 1: Forward flights to sorted slots
        const flight = FORWARD_FLIGHTS.find((f) => f.sortedIdx === sortedIdx)!;
        if (frame < flight.start) {
          currentX = rawX;
          currentY = BASE_Y;
        } else if (frame <= flight.end) {
          const t = interpolate(frame, [flight.start, flight.end], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          currentX = interpolate(t, [0, 1], [rawX, sortedX]);
          const arc = Math.sin(Math.PI * t) * flight.peak;
          currentY = BASE_Y - arc;
        } else {
          currentX = sortedX;
          currentY = BASE_Y;
        }
        isSortedIndexMode = frame >= flight.end;
      } else {
        // Act 2..8: Settled in sorted order
        currentX = sortedX;
        currentY = BASE_Y;

        // Micro-lift for duplicate second 2 in Act 3 (F1058..F1280)
        if (sortedIdx === 4 && frame >= 1058 && frame <= 1285) {
          const dupLift = interpolate(
            frame,
            [1058, 1075, 1270, 1285],
            [0, 18, 18, 0],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );
          currentY = BASE_Y - dupLift;
        }

        // Slight upward elevation for current active card during scan
        // Handled in individual card highlight logic
      }

      return {
        rawIdx,
        sortedIdx,
        val,
        x: currentX,
        y: currentY,
        isSortedIndexMode,
      };
    });
  }, [frame]);

  // ----------------------------------------------------
  // Dynamic Scan State (Lengths, Best, Pointers, Lenses)
  // ----------------------------------------------------
  // Current Length calculation
  const currentLengthDisplay = useMemo(() => {
    if (frame < 563) return "—";
    if (frame < 736) return 1;
    if (frame < 863) return 2;
    if (frame < 991) return 3;
    if (frame < 1473) return 4; // Stays 4 during duplicate 2 (Act 3)
    if (frame < 1600) return 5;
    if (frame < 1839) return 6;
    if (frame < 2054) return 1; // Reset to 1 for 6
    if (frame < 2194) return 1; // Reset to 1 for 8
    if (frame < 2293) return 2;
    if (frame < 2386) return 3;
    return 4; // Final run length
  }, [frame]);

  // Longest Streak (Best) calculation
  const longestStreakDisplay = useMemo(() => {
    if (frame < 563) return "—";
    if (frame < 736) return 1;
    if (frame < 863) return 2;
    if (frame < 991) return 3;
    if (frame < 1473) return 4;
    if (frame < 1642) return 5;
    return 6; // Rolls to 6 at F1642 when teacher says 'Best becomes 6' and stays 6 for the remainder!
  }, [frame]);

  // ----------------------------------------------------
  // Active Scan Bead & Focus Slot Coordinates
  // ----------------------------------------------------
  const scanBeadState = useMemo(() => {
    if (frame < 509) return null;

    if (frame < 527) {
      // Parked before slot 0
      return { x: getSlotCenterX(0) - 56, y: RAIL_Y, opacity: 0.7 };
    }
    if (frame < 602) return { x: getSlotCenterX(0), y: RAIL_Y, opacity: 1 }; // at -1
    if (frame < 758) {
      const t = interpolate(frame, [602, 626], [getSlotCenterX(0), getSlotCenterX(1)], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      return { x: t, y: RAIL_Y, opacity: 1 }; // at 0
    }
    if (frame < 889) {
      const t = interpolate(frame, [758, 782], [getSlotCenterX(1), getSlotCenterX(2)], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      return { x: t, y: RAIL_Y, opacity: 1 }; // at 1
    }
    if (frame < 1021) {
      const t = interpolate(frame, [889, 911], [getSlotCenterX(2), getSlotCenterX(3)], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      return { x: t, y: RAIL_Y, opacity: 1 }; // at first 2
    }
    if (frame < 1280) {
      // Pauses between first 2 and second 2 during duplicate inspection
      return { x: (getSlotCenterX(3) + getSlotCenterX(4)) / 2, y: RAIL_Y, opacity: 1 };
    }
    if (frame < 1370) {
      // Slides past duplicate notch to second 2
      const t = interpolate(frame, [1280, 1295], [(getSlotCenterX(3) + getSlotCenterX(4)) / 2, getSlotCenterX(4)], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      return { x: t, y: RAIL_Y, opacity: 0.85 };
    }
    if (frame < 1507) {
      const t = interpolate(frame, [1370, 1397], [getSlotCenterX(4), getSlotCenterX(5)], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      return { x: t, y: RAIL_Y, opacity: 1 }; // at 3
    }
    if (frame < 1699) {
      const t = interpolate(frame, [1507, 1535], [getSlotCenterX(5), getSlotCenterX(6)], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      return { x: t, y: RAIL_Y, opacity: 1 }; // at 4
    }
    if (frame < 1839) {
      return { x: getSlotCenterX(6), y: RAIL_Y, opacity: 1 }; // waiting at 4 before gap
    }
    if (frame < 1906) {
      const t = interpolate(frame, [1839, 1860], [getSlotCenterX(6), getSlotCenterX(7)], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      return { x: t, y: RAIL_Y, opacity: 1 }; // lands at 6
    }
    if (frame < 2054) {
      return { x: getSlotCenterX(7), y: RAIL_Y, opacity: 1 }; // waiting at 6 before gap 7
    }
    if (frame < 2120) {
      const t = interpolate(frame, [2054, 2075], [getSlotCenterX(7), getSlotCenterX(8)], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      return { x: t, y: RAIL_Y, opacity: 1 }; // lands at 8
    }
    if (frame < 2224) {
      const t = interpolate(frame, [2120, 2154], [getSlotCenterX(8), getSlotCenterX(9)], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      return { x: t, y: RAIL_Y, opacity: 1 }; // at 9
    }
    if (frame < 2323) {
      const t = interpolate(frame, [2224, 2249], [getSlotCenterX(9), getSlotCenterX(10)], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      return { x: t, y: RAIL_Y, opacity: 1 }; // at 10
    }
    if (frame < 2454) {
      const t = interpolate(frame, [2323, 2350], [getSlotCenterX(10), getSlotCenterX(11)], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      return { x: t, y: RAIL_Y, opacity: 1 }; // at 11
    }
    // Parks cleanly at end
    return { x: getSlotCenterX(11) + 45, y: RAIL_Y, opacity: 0.6 };
  }, [frame]);

  // ----------------------------------------------------
  // Comparison Lens Bracket Above Pairs (Y: 250..310)
  // ----------------------------------------------------
  const comparisonLens = useMemo(() => {
    if (frame < 602 || frame >= 2454) return null;

    let leftSlot = -1;
    let rightSlot = -1;
    let label = "+1";
    let color: string = theme.good;

    if (frame >= 602 && frame < 758) {
      leftSlot = 0; rightSlot = 1; label = "-1 + 1 = 0"; color = theme.good;
    } else if (frame >= 758 && frame < 889) {
      leftSlot = 1; rightSlot = 2; label = "0 + 1 = 1"; color = theme.good;
    } else if (frame >= 889 && frame < 1021) {
      leftSlot = 2; rightSlot = 3; label = "1 + 1 = 2"; color = theme.good;
    } else if (frame >= 1021 && frame < 1370) {
      leftSlot = 3; rightSlot = 4; label = "2 == 2 (Duplicate)"; color = theme.purple;
    } else if (frame >= 1370 && frame < 1507) {
      leftSlot = 3; rightSlot = 5; label = "2 + 1 = 3"; color = theme.good;
    } else if (frame >= 1507 && frame < 1699) {
      leftSlot = 5; rightSlot = 6; label = "3 + 1 = 4"; color = theme.good;
    } else if (frame >= 1699 && frame < 1839) {
      leftSlot = 6; rightSlot = 7; label = "4 → 6 (Gap: Missing 5)"; color = theme.warn;
    } else if (frame >= 1906 && frame < 2054) {
      leftSlot = 7; rightSlot = 8; label = "6 → 8 (Gap: Missing 7)"; color = theme.warn;
    } else if (frame >= 2120 && frame < 2224) {
      leftSlot = 8; rightSlot = 9; label = "8 + 1 = 9"; color = theme.good;
    } else if (frame >= 2224 && frame < 2323) {
      leftSlot = 9; rightSlot = 10; label = "9 + 1 = 10"; color = theme.good;
    } else if (frame >= 2323 && frame < 2454) {
      leftSlot = 10; rightSlot = 11; label = "10 + 1 = 11"; color = theme.good;
    }

    if (leftSlot === -1 || rightSlot === -1) return null;

    const x1 = getSlotX(leftSlot) - 6;
    const x2 = getSlotX(rightSlot) + CARD_WIDTH + 6;
    const width = x2 - x1;
    const isGap = (frame >= 1699 && frame < 1839) || (frame >= 1906 && frame < 2054);
    const top = isGap ? 85 : 145;

    return {
      x: x1,
      top,
      width,
      label,
      color,
    };
  }, [frame]);

  // ----------------------------------------------------
  // Phantom Sockets for Missing 5 & 7 in Act 5
  // ----------------------------------------------------
  const phantom5Progress = interpolate(frame, [1699, 1730, 1824, 1850], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const phantom7Progress = interpolate(frame, [1906, 1954, 2030, 2060], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Fracture gap expansion
  const fracture1Gap = interpolate(frame, [1790, 1815], [0, 16], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fracture2Gap = interpolate(frame, [2011, 2035], [0, 16], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ----------------------------------------------------
  // Living Array Bar Fill Geometries
  // ----------------------------------------------------
  // Run 1 active fill (-1 to 4, slots 0..6)
  const run1EndX = useMemo(() => {
    if (frame < 527) return getSlotCenterX(0);
    if (frame < 641) return getSlotCenterX(0);
    if (frame < 730) return interpolate(frame, [641, 730], [getSlotCenterX(0), getSlotCenterX(1)]);
    if (frame < 782) return getSlotCenterX(1);
    if (frame < 856) return interpolate(frame, [782, 856], [getSlotCenterX(1), getSlotCenterX(2)]);
    if (frame < 925) return getSlotCenterX(2);
    if (frame < 975) return interpolate(frame, [925, 975], [getSlotCenterX(2), getSlotCenterX(3)]);
    if (frame < 1405) return getSlotCenterX(3); // Stays at 3 during duplicate
    if (frame < 1457) return interpolate(frame, [1405, 1457], [getSlotCenterX(3), getSlotCenterX(5)]);
    if (frame < 1543) return getSlotCenterX(5);
    if (frame < 1600) return interpolate(frame, [1543, 1600], [getSlotCenterX(5), getSlotCenterX(6)]);
    return getSlotCenterX(6);
  }, [frame]);

  // Run 3 active fill (8 to 11, slots 8..11)
  const run3EndX = useMemo(() => {
    if (frame < 2054) return getSlotCenterX(8);
    if (frame < 2120) return getSlotCenterX(8);
    if (frame < 2175) return interpolate(frame, [2120, 2175], [getSlotCenterX(8), getSlotCenterX(9)]);
    if (frame < 2224) return getSlotCenterX(9);
    if (frame < 2274) return interpolate(frame, [2224, 2274], [getSlotCenterX(9), getSlotCenterX(10)]);
    if (frame < 2323) return getSlotCenterX(10);
    if (frame < 2372) return interpolate(frame, [2323, 2372], [getSlotCenterX(10), getSlotCenterX(11)]);
    return getSlotCenterX(11);
  }, [frame]);

  // ----------------------------------------------------
  // Acts 7 & 8: Three Rules Grammar & Code Handoff
  // ----------------------------------------------------
  const act7RulesProgress = interpolate(frame, [2463, 2520], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const rule1ExtendProgress = interpolate(frame, [2553, 2590], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const rule2IgnoreProgress = interpolate(frame, [2616, 2660], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const rule3ResetProgress = interpolate(frame, [2726, 2770], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Act 8: Code Guide Morph & Leftward Glide (F2834..F2926)
  const act8HandoffProgress = interpolate(frame, [2834, 2880], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act8EditorGlide = interpolate(frame, [2880, 2920], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "relative",
        width: 1920,
        height: 1080,
        backgroundColor: theme.boardBg,
        overflow: "hidden",
        fontFamily: fonts.hand,
      }}
    >
      {/* 1. Chalkboard Filter Primitives & Background Texture */}
      <ChalkFilters />
      <ChalkboardBackground />

      {/* 2. Narration Audio Track */}
      <Audio src={staticFile("audio/010/06-trace-better.mp3")} />

      {/* ========================================================================= */}
      {/* TOP HEADER & PEDAGOGICAL STATUS BADGE                                     */}
      {/* ========================================================================= */}
      <div
        style={{
          position: "absolute",
          top: 30,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          zIndex: 40,
        }}
      >
        <div
          style={{
            padding: "8px 28px",
            borderRadius: 24,
            backgroundColor: "rgba(10, 36, 25, 0.92)",
            border: `2px solid ${frame < 242 ? theme.cyan : theme.good}`,
            boxShadow: `0 0 16px ${frame < 242 ? "rgba(92, 225, 230, 0.3)" : "rgba(60, 229, 167, 0.35)"}`,
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: frame < 242 ? theme.cyan : theme.good,
              boxShadow: `0 0 8px ${frame < 242 ? theme.cyan : theme.good}`,
            }}
          />
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 16,
              fontWeight: 700,
              color: frame < 242 ? theme.cyan : theme.good,
              letterSpacing: 1.5,
            }}
          >
            {topBadgeText}
          </span>
        </div>
      </div>

      {/* Context Sub-header Banner (Y: 72..125) */}
      <div
        style={{
          position: "absolute",
          top: 72,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 38,
          opacity: 1,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
          <span
            style={{
              fontFamily: fonts.hand,
              fontSize: 28,
              fontWeight: 700,
              color: frame < 242 ? theme.cyan : theme.chalkText,
              letterSpacing: 0.8,
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.6)",
            }}
          >
            {frame < 242
              ? "Raw Input Unsorted: Repeated Search Cost Was O(n³)"
              : frame < 527
              ? "Phase 1: Sort Array in O(n log n) Time"
              : frame < 2463
              ? "Phase 2: One-Pass Linear Scan in O(n) Time"
              : "Summary: Three Deterministic Scan Rules"}
          </span>
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 13,
              color: theme.chalkDim,
              letterSpacing: 1.2,
            }}
          >
            {frame < 242
              ? "REWINDING CARDS TO ORIGINAL POSITIONS"
              : frame < 527
              ? "ARRAY ASSEMBLES INTO MEASURED CONTINUOUS RAIL"
              : frame < 2463
              ? "INSPECTING ADJACENT NEIGHBOURS: nums[i] vs nums[i-1]"
              : "EXTEND FOR CONSECUTIVE · IGNORE DUPLICATE · RESET ON GAP"}
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* COMPARISON LENS BRACKET (Y: 180..265)                                     */}
      {/* ========================================================================= */}
      {comparisonLens && (
        <div
          style={{
            position: "absolute",
            left: comparisonLens.x,
            top: comparisonLens.top,
            width: comparisonLens.width,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pointerEvents: "none",
            zIndex: 35,
          }}
        >
          {/* Active Mathematical / Semantic Pill */}
          <div
            style={{
              padding: "4px 18px",
              borderRadius: 14,
              backgroundColor: "rgba(10, 36, 25, 0.95)",
              border: `2px solid ${comparisonLens.color}`,
              boxShadow: `0 0 16px ${comparisonLens.color}`,
              marginBottom: 6,
            }}
          >
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 18,
                fontWeight: 700,
                color: comparisonLens.color,
                letterSpacing: 1,
              }}
            >
              {comparisonLens.label}
            </span>
          </div>

          {/* Lens Bracket Arc */}
          <svg width={comparisonLens.width} height="16" viewBox={`0 0 ${comparisonLens.width} 16`}>
            <path
              d={`M 4,14 L 4,4 L ${comparisonLens.width / 2 - 8},4 L ${comparisonLens.width / 2},0 L ${comparisonLens.width / 2 + 8},4 L ${comparisonLens.width - 4},4 L ${comparisonLens.width - 4},14`}
              fill="none"
              stroke={comparisonLens.color}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MASTER 12 CARDS (Continuous Physical Identity Across Acts)                */}
      {/* ========================================================================= */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 20,
          opacity: 1,
        }}
      >
        {cardStates.map((card) => {
          // Highlight states for cards during scan
          const isCurrentFocus =
            frame >= 527 &&
            frame < 2463 &&
            ((card.sortedIdx === 0 && frame < 602) ||
              (card.sortedIdx === 1 && frame >= 602 && frame < 758) ||
              (card.sortedIdx === 2 && frame >= 758 && frame < 889) ||
              (card.sortedIdx === 3 && frame >= 889 && frame < 1021) ||
              (card.sortedIdx === 4 && frame >= 1021 && frame < 1280) ||
              (card.sortedIdx === 5 && frame >= 1370 && frame < 1507) ||
              (card.sortedIdx === 6 && frame >= 1507 && frame < 1699) ||
              (card.sortedIdx === 7 && frame >= 1839 && frame < 1906) ||
              (card.sortedIdx === 8 && frame >= 2054 && frame < 2120) ||
              (card.sortedIdx === 9 && frame >= 2120 && frame < 2224) ||
              (card.sortedIdx === 10 && frame >= 2224 && frame < 2323) ||
              (card.sortedIdx === 11 && frame >= 2323 && frame < 2454));

          const isDuplicateDim = card.sortedIdx === 4 && frame >= 1280;
          const isVisitedRun1 =
            (card.sortedIdx === 0 && frame >= 527) ||
            (card.sortedIdx === 1 && frame >= 641) ||
            (card.sortedIdx === 2 && frame >= 782) ||
            (card.sortedIdx === 3 && frame >= 925) ||
            (card.sortedIdx === 4 && frame >= 1058) ||
            (card.sortedIdx === 5 && frame >= 1405) ||
            (card.sortedIdx === 6 && frame >= 1543);
          const isVisitedRun2 = card.sortedIdx === 7 && frame >= 1839;
          const isVisitedRun3 =
            (card.sortedIdx === 8 && frame >= 2054) ||
            (card.sortedIdx === 9 && frame >= 2120) ||
            (card.sortedIdx === 10 && frame >= 2224) ||
            (card.sortedIdx === 11 && frame >= 2323);

          let borderColor: string = "rgba(248, 246, 240, 0.25)";
          let textColor: string = theme.chalkText;
          let bgColor: string = "rgba(10, 36, 25, 0.8)";
          let shadow: string = "0 6px 16px rgba(0, 0, 0, 0.35)";

          if (card.sortedIdx === 4 && frame >= 1058 && frame < 1280) {
            // Duplicate spotlight
            borderColor = theme.purple;
            textColor = theme.purple;
            bgColor = "rgba(179, 136, 255, 0.18)";
            shadow = `0 0 20px ${theme.purple}`;
          } else if (isCurrentFocus) {
            borderColor = theme.pivot;
            textColor = theme.pivot;
            bgColor = "rgba(255, 209, 102, 0.18)";
            shadow = `0 0 24px ${theme.pivot}`;
          } else if (frame >= 2463) {
            // Act 7 & 8: Show final state of all runs
            if (card.sortedIdx === 4) {
              // duplicate 2
              borderColor = theme.purple;
              textColor = theme.purple;
              bgColor = "rgba(179, 136, 255, 0.15)";
            } else if (isVisitedRun1) {
              // Winning longest consecutive run
              borderColor = theme.good;
              textColor = theme.good;
              bgColor = "rgba(60, 229, 167, 0.15)";
              shadow = `0 0 16px rgba(60, 229, 167, 0.35)`;
            } else if (isVisitedRun3) {
              borderColor = "rgba(60, 229, 167, 0.6)";
              textColor = theme.good;
              bgColor = "rgba(60, 229, 167, 0.08)";
            } else {
              borderColor = "rgba(248, 246, 240, 0.3)";
              textColor = theme.chalkDim;
            }
          } else if (isVisitedRun1 && frame < 1790) {
            borderColor = theme.good;
            textColor = theme.good;
            bgColor = "rgba(60, 229, 167, 0.12)";
          } else if (isVisitedRun2 && frame < 2011) {
            borderColor = theme.good;
            textColor = theme.good;
            bgColor = "rgba(60, 229, 167, 0.12)";
          } else if (isVisitedRun3) {
            borderColor = theme.good;
            textColor = theme.good;
            bgColor = "rgba(60, 229, 167, 0.12)";
          } else if (isDuplicateDim) {
            borderColor = "rgba(179, 136, 255, 0.25)";
            textColor = "rgba(179, 136, 255, 0.6)";
            bgColor = "rgba(10, 36, 25, 0.6)";
          }

          return (
            <div
              key={card.rawIdx}
              style={{
                position: "absolute",
                left: card.x,
                top: card.y,
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                zIndex: isCurrentFocus ? 30 : 20,
              }}
            >
              {/* Foundation V2 Rough Chalk Slot Shell */}
              <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                <ArraySlotV2
                  width={CARD_WIDTH}
                  height={CARD_HEIGHT}
                  stroke={borderColor}
                  strokeWidth={isCurrentFocus ? 3 : 2}
                  fill={theme.boardBg}
                  semanticState={isCurrentFocus ? "current" : isDuplicateDim ? "eliminated" : "default"}
                  seed={card.rawIdx + 1}
                />
              </div>

              {/* Index Tag */}
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 13,
                  color: theme.chalkDim,
                  marginBottom: 4,
                  zIndex: 2,
                }}
              >
                [{card.isSortedIndexMode ? card.sortedIdx : card.rawIdx}]
              </span>

              {/* Number Value */}
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 38,
                  fontWeight: 700,
                  color: textColor,
                  zIndex: 2,
                }}
              >
                {card.val}
              </span>

              {/* Duplicate "SKIP" pill on second 2 */}
              {card.sortedIdx === 4 && frame >= 1280 && frame < 2463 && (
                <div
                  style={{
                    position: "absolute",
                    bottom: -24,
                    padding: "2px 8px",
                    borderRadius: 8,
                    backgroundColor: "rgba(179, 136, 255, 0.25)",
                    border: `1px solid ${theme.purple}`,
                    fontFamily: fonts.mono,
                    fontSize: 11,
                    color: theme.purple,
                    fontWeight: 700,
                    zIndex: 5,
                  }}
                >
                  SKIP
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* PHANTOM SOCKETS (MISSING 5 AND MISSING 7) IN ACT 5                        */}
      {/* ========================================================================= */}
      {phantom5Progress > 0 && (
        <div
          style={{
            position: "absolute",
            left: (getSlotCenterX(6) + getSlotCenterX(7)) / 2 - 32,
            top: 215 - phantom5Progress * 15,
            width: 64,
            height: 76,
            borderRadius: 12,
            backgroundColor: "rgba(255, 118, 117, 0.18)",
            border: `2.5px dashed ${theme.warn}`,
            boxShadow: `0 0 20px rgba(255, 118, 117, 0.5)`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            opacity: phantom5Progress,
            zIndex: 35,
          }}
        >
          <span style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.warn, fontWeight: 700 }}>
            MISSING
          </span>
          <span style={{ fontFamily: fonts.mono, fontSize: 28, fontWeight: 700, color: theme.warn }}>
            5 ?
          </span>
        </div>
      )}

      {phantom7Progress > 0 && (
        <div
          style={{
            position: "absolute",
            left: (getSlotCenterX(7) + getSlotCenterX(8)) / 2 - 32,
            top: 215 - phantom7Progress * 15,
            width: 64,
            height: 76,
            borderRadius: 12,
            backgroundColor: "rgba(255, 118, 117, 0.18)",
            border: `2.5px dashed ${theme.warn}`,
            boxShadow: `0 0 20px rgba(255, 118, 117, 0.5)`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            opacity: phantom7Progress,
            zIndex: 35,
          }}
        >
          <span style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.warn, fontWeight: 700 }}>
            MISSING
          </span>
          <span style={{ fontFamily: fonts.mono, fontSize: 28, fontWeight: 700, color: theme.warn }}>
            7 ?
          </span>
        </div>
      )}

      {/* ========================================================================= */}
      {/* THE LIVING ARRAY BAR / CONSECUTIVE RAIL (Y: 470..530)                     */}
      {/* ========================================================================= */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: RAIL_Y - 30,
          height: 80,
          pointerEvents: "none",
          zIndex: 15,
          opacity: 1,
        }}
      >
        <svg width="1920" height="80" viewBox="0 0 1920 80" style={{ overflow: "visible" }}>
          {/* Act 0: Wavy Raw Array Bar (F40..F241) */}
          {frame < 265 ? (
            <path
              d={
                frame < 40
                  ? `M ${ROW_START_X} 30 L ${ROW_START_X + TOTAL_ROW_WIDTH} 30`
                  : `M ${ROW_START_X} 30 
                     C ${ROW_START_X + 200} ${30 - 15 * Math.sin(frame * 0.08)}, 
                       ${ROW_START_X + 450} ${30 + 18 * Math.sin(frame * 0.07)}, 
                       ${ROW_START_X + 700} 30 
                     C ${ROW_START_X + 900} ${30 - 16 * Math.cos(frame * 0.09)}, 
                       ${ROW_START_X + 1100} ${30 + 16 * Math.sin(frame * 0.06)}, 
                       ${ROW_START_X + TOTAL_ROW_WIDTH} 30`
              }
              fill="none"
              stroke={theme.chalkDim}
              strokeWidth="3.5"
              strokeDasharray="6 4"
            />
          ) : (
            /* Act 1..8: Straight Measured Array Rail with Notches */
            <g>
              {/* Segment 1: Slots 0 to 6 (left of fracture 1) */}
              <line
                x1={ROW_START_X}
                y1="30"
                x2={getSlotCenterX(6) + 54 - fracture1Gap}
                y2="30"
                stroke={theme.chalkDim}
                strokeWidth="3.5"
              />

              {/* Segment 2: Slot 7 (between fracture 1 and fracture 2) */}
              <line
                x1={getSlotCenterX(7) - 54 + fracture1Gap}
                y1="30"
                x2={getSlotCenterX(7) + 54 - fracture2Gap}
                y2="30"
                stroke={theme.chalkDim}
                strokeWidth="3.5"
              />

              {/* Segment 3: Slots 8 to 11 (right of fracture 2) */}
              <line
                x1={getSlotCenterX(8) - 54 + fracture2Gap}
                y1="30"
                x2={ROW_START_X + TOTAL_ROW_WIDTH}
                y2="30"
                stroke={theme.chalkDim}
                strokeWidth="3.5"
              />

              {/* Active Mint Fill Overlay - Run 1 (-1 to 4) */}
              {frame >= 527 && (
                <line
                  x1={getSlotCenterX(0)}
                  y1="30"
                  x2={run1EndX}
                  y2="30"
                  stroke={theme.good}
                  strokeWidth="5"
                  strokeLinecap="round"
                  style={{
                    filter: `drop-shadow(0 0 10px ${theme.good})`,
                    opacity: frame >= 1790 ? 0.35 : 1, // Dims to historical record after fracture 1
                  }}
                />
              )}

              {/* Active Mint Fill Overlay - Run 2 (Slot 7, Value 6) */}
              {frame >= 1839 && (
                <circle
                  cx={getSlotCenterX(7)}
                  cy="30"
                  r="6"
                  fill={theme.good}
                  style={{
                    filter: `drop-shadow(0 0 10px ${theme.good})`,
                    opacity: frame >= 2011 ? 0.35 : 1,
                  }}
                />
              )}

              {/* Active Mint Fill Overlay - Run 3 (Slots 8 to 11, Values 8..11) */}
              {frame >= 2054 && (
                <line
                  x1={getSlotCenterX(8)}
                  y1="30"
                  x2={run3EndX}
                  y2="30"
                  stroke={theme.good}
                  strokeWidth="5"
                  strokeLinecap="round"
                  style={{ filter: `drop-shadow(0 0 10px ${theme.good})` }}
                />
              )}

              {/* Semantic Slot Notches */}
              {SORTED_ARRAY.map((_, slotIdx) => {
                const cx = getSlotCenterX(slotIdx);
                const isVisitedRun1 = slotIdx <= 6 && frame >= 527;
                const isVisitedRun2 = slotIdx === 7 && frame >= 1839;
                const isVisitedRun3 = slotIdx >= 8 && slotIdx <= 11 && frame >= 2054;
                const isCurrentActive =
                  (slotIdx === 0 && frame >= 527) ||
                  (slotIdx === 1 && frame >= 730) ||
                  (slotIdx === 2 && frame >= 856) ||
                  (slotIdx === 3 && frame >= 975) ||
                  (slotIdx === 5 && frame >= 1457) ||
                  (slotIdx === 6 && frame >= 1600) ||
                  (slotIdx === 7 && frame >= 1839) ||
                  (slotIdx === 8 && frame >= 2054) ||
                  (slotIdx === 9 && frame >= 2175) ||
                  (slotIdx === 10 && frame >= 2274) ||
                  (slotIdx === 11 && frame >= 2372);

                const isDup = slotIdx === 4;

                // Notch Color
                let notchColor: string = theme.chalkDim;
                if (isDup && frame >= 1058) {
                  notchColor = theme.purple;
                } else if (isCurrentActive) {
                  notchColor = theme.good;
                } else if (isVisitedRun1 || isVisitedRun2 || isVisitedRun3) {
                  notchColor = theme.good;
                }

                if (isDup && frame >= 1058) {
                  // Duplicate Double Notch (||)
                  return (
                    <g key={slotIdx}>
                      <line x1={cx - 4} y1="18" x2={cx - 4} y2="42" stroke={notchColor} strokeWidth="3" />
                      <line x1={cx + 4} y1="18" x2={cx + 4} y2="42" stroke={notchColor} strokeWidth="3" />
                    </g>
                  );
                }

                return (
                  <line
                    key={slotIdx}
                    x1={cx}
                    y1="20"
                    x2={cx}
                    y2="40"
                    stroke={notchColor}
                    strokeWidth={isCurrentActive ? "3.5" : "2"}
                  />
                );
              })}

              {/* Purple Ripple on Duplicate Segment in Act 3 (F1070..F1120) */}
              {frame >= 1070 && frame <= 1160 && (
                <path
                  d={`M ${getSlotCenterX(3)} 30 
                     Q ${(getSlotCenterX(3) + getSlotCenterX(4)) / 2} ${30 + 12 * Math.sin((frame - 1070) * 0.4)} 
                       ${getSlotCenterX(4)} 30`}
                  fill="none"
                  stroke={theme.purple}
                  strokeWidth="4"
                  style={{ filter: `drop-shadow(0 0 10px ${theme.purple})` }}
                />
              )}

              {/* Fracture Marks at Gaps */}
              {frame >= 1790 && (
                <text
                  x={(getSlotCenterX(6) + getSlotCenterX(7)) / 2}
                  y="36"
                  fill={theme.warn}
                  fontFamily={fonts.mono}
                  fontSize="22"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  ⚡
                </text>
              )}
              {frame >= 2011 && (
                <text
                  x={(getSlotCenterX(7) + getSlotCenterX(8)) / 2}
                  y="36"
                  fill={theme.warn}
                  fontFamily={fonts.mono}
                  fontSize="22"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  ⚡
                </text>
              )}
            </g>
          )}

          {/* Active Scan Bead */}
          {scanBeadState && (
            <g opacity={scanBeadState.opacity}>
              <circle
                cx={scanBeadState.x}
                cy="30"
                r="9"
                fill={theme.pivot}
                style={{ filter: `drop-shadow(0 0 12px ${theme.pivot})` }}
              />
              <circle cx={scanBeadState.x} cy="30" r="4" fill="#FFFFFF" />
            </g>
          )}
        </svg>

        {/* Array Bar Label (Visible during walkthrough acts) */}
        {frame < 2463 && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 14,
                color: frame < 242 ? theme.cyan : theme.chalkDim,
                letterSpacing: 1.2,
              }}
            >
              {frame < 242 ? "▲ WAVY RAW ARRAY (UNSORTED)" : "▲ LIVING ARRAY BAR / CONSECUTIVE RAIL"}
            </span>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* HUD COUNTERS (CURRENT LENGTH & LONGEST STREAK) (Y: 445..555)               */}
      {/* ========================================================================= */}
      {frame >= 509 && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 445,
            display: "flex",
            justifyContent: "center",
            gap: 60,
            pointerEvents: "none",
            zIndex: 25,
          }}
        >
          {/* Current Length Card */}
          <div
            style={{
              padding: "14px 42px",
              borderRadius: 18,
              backgroundColor: "rgba(10, 36, 25, 0.92)",
              border: `2px solid ${theme.pivot}`,
              boxShadow: `0 0 24px rgba(255, 209, 102, 0.35)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minWidth: 320,
            }}
          >
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 15,
                fontWeight: 700,
                color: theme.pivot,
                letterSpacing: 1.5,
                marginBottom: 2,
              }}
            >
              CURRENT LENGTH
            </span>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 48,
                fontWeight: 800,
                color: theme.chalkText,
              }}
            >
              {currentLengthDisplay}
            </span>
          </div>

          {/* Longest Streak (Best) Card */}
          <div
            style={{
              padding: "14px 42px",
              borderRadius: 18,
              backgroundColor: "rgba(10, 36, 25, 0.92)",
              border: `2px solid ${theme.good}`,
              boxShadow: `0 0 24px rgba(60, 229, 167, 0.4)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minWidth: 320,
            }}
          >
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 15,
                fontWeight: 700,
                color: theme.good,
                letterSpacing: 1.5,
                marginBottom: 2,
              }}
            >
              LONGEST STREAK (BEST)
            </span>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 48,
                fontWeight: 800,
                color: theme.good,
              }}
            >
              {longestStreakDisplay}
            </span>
            {frame >= 1642 && (
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 13,
                  color: theme.good,
                  marginTop: 2,
                  letterSpacing: 1,
                  fontWeight: 700,
                }}
              >
                ★ Run -1..4 = Length 6 (BEST)
              </span>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ACT 7: THE THREE SCAN RULES STRIP (Y: 585..775)                           */}
      {/* ========================================================================= */}
      {act7RulesProgress > 0 && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 585,
            display: "flex",
            justifyContent: "center",
            gap: 28,
            opacity: act7RulesProgress,
            pointerEvents: "none",
            zIndex: 35,
          }}
        >
          {/* Rule 1: EXTEND */}
          <div
            style={{
              width: 440,
              height: 180,
              padding: "18px 28px",
              borderRadius: 18,
              backgroundColor: "rgba(10, 36, 25, 0.96)",
              border: `2.5px solid ${theme.good}`,
              boxShadow: `0 0 25px rgba(60, 229, 167, 0.4)`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              opacity: rule1ExtendProgress,
              transform: `translateY(${interpolate(rule1ExtendProgress, [0, 1], [15, 0])}px)`,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.good, letterSpacing: 1.2 }}>
                RULE 1 · +1 CONSECUTIVE
              </span>
              <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: theme.good, boxShadow: `0 0 8px ${theme.good}` }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ fontSize: 32, color: theme.good }}>━━━━▶</span>
              <span style={{ fontFamily: fonts.mono, fontSize: 28, fontWeight: 800, color: theme.good, letterSpacing: 1 }}>
                EXTEND
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, color: theme.chalkText }}>
                nums[i] == prev + 1  ➔  current += 1
              </span>
              <span style={{ fontFamily: fonts.hand, fontSize: 15, color: theme.chalkDim }}>
                Chain continues smoothly without a break
              </span>
            </div>
          </div>

          {/* Rule 2: IGNORE */}
          <div
            style={{
              width: 440,
              height: 180,
              padding: "18px 28px",
              borderRadius: 18,
              backgroundColor: "rgba(10, 36, 25, 0.96)",
              border: `2.5px solid ${theme.purple}`,
              boxShadow: `0 0 25px rgba(179, 136, 255, 0.4)`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              opacity: rule2IgnoreProgress,
              transform: `translateY(${interpolate(rule2IgnoreProgress, [0, 1], [15, 0])}px)`,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.purple, letterSpacing: 1.2 }}>
                RULE 2 · SAME VALUE (DUPLICATE)
              </span>
              <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: theme.purple, boxShadow: `0 0 8px ${theme.purple}` }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ fontSize: 32, color: theme.purple }}>≡≡ ↺</span>
              <span style={{ fontFamily: fonts.mono, fontSize: 28, fontWeight: 800, color: theme.purple, letterSpacing: 1 }}>
                IGNORE / SKIP
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, color: theme.chalkText }}>
                nums[i] == prev  ➔  continue
              </span>
              <span style={{ fontFamily: fonts.hand, fontSize: 15, color: theme.chalkDim }}>
                Length remains identical, no fracture
              </span>
            </div>
          </div>

          {/* Rule 3: RESET */}
          <div
            style={{
              width: 440,
              height: 180,
              padding: "18px 28px",
              borderRadius: 18,
              backgroundColor: "rgba(10, 36, 25, 0.96)",
              border: `2.5px solid ${theme.warn}`,
              boxShadow: `0 0 25px rgba(255, 118, 117, 0.4)`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              opacity: rule3ResetProgress,
              transform: `translateY(${interpolate(rule3ResetProgress, [0, 1], [15, 0])}px)`,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.warn, letterSpacing: 1.2 }}>
                RULE 3 · GAP / MISSING (&gt; 1)
              </span>
              <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: theme.warn, boxShadow: `0 0 8px ${theme.warn}` }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ fontSize: 32, color: theme.warn }}>━ ⚡ ━</span>
              <span style={{ fontFamily: fonts.mono, fontSize: 28, fontWeight: 800, color: theme.warn, letterSpacing: 1 }}>
                RESET TO 1
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, color: theme.chalkText }}>
                nums[i] &gt; prev + 1  ➔  current = 1
              </span>
              <span style={{ fontFamily: fonts.hand, fontSize: 15, color: theme.chalkDim }}>
                Sequence broke, start fresh streak count
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ACT 8: SCENE 07 HANDOFF CALLOUT BANNER (Y: 800..875)                      */}
      {/* ========================================================================= */}
      {act8HandoffProgress > 0 && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 800,
            display: "flex",
            justifyContent: "center",
            opacity: act8HandoffProgress,
            transform: `translateY(${interpolate(act8HandoffProgress, [0, 1], [15, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}px)`,
            zIndex: 45,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              padding: "14px 44px",
              borderRadius: 24,
              backgroundColor: "rgba(10, 36, 25, 0.96)",
              border: `2px solid ${theme.good}`,
              boxShadow: `0 0 30px rgba(60, 229, 167, 0.45)`,
              display: "flex",
              alignItems: "center",
              gap: 24,
            }}
          >
            <span style={{ fontSize: 26 }}>⚡</span>
            <span
              style={{
                fontFamily: fonts.hand,
                fontSize: 26,
                fontWeight: 700,
                color: theme.chalkText,
                letterSpacing: 0.5,
              }}
            >
              All 3 rules proven! Now let's implement this scan in code.
            </span>
            <div
              style={{
                padding: "8px 22px",
                borderRadius: 14,
                backgroundColor: theme.good,
                color: "#0c2b1e",
                fontFamily: fonts.mono,
                fontSize: 15,
                fontWeight: 800,
                letterSpacing: 1.2,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              NEXT: SCENE 07 · CODE SCAN ▶
            </div>
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
