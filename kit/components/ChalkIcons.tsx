import React from "react";
import { theme } from "../lib/theme";
import { CHALK_FILTER_ID } from "../lib/chalk";

export type IconType =
  | "hook"
  | "recall"
  | "predict"
  | "brute"
  | "code"
  | "whynot"
  | "optimal"
  | "misconception"
  | "complexity"
  | "sparkle";

interface ChalkIconProps {
  type: IconType;
  size?: number;
  color?: string;
  strokeWidth?: number;
  animatedProgress?: number; // 0..1 for stroke draw-in
  className?: string;
  style?: React.CSSProperties;
}

export const ChalkIcon: React.FC<ChalkIconProps> = ({
  type,
  size = 32,
  color = theme.pivot,
  strokeWidth = 2.5,
  animatedProgress = 1,
  style,
}) => {
  const dashOffset = (1 - Math.max(0, Math.min(1, animatedProgress))) * 100;

  const renderIconPaths = () => {
    switch (type) {
      case "hook":
        // Handcrafted Fishing / Catch Hook with Eyelet
        return (
          <g>
            {/* Eyelet ring */}
            <circle cx="16" cy="7" r="3.5" fill="none" stroke={color} strokeWidth={strokeWidth} />
            {/* Main Hook Shank */}
            <path
              d="M 16 10.5 L 16 20 C 16 26 24 27 25 21 C 25.5 17 21 16 19.5 18"
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Barb arrow */}
            <path
              d="M 19 18 L 22.5 18.5"
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
          </g>
        );

      case "recall":
        // Spaced Repetition Dual Refresh Cycle
        return (
          <g>
            {/* Top arc */}
            <path
              d="M 8 16 A 9 9 0 0 1 24 10"
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M 20 6 L 25 10 L 20 13"
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Bottom arc */}
            <path
              d="M 24 16 A 9 9 0 0 1 8 22"
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M 12 26 L 7 22 L 12 19"
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        );

      case "predict":
        // Stopwatch / Countdown Timer
        return (
          <g>
            {/* Top button */}
            <path
              d="M 13.5 4 L 18.5 4"
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M 16 4 L 16 7"
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            {/* Clock body */}
            <circle cx="16" cy="18" r="10" fill="none" stroke={color} strokeWidth={strokeWidth} />
            {/* Clock hand pointing to challenge */}
            <path
              d="M 16 18 L 16 12"
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M 16 18 L 20.5 18"
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
          </g>
        );

      case "brute":
        // Nested Loops / All-Pairs Matrix Exploration
        return (
          <g>
            {/* Outer loop arrow */}
            <path
              d="M 6 12 A 10 10 0 1 1 12 25"
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M 13 21 L 12 26 L 7 24"
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Inner nested loop */}
            <circle cx="16" cy="16" r="4.5" fill="none" stroke={color} strokeWidth={strokeWidth} strokeDasharray="3 2" />
            <circle cx="16" cy="16" r="1.5" fill={color} />
          </g>
        );

      case "code":
        // Terminal Code Editor Brackets </>
        return (
          <g>
            {/* Left bracket */}
            <path
              d="M 11 9 L 4 16 L 11 23"
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Right bracket */}
            <path
              d="M 21 9 L 28 16 L 21 23"
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Slash */}
            <path
              d="M 18 7 L 14 25"
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
          </g>
        );

      case "whynot":
        // Exponential Complexity Curve with Lightning Strike
        return (
          <g>
            {/* Graph Axes */}
            <path
              d="M 6 6 L 6 26 L 26 26"
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            {/* Steep n^2 growth curve */}
            <path
              d="M 6 25 Q 16 23 25 8"
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            {/* Danger node */}
            <circle cx="24.5" cy="8.5" r="2.5" fill={color} />
          </g>
        );

      case "optimal":
        // Bullseye Target with Instant Crosshair Direct Match
        return (
          <g>
            {/* Outer Target Circle */}
            <circle cx="16" cy="16" r="11" fill="none" stroke={color} strokeWidth={strokeWidth} />
            {/* Inner Center Circle */}
            <circle cx="16" cy="16" r="5" fill="none" stroke={color} strokeWidth={strokeWidth} />
            {/* Center Bullseye Dot */}
            <circle cx="16" cy="16" r="2" fill={color} />
            {/* Crosshair ticks */}
            <path d="M 16 2 L 16 6" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
            <path d="M 16 26 L 16 30" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
            <path d="M 2 16 L 6 16" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
            <path d="M 26 16 L 30 16" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
          </g>
        );

      case "misconception":
        // Warning Chalk Shield / Question Trap
        return (
          <g>
            {/* Warning Hazard Triangle */}
            <path
              d="M 16 4 L 29 27 L 3 27 Z"
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Exclamation point */}
            <path
              d="M 16 12 L 16 19"
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle cx="16" cy="23.5" r="1.5" fill={color} />
          </g>
        );

      case "complexity":
        // Mastery Network / Multi-Node Practice Graph
        return (
          <g>
            {/* Connected Graph Nodes */}
            <line x1="8" y1="18" x2="16" y2="8" stroke={color} strokeWidth={strokeWidth * 0.8} />
            <line x1="24" y1="18" x2="16" y2="8" stroke={color} strokeWidth={strokeWidth * 0.8} />
            <line x1="8" y1="18" x2="24" y2="18" stroke={color} strokeWidth={strokeWidth * 0.8} />
            <line x1="16" y1="8" x2="16" y2="26" stroke={color} strokeWidth={strokeWidth * 0.8} />

            <circle cx="16" cy="8" r="3.5" fill="none" stroke={color} strokeWidth={strokeWidth} />
            <circle cx="8" cy="18" r="3.5" fill="none" stroke={color} strokeWidth={strokeWidth} />
            <circle cx="24" cy="18" r="3.5" fill="none" stroke={color} strokeWidth={strokeWidth} />
            <circle cx="16" cy="26" r="2.5" fill={color} />
          </g>
        );

      case "sparkle":
      default:
        // 4-point Chalk Starburst
        return (
          <g>
            <path
              d="M 16 3 Q 16 16 3 16 Q 16 16 16 29 Q 16 16 29 16 Q 16 16 16 3 Z"
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="16" cy="16" r="1.5" fill={color} />
          </g>
        );
    }
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      style={{
        filter: `url(#${CHALK_FILTER_ID})`,
        overflow: "visible",
        strokeDasharray: 100,
        strokeDashoffset: dashOffset,
        ...style,
      }}
    >
      {renderIconPaths()}
    </svg>
  );
};
