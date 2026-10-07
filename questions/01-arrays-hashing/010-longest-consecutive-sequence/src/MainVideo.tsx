/**
 * MainVideo.tsx — Master Video Composition for 010 Longest Consecutive Sequence (LC #128)
 *
 * Full 13-Scene Sequential Composition with Channel Intro (31,790 frames @ 30fps / ~17m 39.7s):
 *   - Channel Intro: 300 frames (10.0s) Japanese one-shot cinematic intro.
 *   - Each scene preceded by a 60-frame (2.0s) Architectural Blackboard Title Card Bumper.
 *   - Transition Chalk-Tap SFX (tactile chalk click, no whoosh) at each Title Card.
 *   - Subtle ambient lofi background music running continuously under speech during the lesson.
 *   - Uses Remotion <Series> for zero-gap frame-accurate sequencing.
 */
import React from "react";
import { AbsoluteFill, Audio, Series, Sequence, OffthreadVideo, staticFile } from "remotion";

import { theme } from "../../../../kit/lib/theme";
import { SceneTitleCard } from "../../../../kit/components/SceneTitleCard";

// Import all 13 scenes
import { Scene01Intro } from "./Scene01Intro";
import { Scene02Understand } from "./Scene02Understand";
import { Scene03TraceBrute } from "./Scene03TraceBrute";
import { Scene04CodeBrute } from "./Scene04CodeBrute";
import { Scene05WhyBrute } from "./Scene05WhyBrute";
import { Scene06TraceBetter } from "./Scene06TraceBetter";
import { Scene07CodeBetter } from "./Scene07CodeBetter";
import { Scene08WhyBetter } from "./Scene08WhyBetter";
import { Scene09OptimalIdea } from "./Scene09OptimalIdea";
import { Scene10TraceOptimal } from "./Scene10TraceOptimal";
import { Scene11CodeOptimal } from "./Scene11CodeOptimal";
import { Scene12Complexity } from "./Scene12Complexity";
import { Scene13Recap } from "./Scene13Recap";

export const INTRO_FRAMES = 300; // 10.0 seconds @ 30fps
export const TITLE_CARD_FRAMES = 60; // 2.0 seconds @ 30fps

export const SCENE_DURATIONS = {
  scene01: 1291,
  scene02: 1509,
  scene03: 3592,
  scene04: 2079,
  scene05: 1323,
  scene06: 2926,
  scene07: 1755,
  scene08: 1481,
  scene09: 2006,
  scene10: 5653,
  scene11: 1871,
  scene12: 3392,
  scene13: 1832,
} as const;

