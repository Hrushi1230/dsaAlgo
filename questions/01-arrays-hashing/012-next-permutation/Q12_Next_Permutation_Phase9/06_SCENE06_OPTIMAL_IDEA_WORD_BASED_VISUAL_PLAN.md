# Q12 — Next Permutation (LC 31)
# Phase 9 · Scene 06 — Method 2 · Optimal Idea
## WORD-BASED VISUAL PLAN — SEMANTIC FRAME PLAN WITHOUT GUESSED TIME

**Scene purpose:** Derive the optimal method conceptually without executing the verified master trace or leaking its exact pivot/successor values.

---

# 0. ABSOLUTE SOURCE PRIORITY

1. this approved word-based plan;
2. verified Q12 narration;
3. locked Q12 Phase-5 teaching truth;
4. previous scene's approved final state;
5. project `SKILL.md` / Word-Driven Motion Skill;
6. actual Foundation V2 / `@dsa/kit` implementation;
7. final scene MP3;
8. final exact word-sync JSON.

If a source does not support an assumption:

```text
UNRESOLVED — SOURCE REQUIRED
```

---

# 1. CONTINUITY IN

Scene06 inherits the untouched master input plus the unresolved right-to-left clue from Scene05.

---

# 2. EXACT NARRATION SOURCE

```text
Start from the right side.

We look for the first index i...

where nums at i...

is smaller than nums at i plus one.

Why?

Because everything to the right of that position...

forms a non-increasing suffix.

That suffix is already the largest possible arrangement...

of those suffix values.

So changing only that suffix...

cannot give us a larger permutation.

The first place where we can increase the permutation...

is the pivot.

Now we have to increase that pivot...

but only by the smallest possible amount.

So we search from the right again...

for the first value...

that is strictly greater than the pivot.

Because the suffix is non-increasing...

the first greater value from the right...

is the smallest value that can increase the pivot.

We swap those two values.

Now the permutation is larger.

And after this swap...

the suffix is still non-increasing.

But we still need the very next permutation.

So everything after the pivot...

must become as small as possible.

Because the suffix is non-increasing...

reversing it gives us the smallest possible suffix.

So we do not need to sort it.

We simply reverse it.

So the optimal reasoning is...

find the rightmost place that can increase...

make the smallest possible increase there...

then minimize everything after it.

Now let’s execute that on our master example.
```

---

# 3. LOCKED SCENE TRUTH

Conceptual truth includes `nums[i] < nums[i+1]`, `nums[j] > nums[i]`, swap, then reverse suffix. Real master stays untouched.

---


# GLOBAL WORD-DRIVEN VISUAL LAW

This scene is **not a slide deck** and **not a dashboard**.

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

More simultaneous objects are allowed only when algorithm truth requires them.


---


# FOUNDATION V2 / KIT-ONLY LOCK

Inspect the real repository first.

## Arrays

Every array representation—master, mini, conceptual, edge-case, code-proof, recap, temporary—must use the existing Array V2 grammar:

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

## Pointers / ranges / movement

Reuse existing Foundation V2 primitives where the actual API supports the semantic job:

```text
PointerLaneV2
existing range/partition band primitive
BezierFlight / existing deterministic movement helper
RoughLine
RoughCurve
ParametricArrow or existing arrow primitive
ChalkText
Captions
```

## Code

Code scenes reuse the existing production code component. No fake black IDE.

## Graphs

Inspect actual graph primitives first. If factorial growth is not supported by the current reusable graph component, EXTEND/CREATE a reusable kit-level complexity graph primitive. Never build a scene-local one-off graph.

## Decision order

```text
REUSE
→ EXTEND reusable primitive
→ CREATE reusable kit-level primitive only if genuinely absent
```


---

# 6. SCENE-SPECIFIC RULES

- Real master stays untouched.
- Exact `i=1`, `j=5`, `1↔3`, and final output are forbidden.
- Conceptual demos use kit primitives only.
- No Phase-5 real trace comparisons here.

---

