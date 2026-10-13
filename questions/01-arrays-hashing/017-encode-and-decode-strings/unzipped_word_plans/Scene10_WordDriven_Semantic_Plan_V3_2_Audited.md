# Q17 — Scene 10: Minimal Recap + Roadmap

**Gate A / Pre-Audio Semantic Word-Driven Plan — V3.2 Board-Native**  
**Draft → audit → fix → re-audit workflow:** source exact phrases, no guessed frame timing.  
**Exact timing status:** `PENDING final ElevenLabs MP3 + validated exact word-sync JSON`; therefore exact `Wxxxx`, frame ranges, FPS, and pause durations **MUST NOT be fabricated**.

## Scene contract

```text
SCENE: 10
QUESTION: Q17 — Encode and Decode Strings (LeetCode 271)
BEAT TYPE: Minimal Recap + Roadmap (NON-TRACE — minimal + ROADMAP HANDOFF)
SCRIPT SOURCE: Q17_Encode_Decode_Strings_Final_ElevenLabs_Narration.md
ALGORITHM TRACE SOURCE: verified source code target + original approved exact-script trace where applicable
AUDIO FILE: PENDING final MP3
SYNC FILE: PENDING validated word sync
FPS: PENDING sync
TOTAL FRAMES: PENDING sync
PEDAGOGICAL GOAL: reusable explicit-boundary insight then native full-screen course roadmap
TRACE STEP IDS: N/A
DATA STRUCTURE: see stage geometry
PRIMARY HERO: reusable explicit-boundary insight then native full-screen course roadmap
SUPPORT LEFT: See fixed geometry table
SUPPORT RIGHT: See fixed geometry table
REUSE: theme.ts / RoughLine / Captions / MasterRoadmapV2
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
| scene label | 65 | 35 | 1770 | 80 | chalk |
| recap protocol | 285 | 250 | 1370 | 200 | board hero |
| transferable takeaway | 255 | 570 | 1410 | 220 | board hero |
| roadmap native full-screen | 0 | 0 | 1920 | 1080 | roadmap only |

**Global collision envelope:** title/label y28..120; hero y165..925; captions y960..1040. No teaching text or arrows may enter caption band. Coordinates are 1920×1080 nominal scene units, not guesses for time or FPS. Layout alternatives visible in different speech phases may reuse stage area; do not show them simultaneously.

## Current kit truth / usage and component lifecycle

| Component | Verified path / intended addition | Current actual API / planned API | Decision |
|---|---|---|---|
| theme.ts | `kit/lib/theme.ts` | theme.boardBg, theme.chalkText, theme.chalkDim, theme.pivot, theme.cyan, theme.good, theme.warn, theme.purple; fonts.hand/mono/code | **REUSE** |
| RoughLine | `kit/components/RoughLine.tsx` | shape:{kind:"line"/"arrow"/"circle", coordinates}; width,height,startFrame?,durationInFrames?,stroke?,strokeWidth?,seed? | **REUSE** |
| Captions | `kit/components/Captions.tsx` | words:{word,start,end}[], fps?,bottom?,fontSize?,maxWords?,maxWidth? (ONLY post-sync, pass exact fps) | **POST-SYNC REUSE** |
| MasterRoadmapV2 | `kit/components/MasterRoadmapV2.tsx` | completedCount?,completedGlobalNums?,activeGlobalNum?,upNextGlobalNum?,activePatternId?,activeBadgeLabel?,opacity?,handoffFade?,scale?,translateX?,translateY?; native absolute 1920×1080 | **REUSE** |
| HeaderPayloadRecord | `NEW SHARED (proposed; NO verified file path)` | three semantic sectors length/header-terminator/payload with header-vs-payload hash distinction; no opaque fill; proposed shared reusable component, not verified existing | **CREATE SHARED** |

**Per-component lifecycle:** scene label and theme text enter only with their spoken concept; `Captions` consumes final words+FPS **after sync**; teaching source structures enter at the first introduction and retain spatial identity; temporary calculations/cursors enter on their matching anchors and clear at the next authorized step or scene exit; no future data pre-rendered visible. Components marked **CREATE SHARED** do not exist as verified imports yet—implementation must create them at an agreed `kit` path and check actual API before using. No question-local duplicate component.

## Algorithm / mathematical truth manifest

N/A — no full algorithm execution in this scene.

## Scene-specific semantic and spatial behavior

- **One dominant visual:** reusable explicit-boundary insight then native full-screen course roadmap. Secondary state is small but readable; no UI cards; board itself is surface.
- **Reading direction:** spoken teaching object → one primary board change → stable conclusion.
- **No-spoiler rule:** No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **Scene-type discipline:** One point at a time. No full algorithm execution; do not replay traces.
- **Audio causal gating:** each exact spoken phrase below is a sequential semantic trigger, not an assumed frame allocation. Holds only from validated MP3/sync.
- **Fixed layout:** reserve positions even while a component is hidden; do not let future rows shift existing words or characters.

## Exact narration phrase → semantic animation anchors (source order)

### S10:A001 — Quick recap.

- **ANCHOR ID:** `S10:A001` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Quick recap.” (verbatim). Occurrence #1 in approved Scene 10 narration, in source order.
- **BEAT TYPE / PHASE:** RECAP ON BOARD.
- **WHAT APPEARS NOW:** Open board-native recap directly on green board; no roadmap chrome yet.
- **CENTER-STAGE HERO:** reusable explicit-boundary insight then native full-screen course roadmap; active zone: protocol/takeaway; see geometry table.
- **CAUSE:** Spoken phrase “Quick recap.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `protocol/takeaway` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Open board-native recap directly on green board; no roadmap chrome yet.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Stable board-native teaching content only.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine until roadmap; then MasterRoadmapV2 REUSE full-screen; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Quick recap.” and prior authorized state visible. Future narration remains hidden. No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **COLLISION CHECK:** Active zone protocol/takeaway; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S10:A002 — Our format is ...

- **ANCHOR ID:** `S10:A002` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Our format is ...” (verbatim). Occurrence #2 in approved Scene 10 narration, in source order.
- **BEAT TYPE / PHASE:** RECAP ON BOARD.
- **WHAT APPEARS NOW:** Reserve record formula stage; no future Q18 information yet.
- **CENTER-STAGE HERO:** reusable explicit-boundary insight then native full-screen course roadmap; active zone: protocol/takeaway; see geometry table.
- **CAUSE:** Spoken phrase “Our format is ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `protocol/takeaway` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Reserve record formula stage; no future Q18 information yet.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Stable board-native teaching content only.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine until roadmap; then MasterRoadmapV2 REUSE full-screen; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Our format is ...” and prior authorized state visible. Future narration remains hidden. No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **COLLISION CHECK:** Active zone protocol/takeaway; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S10:A003 — length ... hash ... payload.

- **ANCHOR ID:** `S10:A003` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “length ... hash ... payload.” (verbatim). Occurrence #3 in approved Scene 10 narration, in source order.
- **BEAT TYPE / PHASE:** RECAP ON BOARD.
- **WHAT APPEARS NOW:** Reveal record `length  #  payload` at center, the protocol hero.
- **CENTER-STAGE HERO:** reusable explicit-boundary insight then native full-screen course roadmap; active zone: protocol/takeaway; see geometry table.
- **CAUSE:** Spoken phrase “length ... hash ... payload.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `protocol/takeaway` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal record `length  #  payload` at center, the protocol hero.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Stable board-native teaching content only.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine until roadmap; then MasterRoadmapV2 REUSE full-screen; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “length ... hash ... payload.” and prior authorized state visible. Future narration remains hidden. No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **COLLISION CHECK:** Active zone protocol/takeaway; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S10:A004 — The decoder reads the length ...

