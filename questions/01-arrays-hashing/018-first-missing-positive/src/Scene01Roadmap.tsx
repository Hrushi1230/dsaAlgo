/**
 * Scene01Roadmap.tsx — Scene 01 · Roadmap Resume + Q18 Activation
 * First Missing Positive (LeetCode 41) · Pattern 01 — Arrays & Hashing
 * 
 * Frame Duration: 626 frames @ 30fps (20.86s) strictly from sync/01-roadmap.json
 */

import React, { useMemo } from "react";
import { Audio, interpolate, staticFile, useCurrentFrame } from "remotion";
import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme } from "../../../../kit/lib/theme";
import { EASE } from "../../../../kit/lib/anim";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { MasterRoadmapV2 } from "../../../../kit/components/MasterRoadmapV2";
import syncData from "../sync/01-roadmap.json";

export const SCENE01_TOTAL_FRAMES = 626;

const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

export const Scene01Roadmap: React.FC = () => {
  const frame = useCurrentFrame();

  // Camera engine
  const { camScale, camY } = useMemo(() => {
    // Beat 01 (F0–F199): Settle from 1.008 -> 1.000
    if (frame < 199) {
      const s = interpolate(frame, [0, 24], [1.008, 1.0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: s, camY: 0 };
    }
    // Beat 02 (F199–F358): Focus on progress counter (17/227)
    if (frame < 358) {
      const s = interpolate(frame, [199, 230], [1.0, 1.02], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const y = interpolate(frame, [199, 230], [0, -60], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: s, camY: y };
    }
    // Beat 03–05 (F358–F626): Pan down to spotlight Problem 18 (First Missing Positive)
    const s = interpolate(frame, [358, 395], [1.02, 1.04], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
    const y = interpolate(frame, [358, 395], [-60, -220], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
    return { camScale: s, camY: y };
  }, [frame]);

  // Problem 18 activation triggers at Frame 358 ("Now ... Question Eighteen")
  const isQ18Active = frame >= 358;
  const isQ18Spotlight = frame >= 443; // "First Missing Positive"

  const completedNums = useMemo(() => {
    return Array.from({ length: 17 }, (_, i) => i + 1);
  }, []);

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
      <ChalkboardBackground />
      <ChalkFilters />

      <Audio src={staticFile("audio/018/scence01.mp3")} />

      {/* Master Curriculum Roadmap */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${camScale}) translateY(${camY}px)`,
          transformOrigin: "center center",
        }}
      >
        <MasterRoadmapV2
          completedCount={17}
          completedGlobalNums={completedNums}
          activeGlobalNum={isQ18Active ? 18 : 17}
          activePatternId={1}
          spotlightRow={isQ18Spotlight ? 18 : undefined}
          activeBadgeLabel={isQ18Active ? "NOW ACTIVE" : "COMPLETE"}
        />
      </div>

      {/* Caption Safe Zone */}
      <Captions words={captionWords} />
    </div>
  );
};
