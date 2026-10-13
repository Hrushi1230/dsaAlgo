# Q17 — Scene 02: Understand the Problem + Delimiter Failure

**Gate A / Pre-Audio Semantic Word-Driven Plan — V3.2 Board-Native**  
**Draft → audit → fix → re-audit workflow:** source exact phrases, no guessed frame timing.  
**Exact timing status:** `PENDING final ElevenLabs MP3 + validated exact word-sync JSON`; therefore exact `Wxxxx`, frame ranges, FPS, and pause durations **MUST NOT be fabricated**.

## Scene contract

```text
SCENE: 02
QUESTION: Q17 — Encode and Decode Strings (LeetCode 271)
BEAT TYPE: Understand the Problem + Delimiter Failure (NON-TRACE — minimal)
SCRIPT SOURCE: Q17_Encode_Decode_Strings_Final_ElevenLabs_Narration.md
ALGORITHM TRACE SOURCE: verified source code target + original approved exact-script trace where applicable
AUDIO FILE: PENDING final MP3
SYNC FILE: PENDING validated word sync
FPS: PENDING sync
TOTAL FRAMES: PENDING sync
PEDAGOGICAL GOAL: either four-row master input or ambiguity comparison, never both equal-weight
TRACE STEP IDS: N/A
DATA STRUCTURE: see stage geometry
PRIMARY HERO: either four-row master input or ambiguity comparison, never both equal-weight
SUPPORT LEFT: See fixed geometry table
SUPPORT RIGHT: See fixed geometry table
REUSE: theme.ts / RoughLine / RoughBox / Captions
EXTEND: N/A
CREATE SHARED: BoardStringList (proposed; not in verified repo)
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
| small scene label | 70 | 36 | 1680 | 75 | theme/chalk |
| master source list rows | 165 | 230 | 1530 | 450 | source list |
| two alternative input lists | 145 | 265 | 1645 | 250 | comparison |
| shared ambiguous output | 430 | 590 | 1060 | 150 | comparison |
| takeaway | 300 | 810 | 1340 | 90 | direct chalk |

**Global collision envelope:** title/label y28..120; hero y165..925; captions y960..1040. No teaching text or arrows may enter caption band. Coordinates are 1920×1080 nominal scene units, not guesses for time or FPS. Layout alternatives visible in different speech phases may reuse stage area; do not show them simultaneously.

## Current kit truth / usage and component lifecycle

| Component | Verified path / intended addition | Current actual API / planned API | Decision |
|---|---|---|---|
| theme.ts | `kit/lib/theme.ts` | theme.boardBg, theme.chalkText, theme.chalkDim, theme.pivot, theme.cyan, theme.good, theme.warn, theme.purple; fonts.hand/mono/code | **REUSE** |
| RoughLine | `kit/components/RoughLine.tsx` | shape:{kind:"line"/"arrow"/"circle", coordinates}; width,height,startFrame?,durationInFrames?,stroke?,strokeWidth?,seed? | **REUSE** |
| RoughBox | `kit/components/RoughBox.tsx` | width,height,startFrame?,durationInFrames?,stroke?,fill?,seed?,strokeWidth?,roughness?; omit fill for transparent outline | **REUSE** |
| Captions | `kit/components/Captions.tsx` | words:{word,start,end}[], fps?,bottom?,fontSize?,maxWords?,maxWidth? (ONLY post-sync, pass exact fps) | **POST-SYNC REUSE** |
| BoardStringList (proposed; not in verified repo) | `NEW SHARED (proposed; NO verified file path)` | not invented | **CREATE SHARED** |

**Per-component lifecycle:** scene label and theme text enter only with their spoken concept; `Captions` consumes final words+FPS **after sync**; teaching source structures enter at the first introduction and retain spatial identity; temporary calculations/cursors enter on their matching anchors and clear at the next authorized step or scene exit; no future data pre-rendered visible. Components marked **CREATE SHARED** do not exist as verified imports yet—implementation must create them at an agreed `kit` path and check actual API before using. No question-local duplicate component.

## Algorithm / mathematical truth manifest

N/A — no full algorithm execution in this scene.

## Scene-specific semantic and spatial behavior

- **One dominant visual:** either four-row master input or ambiguity comparison, never both equal-weight. Secondary state is small but readable; no UI cards; board itself is surface.
- **Reading direction:** spoken teaching object → one primary board change → stable conclusion.
- **No-spoiler rule:** No length-header protocol, sample encoded stream, decoder code, future comparisons before they are spoken.
- **Scene-type discipline:** One point at a time. No full algorithm execution; do not replay traces.
- **Audio causal gating:** each exact spoken phrase below is a sequential semantic trigger, not an assumed frame allocation. Holds only from validated MP3/sync.
- **Fixed layout:** reserve positions even while a component is hidden; do not let future rows shift existing words or characters.

## Exact narration phrase → semantic animation anchors (source order)

### S02:A001 — For our example, we have four strings.

- **ANCHOR ID:** `S02:A001` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “For our example, we have four strings.” (verbatim). Occurrence #1 in approved Scene 02 narration, in source order.
- **BEAT TYPE / PHASE:** MASTER INPUT.
- **WHAT APPEARS NOW:** Reveal the four-row *source-list stage* title and keep concrete entries hidden until called.
- **CENTER-STAGE HERO:** either four-row master input or ambiguity comparison, never both equal-weight; active zone: source rows stage; see geometry table.
- **CAUSE:** Spoken phrase “For our example, we have four strings.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source rows stage` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal the four-row *source-list stage* title and keep concrete entries hidden until called.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No length-header protocol, sample encoded stream, decoder code, future comparisons before they are spoken.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Input strings remain unchanged; candidates reveal after hypothesis; no protocol revealed.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** BoardStringList (CREATE SHARED) and verified theme.ts; RoughLine/RoughBox only for chalk relation/focus; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “For our example, we have four strings.” and prior authorized state visible. Future narration remains hidden. No length-header protocol, sample encoded stream, decoder code, future comparisons before they are spoken.
- **COLLISION CHECK:** Active zone source rows stage; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S02:A002 — A hash B ...

