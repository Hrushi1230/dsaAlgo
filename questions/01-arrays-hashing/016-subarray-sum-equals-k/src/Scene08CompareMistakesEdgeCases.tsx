/**
 * Scene08CompareMistakesEdgeCases.tsx — Scene 08 · Comparison, Pitfalls & Edge Cases
 * Subarray Sum Equals K (LeetCode 560) · Pattern 01 — Arrays & Hashing
 *
 * Implements the Method Comparison, 5 Pitfalls, 3 Edge Cases & Golden Rule:
 * - 100% Kit Components: Captions, ChalkboardBackground, ChalkFilters, RoughBox, RoughLine
 * - Board-Native: Zero dark/black card containers. Direct Oxford Green chalkboard canvas.
 * - Total Duration: 1,816 frames @ 30fps (60.520s) strictly from sync/08-compare-mistakes-edgecases.json
 * - Visual language strictly adheres to @dsa/kit design tokens
 * - Sequential single-concept reveals: One mistake at a time, minimal edge cases, direct chalk.
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
import syncData from "../sync/08-compare-mistakes-edgecases.json";

// ---------------------------------------------------------------------------
// Caption Normalization
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

export const Scene08CompareMistakesEdgeCases: React.FC = () => {
  const frame = useCurrentFrame();

  // Act 1: Method Comparison (F0 .. F592)
  // Act 2: 5 Key Pitfalls (F592 .. F1273)
  // Act 3: 3 Edge Cases (F1274 .. F1711)
  // Act 4: The Golden Rule (F1712 .. F1816)
  const isComparisonAct = frame < 592;
  const isPitfallsAct = frame >= 592 && frame < 1274;
  const isEdgeCasesAct = frame >= 1274 && frame < 1712;
  const isGoldenRuleAct = frame >= 1712;

  // Active pitfall index (one at a time center stage!)
  const activePitfallIndex = useMemo(() => {
    if (!isPitfallsAct) return -1;
    if (frame >= 1050) return 4; // Index vs prefix boundary
    if (frame >= 965) return 3;  // Query before insert
    if (frame >= 858) return 2;  // freq[0] = 1
    if (frame >= 740) return 1;  // Frequency not existence
    return 0;                    // Sliding window fails with negatives
  }, [frame, isPitfallsAct]);

  // Active edge case index (one at a time center stage!)
  const activeEdgeCase = useMemo(() => {
    if (!isEdgeCasesAct) return 0;
    if (frame >= 1517) return 3; // [0, 0, 0], k = 0 -> ans = 6
    if (frame >= 1396) return 2; // [0], k = 0 -> ans = 1
    return 1;                    // [3], k = 3 -> ans = 1
  }, [frame, isEdgeCasesAct]);

  const audioSrc = staticFile("audio/016/08-compare-mistakes-edgecases.mp3");

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
          alignItems: "baseline",
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
            INTERVIEW GUIDE
          </span>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 22 }}>—</span>
          <span
            style={{
              fontFamily: fonts.hand,
              fontSize: 24,
              color: theme.chalkText,
            }}
          >
            {isComparisonAct
              ? "Method 1 vs Method 2 Trade-Offs"
              : isPitfallsAct
              ? `Critical Trap ${activePitfallIndex + 1} of 5`
              : isEdgeCasesAct
              ? `Must-Test Edge Case ${activeEdgeCase} of 3`
              : "The Core Algorithmic Invariant"}
          </span>
        </div>

        {/* Phase Indicator Badge */}
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
              stroke={theme.pivot}
              strokeWidth={1.5}
              roughness={1.1}
            />
          </div>
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 17,
              color: theme.pivot,
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            {isComparisonAct
              ? "1. Trade-Offs"
              : isPitfallsAct
              ? "2. Common Traps"
              : isEdgeCasesAct
              ? "3. Edge Cases"
              : "4. Core Rule"}
          </span>
        </div>
      </div>

      {/* ===================================================================
          2. MAIN STAGE CONTENT (Y: 110 .. 860) — Board-Native
          =================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 110,
          left: 70,
          right: 70,
          height: 750,
          zIndex: 12,
        }}
      >
        {/* -----------------------------------------------------------------
            ACT 1: HEAD-TO-HEAD METHOD COMPARISON (F0 .. F592)
            Direct 2-column board layout with zero dark cards!
            ----------------------------------------------------------------- */}
        {isComparisonAct && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              height: "100%",
              paddingTop: 20,
            }}
          >
            {/* Left Column: Method 1 */}
            <div>
              <div
                style={{
                  fontFamily: fonts.display,
                  fontSize: 28,
                  fontWeight: 800,
                  color: theme.warn,
                  marginBottom: 8,
                }}
              >
                METHOD 1: RUNNING SUM ENUMERATION
              </div>
              <div
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 20,
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: 28,
                }}
              >
                Fix starting index, expand end boundary:
              </div>

              {/* Complexity Badges */}
              <div style={{ display: "flex", gap: 32, marginBottom: 32 }}>
                <div>
                  <div style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>
                    TIME COMPLEXITY
                  </div>
                  <div style={{ position: "relative", display: "inline-block", padding: "6px 24px" }}>
                    <div style={{ position: "absolute", top: 0, left: 0 }}>
                      <RoughBox
                        width={150}
                        height={56}
                        stroke={theme.warn}
                        strokeWidth={2.4}
                        roughness={1.2}
                      />
                    </div>
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 34,
                        fontWeight: 900,
                        color: theme.warn,
                        whiteSpace: "nowrap",
                      }}
                    >
                      O(N²)
                    </span>
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>
                    AUXILIARY SPACE
                  </div>
                  <div style={{ position: "relative", display: "inline-block", padding: "6px 24px" }}>
                    <div style={{ position: "absolute", top: 0, left: 0 }}>
                      <RoughBox
                        width={130}
                        height={56}
                        stroke={theme.good}
                        strokeWidth={2.4}
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
                      O(1)
                    </span>
                  </div>
                </div>
              </div>

              {/* Teaching bullets directly on chalkboard */}
              <div
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 22,
                  lineHeight: 1.6,
                  color: theme.chalkText,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <div>✔ No heap allocation — only two scalar pointers (<code style={{ color: theme.cyan }}>start</code>, <code style={{ color: theme.cyan }}>end</code>).</div>
                <div>✔ Straightforward to formulate and explain as initial baseline.</div>
                <div style={{ color: theme.warn }}>
                  ✕ Quadratic bottleneck: Time Limit Exceeded (TLE) when N = 20,000 (~400M ops).
                </div>
              </div>
            </div>

            {/* Right Column: Method 2 */}
            <div>
              <div
                style={{
                  fontFamily: fonts.display,
                  fontSize: 28,
                  fontWeight: 800,
                  color: theme.good,
                  marginBottom: 8,
                }}
              >
                METHOD 2: PREFIX FREQUENCY MAP (OPTIMAL)
              </div>
              <div
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 20,
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: 28,
                }}
              >
                Single linear pass + O(1) hash map lookup:
              </div>

              {/* Complexity Badges */}
              <div style={{ display: "flex", gap: 32, marginBottom: 32 }}>
                <div>
                  <div style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>
                    EXPECTED TIME
                  </div>
                  <div style={{ position: "relative", display: "inline-block", padding: "6px 24px" }}>
                    <div style={{ position: "absolute", top: 0, left: 0 }}>
                      <RoughBox
                        width={170}
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
                      O(N) ⚡
                    </span>
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>
                    AUXILIARY SPACE
                  </div>
                  <div style={{ position: "relative", display: "inline-block", padding: "6px 24px" }}>
                    <div style={{ position: "absolute", top: 0, left: 0 }}>
                      <RoughBox
                        width={140}
                        height={56}
                        stroke={theme.pivot}
                        strokeWidth={2.4}
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
                </div>
              </div>

              {/* Teaching bullets directly on chalkboard */}
              <div
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 22,
                  lineHeight: 1.6,
                  color: theme.chalkText,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <div>✔ Single pass across array: 20,000 operations instead of 400M!</div>
                <div>✔ Instant O(1) count of multiple identical prefixes via frequencies.</div>
                <div>✔ Seamlessly handles negative numbers, zeros, and duplicates.</div>
                <div style={{ color: theme.good, fontWeight: 700 }}>
                  ✔ Optimal LeetCode submission — passes all 93 tests in ~25ms.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* -----------------------------------------------------------------
            ACT 2: 5 KEY PITFALLS TO AVOID (F592 .. F1273)
            Revealed ONE MISTAKE AT A TIME, center-stage!
            ----------------------------------------------------------------- */}
        {isPitfallsAct && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              textAlign: "center",
              padding: "0 100px",
            }}
          >
            {activePitfallIndex === 0 && (
              <div>
                <div
                  style={{
                    fontFamily: fonts.display,
                    fontSize: 24,
                    color: theme.warn,
                    fontWeight: 800,
                    letterSpacing: 2,
                    marginBottom: 16,
                  }}
                >
                  TRAP 1: ATTEMPTING TWO-POINTER / SLIDING WINDOW
                </div>

                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                    padding: "24px 44px",
                    marginBottom: 28,
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0 }}>
                    <RoughBox
                      width={1040}
                      height={100}
                      stroke={theme.warn}
                      strokeWidth={2.5}
                      roughness={1.3}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 36,
                      fontWeight: 900,
                      color: theme.warn,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Sliding window requires monotonic sums!
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 26,
                    lineHeight: 1.6,
                    color: theme.chalkText,
                    maxWidth: 1200,
                    margin: "0 auto",
                  }}
                >
                  When negative numbers exist, expanding a window can <strong style={{ color: theme.cyan }}>decrease</strong> the sum, and shrinking can <strong style={{ color: theme.cyan }}>increase</strong> it.<br />
                  Monotonicity is completely broken — sliding window will skip valid subarrays!
                </div>
              </div>
            )}

            {activePitfallIndex === 1 && (
              <div>
                <div
                  style={{
                    fontFamily: fonts.display,
                    fontSize: 24,
                    color: theme.warn,
                    fontWeight: 800,
                    letterSpacing: 2,
                    marginBottom: 16,
                  }}
                >
                  TRAP 2: STORING BOOLEAN EXISTENCE INSTEAD OF FREQUENCY
                </div>

                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                    padding: "24px 44px",
                    marginBottom: 28,
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0 }}>
                    <RoughBox
                      width={1040}
                      height={100}
                      stroke={theme.pivot}
                      strokeWidth={2.5}
                      roughness={1.3}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 36,
                      fontWeight: 900,
                      color: theme.pivot,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Prefix sums repeat! Use a frequency map.
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 26,
                    lineHeight: 1.6,
                    color: theme.chalkText,
                    maxWidth: 1200,
                    margin: "0 auto",
                  }}
                >
                  Zeroes and cancelling positive/negative pairs create identical prefix sums at different indices.<br />
                  A simple HashSet or Boolean flag ignores multiplicities and produces severe undercounts!
                </div>
              </div>
            )}

            {activePitfallIndex === 2 && (
              <div>
                <div
                  style={{
                    fontFamily: fonts.display,
                    fontSize: 24,
                    color: theme.warn,
                    fontWeight: 800,
                    letterSpacing: 2,
                    marginBottom: 16,
                  }}
                >
                  TRAP 3: FORGETTING THE BASE CASE: freq[0] = 1
                </div>

                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                    padding: "24px 44px",
                    marginBottom: 28,
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0 }}>
                    <RoughBox
                      width={1040}
                      height={100}
                      stroke={theme.cyan}
                      strokeWidth={2.5}
                      roughness={1.3}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 40,
                      fontWeight: 900,
                      color: theme.cyan,
                      whiteSpace: "nowrap",
                    }}
                  >
                    freq = &#123; 0: 1 &#125; is mandatory!
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 26,
                    lineHeight: 1.6,
                    color: theme.chalkText,
                    maxWidth: 1200,
                    margin: "0 auto",
                  }}
                >
                  An imaginary prefix sum of 0 exists before index 0.<br />
                  If a subarray starting at index 0 sums to k, then <code style={{ color: theme.cyan }}>prefix - k = 0</code>. Without this entry, valid subarrays starting at index 0 are missed!
                </div>
              </div>
            )}

            {activePitfallIndex === 3 && (
              <div>
                <div
                  style={{
                    fontFamily: fonts.display,
                    fontSize: 24,
                    color: theme.warn,
                    fontWeight: 800,
                    letterSpacing: 2,
                    marginBottom: 16,
                  }}
                >
                  TRAP 4: INSERTING BEFORE QUERYING (ORDER BUG)
                </div>

                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                    padding: "24px 44px",
                    marginBottom: 28,
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0 }}>
                    <RoughBox
                      width={1040}
                      height={100}
                      stroke={theme.warn}
                      strokeWidth={2.5}
                      roughness={1.3}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 36,
                      fontWeight: 900,
                      color: theme.warn,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Always lookup BEFORE inserting!
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 26,
                    lineHeight: 1.6,
                    color: theme.chalkText,
                    maxWidth: 1200,
                    margin: "0 auto",
                  }}
                >
                  If you increment <code style={{ color: theme.cyan }}>freq[prefix]</code> first, then whenever k = 0, needed == prefix!<br />
                  The current element matches itself, falsely counting an empty subarray ending at that point!
                </div>
              </div>
            )}

            {activePitfallIndex === 4 && (
              <div>
                <div
                  style={{
                    fontFamily: fonts.display,
                    fontSize: 24,
                    color: theme.warn,
                    fontWeight: 800,
                    letterSpacing: 2,
                    marginBottom: 16,
                  }}
                >
                  TRAP 5: CONFUSING INDEX WITH PREFIX BOUNDARY
                </div>

                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                    padding: "24px 44px",
                    marginBottom: 28,
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0 }}>
                    <RoughBox
                      width={1040}
                      height={100}
                      stroke={theme.good}
                      strokeWidth={2.5}
                      roughness={1.3}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 36,
                      fontWeight: 900,
                      color: theme.good,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Prefix boundary P[j] leaves nums[j .. i-1]
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 26,
                    lineHeight: 1.6,
                    color: theme.chalkText,
                    maxWidth: 1200,
                    margin: "0 auto",
                  }}
                >
                  Subtracting prefix P[j] removes elements up to index j - 1.<br />
                  The remaining subarray spans index j through the current element!
                </div>
              </div>
            )}
          </div>
        )}

        {/* -----------------------------------------------------------------
            ACT 3: 3 CRITICAL EDGE CASES (F1274 .. F1711)
            Revealed ONE AT A TIME center-stage!
            ----------------------------------------------------------------- */}
        {isEdgeCasesAct && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              textAlign: "center",
              padding: "0 80px",
            }}
          >
            {activeEdgeCase === 1 && (
              <div>
                <div
                  style={{
                    fontFamily: fonts.display,
                    fontSize: 24,
                    color: theme.cyan,
                    fontWeight: 800,
                    letterSpacing: 2,
                    marginBottom: 16,
                  }}
                >
                  EDGE CASE 1: SINGLE ELEMENT MATCH
                </div>

                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                    padding: "24px 48px",
                    marginBottom: 28,
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0 }}>
                    <RoughBox
                      width={840}
                      height={96}
                      stroke={theme.cyan}
                      strokeWidth={2.5}
                      roughness={1.2}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 38,
                      fontWeight: 900,
                      color: theme.chalkText,
                      whiteSpace: "nowrap",
                    }}
                  >
                    nums = [3], k = 3 ➔ Output: <span style={{ color: theme.good }}>1</span>
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 26,
                    lineHeight: 1.6,
                    color: theme.chalkText,
                    maxWidth: 1100,
                    margin: "0 auto",
                  }}
                >
                  Prefix becomes 3. Needed = 3 - 3 = 0.<br />
                  Matches base case <code style={{ color: theme.cyan }}>freq[0] = 1</code> immediately! Subarray is <code style={{ color: theme.pivot }}>[3]</code>.
                </div>
              </div>
            )}

            {activeEdgeCase === 2 && (
              <div>
                <div
                  style={{
                    fontFamily: fonts.display,
                    fontSize: 24,
                    color: theme.pivot,
                    fontWeight: 800,
                    letterSpacing: 2,
                    marginBottom: 16,
                  }}
                >
                  EDGE CASE 2: SINGLE ZERO WITH TARGET ZERO
                </div>

                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                    padding: "24px 48px",
                    marginBottom: 28,
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0 }}>
                    <RoughBox
                      width={840}
                      height={96}
                      stroke={theme.pivot}
                      strokeWidth={2.5}
                      roughness={1.2}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 38,
                      fontWeight: 900,
                      color: theme.chalkText,
                      whiteSpace: "nowrap",
                    }}
                  >
                    nums = [0], k = 0 ➔ Output: <span style={{ color: theme.good }}>1</span>
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 26,
                    lineHeight: 1.6,
                    color: theme.chalkText,
                    maxWidth: 1100,
                    margin: "0 auto",
                  }}
                >
                  Prefix = 0. Needed = 0 - 0 = 0.<br />
                  Matches initial base case freq[0] = 1 once. Subarray is <code style={{ color: theme.pivot }}>[0]</code>.
                </div>
              </div>
            )}

            {activeEdgeCase === 3 && (
              <div>
                <div
                  style={{
                    fontFamily: fonts.display,
                    fontSize: 24,
                    color: theme.good,
                    fontWeight: 800,
                    letterSpacing: 2,
                    marginBottom: 16,
                  }}
                >
                  EDGE CASE 3: MULTIPLE ZEROS (FREQUENCY MULTIPLICITY)
                </div>

                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                    padding: "24px 48px",
                    marginBottom: 28,
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0 }}>
                    <RoughBox
                      width={920}
                      height={96}
                      stroke={theme.good}
                      strokeWidth={2.5}
                      roughness={1.2}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 38,
                      fontWeight: 900,
                      color: theme.chalkText,
                      whiteSpace: "nowrap",
                    }}
                  >
                    nums = [0, 0, 0], k = 0 ➔ Output: <span style={{ color: theme.good }}>6</span>
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 26,
                    lineHeight: 1.6,
                    color: theme.chalkText,
                    maxWidth: 1200,
                    margin: "0 auto",
                  }}
                >
                  Every single contiguous subarray sums to 0!<br />
                  3 of length 1 + 2 of length 2 + 1 of length 3 = <strong style={{ color: theme.good }}>6 total</strong>.<br />
                  Proves why storing exact frequency counts is absolutely required!
                </div>
              </div>
            )}
          </div>
        )}

        {/* -----------------------------------------------------------------
            ACT 4: THE GOLDEN INVARIANT (F1712 .. F1816)
            Board-Native Master Rule
            ----------------------------------------------------------------- */}
        {isGoldenRuleAct && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              textAlign: "center",
              padding: "0 80px",
            }}
          >
            <div
              style={{
                fontFamily: fonts.display,
                fontSize: 26,
                fontWeight: 800,
                color: theme.pivot,
                letterSpacing: 2,
                marginBottom: 24,
              }}
            >
              ★ THE ONE GOLDEN INVARIANT TO REMEMBER ★
            </div>

            <div
              style={{
                position: "relative",
                display: "inline-block",
                padding: "28px 60px",
                marginBottom: 36,
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0 }}>
                <RoughBox
                  width={960}
                  height={120}
                  stroke={theme.good}
                  strokeWidth={3}
                  roughness={1.3}
                />
              </div>
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 54,
                  fontWeight: 900,
                  color: theme.chalkText,
                  whiteSpace: "nowrap",
                }}
              >
                answer += freq[<span style={{ color: theme.cyan }}>needed</span>]
              </span>
            </div>

            <div
              style={{
                fontFamily: fonts.hand,
                fontSize: 26,
                color: "rgba(255,255,255,0.85)",
                maxWidth: 1100,
                lineHeight: 1.5,
              }}
            >
              Every time <code style={{ color: theme.cyan }}>(prefix - k)</code> appeared previously, it marked a distinct starting boundary that produces a valid subarray sum equal to <code style={{ color: theme.pivot }}>k</code>!
            </div>
          </div>
        )}
      </div>

      {/* 4. BOTTOM CAPTIONS */}
      <Captions words={captionWords} bottom={36} />
    </div>
  );
};
