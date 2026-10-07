# Code With Animation — Motion Bible V2
## Foundation V2 · Phase 4

**Scope:** Long-form DSA course  
**Motion philosophy:** Motion must make algorithm state easier to understand.

---

# 1. The master motion law

Every important algorithm beat follows:

```text
CAUSE
→ STATE REACTION
→ COMPREHENSION HOLD
→ MOVEMENT / MUTATION
→ SETTLE
```

This is the default order.

Do not move a pointer because narration merely mentioned it.
Move it only after the algorithmic decision that justifies the move is established.

---

# 2. Motion hierarchy

There are five levels of motion.

## Level 0 — HOLD

Nothing moves.

Use when:
- learner needs to inspect a state
- narration explains an invariant
- a major result just landed
- audio has a meaningful pause
- more motion would compete with understanding

A still frame is an intentional motion decision.

---

## Level 1 — ATTENTION

No structural state changes.

Examples:
- focus color
- rough underline
- small ring
- subtle opacity shift
- restrained scale emphasis

Purpose:
“Look here.”

---

## Level 2 — STATE

Algorithm state changes without major geometry movement.

Examples:
- unknown → active
- miss → rejected
- count 3 → 4
- node unvisited → visited
- region unconfirmed → confirmed

Purpose:
“This object's meaning changed.”

---

## Level 3 — STRUCTURAL MOVE

Position/topology changes.

Examples:
- pointer moves
- array values swap
- item enters HashSet representation
- stack push/pop
- node/edge becomes connected
- interval merges

Purpose:
“The algorithm changed structure or ownership.”

---

## Level 4 — SCENE TRANSITION

Large compositional transition.

Examples:
- trace geometry simplifies into code guides
- current approach recedes and next approach enters
- problem opener hands off to first reasoning scene

Purpose:
“The teaching mode changed.”

Level 4 should be rarer than Level 1–3 motion.

---

# 3. Motion priority rule

At one teaching instant:

```text
one PRIMARY motion
+
at most one SUPPORTING reaction
```

Bad:
- pointer moves
- counter rolls
- title writes
- border pulses
- camera scales
- array rearranges
all at once.

Good:
- query result turns green
- then pointer moves.

---

# 4. Timing source

Final timing always comes from:

```text
SCRIPT
→ MP3
→ EXACT SYNC
→ SEMANTIC ANCHOR
→ FRAME WINDOW
```

The Motion Bible does not override exact audio.

Motion defaults define **how an action behaves once its frame window is known**.

---

# 5. Motion mechanics selection

## Use explicit eased interpolation when:

The action must:
- start at an exact frame
- finish at an exact frame
- preserve a bounded audio window

Examples:
- pointer movement
- swap travel
- query travel
- opacity
- relation line progress
- partition-band expansion

Default course easing:
```text
EASE = cubic bezier (0.16, 1, 0.3, 1)
```

Current project already owns this in `anim.ts`.

---

## Use spring when:

The object should physically settle.

Examples:
- entrance
- small confirmation
- hero result settle
- chalk dust expansion

Use current spring roles:

```text
SPRING.enter
SPRING.pop
SPRING.hero
SPRING.snap
```

Do not create a new spring config per scene.

If an exact duration is required, use the installed Remotion version's supported bounded spring API only after checking official docs/version.

---

## Linear timing is allowed only when constant speed is meaningful

The current `anim.ts` comment says “nothing linear.”

V2 narrows this rule.

Linear may be semantically correct for:
- constant-rate scanning visualization
- time/space measurement rail
- controlled path sampling where speed itself encodes uniform work

Do not use linear for:
- entrance
- pointer settle
- swap landing
- emphasis

This is an explicit V2 refinement.

---

# 6. Course motion weight classes

These are not independent arbitrary durations.
They are derived from current kit timing baselines.

## MICRO
Typical envelope:
```text
4–9 frames
```

Uses:
- tiny portal compression
- marker tick
- local color snap
- mini rejection twitch

Must not carry a major concept alone.

---

## SHORT
Typical envelope:
```text
9–18 frames
```

Derived from:
- CountUp 9f
- ShineFill 15f
- RoughLine / RoughBox 18f
- ChalkDust 18f