- **ANCHOR ID:** `S02:A002` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “A hash B ...” (verbatim). Occurrence #2 in approved Scene 02 narration, in source order.
- **BEAT TYPE / PHASE:** MASTER INPUT.
- **WHAT APPEARS NOW:** Reveal source row 0 as literal `"a#b"`, clearly preserving the hash as payload; no separator protocol yet.
- **CENTER-STAGE HERO:** either four-row master input or ambiguity comparison, never both equal-weight; active zone: source rows stage; see geometry table.
- **CAUSE:** Spoken phrase “A hash B ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source rows stage` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal source row 0 as literal `"a#b"`, clearly preserving the hash as payload; no separator protocol yet.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No length-header protocol, sample encoded stream, decoder code, future comparisons before they are spoken.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Input strings remain unchanged; candidates reveal after hypothesis; no protocol revealed.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** BoardStringList (CREATE SHARED) and verified theme.ts; RoughLine/RoughBox only for chalk relation/focus; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “A hash B ...” and prior authorized state visible. Future narration remains hidden. No length-header protocol, sample encoded stream, decoder code, future comparisons before they are spoken.
- **COLLISION CHECK:** Active zone source rows stage; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S02:A003 — an empty string ...

- **ANCHOR ID:** `S02:A003` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “an empty string ...” (verbatim). Occurrence #3 in approved Scene 02 narration, in source order.
- **BEAT TYPE / PHASE:** MASTER INPUT.
- **WHAT APPEARS NOW:** Reveal source row 1 as `""` with a subtle `empty` helper label, not a fake character.
- **CENTER-STAGE HERO:** either four-row master input or ambiguity comparison, never both equal-weight; active zone: source rows stage; see geometry table.
- **CAUSE:** Spoken phrase “an empty string ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source rows stage` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal source row 1 as `""` with a subtle `empty` helper label, not a fake character.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No length-header protocol, sample encoded stream, decoder code, future comparisons before they are spoken.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Input strings remain unchanged; candidates reveal after hypothesis; no protocol revealed.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** BoardStringList (CREATE SHARED) and verified theme.ts; RoughLine/RoughBox only for chalk relation/focus; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “an empty string ...” and prior authorized state visible. Future narration remains hidden. No length-header protocol, sample encoded stream, decoder code, future comparisons before they are spoken.
- **COLLISION CHECK:** Active zone source rows stage; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S02:A004 — hello world ...

