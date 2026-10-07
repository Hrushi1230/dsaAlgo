import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { loadFont as loadCaveat } from "@remotion/google-fonts/Caveat";
import { loadFont as loadPermanentMarker } from "@remotion/google-fonts/PermanentMarker";
import { loadFont as loadKalam } from "@remotion/google-fonts/Kalam";

import { ChalkboardBackground, ChalkFilters, CHALK_FILTER_ID, CHALK_FILTER_STRONG_ID } from "../lib/chalk";
import { theme, fonts } from "../lib/theme";
import { RoughLine } from "./RoughLine";

// Initialize font loaders
const { fontFamily: caveatFamily } = loadCaveat();
const { fontFamily: permanentMarkerFamily } = loadPermanentMarker();
const { fontFamily: kalamFamily } = loadKalam();

interface CandidateCardProps {
  letter: "A" | "B" | "C" | "D";
  name: string;
  subtitle: string;
  fontFamily: string;
  fontSize: number;
  fontWeight: number | string;
  letterSpacing?: string;
  filterId?: string;
  tiltDeg?: number;
  seed: number;
  isFullScreen?: boolean;
}

const CandidateCard: React.FC<CandidateCardProps> = ({
  letter,
  name,
  subtitle,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing = "0px",
  filterId = CHALK_FILTER_ID,
  tiltDeg = 0,
  seed,
  isFullScreen = false,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: isFullScreen ? "40px" : "20px",
        boxSizing: "border-box",
        width: isFullScreen ? "100%" : 880,
      }}
    >
      {/* Candidate Identifier Badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          padding: "5px 16px",
          borderRadius: 8,
          backgroundColor: "rgba(248, 246, 240, 0.07)",
          border: `1.5px solid ${theme.cardBorder}`,
          marginBottom: 16,
        }}
      >
        <span
          style={{
            fontFamily: fonts.mono,
            fontSize: 18,
            fontWeight: 800,
            color: theme.pivot,
            backgroundColor: "rgba(255, 209, 102, 0.15)",
            padding: "2px 8px",
            borderRadius: 4,
          }}
        >
          {letter}
        </span>
        <span
          style={{
            fontFamily: fonts.mono,
            fontSize: 16,
            fontWeight: 700,
            color: theme.chalkText,
            letterSpacing: "1px",
          }}
        >
          {name.toUpperCase()}
        </span>
        <span
          style={{
            fontFamily: fonts.hand,
            fontSize: 18,
            color: theme.chalkDim,
          }}
        >
          · {subtitle}
        </span>
      </div>

      {/* Identical Metadata Header Across All 4 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          fontFamily: fonts.mono,
          fontSize: 17,
          fontWeight: 700,
          color: theme.chalkDim,
          letterSpacing: "1.2px",
          marginBottom: 10,
        }}
      >
        <span>PATTERN 01 · ARRAYS &amp; HASHING</span>
        <span style={{ color: theme.cardBorder }}>•</span>
        <span>LEETCODE 217</span>
        <span
          style={{
            padding: "2px 8px",
            borderRadius: 4,
            backgroundColor: `${theme.good}22`,
            border: `1px solid ${theme.good}`,
            color: theme.good,
            fontSize: 14,
            fontWeight: 800,
          }}
        >
          EASY
        </span>
      </div>

      {/* Main Tested Problem Title */}
      <div
        style={{
          transform: tiltDeg !== 0 ? `rotate(${tiltDeg}deg)` : "none",
          transformOrigin: "center center",
          margin: "4px 0",
        }}
      >
        <span
          style={{
            fontFamily,
            fontSize: isFullScreen ? Math.round(fontSize * 1.25) : fontSize,
            fontWeight,
            color: theme.chalkText,
            letterSpacing,
            filter: `url(#${filterId})`,
            textShadow: `0 0 16px rgba(248, 246, 240, 0.25), 0 2px 4px rgba(0,0,0,0.6)`,
            lineHeight: 1.1,
            whiteSpace: "nowrap",
          }}
        >
          Contains Duplicate
        </span>
      </div>

      {/* Chalk RoughLine Underline */}
      <div style={{ marginTop: 2, display: "flex", justifyContent: "center" }}>
        <RoughLine
          shape={{
            kind: "line",
            x1: 10,
            y1: 10,
            x2: isFullScreen ? 540 : 430,
            y2: 10,
          }}
          width={isFullScreen ? 560 : 450}
          height={20}
          stroke={theme.pivot}
          strokeWidth={3.5}
          seed={seed}
          startFrame={0}
          durationInFrames={1}
        />
      </div>

      {/* Tiny Chalk Accent Marks */}
      <div
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          marginTop: 6,
          opacity: 0.75,
        }}
      >
        <span style={{ color: theme.pivot, fontSize: 14 }}>✦</span>
        <span
          style={{
            fontFamily: fonts.mono,
            fontSize: 13,
            color: theme.chalkDim,
            letterSpacing: "1px",
          }}
        >
          IN-PLACE DETECTION
        </span>
        <span style={{ color: theme.pivot, fontSize: 14 }}>✦</span>
      </div>
    </div>
  );
};

/**
 * TitleStudyComparison — Phase 2.1 Display / Brush Title Study Composition.
 *
 * Displays all 4 candidates in a balanced 2x2 comparison grid on the 1920x1080 chalkboard,
 * followed by full-screen views of each candidate for high-res detail inspection.
 */
