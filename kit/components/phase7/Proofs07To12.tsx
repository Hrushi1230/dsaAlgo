import React from "react";
import { ProofShell, getEdgeCoords, ChalkCircleNode } from "./ProofShell";
import { RoughBox } from "../RoughBox";
import { RoughLine } from "../RoughLine";
import { ParametricArrow } from "../ParametricArrow";
import { RoughNode } from "../RoughNode";
import { theme, fonts } from "../../lib/theme";

// =============================================================================
// 07 — QUEUE / DEQUE
// =============================================================================
export const Proof07Queue: React.FC = () => {
  return (
    <ProofShell
      structureNum="07"
      structureTitle="Queue / Deque"
      stateAName="Horizontal Lane & Directional Flow"
      stateBName="Enqueue Rear & Dequeue Front"
      stateCName="10-Item Double-Ended Deque"
      rule="First-In First-Out. Enqueue at rear, dequeue from front."
    >
      {(state) => {
        if (state === "A") {
          const items = ["Q1", "Q2", "Q3", "Q4"];
          const itemW = 140;
          const itemH = 110;
          const gap = 20;

          return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              {/* Rails and Items */}
              <div style={{ position: "relative", width: 950, height: 180, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {/* Top rail */}
                <div style={{ position: "absolute", top: 12, left: 60, width: 830, height: 10 }}>
                  <RoughLine width={830} height={10} shape={{ kind: "line", x1: 0, y1: 5, x2: 830, y2: 5 }} stroke={theme.chalkDim} strokeWidth={3.5} seed={1} />
                </div>
                {/* Bottom rail */}
                <div style={{ position: "absolute", bottom: 12, left: 60, width: 830, height: 10 }}>
                  <RoughLine width={830} height={10} shape={{ kind: "line", x1: 0, y1: 5, x2: 830, y2: 5 }} stroke={theme.chalkDim} strokeWidth={3.5} seed={2} />
                </div>

                {/* Queue Items */}
                <div style={{ display: "flex", gap, zIndex: 10 }}>
                  {items.map((it, i) => (
                    <div key={i} style={{ position: "relative", width: itemW, height: itemH }}>
                      <RoughBox width={itemW} height={itemH} stroke={theme.chalkText} strokeWidth={3} seed={i + 10} />
                      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 38, fontWeight: 700, color: theme.chalkText }}>
                        {it}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Front and Rear labels */}
                <div style={{ position: "absolute", left: -60, fontFamily: fonts.mono, fontSize: 22, fontWeight: 700, color: theme.good }}>
                  ← FRONT (Exit)
                </div>
                <div style={{ position: "absolute", right: -70, fontFamily: fonts.mono, fontSize: 22, fontWeight: 700, color: theme.cyan }}>
                  REAR (Entry) ←
                </div>
              </div>
            </div>
          );
        }

        if (state === "B") {
          const itemW = 130;
          const itemH = 100;
          return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ position: "relative", width: 1100, height: 220, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {/* Rails */}
                <div style={{ position: "absolute", top: 20, left: 160, width: 780, height: 10 }}>
                  <RoughLine width={780} height={10} shape={{ kind: "line", x1: 0, y1: 5, x2: 780, y2: 5 }} stroke={theme.chalkDim} strokeWidth={3} seed={3} />
                </div>
                <div style={{ position: "absolute", bottom: 20, left: 160, width: 780, height: 10 }}>
                  <RoughLine width={780} height={10} shape={{ kind: "line", x1: 0, y1: 5, x2: 780, y2: 5 }} stroke={theme.chalkDim} strokeWidth={3} seed={4} />
                </div>

                {/* Leaving item: Q0 */}
                <div style={{ position: "absolute", left: 10, top: 60, width: itemW, height: itemH, opacity: 0.7 }}>
                  <RoughBox width={itemW} height={itemH} stroke={theme.bad} strokeWidth={3} seed={99} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 34, fontWeight: 700, color: theme.bad }}>
                    Q0
                  </div>
                  <div style={{ position: "absolute", top: -28, left: 0, right: 0, textAlign: "center", fontFamily: fonts.mono, fontSize: 16, color: theme.bad, fontWeight: 700 }}>
                    DEQUEUED
                  </div>
                </div>

                {/* Queue Body */}
                <div style={{ display: "flex", gap: 16, zIndex: 10 }}>
                  {["Q1", "Q2", "Q3"].map((it, i) => (
                    <div key={i} style={{ position: "relative", width: itemW, height: itemH }}>
                      <RoughBox width={itemW} height={itemH} stroke={theme.chalkText} strokeWidth={3} seed={i + 20} />
                      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 36, fontWeight: 700, color: theme.chalkText }}>
                        {it}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Entering item: Q4 */}
                <div style={{ position: "absolute", right: 10, top: 60, width: itemW, height: itemH }}>
                  <RoughBox width={itemW} height={itemH} stroke={theme.good} strokeWidth={3.5} seed={101} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 34, fontWeight: 700, color: theme.good }}>
                    Q4
                  </div>
                  <div style={{ position: "absolute", top: -28, left: 0, right: 0, textAlign: "center", fontFamily: fonts.mono, fontSize: 16, color: theme.good, fontWeight: 700 }}>
                    ENQUEUED →
                  </div>
                </div>
              </div>
            </div>
          );
        }

        // State C: Deque (10 items)
        const dequeItems = ["D0", "D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9"];
        return (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ position: "relative", width: 1100, height: 160, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ position: "absolute", top: 10, left: 80, width: 940, height: 10 }}>
                <RoughLine width={940} height={10} shape={{ kind: "line", x1: 0, y1: 5, x2: 940, y2: 5 }} stroke={theme.chalkDim} strokeWidth={3} seed={5} />
              </div>
              <div style={{ position: "absolute", bottom: 10, left: 80, width: 940, height: 10 }}>
                <RoughLine width={940} height={10} shape={{ kind: "line", x1: 0, y1: 5, x2: 940, y2: 5 }} stroke={theme.chalkDim} strokeWidth={3} seed={6} />
              </div>

              <div style={{ display: "flex", gap: 10, zIndex: 10 }}>
                {dequeItems.map((it, i) => (
                  <div key={i} style={{ position: "relative", width: 85, height: 75 }}>
                    <RoughBox width={85} height={75} stroke={theme.cyan} strokeWidth={2.5} seed={i + 30} />
                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 24, fontWeight: 700, color: theme.chalkText }}>
                      {it}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ position: "absolute", left: -40, fontFamily: fonts.mono, fontSize: 16, color: theme.pivot, fontWeight: 700 }}>
                ⇄ PUSH/POP FRONT
              </div>
              <div style={{ position: "absolute", right: -40, fontFamily: fonts.mono, fontSize: 16, color: theme.pivot, fontWeight: 700 }}>
                PUSH/POP REAR ⇄
              </div>
            </div>
          </div>
        );
      }}
    </ProofShell>
  );
};

