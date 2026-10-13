import React from "react";
import { useCurrentFrame, interpolate, spring } from "remotion";
import { theme, fonts } from "../lib/theme";
import { CHALK_FILTER_ID } from "../lib/chalk";

export interface FrequencyMapEntry {
  key: number;
  value: number;
}

export interface FrequencyMapTableV2Props {
  /** Prefix sum to frequency entries stored in the map */
  entries: FrequencyMapEntry[];
  /** Total slot capacity to render */
  maxSlots?: number;
  /** Active prefix sum being queried (needed = prefix - k) */
  activeKey?: number | null;
  /** Visual query state */
  queryState?: "idle" | "scanning" | "not_found" | "found";
  /** Matched key if found */
  foundKey?: number | null;
  /** Custom table header title */
  title?: string;
  /** Frame when table fades in */
  startFrame?: number;
  /** Width in pixels */
  width?: number;
}

/**
 * FrequencyMapTableV2 — Authoritative frequency-map representation for prefix sums.
 * 
 * Semantic rules:
 * - KEY = prefix sum
 * - VALUE = frequency of EARLIER prefix positions
 * - Columns: KEY (prefix sum) | VAL (freq)
 * - Row order is insertion-based / stable
 * - Explicit query scanning, hit (found) and miss (not_found) feedback
 */
export const FrequencyMapTableV2: React.FC<FrequencyMapTableV2Props> = ({
  entries,
  maxSlots = 6,
  activeKey = null,
  queryState = "idle",
  foundKey = null,
  title = "FrequencyMap (prefix → count)",
  startFrame = 0,
  width = 500,
}) => {
  const frame = useCurrentFrame();

  const containerOpacity = interpolate(
    frame,
    [startFrame, startFrame + 15],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        opacity: containerOpacity,
        fontFamily: fonts.hand,
        width,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: 14,
          padding: "0 8px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              fontSize: 30,
              color: theme.chalkText,
              fontFamily: fonts.mono,
              fontWeight: "bold",
              filter: `url(#${CHALK_FILTER_ID})`,
            }}
          >
            {title}
          </span>
        </div>
        <span
          style={{
            fontSize: 22,
            color: theme.chalkDim,
            fontFamily: fonts.hand,
          }}
        >
          ({entries.length} stored)
        </span>
      </div>

      {/* Structured Table Container Card */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          padding: "18px 22px",
          borderRadius: 18,
          backgroundColor: "rgba(18, 40, 30, 0.88)",
          border: `2.5px solid ${
            queryState === "found"
              ? theme.good
              : queryState === "scanning"
              ? theme.pivot
              : "rgba(244, 241, 232, 0.28)"
          }`,
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
          transition: "border-color 0.2s ease",
        }}
      >
        {/* Column Headers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            padding: "8px 16px",
            borderBottom: `2px solid ${theme.chalkDim}`,
            fontFamily: fonts.mono,
            fontSize: 20,
            fontWeight: "bold",
            color: theme.pivot,
            textAlign: "center",
          }}
        >
          <span>KEY (prefix sum)</span>
          <span>VAL (freq)</span>
        </div>

        {/* Rows */}
        {Array.from({ length: Math.max(maxSlots, entries.length) }).map((_, rowIdx) => {
          const entry = entries[rowIdx];
          const hasEntry = entry !== undefined;
          const isMatched = hasEntry && foundKey === entry.key && queryState === "found";
          const isScanningKey = hasEntry && activeKey === entry.key && queryState === "scanning";

          const rowScale = hasEntry
            ? spring({
                frame: frame - (startFrame + rowIdx * 3),
                fps: 30,
                config: { damping: 14, stiffness: 120 },
              })
            : 1;

          return (
            <div
              key={rowIdx}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                alignItems: "center",
                padding: "10px 16px",
                borderRadius: 12,
                backgroundColor: isMatched
                  ? "rgba(60, 229, 167, 0.22)"
                  : isScanningKey
                  ? "rgba(255, 209, 102, 0.18)"
                  : hasEntry
                  ? "rgba(255, 255, 255, 0.04)"
                  : "transparent",
                border: isMatched
                  ? `2px solid ${theme.good}`
                  : isScanningKey
                  ? `2px solid ${theme.pivot}`
                  : hasEntry
                  ? "1px dashed rgba(244, 241, 232, 0.15)"
                  : "1px dashed rgba(244, 241, 232, 0.06)",
                transform: `scale(${hasEntry ? Math.min(rowScale, 1) : 1})`,
                fontFamily: fonts.mono,
                textAlign: "center",
              }}
            >
              {/* KEY cell */}
              <span
                style={{
                  fontSize: 26,
                  fontWeight: "bold",
                  color: isMatched
                    ? theme.good
                    : isScanningKey
                    ? theme.pivot
                    : hasEntry
                    ? theme.chalkText
                    : theme.chalkDim,
                  filter: hasEntry ? `url(#${CHALK_FILTER_ID})` : undefined,
                }}
              >
                {hasEntry ? entry.key : "—"}
              </span>

              {/* VAL cell */}
              <span
                style={{
                  fontSize: 26,
                  fontWeight: "bold",
                  color: isMatched
                    ? theme.good
                    : hasEntry
                    ? "#5CE1E6"
                    : theme.chalkDim,
                  filter: hasEntry ? `url(#${CHALK_FILTER_ID})` : undefined,
                }}
              >
                {hasEntry ? `× ${entry.value}` : "—"}
              </span>
            </div>
          );
        })}

        {/* Query State Feedback Callout */}
        {queryState !== "idle" && (
          <div
            style={{
              marginTop: 6,
              padding: "8px 12px",
              borderRadius: 10,
              backgroundColor:
                queryState === "found"
                  ? "rgba(60, 229, 167, 0.18)"
                  : queryState === "scanning"
                  ? "rgba(255, 209, 102, 0.14)"
                  : "rgba(255, 107, 107, 0.14)",
              border: `1.5px solid ${
                queryState === "found"
                  ? theme.good
                  : queryState === "scanning"
                  ? theme.pivot
                  : "#FF6B6B"
              }`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: fonts.mono,
              fontSize: 18,
            }}
          >
            <span style={{ color: theme.chalkText }}>
              query(needed = {activeKey ?? "?"}):
            </span>
            <span
              style={{
                fontWeight: "bold",
                color:
                  queryState === "found"
                    ? theme.good
                    : queryState === "scanning"
                    ? theme.pivot
                    : "#FF6B6B",
              }}
            >
              {queryState === "found"
                ? `FOUND (freq = ${entries.find((e) => e.key === foundKey)?.value || 1})`
                : queryState === "scanning"
                ? "SEARCHING..."
                : "NOT FOUND (freq = 0)"}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
