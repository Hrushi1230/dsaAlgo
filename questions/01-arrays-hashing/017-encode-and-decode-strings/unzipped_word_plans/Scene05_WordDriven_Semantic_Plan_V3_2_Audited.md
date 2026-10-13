# Q17 — Scene 05: Encode Code

**Gate A / Pre-Audio Semantic Word-Driven Plan — V3.2 Board-Native**  
**Draft → audit → fix → re-audit workflow:** source exact phrases, no guessed frame timing.  
**Exact timing status:** `PENDING final ElevenLabs MP3 + validated exact word-sync JSON`; therefore exact `Wxxxx`, frame ranges, FPS, and pause durations **MUST NOT be fabricated**.

## Scene contract

```text
SCENE: 05
QUESTION: Q17 — Encode and Decode Strings (LeetCode 271)
BEAT TYPE: Encode Code (NON-TRACE — minimal)
SCRIPT SOURCE: Q17_Encode_Decode_Strings_Final_ElevenLabs_Narration.md
ALGORITHM TRACE SOURCE: verified source code target + original approved exact-script trace where applicable
AUDIO FILE: PENDING final MP3
SYNC FILE: PENDING validated word sync
FPS: PENDING sync
TOTAL FRAMES: PENDING sync
PEDAGOGICAL GOAL: large Python encoder lines, no dark editor chrome
TRACE STEP IDS: N/A
DATA STRUCTURE: see stage geometry
PRIMARY HERO: large Python encoder lines, no dark editor chrome
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
| scene label | 65 | 35 | 1760 | 80 | chalk |
| board-native encode code | 160 | 185 | 1320 | 705 | hero |
| support relation | 1530 | 260 | 285 | 540 | support |

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

- **One dominant visual:** large Python encoder lines, no dark editor chrome. Secondary state is small but readable; no UI cards; board itself is surface.
- **Reading direction:** spoken teaching object → one primary board change → stable conclusion.
- **No-spoiler rule:** No future code lines, no full code at entry, no decoder code, no dark editor.
- **Scene-type discipline:** One point at a time. No full algorithm execution; do not replay traces.
- **Audio causal gating:** each exact spoken phrase below is a sequential semantic trigger, not an assumed frame allocation. Holds only from validated MP3/sync.
- **Fixed layout:** reserve positions even while a component is hidden; do not let future rows shift existing words or characters.

## Exact narration phrase → semantic animation anchors (source order)

### S05:A001 — The code is short.

- **ANCHOR ID:** `S05:A001` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “The code is short.” (verbatim). Occurrence #1 in approved Scene 05 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODER CODE.
- **WHAT APPEARS NOW:** Clear trace visuals; reserve board-native code stage. No code lines prematurely revealed.
- **CENTER-STAGE HERO:** large Python encoder lines, no dark editor chrome; active zone: source code; see geometry table.
- **CAUSE:** Spoken phrase “The code is short.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source code` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Clear trace visuals; reserve board-native code stage. No code lines prematurely revealed.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future code lines, no full code at entry, no decoder code, no dark editor.
- **CLEANUP / EXIT:** Previous active-line underline clears, completed code persists; unspoken code remains invisible.
- **PERSISTENT STATE:** Already spoken code lines persist and unspoken lines stay 100% hidden; code changes do not mutate master input.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** ChalkCodeEditorV2 EXTEND board-native transparent mode (verified component currently dark); theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “The code is short.” and prior authorized state visible. Future narration remains hidden. No future code lines, no full code at entry, no decoder code, no dark editor.
- **COLLISION CHECK:** Active zone source code; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S05:A002 — Create an empty list called `parts`.

