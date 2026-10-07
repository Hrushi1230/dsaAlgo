# Code With Animation — DSA Production Rules V2

> Repository-wide operating contract for the long-form DSA course.
> This file is intentionally short. Detailed behavior lives in routed skills.

## 1. Project boundary

This repository is for the **long-form Code With Animation DSA course**.

**Shorts are NOT part of this project.**
Do not create:
- Shorts scenes
- Shorts design systems
- Shorts folders
- Shorts skills
- Shorts SEO artifacts

unless the repository scope is explicitly changed later.

---

## 2. Permanent production pipeline

For every roadmap problem, use this exact order:

```text
ROADMAP
→ CODEBASE AUDIT
→ PROBLEM RESEARCH
→ APPROACH SELECTION
→ MASTER TESTCASE
→ ACTUAL DRY RUN
→ INDEPENDENT DRY-RUN RECHECK
→ VERIFIED TRACE
→ TEACHING ARCHITECTURE
→ SCRIPT
→ SCRIPT VERIFICATION
→ MP3
→ EXACT WORD-SYNC JSON
→ FRAME-WISE SCENE PLAN
→ REUSE / EXTEND / CREATE DELTA
→ ANTIGRAVITY IMPLEMENTATION
→ CRITICAL-FRAME REVIEW
→ ALGORITHM QA
→ DESIGN QA
→ MOTION QA
→ FINAL RENDER
→ SEO
→ ROADMAP UPDATE
```

Do not silently skip a stage.

---

## 3. Absolute no-guess rule

Never invent:
- the next roadmap problem
- algorithm behavior
- iteration order
- pointer values
- intermediate states
- swaps
- lookup results
- complexity
- component existence
- asset existence
- audio timing
- frame timing
- theme colors
- typography
- repository paths

When a required fact is not verified, stop that stage and inspect the authoritative source.

---

## 4. Source-of-truth hierarchy

### Algorithm truth
1. exact problem statement / constraints
2. selected implementation
3. exact testcase
4. verified dry-run trace

If narration or animation disagrees with the verified trace, narration/animation is wrong.

### Audio timing truth
1. final approved script
2. rendered MP3
3. exact word-sync JSON
4. scene plan

Do not create the final timed scene plan before exact sync data exists.

### Visual truth
1. current `@dsa/kit` / shared project theme
2. canonical Design Bible
3. canonical Motion Bible
4. canonical Morphing Bible
5. canonical SVG Animation Bible
6. relevant Data Structure Visual Grammar

Skills do not invent a second palette.

### Repository truth
Actual files and imports in the repository beat remembered filenames or chat history.

---

## 5. Responsibility split

### ChatGPT / planning side owns
- roadmap lookup
- problem research
- approach selection
- testcase design
- complete dry runs
- dry-run verification
- teaching architecture
- script
- script verification
- sync interpretation
- word/phrase-to-frame planning
- frame-wise scene plans
- motion/morph/SVG choreography specification
- REUSE / EXTEND / CREATE decisions
- implementation handoff
- review of renders/stills
- algorithm/design/motion QA
- SEO

### Antigravity owns
- all repository code edits
- component implementation
- refactors
- SVG source implementation
- Remotion scenes/compositions
- typecheck/lint/build fixes
- render generation
- validators/tools
- commits

Do not make Antigravity invent teaching logic that should have been defined in the plan.

---

## 6. Mandatory skill routing

Use the relevant skill before producing each artifact:

- overall stage control → `dsa-production`
- existing-code inspection → `dsa-codebase-audit`
- problem/approach/testcase analysis → `dsa-problem-analysis`
- exact algorithm execution → `dsa-dry-run`
- narration → `dsa-scriptwriting`
- MP3/sync interpretation → `dsa-audio-sync`
- timed visual choreography → `dsa-scene-planning`
- motion choreography / semantic motion → `dsa-motion-design`
- morph / identity transformation design → `dsa-morph-design`
- SVG path animation / draw / erase / trace / arrowhead → `dsa-svg-animation`
- implementation specification → `dsa-antigravity-handoff`
- result review → `dsa-review-qa`

---

## 7. Dry-run-first gate

No algorithm narration may be written until:

```text
algorithm
→ complete dry run
→ independent re-run
→ exact match
→ VERIFIED
```

Every spoken algorithmic claim must be supported by the verified trace.

---

## 8. Audio-first timing gate

The pipeline stays:

```text
SCRIPT
→ MP3
→ EXACT WORD SYNC
→ FRAME PLAN
```

No provisional or guessed word timing is accepted as the final scene plan.

If only MP3 is available but exact word timestamps are not available, do not guess them.

---

## 9. Frame-plan gate

A final scene plan must be implementation-ready.

It must define:
- exact total frames
- exact frame ranges
- spoken phrase/word anchor
- trace step IDs
- visible state before action
- cause/decision
- motion
- state after action
- persistence/cleanup
- transition
- REUSE / EXTEND / CREATE

