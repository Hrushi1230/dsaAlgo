# Q17 — Scene 09: Minimal Mistakes + Edge Cases

**Gate A / Pre-Audio Semantic Word-Driven Plan — V3.2 Board-Native**  
**Draft → audit → fix → re-audit workflow:** source exact phrases, no guessed frame timing.  
**Exact timing status:** `PENDING final ElevenLabs MP3 + validated exact word-sync JSON`; therefore exact `Wxxxx`, frame ranges, FPS, and pause durations **MUST NOT be fabricated**.

## Scene contract

```text
SCENE: 09
QUESTION: Q17 — Encode and Decode Strings (LeetCode 271)
BEAT TYPE: Minimal Mistakes + Edge Cases (NON-TRACE — minimal)
SCRIPT SOURCE: Q17_Encode_Decode_Strings_Final_ElevenLabs_Narration.md
ALGORITHM TRACE SOURCE: verified source code target + original approved exact-script trace where applicable
AUDIO FILE: PENDING final MP3
SYNC FILE: PENDING validated word sync
FPS: PENDING sync
TOTAL FRAMES: PENDING sync
PEDAGOGICAL GOAL: one direct-chalk mistake/edge relation at a time
TRACE STEP IDS: N/A
DATA STRUCTURE: see stage geometry
PRIMARY HERO: one direct-chalk mistake/edge relation at a time
SUPPORT LEFT: See fixed geometry table
SUPPORT RIGHT: See fixed geometry table
REUSE: theme.ts / RoughLine / Captions
EXTEND: N/A
CREATE SHARED: HeaderPayloadRecord
DO NOT TOUCH: narration text, verified source code semantics, Q16 progress, roadmap curriculum, current kit APIs without explicit backward-compatible extension
MOTION SEMANTICS: CAUSE → REACTION → justified hold → MOVE/MUTATE → SETTLE
MORPH SEMANTICS: direct change/focus by default; semantic clone on copy; preserve identity when same object
SVG SEMANTICS: board-native RoughLine if relation is needed; no unverified path math
TRANSITION IN: previous scene's authorized teaching artifact or stable Q17 identity
TRANSITION OUT: next scene's authorized source state; no spoilers
FORBIDDEN: black/dark cards, dashboard, dark IDE, guessed word timestamps, guessed FPS, fake line previews, tiny debug text
```

## Stage geometry — authored pixels, invisible layout regions

| Element | x | y | width | height | Optical role |
|---|---:|---:|---:|---:|---|
| scene label | 65 | 35 | 1770 | 77 | chalk |
| one mistake at a time | 220 | 255 | 1470 | 360 | hero |
| edge-case relation | 240 | 550 | 1450 | 360 | hero alternating |

**Global collision envelope:** title/label y28..120; hero y165..925; captions y960..1040. No teaching text or arrows may enter caption band. Coordinates are 1920×1080 nominal scene units, not guesses for time or FPS. Layout alternatives visible in different speech phases may reuse stage area; do not show them simultaneously.

## Current kit truth / usage and component lifecycle

| Component | Verified path / intended addition | Current actual API / planned API | Decision |
|---|---|---|---|
| theme.ts | `kit/lib/theme.ts` | theme.boardBg, theme.chalkText, theme.chalkDim, theme.pivot, theme.cyan, theme.good, theme.warn, theme.purple; fonts.hand/mono/code | **REUSE** |
| RoughLine | `kit/components/RoughLine.tsx` | shape:{kind:"line"/"arrow"/"circle", coordinates}; width,height,startFrame?,durationInFrames?,stroke?,strokeWidth?,seed? | **REUSE** |
| Captions | `kit/components/Captions.tsx` | words:{word,start,end}[], fps?,bottom?,fontSize?,maxWords?,maxWidth? (ONLY post-sync, pass exact fps) | **POST-SYNC REUSE** |
| HeaderPayloadRecord | `NEW SHARED (proposed; NO verified file path)` | three semantic sectors length/header-terminator/payload with header-vs-payload hash distinction; no opaque fill; proposed shared reusable component, not verified existing | **CREATE SHARED** |

