import React from "react";
import { AbsoluteFill, Sequence, useCurrentFrame, interpolate } from "remotion";
import { ChalkboardBackground, ChalkFilters } from "../lib/chalk";
import { theme, fonts } from "../lib/theme";
import { EASE, tween, pop, fadeIn } from "../lib/anim";
import { recedeOut, riseIn } from "../lib/motion";
import { SceneEdgeTitle } from "./SceneEdgeTitle";
import { SceneLabelStrip } from "./SceneLabelStrip";
import { RoughLine } from "./RoughLine";
import { RoughCurve } from "./RoughCurve";
import { BezierFlight } from "./BezierFlight";
import { SvgMorph } from "./SvgMorph";
import { interpolatePath } from "@remotion/paths";

// =============================================================================
// REUSABLE PROOF BADGE (Morph Contract Display)
// =============================================================================
const ProofBadge: React.FC<{
  identity: string;
  cardinality: string;
  transClass: string;
  accentColor?: string;
}> = ({ identity, cardinality, transClass, accentColor = theme.cyan }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 140,
        right: 54,
        background: "rgba(10, 26, 18, 0.88)",
        border: `1.5px solid ${accentColor}`,
        borderRadius: 8,
        padding: "10px 18px",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        fontFamily: fonts.mono,
        fontSize: 13,
        letterSpacing: "0.5px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
        zIndex: 50,
      }}
    >
      <div>
        <span style={{ color: theme.chalkDim }}>IDENTITY: </span>
        <span style={{ color: theme.chalkText, fontWeight: 700 }}>{identity}</span>
      </div>
      <div>
        <span style={{ color: theme.chalkDim }}>CARDINALITY: </span>
        <span style={{ color: theme.chalkText, fontWeight: 700 }}>{cardinality}</span>
      </div>
      <div>
        <span style={{ color: theme.chalkDim }}>CLASS: </span>
        <span style={{ color: accentColor, fontWeight: 800 }}>{transClass}</span>
      </div>
    </div>
  );
};

// =============================================================================
// STUDY A: MOVE, NOT MORPH (T1 MOVE / RELAYOUT)
// =============================================================================
const StudyA: React.FC = () => {
  const frame = useCurrentFrame();

  // F0–F14: Sits in slot [0]
  // F15–F38: Moves via eased flight to slot [2]
  // F38–F60: Settle hold
  const startX = 720;
  const endX = 1200;
  const moveT = tween(frame, 15, 23, 0, 1);
  const cardX = interpolate(moveT, [0, 1], [startX, endX]);
  // Slight parabolic lift during movement
  const cardY = 500 - Math.sin(moveT * Math.PI) * 45;
  const isMoving = frame >= 15 && frame < 38;
  const isSettled = frame >= 38;

  return (
    <AbsoluteFill>
      <SceneEdgeTitle
        category="FOUNDATION V2 · MORPH GRAMMAR PROOF · STUDY A"
        title="MOVE, NOT MORPH: Same Entity, New Position"
        subtitle="Array element relocates across slots without shape deformation · Rigid card identity preserved"
        accentColor={theme.pivot}
      />
      <SceneLabelStrip label="STUDY A" step="MOVE" accentColor="pivot" position="top-right" startFrame={2} />
      <ProofBadge
        identity="SAME (Relocates)"
        cardinality="1→1"
        transClass="T1 MOVE / RELAYOUT"
        accentColor={theme.pivot}
      />

      {/* Fixed Array Slots */}
      {[0, 1, 2].map((idx) => {
        const slotX = 720 + idx * 240;
        return (
          <React.Fragment key={idx}>
            <div
              style={{
                position: "absolute",
                left: slotX,
                top: 500,
                transform: "translate(-50%, -50%)",
                width: 140,
                height: 140,
                borderRadius: 12,
                border: `2px dashed ${theme.chalkDim}`,
                background: "rgba(0, 0, 0, 0.2)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: slotX,
                top: 590,
                transform: "translateX(-50%)",
                fontFamily: fonts.mono,
                fontSize: 16,
                color: theme.chalkDim,
              }}
            >
              slot [{idx}]
            </div>
          </React.Fragment>
        );
      })}

      {/* Stationary elements in slot [1] */}
      <div
        style={{
          position: "absolute",
          left: 960,
          top: 500,
          transform: "translate(-50%, -50%)",
          width: 124,
          height: 124,
          borderRadius: 10,
          border: `2px solid ${theme.chalkDim}`,
          background: "rgba(0, 0, 0, 0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: fonts.code,
          fontSize: 44,
          color: theme.chalkDim,
        }}
      >
        3
      </div>

      {/* Mobile Card '7' */}
      <div
        style={{
          position: "absolute",
          left: cardX,
          top: cardY,
          transform: `translate(-50%, -50%) scale(${isMoving ? 1.06 : 1})`,
          width: 124,
          height: 124,
          borderRadius: 10,
          border: `2.5px solid ${isSettled ? theme.good : theme.pivot}`,
          background: isSettled ? "rgba(60, 229, 167, 0.12)" : "rgba(255, 209, 102, 0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: fonts.code,
          fontSize: 48,
          fontWeight: 700,
          color: isSettled ? theme.good : theme.pivot,
          boxShadow: isMoving ? "0 12px 28px rgba(0,0,0,0.5)" : "none",
        }}
      >
        7
      </div>

      {/* Bottom Proof Tag */}
      <div
        style={{
          position: "absolute",
          top: 670,
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <div style={{ fontFamily: fonts.sans, fontSize: 22, fontWeight: 700, color: theme.pivot, marginBottom: 6 }}>
          SAME ENTITY · NEW POSITION
        </div>
        <div style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.chalkDim }}>
          [No shape morph · Entity preserves rigid visual identity across spatial relocation]
        </div>
      </div>
    </AbsoluteFill>
  );
};

