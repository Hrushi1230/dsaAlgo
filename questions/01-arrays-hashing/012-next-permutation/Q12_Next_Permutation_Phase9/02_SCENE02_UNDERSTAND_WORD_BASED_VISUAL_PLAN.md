# Q12 — Next Permutation (LC 31)
# Phase 9 · Scene 02 — Question + Understand
## WORD-BASED VISUAL PLAN — SEMANTIC FRAME PLAN WITHOUT GUESSED TIME

**Scene purpose:** Define permutation and `next`, introduce the locked master array one spoken value at a time, establish in-place/wraparound requirements, and hand off to the obvious approach without leaking any solution mechanics.

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

Scene 02 begins from Scene 01's representation handoff:

```text
01 · ARRAYS & HASHING
NEXT PERMUTATION
LC 31 · MEDIUM

CENTER STAGE: empty
```

Do not replay the roadmap or problem-title intro.

---

# 2. EXACT NARRATION SOURCE

```text
Suppose we have some numbers...

and we arrange them in different possible orders.

Each different order is called a permutation.

Now imagine...

all of those permutations are arranged in increasing lexicographical order.

Our job is not to find any bigger arrangement.

We need the very next one.

The smallest permutation...
that is still greater than the current permutation.

For this lesson...
our master array is...

Two... one... five... four... four... three... zero.

We need to transform this same array...

into its next permutation.

And we have to do it in-place.

If a greater permutation does not exist...

then we have to return to the smallest possible arrangement.

So the real question is...

How can we move to the next arrangement...

without generating every permutation?

Before we solve that directly...

let’s first see the obvious approach.
```

The plan may visualize only what the narration has reached.

---

# 3. LOCKED SCENE TRUTH

Authoritative master input:

```text
[2,1,5,4,4,3,0]
```

Problem meaning:

```text
NEXT = smallest permutation strictly greater than CURRENT
```

Constraints taught here:
- mutate the same array / in-place;
- if no greater permutation exists, return to the smallest arrangement.

No algorithm mechanism is allowed in Scene 02.

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

- No invented numeric teaching example before the master array is spoken.
- The master values reveal one-by-one on their exact spoken value anchors.
- The two `four` tokens must use ordered word identity.
- Do not show a target output array.
- Do not show `[3,2,1]` yet; the script introduces no concrete no-pivot example here.
- End on Method 1 identity only; Scene03 owns brute-force mechanics.

---