export const TitleStudyComparison: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: theme.boardBg }}>
      <ChalkboardBackground />
      <ChalkFilters />

      {/* SECTION 1 (F0–F60): 4-in-1 Side-by-Side Comparison Frame */}
      <Sequence from={0} durationInFrames={60}>
        <AbsoluteFill>
          {/* Header Bar */}
          <div
            style={{
              position: "absolute",
              top: 18,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
              fontFamily: fonts.mono,
              fontSize: 16,
              fontWeight: 800,
              letterSpacing: "1.5px",
              color: theme.chalkDim,
              zIndex: 10,
            }}
          >
            <span>FOUNDATION V2 · PHASE 2.1 TITLE STUDY</span>
            <span style={{ color: theme.pivot }}>•</span>
            <span>CHOOSE THE PERMANENT DISPLAY TITLE SYSTEM</span>
          </div>

          {/* Dividing Guidelines */}
          {/* Vertical divider */}
          <div
            style={{
              position: "absolute",
              top: 50,
              bottom: 40,
              left: 960,
              width: 1.5,
              backgroundColor: theme.cardBorder,
              opacity: 0.35,
            }}
          />
          {/* Horizontal divider */}
          <div
            style={{
              position: "absolute",
              top: 540,
              left: 60,
              right: 60,
              height: 1.5,
              backgroundColor: theme.cardBorder,
              opacity: 0.35,
            }}
          />

          {/* 2x2 Grid Quadrants */}
          {/* Quadrant A: Top-Left */}
          <div
            style={{
              position: "absolute",
              top: 40,
              left: 40,
              width: 880,
              height: 480,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CandidateCard
              letter="A"
              name="Caveat"
              subtitle="Fluid Hand-Painted Brush"
              fontFamily={caveatFamily}
              fontSize={74}
              fontWeight={700}
              letterSpacing="0.5px"
              filterId={CHALK_FILTER_ID}
              tiltDeg={-0.8}
              seed={101}
            />
          </div>

          {/* Quadrant B: Top-Right */}
          <div
            style={{
              position: "absolute",
              top: 40,
              left: 1000,
              width: 880,
              height: 480,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CandidateCard
              letter="B"
              name="Permanent Marker"
              subtitle="Bold Chisel-Tip Chalk"
              fontFamily={permanentMarkerFamily}
              fontSize={56}
              fontWeight={400}
              letterSpacing="1px"
              filterId={CHALK_FILTER_STRONG_ID}
              tiltDeg={0}
              seed={102}
            />
          </div>

          {/* Quadrant C: Bottom-Left */}
          <div
            style={{
              position: "absolute",
              top: 550,
              left: 40,
              width: 880,
              height: 480,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CandidateCard
              letter="C"
              name="Kalam"
              subtitle="Authentic Teacher Hand"
              fontFamily={kalamFamily}
              fontSize={64}
              fontWeight={700}
              letterSpacing="0.5px"
              filterId={CHALK_FILTER_ID}
              tiltDeg={-0.5}
              seed={103}
            />
          </div>

          {/* Quadrant D: Bottom-Right */}
          <div
            style={{
              position: "absolute",
              top: 550,
              left: 1000,
              width: 880,
              height: 480,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CandidateCard
              letter="D"
              name="Patrick Hand"
              subtitle="Enhanced Display Fallback"
              fontFamily={fonts.hand}
              fontSize={64}
              fontWeight="bold"
              letterSpacing="1.5px"
              filterId={CHALK_FILTER_STRONG_ID}
              tiltDeg={-1}
              seed={104}
            />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* SECTION 2: Single-Candidate Focus Scenes (for high-res full frame inspection) */}
      {/* Candidate A Full Screen (F60–F90) */}
      <Sequence from={60} durationInFrames={30}>
        <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <CandidateCard
            letter="A"
            name="Caveat"
            subtitle="Fluid Hand-Painted Brush"
            fontFamily={caveatFamily}
            fontSize={74}
            fontWeight={700}
            letterSpacing="0.5px"
            filterId={CHALK_FILTER_ID}
            tiltDeg={-0.8}
            seed={101}
            isFullScreen={true}
          />
        </AbsoluteFill>
      </Sequence>

      {/* Candidate B Full Screen (F90–F120) */}
      <Sequence from={90} durationInFrames={30}>
        <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <CandidateCard
            letter="B"
            name="Permanent Marker"
            subtitle="Bold Chisel-Tip Chalk"
            fontFamily={permanentMarkerFamily}
            fontSize={56}
            fontWeight={400}
            letterSpacing="1px"
            filterId={CHALK_FILTER_STRONG_ID}
            tiltDeg={0}
            seed={102}
            isFullScreen={true}
          />
        </AbsoluteFill>
      </Sequence>

      {/* Candidate C Full Screen (F120–F150) */}
      <Sequence from={120} durationInFrames={30}>
        <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <CandidateCard
            letter="C"
            name="Kalam"
            subtitle="Authentic Teacher Hand"
            fontFamily={kalamFamily}
            fontSize={64}
            fontWeight={700}
            letterSpacing="0.5px"
            filterId={CHALK_FILTER_ID}
            tiltDeg={-0.5}
            seed={103}
            isFullScreen={true}
          />
        </AbsoluteFill>
      </Sequence>

      {/* Candidate D Full Screen (F150–F180) */}
      <Sequence from={150} durationInFrames={30}>
        <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <CandidateCard
            letter="D"
            name="Patrick Hand"
            subtitle="Enhanced Display Fallback"
            fontFamily={fonts.hand}
            fontSize={64}
            fontWeight="bold"
            letterSpacing="1.5px"
            filterId={CHALK_FILTER_STRONG_ID}
            tiltDeg={-1}
            seed={104}
            isFullScreen={true}
          />
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