// =============================================================================
// 08 — TREE / BST
// =============================================================================
export const Proof08Tree: React.FC = () => {
  return (
    <ProofShell
      structureNum="08"
      structureTitle="Tree / BST"
      stateAName="Hierarchical Binary Search Tree"
      stateBName="BST Search Traversal Path"
      stateCName="Deep 4-Level Tree"
      rule="Rooted hierarchy. Parent-child relationships strictly descend. Edges terminate at circle perimeter."
    >
      {(state) => {
        if (state === "A") {
          const R = 40; // Grand, prominent node radius
          const nodes = [
            { v: 50, x: 500, y: 70 },
            { v: 25, x: 280, y: 220 },
            { v: 75, x: 720, y: 220 },
            { v: 12, x: 160, y: 380 },
            { v: 37, x: 400, y: 380 },
            { v: 62, x: 600, y: 380 },
            { v: 88, x: 840, y: 380 },
          ];

          const edges = [
            { from: nodes[0], to: nodes[1] },
            { from: nodes[0], to: nodes[2] },
            { from: nodes[1], to: nodes[3] },
            { from: nodes[1], to: nodes[4] },
            { from: nodes[2], to: nodes[5] },
            { from: nodes[2], to: nodes[6] },
          ];

          return (
            <div style={{ position: "relative", width: 1000, height: 480 }}>
              <svg width={1000} height={480} style={{ position: "absolute", inset: 0 }}>
                {/* Branch lines that STOP at circle perimeter */}
                {edges.map((e, i) => {
                  const coords = getEdgeCoords(e.from.x, e.from.y, e.to.x, e.to.y, R, R);
                  return (
                    <line
                      key={i}
                      x1={coords.x1}
                      y1={coords.y1}
                      x2={coords.x2}
                      y2={coords.y2}
                      stroke={theme.chalkText}
                      strokeWidth={3}
                      filter="url(#chalk-stroke)"
                    />
                  );
                })}

                {/* Nodes with solid green chalkboard fill */}
                {nodes.map((n, i) => (
                  <ChalkCircleNode
                    key={i}
                    x={n.x}
                    y={n.y}
                    r={R}
                    label={n.v}
                    stroke={theme.cyan}
                    strokeWidth={3.5}
                    fontSize={32}
                  />
                ))}
              </svg>
            </div>
          );
        }

        if (state === "B") {
          // BST search for 62: 50 -> 75 -> 62 (Target Hit)
          const R = 40;
          const nodes = [
            { v: 50, x: 500, y: 70, status: "visited" },
            { v: 25, x: 280, y: 220, status: "dim" },
            { v: 75, x: 720, y: 220, status: "visited" },
            { v: 12, x: 160, y: 380, status: "dim" },
            { v: 37, x: 400, y: 380, status: "dim" },
            { v: 62, x: 600, y: 380, status: "target" },
            { v: 88, x: 840, y: 380, status: "dim" },
          ];

          const edges = [
            { from: nodes[0], to: nodes[1], active: false },
            { from: nodes[0], to: nodes[2], active: true },
            { from: nodes[1], to: nodes[3], active: false },
            { from: nodes[1], to: nodes[4], active: false },
            { from: nodes[2], to: nodes[5], active: true },
            { from: nodes[2], to: nodes[6], active: false },
          ];

          return (
            <div style={{ position: "relative", width: 1000, height: 480 }}>
              <svg width={1000} height={480} style={{ position: "absolute", inset: 0 }}>
                {edges.map((e, i) => {
                  const coords = getEdgeCoords(e.from.x, e.from.y, e.to.x, e.to.y, R, R);
                  return (
                    <line
                      key={i}
                      x1={coords.x1}
                      y1={coords.y1}
                      x2={coords.x2}
                      y2={coords.y2}
                      stroke={e.active ? theme.good : theme.chalkDim}
                      strokeWidth={e.active ? 5 : 2}
                      filter="url(#chalk-stroke)"
                    />
                  );
                })}

                {nodes.map((n, i) => {
                  const stroke = n.status === "target" ? theme.good : n.status === "visited" ? theme.pivot : theme.chalkDim;
                  return (
                    <ChalkCircleNode
                      key={i}
                      x={n.x}
                      y={n.y}
                      r={R}
                      label={n.v}
                      stroke={stroke}
                      strokeWidth={n.status === "target" ? 4.5 : 3}
                      textColor={stroke}
                      fontSize={32}
                    />
                  );
                })}
              </svg>

              <div style={{ position: "absolute", bottom: 20, right: 40, fontFamily: fonts.mono, fontSize: 20, color: theme.good, fontWeight: 700 }}>
                BST SEARCH(62): 50 → 75 → 62 [FOUND]
              </div>
            </div>
          );
        }

        // State C: 4 levels (10 nodes)
        const R = 28;
        const nodes = [
          { v: 50, x: 500, y: 50 },
          { v: 25, x: 300, y: 150 },
          { v: 75, x: 700, y: 150 },
          { v: 10, x: 200, y: 260 },
          { v: 35, x: 400, y: 260 },
          { v: 60, x: 600, y: 260 },
          { v: 90, x: 800, y: 260 },
          { v: 5, x: 150, y: 380 },
          { v: 15, x: 250, y: 380 },
          { v: 30, x: 350, y: 380 },
        ];

        const edges = [
          { from: nodes[0], to: nodes[1] },
          { from: nodes[0], to: nodes[2] },
          { from: nodes[1], to: nodes[3] },
          { from: nodes[1], to: nodes[4] },
          { from: nodes[2], to: nodes[5] },
          { from: nodes[2], to: nodes[6] },
          { from: nodes[3], to: nodes[7] },
          { from: nodes[3], to: nodes[8] },
          { from: nodes[4], to: nodes[9] },
        ];

        return (
          <div style={{ position: "relative", width: 1000, height: 480 }}>
            <svg width={1000} height={480} style={{ position: "absolute", inset: 0 }}>
              {edges.map((e, i) => {
                const coords = getEdgeCoords(e.from.x, e.from.y, e.to.x, e.to.y, R, R);
                return (
                  <line
                    key={i}
                    x1={coords.x1}
                    y1={coords.y1}
                    x2={coords.x2}
                    y2={coords.y2}
                    stroke={theme.chalkText}
                    strokeWidth={2.5}
                    filter="url(#chalk-stroke)"
                  />
                );
              })}
              {nodes.map((n, i) => (
                <ChalkCircleNode
                  key={i}
                  x={n.x}
                  y={n.y}
                  r={R}
                  label={n.v}
                  stroke={theme.cyan}
                  strokeWidth={2.5}
                  fontSize={22}
                />
              ))}
            </svg>
          </div>
        );
      }}
    </ProofShell>
  );
};

