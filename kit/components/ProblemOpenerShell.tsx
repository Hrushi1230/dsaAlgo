import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";
import { ChalkboardBackground, ChalkFilters, CHALK_FILTER_ID } from "../lib/chalk";
import { theme, fonts } from "../lib/theme";

export interface ProblemOpenerShellProps {
  /** Pattern name / category, e.g. "01 · ARRAYS & HASHING" */
  pattern: string;
  /** LeetCode question number, e.g. 75, "75" */
  leetcodeNumber: number | string;
  /** Difficulty rating */
  difficulty?: "EASY" | "MEDIUM" | "HARD";
  /** Problem title, e.g. "Sort Colors" */
  title: string;
  /** Concise one-line problem goal or task */
  task?: string;
  /** Optional Python/Language function signature */
  signature?: string;
  /** Structure-specific hero visualization (Array, Matrix, Hash, etc.) */
  children?: React.ReactNode;
  /** Frame when opener starts animating */
  startFrame?: number;
  /** Whether to render the chalkboard background & filter definitions */
  showBackground?: boolean;
  /** Additional container styles */
  style?: React.CSSProperties;
}

/**
 * ProblemOpenerShell — Shared top-level course problem opener (Foundation V2).
 *
 * Provides authoritative course branding, metadata, title hierarchy, and task framing,
 * while delegating the hero visualization area to data-structure-specific openers
 * (e.g. ArrayProblemOpener, MatrixProblemOpener, HashProblemOpener).
 */
export const ProblemOpenerShell: React.FC<ProblemOpenerShellProps> = ({
  pattern,
  leetcodeNumber,
  difficulty = "MEDIUM",
  title,
  task,
  signature,
  children,
  startFrame = 0,
  showBackground = true,
  style,
}) => {
  const frame = useCurrentFrame();
  const relFrame = Math.max(0, frame - startFrame);

  // Smooth entrance spring physics
  const headerSpring = spring({
    frame: relFrame,
    fps: 30,
    config: { damping: 14, stiffness: 160 },
  });

  const titleSpring = spring({
    frame: Math.max(0, relFrame - 4),
    fps: 30,
    config: { damping: 14, stiffness: 160 },
  });

  const taskSpring = spring({
    frame: Math.max(0, relFrame - 8),
    fps: 30,
    config: { damping: 14, stiffness: 160 },
  });

  const heroSpring = spring({
    frame: Math.max(0, relFrame - 12),
    fps: 30,
    config: { damping: 15, stiffness: 140 },
  });

  // Difficulty color mapping
  const difficultyColor =
    difficulty === "EASY"
      ? theme.good
      : difficulty === "HARD"
      ? theme.warn
      : theme.better;

  return (
    <AbsoluteFill
      style={{
        width: 1920,
        height: 1080,
        backgroundColor: showBackground ? theme.boardBg : "transparent",
        color: theme.chalkText,
        overflow: "hidden",
        ...style,
      }}
    >
      {showBackground && (
        <>
          <ChalkboardBackground />
          <ChalkFilters />
        </>
      )}

      {/* Main Canvas Area */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "36px 80px 48px 80px",
          boxSizing: "border-box",
        }}
      >
        {/* Top Metadata Bar: Pattern & LeetCode info */}
        <div
          style={{
            width: "100%",
            maxWidth: 1600,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            opacity: interpolate(headerSpring, [0, 1], [0, 1]),
            transform: `translateY(${interpolate(headerSpring, [0, 1], [-20, 0])}px)`,
          }}
        >
          {/* Pattern Tag */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "6px 18px",
              borderRadius: 8,
              border: `1.5px solid ${theme.cardBorder}`,
              backgroundColor: "rgba(248, 246, 240, 0.05)",
              fontFamily: fonts.mono,
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "1.5px",
              color: theme.chalkText,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: theme.pivot,
                boxShadow: `0 0 8px ${theme.pivot}`,
              }}
            />
            {pattern.toUpperCase()}
          </div>

          {/* LeetCode Number & Difficulty */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              fontFamily: fonts.mono,
            }}
          >
            <span
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: theme.chalkDim,
                letterSpacing: "1px",
              }}
            >
              LEETCODE {leetcodeNumber}
            </span>
            <span
              style={{
                padding: "4px 14px",
                borderRadius: 6,
                backgroundColor: `${difficultyColor}22`,
                border: `1.5px solid ${difficultyColor}`,
                color: difficultyColor,
                fontSize: 16,
                fontWeight: 800,
                letterSpacing: "1px",
              }}
            >
              {difficulty}
            </span>
          </div>
        </div>

        {/* Title Zone */}
        <div
          style={{
            marginTop: 18,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: interpolate(titleSpring, [0, 1], [0, 1]),
            transform: `translateY(${interpolate(titleSpring, [0, 1], [-15, 0])}px)`,
          }}
        >
          <h1
            style={{
              margin: 0,
              fontFamily: fonts.display,
              fontSize: 76,
              fontWeight: 700,
              letterSpacing: "0.5px",
              color: theme.chalkText,
              filter: `url(#${CHALK_FILTER_ID})`,
              textShadow: `0 0 20px rgba(248, 246, 240, 0.25), 0 2px 4px rgba(0,0,0,0.5)`,
              transform: "rotate(-0.8deg)",
              transformOrigin: "center center",
            }}
          >
            {title}
          </h1>

          {/* Optional Code Signature */}
          {signature && (
            <div
              style={{
                marginTop: 6,
                fontFamily: fonts.code,
                fontSize: 18,
                color: theme.cyan,
                backgroundColor: "rgba(0, 0, 0, 0.25)",
                padding: "4px 16px",
                borderRadius: 6,
                border: `1px solid rgba(92, 225, 230, 0.3)`,
              }}
            >
              {signature}
            </div>
          )}
        </div>

        {/* Task / Instruction Banner */}
        {task && (
          <div
            style={{
              marginTop: 16,
              maxWidth: 1200,
              padding: "10px 32px",
              borderRadius: 12,
              backgroundColor: "rgba(248, 246, 240, 0.06)",
              border: `1.5px solid ${theme.cardBorder}`,
              textAlign: "center",
              opacity: interpolate(taskSpring, [0, 1], [0, 1]),
              transform: `scale(${interpolate(taskSpring, [0, 1], [0.96, 1])})`,
            }}
          >
            <span
              style={{
                fontFamily: fonts.hand,
                fontSize: 32,
                color: theme.chalkText,
                lineHeight: 1.3,
                letterSpacing: "0.5px",
              }}
            >
              {task}
            </span>
          </div>
        )}

        {/* Structure-Specific Hero Area */}
        <div
          style={{
            flex: 1,
            width: "100%",
            maxWidth: 1600,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: interpolate(heroSpring, [0, 1], [0, 1]),
            transform: `scale(${interpolate(heroSpring, [0, 1], [0.95, 1])})`,
            padding: "20px 0",
          }}
        >
          {children}
        </div>
      </div>
    </AbsoluteFill>
  );
};
