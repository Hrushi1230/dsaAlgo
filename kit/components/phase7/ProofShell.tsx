import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { ChalkboardBackground, ChalkFilters } from "../../lib/chalk";
import { theme, fonts } from "../../lib/theme";

export interface ProofShellProps {
  structureNum: string;
  structureTitle: string;
  stateAName: string;
  stateBName: string;
  stateCName: string;
  rule: string;
  children: (state: "A" | "B" | "C", progress: number) => React.ReactNode;
}

export const STATE_DURATION = 90; // 3 seconds at 30 fps per state
export const TOTAL_PROOF_DURATION = STATE_DURATION * 3; // 270 frames (9.0 seconds)

import { RoughNode, RoughNodeProps } from "../RoughNode";
export { getEdgeCoords } from "../../lib/geom";
export { RoughNode };
export type ChalkCircleNodeProps = RoughNodeProps;
export const ChalkCircleNode = RoughNode;

export const ProofShell: React.FC<ProofShellProps> = ({
  structureNum,
  structureTitle,
  stateAName,
  stateBName,
  stateCName,
  rule,
  children,
}) => {
  const frame = useCurrentFrame();

  // 3 distinct 90-frame segments (total 270 frames = 9.0s)
  const segmentIndex = Math.min(2, Math.floor(frame / STATE_DURATION));
  const stateKey: "A" | "B" | "C" =
    segmentIndex === 0 ? "A" : segmentIndex === 1 ? "B" : "C";

  const localFrame = frame - segmentIndex * STATE_DURATION;
  const progress = Math.min(1, Math.max(0, localFrame / STATE_DURATION));

  // Smooth cinematic cross-fade / entrance
  const opacity = interpolate(
    localFrame,
    [0, 8, STATE_DURATION - 8, STATE_DURATION - 1],
    [0.1, 1, 1, 0.4],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const scale = interpolate(
    localFrame,
    [0, 12],
    [0.985, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const stateLabel =
    stateKey === "A"
      ? `STATE A — CORE (${stateAName})`
      : stateKey === "B"
      ? `STATE B — OPERATION (${stateBName})`
      : `STATE C — ADAPTIVE (${stateCName})`;

  const activeColor =
    stateKey === "A" ? theme.cyan : stateKey === "B" ? theme.pivot : theme.good;

  const currentSeconds = (frame / 30).toFixed(1);
  const totalSeconds = (TOTAL_PROOF_DURATION / 30).toFixed(1);

  return (
    <AbsoluteFill style={{ backgroundColor: theme.boardBg, overflow: "hidden" }}>
      <ChalkboardBackground />
      <ChalkFilters />

      {/* Header bar */}
      <div
        style={{
          position: "absolute",
          top: 36,
          left: 60,
          right: 60,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          zIndex: 100,
          pointerEvents: "none",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 16,
              color: theme.cyan,
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: 4,
            }}
          >
            PHASE 7.2 VISUAL GRAMMAR PROOF · {structureNum}
          </div>
          <div
            style={{
              fontFamily: fonts.hand,
              fontSize: 38,
              color: theme.chalkText,
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            {structureTitle}
          </div>
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 14,
              color: theme.chalkDim,
              marginTop: 6,
            }}
          >
            PERMANENT LAW: {rule}
          </div>
        </div>

        {/* State Badge */}
        <div
          style={{
            border: `2px solid ${activeColor}`,
            padding: "8px 20px",
            borderRadius: 8,
            background: "rgba(24, 82, 61, 0.85)",
            fontFamily: fonts.mono,
            fontSize: 15,
            fontWeight: 700,
            color: activeColor,
            letterSpacing: "1px",
            boxShadow: `0 0 16px ${activeColor}33`,
            transition: "all 0.2s ease-out",
          }}
        >
          {stateLabel}
        </div>
      </div>

      {/* Main Canvas Area */}
      <div
        style={{
          position: "absolute",
          top: 140,
          left: 60,
          right: 60,
          bottom: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        {children(stateKey, progress)}
      </div>

      {/* Bottom Timeline & Video Progression HUD */}
      <div
        style={{
          position: "absolute",
          bottom: 24,
          left: 60,
          right: 60,
          height: 38,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 100,
          pointerEvents: "none",
        }}
      >
        {/* 3 State Progress Segments */}
        <div style={{ display: "flex", gap: 14, flex: 1, maxWidth: 1000 }}>
          {[
            { key: "A", name: "A · CORE", color: theme.cyan, active: stateKey === "A", done: segmentIndex > 0 },
            { key: "B", name: "B · OPERATION", color: theme.pivot, active: stateKey === "B", done: segmentIndex > 1 },
            { key: "C", name: "C · ADAPTIVE", color: theme.good, active: stateKey === "C", done: false },
          ].map((tab, idx) => {
            const tabProgress =
              tab.done ? 1 : tab.active ? progress : 0;

            return (
              <div
                key={tab.key}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontFamily: fonts.mono,
                    fontSize: 12,
                    fontWeight: tab.active ? 700 : 500,
                    color: tab.active ? tab.color : tab.done ? theme.chalkText : theme.chalkDim,
                    letterSpacing: "1px",
                  }}
                >
                  <span>{tab.name}</span>
                  <span>{idx === 0 ? "00-03s" : idx === 1 ? "03-06s" : "06-09s"}</span>
                </div>
                {/* Track and fill */}
                <div
                  style={{
                    height: 4,
                    background: "rgba(248, 246, 240, 0.15)",
                    borderRadius: 2,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${tabProgress * 100}%`,
                      background: tab.color,
                      borderRadius: 2,
                      boxShadow: tab.active ? `0 0 8px ${tab.color}` : "none",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Video Timecode & FPS */}
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 13,
            color: theme.chalkDim,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <span>30 FPS · 1080P</span>
          <span
            style={{
              padding: "4px 10px",
              borderRadius: 4,
              background: "rgba(0, 0, 0, 0.25)",
              color: theme.chalkText,
              fontWeight: 700,
            }}
          >
            {currentSeconds}s / {totalSeconds}s
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
