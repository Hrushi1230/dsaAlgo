# Phase 05 — Exact Verified Traces: Three Methods

**Master:** `nums = [3, 4, -1, 1, 1, 10, 0, 2]`; `n=8`; **all three answers = 5**.

## Trace A — Brute repeated candidate search

Complete actual inner-loop comparisons; one row = one comparison. The source array never mutates.

| Step ID | Candidate | Index | Value | Equals candidate? | Next action |
|---|---:|---:|---:|---|---|
| BR-001 | 1 | 0 | 3 | NO | continue rightward |
| BR-002 | 1 | 1 | 4 | NO | continue rightward |
| BR-003 | 1 | 2 | -1 | NO | continue rightward |
| BR-004 | 1 | 3 | 1 | YES | stop search for this candidate |
| BR-005 | 2 | 0 | 3 | NO | continue rightward |
| BR-006 | 2 | 1 | 4 | NO | continue rightward |
| BR-007 | 2 | 2 | -1 | NO | continue rightward |
| BR-008 | 2 | 3 | 1 | NO | continue rightward |
| BR-009 | 2 | 4 | 1 | NO | continue rightward |
| BR-010 | 2 | 5 | 10 | NO | continue rightward |
| BR-011 | 2 | 6 | 0 | NO | continue rightward |
| BR-012 | 2 | 7 | 2 | YES | stop search for this candidate |
| BR-013 | 3 | 0 | 3 | YES | stop search for this candidate |
| BR-014 | 4 | 0 | 3 | NO | continue rightward |
| BR-015 | 4 | 1 | 4 | YES | stop search for this candidate |
| BR-016 | 5 | 0 | 3 | NO | continue rightward |
| BR-017 | 5 | 1 | 4 | NO | continue rightward |
| BR-018 | 5 | 2 | -1 | NO | continue rightward |
| BR-019 | 5 | 3 | 1 | NO | continue rightward |
| BR-020 | 5 | 4 | 1 | NO | continue rightward |
| BR-021 | 5 | 5 | 10 | NO | continue rightward |
| BR-022 | 5 | 6 | 0 | NO | continue rightward |
| BR-023 | 5 | 7 | 2 | NO | continue rightward |

**Compared:** 23 values. Breakdown: 1 → 4, 2 → 8, 3 → 1, 4 → 2, 5 → 8. Candidate 5 fails after scanning all 8 positions; return 5.

## Trace B — HashSet, in input order

**Important:** This is insertion/lookup chronological order, **not** any claimed HashSet storage order.

| Step ID | Operation | Input position / Candidate | Value | Result | Set before → after |
|---|---|---|---:|---|---|
| SET-001 | insert | input index 0 | 3 | added | `[]` → `[3]` |
| SET-002 | insert | input index 1 | 4 | added | `[3]` → `[3, 4]` |
| SET-003 | insert | input index 2 | -1 | added | `[3, 4]` → `[-1, 3, 4]` |
| SET-004 | insert | input index 3 | 1 | added | `[-1, 3, 4]` → `[-1, 1, 3, 4]` |
| SET-005 | insert | input index 4 | 1 | duplicate / unchanged | `[-1, 1, 3, 4]` → `[-1, 1, 3, 4]` |
| SET-006 | insert | input index 5 | 10 | added | `[-1, 1, 3, 4]` → `[-1, 1, 3, 4, 10]` |
| SET-007 | insert | input index 6 | 0 | added | `[-1, 1, 3, 4, 10]` → `[-1, 0, 1, 3, 4, 10]` |
| SET-008 | insert | input index 7 | 2 | added | `[-1, 0, 1, 3, 4, 10]` → `[-1, 0, 1, 2, 3, 4, 10]` |
| SET-009 | membership | candidate 1 | 1 | PRESENT | unchanged |
| SET-010 | membership | candidate 2 | 2 | PRESENT | unchanged |
| SET-011 | membership | candidate 3 | 3 | PRESENT | unchanged |
| SET-012 | membership | candidate 4 | 4 | PRESENT | unchanged |
| SET-013 | membership | candidate 5 | 5 | MISSING → RETURN | unchanged |

**Insertion attempts:** 8. **Distinct values:** 7. **Candidate probes:** 5. Return 5.

## Trace C — Cyclic in-place placement

Guard: `1 <= nums[i] <= n and nums[i] != nums[nums[i] - 1]`. A *successful* swap sets its target slot to its correct value.

