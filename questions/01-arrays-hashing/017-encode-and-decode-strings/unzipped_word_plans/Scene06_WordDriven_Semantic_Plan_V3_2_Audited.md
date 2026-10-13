# Q17 — Scene 06: Full Decode Trace

**Gate A / Pre-Audio Semantic Word-Driven Plan — V3.2 Board-Native**  
**Draft → audit → fix → re-audit workflow:** source exact phrases, no guessed frame timing.  
**Exact timing status:** `PENDING final ElevenLabs MP3 + validated exact word-sync JSON`; therefore exact `Wxxxx`, frame ranges, FPS, and pause durations **MUST NOT be fabricated**.

## Scene contract

```text
SCENE: 06
QUESTION: Q17 — Encode and Decode Strings (LeetCode 271)
BEAT TYPE: Full Decode Trace (TRACE — exhaustive)
SCRIPT SOURCE: Q17_Encode_Decode_Strings_Final_ElevenLabs_Narration.md
ALGORITHM TRACE SOURCE: verified source code target + original approved exact-script trace where applicable
AUDIO FILE: PENDING final MP3
SYNC FILE: PENDING validated word sync
FPS: PENDING sync
TOTAL FRAMES: PENDING sync
PEDAGOGICAL GOAL: 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes
TRACE STEP IDS: Q17/DEC/..., 4 records
DATA STRUCTURE: indexed encoded tape / decoder variables / decoded result
PRIMARY HERO: 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes
SUPPORT LEFT: See fixed geometry table
SUPPORT RIGHT: See fixed geometry table
REUSE: theme.ts / RoughLine / RoughBox / Captions
EXTEND: N/A
CREATE SHARED: IndexedCharacterTape / BoardStringList
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
| scene label | 65 | 27 | 1770 | 85 | chalk |
| character tape 0..12 | 135 | 172 | 1650 | 165 | hero |
| character tape 13..24 | 135 | 350 | 1650 | 165 | hero |
| state variables rail | 125 | 555 | 470 | 355 | state |
| slice/math explanation | 625 | 560 | 600 | 330 | calculation |
| decoded result list | 1270 | 555 | 540 | 350 | output |

**Tape specific physical geometry:** 25 logical character cells in **two visual rows**, not two logical records. Row A indices 0..12: cells x185+index×118, row y240, cells 100×76px. Row B indices 13..24: cells x185+(index−13)×118, row y418, cells 100×76px. Index labels 22–26px above each row. Highlight/pointer overlay is fixed-position and never inserts layout children. `end=25` is a **boundary after cell 24**, not a cell. Space at global index15 is a visible whitespace cell (e.g. a restrained `·` accessibility guide outside the actual payload glyph rendering) and must remain one character.

**Global collision envelope:** title/label y28..120; hero y165..925; captions y960..1040. No teaching text or arrows may enter caption band. Coordinates are 1920×1080 nominal scene units, not guesses for time or FPS. Layout alternatives visible in different speech phases may reuse stage area; do not show them simultaneously.

## Current kit truth / usage and component lifecycle

| Component | Verified path / intended addition | Current actual API / planned API | Decision |
|---|---|---|---|
| theme.ts | `kit/lib/theme.ts` | theme.boardBg, theme.chalkText, theme.chalkDim, theme.pivot, theme.cyan, theme.good, theme.warn, theme.purple; fonts.hand/mono/code | **REUSE** |
| RoughLine | `kit/components/RoughLine.tsx` | shape:{kind:"line"/"arrow"/"circle", coordinates}; width,height,startFrame?,durationInFrames?,stroke?,strokeWidth?,seed? | **REUSE** |
| RoughBox | `kit/components/RoughBox.tsx` | width,height,startFrame?,durationInFrames?,stroke?,fill?,seed?,strokeWidth?,roughness?; omit fill for transparent outline | **REUSE** |
| Captions | `kit/components/Captions.tsx` | words:{word,start,end}[], fps?,bottom?,fontSize?,maxWords?,maxWidth? (ONLY post-sync, pass exact fps) | **POST-SYNC REUSE** |
| IndexedCharacterTape | `NEW SHARED (proposed; NO verified file path)` | two visual rows but one logical global index line, fixed indices 0..24, selectable half-open global intervals including exclusive index 25 edge, two-pointer focus without geometry reflow; proposed shared reusable component, not verified existing | **CREATE SHARED** |
| BoardStringList | `NEW SHARED (proposed; NO verified file path)` | fixed logical row identities, string/empty distinctions, per-row focus and stable per-row lengths; render directly on board; proposed shared reusable component, not verified existing | **CREATE SHARED** |

**Per-component lifecycle:** scene label and theme text enter only with their spoken concept; `Captions` consumes final words+FPS **after sync**; teaching source structures enter at the first introduction and retain spatial identity; temporary calculations/cursors enter on their matching anchors and clear at the next authorized step or scene exit; no future data pre-rendered visible. Components marked **CREATE SHARED** do not exist as verified imports yet—implementation must create them at an agreed `kit` path and check actual API before using. No question-local duplicate component.

## Algorithm / mathematical truth manifest

| Record | `i` header start | `j` header # | Parsed len | `start` | `end` exclusive | Slice | Append anchor | `i=end` anchor |
|---:|---:|---:|---:|---:|---:|---|---|---|
| 1 | 0 | 1 | 3 | 2 | 5 | `a#b` | S06:A032 | S06:A034 |
| 2 | 5 | 6 | 0 | 7 | 7 | `` | S06:A049 | S06:A051 |
| 3 | 7 | 9 | 11 | 10 | 21 | `hello world` | S06:A075 | S06:A076 |
| 4 | 21 | 22 | 2 | 23 | 25 | `42` | S06:A093 | S06:A094 |

**25 character index authority:** `0=3, 1=#, 2=a, 3=#, 4=b, 5=0, 6=#, 7=1, 8=1, 9=#, 10=h, 11=e, 12=l, 13=l, 14=o, 15=SPACE, 16=w, 17=o, 18=r, 19=l, 20=d, 21=2, 22=#, 23=4, 24=2`. The visual row break **12→13** is NOT part of the encoded string. `i=25` is end-exclusive after the final value. All 4 output rows retain their logical identity even if empty.

## Scene-specific semantic and spatial behavior

- **One dominant visual:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes. Secondary state is small but readable; no UI cards; board itself is surface.
- **Reading direction:** indexed global tape → parse header with i/j → exact half-open payload slice → decoded result → i=end.
- **No-spoiler rule:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **Scene-type discipline:** Exhaustively cover all operations and exact state updates. Never skip input/lookup/move/slice/append/accumulator state.
- **Audio causal gating:** each exact spoken phrase below is a sequential semantic trigger, not an assumed frame allocation. Holds only from validated MP3/sync.
- **Fixed layout:** reserve positions even while a component is hidden; do not let future rows shift existing words or characters.

