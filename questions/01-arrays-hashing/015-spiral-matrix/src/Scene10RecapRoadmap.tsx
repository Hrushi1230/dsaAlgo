/**
 * Scene10RecapRoadmap.tsx — Scene 10 · Course Roadmap Update & Q15 Completion
 * Spiral Matrix (LeetCode 54) · Pattern 01 — Arrays & Hashing
 *
 * Implements the authoritative curriculum roadmap handoff:
 * - Beat 01 (F0..F49): "Question 15." (S10_Q15_ANNOUNCE) -> Focus on Row 15 (NOW ACTIVE)
 * - Beat 02 (F60..F127): "Spiral matrix is complete." (S10_Q15_COMPLETE) -> Mutates to COMPLETED ✓
 * - Beat 03 (F143..F296): "Our progress moves from 14 out of 227" (S10_PROGRESS_BEFORE) -> Camera pans up to progress pill
 * - Beat 04 (F296..F442): "to 15 out of 227." (S10_PROGRESS_AFTER) -> Odometer rolls 14 -> 15 with gold sheen
 * - Beat 05 (F462..F533): "And next question 16." (S10_NEXT_ANNOUNCE) -> Camera pans down to Row 16
 * - Beat 06 (F553..F616): "Subarray sum equals k." (S10_NEXT_PROBLEM) -> Row 16 marked UP NEXT ➔
 * - Beat 07 (F647..F682): "That is up next." (S10_UP_NEXT_LOCK) -> Settles to full canvas overview
 *
 * Total Duration: 682 frames @ 30fps (22.720s) strictly from sync/10-recap-roadmap.json
 */

import React, { useMemo } from "react";
import {
  Audio,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme, fonts } from "../../../../kit/lib/theme";
import { EASE } from "../../../../kit/lib/anim";
import { ChalkDust } from "../../../../kit/components/ChalkDust";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { MasterRoadmapV2 } from "../../../../kit/components/MasterRoadmapV2";
import syncData from "../sync/10-recap-roadmap.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings (from sync/10-recap-roadmap.json)
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => {
  let word = w.word;
  if (word === "15.") word = "15.";
  if (word === "227.") word = "227.";
  if (word === "16.") word = "16.";
  if (word === "k.") word = "K.";
  return {
    word,
    start: w.start_ms / 1000,
    end: w.end_ms / 1000,
  };
});

export const Scene10RecapRoadmap: React.FC = () => {
  const frame = useCurrentFrame();

  // =========================================================================
  // ROADMAP STATE MUTATIONS (Exact word-locked milestones)
  // =========================================================================

  // Problem 15 marks complete at F60 ("is complete")
  const isQ15Complete = frame >= 60;

  // Completed count odometer rolls strictly at F328..F365 ("to 15 out of 227")
  const completedCount =
    frame < 328
      ? 14
      : Math.min(
          15,
          Math.floor(
            interpolate(frame, [328, 365], [14, 15], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: EASE,
            })
          )
        );

  const completedGlobalNums = useMemo(() => {
    if (!isQ15Complete) {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    }
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  }, [isQ15Complete]);

  const activeBadgeLabel = isQ15Complete ? "COMPLETED ✓" : "NOW ACTIVE ●";

  // Spotlight row transitions:
  // F0..F461: Row 15
  // F462..F646: Row 16
  // F647..F682: undefined (overview)
  const spotlightRow =
    frame < 462 ? 15 : frame < 647 ? 16 : undefined;

  // Up Next designation on Row 16 appears at F553 ("Subarray sum equals k")
  const upNextGlobalNum = frame >= 553 ? 16 : undefined;

  // =========================================================================
  // CAMERA ENGINE (Smooth, professional pan/zoom)
  // =========================================================================
  const { camScale, camX, camY } = useMemo(() => {
    // F0..F142: Focus on Row 15
    if (frame < 143) {
      const scale = interpolate(frame, [0, 30], [1.01, 1.03], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const y = interpolate(frame, [0, 30], [0, -114], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: scale, camX: 0, camY: y };
    }

    // F143..F296: Pan up to course progress pill
    if (frame < 296) {
      const scale = interpolate(frame, [143, 185], [1.03, 1.02], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const y = interpolate(frame, [143, 185], [-114, 80], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: scale, camX: 0, camY: y };
    }

    // F296..F461: Hold on progress pill during odometer roll
    if (frame < 462) {
      return { camScale: 1.02, camX: 0, camY: 80 };
    }

    // F462..F646: Pan down to focus on Row 16
    if (frame < 647) {
      const scale = interpolate(frame, [462, 500], [1.02, 1.035], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const y = interpolate(frame, [462, 500], [80, -150], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: scale, camX: 0, camY: y };
    }

    // F647..F682: Settle smoothly to full overview
    const scale = interpolate(frame, [647, 675], [1.035, 1.00], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
    const y = interpolate(frame, [647, 675], [-150, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
    return { camScale: scale, camX: 0, camY: y };
  }, [frame]);

  return (
    <div
      style={{
        position: "relative",
        width: 1920,
        height: 1080,
        overflow: "hidden",
        backgroundColor: theme.boardBg,
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      {/* Audio VO */}
      <Audio src={staticFile("audio/015/scence10.mp3")} />

      {/* ChalkDust confirmation pulses */}
      {/* 1. Q15 Completion Pulse at Row 15 (F60..F90) */}
      {frame >= 60 && frame <= 95 && (
        <ChalkDust x={1090} y={700} start={60} color={theme.emerald} count={16} radius={55} />
      )}
      {/* 2. Progress milestone 15/227 pulse (F330..F365) */}
      {frame >= 330 && frame <= 365 && (
        <ChalkDust x={1720} y={54} start={330} color={theme.gold} count={20} radius={65} />
      )}
      {/* 3. Q16 Up Next Spotlight Pulse at Row 16 (F553..F585) */}
      {frame >= 553 && frame <= 585 && (
        <ChalkDust x={1090} y={744} start={553} color={theme.gold} count={16} radius={55} />
      )}

      {/* Authoritative Master Roadmap Architecture */}
      <MasterRoadmapV2
        completedCount={completedCount}
        completedGlobalNums={completedGlobalNums}
        activeGlobalNum={15}
        upNextGlobalNum={upNextGlobalNum}
        activePatternId={1}
        spotlightRow={spotlightRow}
        activeBadgeLabel={activeBadgeLabel}
        scale={camScale}
        translateX={camX}
        translateY={camY}
      />

      {/* Word-Synchronized Captions at Bottom */}
      <Captions words={captionWords} />
    </div>
  );
};
