# Q13 — Set Matrix Zeroes (LC 73)
# Phase 9 · Scene 03 — Method 1 Trace: Full Original Copy
## WORD-BASED VISUAL PLAN — REAUDIT V2

**Scene purpose:** Trace the exact same full-copy algorithm that Scene04 codes: scan only the immutable original copy for original zero sources, and apply each source's row/column effect to the working matrix.

---

# 0. WHY V2 EXISTS

The first Phase-9 version used a per-working-cell row/column membership trace while Scene04 coded a per-original-zero row/column mutation algorithm. Both algorithms were correct, but **Trace → Code did not execute the same method**.

This V2 removes that inconsistency.

```text
SCENE03 TRACE
original zero source
→ zero corresponding working row
→ zero corresponding working column

SCENE04 CODE
original zero source
→ zero corresponding working row
→ zero corresponding working column
```

The trace and code are now identical in algorithmic organization.

---

# 1. SOURCE PRIORITY

1. verified V2 narration;
2. locked master matrix and original-zero locations;
3. actual Method1 code target from Scene04;
4. project `SKILL.md`;
5. actual `@dsa/kit` / production components;
6. final MP3 + exact word sync.

If an implementation API is absent:

```text
UNRESOLVED — SOURCE REQUIRED
```

---

# 2. CONTINUITY IN

Scene02 ends on the untouched master and the invariant:

```text
created zeros must never become new sources
```

No copy exists until narration says `keep one untouched copy`.

---

# 3. EXACT V2 NARRATION

```text
The safest idea is...

keep one untouched copy of the original matrix.

Think of it as our source of truth.

We read zero information only from this original copy...

and we write changes only into the working matrix.

Now trace it.

In the original copy...

our first zero is at row zero, column two.

Because this zero belongs to the original input...

zero row zero in the working matrix.

Then zero column two.

The working matrix changes...

but the source copy does not.

Continue through the original copy.

The next original zero is at row two, column zero.

So zero row two in the working matrix...

and zero column zero.

Again...

the source copy stays untouched.

Then we reach the original zero at row three, column three.

Zero row three...

and zero column three...

in the working matrix.

Now all three original zero sources have been processed.

Notice what we never did.

We never used a zero created inside the working matrix as a new source.

Every zeroing decision came from the untouched original copy.

So newly-created zeros cannot create a false chain reaction.

After all three original zeros are processed...

the result becomes:

zero zero zero zero zero...

zero seven zero zero ten...

zero zero zero zero zero...

zero zero zero zero zero...

zero twenty-two zero zero twenty-five.

So Method One works.

But we paid for that safety...

by storing the whole matrix again.

Let’s write the idea in code.
```

---

# 4. LOCKED ALGORITHM TRUTH

```text
ORIGINAL SOURCES
(0,2)
(2,0)
(3,3)

READ
only from immutable original

WRITE
only to working matrix

SOURCE (0,2)
→ working row0 = 0
→ working col2 = 0

SOURCE (2,0)
→ working row2 = 0
→ working col0 = 0

SOURCE (3,3)
→ working row3 = 0
→ working col3 = 0
```

Final:

```text
[
 [0,0,0,0,0],
 [0,7,0,0,10],
 [0,0,0,0,0],
 [0,0,0,0,0],
 [0,22,0,0,25]
]
```

---

# 5. VISUAL IDENTITY — TRUTH LENS, CORRECTED

`TRUTH LENS` now means:

```text
IMMUTABLE SOURCE ZERO owns the decision
→ source zero projects row/column consequence
→ WORKING matrix mutates
→ source remains unchanged
→ next ORIGINAL source
```

Do not ask every working cell to re-scan its source row/column. That would be a different implementation from Scene04.

Center-stage law remains:

```text
1 primary hero
+ 1 direct support object
+ captions
```

---

# 6. FOUNDATION LOCK

- Matrix/Grid uses the course kit-driven fixed-cell grammar.
- Source and working matrices are algorithmically required, but never remain equal-weight dashboard panels.
- `RoughLine` / existing relation primitive only for the active source→effect relation.
- `ChalkText` for minimal role/invariant labels.
- No marker arrays, no boundary-marker trick, no complexity graph.
- Cell geometry never moves; values mutate in fixed working cells only.

