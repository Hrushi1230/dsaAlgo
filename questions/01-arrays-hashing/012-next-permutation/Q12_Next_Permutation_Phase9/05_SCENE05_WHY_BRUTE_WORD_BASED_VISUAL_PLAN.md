# Q12 — Next Permutation (LC 31)
# Phase 9 · Scene 05 — Why Brute Force Fails → Derive Better Direction
## WORD-BASED VISUAL PLAN — SEMANTIC FRAME PLAN WITHOUT GUESSED TIME

**Scene purpose:** Prove why Method 1 is structurally wrong for the constraints, teach factorial growth and memory failure, then derive—without jumping ahead—that the smallest valid lexicographic change should be made as far right as possible.

---

# 0. ABSOLUTE SOURCE PRIORITY

Use, in order:

1. this approved word-based plan;
2. verified Q12 narration;
3. locked Q12 Phase-5 teaching truth;
4. previous scene's actual approved final state;
5. project `SKILL.md` / Word-Driven Motion Skill;
6. actual Foundation V2 / `@dsa/kit` implementation;
7. final scene MP3;
8. final exact word-sync JSON.

If a source does not support a visual/state/component assumption, do not fill the gap.

```text
UNRESOLVED — SOURCE REQUIRED
```

---

# 1. CONTINUITY IN

Scene05 inherits Method1's unresolved cost question:

```text
METHOD 1 · BRUTE FORCE
COST ?
```

Code is no longer the hero.

---

# 2. EXACT NARRATION SOURCE

```text
If the array has n distinct values...

the number of possible permutations is n factorial.

Three values give only six permutations.

But factorial growth becomes huge very quickly.

And we would have to store many of those permutations...

so this also breaks the constant-extra-space requirement.

So generating every arrangement...

just to move one step forward...

is doing far too much work.

We already have the current permutation.

We should use its structure.

Think about what "next" really means.

We want the smallest possible change...

that makes the array larger.

If we change something too far to the left...

the jump becomes unnecessarily large.

So we should try to make the change...

as far to the right as possible.

That gives us our first clue.

Look from the right side of the array...

and find the first place...

where a larger arrangement is still possible.

Now we can build the optimal idea carefully.
```

The plan may visualize only what the narration has reached.

---

# 3. LOCKED SCENE TRUTH

Brute-force truth:

```text
n distinct values → n! permutations
3! = 6
materializing many permutations ≠ O(1) extra space
```

Optimal clue derived here only:

```text
NEXT
→ smallest valid change
→ change as far right as possible
→ search from right for first place where increase is possible
```

Do NOT name/show the pivot index or successor in Scene05.

---


# GLOBAL WORD-DRIVEN VISUAL LAW

This scene is **not a slide deck** and **not a dashboard**.

Permanent rule:

```text
NARRATION WORD / PHRASE
→ SHOW ONLY WHAT IS NEEDED NOW
→ ONE MAIN IDEA OWNS CENTER STAGE
→ MOTION MUST TEACH
→ SETTLE
→ REMOVE / REDUCE WHEN ITS JOB IS FINISHED
→ NEXT IDEA
```

Every motion must do at least one:

1. teach algorithm state;
2. show cause → effect;
3. direct attention;
4. preserve semantic continuity during transition.

If it does none of these, do not animate it.

Default visual budget:

```text
1 PRIMARY HERO
+ 1 DIRECT SUPPORT OBJECT
+ captions
```

More simultaneous objects are allowed only when the algorithm truth itself requires them.

Do not leave old teaching objects parked around the board after their job is over.


---


# FOUNDATION V2 / KIT-ONLY LOCK

For every structure, inspect the real repository first.

## Arrays — no exceptions

Every array representation — master, mini, conceptual, edge-case, code-proof, recap, or temporary — must use the existing Array V2 visual grammar:

```text
ArrayTrackV2
ArraySlotV2
ArrayValueV2
ArrayIndexRowV2
```

Permanent law:

```text
SLOTS STAY FIXED.
VALUES MOVE.
INDICES NEVER MOVE.
```

