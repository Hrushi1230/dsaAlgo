import React, { useMemo } from "react";
import { AbsoluteFill, Sequence, useCurrentFrame, interpolate } from "remotion";
import rough from "roughjs";
import { ChalkboardBackground, ChalkFilters, CHALK_FILTER_STRONG_ID } from "../lib/chalk";
import { theme, fonts } from "../lib/theme";
import { tween, fadeIn } from "../lib/anim";
import { recedeOut, riseIn } from "../lib/motion";
import { SceneEdgeTitle } from "./SceneEdgeTitle";
import { SceneLabelStrip } from "./SceneLabelStrip";
import { EvolvingPath } from "./EvolvingPath";
import { PathTracer } from "./PathTracer";
import {
  getExactPathMetrics,
  getPathPointAtProgress,
  getPathTangentAtProgress,
  getDirectionalPath,
  clamp01,
} from "../lib/svgPathV2";

// =============================================================================
// REUSABLE PROOF BADGE (SVG Action Contract Display)
// =============================================================================
const SvgProofBadge: React.FC<{
  action: string;
  svgClass: string;
  metric: string;
  accentColor?: string;
  extra?: { label: string; value: string };
}> = ({ action, svgClass, metric, accentColor = theme.cyan, extra }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 140,
        right: 54,
        background: "rgba(10, 26, 18, 0.9)",
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
        <span style={{ color: theme.chalkDim }}>ACTION: </span>
        <span style={{ color: theme.chalkText, fontWeight: 700 }}>{action}</span>
      </div>
      <div>
        <span style={{ color: theme.chalkDim }}>CLASS: </span>
        <span style={{ color: accentColor, fontWeight: 800 }}>{svgClass}</span>
      </div>
      <div>
        <span style={{ color: theme.chalkDim }}>METRIC: </span>
        <span style={{ color: theme.chalkText, fontWeight: 700 }}>{metric}</span>
      </div>
      {extra && (
        <div>
          <span style={{ color: theme.chalkDim }}>{extra.label}: </span>
          <span style={{ color: accentColor, fontWeight: 700 }}>{extra.value}</span>
        </div>
      )}
    </div>
  );
};

// =============================================================================
// HELPER: Chalk Node Circle
// =============================================================================
const NodeCircle: React.FC<{
  cx: number;
  cy: number;
  label: string;
  sublabel?: string;
  r?: number;
  color?: string;
  active?: boolean;
}> = ({ cx, cy, label, sublabel, r = 42, color = theme.chalkText, active = false }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: cx - r,
        top: cy - r,
        width: r * 2,
        height: r * 2,
        borderRadius: "50%",
        border: `3px solid ${color}`,
        backgroundColor: active ? "rgba(255, 209, 102, 0.16)" : "rgba(10, 26, 18, 0.95)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: fonts.mono,
        zIndex: 20,
        boxShadow: active ? `0 0 20px ${color}44` : "0 4px 12px rgba(0,0,0,0.4)",
        transition: "border-color 0.2s, background-color 0.2s",
      }}
    >
      <span style={{ fontSize: 20, fontWeight: 800, color }}>{label}</span>
      {sublabel && (
        <span style={{ fontSize: 10, color: theme.chalkDim, marginTop: 1 }}>
          {sublabel}
        </span>
      )}
    </div>
  );
};

