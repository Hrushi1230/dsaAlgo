/**
 * MainVideo.tsx — Master Video Composition for 012 Next Permutation (LC #31)
 *
 * Full 10-Scene Sequential Composition with Channel Intro (27,094 frames @ 30fps / ~15m 3.1s):
 *   - Channel Intro: 300 frames (10.0s) Japanese one-shot cinematic intro.
 *   - Each scene preceded by a 60-frame (2.0s) Architectural Blackboard Title Card Bumper.
 *   - Transition Chalk-Tap SFX (tactile chalk click) at each Title Card.
 *   - Subtle ambient lofi background music running continuously under speech during the lesson.
 *   - Uses Remotion <Series> for zero-gap frame-accurate sequencing.
 */
import React from "react";
import { AbsoluteFill, Audio, Series, Sequence, OffthreadVideo, staticFile } from "remotion";

import { theme } from "../../../../kit/lib/theme";
import { SceneTitleCard } from "../../../../kit/components/SceneTitleCard";

// Import all 10 scenes
import { Scene01Intro } from "./Scene01Intro";
import { Scene02Understand } from "./Scene02Understand";
import { Scene03BruteTrace } from "./Scene03BruteTrace";
import { Scene04BruteCode } from "./Scene04BruteCode";
import { Scene05WhyBrute } from "./Scene05WhyBrute";
import { Scene06OptimalIdea } from "./Scene06OptimalIdea";
import { Scene07OptimalTrace } from "./Scene07OptimalTrace";
import { Scene08OptimalCode } from "./Scene08OptimalCode";
import { Scene09Complexity } from "./Scene09Complexity";
import { Scene10Recap } from "./Scene10Recap";

export const INTRO_FRAMES = 300; // 10.0 seconds @ 30fps
export const TITLE_CARD_FRAMES = 60; // 2.0 seconds @ 30fps

export const SCENE_DURATIONS = {
  scene01: 767,
  scene02: 2075,
  scene03: 2275,
  scene04: 2114,
  scene05: 2268,
  scene06: 3252,
  scene07: 3520,
  scene08: 3014,
  scene09: 4156,
  scene10: 2753,
} as const;

export const TOTAL_SCENE_FRAMES = Object.values(SCENE_DURATIONS).reduce(
  (sum, d) => sum + d,
  0
); // 26,194 frames

export const TOTAL_MASTER_FRAMES =
  INTRO_FRAMES + 10 * TITLE_CARD_FRAMES + TOTAL_SCENE_FRAMES; // 27,094 frames (~15m 3.1s)

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
            title="ROADMAP & PROBLEM HOOK"
            subtext="Next Permutation · 227-Problem Roadmap & Lexicographical Ordering"
            category="ACT 1 · OVERVIEW"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={31}
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
            subtext="Dictionary Order, Permutations & Strict In-Place Mutation Rules"
            category="ACT 2 · RULES & SPEC"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={31}
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
            title="BRUTE FORCE TRACE"
            subtext="Full Permutation Enumeration & Recursive Backtracking Trace"
            category="ACT 3 · NAIVE APPROACH"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={31}
            accentColor={theme.bad}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene03} name="Scene 03 · Brute Trace">
          <Scene03BruteTrace />
        </Series.Sequence>

        {/* ─── SCENE 04: BRUTE FORCE CODE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 04">
          <SceneTitleCard
            sceneNumber="SCENE 04"
            title="BRUTE FORCE CODE"
            subtext="Recursive Permutation Generation & Dictionary Sort Implementation"
            category="ACT 3 · NAIVE CODE"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={31}
            accentColor={theme.bad}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene04} name="Scene 04 · Brute Code">
          <Scene04BruteCode />
        </Series.Sequence>

        {/* ─── SCENE 05: WHY BRUTE FORCE FAILS ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 05">
          <SceneTitleCard
            sceneNumber="SCENE 05"
            title="WHY BRUTE FORCE FAILS"
            subtext="Factorial Explosion O(N!) & In-Place Space Constraints"
            category="ACT 4 · BOTTLENECK"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={31}
            accentColor={theme.bad}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene05} name="Scene 05 · Why Brute">
          <Scene05WhyBrute />
        </Series.Sequence>

        {/* ─── SCENE 06: OPTIMAL IDEA & PATTERN ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 06">
          <SceneTitleCard
            sceneNumber="SCENE 06"
            title="OPTIMAL IDEA & PATTERN"
            subtext="Descending Suffix Invariant, Rightmost Pivot & Minimal Increment"
            category="ACT 5 · INTUITION"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={31}
            accentColor={theme.good}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene06} name="Scene 06 · Optimal Idea">
          <Scene06OptimalIdea />
        </Series.Sequence>

        {/* ─── SCENE 07: OPTIMAL STEP-BY-STEP TRACE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 07">
          <SceneTitleCard
            sceneNumber="SCENE 07"
            title="OPTIMAL STEP-BY-STEP TRACE"
            subtext="Full In-Place 3-Step Execution on Master Testcase [2, 1, 5, 4, 4, 3, 0]"
            category="ACT 6 · DRY RUN"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={31}
            accentColor={theme.pivot}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene07} name="Scene 07 · Optimal Trace">
          <Scene07OptimalTrace />
        </Series.Sequence>

        {/* ─── SCENE 08: OPTIMAL IMPLEMENTATION ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 08">
          <SceneTitleCard
            sceneNumber="SCENE 08"
            title="OPTIMAL IMPLEMENTATION"
            subtext="Clean Linear-Time Python Solution with In-Place Suffix Reversal"
            category="ACT 7 · PRODUCTION CODE"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={31}
            accentColor={theme.good}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene08} name="Scene 08 · Optimal Code">
          <Scene08OptimalCode />
        </Series.Sequence>

        {/* ─── SCENE 09: COMPLEXITY & EDGE CASES ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 09">
          <SceneTitleCard
            sceneNumber="SCENE 09"
            title="COMPLEXITY & EDGE CASES"
            subtext="O(N) Time Proof, 4 Common Traps & Maximum Descending Array Edge Cases"
            category="ACT 8 · MASTERY"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={31}
            accentColor={theme.cyan}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene09} name="Scene 09 · Complexity">
          <Scene09Complexity />
        </Series.Sequence>

        {/* ─── SCENE 10: RECAP & TRANSFERABLE PATTERN ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 10">
          <SceneTitleCard
            sceneNumber="SCENE 10"
            title="RECAP & TRANSFERABLE PATTERN"
            subtext="The Golden Triad, Course Progress (12/227) & Transition to Set Matrix Zeroes"
            category="ACT 9 · ROADMAP"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={31}
            accentColor={theme.pivot}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene10} name="Scene 10 · Recap">
          <Scene10Recap />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
