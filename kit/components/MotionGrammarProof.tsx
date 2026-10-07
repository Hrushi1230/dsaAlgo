import React from "react";
import { AbsoluteFill, Sequence, useCurrentFrame, interpolate } from "remotion";
import { ChalkboardBackground, ChalkFilters } from "../lib/chalk";
import { theme, fonts } from "../lib/theme";
import { EASE, tween, pop, fadeIn } from "../lib/anim";
import { recedeOut, riseIn, arcFlight } from "../lib/motion";
import { SceneEdgeTitle } from "./SceneEdgeTitle";
import { SceneLabelStrip } from "./SceneLabelStrip";
import { RoughLine } from "./RoughLine";
import { RoughCurve } from "./RoughCurve";
import { RoughBox } from "./RoughBox";
import { ChalkDust } from "./ChalkDust";
import { Shatter } from "./Shatter";
import { CountUp } from "./CountUp";

// =============================================================================
// STUDY A: FOCUS → COMPARE → HIT
// =============================================================================
const StudyA: React.FC = () => {
  const frame = useCurrentFrame();

  // F10–F20: CAUSE / FOCUS
  const op1Focus = frame >= 10;
  const op2Focus = frame >= 14;
  const compLineStart = 12;

  // F22–F32: STATE REACTION / HIT
  const hitResolved = frame >= 22;
  const hitPopScale = pop(frame, 22, 10, 1.06);
  const cardColor = hitResolved ? theme.good : op1Focus ? theme.pivot : theme.chalkText;
  const cardBg = hitResolved ? "rgba(60, 229, 167, 0.12)" : op1Focus ? "rgba(255, 209, 102, 0.08)" : "transparent";

  // F32–F48: COMPREHENSION HOLD (State is visibly held)
  // F48–F59: SETTLE

  return (
    <AbsoluteFill>
      <SceneEdgeTitle
        category="FOUNDATION V2 · MOTION GRAMMAR PROOF · STUDY A"
        title="FOCUS → COMPARE → HIT: Cause → Reaction → Hold"
        subtitle="Cause locks first, reaction turns green, comprehension hold precedes any subsequent motion"
        accentColor={theme.good}
      />
      <SceneLabelStrip label="STUDY A" step="HIT" accentColor="good" position="top-right" startFrame={2} />

      {/* Decision Tag */}
      {op1Focus && (
        <div
          style={{
            position: "absolute",
            top: 320,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: fonts.mono,
            fontSize: 22,
            fontWeight: 700,
            color: hitResolved ? theme.good : theme.pivot,
            background: "rgba(0, 0, 0, 0.35)",
            padding: "8px 24px",
            borderRadius: 8,
            border: `1.5px solid ${hitResolved ? theme.good : theme.pivot}`,
          }}
        >
          {hitResolved ? "✓ HIT: nums[0] == nums[1] (7 == 7)" : "COMPARING: nums[0] vs nums[1]"}
        </div>
      )}

      {/* Comparison Connector Bridge */}
      {frame >= compLineStart && (
        <div style={{ position: "absolute", left: 880, top: 490, width: 160, height: 40 }}>
          <RoughLine
            shape={{ kind: "arrow", x1: 0, y1: 20, x2: 160, y2: 20 }}
            width={160}
            height={40}
            startFrame={compLineStart}
            durationInFrames={10}
            stroke={hitResolved ? theme.good : theme.pivot}
            strokeWidth={3}
            seed={11}
          />
        </div>
      )}

      {/* Operand 1 (Slot 0) */}
      <div
        style={{
          position: "absolute",
          left: 760,
          top: 450,
          width: 120,
          height: 130,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          background: cardBg,
          border: `2px solid ${cardColor}`,
          transform: `scale(${op1Focus ? hitPopScale : 1})`,
        }}
      >
        <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkDim, marginBottom: 4 }}>
          nums[0]
        </span>
        <span style={{ fontFamily: fonts.code, fontSize: 48, fontWeight: 700, color: cardColor }}>
          7
        </span>
      </div>

      {/* Operand 2 (Slot 1) */}
      <div
        style={{
          position: "absolute",
          left: 1040,
          top: 450,
          width: 120,
          height: 130,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          background: hitResolved ? "rgba(60, 229, 167, 0.12)" : op2Focus ? "rgba(255, 209, 102, 0.08)" : "transparent",
          border: `2px solid ${hitResolved ? theme.good : op2Focus ? theme.pivot : theme.chalkText}`,
          transform: `scale(${hitResolved ? hitPopScale : 1})`,
        }}
      >
        <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkDim, marginBottom: 4 }}>
          nums[1]
        </span>
        <span
          style={{
            fontFamily: fonts.code,
            fontSize: 48,
            fontWeight: 700,
            color: hitResolved ? theme.good : op2Focus ? theme.pivot : theme.chalkText,
          }}
        >
          7
        </span>
      </div>

      {/* Comprehension Hold Callout */}
      {frame >= 32 && (
        <div
          style={{
            position: "absolute",
            top: 640,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: fonts.sans,
            fontSize: 20,
            color: theme.chalkDim,
            letterSpacing: "0.5px",
          }}
        >
          [Comprehension Hold F32–F48: State confirmed before next instruction]
        </div>
      )}
    </AbsoluteFill>
  );
};