// =============================================================================
// STUDY B: CLONE / PROJECT (T5 CLONE / PROJECT)
// =============================================================================
const StudyB: React.FC = () => {
  const frame = useCurrentFrame();

  // F0–F12: Card 4 at slot [0]
  // F12–F36: Echo clone flies via BezierFlight to HashSet field
  // F36–F60: Lands in set, settles
  const cloneStart = 12;
  const cloneDur = 24;
  const cloneLanded = frame >= cloneStart + cloneDur;

  return (
    <AbsoluteFill>
      <SceneEdgeTitle
        category="FOUNDATION V2 · MORPH GRAMMAR PROOF · STUDY B"
        title="CLONE / PROJECT: Source Remains Logically Present"
        subtitle="Input array element projects an echo into HashSet · Original card is never consumed"
        accentColor={theme.cyan}
      />
      <SceneLabelStrip label="STUDY B" step="CLONE" accentColor="cyan" position="top-right" startFrame={2} />
      <ProofBadge
        identity="COPY (Source persists)"
        cardinality="1→1"
        transClass="T5 CLONE / PROJECT"
        accentColor={theme.cyan}
      />

      {/* Source Array Container */}
      <div
        style={{
          position: "absolute",
          left: 640,
          top: 480,
          transform: "translate(-50%, -50%)",
          width: 160,
          height: 180,
          borderRadius: 12,
          border: `2px solid ${theme.chalkDim}`,
          background: "rgba(0, 0, 0, 0.25)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.chalkDim, marginBottom: 8 }}>
          nums[0] (Source)
        </span>
        {/* Source card 4 — ALWAYS PRESENT & UNMODIFIED */}
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: 8,
            border: `2px solid ${theme.cyan}`,
            background: "rgba(78, 205, 196, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: fonts.code,
            fontSize: 44,
            fontWeight: 700,
            color: theme.cyan,
          }}
        >
          4
        </div>
      </div>

      {/* Flight Arc from Source to HashSet */}
      {frame >= cloneStart && !cloneLanded && (
        <BezierFlight
          from={{ x: 640, y: 480 }}
          to={{ x: 1260, y: 480 }}
          peak={90}
          start={cloneStart}
          dur={cloneDur}
          trail={theme.cyan}
        >
          <div
            style={{
              width: 90,
              height: 90,
              borderRadius: 8,
              border: `2px solid ${theme.cyan}`,
              background: "rgba(78, 205, 196, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: fonts.code,
              fontSize: 38,
              fontWeight: 700,
              color: theme.cyan,
              boxShadow: "0 8px 24px rgba(78, 205, 196, 0.4)",
            }}
          >
            4
          </div>
        </BezierFlight>
      )}

      {/* Target HashSet Container */}
      <div
        style={{
          position: "absolute",
          left: 1260,
          top: 480,
          transform: "translate(-50%, -50%)",
          width: 260,
          height: 200,
          borderRadius: 16,
          border: `2px dashed ${cloneLanded ? theme.good : theme.chalkDim}`,
          background: cloneLanded ? "rgba(60, 229, 167, 0.08)" : "rgba(0, 0, 0, 0.2)",
          padding: 16,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkDim, marginBottom: 16 }}>
          HashSet: seen
        </span>
        <div style={{ display: "flex", gap: 12 }}>
          {/* Stored member 4 appears on landing */}
          {cloneLanded && (
            <div
              style={{
                width: 90,
                height: 90,
                borderRadius: 8,
                border: `2px solid ${theme.good}`,
                background: "rgba(60, 229, 167, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: fonts.code,
                fontSize: 40,
                fontWeight: 700,
                color: theme.good,
                transform: `scale(${pop(frame, cloneStart + cloneDur, 8, 1.08)})`,
              }}
            >
              4
            </div>
          )}
        </div>
      </div>

      {/* Bottom Proof Tag */}
      <div
        style={{
          position: "absolute",
          top: 670,
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <div style={{ fontFamily: fonts.sans, fontSize: 22, fontWeight: 700, color: theme.cyan, marginBottom: 6 }}>
          SOURCE PERSISTS
        </div>
        <div style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.chalkDim }}>
          [Source card never leaves array · Set receives projected copy · Never consume source]
        </div>
      </div>
    </AbsoluteFill>
  );
};

