import React from "react";
import { theme, fonts, typographyMobile } from "../../../../kit/lib/theme";
import { RoughLine } from "../../../../kit/components/RoughLine";

export interface BoardHeaderMobileProps {
  variant?: "trace" | "code" | "simple";
  title?: string;
  subtitle?: string | React.ReactNode;
  badge?: string;
  badgeColor?: string;
  stepBadge?: string;
  stepTitle?: string;
  algorithmName?: string;
  difficulty?: string;
}

/**
 * BoardHeaderMobile — Canonical Header Component for Q18.
 * Replicates exact layout of REF_MOBILE_STYLE_TRACE_FRAME.png & REF_MOBILE_STYLE_CODE_FRAME.png
 */
export const BoardHeaderMobile: React.FC<BoardHeaderMobileProps> = ({
  variant = "trace",
  title = "First Missing Positive",
  subtitle = "Given an unsorted integer array nums, find the smallest missing positive integer.",
  badge = "LEETCODE 41",
  badgeColor = theme.cyan,
  stepBadge,
  stepTitle,
  algorithmName,
  difficulty,
}) => {
  const displayTitle = stepTitle ?? title;
  const displayBadge = stepBadge ?? badge;
  const displaySubtitle = algorithmName ?? subtitle;
  if (variant === "code") {
    return (
      <div style={{ position: "absolute", top: 40, left: 60, right: 60, zIndex: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ position: "relative", display: "inline-block" }}>
            <span
              style={{
                fontFamily: fonts.hand,
                fontSize: 48,
                fontWeight: 800,
                color: theme.chalkText,
                letterSpacing: "0.02em",
              }}
            >
              <span style={{ color: theme.pivot }}>PROBLEM</span> — FIRST MISSING POSITIVE
            </span>
            <div style={{ position: "absolute", left: 0, bottom: -6, pointerEvents: "none" }}>
              <RoughLine
                shape={{ kind: "line", x1: 0, y1: 4, x2: 700, y2: 6 }}
                width={720}
                height={12}
                stroke={theme.chalkLine}
                strokeWidth={2.5}
              />
            </div>
          </div>

          {/* Capsule Pill Badge */}
          <div
            style={{
              padding: "6px 24px",
              borderRadius: 24,
              border: `2.5px solid ${badgeColor}`,
              fontFamily: fonts.hand,
              fontSize: 28,
              fontWeight: 800,
              color: theme.chalkText,
              letterSpacing: "0.04em",
              backgroundColor: "rgba(92, 225, 230, 0.08)",
            }}
          >
            {displayBadge}
          </div>
        </div>

        {/* Subtitle */}
        {displaySubtitle && (
          <div
            style={{
              marginTop: 18,
              fontFamily: fonts.hand,
              fontSize: 32,
              color: theme.chalkText,
              lineHeight: 1.3,
            }}
          >
            {typeof displaySubtitle === "string" ? (
              <span>{displaySubtitle}</span>
            ) : (
              displaySubtitle
            )}
          </div>
        )}
      </div>
    );
  }

  // Variant "trace" or "simple"
  return (
    <div
      style={{
        position: "absolute",
        top: 45,
        left: 60,
        right: 60,
        display: "flex",
        alignItems: "center",
        gap: 36,
        zIndex: 10,
      }}
    >
      {/* Left Hero Title */}
      <div style={{ position: "relative", display: "inline-block", flexShrink: 0 }}>
        <span
          style={{
            fontFamily: fonts.hand,
            fontSize: (typographyMobile.title as any)?.fontSize ?? typographyMobile.titleSize ?? 56,
            fontWeight: 800,
            color: theme.chalkText,
            letterSpacing: "0.02em",
          }}
        >
          {displayTitle}
        </span>
        <div style={{ position: "absolute", left: 0, bottom: -10, pointerEvents: "none" }}>
          <RoughLine
            shape={{
              kind: "line",
              x1: 0,
              y1: 4,
              x2: Math.max(380, Math.min(950, (displayTitle || "").length * 28)),
              y2: 6,
            }}
            width={Math.max(400, Math.min(970, (displayTitle || "").length * 28 + 20))}
            height={14}
            stroke={theme.pivot}
            strokeWidth={3.5}
          />
        </div>
      </div>

      {/* Vertical Divider */}
      <div
        style={{
          height: 75,
          width: 2.5,
          backgroundColor: "rgba(232, 228, 213, 0.45)",
          flexShrink: 0,
        }}
      />

      {/* Right Problem Subheader */}
      {displaySubtitle && (
        <div
          style={{
            ...typographyMobile.problemText,
            color: theme.chalkText,
            lineHeight: 1.25,
          }}
        >
          {typeof displaySubtitle === "string" ? (
            <span>{displaySubtitle}</span>
          ) : (
            displaySubtitle
          )}
        </div>
      )}
    </div>
  );
};