- **ANCHOR ID:** `S02:A004` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “hello world ...” (verbatim). Occurrence #4 in approved Scene 02 narration, in source order.
- **BEAT TYPE / PHASE:** MASTER INPUT.
- **WHAT APPEARS NOW:** Reveal source row 2 as literal `"hello world"`; preserve a visible space in monospace lettering.
- **CENTER-STAGE HERO:** either four-row master input or ambiguity comparison, never both equal-weight; active zone: source rows stage; see geometry table.
- **CAUSE:** Spoken phrase “hello world ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source rows stage` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal source row 2 as literal `"hello world"`; preserve a visible space in monospace lettering.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No length-header protocol, sample encoded stream, decoder code, future comparisons before they are spoken.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Input strings remain unchanged; candidates reveal after hypothesis; no protocol revealed.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** BoardStringList (CREATE SHARED) and verified theme.ts; RoughLine/RoughBox only for chalk relation/focus; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “hello world ...” and prior authorized state visible. Future narration remains hidden. No length-header protocol, sample encoded stream, decoder code, future comparisons before they are spoken.
- **COLLISION CHECK:** Active zone source rows stage; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S02:A005 — and the string containing four and two.

- **ANCHOR ID:** `S02:A005` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “and the string containing four and two.” (verbatim). Occurrence #5 in approved Scene 02 narration, in source order.
- **BEAT TYPE / PHASE:** MASTER INPUT.
- **WHAT APPEARS NOW:** Reveal source row 3 as literal `"42"`; keep digits as string data, not numeric value.
- **CENTER-STAGE HERO:** either four-row master input or ambiguity comparison, never both equal-weight; active zone: source rows stage; see geometry table.
- **CAUSE:** Spoken phrase “and the string containing four and two.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source rows stage` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal source row 3 as literal `"42"`; keep digits as string data, not numeric value.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No length-header protocol, sample encoded stream, decoder code, future comparisons before they are spoken.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Input strings remain unchanged; candidates reveal after hypothesis; no protocol revealed.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** BoardStringList (CREATE SHARED) and verified theme.ts; RoughLine/RoughBox only for chalk relation/focus; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “and the string containing four and two.” and prior authorized state visible. Future narration remains hidden. No length-header protocol, sample encoded stream, decoder code, future comparisons before they are spoken.
- **COLLISION CHECK:** Active zone source rows stage; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S02:A006 — Now suppose we simply join strings using a hash.

- **ANCHOR ID:** `S02:A006` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Now suppose we simply join strings using a hash.” (verbatim). Occurrence #6 in approved Scene 02 narration, in source order.
- **BEAT TYPE / PHASE:** AMBIGUOUS RAW JOIN.
- **WHAT APPEARS NOW:** Shift primary focus from master list to raw-hash-join hypothesis; existing list fades to support, don't show a valid protocol.
- **CENTER-STAGE HERO:** either four-row master input or ambiguity comparison, never both equal-weight; active zone: comparison stage; see geometry table.
- **CAUSE:** Spoken phrase “Now suppose we simply join strings using a hash.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `comparison stage` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Shift primary focus from master list to raw-hash-join hypothesis; existing list fades to support, don't show a valid protocol.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No length-header protocol, sample encoded stream, decoder code, future comparisons before they are spoken.
- **CLEANUP / EXIT:** Master input can dim/recede when hypothesis appears; positions for two comparison candidates become dominant; no black panels.
- **PERSISTENT STATE:** Input strings remain unchanged; candidates reveal after hypothesis; no protocol revealed.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** BoardStringList (CREATE SHARED) and verified theme.ts; RoughLine/RoughBox only for chalk relation/focus; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now suppose we simply join strings using a hash.” and prior authorized state visible. Future narration remains hidden. No length-header protocol, sample encoded stream, decoder code, future comparisons before they are spoken.
- **COLLISION CHECK:** Active zone comparison stage; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S02:A007 — Think about two different lists.

