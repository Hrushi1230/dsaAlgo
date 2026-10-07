# Q14 — Rotate Image (LeetCode 48)
# Phase 9 · Scene 13 — Recap + Transferable Pattern + Roadmap
## WORD-BASED VISUAL PLAN — NO GUESSED TIME / NO GUESSED FRAMES

**Scene purpose:** Compress the lesson into transferable reasoning, then update roadmap exactly once: Q14 complete, global 14/227, Q15 Spiral Matrix up next.

---

# 0. SOURCE PRIORITY

1. verified Q14 Phase-8 narration;
2. locked Q14 Phase-5 teaching trace;
3. previous scene approved continuity state;
4. `DSA_MASTER_PRODUCTION_SKILL_V3.md`;
5. Matrix/Grid kit grammar;
6. actual `@dsa/kit` / production source at implementation time;
7. final scene MP3;
8. final exact word-sync JSON.

If an API, geometry, or state is not supported by source:

```text
UNRESOLVED — SOURCE REQUIRED
```

---


## V2 PROJECT-SOURCE LOCK — NO GUESS

This plan is governed by the actual project sources, not generic animation assumptions.

Verified sources for Q14:

```text
SKILL.md
DSA_MASTER_PRODUCTION_SKILL_V3.md
REFERENCE_MATRIX_GRID_KIT_RULES.md
REFERENCE_MATRIX_GRID_VISUAL_GRAMMAR.md
RoughBox.tsx
ChalkText.tsx
RoughLine.tsx
RoughCurve.tsx
BezierFlight.tsx
Captions.tsx
audioSync.ts
motion.ts
MiniGraph.tsx
```

Verified Rotate Image grammar:

```text
CELL POSITION stays fixed
VALUE moves
(r,c) → (c,n-1-r)
```

Verified primitive mapping:

```text
MATRIX CELL      → RoughBox
ROW/COLUMN LABEL → ChalkText
CURRENT          → theme.pivot
QUERY            → theme.cyan
CONFIRMED        → theme.good
BLOCKED          → theme.warn + second visual cue
VALUE MOVEMENT   → BezierFlight
```

`MiniGraph.tsx` is sort-specific and must not be used as a fake generic Q14 complexity graph.

Thin wrappers such as `MatrixGrid` are allowed by the grammar, but the actual wrapper API must be inspected in the repo before implementation.

```text
NO INVENTED MatrixGrid PROPS
NO INVENTED ROADMAP PROPS
NO INVENTED CODE-EDITOR PROPS
```

## V2 NARRATION-COVERAGE RULE

An explicit anchor authorizes a semantic visual change.

Any spoken words between two explicit anchors inherit the prior `PERSISTENT STATE` and trigger:

```text
NO NEW VISUAL STATE
NO NEW MOTION
CAPTIONS MAY CONTINUE
```

If an unanchored phrase actually changes algorithm state, repair the plan before implementation.

## V2 SYNC-CRITICAL KIT TIMING RULE

Actual kit source was inspected.

`audioSync.ts` currently resolves frames with:

```text
Math.round(word.start * 30)
Math.round(word.end   * 30)
```

For Q14, actual repo/helper semantics win over older generic floor/ceil language.

Verified component timing fields/defaults:

```text
RoughBox    durationInFrames default exists
RoughLine   durationInFrames default exists
RoughCurve  durationInFrames default exists
ChalkText   charFrames default exists
BezierFlight requires explicit start + dur
```

For narration-synced actions:

```text
DO NOT use component defaults as timing authority.
```

Resolve the exact anchor window first and explicitly supply timing from that window, or use an existing motion token constrained to that exact available window.

For narration-synced ChalkText writing:

```text
startFrame = exact resolved anchor start
charFrames = exact writable frame window / text length
```

or render the text as a stable label if no writing animation is semantically required.

Captions use final exact sync words directly.


---

# 1. CONTINUITY IN

Before Scene13: Q14 ACTIVE; global 13/227; Q15 not active.

---

# 2. EXACT VERIFIED NARRATION

