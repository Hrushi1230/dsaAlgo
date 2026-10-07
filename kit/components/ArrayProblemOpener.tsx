import React from "react";
import { useCurrentFrame, interpolate, spring } from "remotion";
import { theme, fonts } from "../lib/theme";
import { CHALK_FILTER_ID } from "../lib/chalk";

export interface ArrayOpenerElement {
  value: number | string;
  index?: number;
  highlight?: "pivot" | "good" | "warn" | "cyan" | "purple" | "better" | string;
  label?: string;
}

export interface ArrayProblemOpenerProps {
  /** Array elements, e.g. [2, 0, 2, 1, 1, 0] or rich element objects */
  elements: (number | string | ArrayOpenerElement)[];
  /** Layout orientation: horizontal (standard) or vertical (top-to-bottom) */
  orientation?: "horizontal" | "vertical";
  /** Variable name, e.g. "nums" */
  name?: string;
  /** Whether to render slot indices (0, 1, 2...) */
  showIndices?: boolean;
  /** Goal or rule banner below array, e.g. "Sort the colors in-place: 0 → 1 → 2" */
  instruction?: string;
  /** Optional target value to display alongside array */
  target?: number | string;
  /** Custom card width (default 120 for horizontal, 100 for vertical) */
  cardWidth?: number;
  /** Custom card height (default 130 for horizontal, 100 for vertical) */
  cardHeight?: number;
  /** Gap between cards (default 24 for horizontal, 16 for vertical) */
  gap?: number;
  /** Start frame for entrance animation */
  startFrame?: number;
}

/**
 * ArrayProblemOpener — First data-structure-specific problem opener (Foundation V2).
 *
 * Puts the array itself on Center Stage as the hero object.
 * Supports horizontal and vertical orientations, semantic highlighting, and fixed-slot stability.
 */
export const ArrayProblemOpener: React.FC<ArrayProblemOpenerProps> = ({
  elements,
  orientation = "horizontal",
  name = "nums",
  showIndices = true,
  instruction,
  target,
  cardWidth,
  cardHeight,
  gap,
  startFrame = 0,
}) => {
  const frame = useCurrentFrame();

  const isVertical = orientation === "vertical";
  const actualCardWidth = cardWidth ?? (isVertical ? 110 : 120);
  const actualCardHeight = cardHeight ?? (isVertical ? 96 : 130);
  const actualGap = gap ?? (isVertical ? 16 : 24);

  // Normalize elements
  const normalized: ArrayOpenerElement[] = elements.map((item, idx) => {
    if (typeof item === "object" && item !== null && "value" in item) {
      return {
        index: item.index ?? idx,
        value: item.value,
        highlight: item.highlight,
        label: item.label,
      };
    }
    return {
      index: idx,
      value: item,
    };
  });

  // Instruction spring animation
  const instructionSpring = spring({
    frame: Math.max(0, frame - (startFrame + normalized.length * 2.5 + 4)),
    fps: 30,
    config: { damping: 14, stiffness: 160 },
  });

  // Resolve highlight color
  const getHighlightColor = (type?: string): string => {
    if (!type) return theme.cardBorder;
    switch (type) {
      case "pivot":
        return theme.pivot;
      case "good":
        return theme.good;
      case "warn":
        return theme.warn;
      case "cyan":
        return theme.cyan;
      case "purple":
        return theme.purple;
      case "better":
        return theme.better;
      default:
        return type;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {/* Optional Array Header / Target Tag */}
      {(name || target !== undefined) && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: isVertical ? 16 : 24,
          }}
        >
          {name && (
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 28,
                fontWeight: 700,
                color: theme.chalkText,
                filter: `url(#${CHALK_FILTER_ID})`,
              }}
            >
              {name} =
            </span>
          )}

          {target !== undefined && (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 18px",
                borderRadius: 8,
                border: `1.5px solid ${theme.pivot}`,
                backgroundColor: "rgba(255, 209, 102, 0.12)",
                fontFamily: fonts.mono,
                fontSize: 22,
                fontWeight: 700,
                color: theme.pivot,
              }}
            >
              target = {target}
            </div>
          )}
        </div>
      )}

      {/* Main Array Slot Track */}
      <div
        style={{
          display: "flex",
          flexDirection: isVertical ? "column" : "row",
          alignItems: "center",
          gap: actualGap,
        }}
      >
        {normalized.map((item, idx) => {
          const cardSpring = spring({
            frame: Math.max(0, frame - (startFrame + idx * 3)),
            fps: 30,
            config: { damping: 13, stiffness: 170 },
          });

          const scale = interpolate(cardSpring, [0, 1], [0.6, 1]);
          const opacity = interpolate(cardSpring, [0, 1], [0, 1]);
          const highlightColor = getHighlightColor(item.highlight);
          const isHighlighted = !!item.highlight;

          return (
            <div
              key={idx}
              style={{
                display: "flex",
                flexDirection: isVertical ? "row" : "column",
                alignItems: "center",
                gap: isVertical ? 16 : 8,
                transform: `scale(${scale})`,
                opacity,
              }}
            >
              {/* Slot Index */}
              {showIndices && (
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 22,
                    fontWeight: 700,
                    color: theme.chalkDim,
                    minWidth: isVertical ? 36 : "auto",
                    textAlign: "center",
                  }}
                >
                  {isVertical ? `[${item.index}]` : item.index}
                </span>
              )}

              {/* Array Card Box */}
              <div
                style={{
                  width: actualCardWidth,
                  height: actualCardHeight,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: isHighlighted
                    ? `${highlightColor}22`
                    : theme.cardBg,
                  borderRadius: 14,
                  border: `2.5px solid ${highlightColor}`,
                  boxShadow: isHighlighted
                    ? `0 0 20px ${highlightColor}44`
                    : "0 6px 16px rgba(0, 0, 0, 0.35)",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: actualCardHeight > 100 ? 56 : 46,
                    fontWeight: "bold",
                    color: isHighlighted ? highlightColor : theme.chalkText,
                    filter: `url(#${CHALK_FILTER_ID})`,
                  }}
                >
                  {item.value}
                </span>
              </div>

              {/* Optional Pointer / Sub-label */}
              {item.label && (
                <span
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 26,
                    fontWeight: "bold",
                    color: highlightColor,
                    marginTop: isVertical ? 0 : 4,
                  }}
                >
                  {item.label}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Instruction Note Banner */}
      {instruction && (
        <div
          style={{
            marginTop: 32,
            padding: "10px 28px",
            borderRadius: 12,
            backgroundColor: "rgba(248, 246, 240, 0.05)",
            border: `1.5px solid ${theme.cardBorder}`,
            opacity: interpolate(instructionSpring, [0, 1], [0, 1]),
            transform: `translateY(${interpolate(instructionSpring, [0, 1], [15, 0])}px)`,
          }}
        >
          <span
            style={{
              fontFamily: fonts.hand,
              fontSize: 30,
              fontWeight: 700,
              color: theme.chalkText,
              letterSpacing: "0.5px",
            }}
          >
            {instruction}
          </span>
        </div>
      )}
    </div>
  );
};
