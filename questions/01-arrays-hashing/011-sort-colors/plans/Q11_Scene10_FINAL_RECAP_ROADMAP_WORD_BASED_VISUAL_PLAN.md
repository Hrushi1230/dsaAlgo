# Q11 — Sort Colors (LC 75)
# Step 8 · Scene 10 — Final Recap + Transferable Pattern + Roadmap Continuation
## WORD-BASED VISUAL PLAN — NO GUESSED FRAMES

**Course:** Code With Animation  
**Problem:** Q011 · Sort Colors · LC75 · Medium  
**Scene purpose:** Close Q11 by compressing both verified approaches into one final mental model, extract the transferable partition/invariant lesson, then truthfully return to the permanent 227-problem roadmap and perform the actual course-state mutation: **Q011 becomes COMPLETE, global progress becomes 11/227, and Q012 Next Permutation becomes UP NEXT / current roadmap focus**.

---

# 0. CONTINUITY — SCENE 09 → SCENE 10

Scene 10 starts from the exact semantic end state of Scene 09:

```text
COUNTING
O(n), O(1), 2 passes

DNF
O(n), O(1), 1 classification pass

CORE INVARIANT
0s | 1s | UNKNOWN | 2s

CORE MISTAKE
2-case → MID STAYS

EDGE CASES
same invariant
```

Scene 10 does NOT reopen mistakes or edge cases.

It must:

```text
RECAP
→ COMPRESS
→ GENERALISE
→ COMPLETE Q11
→ RETURN TO ROADMAP
→ PROMOTE Q12 AS NEXT
```

No new algorithm.
No new testcase.
No new complexity claim.
No generic outro animation.

---

# 1. SOURCE TRUTH — EXACT NARRATION

```text
Let’s quickly recap what we learned...

We started with the counting approach.

Because the array contains only...

zero...
one...
and two...

we counted how many of each value we had...

and then rewrote the array.

That gave us...

O of n time...

and O of one extra space.

But it still needed two passes.

Then we improved it...

using the Dutch National Flag pattern.

We used three pointers...

low...

mid...

and high.

And those three pointers maintained four regions...

confirmed zeroes...

confirmed ones...

unknown values...

and confirmed twos.

If nums at mid is zero...

move it to the left...

then move low and mid.

If nums at mid is one...

it already belongs in the middle...

so just move mid.

And if nums at mid is two...

move it to the right...

move high left...

but keep mid where it is.

That last rule is important...

because the value coming from high...

is still unknown.

With this idea...

we solve the problem in one pass...

using O of n time...

and O of one extra space.

But the bigger lesson is not just Sort Colors.

Whenever a problem has only a few categories...

think about partitioning.

Ask yourself...

what part is already confirmed...

what part is still unknown...

and which pointers protect those boundaries.

That way...

you are not just memorising a solution...

you are learning an invariant...

that can help in many other partition problems.

And with that...

Sort Colors is complete.

Question eleven...

done.

We continue our Arrays and Hashing roadmap...

with the next problem...

Next Permutation.
```

---

# 2. VERIFIED LESSON TRUTH — FINAL LOCK

## Counting

```text
COUNT
→ REWRITE

TIME        O(n)
EXTRA SPACE O(1)
PASSES      2
```

## Dutch National Flag

```text
0s | 1s | UNKNOWN | 2s

low
mid
high

0-case:
swap(low,mid)
low++
mid++

1-case:
mid++

2-case:
swap(mid,high)
high--
MID STAYS
```

Complexity:

```text
TIME        O(n)
EXTRA SPACE O(1)
CLASSIFICATION PASS = 1
```

Final output:

```text
[0,0,0,1,1,1,2,2,2,2]
```

Transferable lesson:

```text
few categories
→ partition
→ identify confirmed regions
→ identify unknown region
→ use boundaries/pointers
→ maintain invariant
```

Do not introduce any different abstraction.

---

# 3. ROADMAP STATE — AUTHORITATIVE FINAL MUTATION

Scene 10 must return to the SAME permanent Master DSA Pattern Roadmap used in Scene 01.

## Scene 10 pre-roadmap state

Before completion mutation:

```text
GLOBAL PROGRESS
10 / 227 COMPLETE

PATTERN 01 · Arrays & Hashing
Q010 Longest Consecutive Sequence = COMPLETE
Q011 Sort Colors                = NOW ACTIVE
Q012 Next Permutation           = FUTURE / not current

RIGHT RAIL FOCUS
011
```

## Scene 10 post-completion roadmap state