```text
Let’s compress the full lesson.

We started with the coordinate truth.

A value at:

row `r`, column `c`...

moves to:

row `c`...

column `n minus one minus r`.

Method One used that destination directly.

Read from the original...

write into another matrix.

Simple...

but it uses `O of n squared` extra space.

Method Two removed the extra matrix.

Values connected by the rotation mapping form four-position cycles.

Save one value...

rotate the other three...

restore the saved value...

finish the layer...

then move inward.

That gives:

`O of n squared` time...

and `O of one` extra space.

Method Three looked at the same coordinate mapping differently.

Instead of one complicated movement...

split it into two simple transformations.

Transpose...

then reverse every row.

That also gives:

`O of n squared` time...

and `O of one` extra space.

The bigger pattern is important.

When a matrix transformation looks complicated...

first write the coordinate mapping.

That mapping may reveal...

a cycle...

a symmetry...

or a sequence of simpler transformations.

Now Question Fourteen...

Rotate Image...

is complete.

Our global progress moves from...

thirteen out of two hundred twenty-seven...

to...

fourteen out of two hundred twenty-seven.

And next in Arrays and Hashing...

Question fifteen...

Spiral Matrix.

That is up next.
```

Only this spoken order authorizes reveals.

---

# 3. LOCKED SCENE TRUTH

Recap mapping and 3 methods. Completion only on Q14 completion phrase. Global increment only on progress phrase. Q15 UP NEXT, never ACTIVE.

---

# 4. WORD-DRIVEN LAW

```text
SCRIPT WORDS
→ VERIFIED ALGORITHM TRUTH
→ ACTUAL KIT / REPO SOURCE
→ SHOW ONLY WHAT NARRATION ALLOWS
→ TEACH
→ REMOVE / REDUCE
→ NEXT WORD
```

Default: `1 PRIMARY HERO + 1 DIRECT SUPPORT OBJECT + captions`.

---

# 5. KIT / FOUNDATION LOCK

Use the existing permanent roadmap UI and actual roadmap data. Do not rebuild sidebar, progress pill, problem card, or rail.

```text
ROADMAP COMPONENT/API — UNRESOLVED — REPO SOURCE REQUIRED
```

Matrix/Grid uses the approved kit-driven grammar:

```text
RoughBox   → fixed cells
ChalkText  → values / indices / annotation
theme.pivot → current cell
theme.cyan  → query / support
theme.warn  → wrong / overwrite risk
theme.good  → confirmed state
RoughLine / RoughCurve → semantic relation
BezierFlight → semantic value transfer
```

Permanent law:

```text
CELL POSITIONS STAY FIXED.
ROW/COLUMN GEOMETRY STAYS FIXED.
VALUES MOVE OR CHANGE.
```

`MatrixGrid` wrapper/API is not present in the supplied source subset:

```text
MATRIX GRID WRAPPER API — UNRESOLVED — REPO SOURCE REQUIRED
```

Implementation must reuse/extend kit-level Matrix/Grid composition, never create a scene-local HTML table.

Use ChalkText for recap compression.

---

# 6. SCENE-SPECIFIC RULES

No full trace replay. Roadmap returns only at completion. No early completion/progress. Q15 stays UP NEXT. No invented local pattern count.

---

# 7. SEMANTIC ANCHOR MANIFEST

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S13_COMPRESS` | `Let’s compress the full lesson.` | Recap structure. |
| `S13_MAP` | `We started with the coordinate truth.` | Coordinate mapping. |
| `S13_DEST` | `column `n minus one minus r`.` | Canonical mapping. |
| `S13_M1` | `Method One used that destination directly.` | Method1 identity. |
| `S13_M1FLOW` | `Read from the original... write into another matrix.` | Method1 dataflow. |
| `S13_M1SPACE` | `it uses `O of n squared` extra space.` | Method1 cost. |
| `S13_M2` | `Method Two removed the extra matrix.` | Method2 identity. |
| `S13_CYCLES` | `form four-position cycles.` | Cycle identity. |
| `S13_SAVE` | `Save one value` | Temp concept. |
| `S13_ROTATE` | `rotate the other three... restore the saved value... finish the layer... then move inward.` | Method2 process compression. |
| `S13_M2COMP` | ``O of n squared` time... and `O of one` extra space.` | Method2 complexity. |
| `S13_M3` | `Method Three looked at the same coordinate mapping differently.` | Method3 identity. |
| `S13_SPLIT` | `split it into two simple transformations.` | Two-stage view. |
| `S13_TRANS` | `Transpose` | Transpose. |
| `S13_REV` | `then reverse every row.` | Method3 identity. |
| `S13_M3COMP` | ``O of n squared` time... and `O of one` extra space.` | Method3 complexity. |
| `S13_PATTERN` | `The bigger pattern is important.` | Transferable pattern. |
| `S13_WRITE` | `first write the coordinate mapping.` | Mapping-first strategy. |
| `S13_REVEAL` | `That mapping may reveal` | Transferable outcomes. |
| `S13_Q14` | `is complete.` | Q14 COMPLETE. |
| `S13_PROGRESS` | `fourteen out of two hundred twenty-seven.` | Global 14/227. |
| `S13_NEXT` | `And next in Arrays and Hashing` | Next-problem handoff. |
| `S13_Q15` | `Spiral Matrix.` | Q15 UP NEXT. |
| `S13_UPNEXT` | `That is up next.` | Final roadmap state. |

---

# 8. WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S13_COMPRESS`

