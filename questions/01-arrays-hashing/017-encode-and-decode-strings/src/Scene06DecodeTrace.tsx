/**
 * Scene06DecodeTrace.tsx — Scene 06 · Full Decode Two-Pointer Jump Trace
 * Encode and Decode Strings (LeetCode 271) · Pattern 01 — Arrays & Hashing
 *
 * Implements the complete board-native decoder trace:
 * - Master Encoded String: "3#a#b0#11#hello world2#42" (25 characters, indices 0..24)
 * - Record 1 (F0..F2379):
 *     i=0, j searches to 1 ('#') -> length=3
 *     payload [2..5) -> "a#b" (inner '#' safely preserved) -> res=["a#b"], i=5
 * - Record 2 (F2379..F3425):
 *     i=5, j searches to 6 ('#') -> length=0
 *     payload [7..7) -> "" (empty string preserved) -> res=["a#b", ""], i=7
 * - Record 3 (F3425..F4939):
 *     i=7, j searches to 9 ('#') -> two-digit header "11" -> length=11
 *     payload [10..21) -> "hello world" (with space) -> res=["a#b", "", "hello world"], i=21
 * - Record 4 (F4939..F5980):
 *     i=21, j searches to 22 ('#') -> length=2
 *     payload [23..25) -> "42" -> res=["a#b", "", "hello world", "42"], i=25
 * - Termination & Final Lossless Verification (F5980..F6969):
 *     i=25 == len(encoded) -> loop ends
 *     1:1 exact match with input strings: ["a#b", "", "hello world", "42"]
 * - Total Duration: 6969 frames @ 30fps (232.3s) strictly from sync/06-decode-trace.json
 */

import React, { useMemo } from "react";
import {
  Audio,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme as baseTheme, fonts } from "../../../../kit/lib/theme";
import { EASE } from "../../../../kit/lib/anim";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { ChalkDust } from "../../../../kit/components/ChalkDust";
import { RoughBox } from "../../../../kit/components/RoughBox";
import { BoardHeader } from "./BoardHeader";
import syncData from "../sync/06-decode-trace.json";

const theme = {
  ...baseTheme,
  gold: baseTheme.pivot,
  chalkSub: baseTheme.chalkDim,
  chalkBorder: baseTheme.cardBorder,
};

// 25-character encoded wire string
const ENCODED_CHARS = [
  "3", "#", "a", "#", "b",
  "0", "#",
  "1", "1", "#", "h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d",
  "2", "#", "4", "2",
];

// Caption words strictly from sync JSON
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

