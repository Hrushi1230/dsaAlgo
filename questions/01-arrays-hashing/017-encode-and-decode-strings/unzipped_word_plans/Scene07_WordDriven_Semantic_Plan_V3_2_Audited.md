# Q17 — Scene 07: Decode Code

**Gate A / Pre-Audio Semantic Word-Driven Plan — V3.2 Board-Native**  
**Draft → audit → fix → re-audit workflow:** source exact phrases, no guessed frame timing.  
**Exact timing status:** `PENDING final ElevenLabs MP3 + validated exact word-sync JSON`; therefore exact `Wxxxx`, frame ranges, FPS, and pause durations **MUST NOT be fabricated**.

## Scene contract

```text
SCENE: 07
QUESTION: Q17 — Encode and Decode Strings (LeetCode 271)
BEAT TYPE: Decode Code (NON-TRACE — minimal)
SCRIPT SOURCE: Q17_Encode_Decode_Strings_Final_ElevenLabs_Narration.md
ALGORITHM TRACE SOURCE: verified source code target + original approved exact-script trace where applicable
AUDIO FILE: PENDING final MP3
SYNC FILE: PENDING validated word sync
FPS: PENDING sync
TOTAL FRAMES: PENDING sync
PEDAGOGICAL GOAL: large Python decoder lines; invariant as restrained support
TRACE STEP IDS: N/A
DATA STRUCTURE: see stage geometry
PRIMARY HERO: large Python decoder lines; invariant as restrained support
SUPPORT LEFT: See fixed geometry table
SUPPORT RIGHT: See fixed geometry table
REUSE: theme.ts / Captions
EXTEND: ChalkCodeEditorV2
CREATE SHARED: N/A
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
| scene label | 65 | 35 | 1770 | 80 | chalk |
| board-native decode code | 135 | 165 | 1305 | 746 | hero |
| invariant/current line support | 1490 | 245 | 310 | 480 | support |

**Code optical contract:** 42px (preferred, adjust up/down based on verified font metrics, keep >=36px), 55–60px line height; no dark backing, no window title bar or red/yellow/green dots; a chalk underline/active-line tint is fine. The entire code region must fit between y185 and y910 above captions. `ChalkCodeEditorV2` must be EXTENDED before reuse because its currently verified default has an opaque dark background and header.

**Global collision envelope:** title/label y28..120; hero y165..925; captions y960..1040. No teaching text or arrows may enter caption band. Coordinates are 1920×1080 nominal scene units, not guesses for time or FPS. Layout alternatives visible in different speech phases may reuse stage area; do not show them simultaneously.

## Current kit truth / usage and component lifecycle

| Component | Verified path / intended addition | Current actual API / planned API | Decision |
|---|---|---|---|
| theme.ts | `kit/lib/theme.ts` | theme.boardBg, theme.chalkText, theme.chalkDim, theme.pivot, theme.cyan, theme.good, theme.warn, theme.purple; fonts.hand/mono/code | **REUSE** |
| Captions | `kit/components/Captions.tsx` | words:{word,start,end}[], fps?,bottom?,fontSize?,maxWords?,maxWidth? (ONLY post-sync, pass exact fps) | **POST-SYNC REUSE** |
| ChalkCodeEditorV2 | `kit/components/ChalkCodeEditorV2.tsx` | lines:{num,text,indent?,startFrame,endFrame,tokens?}[], activeLineNums?,hotLineNum?,title?,language?,width?,height?,fontSize?,lineHeight?,scale?,opacity?,scrollY?,style?; CURRENT built-in dark editor chrome invalid unless extended; extension must add transparent board-native presentation backward-compatibly, remove window chrome/borders/shadow, keep progressive future-line hiding | **EXTEND (current default FORBIDDEN)** |

**Per-component lifecycle:** scene label and theme text enter only with their spoken concept; `Captions` consumes final words+FPS **after sync**; teaching source structures enter at the first introduction and retain spatial identity; temporary calculations/cursors enter on their matching anchors and clear at the next authorized step or scene exit; no future data pre-rendered visible. Components marked **CREATE SHARED** do not exist as verified imports yet—implementation must create them at an agreed `kit` path and check actual API before using. No question-local duplicate component.

## Algorithm / mathematical truth manifest

N/A — no full algorithm execution in this scene.

## Scene-specific semantic and spatial behavior

- **One dominant visual:** large Python decoder lines; invariant as restrained support. Secondary state is small but readable; no UI cards; board itself is surface.
- **Reading direction:** spoken teaching object → one primary board change → stable conclusion.
- **No-spoiler rule:** No future lines of decoder code; no full trace or future length example.
- **Scene-type discipline:** One point at a time. No full algorithm execution; do not replay traces.
- **Audio causal gating:** each exact spoken phrase below is a sequential semantic trigger, not an assumed frame allocation. Holds only from validated MP3/sync.
- **Fixed layout:** reserve positions even while a component is hidden; do not let future rows shift existing words or characters.

## Exact narration phrase → semantic animation anchors (source order)

### S07:A001 — Start with an empty result list.

- **ANCHOR ID:** `S07:A001` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Start with an empty result list.” (verbatim). Occurrence #1 in approved Scene 07 narration, in source order.
- **BEAT TYPE / PHASE:** DECODER CODE.
- **WHAT APPEARS NOW:** Reveal `result = []` in board-native code stage, output remains conceptual.
- **CENTER-STAGE HERO:** large Python decoder lines; invariant as restrained support; active zone: source code; see geometry table.
- **CAUSE:** Spoken phrase “Start with an empty result list.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source code` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal `result = []` in board-native code stage, output remains conceptual.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future lines of decoder code; no full trace or future length example.
- **CLEANUP / EXIT:** Previous active-line underline clears, completed code persists; unspoken code remains invisible.
- **PERSISTENT STATE:** Already spoken code lines persist; i=end invariant is support, not a second trace.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** ChalkCodeEditorV2 EXTEND board-native transparent mode (verified component currently dark); theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Start with an empty result list.” and prior authorized state visible. Future narration remains hidden. No future lines of decoder code; no full trace or future length example.
- **COLLISION CHECK:** Active zone source code; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S07:A002 — And set `i` to zero.