“Animate this nicely” is invalid.

---

## 10. Remotion determinism

Production animations must be frame-derived and deterministic.

Do not introduce:
- `Math.random()` for render state
- `Date.now()` for render state
- CSS `transition`
- CSS `animation`
- CSS `@keyframes`
- timing based on wall-clock state

Reuse existing deterministic project helpers first.

---

## 11. Design consistency rule

Different data structures may have different visual behavior.

They must not have different course identities.

The following remain globally consistent unless the Design Bible explicitly changes them:
- board identity
- typography
- semantic colors
- caption treatment
- spacing hierarchy
- line/stroke character
- transition personality
- code presentation
- title system

---

## 12. Motion meaning rule

Motion must do at least one of these:
1. teach algorithm state
2. show cause → effect
3. direct attention
4. preserve semantic continuity during transition

If motion does none of these, remove it.

---

## 13. Reuse rule

Before requesting a new shared component, inspect the codebase.

Every implementation handoff must classify required pieces as:

```text
REUSE
EXTEND
CREATE
DO NOT TOUCH
```

Never invent existing filenames.

---

## 14. Completion rule

A scene is not complete because it compiles.

Approval requires:
- algorithm state matches verified trace
- exact audio timing is respected
- critical frames reviewed
- design consistency passes
- motion causality passes
- transitions pass
- no new unsupported visual language
- build/typecheck/required validators pass

---

## 15. Current course roadmap

The uploaded 227-problem roadmap is authoritative for question order.

Current state:
- #010 Longest Consecutive Sequence — complete/regression reference
- #011 Sort Colors (LC 75) — complete
- #012 Next Permutation (LC 31) — complete (all 10 scenes & master video assembled)
- #013 Set Matrix Zeroes (LC 73) — implementation complete (all 13 scenes coded in Remotion; master video render pending)
- #014 Rotate Image (LC 48) — complete (all 13 scenes coded & master 2K video rendered)
- #015 Spiral Matrix (LC 54) — next production problem

Do not infer a different next problem.

---

## 16. Center-stage spatial composition & zero-collision invariants

Every scene must obey the course visual layout laws:

### Vertical canvas distribution
- Never cram all visual elements into the top 30-40% of the 1080p canvas while leaving a massive empty green void below.
- The visual hierarchy must be harmoniously distributed across the center vertical zone (Y: 130 to Y: 750), with balanced breathing room above and 250-320px of breathing room above bottom captions (Y: 980).

### Zero-collision law
- **Array Track Top Clearance**: Track title headers placed above `ArrayTrackV2` must have `marginBottom >= 44px` whenever top partition brackets are present (which sit at `top: -34px`).
- **Array Track Bottom Clearance**: Any card container or callout box placed below `ArrayTrackV2` must start with at least `50px to 60px` vertical clearance below the bottom-most element of the track (indices or pointer labels). A card border must NEVER cut through slot index labels (`idx [0] .. idx [9]`) or pointer arrows.
- **Bounding Box Alignment**: Card widths must harmonize with the array track width (e.g. 1244px bounding box for a 10-slot array).

### Mandatory framewise anchor plan schema
Every scene plan must document every single anchor using the 9 mandatory sections:
```text
ANCHOR:
WHAT APPEARS NOW:
CENTER-STAGE HERO:
CAUSE:
EFFECT / MOTION:
WHAT MUST NOT APPEAR YET:
COMPREHENSION HOLD:
CLEANUP / EXIT:
PERSISTENT STATE:
```
No anchor or frame range may be skipped or guessed.

---

## 17. Production video rendering rules (2K & 4K scaling)

All course visual scenes are authored in a **1920 × 1080** pixel coordinate space.

### The Zero-Void Scaling Law
- **NEVER** use `--width` or `--height` CLI flags to upscale renders (e.g. `--width=2560 --height=1440` is strictly FORBIDDEN). Doing so expands the browser viewport without scaling the React layout, boxing the 1080p UI into the top-left and leaving a massive 640px empty right void and 360px bottom void.
- **ALWAYS** use the `--scale` CLI flag for high-resolution video exports:
  - **2K (2560 × 1440 / 1440p QHD)**: `--scale=1.3333333333333333`
  - **4K (3840 × 2160 / 2160p UHD)**: `--scale=2`
  - **1080p (1920 × 1080 / Full HD)**: default (omit or `--scale=1`)

### Standard Production Render Command
```bash
# 1. Ensure build is fresh
npm run build

# 2. Render master video at 2K with 12 concurrency
npx remotion render build <CompId> <out.mp4> --scale=1.3333333333333333 --concurrency=12 --gl=angle --overwrite
```
- Always pass `--gl=angle` for Chromium GPU hardware acceleration on Windows.
- Always use `--concurrency=12` for parallel worker throughput.


