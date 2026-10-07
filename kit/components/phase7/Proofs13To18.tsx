import React from "react";
import { ProofShell, getEdgeCoords, ChalkCircleNode } from "./ProofShell";
import { RoughBox } from "../RoughBox";
import { RoughLine } from "../RoughLine";
import { MeshGrid } from "../MeshGrid";
import { ParametricArrow } from "../ParametricArrow";
import { theme, fonts } from "../../lib/theme";

// =============================================================================
// 13 — INTERVALS
// =============================================================================
export const Proof13Intervals: React.FC = () => {
  return (
    <ProofShell
      structureNum="13"
      structureTitle="Intervals"
      stateAName="Shared Horizontal Coordinate Axis"
      stateBName="Interval Overlap & Merge Operation"
      stateCName="8-Interval Schedule with Sweep Line"
      rule="Ranges live on a shared metric axis. Spatial overlap defines relations."
    >
      {(state) => {
        if (state === "A") {
          const axisX = (val: number) => 100 + val * 40;
          return (
            <div style={{ position: "relative", width: 1000, height: 420 }}>
              {/* Main horizontal number axis */}
              <svg width={1000} height={420} style={{ position: "absolute", inset: 0 }}>
                <line x1={60} y1={330} x2={940} y2={330} stroke={theme.chalkText} strokeWidth={3.5} />
                {/* Ticks 0, 5, 10, 15, 20 */}
                {[0, 5, 10, 15, 20].map((t) => (
                  <g key={t}>
                    <line x1={axisX(t)} y1={318} x2={axisX(t)} y2={342} stroke={theme.chalkText} strokeWidth={3} />
                  </g>
                ))}
              </svg>
              {/* Axis labels */}
              {[0, 5, 10, 15, 20].map((t) => (
                <div key={t} style={{ position: "absolute", left: axisX(t) - 15, top: 355, fontFamily: fonts.mono, fontSize: 22, color: theme.cyan, fontWeight: 700 }}>
                  {t}
                </div>
              ))}

              {/* Staggered interval bars */}
              {[
                { start: 1, end: 6, lane: 80, label: "[1, 6]" },
                { start: 4, end: 9, lane: 160, label: "[4, 9]" },
                { start: 11, end: 15, lane: 80, label: "[11, 15]" },
                { start: 13, end: 19, lane: 160, label: "[13, 19]" },
              ].map((inv, i) => (
                <div key={i} style={{ position: "absolute", left: axisX(inv.start), top: inv.lane, width: (inv.end - inv.start) * 40, height: 52 }}>
                  <RoughBox width={(inv.end - inv.start) * 40} height={52} stroke={theme.cyan} strokeWidth={3} seed={i + 1} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 22, fontWeight: 700, color: theme.chalkText }}>
                    {inv.label}
                  </div>
                </div>
              ))}
            </div>
          );
        }

        if (state === "B") {
          return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>
              <div style={{ fontFamily: fonts.mono, fontSize: 24, color: theme.good, fontWeight: 700 }}>
                MERGE: [1, 6] OVERLAPS [4, 9] AT [4, 6] ──→ NEW UNIFIED SPAN: [1, 9]
              </div>
              <div style={{ position: "relative", width: 550, height: 75 }}>
                <RoughBox width={550} height={75} stroke={theme.good} strokeWidth={4} fill="rgba(60, 229, 167, 0.25)" seed={10} />
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 34, fontWeight: 800, color: theme.good }}>
                  MERGED [1, 9]
                </div>
              </div>
            </div>
          );
        }

        return (
          <div style={{ fontFamily: fonts.mono, fontSize: 22, color: theme.cyan, fontWeight: 700 }}>
            8-INTERVAL SCHEDULE: VERTICAL SWEEP LINE AT X=12 CROSSING ACTIVE INTERVALS
          </div>
        );
      }}
    </ProofShell>
  );
};