# 7. SEMANTIC ANCHOR MANIFEST — NO TIME / NO FRAMES

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S06_START_RIGHT` | `Start from the right side` | Right-to-left search origin. |
| `S06_FIND_I` | `first index i where nums at i is smaller than nums at i plus one` | Pivot-condition comparison. |
| `S06_WHY` | `Why` | `WHY THIS CONDITION?` |
| `S06_SUFFIX` | `everything to the right of that position forms a non-increasing suffix` | Suffix structure. |
| `S06_SUFFIX_MAX` | `That suffix is already the largest possible arrangement of those suffix values` | Why suffix cannot be increased internally. |
| `S06_CANT_SUFFIX` | `changing only that suffix cannot give us a larger permutation` | Rejected suffix-only strategy. |
| `S06_PIVOT_CONCEPT` | `The first place where we can increase the permutation is the pivot` | Conceptual pivot role. |
| `S06_SMALLEST_INCREASE` | `increase that pivot but only by the smallest possible amount` | Minimal pivot increase objective. |
| `S06_SEARCH_RIGHT_AGAIN` | `search from the right again` | Successor scan direction. |
| `S06_STRICT_GREATER` | `first value that is strictly greater than the pivot` | Successor condition. |
| `S06_RIGHT_FIRST_SMALLEST` | `Because the suffix is non-increasing the first greater value from the right is the smallest value that can increase the pivot` | Proof that rightmost scan yields minimal greater value. |
| `S06_SWAP_CONCEPT` | `We swap those two values` | Conceptual swap. |
| `S06_NOW_LARGER` | `Now the permutation is larger` | Effect of conceptual swap. |
| `S06_SUFFIX_STILL_NONINC` | `after this swap the suffix is still non-increasing` | Post-swap suffix property. |
| `S06_VERY_NEXT` | `we still need the very next permutation` | Difference between larger and immediate next. |
| `S06_SUFFIX_MIN` | `everything after the pivot must become as small as possible` | Suffix minimization objective. |
| `S06_REVERSE_PROOF` | `Because the suffix is non-increasing reversing it gives us the smallest possible suffix` | Why reverse is enough. |
| `S06_NO_SORT` | `we do not need to sort it` | Eliminate unnecessary sort. |
| `S06_REVERSE` | `We simply reverse it` | Final optimal operation. |
| `S06_REASON_SUMMARY` | `find the rightmost place that can increase make the smallest possible increase there then minimize everything after it` | Optimal reasoning chain. |
| `S06_EXECUTE` | `Now let’s execute that on our master example` | Real master input ready for trace. |

No seconds or frame numbers belong here before final MP3 + exact sync exist.

---

# 8. WORD-BASED CHOREOGRAPHY


## BEAT 01 — `S06_START_RIGHT`

### SPOKEN PHRASE
`Start from the right side`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
The locked master Array V2 `[2,1,5,4,4,3,0]` is centered. A scan-origin marker appears at the right edge only.

### CENTER-STAGE HERO
Right-to-left search origin.

### KIT / EXISTING SYSTEM
ArrayTrackV2 + ArraySlotV2 + ArrayValueV2 + ArrayIndexRowV2 + existing pointer/scan primitive.

### CAUSE
Narration tells us where to begin.

### EFFECT / MOTION
Direct attention to the right edge; do not move through comparisons yet.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No pivot index, no suffix band, no successor.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep the right-origin clue for the next phrase.

### MINIMUM PERSISTENT STATE
Master array + right-origin clue.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 02 — `S06_FIND_I`

### SPOKEN PHRASE
`first index i where nums at i is smaller than nums at i plus one`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
A conceptual comparison window of two adjacent Array V2 slots appears with labels `i` and `i+1`; relation `nums[i] < nums[i+1] ?` appears.

### CENTER-STAGE HERO
Pivot-condition comparison.

### KIT / EXISTING SYSTEM
Array V2 + PointerLaneV2 if its real API supports pair labels + ChalkText/RoughLine.

### CAUSE
Narration defines the exact condition.

### EFFECT / MOTION
Show strict `<` only; no answer selected yet.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No `i=1`, no pivot label, no successor.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep comparison window for the `Why?` explanation.

### MINIMUM PERSISTENT STATE
Master + unresolved condition.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 03 — `S06_WHY`

### SPOKEN PHRASE
`Why`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
No new algorithm state; unresolved condition becomes the teaching question.

### CENTER-STAGE HERO
`WHY THIS CONDITION?`

### KIT / EXISTING SYSTEM
ChalkText + Array V2.

### CAUSE
Narration asks for reasoning.

### EFFECT / MOTION
Direct attention from the condition toward the right-side portion of the array.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
Do not reveal suffix proof before narration.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep unresolved condition.

### MINIMUM PERSISTENT STATE
Master + unresolved comparison.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 04 — `S06_SUFFIX`

### SPOKEN PHRASE
`everything to the right of that position forms a non-increasing suffix`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
A reusable range band appears over the conceptual suffix only now, labeled `NON-INCREASING SUFFIX`.

### CENTER-STAGE HERO
Suffix structure.

### KIT / EXISTING SYSTEM
Array V2 + existing reusable range-band primitive + ChalkText.

### CAUSE
Narration introduces the structural fact.

### EFFECT / MOTION
Band grows from `i+1` to the right edge; show symbolic `>=` relation only as support.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No exact pivot value; no successor.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep suffix band for maximality proof.

### MINIMUM PERSISTENT STATE
Master + suffix band.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 05 — `S06_SUFFIX_MAX`

### SPOKEN PHRASE
`That suffix is already the largest possible arrangement of those suffix values`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Suffix band becomes hero; compact `MAXIMAL SUFFIX` relation appears.

### CENTER-STAGE HERO
Why suffix cannot be increased internally.

### KIT / EXISTING SYSTEM
ChalkText + reusable range band.

### CAUSE
Narration states maximality.

### EFFECT / MOTION
Show `non-increasing → maximal arrangement`.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No concrete reordering; no result array.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep relation for next consequence.

### MINIMUM PERSISTENT STATE
Suffix + maximality relation.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 06 — `S06_CANT_SUFFIX`

### SPOKEN PHRASE
`changing only that suffix cannot give us a larger permutation`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
A hypothetical `rearrange suffix only` relation is rejected; real values never move.

### CENTER-STAGE HERO
Rejected suffix-only strategy.

### KIT / EXISTING SYSTEM
Array V2 + ChalkText/RoughLine.

### CAUSE
Narration gives consequence.

### EFFECT / MOTION
Cause→effect: suffix already maximal → suffix-only rearrangement cannot increase.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No fake alternative permutation.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Erase rejected strategy.

### MINIMUM PERSISTENT STATE
Master + pivot-condition context.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 07 — `S06_PIVOT_CONCEPT`

### SPOKEN PHRASE
`The first place where we can increase the permutation is the pivot`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Only now write `PIVOT` next to conceptual `i`, without revealing verified index.

### CENTER-STAGE HERO
Conceptual pivot role.

### KIT / EXISTING SYSTEM
PointerLaneV2 + ChalkText.

### CAUSE
Narration names the position.

### EFFECT / MOTION
The condition semantically resolves to pivot when true.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No `i=1`; no successor.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep pivot concept.

### MINIMUM PERSISTENT STATE
Conceptual pivot marker.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 08 — `S06_SMALLEST_INCREASE`

### SPOKEN PHRASE
`increase that pivot but only by the smallest possible amount`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Pivot marker owns center with unresolved `SMALLEST VALUE > PIVOT`.

### CENTER-STAGE HERO
Minimal pivot increase objective.

### KIT / EXISTING SYSTEM
ChalkText + Array V2.

### CAUSE
Narration defines minimality.

### EFFECT / MOTION
Build the relation in narration order.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No actual value `3`.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep unresolved successor requirement.

### MINIMUM PERSISTENT STATE
Pivot + smallest-greater criterion.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 09 — `S06_SEARCH_RIGHT_AGAIN`

### SPOKEN PHRASE
`search from the right again`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
A successor-search marker appears at the right edge and points left over the suffix.

### CENTER-STAGE HERO
Successor scan direction.

### KIT / EXISTING SYSTEM
PointerLaneV2 or existing scan primitive.

### CAUSE
Narration gives direction.

### EFFECT / MOTION
Show direction only.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No j index/value.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep scan marker.

### MINIMUM PERSISTENT STATE
Pivot + suffix + successor scan.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 10 — `S06_STRICT_GREATER`

### SPOKEN PHRASE
`first value that is strictly greater than the pivot`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Criterion `nums[j] > nums[i]` appears with strict `>` emphasized.

### CENTER-STAGE HERO
Successor condition.

### KIT / EXISTING SYSTEM
ChalkText + Array V2.

### CAUSE
Narration defines valid replacement.

### EFFECT / MOTION
Attach condition to right-to-left search.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No j=5/value3.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep criterion.

### MINIMUM PERSISTENT STATE
Conceptual pivot + successor rule.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 11 — `S06_RIGHT_FIRST_SMALLEST`

### SPOKEN PHRASE
`Because the suffix is non-increasing the first greater value from the right is the smallest value that can increase the pivot`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Suffix band becomes hero; conceptual descending order is scanned from the right until the first valid `> pivot` position.

### CENTER-STAGE HERO
Proof that rightmost scan yields minimal greater value.

### KIT / EXISTING SYSTEM
Array V2 + reusable range band + pointer/scan primitive + ChalkText.

### CAUSE
Narration proves search choice.

### EFFECT / MOTION
Cause→effect: non-increasing suffix + right scan → smallest valid greater value.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No real master comparisons.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Reduce to pivot/successor roles.

### MINIMUM PERSISTENT STATE
Conceptual roles only.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 12 — `S06_SWAP_CONCEPT`

### SPOKEN PHRASE
`We swap those two values`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Use a detached conceptual two-value swap with `PIVOT` and `SUCCESSOR` labels, not real master values.

### CENTER-STAGE HERO
Conceptual swap.

### KIT / EXISTING SYSTEM
ArraySlotV2 + ArrayValueV2 + existing deterministic movement helper.

### CAUSE
Narration authorizes swap.

### EFFECT / MOTION
Values move; slots stay fixed.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No real `1 ↔ 3`.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Conceptual demo exits after teaching.

### MINIMUM PERSISTENT STATE
Real master stays untouched.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 13 — `S06_NOW_LARGER`

### SPOKEN PHRASE
`Now the permutation is larger`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Compact relation `NEW PREFIX > OLD PREFIX` appears without numeric arrays.

### CENTER-STAGE HERO
Effect of conceptual swap.

### KIT / EXISTING SYSTEM
ChalkText/RoughLine.

### CAUSE
Narration states result.

### EFFECT / MOTION
Cause→effect from swap to larger permutation.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No final next permutation.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep relation for contrast.

### MINIMUM PERSISTENT STATE
Conceptual larger state.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 14 — `S06_SUFFIX_STILL_NONINC`

### SPOKEN PHRASE
`after this swap the suffix is still non-increasing`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Conceptual suffix band reappears with `STILL NON-INCREASING`.

### CENTER-STAGE HERO
Post-swap suffix property.

### KIT / EXISTING SYSTEM
Reusable range band + ChalkText.

### CAUSE
Narration supplies reversal prerequisite.

### EFFECT / MOTION
Show property only.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No real post-swap array.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep for minimization.

### MINIMUM PERSISTENT STATE
Conceptual suffix property.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 15 — `S06_VERY_NEXT`

### SPOKEN PHRASE
`we still need the very next permutation`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Show `LARGER ✓ ... BUT NEXT ?`.

### CENTER-STAGE HERO
Difference between larger and immediate next.

### KIT / EXISTING SYSTEM
ChalkText.

### CAUSE
Narration distinguishes goal.

### EFFECT / MOTION
Direct attention to suffix as remaining minimization area.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No final answer.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep unresolved `NEXT ?`.

### MINIMUM PERSISTENT STATE
Prefix greater; suffix unresolved.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 16 — `S06_SUFFIX_MIN`

### SPOKEN PHRASE
`everything after the pivot must become as small as possible`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Suffix band gets `MINIMIZE`; prefix becomes quiet locked context.

### CENTER-STAGE HERO
Suffix minimization objective.

### KIT / EXISTING SYSTEM
Reusable range band + ChalkText.

### CAUSE
Narration states continuation.

### EFFECT / MOTION
Direct attention to suffix only.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No reverse action before proof.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep suffix band.

### MINIMUM PERSISTENT STATE
Suffix must be minimal.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 17 — `S06_REVERSE_PROOF`

### SPOKEN PHRASE
`Because the suffix is non-increasing reversing it gives us the smallest possible suffix`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
A conceptual mini Array V2 suffix changes from non-increasing to non-decreasing using deterministic value motion.

### CENTER-STAGE HERO
Why reverse is enough.

### KIT / EXISTING SYSTEM
Mini Array V2 + existing deterministic movement helper.

### CAUSE
Narration proves reversal.

### EFFECT / MOTION
Show order direction flip; do not mutate the real master.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No real final array.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep `REVERSE → MINIMUM SUFFIX`.

### MINIMUM PERSISTENT STATE
Conceptual reverse proof.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 18 — `S06_NO_SORT`

### SPOKEN PHRASE
`we do not need to sort it`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
`SORT` appears and is crossed/erased beside already-proven reverse relation.

### CENTER-STAGE HERO
Eliminate unnecessary sort.

### KIT / EXISTING SYSTEM
ChalkText/RoughLine.

### CAUSE
Narration rejects sorting.

### EFFECT / MOTION
Direct rejection only.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No sorting-code comparison.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Erase SORT; keep REVERSE.

### MINIMUM PERSISTENT STATE
REVERSE remains.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 19 — `S06_REVERSE`

### SPOKEN PHRASE
`We simply reverse it`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
`REVERSE SUFFIX` becomes sole hero.

### CENTER-STAGE HERO
Final optimal operation.

### KIT / EXISTING SYSTEM
ChalkText.

### CAUSE
Narration names operation.

### EFFECT / MOTION
Settle conceptual method.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No trace execution.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Prepare summary.

### MINIMUM PERSISTENT STATE
Pivot→successor→reverse concept.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 20 — `S06_REASON_SUMMARY`

### SPOKEN PHRASE
`find the rightmost place that can increase make the smallest possible increase there then minimize everything after it`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Build three-stage chain in spoken order: `RIGHTMOST INCREASE → SMALLEST GREATER → MINIMIZE SUFFIX`.

### CENTER-STAGE HERO
Optimal reasoning chain.

### KIT / EXISTING SYSTEM
ChalkText + RoughLine.

### CAUSE
Narration summarizes method.

### EFFECT / MOTION
Only current node is strong; prior nodes dim but persist until chain complete.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No code/real trace.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Compress chain to small Method2 breadcrumb.

### MINIMUM PERSISTENT STATE
Method2 reasoning chain.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 21 — `S06_EXECUTE`

### SPOKEN PHRASE
`Now let’s execute that on our master example`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Concept chain recedes. Original locked master Array V2 returns center untouched `[2,1,5,4,4,3,0]` with no markers.

### CENTER-STAGE HERO
Real master input ready for trace.

### KIT / EXISTING SYSTEM
ArrayTrackV2 + ArraySlotV2 + ArrayValueV2 + ArrayIndexRowV2.

### CAUSE
Narration hands concept to execution.

### EFFECT / MOTION
Representation handoff concept→real array.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No pre-marked pivot/j/swap/final.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
End on untouched master.

### MINIMUM PERSISTENT STATE
Exact master input only.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



---

# 9. CONTINUITY OUT

Untouched master `[2,1,5,4,4,3,0]`, no algorithm markers; ready for Scene07.

---


# MANDATORY ANTIGRAVITY WORD-SYNC → EXACT FRAME-PLAN CONTRACT

This section is part of the approved Scene 06 plan.

The future MP3 + exact word-sync JSON provide **WHEN**.  
This document provides **WHAT / WHY / ORDER / STATE / ENTER / EXIT / KIT / NO-SPOILER**.

## Required inputs

1. this approved Scene 06 word plan;
2. final Scene 06 MP3;
3. exact Scene 06 word-sync JSON matching that MP3;
4. verified Q12 script;
5. verified Q12 teaching trace where algorithm state is involved;
6. actual previous-scene implemented final state;
7. actual Foundation V2 / repo components;
8. authoritative project FPS/audio-sync helper.

If MP3 or sync JSON is missing:

```text
SCENE 06 FRAME PLAN: BLOCKED
REASON: EXACT AUDIO SOURCE REQUIRED
```

No WPM estimate. No guessed seconds. No guessed frames.

## Do not reduce this plan

Do NOT:

- summarize beats;
- merge beats because timing is tight;
- remove spoken-value reveals;
- remove code-typing beats;
- remove pointer moves;
- remove cleanup/exit;
- drop `WHAT MUST NOT APPEAR YET`;
- pre-reveal future information;
- replace semantic motion with generic fades.

If a real timing window is short, simplify motion amplitude/complexity—not semantic content.

## Raw sync is immutable

Assign ordered stable IDs:

```text
W0000
W0001
W0002
...
```

Keep:

```text
raw_sync_text
normalized_script_phrase
```

Repeated words resolve by ordered identity. Ambiguous mapping:

```text
UNRESOLVED — SOURCE REQUIRED
```

## Resolve every anchor

For every `S06_*` anchor derive:

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

Write the scene anchor manifest using the real project naming convention, e.g.:

```text
sync/06-optimal-idea.anchors.json
```

## Frame convention

Use the actual project `audioSyncV2` or current equivalent.

```text
[startFrame, endFrameExclusive)
```

If `duration_frames = N`, valid rendered frames are `0..N-1`; `N` is the exclusive boundary.

## Sub-actions

Do not invent percentage timing.

Bind actions to actual words/subphrases or real pauses.

Pointer movement starts only when the movement phrase is spoken.  
Swap movement starts only when the swap phrase is spoken.  
Character typing is distributed deterministically across the exact spoken code window.

## Holds

Use only real pauses from sync. Never invent a comprehension hold or extend scene duration.

## Geometry

No guessed pixels.

Derive from actual component geometry, kit constants, slot centers, pointer lanes, code layout, roadmap/problem-opener bounds, and deterministic functions.

If unresolved:

```text
UNRESOLVED — SOURCE REQUIRED
```

## Component audit

Create `REUSE_EXTEND_CREATE.md` with:

```text
REUSE / EXTEND / CREATE
actual repo path
actual export/helper
reason
```

## Exact frame-wise plan output

For every approved beat preserve:

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
SUPPORTING REACTION
COMPREHENSION HOLD
CLEANUP / EXIT
PERSISTENT STATE
STATE AFTER
COMPONENTS / ACTUAL IMPORT PATHS
MOTION PURPOSE
WHAT MUST NOT APPEAR YET
VALIDATION
```

## Code scenes

```text
spoken code idea
→ active line types character-by-character
→ future lines stay nonexistent
→ line completes
→ semantic proof may take center
→ proof exits/reduces
→ code returns as hero
```

## Captions

Same exact sync source as visual anchors. No second timing authority.

## PASS requires

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
unresolved source requirements     = 0
```

Only after frame-plan QA passes:

```text
WORD PLAN
→ exact word sync
→ exact frame plan
→ frame QA
→ IMPLEMENT
→ render exact semantic checkpoints
→ visual/state QA
→ auto-correct
→ PASS
```


---

# FINAL WORD-PLAN SELF-AUDIT

```text
SCRIPT SEMANTIC BEATS COVERED      = 21
GUESSED SECONDS                    = 0
GUESSED FRAMES                     = 0
GUESSED PIXEL COORDINATES          = 0
GENERIC ARRAY COMPONENTS           = 0
FUTURE-SOLUTION SPOILERS           = 0
DECORATIVE-ONLY MOTION             = 0
RAW SYNC MODIFICATIONS             = 0
```