## Exact narration phrase → semantic animation anchors (source order)

### S06:A001 — We have our complete encoded string.

- **ANCHOR ID:** `S06:A001` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “We have our complete encoded string.” (verbatim). Occurrence #1 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** TAPE + STATE INITIALIZATION.
- **WHAT APPEARS NOW:** Reveal full fixed 25-character encoded tape `3#a#b0#11#hello world2#42` with global indices 0..24; decoded outputs hidden.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “We have our complete encoded string.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `tape + state rail` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal full fixed 25-character encoded tape `3#a#b0#11#hello world2#42` with global indices 0..24; decoded outputs hidden.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/TAPE_+_STATE_INITIALIZATION/A001`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “We have our complete encoded string.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A002 — Start with an empty result list.

- **ANCHOR ID:** `S06:A002` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Start with an empty result list.” (verbatim). Occurrence #2 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** TAPE + STATE INITIALIZATION.
- **WHAT APPEARS NOW:** Initialize decoded-result lane to visibly empty list `[]`; not output `""`.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: calculation x625..1225 y560..890.
- **CAUSE:** Spoken phrase “Start with an empty result list.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `tape + state rail` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Initialize decoded-result lane to visibly empty list `[]`; not output `""`.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/TAPE_+_STATE_INITIALIZATION/A002`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / COUNT_UPDATE only after spoken state, then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Start with an empty result list.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone calculation x625..1225 y560..890; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A003 — And set `i` to zero.

- **ANCHOR ID:** `S06:A003` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “And set `i` to zero.” (verbatim). Occurrence #3 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** TAPE + STATE INITIALIZATION.
- **WHAT APPEARS NOW:** Initialize `i = 0` in stable state rail; no fake j move yet.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “And set `i` to zero.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `tape + state rail` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Initialize `i = 0` in stable state rail; no fake j move yet.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/TAPE_+_STATE_INITIALIZATION/A003`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / COUNT_UPDATE only after spoken state, then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “And set `i` to zero.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A004 — Remember ...

- **ANCHOR ID:** `S06:A004` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Remember ...” (verbatim). Occurrence #4 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** TAPE + STATE INITIALIZATION.
- **WHAT APPEARS NOW:** Pause semantic focus on i's index invariant; no new mutation.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: calculation x625..1225 y560..890.
- **CAUSE:** Spoken phrase “Remember ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `tape + state rail` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Pause semantic focus on i's index invariant; no new mutation.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/TAPE_+_STATE_INITIALIZATION/A004`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Remember ...” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone calculation x625..1225 y560..890; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A005 — `i` always points to the beginning of the next length header.

- **ANCHOR ID:** `S06:A005` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “`i` always points to the beginning of the next length header.” (verbatim). Occurrence #5 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** TAPE + STATE INITIALIZATION.
- **WHAT APPEARS NOW:** State chalk invariant `i → first digit of next length header` beside pointer state.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “`i` always points to the beginning of the next length header.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `tape + state rail` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. State chalk invariant `i → first digit of next length header` beside pointer state.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/TAPE_+_STATE_INITIALIZATION/A005`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “`i` always points to the beginning of the next length header.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A006 — Let's decode the first record.

- **ANCHOR ID:** `S06:A006` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Let's decode the first record.” (verbatim). Occurrence #6 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 1.
- **WHAT APPEARS NOW:** Focus first record header at global index 0; no payload advance.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Let's decode the first record.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Focus first record header at global index 0; no payload advance.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_1/A006`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Let's decode the first record.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A007 — Right now ...

- **ANCHOR ID:** `S06:A007` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Right now ...” (verbatim). Occurrence #7 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 1.
- **WHAT APPEARS NOW:** Focus current i state without changing it.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: calculation x625..1225 y560..890.
- **CAUSE:** Spoken phrase “Right now ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus current i state without changing it.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_1/A007`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Right now ...” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone calculation x625..1225 y560..890; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A008 — `i` is zero.

- **ANCHOR ID:** `S06:A008` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “`i` is zero.” (verbatim). Occurrence #8 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 1.
- **WHAT APPEARS NOW:** Confirm `i = 0`; index-0 cell receives pointer highlight.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “`i` is zero.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Confirm `i = 0`; index-0 cell receives pointer highlight.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_1/A008`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “`i` is zero.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A009 — Set `j` to the same position.

- **ANCHOR ID:** `S06:A009` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Set `j` to the same position.” (verbatim). Occurrence #9 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 1.
- **WHAT APPEARS NOW:** Initialize `j = i = 0`, separate lane/color and no tape reflow.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “Set `j` to the same position.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Initialize `j = i = 0`, separate lane/color and no tape reflow.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_1/A009`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / COUNT_UPDATE only after spoken state, then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Set `j` to the same position.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A010 — Move `j` forward until we find the header hash.

- **ANCHOR ID:** `S06:A010` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Move `j` forward until we find the header hash.” (verbatim). Occurrence #10 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 1.
- **WHAT APPEARS NOW:** Start header scan `j` toward first `#`, never skip digit comparison.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Move `j` forward until we find the header hash.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Start header scan `j` toward first `#`, never skip digit comparison.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_1/A010`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** QUERY → POINTER_MOVE → SETTLE; one pointer at a time; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Move `j` forward until we find the header hash.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A011 — At index zero ... we have the digit three.

- **ANCHOR ID:** `S06:A011` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “At index zero ... we have the digit three.” (verbatim). Occurrence #11 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 1.
- **WHAT APPEARS NOW:** At cell 0, read `3` as header digit; j stays at 0 until next authorized move.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “At index zero ... we have the digit three.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. At cell 0, read `3` as header digit; j stays at 0 until next authorized move.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_1/A011`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “At index zero ... we have the digit three.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A012 — At index one ... we find the hash.

- **ANCHOR ID:** `S06:A012` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “At index one ... we find the hash.” (verbatim). Occurrence #12 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 1.
- **WHAT APPEARS NOW:** Advance j to 1; test cell1 `#` as header terminator.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “At index one ... we find the hash.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Advance j to 1; test cell1 `#` as header terminator.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_1/A012`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** QUERY → POINTER_MOVE → SETTLE; one pointer at a time; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “At index one ... we find the hash.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A013 — Stop there.

- **ANCHOR ID:** `S06:A013` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Stop there.” (verbatim). Occurrence #13 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 1.
- **WHAT APPEARS NOW:** Stop j at 1; scanning ends here, do not touch payload hash at 3.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Stop there.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Stop j at 1; scanning ends here, do not touch payload hash at 3.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_1/A013`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Stop there.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A014 — So the length text is three.

- **ANCHOR ID:** `S06:A014` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “So the length text is three.” (verbatim). Occurrence #14 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 1.
- **WHAT APPEARS NOW:** Focus header substring `[0,1)` = `"3"` on tape.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “So the length text is three.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus header substring `[0,1)` = `"3"` on tape.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_1/A014`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “So the length text is three.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A015 — Convert it to a number.

