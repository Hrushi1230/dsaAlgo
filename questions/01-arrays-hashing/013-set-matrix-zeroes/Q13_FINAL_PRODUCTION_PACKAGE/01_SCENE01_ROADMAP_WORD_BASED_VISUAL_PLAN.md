# Q13 · Scene 01 — Phase 9 Word-Based Visual Plan
## Roadmap Resume + Q13 Activation
**Problem:** Set Matrix Zeroes · LeetCode 73 · Medium  
**Phase:** 9 — Word-Based Visual Planning  
**Timing:** intentionally NOT defined here. No seconds. No frames. Exact timing comes only after user-provided audio + word-sync JSON.

---

# 0. Source Lock

## Approved narration for this scene

> Welcome back to Code With Animation...
>
> We are continuing our Arrays and Hashing roadmap.
>
> Question twelve...
> Next Permutation...
> is complete.
>
> Our global progress is now twelve out of two hundred twenty-seven.
>
> And the next problem is...
>
> Question thirteen...
>
> Set Matrix Zeroes...
>
> LeetCode seventy-three...
>
> Medium.
>
> This question looks simple at first...
>
> but one small detail changes the whole problem.
>
> Let’s understand that first.

## Incoming semantic state from Q12

Scene 01 MUST resume from the final Q12 roadmap state. Do not rebuild the roadmap from blank.

```text
GLOBAL PROGRESS
12 / 227 COMPLETE

PATTERN
Arrays & Hashing active

Q12
Next Permutation
COMPLETE

Q13
Set Matrix Zeroes
UP NEXT

RAIL FOCUS
013
```

Important:

```text
Q13 is NOT complete.
Global progress remains 12 / 227.
```

The progress increment to 13 / 227 belongs only to Q13's final recap scene.

---

# 1. Component / Foundation Decision

## REUSE — mandatory

- Existing permanent **DSA Pattern Roadmap UI**
- Existing Arrays & Hashing roadmap data
- Existing central problem-card / roadmap-current-problem system
- Existing progress rail
- Existing global progress pill
- Existing pattern sidebar
- `Captions` for exact word-synced captions after sync data exists
- `ChannelLogoBadge` as global course watermark

## DO NOT RECREATE

Do not build:
- a new roadmap sidebar;
- a new roadmap card;
- a duplicate 227-problem dataset;
- generic cards for Q12/Q13;
- a scene-local progress rail;
- a separate "12/227" counter component if the roadmap already owns it.

## Source limitation

The actual source/API for the permanent roadmap component is not present in the currently supplied kit subset.

Therefore:

```text
ROADMAP COMPONENT API
UNRESOLVED — REPO SOURCE REQUIRED BEFORE IMPLEMENTATION
```

Phase 9 may define semantic states, but MUST NOT invent prop names, coordinates, or internal component structure.

## Components intentionally NOT used

- `SceneTitleCard` — roadmap UI already owns this scene's identity.
- `QuestionCard` — Scene 02 can own the actual problem presentation.
- Matrix/Grid — must NOT appear in Scene 01.
- Array V2 — not needed.
- `CountUp` — progress does not increment in this scene.
- complexity graph — not relevant.
- Method visuals — forbidden here.

---

# 2. Scene Teaching Job

The scene has only four jobs:

```text
1. Reconnect the learner to the permanent roadmap.
2. Confirm Q12 is complete.
3. Preserve global progress at 12 / 227.
4. Hand focus to Q13 without teaching any part of Q13 yet.
```

This is a semantic handoff scene, not a mini lesson.

The main visual progression is:

```text
Q12 COMPLETE
→ GLOBAL PROGRESS 12/227
→ Q13 UP NEXT
→ Q13 NOW ACTIVE
→ HOLD Q13 IDENTITY
→ HAND OFF TO PROBLEM UNDERSTANDING
```

---

# 3. Word-Driven Beat Plan

---

## BEAT 01

### ANCHOR / SPOKEN PHRASE

> "Welcome back to Code With Animation..."

### WHAT APPEARS NOW

Nothing new should be constructed.

Resume directly from the settled Q12 final roadmap state.