## Pointers / range / movement

Use existing Foundation V2 primitives where the real API supports the semantic job:

```text
PointerLaneV2
PartitionBandV2 or existing range-band equivalent
BezierFlight / existing deterministic movement helper
RoughLine
RoughCurve
ParametricArrow or existing arrow primitive
ChalkText
Captions
```

Never rebuild these concepts with raw scene-local `<div>` boxes or ad-hoc SVG if the kit already supports them.

## Code

Code scenes must reuse the existing production code component. No fake black IDE and no generic editor panel.

## Graphs

Inspect the actual graph primitives before use. The supplied `MiniGraph` implementation is currently sort-oriented and directly supports `O(1)`, `O(n)`, `O(n log n)` and `O(n²)`-style curves, but not factorial growth as a generic reusable API. If `n!` is required, **EXTEND the kit-level graph primitive or create a reusable kit-level complexity-curve primitive**. Do not create a Scene-05-only or Scene-09-only chart.

## Decision order

```text
REUSE
→ EXTEND existing reusable primitive
→ CREATE reusable kit-level primitive only if genuinely absent
```

Never choose a scene-local shortcut because it is faster.


---

# 6. SCENE-SPECIFIC RULES

- Factorial graph represents mathematical growth only—no benchmark data.
- Supplied `MiniGraph` is not a generic factorial graph; Antigravity must EXTEND/CREATE a reusable kit-level complexity graph after repo audit, not a scene-local chart.
- The left-side-change illustration is positional only; never fabricate a wrong output permutation.
- Do not execute the real pivot comparisons here.
- End with original master input and unresolved right-to-left scan clue.

---

