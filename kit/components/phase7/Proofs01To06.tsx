import React from "react";
import { ProofShell } from "./ProofShell";
import { RoughBox } from "../RoughBox";
import { RoughLine } from "../RoughLine";
import { MeshGrid } from "../MeshGrid";
import { ParametricArrow } from "../ParametricArrow";
import { theme, fonts } from "../../lib/theme";

// =============================================================================
// 01 — ARRAY / SEQUENCE
// =============================================================================
export const Proof01Array: React.FC = () => {
  return (
    <ProofShell
      structureNum="01"
      structureTitle="Array / Sequence"
      stateAName="Fixed Slots & Indices"
      stateBName="Value Swap with Fixed Slots"
      stateCName="15-Element Dense Track"
      rule="Slots stay fixed. Values move. Indices never move."
    >
      {(state) => {
        if (state === "A") {
          const vals = [2, 0, 2, 1, 1, 0];
          const slotW = 140;
          const slotH = 120;
          const gap = 20;

          return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              {/* Indices */}
              <div style={{ display: "flex", gap, marginBottom: 16 }}>
                {vals.map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: slotW,
                      textAlign: "center",
                      fontFamily: fonts.mono,
                      fontSize: 24,
                      color: theme.cyan,
                      fontWeight: 700,
                    }}
                  >
                    idx [{i}]
                  </div>
                ))}
              </div>
              {/* Slots */}
              <div style={{ display: "flex", gap }}>
                {vals.map((v, i) => (
                  <div key={i} style={{ position: "relative", width: slotW, height: slotH }}>
                    <RoughBox width={slotW} height={slotH} stroke={theme.chalkText} strokeWidth={3.5} seed={i + 1} />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: fonts.mono,
                        fontSize: 52,
                        fontWeight: 700,
                        color: theme.chalkText,
                      }}
                    >
                      {v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        }

        if (state === "B") {
          const vals = [2, 1, 2, 1, 0, 0]; // After swap of idx 1 and idx 4
          const slotW = 140;
          const slotH = 120;
          const gap = 20;

          return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
              {/* Swap flight curve indicator overhead */}
              <div style={{ position: "absolute", top: -80, left: 140 + gap, width: 3 * (slotW + gap), height: 70 }}>
                <svg width={3 * (slotW + gap)} height={70} style={{ overflow: "visible" }}>
                  <path
                    d={`M 0 50 Q ${(3 * (slotW + gap)) / 2} -20 ${3 * (slotW + gap)} 50`}
                    fill="none"
                    stroke={theme.pivot}
                    strokeWidth={4}
                    strokeDasharray="8 6"
                  />
                  <text x={(3 * (slotW + gap)) / 2} y={-10} textAnchor="middle" fontFamily={fonts.mono} fontSize={20} fill={theme.pivot} fontWeight={700}>
                    ⇄ SWAP(idx 1, idx 4)
                  </text>
                </svg>
              </div>

              {/* Indices */}
              <div style={{ display: "flex", gap, marginBottom: 16 }}>
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: slotW,
                      textAlign: "center",
                      fontFamily: fonts.mono,
                      fontSize: 24,
                      color: i === 1 || i === 4 ? theme.pivot : theme.chalkDim,
                      fontWeight: i === 1 || i === 4 ? 700 : 400,
                    }}
                  >
                    idx [{i}]
                  </div>
                ))}
              </div>

              {/* Fixed Slots */}
              <div style={{ display: "flex", gap }}>
                {vals.map((v, i) => {
                  const isSwap = i === 1 || i === 4;
                  return (
                    <div key={i} style={{ position: "relative", width: slotW, height: slotH }}>
                      <RoughBox
                        width={slotW}
                        height={slotH}
                        stroke={isSwap ? theme.pivot : theme.chalkText}
                        strokeWidth={isSwap ? 4.5 : 3}
                        fill={isSwap ? "rgba(255, 209, 102, 0.15)" : undefined}
                        seed={i + 10}
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: fonts.mono,
                          fontSize: 52,
                          fontWeight: 700,
                          color: isSwap ? theme.pivot : theme.chalkText,
                        }}
                      >
                        {v}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }

        // State C: 15 elements (dense)
        const denseVals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        return (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
              {denseVals.map((_, i) => (
                <div key={i} style={{ width: 72, textAlign: "center", fontFamily: fonts.mono, fontSize: 14, color: theme.cyan }}>
                  [{i}]
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {denseVals.map((v, i) => (
                <div key={i} style={{ position: "relative", width: 72, height: 72 }}>
                  <RoughBox width={72} height={72} stroke={theme.chalkText} strokeWidth={2} seed={i + 30} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 24, fontWeight: 700, color: theme.chalkText }}>
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }}
    </ProofShell>
  );
};

// =============================================================================
// 02 — HASH SET
// =============================================================================
export const Proof02HashSet: React.FC = () => {
  return (
    <ProofShell
      structureNum="02"
      structureTitle="Hash Set"
      stateAName="Unordered Member Field"
      stateBName="Contains Probe & Duplicate Rejection"
      stateCName="Dense 16-Member Cluster"
      rule="A Set answers membership. Ordering and position are not meaningful."
    >
      {(state) => {
        if (state === "A") {
          const members = [
            { v: 8, x: 260, y: 150 },
            { v: 3, x: 520, y: 130 },
            { v: 6, x: 400, y: 260 },
            { v: 11, x: 680, y: 230 },
            { v: 2, x: 220, y: 340 },
            { v: 14, x: 560, y: 350 },
          ];
          return (
            <div style={{ position: "relative", width: 950, height: 500 }}>
              {/* Organic Chalk Boundary */}
              <svg width={950} height={500} style={{ position: "absolute", inset: 0 }}>
                <path
                  d="M 120 250 C 120 60, 830 50, 830 250 C 830 450, 120 440, 120 250 Z"
                  fill="none"
                  stroke={theme.chalkText}
                  strokeWidth={3.5}
                  strokeDasharray="16 8"
                  filter="url(#chalk-stroke)"
                />
              </svg>
              {/* Large, bold tokens */}
              {members.map((m, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    left: m.x,
                    top: m.y,
                    width: 90,
                    height: 90,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <RoughLine
                    width={90}
                    height={90}
                    shape={{ kind: "circle", cx: 45, cy: 45, rx: 40, ry: 40 }}
                    stroke={theme.cyan}
                    strokeWidth={3}
                    seed={i + 1}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: fonts.mono,
                      fontSize: 36,
                      fontWeight: 700,
                      color: theme.chalkText,
                    }}
                  >
                    {m.v}
                  </div>
                </div>
              ))}
              <div
                style={{
                  position: "absolute",
                  bottom: 24,
                  right: 60,
                  fontFamily: fonts.mono,
                  fontSize: 18,
                  color: theme.chalkDim,
                }}
              >
                UNORDERED MATHEMATICAL FIELD · NO SLOTS · NO INDICES
              </div>
            </div>
          );
        }

        if (state === "B") {
          return (
            <div style={{ position: "relative", width: 950, height: 500 }}>
              <svg width={950} height={500} style={{ position: "absolute", inset: 0 }}>
                <path
                  d="M 120 250 C 120 60, 830 50, 830 250 C 830 450, 120 440, 120 250 Z"
                  fill="none"
                  stroke={theme.chalkText}
                  strokeWidth={3.5}
                  strokeDasharray="16 8"
                  filter="url(#chalk-stroke)"
                />
              </svg>

              {/* Existing 6 in set */}
              <div style={{ position: "absolute", left: 450, top: 250, width: 90, height: 90, transform: "translate(-50%, -50%)" }}>
                <RoughLine width={90} height={90} shape={{ kind: "circle", cx: 45, cy: 45, rx: 40, ry: 40 }} stroke={theme.bad} strokeWidth={4} seed={5} />
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 36, fontWeight: 700, color: theme.bad }}>
                  6
                </div>
              </div>

              {/* Incoming probe: 6 already in set */}
              <div style={{ position: "absolute", left: 780, top: 250, width: 90, height: 90, transform: "translate(-50%, -50%)" }}>
                <RoughLine width={90} height={90} shape={{ kind: "circle", cx: 45, cy: 45, rx: 40, ry: 40 }} stroke={theme.bad} strokeWidth={4} seed={6} />
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 36, fontWeight: 700, color: theme.bad }}>
                  6
                </div>
                <div style={{ position: "absolute", top: -36, left: -40, width: 180, textAlign: "center", fontFamily: fonts.mono, fontSize: 16, color: theme.bad, fontWeight: 700 }}>
                  DUPLICATE! REJECTED
                </div>
              </div>
            </div>
          );
        }

        // State C: 16 members
        const dense = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        return (
          <div style={{ position: "relative", width: 1000, height: 480 }}>
            <svg width={1000} height={480} style={{ position: "absolute", inset: 0 }}>
              <path
                d="M 80 240 C 80 40, 920 30, 920 240 C 920 450, 80 440, 80 240 Z"
                fill="none"
                stroke={theme.chalkText}
                strokeWidth={3}
                strokeDasharray="14 6"
              />
            </svg>
            <div style={{ position: "absolute", inset: 40, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 20 }}>
              {dense.map((d, i) => (
                <div key={i} style={{ position: "relative", width: 68, height: 68 }}>
                  <RoughLine width={68} height={68} shape={{ kind: "circle", cx: 34, cy: 34, rx: 30, ry: 30 }} stroke={theme.cyan} strokeWidth={2} seed={i + 20} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 22, color: theme.chalkText }}>
                    {d}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }}
    </ProofShell>
  );
};