### ANCHOR / SPOKEN PHRASE
> Let’s compress the full lesson.

### WHAT APPEARS NOW
Clear detailed trace artifacts; center a simple recap spine.

### CENTER-STAGE HERO
Recap structure.

### CAUSE
Narration opens.

### EFFECT / MOTION
No roadmap yet.

### WHAT MUST NOT APPEAR YET
Method detail before spoken.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep recap stage.

### PERSISTENT STATE
Teaching summary.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Organize recap.

## BEAT 02 — `S13_MAP`

### ANCHOR / SPOKEN PHRASE
> We started with the coordinate truth.

### WHAT APPEARS NOW
Show `(r,c)→(c,n-1-r)` as hero with faint matrix.

### CENTER-STAGE HERO
Coordinate mapping.

### CAUSE
Narration starts core truth.

### EFFECT / MOTION
No methods yet.

### WHAT MUST NOT APPEAR YET
Roadmap.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep mapping.

### PERSISTENT STATE
Core truth.

### KIT / EXISTING SYSTEM
ChalkText + Matrix/Grid.

### MOTION PURPOSE
Recall.

## BEAT 03 — `S13_DEST`

### ANCHOR / SPOKEN PHRASE
> column `n minus one minus r`.

### WHAT APPEARS NOW
Highlight mapping destination and settle.

### CENTER-STAGE HERO
Canonical mapping.

### CAUSE
Narration states.

### EFFECT / MOTION
No Method1 before next phrase.

### WHAT MUST NOT APPEAR YET
Extra matrix.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep small.

### PERSISTENT STATE
Mapping known.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Recall.

## BEAT 04 — `S13_M1`

### ANCHOR / SPOKEN PHRASE
> Method One used that destination directly.

### WHAT APPEARS NOW
Introduce source→result two-matrix identity.

### CENTER-STAGE HERO
Method1 identity.

### CAUSE
Narration names.

### EFFECT / MOTION
No full trace.

### WHAT MUST NOT APPEAR YET
Complexity before spoken.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep identity.

### PERSISTENT STATE
M1 recap.

### KIT / EXISTING SYSTEM
Matrix/Grid uses the approved kit-driven grammar:

```text
RoughBox   → fixed cells
ChalkText  → values / indices / annotation
theme.pivot → current cell
theme.cyan  → query / support
theme.warn  → wrong / overwrite risk
theme.good  → confirmed state
RoughLine / RoughCurve → semantic relation
BezierFlight → semantic value transfer
```

Permanent law:

```text
CELL POSITIONS STAY FIXED.
ROW/COLUMN GEOMETRY STAYS FIXED.
VALUES MOVE OR CHANGE.
```

`MatrixGrid` wrapper/API is not present in the supplied source subset:

```text
MATRIX GRID WRAPPER API — UNRESOLVED — REPO SOURCE REQUIRED
```

Implementation must reuse/extend kit-level Matrix/Grid composition, never create a scene-local HTML table.

### MOTION PURPOSE
Recall.

## BEAT 05 — `S13_M1FLOW`

### ANCHOR / SPOKEN PHRASE
> Read from the original... write into another matrix.

### WHAT APPEARS NOW
Show one source→destination relation only.

### CENTER-STAGE HERO
Method1 dataflow.

### CAUSE
Narration summarizes.

### EFFECT / MOTION
No full trace.

### WHAT MUST NOT APPEAR YET
Method2.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
M1 summary.

### KIT / EXISTING SYSTEM
Matrix/Grid uses the approved kit-driven grammar:

```text
RoughBox   → fixed cells
ChalkText  → values / indices / annotation
theme.pivot → current cell
theme.cyan  → query / support
theme.warn  → wrong / overwrite risk
theme.good  → confirmed state
RoughLine / RoughCurve → semantic relation
BezierFlight → semantic value transfer
```

