# Q17 — Scene 03: Length-Prefix Idea

**Gate A / Pre-Audio Semantic Word-Driven Plan — V3.2 Board-Native**  
**Draft → audit → fix → re-audit workflow:** source exact phrases, no guessed frame timing.  
**Exact timing status:** `PENDING final ElevenLabs MP3 + validated exact word-sync JSON`; therefore exact `Wxxxx`, frame ranges, FPS, and pause durations **MUST NOT be fabricated**.

## Scene contract

```text
SCENE: 03
QUESTION: Q17 — Encode and Decode Strings (LeetCode 271)
BEAT TYPE: Length-Prefix Idea (NON-TRACE — minimal)
SCRIPT SOURCE: Q17_Encode_Decode_Strings_Final_ElevenLabs_Narration.md
ALGORITHM TRACE SOURCE: verified source code target + original approved exact-script trace where applicable
AUDIO FILE: PENDING final MP3
SYNC FILE: PENDING validated word sync
FPS: PENDING sync
TOTAL FRAMES: PENDING sync
PEDAGOGICAL GOAL: length  #  payload formula and pointer invariant
TRACE STEP IDS: N/A
DATA STRUCTURE: see stage geometry
PRIMARY HERO: length  #  payload formula and pointer invariant
SUPPORT LEFT: See fixed geometry table
SUPPORT RIGHT: See fixed geometry table
REUSE: theme.ts / RoughLine / Captions
EXTEND: N/A
CREATE SHARED: HeaderPayloadRecord (proposed; not in verified repo)
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
| scene label | 70 | 34 | 1630 | 76 | chalk |
| single record formula | 220 | 290 | 1480 | 280 | hero |
| metadata/payload explanation | 280 | 610 | 1390 | 150 | support |
| pointer i invariant | 360 | 790 | 1170 | 100 | support |

**Global collision envelope:** title/label y28..120; hero y165..925; captions y960..1040. No teaching text or arrows may enter caption band. Coordinates are 1920×1080 nominal scene units, not guesses for time or FPS. Layout alternatives visible in different speech phases may reuse stage area; do not show them simultaneously.

## Current kit truth / usage and component lifecycle

| Component | Verified path / intended addition | Current actual API / planned API | Decision |
|---|---|---|---|
| theme.ts | `kit/lib/theme.ts` | theme.boardBg, theme.chalkText, theme.chalkDim, theme.pivot, theme.cyan, theme.good, theme.warn, theme.purple; fonts.hand/mono/code | **REUSE** |
| RoughLine | `kit/components/RoughLine.tsx` | shape:{kind:"line"/"arrow"/"circle", coordinates}; width,height,startFrame?,durationInFrames?,stroke?,strokeWidth?,seed? | **REUSE** |
| Captions | `kit/components/Captions.tsx` | words:{word,start,end}[], fps?,bottom?,fontSize?,maxWords?,maxWidth? (ONLY post-sync, pass exact fps) | **POST-SYNC REUSE** |
| HeaderPayloadRecord (proposed; not in verified repo) | `NEW SHARED (proposed; NO verified file path)` | not invented | **CREATE SHARED** |

**Per-component lifecycle:** scene label and theme text enter only with their spoken concept; `Captions` consumes final words+FPS **after sync**; teaching source structures enter at the first introduction and retain spatial identity; temporary calculations/cursors enter on their matching anchors and clear at the next authorized step or scene exit; no future data pre-rendered visible. Components marked **CREATE SHARED** do not exist as verified imports yet—implementation must create them at an agreed `kit` path and check actual API before using. No question-local duplicate component.

## Algorithm / mathematical truth manifest

N/A — no full algorithm execution in this scene.

## Scene-specific semantic and spatial behavior

- **One dominant visual:** length  #  payload formula and pointer invariant. Secondary state is small but readable; no UI cards; board itself is surface.
- **Reading direction:** spoken teaching object → one primary board change → stable conclusion.
- **No-spoiler rule:** No concrete full trace, completed encoded master stream, future source records, code, complexity.
- **Scene-type discipline:** One point at a time. No full algorithm execution; do not replay traces.
- **Audio causal gating:** each exact spoken phrase below is a sequential semantic trigger, not an assumed frame allocation. Holds only from validated MP3/sync.
- **Fixed layout:** reserve positions even while a component is hidden; do not let future rows shift existing words or characters.

## Exact narration phrase → semantic animation anchors (source order)

### S03:A001 — The idea is simple.

- **ANCHOR ID:** `S03:A001` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “The idea is simple.” (verbatim). Occurrence #1 in approved Scene 03 narration, in source order.
- **BEAT TYPE / PHASE:** IDEA ONLY.
- **WHAT APPEARS NOW:** Clear raw-delimiter failure; center stage stays deliberately empty until the protocol begins.
- **CENTER-STAGE HERO:** length  #  payload formula and pointer invariant; active zone: protocol formula; see geometry table.
- **CAUSE:** Spoken phrase “The idea is simple.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `protocol formula` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Clear raw-delimiter failure; center stage stays deliberately empty until the protocol begins.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No concrete full trace, completed encoded master stream, future source records, code, complexity.
- **CLEANUP / EXIT:** Temporary word focus clears; record formula persists until Scene04 transition.
- **PERSISTENT STATE:** Generic `length#payload` relation only; no master encoded bytes or decoded output.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** HeaderPayloadRecord (CREATE SHARED) + theme.ts + RoughLine if relation spoken; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** CLEANUP / TRANSITION of old beat, preserve authorized state; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “The idea is simple.” and prior authorized state visible. Future narration remains hidden. No concrete full trace, completed encoded master stream, future source records, code, complexity.
- **COLLISION CHECK:** Active zone protocol formula; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S03:A002 — For every string ...

