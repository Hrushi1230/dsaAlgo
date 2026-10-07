# Q14 — Rotate Image (LeetCode 48)
# Phase 9 · Scene 08 — Method 2 Is Already Optimal → Derive a Simpler Transformation View
## WORD-BASED VISUAL PLAN — NO GUESSED TIME / NO GUESSED FRAMES

**Scene purpose:** Protect the truth that Method2 is already optimal, identify its indexing burden, and derive the question of decomposing the same mapping into simpler transformations.

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

Method2 correct and optimal; mapping returns as bridge.

---

# 2. EXACT VERIFIED NARRATION

```text
Before we continue...

notice something important.

Method Two is not a failed solution.

Its time is already `O of n squared`.

Its extra space is already `O of one`.

So asymptotically...

we do not need a faster method.

The challenge is different.

The direct cycle solution needs several index relationships:

first...

last...

offset...

top...

right...

bottom...

left.

They are correct...

but they are easy to mix up.

So let’s return to the mathematical mapping.

A value at row `r`, column `c`...

must finally reach:

row `c`...

column `n minus one minus r`.

Instead of performing that complete movement in one step...

can we split it into two simpler transformations?

Yes.

First...

we can swap rows and columns.

Then...

we can flip the remaining horizontal direction.

That gives us the third method.
```

Only this spoken order authorizes reveals.

---

# 3. LOCKED SCENE TRUTH

No asymptotic improvement here. Method2 and Method3 both O(n²) time/O(1) space. Scene08 derives only a two-stage transformation view.

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

`MiniGraph.tsx` is sort-specific, so Q14 must use existing `RoughLine` / `RoughCurve` or extend/create a reusable kit-level complexity graph. No benchmark numbers. No unspoken variable such as `N`.

---

# 6. SCENE-SPECIFIC RULES

Never imply Method2 fails. Index names appear only when spoken. Do not reveal transpose/reverse before spoken descriptions. End with Method3 handoff only.

---

# 7. SEMANTIC ANCHOR MANIFEST

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S08_IMPORTANT` | `notice something important.` | Method2 status. |
| `S08_NOTFAIL` | `Method Two is not a failed solution.` | Method2 validity. |
| `S08_TIME` | `Its time is already `O of n squared`.` | O(n²) time. |
| `S08_SPACE` | `Its extra space is already `O of one`.` | Method2 complexity pair. |
| `S08_NOTFASTER` | `we do not need a faster method.` | No asymptotic need. |
| `S08_CHALLENGE` | `The challenge is different.` | Index complexity. |
| `S08_FIRST` | `first` | first. |
| `S08_LAST` | `last` | last. |
| `S08_OFFSET` | `offset` | offset. |
| `S08_TOP` | `top` | Four cycle index labels. |
| `S08_MIX` | `They are correct... but they are easy to mix up.` | Index burden. |
| `S08_MAPPING` | `So let’s return to the mathematical mapping.` | Mapping. |
| `S08_DEST` | `row `c`... column `n minus one minus r`.` | Destination formula. |
| `S08_SPLIT` | `can we split it into two simpler transformations?` | Two-step question. |
| `S08_YES` | `Yes.` | Two-stage scaffold. |
| `S08_SWAP` | `we can swap rows and columns.` | First transformation concept. |
| `S08_FLIP` | `we can flip the remaining horizontal direction.` | Second transform concept. |
| `S08_METHOD3` | `That gives us the third method.` | Method3 handoff. |

---

# 8. WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S08_IMPORTANT`

### ANCHOR / SPOKEN PHRASE
> notice something important.

### WHAT APPEARS NOW
Clear board to Method2 result summary; no new method visual.

### CENTER-STAGE HERO
Method2 status.

### CAUSE
Narration flags nuance.

### EFFECT / MOTION
No transform reveal.

### WHAT MUST NOT APPEAR YET
Transpose.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep summary.

### PERSISTENT STATE
Method2 context.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Direct attention.

## BEAT 02 — `S08_NOTFAIL`

### ANCHOR / SPOKEN PHRASE
> Method Two is not a failed solution.