// =============================================================================
// STUDY C: TRUE PATH MORPH (T3 TRUE_PATH_MORPH)
// =============================================================================
const StudyC: React.FC = () => {
  const frame = useCurrentFrame();

  // Mathematical path definition:
  // Upper curve (over obstacle): peak at y=340
  // Lower curve (under obstacle): trough at y=700
  // Endpoints pinned at (600, 520) and (1320, 520)
  const fromPath = "M 600 520 C 780 200, 1140 200, 1320 520";
  const toPath = "M 600 520 C 780 360, 1140 360, 1320 520";
  const morphStart = 15;
  const morphDur = 30;

  // Track progress for HUD display
  const rawProgress = interpolate(frame, [morphStart, morphStart + morphDur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  return (
    <AbsoluteFill>
      <SceneEdgeTitle
        category="FOUNDATION V2 · MORPH GRAMMAR PROOF · STUDY C"
        title="TRUE PATH MORPH: Persistent Relation in Same Route Class"
        subtitle="Upper deep arc relaxes to upper shallow arc · All intermediate geometry strictly avoids barrier"
        accentColor={theme.good}
      />
      <SceneLabelStrip label="STUDY C" step="TRUE MORPH" accentColor="good" position="top-right" startFrame={2} />
      <ProofBadge
        identity="SAME (Persistent relation)"
        cardinality="1→1 (Same route class)"
        transClass="T3 TRUE_PATH_MORPH"
        accentColor={theme.good}
      />

      {/* Pinned Start Node */}
      <div
        style={{
          position: "absolute",
          left: 600,
          top: 520,
          transform: "translate(-50%, -50%)",
          width: 80,
          height: 80,
          borderRadius: "50%",
          border: `3px solid ${theme.good}`,
          background: "rgba(10, 26, 18, 0.9)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.good }}>A</span>
        <span style={{ fontFamily: fonts.mono, fontSize: 10, color: theme.chalkDim }}>(600,520)</span>
      </div>

      {/* Central Fixed Obstacle / Forbidden Region */}
      <div
        style={{
          position: "absolute",
          left: 960,
          top: 520,
          transform: "translate(-50%, -50%)",
          width: 160,
          height: 100,
          borderRadius: 8,
          border: `2px dashed ${theme.warn}`,
          background: "rgba(255, 118, 117, 0.12)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 5,
        }}
      >
        <span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: theme.warn }}>FORBIDDEN REGION</span>
        <span style={{ fontFamily: fonts.sans, fontSize: 14, fontWeight: 600, color: theme.chalkText }}>State Barrier</span>
        <span style={{ fontFamily: fonts.mono, fontSize: 10, color: theme.chalkDim }}>y: [470, 570]</span>
      </div>

      {/* Pinned End Node */}
      <div
        style={{
          position: "absolute",
          left: 1320,
          top: 520,
          transform: "translate(-50%, -50%)",
          width: 80,
          height: 80,
          borderRadius: "50%",
          border: `3px solid ${theme.good}`,
          background: "rgba(10, 26, 18, 0.9)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.good }}>B</span>
        <span style={{ fontFamily: fonts.mono, fontSize: 10, color: theme.chalkDim }}>(1320,520)</span>
      </div>

      {/* Low-Level SvgMorph Component Rendering The True Path Morph */}
      <div style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 1080, pointerEvents: "none" }}>
        <SvgMorph
          fromPath={fromPath}
          toPath={toPath}
          startFrame={morphStart}
          durationInFrames={morphDur}
          stroke={theme.good}
          strokeWidth={4}
          width={1920}
          height={1080}
        />
      </div>

      {/* Negative Law Callout Card (Explaining why Upper -> Lower was rejected) */}
      <div
        style={{
          position: "absolute",
          top: 610,
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(255, 118, 117, 0.08)",
          border: `1.5px solid ${theme.warn}`,
          borderRadius: 10,
          padding: "10px 24px",
          textAlign: "center",
          maxWidth: 900,
        }}
      >
        <div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: theme.warn, marginBottom: 4 }}>
          NEGATIVE LAW: Upper Route → Lower Route Around Fixed Obstacle is NOT T3
        </div>
        <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText }}>
          Topology class changes and linear interpolation bisects the forbidden region at 50%.
          Must use <strong style={{ color: theme.warn }}>T4 ERASE OLD / DRAW NEW</strong> or explicit reroute handoff.
        </div>
      </div>

      {/* Bottom Proof Tag & HUD */}
      <div
        style={{
          position: "absolute",
          top: 730,
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <div style={{ fontFamily: fonts.sans, fontSize: 20, fontWeight: 700, color: theme.good, marginBottom: 4 }}>
          SAME TOPOLOGY CLASS · INTERMEDIATE GEOMETRY VALID
        </div>
        <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkDim, marginBottom: 4 }}>
          [Endpoints fixed (600,520) → (1320,520) · Min clearance &gt; 65px above barrier top (y=470) · Zero crossing]
        </div>
        <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.good }}>
          Progress: {(rawProgress * 100).toFixed(0)}% · [Upper Deep Arc (yc:200) → Upper Shallow Arc (yc:360)]
        </div>
      </div>
    </AbsoluteFill>
  );
};

