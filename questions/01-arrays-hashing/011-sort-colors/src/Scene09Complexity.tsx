/**
 * Scene09Complexity.tsx — Scene 09 · COMPLEXITY, COMMON MISTAKES & EDGE CASES
 * Sort Colors (LeetCode 75) · Pattern 01 — Arrays & Hashing
 *
 * Section 1 (F0..F1026): Complexity Comparison (Counting vs DNF) + Why O(N) Convergence Proof
 * Section 2 (F1026..F2891): Three Implementation Pitfalls & 4 Logical Regions (Direct Canvas Placement)
 * Section 3 (F2891..F3920): Comprehensive Edge Cases Suite (2-Row Spacious Grid Y: 170..680)
 */

import React, { useMemo } from "react";
import {
  Audio,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { ChalkboardBackground, ChalkFilters, CHALK_FILTER_STRONG_ID } from "../../../../kit/lib/chalk";
import { theme, fonts } from "../../../../kit/lib/theme";
import { ArrayTrackV2, ArrayElementItem } from "../../../../kit/components/array/ArrayTrackV2";
import { RoughBox } from "../../../../kit/components/RoughBox";
import { RoughLine } from "../../../../kit/components/RoughLine";
import { RoughCurve } from "../../../../kit/components/RoughCurve";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import syncData from "../sync/09-complexity.json";
import anchorsData from "../sync/09-complexity.anchors.json";

// Word-level caption timings
const captionWords: CaptionWord[] = (syncData.words || [])
  .map((w: any) => ({
    word: w.word,
    start: w.start_ms / 1000,
    end: w.end_ms / 1000,
  }))
  .filter((w) => w.word !== "");

// Helper to look up anchor timing safely
const getAnchor = (id: string) => {
  const found = anchorsData.anchors.find((a: any) => a.id === id);
  if (!found) throw new Error(`Missing required anchor: ${id}`);
  return found;
};

// Map values 0, 1, 2 to semantic kit styles
const toColorItems = (arr: number[]): ArrayElementItem[] =>
  arr.map((v) => ({
    value: v,
    stroke: v === 0 ? "#E05252" : v === 1 ? "rgba(255, 253, 247, 0.85)" : "#60A5FA",
    fill: v === 0 ? "rgba(224, 82, 82, 0.22)" : v === 1 ? "rgba(255, 253, 247, 0.12)" : "rgba(96, 165, 250, 0.22)",
  }));

// Generate points for complexity curve graph
function generateComplexityPoints(
  type: "n2" | "nlogn" | "n" | "1",
  width: number,
  height: number
): [number, number][] {
  const points: [number, number][] = [];
  const originX = 20;
  const originY = height - 10;
  const plotWidth = width - 40;
  const plotHeight = height - 30;
  const steps = 30;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = originX + t * plotWidth;
    let y = originY;
    if (type === "n2") {
      y = originY - (t * t * plotHeight * 0.95);
    } else if (type === "nlogn") {
      const val = (t * Math.log2(t * 9 + 1)) / Math.log2(10);
      y = originY - (val * plotHeight * 0.70);
    } else if (type === "n") {
      y = originY - (t * plotHeight * 0.48);
    } else if (type === "1") {
      y = originY - 24;
    }
    points.push([x, Math.max(10, Math.min(height - 10, y))]);
  }
  return points;
}