- **ANCHOR ID:** `S06:A015` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Convert it to a number.” (verbatim). Occurrence #15 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 1.
- **WHAT APPEARS NOW:** Convert text length `"3"` to numeric 3 in calculation stage.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: calculation x625..1225 y560..890.
- **CAUSE:** Spoken phrase “Convert it to a number.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Convert text length `"3"` to numeric 3 in calculation stage.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_1/A015`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Convert it to a number.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone calculation x625..1225 y560..890; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A016 — Length equals three.

- **ANCHOR ID:** `S06:A016` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Length equals three.” (verbatim). Occurrence #16 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 1.
- **WHAT APPEARS NOW:** Set stable `length = 3` after conversion is resolved.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “Length equals three.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Set stable `length = 3` after conversion is resolved.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_1/A016`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / COUNT_UPDATE only after spoken state, then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Length equals three.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A017 — Now the payload begins immediately after the hash.

- **ANCHOR ID:** `S06:A017` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Now the payload begins immediately after the hash.” (verbatim). Occurrence #17 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 1.
- **WHAT APPEARS NOW:** Focus location immediately after header hash at cell2.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Now the payload begins immediately after the hash.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus location immediately after header hash at cell2.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_1/A017`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now the payload begins immediately after the hash.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A018 — So start is two.

- **ANCHOR ID:** `S06:A018` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “So start is two.” (verbatim). Occurrence #18 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 1.
- **WHAT APPEARS NOW:** Set `start = j + 1 = 2` in state rail.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “So start is two.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Set `start = j + 1 = 2` in state rail.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_1/A018`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / COUNT_UPDATE only after spoken state, then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “So start is two.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A019 — End is start plus length.

- **ANCHOR ID:** `S06:A019` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “End is start plus length.” (verbatim). Occurrence #19 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 1.
- **WHAT APPEARS NOW:** Write `end = start + length` in calculation area, no result yet.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: calculation x625..1225 y560..890.
- **CAUSE:** Spoken phrase “End is start plus length.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Write `end = start + length` in calculation area, no result yet.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_1/A019`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “End is start plus length.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone calculation x625..1225 y560..890; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A020 — Two plus three ...

- **ANCHOR ID:** `S06:A020` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Two plus three ...” (verbatim). Occurrence #20 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 1.
- **WHAT APPEARS NOW:** Resolve operands `2 + 3` in calculation stage.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: calculation x625..1225 y560..890.
- **CAUSE:** Spoken phrase “Two plus three ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Resolve operands `2 + 3` in calculation stage.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_1/A020`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Two plus three ...” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone calculation x625..1225 y560..890; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A021 — equals five.

- **ANCHOR ID:** `S06:A021` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “equals five.” (verbatim). Occurrence #21 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 1.
- **WHAT APPEARS NOW:** Set `end = 5` as exclusive boundary; no index-5 payload claim.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “equals five.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Set `end = 5` as exclusive boundary; no index-5 payload claim.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_1/A021`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / COUNT_UPDATE only after spoken state, then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “equals five.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A022 — Now read the characters from index two ...

- **ANCHOR ID:** `S06:A022` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Now read the characters from index two ...” (verbatim). Occurrence #22 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 1.
- **WHAT APPEARS NOW:** Open payload selection at cell2, no append yet.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Now read the characters from index two ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Open payload selection at cell2, no append yet.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_1/A022`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now read the characters from index two ...” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A023 — up to, but not including, index five.

- **ANCHOR ID:** `S06:A023` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “up to, but not including, index five.” (verbatim). Occurrence #23 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 1.
- **WHAT APPEARS NOW:** Draw `[2,5)` bracket with exclusive endpoint between cells4/5.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “up to, but not including, index five.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Draw `[2,5)` bracket with exclusive endpoint between cells4/5.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_1/A023`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “up to, but not including, index five.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A024 — At index two ... A.

- **ANCHOR ID:** `S06:A024` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “At index two ... A.” (verbatim). Occurrence #24 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 1.
- **WHAT APPEARS NOW:** Read literal `a` at global index2; highlight only cell2.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “At index two ... A.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Read literal `a` at global index2; highlight only cell2.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_1/A024`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “At index two ... A.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A025 — At index three ... hash.

- **ANCHOR ID:** `S06:A025` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “At index three ... hash.” (verbatim). Occurrence #25 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 1.
- **WHAT APPEARS NOW:** Read literal `#` at global index3 as payload, no header scan restart.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “At index three ... hash.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Read literal `#` at global index3 as payload, no header scan restart.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_1/A025`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** QUERY → POINTER_MOVE → SETTLE; one pointer at a time; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “At index three ... hash.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A026 — At index four ... B.

- **ANCHOR ID:** `S06:A026` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “At index four ... B.” (verbatim). Occurrence #26 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 1.
- **WHAT APPEARS NOW:** Read literal `b` at global index4.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “At index four ... B.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Read literal `b` at global index4.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_1/A026`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “At index four ... B.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A027 — Together ...

- **ANCHOR ID:** `S06:A027` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Together ...” (verbatim). Occurrence #27 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 1.
- **WHAT APPEARS NOW:** Focus completed three-character payload slice; don't append before phrase.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Together ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Focus completed three-character payload slice; don't append before phrase.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_1/A027`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Together ...” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A028 — A hash B.

- **ANCHOR ID:** `S06:A028` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “A hash B.” (verbatim). Occurrence #28 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 1.
- **WHAT APPEARS NOW:** Assemble slice text `"a#b"` from cells2,3,4 directly on board.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “A hash B.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Assemble slice text `"a#b"` from cells2,3,4 directly on board.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_1/A028`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “A hash B.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A029 — Notice ...

- **ANCHOR ID:** `S06:A029` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Notice ...” (verbatim). Occurrence #29 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 1.
- **WHAT APPEARS NOW:** Move attention back to interior hash in payload, already part of slice.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: calculation x625..1225 y560..890.
- **CAUSE:** Spoken phrase “Notice ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Move attention back to interior hash in payload, already part of slice.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_1/A029`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Notice ...” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone calculation x625..1225 y560..890; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A030 — we did not treat the hash inside the payload as a separator.

- **ANCHOR ID:** `S06:A030` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “we did not treat the hash inside the payload as a separator.” (verbatim). Occurrence #30 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 1.
- **WHAT APPEARS NOW:** Emphasize that cell3 hash was not an additional header terminator.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: calculation x625..1225 y560..890.
- **CAUSE:** Spoken phrase “we did not treat the hash inside the payload as a separator.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Emphasize that cell3 hash was not an additional header terminator.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_1/A030`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “we did not treat the hash inside the payload as a separator.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone calculation x625..1225 y560..890; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A031 — We simply read three characters.