// =============================================================================
// STUDY D: ERASE OLD / DRAW NEW (T4 DRAW_NEW / ERASE_OLD)
// =============================================================================
const StudyD: React.FC = () => {
  const frame = useCurrentFrame();

  // F0–F18: Direct edge A→B visible
  // F18–F30: Node X inserts, edge A→B erases (opacity 1→0)
  // F30–F48: Two distinct edges A→X and X→B draw in via RoughLine
  // F48–F60: Settle
  const eraseOpacity = interpolate(frame, [18, 28], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const nodeXReveal = frame >= 22;
  const drawNew = frame >= 30;

  return (
    <AbsoluteFill>
      <SceneEdgeTitle
        category="FOUNDATION V2 · MORPH GRAMMAR PROOF · STUDY D"
        title="ERASE OLD / DRAW NEW: Cardinality Change Replaces Relations"
        subtitle="Linked edge A→B replaced by inserting node X · 1 old edge does NOT morph into 2 new edges"
        accentColor={theme.warn}
      />
      <SceneLabelStrip label="STUDY D" step="ERASE/DRAW" accentColor="warn" position="top-right" startFrame={2} />
      <ProofBadge
        identity="REPLACED (Old ends, new begin)"
        cardinality="1 old → 2 new"
        transClass="T4 DRAW_NEW / ERASE_OLD"
        accentColor={theme.warn}
      />

      {/* Node A */}
      <div
        style={{
          position: "absolute",
          left: 620,
          top: 500,
          transform: "translate(-50%, -50%)",
          width: 90,
          height: 90,
          borderRadius: 10,
          border: `2px solid ${theme.chalkText}`,
          background: "rgba(0,0,0,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: fonts.code,
          fontSize: 36,
          color: theme.chalkText,
          zIndex: 10,
        }}
      >
        A
      </div>

      {/* Old Edge A → B (Fades / erases, NEVER morphs into two edges!) */}
      {eraseOpacity > 0 && (
        <div style={{ opacity: eraseOpacity, transition: "none" }}>
          <RoughLine
            shape={{ kind: "arrow", x1: 665, y1: 500, x2: 1255, y2: 500 }}
            width={1920}
            height={1080}
            stroke={theme.warn}
            strokeWidth={3}
            seed={41}
          />
          <div
            style={{
              position: "absolute",
              left: 960,
              top: 460,
              transform: "translateX(-50%)",
              fontFamily: fonts.mono,
              fontSize: 13,
              color: theme.warn,
            }}
          >
            Old Edge: A → B
          </div>
        </div>
      )}

      {/* Inserted Node X */}
      {nodeXReveal && (
        <div
          style={{
            position: "absolute",
            left: 960,
            top: 500,
            transform: `translate(-50%, -50%) scale(${pop(frame, 22, 10, 1.1)})`,
            width: 90,
            height: 90,
            borderRadius: 10,
            border: `2px solid ${theme.cyan}`,
            background: "rgba(78, 205, 196, 0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: fonts.code,
            fontSize: 36,
            fontWeight: 700,
            color: theme.cyan,
            zIndex: 10,
          }}
        >
          X
        </div>
      )}

      {/* New Edges: A → X and X → B (Drawn distinctly!) */}
      {drawNew && (
        <>
          <RoughLine
            shape={{ kind: "arrow", x1: 665, y1: 500, x2: 915, y2: 500 }}
            width={1920}
            height={1080}
            startFrame={30}
            durationInFrames={16}
            stroke={theme.good}
            strokeWidth={3}
            seed={44}
          />
          <RoughLine
            shape={{ kind: "arrow", x1: 1005, y1: 500, x2: 1255, y2: 500 }}
            width={1920}
            height={1080}
            startFrame={32}
            durationInFrames={16}
            stroke={theme.good}
            strokeWidth={3}
            seed={46}
          />
        </>
      )}

      {/* Node B */}
      <div
        style={{
          position: "absolute",
          left: 1300,
          top: 500,
          transform: "translate(-50%, -50%)",
          width: 90,
          height: 90,
          borderRadius: 10,
          border: `2px solid ${theme.chalkText}`,
          background: "rgba(0,0,0,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: fonts.code,
          fontSize: 36,
          color: theme.chalkText,
          zIndex: 10,
        }}
      >
        B
      </div>

      {/* Bottom Proof Tag */}
      <div
        style={{
          position: "absolute",
          top: 670,
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <div style={{ fontFamily: fonts.sans, fontSize: 22, fontWeight: 700, color: theme.warn, marginBottom: 6 }}>
          DIFFERENT RELATIONS · ERASE + DRAW
        </div>
        <div style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.chalkDim }}>
          [Do not morph 1 old edge into 2 new edges · Cardinality change requires distinct draw/erase]
        </div>
      </div>
    </AbsoluteFill>
  );
};

// =============================================================================
// STUDY E: DUPLICATE SET INSERT (T5 CLONE + REJECT)
// =============================================================================
const StudyE: React.FC = () => {
  const frame = useCurrentFrame();

  // F0–F16: Incoming echo enters from left
  // F16–F26: Reaches HashSet portal; check compares against existing member '2'
  // F26–F38: Resolve ALREADY EXISTS banner
  // F38–F55: Incoming echo retracts and dissipates (scale down, fade out).
  // Existing member '2' NEVER fuses or mutates!
  const echoX = interpolate(frame, [0, 16], [640, 1020], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });
  const checkResolved = frame >= 26;
  const dissipateT = tween(frame, 38, 16, 0, 1);
  const echoOpacity = interpolate(dissipateT, [0, 1], [1, 0]);
  const echoScale = interpolate(dissipateT, [0, 1], [1, 0.6]);

  return (
    <AbsoluteFill>
      <SceneEdgeTitle
        category="FOUNDATION V2 · MORPH GRAMMAR PROOF · STUDY E"
        title="DUPLICATE SET INSERT: Duplicate Dissipates Without Fusing"
        subtitle="Candidate duplicate checks membership · Resolves ALREADY EXISTS · Stored identity never mutates"
        accentColor={theme.warn}
      />
      <SceneLabelStrip label="STUDY E" step="REJECT" accentColor="warn" position="top-right" startFrame={2} />
      <ProofBadge
        identity="DERIVED CHECK (Duplicate rejected)"
        cardinality="1 echo → existing"
        transClass="T5 CLONE + REJECT"
        accentColor={theme.warn}
      />

      {/* Target HashSet Container */}
      <div
        style={{
          position: "absolute",
          left: 1140,
          top: 480,
          transform: "translate(-50%, -50%)",
          width: 300,
          height: 200,
          borderRadius: 16,
          border: `2px solid ${checkResolved ? theme.warn : theme.chalkDim}`,
          background: checkResolved ? "rgba(255, 118, 117, 0.08)" : "rgba(0,0,0,0.25)",
          padding: 16,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkDim, marginBottom: 16 }}>
          HashSet: seen
        </span>

        {/* Existing member '2' — STAYS 100% STABLE, UNCHANGED */}
        <div
          style={{
            width: 90,
            height: 90,
            borderRadius: 8,
            border: `2.5px solid ${theme.chalkText}`,
            background: "rgba(255, 255, 255, 0.05)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: fonts.code,
            fontSize: 44,
            fontWeight: 700,
            color: theme.chalkText,
          }}
        >
          2
        </div>
      </div>

      {/* Incoming Duplicate Echo '2' */}
      {echoOpacity > 0 && (
        <div
          style={{
            position: "absolute",
            left: echoX,
            top: 480,
            transform: `translate(-50%, -50%) scale(${echoScale})`,
            opacity: echoOpacity,
            width: 80,
            height: 80,
            borderRadius: 8,
            border: `2px solid ${checkResolved ? theme.warn : theme.cyan}`,
            background: checkResolved ? "rgba(255, 118, 117, 0.2)" : "rgba(78, 205, 196, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: fonts.code,
            fontSize: 40,
            fontWeight: 700,
            color: checkResolved ? theme.warn : theme.cyan,
            zIndex: 20,
          }}
        >
          2
        </div>
      )}

      {/* Resolution Banner */}
      {checkResolved && (
        <div
          style={{
            position: "absolute",
            top: 360,
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(255, 118, 117, 0.15)",
            border: `1.5px solid ${theme.warn}`,
            borderRadius: 8,
            padding: "8px 24px",
            fontFamily: fonts.mono,
            fontSize: 18,
            fontWeight: 700,
            color: theme.warn,
          }}
        >
          ALREADY EXISTS: 2 ∈ seen · Echo Dissipates
        </div>
      )}

      {/* Bottom Proof Tag */}
      <div
        style={{
          position: "absolute",
          top: 670,
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <div style={{ fontFamily: fonts.sans, fontSize: 22, fontWeight: 700, color: theme.warn, marginBottom: 6 }}>
          MEMBERSHIP UNCHANGED · DUPLICATE REJECTED
        </div>
        <div style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.chalkDim }}>
          [Existing member remains stable · Incoming duplicate dissipates · Identities NEVER fuse]
        </div>
      </div>
    </AbsoluteFill>
  );
};

