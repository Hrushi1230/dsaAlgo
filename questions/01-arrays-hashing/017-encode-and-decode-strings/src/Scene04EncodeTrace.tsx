/**
 * Scene04EncodeTrace.tsx — Scene 04 · Full Encode Execution Trace
 * Encode and Decode Strings (LeetCode 271) · Pattern 01 — Arrays & Hashing
 *
 * Board-Native Architecture (per Q016 Gold Standard):
 * - ZERO dark cards, ZERO opaque dashboard containers.
 * - Upper Stage:
 *     Left Rail: Source list queue [0..3] in clean chalk slots.
 *     Right Workbench: Active 3-step record construction pipeline directly on chalkboard.
 * - Lower Hero: Master wire accumulator tape stream with rough chalk frame.
 * - Total Duration: 3940 frames @ 30fps (131.32s) strictly from sync/04-encode-trace.json
 */

import React, { useMemo } from "react";
import {
  Audio,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme, fonts } from "../../../../kit/lib/theme";
import { EASE } from "../../../../kit/lib/anim";
import { ChalkDust } from "../../../../kit/components/ChalkDust";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { RoughBox } from "../../../../kit/components/RoughBox";
import { BoardHeader } from "./BoardHeader";
import syncData from "../sync/04-encode-trace.json";

const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

