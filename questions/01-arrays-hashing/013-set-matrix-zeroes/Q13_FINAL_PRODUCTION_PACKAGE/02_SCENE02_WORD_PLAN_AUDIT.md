# Q13 — Scene 02 · Understand + Dangerous Naive Idea
## WORD-BASED VISUAL PLAN AUDIT

### Verdict
**PASS AFTER REPAIR**

### Structural checks

```text
script order preserved                  YES
master values revealed only when spoken YES
zero-based indices delayed until spoken YES
future method spoiler                    NO
guessed seconds                          0
guessed frames                           0
center-stage lifecycle present           YES
cleanup/persistence explicit             YES
kit-only matrix grammar                  YES
```

### Senior semantic review

- The problem rule is separated from the master testcase, so the learner first understands the rule and then sees the exact input.
- The 5×5 master is populated row-by-row exactly in narration order.
- Original zeros are not visually classified until the script says there are three original zeros.
- The naive failure is concrete: `(0,2)` creates `(1,2)=0`; treating that created zero as original incorrectly zeros row1.
- The scene resets to the untouched master before deriving the preservation invariant.
- Method 1 is only named at the handoff; the copy itself remains hidden for Scene03.

### Issue found during audit

The first draft described `and another column` too generically. That was technically valid but weak for this course because it left the exact false propagation under-specified.

### Repair applied

Locked one concrete continuation:

```text
wrongly zero row1
→ created zero at (1,4)
→ later misclassified as a source
→ incorrectly zero column4
→ 25 at (4,4) is wrongly destroyed
```

This makes the cascade proof deterministic and visually teachable without rendering an endless wrong execution.

### No-spoiler audit

```text
Method1 copy             hidden
rowZero[] / colZero[]    hidden
first-row/col markers    hidden
firstRowZero             hidden
firstColZero             hidden
correct final matrix     hidden
complexity               hidden
```

### Final status

```text
SCENE 02 WORD PLAN = PASS / LOCKED
```