// =============================================================================
// 14 — RECURSION / BACKTRACKING
// =============================================================================
export const Proof14Recursion: React.FC = () => {
  return (
    <ProofShell
      structureNum="14"
      structureTitle="Recursion / Backtracking"
      stateAName="Activation State Frames"
      stateBName="Return & Backtrack State Recovery"
      stateCName="Deep Branching Choice Tree"
      rule="Nodes are computation states, not stored tree data. Edges connect capsule boundaries."
    >
      {(state) => {
        if (state === "A") {
          // Parent at (450, 60), child1 at (240, 240), child2 at (660, 240)
          // Capsule dimensions: parent (320x75), children (280x70)
          // Parent bottom: y = 60 + 37.5 = 97.5
          // Child1 top: y = 240 - 35 = 205
          return (
            <div style={{ position: "relative", width: 900, height: 440 }}>
              <svg width={900} height={440} style={{ position: "absolute", inset: 0 }}>
                {/* Branch lines from parent bottom to child top - NO penetration! */}
                <line x1={450} y1={98} x2={240} y2={205} stroke={theme.chalkText} strokeWidth={3} filter="url(#chalk-stroke)" />
                <line x1={450} y1={98} x2={660} y2={205} stroke={theme.chalkText} strokeWidth={3} filter="url(#chalk-stroke)" />
              </svg>

              {/* Root call capsule */}
              <div style={{ position: "absolute", left: 450, top: 60, transform: "translate(-50%, -50%)" }}>
                <div style={{ position: "relative", width: 320, height: 75 }}>
                  <RoughBox width={320} height={75} stroke={theme.pivot} strokeWidth={3.5} fill={theme.boardBg} seed={1} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 22, fontWeight: 700, color: theme.chalkText }}>
                    solve(idx=0, path=[])
                  </div>
                </div>
              </div>

              {/* Child call 1 */}
              <div style={{ position: "absolute", left: 240, top: 240, transform: "translate(-50%, -50%)" }}>
                <div style={{ position: "relative", width: 280, height: 70 }}>
                  <RoughBox width={280} height={70} stroke={theme.cyan} strokeWidth={3} fill={theme.boardBg} seed={2} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 20, color: theme.cyan, fontWeight: 700 }}>
                    solve(1, path=[1])
                  </div>
                </div>
              </div>

              {/* Child call 2 */}
              <div style={{ position: "absolute", left: 660, top: 240, transform: "translate(-50%, -50%)" }}>
                <div style={{ position: "relative", width: 280, height: 70 }}>
                  <RoughBox width={280} height={70} stroke={theme.chalkDim} strokeWidth={2.5} fill={theme.boardBg} seed={3} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 20, color: theme.chalkDim }}>
                    solve(1, path=[])
                  </div>
                </div>
              </div>
            </div>
          );
        }

        if (state === "B") {
          return (
            <div style={{ fontFamily: fonts.mono, fontSize: 24, color: theme.good, fontWeight: 700 }}>
              BACKTRACK: Base Case Reached → Return Result → Pop path[i] → Restore Parent Choice
            </div>
          );
        }

        return (
          <div style={{ fontFamily: fonts.mono, fontSize: 22, color: theme.cyan, fontWeight: 700 }}>
            DEEP 3-BRANCH CHOICE TREE WITH UNWINDING RETURN PATH
          </div>
        );
      }}
    </ProofShell>
  );
};