// =============================================================================
// 09 — HEAP / PRIORITY QUEUE
// =============================================================================
export const Proof09Heap: React.FC = () => {
  return (
    <ProofShell
      structureNum="09"
      structureTitle="Heap / Priority Queue"
      stateAName="Min-Heap Tree & Mirrored Array"
      stateBName="Bubble-Up Sift Operation"
      stateCName="15-Node Complete Binary Heap"
      rule="Complete binary tree mapped directly to contiguous array. Children at 2i and 2i+1."
    >
      {(state) => {
        const R = 32;
        const treeNodes = [
          { v: 10, x: 450, y: 50, idx: 1 },
          { v: 15, x: 260, y: 140, idx: 2 },
          { v: 20, x: 640, y: 140, idx: 3 },
          { v: 17, x: 170, y: 230, idx: 4 },
          { v: 25, x: 350, y: 230, idx: 5 },
          { v: 30, x: 550, y: 230, idx: 6 },
          { v: 35, x: 730, y: 230, idx: 7 },
        ];

        const edges = [
          { from: treeNodes[0], to: treeNodes[1] },
          { from: treeNodes[0], to: treeNodes[2] },
          { from: treeNodes[1], to: treeNodes[3] },
          { from: treeNodes[1], to: treeNodes[4] },
          { from: treeNodes[2], to: treeNodes[5] },
          { from: treeNodes[2], to: treeNodes[6] },
        ];

        const arrayVals = [10, 15, 20, 17, 25, 30, 35];

        if (state === "A") {
          return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
              {/* Heap Tree Above */}
              <div style={{ position: "relative", width: 900, height: 280 }}>
                <svg width={900} height={280} style={{ position: "absolute", inset: 0 }}>
                  {edges.map((e, i) => {
                    const coords = getEdgeCoords(e.from.x, e.from.y, e.to.x, e.to.y, R, R);
                    return (
                      <line
                        key={i}
                        x1={coords.x1}
                        y1={coords.y1}
                        x2={coords.x2}
                        y2={coords.y2}
                        stroke={theme.chalkText}
                        strokeWidth={2.5}
                        filter="url(#chalk-stroke)"
                      />
                    );
                  })}
                  {treeNodes.map((n, i) => (
                    <ChalkCircleNode
                      key={i}
                      x={n.x}
                      y={n.y}
                      r={R}
                      label={n.v}
                      stroke={theme.cyan}
                      strokeWidth={3}
                      fontSize={24}
                    />
                  ))}
                </svg>
              </div>

              {/* Array Mirror Below */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.cyan, marginBottom: 8, letterSpacing: "1px" }}>
                  BACKING ARRAY (1-INDEXED MIRROR)
                </div>
                <div style={{ display: "flex", gap: 14 }}>
                  {arrayVals.map((v, i) => (
                    <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                      <div style={{ position: "relative", width: 85, height: 75 }}>
                        <RoughBox width={85} height={75} stroke={theme.chalkText} strokeWidth={2.5} seed={i + 40} />
                        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 30, fontWeight: 700, color: theme.chalkText }}>
                          {v}
                        </div>
                      </div>
                      <div style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.cyan }}>
                        [{i + 1}]
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        if (state === "B") {
          // Bubble up: newly inserted 8 at index 7 swaps with parent 20 at index 3
          return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
              <div style={{ position: "relative", width: 900, height: 280 }}>
                <svg width={900} height={280} style={{ position: "absolute", inset: 0 }}>
                  {edges.map((e, i) => {
                    const coords = getEdgeCoords(e.from.x, e.from.y, e.to.x, e.to.y, R, R);
                    const isSwapEdge = (e.from.idx === 3 && e.to.idx === 7);
                    return (
                      <line
                        key={i}
                        x1={coords.x1}
                        y1={coords.y1}
                        x2={coords.x2}
                        y2={coords.y2}
                        stroke={isSwapEdge ? theme.good : theme.chalkDim}
                        strokeWidth={isSwapEdge ? 4 : 2}
                        filter="url(#chalk-stroke)"
                      />
                    );
                  })}
                  {treeNodes.map((n, i) => {
                    const isParent = n.idx === 3;
                    const isNew = n.idx === 7;
                    const stroke = isNew ? theme.good : isParent ? theme.pivot : theme.chalkText;
                    return (
                      <ChalkCircleNode
                        key={i}
                        x={n.x}
                        y={n.y}
                        r={R}
                        label={isNew ? "8" : n.v}
                        stroke={stroke}
                        strokeWidth={isNew || isParent ? 4 : 2.5}
                        textColor={stroke}
                        fontSize={24}
                      />
                    );
                  })}
                </svg>
                <div style={{ position: "absolute", right: 20, top: 40, fontFamily: fonts.mono, fontSize: 18, color: theme.good, fontWeight: 700 }}>
                  BUBBLE-UP: Insert 8 &lt; Parent 20 → SWAP
                </div>
              </div>

              {/* Array state showing swap */}
              <div style={{ display: "flex", gap: 14 }}>
                {[10, 15, 8, 17, 25, 30, 20].map((v, i) => {
                  const isSwapped = i === 2 || i === 6;
                  return (
                    <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                      <div style={{ position: "relative", width: 85, height: 75 }}>
                        <RoughBox width={85} height={75} stroke={isSwapped ? theme.good : theme.chalkText} strokeWidth={isSwapped ? 3.5 : 2.5} seed={i + 60} />
                        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.mono, fontSize: 30, fontWeight: 700, color: isSwapped ? theme.good : theme.chalkText }}>
                          {v}
                        </div>
                      </div>
                      <div style={{ fontFamily: fonts.mono, fontSize: 16, color: isSwapped ? theme.good : theme.cyan }}>
                        [{i + 1}]
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }

        // State C: 15 nodes (dense)
        return (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
            <div style={{ position: "relative", width: 1000, height: 320 }}>
              <svg width={1000} height={320} style={{ position: "absolute", inset: 0 }}>
                {/* 15 nodes hierarchy */}
                {[
                  { v: 1, x: 500, y: 35 },
                  { v: 3, x: 260, y: 110 },
                  { v: 6, x: 740, y: 110 },
                  { v: 5, x: 140, y: 190 },
                  { v: 9, x: 380, y: 190 },
                  { v: 8, x: 620, y: 190 },
                  { v: 12, x: 860, y: 190 },
                  { v: 7, x: 80, y: 270 },
                  { v: 11, x: 200, y: 270 },
                  { v: 13, x: 320, y: 270 },
                  { v: 10, x: 440, y: 270 },
                  { v: 14, x: 560, y: 270 },
                  { v: 15, x: 680, y: 270 },
                  { v: 16, x: 800, y: 270 },
                  { v: 18, x: 920, y: 270 },
                ].map((n, i) => (
                  <ChalkCircleNode
                    key={i}
                    x={n.x}
                    y={n.y}
                    r={22}
                    label={n.v}
                    stroke={theme.cyan}
                    strokeWidth={2}
                    fontSize={18}
                  />
                ))}
              </svg>
            </div>
            <div style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkDim }}>
              15-ELEMENT COMPLETE BINARY HEAP ARRAY [1..15] FULLY PACKED
            </div>
          </div>
        );
      }}
    </ProofShell>
  );
};