The roadmap is already on screen as a continuation of the course.

### CENTER-STAGE HERO

The **roadmap current-problem region**, still semantically carrying Q12 complete → Q13 up-next continuity.

### CAUSE

"Welcome back" re-establishes continuity with the previous completed lesson.

### EFFECT / MOTION

No decorative entrance.

At most, restore the scene from the prior semantic state if this composition is rendered independently.

The viewer should feel:

```text
we never left the roadmap
```

not:

```text
a new presentation slide just opened
```

### WHAT MUST NOT APPEAR YET

- Q13 active status
- input matrix
- original zeros
- any zeroing animation
- Method 1 / Method 2 / Method 3
- complexity
- final answer
- Q14
- 13 / 227

### COMPREHENSION HOLD

Only use the natural pause after "Animation..." if the audio contains it.

No extra visual event is required.

### CLEANUP / EXIT

None.

### PERSISTENT STATE

Full permanent roadmap state remains.

### KIT / SYSTEM

- permanent Roadmap UI
- Captions
- ChannelLogoBadge

### MOTION PURPOSE

Semantic continuity only.

---

## BEAT 02

### ANCHOR / SPOKEN PHRASE

> "We are continuing our Arrays and Hashing roadmap."

### WHAT APPEARS NOW

The existing **Arrays & Hashing** pattern identity receives focus.

Do not reveal a new sidebar or enlarge the entire sidebar.

### CENTER-STAGE HERO

Arrays & Hashing pattern context.

### CAUSE

The narration explicitly names the active pattern.

### EFFECT / MOTION

Use the roadmap's existing active-pattern emphasis.

Everything outside the active pattern stays quiet.

The central roadmap problem region remains visible as support.

### WHAT MUST NOT APPEAR YET

No Q13 activation.

Q13 is still:

```text
UP NEXT
```

### COMPREHENSION HOLD

If the narration pauses after "roadmap", allow the active pattern state to settle.

### CLEANUP / EXIT

Pattern emphasis reduces back to its normal active state.

### PERSISTENT STATE

Arrays & Hashing remains active, but no longer needs to be the primary hero.

### KIT / SYSTEM

Existing roadmap pattern-sidebar state.

### MOTION PURPOSE

Direct attention to where the learner is in the 227-problem journey.

---

## BEAT 03

### ANCHOR / SPOKEN PHRASE

> "Question twelve..."

### WHAT APPEARS NOW

Focus transfers from the pattern context to the existing Q12 roadmap item.

### CENTER-STAGE HERO

```text
Q12
Next Permutation
COMPLETE
```

### CAUSE

The narration names the previous question number.

### EFFECT / MOTION

Q12 becomes the only strongly emphasized roadmap item.

Do not animate its completion yet as a new event; it is already complete from the previous question.

This is a **recall focus**, not a new completion.

### WHAT MUST NOT APPEAR YET

Q13 must not become active.

### COMPREHENSION HOLD

None unless audio provides pause.

### CLEANUP / EXIT

Q12 focus remains through the next two spoken fragments because the teacher is still identifying it.

### PERSISTENT STATE

Q12 focused.

### KIT / SYSTEM

Permanent roadmap current/previous problem visualization.

### MOTION PURPOSE

Direct attention.

---

## BEAT 04

### ANCHOR / SPOKEN PHRASE

> "Next Permutation..."

### WHAT APPEARS NOW

No new object.

The already-focused Q12 title becomes the dominant readable part of the current problem item.

### CENTER-STAGE HERO

`Next Permutation`

### CAUSE

The narration names the completed problem.

### EFFECT / MOTION

A subtle existing roadmap focus treatment may strengthen around the title.

Do not add a generic floating title.

### WHAT MUST NOT APPEAR YET

- Q13 activation
- Set Matrix Zeroes title as hero
- new progress value

### COMPREHENSION HOLD

Natural pause only.

### CLEANUP / EXIT

Keep Q12 focused into "is complete."

### PERSISTENT STATE

Q12 complete item.

### KIT / SYSTEM

Existing roadmap problem card/item.