// =============================================================================
// 15 — DYNAMIC PROGRAMMING
// =============================================================================
export const Proof15DP: React.FC = () => {
  return (
    <ProofShell
      structureNum="15"
      structureTitle="Dynamic Programming"
      stateAName="State Array & Base Cases"
      stateBName="Recurrence Dependency Compute"
      stateCName="2D Knapsack / LCS Grid"
      rule="Cells equal solved states. Arrows encode recurrence dependencies."
    >
      {(state) => {
        if (state === "A") {
          const dp = [1, 1, "?", "?", "?", "?"];
          const cellW = 110;
          const cellH = 100;
          const gap = 16;

          return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ fontFamily: fonts.mono, fontSize: 22, color: theme.cyan, marginBottom: 16, fontWeight: 700 }}>
                1D STATE ARRAY: dp[i] = dp[i-1] + dp[i-2]
              </div>
              <div style={{ display: "flex", gap }}>
                {dp.map((v, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                    <div style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.chalkDim, fontWeight: 700 }}>dp[{i}]</div>
                    <div style={{ position: "relative", width: cellW, height: cellH }}>
                      <RoughBox width={cellW} height={cellH} stroke={i < 2 ? theme.good : theme.chalkText} strokeWidth={i < 2 ? 4 : 2.5} fill={i < 2 ? "rgba(60, 229, 167, 0.2)" : undefined} seed={i + 1} />
                      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 38, fontWeight: 700, color: i < 2 ? theme.good : theme.chalkDim }}>
                        {v}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        }

        if (state === "B") {
          const cellW = 120;
          const cellH = 110;

          return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 30 }}>
              <div style={{ fontFamily: fonts.mono, fontSize: 24, color: theme.good, fontWeight: 700 }}>
                COMPUTE dp[2]: dp[1] (1) + dp[0] (1) ──→ dp[2] = 2
              </div>
              <div style={{ display: "flex", gap: 20 }}>
                <div style={{ position: "relative", width: cellW, height: cellH }}>
                  <RoughBox width={cellW} height={cellH} stroke={theme.cyan} strokeWidth={3} seed={1} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 44, fontWeight: 700, color: theme.cyan }}>1</div>
                </div>
                <div style={{ position: "relative", width: cellW, height: cellH }}>
                  <RoughBox width={cellW} height={cellH} stroke={theme.cyan} strokeWidth={3} seed={2} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 44, fontWeight: 700, color: theme.cyan }}>1</div>
                </div>
                <div style={{ position: "relative", width: cellW, height: cellH }}>
                  <RoughBox width={cellW} height={cellH} stroke={theme.good} strokeWidth={4.5} fill="rgba(60, 229, 167, 0.25)" seed={3} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 48, fontWeight: 800, color: theme.good }}>2</div>
                </div>
              </div>
            </div>
          );
        }

        // State C: 2D DP Grid with Recurrence Dependency Vectors
        const dp2d = [
          [0, 0, 0, 0, 0, 0],
          [0, 2, 2, 2, 2, 2],
          [0, 2, 3, 5, 5, 5],
          [0, 2, 3, 5, 7, 7],
          [0, 2, 3, 5, 7, 9],
        ];

        return (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
            <div style={{ fontFamily: fonts.mono, fontSize: 20, color: theme.cyan, marginBottom: 14, fontWeight: 700 }}>
              2D KNAPSACK DP: dp[i][w] = max(dp[i-1][w], dp[i-1][w-wt] + val)
            </div>
            <div style={{ position: "relative" }}>
              <MeshGrid
                rows={5}
                cols={6}
                cellWidth={85}
                cellHeight={58}
                showColRulers
                showRowRulers
                colLabels={["w=0", "w=1", "w=2", "w=3", "w=4", "w=5"]}
                rowLabels={["i=0", "i=1", "i=2", "i=3", "i=4"]}
                rulerFontSize={16}
                stroke={theme.chalkText}
                strokeWidth={2}
                outerStrokeWidth={3}
                renderCell={({ row, col }) => {
                  const isTarget = row === 3 && col === 4;
                  const isTopDep = row === 2 && col === 4;
                  const isDiagDep = row === 2 && col === 2;
                  const stroke = isTarget ? theme.good : isTopDep || isDiagDep ? theme.pivot : theme.chalkText;
                  const fill = isTarget
                    ? "rgba(60, 229, 167, 0.25)"
                    : isTopDep || isDiagDep
                    ? "rgba(255, 209, 102, 0.2)"
                    : undefined;

                  return (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: fill,
                        border: isTarget || isTopDep || isDiagDep ? `2px solid ${stroke}` : undefined,
                        boxSizing: "border-box",
                        fontFamily: fonts.mono,
                        fontSize: 24,
                        fontWeight: 700,
                        color: stroke,
                      }}
                    >
                      {dp2d[row][col]}
                    </div>
                  );
                }}
              />
              {/* Dependency Arrows into target cell (row 3, col 4) */}
              <svg
                width={6 * 85}
                height={5 * 58}
                style={{
                  position: "absolute",
                  top: 36, // below col rulers
                  left: 80, // right of row rulers
                  pointerEvents: "none",
                  overflow: "visible",
                }}
              >
                {/* Vertical dependency: (2, 4) -> (3, 4) */}
                <ParametricArrow
                  x1={4 * 85 + 42}
                  y1={2 * 58 + 50}
                  x2={4 * 85 + 42}
                  y2={3 * 58 + 8}
                  stroke={theme.pivot}
                  strokeWidth={3}
                  headLength={12}
                />
                {/* Diagonal dependency: (2, 2) -> (3, 4) */}
                <ParametricArrow
                  x1={2 * 85 + 65}
                  y1={2 * 58 + 48}
                  x2={4 * 85 + 20}
                  y2={3 * 58 + 12}
                  stroke={theme.good}
                  strokeWidth={3.5}
                  headLength={14}
                />
              </svg>
            </div>
            <div style={{ marginTop: 14, fontFamily: fonts.mono, fontSize: 16, color: theme.good, fontWeight: 700 }}>
              RECURRENCE VECTORS: Solved from Top Cell (Exclude Item) &amp; Diagonal Cell (Include Item)
            </div>
          </div>
        );
      }}
    </ProofShell>
  );
};