---

# 7. SEMANTIC ANCHOR MANIFEST — NO TIME / NO FRAMES

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S03_SAFE` | `The safest idea is` | Untouched master matrix. |
| `S03_COPY` | `keep one untouched copy of the original matrix.` | Immutable original copy. |
| `S03_TRUTH` | `Think of it as our source of truth.` | Source copy. |
| `S03_READ` | `We read zero information only from this original copy` | Read-from-source contract. |
| `S03_WRITE` | `and we write changes only into the working matrix.` | Write-to-working contract. |
| `S03_TRACE` | `Now trace it.` | Source-copy scan context. |
| `S03_Z1` | `our first zero is at row zero, column two.` | Original source zero `(0,2)`. |
| `S03_ORIGINAL` | `Because this zero belongs to the original input` | Source `(0,2)` as valid cause. |
| `S03_ROW0` | `zero row zero in the working matrix.` | Working row0 mutation. |
| `S03_COL2` | `Then zero column two.` | Working column2 mutation. |
| `S03_WORKING_CHANGES` | `The working matrix changes` | Working matrix. |
| `S03_SOURCE_NOT` | `but the source copy does not.` | Immutable source copy. |
| `S03_CONTINUE` | `Continue through the original copy.` | Source copy. |
| `S03_Z2` | `The next original zero is at row two, column zero.` | Original source zero `(2,0)`. |
| `S03_ROW2` | `So zero row two in the working matrix` | Working row2 mutation. |
| `S03_COL0` | `and zero column zero.` | Working column0 mutation. |
| `S03_AGAIN` | `Again` | Source/working contrast. |
| `S03_SOURCE_UNTOUCHED` | `the source copy stays untouched.` | Immutable source copy. |
| `S03_Z3` | `Then we reach the original zero at row three, column three.` | Original source zero `(3,3)`. |
| `S03_ROW3` | `Zero row three` | Working row3 mutation. |
| `S03_COL3` | `and zero column three` | Working column3 mutation. |
| `S03_WORKING` | `in the working matrix.` | Working accumulated state. |
| `S03_ALL3` | `Now all three original zero sources have been processed.` | Completed source set. |
| `S03_NEVER` | `Notice what we never did.` | Correctness invariant setup. |
| `S03_CREATED` | `We never used a zero created inside the working matrix as a new source.` | Created working zero is NOT a source. |
| `S03_EVERY` | `Every zeroing decision came from the untouched original copy.` | Source-of-truth contract. |
| `S03_NOCHAIN` | `So newly-created zeros cannot create a false chain reaction.` | No-false-chain invariant. |
| `S03_RESULT` | `After all three original zeros are processed the result becomes` | Working result shell. |
| `S03_R0` | `zero zero zero zero zero` | Final row0. |
| `S03_R1` | `zero seven zero zero ten` | Final row1. |
| `S03_R2` | `zero zero zero zero zero` | Final row2. |
| `S03_R3` | `zero zero zero zero zero` | Final row3. |
| `S03_R4` | `zero twenty-two zero zero twenty-five.` | Complete Method1 result. |
| `S03_WORKS` | `So Method One works.` | Method1 correctness. |
| `S03_SAFETY` | `But we paid for that safety` | Memory cost source. |
| `S03_STORE` | `by storing the whole matrix again.` | Full extra matrix storage. |
| `S03_CODE` | `Let’s write the idea in code.` | Method1 invariant ready for code. |

---

# 8. WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S03_SAFE`

### ANCHOR / SPOKEN PHRASE
`The safest idea is`

### WHAT APPEARS NOW
Keep the untouched master matrix center stage with only a minimal Method-1 identity.

### CENTER-STAGE HERO
Untouched master matrix.

### CAUSE
Narration opens the first correct approach.

### EFFECT / MOTION
No structural mutation yet; attention narrows to preservation.

### WHAT MUST NOT APPEAR YET
No copy before the next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Keep master.

### PERSISTENT STATE
Original master.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Direct attention.

## BEAT 02 — `S03_COPY`