- **ANCHOR ID:** `S05:A002` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Create an empty list called `parts`.” (verbatim). Occurrence #2 in approved Scene 05 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODER CODE.
- **WHAT APPEARS NOW:** Reveal `parts = []` as first real code line; indicate variable as empty parts list.
- **CENTER-STAGE HERO:** large Python encoder lines, no dark editor chrome; active zone: source code; see geometry table.
- **CAUSE:** Spoken phrase “Create an empty list called `parts`.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source code` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal `parts = []` as first real code line; indicate variable as empty parts list.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future code lines, no full code at entry, no decoder code, no dark editor.
- **CLEANUP / EXIT:** Previous active-line underline clears, completed code persists; unspoken code remains invisible.
- **PERSISTENT STATE:** Already spoken code lines persist and unspoken lines stay 100% hidden; code changes do not mutate master input.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** ChalkCodeEditorV2 EXTEND board-native transparent mode (verified component currently dark); theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Create an empty list called `parts`.” and prior authorized state visible. Future narration remains hidden. No future code lines, no full code at entry, no decoder code, no dark editor.
- **COLLISION CHECK:** Active zone source code; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S05:A003 — For every input string ...

- **ANCHOR ID:** `S05:A003` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “For every input string ...” (verbatim). Occurrence #3 in approved Scene 05 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODER CODE.
- **WHAT APPEARS NOW:** Reveal `for s in strs:`; an optional source-string cue on right is secondary, no full trace.
- **CENTER-STAGE HERO:** large Python encoder lines, no dark editor chrome; active zone: source code; see geometry table.
- **CAUSE:** Spoken phrase “For every input string ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source code` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal `for s in strs:`; an optional source-string cue on right is secondary, no full trace.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future code lines, no full code at entry, no decoder code, no dark editor.
- **CLEANUP / EXIT:** Previous active-line underline clears, completed code persists; unspoken code remains invisible.
- **PERSISTENT STATE:** Already spoken code lines persist and unspoken lines stay 100% hidden; code changes do not mutate master input.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** ChalkCodeEditorV2 EXTEND board-native transparent mode (verified component currently dark); theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “For every input string ...” and prior authorized state visible. Future narration remains hidden. No future code lines, no full code at entry, no decoder code, no dark editor.
- **COLLISION CHECK:** Active zone source code; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S05:A004 — append its length as text ...

- **ANCHOR ID:** `S05:A004` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “append its length as text ...” (verbatim). Occurrence #4 in approved Scene 05 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODER CODE.
- **WHAT APPEARS NOW:** Reveal `parts.append(str(len(s)))`; emphasize length-to-text conversion.
- **CENTER-STAGE HERO:** large Python encoder lines, no dark editor chrome; active zone: source code; see geometry table.
- **CAUSE:** Spoken phrase “append its length as text ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source code` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal `parts.append(str(len(s)))`; emphasize length-to-text conversion.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future code lines, no full code at entry, no decoder code, no dark editor.
- **CLEANUP / EXIT:** Previous active-line underline clears, completed code persists; unspoken code remains invisible.
- **PERSISTENT STATE:** Already spoken code lines persist and unspoken lines stay 100% hidden; code changes do not mutate master input.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** ChalkCodeEditorV2 EXTEND board-native transparent mode (verified component currently dark); theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “append its length as text ...” and prior authorized state visible. Future narration remains hidden. No future code lines, no full code at entry, no decoder code, no dark editor.
- **COLLISION CHECK:** Active zone source code; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S05:A005 — append the hash ...

- **ANCHOR ID:** `S05:A005` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “append the hash ...” (verbatim). Occurrence #5 in approved Scene 05 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODER CODE.
- **WHAT APPEARS NOW:** Reveal `parts.append("#")`; mark one header hash only.
- **CENTER-STAGE HERO:** large Python encoder lines, no dark editor chrome; active zone: source code; see geometry table.
- **CAUSE:** Spoken phrase “append the hash ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source code` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal `parts.append("#")`; mark one header hash only.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future code lines, no full code at entry, no decoder code, no dark editor.
- **CLEANUP / EXIT:** Previous active-line underline clears, completed code persists; unspoken code remains invisible.
- **PERSISTENT STATE:** Already spoken code lines persist and unspoken lines stay 100% hidden; code changes do not mutate master input.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** ChalkCodeEditorV2 EXTEND board-native transparent mode (verified component currently dark); theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “append the hash ...” and prior authorized state visible. Future narration remains hidden. No future code lines, no full code at entry, no decoder code, no dark editor.
- **COLLISION CHECK:** Active zone source code; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S05:A006 — then append the string itself.

