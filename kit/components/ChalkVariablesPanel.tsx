import React from "react";
import { theme, fonts, typographyMobile } from "../lib/theme";
import { RoughLine } from "./RoughLine";

export interface VariableItem {
  label: string;
  value: string | number;
  labelColor?: string;
  valueColor?: string;
}

export interface ChalkVariablesPanelProps {
  /** Title of the panel (default: "Variables") */
  title?: string;
  /** List of key-value variables to display */
  items?: VariableItem[];
  /** Alias list of variables supported for backward compatibility */
  variables?: Array<{
    name?: string;
    label?: string;
    value: string | number;
    status?: "good" | "pivot" | "neutral" | "warn";
    color?: string;
    labelColor?: string;
    valueColor?: string;
  }>;
  /** Custom header font size (default: 44px) */
  headerFontSize?: number;
  /** Custom item font size (default: 36px) */
  itemFontSize?: number;
  /** Vertical gap between variable items in pixels (default: 18) */
  gap?: number;
  /** Width of the panel (default: "auto") */
  width?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * ChalkVariablesPanel — Mobile-First Trace Variables Column Component.
 * 
 * Renders the stacked state variables column as seen in REF_MOBILE_STYLE_TRACE_FRAME.png:
 * - "Variables" title with yellow hand-drawn underline
 * - Stacked "key = value" items with crisp contrast and bold values
 * - Direct board-native chalkboard aesthetic
 */
export const ChalkVariablesPanel: React.FC<ChalkVariablesPanelProps> = ({
  title = "Variables",
  items,
  variables,
  headerFontSize = typographyMobile.sectionHeaderSize,
  itemFontSize = typographyMobile.variableSize,
  gap = 18,
  width = "auto",
  className,
  style,
}) => {
  const numHeaderFontSize =
    typeof headerFontSize === "number"
      ? headerFontSize
      : (headerFontSize as any)?.fontSize ?? typographyMobile.sectionHeaderSize ?? 44;

  const numItemFontSize =
    typeof itemFontSize === "number"
      ? itemFontSize
      : (itemFontSize as any)?.fontSize ?? typographyMobile.variableSize ?? 36;

  const displayItems: VariableItem[] = items ?? (variables ? variables.map((v) => ({
    label: v.label ?? v.name ?? "",
    value: v.value,
    labelColor: v.labelColor,
    valueColor: v.valueColor ?? v.color ?? (v.status === "good" ? theme.good : v.status === "warn" ? theme.warn : v.status === "pivot" ? theme.pivot : undefined),
  })) : []);

  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        width,
        userSelect: "none",
        ...style,
      }}
    >
      {/* 1. Panel Header with Yellow Underline */}
      <div style={{ position: "relative", marginBottom: 24, display: "inline-block" }}>
        <span
          style={{
            fontFamily: fonts.hand,
            fontSize: numHeaderFontSize,
            fontWeight: 700,
            color: theme.pivot,
            letterSpacing: "0.02em",
          }}
        >
          {title}
        </span>
        <div style={{ position: "absolute", left: 0, top: numHeaderFontSize + 2, pointerEvents: "none" }}>
          <RoughLine
            shape={{
              kind: "line",
              x1: 0,
              y1: 6,
              x2: Math.round(numHeaderFontSize * 3.2),
              y2: 8,
            }}
            width={Math.round(numHeaderFontSize * 3.2) + 10}
            height={16}
            stroke={theme.pivot}
            strokeWidth={3}
          />
        </div>
      </div>

      {/* 2. Stacked Variable Rows */}
      <div style={{ display: "flex", flexDirection: "column", gap }}>
        {displayItems.map((item, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              alignItems: "baseline",
              fontFamily: fonts.hand,
              fontSize: numItemFontSize,
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            {/* Label */}
            <span style={{ color: item.labelColor ?? theme.chalkText }}>
              {item.label}
            </span>

            {/* Equals separator */}
            <span style={{ color: theme.chalkText, margin: "0 10px" }}>
              =
            </span>

            {/* Value */}
            <span
              style={{
                color: item.valueColor ?? theme.pivot,
                fontWeight: 800,
              }}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