### WHAT APPEARS NOW
Show CORRECT / IN PLACE beside Method2 identity.

### CENTER-STAGE HERO
Method2 validity.

### CAUSE
Narration corrects framing.

### EFFECT / MOTION
No warn styling.

### WHAT MUST NOT APPEAR YET
Method3.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Method2 correct.

### KIT / EXISTING SYSTEM
ChalkText + theme.good.

### MOTION PURPOSE
Accurate pedagogy.

## BEAT 03 — `S08_TIME`

### ANCHOR / SPOKEN PHRASE
> Its time is already `O of n squared`.

### WHAT APPEARS NOW
Recall O(n²) time as restrained support.

### CENTER-STAGE HERO
O(n²) time.

### CAUSE
Narration states status.

### EFFECT / MOTION
No new proof; proof was Scene07.

### WHAT MUST NOT APPEAR YET
Transpose.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep small.

### PERSISTENT STATE
Method2 complexity.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Recall.

## BEAT 04 — `S08_SPACE`

### ANCHOR / SPOKEN PHRASE
> Its extra space is already `O of one`.

### WHAT APPEARS NOW
Add O(1) space beside time.

### CENTER-STAGE HERO
Method2 complexity pair.

### CAUSE
Narration states.

### EFFECT / MOTION
No new graph.

### WHAT MUST NOT APPEAR YET
Method3.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Optimal pair.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Recall.

## BEAT 05 — `S08_NOTFASTER`

### ANCHOR / SPOKEN PHRASE
> we do not need a faster method.

### WHAT APPEARS NOW
Place subtle optimal/equivalence cue; no ranking.

### CENTER-STAGE HERO
No asymptotic need.

### CAUSE
Narration states.

### EFFECT / MOTION
No new object.

### WHAT MUST NOT APPEAR YET
Method3 reveal.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Reduce complexity summary.

### PERSISTENT STATE
Method2 remains valid.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Prevent false derivation.

## BEAT 06 — `S08_CHALLENGE`

### ANCHOR / SPOKEN PHRASE
> The challenge is different.

### WHAT APPEARS NOW
Clear complexity text; return one active four-cycle coordinate diagram.

### CENTER-STAGE HERO
Index complexity.

### CAUSE
Narration shifts criterion.

### EFFECT / MOTION
No transpose.

### WHAT MUST NOT APPEAR YET
Mapping formula until later.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep cycle support.

### PERSISTENT STATE
Method2 index structure.

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
Transition.

## BEAT 07 — `S08_FIRST`

### ANCHOR / SPOKEN PHRASE
> first

### WHAT APPEARS NOW
Reveal only `first` label on active layer.

### CENTER-STAGE HERO
first.

### CAUSE
Narration enumerates relation.

### EFFECT / MOTION
No other labels.

### WHAT MUST NOT APPEAR YET
last/offset/top/right/bottom/left.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Index set building.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Show burden.

## BEAT 08 — `S08_LAST`

### ANCHOR / SPOKEN PHRASE
> last

### WHAT APPEARS NOW
Add `last`.

### CENTER-STAGE HERO
last.

### CAUSE
Narration continues.

### EFFECT / MOTION
No future labels.

### WHAT MUST NOT APPEAR YET
offset/top/right/bottom/left.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Index set.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Show burden.

## BEAT 09 — `S08_OFFSET`

### ANCHOR / SPOKEN PHRASE
> offset

### WHAT APPEARS NOW
Add offset relation.

### CENTER-STAGE HERO
offset.

### CAUSE
Narration continues.

### EFFECT / MOTION
No future labels.

### WHAT MUST NOT APPEAR YET
top/right/bottom/left.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Index set.

### KIT / EXISTING SYSTEM
ChalkText + RoughLine.

### MOTION PURPOSE
Show burden.

## BEAT 10 — `S08_TOP`

### ANCHOR / SPOKEN PHRASE
> top

### WHAT APPEARS NOW
Add top; as right/bottom/left are spoken, add one label at a time.

### CENTER-STAGE HERO
Four cycle index labels.

### CAUSE
Narration lists positions.

### EFFECT / MOTION
No new algorithm.