Permanent law:

```text
CELL POSITIONS STAY FIXED.
ROW/COLUMN GEOMETRY STAYS FIXED.
VALUES MOVE OR CHANGE.
```

`MatrixGrid` wrapper/API is not present in the supplied source subset:

```text
MATRIX GRID WRAPPER API — UNRESOLVED — REPO SOURCE REQUIRED
```

Implementation must reuse/extend kit-level Matrix/Grid composition, never create a scene-local HTML table.

### MOTION PURPOSE
Recall.

## BEAT 06 — `S13_M1SPACE`

### ANCHOR / SPOKEN PHRASE
> it uses `O of n squared` extra space.

### WHAT APPEARS NOW
Show duplicate-matrix memory + O(n²) space notation.

### CENTER-STAGE HERO
Method1 cost.

### CAUSE
Narration states.

### EFFECT / MOTION
Cause visible.

### WHAT MUST NOT APPEAR YET
Method2.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear M1 support.

### PERSISTENT STATE
M1 summarized.

### KIT / EXISTING SYSTEM
ChalkText + Matrix/Grid.

### MOTION PURPOSE
Recall.

## BEAT 07 — `S13_M2`

### ANCHOR / SPOKEN PHRASE
> Method Two removed the extra matrix.

### WHAT APPEARS NOW
Representation handoff two matrices→one matrix with active four-cycle relation.

### CENTER-STAGE HERO
Method2 identity.

### CAUSE
Narration transitions.

### EFFECT / MOTION
No full cycle animation.

### WHAT MUST NOT APPEAR YET
Temp before spoken.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep one matrix.

### PERSISTENT STATE
M2 recap.

### KIT / EXISTING SYSTEM
Matrix/Grid uses the approved kit-driven grammar:

```text
RoughBox   → fixed cells
ChalkText  → values / indices / annotation
theme.pivot → current cell
theme.cyan  → query / support
theme.warn  → wrong / overwrite risk
theme.good  → confirmed state
RoughLine / RoughCurve → semantic relation
BezierFlight → semantic value transfer
```

Permanent law:

```text
CELL POSITIONS STAY FIXED.
ROW/COLUMN GEOMETRY STAYS FIXED.
VALUES MOVE OR CHANGE.
```

`MatrixGrid` wrapper/API is not present in the supplied source subset:

```text
MATRIX GRID WRAPPER API — UNRESOLVED — REPO SOURCE REQUIRED
```

Implementation must reuse/extend kit-level Matrix/Grid composition, never create a scene-local HTML table.

### MOTION PURPOSE
Recall.

## BEAT 08 — `S13_CYCLES`

### ANCHOR / SPOKEN PHRASE
> form four-position cycles.

### WHAT APPEARS NOW
Highlight one representative four-position cycle.

### CENTER-STAGE HERO
Cycle identity.

### CAUSE
Narration states.

### EFFECT / MOTION
No moves.

### WHAT MUST NOT APPEAR YET
Temp.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
M2 structure.

### KIT / EXISTING SYSTEM
Matrix/Grid uses the approved kit-driven grammar:

```text
RoughBox   → fixed cells
ChalkText  → values / indices / annotation
theme.pivot → current cell
theme.cyan  → query / support
theme.warn  → wrong / overwrite risk
theme.good  → confirmed state
RoughLine / RoughCurve → semantic relation
BezierFlight → semantic value transfer
```

Permanent law:

```text
CELL POSITIONS STAY FIXED.
ROW/COLUMN GEOMETRY STAYS FIXED.
VALUES MOVE OR CHANGE.
```

`MatrixGrid` wrapper/API is not present in the supplied source subset:

```text
MATRIX GRID WRAPPER API — UNRESOLVED — REPO SOURCE REQUIRED
```

Implementation must reuse/extend kit-level Matrix/Grid composition, never create a scene-local HTML table.

### MOTION PURPOSE
Recall.

## BEAT 09 — `S13_SAVE`

### ANCHOR / SPOKEN PHRASE
> Save one value

### WHAT APPEARS NOW
Show temp token beside representative cycle.

### CENTER-STAGE HERO
Temp concept.

### CAUSE
Narration states.

### EFFECT / MOTION
No detailed move order until next phrase.