### ANCHOR / SPOKEN PHRASE
`keep one untouched copy of the original matrix.`

### WHAT APPEARS NOW
Create one immutable source copy and one working matrix through a semantic clone/projection. The source copy receives a restrained `SOURCE` cue.

### CENTER-STAGE HERO
Immutable original copy.

### CAUSE
Narration explicitly creates the copy.

### EFFECT / MOTION
Copy exists as protected evidence; working matrix remains the mutable target.

### WHAT MUST NOT APPEAR YET
No scan or zeroing yet.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Reduce source to quiet support after role is clear.

### PERSISTENT STATE
Source copy + working matrix.

### KIT / EXISTING SYSTEM
Matrix/Grid; deterministic projection/cut only.

### MOTION PURPOSE
Teach data structure.

## BEAT 03 — `S03_TRUTH`

### ANCHOR / SPOKEN PHRASE
`Think of it as our source of truth.`

### WHAT APPEARS NOW
Promote only the source copy; `SOURCE OF TRUTH` chalk annotation appears briefly.

### CENTER-STAGE HERO
Source copy.

### CAUSE
Narration names its role.

### EFFECT / MOTION
Working matrix recedes; source remains pixel-identical.

### WHAT MUST NOT APPEAR YET
No source zero selected yet.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Remove large annotation after comprehension.

### PERSISTENT STATE
Source remains immutable support.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText.

### MOTION PURPOSE
Teach invariant.

## BEAT 04 — `S03_READ`

### ANCHOR / SPOKEN PHRASE
`We read zero information only from this original copy`

### WHAT APPEARS NOW
Show a temporary READ relation from the current teaching focus to the source copy; no working mutation.

### CENTER-STAGE HERO
Read-from-source contract.

### CAUSE
Narration defines read side.

### EFFECT / MOTION
One semantic arrow/relationship only.

### WHAT MUST NOT APPEAR YET
Do not show WRITE relation until spoken.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Clear READ cue on next phrase.

### PERSISTENT STATE
Source + working preserved.

### KIT / EXISTING SYSTEM
RoughLine/arrow + ChalkText.

### MOTION PURPOSE
Teach dataflow.

## BEAT 05 — `S03_WRITE`

### ANCHOR / SPOKEN PHRASE
`and we write changes only into the working matrix.`

### WHAT APPEARS NOW
Switch relation to WRITE toward working matrix.

### CENTER-STAGE HERO
Write-to-working contract.

### CAUSE
Narration defines write side.

### EFFECT / MOTION
Source relation reduces; working target receives write emphasis.

### WHAT MUST NOT APPEAR YET
No specific row/column mutation yet.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Clear relation after contract.

### PERSISTENT STATE
Source immutable; working mutable.

### KIT / EXISTING SYSTEM
RoughLine/arrow + Matrix/Grid.

### MOTION PURPOSE
Teach dataflow.

## BEAT 06 — `S03_TRACE`

### ANCHOR / SPOKEN PHRASE
`Now trace it.`

### WHAT APPEARS NOW
Bring source copy to center with working matrix as direct support; no zero is selected yet.

### CENTER-STAGE HERO
Source-copy scan context.

### CAUSE
Narration starts execution.

### EFFECT / MOTION
Semantic handoff invariant → trace.

### WHAT MUST NOT APPEAR YET
No future source zero focus.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Keep both roles visible but unequal.

### PERSISTENT STATE
Source hero + working support.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Trace setup.

## BEAT 07 — `S03_Z1`

### ANCHOR / SPOKEN PHRASE
`our first zero is at row zero, column two.`

### WHAT APPEARS NOW
Focus source `(0,2)=0` only.

### CENTER-STAGE HERO
Original source zero `(0,2)`.

### CAUSE
Narration reaches first source.

### EFFECT / MOTION
Pivot focus on source; working matrix unchanged.

### WHAT MUST NOT APPEAR YET
Do not zero row/column before their phrases.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Keep source zero active.

### PERSISTENT STATE
Source `(0,2)`.

### KIT / EXISTING SYSTEM
Matrix current-cell state.

### MOTION PURPOSE
Direct attention.

## BEAT 08 — `S03_ORIGINAL`