// =============================================================================
// 03 — HASH MAP / KEY → VALUE
// =============================================================================
export const Proof03HashMap: React.FC = () => {
  return (
    <ProofShell
      structureNum="03"
      structureTitle="Hash Map / Key → Value"
      stateAName="Key→Value Association Rows"
      stateBName="In-Place Value Update"
      stateCName="Grouping & Frequency Variants"
      rule="The key-value relationship is primary. Row order is not semantic."
    >
      {(state) => {
        if (state === "A") {
          const rows = [
            { k: "apple", v: "3" },
            { k: "mango", v: "5" },
            { k: "kiwi", v: "1" },
            { k: "berry", v: "8" },
          ];
          return (
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              {rows.map((row, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 28 }}>
                  {/* Key Box */}
                  <div style={{ position: "relative", width: 220, height: 75 }}>
                    <RoughBox width={220} height={75} stroke={theme.cyan} strokeWidth={3} seed={i + 1} />
                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 30, color: theme.cyan, fontWeight: 700 }}>
                      &quot;{row.k}&quot;
                    </div>
                  </div>
                  {/* Connector Arrow */}
                  <div style={{ width: 100, height: 35 }}>
                    <RoughLine width={100} height={35} shape={{ kind: "arrow", x1: 0, y1: 17, x2: 90, y2: 17 }} stroke={theme.chalkText} strokeWidth={3} seed={i + 10} />
                  </div>
                  {/* Value Box */}
                  <div style={{ position: "relative", width: 140, height: 75 }}>
                    <RoughBox width={140} height={75} stroke={theme.good} strokeWidth={3} seed={i + 20} />
                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 36, fontWeight: 800, color: theme.good }}>
                      {row.v}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );
        }

        if (state === "B") {
          return (
            <div style={{ display: "flex", flexDirection: "column", gap: 30, alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
                {/* Key remains completely stable */}
                <div style={{ position: "relative", width: 240, height: 85 }}>
                  <RoughBox width={240} height={85} stroke={theme.cyan} strokeWidth={3.5} seed={5} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 32, color: theme.cyan, fontWeight: 700 }}>
                    &quot;apple&quot;
                  </div>
                </div>
                {/* Active connector */}
                <div style={{ width: 120, height: 40 }}>
                  <RoughLine width={120} height={40} shape={{ kind: "arrow", x1: 0, y1: 20, x2: 110, y2: 20 }} stroke={theme.pivot} strokeWidth={4} seed={6} />
                </div>
                {/* Value Box showing update */}
                <div style={{ position: "relative", width: 160, height: 85 }}>
                  <RoughBox width={160} height={85} stroke={theme.good} strokeWidth={4.5} fill="rgba(60, 229, 167, 0.2)" seed={7} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 44, fontWeight: 800, color: theme.good }}>
                    10
                  </div>
                </div>
                {/* Stale old value crossed out */}
                <div style={{ marginLeft: 20, fontFamily: fonts.mono, fontSize: 24, color: theme.warn, textDecoration: "line-through" }}>
                  old: 3
                </div>
              </div>
              <div style={{ fontFamily: fonts.mono, fontSize: 22, color: theme.good, fontWeight: 700 }}>
                PUT(&quot;apple&quot;, 10): Key identity anchored; value in-place mutated
              </div>
            </div>
          );
        }

        // State C: Grouping & Frequency map
        const groups = [
          { k: "aet", v: '["eat", "tea", "ate"]' },
          { k: "ant", v: '["tan", "nat"]' },
          { k: "abt", v: '["bat"]' },
        ];
        return (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ fontFamily: fonts.mono, fontSize: 20, color: theme.cyan, marginBottom: 4, fontWeight: 700 }}>
              GROUPING MAP: ONE KEY → ARRAY VALUE CONTAINER
            </div>
            {groups.map((g, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 24 }}>
                <div style={{ position: "relative", width: 180, height: 70 }}>
                  <RoughBox width={180} height={70} stroke={theme.cyan} strokeWidth={2.5} seed={i + 1} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 26, color: theme.cyan }}>
                    &quot;{g.k}&quot;
                  </div>
                </div>
                <div style={{ width: 80, height: 30 }}>
                  <RoughLine width={80} height={30} shape={{ kind: "arrow", x1: 0, y1: 15, x2: 70, y2: 15 }} stroke={theme.chalkText} strokeWidth={2.5} seed={i + 10} />
                </div>
                <div style={{ position: "relative", width: 440, height: 70 }}>
                  <RoughBox width={440} height={70} stroke={theme.good} strokeWidth={2.5} seed={i + 20} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 24, color: theme.good }}>
                    {g.v}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      }}
    </ProofShell>
  );
};