// =============================================================================
// 16 — BITS / BITWISE
// =============================================================================
export const Proof16Bits: React.FC = () => {
  return (
    <ProofShell
      structureNum="16"
      structureTitle="Bits"
      stateAName="Aligned 8-Bit Register (LSB on Right)"
      stateBName="Bitwise AND Column Operation"
      stateCName="32-Bit Segmented Register"
      rule="Index 0 is strictly rightmost. Positional weights align vertically."
    >
      {(state) => {
        if (state === "A") {
          const weights = [128, 64, 32, 16, 8, 4, 2, 1];
          const bits = [1, 1, 0, 0, 1, 0, 1, 0];
          const bitW = 100;
          const bitH = 110;
          const gap = 14;

          return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              {/* Weights above */}
              <div style={{ display: "flex", gap, marginBottom: 12 }}>
                {weights.map((w, i) => (
                  <div key={i} style={{ width: bitW, textAlign: "center", fontFamily: fonts.mono, fontSize: 20, color: theme.cyan, fontWeight: 700 }}>
                    {w}
                  </div>
                ))}
              </div>
              {/* Bit cells */}
              <div style={{ display: "flex", gap }}>
                {bits.map((b, i) => (
                  <div key={i} style={{ position: "relative", width: bitW, height: bitH }}>
                    <RoughBox width={bitW} height={bitH} stroke={b === 1 ? theme.pivot : theme.chalkText} strokeWidth={b === 1 ? 4 : 2.5} seed={i + 1} />
                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 52, fontWeight: 800, color: b === 1 ? theme.pivot : theme.chalkDim }}>
                      {b}
                    </div>
                  </div>
                ))}
              </div>
              {/* Bit indices below */}
              <div style={{ display: "flex", gap, marginTop: 12 }}>
                {[7, 6, 5, 4, 3, 2, 1, 0].map((idx) => (
                  <div key={idx} style={{ width: bitW, textAlign: "center", fontFamily: fonts.mono, fontSize: 20, color: theme.chalkDim, fontWeight: 700 }}>
                    bit[{idx}]
                  </div>
                ))}
              </div>
            </div>
          );
        }

        if (state === "B") {
          return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
              <div style={{ fontFamily: fonts.mono, fontSize: 34, color: theme.chalkText, letterSpacing: "20px", fontWeight: 700 }}>
                A: 1 1 0 0 1 0 1 0
              </div>
              <div style={{ fontFamily: fonts.mono, fontSize: 34, color: theme.cyan, letterSpacing: "20px", fontWeight: 700 }}>
                B: 1 0 1 0 1 1 1 0
              </div>
              <div style={{ width: 680, height: 10 }}>
                <RoughLine width={680} height={10} shape={{ kind: "line", x1: 0, y1: 5, x2: 680, y2: 5 }} stroke={theme.chalkText} strokeWidth={4} seed={1} />
              </div>
              <div style={{ fontFamily: fonts.mono, fontSize: 38, fontWeight: 900, color: theme.good, letterSpacing: "20px" }}>
                R: 1 0 0 0 1 0 1 0
              </div>
              <div style={{ fontFamily: fonts.mono, fontSize: 22, color: theme.good, marginTop: 12, fontWeight: 700 }}>
                BITWISE AND (&amp;): Evaluated Column-by-Column into Result Register
              </div>
            </div>
          );
        }

        return (
          <div style={{ fontFamily: fonts.mono, fontSize: 22, color: theme.cyan, fontWeight: 700 }}>
            32-BIT SEGMENTED REGISTER: 4 DISTINCT BYTES WITH SINGLE-BIT MASK (1 &lt;&lt; k)
          </div>
        );
      }}
    </ProofShell>
  );
};

