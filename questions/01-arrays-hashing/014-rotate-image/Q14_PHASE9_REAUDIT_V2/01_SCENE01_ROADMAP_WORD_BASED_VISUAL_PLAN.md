# Q14 — Rotate Image (LeetCode 48)
# Phase 9 · Scene 01 — Roadmap Resume + Q14 Activation
## WORD-BASED VISUAL PLAN — NO GUESSED TIME / NO GUESSED FRAMES

**Scene purpose:** Resume Q13 roadmap state, activate Q14 only when spoken, and hand off into the problem without revealing the matrix or solution.

---

# 0. SOURCE PRIORITY

1. verified Q14 Phase-8 narration;
2. locked Q14 Phase-5 teaching trace;
3. previous scene approved continuity state;
4. `DSA_MASTER_PRODUCTION_SKILL_V3.md`;
5. Matrix/Grid kit grammar;
6. actual `@dsa/kit` / production source at implementation time;
7. final scene MP3;
8. final exact word-sync JSON.

If an API, geometry, or state is not supported by source:

```text
UNRESOLVED — SOURCE REQUIRED
```

---


## V2 PROJECT-SOURCE LOCK — NO GUESS

This plan is governed by the actual project sources, not generic animation assumptions.

Verified sources for Q14:

```text
SKILL.md
DSA_MASTER_PRODUCTION_SKILL_V3.md
REFERENCE_MATRIX_GRID_KIT_RULES.md
REFERENCE_MATRIX_GRID_VISUAL_GRAMMAR.md
RoughBox.tsx
ChalkText.tsx
RoughLine.tsx
RoughCurve.tsx
BezierFlight.tsx
Captions.tsx
audioSync.ts
motion.ts
MiniGraph.tsx
```

Verified Rotate Image grammar:

```text
CELL POSITION stays fixed
VALUE moves
(r,c) → (c,n-1-r)
```

Verified primitive mapping:

```text
MATRIX CELL      → RoughBox
ROW/COLUMN LABEL → ChalkText
CURRENT          → theme.pivot
QUERY            → theme.cyan
CONFIRMED        → theme.good
BLOCKED          → theme.warn + second visual cue
VALUE MOVEMENT   → BezierFlight
```

`MiniGraph.tsx` is sort-specific and must not be used as a fake generic Q14 complexity graph.

Thin wrappers such as `MatrixGrid` are allowed by the grammar, but the actual wrapper API must be inspected in the repo before implementation.

```text
NO INVENTED MatrixGrid PROPS
NO INVENTED ROADMAP PROPS
NO INVENTED CODE-EDITOR PROPS
```

## V2 NARRATION-COVERAGE RULE

An explicit anchor authorizes a semantic visual change.

Any spoken words between two explicit anchors inherit the prior `PERSISTENT STATE` and trigger:

```text
NO NEW VISUAL STATE
NO NEW MOTION
CAPTIONS MAY CONTINUE
```

If an unanchored phrase actually changes algorithm state, repair the plan before implementation.

## V2 SYNC-CRITICAL KIT TIMING RULE

Actual kit source was inspected.

`audioSync.ts` currently resolves frames with:

```text
Math.round(word.start * 30)
Math.round(word.end   * 30)
```

For Q14, actual repo/helper semantics win over older generic floor/ceil language.

Verified component timing fields/defaults:

```text
RoughBox    durationInFrames default exists
RoughLine   durationInFrames default exists
RoughCurve  durationInFrames default exists
ChalkText   charFrames default exists
BezierFlight requires explicit start + dur
```

For narration-synced actions:

```text
DO NOT use component defaults as timing authority.
```

Resolve the exact anchor window first and explicitly supply timing from that window, or use an existing motion token constrained to that exact available window.

For narration-synced ChalkText writing:

```text
startFrame = exact resolved anchor start
charFrames = exact writable frame window / text length
```

or render the text as a stable label if no writing animation is semantically required.

Captions use final exact sync words directly.


---

# 1. CONTINUITY IN

Start: Q13 COMPLETE, global 13/227, Q14 UP NEXT, rail focus 014. Do not replay completion.

---

# 2. EXACT VERIFIED NARRATION

```text
Welcome back to Code With Animation...

We are continuing our Arrays and Hashing roadmap.

Question thirteen...
Set Matrix Zeroes...
is complete.

Our global progress is now thirteen out of two hundred twenty-seven.

And the next problem is...

Question fourteen...

Rotate Image...

LeetCode forty-eight...

Medium.

This problem is about rotating a square matrix...

ninety degrees clockwise...

in place.

Before we think about code...

we first need to understand exactly where every value should move.
```

Only this spoken order authorizes reveals.

---

