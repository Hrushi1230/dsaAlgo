# Q17 — Scene 01: Roadmap Resume + Q17 Activation

**PRE-AUDIO semantic word animation plan — V3.2 board-native overlay**  
**Stage:** Gate A only. Final ElevenLabs MP3 / validated exact word-sync JSON not supplied; no seconds, guessed frames, or stable Wxxxx IDs.

## Scene contract

```text
SCENE: 01
QUESTION: Q17 Encode and Decode Strings · LC271
BEAT TYPE: ROADMAP + SHORT ACTIVATION (NON-TRACE)
SCRIPT SOURCE: Q17_Encode_Decode_Strings_Final_ElevenLabs_Narration.md
TRACE SOURCE: N/A — no algorithm executes
AUDIO FILE: PENDING FINAL MP3
SYNC FILE: PENDING VALIDATED EXACT WORD SYNC
FPS: PENDING SYNC
TOTAL FRAMES: PENDING SYNC
PEDAGOGICAL GOAL: Q16 done → Q17 active → abstract list/one-string/reconstruction goal
TRACE STEP IDS: N/A
DATA STRUCTURE: curriculum roadmap and abstract string-list schematic only
PRIMARY HERO: MasterRoadmapV2, handed off once to simple board-native goal schematic
SUPPORT LEFT: N/A
SUPPORT RIGHT: N/A
REUSE: MasterRoadmapV2, theme.ts, RoughLine, Captions (post-sync)
EXTEND: N/A for this scene
CREATE: N/A
DO NOT TOUCH: Q16 result, roadmap data, approved Q17 narration, kit design tokens
MOTION SEMANTICS: FOCUS / OWN / REVEAL / DRAW_RELATION / SETTLE / TRANSITION
MORPH SEMANTICS: Representation handoff via fade, not fake data morph
SVG SEMANTICS: two stable arrows via verified RoughLine arrow shape, exact frames post-sync
TRANSITION IN: Q16 completed status becomes visible at spoken announcement
TRANSITION OUT: plain board carries abstract goal to Scene02; roadmap fully gone
FORBIDDEN: Q17 concrete testcase, raw-delimiter fail, length#payload format, code, complexity
```

## Fixed stage geometry (1920 × 1080)

| Element | Box / placement | Size / constraint | Surface |
|---|---|---|---|
| `MasterRoadmapV2` | `(0,0)` to `(1920,1080)` full-native coordinate system | Do **not** inset or scale into a card | ROADMAP exception only |
| Post-roadmap Q17 header | `(80,60)` to `(1750,135)` | 44–50 px chalk | Bare green board |
| Abstract input list | `(320,300)` to `(1600,397)` | ~56 px monospace; **not actual source list** | Bare board |
| Encode relation | near `(960,425)`→`(960,480)` | Arrow stroke 3–4 px | `RoughLine` |
| One encoded string | `(380,500)` to `(1540,600)` | ~60 px hand/chalk | Bare board |
| Decode relation | near `(960,630)`→`(960,685)` | Arrow stroke 3–4 px | `RoughLine` |
| Original list restored | `(320,705)` to `(1600,805)` | ~56 px chalk | Bare board |
| Same-content cue | `(530,835)` to `(1390,895)` | 42 px chalk | Bare board |
| Caption reserve | y `960..1040` | `Captions` after sync only | Keep clear |

**Handoff rule:** roadmap occupies **the entire screen**, and the schematic is **hidden** until the roadmap opacity has cleared. No two full-size heroes visible simultaneously. Captions may overlap internal roadmap chrome; this must be tested on rendered critical frames before final approval.

## Verified kit API and lifecycle

| Status | Verified source | Intended props/use | Enters / changes / cleanup |
|---|---|---|---|
| REUSE | `kit/components/MasterRoadmapV2.tsx` | `completedCount`, `completedGlobalNums`, `activeGlobalNum`, `activeBadgeLabel`, `opacity`, `handoffFade`; native 1920×1080 absolute root | S01:A001 → A004; clear before A005 goal schematic |
| REUSE | `kit/components/RoughLine.tsx` | `shape.kind="arrow"` with exact line endpoints; width, height, `stroke`, `startFrame`, `durationInFrames` (time after sync) | First arrow A005, second A006; settle A007 |
| REUSE | `kit/lib/theme.ts` | `theme.boardBg`, `theme.chalkText`, `theme.pivot`, `theme.good`, `theme.cyan`, `fonts.hand`, `fonts.mono` | Across scene; no raw dark cards |
| POST-SYNC | `kit/components/Captions.tsx` | `words`, `fps` **passed from validated sync**; bottom caption area y960–1040 | No invented caption word times |

