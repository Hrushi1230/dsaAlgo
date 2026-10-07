import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { theme, fonts } from "../../lib/theme";
import { ChalkboardBackground, ChalkFilters } from "../../lib/chalk";
import { ArrayTrackV2 } from "./ArrayTrackV2";

export const ARRAY_PROOF_DURATION = 360; // 12.0s at 30 fps

/**
 * ArraySystemProof — Canonical Foundation V2 Array Primitive System Proof.
 *
 * Visually validates the 7 mandatory array operations and adaptive rules:
 * - A_CORE: Fixed slots, stable indices, and values.
 * - B_READ_WRITE: Read focus and in-place write updates with negative numbers.
 * - C_SWAP: Pure value flight across parabolic arcs with frozen slots and indices.
 * - D_POINTERS: Multi-lane collision-aware pointer systems (top & bottom lanes).
 * - E_PARTITION: Multi-region partition bands (left, middle, right ranges).
 * - F_DENSE: 16-element and 20-element dense arrays with adaptive slot scaling.
 */
export const ArraySystemProof: React.FC = () => {
  const frame = useCurrentFrame();

  // 6 discrete 60-frame segments (total 360 frames = 12.0s)
  const segmentIndex = Math.min(5, Math.floor(frame / 60));
  const localFrame = frame - segmentIndex * 60;
  const progress = Math.min(1, Math.max(0, localFrame / 60));

  const stateNames = [
    "A · CORE (Fixed Slots & Indices)",
    "B · READ & WRITE (Focus & In-Place Update)",
    "C · SWAP (Parabolic Value Flight · Frozen Slots)",
    "D · POINTERS (Multi-Lane Staggered Collision)",
    "E · PARTITIONS (Semantic Range Underlays)",
    "F · DENSE (16 & 20-Element Adaptive Scaling)",
  ];

  const stateColors = [
    theme.cyan,
    theme.pivot,
    theme.pivot,
    theme.good,
    theme.cyan,
    theme.good,
  ];

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
            FOUNDATION V2 · ARRAY PRIMITIVE SYSTEM PROOF
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
            ArrayTrackV2 Architecture
          </div>
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 14,
              color: theme.chalkDim,
              marginTop: 6,
            }}
          >
            PERMANENT LAW: SLOTS STAY FIXED. VALUES MOVE. INDICES NEVER MOVE.
          </div>
        </div>

        {/* State Badge */}
        <div
          style={{
            border: `2px solid ${stateColors[segmentIndex]}`,
            padding: "8px 20px",
            borderRadius: 8,
            background: "rgba(24, 82, 61, 0.85)",
            fontFamily: fonts.mono,
            fontSize: 15,
            fontWeight: 700,
            color: stateColors[segmentIndex],
            letterSpacing: "1px",
            boxShadow: `0 0 16px ${stateColors[segmentIndex]}33`,
          }}
        >
          {stateNames[segmentIndex]}
        </div>
      </div>

      {/* Main Stage Area */}
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
        }}
      >
        {/* ================================================================= */}
        {/* STATE A: CORE                                                     */}
        {/* ================================================================= */}
        {segmentIndex === 0 && (
          <ArrayTrackV2
            elements={[2, 0, 2, 1, 1, 0]}
            pointers={[
              { id: "p1", label: "i", index: 2, color: theme.cyan, lane: 0 },
            ]}
          />
        )}

        {/* ================================================================= */}
        {/* STATE B: READ & WRITE                                             */}
        {/* ================================================================= */}
        {segmentIndex === 1 && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 36 }}>
            <div style={{ fontFamily: fonts.mono, fontSize: 20, color: theme.cyan, fontWeight: 700 }}>
              OPERATION: READ(idx 2) [cyan] · WRITE(idx 4, -42) [pivot] · Negative Values Supported
            </div>
            <ArrayTrackV2
              elements={[
                { value: 2 },
                { value: 0 },
                { value: -5, slotState: "query", valueState: "query" },
                { value: 1 },
                { value: -42, slotState: "current", valueState: "current" },
                { value: 0 },
              ]}
              highlightedIndices={{ 2: theme.cyan, 4: theme.pivot }}
              pointers={[
                { id: "read", label: "read", index: 2, color: theme.cyan },
                { id: "write", label: "write", index: 4, color: theme.pivot },
              ]}
            />
          </div>
        )}

        {/* ================================================================= */}
        {/* STATE C: SWAP                                                     */}
        {/* ================================================================= */}
        {segmentIndex === 2 && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 36 }}>
            <div style={{ fontFamily: fonts.mono, fontSize: 20, color: theme.pivot, fontWeight: 700 }}>
              OPERATION: SWAP(idx 1, idx 4) · Values fly along parabolic arc; slots &amp; indices remain frozen!
            </div>
            <ArrayTrackV2
              elements={[2, 0, 2, 1, 1, 0]}
              swap={{
                idxA: 1,
                idxB: 4,
                progress,
                arcHeight: -75,
                label: "⇄ SWAP(idx 1, idx 4)",
              }}
              pointers={[
                { id: "i", label: "i", index: 1, color: theme.pivot },
                { id: "j", label: "j", index: 4, color: theme.pivot },
              ]}
            />
          </div>
        )}

        {/* ================================================================= */}
        {/* STATE D: MULTI-LANE POINTERS                                      */}
        {/* ================================================================= */}
        {segmentIndex === 3 && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 36 }}>
            <div style={{ fontFamily: fonts.mono, fontSize: 20, color: theme.good, fontWeight: 700 }}>
              POINTER LANES: Top (slow, fast) &amp; Bottom (low, mid, high) · Vertical collision staggering
            </div>
            <ArrayTrackV2
              elements={[10, 20, 30, 40, 50, 60, 70, 80]}
              pointerPlacement="bottom"
              pointers={[
                // Staggered bottom pointers: low and mid both at idx 2!
                { id: "low", label: "low", index: 2, color: theme.cyan, lane: 0 },
                { id: "mid", label: "mid", index: 2, color: theme.pivot, lane: 1 },
                { id: "high", label: "high", index: 7, color: theme.good, lane: 0 },
              ]}
            />
          </div>
        )}

        {/* ================================================================= */}
        {/* STATE E: PARTITION BANDS                                          */}
        {/* ================================================================= */}
        {segmentIndex === 4 && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 36 }}>
            <div style={{ fontFamily: fonts.mono, fontSize: 20, color: theme.cyan, fontWeight: 700 }}>
              DUTCH NATIONAL FLAG: Confirmed 0s · Confirmed 1s · Unknown Region [mid..high] · Confirmed 2s
            </div>
            <ArrayTrackV2
              elements={[
                { value: 0, slotState: "confirmed", valueState: "confirmed" },
                { value: 0, slotState: "confirmed", valueState: "confirmed" },
                { value: 1, slotState: "current", valueState: "current" },
                { value: 1, slotState: "current", valueState: "current" },
                { value: 2, slotState: "query" },
                { value: 0, slotState: "query" },
                { value: 2, slotState: "confirmed", valueState: "confirmed" },
                { value: 2, slotState: "confirmed", valueState: "confirmed" },
              ]}
              partitions={[
                {
                  id: "p0",
                  startIndex: 0,
                  endIndex: 1,
                  label: "CONFIRMED 0s",
                  color: theme.good,
                  variant: "band",
                },
                {
                  id: "p1",
                  startIndex: 2,
                  endIndex: 3,
                  label: "CONFIRMED 1s",
                  color: theme.pivot,
                  variant: "band",
                },
                {
                  id: "p2",
                  startIndex: 4,
                  endIndex: 5,
                  label: "UNKNOWN REGION",
                  color: theme.warn,
                  variant: "band",
                },
                {
                  id: "p3",
                  startIndex: 6,
                  endIndex: 7,
                  label: "CONFIRMED 2s",
                  color: theme.cyan,
                  variant: "band",
                },
              ]}
              pointers={[
                { id: "low", label: "low", index: 2, color: theme.good, lane: 0 },
                { id: "mid", label: "mid", index: 4, color: theme.pivot, lane: 0 },
                { id: "high", label: "high", index: 5, color: theme.cyan, lane: 1 },
              ]}
            />
          </div>
        )}

        {/* ================================================================= */}
        {/* STATE F: DENSE ARRAYS                                             */}
        {/* ================================================================= */}
        {segmentIndex === 5 && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 40 }}>
            {/* 16-element dense array */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <div style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.cyan, fontWeight: 700 }}>
                16-ELEMENT DENSE ARRAY (78×80px Slots): Large Numbers, Negatives &amp; Duplicates
              </div>
              <ArrayTrackV2
                elements={[
                  -99, 1024, 0, 7, 15, 42, 88, -1, 3, 256, 512, 12, 999, 8, 0, 100
                ]}
                highlightedIndices={{ 1: theme.pivot, 12: theme.good }}
                pointers={[
                  { id: "min", label: "min", index: 0, color: theme.cyan },
                  { id: "max", label: "max", index: 1, color: theme.pivot },
                ]}
              />
            </div>

            {/* 20-element ultra-dense array */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <div style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.good, fontWeight: 700 }}>
                20-ELEMENT COMPACT ARRAY (54×64px Slots): Compact Index &amp; Text Scaling
              </div>
              <ArrayTrackV2
                elements={[
                  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
                ]}
                indexFormat="[i]"
              />
            </div>
          </div>
        )}
      </div>

      {/* Bottom Timeline HUD */}
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
        <div style={{ display: "flex", gap: 10, flex: 1, maxWidth: 1100 }}>
          {stateNames.map((name, idx) => {
            const isCurrent = idx === segmentIndex;
            const isDone = idx < segmentIndex;
            const tabProgress = isDone ? 1 : isCurrent ? progress : 0;
            const color = stateColors[idx];

            return (
              <div key={idx} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 11,
                    fontWeight: isCurrent ? 700 : 500,
                    color: isCurrent ? color : isDone ? theme.chalkText : theme.chalkDim,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {name.split(" ")[0]} · {name.split("(")[0].replace(/^[A-F] · /, "")}
                </div>
                <div
                  style={{
                    height: 4,
                    background: "rgba(248, 246, 240, 0.15)",
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${tabProgress * 100}%`,
                      background: color,
                      boxShadow: isCurrent ? `0 0 8px ${color}` : "none",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 13,
            color: theme.chalkDim,
            display: "flex",
            alignItems: "center",
            gap: 12,
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
            {(frame / 30).toFixed(1)}s / {(ARRAY_PROOF_DURATION / 30).toFixed(1)}s
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
