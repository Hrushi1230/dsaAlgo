/**
 * Scene05OptimalIdea.tsx — Scene 05 · Optimal Method 2 Idea (Prefix Math & Frequency Map)
 * Subarray Sum Equals K (LeetCode 560) · Pattern 01 — Arrays & Hashing
 *
 * Implements the Prefix Subarray Equation, Frequency Map & The 4-Step Golden Order:
 * - 100% Board-Native: Zero dark cards, transparent RoughBox outlines, direct chalk typography
 * - Matches REF_SCENE05_OPTIMAL_IDEA.png perfectly
 * - Total Duration: 2,305 frames @ 30fps (76.840s) strictly from sync/05-optimal-idea.json
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
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { RoughBox } from "../../../../kit/components/RoughBox";
import { RoughLine } from "../../../../kit/components/RoughLine";
import syncData from "../sync/05-optimal-idea.json";

// ---------------------------------------------------------------------------
// Caption Normalization
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

// Hand-drawn radiating chalk ticks
const RadiatingTicks: React.FC<{ color?: string; size?: number }> = ({
  color = theme.good,
  size = 32,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    style={{ overflow: "visible", flexShrink: 0 }}
  >
    <line x1="8" y1="8" x2="22" y2="4" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <line x1="10" y1="18" x2="26" y2="18" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <line x1="8" y1="28" x2="22" y2="32" stroke={color} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const Scene05OptimalIdea: React.FC = () => {
  const frame = useCurrentFrame();

  // =========================================================================
  // PHASES DETERMINED BY EXACT AUDIO SYNC:
  // Phase 1: Overlap Warning / Problem Restatement (F0 .. F195)
  // Phase 2: The Core Prefix Equation: S - earlier = k => earlier = S - k (F195 .. F662)
  // Phase 3: Frequency vs Existence & Base Case {0: 1} (F662 .. F1351)
  // Phase 4: The 4-Step Golden Order (F1351 .. F2305)
  // =========================================================================

  const isIntroPhase = frame < 195;
  const showEquation = frame >= 195;
  const showRearranged = frame >= 541;
  const showRightMap = frame >= 662;
  const showBaseCase = frame >= 1065;
  const showGoldenOrder = frame >= 1351;

  // Step highlight in Golden Order:
  // Step 1: Update prefix (F1491 .. F1577)
  // Step 2: Compute needed (F1577 .. F1718)
  // Step 3: Look back & count (F1718 .. F1942)
  // Step 4: Store current (F1942 .. F2305)
  const activeOrderStep =
    frame >= 1942 ? 4 : frame >= 1718 ? 3 : frame >= 1577 ? 2 : frame >= 1491 ? 1 : 0;

  const audioSrc = staticFile("audio/016/05-optimal-idea.mp3");

  return (
    <div
      style={{
        position: "relative",
        width: 1920,
        height: 1080,
        overflow: "hidden",
        backgroundColor: theme.boardBg,
        fontFamily: fonts.hand,
        color: theme.chalkText,
      }}
    >
      <ChalkFilters />
      <ChalkboardBackground />

      <Audio src={audioSrc} />

      {/* ===================================================================
          1. HEADER (Y: 28 .. 90)
          =================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 32,
          left: 60,
          right: 60,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span
            style={{
              fontFamily: fonts.display,
              fontSize: 26,
              fontWeight: 800,
              letterSpacing: 2,
              color: theme.cyan,
            }}
          >
            QUESTION 16
          </span>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 24 }}>—</span>
          <span
            style={{
              fontFamily: fonts.display,
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 1.5,
              color: theme.chalkText,
            }}
          >
            OPTIMAL IDEA: PREFIX MATH & FREQUENCY MAP
          </span>
        </div>

        {/* Target pill in yellow rough outline */}
        <div
          style={{
            position: "relative",
            padding: "6px 24px",
            fontFamily: fonts.mono,
            fontSize: 20,
            fontWeight: 800,
            color: theme.pivot,
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0 }}>
            <RoughBox
              width={180}
              height={40}
              stroke={theme.pivot}
              strokeWidth={2.5}
              seed={501}
            />
          </div>
          target k = 3
        </div>
      </div>

      {/* ===================================================================
          2. PHASE 1: AVOIDING REDUNDANT WORK (F0 .. F195)
          =================================================================== */}
      {isIntroPhase && (
        <div
          style={{
            position: "absolute",
            top: 280,
            left: 360,
            width: 1200,
            textAlign: "center",
            zIndex: 15,
          }}
        >
          <div
            style={{
              fontFamily: fonts.display,
              fontSize: 36,
              fontWeight: 800,
              color: theme.warn,
              letterSpacing: 2,
              marginBottom: 20,
            }}
          >
            AVOIDING REDUNDANT WORK
          </div>
          <div
            style={{
              fontFamily: fonts.hand,
              fontSize: 28,
              color: theme.chalkText,
              lineHeight: 1.7,
            }}
          >
            We do not want to rebuild the same overlapping subarray sums again and again.
            <br />
            Instead, we want each array element processed <span style={{ color: theme.good, fontWeight: 700 }}>exactly once in O(N) time</span>.
          </div>
        </div>
      )}

      {/* ===================================================================
          3. LEFT SUPPORT: CURRENT PREFIX = S (F195+)
          =================================================================== */}
      {showEquation && (
        <div
          style={{
            position: "absolute",
            top: 260,
            left: 60,
            width: 280,
            zIndex: 15,
          }}
        >
          <div
            style={{
              fontFamily: fonts.display,
              fontSize: 22,
              fontWeight: 800,
              color: theme.chalkText,
              letterSpacing: 1.5,
              marginBottom: 6,
            }}
          >
            CURRENT PREFIX
          </div>
          <div style={{ marginBottom: 16 }}>
            <RoughLine
              shape={{ kind: "line", x1: 0, y1: 2, x2: 240, y2: 2 }}
              width={250}
              height={6}
              stroke={theme.chalkText}
              strokeWidth={2}
              seed={502}
            />
          </div>

          <div
            style={{
              fontFamily: fonts.hand,
              fontSize: 32,
              color: theme.chalkText,
              lineHeight: 1.4,
            }}
          >
            current
            <br />
            prefix ={" "}
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 54,
                fontWeight: 900,
                color: theme.pivot,
              }}
            >
              S
            </span>
          </div>
        </div>
      )}

      {/* Vertical divider line between left and center hero */}
      {showEquation && (
        <div
          style={{
            position: "absolute",
            top: 220,
            left: 360,
            zIndex: 12,
          }}
        >
          <RoughLine
            shape={{ kind: "line", x1: 2, y1: 0, x2: 2, y2: 560 }}
            width={6}
            height={570}
            stroke="rgba(255,255,255,0.25)"
            strokeWidth={2}
            seed={503}
          />
        </div>
      )}

      {/* ===================================================================
          4. CENTER HERO: PREFIX EQUATION & GOLDEN ORDER (F195+)
          =================================================================== */}
      {showEquation && (
        <div
          style={{
            position: "absolute",
            top: 150,
            left: 410,
            width: showRightMap ? 1040 : 1380,
            zIndex: 15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Subarray equation */}
          <div
            style={{
              fontFamily: fonts.hand,
              fontSize: 32,
              color: theme.chalkText,
              marginBottom: 12,
              alignSelf: "flex-start",
              paddingLeft: 20,
            }}
          >
            For a subarray sum to be k,
          </div>

          {/* Equation: currentPrefix - previousPrefix = k */}
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 48,
              fontWeight: 800,
              color: theme.chalkText,
              letterSpacing: 1,
              marginBottom: 10,
            }}
          >
            currentPrefix − previousPrefix ={" "}
            <span style={{ color: theme.pivot, fontSize: 56, fontWeight: 900 }}>k</span>
          </div>

          {/* Double arrow down */}
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 44,
              color: theme.chalkLine,
              lineHeight: 1,
              marginBottom: 10,
              opacity: showRearranged ? 1 : 0.2,
            }}
          >
            ⇓
          </div>

          {/* Rearranged box hero matching reference */}
          <div
            style={{
              opacity: showRearranged ? 1 : 0,
              position: "relative",
              width: 980,
              height: 106,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 16,
              transition: "opacity 0.3s ease",
              marginBottom: 28,
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0 }}>
              <RoughBox
                width={980}
                height={106}
                stroke={theme.pivot}
                strokeWidth={3.5}
                seed={504}
              />
            </div>

            <div style={{ transform: "rotate(-40deg)" }}>
              <RadiatingTicks color={theme.pivot} size={30} />
            </div>

            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 42,
                fontWeight: 800,
                color: theme.chalkText,
                letterSpacing: 1,
              }}
            >
              <span style={{ color: theme.cyan }}>previousPrefix</span> = currentPrefix −{" "}
              <span style={{ color: theme.pivot }}>k</span>
            </div>

            <div style={{ transform: "rotate(140deg)" }}>
              <RadiatingTicks color={theme.pivot} size={30} />
            </div>
          </div>

          {/* ===============================================================
              GOLDEN ORDER LIST (F1351+)
              =============================================================== */}
          {showGoldenOrder && (
            <div
              style={{
                width: "100%",
                padding: "10px 20px 0 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontFamily: fonts.display,
                  fontSize: 26,
                  fontWeight: 800,
                  color: theme.good,
                  letterSpacing: 2,
                  marginBottom: 6,
                }}
              >
                THE 4-STEP GOLDEN ORDER — PER ELEMENT IN O(1)
              </div>
              <div style={{ marginBottom: 18 }}>
                <RoughLine
                  shape={{ kind: "line", x1: 0, y1: 2, x2: 600, y2: 2 }}
                  width={610}
                  height={6}
                  stroke={theme.good}
                  strokeWidth={2.5}
                  seed={505}
                />
              </div>

              {/* 4 Steps grid on board */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr 1fr",
                  gap: 16,
                  width: "100%",
                  marginBottom: 20,
                }}
              >
                {/* Step 1 */}
                <div
                  style={{
                    position: "relative",
                    padding: "14px 16px",
                    textAlign: "center",
                  }}
                >
                  {activeOrderStep === 1 && (
                    <div style={{ position: "absolute", top: 0, left: 0 }}>
                      <RoughBox
                        width={224}
                        height={108}
                        stroke={theme.cyan}
                        strokeWidth={2.5}
                        seed={601}
                      />
                    </div>
                  )}
                  <div style={{ fontFamily: fonts.display, fontSize: 20, color: theme.cyan, fontWeight: 800 }}>
                    1. UPDATE
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.chalkText, marginTop: 6 }}>
                    prefix += num
                  </div>
                </div>

                {/* Step 2 */}
                <div
                  style={{
                    position: "relative",
                    padding: "14px 16px",
                    textAlign: "center",
                  }}
                >
                  {activeOrderStep === 2 && (
                    <div style={{ position: "absolute", top: 0, left: 0 }}>
                      <RoughBox
                        width={224}
                        height={108}
                        stroke={theme.pivot}
                        strokeWidth={2.5}
                        seed={602}
                      />
                    </div>
                  )}
                  <div style={{ fontFamily: fonts.display, fontSize: 20, color: theme.pivot, fontWeight: 800 }}>
                    2. COMPUTE
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.chalkText, marginTop: 6 }}>
                    needed = prefix − k
                  </div>
                </div>

                {/* Step 3 */}
                <div
                  style={{
                    position: "relative",
                    padding: "14px 16px",
                    textAlign: "center",
                  }}
                >
                  {activeOrderStep === 3 && (
                    <div style={{ position: "absolute", top: 0, left: 0 }}>
                      <RoughBox
                        width={224}
                        height={108}
                        stroke={theme.good}
                        strokeWidth={2.5}
                        seed={603}
                      />
                    </div>
                  )}
                  <div style={{ fontFamily: fonts.display, fontSize: 20, color: theme.good, fontWeight: 800 }}>
                    3. LOOKUP
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.chalkText, marginTop: 6 }}>
                    ans += freq[needed]
                  </div>
                </div>

                {/* Step 4 */}
                <div
                  style={{
                    position: "relative",
                    padding: "14px 16px",
                    textAlign: "center",
                  }}
                >
                  {activeOrderStep === 4 && (
                    <div style={{ position: "absolute", top: 0, left: 0 }}>
                      <RoughBox
                        width={224}
                        height={108}
                        stroke={theme.purple}
                        strokeWidth={2.5}
                        seed={604}
                      />
                    </div>
                  )}
                  <div style={{ fontFamily: fonts.display, fontSize: 20, color: theme.purple, fontWeight: 800 }}>
                    4. STORE
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.chalkText, marginTop: 6 }}>
                    freq[prefix] += 1
                  </div>
                </div>
              </div>

              {/* Bottom rule: Query before insert */}
              <div
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 24,
                  color: theme.pivot,
                  textAlign: "center",
                }}
              >
                The map must contain only EARLIER prefix sums. Look back BEFORE storing current prefix!
              </div>
            </div>
          )}
        </div>
      )}

      {/* ===================================================================
          5. RIGHT SUPPORT: FREQUENCY MAP TABLE (F662+)
          =================================================================== */}
      {showRightMap && (
        <>
          {/* Vertical divider line between center and right support */}
          <div
            style={{
              position: "absolute",
              top: 180,
              left: 1490,
              zIndex: 12,
            }}
          >
            <RoughLine
              shape={{ kind: "line", x1: 2, y1: 0, x2: 2, y2: 660 }}
              width={6}
              height={670}
              stroke="rgba(255,255,255,0.25)"
              strokeWidth={2}
              seed={506}
            />
          </div>

          <div
            style={{
              position: "absolute",
              top: 180,
              left: 1530,
              width: 340,
              zIndex: 15,
            }}
          >
            {/* Title */}
            <div
              style={{
                fontFamily: fonts.hand,
                fontSize: 26,
                fontWeight: 700,
                color: theme.chalkText,
                marginBottom: 6,
              }}
            >
              prefix sum → frequency
            </div>
            <div style={{ marginBottom: 16 }}>
              <RoughLine
                shape={{ kind: "line", x1: 0, y1: 2, x2: 300, y2: 2 }}
                width={310}
                height={6}
                stroke={theme.chalkText}
                strokeWidth={2}
                seed={507}
              />
            </div>

            {/* Column Headers */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0 30px",
                fontFamily: fonts.hand,
                fontSize: 24,
                color: theme.chalkText,
                marginBottom: 6,
              }}
            >
              <div>
                prefix
                <div style={{ marginTop: 2 }}>
                  <RoughLine
                    shape={{ kind: "line", x1: 0, y1: 2, x2: 70, y2: 2 }}
                    width={75}
                    height={6}
                    stroke={theme.chalkText}
                    strokeWidth={1.5}
                    seed={508}
                  />
                </div>
              </div>
              <div>
                freq
                <div style={{ marginTop: 2 }}>
                  <RoughLine
                    shape={{ kind: "line", x1: 0, y1: 2, x2: 60, y2: 2 }}
                    width={65}
                    height={6}
                    stroke={theme.chalkText}
                    strokeWidth={1.5}
                    seed={509}
                  />
                </div>
              </div>
            </div>

            {/* Table Rows */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                fontFamily: fonts.mono,
                fontSize: 32,
                fontWeight: 800,
                padding: "10px 30px",
              }}
            >
              {/* Row 0: Base case 0 -> 1 */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: showBaseCase ? theme.good : "rgba(255,255,255,0.2)",
                  transition: "color 0.3s ease",
                }}
              >
                <span>0</span>
                <span style={{ fontSize: 24, color: theme.chalkLine }}>→</span>
                <span>1</span>
              </div>

              {/* Row 1 */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: theme.chalkText,
                }}
              >
                <span>1</span>
                <span style={{ fontSize: 24, color: theme.chalkLine }}>→</span>
                <span style={{ color: theme.pivot }}>2</span>
              </div>

              {/* Row 2 */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: theme.chalkText,
                }}
              >
                <span>3</span>
                <span style={{ fontSize: 24, color: theme.chalkLine }}>→</span>
                <span>1</span>
              </div>

              {/* Row Ellipsis */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                <span>...</span>
                <span style={{ fontSize: 24, color: theme.chalkLine }}>→</span>
                <span>...</span>
              </div>
            </div>

            {/* Bottom note matching reference still */}
            <div
              style={{
                marginTop: 28,
                paddingLeft: 10,
                fontFamily: fonts.hand,
                fontSize: 22,
                color: theme.chalkText,
                lineHeight: 1.4,
              }}
            >
              same prefix can appear
              <br />
              multiple times →
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 6,
                }}
              >
                <div style={{ transform: "rotate(-30deg)" }}>
                  <RadiatingTicks color={theme.good} size={24} />
                </div>
                <span
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 26,
                    fontWeight: 800,
                    color: theme.good,
                  }}
                >
                  store frequency
                </span>
                <div style={{ transform: "rotate(150deg)" }}>
                  <RadiatingTicks color={theme.good} size={24} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ===================================================================
          6. CAPTIONS (Y: 960 .. 1040)
          =================================================================== */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          zIndex: 30,
        }}
      >
        <Captions words={captionWords} />
      </div>
    </div>
  );
};