### ANCHOR / SPOKEN PHRASE
`Because this zero belongs to the original input`

### WHAT APPEARS NOW
Add a brief `ORIGINAL SOURCE` confirmation cue tied only to `(0,2)`.

### CENTER-STAGE HERO
Source `(0,2)` as valid cause.

### CAUSE
Narration explains why it is trusted.

### EFFECT / MOTION
No data mutation; establish provenance first.

### WHAT MUST NOT APPEAR YET
Do not highlight created working zeros as sources.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Keep source active.

### PERSISTENT STATE
Source provenance known.

### KIT / EXISTING SYSTEM
ChalkText + source cell.

### MOTION PURPOSE
Teach causality.

## BEAT 09 — `S03_ROW0`

### ANCHOR / SPOKEN PHRASE
`zero row zero in the working matrix.`

### WHAT APPEARS NOW
Mutate working row0 to zero while source row0 stays unchanged.

### CENTER-STAGE HERO
Working row0 mutation.

### CAUSE
Trusted source `(0,2)` causes row0 zeroing.

### EFFECT / MOTION
Cause source → working row effect; fixed cell geometry.

### WHAT MUST NOT APPEAR YET
Do not zero column2 yet.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Working row0 remains zero.

### PERSISTENT STATE
Source unchanged + working row0 zero.

### KIT / EXISTING SYSTEM
Matrix/Grid + row-region relation.

### MOTION PURPOSE
Cause→effect.

## BEAT 10 — `S03_COL2`

### ANCHOR / SPOKEN PHRASE
`Then zero column two.`

### WHAT APPEARS NOW
Mutate working column2 to zero; source column2 remains unchanged.

### CENTER-STAGE HERO
Working column2 mutation.

### CAUSE
Narration reaches second consequence of same source.

### EFFECT / MOTION
Cause source → working column effect.

### WHAT MUST NOT APPEAR YET
Do not process next original zero yet.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Reduce row/column relation, keep resulting working state.

### PERSISTENT STATE
Working has row0 + col2 zero.

### KIT / EXISTING SYSTEM
Matrix/Grid + column-region relation.

### MOTION PURPOSE
Cause→effect.

## BEAT 11 — `S03_WORKING_CHANGES`

### ANCHOR / SPOKEN PHRASE
`The working matrix changes`

### WHAT APPEARS NOW
Briefly promote the changed working matrix; source recedes.

### CENTER-STAGE HERO
Working matrix.

### CAUSE
Narration contrasts mutable target.

### EFFECT / MOTION
No new mutation; emphasize accumulated working state.

### WHAT MUST NOT APPEAR YET
Do not modify source.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Keep working state.

### PERSISTENT STATE
Working mutation state.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Direct attention.

## BEAT 12 — `S03_SOURCE_NOT`

### ANCHOR / SPOKEN PHRASE
`but the source copy does not.`

### WHAT APPEARS NOW
Promote source copy and visually confirm it is still the exact original matrix.

### CENTER-STAGE HERO
Immutable source copy.

### CAUSE
Narration completes contrast.

### EFFECT / MOTION
Working recedes; source stays pixel-identical.

### WHAT MUST NOT APPEAR YET
No next source yet.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Return to source scan context.

### PERSISTENT STATE
Source copy unchanged.

### KIT / EXISTING SYSTEM
Matrix/Grid + immutable cue.

### MOTION PURPOSE
Teach invariant.

## BEAT 13 — `S03_CONTINUE`

### ANCHOR / SPOKEN PHRASE
`Continue through the original copy.`

### WHAT APPEARS NOW
Source scan focus resumes without animating a decorative full traversal.

### CENTER-STAGE HERO
Source copy.

### CAUSE
Narration continues discovery.

### EFFECT / MOTION
Attention moves semantically to next relevant source.

### WHAT MUST NOT APPEAR YET
Do not select next zero before spoken.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Keep source hero.

### PERSISTENT STATE
Source matrix.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Semantic continuity.

## BEAT 14 — `S03_Z2`

### ANCHOR / SPOKEN PHRASE
`The next original zero is at row two, column zero.`