- **ANCHOR ID:** `S07:A002` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “And set `i` to zero.” (verbatim). Occurrence #2 in approved Scene 07 narration, in source order.
- **BEAT TYPE / PHASE:** DECODER CODE.
- **WHAT APPEARS NOW:** Reveal `i = 0`; invariant state cue may appear on right.
- **CENTER-STAGE HERO:** large Python decoder lines; invariant as restrained support; active zone: source code; see geometry table.
- **CAUSE:** Spoken phrase “And set `i` to zero.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source code` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal `i = 0`; invariant state cue may appear on right.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future lines of decoder code; no full trace or future length example.
- **CLEANUP / EXIT:** Previous active-line underline clears, completed code persists; unspoken code remains invisible.
- **PERSISTENT STATE:** Already spoken code lines persist; i=end invariant is support, not a second trace.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** ChalkCodeEditorV2 EXTEND board-native transparent mode (verified component currently dark); theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “And set `i` to zero.” and prior authorized state visible. Future narration remains hidden. No future lines of decoder code; no full trace or future length example.
- **COLLISION CHECK:** Active zone source code; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S07:A003 — While `i` is inside the encoded string ...

- **ANCHOR ID:** `S07:A003` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “While `i` is inside the encoded string ...” (verbatim). Occurrence #3 in approved Scene 07 narration, in source order.
- **BEAT TYPE / PHASE:** DECODER CODE.
- **WHAT APPEARS NOW:** Reveal `while i < len(s):` and make loop extent legible without dark IDE chrome.
- **CENTER-STAGE HERO:** large Python decoder lines; invariant as restrained support; active zone: source code; see geometry table.
- **CAUSE:** Spoken phrase “While `i` is inside the encoded string ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source code` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal `while i < len(s):` and make loop extent legible without dark IDE chrome.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future lines of decoder code; no full trace or future length example.
- **CLEANUP / EXIT:** Previous active-line underline clears, completed code persists; unspoken code remains invisible.
- **PERSISTENT STATE:** Already spoken code lines persist; i=end invariant is support, not a second trace.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** ChalkCodeEditorV2 EXTEND board-native transparent mode (verified component currently dark); theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “While `i` is inside the encoded string ...” and prior authorized state visible. Future narration remains hidden. No future lines of decoder code; no full trace or future length example.
- **COLLISION CHECK:** Active zone source code; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S07:A004 — set `j` to `i`.