// =============================================================================
// 10 — GRAPH
// =============================================================================
export const Proof10Graph: React.FC = () => {
  return (
    <ProofShell
      structureNum="10"
      structureTitle="Graph"
      stateAName="Non-Hierarchical Network"
      stateBName="BFS Frontier Edge Exploration"
      stateCName="8-Vertex Multi-Connected Network"
      rule="Arbitrary vertex connectivity. Cycles permitted. Edges terminate at vertex perimeter."
    >
      {(state) => {
        const R = 38;
        const vertices = [
          { id: "A", x: 260, y: 120 },
          { id: "B", x: 640, y: 120 },
          { id: "C", x: 750, y: 360 },
          { id: "D", x: 450, y: 420 },
          { id: "E", x: 150, y: 340 },
        ];

        const edges = [
          { from: vertices[0], to: vertices[1], w: 4 },
          { from: vertices[1], to: vertices[2], w: 2 },
          { from: vertices[2], to: vertices[3], w: 7 },
          { from: vertices[3], to: vertices[4], w: 1 },
          { from: vertices[4], to: vertices[0], w: 3 },
          { from: vertices[0], to: vertices[3], w: 5 },
        ];

        if (state === "A") {
          return (
            <div style={{ position: "relative", width: 900, height: 480 }}>
              <svg width={900} height={480} style={{ position: "absolute", inset: 0 }}>
                {edges.map((e, i) => (
                  <ParametricArrow
                    key={i}
                    x1={e.from.x}
                    y1={e.from.y}
                    x2={e.to.x}
                    y2={e.to.y}
                    startRadius={R}
                    endRadius={R}
                    showHead={false}
                    stroke={theme.chalkText}
                    strokeWidth={3}
                    label={e.w}
                    labelColor={theme.cyan}
                    labelFontSize={18}
                  />
                ))}

                {vertices.map((v, i) => (
                  <ChalkCircleNode
                    key={i}
                    x={v.x}
                    y={v.y}
                    r={R}
                    label={v.id}
                    stroke={theme.cyan}
                    strokeWidth={3.5}
                    fontSize={30}
                  />
                ))}
              </svg>
            </div>
          );
        }

        if (state === "B") {
          // BFS from vertex A: explores A -> B (w:4), A -> E (w:3), A -> D (w:5)
          return (
            <div style={{ position: "relative", width: 900, height: 480 }}>
              <svg width={900} height={480} style={{ position: "absolute", inset: 0 }}>
                {edges.map((e, i) => {
                  const coords = getEdgeCoords(e.from.x, e.from.y, e.to.x, e.to.y, R, R);
                  const isExplored = e.from.id === "A" || e.to.id === "A";
                  return (
                    <line
                      key={i}
                      x1={coords.x1}
                      y1={coords.y1}
                      x2={coords.x2}
                      y2={coords.y2}
                      stroke={isExplored ? theme.good : theme.chalkDim}
                      strokeWidth={isExplored ? 4.5 : 2}
                      filter="url(#chalk-stroke)"
                    />
                  );
                })}

                {vertices.map((v, i) => {
                  const isSource = v.id === "A";
                  const isFrontier = v.id === "B" || v.id === "E" || v.id === "D";
                  const stroke = isSource ? theme.pivot : isFrontier ? theme.good : theme.chalkDim;
                  return (
                    <ChalkCircleNode
                      key={i}
                      x={v.x}
                      y={v.y}
                      r={R}
                      label={v.id}
                      stroke={stroke}
                      strokeWidth={isSource || isFrontier ? 4 : 2.5}
                      textColor={stroke}
                      fontSize={30}
                    />
                  );
                })}
              </svg>
              <div style={{ position: "absolute", bottom: 20, right: 30, fontFamily: fonts.mono, fontSize: 20, color: theme.good, fontWeight: 700 }}>
                BFS FRONTIER: Origin A → Targets {`{B, D, E}`}
              </div>
            </div>
          );
        }

        // State C: 8 vertices
        const R_C = 30;
        const v8 = [
          { id: "0", x: 180, y: 100 },
          { id: "1", x: 450, y: 80 },
          { id: "2", x: 720, y: 100 },
          { id: "3", x: 820, y: 260 },
          { id: "4", x: 680, y: 400 },
          { id: "5", x: 450, y: 420 },
          { id: "6", x: 220, y: 400 },
          { id: "7", x: 100, y: 260 },
        ];
        const e8 = [
          [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0],
          [0, 5], [1, 4], [2, 6], [3, 7]
        ];

        return (
          <div style={{ position: "relative", width: 950, height: 480 }}>
            <svg width={950} height={480} style={{ position: "absolute", inset: 0 }}>
              {e8.map(([u, v], i) => {
                const coords = getEdgeCoords(v8[u].x, v8[u].y, v8[v].x, v8[v].y, R_C, R_C);
                return (
                  <line
                    key={i}
                    x1={coords.x1}
                    y1={coords.y1}
                    x2={coords.x2}
                    y2={coords.y2}
                    stroke={theme.chalkText}
                    strokeWidth={2}
                    filter="url(#chalk-stroke)"
                  />
                );
              })}
              {v8.map((v, i) => (
                <ChalkCircleNode
                  key={i}
                  x={v.x}
                  y={v.y}
                  r={R_C}
                  label={v.id}
                  stroke={theme.cyan}
                  strokeWidth={2.5}
                  fontSize={24}
                />
              ))}
            </svg>
          </div>
        );
      }}
    </ProofShell>
  );
};

