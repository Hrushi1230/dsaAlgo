# Q12 — Next Permutation (LC 31)
# Phase 9 · Scene 03 — Method 1 · Brute Force Trace
## WORD-BASED VISUAL PLAN — SEMANTIC FRAME PLAN WITHOUT GUESSED TIME

**Scene purpose:** Teach the brute-force definition using one small 3-value example, show the exact six lexicographic permutations in spoken order without packing the screen, prove `CURRENT → NEXT`, show list wraparound, then hand off to code without revealing the factorial formula early.

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

Scene 03 inherits:

```text
Q12
APPROACH 1 · BRUTE FORCE
center ready for a tiny example
```

The master input is course truth but is not needed as the center-stage object in this trace.

---

# 2. EXACT NARRATION SOURCE

```text
The simplest idea is...

generate every possible permutation.

Then arrange all of them...

in lexicographical order.

After that...

find our current permutation in that list...

and take the one immediately after it.

For a very small array...

this idea is easy to understand.

Suppose we have...

one... two... three.

Its permutations can be arranged like this...

one two three...

one three two...

two one three...

two three one...

three one two...

three two one.

If our current permutation is...

one three two...

then the next one is...

two one three.

So the definition is clear.

Generate everything...

order everything...

find the current arrangement...

then move one step forward.

And if we are already at the last permutation...

we wrap around to the first one.

This works logically.

But there is a serious problem.

The number of permutations grows extremely fast.

So before we accept this method...

let’s see what its code is really doing.
```

The plan may visualize only what the narration has reached.

---

# 3. LOCKED SCENE TRUTH

Tiny example, spoken by the script:

```text
[1,2,3]
```

Exact lexicographic order:

```text
[1,2,3]
[1,3,2]
[2,1,3]
[2,3,1]
[3,1,2]
[3,2,1]
```

Current:
`[1,3,2]`

Next:
`[2,1,3]`

Wrap:
last → first.

Scene03 may say only qualitative rapid growth. `n!` belongs to Scene05.

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

- Every tiny/mini array is still Array V2. `mini` never means generic boxes.
- Do not keep all six permutations at full emphasis. Current spoken row is hero; old rows reduce/exit.
- At `CURRENT → NEXT`, two mini arrays may coexist because adjacency is the teaching relation.
- `n!` is forbidden in Scene03 even though it is true; narration has not introduced it yet.
- Brute wraparound is a list relation; do not visually reverse `[3,2,1]` here.

---

