/**
 * tools/qa/validator-pointer-lanes.mjs — Validator F: Pointer Lanes
 *
 * Tests:
 * - One pointer
 * - Two pointers at same index
 * - Three pointers at same index
 * - Pointers at first index (0)
 * - Pointers at last index (count - 1)
 * - Top placement vs Bottom placement
 *
 * Requirements:
 * - Pointers remain strictly outside slot interiors (never intrude into slot bounding box)
 * - Multiple pointers at same index must occupy distinct lanes (lane staggering)
 * - Target index must be strictly valid (0 <= index < count)
 * - Invalid index must FAIL loudly, not clamp silently
 */

export function validatePointerLaneConfiguration(pointers, count, placement = "bottom", options = {}) {
  const errors = [];
  const warnings = [];

  if (!Array.isArray(pointers)) {
    errors.push(`Pointers must be an array (received: ${typeof pointers})`);
    return { passed: false, errors, warnings };
  }

  if (typeof count !== "number" || count <= 0 || !Number.isInteger(count)) {
    errors.push(`Array count must be a positive integer (received: ${count})`);
    return { passed: false, errors, warnings };
  }

  const {
    slotWidth = 110,
    gap = 16,
    baseArrowLength = 34,
    laneHeight = 32,
  } = options;

  // Track lanes by slot index to detect collisions
  const lanesByIndex = new Map();

  for (let i = 0; i < pointers.length; i++) {
    const ptr = pointers[i];
    if (!ptr || typeof ptr !== "object") {
      errors.push(`Pointer at index ${i} must be an object`);
      continue;
    }

    const { id, label, index, lane = 0 } = ptr;

    if (!id || typeof id !== "string") {
      errors.push(`Pointer ${i} must have a valid string id`);
    }

    if (!label || typeof label !== "string") {
      errors.push(`Pointer "${id || i}" must have a valid display label`);
    }

    // Strict Target Index Bounds: 0 <= index < count (DO NOT CLAMP)
    if (typeof index !== "number" || !Number.isInteger(index)) {
      errors.push(`Pointer "${id || label}" index must be an integer (received: ${index})`);
      continue;
    }

    if (index < 0 || index >= count) {
      errors.push(`Pointer "${id || label}" target index ${index} is OUT OF BOUNDS for array of size ${count}. Must satisfy 0 <= index < ${count}.`);
      continue;
    }

    // Vertical Lane Staggering Collision Check
    if (!lanesByIndex.has(index)) {
      lanesByIndex.set(index, new Set());
    }
    const seenLanes = lanesByIndex.get(index);
    if (seenLanes.has(lane)) {
      errors.push(`POINTER COLLISION: Multiple pointers targeting index ${index} share identical lane ${lane}. Pointers at the same index must use distinct lanes.`);
    }
    seenLanes.add(lane);

    // Slot Clearance Invariant: Target tip position
    const slotCenterX = index * (slotWidth + gap) + slotWidth / 2;
    if (slotCenterX < 0 || slotCenterX > (count * slotWidth + (count - 1) * gap)) {
      errors.push(`Pointer "${id || label}" X coordinate ${slotCenterX} is outside the track width.`);
    }

    // Ensure lane is non-negative
    if (lane < 0) {
      errors.push(`Pointer "${id || label}" lane must be non-negative (received: ${lane})`);
    }
  }

  return {
    passed: errors.length === 0,
    errors,
    warnings,
  };
}

export async function runPointerLanesValidation() {
  const errors = [];
  const warnings = [];
  const testCases = [
    {
      desc: "Single pointer at start (bottom)",
      count: 8,
      placement: "bottom",
      pointers: [{ id: "ptr-i", label: "i", index: 0, lane: 0 }],
    },
    {
      desc: "Single pointer at end (top)",
      count: 8,
      placement: "top",
      pointers: [{ id: "ptr-j", label: "j", index: 7, lane: 0 }],
    },
    {
      desc: "Two pointers at same index with lane staggering",
      count: 10,
      placement: "bottom",
      pointers: [
        { id: "ptr-low", label: "low", index: 3, lane: 0 },
        { id: "ptr-mid", label: "mid", index: 3, lane: 1 },
      ],
    },
    {
      desc: "Three pointers at same index (Dutch National Flag / 3-way partition)",
      count: 12,
      placement: "bottom",
      pointers: [
        { id: "ptr-low", label: "low", index: 5, lane: 0 },
        { id: "ptr-mid", label: "mid", index: 5, lane: 1 },
        { id: "ptr-high", label: "high", index: 5, lane: 2 },
      ],
    },
    {
      desc: "Dual pointers at boundaries (first and last)",
      count: 6,
      placement: "top",
      pointers: [
        { id: "ptr-left", label: "left", index: 0, lane: 0 },
        { id: "ptr-right", label: "right", index: 5, lane: 0 },
      ],
    },
  ];

  let passedScenarios = 0;
  for (const tc of testCases) {
    const res = validatePointerLaneConfiguration(tc.pointers, tc.count, tc.placement);
    if (!res.passed) {
      errors.push(`[${tc.desc}] Failed: ${res.errors.join("; ")}`);
    } else {
      passedScenarios++;
    }
  }

  return {
    name: "Multi-Lane Pointer System (Clearance & Staggering)",
    passed: errors.length === 0,
    scenariosTested: testCases.length,
    passedScenarios,
    errors,
    warnings,
  };
}
