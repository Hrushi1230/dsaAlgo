/**
 * Scene09Recap.tsx — Scene 09 · Course Recap, Transferable Pattern & Roadmap Advancement
 * Subarray Sum Equals K (LeetCode 560) · Pattern 01 — Arrays & Hashing
 *
 * Implements the complete final recap & curriculum advancement:
 * - Phase A (Board-Native): Zero dark card containers. Direct Oxford Green chalkboard.
 *   - Act 1 (F0..F370): Method 1 running sum enumeration recap + O(N^2) time & O(1) space
 *   - Act 2 (F370..F635): The mathematical bridge (Current - Previous = k -> Needed = Current - k)
 *   - Act 3 (F635..F1085): Method 2 optimal pipeline recap + Expected O(N) time & O(N) space
 *   - Act 4 (F1085..F1649): The Transferable Pattern (Prefix Difference Technique)
 * - Phase B (Roadmap Exception):
 *   - Act 5 (F1650..F2320): Master Roadmap Course Advancement (Q16 complete, 15 -> 16 / 227, Q17 Up Next)
 *
 * Duration: 2320 frames @ 30fps (77.340s) strictly from sync/09-recap.json
 * 100% deterministic, zero CSS keyframes, zero collision.
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
import { MasterRoadmapV2 } from "../../../../kit/components/MasterRoadmapV2";
import { RoughBox } from "../../../../kit/components/RoughBox";
import syncData from "../sync/09-recap.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings (from sync/09-recap.json)
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

export const Scene09Recap: React.FC = () => {
  const frame = useCurrentFrame();

  // =========================================================================
  // ACT IDENTIFICATION
  // =========================================================================
  const isAct1 = frame < 370; // Method 1 Recap
  const isAct2 = frame >= 370 && frame < 635; // Mathematical Bridge
  const isAct3 = frame >= 635 && frame < 1085; // Method 2 Recap
  const isAct4 = frame >= 1085 && frame < 1650; // Transferable Pattern
  const isAct5 = frame >= 1650; // Master Roadmap Advancement

  // =========================================================================
  // CAMERA ENGINE FOR ACT 5 (Master Roadmap Navigation)
  // =========================================================================
  const { camScale, camX, camY } = useMemo(() => {
    if (frame < 1650) {
      return { camScale: 1.0, camX: 0, camY: 0 };
    }

    const scale = interpolate(frame, [1650, 1690], [1.015, 1.0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });

    return { camScale: scale, camX: 0, camY: 0 };
  }, [frame]);

  // =========================================================================
  // ROADMAP ADVANCEMENT PROPS LOGIC
  // =========================================================================
  const isQ16Complete = frame >= 1791;
  const rollingCompletedCount = Math.round(
    interpolate(frame, [1895, 2028], [15, 16], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  const completedGlobalNums = useMemo(() => {
    const base = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    if (isQ16Complete) {
      return [...base, 16];
    }
    return base;
  }, [isQ16Complete]);

  const activeGlobalNum = frame < 2116 ? 16 : 0;
  const upNextGlobalNum = frame >= 2116 ? 17 : undefined;
  const spotlightRow = frame >= 2116 ? 17 : frame >= 1650 ? 16 : undefined;
  const activeBadgeLabel = isQ16Complete ? "COMPLETED ✓" : "NOW ACTIVE ●";

  return (
    <div
      style={{
        position: "relative",
        width: 1920,
        height: 1080,
        backgroundColor: "#19523C",
        overflow: "hidden",
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      {/* Synchronized Voiceover Audio */}
      <Audio src={staticFile("audio/016/09-recap.mp3")} />

      {/* ===================================================================
          1. TOP HEADER (Acts 1–4, F0..F1649) — Board-Native
          =================================================================== */}
      {!isAct5 && (
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
              COURSE RECAP
            </span>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 22 }}>—</span>
            <span
              style={{
                fontFamily: fonts.hand,
                fontSize: 24,
                color: theme.chalkText,
              }}
            >
              {isAct1 && "Method 1: Running Sum Enumeration"}
              {isAct2 && "The Mathematical Bridge Identity"}
              {isAct3 && "Method 2: Prefix Frequency Hash Map"}
              {isAct4 && "The Universal Transferable Cumulative Pattern"}
            </span>
          </div>

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
              Question 016 · LC 560
            </span>
          </div>
        </div>
      )}

      {/* ===================================================================
          2. MAIN STAGE CONTENT (Acts 1–4, Y: 110..Y: 880) — Board-Native
          Zero dark container boxes! Balanced vertical distribution.
          =================================================================== */}
      {!isAct5 && (
        <div
          style={{
            position: "absolute",
            top: 110,
            left: 80,
            right: 80,
            height: 750,
            zIndex: 15,
          }}
        >
          {/* ---------------------------------------------------------------
              ACT 1: METHOD 1 RECAP (F0..F370)
              --------------------------------------------------------------- */}
          {isAct1 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "space-between",
                padding: "16px 0 20px 0",
              }}
            >
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
                  EXHAUSTIVE ENUMERATION PIPELINE
                </div>
                <div
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 22,
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  Fix start index, extend end boundary, update running sum, count the match:
                </div>
              </div>

              {/* 4 Steps Directly on Board */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
                {[
                  { step: "1", title: "Fix Start", formula: "start = 0 .. n-1", desc: "Anchors the left boundary of every candidate subarray", frameStart: 92, color: theme.cyan },
                  { step: "2", title: "Extend End", formula: "end = start .. n-1", desc: "Expands right boundary incrementally to explore segments", frameStart: 124, color: theme.pivot },
                  { step: "3", title: "Running Sum", formula: "curr_sum += nums[end]", desc: "Adds in O(1) per step without re-summing from scratch", frameStart: 157, color: theme.good },
                  { step: "4", title: "Count Match", formula: "if curr_sum == k: ans++", desc: "Checks exact target equality and increments total", frameStart: 201, color: theme.purple },
                ].map((item) => {
                  const isVisible = frame >= item.frameStart;
                  return (
                    <div
                      key={item.step}
                      style={{
                        position: "relative",
                        padding: "24px 22px",
                        opacity: isVisible ? 1 : 0.3,
                      }}
                    >
                      {isVisible && (
                        <div style={{ position: "absolute", top: 0, left: 0 }}>
                          <RoughBox
                            width={380}
                            height={180}
                            stroke={item.color}
                            strokeWidth={1.8}
                            roughness={1.2}
                          />
                        </div>
                      )}
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                        <span style={{ fontFamily: fonts.mono, fontSize: 24, fontWeight: 900, color: item.color }}>
                          Step {item.step}:
                        </span>
                        <span style={{ fontFamily: fonts.display, fontSize: 22, fontWeight: 700, color: theme.chalkText }}>
                          {item.title}
                        </span>
                      </div>
                      <div style={{ fontFamily: fonts.mono, fontSize: 20, color: theme.cyan, marginBottom: 12 }}>
                        {item.formula}
                      </div>
                      <div style={{ fontFamily: fonts.hand, fontSize: 20, color: "rgba(255,255,255,0.7)", lineHeight: 1.4 }}>
                        {item.desc}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Complexity Badges */}
              <div style={{ display: "flex", gap: 80, paddingBottom: 10 }}>
                {/* Time */}
                <div style={{ display: "flex", alignItems: "center", gap: 24, opacity: frame >= 242 ? 1 : 0.3 }}>
                  <div style={{ position: "relative", display: "inline-block", padding: "12px 30px" }}>
                    <div style={{ position: "absolute", top: 0, left: 0 }}>
                      <RoughBox
                        width={180}
                        height={72}
                        stroke={theme.warn}
                        strokeWidth={2.5}
                        roughness={1.3}
                      />
                    </div>
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 42,
                        fontWeight: 900,
                        color: theme.warn,
                        whiteSpace: "nowrap",
                      }}
                    >
                      O(N²)
                    </span>
                  </div>
                  <div>
                    <div style={{ fontFamily: fonts.display, fontSize: 24, color: theme.warn, fontWeight: 700 }}>
                      TIME COMPLEXITY
                    </div>
                    <div style={{ fontFamily: fonts.hand, fontSize: 22, color: "rgba(255,255,255,0.7)" }}>
                      N(N + 1) / 2 subarrays explored
                    </div>
                  </div>
                </div>

                {/* Space */}
                <div style={{ display: "flex", alignItems: "center", gap: 24, opacity: frame >= 330 ? 1 : 0.3 }}>
                  <div style={{ position: "relative", display: "inline-block", padding: "12px 30px" }}>
                    <div style={{ position: "absolute", top: 0, left: 0 }}>
                      <RoughBox
                        width={160}
                        height={72}
                        stroke={theme.good}
                        strokeWidth={2.5}
                        roughness={1.3}
                      />
                    </div>
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 42,
                        fontWeight: 900,
                        color: theme.good,
                        whiteSpace: "nowrap",
                      }}
                    >
                      O(1)
                    </span>
                  </div>
                  <div>
                    <div style={{ fontFamily: fonts.display, fontSize: 24, color: theme.good, fontWeight: 700 }}>
                      AUXILIARY SPACE
                    </div>
                    <div style={{ fontFamily: fonts.hand, fontSize: 22, color: "rgba(255,255,255,0.7)" }}>
                      Zero heap memory · Scalar running sum
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ---------------------------------------------------------------
              ACT 2: MATHEMATICAL BRIDGE IDENTITY (F370..F635)
              --------------------------------------------------------------- */}
          {isAct2 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                textAlign: "center",
                padding: "0 60px",
              }}
            >
              <div
                style={{
                  fontFamily: fonts.display,
                  fontSize: 24,
                  fontWeight: 800,
                  color: theme.pivot,
                  letterSpacing: 2,
                  marginBottom: 10,
                }}
              >
                THE PREFIX SUBTRACTION IDENTITY
              </div>
              <div
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 24,
                  color: "rgba(255, 255, 255, 0.7)",
                  marginBottom: 36,
                }}
              >
                Transforming range search into instant hash map point lookup:
              </div>

              {/* Equation Step 1 */}
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 36,
                  fontWeight: 800,
                  color: theme.chalkText,
                  marginBottom: 24,
                }}
              >
                <span style={{ color: theme.cyan }}>current_prefix</span> − <span style={{ color: theme.pivot }}>previous_prefix</span> = <span style={{ color: theme.purple }}>k</span>
              </div>

              {/* Arrow */}
              <div
                style={{
                  fontFamily: fonts.display,
                  fontSize: 22,
                  color: theme.pivot,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 24,
                }}
              >
                <span>↓</span>
                <span>REARRANGE FOR PAST LOOKUP KEY</span>
                <span>↓</span>
              </div>

              {/* Rearranged Lookup Key Hero */}
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                  padding: "24px 50px",
                  marginBottom: 36,
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0 }}>
                  <RoughBox
                    width={960}
                    height={100}
                    stroke={theme.good}
                    strokeWidth={2.8}
                    roughness={1.3}
                  />
                </div>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 44,
                    fontWeight: 900,
                    color: theme.good,
                    whiteSpace: "nowrap",
                  }}
                >
                  needed = current_prefix − <span style={{ color: theme.purple }}>k</span>
                </span>
              </div>

              <div
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 25,
                  color: theme.chalkText,
                  maxWidth: 1100,
                  lineHeight: 1.5,
                }}
              >
                Every past prefix equal to <code style={{ color: theme.cyan }}>(current − k)</code> produces a valid subarray ending at the current element!
              </div>
            </div>
          )}

          {/* ---------------------------------------------------------------
              ACT 3: METHOD 2 RECAP (F635..F1085)
              --------------------------------------------------------------- */}
          {isAct3 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "space-between",
                padding: "16px 0 20px 0",
              }}
            >
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
                  SINGLE-PASS OPTIMAL EXECUTION ORDER
                </div>
                <div
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 22,
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  Five steps executed in strict sequence for each element:
                </div>
              </div>

              {/* 5 Steps Directly on Board */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 18 }}>
                {[
                  { step: "1", title: "Update Prefix", code: "prefix += num", desc: "Advance running cumulative sum", frameStart: 682, color: theme.cyan },
                  { step: "2", title: "Compute Needed", code: "need = prefix - k", desc: "Derive target earlier prefix", frameStart: 734, color: theme.pivot },
                  { step: "3", title: "Query Map", code: "cnt = map.get(need, 0)", desc: "O(1) average lookup in map", frameStart: 784, color: theme.good },
                  { step: "4", title: "Add Matches", code: "ans += cnt", desc: "Increment answer by matches", frameStart: 836, color: theme.purple },
                  { step: "5", title: "Store Prefix", code: "map[prefix]++", desc: "Save AFTER query (prevents self-match)", frameStart: 880, color: "#60A5FA" },
                ].map((item) => {
                  const isVisible = frame >= item.frameStart;
                  return (
                    <div
                      key={item.step}
                      style={{
                        position: "relative",
                        padding: "22px 18px",
                        opacity: isVisible ? 1 : 0.3,
                      }}
                    >
                      {isVisible && (
                        <div style={{ position: "absolute", top: 0, left: 0 }}>
                          <RoughBox
                            width={310}
                            height={180}
                            stroke={item.color}
                            strokeWidth={1.8}
                            roughness={1.2}
                          />
                        </div>
                      )}
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                        <span style={{ fontFamily: fonts.mono, fontSize: 22, fontWeight: 900, color: item.color }}>
                          {item.step}.
                        </span>
                        <span style={{ fontFamily: fonts.display, fontSize: 20, fontWeight: 700, color: theme.chalkText }}>
                          {item.title}
                        </span>
                      </div>
                      <div style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.cyan, marginBottom: 10 }}>
                        {item.code}
                      </div>
                      <div style={{ fontFamily: fonts.hand, fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.35 }}>
                        {item.desc}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Complexity Badges */}
              <div style={{ display: "flex", gap: 80, paddingBottom: 10 }}>
                {/* Time */}
                <div style={{ display: "flex", alignItems: "center", gap: 24, opacity: frame >= 955 ? 1 : 0.3 }}>
                  <div style={{ position: "relative", display: "inline-block", padding: "12px 30px" }}>
                    <div style={{ position: "absolute", top: 0, left: 0 }}>
                      <RoughBox
                        width={190}
                        height={72}
                        stroke={theme.good}
                        strokeWidth={2.5}
                        roughness={1.3}
                      />
                    </div>
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 42,
                        fontWeight: 900,
                        color: theme.good,
                        whiteSpace: "nowrap",
                      }}
                    >
                      O(N) ⚡
                    </span>
                  </div>
                  <div>
                    <div style={{ fontFamily: fonts.display, fontSize: 24, color: theme.good, fontWeight: 700 }}>
                      EXPECTED TIME COMPLEXITY
                    </div>
                    <div style={{ fontFamily: fonts.hand, fontSize: 22, color: "rgba(255,255,255,0.7)" }}>
                      Single scan · O(1) avg map lookup & insert
                    </div>
                  </div>
                </div>

                {/* Space */}
                <div style={{ display: "flex", alignItems: "center", gap: 24, opacity: frame >= 1030 ? 1 : 0.3 }}>
                  <div style={{ position: "relative", display: "inline-block", padding: "12px 30px" }}>
                    <div style={{ position: "absolute", top: 0, left: 0 }}>
                      <RoughBox
                        width={170}
                        height={72}
                        stroke={theme.pivot}
                        strokeWidth={2.5}
                        roughness={1.3}
                      />
                    </div>
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 42,
                        fontWeight: 900,
                        color: theme.pivot,
                        whiteSpace: "nowrap",
                      }}
                    >
                      O(N)
                    </span>
                  </div>
                  <div>
                    <div style={{ fontFamily: fonts.display, fontSize: 24, color: theme.pivot, fontWeight: 700 }}>
                      AUXILIARY SPACE COMPLEXITY
                    </div>
                    <div style={{ fontFamily: fonts.hand, fontSize: 22, color: "rgba(255,255,255,0.7)" }}>
                      Stores up to N + 1 distinct prefix sums
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ---------------------------------------------------------------
              ACT 4: THE TRANSFERABLE PATTERN (F1085..F1649)
              --------------------------------------------------------------- */}
          {isAct4 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "space-between",
                padding: "16px 0 20px 0",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: fonts.display,
                    fontSize: 28,
                    fontWeight: 800,
                    color: theme.cyan,
                    marginBottom: 8,
                  }}
                >
                  THE TRANSFERABLE CUMULATIVE PATTERN
                </div>
                <div
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 22,
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  Whenever a contiguous range condition satisfies subtraction:
                </div>
              </div>

              {/* Master Template Banner */}
              <div
                style={{
                  position: "relative",
                  padding: "28px 40px",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0 }}>
                  <RoughBox
                    width={1740}
                    height={150}
                    stroke={theme.cyan}
                    strokeWidth={2.5}
                    roughness={1.3}
                  />
                </div>
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 34,
                    fontWeight: 800,
                    color: theme.chalkText,
                    marginBottom: 14,
                  }}
                >
                  <span style={{ color: theme.cyan }}>current_state</span> − <span style={{ color: theme.pivot }}>earlier_state</span> = <span style={{ color: theme.purple }}>target</span>
                  <span style={{ color: "rgba(255,255,255,0.4)", margin: "0 28px" }}>➔</span>
                  <span style={{ color: theme.good }}>search_key = current_state − target</span>
                </div>
                <div style={{ fontFamily: fonts.hand, fontSize: 24, color: theme.pivot }}>
                  💡 If multiple earlier states can satisfy the range: <strong>Store frequency in Hash Map</strong>!
                </div>
              </div>

              {/* 4 LeetCode Practice Problems */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
                {[
                  { code: "LC 560", title: "Subarray Sum Equals K", pattern: "Cumulative Sum", target: "Target = k", active: true },
                  { code: "LC 974", title: "Subarray Sums Divisible by K", pattern: "Modulo Arithmetic", target: "Remainder Mod k", active: false },
                  { code: "LC 523", title: "Continuous Subarray Sum", pattern: "Remainder + Len >= 2", target: "Modulo Remainder", active: false },
                  { code: "LC 525", title: "Contiguous Array (0/1)", pattern: "Balance Count (0 ➔ -1)", target: "Target = 0 Balance", active: false },
                ].map((prob) => (
                  <div
                    key={prob.code}
                    style={{
                      position: "relative",
                      padding: "22px 22px",
                    }}
                  >
                    <div style={{ position: "absolute", top: 0, left: 0 }}>
                      <RoughBox
                        width={410}
                        height={140}
                        stroke={prob.active ? theme.good : "rgba(255, 255, 255, 0.25)"}
                        strokeWidth={prob.active ? 2.5 : 1.3}
                        roughness={1.2}
                      />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
                      <span style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 900, color: prob.active ? theme.good : theme.cyan }}>
                        {prob.code}
                      </span>
                      {prob.active && (
                        <span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: theme.good }}>
                          SOLVED ✓
                        </span>
                      )}
                    </div>
                    <div style={{ fontFamily: fonts.display, fontSize: 20, fontWeight: 700, color: theme.chalkText, marginBottom: 6 }}>
                      {prob.title}
                    </div>
                    <div style={{ fontFamily: fonts.hand, fontSize: 18, color: "rgba(255,255,255,0.7)" }}>
                      {prob.pattern} · <span style={{ color: theme.pivot }}>{prob.target}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ===================================================================
          3. ACT 5: AUTHORITATIVE MASTER ROADMAP (F1650..F2320)
          Roadmap exception — hands over to MasterRoadmapV2!
          =================================================================== */}
      {isAct5 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: interpolate(frame, [1650, 1675], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            zIndex: 20,
          }}
        >
          {/* Particle ChalkDust Bursts on Milestones */}
          {frame >= 1791 && frame <= 1825 && (
            <ChalkDust x={1000} y={848} start={1791} color={theme.good} count={20} radius={65} />
          )}

          {frame >= 2028 && frame <= 2060 && (
            <ChalkDust x={1710} y={38} start={2028} color={theme.pivot} count={22} radius={70} />
          )}

          {frame >= 2116 && frame <= 2150 && (
            <ChalkDust x={1000} y={892} start={2116} color={theme.pivot} count={18} radius={60} />
          )}

          <MasterRoadmapV2
            completedCount={rollingCompletedCount}
            completedGlobalNums={completedGlobalNums}
            activeGlobalNum={activeGlobalNum}
            upNextGlobalNum={upNextGlobalNum}
            activePatternId={1}
            spotlightRow={spotlightRow}
            activeBadgeLabel={activeBadgeLabel}
            scale={camScale}
            translateX={camX}
            translateY={camY}
          />
        </div>
      )}

      {/* ===================================================================
          4. WORD-SYNCHRONIZED CAPTIONS (Safe Zone Y: 960–1040)
          =================================================================== */}
      <Captions words={captionWords} bottom={36} />
    </div>
  );
};
