/**
 * Scene09ComplexityMistakes.tsx — Scene 09 · Complexity, Pitfalls & Edge Cases
 * Spiral Matrix (LeetCode 54) · Pattern 01 — Arrays & Hashing
 *
 * Implements:
 * - Phase 1 (F0..F828): Method 1 vs Method 2 Comparison & Representation Leap
 * - Phase 2 (F829..F2422): 5 Critical Pitfalls & Invariant Safeguards
 *   (Non-square, double turn guard, consume-before-shrink, single-row duplicate trap, <= invariant)
 * - Phase 3 (F2423..F3175): 5 Canonical Edge Cases & Value Independence Law (POSITION > VALUE)
 * - Captions at bottom with 130px breathing room
 *
 * Total Duration: 3,175 frames @ 30fps (105.840s) strictly from sync/09-complexity-mistakes-edgecases.json
 */

import React from "react";
import { useCurrentFrame, interpolate, spring, Audio, staticFile } from "remotion";

import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme as baseTheme, fonts } from "../../../../kit/lib/theme";
import { RoughBox } from "../../../../kit/components/RoughBox";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import syncData from "../sync/09-complexity-mistakes-edgecases.json";

const theme = {
  ...baseTheme,
  gold: baseTheme.pivot,
  chalkSub: baseTheme.chalkDim,
  chalkBorder: baseTheme.cardBorder,
};

const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