After spoken completion:

```text
GLOBAL PROGRESS
11 / 227 COMPLETE

PATTERN 01 · Arrays & Hashing
Q010 Longest Consecutive Sequence = COMPLETE
Q011 Sort Colors                = COMPLETE
Q012 Next Permutation           = UP NEXT

RIGHT RAIL FOCUS
012
```

If pattern-local progress is visible:

```text
11 / 18 COMPLETED
```

Q12 known roadmap identity:

```text
012 Next Permutation
LC 31
MEDIUM
```

Important:
Narration only speaks `Next Permutation`.
LC31 / Medium may remain visible as existing roadmap metadata, but should not receive a separate narration-driven hero beat unless the audio contains those words.

---

# 4. PERMANENT ROADMAP UI — REUSE, DO NOT REDESIGN

Use the exact accepted roadmap architecture from Scene 01 / previous lesson transitions.

## Top bar

```text
CODE WITH ANIMATION
DSA PATTERN ROADMAP
227 PROBLEMS · 19 PATTERNS
10 / 227 COMPLETE
```

which becomes:

```text
11 / 227 COMPLETE
```

only on the actual Q11 completion beat.

## Left sidebar

Pattern 01 stays active:

```text
01 Arrays & Hashing  ACTIVE
```

Other 18 patterns stay unchanged.

## Main problem list

Fixed row geometry.

Do not:
- move problem rows;
- create cards;
- recreate roadmap in a different layout.

## Right rail

Before completion:

```text
011 ← focus
```

After completion / next-problem handoff:

```text
012 ← focus
```

This move happens only once in Scene 10.

---

# 5. VISUAL ARCHITECTURE — THREE ACTS, ONE CONTINUOUS BOARD

Scene 10 has three semantic acts.

## ACT A — METHOD RECAP

```text
COUNTING
vs
DNF
```

using existing trace/code evidence.

## ACT B — TRANSFERABLE PATTERN

```text
FEW CATEGORIES
→ PARTITION
→ CONFIRMED / UNKNOWN
→ POINTER BOUNDARIES
→ INVARIANT
```

## ACT C — ROADMAP CONTINUATION

```text
Q11 COMPLETE
10/227 → 11/227
rail 011 → 012
Q12 NEXT PERMUTATION → UP NEXT
```

No hard cut between acts.

Use representation handoffs.

---

# 6. COMPONENT REUSE

Expected:

```text
ArrayTrackV2
ArraySlotV2
ArrayValueV2
ArrayIndexRowV2
PointerLaneV2
PartitionBandV2
ChalkText
RoughLine
RoughCurve
Captions
roadmap shell/components from Q10/Q11 Scene01
```

No new recap card system.
No new roadmap component.

Antigravity must inspect actual production components before implementation.

---

# 7. WORD-BASED SEMANTIC ANCHORS

Exact word IDs / frames are resolved only after final MP3 + exact sync JSON exist.