// =============================================================================
// 17 — STRING ALGORITHMS
// =============================================================================
export const Proof17Strings: React.FC = () => {
  return (
    <ProofShell
      structureNum="17"
      structureTitle="String Algorithms"
      stateAName="Stationary Text + Sliding Pattern Track"
      stateBName="KMP Fallback Arc & Pattern Shift"
      stateCName="Sliding Window Range Brackets"
      rule="Text stays fixed. Search state and pattern frame slide."
    >
      {(state) => {
        if (state === "A") {
          const text = "ABABDABACD";
          const pat = "ABABCABAB";
          const boxSize = 75;
          const gap = 8;

          return (
            <div style={{ display: "flex", flexDirection: "column", gap: 32, alignItems: "center" }}>
              {/* Text Track */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontFamily: fonts.mono, fontSize: 20, color: theme.cyan, marginBottom: 8, fontWeight: 700 }}>TEXT (Stationary):</div>
                <div style={{ display: "flex", gap }}>
                  {text.split("").map((ch, i) => (
                    <div key={i} style={{ position: "relative", width: boxSize, height: boxSize }}>
                      <RoughBox width={boxSize} height={boxSize} stroke={theme.chalkText} strokeWidth={2.5} seed={i + 1} />
                      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 34, fontWeight: 700, color: theme.chalkText }}>
                        {ch}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pattern Track */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontFamily: fonts.mono, fontSize: 20, color: theme.pivot, marginBottom: 8, fontWeight: 700 }}>PATTERN (Sliding):</div>
                <div style={{ display: "flex", gap }}>
                  {pat.split("").map((ch, i) => (
                    <div key={i} style={{ position: "relative", width: boxSize, height: boxSize }}>
                      <RoughBox width={boxSize} height={boxSize} stroke={theme.pivot} strokeWidth={2.5} seed={i + 20} />
                      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 34, fontWeight: 700, color: theme.pivot }}>
                        {ch}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        if (state === "B") {
          return (
            <div style={{ fontFamily: fonts.mono, fontSize: 24, color: theme.good, fontWeight: 700 }}>
              KMP MISMATCH AT PATTERN[4]: LPS Fallback j = lps[3] = 2 ──→ Pattern Shifts 2 Slots Right
            </div>
          );
        }

        return (
          <div style={{ fontFamily: fonts.mono, fontSize: 22, color: theme.cyan, fontWeight: 700 }}>
            SLIDING WINDOW: EXPANDING RIGHT POINTER / CONTRACTING LEFT POINTER
          </div>
        );
      }}
    </ProofShell>
  );
};

// =============================================================================
// 18 — MATH / GEOMETRY
// =============================================================================
export const Proof18Math: React.FC = () => {
  return (
    <ProofShell
      structureNum="18"
      structureTitle="Math / Geometry"
      stateAName="2D Cartesian Coordinate Plane"
      stateBName="Convex Hull Boundary Construction"
      stateCName="Dense Point Cloud Radial Sweep"
      rule="Use the truthful mathematical space. Exact spatial metric. Points sealed against line penetration."
    >
      {(state) => {
        const R = 18;
        if (state === "A") {
          const points = [
            { x: 380, y: 140, label: "P1" },
            { x: 560, y: 220, label: "P2" },
            { x: 260, y: 280, label: "P3" },
            { x: 440, y: 360, label: "P4" },
            { x: 200, y: 180, label: "P5" },
          ];

          return (
            <div style={{ position: "relative", width: 800, height: 500 }}>
              {/* Cartesian Axes */}
              <svg width={800} height={500} style={{ position: "absolute", inset: 0 }}>
                <line x1={60} y1={250} x2={740} y2={250} stroke={theme.chalkDim} strokeWidth={2.5} />
                <line x1={400} y1={40} x2={400} y2={460} stroke={theme.chalkDim} strokeWidth={2.5} />

                {/* Points using ChalkCircleNode - opaque so axes don't bleed inside */}
                {points.map((p, i) => (
                  <g key={i}>
                    <ChalkCircleNode
                      x={p.x}
                      y={p.y}
                      r={R}
                      label=""
                      stroke={theme.good}
                      strokeWidth={3}
                      fill={theme.boardBg}
                    />
                    <text x={p.x + 24} y={p.y + 6} fontFamily={fonts.mono} fontSize={20} fill={theme.cyan} fontWeight={700}>
                      {p.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          );
        }

        if (state === "B") {
          const hullPoints = [
            { x: 200, y: 180 },
            { x: 380, y: 140 },
            { x: 560, y: 220 },
            { x: 440, y: 360 },
            { x: 260, y: 280 },
          ];

          return (
            <div style={{ position: "relative", width: 800, height: 500 }}>
              <svg width={800} height={500} style={{ position: "absolute", inset: 0 }}>
                {/* Hull boundary edges */}
                <polygon points="200,180 380,140 560,220 440,360 260,280" fill="rgba(60, 229, 167, 0.15)" stroke={theme.good} strokeWidth={4} filter="url(#chalk-stroke)" />

                {/* Point markers */}
                {hullPoints.map((p, i) => (
                  <ChalkCircleNode
                    key={i}
                    x={p.x}
                    y={p.y}
                    r={R}
                    label=""
                    stroke={theme.good}
                    strokeWidth={3.5}
                    fill={theme.boardBg}
                  />
                ))}
              </svg>
              <div style={{ position: "absolute", bottom: 20, right: 40, fontFamily: fonts.mono, fontSize: 22, color: theme.good, fontWeight: 700 }}>
                GRAHAM SCAN: Convex Hull Boundary Sealed in Green
              </div>
            </div>
          );
        }

        return (
          <div style={{ fontFamily: fonts.mono, fontSize: 22, color: theme.cyan, fontWeight: 700 }}>
            DENSE POINT CLOUD: RADIAL SWEEP RAY ABOUT PIVOT
          </div>
        );
      }}
    </ProofShell>
  );
};