- **ANCHOR ID:** `S02:A007` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Think about two different lists.” (verbatim). Occurrence #7 in approved Scene 02 narration, in source order.
- **BEAT TYPE / PHASE:** AMBIGUOUS RAW JOIN.
- **WHAT APPEARS NOW:** Introduce a two-column *candidate inputs* comparison with reserved exact positions, both outputs still hidden.
- **CENTER-STAGE HERO:** either four-row master input or ambiguity comparison, never both equal-weight; active zone: comparison stage; see geometry table.
- **CAUSE:** Spoken phrase “Think about two different lists.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `comparison stage` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Introduce a two-column *candidate inputs* comparison with reserved exact positions, both outputs still hidden.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No length-header protocol, sample encoded stream, decoder code, future comparisons before they are spoken.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Input strings remain unchanged; candidates reveal after hypothesis; no protocol revealed.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** BoardStringList (CREATE SHARED) and verified theme.ts; RoughLine/RoughBox only for chalk relation/focus; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Think about two different lists.” and prior authorized state visible. Future narration remains hidden. No length-header protocol, sample encoded stream, decoder code, future comparisons before they are spoken.
- **COLLISION CHECK:** Active zone comparison stage; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S02:A008 — One contains ... A hash B ... and C.

- **ANCHOR ID:** `S02:A008` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “One contains ... A hash B ... and C.” (verbatim). Occurrence #8 in approved Scene 02 narration, in source order.
- **BEAT TYPE / PHASE:** AMBIGUOUS RAW JOIN.
- **WHAT APPEARS NOW:** Reveal left candidate `['a#b','c']` and mark hash inside first string as payload.
- **CENTER-STAGE HERO:** either four-row master input or ambiguity comparison, never both equal-weight; active zone: comparison stage; see geometry table.
- **CAUSE:** Spoken phrase “One contains ... A hash B ... and C.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `comparison stage` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal left candidate `['a#b','c']` and mark hash inside first string as payload.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No length-header protocol, sample encoded stream, decoder code, future comparisons before they are spoken.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Input strings remain unchanged; candidates reveal after hypothesis; no protocol revealed.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** BoardStringList (CREATE SHARED) and verified theme.ts; RoughLine/RoughBox only for chalk relation/focus; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “One contains ... A hash B ... and C.” and prior authorized state visible. Future narration remains hidden. No length-header protocol, sample encoded stream, decoder code, future comparisons before they are spoken.
- **COLLISION CHECK:** Active zone comparison stage; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S02:A009 — The other contains ... A ... B ... and C.

- **ANCHOR ID:** `S02:A009` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “The other contains ... A ... B ... and C.” (verbatim). Occurrence #9 in approved Scene 02 narration, in source order.
- **BEAT TYPE / PHASE:** AMBIGUOUS RAW JOIN.
- **WHAT APPEARS NOW:** Reveal right candidate `['a','b','c']` without asserting which input was original.
- **CENTER-STAGE HERO:** either four-row master input or ambiguity comparison, never both equal-weight; active zone: comparison stage; see geometry table.
- **CAUSE:** Spoken phrase “The other contains ... A ... B ... and C.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `comparison stage` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal right candidate `['a','b','c']` without asserting which input was original.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No length-header protocol, sample encoded stream, decoder code, future comparisons before they are spoken.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Input strings remain unchanged; candidates reveal after hypothesis; no protocol revealed.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** BoardStringList (CREATE SHARED) and verified theme.ts; RoughLine/RoughBox only for chalk relation/focus; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “The other contains ... A ... B ... and C.” and prior authorized state visible. Future narration remains hidden. No length-header protocol, sample encoded stream, decoder code, future comparisons before they are spoken.
- **COLLISION CHECK:** Active zone comparison stage; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S02:A010 — Both produce the same joined text.