- **ANCHOR ID:** `S05:A006` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “then append the string itself.” (verbatim). Occurrence #6 in approved Scene 05 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODER CODE.
- **WHAT APPEARS NOW:** Reveal `parts.append(s)`; copy payload as string data.
- **CENTER-STAGE HERO:** large Python encoder lines, no dark editor chrome; active zone: source code; see geometry table.
- **CAUSE:** Spoken phrase “then append the string itself.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source code` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal `parts.append(s)`; copy payload as string data.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future code lines, no full code at entry, no decoder code, no dark editor.
- **CLEANUP / EXIT:** Previous active-line underline clears, completed code persists; unspoken code remains invisible.
- **PERSISTENT STATE:** Already spoken code lines persist and unspoken lines stay 100% hidden; code changes do not mutate master input.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** ChalkCodeEditorV2 EXTEND board-native transparent mode (verified component currently dark); theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “then append the string itself.” and prior authorized state visible. Future narration remains hidden. No future code lines, no full code at entry, no decoder code, no dark editor.
- **COLLISION CHECK:** Active zone source code; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S05:A007 — After the loop ...

- **ANCHOR ID:** `S05:A007` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “After the loop ...” (verbatim). Occurrence #7 in approved Scene 05 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODER CODE.
- **WHAT APPEARS NOW:** Focus loop scope as completed; do not introduce a second example trace.
- **CENTER-STAGE HERO:** large Python encoder lines, no dark editor chrome; active zone: source code; see geometry table.
- **CAUSE:** Spoken phrase “After the loop ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source code` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Focus loop scope as completed; do not introduce a second example trace.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future code lines, no full code at entry, no decoder code, no dark editor.
- **CLEANUP / EXIT:** Previous active-line underline clears, completed code persists; unspoken code remains invisible.
- **PERSISTENT STATE:** Already spoken code lines persist and unspoken lines stay 100% hidden; code changes do not mutate master input.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** ChalkCodeEditorV2 EXTEND board-native transparent mode (verified component currently dark); theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “After the loop ...” and prior authorized state visible. Future narration remains hidden. No future code lines, no full code at entry, no decoder code, no dark editor.
- **COLLISION CHECK:** Active zone source code; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S05:A008 — join all the parts into one string.

- **ANCHOR ID:** `S05:A008` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “join all the parts into one string.” (verbatim). Occurrence #8 in approved Scene 05 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODER CODE.
- **WHAT APPEARS NOW:** Reveal `return "".join(parts)`; show join only once.
- **CENTER-STAGE HERO:** large Python encoder lines, no dark editor chrome; active zone: source code; see geometry table.
- **CAUSE:** Spoken phrase “join all the parts into one string.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source code` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal `return "".join(parts)`; show join only once.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future code lines, no full code at entry, no decoder code, no dark editor.
- **CLEANUP / EXIT:** Previous active-line underline clears, completed code persists; unspoken code remains invisible.
- **PERSISTENT STATE:** Already spoken code lines persist and unspoken lines stay 100% hidden; code changes do not mutate master input.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** ChalkCodeEditorV2 EXTEND board-native transparent mode (verified component currently dark); theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “join all the parts into one string.” and prior authorized state visible. Future narration remains hidden. No future code lines, no full code at entry, no decoder code, no dark editor.
- **COLLISION CHECK:** Active zone source code; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S05:A009 — And return it.

- **ANCHOR ID:** `S05:A009` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “And return it.” (verbatim). Occurrence #9 in approved Scene 05 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODER CODE.
- **WHAT APPEARS NOW:** Give return keyword active focus; joined value is conceptual, not reveal all trace steps again.
- **CENTER-STAGE HERO:** large Python encoder lines, no dark editor chrome; active zone: source code; see geometry table.
- **CAUSE:** Spoken phrase “And return it.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source code` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Give return keyword active focus; joined value is conceptual, not reveal all trace steps again.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future code lines, no full code at entry, no decoder code, no dark editor.
- **CLEANUP / EXIT:** Previous active-line underline clears, completed code persists; unspoken code remains invisible.
- **PERSISTENT STATE:** Already spoken code lines persist and unspoken lines stay 100% hidden; code changes do not mutate master input.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** ChalkCodeEditorV2 EXTEND board-native transparent mode (verified component currently dark); theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “And return it.” and prior authorized state visible. Future narration remains hidden. No future code lines, no full code at entry, no decoder code, no dark editor.
- **COLLISION CHECK:** Active zone source code; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S05:A010 — That's the encoder.

