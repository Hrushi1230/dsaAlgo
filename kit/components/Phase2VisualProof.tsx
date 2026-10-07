import React from "react";
import { AbsoluteFill, Sequence, useCurrentFrame } from "remotion";
import { ChalkboardBackground, ChalkFilters } from "../lib/chalk";
import { theme } from "../lib/theme";
import { ProblemOpenerShell } from "./ProblemOpenerShell";
import { ArrayProblemOpener } from "./ArrayProblemOpener";
import { SceneLabelStrip } from "./SceneLabelStrip";
import { SceneEdgeTitle } from "./SceneEdgeTitle";

/**
 * Phase2VisualProof — Visual Architecture Proof Composition (Foundation V2).
 *
 * Demonstrates:
 * 1. ProblemOpenerShell + ArrayProblemOpener
 * 2. Horizontal Array representation
 * 3. Vertical / Top-to-Bottom Array representation
 * 4. SceneLabelStrip (lightweight in-scene label)
 * 5. SceneEdgeTitle (continuous header transition)
 *
 * Uses neutral sample data only.
 */
export const Phase2VisualProof: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: theme.boardBg }}>
      <ChalkboardBackground />
      <ChalkFilters />

      {/* ACT 1 (F0–F75): ProblemOpenerShell + ArrayProblemOpener */}
      <Sequence from={0} durationInFrames={75}>
        <ProblemOpenerShell
          pattern="01 · ARRAYS & HASHING"
          leetcodeNumber={75}
          difficulty="MEDIUM"
          title="Sort Colors"
          task="Given an array nums with n objects colored red, white, or blue, sort them in-place."
          signature="def sortColors(nums: List[int]) -> None:"
          showBackground={false}
        >
          <ArrayProblemOpener
            elements={[2, 0, 2, 1, 1, 0]}
            orientation="horizontal"
            name="nums"
            showIndices={true}
            instruction="Sort the colors in-place: 0 → 1 → 2"
            startFrame={6}
          />
        </ProblemOpenerShell>
        <SceneLabelStrip
          label="PROBLEM OPENER"
          step="STAGE 01"
          accentColor="cyan"
          position="top-right"
          style={{ top: 96, right: 80 }}
          startFrame={4}
        />
      </Sequence>

      {/* ACT 2 (F75–F150): Horizontal vs. Vertical Array Orientations */}
      <Sequence from={75} durationInFrames={75}>
        <SceneEdgeTitle
          title="Array Visual Family: Horizontal & Vertical"
          subtitle="Fixed-slot horizontal traversal track alongside vertical annotated stack"
          category="FOUNDATION V2 · DATA STRUCTURE VISUAL GRAMMAR"
          accentColor={theme.pivot}
          startFrame={0}
          align="left"
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "160px 100px 60px 100px",
            boxSizing: "border-box",
          }}
        >
          {/* Horizontal Track Demonstration */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            <span
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: 18,
                fontWeight: 700,
                color: theme.chalkDim,
                letterSpacing: "1px",
              }}
            >
              1. HORIZONTAL TRACK (SWAPS & POINTERS)
            </span>
            <ArrayProblemOpener
              elements={[
                { value: 2, highlight: "warn" },
                { value: 0, highlight: "good" },
                { value: 2 },
                { value: 1, highlight: "pivot", label: "mid" },
              ]}
              orientation="horizontal"
              name="track"
              showIndices={true}
              cardWidth={100}
              cardHeight={105}
              gap={18}
              startFrame={4}
            />
          </div>

          {/* Vertical Track Demonstration */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            <span
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: 18,
                fontWeight: 700,
                color: theme.chalkDim,
                letterSpacing: "1px",
              }}
            >
              2. VERTICAL TRACK (SIDE-BY-SIDE CODE/STATE)
            </span>
            <ArrayProblemOpener
              elements={[
                { value: 2, index: 0 },
                { value: 0, index: 1, highlight: "good", label: "matched" },
                { value: 1, index: 2 },
              ]}
              orientation="vertical"
              name="stack"
              showIndices={true}
              cardWidth={90}
              cardHeight={70}
              gap={12}
              startFrame={8}
            />
          </div>
        </div>

        <SceneLabelStrip
          label="DUAL ORIENTATION"
          step="ACT 2"
          accentColor="pivot"
          position="top-right"
          startFrame={2}
        />
      </Sequence>

      {/* ACT 3 (F150–F210): Continuous In-scene Beat Transition */}
      <Sequence from={150} durationInFrames={60}>
        <SceneEdgeTitle
          title="In-Scene Beat Transition (Zero Screen Blanking)"
          subtitle="Continuous pedagogical flow without disruptive full-screen bumpers"
          category="ACT 3 · CONTINUOUS TEACHING FLOW"
          accentColor={theme.good}
          startFrame={0}
          align="left"
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 100,
          }}
        >
          <ArrayProblemOpener
            elements={[
              { value: 0, highlight: "good" },
              { value: 0, highlight: "good" },
              { value: 1, highlight: "better" },
              { value: 1, highlight: "better" },
              { value: 2, highlight: "warn" },
              { value: 2, highlight: "warn" },
            ]}
            orientation="horizontal"
            name="partitioned"
            showIndices={true}
            instruction="Stable slots remain on screen while headers update"
            cardWidth={115}
            cardHeight={120}
            gap={20}
            startFrame={4}
          />
        </div>

        <SceneLabelStrip
          label="OPTIMAL TRACE"
          step="STEP 03"
          accentColor="good"
          position="top-right"
          startFrame={2}
        />
      </Sequence>
    </AbsoluteFill>
  );
};