**Important API reality:** `MasterRoadmapV2` is internally 1920×1080, so do not place it inside a 1770px-wide card. For this scene, avoid `SceneEdgeTitle`/`SceneLabelStrip` until their internal fixed `fps:30` spring behavior is reconciled against final scene FPS; a direct existing theme-based title handoff is acceptable.

## Exact spoken phrase → semantic animation beats

Every beat follows `CAUSE → STATE REACTION → HOLD (only if audio supports) → MUTATION → SETTLE` and preserves one primary motion plus at most one supporting reaction.

### S01:A001 — We have finished Question Sixteen ... Subarray Sum Equals K.

- **Exact spoken anchor:** `We have finished Question Sixteen ... Subarray Sum Equals K.` (narration occurrence 1; post-audio `Wxxxx` identity pending).
- **Teaching goal / center hero:** Close Q16 only after the spoken completion clause.
- **What appears now:** Keep the existing full-screen 19-pattern roadmap; move the Q16 row to COMPLETED, not Q17 yet. Complete count becomes 16.
- **Zone:** `ROADMAP`. Roadmap: native full screen; schematic: fixed board coordinates in table above.
- **Cause:** "We have finished Question Sixteen" establishes that Q16 can be completed.
- **State reaction:** Q16 row receives one restrained confirmed-state highlight; Q16 stays in the existing list position.
- **Comprehension hold:** Only if actual audio supports it. No fixed or guessed frame duration.
- **Move/mutation:** Status/progress state changes for Q16 only; no roadmap scroll that exposes unrelated curriculum.
- **Settle:** Changed state must be readable before next unrelated primary beat.
- **Persist:** Q16 belongs to completedGlobalNums=[1..16]; Q17 is not yet the active highlight.
- **Hidden / no spoiler:** Q17 active badge, master testcase, delimiter ambiguity, protocol, encoder/decoder code.
- **Cleanup:** Clear transient Q16 glow by the next spoken progress anchor.
- **Kit component / path / role / props / decision:** MasterRoadmapV2 — kit/components/MasterRoadmapV2.tsx (`completedCount`, `completedGlobalNums`, `activeGlobalNum`, `activeBadgeLabel`) — REUSE; theme.ts — REUSE.
- **Collision:** Caption reserve y960–1040, no arrows across text, no roadmap overlay during schematic, no dark cards after roadmap handoff.
- **Trace ID:** N/A (non-trace scene).

### S01:A002 — Our progress is now sixteen out of two hundred twenty-seven.

- **Exact spoken anchor:** `Our progress is now sixteen out of two hundred twenty-seven.` (narration occurrence 2; post-audio `Wxxxx` identity pending).
- **Teaching goal / center hero:** Confirm the exact global progress without inventing a second update.
- **What appears now:** Direct attention to the already-correct 16/227 progress value in roadmap.
- **Zone:** `ROADMAP`. Roadmap: native full screen; schematic: fixed board coordinates in table above.
- **Cause:** The words "sixteen out of two hundred twenty-seven" authorize the progress emphasis.
- **State reaction:** Only progress digits receive brief chalk focus; all other roadmap items remain stable.
- **Comprehension hold:** Only if actual audio supports it. No fixed or guessed frame duration.
- **Move/mutation:** No new count mutation; Q16 completion from previous beat already set 16/227.
- **Settle:** Changed state must be readable before next unrelated primary beat.
- **Persist:** 16 completed, Q17 not yet active.
- **Hidden / no spoiler:** Do not pre-highlight Q17 or show Q17 solution visual.
- **Cleanup:** Remove progress emphasis when next-question phrase starts.
- **Kit component / path / role / props / decision:** MasterRoadmapV2 — kit/components/MasterRoadmapV2.tsx (`completedCount=16`, `completedGlobalNums=[1..16]`) — REUSE.
- **Collision:** Caption reserve y960–1040, no arrows across text, no roadmap overlay during schematic, no dark cards after roadmap handoff.
- **Trace ID:** N/A (non-trace scene).

### S01:A003 — Next ... Question Seventeen.

