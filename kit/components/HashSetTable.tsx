import React from "react";
import { useCurrentFrame, interpolate, spring } from "remotion";
import { theme, fonts } from "../lib/theme";
import { CHALK_FILTER_ID } from "../lib/chalk";

export interface HashSetTableProps {
  /** Array of values currently stored in the HashSet table */
  items: (number | string)[];
  /** Total number of bucket slots to display (default 4) */
  maxSlots?: number;
  /** Value currently being queried/checked against the table */
  activeQuery?: number | string | null;
  /** Visual state of the current query */
  queryState?: "idle" | "scanning" | "not_found" | "found";
  /** Slot index that matches during a "found" state */
  foundIndex?: number | null;
  /** Table title/label (default: "HashSet (seen values)") */
  title?: string;
  /** Frame writing/reveal start */
  startFrame?: number;
}

/**
 * Premium Chalkboard HashSet Table component for @dsa/kit.
 * Displays stored unique elements in a well-spaced, high-contrast chalkboard table.
 */
export const HashSetTable: React.FC<HashSetTableProps> = ({
  items,
  maxSlots = 4,
  activeQuery = null,
  queryState = "idle",
  foundIndex = null,
  title = "HashSet (seen values)",
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
      {/* Table Header Bar */}
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
          ({items.length} unique)
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
              ? theme.cyan
              : "rgba(248, 246, 240, 0.3)"
          }`,
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
        }}
      >
        {/* Column Headers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "120px 1fr",
            padding: "8px 16px",
            borderBottom: `2px solid ${theme.chalkDim}`,
            fontFamily: fonts.mono,
            fontSize: 22,
            fontWeight: "bold",
            color: theme.cyan,
            textAlign: "center",
          }}
        >
          <span>SLOT</span>
          <span>VALUE</span>
        </div>

        {/* Slot Rows */}
        {Array.from({ length: maxSlots }).map((_, slotIdx) => {
          const val = items[slotIdx];
          const hasValue = val !== undefined;
          const isMatchedSlot = foundIndex === slotIdx && queryState === "found";
          const isScanning = queryState === "scanning" && hasValue;

          const rowScale = hasValue
            ? spring({
                frame: frame - (startFrame + slotIdx * 2.5),
                fps: 30,
                config: { damping: 14, stiffness: 180 },
              })
            : 1;

          return (
            <div
              key={slotIdx}
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                padding: "12px 20px",
                borderRadius: 10,
                backgroundColor: isMatchedSlot
                  ? "rgba(92, 224, 134, 0.28)"
                  : isScanning
                  ? "rgba(92, 225, 230, 0.22)"
                  : hasValue
                  ? "rgba(248, 246, 240, 0.08)"
                  : "rgba(0, 0, 0, 0.15)",
                border: `2px ${hasValue ? "solid" : "dashed"} ${
                  isMatchedSlot
                    ? theme.good
                    : isScanning
                    ? theme.cyan
                    : hasValue
                    ? theme.chalkText
                    : "rgba(248, 246, 240, 0.2)"
                }`,
                fontFamily: fonts.mono,
                fontSize: 34,
                fontWeight: "bold",
                textAlign: "center",
                transform: `scale(${hasValue ? rowScale : 1})`,
                color: isMatchedSlot ? theme.good : hasValue ? theme.chalkText : theme.chalkDim,
              }}
            >
              <span style={{ color: theme.chalkDim, fontSize: 22, alignSelf: "center" }}>
                Slot {slotIdx}
              </span>
              <span>{hasValue ? val : "—"}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