// =============================================================================
// STUDY F: MERGE 2→1 (T6 MERGE / REDUCE)
// =============================================================================
const StudyF: React.FC = () => {
  const frame = useCurrentFrame();

  // F0–F18: Two overlapping ranges visible separately
  // Range A: [1, 5] (width 320, left 740)
  // Range B: [4, 8] (width 320, left 940)
  // F18–F32: Overlap region [4, 5] highlights (cause)
  // F32–F46: Converge toward center row; explicit union Range [1, 8] (width 520, left 740) reveals
  // F46–F60: Union settles, sources recede
  const overlapActive = frame >= 18;
  const unionForming = frame >= 32;
  const unionSettled = frame >= 46;

  const sourceOpacity = interpolate(frame, [32, 46], [1, 0.2], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <SceneEdgeTitle
        category="FOUNDATION V2 · MORPH GRAMMAR PROOF · STUDY F"
        title="MERGE 2→1: Explicit Union Choreography"
        subtitle="Overlapping ranges converge into single union · Sources remain visible until result forms"
        accentColor={theme.pivot}
      />
      <SceneLabelStrip label="STUDY F" step="MERGE" accentColor="pivot" position="top-right" startFrame={2} />
      <ProofBadge
        identity="MERGED (Union of two inputs)"
        cardinality="2→1"
        transClass="T6 MERGE / REDUCE"
        accentColor={theme.pivot}
      />

      {/* Source Range A: [1, 5] */}
      <div
        style={{
          position: "absolute",
          left: 740,
          top: 410,
          width: 320,
          height: 64,
          borderRadius: 8,
          border: `2px solid ${theme.cyan}`,
          background: "rgba(78, 205, 196, 0.12)",
          opacity: sourceOpacity,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 18px",
          boxSizing: "border-box",
          fontFamily: fonts.code,
          fontSize: 22,
          color: theme.cyan,
        }}
      >
        <span>1</span>
        <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkDim }}>Range A: [1, 5]</span>
        <span>5</span>
      </div>

      {/* Source Range B: [4, 8] */}
      <div
        style={{
          position: "absolute",
          left: 940,
          top: 490,
          width: 320,
          height: 64,
          borderRadius: 8,
          border: `2px solid ${theme.pivot}`,
          background: "rgba(255, 209, 102, 0.12)",
          opacity: sourceOpacity,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 18px",
          boxSizing: "border-box",
          fontFamily: fonts.code,
          fontSize: 22,
          color: theme.pivot,
        }}
      >
        <span>4</span>
        <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkDim }}>Range B: [4, 8]</span>
        <span>8</span>
      </div>

      {/* Overlap Cause Box */}
      {overlapActive && !unionForming && (
        <div
          style={{
            position: "absolute",
            left: 940,
            top: 400,
            width: 120,
            height: 164,
            border: `2px dashed ${theme.warn}`,
            borderRadius: 6,
            background: "rgba(255, 118, 117, 0.08)",
            pointerEvents: "none",
          }}
        />
      )}

      {/* Result Union Range: [1, 8] (Forms distinctly in center row!) */}
      {unionForming && (
        <div
          style={{
            position: "absolute",
            left: 740,
            top: 570,
            width: 520,
            height: 74,
            borderRadius: 10,
            border: `3px solid ${theme.good}`,
            background: "rgba(60, 229, 167, 0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
            boxSizing: "border-box",
            fontFamily: fonts.code,
            fontSize: 28,
            fontWeight: 700,
            color: theme.good,
            transform: `scale(${pop(frame, 32, 10, 1.05)})`,
          }}
        >
          <span>1</span>
          <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkText }}>
            MERGED UNION: [1, 8]
          </span>
          <span>8</span>
        </div>
      )}

      {/* Bottom Proof Tag */}
      <div
        style={{
          position: "absolute",
          top: 670,
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <div style={{ fontFamily: fonts.sans, fontSize: 22, fontWeight: 700, color: theme.pivot, marginBottom: 6 }}>
          TWO SOURCES · ONE EXPLICIT UNION
        </div>
        <div style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.chalkDim }}>
          [Both sources remain readable until union identity forms · No one-path swallow shortcut]
        </div>
      </div>
    </AbsoluteFill>
  );
};

