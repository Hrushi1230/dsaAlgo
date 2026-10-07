---
name: dsa-scene-planning
description: Creates exact audio-synchronized frame-wise scene choreography for long-form Code With Animation DSA videos. Must be read before every final *-plan.md.
---

# DSA Scene Planning V2

## Input gate

Do not create the final timed plan without:

- verified trace
- verified script
- final MP3
- validated exact word-sync JSON
- relevant codebase audit
- current shared visual system
- relevant motion/data-structure rules

## Planning truth

Every scene duration and audio anchor comes from exact sync data.

Never estimate the final scene length.

---

# Part 1 — Pedagogical rules

## No premature spoilers

Do not show:
- final winner
- final answer
- optimal invariant
- winning complexity

before narration creates it.

## Center-stage first

One concept should own the center stage.

Do not create dashboard-like multi-card layouts merely to fill space.

## One primary idea per beat

Default:

```text
cause / observation
→ state reaction
→ short hold
→ movement/mutation
→ settle
```

Do not animate pointer, counter, text, color and camera simultaneously unless they are one inseparable semantic event.

## Trace scenes

- zero code
- complete visual execution
- no skipped algorithm operations
- state follows verified trace exactly

## Code scenes

- implementation explanation
- active line character by character typewritten
- visual explanation supports the code line
- do not re-run the complete trace

## Why-not / derivation scenes

- limitation must be concrete
- complexity must be derived
- next idea must come from the limitation

## Complexity scenes

- explain total work
- compare meaningful approaches only
- do not infer complexity from nested-loop appearance alone

---

# Part 2 — Current optical layout contract

Until the canonical Design Bible replaces these values, preserve the current accepted 1920×1080 optical zones from the existing planning skill:

```text
Top badge:       Y 28–70
Hero title:      Y 95–210
Main hero stage: Y 300–600
Callout/state:   Y 640–780
Captions:        Y 960–1040
```

These are current layout constraints, not permission to invent new palette values.

For a standard 6-card center array, the existing skill uses approximately:

```text
card: 120×130
gap: 24
```

Only reuse this where it fits the actual structure. Do not force all arrays into the same card size.

## Palette

Do not copy the old raw colors from the previous `SKILL.md`.

Use the actual current shared project theme / `@dsa/kit` tokens.

No raw new brand color is introduced in the scene plan.

---

# Part 3 — Mandatory Scene Contract

Every final scene plan begins with:

```text
SCENE:
QUESTION:
BEAT TYPE:
AUDIO FILE:
SYNC FILE:
FPS:
TOTAL FRAMES:
PEDAGOGICAL GOAL:
TRACE STEP IDS:
DATA STRUCTURE:

REUSE:
EXTEND:
CREATE:
DO NOT TOUCH:

MOTION SEMANTICS:
MORPH SEMANTICS:
SVG SEMANTICS:

TRANSITION IN:
TRANSITION OUT:
FORBIDDEN:
```

If a field does not apply, explicitly write `N/A`.

---

# Part 4 — Exact audio breakdown

Create an audio-anchor table before choreography based on the validated exact sync data and semantic anchor manifest:

| Anchor ID | Word Index / ID | Frame Range | Spoken text | Trace IDs | Teaching purpose |
|---|---|---|---|---|---|

Include meaningful pauses (categorized as micro/natural/teaching/major per V2 Audio Sync Bible).

---

# Part 5 — Frame-wise choreography

A final plan must be detailed enough that implementation does not invent timing.

Bad:

```text
F300–F420 — swap values and move pointer.
```

Good:

```text
F300–F309 — nums[mid] receives compare focus.
F310–F320 — spoken decision resolves; target partition reacts.
F321–F332 — comprehension hold; no pointer movement.
F333–F344 — both values lift from their fixed slots.
F345–F368 — values travel on separate crossing arcs.
F369–F380 — values land in target slots.
F381–F392 — slot/partition semantic state settles.
F393–F405 — only now does the pointer move, because the swap is complete.
```

Exact windows must be derived from the scene audio anchors and available pauses.

### Motion Contract requirements per primary beat

Per Foundation V2 Motion Bible, each primary motion beat must explicitly document:

```text
SEMANTIC ACTION:
CAUSE:
STATE REACTION:
HOLD:
MOVE / MUTATION:
SETTLE:
MECHANIC:
```