- **ANCHOR ID:** `S07:A004` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “set `j` to `i`.” (verbatim). Occurrence #4 in approved Scene 07 narration, in source order.
- **BEAT TYPE / PHASE:** DECODER CODE.
- **WHAT APPEARS NOW:** Reveal `j = i` within outer loop.
- **CENTER-STAGE HERO:** large Python decoder lines; invariant as restrained support; active zone: source code; see geometry table.
- **CAUSE:** Spoken phrase “set `j` to `i`.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source code` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal `j = i` within outer loop.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future lines of decoder code; no full trace or future length example.
- **CLEANUP / EXIT:** Previous active-line underline clears, completed code persists; unspoken code remains invisible.
- **PERSISTENT STATE:** Already spoken code lines persist; i=end invariant is support, not a second trace.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** ChalkCodeEditorV2 EXTEND board-native transparent mode (verified component currently dark); theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “set `j` to `i`.” and prior authorized state visible. Future narration remains hidden. No future lines of decoder code; no full trace or future length example.
- **COLLISION CHECK:** Active zone source code; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S07:A005 — Move `j` until the next header hash.

- **ANCHOR ID:** `S07:A005` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Move `j` until the next header hash.” (verbatim). Occurrence #5 in approved Scene 07 narration, in source order.
- **BEAT TYPE / PHASE:** DECODER CODE.
- **WHAT APPEARS NOW:** Reveal `while s[j] != "#":` and inner advance `j += 1` as the spoken single scan unit.
- **CENTER-STAGE HERO:** large Python decoder lines; invariant as restrained support; active zone: source code; see geometry table.
- **CAUSE:** Spoken phrase “Move `j` until the next header hash.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source code` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal `while s[j] != "#":` and inner advance `j += 1` as the spoken single scan unit.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future lines of decoder code; no full trace or future length example.
- **CLEANUP / EXIT:** Previous active-line underline clears, completed code persists; unspoken code remains invisible.
- **PERSISTENT STATE:** Already spoken code lines persist; i=end invariant is support, not a second trace.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** ChalkCodeEditorV2 EXTEND board-native transparent mode (verified component currently dark); theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Move `j` until the next header hash.” and prior authorized state visible. Future narration remains hidden. No future lines of decoder code; no full trace or future length example.
- **COLLISION CHECK:** Active zone source code; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S07:A006 — Convert the digits from `i` to `j` into the length.