| Anchor ID | Exact narration phrase | Visual purpose |
|---|---|---|
| `S10_RECAP` | `Let’s quickly recap what we learned` | open final recap |
| `S10_COUNTING` | `We started with the counting approach` | focus Counting |
| `S10_ONLY_VALUES` | `Because the array contains only` | prepare 0/1/2 domain |
| `S10_ZERO` | `zero` | domain 0 |
| `S10_ONE` | `one` | domain 1 |
| `S10_TWO` | `two` | domain 2 |
| `S10_COUNTED` | `we counted how many of each value we had` | count phase |
| `S10_REWROTE` | `and then rewrote the array` | rewrite phase |
| `S10_COUNT_ON` | `O of n time` | Counting time |
| `S10_COUNT_O1` | `O of one extra space` | Counting space |
| `S10_TWO_PASSES` | `it still needed two passes` | limitation |
| `S10_IMPROVED` | `Then we improved it` | transition Counting→DNF |
| `S10_DNF` | `using the Dutch National Flag pattern` | focus DNF |
| `S10_THREE_POINTERS` | `We used three pointers` | pointer recap |
| `S10_LOW` | `low` | low focus |
| `S10_MID` | `mid` | mid focus |
| `S10_HIGH` | `high` | high focus |
| `S10_FOUR_REGIONS` | `those three pointers maintained four regions` | invariant recap |
| `S10_R0` | `confirmed zeroes` | 0 region |
| `S10_R1` | `confirmed ones` | 1 region |
| `S10_RU` | `unknown values` | unknown region |
| `S10_R2` | `confirmed twos` | 2 region |
| `S10_CASE0` | `If nums at mid is zero` | 0-case |
| `S10_ZERO_LEFT` | `move it to the left` | 0 destination |
| `S10_MOVE_LOW_MID` | `move low and mid` | low++, mid++ |
| `S10_CASE1` | `If nums at mid is one` | 1-case |
| `S10_ONE_MIDDLE` | `belongs in the middle` | 1 destination |
| `S10_MOVE_MID` | `just move mid` | mid++ |
| `S10_CASE2` | `if nums at mid is two` | 2-case |
| `S10_TWO_RIGHT` | `move it to the right` | 2 destination |
| `S10_MOVE_HIGH` | `move high left` | high-- |
| `S10_KEEP_MID` | `keep mid where it is` | MID STAYS |
| `S10_LAST_RULE` | `That last rule is important` | hero recap |
| `S10_FROM_HIGH` | `value coming from high` | incoming value |
| `S10_STILL_UNKNOWN` | `is still unknown` | reason |
| `S10_ONE_PASS` | `solve the problem in one pass` | DNF pass result |
| `S10_DNF_ON` | `O of n time` | DNF time |
| `S10_DNF_O1` | `O of one extra space` | DNF space |
| `S10_BIGGER_LESSON` | `bigger lesson is not just Sort Colors` | generalisation transition |
| `S10_FEW_CATEGORIES` | `problem has only a few categories` | transferable trigger |
| `S10_PARTITION` | `think about partitioning` | pattern abstraction |
| `S10_ASK` | `Ask yourself` | reasoning checklist begins |
| `S10_CONFIRMED` | `what part is already confirmed` | confirmed region concept |
| `S10_UNKNOWN` | `what part is still unknown` | unknown concept |
| `S10_BOUNDARIES` | `which pointers protect those boundaries` | pointer-boundary concept |
| `S10_NOT_MEMORISE` | `not just memorising a solution` | reject rote memory |
| `S10_INVARIANT` | `learning an invariant` | core transferable idea |
| `S10_OTHER_PARTITIONS` | `many other partition problems` | generalisation endpoint |
| `S10_Q11_COMPLETE` | `Sort Colors is complete` | actual Q11 completion mutation |
| `S10_Q11_NUMBER` | `Question eleven` | focus Q011 row |
| `S10_DONE` | `done` | settle completed state |
| `S10_ROADMAP` | `We continue our Arrays and Hashing roadmap` | return full roadmap |
| `S10_NEXT_PROBLEM` | `with the next problem` | shift 011→012 focus |
| `S10_NEXT_PERM` | `Next Permutation` | Q12 up-next focus |

Repeated terms (`one`, `two`, `mid`, `high`, `O of n`) must resolve by stable ordered word IDs, not text occurrence guessing.

---

# 8. ACT A — OPEN FINAL RECAP

## `S10_RECAP`
Spoken:
`Let’s quickly recap what we learned...`

### Visual action
Scene09 analysis elements simplify into one central lesson canvas.

Keep:
- compact final sorted Array V2;
- two method labels;
- invariant strip.

Everything else recedes.

No new title card.

---

# 9. COUNTING RECAP

## `S10_COUNTING`
Focus:

```text
APPROACH 1 · COUNTING
```

Use a compact process:

```text
COUNT → REWRITE
```

---

## `S10_ONLY_VALUES`
Prepare domain strip:

```text
0   1   2
```

---

## `S10_ZERO`
Focus 0.

## `S10_ONE`
Focus 1.

## `S10_TWO`
Focus 2.

No animation of array values yet.

---

## `S10_COUNTED`
Spoken:
`we counted how many of each value we had...`

Reveal verified summary:

```text
0 → 3
1 → 3
2 → 4
```

No full trace replay.

---

## `S10_REWROTE`
Spoken:
`and then rewrote the array.`

Show one representation handoff:

```text
COUNTS
→
[0,0,0,1,1,1,2,2,2,2]
```

No individual writes.

---

## `S10_COUNT_ON`
Reveal:

```text
O(n)
```

## `S10_COUNT_O1`
Reveal:

```text
O(1) EXTRA SPACE
```

## `S10_TWO_PASSES`
Reveal:

```text
2 PASSES
```

Settle Counting summary:

```text
COUNTING
O(n)
O(1)
2 PASSES
COUNT → REWRITE
```

No negative styling.

---

# 10. COUNTING → DNF IMPROVEMENT HANDOFF

## `S10_IMPROVED`
Spoken:
`Then we improved it...`

