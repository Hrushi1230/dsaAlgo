/**
 * MainVideo.tsx — Master Video Composition for 017 Encode and Decode Strings (LC #271)
 *
 * Full 10-Scene Sequential Master Video with Channel Intro (19,954 frames @ 30fps / ~11m 5.13s):
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
import { Scene03LengthPrefixIdea } from "./Scene03LengthPrefixIdea";
import { Scene04EncodeTrace } from "./Scene04EncodeTrace";
import { Scene05EncodeCode } from "./Scene05EncodeCode";
import { Scene06DecodeTrace } from "./Scene06DecodeTrace";
import { Scene07DecodeCode } from "./Scene07DecodeCode";
import { Scene08CorrectnessComplexity } from "./Scene08CorrectnessComplexity";
import { Scene09MistakesEdgeCases } from "./Scene09MistakesEdgeCases";
import { Scene10RecapRoadmap } from "./Scene10RecapRoadmap";

export const INTRO_FRAMES = 300; // 10.0 seconds @ 30fps
export const TITLE_CARD_FRAMES = 60; // 2.0 seconds @ 30fps

export const SCENE_DURATIONS = {
  scene01: 779,
  scene02: 1224,
  scene03: 1117,
  scene04: 3940,
  scene05: 701,
  scene06: 6969,
  scene07: 1101,
  scene08: 1153,
  scene09: 951,
  scene10: 1119,
} as const;

export const TOTAL_SCENE_FRAMES = Object.values(SCENE_DURATIONS).reduce(
  (sum, d) => sum + d,
  0
); // 19,054 frames

export const TOTAL_MASTER_FRAMES =
  INTRO_FRAMES + 10 * TITLE_CARD_FRAMES + TOTAL_SCENE_FRAMES; // 19,954 frames (~11m 5.13s)

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
            subtext="Encode and Decode Strings · 227-Problem Roadmap & Stateless Protocol Goal"
            category="ACT 1 · OVERVIEW"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={271}
            accentColor={theme.pivot}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene01} name="Scene 01 Intro">
          <Scene01Intro />
        </Series.Sequence>

        {/* ─── SCENE 02: UNDERSTAND ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 02">
          <SceneTitleCard
            sceneNumber="SCENE 02"
            title="UNDERSTANDING THE CHALLENGE"
            subtext="The Stateless Constraint & Delimiter Collisions"
            category="ACT 1 · OVERVIEW"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={271}
            accentColor={theme.warn}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene02} name="Scene 02 Understand">
          <Scene02Understand />
        </Series.Sequence>

        {/* ─── SCENE 03: LENGTH PREFIX IDEA ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 03">
          <SceneTitleCard
            sceneNumber="SCENE 03"
            title="LENGTH-PREFIX FRAMING IDEA"
            subtext="The Self-Describing Record: Length + '#' + Payload"
            category="ACT 2 · THE PROTOCOL"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={271}
            accentColor={theme.pivot}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene03} name="Scene 03 Length Prefix Idea">
          <Scene03LengthPrefixIdea />
        </Series.Sequence>

        {/* ─── SCENE 04: ENCODE TRACE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 04">
          <SceneTitleCard
            sceneNumber="SCENE 04"
            title="ENCODE DRY RUN"
            subtext="Step-by-Step Serialization on Master Testcase"
            category="ACT 2 · THE PROTOCOL"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={271}
            accentColor={theme.cyan}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene04} name="Scene 04 Encode Trace">
          <Scene04EncodeTrace />
        </Series.Sequence>

        {/* ─── SCENE 05: ENCODE CODE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 05">
          <SceneTitleCard
            sceneNumber="SCENE 05"
            title="ENCODER CODE IMPLEMENTATION"
            subtext="Python Encoder with Parts Accumulator"
            category="ACT 2 · THE PROTOCOL"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={271}
            accentColor={theme.good}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene05} name="Scene 05 Encode Code">
          <Scene05EncodeCode />
        </Series.Sequence>

        {/* ─── SCENE 06: DECODE TRACE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 06">
          <SceneTitleCard
            sceneNumber="SCENE 06"
            title="DECODE DRY RUN"
            subtext="Step-by-Step Deserialization with Two Pointers"
            category="ACT 3 · DECODING"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={271}
            accentColor={theme.cyan}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene06} name="Scene 06 Decode Trace">
          <Scene06DecodeTrace />
        </Series.Sequence>

        {/* ─── SCENE 07: DECODE CODE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 07">
          <SceneTitleCard
            sceneNumber="SCENE 07"
            title="DECODER CODE IMPLEMENTATION"
            subtext="Python Decoder with Two-Pointer Jump Invariant"
            category="ACT 3 · DECODING"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={271}
            accentColor={theme.good}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene07} name="Scene 07 Decode Code">
          <Scene07DecodeCode />
        </Series.Sequence>

        {/* ─── SCENE 08: CORRECTNESS & COMPLEXITY ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 08">
          <SceneTitleCard
            sceneNumber="SCENE 08"
            title="CORRECTNESS & COMPLEXITY"
            subtext="Delimiter Invariant Proof & O(C + N) Derivation"
            category="ACT 4 · ANALYSIS"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={271}
            accentColor={theme.pivot}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene08} name="Scene 08 Correctness Complexity">
          <Scene08CorrectnessComplexity />
        </Series.Sequence>

        {/* ─── SCENE 09: MISTAKES & EDGE CASES ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 09">
          <SceneTitleCard
            sceneNumber="SCENE 09"
            title="COMMON PITFALLS & EDGE CASES"
            subtext="Three Implementation Traps & Empty Input Verification"
            category="ACT 4 · ANALYSIS"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={271}
            accentColor={theme.warn}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene09} name="Scene 09 Mistakes Edge Cases">
          <Scene09MistakesEdgeCases />
        </Series.Sequence>

        {/* ─── SCENE 10: RECAP & ROADMAP ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 10">
          <SceneTitleCard
            sceneNumber="SCENE 10"
            title="RECAP & ROADMAP ADVANCEMENT"
            subtext="Universal Takeaway & Curriculum Progress: 17 / 227 Complete"
            category="ACT 4 · CONCLUSION"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={271}
            accentColor={theme.good}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene10} name="Scene 10 Recap Roadmap">
          <Scene10RecapRoadmap />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
