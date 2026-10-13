/**
 * MainVideo.tsx — Master Video Composition for 018 First Missing Positive (LC #41)
 *
 * Full 13-Scene Sequential Master Video with Channel Intro (23,418 frames @ 30fps / ~13m 0.6s):
 *   - Channel Intro: 300 frames (10.0s) Japanese one-shot cinematic intro.
 *   - Each scene preceded by a 60-frame (2.0s) Architectural Blackboard Title Card Bumper.
 *   - Transition Chalk-Tap SFX at each Title Card.
 *   - Ambient lofi background music running continuously under speech.
 *   - Uses Remotion <Series> for frame-accurate sequencing.
 */

import React from "react";
import { AbsoluteFill, Audio, Series, Sequence, OffthreadVideo, staticFile } from "remotion";

import { theme } from "../../../../kit/lib/theme";
import { SceneTitleCard } from "../../../../kit/components/SceneTitleCard";

// Import all 13 scenes
import { Scene01Roadmap } from "./Scene01Roadmap";
import { Scene02Understand } from "./Scene02Understand";
import { Scene03BruteTrace } from "./Scene03BruteTrace";
import { Scene04BruteCode } from "./Scene04BruteCode";
import { Scene05HashSetIdea } from "./Scene05HashSetIdea";
import { Scene06HashSetTrace } from "./Scene06HashSetTrace";
import { Scene07HashSetCode } from "./Scene07HashSetCode";
import { Scene08LimitationBridge } from "./Scene08LimitationBridge";
import { Scene09OptimalIdea } from "./Scene09OptimalIdea";
import { Scene10OptimalTrace } from "./Scene10OptimalTrace";
import { Scene11OptimalCode } from "./Scene11OptimalCode";
import { Scene12Complexity } from "./Scene12Complexity";
import { Scene13RecapRoadmap } from "./Scene13RecapRoadmap";

export const INTRO_FRAMES = 300; // 10.0s @ 30fps
export const TITLE_CARD_FRAMES = 60; // 2.0s @ 30fps

export const SCENE_DURATIONS = {
  scene01: 626,
  scene02: 1585,
  scene03: 2514,
  scene04: 1489,
  scene05: 1464,
  scene06: 1871,
  scene07: 1193,
  scene08: 1085,
  scene09: 2489,
  scene10: 4087,
  scene11: 1800,
  scene12: 1238,
  scene13: 897,
} as const;

export const TOTAL_SCENE_FRAMES = Object.values(SCENE_DURATIONS).reduce(
  (sum, d) => sum + d,
  0
); // 22,338 frames