**Per-component lifecycle:** scene label and theme text enter only with their spoken concept; `Captions` consumes final words+FPS **after sync**; teaching source structures enter at the first introduction and retain spatial identity; temporary calculations/cursors enter on their matching anchors and clear at the next authorized step or scene exit; no future data pre-rendered visible. Components marked **CREATE SHARED** do not exist as verified imports yet—implementation must create them at an agreed `kit` path and check actual API before using. No question-local duplicate component.

## Algorithm / mathematical truth manifest

N/A — no full algorithm execution in this scene.

## Scene-specific semantic and spatial behavior

- **One dominant visual:** one direct-chalk mistake/edge relation at a time. Secondary state is small but readable; no UI cards; board itself is surface.
- **Reading direction:** spoken teaching object → one primary board change → stable conclusion.
- **No-spoiler rule:** No future mistake or edge-case result before its narration.
- **Scene-type discipline:** One point at a time. No full algorithm execution; do not replay traces.
- **Audio causal gating:** each exact spoken phrase below is a sequential semantic trigger, not an assumed frame allocation. Holds only from validated MP3/sync.
- **Fixed layout:** reserve positions even while a component is hidden; do not let future rows shift existing words or characters.

## Exact narration phrase → semantic animation anchors (source order)

### S09:A001 — Three quick things to remember.

- **ANCHOR ID:** `S09:A001` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Three quick things to remember.” (verbatim). Occurrence #1 in approved Scene 09 narration, in source order.
- **BEAT TYPE / PHASE:** MISTAKES.
- **WHAT APPEARS NOW:** Open brief mistakes/edge stage with one centered teaching surface, no card grid.
- **CENTER-STAGE HERO:** one direct-chalk mistake/edge relation at a time; active zone: single centered line; see geometry table.
- **CAUSE:** Spoken phrase “Three quick things to remember.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `single centered line` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Open brief mistakes/edge stage with one centered teaching surface, no card grid.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future mistake or edge-case result before its narration.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Current mistake/example only; next replacement clears previous teaching focus.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine (verified), HeaderPayloadRecord (CREATE SHARED) only where semantically needed; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Three quick things to remember.” and prior authorized state visible. Future narration remains hidden. No future mistake or edge-case result before its narration.
- **COLLISION CHECK:** Active zone single centered line; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S09:A002 — Do not split the encoded string on every hash.

- **ANCHOR ID:** `S09:A002` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Do not split the encoded string on every hash.” (verbatim). Occurrence #2 in approved Scene 09 narration, in source order.
- **BEAT TYPE / PHASE:** MISTAKES.
- **WHAT APPEARS NOW:** Show `split("#")` crossed once; hash can be payload data.
- **CENTER-STAGE HERO:** one direct-chalk mistake/edge relation at a time; active zone: single centered line; see geometry table.
- **CAUSE:** Spoken phrase “Do not split the encoded string on every hash.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `single centered line` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Show `split("#")` crossed once; hash can be payload data.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future mistake or edge-case result before its narration.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Current mistake/example only; next replacement clears previous teaching focus.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine (verified), HeaderPayloadRecord (CREATE SHARED) only where semantically needed; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Do not split the encoded string on every hash.” and prior authorized state visible. Future narration remains hidden. No future mistake or edge-case result before its narration.
- **COLLISION CHECK:** Active zone single centered line; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S09:A003 — The length can have multiple digits.

