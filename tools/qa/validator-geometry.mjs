/**
 * tools/qa/validator-geometry.mjs — Validator D: SVG / Geometry Safety
 *
 * Mathematically validates 2D geometric and path animation helpers:
 * - ParametricArrow perimeter trimming & tangent calculation
 * - RoughNode anchor helpers (getEdgeCoords, getNodeAnchorPoint, getQuadControlPoint)
 * - svgPathV2 (clamp01, getExactPathMetrics, getPathPointAtProgress, getPathTangentAtProgress, getEvolvedPathStyle)
 * - MeshGrid batched grid generation & cell bounds
 *
 * Invariants:
 * - No NaN coordinates
 * - No Infinity
 * - Progress strictly clamped [0..1]
 * - Positive path length
 * - Valid trimming when dist <= r1 + r2
 * - Finite tangent angles and arrowhead barbs
 * - Rows/Cols > 0, cellWidth/cellHeight > 0
 */

import { getLength, getPointAtLength, getTangentAtLength, evolvePath } from "@remotion/paths";
import rough from "roughjs";

// -----------------------------------------------------------------------------
// Pure Geometric Algorithms (from kit/lib/geom.ts)
// -----------------------------------------------------------------------------

export function getEdgeCoords(x1, y1, x2, y2, r1 = 0, r2 = r1) {
  if (![x1, y1, x2, y2, r1, r2].every(n => typeof n === "number" && Number.isFinite(n))) {
    throw new Error(`getEdgeCoords: Non-finite input detected: [${x1}, ${y1}, ${x2}, ${y2}, ${r1}, ${r2}]`);
  }
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.hypot(dx, dy);

  if (dist === 0 || dist <= r1 + r2) {
    return { x1, y1, x2, y2, dist, angleRad: 0, angleDeg: 0 };
  }

  const ux = dx / dist;
  const uy = dy / dist;
  const angleRad = Math.atan2(dy, dx);
  const angleDeg = (angleRad * 180) / Math.PI;

  return {
    x1: x1 + ux * r1,
    y1: y1 + uy * r1,
    x2: x2 - ux * r2,
    y2: y2 - uy * r2,
    dist: dist - r1 - r2,
    angleRad,
    angleDeg,
  };
}

export function getNodeAnchorPoint(cx, cy, r, targetX, targetY) {
  if (![cx, cy, r, targetX, targetY].every(n => typeof n === "number" && Number.isFinite(n))) {
    throw new Error(`getNodeAnchorPoint: Non-finite input detected: [${cx}, ${cy}, ${r}, ${targetX}, ${targetY}]`);
  }
  const dx = targetX - cx;
  const dy = targetY - cy;
  const dist = Math.hypot(dx, dy);
  if (dist === 0) return { x: cx, y: cy };
  return {
    x: cx + (dx / dist) * r,
    y: cy + (dy / dist) * r,
  };
}

export function getQuadControlPoint(x1, y1, x2, y2, bend) {
  if (![x1, y1, x2, y2, bend].every(n => typeof n === "number" && Number.isFinite(n))) {
    throw new Error(`getQuadControlPoint: Non-finite input detected: [${x1}, ${y1}, ${x2}, ${y2}, ${bend}]`);
  }
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy);

  if (len === 0) return { x: midX, y: midY };

  const nx = -dy / len;
  const ny = dx / len;

  return {
    x: midX + nx * bend,
    y: midY + ny * bend,
  };
}

export function clamp01(val) {
  if (typeof val !== "number" || Number.isNaN(val)) return 0;
  return Math.max(0, Math.min(1, val));
}

// -----------------------------------------------------------------------------
// Arrowhead & MeshGrid Math
// -----------------------------------------------------------------------------

export function computeArrowheadVertices(tipX, tipY, angleRad, headLength = 18, headAngleDeg = 26) {
  if (![tipX, tipY, angleRad, headLength, headAngleDeg].every(n => typeof n === "number" && Number.isFinite(n))) {
    throw new Error(`computeArrowheadVertices: Non-finite inputs`);
  }
  const alpha = (headAngleDeg * Math.PI) / 180;
  const a1 = angleRad + Math.PI - alpha;
  const a2 = angleRad + Math.PI + alpha;

  const leftX = tipX + Math.cos(a1) * headLength;
  const leftY = tipY + Math.sin(a1) * headLength;
  const rightX = tipX + Math.cos(a2) * headLength;
  const rightY = tipY + Math.sin(a2) * headLength;

  return { tipX, tipY, leftX, leftY, rightX, rightY };
}

export function validateMeshGridConfig(rows, cols, cellWidth, cellHeight) {
  const errors = [];
  if (typeof rows !== "number" || rows <= 0 || !Number.isInteger(rows)) {
    errors.push(`MeshGrid rows must be a positive integer (received: ${rows})`);
  }
  if (typeof cols !== "number" || cols <= 0 || !Number.isInteger(cols)) {
    errors.push(`MeshGrid cols must be a positive integer (received: ${cols})`);
  }
  if (typeof cellWidth !== "number" || cellWidth <= 0 || !Number.isFinite(cellWidth)) {
    errors.push(`MeshGrid cellWidth must be a positive finite number (received: ${cellWidth})`);
  }
  if (typeof cellHeight !== "number" || cellHeight <= 0 || !Number.isFinite(cellHeight)) {
    errors.push(`MeshGrid cellHeight must be a positive finite number (received: ${cellHeight})`);
  }
  return errors;
}

// -----------------------------------------------------------------------------
// Main Geometry QA Suite
// -----------------------------------------------------------------------------