export const Scene09Complexity: React.FC = () => {
  const frame = useCurrentFrame();

  // Anchors lookup
  const aCompareIntro = useMemo(() => getAnchor("S09_COMPARE_INTRO"), []);
  const aCountingTime = useMemo(() => getAnchor("S09_COUNTING_TIME"), []);
  const aCountingSpace = useMemo(() => getAnchor("S09_COUNTING_SPACE"), []);
  const aCountingPasses = useMemo(() => getAnchor("S09_COUNTING_PASSES"), []);
  const aCountingPass1 = useMemo(() => getAnchor("S09_COUNTING_PASS1"), []);
  const aCountingPass2 = useMemo(() => getAnchor("S09_COUNTING_PASS2"), []);
  const aDnfTime = useMemo(() => getAnchor("S09_DNF_TIME"), []);
  const aDnfSpace = useMemo(() => getAnchor("S09_DNF_SPACE"), []);
  const aDnfOnePass = useMemo(() => getAnchor("S09_DNF_ONE_PASS"), []);
  const aWhyOn = useMemo(() => getAnchor("S09_WHY_ON"), []);
  const aMidRight = useMemo(() => getAnchor("S09_MID_RIGHT"), []);
  const aHighLeft = useMemo(() => getAnchor("S09_HIGH_LEFT"), []);
  const aUnknownShrinks = useMemo(() => getAnchor("S09_UNKNOWN_SHRINKS"), []);

  const aMistakesIntro = useMemo(() => getAnchor("S09_MISTAKES_INTRO"), []);
  const aMistake1 = useMemo(() => getAnchor("S09_MISTAKE1_SCENARIO"), []);
  const aMistake1Swap = useMemo(() => getAnchor("S09_MISTAKE1_SWAP"), []);
  const aMistake1DontMove = useMemo(() => getAnchor("S09_MISTAKE1_DONT_MOVE_MID"), []);
  const aMistake1ValUnknown = useMemo(() => getAnchor("S09_MISTAKE1_VAL_UNKNOWN"), []);
  const aMistake1IfMove = useMemo(() => getAnchor("S09_MISTAKE1_IF_MOVE_MID"), []);
  const aMistake2 = useMemo(() => getAnchor("S09_MISTAKE2_WHILE_STRICT"), []);
  const aMistake2NotEnough = useMemo(() => getAnchor("S09_MISTAKE2_NOT_ENOUGH"), []);
  const aMistake2NeedLeq = useMemo(() => getAnchor("S09_MISTAKE2_NEED_LEQ"), []);
  const aMistake2Reason = useMemo(() => getAnchor("S09_MISTAKE2_REASON"), []);
  const aMistake3 = useMemo(() => getAnchor("S09_MISTAKE3_OFF_BY_ONE"), []);
  const aFourRegions = useMemo(() => getAnchor("S09_FOUR_REGIONS_REMINDER"), []);
  const aRegionsList = useMemo(() => getAnchor("S09_REGIONS_LIST"), []);

  const aEdgeCasesIntro = useMemo(() => getAnchor("S09_EDGE_CASES_INTRO"), []);
  const aEdgeOneVal = useMemo(() => getAnchor("S09_EDGE_ONE_VAL"), []);
  const aEdgeAll0 = useMemo(() => getAnchor("S09_EDGE_ALL_ZERO"), []);
  const aEdgeAll1 = useMemo(() => getAnchor("S09_EDGE_ALL_ONE"), []);
  const aEdgeAll2 = useMemo(() => getAnchor("S09_EDGE_ALL_TWO"), []);
  const aEdgeSorted = useMemo(() => getAnchor("S09_EDGE_ALREADY_SORTED"), []);
  const aEdgeReverse = useMemo(() => getAnchor("S09_EDGE_REVERSE"), []);
  const aNoSpecial = useMemo(() => getAnchor("S09_NO_SPECIAL_CASE"), []);
  const aPowerInvariant = useMemo(() => getAnchor("S09_POWER_INVARIANT"), []);

  // Section visibility:
  // Section 1: F0 .. aMistakesIntro.startFrame (F1026)
  // Section 2: aMistakesIntro.startFrame .. aEdgeCasesIntro.startFrame (F1026 .. F2891)
  // Section 3: aEdgeCasesIntro.startFrame .. end (F2891 .. F3920)
  const isSection1 = frame < aMistakesIntro.startFrame;
  const isSection2 = frame >= aMistakesIntro.startFrame && frame < aEdgeCasesIntro.startFrame;
  const isSection3 = frame >= aEdgeCasesIntro.startFrame;

  // Graph dimensions
  const graphWidth = 680;
  const graphHeight = 360;
  const n2Points = useMemo(() => generateComplexityPoints("n2", graphWidth, graphHeight), [graphWidth, graphHeight]);
  const nlognPoints = useMemo(() => generateComplexityPoints("nlogn", graphWidth, graphHeight), [graphWidth, graphHeight]);
  const nPoints = useMemo(() => generateComplexityPoints("n", graphWidth, graphHeight), [graphWidth, graphHeight]);
  const onePoints = useMemo(() => generateComplexityPoints("1", graphWidth, graphHeight), [graphWidth, graphHeight]);

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#103426",
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      {/* Audio Element */}
      <Audio src={staticFile("audio/011/09-complexity.mp3")} />

      {/* ============================================================ */}
      {/* 1. TOP HEADER                                                */}
      {/* ============================================================ */}
      <div
        style={{
          position: "absolute",
          top: 26,
          left: 80,
          right: 80,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              padding: "6px 14px",
              borderRadius: 6,
              background: "rgba(0,0,0,0.45)",
              border: "1.5px solid rgba(255,253,247,0.4)",
              fontFamily: fonts.mono,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: "#FFFDF7",
            }}
          >
            QUESTION 011 · SORT COLORS
          </div>
          <div
            style={{
              padding: "6px 14px",
              borderRadius: 6,
              background: isSection1
                ? "rgba(110, 231, 183, 0.18)"
                : isSection2
                ? "rgba(255, 209, 102, 0.18)"
                : "rgba(96, 165, 250, 0.18)",
              border: `2px solid ${
                isSection1 ? "#6EE7B7" : isSection2 ? "#FFD166" : "#60A5FA"
              }`,
              fontFamily: fonts.mono,
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.08em",
              color: isSection1 ? "#6EE7B7" : isSection2 ? "#FFD166" : "#93C5FD",
            }}
          >
            {isSection1
              ? "PART 1 · COMPLEXITY & ONE-PASS PROOF"
              : isSection2
              ? "PART 2 · COMMON IMPLEMENTATION PITFALLS"
              : "PART 3 · COMPREHENSIVE EDGE CASES"}
          </div>
        </div>

        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 13,
            fontWeight: 800,
            color: "#FFFDF7",
            letterSpacing: "0.08em",
          }}
        >
          MAINTAINING THE INVARIANT
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. SECTION 1: COMPLEXITY COMPARISON & CONVERGENCE PROOF      */}
      {/* ============================================================ */}
      {isSection1 && (
        <div style={{ position: "absolute", inset: 0, zIndex: 10 }}>
          {frame < aWhyOn.startFrame ? (
            /* SUB-PHASE 1A: SIDE-BY-SIDE APPROACH COMPARISON & CURVE GRAPH (F0..F723) */
            <div
              style={{
                position: "absolute",
                top: 90,
                left: 80,
                width: 1760,
                display: "grid",
                gridTemplateColumns: "820px 900px",
                gap: 40,
              }}
            >
              {/* Left Column: Approaches Evaluation */}
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <div
                    style={{
                      fontFamily: fonts.hand,
                      fontSize: 42,
                      color: "#FFD166",
                      letterSpacing: "0.03em",
                      textShadow: "0 0 16px rgba(255, 209, 102, 0.3)",
                    }}
                  >
                    Comparing Both Approaches
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, color: "rgba(255,253,247,0.75)", marginTop: 4 }}>
                    Two valid O(N) strategies — but one is strictly superior for interviews.
                  </div>
                </div>

                {/* Approach 1: Counting Sort */}
                <div
                  style={{
                    padding: "20px 24px",
                    borderRadius: 14,
                    background:
                      frame >= aCountingPasses.startFrame
                        ? "rgba(255, 209, 102, 0.09)"
                        : "rgba(255, 253, 247, 0.05)",
                    border: `2px solid ${
                      frame >= aCountingPasses.startFrame ? "#FFD166" : "rgba(255, 253, 247, 0.2)"
                    }`,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 800, color: "#FFD166" }}>
                      APPROACH 1 · TWO-PASS COUNTING SORT
                    </span>
                    <span
                      style={{
                        padding: "3px 12px",
                        borderRadius: 4,
                        background: "rgba(255, 209, 102, 0.22)",
                        color: "#FFD166",
                        fontFamily: fonts.mono,
                        fontSize: 12,
                        fontWeight: 800,
                      }}
                    >
                      TWO PASSES
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: 28, fontFamily: fonts.mono, fontSize: 14, color: "#FFFDF7" }}>
                    <span>Time: <strong style={{ color: "#6EE7B7" }}>O(N)</strong></span>
                    <span>Space: <strong style={{ color: "#93C5FD" }}>O(1)</strong> (3 counters)</span>
                    <span>Passes: <strong style={{ color: "#FFD166" }}>2 passes</strong></span>
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, color: "rgba(255,253,247,0.85)", lineHeight: 1.45 }}>
                    • Pass 1: Scan entire array and record frequencies in `count[0, 1, 2]`<br />
                    • Pass 2: Sequentially overwrite the target array with sorted counts
                  </div>
                </div>

                {/* Approach 2: Dutch National Flag */}
                <div
                  style={{
                    padding: "20px 24px",
                    borderRadius: 14,
                    background:
                      frame >= aDnfTime.startFrame
                        ? "rgba(110, 231, 183, 0.14)"
                        : "rgba(255, 253, 247, 0.05)",
                    border: `2px solid ${
                      frame >= aDnfTime.startFrame ? "#6EE7B7" : "rgba(255, 253, 247, 0.2)"
                    }`,
                    boxShadow:
                      frame >= aDnfTime.startFrame ? "0 0 24px rgba(110, 231, 183, 0.2)" : "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 800, color: "#6EE7B7" }}>
                      APPROACH 2 · DUTCH NATIONAL FLAG
                    </span>
                    <span
                      style={{
                        padding: "3px 12px",
                        borderRadius: 4,
                        background: "#6EE7B7",
                        color: "#103426",
                        fontFamily: fonts.mono,
                        fontSize: 12,
                        fontWeight: 900,
                      }}
                    >
                      ONE PASS · IN-PLACE WINNER
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: 28, fontFamily: fonts.mono, fontSize: 14, color: "#FFFDF7" }}>
                    <span>Time: <strong style={{ color: "#6EE7B7" }}>O(N)</strong></span>
                    <span>Space: <strong style={{ color: "#93C5FD" }}>O(1)</strong> (3 pointers)</span>
                    <span>Passes: <strong style={{ color: "#6EE7B7" }}>1 pass</strong></span>
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, color: "rgba(255,253,247,0.85)", lineHeight: 1.45 }}>
                    • Single-pass 3-way partition using `low`, `mid`, `high` pointers<br />
                    • In-place element swaps, zero memory overwrites
                  </div>
                </div>

                {/* Champion Banner */}
                {frame >= aDnfOnePass.startFrame && (
                  <div
                    style={{
                      padding: "16px 20px",
                      borderRadius: 10,
                      background: "rgba(110, 231, 183, 0.18)",
                      border: "2px solid #6EE7B7",
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                    }}
                  >
                    <span style={{ fontSize: 32 }}>🏆</span>
                    <div>
                      <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: "#6EE7B7" }}>
                        WHY DNF IS THE INDUSTRY INTERVIEW STANDARD
                      </div>
                      <div style={{ fontFamily: fonts.mono, fontSize: 13, color: "#FFFDF7", marginTop: 2 }}>
                        Both achieve O(N) time and O(1) space, but DNF classifies in a single pass without re-writing values!
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Chalk Curve Graph */}
              <div
                style={{
                  position: "relative",
                  height: 580,
                  background: "rgba(0, 0, 0, 0.28)",
                  borderRadius: 16,
                  padding: "24px 28px",
                  border: "1.5px solid rgba(255, 253, 247, 0.22)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: fonts.hand, fontSize: 26, color: "#FFD166" }}>
                      Algorithm Complexity Curves
                    </span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 12, color: "rgba(255,253,247,0.6)" }}>
                      CHALKBOARD GRAPH
                    </span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontFamily: fonts.mono, fontSize: 12, color: "rgba(255,253,247,0.65)", marginTop: 6 }}>
                    <span>OPERATIONS ▲</span>
                    <span>INPUT SIZE N ►</span>
                  </div>
                </div>

                {/* SVG Graph Canvas */}
                <div style={{ position: "relative", width: graphWidth, height: graphHeight, margin: "10px auto" }}>
                  <svg width={graphWidth} height={graphHeight} style={{ overflow: "visible" }}>
                    {/* Y Axis */}
                    <RoughLine
                      shape={{ kind: "line", x1: 20, y1: 10, x2: 20, y2: graphHeight - 10 }}
                      stroke="rgba(255, 253, 247, 0.55)"
                      strokeWidth={2}
                      width={graphWidth}
                      height={graphHeight}
                      startFrame={0}
                      durationInFrames={20}
                      seed={11}
                    />
                    {/* X Axis */}
                    <RoughLine
                      shape={{ kind: "line", x1: 20, y1: graphHeight - 10, x2: graphWidth - 10, y2: graphHeight - 10 }}
                      stroke="rgba(255, 253, 247, 0.55)"
                      strokeWidth={2}
                      width={graphWidth}
                      height={graphHeight}
                      startFrame={0}
                      durationInFrames={20}
                      seed={12}
                    />
                  </svg>

                  {/* Reference O(N^2) Curve */}
                  <div style={{ position: "absolute", inset: 0, opacity: 0.35 }}>
                    <RoughCurve
                      points={n2Points}
                      width={graphWidth}
                      height={graphHeight}
                      stroke="#FF8080"
                      strokeWidth={2}
                      startFrame={0}
                      durationInFrames={30}
                      seed={21}
                    />
                    <div style={{ position: "absolute", left: 160, top: 40, fontFamily: fonts.mono, fontSize: 13, color: "#FF8080" }}>
                      O(N²) Quadratic
                    </div>
                  </div>

                  {/* Reference O(N log N) Curve */}
                  <div style={{ position: "absolute", inset: 0, opacity: 0.45 }}>
                    <RoughCurve
                      points={nlognPoints}
                      width={graphWidth}
                      height={graphHeight}
                      stroke="#FFA94D"
                      strokeWidth={2.5}
                      startFrame={0}
                      durationInFrames={30}
                      seed={22}
                    />
                    <div style={{ position: "absolute", left: 320, top: 110, fontFamily: fonts.mono, fontSize: 13, color: "#FFA94D" }}>
                      O(N log N) Standard Sort
                    </div>
                  </div>

                  {/* Active O(N) Linear Curve */}
                  {frame >= aCountingTime.startFrame && (
                    <div style={{ position: "absolute", inset: 0 }}>
                      <RoughCurve
                        points={nPoints}
                        width={graphWidth}
                        height={graphHeight}
                        stroke="#6EE7B7"
                        strokeWidth={5}
                        startFrame={aCountingTime.startFrame}
                        durationInFrames={28}
                        seed={31}
                      />
                      <div
                        style={{
                          position: "absolute",
                          left: graphWidth - 140,
                          top: graphHeight - 140,
                          fontFamily: fonts.mono,
                          fontSize: 16,
                          fontWeight: 900,
                          color: "#6EE7B7",
                          textShadow: "0 0 12px rgba(110, 231, 183, 0.6)",
                        }}
                      >
                        O(N) LINEAR
                      </div>
                    </div>
                  )}

                  {/* Active O(1) Constant Space Line */}
                  {frame >= aCountingSpace.startFrame && (
                    <div style={{ position: "absolute", inset: 0 }}>
                      <RoughCurve
                        points={onePoints}
                        width={graphWidth}
                        height={graphHeight}
                        stroke="#93C5FD"
                        strokeWidth={3.5}
                        startFrame={aCountingSpace.startFrame}
                        durationInFrames={24}
                        seed={41}
                      />
                      <div
                        style={{
                          position: "absolute",
                          left: graphWidth - 170,
                          top: graphHeight - 48,
                          fontFamily: fonts.mono,
                          fontSize: 14,
                          fontWeight: 800,
                          color: "#93C5FD",
                        }}
                      >
                        O(1) SPACE
                      </div>
                    </div>
                  )}
                </div>

                {/* Legend at bottom */}
                <div style={{ display: "flex", justifyContent: "space-around", fontFamily: fonts.mono, fontSize: 13 }}>
                  <span style={{ color: "#6EE7B7" }}>● Time: O(N) Linear Work</span>
                  <span style={{ color: "#93C5FD" }}>● Space: O(1) In-Place Pointers</span>
                  <span style={{ color: "rgba(255,253,247,0.6)" }}>-- O(N log N) Comparison</span>
                </div>
              </div>
            </div>
          ) : (
            /* SUB-PHASE 1B: POINTER CONVERGENCE PROOF FULL CENTER STAGE (F723..F1026) */
            <div
              style={{
                position: "absolute",
                top: 110,
                left: 120,
                right: 120,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 28,
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 48,
                    color: "#6EE7B7",
                    letterSpacing: "0.03em",
                    textShadow: "0 0 20px rgba(110, 231, 183, 0.4)",
                  }}
                >
                  Why Is Dutch National Flag Strictly O(N)?
                </div>
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    color: "rgba(255,253,247,0.85)",
                    marginTop: 8,
                    letterSpacing: "0.06em",
                  }}
                >
                  POINTER CONVERGENCE: <span style={{ color: "#FFD166" }}>mid</span> MOVES RIGHT (→) · <span style={{ color: "#93C5FD" }}>high</span> MOVES LEFT (←)
                </div>
              </div>

              {/* Center Stage Array Track */}
              <div style={{ margin: "15px 0 60px 0" }}>
                <ArrayTrackV2
                  elements={toColorItems([0, 0, 1, 1, 2, 0, 2, 2])}
                  slotWidth={76}
                  slotHeight={64}
                  gap={16}
                  showIndices={false}
                  pointerPlacement="top"
                  pointers={[
                    { id: "low", label: "low", index: 2, color: "#E05252", lane: 0 },
                    {
                      id: "mid",
                      label: "mid →",
                      index: frame >= aHighLeft.startFrame ? 4 : frame >= aMidRight.startFrame ? 3 : 2,
                      color: "#FFD166",
                      lane: 0,
                    },
                    {
                      id: "high",
                      label: "← high",
                      index: frame >= aUnknownShrinks.startFrame ? 4 : frame >= aHighLeft.startFrame ? 5 : 7,
                      color: "#93C5FD",
                      lane: 0,
                    },
                  ]}
                  partitions={[
                    {
                      id: "p_unknown",
                      startIndex: frame >= aHighLeft.startFrame ? 4 : frame >= aMidRight.startFrame ? 3 : 2,
                      endIndex: frame >= aUnknownShrinks.startFrame ? 4 : frame >= aHighLeft.startFrame ? 5 : 7,
                      label:
                        frame >= aUnknownShrinks.startFrame
                          ? "UNKNOWN REGION (Size 1 → Contracts to 0)"
                          : frame >= aHighLeft.startFrame
                          ? "UNKNOWN REGION (Size 2)"
                          : frame >= aMidRight.startFrame
                          ? "UNKNOWN REGION (Size 5)"
                          : "UNKNOWN REGION (Size 6)",
                      color: "#FFD166",
                      variant: "bracket",
                    },
                  ]}
                />
              </div>

              {/* Mathematical Proof Derivation Box */}
              <div
                style={{
                  width: 1080,
                  padding: "24px 36px",
                  borderRadius: 14,
                  background: "rgba(0, 0, 0, 0.35)",
                  border: "2px solid rgba(110, 231, 183, 0.4)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 800, color: "#6EE7B7" }}>
                  MATHEMATICAL CONVERGENCE PROOF
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 15, color: "#FFFDF7", textAlign: "center", lineHeight: 1.6 }}>
                  Unknown Interval Size: <code style={{ color: "#FFD166" }}>L = high - mid + 1</code><br />
                  In every iteration, either <code style={{ color: "#FFD166" }}>mid += 1</code> OR <code style={{ color: "#93C5FD" }}>high -= 1</code>.<br />
                  Therefore, the unknown interval strictly shrinks by at least 1 in every loop step.
                </div>
                <div
                  style={{
                    marginTop: 6,
                    padding: "8px 24px",
                    borderRadius: 6,
                    background: "rgba(110, 231, 183, 0.22)",
                    border: "1.5px solid #6EE7B7",
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    fontWeight: 900,
                    color: "#6EE7B7",
                    letterSpacing: "0.06em",
                  }}
                >
                  TOTAL ITERATIONS ≤ N  →  TIME COMPLEXITY IS STRICTLY O(N)
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ============================================================ */}
      {/* 3. SECTION 2: COMMON IMPLEMENTATION PITFALLS & 4 REGIONS     */}
      {/* ============================================================ */}
      {isSection2 && (
        <div style={{ position: "absolute", inset: 0, zIndex: 10 }}>
          {frame < aMistake2.startFrame ? (
            /* PITFALL 1: ADVANCING mid AFTER SWAPPING WITH high (F1026..F1728) */
            <div
              style={{
                position: "absolute",
                top: 115,
                left: 100,
                right: 100,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Header */}
              <div style={{ textAlign: "center", marginBottom: 32 }}>
                <div style={{ fontFamily: fonts.mono, fontSize: 24, fontWeight: 900, color: "#FF8080", letterSpacing: "0.06em" }}>
                  ⚠️ PITFALL 1: ADVANCING mid AFTER SWAPPING WITH high
                </div>
                <div style={{ fontFamily: fonts.hand, fontSize: 28, color: "rgba(255,253,247,0.9)", marginTop: 6 }}>
                  When nums[mid] == 2, we swap with nums[high] and decrement high. But we MUST NOT increment mid!
                </div>
              </div>

              {/* Center Stage Array Track */}
              <div style={{ margin: "30px 0 45px 0" }}>
                <ArrayTrackV2
                  elements={
                    frame >= aMistake1Swap.startFrame
                      ? toColorItems([0, 1, 0, 1, 2, 2])
                      : toColorItems([0, 1, 2, 1, 0, 2])
                  }
                  slotWidth={76}
                  slotHeight={64}
                  gap={18}
                  showIndices={true}
                  indexFormat="idx [i]"
                  pointers={
                    frame >= aMistake1IfMove.startFrame
                      ? [
                          {
                            id: "high_pos",
                            label: "high (idx 3)",
                            index: 3,
                            color: "#93C5FD",
                            lane: 0,
                          },
                          {
                            id: "mid_err",
                            label: "mid (SKIPPED!) ❌",
                            index: 3,
                            color: "#E05252",
                            lane: 1,
                          },
                        ]
                      : [
                          {
                            id: "mid",
                            label: "mid (LOCKED) 🔒",
                            index: 2,
                            color: "#FFD166",
                            lane: 0,
                          },
                          {
                            id: "high",
                            label: "high",
                            index: frame >= aMistake1Swap.startFrame ? 3 : 4,
                            color: "#93C5FD",
                            lane: 0,
                          },
                        ]
                  }
                  highlightedIndices={{
                    2: frame >= aMistake1IfMove.startFrame ? "#E05252" : "#FFD166",
                  }}
                />
              </div>

              {/* Two Bottom Panels */}
              <div style={{ width: 1720, display: "grid", gridTemplateColumns: "840px 840px", gap: 40, justifyContent: "center" }}>
                <div
                  style={{
                    padding: "24px 28px",
                    minHeight: 155,
                    boxSizing: "border-box",
                    borderRadius: 12,
                    background: "rgba(0, 0, 0, 0.4)",
                    borderLeft: "5px solid #FF8080",
                    borderTop: "1px solid rgba(255,253,247,0.15)",
                    borderRight: "1px solid rgba(255,253,247,0.15)",
                    borderBottom: "1px solid rgba(255,253,247,0.15)",
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 800, color: "#FF8080", marginBottom: 8 }}>
                    WHY CANNOT ADVANCE mid?
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, color: "#FFFDF7", lineHeight: 1.55 }}>
                    The element that arrived at slot [mid] came from the `high` side. It was inside the unclassified region and has <strong>NEVER</strong> been inspected! It could be a 0, 1, or even another 2. If mid moves immediately, we skip it without classifying it.
                  </div>
                </div>

                <div
                  style={{
                    padding: "24px 28px",
                    minHeight: 155,
                    boxSizing: "border-box",
                    borderRadius: 12,
                    background: "rgba(0, 0, 0, 0.4)",
                    borderLeft: "5px solid #6EE7B7",
                    borderTop: "1px solid rgba(255,253,247,0.15)",
                    borderRight: "1px solid rgba(255,253,247,0.15)",
                    borderBottom: "1px solid rgba(255,253,247,0.15)",
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 800, color: "#6EE7B7", marginBottom: 8 }}>
                    CORRECT INVARIANT CODE
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 14, color: "#FFFDF7", lineHeight: 1.55 }}>
                    <code style={{ color: "#FF8080" }}>❌ high -= 1; mid += 1; // FATAL: Skips uninspected element!</code><br />
                    <code style={{ color: "#6EE7B7" }}>✅ high -= 1; // Correct: Let next loop iteration inspect nums[mid]!</code>
                  </div>
                </div>
              </div>
            </div>
          ) : frame < aMistake3.startFrame ? (
            /* PITFALL 2: STRICT INEQUALITY in while (mid < high) (F1728..F2356) */
            <div
              style={{
                position: "absolute",
                top: 115,
                left: 100,
                right: 100,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Header */}
              <div style={{ textAlign: "center", marginBottom: 32 }}>
                <div style={{ fontFamily: fonts.mono, fontSize: 24, fontWeight: 900, color: "#FFD166", letterSpacing: "0.06em" }}>
                  ⚠️ PITFALL 2: USING `while mid &lt; high` INSTEAD OF `while mid &lt;= high`
                </div>
                <div style={{ fontFamily: fonts.hand, fontSize: 28, color: "rgba(255,253,247,0.9)", marginTop: 6 }}>
                  When mid == high, exactly one single element remains in the unknown interval!
                </div>
              </div>

              {/* Center Stage Array Track */}
              <div style={{ margin: "30px 0 45px 0" }}>
                <ArrayTrackV2
                  elements={toColorItems([0, 0, 1, 0, 2, 2])}
                  slotWidth={76}
                  slotHeight={64}
                  gap={18}
                  showIndices={true}
                  indexFormat="idx [i]"
                  pointers={[
                    {
                      id: "mid_high",
                      label: "mid == high (Slot 3)",
                      index: 3,
                      color: frame >= aMistake2NeedLeq.startFrame ? "#6EE7B7" : "#FF8080",
                      lane: 0,
                    },
                  ]}
                  highlightedIndices={{
                    3: frame >= aMistake2NeedLeq.startFrame ? "#6EE7B7" : "#FF8080",
                  }}
                />
              </div>

              {/* Two Bottom Panels */}
              <div style={{ width: 1720, display: "grid", gridTemplateColumns: "840px 840px", gap: 40, justifyContent: "center" }}>
                <div
                  style={{
                    padding: "24px 28px",
                    minHeight: 155,
                    boxSizing: "border-box",
                    borderRadius: 12,
                    background: "rgba(0, 0, 0, 0.4)",
                    borderLeft: "5px solid #FF8080",
                    borderTop: "1px solid rgba(255,253,247,0.15)",
                    borderRight: "1px solid rgba(255,253,247,0.15)",
                    borderBottom: "1px solid rgba(255,253,247,0.15)",
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 800, color: "#FF8080", marginBottom: 8 }}>
                    WHY STRICT INEQUALITY FAILS
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, color: "#FFFDF7", lineHeight: 1.55 }}>
                    With `while mid &lt; high`, the loop terminates the instant `mid == high`. Slot [3] has NEVER been inspected and will remain permanently unclassified in the middle of the array!
                  </div>
                </div>

                <div
                  style={{
                    padding: "24px 28px",
                    minHeight: 155,
                    boxSizing: "border-box",
                    borderRadius: 12,
                    background: "rgba(0, 0, 0, 0.4)",
                    borderLeft: "5px solid #6EE7B7",
                    borderTop: "1px solid rgba(255,253,247,0.15)",
                    borderRight: "1px solid rgba(255,253,247,0.15)",
                    borderBottom: "1px solid rgba(255,253,247,0.15)",
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 800, color: "#6EE7B7", marginBottom: 8 }}>
                    THE REQUIRED LOOP CONDITION
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 14, color: "#FFFDF7", lineHeight: 1.55 }}>
                    <code style={{ color: "#FF8080" }}>❌ while mid &lt; high:  // Exits with 1 uninspected element!</code><br />
                    <code style={{ color: "#6EE7B7" }}>✅ while mid &lt;= high: // Inspects final element until mid &gt; high!</code>
                  </div>
                </div>
              </div>
            </div>
          ) : frame < aFourRegions.startFrame ? (
            /* PITFALL 3: OFF-BY-ONE INITIALIZATION (F2356..F2564) */
            <div
              style={{
                position: "absolute",
                top: 115,
                left: 100,
                right: 100,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Header */}
              <div style={{ textAlign: "center", marginBottom: 32 }}>
                <div style={{ fontFamily: fonts.mono, fontSize: 24, fontWeight: 900, color: "#93C5FD", letterSpacing: "0.06em" }}>
                  ⚠️ PITFALL 3: OFF-BY-ONE INITIALIZATION (high = n - 1)
                </div>
                <div style={{ fontFamily: fonts.hand, fontSize: 28, color: "rgba(255,253,247,0.9)", marginTop: 6 }}>
                  Arrays are 0-indexed: valid indices run from 0 to n - 1!
                </div>
              </div>

              {/* Center Stage Array Track */}
              <div style={{ margin: "30px 0 45px 0" }}>
                <ArrayTrackV2
                  elements={toColorItems([0, 1, 2, 0, 2, 1])}
                  slotWidth={76}
                  slotHeight={64}
                  gap={18}
                  showIndices={true}
                  indexFormat="idx [i]"
                  pointers={[
                    {
                      id: "high_valid",
                      label: "high = n - 1 (Last Valid Index 5) ✅",
                      index: 5,
                      color: "#6EE7B7",
                      lane: 0,
                    },
                  ]}
                  highlightedIndices={{
                    5: "#6EE7B7",
                  }}
                />
              </div>

              {/* Two Bottom Panels */}
              <div style={{ width: 1720, display: "grid", gridTemplateColumns: "840px 840px", gap: 40, justifyContent: "center" }}>
                <div
                  style={{
                    padding: "24px 28px",
                    minHeight: 155,
                    boxSizing: "border-box",
                    borderRadius: 12,
                    background: "rgba(0, 0, 0, 0.4)",
                    borderLeft: "5px solid #FF8080",
                    borderTop: "1px solid rgba(255,253,247,0.15)",
                    borderRight: "1px solid rgba(255,253,247,0.15)",
                    borderBottom: "1px solid rgba(255,253,247,0.15)",
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 800, color: "#FF8080", marginBottom: 8 }}>
                    WHY `high = n` CRASHES
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, color: "#FFFDF7", lineHeight: 1.55 }}>
                    In 0-indexed arrays of length n, index `n` does not exist. Accessing `nums[high]` when `high = n` triggers an immediate out-of-bounds index error!
                  </div>
                </div>

                <div
                  style={{
                    padding: "24px 28px",
                    minHeight: 155,
                    boxSizing: "border-box",
                    borderRadius: 12,
                    background: "rgba(0, 0, 0, 0.4)",
                    borderLeft: "5px solid #6EE7B7",
                    borderTop: "1px solid rgba(255,253,247,0.15)",
                    borderRight: "1px solid rgba(255,253,247,0.15)",
                    borderBottom: "1px solid rgba(255,253,247,0.15)",
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 800, color: "#6EE7B7", marginBottom: 8 }}>
                    PROPER 3-POINTER INITIALIZATION
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 14, color: "#FFFDF7", lineHeight: 1.55 }}>
                    <code style={{ color: "#FF8080" }}>❌ high = len(nums);      // IndexError on nums[high]!</code><br />
                    <code style={{ color: "#6EE7B7" }}>✅ high = len(nums) - 1;  // Correct last valid slot!</code>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* THE GOLDEN 4-REGION INVARIANT (F2564..F2891) */
            <div
              style={{
                position: "absolute",
                top: 115,
                left: 80,
                right: 80,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Header */}
              <div style={{ textAlign: "center", marginBottom: 28 }}>
                <div style={{ fontFamily: fonts.mono, fontSize: 24, fontWeight: 900, color: "#6EE7B7", letterSpacing: "0.06em" }}>
                  THE GOLDEN INVARIANT: FOUR LOGICAL REGIONS, NOT THREE
                </div>
                <div style={{ fontFamily: fonts.hand, fontSize: 28, color: "rgba(255,253,247,0.9)", marginTop: 6 }}>
                  0s, 1s, and 2s are only the classified targets. The 4th region — UNKNOWN — is where all algorithmic progress happens!
                </div>
              </div>

              {/* Master 4-Region Partition Array */}
              <div style={{ margin: "16px 0 70px 0" }}>
                <ArrayTrackV2
                  elements={toColorItems([0, 0, 1, 1, 2, 0, 2, 2])}
                  slotWidth={76}
                  slotHeight={64}
                  gap={16}
                  showIndices={false}
                  pointerPlacement="top"
                  pointers={[
                    { id: "low", label: "low", index: 2, color: "#E05252", lane: 0 },
                    { id: "mid", label: "mid", index: 4, color: "#FFD166", lane: 0 },
                    { id: "high", label: "high", index: 5, color: "#93C5FD", lane: 0 },
                  ]}
                  partitions={[
                    { id: "p0", startIndex: 0, endIndex: 1, label: "0s [0..low-1]", color: "#E05252", variant: "bracket" },
                    { id: "p1", startIndex: 2, endIndex: 3, label: "1s [low..mid-1]", color: "#FFFDF7", variant: "bracket" },
                    { id: "p2", startIndex: 4, endIndex: 5, label: "UNKNOWN [mid..high]", color: "#FFD166", variant: "bracket" },
                    { id: "p3", startIndex: 6, endIndex: 7, label: "2s [high+1..n-1]", color: "#60A5FA", variant: "bracket" },
                  ]}
                />
              </div>

              {/* 4 Balanced Region Panels Across Screen */}
              <div style={{ width: 1760, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
                <div style={{ padding: "22px 24px", minHeight: 140, boxSizing: "border-box", borderRadius: 10, background: "rgba(224, 82, 82, 0.15)", border: "2px solid #E05252" }}>
                  <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: "#FF8080", marginBottom: 6 }}>
                    REGION 1: CONFIRMED 0s
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, color: "#FFFDF7", lineHeight: 1.5 }}>
                    Indices: <code>[0 .. low-1]</code><br />All values are strictly 0.
                  </div>
                </div>

                <div style={{ padding: "22px 24px", minHeight: 140, boxSizing: "border-box", borderRadius: 10, background: "rgba(255, 253, 247, 0.1)", border: "2px solid rgba(255,253,247,0.5)" }}>
                  <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: "#FFFDF7", marginBottom: 6 }}>
                    REGION 2: CONFIRMED 1s
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, color: "#FFFDF7", lineHeight: 1.5 }}>
                    Indices: <code>[low .. mid-1]</code><br />All values are strictly 1.
                  </div>
                </div>

                <div style={{ padding: "22px 24px", minHeight: 140, boxSizing: "border-box", borderRadius: 10, background: "rgba(255, 209, 102, 0.15)", border: "2px solid #FFD166" }}>
                  <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: "#FFD166", marginBottom: 6 }}>
                    REGION 3: UNKNOWN
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, color: "#FFFDF7", lineHeight: 1.5 }}>
                    Indices: <code>[mid .. high]</code><br />Active work zone (contracts to 0).
                  </div>
                </div>

                <div style={{ padding: "22px 24px", minHeight: 140, boxSizing: "border-box", borderRadius: 10, background: "rgba(96, 165, 250, 0.15)", border: "2px solid #60A5FA" }}>
                  <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: "#93C5FD", marginBottom: 6 }}>
                    REGION 4: CONFIRMED 2s
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, color: "#FFFDF7", lineHeight: 1.5 }}>
                    Indices: <code>[high+1 .. n-1]</code><br />All values are strictly 2.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ============================================================ */}
      {/* 4. SECTION 3: COMPREHENSIVE EDGE CASES (SPACIOUS 2-ROW GRID) */}
      {/* ============================================================ */}
      {isSection3 && (
        <div style={{ position: "absolute", inset: 0, zIndex: 10 }}>
          {/* Section 3 Header */}
          <div
            style={{
              position: "absolute",
              top: 85,
              left: 100,
              right: 100,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontFamily: fonts.hand, fontSize: 36, color: "#60A5FA" }}>
                Comprehensive Edge Cases Suite
              </div>
              <div style={{ fontFamily: fonts.mono, fontSize: 13, color: "rgba(255,253,247,0.75)" }}>
                Testing extreme boundary cases against the 4-region loop invariant.
              </div>
            </div>
            <div
              style={{
                padding: "6px 16px",
                borderRadius: 6,
                background: "rgba(110, 231, 183, 0.2)",
                border: "1.5px solid #6EE7B7",
                fontFamily: fonts.mono,
                fontSize: 13,
                fontWeight: 800,
                color: "#6EE7B7",
              }}
            >
              ALL CASES PASS PROVABLY
            </div>
          </div>

          {/* 2-Row x 3-Column Edge Case Grid (Y: 165 to Y: 675, Height: 240px each) */}
          <div
            style={{
              position: "absolute",
              top: 165,
              left: 100,
              width: 1720,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "240px 240px",
              gap: 24,
              opacity: frame >= aPowerInvariant.startFrame ? 0.2 : 1,
              transition: "opacity 0.4s ease",
            }}
          >
            {/* Case 1: Single Element [1] */}
            <div
              style={{
                background: "rgba(0, 0, 0, 0.35)",
                borderRadius: 14,
                padding: "16px 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: frame >= aEdgeOneVal.startFrame ? "2px solid #6EE7B7" : "1.5px solid rgba(255,253,247,0.2)",
                boxShadow: frame >= aEdgeOneVal.startFrame ? "0 0 24px rgba(110, 231, 183, 0.35)" : "none",
                opacity: frame >= aEdgeOneVal.startFrame ? 1 : 0.65,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: "#6EE7B7" }}>
                  1. SINGLE ELEMENT [1]
                </span>
                <span style={{ color: "#6EE7B7", fontWeight: 900, fontFamily: fonts.mono, fontSize: 13 }}>✔ PASS</span>
              </div>
              <div style={{ display: "flex", justifyContent: "center", margin: "6px 0" }}>
                <ArrayTrackV2
                  elements={toColorItems([1])}
                  slotWidth={56}
                  slotHeight={48}
                  gap={10}
                  showIndices={false}
                  maxWidth={260}
                />
              </div>
              <div style={{ fontFamily: fonts.mono, fontSize: 12, color: "#FFD166" }}>
                Initial: low=0, mid=0, high=0
              </div>
              <div style={{ fontFamily: fonts.mono, fontSize: 12, color: "#FFFDF7", lineHeight: 1.4 }}>
                Runs exactly 1 iteration (`mid += 1`). Loop cleanly exits because `mid &gt; high`. Zero crashes!
              </div>
            </div>

            {/* Case 2: All Zeros [0, 0, 0] */}
            <div
              style={{
                background: "rgba(0, 0, 0, 0.35)",
                borderRadius: 14,
                padding: "16px 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: frame >= aEdgeAll0.startFrame ? "2px solid #E05252" : "1.5px solid rgba(255,253,247,0.2)",
                boxShadow: frame >= aEdgeAll0.startFrame ? "0 0 24px rgba(224, 82, 82, 0.35)" : "none",
                opacity: frame >= aEdgeAll0.startFrame ? 1 : 0.65,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: "#FF8080" }}>
                  2. ALL ZEROS [0, 0, 0]
                </span>
                <span style={{ color: "#6EE7B7", fontWeight: 900, fontFamily: fonts.mono, fontSize: 13 }}>✔ PASS</span>
              </div>
              <div style={{ display: "flex", justifyContent: "center", margin: "6px 0" }}>
                <ArrayTrackV2
                  elements={toColorItems([0, 0, 0])}
                  slotWidth={56}
                  slotHeight={48}
                  gap={10}
                  showIndices={false}
                  maxWidth={260}
                />
              </div>
              <div style={{ fontFamily: fonts.mono, fontSize: 12, color: "#FF8080" }}>
                Action: Self-swaps 0 with 0
              </div>
              <div style={{ fontFamily: fonts.mono, fontSize: 12, color: "#FFFDF7", lineHeight: 1.4 }}>
                `low` and `mid` advance in lockstep across the array. Elements stay intact in sorted order.
              </div>
            </div>

            {/* Case 3: All Ones [1, 1, 1] */}
            <div
              style={{
                background: "rgba(0, 0, 0, 0.35)",
                borderRadius: 14,
                padding: "16px 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: frame >= aEdgeAll1.startFrame ? "2px solid #FFFDF7" : "1.5px solid rgba(255,253,247,0.2)",
                boxShadow: frame >= aEdgeAll1.startFrame ? "0 0 24px rgba(255, 253, 247, 0.35)" : "none",
                opacity: frame >= aEdgeAll1.startFrame ? 1 : 0.65,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: "#FFFDF7" }}>
                  3. ALL ONES [1, 1, 1]
                </span>
                <span style={{ color: "#6EE7B7", fontWeight: 900, fontFamily: fonts.mono, fontSize: 13 }}>✔ PASS</span>
              </div>
              <div style={{ display: "flex", justifyContent: "center", margin: "6px 0" }}>
                <ArrayTrackV2
                  elements={toColorItems([1, 1, 1])}
                  slotWidth={56}
                  slotHeight={48}
                  gap={10}
                  showIndices={false}
                  maxWidth={260}
                />
              </div>
              <div style={{ fontFamily: fonts.mono, fontSize: 12, color: "#FFFDF7" }}>
                Action: Zero swaps required
              </div>
              <div style={{ fontFamily: fonts.mono, fontSize: 12, color: "#FFFDF7", lineHeight: 1.4 }}>
                `mid` simply scans smoothly 0 → 1 → 2 → 3. `low` and `high` remain untouched.
              </div>
            </div>

            {/* Case 4: All Twos [2, 2, 2] */}
            <div
              style={{
                background: "rgba(0, 0, 0, 0.35)",
                borderRadius: 14,
                padding: "16px 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: frame >= aEdgeAll2.startFrame ? "2px solid #60A5FA" : "1.5px solid rgba(255,253,247,0.2)",
                boxShadow: frame >= aEdgeAll2.startFrame ? "0 0 24px rgba(96, 165, 250, 0.35)" : "none",
                opacity: frame >= aEdgeAll2.startFrame ? 1 : 0.65,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: "#93C5FD" }}>
                  4. ALL TWOS [2, 2, 2]
                </span>
                <span style={{ color: "#6EE7B7", fontWeight: 900, fontFamily: fonts.mono, fontSize: 13 }}>✔ PASS</span>
              </div>
              <div style={{ display: "flex", justifyContent: "center", margin: "6px 0" }}>
                <ArrayTrackV2
                  elements={toColorItems([2, 2, 2])}
                  slotWidth={56}
                  slotHeight={48}
                  gap={10}
                  showIndices={false}
                  maxWidth={260}
                />
              </div>
              <div style={{ fontFamily: fonts.mono, fontSize: 12, color: "#93C5FD" }}>
                Action: mid stays locked at 0
              </div>
              <div style={{ fontFamily: fonts.mono, fontSize: 12, color: "#FFFDF7", lineHeight: 1.4 }}>
                `high` decrements sequentially 2 → 1 → 0 → -1. Then `mid &gt; high` triggers immediate termination.
              </div>
            </div>

            {/* Case 5: Already Sorted [0, 1, 2] */}
            <div
              style={{
                background: "rgba(0, 0, 0, 0.35)",
                borderRadius: 14,
                padding: "16px 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: frame >= aEdgeSorted.startFrame ? "2px solid #FFD166" : "1.5px solid rgba(255,253,247,0.2)",
                boxShadow: frame >= aEdgeSorted.startFrame ? "0 0 24px rgba(255, 209, 102, 0.35)" : "none",
                opacity: frame >= aEdgeSorted.startFrame ? 1 : 0.65,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: "#FFD166" }}>
                  5. ALREADY SORTED [0, 1, 2]
                </span>
                <span style={{ color: "#6EE7B7", fontWeight: 900, fontFamily: fonts.mono, fontSize: 13 }}>✔ PASS</span>
              </div>
              <div style={{ display: "flex", justifyContent: "center", margin: "6px 0" }}>
                <ArrayTrackV2
                  elements={toColorItems([0, 1, 2])}
                  slotWidth={56}
                  slotHeight={48}
                  gap={10}
                  showIndices={false}
                  maxWidth={260}
                />
              </div>
              <div style={{ fontFamily: fonts.mono, fontSize: 12, color: "#FFD166" }}>
                Action: Minimum operations
              </div>
              <div style={{ fontFamily: fonts.mono, fontSize: 12, color: "#FFFDF7", lineHeight: 1.4 }}>
                Clean linear partition in minimal operations. No regressions or redundant movements occur.
              </div>
            </div>

            {/* Case 6: Reverse Sorted [2, 1, 0] */}
            <div
              style={{
                background: "rgba(0, 0, 0, 0.35)",
                borderRadius: 14,
                padding: "16px 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: frame >= aEdgeReverse.startFrame ? "2px solid #A78BFA" : "1.5px solid rgba(255,253,247,0.2)",
                boxShadow: frame >= aEdgeReverse.startFrame ? "0 0 24px rgba(167, 139, 250, 0.35)" : "none",
                opacity: frame >= aEdgeReverse.startFrame ? 1 : 0.65,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: "#C4B5FD" }}>
                  6. REVERSE SORTED [2, 1, 0]
                </span>
                <span style={{ color: "#6EE7B7", fontWeight: 900, fontFamily: fonts.mono, fontSize: 13 }}>✔ PASS</span>
              </div>
              <div style={{ display: "flex", justifyContent: "center", margin: "6px 0" }}>
                <ArrayTrackV2
                  elements={toColorItems([2, 1, 0])}
                  slotWidth={56}
                  slotHeight={48}
                  gap={10}
                  showIndices={false}
                  maxWidth={260}
                />
              </div>
              <div style={{ fontFamily: fonts.mono, fontSize: 12, color: "#C4B5FD" }}>
                Action: Invariant swap sequence
              </div>
              <div style={{ fontFamily: fonts.mono, fontSize: 12, color: "#FFFDF7", lineHeight: 1.4 }}>
                Standard 3-branch classification swaps 2 right, 0 left, settling 1 naturally in the center!
              </div>
            </div>
          </div>

          {/* Conditional Banner 1: No Special Case Required (F3712..F3797) */}
          {frame >= aNoSpecial.startFrame && frame < aPowerInvariant.startFrame && (
            <div
              style={{
                position: "absolute",
                top: 715,
                left: 100,
                right: 100,
                padding: "14px 24px",
                borderRadius: 10,
                background: "rgba(110, 231, 183, 0.2)",
                border: "2px solid #6EE7B7",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                boxShadow: "0 0 32px rgba(110, 231, 183, 0.3)",
              }}
            >
              <div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 900, color: "#6EE7B7", letterSpacing: "0.06em" }}>
                ZERO SPECIAL-CASE CODE REQUIRED · NO IF (N == 1) GUARDS
              </div>
              <div style={{ fontFamily: fonts.mono, fontSize: 13, color: "#FFFDF7" }}>
                The 4-region loop invariant [0..low-1] | [low..mid-1] | [mid..high] | [high+1..n-1] naturally and provably guarantees correctness for all inputs!
              </div>
            </div>
          )}

          {/* Conditional Banner 2: Grand Finale Invariant Triumph (F3797..F3920) */}
          {frame >= aPowerInvariant.startFrame && (
            <div
              style={{
                position: "absolute",
                top: 240,
                left: 200,
                right: 200,
                padding: "36px 44px",
                borderRadius: 18,
                background: "rgba(10, 24, 18, 0.95)",
                border: "2.5px solid #6EE7B7",
                boxShadow: "0 0 48px rgba(110, 231, 183, 0.4)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
                zIndex: 40,
              }}
            >
              <div
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 50,
                  fontWeight: 900,
                  color: "#6EE7B7",
                  letterSpacing: "0.04em",
                  textShadow: "0 0 20px rgba(110, 231, 183, 0.6)",
                }}
              >
                The Power of Loop Invariants
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 20,
                  fontFamily: fonts.mono,
                  fontSize: 13,
                  fontWeight: 800,
                }}
              >
                <span style={{ padding: "5px 14px", borderRadius: 6, background: "rgba(110, 231, 183, 0.2)", color: "#6EE7B7", border: "1px solid #6EE7B7" }}>
                  ✓ PROVABLY CORRECT
                </span>
                <span style={{ padding: "5px 14px", borderRadius: 6, background: "rgba(255, 209, 102, 0.2)", color: "#FFD166", border: "1px solid #FFD166" }}>
                  ✓ EXACTLY 1 PASS
                </span>
                <span style={{ padding: "5px 14px", borderRadius: 6, background: "rgba(96, 165, 250, 0.2)", color: "#93C5FD", border: "1px solid #60A5FA" }}>
                  ✓ O(N) LINEAR TIME
                </span>
                <span style={{ padding: "5px 14px", borderRadius: 6, background: "rgba(255, 253, 247, 0.15)", color: "#FFFDF7", border: "1px solid rgba(255,253,247,0.4)" }}>
                  ✓ O(1) EXTRA SPACE
                </span>
              </div>

              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 15,
                  color: "#FFFDF7",
                  textAlign: "center",
                  lineHeight: 1.6,
                  maxWidth: 960,
                }}
              >
                When each pointer preserves its region guarantee:<br />
                <strong style={{ color: "#FF8080" }}>[0 .. low-1] = 0s</strong> · <strong style={{ color: "#FFFDF7" }}>[low .. mid-1] = 1s</strong> · <strong style={{ color: "#FFD166" }}>[mid .. high] = unknown</strong> · <strong style={{ color: "#60A5FA" }}>[high+1 .. n-1] = 2s</strong><br />
                all boundary inputs and edge cases solve themselves naturally with zero special-case guards!
              </div>
            </div>
          )}
        </div>
      )}

      {/* ============================================================ */}
      {/* 5. BOTTOM CAPTIONS (Z-INDEX 50)                              */}
      {/* ============================================================ */}
      <Captions words={captionWords} />
    </div>
  );
};