### WHAT MUST NOT APPEAR YET
Method3.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
M2 invariant.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Recall.

## BEAT 10 — `S13_ROTATE3`

### ANCHOR / SPOKEN PHRASE
> rotate the other three

### WHAT APPEARS NOW
Activate recap step `ROTATE OTHER THREE`; temp remains support.

### CENTER-STAGE HERO
Method2 rotate step.

### CAUSE
Narration states step2.

### EFFECT / MOTION
No detailed trace.

### WHAT MUST NOT APPEAR YET
Do not restore early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep process spine.

### PERSISTENT STATE
M2 recap progression.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Word-driven recap.

## BEAT 11 — `S13_RESTORE`

### ANCHOR / SPOKEN PHRASE
> restore the saved value

### WHAT APPEARS NOW
Activate `RESTORE`.

### CENTER-STAGE HERO
Method2 restore step.

### CAUSE
Narration states step3.

### EFFECT / MOTION
No detailed trace.

### WHAT MUST NOT APPEAR YET
Do not finish layer early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep process spine.

### PERSISTENT STATE
M2 recap progression.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Word-driven recap.

## BEAT 12 — `S13_FINISH_LAYER`

### ANCHOR / SPOKEN PHRASE
> finish the layer

### WHAT APPEARS NOW
Activate `FINISH LAYER`.

### CENTER-STAGE HERO
Layer-complete recap step.

### CAUSE
Narration states.

### EFFECT / MOTION
No inward move yet.

### WHAT MUST NOT APPEAR YET
Do not enter Method3.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
M2 recap progression.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Word-driven recap.

## BEAT 13 — `S13_MOVE_IN`

### ANCHOR / SPOKEN PHRASE
> then move inward.

### WHAT APPEARS NOW
Activate `MOVE INWARD`; recap process settles.

### CENTER-STAGE HERO
Move inward.

### CAUSE
Narration completes Method2 process.

### EFFECT / MOTION
No detailed trace.

### WHAT MUST NOT APPEAR YET
No complexity before spoken.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Prepare complexity.

### PERSISTENT STATE
M2 process summarized.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Word-driven recap.

## BEAT 14 — `S13_M2_TIME`

### ANCHOR / SPOKEN PHRASE
> `O of n squared` time

### WHAT APPEARS NOW
Show Method2 `O(n²) TIME`.

### CENTER-STAGE HERO
Method2 time.

### CAUSE
Narration states.

### EFFECT / MOTION
No space label yet.

### WHAT MUST NOT APPEAR YET
No Method3.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
M2 complexity partial.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Exact complexity coverage.

## BEAT 15 — `S13_M2_SPACE`

### ANCHOR / SPOKEN PHRASE
> and `O of one` extra space.

### WHAT APPEARS NOW
Add `O(1) EXTRA SPACE`; time remains support.

### CENTER-STAGE HERO
Method2 complexity pair.

### CAUSE
Narration completes complexity.

### EFFECT / MOTION
No Method3 early.

### WHAT MUST NOT APPEAR YET
Clear M2 recap after hold.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
M2 summarized.

### PERSISTENT STATE
ChalkText.

### KIT / EXISTING SYSTEM
Exact complexity coverage.

### MOTION PURPOSE
Teach exact semantic state.

## BEAT 16 — `S13_M3`

### ANCHOR / SPOKEN PHRASE
> Method Three looked at the same coordinate mapping differently.

### WHAT APPEARS NOW
Return mapping formula and two-step scaffold.

### CENTER-STAGE HERO
Method3 identity.

### CAUSE
Narration transitions.

### EFFECT / MOTION
No full trace.

### WHAT MUST NOT APPEAR YET
Transform names before spoken.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
M3 recap.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Recall.

## BEAT 17 — `S13_SPLIT`

### ANCHOR / SPOKEN PHRASE
> split it into two simple transformations.

### WHAT APPEARS NOW
Show two resolving stages.

### CENTER-STAGE HERO
Two-stage view.

### CAUSE
Narration states.

### EFFECT / MOTION
No execution.

### WHAT MUST NOT APPEAR YET
Roadmap.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
M3 concept.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Recall.

## BEAT 18 — `S13_TRANS`

### ANCHOR / SPOKEN PHRASE
> Transpose

### WHAT APPEARS NOW
Fill first stage TRANSPOSE.

### CENTER-STAGE HERO
Transpose.

### CAUSE
Narration names.

### EFFECT / MOTION
No second before spoken.

