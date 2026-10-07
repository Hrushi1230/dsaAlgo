import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { theme, fonts } from "../lib/theme";

export interface ChalkCodeToken {
  text: string;
  color?: string;
}

export interface ChalkCodeLine {
  num: number;
  text: string;
  indent?: number;
  startFrame: number;
  endFrame: number;
  tokens?: ChalkCodeToken[];
}

export interface ChalkCodeEditorV2Props {
  /** List of code lines with exact startFrame/endFrame anchors */
  lines: ChalkCodeLine[];
  /** Currently active line number(s) to highlight */
  activeLineNums?: number[];
  /** Hot line number with warning/critical highlight (optional) */
  hotLineNum?: number;
  /** Label for hot line tag (default: "HOT LINE") */
  hotLineTag?: string;
  /** Editor title bar filename */
  title?: string;
  /** Language tag in top-right of editor */
  language?: string;
  /** Container width (default: "100%") */
  width?: number | string;
  /** Container height (default: "100%") */
  height?: number | string;
  /** Font size in pixels (default: 15) */
  fontSize?: number;
  /** Line height in pixels (default: 28) */
  lineHeight?: number;
  /** Indent width in pixels (default: 22) */
  indentWidth?: number;
  /** Scale animation for editor entry (default: 1) */
  scale?: number;
  /** Opacity animation for editor entry (default: 1) */
  opacity?: number;
  /** Vertical scroll translation offset in pixels (default: 0) */
  scrollY?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Progressively slices tokens character-by-character up to maxChars
 */
function renderProgressiveTokens(
  tokens: ChalkCodeToken[],
  maxChars: number,
  fallbackText: string
): React.ReactNode {
  if (!tokens || tokens.length === 0) {
    return <span>{fallbackText.slice(0, maxChars)}</span>;
  }

  let charsLeft = maxChars;
  return tokens.map((token, idx) => {
    if (charsLeft <= 0) return null;
    const visibleText = token.text.slice(0, charsLeft);
    charsLeft -= visibleText.length;
    return (
      <span key={idx} style={{ color: token.color ?? theme.chalkText }}>
        {visibleText}
      </span>
    );
  });
}

/**
 * ChalkCodeEditorV2 — Canonical Production Code Component.
 *
 * Rules:
 * 1. Future code lines remain 100% HIDDEN (no spoilers).
 * 2. Active line appears only when narration reaches startFrame.
 * 3. Line types character-by-character from startFrame to endFrame.
 * 4. Deterministic blinking cursor on the active line.
 * 5. Full green-board chalkboard aesthetic.
 */
export const ChalkCodeEditorV2: React.FC<ChalkCodeEditorV2Props> = ({
  lines,
  activeLineNums = [],
  hotLineNum,
  hotLineTag = "HOT LINE",
  title = "solution.py",
  language = "PYTHON 3.11",
  width = "100%",
  height = "100%",
  fontSize = 15,
  lineHeight = 28,
  indentWidth = 22,
  scale = 1,
  opacity = 1,
  scrollY,
  className,
  style,
}) => {
  const frame = useCurrentFrame();

  // Deterministic 15-frame cursor blink cycle
  const cursorBlink = Math.floor(frame / 15) % 2 === 0;

  // Auto-compute scroll offset if scrollY is not explicitly supplied
  let computedScrollY = 0;
  if (scrollY === undefined || scrollY === null) {
    const activeLineIndex = lines.findIndex(
      (l) => frame >= l.startFrame && frame <= l.endFrame + 20
    );
    const latestVisibleIdx =
      activeLineIndex !== -1
        ? activeLineIndex
        : lines.reduce((latest, l, idx) => (frame >= l.startFrame ? idx : latest), -1);

    if (latestVisibleIdx >= 0) {
      const lineTop = latestVisibleIdx * (lineHeight + 2);
      const approxHeight = typeof height === "number" ? height : 750;
      const viewportHeight = approxHeight - 100;
      const threshold = viewportHeight * 0.65;
      if (lineTop > threshold) {
        computedScrollY = lineTop - viewportHeight * 0.45;
      }
    }
  }

  const effectiveScrollY = scrollY !== undefined && scrollY !== null ? scrollY : computedScrollY;

  return (
    <div
      className={className}
      style={{
        width,
        height,
        borderRadius: 18,
        backgroundColor: "rgba(7, 24, 17, 0.97)",
        border: "2px solid rgba(248, 246, 240, 0.28)",
        boxShadow:
          "0 20px 50px rgba(0, 0, 0, 0.75), 0 0 35px rgba(6, 214, 160, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.12)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        transform: `scale(${scale})`,
        opacity,
        userSelect: "none",
        ...style,
      }}
    >
      {/* 1. Header Title Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "13px 20px",
          borderBottom: "1.5px solid rgba(255, 253, 247, 0.16)",
          backgroundColor: "rgba(5, 18, 13, 0.9)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "#FF5F56",
              border: "1px solid rgba(255, 95, 86, 0.4)",
              boxShadow: "0 0 6px rgba(255, 95, 86, 0.4)",
              display: "inline-block",
            }}
          />
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "#FFBD2E",
              border: "1px solid rgba(255, 189, 46, 0.4)",
              boxShadow: "0 0 6px rgba(255, 189, 46, 0.4)",
              display: "inline-block",
            }}
          />
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "#27C93F",
              border: "1px solid rgba(39, 201, 63, 0.4)",
              boxShadow: "0 0 6px rgba(39, 201, 63, 0.4)",
              display: "inline-block",
            }}
          />

          {/* Active File Tab */}
          <div
            style={{
              marginLeft: 14,
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "4px 14px",
              borderRadius: "6px 6px 0 0",
              backgroundColor: "rgba(10, 36, 25, 0.95)",
              border: "1px solid rgba(255, 253, 247, 0.18)",
              borderBottom: "none",
            }}
          >
            <span style={{ fontSize: 13 }}>🐍</span>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 14,
                fontWeight: 800,
                color: "rgba(255, 253, 247, 0.92)",
                letterSpacing: "0.02em",
              }}
            >
              {title}
            </span>
          </div>
        </div>

        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 12,
            fontWeight: 800,
            color: "#6EE7B7",
            letterSpacing: "0.08em",
            padding: "3px 10px",
            borderRadius: 6,
            backgroundColor: "rgba(110, 231, 183, 0.12)",
            border: "1px solid rgba(110, 231, 183, 0.25)",
          }}
        >
          {language}
        </div>
      </div>

      {/* 2. Code Lines Viewport */}
      <div
        style={{
          flex: 1,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            padding: "18px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            fontFamily: fonts.mono,
            fontSize,
            transform: effectiveScrollY ? `translateY(-${effectiveScrollY}px)` : undefined,
            transition: "none",
          }}
        >
          {lines.map((line) => {
            // Rule: Future line is strictly HIDDEN until narration reaches startFrame
            if (frame < line.startFrame) {
              return null;
            }

            // Compute typed characters
            const charsVisible =
              frame >= line.endFrame
                ? line.text.length
                : Math.max(
                    1,
                    Math.floor(
                      interpolate(
                        frame,
                        [line.startFrame, line.endFrame],
                        [1, line.text.length],
                        {
                          extrapolateLeft: "clamp",
                          extrapolateRight: "clamp",
                        }
                      )
                    )
                  );

            const isActiveLine =
              activeLineNums.includes(line.num) ||
              (activeLineNums.length === 0 &&
                frame >= line.startFrame &&
                frame <= line.endFrame + 15);
            const isHotLine = hotLineNum === line.num;
            const isActivelyTyping = frame >= line.startFrame && frame <= line.endFrame;

            return (
              <div
                key={line.num}
                style={{
                  display: "flex",
                  alignItems: "center",
                  minHeight: lineHeight,
                  padding: "1px 8px",
                  borderRadius: 6,
                  backgroundColor: isHotLine
                    ? "rgba(255, 107, 107, 0.20)"
                    : isActiveLine
                    ? "rgba(255, 209, 102, 0.14)"
                    : "transparent",
                  borderLeft: isHotLine
                    ? `4px solid ${theme.warn}`
                    : isActiveLine
                    ? `4px solid ${theme.pivot}`
                    : "4px solid transparent",
                  boxShadow: isHotLine
                    ? "0 0 18px rgba(255, 107, 107, 0.28)"
                    : isActiveLine
                    ? "0 0 14px rgba(255, 209, 102, 0.16)"
                    : "none",
                }}
              >
                {/* Line Number Gutter */}
                <span
                  style={{
                    width: 38,
                    color: isHotLine
                      ? theme.warn
                      : isActiveLine
                      ? theme.pivot
                      : "rgba(255, 253, 247, 0.35)",
                    fontWeight: isActiveLine ? 900 : 500,
                    fontSize: fontSize - 2,
                    textAlign: "right",
                    paddingRight: 14,
                    userSelect: "none",
                  }}
                >
                  {line.num}
                </span>

                {/* Indentation Spacer */}
                {line.indent && line.indent > 0 ? (
                  <span style={{ width: line.indent * indentWidth }} />
                ) : null}

                {/* Progressive Typed Text */}
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    whiteSpace: "pre",
                    color: theme.chalkText,
                    lineHeight: `${lineHeight}px`,
                  }}
                >
                  {line.text === "" ? (
                    <span>&nbsp;</span>
                  ) : (
                    renderProgressiveTokens(line.tokens ?? [], charsVisible, line.text)
                  )}

                  {/* Authentic Typing Cursor */}
                  {isActiveLine &&
                    (isActivelyTyping || (cursorBlink && frame < line.endFrame + 40)) && (
                      <span
                        style={{
                          display: "inline-block",
                          width: 9,
                          height: fontSize + 2,
                          backgroundColor: isHotLine ? theme.warn : theme.pivot,
                          marginLeft: 3,
                          borderRadius: 2,
                          verticalAlign: "middle",
                          boxShadow: isHotLine
                            ? "0 0 10px rgba(255, 107, 107, 0.9)"
                            : "0 0 10px rgba(255, 209, 102, 0.9)",
                        }}
                      />
                    )}
                </span>

                {/* Optional Hot Line Badge */}
                {isHotLine && (
                  <div
                    style={{
                      marginLeft: "auto",
                      padding: "2px 8px",
                      borderRadius: 10,
                      backgroundColor: "rgba(255, 107, 107, 0.25)",
                      border: `1px solid ${theme.warn}`,
                      fontSize: 11,
                      fontWeight: 800,
                      color: theme.warn,
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <span>{hotLineTag}</span>
                    <span>⚡</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
