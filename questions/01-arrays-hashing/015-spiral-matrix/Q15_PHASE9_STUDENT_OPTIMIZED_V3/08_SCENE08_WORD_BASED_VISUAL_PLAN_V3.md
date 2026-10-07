# Q15 — Spiral Matrix (LeetCode 54)
# Phase 9 V3 · Scene 08 — Method 2 Optimal Code
## WORD-BASED VISUAL PLAN — STUDENT-OPTIMIZED SCRIPT · NO GUESSED TIME · KIT-FIRST

**Scene purpose:** Map boundary trace to guarded code, teach loop revalidation and reverse Python ranges, then derive complexity.

---

# AUTHORITY / SOURCE PRIORITY

1. `Q15_Spiral_Matrix_FINAL_STUDENT_OPTIMIZED.md`
2. independently verified Q15 algorithm truth / code targets
3. `DSA_MASTER_PRODUCTION_SKILL_V3.md`
4. `REFERENCE_WORD_DRIVEN_PLANNING_SKILL.md`
5. Matrix/Grid grammar + kit/source audit
6. actual project repository / `@dsa/kit`
7. final ElevenLabs MP3 + exact word-sync JSON

If an implementation API is missing: `UNRESOLVED — SOURCE REQUIRED`.

---

# PERMANENT VISUAL TRUTH

```text
CELL POSITION = FIXED
CELL VALUE    = FIXED
```

Traversal/visited/output/boundary overlays may change. Source matrix cells and values never move.

---

# TIMING LOCK

```text
NO SECONDS
NO FRAMES
NO GUESSED TYPE SPEED
NO GUESSED HOLD
```

Final audio timestamps are the only timing authority. Unanchored words inherit the previous persistent state and captions continue.

---

# CONTINUITY

**IN:** Scene07 leaves Method2 trace complete with no active rectangle and no visited matrix.

**OUT:** Method2 code/complexity complete.

---

# HARD NO-SPOILER / CENTER-STAGE LOCK

- If narration has not reached information, it does not visually exist yet.
- Default occupancy: **1 primary hero + 1 direct support object + captions**.
- Motion must teach state, show cause→effect, direct attention, or preserve continuity.
- No black/dark panel behind matrix; use course chalkboard + kit primitives.
- Future code lines remain hidden in code scenes.

---

# SEMANTIC ANCHOR MANIFEST

| Anchor ID | Exact spoken phrase | Center-stage hero |
|---|---|---|
| `S08_BOUND_START` | The code starts with... the four boundaries. | Four boundary assignments |
| `S08_BOUND_VALUES` | `top` and `left` begin at zero. `bottom` is `m - 1`. And `right` is `n - 1`. | Boundary values |
| `S08_VALID_LOOP` | The main loop continues only while... the active rectangle is valid. | while validity concept |
| `S08_CONDITION` | `top <= bottom`... and... `left <= right`. | while top<=bottom and left<=right |
| `S08_ORDER` | Inside the loop... we follow the same order as our trace. | Trace-order strip |
| `S08_PATTERN` | Consume an edge... shrink that boundary... validate... and continue. | CONSUME→SHRINK→VALIDATE→CONTINUE |
| `S08_TOP_CHECK` | After the top edge... we check whether any rows remain. | Post-top row check |
| `S08_RIGHT_CHECK` | After the right edge... we check whether any columns remain. | Post-right column check |
| `S08_BOTTOM_CHECK` | After the bottom edge... we check the rows again. | Post-bottom row check |
| `S08_LEFT_NO_CHECK` | After the left edge... we do not need another separate check. | No explicit post-left guard |
| `S08_WHY` | Why? | Why no check? |
| `S08_WHILE_RETURN` | Because execution returns to the main `while` condition | Loop-back control flow |
| `S08_BOTH` | that condition validates both row... and column boundaries... before the next round begins. | Both validity clauses |
| `S08_PY_DETAIL` | There is one more Python detail... that is easy to get wrong. | Reverse-range focus |
| `S08_BOTTOM_RANGE` | `range(right, left - 1, -1)`. | Bottom reverse range |
| `S08_LEFT_RANGE` | `range(bottom, top - 1, -1)`. | Left reverse range |
| `S08_EXCLUSIVE` | Python does not include the stop value in `range`. | Exclusive stop |
| `S08_LEFT_MINUS` | `left - 1`... lets us include the `left` boundary. | left-1 proof |
| `S08_TOP_MINUS` | `top - 1`... lets us include the `top` boundary. | top-1 proof |
| `S08_PROTECT` | These checks and reverse ranges... are what protect us from... off-by-one errors... and duplicate values. | Correctness safeguards |
| `S08_TIME` | Every matrix cell is appended once. So the time complexity is... `O(m × n)`. | O(mn) time |
| `S08_SPACE` | apart from the output list... we keep only a constant number of variables. So the auxiliary space is... `O(1)`. | O(1) auxiliary space |