- **ANCHOR ID:** `S02:A010` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Both produce the same joined text.” (verbatim). Occurrence #10 in approved Scene 02 narration, in source order.
- **BEAT TYPE / PHASE:** AMBIGUOUS RAW JOIN.
- **WHAT APPEARS NOW:** Draw causal arrows from both candidates to one shared destination location; no result text until next words.
- **CENTER-STAGE HERO:** either four-row master input or ambiguity comparison, never both equal-weight; active zone: comparison stage; see geometry table.
- **CAUSE:** Spoken phrase “Both produce the same joined text.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `comparison stage` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Draw causal arrows from both candidates to one shared destination location; no result text until next words.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No length-header protocol, sample encoded stream, decoder code, future comparisons before they are spoken.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Input strings remain unchanged; candidates reveal after hypothesis; no protocol revealed.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** BoardStringList (CREATE SHARED) and verified theme.ts; RoughLine/RoughBox only for chalk relation/focus; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Both produce the same joined text.” and prior authorized state visible. Future narration remains hidden. No length-header protocol, sample encoded stream, decoder code, future comparisons before they are spoken.
- **COLLISION CHECK:** Active zone comparison stage; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S02:A011 — A hash B hash C.

- **ANCHOR ID:** `S02:A011` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “A hash B hash C.” (verbatim). Occurrence #11 in approved Scene 02 narration, in source order.
- **BEAT TYPE / PHASE:** AMBIGUOUS RAW JOIN.
- **WHAT APPEARS NOW:** Write exactly `a#b#c` once at shared destination; arrows show BOTH inputs produce the identical text.
- **CENTER-STAGE HERO:** either four-row master input or ambiguity comparison, never both equal-weight; active zone: comparison stage; see geometry table.
- **CAUSE:** Spoken phrase “A hash B hash C.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `comparison stage` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Write exactly `a#b#c` once at shared destination; arrows show BOTH inputs produce the identical text.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No length-header protocol, sample encoded stream, decoder code, future comparisons before they are spoken.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Input strings remain unchanged; candidates reveal after hypothesis; no protocol revealed.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** BoardStringList (CREATE SHARED) and verified theme.ts; RoughLine/RoughBox only for chalk relation/focus; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “A hash B hash C.” and prior authorized state visible. Future narration remains hidden. No length-header protocol, sample encoded stream, decoder code, future comparisons before they are spoken.
- **COLLISION CHECK:** Active zone comparison stage; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S02:A012 — So how will the decoder know the original boundaries?

- **ANCHOR ID:** `S02:A012` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “So how will the decoder know the original boundaries?” (verbatim). Occurrence #12 in approved Scene 02 narration, in source order.
- **BEAT TYPE / PHASE:** AMBIGUOUS RAW JOIN.
- **WHAT APPEARS NOW:** Focus the identical output and apply a question mark to its boundaries; no guessed split markers.
- **CENTER-STAGE HERO:** either four-row master input or ambiguity comparison, never both equal-weight; active zone: comparison stage; see geometry table.
- **CAUSE:** Spoken phrase “So how will the decoder know the original boundaries?” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `comparison stage` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Focus the identical output and apply a question mark to its boundaries; no guessed split markers.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No length-header protocol, sample encoded stream, decoder code, future comparisons before they are spoken.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Input strings remain unchanged; candidates reveal after hypothesis; no protocol revealed.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** BoardStringList (CREATE SHARED) and verified theme.ts; RoughLine/RoughBox only for chalk relation/focus; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “So how will the decoder know the original boundaries?” and prior authorized state visible. Future narration remains hidden. No length-header protocol, sample encoded stream, decoder code, future comparisons before they are spoken.
- **COLLISION CHECK:** Active zone comparison stage; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S02:A013 — It cannot.

- **ANCHOR ID:** `S02:A013` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “It cannot.” (verbatim). Occurrence #13 in approved Scene 02 narration, in source order.
- **BEAT TYPE / PHASE:** AMBIGUOUS RAW JOIN.
- **WHAT APPEARS NOW:** Resolve the ambiguity visibly as `cannot distinguish` (not a computed algorithm output).
- **CENTER-STAGE HERO:** either four-row master input or ambiguity comparison, never both equal-weight; active zone: comparison stage; see geometry table.
- **CAUSE:** Spoken phrase “It cannot.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `comparison stage` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Resolve the ambiguity visibly as `cannot distinguish` (not a computed algorithm output).; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No length-header protocol, sample encoded stream, decoder code, future comparisons before they are spoken.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Input strings remain unchanged; candidates reveal after hypothesis; no protocol revealed.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** BoardStringList (CREATE SHARED) and verified theme.ts; RoughLine/RoughBox only for chalk relation/focus; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “It cannot.” and prior authorized state visible. Future narration remains hidden. No length-header protocol, sample encoded stream, decoder code, future comparisons before they are spoken.
- **COLLISION CHECK:** Active zone comparison stage; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S02:A014 — A raw separator is not enough.

