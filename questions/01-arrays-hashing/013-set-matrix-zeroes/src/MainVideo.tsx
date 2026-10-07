/**
 * MainVideo.tsx — Master Video Composition for 013 Set Matrix Zeroes (LC #73)
 *
 * Full 13-Scene Sequential Composition with Channel Intro (39,456 frames @ 30fps / ~21m 55.2s):
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

// Import all 13 scenes
import { Scene01Intro } from "./Scene01Intro";
import { Scene02Understand } from "./Scene02Understand";
import { Scene03CopyTrace } from "./Scene03CopyTrace";
import { Scene04CopyCode } from "./Scene04CopyCode";
import { Scene05WhyCopy } from "./Scene05WhyCopy";
import { Scene06MarkersTrace } from "./Scene06MarkersTrace";
import { Scene07MarkersCode } from "./Scene07MarkersCode";
import { Scene08WhyMarkers } from "./Scene08WhyMarkers";
import { Scene09OptimalIdea } from "./Scene09OptimalIdea";
import { Scene10OptimalTrace } from "./Scene10OptimalTrace";
import { Scene11OptimalCode } from "./Scene11OptimalCode";
import { Scene12Complexity } from "./Scene12Complexity";
import { Scene13Recap } from "./Scene13Recap";

export const INTRO_FRAMES = 300; // 10.0 seconds @ 30fps
export const TITLE_CARD_FRAMES = 60; // 2.0 seconds @ 30fps

export const SCENE_DURATIONS = {
  scene01: 1092,
  scene02: 2288,
  scene03: 3357,
  scene04: 1981,
  scene05: 1754,
  scene06: 3581,
  scene07: 2188,
  scene08: 3037,
  scene09: 3209,
  scene10: 7061,
  scene11: 3241,
  scene12: 2827,
  scene13: 2760,
} as const;

export const TOTAL_SCENE_FRAMES = Object.values(SCENE_DURATIONS).reduce(
  (sum, d) => sum + d,
  0
); // 38,376 frames

export const TOTAL_MASTER_FRAMES =
  INTRO_FRAMES + 13 * TITLE_CARD_FRAMES + TOTAL_SCENE_FRAMES; // 39,456 frames (~21m 55.2s)

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
            title="ROADMAP & PROBLEM ACTIVATION"
            subtext="Set Matrix Zeroes · 227-Problem Roadmap & In-Place Matrix Transformations"
            category="ACT 1 · OVERVIEW"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={73}
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
            subtext="Zero Propagation Rules & The Fatal Cascading Mutation Trap"
            category="ACT 2 · RULES & SPEC"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={73}
            accentColor={theme.cyan}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene02} name="Scene 02 · Understand">
          <Scene02Understand />
        </Series.Sequence>

        {/* ─── SCENE 03: METHOD 1 TRACE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 03">
          <SceneTitleCard
            sceneNumber="SCENE 03"
            title="METHOD 1: ORIGINAL COPY TRACE"
            subtext="Preserving Truth: Read from Pristine Clone, Write to Working Matrix"
            category="ACT 3 · NAIVE APPROACH"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={73}
            accentColor={theme.bad}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene03} name="Scene 03 · Copy Trace">
          <Scene03CopyTrace />
        </Series.Sequence>

        {/* ─── SCENE 04: METHOD 1 CODE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 04">
          <SceneTitleCard
            sceneNumber="SCENE 04"
            title="METHOD 1: PYTHON IMPLEMENTATION"
            subtext="Deep Copy Matrix Construction & Two-Pass Zeroing Loop"
            category="ACT 3 · NAIVE CODE"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={73}
            accentColor={theme.bad}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene04} name="Scene 04 · Copy Code">
          <Scene04CopyCode />
        </Series.Sequence>

        {/* ─── SCENE 05: WHY METHOD 1 FAILS ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 05">
          <SceneTitleCard
            sceneNumber="SCENE 05"
            title="WHY METHOD 1 IS EXPENSIVE"
            subtext="The O(M × N) Space Bottleneck & Discovering What Must Survive"
            category="ACT 4 · BOTTLENECK"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={73}
            accentColor={theme.bad}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene05} name="Scene 05 · Why Copy">
          <Scene05WhyCopy />
        </Series.Sequence>

        {/* ─── SCENE 06: METHOD 2 TRACE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 06">
          <SceneTitleCard
            sceneNumber="SCENE 06"
            title="METHOD 2: 1D MARKER ARRAYS TRACE"
            subtext="Compressing 2D State into 1D Projections: rowZero and colZero Vectors"
            category="ACT 5 · COMPRESSION"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={73}
            accentColor={theme.pivot}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene06} name="Scene 06 · Markers Trace">
          <Scene06MarkersTrace />
        </Series.Sequence>

        {/* ─── SCENE 07: METHOD 2 CODE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 07">
          <SceneTitleCard
            sceneNumber="SCENE 07"
            title="METHOD 2: PYTHON IMPLEMENTATION"
            subtext="Linear-Space In-Place Zeroing with Row and Column Marker Arrays"
            category="ACT 5 · BETTER CODE"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={73}
            accentColor={theme.cyan}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene07} name="Scene 07 · Markers Code">
          <Scene07MarkersCode />
        </Series.Sequence>

        {/* ─── SCENE 08: DERIVE OPTIMAL STORAGE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 08">
          <SceneTitleCard
            sceneNumber="SCENE 08"
            title="DERIVE OPTIMAL STORAGE"
            subtext="The Breakthrough: Why Allocate Extra Arrays When the Matrix Has Boundary Cells?"
            category="ACT 6 · DERIVATION"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={73}
            accentColor={theme.good}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene08} name="Scene 08 · Why Markers">
          <Scene08WhyMarkers />
        </Series.Sequence>

        {/* ─── SCENE 09: METHOD 3 IDEA ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 09">
          <SceneTitleCard
            sceneNumber="SCENE 09"
            title="OPTIMAL IDEA: MATRIX AS MEMORY"
            subtext="Using Row 0 and Column 0 as In-Place Markers & Protecting (0,0) Overwrite"
            category="ACT 7 · INTUITION"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={73}
            accentColor={theme.good}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene09} name="Scene 09 · Optimal Idea">
          <Scene09OptimalIdea />
        </Series.Sequence>

        {/* ─── SCENE 10: METHOD 3 FULL TRACE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 10">
          <SceneTitleCard
            sceneNumber="SCENE 10"
            title="OPTIMAL STEP-BY-STEP TRACE"
            subtext="Full 5-Phase Dry Run: Guard Flags, Interior Scan, Boundary Reading & Finalization"
            category="ACT 8 · DRY RUN"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={73}
            accentColor={theme.pivot}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene10} name="Scene 10 · Optimal Trace">
          <Scene10OptimalTrace />
        </Series.Sequence>

        {/* ─── SCENE 11: OPTIMAL CODE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 11">
          <SceneTitleCard
            sceneNumber="SCENE 11"
            title="OPTIMAL PRODUCTION CODE"
            subtext="True O(1) Auxiliary Space Algorithm with First Row & Column Guards"
            category="ACT 9 · PRODUCTION CODE"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={73}
            accentColor={theme.good}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene11} name="Scene 11 · Optimal Code">
          <Scene11OptimalCode />
        </Series.Sequence>

        {/* ─── SCENE 12: COMPLEXITY & TRAPS ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 12">
          <SceneTitleCard
            sceneNumber="SCENE 12"
            title="COMPLEXITY & COMMON TRAPS"
            subtext="O(M × N) Time Proof, O(1) Space Guarantee & The (0,0) Overwrite Trap"
            category="ACT 10 · MASTERY"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={73}
            accentColor={theme.cyan}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene12} name="Scene 12 · Complexity">
          <Scene12Complexity />
        </Series.Sequence>

        {/* ─── SCENE 13: RECAP & ROADMAP ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 13">
          <SceneTitleCard
            sceneNumber="SCENE 13"
            title="RECAP & MASTER ROADMAP"
            subtext="The 3-Method Evolution, Course Progress (13/227) & Transition to Rotate Image"
            category="ACT 11 · ROADMAP"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={73}
            accentColor={theme.pivot}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene13} name="Scene 13 · Recap">
          <Scene13Recap />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