- **ANCHOR ID:** `S10:A004` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “The decoder reads the length ...” (verbatim). Occurrence #4 in approved Scene 10 narration, in source order.
- **BEAT TYPE / PHASE:** RECAP ON BOARD.
- **WHAT APPEARS NOW:** Focus `length` header as decoder's first operation.
- **CENTER-STAGE HERO:** reusable explicit-boundary insight then native full-screen course roadmap; active zone: protocol/takeaway; see geometry table.
- **CAUSE:** Spoken phrase “The decoder reads the length ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `protocol/takeaway` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus `length` header as decoder's first operation.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Stable board-native teaching content only.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine until roadmap; then MasterRoadmapV2 REUSE full-screen; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “The decoder reads the length ...” and prior authorized state visible. Future narration remains hidden. No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **COLLISION CHECK:** Active zone protocol/takeaway; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S10:A005 — then consumes exactly that many characters.

- **ANCHOR ID:** `S10:A005` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “then consumes exactly that many characters.” (verbatim). Occurrence #5 in approved Scene 10 narration, in source order.
- **BEAT TYPE / PHASE:** RECAP ON BOARD.
- **WHAT APPEARS NOW:** Focus bounded payload span `read exactly length`, no re-trace.
- **CENTER-STAGE HERO:** reusable explicit-boundary insight then native full-screen course roadmap; active zone: protocol/takeaway; see geometry table.
- **CAUSE:** Spoken phrase “then consumes exactly that many characters.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `protocol/takeaway` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus bounded payload span `read exactly length`, no re-trace.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Stable board-native teaching content only.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine until roadmap; then MasterRoadmapV2 REUSE full-screen; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “then consumes exactly that many characters.” and prior authorized state visible. Future narration remains hidden. No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **COLLISION CHECK:** Active zone protocol/takeaway; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S10:A006 — The reusable idea is simple.

