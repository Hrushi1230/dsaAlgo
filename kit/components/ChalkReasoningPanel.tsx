import React from "react";
import { theme, fonts, typographyMobile } from "../lib/theme";
import { RoughLine } from "./RoughLine";

export interface ReasoningStepTextSegment {
  text: string;
  color?: string;
  bold?: boolean;
}

export interface ReasoningStepLine {
  segments: (string | ReasoningStepTextSegment)[];
}

export interface ReasoningStepItem {
  /** Step number: 1, 2, 3... (rendered as ①, ②, ③) */
  stepNumber?: number;
  /** Custom badge text or symbol if not using numeric ① */
  badgeText?: string;
  /** Badge color (default: theme.cyan / #5CE1E6) */
  badgeColor?: string;
  /** Stacked lines of text or custom ReactNode */
  content: string | ReasoningStepLine[] | React.ReactNode;
}

export interface ChalkReasoningPanelProps {
  /** Title of the panel (default: "Reasoning") */
  title?: string;
  /** List of reasoning steps to display */
  steps?: ReasoningStepItem[];
  /** Single action title (backward compatibility) */
  currentAction?: string;
  /** Single action details (backward compatibility) */
  details?: string;
  /** Deductive rule key (backward compatibility) */
  ruleKey?: string;
  /** Tone for action badge */
  tone?: "good" | "pivot" | "neutral" | "warn";
  /** Custom header font size (default: 44px) */
  headerFontSize?: number;
  /** Custom step font size (default: 32px) */
  stepFontSize?: number;
  /** Vertical gap between step cards in pixels (default: 26) */
  gap?: number;
  /** Width of the panel (default: "auto") */
  width?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Returns circled number symbol ①, ②, ③, ④...
 */
function getCircledNumber(num?: number): string {
  if (!num) return "①";
  const circledDigits = ["⓪", "①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩"];
  return circledDigits[num] ?? `(${num})`;
}

/**
 * ChalkReasoningPanel — Mobile-First Causal Reasoning Column Component.
 * 
 * Renders the deductive reasoning steps on the right column as seen in REF_MOBILE_STYLE_TRACE_FRAME.png:
 * - "Reasoning" title with yellow hand-drawn underline
 * - Numbered steps with Cyan circled badges (①, ②, ③)
 * - Multi-line high-contrast deduction text
 */
export const ChalkReasoningPanel: React.FC<ChalkReasoningPanelProps> = ({
  title = "Reasoning",
  steps,
  currentAction,
  details,
  ruleKey,
  tone,
  headerFontSize = typographyMobile.sectionHeader,
  stepFontSize = typographyMobile.body,
  gap = 26,
  width = "auto",
  className,
  style,
}) => {
  const effectiveSteps: ReasoningStepItem[] = steps ?? [
    ...(currentAction ? [{
      stepNumber: 1,
      badgeColor: tone === "good" ? theme.good : tone === "warn" ? theme.warn : theme.cyan,
      content: currentAction,
    }] : []),
    ...(details ? [{
      stepNumber: 2,
      badgeColor: theme.pivot,
      content: details,
    }] : []),
    ...(ruleKey ? [{
      stepNumber: 3,
      badgeColor: theme.chalkDim,
      content: ruleKey,
    }] : []),
  ];

  const numHeaderFontSize =
    typeof headerFontSize === "number"
      ? headerFontSize
      : (headerFontSize as any)?.fontSize ?? typographyMobile.sectionHeaderSize ?? 44;

  const numStepFontSize =
    typeof stepFontSize === "number"
      ? stepFontSize
      : (stepFontSize as any)?.fontSize ?? typographyMobile.bodySize ?? 34;

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
              x2: Math.round(numHeaderFontSize * 3.4),
              y2: 8,
            }}
            width={Math.round(numHeaderFontSize * 3.4) + 10}
            height={16}
            stroke={theme.pivot}
            strokeWidth={3}
          />
        </div>
      </div>

      {/* 2. Stacked Reasoning Step Items */}
      <div style={{ display: "flex", flexDirection: "column", gap }}>
        {effectiveSteps.map((step, idx) => {
          const badgeSymbol = step.badgeText ?? getCircledNumber(step.stepNumber ?? idx + 1);
          const badgeColor = step.badgeColor ?? theme.cyan;

          return (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
                fontFamily: fonts.hand,
                fontSize: numStepFontSize,
                lineHeight: 1.3,
              }}
            >
              {/* Circled Number Badge */}
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  border: `2.5px solid ${badgeColor}`,
                  color: badgeColor,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: 800,
                  fontSize: Math.round(numStepFontSize * 0.9),
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                <span>{step.stepNumber ?? idx + 1}</span>
              </div>

              {/* Step Content */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
                {typeof step.content === "string" ? (
                  <span style={{ color: theme.chalkText }}>{step.content}</span>
                ) : Array.isArray(step.content) ? (
                  step.content.map((line, lIdx) => (
                    <div key={lIdx} style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: 6 }}>
                      {line.segments.map((seg, sIdx) => {
                        const isObj = typeof seg !== "string";
                        const text = isObj ? seg.text : seg;
                        const color = isObj && seg.color ? seg.color : theme.chalkText;
                        const isBold = isObj && seg.bold;

                        return (
                          <span
                            key={sIdx}
                            style={{
                              color,
                              fontWeight: isBold ? 800 : 500,
                            }}
                          >
                            {text}
                          </span>
                        );
                      })}
                    </div>
                  ))
                ) : (
                  step.content
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