// =============================================================================
// STUDY A: EXACT DRAW (S1 DRAW_NEW)
// =============================================================================
const StudyA: React.FC = () => {
  const frame = useCurrentFrame();
  const curveD = "M 560 560 C 760 300, 1160 300, 1360 560";
  const metrics = useMemo(() => getExactPathMetrics(curveD), [curveD]);

  // F10–F50: Normalized draw progress 0 -> 1
  const rawProgress = tween(frame, 10, 40, 0, 1);
  const progress = clamp01(rawProgress);

  return (
    <AbsoluteFill>
      <SceneEdgeTitle
        category="FOUNDATION V2 · SVG GRAMMAR PROOF · STUDY A"
        title="EXACT DRAW: Exact Path Length via getLength()"
        subtitle="Curved relation evolves via exact path metrics · No magic length 100 · No guessed bounding box"
        accentColor={theme.pivot}
      />
      <SceneLabelStrip label="STUDY A" step="EXACT DRAW" accentColor="pivot" position="top-right" startFrame={2} />
      <SvgProofBadge
        action="S1 DRAW_NEW"
        svgClass="EXACT DRAW"
        metric={`getLength: ${metrics.length.toFixed(1)}px`}
        accentColor={theme.pivot}
        extra={{ label: "PROGRESS", value: `${(progress * 100).toFixed(0)}%` }}
      />

      <NodeCircle cx={560} cy={560} label="A" sublabel="SRC" color={theme.chalkText} />
      <NodeCircle cx={1360} cy={560} label="B" sublabel="TGT" color={progress >= 0.99 ? theme.good : theme.chalkText} active={progress >= 0.99} />

      <svg width={1920} height={1080} style={{ position: "absolute", top: 0, left: 0, overflow: "visible" }}>
        {/* Faint reference curve */}
        <path d={curveD} stroke="rgba(232, 228, 213, 0.12)" strokeWidth={4} fill="none" strokeDasharray="6 6" />
        {/* Evolving active path */}
        <EvolvingPath
          d={curveD}
          progress={progress}
          stroke={theme.pivot}
          strokeWidth={5}
        />
      </svg>

      {/* Live Telemetry Display */}
      <div
        style={{
          position: "absolute",
          bottom: 120,
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(10, 26, 18, 0.92)",
          border: `1.5px solid ${theme.pivot}`,
          borderRadius: 10,
          padding: "12px 28px",
          textAlign: "center",
          fontFamily: fonts.mono,
          boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
        }}
      >
        <div style={{ fontSize: 18, fontWeight: 700, color: theme.pivot, marginBottom: 4 }}>
          EXACT PATH METRIC: getLength(d) = {metrics.length.toFixed(2)}px
        </div>
        <div style={{ fontSize: 13, color: theme.chalkText }}>
          clamped progress: {progress.toFixed(3)} · dashoffset: {(metrics.length * (1 - progress)).toFixed(1)}px · magic 100 debt: ELIMINATED
        </div>
      </div>
    </AbsoluteFill>
  );
};

