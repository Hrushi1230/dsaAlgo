# Q13 — Set Matrix Zeroes
# Script Verification V2

## Why V2 was required

The second independent audit found that the old Scene03 narration traced a different full-copy organization from the code in Scene04.

Old trace:
```text
working cell
→ inspect original row / column
→ decide that working cell
```

Actual Scene04 code:
```text
scan immutable original
→ when original[r][c] == 0
→ zero working row r
→ zero working column c
```

Both are correct algorithms, but the course rule requires:

```text
TRACE
→ SAME ALGORITHM
→ CODE
```

So Scene03 narration was rewritten.

## V2 Method1 lock

```text
SOURCE (0,2)
→ working row0 zero
→ working col2 zero

SOURCE (2,0)
→ working row2 zero
→ working col0 zero

SOURCE (3,3)
→ working row3 zero
→ working col3 zero
```

The immutable source copy is never modified.

## V2 code consistency

Scene03, Scene04, and Scene12 now all refer to the same baseline implementation:

```text
Time  = O(mn + z(m+n))
Worst = O(mn(m+n))
Space = O(mn)
```

## Method2 / Method3

No algorithm change was required.

Independent randomized QA across 1×1, single-row, single-column, rectangular, and square matrices passed for all three code targets.

## Final status

```text
SCRIPT V2 = PASS
TRACE→CODE CONSISTENCY = PASS
MASTER RESULT = PASS
```
