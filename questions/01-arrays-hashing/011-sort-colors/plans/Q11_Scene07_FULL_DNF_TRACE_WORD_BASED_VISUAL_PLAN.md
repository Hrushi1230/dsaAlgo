# Q11 — Sort Colors (LC 75)
# Step 8 · Scene 07 — Full 10-Step Dutch National Flag Trace
## WORD-BASED VISUAL PLAN — NO GUESSED FRAMES

**Course:** Code With Animation  
**Problem:** Q011 · Sort Colors · LC75 · Medium  
**Scene purpose:** Execute the complete verified Dutch National Flag trace on the locked 10-element master input. This is the scene where the learner watches `low`, `mid`, `high`, the four logical regions, every swap / self-swap / no-swap decision, every pointer update, and the shrinking UNKNOWN region until `mid > high`.

---

# 0. CONTINUITY — SCENE 06 → SCENE 07

Scene 07 begins from the exact real trace state handed off by Scene 06:

```text
MASTER INPUT
[2,1,2,0,2,1,0,1,0,2]

low  = 0
mid  = 0
high = 9
```

Four regions at the start:

```text
0s      [0 .. low-1]      = empty
1s      [low .. mid-1]    = empty
UNKNOWN [mid .. high]     = indices 0..9
2s      [high+1 .. n-1]   = empty
```

Scene 06 conceptual branch demos are gone.

Scene 07 is **real execution only**.

Do NOT:
- use invented sample states;
- replay the conceptual explanation;
- introduce code;
- change the master testcase;
- compress away any of the 10 verified iterations.

---

# 1. SOURCE TRUTH — EXACT NARRATION

```text
Now let’s run the complete algorithm...

on our master example.

Our array is...

two... one... two... zero... two... one... zero... one... zero... two.

We start with...

low at index zero...

mid at index zero...

and high at index nine.

Right now...

the entire array is unknown.

Let’s begin.

At mid...

we have two.

Two belongs on the right.

So we swap the value at mid...

with the value at high.

Both values are two...

so the array looks exactly the same.

But the state has changed.

High moves from nine to eight...

and mid stays at zero.

We inspect the same position again.

At mid...

we still have two.

This time...

high is pointing to zero.

So we swap two with zero.

The array becomes...

zero... one... two... zero... two... one... zero... one... two... two.

High moves from eight to seven...

and again...

mid stays at zero.

Now the value at mid is zero.

Zero belongs on the left.

Low and mid are both at index zero...

so this is only a self-swap.

Then low moves to one...

and mid moves to one.

Now mid is pointing to one.

One already belongs in the middle.

So there is no swap.

We simply move mid to index two.

Now mid is pointing to two.

Two belongs on the right.

High is at index seven...

and the value there is one.

So we swap them.

The array becomes...

zero... one... one... zero... two... one... zero... two... two... two.

High moves from seven to six...

but mid stays at index two.

The value that came from the right...

is one.

So now we inspect it.

One already belongs in the middle.

No swap.

Mid moves to index three.

Now mid is pointing to zero.

Zero belongs on the left.

Low is at index one.

So we swap index three...

with index one.

The array becomes...

zero... zero... one... one... two... one... zero... two... two... two.

Now low moves to index two...

and mid moves to index four.

At index four...

mid is pointing to two.

Two belongs on the right.

High is at index six...

and high is pointing to zero.

So we swap them.

The array becomes...

zero... zero... one... one... zero... one... two... two... two... two.

High moves from six to five...

and once again...

mid stays at index four.

Now look carefully...

the new value at mid is zero.

That is exactly why we did not move mid.

This zero still needs to be classified.

Zero belongs on the left.

Low is at index two.

So we swap index four...

with index two.

The array becomes...

zero... zero... zero... one... one... one... two... two... two... two.

Then low moves to index three...

and mid moves to index five.

Now mid is pointing to one.

One is already in the correct middle region.

So we simply move mid forward.

Mid becomes six.

High is five.

Now mid has crossed high.

That means...

the unknown region is empty.

Everything has been classified.

And our final array is...

zero... zero... zero...

one... one... one...

two... two... two... two.

Done.

Notice the key pattern...

zero goes left...

one stays in the middle...

and two goes right.

And every time we move a two to the right...

mid stays...

until the incoming value is checked.
```

---

# 2. VERIFIED TRACE — SINGLE SOURCE OF TRUTH

## Initial

```text
A0 = [2,1,2,0,2,1,0,1,0,2]
low=0 mid=0 high=9
```

## Iteration table