- **Exact spoken anchor:** `Next ... Question Seventeen.` (narration occurrence 3; post-audio `Wxxxx` identity pending).
- **Teaching goal / center hero:** Activate Q17 exactly when announced.
- **What appears now:** Shift attention from completed Q16 to row 17 on the authoritative roadmap.
- **Zone:** `ROADMAP`. Roadmap: native full screen; schematic: fixed board coordinates in table above.
- **Cause:** "Next ... Question Seventeen" introduces the new active question.
- **State reaction:** Q17 gains `NOW ACTIVE` semantic focus; prior completed rows remain completed.
- **Comprehension hold:** Only if actual audio supports it. No fixed or guessed frame duration.
- **Move/mutation:** Use props `activeGlobalNum=17`, `activeBadgeLabel="NOW ACTIVE"`; `completedCount` stays 16. No master-testcase hero.
- **Settle:** Changed state must be readable before next unrelated primary beat.
- **Persist:** Q17 active through the following spoken title.
- **Hidden / no spoiler:** Do not show encoding format, input example, character positions, or answer.
- **Cleanup:** Q16-specific glow fully clears.
- **Kit component / path / role / props / decision:** MasterRoadmapV2 — kit/components/MasterRoadmapV2.tsx (`activeGlobalNum`, `activeBadgeLabel`, `completedCount`) — REUSE.
- **Collision:** Caption reserve y960–1040, no arrows across text, no roadmap overlay during schematic, no dark cards after roadmap handoff.
- **Trace ID:** N/A (non-trace scene).

### S01:A004 — Encode and Decode Strings.

- **Exact spoken anchor:** `Encode and Decode Strings.` (narration occurrence 4; post-audio `Wxxxx` identity pending).
- **Teaching goal / center hero:** Name the current question, no method teaching.
- **What appears now:** Focus Q17 title `Encode and Decode Strings` within the active roadmap row; optionally prepare a header identity for board handoff.
- **Zone:** `ROADMAP`. Roadmap: native full screen; schematic: fixed board coordinates in table above.
- **Cause:** The title is spoken by narration.
- **State reaction:** Q17 row/title receives only one focus reaction.
- **Comprehension hold:** Only if actual audio supports it. No fixed or guessed frame duration.
- **Move/mutation:** No algorithm animation; do not introduce string payload, delimiter, length protocol, or code.
- **Settle:** Changed state must be readable before next unrelated primary beat.
- **Persist:** Question name is the identity carried into board-native goal schematic.
- **Hidden / no spoiler:** All Scene02 example strings and all Scene03 protocol details.
- **Cleanup:** Prepare roadmap fade only on next goal phrase; do not overlay two heroes.
- **Kit component / path / role / props / decision:** MasterRoadmapV2 — kit/components/MasterRoadmapV2.tsx (reuse active row); direct `theme.ts` title handoff when visible.
- **Collision:** Caption reserve y960–1040, no arrows across text, no roadmap overlay during schematic, no dark cards after roadmap handoff.
- **Trace ID:** N/A (non-trace scene).

### S01:A005 — Here, we need to convert a list of strings into one string ...

- **Exact spoken anchor:** `Here, we need to convert a list of strings into one string ...` (narration occurrence 5; post-audio `Wxxxx` identity pending).
- **Teaching goal / center hero:** Define encoding in one simple conceptual step.
- **What appears now:** After roadmap fully clears, show abstract input list `strings = [s₁, s₂, …]` at (320,300) in 56px monospace. Then a down arrow and `one encoded string` at (380,500) in 60px hand text. Do not reveal any actual Q17 testcase.
- **Zone:** `SCHEMATIC`. Roadmap: native full screen; schematic: fixed board coordinates in table above.
- **Cause:** "convert a list of strings into one string" establishes the forward transformation.
- **State reaction:** Source list takes pivot focus first; destination string resolves only as the phrase reaches "one string".
- **Comprehension hold:** Only if actual audio supports it. No fixed or guessed frame duration.
- **Move/mutation:** Roadmap `opacity` to zero before hero schematic becomes opaque; then direct board-native downward `RoughLine` arrow from (960,425) to (960,480).
- **Settle:** Changed state must be readable before next unrelated primary beat.
- **Persist:** Keep source list and encoded string visible for upcoming decoding phrase.
- **Hidden / no spoiler:** Decoded final list until phrase A006; actual payload, hash delimiter, length header, protocol.
- **Cleanup:** Only roadmap UI exits; source/destination schematic stays fixed.
- **Kit component / path / role / props / decision:** MasterRoadmapV2 — `opacity` for handoff (REUSE); `RoughLine` kit/components/RoughLine.tsx (`shape={kind:"arrow",x1:960,y1:425,x2:960,y2:480}`, `width`, `height`, frame props post-sync) — REUSE; fonts.mono/hand, theme.ts — REUSE.
- **Collision:** Caption reserve y960–1040, no arrows across text, no roadmap overlay during schematic, no dark cards after roadmap handoff.
- **Trace ID:** N/A (non-trace scene).

### S01:A006 — and later decode it back into the exact original list.