Uses:
- pointer move
- count roll
- focus ring
- small line draw
- hit/miss reaction

---

## MEDIUM
Typical envelope:
```text
18–30 frames
```

Derived from:
- current 24f rise/recede
- RoughCurve 30f

Uses:
- object transfer
- relationship draw
- approach label entrance
- structural move
- small transition

---

## HEAVY
Typical envelope:
```text
30–48 frames
```

Uses:
- full swap
- merge
- multi-object transfer
- major scene handoff

Use only when exact audio provides enough room.

---

# 7. Canonical semantic actions

These names are the course vocabulary.

Scene plans should use them consistently.

---

## REVEAL

Meaning:
An object becomes available to learn from.

Order:
```text
shell / faint guide
→ content
→ settle
```

Preferred mechanics:
- `fadeIn`
- `riseIn`
- `writeProgress`
- `RoughLine` / `RoughBox`

Do not fly every object from offscreen.

---

## FOCUS

Meaning:
“This is the current object.”

Order:
```text
existing object
→ pivot/focus state
→ short hold
```

Preferred mechanics:
- semantic color
- subtle scale
- rough ring/underline

No large bounce.

---

## COMPARE

Meaning:
Two states/values are being evaluated.

Order:
```text
focus operand A
→ focus operand B / relationship
→ comparison connector
→ result
→ hold
```

Do not move either operand before result if movement depends on the result.

---

## QUERY

Meaning:
Ask a data structure for information.

Order:
```text
question forms
→ query travels to structure
→ structure reacts
→ result returns/resolves
→ hold
```

For HashSet/HashMap:
Do not visually scan every member unless the algorithm really scans.

Existing course pattern:
`BezierFlight` or semantic curved path to a hash portal is valid.

---

## HIT

Meaning:
Query/comparison succeeded.

Order:
```text
target reacts
→ good state resolves
→ optional tiny confirmation
→ hold
```

Use `theme.good`.

Do not immediately start the next movement in the same instant.

---

## MISS

Meaning:
Query failed / required value absent.

Order:
```text
empty/ghost response
→ warn state
→ short hold
→ next logic
```

Use `theme.warn` only when absence/failure is semantically warning-like.

Normal algorithm skips are not automatically red.

---

## ACCEPT

Meaning:
State is confirmed as part of the solution/current invariant.

Order:
```text
decision
→ good/confirmed state
→ settle
```

No celebratory explosion.

---

## REJECT

Meaning:
Candidate/choice is invalid.

Order:
```text
decision
→ warn/dim state
→ optional erase/retract
```

Use shatter only if the teaching concept is literally “this structure/assumption breaks.”

---

## MOVE

Meaning:
Same object changes position.

Order:
```text
cause already known
→ lift/unstick if needed
→ travel
→ land
→ settle
```

For pointers:
no lift needed; direct travel is preferred.

For data values:
use line/arc based on semantic source and target.

---

## POINTER_MOVE

Meaning:
Algorithm pointer/index ownership changes.

Order:
```text
comparison/decision
→ pointer moves
→ destination focus settles
```

Default:
SHORT.

Do not animate array data just because pointer moved.

---

## SWAP

Meaning:
Two values exchange slots.

Canonical order:
```text
comparison/decision locks
→ short hold
→ both values lift
→ separate crossing paths
→ values land
→ slot states settle
→ pointer(s) move only if algorithm says so
```

Rules:
- slots remain fixed
- values move
- two values must remain visually distinguishable
- avoid teleport
- avoid same path collision

Default:
HEAVY, audio permitting.

---

## INSERT

Meaning:
Object enters a structure/container.

Order:
```text
source ownership visible
→ path to destination
→ destination accepts
→ source ownership resolves
```

Use Bezier/curved travel when source→container relation matters.

---

## REMOVE

Meaning:
Object leaves structure/current state.

Order:
```text
reason
→ detach/unown
→ move/fade away
→ remaining structure settles
```

Never fade a linked/connected object before showing detachment if the edge matters.

---

## PUSH

Stack semantics:
```text
incoming item
→ top opening/focus
→ item enters
→ previous top demotes
→ new TOP resolves
```

---

## POP

Stack semantics:
```text
top focus
→ detach
→ item exits
→ next item becomes TOP
```

