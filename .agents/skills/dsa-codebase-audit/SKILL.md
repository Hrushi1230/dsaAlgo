---
name: dsa-codebase-audit
description: Inspects the real dsaAlgo codebase before a new scene or question requests reusable components, assets, motion helpers, or refactors.
---

# DSA Codebase Audit V2

## Goal
Prevent duplicate components, invented filenames, inconsistent motion, and unnecessary refactors.

## When to use
Before:
- planning a new question
- adding a data-structure visualization
- asking Antigravity to create a shared component
- changing shared motion/theme/timing helpers

## Inspect first

Search the actual repository for:
- existing `@dsa/kit` components
- question-local equivalents
- theme tokens
- typography helpers
- layout helpers
- motion helpers
- SVG helpers
- sync helpers
- captions
- code editor components
- scene title / roadmap components
- previous scenes with the same algorithmic action

## Current verified reusable files available in this project context

The following files have been directly inspected or provided and therefore must be considered before creating replacements:

```text
RoughCurve
Shatter
MiniGraph
ChannelLogoBadge
BezierFlight
HashMapTable
ChalkText
QuestionCard
CountUp
RoughLine
SceneTitleCard
HashSetTable
SvgMorph
ChalkIcons
ChalkDust
RoughBox
Captions
ShineFill
anim
audioSync
motion
chalk
fonts
```

This list is not proof that no other repo components exist.
The real repository must still be searched.

## Audit record

For every relevant existing item record:

```text
NAME:
PATH:
ROLE:
CURRENT API:
CURRENT USERS:
RELEVANT TO NEW QUESTION:
LIMITATION:
DECISION:
```

Decision must be one of:

### REUSE
Works unchanged.

### EXTEND
Correct semantic component but lacks one required capability.
Extension must preserve existing behavior.

### CREATE
No existing component serves the semantic need.

### DO NOT TOUCH
Shared item is unrelated to the current task.

## Rules

- Never create `ArrayBox2`, `BetterArray`, `NewHashSet`, etc. merely because an existing component feels inconvenient.
- Do not generalize a question-local component until at least one second real use proves the abstraction.
- Do not refactor unrelated code as part of a scene implementation.
- Do not assume a component can teach a concept simply because its shape looks similar.
- A HashSet visual must preserve HashSet semantics.
- A sorted visual must not be reused to imply unordered runtime behavior.

## Known Phase-1 observations

These are verified from provided files, but code changes belong to later phases:

- `audioSync.ts` currently uses prefix + occurrence matching.
- `MiniGraph.tsx` is sorting-oriented rather than generic complexity-oriented.
- `HashSetTable.tsx` contains a hardcoded cyan semantic state.
- `Captions.tsx`, `ChannelLogoBadge.tsx`, and `SvgMorph.tsx` contain local visual constants.
- `motion.ts` already contains valuable deterministic low-level helpers.
- `anim.ts` already provides reusable frame-driven easing helpers.

Phase 1 records these facts. It does not refactor them yet.

## Output required before implementation handoff

```text
REUSE
- ...

EXTEND
- ...

CREATE
- ...

DO NOT TOUCH
- ...
```

Every entry must refer to a verified real file/component.