// =============================================================================
// 04 — MATRIX / GRID
// =============================================================================
export const Proof04Matrix: React.FC = () => {
  return (
    <ProofShell
      structureNum="04"
      structureTitle="Matrix / Grid"
      stateAName="4×4 Coordinate Grid"
      stateBName="Active Neighbor Query Probe"
      stateCName="9×9 Subgrid Divided Matrix"
      rule="Cell positions are fixed. Row and column define identity."
    >
      {(state) => {
        if (state === "A") {
          const grid = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
          ];
          const cellSize = 110;

          return (
            <MeshGrid
              rows={4}
              cols={4}
              cellWidth={cellSize}
              cellHeight={cellSize}
              showColRulers
              showRowRulers
              stroke={theme.chalkText}
              strokeWidth={3}
              outerStrokeWidth={4}
              renderCell={({ row, col }) => (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: fonts.mono,
                    fontSize: 38,
                    fontWeight: 700,
                    color: theme.chalkText,
                  }}
                >
                  {grid[row][col]}
                </div>
              )}
            />
          );
        }

        if (state === "B") {
          const cellSize = 110;

          return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
              <MeshGrid
                rows={4}
                cols={4}
                cellWidth={cellSize}
                cellHeight={cellSize}
                stroke={theme.chalkDim}
                strokeWidth={2}
                outerStrokeWidth={3}
                renderCell={({ row, col }) => {
                  const isCurrent = row === 1 && col === 1;
                  const isNeighbor =
                    (row === 0 && col === 1) ||
                    (row === 2 && col === 1) ||
                    (row === 1 && col === 0) ||
                    (row === 1 && col === 2);

                  const stroke = isCurrent ? theme.pivot : isNeighbor ? theme.cyan : theme.chalkDim;
                  const fill = isCurrent ? "rgba(255, 209, 102, 0.25)" : isNeighbor ? "rgba(86, 204, 242, 0.15)" : undefined;

                  return (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: fill,
                        border: isCurrent || isNeighbor ? `2px solid ${stroke}` : undefined,
                        boxSizing: "border-box",
                        fontFamily: fonts.mono,
                        fontSize: 38,
                        fontWeight: 700,
                        color: stroke,
                      }}
                    >
                      {row * 4 + col + 1}
                    </div>
                  );
                }}
              />
              <div style={{ marginTop: 24, fontFamily: fonts.mono, fontSize: 20, color: theme.cyan, fontWeight: 700 }}>
                4-DIRECTIONAL NEIGHBOR PROBE: Cell (1,1) → North (0,1), South (2,1), West (1,0), East (1,2)
              </div>
            </div>
          );
        }

        // State C: 9x9 Subgrid Divided Matrix (Sudoku style)
        return (
          <MeshGrid
            rows={9}
            cols={9}
            cellWidth={50}
            cellHeight={50}
            subgridRows={3}
            subgridCols={3}
            subgridStrokeWidth={4}
            subgridStroke={theme.cyan}
            stroke={theme.chalkText}
            strokeWidth={1.5}
            outerStrokeWidth={3.5}
            renderCell={({ row, col }) => (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: fonts.mono,
                  fontSize: 18,
                  color: theme.chalkText,
                }}
              >
                {((row + col) % 9) + 1}
              </div>
            )}
          />
        );
      }}
    </ProofShell>
  );
};