- **ANCHOR ID:** `S07:A006` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Convert the digits from `i` to `j` into the length.” (verbatim). Occurrence #6 in approved Scene 07 narration, in source order.
- **BEAT TYPE / PHASE:** DECODER CODE.
- **WHAT APPEARS NOW:** Reveal `length = int(s[i:j])`; highlight digits-as-header, not payload.
- **CENTER-STAGE HERO:** large Python decoder lines; invariant as restrained support; active zone: source code; see geometry table.
- **CAUSE:** Spoken phrase “Convert the digits from `i` to `j` into the length.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source code` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal `length = int(s[i:j])`; highlight digits-as-header, not payload.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future lines of decoder code; no full trace or future length example.
- **CLEANUP / EXIT:** Previous active-line underline clears, completed code persists; unspoken code remains invisible.
- **PERSISTENT STATE:** Already spoken code lines persist; i=end invariant is support, not a second trace.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** ChalkCodeEditorV2 EXTEND board-native transparent mode (verified component currently dark); theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Convert the digits from `i` to `j` into the length.” and prior authorized state visible. Future narration remains hidden. No future lines of decoder code; no full trace or future length example.
- **COLLISION CHECK:** Active zone source code; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S07:A007 — Now start is `j` plus one.

- **ANCHOR ID:** `S07:A007` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Now start is `j` plus one.” (verbatim). Occurrence #7 in approved Scene 07 narration, in source order.
- **BEAT TYPE / PHASE:** DECODER CODE.
- **WHAT APPEARS NOW:** Reveal `start = j + 1` and stable start formula support.
- **CENTER-STAGE HERO:** large Python decoder lines; invariant as restrained support; active zone: source code; see geometry table.
- **CAUSE:** Spoken phrase “Now start is `j` plus one.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source code` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal `start = j + 1` and stable start formula support.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future lines of decoder code; no full trace or future length example.
- **CLEANUP / EXIT:** Previous active-line underline clears, completed code persists; unspoken code remains invisible.
- **PERSISTENT STATE:** Already spoken code lines persist; i=end invariant is support, not a second trace.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** ChalkCodeEditorV2 EXTEND board-native transparent mode (verified component currently dark); theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now start is `j` plus one.” and prior authorized state visible. Future narration remains hidden. No future lines of decoder code; no full trace or future length example.
- **COLLISION CHECK:** Active zone source code; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S07:A008 — End is start plus length.

- **ANCHOR ID:** `S07:A008` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “End is start plus length.” (verbatim). Occurrence #8 in approved Scene 07 narration, in source order.
- **BEAT TYPE / PHASE:** DECODER CODE.
- **WHAT APPEARS NOW:** Reveal `end = start + length`; show exclusive right boundary in small support cue.
- **CENTER-STAGE HERO:** large Python decoder lines; invariant as restrained support; active zone: source code; see geometry table.
- **CAUSE:** Spoken phrase “End is start plus length.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source code` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal `end = start + length`; show exclusive right boundary in small support cue.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future lines of decoder code; no full trace or future length example.
- **CLEANUP / EXIT:** Previous active-line underline clears, completed code persists; unspoken code remains invisible.
- **PERSISTENT STATE:** Already spoken code lines persist; i=end invariant is support, not a second trace.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** ChalkCodeEditorV2 EXTEND board-native transparent mode (verified component currently dark); theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “End is start plus length.” and prior authorized state visible. Future narration remains hidden. No future lines of decoder code; no full trace or future length example.
- **COLLISION CHECK:** Active zone source code; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S07:A009 — Append that exact slice to the result.

- **ANCHOR ID:** `S07:A009` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Append that exact slice to the result.” (verbatim). Occurrence #9 in approved Scene 07 narration, in source order.
- **BEAT TYPE / PHASE:** DECODER CODE.
- **WHAT APPEARS NOW:** Reveal `result.append(s[start:end])`; keep exact Python half-open slice syntax.
- **CENTER-STAGE HERO:** large Python decoder lines; invariant as restrained support; active zone: source code; see geometry table.
- **CAUSE:** Spoken phrase “Append that exact slice to the result.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source code` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal `result.append(s[start:end])`; keep exact Python half-open slice syntax.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future lines of decoder code; no full trace or future length example.
- **CLEANUP / EXIT:** Previous active-line underline clears, completed code persists; unspoken code remains invisible.
- **PERSISTENT STATE:** Already spoken code lines persist; i=end invariant is support, not a second trace.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** ChalkCodeEditorV2 EXTEND board-native transparent mode (verified component currently dark); theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Append that exact slice to the result.” and prior authorized state visible. Future narration remains hidden. No future lines of decoder code; no full trace or future length example.
- **COLLISION CHECK:** Active zone source code; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S07:A010 — Then set `i` to end.