// =============================================================================
// STUDY G: REPRESENTATION HANDOFF (T8 REPRESENTATION_HANDOFF)
// =============================================================================
const StudyG: React.FC = () => {
  const frame = useCurrentFrame();

  // F0–F16: Conceptual trace primitives on left
  // F16–F38: Mappings draw across to code implementation guides on right
  // F38–F60: Code guides stabilize
  const showGuides = frame >= 16;
  const guideOpacity = fadeIn(frame, 16, 16);

  const mappings = [
    { trace: "num - 1 (Predecessor check)", code: "seen.has(x - 1)", y: 390 },
    { trace: "num (Sequence seed check)", code: "current = x", y: 465 },
    { trace: "num + 1 (Forward scan)", code: "while seen.has(curr + 1):", y: 540 },
  ];

  return (
    <AbsoluteFill>
      <SceneEdgeTitle
        category="FOUNDATION V2 · MORPH GRAMMAR PROOF · STUDY G"
        title="REPRESENTATION HANDOFF: Logic Mappings Across Visual Models"
        subtitle="Three conceptual trace primitives map one-to-one into implementation guide lines"
        accentColor={theme.better}
      />
      <SceneLabelStrip label="STUDY G" step="HANDOFF" accentColor="better" position="top-right" startFrame={2} />
      <ProofBadge
        identity="REPRESENTATION (New language)"
        cardinality="3→3 Mappings"
        transClass="T8 REPRESENTATION_HANDOFF"
        accentColor={theme.better}
      />

      {/* Headers */}
      <div
        style={{
          position: "absolute",
          left: 560,
          top: 330,
          transform: "translateX(-50%)",
          fontFamily: fonts.mono,
          fontSize: 16,
          fontWeight: 700,
          color: theme.cyan,
        }}
      >
        ALGORITHM TRACE LOGIC
      </div>

      <div
        style={{
          position: "absolute",
          left: 1360,
          top: 330,
          transform: "translateX(-50%)",
          fontFamily: fonts.mono,
          fontSize: 16,
          fontWeight: 700,
          color: theme.better,
        }}
      >
        IMPLEMENTATION CODE GUIDES
      </div>

      {mappings.map((m, i) => (
        <React.Fragment key={i}>
          {/* Left Concept Block */}
          <div
            style={{
              position: "absolute",
              left: 420,
              top: m.y,
              width: 280,
              height: 52,
              borderRadius: 8,
              border: `1.5px solid ${theme.cyan}`,
              background: "rgba(78, 205, 196, 0.08)",
              display: "flex",
              alignItems: "center",
              padding: "0 16px",
              fontFamily: fonts.code,
              fontSize: 15,
              color: theme.cyan,
            }}
          >
            {m.trace}
          </div>

          {/* Dotted Connecting Guide (1-to-1 Mapping Line) */}
          {showGuides && (
            <div style={{ opacity: guideOpacity }}>
              <RoughLine
                shape={{ kind: "line", x1: 710, y1: m.y + 26, x2: 1210, y2: m.y + 26 }}
                width={1920}
                height={1080}
                startFrame={16 + i * 4}
                durationInFrames={14}
                stroke={theme.chalkDim}
                strokeWidth={2}
                seed={50 + i}
              />
            </div>
          )}

          {/* Right Implementation Guide Line */}
          {showGuides && (
            <div
              style={{
                position: "absolute",
                left: 1220,
                top: m.y,
                width: 280,
                height: 52,
                borderRadius: 8,
                border: `1.5px solid ${theme.better}`,
                background: "rgba(108, 92, 231, 0.12)",
                opacity: guideOpacity,
                display: "flex",
                alignItems: "center",
                padding: "0 16px",
                fontFamily: fonts.code,
                fontSize: 15,
                fontWeight: 700,
                color: theme.chalkText,
              }}
            >
              {m.code}
            </div>
          )}
        </React.Fragment>
      ))}

      {/* Bottom Proof Tag */}
      <div
        style={{
          position: "absolute",
          top: 670,
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <div style={{ fontFamily: fonts.sans, fontSize: 22, fontWeight: 700, color: theme.better, marginBottom: 6 }}>
          CONCEPTUAL TRACE → CODE GUIDES
        </div>
        <div style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.chalkDim }}>
          [Explicit 1-to-1 correspondences · Conceptual logic transfers without liquid deformation]
        </div>
      </div>
    </AbsoluteFill>
  );
};