| Step | `nums[mid]` | Before pointers | Action | After array | After pointers |
|---:|---:|---|---|---|---|
| 1 | 2 | `l=0 m=0 h=9` | swap(0,9), `h--`, `mid stays` | `[2,1,2,0,2,1,0,1,0,2]` | `l=0 m=0 h=8` |
| 2 | 2 | `l=0 m=0 h=8` | swap(0,8), `h--`, `mid stays` | `[0,1,2,0,2,1,0,1,2,2]` | `l=0 m=0 h=7` |
| 3 | 0 | `l=0 m=0 h=7` | self-swap(0,0), `l++`, `m++` | `[0,1,2,0,2,1,0,1,2,2]` | `l=1 m=1 h=7` |
| 4 | 1 | `l=1 m=1 h=7` | no swap, `m++` | unchanged | `l=1 m=2 h=7` |
| 5 | 2 | `l=1 m=2 h=7` | swap(2,7), `h--`, `mid stays` | `[0,1,1,0,2,1,0,2,2,2]` | `l=1 m=2 h=6` |
| 6 | 1 | `l=1 m=2 h=6` | no swap, `m++` | unchanged | `l=1 m=3 h=6` |
| 7 | 0 | `l=1 m=3 h=6` | swap(3,1), `l++`, `m++` | `[0,0,1,1,2,1,0,2,2,2]` | `l=2 m=4 h=6` |
| 8 | 2 | `l=2 m=4 h=6` | swap(4,6), `h--`, `mid stays` | `[0,0,1,1,0,1,2,2,2,2]` | `l=2 m=4 h=5` |
| 9 | 0 | `l=2 m=4 h=5` | swap(4,2), `l++`, `m++` | `[0,0,0,1,1,1,2,2,2,2]` | `l=3 m=5 h=5` |
| 10 | 1 | `l=3 m=5 h=5` | no swap, `m++` | unchanged | `l=3 m=6 h=5` |

Termination:

```text
mid = 6
high = 5
mid > high
UNKNOWN = empty
```

Final:

```text
[0,0,0,1,1,1,2,2,2,2]
```

---

# 3. VERIFIED REGION STATE AFTER EVERY ITERATION

These region states must be derived from pointer state, not separately hardcoded.

## Start

```text
0s      empty
1s      empty
UNKNOWN idx0..9
2s      empty
```

## After Step 1 — `l=0 m=0 h=8`

```text
0s      empty
1s      empty
UNKNOWN idx0..8
2s      idx9
```

## After Step 2 — `l=0 m=0 h=7`

```text
0s      empty
1s      empty
UNKNOWN idx0..7
2s      idx8..9
```

## After Step 3 — `l=1 m=1 h=7`

```text
0s      idx0
1s      empty
UNKNOWN idx1..7
2s      idx8..9
```

## After Step 4 — `l=1 m=2 h=7`

```text
0s      idx0
1s      idx1
UNKNOWN idx2..7
2s      idx8..9
```

## After Step 5 — `l=1 m=2 h=6`

```text
0s      idx0
1s      idx1
UNKNOWN idx2..6
2s      idx7..9
```

## After Step 6 — `l=1 m=3 h=6`

```text
0s      idx0
1s      idx1..2
UNKNOWN idx3..6
2s      idx7..9
```

## After Step 7 — `l=2 m=4 h=6`

```text
0s      idx0..1
1s      idx2..3
UNKNOWN idx4..6
2s      idx7..9
```

## After Step 8 — `l=2 m=4 h=5`

```text
0s      idx0..1
1s      idx2..3
UNKNOWN idx4..5
2s      idx6..9
```

## After Step 9 — `l=3 m=5 h=5`

```text
0s      idx0..2
1s      idx3..4
UNKNOWN idx5
2s      idx6..9
```

## After Step 10 — `l=3 m=6 h=5`

```text
0s      idx0..2
1s      idx3..5
UNKNOWN empty
2s      idx6..9
```

---

# 4. VISUAL ARCHITECTURE — ONE STABLE TRACE STAGE

Scene 07 should look like one continuous algorithm workspace.

## Top

```text
Q11 · SORT COLORS
APPROACH 2 · DUTCH NATIONAL FLAG
TRACE
```

## Center

One 10-slot `ArrayTrackV2`.

## Around the array

```text
PointerLaneV2
low
mid
high

PartitionBandV2
0s
1s
UNKNOWN
2s
```

## Side / secondary

Small step state:

```text
STEP N
nums[mid] = x
ACTION
...
```

Do not use a big generic card.

## Bottom

caption-safe zone.

The array remains in the same coordinates for the entire trace.

---

# 5. FOUNDATION V2 LAWS

Permanent:

```text
SLOTS STAY FIXED.
VALUES MOVE.
INDICES NEVER MOVE.
```

Pointers:
- live outside slots;
- tips target slot geometry;
- labels use separate lanes to avoid collision.

Regions:
- derived from `low`, `mid`, `high`;
- never independently animated to a mathematically inconsistent range.

One primary teaching motion at a time.

---

# 6. VALUE-SWAP MOTION GRAMMAR

## Real swap of different values

Use two coordinated value flights.

Preferred:

```text
ArrayValueV2 at source A
→ BezierFlight / deterministic arc
→ slot B

ArrayValueV2 at source B
→ opposite non-crossing arc
→ slot A
```

Rules:
- slot shells never move;
- index labels never move;
- routes stay outside slot boxes;
- one arc above, one arc below if needed;
- no path intersection / knot;
- values settle fully before pointer mutation unless narration order requires pointer move immediately after.

## Equal-value swap — Step 1 (`2 ↔ 2`)

Do NOT fake visible reordering.

Narration explicitly says:

```text
Both values are two...
so the array looks exactly the same.
```

Visual should show:
- swap relation / brief dual outline linking idx0 and idx9;
- no visible value translation required;
- values remain `2` in both slots;
- then high moves 9→8;
- mid stays 0.

This teaches:

```text
visible array unchanged
but algorithmic state changed
```

## Self-swap — Step 3 (`low == mid == 0`)

Do not animate a value leaving and returning.

Show:
- low and mid both target idx0;
- brief self-swap loop / confirmation;
- array unchanged;
- then low++ and mid++.

## No-swap — 1-case

No value motion.