- **ANCHOR ID:** `S06:A031` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “We simply read three characters.” (verbatim). Occurrence #31 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 1.
- **WHAT APPEARS NOW:** Confirm exactly 3 chars consumed, endpoint index5 remains exclusive.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: calculation x625..1225 y560..890.
- **CAUSE:** Spoken phrase “We simply read three characters.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Confirm exactly 3 chars consumed, endpoint index5 remains exclusive.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_1/A031`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “We simply read three characters.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone calculation x625..1225 y560..890; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A032 — Append A hash B to our result list.

- **ANCHOR ID:** `S06:A032` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Append A hash B to our result list.” (verbatim). Occurrence #32 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 1.
- **WHAT APPEARS NOW:** Append decoded string `"a#b"` to output list as first element.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “Append A hash B to our result list.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Append decoded string `"a#b"` to output list as first element.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_1/A032`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Append A hash B to our result list.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A033 — Now move `i` to end.

- **ANCHOR ID:** `S06:A033` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Now move `i` to end.” (verbatim). Occurrence #33 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 1.
- **WHAT APPEARS NOW:** Prepare i mutation only, other variables persist until updated.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “Now move `i` to end.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Prepare i mutation only, other variables persist until updated.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_1/A033`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now move `i` to end.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A034 — So `i` becomes five.

- **ANCHOR ID:** `S06:A034` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “So `i` becomes five.” (verbatim). Occurrence #34 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 1.
- **WHAT APPEARS NOW:** Set `i = end = 5`; pointer jumps from header0 to next header5.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “So `i` becomes five.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Set `i = end = 5`; pointer jumps from header0 to next header5.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=5; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_1/A034`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** QUERY → POINTER_MOVE → SETTLE; one pointer at a time; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “So `i` becomes five.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A035 — We have finished the first record.

- **ANCHOR ID:** `S06:A035` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “We have finished the first record.” (verbatim). Occurrence #35 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 1.
- **WHAT APPEARS NOW:** Mark first record complete; output list now one item.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “We have finished the first record.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Mark first record complete; output list now one item.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=5; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_1/A035`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “We have finished the first record.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A036 — And `i` is exactly at the next length header.

- **ANCHOR ID:** `S06:A036` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “And `i` is exactly at the next length header.” (verbatim). Occurrence #36 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 1.
- **WHAT APPEARS NOW:** Highlight i at next header5 to restore invariant.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “And `i` is exactly at the next length header.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Highlight i at next header5 to restore invariant.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear prior record query/slice focus, keep committed result and i boundary; next record begins only when announced.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=5; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_1/A036`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “And `i` is exactly at the next length header.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A037 — Now the second record.

- **ANCHOR ID:** `S06:A037` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Now the second record.” (verbatim). Occurrence #37 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 2.
- **WHAT APPEARS NOW:** Select second record at index5; prior decoded item persists.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Now the second record.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Select second record at index5; prior decoded item persists.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=5; active record 2 source header=5, header stop j=6, length=0, payload=[7,7); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_2/A037`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now the second record.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A038 — `i` is five.

- **ANCHOR ID:** `S06:A038` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “`i` is five.” (verbatim). Occurrence #38 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 2.
- **WHAT APPEARS NOW:** Confirm `i = 5` without moving it early.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “`i` is five.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Confirm `i = 5` without moving it early.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=5; active record 2 source header=5, header stop j=6, length=0, payload=[7,7); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_2/A038`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “`i` is five.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A039 — Set `j` to five.

- **ANCHOR ID:** `S06:A039` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Set `j` to five.” (verbatim). Occurrence #39 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 2.
- **WHAT APPEARS NOW:** Initialize `j = 5` over same header digit.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “Set `j` to five.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Initialize `j = 5` over same header digit.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=5; active record 2 source header=5, header stop j=6, length=0, payload=[7,7); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_2/A039`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / COUNT_UPDATE only after spoken state, then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Set `j` to five.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A040 — At index five ... we have zero.

- **ANCHOR ID:** `S06:A040` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “At index five ... we have zero.” (verbatim). Occurrence #40 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 2.
- **WHAT APPEARS NOW:** Read digit `0` at cell5 as header text.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “At index five ... we have zero.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Read digit `0` at cell5 as header text.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=5; active record 2 source header=5, header stop j=6, length=0, payload=[7,7); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_2/A040`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “At index five ... we have zero.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A041 — At index six ... we find the header hash.

- **ANCHOR ID:** `S06:A041` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “At index six ... we find the header hash.” (verbatim). Occurrence #41 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 2.
- **WHAT APPEARS NOW:** Move j to cell6; identify that hash as header terminator.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “At index six ... we find the header hash.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Move j to cell6; identify that hash as header terminator.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=5; active record 2 source header=5, header stop j=6, length=0, payload=[7,7); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_2/A041`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** QUERY → POINTER_MOVE → SETTLE; one pointer at a time; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “At index six ... we find the header hash.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A042 — So the length is zero.

- **ANCHOR ID:** `S06:A042` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “So the length is zero.” (verbatim). Occurrence #42 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 2.
- **WHAT APPEARS NOW:** Set length numeric 0.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “So the length is zero.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Set length numeric 0.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=5; active record 2 source header=5, header stop j=6, length=0, payload=[7,7); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_2/A042`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / COUNT_UPDATE only after spoken state, then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “So the length is zero.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A043 — The payload starts immediately after the hash ...

- **ANCHOR ID:** `S06:A043` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “The payload starts immediately after the hash ...” (verbatim). Occurrence #43 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 2.
- **WHAT APPEARS NOW:** Highlight first position after hash, at index7.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “The payload starts immediately after the hash ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Highlight first position after hash, at index7.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=5; active record 2 source header=5, header stop j=6, length=0, payload=[7,7); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_2/A043`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “The payload starts immediately after the hash ...” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A044 — at index seven.

- **ANCHOR ID:** `S06:A044` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “at index seven.” (verbatim). Occurrence #44 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 2.
- **WHAT APPEARS NOW:** Set `start = 7`; state rail updates in place.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “at index seven.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Set `start = 7`; state rail updates in place.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=5; active record 2 source header=5, header stop j=6, length=0, payload=[7,7); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_2/A044`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / COUNT_UPDATE only after spoken state, then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “at index seven.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A045 — And end is start plus zero.

- **ANCHOR ID:** `S06:A045` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “And end is start plus zero.” (verbatim). Occurrence #45 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 2.
- **WHAT APPEARS NOW:** Build `end = start + 0` without expanding payload.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: calculation x625..1225 y560..890.
- **CAUSE:** Spoken phrase “And end is start plus zero.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Build `end = start + 0` without expanding payload.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=5; active record 2 source header=5, header stop j=6, length=0, payload=[7,7); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_2/A045`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “And end is start plus zero.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone calculation x625..1225 y560..890; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A046 — So end is also seven.

- **ANCHOR ID:** `S06:A046` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “So end is also seven.” (verbatim). Occurrence #46 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 2.
- **WHAT APPEARS NOW:** Resolve `end = 7`; exclusive empty interval.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “So end is also seven.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Resolve `end = 7`; exclusive empty interval.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=5; active record 2 source header=5, header stop j=6, length=0, payload=[7,7); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_2/A046`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “So end is also seven.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A047 — Start and end are the same.

