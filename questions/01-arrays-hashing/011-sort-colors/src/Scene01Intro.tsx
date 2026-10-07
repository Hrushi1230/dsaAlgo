/**
 * Scene01Intro.tsx — Scene 01 · INTRO / ROADMAP RESUME
 * Sort Colors (LeetCode 75) · Pattern 01 — Arrays & Hashing
 *
 * Implements the continuous chalkboard Master Roadmap UI & Scene 02 Handoff:
 * - Master Roadmap UI Architecture resuming from Q10 Scene 13 ending state
 * - Total Duration: 1,223 frames @ 30fps (40.780s) strictly from sync/01-intro-roadmap.json
 * - Anchors mapped from sync/01-intro-roadmap.anchors.json
 *
 * Timeline:
 * - Beat A (F0–F84): "Welcome back to Code with Animation." (S01_WELCOME)
 *     Starts from exact Q10 ending state: 10 / 227 COMPLETE, Pattern 01 ACTIVE, Row 010 COMPLETE, Row 011 UP NEXT.
 * - Beat B (F84–F211): "We are continuing our DSA pattern roadmap," (S01_ROADMAP)
 *     Chalk underline draws under top-center DSA PATTERN ROADMAP header.
 * - Beat C (F211–F283): "Two hundred twenty-seven problems..." (S01_227)
 *     Top-right 227 PROBLEMS tag scale pop; rail bottom label 227 illuminated.
 * - Beat D (F283–F370): "across nineteen important patterns..." (S01_19_PATTERNS)
 *     Sidebar 19 COURSE PATTERNS header glow; vertical shimmer sweep down pattern list.
 * - Beat E (F370–F474): "built for serious interview preparation," (S01_INTERVIEW_PREP)
 *     Wide-view majestic hold; whole curriculum visible as interview journey.
 * - Beat F (F474–F506): "from fundamentals..." (S01_FUNDAMENTALS)
 *     Focus onto rail top label 001 and foundational rows 001–003.
 * - Beat G (F506–F605): "to FAANG-level problem solving." (S01_FAANG)
 *     Temporary journey tracer travels along vertical rail towards 227; active thumb stays at 011.
 * - Beat H (F605–F638): "Right now..." (S01_RIGHT_NOW)
 *     Camera smoothly zooms in and re-centers onto Pattern 01 section.
 * - Beat I (F638–F745): "we are inside arrays and hashing." (S01_ARRAYS_HASHING)
 *     Dual pivot highlight: sidebar badge & main header underlined; counter reads 10 / 18 COMPLETED.
 * - Beat J (F745–F779): "Question ten..." (S01_Q10)
 *     Row 010 isolated in spotlight focus.
 * - Beat K (F779–F859): "Longest consecutive sequence..." (S01_Q10_TITLE)
 *     Row 010 title highlighted in crisp chalk text.
 * - Beat L (F859–F920): "is complete." (S01_Q10_COMPLETE)
 *     Checkmark (✓) redraw stroke confirmation; COMPLETE badge green pulse. Global counter stays 10/227.
 * - Beat M (F920–F1019): "Now we move to the next problem..." (S01_NEXT_PROBLEM)
 *     Focus transfer from Row 010 to Row 011; camera pans down 1 row; 43F anticipation hold (Row 011 still UP NEXT).
 * - Beat N (F1019–F1054): "Question eleven..." (S01_Q11)
 *     Canonical activation: UP NEXT (▶) -> NOW ACTIVE (●); bold pivot gold badge; counter stays 10/227.
 * - Beat O (F1054–F1099): "Sort colors." (S01_SORT_COLORS)
 *     Title hero reveal with drawn chalk underline; subtitle '· Dutch National Flag' appears.
 * - Beat P (F1099–F1166): "LeetCode seventy-five..." (S01_LC75)
 *     Metadata LC 75 boxed in rough chalk outline.
 * - Beat Q (F1166–F1201): "Medium." (S01_MEDIUM)
 *     Difficulty badge illuminates in warm amber sheen. Complete row locked.
 * - Beat R (F1201–F1223): "Let's continue." (S01_CONTINUE)
 *     Representation handoff: surroundings fade out; Q011 glides to top into ProblemOpenerShell; center stage empty.
 */
import React, { useMemo } from "react";
import {
  Audio,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme, fonts } from "../../../../kit/lib/theme";
import { EASE } from "../../../../kit/lib/anim";
import { ChalkDust } from "../../../../kit/components/ChalkDust";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { MasterRoadmapV2 } from "../../../../kit/components/MasterRoadmapV2";
import { InterviewReadinessCards } from "../../../../kit/components/InterviewReadinessCards";
import syncData from "../sync/01-intro-roadmap.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings (from sync/01-intro-roadmap.json)
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => {
  let word = w.word;
  if (word === "Lead") word = "LeetCode";
  if (
    word === "code" &&
    syncData.words.find(
      (prev: any) =>
        prev.word === "Lead" && Math.abs(prev.end_frame - w.start_frame) <= 2
    )
  ) {
    word = "";
  }
  return {
    word,
    start: w.start_ms / 1000,
    end: w.end_ms / 1000,
  };
}).filter((w) => w.word !== "");