- **ANCHOR ID:** `S10:A006` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “The reusable idea is simple.” (verbatim). Occurrence #6 in approved Scene 10 narration, in source order.
- **BEAT TYPE / PHASE:** RECAP ON BOARD.
- **WHAT APPEARS NOW:** Clear code mechanics to a simple transferable-rule area.
- **CENTER-STAGE HERO:** reusable explicit-boundary insight then native full-screen course roadmap; active zone: protocol/takeaway; see geometry table.
- **CAUSE:** Spoken phrase “The reusable idea is simple.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `protocol/takeaway` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Clear code mechanics to a simple transferable-rule area.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Stable board-native teaching content only.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine until roadmap; then MasterRoadmapV2 REUSE full-screen; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** CLEANUP / TRANSITION of old beat, preserve authorized state; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “The reusable idea is simple.” and prior authorized state visible. Future narration remains hidden. No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **COLLISION CHECK:** Active zone protocol/takeaway; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S10:A007 — When the payload can contain separator characters ...

- **ANCHOR ID:** `S10:A007` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “When the payload can contain separator characters ...” (verbatim). Occurrence #7 in approved Scene 10 narration, in source order.
- **BEAT TYPE / PHASE:** RECAP ON BOARD.
- **WHAT APPEARS NOW:** Show abstract payload containing separator as possibility, not actual full testcase.
- **CENTER-STAGE HERO:** reusable explicit-boundary insight then native full-screen course roadmap; active zone: protocol/takeaway; see geometry table.
- **CAUSE:** Spoken phrase “When the payload can contain separator characters ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `protocol/takeaway` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Show abstract payload containing separator as possibility, not actual full testcase.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Stable board-native teaching content only.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine until roadmap; then MasterRoadmapV2 REUSE full-screen; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “When the payload can contain separator characters ...” and prior authorized state visible. Future narration remains hidden. No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **COLLISION CHECK:** Active zone protocol/takeaway; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S10:A008 — store explicit boundary information.