- **ANCHOR ID:** `S03:A002` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “For every string ...” (verbatim). Occurrence #2 in approved Scene 03 narration, in source order.
- **BEAT TYPE / PHASE:** IDEA ONLY.
- **WHAT APPEARS NOW:** Introduce one generic source string `s` on left; reserve formula stage, no encoded master string.
- **CENTER-STAGE HERO:** length  #  payload formula and pointer invariant; active zone: protocol formula; see geometry table.
- **CAUSE:** Spoken phrase “For every string ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `protocol formula` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Introduce one generic source string `s` on left; reserve formula stage, no encoded master string.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No concrete full trace, completed encoded master stream, future source records, code, complexity.
- **CLEANUP / EXIT:** Temporary word focus clears; record formula persists until Scene04 transition.
- **PERSISTENT STATE:** Generic `length#payload` relation only; no master encoded bytes or decoded output.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** HeaderPayloadRecord (CREATE SHARED) + theme.ts + RoughLine if relation spoken; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “For every string ...” and prior authorized state visible. Future narration remains hidden. No concrete full trace, completed encoded master stream, future source records, code, complexity.
- **COLLISION CHECK:** Active zone protocol formula; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S03:A003 — write its length ...

- **ANCHOR ID:** `S03:A003` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “write its length ...” (verbatim). Occurrence #3 in approved Scene 03 narration, in source order.
- **BEAT TYPE / PHASE:** IDEA ONLY.
- **WHAT APPEARS NOW:** Reveal length token `len(s)` at left of center formula, large gold chalk.
- **CENTER-STAGE HERO:** length  #  payload formula and pointer invariant; active zone: protocol formula; see geometry table.
- **CAUSE:** Spoken phrase “write its length ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `protocol formula` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal length token `len(s)` at left of center formula, large gold chalk.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No concrete full trace, completed encoded master stream, future source records, code, complexity.
- **CLEANUP / EXIT:** Temporary word focus clears; record formula persists until Scene04 transition.
- **PERSISTENT STATE:** Generic `length#payload` relation only; no master encoded bytes or decoded output.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** HeaderPayloadRecord (CREATE SHARED) + theme.ts + RoughLine if relation spoken; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “write its length ...” and prior authorized state visible. Future narration remains hidden. No concrete full trace, completed encoded master stream, future source records, code, complexity.
- **COLLISION CHECK:** Active zone protocol formula; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S03:A004 — then a hash ...

- **ANCHOR ID:** `S03:A004` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “then a hash ...” (verbatim). Occurrence #4 in approved Scene 03 narration, in source order.
- **BEAT TYPE / PHASE:** IDEA ONLY.
- **WHAT APPEARS NOW:** Reveal `#` immediately after `len(s)`, visually classified as header terminator, not payload separator.
- **CENTER-STAGE HERO:** length  #  payload formula and pointer invariant; active zone: protocol formula; see geometry table.
- **CAUSE:** Spoken phrase “then a hash ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `protocol formula` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal `#` immediately after `len(s)`, visually classified as header terminator, not payload separator.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No concrete full trace, completed encoded master stream, future source records, code, complexity.
- **CLEANUP / EXIT:** Temporary word focus clears; record formula persists until Scene04 transition.
- **PERSISTENT STATE:** Generic `length#payload` relation only; no master encoded bytes or decoded output.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** HeaderPayloadRecord (CREATE SHARED) + theme.ts + RoughLine if relation spoken; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “then a hash ...” and prior authorized state visible. Future narration remains hidden. No concrete full trace, completed encoded master stream, future source records, code, complexity.
- **COLLISION CHECK:** Active zone protocol formula; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S03:A005 — then the original string.