- **ANCHOR ID:** `S06:A047` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Start and end are the same.” (verbatim). Occurrence #47 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 2.
- **WHAT APPEARS NOW:** Show `[7,7)` zero-width payload bracket at boundary; no character selected.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Start and end are the same.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Show `[7,7)` zero-width payload bracket at boundary; no character selected.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=5; active record 2 source header=5, header stop j=6, length=0, payload=[7,7); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_2/A047`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Start and end are the same.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A048 — That means the payload is empty.

- **ANCHOR ID:** `S06:A048` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “That means the payload is empty.” (verbatim). Occurrence #48 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 2.
- **WHAT APPEARS NOW:** Resolve payload as literal empty string `""` (NOT missing output).
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: calculation x625..1225 y560..890.
- **CAUSE:** Spoken phrase “That means the payload is empty.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Resolve payload as literal empty string `""` (NOT missing output).; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=5; active record 2 source header=5, header stop j=6, length=0, payload=[7,7); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_2/A048`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “That means the payload is empty.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone calculation x625..1225 y560..890; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A049 — But we still append an empty string to our result.

- **ANCHOR ID:** `S06:A049` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “But we still append an empty string to our result.” (verbatim). Occurrence #49 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 2.
- **WHAT APPEARS NOW:** Append `""` to result list in second slot, preserving emptiness.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “But we still append an empty string to our result.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Append `""` to result list in second slot, preserving emptiness.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=5; active record 2 source header=5, header stop j=6, length=0, payload=[7,7); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_2/A049`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “But we still append an empty string to our result.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A050 — We must not skip it.

- **ANCHOR ID:** `S06:A050` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “We must not skip it.” (verbatim). Occurrence #50 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 2.
- **WHAT APPEARS NOW:** Emphasize this output slot exists, not skipped.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “We must not skip it.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Emphasize this output slot exists, not skipped.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=5; active record 2 source header=5, header stop j=6, length=0, payload=[7,7); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_2/A050`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “We must not skip it.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A051 — Now set `i` to seven.

- **ANCHOR ID:** `S06:A051` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Now set `i` to seven.” (verbatim). Occurrence #51 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 2.
- **WHAT APPEARS NOW:** Set `i = 7`; points to third header.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “Now set `i` to seven.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Set `i = 7`; points to third header.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 2 source header=5, header stop j=6, length=0, payload=[7,7); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_2/A051`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** QUERY → POINTER_MOVE → SETTLE; one pointer at a time; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now set `i` to seven.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A052 — Second record complete.

- **ANCHOR ID:** `S06:A052` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Second record complete.” (verbatim). Occurrence #52 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 2.
- **WHAT APPEARS NOW:** Mark second record complete; two decoded items persist.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “Second record complete.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Mark second record complete; two decoded items persist.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear prior record query/slice focus, keep committed result and i boundary; next record begins only when announced.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 2 source header=5, header stop j=6, length=0, payload=[7,7); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_2/A052`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Second record complete.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A053 — Next record.

- **ANCHOR ID:** `S06:A053` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Next record.” (verbatim). Occurrence #53 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 3.
- **WHAT APPEARS NOW:** Focus third record header index7, no future result leak.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Next record.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus third record header index7, no future result leak.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_3/A053`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Next record.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A054 — `i` is seven.

- **ANCHOR ID:** `S06:A054` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “`i` is seven.” (verbatim). Occurrence #54 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 3.
- **WHAT APPEARS NOW:** Confirm `i = 7`.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “`i` is seven.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Confirm `i = 7`.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_3/A054`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “`i` is seven.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A055 — Set `j` to seven.

- **ANCHOR ID:** `S06:A055` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Set `j` to seven.” (verbatim). Occurrence #55 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 3.
- **WHAT APPEARS NOW:** Set `j = 7`; header scan starts here.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “Set `j` to seven.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Set `j = 7`; header scan starts here.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_3/A055`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** QUERY → POINTER_MOVE → SETTLE; one pointer at a time; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Set `j` to seven.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A056 — At index seven ... the first digit is one.

- **ANCHOR ID:** `S06:A056` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “At index seven ... the first digit is one.” (verbatim). Occurrence #56 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 3.
- **WHAT APPEARS NOW:** Read first header digit `1` at cell7.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “At index seven ... the first digit is one.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Read first header digit `1` at cell7.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_3/A056`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “At index seven ... the first digit is one.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A057 — Move forward.

- **ANCHOR ID:** `S06:A057` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Move forward.” (verbatim). Occurrence #57 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 3.
- **WHAT APPEARS NOW:** Advance `j` to index8 as distinct comparison/move.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Move forward.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Advance `j` to index8 as distinct comparison/move.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_3/A057`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Move forward.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A058 — At index eight ... another one.

- **ANCHOR ID:** `S06:A058` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “At index eight ... another one.” (verbatim). Occurrence #58 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 3.
- **WHAT APPEARS NOW:** Read second header digit `1` at cell8; do not stop at first digit.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “At index eight ... another one.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Read second header digit `1` at cell8; do not stop at first digit.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_3/A058`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “At index eight ... another one.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A059 — Move forward again.

- **ANCHOR ID:** `S06:A059` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Move forward again.” (verbatim). Occurrence #59 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 3.
- **WHAT APPEARS NOW:** Advance `j` to index9 as distinct comparison/move.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Move forward again.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Advance `j` to index9 as distinct comparison/move.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_3/A059`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Move forward again.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A060 — At index nine ... we find the hash.

- **ANCHOR ID:** `S06:A060` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “At index nine ... we find the hash.” (verbatim). Occurrence #60 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 3.
- **WHAT APPEARS NOW:** Read `#` at index9 and stop header scan.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “At index nine ... we find the hash.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Read `#` at index9 and stop header scan.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_3/A060`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** QUERY → POINTER_MOVE → SETTLE; one pointer at a time; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “At index nine ... we find the hash.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A061 — So our length header contains two digits.

- **ANCHOR ID:** `S06:A061` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “So our length header contains two digits.” (verbatim). Occurrence #61 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 3.
- **WHAT APPEARS NOW:** Focus header span `[7,9)` with both digits.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “So our length header contains two digits.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus header span `[7,9)` with both digits.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_3/A061`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “So our length header contains two digits.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A062 — One one.

- **ANCHOR ID:** `S06:A062` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “One one.” (verbatim). Occurrence #62 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 3.
- **WHAT APPEARS NOW:** Read `11` as two-digit header text.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “One one.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Read `11` as two-digit header text.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_3/A062`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “One one.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A063 — Convert it to an integer.