- **ANCHOR ID:** `S09:A003` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “The length can have multiple digits.” (verbatim). Occurrence #3 in approved Scene 09 narration, in source order.
- **BEAT TYPE / PHASE:** MISTAKES.
- **WHAT APPEARS NOW:** Replace first note with two-digit length `11#` demonstration (not full record trace).
- **CENTER-STAGE HERO:** one direct-chalk mistake/edge relation at a time; active zone: single centered line; see geometry table.
- **CAUSE:** Spoken phrase “The length can have multiple digits.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `single centered line` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Replace first note with two-digit length `11#` demonstration (not full record trace).
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future mistake or edge-case result before its narration.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Current mistake/example only; next replacement clears previous teaching focus.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine (verified), HeaderPayloadRecord (CREATE SHARED) only where semantically needed; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** CLEANUP / TRANSITION of old beat, preserve authorized state; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “The length can have multiple digits.” and prior authorized state visible. Future narration remains hidden. No future mistake or edge-case result before its narration.
- **COLLISION CHECK:** Active zone single centered line; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S09:A004 — And after decoding each payload ...

- **ANCHOR ID:** `S09:A004` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “And after decoding each payload ...” (verbatim). Occurrence #4 in approved Scene 09 narration, in source order.
- **BEAT TYPE / PHASE:** MISTAKES.
- **WHAT APPEARS NOW:** Show invariant `after slice → i = end` without rerunning decoder.
- **CENTER-STAGE HERO:** one direct-chalk mistake/edge relation at a time; active zone: single centered line; see geometry table.
- **CAUSE:** Spoken phrase “And after decoding each payload ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `single centered line` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Show invariant `after slice → i = end` without rerunning decoder.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future mistake or edge-case result before its narration.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Current mistake/example only; next replacement clears previous teaching focus.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine (verified), HeaderPayloadRecord (CREATE SHARED) only where semantically needed; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “And after decoding each payload ...” and prior authorized state visible. Future narration remains hidden. No future mistake or edge-case result before its narration.
- **COLLISION CHECK:** Active zone single centered line; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S09:A005 — always move `i` to end.

- **ANCHOR ID:** `S09:A005` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “always move `i` to end.” (verbatim). Occurrence #5 in approved Scene 09 narration, in source order.
- **BEAT TYPE / PHASE:** MISTAKES.
- **WHAT APPEARS NOW:** Underline `i = end` as correction, single teaching point.
- **CENTER-STAGE HERO:** one direct-chalk mistake/edge relation at a time; active zone: single centered line; see geometry table.
- **CAUSE:** Spoken phrase “always move `i` to end.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `single centered line` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Underline `i = end` as correction, single teaching point.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future mistake or edge-case result before its narration.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Current mistake/example only; next replacement clears previous teaching focus.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine (verified), HeaderPayloadRecord (CREATE SHARED) only where semantically needed; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “always move `i` to end.” and prior authorized state visible. Future narration remains hidden. No future mistake or edge-case result before its narration.
- **COLLISION CHECK:** Active zone single centered line; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S09:A006 — For edge cases ...

- **ANCHOR ID:** `S09:A006` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “For edge cases ...” (verbatim). Occurrence #6 in approved Scene 09 narration, in source order.
- **BEAT TYPE / PHASE:** EDGE CASES.
- **WHAT APPEARS NOW:** Clear mistakes and enter short edge examples mode.
- **CENTER-STAGE HERO:** one direct-chalk mistake/edge relation at a time; active zone: single centered example; see geometry table.
- **CAUSE:** Spoken phrase “For edge cases ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `single centered example` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Clear mistakes and enter short edge examples mode.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future mistake or edge-case result before its narration.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Current mistake/example only; next replacement clears previous teaching focus.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine (verified), HeaderPayloadRecord (CREATE SHARED) only where semantically needed; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** CLEANUP / TRANSITION of old beat, preserve authorized state; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “For edge cases ...” and prior authorized state visible. Future narration remains hidden. No future mistake or edge-case result before its narration.
- **COLLISION CHECK:** Active zone single centered example; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S09:A007 — an empty list encodes to an empty string.