- **ANCHOR ID:** `S07:A010` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Then set `i` to end.” (verbatim). Occurrence #10 in approved Scene 07 narration, in source order.
- **BEAT TYPE / PHASE:** DECODER CODE.
- **WHAT APPEARS NOW:** Reveal `i = end` as key hot/invariant restoring line.
- **CENTER-STAGE HERO:** large Python decoder lines; invariant as restrained support; active zone: source code; see geometry table.
- **CAUSE:** Spoken phrase “Then set `i` to end.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source code` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal `i = end` as key hot/invariant restoring line.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future lines of decoder code; no full trace or future length example.
- **CLEANUP / EXIT:** Previous active-line underline clears, completed code persists; unspoken code remains invisible.
- **PERSISTENT STATE:** Already spoken code lines persist; i=end invariant is support, not a second trace.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** ChalkCodeEditorV2 EXTEND board-native transparent mode (verified component currently dark); theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Then set `i` to end.” and prior authorized state visible. Future narration remains hidden. No future lines of decoder code; no full trace or future length example.
- **COLLISION CHECK:** Active zone source code; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S07:A011 — This takes us to the next record.

- **ANCHOR ID:** `S07:A011` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “This takes us to the next record.” (verbatim). Occurrence #11 in approved Scene 07 narration, in source order.
- **BEAT TYPE / PHASE:** DECODER CODE.
- **WHAT APPEARS NOW:** Underline `i = end` while displaying invariant `next header` in support stage.
- **CENTER-STAGE HERO:** large Python decoder lines; invariant as restrained support; active zone: source code; see geometry table.
- **CAUSE:** Spoken phrase “This takes us to the next record.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source code` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Underline `i = end` while displaying invariant `next header` in support stage.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future lines of decoder code; no full trace or future length example.
- **CLEANUP / EXIT:** Previous active-line underline clears, completed code persists; unspoken code remains invisible.
- **PERSISTENT STATE:** Already spoken code lines persist; i=end invariant is support, not a second trace.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** ChalkCodeEditorV2 EXTEND board-native transparent mode (verified component currently dark); theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “This takes us to the next record.” and prior authorized state visible. Future narration remains hidden. No future lines of decoder code; no full trace or future length example.
- **COLLISION CHECK:** Active zone source code; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S07:A012 — Repeat until the string is finished.

- **ANCHOR ID:** `S07:A012` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Repeat until the string is finished.” (verbatim). Occurrence #12 in approved Scene 07 narration, in source order.
- **BEAT TYPE / PHASE:** DECODER CODE.
- **WHAT APPEARS NOW:** Settle loop repetition concept; no full four-record example retrace.
- **CENTER-STAGE HERO:** large Python decoder lines; invariant as restrained support; active zone: source code; see geometry table.
- **CAUSE:** Spoken phrase “Repeat until the string is finished.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source code` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Settle loop repetition concept; no full four-record example retrace.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future lines of decoder code; no full trace or future length example.
- **CLEANUP / EXIT:** Previous active-line underline clears, completed code persists; unspoken code remains invisible.
- **PERSISTENT STATE:** Already spoken code lines persist; i=end invariant is support, not a second trace.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** ChalkCodeEditorV2 EXTEND board-native transparent mode (verified component currently dark); theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Repeat until the string is finished.” and prior authorized state visible. Future narration remains hidden. No future lines of decoder code; no full trace or future length example.
- **COLLISION CHECK:** Active zone source code; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S07:A013 — Finally ...

- **ANCHOR ID:** `S07:A013` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Finally ...” (verbatim). Occurrence #13 in approved Scene 07 narration, in source order.
- **BEAT TYPE / PHASE:** DECODER CODE.
- **WHAT APPEARS NOW:** Do not show return before spoken conclusion.
- **CENTER-STAGE HERO:** large Python decoder lines; invariant as restrained support; active zone: source code; see geometry table.
- **CAUSE:** Spoken phrase “Finally ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source code` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Do not show return before spoken conclusion.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future lines of decoder code; no full trace or future length example.
- **CLEANUP / EXIT:** Previous active-line underline clears, completed code persists; unspoken code remains invisible.
- **PERSISTENT STATE:** Already spoken code lines persist; i=end invariant is support, not a second trace.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** ChalkCodeEditorV2 EXTEND board-native transparent mode (verified component currently dark); theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Finally ...” and prior authorized state visible. Future narration remains hidden. No future lines of decoder code; no full trace or future length example.
- **COLLISION CHECK:** Active zone source code; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S07:A014 — return the result.

