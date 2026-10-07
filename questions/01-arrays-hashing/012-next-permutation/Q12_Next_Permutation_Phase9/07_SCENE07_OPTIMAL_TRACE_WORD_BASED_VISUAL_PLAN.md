# Q12 — Next Permutation (LC 31)
# Phase 9 · Scene 07 — Method 2 · Full Verified Trace
## WORD-BASED VISUAL PLAN — SEMANTIC FRAME PLAN WITHOUT GUESSED TIME

**Scene purpose:** Execute the Phase-5 master trace exactly with no skipped or invented state.

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

Scene07 begins on untouched master `[2,1,5,4,4,3,0]` with no algorithm pointers.

---

# 2. EXACT NARRATION SOURCE

```text
Our array is...

two... one... five... four... four... three... zero.

We start the pivot search from the second-last index.

At index five...

three is smaller than zero?

No.

Move left.

At index four...

four is smaller than three?

No.

Move left.

At index three...

four is smaller than four?

No.

Equal values do not satisfy the condition.

Move left.

At index two...

five is smaller than four?

No.

Move left.

At index one...

one is smaller than five?

Yes.

So index one is our pivot.

The pivot value is one.

Everything after it...

five... four... four... three... zero...

is non-increasing.

Now we find the value that should replace the pivot.

Start from the last index.

Zero is greater than one?

No.

Move left.

Three is greater than one?

Yes.

So index five is our successor.

The successor value is three.

Now swap the pivot and successor.

One swaps with three.

The array becomes...

two... three... five... four... four... one... zero.

Now the permutation is larger...

but the suffix is still as large as possible.

We need the smallest possible suffix.

So reverse everything after the pivot.

Our reverse range is index two to index six.

Swap five and zero.

The array becomes...

two... three... zero... four... four... one... five.

Move inward.

Swap four and one.

The array becomes...

two... three... zero... one... four... four... five.

Now both reverse pointers meet.

We stop.

Our final answer is...

two... three... zero... one... four... four... five.

That is the immediate next permutation.
```

---

# 3. LOCKED SCENE TRUTH

Authoritative trace:
i=5 `3<0` false
i=4 `4<3` false
i=3 `4<4` false
i=2 `5<4` false
i=1 `1<5` true
pivot=1
j=6 `0>1` false
j=5 `3>1` true
successor=3
swap→`[2,3,5,4,4,1,0]`
reverse swap1→`[2,3,0,4,4,1,5]`
reverse swap2→`[2,3,0,1,4,4,5]`
left=right=4 stop.

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

- Pointer moves only on spoken move phrases.
- Values move; slots/indices never move.
- No middle self-swap.
- Repeated `four` uses ordered word IDs.
- No code in Scene07.

---