---

# Part 6 — Fixed-slot rule

Do not use auto-flex insertion for algorithm structures whose identity must remain stable.

Arrays, pointer lanes, table rows and comparable repeated structures should have deterministic positions.

This prevents:
- horizontal jitter
- pointer misalignment
- accidental state teleportation

---

# Part 7 — Pause use

Audio pauses >300ms are valuable.

Use them intentionally for:
- comprehension
- completed stroke
- state settle
- transitioning focus
- preparing an empty shell

Do not automatically animate during every pause.

A still hold can be the correct teaching choice.

---

# Part 8 — Chalk / stroke behavior

Existing accepted rule:
- chalk strikes should draw over time, not appear instantly
- use current shared rough/chalk primitives where available
- the old skill suggested ~15–25 frames for strikes; exact duration must still fit audio

Do not recreate rough/chalk effects locally when shared components exist.

---

# Part 9 — Transition continuity

Prefer semantic continuity.

If an object remains conceptually the same across scenes/acts:
- preserve position/identity when useful
- morph or move it rather than destroy/recreate

Do not morph unrelated concepts only for spectacle.

## Morph / transformation contract

For non-trivial transformations, the plan must define:

```text
MORPH ID
SOURCE
TARGET
SOURCE SEMANTIC ID
TARGET SEMANTIC ID
IDENTITY RELATION
CARDINALITY
SOURCE PERSISTS
TRANSITION CLASS
AUDIO ANCHOR
TRACE STEP
MECHANIC
```

Route semantic decisions through `dsa-morph-design` and `docs/MORPHING_BIBLE_V2.md`.

## SVG Action Contract

For non-trivial SVG action, the plan must define:

```text
SVG ACTION ID:
SEMANTIC ROLE:
SVG CLASS:
PATH ID:
SOURCE:
TARGET:
AUTHORED DIRECTION:
VISIBLE DIRECTION:
AUDIO ANCHOR:
TRACE STEP:
START FRAME:
END FRAME:
DIRECTION:
PATH LENGTH SOURCE:
ARROW TYPE:
LAYER:
MECHANIC:
REUSE / EXTEND / CREATE:
```

Route semantic decisions through `dsa-svg-animation` and `docs/SVG_ANIMATION_BIBLE_V2.md`.

---

# Part 10 — REUSE / EXTEND / CREATE

Every plan names verified implementation building blocks.

### REUSE
Use unchanged.

### EXTEND
Explain exactly which missing capability is needed.

### CREATE
Only when repository audit proved the semantic primitive does not exist.

### DO NOT TOUCH
Shared files that should remain stable in this implementation.

---

# Part 11 — Critical-frame checklist

Every scene plan declares frames for review:

```text
ENTRY
FIRST IMPORTANT STATE
FIRST DECISION
FIRST MUTATION
MOST COMPLEX MID-SCENE STATE
FINAL ALGORITHM STATE
TRANSITION OUT
```

For code scenes also include:
```text
FIRST CODE LINE
KEY LINE
FINAL CODE STATE
```

---

# Part 12 — Scene-type checklist

## HOOK / INTRO
- question/dilemma quickly
- no answer spoiler

## UNDERSTAND
- exact problem semantics
- input/output
- no algorithm spoiler unless script explicitly starts it

## TRACE
- visual only
- all operations
- trace-accurate

## CODE
- code only as primary teaching object
- line-by-line causality

## WHY-NOT
- concrete failure
- derived cost
- natural next question

## OPTIMAL IDEA
- derive invariant/rule
- prove rule visually before large trace

## COMPLEXITY
- derive rather than announce
- compare past methods accurately

## RECAP / ROADMAP
- summarize learned transformation
- update exact roadmap state
- no guessed next question

---

# Part 13 — Final plan QA

Before handoff:

- [ ] total frames equal sync duration frames
- [ ] all anchor frames come from sync
- [ ] algorithm mutations cite trace IDs
- [ ] no hidden skipped operation in complete trace
- [ ] cause occurs before movement
- [ ] no premature answer
- [ ] positions are deterministic
- [ ] shared components were audited
- [ ] no new raw palette invented
- [ ] important pauses are intentional
- [ ] critical review frames are listed
- [ ] transition out is explicit