- **Exact spoken anchor:** `and later decode it back into the exact original list.` (narration occurrence 6; post-audio `Wxxxx` identity pending).
- **Teaching goal / center hero:** Show that decoding reconstructs exactly the source list.
- **What appears now:** Add another down arrow (960,630)→(960,685); then `original list restored` at (320,705) in 56px. Do not display a fabricated concrete list.
- **Zone:** `SCHEMATIC`. Roadmap: native full screen; schematic: fixed board coordinates in table above.
- **Cause:** "decode it back into the exact original list" authorizes the reverse transformation.
- **State reaction:** Focus encoded representation, then restored list only when "exact original list" is spoken.
- **Comprehension hold:** Only if actual audio supports it. No fixed or guessed frame duration.
- **Move/mutation:** Animate semantic relation downward to restored output; keep earlier stages motionless.
- **Settle:** Changed state must be readable before next unrelated primary beat.
- **Persist:** Keep all three stacked representations on board, readable.
- **Hidden / no spoiler:** No byte format / `#` terminator / decoder pointer `i` / multi-record trace.
- **Cleanup:** Clear forward-stage focus; restore plain chalk after settled relation.
- **Kit component / path / role / props / decision:** RoughLine — kit/components/RoughLine.tsx (`shape.kind="arrow"` for second arrow) — REUSE; theme.ts text — REUSE.
- **Collision:** Caption reserve y960–1040, no arrows across text, no roadmap overlay during schematic, no dark cards after roadmap handoff.
- **Trace ID:** N/A (non-trace scene).

### S01:A007 — That's our goal.

- **Exact spoken anchor:** `That's our goal.` (narration occurrence 7; post-audio `Wxxxx` identity pending).
- **Teaching goal / center hero:** Close the goal without teaching technique.
- **What appears now:** Briefly emphasize `original list restored` and a single direct chalk note `same contents • same order` at (530,835), 42px. Nothing new in middle stage.
- **Zone:** `SCHEMATIC`. Roadmap: native full screen; schematic: fixed board coordinates in table above.
- **Cause:** "That's our goal" explicitly concludes the problem requirement.
- **State reaction:** Restored output becomes the semantic target; no additional graphic ornaments.
- **Comprehension hold:** Only if actual audio supports it. No fixed or guessed frame duration.
- **Move/mutation:** No algorithm mutation; stage settles and prepares a clean board for Scene02.
- **Settle:** Changed state must be readable before next unrelated primary beat.
- **Persist:** Keep Q17 title small at y70 and conceptual requirement stable through final narration.
- **Hidden / no spoiler:** No Scene02 raw-delimiter failure or Scene03 format details.
- **Cleanup:** At Scene02 entrance, replace abstract source with exact four-string master input only when Scene02 names it.
- **Kit component / path / role / props / decision:** theme.ts text tokens and optional transparent RoughLine underline — REUSE; no dark UI.
- **Collision:** Caption reserve y960–1040, no arrows across text, no roadmap overlay during schematic, no dark cards after roadmap handoff.
- **Trace ID:** N/A (non-trace scene).

## Critical semantic review checkpoints (not frame numbers)

- **ENTRY — A001:** Q16 completion established on the roadmap, no premature active Q17 emphasis.
- **PROGRESS — A002:** `16/227` correct, no double increment.
- **NEXT PROBLEM — A003:** Q17 active state now authorized.
- **TITLE — A004:** `Encode and Decode Strings` is focused; no protocol visible.
- **FIRST TRANSFORM — A005:** roadmap fully clears; list → one string only.
- **REVERSE TRANSFORM — A006:** restored list appears only after `decode ... original list`.
- **EXIT — A007:** single unchanged conceptual goal; ready to reveal concrete source in Scene02.

## Scene 01 pre-audio audit

- [x] All 7 exact approved narration lines mapped in the correct order; stable `S01:A001..A007`.
- [x] Q16→Q17 roadmap state transition semantically consistent, 16/227 does not advance twice.
- [x] No solution protocol, delimiter failure, final testcase, or code shown.
- [x] Native full-screen roadmap correctly distinguished from board-native goal schematic.
- [x] No black/dark teaching cards after leaving roadmap.
- [x] Fixed coordinates / optical dimensions supplied for teaching objects.
- [x] Verified concrete kit paths and relevant current props documented; no invented new component.
- [x] Each beat states appearance, cause, effect, persistence, cleanup, kit, and forbidden future state.
- [x] No guessed FPS/seconds/frame ranges/word IDs.
- [ ] Rendered frame collision QA — **PENDING implementation/render**.
- [ ] Exact Wxxxx, FPS, durations and real pauses — **BLOCKED until final MP3 and validated sync**.

**Gate A status:** semantic plan ready for review. **Gate B status:** blocked by missing audio/sync. **Final 100/100 implementation approval is not claimed.**