# 7. SEMANTIC ANCHOR MANIFEST — NO TIME / NO FRAMES

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S05_N_DISTINCT` | `If the array has n distinct values` | Input-size symbol `n`. |
| `S05_FACTORIAL` | `the number of possible permutations is n factorial` | `n!`. |
| `S05_THREE` | `Three values give only six permutations` | `3! = 6`. |
| `S05_HUGE` | `factorial growth becomes huge very quickly` | Factorial growth curve. |
| `S05_STORAGE` | `we would have to store many of those permutations` | Memory burden. |
| `S05_SPACE_BREAK` | `this also breaks the constant-extra-space requirement` | Space-constraint violation. |
| `S05_TOO_MUCH` | `generating every arrangement just to move one step forward is doing far too much work` | Waste contrast. |
| `S05_CURRENT_EXISTS` | `We already have the current permutation` | Current master permutation. |
| `S05_USE_STRUCTURE` | `We should use its structure` | Current arrangement as information. |
| `S05_NEXT_MEANING` | `Think about what next really means` | Definition applied to current state. |
| `S05_SMALLEST_CHANGE` | `We want the smallest possible change` | Minimal change objective. |
| `S05_MAKES_LARGER` | `that makes the array larger` | Minimal valid increase concept. |
| `S05_TOO_FAR_LEFT` | `If we change something too far to the left` | Earlier-position hypothesis. |
| `S05_JUMP` | `the jump becomes unnecessarily large` | Why earlier change is too large. |
| `S05_FAR_RIGHT` | `we should try to make the change as far to the right as possible` | Rightmost-change principle. |
| `S05_FIRST_CLUE` | `That gives us our first clue` | First optimal clue. |
| `S05_LOOK_RIGHT` | `Look from the right side of the array` | Right-to-left search direction. |
| `S05_FIRST_PLACE` | `find the first place` | Unresolved first valid place. |
| `S05_LARGER_POSSIBLE` | `where a larger arrangement is still possible` | The criterion question. |
| `S05_BUILD_OPTIMAL` | `Now we can build the optimal idea carefully` | Optimal-method handoff. |

No seconds or frame numbers belong here before the final MP3 + exact sync JSON exist.

---

# 8. WORD-BASED CHOREOGRAPHY


## BEAT 01 — `S05_N_DISTINCT`

### SPOKEN PHRASE
`If the array has n distinct values`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Clear code remnants. Center typography introduces only `n distinct values`.

### CENTER-STAGE HERO
Input-size symbol `n`.

### KIT / EXISTING SYSTEM
ChalkText.

### CAUSE
Narration defines factorial worst-case context.

### EFFECT / MOTION
Write `n DISTINCT VALUES`; no formula yet.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No `n!` before next phrase.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep `n` context.

### MINIMUM PERSISTENT STATE
`n distinct values`.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 02 — `S05_FACTORIAL`

### SPOKEN PHRASE
`the number of possible permutations is n factorial`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Build `PERMUTATIONS = n!` now.

### CENTER-STAGE HERO
`n!`.

### KIT / EXISTING SYSTEM
ChalkText + kit-level complexity graph primitive extended to factorial if necessary.

### CAUSE
Narration authorizes factorial count.

### EFFECT / MOTION
Equation writes in semantic order; then a factorial complexity curve can begin only as supporting mathematical shape, not benchmark data.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No invented runtime numbers.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep `n!` for the next concrete 3-value fact.

### MINIMUM PERSISTENT STATE
`n!`.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 03 — `S05_THREE`

### SPOKEN PHRASE
`Three values give only six permutations`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Show exact mathematical fact `3! = 6`, tied to Scene03's already-known six permutations; do not replay all six arrays.

### CENTER-STAGE HERO
`3! = 6`.

### KIT / EXISTING SYSTEM
ChalkText.

### CAUSE
Narration gives concrete count.

### EFFECT / MOTION
Transform `n!` to `3! = 6`, then back to general context.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No 4!,5! invented counts unless script says them.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Concrete equation exits after comprehension.

### MINIMUM PERSISTENT STATE
General `n!` remains.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 04 — `S05_HUGE`

### SPOKEN PHRASE
`factorial growth becomes huge very quickly`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Factorial curve becomes center stage and draws left→right/upward using mathematical growth shape; axes may be symbolic `n` vs growth, with no fake measured values.

### CENTER-STAGE HERO
Factorial growth curve.

### KIT / EXISTING SYSTEM
Reusable kit-level complexity graph; current MiniGraph must be extended/genericized for factorial rather than scene-local chart.

### CAUSE
Narration describes growth.

### EFFECT / MOTION
Draw `n!` curve; prior 3! note disappears.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No benchmark ms/operations; no exact other n values.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Curve settles then prepares for storage explanation.

### MINIMUM PERSISTENT STATE
`n!` label can remain compact.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 05 — `S05_STORAGE`

### SPOKEN PHRASE
`we would have to store many of those permutations`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Curve reduces. A growing stack/stream of permutation identities flows into a `STORED` reservoir concept—use prior mini Array V2 identities or symbolic tuple rows, not generic cards.

### CENTER-STAGE HERO
Memory burden.

### KIT / EXISTING SYSTEM
Array V2 mini tracks or ChalkText identities.

### CAUSE
Narration introduces storage.

### EFFECT / MOTION
Cause→effect: many generated arrangements → many stored arrangements.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No invented memory MB/bytes.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Reduce storage field after constraint conclusion.

### MINIMUM PERSISTENT STATE
`MANY PERMUTATIONS` concept.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 06 — `S05_SPACE_BREAK`

### SPOKEN PHRASE
`this also breaks the constant-extra-space requirement`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
`O(1) EXTRA SPACE` appears as required constraint and receives a clear conflict mark against stored permutations.

### CENTER-STAGE HERO
Space-constraint violation.

### KIT / EXISTING SYSTEM
ChalkText/RoughLine.

### CAUSE
Narration states why brute force violates requirement.

### EFFECT / MOTION
Show `STORE MANY` vs `O(1)` incompatibility.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No optimal method yet.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Conflict settles then clears.

### MINIMUM PERSISTENT STATE
Constraint truth remembered conceptually.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 07 — `S05_TOO_MUCH`

### SPOKEN PHRASE
`generating every arrangement just to move one step forward is doing far too much work`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Center shows contrast: `GENERATE EVERYTHING` on one side/previous representation, then compresses to `MOVE ONE STEP` as the desired job.

### CENTER-STAGE HERO
Waste contrast.

### KIT / EXISTING SYSTEM
ChalkText.

### CAUSE
Narration summarizes overwork.

### EFFECT / MOTION
Many→one contrast; do not keep graph, storage, and array simultaneously.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No right-scan clue yet.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Clear brute-force visuals completely after this beat.

### MINIMUM PERSISTENT STATE
Only `MOVE ONE STEP` question remains.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 08 — `S05_CURRENT_EXISTS`

### SPOKEN PHRASE
`We already have the current permutation`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Bring locked master Array V2 `[2,1,5,4,4,3,0]` into center.

### CENTER-STAGE HERO
Current master permutation.

### KIT / EXISTING SYSTEM
ArrayTrackV2 + ArraySlotV2 + ArrayValueV2 + ArrayIndexRowV2.

### CAUSE
Narration shifts from enumeration to existing structure.

### EFFECT / MOTION
Master array appears as the single useful object we already possess.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No pointer/pivot yet.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep master array.

### MINIMUM PERSISTENT STATE
Exact master input.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 09 — `S05_USE_STRUCTURE`

### SPOKEN PHRASE
`We should use its structure`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
A subtle chalk bracket under the master array labels `USE THIS STRUCTURE`.

### CENTER-STAGE HERO
Current arrangement as information.

### KIT / EXISTING SYSTEM
RoughLine/ChalkText.

### CAUSE
Narration states strategy change.

### EFFECT / MOTION
Direct attention to actual ordering inside current array.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No suffix/pivot identification yet.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Remove text label after it redirects attention.

### MINIMUM PERSISTENT STATE
Master array.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 10 — `S05_NEXT_MEANING`

### SPOKEN PHRASE
`Think about what next really means`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Master array stays; unresolved `NEXT ?` appears beyond it.

### CENTER-STAGE HERO
Definition applied to current state.

### KIT / EXISTING SYSTEM
Array V2 + ChalkText.

### CAUSE
Narration reopens next as optimization target.

### EFFECT / MOTION
Bring semantic `NEXT ?` close to array.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No result values.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep.

### MINIMUM PERSISTENT STATE
Master + NEXT ?.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 11 — `S05_SMALLEST_CHANGE`

### SPOKEN PHRASE
`We want the smallest possible change`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
`SMALLEST CHANGE` becomes center; array remains support.

### CENTER-STAGE HERO
Minimal change objective.

### KIT / EXISTING SYSTEM
ChalkText.

### CAUSE
Narration gives objective.

### EFFECT / MOTION
Direct attention to minimality.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No concrete swap.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep as concept for next phrase.

### MINIMUM PERSISTENT STATE
Master + minimality note.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 12 — `S05_MAKES_LARGER`

### SPOKEN PHRASE
`that makes the array larger`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Add condition `BUT > CURRENT` to minimality relation: `SMALLEST CHANGE → GREATER`.

### CENTER-STAGE HERO
Minimal valid increase concept.

### KIT / EXISTING SYSTEM
ChalkText/RoughLine.

### CAUSE
Narration adds strict larger requirement.

### EFFECT / MOTION
Complete semantic objective.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No pivot/successor.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep.

### MINIMUM PERSISTENT STATE
Objective relation.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 13 — `S05_TOO_FAR_LEFT`

### SPOKEN PHRASE
`If we change something too far to the left`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Highlight only a left-side position region of the master array as a hypothetical location; do NOT alter values.

### CENTER-STAGE HERO
Earlier-position hypothesis.

### KIT / EXISTING SYSTEM
Array V2 slot focus only.

### CAUSE
Narration introduces bad direction.

### EFFECT / MOTION
Use positional emphasis, not a fabricated swap.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No output array/result from hypothetical change.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep highlight into consequence phrase.

### MINIMUM PERSISTENT STATE
Master array with left position focus.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 14 — `S05_JUMP`

### SPOKEN PHRASE
`the jump becomes unnecessarily large`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
A lexicographic weight/impact indicator expands from that earlier position toward the right, showing that earlier-position changes dominate later digits. Do not compute a fake numeric gap.

### CENTER-STAGE HERO
Why earlier change is too large.

### KIT / EXISTING SYSTEM
RoughLine/arrow + slot focus.

### CAUSE
Narration gives consequence.

### EFFECT / MOTION
Cause→effect: earlier position → larger lexicographic jump.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No actual new permutation.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Clear hypothetical left emphasis after proof.

### MINIMUM PERSISTENT STATE
Master array returns neutral.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 15 — `S05_FAR_RIGHT`

### SPOKEN PHRASE
`we should try to make the change as far to the right as possible`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Attention glides to the right edge of the same master array; a scan-origin marker appears at the right side only.

### CENTER-STAGE HERO
Rightmost-change principle.

### KIT / EXISTING SYSTEM
PointerLaneV2 only if used as a generic scan marker without naming `i`; otherwise existing arrow primitive.

### CAUSE
Narration derives direction.

### EFFECT / MOTION
Direct attention from left→right; no pointer index yet.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No exact pivot, no comparison values.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep right-edge scan-origin clue.

### MINIMUM PERSISTENT STATE
Master array + right-origin clue.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 16 — `S05_FIRST_CLUE`

### SPOKEN PHRASE
`That gives us our first clue`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Write compact clue `CHANGE AS FAR RIGHT AS POSSIBLE`.

### CENTER-STAGE HERO
First optimal clue.

### KIT / EXISTING SYSTEM
ChalkText.

### CAUSE
Narration names clue.

### EFFECT / MOTION
Freeze concept briefly.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No full algorithm summary.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Reduce clue to support text.

### MINIMUM PERSISTENT STATE
Master array.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 17 — `S05_LOOK_RIGHT`

### SPOKEN PHRASE
`Look from the right side of the array`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
A scan direction arrow/path traces from the right edge toward the left above/below the master array.

### CENTER-STAGE HERO
Right-to-left search direction.

### KIT / EXISTING SYSTEM
Existing arrow/RoughLine; no guessed coordinates.

### CAUSE
Narration authorizes scan direction.

### EFFECT / MOTION
Show direction only; do not stop anywhere yet.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No pivot index or suffix band.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep scan direction.

### MINIMUM PERSISTENT STATE
Master array + directional trace.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 18 — `S05_FIRST_PLACE`

### SPOKEN PHRASE
`find the first place`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
One unresolved moving scan focus starts traversing candidate pair positions from right to left conceptually, but does not evaluate exact Phase-5 comparisons here.

### CENTER-STAGE HERO
Unresolved first valid place.

### KIT / EXISTING SYSTEM
PointerLaneV2 or existing scan focus.

### CAUSE
Narration says find first place.

### EFFECT / MOTION
Show search action without full trace.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No `i=1` reveal.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep unresolved marker.

### MINIMUM PERSISTENT STATE
Master + scan.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 19 — `S05_LARGER_POSSIBLE`

### SPOKEN PHRASE
`where a larger arrangement is still possible`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Current scan focus resolves into a `CAN INCREASE ?` question without exposing the answer.

### CENTER-STAGE HERO
The criterion question.

### KIT / EXISTING SYSTEM
ChalkText + pointer/scan primitive.

### CAUSE
Narration defines what search seeks.

### EFFECT / MOTION
Attach semantic question to search marker.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No pivot name, exact index, successor, reverse.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep unresolved question for next scene.

### MINIMUM PERSISTENT STATE
Master array + right-to-left scan clue.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 20 — `S05_BUILD_OPTIMAL`

### SPOKEN PHRASE
`Now we can build the optimal idea carefully`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Brute-force remnants are gone. Master array recenters with the unresolved right-scan clue; `METHOD 2 · OPTIMAL` appears only now.

### CENTER-STAGE HERO
Optimal-method handoff.

### KIT / EXISTING SYSTEM
Array V2 + existing approach-title grammar.

### CAUSE
Narration transitions methods.

### EFFECT / MOTION
Representation handoff into Scene06, no mechanics beyond discovered clue.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No full optimal solution yet.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
End clean.

### MINIMUM PERSISTENT STATE
Original master input + right-scan clue + Method2 identity.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



---

# 9. CONTINUITY OUT

End state for Scene06:

```text
METHOD 2 · OPTIMAL
MASTER [2,1,5,4,4,3,0]
right-to-left scan clue
criterion unresolved: "first place where increase is possible"
```

No pivot index has been revealed yet.

---


# MANDATORY ANTIGRAVITY WORD-SYNC → EXACT FRAME-PLAN CONTRACT

This section is part of the approved Scene 05 plan. It is **not optional**.

The future final MP3 and exact word-sync JSON provide **WHEN**.  
This document provides **WHAT / WHY / ORDER / STATE / ENTER / EXIT / KIT / NO-SPOILER**.

Antigravity must preserve every semantic beat below.

## 1. Required inputs before exact frame planning

All must exist:

1. this approved Scene 05 word-based plan;
2. final Scene 05 MP3;
3. exact Scene 05 word-sync JSON matching that MP3;
4. verified Q12 script;
5. verified Q12 teaching trace where algorithm state is involved;
6. actual previous-scene implemented final state;
7. actual Foundation V2 / repo components;
8. authoritative project FPS / audio-sync helper.

If MP3 or sync JSON is missing:

```text
SCENE 05 FRAME PLAN: BLOCKED
REASON: EXACT AUDIO SOURCE REQUIRED
```

No WPM estimate. No guessed seconds. No guessed frames.

## 2. Do not reduce this semantic plan

When converting to exact frames, do NOT:

- summarize beats;
- merge beats merely because timing is tight;
- remove a spoken-value reveal;
- remove a code typing beat;
- remove a pointer move;
- remove a cleanup/exit;
- drop `WHAT MUST NOT APPEAR YET`;
- drop persistent-state requirements;
- replace semantic motion with generic fades;
- invent alternate choreography;
- pre-reveal future information.

If a real audio window is short, simplify the **amplitude/complexity** of the motion, not the semantic content.

## 3. Raw sync is immutable

Do not edit the raw sync JSON.

Create ordered stable word IDs:

```text
W0000
W0001
W0002
...
```

Repeated words must resolve by ordered identity, not fragile string search.

Keep both:

```text
raw_sync_text
normalized_script_phrase
```

If transcription differs from the script, use word order + neighbors + audio position + script context. If mapping is ambiguous:

```text
UNRESOLVED — SOURCE REQUIRED
```

## 4. Resolve every approved semantic anchor

For every `S05_*` anchor write a derived manifest containing:

```text
anchor_id
normalized_phrase
start_word_id
end_word_id
start_time
end_time
start_frame
end_frame_exclusive
next_anchor_start_word_id
next_anchor_start_time
next_anchor_start_frame
available_pause_seconds
available_pause_frames
```

Create the scene anchor file using the real project naming convention, e.g.:

```text
sync/05-why-brute.anchors.json
```

Every approved anchor must resolve. Zero dropped anchors.

## 5. Frame conversion convention

Use the actual project audio/frame helper (`audioSyncV2` or current repo equivalent after inspection).

Do not invent a separate rounding rule.

Use:

```text
[startFrame, endFrameExclusive)
```

If `duration_frames = N`:

```text
valid rendered frames = 0 .. N-1
exclusive scene boundary = N
```

## 6. Sub-actions inside an anchor

Do not invent `30% / 40% / 30%` timing.

Bind sub-actions to actual words/subphrases or a real pause.

Examples:

```text
"Move left"
→ pointer starts moving only on "Move/left"