### WHAT MUST NOT APPEAR YET
Transform view.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep until conclusion.

### PERSISTENT STATE
Index-heavy cycle diagram.

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
Show cognitive load.

## BEAT 11 — `S08_RIGHT`

### ANCHOR / SPOKEN PHRASE
> right

### WHAT APPEARS NOW
Add only `right` label.

### CENTER-STAGE HERO
right role.

### CAUSE
Narration lists next index relationship.

### EFFECT / MOTION
No transform reveal.

### WHAT MUST NOT APPEAR YET
Do not add bottom/left early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep labels.

### PERSISTENT STATE
Index set growing.

### KIT / EXISTING SYSTEM
ChalkText + Matrix/Grid.

### MOTION PURPOSE
Word-driven reveal.

## BEAT 12 — `S08_BOTTOM`

### ANCHOR / SPOKEN PHRASE
> bottom

### WHAT APPEARS NOW
Add `bottom` label.

### CENTER-STAGE HERO
bottom role.

### CAUSE
Narration lists.

### EFFECT / MOTION
No transform reveal.

### WHAT MUST NOT APPEAR YET
Do not add left early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep labels.

### PERSISTENT STATE
Index set growing.

### KIT / EXISTING SYSTEM
ChalkText + Matrix/Grid.

### MOTION PURPOSE
Word-driven reveal.

## BEAT 13 — `S08_LEFT`

### ANCHOR / SPOKEN PHRASE
> left.

### WHAT APPEARS NOW
Add `left`; complete the seven-name Method2 index set.

### CENTER-STAGE HERO
left role.

### CAUSE
Narration completes list.

### EFFECT / MOTION
No Method3 yet.

### WHAT MUST NOT APPEAR YET
No transform reveal.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep until next beat.

### PERSISTENT STATE
Index-heavy cycle diagram.

### KIT / EXISTING SYSTEM
ChalkText + Matrix/Grid.

### MOTION PURPOSE
Complete list.

## BEAT 14 — `S08_MIX`

### ANCHOR / SPOKEN PHRASE
> They are correct... but they are easy to mix up.

### WHAT APPEARS NOW
Keep labels briefly, then recede them to chalkDim.

### CENTER-STAGE HERO
Index burden.

### CAUSE
Narration states challenge.

### EFFECT / MOTION
No failure styling.

### WHAT MUST NOT APPEAR YET
Transpose.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear cycle labels.

### PERSISTENT STATE
Return mapping.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Motivate alternate representation.

## BEAT 15 — `S08_MAPPING`

### ANCHOR / SPOKEN PHRASE
> So let’s return to the mathematical mapping.

### WHAT APPEARS NOW
Canonical `(r,c)→(c,n-1-r)` becomes hero.

### CENTER-STAGE HERO
Mapping.

### CAUSE
Narration returns to truth.

### EFFECT / MOTION
Cycle disappears.

### WHAT MUST NOT APPEAR YET
Decomposition.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep mapping.

### PERSISTENT STATE
Canonical rule.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Semantic bridge.

## BEAT 16 — `S08_SOURCE_COORD`

### ANCHOR / SPOKEN PHRASE
> A value at row `r`, column `c`

### WHAT APPEARS NOW
Show `(r,c)` as source in canonical mapping.

### CENTER-STAGE HERO
Source coordinate.

### CAUSE
Narration reintroduces source.

### EFFECT / MOTION
No destination values yet.

### WHAT MUST NOT APPEAR YET
Do not decompose.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep source.

### PERSISTENT STATE
Mapping scaffold.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Precise recap.

## BEAT 17 — `S08_MUST`

### ANCHOR / SPOKEN PHRASE
> must finally reach:

### WHAT APPEARS NOW
Show unresolved destination slot/arrow.

### CENTER-STAGE HERO
Destination question.

### CAUSE
Narration sets target.

### EFFECT / MOTION
No row/column values yet.

### WHAT MUST NOT APPEAR YET
Do not fill early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep scaffold.

### PERSISTENT STATE
Mapping unresolved.

### KIT / EXISTING SYSTEM
RoughLine + ChalkText.