Only:
- current `mid` focus;
- `1 → MIDDLE / NO SWAP`;
- mid pointer advances.

---

# 7. MOTION LAW FOR EACH REAL ITERATION

Every iteration follows this semantic sequence:

```text
1. INSPECT nums[mid]
2. CLASSIFY 0 / 1 / 2
3. REACT
4. SWAP / NO SWAP
5. COMPREHENSION HOLD
6. UPDATE POINTER(S)
7. RECOMPUTE REGION BANDS
8. SETTLE
9. NEXT ITERATION
```

For 2-case:

```text
inspect 2
→ swap with high
→ settle incoming unknown at mid
→ high--
→ MID STAYS
→ region update
→ same mid inspected next
```

For 0-case:

```text
inspect 0
→ swap with low
→ settle
→ low++
→ mid++
→ region update
```

For 1-case:

```text
inspect 1
→ no swap
→ mid++
→ region update
```

---

# 8. WORD-BASED SEMANTIC ANCHORS — SETUP

Exact word IDs and frames are resolved only after final MP3 + exact sync JSON exist.

| Anchor ID | Exact narration phrase | Purpose |
|---|---|---|
| `S07_RUN` | `Now let’s run the complete algorithm` | enter real trace |
| `S07_MASTER` | `on our master example` | master testcase focus |
| `S07_ARRAY` | `Our array is` | prepare readback |
| `S07_START` | `We start with` | pointer initialization |
| `S07_LOW0` | `low at index zero` | low=0 |
| `S07_MID0` | `mid at index zero` | mid=0 |
| `S07_HIGH9` | `high at index nine` | high=9 |
| `S07_ALL_UNKNOWN` | `the entire array is unknown` | full UNKNOWN band |
| `S07_BEGIN` | `Let’s begin` | trace execution starts |

The spoken master-array value readback may receive `S07_A0 ... S07_A9` stable word anchors if Antigravity needs exact per-value focus, but no values mutate during this readback.

---

# 9. STEP 1 — `2 ↔ 2`, ARRAY LOOKS SAME

### Verified before

```text
array = [2,1,2,0,2,1,0,1,0,2]
low=0 mid=0 high=9
```

### Verified after

```text
array = [2,1,2,0,2,1,0,1,0,2]
low=0 mid=0 high=8
```

### Anchors

| Anchor | Phrase | Visual |
|---|---|---|
| `S07_S1_AT_MID` | `At mid` | focus mid pointer / idx0 |
| `S07_S1_TWO` | `we have two` | current value 2 |
| `S07_S1_RIGHT` | `Two belongs on the right` | classify as 2-case |
| `S07_S1_SWAP_MID` | `swap the value at mid` | activate swap relation |
| `S07_S1_SWAP_HIGH` | `with the value at high` | complete idx0↔idx9 relation |
| `S07_S1_BOTH_TWO` | `Both values are two` | show `2 ↔ 2` |
| `S07_S1_LOOKS_SAME` | `array looks exactly the same` | keep array visibly unchanged |
| `S07_S1_STATE_CHANGED` | `But the state has changed` | shift focus from values to pointers/regions |
| `S07_S1_HIGH_8` | `High moves from nine to eight` | high 9→8 |
| `S07_S1_MID_STAY` | `mid stays at zero` | mid holds 0 |
| `S07_S1_INSPECT_AGAIN` | `inspect the same position again` | re-query idx0 |

### Motion

- Do not physically exchange identical values.
- Use a short swap relation bracket / dual highlight between idx0 and idx9.
- On `S07_S1_LOOKS_SAME`, hold the unchanged array.
- On `S07_S1_HIGH_8`, high pointer moves to idx8.
- PartitionBandV2 recomputes:
  `UNKNOWN 0..8`, `2s 9..9`.
- Mid remains visibly fixed on idx0.
- A tiny `MID STAYS` annotation may appear then recede.

### Teaching checkpoint

```text
same visible values
different state
```

---

# 10. STEP 2 — `2 ↔ 0`, MID STAYS

### Before

```text
[2,1,2,0,2,1,0,1,0,2]
l=0 m=0 h=8
```

### After

```text
[0,1,2,0,2,1,0,1,2,2]
l=0 m=0 h=7
```

### Anchors

| Anchor | Phrase | Visual |
|---|---|---|
| `S07_S2_AT_MID` | second `At mid` | query idx0 |
| `S07_S2_TWO` | `we still have two` | current 2 |
| `S07_S2_HIGH_ZERO` | `high is pointing to zero` | focus idx8 value 0 |
| `S07_S2_SWAP` | `swap two with zero` | real value swap idx0↔idx8 |
| `S07_S2_ARRAY` | `The array becomes` | settle new array |
| `S07_S2_HIGH_7` | `High moves from eight to seven` | high 8→7 |
| `S07_S2_MID_STAY` | `mid stays at zero` | hold mid=0 |

### Motion

Real different-value swap:
- 2 at idx0 → idx8 via upper arc.
- 0 at idx8 → idx0 via lower arc.
- Settle first.
- Then high pointer moves 8→7.
- Mid stays at 0.
- Regions:
  `UNKNOWN 0..7`, `2s 8..9`.

### Critical end state

The incoming `0` is under `mid`.
That sets up Step 3.

---

# 11. STEP 3 — ZERO SELF-SWAP

### Before

```text
[0,1,2,0,2,1,0,1,2,2]
l=0 m=0 h=7
```

### After

```text
same array
l=1 m=1 h=7
```