// =============================================================================
// STUDY H: REPLACE, NOT MORPH (T9 REPLACE / CUT)
// =============================================================================
const StudyH: React.FC = () => {
  const frame = useCurrentFrame();

  // F0–F24: Visual A completes
  // F20–F32: Visual A recedes cleanly via recedeOut
  // F30–F36: Brief calm board hold
  // F34–F56: Visual B reveals cleanly via riseIn
  // F56–F60: Settle
  const showA = frame < 32;
  const showB = frame >= 34;

  const styleA = recedeOut(frame, 20, 12);
  const styleB = riseIn(frame, 34, 16);

  return (
    <AbsoluteFill>
      <SceneEdgeTitle
        category="FOUNDATION V2 · MORPH GRAMMAR PROOF · STUDY H"
        title="REPLACE, NOT MORPH: Unrelated Semantic Scenes"
        subtitle="Problem Invariant card completes and recedes · Optimal Engine reveals · Zero shape morph"
        accentColor={theme.cyan}
      />
      <SceneLabelStrip label="STUDY H" step="REPLACE" accentColor="cyan" position="top-right" startFrame={2} />
      <ProofBadge
        identity="REPLACED (Unrelated scenes)"
        cardinality="1→1 Scene"
        transClass="T9 REPLACE / CUT"
        accentColor={theme.cyan}
      />

      {/* Visual A: Problem Invariant Overview */}
      {showA && (
        <div
          style={{
            position: "absolute",
            left: 960,
            top: 480,
            transform: "translate(-50%, -50%)",
            width: 640,
            height: 180,
            borderRadius: 16,
            border: `2px solid ${theme.warn}`,
            background: "rgba(255, 118, 117, 0.08)",
            padding: "24px 32px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            ...styleA,
          }}
        >
          <div style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.warn, marginBottom: 8 }}>
            PHASE 1 · INVARIANT CONFIRMED
          </div>
          <div style={{ fontFamily: fonts.sans, fontSize: 26, fontWeight: 700, color: theme.chalkText }}>
            Set Membership Guarantees O(1) Checks
          </div>
        </div>
      )}

      {/* Visual B: Optimal Execution Engine */}
      {showB && (
        <div
          style={{
            position: "absolute",
            left: 960,
            top: 480,
            transform: "translate(-50%, -50%)",
            width: 640,
            height: 180,
            borderRadius: 16,
            border: `2px solid ${theme.good}`,
            background: "rgba(60, 229, 167, 0.08)",
            padding: "24px 32px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            ...styleB,
          }}
        >
          <div style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.good, marginBottom: 8 }}>
            PHASE 2 · OPTIMAL EXECUTION ENGINE
          </div>
          <div style={{ fontFamily: fonts.sans, fontSize: 26, fontWeight: 700, color: theme.chalkText }}>
            Two-Pass Linear Scan Over Sequence Starts
          </div>
        </div>
      )}

      {/* Bottom Proof Tag */}
      <div
        style={{
          position: "absolute",
          top: 670,
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <div style={{ fontFamily: fonts.sans, fontSize: 22, fontWeight: 700, color: theme.cyan, marginBottom: 6 }}>
          UNRELATED OBJECTS · RECEDE + REVEAL
        </div>
        <div style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.chalkDim }}>
          [No liquid morph between unrelated concepts · Clean scene transition preserves comprehension]
        </div>
      </div>
    </AbsoluteFill>
  );
};

// =============================================================================
// MAIN COMPOSITION: MorphGrammarProof (Foundation V2 Phase 5)
// =============================================================================
export const MorphGrammarProof: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: theme.boardBg }}>
      <ChalkboardBackground />
      <ChalkFilters />

      {/* Study A (F0–F60): MOVE, NOT MORPH */}
      <Sequence from={0} durationInFrames={60}>
        <StudyA />
      </Sequence>

      {/* Study B (F60–F120): CLONE / PROJECT */}
      <Sequence from={60} durationInFrames={60}>
        <StudyB />
      </Sequence>

      {/* Study C (F120–F180): TRUE PATH MORPH */}
      <Sequence from={120} durationInFrames={60}>
        <StudyC />
      </Sequence>

      {/* Study D (F180–F240): ERASE OLD / DRAW NEW */}
      <Sequence from={180} durationInFrames={60}>
        <StudyD />
      </Sequence>

      {/* Study E (F240–F300): DUPLICATE SET INSERT */}
      <Sequence from={240} durationInFrames={60}>
        <StudyE />
      </Sequence>

      {/* Study F (F300–F360): MERGE 2→1 */}
      <Sequence from={300} durationInFrames={60}>
        <StudyF />
      </Sequence>

      {/* Study G (F360–F420): REPRESENTATION HANDOFF */}
      <Sequence from={360} durationInFrames={60}>
        <StudyG />
      </Sequence>

      {/* Study H (F420–F480): REPLACE, NOT MORPH */}
      <Sequence from={420} durationInFrames={60}>
        <StudyH />
      </Sequence>
    </AbsoluteFill>
  );
};