"swap five and zero"
→ value flight begins only when the swap phrase is spoken

"types code"
→ characters are distributed deterministically across the exact line/phrase window
```

If the narration does not provide enough time for an elaborate motion, simplify the motion while preserving the state change.

## 7. Real pauses only

A comprehension hold exists only when the sync contains real space before the next semantic phrase.

Compute it from real anchor timing.

Do not invent a hold or extend scene duration.

## 8. Geometry — zero guessing

The word plan intentionally avoids guessed pixel coordinates.

Frame planning/implementation must derive geometry from:

- real existing component bounds;
- kit constants;
- Array V2 slot centers;
- actual pointer lanes;
- real code layout;
- real roadmap/problem-opener geometry;
- deterministic layout functions.

Forbidden:

```text
approximately 40px
looks good around x=...
move it a little
guess center
```

If geometry cannot be derived:

```text
UNRESOLVED — SOURCE REQUIRED
```

## 9. Component audit before implementation

Create `REUSE_EXTEND_CREATE.md` for this scene.

For every visual system list:

```text
REUSE / EXTEND / CREATE
actual repo path
actual export/component/helper
reason
```

Do not invent component names.

## 10. Exact frame-wise plan output

Create the exact frame plan with **every** approved beat.

For each beat preserve:

```text
BEAT
ANCHOR
NARRATION
WORD IDs
AUDIO start/end
FRAMES start/endExclusive
AVAILABLE REAL PAUSE

