# Q12 — Scene 05 · Why Brute Force Fails
## WORD-BASED VISUAL PLAN AUDIT

### Verdict
**PASS**

### Automated / structural checks

```text
anchors declared                   = 20
anchor IDs unique                  = YES
guessed seconds before sync        = 0
guessed frame numbers before sync  = 0
generic array replacement allowed  = NO
future-state spoiler allowed       = NO
semantic cleanup required          = YES
full sync→frame contract present   = YES
```

### Scene-specific review

- Factorial count is introduced only when narration says `n factorial`.
- Only exact concrete count `3! = 6` is used; no invented 4!/5! values.
- Storage failure is tied to the O(1) extra-space requirement.
- Master array re-enters only after brute-force visuals clear.
- Earlier-position hypothesis changes emphasis only, not data.
- Right-to-left clue is derived without revealing the pivot index.
- Graph plan requires reusable kit-level extension, not a scene-local factorial chart.

### Issues found

- None.

### Recreate / repair rule

If this audit is `FAIL`, the plan must be corrected or recreated before the next scene is planned.  
Do not carry a known omission forward.

### Final status

```text
SCENE 05 WORD PLAN = PASS
```