export const TOTAL_MASTER_FRAMES =
  INTRO_FRAMES +
  13 * TITLE_CARD_FRAMES +
  Object.values(SCENE_DURATIONS).reduce((sum, d) => sum + d, 0); // 31,790 frames

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: theme.boardBg }}>
      {/* Global Subtle Ambient Lofi Background Music (starts after channel intro) */}
      <Sequence from={INTRO_FRAMES} name="Lesson Ambient BGM">
        <Audio
          src={staticFile("audio/bgm/lofi-chalkboard-ambient.mp3")}
          volume={0.04}
          loop
        />
      </Sequence>

      {/* Frame-Accurate Sequential Composition with Channel Intro & Transition Cards */}
      <Series>
        {/* ─── CHANNEL INTRO (10s Japanese One-Shot) ─── */}
        <Series.Sequence durationInFrames={INTRO_FRAMES} name="Channel Intro (10s)">
          <OffthreadVideo src={staticFile("intro/code-with-animation-intro-10s.mp4")} />
        </Series.Sequence>

        {/* ─── SCENE 01: INTRO & ROADMAP ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 01">
          <SceneTitleCard
            sceneNumber="SCENE 01"
            title="ROADMAP & PROBLEM INTRODUCTION"
            subtext="Longest Consecutive Sequence · 227-Problem Roadmap & Arrays and Hashing Pattern"
            category="ACT 1 · OVERVIEW"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={128}
            accentColor={theme.pivot}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene01} name="Scene 01 · Intro">
          <Scene01Intro />
        </Series.Sequence>

        {/* ─── SCENE 02: UNDERSTAND THE PROBLEM ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 02">
          <SceneTitleCard
            sceneNumber="SCENE 02"
            title="UNDERSTAND THE PROBLEM"
            subtext="Consecutive runs in unsorted input · Duplicates, negatives & target linear time"
            category="ACT 2 · RULES & SPEC"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={128}
            accentColor={theme.cyan}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene02} name="Scene 02 · Understand">
          <Scene02Understand />
        </Series.Sequence>

        {/* ─── SCENE 03: BRUTE FORCE TRACE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 03">
          <SceneTitleCard
            sceneNumber="SCENE 03"
            title="BRUTE FORCE · IDEA & COMPLETE TRACE"
            subtext="Take every number as a start · Repeated linear searching in unsorted array"
            category="APPROACH 1 · TRACE"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={128}
            accentColor={theme.warn}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene03} name="Scene 03 · Trace Brute">
          <Scene03TraceBrute />
        </Series.Sequence>

        {/* ─── SCENE 04: BRUTE FORCE PYTHON CODE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 04">
          <SceneTitleCard
            sceneNumber="SCENE 04"
            title="BRUTE FORCE · PYTHON IMPLEMENTATION"
            subtext="While loop searching in list · Why 'current + 1 in nums' hides a linear scan"
            category="APPROACH 1 · CODE"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={128}
            accentColor={theme.warn}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene04} name="Scene 04 · Code Brute">
          <Scene04CodeBrute />
        </Series.Sequence>

        {/* ─── SCENE 05: WHY BRUTE FORCE FAILS ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 05">
          <SceneTitleCard
            sceneNumber="SCENE 05"
            title="WHY BRUTE FORCE FAILS"
            subtext="N starts × N chain length × N scan = O(n³) cubic blowup"
            category="APPROACH 1 · WHY NOT"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={128}
            accentColor={theme.warn}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene05} name="Scene 05 · Why Brute">
          <Scene05WhyBrute />
        </Series.Sequence>

        {/* ─── SCENE 06: BETTER APPROACH TRACE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 06">
          <SceneTitleCard
            sceneNumber="SCENE 06"
            title="BETTER APPROACH · SORTED LINEAR SCAN"
            subtext="Sort once to group neighbors · Extend on +1, ignore duplicates, reset on gap"
            category="APPROACH 2 · TRACE"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={128}
            accentColor={theme.better}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene06} name="Scene 06 · Trace Better">
          <Scene06TraceBetter />
        </Series.Sequence>

        {/* ─── SCENE 07: BETTER APPROACH CODE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 07">
          <SceneTitleCard
            sceneNumber="SCENE 07"
            title="BETTER APPROACH · PYTHON CODE"
            subtext="Clean neighbor comparison loop · Three-way branch: duplicate, extend, or gap"
            category="APPROACH 2 · CODE"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={128}
            accentColor={theme.better}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene07} name="Scene 07 · Code Better">
          <Scene07CodeBetter />
        </Series.Sequence>

        {/* ─── SCENE 08: WHY SORTING IS NOT ENOUGH ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 08">
          <SceneTitleCard
            sceneNumber="SCENE 08"
            title="WHY SORTING IS NOT ENOUGH"
            subtext="O(n log n) sorting ceiling violates O(n) requirement · The quest for real starts"
            category="APPROACH 2 · WHY NOT"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={128}
            accentColor={theme.better}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene08} name="Scene 08 · Why Better">
          <Scene08WhyBetter />
        </Series.Sequence>

        {/* ─── SCENE 09: OPTIMAL IDEA & PREDECESSOR RULE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 09">
          <SceneTitleCard
            sceneNumber="SCENE 09"
            title="OPTIMAL APPROACH · FIND THE REAL START"
            subtext="The Predecessor Decision Rule · If x - 1 exists, skip; if missing, start & walk"
            category="APPROACH 3 · INTUITION"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={128}
            accentColor={theme.good}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene09} name="Scene 09 · Optimal Idea">
          <Scene09OptimalIdea />
        </Series.Sequence>

        {/* ─── SCENE 10: OPTIMAL APPROACH FULL TRACE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 10">
          <SceneTitleCard
            sceneNumber="SCENE 10"
            title="OPTIMAL APPROACH · COMPLETE TRACE"
            subtext="11 unique values in HashSet · Only 3 sequence heads walked forward"
            category="APPROACH 3 · TRACE"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={128}
            accentColor={theme.good}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene10} name="Scene 10 · Trace Optimal">
          <Scene10TraceOptimal />
        </Series.Sequence>

        {/* ─── SCENE 11: OPTIMAL PYTHON CODE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 11">
          <SceneTitleCard
            sceneNumber="SCENE 11"
            title="OPTIMAL APPROACH · PYTHON CODE"
            subtext="HashSet creation + Predecessor check + Forward while loop"
            category="APPROACH 3 · CODE"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={128}
            accentColor={theme.good}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene11} name="Scene 11 · Code Optimal">
          <Scene11CodeOptimal />
        </Series.Sequence>

        {/* ─── SCENE 12: COMPLEXITY DEEP DIVE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 12">
          <SceneTitleCard
            sceneNumber="SCENE 12"
            title="COMPLEXITY DEEP DIVE · WHY FOR + WHILE IS O(n)"
            subtext="Each element visited at most twice · Mathematical proof of strictly linear time"
            category="APPROACH 3 · COMPLEXITY"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={128}
            accentColor={theme.good}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene12} name="Scene 12 · Complexity">
          <Scene12Complexity />
        </Series.Sequence>

        {/* ─── SCENE 13: RECAP & ROADMAP UPDATE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 13">
          <SceneTitleCard
            sceneNumber="SCENE 13"
            title="FINAL RECAP & ROADMAP PROGRESS"
            subtext="The 3-approach journey · Locking 10 / 227 complete & advancing to Sort Colors"
            category="OUTRO · NEXT PROBLEM"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={128}
            accentColor={theme.pivot}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene13} name="Scene 13 · Recap & Outro">
          <Scene13Recap />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