---

## ENQUEUE

Queue semantics:
```text
rear focus
→ item enters rear
→ rear ownership updates
```

---

## DEQUEUE

Queue semantics:
```text
front focus
→ item exits front
→ remaining queue settles
→ front ownership updates
```

---

## EXPAND

Meaning:
Active range/window grows.

Order:
```text
condition
→ boundary moves
→ new region becomes active
→ state updates
```

---

## SHRINK

Meaning:
Active range/window contracts.

Order:
```text
violation/reason
→ outgoing element resolves
→ boundary moves
→ valid state settles
```

---

## MERGE

Meaning:
Two identities/states combine into one semantic object.

Phase 4 defines timing order only.

Detailed path/topology morph rules belong to Phase 5.

Order:
```text
both sources visible
→ relationship established
→ convergence
→ target ownership
→ source residue clears
```

---

## SPLIT

Meaning:
One semantic object creates multiple states/branches.

Order:
```text
source focus
→ decision
→ branches separate
→ branch labels/states resolve
```

---

## OWN

Meaning:
Responsibility/ownership changes.

Examples:
- current pointer owns index
- top owns stack node
- parent owns child relation
- DP state becomes computed

Order:
```text
old owner dims/releases
→ transfer cue
→ new owner focuses
```

---

## COUNT_UPDATE

Meaning:
A numeric accumulator changes.

Preferred current primitive:
`CountUp`.

Order:
```text
causing event completes
→ count rolls
→ count settles
```

Counter must not update before the event causing it.

---

## DRAW_RELATION

Meaning:
Show a relationship/edge/range.

Preferred:
- `RoughLine`
- `RoughCurve`

Order:
```text
source focus
→ line draws source→target
→ target reacts
```

---

## ERASE_RELATION

Meaning:
Relationship is no longer valid.

Phase 6 will define SVG erasure mechanics.

Until then:
- fade/retract only through existing supported behavior
- do not invent per-scene path hacks

---

## COMPLETE

Meaning:
A major result/invariant is now established.

Order:
```text
final causal action
→ result state
→ hero settle
→ quiet hold
```

Use `SPRING.hero` only for truly major moments.

No confetti.
No random celebration.

---

## TRANSITION

Meaning:
Teaching mode changes.

Priority order:

```text
1. semantic continuity / object-preserving handoff
2. in-scene recede + rise
3. overlay at a cut if useful
4. timeline-overlapping TransitionSeries transition only when exact audio duration is explicitly reconciled
```

Generic slide/wipe is not the default course language.

---

# 8. Existing component roles

## `BezierFlight`

Use for:
- source→container transfer
- membership query
- object traveling across meaningful distance

Do not use for:
- pointer moves
- every normal entrance

Trail:
- off by default
- use only when travel path itself is pedagogically important

---

## `RoughLine`

Use for:
- relation
- pointer arrow
- underline
- strike
- comparison bridge

Default 18f is a valid baseline.

---

## `RoughCurve`

Use for:
- sequence path
- relationship path
- conceptual connection that is not a straight edge

Current 30f baseline is valid.

---

## `RoughBox`

Use for:
- current object emphasis
- accepted region
- temporary structure boundary

Do not redraw every card every beat.

---

## `ChalkDust`

Use:
- at most one burst per semantic beat
- only for physical landing/major chalk impact

Not:
- every correct answer
- decorative background particles

Current life 18f is the baseline.

---

## `Shatter`

Use only when:
- assumption breaks
- attempted relation fails physically
- “this approach breaks here” is the concept

Not for normal miss/skip.

---

## `ShineFill`

Use for:
- progress/convergence/stat bars

Not for:
- generic emphasis
- algorithm pointer motion

---

## `CountUp`

Use for:
- length
- count
- frequency
- answer accumulator

Update only after the causal event.

---

# 9. Entrance rules

Objects should enter according to where they come from.

## If object has no semantic source
Use:
- write
- fade
- rise
- draw

## If object comes from another object/container
Use:
- MOVE / INSERT / morph handoff

## If object was already present but becomes relevant
Use:
- FOCUS

Do not fly UI from arbitrary screen edges.

---

# 10. Exit rules