### MOTION PURPOSE

Attention only.

---

## BEAT 05

### ANCHOR / SPOKEN PHRASE

> "is complete."

### WHAT APPEARS NOW

The existing COMPLETE state becomes the focus.

### CENTER-STAGE HERO

Q12's completed status.

### CAUSE

The narration confirms completion.

### EFFECT / MOTION

If the roadmap has an existing completion emphasis/stamp animation, replay only a short **confirmation emphasis**, not the full end-of-Q12 completion sequence.

If no such reusable focus state exists, simply increase emphasis on the already-present COMPLETE label.

Do not draw a second duplicate checkmark.

### WHAT MUST NOT APPEAR YET

- 13 / 227
- Q13 NOW ACTIVE

### COMPREHENSION HOLD

Let the completed status settle during the pause.

### CLEANUP / EXIT

Q12 emphasis reduces.

### PERSISTENT STATE

Q12 remains visibly COMPLETE in its normal roadmap state.

### KIT / SYSTEM

Existing roadmap completion state.

### MOTION PURPOSE

Confirm prior course progress.

---

## BEAT 06

### ANCHOR / SPOKEN PHRASE

> "Our global progress is now twelve out of two hundred twenty-seven."

### WHAT APPEARS NOW

The existing global progress pill becomes the primary focus.

Value remains exactly:

```text
12 / 227
```

### CENTER-STAGE HERO

Global progress.

### CAUSE

Narration explicitly states the global progress.

### EFFECT / MOTION

Do NOT count from 0 to 12.

Do NOT increment 12 → 13.

This is a focus/reaffirmation event only.

If the permanent roadmap has a progress fill corresponding to 12 solved problems, allow that existing fill to receive emphasis without changing its extent.

### WHAT MUST NOT APPEAR YET

```text
13 / 227
```

is forbidden.

No Q13 solved/completed visual.

### COMPREHENSION HOLD

Allow the learner to read 12 / 227 if audio leaves room.

### CLEANUP / EXIT

Progress pill returns to normal persistent prominence.

### PERSISTENT STATE

```text
12 / 227
```

remains globally visible according to the roadmap design.

### KIT / SYSTEM

Existing roadmap global-progress component.

`CountUp` is NOT required because no numerical transition happens.

### MOTION PURPOSE

Confirm exact state.

---

## BEAT 07

### ANCHOR / SPOKEN PHRASE

> "And the next problem is..."

### WHAT APPEARS NOW

Attention leaves Q12/progress and transfers toward the already-existing Q13 UP NEXT item.

### CENTER-STAGE HERO

Q13 roadmap item in its current:

```text
UP NEXT
```

state.

### CAUSE

The narration moves from completed work to the next problem.

### EFFECT / MOTION

Use a semantic roadmap handoff:

```text
Q12 focus recedes
→ rail/current focus settles on 013
→ Q13 UP NEXT item becomes dominant
```

Important incoming-state rule:

The Q12 final scene already left the rail focused on `013`.

Therefore implementation must NOT invent a second large rail movement if the existing state is already at 013.

In that case, only emphasis transfers to Q13.

### WHAT MUST NOT APPEAR YET

Do not change:

```text
UP NEXT → NOW ACTIVE
```

until the words "Question thirteen".

### COMPREHENSION HOLD

The unresolved "next problem is..." pause can hold Q13 in UP NEXT state.

### CLEANUP / EXIT

None yet.

### PERSISTENT STATE

Q13 UP NEXT focused.

### KIT / SYSTEM

Existing roadmap rail + Q13 problem item.

### MOTION PURPOSE

Semantic continuity from completed question to next question.

---

## BEAT 08

### ANCHOR / SPOKEN PHRASE

> "Question thirteen..."

### WHAT APPEARS NOW

This is the activation moment.

Change Q13 status from:

```text
UP NEXT
```

to:

```text
NOW ACTIVE
```

or the exact equivalent used by the permanent roadmap implementation.

### CENTER-STAGE HERO

Q13 active problem item.

### CAUSE

The teacher explicitly reaches Question 13.

### EFFECT / MOTION

One semantic state change only:

```text
Q13 status activates
```

Do not simultaneously reveal the matrix, zeros, approach labels, or solution.

If the existing roadmap uses a rail/current indicator, it should now be understood as the active question indicator.

### WHAT MUST NOT APPEAR YET

- 13 / 227
- Q13 COMPLETE
- input matrix
- LC solution
- any method label

### COMPREHENSION HOLD

Brief hold if narration pauses.

### CLEANUP / EXIT

The old `UP NEXT` state is gone.

### PERSISTENT STATE

Q13 remains active for the rest of the question.

### KIT / SYSTEM

Permanent roadmap status/current-problem system.

### MOTION PURPOSE

Teach exact course state.

---

## BEAT 09

### ANCHOR / SPOKEN PHRASE

> "Set Matrix Zeroes..."

### WHAT APPEARS NOW

Q13 title becomes the dominant readable element inside the active roadmap problem region.

If it was already visible in the UP NEXT item, this is an **attention change**, not a duplicate text reveal.

### CENTER-STAGE HERO

`Set Matrix Zeroes`

### CAUSE

Narration names the problem.

### EFFECT / MOTION

Reduce surrounding roadmap chrome slightly so the problem title owns the optical center.

Do not detach the title into a generic title card.

### WHAT MUST NOT APPEAR YET

No matrix content.

Do not show:
- `[1,2,0,...]`
- any zero cell
- row/column highlighting
- output
- method names

### COMPREHENSION HOLD

Use narration pause only.

### CLEANUP / EXIT

Keep title dominant for metadata beat.

### PERSISTENT STATE

Q13 identity.

### KIT / SYSTEM

Existing roadmap current-problem component.

### MOTION PURPOSE

Direct attention.

---

## BEAT 10

### ANCHOR / SPOKEN PHRASE

> "LeetCode seventy-three..."

### WHAT APPEARS NOW

LeetCode identifier appears or receives emphasis:

```text
LC 73
```

### CENTER-STAGE HERO

Problem identity remains primary; LC 73 is secondary support.

### CAUSE

Narration names the LeetCode number.

### EFFECT / MOTION

Use the roadmap's existing metadata presentation.

Do not create an independent badge if one already exists.

### WHAT MUST NOT APPEAR YET

Difficulty should not become emphasized until "Medium."

### COMPREHENSION HOLD

None required.

### CLEANUP / EXIT

LC number remains as quiet metadata.

### PERSISTENT STATE

Q13 title + LC 73.

### KIT / SYSTEM

Roadmap metadata.

### MOTION PURPOSE

Attach source identity to the active problem.

---

## BEAT 11

### ANCHOR / SPOKEN PHRASE

> "Medium."

### WHAT APPEARS NOW

Difficulty metadata:

```text
MEDIUM
```

### CENTER-STAGE HERO

Still `Set Matrix Zeroes`.

Difficulty is only support.

### CAUSE

Narration explicitly states difficulty.

### EFFECT / MOTION

Reveal/emphasize the existing difficulty indicator.

Do not make difficulty a large center-stage card.

### WHAT MUST NOT APPEAR YET

No problem mechanics.

### COMPREHENSION HOLD

Short natural pause if available.

### CLEANUP / EXIT

LC and difficulty settle to quiet metadata.

### PERSISTENT STATE

Active Q13 problem identity.

### KIT / SYSTEM

Existing roadmap metadata.

### MOTION PURPOSE

State identification.

---

## BEAT 12

### ANCHOR / SPOKEN PHRASE

> "This question looks simple at first..."

### WHAT APPEARS NOW

No algorithmic visual.

Roadmap chrome begins reducing so the active Q13 problem identity owns the board.

### CENTER-STAGE HERO

`Set Matrix Zeroes`

### CAUSE

The narration shifts from roadmap administration into the problem's conceptual setup.

### EFFECT / MOTION

Use a semantic transition:

```text
roadmap navigation context
→ recedes
Q13 identity
→ remains
```

No camera flourish.

No decorative particles.

### WHAT MUST NOT APPEAR YET

Especially forbidden:

- master input matrix
- original zero locations
- naive immediate-zeroing failure
- "source of truth"
- Method 1 copy
- rowZero / colZero
- boundary markers

Those belong to later narration.

### COMPREHENSION HOLD

If the audio pause is real, allow the simplified Q13 identity to settle.

### CLEANUP / EXIT

Most roadmap supporting UI may reduce/fade according to the existing transition language.

### PERSISTENT STATE

Minimum Q13 identity needed for handoff.

### KIT / SYSTEM

Permanent roadmap UI transition behavior.

### MOTION PURPOSE

Representation handoff: roadmap → problem lesson.

---

## BEAT 13

### ANCHOR / SPOKEN PHRASE

> "but one small detail changes the whole problem."

### WHAT APPEARS NOW

A small unresolved chalk question cue may appear only if the established course visual language already uses such a cue.

Preferred semantic state:

```text
SET MATRIX ZEROES
+
unresolved attention cue
```

Not a method clue.

### CENTER-STAGE HERO

The active problem title / identity.

### CAUSE

Narration introduces an unresolved complication without explaining it.

### EFFECT / MOTION

If an existing roadmap/problem transition primitive supports an unresolved/question emphasis, use it briefly.

Otherwise use **no additional object**; the narration itself is enough.

Do NOT invent a decorative giant question mark merely to fill space.

### WHAT MUST NOT APPEAR YET

The actual danger:

```text
newly-created zeros can cascade
```

must stay hidden until Scene 02 narration reaches it.

### COMPREHENSION HOLD

Use the pause after "problem" to preserve curiosity.

### CLEANUP / EXIT

Any temporary unresolved cue should disappear before the final handoff phrase.

### PERSISTENT STATE

Only Q13 identity.

### KIT / SYSTEM

Existing problem-transition language if available.

No new component required.

### MOTION PURPOSE

Direct attention to unresolved reasoning.

---

## BEAT 14

### ANCHOR / SPOKEN PHRASE

> "Let’s understand that first."

### WHAT APPEARS NOW

No new content.

This phrase authorizes the handoff into Scene 02.

### CENTER-STAGE HERO

Q13 identity, briefly.

### CAUSE

Teacher explicitly moves from roadmap introduction to understanding the problem.

### EFFECT / MOTION

Semantic handoff:

```text
Q13 roadmap identity
→ settles/reduces
→ Scene 02 receives the board
```

The input matrix itself must be created only in Scene 02 when its narration reaches:

```text
"We are given a matrix."
```

### WHAT MUST NOT APPEAR YET

Absolutely no early matrix reveal during the Scene 01 exit.

### COMPREHENSION HOLD

Use only audio-provided pause.

### CLEANUP / EXIT

Roadmap-specific navigation UI leaves/reduces according to the production transition.

### PERSISTENT STATE

Minimum next-scene identity only:

```text
Q13 / Set Matrix Zeroes
```

if the Scene 02 implementation needs continuity.

Otherwise even this may transition out before Scene 02 creates its own problem view.

### KIT / SYSTEM

Roadmap transition system.

### MOTION PURPOSE

Semantic continuity only.

---

# 4. Scene 01 Visual Lifecycle Summary

```text
INCOMING
Q12 complete roadmap state
        ↓
pattern context focus
        ↓
Q12 completion recall
        ↓
12 / 227 focus
        ↓
Q13 UP NEXT focus
        ↓
"Question thirteen"
Q13 NOW ACTIVE
        ↓
Set Matrix Zeroes identity
        ↓
LC73 / Medium metadata
        ↓
roadmap chrome reduces
        ↓
Q13 identity hands off to Scene 02
```

No solution information is introduced.

---

# 5. Center-Stage Audit

Default occupancy stays within:

```text
1 PRIMARY HERO
+ existing roadmap context as quiet support
+ captions
```

Primary hero sequence:

```text
Roadmap continuity
→ Arrays & Hashing
→ Q12
→ Q12 COMPLETE
→ 12 / 227
→ Q13 UP NEXT
→ Q13 ACTIVE
→ Set Matrix Zeroes
```

