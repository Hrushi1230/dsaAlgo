---
name: dsa-motion-design
description: Applies the Code With Animation Motion Bible to DSA scene plans and Antigravity implementation. Use after exact audio sync and verified trace exist, before implementation choreography is finalized.
---

# DSA Motion Design V2

## Required inputs

- verified trace
- exact audio sync + semantic anchors
- scene plan
- `docs/MOTION_BIBLE_V2.md`
- relevant data-structure visual style
- current codebase audit

## Source priority

1. verified algorithm trace
2. exact audio sync
3. Motion Bible
4. relevant Data Structure Visual Grammar
5. existing @dsa/kit motion primitives
6. official installed Remotion skills/docs for API implementation

Never reverse this order.

## Master law

```text
CAUSE
→ STATE REACTION
→ HOLD
→ MOVEMENT / MUTATION
→ SETTLE
```

## Semantic vocabulary

Use the Motion Bible's canonical names:

```text
REVEAL
FOCUS
COMPARE
QUERY
HIT
MISS
ACCEPT
REJECT
MOVE
POINTER_MOVE
SWAP
INSERT
REMOVE
PUSH
POP
ENQUEUE
DEQUEUE
EXPAND
SHRINK
MERGE
SPLIT
OWN
COUNT_UPDATE
DRAW_RELATION
ERASE_RELATION
COMPLETE
TRANSITION
```

Do not invent a new motion name if one of these already matches.

## Mechanics routing

Prefer existing project mechanics:

```text
anim.ts
motion.ts
BezierFlight
RoughLine
RoughCurve
RoughBox
CountUp
ChalkDust
Shatter
ShineFill
```

Do not create scene-local easing/spring configs without proving current primitives are insufficient.

## Remotion implementation rules

Follow installed official Remotion skills:
- frame-driven motion
- explicit interpolation ranges
- clamping where bounded
- FPS-aware spring
- deterministic render state
- Sequence/local timing where it improves clarity

No CSS animation/transition.

## Scene-plan output

Each primary motion beat must include:

```text
TRACE:
AUDIO ANCHOR:
SEMANTIC ACTION:
CAUSE FRAMES:
STATE REACTION FRAMES:
HOLD FRAMES:
MOVE/MUTATION FRAMES:
SETTLE FRAMES:
MECHANIC:
REUSE / EXTEND / CREATE:
```

## Density rule

One primary semantic motion plus at most one supporting reaction.

## Review

If the same action appears twice in a course scene, compare them.

Same semantic operation should have the same motion grammar unless the plan explicitly documents why the second one is compressed.
