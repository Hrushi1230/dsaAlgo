# Q17 — Scene 04: Full Encode Trace

**Gate A / Pre-Audio Semantic Word-Driven Plan — V3.2 Board-Native**  
**Draft → audit → fix → re-audit workflow:** source exact phrases, no guessed frame timing.  
**Exact timing status:** `PENDING final ElevenLabs MP3 + validated exact word-sync JSON`; therefore exact `Wxxxx`, frame ranges, FPS, and pause durations **MUST NOT be fabricated**.

## Scene contract

```text
SCENE: 04
QUESTION: Q17 — Encode and Decode Strings (LeetCode 271)
BEAT TYPE: Full Encode Trace (TRACE — exhaustive)
SCRIPT SOURCE: Q17_Encode_Decode_Strings_Final_ElevenLabs_Narration.md
ALGORITHM TRACE SOURCE: verified source code target + original approved exact-script trace where applicable
AUDIO FILE: PENDING final MP3
SYNC FILE: PENDING validated word sync
FPS: PENDING sync
TOTAL FRAMES: PENDING sync
PEDAGOGICAL GOAL: current source string → constructed record → growing 25-char stream
TRACE STEP IDS: Q17/ENC/..., 4 records
DATA STRUCTURE: source string list / record builder / encoded string
PRIMARY HERO: current source string → constructed record → growing 25-char stream
SUPPORT LEFT: See fixed geometry table
SUPPORT RIGHT: See fixed geometry table
REUSE: theme.ts / RoughLine / RoughBox / Captions
EXTEND: N/A
CREATE SHARED: BoardStringList / HeaderPayloadRecord / GrowingEncodedStream
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
| scene label | 65 | 32 | 1790 | 82 | chalk |
| source list, four fixed rows | 90 | 190 | 620 | 535 | hero/input |
| length/state rail | 755 | 215 | 360 | 132 | variable |
| record builder | 755 | 350 | 1050 | 205 | hero operation |
| output stream | 100 | 690 | 1710 | 235 | accumulator |

**Long content measurement:** input string `"hello world"` and 25-character assembled stream use monospaced chalk at widths measured inside assigned regions; target glyphs >=42px for source, >=44px for encoded stream. If actual font metrics overflow, prefer a board-native line wrap with preserved byte indices, never reduce to tiny text/cards. Input list rows are fixed; builder resets without moving source geometry.

**Global collision envelope:** title/label y28..120; hero y165..925; captions y960..1040. No teaching text or arrows may enter caption band. Coordinates are 1920×1080 nominal scene units, not guesses for time or FPS. Layout alternatives visible in different speech phases may reuse stage area; do not show them simultaneously.

## Current kit truth / usage and component lifecycle

| Component | Verified path / intended addition | Current actual API / planned API | Decision |
|---|---|---|---|
| theme.ts | `kit/lib/theme.ts` | theme.boardBg, theme.chalkText, theme.chalkDim, theme.pivot, theme.cyan, theme.good, theme.warn, theme.purple; fonts.hand/mono/code | **REUSE** |
| RoughLine | `kit/components/RoughLine.tsx` | shape:{kind:"line"/"arrow"/"circle", coordinates}; width,height,startFrame?,durationInFrames?,stroke?,strokeWidth?,seed? | **REUSE** |
| RoughBox | `kit/components/RoughBox.tsx` | width,height,startFrame?,durationInFrames?,stroke?,fill?,seed?,strokeWidth?,roughness?; omit fill for transparent outline | **REUSE** |
| Captions | `kit/components/Captions.tsx` | words:{word,start,end}[], fps?,bottom?,fontSize?,maxWords?,maxWidth? (ONLY post-sync, pass exact fps) | **POST-SYNC REUSE** |
| BoardStringList | `NEW SHARED (proposed; NO verified file path)` | fixed logical row identities, string/empty distinctions, per-row focus and stable per-row lengths; render directly on board; proposed shared reusable component, not verified existing | **CREATE SHARED** |
| HeaderPayloadRecord | `NEW SHARED (proposed; NO verified file path)` | three semantic sectors length/header-terminator/payload with header-vs-payload hash distinction; no opaque fill; proposed shared reusable component, not verified existing | **CREATE SHARED** |
| GrowingEncodedStream | `NEW SHARED (proposed; NO verified file path)` | append-only exact glyph stream, offset-based segment identity, no future characters, global 25-char geometry; proposed shared reusable component, not verified existing | **CREATE SHARED** |

**Per-component lifecycle:** scene label and theme text enter only with their spoken concept; `Captions` consumes final words+FPS **after sync**; teaching source structures enter at the first introduction and retain spatial identity; temporary calculations/cursors enter on their matching anchors and clear at the next authorized step or scene exit; no future data pre-rendered visible. Components marked **CREATE SHARED** do not exist as verified imports yet—implementation must create them at an agreed `kit` path and check actual API before using. No question-local duplicate component.

## Algorithm / mathematical truth manifest

| Record | Input | header | payload | record bytes | Stream AFTER append | Spoken append anchor |
|---:|---|---|---|---|---|---|
| 1 | `"a#b"` | `3#` | `a#b` | `3#a#b` | `3#a#b` | S04:A021 |
| 2 | `""` | `0#` | `""` | `0#` | `3#a#b0#` | S04:A030 |
| 3 | `"hello world"` | `11#` | `hello world` | `11#hello world` | `3#a#b0#11#hello world` | S04:A047 |
| 4 | `"42"` | `2#` | `42` | `2#42` | `3#a#b0#11#hello world2#42` | S04:A062 |