---

# WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S08_BOUND_START`

### ANCHOR / SPOKEN PHRASE
> The code starts with... the four boundaries.

### WHAT APPEARS NOW
Use production code surface. Previously taught shared dimension setup may remain as dim inherited context; type only boundary assignments as narration reaches them.

### CENTER-STAGE HERO
Four boundary assignments

### CAUSE
The narration reaches `S08_BOUND_START`.

### EFFECT / MOTION
Starts new method with state that differs from Method1.

### WHAT MUST NOT APPEAR YET
While condition.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep boundary lines.

### PERSISTENT STATE
top,bottom,left,right defined.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Starts new method with state that differs from Method1.

### SPECIAL CONTRACT
SHARED-BOILERPLATE RULE: `m`/`n` setup was already taught in Scene04. It may appear only as dim inherited context, never as a newly typed unspoken beat.

## BEAT 02 — `S08_BOUND_VALUES`

### ANCHOR / SPOKEN PHRASE
> `top` and `left` begin at zero. `bottom` is `m - 1`. And `right` is `n - 1`.

### WHAT APPEARS NOW
Reveal the four numeric values on the matrix edges on their spoken words. Do **not** reorder the target code to match narration order. After all four values are authorized, type the canonical target block in target order: `top = 0`, `bottom = m - 1`, `left = 0`, `right = n - 1`, using only the resolved phrase/following-pause window.

### CENTER-STAGE HERO
Boundary values

### CAUSE
The narration reaches `S08_BOUND_VALUES`.

### EFFECT / MOTION
Maps spoken geometry to code while preserving exact target-code organization.

### WHAT MUST NOT APPEAR YET
answer list/loop until authorized.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Dim completed assignments.

### PERSISTENT STATE
Initial rectangle coded in canonical order.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Maps spoken geometry to code while preserving exact target-code organization.

### SPECIAL CONTRACT
TRACE→CODE IDENTITY LOCK: narration groups `top` with `left`, but code target order stays top→bottom→left→right. If the resolved window cannot fit truthful character typing, do not reorder or rush; stop with CODE TYPING WINDOW TOO SHORT.

## BEAT 03 — `S08_VALID_LOOP`

### ANCHOR / SPOKEN PHRASE
> The main loop continues only while... the active rectangle is valid.

### WHAT APPEARS NOW
Bring active `while` line scaffold; matrix shows active region.

### CENTER-STAGE HERO
while validity concept

### CAUSE
The narration reaches `S08_VALID_LOOP`.

### EFFECT / MOTION
Connects loop lifetime to invariant.

### WHAT MUST NOT APPEAR YET
Exact condition until spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Loop condition upcoming.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Connects loop lifetime to invariant.

## BEAT 04 — `S08_CONDITION`

### ANCHOR / SPOKEN PHRASE
> `top <= bottom`... and... `left <= right`.

### WHAT APPEARS NOW
Type exact while condition in two clause emphasis; each clause lights corresponding row/column bounds.

### CENTER-STAGE HERO
while top<=bottom and left<=right

### CAUSE
The narration reaches `S08_CONDITION`.

### EFFECT / MOTION
Defines rectangle existence.

### WHAT MUST NOT APPEAR YET
Loop body specifics.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep while line dim after hold.

### PERSISTENT STATE
Valid rows AND valid columns.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Defines rectangle existence.

## BEAT 05 — `S08_ORDER`

### ANCHOR / SPOKEN PHRASE
> Inside the loop... we follow the same order as our trace.