- **ANCHOR ID:** `S10:A008` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “store explicit boundary information.” (verbatim). Occurrence #8 in approved Scene 10 narration, in source order.
- **BEAT TYPE / PHASE:** RECAP ON BOARD.
- **WHAT APPEARS NOW:** Reveal large takeaway `Store explicit boundary information` directly on board.
- **CENTER-STAGE HERO:** reusable explicit-boundary insight then native full-screen course roadmap; active zone: protocol/takeaway; see geometry table.
- **CAUSE:** Spoken phrase “store explicit boundary information.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `protocol/takeaway` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal large takeaway `Store explicit boundary information` directly on board.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Stable board-native teaching content only.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine until roadmap; then MasterRoadmapV2 REUSE full-screen; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “store explicit boundary information.” and prior authorized state visible. Future narration remains hidden. No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **COLLISION CHECK:** Active zone protocol/takeaway; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S10:A009 — Question Seventeen ...

- **ANCHOR ID:** `S10:A009` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Question Seventeen ...” (verbatim). Occurrence #9 in approved Scene 10 narration, in source order.
- **BEAT TYPE / PHASE:** RECAP ON BOARD.
- **WHAT APPEARS NOW:** Prepare Q17 completion handoff but keep roadmap hidden until completion announcement.
- **CENTER-STAGE HERO:** reusable explicit-boundary insight then native full-screen course roadmap; active zone: protocol/takeaway; see geometry table.
- **CAUSE:** Spoken phrase “Question Seventeen ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `protocol/takeaway` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Prepare Q17 completion handoff but keep roadmap hidden until completion announcement.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Stable board-native teaching content only.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine until roadmap; then MasterRoadmapV2 REUSE full-screen; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Question Seventeen ...” and prior authorized state visible. Future narration remains hidden. No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **COLLISION CHECK:** Active zone protocol/takeaway; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S10:A010 — Encode and Decode Strings ...

- **ANCHOR ID:** `S10:A010` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Encode and Decode Strings ...” (verbatim). Occurrence #10 in approved Scene 10 narration, in source order.
- **BEAT TYPE / PHASE:** RECAP ON BOARD.
- **WHAT APPEARS NOW:** Name `Encode and Decode Strings` as the closing lesson identity, no new method.
- **CENTER-STAGE HERO:** reusable explicit-boundary insight then native full-screen course roadmap; active zone: protocol/takeaway; see geometry table.
- **CAUSE:** Spoken phrase “Encode and Decode Strings ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `protocol/takeaway` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Name `Encode and Decode Strings` as the closing lesson identity, no new method.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** Stable board-native teaching content only.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine until roadmap; then MasterRoadmapV2 REUSE full-screen; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Encode and Decode Strings ...” and prior authorized state visible. Future narration remains hidden. No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **COLLISION CHECK:** Active zone protocol/takeaway; see geometry table; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S10:A011 — complete.

- **ANCHOR ID:** `S10:A011` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “complete.” (verbatim). Occurrence #11 in approved Scene 10 narration, in source order.
- **BEAT TYPE / PHASE:** ROADMAP RETURN.
- **WHAT APPEARS NOW:** Mark Q17 complete and initiate transition to full-screen `MasterRoadmapV2` only now.
- **CENTER-STAGE HERO:** reusable explicit-boundary insight then native full-screen course roadmap; active zone: roadmap full-screen x0..1920 y0..1080; recap cleared.
- **CAUSE:** Spoken phrase “complete.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `native full-screen roadmap` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Mark Q17 complete and initiate transition to full-screen `MasterRoadmapV2` only now.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **CLEANUP / EXIT:** Recap completely clears BEFORE full-screen MasterRoadmapV2 becomes visible.
- **PERSISTENT STATE:** ROADMAP: 16/227 until A013 authorizes 17/227; 17/227 afterwards; completed rows [1..17] only after A013; Q18 up-next at A015; never mark Q18 completed.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine until roadmap; then MasterRoadmapV2 REUSE full-screen; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** CLEANUP / TRANSITION of old beat, preserve authorized state; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “complete.” and prior authorized state visible. Future narration remains hidden. No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **COLLISION CHECK:** Active zone roadmap full-screen x0..1920 y0..1080; recap cleared; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S10:A012 — Our progress is now ...