- **ANCHOR ID:** `S03:A005` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “then the original string.” (verbatim). Occurrence #5 in approved Scene 03 narration, in source order.
- **BEAT TYPE / PHASE:** IDEA ONLY.
- **WHAT APPEARS NOW:** Reveal payload `s` after header hash; all three token groups remain fixed.
- **CENTER-STAGE HERO:** length  #  payload formula and pointer invariant; active zone: protocol formula; see geometry table.
- **CAUSE:** Spoken phrase “then the original string.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `protocol formula` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal payload `s` after header hash; all three token groups remain fixed.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No concrete full trace, completed encoded master stream, future source records, code, complexity.
- **CLEANUP / EXIT:** Temporary word focus clears; record formula persists until Scene04 transition.
- **PERSISTENT STATE:** Generic `length#payload` relation only; no master encoded bytes or decoded output.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** HeaderPayloadRecord (CREATE SHARED) + theme.ts + RoughLine if relation spoken; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “then the original string.” and prior authorized state visible. Future narration remains hidden. No concrete full trace, completed encoded master stream, future source records, code, complexity.
- **COLLISION CHECK:** Active zone protocol formula; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S03:A006 — So our record format becomes ...

- **ANCHOR ID:** `S03:A006` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “So our record format becomes ...” (verbatim). Occurrence #6 in approved Scene 03 narration, in source order.
- **BEAT TYPE / PHASE:** IDEA ONLY.
- **WHAT APPEARS NOW:** Shift reading focus to the assembled record formula; no extra trace calculations.
- **CENTER-STAGE HERO:** length  #  payload formula and pointer invariant; active zone: protocol formula; see geometry table.
- **CAUSE:** Spoken phrase “So our record format becomes ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `protocol formula` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Shift reading focus to the assembled record formula; no extra trace calculations.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No concrete full trace, completed encoded master stream, future source records, code, complexity.
- **CLEANUP / EXIT:** Temporary word focus clears; record formula persists until Scene04 transition.
- **PERSISTENT STATE:** Generic `length#payload` relation only; no master encoded bytes or decoded output.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** HeaderPayloadRecord (CREATE SHARED) + theme.ts + RoughLine if relation spoken; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “So our record format becomes ...” and prior authorized state visible. Future narration remains hidden. No concrete full trace, completed encoded master stream, future source records, code, complexity.
- **COLLISION CHECK:** Active zone protocol formula; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S03:A007 — length ... hash ... payload.

- **ANCHOR ID:** `S03:A007` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “length ... hash ... payload.” (verbatim). Occurrence #7 in approved Scene 03 narration, in source order.
- **BEAT TYPE / PHASE:** IDEA ONLY.
- **WHAT APPEARS NOW:** Center hero becomes `length  #  payload` using separated semantic colors; nothing more.
- **CENTER-STAGE HERO:** length  #  payload formula and pointer invariant; active zone: protocol formula; see geometry table.
- **CAUSE:** Spoken phrase “length ... hash ... payload.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `protocol formula` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Center hero becomes `length  #  payload` using separated semantic colors; nothing more.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No concrete full trace, completed encoded master stream, future source records, code, complexity.
- **CLEANUP / EXIT:** Temporary word focus clears; record formula persists until Scene04 transition.
- **PERSISTENT STATE:** Generic `length#payload` relation only; no master encoded bytes or decoded output.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** HeaderPayloadRecord (CREATE SHARED) + theme.ts + RoughLine if relation spoken; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “length ... hash ... payload.” and prior authorized state visible. Future narration remains hidden. No concrete full trace, completed encoded master stream, future source records, code, complexity.
- **COLLISION CHECK:** Active zone protocol formula; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S03:A008 — The hash ends the length header.

- **ANCHOR ID:** `S03:A008` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “The hash ends the length header.” (verbatim). Occurrence #8 in approved Scene 03 narration, in source order.
- **BEAT TYPE / PHASE:** IDEA ONLY.
- **WHAT APPEARS NOW:** Underline `length#` as the metadata header; do NOT suggest later hashes are delimiters.
- **CENTER-STAGE HERO:** length  #  payload formula and pointer invariant; active zone: protocol formula; see geometry table.
- **CAUSE:** Spoken phrase “The hash ends the length header.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `protocol formula` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Underline `length#` as the metadata header; do NOT suggest later hashes are delimiters.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No concrete full trace, completed encoded master stream, future source records, code, complexity.
- **CLEANUP / EXIT:** Temporary word focus clears; record formula persists until Scene04 transition.
- **PERSISTENT STATE:** Generic `length#payload` relation only; no master encoded bytes or decoded output.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** HeaderPayloadRecord (CREATE SHARED) + theme.ts + RoughLine if relation spoken; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “The hash ends the length header.” and prior authorized state visible. Future narration remains hidden. No concrete full trace, completed encoded master stream, future source records, code, complexity.
- **COLLISION CHECK:** Active zone protocol formula; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S03:A009 — After that, the decoder reads exactly the specified number of characters.