- **ANCHOR ID:** `S05:A010` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “That's the encoder.” (verbatim). Occurrence #10 in approved Scene 05 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODER CODE.
- **WHAT APPEARS NOW:** Settle five-step encoder causal flow, no cards and no second walkthrough.
- **CENTER-STAGE HERO:** large Python encoder lines, no dark editor chrome; active zone: source code; see geometry table.
- **CAUSE:** Spoken phrase “That's the encoder.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source code` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Settle five-step encoder causal flow, no cards and no second walkthrough.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future code lines, no full code at entry, no decoder code, no dark editor.
- **CLEANUP / EXIT:** Previous active-line underline clears, completed code persists; unspoken code remains invisible.
- **PERSISTENT STATE:** Already spoken code lines persist and unspoken lines stay 100% hidden; code changes do not mutate master input.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** ChalkCodeEditorV2 EXTEND board-native transparent mode (verified component currently dark); theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “That's the encoder.” and prior authorized state visible. Future narration remains hidden. No future code lines, no full code at entry, no decoder code, no dark editor.
- **COLLISION CHECK:** Active zone source code; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S05:A011 — Now let's decode the string we created.

- **ANCHOR ID:** `S05:A011` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Now let's decode the string we created.” (verbatim). Occurrence #11 in approved Scene 05 narration, in source order.
- **BEAT TYPE / PHASE:** ENCODER CODE.
- **WHAT APPEARS NOW:** Clear code emphasis; pass final encoded string from previous trace as conceptual next-scene input.
- **CENTER-STAGE HERO:** large Python encoder lines, no dark editor chrome; active zone: source code; see geometry table.
- **CAUSE:** Spoken phrase “Now let's decode the string we created.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `source code` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Clear code emphasis; pass final encoded string from previous trace as conceptual next-scene input.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future code lines, no full code at entry, no decoder code, no dark editor.
- **CLEANUP / EXIT:** Prepare scene transition only after spoken exit; no timing guessed; keep conceptual handoff item intact.
- **PERSISTENT STATE:** Already spoken code lines persist and unspoken lines stay 100% hidden; code changes do not mutate master input.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** ChalkCodeEditorV2 EXTEND board-native transparent mode (verified component currently dark); theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** CLEANUP / TRANSITION of old beat, preserve authorized state; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now let's decode the string we created.” and prior authorized state visible. Future narration remains hidden. No future code lines, no full code at entry, no decoder code, no dark editor.
- **COLLISION CHECK:** Active zone source code; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

## Verified encoder code target — **NOT SPOKEN**

```python
class Codec:
    def encode(self, strs):
        parts = []
        for s in strs:
            parts.append(str(len(s)))
            parts.append("#")
            parts.append(s)
        return "".join(parts)
```

This code target is sourced from `Q17_Encode_Decode_Strings_PHASE7_NARRATION_VERIFIED_V2.md`, Scene05 code target. Explain lines only at matching final narration anchors. The displayed code must be board-native and active-line reveal must not disclose future lines.

## Critical semantic checkpoints — **NOT guessed frame numbers**

- **A002: only first code line visible**
- **A003–A006: loop/header/hash/payload revealed in order**
- **A008–A009: join+return, no dark editor**
- **exit: no decoder code leak**

## Audit gate distinction

**This file is a Gate A pre-audio semantic plan.** Automated check report is adjacent as `Scene05_Audit.md`. Gate B cannot be completed before the actual MP3 + exact word-sync. DO NOT claim final 100/100 or rendered-frame correctness. Rendering and font-metric collision audit must be done after implementation.

**Word identity handoff:** later resolve `S05:A001..A011` to stable source word indices `Scene05:Wxxxx`, with start/end edges and end-exclusive `[startFrame,endFrameExclusive)`; use validated sync FPS/duration, never assumed FPS.