### Visual action
Counting summary shifts left / supporting opacity.

A single-pass flow area opens on right.

Use:

```text
T8 REPRESENTATION_HANDOFF
```

No trophy / winner animation.

---

## `S10_DNF`
Focus:

```text
APPROACH 2 · DUTCH NATIONAL FLAG
```

Bring back the native 10-slot array + pointer/partition grammar.

---

# 11. POINTER RECAP

## `S10_THREE_POINTERS`
Reveal three pointer lanes.

## `S10_LOW`
Focus low.

## `S10_MID`
Focus mid.

## `S10_HIGH`
Focus high.

Do not animate a full trace.

One stable conceptual state is enough.

---

# 12. FOUR-REGION INVARIANT RECAP

## `S10_FOUR_REGIONS`
Reveal:

```text
0s | 1s | UNKNOWN | 2s
```

Use PartitionBandV2.

---

## `S10_R0`
Focus confirmed 0s.

## `S10_R1`
Focus confirmed 1s.

## `S10_RU`
Focus UNKNOWN.

## `S10_R2`
Focus confirmed 2s.

No region geometry mutation across these words.

This is recap / identification only.

---

# 13. THREE BRANCH RULE RECAP

Use a compact rule strip.

## `S10_CASE0`
Focus:

```text
nums[mid] = 0
```

## `S10_ZERO_LEFT`
Show:

```text
0 → LEFT
```

## `S10_MOVE_LOW_MID`
Show:

```text
swap(low,mid)
low++
mid++
```

No full value flight needed.

---

## `S10_CASE1`
Focus:

```text
nums[mid] = 1
```

## `S10_ONE_MIDDLE`
Show:

```text
1 → MIDDLE
```

## `S10_MOVE_MID`
Show:

```text
mid++
```

---

## `S10_CASE2`
Focus:

```text
nums[mid] = 2
```

## `S10_TWO_RIGHT`
Show:

```text
2 → RIGHT
```

## `S10_MOVE_HIGH`
Show:

```text
swap(mid,high)
high--
```

## `S10_KEEP_MID`
Hero emphasis:

```text
MID STAYS
```

Do not move mid visually.

---

# 14. FINAL CORE RULE REASON

## `S10_LAST_RULE`
Spoken:
`That last rule is important...`

Clear other branch clutter.

Keep:

```text
2-case
high--
MID STAYS
```

---

## `S10_FROM_HIGH`
Show incoming value relation:

```text
high side
→ mid
```

Use actual verified Step8 evidence if desired:

```text
incoming 0
```

---

## `S10_STILL_UNKNOWN`
Show source was in:

```text
UNKNOWN
```

Compact proof:

```text
came from UNKNOWN
→ must inspect
→ MID STAYS
```

No long replay.

---

# 15. DNF COMPLEXITY RECAP

## `S10_ONE_PASS`
Reveal:

```text
1 CLASSIFICATION PASS
```

## `S10_DNF_ON`
Reveal:

```text
O(n) TIME
```

## `S10_DNF_O1`
Reveal:

```text
O(1) EXTRA SPACE
```

Final side-by-side summary may now settle briefly:

```text
COUNTING                 DNF
O(n)                     O(n)
O(1)                     O(1)
2 passes                 1 classification pass
```

Then recede.

---

# 16. ACT B — BIGGER LESSON / TRANSFERABLE PATTERN

## `S10_BIGGER_LESSON`
Spoken:
`But the bigger lesson is not just Sort Colors.`

### Visual action
Problem-specific labels reduce.

Keep only:

```text
0s | 1s | UNKNOWN | 2s
```

Then abstract the specific values into generic categories.

Important:
Do not morph text glyphs.

Use representation handoff:

```text
0s      → CATEGORY A
1s      → CATEGORY B
2s      → CATEGORY C
UNKNOWN → UNKNOWN
```

or a simpler abstraction:

```text
KNOWN | UNKNOWN | KNOWN
```

But preserve the exact spoken lesson:
few categories + partitioning + boundaries + invariant.

---

# 17. FEW CATEGORIES

## `S10_FEW_CATEGORIES`
Spoken:
`Whenever a problem has only a few categories...`

### Visual action
Show generic domain:

```text
A   B   C
```

or:

```text
few categories
```

Do NOT introduce a new concrete DSA problem.

This stays abstract.

---

# 18. THINK PARTITIONING

## `S10_PARTITION`
Spoken:
`think about partitioning.`

### Visual action
Generic linear structure divides into zones:

```text
CATEGORY A | CATEGORY B | UNKNOWN | CATEGORY C
```

Use existing PartitionBandV2 grammar.

This visually transfers DNF's structure without claiming every future problem has exactly four regions.

Add small label:

```text
PARTITION
```

---

# 19. REASONING CHECKLIST — CONFIRMED / UNKNOWN / BOUNDARIES

## `S10_ASK`
Spoken:
`Ask yourself...`

Create a board-direct three-question reasoning sequence.

No cards.

---

## `S10_CONFIRMED`
Show:

```text
WHAT IS ALREADY CONFIRMED?
```

Focus known bands.

---

## `S10_UNKNOWN`
Show:

```text
WHAT IS STILL UNKNOWN?
```

Focus UNKNOWN band.

---

## `S10_BOUNDARIES`
Show:

```text
WHICH POINTERS PROTECT THE BOUNDARIES?
```

Reveal generic boundary markers.

Do not force names `low/mid/high` in the generic abstraction.

The transferable idea is boundary protection, not memorising pointer names.

---

# 20. NOT MEMORISING — LEARNING AN INVARIANT

## `S10_NOT_MEMORISE`
Spoken:
`you are not just memorising a solution...`

### Visual action
Problem-specific code / branch strip recedes.

Do NOT cross out code as if code is bad.

Show:

```text
CODE
is implementation

INVARIANT
is reasoning
```

with invariant receiving primary focus.

---

## `S10_INVARIANT`
Spoken:
`you are learning an invariant...`

Center:

```text
INVARIANT
```

Below:

```text
what is always true
while the algorithm runs
```

This supporting phrase can be visual-only if already part of course teaching grammar; do not add spoken claims beyond the source.

---

## `S10_OTHER_PARTITIONS`
Spoken:
`that can help in many other partition problems.`

### Visual action
One generic linear partition motif expands into 2–3 faint variations:
- two-way partition;
- three-category partition;
- known/unknown boundaries.

Do not name new LeetCode problems.
Do not turn into a catalogue.

The visual point:
same reasoning pattern transfers.

---

# 21. ACT C — Q11 COMPLETION

This is where the actual course-state mutation begins.

Do not change roadmap progress earlier.

## `S10_Q11_COMPLETE`
Spoken:
`And with that... Sort Colors is complete.`

### Visual action
Use T8 handoff from invariant canvas back into the permanent roadmap.

Roadmap appears in the exact existing geometry.

Initial roadmap state on entry must still be:

```text
10 / 227 COMPLETE

Q010 COMPLETE
Q011 NOW ACTIVE
Q012 FUTURE / next row
rail focus 011
```

Then on the phrase `Sort Colors is complete`:

```text
Q011
NOW ACTIVE
→
COMPLETE
```

Use existing completion-state animation grammar.

No glyph morph:
```text
NOW ACTIVE recedes
→ COMPLETE reveals
```

Completion check may draw with S3 redraw/confirm.

---

# 22. GLOBAL PROGRESS UPDATE

The global progress update is caused by actual Q11 completion.

On / immediately after `S10_Q11_COMPLETE`:

```text
10 / 227 COMPLETE
→
11 / 227 COMPLETE
```

If local pattern progress is visible:

```text
10 / 18
→
11 / 18
```

Use deterministic CountUp only if the existing roadmap already uses it.

Otherwise:
- discrete state change;
- no new counter effect.

Do NOT update to 12.

---

# 23. QUESTION ELEVEN — DONE

## `S10_Q11_NUMBER`
Spoken:
`Question eleven...`

Focus completed Q011 row:

```text
011 Sort Colors
LC75
MEDIUM
COMPLETE
```

No state mutation now; it already completed on previous beat.

---

## `S10_DONE`
Spoken:
`done.`

Use a restrained completion confirmation:
- check redraw;
- good-state settle.

Do not replay global progress.

---

# 24. CONTINUE ARRAYS & HASHING ROADMAP

## `S10_ROADMAP`
Spoken:
`We continue our Arrays and Hashing roadmap...`

### Visual action
Camera / focus widens just enough to show:
- Pattern 01 active in sidebar;
- Q010 completed;
- Q011 completed;
- Q012 next row;
- top progress.

Pattern 01 stays active.

No other pattern changes.

---

# 25. MOVE TO THE NEXT PROBLEM

## `S10_NEXT_PROBLEM`
Spoken:
`with the next problem...`

This is the actual roadmap focus move.

Sequence:

```text
Q011 completed focus recedes
→ rail focus 011 → 012
→ Q012 row gains UP NEXT state
```

This is exactly analogous to the accepted Q10→Q11 roadmap transition.

Global completed count remains:

```text
11 / 227
```

because Q12 is not complete.

---

# 26. NEXT PERMUTATION

## `S10_NEXT_PERM`
Spoken:
`Next Permutation.`

### Visual action
Focus Q012 row:

```text
012 Next Permutation
LC31
MEDIUM
UP NEXT
```

Narration only speaks title, so:
- title receives primary emphasis;
- LC31 / Medium stay readable metadata;
- no separate animation for them.

Do not start Q12 explanation.
Do not show a Q12 array.
Do not preview permutation mechanics.

This is roadmap continuation only.

---

# 27. FINAL END FRAME — AUTHORITATIVE

Scene 10 must finish on the permanent roadmap, not on a generic “thanks” screen.

Required state:

```text
CODE WITH ANIMATION
DSA PATTERN ROADMAP
227 PROBLEMS · 19 PATTERNS

11 / 227 COMPLETE

PATTERN 01 · Arrays & Hashing ACTIVE

Q010 Longest Consecutive Sequence  COMPLETE
Q011 Sort Colors                  COMPLETE
Q012 Next Permutation             UP NEXT

right rail focus = 012
```

If pattern-local progress exists:

```text
11 / 18 COMPLETED
```

This final frame becomes the authoritative source state for Q12 Scene 01.

---

# 28. ROADMAP CONTINUITY LAW FOR Q12

Q12 Scene 01 must start from this exact final Q11 state.

Therefore Q12 must NOT replay:

```text
10→11 progress
Q11 NOW ACTIVE→COMPLETE
rail 011→012
```

Those belong here in Q11 Scene10.

Q12 Scene01 should only:
- resume this exact roadmap;
- confirm Q11 complete;
- activate Q12 when its own narration reaches the current-question beat.

This preserves permanent course continuity.

---

# 29. MOTION CONTRACT

Master law:

```text
CAUSE
→ STATE REACTION
→ COMPREHENSION HOLD
→ MOVEMENT / MUTATION
→ SETTLE
```

Scene10 allowed motion:

```text
focus
compress
representation handoff
region abstraction
completion mutation
progress update
roadmap rail movement
next-row focus
```

No decorative celebration.

No confetti.
No zoom burst.
No generic end-card animation.

---

# 30. MORPH CONTRACT

Allowed:

### Method trace → recap
```text
T8 REPRESENTATION_HANDOFF
```

### DNF specific → generic partition abstraction
```text
T8 REPRESENTATION_HANDOFF
```

### Lesson invariant → permanent roadmap
```text
T8 REPRESENTATION_HANDOFF
```

### Q011 status
```text
T0 STATE_CHANGE
NOW ACTIVE → COMPLETE
```

### Q012 status
```text
T0 STATE_CHANGE
future/default → UP NEXT
```

Forbidden:
- text glyph true morph;
- algorithm array morphing into roadmap row;
- roadmap row morphing into Q12 algorithm preview;
- arbitrary SVG path morphs for decoration.

---

# 31. SVG CONTRACT

Semantic SVG only.

Potential uses:

```text
COUNT → REWRITE arrow
generic partition brackets
confirmed / unknown boundary marks
Q011 completion check redraw
roadmap rail 011→012 tracer
```

Preferred classes:

```text
S1 DRAW_NEW
S3 REDRAW_CONFIRM
S4 TRACE_PATH
```

Roadmap rail:
- current-position indicator moves from 011 to 012;
- do not use a separate decorative journey tracer here.

This is an actual course-state mutation.

---

# 32. TYPOGRAPHY CONTRACT

Patrick Hand:
- recap teaching labels;
- `PARTITION`;
- `INVARIANT`;
- reasoning questions.

Mono:
- O(n), O(1);
- pointer names;
- metadata;
- roadmap problem numbers / LC IDs;
- progress counts.

Reuse exact roadmap typography at the end.

No new font.

---

# 33. ANTIGRAVITY — FINAL AUDIO SYNC → EXACT FRAME PLAN

Execute only after final:

```text
10-recap-roadmap.mp3
10-recap-roadmap.json
```

or the exact final filenames chosen by the user.

## A. Audit first

Before mapping, inspect:

```text
Scene09 final implementation
Scene01 roadmap implementation
Q10 final roadmap outro implementation
permanent roadmap data model
roadmap progress rail
status transition logic
ArrayTrackV2
PointerLaneV2
PartitionBandV2
audioSyncV2
Captions
motion/morph/SVG helpers
```