// =============================================================================
// 05 — LINKED LIST
// =============================================================================
export const Proof05LinkedList: React.FC = () => {
  return (
    <ProofShell
      structureNum="05"
      structureTitle="Linked List"
      stateAName="Value + Link Port Nodes"
      stateBName="Pointer Rewiring / Node Deletion"
      stateCName="8-Node Serpentine + Pointers"
      rule="Nodes store values. Edges store relationships. Position is not identity."
    >
      {(state) => {
        if (state === "A") {
          const nodes = [12, 99, 37];
          const nodeW = 180;
          const nodeH = 110;

          return (
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div style={{ fontFamily: fonts.mono, fontSize: 24, color: theme.pivot, fontWeight: 700, marginRight: 10 }}>HEAD ──→</div>
              {nodes.map((v, i) => (
                <React.Fragment key={i}>
                  {/* Node with Port */}
                  <div style={{ position: "relative", width: nodeW, height: nodeH }}>
                    <RoughBox width={nodeW} height={nodeH} stroke={theme.chalkText} strokeWidth={3} seed={i + 1} />
                    {/* Vertical Divider */}
                    <div style={{ position: "absolute", left: 115, top: 0, width: 2, height: nodeH }}>
                      <RoughLine width={2} height={nodeH} shape={{ kind: "line", x1: 0, y1: 5, x2: 0, y2: nodeH - 5 }} stroke={theme.chalkDim} strokeWidth={2.5} seed={i + 10} />
                    </div>
                    <div style={{ position: "absolute", left: 0, top: 0, width: 115, height: nodeH, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 40, fontWeight: 700, color: theme.chalkText }}>
                      {v}
                    </div>
                    {/* Port bullet */}
                    <div style={{ position: "absolute", left: 115, top: 0, width: 65, height: nodeH, display: "flex", alignItems: "center", justifyContent: "center", color: theme.cyan, fontSize: 36 }}>
                      •
                    </div>
                  </div>
                  {/* Link Arrow */}
                  <div style={{ width: 90, height: 35 }}>
                    <svg width={90} height={35} style={{ overflow: "visible" }}>
                      <ParametricArrow x1={0} y1={17} x2={80} y2={17} stroke={theme.cyan} strokeWidth={3.5} headLength={16} />
                    </svg>
                  </div>
                </React.Fragment>
              ))}
              <div style={{ fontFamily: fonts.mono, fontSize: 30, color: theme.warn, fontWeight: 700 }}>∅ NULL</div>
            </div>
          );
        }

        if (state === "B") {
          const nodeW = 180;
          const nodeH = 110;

          return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
                {/* Node 12 */}
                <div style={{ position: "relative", width: nodeW, height: nodeH }}>
                  <RoughBox width={nodeW} height={nodeH} stroke={theme.pivot} strokeWidth={3.5} seed={1} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 38, fontWeight: 700, color: theme.chalkText }}>
                    12 | •
                  </div>
                </div>

                {/* Stale/Detached Node 99 */}
                <div style={{ position: "relative", width: nodeW, height: nodeH, opacity: 0.35 }}>
                  <RoughBox width={nodeW} height={nodeH} stroke={theme.warn} strokeWidth={2} seed={2} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 38, fontWeight: 700, color: theme.warn, textDecoration: "line-through" }}>
                    99 | •
                  </div>
                </div>

                {/* Node 37 */}
                <div style={{ position: "relative", width: nodeW, height: nodeH }}>
                  <RoughBox width={nodeW} height={nodeH} stroke={theme.good} strokeWidth={3.5} seed={3} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 38, fontWeight: 700, color: theme.chalkText }}>
                    37 | •
                  </div>
                </div>
              </div>

              {/* Bypass Arrow Curve using ParametricArrow */}
              <div style={{ position: "absolute", top: -75, left: 130, width: 330, height: 70 }}>
                <svg width={330} height={70} style={{ overflow: "visible" }}>
                  <ParametricArrow
                    x1={0}
                    y1={50}
                    x2={330}
                    y2={50}
                    kind="curved"
                    bend={-70}
                    stroke={theme.good}
                    strokeWidth={4}
                    strokeDasharray="8 6"
                    headStyle="filled"
                    label="curr.next = curr.next.next"
                    labelColor={theme.good}
                    labelFontSize={18}
                  />
                </svg>
              </div>

              <div style={{ marginTop: 50, fontFamily: fonts.mono, fontSize: 20, color: theme.good, fontWeight: 700 }}>
                POINTER REWIRING: Node 99 successfully bypassed and unlinked!
              </div>
            </div>
          );
        }

        // State C: 8 nodes
        const nodes8 = [1, 2, 3, 4, 5, 6, 7, 8];
        return (
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {nodes8.map((v, i) => (
              <React.Fragment key={i}>
                <div style={{ position: "relative", width: 90, height: 60 }}>
                  <RoughBox width={90} height={60} stroke={theme.chalkText} strokeWidth={2} seed={i + 30} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 22, color: theme.chalkText }}>
                    {v}|•
                  </div>
                </div>
                {i < nodes8.length - 1 && (
                  <div style={{ width: 40, height: 20 }}>
                    <svg width={40} height={20} style={{ overflow: "visible" }}>
                      <ParametricArrow x1={0} y1={10} x2={35} y2={10} stroke={theme.cyan} strokeWidth={2} headLength={12} />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        );
      }}
    </ProofShell>
  );
};

