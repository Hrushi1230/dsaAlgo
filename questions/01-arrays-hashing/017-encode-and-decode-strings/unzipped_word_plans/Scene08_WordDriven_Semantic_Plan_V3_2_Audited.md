# Q17 — Scene 08: Correctness + Complexity

**Gate A / Pre-Audio Semantic Word-Driven Plan — V3.2 Board-Native**  
**Draft → audit → fix → re-audit workflow:** source exact phrases, no guessed frame timing.  
**Exact timing status:** `PENDING final ElevenLabs MP3 + validated exact word-sync JSON`; therefore exact `Wxxxx`, frame ranges, FPS, and pause durations **MUST NOT be fabricated**.

## Scene contract

```text
SCENE: 08
QUESTION: Q17 — Encode and Decode Strings (LeetCode 271)
BEAT TYPE: Correctness + Complexity (NON-TRACE — minimal)
SCRIPT SOURCE: Q17_Encode_Decode_Strings_Final_ElevenLabs_Narration.md
ALGORITHM TRACE SOURCE: verified source code target + original approved exact-script trace where applicable
AUDIO FILE: PENDING final MP3
SYNC FILE: PENDING validated word sync
FPS: PENDING sync
TOTAL FRAMES: PENDING sync
PEDAGOGICAL GOAL: one correctness relation then O(C+N) derivation
TRACE STEP IDS: N/A
DATA STRUCTURE: see stage geometry
PRIMARY HERO: one correctness relation then O(C+N) derivation
SUPPORT LEFT: See fixed geometry table
SUPPORT RIGHT: See fixed geometry table
REUSE: theme.ts / RoughLine / Captions
EXTEND: N/A
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
| scene label | 65 | 35 | 1770 | 75 | chalk |
| correctness hero | 200 | 215 | 1530 | 240 | hero |
| work derivation | 165 | 520 | 1030 | 360 | math |
| complexity results | 1220 | 520 | 550 | 370 | results |

**Global collision envelope:** title/label y28..120; hero y165..925; captions y960..1040. No teaching text or arrows may enter caption band. Coordinates are 1920×1080 nominal scene units, not guesses for time or FPS. Layout alternatives visible in different speech phases may reuse stage area; do not show them simultaneously.

## Current kit truth / usage and component lifecycle

| Component | Verified path / intended addition | Current actual API / planned API | Decision |
|---|---|---|---|
| theme.ts | `kit/lib/theme.ts` | theme.boardBg, theme.chalkText, theme.chalkDim, theme.pivot, theme.cyan, theme.good, theme.warn, theme.purple; fonts.hand/mono/code | **REUSE** |
| RoughLine | `kit/components/RoughLine.tsx` | shape:{kind:"line"/"arrow"/"circle", coordinates}; width,height,startFrame?,durationInFrames?,stroke?,strokeWidth?,seed? | **REUSE** |
| Captions | `kit/components/Captions.tsx` | words:{word,start,end}[], fps?,bottom?,fontSize?,maxWords?,maxWidth? (ONLY post-sync, pass exact fps) | **POST-SYNC REUSE** |

**Per-component lifecycle:** scene label and theme text enter only with their spoken concept; `Captions` consumes final words+FPS **after sync**; teaching source structures enter at the first introduction and retain spatial identity; temporary calculations/cursors enter on their matching anchors and clear at the next authorized step or scene exit; no future data pre-rendered visible. Components marked **CREATE SHARED** do not exist as verified imports yet—implementation must create them at an agreed `kit` path and check actual API before using. No question-local duplicate component.

## Algorithm / mathematical truth manifest

N/A — no full algorithm execution in this scene.

## Scene-specific semantic and spatial behavior

- **One dominant visual:** one correctness relation then O(C+N) derivation. Secondary state is small but readable; no UI cards; board itself is surface.
- **Reading direction:** spoken teaching object → one primary board change → stable conclusion.
- **No-spoiler rule:** No O(C+N) output before each corresponding time/space claim; no graph until derivation supports it.
- **Scene-type discipline:** One point at a time. No full algorithm execution; do not replay traces.
- **Audio causal gating:** each exact spoken phrase below is a sequential semantic trigger, not an assumed frame allocation. Holds only from validated MP3/sync.
- **Fixed layout:** reserve positions even while a component is hidden; do not let future rows shift existing words or characters.

## Exact narration phrase → semantic animation anchors (source order)

### S08:A001 — Why does this work?

- **ANCHOR ID:** `S08:A001` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Why does this work?” (verbatim). Occurrence #1 in approved Scene 08 narration, in source order.
- **BEAT TYPE / PHASE:** CORRECTNESS.
- **WHAT APPEARS NOW:** Clear decoder code; begin correctness reasoning with record format as center hero.
- **CENTER-STAGE HERO:** one correctness relation then O(C+N) derivation; active zone: protocol relation; see geometry table.
- **CAUSE:** Spoken phrase “Why does this work?” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `protocol relation` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Clear decoder code; begin correctness reasoning with record format as center hero.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No O(C+N) output before each corresponding time/space claim; no graph until derivation supports it.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Work derivations persist only after narrated; encoded protocol remains immutable.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine (verified), direct chalk work derivation; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** CLEANUP / TRANSITION of old beat, preserve authorized state; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Why does this work?” and prior authorized state visible. Future narration remains hidden. No O(C+N) output before each corresponding time/space claim; no graph until derivation supports it.
- **COLLISION CHECK:** Active zone protocol relation; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S08:A002 — Because the payload does not decide its own boundary.

- **ANCHOR ID:** `S08:A002` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Because the payload does not decide its own boundary.” (verbatim). Occurrence #2 in approved Scene 08 narration, in source order.
- **BEAT TYPE / PHASE:** CORRECTNESS.
- **WHAT APPEARS NOW:** Focus payload region but deny it delimiter authority; only metadata controls size.
- **CENTER-STAGE HERO:** one correctness relation then O(C+N) derivation; active zone: protocol relation; see geometry table.
- **CAUSE:** Spoken phrase “Because the payload does not decide its own boundary.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `protocol relation` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus payload region but deny it delimiter authority; only metadata controls size.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No O(C+N) output before each corresponding time/space claim; no graph until derivation supports it.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Work derivations persist only after narrated; encoded protocol remains immutable.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine (verified), direct chalk work derivation; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Because the payload does not decide its own boundary.” and prior authorized state visible. Future narration remains hidden. No O(C+N) output before each corresponding time/space claim; no graph until derivation supports it.
- **COLLISION CHECK:** Active zone protocol relation; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S08:A003 — The stored length does.

- **ANCHOR ID:** `S08:A003` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “The stored length does.” (verbatim). Occurrence #3 in approved Scene 08 narration, in source order.
- **BEAT TYPE / PHASE:** CORRECTNESS.
- **WHAT APPEARS NOW:** Highlight `length` header as actual boundary authority and make relation to payload clear.
- **CENTER-STAGE HERO:** one correctness relation then O(C+N) derivation; active zone: protocol relation; see geometry table.
- **CAUSE:** Spoken phrase “The stored length does.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `protocol relation` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Highlight `length` header as actual boundary authority and make relation to payload clear.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No O(C+N) output before each corresponding time/space claim; no graph until derivation supports it.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Work derivations persist only after narrated; encoded protocol remains immutable.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine (verified), direct chalk work derivation; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “The stored length does.” and prior authorized state visible. Future narration remains hidden. No O(C+N) output before each corresponding time/space claim; no graph until derivation supports it.
- **COLLISION CHECK:** Active zone protocol relation; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S08:A004 — Now complexity.

- **ANCHOR ID:** `S08:A004` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Now complexity.” (verbatim). Occurrence #4 in approved Scene 08 narration, in source order.
- **BEAT TYPE / PHASE:** COMPLEXITY.
- **WHAT APPEARS NOW:** Clear correctness highlight; reserve space for work derivation.
- **CENTER-STAGE HERO:** one correctness relation then O(C+N) derivation; active zone: derivation; see geometry table.
- **CAUSE:** Spoken phrase “Now complexity.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `derivation` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Clear correctness highlight; reserve space for work derivation.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No O(C+N) output before each corresponding time/space claim; no graph until derivation supports it.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Work derivations persist only after narrated; encoded protocol remains immutable.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine (verified), direct chalk work derivation; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now complexity.” and prior authorized state visible. Future narration remains hidden. No O(C+N) output before each corresponding time/space claim; no graph until derivation supports it.
- **COLLISION CHECK:** Active zone derivation; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S08:A005 — Let `C` be the total number of payload characters ...

- **ANCHOR ID:** `S08:A005` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Let `C` be the total number of payload characters ...” (verbatim). Occurrence #5 in approved Scene 08 narration, in source order.
- **BEAT TYPE / PHASE:** COMPLEXITY.
- **WHAT APPEARS NOW:** Define `C` as total payload characters in large direct board chalk.
- **CENTER-STAGE HERO:** one correctness relation then O(C+N) derivation; active zone: derivation; see geometry table.
- **CAUSE:** Spoken phrase “Let `C` be the total number of payload characters ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `derivation` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Define `C` as total payload characters in large direct board chalk.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No O(C+N) output before each corresponding time/space claim; no graph until derivation supports it.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Work derivations persist only after narrated; encoded protocol remains immutable.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine (verified), direct chalk work derivation; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Let `C` be the total number of payload characters ...” and prior authorized state visible. Future narration remains hidden. No O(C+N) output before each corresponding time/space claim; no graph until derivation supports it.
- **COLLISION CHECK:** Active zone derivation; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S08:A006 — and `N` be the number of strings.

- **ANCHOR ID:** `S08:A006` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “and `N` be the number of strings.” (verbatim). Occurrence #6 in approved Scene 08 narration, in source order.
- **BEAT TYPE / PHASE:** COMPLEXITY.
- **WHAT APPEARS NOW:** Define `N` as number of source strings alongside C, separate symbols.
- **CENTER-STAGE HERO:** one correctness relation then O(C+N) derivation; active zone: derivation; see geometry table.
- **CAUSE:** Spoken phrase “and `N` be the number of strings.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `derivation` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Define `N` as number of source strings alongside C, separate symbols.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No O(C+N) output before each corresponding time/space claim; no graph until derivation supports it.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Work derivations persist only after narrated; encoded protocol remains immutable.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine (verified), direct chalk work derivation; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “and `N` be the number of strings.” and prior authorized state visible. Future narration remains hidden. No O(C+N) output before each corresponding time/space claim; no graph until derivation supports it.
- **COLLISION CHECK:** Active zone derivation; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S08:A007 — Encoding processes every string and copies its characters.

- **ANCHOR ID:** `S08:A007` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Encoding processes every string and copies its characters.” (verbatim). Occurrence #7 in approved Scene 08 narration, in source order.
- **BEAT TYPE / PHASE:** COMPLEXITY.
- **WHAT APPEARS NOW:** Reveal encoder work `N headers + C copied characters` only after words establish both causes.
- **CENTER-STAGE HERO:** one correctness relation then O(C+N) derivation; active zone: derivation; see geometry table.
- **CAUSE:** Spoken phrase “Encoding processes every string and copies its characters.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `derivation` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal encoder work `N headers + C copied characters` only after words establish both causes.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No O(C+N) output before each corresponding time/space claim; no graph until derivation supports it.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Work derivations persist only after narrated; encoded protocol remains immutable.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine (verified), direct chalk work derivation; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Encoding processes every string and copies its characters.” and prior authorized state visible. Future narration remains hidden. No O(C+N) output before each corresponding time/space claim; no graph until derivation supports it.
- **COLLISION CHECK:** Active zone derivation; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S08:A008 — Time complexity ...

- **ANCHOR ID:** `S08:A008` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Time complexity ...” (verbatim). Occurrence #8 in approved Scene 08 narration, in source order.
- **BEAT TYPE / PHASE:** COMPLEXITY.
- **WHAT APPEARS NOW:** Focus time-expression destination but keep final complexity hidden.
- **CENTER-STAGE HERO:** one correctness relation then O(C+N) derivation; active zone: derivation; see geometry table.
- **CAUSE:** Spoken phrase “Time complexity ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `derivation` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus time-expression destination but keep final complexity hidden.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No O(C+N) output before each corresponding time/space claim; no graph until derivation supports it.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Work derivations persist only after narrated; encoded protocol remains immutable.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine (verified), direct chalk work derivation; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Time complexity ...” and prior authorized state visible. Future narration remains hidden. No O(C+N) output before each corresponding time/space claim; no graph until derivation supports it.
- **COLLISION CHECK:** Active zone derivation; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S08:A009 — O of C plus N.

- **ANCHOR ID:** `S08:A009` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “O of C plus N.” (verbatim). Occurrence #9 in approved Scene 08 narration, in source order.
- **BEAT TYPE / PHASE:** COMPLEXITY.
- **WHAT APPEARS NOW:** Reveal `O(C + N)` under ENCODE time, not before.
- **CENTER-STAGE HERO:** one correctness relation then O(C+N) derivation; active zone: derivation; see geometry table.
- **CAUSE:** Spoken phrase “O of C plus N.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `derivation` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal `O(C + N)` under ENCODE time, not before.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No O(C+N) output before each corresponding time/space claim; no graph until derivation supports it.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Work derivations persist only after narrated; encoded protocol remains immutable.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine (verified), direct chalk work derivation; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “O of C plus N.” and prior authorized state visible. Future narration remains hidden. No O(C+N) output before each corresponding time/space claim; no graph until derivation supports it.
- **COLLISION CHECK:** Active zone derivation; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S08:A010 — Decoding reads the headers and payloads in one forward pass.

- **ANCHOR ID:** `S08:A010` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Decoding reads the headers and payloads in one forward pass.” (verbatim). Occurrence #10 in approved Scene 08 narration, in source order.
- **BEAT TYPE / PHASE:** COMPLEXITY.
- **WHAT APPEARS NOW:** Reveal decoder work `read each header + each payload once` as single left-to-right pass.
- **CENTER-STAGE HERO:** one correctness relation then O(C+N) derivation; active zone: derivation; see geometry table.
- **CAUSE:** Spoken phrase “Decoding reads the headers and payloads in one forward pass.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `derivation` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal decoder work `read each header + each payload once` as single left-to-right pass.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No O(C+N) output before each corresponding time/space claim; no graph until derivation supports it.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Work derivations persist only after narrated; encoded protocol remains immutable.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine (verified), direct chalk work derivation; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Decoding reads the headers and payloads in one forward pass.” and prior authorized state visible. Future narration remains hidden. No O(C+N) output before each corresponding time/space claim; no graph until derivation supports it.
- **COLLISION CHECK:** Active zone derivation; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S08:A011 — Again ...

- **ANCHOR ID:** `S08:A011` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Again ...” (verbatim). Occurrence #11 in approved Scene 08 narration, in source order.
- **BEAT TYPE / PHASE:** COMPLEXITY.
- **WHAT APPEARS NOW:** Shift focus to decoder time expression, no re-trace.
- **CENTER-STAGE HERO:** one correctness relation then O(C+N) derivation; active zone: derivation; see geometry table.
- **CAUSE:** Spoken phrase “Again ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `derivation` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Shift focus to decoder time expression, no re-trace.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No O(C+N) output before each corresponding time/space claim; no graph until derivation supports it.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Work derivations persist only after narrated; encoded protocol remains immutable.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine (verified), direct chalk work derivation; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Again ...” and prior authorized state visible. Future narration remains hidden. No O(C+N) output before each corresponding time/space claim; no graph until derivation supports it.
- **COLLISION CHECK:** Active zone derivation; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S08:A012 — O of C plus N.

- **ANCHOR ID:** `S08:A012` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “O of C plus N.” (verbatim). Occurrence #12 in approved Scene 08 narration, in source order.
- **BEAT TYPE / PHASE:** COMPLEXITY.
- **WHAT APPEARS NOW:** Reveal `O(C + N)` under DECODE time.
- **CENTER-STAGE HERO:** one correctness relation then O(C+N) derivation; active zone: derivation; see geometry table.
- **CAUSE:** Spoken phrase “O of C plus N.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `derivation` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal `O(C + N)` under DECODE time.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No O(C+N) output before each corresponding time/space claim; no graph until derivation supports it.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Work derivations persist only after narrated; encoded protocol remains immutable.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine (verified), direct chalk work derivation; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “O of C plus N.” and prior authorized state visible. Future narration remains hidden. No O(C+N) output before each corresponding time/space claim; no graph until derivation supports it.
- **COLLISION CHECK:** Active zone derivation; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S08:A013 — The constructed output also needs ...

- **ANCHOR ID:** `S08:A013` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “The constructed output also needs ...” (verbatim). Occurrence #13 in approved Scene 08 narration, in source order.
- **BEAT TYPE / PHASE:** COMPLEXITY.
- **WHAT APPEARS NOW:** Introduce constructed output storage category, not auxiliary in-place claim.
- **CENTER-STAGE HERO:** one correctness relation then O(C+N) derivation; active zone: derivation; see geometry table.
- **CAUSE:** Spoken phrase “The constructed output also needs ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `derivation` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Introduce constructed output storage category, not auxiliary in-place claim.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No O(C+N) output before each corresponding time/space claim; no graph until derivation supports it.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Work derivations persist only after narrated; encoded protocol remains immutable.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine (verified), direct chalk work derivation; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “The constructed output also needs ...” and prior authorized state visible. Future narration remains hidden. No O(C+N) output before each corresponding time/space claim; no graph until derivation supports it.
- **COLLISION CHECK:** Active zone derivation; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S08:A014 — O of C plus N space.

- **ANCHOR ID:** `S08:A014` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “O of C plus N space.” (verbatim). Occurrence #14 in approved Scene 08 narration, in source order.
- **BEAT TYPE / PHASE:** COMPLEXITY.
- **WHAT APPEARS NOW:** Reveal `O(C + N)` under OUTPUT SPACE; no extra complexity formulas or dark graph panels.
- **CENTER-STAGE HERO:** one correctness relation then O(C+N) derivation; active zone: derivation; see geometry table.
- **CAUSE:** Spoken phrase “O of C plus N space.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `derivation` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal `O(C + N)` under OUTPUT SPACE; no extra complexity formulas or dark graph panels.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No O(C+N) output before each corresponding time/space claim; no graph until derivation supports it.
- **CLEANUP / EXIT:** Prepare scene transition only after spoken exit; no timing guessed; keep conceptual handoff item intact.
- **PERSISTENT STATE:** Work derivations persist only after narrated; encoded protocol remains immutable.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine (verified), direct chalk work derivation; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “O of C plus N space.” and prior authorized state visible. Future narration remains hidden. No O(C+N) output before each corresponding time/space claim; no graph until derivation supports it.
- **COLLISION CHECK:** Active zone derivation; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

## Critical semantic checkpoints — **NOT guessed frame numbers**

- **A001–A003: metadata boundary proof, no complexities**
- **A005–A006: C,N defined**
- **A009: encode time only now**
- **A012: decode time only now**
- **A014: constructed output space only now**

## Audit gate distinction

**This file is a Gate A pre-audio semantic plan.** Automated check report is adjacent as `Scene08_Audit.md`. Gate B cannot be completed before the actual MP3 + exact word-sync. DO NOT claim final 100/100 or rendered-frame correctness. Rendering and font-metric collision audit must be done after implementation.

**Word identity handoff:** later resolve `S08:A001..A014` to stable source word indices `Scene08:Wxxxx`, with start/end edges and end-exclusive `[startFrame,endFrameExclusive)`; use validated sync FPS/duration, never assumed FPS.