// =============================================================================
// STUDY B: QUERY → MISS
// =============================================================================
const StudyB: React.FC = () => {
  const frame = useCurrentFrame();

  // F10–F24: CAUSE / QUERY
  const queryActive = frame >= 10;

  // F26–F38: STATE REACTION / MISS (Membership lookup resolves without visually scanning stored members.)
  const missResolved = frame >= 26;

  return (
    <AbsoluteFill>
      <SceneEdgeTitle
        category="FOUNDATION V2 · MOTION GRAMMAR PROOF · STUDY B"
        title="QUERY → MISS: Instant Lookup Without Node Scanning"
        subtitle="Hash set query travels to portal, instantly resolves MISS, warns without destructive shatter"
        accentColor={theme.warn}
      />
      <SceneLabelStrip label="STUDY B" step="MISS" accentColor="warn" position="top-right" startFrame={2} />

      {/* Query Candidate */}
      <div
        style={{
          position: "absolute",
          left: 620,
          top: 450,
          width: 120,
          height: 130,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          border: `2px solid ${queryActive ? theme.cyan : theme.chalkText}`,
          background: queryActive ? "rgba(78, 205, 196, 0.08)" : "transparent",
        }}
      >
        <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkDim, marginBottom: 4 }}>
          target
        </span>
        <span style={{ fontFamily: fonts.code, fontSize: 48, fontWeight: 700, color: queryActive ? theme.cyan : theme.chalkText }}>
          5
        </span>
      </div>

      {/* Query Arc Beam to HashSet Portal */}
      {queryActive && (
        <div style={{ position: "absolute", left: 740, top: 400, width: 340, height: 160 }}>
          <RoughCurve
            points={[
              [20, 110],
              [170, 30],
              [320, 110],
            ]}
            width={340}
            height={160}
            startFrame={12}
            durationInFrames={14}
            stroke={theme.cyan}
            strokeWidth={3}
            seed={22}
          />
        </div>
      )}

      {/* Mock HashSet Container */}
      <div
        style={{
          position: "absolute",
          left: 1080,
          top: 410,
          width: 280,
          height: 200,
          borderRadius: 12,
          border: `2px dashed ${missResolved ? theme.warn : theme.chalkDim}`,
          background: missResolved ? "rgba(255, 118, 117, 0.08)" : "rgba(0, 0, 0, 0.2)",
          display: "flex",
          flexDirection: "column",
          padding: 16,
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkDim }}>HashSet: seen</span>
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 14,
              color: missResolved ? theme.warn : theme.chalkDim,
              fontWeight: 700,
            }}
          >
            {missResolved ? "O(1) MISS" : "O(1) LOOKUP"}
          </span>
        </div>

        {/* Set elements (Not scanned sequentially!) */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 20 }}>
          {[2, 4, 9].map((val) => (
            <div
              key={val}
              style={{
                width: 54,
                height: 54,
                borderRadius: 8,
                border: `1.5px solid ${theme.chalkDim}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: fonts.code,
                fontSize: 24,
                color: theme.chalkText,
              }}
            >
              {val}
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 16, fontFamily: fonts.mono, fontSize: 13, color: theme.chalkDim }}>
          [Membership lookup resolves without visually scanning stored members.]
        </div>
      </div>

      {/* Miss Response Callout */}
      {missResolved && (
        <div
          style={{
            position: "absolute",
            top: 650,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: fonts.sans,
            fontSize: 20,
            color: theme.warn,
            fontWeight: 600,
          }}
        >
          MISS: 5 ∉ seen · Retracts calmly without Shatter · Next candidate evaluated
        </div>
      )}
    </AbsoluteFill>
  );
};

// =============================================================================
// STUDY C: POINTER_MOVE
// =============================================================================
const StudyC: React.FC = () => {
  const frame = useCurrentFrame();

  // F10–F24: CAUSE / DECISION
  const decisionVisible = frame >= 10;

  // F24–F32: HOLD (Decision visible, pointer stays at Slot 0!)
  // F32–F46: POINTER_MOVE (Pointer travels slot 0 -> slot 1 over 14 frames)
  const pointerX = tween(frame, 32, 14, 720, 880);
  const landed = frame >= 46;

  return (
    <AbsoluteFill>
      <SceneEdgeTitle
        category="FOUNDATION V2 · MOTION GRAMMAR PROOF · STUDY C"
        title="POINTER_MOVE: Decision Precedes Movement"
        subtitle="Spoken decision locks first; pointer remains stationary during hold, then moves smoothly"
        accentColor={theme.pivot}
      />
      <SceneLabelStrip label="STUDY C" step="POINTER" accentColor="pivot" position="top-right" startFrame={2} />

      {/* Decision Tag */}
      {decisionVisible && (
        <div
          style={{
            position: "absolute",
            top: 310,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: fonts.mono,
            fontSize: 20,
            fontWeight: 700,
            color: theme.pivot,
            background: "rgba(0, 0, 0, 0.35)",
            padding: "8px 24px",
            borderRadius: 8,
            border: `1.5px solid ${theme.pivot}`,
          }}
        >
          DECISION: nums[curr] &lt; target → Advance curr (index 0 → 1)
        </div>
      )}

      {/* 4 Fixed Array Slots */}
      <div style={{ position: "absolute", top: 430, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 40 }}>
        {[
          { idx: 0, val: 3 },
          { idx: 1, val: 8 },
          { idx: 2, val: 1 },
          { idx: 3, val: 6 },
        ].map(({ idx, val }) => {
          const isCurrent = landed ? idx === 1 : idx === 0;
          return (
            <div key={idx} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 8,
                  border: `2px solid ${isCurrent ? theme.pivot : theme.chalkText}`,
                  background: isCurrent ? "rgba(255, 209, 102, 0.08)" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: fonts.code,
                  fontSize: 44,
                  fontWeight: 700,
                  color: isCurrent ? theme.pivot : theme.chalkText,
                }}
              >
                {val}
              </div>
              <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkDim, marginTop: 8 }}>
                idx {idx}
              </span>
            </div>
          );
        })}
      </div>

      {/* Moving Pointer Arrow */}
      <div
        style={{
          position: "absolute",
          left: pointerX,
          top: 610,
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: 32, color: theme.pivot }}>▲</span>
        <span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, color: theme.pivot }}>
          curr
        </span>
      </div>

      {/* Timing callout */}
      <div
        style={{
          position: "absolute",
          top: 710,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: fonts.sans,
          fontSize: 18,
          color: theme.chalkDim,
        }}
      >
        {frame < 32
          ? "[F10–F32: Decision is established while pointer stays fixed at index 0]"
          : "[F32–F46: Explicit eased interpolation — pointer moves only after cause]"}
      </div>
    </AbsoluteFill>
  );
};

// =============================================================================
// STUDY D: SWAP (Fixed Slots, Lifting & Crossing Values)
// =============================================================================
const StudyD: React.FC = () => {
  const frame = useCurrentFrame();

  // F10–F18: CAUSE / DECISION
  const decisionLocked = frame >= 10;

  // F18–F24: HOLD
  // F25–F52: SWAP TRAVEL
  // Slot 0 at (x: 800, y: 500), Slot 1 at (x: 1120, y: 500)
  const swapProgress = tween(frame, 25, 26, 0, 1);

  // Separate crossing paths:
  // Value A (4) travels 800 -> 1120, lifting with peak = 80 (y goes up)
  const flightA = arcFlight({ x: 800, y: 500 }, { x: 1120, y: 500 }, 80, swapProgress);
  // Value B (9) travels 1120 -> 800, descending slightly with peak = -40 (y goes down) to prevent collision
  const flightB = arcFlight({ x: 1120, y: 500 }, { x: 800, y: 500 }, -40, swapProgress);

  return (
    <AbsoluteFill>
      <SceneEdgeTitle
        category="FOUNDATION V2 · MOTION GRAMMAR PROOF · STUDY D"
        title="SWAP: Stable Slots, Lift, Non-Colliding Arcs & Landing"
        subtitle="Slots stay stationary on board; values lift, cross along independent arcs, and settle"
        accentColor={theme.cyan}
      />
      <SceneLabelStrip label="STUDY D" step="SWAP" accentColor="cyan" position="top-right" startFrame={2} />

      {/* Decision Tag */}
      {decisionLocked && (
        <div
          style={{
            position: "absolute",
            top: 310,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: fonts.mono,
            fontSize: 20,
            fontWeight: 700,
            color: theme.cyan,
            background: "rgba(0, 0, 0, 0.35)",
            padding: "8px 24px",
            borderRadius: 8,
            border: `1.5px solid ${theme.cyan}`,
          }}
        >
          DECISION: SWAP(nums[0], nums[1]) · Exchange values without moving slots
        </div>
      )}

      {/* Stationary Slot 0 */}
      <div
        style={{
          position: "absolute",
          left: 800 - 60,
          top: 500 - 65,
          width: 120,
          height: 130,
          borderRadius: 8,
          border: `2px dashed ${theme.chalkDim}`,
          background: "rgba(0,0,0,0.25)",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingBottom: 8,
          boxSizing: "border-box",
        }}
      >
        <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkDim }}>slot [0]</span>
      </div>

      {/* Stationary Slot 1 */}
      <div
        style={{
          position: "absolute",
          left: 1120 - 60,
          top: 500 - 65,
          width: 120,
          height: 130,
          borderRadius: 8,
          border: `2px dashed ${theme.chalkDim}`,
          background: "rgba(0,0,0,0.25)",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingBottom: 8,
          boxSizing: "border-box",
        }}
      >
        <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkDim }}>slot [1]</span>
      </div>

      {/* Traveling Value A (Initially 4 at Slot 0, lands at Slot 1) */}
      <div
        style={{
          position: "absolute",
          left: flightA.x,
          top: flightA.y - 15,
          transform: `translate(-50%, -50%) scale(${flightA.scale}) rotate(${flightA.rot}deg)`,
          width: 110,
          height: 110,
          borderRadius: 8,
          border: `2.5px solid ${theme.cyan}`,
          background: "rgba(78, 205, 196, 0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: fonts.code,
          fontSize: 48,
          fontWeight: 700,
          color: theme.cyan,
        }}
      >
        4
      </div>

      {/* Traveling Value B (Initially 9 at Slot 1, lands at Slot 0) */}
      <div
        style={{
          position: "absolute",
          left: flightB.x,
          top: flightB.y - 15,
          transform: `translate(-50%, -50%) scale(${flightB.scale}) rotate(${flightB.rot}deg)`,
          width: 110,
          height: 110,
          borderRadius: 8,
          border: `2.5px solid ${theme.pivot}`,
          background: "rgba(255, 209, 102, 0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: fonts.code,
          fontSize: 48,
          fontWeight: 700,
          color: theme.pivot,
        }}
      >
        9
      </div>

      {/* Chalk Landing Dust at F51 */}
      {frame >= 50 && (
        <>
          <ChalkDust x={1120} y={500} start={50} color={theme.cyan} count={10} radius={45} />
          <ChalkDust x={800} y={500} start={50} color={theme.pivot} count={10} radius={45} />
        </>
      )}

      {/* Stationary Pointer (Does NOT move during swap!) */}
      <div
        style={{
          position: "absolute",
          left: 800,
          top: 660,
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: 28, color: theme.chalkText }}>▲</span>
        <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkText }}>p (stationary)</span>
      </div>

      <div
        style={{
          position: "absolute",
          top: 740,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: fonts.sans,
          fontSize: 18,
          color: theme.chalkDim,
        }}
      >
        [Slots remain fixed · Independent upper/lower arcs prevent collision · Pointer does not move]
      </div>
    </AbsoluteFill>
  );
};

// =============================================================================
// STUDY E: COUNT_UPDATE (Counter Rolls After Causal Event)
// =============================================================================
const StudyE: React.FC = () => {
  const frame = useCurrentFrame();

  // F12–F24: CAUSE (Sequence element accepted)
  const causeOccurred = frame >= 12;
  const accepted = frame >= 22;

  // F30: COUNT_UPDATE begins rolling AFTER the causal event completes
  return (
    <AbsoluteFill>
      <SceneEdgeTitle
        category="FOUNDATION V2 · MOTION GRAMMAR PROOF · STUDY E"
        title="COUNT_UPDATE: Numeric Roll Follows Causal Event"
        subtitle="Causal accept completes first; counter rolls only after the state event is established"
        accentColor={theme.good}
      />
      <SceneLabelStrip label="STUDY E" step="COUNTER" accentColor="good" position="top-right" startFrame={2} />

      {/* Causal Sequence Element */}
      <div
        style={{
          position: "absolute",
          left: 640,
          top: 450,
          display: "flex",
          gap: 20,
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 120,
            height: 130,
            borderRadius: 8,
            border: `2px solid ${theme.good}`,
            background: "rgba(60, 229, 167, 0.08)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkDim }}>prev</span>
          <span style={{ fontFamily: fonts.code, fontSize: 44, color: theme.good, fontWeight: 700 }}>3</span>
        </div>

        <span style={{ fontFamily: fonts.mono, fontSize: 32, color: theme.chalkDim }}>→</span>

        <div
          style={{
            width: 120,
            height: 130,
            borderRadius: 8,
            border: `2px solid ${accepted ? theme.good : causeOccurred ? theme.pivot : theme.chalkText}`,
            background: accepted ? "rgba(60, 229, 167, 0.12)" : "transparent",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transform: `scale(${accepted ? pop(frame, 22, 8, 1.06) : 1})`,
          }}
        >
          <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkDim }}>next</span>
          <span
            style={{
              fontFamily: fonts.code,
              fontSize: 44,
              color: accepted ? theme.good : theme.chalkText,
              fontWeight: 700,
            }}
          >
            4
          </span>
        </div>
      </div>

      {/* Decision Callout */}
      {causeOccurred && (
        <div
          style={{
            position: "absolute",
            top: 330,
            left: 730,
            transform: "translateX(-50%)",
            fontFamily: fonts.mono,
            fontSize: 18,
            fontWeight: 700,
            color: accepted ? theme.good : theme.pivot,
          }}
        >
          {accepted ? "✓ ACCEPTED: Consecutive Match (4 - 3 == 1)" : "EVALUATING: 4 follows 3"}
        </div>
      )}

      {/* Accumulator Display Card using CountUp */}
      <div
        style={{
          position: "absolute",
          left: 1080,
          top: 440,
          width: 260,
          height: 150,
          borderRadius: 12,
          border: `2px solid ${frame >= 30 ? theme.good : theme.chalkDim}`,
          background: "rgba(0,0,0,0.3)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkDim, marginBottom: 8 }}>
          CURRENT STREAK
        </span>
        <CountUp
          steps={[
            { frame: 0, value: 1 },
            { frame: 30, value: 2 },
          ]}
          rollFrames={9}
          fontSize={60}
          color={frame >= 34 ? theme.good : theme.chalkText}
          pad={2}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: 660,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: fonts.sans,
          fontSize: 18,
          color: theme.chalkDim,
        }}
      >
        [F22: Match accepted · F30: CountUp rolls 01 → 02 afterward · Counter never rolls before cause]
      </div>
    </AbsoluteFill>
  );
};

// =============================================================================
// STUDY F: REJECT (Normal Rejection / Calm Dimming)
// =============================================================================
const StudyF: React.FC = () => {
  const frame = useCurrentFrame();

  // F12–F24: CAUSE (Out of bounds)
  const rejected = frame >= 24;
  const dimOpacity = tween(frame, 24, 16, 1, 0.35);

  return (
    <AbsoluteFill>
      <SceneEdgeTitle
        category="FOUNDATION V2 · MOTION GRAMMAR PROOF · STUDY F"
        title="REJECT: Normal Rejection Dims & Retracts Without Shatter"
        subtitle="Invalid candidate dims opacity and strikes out calmly; shatter is NOT used for standard skips"
        accentColor={theme.warn}
      />
      <SceneLabelStrip label="STUDY F" step="REJECT" accentColor="warn" position="top-right" startFrame={2} />

      {/* Decision Tag */}
      {frame >= 12 && (
        <div
          style={{
            position: "absolute",
            top: 310,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: fonts.mono,
            fontSize: 20,
            fontWeight: 700,
            color: theme.warn,
            background: "rgba(0,0,0,0.35)",
            padding: "8px 24px",
            borderRadius: 8,
            border: `1.5px solid ${theme.warn}`,
          }}
        >
          CONDITION: value 13 &gt; upper_bound (10) → REJECT CANDIDATE
        </div>
      )}

      {/* Candidate Card (Dims smoothly, no shatter) */}
      <div
        style={{
          position: "absolute",
          left: 960 - 75,
          top: 450 - 75,
          width: 150,
          height: 150,
          borderRadius: 10,
          border: `2px solid ${rejected ? theme.warn : theme.chalkText}`,
          background: "rgba(0,0,0,0.25)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: dimOpacity,
        }}
      >
        <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkDim, marginBottom: 6 }}>
          candidate
        </span>
        <span style={{ fontFamily: fonts.code, fontSize: 52, fontWeight: 700, color: theme.chalkText }}>
          13
        </span>
      </div>

      {/* Chalk Strike-Through Line */}
      {rejected && (
        <div style={{ position: "absolute", left: 960 - 75, top: 450 - 75, width: 150, height: 150 }}>
          <RoughLine
            shape={{ kind: "line", x1: 15, y1: 15, x2: 135, y2: 135 }}
            width={150}
            height={150}
            startFrame={26}
            durationInFrames={14}
            stroke={theme.warn}
            strokeWidth={3}
            seed={44}
          />
        </div>
      )}

      <div
        style={{
          position: "absolute",
          top: 660,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: fonts.sans,
          fontSize: 18,
          color: theme.chalkDim,
        }}
      >
        [Normal rejection: Dims to 35% opacity with gentle strike · Preserves peace of the board]
      </div>
    </AbsoluteFill>
  );
};

// =============================================================================
// STUDY G: BREAK (Shatter Reserved for Invariant Failure)
// =============================================================================
const StudyG: React.FC = () => {
  const frame = useCurrentFrame();

  // F12–F25: CAUSE (Invariant breaks: gap != 1)
  const breakFrame = 26;
  const broken = frame >= breakFrame;

  return (
    <AbsoluteFill>
      <SceneEdgeTitle
        category="FOUNDATION V2 · MOTION GRAMMAR PROOF · STUDY G"
        title="BREAK / Shatter: Reserved Strictly for Broken Invariants"
        subtitle="Physical shatter is semantically justified only when an algorithmic assumption fails"
        accentColor={theme.warn}
      />
      <SceneLabelStrip label="STUDY G" step="BREAK" accentColor="warn" position="top-right" startFrame={2} />

      {/* Decision Tag */}
      {frame >= 12 && (
        <div
          style={{
            position: "absolute",
            top: 310,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: fonts.mono,
            fontSize: 20,
            fontWeight: 700,
            color: theme.warn,
            background: "rgba(0,0,0,0.35)",
            padding: "8px 24px",
            borderRadius: 8,
            border: `1.5px solid ${theme.warn}`,
          }}
        >
          INVARIANT VIOLATION: gap (5 - 2 = 3) ≠ 1 → Structural Chain Breaks!
        </div>
      )}

      {/* Segment A [1, 2] */}
      <div
        style={{
          position: "absolute",
          left: 640,
          top: 450,
          width: 140,
          height: 100,
          borderRadius: 8,
          border: `2px solid ${theme.chalkText}`,
          background: "rgba(0,0,0,0.25)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.chalkDim }}>Chain A</span>
        <span style={{ fontFamily: fonts.code, fontSize: 36, color: theme.chalkText }}>[1, 2]</span>
      </div>

      {/* Shattering Bridge between Chain A and Chain B */}
      <div style={{ position: "absolute", left: 810, top: 498, width: 300 }}>
        <Shatter width={300} breakFrame={breakFrame} color={theme.warn} segments={8} gravity={0.32} />
      </div>

      {/* Segment B [5, 6] */}
      <div
        style={{
          position: "absolute",
          left: 1140,
          top: 450,
          width: 140,
          height: 100,
          borderRadius: 8,
          border: `2px solid ${theme.chalkText}`,
          background: "rgba(0,0,0,0.25)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.chalkDim }}>Chain B</span>
        <span style={{ fontFamily: fonts.code, fontSize: 36, color: theme.chalkText }}>[5, 6]</span>
      </div>

      <div
        style={{
          position: "absolute",
          top: 660,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: fonts.sans,
          fontSize: 18,
          color: broken ? theme.warn : theme.chalkDim,
          fontWeight: broken ? 600 : 400,
        }}
      >
        {broken
          ? "[F26: Bridge shatters into falling fragments — REJECT ≠ SHATTER distinction visually proven]"
          : "[Structural bridge holds until invariant fails at F26]"}
      </div>
    </AbsoluteFill>
  );
};

// =============================================================================
// STUDY H: TRANSITION (Recede Out & Rise In Preserving Exact Timeline Duration)
// =============================================================================
const StudyH: React.FC = () => {
  const frame = useCurrentFrame();

  // F20–F44: Outgoing structure recedes
  const recede = recedeOut(frame, 20, 24);
  // F24–F48: Incoming structure rises in
  const rise = riseIn(frame, 24, 24);

  return (
    <AbsoluteFill>
      <SceneEdgeTitle
        category="FOUNDATION V2 · MOTION GRAMMAR PROOF · STUDY H"
        title="TRANSITION: In-Scene Recede & Rise Preserving Exact Duration"
        subtitle="Current structure recedes while next structure rises; exact audio timeline length is 100% preserved"
        accentColor={theme.better}
      />
      <SceneLabelStrip label="STUDY H" step="TRANSITION" accentColor="better" position="top-right" startFrame={2} />

      {/* Outgoing Structure (Approach 1: Brute Force O(n²)) */}
      {recede.opacity > 0 && (
        <div
          style={{
            position: "absolute",
            left: 960 - 200,
            top: 450 - 90,
            width: 400,
            height: 180,
            borderRadius: 12,
            border: `2px solid ${theme.warn}`,
            background: "rgba(255, 118, 117, 0.08)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            opacity: recede.opacity,
            transform: `translateY(${recede.translateY}px) scale(${recede.scale})`,
          }}
        >
          <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.warn, marginBottom: 8 }}>
            APPROACH 1 · SCAN ALL PAIRS
          </span>
          <span style={{ fontFamily: fonts.code, fontSize: 44, fontWeight: 700, color: theme.warn }}>
            O(n²) Time
          </span>
        </div>
      )}

      {/* Incoming Structure (Approach 2: Hash Set O(n)) */}
      {rise.opacity > 0 && (
        <div
          style={{
            position: "absolute",
            left: 960 - 200,
            top: 450 - 90,
            width: 400,
            height: 180,
            borderRadius: 12,
            border: `2px solid ${theme.good}`,
            background: "rgba(60, 229, 167, 0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            opacity: rise.opacity,
            transform: `translateY(${rise.translateY}px)`,
          }}
        >
          <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.good, marginBottom: 8 }}>
            APPROACH 2 · OPTIMAL HASH SET
          </span>
          <span style={{ fontFamily: fonts.code, fontSize: 44, fontWeight: 700, color: theme.good }}>
            O(n) Time
          </span>
        </div>
      )}

      <div
        style={{
          position: "absolute",
          top: 670,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: fonts.sans,
          fontSize: 18,
          color: theme.chalkDim,
        }}
      >
        [F20–F44: recedeOut(24f) · F24–F48: riseIn(24f) · Total scene duration stays exactly 60 frames]
      </div>
    </AbsoluteFill>
  );
};

// =============================================================================
// MAIN COMPOSITION: MotionGrammarProof (Foundation V2 Phase 4)
// =============================================================================
export const MotionGrammarProof: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: theme.boardBg }}>
      <ChalkboardBackground />
      <ChalkFilters />

      {/* Study A (F0–F60): FOCUS → COMPARE → HIT */}
      <Sequence from={0} durationInFrames={60}>
        <StudyA />
      </Sequence>

      {/* Study B (F60–F120): QUERY → MISS */}
      <Sequence from={60} durationInFrames={60}>
        <StudyB />
      </Sequence>

      {/* Study C (F120–F180): POINTER_MOVE */}
      <Sequence from={120} durationInFrames={60}>
        <StudyC />
      </Sequence>

      {/* Study D (F180–F240): SWAP */}
      <Sequence from={180} durationInFrames={60}>
        <StudyD />
      </Sequence>

      {/* Study E (F240–F300): COUNT_UPDATE */}
      <Sequence from={240} durationInFrames={60}>
        <StudyE />
      </Sequence>

      {/* Study F (F300–F360): REJECT */}
      <Sequence from={300} durationInFrames={60}>
        <StudyF />
      </Sequence>

      {/* Study G (F360–F420): BREAK / Shatter */}
      <Sequence from={360} durationInFrames={60}>
        <StudyG />
      </Sequence>

      {/* Study H (F420–F480): TRANSITION */}
      <Sequence from={420} durationInFrames={60}>
        <StudyH />
      </Sequence>
    </AbsoluteFill>
  );
};