# 7. SEMANTIC ANCHOR MANIFEST — NO TIME / NO FRAMES

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S07_MASTER` | `Our array is` | Master trace array. |
| `S07_VALUES` | `two one five four four three zero` | Spoken value readback. |
| `S07_I_START` | `start the pivot search from the second-last index` | i=5. |
| `S07_C5` | `At index five three is smaller than zero` | Comparison `3<0`. |
| `S07_N5` | `No` | False result. |
| `S07_M54` | `Move left` | i=4. |
| `S07_C4` | `At index four four is smaller than three` | Comparison `4<3`. |
| `S07_N4` | `No` | False result. |
| `S07_M43` | `Move left` | i=3. |
| `S07_C3` | `At index three four is smaller than four` | Equality comparison. |
| `S07_NEQ` | `No` | Equality fails strict condition. |
| `S07_EQ_RULE` | `Equal values do not satisfy the condition` | Strictness proof. |
| `S07_M32` | `Move left` | i=2. |
| `S07_C2` | `At index two five is smaller than four` | Comparison `5<4`. |
| `S07_N2` | `No` | False result. |
| `S07_M21` | `Move left` | i=1. |
| `S07_C1` | `At index one one is smaller than five` | Verified true comparison. |
| `S07_Y1` | `Yes` | True result. |
| `S07_PIVOT` | `index one is our pivot` | Pivot index1. |
| `S07_PIVOT_VAL` | `The pivot value is one` | Pivot value1. |
| `S07_SUFFIX` | `Everything after it five four four three zero is non-increasing` | Verified suffix. |
| `S07_FIND_REPL` | `Now we find the value that should replace the pivot` | Successor-search goal. |
| `S07_J_START` | `Start from the last index` | j=6. |
| `S07_J6` | `Zero is greater than one` | Comparison `0>1`. |
| `S07_J6_NO` | `No` | False successor check. |
| `S07_J_MOVE` | `Move left` | j=5. |
| `S07_J5` | `Three is greater than one` | Comparison `3>1`. |
| `S07_J5_YES` | `Yes` | True successor check. |
| `S07_SUCCESSOR` | `index five is our successor` | Successor index5. |
| `S07_SUCCESSOR_VAL` | `The successor value is three` | Successor value3. |
| `S07_SWAP_PREP` | `Now swap the pivot and successor` | Prepared real swap. |
| `S07_SWAP` | `One swaps with three` | Verified `1↔3` swap. |
| `S07_AFTER_SWAP` | `The array becomes two three five four four one zero` | Verified post-swap state. |
| `S07_LARGER` | `Now the permutation is larger` | Why result is larger. |
| `S07_SUFFIX_MAX` | `but the suffix is still as large as possible` | Post-swap suffix problem. |
| `S07_MIN_SUFFIX` | `We need the smallest possible suffix` | Suffix goal. |
| `S07_RANGE` | `reverse everything after the pivot Our reverse range is index two to index six` | Reverse range2..6. |
| `S07_RSWAP1` | `Swap five and zero` | Reverse swap1. |
| `S07_STATE1` | `The array becomes two three zero four four one five` | Verified state1. |
| `S07_INWARD1` | `Move inward` | left3,right5. |
| `S07_RSWAP2` | `Swap four and one` | Reverse swap2. |
| `S07_STATE2` | `The array becomes two three zero one four four five` | Verified final array. |
| `S07_MEET` | `Now both reverse pointers meet` | left=right=4. |
| `S07_STOP` | `We stop` | Termination. |
| `S07_FINAL` | `Our final answer is two three zero one four four five` | Final answer. |
| `S07_IMMEDIATE` | `That is the immediate next permutation` | Immediate-next conclusion. |

No seconds or frame numbers belong here before final MP3 + exact sync exist.

---

# 8. WORD-BASED CHOREOGRAPHY


## BEAT 01 — `S07_MASTER`

### SPOKEN PHRASE
`Our array is`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Untouched master Array V2 is centered with indices visible.

### CENTER-STAGE HERO
Master trace array.

### KIT / EXISTING SYSTEM
ArrayTrackV2 + ArraySlotV2 + ArrayValueV2 + ArrayIndexRowV2.

### CAUSE
Narration begins verified trace.

### EFFECT / MOTION
No mutation; prepare spoken readback.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No i pointer yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep array.

### MINIMUM PERSISTENT STATE
Master array.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 02 — `S07_VALUES`

### SPOKEN PHRASE
`two one five four four three zero`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Focus existing values one spoken token at a time across `[2,1,5,4,4,3,0]`.

### CENTER-STAGE HERO
Spoken value readback.

### KIT / EXISTING SYSTEM
ArrayValueV2 focus states.

### CAUSE
Narration reads input.

### EFFECT / MOTION
Attention moves slot-to-slot only.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No pointer/mutation.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
End whole array neutral.

### MINIMUM PERSISTENT STATE
Master unchanged.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.

### PRECISION NOTE
Repeated `four` tokens resolve by ordered word IDs.



## BEAT 03 — `S07_I_START`

### SPOKEN PHRASE
`start the pivot search from the second-last index`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Pointer `i` appears at index5; comparison pair indices5/6 becomes active.

### CENTER-STAGE HERO
i=5.

### KIT / EXISTING SYSTEM
PointerLaneV2 + Array V2.

### CAUSE
Narration initializes search.

### EFFECT / MOTION
Place i at second-last index.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No comparison result yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep pointer.

### MINIMUM PERSISTENT STATE
i=5, array unchanged.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 04 — `S07_C5`

### SPOKEN PHRASE
`At index five three is smaller than zero`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Slots5/6 hero; `3 < 0 ?`.

### CENTER-STAGE HERO
Comparison `3<0`.

### KIT / EXISTING SYSTEM
Array V2 + ChalkText.

### CAUSE
Narration states check.

### EFFECT / MOTION
Build comparison only.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No false result until `No`.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep comparison.

### MINIMUM PERSISTENT STATE
i=5.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 05 — `S07_N5`

### SPOKEN PHRASE
`No`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Resolve `3<0` false.

### CENTER-STAGE HERO
False result.

### KIT / EXISTING SYSTEM
ChalkText.

### CAUSE
Narration answers.

### EFFECT / MOTION
Mark false only.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No pointer move until `Move left`.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Clear on move.

### MINIMUM PERSISTENT STATE
i=5.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 06 — `S07_M54`

### SPOKEN PHRASE
`Move left`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Move i 5→4.

### CENTER-STAGE HERO
i=4.

### KIT / EXISTING SYSTEM
PointerLaneV2.

### CAUSE
Narration moves search.

### EFFECT / MOTION
Pointer moves exactly one slot.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No next comparison early.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Settle.

### MINIMUM PERSISTENT STATE
i=4.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 07 — `S07_C4`

### SPOKEN PHRASE
`At index four four is smaller than three`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Slots4/5 hero; `4 < 3 ?`.

### CENTER-STAGE HERO
Comparison `4<3`.

### KIT / EXISTING SYSTEM
Array V2 + ChalkText.

### CAUSE
Narration states check.

### EFFECT / MOTION
Build comparison.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No result early.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep.

### MINIMUM PERSISTENT STATE
i=4.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 08 — `S07_N4`

### SPOKEN PHRASE
`No`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Resolve false.

### CENTER-STAGE HERO
False result.

### KIT / EXISTING SYSTEM
ChalkText.

### CAUSE
Narration answers.

### EFFECT / MOTION
Mark false.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No move early.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Clear on move.

### MINIMUM PERSISTENT STATE
i=4.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 09 — `S07_M43`

### SPOKEN PHRASE
`Move left`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Move i 4→3.

### CENTER-STAGE HERO
i=3.

### KIT / EXISTING SYSTEM
PointerLaneV2.

### CAUSE
Narration moves.

### EFFECT / MOTION
Pointer move only.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No next check early.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Settle.

### MINIMUM PERSISTENT STATE
i=3.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 10 — `S07_C3`

### SPOKEN PHRASE
`At index three four is smaller than four`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Slots3/4 hero; `4 < 4 ?`.

### CENTER-STAGE HERO
Equality comparison.

### KIT / EXISTING SYSTEM
Array V2 + ChalkText.

### CAUSE
Narration states check.

### EFFECT / MOTION
Build strict comparison.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No result early.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep.

### MINIMUM PERSISTENT STATE
i=3.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 11 — `S07_NEQ`

### SPOKEN PHRASE
`No`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Resolve `4<4` false.

### CENTER-STAGE HERO
Equality fails strict condition.

### KIT / EXISTING SYSTEM
ChalkText.

### CAUSE
Narration says no.

### EFFECT / MOTION
Mark false.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No pointer move yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep for explanation.

### MINIMUM PERSISTENT STATE
i=3.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 12 — `S07_EQ_RULE`

### SPOKEN PHRASE
`Equal values do not satisfy the condition`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Strict `<` becomes hero; equality `4=4` is explicitly contrasted with rejected `<`.

### CENTER-STAGE HERO
Strictness proof.

### KIT / EXISTING SYSTEM
ChalkText + Array V2.

### CAUSE
Narration explains duplicate behavior.

### EFFECT / MOTION
Show relation only; array unchanged.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No pivot.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Clear proof before move.

### MINIMUM PERSISTENT STATE
i=3.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 13 — `S07_M32`

### SPOKEN PHRASE
`Move left`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Move i 3→2.

### CENTER-STAGE HERO
i=2.

### KIT / EXISTING SYSTEM
PointerLaneV2.

### CAUSE
Narration moves.

### EFFECT / MOTION
Pointer move.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No next comparison early.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Settle.

### MINIMUM PERSISTENT STATE
i=2.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 14 — `S07_C2`

### SPOKEN PHRASE
`At index two five is smaller than four`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Slots2/3 hero; `5 < 4 ?`.

### CENTER-STAGE HERO
Comparison `5<4`.

### KIT / EXISTING SYSTEM
Array V2 + ChalkText.

### CAUSE
Narration states check.

### EFFECT / MOTION
Build comparison.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No result early.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep.

### MINIMUM PERSISTENT STATE
i=2.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 15 — `S07_N2`

### SPOKEN PHRASE
`No`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Resolve false.

### CENTER-STAGE HERO
False result.

### KIT / EXISTING SYSTEM
ChalkText.

### CAUSE
Narration says no.

### EFFECT / MOTION
Mark false.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No move early.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Clear on move.

### MINIMUM PERSISTENT STATE
i=2.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 16 — `S07_M21`

### SPOKEN PHRASE
`Move left`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Move i 2→1.

### CENTER-STAGE HERO
i=1.

### KIT / EXISTING SYSTEM
PointerLaneV2.

### CAUSE
Narration moves.

### EFFECT / MOTION
Pointer move only.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No true result early.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Settle.

### MINIMUM PERSISTENT STATE
i=1.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 17 — `S07_C1`

### SPOKEN PHRASE
`At index one one is smaller than five`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Slots1/2 hero; `1 < 5 ?`.

### CENTER-STAGE HERO
Verified true comparison.

### KIT / EXISTING SYSTEM
Array V2 + ChalkText.

### CAUSE
Narration states check.

### EFFECT / MOTION
Build comparison.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No pivot label before `Yes`/pivot phrase.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep.

### MINIMUM PERSISTENT STATE
i=1.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 18 — `S07_Y1`

### SPOKEN PHRASE
`Yes`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Resolve `1<5` true.

### CENTER-STAGE HERO
True result.

### KIT / EXISTING SYSTEM
ChalkText.

### CAUSE
Narration says yes.

### EFFECT / MOTION
Confirm result only.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No successor yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep i=1.

### MINIMUM PERSISTENT STATE
i=1 valid.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 19 — `S07_PIVOT`

### SPOKEN PHRASE
`index one is our pivot`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Pointer label becomes `PIVOT i=1`.

### CENTER-STAGE HERO
Pivot index1.

### KIT / EXISTING SYSTEM
PointerLaneV2 + ChalkText.

### CAUSE
Narration identifies pivot.

### EFFECT / MOTION
State label only.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No successor.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep.

### MINIMUM PERSISTENT STATE
pivot i=1.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 20 — `S07_PIVOT_VAL`

### SPOKEN PHRASE
`The pivot value is one`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Slot1 value1 becomes hero; label `pivot value=1`.

### CENTER-STAGE HERO
Pivot value1.

### KIT / EXISTING SYSTEM
ArrayValueV2 + ChalkText.

### CAUSE
Narration states value.

### EFFECT / MOTION
Direct attention.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No successor value3.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep pivot marker.

### MINIMUM PERSISTENT STATE
pivot=1.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 21 — `S07_SUFFIX`

### SPOKEN PHRASE
`Everything after it five four four three zero is non-increasing`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Reusable suffix band spans indices2..6; values focus in spoken order; `5 >= 4 >= 4 >= 3 >= 0` appears only as narration reaches them.

### CENTER-STAGE HERO
Verified suffix.

### KIT / EXISTING SYSTEM
Array V2 + reusable range band + ChalkText.

### CAUSE
Narration verifies structure.

### EFFECT / MOTION
No value movement.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No j pointer before next phase.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep subdued band.

### MINIMUM PERSISTENT STATE
pivot1 + suffix2..6.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 22 — `S07_FIND_REPL`

### SPOKEN PHRASE
`Now we find the value that should replace the pivot`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Criterion `> pivot` appears unresolved.

### CENTER-STAGE HERO
Successor-search goal.

### KIT / EXISTING SYSTEM
ChalkText + Array V2.

### CAUSE
Narration changes phase.

### EFFECT / MOTION
Direct attention from suffix property to replacement criterion.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No j/value yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep.

### MINIMUM PERSISTENT STATE
pivot1.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 23 — `S07_J_START`

### SPOKEN PHRASE
`Start from the last index`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Pointer j appears at index6.

### CENTER-STAGE HERO
j=6.

### KIT / EXISTING SYSTEM
PointerLaneV2.

### CAUSE
Narration initializes successor scan.

### EFFECT / MOTION
Place j at last index.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No comparison result.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep j.

### MINIMUM PERSISTENT STATE
i=1,j=6.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 24 — `S07_J6`

### SPOKEN PHRASE
`Zero is greater than one`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Slots6 and pivot1 hero; `0 > 1 ?`.

### CENTER-STAGE HERO
Comparison `0>1`.

### KIT / EXISTING SYSTEM
Array V2 + ChalkText.

### CAUSE
Narration states check.

### EFFECT / MOTION
Build comparison.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No false early.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep.

### MINIMUM PERSISTENT STATE
i=1,j=6.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 25 — `S07_J6_NO`

### SPOKEN PHRASE
`No`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Resolve false.

### CENTER-STAGE HERO
False successor check.

### KIT / EXISTING SYSTEM
ChalkText.

### CAUSE
Narration says no.

### EFFECT / MOTION
Mark false.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No move before `Move left`.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Clear on move.

### MINIMUM PERSISTENT STATE
i=1,j=6.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 26 — `S07_J_MOVE`

### SPOKEN PHRASE
`Move left`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Move j 6→5.

### CENTER-STAGE HERO
j=5.

### KIT / EXISTING SYSTEM
PointerLaneV2.

### CAUSE
Narration moves.

### EFFECT / MOTION
Pointer move only.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No next result early.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Settle.

### MINIMUM PERSISTENT STATE
i=1,j=5.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 27 — `S07_J5`

### SPOKEN PHRASE
`Three is greater than one`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Slots5 and pivot1 hero; `3 > 1 ?`.

### CENTER-STAGE HERO
Comparison `3>1`.

### KIT / EXISTING SYSTEM
Array V2 + ChalkText.

### CAUSE
Narration states check.

### EFFECT / MOTION
Build comparison.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No true result before `Yes`.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep.

### MINIMUM PERSISTENT STATE
i=1,j=5.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 28 — `S07_J5_YES`

### SPOKEN PHRASE
`Yes`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Resolve true.

### CENTER-STAGE HERO
True successor check.

### KIT / EXISTING SYSTEM
ChalkText.

### CAUSE
Narration says yes.

### EFFECT / MOTION
Confirm only.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No swap yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep.

### MINIMUM PERSISTENT STATE
i=1,j=5.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 29 — `S07_SUCCESSOR`

### SPOKEN PHRASE
`index five is our successor`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
j label becomes `SUCCESSOR j=5`.

### CENTER-STAGE HERO
Successor index5.

### KIT / EXISTING SYSTEM
PointerLaneV2 + ChalkText.

### CAUSE
Narration identifies successor.

### EFFECT / MOTION
State label only.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No swap.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep.

### MINIMUM PERSISTENT STATE
i=1,j=5.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 30 — `S07_SUCCESSOR_VAL`

### SPOKEN PHRASE
`The successor value is three`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Slot5 value3 becomes hero; label `successor value=3`.

### CENTER-STAGE HERO
Successor value3.

### KIT / EXISTING SYSTEM
ArrayValueV2 + ChalkText.

### CAUSE
Narration states value.

### EFFECT / MOTION
Direct attention.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No swap early.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep pivot/successor.

### MINIMUM PERSISTENT STATE
pivot1,successor3.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 31 — `S07_SWAP_PREP`

### SPOKEN PHRASE
`Now swap the pivot and successor`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Values at indices1 and5 become only strong values; prepare deterministic paths.

### CENTER-STAGE HERO
Prepared real swap.

### KIT / EXISTING SYSTEM
Array V2 + existing deterministic swap helper.

### CAUSE
Narration authorizes swap.

### EFFECT / MOTION
Prepare movement without finishing before value phrase if sync separates them.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No reverse pointers.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep swap focus.

### MINIMUM PERSISTENT STATE
i=1,j=5.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 32 — `S07_SWAP`

### SPOKEN PHRASE
`One swaps with three`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Perform real value swap index1↔5; slots/indices fixed.

### CENTER-STAGE HERO
Verified `1↔3` swap.

### KIT / EXISTING SYSTEM
ArrayValueV2 + existing BezierFlight/deterministic helper.

### CAUSE
Narration names values.

### EFFECT / MOTION
ArrayValueV2 values exchange and settle.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No pointer/region movement unrelated to swap.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Remove paths after settle.

### MINIMUM PERSISTENT STATE
Array `[2,3,5,4,4,1,0]`.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 33 — `S07_AFTER_SWAP`

### SPOKEN PHRASE
`The array becomes two three five four four one zero`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Read back existing post-swap array values in spoken order.

### CENTER-STAGE HERO
Verified post-swap state.

### KIT / EXISTING SYSTEM
ArrayValueV2 focus states.

### CAUSE
Narration confirms state.

### EFFECT / MOTION
Attention traversal only.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No reverse action yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Settle whole array.

### MINIMUM PERSISTENT STATE
[2,3,5,4,4,1,0].

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 34 — `S07_LARGER`

### SPOKEN PHRASE
`Now the permutation is larger`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Prefix `[2,3]` is compared semantically to compact original prefix `[2,1]`.

### CENTER-STAGE HERO
Why result is larger.

### KIT / EXISTING SYSTEM
Array V2 + ChalkText.

### CAUSE
Narration states effect.

### EFFECT / MOTION
Show prefix relation only.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No final next claim.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Clear relation on suffix contrast.

### MINIMUM PERSISTENT STATE
Post-swap array persists.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 35 — `S07_SUFFIX_MAX`

### SPOKEN PHRASE
`but the suffix is still as large as possible`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Suffix indices2..6 highlight `5,4,4,1,0` with `MAXIMAL`.

### CENTER-STAGE HERO
Post-swap suffix problem.

### KIT / EXISTING SYSTEM
Reusable range band + Array V2.

### CAUSE
Narration states why not done.

### EFFECT / MOTION
Direct attention to suffix.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No reverse swap early.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep band.

### MINIMUM PERSISTENT STATE
Post-swap + suffix.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 36 — `S07_MIN_SUFFIX`

### SPOKEN PHRASE
`We need the smallest possible suffix`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Label changes `MAXIMAL → MINIMUM NEEDED`; values still fixed.

### CENTER-STAGE HERO
Suffix goal.

### KIT / EXISTING SYSTEM
ChalkText + range band.

### CAUSE
Narration states target.

### EFFECT / MOTION
State-label change only.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No reverse before next phrase.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep range.

### MINIMUM PERSISTENT STATE
Suffix unresolved.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 37 — `S07_RANGE`

### SPOKEN PHRASE
`reverse everything after the pivot Our reverse range is index two to index six`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Pointers left=2 and right=6 appear; band spans 2..6.

### CENTER-STAGE HERO
Reverse range2..6.

### KIT / EXISTING SYSTEM
PointerLaneV2 + range band + Array V2.

### CAUSE
Narration authorizes reversal.

### EFFECT / MOTION
Set endpoints only.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No swap yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep pointers.

### MINIMUM PERSISTENT STATE
left2,right6.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 38 — `S07_RSWAP1`

### SPOKEN PHRASE
`Swap five and zero`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Perform real swap index2↔6.

### CENTER-STAGE HERO
Reverse swap1.

### KIT / EXISTING SYSTEM
ArrayValueV2 + existing deterministic movement helper.

### CAUSE
Narration commands swap.

### EFFECT / MOTION
Values move; slots fixed.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
Do not move pointers yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep new state.

### MINIMUM PERSISTENT STATE
[2,3,0,4,4,1,5], left2,right6.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 39 — `S07_STATE1`

### SPOKEN PHRASE
`The array becomes two three zero four four one five`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Read back state1 in spoken order.

### CENTER-STAGE HERO
Verified state1.

### KIT / EXISTING SYSTEM
ArrayValueV2.

### CAUSE
Narration confirms state.

### EFFECT / MOTION
Focus values sequentially.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No pointer move early.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Settle.

### MINIMUM PERSISTENT STATE
[2,3,0,4,4,1,5].

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 40 — `S07_INWARD1`

### SPOKEN PHRASE
`Move inward`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
left2→3 and right6→5 as one paired semantic action.

### CENTER-STAGE HERO
left3,right5.

### KIT / EXISTING SYSTEM
PointerLaneV2.

### CAUSE
Narration moves both.

### EFFECT / MOTION
Move pointers only after state settled.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No swap early.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Settle.

### MINIMUM PERSISTENT STATE
state1,left3,right5.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 41 — `S07_RSWAP2`

### SPOKEN PHRASE
`Swap four and one`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Perform real swap index3↔5.

### CENTER-STAGE HERO
Reverse swap2.

### KIT / EXISTING SYSTEM
ArrayValueV2 + existing deterministic helper.

### CAUSE
Narration commands swap.

### EFFECT / MOTION
Values move; slots fixed.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No pointer move yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep new state.

### MINIMUM PERSISTENT STATE
[2,3,0,1,4,4,5], left3,right5.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 42 — `S07_STATE2`

### SPOKEN PHRASE
`The array becomes two three zero one four four five`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Read back final array in spoken order.

### CENTER-STAGE HERO
Verified final array.

### KIT / EXISTING SYSTEM
ArrayValueV2.

### CAUSE
Narration confirms state.

### EFFECT / MOTION
Focus values only.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No stop before pointer-meet phrase.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Settle.

### MINIMUM PERSISTENT STATE
[2,3,0,1,4,4,5].

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 43 — `S07_MEET`

### SPOKEN PHRASE
`Now both reverse pointers meet`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
left3→4 and right5→4; no values move.

### CENTER-STAGE HERO
left=right=4.

### KIT / EXISTING SYSTEM
PointerLaneV2.

### CAUSE
Narration states meeting.

### EFFECT / MOTION
Move both to index4 and settle.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No middle self-swap.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep meet state.

### MINIMUM PERSISTENT STATE
final array,left4,right4.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 44 — `S07_STOP`

### SPOKEN PHRASE
`We stop`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Pointer pair gets stop state; range resolves complete.

### CENTER-STAGE HERO
Termination.

### KIT / EXISTING SYSTEM
PointerLaneV2 + ChalkText.

### CAUSE
Narration stops reversal.

### EFFECT / MOTION
No extra action.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No self-swap.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Remove pointers/band after confirmation.

### MINIMUM PERSISTENT STATE
Final array only.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 45 — `S07_FINAL`

### SPOKEN PHRASE
`Our final answer is two three zero one four four five`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Final Array V2 stays center; values focus in spoken order; `NEXT PERMUTATION` label appears only after full readback.

### CENTER-STAGE HERO
Final answer.

### KIT / EXISTING SYSTEM
Array V2 + ChalkText.

### CAUSE
Narration states answer.

### EFFECT / MOTION
Confirmation only; no mutation.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No code.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep final array for correctness phrase.

### MINIMUM PERSISTENT STATE
Final `[2,3,0,1,4,4,5]`.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 46 — `S07_IMMEDIATE`

### SPOKEN PHRASE
`That is the immediate next permutation`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Compact semantic relation `ORIGINAL → NEXT` appears; original may be compact text/ghost identity, final remains real hero.

### CENTER-STAGE HERO
Immediate-next conclusion.

### KIT / EXISTING SYSTEM
ChalkText + Array V2.

### CAUSE
Narration states correctness.

### EFFECT / MOTION
Confirm and prepare code handoff.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No code lines yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Clear trace markers; reduce final array.

### MINIMUM PERSISTENT STATE
Method2 trace complete.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



---

# 9. CONTINUITY OUT

Verified final `[2,3,0,1,4,4,5]`, trace markers reduced; ready for code handoff.

---


# MANDATORY ANTIGRAVITY WORD-SYNC → EXACT FRAME-PLAN CONTRACT

This section is part of the approved Scene 07 plan.

The future MP3 + exact word-sync JSON provide **WHEN**.  
This document provides **WHAT / WHY / ORDER / STATE / ENTER / EXIT / KIT / NO-SPOILER**.

## Required inputs

1. this approved Scene 07 word plan;
2. final Scene 07 MP3;
3. exact Scene 07 word-sync JSON matching that MP3;
4. verified Q12 script;
5. verified Q12 teaching trace where algorithm state is involved;
6. actual previous-scene implemented final state;
7. actual Foundation V2 / repo components;
8. authoritative project FPS/audio-sync helper.

If MP3 or sync JSON is missing:

```text
SCENE 07 FRAME PLAN: BLOCKED
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

For every `S07_*` anchor derive:

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
sync/07-optimal-trace.anchors.json
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
SCRIPT SEMANTIC BEATS COVERED      = 46
GUESSED SECONDS                    = 0
GUESSED FRAMES                     = 0
GUESSED PIXEL COORDINATES          = 0
GENERIC ARRAY COMPONENTS           = 0
FUTURE-SOLUTION SPOILERS           = 0
DECORATIVE-ONLY MOTION             = 0
RAW SYNC MODIFICATIONS             = 0
```
