import React from "react";
import { theme, fonts } from "../../../../kit/lib/theme";
import { RoughBox } from "../../../../kit/components/RoughBox";

export interface BoardHeaderProps {
  title: string;
  badge: string;
  badgeColor?: string;
  seed?: number;
}

/**
 * BoardHeader — Canonical Left-Aligned Chalkboard Header for Question 17.
 *
 * Implements the gold standard layout:
 * - Left: "QUESTION 17 — <TITLE>" in high-contrast chalk cyan & chalk text
 * - Right: Hand-drawn RoughBox chalk pill with zero black fill
 * - Zero collision with optical center & hero stage
 */
export const BoardHeader: React.FC<BoardHeaderProps> = ({
  title,
  badge,
  badgeColor = theme.pivot,
  seed = 42,
}) => {
  const badgeWidth = Math.max(160, badge.length * 11 + 36);

  return (
    <div
      style={{
        position: "absolute",
        top: 32,
        left: 70,
        right: 70,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        zIndex: 20,
      }}
    >
      {/* Left: Course Question & Scene Title */}
      <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
        <span
          style={{
            fontFamily: fonts.display,
            fontSize: 28,
            fontWeight: 800,
            letterSpacing: 2,
            color: theme.cyan,
          }}
        >
          QUESTION 17
        </span>
        <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 24 }}>—</span>
        <span
          style={{
            fontFamily: fonts.hand,
            fontSize: 26,
            color: theme.chalkText,
            letterSpacing: 0.5,
          }}
        >
          {title}
        </span>
      </div>

      {/* Right: Rough Chalk Pill Badge */}
      <div
        style={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "6px 20px",
          minWidth: badgeWidth,
          height: 38,
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0 }}>
          <RoughBox
            width={badgeWidth}
            height={38}
            stroke={badgeColor}
            strokeWidth={1.8}
            roughness={1.1}
            seed={seed}
          />
        </div>
        <span
          style={{
            fontFamily: fonts.mono,
            fontSize: 16,
            color: badgeColor,
            fontWeight: 700,
            letterSpacing: 1,
            whiteSpace: "nowrap",
            zIndex: 1,
          }}
        >
          {badge}
        </span>
      </div>
    </div>
  );
};