- **ANCHOR ID:** `S06:A063` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Convert it to an integer.” (verbatim). Occurrence #63 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 3.
- **WHAT APPEARS NOW:** Convert text `"11"` into integer length value.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “Convert it to an integer.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Convert text `"11"` into integer length value.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_3/A063`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Convert it to an integer.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A064 — Length is eleven.

- **ANCHOR ID:** `S06:A064` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Length is eleven.” (verbatim). Occurrence #64 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 3.
- **WHAT APPEARS NOW:** Set stable `length = 11`.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “Length is eleven.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Set stable `length = 11`.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_3/A064`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / COUNT_UPDATE only after spoken state, then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Length is eleven.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A065 — Now the payload starts after index nine.

- **ANCHOR ID:** `S06:A065` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Now the payload starts after index nine.” (verbatim). Occurrence #65 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 3.
- **WHAT APPEARS NOW:** Focus location one past header hash at cell10.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Now the payload starts after index nine.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus location one past header hash at cell10.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_3/A065`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now the payload starts after index nine.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A066 — So start is ten.

- **ANCHOR ID:** `S06:A066` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “So start is ten.” (verbatim). Occurrence #66 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 3.
- **WHAT APPEARS NOW:** Set `start = 10`.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “So start is ten.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Set `start = 10`.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_3/A066`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / COUNT_UPDATE only after spoken state, then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “So start is ten.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A067 — End is ten plus eleven ...

- **ANCHOR ID:** `S06:A067` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “End is ten plus eleven ...” (verbatim). Occurrence #67 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 3.
- **WHAT APPEARS NOW:** Build `end = 10 + 11` in calculation stage.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: calculation x625..1225 y560..890.
- **CAUSE:** Spoken phrase “End is ten plus eleven ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Build `end = 10 + 11` in calculation stage.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_3/A067`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “End is ten plus eleven ...” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone calculation x625..1225 y560..890; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A068 — which is twenty-one.

- **ANCHOR ID:** `S06:A068` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “which is twenty-one.” (verbatim). Occurrence #68 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 3.
- **WHAT APPEARS NOW:** Resolve `end = 21` as exclusive boundary.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “which is twenty-one.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Resolve `end = 21` as exclusive boundary.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_3/A068`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “which is twenty-one.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A069 — Now read exactly eleven characters.

- **ANCHOR ID:** `S06:A069` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Now read exactly eleven characters.” (verbatim). Occurrence #69 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 3.
- **WHAT APPEARS NOW:** Start eleven-character payload read, highlight exact interval and no future output.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Now read exactly eleven characters.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Start eleven-character payload read, highlight exact interval and no future output.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_3/A069`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now read exactly eleven characters.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A070 — From index ten ...

- **ANCHOR ID:** `S06:A070` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “From index ten ...” (verbatim). Occurrence #70 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 3.
- **WHAT APPEARS NOW:** Open substring at index10 in top tape row.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “From index ten ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Open substring at index10 in top tape row.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_3/A070`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “From index ten ...” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A071 — up to, but not including, index twenty-one.

- **ANCHOR ID:** `S06:A071` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “up to, but not including, index twenty-one.” (verbatim). Occurrence #71 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 3.
- **WHAT APPEARS NOW:** Bracket entire `[10,21)` across tape row break at 12→13 without treating row break as data boundary.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “up to, but not including, index twenty-one.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Bracket entire `[10,21)` across tape row break at 12→13 without treating row break as data boundary.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_3/A071`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “up to, but not including, index twenty-one.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A072 — That gives us ...

- **ANCHOR ID:** `S06:A072` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “That gives us ...” (verbatim). Occurrence #72 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 3.
- **WHAT APPEARS NOW:** Keep decoded-result destination hidden while the selected `[10,21)` payload is focused; await spoken result literal.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “That gives us ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Keep decoded-result destination hidden while the selected `[10,21)` payload is focused; await spoken result literal.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_3/A072`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “That gives us ...” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A073 — hello world.

- **ANCHOR ID:** `S06:A073` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “hello world.” (verbatim). Occurrence #73 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 3.
- **WHAT APPEARS NOW:** Focus resolved literal payload text `"hello world"` (11 characters) after slice.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “hello world.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Focus resolved literal payload text `"hello world"` (11 characters) after slice.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_3/A073`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “hello world.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A074 — Including the space between the words.

- **ANCHOR ID:** `S06:A074` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Including the space between the words.” (verbatim). Occurrence #74 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 3.
- **WHAT APPEARS NOW:** Visibly highlight the actual single space at global index15 as part of payload.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Including the space between the words.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Visibly highlight the actual single space at global index15 as part of payload.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_3/A074`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Including the space between the words.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A075 — Append hello world to the result.

- **ANCHOR ID:** `S06:A075` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Append hello world to the result.” (verbatim). Occurrence #75 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 3.
- **WHAT APPEARS NOW:** Append `"hello world"` as third output item, after slice resolves.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “Append hello world to the result.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Append `"hello world"` as third output item, after slice resolves.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_3/A075`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Append hello world to the result.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A076 — Now move `i` to twenty-one.

- **ANCHOR ID:** `S06:A076` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Now move `i` to twenty-one.” (verbatim). Occurrence #76 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 3.
- **WHAT APPEARS NOW:** Set `i = 21`; pointer moves to fourth header.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “Now move `i` to twenty-one.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Set `i = 21`; pointer moves to fourth header.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_3/A076`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** QUERY → POINTER_MOVE → SETTLE; one pointer at a time; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now move `i` to twenty-one.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A077 — Third record complete.

- **ANCHOR ID:** `S06:A077` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Third record complete.” (verbatim). Occurrence #77 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 3.
- **WHAT APPEARS NOW:** Mark third record complete; output list contains three strings.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “Third record complete.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Mark third record complete; output list contains three strings.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear prior record query/slice focus, keep committed result and i boundary; next record begins only when announced.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_3/A077`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Third record complete.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A078 — One record remains.

- **ANCHOR ID:** `S06:A078` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “One record remains.” (verbatim). Occurrence #78 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 4.
- **WHAT APPEARS NOW:** Focus final record header at global index21.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “One record remains.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus final record header at global index21.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_4/A078`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “One record remains.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A079 — At index twenty-one ...

- **ANCHOR ID:** `S06:A079` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “At index twenty-one ...” (verbatim). Occurrence #79 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 4.
- **WHAT APPEARS NOW:** Set/focus `i = 21`.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “At index twenty-one ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Set/focus `i = 21`.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_4/A079`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “At index twenty-one ...” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A080 — we have the digit two.

- **ANCHOR ID:** `S06:A080` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “we have the digit two.” (verbatim). Occurrence #80 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 4.
- **WHAT APPEARS NOW:** Read digit `2` at cell21 as final length header.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “we have the digit two.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Read digit `2` at cell21 as final length header.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_4/A080`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “we have the digit two.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A081 — Move `j` forward.

