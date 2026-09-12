import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { evolvePath } from "@remotion/paths";
import { SVG_PATHS } from "../utils/svgPaths";
import { INTRO_CONSTANTS } from "../types";
import indigoDrybrush from "../assets/intro-japanese/06-paint/28-indigo-drybrush.webp";

/**
 * EnsoCircle Component (F232–F299)
 * Open indigo enso brush circle draws around the identity center (960, 520).
 * Path draws 0% -> 100% over F232-F243.
 * 15fps line boil (variants 09..12) swaps every 2 frames.
 * Upper-right gap remains strictly open.
 * Textured with 28-indigo-drybrush.
 */
export const EnsoCircle: React.FC = () => {
  const frame = useCurrentFrame();

  if (frame < 232 || frame > 299) {
    return null;
  }

  // F232-F248: Enso draw progress (0 -> 1) per Section 11
  const drawProgress = interpolate(frame, [232, 248], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 15fps variant swap (A, B, C, D)
  const boilIndex = Math.floor(frame / 2) % 4;
  const currentVariant = SVG_PATHS.ENSO[boilIndex];

  // Evolve enso stroke path
  const mainEvolved = evolvePath(drawProgress, currentVariant.main);

  // Perceptual contour breath post-settle (F258-F269: 6% strength)
  const breath =
    frame >= 248 && frame <= 269
      ? Math.sin(frame * 0.3) * 0.8
      : 0;

  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <div
        style={{
          position: "absolute",
          left: INTRO_CONSTANTS.ENSO.CENTER_X - 440,
          top: INTRO_CONSTANTS.ENSO.CENTER_Y - 370,
          width: 880,
          height: 740,
          transform: `scale(${1 + breath * 0.003})`,
          transformOrigin: "center center",
        }}
      >
        <svg
          viewBox="0 0 1280 1080"
          style={{
            width: "100%",
            height: "100%",
            overflow: "visible",
          }}
        >
          <defs>
            <mask id="enso-drybrush-mask">
              <rect width="1280" height="1080" fill="#FFFFFF" />
              <image
                href={indigoDrybrush}
                width="1280"
                height="1080"
                preserveAspectRatio="none"
                opacity="0.75"
                style={{ mixBlendMode: "multiply" }}
              />
            </mask>
          </defs>

          <g mask="url(#enso-drybrush-mask)">
            {/* Open Enso Calligraphic Stroke (reduced 24% thickness) */}
            <path
              d={currentVariant.main}
              fill="none"
              stroke={INTRO_CONSTANTS.COLORS.INDIGO_STROKE}
              strokeWidth={Math.round(currentVariant.width * 0.76)}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={mainEvolved.strokeDasharray}
              strokeDashoffset={mainEvolved.strokeDashoffset}
            />

            {/* Faint secondary harmonic line */}
            <path
              d={currentVariant.main}
              fill="none"
              stroke={INTRO_CONSTANTS.COLORS.BLUE_PENCIL}
              strokeOpacity="0.25"
              strokeWidth="9"
              strokeLinecap="round"
              strokeDasharray={mainEvolved.strokeDasharray}
              strokeDashoffset={mainEvolved.strokeDashoffset}
            />

            {/* Endpoint brush deposit dot */}
            {drawProgress > 0.95 && (
              <circle
                cx={currentVariant.dot.cx}
                cy={currentVariant.dot.cy}
                r={currentVariant.dot.r}
                fill={INTRO_CONSTANTS.COLORS.VERMILION_CEL}
                opacity="0.8"
              />
            )}
          </g>
        </svg>
      </div>
    </AbsoluteFill>
  );
};