# 7. SEMANTIC ANCHOR MANIFEST — NO TIME / NO FRAMES

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S02_NUMBERS` | `Suppose we have some numbers` | The idea of a sequence of values, not an algorithm. |
| `S02_DIFFERENT_ORDERS` | `arrange them in different possible orders` | ORDER can change while the underlying items stay the same. |
| `S02_PERMUTATION` | `Each different order is called a permutation` | `PERMUTATION` definition. |
| `S02_LEX_ORDER` | `all of those permutations are arranged in increasing lexicographical order` | Lexicographic direction. |
| `S02_NOT_ANY_BIGGER` | `Our job is not to find any bigger arrangement` | `NOT ANY BIGGER`. |
| `S02_VERY_NEXT` | `We need the very next one` | `CURRENT → NEXT` adjacency. |
| `S02_SMALLEST_GREATER` | `The smallest permutation that is still greater than the current permutation` | The exact meaning of next permutation. |
| `S02_MASTER_INTRO` | `our master array is` | The single master array object. |
| `S02_M0` | `Two` | Value 2 at index 0. |
| `S02_M1` | `one` | Value 1 at index 1. |
| `S02_M2` | `five` | Value 5 at index 2. |
| `S02_M3` | `four` | Value 4 at index 3. |
| `S02_M4` | `four` | Value 4 at index 4. |
| `S02_M5` | `three` | Value 3 at index 5. |
| `S02_M6` | `zero` | Completed master input `[2,1,5,4,4,3,0]`. |
| `S02_TRANSFORM_SAME` | `transform this same array` | The one master Array V2 object. |
| `S02_NEXT_PERM` | `into its next permutation` | Unresolved transformation `CURRENT → NEXT ?`. |
| `S02_IN_PLACE` | `we have to do it in-place` | The same-array constraint. |
| `S02_NO_GREATER` | `If a greater permutation does not exist` | The edge-condition concept only. |
| `S02_SMALLEST_WRAP` | `return to the smallest possible arrangement` | Wraparound rule. |
| `S02_REAL_QUESTION` | `So the real question is` | Master array + unresolved next destination. |
| `S02_WITHOUT_ALL` | `without generating every permutation` | The unresolved efficiency challenge. |
| `S02_OBVIOUS` | `let’s first see the obvious approach` | Method-1 handoff. |

No seconds or frame numbers belong here before the final MP3 + exact sync JSON exist.

---

# 8. WORD-BASED CHOREOGRAPHY


## BEAT 01 — `S02_NUMBERS`

### SPOKEN PHRASE
`Suppose we have some numbers`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
The Q12 ProblemOpener header remains; center stage introduces only a neutral chalk concept `NUMBERS`—no concrete values yet.

### CENTER-STAGE HERO
The idea of a sequence of values, not an algorithm.

### KIT / EXISTING SYSTEM
ChalkText / existing non-data teaching marks. Do not invent a numeric array yet.

### CAUSE
Narration introduces the raw material of a permutation.

### EFFECT / MOTION
A minimal ordered row of neutral position marks may appear, without inventing values.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No master array values; no permutation list; no pivot/successor/reverse.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Neutral marks reduce as the next phrase introduces rearrangement.

### MINIMUM PERSISTENT STATE
Only the Q12 header persists.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 02 — `S02_DIFFERENT_ORDERS`

### SPOKEN PHRASE
`arrange them in different possible orders`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
The same neutral marks reorder conceptually through a semantic handoff; do not introduce extra numeric examples.

### CENTER-STAGE HERO
ORDER can change while the underlying items stay the same.

### KIT / EXISTING SYSTEM
Existing ChalkText / RoughLine motion grammar. No generic cards.

### CAUSE
Narration introduces multiple arrangements.

### EFFECT / MOTION
Show one arrangement becoming another, then a third, one at a time; previous arrangement exits before the next owns center.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No lexicographic arrow yet; no master input.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Clear the transient order demo when the definition arrives.

### MINIMUM PERSISTENT STATE
Only the concept `same items · different order` may persist as a small chalk note.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 03 — `S02_PERMUTATION`

### SPOKEN PHRASE
`Each different order is called a permutation`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Write the word `PERMUTATION` only now, attached to the just-demonstrated idea.

### CENTER-STAGE HERO
`PERMUTATION` definition.

### KIT / EXISTING SYSTEM
ChalkText + RoughLine if an arrow is needed.

### CAUSE
Narration names the concept.

### EFFECT / MOTION
Semantic equation appears: `same values + different order → permutation`.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No concrete master array; no solution mechanics.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
The equation settles, then reduces to a compact label.

### MINIMUM PERSISTENT STATE
A small `PERMUTATION` label may persist into lexicographic ordering.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 04 — `S02_LEX_ORDER`

### SPOKEN PHRASE
`all of those permutations are arranged in increasing lexicographical order`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
A simple left→right `SMALLER → LARGER` ordering axis appears. Do not invent example permutations.

### CENTER-STAGE HERO
Lexicographic direction.

### KIT / EXISTING SYSTEM
RoughLine / existing arrow primitive + ChalkText.

### CAUSE
Narration introduces ordering of permutations.

### EFFECT / MOTION
Draw the ordering direction and place the existing `PERMUTATION` label on the concept, not six invented examples.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No brute-force generated list; no master values.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Ordering axis remains briefly because the next phrases define `next` against it.

### MINIMUM PERSISTENT STATE
`SMALLER → LARGER` relation.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 05 — `S02_NOT_ANY_BIGGER`

### SPOKEN PHRASE
`Our job is not to find any bigger arrangement`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
A generic far-right `BIGGER` destination is crossed/rejected.

### CENTER-STAGE HERO
`NOT ANY BIGGER`.

### KIT / EXISTING SYSTEM
ChalkText + existing RoughLine/strike grammar.

### CAUSE
Narration explicitly rejects arbitrary larger arrangements.

### EFFECT / MOTION
Direct attention away from a distant larger destination; use a chalk cross or erase supported by existing grammar.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
Do not reveal the correct next result.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Rejected `ANY BIGGER` mark erases.

### MINIMUM PERSISTENT STATE
Ordering axis persists.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 06 — `S02_VERY_NEXT`

### SPOKEN PHRASE
`We need the very next one`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Only the adjacent step immediately to the right of `CURRENT` is emphasized.

### CENTER-STAGE HERO
`CURRENT → NEXT` adjacency.

### KIT / EXISTING SYSTEM
ChalkText + RoughLine/arrow.

### CAUSE
Narration defines immediacy.

### EFFECT / MOTION
Collapse the wide ordering idea into one adjacent transition: current position and its immediate successor.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No numeric current permutation yet.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep the adjacency relation for the next definition phrase.

### MINIMUM PERSISTENT STATE
`CURRENT → NEXT`.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 07 — `S02_SMALLEST_GREATER`

### SPOKEN PHRASE
`The smallest permutation that is still greater than the current permutation`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Semantic definition forms: `NEXT = SMALLEST PERMUTATION > CURRENT`.

### CENTER-STAGE HERO
The exact meaning of next permutation.

### KIT / EXISTING SYSTEM
ChalkText; direct board typography, no cards.

### CAUSE
Narration gives the formal teaching idea.

### EFFECT / MOTION
Build the relation in narration order: `SMALLEST` → `>` → `CURRENT`, never all at once before spoken.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No pivot, suffix, successor, final output.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Definition settles then moves/reduces toward header/support position.

### MINIMUM PERSISTENT STATE
Compact `NEXT = smallest > current` relation may remain until master input arrives.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 08 — `S02_MASTER_INTRO`

### SPOKEN PHRASE
`our master array is`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Clear abstract definition from center. Create one empty 7-slot Array V2 track.

### CENTER-STAGE HERO
The single master array object.

### KIT / EXISTING SYSTEM
ArrayTrackV2 + ArraySlotV2 + ArrayIndexRowV2.

### CAUSE
Narration announces the concrete testcase.

### EFFECT / MOTION
ArrayTrackV2 enters center with seven fixed slots and index row subdued.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No values before they are spoken; no second target array.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep track; it becomes the persistent master object.

### MINIMUM PERSISTENT STATE
Seven-slot Array V2 geometry.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 09 — `S02_M0`

### SPOKEN PHRASE
`Two`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
ArrayValueV2 `2` appears in slot/index 0 only.

### CENTER-STAGE HERO
Value 2 at index 0.

### KIT / EXISTING SYSTEM
ArrayValueV2 within existing ArrayTrackV2.

### CAUSE
First master value is spoken.

### EFFECT / MOTION
Write/reveal value 2 into fixed slot 0.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No later values.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep value 2.

### MINIMUM PERSISTENT STATE
Master array indices/slot geometry.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 10 — `S02_M1`

### SPOKEN PHRASE
`one`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
ArrayValueV2 `1` appears at index 1.

### CENTER-STAGE HERO
Value 1 at index 1.

### KIT / EXISTING SYSTEM
ArrayValueV2.

### CAUSE
Second master value.

### EFFECT / MOTION
Reveal into fixed slot 1.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No later values.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep.

### MINIMUM PERSISTENT STATE
Master prefix `[2,1]`.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 11 — `S02_M2`

### SPOKEN PHRASE
`five`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
ArrayValueV2 `5` appears at index 2.

### CENTER-STAGE HERO
Value 5 at index 2.

### KIT / EXISTING SYSTEM
ArrayValueV2.

### CAUSE
Third master value.

### EFFECT / MOTION
Reveal into fixed slot 2.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No later values.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep.

### MINIMUM PERSISTENT STATE
Master prefix `[2,1,5]`.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 12 — `S02_M3`

### SPOKEN PHRASE
`four`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
ArrayValueV2 `4` appears at index 3.

### CENTER-STAGE HERO
Value 4 at index 3.

### KIT / EXISTING SYSTEM
ArrayValueV2.

### CAUSE
Fourth master value.

### EFFECT / MOTION
Reveal into fixed slot 3.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No later values.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep.

### MINIMUM PERSISTENT STATE
Master prefix `[2,1,5,4]`.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 13 — `S02_M4`

### SPOKEN PHRASE
`four`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Second `4` appears at index 4 using ordered word identity.

### CENTER-STAGE HERO
Value 4 at index 4.

### KIT / EXISTING SYSTEM
ArrayValueV2.

### CAUSE
Fifth master value.

### EFFECT / MOTION
Reveal into fixed slot 4.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No later values.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep.

### MINIMUM PERSISTENT STATE
Master prefix `[2,1,5,4,4]`.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.

### PRECISION NOTE
The two spoken `four` tokens must be mapped by ordered word ID, never text lookup.



## BEAT 14 — `S02_M5`

### SPOKEN PHRASE
`three`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
ArrayValueV2 `3` appears at index 5.

### CENTER-STAGE HERO
Value 3 at index 5.

### KIT / EXISTING SYSTEM
ArrayValueV2.

### CAUSE
Sixth master value.

### EFFECT / MOTION
Reveal into fixed slot 5.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No final zero yet.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep.

### MINIMUM PERSISTENT STATE
Master prefix `[2,1,5,4,4,3]`.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 15 — `S02_M6`

### SPOKEN PHRASE
`zero`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
ArrayValueV2 `0` appears at index 6.

### CENTER-STAGE HERO
Completed master input `[2,1,5,4,4,3,0]`.

### KIT / EXISTING SYSTEM
ArrayValueV2 + ArrayIndexRowV2.

### CAUSE
Final master value.

### EFFECT / MOTION
Reveal into fixed slot 6; index row can become fully readable after the value settles.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No target/result permutation.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep complete master array.

### MINIMUM PERSISTENT STATE
Exact master input.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 16 — `S02_TRANSFORM_SAME`

### SPOKEN PHRASE
`transform this same array`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
No duplicate output array appears. A chalk identity bracket/label marks this one track as `SAME ARRAY`.

### CENTER-STAGE HERO
The one master Array V2 object.

### KIT / EXISTING SYSTEM
RoughLine/RoughBox only if existing grammar supports semantic identity; Array V2 remains hero.

### CAUSE
Narration establishes mutation of the same data structure.

### EFFECT / MOTION
Direct attention around the existing track; do not clone it.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No before/after two-array layout.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Remove extra identity annotation after it is understood.

### MINIMUM PERSISTENT STATE
Same Array V2 track.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 17 — `S02_NEXT_PERM`

### SPOKEN PHRASE
`into its next permutation`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
A destination marker `NEXT ?` appears beyond the same master array, unresolved.

### CENTER-STAGE HERO
Unresolved transformation `CURRENT → NEXT ?`.

### KIT / EXISTING SYSTEM
Array V2 + ChalkText/RoughLine.

### CAUSE
Narration states the required transformation.

### EFFECT / MOTION
Connect current array identity to unknown `NEXT ?`; do not show final values.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No final `[2,3,0,1,4,4,5]`.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep unresolved `NEXT ?` briefly.

### MINIMUM PERSISTENT STATE
Master array + unresolved goal.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 18 — `S02_IN_PLACE`

### SPOKEN PHRASE
`we have to do it in-place`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
`IN-PLACE` appears as a direct chalk constraint attached to the single array identity.

### CENTER-STAGE HERO
The same-array constraint.

### KIT / EXISTING SYSTEM
ChalkText; no generic badge/card.

### CAUSE
Narration names implementation constraint.

### EFFECT / MOTION
Use a single identity loop/annotation: one array enters and one array remains; no clone.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No code or pointer mechanics.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Constraint reduces to a compact support note after the phrase.

### MINIMUM PERSISTENT STATE
Master array plus minimal `IN-PLACE` note.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 19 — `S02_NO_GREATER`

### SPOKEN PHRASE
`If a greater permutation does not exist`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
The unresolved `NEXT ?` changes to `NO GREATER ?` conceptually; array values remain unchanged.

### CENTER-STAGE HERO
The edge-condition concept only.

### KIT / EXISTING SYSTEM
ChalkText.

### CAUSE
Narration introduces wraparound condition.

### EFFECT / MOTION
Show the condition as typography; do not invent a descending concrete example here.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No `[3,2,1]`; no reversal mechanics.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Condition remains for the next phrase only.

### MINIMUM PERSISTENT STATE
Master array can recede while condition owns center.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 20 — `S02_SMALLEST_WRAP`

### SPOKEN PHRASE
`return to the smallest possible arrangement`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
`NO GREATER → SMALLEST` relation appears without a numeric example.

### CENTER-STAGE HERO
Wraparound rule.

### KIT / EXISTING SYSTEM
ChalkText + RoughLine/arrow.

### CAUSE
Narration states required behavior.

### EFFECT / MOTION
Complete the abstract condition relation, then settle.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No reverse operation or algorithm clue.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Abstract wraparound relation clears after comprehension.

### MINIMUM PERSISTENT STATE
No persistent edge-case visual.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 21 — `S02_REAL_QUESTION`

### SPOKEN PHRASE
`So the real question is`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Clear secondary constraints; bring master array back to center with `NEXT ?`.

### CENTER-STAGE HERO
Master array + unresolved next destination.

### KIT / EXISTING SYSTEM
Array V2 + ChalkText.

### CAUSE
Narration transitions from requirements to challenge.

### EFFECT / MOTION
Restore current array as the central object; everything else quiet.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No method yet.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Hold only if real audio pause exists.

### MINIMUM PERSISTENT STATE
Master array + `NEXT ?`.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 22 — `S02_WITHOUT_ALL`

### SPOKEN PHRASE
`without generating every permutation`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
A ghost phrase `GENERATE EVERY PERMUTATION?` appears and is questioned—not executed.

### CENTER-STAGE HERO
The unresolved efficiency challenge.

### KIT / EXISTING SYSTEM
ChalkText; no permutation cards.

### CAUSE
Narration explicitly mentions avoiding exhaustive generation.

### EFFECT / MOTION
Show the idea as a question/forbidden expensive direction, not a list of permutations.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No brute-force trace until Scene03.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Question recedes into the next method cue.

### MINIMUM PERSISTENT STATE
Master array may remain subdued.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 23 — `S02_OBVIOUS`

### SPOKEN PHRASE
`let’s first see the obvious approach`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Method cue `APPROACH 1 · BRUTE FORCE` appears only now; master array reduces/clears from center.

### CENTER-STAGE HERO
Method-1 handoff.

### KIT / EXISTING SYSTEM
Existing scene-title/approach grammar, not a generic card.

### CAUSE
Narration authorizes the first approach.

### EFFECT / MOTION
Semantic handoff from problem object to approach identity. Do not explain the method yet.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No generated permutations before Scene03 begins.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
End on clean method identity; center ready for tiny example.

### MINIMUM PERSISTENT STATE
Q12 header + `APPROACH 1 · BRUTE FORCE`.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



---

# 9. CONTINUITY OUT

Scene 02 ends with:

```text
Q12 identity
APPROACH 1 · BRUTE FORCE
center stage clean / ready for tiny 3-value example
```

The master input remains course truth but does not need to stay visually packed on screen.

---


# MANDATORY ANTIGRAVITY WORD-SYNC → EXACT FRAME-PLAN CONTRACT

This section is part of the approved Scene 02 plan. It is **not optional**.

The future final MP3 and exact word-sync JSON provide **WHEN**.  
This document provides **WHAT / WHY / ORDER / STATE / ENTER / EXIT / KIT / NO-SPOILER**.

Antigravity must preserve every semantic beat below.

## 1. Required inputs before exact frame planning

All must exist:

1. this approved Scene 02 word-based plan;
2. final Scene 02 MP3;
3. exact Scene 02 word-sync JSON matching that MP3;
4. verified Q12 script;
5. verified Q12 teaching trace where algorithm state is involved;
6. actual previous-scene implemented final state;
7. actual Foundation V2 / repo components;
8. authoritative project FPS / audio-sync helper.

If MP3 or sync JSON is missing:

```text
SCENE 02 FRAME PLAN: BLOCKED
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

For every `S02_*` anchor write a derived manifest containing:

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
sync/02-understand.anchors.json
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
SCRIPT SEMANTIC BEATS COVERED      = 23
GUESSED SECONDS                    = 0
GUESSED FRAMES                     = 0
GUESSED PIXEL COORDINATES          = 0
GENERIC ARRAY COMPONENTS           = 0
FUTURE-SOLUTION SPOILERS           = 0
DECORATIVE-ONLY MOTION             = 0
RAW SYNC MODIFICATIONS             = 0
```

This scene is ready for later exact MP3 + word-sync conversion only after the separate audit file passes.