### MOTION PURPOSE
Cause setup.

## BEAT 18 — `S08_ROW_C`

### ANCHOR / SPOKEN PHRASE
> row `c`

### WHAT APPEARS NOW
Fill destination row only.

### CENTER-STAGE HERO
Destination row c.

### CAUSE
Narration states first component.

### EFFECT / MOTION
No column expression yet.

### WHAT MUST NOT APPEAR YET
No decomposition.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Partial destination.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Word-driven mapping.

## BEAT 19 — `S08_COL_EXPR`

### ANCHOR / SPOKEN PHRASE
> column `n minus one minus r`.

### WHAT APPEARS NOW
Fill destination column; canonical mapping complete.

### CENTER-STAGE HERO
Canonical destination.

### CAUSE
Narration completes target.

### EFFECT / MOTION
No transform labels yet.

### WHAT MUST NOT APPEAR YET
Do not split before next question.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep mapping.

### PERSISTENT STATE
Mapping complete.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Precise mapping.

## BEAT 20 — `S08_SPLIT`

### ANCHOR / SPOKEN PHRASE
> can we split it into two simpler transformations?

### WHAT APPEARS NOW
Break arrow into `(r,c) → ? → (c,n-1-r)`.

### CENTER-STAGE HERO
Two-step question.

### CAUSE
Narration asks.

### EFFECT / MOTION
Placeholders only.

### WHAT MUST NOT APPEAR YET
Transpose/reverse.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep middle unknown.

### PERSISTENT STATE
Decomposition question.

### KIT / EXISTING SYSTEM
ChalkText + RoughLine.

### MOTION PURPOSE
Derive method.

## BEAT 21 — `S08_YES`

### ANCHOR / SPOKEN PHRASE
> Yes.

### WHAT APPEARS NOW
Confirm two-stage scaffold only.

### CENTER-STAGE HERO
Two-stage scaffold.

### CAUSE
Narration answers possibility.

### EFFECT / MOTION
No transform names.

### WHAT MUST NOT APPEAR YET
Swap rows/columns before next phrase.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Method3 possibility.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Transition.

## BEAT 22 — `S08_SWAP`

### ANCHOR / SPOKEN PHRASE
> we can swap rows and columns.

### WHAT APPEARS NOW
Fill first stage `(r,c)→(c,r)` with spoken label SWAP ROW / COLUMN; faint diagonal cue on matrix support.

### CENTER-STAGE HERO
First transformation concept.

### CAUSE
Narration reveals semantic transform.

### EFFECT / MOTION
No full execution.

### WHAT MUST NOT APPEAR YET
Reverse-row concept.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep stage1.

### PERSISTENT STATE
First transform derived.

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
ChalkText.

### MOTION PURPOSE
No-spoiler derivation.

## BEAT 23 — `S08_FLIP`

### ANCHOR / SPOKEN PHRASE
> we can flip the remaining horizontal direction.

### WHAT APPEARS NOW
Fill second stage `(c,r)→(c,n-1-r)` as horizontal row reflection concept.

### CENTER-STAGE HERO
Second transform concept.

### CAUSE
Narration reveals second transform.

### EFFECT / MOTION
No full execution.

### WHAT MUST NOT APPEAR YET
Formal Method3 proof.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep two-stage mapping.

### PERSISTENT STATE
Decomposition known.

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
ChalkText.

### MOTION PURPOSE
Derive transform.

## BEAT 24 — `S08_METHOD3`

### ANCHOR / SPOKEN PHRASE
> That gives us the third method.

### WHAT APPEARS NOW
Show minimal METHOD 3 identity; no trace state.

### CENTER-STAGE HERO
Method3 handoff.

### CAUSE
Narration names method number.

### EFFECT / MOTION
Two-stage scaffold persists.

### WHAT MUST NOT APPEAR YET
Full matrix transform.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
End on scaffold.

### PERSISTENT STATE
Method3 concept ready.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Continuity.

---

# 9. CONTINUITY OUT

Scene09 starts from `(r,c) → (c,r) → (c,n-1-r)` conceptual scaffold; formal transpose/reverse proof not yet executed.

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