export const Scene04EncodeTrace: React.FC = () => {
  const frame = useCurrentFrame();

  // Input reveal states
  const str0Reveal = interpolate(frame, [70, 90], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const str1Reveal = interpolate(frame, [115, 135], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const str2Reveal = interpolate(frame, [163, 183], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const str3Reveal = interpolate(frame, [202, 222], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Record 1 (s = "a#b")
  const isRec1Active = frame >= 319 && frame < 960;
  const isRec1Committed = frame >= 880;
  const rec1AppendProgress = interpolate(frame, [880, 915], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });

  // Record 2 (s = "")
  const isRec2Active = frame >= 960 && frame < 1680;
  const isRec2Committed = frame >= 1600;
  const rec2AppendProgress = interpolate(frame, [1600, 1635], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });

  // Record 3 (s = "hello world")
  const isRec3Active = frame >= 1680 && frame < 2560;
  const isRec3Committed = frame >= 2480;
  const rec3AppendProgress = interpolate(frame, [2480, 2515], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });

  // Record 4 (s = "42")
  const isRec4Active = frame >= 2560 && frame < 3380;
  const isRec4Committed = frame >= 3300;
  const rec4AppendProgress = interpolate(frame, [3300, 3335], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });

  // Final Overview Partition Brackets (F3380+)
  const finalOverviewReveal = interpolate(frame, [3380, 3420], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });

  // Active string index (0..3)
  const activeStrIdx = isRec1Active ? 0 : isRec2Active ? 1 : isRec3Active ? 2 : isRec4Active ? 3 : -1;

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        position: "relative",
        backgroundColor: theme.boardBg,
        overflow: "hidden",
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      {/* Chalk bursts on commits */}
      {frame >= 880 && frame < 905 && <ChalkDust x={960} y={710} start={880} color={theme.pivot} count={14} />}
      {frame >= 1600 && frame < 1625 && <ChalkDust x={960} y={710} start={1600} color={theme.pivot} count={14} />}
      {frame >= 2480 && frame < 2505 && <ChalkDust x={960} y={710} start={2480} color={theme.pivot} count={14} />}
      {frame >= 3300 && frame < 3325 && <ChalkDust x={960} y={710} start={3300} color={theme.good} count={20} />}

      <Audio src={staticFile("audio/017/04-encode-trace.mp3")} />

      {/* =====================================================================
          1. HEADER (Y: 32 .. 80) — Board-Native
          ===================================================================== */}
      <BoardHeader
        title="FULL ENCODE EXECUTION TRACE"
        badge="SERIALIZING 4 STRINGS"
        badgeColor={theme.pivot}
        seed={41}
      />

      {/* =====================================================================
          2. UPPER STAGE (Y: 110 .. 540) — Queue & Construction Workbench
          ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 105,
          left: 70,
          right: 70,
          height: 440,
          display: "flex",
          gap: 40,
        }}
      >
        {/* LEFT RAIL: SOURCE INPUT LIST (WIDTH: 460) */}
        <div
          style={{
            width: 460,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "20px 24px",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0 }}>
            <RoughBox width={460} height={430} stroke={theme.cyan} strokeWidth={2} roughness={1.2} seed={42} />
          </div>

          <div
            style={{
              fontFamily: fonts.hand,
              fontSize: 20,
              color: "rgba(255,255,255,0.75)",
              marginBottom: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              zIndex: 1,
            }}
          >
            <span>Source List <span style={{ color: theme.cyan, fontFamily: fonts.mono }}>strs</span></span>
            <span style={{ color: theme.pivot, fontFamily: fonts.mono, fontSize: 16 }}>4 elements</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14, zIndex: 1 }}>
            {/* Item 0: "a#b" */}
            <div
              style={{
                opacity: str0Reveal,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 18px",
                borderRadius: 8,
                border: `2px solid ${activeStrIdx === 0 ? theme.pivot : isRec1Committed ? theme.good : theme.cyan}`,
                fontFamily: fonts.mono,
                fontSize: 22,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>[0]</span>
                <span style={{ color: activeStrIdx === 0 ? theme.pivot : theme.cyan, fontWeight: 700 }}>"a#b"</span>
              </div>
              {isRec1Committed && <span style={{ color: theme.good, fontWeight: 900 }}>✓</span>}
            </div>

            {/* Item 1: "" */}
            <div
              style={{
                opacity: str1Reveal,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 18px",
                borderRadius: 8,
                border: `2px solid ${activeStrIdx === 1 ? theme.pivot : isRec2Committed ? theme.good : theme.cyan}`,
                fontFamily: fonts.mono,
                fontSize: 22,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>[1]</span>
                <span style={{ color: activeStrIdx === 1 ? theme.pivot : theme.cyan, fontWeight: 700 }}>""</span>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", fontStyle: "italic" }}>(empty)</span>
              </div>
              {isRec2Committed && <span style={{ color: theme.good, fontWeight: 900 }}>✓</span>}
            </div>

            {/* Item 2: "hello world" */}
            <div
              style={{
                opacity: str2Reveal,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 18px",
                borderRadius: 8,
                border: `2px solid ${activeStrIdx === 2 ? theme.pivot : isRec3Committed ? theme.good : theme.cyan}`,
                fontFamily: fonts.mono,
                fontSize: 22,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>[2]</span>
                <span style={{ color: activeStrIdx === 2 ? theme.pivot : theme.cyan, fontWeight: 700 }}>"hello world"</span>
              </div>
              {isRec3Committed && <span style={{ color: theme.good, fontWeight: 900 }}>✓</span>}
            </div>

            {/* Item 3: "42" */}
            <div
              style={{
                opacity: str3Reveal,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 18px",
                borderRadius: 8,
                border: `2px solid ${activeStrIdx === 3 ? theme.pivot : isRec4Committed ? theme.good : theme.cyan}`,
                fontFamily: fonts.mono,
                fontSize: 22,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>[3]</span>
                <span style={{ color: activeStrIdx === 3 ? theme.pivot : theme.cyan, fontWeight: 700 }}>"42"</span>
              </div>
              {isRec4Committed && <span style={{ color: theme.good, fontWeight: 900 }}>✓</span>}
            </div>
          </div>
        </div>

        {/* RIGHT WORKBENCH: ACTIVE RECORD CONSTRUCTION PIPELINE */}
        <div
          style={{
            flex: 1,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "24px 36px",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0 }}>
            <RoughBox width={1280} height={430} stroke={theme.pivot} strokeWidth={2.2} roughness={1.2} seed={43} />
          </div>

          {activeStrIdx === -1 ? (
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: fonts.hand,
                fontSize: 28,
                color: theme.chalkText,
                zIndex: 1,
              }}
            >
              {frame < 319 ? "Initializing Encoder Stream..." : "All 4 Records Assembled & Committed!"}
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", zIndex: 1 }}>
              {/* BUILDER HEADER */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontFamily: fonts.hand, fontSize: 24, color: theme.pivot, fontWeight: 800 }}>
                  ACTIVE STEP: ENCODING RECORD {activeStrIdx + 1} OF 4
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.cyan }}>
                  Current Item: <span style={{ fontWeight: 800 }}>strs[{activeStrIdx}]</span>
                </div>
              </div>

              {/* COMPUTATION PIPELINE ROWS */}
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {/* Step 1: Length calculation */}
                <div style={{ display: "flex", alignItems: "center", gap: 20, fontFamily: fonts.mono, fontSize: 24 }}>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontFamily: fonts.hand, fontSize: 22, width: 220 }}>
                    1. Calculate Length:
                  </span>
                  <span style={{ color: theme.cyan }}>
                    len({activeStrIdx === 0 ? '"a#b"' : activeStrIdx === 1 ? '""' : activeStrIdx === 2 ? '"hello world"' : '"42"'})
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.5)" }}>=</span>
                  <span
                    style={{
                      color: theme.pivot,
                      fontWeight: 800,
                      fontSize: 26,
                      padding: "2px 14px",
                      border: `2px solid ${theme.pivot}`,
                      borderRadius: 6,
                    }}
                  >
                    {activeStrIdx === 0 ? "3" : activeStrIdx === 1 ? "0" : activeStrIdx === 2 ? "11" : "2"}
                  </span>
                </div>

                {/* Step 2: Header assembly */}
                <div style={{ display: "flex", alignItems: "center", gap: 20, fontFamily: fonts.mono, fontSize: 24 }}>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontFamily: fonts.hand, fontSize: 22, width: 220 }}>
                    2. Append Delimiter:
                  </span>
                  <span style={{ color: theme.pivot }}>str(length)</span>
                  <span style={{ color: "rgba(255,255,255,0.5)" }}>+</span>
                  <span style={{ color: theme.accent, fontWeight: 800 }}>'#'</span>
                  <span style={{ color: "rgba(255,255,255,0.5)" }}>=</span>
                  <span
                    style={{
                      color: theme.accent,
                      fontWeight: 800,
                      fontSize: 26,
                      padding: "2px 14px",
                      border: `2px solid ${theme.accent}`,
                      borderRadius: 6,
                    }}
                  >
                    {activeStrIdx === 0 ? '"3#"' : activeStrIdx === 1 ? '"0#"' : activeStrIdx === 2 ? '"11#"' : '"2#"'}
                  </span>
                </div>

                {/* Step 3: Full record formed */}
                <div style={{ display: "flex", alignItems: "center", gap: 20, fontFamily: fonts.mono, fontSize: 24 }}>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontFamily: fonts.hand, fontSize: 22, width: 220 }}>
                    3. Append Payload:
                  </span>
                  <span style={{ color: theme.accent }}>header</span>
                  <span style={{ color: "rgba(255,255,255,0.5)" }}>+</span>
                  <span style={{ color: theme.cyan }}>payload</span>
                  <span style={{ color: "rgba(255,255,255,0.5)" }}>=</span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "4px 20px",
                      border: `2px solid ${theme.good}`,
                      borderRadius: 8,
                      fontSize: 28,
                      letterSpacing: 2,
                    }}
                  >
                    <span style={{ color: theme.pivot, fontWeight: 800 }}>
                      {activeStrIdx === 0 ? "3" : activeStrIdx === 1 ? "0" : activeStrIdx === 2 ? "11" : "2"}
                    </span>
                    <span style={{ color: theme.accent, fontWeight: 800 }}>#</span>
                    <span style={{ color: theme.cyan, fontWeight: 800 }}>
                      {activeStrIdx === 0 ? "a#b" : activeStrIdx === 1 ? "" : activeStrIdx === 2 ? "hello world" : "42"}
                    </span>
                  </div>
                </div>
              </div>

              {/* APPEND ACTION CUE */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: 14,
                  fontFamily: fonts.mono,
                  fontSize: 20,
                  color: theme.good,
                }}
              >
                <span>&darr; Appending record to encoded stream:</span>
                <span style={{ fontWeight: 800 }}>
                  encoded += "{activeStrIdx === 0 ? "3#a#b" : activeStrIdx === 1 ? "0#" : activeStrIdx === 2 ? "11#hello world" : "2#42"}"
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* =====================================================================
          3. LOWER HERO STAGE (Y: 570 .. 880) — Master Wire Accumulator Stream
          ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 565,
          left: 70,
          right: 70,
          height: 300,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "24px 40px",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0 }}>
          <RoughBox
            width={1780}
            height={295}
            stroke={finalOverviewReveal > 0 ? theme.good : theme.pivot}
            strokeWidth={2.4}
            roughness={1.2}
            seed={44}
          />
        </div>

        {/* ACCUMULATOR HEADER */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16, fontFamily: fonts.hand, fontSize: 22 }}>
            <span style={{ color: "rgba(255,255,255,0.75)" }}>NETWORK WIRE ACCUMULATOR:</span>
            <span style={{ color: theme.pivot, fontWeight: 700, fontFamily: fonts.mono }}>encoded: str</span>
          </div>
          <div style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.cyan }}>
            Stream Size:{" "}
            <span style={{ fontWeight: 800, color: theme.good }}>
              {isRec4Committed ? 25 : isRec3Committed ? 21 : isRec2Committed ? 7 : isRec1Committed ? 5 : 0}
            </span>{" "}
            / 25 characters
          </div>
        </div>

        {/* 25-CHAR STREAM STRIP */}
        <div
          style={{
            width: "100%",
            height: 110,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            padding: "10px 24px",
            border: "1.5px dashed rgba(255,255,255,0.35)",
            borderRadius: 8,
            zIndex: 1,
          }}
        >
          {/* Record 1 segment: "3#a#b" */}
          {isRec1Committed && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                opacity: rec1AppendProgress,
                transform: `scale(${interpolate(rec1AppendProgress, [0, 1], [0.85, 1])})`,
                padding: "8px 18px",
                border: `2px solid ${theme.cyan}`,
                borderRadius: 6,
                fontFamily: fonts.mono,
                fontSize: 32,
                letterSpacing: 2,
              }}
            >
              <span style={{ color: theme.pivot, fontWeight: 800 }}>3</span>
              <span style={{ color: theme.accent, fontWeight: 800 }}>#</span>
              <span style={{ color: theme.cyan, fontWeight: 800 }}>a</span>
              <span style={{ color: theme.accent, fontWeight: 800 }}>#</span>
              <span style={{ color: theme.cyan, fontWeight: 800 }}>b</span>
            </div>
          )}

          {/* Record 2 segment: "0#" */}
          {isRec2Committed && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                opacity: rec2AppendProgress,
                transform: `scale(${interpolate(rec2AppendProgress, [0, 1], [0.85, 1])})`,
                padding: "8px 18px",
                border: `2px solid ${theme.cyan}`,
                borderRadius: 6,
                fontFamily: fonts.mono,
                fontSize: 32,
                letterSpacing: 2,
              }}
            >
              <span style={{ color: theme.pivot, fontWeight: 800 }}>0</span>
              <span style={{ color: theme.accent, fontWeight: 800 }}>#</span>
            </div>
          )}

          {/* Record 3 segment: "11#hello world" */}
          {isRec3Committed && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                opacity: rec3AppendProgress,
                transform: `scale(${interpolate(rec3AppendProgress, [0, 1], [0.85, 1])})`,
                padding: "8px 18px",
                border: `2px solid ${theme.cyan}`,
                borderRadius: 6,
                fontFamily: fonts.mono,
                fontSize: 32,
                letterSpacing: 2,
              }}
            >
              <span style={{ color: theme.pivot, fontWeight: 800 }}>11</span>
              <span style={{ color: theme.accent, fontWeight: 800 }}>#</span>
              <span style={{ color: theme.cyan, fontWeight: 800 }}>hello world</span>
            </div>
          )}

          {/* Record 4 segment: "2#42" */}
          {isRec4Committed && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                opacity: rec4AppendProgress,
                transform: `scale(${interpolate(rec4AppendProgress, [0, 1], [0.85, 1])})`,
                padding: "8px 18px",
                border: `2px solid ${theme.cyan}`,
                borderRadius: 6,
                fontFamily: fonts.mono,
                fontSize: 32,
                letterSpacing: 2,
              }}
            >
              <span style={{ color: theme.pivot, fontWeight: 800 }}>2</span>
              <span style={{ color: theme.accent, fontWeight: 800 }}>#</span>
              <span style={{ color: theme.cyan, fontWeight: 800 }}>42</span>
            </div>
          )}

          {!isRec1Committed && (
            <span style={{ fontFamily: fonts.mono, fontSize: 26, color: "rgba(255,255,255,0.4)", letterSpacing: 2 }}>
              "" (empty accumulator)
            </span>
          )}
        </div>

        {/* FINAL SUMMARY BADGE (F3380+) */}
        {finalOverviewReveal > 0 && (
          <div
            style={{
              opacity: finalOverviewReveal,
              marginTop: 18,
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "8px 32px",
              border: `2px solid ${theme.good}`,
              borderRadius: 8,
              fontFamily: fonts.mono,
              fontSize: 20,
              color: theme.good,
              fontWeight: 800,
              zIndex: 1,
            }}
          >
            <span>✓ 25 CHARACTERS TOTAL &bull; SERIALIZATION PROTOCOL COMPLETE</span>
          </div>
        )}
      </div>

      {/* FIXED WORD-SYNC CAPTIONS SAFE ZONE (Y: 960..1040) */}
      <Captions words={captionWords} />
    </div>
  );
};