### WHAT APPEARS NOW
Show compact TOP→RIGHT→BOTTOM→LEFT structural labels, not future loop code yet.

### CENTER-STAGE HERO
Trace-order strip

### CAUSE
The narration reaches `S08_ORDER`.

### EFFECT / MOTION
Reuses already-proven execution order.

### WHAT MUST NOT APPEAR YET
Exact ranges.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep as support.

### PERSISTENT STATE
Edge order inherited from trace.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Reuses already-proven execution order.

## BEAT 06 — `S08_PATTERN`

### ANCHOR / SPOKEN PHRASE
> Consume an edge... shrink that boundary... validate... and continue.

### WHAT APPEARS NOW
Reveal four-step pattern one word group at a time. For code, construct one top-edge exemplar only: top loop/append on CONSUME, `top += 1` on SHRINK, `if top > bottom: break` on VALIDATE.

### CENTER-STAGE HERO
CONSUME→SHRINK→VALIDATE→CONTINUE

### CAUSE
The narration reaches `S08_PATTERN`.

### EFFECT / MOTION
Maps trace pattern to code organization without reading every line.

### WHAT MUST NOT APPEAR YET
Other edge exact ranges before their later discussion.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Collapse exemplar after pattern.

### PERSISTENT STATE
Every edge follows consume/shrink/validate as applicable.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Maps trace pattern to code organization without reading every line.

### SPECIAL CONTRACT
GROUPED CODE CONTRACT: exact character frames come from resolved phrase windows. Do not dump all four edge blocks here.

## BEAT 07 — `S08_TOP_CHECK`

### ANCHOR / SPOKEN PHRASE
> After the top edge... we check whether any rows remain.

### WHAT APPEARS NOW
Focus top exemplar guard and row geometry.

### CENTER-STAGE HERO
Post-top row check

### CAUSE
The narration reaches `S08_TOP_CHECK`.

### EFFECT / MOTION
Explains first guard placement.

### WHAT MUST NOT APPEAR YET
Right guard.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep pattern strip.

### PERSISTENT STATE
After top shrink validate rows.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Explains first guard placement.

## BEAT 08 — `S08_RIGHT_CHECK`

### ANCHOR / SPOKEN PHRASE
> After the right edge... we check whether any columns remain.

### WHAT APPEARS NOW
Reveal/construct right-edge block only as needed to show `right -= 1` then `if left > right: break`; matrix highlights columns.

### CENTER-STAGE HERO
Post-right column check

### CAUSE
The narration reaches `S08_RIGHT_CHECK`.

### EFFECT / MOTION
Explains second guard.

### WHAT MUST NOT APPEAR YET
Bottom guard.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Dim right block.

### PERSISTENT STATE
After right shrink validate columns.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Explains second guard.

## BEAT 09 — `S08_BOTTOM_CHECK`

### ANCHOR / SPOKEN PHRASE
> After the bottom edge... we check the rows again.

### WHAT APPEARS NOW
Reveal bottom-edge block structure up to `bottom -= 1` and `if top > bottom: break`; keep reverse range endpoint unresolved/focused later.

### CENTER-STAGE HERO
Post-bottom row check

### CAUSE
The narration reaches `S08_BOTTOM_CHECK`.

### EFFECT / MOTION
Explains third guard.

### WHAT MUST NOT APPEAR YET
Left no-check proof.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Dim.

### PERSISTENT STATE
After bottom shrink validate rows.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Explains third guard.

## BEAT 10 — `S08_LEFT_NO_CHECK`

### ANCHOR / SPOKEN PHRASE
> After the left edge... we do not need another separate check.

### WHAT APPEARS NOW
Reveal left edge `left += 1` and intentionally show no following `if` line. The absence itself is the teaching visual.

### CENTER-STAGE HERO
No explicit post-left guard

### CAUSE
The narration reaches `S08_LEFT_NO_CHECK`.

### EFFECT / MOTION
Highlights code asymmetry deliberately.

### WHAT MUST NOT APPEAR YET
Reason before spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep cursor after left increment.

### PERSISTENT STATE
No separate guard after left.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Highlights code asymmetry deliberately.

## BEAT 11 — `S08_WHY`

### ANCHOR / SPOKEN PHRASE
> Why?