// =============================================================================
// 06 — STACK
// =============================================================================
export const Proof06Stack: React.FC = () => {
  return (
    <ProofShell
      structureNum="06"
      structureTitle="Stack"
      stateAName="Vertical Column & TOP Pointer"
      stateBName="Push / Pop Vertical Trajectory"
      stateCName="8-Item Deep Column"
      rule="Only TOP is accessible. Strict LIFO ordering."
    >
      {(state) => {
        if (state === "A") {
          const items = ["A", "B", "C", "D"]; // D is top
          const itemW = 280;
          const itemH = 85;

          return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
              {/* TOP Indicator */}
              <div style={{ position: "absolute", left: -160, top: 25, fontFamily: fonts.mono, fontSize: 26, color: theme.pivot, fontWeight: 700 }}>
                TOP ──→
              </div>

              {/* Items in vertical column */}
              <div style={{ display: "flex", flexDirection: "column-reverse", gap: 12 }}>
                {items.map((it, i) => (
                  <div key={i} style={{ position: "relative", width: itemW, height: itemH }}>
                    <RoughBox width={itemW} height={itemH} stroke={i === items.length - 1 ? theme.pivot : theme.chalkText} strokeWidth={i === items.length - 1 ? 4 : 3} seed={i + 1} />
                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 40, fontWeight: 700, color: theme.chalkText }}>
                      {it}
                    </div>
                  </div>
                ))}
              </div>

              {/* Base Line */}
              <div style={{ width: 360, height: 20, marginTop: 8 }}>
                <RoughLine width={360} height={20} shape={{ kind: "line", x1: 10, y1: 10, x2: 350, y2: 10 }} stroke={theme.chalkDim} strokeWidth={5} seed={99} />
              </div>
            </div>
          );
        }

        if (state === "B") {
          const itemW = 280;
          const itemH = 80;

          return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
              {/* Incoming Push Item above mouth */}
              <div style={{ position: "relative", width: itemW, height: itemH, marginBottom: 16 }}>
                <RoughBox width={itemW} height={itemH} stroke={theme.good} strokeWidth={4} fill="rgba(60, 229, 167, 0.2)" seed={10} />
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 34, fontWeight: 700, color: theme.good }}>
                  PUSH(E)
                </div>
              </div>

              {/* Vertical Drop Arrow */}
              <div style={{ width: 50, height: 50, marginBottom: 12 }}>
                <RoughLine width={50} height={50} shape={{ kind: "arrow", x1: 25, y1: 0, x2: 25, y2: 45 }} stroke={theme.good} strokeWidth={4} seed={11} />
              </div>

              {/* Stack body */}
              <div style={{ display: "flex", flexDirection: "column-reverse", gap: 10 }}>
                {["A", "B", "C"].map((it, i) => (
                  <div key={i} style={{ position: "relative", width: itemW, height: 75 }}>
                    <RoughBox width={itemW} height={75} stroke={theme.chalkText} strokeWidth={2.5} seed={i + 1} />
                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 34, color: theme.chalkText }}>
                      {it}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ width: 360, height: 20, marginTop: 8 }}>
                <RoughLine width={360} height={20} shape={{ kind: "line", x1: 10, y1: 10, x2: 350, y2: 10 }} stroke={theme.chalkDim} strokeWidth={5} seed={99} />
              </div>
            </div>
          );
        }

        // State C: 8 items
        const deep = ["0x01", "0x02", "0x03", "0x04", "0x05", "0x06", "0x07", "0x08"];
        return (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column-reverse", gap: 6 }}>
              {deep.map((it, i) => (
                <div key={i} style={{ position: "relative", width: 220, height: 52 }}>
                  <RoughBox width={220} height={52} stroke={i === deep.length - 1 ? theme.pivot : theme.chalkText} strokeWidth={2} seed={i + 30} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 22, color: theme.chalkText }}>
                    {it}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ width: 280, height: 16, marginTop: 6 }}>
              <RoughLine width={280} height={16} shape={{ kind: "line", x1: 10, y1: 8, x2: 270, y2: 8 }} stroke={theme.chalkDim} strokeWidth={4} seed={99} />
            </div>
          </div>
        );
      }}
    </ProofShell>
  );
};