### WHAT APPEARS NOW
Focus source `(2,0)=0`.

### CENTER-STAGE HERO
Original source zero `(2,0)`.

### CAUSE
Narration reaches second source.

### EFFECT / MOTION
Pivot focus only.

### WHAT MUST NOT APPEAR YET
No row2/col0 mutation early.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Keep source active.

### PERSISTENT STATE
Source `(2,0)`.

### KIT / EXISTING SYSTEM
Matrix current-cell state.

### MOTION PURPOSE
Direct attention.

## BEAT 15 — `S03_ROW2`

### ANCHOR / SPOKEN PHRASE
`So zero row two in the working matrix`

### WHAT APPEARS NOW
Mutate working row2 to zero.

### CENTER-STAGE HERO
Working row2 mutation.

### CAUSE
Source `(2,0)` authorizes row effect.

### EFFECT / MOTION
Source → working row relation, then values settle.

### WHAT MUST NOT APPEAR YET
Column0 mutation hidden until next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Keep row2 zero.

### PERSISTENT STATE
Working row2 zero.

### KIT / EXISTING SYSTEM
Matrix/Grid + row relation.

### MOTION PURPOSE
Cause→effect.

## BEAT 16 — `S03_COL0`

### ANCHOR / SPOKEN PHRASE
`and zero column zero.`

### WHAT APPEARS NOW
Mutate working column0 to zero.

### CENTER-STAGE HERO
Working column0 mutation.

### CAUSE
Same trusted source authorizes column effect.

### EFFECT / MOTION
Source → working column relation.

### WHAT MUST NOT APPEAR YET
No third source yet.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Keep accumulated working state.

### PERSISTENT STATE
Working row0/row2, col0/col2 affected as accumulated state.

### KIT / EXISTING SYSTEM
Matrix/Grid + column relation.

### MOTION PURPOSE
Cause→effect.

## BEAT 17 — `S03_AGAIN`

### ANCHOR / SPOKEN PHRASE
`Again`

### WHAT APPEARS NOW
No new object; shift attention from working changes back toward the immutable source.

### CENTER-STAGE HERO
Source/working contrast.

### CAUSE
Narration signals repeated invariant.

### EFFECT / MOTION
Attention transition only.

### WHAT MUST NOT APPEAR YET
No third source yet.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Keep both roles.

### PERSISTENT STATE
Accumulated working + untouched source.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Semantic continuity.

## BEAT 18 — `S03_SOURCE_UNTOUCHED`

### ANCHOR / SPOKEN PHRASE
`the source copy stays untouched.`

### WHAT APPEARS NOW
Confirm exact original values remain in source.

### CENTER-STAGE HERO
Immutable source copy.

### CAUSE
Narration repeats the crucial safety property.

### EFFECT / MOTION
No mutation; source is stable evidence.

### WHAT MUST NOT APPEAR YET
No third source until next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Resume source scan after confirmation.

### PERSISTENT STATE
Source unchanged.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Teach invariant.

## BEAT 19 — `S03_Z3`

### ANCHOR / SPOKEN PHRASE
`Then we reach the original zero at row three, column three.`

### WHAT APPEARS NOW
Focus source `(3,3)=0`.

### CENTER-STAGE HERO
Original source zero `(3,3)`.

### CAUSE
Narration reaches third source.

### EFFECT / MOTION
Pivot focus only.

### WHAT MUST NOT APPEAR YET
No row3/col3 mutation early.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Keep source active.

### PERSISTENT STATE
Source `(3,3)`.

### KIT / EXISTING SYSTEM
Matrix current-cell state.

### MOTION PURPOSE
Direct attention.

## BEAT 20 — `S03_ROW3`

### ANCHOR / SPOKEN PHRASE
`Zero row three`

### WHAT APPEARS NOW
Mutate working row3 to zero.

### CENTER-STAGE HERO
Working row3 mutation.

### CAUSE
Trusted source `(3,3)` causes row effect.

### EFFECT / MOTION
One row change only.

### WHAT MUST NOT APPEAR YET
Column3 hidden.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Keep row3 zero.

### PERSISTENT STATE
Accumulated working state.

