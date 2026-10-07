/**
 * tools/qa/validator-partition-bounds.mjs — Validator G: Partition Bounds & Disjoint Intervals
 *
 * Validates:
 * - 0 <= startIndex <= endIndex < count
 * - Supports documented empty range flag if present
 * - Tests: one region, adjacent regions, full array, shrinking/expanding range, DNF 4-region set
 * - Detects inadvertent overlapping semantic regions unless allowOverlap is explicitly configured
 */

export function validatePartitions(partitions, count, options = {}) {
  const errors = [];
  const warnings = [];
  const { allowOverlap = false } = options;

  if (!Array.isArray(partitions)) {
    errors.push(`Partitions must be an array (received: ${typeof partitions})`);
    return { passed: false, errors, warnings };
  }

  if (typeof count !== "number" || count <= 0 || !Number.isInteger(count)) {
    errors.push(`Array count must be a positive integer (received: ${count})`);
    return { passed: false, errors, warnings };
  }

  const sortedIntervals = [];

  for (let i = 0; i < partitions.length; i++) {
    const part = partitions[i];
    if (!part || typeof part !== "object") {
      errors.push(`Partition at index ${i} must be an object`);
      continue;
    }

    const { id, startIndex, endIndex, label, empty = false } = part;

    if (!id || typeof id !== "string") {
      errors.push(`Partition at index ${i} must have a valid string id`);
    }

    // Check empty range representation
    if (empty) {
      // Empty ranges are allowed if explicitly flagged
      continue;
    }

    if (typeof startIndex !== "number" || !Number.isInteger(startIndex)) {
      errors.push(`Partition "${id || label || i}" startIndex must be an integer (got: ${startIndex})`);
      continue;
    }

    if (typeof endIndex !== "number" || !Number.isInteger(endIndex)) {
      errors.push(`Partition "${id || label || i}" endIndex must be an integer (got: ${endIndex})`);
      continue;
    }

    // Boundary check: 0 <= startIndex <= endIndex < count
    if (startIndex < 0) {
      errors.push(`Partition "${id || label}" startIndex (${startIndex}) cannot be negative.`);
    }

    if (endIndex < startIndex) {
      errors.push(`Partition "${id || label}" endIndex (${endIndex}) cannot be less than startIndex (${startIndex}).`);
    }

    if (endIndex >= count) {
      errors.push(`Partition "${id || label}" endIndex (${endIndex}) is OUT OF BOUNDS for array of size ${count} (max valid index: ${count - 1}).`);
    }

    if (startIndex >= 0 && endIndex >= startIndex && endIndex < count) {
      sortedIntervals.push({ id: id || label || String(i), start: startIndex, end: endIndex });
    }
  }

  // Check for inadvertent overlapping intervals (unless explicitly allowed)
  if (!allowOverlap && sortedIntervals.length > 1) {
    sortedIntervals.sort((a, b) => a.start - b.start || a.end - b.end);
    for (let i = 0; i < sortedIntervals.length - 1; i++) {
      const cur = sortedIntervals[i];
      const nxt = sortedIntervals[i + 1];
      if (cur.end >= nxt.start) {
        errors.push(`OVERLAPPING PARTITIONS: Partition "${cur.id}" [${cur.start}..${cur.end}] overlaps with "${nxt.id}" [${nxt.start}..${nxt.end}]. Course partitions must be strictly disjoint unless allowOverlap is enabled.`);
      }
    }
  }

  return {
    passed: errors.length === 0,
    errors,
    warnings,
  };
}

export async function runPartitionBoundsValidation() {
  const errors = [];
  const warnings = [];
  const testCases = [
    {
      desc: "Single region (sub-array)",
      count: 10,
      partitions: [{ id: "window", startIndex: 2, endIndex: 5, label: "SLIDING WINDOW" }],
    },
    {
      desc: "Two adjacent disjoint regions",
      count: 8,
      partitions: [
        { id: "p1", startIndex: 0, endIndex: 3, label: "LEFT" },
        { id: "p2", startIndex: 4, endIndex: 7, label: "RIGHT" },
      ],
    },
    {
      desc: "Full array partition span",
      count: 12,
      partitions: [{ id: "all", startIndex: 0, endIndex: 11, label: "FULL SPAN" }],
    },
    {
      desc: "Dutch National Flag (DNF) 4-region partition: 0s, 1s, unknown, 2s",
      count: 12,
      partitions: [
        { id: "p0", startIndex: 0, endIndex: 2, label: "CONFIRMED 0s" },
        { id: "p1", startIndex: 3, endIndex: 5, label: "CONFIRMED 1s" },
        { id: "unk", startIndex: 6, endIndex: 9, label: "UNKNOWN REGION" },
        { id: "p2", startIndex: 10, endIndex: 11, label: "CONFIRMED 2s" },
      ],
    },
    {
      desc: "Shrinking / expanding ranges over steps",
      count: 8,
      partitions: [
        { id: "search-step1", startIndex: 0, endIndex: 7 },
      ],
    },
  ];

  let passedCases = 0;
  for (const tc of testCases) {
    const res = validatePartitions(tc.partitions, tc.count);
    if (!res.passed) {
      errors.push(`[${tc.desc}] Failed: ${res.errors.join("; ")}`);
    } else {
      passedCases++;
    }
  }

  return {
    name: "Partition Bounds & Disjoint Interval Integrity",
    passed: errors.length === 0,
    casesTested: testCases.length,
    passedCases,
    errors,
    warnings,
  };
}
