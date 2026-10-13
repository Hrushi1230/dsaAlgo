import React, { useMemo } from "react";
import { theme, fonts, typographyMobile } from "../lib/theme";

export interface CodeToken {
  text: string;
  color?: string;
}

export interface CodeLineItem {
  num: number;
  text: string;
  tokens?: CodeToken[];
}

export interface ChalkBoardNativeCodeProps {
  /** Array of structured lines or a multiline raw string */
  code?: string;
  /** Explicit line definitions with optional per-token colors or string array */
  lines?: CodeLineItem[] | string[];
  /** 1-based active line number (or array of active line numbers) */
  activeLine?: number | number[];
  /** Alias for activeLine (backward compatibility) */
  highlightLine?: number | number[];
  /** Optional file title / tab label displayed above code */
  title?: string;
  /** Whether to render line numbers in the left gutter (default: true) */
  showLineNumbers?: boolean;
  /** Custom font size (default: 32px for mobile readability) */
  fontSize?: number;
  /** Custom line height (default: 42px) */
  lineHeight?: number;
  /** Starting line number (default: 1) */
  startLineNum?: number;
  /** Highlight border color for active line (default: theme.pivot / #FFD166) */
  activeBorderColor?: string;
  /** Highlight background tint for active line (default: rgba(255, 209, 102, 0.12)) */
  activeBgColor?: string;
  /** Pointer symbol for active line (default: "▶") */
  pointerSymbol?: string;
  /** Maximum 1-based line number revealed (spoiler-free audio-synced reveal) */
  maxVisibleLine?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Standard Python & Java keyword syntax tokenizer for board-native code
 */
function tokenizeLine(lineText: string): CodeToken[] {
  // Regex splitting on word boundaries, strings, and operators
  const tokenRegex = /(#.*$|\/\/.*$)|(".*?"|'.*?')|\b(class|public|static|void|int|def|for|while|if|else|elif|return|in|range|len|and|or|not|True|False|None|self)\b|\b(\d+)\b|([{}()[\],;:=+\-*\/><!&|%])|(\s+)|([a-zA-Z_]\w*)/g;
  
  const tokens: CodeToken[] = [];
  let match: RegExpExecArray | null;

  while ((match = tokenRegex.exec(lineText)) !== null) {
    const [full, comment, str, keyword, num, punct, whitespace, ident] = match;

    if (comment) {
      tokens.push({ text: full, color: theme.chalkDim });
    } else if (str) {
      tokens.push({ text: full, color: theme.good });
    } else if (keyword) {
      // Keywords highlighted in Ice Cyan (#5CE1E6) or Amber Gold (#FFD166)
      const isControl = /^(for|while|if|else|elif|return)$/.test(full);
      tokens.push({ text: full, color: isControl ? theme.cyan : theme.pivot });
    } else if (num) {
      tokens.push({ text: full, color: theme.warn });
    } else if (punct) {
      tokens.push({ text: full, color: theme.chalkLine });
    } else if (whitespace) {
      tokens.push({ text: full });
    } else if (ident) {
      tokens.push({ text: full, color: theme.chalkText });
    } else {
      tokens.push({ text: full, color: theme.chalkText });
    }
  }

  return tokens.length > 0 ? tokens : [{ text: lineText, color: theme.chalkText }];
}

/**
 * ChalkBoardNativeCode — Production Mobile-First Board-Native Monospace Code Renderer.
 * 
 * Directly renders syntax-highlighted code on Oxford Chalkboard Green with:
 * - Line numbers in dimmed chalk
 * - Solid gold "▶" pointer on active line
 * - Rounded gold highlight box with subtle translucent glow
 * - No dark IDE container or macOS window chrome
 * 
 * Modeled after canonical visual reference: REF_MOBILE_STYLE_CODE_FRAME.png
 */
export const ChalkBoardNativeCode: React.FC<ChalkBoardNativeCodeProps> = ({
  code,
  lines,
  activeLine,
  highlightLine,
  title,
  showLineNumbers = true,
  fontSize = typographyMobile.code,
  lineHeight = typographyMobile.lineHeightCode,
  startLineNum = 1,
  activeBorderColor = theme.pivot,
  activeBgColor = "rgba(255, 209, 102, 0.12)",
  pointerSymbol = "▶",
  maxVisibleLine,
  className,
  style,
}) => {
  const parsedLines: CodeLineItem[] = useMemo(() => {
    let raw: CodeLineItem[] = [];
    if (lines && lines.length > 0) {
      if (typeof lines[0] === "string") {
        raw = (lines as string[]).map((text, idx) => ({
          num: startLineNum + idx,
          text,
          tokens: tokenizeLine(text),
        }));
      } else {
        raw = lines as CodeLineItem[];
      }
    } else if (code) {
      const rawLines = code.split("\n");
      raw = rawLines.map((text, idx) => ({
        num: startLineNum + idx,
        text,
        tokens: tokenizeLine(text),
      }));
    }

    if (maxVisibleLine !== undefined) {
      return raw.filter((l) => l.num <= maxVisibleLine);
    }
    return raw;
  }, [code, lines, startLineNum, maxVisibleLine]);

  const targetActiveLine = activeLine ?? highlightLine;
  const activeSet = useMemo(() => {
    if (targetActiveLine === undefined || targetActiveLine === null) return new Set<number>();
    if (Array.isArray(targetActiveLine)) return new Set(targetActiveLine);
    return new Set([targetActiveLine]);
  }, [targetActiveLine]);

  const numFontSize =
    typeof fontSize === "number"
      ? fontSize
      : (fontSize as any)?.fontSize ?? typographyMobile.codeSize ?? 30;

  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        fontFamily: fonts.mono,
        fontSize: numFontSize,
        lineHeight: `${lineHeight}px`,
        color: theme.chalkText,
        userSelect: "none",
        ...style,
      }}
    >
      {title && (
        <div
          style={{
            fontFamily: fonts.hand,
            fontSize: 28,
            color: theme.chalkDim,
            marginBottom: 14,
            letterSpacing: "0.02em",
          }}
        >
          {title}
        </div>
      )}
      {parsedLines.map((line) => {
        const isActive = activeSet.has(line.num);
        const tokens = line.tokens ?? tokenizeLine(line.text);

        return (
          <div
            key={line.num}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              minHeight: lineHeight,
              padding: "2px 0",
            }}
          >
            {/* 1. Left Active Indicator Pointer (▶) */}
            <div
              style={{
                width: 32,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: activeBorderColor,
                fontSize: numFontSize * 0.75,
                opacity: isActive ? 1 : 0,
                transition: "opacity 0.15s ease",
                marginRight: 6,
                flexShrink: 0,
              }}
            >
              {pointerSymbol}
            </div>

            {/* 2. Line Number Gutter */}
            {showLineNumbers && (
              <div
                style={{
                  width: 36,
                  textAlign: "right",
                  paddingRight: 16,
                  color: isActive ? theme.chalkText : theme.chalkDim,
                  fontWeight: isActive ? 700 : 400,
                  fontSize: numFontSize * 0.85,
                  flexShrink: 0,
                }}
              >
                {line.num}
              </div>
            )}

            {/* 3. Code Content (with active highlight pill) */}
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                flex: 1,
                padding: "2px 10px",
                borderRadius: 6,
                border: isActive ? `2px solid ${activeBorderColor}` : "2px solid transparent",
                backgroundColor: isActive ? activeBgColor : "transparent",
                boxShadow: isActive ? `0 0 12px rgba(255, 209, 102, 0.2)` : "none",
                whiteSpace: "pre",
              }}
            >
              {tokens.map((tok, tIdx) => (
                <span
                  key={tIdx}
                  style={{
                    color: tok.color ?? theme.chalkText,
                    fontWeight: isActive && tok.color === theme.pivot ? 700 : 400,
                  }}
                >
                  {tok.text}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