### KIT / EXISTING SYSTEM
Matrix/Grid + row relation.

### MOTION PURPOSE
Cause→effect.

## BEAT 21 — `S03_COL3`

### ANCHOR / SPOKEN PHRASE
`and zero column three`

### WHAT APPEARS NOW
Mutate working column3 to zero.

### CENTER-STAGE HERO
Working column3 mutation.

### CAUSE
Same source causes column effect.

### EFFECT / MOTION
One column change only.

### WHAT MUST NOT APPEAR YET
Do not present final result rows yet.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Keep accumulated state.

### PERSISTENT STATE
All three source effects processed in working matrix.

### KIT / EXISTING SYSTEM
Matrix/Grid + column relation.

### MOTION PURPOSE
Cause→effect.

## BEAT 22 — `S03_WORKING`

### ANCHOR / SPOKEN PHRASE
`in the working matrix.`

### WHAT APPEARS NOW
Promote working matrix only; source becomes quiet support.

### CENTER-STAGE HERO
Working accumulated state.

### CAUSE
Narration names mutation target.

### EFFECT / MOTION
No new values change.

### WHAT MUST NOT APPEAR YET
No final-row narration yet.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Keep current working state.

### PERSISTENT STATE
Working matrix.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Confirm target.

## BEAT 23 — `S03_ALL3`

### ANCHOR / SPOKEN PHRASE
`Now all three original zero sources have been processed.`

### WHAT APPEARS NOW
Show the three source zero locations as completed source events, then reduce them.

### CENTER-STAGE HERO
Completed source set.

### CAUSE
Narration closes discovery.

### EFFECT / MOTION
Three source confirmations, no new mutation.

### WHAT MUST NOT APPEAR YET
Do not reveal marker arrays or optimal method.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Clear source-event annotations.

### PERSISTENT STATE
Source/working roles remain.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText.

### MOTION PURPOSE
Close trace phase.

## BEAT 24 — `S03_NEVER`

### ANCHOR / SPOKEN PHRASE
`Notice what we never did.`

### WHAT APPEARS NOW
Reduce working/source matrices slightly and open one invariant line.

### CENTER-STAGE HERO
Correctness invariant setup.

### CAUSE
Narration asks learner to inspect absence of wrong behavior.

### EFFECT / MOTION
No state change.

### WHAT MUST NOT APPEAR YET
Do not reveal answer yet.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Keep invariant setup.

### PERSISTENT STATE
Source+working context.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Direct attention.

## BEAT 25 — `S03_CREATED`

### ANCHOR / SPOKEN PHRASE
`We never used a zero created inside the working matrix as a new source.`

### WHAT APPEARS NOW
Focus one created working zero only as a rejected source; source copy remains the authoritative support.

### CENTER-STAGE HERO
Created working zero is NOT a source.

### CAUSE
Narration states exclusion rule.

### EFFECT / MOTION
Use a clear reject cue; no new zeroing.

### WHAT MUST NOT APPEAR YET
Do not turn it into a scan source.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Clear rejected-source cue after point lands.

### PERSISTENT STATE
Working created zeros remain data only.

### KIT / EXISTING SYSTEM
Matrix/Grid + warn/second cue.

### MOTION PURPOSE
Teach correctness.

## BEAT 26 — `S03_EVERY`

### ANCHOR / SPOKEN PHRASE
`Every zeroing decision came from the untouched original copy.`

### WHAT APPEARS NOW
Temporarily show source-to-working relation for the three original source events as one compact invariant, not simultaneous clutter.

### CENTER-STAGE HERO
Source-of-truth contract.

### CAUSE
Narration states decision origin.

### EFFECT / MOTION
Source becomes hero; working is support.

### WHAT MUST NOT APPEAR YET
No new mutation.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Reduce relation.

### PERSISTENT STATE
Immutable source contract known.

### KIT / EXISTING SYSTEM
Matrix/Grid + RoughLine/ChalkText.

### MOTION PURPOSE
Correctness proof.

## BEAT 27 — `S03_NOCHAIN`

### ANCHOR / SPOKEN PHRASE
`So newly-created zeros cannot create a false chain reaction.`