# 3. LOCKED SCENE TRUTH

Q14 becomes ACTIVE but not COMPLETE. Only problem metadata spoken here is allowed; no master matrix, mapping, methods, 14/227, or Q15.

---

# 4. WORD-DRIVEN LAW

```text
SCRIPT WORDS
→ VERIFIED ALGORITHM TRUTH
→ ACTUAL KIT / REPO SOURCE
→ SHOW ONLY WHAT NARRATION ALLOWS
→ TEACH
→ REMOVE / REDUCE
→ NEXT WORD
```

Default: `1 PRIMARY HERO + 1 DIRECT SUPPORT OBJECT + captions`.

---

# 5. KIT / FOUNDATION LOCK

Use the existing permanent roadmap UI and actual roadmap data. Do not rebuild sidebar, progress pill, problem card, or rail.

```text
ROADMAP COMPONENT/API — UNRESOLVED — REPO SOURCE REQUIRED
```

Use ChalkText for problem-language handoff after roadmap chrome reduces.

---

# 6. SCENE-SPECIFIC RULES

Q14 activates only on `Question fourteen`. Global remains 13/227. No concrete grid, no decorative spinning matrix, no solution preview.

---

# 7. SEMANTIC ANCHOR MANIFEST

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S01_WELCOME` | `Welcome back to Code With Animation` | Permanent roadmap UI. |
| `S01_PATTERN` | `We are continuing our Arrays and Hashing roadmap.` | Pattern 01 context. |
| `S01_Q13` | `Question thirteen` | Q13 item. |
| `S01_COMPLETE` | `is complete.` | Q13 COMPLETE marker. |
| `S01_GLOBAL` | `Our global progress is now thirteen out of two hundred twenty-seven.` | Global progress 13/227. |
| `S01_NEXT` | `And the next problem is` | Q14 UP NEXT. |
| `S01_Q14` | `Question fourteen` | Q14 ACTIVE. |
| `S01_TITLE` | `Rotate Image` | ROTATE IMAGE. |
| `S01_LC` | `LeetCode forty-eight` | Q14 identity. |
| `S01_MEDIUM` | `Medium.` | Q14 identity. |
| `S01_SQUARE` | `This problem is about rotating a square matrix` | Problem structure concept. |
| `S01_CLOCKWISE` | `ninety degrees clockwise` | 90° CLOCKWISE. |
| `S01_INPLACE` | `in place.` | IN PLACE. |
| `S01_BEFORE` | `Before we think about code` | Problem-understanding handoff. |
| `S01_WHERE` | `we first need to understand exactly where every value should move.` | Destination question. |

---

# 8. WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S01_WELCOME`

### ANCHOR / SPOKEN PHRASE
> Welcome back to Code With Animation

### WHAT APPEARS NOW
Resume permanent roadmap exactly from Q13 final state; no entrance reset.

### CENTER-STAGE HERO
Permanent roadmap UI.

### CAUSE
Narration resumes course.

### EFFECT / MOTION
Only attention returns; no state change.

### WHAT MUST NOT APPEAR YET
Q14 activation, matrix, mapping.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep roadmap stable.

### PERSISTENT STATE
Q13 complete; Q14 up next; global 13/227.

### KIT / EXISTING SYSTEM
Use the existing permanent roadmap UI and actual roadmap data. Do not rebuild sidebar, progress pill, problem card, or rail.

```text
ROADMAP COMPONENT/API — UNRESOLVED — REPO SOURCE REQUIRED
```

### MOTION PURPOSE
Continuity.
## BEAT 02 — `S01_PATTERN`

### ANCHOR / SPOKEN PHRASE
> We are continuing our Arrays and Hashing roadmap.

### WHAT APPEARS NOW
Focus the existing Arrays & Hashing pattern.

### CENTER-STAGE HERO
Pattern 01 context.

### CAUSE
Narration names pattern.

### EFFECT / MOTION
Other roadmap chrome recedes.

### WHAT MUST NOT APPEAR YET
No matrix or methods.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep pattern context.

### PERSISTENT STATE
Roadmap unchanged.

### KIT / EXISTING SYSTEM
Use the existing permanent roadmap UI and actual roadmap data. Do not rebuild sidebar, progress pill, problem card, or rail.

```text
ROADMAP COMPONENT/API — UNRESOLVED — REPO SOURCE REQUIRED
```

### MOTION PURPOSE
Direct attention.
## BEAT 03 — `S01_Q13`

### ANCHOR / SPOKEN PHRASE
> Question thirteen

### WHAT APPEARS NOW
Focus Q13 only.

### CENTER-STAGE HERO
Q13 item.

### CAUSE
Narration references previous question.