Return:

```text
REUSE
EXTEND
CREATE
```

Expected:
- REUSE roadmap shell;
- REUSE roadmap status model;
- REUSE progress rail;
- REUSE exact sync;
- CREATE only Q11 Scene10-specific recap composition if needed.

No duplicate roadmap component.

---

# 34. VALIDATE RAW SYNC

Verify:
- exact final MP3 identity;
- FPS;
- durationFrames;
- ordered word timestamps;
- unique stable IDs;
- all semantic anchors inside scene duration.

Raw sync immutable.

---

# 35. DERIVE STABLE WORD IDS

Normalize:

```text
W0000
W0001
W0002
...
```

Repeated words:
- one
- two
- mid
- high
- zero
- O of n
- problem
- array

must resolve by ordered word identity.

No text-only lookup.

---

# 36. CREATE SEMANTIC ANCHOR MANIFEST

Create:

```text
sync/10-recap-roadmap.anchors.json
```

Resolve every `S10_*` anchor.

Each entry:

```json
{
  "word_index": 0,
  "edge": "start",
  "note": "semantic purpose"
}
```

For completion-sensitive events, exact edge choice matters.

Recommended:

```text
S10_Q11_COMPLETE
edge = end of phrase "Sort Colors is complete"
```

or whichever exact word-edge best aligns status mutation after the spoken completion statement.

Do not mark Q11 complete before the narration actually says complete.

---

# 37. ROADMAP STATE MANIFEST

Antigravity should create / use one authoritative state transition:

```ts
const beforeQ11Completion = {
  completedGlobal: 10,
  completedPattern: 10,
  activeProblem: 11,
  nextProblem: 12,
  railFocus: 11,
  q11Status: "now-active",
  q12Status: "future",
};

const afterQ11Completion = {
  completedGlobal: 11,
  completedPattern: 11,
  activeProblem: null,
  nextProblem: 12,
  railFocus: 12,
  q11Status: "complete",
  q12Status: "up-next",
};
```

Exact field names may differ in repo.

Do not duplicate course truth locally if a central roadmap data model already exists.

Prefer updating the permanent source.

---

# 38. COMPLETION ORDER — IMPORTANT

The correct semantic order is:

```text
1. recap lesson
2. transferable invariant
3. spoken "Sort Colors is complete"
4. Q011 status → COMPLETE
5. progress 10→11
6. spoken "Question eleven ... done"
7. roadmap widen
8. spoken "next problem"
9. rail 011→012
10. Q012 → UP NEXT
11. spoken "Next Permutation"
12. Q012 title focus
```

Do not move the rail before Q11 completion.

Do not update progress only when Q12 appears.

---

# 39. PHRASE-WINDOW DERIVATION

For each anchor derive:

```text
phraseStartFrame
phraseEndFrame
nextAnchorFrame
availablePauseFrames
```

Then map:

```text
PRIMARY ACTION
SUPPORTING REACTION
SETTLE
```

Example:

## `S10_Q11_COMPLETE`

```text
CAUSE
spoken completion phrase

PRIMARY
Q011 NOW ACTIVE → COMPLETE

SUPPORT
completion check draws

SETTLE
global 10→11 progress updates
```

Example:

## `S10_NEXT_PROBLEM`

```text
CAUSE
spoken "next problem"

PRIMARY
roadmap focus shifts Q011→Q012

SUPPORT
rail indicator moves 011→012

SETTLE
Q012 gains UP NEXT
```

---

# 40. NO GUESSED DURATIONS

If recap narration is fast:
- reduce secondary animations;
- use focus-only beats;
- do not compress roadmap status mutations into unreadable bursts;
- prioritize semantic truth.

If the final Q12 title phrase is short:
- simple row focus is enough.

No audio stretching.

---

# 41. CAPTIONS + DURATION

Same exact final sync drives:

```text
Captions
semantic anchors
durationFrames
```

No separate caption timeline.

Final valid frame:

```text
0 <= frame < durationFrames
```

No silent clamping.

---

# 42. REQUIRED POST-SYNC REVIEW CHECKPOINTS

Resolve exact semantic frames after sync:

1. `S10_COUNTING`
   - COUNT → REWRITE visible.

2. `S10_TWO_PASSES`
   - Counting = O(n), O(1), 2 passes.

3. `S10_DNF`
   - DNF invariant active.

4. `S10_KEEP_MID`
   - 2-case clearly keeps mid fixed.