- **ANCHOR ID:** `S07:A014` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “return the result.” (verbatim). Occurrence #14 in approved Scene 07 narration, in source order.
- **BEAT TYPE / PHASE:** DECODER CODE.
- **WHAT APPEARS NOW:** Reveal `return result` only now.
- **CENTER-STAGE HERO:** large Python decoder lines; invariant as restrained support; active zone: source code; see geometry table.
- **CAUSE:** Spoken phrase “return the result.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source code` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal `return result` only now.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future lines of decoder code; no full trace or future length example.
- **CLEANUP / EXIT:** Previous active-line underline clears, completed code persists; unspoken code remains invisible.
- **PERSISTENT STATE:** Already spoken code lines persist; i=end invariant is support, not a second trace.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** ChalkCodeEditorV2 EXTEND board-native transparent mode (verified component currently dark); theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “return the result.” and prior authorized state visible. Future narration remains hidden. No future lines of decoder code; no full trace or future length example.
- **COLLISION CHECK:** Active zone source code; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S07:A015 — That's the complete decoder.

- **ANCHOR ID:** `S07:A015` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “That's the complete decoder.” (verbatim). Occurrence #15 in approved Scene 07 narration, in source order.
- **BEAT TYPE / PHASE:** DECODER CODE.
- **WHAT APPEARS NOW:** Settle full decoder code; board-native no black editor.
- **CENTER-STAGE HERO:** large Python decoder lines; invariant as restrained support; active zone: source code; see geometry table.
- **CAUSE:** Spoken phrase “That's the complete decoder.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source code` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Settle full decoder code; board-native no black editor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future lines of decoder code; no full trace or future length example.
- **CLEANUP / EXIT:** Prepare scene transition only after spoken exit; no timing guessed; keep conceptual handoff item intact.
- **PERSISTENT STATE:** Already spoken code lines persist; i=end invariant is support, not a second trace.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** ChalkCodeEditorV2 EXTEND board-native transparent mode (verified component currently dark); theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “That's the complete decoder.” and prior authorized state visible. Future narration remains hidden. No future lines of decoder code; no full trace or future length example.
- **COLLISION CHECK:** Active zone source code; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

## Verified decoder code target — **NOT SPOKEN**

```python
class Codec:
    def decode(self, s):
        result = []
        i = 0
        while i < len(s):
            j = i
            while s[j] != "#":
                j += 1
            length = int(s[i:j])
            start = j + 1
            end = start + length
            result.append(s[start:end])
            i = end
        return result
```

Code target taken from `Q17_Encode_Decode_Strings_PHASE7_NARRATION_VERIFIED_V2.md`, Scene07 code target. No second trace. The original verified code is authoritative; display via transparent board-native code presentation, not current dark editor chrome.

## Critical semantic checkpoints — **NOT guessed frame numbers**

- **A001–A003: result,i,outer while code progressively**
- **A004–A006: j header scan and length parse**
- **A007–A010: start/end/slice/i=end visible**
- **A015: complete no dark editor**

## Audit gate distinction

**This file is a Gate A pre-audio semantic plan.** Automated check report is adjacent as `Scene07_Audit.md`. Gate B cannot be completed before the actual MP3 + exact word-sync. DO NOT claim final 100/100 or rendered-frame correctness. Rendering and font-metric collision audit must be done after implementation.

**Word identity handoff:** later resolve `S07:A001..A015` to stable source word indices `Scene07:Wxxxx`, with start/end edges and end-exclusive `[startFrame,endFrameExclusive)`; use validated sync FPS/duration, never assumed FPS.
