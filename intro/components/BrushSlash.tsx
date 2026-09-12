import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { evolvePath } from "@remotion/paths";
import { SVG_PATHS } from "../utils/svgPaths";
import { INTRO_CONSTANTS } from "../types";
import indigoDrybrush from "../assets/intro-japanese/06-paint/28-indigo-drybrush.webp";

/**
 * BrushSlash Component (F024–F063)
 * Hero indigo brush slash attack across the sheet.
 * Positioned closer to center-left (start x≈180, y≈430; end x≈980, y≈330; rotation ≈ -8°).
 * Motion:
 *   F024–F028: Tip contact
 *   F028–F040: Path draws 0 -> 78%
 *   F040–F048: Path draws 78 -> 100%
 *   F048–F052: Tail settles & stroke holds
 *   F052–F063: Central body freezes and fades toward 18% as structural brackets emerge.
 */
export const BrushSlash: React.FC = () => {
  const frame = useCurrentFrame();

  if (frame < 24 || frame > 63) {
    return null;
  }

  // F024-F048: Path draw progress per Section 1 (F30) & Section 4
  let drawProgress = 0;
  if (frame < 24) {
    drawProgress = 0;
  } else if (frame <= 28) {
    drawProgress = interpolate(frame, [24, 28], [0, 0.05], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  } else if (frame <= 40) {
    drawProgress = interpolate(frame, [28, 40], [0.05, 0.78], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  } else if (frame <= 48) {
    drawProgress = interpolate(frame, [40, 48], [0.78, 1.0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  } else {
    drawProgress = 1.0;
  }

  // Overall opacity: 100% until F052, fades to 18% by F060, vanishes by F063
  const opacity = interpolate(
    frame,
    [24, 25, 52, 60, 63],
    [0, 1, 1, 0.18, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // 15fps variant swap (swaps every 2 frames between 0, 1, 2, 3)
  const boilIndex = Math.floor(frame / 2) % 4;
  const currentVariant = SVG_PATHS.BRUSH_SLASH[boilIndex];

  // Evolve main stroke path
  const mainEvolved = evolvePath(drawProgress, currentVariant.main);
  const sub1Evolved = evolvePath(drawProgress, currentVariant.sub1);
  const sub2Evolved = evolvePath(drawProgress, currentVariant.sub2);

  return (
    <AbsoluteFill
      style={{
        pointerEvents: "none",
        opacity,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 140,
          left: 100,
          width: 1600,
          height: 520,
          transform: "rotate(-8deg)",
          transformOrigin: "180px 330px",
        }}
      >
        <svg
          viewBox="0 0 1600 520"
          style={{
            width: "100%",
            height: "100%",
            overflow: "visible",
          }}
        >
          <defs>
            <mask id="drybrush-mask">
              <rect width="1600" height="520" fill="#FFFFFF" />
              <image
                href={indigoDrybrush}
                width="1600"
                height="520"
                preserveAspectRatio="none"
                opacity="0.85"
                style={{ mixBlendMode: "multiply" }}
              />
            </mask>
          </defs>

          <g mask="url(#drybrush-mask)">
            {/* Main hero stroke */}
            <path
              d={currentVariant.main}
              fill="none"
              stroke={INTRO_CONSTANTS.COLORS.INDIGO_CLEAN}
              strokeWidth={currentVariant.width}
              strokeLinecap="round"
              strokeDasharray={mainEvolved.strokeDasharray}
              strokeDashoffset={mainEvolved.strokeDashoffset}
            />

            {/* Secondary speed trail */}
            <path
              d={currentVariant.sub1}
              fill="none"
              stroke={INTRO_CONSTANTS.COLORS.INDIGO_STROKE}
              strokeOpacity="0.55"
              strokeWidth="17"
              strokeLinecap="round"
              strokeDasharray={sub1Evolved.strokeDasharray}
              strokeDashoffset={sub1Evolved.strokeDashoffset}
            />

            {/* Fine trailing wisps */}
            <path
              d={currentVariant.sub2}
              fill="none"
              stroke={INTRO_CONSTANTS.COLORS.INDIGO_CLEAN}
              strokeOpacity="0.25"
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray={sub2Evolved.strokeDasharray}
              strokeDashoffset={sub2Evolved.strokeDashoffset}
            />

            {/* Ink splash dots */}
            {drawProgress > 0.4 &&
              currentVariant.dots.map((dot, i) => (
                <circle
                  key={`dot-${i}`}
                  cx={dot.cx}
                  cy={dot.cy}
                  r={dot.r}
                  fill={INTRO_CONSTANTS.COLORS.INDIGO_CLEAN}
                  opacity={dot.opacity}
                />
              ))}
          </g>
        </svg>
      </div>
    </AbsoluteFill>
  );
};