The entire roadmap may remain structurally present because this is a roadmap scene, but non-active regions must remain visually quiet.

---

# 6. No-Spoiler Audit

## Allowed in Scene 01

- Q12 COMPLETE
- 12 / 227
- Q13
- Set Matrix Zeroes
- LC 73
- Medium
- Q13 NOW ACTIVE

## Forbidden in Scene 01

- input matrix
- output matrix
- positions `(0,2)`, `(2,0)`, `(3,3)`
- "original zero"
- immediate-zeroing failure
- full-copy method
- `rowZero[]`
- `colZero[]`
- first row / first column markers
- `firstRowZero`
- `firstColZero`
- O(mn), O(m+n), O(1)
- Q13 COMPLETE
- 13 / 227
- Q14

**No-spoiler status: PASS**

---

# 7. Motion Audit

Every planned motion has one of these jobs:

```text
Q12 focus
→ attention

progress focus
→ exact state confirmation

Q12 → Q13 handoff
→ semantic continuity

UP NEXT → NOW ACTIVE
→ course state change

roadmap reduction
→ representation handoff
```

No decorative motion is required.

```text
DECORATIVE MOTION COUNT = 0
```

---

# 8. Persistence Audit

Persistent only because needed:

```text
Arrays & Hashing active
Q12 COMPLETE
12 / 227
Q13 active after activation
```

Temporary focus events must reduce after their narration job.

Nothing remains merely because there is visual space.

---

# 9. Implementation Unknowns to Resolve Later

Before Phase 13 implementation, inspect the actual roadmap source and resolve:

```text
- exact component path/name
- exact active-pattern API
- exact current-problem API
- exact UP NEXT / ACTIVE status representation
- exact progress-pill component
- exact progress-rail current-index behavior
- exact semantic transition behavior from roadmap scene to problem scene
```

Do NOT guess these in implementation.

---

# 10. Scene 01 Phase-9 QA

```text
SCRIPT ORDER FOLLOWED              PASS
Q12 FINAL STATE PRESERVED         PASS
GLOBAL PROGRESS = 12 / 227        PASS
Q13 NOT MARKED COMPLETE           PASS
Q13 ACTIVATES ON SPOKEN Q13       PASS
NO MATRIX REVEAL                  PASS
NO METHOD SPOILER                 PASS
CENTER-STAGE LAW                  PASS
MOTION PURPOSE LAW                PASS
PERSISTENCE LAW                   PASS
ROADMAP REUSE LAW                 PASS
NO GENERIC CARDS                  PASS
NO FRAME/TIME GUESSING            PASS
UNRESOLVED COMPONENT API FLAGGED  PASS
```

## FINAL SCENE 01 STATUS

**PHASE 9 · SCENE 01 — PASS / LOCKED**

---

# ANTIGRAVITY POST-AUDIO CONVERSION — REQUIRED FOR THIS SCENE

After the final MP3 + exact word-sync JSON are supplied, Antigravity must convert **this exact Phase-9 plan** to frames using:

`ANTIGRAVITY_POST_AUDIO_WORDSYNC_TO_FRAMES.md`

For every `ANCHOR ID` in this scene:

```text
exact anchor phrase
→ unique contiguous word IDs from final sync
→ first word exact start
→ last word exact end
→ startFrame = floor(start × 30)
→ endFrameExclusive = ceil(end × 30)
```

Then generate:

```text
SceneXX_FRAME_PLAN.md
```

using `[startFrame,endFrameExclusive)`.

Rules for this scene:

```text
DO NOT redesign this Phase-9 choreography.
DO NOT invent seconds or frame offsets.
DO NOT add a hold unless the audio has a real gap.
DO NOT reveal a future state before its exact spoken word.
DO NOT implement until unmatched anchors = 0.
```

If the actual audio wording differs materially from the approved narration:

```text
BLOCKED — AUDIO / SCRIPT MISMATCH
```

If a required kit/component API is missing:

```text
BLOCKED — SOURCE REQUIRED
```

Only after the exact frame plan passes audit may Antigravity implement, typecheck, render, visually QA, repair, and move to the next scene automatically.