// =============================================================================
// STUDY B: DIRECTION / REVERSE (S1 REVERSED)
// =============================================================================
const StudyB: React.FC = () => {
  const frame = useCurrentFrame();
  const authoredD = "M 560 560 C 760 300, 1160 300, 1360 560";
  const metrics = useMemo(() => getExactPathMetrics(authoredD), [authoredD]);

  // Phase 1 (F0–F28): A -> B (forward)
  // Phase 2 (F30–F58): B -> A (reversed via reversePath)
  const isPhase1 = frame < 30;
  const p1 = clamp01(tween(frame, 6, 20, 0, 1));
  const p2 = clamp01(tween(frame, 34, 20, 0, 1));

  return (
    <AbsoluteFill>
      <SceneEdgeTitle
        category="FOUNDATION V2 · SVG GRAMMAR PROOF · STUDY B"
        title="DIRECTION / REVERSE: Explicit Geometry Reversal"
        subtitle="Drawing direction is explicit via reversePath(d) · No negative progress hacks"
        accentColor={theme.accent}
      />
      <SceneLabelStrip label="STUDY B" step="REVERSE" accentColor="accent" position="top-right" startFrame={2} />
      <SvgProofBadge
        action={isPhase1 ? "FORWARD A → B" : "REVERSED B → A"}
        svgClass="DIRECTIONAL"
        metric={`Length: ${metrics.length.toFixed(1)}px`}
        accentColor={theme.accent}
        extra={{ label: "METHOD", value: isPhase1 ? "authored d" : "reversePath(d)" }}
      />

      <NodeCircle cx={560} cy={560} label="A" sublabel={isPhase1 ? "SRC" : "TGT"} color={!isPhase1 && p2 >= 0.99 ? theme.good : theme.chalkText} active={!isPhase1 && p2 >= 0.99} />
      <NodeCircle cx={1360} cy={560} label="B" sublabel={isPhase1 ? "TGT" : "SRC"} color={isPhase1 && p1 >= 0.99 ? theme.good : theme.chalkText} active={isPhase1 && p1 >= 0.99} />

      <svg width={1920} height={1080} style={{ position: "absolute", top: 0, left: 0, overflow: "visible" }}>
        <path d={authoredD} stroke="rgba(232, 228, 213, 0.12)" strokeWidth={4} fill="none" strokeDasharray="6 6" />
        {isPhase1 ? (
          <EvolvingPath
            d={authoredD}
            progress={p1}
            stroke={theme.accent}
            strokeWidth={5}
            direction="forward"
          />
        ) : (
          <EvolvingPath
            d={authoredD}
            progress={p2}
            stroke={theme.good}
            strokeWidth={5}
            direction="reverse"
          />
        )}
      </svg>

      <div
        style={{
          position: "absolute",
          bottom: 120,
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(10, 26, 18, 0.92)",
          border: `1.5px solid ${isPhase1 ? theme.accent : theme.good}`,
          borderRadius: 10,
          padding: "12px 28px",
          textAlign: "center",
          fontFamily: fonts.mono,
        }}
      >
        <div style={{ fontSize: 18, fontWeight: 700, color: isPhase1 ? theme.accent : theme.good, marginBottom: 4 }}>
          {isPhase1 ? "PHASE 1: AUTHORED FORWARD (A → B)" : "PHASE 2: EXPLICIT REVERSE (B → A)"}
        </div>
        <div style={{ fontSize: 13, color: theme.chalkText }}>
          {isPhase1
            ? "Path draws from start (560,560) to end (1360,560)"
            : "reversePath() inverts start/end endpoints; evolvePath runs 0 → 1 forward on reversed d"}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// =============================================================================
// STUDY C: RELATION ARROW (S1 RELATION ARROW)
// =============================================================================
const StudyC: React.FC = () => {
  const frame = useCurrentFrame();
  const shaftD = "M 560 560 C 760 360, 1160 360, 1318 560"; // Stops at target node edge

  // Total duration: F10–F52
  // Shaft draws: F10–F40 (progress 0 -> 1)
  // Arrowhead appears: F40–F52 (strictly AFTER shaft reaches target!)
  const shaftProg = clamp01(tween(frame, 10, 30, 0, 1));
  const headProg = clamp01(tween(frame, 40, 12, 0, 1));
  const hasHead = headProg > 0;

  // Tangent at end of shaft for arrowhead orientation
  const endTangent = useMemo(() => getPathTangentAtProgress(shaftD, 1.0), [shaftD]);

  return (
    <AbsoluteFill>
      <SceneEdgeTitle
        category="FOUNDATION V2 · SVG GRAMMAR PROOF · STUDY C"
        title="RELATION ARROW: Shaft Draws First, Head Lands at Target"
        subtitle="Arrowhead never floats halfway along relation · Emerges strictly after shaft contact"
        accentColor={theme.cyan}
      />
      <SceneLabelStrip label="STUDY C" step="ARROW" accentColor="cyan" position="top-right" startFrame={2} />
      <SvgProofBadge
        action="RELATION ARROW"
        svgClass="S1 SHAFT+HEAD"
        metric={shaftProg < 1 ? "SHAFT DRAWING" : "HEAD ARRIVED"}
        accentColor={theme.cyan}
        extra={{ label: "FLOATING HEAD", value: "STRICTLY FORBIDDEN" }}
      />

      <NodeCircle cx={560} cy={560} label="SRC" color={theme.chalkText} />
      <NodeCircle cx={1360} cy={560} label="TGT" color={headProg >= 0.99 ? theme.good : theme.chalkText} active={headProg >= 0.99} />

      <svg width={1920} height={1080} style={{ position: "absolute", top: 0, left: 0, overflow: "visible" }}>
        {/* Shaft */}
        <EvolvingPath
          d={shaftD}
          progress={shaftProg}
          stroke={theme.cyan}
          strokeWidth={5}
        />

        {/* Arrowhead at target landing (only appears once shaft reaches target) */}
        {hasHead && (
          <g
            transform={`translate(${endTangent.x}, ${endTangent.y}) rotate(${endTangent.angleDeg}) scale(${headProg})`}
            style={{ filter: `url(#${CHALK_FILTER_STRONG_ID})`, transformOrigin: "0 0" }}
          >
            <path
              d="M 0 0 L -22 -12 L -18 0 L -22 12 Z"
              fill={theme.cyan}
              stroke={theme.cyan}
              strokeWidth={2}
            />
          </g>
        )}
      </svg>

      <div
        style={{
          position: "absolute",
          bottom: 120,
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(10, 26, 18, 0.92)",
          border: `1.5px solid ${theme.cyan}`,
          borderRadius: 10,
          padding: "12px 28px",
          textAlign: "center",
          fontFamily: fonts.mono,
        }}
      >
        <div style={{ fontSize: 18, fontWeight: 700, color: theme.cyan, marginBottom: 4 }}>
          {shaftProg < 1 ? "STAGE 1: SHAFT APPROACHING TARGET (HEAD INVISIBLE)" : "STAGE 2: HEAD SETTLING AT TARGET"}
        </div>
        <div style={{ fontSize: 13, color: theme.chalkText }}>
          Shaft Progress: {(shaftProg * 100).toFixed(0)}% · Head Progress: {(headProg * 100).toFixed(0)}% · Arrowhead rendered at endpoint tangent ({endTangent.angleDeg.toFixed(1)}°)
        </div>
      </div>
    </AbsoluteFill>
  );
};

// =============================================================================
// STUDY D: TRACER ARROW (S4 TRACE_PATH)
// =============================================================================
const StudyD: React.FC = () => {
  const frame = useCurrentFrame();
  const routeD = "M 480 620 C 720 280, 1200 860, 1440 520";
  const metrics = useMemo(() => getExactPathMetrics(routeD), [routeD]);

  // F10–F50: Tracer travels 0 -> 1 along stable path
  const progress = clamp01(tween(frame, 10, 40, 0, 1));
  const currentTelemetry = useMemo(
    () => ({
      point: getPathPointAtProgress(routeD, progress),
      tangent: getPathTangentAtProgress(routeD, progress),
    }),
    [routeD, progress]
  );

  return (
    <AbsoluteFill>
      <SceneEdgeTitle
        category="FOUNDATION V2 · SVG GRAMMAR PROOF · STUDY D"
        title="TRACER ARROW: Point + Tangent Following Stable Path"
        subtitle="Path remains fully visible · Probe marker samples getPointAtLength() & getTangentAtLength()"
        accentColor={theme.warn}
      />
      <SceneLabelStrip label="STUDY D" step="TRACER" accentColor="warn" position="top-right" startFrame={2} />
      <SvgProofBadge
        action="S4 TRACE_PATH"
        svgClass="POINT + TANGENT"
        metric={`Len: ${metrics.length.toFixed(1)}px`}
        accentColor={theme.warn}
        extra={{ label: "ANGLE", value: `${currentTelemetry.tangent.angleDeg.toFixed(1)}°` }}
      />

      {/* Stable relation path stays rendered */}
      <svg width={1920} height={1080} style={{ position: "absolute", top: 0, left: 0, overflow: "visible" }}>
        <path
          d={routeD}
          stroke="rgba(232, 228, 213, 0.35)"
          strokeWidth={4}
          fill="none"
          strokeLinecap="round"
        />

        {/* PathTracer dynamically positions and rotates probe marker */}
        <PathTracer d={routeD} progress={progress} rotateWithTangent={true}>
          {/* Directional arrowhead glyph */}
          <g style={{ filter: `url(#${CHALK_FILTER_STRONG_ID})` }}>
            <circle cx={0} cy={0} r={10} fill={theme.warn} />
            <path
              d="M 16 0 L -8 -10 L -2 0 L -8 10 Z"
              fill={theme.warn}
              stroke={theme.warn}
              strokeWidth={2}
            />
          </g>
        </PathTracer>
      </svg>

      <div
        style={{
          position: "absolute",
          bottom: 120,
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(10, 26, 18, 0.92)",
          border: `1.5px solid ${theme.warn}`,
          borderRadius: 10,
          padding: "12px 28px",
          textAlign: "center",
          fontFamily: fonts.mono,
        }}
      >
        <div style={{ fontSize: 18, fontWeight: 700, color: theme.warn, marginBottom: 4 }}>
          PROBE TELEMETRY: X={currentTelemetry.point.x.toFixed(1)}, Y={currentTelemetry.point.y.toFixed(1)} · ANGLE={currentTelemetry.tangent.angleDeg.toFixed(1)}°
        </div>
        <div style={{ fontSize: 13, color: theme.chalkText }}>
          Distance: {(progress * metrics.length).toFixed(1)}px / {metrics.length.toFixed(1)}px · Continuous rotation aligned with exact local derivative
        </div>
      </div>
    </AbsoluteFill>
  );
};

// =============================================================================
// STUDY E: ERASE OLD → DRAW NEW (S2 ERASE_OLD → S1 DRAW_NEW)
// =============================================================================
const StudyE: React.FC = () => {
  const frame = useCurrentFrame();
  const oldPathD = "M 600 560 C 800 360, 960 360, 1100 560"; // A -> B
  const newPathD = "M 600 560 C 850 760, 1150 760, 1400 560"; // A -> C

  // Sequence:
  // F0–F12: Old edge valid
  // F12–F26: Old edge retracts (erase)
  // F26–F34: Invalidation hold ("Edge Obsolete")
  // F34–F52: New edge draws (A -> C)
  // F52–F60: Settle hold
  const eraseProg = clamp01(tween(frame, 12, 14, 0, 1));
  const oldVisible = frame < 26;
  const drawProg = clamp01(tween(frame, 34, 18, 0, 1));
  const isTransitioning = frame >= 26 && frame < 34;

  return (
    <AbsoluteFill>
      <SceneEdgeTitle
        category="FOUNDATION V2 · SVG GRAMMAR PROOF · STUDY E"
        title="ERASE OLD → DRAW NEW: Non-Simultaneous Relation Swap"
        subtitle="Obsolete relation retracts before new edge draws · Never valid simultaneously"
        accentColor={theme.bad}
      />
      <SceneLabelStrip label="STUDY E" step="ERASE/DRAW" accentColor="bad" position="top-right" startFrame={2} />
      <SvgProofBadge
        action={frame < 26 ? "S2 ERASE_OLD" : isTransitioning ? "INVALIDATED" : "S1 DRAW_NEW"}
        svgClass="RETRACT & DRAW"
        metric={frame < 26 ? `Old Retract: ${(eraseProg * 100).toFixed(0)}%` : `New Draw: ${(drawProg * 100).toFixed(0)}%`}
        accentColor={frame < 26 ? theme.bad : theme.good}
        extra={{ label: "MUTUAL EXCLUSION", value: "ENFORCED" }}
      />

      <NodeCircle cx={600} cy={560} label="A" sublabel="SRC" color={theme.chalkText} />
      <NodeCircle cx={1100} cy={560} label="B" sublabel="OLD TGT" color={frame < 26 ? theme.chalkText : "rgba(255, 118, 117, 0.45)"} />
      <NodeCircle cx={1400} cy={560} label="C" sublabel="NEW TGT" color={drawProg >= 0.99 ? theme.good : theme.chalkText} active={drawProg >= 0.99} />

      <svg width={1920} height={1080} style={{ position: "absolute", top: 0, left: 0, overflow: "visible" }}>
        {/* Old edge retracting */}
        {oldVisible && (
          <EvolvingPath
            d={oldPathD}
            progress={1 - eraseProg}
            stroke={theme.bad}
            strokeWidth={4}
          />
        )}

        {/* New edge drawing */}
        {frame >= 34 && (
          <EvolvingPath
            d={newPathD}
            progress={drawProg}
            stroke={theme.good}
            strokeWidth={5}
          />
        )}
      </svg>

      <div
        style={{
          position: "absolute",
          bottom: 120,
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(10, 26, 18, 0.92)",
          border: `1.5px solid ${frame < 26 ? theme.bad : theme.good}`,
          borderRadius: 10,
          padding: "12px 28px",
          textAlign: "center",
          fontFamily: fonts.mono,
        }}
      >
        <div style={{ fontSize: 18, fontWeight: 700, color: frame < 26 ? theme.bad : theme.good, marginBottom: 4 }}>
          {frame < 12
            ? "INITIAL STATE: A → B ACTIVE"
            : frame < 26
            ? "RETRACTING OLD RELATION A → B (1.0 → 0.0)"
            : isTransitioning
            ? "HOLD: REASON ESTABLISHED · ZERO ACTIVE EDGES"
            : "DRAWING NEW RELATION A → C"}
        </div>
        <div style={{ fontSize: 13, color: theme.chalkText }}>
          {frame < 26
            ? "Old edge retracts toward source before any new edge can be introduced"
            : isTransitioning
            ? "Comprehension pause: prevents misleading simultaneous validity"
            : "New relation establishes with green affirmation state"}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// =============================================================================
// STUDY F: DASHED SEMANTIC PATH (S1 + MASK)
// =============================================================================
const StudyF: React.FC = () => {
  const frame = useCurrentFrame();
  const curveD = "M 520 540 C 760 300, 1160 780, 1400 540";
  const metrics = useMemo(() => getExactPathMetrics(curveD), [curveD]);

  // F10–F50: Reveal progress 0 -> 1 via mask
  const progress = clamp01(tween(frame, 10, 40, 0, 1));
  const maskId = "study-f-dash-reveal-mask";

  return (
    <AbsoluteFill>
      <SceneEdgeTitle
        category="FOUNDATION V2 · SVG GRAMMAR PROOF · STUDY F"
        title="DASHED SEMANTIC PATH: Revealing via SVG Mask"
        subtitle="Semantic dash pattern (16 10) survives reveal · evolvePath drives mask, not visible dashes"
        accentColor={theme.cyan}
      />
      <SceneLabelStrip label="STUDY F" step="DASH MASK" accentColor="cyan" position="top-right" startFrame={2} />
      <SvgProofBadge
        action="DASHED REVEAL"
        svgClass="S1 + SVG MASK"
        metric="DASH: 16 10 PRESERVED"
        accentColor={theme.cyan}
        extra={{ label: "REVEAL", value: `${(progress * 100).toFixed(0)}%` }}
      />

      <NodeCircle cx={520} cy={540} label="A" sublabel="SRC" color={theme.chalkText} />
      <NodeCircle cx={1400} cy={540} label="B" sublabel="TGT" color={progress >= 0.99 ? theme.good : theme.chalkText} active={progress >= 0.99} />

      <svg width={1920} height={1080} style={{ position: "absolute", top: 0, left: 0, overflow: "visible" }}>
        <defs>
          {/* Mask contains evolving solid white path */}
          <mask id={maskId}>
            <EvolvingPath
              d={curveD}
              progress={progress}
              stroke="#FFFFFF"
              strokeWidth={16} // Extra wide stroke so entire visible path is uncovered
              linecap="round"
            />
          </mask>
        </defs>

        {/* Underlay ghost path */}
        <path d={curveD} stroke="rgba(232, 228, 213, 0.12)" strokeWidth={4} fill="none" strokeDasharray="16 10" />

        {/* Visible semantically dashed path, clipped by evolving mask */}
        <path
          d={curveD}
          stroke={theme.cyan}
          strokeWidth={5}
          fill="none"
          strokeDasharray="16 10"
          strokeLinecap="round"
          mask={`url(#${maskId})`}
        />
      </svg>

      <div
        style={{
          position: "absolute",
          bottom: 120,
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(10, 26, 18, 0.92)",
          border: `1.5px solid ${theme.cyan}`,
          borderRadius: 10,
          padding: "12px 28px",
          textAlign: "center",
          fontFamily: fonts.mono,
        }}
      >
        <div style={{ fontSize: 18, fontWeight: 700, color: theme.cyan, marginBottom: 4 }}>
          SEMANTIC DASH INTEGRITY: strokeDasharray=&quot;16 10&quot; UNTOUCHED
        </div>
        <div style={{ fontSize: 13, color: theme.chalkText }}>
          Dashes remain crisp and authentic at 0%, 50%, and 100% · Mask evolution separates reveal timing from styling
        </div>
      </div>
    </AbsoluteFill>
  );
};

// =============================================================================
// STUDY G: COMPOUND SEQUENCE (S7 COMPOUND_SEQUENCE)
// =============================================================================
const StudyG: React.FC = () => {
  const frame = useCurrentFrame();

  // Multi-stroke object: Code / Annotation Bracket with 3 distinct strokes
  // Stroke 1: Vertical Spine (F10–F24)
  // Stroke 2: Top Cap (F24–F34)
  // Stroke 3: Bottom Cap (F34–F44)
  // Stroke 4: Center Pointer Tick (F44–F54)
  const dSpine = "M 880 380 L 880 660";
  const dTop = "M 880 380 L 930 380";
  const dBottom = "M 880 660 L 930 660";
  const dTick = "M 880 520 L 840 520";

  const p1 = clamp01(tween(frame, 10, 14, 0, 1));
  const p2 = clamp01(tween(frame, 24, 10, 0, 1));
  const p3 = clamp01(tween(frame, 34, 10, 0, 1));
  const p4 = clamp01(tween(frame, 44, 10, 0, 1));

  return (
    <AbsoluteFill>
      <SceneEdgeTitle
        category="FOUNDATION V2 · SVG GRAMMAR PROOF · STUDY G"
        title="COMPOUND SEQUENCE: Intentional Multi-Stroke Order"
        subtitle="Independent strokes draw in pedagogical sequence · No global dasharray hack"
        accentColor={theme.pivot}
      />
      <SceneLabelStrip label="STUDY G" step="COMPOUND" accentColor="pivot" position="top-right" startFrame={2} />
      <SvgProofBadge
        action="S7 COMPOUND"
        svgClass="4 STROKES ORDERED"
        metric={`Spine: ${(p1 * 100).toFixed(0)}% · Caps: ${(p2 * 100).toFixed(0)}%`}
        accentColor={theme.pivot}
        extra={{ label: "GLOBAL DASH HACK", value: "REJECTED" }}
      />

      <svg width={1920} height={1080} style={{ position: "absolute", top: 0, left: 0, overflow: "visible" }}>
        {/* Stroke 1: Spine */}
        <EvolvingPath d={dSpine} progress={p1} stroke={theme.pivot} strokeWidth={5} />
        {/* Stroke 2: Top Cap */}
        {frame >= 24 && <EvolvingPath d={dTop} progress={p2} stroke={theme.pivot} strokeWidth={5} />}
        {/* Stroke 3: Bottom Cap */}
        {frame >= 34 && <EvolvingPath d={dBottom} progress={p3} stroke={theme.pivot} strokeWidth={5} />}
        {/* Stroke 4: Center Tick */}
        {frame >= 44 && <EvolvingPath d={dTick} progress={p4} stroke={theme.good} strokeWidth={5} />}
      </svg>

      {/* Target card being bracketed */}
      <div
        style={{
          position: "absolute",
          left: 970,
          top: 450,
          background: "rgba(10, 26, 18, 0.95)",
          border: `2px solid ${theme.chalkText}`,
          borderRadius: 8,
          padding: "16px 24px",
          fontFamily: fonts.mono,
          opacity: fadeIn(frame, 8, 12),
        }}
      >
        <div style={{ fontSize: 16, color: theme.chalkText, fontWeight: 700 }}>RANGE [left..right]</div>
        <div style={{ fontSize: 12, color: theme.chalkDim }}>Sub-problem active partition</div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 120,
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(10, 26, 18, 0.92)",
          border: `1.5px solid ${theme.pivot}`,
          borderRadius: 10,
          padding: "12px 28px",
          textAlign: "center",
          fontFamily: fonts.mono,
        }}
      >
        <div style={{ fontSize: 18, fontWeight: 700, color: theme.pivot, marginBottom: 4 }}>
          {frame < 24
            ? "STROKE 1: VERTICAL SPINE DRAWS (14f)"
            : frame < 34
            ? "STROKE 2: TOP BOUNDARY CAP (10f)"
            : frame < 44
            ? "STROKE 3: BOTTOM BOUNDARY CAP (10f)"
            : "STROKE 4: POINTER TICK AFFIRMATION (10f)"}
        </div>
        <div style={{ fontSize: 13, color: theme.chalkText }}>
          Each subpath maintains its own exact geometry and timing · Eliminates ChalkIcon global dash distortion
        </div>
      </div>
    </AbsoluteFill>
  );
};

// =============================================================================
// STUDY H: ROUGH.JS EXACT-METRIC PROOF (S1 ROUGH EXACT)
// =============================================================================
const StudyH: React.FC = () => {
  const frame = useCurrentFrame();

  const points: [number, number][] = useMemo(
    () => [
      [520, 560],
      [760, 360],
      [1160, 360],
      [1400, 560],
    ],
    []
  );

  // Generate deterministic Rough.js curve
  const { generatedPaths, actualLength, v1Estimate, delta, pctError } = useMemo(() => {
    const gen = rough.generator();
    const opts = { roughness: 1.4, bowing: 1.2, stroke: theme.good, strokeWidth: 4, seed: 42 };
    const curveShape = gen.curve(points, opts);
    const paths = gen.toPaths(curveShape);

    // Sum exact lengths of all generated subpaths
    let actual = 0;
    for (const p of paths) {
      if (p.d) {
        actual += getExactPathMetrics(p.d).length;
      }
    }

    // V1 Estimate formula from RoughCurve.tsx:
    // sum(point_distances) * 1.3 + 50
    let totalChord = 0;
    for (let i = 1; i < points.length; i++) {
      const dx = points[i][0] - points[i - 1][0];
      const dy = points[i][1] - points[i - 1][1];
      totalChord += Math.sqrt(dx * dx + dy * dy);
    }
    const estimate = totalChord * 1.3 + 50;
    const diff = actual - estimate;
    const err = (Math.abs(diff) / actual) * 100;

    return {
      generatedPaths: paths,
      actualLength: actual,
      v1Estimate: estimate,
      delta: diff,
      pctError: err,
    };
  }, [points]);

  // F10–F50: Reveal using exact path metrics
  const progress = clamp01(tween(frame, 10, 40, 0, 1));

  return (
    <AbsoluteFill>
      <SceneEdgeTitle
        category="FOUNDATION V2 · SVG GRAMMAR PROOF · STUDY H"
        title="ROUGH.JS EXACT-METRIC PROOF: Actual vs V1 Estimate"
        subtitle="Measures real generated path d length vs RoughCurve V1 formula · Proves Phase 8 migration justification"
        accentColor={theme.good}
      />
      <SceneLabelStrip label="STUDY H" step="ROUGH METRIC" accentColor="good" position="top-right" startFrame={2} />
      <SvgProofBadge
        action="ROUGH.JS EXACT METRIC"
        svgClass="ACTUAL VS ESTIMATE"
        metric={`Actual: ${actualLength.toFixed(1)}px`}
        accentColor={theme.good}
        extra={{ label: "V1 ESTIMATE", value: `${v1Estimate.toFixed(1)}px` }}
      />

      <NodeCircle cx={520} cy={560} label="SRC" color={theme.chalkText} />
      <NodeCircle cx={1400} cy={560} label="TGT" color={progress >= 0.99 ? theme.good : theme.chalkText} active={progress >= 0.99} />

      <svg
        width={1920}
        height={1080}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          overflow: "visible",
          filter: `url(#${CHALK_FILTER_STRONG_ID})`,
        }}
      >
        {generatedPaths.map((pa, i) => (
          <EvolvingPath
            key={i}
            d={pa.d}
            progress={progress}
            stroke={pa.stroke || theme.good}
            strokeWidth={pa.strokeWidth || 4}
          />
        ))}
      </svg>

      {/* Comparison telemetry card */}
      <div
        style={{
          position: "absolute",
          bottom: 110,
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(10, 26, 18, 0.94)",
          border: `1.5px solid ${theme.good}`,
          borderRadius: 12,
          padding: "16px 32px",
          textAlign: "center",
          fontFamily: fonts.mono,
          boxShadow: "0 6px 24px rgba(0,0,0,0.5)",
        }}
      >
        <div style={{ fontSize: 20, fontWeight: 700, color: theme.good, marginBottom: 6 }}>
          NUMERIC EVIDENCE: Actual = {actualLength.toFixed(1)}px vs V1 Estimate = {v1Estimate.toFixed(1)}px
        </div>
        <div style={{ fontSize: 15, color: theme.chalkText, marginBottom: 4 }}>
          Numeric Delta = {delta > 0 ? `+${delta.toFixed(1)}px` : `${delta.toFixed(1)}px`} · Formula Error = {pctError.toFixed(1)}%
        </div>
        <div style={{ fontSize: 12, color: theme.chalkDim }}>
          [Rough.js bowing & multi-stroke generation renders V1 formulas imprecise · Phase 8 exact-metric migration justified]
        </div>
      </div>
    </AbsoluteFill>
  );
};