### Anchors

| Anchor | Phrase | Visual |
|---|---|---|
| `S07_S3_MID_ZERO` | `the value at mid is zero` | query idx0 value 0 |
| `S07_S3_LEFT` | `Zero belongs on the left` | classify 0-case |
| `S07_S3_SAME_INDEX` | `Low and mid are both at index zero` | focus overlapping pointers |
| `S07_S3_SELF_SWAP` | `this is only a self-swap` | self-swap confirmation, no value travel |
| `S07_S3_LOW_1` | `low moves to one` | low 0→1 |
| `S07_S3_MID_1` | `mid moves to one` | mid 0→1 |

### Motion

- No value travel.
- Draw a tiny self-loop / swap confirmation around idx0.
- Move low and mid in their separate lanes to idx1.
- Regions:
  - `0s idx0`
  - `1s empty`
  - `UNKNOWN idx1..7`
  - `2s idx8..9`

---

# 12. STEP 4 — ONE, NO SWAP

### Before

```text
[0,1,2,0,2,1,0,1,2,2]
l=1 m=1 h=7
```

### After

```text
same array
l=1 m=2 h=7
```

### Anchors

| Anchor | Phrase | Visual |
|---|---|---|
| `S07_S4_MID_ONE` | `mid is pointing to one` | query idx1 |
| `S07_S4_MIDDLE` | `One already belongs in the middle` | classify 1-case |
| `S07_S4_NO_SWAP` | `there is no swap` | explicit no-move hold |
| `S07_S4_MID_2` | `move mid to index two` | mid 1→2 |

### Motion

- Array values do not move.
- `NO SWAP` chalk note.
- Mid moves to idx2.
- Regions:
  - `0s idx0`
  - `1s idx1`
  - `UNKNOWN idx2..7`
  - `2s idx8..9`

---

# 13. STEP 5 — `2 ↔ 1`, MID STAYS

### Before

```text
[0,1,2,0,2,1,0,1,2,2]
l=1 m=2 h=7
```

### After

```text
[0,1,1,0,2,1,0,2,2,2]
l=1 m=2 h=6
```

### Anchors

| Anchor | Phrase | Visual |
|---|---|---|
| `S07_S5_MID_TWO` | `mid is pointing to two` | query idx2 |
| `S07_S5_RIGHT` | `Two belongs on the right` | 2-case |
| `S07_S5_HIGH7` | `High is at index seven` | high idx7 |
| `S07_S5_HIGH_ONE` | `the value there is one` | focus value1 at idx7 |
| `S07_S5_SWAP` | `So we swap them` | real idx2↔idx7 swap |
| `S07_S5_ARRAY` | `The array becomes` | settle new array |
| `S07_S5_HIGH6` | `High moves from seven to six` | high 7→6 |
| `S07_S5_MID_STAY` | `mid stays at index two` | mid fixed |
| `S07_S5_INCOMING_ONE` | `value that came from the right is one` | focus incoming idx2=1 |
| `S07_S5_INSPECT` | `now we inspect it` | re-query same idx2 |

### Motion

- Swap 2 idx2 ↔ 1 idx7 using non-crossing arcs.
- Settle `[0,1,1,0,2,1,0,2,2,2]`.
- High 7→6.
- Mid holds idx2.
- Regions:
  `0s 0`, `1s 1`, `UNKNOWN 2..6`, `2s 7..9`.

This is the strongest proof that the incoming value can be `1`.

---

# 14. STEP 6 — INCOMING ONE, NO SWAP

### Before

```text
[0,1,1,0,2,1,0,2,2,2]
l=1 m=2 h=6
```

### After

```text
same array
l=1 m=3 h=6
```

### Anchors

| Anchor | Phrase | Visual |
|---|---|---|
| `S07_S6_ONE` | `One already belongs in the middle` | 1-case at idx2 |
| `S07_S6_NO_SWAP` | `No swap` | hold |
| `S07_S6_MID3` | `Mid moves to index three` | mid 2→3 |

### Motion

No value move.
Mid → idx3.

Regions:
- `0s idx0`
- `1s idx1..2`
- `UNKNOWN idx3..6`
- `2s idx7..9`

---

# 15. STEP 7 — ZERO MOVES LEFT

### Before

```text
[0,1,1,0,2,1,0,2,2,2]
l=1 m=3 h=6
```

### After

```text
[0,0,1,1,2,1,0,2,2,2]
l=2 m=4 h=6
```

### Anchors

| Anchor | Phrase | Visual |
|---|---|---|
| `S07_S7_MID_ZERO` | `mid is pointing to zero` | query idx3 |
| `S07_S7_LEFT` | `Zero belongs on the left` | 0-case |
| `S07_S7_LOW1` | `Low is at index one` | focus low idx1 |
| `S07_S7_SWAP3` | `swap index three` | activate idx3 |
| `S07_S7_SWAP1` | `with index one` | complete idx3↔idx1 relation |
| `S07_S7_ARRAY` | `The array becomes` | settle |
| `S07_S7_LOW2` | `low moves to index two` | low 1→2 |
| `S07_S7_MID4` | `mid moves to index four` | mid 3→4 |

### Motion

Swap:
- 0 idx3 → idx1
- 1 idx1 → idx3

Settle:
`[0,0,1,1,2,1,0,2,2,2]`

Then pointers:
`low=2`, `mid=4`.