5. `S10_DNF_O1`
   - DNF = O(n), O(1), one classification pass.

6. `S10_FEW_CATEGORIES`
   - problem-specific values begin abstracting to generic categories.

7. `S10_PARTITION`
   - partition abstraction clear.

8. `S10_CONFIRMED`
   - confirmed-region question.

9. `S10_UNKNOWN`
   - unknown-region question.

10. `S10_BOUNDARIES`
    - pointer/boundary question.

11. `S10_INVARIANT`
    - invariant becomes final transferable lesson.

12. immediately before `S10_Q11_COMPLETE`
    - roadmap still 10/227;
    - Q011 NOW ACTIVE;
    - rail 011.

13. after `S10_Q11_COMPLETE` settles
    - Q011 COMPLETE;
    - 11/227 COMPLETE;
    - local 11/18 if visible.

14. `S10_DONE`
    - Q011 completion stable.

15. `S10_NEXT_PROBLEM`
    - rail moves 011→012;
    - Q012 gains UP NEXT.

16. `S10_NEXT_PERM`
    - Q012 Next Permutation title focused;
    - no Q12 teaching content.

17. final frame
    - exact authoritative roadmap source state for Q12.

---

# 43. AUTOMATED / SEMANTIC QA

Antigravity should verify:

```text
Q11 status == complete
completedGlobal == 11
completedPattern == 11   (if pattern-local count exists)
railFocus == 12
Q12 status == up-next
```

Must also verify:

```text
Q12 is NOT complete
global progress is NOT 12/227
Q11 is NOT still active
rail is NOT still 011
```

Final roadmap problem identities:

```text
010 Longest Consecutive Sequence = COMPLETE
011 Sort Colors = COMPLETE
012 Next Permutation = UP NEXT
```

---

# 44. ACCEPTANCE CHECKLIST

- [ ] Starts from Scene09 final analysis state.
- [ ] Counting recap truthful.
- [ ] Counting O(n), O(1), 2 passes.
- [ ] DNF recap truthful.
- [ ] Four-region invariant preserved.
- [ ] 0-case correct.
- [ ] 1-case correct.
- [ ] 2-case correct.
- [ ] MID STAYS explicitly retained.
- [ ] DNF O(n), O(1), one classification pass.
- [ ] Transferable lesson is few categories → partitioning.
- [ ] Confirmed / unknown / boundaries are the reasoning checklist.
- [ ] Final abstraction teaches invariant, not rote code.
- [ ] No new concrete problem is introduced during transfer lesson.
- [ ] Permanent roadmap reused exactly.
- [ ] Q011 completes only when narration says complete.
- [ ] Global progress updates 10→11, not earlier.
- [ ] Pattern-local progress updates 10→11 if visible.
- [ ] Q011 row becomes COMPLETE.
- [ ] Right rail moves 011→012 only once.
- [ ] Q012 becomes UP NEXT.
- [ ] Q012 title = Next Permutation.
- [ ] Q12 explanation does not begin.
- [ ] No generic outro/end card.
- [ ] No guessed frame numbers.
- [ ] Final MP3 + sync are timing authority.
- [ ] Stable word IDs used.
- [ ] Same sync drives captions.
- [ ] Final frame becomes Q12 Scene01 source state.

---

# FINAL VISUAL STORY — ONE LINE

**Scene 10 compresses the entire Sort Colors lesson into one continuous final understanding: it briefly revisits Counting as `COUNT → REWRITE` with verified `O(n)` time, `O(1)` extra space, and two passes; hands that representation into Dutch National Flag with `low`, `mid`, `high` protecting the invariant `0s | 1s | UNKNOWN | 2s`; recaps the three rules `0→left`, `1→middle`, `2→right / MID STAYS`; preserves the crucial reason that an incoming value from `high` was still unknown; then strips away the Sort Colors-specific details and generalises the reasoning into `few categories → partition → ask what is confirmed → ask what is unknown → identify which pointers protect the boundaries → maintain the invariant`; only after that teaching is complete does the scene return to the exact permanent 227-problem roadmap, change Q011 from `NOW ACTIVE` to `COMPLETE`, update global progress from `10/227` to `11/227` (and pattern-local `10/18` to `11/18` if present), confirm Question 11 done, move the real roadmap rail from `011` to `012`, promote Q012 `Next Permutation` to `UP NEXT`, and finish on that authoritative roadmap state with no Q12 algorithm preview so the next lesson can begin from a single truthful source of course progress.**
