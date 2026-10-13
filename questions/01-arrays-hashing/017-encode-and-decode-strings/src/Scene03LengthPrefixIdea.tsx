/**
 * Scene03LengthPrefixIdea.tsx — Scene 03 · Length-Prefix Framing Idea
 * Encode and Decode Strings (LeetCode 271) · Pattern 01 — Arrays & Hashing
 *
 * Board-Native Architecture (per Q016 Gold Standard):
 * - ZERO dark cards, ZERO opaque dashboard containers.
 * - Upper Hero: The 3-token self-describing serialization record frame [length + '#' + payload].
 * - Mid Stage: Resilience proof showing payload containing '#' safely parsed.
 * - Lower Stage: Decoder pointer leap invariant: next_i = j + 1 + length.
 * - Total Duration: 1117 frames @ 30fps (37.24s) strictly from sync/03-length-prefix-idea.json
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
import syncData from "../sync/03-length-prefix-idea.json";

const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

export const Scene03LengthPrefixIdea: React.FC = () => {
  const frame = useCurrentFrame();

  // Reveal triggers from word sync
  const genericInputReveal = interpolate(frame, [47, 68], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const lengthTokenReveal = interpolate(frame, [104, 122], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const hashTokenReveal = interpolate(frame, [149, 166], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const payloadTokenReveal = interpolate(frame, [181, 202], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const formulaAssemblyReveal = interpolate(frame, [307, 335], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const headerBracketReveal = interpolate(frame, [407, 430], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const skipArrowReveal = interpolate(frame, [496, 525], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const safetyCardReveal = interpolate(frame, [665, 695], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const pointerInvariantReveal = interpolate(frame, [858, 888], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const protocolBadgeReveal = interpolate(frame, [995, 1025], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const transitionHandoffReveal = interpolate(frame, [1068, 1095], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });

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

      {/* Chalk bursts on formula completion & protocol seal */}
      {frame >= 307 && frame < 335 && (
        <ChalkDust x={960} y={230} start={307} color={theme.pivot} count={16} />
      )}
      {frame >= 665 && frame < 695 && (
        <ChalkDust x={960} y={510} start={665} color={theme.good} count={16} />
      )}
      {frame >= 995 && frame < 1030 && (
        <ChalkDust x={960} y={800} start={995} color={theme.good} count={20} />
      )}

      <Audio src={staticFile("audio/017/03-length-prefix-idea.mp3")} />

      {/* =====================================================================
          1. HEADER (Y: 32 .. 80) — Board-Native
          ===================================================================== */}
      <BoardHeader
        title="THE LENGTH-PREFIX IDEA"
        badge="RECORD: LEN + # + PAYLOAD"
        badgeColor={theme.pivot}
        seed={31}
      />

      {/* =====================================================================
          2. HERO RECORD PROTOCOL (Y: 110 .. 360) — Board-Native Frame
          ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 110,
          left: 100,
          right: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontFamily: fonts.hand,
            fontSize: 22,
            color: "rgba(255,255,255,0.75)",
            marginBottom: 10,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          {genericInputReveal > 0 && (
            <span style={{ opacity: genericInputReveal }}>
              For any string <span style={{ color: theme.cyan, fontWeight: 700, fontFamily: fonts.mono }}>s</span>:
            </span>
          )}
          {formulaAssemblyReveal > 0 && (
            <span style={{ opacity: formulaAssemblyReveal, color: theme.pivot, fontWeight: 700 }}>
              &bull; Self-Describing Serialization Frame
            </span>
          )}
        </div>

        {/* THE 3-TOKEN RECORD FRAME */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 28,
            width: 1000,
            height: 140,
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0 }}>
            <RoughBox
              width={1000}
              height={140}
              stroke={formulaAssemblyReveal > 0 ? theme.pivot : "rgba(255,255,255,0.3)"}
              strokeWidth={2.4}
              roughness={1.2}
              seed={32}
            />
          </div>

          {/* TOKEN 1: LENGTH */}
          <div
            style={{
              opacity: lengthTokenReveal,
              transform: `scale(${interpolate(lengthTokenReveal, [0, 1], [0.85, 1])})`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              zIndex: 1,
            }}
          >
            <div
              style={{
                padding: "10px 28px",
                border: `2px solid ${theme.pivot}`,
                borderRadius: 8,
                fontFamily: fonts.mono,
                fontSize: 34,
                fontWeight: 800,
                color: theme.pivot,
                letterSpacing: 1.5,
              }}
            >
              length
            </div>
            <span style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.pivot, marginTop: 4 }}>
              len(s)
            </span>
          </div>

          {/* PLUS */}
          <div style={{ opacity: hashTokenReveal, fontFamily: fonts.mono, fontSize: 30, color: "rgba(255,255,255,0.5)", zIndex: 1 }}>
            +
          </div>

          {/* TOKEN 2: HASH */}
          <div
            style={{
              opacity: hashTokenReveal,
              transform: `scale(${interpolate(hashTokenReveal, [0, 1], [0.85, 1])})`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              zIndex: 1,
            }}
          >
            <div
              style={{
                padding: "10px 24px",
                border: `2px solid ${theme.accent}`,
                borderRadius: 8,
                fontFamily: fonts.mono,
                fontSize: 34,
                fontWeight: 800,
                color: theme.accent,
              }}
            >
              #
            </div>
            <span style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.accent, marginTop: 4 }}>
              terminator
            </span>
          </div>

          {/* PLUS */}
          <div style={{ opacity: payloadTokenReveal, fontFamily: fonts.mono, fontSize: 30, color: "rgba(255,255,255,0.5)", zIndex: 1 }}>
            +
          </div>

          {/* TOKEN 3: PAYLOAD */}
          <div
            style={{
              opacity: payloadTokenReveal,
              transform: `scale(${interpolate(payloadTokenReveal, [0, 1], [0.85, 1])})`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              zIndex: 1,
            }}
          >
            <div
              style={{
                padding: "10px 36px",
                border: `2px solid ${theme.cyan}`,
                borderRadius: 8,
                fontFamily: fonts.mono,
                fontSize: 34,
                fontWeight: 800,
                color: theme.cyan,
                letterSpacing: 2,
              }}
            >
              payload
            </div>
            <span style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.cyan, marginTop: 4 }}>
              s (raw content)
            </span>
          </div>
        </div>

        {/* OVERLAYS & BRACKET ANNOTATIONS */}
        <div
          style={{
            width: 1000,
            display: "flex",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          {headerBracketReveal > 0 && (
            <div
              style={{
                opacity: headerBracketReveal,
                fontFamily: fonts.hand,
                fontSize: 20,
                color: theme.pivot,
                lineHeight: 1.3,
              }}
            >
              <span style={{ fontWeight: 800 }}>Header:</span> The '#' marks where the length number ends.
            </div>
          )}

          {skipArrowReveal > 0 && (
            <div
              style={{
                opacity: skipArrowReveal,
                fontFamily: fonts.hand,
                fontSize: 20,
                color: theme.cyan,
                lineHeight: 1.3,
              }}
            >
              <span style={{ fontWeight: 800 }}>Decoder Jump:</span> Reads exactly{" "}
              <span style={{ color: theme.pivot, fontWeight: 800, fontFamily: fonts.mono }}>length</span> characters from wire.
            </div>
          )}
        </div>
      </div>

      {/* =====================================================================
          3. RESILIENCE PROOF (Y: 410 .. 600) — Direct Chalk Card
          ===================================================================== */}
      {safetyCardReveal > 0 && (
        <div
          style={{
            position: "absolute",
            top: 410,
            left: 0,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: safetyCardReveal,
            transform: `translateY(${interpolate(safetyCardReveal, [0, 1], [15, 0])}px)`,
          }}
        >
          <div
            style={{
              position: "relative",
              width: 1240,
              padding: "18px 36px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0 }}>
              <RoughBox width={1240} height={175} stroke={theme.good} strokeWidth={2.2} roughness={1.2} seed={33} />
            </div>

            <div
              style={{
                fontFamily: fonts.hand,
                fontSize: 20,
                color: theme.good,
                fontWeight: 800,
                letterSpacing: 2,
                marginBottom: 10,
                textTransform: "uppercase",
                zIndex: 1,
              }}
            >
              RESILIENCE PROOF &bull; PAYLOAD CONTAINING HASHES
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 36,
                fontFamily: fonts.mono,
                fontSize: 26,
                zIndex: 1,
              }}
            >
              {/* Input Item */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ color: "rgba(255,255,255,0.7)", fontFamily: fonts.hand, fontSize: 22 }}>Input:</span>
                <span
                  style={{
                    color: theme.cyan,
                    padding: "4px 16px",
                    border: `1.5px solid ${theme.cyan}`,
                    borderRadius: 6,
                    fontWeight: 700,
                  }}
                >
                  "a#b"
                </span>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 18 }}>(len = 3)</span>
              </div>

              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 28 }}>&rarr;</span>

              {/* Encoded Record */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ color: "rgba(255,255,255,0.7)", fontFamily: fonts.hand, fontSize: 22 }}>Encoded Record:</span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "6px 20px",
                    border: `2px solid ${theme.pivot}`,
                    borderRadius: 8,
                    fontSize: 28,
                    letterSpacing: 3,
                  }}
                >
                  <span style={{ color: theme.pivot, fontWeight: 800 }}>3</span>
                  <span style={{ color: theme.accent, fontWeight: 800 }}>#</span>
                  <span style={{ color: theme.cyan, fontWeight: 800 }}>a</span>
                  <span
                    style={{
                      color: theme.accent,
                      fontWeight: 800,
                      border: `1.5px solid ${theme.accent}`,
                      padding: "0 6px",
                      borderRadius: 4,
                    }}
                  >
                    #
                  </span>
                  <span style={{ color: theme.cyan, fontWeight: 800 }}>b</span>
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: 12,
                fontFamily: fonts.hand,
                fontSize: 21,
                color: theme.chalkText,
                zIndex: 1,
              }}
            >
              The decoder reads 3 bytes after the first '#'. The second '#' is treated strictly as text data!
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          4. DECODER POINTER INVARIANT (Y: 620 .. 780) — Board-Native
          ===================================================================== */}
      {pointerInvariantReveal > 0 && (
        <div
          style={{
            position: "absolute",
            top: 620,
            left: 0,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: pointerInvariantReveal,
            transform: `translateY(${interpolate(pointerInvariantReveal, [0, 1], [15, 0])}px)`,
          }}
        >
          <div
            style={{
              position: "relative",
              width: 1240,
              padding: "16px 36px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0 }}>
              <RoughBox width={1240} height={145} stroke={theme.pivot} strokeWidth={2} roughness={1.2} seed={34} />
            </div>

            <div
              style={{
                fontFamily: fonts.hand,
                fontSize: 20,
                color: theme.pivot,
                fontWeight: 800,
                letterSpacing: 2,
                marginBottom: 8,
                textTransform: "uppercase",
                zIndex: 1,
              }}
            >
              DECODER POINTER INVARIANT &bull; DETERMINISTIC RECORD LEAP
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 24,
                fontFamily: fonts.mono,
                fontSize: 24,
                fontWeight: 700,
                zIndex: 1,
              }}
            >
              <div style={{ color: theme.cyan }}>i = current header start</div>
              <span style={{ color: "rgba(255,255,255,0.5)" }}>&rarr;</span>
              <div style={{ color: theme.accent }}>j = header '#' delimiter</div>
              <span style={{ color: "rgba(255,255,255,0.5)" }}>&rarr;</span>
              <div
                style={{
                  color: theme.good,
                  padding: "4px 18px",
                  border: `2px solid ${theme.good}`,
                  borderRadius: 6,
                }}
              >
                next_i = j + 1 + length
              </div>
            </div>

            <div
              style={{
                marginTop: 8,
                fontFamily: fonts.hand,
                fontSize: 20,
                color: theme.good,
                fontWeight: 700,
                zIndex: 1,
              }}
            >
              Pointer `i` lands deterministically at the exact start of the next record!
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          5. PROTOCOL SEAL & HANDOFF (Y: 800 .. 880)
          ===================================================================== */}
      {protocolBadgeReveal > 0 && (
        <div
          style={{
            position: "absolute",
            top: 795,
            left: 0,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            opacity: protocolBadgeReveal,
            transform: `scale(${interpolate(protocolBadgeReveal, [0, 1], [0.94, 1])})`,
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              padding: "10px 40px",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0 }}>
              <RoughBox width={640} height={56} stroke={theme.good} strokeWidth={2.4} roughness={1.2} seed={35} />
            </div>
            <span style={{ color: theme.good, fontWeight: 900, fontSize: 24, zIndex: 1 }}>✓</span>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 22,
                fontWeight: 800,
                color: theme.good,
                letterSpacing: 1.5,
                zIndex: 1,
              }}
            >
              {transitionHandoffReveal > 0
                ? "NOW LET'S ENCODE OUR FULL EXAMPLE →"
                : "THAT'S THE PROTOCOL. SELF-CONTAINED & ROBUST."}
            </span>
          </div>
        </div>
      )}

      {/* FIXED WORD-SYNC CAPTIONS SAFE ZONE (Y: 960..1040) */}
      <Captions words={captionWords} />
    </div>
  );
};