**State invariant:** No append is committed in the accumulator before the append narration; the builder can preview a not-yet-committed record, but must not pre-fill future bytes. The input source never disappears when its characters are copied.

## Scene-specific semantic and spatial behavior

- **One dominant visual:** current source string → constructed record → growing 25-char stream. Secondary state is small but readable; no UI cards; board itself is surface.
- **Reading direction:** source string → record builder (length | # | payload) → append-only encoded accumulator.
- **No-spoiler rule:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **Scene-type discipline:** Exhaustively cover all operations and exact state updates. Never skip input/lookup/move/slice/append/accumulator state.
- **Audio causal gating:** each exact spoken phrase below is a sequential semantic trigger, not an assumed frame allocation. Holds only from validated MP3/sync.
- **Fixed layout:** reserve positions even while a component is hidden; do not let future rows shift existing words or characters.

## Exact narration phrase → semantic animation anchors (source order)

### S04:A001 — Our input contains four strings.

- **ANCHOR ID:** `S04:A001` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Our input contains four strings.” (verbatim). Occurrence #1 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** INPUT / INITIALIZATION.
- **WHAT APPEARS NOW:** Introduce fixed four-row source-list stage; keep all source contents hidden until spoken.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: source list x90..710, y190..725.
- **CAUSE:** Spoken phrase “Our input contains four strings.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source list` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Introduce fixed four-row source-list stage; keep all source contents hidden until spoken.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=none — source introduction; committed encoded accumulator=''; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/INPUT_/_INITIALIZATION/A001`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Our input contains four strings.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone source list x90..710, y190..725; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A002 — A hash B ...

- **ANCHOR ID:** `S04:A002` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “A hash B ...” (verbatim). Occurrence #2 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** INPUT / INITIALIZATION.
- **WHAT APPEARS NOW:** Reveal source row 0 `"a#b"` and its original string identity.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: source list x90..710, y190..725.
- **CAUSE:** Spoken phrase “A hash B ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source list` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal source row 0 `"a#b"` and its original string identity.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=none — source introduction; committed encoded accumulator=''; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/INPUT_/_INITIALIZATION/A002`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “A hash B ...” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone source list x90..710, y190..725; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A003 — an empty string ...

- **ANCHOR ID:** `S04:A003` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “an empty string ...” (verbatim). Occurrence #3 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** INPUT / INITIALIZATION.
- **WHAT APPEARS NOW:** Reveal source row 1 `""`; no invented placeholder inside payload.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: source list x90..710, y190..725.
- **CAUSE:** Spoken phrase “an empty string ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source list` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal source row 1 `""`; no invented placeholder inside payload.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=none — source introduction; committed encoded accumulator=''; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/INPUT_/_INITIALIZATION/A003`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “an empty string ...” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone source list x90..710, y190..725; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A004 — hello world ...

- **ANCHOR ID:** `S04:A004` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “hello world ...” (verbatim). Occurrence #4 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** INPUT / INITIALIZATION.
- **WHAT APPEARS NOW:** Reveal source row 2 `"hello world"` with actual space.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: source list x90..710, y190..725.
- **CAUSE:** Spoken phrase “hello world ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source list` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal source row 2 `"hello world"` with actual space.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=none — source introduction; committed encoded accumulator=''; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/INPUT_/_INITIALIZATION/A004`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “hello world ...” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone source list x90..710, y190..725; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A005 — and four two.

- **ANCHOR ID:** `S04:A005` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “and four two.” (verbatim). Occurrence #5 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** INPUT / INITIALIZATION.
- **WHAT APPEARS NOW:** Reveal source row 3 `"42"` as string of two characters.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: source list x90..710, y190..725.
- **CAUSE:** Spoken phrase “and four two.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source list` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal source row 3 `"42"` as string of two characters.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=none — source introduction; committed encoded accumulator=''; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/INPUT_/_INITIALIZATION/A005`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “and four two.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone source list x90..710, y190..725; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A006 — We start with an empty encoded result.

- **ANCHOR ID:** `S04:A006` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “We start with an empty encoded result.” (verbatim). Occurrence #6 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** INPUT / INITIALIZATION.
- **WHAT APPEARS NOW:** Initialize the encoded accumulator as the actual empty string `""` in bottom lane; not a black panel.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: source list x90..710, y190..725.
- **CAUSE:** Spoken phrase “We start with an empty encoded result.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source list` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Initialize the encoded accumulator as the actual empty string `""` in bottom lane; not a black panel.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=none — source introduction; committed encoded accumulator=''; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/INPUT_/_INITIALIZATION/A006`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / COUNT_UPDATE only after spoken state, then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “We start with an empty encoded result.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone source list x90..710, y190..725; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A007 — First string ...

- **ANCHOR ID:** `S04:A007` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “First string ...” (verbatim). Occurrence #7 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 1.
- **WHAT APPEARS NOW:** Select source row 0; all other rows stay dim and fixed.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “First string ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row0` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Select source row 0; all other rows stay dim and fixed.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=0 — "a#b"; committed encoded accumulator=''; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_1/A007`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “First string ...” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A008 — A hash B.

- **ANCHOR ID:** `S04:A008` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “A hash B.” (verbatim). Occurrence #8 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 1.
- **WHAT APPEARS NOW:** Give row 0 focus and copy `a#b` only to the record-builder source area; accumulator unchanged.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “A hash B.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row0` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Give row 0 focus and copy `a#b` only to the record-builder source area; accumulator unchanged.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=0 — "a#b"; committed encoded accumulator=''; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_1/A008`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “A hash B.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A009 — Count its characters.

- **ANCHOR ID:** `S04:A009` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Count its characters.” (verbatim). Occurrence #9 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 1.
- **WHAT APPEARS NOW:** Reserve three small counting marks under characters, but do not expose total yet.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “Count its characters.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row0` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Reserve three small counting marks under characters, but do not expose total yet.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=0 — "a#b"; committed encoded accumulator=''; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_1/A009`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Count its characters.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A010 — A ...

- **ANCHOR ID:** `S04:A010` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “A ...” (verbatim). Occurrence #10 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 1.
- **WHAT APPEARS NOW:** Focus first character `a`; tally observed count `1` only; do not reveal the future total `3` before it is established.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “A ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row0` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Focus first character `a`; tally observed count `1` only; do not reveal the future total `3` before it is established.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=0 — "a#b"; committed encoded accumulator=''; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_1/A010`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “A ...” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A011 — hash ...

- **ANCHOR ID:** `S04:A011` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “hash ...” (verbatim). Occurrence #11 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 1.
- **WHAT APPEARS NOW:** Focus literal payload hash as second character; treat it as data.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “hash ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row0` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus literal payload hash as second character; treat it as data.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=0 — "a#b"; committed encoded accumulator=''; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_1/A011`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “hash ...” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A012 — B.

- **ANCHOR ID:** `S04:A012` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “B.” (verbatim). Occurrence #12 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 1.
- **WHAT APPEARS NOW:** Focus last character `b` as third character.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “B.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row0` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus last character `b` as third character.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=0 — "a#b"; committed encoded accumulator=''; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_1/A012`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “B.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A013 — Three characters.

- **ANCHOR ID:** `S04:A013` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Three characters.” (verbatim). Occurrence #13 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 1.
- **WHAT APPEARS NOW:** Confirm three visited characters, with all three glyphs visibly owned by payload.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “Three characters.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row0` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Confirm three visited characters, with all three glyphs visibly owned by payload.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=0 — "a#b"; committed encoded accumulator=''; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_1/A013`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Three characters.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A014 — So the length is three.

- **ANCHOR ID:** `S04:A014` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “So the length is three.” (verbatim). Occurrence #14 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 1.
- **WHAT APPEARS NOW:** Write computed length `3` into the stable length-variable location.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: length state x755..1115, y215..347.
- **CAUSE:** Spoken phrase “So the length is three.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row0` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Write computed length `3` into the stable length-variable location.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=0 — "a#b"; committed encoded accumulator=''; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_1/A014`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “So the length is three.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone length state x755..1115, y215..347; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A015 — First, write three.

- **ANCHOR ID:** `S04:A015` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “First, write three.” (verbatim). Occurrence #15 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 1.
- **WHAT APPEARS NOW:** Write record-builder header digit `3`; accumulator must still be empty.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “First, write three.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row0` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Write record-builder header digit `3`; accumulator must still be empty.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=0 — "a#b"; committed encoded accumulator=''; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_1/A015`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “First, write three.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A016 — Then write the header hash.

- **ANCHOR ID:** `S04:A016` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Then write the header hash.” (verbatim). Occurrence #16 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 1.
- **WHAT APPEARS NOW:** Append header terminator `#` immediately after `3` in the *record builder* only.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “Then write the header hash.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row0` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Append header terminator `#` immediately after `3` in the *record builder* only.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=0 — "a#b"; committed encoded accumulator=''; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_1/A016`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Then write the header hash.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A017 — Then copy the complete original string ...

- **ANCHOR ID:** `S04:A017` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Then copy the complete original string ...” (verbatim). Occurrence #17 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 1.
- **WHAT APPEARS NOW:** Start copying the selected original string into payload part of builder; copy source, do not move/delete original.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “Then copy the complete original string ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row0` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Start copying the selected original string into payload part of builder; copy source, do not move/delete original.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=0 — "a#b"; committed encoded accumulator=''; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_1/A017`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Then copy the complete original string ...” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A018 — A hash B.

- **ANCHOR ID:** `S04:A018` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “A hash B.” (verbatim). Occurrence #18 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 1.
- **WHAT APPEARS NOW:** Show copied payload `a#b`, distinctly separate from header hash.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “A hash B.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row0` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Show copied payload `a#b`, distinctly separate from header hash.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=0 — "a#b"; committed encoded accumulator=''; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_1/A018`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “A hash B.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A019 — Our first record is ...

- **ANCHOR ID:** `S04:A019` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Our first record is ...” (verbatim). Occurrence #19 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 1.
- **WHAT APPEARS NOW:** Highlight completed record builder `3#a#b` with exact token semantics.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “Our first record is ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row0` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Highlight completed record builder `3#a#b` with exact token semantics.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=0 — "a#b"; committed encoded accumulator=''; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_1/A019`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Our first record is ...” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A020 — three hash A hash B.

- **ANCHOR ID:** `S04:A020` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “three hash A hash B.” (verbatim). Occurrence #20 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 1.
- **WHAT APPEARS NOW:** Confirm complete record text `3#a#b`; first and second hashes have distinct roles.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “three hash A hash B.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row0` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Confirm complete record text `3#a#b`; first and second hashes have distinct roles.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=0 — "a#b"; committed encoded accumulator=''; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_1/A020`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “three hash A hash B.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A021 — And that becomes our current encoded result.

- **ANCHOR ID:** `S04:A021` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “And that becomes our current encoded result.” (verbatim). Occurrence #21 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 1.
- **WHAT APPEARS NOW:** Append record `3#a#b` to accumulator, producing its first visible prefix `3#a#b`.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: accumulator x100..1810, y690..925.
- **CAUSE:** Spoken phrase “And that becomes our current encoded result.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row0` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Append record `3#a#b` to accumulator, producing its first visible prefix `3#a#b`.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Completed record-builder focus clears; output stream prefix persists and grows only by verified append.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=0 — "a#b"; committed encoded accumulator='3#a#b'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_1/A021`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “And that becomes our current encoded result.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone accumulator x100..1810, y690..925; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A022 — Now the second string.

- **ANCHOR ID:** `S04:A022` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Now the second string.” (verbatim). Occurrence #22 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 2.
- **WHAT APPEARS NOW:** Select source row 1 and clear prior record-builder working state without erasing accumulator.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “Now the second string.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row1` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Select source row 1 and clear prior record-builder working state without erasing accumulator.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=1 — ""; committed encoded accumulator='3#a#b'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_2/A022`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** CLEANUP / TRANSITION of old beat, preserve authorized state; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now the second string.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A023 — This one is empty.

- **ANCHOR ID:** `S04:A023` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “This one is empty.” (verbatim). Occurrence #23 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 2.
- **WHAT APPEARS NOW:** Focus actual empty string `""` in input, not an omitted row.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “This one is empty.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row1` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus actual empty string `""` in input, not an omitted row.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=1 — ""; committed encoded accumulator='3#a#b'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_2/A023`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “This one is empty.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A024 — How many characters?

- **ANCHOR ID:** `S04:A024` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “How many characters?” (verbatim). Occurrence #24 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 2.
- **WHAT APPEARS NOW:** Prompt count with visibly zero payload glyphs.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “How many characters?” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row1` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Prompt count with visibly zero payload glyphs.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=1 — ""; committed encoded accumulator='3#a#b'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_2/A024`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “How many characters?” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A025 — Zero.

- **ANCHOR ID:** `S04:A025` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Zero.” (verbatim). Occurrence #25 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 2.
- **WHAT APPEARS NOW:** Set length variable to `0` explicitly.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: length state x755..1115, y215..347.
- **CAUSE:** Spoken phrase “Zero.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row1` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Set length variable to `0` explicitly.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=1 — ""; committed encoded accumulator='3#a#b'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_2/A025`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / COUNT_UPDATE only after spoken state, then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Zero.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone length state x755..1115, y215..347; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A026 — So write zero ...

- **ANCHOR ID:** `S04:A026` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “So write zero ...” (verbatim). Occurrence #26 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 2.
- **WHAT APPEARS NOW:** Write `0` into builder header and nothing into accumulator.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “So write zero ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row1` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Write `0` into builder header and nothing into accumulator.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=1 — ""; committed encoded accumulator='3#a#b'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_2/A026`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “So write zero ...” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A027 — then hash.

- **ANCHOR ID:** `S04:A027` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “then hash.” (verbatim). Occurrence #27 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 2.
- **WHAT APPEARS NOW:** Write `#` after `0`, completing `0#` builder record.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “then hash.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row1` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Write `#` after `0`, completing `0#` builder record.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=1 — ""; committed encoded accumulator='3#a#b'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_2/A027`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “then hash.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A028 — There is no payload to copy.

- **ANCHOR ID:** `S04:A028` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “There is no payload to copy.” (verbatim). Occurrence #28 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 2.
- **WHAT APPEARS NOW:** Keep payload region visually empty; no empty-substitute glyph is encoded.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “There is no payload to copy.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row1` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Keep payload region visually empty; no empty-substitute glyph is encoded.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=1 — ""; committed encoded accumulator='3#a#b'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_2/A028`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “There is no payload to copy.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A029 — That's perfectly valid.

- **ANCHOR ID:** `S04:A029` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “That's perfectly valid.” (verbatim). Occurrence #29 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 2.
- **WHAT APPEARS NOW:** Confirm `0#` represents a valid record even with no payload.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “That's perfectly valid.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row1` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Confirm `0#` represents a valid record even with no payload.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=1 — ""; committed encoded accumulator='3#a#b'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_2/A029`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “That's perfectly valid.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A030 — Append this record to the previous result.

- **ANCHOR ID:** `S04:A030` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Append this record to the previous result.” (verbatim). Occurrence #30 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 2.
- **WHAT APPEARS NOW:** Append `0#` as the second record; accumulator becomes `3#a#b0#`.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: accumulator x100..1810, y690..925.
- **CAUSE:** Spoken phrase “Append this record to the previous result.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row1` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Append `0#` as the second record; accumulator becomes `3#a#b0#`.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Completed record-builder focus clears; output stream prefix persists and grows only by verified append.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=1 — ""; committed encoded accumulator='3#a#b0#'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_2/A030`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Append this record to the previous result.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone accumulator x100..1810, y690..925; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A031 — Now our encoded result is ...

- **ANCHOR ID:** `S04:A031` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Now our encoded result is ...” (verbatim). Occurrence #31 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 2.
- **WHAT APPEARS NOW:** Shift focus to accumulator; do not reveal future `11#` or `2#`.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “Now our encoded result is ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row1` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Shift focus to accumulator; do not reveal future `11#` or `2#`.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=1 — ""; committed encoded accumulator='3#a#b0#'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_2/A031`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now our encoded result is ...” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A032 — three hash A hash B ...

- **ANCHOR ID:** `S04:A032` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “three hash A hash B ...” (verbatim). Occurrence #32 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 2.
- **WHAT APPEARS NOW:** Spotlight prior accumulated `3#a#b` segment already present.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “three hash A hash B ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row1` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Spotlight prior accumulated `3#a#b` segment already present.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=1 — ""; committed encoded accumulator='3#a#b0#'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_2/A032`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “three hash A hash B ...” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A033 — followed by zero hash.

- **ANCHOR ID:** `S04:A033` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “followed by zero hash.” (verbatim). Occurrence #33 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 2.
- **WHAT APPEARS NOW:** Spotlight appended `0#` segment with adjacent boundary, not extra separator.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “followed by zero hash.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row1` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Spotlight appended `0#` segment with adjacent boundary, not extra separator.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=1 — ""; committed encoded accumulator='3#a#b0#'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_2/A033`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “followed by zero hash.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A034 — Next string ...

- **ANCHOR ID:** `S04:A034` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Next string ...” (verbatim). Occurrence #34 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 3.
- **WHAT APPEARS NOW:** Select source row 2; working builder resets while accumulator retains first 7 chars.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “Next string ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row2` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Select source row 2; working builder resets while accumulator retains first 7 chars.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=2 — "hello world"; committed encoded accumulator='3#a#b0#'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_3/A034`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Next string ...” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A035 — hello world.

- **ANCHOR ID:** `S04:A035` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “hello world.” (verbatim). Occurrence #35 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 3.
- **WHAT APPEARS NOW:** Focus literal `"hello world"` as source payload.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “hello world.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row2` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus literal `"hello world"` as source payload.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=2 — "hello world"; committed encoded accumulator='3#a#b0#'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_3/A035`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “hello world.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A036 — Let's count carefully.

- **ANCHOR ID:** `S04:A036` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Let's count carefully.” (verbatim). Occurrence #36 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 3.
- **WHAT APPEARS NOW:** Open count annotation below the source only for this string.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “Let's count carefully.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row2` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Open count annotation below the source only for this string.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=2 — "hello world"; committed encoded accumulator='3#a#b0#'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_3/A036`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Let's count carefully.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A037 — Hello has five characters.

- **ANCHOR ID:** `S04:A037` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Hello has five characters.” (verbatim). Occurrence #37 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 3.
- **WHAT APPEARS NOW:** Underline `hello` as five counted characters.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “Hello has five characters.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row2` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Underline `hello` as five counted characters.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=2 — "hello world"; committed encoded accumulator='3#a#b0#'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_3/A037`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Hello has five characters.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A038 — Then one space.

- **ANCHOR ID:** `S04:A038` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Then one space.” (verbatim). Occurrence #38 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 3.
- **WHAT APPEARS NOW:** Highlight the literal space as exactly one character, not omitted.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “Then one space.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row2` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Highlight the literal space as exactly one character, not omitted.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=2 — "hello world"; committed encoded accumulator='3#a#b0#'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_3/A038`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Then one space.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A039 — Then world has five characters.

- **ANCHOR ID:** `S04:A039` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Then world has five characters.” (verbatim). Occurrence #39 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 3.
- **WHAT APPEARS NOW:** Underline `world` as another five counted characters.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “Then world has five characters.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row2` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Underline `world` as another five counted characters.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=2 — "hello world"; committed encoded accumulator='3#a#b0#'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_3/A039`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Then world has five characters.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A040 — So total length is eleven.

- **ANCHOR ID:** `S04:A040` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “So total length is eleven.” (verbatim). Occurrence #40 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 3.
- **WHAT APPEARS NOW:** Resolve length variable to `11` after `5 + 1 + 5` reasoning.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: length state x755..1115, y215..347.
- **CAUSE:** Spoken phrase “So total length is eleven.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row2` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Resolve length variable to `11` after `5 + 1 + 5` reasoning.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=2 — "hello world"; committed encoded accumulator='3#a#b0#'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_3/A040`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “So total length is eleven.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone length state x755..1115, y215..347; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A041 — This time our length has two digits.

- **ANCHOR ID:** `S04:A041` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “This time our length has two digits.” (verbatim). Occurrence #41 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 3.
- **WHAT APPEARS NOW:** Emphasize both digits of `11`; don't split header at first digit.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “This time our length has two digits.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row2` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Emphasize both digits of `11`; don't split header at first digit.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=2 — "hello world"; committed encoded accumulator='3#a#b0#'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_3/A041`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “This time our length has two digits.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A042 — Write eleven.

- **ANCHOR ID:** `S04:A042` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Write eleven.” (verbatim). Occurrence #42 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 3.
- **WHAT APPEARS NOW:** Write `11` in record-builder header.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “Write eleven.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row2` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Write `11` in record-builder header.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=2 — "hello world"; committed encoded accumulator='3#a#b0#'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_3/A042`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Write eleven.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A043 — Then hash.

- **ANCHOR ID:** `S04:A043` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Then hash.” (verbatim). Occurrence #43 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 3.
- **WHAT APPEARS NOW:** Write single header `#` after two length digits.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “Then hash.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row2` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Write single header `#` after two length digits.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=2 — "hello world"; committed encoded accumulator='3#a#b0#'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_3/A043`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Then hash.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A044 — Then copy the complete payload ...

- **ANCHOR ID:** `S04:A044` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Then copy the complete payload ...” (verbatim). Occurrence #44 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 3.
- **WHAT APPEARS NOW:** Begin payload copying from unchanged source row.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “Then copy the complete payload ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row2` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Begin payload copying from unchanged source row.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=2 — "hello world"; committed encoded accumulator='3#a#b0#'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_3/A044`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Then copy the complete payload ...” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A045 — hello world.

- **ANCHOR ID:** `S04:A045` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “hello world.” (verbatim). Occurrence #45 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 3.
- **WHAT APPEARS NOW:** Fill builder payload with `hello world`, preserving internal space.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “hello world.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row2` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Fill builder payload with `hello world`, preserving internal space.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=2 — "hello world"; committed encoded accumulator='3#a#b0#'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_3/A045`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “hello world.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A046 — The space is also part of the string.

- **ANCHOR ID:** `S04:A046` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “The space is also part of the string.” (verbatim). Occurrence #46 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 3.
- **WHAT APPEARS NOW:** Focus the space as genuine payload data without changing 11.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “The space is also part of the string.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row2` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus the space as genuine payload data without changing 11.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=2 — "hello world"; committed encoded accumulator='3#a#b0#'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_3/A046`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “The space is also part of the string.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A047 — Now append this record.

- **ANCHOR ID:** `S04:A047` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Now append this record.” (verbatim). Occurrence #47 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 3.
- **WHAT APPEARS NOW:** Append full record `11#hello world` to accumulator; no partial destination overwrite.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: accumulator x100..1810, y690..925.
- **CAUSE:** Spoken phrase “Now append this record.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row2` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Append full record `11#hello world` to accumulator; no partial destination overwrite.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Completed record-builder focus clears; output stream prefix persists and grows only by verified append.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=2 — "hello world"; committed encoded accumulator='3#a#b0#11#hello world'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_3/A047`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now append this record.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone accumulator x100..1810, y690..925; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A048 — Our encoded result contains ...

- **ANCHOR ID:** `S04:A048` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Our encoded result contains ...” (verbatim). Occurrence #48 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 3.
- **WHAT APPEARS NOW:** Focus accumulated stream where three complete records now exist.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “Our encoded result contains ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row2` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Focus accumulated stream where three complete records now exist.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=2 — "hello world"; committed encoded accumulator='3#a#b0#11#hello world'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_3/A048`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Our encoded result contains ...” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A049 — three hash A hash B ...

- **ANCHOR ID:** `S04:A049` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “three hash A hash B ...” (verbatim). Occurrence #49 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 3.
- **WHAT APPEARS NOW:** Focus first accumulated `3#a#b` section (no mutation).
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “three hash A hash B ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row2` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus first accumulated `3#a#b` section (no mutation).
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=2 — "hello world"; committed encoded accumulator='3#a#b0#11#hello world'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_3/A049`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “three hash A hash B ...” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A050 — zero hash ...

- **ANCHOR ID:** `S04:A050` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “zero hash ...” (verbatim). Occurrence #50 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 3.
- **WHAT APPEARS NOW:** Focus next `0#` section (no mutation).
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “zero hash ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row2` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus next `0#` section (no mutation).
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=2 — "hello world"; committed encoded accumulator='3#a#b0#11#hello world'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_3/A050`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “zero hash ...” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A051 — eleven hash hello world.

- **ANCHOR ID:** `S04:A051` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “eleven hash hello world.” (verbatim). Occurrence #51 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 3.
- **WHAT APPEARS NOW:** Focus appended `11#hello world` section; result ends at index 20.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “eleven hash hello world.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row2` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Focus appended `11#hello world` section; result ends at index 20.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=2 — "hello world"; committed encoded accumulator='3#a#b0#11#hello world'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_3/A051`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “eleven hash hello world.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A052 — Now the final string.

- **ANCHOR ID:** `S04:A052` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Now the final string.” (verbatim). Occurrence #52 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 4.
- **WHAT APPEARS NOW:** Select final source row 3; builder resets but accumulator remains.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “Now the final string.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row3` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Select final source row 3; builder resets but accumulator remains.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=3 — "42"; committed encoded accumulator='3#a#b0#11#hello world'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_4/A052`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now the final string.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A053 — Four two.

- **ANCHOR ID:** `S04:A053` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Four two.” (verbatim). Occurrence #53 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 4.
- **WHAT APPEARS NOW:** Focus string `"42"` unchanged.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “Four two.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row3` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus string `"42"` unchanged.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=3 — "42"; committed encoded accumulator='3#a#b0#11#hello world'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_4/A053`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Four two.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A054 — These are two characters ...

- **ANCHOR ID:** `S04:A054` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “These are two characters ...” (verbatim). Occurrence #54 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 4.
- **WHAT APPEARS NOW:** Highlight its two payload characters as string characters, not number forty-two.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “These are two characters ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row3` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Highlight its two payload characters as string characters, not number forty-two.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=3 — "42"; committed encoded accumulator='3#a#b0#11#hello world'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_4/A054`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “These are two characters ...” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A055 — four and two.

- **ANCHOR ID:** `S04:A055` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “four and two.” (verbatim). Occurrence #55 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 4.
- **WHAT APPEARS NOW:** Focus digit `4` then `2` in source (each one character).
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “four and two.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row3` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus digit `4` then `2` in source (each one character).
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=3 — "42"; committed encoded accumulator='3#a#b0#11#hello world'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_4/A055`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “four and two.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A056 — So its length is two.

- **ANCHOR ID:** `S04:A056` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “So its length is two.” (verbatim). Occurrence #56 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 4.
- **WHAT APPEARS NOW:** Set length variable to `2`.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: length state x755..1115, y215..347.
- **CAUSE:** Spoken phrase “So its length is two.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row3` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Set length variable to `2`.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=3 — "42"; committed encoded accumulator='3#a#b0#11#hello world'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_4/A056`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / COUNT_UPDATE only after spoken state, then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “So its length is two.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone length state x755..1115, y215..347; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A057 — Write two ...

- **ANCHOR ID:** `S04:A057` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Write two ...” (verbatim). Occurrence #57 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 4.
- **WHAT APPEARS NOW:** Write header digit `2` into builder.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “Write two ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row3` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Write header digit `2` into builder.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=3 — "42"; committed encoded accumulator='3#a#b0#11#hello world'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_4/A057`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Write two ...” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A058 — then hash ...

- **ANCHOR ID:** `S04:A058` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “then hash ...” (verbatim). Occurrence #58 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 4.
- **WHAT APPEARS NOW:** Write header terminator `#` next to `2`.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “then hash ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row3` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Write header terminator `#` next to `2`.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=3 — "42"; committed encoded accumulator='3#a#b0#11#hello world'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_4/A058`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “then hash ...” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A059 — then copy four two.

- **ANCHOR ID:** `S04:A059` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “then copy four two.” (verbatim). Occurrence #59 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 4.
- **WHAT APPEARS NOW:** Copy literal payload `42` into record builder.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “then copy four two.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row3` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Copy literal payload `42` into record builder.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=3 — "42"; committed encoded accumulator='3#a#b0#11#hello world'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_4/A059`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “then copy four two.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A060 — That gives the record ...

- **ANCHOR ID:** `S04:A060` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “That gives the record ...” (verbatim). Occurrence #60 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 4.
- **WHAT APPEARS NOW:** Focus complete record builder just before append.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “That gives the record ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row3` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Focus complete record builder just before append.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=3 — "42"; committed encoded accumulator='3#a#b0#11#hello world'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_4/A060`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “That gives the record ...” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A061 — two hash four two.

- **ANCHOR ID:** `S04:A061` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “two hash four two.” (verbatim). Occurrence #61 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 4.
- **WHAT APPEARS NOW:** Confirm exact builder text `2#42`.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: builder x755..1805, y350..555; source x90..710.
- **CAUSE:** Spoken phrase “two hash four two.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row3` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Confirm exact builder text `2#42`.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=3 — "42"; committed encoded accumulator='3#a#b0#11#hello world'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_4/A061`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “two hash four two.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone builder x755..1805, y350..555; source x90..710; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A062 — Append it to the encoded result.

- **ANCHOR ID:** `S04:A062` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Append it to the encoded result.” (verbatim). Occurrence #62 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RECORD 4.
- **WHAT APPEARS NOW:** Append `2#42` to accumulator, producing the final 25-character stream.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: accumulator x100..1810, y690..925.
- **CAUSE:** Spoken phrase “Append it to the encoded result.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `builder + source row3` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Append `2#42` to accumulator, producing the final 25-character stream.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Completed record-builder focus clears; output stream prefix persists and grows only by verified append.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=3 — "42"; committed encoded accumulator='3#a#b0#11#hello world2#42'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RECORD_4/A062`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Append it to the encoded result.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone accumulator x100..1810, y690..925; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A063 — And we're done.

- **ANCHOR ID:** `S04:A063` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “And we're done.” (verbatim). Occurrence #63 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RESULT / CLOSURE.
- **WHAT APPEARS NOW:** Mark all four sources as processed; don't invent an extra empty record.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: accumulator x100..1810, y690..925.
- **CAUSE:** Spoken phrase “And we're done.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `accumulated stream` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Mark all four sources as processed; don't invent an extra empty record.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=all 4 processed; committed encoded accumulator='3#a#b0#11#hello world2#42'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RESULT_/_CLOSURE/A063`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “And we're done.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone accumulator x100..1810, y690..925; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A064 — We have encoded all four strings into one continuous string.

- **ANCHOR ID:** `S04:A064` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “We have encoded all four strings into one continuous string.” (verbatim). Occurrence #64 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RESULT / CLOSURE.
- **WHAT APPEARS NOW:** Settle full accumulator `3#a#b0#11#hello world2#42` as main hero.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: accumulator x100..1810, y690..925.
- **CAUSE:** Spoken phrase “We have encoded all four strings into one continuous string.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `accumulated stream` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Settle full accumulator `3#a#b0#11#hello world2#42` as main hero.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=all 4 processed; committed encoded accumulator='3#a#b0#11#hello world2#42'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RESULT_/_CLOSURE/A064`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “We have encoded all four strings into one continuous string.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone accumulator x100..1810, y690..925; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A065 — Notice ...

- **ANCHOR ID:** `S04:A065` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Notice ...” (verbatim). Occurrence #65 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RESULT / CLOSURE.
- **WHAT APPEARS NOW:** Shift from append mechanism to meaning of adjacent records.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: accumulator x100..1810, y690..925.
- **CAUSE:** Spoken phrase “Notice ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `accumulated stream` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Shift from append mechanism to meaning of adjacent records.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=all 4 processed; committed encoded accumulator='3#a#b0#11#hello world2#42'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RESULT_/_CLOSURE/A065`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Notice ...” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone accumulator x100..1810, y690..925; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A066 — we did not add any extra separator between records.

- **ANCHOR ID:** `S04:A066` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “we did not add any extra separator between records.” (verbatim). Occurrence #66 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RESULT / CLOSURE.
- **WHAT APPEARS NOW:** Point to adjacency between `...b` and `0#`; no extra record-separator glyph inserted.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: accumulator x100..1810, y690..925.
- **CAUSE:** Spoken phrase “we did not add any extra separator between records.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `accumulated stream` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Point to adjacency between `...b` and `0#`; no extra record-separator glyph inserted.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=all 4 processed; committed encoded accumulator='3#a#b0#11#hello world2#42'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RESULT_/_CLOSURE/A066`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “we did not add any extra separator between records.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone accumulator x100..1810, y690..925; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A067 — We don't need one.

- **ANCHOR ID:** `S04:A067` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “We don't need one.” (verbatim). Occurrence #67 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RESULT / CLOSURE.
- **WHAT APPEARS NOW:** Confirm no additional delimiter needed; retain assembled string.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: accumulator x100..1810, y690..925.
- **CAUSE:** Spoken phrase “We don't need one.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `accumulated stream` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Confirm no additional delimiter needed; retain assembled string.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=all 4 processed; committed encoded accumulator='3#a#b0#11#hello world2#42'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RESULT_/_CLOSURE/A067`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “We don't need one.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone accumulator x100..1810, y690..925; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A068 — Every length header tells the decoder exactly where its payload ends ...

- **ANCHOR ID:** `S04:A068` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Every length header tells the decoder exactly where its payload ends ...” (verbatim). Occurrence #68 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RESULT / CLOSURE.
- **WHAT APPEARS NOW:** Highlight stored lengths `3`, `0`, `11`, `2` in their actual header positions, without pre-running decoder.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: accumulator x100..1810, y690..925.
- **CAUSE:** Spoken phrase “Every length header tells the decoder exactly where its payload ends ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `accumulated stream` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Highlight stored lengths `3`, `0`, `11`, `2` in their actual header positions, without pre-running decoder.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=all 4 processed; committed encoded accumulator='3#a#b0#11#hello world2#42'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RESULT_/_CLOSURE/A068`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Every length header tells the decoder exactly where its payload ends ...” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone accumulator x100..1810, y690..925; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A069 — and where the next record begins.

- **ANCHOR ID:** `S04:A069` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “and where the next record begins.” (verbatim). Occurrence #69 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RESULT / CLOSURE.
- **WHAT APPEARS NOW:** Indicate that each record ends at payload length and next begins immediately; use boundary ticks at 5,7,21,25 only after narration introduces idea.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: accumulator x100..1810, y690..925.
- **CAUSE:** Spoken phrase “and where the next record begins.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `accumulated stream` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Indicate that each record ends at payload length and next begins immediately; use boundary ticks at 5,7,21,25 only after narration introduces idea.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Clear only transient current-character focus/equation; preserve source list, current builder and committed accumulator as appropriate.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=all 4 processed; committed encoded accumulator='3#a#b0#11#hello world2#42'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RESULT_/_CLOSURE/A069`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “and where the next record begins.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone accumulator x100..1810, y690..925; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S04:A070 — Now let's write the encoder.

- **ANCHOR ID:** `S04:A070` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Now let's write the encoder.” (verbatim). Occurrence #70 in approved Scene 04 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODE RESULT / CLOSURE.
- **WHAT APPEARS NOW:** Finish trace; clear working builder/source focus and carry stream as scene-to-scene artifact.
- **CENTER-STAGE HERO:** current source string → constructed record → growing 25-char stream; active zone: accumulator x100..1810, y690..925.
- **CAUSE:** Spoken phrase “Now let's write the encoder.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `accumulated stream` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Finish trace; clear working builder/source focus and carry stream as scene-to-scene artifact.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **CLEANUP / EXIT:** Prepare scene transition only after spoken exit; no timing guessed; keep conceptual handoff item intact.
- **PERSISTENT STATE:** input=['a#b', '', 'hello world', '42']; active source row=all 4 processed; committed encoded accumulator='3#a#b0#11#hello world2#42'; only committed stream prefix renders; builder is temporary; no future record visible.
- **TRACE STEP IDS:** `Q17/ENC/ENCODE_RESULT_/_CLOSURE/A070`.
- **KIT COMPONENTS:** BoardStringList / HeaderPayloadRecord / GrowingEncodedStream (CREATE SHARED); RoughBox transparent focus; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now let's write the encoder.” and prior authorized state visible. Future narration remains hidden. No future record segments or final accumulator before append; no decode pointer/answer until Scene06.
- **COLLISION CHECK:** Active zone accumulator x100..1810, y690..925; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

## Critical semantic checkpoints — **NOT guessed frame numbers**

- **A006: output accumulator empty**
- **A021: exact first 5 bytes only**
- **A030: 7 bytes, empty payload still a record**
- **A047: 21 bytes, `hello world` includes space**
- **A062: all 25 bytes**
- **A068–A069: four headers/boundaries without fabricated extra separator**

## Audit gate distinction

**This file is a Gate A pre-audio semantic plan.** Automated check report is adjacent as `Scene04_Audit.md`. Gate B cannot be completed before the actual MP3 + exact word-sync. DO NOT claim final 100/100 or rendered-frame correctness. Rendering and font-metric collision audit must be done after implementation.

**Word identity handoff:** later resolve `S04:A001..A070` to stable source word indices `Scene04:Wxxxx`, with start/end edges and end-exclusive `[startFrame,endFrameExclusive)`; use validated sync FPS/duration, never assumed FPS.