- **ANCHOR ID:** `S02:A014` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “A raw separator is not enough.” (verbatim). Occurrence #14 in approved Scene 02 narration, in source order.
- **BEAT TYPE / PHASE:** AMBIGUOUS RAW JOIN.
- **WHAT APPEARS NOW:** Mark the raw separator hypothesis as invalid with a restrained `theme.warn` strike on the hypothesis label, not on payload text.
- **CENTER-STAGE HERO:** either four-row master input or ambiguity comparison, never both equal-weight; active zone: comparison stage; see geometry table.
- **CAUSE:** Spoken phrase “A raw separator is not enough.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `comparison stage` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Mark the raw separator hypothesis as invalid with a restrained `theme.warn` strike on the hypothesis label, not on payload text.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No length-header protocol, sample encoded stream, decoder code, future comparisons before they are spoken.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Input strings remain unchanged; candidates reveal after hypothesis; no protocol revealed.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** BoardStringList (CREATE SHARED) and verified theme.ts; RoughLine/RoughBox only for chalk relation/focus; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “A raw separator is not enough.” and prior authorized state visible. Future narration remains hidden. No length-header protocol, sample encoded stream, decoder code, future comparisons before they are spoken.
- **COLLISION CHECK:** Active zone comparison stage; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S02:A015 — We need explicit boundary information.

- **ANCHOR ID:** `S02:A015` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “We need explicit boundary information.” (verbatim). Occurrence #15 in approved Scene 02 narration, in source order.
- **BEAT TYPE / PHASE:** AMBIGUOUS RAW JOIN.
- **WHAT APPEARS NOW:** Replace invalid-join focus with large bottom takeaway `Need explicit boundary information`; DO NOT reveal `length#payload` yet.
- **CENTER-STAGE HERO:** either four-row master input or ambiguity comparison, never both equal-weight; active zone: comparison stage; see geometry table.
- **CAUSE:** Spoken phrase “We need explicit boundary information.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `comparison stage` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Replace invalid-join focus with large bottom takeaway `Need explicit boundary information`; DO NOT reveal `length#payload` yet.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No length-header protocol, sample encoded stream, decoder code, future comparisons before they are spoken.
- **CLEANUP / EXIT:** Prepare scene transition only after spoken exit; no timing guessed; keep conceptual handoff item intact.
- **PERSISTENT STATE:** Input strings remain unchanged; candidates reveal after hypothesis; no protocol revealed.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** BoardStringList (CREATE SHARED) and verified theme.ts; RoughLine/RoughBox only for chalk relation/focus; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “We need explicit boundary information.” and prior authorized state visible. Future narration remains hidden. No length-header protocol, sample encoded stream, decoder code, future comparisons before they are spoken.
- **COLLISION CHECK:** Active zone comparison stage; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

## Critical semantic checkpoints — **NOT guessed frame numbers**

- **entry: board with 4-source-row placeholders**
- **after A005: all four strings visible, empty is real value**
- **A008–A011: two different candidate inputs, same single output**
- **A012–A015: ambiguity known, raw join rejected, no length-prefix spoiler**

## Audit gate distinction

**This file is a Gate A pre-audio semantic plan.** Automated check report is adjacent as `Scene02_Audit.md`. Gate B cannot be completed before the actual MP3 + exact word-sync. DO NOT claim final 100/100 or rendered-frame correctness. Rendering and font-metric collision audit must be done after implementation.

**Word identity handoff:** later resolve `S02:A001..A015` to stable source word indices `Scene02:Wxxxx`, with start/end edges and end-exclusive `[startFrame,endFrameExclusive)`; use validated sync FPS/duration, never assumed FPS.