export const Scene09ComplexityMistakes: React.FC = () => {
  const frame = useCurrentFrame();
  const fps = 30;

  // Phase tracking
  const isPhase1 = frame < 829;
  const isPhase2 = frame >= 829 && frame < 2423;
  const isPhase3 = frame >= 2423;

  return (
    <div
      style={{
        position: "relative",
        width: 1920,
        height: 1080,
        overflow: "hidden",
        backgroundColor: theme.boardBg,
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      {/* =====================================================================
          TOP HEADER: Course Pattern & Problem Title (Y: 28..76)
         ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 28,
          left: 80,
          right: 80,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(248, 246, 240, 0.15)",
          paddingBottom: 8,
          zIndex: 20,
        }}
      >
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: "1.5px",
            color: theme.chalkText,
          }}
        >
          <span style={{ color: theme.emerald }}>●</span> 01 · ARRAYS & HASHING
        </div>

        <div
          style={{
            fontFamily: fonts.display,
            fontSize: 28,
            fontWeight: 700,
            color: theme.chalkText,
            letterSpacing: "0.5px",
          }}
        >
          Spiral Matrix — <span style={{ color: theme.cyan }}>Complexity, Critical Pitfalls & Edge Cases</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 14,
              color: "rgba(248, 246, 240, 0.6)",
              fontWeight: 700,
            }}
          >
            #015
          </span>
          <div
            style={{
              padding: "4px 10px",
              borderRadius: 6,
              backgroundColor: "rgba(255, 230, 109, 0.15)",
              border: `1px solid ${theme.gold}`,
              fontFamily: fonts.mono,
              fontSize: 12,
              fontWeight: 800,
              color: theme.gold,
              letterSpacing: "1px",
            }}
          >
            MEDIUM
          </div>
        </div>
      </div>

      {/* =====================================================================
          PHASE 1: METHOD 1 VS METHOD 2 COMPARISON (F0..F828)
         ===================================================================== */}
      {isPhase1 && (
        <div
          style={{
            position: "absolute",
            top: 100,
            left: 100,
            right: 100,
            height: 720,
            display: "flex",
            flexDirection: "column",
            gap: 20,
            zIndex: 10,
          }}
        >
          {/* Top row: Side-by-side comparison cards */}
          <div style={{ display: "flex", gap: 24, height: 380 }}>
            {/* Method 1 Card */}
            <div style={{ flex: 1, position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                <RoughBox width={848} height={380} stroke={theme.warn} strokeWidth={2.5} seed={901} />
              </div>
              <div style={{ position: "relative", zIndex: 2, padding: "26px 30px" }}>
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 14,
                    fontWeight: 800,
                    color: theme.warn,
                    letterSpacing: 1.5,
                    marginBottom: 10,
                  }}
                >
                  METHOD 1: DIRECTION SIMULATION + VISITED
                </div>

                <div
                  style={{
                    fontFamily: fonts.sans,
                    fontSize: 16,
                    color: theme.chalkText,
                    marginBottom: 20,
                  }}
                >
                  Simulates a moving coordinate (r, c) turning clockwise whenever it hits a boundary or visited cell.
                </div>

                {frame < 71 ? (
                  <div
                    style={{
                      padding: "16px 20px",
                      borderRadius: 8,
                      border: "1.5px dashed rgba(248, 246, 240, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.chalkDim }}>
                      METHOD 1 COMPLEXITY:
                    </span>
                    <span style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkDim }}>
                      Awaiting spoken breakdown...
                    </span>
                  </div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <div
                      style={{
                        padding: "12px 18px",
                        borderRadius: 6,
                        border: `1.5px solid ${theme.gold}`,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkText }}>
                        TIME COMPLEXITY:
                      </span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 800, color: theme.gold }}>
                        O(m × n)
                      </span>
                    </div>

                    {frame >= 237 ? (
                      <div
                        style={{
                          padding: "12px 18px",
                          borderRadius: 6,
                          border: `1.5px solid ${theme.warn}`,
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkText }}>
                          AUXILIARY SPACE:
                        </span>
                        <span style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 800, color: theme.warn }}>
                          O(m × n) &nbsp; ⚠️ [Allocates visited grid]
                        </span>
                      </div>
                    ) : (
                      <div
                        style={{
                          padding: "12px 18px",
                          borderRadius: 6,
                          border: "1.5px dashed rgba(248, 246, 240, 0.2)",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.chalkDim }}>
                          AUXILIARY SPACE:
                        </span>
                        <span style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkDim }}>
                          Evaluating space...
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Method 2 Card */}
            <div style={{ flex: 1, position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                <RoughBox width={848} height={380} stroke={theme.emerald} strokeWidth={2.5} seed={902} />
              </div>
              <div style={{ position: "relative", zIndex: 2, padding: "26px 30px" }}>
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 14,
                    fontWeight: 800,
                    color: theme.emerald,
                    letterSpacing: 1.5,
                    marginBottom: 10,
                  }}
                >
                  METHOD 2: SHRINKING BOUNDARY TRAVERSAL 🏆
                </div>

                <div
                  style={{
                    fontFamily: fonts.sans,
                    fontSize: 16,
                    color: theme.chalkText,
                    marginBottom: 20,
                  }}
                >
                  Consumes outer perimeters and shrinks 4 boundary pointers: <code style={{ color: theme.cyan }}>top, bottom, left, right</code>.
                </div>

                {frame < 356 ? (
                  <div
                    style={{
                      padding: "16px 20px",
                      borderRadius: 8,
                      border: "1.5px dashed rgba(248, 246, 240, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.chalkDim }}>
                      METHOD 2 COMPLEXITY:
                    </span>
                    <span style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkDim }}>
                      Awaiting spoken breakdown...
                    </span>
                  </div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <div
                      style={{
                        padding: "12px 18px",
                        borderRadius: 6,
                        border: `1.5px solid ${theme.gold}`,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkText }}>
                        TIME COMPLEXITY:
                      </span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 800, color: theme.gold }}>
                        O(m × n)
                      </span>
                    </div>

                    <div
                      style={{
                        padding: "12px 18px",
                        borderRadius: 6,
                        border: `1.5px solid ${theme.emerald}`,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkText }}>
                        AUXILIARY SPACE:
                      </span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 22, fontWeight: 900, color: theme.emerald }}>
                        O(1) &nbsp; 🏆 [ZERO EXTRA MEMORY!]
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom row: Representation synthesis banner - STRICTLY GATED TO SPOKEN CUE (F648+) */}
          {frame >= 648 && (
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 180,
              }}
            >
              <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                <RoughBox width={1720} height={180} stroke={theme.gold} strokeWidth={2.5} seed={903} />
              </div>
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  padding: "20px 32px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 15,
                    fontWeight: 800,
                    color: theme.gold,
                    letterSpacing: 2,
                    marginBottom: 8,
                  }}
                >
                  💡 CORE COMPUTER SCIENCE INSIGHT
                </div>
                <div
                  style={{
                    fontFamily: fonts.display,
                    fontSize: 24,
                    fontWeight: 700,
                    color: theme.chalkText,
                    lineHeight: 1.3,
                  }}
                >
                  "The time is identical: both must visit all m × n cells.
                  The difference is <span style={{ color: theme.cyan }}>how we represent the remaining work</span>."
                </div>
                <div
                  style={{
                    fontFamily: fonts.sans,
                    fontSize: 16,
                    color: theme.chalkSub,
                    marginTop: 6,
                  }}
                >
                  Explicit m × n Boolean Matrix ➔ Replaced by 4 Implicit Boundary Scalar Integers!
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* =====================================================================
          PHASE 2: 5 CRITICAL PITFALLS (F829..F2422)
         ===================================================================== */}
      {isPhase2 && (
        <div
          style={{
            position: "absolute",
            top: 100,
            left: 100,
            right: 100,
            height: 730,
            display: "flex",
            gap: 24,
            zIndex: 10,
          }}
        >
          {/* Left Column: 5 Pitfalls List (Width: 920px) */}
          <div style={{ flex: 1.1, position: "relative" }}>
            <RoughBox width={900} height={720} stroke={theme.warn} strokeWidth={2.5} seed={904} />
            <div style={{ position: "absolute", inset: 0, padding: "24px 28px" }}>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 14,
                  fontWeight: 800,
                  color: theme.warn,
                  letterSpacing: 1.5,
                  marginBottom: 16,
                }}
              >
                ⚠️ 5 CRITICAL IMPLEMENTATION PITFALLS
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {/* Pitfall 1 */}
                <div
                  style={{
                    padding: "10px 14px",
                    borderRadius: 6,
                    backgroundColor: frame >= 916 ? "rgba(255, 107, 107, 0.08)" : "transparent",
                    border: `1.5px solid ${frame >= 916 ? theme.warn : "rgba(248, 246, 240, 0.15)"}`,
                    opacity: frame >= 916 ? 1 : 0.4,
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: theme.warn }}>
                    1. Assuming the Matrix is Square (m × m)
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkText, marginTop: 4 }}>
                    The input is m × n. Rows and columns can be wildly different. Never use a single n variable!
                  </div>
                </div>

                {/* Pitfall 2 */}
                <div
                  style={{
                    padding: "10px 14px",
                    borderRadius: 6,
                    backgroundColor: frame >= 1135 ? "rgba(255, 107, 107, 0.08)" : "transparent",
                    border: `1.5px solid ${frame >= 1135 ? theme.warn : "rgba(248, 246, 240, 0.15)"}`,
                    opacity: frame >= 1135 ? 1 : 0.4,
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: theme.warn }}>
                    2. Turning ONLY at Matrix Borders (Method 1)
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkText, marginTop: 4 }}>
                    You must turn when the next cell is out-of-bounds <strong>OR already visited</strong>!
                  </div>
                </div>

                {/* Pitfall 3 */}
                <div
                  style={{
                    padding: "10px 14px",
                    borderRadius: 6,
                    backgroundColor: frame >= 1450 ? "rgba(255, 107, 107, 0.08)" : "transparent",
                    border: `1.5px solid ${frame >= 1450 ? theme.warn : "rgba(248, 246, 240, 0.15)"}`,
                    opacity: frame >= 1450 ? 1 : 0.4,
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: theme.warn }}>
                    3. Shrinking Boundary BEFORE Processing
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkText, marginTop: 4 }}>
                    Strict invariant sequence: <strong>CONSUME FIRST ➔ THEN SHRINK</strong>. Shrinking early skips entire rows/cols!
                  </div>
                </div>

                {/* Pitfall 4 */}
                <div
                  style={{
                    padding: "10px 14px",
                    borderRadius: 6,
                    backgroundColor: frame >= 1731 ? "rgba(255, 107, 107, 0.08)" : "transparent",
                    border: `1.5px solid ${frame >= 1731 ? theme.warn : "rgba(248, 246, 240, 0.15)"}`,
                    opacity: frame >= 1731 ? 1 : 0.4,
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: theme.warn }}>
                    4. Missing Intermediate Break Guards (Duplicate Trap)
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkText, marginTop: 4 }}>
                    Without <code style={{ color: theme.gold }}>if top &gt; bottom: break</code>, single-row matrices traverse the row twice in reverse!
                  </div>
                </div>

                {/* Pitfall 5 */}
                <div
                  style={{
                    padding: "10px 14px",
                    borderRadius: 6,
                    backgroundColor: frame >= 2141 ? "rgba(60, 229, 167, 0.08)" : "transparent",
                    border: `1.5px solid ${frame >= 2141 ? theme.emerald : "rgba(248, 246, 240, 0.15)"}`,
                    opacity: frame >= 2141 ? 1 : 0.4,
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: theme.emerald }}>
                    5. Stopping Prematurely When top == bottom or left == right
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkText, marginTop: 4 }}>
                    When top == bottom, there is still <strong>1 valid row</strong> left to collect! Always use <code style={{ color: theme.gold }}>&lt;=</code>!
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Demonstration Card (Width: 780px) */}
          <div style={{ flex: 0.9, position: "relative" }}>
            <RoughBox width={780} height={720} stroke={theme.gold} strokeWidth={2} seed={905} />
            <div style={{ position: "absolute", inset: 0, padding: "24px 28px" }}>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 14,
                  fontWeight: 800,
                  color: theme.gold,
                  letterSpacing: 1.5,
                  marginBottom: 16,
                }}
              >
                🔬 VISUAL PROOF & BEHAVIOR
              </div>

              {/* Display dynamic demo depending on current audio timestamp */}
              {frame < 1135 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ fontFamily: fonts.sans, fontSize: 16, color: theme.chalkText }}>
                    <strong>Rectangular Dimension Asymmetry:</strong>
                  </div>
                  {/* Wide Matrix Demo */}
                  <div style={{ padding: "12px 16px", borderRadius: 8, backgroundColor: theme.cardBg, border: "1px solid rgba(248, 246, 240, 0.2)" }}>
                    <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.cyan, marginBottom: 8 }}>WIDE MATRIX: 2 rows × 6 cols</div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 6 }}>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((v) => (
                        <div key={v} style={{ height: 32, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(92, 225, 230, 0.1)", border: `1px solid ${theme.cyan}`, fontFamily: fonts.mono, fontSize: 13, color: theme.chalkText }}>{v}</div>
                      ))}
                    </div>
                  </div>
                  {/* Tall Matrix Demo */}
                  <div style={{ padding: "12px 16px", borderRadius: 8, backgroundColor: theme.cardBg, border: "1px solid rgba(248, 246, 240, 0.2)" }}>
                    <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.gold, marginBottom: 8 }}>TALL MATRIX: 5 rows × 2 cols</div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 6, width: 220 }}>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v) => (
                        <div key={v} style={{ height: 28, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(255, 230, 109, 0.1)", border: `1px solid ${theme.gold}`, fontFamily: fonts.mono, fontSize: 13, color: theme.chalkText }}>{v}</div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {frame >= 1135 && frame < 1731 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ fontFamily: fonts.sans, fontSize: 16, color: theme.chalkText }}>
                    <strong>Method 1 Turning Trigger:</strong>
                  </div>
                  <div style={{ padding: "16px 20px", borderRadius: 8, backgroundColor: theme.cardBg, border: `1.5px solid ${theme.cyan}` }}>
                    <div style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.cyan, marginBottom: 12 }}>
                      Next Cell Probe (nr, nc) = (r + dr, c + dc):
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8, fontFamily: fonts.mono, fontSize: 14 }}>
                      <div style={{ color: theme.warn }}>1. 0 &lt;= nr &lt; m and 0 &lt;= nc &lt; n &nbsp; (In Bounds?)</div>
                      <div style={{ color: theme.warn }}>2. visited[nr][nc] == False &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (Not Visited?)</div>
                      <div style={{ color: theme.emerald, marginTop: 6, fontWeight: 700 }}>➔ If EITHER fails: direction = (direction + 1) % 4</div>
                    </div>
                  </div>
                </div>
              )}

              {frame >= 1731 && frame < 2141 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, color: theme.warn }}>
                    🚨 THE SINGLE-ROW DUPLICATE CATASTROPHE:
                  </div>
                  <div style={{ padding: "16px 20px", borderRadius: 8, backgroundColor: "rgba(255, 107, 107, 0.1)", border: `1.5px solid ${theme.warn}` }}>
                    <div style={{ fontFamily: fonts.sans, fontSize: 15, color: theme.chalkText, marginBottom: 10 }}>
                      Given Matrix: <code style={{ color: theme.cyan }}>[[1, 2, 3]]</code> (m = 1, n = 3):
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.chalkText, display: "flex", flexDirection: "column", gap: 6 }}>
                      <div>1. Top Edge traverses: <strong style={{ color: theme.emerald }}>[1, 2, 3]</strong></div>
                      <div>2. <code style={{ color: theme.gold }}>top += 1</code> ➔ now top = 1, bottom = 0 (top &gt; bottom)!</div>
                      <div style={{ color: theme.warn }}>3. WITHOUT GUARD: Bottom edge runs in reverse!</div>
                      <div style={{ color: theme.warn }}>➔ It would re-read row 0: <strong style={{ color: theme.warn }}>[3, 2, 1]</strong>!</div>
                      <div style={{ marginTop: 8, padding: "8px 12px", backgroundColor: "rgba(255, 107, 107, 0.15)", borderRadius: 4, color: theme.warn, fontWeight: 800 }}>
                        ❌ Output: [1, 2, 3, 3, 2, 1] (DUPLICATE VALUES BUG!)
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {frame >= 2141 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 800, color: theme.emerald }}>
                    ✅ INVARIANT LAW: top &lt;= bottom AND left &lt;= right
                  </div>
                  <div style={{ padding: "18px 22px", borderRadius: 8, backgroundColor: "rgba(60, 229, 167, 0.08)", border: `1.5px solid ${theme.emerald}` }}>
                    <div style={{ fontFamily: fonts.sans, fontSize: 15, color: theme.chalkText, lineHeight: 1.6 }}>
                      When top == bottom (e.g. Row 2 in a 5 × 6 matrix round 3):
                      <br />
                      There is exactly <strong>1 unvisited row</strong> containing cells 15 and 16!
                      <br /><br />
                      Because the invariant uses <code style={{ color: theme.gold, fontWeight: 900, fontSize: 17 }}>&lt;=</code>, it enters the loop, traverses the final single row, and then cleanly terminates.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          PHASE 3: 5 CANONICAL EDGE CASES & VALUE INDEPENDENCE (F2423..F3175)
         ===================================================================== */}
      {isPhase3 && (
        <div
          style={{
            position: "absolute",
            top: 100,
            left: 100,
            right: 100,
            height: 730,
            display: "flex",
            flexDirection: "column",
            gap: 20,
            zIndex: 10,
          }}
        >
          {/* 5 Edge Cases Carousel Strip (F2423..F2744) */}
          <div style={{ position: "relative", width: "100%", height: 320 }}>
            <RoughBox width={1720} height={320} stroke={theme.cyan} strokeWidth={2.5} seed={906} />
            <div style={{ position: "absolute", inset: 0, padding: "20px 28px" }}>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 14,
                  fontWeight: 800,
                  color: theme.cyan,
                  letterSpacing: 1.5,
                  marginBottom: 16,
                }}
              >
                📐 5 CANONICAL GEOMETRIC EDGE CASES (ALL VERIFIED ✓)
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
                {/* Case 1: 1x1 */}
                <div style={{ padding: "14px 16px", borderRadius: 8, backgroundColor: theme.cardBg, border: `1.5px solid ${theme.cyan}`, display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.cyan, fontWeight: 700, marginBottom: 8 }}>1. Single Cell (1×1)</div>
                  <div style={{ width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(92, 225, 230, 0.15)", border: `1px solid ${theme.cyan}`, fontFamily: fonts.mono, fontSize: 18, color: theme.gold, fontWeight: 800 }}>42</div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.emerald, marginTop: 8 }}>[42] ✓</div>
                </div>

                {/* Case 2: 1x4 */}
                <div style={{ padding: "14px 16px", borderRadius: 8, backgroundColor: theme.cardBg, border: `1.5px solid ${theme.cyan}`, display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.cyan, fontWeight: 700, marginBottom: 8 }}>2. Single Row (1×4)</div>
                  <div style={{ display: "flex", gap: 4, marginTop: 6 }}>
                    {[1, 2, 3, 4].map(v => (
                      <div key={v} style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(92, 225, 230, 0.15)", border: `1px solid ${theme.cyan}`, fontFamily: fonts.mono, fontSize: 14, color: theme.gold, fontWeight: 800 }}>{v}</div>
                    ))}
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.emerald, marginTop: 14 }}>[1, 2, 3, 4] ✓</div>
                </div>

                {/* Case 3: 4x1 */}
                <div style={{ padding: "14px 16px", borderRadius: 8, backgroundColor: theme.cardBg, border: `1.5px solid ${theme.cyan}`, display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.cyan, fontWeight: 700, marginBottom: 8 }}>3. Single Col (4×1)</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    {[1, 2, 3, 4].map(v => (
                      <div key={v} style={{ width: 30, height: 20, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(92, 225, 230, 0.15)", border: `1px solid ${theme.cyan}`, fontFamily: fonts.mono, fontSize: 12, color: theme.gold, fontWeight: 800 }}>{v}</div>
                    ))}
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.emerald, marginTop: 6 }}>[1, 2, 3, 4] ✓</div>
                </div>

                {/* Case 4: 2x5 Wide */}
                <div style={{ padding: "14px 16px", borderRadius: 8, backgroundColor: theme.cardBg, border: `1.5px solid ${theme.cyan}`, display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.cyan, fontWeight: 700, marginBottom: 8 }}>4. Wide Matrix (2×5)</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 3, marginTop: 6 }}>
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} style={{ width: 22, height: 20, backgroundColor: "rgba(92, 225, 230, 0.15)", border: `1px solid ${theme.cyan}` }} />
                    ))}
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.emerald, marginTop: 14 }}>10 cells spiral ✓</div>
                </div>

                {/* Case 5: 5x2 Tall */}
                <div style={{ padding: "14px 16px", borderRadius: 8, backgroundColor: theme.cardBg, border: `1.5px solid ${theme.cyan}`, display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.cyan, fontWeight: 700, marginBottom: 8 }}>5. Tall Matrix (5×2)</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 3, marginTop: 4 }}>
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} style={{ width: 26, height: 16, backgroundColor: "rgba(92, 225, 230, 0.15)", border: `1px solid ${theme.cyan}` }} />
                    ))}
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.emerald, marginTop: 6 }}>10 cells spiral ✓</div>
                </div>
              </div>
            </div>
          </div>

          {/* Value Independence & Master Punchline (F2745..F3175) */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 320,
              opacity: frame >= 2745 ? 1 : 0.35,
              transition: "opacity 0.3s ease",
            }}
          >
            <RoughBox width={1720} height={320} stroke={frame >= 2745 ? theme.gold : "rgba(248, 246, 240, 0.2)"} strokeWidth={3} seed={907} />
            <div
              style={{
                position: "absolute",
                inset: 0,
                padding: "24px 32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 15,
                  fontWeight: 800,
                  color: frame >= 2745 ? theme.gold : "rgba(248, 246, 240, 0.5)",
                  letterSpacing: 2,
                  marginBottom: 10,
                }}
              >
                🌟 GEOMETRIC INVARIANT LAW: POSITION &gt; VALUE
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 16,
                  marginBottom: 16,
                }}
              >
                <span style={{ padding: "6px 14px", borderRadius: 6, backgroundColor: "rgba(92, 225, 230, 0.15)", border: `1px solid ${theme.cyan}`, fontFamily: fonts.mono, fontSize: 15, color: theme.cyan }}>
                  Negative Values: -10, -5 ✓
                </span>
                <span style={{ padding: "6px 14px", borderRadius: 6, backgroundColor: "rgba(255, 230, 109, 0.15)", border: `1px solid ${theme.gold}`, fontFamily: fonts.mono, fontSize: 15, color: theme.gold }}>
                  Zeroes: 0, 0 ✓
                </span>
                <span style={{ padding: "6px 14px", borderRadius: 6, backgroundColor: "rgba(255, 107, 107, 0.15)", border: `1px solid ${theme.warn}`, fontFamily: fonts.mono, fontSize: 15, color: theme.warn }}>
                  Duplicate Values: 7, 7, 7 ✓
                </span>
              </div>

              <div
                style={{
                  fontFamily: fonts.display,
                  fontSize: 26,
                  fontWeight: 800,
                  color: theme.chalkText,
                  lineHeight: 1.4,
                  maxWidth: 1300,
                }}
              >
                "The spiral traversal is <span style={{ color: theme.emerald }}>pure coordinate geometry</span>.
                Our algorithm depends entirely on row and column coordinates <span style={{ color: theme.cyan }}>(r, c)</span> and perimeter bounds,
                <span style={{ color: theme.gold }}> NEVER on the values stored inside!</span>"
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          AUDIO & AUTHENTIC WORD-SYNC CAPTIONS (Y: 940..1024)
         ===================================================================== */}
      <Audio src={staticFile("audio/015/scence09.mp3")} />
      <Captions words={captionWords} />
    </div>
  );
};
