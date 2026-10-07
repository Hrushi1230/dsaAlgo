# Q12 — Scene 03 · Brute Force Trace
## WORD-BASED VISUAL PLAN AUDIT

### Verdict
**PASS**

### Automated / structural checks

```text
anchors declared                   = 28
anchor IDs unique                  = YES
guessed seconds before sync        = 0
guessed frame numbers before sync  = 0
generic array replacement allowed  = NO
future-state spoiler allowed       = NO
semantic cleanup required          = YES
full sync→frame contract present   = YES
```

### Scene-specific review

- All six spoken permutations are represented in exact lexicographic order.
- Only current/needed neighboring permutations remain strong; no six-card dashboard.
- Current `[1,3,2]` and next `[2,1,3]` adjacency is explicit.
- Wraparound reuses spoken FIRST/LAST entries and does not teach reversal.
- `n!` is intentionally withheld until Scene05.
- Scene hands to an empty production code surface.

### Issues found

- None.

### Recreate / repair rule

If this audit is `FAIL`, the plan must be corrected or recreated before the next scene is planned.  
Do not carry a known omission forward.

### Final status

```text
SCENE 03 WORD PLAN = PASS
```