### WHAT MUST NOT APPEAR YET
Reverse rows.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
M3 stage1.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Recall.

## BEAT 19 — `S13_REV`

### ANCHOR / SPOKEN PHRASE
> then reverse every row.

### WHAT APPEARS NOW
Fill second stage REVERSE ROWS; arrow reaches clockwise mapping.

### CENTER-STAGE HERO
Method3 identity.

### CAUSE
Narration completes.

### EFFECT / MOTION
No trace.

### WHAT MUST NOT APPEAR YET
Roadmap.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
M3 summary.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Recall.

## BEAT 20 — `S13_M3_TIME`

### ANCHOR / SPOKEN PHRASE
> `O of n squared` time

### WHAT APPEARS NOW
Show Method3 `O(n²) TIME`.

### CENTER-STAGE HERO
Method3 time.

### CAUSE
Narration states.

### EFFECT / MOTION
No space label yet.

### WHAT MUST NOT APPEAR YET
No roadmap.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
M3 complexity partial.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Exact complexity coverage.

## BEAT 21 — `S13_M3_SPACE`

### ANCHOR / SPOKEN PHRASE
> and `O of one` extra space.

### WHAT APPEARS NOW
Add `O(1) EXTRA SPACE`; settle Method3 recap.

### CENTER-STAGE HERO
Method3 complexity pair.

### CAUSE
Narration states.

### EFFECT / MOTION
No roadmap yet.

### WHAT MUST NOT APPEAR YET
Clear method visuals after hold.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
All methods summarized.

### PERSISTENT STATE
ChalkText.

### KIT / EXISTING SYSTEM
Exact complexity coverage.

### MOTION PURPOSE
Teach exact semantic state.

## BEAT 22 — `S13_PATTERN`

### ANCHOR / SPOKEN PHRASE
> The bigger pattern is important.

### WHAT APPEARS NOW
Center `WRITE THE COORDINATE MAPPING FIRST`.

### CENTER-STAGE HERO
Transferable pattern.

### CAUSE
Narration broadens lesson.

### EFFECT / MOTION
No roadmap yet.

### WHAT MUST NOT APPEAR YET
Completion.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
General insight.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Transfer learning.

## BEAT 23 — `S13_WRITE`

### ANCHOR / SPOKEN PHRASE
> first write the coordinate mapping.

### WHAT APPEARS NOW
Canonical mapping appears beneath prompt.

### CENTER-STAGE HERO
Mapping-first strategy.

### CAUSE
Narration states.

### EFFECT / MOTION
No method-specific replay.

### WHAT MUST NOT APPEAR YET
Roadmap.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Transferable strategy.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Transfer learning.

## BEAT 24 — `S13_REVEAL_INTRO`

### ANCHOR / SPOKEN PHRASE
> That mapping may reveal

### WHAT APPEARS NOW
Show empty transferable-outcomes lane.

### CENTER-STAGE HERO
Transferable scaffold.

### CAUSE
Narration introduces possibilities.

### EFFECT / MOTION
No terms early.

### WHAT MUST NOT APPEAR YET
No roadmap.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep scaffold.

### PERSISTENT STATE
Transfer learning.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
No-spoiler reveal.

## BEAT 25 — `S13_REVEAL_CYCLE`

### ANCHOR / SPOKEN PHRASE
> a cycle

### WHAT APPEARS NOW
Reveal only `CYCLE`.

### CENTER-STAGE HERO
CYCLE.

### CAUSE
Narration names first possibility.

### EFFECT / MOTION
No later terms.

### WHAT MUST NOT APPEAR YET
No roadmap.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Outcome1.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Word-driven reveal.

## BEAT 26 — `S13_REVEAL_SYM`

### ANCHOR / SPOKEN PHRASE
> a symmetry

### WHAT APPEARS NOW
Reveal `SYMMETRY`; cycle recedes but remains readable.

### CENTER-STAGE HERO
SYMMETRY.

### CAUSE
Narration names second.

### EFFECT / MOTION
No decomposition early.

### WHAT MUST NOT APPEAR YET
No roadmap.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Outcome2.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Word-driven reveal.

## BEAT 27 — `S13_REVEAL_DECOMP`

### ANCHOR / SPOKEN PHRASE
> or a sequence of simpler transformations.

### WHAT APPEARS NOW
Reveal `DECOMPOSITION`; set complete.

