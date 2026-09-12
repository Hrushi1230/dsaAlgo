import React from "react";
import { AbsoluteFill, Img, interpolate, useCurrentFrame } from "remotion";
import washiPaper from "../assets/intro-japanese/01-textures/01-washi-paper.webp";
import paperFibers from "../assets/intro-japanese/01-textures/02-paper-fibers.webp";
import graphiteGrain from "../assets/intro-japanese/01-textures/03-graphite-grain.webp";
import dryInkTexture from "../assets/intro-japanese/01-textures/04-dry-ink-texture.webp";
import { INTRO_CONSTANTS } from "../types";

/**
 * PaperWorld Component (F000–F299)
 * Establishes warm washi sheet, fibers rising 0%→4%, graphite grain 0%→2.5%,
 * and subtle paper-fiber drift < 0.5px.
 */
export const PaperWorld: React.FC = () => {
  const frame = useCurrentFrame();

  // F000-F007: fibers rise 0% -> 4%
  const fibersOpacity = interpolate(frame, [0, 7], [0, 0.04], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // F000-F007: graphite grain rises 0% -> 2.5%
  const graphiteOpacity = interpolate(frame, [0, 7], [0, 0.025], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Paper-fiber drift < 0.5px across entire 300 frames (Section 7, F258)
  const driftX = interpolate(frame, [0, 299], [0, 0.4], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const driftY = interpolate(frame, [0, 299], [0, 0.3], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: INTRO_CONSTANTS.COLORS.WASHI_BG,
        overflow: "hidden",
      }}
    >
      {/* 01 Washi Paper Base Texture (opacity 0.96) */}
      <Img
        src={washiPaper}
        alt="Washi paper base"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1920,
          height: 1080,
          opacity: 0.96,
          objectFit: "cover",
          pointerEvents: "none",
        }}
      />

      {/* 02 Paper Fibers Texture (drifting < 0.5px) */}
      <Img
        src={paperFibers}
        alt="Paper fibers"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1920,
          height: 1080,
          opacity: fibersOpacity,
          transform: `translate3d(${driftX}px, ${driftY}px, 0)`,
          objectFit: "cover",
          mixBlendMode: "multiply",
          pointerEvents: "none",
        }}
      />

      {/* 03 Graphite Grain Texture */}
      <Img
        src={graphiteGrain}
        alt="Graphite grain"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1920,
          height: 1080,
          opacity: graphiteOpacity,
          objectFit: "cover",
          mixBlendMode: "multiply",
          pointerEvents: "none",
        }}
      />

      {/* 04 Dry Ink Texture (subtle background tooth) */}
      <Img
        src={dryInkTexture}
        alt="Dry ink texture"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1920,
          height: 1080,
          opacity: 0.03,
          objectFit: "cover",
          mixBlendMode: "multiply",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