### WHAT APPEARS NOW
Show created working zeros visually separated from source evidence; no false propagation occurs.

### CENTER-STAGE HERO
No-false-chain invariant.

### CAUSE
Narration concludes proof.

### EFFECT / MOTION
Absence of propagation is the effect; source stays unchanged.

### WHAT MUST NOT APPEAR YET
No Method2.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Clear proof cue.

### PERSISTENT STATE
Method1 correctness known.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText.

### MOTION PURPOSE
Correctness proof.

## BEAT 28 — `S03_RESULT`

### ANCHOR / SPOKEN PHRASE
`After all three original zeros are processed the result becomes`

### WHAT APPEARS NOW
Source copy recedes; working matrix owns center and prepares row-by-row final reveal.

### CENTER-STAGE HERO
Working result shell.

### CAUSE
Narration authorizes final output.

### EFFECT / MOTION
Trace→result handoff.

### WHAT MUST NOT APPEAR YET
Do not pre-reveal future output rows.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Keep working matrix.

### PERSISTENT STATE
Working hero.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Semantic continuity.

## BEAT 29 — `S03_R0`

### ANCHOR / SPOKEN PHRASE
`zero zero zero zero zero`

### WHAT APPEARS NOW
Reveal/finalize row0 on spoken values only.

### CENTER-STAGE HERO
Final row0.

### CAUSE
Narration speaks row0 result.

### EFFECT / MOTION
Fixed-cell values settle.

### WHAT MUST NOT APPEAR YET
Rows1–4 not newly revealed yet.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Keep row0.

### PERSISTENT STATE
Partial result.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Teach exact result.

## BEAT 30 — `S03_R1`

### ANCHOR / SPOKEN PHRASE
`zero seven zero zero ten`

### WHAT APPEARS NOW
Reveal/finalize row1 on spoken values only.

### CENTER-STAGE HERO
Final row1.

### CAUSE
Narration speaks row1 result.

### EFFECT / MOTION
Fixed-cell values settle.

### WHAT MUST NOT APPEAR YET
Rows2–4 not newly revealed yet.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Keep rows0–1.

### PERSISTENT STATE
Partial result.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Teach exact result.

## BEAT 31 — `S03_R2`

### ANCHOR / SPOKEN PHRASE
`zero zero zero zero zero`

### WHAT APPEARS NOW
Reveal/finalize row2.

### CENTER-STAGE HERO
Final row2.

### CAUSE
Narration speaks row2.

### EFFECT / MOTION
Values settle.

### WHAT MUST NOT APPEAR YET
Rows3–4 not newly revealed yet.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Keep rows0–2.

### PERSISTENT STATE
Partial result.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Teach exact result.

## BEAT 32 — `S03_R3`

### ANCHOR / SPOKEN PHRASE
`zero zero zero zero zero`

### WHAT APPEARS NOW
Reveal/finalize row3.

### CENTER-STAGE HERO
Final row3.

### CAUSE
Narration speaks row3.

### EFFECT / MOTION
Values settle.

### WHAT MUST NOT APPEAR YET
Row4 not newly revealed yet.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Keep rows0–3.

### PERSISTENT STATE
Partial result.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Teach exact result.

## BEAT 33 — `S03_R4`

### ANCHOR / SPOKEN PHRASE
`zero twenty-two zero zero twenty-five.`

### WHAT APPEARS NOW
Reveal/finalize row4; full verified result is now complete.

### CENTER-STAGE HERO
Complete Method1 result.

### CAUSE
Narration completes output.

### EFFECT / MOTION
Final matrix settles.

### WHAT MUST NOT APPEAR YET
No complexity or Method2 yet.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Keep result for verdict.

### PERSISTENT STATE
Verified final matrix.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Teach exact result.

## BEAT 34 — `S03_WORKS`

### ANCHOR / SPOKEN PHRASE
`So Method One works.`

### WHAT APPEARS NOW
Show a small correctness confirmation tied to the result; no celebratory decoration.

### CENTER-STAGE HERO
Method1 correctness.

### CAUSE
Narration gives verdict.

### EFFECT / MOTION
Result remains hero.

### WHAT MUST NOT APPEAR YET
No cost until next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Prepare cost transition.

