# Code With Animation — Word-Driven Motion Skill

This compact project authority mirrors the locked rules in `SKILL.md`.

## Core Law

```text
NARRATION WORD / PHRASE
→ SHOW ONLY WHAT IS NEEDED NOW
→ MAIN IDEA OWNS CENTER STAGE
→ MOTION TEACHES STATE / CAUSE-EFFECT / ATTENTION / CONTINUITY
→ SETTLE
→ REMOVE / REDUCE WHEN JOB IS DONE
→ NEXT IDEA
```

## Motion may exist only to

1. teach algorithm state
2. show cause → effect
3. direct attention
4. preserve semantic continuity during transition

If it does none of these: do not animate it.

## Code

```text
future lines hidden
active line types character-by-character on exact narration timing
active line = center-stage hero
line completes
semantic effect is shown
old content reduces when no longer needed
next line appears only when spoken
```

No spoiler. No full code dump. No guessed typing timing.

## Screen

Default:

```text
1 hero teaching object
+ 1 support object
+ captions
```

Do not pack the board with all information at once.

## Visual lifecycle

Every planned object must define:

```text
ENTER
ACTIVE JOB
CAUSE / EFFECT
SETTLE
EXIT / REDUCE
PERSIST ONLY IF NEEDED
```

## No guessing

No guessed timing, frames, coordinates, component APIs, algorithm states, pointer states, or region geometry.

## Future word-based plan beat template

```text
ANCHOR / SPOKEN PHRASE
WHAT APPEARS NOW
CENTER-STAGE HERO
CAUSE
EFFECT / MOTION
WHAT MUST NOT APPEAR YET
COMPREHENSION HOLD
CLEANUP / EXIT
PERSISTENT STATE
```

## Permanent quality rule

No AI slop. No generic dashboard. No decorative motion. No future-state spoiler. No motion without semantic purpose.


## Locked Code-Scene Teaching Rule

Code scenes must feel like a real coder/teacher constructing the solution live.

```text
narration reaches idea
→ active line appears at center
→ characters type one-by-one
→ line completes
→ teacher explains what that line means
→ semantic effect is shown using the real DSA kit
→ effect settles
→ old code reduces/dims
→ next line appears only when narration reaches it
```

Rules:

- Future code lines do not exist visually yet.
- The complete solution must never be dumped on screen at the beginning.
- Character typing is deterministic and driven by the exact word-sync window.
- The active line is the center-stage hero.
- A cursor may exist only on the active line.
- Previously typed lines stay only when the current line depends on them.
- When narration explains a line's effect, the algorithm visual may temporarily take center stage; then it recedes and code returns.
- Code typing must feel like a coder writing and reasoning, not a presentation slide revealing text.
- No fake black IDE. Reuse the existing course code component.
- No spoiler branch, return statement, pointer update, or condition before its narration anchor.

## Locked Complexity-Explanation Rule

Complexity must be taught visually when narration reaches the complexity explanation.

Do not show Big-O as a static badge only.

Preferred flow:

```text
teacher says "O(n)"
→ O(n) appears
→ curve/graph becomes center stage
→ curve draws left-to-right
→ algorithm-specific reason is shown
→ graph settles
→ graph leaves/reduces when explanation is finished
```

For complexity comparisons:

```text
current approach curve = active
previous approach curve = dim
new approach curve appears only when narration reaches it
```

Use curve graphs to explain growth where they materially teach the Big-O.

Examples:

- O(1): flat line
- O(n): linear line
- O(n log n): n log n growth curve
- O(n²): quadratic curve
- O(2^n): exponential curve

Important:

- Curves represent mathematical growth classes, not measured benchmark data.
- Do not invent performance numbers.
- If showing operation counts, they must be mathematically derived from the verified algorithm or clearly labeled as illustrative.
- Never claim an exact operation count unless the verified trace or formula supports it.
- The graph appears only when the narration starts discussing complexity.
- Remove/reduce it after the complexity explanation is complete.
- Do not keep complexity graphs permanently beside code/array.
- Use existing course graph/curve primitives if available; inspect the kit first.
- If the kit has no suitable reusable graph primitive, EXTEND/CREATE a reusable kit-level complexity graph primitive, not a scene-local generic chart.

## Complexity Must Explain "Why"

For every Big-O statement, the visual plan must connect the notation to algorithm behavior.

Examples:

```text
O(n)
→ one boundary shrinks by one per iteration
→ at most n iterations
→ linear curve
```

```text
O(n²)
→ nested work
→ roughly n × n growth
→ quadratic curve
```

```text
O(n log n)
→ log levels
× n work across levels
→ n log n curve
```

Never show:

```text
O(n)
```

without a visual reason if the narration itself explains why.

## Code + Complexity Lifecycle

Do not pack code, array, invariant, and complexity graph together.

Preferred handoff:

```text
code explanation finishes
→ code reduces
→ complexity graph comes center
→ graph teaches growth
→ graph exits/reduces
→ next teaching object takes center
```

## Future Word-Based Planning Requirement

For every CODE beat, explicitly include:

```text
ACTIVE CODE TEXT TO TYPE
CHARACTER-TYPING TRIGGER
WHAT LINE MEANS
SEMANTIC EFFECT VISUAL
WHAT FUTURE CODE MUST STAY HIDDEN
WHEN THIS LINE REDUCES / EXITS
```

For every COMPLEXITY beat, explicitly include:

```text
BIG-O PHRASE
WHY THIS BIG-O IS TRUE
CURVE TYPE
WHAT CAUSES THE CURVE
WHAT MUST NOT APPEAR YET
WHEN GRAPH EXITS / REDUCES
```