- **ANCHOR ID:** `S09:A007` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “an empty list encodes to an empty string.” (verbatim). Occurrence #7 in approved Scene 09 narration, in source order.
- **BEAT TYPE / PHASE:** EDGE CASES.
- **WHAT APPEARS NOW:** Write `[] → ""` as first full direct board example.
- **CENTER-STAGE HERO:** one direct-chalk mistake/edge relation at a time; active zone: single centered example; see geometry table.
- **CAUSE:** Spoken phrase “an empty list encodes to an empty string.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `single centered example` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Write `[] → ""` as first full direct board example.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future mistake or edge-case result before its narration.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Current mistake/example only; next replacement clears previous teaching focus.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine (verified), HeaderPayloadRecord (CREATE SHARED) only where semantically needed; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “an empty list encodes to an empty string.” and prior authorized state visible. Future narration remains hidden. No future mistake or edge-case result before its narration.
- **COLLISION CHECK:** Active zone single centered example; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S09:A008 — One empty string encodes to ...

- **ANCHOR ID:** `S09:A008` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “One empty string encodes to ...” (verbatim). Occurrence #8 in approved Scene 09 narration, in source order.
- **BEAT TYPE / PHASE:** EDGE CASES.
- **WHAT APPEARS NOW:** Reveal source `[""]` as next input, do not show encoded output early.
- **CENTER-STAGE HERO:** one direct-chalk mistake/edge relation at a time; active zone: single centered example; see geometry table.
- **CAUSE:** Spoken phrase “One empty string encodes to ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `single centered example` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal source `[""]` as next input, do not show encoded output early.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future mistake or edge-case result before its narration.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Current mistake/example only; next replacement clears previous teaching focus.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine (verified), HeaderPayloadRecord (CREATE SHARED) only where semantically needed; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “One empty string encodes to ...” and prior authorized state visible. Future narration remains hidden. No future mistake or edge-case result before its narration.
- **COLLISION CHECK:** Active zone single centered example; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S09:A009 — zero hash.

- **ANCHOR ID:** `S09:A009` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “zero hash.” (verbatim). Occurrence #9 in approved Scene 09 narration, in source order.
- **BEAT TYPE / PHASE:** EDGE CASES.
- **WHAT APPEARS NOW:** Resolve output `"0#"` below source only after spoken phrase.
- **CENTER-STAGE HERO:** one direct-chalk mistake/edge relation at a time; active zone: single centered example; see geometry table.
- **CAUSE:** Spoken phrase “zero hash.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `single centered example` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Resolve output `"0#"` below source only after spoken phrase.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future mistake or edge-case result before its narration.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Current mistake/example only; next replacement clears previous teaching focus.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine (verified), HeaderPayloadRecord (CREATE SHARED) only where semantically needed; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “zero hash.” and prior authorized state visible. Future narration remains hidden. No future mistake or edge-case result before its narration.
- **COLLISION CHECK:** Active zone single centered example; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S09:A010 — And a string containing only a hash ...

- **ANCHOR ID:** `S09:A010` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “And a string containing only a hash ...” (verbatim). Occurrence #10 in approved Scene 09 narration, in source order.
- **BEAT TYPE / PHASE:** EDGE CASES.
- **WHAT APPEARS NOW:** Reveal next source `["#"]`; visibly distinguish header vs payload hash.
- **CENTER-STAGE HERO:** one direct-chalk mistake/edge relation at a time; active zone: single centered example; see geometry table.
- **CAUSE:** Spoken phrase “And a string containing only a hash ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `single centered example` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal next source `["#"]`; visibly distinguish header vs payload hash.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future mistake or edge-case result before its narration.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Current mistake/example only; next replacement clears previous teaching focus.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine (verified), HeaderPayloadRecord (CREATE SHARED) only where semantically needed; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “And a string containing only a hash ...” and prior authorized state visible. Future narration remains hidden. No future mistake or edge-case result before its narration.
- **COLLISION CHECK:** Active zone single centered example; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S09:A011 — encodes to ...