### EFFECT / MOTION
No completion replay.

### WHAT MUST NOT APPEAR YET
No progress increment.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep Q13 complete state.

### PERSISTENT STATE
Q13 COMPLETE.

### KIT / EXISTING SYSTEM
Use the existing permanent roadmap UI and actual roadmap data. Do not rebuild sidebar, progress pill, problem card, or rail.

```text
ROADMAP COMPONENT/API — UNRESOLVED — REPO SOURCE REQUIRED
```

### MOTION PURPOSE
Continuity.
## BEAT 04 — `S01_COMPLETE`

### ANCHOR / SPOKEN PHRASE
> is complete.

### WHAT APPEARS NOW
Confirm the already-existing COMPLETE state.

### CENTER-STAGE HERO
Q13 COMPLETE marker.

### CAUSE
Narration confirms status.

### EFFECT / MOTION
Static confirmation only.

### WHAT MUST NOT APPEAR YET
No Q14 activation yet.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Return focus to progress.

### PERSISTENT STATE
Q13 remains complete.

### KIT / EXISTING SYSTEM
Use the existing permanent roadmap UI and actual roadmap data. Do not rebuild sidebar, progress pill, problem card, or rail.

```text
ROADMAP COMPONENT/API — UNRESOLVED — REPO SOURCE REQUIRED
```

### MOTION PURPOSE
Confirm prior state.
## BEAT 05 — `S01_GLOBAL`

### ANCHOR / SPOKEN PHRASE
> Our global progress is now thirteen out of two hundred twenty-seven.

### WHAT APPEARS NOW
Focus existing 13/227; do not CountUp.

### CENTER-STAGE HERO
Global progress 13/227.

### CAUSE
Narration gives exact progress.

### EFFECT / MOTION
Attention only.

### WHAT MUST NOT APPEAR YET
14/227.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep value unchanged.

### PERSISTENT STATE
13/227.

### KIT / EXISTING SYSTEM
Use the existing permanent roadmap UI and actual roadmap data. Do not rebuild sidebar, progress pill, problem card, or rail.

```text
ROADMAP COMPONENT/API — UNRESOLVED — REPO SOURCE REQUIRED
```

### MOTION PURPOSE
Direct attention.
## BEAT 06 — `S01_NEXT`

### ANCHOR / SPOKEN PHRASE
> And the next problem is

### WHAT APPEARS NOW
Transfer focus to Q14 UP NEXT.

### CENTER-STAGE HERO
Q14 UP NEXT.

### CAUSE
Narration announces handoff.

### EFFECT / MOTION
Roadmap focus moves to existing next item.

### WHAT MUST NOT APPEAR YET
Activation before Question fourteen.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep Q14 UP NEXT.

### PERSISTENT STATE
Q14 UP NEXT.

### KIT / EXISTING SYSTEM
Use the existing permanent roadmap UI and actual roadmap data. Do not rebuild sidebar, progress pill, problem card, or rail.

```text
ROADMAP COMPONENT/API — UNRESOLVED — REPO SOURCE REQUIRED
```

### MOTION PURPOSE
Semantic continuity.
## BEAT 07 — `S01_Q14`

### ANCHOR / SPOKEN PHRASE
> Question fourteen

### WHAT APPEARS NOW
Q14 changes UP NEXT → ACTIVE.

### CENTER-STAGE HERO
Q14 ACTIVE.

### CAUSE
Narration authorizes activation.

### EFFECT / MOTION
One semantic state change only.

### WHAT MUST NOT APPEAR YET
Completion or progress increment.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep active state.

### PERSISTENT STATE
Q14 ACTIVE; global 13/227.

### KIT / EXISTING SYSTEM
Use the existing permanent roadmap UI and actual roadmap data. Do not rebuild sidebar, progress pill, problem card, or rail.

```text
ROADMAP COMPONENT/API — UNRESOLVED — REPO SOURCE REQUIRED
```

### MOTION PURPOSE
Roadmap state change.
## BEAT 08 — `S01_TITLE`

### ANCHOR / SPOKEN PHRASE
> Rotate Image

### WHAT APPEARS NOW
Problem title becomes dominant; roadmap support reduces.

### CENTER-STAGE HERO
ROTATE IMAGE.

### CAUSE
Narration names problem.

### EFFECT / MOTION
Title centers/expands.

### WHAT MUST NOT APPEAR YET
Matrix values or solution.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep title.

### PERSISTENT STATE
Q14 identity.

### KIT / EXISTING SYSTEM
ChalkText + roadmap support.

### MOTION PURPOSE
Direct attention.
## BEAT 09 — `S01_LC`

### ANCHOR / SPOKEN PHRASE
> LeetCode forty-eight