export const Scene06DecodeTrace: React.FC = () => {
  const frame = useCurrentFrame();

  // Camera engine: subtle cinematic breathing
  const { camScale, camY } = useMemo(() => {
    if (frame < 400) {
      const s = interpolate(frame, [0, 30], [1.008, 1.0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: s, camY: 0 };
    }
    if (frame >= 400 && frame < 5980) {
      return { camScale: 1.004, camY: -3 };
    }
    return { camScale: 1.0, camY: 0 };
  }, [frame]);

  // Initial reveal state
  const showInitialPointer = frame >= 153;

  // Active Record Identification
  const currentRecord = useMemo(() => {
    if (frame < 400) return 0; // Setup phase
    if (frame < 2379) return 1; // Record 1: "a#b"
    if (frame < 3425) return 2; // Record 2: ""
    if (frame < 4939) return 3; // Record 3: "hello world"
    if (frame < 5980) return 4; // Record 4: "42"
    return 5; // Complete / Summary
  }, [frame]);

  // Active i and j pointers strictly derived from audio milestones
  const { ptrI, ptrJ, parsedLen, sliceRange, activePayloadText } = useMemo(() => {
    // Phase 0: Setup
    if (frame < 400) {
      return {
        ptrI: 0,
        ptrJ: 0,
        parsedLen: null,
        sliceRange: null,
        activePayloadText: "",
      };
    }

    // Record 1: i=0 (F400..F2379)
    if (frame < 2379) {
      const jPos = frame < 720 ? 0 : 1;
      const lenVal = frame >= 950 ? 3 : null;
      const range = frame >= 1189 ? { start: 2, end: 5 } : null;
      const text = frame >= 1765 ? "a#b" : frame >= 1450 ? "reading..." : "";
      return {
        ptrI: frame >= 2126 ? 5 : 0,
        ptrJ: jPos,
        parsedLen: lenVal,
        sliceRange: range,
        activePayloadText: text,
      };
    }

    // Record 2: i=5 (F2379..F3425)
    if (frame < 3425) {
      const jPos = frame < 2650 ? 5 : 6;
      const lenVal = frame >= 2713 ? 0 : null;
      const range = frame >= 2900 ? { start: 7, end: 7 } : null;
      const text = frame >= 3130 ? '"" (empty)' : "";
      return {
        ptrI: frame >= 3377 ? 7 : 5,
        ptrJ: jPos,
        parsedLen: lenVal,
        sliceRange: range,
        activePayloadText: text,
      };
    }

    // Record 3: i=7 (F3425..F4939)
    if (frame < 4939) {
      const jPos = frame < 3700 ? 7 : frame < 3880 ? 8 : 9;
      const lenVal = frame >= 4067 ? 11 : null;
      const range = frame >= 3970 ? { start: 10, end: 21 } : null;
      const text = frame >= 4645 ? "hello world" : "";
      return {
        ptrI: frame >= 4886 ? 21 : 7,
        ptrJ: jPos,
        parsedLen: lenVal,
        sliceRange: range,
        activePayloadText: text,
      };
    }

    // Record 4: i=21 (F4939..F5980)
    if (frame < 5980) {
      const jPos = frame < 5200 ? 21 : 22;
      const lenVal = frame >= 5281 ? 2 : null;
      const range = frame >= 5380 ? { start: 23, end: 25 } : null;
      const text = frame >= 5560 ? "42" : "";
      return {
        ptrI: frame >= 5900 ? 25 : 21,
        ptrJ: jPos,
        parsedLen: lenVal,
        sliceRange: range,
        activePayloadText: text,
      };
    }

    // Final state (F5980+)
    return {
      ptrI: 25,
      ptrJ: 25,
      parsedLen: null,
      sliceRange: null,
      activePayloadText: "",
    };
  }, [frame]);

  // Committed decoded result list
  const committedResults = useMemo(() => {
    const list: string[] = [];
    if (frame >= 2045) list.push("a#b");
    if (frame >= 3300) list.push("");
    if (frame >= 4770) list.push("hello world");
    if (frame >= 5850) list.push("42");
    return list;
  }, [frame]);

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        position: "relative",
        overflow: "hidden",
        backgroundColor: theme.boardBg,
        transform: `scale(${camScale}) translateY(${camY}px)`,
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      <Audio src={staticFile("audio/017/06-decode-trace.mp3")} />

      {/* ChalkDust bursts on record completions */}
      {frame >= 2045 && frame < 2075 && <ChalkDust start={2045} x={300} y={750} count={16} />}
      {frame >= 3300 && frame < 3330 && <ChalkDust start={3300} x={520} y={750} count={16} />}
      {frame >= 4770 && frame < 4800 && <ChalkDust start={4770} x={740} y={750} count={18} />}
      {frame >= 5850 && frame < 5880 && <ChalkDust start={5850} x={960} y={750} count={20} />}

      {/* =========================================================================
          1. CANONICAL BOARD HEADER
          ========================================================================= */}
      <BoardHeader
        title="FULL TWO-POINTER DECODER TRACE"
        badge="25-CHAR WIRE STREAM"
        badgeColor={theme.gold}
        seed={61}
      />

      {/* =========================================================================
          2. HERO TAPE TRACK: 25 ENCODED CHARACTERS (Y: 105 .. 305)
          ========================================================================= */}
      <div
        style={{
          position: "absolute",
          left: 80,
          right: 80,
          top: 105,
          height: 190,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 14,
              color: theme.cyan,
              letterSpacing: 1.5,
              textTransform: "uppercase",
            }}
          >
            Encoded Wire String Tape (s) · 25 Characters Total
          </span>
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 14,
              color: currentRecord === 5 ? theme.good : theme.gold,
              fontWeight: 600,
            }}
          >
            {currentRecord === 5
              ? "✓ DECODING FINISHED (i = 25)"
              : `RECORD ${currentRecord || 1} IN PROGRESS`}
          </span>
        </div>

        {/* 25 Character Cells Track with RoughBox outline */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 140,
            display: "flex",
            alignItems: "center",
            padding: "0 14px",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none" }}>
            <RoughBox
              width={1760}
              height={140}
              stroke="rgba(248, 246, 240, 0.28)"
              strokeWidth={2}
              roughness={1.2}
              seed={62}
            />
          </div>

          <div
            style={{
              display: "flex",
              width: "100%",
              gap: 6,
              position: "relative",
              zIndex: 1,
            }}
          >
            {ENCODED_CHARS.map((ch, idx) => {
              const isI = showInitialPointer && idx === ptrI;
              const isJ = currentRecord >= 1 && currentRecord <= 4 && idx === ptrJ;
              const inSlice =
                sliceRange && idx >= sliceRange.start && idx < sliceRange.end;
              const isDelimiter = ch === "#";

              // Board-native character cell styling: transparent base, chalk wash on active
              let cellBg = "transparent";
              let borderColor = "rgba(248, 246, 240, 0.2)";
              let textColor: string = theme.chalkText;

              if (inSlice) {
                cellBg = `${theme.good}22`;
                borderColor = theme.good;
                textColor = theme.good;
              } else if (isDelimiter && idx === ptrJ) {
                cellBg = `${theme.accent}26`;
                borderColor = theme.accent;
                textColor = theme.accent;
              } else if (idx === ptrI) {
                cellBg = `${theme.cyan}20`;
                borderColor = theme.cyan;
                textColor = theme.cyan;
              } else if (idx === ptrJ) {
                cellBg = `${theme.gold}20`;
                borderColor = theme.gold;
                textColor = theme.gold;
              }

              return (
                <div
                  key={idx}
                  style={{
                    flex: 1,
                    height: 72,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    borderRadius: 6,
                    border: `1.5px solid ${borderColor}`,
                    background: cellBg,
                  }}
                >
                  {/* Pointer i indicator (above) */}
                  {isI && (
                    <div
                      style={{
                        position: "absolute",
                        top: -32,
                        fontFamily: fonts.mono,
                        fontSize: 14,
                        fontWeight: "bold",
                        color: theme.cyan,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <span>i</span>
                      <span style={{ fontSize: 10, lineHeight: "8px" }}>▼</span>
                    </div>
                  )}

                  {/* Character */}
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 24,
                      fontWeight: "bold",
                      color: textColor,
                    }}
                  >
                    {ch === " " ? "␣" : ch}
                  </span>

                  {/* Index label (below) */}
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 11,
                      color: theme.chalkDim,
                      marginTop: 2,
                    }}
                  >
                    {idx}
                  </span>

                  {/* Pointer j indicator (below index) */}
                  {isJ && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: -30,
                        fontFamily: fonts.mono,
                        fontSize: 14,
                        fontWeight: "bold",
                        color: theme.gold,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ fontSize: 10, lineHeight: "8px" }}>▲</span>
                      <span>j</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* =========================================================================
          3. MIDDLE STAGE: VARIABLES & CALCULATION RAIL (Y: 315 .. 660)
          ========================================================================= */}
      <div
        style={{
          position: "absolute",
          left: 80,
          right: 80,
          top: 315,
          height: 335,
          display: "flex",
          gap: 30,
        }}
      >
        {/* LEFT COLUMN: Live Two-Pointer State (width: 760) */}
        <div
          style={{
            width: 760,
            position: "relative",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
            <RoughBox
              width={760}
              height={335}
              stroke={theme.cyan}
              strokeWidth={2}
              roughness={1.2}
              seed={63}
            />
          </div>

          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 14,
              color: theme.cyan,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              borderBottom: "1px dashed rgba(248, 246, 240, 0.18)",
              paddingBottom: 8,
              zIndex: 1,
            }}
          >
            Pointer State & Slice Arithmetic
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 14,
              fontFamily: fonts.mono,
              fontSize: 17,
              zIndex: 1,
            }}
          >
            {/* Pointer i */}
            <div
              style={{
                padding: "10px 14px",
                borderRadius: 8,
                border: `1.5px solid ${theme.cyan}`,
                background: `${theme.cyan}14`,
              }}
            >
              <span style={{ color: theme.chalkDim, fontSize: 12 }}>RECORD START:</span>
              <div style={{ color: theme.cyan, fontSize: 26, fontWeight: "bold" }}>
                i = {ptrI} {ptrI === 25 ? "(END)" : ""}
              </div>
            </div>

            {/* Pointer j */}
            <div
              style={{
                padding: "10px 14px",
                borderRadius: 8,
                border: `1.5px solid ${theme.gold}`,
                background: `${theme.gold}14`,
              }}
            >
              <span style={{ color: theme.chalkDim, fontSize: 12 }}>DELIMITER SCAN:</span>
              <div style={{ color: theme.gold, fontSize: 26, fontWeight: "bold" }}>
                j = {ptrJ} {ptrJ === 25 ? "(DONE)" : ENCODED_CHARS[ptrJ] === "#" ? "('#' FOUND)" : "..."}
              </div>
            </div>

            {/* Parsed Length */}
            <div
              style={{
                padding: "10px 14px",
                borderRadius: 8,
                border: `1.5px solid ${parsedLen !== null || frame >= 5980 ? theme.accent : "rgba(248, 246, 240, 0.18)"}`,
                background: parsedLen !== null || frame >= 5980 ? `${theme.accent}14` : "transparent",
              }}
            >
              <span style={{ color: theme.chalkDim, fontSize: 12 }}>PARSED LENGTH:</span>
              <div style={{ color: theme.accent, fontSize: 24, fontWeight: "bold" }}>
                {frame >= 5980 ? "4 Records Done" : parsedLen !== null ? `length = ${parsedLen}` : "scanning..."}
              </div>
            </div>

            {/* Slice Math */}
            <div
              style={{
                padding: "10px 14px",
                borderRadius: 8,
                border: `1.5px solid ${sliceRange || frame >= 5980 ? theme.good : "rgba(248, 246, 240, 0.18)"}`,
                background: sliceRange || frame >= 5980 ? `${theme.good}14` : "transparent",
              }}
            >
              <span style={{ color: theme.chalkDim, fontSize: 12 }}>PAYLOAD BOUNDS:</span>
              <div style={{ color: theme.good, fontSize: 20, fontWeight: "bold" }}>
                {frame >= 5980
                  ? "Reconstructed"
                  : sliceRange
                  ? `[${sliceRange.start} : ${sliceRange.end}]`
                  : "start / end pending"}
              </div>
            </div>
          </div>

          {/* Jump Equation */}
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 15,
              color: theme.chalkText,
              background: "transparent",
              padding: "10px 14px",
              borderRadius: 6,
              border: "1px dashed rgba(248, 246, 240, 0.25)",
              zIndex: 1,
            }}
          >
            {frame >= 5980 ? (
              <span style={{ color: theme.good, fontWeight: "bold" }}>
                LOOP TERMINATION: i == len(encoded) (25 == 25) ➔ EXIT WHILE LOOP
              </span>
            ) : (
              <>
                <span style={{ color: theme.chalkDim }}>NEXT RECORD LEAP: </span>
                <span style={{ color: theme.good, fontWeight: "bold" }}>i = j + 1 + length</span>
                {sliceRange && (
                  <span style={{ color: theme.cyan }}>
                    {" "}➔ next i = {sliceRange.end}
                  </span>
                )}
              </>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: Active Pedagogical Callout (width: 970) */}
        <div
          style={{
            flex: 1,
            position: "relative",
            padding: "20px 28px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
            <RoughBox
              width={970}
              height={335}
              stroke={theme.gold}
              strokeWidth={2}
              roughness={1.2}
              seed={64}
            />
          </div>

          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 14,
              color: theme.gold,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              borderBottom: "1px dashed rgba(248, 246, 240, 0.18)",
              paddingBottom: 8,
              zIndex: 1,
            }}
          >
            Live Execution Step Deep Dive
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, zIndex: 1 }}>
            {currentRecord === 0 && (
              <div>
                <div style={{ fontFamily: fonts.hand, fontSize: 26, color: theme.cyan }}>
                  Initialize Two-Pointer Decoder
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkText, marginTop: 8, lineHeight: 1.5 }}>
                  Result array initialized to <span style={{ color: theme.cyan }}>[]</span>. Pointer <span style={{ color: theme.cyan }}>i</span> begins at index 0.
                  <br />
                  <span style={{ color: theme.gold }}>
                    Invariant: Pointer i always points to the first digit of the next length header.
                  </span>
                </div>
              </div>
            )}

            {currentRecord === 1 && (
              <div>
                <div style={{ fontFamily: fonts.hand, fontSize: 26, color: theme.cyan }}>
                  Record 1: "3#a#b" ➔ Extracted Payload: "{activePayloadText || "..."}"
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkText, marginTop: 8, lineHeight: 1.5 }}>
                  Header at idx 0 is '3', '#' at idx 1.
                  <br />
                  Payload span: indices [2..5) gives characters 'a', '#', 'b'.
                  <br />
                  <span style={{ color: theme.accent, fontWeight: "bold" }}>
                    CRITICAL INSIGHT: The '#' at index 3 is inside the payload! Because length=3 tells us to read 3 characters, we never treat index 3 as a delimiter!
                  </span>
                </div>
              </div>
            )}

            {currentRecord === 2 && (
              <div>
                <div style={{ fontFamily: fonts.hand, fontSize: 26, color: theme.cyan }}>
                  Record 2: "0#" ➔ Empty String Handled Losslessly
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkText, marginTop: 8, lineHeight: 1.5 }}>
                  Length header is '0', '#' at index 6.
                  <br />
                  start = 7, end = 7 + 0 = 7. Slice s[7:7] produces "".
                  <br />
                  <span style={{ color: theme.good, fontWeight: "bold" }}>
                    We append "" to our result list. The empty string is fully preserved!
                  </span>
                </div>
              </div>
            )}

            {currentRecord === 3 && (
              <div>
                <div style={{ fontFamily: fonts.hand, fontSize: 26, color: theme.cyan }}>
                  Record 3: "11#hello world" ➔ Multi-Digit Header & Whitespace
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkText, marginTop: 8, lineHeight: 1.5 }}>
                  j scans two digits: '1' and '1' before finding '#' at index 9.
                  <br />
                  Parsed length = 11. Payload span: [10..21).
                  <br />
                  <span style={{ color: theme.gold, fontWeight: "bold" }}>
                    Includes 5 chars 'hello' + 1 space ' ' + 5 chars 'world' = 11 characters!
                  </span>
                </div>
              </div>
            )}

            {currentRecord === 4 && (
              <div>
                <div style={{ fontFamily: fonts.hand, fontSize: 26, color: theme.cyan }}>
                  Record 4: "2#42" ➔ Final Record & Termination
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkText, marginTop: 8, lineHeight: 1.5 }}>
                  Length header is '2', '#' at index 22.
                  <br />
                  Payload span: indices [23..25) gives "42".
                  <br />
                  <span style={{ color: theme.cyan, fontWeight: "bold" }}>
                    Next i = 25. Since 25 equals len(s), the while loop terminates!
                  </span>
                </div>
              </div>
            )}

            {currentRecord === 5 && (
              <div>
                <div style={{ fontFamily: fonts.hand, fontSize: 26, color: theme.good }}>
                  ✓ Decode Completed · 100% Lossless Reconstruction!
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkText, marginTop: 8, lineHeight: 1.5 }}>
                  All 4 original strings restored in identical order and structure.
                  <br />
                  <span style={{ color: theme.good, fontWeight: "bold" }}>
                    Zero ambiguity. Handled delimiter inside payload, empty string, and multi-digit lengths flawlessly!
                  </span>
                </div>
              </div>
            )}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: fonts.mono,
              fontSize: 14,
              color: theme.chalkDim,
              zIndex: 1,
            }}
          >
            <span>STATUS: {committedResults.length} OF 4 STRINGS DECODED</span>
            <span style={{ color: theme.good, fontWeight: "bold" }}>O(N) TIME · O(N) SPACE</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          4. BOTTOM STAGE: RECONSTRUCTED RESULT ACCUMULATOR (Y: 675 .. 865)
          ========================================================================= */}
      <div
        style={{
          position: "absolute",
          left: 80,
          right: 80,
          top: 675,
          height: 185,
          padding: "16px 24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
          <RoughBox
            width={1760}
            height={185}
            stroke={committedResults.length === 4 ? theme.good : "rgba(248, 246, 240, 0.3)"}
            strokeWidth={2}
            roughness={1.2}
            seed={65}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 14,
              color: theme.good,
              letterSpacing: 1.5,
              textTransform: "uppercase",
            }}
          >
            Reconstructed Output List (res)
          </span>
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 14,
              color: committedResults.length === 4 ? theme.good : theme.chalkDim,
              fontWeight: 600,
            }}
          >
            {committedResults.length === 4
              ? "✓ ALL 4 STRINGS MATCH ORIGINAL INPUT"
              : `POPULATING... (${committedResults.length}/4)`}
          </span>
        </div>

        {/* 4 Result Cards */}
        <div style={{ display: "flex", gap: 20, zIndex: 1 }}>
          {[
            { label: "Item 0", expected: '"a#b"', unlocked: committedResults.length >= 1 },
            { label: "Item 1", expected: '""', unlocked: committedResults.length >= 2 },
            { label: "Item 2", expected: '"hello world"', unlocked: committedResults.length >= 3 },
            { label: "Item 3", expected: '"42"', unlocked: committedResults.length >= 4 },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                flex: 1,
                padding: "14px 20px",
                borderRadius: 8,
                border: `1.5px solid ${item.unlocked ? theme.good : "rgba(248, 246, 240, 0.18)"}`,
                background: item.unlocked ? `${theme.good}18` : "transparent",
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontFamily: fonts.mono,
                  fontSize: 12,
                  color: item.unlocked ? theme.good : theme.chalkDim,
                }}
              >
                <span>{item.label}</span>
                <span>{item.unlocked ? "✓ RESTORED" : "WAITING"}</span>
              </div>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 24,
                  fontWeight: "bold",
                  color: item.unlocked ? theme.chalkText : theme.chalkDim,
                }}
              >
                {item.unlocked ? item.expected : "—"}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          5. CAPTIONS SAFE ZONE (Y: 960..1040)
          ========================================================================= */}
      <Captions words={captionWords} />
    </div>
  );
};