- **ANCHOR ID:** `S09:A011` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “encodes to ...” (verbatim). Occurrence #11 in approved Scene 09 narration, in source order.
- **BEAT TYPE / PHASE:** EDGE CASES.
- **WHAT APPEARS NOW:** Hold result target blank until next spoken output phrase.
- **CENTER-STAGE HERO:** one direct-chalk mistake/edge relation at a time; active zone: single centered example; see geometry table.
- **CAUSE:** Spoken phrase “encodes to ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `single centered example` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Hold result target blank until next spoken output phrase.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future mistake or edge-case result before its narration.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Current mistake/example only; next replacement clears previous teaching focus.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine (verified), HeaderPayloadRecord (CREATE SHARED) only where semantically needed; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “encodes to ...” and prior authorized state visible. Future narration remains hidden. No future mistake or edge-case result before its narration.
- **COLLISION CHECK:** Active zone single centered example; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S09:A012 — one hash hash.

- **ANCHOR ID:** `S09:A012` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “one hash hash.” (verbatim). Occurrence #12 in approved Scene 09 narration, in source order.
- **BEAT TYPE / PHASE:** EDGE CASES.
- **WHAT APPEARS NOW:** Resolve `["#"] → "1##"` exactly (one length digit, one header hash, one payload hash).
- **CENTER-STAGE HERO:** one direct-chalk mistake/edge relation at a time; active zone: single centered example; see geometry table.
- **CAUSE:** Spoken phrase “one hash hash.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `single centered example` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Resolve `["#"] → "1##"` exactly (one length digit, one header hash, one payload hash).; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future mistake or edge-case result before its narration.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Current mistake/example only; next replacement clears previous teaching focus.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine (verified), HeaderPayloadRecord (CREATE SHARED) only where semantically needed; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “one hash hash.” and prior authorized state visible. Future narration remains hidden. No future mistake or edge-case result before its narration.
- **COLLISION CHECK:** Active zone single centered example; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S09:A013 — The same protocol handles all of them.

- **ANCHOR ID:** `S09:A013` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “The same protocol handles all of them.” (verbatim). Occurrence #13 in approved Scene 09 narration, in source order.
- **BEAT TYPE / PHASE:** EDGE CASES.
- **WHAT APPEARS NOW:** Settle examples in clean board-native relation; no extra two-empty-string example invented.
- **CENTER-STAGE HERO:** one direct-chalk mistake/edge relation at a time; active zone: single centered example; see geometry table.
- **CAUSE:** Spoken phrase “The same protocol handles all of them.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `single centered example` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Settle examples in clean board-native relation; no extra two-empty-string example invented.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future mistake or edge-case result before its narration.
- **CLEANUP / EXIT:** Prepare scene transition only after spoken exit; no timing guessed; keep conceptual handoff item intact.
- **PERSISTENT STATE:** Current mistake/example only; next replacement clears previous teaching focus.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine (verified), HeaderPayloadRecord (CREATE SHARED) only where semantically needed; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “The same protocol handles all of them.” and prior authorized state visible. Future narration remains hidden. No future mistake or edge-case result before its narration.
- **COLLISION CHECK:** Active zone single centered example; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

## Critical semantic checkpoints — **NOT guessed frame numbers**

- **A002–A005: three distinct mistakes, one on board at a time**
- **A007: [] → "" exact**
- **A008–A009: [""] → "0#" after spoken output**
- **A010–A012: ["#"] → "1##" header vs payload hashed correctly**

## Audit gate distinction

**This file is a Gate A pre-audio semantic plan.** Automated check report is adjacent as `Scene09_Audit.md`. Gate B cannot be completed before the actual MP3 + exact word-sync. DO NOT claim final 100/100 or rendered-frame correctness. Rendering and font-metric collision audit must be done after implementation.

**Word identity handoff:** later resolve `S09:A001..A013` to stable source word indices `Scene09:Wxxxx`, with start/end edges and end-exclusive `[startFrame,endFrameExclusive)`; use validated sync FPS/duration, never assumed FPS.