export const TOTAL_MASTER_FRAMES =
  INTRO_FRAMES + 13 * TITLE_CARD_FRAMES + TOTAL_SCENE_FRAMES; // 23,418 frames (~13m 0.6s)

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

        {/* ─── SCENE 01: ROADMAP ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 01">
          <SceneTitleCard
            sceneNumber="SCENE 01"
            title="ROADMAP & PROBLEM ACTIVATION"
            subtext="First Missing Positive · Problem 18 of 227 Curriculum"
            category="ACT 1 · OVERVIEW"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={41}
            accentColor={theme.pivot}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene01} name="Scene 01 Roadmap">
          <Scene01Roadmap />
        </Series.Sequence>

        {/* ─── SCENE 02: UNDERSTAND ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 02">
          <SceneTitleCard
            sceneNumber="SCENE 02"
            title="UNDERSTAND THE QUESTION"
            subtext="Smallest Positive Integer Gap & Ineligible Non-Positives"
            category="ACT 1 · OVERVIEW"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={41}
            accentColor={theme.accent}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene02} name="Scene 02 Understand">
          <Scene02Understand />
        </Series.Sequence>

        {/* ─── SCENE 03: BRUTE TRACE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 03">
          <SceneTitleCard
            sceneNumber="SCENE 03"
            title="BRUTE FORCE TRACE"
            subtext="Sequential Candidate Probing Across 23 Array Comparisons"
            category="ACT 2 · BRUTE FORCE"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={41}
            accentColor={theme.warn}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene03} name="Scene 03 Brute Trace">
          <Scene03BruteTrace />
        </Series.Sequence>

        {/* ─── SCENE 04: BRUTE CODE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 04">
          <SceneTitleCard
            sceneNumber="SCENE 04"
            title="BRUTE FORCE CODE"
            subtext="Nested Search Loops & O(N²) Quadratic Complexity"
            category="ACT 2 · BRUTE FORCE"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={41}
            accentColor={theme.warn}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene04} name="Scene 04 Brute Code">
          <Scene04BruteCode />
        </Series.Sequence>

        {/* ─── SCENE 05: HASHSET IDEA ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 05">
          <SceneTitleCard
            sceneNumber="SCENE 05"
            title="HASHSET INTUITION"
            subtext="O(1) Membership Probing & Duplicate Collapse"
            category="ACT 3 · HASHSET"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={41}
            accentColor={theme.pivot}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene05} name="Scene 05 HashSet Idea">
          <Scene05HashSetIdea />
        </Series.Sequence>

        {/* ─── SCENE 06: HASHSET TRACE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 06">
          <SceneTitleCard
            sceneNumber="SCENE 06"
            title="HASHSET EXECUTION TRACE"
            subtext="Building the Table & Linear Candidate Checking"
            category="ACT 3 · HASHSET"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={41}
            accentColor={theme.good}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene06} name="Scene 06 HashSet Trace">
          <Scene06HashSetTrace />
        </Series.Sequence>

        {/* ─── SCENE 07: HASHSET CODE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 07">
          <SceneTitleCard
            sceneNumber="SCENE 07"
            title="HASHSET CODE"
            subtext="Clean Set Membership Implementation"
            category="ACT 3 · HASHSET"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={41}
            accentColor={theme.good}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene07} name="Scene 07 HashSet Code">
          <Scene07HashSetCode />
        </Series.Sequence>

        {/* ─── SCENE 08: LIMITATION BRIDGE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 08">
          <SceneTitleCard
            sceneNumber="SCENE 08"
            title="THE SPACE LIMITATION BRIDGE"
            subtext="O(N) Space Disqualification & The In-Place Challenge"
            category="ACT 4 · OPTIMAL"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={41}
            accentColor={theme.warn}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene08} name="Scene 08 Limitation Bridge">
          <Scene08LimitationBridge />
        </Series.Sequence>

        {/* ─── SCENE 09: OPTIMAL IDEA ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 09">
          <SceneTitleCard
            sceneNumber="SCENE 09"
            title="OPTIMAL CYCLE SORT INTUITION"
            subtext="Pigeonhole Bound [1..N+1] & Home Mapping x → x - 1"
            category="ACT 4 · OPTIMAL"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={41}
            accentColor={theme.pivot}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene09} name="Scene 09 Optimal Idea">
          <Scene09OptimalIdea />
        </Series.Sequence>

        {/* ─── SCENE 10: OPTIMAL TRACE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 10">
          <SceneTitleCard
            sceneNumber="SCENE 10"
            title="OPTIMAL CYCLE SORT TRACE"
            subtext="4 In-Place Swaps, Duplicate Guard, & Verification Scan"
            category="ACT 4 · OPTIMAL"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={41}
            accentColor={theme.good}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene10} name="Scene 10 Optimal Trace">
          <Scene10OptimalTrace />
        </Series.Sequence>

        {/* ─── SCENE 11: OPTIMAL CODE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 11">
          <SceneTitleCard
            sceneNumber="SCENE 11"
            title="OPTIMAL CYCLE SORT CODE"
            subtext="Production In-Place Solution (O(N) Time · O(1) Space)"
            category="ACT 4 · OPTIMAL"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={41}
            accentColor={theme.good}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene11} name="Scene 11 Optimal Code">
          <Scene11OptimalCode />
        </Series.Sequence>

        {/* ─── SCENE 12: COMPLEXITY ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 12">
          <SceneTitleCard
            sceneNumber="SCENE 12"
            title="COMPLEXITY & AMORTIZED PROOF"
            subtext="Why the While Loop is O(N) & Key Interview Safeguards"
            category="ACT 5 · RECAP"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={41}
            accentColor={theme.accent}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene12} name="Scene 12 Complexity">
          <Scene12Complexity />
        </Series.Sequence>

        {/* ─── SCENE 13: RECAP & ROADMAP ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 13">
          <SceneTitleCard
            sceneNumber="SCENE 13"
            title="RECAP & PATTERN 01 MILESTONE"
            subtext="18 / 18 Problems Solved! Arrays & Hashing 100% Complete"
            category="ACT 5 · RECAP"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={41}
            accentColor={theme.good}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene13} name="Scene 13 Recap Roadmap">
          <Scene13RecapRoadmap />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