- **ANCHOR ID:** `S06:A081` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Move `j` forward.” (verbatim). Occurrence #81 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 4.
- **WHAT APPEARS NOW:** Begin/continue j scan toward next header hash, not toward payload.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Move `j` forward.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Begin/continue j scan toward next header hash, not toward payload.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_4/A081`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Move `j` forward.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A082 — At index twenty-two ...

- **ANCHOR ID:** `S06:A082` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “At index twenty-two ...” (verbatim). Occurrence #82 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 4.
- **WHAT APPEARS NOW:** Advance j to cell22, inspect header hash.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “At index twenty-two ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Advance j to cell22, inspect header hash.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_4/A082`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** QUERY → POINTER_MOVE → SETTLE; one pointer at a time; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “At index twenty-two ...” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A083 — we find the header hash.

- **ANCHOR ID:** `S06:A083` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “we find the header hash.” (verbatim). Occurrence #83 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 4.
- **WHAT APPEARS NOW:** Stop scanning on `#` at index22.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “we find the header hash.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Stop scanning on `#` at index22.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_4/A083`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “we find the header hash.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A084 — So length is two.

- **ANCHOR ID:** `S06:A084` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “So length is two.” (verbatim). Occurrence #84 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 4.
- **WHAT APPEARS NOW:** Set numeric `length = 2` after parsing header text.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “So length is two.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Set numeric `length = 2` after parsing header text.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_4/A084`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “So length is two.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A085 — The payload begins at index twenty-three.

- **ANCHOR ID:** `S06:A085` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “The payload begins at index twenty-three.” (verbatim). Occurrence #85 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 4.
- **WHAT APPEARS NOW:** Set `start = 23` after header hash.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “The payload begins at index twenty-three.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Set `start = 23` after header hash.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_4/A085`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / COUNT_UPDATE only after spoken state, then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “The payload begins at index twenty-three.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A086 — End is twenty-three plus two ...

- **ANCHOR ID:** `S06:A086` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “End is twenty-three plus two ...” (verbatim). Occurrence #86 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 4.
- **WHAT APPEARS NOW:** Build `end = 23 + 2` in calculation stage.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: calculation x625..1225 y560..890.
- **CAUSE:** Spoken phrase “End is twenty-three plus two ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Build `end = 23 + 2` in calculation stage.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_4/A086`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “End is twenty-three plus two ...” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone calculation x625..1225 y560..890; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A087 — twenty-five.

- **ANCHOR ID:** `S06:A087` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “twenty-five.” (verbatim). Occurrence #87 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 4.
- **WHAT APPEARS NOW:** Resolve `end = 25` as exclusive tape end boundary (not a valid rendered cell).
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “twenty-five.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Resolve `end = 25` as exclusive tape end boundary (not a valid rendered cell).; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_4/A087`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “twenty-five.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A088 — Now read two characters.

- **ANCHOR ID:** `S06:A088` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Now read two characters.” (verbatim). Occurrence #88 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 4.
- **WHAT APPEARS NOW:** Activate exact two-character payload interval `[23,25)`.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Now read two characters.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Activate exact two-character payload interval `[23,25)`.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_4/A088`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now read two characters.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A089 — Index twenty-three gives four.

- **ANCHOR ID:** `S06:A089` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Index twenty-three gives four.” (verbatim). Occurrence #89 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 4.
- **WHAT APPEARS NOW:** Read digit `4` at global index23 as first payload character.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Index twenty-three gives four.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Read digit `4` at global index23 as first payload character.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_4/A089`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Index twenty-three gives four.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A090 — Index twenty-four gives two.

- **ANCHOR ID:** `S06:A090` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Index twenty-four gives two.” (verbatim). Occurrence #90 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 4.
- **WHAT APPEARS NOW:** Read digit `2` at global index24 as second payload character.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Index twenty-four gives two.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Read digit `2` at global index24 as second payload character.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_4/A090`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Index twenty-four gives two.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A091 — Together ...

- **ANCHOR ID:** `S06:A091` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Together ...” (verbatim). Occurrence #91 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 4.
- **WHAT APPEARS NOW:** Focus completed payload slice, not integer numeric 42.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Together ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Focus completed payload slice, not integer numeric 42.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_4/A091`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Together ...” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A092 — the string four two.

- **ANCHOR ID:** `S06:A092` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “the string four two.” (verbatim). Occurrence #92 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 4.
- **WHAT APPEARS NOW:** Resolve decoded string `"42"` with two chars.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: calculation x625..1225 y560..890.
- **CAUSE:** Spoken phrase “the string four two.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Resolve decoded string `"42"` with two chars.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_4/A092`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “the string four two.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone calculation x625..1225 y560..890; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A093 — Append it to our result.

- **ANCHOR ID:** `S06:A093` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Append it to our result.” (verbatim). Occurrence #93 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 4.
- **WHAT APPEARS NOW:** Append `"42"` as fourth result item.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “Append it to our result.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Append `"42"` as fourth result item.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=21; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_4/A093`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Append it to our result.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A094 — Now set `i` to twenty-five.

- **ANCHOR ID:** `S06:A094` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Now set `i` to twenty-five.” (verbatim). Occurrence #94 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 4.
- **WHAT APPEARS NOW:** Set `i = 25` at right edge after last cell; do not render index25 as a data cell.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “Now set `i` to twenty-five.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Set `i = 25` at right edge after last cell; do not render index25 as a data cell.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=25; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_4/A094`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** QUERY → POINTER_MOVE → SETTLE; one pointer at a time; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now set `i` to twenty-five.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A095 — And twenty-five is the length of our complete encoded string.

- **ANCHOR ID:** `S06:A095` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “And twenty-five is the length of our complete encoded string.” (verbatim). Occurrence #95 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 4.
- **WHAT APPEARS NOW:** Emphasize tape length equals 25; i at exclusive terminal boundary.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “And twenty-five is the length of our complete encoded string.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Emphasize tape length equals 25; i at exclusive terminal boundary.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=25; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_4/A095`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “And twenty-five is the length of our complete encoded string.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A096 — So there is nothing left to decode.

- **ANCHOR ID:** `S06:A096` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “So there is nothing left to decode.” (verbatim). Occurrence #96 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 4.
- **WHAT APPEARS NOW:** Show that no next header exists; no fifth record invented.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: calculation x625..1225 y560..890.
- **CAUSE:** Spoken phrase “So there is nothing left to decode.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Show that no next header exists; no fifth record invented.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=25; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_4/A096`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “So there is nothing left to decode.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone calculation x625..1225 y560..890; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A097 — We stop.