- **ANCHOR ID:** `S10:A012` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Our progress is now ...” (verbatim). Occurrence #12 in approved Scene 10 narration, in source order.
- **BEAT TYPE / PHASE:** ROADMAP RETURN.
- **WHAT APPEARS NOW:** Focus roadmap progress value but do not yet increment before announced new count.
- **CENTER-STAGE HERO:** reusable explicit-boundary insight then native full-screen course roadmap; active zone: roadmap full-screen x0..1920 y0..1080; recap cleared.
- **CAUSE:** Spoken phrase “Our progress is now ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `native full-screen roadmap` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus roadmap progress value but do not yet increment before announced new count.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** ROADMAP: 16/227 until A013 authorizes 17/227; 17/227 afterwards; completed rows [1..17] only after A013; Q18 up-next at A015; never mark Q18 completed.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine until roadmap; then MasterRoadmapV2 REUSE full-screen; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Our progress is now ...” and prior authorized state visible. Future narration remains hidden. No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **COLLISION CHECK:** Active zone roadmap full-screen x0..1920 y0..1080; recap cleared; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S10:A013 — seventeen out of two hundred twenty-seven.

- **ANCHOR ID:** `S10:A013` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “seventeen out of two hundred twenty-seven.” (verbatim). Occurrence #13 in approved Scene 10 narration, in source order.
- **BEAT TYPE / PHASE:** ROADMAP RETURN.
- **WHAT APPEARS NOW:** Advance completed count to 17/227 and mark row 17 completed.
- **CENTER-STAGE HERO:** reusable explicit-boundary insight then native full-screen course roadmap; active zone: roadmap full-screen x0..1920 y0..1080; recap cleared.
- **CAUSE:** Spoken phrase “seventeen out of two hundred twenty-seven.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `native full-screen roadmap` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Advance completed count to 17/227 and mark row 17 completed.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** ROADMAP: 16/227 until A013 authorizes 17/227; 17/227 afterwards; completed rows [1..17] only after A013; Q18 up-next at A015; never mark Q18 completed.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine until roadmap; then MasterRoadmapV2 REUSE full-screen; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “seventeen out of two hundred twenty-seven.” and prior authorized state visible. Future narration remains hidden. No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **COLLISION CHECK:** Active zone roadmap full-screen x0..1920 y0..1080; recap cleared; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S10:A014 — Next ...

- **ANCHOR ID:** `S10:A014` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Next ...” (verbatim). Occurrence #14 in approved Scene 10 narration, in source order.
- **BEAT TYPE / PHASE:** ROADMAP RETURN.
- **WHAT APPEARS NOW:** Focus next-row cue while progress stays at 17.
- **CENTER-STAGE HERO:** reusable explicit-boundary insight then native full-screen course roadmap; active zone: roadmap full-screen x0..1920 y0..1080; recap cleared.
- **CAUSE:** Spoken phrase “Next ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `native full-screen roadmap` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus next-row cue while progress stays at 17.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** ROADMAP: 16/227 until A013 authorizes 17/227; 17/227 afterwards; completed rows [1..17] only after A013; Q18 up-next at A015; never mark Q18 completed.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine until roadmap; then MasterRoadmapV2 REUSE full-screen; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Next ...” and prior authorized state visible. Future narration remains hidden. No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **COLLISION CHECK:** Active zone roadmap full-screen x0..1920 y0..1080; recap cleared; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S10:A015 — Question Eighteen.