- **ANCHOR ID:** `S03:A009` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “After that, the decoder reads exactly the specified number of characters.” (verbatim). Occurrence #9 in approved Scene 03 narration, in source order.
- **BEAT TYPE / PHASE:** IDEA ONLY.
- **WHAT APPEARS NOW:** Reveal a direct chalk arrow `read exactly length characters` pointing across payload, no character-by-character replay.
- **CENTER-STAGE HERO:** length  #  payload formula and pointer invariant; active zone: protocol formula; see geometry table.
- **CAUSE:** Spoken phrase “After that, the decoder reads exactly the specified number of characters.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `protocol formula` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal a direct chalk arrow `read exactly length characters` pointing across payload, no character-by-character replay.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No concrete full trace, completed encoded master stream, future source records, code, complexity.
- **CLEANUP / EXIT:** Temporary word focus clears; record formula persists until Scene04 transition.
- **PERSISTENT STATE:** Generic `length#payload` relation only; no master encoded bytes or decoded output.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** HeaderPayloadRecord (CREATE SHARED) + theme.ts + RoughLine if relation spoken; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “After that, the decoder reads exactly the specified number of characters.” and prior authorized state visible. Future narration remains hidden. No concrete full trace, completed encoded master stream, future source records, code, complexity.
- **COLLISION CHECK:** Active zone protocol formula; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S03:A010 — Even if the payload contains a hash ... it is safe.

- **ANCHOR ID:** `S03:A010` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Even if the payload contains a hash ... it is safe.” (verbatim). Occurrence #10 in approved Scene 03 narration, in source order.
- **BEAT TYPE / PHASE:** IDEA ONLY.
- **WHAT APPEARS NOW:** Emphasize a hash inside a generic payload as ordinary data; preserve the header/payload semantic difference.
- **CENTER-STAGE HERO:** length  #  payload formula and pointer invariant; active zone: protocol formula; see geometry table.
- **CAUSE:** Spoken phrase “Even if the payload contains a hash ... it is safe.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `protocol formula` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Emphasize a hash inside a generic payload as ordinary data; preserve the header/payload semantic difference.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No concrete full trace, completed encoded master stream, future source records, code, complexity.
- **CLEANUP / EXIT:** Temporary word focus clears; record formula persists until Scene04 transition.
- **PERSISTENT STATE:** Generic `length#payload` relation only; no master encoded bytes or decoded output.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** HeaderPayloadRecord (CREATE SHARED) + theme.ts + RoughLine if relation spoken; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Even if the payload contains a hash ... it is safe.” and prior authorized state visible. Future narration remains hidden. No concrete full trace, completed encoded master stream, future source records, code, complexity.
- **COLLISION CHECK:** Active zone protocol formula; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S03:A011 — And after each record ...

- **ANCHOR ID:** `S03:A011` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “And after each record ...” (verbatim). Occurrence #11 in approved Scene 03 narration, in source order.
- **BEAT TYPE / PHASE:** IDEA ONLY.
- **WHAT APPEARS NOW:** Begin next-record invariant cue below formula; the next record remains abstract and hidden.
- **CENTER-STAGE HERO:** length  #  payload formula and pointer invariant; active zone: protocol formula; see geometry table.
- **CAUSE:** Spoken phrase “And after each record ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `protocol formula` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Begin next-record invariant cue below formula; the next record remains abstract and hidden.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No concrete full trace, completed encoded master stream, future source records, code, complexity.
- **CLEANUP / EXIT:** Temporary word focus clears; record formula persists until Scene04 transition.
- **PERSISTENT STATE:** Generic `length#payload` relation only; no master encoded bytes or decoded output.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** HeaderPayloadRecord (CREATE SHARED) + theme.ts + RoughLine if relation spoken; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “And after each record ...” and prior authorized state visible. Future narration remains hidden. No concrete full trace, completed encoded master stream, future source records, code, complexity.
- **COLLISION CHECK:** Active zone protocol formula; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S03:A012 — the pointer `i` must reach the next length header.

