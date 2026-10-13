/**
 * Scene07Method2Code.tsx — Scene 07 · Method 2 Code & Linear Complexity Walkthrough
 * Subarray Sum Equals K (LeetCode 560) · Pattern 01 — Arrays & Hashing
 *
 * Implements the Optimal Code Implementation, Order Invariant & Asymptotic Complexity:
 * - 100% Kit Components: ChalkCodeEditorV2 (board-native), Captions, ChalkboardBackground, ChalkFilters
 * - Board-Native: Zero dark/black card containers. Direct Oxford Green chalkboard canvas.
 * - Total Duration: 3,094 frames @ 30fps (103.140s) strictly from sync/07-method2-code.json
 * - Visual language strictly adheres to @dsa/kit design tokens
 * - Interactive line reveal, Golden Order analysis, and O(N) Complexity Breakdown
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
import {
  ChalkCodeEditorV2,
  ChalkCodeLine,
} from "../../../../kit/components/ChalkCodeEditorV2";
import { RoughBox } from "../../../../kit/components/RoughBox";
import { RoughLine } from "../../../../kit/components/RoughLine";
import { RoughCurve } from "../../../../kit/components/RoughCurve";
import syncData from "../sync/07-method2-code.json";

// ---------------------------------------------------------------------------
// Caption Normalization
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

export const Scene07Method2Code: React.FC = () => {
  const frame = useCurrentFrame();

  // =========================================================================
  // PRODUCTION CODE LINES (METHOD 2: PREFIX FREQUENCY HASH MAP)
  // =========================================================================
  const codeLines: ChalkCodeLine[] = useMemo(() => {
    return [
      {
        num: 1,
        indent: 0,
        text: "def subarraySum(nums: list[int], k: int) -> int:",
        startFrame: 0,
        endFrame: 46,
        tokens: [
          { text: "def ", color: theme.cyan },
          { text: "subarraySum", color: theme.pivot },
          { text: "(nums: list[int], k: int) -> int:", color: theme.chalkText },
        ],
      },
      {
        num: 2,
        indent: 1,
        text: "freq = {0: 1}",
        startFrame: 47,
        endFrame: 121,
        tokens: [
          { text: "freq", color: theme.cyan },
          { text: " = {", color: theme.chalkLine },
          { text: "0", color: theme.pivot },
          { text: ": ", color: theme.chalkLine },
          { text: "1", color: theme.good },
          { text: "}  # Base case: sum 0 before start", color: "rgba(255,255,255,0.4)" },
        ],
      },
      {
        num: 3,
        indent: 1,
        text: "prefix = 0",
        startFrame: 122,
        endFrame: 180,
        tokens: [
          { text: "prefix", color: theme.cyan },
          { text: " = ", color: theme.chalkLine },
          { text: "0", color: theme.purple },
        ],
      },
      {
        num: 4,
        indent: 1,
        text: "answer = 0",
        startFrame: 181,
        endFrame: 230,
        tokens: [
          { text: "answer", color: theme.good },
          { text: " = ", color: theme.chalkLine },
          { text: "0", color: theme.purple },
        ],
      },
      {
        num: 5,
        indent: 1,
        text: "for num in nums:",
        startFrame: 231,
        endFrame: 346,
        tokens: [
          { text: "for ", color: theme.cyan },
          { text: "num ", color: theme.pivot },
          { text: "in ", color: theme.cyan },
          { text: "nums:", color: theme.chalkText },
        ],
      },
      {
        num: 6,
        indent: 2,
        text: "prefix += num",
        startFrame: 347,
        endFrame: 418,
        tokens: [
          { text: "prefix", color: theme.cyan },
          { text: " += ", color: theme.chalkLine },
          { text: "num", color: theme.pivot },
        ],
      },
      {
        num: 7,
        indent: 2,
        text: "needed = prefix - k",
        startFrame: 419,
        endFrame: 561,
        tokens: [
          { text: "needed", color: theme.pivot },
          { text: " = ", color: theme.chalkLine },
          { text: "prefix", color: theme.cyan },
          { text: " - ", color: theme.chalkLine },
          { text: "k", color: theme.pivot },
        ],
      },
      {
        num: 8,
        indent: 2,
        text: "answer += freq.get(needed, 0)",
        startFrame: 562,
        endFrame: 793,
        tokens: [
          { text: "answer", color: theme.good },
          { text: " += ", color: theme.chalkLine },
          { text: "freq.get", color: theme.cyan },
          { text: "(needed, ", color: theme.chalkText },
          { text: "0", color: theme.purple },
          { text: ")", color: theme.chalkText },
        ],
      },
      {
        num: 9,
        indent: 2,
        text: "freq[prefix] = freq.get(prefix, 0) + 1",
        startFrame: 794,
        endFrame: 933,
        tokens: [
          { text: "freq", color: theme.cyan },
          { text: "[", color: theme.chalkLine },
          { text: "prefix", color: theme.cyan },
          { text: "] = ", color: theme.chalkLine },
          { text: "freq.get", color: theme.cyan },
          { text: "(prefix, ", color: theme.chalkText },
          { text: "0", color: theme.purple },
          { text: ") + ", color: theme.chalkLine },
          { text: "1", color: theme.good },
        ],
      },
      {
        num: 10,
        indent: 1,
        text: "return answer",
        startFrame: 1010,
        endFrame: 1100,
        tokens: [
          { text: "return ", color: theme.cyan },
          { text: "answer", color: theme.good },
        ],
      },
    ];
  }, []);

  // Active line highlight depending on narration frame
  const activeLineNums = useMemo(() => {
    if (frame >= 1010) return [10];
    if (frame >= 794) return [9];
    if (frame >= 562) return [8];
    if (frame >= 419) return [7];
    if (frame >= 347) return [6];
    if (frame >= 231) return [5];
    if (frame >= 181) return [4];
    if (frame >= 122) return [3];
    if (frame >= 47) return [2];
    return [1];
  }, [frame]);

  // Phase transitions:
  // Phase 1: Code Typing (F0 .. F1100)
  // Phase 2: The Golden 5-Step Order (F1100 .. F1556)
  // Phase 3: Time & Space Complexity (F1557 .. F2652)
  // Phase 4: Core Algebraic Principle (F2653 .. F3094)
  const isOrderPhase = frame >= 1100 && frame < 1556;
  const isComplexityPhase = frame >= 1557 && frame < 2653;
  const isEquationPhase = frame >= 2653;

  const isMultiPanel = isOrderPhase || isComplexityPhase || isEquationPhase;
  const editorWidth = isMultiPanel ? 820 : 1240;
  const editorLeft = isMultiPanel ? 70 : 340;
  const editorFontSize = isMultiPanel ? 20 : 23;
  const editorLineHeight = isMultiPanel ? 38 : 46;

  // Active step highlight within the Golden 5-Step Order
  const activeOrderStep = useMemo(() => {
    if (!isOrderPhase) return 0;
    if (frame >= 1487) return 6; // Lookup before insert highlight
    if (frame >= 1404) return 5; // Store current prefix
    if (frame >= 1341) return 4; // Add matches
    if (frame >= 1304) return 3; // Query earlier prefixes
    if (frame >= 1247) return 2; // Compute needed
    if (frame >= 1209) return 1; // Update prefix
    return 1;
  }, [frame, isOrderPhase]);

  // Complexity reveal thresholds
  const showTimeComp = frame >= 1700;
  const showSpaceComp = frame >= 2100;
  const showSpeedup = frame >= 2450;

  // Linear growth curve points for O(N)
  const linearCurvePoints: [number, number][] = useMemo(() => {
    return [
      [940, 680],
      [1040, 600],
      [1140, 520],
      [1240, 440],
      [1340, 360],
    ];
  }, []);

  const audioSrc = staticFile("audio/016/07-method2-code.mp3");

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
          1. HEADER (Y: 28 .. 84) — Board-Native
          =================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 30,
          left: 70,
          right: 70,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 18 }}>
          <span
            style={{
              fontFamily: fonts.display,
              fontSize: 26,
              fontWeight: 800,
              letterSpacing: 2,
              color: theme.cyan,
            }}
          >
            OPTIMAL CODE
          </span>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 22 }}>—</span>
          <span
            style={{
              fontFamily: fonts.hand,
              fontSize: 24,
              color: theme.chalkText,
            }}
          >
            Method 2: Prefix Frequency Hash Map (LeetCode 560)
          </span>
        </div>

        {/* Board-Native Header Badge */}
        <div
          style={{
            position: "relative",
            display: "inline-block",
            padding: "4px 18px",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0 }}>
            <RoughBox
              width={260}
              height={36}
              stroke={theme.good}
              strokeWidth={1.5}
              roughness={1.1}
            />
          </div>
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 18,
              color: theme.good,
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            Time: O(N) · Space: O(N)
          </span>
        </div>
      </div>

      {/* ===================================================================
          2. CODE EDITOR — Board-Native (Zero dark window chrome)
          Y: 100 .. 860
          =================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 100,
          left: editorLeft,
          width: editorWidth,
          height: 770,
          transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 10,
        }}
      >
        <ChalkCodeEditorV2
          lines={codeLines}
          activeLineNums={activeLineNums}
          variant="board-native"
          title="METHOD 2: HASH MAP OPTIMAL (PYTHON 3.11)"
          language="PYTHON 3.11"
          fontSize={editorFontSize}
          lineHeight={editorLineHeight}
          height="100%"
        />
      </div>

      {/* ===================================================================
          3. RIGHT BOARD TEACHING AREA (X: 940 .. 1850, Y: 110 .. 860)
          Zero dark box containers! Everything drawn directly on the chalkboard.
          =================================================================== */}
      {isMultiPanel && (
        <div
          style={{
            position: "absolute",
            top: 110,
            left: 940,
            width: 910,
            height: 760,
            zIndex: 12,
          }}
        >
          {/* ---------------------------------------------------------------
              ACT 2: THE GOLDEN 5-STEP ORDER (F1100 .. F1556)
              --------------------------------------------------------------- */}
          {isOrderPhase && (
            <div>
              <div
                style={{
                  fontFamily: fonts.display,
                  fontSize: 26,
                  fontWeight: 800,
                  color: theme.pivot,
                  letterSpacing: 1.5,
                  marginBottom: 8,
                }}
              >
                THE GOLDEN 5-STEP ORDER
              </div>
              <div
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 20,
                  color: "rgba(255, 255, 255, 0.7)",
                  marginBottom: 24,
                }}
              >
                Every iteration follows this strict causal sequence:
              </div>

              {/* 5 Sequential Steps */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { step: 1, label: "1. Update Prefix", code: "prefix += num", desc: "Accumulate current element" },
                  { step: 2, label: "2. Compute Needed", code: "needed = prefix - k", desc: "Derive target previous prefix" },
                  { step: 3, label: "3. Query Map", code: "freq.get(needed, 0)", desc: "Count valid starting boundaries" },
                  { step: 4, label: "4. Add Matches", code: "answer += count", desc: "Increment answer by occurrences" },
                  { step: 5, label: "5. Store Current", code: "freq[prefix] = ... + 1", desc: "Save for future subarrays" },
                ].map((item) => {
                  const isActive = activeOrderStep === item.step;
                  return (
                    <div
                      key={item.step}
                      style={{
                        position: "relative",
                        padding: "10px 18px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      {isActive && (
                        <div style={{ position: "absolute", top: 0, left: 0 }}>
                          <RoughBox
                            width={880}
                            height={52}
                            stroke={theme.pivot}
                            strokeWidth={2}
                            roughness={1.2}
                          />
                        </div>
                      )}
                      <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
                        <span
                          style={{
                            fontFamily: fonts.display,
                            fontSize: 22,
                            fontWeight: 700,
                            color: isActive ? theme.pivot : theme.chalkText,
                          }}
                        >
                          {item.label}
                        </span>
                        <span
                          style={{
                            fontFamily: fonts.hand,
                            fontSize: 18,
                            color: "rgba(255,255,255,0.6)",
                          }}
                        >
                          — {item.desc}
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 20,
                          color: isActive ? theme.cyan : "rgba(255,255,255,0.7)",
                          fontWeight: 700,
                        }}
                      >
                        {item.code}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Crucial Order Caution Callout */}
              <div
                style={{
                  position: "relative",
                  marginTop: 36,
                  padding: "16px 24px",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0 }}>
                  <RoughBox
                    width={880}
                    height={110}
                    stroke={theme.warn}
                    strokeWidth={2.2}
                    roughness={1.3}
                  />
                </div>
                <div
                  style={{
                    fontFamily: fonts.display,
                    fontSize: 22,
                    fontWeight: 800,
                    color: theme.warn,
                    marginBottom: 6,
                  }}
                >
                  ⚠ CRITICAL INVARIANT: LOOKUP BEFORE INSERT!
                </div>
                <div
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 21,
                    color: theme.chalkText,
                    lineHeight: 1.4,
                  }}
                >
                  If you insert <code style={{ color: theme.cyan, fontFamily: fonts.mono }}>freq[prefix]++</code> before querying, an empty subarray of sum 0 would match itself when k = 0, corrupting the answer count!
                </div>
              </div>
            </div>
          )}

          {/* ---------------------------------------------------------------
              ACT 3: ASYMPTOTIC COMPLEXITY ANALYSIS (F1557 .. F2652)
              --------------------------------------------------------------- */}
          {isComplexityPhase && (
            <div>
              <div
                style={{
                  fontFamily: fonts.display,
                  fontSize: 26,
                  fontWeight: 800,
                  color: theme.good,
                  letterSpacing: 1.5,
                  marginBottom: 8,
                }}
              >
                ASYMPTOTIC COMPLEXITY
              </div>
              <div
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 20,
                  color: "rgba(255, 255, 255, 0.7)",
                  marginBottom: 24,
                }}
              >
                Single pass with expected O(1) hash map operations:
              </div>

              {/* Time Complexity Section */}
              {showTimeComp && (
                <div style={{ marginBottom: 32 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 14 }}>
                    <span
                      style={{
                        fontFamily: fonts.display,
                        fontSize: 24,
                        fontWeight: 700,
                        color: theme.chalkText,
                      }}
                    >
                      Time Complexity:
                    </span>
                    <div style={{ position: "relative", display: "inline-block", padding: "6px 24px" }}>
                      <div style={{ position: "absolute", top: 0, left: 0 }}>
                        <RoughBox
                          width={140}
                          height={56}
                          stroke={theme.good}
                          strokeWidth={2.5}
                          roughness={1.2}
                        />
                      </div>
                      <span
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 34,
                          fontWeight: 900,
                          color: theme.good,
                          whiteSpace: "nowrap",
                        }}
                      >
                        O(N)
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: fonts.hand,
                        fontSize: 22,
                        color: theme.good,
                      }}
                    >
                      Linear Time
                    </span>
                  </div>

                  <div
                    style={{
                      fontFamily: fonts.hand,
                      fontSize: 21,
                      lineHeight: 1.6,
                      color: theme.chalkText,
                      paddingLeft: 12,
                    }}
                  >
                    • Array scanned exactly once: <strong style={{ color: theme.cyan }}>N iterations</strong>.<br />
                    • Per iteration: arithmetic (<span style={{ color: theme.pivot }}>O(1)</span>) + map lookup & insert (<span style={{ color: theme.pivot }}>O(1)</span> avg).<br />
                    • Total runtime: <strong style={{ color: theme.good }}>N × O(1) = O(N)</strong>!
                  </div>
                </div>
              )}

              {/* Space Complexity Section */}
              {showSpaceComp && (
                <div style={{ marginBottom: 32 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 14 }}>
                    <span
                      style={{
                        fontFamily: fonts.display,
                        fontSize: 24,
                        fontWeight: 700,
                        color: theme.chalkText,
                      }}
                    >
                      Space Complexity:
                    </span>
                    <div style={{ position: "relative", display: "inline-block", padding: "6px 24px" }}>
                      <div style={{ position: "absolute", top: 0, left: 0 }}>
                        <RoughBox
                          width={140}
                          height={56}
                          stroke={theme.pivot}
                          strokeWidth={2.5}
                          roughness={1.2}
                        />
                      </div>
                      <span
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 34,
                          fontWeight: 900,
                          color: theme.pivot,
                          whiteSpace: "nowrap",
                        }}
                      >
                        O(N)
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: fonts.hand,
                        fontSize: 22,
                        color: theme.pivot,
                      }}
                    >
                      Linear Auxiliary Memory
                    </span>
                  </div>

                  <div
                    style={{
                      fontFamily: fonts.hand,
                      fontSize: 21,
                      lineHeight: 1.6,
                      color: theme.chalkText,
                      paddingLeft: 12,
                    }}
                  >
                    • In the worst case, every prefix sum in the array is distinct.<br />
                    • The hash map stores up to <strong style={{ color: theme.cyan }}>N + 1</strong> key-value pairs.<br />
                    • Auxiliary memory: <strong style={{ color: theme.pivot }}>O(N)</strong> hash map space.
                  </div>
                </div>
              )}

              {/* Speedup Comparison Callout */}
              {showSpeedup && (
                <div
                  style={{
                    position: "relative",
                    marginTop: 24,
                    padding: "16px 24px",
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0 }}>
                    <RoughBox
                      width={880}
                      height={90}
                      stroke={theme.cyan}
                      strokeWidth={2}
                      roughness={1.2}
                    />
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.display,
                      fontSize: 22,
                      fontWeight: 700,
                      color: theme.cyan,
                      marginBottom: 6,
                    }}
                  >
                    QUADRATIC TO LINEAR SPEEDUP
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 22,
                      color: theme.chalkText,
                      display: "flex",
                      alignItems: "center",
                      gap: 20,
                    }}
                  >
                    <span style={{ color: theme.warn }}>Method 1: O(N²)</span>
                    <span style={{ color: "rgba(255,255,255,0.4)" }}>➔</span>
                    <span style={{ color: theme.good, fontWeight: 900 }}>Method 2: O(N) Linear ⚡</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ---------------------------------------------------------------
              ACT 4: CORE ALGEBRAIC EQUATION (F2653 .. F3094)
              --------------------------------------------------------------- */}
          {isEquationPhase && (
            <div>
              <div
                style={{
                  fontFamily: fonts.display,
                  fontSize: 26,
                  fontWeight: 800,
                  color: theme.cyan,
                  letterSpacing: 1.5,
                  marginBottom: 8,
                }}
              >
                THE CORE ALGEBRAIC PRINCIPLE
              </div>
              <div
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 20,
                  color: "rgba(255, 255, 255, 0.7)",
                  marginBottom: 30,
                }}
              >
                Replacing nested scans with a single algebraic frequency lookup:
              </div>

              {/* Master Equation Hero Banner */}
              <div
                style={{
                  position: "relative",
                  padding: "24px 30px",
                  marginBottom: 36,
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0 }}>
                  <RoughBox
                    width={880}
                    height={215}
                    stroke={theme.cyan}
                    strokeWidth={2.5}
                    roughness={1.3}
                  />
                </div>
                <div
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 22,
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: 10,
                  }}
                >
                  Subarray Sum Condition:
                </div>
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 32,
                    fontWeight: 800,
                    color: theme.chalkText,
                    marginBottom: 14,
                  }}
                >
                  current_prefix - previous_prefix = <span style={{ color: theme.pivot }}>k</span>
                </div>
                <div
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 22,
                    color: theme.cyan,
                    marginBottom: 8,
                  }}
                >
                  Rearranging for the lookup target:
                </div>
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 38,
                    fontWeight: 900,
                    color: theme.good,
                  }}
                >
                  needed = current_prefix - <span style={{ color: theme.pivot }}>k</span>
                </div>
              </div>

              {/* Why This Beats Brute Force */}
              <div
                style={{
                  position: "relative",
                  padding: "18px 24px",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0 }}>
                  <RoughBox
                    width={880}
                    height={130}
                    stroke={theme.good}
                    strokeWidth={2}
                    roughness={1.1}
                  />
                </div>
                <div
                  style={{
                    fontFamily: fonts.display,
                    fontSize: 22,
                    fontWeight: 700,
                    color: theme.good,
                    marginBottom: 8,
                  }}
                >
                  Why This Replaces The Inner Loop:
                </div>
                <div
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 21,
                    lineHeight: 1.55,
                    color: theme.chalkText,
                  }}
                >
                  Instead of checking all previous indices <code style={{ color: theme.cyan, fontFamily: fonts.mono }}>0..i</code> with a nested scan, the hash map instantly gives the exact count of all valid starting boundaries in a single <strong style={{ color: theme.good }}>O(1)</strong> lookup!
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ===================================================================
          4. BOTTOM CAPTIONS (Y: 960 .. 1040)
          =================================================================== */}
      {/* 4. Bottom Captions */}
      <Captions words={captionWords} bottom={36} />
    </div>
  );
};