Prefer:
- dim
- recede
- erase
- semantic move into next representation

Avoid:
- arbitrary fly-out
- random scale-to-zero
- destructive disappear before learner knows why

---

# 11. Hold rules

After any of the following, preserve a comprehension hold if audio permits:

- first presentation of new invariant
- hit/miss result that changes branch
- completed swap
- major merge
- final answer
- complexity conclusion

The hold may be only several frames or a full narrated pause.

Do not fill the hold with decorative motion.

---

# 12. Motion and semantic color

Motion state and color state must agree.

Examples:

```text
QUERY   → theme.cyan
FOCUS   → theme.pivot
HIT     → theme.good
MISS    → theme.warn
history → theme.chalkDim / approved secondary token
```

Color should not change before the state is logically known.

---

# 13. Audio causality rules

If narration says:

> “because two belongs on the right…”

Then:
1. `2` / right-region decision appears,
2. learner gets a small hold,
3. only then swap/move begins.

If narration says:

> “predecessor exists…”

Then:
1. predecessor query resolves YES,
2. only then candidate becomes SKIP,
3. no runner launches.

Motion must never visually answer the question before narration/trace allows it.

---

# 14. Repetition grammar

Repeated algorithm work should reuse the same motion grammar.

Example:
every HashSet lookup should not have a new cinematic effect.

Repetition should teach pattern recognition.

Allowed variation:
- faster later repetitions
- reduced annotation after first full demonstration

Not allowed:
- different semantics for the same operation

---

# 15. First-time vs repeated operation

## First occurrence
Use full grammar:
```text
cause
→ relation
→ reaction
→ hold
→ movement
→ settle
```

## Repeated occurrence
May compress to:
```text
cause
→ reaction
→ movement
```

Only after learner has already seen the full meaning.

Do not skip algorithm state.

---

# 16. Motion density budget

At any frame, ask:

```text
What is the ONE thing the learner should notice?
```

If answer contains three unrelated items, motion density is too high.

Persistent ambient motion:
- generally none
- tiny deterministic board/chalk texture only if already part of existing design

No decorative floating particles.

---

# 17. Camera rule

This course is a board-based instructional system.

Default camera:
```text
LOCKED
```

Allowed:
- tiny stage-scale/recede during major transition
- controlled crop/zoom only if necessary to read a structure

Not allowed:
- constant zoom
- pan for energy
- parallax for decoration
- cinematic camera movement that hides algorithm geometry

---

# 18. Scene-transition rule for exact-audio production

Because Phase 3 makes exact audio duration authoritative:

## Default
Content-derived in-scene transition.

## `TransitionSeries.Overlay`
Allowed if:
- package already exists / is intentionally added
- visual overlay helps
- audio timing remains unchanged

## `TransitionSeries.Transition`
Only if:
- total duration subtraction is explicitly calculated
- exact audio alignment remains correct
- transition has semantic value

Never introduce timeline overlap casually.

---

# 19. Determinism rule

Allowed:
- fixed data
- fixed seeds
- existing `jitter(seed)`
- official Remotion `random(seed)` if implementation genuinely needs it

Forbidden:
- `Math.random()`
- `Date.now()`
- true random seeds
- render-time layout variability

---

# 20. Motion anti-patterns

Never:

- move before cause
- color result before result exists
- animate pointer and swap simultaneously unless algorithm truly does
- use bounce on every object
- use `SPRING.hero` for normal state
- use red for normal skip/history
- scan HashSet nodes visually for direct membership
- morph unrelated identities
- use Shatter as generic “wrong”
- use dust as confetti
- use generic slide/wipe between every scene
- hide algorithm mutation behind title animation
- let captions compete with motion
- use auto-layout reflow as animation
- create a unique easing per scene

---

# 21. Motion QA questions

For every major motion:

1. What algorithmic cause triggered it?
2. Which trace step proves that cause?
3. Is the state reaction visible before movement?
4. Does the object preserve identity?
5. Is the motion mechanic appropriate for that semantic action?
6. Does it finish inside the exact audio window?
7. Does it settle before the next primary action?
8. Could a still hold teach better?
9. Is the same operation animated consistently elsewhere?
10. Did we add motion only because the frame looked empty?

If question 10 is yes, remove the motion.