// =============================================================================
// 11 — UNION-FIND (DISJOINT SET)
// =============================================================================
export const Proof11UnionFind: React.FC = () => {
  return (
    <ProofShell
      structureNum="11"
      structureTitle="Union-Find"
      stateAName="Rooted Forest & Representatives"
      stateBName="Path Compression (find)"
      stateCName="Multi-Set Forest Hierarchy"
      rule="Edges point strictly UPWARD to representative roots. Edges terminate at circle perimeter."
    >
      {(state) => {
        const R = 38;
        if (state === "A") {
          // Set 1: Root 1 -> children 2, 3. Set 2: Root 4 -> child 5
          const set1Nodes = [
            { id: 1, x: 300, y: 120, isRoot: true },
            { id: 2, x: 180, y: 320, isRoot: false },
            { id: 3, x: 420, y: 320, isRoot: false },
          ];
          const set2Nodes = [
            { id: 4, x: 740, y: 120, isRoot: true },
            { id: 5, x: 740, y: 320, isRoot: false },
          ];

          return (
            <div style={{ position: "relative", width: 950, height: 460 }}>
              <svg width={950} height={460} style={{ position: "absolute", inset: 0 }}>
                {/* Set 1 upward arrows */}
                {[set1Nodes[1], set1Nodes[2]].map((c, i) => (
                  <ParametricArrow
                    key={i}
                    x1={c.x}
                    y1={c.y}
                    x2={set1Nodes[0].x}
                    y2={set1Nodes[0].y}
                    startRadius={R}
                    endRadius={R}
                    stroke={theme.cyan}
                    strokeWidth={3.5}
                    headLength={16}
                  />
                ))}

                {/* Set 2 upward arrow */}
                <ParametricArrow
                  x1={set2Nodes[1].x}
                  y1={set2Nodes[1].y}
                  x2={set2Nodes[0].x}
                  y2={set2Nodes[0].y}
                  startRadius={R}
                  endRadius={R}
                  stroke={theme.pivot}
                  strokeWidth={3.5}
                  headLength={16}
                />

                {/* Nodes */}
                {[...set1Nodes, ...set2Nodes].map((n, i) => (
                  <ChalkCircleNode
                    key={i}
                    x={n.x}
                    y={n.y}
                    r={R}
                    label={n.id}
                    stroke={n.isRoot ? theme.good : theme.chalkText}
                    strokeWidth={n.isRoot ? 4.5 : 3}
                    textColor={n.isRoot ? theme.good : theme.chalkText}
                    fontSize={30}
                  />
                ))}
              </svg>

              <div style={{ position: "absolute", left: 240, top: 40, fontFamily: fonts.mono, fontSize: 18, color: theme.good, fontWeight: 700 }}>
                ROOT [1]
              </div>
              <div style={{ position: "absolute", left: 680, top: 40, fontFamily: fonts.mono, fontSize: 18, color: theme.good, fontWeight: 700 }}>
                ROOT [4]
              </div>
            </div>
          );
        }

        if (state === "B") {
          // Path compression: 3 originally chained to 2 -> 1, now points directly to 1!
          const nodes = [
            { id: 1, x: 450, y: 100, isRoot: true },
            { id: 2, x: 260, y: 260, isRoot: false },
            { id: 3, x: 450, y: 400, isRoot: false },
          ];

          const compressed = getEdgeCoords(nodes[2].x, nodes[2].y, nodes[0].x, nodes[0].y, R, R);
          const childEdge = getEdgeCoords(nodes[1].x, nodes[1].y, nodes[0].x, nodes[0].y, R, R);

          return (
            <div style={{ position: "relative", width: 950, height: 480 }}>
              <svg width={950} height={480} style={{ position: "absolute", inset: 0 }}>
                {/* Preserved link 2 -> 1 */}
                <ParametricArrow
                  x1={nodes[1].x}
                  y1={nodes[1].y}
                  x2={nodes[0].x}
                  y2={nodes[0].y}
                  startRadius={R}
                  endRadius={R}
                  stroke={theme.chalkDim}
                  strokeWidth={2.5}
                  headLength={14}
                />

                {/* Direct compressed path 3 -> 1 */}
                <ParametricArrow
                  x1={nodes[2].x}
                  y1={nodes[2].y}
                  x2={nodes[0].x}
                  y2={nodes[0].y}
                  startRadius={R}
                  endRadius={R}
                  stroke={theme.good}
                  strokeWidth={4.5}
                  headLength={20}
                  headStyle="filled"
                />

                {nodes.map((n, i) => (
                  <ChalkCircleNode
                    key={i}
                    x={n.x}
                    y={n.y}
                    r={R}
                    label={n.id}
                    stroke={n.isRoot ? theme.good : n.id === 3 ? theme.pivot : theme.chalkText}
                    strokeWidth={3.5}
                    fontSize={30}
                  />
                ))}
              </svg>
              <div style={{ position: "absolute", bottom: 20, right: 40, fontFamily: fonts.mono, fontSize: 20, color: theme.good, fontWeight: 700 }}>
                PATH COMPRESSED: find(3) → parent[3] = 1 directly!
              </div>
            </div>
          );
        }

        // State C: Multi-set forest (12 items)
        const R_C = 28;
        const setA = [{ id: 1, x: 220, y: 80 }, { id: 2, x: 140, y: 220 }, { id: 3, x: 300, y: 220 }, { id: 4, x: 140, y: 360 }];
        const setB = [{ id: 5, x: 520, y: 80 }, { id: 6, x: 440, y: 220 }, { id: 7, x: 600, y: 220 }];
        const setC = [{ id: 8, x: 800, y: 80 }, { id: 9, x: 720, y: 220 }, { id: 10, x: 880, y: 220 }, { id: 11, x: 800, y: 360 }, { id: 12, x: 880, y: 360 }];

        const allSets = [setA, setB, setC];

        return (
          <div style={{ position: "relative", width: 1000, height: 460 }}>
            <svg width={1000} height={460} style={{ position: "absolute", inset: 0 }}>
              {allSets.map((s, si) => (
                <g key={si}>
                  {s.slice(1).map((child, ci) => {
                    const parent = s[0];
                    const coords = getEdgeCoords(child.x, child.y, parent.x, parent.y, R_C, R_C);
                    return (
                      <line
                        key={ci}
                        x1={coords.x1}
                        y1={coords.y1}
                        x2={coords.x2}
                        y2={coords.y2}
                        stroke={theme.cyan}
                        strokeWidth={2}
                        filter="url(#chalk-stroke)"
                      />
                    );
                  })}
                  {s.map((n, ni) => (
                    <ChalkCircleNode
                      key={ni}
                      x={n.x}
                      y={n.y}
                      r={R_C}
                      label={n.id}
                      stroke={ni === 0 ? theme.good : theme.chalkText}
                      strokeWidth={ni === 0 ? 3.5 : 2}
                      fontSize={20}
                    />
                  ))}
                </g>
              ))}
            </svg>
          </div>
        );
      }}
    </ProofShell>
  );
};

