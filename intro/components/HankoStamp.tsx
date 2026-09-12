import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { SVG_PATHS } from "../utils/svgPaths";
import { INTRO_CONSTANTS } from "../types";

/**
 * HankoStamp Component (F270–F299)
 * Traditional Japanese red seal (Hanko) stamped onto the lower-right of the sheet.
 * F270-275: Rough stamp impact (scale 0.78 -> 1.08 -> 0.96, rot -3.5° -> 0.6°), pigment dust puff burst.
 * F276-285: Crossfades seamlessly from rough (30) to clean (29), settles 0.96 -> 1.00.
 * Camera refuses to react.
 */
export const HankoStamp: React.FC = () => {
  const frame = useCurrentFrame();

  if (frame < 270 || frame > 299) {
    return null;
  }

  // F270-F273: Impact acceleration (scale 0.78 -> 1.08, rot -3.5deg -> 0.6deg)
  // F274-F275: Impact compression (scale 1.08 -> 0.96)
  // F276-F285: Settle to 1.0
  let stampScale = 1.0;
  let stampRot = 0.0;

  if (frame >= 270 && frame <= 273) {
    stampScale = interpolate(frame, [270, 273], [0.78, 1.08], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    stampRot = interpolate(frame, [270, 273], [-3.5, 0.6], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  } else if (frame >= 274 && frame <= 275) {
    stampScale = interpolate(frame, [274, 275], [1.08, 0.96], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    stampRot = 0.6;
  } else if (frame >= 276 && frame <= 285) {
    stampScale = interpolate(frame, [276, 285], [0.96, 1.0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    stampRot = interpolate(frame, [276, 285], [0.6, 0.0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  }

  // F276-F285: Crossfade from rough (30) to clean (29)
  const roughOpacity = interpolate(frame, [275, 279], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const cleanOpacity = interpolate(frame, [276, 280], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // F271-F275: Pigment dust puff particles
  const dustPuffProgress = interpolate(frame, [271, 275], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const dustOpacity = interpolate(frame, [271, 273, 275], [0, 0.75, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Max 6 radial dust particles per Section 13
  const dustParticles = [
    { angle: 30, dist: 36 },
    { angle: 90, dist: 42 },
    { angle: 150, dist: 38 },
    { angle: 210, dist: 44 },
    { angle: 270, dist: 40 },
    { angle: 330, dist: 39 },
  ];

  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      {/* Pigment Dust Puff on Impact */}
      {dustOpacity > 0 && (
        <svg
          viewBox="0 0 1920 1080"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1920,
            height: 1080,
            opacity: dustOpacity,
          }}
        >
          {dustParticles.map((p, i) => {
            const rad = (p.angle * Math.PI) / 180;
            const currentDist = p.dist * (0.4 + dustPuffProgress * 0.9);
            const px = INTRO_CONSTANTS.HANKO.CENTER_X + Math.cos(rad) * currentDist;
            const py = INTRO_CONSTANTS.HANKO.CENTER_Y + Math.sin(rad) * currentDist;
            return (
              <circle
                key={`dust-${i}`}
                cx={px}
                cy={py}
                r={interpolate(dustPuffProgress, [0, 1], [3.5, 1.5])}
                fill={INTRO_CONSTANTS.COLORS.VERMILION_CEL}
              />
            );
          })}
        </svg>
      )}

      {/* Hanko Seal Mark */}
      <div
        style={{
          position: "absolute",
          left: INTRO_CONSTANTS.HANKO.CENTER_X - INTRO_CONSTANTS.HANKO.SIZE / 2,
          top: INTRO_CONSTANTS.HANKO.CENTER_Y - INTRO_CONSTANTS.HANKO.SIZE / 2,
          width: INTRO_CONSTANTS.HANKO.SIZE,
          height: INTRO_CONSTANTS.HANKO.SIZE,
          transform: `scale(${stampScale}) rotate(${stampRot}deg)`,
          transformOrigin: "center center",
        }}
      >
        {/* 30 Rough Hanko Mark */}
        {roughOpacity > 0 && (
          <svg
            viewBox="0 0 600 600"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: roughOpacity,
            }}
          >
            <g
              fill="none"
              stroke={INTRO_CONSTANTS.COLORS.VERMILION_CEL}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={SVG_PATHS.HANKO_ROUGH.box} strokeWidth="24" />
              <path d={SVG_PATHS.HANKO_ROUGH.c} strokeWidth="25" />
              <path d={SVG_PATHS.HANKO_ROUGH.w} strokeWidth="24" />
              <path d={SVG_PATHS.HANKO_ROUGH.a} strokeWidth="24" />
              {SVG_PATHS.HANKO_ROUGH.dots.map((d, i) => (
                <circle
                  key={`hanko-dot-${i}`}
                  cx={d.cx}
                  cy={d.cy}
                  r={d.r}
                  fill={INTRO_CONSTANTS.COLORS.VERMILION_CEL}
                  stroke="none"
                />
              ))}
            </g>
          </svg>
        )}

        {/* 29 Clean Hanko Mark */}
        {cleanOpacity > 0 && (
          <svg
            viewBox="0 0 600 600"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: cleanOpacity,
            }}
          >
            <g
              fill="none"
              stroke={INTRO_CONSTANTS.COLORS.VERMILION_CEL}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect {...SVG_PATHS.HANKO_CLEAN.box} strokeWidth="22" />
              <path d={SVG_PATHS.HANKO_CLEAN.c} strokeWidth="24" />
              <path d={SVG_PATHS.HANKO_CLEAN.w} strokeWidth="23" />
              <path d={SVG_PATHS.HANKO_CLEAN.a} strokeWidth="23" />
            </g>
          </svg>
        )}
      </div>
    </AbsoluteFill>
  );
};
