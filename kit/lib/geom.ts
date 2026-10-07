/**
 * Foundation V2 — Geometric & Node Anchor Utilities
 *
 * Provides deterministic 2D geometric calculations for data structure visualization:
 * 1. Perimeter trimming between circular nodes (getEdgeCoords)
 * 2. Directional anchor calculation from center to perimeter (getNodeAnchorPoint)
 * 3. Tangent and arrowhead vector math for straight and curved connector paths
 */

export interface Point2D {
  x: number;
  y: number;
}

export interface EdgeCoords {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  dist: number;
  angleRad: number;
  angleDeg: number;
}

/**
 * Calculates edge endpoints that terminate precisely at node circle circumferences.
 * Prevents connector lines, arrows, and edges from entering circle interiors.
 *
 * @param x1 Center X of start node
 * @param y1 Center Y of start node
 * @param x2 Center X of end node
 * @param y2 Center Y of end node
 * @param r1 Radius of start node (default 0)
 * @param r2 Radius of end node (default r1)
 */
export function getEdgeCoords(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  r1: number = 0,
  r2: number = r1
): EdgeCoords {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.hypot(dx, dy);

  if (dist === 0 || dist <= r1 + r2) {
    return {
      x1,
      y1,
      x2,
      y2,
      dist,
      angleRad: 0,
      angleDeg: 0,
    };
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

/**
 * Get a single anchor point on the circumference of a node circle pointing towards a target.
 */
export function getNodeAnchorPoint(
  cx: number,
  cy: number,
  r: number,
  targetX: number,
  targetY: number
): Point2D {
  const dx = targetX - cx;
  const dy = targetY - cy;
  const dist = Math.hypot(dx, dy);
  if (dist === 0) return { x: cx, y: cy };
  return {
    x: cx + (dx / dist) * r,
    y: cy + (dy / dist) * r,
  };
}

/**
 * Calculate quadratic bezier control point given start, end, and perpendicular bend offset.
 *
 * @param x1 Start X
 * @param y1 Start Y
 * @param x2 End X
 * @param y2 End Y
 * @param bend Perpendicular distance in pixels (+ is to the right of vector, - is to the left)
 */
export function getQuadControlPoint(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  bend: number
): Point2D {
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy);

  if (len === 0) return { x: midX, y: midY };

  // Normal vector perpendicular to (dx, dy)
  const nx = -dy / len;
  const ny = dx / len;

  return {
    x: midX + nx * bend,
    y: midY + ny * bend,
  };
}
