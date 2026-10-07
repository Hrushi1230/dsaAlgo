# Q12 — Next Permutation (LC 31)
# Phase 9 · Scene 04 — Method 1 · Brute Force Code
## WORD-BASED VISUAL PLAN — SEMANTIC FRAME PLAN WITHOUT GUESSED TIME

**Scene purpose:** Construct the brute-force implementation like a real coder: character-by-character only when each idea is spoken, prove each line with brief semantic evidence, never reveal future lines, and hand off to the cost question.

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

Scene 04 starts from Scene03's clean code handoff:

```text
METHOD 1 · BRUTE FORCE
production code surface
no solution lines yet
```


---

# 2. EXACT NARRATION SOURCE

```text
Let’s write the brute-force idea...

only to understand its cost.

First...

we generate all permutations of nums.

Because duplicate values can create duplicate permutations...

we keep only unique arrangements.

Then...

we sort those permutations lexicographically.

Now we convert our current array...

into the same comparable form...

and find its position.

The next position is simply...

current index plus one.

And to handle the last permutation...

we take that position modulo the total number of permutations.

Finally...

we copy the selected permutation...

back into the original array.

The code matches the idea exactly.

Generate all possibilities...

sort them...

search for the current one...

and select the next.

For tiny inputs...

this is fine for understanding.

But as a real solution...

this approach becomes expensive very quickly.

Now let’s see why.
```

The plan may visualize only what the narration has reached.

---

# 3. LOCKED SCENE TRUTH

Authoritative teaching code for this scene:

```python
from itertools import permutations

def nextPermutationBrute(nums):
    all_perms = permutations(nums)
    unique_perms = set(all_perms)
    ordered = sorted(unique_perms)

    current = tuple(nums)
    idx = ordered.index(current)
    next_idx = (idx + 1) % len(ordered)

    nums[:] = ordered[next_idx]
```

This is an explanatory brute-force implementation. It is not the final LeetCode solution.

Important: `nums[:] = ...` demonstrates mutation of the original list object.

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

- Active code is center stage; future lines do not visually exist.
- Character-by-character typing is later driven by exact word-sync timing.
- Semantic proof enters only after/while the corresponding line is being explained, then exits.
- No permanent 50/50 code+array dashboard.
- The `next_idx` line is constructed progressively across `plus one` then `modulo`; do not reveal modulo early.
- Scene04 does not show factorial notation or complexity curves; Scene05 owns that.

---

# 7. SEMANTIC ANCHOR MANIFEST — NO TIME / NO FRAMES

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S04_OPEN` | `Let’s write the brute-force idea` | Live code construction. |
| `S04_COST_ONLY` | `only to understand its cost` | Purpose of code scene. |
| `S04_IMPORT` | `generate all permutations of nums` | Active generation line. |
| `S04_DUPLICATE_REASON` | `duplicate values can create duplicate permutations` | Why uniqueness is needed. |
| `S04_UNIQUE` | `we keep only unique arrangements` | Active uniqueness line. |
| `S04_SORT` | `we sort those permutations lexicographically` | Active sort line. |
| `S04_CURRENT_FORM` | `convert our current array into the same comparable form` | Active current-conversion line. |
| `S04_FIND_POS` | `find its position` | Active lookup line. |
| `S04_NEXT_INDEX` | `current index plus one` | Active next-index expression under construction. |
| `S04_MODULO` | `we take that position modulo the total number of permutations` | Completed wrap-safe next-index line. |
| `S04_COPY` | `copy the selected permutation back into the original array` | In-place copy-back line. |
| `S04_MATCHES` | `The code matches the idea exactly` | Code↔idea mapping. |
| `S04_SUMMARY` | `Generate all possibilities sort them search for the current one and select the next` | Brute-force pipeline. |
| `S04_TINY_OK` | `For tiny inputs this is fine for understanding` | Teaching usefulness. |
| `S04_EXPENSIVE` | `this approach becomes expensive very quickly` | Why Method 1 is not final. |
| `S04_WHY` | `Now let’s see why` | Scene05 handoff. |

No seconds or frame numbers belong here before the final MP3 + exact sync JSON exist.

---

# 8. WORD-BASED CHOREOGRAPHY


## BEAT 01 — `S04_OPEN`

### SPOKEN PHRASE
`Let’s write the brute-force idea`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Existing production code surface becomes center; only function context/header may appear, no body lines yet.

### CENTER-STAGE HERO
Live code construction.

### KIT / EXISTING SYSTEM
Existing production code component.

### CAUSE
Narration begins code.

### EFFECT / MOTION
Prepare cursor at first required line. Do not dump solution.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No future lines.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep code surface.

### MINIMUM PERSISTENT STATE
Code surface + method identity.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 02 — `S04_COST_ONLY`

### SPOKEN PHRASE
`only to understand its cost`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
A compact `TEACHING VERSION` / `BRUTE FORCE` note clarifies this is explanatory, not final solution.

### CENTER-STAGE HERO
Purpose of code scene.

### KIT / EXISTING SYSTEM
ChalkText integrated with code surface.

### CAUSE
Narration sets intent.

### EFFECT / MOTION
Direct attention; no algorithm change.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No complexity graph yet.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Note reduces.

### MINIMUM PERSISTENT STATE
Code surface.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 03 — `S04_IMPORT`

### SPOKEN PHRASE
`generate all permutations of nums`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Type the import only if the real code component/course convention requires imports, then type `all_perms = permutations(nums)` character-by-character on this idea.

### CENTER-STAGE HERO
Active generation line.

### KIT / EXISTING SYSTEM
Existing code component + Array V2.

### CAUSE
Narration states generation.

### EFFECT / MOTION
After line completes, a tiny Array V2 `[1,2,3]` can briefly fan into already-known permutation identities as semantic proof, then exit.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No set/sort/index lines.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Proof exits; code returns center.

### MINIMUM PERSISTENT STATE
Typed generation line.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.

### ACTIVE CODE TEXT TO TYPE
```python
from itertools import permutations