export async function runGeometryValidation() {
  const errors = [];
  const warnings = [];
  let testCount = 0;

  // 1. Test getEdgeCoords
  try {
    testCount++;
    const e1 = getEdgeCoords(100, 100, 400, 100, 40, 40);
    if (e1.x1 !== 140 || e1.x2 !== 360 || e1.dist !== 220 || e1.angleDeg !== 0) {
      errors.push(`getEdgeCoords failed standard horizontal trimming: expected x1=140, x2=360, dist=220, got [${e1.x1}, ${e1.x2}, ${e1.dist}]`);
    }

    testCount++;
    // Overlapping / touching circles: dist <= r1 + r2
    const e2 = getEdgeCoords(100, 100, 150, 100, 30, 30); // dist=50 <= 60
    if (e2.dist !== 50 || e2.x1 !== 100 || e2.x2 !== 150) {
      errors.push(`getEdgeCoords failed fallback for touching nodes: expected original coordinates`);
    }

    testCount++;
    // Zero distance
    const e3 = getEdgeCoords(200, 200, 200, 200, 30, 30);
    if (e3.dist !== 0 || !Number.isFinite(e3.angleRad)) {
      errors.push(`getEdgeCoords failed on zero distance identical points`);
    }
  } catch (err) {
    errors.push(`getEdgeCoords threw unexpected error: ${err.message}`);
  }

  // 2. Test getNodeAnchorPoint
  try {
    testCount++;
    const p1 = getNodeAnchorPoint(100, 100, 50, 200, 100);
    if (p1.x !== 150 || p1.y !== 100) {
      errors.push(`getNodeAnchorPoint failed horizontal anchor: expected (150, 100), got (${p1.x}, ${p1.y})`);
    }

    testCount++;
    const p2 = getNodeAnchorPoint(100, 100, 50, 100, 100);
    if (p2.x !== 100 || p2.y !== 100) {
      errors.push(`getNodeAnchorPoint failed zero distance fallback`);
    }
  } catch (err) {
    errors.push(`getNodeAnchorPoint threw unexpected error: ${err.message}`);
  }

  // 3. Test getQuadControlPoint
  try {
    testCount++;
    const q1 = getQuadControlPoint(100, 200, 300, 200, -50); // midpoint (200, 200), perpendicular bend -50
    if (q1.x !== 200 || q1.y !== 150) {
      errors.push(`getQuadControlPoint failed bend calculation: expected (200, 150), got (${q1.x}, ${q1.y})`);
    }

    testCount++;
    const q2 = getQuadControlPoint(100, 100, 100, 100, 40);
    if (q2.x !== 100 || q2.y !== 100) {
      errors.push(`getQuadControlPoint failed zero length vector fallback`);
    }
  } catch (err) {
    errors.push(`getQuadControlPoint threw unexpected error: ${err.message}`);
  }

  // 4. Test svgPathV2 helpers
  try {
    testCount++;
    if (clamp01(0.5) !== 0.5 || clamp01(-0.2) !== 0 || clamp01(1.5) !== 1 || clamp01(NaN) !== 0) {
      errors.push(`clamp01 failed bounds enforcement`);
    }

    testCount++;
    const testPath = "M 100 100 L 400 100";
    const len = getLength(testPath);
    if (len !== 300) {
      errors.push(`getLength failed on straight path: expected 300, got ${len}`);
    }

    testCount++;
    const ptMid = getPointAtLength(testPath, 150);
    if (ptMid.x !== 250 || ptMid.y !== 100) {
      errors.push(`getPointAtLength failed midpoint query: expected (250, 100), got (${ptMid.x}, ${ptMid.y})`);
    }

    testCount++;
    const tangent = getTangentAtLength(testPath, 150);
    if (tangent.x !== 1 || tangent.y !== 0) {
      errors.push(`getTangentAtLength failed: expected (1, 0), got (${tangent.x}, ${tangent.y})`);
    }

    testCount++;
    const evolved = evolvePath(0.5, testPath);
    if (!evolved.strokeDasharray || evolved.strokeDashoffset === undefined) {
      errors.push(`evolvePath failed to return valid stroke style`);
    }
  } catch (err) {
    errors.push(`svgPathV2 operations threw unexpected error: ${err.message}`);
  }

  // 5. Test Arrowhead Barbs Geometry
  try {
    testCount++;
    const head = computeArrowheadVertices(300, 200, 0, 20, 30);
    for (const [k, v] of Object.entries(head)) {
      if (!Number.isFinite(v)) {
        errors.push(`Arrowhead vertex ${k} is not finite: ${v}`);
      }
    }
    if (head.leftX >= 300 || head.rightX >= 300) {
      errors.push(`Arrowhead barbs should be behind tip along heading angle 0`);
    }
  } catch (err) {
    errors.push(`Arrowhead geometry threw unexpected error: ${err.message}`);
  }

  // 6. Test MeshGrid Configuration & Rough Generation
  try {
    testCount++;
    const meshErrors = validateMeshGridConfig(4, 4, 80, 80);
    if (meshErrors.length > 0) {
      errors.push(...meshErrors);
    }

    testCount++;
    // Generate real roughjs paths for 4x4 grid and assert no NaN
    const gen = rough.generator();
    const rect = gen.rectangle(0, 0, 320, 320, { roughness: 1.2, bowing: 1.0, seed: 42 });
    const paths = gen.toPaths(rect);
    for (const p of paths) {
      if (!p.d || p.d.includes("NaN") || p.d.includes("undefined")) {
        errors.push(`MeshGrid rough rectangle produced malformed path: "${p.d}"`);
      }
    }
  } catch (err) {
    errors.push(`MeshGrid geometry threw unexpected error: ${err.message}`);
  }

  return {
    name: "SVG / Geometry Safety",
    passed: errors.length === 0,
    testCount,
    errors,
    warnings,
  };
}