// =============================================================================
// MAIN COMPOSITION: FoundationV2-Phase6-SvgGrammar
// =============================================================================
export const SvgGrammarProof: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: theme.boardBg }}>
      <ChalkboardBackground />
      <ChalkFilters />

      {/* 8 Studies, 60 frames each (total 480 frames = 16 seconds at 30 fps) */}
      <Sequence from={0} durationInFrames={60}>
        <StudyA />
      </Sequence>
      <Sequence from={60} durationInFrames={60}>
        <StudyB />
      </Sequence>
      <Sequence from={120} durationInFrames={60}>
        <StudyC />
      </Sequence>
      <Sequence from={180} durationInFrames={60}>
        <StudyD />
      </Sequence>
      <Sequence from={240} durationInFrames={60}>
        <StudyE />
      </Sequence>
      <Sequence from={300} durationInFrames={60}>
        <StudyF />
      </Sequence>
      <Sequence from={360} durationInFrames={60}>
        <StudyG />
      </Sequence>
      <Sequence from={420} durationInFrames={60}>
        <StudyH />
      </Sequence>
    </AbsoluteFill>
  );
};

// =============================================================================
// DEDICATED CHECKPOINT COMPOSITION FOR STUDY A
// 5 Frames: 0 (0%), 1 (25%), 2 (50%), 3 (75%), 4 (100%)
// =============================================================================
export const StudyACheckpoints: React.FC = () => {
  const frame = useCurrentFrame();
  const curveD = "M 560 560 C 760 300, 1160 300, 1360 560";
  const metrics = useMemo(() => getExactPathMetrics(curveD), [curveD]);

  const progresses = [0.0, 0.25, 0.5, 0.75, 1.0];
  const progress = progresses[Math.min(frame, 4)];

  return (
    <AbsoluteFill style={{ backgroundColor: theme.boardBg }}>
      <ChalkboardBackground />
      <ChalkFilters />

      <SceneEdgeTitle
        category="FOUNDATION V2 · PHASE 6 · STUDY A CHECKPOINTS"
        title={`EXACT DRAW CHECKPOINT: ${(progress * 100).toFixed(0)}% PROGRESS`}
        subtitle={`Exact getLength: ${metrics.length.toFixed(1)}px · dashoffset: ${(metrics.length * (1 - progress)).toFixed(1)}px`}
        accentColor={theme.pivot}
      />
      <SvgProofBadge
        action="CHECKPOINT"
        svgClass="STUDY A"
        metric={`${metrics.length.toFixed(1)}px`}
        accentColor={theme.pivot}
        extra={{ label: "PROGRESS", value: `${(progress * 100).toFixed(0)}%` }}
      />

      <NodeCircle cx={560} cy={560} label="A" sublabel="SRC" color={theme.chalkText} />
      <NodeCircle cx={1360} cy={560} label="B" sublabel="TGT" color={progress >= 0.99 ? theme.good : theme.chalkText} active={progress >= 0.99} />

      <svg width={1920} height={1080} style={{ position: "absolute", top: 0, left: 0, overflow: "visible" }}>
        <path d={curveD} stroke="rgba(232, 228, 213, 0.12)" strokeWidth={4} fill="none" strokeDasharray="6 6" />
        <EvolvingPath
          d={curveD}
          progress={progress}
          stroke={theme.pivot}
          strokeWidth={6}
        />
      </svg>

      <div
        style={{
          position: "absolute",
          bottom: 120,
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(10, 26, 18, 0.92)",
          border: `1.5px solid ${theme.pivot}`,
          borderRadius: 10,
          padding: "14px 28px",
          textAlign: "center",
          fontFamily: fonts.mono,
        }}
      >
        <div style={{ fontSize: 22, fontWeight: 700, color: theme.pivot, marginBottom: 4 }}>
          CHECKPOINT {(progress * 100).toFixed(0)}% · DASH OFFSET: {(metrics.length * (1 - progress)).toFixed(1)}px
        </div>
        <div style={{ fontSize: 13, color: theme.chalkText }}>
          Total Length: {metrics.length.toFixed(2)}px · No approximate length · Remotion 4.0.507 evolvePath compliant
        </div>
      </div>
    </AbsoluteFill>
  );
};