- **ANCHOR ID:** `S10:A015` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “Question Eighteen.” (verbatim). Occurrence #15 in approved Scene 10 narration, in source order.
- **BEAT TYPE / PHASE:** ROADMAP RETURN.
- **WHAT APPEARS NOW:** Activate Q18 as `UP NEXT`, not completed, no Q18 solution preview.
- **CENTER-STAGE HERO:** reusable explicit-boundary insight then native full-screen course roadmap; active zone: roadmap full-screen x0..1920 y0..1080; recap cleared.
- **CAUSE:** Spoken phrase “Question Eighteen.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `native full-screen roadmap` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Activate Q18 as `UP NEXT`, not completed, no Q18 solution preview.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **CLEANUP / EXIT:** Replace previous transient emphasis at next semantic anchor; keep stable teaching objects until explicit handoff.
- **PERSISTENT STATE:** ROADMAP: 16/227 until A013 authorizes 17/227; 17/227 afterwards; completed rows [1..17] only after A013; Q18 up-next at A015; never mark Q18 completed.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine until roadmap; then MasterRoadmapV2 REUSE full-screen; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Question Eighteen.” and prior authorized state visible. Future narration remains hidden. No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **COLLISION CHECK:** Active zone roadmap full-screen x0..1920 y0..1080; recap cleared; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

### S10:A016 — First Missing Positive.

- **ANCHOR ID:** `S10:A016` (scene-local stable semantic ID; `Wxxxx` unresolved).
- **EXACT SPOKEN PHRASE:** “First Missing Positive.” (verbatim). Occurrence #16 in approved Scene 10 narration, in source order.
- **BEAT TYPE / PHASE:** ROADMAP RETURN.
- **WHAT APPEARS NOW:** Settle `First Missing Positive` title inside roadmap; scene ends on 17/227 and Q18 up next.
- **CENTER-STAGE HERO:** reusable explicit-boundary insight then native full-screen course roadmap; active zone: roadmap full-screen x0..1920 y0..1080; recap cleared.
- **CAUSE:** Spoken phrase “First Missing Positive.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `native full-screen roadmap` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Settle `First Missing Positive` title inside roadmap; scene ends on 17/227 and Q18 up next.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **CLEANUP / EXIT:** Prepare scene transition only after spoken exit; no timing guessed; keep conceptual handoff item intact.
- **PERSISTENT STATE:** ROADMAP: 16/227 until A013 authorizes 17/227; 17/227 afterwards; completed rows [1..17] only after A013; Q18 up-next at A015; never mark Q18 completed.
- **TRACE STEP IDS:** `N/A — non-trace scene`.
- **KIT COMPONENTS:** theme.ts, RoughLine until roadmap; then MasterRoadmapV2 REUSE full-screen; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “First Missing Positive.” and prior authorized state visible. Future narration remains hidden. No roadmap/progress update during board recap; 17/227 only after spoken progress, Q18 after named.
- **COLLISION CHECK:** Active zone roadmap full-screen x0..1920 y0..1080; recap cleared; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

## Roadmap props and visual phase isolation

Before A011, `MasterRoadmapV2` remains invisible and uses no screen space visible to the audience. At Q17 completion, the board-native recap hero fully recedes; only then mount/show native full-screen roadmap at `(0,0,1920,1080)` (never a nested card). `completedCount=16` until the line "seventeen out of two hundred twenty-seven" authorizes setting `completedCount=17`; `completedGlobalNums=[1..17]` then, `activeGlobalNum=17` during completion then `upNextGlobalNum=18` when Q18 announced. Verify canonical roadmap state semantics in implementation. Do not silently highlight Q18 complete.

## Critical semantic checkpoints — **NOT guessed frame numbers**

- **A001–A008: board-native recap only, no roadmap**
- **A009–A011: Q17 named/marked completed, roadmap begins only on completion**
- **A013: 17/227 not early**
- **A015–A016: Q18 First Missing Positive up next, not completed**

## Audit gate distinction

**This file is a Gate A pre-audio semantic plan.** Automated check report is adjacent as `Scene10_Audit.md`. Gate B cannot be completed before the actual MP3 + exact word-sync. DO NOT claim final 100/100 or rendered-frame correctness. Rendering and font-metric collision audit must be done after implementation.

**Word identity handoff:** later resolve `S10:A001..A016` to stable source word indices `Scene10:Wxxxx`, with start/end edges and end-exclusive `[startFrame,endFrameExclusive)`; use validated sync FPS/duration, never assumed FPS.