STATE BEFORE
WHAT APPEARS NOW
CENTER-STAGE HERO
CAUSE
PRIMARY SEMANTIC REACTION
MOVEMENT / MUTATION
SUPPORTING REACTION (maximum one if required)
COMPREHENSION HOLD
CLEANUP / EXIT
PERSISTENT STATE
STATE AFTER
COMPONENTS / ACTUAL IMPORT PATHS
MOTION PURPOSE
WHAT MUST NOT APPEAR YET
VALIDATION
```

Do not shorten this schema.

## 11. Code-scene exact rule

Where this plan contains code:

```text
spoken code idea
→ active line/sub-line types character-by-character
→ future lines stay nonexistent
→ line completes
→ semantic proof may temporarily take center
→ proof exits/reduces
→ code returns as hero
```

Character timing must derive from the real word-sync window. Never guess a typing duration.

## 12. Array / pointer exact rule

Array visuals use Array V2 only.

```text
slots fixed
indices fixed
values move/update
```

Pointer movement starts only on the spoken pointer-movement phrase.

No pointer pre-movement.

## 13. Complexity-graph exact rule

Where this plan asks for a curve:

- the curve appears only when narration reaches the complexity idea;
- mathematical growth, not invented benchmark data;
- curve draw timing uses real narration/pause;
- graph exits/reduces when explanation ends;
- reuse/extend a kit-level graph primitive.

## 14. Captions

Captions use the same exact sync source as visual anchors.

No second timing authority.

## 15. Frame-plan QA

PASS requires:

```text
approved anchors resolved          = ALL
dropped semantic beats             = 0
guessed timings                    = 0
guessed frames                     = 0
guessed coordinates                = 0
future-state spoilers              = 0
generic replacement components     = 0
algorithm-state mismatches         = 0
caption timing sources             = 1
unresolved source requirements      = 0
```

## 16. Implementation

Only after the exact frame-plan self-QA passes:

```text
WORD PLAN
→ exact word sync
→ exact frame plan
→ frame QA
→ IMPLEMENT
→ render exact semantic checkpoints
→ visual/state QA
→ auto-correct source-supported issues
→ PASS
```

Implementation may not redesign this plan.


---

# FINAL WORD-PLAN SELF-AUDIT

```text
SCRIPT SEMANTIC BEATS COVERED      = 20
GUESSED SECONDS                    = 0
GUESSED FRAMES                     = 0
GUESSED PIXEL COORDINATES          = 0
GENERIC ARRAY COMPONENTS           = 0
FUTURE-SOLUTION SPOILERS           = 0
DECORATIVE-ONLY MOTION             = 0
RAW SYNC MODIFICATIONS             = 0
```

This scene is ready for later exact MP3 + word-sync conversion only after the separate audit file passes.