- **ANCHOR ID:** `S06:A097` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “We stop.” (verbatim). Occurrence #97 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RECORD 4.
- **WHAT APPEARS NOW:** Settle loop termination; current result remains four items.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “We stop.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Settle loop termination; current result remains four items.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear prior record query/slice focus, keep committed result and i boundary; next record begins only when announced.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=25; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RECORD_4/A097`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “We stop.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A098 — Now look at our result.

- **ANCHOR ID:** `S06:A098` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Now look at our result.” (verbatim). Occurrence #98 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RESULT / CLOSURE.
- **WHAT APPEARS NOW:** Move full result list into primary focus without re-encoding.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “Now look at our result.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `decoded result list` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Move full result list into primary focus without re-encoding.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=25; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RESULT_/_CLOSURE/A098`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now look at our result.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A099 — First ... A hash B.

- **ANCHOR ID:** `S06:A099` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “First ... A hash B.” (verbatim). Occurrence #99 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RESULT / CLOSURE.
- **WHAT APPEARS NOW:** Focus decoded row 0 `"a#b"`.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “First ... A hash B.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `decoded result list` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus decoded row 0 `"a#b"`.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=25; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RESULT_/_CLOSURE/A099`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “First ... A hash B.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A100 — Second ... an empty string.

- **ANCHOR ID:** `S06:A100` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Second ... an empty string.” (verbatim). Occurrence #100 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RESULT / CLOSURE.
- **WHAT APPEARS NOW:** Focus decoded row 1 `""` as a real output element.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “Second ... an empty string.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `decoded result list` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus decoded row 1 `""` as a real output element.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=25; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RESULT_/_CLOSURE/A100`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Second ... an empty string.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A101 — Third ... hello world.

- **ANCHOR ID:** `S06:A101` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Third ... hello world.” (verbatim). Occurrence #101 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RESULT / CLOSURE.
- **WHAT APPEARS NOW:** Focus decoded row 2 `"hello world"`, space preserved.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “Third ... hello world.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `decoded result list` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus decoded row 2 `"hello world"`, space preserved.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=25; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RESULT_/_CLOSURE/A101`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Third ... hello world.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A102 — Fourth ... four two.

- **ANCHOR ID:** `S06:A102` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Fourth ... four two.” (verbatim). Occurrence #102 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RESULT / CLOSURE.
- **WHAT APPEARS NOW:** Focus decoded row 3 `"42"`, still a string.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “Fourth ... four two.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `decoded result list` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus decoded row 3 `"42"`, still a string.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=25; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RESULT_/_CLOSURE/A102`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Fourth ... four two.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A103 — Exactly the same four strings we started with.

- **ANCHOR ID:** `S06:A103` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Exactly the same four strings we started with.” (verbatim). Occurrence #103 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RESULT / CLOSURE.
- **WHAT APPEARS NOW:** Confirm exactly the original four values in the same order.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “Exactly the same four strings we started with.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `decoded result list` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Confirm exactly the original four values in the same order.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=25; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RESULT_/_CLOSURE/A103`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Exactly the same four strings we started with.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A104 — Same characters.

- **ANCHOR ID:** `S06:A104` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Same characters.” (verbatim). Occurrence #104 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RESULT / CLOSURE.
- **WHAT APPEARS NOW:** Underline exact character equality across decoded list; no extra characters.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “Same characters.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `decoded result list` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Underline exact character equality across decoded list; no extra characters.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=25; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RESULT_/_CLOSURE/A104`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Same characters.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A105 — Same order.

- **ANCHOR ID:** `S06:A105` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Same order.” (verbatim). Occurrence #105 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RESULT / CLOSURE.
- **WHAT APPEARS NOW:** Confirm source order preservation visually.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “Same order.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `decoded result list` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Confirm source order preservation visually.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=25; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RESULT_/_CLOSURE/A105`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Same order.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A106 — Same empty string.

- **ANCHOR ID:** `S06:A106` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Same empty string.” (verbatim). Occurrence #106 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RESULT / CLOSURE.
- **WHAT APPEARS NOW:** Confirm empty string entry exists in second position.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “Same empty string.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `decoded result list` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Confirm empty string entry exists in second position.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=25; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RESULT_/_CLOSURE/A106`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Same empty string.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A107 — Nothing lost.

- **ANCHOR ID:** `S06:A107` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Nothing lost.” (verbatim). Occurrence #107 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RESULT / CLOSURE.
- **WHAT APPEARS NOW:** Settle the fact that no information was lost.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “Nothing lost.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `decoded result list` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Settle the fact that no information was lost.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=25; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RESULT_/_CLOSURE/A107`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Nothing lost.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A108 — That's our complete decode trace.

- **ANCHOR ID:** `S06:A108` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “That's our complete decode trace.” (verbatim). Occurrence #108 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RESULT / CLOSURE.
- **WHAT APPEARS NOW:** Complete decoder trace and clean temporary equation/j-pointer focus.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “That's our complete decode trace.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `decoded result list` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Complete decoder trace and clean temporary equation/j-pointer focus.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=25; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RESULT_/_CLOSURE/A108`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “That's our complete decode trace.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S06:A109 — Now let's write the decoder.

- **ANCHOR ID:** `S06:A109` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Now let's write the decoder.” (verbatim). Occurrence #109 in approved Scene 06 narration, in source order.
- **BEAT TYPE / PHASE:** DECODE RESULT / CLOSURE.
- **WHAT APPEARS NOW:** Transition to board-native decode code scene; preserve no extra algorithm mutations.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “Now let's write the decoder.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `decoded result list` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Transition to board-native decode code scene; preserve no extra algorithm mutations.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Prepare scene transition only after spoken exit; no timing guessed; keep conceptual handoff item intact.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=25; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** `Q17/DEC/DECODE_RESULT_/_CLOSURE/A109`.
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** CLEANUP / TRANSITION of old beat, preserve authorized state; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now let's write the decoder.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

## Critical semantic checkpoints — **NOT guessed frame numbers**

- **A001: 25 global tape positions visible, no output values**
- **A016–A023: length 3, interval [2,5)**
- **A032: first result appended, A034 i=5**
- **A047–A051: zero-length [7,7), real empty result**
- **A060–A071: two-digit 11 header, [10,21) crosses visual row break**
- **A075–A076: third output and i=21**
- **A087–A094: end-exclusive 25 after last cell and last output**
- **A098–A108: exact list and order confirmed, no fifth record**

## Audit gate distinction

**This file is a Gate A pre-audio semantic plan.** Automated check report is adjacent as `Scene06_Audit.md`. Gate B cannot be completed before the actual MP3 + exact word-sync. DO NOT claim final 100/100 or rendered-frame correctness. Rendering and font-metric collision audit must be done after implementation.

**Word identity handoff:** later resolve `S06:A001..A109` to stable source word indices `Scene06:Wxxxx`, with start/end edges and end-exclusive `[startFrame,endFrameExclusive)`; use validated sync FPS/duration, never assumed FPS.