### CENTER-STAGE HERO
DECOMPOSITION.

### CAUSE
Narration names third.

### EFFECT / MOTION
No roadmap state change yet.

### WHAT MUST NOT APPEAR YET
Do not complete Q14 early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Clear for roadmap handoff.

### PERSISTENT STATE
Transferable insight complete.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Word-driven reveal.

## BEAT 28 — `S13_Q14_NUM`

### ANCHOR / SPOKEN PHRASE
> Now Question Fourteen

### WHAT APPEARS NOW
Return permanent roadmap and focus Q14 ACTIVE only.

### CENTER-STAGE HERO
Q14 ACTIVE.

### CAUSE
Narration identifies question.

### EFFECT / MOTION
State unchanged.

### WHAT MUST NOT APPEAR YET
Do not mark complete.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep focus.

### PERSISTENT STATE
Q14 ACTIVE; global 13/227.

### KIT / EXISTING SYSTEM
Permanent roadmap UI.

### MOTION PURPOSE
Exact roadmap timing.

## BEAT 29 — `S13_Q14_TITLE`

### ANCHOR / SPOKEN PHRASE
> Rotate Image

### WHAT APPEARS NOW
Focus Q14 title; state remains ACTIVE.

### CENTER-STAGE HERO
Q14 title.

### CAUSE
Narration names problem.

### EFFECT / MOTION
No completion.

### WHAT MUST NOT APPEAR YET
Do not change progress.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Q14 ACTIVE.

### KIT / EXISTING SYSTEM
Permanent roadmap UI.

### MOTION PURPOSE
Exact roadmap timing.

## BEAT 30 — `S13_Q14_COMPLETE`

### ANCHOR / SPOKEN PHRASE
> is complete.

### WHAT APPEARS NOW
Change Q14 `ACTIVE → COMPLETE` exactly now.

### CENTER-STAGE HERO
Q14 COMPLETE.

### CAUSE
Narration authorizes completion.

### EFFECT / MOTION
Single state change.

### WHAT MUST NOT APPEAR YET
Do not increment global progress yet.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep complete.

### PERSISTENT STATE
Q14 COMPLETE; global 13/227.

### KIT / EXISTING SYSTEM
Permanent roadmap UI.

### MOTION PURPOSE
Exact completion timing.

## BEAT 31 — `S13_PROGRESS_INTRO`

### ANCHOR / SPOKEN PHRASE
> Our global progress moves from

### WHAT APPEARS NOW
Focus current `13/227`; no number change.

### CENTER-STAGE HERO
Global current progress.

### CAUSE
Narration opens update.

### EFFECT / MOTION
Attention only.

### WHAT MUST NOT APPEAR YET
Do not show 14 yet.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep 13.

### PERSISTENT STATE
13/227.

### KIT / EXISTING SYSTEM
Permanent roadmap UI.

### MOTION PURPOSE
Exact progress timing.

## BEAT 32 — `S13_PROGRESS_13`

### ANCHOR / SPOKEN PHRASE
> thirteen out of two hundred twenty-seven

### WHAT APPEARS NOW
Confirm current `13/227`; still no change.

### CENTER-STAGE HERO
13/227.

### CAUSE
Narration names old value.

### EFFECT / MOTION
No state change.

### WHAT MUST NOT APPEAR YET
Do not increment.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep old value.

### PERSISTENT STATE
13/227.

### KIT / EXISTING SYSTEM
Permanent roadmap UI.

### MOTION PURPOSE
Exact progress timing.

## BEAT 33 — `S13_PROGRESS_TO`

### ANCHOR / SPOKEN PHRASE
> to

### WHAT APPEARS NOW
Prepare transition only.

### CENTER-STAGE HERO
Progress transition.

### CAUSE
Narration links old→new.

### EFFECT / MOTION
No count change.

### WHAT MUST NOT APPEAR YET
Do not update before next anchor.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep 13/227.

### PERSISTENT STATE
13/227.

### KIT / EXISTING SYSTEM
Permanent roadmap UI.

### MOTION PURPOSE
No premature update.

## BEAT 34 — `S13_PROGRESS_14`

### ANCHOR / SPOKEN PHRASE
> fourteen out of two hundred twenty-seven.

### WHAT APPEARS NOW
Update global `13/227 → 14/227` exactly now.

### CENTER-STAGE HERO
14/227.

### CAUSE
Narration authorizes new value.

