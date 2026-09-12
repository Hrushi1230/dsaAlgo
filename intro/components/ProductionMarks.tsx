import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { evolvePath } from "@remotion/paths";
import { SVG_PATHS } from "../utils/svgPaths";
import { INTRO_CONSTANTS } from "../types";

/**
 * ProductionMarks Component (F008–F115)
 * Controls registration marks (21), corner crop marks (22), blue pencil grid (23),
 * timing ticks (24), and animator frame-note annotations (25).
 */
export const ProductionMarks: React.FC = () => {
  const frame = useCurrentFrame();

  if (frame < 8 || frame > 285) {
    return null;
  }

  // F008-F015: Peg Registration Draw Progress (0 -> 1)
  const regDrawProgress = interpolate(frame, [8, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // F009-F015: Crop Marks Reveal Progress (0 -> 1)
  const cropProgress = interpolate(frame, [9, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // F016-F112: Blue-Pencil Grid Opacity (7% at F016, fades 7% -> 0% F108-F112)
  const gridOpacity = interpolate(
    frame,
    [15, 16, 108, 112],
    [0, 0.07, 0.07, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // F016-F040: Timing Ticks Opacity (40% F016-020, 28% F021-023, fades out before array)
  const ticksOpacity = interpolate(
    frame,
    [15, 16, 20, 21, 35, 40],
    [0, 0.4, 0.4, 0.28, 0.28, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // F016-F023: Early Frame Note Arrows
  const earlyNoteOpacity = interpolate(frame, [15, 16, 23, 25], [0, 0.7, 0.7, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // F104-F112: Cleanup Production Annotations ("CLEAN-UP/F084" at 42% -> 18% -> 0%)
  const cleanupNoteOpacity = interpolate(
    frame,
    [103, 104, 107, 111, 112],
    [0, 0.42, 0.42, 0.18, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // 15fps line-boil offset for rough pencil jitter
  const boilIndex = Math.floor(frame / 2) % 4;
  const boilJitterX = [0, 0.5, -0.5, 0.3][boilIndex];
  const boilJitterY = [0, -0.4, 0.4, -0.2][boilIndex];

  // Evolved path for registration lines
  const hLineEvolved = evolvePath(regDrawProgress, SVG_PATHS.PEG_REGISTRATION.hLine);
  const vLineEvolved = evolvePath(regDrawProgress, SVG_PATHS.PEG_REGISTRATION.vLine);
  const crossEvolved = evolvePath(regDrawProgress, SVG_PATHS.PEG_REGISTRATION.centerCross);

  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      {/* 23 Blue Pencil Grid (F016-F112) */}
      {gridOpacity > 0 && (
        <svg
          viewBox="0 0 1920 1080"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1920,
            height: 1080,
            opacity: gridOpacity,
          }}
        >
          <g fill="none" stroke={INTRO_CONSTANTS.COLORS.BLUE_PENCIL} strokeWidth="2.2" strokeLinecap="round">
            {SVG_PATHS.BLUE_GRID.verticals.map((d, i) => (
              <path key={`v-${i}`} d={d} />
            ))}
            {SVG_PATHS.BLUE_GRID.horizontals.map((d, i) => (
              <path key={`h-${i}`} d={d} />
            ))}
            <circle
              cx={SVG_PATHS.BLUE_GRID.centerCircle.cx}
              cy={SVG_PATHS.BLUE_GRID.centerCircle.cy}
              r={SVG_PATHS.BLUE_GRID.centerCircle.r}
            />
            <path d={SVG_PATHS.BLUE_GRID.centerCross} />
          </g>
        </svg>
      )}

      {/* 22 Crop Marks (F009-F285) */}
      {frame >= 9 && (
        <svg
          viewBox="0 0 1920 1080"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1920,
            height: 1080,
            opacity: interpolate(frame, [9, 15, 269, 285], [0.1, 0.42, 0.42, 0.15], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <g fill="none" stroke={INTRO_CONSTANTS.COLORS.BLUE_PENCIL} strokeWidth="3" strokeLinecap="round">
            {SVG_PATHS.CROP_MARKS.map((d, i) => {
              const evolved = evolvePath(cropProgress, d);
              return (
                <path
                  key={`crop-${i}`}
                  d={d}
                  strokeDasharray={evolved.strokeDasharray}
                  strokeDashoffset={evolved.strokeDashoffset}
                />
              );
            })}
          </g>
        </svg>
      )}

      {/* 21 Peg Registration Marks (F008-F115) */}
      {frame >= 8 && frame <= 115 && (
        <svg
          viewBox="0 0 900 760"
          style={{
            position: "absolute",
            top: 20,
            left: 510,
            width: 900,
            height: 760,
            opacity: interpolate(frame, [8, 15, 108, 115], [0.3, 0.62, 0.62, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <g
            fill="none"
            stroke={INTRO_CONSTANTS.COLORS.BLUE_PENCIL}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d={SVG_PATHS.PEG_REGISTRATION.hLine}
              strokeWidth="3"
              strokeDasharray={hLineEvolved.strokeDasharray}
              strokeDashoffset={hLineEvolved.strokeDashoffset}
              opacity="0.45"
            />
            <path
              d={SVG_PATHS.PEG_REGISTRATION.vLine}
              strokeWidth="3"
              strokeDasharray={vLineEvolved.strokeDasharray}
              strokeDashoffset={vLineEvolved.strokeDashoffset}
              opacity="0.42"
            />
            {regDrawProgress >= 0.5 && (
              <>
                <rect
                  {...SVG_PATHS.PEG_REGISTRATION.leftPeg}
                  strokeWidth="4"
                  opacity={regDrawProgress}
                />
                <circle
                  {...SVG_PATHS.PEG_REGISTRATION.centerPeg}
                  strokeWidth="4"
                  opacity={regDrawProgress}
                />
                <rect
                  {...SVG_PATHS.PEG_REGISTRATION.rightPeg}
                  strokeWidth="4"
                  opacity={regDrawProgress}
                />
                <circle
                  {...SVG_PATHS.PEG_REGISTRATION.centerCircle}
                  strokeWidth="3"
                  opacity={regDrawProgress * 0.55}
                />
              </>
            )}
            <path
              d={SVG_PATHS.PEG_REGISTRATION.centerCross}
              strokeWidth="3"
              strokeDasharray={crossEvolved.strokeDasharray}
              strokeDashoffset={crossEvolved.strokeDashoffset}
              opacity="0.55"
            />
          </g>
        </svg>
      )}

      {/* 24 Timing Ticks (F016-F040) */}
      {ticksOpacity > 0 && (
        <svg
          viewBox="0 0 1920 220"
          style={{
            position: "absolute",
            bottom: 60,
            left: 0,
            width: 1920,
            height: 220,
            opacity: ticksOpacity,
          }}
        >
          <g fill="none" stroke={INTRO_CONSTANTS.COLORS.BLUE_PENCIL} strokeLinecap="round">
            <path d="M80 120 H1840" strokeWidth="3" />
            {Array.from({ length: 31 }, (_, i) => {
              const x = 100 + i * 58;
              const isMajor = i % 4 === 0;
              const isMid = i % 2 === 0;
              const height = isMajor ? 30 : isMid ? 20 : 13;
              return (
                <path
                  key={`tick-${i}`}
                  d={`M${x} 120 V${120 - height}`}
                  strokeWidth={isMajor ? 3 : 2}
                />
              );
            })}
          </g>
        </svg>
      )}

      {/* 25 Early Frame-Note Arrow / Animator Gesture (F016-F023) */}
      {earlyNoteOpacity > 0 && (
        <svg
          viewBox="0 0 1500 620"
          style={{
            position: "absolute",
            top: 240,
            left: 210,
            width: 1500,
            height: 620,
            opacity: earlyNoteOpacity,
            transform: `translate3d(${boilJitterX}px, ${boilJitterY}px, 0)`,
          }}
        >
          <g
            fill="none"
            stroke={INTRO_CONSTANTS.COLORS.BLUE_PENCIL}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d={SVG_PATHS.FRAME_NOTE_ARROWS.arrow1} strokeWidth="6" />
            <path d={SVG_PATHS.FRAME_NOTE_ARROWS.head1} strokeWidth="6" />
            <circle {...SVG_PATHS.FRAME_NOTE_ARROWS.circle} strokeWidth="3" opacity="0.6" />
          </g>
        </svg>
      )}

      {/* F104-F112: Cleanup Annotation "CLEAN-UP/F084" with note arrow pointing to cleaned edge */}
      {cleanupNoteOpacity > 0 && (
        <div
          style={{
            position: "absolute",
            top: 450,
            left: 1410,
            opacity: cleanupNoteOpacity,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            transform: `translate3d(${boilJitterX}px, ${boilJitterY}px, 0)`,
          }}
        >
          <svg viewBox="0 0 100 50" style={{ width: 80, height: 40, overflow: "visible" }}>
            <g
              fill="none"
              stroke={INTRO_CONSTANTS.COLORS.BLUE_PENCIL}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M80 10 C50 15 25 30 10 40" />
              <path d="M10 40 L24 38 M10 40 L16 26" />
            </g>
          </svg>
          <div
            style={{
              color: INTRO_CONSTANTS.COLORS.BLUE_PENCIL,
              fontFamily: "Inter, monospace, sans-serif",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "0.08em",
            }}
          >
            CLEAN-UP / F084
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};