### WHAT APPEARS NOW
Add LEETCODE 48 secondary metadata.

### CENTER-STAGE HERO
Q14 identity.

### CAUSE
Narration gives metadata.

### EFFECT / MOTION
Small reveal.

### WHAT MUST NOT APPEAR YET
Difficulty before spoken.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Title + LC48.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Metadata.
## BEAT 10 — `S01_MEDIUM`

### ANCHOR / SPOKEN PHRASE
> Medium.

### WHAT APPEARS NOW
Add MEDIUM metadata.

### CENTER-STAGE HERO
Q14 identity.

### CAUSE
Narration gives difficulty.

### EFFECT / MOTION
Small reveal only.

### WHAT MUST NOT APPEAR YET
Any method.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Problem metadata.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Metadata.
## BEAT 11 — `S01_SQUARE`

### ANCHOR / SPOKEN PHRASE
> This problem is about rotating a square matrix

### WHAT APPEARS NOW
Roadmap chrome reduces; show text concept SQUARE MATRIX, not a concrete dataset.

### CENTER-STAGE HERO
Problem structure concept.

### CAUSE
Narration introduces structure.

### EFFECT / MOTION
Problem title hands off to structure label.

### WHAT MUST NOT APPEAR YET
5×5 master matrix.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep concept.

### PERSISTENT STATE
Square matrix known.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Prepare lesson.
## BEAT 12 — `S01_CLOCKWISE`

### ANCHOR / SPOKEN PHRASE
> ninety degrees clockwise

### WHAT APPEARS NOW
Add restrained 90° CLOCKWISE cue with a simple curved chalk direction relation.

### CENTER-STAGE HERO
90° CLOCKWISE.

### CAUSE
Narration names direction.

### EFFECT / MOTION
No decorative grid spin.

### WHAT MUST NOT APPEAR YET
Final rotated state.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep through in-place.

### PERSISTENT STATE
Direction known.

### KIT / EXISTING SYSTEM
RoughCurve/RoughLine + ChalkText.

### MOTION PURPOSE
Teach direction.
## BEAT 13 — `S01_INPLACE`

### ANCHOR / SPOKEN PHRASE
> in place.

### WHAT APPEARS NOW
Add IN PLACE constraint as pivot focus.

### CENTER-STAGE HERO
IN PLACE.

### CAUSE
Narration names constraint.

### EFFECT / MOTION
No method details.

### WHAT MUST NOT APPEAR YET
Extra matrix discussion.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Reduce direction cue after hold.

### PERSISTENT STATE
Constraint known.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Constraint.
## BEAT 14 — `S01_BEFORE`

### ANCHOR / SPOKEN PHRASE
> Before we think about code

### WHAT APPEARS NOW
Code imagery remains absent; metadata reduces.

### CENTER-STAGE HERO
Problem-understanding handoff.

### CAUSE
Narration postpones code.

### EFFECT / MOTION
No new object.

### WHAT MUST NOT APPEAR YET
Code editor.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Prepare next phrase.

### PERSISTENT STATE
Only problem identity remains.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
No-spoiler continuity.
## BEAT 15 — `S01_WHERE`

### ANCHOR / SPOKEN PHRASE
> we first need to understand exactly where every value should move.

### WHAT APPEARS NOW
Center one question: WHERE DOES EACH VALUE GO?

### CENTER-STAGE HERO
Destination question.

### CAUSE
Narration defines learning goal.

### EFFECT / MOTION
Roadmap/problem metadata recedes.

### WHAT MUST NOT APPEAR YET
Mapping formula or values.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
End on question.

### PERSISTENT STATE
Scene02 starts from clean teaching stage.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Set objective.


---

# 9. CONTINUITY OUT

Scene02: Q14 ACTIVE; global 13/227; question is where each value moves; master matrix and mapping still hidden.

---

# 10. ANTIGRAVITY POST-AUDIO CONVERSION

After final MP3 + exact word-sync JSON:

```text
anchor phrase
→ unique contiguous word IDs
→ exact seconds
→ startFrame = floor(start × 30)
→ endFrameExclusive = max(startFrame+1, ceil(end × 30))
→ SceneXX_FRAME_PLAN.md
```

Frame convention: `[startFrame,endFrameExclusive)`.
Antigravity resolves WHEN, not WHAT/WHY/ORDER/STATE.
No hold unless the audio contains a real gap. No approximate seconds or arbitrary frame offsets. `UNMATCHED ANCHORS = 0` before implementation.

---

# 11. IMPLEMENTATION GATE

Read actual repository component APIs before implementation. If required source is absent: `BLOCKED — SOURCE REQUIRED`.