### PERSISTENT STATE
Final result.

### KIT / EXISTING SYSTEM
ChalkText + Matrix/Grid.

### MOTION PURPOSE
Close method.

## BEAT 35 — `S03_SAFETY`

### ANCHOR / SPOKEN PHRASE
`But we paid for that safety`

### WHAT APPEARS NOW
Representation handoff from final result back to the duplicate/source memory requirement.

### CENTER-STAGE HERO
Memory cost source.

### CAUSE
Narration opens weakness.

### EFFECT / MOTION
Source copy re-enters as support.

### WHAT MUST NOT APPEAR YET
Do not write Big-O yet; script does not say it here.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Keep copy relation.

### PERSISTENT STATE
Matrix + full copy.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Derive weakness.

## BEAT 36 — `S03_STORE`

### ANCHOR / SPOKEN PHRASE
`by storing the whole matrix again.`

### WHAT APPEARS NOW
Promote the duplicate matrix itself as the reason for waste; cell-for-cell copy relation visible briefly.

### CENTER-STAGE HERO
Full extra matrix storage.

### CAUSE
Narration names cost source.

### EFFECT / MOTION
No numerical complexity label yet.

### WHAT MUST NOT APPEAR YET
No Method2 arrays.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
Reduce duplicate after point lands.

### PERSISTENT STATE
Method1 weakness known.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Derive next question.

## BEAT 37 — `S03_CODE`

### ANCHOR / SPOKEN PHRASE
`Let’s write the idea in code.`

### WHAT APPEARS NOW
Trace visuals reduce; code-scene handoff cue only. No code line appears before Scene04 narration.

### CENTER-STAGE HERO
Method1 invariant ready for code.

### CAUSE
Narration hands off.

### EFFECT / MOTION
Semantic trace→code transition.

### WHAT MUST NOT APPEAR YET
No code text yet.

### COMPREHENSION HOLD
Only if the final audio provides a real comprehension pause after this phrase.

### CLEANUP / EXIT
End on minimal Method1 identity/invariant.

### PERSISTENT STATE
Next scene starts code from empty focus.

### KIT / EXISTING SYSTEM
ChalkText / transition system.

### MOTION PURPOSE
Semantic continuity.


---

# 9. CONTINUITY OUT

Scene04 receives:

```text
METHOD1 EXACT EXECUTION KNOWN
source copy is immutable
scan original source zeros
write only to working row/column
```

Scene04 must construct the same algorithm line-by-line.

---

# 10. PHASE-12 CONTRACT

```text
V2 phrase anchor
+ final MP3
+ exact word-sync JSON
→ word IDs
→ exact seconds
→ exact 30fps [startFrame,endFrameExclusive)
→ SAME visual semantics
```

No timing is guessed in Phase9.

---

# ANTIGRAVITY POST-AUDIO CONVERSION — REQUIRED FOR THIS SCENE

After the final MP3 + exact word-sync JSON are supplied, Antigravity must convert **this exact Phase-9 plan** to frames using:

`ANTIGRAVITY_POST_AUDIO_WORDSYNC_TO_FRAMES.md`

For every `ANCHOR ID` in this scene:

```text
exact anchor phrase
→ unique contiguous word IDs from final sync
→ first word exact start
→ last word exact end
→ startFrame = floor(start × 30)
→ endFrameExclusive = ceil(end × 30)
```

Then generate:

```text
SceneXX_FRAME_PLAN.md
```

using `[startFrame,endFrameExclusive)`.

Rules for this scene:

```text
DO NOT redesign this Phase-9 choreography.
DO NOT invent seconds or frame offsets.
DO NOT add a hold unless the audio has a real gap.
DO NOT reveal a future state before its exact spoken word.
DO NOT implement until unmatched anchors = 0.
```

If the actual audio wording differs materially from the approved narration:

```text
BLOCKED — AUDIO / SCRIPT MISMATCH
```

If a required kit/component API is missing:

```text
BLOCKED — SOURCE REQUIRED
```

Only after the exact frame plan passes audit may Antigravity implement, typecheck, render, visually QA, repair, and move to the next scene automatically.