Regions:
- `0s idx0..1`
- `1s idx2..3`
- `UNKNOWN idx4..6`
- `2s idx7..9`

---

# 16. STEP 8 — `2 ↔ 0`, MID STAYS

### Before

```text
[0,0,1,1,2,1,0,2,2,2]
l=2 m=4 h=6
```

### After

```text
[0,0,1,1,0,1,2,2,2,2]
l=2 m=4 h=5
```

### Anchors

| Anchor | Phrase | Visual |
|---|---|---|
| `S07_S8_MID4` | `At index four` | focus mid idx4 |
| `S07_S8_TWO` | `mid is pointing to two` | current 2 |
| `S07_S8_RIGHT` | `Two belongs on the right` | 2-case |
| `S07_S8_HIGH6` | `High is at index six` | high idx6 |
| `S07_S8_HIGH_ZERO` | `high is pointing to zero` | focus idx6 value0 |
| `S07_S8_SWAP` | `So we swap them` | idx4↔idx6 |
| `S07_S8_ARRAY` | `The array becomes` | settle |
| `S07_S8_HIGH5` | `High moves from six to five` | high 6→5 |
| `S07_S8_MID_STAY` | `mid stays at index four` | mid fixed |
| `S07_S8_LOOK` | `Now look carefully` | comprehension hold |
| `S07_S8_NEW_ZERO` | `new value at mid is zero` | focus incoming idx4=0 |
| `S07_S8_WHY` | `exactly why we did not move mid` | explicit proof |
| `S07_S8_NEEDS_CLASSIFY` | `This zero still needs to be classified` | re-query incoming zero |

### Motion

Swap:
- 2 idx4 → idx6
- 0 idx6 → idx4

Settle:
`[0,0,1,1,0,1,2,2,2,2]`

Then:
- high 6→5
- mid remains 4.

Regions:
- `0s idx0..1`
- `1s idx2..3`
- `UNKNOWN idx4..5`
- `2s idx6..9`

This is the **hero teaching beat** of the full trace.

Use a slightly longer comprehension hold if the actual audio gap supports it.

Do not add extra time.

---

# 17. STEP 9 — INCOMING ZERO MOVES LEFT

### Before

```text
[0,0,1,1,0,1,2,2,2,2]
l=2 m=4 h=5
```

### After

```text
[0,0,0,1,1,1,2,2,2,2]
l=3 m=5 h=5
```

### Anchors

| Anchor | Phrase | Visual |
|---|---|---|
| `S07_S9_LEFT` | `Zero belongs on the left` | 0-case at idx4 |
| `S07_S9_LOW2` | `Low is at index two` | focus idx2 |
| `S07_S9_SWAP4` | `swap index four` | activate idx4 |
| `S07_S9_SWAP2` | `with index two` | complete idx4↔idx2 |
| `S07_S9_ARRAY` | `The array becomes` | settle |
| `S07_S9_LOW3` | `low moves to index three` | low 2→3 |
| `S07_S9_MID5` | `mid moves to index five` | mid 4→5 |

### Motion

Swap:
- 0 idx4 → idx2
- 1 idx2 → idx4

Settle:
`[0,0,0,1,1,1,2,2,2,2]`

Then:
`low=3`, `mid=5`, `high=5`.

Regions:
- `0s idx0..2`
- `1s idx3..4`
- `UNKNOWN idx5`
- `2s idx6..9`

Only one unknown value remains.

---

# 18. STEP 10 — FINAL ONE

### Before

```text
[0,0,0,1,1,1,2,2,2,2]
l=3 m=5 h=5
```

### After

```text
same array
l=3 m=6 h=5
```

### Anchors

| Anchor | Phrase | Visual |
|---|---|---|
| `S07_S10_ONE` | `mid is pointing to one` | query idx5 |
| `S07_S10_MIDDLE` | `already in the correct middle region` | classify 1-case |
| `S07_S10_MID_FWD` | `move mid forward` | mid 5→6 |
| `S07_S10_MID6` | `Mid becomes six` | confirm |
| `S07_S10_HIGH5` | `High is five` | confirm high |
| `S07_S10_CROSSED` | `mid has crossed high` | termination condition |
| `S07_S10_UNKNOWN_EMPTY` | `unknown region is empty` | collapse UNKNOWN band |
| `S07_S10_CLASSIFIED` | `Everything has been classified` | full invariant completion |

### Motion

No value move.

Mid pointer moves from idx5 to one position beyond high / beyond the unknown region.

Represent `mid=6`, `high=5` truthfully.

UNKNOWN band collapses to empty.

Final regions:
- `0s idx0..2`
- `1s idx3..5`
- `UNKNOWN empty`
- `2s idx6..9`

---

# 19. FINAL ARRAY READBACK

## Anchor — `S07_FINAL_ARRAY`
Phrase:
`And our final array is...`

Visual:
- pointers / bands remain but reduce emphasis;
- final array becomes hero.

Final exact array:

```text
[0,0,0,1,1,1,2,2,2,2]
```

## Spoken output words

As narration says:

```text
zero zero zero
one one one
two two two two
```

Do not mutate values again.

Only confirmation focus moves across already-settled slots.

This separates:
```text
algorithm mutation
from
final readback
```

---

# 20. DONE CONFIRMATION

## Anchor — `S07_DONE`
Phrase:
`Done.`

Visual:

```text
SORTED ✓
UNKNOWN = EMPTY
```

One restrained final confirmation.

Do not erase the pointer state immediately.

