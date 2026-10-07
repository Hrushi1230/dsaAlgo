# Q12 — Next Permutation (LC 31)
## Phase 8 — Script Verification Report

**Basis:** Final 10-scene script checked against the locked Phase 5 verified teaching trace and the agreed 2-method scene structure.

## Final Verdict

**STATUS: PASS AFTER CORRECTIONS**

The overall 10-scene teaching structure is strong and should remain unchanged.

No algorithm-state mismatch was found in the master trace:
- Master input: `[2,1,5,4,4,3,0]`
- Pivot: `i = 1`, value `1`
- Successor: `j = 5`, value `3`
- After swap: `[2,3,5,4,4,1,0]`
- Reverse range: indices `2..6`
- Final: `[2,3,0,1,4,4,5]`

## Corrections Applied

### 1. Scene 02 — Removed unnecessary repetition
The master array was spoken twice back-to-back. It is now introduced once.

### 2. Scene 05 — Added the missing space-constraint failure of brute force
Brute force does not only suffer from factorial growth; materializing many permutations also violates the constant-extra-space goal.

### 3. Scene 06 — Strengthened the reversal proof
Added the important fact that after swapping the pivot with the correct successor, the suffix remains non-increasing. Therefore reversing it produces the minimum possible suffix.

### 4. Scene 08 — Completed the code narration
The old narration said “reverse the suffix” but did not narrate the actual in-place reversal code. It now includes:
- `n`
- `i`
- `j`
- `left`
- `right`
- `while left < right`
- swap
- `left++`
- `right--`

This is required for the later character-by-character coder-style visual plan.

The no-pivot branch is also cleaner:
- `i = -1`
- pivot swap block is skipped
- `left = i + 1 = 0`
- the same reverse loop reverses the whole array

### 5. Scene 09 — Corrected brute-force complexity wording
The script now says that with `n` distinct values there can be `n!` permutations, and that generating/storing them is factorial-scale while sorting adds additional work. It does not claim an unsupported single exact Big-O for the specific brute-force implementation.

### 6. Scene 09 — Added already-increasing edge case
A concise `[1,2,3]` case is included without creating another full trace.

### 7. Scene 10 — Corrected an important wording error
Changed:
`smallest position where a change can be made`

to:
`rightmost position where a valid increase can be made`

The original phrase was algorithmically misleading.

## Verified Scene Roles

1. Roadmap resume — no solution spoiler.
2. Question understanding — defines permutation/next/in-place requirement.
3. Brute-force trace — teaches definition.
4. Brute-force code — implements Method 1.
5. Why brute force fails — derives the need to exploit current structure.
6. Optimal idea — derives pivot → successor → reverse with reasons.
7. Full optimal trace — exactly follows verified Phase 5 state transitions.
8. Optimal code — now complete enough for live character-by-character construction.
9. Complexity + mistakes + edge cases — explains `O(n)`, `O(1)`, strict comparisons and no-pivot behavior.
10. Recap + roadmap — summarizes reasoning and moves to Q13.

## Repetition Audit

**PASS**

Necessary repetition remains only where its purpose changes:
- Scene 06 derives the optimal idea.
- Scene 07 executes that idea.
- Scene 08 converts it into code.
- Scene 10 compresses it into recap.

This is pedagogically justified and is not script duplication.

## No-Spoiler Audit

**PASS**

- Scene 01: no algorithm mechanics.
- Scene 02: no pivot/successor/reverse solution.
- Scene 03: brute-force only.
- Scene 05: introduces only the direction of the better idea.
- Scene 06: first full optimal reasoning reveal.

## Trace Audit

**PASS — 0 mismatches**

Pivot checks:
- `3 < 0` false
- `4 < 3` false
- `4 < 4` false
- `5 < 4` false
- `1 < 5` true

Successor checks:
- `0 > 1` false
- `3 > 1` true

Reversal:
- `5 ↔ 0`
- `4 ↔ 1`

Final:
`[2,3,0,1,4,4,5]`

## Complexity Audit

**PASS**

Optimal:
- Pivot scan: at most linear
- Successor scan: at most linear
- Suffix reverse: at most linear
- Total: `O(n)`
- Extra space: `O(1)`

Brute force:
- factorial-scale number of candidate permutations in the distinct-value worst case
- additional memory is not constant

## Code-Scene Readiness

**PASS**

Scene 08 can now support the locked visual behavior:

`spoken code idea → active line types character-by-character → semantic effect → cleanup/reduce → next line`

Future lines can remain hidden without requiring unspoken code.

## Final Phase 8 Status

- Teaching correctness: PASS
- Master trace: PASS
- Method ordering: PASS
- No-spoiler progression: PASS
- Repetition control: PASS
- Code narration completeness: PASS
- Complexity explanation: PASS
- Edge-case coverage: PASS
- Roadmap continuation: PASS
- Algorithm mismatches: 0

**PHASE 8 — SCRIPT VERIFICATION: PASS**