### WHAT APPEARS NOW
Pause code construction; focus on cursor returning toward loop header.

### CENTER-STAGE HERO
Why no check?

### CAUSE
The narration reaches `S08_WHY`.

### EFFECT / MOTION
Opens control-flow explanation.

### WHAT MUST NOT APPEAR YET
While validation before spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep while line visible dim.

### PERSISTENT STATE
Control returns to loop header.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Opens control-flow explanation.

## BEAT 12 — `S08_WHILE_RETURN`

### ANCHOR / SPOKEN PHRASE
> Because execution returns to the main `while` condition

### WHAT APPEARS NOW
Use one semantic RoughCurve/arrow from end of loop body back to while header; no decorative camera motion.

### CENTER-STAGE HERO
Loop-back control flow

### CAUSE
The narration reaches `S08_WHILE_RETURN`.

### EFFECT / MOTION
Shows actual control flow.

### WHAT MUST NOT APPEAR YET
Both clauses.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep loop header active.

### PERSISTENT STATE
Next iteration re-evaluates while.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Shows actual control flow.

## BEAT 13 — `S08_BOTH`

### ANCHOR / SPOKEN PHRASE
> that condition validates both row... and column boundaries... before the next round begins.

### WHAT APPEARS NOW
Light `top<=bottom` on row words and `left<=right` on column words.

### CENTER-STAGE HERO
Both validity clauses

### CAUSE
The narration reaches `S08_BOTH`.

### EFFECT / MOTION
Proves separate left guard is unnecessary.

### WHAT MUST NOT APPEAR YET
Python range detail.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Clear control arrow after comprehension hold.

### PERSISTENT STATE
Both dimensions checked at loop entry.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Proves separate left guard is unnecessary.

## BEAT 14 — `S08_PY_DETAIL`

### ANCHOR / SPOKEN PHRASE
> There is one more Python detail... that is easy to get wrong.

### WHAT APPEARS NOW
Clear most code; bring bottom reverse-loop active line to center.

### CENTER-STAGE HERO
Reverse-range focus

### CAUSE
The narration reaches `S08_PY_DETAIL`.

### EFFECT / MOTION
Signals syntax-specific risk.

### WHAT MUST NOT APPEAR YET
Exact range before spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep only relevant bounds strip.

### PERSISTENT STATE
Reverse range under study.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Signals syntax-specific risk.

## BEAT 15 — `S08_BOTTOM_RANGE`

### ANCHOR / SPOKEN PHRASE
> `range(right, left - 1, -1)`.

### WHAT APPEARS NOW
Type/focus exact range. Under it, map arguments as START=`right`, STOP=`left-1`, STEP=`-1`; labels may reveal only after full expression is spoken.

### CENTER-STAGE HERO
Bottom reverse range

### CAUSE
The narration reaches `S08_BOTTOM_RANGE`.

### EFFECT / MOTION
Connects syntax to right→left traversal.

### WHAT MUST NOT APPEAR YET
Second range.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep argument diagram.

### PERSISTENT STATE
Bottom loop includes left boundary.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Connects syntax to right→left traversal.

## BEAT 16 — `S08_LEFT_RANGE`

### ANCHOR / SPOKEN PHRASE
> `range(bottom, top - 1, -1)`.

### WHAT APPEARS NOW
Switch to second exact range and map START=`bottom`, STOP=`top-1`, STEP=`-1`.

### CENTER-STAGE HERO
Left reverse range

### CAUSE
The narration reaches `S08_LEFT_RANGE`.

### EFFECT / MOTION
Connects syntax to bottom→top traversal.

### WHAT MUST NOT APPEAR YET
Exclusive-stop explanation.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep one generic reverse-range model.

### PERSISTENT STATE
Left loop includes top boundary.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Connects syntax to bottom→top traversal.

## BEAT 17 — `S08_EXCLUSIVE`

### ANCHOR / SPOKEN PHRASE
> Python does not include the stop value in `range`.

### WHAT APPEARS NOW
Use a compact index strip: stop marker is excluded; do not show wrong output yet.

### CENTER-STAGE HERO
Exclusive stop

### CAUSE
The narration reaches `S08_EXCLUSIVE`.