export const Scene01Intro: React.FC = () => {
  const frame = useCurrentFrame();

  // =========================================================================
  // CAMERA ENGINE (Subtle pan/zoom strictly matching framewise plan)
  // =========================================================================
  const { camScale, camX, camY }: { camScale: number; camX: number; camY: number } = useMemo(() => {
    // Beat A (F0–F84): Gentle settle from 1.008 -> 1.000
    if (frame < 84) {
      const settle = interpolate(frame, [0, 26], [1.008, 1.0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: settle, camX: 0, camY: 0 };
    }

    // Beats B, C, D (F84–F370): Stable neutral camera keeping top bar and sidebar fully visible
    if (frame >= 84 && frame < 370) {
      return { camScale: 1.0, camX: 0, camY: 0 };
    }

    // Beat E (F370–F474): Gentle wide pull to 0.995
    if (frame >= 370 && frame < 605) {
      const wideScale = interpolate(frame, [370, 420], [1.0, 0.995], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: wideScale, camX: 0, camY: 0 };
    }

    // Beat H (F605–F638): Re-centering onto Pattern 01
    if (frame >= 605 && frame < 920) {
      const zoomScale = interpolate(frame, [605, 634], [0.995, 1.025], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const panX = interpolate(frame, [605, 634], [0, -30], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const panY = interpolate(frame, [605, 634], [0, -15], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: zoomScale, camX: panX, camY: panY };
    }

    // Beat M & beyond (F920+): Pan down 1 row unit to center Row 011
    if (frame >= 920 && frame < 1201) {
      const panY = interpolate(frame, [930, 970], [-15, -59], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: 1.025, camX: -30, camY: panY };
    }

    // Beat R (F1201–F1223): Handoff glide to default frame
    const handoffScale = interpolate(frame, [1201, 1223], [1.025, 1.0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
    const handoffX = interpolate(frame, [1201, 1223], [-30, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
    const handoffY = interpolate(frame, [1201, 1223], [-59, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
    return { camScale: handoffScale, camX: handoffX, camY: handoffY };
  }, [frame]);

  // Spotlight row: 10 during Q10 focus (F745–F920), 11 during Q11 focus (F920+)
  const spotlightRow = useMemo(() => {
    if (frame >= 745 && frame < 920) return 10;
    if (frame >= 920) return 11;
    return undefined;
  }, [frame]);

  // Active badge: "NOW ACTIVE" after F1019, before that "UP NEXT"
  const isQ011Active = frame >= 1019;
  const activeBadgeLabel = isQ011Active ? "NOW ACTIVE" : "UP NEXT";

  // Subtitle: appears after F1054
  const activeSubtitle = frame >= 1054 ? "· Dutch National Flag" : undefined;

  // Header underline: draws at F135
  const showHeaderUnderline = frame >= 135;

  // Handoff fade: surroundings fade out during F1201–F1223
  const handoffFade = interpolate(frame, [1201, 1223], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  // FAANG Interview Readiness Architecture phases (F370–F605)
  const faangPhase: "none" | "intro" | "fundamentals" | "faang" = useMemo(() => {
    if (frame >= 370 && frame < 474) return "intro";
    if (frame >= 474 && frame < 506) return "fundamentals";
    if (frame >= 506 && frame < 605) return "faang";
    return "none";
  }, [frame]);

  const faangProgress = useMemo(() => {
    if (frame < 370 || frame >= 605) return 0;
    if (frame >= 370 && frame < 400) {
      return interpolate(frame, [370, 400], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
    }
    if (frame >= 585 && frame < 605) {
      return interpolate(frame, [585, 605], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
    }
    return 1;
  }, [frame]);

  // Highlight all 19 patterns in sidebar during "19 important patterns" (F309..F370)
  const highlightAllPatterns = frame >= 309 && frame < 370;

  // Half-fade the roadmap during FAANG & interview architecture centerpiece (F370..F605)
  const dimAmount = useMemo(() => {
    if (frame < 370 || frame >= 605) return 0;
    if (frame >= 370 && frame < 395) {
      return interpolate(frame, [370, 395], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
    }
    if (frame >= 585 && frame < 605) {
      return interpolate(frame, [585, 605], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
    }
    return 1;
  }, [frame]);

  // High-frequency target tech companies for Sort Colors (LC 75)
  const sortColorsCompanyTags = useMemo(() => ["Meta", "Amazon", "Microsoft"], []);

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
      <Audio src={staticFile("audio/011/01-intro-roadmap.mp3")} />

      {/* ChalkDust bursts on key beats: Q010 confirm (F862) and Q011 activation (F1019) */}
      {frame >= 862 && frame <= 890 && (
        <ChalkDust x={450} y={550} start={862} color={theme.good} count={12} radius={40} />
      )}
      {frame >= 1019 && frame <= 1045 && (
        <ChalkDust x={1090} y={634} start={1019} color={theme.pivot} count={16} radius={60} />
      )}

      {/* Authoritative Permanent Roadmap UI Architecture (Half-faded during interview centerpiece) */}
      <MasterRoadmapV2
        completedCount={10}
        completedGlobalNums={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        activeGlobalNum={11}
        upNextGlobalNum={isQ011Active ? undefined : 11}
        activePatternId={1}
        spotlightRow={spotlightRow}
        activeBadgeLabel={activeBadgeLabel}
        showHeaderUnderline={showHeaderUnderline}
        scale={camScale}
        translateX={camX}
        translateY={camY}
        handoffFade={handoffFade}
        activeSubtitle={activeSubtitle}
        faangPhase={faangPhase}
        faangProgress={faangProgress}
        activeCompanyTags={sortColorsCompanyTags}
        highlightAllPatterns={highlightAllPatterns}
        dimAmount={dimAmount}
      />

      {/* Centerpiece FAANG & Competitive Tech Interview Architecture Cards (F370..F605) */}
      <InterviewReadinessCards frame={frame} />

      {/* Bottom captions */}
      <Captions words={captionWords} bottom={38} fontSize={38} />
    </div>
  );
};