| Step ID | Operation | i / scan index | What happens | State after / check |
|---|---|---:|---|---|
| OPT-001 | enter | 0 | read current `3` | `[3, 4, -1, 1, 1, 10, 0, 2]` |
| OPT-002 | SWAP | 0 | move `3` to its home `2`, receive `-1` | `[-1, 4, 3, 1, 1, 10, 0, 2]` |
| OPT-003 | guard stops | 0 | current `-1`; reason `out_of_range` | `[-1, 4, 3, 1, 1, 10, 0, 2]` |
| OPT-004 | enter | 1 | read current `4` | `[-1, 4, 3, 1, 1, 10, 0, 2]` |
| OPT-005 | SWAP | 1 | move `4` to its home `3`, receive `1` | `[-1, 1, 3, 4, 1, 10, 0, 2]` |
| OPT-006 | SWAP | 1 | move `1` to its home `0`, receive `-1` | `[1, -1, 3, 4, 1, 10, 0, 2]` |
| OPT-007 | guard stops | 1 | current `-1`; reason `out_of_range` | `[1, -1, 3, 4, 1, 10, 0, 2]` |
| OPT-008 | enter | 2 | read current `3` | `[1, -1, 3, 4, 1, 10, 0, 2]` |
| OPT-009 | guard stops | 2 | current `3`; reason `already_home` | `[1, -1, 3, 4, 1, 10, 0, 2]` |
| OPT-010 | enter | 3 | read current `4` | `[1, -1, 3, 4, 1, 10, 0, 2]` |
| OPT-011 | guard stops | 3 | current `4`; reason `already_home` | `[1, -1, 3, 4, 1, 10, 0, 2]` |
| OPT-012 | enter | 4 | read current `1` | `[1, -1, 3, 4, 1, 10, 0, 2]` |
| OPT-013 | guard stops | 4 | current `1`; reason `duplicate_home_occupied` | `[1, -1, 3, 4, 1, 10, 0, 2]` |
| OPT-014 | enter | 5 | read current `10` | `[1, -1, 3, 4, 1, 10, 0, 2]` |
| OPT-015 | guard stops | 5 | current `10`; reason `out_of_range` | `[1, -1, 3, 4, 1, 10, 0, 2]` |
| OPT-016 | enter | 6 | read current `0` | `[1, -1, 3, 4, 1, 10, 0, 2]` |
| OPT-017 | guard stops | 6 | current `0`; reason `out_of_range` | `[1, -1, 3, 4, 1, 10, 0, 2]` |
| OPT-018 | enter | 7 | read current `2` | `[1, -1, 3, 4, 1, 10, 0, 2]` |
| OPT-019 | SWAP | 7 | move `2` to its home `1`, receive `-1` | `[1, 2, 3, 4, 1, 10, 0, -1]` |
| OPT-020 | guard stops | 7 | current `-1`; reason `out_of_range` | `[1, 2, 3, 4, 1, 10, 0, -1]` |
| OPT-021 | final scan | 0 | expect `1`, actual `1` | match |
| OPT-022 | final scan | 1 | expect `2`, actual `2` | match |
| OPT-023 | final scan | 2 | expect `3`, actual `3` | match |
| OPT-024 | final scan | 3 | expect `4`, actual `4` | match |
| OPT-025 | final scan | 4 | expect `5`, actual `1` | FIRST MISMATCH → RETURN 5 |

**Successful swaps:** 4. Final mutated input `[1, 2, 3, 4, 1, 10, 0, -1]`. First mismatch at index 4 (`actual 1`, `expected 5`); return 5.

## Independent verification evidence

- First pass: three separately implemented solutions logged every comparison, insert/probe, pointer, swap, guard stop and final scan.
- Independent second pass: a **while-index** in-place algorithm (not the for-with-inner-while code) was executed from the initial master array. Returned value, swapped indices, all intermediate post-swap arrays, and final scan decisions matched exactly.
- Independent oracle: direct mathematical membership test.
- Exhaustive arrays of lengths 1 through 6 over `[-1,0,1,2,3,4]`: **55,986** cases, all four implementations matched.
- Seeded randomized nonempty arrays: **2,000** cases, all implementations matched.
- The exhaustive/random tests are **not narration examples** and do not change the single master input.

## Verification footer

```text
VERIFIED: YES
IMPLEMENTATION/ALGORITHM VERSION: Q18 restart v1 (brute/HashSet/cyclic in 07_CODE_TARGETS_NOT_SPOKEN.py)
MASTER TESTCASE: [3, 4, -1, 1, 1, 10, 0, 2]
FINAL OUTPUT: 5
RECHECK RESULT: MATCH
```

## Phase-05 audit → fix → re-audit

- Audit step identity and every mutation against the machine-readable JSON. Independently regenerated positions and swaps without reading the first implementation’s trace.
- Correctness/safety checks: repeated one at input index 4 must stop; invalid -1,0,10 never address `nums[x-1]`; first mismatch at index 4 returns 5.
- Re-audit: all trace records agree with executable code and independent implementation. **PASS**.