### EFFECT / MOTION
Explains why -1 offset exists.

### WHAT MUST NOT APPEAR YET
left-1/top-1 meaning.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep index strip.

### PERSISTENT STATE
Python stop is exclusive.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Explains why -1 offset exists.

## BEAT 18 — `S08_LEFT_MINUS`

### ANCHOR / SPOKEN PHRASE
> `left - 1`... lets us include the `left` boundary.

### WHAT APPEARS NOW
Show traversal stepping down to `left`; stop sits one position beyond and is excluded.

### CENTER-STAGE HERO
left-1 proof

### CAUSE
The narration reaches `S08_LEFT_MINUS`.

### EFFECT / MOTION
Proves inclusive left endpoint.

### WHAT MUST NOT APPEAR YET
top-1 proof.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep generic model.

### PERSISTENT STATE
Bottom edge includes left.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Proves inclusive left endpoint.

## BEAT 19 — `S08_TOP_MINUS`

### ANCHOR / SPOKEN PHRASE
> `top - 1`... lets us include the `top` boundary.

### WHAT APPEARS NOW
Rotate model to row indices; traversal reaches top, excluded stop is top-1.

### CENTER-STAGE HERO
top-1 proof

### CAUSE
The narration reaches `S08_TOP_MINUS`.

### EFFECT / MOTION
Proves inclusive top endpoint.

### WHAT MUST NOT APPEAR YET
Error summary.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Clear index model after hold.

### PERSISTENT STATE
Left edge includes top.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Proves inclusive top endpoint.

## BEAT 20 — `S08_PROTECT`

### ANCHOR / SPOKEN PHRASE
> These checks and reverse ranges... are what protect us from... off-by-one errors... and duplicate values.

### WHAT APPEARS NOW
Bring completed guarded-code skeleton and two small semantic outcomes: all required endpoints included; collapsed regions stopped before duplication. No fabricated wrong code.

### CENTER-STAGE HERO
Correctness safeguards

### CAUSE
The narration reaches `S08_PROTECT`.

### EFFECT / MOTION
Connects syntax/guards to correctness.

### WHAT MUST NOT APPEAR YET
Complexity.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Now full final code may resolve visually because no future code semantics remain.

### PERSISTENT STATE
Guarded boundary code complete.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Connects syntax/guards to correctness.

### SPECIAL CONTRACT
FINAL-CODE REVEAL RULE: only after this beat may the complete target be visible as a settled snapshot; earlier future lines stay hidden.

## BEAT 21 — `S08_TIME`

### ANCHOR / SPOKEN PHRASE
> Every matrix cell is appended once. So the time complexity is... `O(m × n)`.

### WHAT APPEARS NOW
Code recedes; matrix traversal count one append per cell → O(mn).

### CENTER-STAGE HERO
O(mn) time

### CAUSE
The narration reaches `S08_TIME`.

### EFFECT / MOTION
Derives time from trace.

### WHAT MUST NOT APPEAR YET
Space.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep time badge.

### PERSISTENT STATE
Method2 time O(mn).

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Derives time from trace.

## BEAT 22 — `S08_SPACE`

### ANCHOR / SPOKEN PHRASE
> apart from the output list... we keep only a constant number of variables. So the auxiliary space is... `O(1)`.

### WHAT APPEARS NOW
Show answer list as required output separated from auxiliary state; center four bounds + loop scalars, then reveal O(1).

### CENTER-STAGE HERO
O(1) auxiliary space

### CAUSE
The narration reaches `S08_SPACE`.

### EFFECT / MOTION
Derives auxiliary space correctly excluding output.

### WHAT MUST NOT APPEAR YET
Scene09 mistakes.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
End with compact Method2 result.

### PERSISTENT STATE
Method2 aux O(1).

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Derives auxiliary space correctly excluding output.

---

# SCENE END-STATE CONTRACT

```text
Method2 code/complexity complete.
```

# IMPLEMENTATION SOURCE LOCK

Before implementation, inspect actual repository APIs for Matrix/Grid wrapper, path tracer/evolving path, output sequence, typed code editor, roadmap, and any generic complexity graph. Reuse/extend kit-level primitives; never invent props or build a scene-local generic substitute.