// =============================================================================
// COMPANION PROOF: StudyCCheckpoints (5 frames: 0%, 25%, 50%, 75%, 100%)
// =============================================================================
export const StudyCCheckpoints: React.FC = () => {
  const frame = useCurrentFrame();
  const checkpoints = [0, 0.25, 0.5, 0.75, 1.0];
  const progress = checkpoints[Math.min(frame, checkpoints.length - 1)];
  const fromPath = "M 600 520 C 780 200, 1140 200, 1320 520";
  const toPath = "M 600 520 C 780 360, 1140 360, 1320 520";
  const morphed = interpolatePath(progress, fromPath, toPath);

  // Clearance calculation
  const yc = 200 * (1 - progress) + 360 * progress;
  const apexY = 130 + 0.75 * yc;
  const clearance = 470 - apexY;

  return (
    <AbsoluteFill style={{ backgroundColor: theme.boardBg }}>
      <ChalkboardBackground />
      <ChalkFilters />

      <SceneEdgeTitle
        category="FOUNDATION V2 · PHASE 5 · STUDY C PROGRESS CHECKPOINT"
        title={`STUDY C CHECKPOINT: ${(progress * 100).toFixed(0)}% Path Morph State`}
        subtitle="Verifying endpoint stability (600,520) → (1320,520), same route class, zero obstacle collision"
        accentColor={theme.good}
      />
      <SceneLabelStrip label="STUDY C" step={`CHECKPOINT ${(progress * 100).toFixed(0)}%`} accentColor="good" position="top-right" />

      {/* Node A */}
      <div
        style={{
          position: "absolute",
          left: 600,
          top: 520,
          transform: "translate(-50%, -50%)",
          width: 80,
          height: 80,
          borderRadius: "50%",
          border: `3px solid ${theme.good}`,
          background: "rgba(10, 26, 18, 0.9)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.good }}>A</span>
        <span style={{ fontFamily: fonts.mono, fontSize: 10, color: theme.chalkDim }}>(600,520)</span>
      </div>

      {/* Central Fixed Obstacle / Forbidden Region */}
      <div
        style={{
          position: "absolute",
          left: 960,
          top: 520,
          transform: "translate(-50%, -50%)",
          width: 160,
          height: 100,
          borderRadius: 8,
          border: `2px dashed ${theme.warn}`,
          background: "rgba(255, 118, 117, 0.12)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 5,
        }}
      >
        <span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: theme.warn }}>FORBIDDEN REGION</span>
        <span style={{ fontFamily: fonts.sans, fontSize: 14, fontWeight: 600, color: theme.chalkText }}>State Barrier</span>
        <span style={{ fontFamily: fonts.mono, fontSize: 10, color: theme.chalkDim }}>y: [470, 570]</span>
      </div>

      {/* Node B */}
      <div
        style={{
          position: "absolute",
          left: 1320,
          top: 520,
          transform: "translate(-50%, -50%)",
          width: 80,
          height: 80,
          borderRadius: "50%",
          border: `3px solid ${theme.good}`,
          background: "rgba(10, 26, 18, 0.9)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.good }}>B</span>
        <span style={{ fontFamily: fonts.mono, fontSize: 10, color: theme.chalkDim }}>(1320,520)</span>
      </div>

      {/* SVG Path */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
        <path
          d={morphed}
          stroke={theme.good}
          strokeWidth={4}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Negative Law Callout Card */}
      <div
        style={{
          position: "absolute",
          top: 610,
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(255, 118, 117, 0.08)",
          border: `1.5px solid ${theme.warn}`,
          borderRadius: 10,
          padding: "8px 24px",
          textAlign: "center",
          maxWidth: 880,
        }}
      >
        <div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: theme.warn }}>
          NEGATIVE LAW: Upper Route → Lower Route Across Fixed Obstacle is INVALID for T3
        </div>
        <div style={{ fontFamily: fonts.sans, fontSize: 12, color: theme.chalkText }}>
          Topology class changes and linear interpolation bisects the forbidden region at 50%.
          Must use <strong style={{ color: theme.warn }}>T4 ERASE OLD / DRAW NEW</strong> or explicit reroute handoff.
        </div>
      </div>

      {/* Info Card */}
      <div
        style={{
          position: "absolute",
          top: 710,
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          background: "rgba(10, 26, 18, 0.9)",
          border: `1.5px solid ${theme.good}`,
          borderRadius: 12,
          padding: "14px 28px",
        }}
      >
        <div style={{ fontFamily: fonts.sans, fontSize: 22, fontWeight: 700, color: theme.good, marginBottom: 6 }}>
          CHECKPOINT PROGRESS: {(progress * 100).toFixed(0)}% · CLEARANCE: {clearance.toFixed(1)}px
        </div>
        <div style={{ fontFamily: fonts.code, fontSize: 14, color: theme.chalkText, marginBottom: 6 }}>
          d=&quot;{morphed}&quot;
        </div>
        <div style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.chalkDim }}>
          [Endpoints fixed (600,520) → (1320,520) · Control points y: 200 → 360 · All points stay above barrier top (y=470)]
        </div>
      </div>
    </AbsoluteFill>
  );
};