The learner should still see:

```text
low=3
mid=6
high=5
```

for a brief exact-audio-supported hold.

---

# 21. KEY PATTERN RECAP INSIDE TRACE SCENE

Narration:

```text
Notice the key pattern...

zero goes left...

one stays in the middle...

and two goes right.

And every time we move a two to the right...

mid stays...

until the incoming value is checked.
```

## Anchors

| Anchor | Phrase | Visual |
|---|---|---|
| `S07_PATTERN` | `Notice the key pattern` | compact rule summary appears |
| `S07_ZERO_LEFT` | `zero goes left` | 0 rule focus |
| `S07_ONE_MIDDLE` | `one stays in the middle` | 1 rule focus |
| `S07_TWO_RIGHT` | `two goes right` | 2 rule focus |
| `S07_EVERY_TWO` | `every time we move a two to the right` | focus 2-case |
| `S07_MID_STAYS` | `mid stays` | explicit hold |
| `S07_INCOMING_CHECKED` | `until the incoming value is checked` | show re-check loop from high→mid |

Final compact rule strip:

```text
0 → LEFT  | low++, mid++
1 → MIDDLE | mid++
2 → RIGHT | high--, MID STAYS
```

This is recap of what was just executed, not new theory.

---

# 22. SCENE 07 → SCENE 08 HANDOFF

Scene08 is DNF Code.

End Scene07 with:

```text
FINAL
[0,0,0,1,1,1,2,2,2,2]

0 → LEFT   : swap(low,mid), low++, mid++
1 → MIDDLE : mid++
2 → RIGHT  : swap(mid,high), high--, MID STAYS

UNKNOWN = EMPTY
```

Then use:

```text
T8 REPRESENTATION HANDOFF
TRACE → CODE
```

Do not morph array values into code glyphs.

The code scene should inherit:
- final rule strip;
- compact array evidence;
- pointer names.

---

# 23. WORD-BASED ANCHOR GROUPING FOR ANTIGRAVITY

For implementation, group anchors into semantic iteration packages:

```text
STEP_01
S07_S1_*

STEP_02
S07_S2_*

...

STEP_10
S07_S10_*
```

Each group must resolve from exact sync and produce one deterministic state transition.

Do not derive step boundaries from guessed narration duration.

---

# 24. TRACE STATE DATA MODEL

Antigravity should define one immutable trace array:

```ts
type DnfTraceState = {
  step: number;
  before: number[];
  low: number;
  mid: number;
  high: number;
  current: 0 | 1 | 2;
  action: "swap-high" | "swap-low" | "self-swap" | "no-swap";
  swap?: [number, number];
  after: number[];
  lowAfter: number;
  midAfter: number;
  highAfter: number;
};
```

Populate exactly:

```text
1  [2,1,2,0,2,1,0,1,0,2] l0 m0 h9  2  swap-high [0,9]
   → same                                  l0 m0 h8

2  same                               l0 m0 h8  2  swap-high [0,8]
   → [0,1,2,0,2,1,0,1,2,2]          l0 m0 h7

3  [0,1,2,0,2,1,0,1,2,2]           l0 m0 h7  0  self-swap [0,0]
   → same                                  l1 m1 h7

4  same                               l1 m1 h7  1  no-swap
   → same                                  l1 m2 h7

5  same                               l1 m2 h7  2  swap-high [2,7]
   → [0,1,1,0,2,1,0,2,2,2]          l1 m2 h6

6  same                               l1 m2 h6  1  no-swap
   → same                                  l1 m3 h6

7  same                               l1 m3 h6  0  swap-low [3,1]
   → [0,0,1,1,2,1,0,2,2,2]          l2 m4 h6

8  same                               l2 m4 h6  2  swap-high [4,6]
   → [0,0,1,1,0,1,2,2,2,2]          l2 m4 h5

9  same                               l2 m4 h5  0  swap-low [4,2]
   → [0,0,0,1,1,1,2,2,2,2]          l3 m5 h5

10 same                               l3 m5 h5  1  no-swap
   → same                                  l3 m6 h5
```

The render must derive all visual states from this verified data.

No side calculation inside JSX should be allowed to drift from the trace.

---

# 25. REGION DERIVATION FUNCTION

For every state derive:

```ts
zeroRegion    = [0, low - 1]
oneRegion     = [low, mid - 1]
unknownRegion = [mid, high]
twoRegion     = [high + 1, n - 1]
```

Preferred code representation uses half-open ranges:

```ts
zero   = [0, low)
one    = [low, mid)
unknown= [mid, high + 1)
two    = [high + 1, n)
```

This should be the single region geometry source.

Do not manually author region spans for each step.

---

# 26. SWAP PATH RULES

For different-index swaps:

```text
source A → target B
source B → target A
```

Use deterministic Bezier routes.

Route policy:
- if both values on same horizontal track:
  - first value uses upper arc;
  - second value uses lower arc;
- arcs must clear slot rectangles;
- control points derive from slot centers and a bounded arc height;
- values settle exactly at destination centers.

For long swaps like idx0↔idx8:
- arc height scales with distance;
- clamp so it does not collide with title/header/pointer lanes.

For short swaps:
- smaller arc.

No random control points.

---

# 27. POINTER UPDATE ORDER

The narration order is authoritative.

## 2-case
```text
swap settles
→ high moves
→ mid visibly stays
→ bands recompute
```