### EFFECT / MOTION
Use real roadmap progress component.

### WHAT MUST NOT APPEAR YET
Do not activate Q15.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep new value.

### PERSISTENT STATE
Q14 COMPLETE; global 14/227.

### KIT / EXISTING SYSTEM
Permanent roadmap UI.

### MOTION PURPOSE
Exact progress update.

## BEAT 35 — `S13_NEXT`

### ANCHOR / SPOKEN PHRASE
> And next in Arrays and Hashing

### WHAT APPEARS NOW
Shift focus to next roadmap item placeholder only if existing UI already shows it.

### CENTER-STAGE HERO
Next-problem handoff.

### CAUSE
Narration opens.

### EFFECT / MOTION
No Q15 name yet.

### WHAT MUST NOT APPEAR YET
Activation.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep roadmap.

### PERSISTENT STATE
Q14 complete.

### KIT / EXISTING SYSTEM
Use the existing permanent roadmap UI and actual roadmap data. Do not rebuild sidebar, progress pill, problem card, or rail.

```text
ROADMAP COMPONENT/API — UNRESOLVED — REPO SOURCE REQUIRED
```

### MOTION PURPOSE
Continuity.

## BEAT 36 — `S13_Q15_NUM`

### ANCHOR / SPOKEN PHRASE
> Question fifteen

### WHAT APPEARS NOW
Focus Q15 item as `UP NEXT`; title emphasis remains quiet until spoken.

### CENTER-STAGE HERO
Q15 UP NEXT item.

### CAUSE
Narration names number.

### EFFECT / MOTION
No activation.

### WHAT MUST NOT APPEAR YET
Do not reveal algorithm.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep item.

### PERSISTENT STATE
Q15 UP NEXT.

### KIT / EXISTING SYSTEM
Permanent roadmap UI.

### MOTION PURPOSE
Exact handoff timing.

## BEAT 37 — `S13_Q15_TITLE`

### ANCHOR / SPOKEN PHRASE
> Spiral Matrix.

### WHAT APPEARS NOW
Emphasize Q15 title while retaining `UP NEXT`.

### CENTER-STAGE HERO
Spiral Matrix UP NEXT.

### CAUSE
Narration names title.

### EFFECT / MOTION
No activation/preview.

### WHAT MUST NOT APPEAR YET
No Q15 matrix visual.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep final handoff.

### PERSISTENT STATE
Q15 UP NEXT; global 14/227.

### KIT / EXISTING SYSTEM
Permanent roadmap UI.

### MOTION PURPOSE
Exact title timing.

## BEAT 38 — `S13_UPNEXT`

### ANCHOR / SPOKEN PHRASE
> That is up next.

### WHAT APPEARS NOW
Settle roadmap final state; no further changes.

### CENTER-STAGE HERO
Final roadmap state.

### CAUSE
Narration closes.

### EFFECT / MOTION
No new state.

### WHAT MUST NOT APPEAR YET
Q15 activation.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
End frame persists.

### PERSISTENT STATE
Q14 COMPLETE; Q15 UP NEXT; global 14/227.

### KIT / EXISTING SYSTEM
Use the existing permanent roadmap UI and actual roadmap data. Do not rebuild sidebar, progress pill, problem card, or rail.

```text
ROADMAP COMPONENT/API — UNRESOLVED — REPO SOURCE REQUIRED
```

### MOTION PURPOSE
Final continuity.

---

# 9. CONTINUITY OUT

Final: Q14 Rotate Image COMPLETE; global 14/227; Q15 Spiral Matrix UP NEXT; rail focus 015; Q15 not ACTIVE.

---

# 10. ANTIGRAVITY POST-AUDIO CONVERSION

After final MP3 + exact word-sync JSON:

```text
anchor phrase
→ unique contiguous word IDs
→ exact seconds
→ startFrame = floor(start × 30)
→ endFrameExclusive = max(startFrame+1, ceil(end × 30))
→ SceneXX_FRAME_PLAN.md
```

Frame convention: `[startFrame,endFrameExclusive)`.
Antigravity resolves WHEN, not WHAT/WHY/ORDER/STATE.
No hold unless the audio contains a real gap. No approximate seconds or arbitrary frame offsets. `UNMATCHED ANCHORS = 0` before implementation.

---

# 11. IMPLEMENTATION GATE

Read actual repository component APIs before implementation. If required source is absent: `BLOCKED — SOURCE REQUIRED`.