# 7. SEMANTIC ANCHOR MANIFEST — NO TIME / NO FRAMES

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S03_SIMPLEST` | `The simplest idea is` | Brute Force method identity. |
| `S03_GENERATE` | `generate every possible permutation` | `GENERATE`. |
| `S03_ORDER` | `arrange all of them in lexicographical order` | `GENERATE → ORDER`. |
| `S03_FIND` | `find our current permutation in that list` | Current search step. |
| `S03_TAKE_AFTER` | `take the one immediately after it` | `CURRENT → NEXT`. |
| `S03_SMALL_ARRAY` | `For a very small array this idea is easy to understand` | Tiny example stage. |
| `S03_E0` | `one` | First tiny-example value. |
| `S03_E1` | `two` | Second tiny value. |
| `S03_E2` | `three` | Complete `[1,2,3]`. |
| `S03_LIST_INTRO` | `Its permutations can be arranged like this` | Ordered permutation sequence. |
| `S03_P0` | `one two three` | First ordered permutation. |
| `S03_P1` | `one three two` | Second ordered permutation. |
| `S03_P2` | `two one three` | Third permutation. |
| `S03_P3` | `two three one` | Fourth permutation. |
| `S03_P4` | `three one two` | Fifth permutation. |
| `S03_P5` | `three two one` | Sixth/last permutation. |
| `S03_CURRENT` | `our current permutation is one three two` | CURRENT `[1,3,2]`. |
| `S03_NEXT` | `the next one is two one three` | The immediate adjacency proof. |
| `S03_DEFINITION_CLEAR` | `So the definition is clear` | Brute-force definition. |
| `S03_RECAP_GENERATE` | `Generate everything` | Pipeline step GENERATE. |
| `S03_RECAP_ORDER` | `order everything` | Pipeline step ORDER. |
| `S03_RECAP_FIND` | `find the current arrangement` | Pipeline step FIND. |
| `S03_RECAP_MOVE` | `then move one step forward` | Pipeline result. |
| `S03_WRAP` | `if we are already at the last permutation we wrap around to the first one` | LAST → FIRST wraparound. |
| `S03_WORKS` | `This works logically` | Logical correctness of Method 1. |
| `S03_PROBLEM` | `But there is a serious problem` | The unresolved scalability problem. |
| `S03_GROWTH` | `The number of permutations grows extremely fast` | Qualitative growth. |
| `S03_CODE_HANDOFF` | `let’s see what its code is really doing` | Method 1 code handoff. |

No seconds or frame numbers belong here before the final MP3 + exact sync JSON exist.

---

# 8. WORD-BASED CHOREOGRAPHY


## BEAT 01 — `S03_SIMPLEST`

### SPOKEN PHRASE
`The simplest idea is`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
`APPROACH 1 · BRUTE FORCE` owns center, then reduces to make space for its first action.

### CENTER-STAGE HERO
Brute Force method identity.

### KIT / EXISTING SYSTEM
Existing approach-title grammar.

### CAUSE
Narration opens Method 1.

### EFFECT / MOTION
Focus method identity only; no operations before spoken.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No complexity formula; no optimal clue.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Method label reduces to corner/header support.

### MINIMUM PERSISTENT STATE
Method 1 identity.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 02 — `S03_GENERATE`

### SPOKEN PHRASE
`generate every possible permutation`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Semantic step `GENERATE` appears as the first item in a four-step chalk pipeline.

### CENTER-STAGE HERO
`GENERATE`.

### KIT / EXISTING SYSTEM
ChalkText + RoughLine.

### CAUSE
Narration states first brute step.

### EFFECT / MOTION
Draw only the first pipeline node; do not prebuild later nodes.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No sorting/find/next until spoken.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep `GENERATE` as a small breadcrumb.

### MINIMUM PERSISTENT STATE
Pipeline start.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 03 — `S03_ORDER`

### SPOKEN PHRASE
`arrange all of them in lexicographical order`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Second step `ORDER` appears after `GENERATE`.

### CENTER-STAGE HERO
`GENERATE → ORDER`.

### KIT / EXISTING SYSTEM
ChalkText + RoughLine.

### CAUSE
Narration states ordering.

### EFFECT / MOTION
Extend existing pipeline one step.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No tiny example list yet unless narration reaches it.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep compact pipeline.

### MINIMUM PERSISTENT STATE
Two-step pipeline.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 04 — `S03_FIND`

### SPOKEN PHRASE
`find our current permutation in that list`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Third step `FIND CURRENT` appears.

### CENTER-STAGE HERO
Current search step.

### KIT / EXISTING SYSTEM
ChalkText.

### CAUSE
Narration states search.

### EFFECT / MOTION
Extend pipeline; current step becomes hero.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No next result yet.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep pipeline compact.

### MINIMUM PERSISTENT STATE
Three-step pipeline.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 05 — `S03_TAKE_AFTER`

### SPOKEN PHRASE
`take the one immediately after it`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Fourth step `NEXT` appears adjacent to `CURRENT`.

### CENTER-STAGE HERO
`CURRENT → NEXT`.

### KIT / EXISTING SYSTEM
ChalkText/RoughLine.

### CAUSE
Narration finishes brute definition.

### EFFECT / MOTION
Complete pipeline `GENERATE → ORDER → FIND CURRENT → NEXT`.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No wraparound yet.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Pipeline reduces as tiny example begins.

### MINIMUM PERSISTENT STATE
Method pipeline may persist faintly.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 06 — `S03_SMALL_ARRAY`

### SPOKEN PHRASE
`For a very small array this idea is easy to understand`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Clear center. Prepare one 3-slot Array V2 track.

### CENTER-STAGE HERO
Tiny example stage.

### KIT / EXISTING SYSTEM
ArrayTrackV2 + ArraySlotV2 + ArrayIndexRowV2.

### CAUSE
Narration authorizes concrete small example.

### EFFECT / MOTION
3 fixed slots enter; no values yet.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No master input; no six permutations yet.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep track for next spoken values.

### MINIMUM PERSISTENT STATE
3-slot Array V2.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 07 — `S03_E0`

### SPOKEN PHRASE
`one`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Value `1` appears in tiny array index 0.

### CENTER-STAGE HERO
First tiny-example value.

### KIT / EXISTING SYSTEM
ArrayValueV2.

### CAUSE
Spoken value.

### EFFECT / MOTION
Reveal ArrayValueV2 1.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No 2/3 yet.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep.

### MINIMUM PERSISTENT STATE
Tiny prefix `[1]`.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 08 — `S03_E1`

### SPOKEN PHRASE
`two`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Value `2` appears at index 1.

### CENTER-STAGE HERO
Second tiny value.

### KIT / EXISTING SYSTEM
ArrayValueV2.

### CAUSE
Spoken value.

### EFFECT / MOTION
Reveal 2.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No 3 yet.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep.

### MINIMUM PERSISTENT STATE
Tiny prefix `[1,2]`.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 09 — `S03_E2`

### SPOKEN PHRASE
`three`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Value `3` appears at index 2.

### CENTER-STAGE HERO
Complete `[1,2,3]`.

### KIT / EXISTING SYSTEM
ArrayValueV2.

### CAUSE
Spoken value.

### EFFECT / MOTION
Reveal 3.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No permutation list until next phrase.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep completed tiny track.

### MINIMUM PERSISTENT STATE
`[1,2,3]`.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 10 — `S03_LIST_INTRO`

### SPOKEN PHRASE
`Its permutations can be arranged like this`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
The tiny array transforms into an ordered-permutation stage. Use one active mini Array V2 row at center and a slim ordered rail/breadcrumb for already-spoken entries.

### CENTER-STAGE HERO
Ordered permutation sequence.

### KIT / EXISTING SYSTEM
Array V2 + ChalkText/RoughLine.

### CAUSE
Narration authorizes showing the ordered list.

### EFFECT / MOTION
Prepare a single `LEXICOGRAPHIC ORDER` guide. Do not populate future permutations.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No unspoken permutations.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep stage.

### MINIMUM PERSISTENT STATE
Order guide + active mini array.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 11 — `S03_P0`

### SPOKEN PHRASE
`one two three`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Mini Array V2 `[1,2,3]` is the active center row.

### CENTER-STAGE HERO
First ordered permutation.

### KIT / EXISTING SYSTEM
Mini Array V2 (same primitive family).

### CAUSE
First permutation spoken.

### EFFECT / MOTION
Show `[1,2,3]`; after it settles, reduce it into an already-seen breadcrumb.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No P1..P5.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Move/reduce P0 when P1 arrives.

### MINIMUM PERSISTENT STATE
Ordered position 1 known.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 12 — `S03_P1`

### SPOKEN PHRASE
`one three two`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Active mini array becomes `[1,3,2]`; P0 is quiet context only.

### CENTER-STAGE HERO
Second ordered permutation.

### KIT / EXISTING SYSTEM
Mini Array V2.

### CAUSE
Second permutation spoken.

### EFFECT / MOTION
Semantic handoff P0→P1; slots fixed inside each representation.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No P2..P5.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Reduce P1 only after P2 arrives; preserve its identity for later current highlight.

### MINIMUM PERSISTENT STATE
Ordered positions 1–2 known.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 13 — `S03_P2`

### SPOKEN PHRASE
`two one three`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Active mini array `[2,1,3]`.

### CENTER-STAGE HERO
Third permutation.

### KIT / EXISTING SYSTEM
Mini Array V2.

### CAUSE
Third spoken permutation.

### EFFECT / MOTION
Show P2, with earlier rows quiet/reduced.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No P3..P5.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Reduce after next.

### MINIMUM PERSISTENT STATE
Ordered positions through P2.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 14 — `S03_P3`

### SPOKEN PHRASE
`two three one`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Active `[2,3,1]`.

### CENTER-STAGE HERO
Fourth permutation.

### KIT / EXISTING SYSTEM
Mini Array V2.

### CAUSE
Fourth spoken permutation.

### EFFECT / MOTION
Show current permutation only strongly.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No P4/P5.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Reduce after next.

### MINIMUM PERSISTENT STATE
Ordered position 4 known.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 15 — `S03_P4`

### SPOKEN PHRASE
`three one two`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Active `[3,1,2]`.

### CENTER-STAGE HERO
Fifth permutation.

### KIT / EXISTING SYSTEM
Mini Array V2.

### CAUSE
Fifth spoken.

### EFFECT / MOTION
Show active row; avoid six full-detail rows simultaneously.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No P5.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Reduce after next.

### MINIMUM PERSISTENT STATE
Ordered position 5 known.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 16 — `S03_P5`

### SPOKEN PHRASE
`three two one`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Active `[3,2,1]`.

### CENTER-STAGE HERO
Sixth/last permutation.

### KIT / EXISTING SYSTEM
Mini Array V2.

### CAUSE
Last spoken permutation.

### EFFECT / MOTION
Show last row and `LAST` relation only after it is spoken.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No wrap arrow yet.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep P5 until wrap phrase later.

### MINIMUM PERSISTENT STATE
Ordered list concept complete.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 17 — `S03_CURRENT`

### SPOKEN PHRASE
`our current permutation is one three two`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Bring `[1,3,2]` back to center as `CURRENT`; older list context disappears except immediate adjacency guide.

### CENTER-STAGE HERO
CURRENT `[1,3,2]`.

### KIT / EXISTING SYSTEM
Array V2.

### CAUSE
Narration identifies current entry.

### EFFECT / MOTION
Use already-created P1 identity; no fresh generic array.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No next highlight until next phrase.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep current and one empty adjacent next slot.

### MINIMUM PERSISTENT STATE
CURRENT.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 18 — `S03_NEXT`

### SPOKEN PHRASE
`the next one is two one three`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Reveal adjacent `[2,1,3]` as `NEXT` and connect `CURRENT → NEXT`.

### CENTER-STAGE HERO
The immediate adjacency proof.

### KIT / EXISTING SYSTEM
Two mini Array V2 tracks + RoughLine/arrow; this is algorithmically necessary simultaneous context.

### CAUSE
Narration names next permutation.

### EFFECT / MOTION
Bring P2 beside/after current only now; direct arrow proves one step.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No optimal mechanics.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
After comprehension, collapse pair into definition relation.

### MINIMUM PERSISTENT STATE
`[1,3,2] → [2,1,3]`.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 19 — `S03_DEFINITION_CLEAR`

### SPOKEN PHRASE
`So the definition is clear`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Replace concrete pair with compact semantic pipeline.

### CENTER-STAGE HERO
Brute-force definition.

### KIT / EXISTING SYSTEM
ChalkText.

### CAUSE
Narration summarizes meaning.

### EFFECT / MOTION
Concrete arrays reduce; pipeline returns.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No complexity yet.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep pipeline for spoken recap actions.

### MINIMUM PERSISTENT STATE
Pipeline.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 20 — `S03_RECAP_GENERATE`

### SPOKEN PHRASE
`Generate everything`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Highlight `GENERATE`.

### CENTER-STAGE HERO
Pipeline step GENERATE.

### KIT / EXISTING SYSTEM
ChalkText.

### CAUSE
Spoken recap step.

### EFFECT / MOTION
Only this node strong.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No future recap nodes strong simultaneously.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Reduce as next node activates.

### MINIMUM PERSISTENT STATE
Pipeline persists.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 21 — `S03_RECAP_ORDER`

### SPOKEN PHRASE
`order everything`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Highlight `ORDER`; GENERATE dims.

### CENTER-STAGE HERO
Pipeline step ORDER.

### KIT / EXISTING SYSTEM
ChalkText.

### CAUSE
Spoken recap.

### EFFECT / MOTION
Attention moves one node.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No growth graph.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Reduce on next.

### MINIMUM PERSISTENT STATE
Pipeline.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 22 — `S03_RECAP_FIND`

### SPOKEN PHRASE
`find the current arrangement`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Highlight `FIND CURRENT`.

### CENTER-STAGE HERO
Pipeline step FIND.

### KIT / EXISTING SYSTEM
ChalkText.

### CAUSE
Spoken recap.

### EFFECT / MOTION
Attention transfer.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No next highlight yet.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Reduce on next.

### MINIMUM PERSISTENT STATE
Pipeline.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 23 — `S03_RECAP_MOVE`

### SPOKEN PHRASE
`then move one step forward`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Highlight `NEXT` and draw one-step arrow.

### CENTER-STAGE HERO
Pipeline result.

### KIT / EXISTING SYSTEM
ChalkText/RoughLine.

### CAUSE
Spoken recap.

### EFFECT / MOTION
Cause→effect adjacency.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No wrap yet.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep NEXT relation briefly.

### MINIMUM PERSISTENT STATE
Pipeline.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 24 — `S03_WRAP`

### SPOKEN PHRASE
`if we are already at the last permutation we wrap around to the first one`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Reuse previously spoken `[3,2,1]` as LAST and `[1,2,3]` as FIRST; show a semantic curved return path.

### CENTER-STAGE HERO
LAST → FIRST wraparound.

### KIT / EXISTING SYSTEM
Mini Array V2 + existing RoughCurve/arrow primitive.

### CAUSE
Narration explicitly authorizes wraparound.

### EFFECT / MOTION
Use existing mini Array V2 identities; draw the return relation only now.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No reverse operation—this is brute list wraparound, not optimal algorithm.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Clear concrete wrap example after understanding.

### MINIMUM PERSISTENT STATE
Method pipeline may remain.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 25 — `S03_WORKS`

### SPOKEN PHRASE
`This works logically`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
A small chalk `CORRECT`/check confirms semantics; no celebration animation.

### CENTER-STAGE HERO
Logical correctness of Method 1.

### KIT / EXISTING SYSTEM
Existing chalk confirmation grammar.

### CAUSE
Narration confirms correctness.

### EFFECT / MOTION
Brief confirmation only.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No performance judgment yet.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Confirmation exits quickly.

### MINIMUM PERSISTENT STATE
Method identity.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 26 — `S03_PROBLEM`

### SPOKEN PHRASE
`But there is a serious problem`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Clear permutation stage. Show only an unresolved `COST ?` / expanding count concept.

### CENTER-STAGE HERO
The unresolved scalability problem.

### KIT / EXISTING SYSTEM
ChalkText.

### CAUSE
Narration creates tension.

### EFFECT / MOTION
Method visuals recede and cost question becomes center.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No `n!` formula yet—the script does not say it in Scene03.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep question for next phrase.

### MINIMUM PERSISTENT STATE
`COST ?`.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 27 — `S03_GROWTH`

### SPOKEN PHRASE
`The number of permutations grows extremely fast`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
A qualitative sequence of count marks expands rapidly, but without naming `n!` or showing invented numeric counts.

### CENTER-STAGE HERO
Qualitative growth.

### KIT / EXISTING SYSTEM
Existing chalk marks/RoughCurve only if used qualitatively; no numeric axes.

### CAUSE
Narration says growth is fast.

### EFFECT / MOTION
Show accelerating density/branching abstractly; no graph formula yet.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No factorial symbol, no benchmark numbers.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Growth visual reduces to `TOO MANY` concept.

### MINIMUM PERSISTENT STATE
Cost problem.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 28 — `S03_CODE_HANDOFF`

### SPOKEN PHRASE
`let’s see what its code is really doing`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Growth visual clears. A clean code-stage placeholder/identity enters without code lines.

### CENTER-STAGE HERO
Method 1 code handoff.

### KIT / EXISTING SYSTEM
Existing production code component shell only.

### CAUSE
Narration authorizes code next.

### EFFECT / MOTION
Representation handoff from brute trace to existing production code surface.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No future code lines.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
End with empty active-code stage.

### MINIMUM PERSISTENT STATE
Q12 · Method 1 · Code, no lines yet.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



---

# 9. CONTINUITY OUT

End state:

```text
METHOD 1 · BRUTE FORCE
existing production code surface ready
no code lines revealed yet
```

Scene04 owns code construction.

---


# MANDATORY ANTIGRAVITY WORD-SYNC → EXACT FRAME-PLAN CONTRACT

This section is part of the approved Scene 03 plan. It is **not optional**.

The future final MP3 and exact word-sync JSON provide **WHEN**.  
This document provides **WHAT / WHY / ORDER / STATE / ENTER / EXIT / KIT / NO-SPOILER**.

Antigravity must preserve every semantic beat below.

## 1. Required inputs before exact frame planning

All must exist:

1. this approved Scene 03 word-based plan;
2. final Scene 03 MP3;
3. exact Scene 03 word-sync JSON matching that MP3;
4. verified Q12 script;
5. verified Q12 teaching trace where algorithm state is involved;
6. actual previous-scene implemented final state;
7. actual Foundation V2 / repo components;
8. authoritative project FPS / audio-sync helper.

If MP3 or sync JSON is missing:

```text
SCENE 03 FRAME PLAN: BLOCKED
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

For every `S03_*` anchor write a derived manifest containing:

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
sync/03-brute-trace.anchors.json
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
SCRIPT SEMANTIC BEATS COVERED      = 28
GUESSED SECONDS                    = 0
GUESSED FRAMES                     = 0
GUESSED PIXEL COORDINATES          = 0
GENERIC ARRAY COMPONENTS           = 0
FUTURE-SOLUTION SPOILERS           = 0
DECORATIVE-ONLY MOTION             = 0
RAW SYNC MODIFICATIONS             = 0
```

This scene is ready for later exact MP3 + word-sync conversion only after the separate audit file passes.
