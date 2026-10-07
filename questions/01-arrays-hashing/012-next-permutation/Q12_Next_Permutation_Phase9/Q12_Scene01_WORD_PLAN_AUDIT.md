# Q12 — Scene 01 Word-Based Visual Plan
## Review / Audit

### Verdict
**PASS**

### What was checked

1. **Narration coverage**
   - All 12 spoken semantic beats from the verified Scene 01 script have explicit anchors.
   - No narration phrase is silently ignored.

2. **Continuity**
   - Starts from Q11 final truth:
     - `11 / 227 COMPLETE`
     - Q011 COMPLETE
     - Q012 UP NEXT
     - rail 012
   - Does not replay Q11 completion or rail movement.
   - Activates Q012 only on `Question twelve`.

3. **No spoiler**
   - No permutation definition.
   - No master array.
   - No lexicographical example.
   - No brute force.
   - No pivot/successor/reversal.
   - No code or complexity.

4. **Center-stage rule**
   - Only the currently spoken roadmap subject receives strong focus.
   - Prior emphasis is reduced before the next subject becomes hero.

5. **Visual lifecycle**
   - Every beat has enter/current focus, job, cleanup/reduction, and persistence.

6. **Kit-only rule**
   - Permanent roadmap UI reused.
   - Existing ProblemOpenerShell reused.
   - No generic cards or new roadmap components.

7. **Motion-purpose rule**
   - All planned motion is for attention, confirmation, state mutation, or semantic continuity.
   - Decorative motion: zero.

8. **No guessing**
   - No seconds.
   - No frames.
   - No pixel coordinates.
   - No invented import paths.

9. **Antigravity exact-sync conversion**
   - Full conversion contract embedded inside the scene plan.
   - Explicitly forbids dropping or merging semantic beats.
   - Stable word IDs required.
   - Exact word JSON → anchor → seconds → exact frames.
   - Raw sync immutable.
   - End-exclusive frame convention required.
   - Actual repo geometry required.
   - Same sync drives captions.
   - Missing/ambiguous source blocks the scene instead of guessing.

### Important implementation checkpoint

Before Scene 01 frame planning, Antigravity must inspect the actual final Q11 Scene 10 render/implementation. If it is not already:

```text
11 / 227 COMPLETE
Q011 COMPLETE
Q012 UP NEXT
rail 012
```

the frame-planning loop must stop and report the regression.

### Final status

```text
SCENE 01 WORD PLAN              PASS
NARRATION COVERAGE              PASS
SEMANTIC CONTINUITY             PASS
ROADMAP TRUTH                   PASS
KIT REUSE                       PASS
NO SPOILER                      PASS
NO DECORATIVE MOTION            PASS
CLEANUP / EXIT                  PASS
FRAME-CONVERSION INSTRUCTIONS   PASS
GUESSED TIMING                  0
GUESSED FRAMES                  0
GUESSED GEOMETRY                0
```

Scene 01 may proceed to its future exact audio-sync/frame-planning stage.

Next planning target after this audit: **Scene 02 — Question + Understand.**