- **ANCHOR ID:** `S03:A012` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “the pointer `i` must reach the next length header.” (verbatim). Occurrence #12 in approved Scene 03 narration, in source order.
- **BEAT TYPE / PHASE:** IDEA ONLY.
- **WHAT APPEARS NOW:** Reveal stable pointer invariant `i = start of next length header` in board-native lower lane.
- **CENTER-STAGE HERO:** length  #  payload formula and pointer invariant; active zone: protocol formula; see geometry table.
- **CAUSE:** Spoken phrase “the pointer `i` must reach the next length header.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `protocol formula` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal stable pointer invariant `i = start of next length header` in board-native lower lane.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No concrete full trace, completed encoded master stream, future source records, code, complexity.
- **CLEANUP / EXIT:** Temporary word focus clears; record formula persists until Scene04 transition.
- **PERSISTENT STATE:** Generic `length#payload` relation only; no master encoded bytes or decoded output.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** HeaderPayloadRecord (CREATE SHARED) + theme.ts + RoughLine if relation spoken; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “the pointer `i` must reach the next length header.” and prior authorized state visible. Future narration remains hidden. No concrete full trace, completed encoded master stream, future source records, code, complexity.
- **COLLISION CHECK:** Active zone protocol formula; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S03:A013 — That's the protocol.

- **ANCHOR ID:** `S03:A013` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “That's the protocol.” (verbatim). Occurrence #13 in approved Scene 03 narration, in source order.
- **BEAT TYPE / PHASE:** IDEA ONLY.
- **WHAT APPEARS NOW:** Settle final protocol without a decoder execution; no full trace, no final encoded result.
- **CENTER-STAGE HERO:** length  #  payload formula and pointer invariant; active zone: protocol formula; see geometry table.
- **CAUSE:** Spoken phrase “That's the protocol.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `protocol formula` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Settle final protocol without a decoder execution; no full trace, no final encoded result.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No concrete full trace, completed encoded master stream, future source records, code, complexity.
- **CLEANUP / EXIT:** Temporary word focus clears; record formula persists until Scene04 transition.
- **PERSISTENT STATE:** Generic `length#payload` relation only; no master encoded bytes or decoded output.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** HeaderPayloadRecord (CREATE SHARED) + theme.ts + RoughLine if relation spoken; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “That's the protocol.” and prior authorized state visible. Future narration remains hidden. No concrete full trace, completed encoded master stream, future source records, code, complexity.
- **COLLISION CHECK:** Active zone protocol formula; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S03:A014 — Now let's encode our full example.

- **ANCHOR ID:** `S03:A014` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Now let's encode our full example.” (verbatim). Occurrence #14 in approved Scene 03 narration, in source order.
- **BEAT TYPE / PHASE:** IDEA ONLY.
- **WHAT APPEARS NOW:** Clear generic demonstration on transition; prepare input-list focus for Scene04's first source phrase.
- **CENTER-STAGE HERO:** length  #  payload formula and pointer invariant; active zone: protocol formula; see geometry table.
- **CAUSE:** Spoken phrase “Now let's encode our full example.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `protocol formula` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Clear generic demonstration on transition; prepare input-list focus for Scene04's first source phrase.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No concrete full trace, completed encoded master stream, future source records, code, complexity.
- **CLEANUP / EXIT:** Prepare scene transition only after spoken exit; no timing guessed; keep conceptual handoff item intact.
- **PERSISTENT STATE:** Generic `length#payload` relation only; no master encoded bytes or decoded output.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** HeaderPayloadRecord (CREATE SHARED) + theme.ts + RoughLine if relation spoken; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now let's encode our full example.” and prior authorized state visible. Future narration remains hidden. No concrete full trace, completed encoded master stream, future source records, code, complexity.
- **COLLISION CHECK:** Active zone protocol formula; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

## Critical semantic checkpoints — **NOT guessed frame numbers**

- **A003–A005: protocol parts sequentially visible**
- **A007: complete length#payload assembled**
- **A008–A010: header hash vs payload hash explained**
- **A012: i invariant visible, no mini-trace**

## Audit gate distinction

**This file is a Gate A pre-audio semantic plan.** Automated check report is adjacent as `Scene03_Audit.md`. Gate B cannot be completed before the actual MP3 + exact word-sync. DO NOT claim final 100/100 or rendered-frame correctness. Rendering and font-metric collision audit must be done after implementation.

**Word identity handoff:** later resolve `S03:A001..A014` to stable source word indices `Scene03:Wxxxx`, with start/end edges and end-exclusive `[startFrame,endFrameExclusive)`; use validated sync FPS/duration, never assumed FPS.