all_perms = permutations(nums)
```

Character-by-character typing begins only when the exact narration anchor reaches this code idea. Future code remains nonexistent.

### PRECISION NOTE
If import lines are normally predeclared in the course code component, Antigravity must follow existing repo convention rather than invent a new import animation; the generation line itself must still type on narration.



## BEAT 04 — `S04_DUPLICATE_REASON`

### SPOKEN PHRASE
`duplicate values can create duplicate permutations`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Code reduces; show two identical mini Array V2 permutation outputs converging conceptually to `DUPLICATE`.

### CENTER-STAGE HERO
Why uniqueness is needed.

### KIT / EXISTING SYSTEM
Array V2 or symbolic tuple identity; no generic cards.

### CAUSE
Narration explains duplicates.

### EFFECT / MOTION
Cause→effect proof only; no new dataset with invented numbers. Use symbolic/reused values or duplicate identity markers supported by source.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No `set` line before the next phrase authorizes keeping unique arrangements.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Clear duplicate proof.

### MINIMUM PERSISTENT STATE
Generation line remains dim.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 05 — `S04_UNIQUE`

### SPOKEN PHRASE
`we keep only unique arrangements`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Type `unique_perms = set(all_perms)` character-by-character.

### CENTER-STAGE HERO
Active uniqueness line.

### KIT / EXISTING SYSTEM
Existing code component.

### CAUSE
Narration states action.

### EFFECT / MOTION
After completion, duplicate proof collapses to one identity briefly.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No sort line.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Semantic proof exits; code remains.

### MINIMUM PERSISTENT STATE
Generation + uniqueness lines.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.

### ACTIVE CODE TEXT TO TYPE
```python
unique_perms = set(all_perms)
```

Character-by-character typing begins only when the exact narration anchor reaches this code idea. Future code remains nonexistent.



## BEAT 06 — `S04_SORT`

### SPOKEN PHRASE
`we sort those permutations lexicographically`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Type `ordered = sorted(unique_perms)`.

### CENTER-STAGE HERO
Active sort line.

### KIT / EXISTING SYSTEM
Existing code component + prior semantic ordered-list representation.

### CAUSE
Narration states sorting.

### EFFECT / MOTION
Briefly show the existing six-permutation ordered relation from Scene03, then clear it. Do not replay full trace.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No current tuple/index code.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Proof exits.

### MINIMUM PERSISTENT STATE
Three typed setup lines.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.

### ACTIVE CODE TEXT TO TYPE
```python
ordered = sorted(unique_perms)
```

Character-by-character typing begins only when the exact narration anchor reaches this code idea. Future code remains nonexistent.



## BEAT 07 — `S04_CURRENT_FORM`

### SPOKEN PHRASE
`convert our current array into the same comparable form`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Type `current = tuple(nums)`.

### CENTER-STAGE HERO
Active current-conversion line.

### KIT / EXISTING SYSTEM
Existing code component + Array V2 representation handoff.

### CAUSE
Narration states comparable form.

### EFFECT / MOTION
After line completes, current array identity semantically hands into tuple/text representation; no duplicate array stays.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No index lookup yet.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Proof reduces.

### MINIMUM PERSISTENT STATE
Typed `current` line.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.

### ACTIVE CODE TEXT TO TYPE
```python
current = tuple(nums)
```

Character-by-character typing begins only when the exact narration anchor reaches this code idea. Future code remains nonexistent.



## BEAT 08 — `S04_FIND_POS`

### SPOKEN PHRASE
`find its position`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Type `idx = ordered.index(current)`.

### CENTER-STAGE HERO
Active lookup line.

### KIT / EXISTING SYSTEM
Existing code component.

### CAUSE
Narration states search.

### EFFECT / MOTION
Briefly spotlight current position in the already-known ordered sequence concept; do not rebuild full list.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No next index formula.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Proof exits.

### MINIMUM PERSISTENT STATE
Typed idx line.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.

### ACTIVE CODE TEXT TO TYPE
```python
idx = ordered.index(current)
```

Character-by-character typing begins only when the exact narration anchor reaches this code idea. Future code remains nonexistent.



## BEAT 09 — `S04_NEXT_INDEX`

### SPOKEN PHRASE
`current index plus one`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Begin/complete `next_idx = idx + 1` only as the conceptual base, but because final code needs wraparound, do not settle a misleading final line. Prefer type the final expression progressively: `next_idx = (idx + 1` and hold before modulo part.

### CENTER-STAGE HERO
Active next-index expression under construction.

### KIT / EXISTING SYSTEM
Existing production code component.

### CAUSE
Narration says plus one.

### EFFECT / MOTION
Character typing reflects exactly the spoken idea.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
Do not reveal modulo tokens before modulo narration.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Cursor remains active on incomplete line.

### MINIMUM PERSISTENT STATE
Partial active line.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.

### ACTIVE CODE TEXT TO TYPE
```python
next_idx = (idx + 1
```

Character-by-character typing begins only when the exact narration anchor reaches this code idea. Future code remains nonexistent.



## BEAT 10 — `S04_MODULO`

### SPOKEN PHRASE
`we take that position modulo the total number of permutations`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Continue the SAME active line by typing `) % len(ordered)`; do not create a second replacement line.

### CENTER-STAGE HERO
Completed wrap-safe next-index line.

### KIT / EXISTING SYSTEM
Existing code component + prior wrap relation.

### CAUSE
Narration supplies modulo behavior.

### EFFECT / MOTION
On completion, briefly show LAST → FIRST wrap relation from Scene03 as semantic proof.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No final copy line yet.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Wrap proof exits; code returns.

### MINIMUM PERSISTENT STATE
Completed next_idx line.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.

### ACTIVE CODE TEXT TO TYPE
```python
next_idx = (idx + 1) % len(ordered)
```

Character-by-character typing begins only when the exact narration anchor reaches this code idea. Future code remains nonexistent.

### PRECISION NOTE
This anchor appends to the active line begun in S04_NEXT_INDEX; implementation must not retype the whole line from scratch.



## BEAT 11 — `S04_COPY`

### SPOKEN PHRASE
`copy the selected permutation back into the original array`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Type `nums[:] = ordered[next_idx]`.

### CENTER-STAGE HERO
In-place copy-back line.

### KIT / EXISTING SYSTEM
Existing code component + Array V2.

### CAUSE
Narration states final brute action.

### EFFECT / MOTION
After completion, use a single Array V2 identity to show values update in the same slot shells. Do not show a new output array.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No complexity graph.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Array proof exits/reduces; complete brute code remains briefly.

### MINIMUM PERSISTENT STATE
Completed brute-force code.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.

### ACTIVE CODE TEXT TO TYPE
```python
nums[:] = ordered[next_idx]
```

Character-by-character typing begins only when the exact narration anchor reaches this code idea. Future code remains nonexistent.



## BEAT 12 — `S04_MATCHES`

### SPOKEN PHRASE
`The code matches the idea exactly`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Code reduces slightly and a four-step pipeline appears: GENERATE → UNIQUE/ORDER → FIND → NEXT/COPY.

### CENTER-STAGE HERO
Code↔idea mapping.

### KIT / EXISTING SYSTEM
ChalkText/RoughLine + existing code line focus.

### CAUSE
Narration confirms alignment.

### EFFECT / MOTION
Each already-typed code region may receive a synchronized focus as its semantic label appears; no retyping.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No complexity formula.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Pipeline becomes next recap support.

### MINIMUM PERSISTENT STATE
Code + compact pipeline.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 13 — `S04_SUMMARY`

### SPOKEN PHRASE
`Generate all possibilities sort them search for the current one and select the next`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Walk focus through the existing pipeline in spoken order; only one node strong at a time.

### CENTER-STAGE HERO
Brute-force pipeline.

### KIT / EXISTING SYSTEM
Existing semantic pipeline.

### CAUSE
Narration recaps code.

### EFFECT / MOTION
Attention traversal only; no new code.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No factorial formula.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Pipeline clears after recap.

### MINIMUM PERSISTENT STATE
Code remains dim.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 14 — `S04_TINY_OK`

### SPOKEN PHRASE
`For tiny inputs this is fine for understanding`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Brief `UNDERSTANDING ✓` confirmation; no performance claim beyond narration.

### CENTER-STAGE HERO
Teaching usefulness.

### KIT / EXISTING SYSTEM
ChalkText.

### CAUSE
Narration qualifies brute force.

### EFFECT / MOTION
Confirm, then remove.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No complexity curve yet.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Clear confirmation.

### MINIMUM PERSISTENT STATE
Code still present dimly.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 15 — `S04_EXPENSIVE`

### SPOKEN PHRASE
`this approach becomes expensive very quickly`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Code recedes; center becomes `COST ?` / unresolved growth question.

### CENTER-STAGE HERO
Why Method 1 is not final.

### KIT / EXISTING SYSTEM
ChalkText.

### CAUSE
Narration flags cost.

### EFFECT / MOTION
Representation handoff code→complexity question.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
Do not show `n!` until Scene05 narration says it.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
Keep cost question for Scene05.

### MINIMUM PERSISTENT STATE
`COST ?`.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 16 — `S04_WHY`

### SPOKEN PHRASE
`Now let’s see why`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Everything except Method 1 identity and `COST ?` clears.

### CENTER-STAGE HERO
Scene05 handoff.

### KIT / EXISTING SYSTEM
Existing transition grammar.

### CAUSE
Narration requests explanation.

### EFFECT / MOTION
Clean semantic handoff.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No graph before Scene05 begins.

### COMPREHENSION HOLD
Only use a hold if the future exact word-sync JSON contains a real pause after this phrase.

### CLEANUP / EXIT
End clean.

### MINIMUM PERSISTENT STATE
Method1 + COST question.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



---

# 9. CONTINUITY OUT

End state:

```text
METHOD 1 · BRUTE FORCE
COST ?
```

The code has reduced/cleared enough for Scene05's factorial explanation to own center stage.

---


# MANDATORY ANTIGRAVITY WORD-SYNC → EXACT FRAME-PLAN CONTRACT

This section is part of the approved Scene 04 plan. It is **not optional**.

The future final MP3 and exact word-sync JSON provide **WHEN**.  
This document provides **WHAT / WHY / ORDER / STATE / ENTER / EXIT / KIT / NO-SPOILER**.

Antigravity must preserve every semantic beat below.

## 1. Required inputs before exact frame planning

All must exist:

1. this approved Scene 04 word-based plan;
2. final Scene 04 MP3;
3. exact Scene 04 word-sync JSON matching that MP3;
4. verified Q12 script;
5. verified Q12 teaching trace where algorithm state is involved;
6. actual previous-scene implemented final state;
7. actual Foundation V2 / repo components;
8. authoritative project FPS / audio-sync helper.

If MP3 or sync JSON is missing:

```text
SCENE 04 FRAME PLAN: BLOCKED
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

For every `S04_*` anchor write a derived manifest containing:

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
sync/04-brute-code.anchors.json
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
SCRIPT SEMANTIC BEATS COVERED      = 16
GUESSED SECONDS                    = 0
GUESSED FRAMES                     = 0
GUESSED PIXEL COORDINATES          = 0
GENERIC ARRAY COMPONENTS           = 0
FUTURE-SOLUTION SPOILERS           = 0
DECORATIVE-ONLY MOTION             = 0
RAW SYNC MODIFICATIONS             = 0
```

This scene is ready for later exact MP3 + word-sync conversion only after the separate audit file passes.
