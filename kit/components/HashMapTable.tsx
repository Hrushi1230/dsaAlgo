import React from "react";
import { useCurrentFrame, interpolate, spring } from "remotion";
import { theme, fonts } from "../lib/theme";
import { CHALK_FILTER_ID } from "../lib/chalk";

export interface HashMapEntry {
  key: number | string;
  value: number | string;
}

export interface HashMapTableProps {
  /** Key-Value pairs stored in the HashMap */
  entries: HashMapEntry[];
  /** Total slot capacity */
  maxSlots?: number;
  /** Active key queried */
  activeKey?: number | string | null;
  /** Visual query state */
  queryState?: "idle" | "scanning" | "not_found" | "found";
  /** Key that matched */
  foundKey?: number | string | null;
  /** Custom title */
  title?: string;
  /** Frame start */
  startFrame?: number;
}

/**
 * Premium Chalkboard HashMap Table component for @dsa/kit.
 * Displays Key -> Value mappings in a well-spaced, high-contrast chalkboard table.
 */
export const HashMapTable: React.FC<HashMapTableProps> = ({
  entries,
  maxSlots = 4,
  activeKey = null,
  queryState = "idle",
  foundKey = null,
  title = "HashMap (key → index)",
  startFrame = 0,
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
        width: 520,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 16,
        }}
      >
        <span
          style={{
            fontSize: 34,
            color: theme.chalkText,
            fontFamily: fonts.mono,
            fontWeight: "bold",
            filter: `url(#${CHALK_FILTER_ID})`,
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontSize: 24,
            color: theme.chalkDim,
            fontFamily: fonts.hand,
          }}
        >
          ({entries.length} pairs)
        </span>
      </div>

      {/* Structured Table Container Card */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "20px 24px",
          borderRadius: 18,
          backgroundColor: "rgba(18, 40, 30, 0.85)",
          border: `2.5px solid ${
            queryState === "found"
              ? theme.good
              : queryState === "scanning"
              ? theme.pivot
              : "rgba(244, 241, 232, 0.3)"
          }`,
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
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
            fontSize: 22,
            fontWeight: "bold",
            color: theme.pivot,
            textAlign: "center",
          }}
        >
          <span>KEY (num)</span>
          <span>VAL (index)</span>
        </div>

        {/* Rows */}
        {Array.from({ length: maxSlots }).map((_, rowIdx) => {
          const entry = entries[rowIdx];
          const hasEntry = entry !== undefined;
          const isMatched = hasEntry && foundKey === entry.key && queryState === "found";
          const isScanningKey = hasEntry && activeKey === entry.key && queryState === "scanning";

          const rowScale = hasEntry
            ? spring({
                frame: frame - (startFrame + rowIdx * 3),
                fps: 30,
                config: { damping: 14, stiffness: 180 },
              })
            : 1;

          return (
            <div
              key={rowIdx}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                padding: "12px 20px",
                borderRadius: 10,
                backgroundColor: isMatched
                  ? "rgba(92, 224, 134, 0.28)"
                  : isScanningKey
                  ? "rgba(242, 193, 78, 0.22)"
                  : hasEntry
                  ? "rgba(244, 241, 232, 0.1)"
                  : "rgba(0, 0, 0, 0.15)",
                border: `2px ${hasEntry ? "solid" : "dashed"} ${
                  isMatched
                    ? theme.good
                    : isScanningKey
                    ? theme.pivot
                    : hasEntry
                    ? theme.chalkText
                    : "rgba(244, 241, 232, 0.2)"
                }`,
                fontFamily: fonts.mono,
                fontSize: 34,
                fontWeight: "bold",
                textAlign: "center",
                transform: `scale(${hasEntry ? rowScale : 1})`,
                color: isMatched ? theme.good : hasEntry ? theme.chalkText : theme.chalkDim,
              }}
            >
              <span>{hasEntry ? entry.key : "—"}</span>
              <span style={{ fontSize: hasEntry ? 28 : 34 }}>
                {hasEntry ? `idx ${entry.value}` : "—"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