// =============================================================================
// 12 — TRIE
// =============================================================================
export const Proof12Trie: React.FC = () => {
  return (
    <ProofShell
      structureNum="12"
      structureTitle="Trie (Prefix Tree)"
      stateAName="Character Transition Edges & Terminal Marks"
      stateBName="Word Search Path ('cat')"
      stateCName="8-Word Multi-Way Branching"
      rule="Root represents empty string. Edges carry character labels. Terminals denote valid word ends."
    >
      {(state) => {
        const R = 32;
        // Words: "car", "cat", "do", "dog"
        const trieNodes = [
          { id: "root", x: 450, y: 60, term: false },
          { id: "c", x: 280, y: 170, term: false },
          { id: "d", x: 620, y: 170, term: false },
          { id: "a", x: 280, y: 280, term: false },
          { id: "o", x: 620, y: 280, term: true },
          { id: "r", x: 200, y: 390, term: true },
          { id: "t", x: 360, y: 390, term: true },
          { id: "g", x: 620, y: 390, term: true },
        ];

        const edges = [
          { from: trieNodes[0], to: trieNodes[1], char: "c" },
          { from: trieNodes[0], to: trieNodes[2], char: "d" },
          { from: trieNodes[1], to: trieNodes[3], char: "a" },
          { from: trieNodes[2], to: trieNodes[4], char: "o" },
          { from: trieNodes[3], to: trieNodes[5], char: "r" },
          { from: trieNodes[3], to: trieNodes[6], char: "t" },
          { from: trieNodes[4], to: trieNodes[7], char: "g" },
        ];

        if (state === "A") {
          return (
            <div style={{ position: "relative", width: 900, height: 480 }}>
              <svg width={900} height={480} style={{ position: "absolute", inset: 0 }}>
                {edges.map((e, i) => (
                  <ParametricArrow
                    key={i}
                    x1={e.from.x}
                    y1={e.from.y}
                    x2={e.to.x}
                    y2={e.to.y}
                    startRadius={R}
                    endRadius={R}
                    stroke={theme.chalkText}
                    strokeWidth={2.5}
                    headLength={14}
                    label={e.char}
                    labelColor={theme.cyan}
                    labelFontSize={20}
                  />
                ))}

                {trieNodes.map((n, i) => (
                  <RoughNode
                    key={i}
                    x={n.x}
                    y={n.y}
                    r={R}
                    label={n.id === "root" ? "∅" : n.id}
                    stroke={n.term ? theme.good : theme.chalkText}
                    strokeWidth={n.term ? 4 : 2.5}
                    textColor={n.term ? theme.good : theme.chalkText}
                    fontSize={26}
                    ring={n.term}
                    ringStroke={theme.good}
                  />
                ))}
              </svg>
            </div>
          );
        }

        if (state === "B") {
          // Search for "cat": root -> c -> a -> t (Target Hit)
          const activeEdges = ["c", "a", "t"];
          const activeNodes = ["root", "c", "a", "t"];

          return (
            <div style={{ position: "relative", width: 900, height: 480 }}>
              <svg width={900} height={480} style={{ position: "absolute", inset: 0 }}>
                {edges.map((e, i) => {
                  const isActive = activeEdges.includes(e.char) && (e.from.id === "root" || e.from.id === "c" || e.from.id === "a");

                  return (
                    <ParametricArrow
                      key={i}
                      x1={e.from.x}
                      y1={e.from.y}
                      x2={e.to.x}
                      y2={e.to.y}
                      startRadius={R}
                      endRadius={R}
                      stroke={isActive ? theme.good : theme.chalkDim}
                      strokeWidth={isActive ? 4.5 : 1.5}
                      headLength={14}
                      label={e.char}
                      labelColor={isActive ? theme.good : theme.chalkDim}
                      labelFontSize={20}
                    />
                  );
                })}

                {trieNodes.map((n, i) => {
                  const isActive = activeNodes.includes(n.id);
                  const isHit = n.id === "t";
                  const stroke = isHit ? theme.good : isActive ? theme.pivot : theme.chalkDim;

                  return (
                    <g key={i}>
                      <ChalkCircleNode
                        x={n.x}
                        y={n.y}
                        r={R}
                        label={n.id === "root" ? "∅" : n.id}
                        stroke={stroke}
                        strokeWidth={isActive ? 4 : 2}
                        textColor={stroke}
                        fontSize={26}
                      />
                      {n.term && (
                        <circle cx={n.x} cy={n.y} r={R + 6} fill="none" stroke={stroke} strokeWidth={2} strokeDasharray="4,4" />
                      )}
                    </g>
                  );
                })}
              </svg>
              <div style={{ position: "absolute", bottom: 20, right: 30, fontFamily: fonts.mono, fontSize: 20, color: theme.good, fontWeight: 700 }}>
                TRIE SEARCH(&quot;cat&quot;): ∅ → &apos;c&apos; → &apos;a&apos; → &apos;t&apos; [WORD MATCH]
              </div>
            </div>
          );
        }

        // State C: 8 words
        return (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            <div style={{ position: "relative", width: 950, height: 380 }}>
              <svg width={950} height={380} style={{ position: "absolute", inset: 0 }}>
                {[
                  { x: 475, y: 40, l: "∅" },
                  { x: 260, y: 140, l: "a" },
                  { x: 500, y: 140, l: "b" },
                  { x: 740, y: 140, l: "c" },
                  { x: 200, y: 240, l: "p" },
                  { x: 320, y: 240, l: "t" },
                  { x: 460, y: 240, l: "a" },
                  { x: 560, y: 240, l: "o" },
                  { x: 700, y: 240, l: "a" },
                  { x: 800, y: 240, l: "o" },
                  { x: 200, y: 340, l: "l" },
                  { x: 700, y: 340, l: "r" },
                ].map((n, i) => (
                  <ChalkCircleNode
                    key={i}
                    x={n.x}
                    y={n.y}
                    r={22}
                    label={n.l}
                    stroke={theme.cyan}
                    strokeWidth={2}
                    fontSize={18}
                  />
                ))}
              </svg>
            </div>
            <div style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkDim }}>
              8-WORD PREFIX TRIE: {`{"app", "apple", "apply", "bat", "ball", "bath", "car", "cat"}`}
            </div>
          </div>
        );
      }}
    </ProofShell>
  );
};