## 0-case
```text
swap / self-swap settles
→ low moves
→ mid moves
→ bands recompute
```

## 1-case
```text
no swap
→ mid moves
→ bands recompute
```

If exact narration phrases place pointer words differently, exact audio anchors control the start of each pointer movement.

Do not pre-move pointers before the corresponding phrase.

---

# 28. MOTION DENSITY CONTRACT

At every moment:

```text
one primary algorithm action
+
one supporting semantic reaction maximum
```

Examples:

Allowed:
```text
swap values + current pointer hold
```

Then later:
```text
high moves + region band updates
```

Not allowed simultaneously:
```text
swap
+ high move
+ mid pulse
+ band resize
+ step title change
+ camera zoom
```

Keep causality readable.

---

# 29. CAMERA CONTRACT

The array should remain spatially stable.

Camera:
- no large pans across iterations;
- no zoom on every swap;
- only micro-focus / opacity shifts;
- hero teaching beat Step 8 may receive a restrained focus push if existing course camera system supports it.

Do not make the trace cinematic at the cost of state readability.

---

# 30. TYPOGRAPHY CONTRACT

Patrick Hand:
- `TRACE`
- `UNKNOWN`
- `MID STAYS`
- `NO SWAP`
- `SELF-SWAP`
- `SORTED`

Mono:
- pointers `low`, `mid`, `high`
- indices
- values if course uses mono for array values
- step numbers
- equations / pointer states.

No new fonts.

---

# 31. COLOR / STATE CONTRACT

Use course semantic tokens only.

Recommended semantics:

```text
current / mid query = theme.pivot
confirmed/good      = theme.good
warning/core rule   = theme.warn or pivot depending existing grammar
unknown             = theme.chalkDim / restrained highlight
2-side confirmation = existing semantic highlight, not arbitrary new color
```

Do not map:
```text
0 = red
1 = white
2 = blue
```

unless the course already explicitly uses LeetCode's color names as a secondary annotation.

For our course, numeric semantics remain primary.

---

# 32. ANTIGRAVITY — FINAL AUDIO SYNC → EXACT FRAME PLAN

Execute only after final:

```text
07-dnf-trace.mp3
07-dnf-trace.json
```

or the exact final filenames.

## A. Audit first

Inspect:

```text
Scene06 final end state
ArrayTrackV2
ArraySlotV2
ArrayValueV2
ArrayIndexRowV2
PointerLaneV2
PartitionBandV2
BezierFlight
ParametricArrow
RoughLine
RoughCurve
audioSyncV2
Captions
motion helpers
```

Return:

```text
REUSE
EXTEND
CREATE
```

Expected:
- REUSE all core V2 primitives;
- CREATE only Q11 trace composition/state data;
- no new array / pointer / partition primitive unless a real Foundation limitation is found.

---

## B. Validate raw sync

Verify:
- final MP3 identity;
- FPS;
- durationFrames;
- ordered words;
- word timestamps monotonic;
- stable IDs unique;
- all semantic anchors resolve inside duration.

Raw sync immutable.

---

## C. Derive stable word IDs

Normalize:

```text
W0000
W0001
...
```

Repeated words:
- two
- one
- zero
- mid
- high
- low
- swap
- array
- moves
- index

must NEVER resolve by text occurrence alone.

---

## D. Create anchor manifest

Create:

```text
sync/07-dnf-trace.anchors.json
```

Resolve every `S07_*` anchor in this plan.

Each entry:

```json
{
  "word_index": 0,
  "edge": "start",
  "note": "semantic purpose"
}
```

For long phrases like final-array readback, optionally store phrase start/end word IDs too.

If an anchor cannot be uniquely resolved:
STOP.

Do not guess.

---

# 33. EXACT ITERATION WINDOW GENERATION

For each step derive:

```text
STEP_START
INSPECT_START
CLASSIFY_START
SWAP_START
SWAP_END
POINTER_UPDATE_START
POINTER_UPDATE_END
STEP_SETTLE
NEXT_STEP_START
```

All from exact narration anchors.

Not every step has every phase:
- no-swap steps omit swap;
- self-swap uses confirmation phase only;
- equal-value swap uses relation phase but no visible occupant translation.

---

# 34. AUDIO-DRIVEN SWAP WINDOW

For a real swap:

```text
swapPhraseStart = anchor("...swap...")
arrayBecomesStart = anchor("The array becomes")
```

Recommended:
- value flights happen after swap phrase begins;
- they must settle by, or just before, the spoken array-result readback begins;
- exact audio gap determines movement duration.

Do not hardcode 24/30/45 frames.

---

# 35. AUDIO-DRIVEN POINTER WINDOW

For `high moves from X to Y`:

```text
movement starts on phrase start
movement settles by phrase end / available pause
```

For `mid stays`:
- mid does not move;
- emphasis only.

For paired `low moves... and mid moves...`:
- low starts on `low moves`;
- mid starts on `mid moves`;
- do not move them simultaneously before the second phrase unless exact narration overlaps.

---

# 36. COMPREHENSION HOLDS

Use actual word gaps / narration pauses after:
- `array looks exactly the same`;
- `But the state has changed`;
- `mid stays`;
- `Now look carefully`;
- `That is exactly why we did not move mid`;
- `unknown region is empty`;
- `Done`.

If the MP3 provides no gap, use a minimal settle.

Do not insert new dead air.

---

# 37. CAPTIONS + DURATION

Same exact sync drives:

```text
Captions
semantic anchors
durationFrames
```

Final valid frame:

```text
0 <= frame < durationFrames
```

No silent clamping.

---

# 38. REQUIRED POST-SYNC REVIEW CHECKPOINTS

Resolve exact frames semantically after sync.

1. **Initial**
   - `[2,1,2,0,2,1,0,1,0,2]`
   - `l0 m0 h9`
   - UNKNOWN full.

2. **After Step 1**
   - array unchanged;
   - `h8`;
   - `m0`;
   - idx9 confirmed 2.

3. **After Step 2**
   - `[0,1,2,0,2,1,0,1,2,2]`
   - `h7`;
   - `m0`.

4. **After Step 3**
   - `l1 m1 h7`;
   - idx0 confirmed 0.

5. **After Step 4**
   - `l1 m2 h7`;
   - idx1 confirmed 1.

6. **After Step 5**
   - `[0,1,1,0,2,1,0,2,2,2]`
   - `l1 m2 h6`;
   - incoming 1 at mid.

7. **After Step 6**
   - `l1 m3 h6`.

8. **After Step 7**
   - `[0,0,1,1,2,1,0,2,2,2]`
   - `l2 m4 h6`.

9. **Step 8 hero checkpoint**
   - `[0,0,1,1,0,1,2,2,2,2]`
   - `l2 m4 h5`;
   - incoming 0 under mid;
   - `MID STAYS`.

10. **After Step 9**
    - `[0,0,0,1,1,1,2,2,2,2]`
    - `l3 m5 h5`;
    - UNKNOWN only idx5.

11. **After Step 10**
    - `l3 m6 h5`;
    - UNKNOWN empty.

12. **Final**
    - sorted array exact;
    - region bands exact.

13. **Pattern recap**
    - 0→LEFT;
    - 1→MIDDLE;
    - 2→RIGHT;
    - MID STAYS after 2.

---

# 39. AUTOMATED / SEMANTIC QA REQUIREMENTS

Antigravity should add Q11 trace checks that verify:

```text
master input exact
10 iterations exact
final array exact
final low=3
final mid=6
final high=5
UNKNOWN empty at termination
```

For every step:
- `current == before[mid]`;
- action matches current value;
- 0-case increments both low and mid;
- 1-case increments only mid;
- 2-case decrements only high and keeps mid;
- array after swap matches verified trace;
- region invariants hold after settle.

Invariant assertions:

```text
all nums[0:low] == 0
all nums[low:mid] == 1
all nums[high+1:n] == 2
```

Unknown:
```text
nums[mid:high+1]
```

No assumption about UNKNOWN contents.

---

# 40. ACCEPTANCE CHECKLIST

- [ ] Starts from exact Scene06 real initial state.
- [ ] Uses locked master input.
- [ ] Exactly 10 iterations.
- [ ] Slot geometry never moves.
- [ ] Indices never move.
- [ ] Values move only for real different-index swaps.
- [ ] Equal-value Step1 swap leaves visible array unchanged.
- [ ] Step1 still moves high 9→8.
- [ ] Step2 produces exact array.
- [ ] Step3 self-swap has no fake value flight.
- [ ] Step4 no swap.
- [ ] Step5 swap 2↔1 exact.
- [ ] Step5 mid stays.
- [ ] Step6 rechecks incoming 1.
- [ ] Step7 zero swap exact.
- [ ] Step8 swap 2↔0 exact.
- [ ] Step8 mid stays at 4.
- [ ] Step8 incoming 0 visibly remains under mid.
- [ ] Step9 moves incoming 0 left.
- [ ] Step10 only moves mid.
- [ ] Final `mid=6`, `high=5`.
- [ ] UNKNOWN empty.
- [ ] Final array exact.
- [ ] Region bands derived from pointers.
- [ ] No fabricated region state.
- [ ] No code yet.
- [ ] No complexity discussion.
- [ ] No generic cards.
- [ ] No guessed frame numbers.
- [ ] Final MP3 + sync drive exact timing.
- [ ] Stable word IDs used.
- [ ] Same sync drives captions.
- [ ] Scene08 receives trace→code handoff.

---

# FINAL VISUAL STORY — ONE LINE

**Scene 07 keeps one fixed 10-slot Array V2 on the green board and executes the verified Dutch National Flag trace exactly ten times from `low=0, mid=0, high=9`: Step 1 performs a semantically real `2↔2` swap whose visible array stays unchanged while `high` alone moves, Step 2 swaps `2↔0` and deliberately keeps `mid` on the incoming unknown, Step 3 shows a truthful zero self-swap, Step 4 advances over a one with no swap, Step 5 swaps `2↔1` and again proves that `mid` stays to inspect the incoming value, Step 6 advances over that one, Step 7 moves a zero into the left region, Step 8 becomes the hero proof by swapping `2↔0`, moving only `high`, and holding `mid` on the incoming zero, Step 9 classifies that zero into the left region, and Step 10 advances over the last one until `mid=6 > high=5`; throughout, `PointerLaneV2` and `PartitionBandV2` derive the exact four regions from the same pointer state, every swap moves values while slots and indices remain fixed, the UNKNOWN band shrinks truthfully to empty, and the scene ends on the verified final array `[0,0,0,1,1,1,2,2,2,2]` plus the executed rule summary `0→LEFT`, `1→MIDDLE`, `2→RIGHT / MID STAYS`, ready for a trace-to-code handoff into Scene 08.**
